// package: wfo.vanalytics.v2
// file: wfo/vanalytics/v2/flag_review.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class CreateFlagReviewRequest extends jspb.Message {
  hasFlagReview(): boolean;
  clearFlagReview(): void;
  getFlagReview(): FlagReview | undefined;
  setFlagReview(value?: FlagReview): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFlagReviewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFlagReviewRequest): CreateFlagReviewRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFlagReviewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFlagReviewRequest;
  static deserializeBinaryFromReader(message: CreateFlagReviewRequest, reader: jspb.BinaryReader): CreateFlagReviewRequest;
}

export namespace CreateFlagReviewRequest {
  export type AsObject = {
    flagReview?: FlagReview.AsObject,
  }
}

export class BulkCreateFlagReviewRequest extends jspb.Message {
  getFlagSid(): number;
  setFlagSid(value: number): void;

  getNotes(): string;
  setNotes(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BulkCreateFlagReviewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BulkCreateFlagReviewRequest): BulkCreateFlagReviewRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BulkCreateFlagReviewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BulkCreateFlagReviewRequest;
  static deserializeBinaryFromReader(message: BulkCreateFlagReviewRequest, reader: jspb.BinaryReader): BulkCreateFlagReviewRequest;
}

export namespace BulkCreateFlagReviewRequest {
  export type AsObject = {
    flagSid: number,
    notes: string,
  }
}

export class BulkCreateFlagReviewResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BulkCreateFlagReviewResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BulkCreateFlagReviewResponse): BulkCreateFlagReviewResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BulkCreateFlagReviewResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BulkCreateFlagReviewResponse;
  static deserializeBinaryFromReader(message: BulkCreateFlagReviewResponse, reader: jspb.BinaryReader): BulkCreateFlagReviewResponse;
}

export namespace BulkCreateFlagReviewResponse {
  export type AsObject = {
  }
}

export class ListFlagReviewsRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): void;

  getOrderBy(): string;
  setOrderBy(value: string): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getTranscriptSid(): number;
  setTranscriptSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFlagReviewsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFlagReviewsRequest): ListFlagReviewsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFlagReviewsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFlagReviewsRequest;
  static deserializeBinaryFromReader(message: ListFlagReviewsRequest, reader: jspb.BinaryReader): ListFlagReviewsRequest;
}

export namespace ListFlagReviewsRequest {
  export type AsObject = {
    pageSize: number,
    orderBy: string,
    pageToken: string,
    transcriptSid: number,
  }
}

export class ListFlagReviewsResponse extends jspb.Message {
  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  clearFlagReviewsList(): void;
  getFlagReviewsList(): Array<FlagReview>;
  setFlagReviewsList(value: Array<FlagReview>): void;
  addFlagReviews(value?: FlagReview, index?: number): FlagReview;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFlagReviewsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFlagReviewsResponse): ListFlagReviewsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFlagReviewsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFlagReviewsResponse;
  static deserializeBinaryFromReader(message: ListFlagReviewsResponse, reader: jspb.BinaryReader): ListFlagReviewsResponse;
}

export namespace ListFlagReviewsResponse {
  export type AsObject = {
    nextPageToken: string,
    flagReviewsList: Array<FlagReview.AsObject>,
  }
}

export class FlagReview extends jspb.Message {
  getFlagReviewSid(): number;
  setFlagReviewSid(value: number): void;

  getTranscriptSid(): number;
  setTranscriptSid(value: number): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getNotes(): string;
  setNotes(value: string): void;

  getFlagSnapshotSid(): number;
  setFlagSnapshotSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlagReview.AsObject;
  static toObject(includeInstance: boolean, msg: FlagReview): FlagReview.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlagReview, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlagReview;
  static deserializeBinaryFromReader(message: FlagReview, reader: jspb.BinaryReader): FlagReview;
}

export namespace FlagReview {
  export type AsObject = {
    flagReviewSid: number,
    transcriptSid: number,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    notes: string,
    flagSnapshotSid: number,
  }
}

