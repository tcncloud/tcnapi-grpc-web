// package: api.v1alpha1.vanalytics.notifier
// file: api/v1alpha1/vanalytics/notifier/service.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../../../annotations/authz_pb";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class GetNotifyRequest extends jspb.Message {
  getNotifyId(): string;
  setNotifyId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNotifyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNotifyRequest): GetNotifyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNotifyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNotifyRequest;
  static deserializeBinaryFromReader(message: GetNotifyRequest, reader: jspb.BinaryReader): GetNotifyRequest;
}

export namespace GetNotifyRequest {
  export type AsObject = {
    notifyId: string,
  }
}

export class Notify extends jspb.Message {
  getNotifyId(): string;
  setNotifyId(value: string): void;

  getStartTranscriptSid(): number;
  setStartTranscriptSid(value: number): void;

  getEndTranscriptSid(): number;
  setEndTranscriptSid(value: number): void;

  getFlagSid(): number;
  setFlagSid(value: number): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Notify.AsObject;
  static toObject(includeInstance: boolean, msg: Notify): Notify.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Notify, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Notify;
  static deserializeBinaryFromReader(message: Notify, reader: jspb.BinaryReader): Notify;
}

export namespace Notify {
  export type AsObject = {
    notifyId: string,
    startTranscriptSid: number,
    endTranscriptSid: number,
    flagSid: number,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

