// package: wfo.vanalytics.v2
// file: wfo/vanalytics/v2/filter.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as wfo_vanalytics_v2_transcript_pb from "../../../wfo/vanalytics/v2/transcript_pb";

export class CreateFilterRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): Filter | undefined;
  setFilter(value?: Filter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFilterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFilterRequest): CreateFilterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFilterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFilterRequest;
  static deserializeBinaryFromReader(message: CreateFilterRequest, reader: jspb.BinaryReader): CreateFilterRequest;
}

export namespace CreateFilterRequest {
  export type AsObject = {
    filter?: Filter.AsObject,
  }
}

export class CreateFilterResponse extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): Filter | undefined;
  setFilter(value?: Filter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFilterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFilterResponse): CreateFilterResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFilterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFilterResponse;
  static deserializeBinaryFromReader(message: CreateFilterResponse, reader: jspb.BinaryReader): CreateFilterResponse;
}

export namespace CreateFilterResponse {
  export type AsObject = {
    filter?: Filter.AsObject,
  }
}

export class Filter extends jspb.Message {
  getFilterSid(): number;
  setFilterSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  hasTranscriptQuery(): boolean;
  clearTranscriptQuery(): void;
  getTranscriptQuery(): wfo_vanalytics_v2_transcript_pb.TranscriptQuery | undefined;
  setTranscriptQuery(value?: wfo_vanalytics_v2_transcript_pb.TranscriptQuery): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getVersion(): number;
  setVersion(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Filter.AsObject;
  static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Filter;
  static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
}

export namespace Filter {
  export type AsObject = {
    filterSid: number,
    name: string,
    transcriptQuery?: wfo_vanalytics_v2_transcript_pb.TranscriptQuery.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    version: number,
  }
}

