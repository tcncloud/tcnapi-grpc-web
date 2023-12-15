// package: services.omnichannel.oauth.v1alpha1
// file: services/omnichannel/oauth/v1alpha1/entities.proto

import * as jspb from "google-protobuf";
import * as api_commons_omnichannel_pb from "../../../../api/commons/omnichannel_pb";

export class GetConnectedInboxOAuthURLRequest extends jspb.Message {
  getAuthenticationType(): api_commons_omnichannel_pb.ConnectedInboxAuthenticationTypeMap[keyof api_commons_omnichannel_pb.ConnectedInboxAuthenticationTypeMap];
  setAuthenticationType(value: api_commons_omnichannel_pb.ConnectedInboxAuthenticationTypeMap[keyof api_commons_omnichannel_pb.ConnectedInboxAuthenticationTypeMap]): void;

  getReturningRedirectUri(): string;
  setReturningRedirectUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConnectedInboxOAuthURLRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetConnectedInboxOAuthURLRequest): GetConnectedInboxOAuthURLRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConnectedInboxOAuthURLRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConnectedInboxOAuthURLRequest;
  static deserializeBinaryFromReader(message: GetConnectedInboxOAuthURLRequest, reader: jspb.BinaryReader): GetConnectedInboxOAuthURLRequest;
}

export namespace GetConnectedInboxOAuthURLRequest {
  export type AsObject = {
    authenticationType: api_commons_omnichannel_pb.ConnectedInboxAuthenticationTypeMap[keyof api_commons_omnichannel_pb.ConnectedInboxAuthenticationTypeMap],
    returningRedirectUri: string,
  }
}

export class GetConnectedInboxOAuthURLResponse extends jspb.Message {
  getOauthUrl(): string;
  setOauthUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConnectedInboxOAuthURLResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetConnectedInboxOAuthURLResponse): GetConnectedInboxOAuthURLResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConnectedInboxOAuthURLResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConnectedInboxOAuthURLResponse;
  static deserializeBinaryFromReader(message: GetConnectedInboxOAuthURLResponse, reader: jspb.BinaryReader): GetConnectedInboxOAuthURLResponse;
}

export namespace GetConnectedInboxOAuthURLResponse {
  export type AsObject = {
    oauthUrl: string,
  }
}

