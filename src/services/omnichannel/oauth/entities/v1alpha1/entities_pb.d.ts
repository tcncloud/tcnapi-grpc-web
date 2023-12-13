// package: services.omnichannel.oauth.entities.v1alpha1
// file: services/omnichannel/oauth/entities/v1alpha1/entities.proto

import * as jspb from "google-protobuf";
import * as api_commons_omnichannel_pb from "../../../../../api/commons/omnichannel_pb";

export class GetConnectedInboxOAuthSpecificationsRequest extends jspb.Message {
  getAuthenticationType(): api_commons_omnichannel_pb.ConnectedInboxAuthenticationTypeMap[keyof api_commons_omnichannel_pb.ConnectedInboxAuthenticationTypeMap];
  setAuthenticationType(value: api_commons_omnichannel_pb.ConnectedInboxAuthenticationTypeMap[keyof api_commons_omnichannel_pb.ConnectedInboxAuthenticationTypeMap]): void;

  getReturningRedirectUri(): string;
  setReturningRedirectUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConnectedInboxOAuthSpecificationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetConnectedInboxOAuthSpecificationsRequest): GetConnectedInboxOAuthSpecificationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConnectedInboxOAuthSpecificationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConnectedInboxOAuthSpecificationsRequest;
  static deserializeBinaryFromReader(message: GetConnectedInboxOAuthSpecificationsRequest, reader: jspb.BinaryReader): GetConnectedInboxOAuthSpecificationsRequest;
}

export namespace GetConnectedInboxOAuthSpecificationsRequest {
  export type AsObject = {
    authenticationType: api_commons_omnichannel_pb.ConnectedInboxAuthenticationTypeMap[keyof api_commons_omnichannel_pb.ConnectedInboxAuthenticationTypeMap],
    returningRedirectUri: string,
  }
}

export class GetConnectedInboxOAuthSpecificationsResponse extends jspb.Message {
  getRedirectUri(): string;
  setRedirectUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConnectedInboxOAuthSpecificationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetConnectedInboxOAuthSpecificationsResponse): GetConnectedInboxOAuthSpecificationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConnectedInboxOAuthSpecificationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConnectedInboxOAuthSpecificationsResponse;
  static deserializeBinaryFromReader(message: GetConnectedInboxOAuthSpecificationsResponse, reader: jspb.BinaryReader): GetConnectedInboxOAuthSpecificationsResponse;
}

export namespace GetConnectedInboxOAuthSpecificationsResponse {
  export type AsObject = {
    redirectUri: string,
  }
}

