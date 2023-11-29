// package: api.v1alpha1.org
// file: api/v1alpha1/org/auth_token.proto

import * as jspb from "google-protobuf";
import * as api_commons_org_auth_token_pb from "../../../api/commons/org/auth_token_pb";

export class CreateAuthTokenRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAuthTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAuthTokenRequest): CreateAuthTokenRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAuthTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAuthTokenRequest;
  static deserializeBinaryFromReader(message: CreateAuthTokenRequest, reader: jspb.BinaryReader): CreateAuthTokenRequest;
}

export namespace CreateAuthTokenRequest {
  export type AsObject = {
  }
}

export class CreateAuthTokenResponse extends jspb.Message {
  hasAuthToken(): boolean;
  clearAuthToken(): void;
  getAuthToken(): api_commons_org_auth_token_pb.AuthToken | undefined;
  setAuthToken(value?: api_commons_org_auth_token_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAuthTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAuthTokenResponse): CreateAuthTokenResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAuthTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAuthTokenResponse;
  static deserializeBinaryFromReader(message: CreateAuthTokenResponse, reader: jspb.BinaryReader): CreateAuthTokenResponse;
}

export namespace CreateAuthTokenResponse {
  export type AsObject = {
    authToken?: api_commons_org_auth_token_pb.AuthToken.AsObject,
  }
}

export class CreateAuthTokenByUserIdRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAuthTokenByUserIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAuthTokenByUserIdRequest): CreateAuthTokenByUserIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAuthTokenByUserIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAuthTokenByUserIdRequest;
  static deserializeBinaryFromReader(message: CreateAuthTokenByUserIdRequest, reader: jspb.BinaryReader): CreateAuthTokenByUserIdRequest;
}

export namespace CreateAuthTokenByUserIdRequest {
  export type AsObject = {
    userId: string,
  }
}

export class CreateAuthTokenByUserIdResponse extends jspb.Message {
  hasAuthToken(): boolean;
  clearAuthToken(): void;
  getAuthToken(): api_commons_org_auth_token_pb.AuthToken | undefined;
  setAuthToken(value?: api_commons_org_auth_token_pb.AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAuthTokenByUserIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAuthTokenByUserIdResponse): CreateAuthTokenByUserIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAuthTokenByUserIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAuthTokenByUserIdResponse;
  static deserializeBinaryFromReader(message: CreateAuthTokenByUserIdResponse, reader: jspb.BinaryReader): CreateAuthTokenByUserIdResponse;
}

export namespace CreateAuthTokenByUserIdResponse {
  export type AsObject = {
    authToken?: api_commons_org_auth_token_pb.AuthToken.AsObject,
  }
}

export class ListAuthTokensRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAuthTokensRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAuthTokensRequest): ListAuthTokensRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAuthTokensRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAuthTokensRequest;
  static deserializeBinaryFromReader(message: ListAuthTokensRequest, reader: jspb.BinaryReader): ListAuthTokensRequest;
}

export namespace ListAuthTokensRequest {
  export type AsObject = {
  }
}

export class ListAuthTokensResponse extends jspb.Message {
  clearAuthTokensList(): void;
  getAuthTokensList(): Array<api_commons_org_auth_token_pb.AuthToken>;
  setAuthTokensList(value: Array<api_commons_org_auth_token_pb.AuthToken>): void;
  addAuthTokens(value?: api_commons_org_auth_token_pb.AuthToken, index?: number): api_commons_org_auth_token_pb.AuthToken;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAuthTokensResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAuthTokensResponse): ListAuthTokensResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAuthTokensResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAuthTokensResponse;
  static deserializeBinaryFromReader(message: ListAuthTokensResponse, reader: jspb.BinaryReader): ListAuthTokensResponse;
}

export namespace ListAuthTokensResponse {
  export type AsObject = {
    authTokensList: Array<api_commons_org_auth_token_pb.AuthToken.AsObject>,
  }
}

export class ListAuthTokensByUserIdRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAuthTokensByUserIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAuthTokensByUserIdRequest): ListAuthTokensByUserIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAuthTokensByUserIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAuthTokensByUserIdRequest;
  static deserializeBinaryFromReader(message: ListAuthTokensByUserIdRequest, reader: jspb.BinaryReader): ListAuthTokensByUserIdRequest;
}

export namespace ListAuthTokensByUserIdRequest {
  export type AsObject = {
    userId: string,
  }
}

export class ListAuthTokensByUserIdResponse extends jspb.Message {
  clearAuthTokensList(): void;
  getAuthTokensList(): Array<api_commons_org_auth_token_pb.AuthToken>;
  setAuthTokensList(value: Array<api_commons_org_auth_token_pb.AuthToken>): void;
  addAuthTokens(value?: api_commons_org_auth_token_pb.AuthToken, index?: number): api_commons_org_auth_token_pb.AuthToken;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAuthTokensByUserIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAuthTokensByUserIdResponse): ListAuthTokensByUserIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAuthTokensByUserIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAuthTokensByUserIdResponse;
  static deserializeBinaryFromReader(message: ListAuthTokensByUserIdResponse, reader: jspb.BinaryReader): ListAuthTokensByUserIdResponse;
}

export namespace ListAuthTokensByUserIdResponse {
  export type AsObject = {
    authTokensList: Array<api_commons_org_auth_token_pb.AuthToken.AsObject>,
  }
}

export class SetAuthTokenExpirationRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetAuthTokenExpirationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetAuthTokenExpirationRequest): SetAuthTokenExpirationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetAuthTokenExpirationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetAuthTokenExpirationRequest;
  static deserializeBinaryFromReader(message: SetAuthTokenExpirationRequest, reader: jspb.BinaryReader): SetAuthTokenExpirationRequest;
}

export namespace SetAuthTokenExpirationRequest {
  export type AsObject = {
    token: string,
  }
}

export class SetAuthTokenExpirationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetAuthTokenExpirationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetAuthTokenExpirationResponse): SetAuthTokenExpirationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetAuthTokenExpirationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetAuthTokenExpirationResponse;
  static deserializeBinaryFromReader(message: SetAuthTokenExpirationResponse, reader: jspb.BinaryReader): SetAuthTokenExpirationResponse;
}

export namespace SetAuthTokenExpirationResponse {
  export type AsObject = {
  }
}

export class SetAuthTokenExpirationByUserIdRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetAuthTokenExpirationByUserIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetAuthTokenExpirationByUserIdRequest): SetAuthTokenExpirationByUserIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetAuthTokenExpirationByUserIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetAuthTokenExpirationByUserIdRequest;
  static deserializeBinaryFromReader(message: SetAuthTokenExpirationByUserIdRequest, reader: jspb.BinaryReader): SetAuthTokenExpirationByUserIdRequest;
}

export namespace SetAuthTokenExpirationByUserIdRequest {
  export type AsObject = {
    token: string,
    userId: string,
  }
}

export class SetAuthTokenExpirationByUserIdResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetAuthTokenExpirationByUserIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetAuthTokenExpirationByUserIdResponse): SetAuthTokenExpirationByUserIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetAuthTokenExpirationByUserIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetAuthTokenExpirationByUserIdResponse;
  static deserializeBinaryFromReader(message: SetAuthTokenExpirationByUserIdResponse, reader: jspb.BinaryReader): SetAuthTokenExpirationByUserIdResponse;
}

export namespace SetAuthTokenExpirationByUserIdResponse {
  export type AsObject = {
  }
}

export class DeleteAuthTokenRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAuthTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAuthTokenRequest): DeleteAuthTokenRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAuthTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAuthTokenRequest;
  static deserializeBinaryFromReader(message: DeleteAuthTokenRequest, reader: jspb.BinaryReader): DeleteAuthTokenRequest;
}

export namespace DeleteAuthTokenRequest {
  export type AsObject = {
    token: string,
  }
}

export class DeleteAuthTokenResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAuthTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAuthTokenResponse): DeleteAuthTokenResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAuthTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAuthTokenResponse;
  static deserializeBinaryFromReader(message: DeleteAuthTokenResponse, reader: jspb.BinaryReader): DeleteAuthTokenResponse;
}

export namespace DeleteAuthTokenResponse {
  export type AsObject = {
  }
}

export class DeleteAuthTokenByUserIdRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAuthTokenByUserIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAuthTokenByUserIdRequest): DeleteAuthTokenByUserIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAuthTokenByUserIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAuthTokenByUserIdRequest;
  static deserializeBinaryFromReader(message: DeleteAuthTokenByUserIdRequest, reader: jspb.BinaryReader): DeleteAuthTokenByUserIdRequest;
}

export namespace DeleteAuthTokenByUserIdRequest {
  export type AsObject = {
    token: string,
    userId: string,
  }
}

export class DeleteAuthTokenByUserIdResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAuthTokenByUserIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAuthTokenByUserIdResponse): DeleteAuthTokenByUserIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAuthTokenByUserIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAuthTokenByUserIdResponse;
  static deserializeBinaryFromReader(message: DeleteAuthTokenByUserIdResponse, reader: jspb.BinaryReader): DeleteAuthTokenByUserIdResponse;
}

export namespace DeleteAuthTokenByUserIdResponse {
  export type AsObject = {
  }
}

