// package: api.v1alpha1.vanalytics
// file: api/v1alpha1/vanalytics/flag_transcript.proto

import * as jspb from "google-protobuf";
import * as api_v1alpha1_vanalytics_flag_pb from "../../../api/v1alpha1/vanalytics/flag_pb";
import * as api_v1alpha1_vanalytics_transcript_pb from "../../../api/v1alpha1/vanalytics/transcript_pb";

export class CreateFlagTranscriptRequest extends jspb.Message {
  clearTranscriptSidsList(): void;
  getTranscriptSidsList(): Array<number>;
  setTranscriptSidsList(value: Array<number>): void;
  addTranscriptSids(value: number, index?: number): number;

  hasFlag(): boolean;
  clearFlag(): void;
  getFlag(): api_v1alpha1_vanalytics_flag_pb.Flag | undefined;
  setFlag(value?: api_v1alpha1_vanalytics_flag_pb.Flag): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFlagTranscriptRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFlagTranscriptRequest): CreateFlagTranscriptRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFlagTranscriptRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFlagTranscriptRequest;
  static deserializeBinaryFromReader(message: CreateFlagTranscriptRequest, reader: jspb.BinaryReader): CreateFlagTranscriptRequest;
}

export namespace CreateFlagTranscriptRequest {
  export type AsObject = {
    transcriptSidsList: Array<number>,
    flag?: api_v1alpha1_vanalytics_flag_pb.Flag.AsObject,
  }
}

export class CreateFlagTranscriptResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFlagTranscriptResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFlagTranscriptResponse): CreateFlagTranscriptResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFlagTranscriptResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFlagTranscriptResponse;
  static deserializeBinaryFromReader(message: CreateFlagTranscriptResponse, reader: jspb.BinaryReader): CreateFlagTranscriptResponse;
}

export namespace CreateFlagTranscriptResponse {
  export type AsObject = {
  }
}

export class SearchFlagTranscriptsRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  hasFlagSid(): boolean;
  clearFlagSid(): void;
  getFlagSid(): SearchFlagTranscriptsRequest.FlagSid | undefined;
  setFlagSid(value?: SearchFlagTranscriptsRequest.FlagSid): void;

  getFlagReviewStatus(): FlagReviewStatusMap[keyof FlagReviewStatusMap];
  setFlagReviewStatus(value: FlagReviewStatusMap[keyof FlagReviewStatusMap]): void;

  hasNotifyGroupId(): boolean;
  clearNotifyGroupId(): void;
  getNotifyGroupId(): SearchFlagTranscriptsRequest.NotifyGroupId | undefined;
  setNotifyGroupId(value?: SearchFlagTranscriptsRequest.NotifyGroupId): void;

  hasReviewGroupId(): boolean;
  clearReviewGroupId(): void;
  getReviewGroupId(): SearchFlagTranscriptsRequest.ReviewGroupId | undefined;
  setReviewGroupId(value?: SearchFlagTranscriptsRequest.ReviewGroupId): void;

  getStartTranscriptSid(): number;
  setStartTranscriptSid(value: number): void;

  getEndTranscriptSid(): number;
  setEndTranscriptSid(value: number): void;

  getOrderBy(): string;
  setOrderBy(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchFlagTranscriptsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchFlagTranscriptsRequest): SearchFlagTranscriptsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchFlagTranscriptsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchFlagTranscriptsRequest;
  static deserializeBinaryFromReader(message: SearchFlagTranscriptsRequest, reader: jspb.BinaryReader): SearchFlagTranscriptsRequest;
}

export namespace SearchFlagTranscriptsRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: string,
    flagSid?: SearchFlagTranscriptsRequest.FlagSid.AsObject,
    flagReviewStatus: FlagReviewStatusMap[keyof FlagReviewStatusMap],
    notifyGroupId?: SearchFlagTranscriptsRequest.NotifyGroupId.AsObject,
    reviewGroupId?: SearchFlagTranscriptsRequest.ReviewGroupId.AsObject,
    startTranscriptSid: number,
    endTranscriptSid: number,
    orderBy: string,
  }

  export class FlagSid extends jspb.Message {
    clearFilterList(): void;
    getFilterList(): Array<number>;
    setFilterList(value: Array<number>): void;
    addFilter(value: number, index?: number): number;

    getMatch(): number;
    setMatch(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FlagSid.AsObject;
    static toObject(includeInstance: boolean, msg: FlagSid): FlagSid.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FlagSid, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FlagSid;
    static deserializeBinaryFromReader(message: FlagSid, reader: jspb.BinaryReader): FlagSid;
  }

  export namespace FlagSid {
    export type AsObject = {
      filterList: Array<number>,
      match: number,
    }
  }

  export class NotifyGroupId extends jspb.Message {
    getIsNull(): boolean;
    setIsNull(value: boolean): void;

    clearFilterList(): void;
    getFilterList(): Array<string>;
    setFilterList(value: Array<string>): void;
    addFilter(value: string, index?: number): string;

    getMatch(): number;
    setMatch(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NotifyGroupId.AsObject;
    static toObject(includeInstance: boolean, msg: NotifyGroupId): NotifyGroupId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NotifyGroupId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NotifyGroupId;
    static deserializeBinaryFromReader(message: NotifyGroupId, reader: jspb.BinaryReader): NotifyGroupId;
  }

  export namespace NotifyGroupId {
    export type AsObject = {
      isNull: boolean,
      filterList: Array<string>,
      match: number,
    }
  }

  export class ReviewGroupId extends jspb.Message {
    getIsNull(): boolean;
    setIsNull(value: boolean): void;

    clearFilterList(): void;
    getFilterList(): Array<string>;
    setFilterList(value: Array<string>): void;
    addFilter(value: string, index?: number): string;

    getMatch(): number;
    setMatch(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReviewGroupId.AsObject;
    static toObject(includeInstance: boolean, msg: ReviewGroupId): ReviewGroupId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReviewGroupId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReviewGroupId;
    static deserializeBinaryFromReader(message: ReviewGroupId, reader: jspb.BinaryReader): ReviewGroupId;
  }

  export namespace ReviewGroupId {
    export type AsObject = {
      isNull: boolean,
      filterList: Array<string>,
      match: number,
    }
  }
}

export class SearchFlagTranscriptsResponse extends jspb.Message {
  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  clearHitsList(): void;
  getHitsList(): Array<SearchFlagTranscriptsResponse.Hit>;
  setHitsList(value: Array<SearchFlagTranscriptsResponse.Hit>): void;
  addHits(value?: SearchFlagTranscriptsResponse.Hit, index?: number): SearchFlagTranscriptsResponse.Hit;

  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchFlagTranscriptsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchFlagTranscriptsResponse): SearchFlagTranscriptsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchFlagTranscriptsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchFlagTranscriptsResponse;
  static deserializeBinaryFromReader(message: SearchFlagTranscriptsResponse, reader: jspb.BinaryReader): SearchFlagTranscriptsResponse;
}

export namespace SearchFlagTranscriptsResponse {
  export type AsObject = {
    nextPageToken: string,
    hitsList: Array<SearchFlagTranscriptsResponse.Hit.AsObject>,
    total: number,
  }

  export class Hit extends jspb.Message {
    hasTranscript(): boolean;
    clearTranscript(): void;
    getTranscript(): api_v1alpha1_vanalytics_transcript_pb.Transcript | undefined;
    setTranscript(value?: api_v1alpha1_vanalytics_transcript_pb.Transcript): void;

    clearFlagSnapshotSidsList(): void;
    getFlagSnapshotSidsList(): Array<number>;
    setFlagSnapshotSidsList(value: Array<number>): void;
    addFlagSnapshotSids(value: number, index?: number): number;

    getReviewedMap(): jspb.Map<number, boolean>;
    clearReviewedMap(): void;
    clearFlagSidsList(): void;
    getFlagSidsList(): Array<number>;
    setFlagSidsList(value: Array<number>): void;
    addFlagSids(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Hit.AsObject;
    static toObject(includeInstance: boolean, msg: Hit): Hit.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Hit, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Hit;
    static deserializeBinaryFromReader(message: Hit, reader: jspb.BinaryReader): Hit;
  }

  export namespace Hit {
    export type AsObject = {
      transcript?: api_v1alpha1_vanalytics_transcript_pb.Transcript.AsObject,
      flagSnapshotSidsList: Array<number>,
      reviewedMap: Array<[number, boolean]>,
      flagSidsList: Array<number>,
    }
  }
}

export interface FlagReviewStatusMap {
  ANY: 0;
  TODO: 1;
  DONE: 2;
  NONE: 3;
}

export const FlagReviewStatus: FlagReviewStatusMap;

