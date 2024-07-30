// package: api.v1alpha1.exile.station.finvi.v1
// file: api/v1alpha1/exile/station/finvi/v1/service.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../../../../../annotations/authz_pb";
import * as google_api_annotations_pb from "../../../../../../google/api/annotations_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class PopAccountReq extends jspb.Message {
  getRecordId(): string;
  setRecordId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  getAlternateId(): string;
  setAlternateId(value: string): void;

  getCallSid(): number;
  setCallSid(value: number): void;

  getCallType(): string;
  setCallType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PopAccountReq.AsObject;
  static toObject(includeInstance: boolean, msg: PopAccountReq): PopAccountReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PopAccountReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PopAccountReq;
  static deserializeBinaryFromReader(message: PopAccountReq, reader: jspb.BinaryReader): PopAccountReq;
}

export namespace PopAccountReq {
  export type AsObject = {
    recordId: string,
    userId: string,
    alternateId: string,
    callSid: number,
    callType: string,
  }
}

export class PopAccountRes extends jspb.Message {
  getJobId(): number;
  setJobId(value: number): void;

  getAsync(): boolean;
  setAsync(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PopAccountRes.AsObject;
  static toObject(includeInstance: boolean, msg: PopAccountRes): PopAccountRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PopAccountRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PopAccountRes;
  static deserializeBinaryFromReader(message: PopAccountRes, reader: jspb.BinaryReader): PopAccountRes;
}

export namespace PopAccountRes {
  export type AsObject = {
    jobId: number,
    async: boolean,
  }
}

