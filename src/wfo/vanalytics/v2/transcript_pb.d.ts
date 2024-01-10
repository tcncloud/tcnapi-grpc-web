// package: wfo.vanalytics.v2
// file: wfo/vanalytics/v2/transcript.proto

import * as jspb from "google-protobuf";
import * as api_commons_acd_pb from "../../../api/commons/acd_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Transcript extends jspb.Message {
  hasCall(): boolean;
  clearCall(): void;
  getCall(): Call | undefined;
  setCall(value?: Call): void;

  hasSms(): boolean;
  clearSms(): void;
  getSms(): Sms | undefined;
  setSms(value?: Sms): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getChannel(): ChannelMap[keyof ChannelMap];
  setChannel(value: ChannelMap[keyof ChannelMap]): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDeleteTime(): boolean;
  clearDeleteTime(): void;
  getDeleteTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeleteTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasFlagSummary(): boolean;
  clearFlagSummary(): void;
  getFlagSummary(): FlagSummary | undefined;
  setFlagSummary(value?: FlagSummary): void;

  getTranscriptSid(): number;
  setTranscriptSid(value: number): void;

  getMetadataCase(): Transcript.MetadataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transcript.AsObject;
  static toObject(includeInstance: boolean, msg: Transcript): Transcript.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Transcript, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transcript;
  static deserializeBinaryFromReader(message: Transcript, reader: jspb.BinaryReader): Transcript;
}

export namespace Transcript {
  export type AsObject = {
    call?: Call.AsObject,
    sms?: Sms.AsObject,
    orgId: string,
    channel: ChannelMap[keyof ChannelMap],
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deleteTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    flagSummary?: FlagSummary.AsObject,
    transcriptSid: number,
  }

  export enum MetadataCase {
    METADATA_NOT_SET = 0,
    CALL = 1,
    SMS = 2,
  }
}

export class FlagSummary extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  getPrioritySum(): number;
  setPrioritySum(value: number): void;

  getPriorityMax(): number;
  setPriorityMax(value: number): void;

  hasNeedReview(): boolean;
  clearNeedReview(): void;
  getNeedReview(): FlagSummary.NeedReview | undefined;
  setNeedReview(value?: FlagSummary.NeedReview): void;

  clearFlagsList(): void;
  getFlagsList(): Array<FlagSummary.Flag>;
  setFlagsList(value: Array<FlagSummary.Flag>): void;
  addFlags(value?: FlagSummary.Flag, index?: number): FlagSummary.Flag;

  getReviewStatus(): ReviewStatusMap[keyof ReviewStatusMap];
  setReviewStatus(value: ReviewStatusMap[keyof ReviewStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlagSummary.AsObject;
  static toObject(includeInstance: boolean, msg: FlagSummary): FlagSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlagSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlagSummary;
  static deserializeBinaryFromReader(message: FlagSummary, reader: jspb.BinaryReader): FlagSummary;
}

export namespace FlagSummary {
  export type AsObject = {
    count: number,
    prioritySum: number,
    priorityMax: number,
    needReview?: FlagSummary.NeedReview.AsObject,
    flagsList: Array<FlagSummary.Flag.AsObject>,
    reviewStatus: ReviewStatusMap[keyof ReviewStatusMap],
  }

  export class NeedReview extends jspb.Message {
    getPrioritySum(): number;
    setPrioritySum(value: number): void;

    getPriorityMax(): number;
    setPriorityMax(value: number): void;

    getCount(): number;
    setCount(value: number): void;

    clearFlagSidsList(): void;
    getFlagSidsList(): Array<number>;
    setFlagSidsList(value: Array<number>): void;
    addFlagSids(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NeedReview.AsObject;
    static toObject(includeInstance: boolean, msg: NeedReview): NeedReview.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NeedReview, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NeedReview;
    static deserializeBinaryFromReader(message: NeedReview, reader: jspb.BinaryReader): NeedReview;
  }

  export namespace NeedReview {
    export type AsObject = {
      prioritySum: number,
      priorityMax: number,
      count: number,
      flagSidsList: Array<number>,
    }
  }

  export class Flag extends jspb.Message {
    getFlagSid(): number;
    setFlagSid(value: number): void;

    getName(): string;
    setName(value: string): void;

    getPriority(): number;
    setPriority(value: number): void;

    getVersion(): number;
    setVersion(value: number): void;

    clearFiltersList(): void;
    getFiltersList(): Array<FlagSummary.Filter>;
    setFiltersList(value: Array<FlagSummary.Filter>): void;
    addFilters(value?: FlagSummary.Filter, index?: number): FlagSummary.Filter;

    getMustReview(): boolean;
    setMustReview(value: boolean): void;

    getMustNotify(): boolean;
    setMustNotify(value: boolean): void;

    clearReviewsList(): void;
    getReviewsList(): Array<FlagSummary.Review>;
    setReviewsList(value: Array<FlagSummary.Review>): void;
    addReviews(value?: FlagSummary.Review, index?: number): FlagSummary.Review;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Flag.AsObject;
    static toObject(includeInstance: boolean, msg: Flag): Flag.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Flag, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Flag;
    static deserializeBinaryFromReader(message: Flag, reader: jspb.BinaryReader): Flag;
  }

  export namespace Flag {
    export type AsObject = {
      flagSid: number,
      name: string,
      priority: number,
      version: number,
      filtersList: Array<FlagSummary.Filter.AsObject>,
      mustReview: boolean,
      mustNotify: boolean,
      reviewsList: Array<FlagSummary.Review.AsObject>,
    }
  }

  export class Filter extends jspb.Message {
    getJoinKey(): string;
    setJoinKey(value: string): void;

    getFlagSid(): number;
    setFlagSid(value: number): void;

    getFilterSid(): number;
    setFilterSid(value: number): void;

    getVersion(): number;
    setVersion(value: number): void;

    getName(): string;
    setName(value: string): void;

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
      joinKey: string,
      flagSid: number,
      filterSid: number,
      version: number,
      name: string,
    }
  }

  export class Review extends jspb.Message {
    getJoinKey(): string;
    setJoinKey(value: string): void;

    getFlagSid(): number;
    setFlagSid(value: number): void;

    getUserId(): string;
    setUserId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Review.AsObject;
    static toObject(includeInstance: boolean, msg: Review): Review.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Review, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Review;
    static deserializeBinaryFromReader(message: Review, reader: jspb.BinaryReader): Review;
  }

  export namespace Review {
    export type AsObject = {
      joinKey: string,
      flagSid: number,
      userId: string,
    }
  }
}

export class Sms extends jspb.Message {
  getConversationSid(): number;
  setConversationSid(value: number): void;

  clearThreadsList(): void;
  getThreadsList(): Array<Sms.Thread>;
  setThreadsList(value: Array<Sms.Thread>): void;
  addThreads(value?: Sms.Thread, index?: number): Sms.Thread;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sms.AsObject;
  static toObject(includeInstance: boolean, msg: Sms): Sms.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Sms, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sms;
  static deserializeBinaryFromReader(message: Sms, reader: jspb.BinaryReader): Sms;
}

export namespace Sms {
  export type AsObject = {
    conversationSid: number,
    threadsList: Array<Sms.Thread.AsObject>,
  }

  export class Thread extends jspb.Message {
    getId(): number;
    setId(value: number): void;

    clearSegmentsList(): void;
    getSegmentsList(): Array<Sms.Segment>;
    setSegmentsList(value: Array<Sms.Segment>): void;
    addSegments(value?: Sms.Segment, index?: number): Sms.Segment;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Thread.AsObject;
    static toObject(includeInstance: boolean, msg: Thread): Thread.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Thread, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Thread;
    static deserializeBinaryFromReader(message: Thread, reader: jspb.BinaryReader): Thread;
  }

  export namespace Thread {
    export type AsObject = {
      id: number,
      segmentsList: Array<Sms.Segment.AsObject>,
    }
  }

  export class Segment extends jspb.Message {
    getText(): string;
    setText(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Segment.AsObject;
    static toObject(includeInstance: boolean, msg: Segment): Segment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Segment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Segment;
    static deserializeBinaryFromReader(message: Segment, reader: jspb.BinaryReader): Segment;
  }

  export namespace Segment {
    export type AsObject = {
      text: string,
    }
  }
}

export class Call extends jspb.Message {
  getCallSid(): number;
  setCallSid(value: number): void;

  getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  getAudioTime(): number;
  setAudioTime(value: number): void;

  clearThreadsList(): void;
  getThreadsList(): Array<Call.Thread>;
  setThreadsList(value: Array<Call.Thread>): void;
  addThreads(value?: Call.Thread, index?: number): Call.Thread;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Call.AsObject;
  static toObject(includeInstance: boolean, msg: Call): Call.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Call, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Call;
  static deserializeBinaryFromReader(message: Call, reader: jspb.BinaryReader): Call;
}

export namespace Call {
  export type AsObject = {
    callSid: number,
    callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
    audioTime: number,
    threadsList: Array<Call.Thread.AsObject>,
  }

  export class Thread extends jspb.Message {
    getId(): number;
    setId(value: number): void;

    clearSegmentsList(): void;
    getSegmentsList(): Array<Call.Segment>;
    setSegmentsList(value: Array<Call.Segment>): void;
    addSegments(value?: Call.Segment, index?: number): Call.Segment;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Thread.AsObject;
    static toObject(includeInstance: boolean, msg: Thread): Thread.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Thread, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Thread;
    static deserializeBinaryFromReader(message: Thread, reader: jspb.BinaryReader): Thread;
  }

  export namespace Thread {
    export type AsObject = {
      id: number,
      segmentsList: Array<Call.Segment.AsObject>,
    }
  }

  export class Segment extends jspb.Message {
    getText(): string;
    setText(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Segment.AsObject;
    static toObject(includeInstance: boolean, msg: Segment): Segment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Segment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Segment;
    static deserializeBinaryFromReader(message: Segment, reader: jspb.BinaryReader): Segment;
  }

  export namespace Segment {
    export type AsObject = {
      text: string,
    }
  }
}

export class SearchTranscriptsRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): void;

  getOrderBy(): string;
  setOrderBy(value: string): void;

  hasReadMask(): boolean;
  clearReadMask(): void;
  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasBoolQuery(): boolean;
  clearBoolQuery(): void;
  getBoolQuery(): TranscriptBoolQuery | undefined;
  setBoolQuery(value?: TranscriptBoolQuery): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchTranscriptsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchTranscriptsRequest): SearchTranscriptsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchTranscriptsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchTranscriptsRequest;
  static deserializeBinaryFromReader(message: SearchTranscriptsRequest, reader: jspb.BinaryReader): SearchTranscriptsRequest;
}

export namespace SearchTranscriptsRequest {
  export type AsObject = {
    pageSize: number,
    orderBy: string,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    boolQuery?: TranscriptBoolQuery.AsObject,
    pageToken: string,
  }
}

export class SearchTranscriptsResponse extends jspb.Message {
  clearHitsList(): void;
  getHitsList(): Array<SearchTranscriptsResponse.Hit>;
  setHitsList(value: Array<SearchTranscriptsResponse.Hit>): void;
  addHits(value?: SearchTranscriptsResponse.Hit, index?: number): SearchTranscriptsResponse.Hit;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchTranscriptsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchTranscriptsResponse): SearchTranscriptsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchTranscriptsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchTranscriptsResponse;
  static deserializeBinaryFromReader(message: SearchTranscriptsResponse, reader: jspb.BinaryReader): SearchTranscriptsResponse;
}

export namespace SearchTranscriptsResponse {
  export type AsObject = {
    hitsList: Array<SearchTranscriptsResponse.Hit.AsObject>,
    nextPageToken: string,
  }

  export class Hit extends jspb.Message {
    hasTranscript(): boolean;
    clearTranscript(): void;
    getTranscript(): Transcript | undefined;
    setTranscript(value?: Transcript): void;

    getIndex(): string;
    setIndex(value: string): void;

    getVersion(): number;
    setVersion(value: number): void;

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
      transcript?: Transcript.AsObject,
      index: string,
      version: number,
    }
  }
}

export class TranscriptBoolQuery extends jspb.Message {
  hasTranscript(): boolean;
  clearTranscript(): void;
  getTranscript(): TranscriptQuery | undefined;
  setTranscript(value?: TranscriptQuery): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TranscriptBoolQuery.AsObject;
  static toObject(includeInstance: boolean, msg: TranscriptBoolQuery): TranscriptBoolQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TranscriptBoolQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TranscriptBoolQuery;
  static deserializeBinaryFromReader(message: TranscriptBoolQuery, reader: jspb.BinaryReader): TranscriptBoolQuery;
}

export namespace TranscriptBoolQuery {
  export type AsObject = {
    transcript?: TranscriptQuery.AsObject,
  }
}

export class TranscriptQuery extends jspb.Message {
  hasTranscriptSid(): boolean;
  clearTranscriptSid(): void;
  getTranscriptSid(): TranscriptQuery.TranscriptSid | undefined;
  setTranscriptSid(value?: TranscriptQuery.TranscriptSid): void;

  hasChannel(): boolean;
  clearChannel(): void;
  getChannel(): TranscriptQuery.Channel | undefined;
  setChannel(value?: TranscriptQuery.Channel): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): TranscriptQuery.Metadata | undefined;
  setMetadata(value?: TranscriptQuery.Metadata): void;

  hasThreads(): boolean;
  clearThreads(): void;
  getThreads(): TranscriptQuery.Threads | undefined;
  setThreads(value?: TranscriptQuery.Threads): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TranscriptQuery.AsObject;
  static toObject(includeInstance: boolean, msg: TranscriptQuery): TranscriptQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TranscriptQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TranscriptQuery;
  static deserializeBinaryFromReader(message: TranscriptQuery, reader: jspb.BinaryReader): TranscriptQuery;
}

export namespace TranscriptQuery {
  export type AsObject = {
    transcriptSid?: TranscriptQuery.TranscriptSid.AsObject,
    channel?: TranscriptQuery.Channel.AsObject,
    metadata?: TranscriptQuery.Metadata.AsObject,
    threads?: TranscriptQuery.Threads.AsObject,
  }

  export class TranscriptSid extends jspb.Message {
    clearAnyList(): void;
    getAnyList(): Array<number>;
    setAnyList(value: Array<number>): void;
    addAny(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TranscriptSid.AsObject;
    static toObject(includeInstance: boolean, msg: TranscriptSid): TranscriptSid.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TranscriptSid, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TranscriptSid;
    static deserializeBinaryFromReader(message: TranscriptSid, reader: jspb.BinaryReader): TranscriptSid;
  }

  export namespace TranscriptSid {
    export type AsObject = {
      anyList: Array<number>,
    }
  }

  export class Channel extends jspb.Message {
    clearAnyList(): void;
    getAnyList(): Array<ChannelMap[keyof ChannelMap]>;
    setAnyList(value: Array<ChannelMap[keyof ChannelMap]>): void;
    addAny(value: ChannelMap[keyof ChannelMap], index?: number): ChannelMap[keyof ChannelMap];

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Channel.AsObject;
    static toObject(includeInstance: boolean, msg: Channel): Channel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Channel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Channel;
    static deserializeBinaryFromReader(message: Channel, reader: jspb.BinaryReader): Channel;
  }

  export namespace Channel {
    export type AsObject = {
      anyList: Array<ChannelMap[keyof ChannelMap]>,
    }
  }

  export class Metadata extends jspb.Message {
    hasCall(): boolean;
    clearCall(): void;
    getCall(): TranscriptQuery.Call | undefined;
    setCall(value?: TranscriptQuery.Call): void;

    hasSms(): boolean;
    clearSms(): void;
    getSms(): TranscriptQuery.Sms | undefined;
    setSms(value?: TranscriptQuery.Sms): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Metadata.AsObject;
    static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Metadata;
    static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
  }

  export namespace Metadata {
    export type AsObject = {
      call?: TranscriptQuery.Call.AsObject,
      sms?: TranscriptQuery.Sms.AsObject,
    }
  }

  export class Call extends jspb.Message {
    hasCallSid(): boolean;
    clearCallSid(): void;
    getCallSid(): TranscriptQuery.Call.CallSid | undefined;
    setCallSid(value?: TranscriptQuery.Call.CallSid): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Call.AsObject;
    static toObject(includeInstance: boolean, msg: Call): Call.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Call, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Call;
    static deserializeBinaryFromReader(message: Call, reader: jspb.BinaryReader): Call;
  }

  export namespace Call {
    export type AsObject = {
      callSid?: TranscriptQuery.Call.CallSid.AsObject,
    }

    export class CallSid extends jspb.Message {
      clearAnyList(): void;
      getAnyList(): Array<number>;
      setAnyList(value: Array<number>): void;
      addAny(value: number, index?: number): number;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): CallSid.AsObject;
      static toObject(includeInstance: boolean, msg: CallSid): CallSid.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: CallSid, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): CallSid;
      static deserializeBinaryFromReader(message: CallSid, reader: jspb.BinaryReader): CallSid;
    }

    export namespace CallSid {
      export type AsObject = {
        anyList: Array<number>,
      }
    }
  }

  export class Sms extends jspb.Message {
    hasConversationSid(): boolean;
    clearConversationSid(): void;
    getConversationSid(): TranscriptQuery.Sms.ConversationSid | undefined;
    setConversationSid(value?: TranscriptQuery.Sms.ConversationSid): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Sms.AsObject;
    static toObject(includeInstance: boolean, msg: Sms): Sms.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Sms, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Sms;
    static deserializeBinaryFromReader(message: Sms, reader: jspb.BinaryReader): Sms;
  }

  export namespace Sms {
    export type AsObject = {
      conversationSid?: TranscriptQuery.Sms.ConversationSid.AsObject,
    }

    export class ConversationSid extends jspb.Message {
      clearAnyList(): void;
      getAnyList(): Array<number>;
      setAnyList(value: Array<number>): void;
      addAny(value: number, index?: number): number;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ConversationSid.AsObject;
      static toObject(includeInstance: boolean, msg: ConversationSid): ConversationSid.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ConversationSid, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ConversationSid;
      static deserializeBinaryFromReader(message: ConversationSid, reader: jspb.BinaryReader): ConversationSid;
    }

    export namespace ConversationSid {
      export type AsObject = {
        anyList: Array<number>,
      }
    }
  }

  export class Threads extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): TranscriptQuery.Threads.Id | undefined;
    setId(value?: TranscriptQuery.Threads.Id): void;

    hasText(): boolean;
    clearText(): void;
    getText(): TranscriptQuery.Threads.Text | undefined;
    setText(value?: TranscriptQuery.Threads.Text): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Threads.AsObject;
    static toObject(includeInstance: boolean, msg: Threads): Threads.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Threads, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Threads;
    static deserializeBinaryFromReader(message: Threads, reader: jspb.BinaryReader): Threads;
  }

  export namespace Threads {
    export type AsObject = {
      id?: TranscriptQuery.Threads.Id.AsObject,
      text?: TranscriptQuery.Threads.Text.AsObject,
    }

    export class Id extends jspb.Message {
      clearAnyList(): void;
      getAnyList(): Array<number>;
      setAnyList(value: Array<number>): void;
      addAny(value: number, index?: number): number;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Id.AsObject;
      static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Id;
      static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
    }

    export namespace Id {
      export type AsObject = {
        anyList: Array<number>,
      }
    }

    export class Text extends jspb.Message {
      hasMatch(): boolean;
      clearMatch(): void;
      getMatch(): Match | undefined;
      setMatch(value?: Match): void;

      hasSpanNear(): boolean;
      clearSpanNear(): void;
      getSpanNear(): SpanNear | undefined;
      setSpanNear(value?: SpanNear): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Text.AsObject;
      static toObject(includeInstance: boolean, msg: Text): Text.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Text, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Text;
      static deserializeBinaryFromReader(message: Text, reader: jspb.BinaryReader): Text;
    }

    export namespace Text {
      export type AsObject = {
        match?: Match.AsObject,
        spanNear?: SpanNear.AsObject,
      }
    }
  }
}

export class FuzzinessAuto extends jspb.Message {
  getLow(): number;
  setLow(value: number): void;

  getHigh(): number;
  setHigh(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FuzzinessAuto.AsObject;
  static toObject(includeInstance: boolean, msg: FuzzinessAuto): FuzzinessAuto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FuzzinessAuto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FuzzinessAuto;
  static deserializeBinaryFromReader(message: FuzzinessAuto, reader: jspb.BinaryReader): FuzzinessAuto;
}

export namespace FuzzinessAuto {
  export type AsObject = {
    low: number,
    high: number,
  }
}

export class Match extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  getOperator(): string;
  setOperator(value: string): void;

  hasFuzzinessAuto(): boolean;
  clearFuzzinessAuto(): void;
  getFuzzinessAuto(): FuzzinessAuto | undefined;
  setFuzzinessAuto(value?: FuzzinessAuto): void;

  hasFuzzinessValue(): boolean;
  clearFuzzinessValue(): void;
  getFuzzinessValue(): number;
  setFuzzinessValue(value: number): void;

  getFuzzinessCase(): Match.FuzzinessCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Match.AsObject;
  static toObject(includeInstance: boolean, msg: Match): Match.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Match, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Match;
  static deserializeBinaryFromReader(message: Match, reader: jspb.BinaryReader): Match;
}

export namespace Match {
  export type AsObject = {
    text: string,
    operator: string,
    fuzzinessAuto?: FuzzinessAuto.AsObject,
    fuzzinessValue: number,
  }

  export enum FuzzinessCase {
    FUZZINESS_NOT_SET = 0,
    FUZZINESS_AUTO = 15,
    FUZZINESS_VALUE = 16,
  }
}

export class SpanNear extends jspb.Message {
  getSlop(): number;
  setSlop(value: number): void;

  getInOrder(): boolean;
  setInOrder(value: boolean): void;

  clearClausesList(): void;
  getClausesList(): Array<SpanNear.Clause>;
  setClausesList(value: Array<SpanNear.Clause>): void;
  addClauses(value?: SpanNear.Clause, index?: number): SpanNear.Clause;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpanNear.AsObject;
  static toObject(includeInstance: boolean, msg: SpanNear): SpanNear.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpanNear, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpanNear;
  static deserializeBinaryFromReader(message: SpanNear, reader: jspb.BinaryReader): SpanNear;
}

export namespace SpanNear {
  export type AsObject = {
    slop: number,
    inOrder: boolean,
    clausesList: Array<SpanNear.Clause.AsObject>,
  }

  export class Clause extends jspb.Message {
    hasSpanNear(): boolean;
    clearSpanNear(): void;
    getSpanNear(): SpanNear | undefined;
    setSpanNear(value?: SpanNear): void;

    hasSpanFuzzy(): boolean;
    clearSpanFuzzy(): void;
    getSpanFuzzy(): SpanFuzzy | undefined;
    setSpanFuzzy(value?: SpanFuzzy): void;

    hasSpanTerm(): boolean;
    clearSpanTerm(): void;
    getSpanTerm(): SpanTerm | undefined;
    setSpanTerm(value?: SpanTerm): void;

    getMatchCase(): Clause.MatchCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Clause.AsObject;
    static toObject(includeInstance: boolean, msg: Clause): Clause.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Clause, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Clause;
    static deserializeBinaryFromReader(message: Clause, reader: jspb.BinaryReader): Clause;
  }

  export namespace Clause {
    export type AsObject = {
      spanNear?: SpanNear.AsObject,
      spanFuzzy?: SpanFuzzy.AsObject,
      spanTerm?: SpanTerm.AsObject,
    }

    export enum MatchCase {
      MATCH_NOT_SET = 0,
      SPAN_NEAR = 1,
      SPAN_FUZZY = 2,
      SPAN_TERM = 3,
    }
  }
}

export class SpanTerm extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpanTerm.AsObject;
  static toObject(includeInstance: boolean, msg: SpanTerm): SpanTerm.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpanTerm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpanTerm;
  static deserializeBinaryFromReader(message: SpanTerm, reader: jspb.BinaryReader): SpanTerm;
}

export namespace SpanTerm {
  export type AsObject = {
    value: string,
  }
}

export class SpanFuzzy extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  hasFuzzinessAuto(): boolean;
  clearFuzzinessAuto(): void;
  getFuzzinessAuto(): FuzzinessAuto | undefined;
  setFuzzinessAuto(value?: FuzzinessAuto): void;

  hasFuzzinessValue(): boolean;
  clearFuzzinessValue(): void;
  getFuzzinessValue(): number;
  setFuzzinessValue(value: number): void;

  getFuzzinessCase(): SpanFuzzy.FuzzinessCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpanFuzzy.AsObject;
  static toObject(includeInstance: boolean, msg: SpanFuzzy): SpanFuzzy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpanFuzzy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpanFuzzy;
  static deserializeBinaryFromReader(message: SpanFuzzy, reader: jspb.BinaryReader): SpanFuzzy;
}

export namespace SpanFuzzy {
  export type AsObject = {
    value: string,
    fuzzinessAuto?: FuzzinessAuto.AsObject,
    fuzzinessValue: number,
  }

  export enum FuzzinessCase {
    FUZZINESS_NOT_SET = 0,
    FUZZINESS_AUTO = 10,
    FUZZINESS_VALUE = 11,
  }
}

export interface ChannelMap {
  CHANNEL_CALL: 0;
  CHANNEL_SMS: 1;
}

export const Channel: ChannelMap;

export interface ReviewStatusMap {
  REVIEW_STATUS_TODO: 0;
  REVIEW_STATUS_DONE: 1;
  REVIEW_STATUS_NONE: 2;
}

export const ReviewStatus: ReviewStatusMap;

