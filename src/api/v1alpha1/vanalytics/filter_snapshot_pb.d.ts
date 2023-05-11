// package: api.v1alpha1.vanalytics
// file: api/v1alpha1/vanalytics/filter_snapshot.proto

import * as jspb from "google-protobuf";
import * as api_v1alpha1_vanalytics_transcript_pb from "../../../api/v1alpha1/vanalytics/transcript_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class FilterSnapshot extends jspb.Message {
  getFilterSnapshotSid(): number;
  setFilterSnapshotSid(value: number): void;

  getFilterSid(): number;
  setFilterSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  hasSearchRequest(): boolean;
  clearSearchRequest(): void;
  getSearchRequest(): api_v1alpha1_vanalytics_transcript_pb.SearchRequest | undefined;
  setSearchRequest(value?: api_v1alpha1_vanalytics_transcript_pb.SearchRequest): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getVersion(): number;
  setVersion(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: FilterSnapshot): FilterSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FilterSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterSnapshot;
  static deserializeBinaryFromReader(message: FilterSnapshot, reader: jspb.BinaryReader): FilterSnapshot;
}

export namespace FilterSnapshot {
  export type AsObject = {
    filterSnapshotSid: number,
    filterSid: number,
    name: string,
    searchRequest?: api_v1alpha1_vanalytics_transcript_pb.SearchRequest.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    version: number,
  }
}

