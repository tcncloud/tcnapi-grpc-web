// package: wfo.vanalytics.v2
// file: wfo/vanalytics/v2/filter_snapshot.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as wfo_vanalytics_v2_transcript_pb from "../../../wfo/vanalytics/v2/transcript_pb";

export class FilterSnapshot extends jspb.Message {
  getFilterSnapshotSid(): number;
  setFilterSnapshotSid(value: number): void;

  getFilterSid(): number;
  setFilterSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getVersion(): number;
  setVersion(value: number): void;

  hasTranscriptQuery(): boolean;
  clearTranscriptQuery(): void;
  getTranscriptQuery(): wfo_vanalytics_v2_transcript_pb.TranscriptQuery | undefined;
  setTranscriptQuery(value?: wfo_vanalytics_v2_transcript_pb.TranscriptQuery): void;

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
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    version: number,
    transcriptQuery?: wfo_vanalytics_v2_transcript_pb.TranscriptQuery.AsObject,
  }
}

