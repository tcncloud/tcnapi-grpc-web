// package: api.v1alpha1.vmds
// file: api/v1alpha1/vmds/service.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../../annotations/authz_pb";
import * as api_commons_acd_pb from "../../../api/commons/acd_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";

export class DownloadSpecifiedMessagesRequest extends jspb.Message {
  clearMessagesList(): void;
  getMessagesList(): Array<DownloadSpecifiedMessagesRequest.MessageRequest>;
  setMessagesList(value: Array<DownloadSpecifiedMessagesRequest.MessageRequest>): void;
  addMessages(value?: DownloadSpecifiedMessagesRequest.MessageRequest, index?: number): DownloadSpecifiedMessagesRequest.MessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadSpecifiedMessagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadSpecifiedMessagesRequest): DownloadSpecifiedMessagesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownloadSpecifiedMessagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadSpecifiedMessagesRequest;
  static deserializeBinaryFromReader(message: DownloadSpecifiedMessagesRequest, reader: jspb.BinaryReader): DownloadSpecifiedMessagesRequest;
}

export namespace DownloadSpecifiedMessagesRequest {
  export type AsObject = {
    messagesList: Array<DownloadSpecifiedMessagesRequest.MessageRequest.AsObject>,
  }

  export class MessageRequest extends jspb.Message {
    getMailBox(): string;
    setMailBox(value: string): void;

    getCallerSid(): string;
    setCallerSid(value: string): void;

    getCallerType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
    setCallerType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MessageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MessageRequest): MessageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MessageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MessageRequest;
    static deserializeBinaryFromReader(message: MessageRequest, reader: jspb.BinaryReader): MessageRequest;
  }

  export namespace MessageRequest {
    export type AsObject = {
      mailBox: string,
      callerSid: string,
      callerType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
    }
  }
}

export class DownloadSpecifiedMessagesResponse extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadSpecifiedMessagesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadSpecifiedMessagesResponse): DownloadSpecifiedMessagesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownloadSpecifiedMessagesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadSpecifiedMessagesResponse;
  static deserializeBinaryFromReader(message: DownloadSpecifiedMessagesResponse, reader: jspb.BinaryReader): DownloadSpecifiedMessagesResponse;
}

export namespace DownloadSpecifiedMessagesResponse {
  export type AsObject = {
    url: string,
  }
}

