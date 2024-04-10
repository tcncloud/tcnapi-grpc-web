// package: wfo.vanalytics.v2
// file: wfo/vanalytics/v2/transcript.proto

import * as jspb from "google-protobuf";
import * as api_commons_acd_pb from "../../../api/commons/acd_pb";
import * as api_commons_vanalytics_pb from "../../../api/commons/vanalytics_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as wfo_vanalytics_v2_agent_call_log_pb from "../../../wfo/vanalytics/v2/agent_call_log_pb";

export class Transcript extends jspb.Message {
  hasCall(): boolean;
  clearCall(): void;
  getCall(): Call | undefined;
  setCall(value?: Call): void;

  hasSms(): boolean;
  clearSms(): void;
  getSms(): Sms | undefined;
  setSms(value?: Sms): void;

  getChannel(): ChannelMap[keyof ChannelMap];
  setChannel(value: ChannelMap[keyof ChannelMap]): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

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
    channel: ChannelMap[keyof ChannelMap],
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
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

  hasPhone(): boolean;
  clearPhone(): void;
  getPhone(): Sms.Phone | undefined;
  setPhone(value?: Sms.Phone): void;

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
    phone?: Sms.Phone.AsObject,
  }

  export class Phone extends jspb.Message {
    getRaw(): string;
    setRaw(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Phone.AsObject;
    static toObject(includeInstance: boolean, msg: Phone): Phone.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Phone, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Phone;
    static deserializeBinaryFromReader(message: Phone, reader: jspb.BinaryReader): Phone;
  }

  export namespace Phone {
    export type AsObject = {
      raw: string,
    }
  }

  export class Thread extends jspb.Message {
    getId(): number;
    setId(value: number): void;

    clearSegmentsList(): void;
    getSegmentsList(): Array<Sms.Segment>;
    setSegmentsList(value: Array<Sms.Segment>): void;
    addSegments(value?: Sms.Segment, index?: number): Sms.Segment;

    getUserId(): string;
    setUserId(value: string): void;

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
      userId: string,
    }
  }

  export class Segment extends jspb.Message {
    getText(): string;
    setText(value: string): void;

    hasOffset(): boolean;
    clearOffset(): void;
    getOffset(): google_protobuf_duration_pb.Duration | undefined;
    setOffset(value?: google_protobuf_duration_pb.Duration): void;

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
      offset?: google_protobuf_duration_pb.Duration.AsObject,
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

  hasSilence(): boolean;
  clearSilence(): void;
  getSilence(): Call.Silence | undefined;
  setSilence(value?: Call.Silence): void;

  hasTalkOver(): boolean;
  clearTalkOver(): void;
  getTalkOver(): Call.TalkOver | undefined;
  setTalkOver(value?: Call.TalkOver): void;

  hasTalkTime(): boolean;
  clearTalkTime(): void;
  getTalkTime(): google_protobuf_duration_pb.Duration | undefined;
  setTalkTime(value?: google_protobuf_duration_pb.Duration): void;

  getCallerId(): string;
  setCallerId(value: string): void;

  getGroupName(): string;
  setGroupName(value: string): void;

  getAgentResponseMap(): jspb.Map<string, Call.AgentResponse>;
  clearAgentResponseMap(): void;
  clearHuntGroupSidsList(): void;
  getHuntGroupSidsList(): Array<number>;
  setHuntGroupSidsList(value: Array<number>): void;
  addHuntGroupSids(value: number, index?: number): number;

  getNumberFormat(): string;
  setNumberFormat(value: string): void;

  hasAgentCallLog(): boolean;
  clearAgentCallLog(): void;
  getAgentCallLog(): wfo_vanalytics_v2_agent_call_log_pb.AgentCallLog | undefined;
  setAgentCallLog(value?: wfo_vanalytics_v2_agent_call_log_pb.AgentCallLog): void;

  hasPhone(): boolean;
  clearPhone(): void;
  getPhone(): Call.Phone | undefined;
  setPhone(value?: Call.Phone): void;

  getAudioBytes(): number;
  setAudioBytes(value: number): void;

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
    silence?: Call.Silence.AsObject,
    talkOver?: Call.TalkOver.AsObject,
    talkTime?: google_protobuf_duration_pb.Duration.AsObject,
    callerId: string,
    groupName: string,
    agentResponseMap: Array<[string, Call.AgentResponse.AsObject]>,
    huntGroupSidsList: Array<number>,
    numberFormat: string,
    agentCallLog?: wfo_vanalytics_v2_agent_call_log_pb.AgentCallLog.AsObject,
    phone?: Call.Phone.AsObject,
    audioBytes: number,
  }

  export class Phone extends jspb.Message {
    getRaw(): string;
    setRaw(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Phone.AsObject;
    static toObject(includeInstance: boolean, msg: Phone): Phone.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Phone, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Phone;
    static deserializeBinaryFromReader(message: Phone, reader: jspb.BinaryReader): Phone;
  }

  export namespace Phone {
    export type AsObject = {
      raw: string,
    }
  }

  export class AgentResponse extends jspb.Message {
    clearValuesList(): void;
    getValuesList(): Array<string>;
    setValuesList(value: Array<string>): void;
    addValues(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AgentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AgentResponse): AgentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AgentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AgentResponse;
    static deserializeBinaryFromReader(message: AgentResponse, reader: jspb.BinaryReader): AgentResponse;
  }

  export namespace AgentResponse {
    export type AsObject = {
      valuesList: Array<string>,
    }
  }

  export class Thread extends jspb.Message {
    getId(): number;
    setId(value: number): void;

    clearSegmentsList(): void;
    getSegmentsList(): Array<Call.Segment>;
    setSegmentsList(value: Array<Call.Segment>): void;
    addSegments(value?: Call.Segment, index?: number): Call.Segment;

    getUserId(): string;
    setUserId(value: string): void;

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
      userId: string,
    }
  }

  export class Segment extends jspb.Message {
    getText(): string;
    setText(value: string): void;

    hasOffset(): boolean;
    clearOffset(): void;
    getOffset(): google_protobuf_duration_pb.Duration | undefined;
    setOffset(value?: google_protobuf_duration_pb.Duration): void;

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
      offset?: google_protobuf_duration_pb.Duration.AsObject,
    }
  }

  export class TalkOver extends jspb.Message {
    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): Call.TalkOver.Duration | undefined;
    setDuration(value?: Call.TalkOver.Duration): void;

    hasOccurrence(): boolean;
    clearOccurrence(): void;
    getOccurrence(): Call.TalkOver.Occurrence | undefined;
    setOccurrence(value?: Call.TalkOver.Occurrence): void;

    getThreshold(): number;
    setThreshold(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TalkOver.AsObject;
    static toObject(includeInstance: boolean, msg: TalkOver): TalkOver.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TalkOver, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TalkOver;
    static deserializeBinaryFromReader(message: TalkOver, reader: jspb.BinaryReader): TalkOver;
  }

  export namespace TalkOver {
    export type AsObject = {
      duration?: Call.TalkOver.Duration.AsObject,
      occurrence?: Call.TalkOver.Occurrence.AsObject,
      threshold: number,
    }

    export class Duration extends jspb.Message {
      hasTotal(): boolean;
      clearTotal(): void;
      getTotal(): google_protobuf_duration_pb.Duration | undefined;
      setTotal(value?: google_protobuf_duration_pb.Duration): void;

      hasMax(): boolean;
      clearMax(): void;
      getMax(): google_protobuf_duration_pb.Duration | undefined;
      setMax(value?: google_protobuf_duration_pb.Duration): void;

      getPercentage(): number;
      setPercentage(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Duration.AsObject;
      static toObject(includeInstance: boolean, msg: Duration): Duration.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Duration, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Duration;
      static deserializeBinaryFromReader(message: Duration, reader: jspb.BinaryReader): Duration;
    }

    export namespace Duration {
      export type AsObject = {
        total?: google_protobuf_duration_pb.Duration.AsObject,
        max?: google_protobuf_duration_pb.Duration.AsObject,
        percentage: number,
      }
    }

    export class Occurrence extends jspb.Message {
      getTotal(): number;
      setTotal(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Occurrence.AsObject;
      static toObject(includeInstance: boolean, msg: Occurrence): Occurrence.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Occurrence, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Occurrence;
      static deserializeBinaryFromReader(message: Occurrence, reader: jspb.BinaryReader): Occurrence;
    }

    export namespace Occurrence {
      export type AsObject = {
        total: number,
      }
    }
  }

  export class Silence extends jspb.Message {
    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): Call.Silence.Duration | undefined;
    setDuration(value?: Call.Silence.Duration): void;

    hasOccurrence(): boolean;
    clearOccurrence(): void;
    getOccurrence(): Call.Silence.Occurrence | undefined;
    setOccurrence(value?: Call.Silence.Occurrence): void;

    getThreshold(): number;
    setThreshold(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Silence.AsObject;
    static toObject(includeInstance: boolean, msg: Silence): Silence.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Silence, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Silence;
    static deserializeBinaryFromReader(message: Silence, reader: jspb.BinaryReader): Silence;
  }

  export namespace Silence {
    export type AsObject = {
      duration?: Call.Silence.Duration.AsObject,
      occurrence?: Call.Silence.Occurrence.AsObject,
      threshold: number,
    }

    export class Duration extends jspb.Message {
      hasTotal(): boolean;
      clearTotal(): void;
      getTotal(): google_protobuf_duration_pb.Duration | undefined;
      setTotal(value?: google_protobuf_duration_pb.Duration): void;

      hasMax(): boolean;
      clearMax(): void;
      getMax(): google_protobuf_duration_pb.Duration | undefined;
      setMax(value?: google_protobuf_duration_pb.Duration): void;

      getPercentage(): number;
      setPercentage(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Duration.AsObject;
      static toObject(includeInstance: boolean, msg: Duration): Duration.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Duration, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Duration;
      static deserializeBinaryFromReader(message: Duration, reader: jspb.BinaryReader): Duration;
    }

    export namespace Duration {
      export type AsObject = {
        total?: google_protobuf_duration_pb.Duration.AsObject,
        max?: google_protobuf_duration_pb.Duration.AsObject,
        percentage: number,
      }
    }

    export class Occurrence extends jspb.Message {
      getTotal(): number;
      setTotal(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Occurrence.AsObject;
      static toObject(includeInstance: boolean, msg: Occurrence): Occurrence.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Occurrence, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Occurrence;
      static deserializeBinaryFromReader(message: Occurrence, reader: jspb.BinaryReader): Occurrence;
    }

    export namespace Occurrence {
      export type AsObject = {
        total: number,
      }
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

  hasHighlight(): boolean;
  clearHighlight(): void;
  getHighlight(): Highlight | undefined;
  setHighlight(value?: Highlight): void;

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
    highlight?: Highlight.AsObject,
  }
}

export class Highlight extends jspb.Message {
  getPrefix(): string;
  setPrefix(value: string): void;

  getSuffix(): string;
  setSuffix(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Highlight.AsObject;
  static toObject(includeInstance: boolean, msg: Highlight): Highlight.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Highlight, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Highlight;
  static deserializeBinaryFromReader(message: Highlight, reader: jspb.BinaryReader): Highlight;
}

export namespace Highlight {
  export type AsObject = {
    prefix: string,
    suffix: string,
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

  hasFlagSummary(): boolean;
  clearFlagSummary(): void;
  getFlagSummary(): TranscriptQuery.FlagSummary | undefined;
  setFlagSummary(value?: TranscriptQuery.FlagSummary): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): TranscriptQuery.StartTime | undefined;
  setStartTime(value?: TranscriptQuery.StartTime): void;

  hasDeleteTime(): boolean;
  clearDeleteTime(): void;
  getDeleteTime(): TranscriptQuery.DeleteTime | undefined;
  setDeleteTime(value?: TranscriptQuery.DeleteTime): void;

  hasPhone(): boolean;
  clearPhone(): void;
  getPhone(): TranscriptQuery.Phone | undefined;
  setPhone(value?: TranscriptQuery.Phone): void;

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
    flagSummary?: TranscriptQuery.FlagSummary.AsObject,
    startTime?: TranscriptQuery.StartTime.AsObject,
    deleteTime?: TranscriptQuery.DeleteTime.AsObject,
    phone?: TranscriptQuery.Phone.AsObject,
  }

  export class Phone extends jspb.Message {
    hasCc(): boolean;
    clearCc(): void;
    getCc(): TranscriptQuery.Phone.Cc | undefined;
    setCc(value?: TranscriptQuery.Phone.Cc): void;

    hasNdc(): boolean;
    clearNdc(): void;
    getNdc(): TranscriptQuery.Phone.Ndc | undefined;
    setNdc(value?: TranscriptQuery.Phone.Ndc): void;

    hasPrefix(): boolean;
    clearPrefix(): void;
    getPrefix(): TranscriptQuery.Phone.Prefix | undefined;
    setPrefix(value?: TranscriptQuery.Phone.Prefix): void;

    hasCity(): boolean;
    clearCity(): void;
    getCity(): TranscriptQuery.Phone.City | undefined;
    setCity(value?: TranscriptQuery.Phone.City): void;

    hasIso2(): boolean;
    clearIso2(): void;
    getIso2(): TranscriptQuery.Phone.Iso2 | undefined;
    setIso2(value?: TranscriptQuery.Phone.Iso2): void;

    hasRegionCode(): boolean;
    clearRegionCode(): void;
    getRegionCode(): TranscriptQuery.Phone.RegionCode | undefined;
    setRegionCode(value?: TranscriptQuery.Phone.RegionCode): void;

    hasRegionName(): boolean;
    clearRegionName(): void;
    getRegionName(): TranscriptQuery.Phone.RegionName | undefined;
    setRegionName(value?: TranscriptQuery.Phone.RegionName): void;

    hasTimeZone(): boolean;
    clearTimeZone(): void;
    getTimeZone(): TranscriptQuery.Phone.TimeZone | undefined;
    setTimeZone(value?: TranscriptQuery.Phone.TimeZone): void;

    hasType(): boolean;
    clearType(): void;
    getType(): TranscriptQuery.Phone.Type | undefined;
    setType(value?: TranscriptQuery.Phone.Type): void;

    hasUtc(): boolean;
    clearUtc(): void;
    getUtc(): TranscriptQuery.Phone.Utc | undefined;
    setUtc(value?: TranscriptQuery.Phone.Utc): void;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): TranscriptQuery.Phone.Location | undefined;
    setLocation(value?: TranscriptQuery.Phone.Location): void;

    hasRaw(): boolean;
    clearRaw(): void;
    getRaw(): TranscriptQuery.Phone.Raw | undefined;
    setRaw(value?: TranscriptQuery.Phone.Raw): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Phone.AsObject;
    static toObject(includeInstance: boolean, msg: Phone): Phone.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Phone, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Phone;
    static deserializeBinaryFromReader(message: Phone, reader: jspb.BinaryReader): Phone;
  }

  export namespace Phone {
    export type AsObject = {
      cc?: TranscriptQuery.Phone.Cc.AsObject,
      ndc?: TranscriptQuery.Phone.Ndc.AsObject,
      prefix?: TranscriptQuery.Phone.Prefix.AsObject,
      city?: TranscriptQuery.Phone.City.AsObject,
      iso2?: TranscriptQuery.Phone.Iso2.AsObject,
      regionCode?: TranscriptQuery.Phone.RegionCode.AsObject,
      regionName?: TranscriptQuery.Phone.RegionName.AsObject,
      timeZone?: TranscriptQuery.Phone.TimeZone.AsObject,
      type?: TranscriptQuery.Phone.Type.AsObject,
      utc?: TranscriptQuery.Phone.Utc.AsObject,
      location?: TranscriptQuery.Phone.Location.AsObject,
      raw?: TranscriptQuery.Phone.Raw.AsObject,
    }

    export class Cc extends jspb.Message {
      clearAnyList(): void;
      getAnyList(): Array<string>;
      setAnyList(value: Array<string>): void;
      addAny(value: string, index?: number): string;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Cc.AsObject;
      static toObject(includeInstance: boolean, msg: Cc): Cc.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Cc, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Cc;
      static deserializeBinaryFromReader(message: Cc, reader: jspb.BinaryReader): Cc;
    }

    export namespace Cc {
      export type AsObject = {
        anyList: Array<string>,
      }
    }

    export class Ndc extends jspb.Message {
      clearAnyList(): void;
      getAnyList(): Array<string>;
      setAnyList(value: Array<string>): void;
      addAny(value: string, index?: number): string;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Ndc.AsObject;
      static toObject(includeInstance: boolean, msg: Ndc): Ndc.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Ndc, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Ndc;
      static deserializeBinaryFromReader(message: Ndc, reader: jspb.BinaryReader): Ndc;
    }

    export namespace Ndc {
      export type AsObject = {
        anyList: Array<string>,
      }
    }

    export class Prefix extends jspb.Message {
      clearAnyList(): void;
      getAnyList(): Array<string>;
      setAnyList(value: Array<string>): void;
      addAny(value: string, index?: number): string;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Prefix.AsObject;
      static toObject(includeInstance: boolean, msg: Prefix): Prefix.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Prefix, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Prefix;
      static deserializeBinaryFromReader(message: Prefix, reader: jspb.BinaryReader): Prefix;
    }

    export namespace Prefix {
      export type AsObject = {
        anyList: Array<string>,
      }
    }

    export class City extends jspb.Message {
      clearAnyList(): void;
      getAnyList(): Array<string>;
      setAnyList(value: Array<string>): void;
      addAny(value: string, index?: number): string;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): City.AsObject;
      static toObject(includeInstance: boolean, msg: City): City.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: City, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): City;
      static deserializeBinaryFromReader(message: City, reader: jspb.BinaryReader): City;
    }

    export namespace City {
      export type AsObject = {
        anyList: Array<string>,
      }
    }

    export class Iso2 extends jspb.Message {
      clearAnyList(): void;
      getAnyList(): Array<string>;
      setAnyList(value: Array<string>): void;
      addAny(value: string, index?: number): string;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Iso2.AsObject;
      static toObject(includeInstance: boolean, msg: Iso2): Iso2.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Iso2, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Iso2;
      static deserializeBinaryFromReader(message: Iso2, reader: jspb.BinaryReader): Iso2;
    }

    export namespace Iso2 {
      export type AsObject = {
        anyList: Array<string>,
      }
    }

    export class RegionCode extends jspb.Message {
      clearAnyList(): void;
      getAnyList(): Array<string>;
      setAnyList(value: Array<string>): void;
      addAny(value: string, index?: number): string;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): RegionCode.AsObject;
      static toObject(includeInstance: boolean, msg: RegionCode): RegionCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: RegionCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): RegionCode;
      static deserializeBinaryFromReader(message: RegionCode, reader: jspb.BinaryReader): RegionCode;
    }

    export namespace RegionCode {
      export type AsObject = {
        anyList: Array<string>,
      }
    }

    export class RegionName extends jspb.Message {
      clearAnyList(): void;
      getAnyList(): Array<string>;
      setAnyList(value: Array<string>): void;
      addAny(value: string, index?: number): string;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): RegionName.AsObject;
      static toObject(includeInstance: boolean, msg: RegionName): RegionName.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: RegionName, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): RegionName;
      static deserializeBinaryFromReader(message: RegionName, reader: jspb.BinaryReader): RegionName;
    }

    export namespace RegionName {
      export type AsObject = {
        anyList: Array<string>,
      }
    }

    export class TimeZone extends jspb.Message {
      clearAnyList(): void;
      getAnyList(): Array<string>;
      setAnyList(value: Array<string>): void;
      addAny(value: string, index?: number): string;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TimeZone.AsObject;
      static toObject(includeInstance: boolean, msg: TimeZone): TimeZone.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: TimeZone, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TimeZone;
      static deserializeBinaryFromReader(message: TimeZone, reader: jspb.BinaryReader): TimeZone;
    }

    export namespace TimeZone {
      export type AsObject = {
        anyList: Array<string>,
      }
    }

    export class Type extends jspb.Message {
      clearAnyList(): void;
      getAnyList(): Array<string>;
      setAnyList(value: Array<string>): void;
      addAny(value: string, index?: number): string;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Type.AsObject;
      static toObject(includeInstance: boolean, msg: Type): Type.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Type, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Type;
      static deserializeBinaryFromReader(message: Type, reader: jspb.BinaryReader): Type;
    }

    export namespace Type {
      export type AsObject = {
        anyList: Array<string>,
      }
    }

    export class Utc extends jspb.Message {
      clearAnyList(): void;
      getAnyList(): Array<number>;
      setAnyList(value: Array<number>): void;
      addAny(value: number, index?: number): number;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Utc.AsObject;
      static toObject(includeInstance: boolean, msg: Utc): Utc.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Utc, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Utc;
      static deserializeBinaryFromReader(message: Utc, reader: jspb.BinaryReader): Utc;
    }

    export namespace Utc {
      export type AsObject = {
        anyList: Array<number>,
      }
    }

    export class Location extends jspb.Message {
      hasZipCodeProximity(): boolean;
      clearZipCodeProximity(): void;
      getZipCodeProximity(): TranscriptQuery.Phone.Location.ZipCodeProximity | undefined;
      setZipCodeProximity(value?: TranscriptQuery.Phone.Location.ZipCodeProximity): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Location.AsObject;
      static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Location;
      static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
    }

    export namespace Location {
      export type AsObject = {
        zipCodeProximity?: TranscriptQuery.Phone.Location.ZipCodeProximity.AsObject,
      }

      export class ZipCodeProximity extends jspb.Message {
        getCountryCode(): string;
        setCountryCode(value: string): void;

        getZipCode(): string;
        setZipCode(value: string): void;

        getDistance(): string;
        setDistance(value: string): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ZipCodeProximity.AsObject;
        static toObject(includeInstance: boolean, msg: ZipCodeProximity): ZipCodeProximity.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ZipCodeProximity, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ZipCodeProximity;
        static deserializeBinaryFromReader(message: ZipCodeProximity, reader: jspb.BinaryReader): ZipCodeProximity;
      }

      export namespace ZipCodeProximity {
        export type AsObject = {
          countryCode: string,
          zipCode: string,
          distance: string,
        }
      }
    }

    export class Raw extends jspb.Message {
      clearAnyList(): void;
      getAnyList(): Array<string>;
      setAnyList(value: Array<string>): void;
      addAny(value: string, index?: number): string;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Raw.AsObject;
      static toObject(includeInstance: boolean, msg: Raw): Raw.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Raw, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Raw;
      static deserializeBinaryFromReader(message: Raw, reader: jspb.BinaryReader): Raw;
    }

    export namespace Raw {
      export type AsObject = {
        anyList: Array<string>,
      }
    }
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

    hasAudioTime(): boolean;
    clearAudioTime(): void;
    getAudioTime(): TranscriptQuery.Call.AudioTime | undefined;
    setAudioTime(value?: TranscriptQuery.Call.AudioTime): void;

    hasCallType(): boolean;
    clearCallType(): void;
    getCallType(): TranscriptQuery.Call.CallType | undefined;
    setCallType(value?: TranscriptQuery.Call.CallType): void;

    hasSilence(): boolean;
    clearSilence(): void;
    getSilence(): TranscriptQuery.Call.Silence | undefined;
    setSilence(value?: TranscriptQuery.Call.Silence): void;

    hasTalkOver(): boolean;
    clearTalkOver(): void;
    getTalkOver(): TranscriptQuery.Call.TalkOver | undefined;
    setTalkOver(value?: TranscriptQuery.Call.TalkOver): void;

    hasTalkTime(): boolean;
    clearTalkTime(): void;
    getTalkTime(): TranscriptQuery.Call.TalkTime | undefined;
    setTalkTime(value?: TranscriptQuery.Call.TalkTime): void;

    hasCallerId(): boolean;
    clearCallerId(): void;
    getCallerId(): TranscriptQuery.Call.CallerId | undefined;
    setCallerId(value?: TranscriptQuery.Call.CallerId): void;

    hasGroupName(): boolean;
    clearGroupName(): void;
    getGroupName(): TranscriptQuery.Call.GroupName | undefined;
    setGroupName(value?: TranscriptQuery.Call.GroupName): void;

    hasAgentResponse(): boolean;
    clearAgentResponse(): void;
    getAgentResponse(): TranscriptQuery.Call.AgentResponse | undefined;
    setAgentResponse(value?: TranscriptQuery.Call.AgentResponse): void;

    hasHuntGroupSids(): boolean;
    clearHuntGroupSids(): void;
    getHuntGroupSids(): TranscriptQuery.Call.HuntGroupSids | undefined;
    setHuntGroupSids(value?: TranscriptQuery.Call.HuntGroupSids): void;

    hasAgentCallLog(): boolean;
    clearAgentCallLog(): void;
    getAgentCallLog(): wfo_vanalytics_v2_agent_call_log_pb.AgentCallLogQuery | undefined;
    setAgentCallLog(value?: wfo_vanalytics_v2_agent_call_log_pb.AgentCallLogQuery): void;

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
      audioTime?: TranscriptQuery.Call.AudioTime.AsObject,
      callType?: TranscriptQuery.Call.CallType.AsObject,
      silence?: TranscriptQuery.Call.Silence.AsObject,
      talkOver?: TranscriptQuery.Call.TalkOver.AsObject,
      talkTime?: TranscriptQuery.Call.TalkTime.AsObject,
      callerId?: TranscriptQuery.Call.CallerId.AsObject,
      groupName?: TranscriptQuery.Call.GroupName.AsObject,
      agentResponse?: TranscriptQuery.Call.AgentResponse.AsObject,
      huntGroupSids?: TranscriptQuery.Call.HuntGroupSids.AsObject,
      agentCallLog?: wfo_vanalytics_v2_agent_call_log_pb.AgentCallLogQuery.AsObject,
    }

    export class HuntGroupSids extends jspb.Message {
      clearAnyList(): void;
      getAnyList(): Array<number>;
      setAnyList(value: Array<number>): void;
      addAny(value: number, index?: number): number;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): HuntGroupSids.AsObject;
      static toObject(includeInstance: boolean, msg: HuntGroupSids): HuntGroupSids.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: HuntGroupSids, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): HuntGroupSids;
      static deserializeBinaryFromReader(message: HuntGroupSids, reader: jspb.BinaryReader): HuntGroupSids;
    }

    export namespace HuntGroupSids {
      export type AsObject = {
        anyList: Array<number>,
      }
    }

    export class AgentResponse extends jspb.Message {
      clearAndList(): void;
      getAndList(): Array<TranscriptQuery.Call.AgentResponse>;
      setAndList(value: Array<TranscriptQuery.Call.AgentResponse>): void;
      addAnd(value?: TranscriptQuery.Call.AgentResponse, index?: number): TranscriptQuery.Call.AgentResponse;

      clearOrList(): void;
      getOrList(): Array<TranscriptQuery.Call.AgentResponse>;
      setOrList(value: Array<TranscriptQuery.Call.AgentResponse>): void;
      addOr(value?: TranscriptQuery.Call.AgentResponse, index?: number): TranscriptQuery.Call.AgentResponse;

      getNot(): boolean;
      setNot(value: boolean): void;

      hasKey(): boolean;
      clearKey(): void;
      getKey(): TranscriptQuery.Call.AgentResponse.Key | undefined;
      setKey(value?: TranscriptQuery.Call.AgentResponse.Key): void;

      hasValues(): boolean;
      clearValues(): void;
      getValues(): TranscriptQuery.Call.AgentResponse.Values | undefined;
      setValues(value?: TranscriptQuery.Call.AgentResponse.Values): void;

      hasNumbers(): boolean;
      clearNumbers(): void;
      getNumbers(): TranscriptQuery.Call.AgentResponse.Numbers | undefined;
      setNumbers(value?: TranscriptQuery.Call.AgentResponse.Numbers): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): AgentResponse.AsObject;
      static toObject(includeInstance: boolean, msg: AgentResponse): AgentResponse.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: AgentResponse, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): AgentResponse;
      static deserializeBinaryFromReader(message: AgentResponse, reader: jspb.BinaryReader): AgentResponse;
    }

    export namespace AgentResponse {
      export type AsObject = {
        andList: Array<TranscriptQuery.Call.AgentResponse.AsObject>,
        orList: Array<TranscriptQuery.Call.AgentResponse.AsObject>,
        not: boolean,
        key?: TranscriptQuery.Call.AgentResponse.Key.AsObject,
        values?: TranscriptQuery.Call.AgentResponse.Values.AsObject,
        numbers?: TranscriptQuery.Call.AgentResponse.Numbers.AsObject,
      }

      export class Values extends jspb.Message {
        clearInList(): void;
        getInList(): Array<string>;
        setInList(value: Array<string>): void;
        addIn(value: string, index?: number): string;

        getStartsWith(): string;
        setStartsWith(value: string): void;

        getContains(): string;
        setContains(value: string): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Values.AsObject;
        static toObject(includeInstance: boolean, msg: Values): Values.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Values, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Values;
        static deserializeBinaryFromReader(message: Values, reader: jspb.BinaryReader): Values;
      }

      export namespace Values {
        export type AsObject = {
          inList: Array<string>,
          startsWith: string,
          contains: string,
        }
      }

      export class Numbers extends jspb.Message {
        clearInList(): void;
        getInList(): Array<number>;
        setInList(value: Array<number>): void;
        addIn(value: number, index?: number): number;

        hasGte(): boolean;
        clearGte(): void;
        getGte(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setGte(value?: google_protobuf_wrappers_pb.DoubleValue): void;

        hasLte(): boolean;
        clearLte(): void;
        getLte(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setLte(value?: google_protobuf_wrappers_pb.DoubleValue): void;

        hasGt(): boolean;
        clearGt(): void;
        getGt(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setGt(value?: google_protobuf_wrappers_pb.DoubleValue): void;

        hasLt(): boolean;
        clearLt(): void;
        getLt(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setLt(value?: google_protobuf_wrappers_pb.DoubleValue): void;

        hasEq(): boolean;
        clearEq(): void;
        getEq(): google_protobuf_wrappers_pb.DoubleValue | undefined;
        setEq(value?: google_protobuf_wrappers_pb.DoubleValue): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Numbers.AsObject;
        static toObject(includeInstance: boolean, msg: Numbers): Numbers.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Numbers, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Numbers;
        static deserializeBinaryFromReader(message: Numbers, reader: jspb.BinaryReader): Numbers;
      }

      export namespace Numbers {
        export type AsObject = {
          inList: Array<number>,
          gte?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
          lte?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
          gt?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
          lt?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
          eq?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        }
      }

      export class Key extends jspb.Message {
        clearInList(): void;
        getInList(): Array<string>;
        setInList(value: Array<string>): void;
        addIn(value: string, index?: number): string;

        getStartsWith(): string;
        setStartsWith(value: string): void;

        getContains(): string;
        setContains(value: string): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Key.AsObject;
        static toObject(includeInstance: boolean, msg: Key): Key.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Key, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Key;
        static deserializeBinaryFromReader(message: Key, reader: jspb.BinaryReader): Key;
      }

      export namespace Key {
        export type AsObject = {
          inList: Array<string>,
          startsWith: string,
          contains: string,
        }
      }
    }

    export class CallType extends jspb.Message {
      clearAnyList(): void;
      getAnyList(): Array<api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]>;
      setAnyList(value: Array<api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]>): void;
      addAny(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap], index?: number): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): CallType.AsObject;
      static toObject(includeInstance: boolean, msg: CallType): CallType.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: CallType, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): CallType;
      static deserializeBinaryFromReader(message: CallType, reader: jspb.BinaryReader): CallType;
    }

    export namespace CallType {
      export type AsObject = {
        anyList: Array<api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]>,
      }
    }

    export class GroupName extends jspb.Message {
      clearAnyList(): void;
      getAnyList(): Array<string>;
      setAnyList(value: Array<string>): void;
      addAny(value: string, index?: number): string;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): GroupName.AsObject;
      static toObject(includeInstance: boolean, msg: GroupName): GroupName.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: GroupName, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): GroupName;
      static deserializeBinaryFromReader(message: GroupName, reader: jspb.BinaryReader): GroupName;
    }

    export namespace GroupName {
      export type AsObject = {
        anyList: Array<string>,
      }
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

    export class CallerId extends jspb.Message {
      clearAnyList(): void;
      getAnyList(): Array<string>;
      setAnyList(value: Array<string>): void;
      addAny(value: string, index?: number): string;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): CallerId.AsObject;
      static toObject(includeInstance: boolean, msg: CallerId): CallerId.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: CallerId, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): CallerId;
      static deserializeBinaryFromReader(message: CallerId, reader: jspb.BinaryReader): CallerId;
    }

    export namespace CallerId {
      export type AsObject = {
        anyList: Array<string>,
      }
    }

    export class AudioTime extends jspb.Message {
      hasGte(): boolean;
      clearGte(): void;
      getGte(): google_protobuf_wrappers_pb.Int32Value | undefined;
      setGte(value?: google_protobuf_wrappers_pb.Int32Value): void;

      hasLte(): boolean;
      clearLte(): void;
      getLte(): google_protobuf_wrappers_pb.Int32Value | undefined;
      setLte(value?: google_protobuf_wrappers_pb.Int32Value): void;

      hasGt(): boolean;
      clearGt(): void;
      getGt(): google_protobuf_wrappers_pb.Int32Value | undefined;
      setGt(value?: google_protobuf_wrappers_pb.Int32Value): void;

      hasLt(): boolean;
      clearLt(): void;
      getLt(): google_protobuf_wrappers_pb.Int32Value | undefined;
      setLt(value?: google_protobuf_wrappers_pb.Int32Value): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): AudioTime.AsObject;
      static toObject(includeInstance: boolean, msg: AudioTime): AudioTime.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: AudioTime, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): AudioTime;
      static deserializeBinaryFromReader(message: AudioTime, reader: jspb.BinaryReader): AudioTime;
    }

    export namespace AudioTime {
      export type AsObject = {
        gte?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        lte?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        gt?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        lt?: google_protobuf_wrappers_pb.Int32Value.AsObject,
      }
    }

    export class TalkTime extends jspb.Message {
      hasGte(): boolean;
      clearGte(): void;
      getGte(): google_protobuf_duration_pb.Duration | undefined;
      setGte(value?: google_protobuf_duration_pb.Duration): void;

      hasLte(): boolean;
      clearLte(): void;
      getLte(): google_protobuf_duration_pb.Duration | undefined;
      setLte(value?: google_protobuf_duration_pb.Duration): void;

      hasGt(): boolean;
      clearGt(): void;
      getGt(): google_protobuf_duration_pb.Duration | undefined;
      setGt(value?: google_protobuf_duration_pb.Duration): void;

      hasLt(): boolean;
      clearLt(): void;
      getLt(): google_protobuf_duration_pb.Duration | undefined;
      setLt(value?: google_protobuf_duration_pb.Duration): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TalkTime.AsObject;
      static toObject(includeInstance: boolean, msg: TalkTime): TalkTime.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: TalkTime, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TalkTime;
      static deserializeBinaryFromReader(message: TalkTime, reader: jspb.BinaryReader): TalkTime;
    }

    export namespace TalkTime {
      export type AsObject = {
        gte?: google_protobuf_duration_pb.Duration.AsObject,
        lte?: google_protobuf_duration_pb.Duration.AsObject,
        gt?: google_protobuf_duration_pb.Duration.AsObject,
        lt?: google_protobuf_duration_pb.Duration.AsObject,
      }
    }

    export class TalkOver extends jspb.Message {
      hasDurationTotal(): boolean;
      clearDurationTotal(): void;
      getDurationTotal(): TranscriptQuery.Call.TalkOver.DurationTotal | undefined;
      setDurationTotal(value?: TranscriptQuery.Call.TalkOver.DurationTotal): void;

      hasDurationMax(): boolean;
      clearDurationMax(): void;
      getDurationMax(): TranscriptQuery.Call.TalkOver.DurationMax | undefined;
      setDurationMax(value?: TranscriptQuery.Call.TalkOver.DurationMax): void;

      hasOccurrenceTotal(): boolean;
      clearOccurrenceTotal(): void;
      getOccurrenceTotal(): TranscriptQuery.Call.TalkOver.OccurrenceTotal | undefined;
      setOccurrenceTotal(value?: TranscriptQuery.Call.TalkOver.OccurrenceTotal): void;

      hasDurationPercentage(): boolean;
      clearDurationPercentage(): void;
      getDurationPercentage(): TranscriptQuery.Call.TalkOver.DurationPercentage | undefined;
      setDurationPercentage(value?: TranscriptQuery.Call.TalkOver.DurationPercentage): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TalkOver.AsObject;
      static toObject(includeInstance: boolean, msg: TalkOver): TalkOver.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: TalkOver, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TalkOver;
      static deserializeBinaryFromReader(message: TalkOver, reader: jspb.BinaryReader): TalkOver;
    }

    export namespace TalkOver {
      export type AsObject = {
        durationTotal?: TranscriptQuery.Call.TalkOver.DurationTotal.AsObject,
        durationMax?: TranscriptQuery.Call.TalkOver.DurationMax.AsObject,
        occurrenceTotal?: TranscriptQuery.Call.TalkOver.OccurrenceTotal.AsObject,
        durationPercentage?: TranscriptQuery.Call.TalkOver.DurationPercentage.AsObject,
      }

      export class DurationTotal extends jspb.Message {
        hasGte(): boolean;
        clearGte(): void;
        getGte(): google_protobuf_duration_pb.Duration | undefined;
        setGte(value?: google_protobuf_duration_pb.Duration): void;

        hasLte(): boolean;
        clearLte(): void;
        getLte(): google_protobuf_duration_pb.Duration | undefined;
        setLte(value?: google_protobuf_duration_pb.Duration): void;

        hasGt(): boolean;
        clearGt(): void;
        getGt(): google_protobuf_duration_pb.Duration | undefined;
        setGt(value?: google_protobuf_duration_pb.Duration): void;

        hasLt(): boolean;
        clearLt(): void;
        getLt(): google_protobuf_duration_pb.Duration | undefined;
        setLt(value?: google_protobuf_duration_pb.Duration): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): DurationTotal.AsObject;
        static toObject(includeInstance: boolean, msg: DurationTotal): DurationTotal.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: DurationTotal, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): DurationTotal;
        static deserializeBinaryFromReader(message: DurationTotal, reader: jspb.BinaryReader): DurationTotal;
      }

      export namespace DurationTotal {
        export type AsObject = {
          gte?: google_protobuf_duration_pb.Duration.AsObject,
          lte?: google_protobuf_duration_pb.Duration.AsObject,
          gt?: google_protobuf_duration_pb.Duration.AsObject,
          lt?: google_protobuf_duration_pb.Duration.AsObject,
        }
      }

      export class DurationMax extends jspb.Message {
        hasGte(): boolean;
        clearGte(): void;
        getGte(): google_protobuf_duration_pb.Duration | undefined;
        setGte(value?: google_protobuf_duration_pb.Duration): void;

        hasLte(): boolean;
        clearLte(): void;
        getLte(): google_protobuf_duration_pb.Duration | undefined;
        setLte(value?: google_protobuf_duration_pb.Duration): void;

        hasGt(): boolean;
        clearGt(): void;
        getGt(): google_protobuf_duration_pb.Duration | undefined;
        setGt(value?: google_protobuf_duration_pb.Duration): void;

        hasLt(): boolean;
        clearLt(): void;
        getLt(): google_protobuf_duration_pb.Duration | undefined;
        setLt(value?: google_protobuf_duration_pb.Duration): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): DurationMax.AsObject;
        static toObject(includeInstance: boolean, msg: DurationMax): DurationMax.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: DurationMax, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): DurationMax;
        static deserializeBinaryFromReader(message: DurationMax, reader: jspb.BinaryReader): DurationMax;
      }

      export namespace DurationMax {
        export type AsObject = {
          gte?: google_protobuf_duration_pb.Duration.AsObject,
          lte?: google_protobuf_duration_pb.Duration.AsObject,
          gt?: google_protobuf_duration_pb.Duration.AsObject,
          lt?: google_protobuf_duration_pb.Duration.AsObject,
        }
      }

      export class OccurrenceTotal extends jspb.Message {
        hasGte(): boolean;
        clearGte(): void;
        getGte(): google_protobuf_wrappers_pb.UInt32Value | undefined;
        setGte(value?: google_protobuf_wrappers_pb.UInt32Value): void;

        hasLte(): boolean;
        clearLte(): void;
        getLte(): google_protobuf_wrappers_pb.UInt32Value | undefined;
        setLte(value?: google_protobuf_wrappers_pb.UInt32Value): void;

        hasGt(): boolean;
        clearGt(): void;
        getGt(): google_protobuf_wrappers_pb.UInt32Value | undefined;
        setGt(value?: google_protobuf_wrappers_pb.UInt32Value): void;

        hasLt(): boolean;
        clearLt(): void;
        getLt(): google_protobuf_wrappers_pb.UInt32Value | undefined;
        setLt(value?: google_protobuf_wrappers_pb.UInt32Value): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): OccurrenceTotal.AsObject;
        static toObject(includeInstance: boolean, msg: OccurrenceTotal): OccurrenceTotal.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: OccurrenceTotal, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): OccurrenceTotal;
        static deserializeBinaryFromReader(message: OccurrenceTotal, reader: jspb.BinaryReader): OccurrenceTotal;
      }

      export namespace OccurrenceTotal {
        export type AsObject = {
          gte?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
          lte?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
          gt?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
          lt?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
        }
      }

      export class DurationPercentage extends jspb.Message {
        hasGte(): boolean;
        clearGte(): void;
        getGte(): google_protobuf_wrappers_pb.UInt32Value | undefined;
        setGte(value?: google_protobuf_wrappers_pb.UInt32Value): void;

        hasLte(): boolean;
        clearLte(): void;
        getLte(): google_protobuf_wrappers_pb.UInt32Value | undefined;
        setLte(value?: google_protobuf_wrappers_pb.UInt32Value): void;

        hasGt(): boolean;
        clearGt(): void;
        getGt(): google_protobuf_wrappers_pb.UInt32Value | undefined;
        setGt(value?: google_protobuf_wrappers_pb.UInt32Value): void;

        hasLt(): boolean;
        clearLt(): void;
        getLt(): google_protobuf_wrappers_pb.UInt32Value | undefined;
        setLt(value?: google_protobuf_wrappers_pb.UInt32Value): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): DurationPercentage.AsObject;
        static toObject(includeInstance: boolean, msg: DurationPercentage): DurationPercentage.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: DurationPercentage, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): DurationPercentage;
        static deserializeBinaryFromReader(message: DurationPercentage, reader: jspb.BinaryReader): DurationPercentage;
      }

      export namespace DurationPercentage {
        export type AsObject = {
          gte?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
          lte?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
          gt?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
          lt?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
        }
      }
    }

    export class Silence extends jspb.Message {
      hasDurationTotal(): boolean;
      clearDurationTotal(): void;
      getDurationTotal(): TranscriptQuery.Call.Silence.DurationTotal | undefined;
      setDurationTotal(value?: TranscriptQuery.Call.Silence.DurationTotal): void;

      hasDurationMax(): boolean;
      clearDurationMax(): void;
      getDurationMax(): TranscriptQuery.Call.Silence.DurationMax | undefined;
      setDurationMax(value?: TranscriptQuery.Call.Silence.DurationMax): void;

      hasOccurrenceTotal(): boolean;
      clearOccurrenceTotal(): void;
      getOccurrenceTotal(): TranscriptQuery.Call.Silence.OccurrenceTotal | undefined;
      setOccurrenceTotal(value?: TranscriptQuery.Call.Silence.OccurrenceTotal): void;

      hasDurationPercentage(): boolean;
      clearDurationPercentage(): void;
      getDurationPercentage(): TranscriptQuery.Call.Silence.DurationPercentage | undefined;
      setDurationPercentage(value?: TranscriptQuery.Call.Silence.DurationPercentage): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Silence.AsObject;
      static toObject(includeInstance: boolean, msg: Silence): Silence.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Silence, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Silence;
      static deserializeBinaryFromReader(message: Silence, reader: jspb.BinaryReader): Silence;
    }

    export namespace Silence {
      export type AsObject = {
        durationTotal?: TranscriptQuery.Call.Silence.DurationTotal.AsObject,
        durationMax?: TranscriptQuery.Call.Silence.DurationMax.AsObject,
        occurrenceTotal?: TranscriptQuery.Call.Silence.OccurrenceTotal.AsObject,
        durationPercentage?: TranscriptQuery.Call.Silence.DurationPercentage.AsObject,
      }

      export class DurationTotal extends jspb.Message {
        hasGte(): boolean;
        clearGte(): void;
        getGte(): google_protobuf_duration_pb.Duration | undefined;
        setGte(value?: google_protobuf_duration_pb.Duration): void;

        hasLte(): boolean;
        clearLte(): void;
        getLte(): google_protobuf_duration_pb.Duration | undefined;
        setLte(value?: google_protobuf_duration_pb.Duration): void;

        hasGt(): boolean;
        clearGt(): void;
        getGt(): google_protobuf_duration_pb.Duration | undefined;
        setGt(value?: google_protobuf_duration_pb.Duration): void;

        hasLt(): boolean;
        clearLt(): void;
        getLt(): google_protobuf_duration_pb.Duration | undefined;
        setLt(value?: google_protobuf_duration_pb.Duration): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): DurationTotal.AsObject;
        static toObject(includeInstance: boolean, msg: DurationTotal): DurationTotal.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: DurationTotal, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): DurationTotal;
        static deserializeBinaryFromReader(message: DurationTotal, reader: jspb.BinaryReader): DurationTotal;
      }

      export namespace DurationTotal {
        export type AsObject = {
          gte?: google_protobuf_duration_pb.Duration.AsObject,
          lte?: google_protobuf_duration_pb.Duration.AsObject,
          gt?: google_protobuf_duration_pb.Duration.AsObject,
          lt?: google_protobuf_duration_pb.Duration.AsObject,
        }
      }

      export class DurationMax extends jspb.Message {
        hasGte(): boolean;
        clearGte(): void;
        getGte(): google_protobuf_duration_pb.Duration | undefined;
        setGte(value?: google_protobuf_duration_pb.Duration): void;

        hasLte(): boolean;
        clearLte(): void;
        getLte(): google_protobuf_duration_pb.Duration | undefined;
        setLte(value?: google_protobuf_duration_pb.Duration): void;

        hasGt(): boolean;
        clearGt(): void;
        getGt(): google_protobuf_duration_pb.Duration | undefined;
        setGt(value?: google_protobuf_duration_pb.Duration): void;

        hasLt(): boolean;
        clearLt(): void;
        getLt(): google_protobuf_duration_pb.Duration | undefined;
        setLt(value?: google_protobuf_duration_pb.Duration): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): DurationMax.AsObject;
        static toObject(includeInstance: boolean, msg: DurationMax): DurationMax.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: DurationMax, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): DurationMax;
        static deserializeBinaryFromReader(message: DurationMax, reader: jspb.BinaryReader): DurationMax;
      }

      export namespace DurationMax {
        export type AsObject = {
          gte?: google_protobuf_duration_pb.Duration.AsObject,
          lte?: google_protobuf_duration_pb.Duration.AsObject,
          gt?: google_protobuf_duration_pb.Duration.AsObject,
          lt?: google_protobuf_duration_pb.Duration.AsObject,
        }
      }

      export class OccurrenceTotal extends jspb.Message {
        hasGte(): boolean;
        clearGte(): void;
        getGte(): google_protobuf_wrappers_pb.UInt32Value | undefined;
        setGte(value?: google_protobuf_wrappers_pb.UInt32Value): void;

        hasLte(): boolean;
        clearLte(): void;
        getLte(): google_protobuf_wrappers_pb.UInt32Value | undefined;
        setLte(value?: google_protobuf_wrappers_pb.UInt32Value): void;

        hasGt(): boolean;
        clearGt(): void;
        getGt(): google_protobuf_wrappers_pb.UInt32Value | undefined;
        setGt(value?: google_protobuf_wrappers_pb.UInt32Value): void;

        hasLt(): boolean;
        clearLt(): void;
        getLt(): google_protobuf_wrappers_pb.UInt32Value | undefined;
        setLt(value?: google_protobuf_wrappers_pb.UInt32Value): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): OccurrenceTotal.AsObject;
        static toObject(includeInstance: boolean, msg: OccurrenceTotal): OccurrenceTotal.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: OccurrenceTotal, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): OccurrenceTotal;
        static deserializeBinaryFromReader(message: OccurrenceTotal, reader: jspb.BinaryReader): OccurrenceTotal;
      }

      export namespace OccurrenceTotal {
        export type AsObject = {
          gte?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
          lte?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
          gt?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
          lt?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
        }
      }

      export class DurationPercentage extends jspb.Message {
        hasGte(): boolean;
        clearGte(): void;
        getGte(): google_protobuf_wrappers_pb.UInt32Value | undefined;
        setGte(value?: google_protobuf_wrappers_pb.UInt32Value): void;

        hasLte(): boolean;
        clearLte(): void;
        getLte(): google_protobuf_wrappers_pb.UInt32Value | undefined;
        setLte(value?: google_protobuf_wrappers_pb.UInt32Value): void;

        hasGt(): boolean;
        clearGt(): void;
        getGt(): google_protobuf_wrappers_pb.UInt32Value | undefined;
        setGt(value?: google_protobuf_wrappers_pb.UInt32Value): void;

        hasLt(): boolean;
        clearLt(): void;
        getLt(): google_protobuf_wrappers_pb.UInt32Value | undefined;
        setLt(value?: google_protobuf_wrappers_pb.UInt32Value): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): DurationPercentage.AsObject;
        static toObject(includeInstance: boolean, msg: DurationPercentage): DurationPercentage.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: DurationPercentage, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): DurationPercentage;
        static deserializeBinaryFromReader(message: DurationPercentage, reader: jspb.BinaryReader): DurationPercentage;
      }

      export namespace DurationPercentage {
        export type AsObject = {
          gte?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
          lte?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
          gt?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
          lt?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
        }
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
    clearAndList(): void;
    getAndList(): Array<TranscriptQuery.Threads>;
    setAndList(value: Array<TranscriptQuery.Threads>): void;
    addAnd(value?: TranscriptQuery.Threads, index?: number): TranscriptQuery.Threads;

    clearOrList(): void;
    getOrList(): Array<TranscriptQuery.Threads>;
    setOrList(value: Array<TranscriptQuery.Threads>): void;
    addOr(value?: TranscriptQuery.Threads, index?: number): TranscriptQuery.Threads;

    hasId(): boolean;
    clearId(): void;
    getId(): TranscriptQuery.Threads.Id | undefined;
    setId(value?: TranscriptQuery.Threads.Id): void;

    hasText(): boolean;
    clearText(): void;
    getText(): TranscriptQuery.Threads.Text | undefined;
    setText(value?: TranscriptQuery.Threads.Text): void;

    hasUserId(): boolean;
    clearUserId(): void;
    getUserId(): TranscriptQuery.Threads.UserId | undefined;
    setUserId(value?: TranscriptQuery.Threads.UserId): void;

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
      andList: Array<TranscriptQuery.Threads.AsObject>,
      orList: Array<TranscriptQuery.Threads.AsObject>,
      id?: TranscriptQuery.Threads.Id.AsObject,
      text?: TranscriptQuery.Threads.Text.AsObject,
      userId?: TranscriptQuery.Threads.UserId.AsObject,
    }

    export class UserId extends jspb.Message {
      clearAnyList(): void;
      getAnyList(): Array<string>;
      setAnyList(value: Array<string>): void;
      addAny(value: string, index?: number): string;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): UserId.AsObject;
      static toObject(includeInstance: boolean, msg: UserId): UserId.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: UserId, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): UserId;
      static deserializeBinaryFromReader(message: UserId, reader: jspb.BinaryReader): UserId;
    }

    export namespace UserId {
      export type AsObject = {
        anyList: Array<string>,
      }
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

      hasTimespan(): boolean;
      clearTimespan(): void;
      getTimespan(): TranscriptQuery.Threads.Text.Timespan | undefined;
      setTimespan(value?: TranscriptQuery.Threads.Text.Timespan): void;

      getNot(): boolean;
      setNot(value: boolean): void;

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
        timespan?: TranscriptQuery.Threads.Text.Timespan.AsObject,
        not: boolean,
      }

      export class Timespan extends jspb.Message {
        hasHead(): boolean;
        clearHead(): void;
        getHead(): google_protobuf_duration_pb.Duration | undefined;
        setHead(value?: google_protobuf_duration_pb.Duration): void;

        hasTail(): boolean;
        clearTail(): void;
        getTail(): google_protobuf_duration_pb.Duration | undefined;
        setTail(value?: google_protobuf_duration_pb.Duration): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Timespan.AsObject;
        static toObject(includeInstance: boolean, msg: Timespan): Timespan.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Timespan, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Timespan;
        static deserializeBinaryFromReader(message: Timespan, reader: jspb.BinaryReader): Timespan;
      }

      export namespace Timespan {
        export type AsObject = {
          head?: google_protobuf_duration_pb.Duration.AsObject,
          tail?: google_protobuf_duration_pb.Duration.AsObject,
        }
      }
    }
  }

  export class FlagSummary extends jspb.Message {
    hasNeedReview(): boolean;
    clearNeedReview(): void;
    getNeedReview(): TranscriptQuery.FlagSummary.NeedReview | undefined;
    setNeedReview(value?: TranscriptQuery.FlagSummary.NeedReview): void;

    hasReviewStatus(): boolean;
    clearReviewStatus(): void;
    getReviewStatus(): TranscriptQuery.FlagSummary.ReviewStatus | undefined;
    setReviewStatus(value?: TranscriptQuery.FlagSummary.ReviewStatus): void;

    hasFlags(): boolean;
    clearFlags(): void;
    getFlags(): TranscriptQuery.FlagSummary.Flags | undefined;
    setFlags(value?: TranscriptQuery.FlagSummary.Flags): void;

    hasCount(): boolean;
    clearCount(): void;
    getCount(): TranscriptQuery.FlagSummary.Count | undefined;
    setCount(value?: TranscriptQuery.FlagSummary.Count): void;

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
      needReview?: TranscriptQuery.FlagSummary.NeedReview.AsObject,
      reviewStatus?: TranscriptQuery.FlagSummary.ReviewStatus.AsObject,
      flags?: TranscriptQuery.FlagSummary.Flags.AsObject,
      count?: TranscriptQuery.FlagSummary.Count.AsObject,
    }

    export class NeedReview extends jspb.Message {
      hasFlagSids(): boolean;
      clearFlagSids(): void;
      getFlagSids(): TranscriptQuery.FlagSummary.NeedReview.FlagSids | undefined;
      setFlagSids(value?: TranscriptQuery.FlagSummary.NeedReview.FlagSids): void;

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
        flagSids?: TranscriptQuery.FlagSummary.NeedReview.FlagSids.AsObject,
      }

      export class FlagSids extends jspb.Message {
        clearAnyList(): void;
        getAnyList(): Array<number>;
        setAnyList(value: Array<number>): void;
        addAny(value: number, index?: number): number;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): FlagSids.AsObject;
        static toObject(includeInstance: boolean, msg: FlagSids): FlagSids.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: FlagSids, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): FlagSids;
        static deserializeBinaryFromReader(message: FlagSids, reader: jspb.BinaryReader): FlagSids;
      }

      export namespace FlagSids {
        export type AsObject = {
          anyList: Array<number>,
        }
      }
    }

    export class ReviewStatus extends jspb.Message {
      clearAnyList(): void;
      getAnyList(): Array<ReviewStatusMap[keyof ReviewStatusMap]>;
      setAnyList(value: Array<ReviewStatusMap[keyof ReviewStatusMap]>): void;
      addAny(value: ReviewStatusMap[keyof ReviewStatusMap], index?: number): ReviewStatusMap[keyof ReviewStatusMap];

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ReviewStatus.AsObject;
      static toObject(includeInstance: boolean, msg: ReviewStatus): ReviewStatus.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ReviewStatus, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ReviewStatus;
      static deserializeBinaryFromReader(message: ReviewStatus, reader: jspb.BinaryReader): ReviewStatus;
    }

    export namespace ReviewStatus {
      export type AsObject = {
        anyList: Array<ReviewStatusMap[keyof ReviewStatusMap]>,
      }
    }

    export class Flags extends jspb.Message {
      hasFlagSid(): boolean;
      clearFlagSid(): void;
      getFlagSid(): TranscriptQuery.FlagSummary.Flags.FlagSid | undefined;
      setFlagSid(value?: TranscriptQuery.FlagSummary.Flags.FlagSid): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Flags.AsObject;
      static toObject(includeInstance: boolean, msg: Flags): Flags.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Flags, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Flags;
      static deserializeBinaryFromReader(message: Flags, reader: jspb.BinaryReader): Flags;
    }

    export namespace Flags {
      export type AsObject = {
        flagSid?: TranscriptQuery.FlagSummary.Flags.FlagSid.AsObject,
      }

      export class FlagSid extends jspb.Message {
        clearAnyList(): void;
        getAnyList(): Array<number>;
        setAnyList(value: Array<number>): void;
        addAny(value: number, index?: number): number;

        clearAllList(): void;
        getAllList(): Array<number>;
        setAllList(value: Array<number>): void;
        addAll(value: number, index?: number): number;

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
          anyList: Array<number>,
          allList: Array<number>,
        }
      }
    }

    export class Count extends jspb.Message {
      hasGte(): boolean;
      clearGte(): void;
      getGte(): google_protobuf_wrappers_pb.Int32Value | undefined;
      setGte(value?: google_protobuf_wrappers_pb.Int32Value): void;

      hasLte(): boolean;
      clearLte(): void;
      getLte(): google_protobuf_wrappers_pb.Int32Value | undefined;
      setLte(value?: google_protobuf_wrappers_pb.Int32Value): void;

      hasGt(): boolean;
      clearGt(): void;
      getGt(): google_protobuf_wrappers_pb.Int32Value | undefined;
      setGt(value?: google_protobuf_wrappers_pb.Int32Value): void;

      hasLt(): boolean;
      clearLt(): void;
      getLt(): google_protobuf_wrappers_pb.Int32Value | undefined;
      setLt(value?: google_protobuf_wrappers_pb.Int32Value): void;

      hasEq(): boolean;
      clearEq(): void;
      getEq(): google_protobuf_wrappers_pb.Int32Value | undefined;
      setEq(value?: google_protobuf_wrappers_pb.Int32Value): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Count.AsObject;
      static toObject(includeInstance: boolean, msg: Count): Count.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Count, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Count;
      static deserializeBinaryFromReader(message: Count, reader: jspb.BinaryReader): Count;
    }

    export namespace Count {
      export type AsObject = {
        gte?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        lte?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        gt?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        lt?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        eq?: google_protobuf_wrappers_pb.Int32Value.AsObject,
      }
    }
  }

  export class StartTime extends jspb.Message {
    hasGte(): boolean;
    clearGte(): void;
    getGte(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setGte(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasLte(): boolean;
    clearLte(): void;
    getLte(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLte(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasGt(): boolean;
    clearGt(): void;
    getGt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setGt(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasLt(): boolean;
    clearLt(): void;
    getLt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLt(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasMoment(): boolean;
    clearMoment(): void;
    getMoment(): Moment | undefined;
    setMoment(value?: Moment): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartTime.AsObject;
    static toObject(includeInstance: boolean, msg: StartTime): StartTime.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartTime, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartTime;
    static deserializeBinaryFromReader(message: StartTime, reader: jspb.BinaryReader): StartTime;
  }

  export namespace StartTime {
    export type AsObject = {
      gte?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      lte?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      gt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      lt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      moment?: Moment.AsObject,
    }
  }

  export class DeleteTime extends jspb.Message {
    hasGte(): boolean;
    clearGte(): void;
    getGte(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setGte(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasLte(): boolean;
    clearLte(): void;
    getLte(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLte(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasGt(): boolean;
    clearGt(): void;
    getGt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setGt(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasLt(): boolean;
    clearLt(): void;
    getLt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLt(value?: google_protobuf_timestamp_pb.Timestamp): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteTime.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteTime): DeleteTime.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteTime, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteTime;
    static deserializeBinaryFromReader(message: DeleteTime, reader: jspb.BinaryReader): DeleteTime;
  }

  export namespace DeleteTime {
    export type AsObject = {
      gte?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      lte?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      gt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      lt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }
}

export class Moment extends jspb.Message {
  getTimeZone(): string;
  setTimeZone(value: string): void;

  getInterval(): api_commons_vanalytics_pb.IntervalMap[keyof api_commons_vanalytics_pb.IntervalMap];
  setInterval(value: api_commons_vanalytics_pb.IntervalMap[keyof api_commons_vanalytics_pb.IntervalMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Moment.AsObject;
  static toObject(includeInstance: boolean, msg: Moment): Moment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Moment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Moment;
  static deserializeBinaryFromReader(message: Moment, reader: jspb.BinaryReader): Moment;
}

export namespace Moment {
  export type AsObject = {
    timeZone: string,
    interval: api_commons_vanalytics_pb.IntervalMap[keyof api_commons_vanalytics_pb.IntervalMap],
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

