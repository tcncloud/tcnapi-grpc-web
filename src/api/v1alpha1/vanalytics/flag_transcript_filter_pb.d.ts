// package: api.v1alpha1.vanalytics
// file: api/v1alpha1/vanalytics/flag_transcript_filter.proto

import * as jspb from "google-protobuf";
import * as api_v1alpha1_vanalytics_filter_snapshot_pb from "../../../api/v1alpha1/vanalytics/filter_snapshot_pb";
import * as api_v1alpha1_vanalytics_flag_snapshot_pb from "../../../api/v1alpha1/vanalytics/flag_snapshot_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class ListFlagTranscriptFiltersRequest extends jspb.Message {
  getTranscriptSid(): number;
  setTranscriptSid(value: number): void;

  hasFlagSnapshotMask(): boolean;
  clearFlagSnapshotMask(): void;
  getFlagSnapshotMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFlagSnapshotMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasFilterSnapshotMask(): boolean;
  clearFilterSnapshotMask(): void;
  getFilterSnapshotMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFilterSnapshotMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFlagTranscriptFiltersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFlagTranscriptFiltersRequest): ListFlagTranscriptFiltersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFlagTranscriptFiltersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFlagTranscriptFiltersRequest;
  static deserializeBinaryFromReader(message: ListFlagTranscriptFiltersRequest, reader: jspb.BinaryReader): ListFlagTranscriptFiltersRequest;
}

export namespace ListFlagTranscriptFiltersRequest {
  export type AsObject = {
    transcriptSid: number,
    flagSnapshotMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    filterSnapshotMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ListFlagTranscriptFiltersResponse extends jspb.Message {
  clearFlagTranscriptFiltersList(): void;
  getFlagTranscriptFiltersList(): Array<FlagTranscriptFilter>;
  setFlagTranscriptFiltersList(value: Array<FlagTranscriptFilter>): void;
  addFlagTranscriptFilters(value?: FlagTranscriptFilter, index?: number): FlagTranscriptFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFlagTranscriptFiltersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFlagTranscriptFiltersResponse): ListFlagTranscriptFiltersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFlagTranscriptFiltersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFlagTranscriptFiltersResponse;
  static deserializeBinaryFromReader(message: ListFlagTranscriptFiltersResponse, reader: jspb.BinaryReader): ListFlagTranscriptFiltersResponse;
}

export namespace ListFlagTranscriptFiltersResponse {
  export type AsObject = {
    flagTranscriptFiltersList: Array<FlagTranscriptFilter.AsObject>,
  }
}

export class FlagTranscriptFilter extends jspb.Message {
  hasFlagSnapshot(): boolean;
  clearFlagSnapshot(): void;
  getFlagSnapshot(): api_v1alpha1_vanalytics_flag_snapshot_pb.FlagSnapshot | undefined;
  setFlagSnapshot(value?: api_v1alpha1_vanalytics_flag_snapshot_pb.FlagSnapshot): void;

  hasFilterSnapshot(): boolean;
  clearFilterSnapshot(): void;
  getFilterSnapshot(): api_v1alpha1_vanalytics_filter_snapshot_pb.FilterSnapshot | undefined;
  setFilterSnapshot(value?: api_v1alpha1_vanalytics_filter_snapshot_pb.FilterSnapshot): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlagTranscriptFilter.AsObject;
  static toObject(includeInstance: boolean, msg: FlagTranscriptFilter): FlagTranscriptFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlagTranscriptFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlagTranscriptFilter;
  static deserializeBinaryFromReader(message: FlagTranscriptFilter, reader: jspb.BinaryReader): FlagTranscriptFilter;
}

export namespace FlagTranscriptFilter {
  export type AsObject = {
    flagSnapshot?: api_v1alpha1_vanalytics_flag_snapshot_pb.FlagSnapshot.AsObject,
    filterSnapshot?: api_v1alpha1_vanalytics_filter_snapshot_pb.FilterSnapshot.AsObject,
  }
}

