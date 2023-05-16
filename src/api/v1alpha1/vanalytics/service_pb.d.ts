// package: api.v1alpha1.vanalytics
// file: api/v1alpha1/vanalytics/service.proto

import * as jspb from "google-protobuf";
import * as api_v1alpha1_vanalytics_filter_pb from "../../../api/v1alpha1/vanalytics/filter_pb";
import * as api_v1alpha1_vanalytics_flag_pb from "../../../api/v1alpha1/vanalytics/flag_pb";
import * as api_v1alpha1_vanalytics_flag_filter_pb from "../../../api/v1alpha1/vanalytics/flag_filter_pb";
import * as api_v1alpha1_vanalytics_flag_review_pb from "../../../api/v1alpha1/vanalytics/flag_review_pb";
import * as api_v1alpha1_vanalytics_flag_snapshot_pb from "../../../api/v1alpha1/vanalytics/flag_snapshot_pb";
import * as api_v1alpha1_vanalytics_flag_transcript_pb from "../../../api/v1alpha1/vanalytics/flag_transcript_pb";
import * as api_v1alpha1_vanalytics_flag_transcript_filter_pb from "../../../api/v1alpha1/vanalytics/flag_transcript_filter_pb";
import * as api_v1alpha1_vanalytics_transcript_pb from "../../../api/v1alpha1/vanalytics/transcript_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class AuditRequest extends jspb.Message {
  hasSince(): boolean;
  clearSince(): void;
  getSince(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSince(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUntil(): boolean;
  clearUntil(): void;
  getUntil(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUntil(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuditRequest): AuditRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditRequest;
  static deserializeBinaryFromReader(message: AuditRequest, reader: jspb.BinaryReader): AuditRequest;
}

export namespace AuditRequest {
  export type AsObject = {
    since?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    until?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class AuditResponse extends jspb.Message {
  getAudioTime(): number;
  setAudioTime(value: number): void;

  getBilledAudioTime(): number;
  setBilledAudioTime(value: number): void;

  hasLastUsage(): boolean;
  clearLastUsage(): void;
  getLastUsage(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUsage(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getBilledTranscripts(): number;
  setBilledTranscripts(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuditResponse): AuditResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditResponse;
  static deserializeBinaryFromReader(message: AuditResponse, reader: jspb.BinaryReader): AuditResponse;
}

export namespace AuditResponse {
  export type AsObject = {
    audioTime: number,
    billedAudioTime: number,
    lastUsage?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    billedTranscripts: number,
  }
}

export class GetRecordingUrlRequest extends jspb.Message {
  getTranscriptSid(): number;
  setTranscriptSid(value: number): void;

  getKind(): string;
  setKind(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecordingUrlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecordingUrlRequest): GetRecordingUrlRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRecordingUrlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecordingUrlRequest;
  static deserializeBinaryFromReader(message: GetRecordingUrlRequest, reader: jspb.BinaryReader): GetRecordingUrlRequest;
}

export namespace GetRecordingUrlRequest {
  export type AsObject = {
    transcriptSid: number,
    kind: string,
  }
}

export class GetRecordingUrlResponse extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecordingUrlResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecordingUrlResponse): GetRecordingUrlResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRecordingUrlResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecordingUrlResponse;
  static deserializeBinaryFromReader(message: GetRecordingUrlResponse, reader: jspb.BinaryReader): GetRecordingUrlResponse;
}

export namespace GetRecordingUrlResponse {
  export type AsObject = {
    url: string,
  }
}

export class ListBillingSpanRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBillingSpanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBillingSpanRequest): ListBillingSpanRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBillingSpanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBillingSpanRequest;
  static deserializeBinaryFromReader(message: ListBillingSpanRequest, reader: jspb.BinaryReader): ListBillingSpanRequest;
}

export namespace ListBillingSpanRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: string,
  }
}

export class ListBillingSpanResponse extends jspb.Message {
  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  clearSpansList(): void;
  getSpansList(): Array<BillingSpan>;
  setSpansList(value: Array<BillingSpan>): void;
  addSpans(value?: BillingSpan, index?: number): BillingSpan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBillingSpanResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBillingSpanResponse): ListBillingSpanResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBillingSpanResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBillingSpanResponse;
  static deserializeBinaryFromReader(message: ListBillingSpanResponse, reader: jspb.BinaryReader): ListBillingSpanResponse;
}

export namespace ListBillingSpanResponse {
  export type AsObject = {
    nextPageToken: string,
    spansList: Array<BillingSpan.AsObject>,
  }
}

export class BillingSpan extends jspb.Message {
  getCalls(): number;
  setCalls(value: number): void;

  getHours(): number;
  setHours(value: number): void;

  getCost(): number;
  setCost(value: number): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingSpan.AsObject;
  static toObject(includeInstance: boolean, msg: BillingSpan): BillingSpan.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillingSpan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingSpan;
  static deserializeBinaryFromReader(message: BillingSpan, reader: jspb.BinaryReader): BillingSpan;
}

export namespace BillingSpan {
  export type AsObject = {
    calls: number,
    hours: number,
    cost: number,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

