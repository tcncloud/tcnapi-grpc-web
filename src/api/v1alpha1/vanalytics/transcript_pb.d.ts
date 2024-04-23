// package: api.v1alpha1.vanalytics
// file: api/v1alpha1/vanalytics/transcript.proto

import * as jspb from "google-protobuf";
import * as api_commons_acd_pb from "../../../api/commons/acd_pb";
import * as api_v1alpha1_vanalytics_aclpb_aclpb_pb from "../../../api/v1alpha1/vanalytics/aclpb/aclpb_pb";
import * as api_v1alpha1_vanalytics_expr_pb from "../../../api/v1alpha1/vanalytics/expr_pb";
import * as api_v1alpha1_vanalytics_transcript_summary_pb from "../../../api/v1alpha1/vanalytics/transcript_summary_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class BulkDeleteTranscriptsRequest extends jspb.Message {
  hasQuery(): boolean;
  clearQuery(): void;
  getQuery(): SearchRequest | undefined;
  setQuery(value?: SearchRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BulkDeleteTranscriptsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BulkDeleteTranscriptsRequest): BulkDeleteTranscriptsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BulkDeleteTranscriptsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BulkDeleteTranscriptsRequest;
  static deserializeBinaryFromReader(message: BulkDeleteTranscriptsRequest, reader: jspb.BinaryReader): BulkDeleteTranscriptsRequest;
}

export namespace BulkDeleteTranscriptsRequest {
  export type AsObject = {
    query?: SearchRequest.AsObject,
  }
}

export class BulkDeleteTranscriptsResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BulkDeleteTranscriptsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BulkDeleteTranscriptsResponse): BulkDeleteTranscriptsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BulkDeleteTranscriptsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BulkDeleteTranscriptsResponse;
  static deserializeBinaryFromReader(message: BulkDeleteTranscriptsResponse, reader: jspb.BinaryReader): BulkDeleteTranscriptsResponse;
}

export namespace BulkDeleteTranscriptsResponse {
  export type AsObject = {
    total: number,
  }
}

export class BulkRestoreTranscriptsRequest extends jspb.Message {
  hasQuery(): boolean;
  clearQuery(): void;
  getQuery(): SearchRequest | undefined;
  setQuery(value?: SearchRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BulkRestoreTranscriptsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BulkRestoreTranscriptsRequest): BulkRestoreTranscriptsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BulkRestoreTranscriptsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BulkRestoreTranscriptsRequest;
  static deserializeBinaryFromReader(message: BulkRestoreTranscriptsRequest, reader: jspb.BinaryReader): BulkRestoreTranscriptsRequest;
}

export namespace BulkRestoreTranscriptsRequest {
  export type AsObject = {
    query?: SearchRequest.AsObject,
  }
}

export class BulkRestoreTranscriptsResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BulkRestoreTranscriptsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BulkRestoreTranscriptsResponse): BulkRestoreTranscriptsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BulkRestoreTranscriptsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BulkRestoreTranscriptsResponse;
  static deserializeBinaryFromReader(message: BulkRestoreTranscriptsResponse, reader: jspb.BinaryReader): BulkRestoreTranscriptsResponse;
}

export namespace BulkRestoreTranscriptsResponse {
  export type AsObject = {
    total: number,
  }
}

export class SearchRequest extends jspb.Message {
  hasSilence(): boolean;
  clearSilence(): void;
  getSilence(): SearchRequest.Silence | undefined;
  setSilence(value?: SearchRequest.Silence): void;

  hasTalkTime(): boolean;
  clearTalkTime(): void;
  getTalkTime(): api_v1alpha1_vanalytics_expr_pb.Uint32Expr | undefined;
  setTalkTime(value?: api_v1alpha1_vanalytics_expr_pb.Uint32Expr): void;

  hasAgent(): boolean;
  clearAgent(): void;
  getAgent(): SearchRequest.Agent | undefined;
  setAgent(value?: SearchRequest.Agent): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  hasSort(): boolean;
  clearSort(): void;
  getSort(): Sort | undefined;
  setSort(value?: Sort): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): api_v1alpha1_vanalytics_expr_pb.TimestampExpr | undefined;
  setCreateTime(value?: api_v1alpha1_vanalytics_expr_pb.TimestampExpr): void;

  hasTalkOver(): boolean;
  clearTalkOver(): void;
  getTalkOver(): SearchRequest.TalkOver | undefined;
  setTalkOver(value?: SearchRequest.TalkOver): void;

  hasTerms(): boolean;
  clearTerms(): void;
  getTerms(): SearchRequest.Terms | undefined;
  setTerms(value?: SearchRequest.Terms): void;

  getChannel(): number;
  setChannel(value: number): void;

  hasPhrase(): boolean;
  clearPhrase(): void;
  getPhrase(): SearchRequest.Phrase | undefined;
  setPhrase(value?: SearchRequest.Phrase): void;

  hasTranscriptMask(): boolean;
  clearTranscriptMask(): void;
  getTranscriptMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setTranscriptMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getTranscriptSid(): number;
  setTranscriptSid(value: number): void;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): void;

  getCallerId(): string;
  setCallerId(value: string): void;

  clearTranscriptSidsList(): void;
  getTranscriptSidsList(): Array<number>;
  setTranscriptSidsList(value: Array<number>): void;
  addTranscriptSids(value: number, index?: number): number;

  hasCallStartTime(): boolean;
  clearCallStartTime(): void;
  getCallStartTime(): api_v1alpha1_vanalytics_expr_pb.TimestampExpr | undefined;
  setCallStartTime(value?: api_v1alpha1_vanalytics_expr_pb.TimestampExpr): void;

  clearCallTypesList(): void;
  getCallTypesList(): Array<api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]>;
  setCallTypesList(value: Array<api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]>): void;
  addCallTypes(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap], index?: number): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];

  clearCallSidsList(): void;
  getCallSidsList(): Array<number>;
  setCallSidsList(value: Array<number>): void;
  addCallSids(value: number, index?: number): number;

  clearHuntGroupSidsList(): void;
  getHuntGroupSidsList(): Array<number>;
  setHuntGroupSidsList(value: Array<number>): void;
  addHuntGroupSids(value: number, index?: number): number;

  clearGroupNamesList(): void;
  getGroupNamesList(): Array<string>;
  setGroupNamesList(value: Array<string>): void;
  addGroupNames(value: string, index?: number): string;

  hasAgentCallLog(): boolean;
  clearAgentCallLog(): void;
  getAgentCallLog(): AgentCallLogQuery | undefined;
  setAgentCallLog(value?: AgentCallLogQuery): void;

  hasWhere(): boolean;
  clearWhere(): void;
  getWhere(): SearchQuery | undefined;
  setWhere(value?: SearchQuery): void;

  hasTimeFrame(): boolean;
  clearTimeFrame(): void;
  getTimeFrame(): api_v1alpha1_vanalytics_expr_pb.Uint32Range | undefined;
  setTimeFrame(value?: api_v1alpha1_vanalytics_expr_pb.Uint32Range): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchRequest): SearchRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchRequest;
  static deserializeBinaryFromReader(message: SearchRequest, reader: jspb.BinaryReader): SearchRequest;
}

export namespace SearchRequest {
  export type AsObject = {
    silence?: SearchRequest.Silence.AsObject,
    talkTime?: api_v1alpha1_vanalytics_expr_pb.Uint32Expr.AsObject,
    agent?: SearchRequest.Agent.AsObject,
    pageSize: number,
    sort?: Sort.AsObject,
    createTime?: api_v1alpha1_vanalytics_expr_pb.TimestampExpr.AsObject,
    talkOver?: SearchRequest.TalkOver.AsObject,
    terms?: SearchRequest.Terms.AsObject,
    channel: number,
    phrase?: SearchRequest.Phrase.AsObject,
    transcriptMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    transcriptSid: number,
    phoneNumber: string,
    callerId: string,
    transcriptSidsList: Array<number>,
    callStartTime?: api_v1alpha1_vanalytics_expr_pb.TimestampExpr.AsObject,
    callTypesList: Array<api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]>,
    callSidsList: Array<number>,
    huntGroupSidsList: Array<number>,
    groupNamesList: Array<string>,
    agentCallLog?: AgentCallLogQuery.AsObject,
    where?: SearchQuery.AsObject,
    timeFrame?: api_v1alpha1_vanalytics_expr_pb.Uint32Range.AsObject,
  }

  export class Phrase extends jspb.Message {
    clearWordsList(): void;
    getWordsList(): Array<SearchRequest.Phrase.Word>;
    setWordsList(value: Array<SearchRequest.Phrase.Word>): void;
    addWords(value?: SearchRequest.Phrase.Word, index?: number): SearchRequest.Phrase.Word;

    getSlop(): number;
    setSlop(value: number): void;

    getInOrder(): boolean;
    setInOrder(value: boolean): void;

    hasHighlight(): boolean;
    clearHighlight(): void;
    getHighlight(): SearchRequest.Phrase.Highlight | undefined;
    setHighlight(value?: SearchRequest.Phrase.Highlight): void;

    getNot(): boolean;
    setNot(value: boolean): void;

    hasAgent(): boolean;
    clearAgent(): void;
    getAgent(): SearchRequest.Agent | undefined;
    setAgent(value?: SearchRequest.Agent): void;

    getChannel(): number;
    setChannel(value: number): void;

    hasPositionOffset(): boolean;
    clearPositionOffset(): void;
    getPositionOffset(): SearchRequest.PositionOffset | undefined;
    setPositionOffset(value?: SearchRequest.PositionOffset): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Phrase.AsObject;
    static toObject(includeInstance: boolean, msg: Phrase): Phrase.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Phrase, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Phrase;
    static deserializeBinaryFromReader(message: Phrase, reader: jspb.BinaryReader): Phrase;
  }

  export namespace Phrase {
    export type AsObject = {
      wordsList: Array<SearchRequest.Phrase.Word.AsObject>,
      slop: number,
      inOrder: boolean,
      highlight?: SearchRequest.Phrase.Highlight.AsObject,
      not: boolean,
      agent?: SearchRequest.Agent.AsObject,
      channel: number,
      positionOffset?: SearchRequest.PositionOffset.AsObject,
    }

    export class Word extends jspb.Message {
      getValue(): string;
      setValue(value: string): void;

      getFuzziness(): string;
      setFuzziness(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Word.AsObject;
      static toObject(includeInstance: boolean, msg: Word): Word.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Word, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Word;
      static deserializeBinaryFromReader(message: Word, reader: jspb.BinaryReader): Word;
    }

    export namespace Word {
      export type AsObject = {
        value: string,
        fuzziness: string,
      }
    }

    export class Highlight extends jspb.Message {
      clearPreTagsList(): void;
      getPreTagsList(): Array<string>;
      setPreTagsList(value: Array<string>): void;
      addPreTags(value: string, index?: number): string;

      clearPostTagsList(): void;
      getPostTagsList(): Array<string>;
      setPostTagsList(value: Array<string>): void;
      addPostTags(value: string, index?: number): string;

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
        preTagsList: Array<string>,
        postTagsList: Array<string>,
      }
    }
  }

  export class PositionOffset extends jspb.Message {
    hasStart(): boolean;
    clearStart(): void;
    getStart(): google_protobuf_duration_pb.Duration | undefined;
    setStart(value?: google_protobuf_duration_pb.Duration): void;

    hasStop(): boolean;
    clearStop(): void;
    getStop(): google_protobuf_duration_pb.Duration | undefined;
    setStop(value?: google_protobuf_duration_pb.Duration): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PositionOffset.AsObject;
    static toObject(includeInstance: boolean, msg: PositionOffset): PositionOffset.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PositionOffset, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PositionOffset;
    static deserializeBinaryFromReader(message: PositionOffset, reader: jspb.BinaryReader): PositionOffset;
  }

  export namespace PositionOffset {
    export type AsObject = {
      start?: google_protobuf_duration_pb.Duration.AsObject,
      stop?: google_protobuf_duration_pb.Duration.AsObject,
    }
  }

  export class Silence extends jspb.Message {
    hasDurationTotal(): boolean;
    clearDurationTotal(): void;
    getDurationTotal(): api_v1alpha1_vanalytics_expr_pb.Uint32Expr | undefined;
    setDurationTotal(value?: api_v1alpha1_vanalytics_expr_pb.Uint32Expr): void;

    hasDurationMax(): boolean;
    clearDurationMax(): void;
    getDurationMax(): api_v1alpha1_vanalytics_expr_pb.Uint32Expr | undefined;
    setDurationMax(value?: api_v1alpha1_vanalytics_expr_pb.Uint32Expr): void;

    hasOccurrenceTotal(): boolean;
    clearOccurrenceTotal(): void;
    getOccurrenceTotal(): api_v1alpha1_vanalytics_expr_pb.Uint32Expr | undefined;
    setOccurrenceTotal(value?: api_v1alpha1_vanalytics_expr_pb.Uint32Expr): void;

    hasDurationPercentage(): boolean;
    clearDurationPercentage(): void;
    getDurationPercentage(): api_v1alpha1_vanalytics_expr_pb.Uint32Expr | undefined;
    setDurationPercentage(value?: api_v1alpha1_vanalytics_expr_pb.Uint32Expr): void;

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
      durationTotal?: api_v1alpha1_vanalytics_expr_pb.Uint32Expr.AsObject,
      durationMax?: api_v1alpha1_vanalytics_expr_pb.Uint32Expr.AsObject,
      occurrenceTotal?: api_v1alpha1_vanalytics_expr_pb.Uint32Expr.AsObject,
      durationPercentage?: api_v1alpha1_vanalytics_expr_pb.Uint32Expr.AsObject,
    }
  }

  export class TalkOver extends jspb.Message {
    hasDurationTotal(): boolean;
    clearDurationTotal(): void;
    getDurationTotal(): api_v1alpha1_vanalytics_expr_pb.Uint32Expr | undefined;
    setDurationTotal(value?: api_v1alpha1_vanalytics_expr_pb.Uint32Expr): void;

    hasDurationMax(): boolean;
    clearDurationMax(): void;
    getDurationMax(): api_v1alpha1_vanalytics_expr_pb.Uint32Expr | undefined;
    setDurationMax(value?: api_v1alpha1_vanalytics_expr_pb.Uint32Expr): void;

    hasOccurrenceTotal(): boolean;
    clearOccurrenceTotal(): void;
    getOccurrenceTotal(): api_v1alpha1_vanalytics_expr_pb.Uint32Expr | undefined;
    setOccurrenceTotal(value?: api_v1alpha1_vanalytics_expr_pb.Uint32Expr): void;

    hasDurationPercentage(): boolean;
    clearDurationPercentage(): void;
    getDurationPercentage(): api_v1alpha1_vanalytics_expr_pb.Uint32Expr | undefined;
    setDurationPercentage(value?: api_v1alpha1_vanalytics_expr_pb.Uint32Expr): void;

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
      durationTotal?: api_v1alpha1_vanalytics_expr_pb.Uint32Expr.AsObject,
      durationMax?: api_v1alpha1_vanalytics_expr_pb.Uint32Expr.AsObject,
      occurrenceTotal?: api_v1alpha1_vanalytics_expr_pb.Uint32Expr.AsObject,
      durationPercentage?: api_v1alpha1_vanalytics_expr_pb.Uint32Expr.AsObject,
    }
  }

  export class Terms extends jspb.Message {
    clearAnyList(): void;
    getAnyList(): Array<string>;
    setAnyList(value: Array<string>): void;
    addAny(value: string, index?: number): string;

    clearAllList(): void;
    getAllList(): Array<string>;
    setAllList(value: Array<string>): void;
    addAll(value: string, index?: number): string;

    getNot(): boolean;
    setNot(value: boolean): void;

    hasAgent(): boolean;
    clearAgent(): void;
    getAgent(): SearchRequest.Agent | undefined;
    setAgent(value?: SearchRequest.Agent): void;

    getChannel(): number;
    setChannel(value: number): void;

    hasPositionOffset(): boolean;
    clearPositionOffset(): void;
    getPositionOffset(): SearchRequest.PositionOffset | undefined;
    setPositionOffset(value?: SearchRequest.PositionOffset): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Terms.AsObject;
    static toObject(includeInstance: boolean, msg: Terms): Terms.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Terms, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Terms;
    static deserializeBinaryFromReader(message: Terms, reader: jspb.BinaryReader): Terms;
  }

  export namespace Terms {
    export type AsObject = {
      anyList: Array<string>,
      allList: Array<string>,
      not: boolean,
      agent?: SearchRequest.Agent.AsObject,
      channel: number,
      positionOffset?: SearchRequest.PositionOffset.AsObject,
    }
  }

  export class Agent extends jspb.Message {
    hasUserName(): boolean;
    clearUserName(): void;
    getUserName(): SearchRequest.Agent.UserName | undefined;
    setUserName(value?: SearchRequest.Agent.UserName): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Agent.AsObject;
    static toObject(includeInstance: boolean, msg: Agent): Agent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Agent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Agent;
    static deserializeBinaryFromReader(message: Agent, reader: jspb.BinaryReader): Agent;
  }

  export namespace Agent {
    export type AsObject = {
      userName?: SearchRequest.Agent.UserName.AsObject,
    }

    export class UserName extends jspb.Message {
      clearAnyList(): void;
      getAnyList(): Array<string>;
      setAnyList(value: Array<string>): void;
      addAny(value: string, index?: number): string;

      clearAllList(): void;
      getAllList(): Array<string>;
      setAllList(value: Array<string>): void;
      addAll(value: string, index?: number): string;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): UserName.AsObject;
      static toObject(includeInstance: boolean, msg: UserName): UserName.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: UserName, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): UserName;
      static deserializeBinaryFromReader(message: UserName, reader: jspb.BinaryReader): UserName;
    }

    export namespace UserName {
      export type AsObject = {
        anyList: Array<string>,
        allList: Array<string>,
      }
    }
  }
}

export class SearchQuery extends jspb.Message {
  hasTranscriptSid(): boolean;
  clearTranscriptSid(): void;
  getTranscriptSid(): SearchQuery.TranscriptSid | undefined;
  setTranscriptSid(value?: SearchQuery.TranscriptSid): void;

  hasFlagSummary(): boolean;
  clearFlagSummary(): void;
  getFlagSummary(): SearchQuery.FlagSummary | undefined;
  setFlagSummary(value?: SearchQuery.FlagSummary): void;

  clearOrList(): void;
  getOrList(): Array<SearchQuery>;
  setOrList(value: Array<SearchQuery>): void;
  addOr(value?: SearchQuery, index?: number): SearchQuery;

  clearAndList(): void;
  getAndList(): Array<SearchQuery>;
  setAndList(value: Array<SearchQuery>): void;
  addAnd(value?: SearchQuery, index?: number): SearchQuery;

  hasAudioTime(): boolean;
  clearAudioTime(): void;
  getAudioTime(): SearchQuery.AudioTime | undefined;
  setAudioTime(value?: SearchQuery.AudioTime): void;

  hasDeleteTime(): boolean;
  clearDeleteTime(): void;
  getDeleteTime(): SearchQuery.DeleteTime | undefined;
  setDeleteTime(value?: SearchQuery.DeleteTime): void;

  hasNot(): boolean;
  clearNot(): void;
  getNot(): SearchQuery | undefined;
  setNot(value?: SearchQuery): void;

  hasResults(): boolean;
  clearResults(): void;
  getResults(): SearchQuery.Results | undefined;
  setResults(value?: SearchQuery.Results): void;

  hasAgentResponse(): boolean;
  clearAgentResponse(): void;
  getAgentResponse(): SearchQuery.AgentResponse | undefined;
  setAgentResponse(value?: SearchQuery.AgentResponse): void;

  hasAgentCallLog(): boolean;
  clearAgentCallLog(): void;
  getAgentCallLog(): SearchQuery.AgentCallLog | undefined;
  setAgentCallLog(value?: SearchQuery.AgentCallLog): void;

  hasPhone(): boolean;
  clearPhone(): void;
  getPhone(): SearchQuery.Phone | undefined;
  setPhone(value?: SearchQuery.Phone): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchQuery.AsObject;
  static toObject(includeInstance: boolean, msg: SearchQuery): SearchQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchQuery;
  static deserializeBinaryFromReader(message: SearchQuery, reader: jspb.BinaryReader): SearchQuery;
}

export namespace SearchQuery {
  export type AsObject = {
    transcriptSid?: SearchQuery.TranscriptSid.AsObject,
    flagSummary?: SearchQuery.FlagSummary.AsObject,
    orList: Array<SearchQuery.AsObject>,
    andList: Array<SearchQuery.AsObject>,
    audioTime?: SearchQuery.AudioTime.AsObject,
    deleteTime?: SearchQuery.DeleteTime.AsObject,
    not?: SearchQuery.AsObject,
    results?: SearchQuery.Results.AsObject,
    agentResponse?: SearchQuery.AgentResponse.AsObject,
    agentCallLog?: SearchQuery.AgentCallLog.AsObject,
    phone?: SearchQuery.Phone.AsObject,
  }

  export class Phone extends jspb.Message {
    hasCc(): boolean;
    clearCc(): void;
    getCc(): SearchQuery.Cc | undefined;
    setCc(value?: SearchQuery.Cc): void;

    hasNdc(): boolean;
    clearNdc(): void;
    getNdc(): SearchQuery.Ndc | undefined;
    setNdc(value?: SearchQuery.Ndc): void;

    hasPrefix(): boolean;
    clearPrefix(): void;
    getPrefix(): SearchQuery.Prefix | undefined;
    setPrefix(value?: SearchQuery.Prefix): void;

    hasCity(): boolean;
    clearCity(): void;
    getCity(): SearchQuery.City | undefined;
    setCity(value?: SearchQuery.City): void;

    hasIso2(): boolean;
    clearIso2(): void;
    getIso2(): SearchQuery.Iso2 | undefined;
    setIso2(value?: SearchQuery.Iso2): void;

    hasRegionCode(): boolean;
    clearRegionCode(): void;
    getRegionCode(): SearchQuery.RegionCode | undefined;
    setRegionCode(value?: SearchQuery.RegionCode): void;

    hasRegionName(): boolean;
    clearRegionName(): void;
    getRegionName(): SearchQuery.RegionName | undefined;
    setRegionName(value?: SearchQuery.RegionName): void;

    hasTimeZone(): boolean;
    clearTimeZone(): void;
    getTimeZone(): SearchQuery.TimeZone | undefined;
    setTimeZone(value?: SearchQuery.TimeZone): void;

    hasType(): boolean;
    clearType(): void;
    getType(): SearchQuery.Type | undefined;
    setType(value?: SearchQuery.Type): void;

    hasUtc(): boolean;
    clearUtc(): void;
    getUtc(): SearchQuery.Utc | undefined;
    setUtc(value?: SearchQuery.Utc): void;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): SearchQuery.Location | undefined;
    setLocation(value?: SearchQuery.Location): void;

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
      cc?: SearchQuery.Cc.AsObject,
      ndc?: SearchQuery.Ndc.AsObject,
      prefix?: SearchQuery.Prefix.AsObject,
      city?: SearchQuery.City.AsObject,
      iso2?: SearchQuery.Iso2.AsObject,
      regionCode?: SearchQuery.RegionCode.AsObject,
      regionName?: SearchQuery.RegionName.AsObject,
      timeZone?: SearchQuery.TimeZone.AsObject,
      type?: SearchQuery.Type.AsObject,
      utc?: SearchQuery.Utc.AsObject,
      location?: SearchQuery.Location.AsObject,
    }
  }

  export class Cc extends jspb.Message {
    clearInList(): void;
    getInList(): Array<string>;
    setInList(value: Array<string>): void;
    addIn(value: string, index?: number): string;

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
      inList: Array<string>,
    }
  }

  export class Ndc extends jspb.Message {
    clearInList(): void;
    getInList(): Array<string>;
    setInList(value: Array<string>): void;
    addIn(value: string, index?: number): string;

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
      inList: Array<string>,
    }
  }

  export class Prefix extends jspb.Message {
    clearInList(): void;
    getInList(): Array<string>;
    setInList(value: Array<string>): void;
    addIn(value: string, index?: number): string;

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
      inList: Array<string>,
    }
  }

  export class City extends jspb.Message {
    clearInList(): void;
    getInList(): Array<string>;
    setInList(value: Array<string>): void;
    addIn(value: string, index?: number): string;

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
      inList: Array<string>,
    }
  }

  export class Iso2 extends jspb.Message {
    clearInList(): void;
    getInList(): Array<string>;
    setInList(value: Array<string>): void;
    addIn(value: string, index?: number): string;

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
      inList: Array<string>,
    }
  }

  export class RegionCode extends jspb.Message {
    clearInList(): void;
    getInList(): Array<string>;
    setInList(value: Array<string>): void;
    addIn(value: string, index?: number): string;

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
      inList: Array<string>,
    }
  }

  export class RegionName extends jspb.Message {
    clearInList(): void;
    getInList(): Array<string>;
    setInList(value: Array<string>): void;
    addIn(value: string, index?: number): string;

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
      inList: Array<string>,
    }
  }

  export class TimeZone extends jspb.Message {
    clearInList(): void;
    getInList(): Array<string>;
    setInList(value: Array<string>): void;
    addIn(value: string, index?: number): string;

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
      inList: Array<string>,
    }
  }

  export class Type extends jspb.Message {
    clearInList(): void;
    getInList(): Array<string>;
    setInList(value: Array<string>): void;
    addIn(value: string, index?: number): string;

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
      inList: Array<string>,
    }
  }

  export class Utc extends jspb.Message {
    clearInList(): void;
    getInList(): Array<number>;
    setInList(value: Array<number>): void;
    addIn(value: number, index?: number): number;

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
      inList: Array<number>,
    }
  }

  export class Location extends jspb.Message {
    hasZipCodeProximity(): boolean;
    clearZipCodeProximity(): void;
    getZipCodeProximity(): SearchQuery.Location.ZipCodeProximity | undefined;
    setZipCodeProximity(value?: SearchQuery.Location.ZipCodeProximity): void;

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
      zipCodeProximity?: SearchQuery.Location.ZipCodeProximity.AsObject,
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

  export class AgentCallLog extends jspb.Message {
    hasCallSkillsInitial(): boolean;
    clearCallSkillsInitial(): void;
    getCallSkillsInitial(): SearchQuery.CallSkillsInitial | undefined;
    setCallSkillsInitial(value?: SearchQuery.CallSkillsInitial): void;

    hasCallEnded(): boolean;
    clearCallEnded(): void;
    getCallEnded(): SearchQuery.CallEnded | undefined;
    setCallEnded(value?: SearchQuery.CallEnded): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AgentCallLog.AsObject;
    static toObject(includeInstance: boolean, msg: AgentCallLog): AgentCallLog.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AgentCallLog, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AgentCallLog;
    static deserializeBinaryFromReader(message: AgentCallLog, reader: jspb.BinaryReader): AgentCallLog;
  }

  export namespace AgentCallLog {
    export type AsObject = {
      callSkillsInitial?: SearchQuery.CallSkillsInitial.AsObject,
      callEnded?: SearchQuery.CallEnded.AsObject,
    }
  }

  export class CallEnded extends jspb.Message {
    clearReasonsList(): void;
    getReasonsList(): Array<api_commons_acd_pb.AgentCallLogCallEndedMap[keyof api_commons_acd_pb.AgentCallLogCallEndedMap]>;
    setReasonsList(value: Array<api_commons_acd_pb.AgentCallLogCallEndedMap[keyof api_commons_acd_pb.AgentCallLogCallEndedMap]>): void;
    addReasons(value: api_commons_acd_pb.AgentCallLogCallEndedMap[keyof api_commons_acd_pb.AgentCallLogCallEndedMap], index?: number): api_commons_acd_pb.AgentCallLogCallEndedMap[keyof api_commons_acd_pb.AgentCallLogCallEndedMap];

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallEnded.AsObject;
    static toObject(includeInstance: boolean, msg: CallEnded): CallEnded.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallEnded, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallEnded;
    static deserializeBinaryFromReader(message: CallEnded, reader: jspb.BinaryReader): CallEnded;
  }

  export namespace CallEnded {
    export type AsObject = {
      reasonsList: Array<api_commons_acd_pb.AgentCallLogCallEndedMap[keyof api_commons_acd_pb.AgentCallLogCallEndedMap]>,
    }
  }

  export class CallSkillsInitial extends jspb.Message {
    clearNeedList(): void;
    getNeedList(): Array<string>;
    setNeedList(value: Array<string>): void;
    addNeed(value: string, index?: number): string;

    clearWantList(): void;
    getWantList(): Array<string>;
    setWantList(value: Array<string>): void;
    addWant(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallSkillsInitial.AsObject;
    static toObject(includeInstance: boolean, msg: CallSkillsInitial): CallSkillsInitial.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallSkillsInitial, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallSkillsInitial;
    static deserializeBinaryFromReader(message: CallSkillsInitial, reader: jspb.BinaryReader): CallSkillsInitial;
  }

  export namespace CallSkillsInitial {
    export type AsObject = {
      needList: Array<string>,
      wantList: Array<string>,
    }
  }

  export class AgentResponse extends jspb.Message {
    hasKey(): boolean;
    clearKey(): void;
    getKey(): SearchQuery.AgentResponse.Key | undefined;
    setKey(value?: SearchQuery.AgentResponse.Key): void;

    hasValues(): boolean;
    clearValues(): void;
    getValues(): SearchQuery.AgentResponse.Values | undefined;
    setValues(value?: SearchQuery.AgentResponse.Values): void;

    hasNumbers(): boolean;
    clearNumbers(): void;
    getNumbers(): SearchQuery.AgentResponse.Numbers | undefined;
    setNumbers(value?: SearchQuery.AgentResponse.Numbers): void;

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
      key?: SearchQuery.AgentResponse.Key.AsObject,
      values?: SearchQuery.AgentResponse.Values.AsObject,
      numbers?: SearchQuery.AgentResponse.Numbers.AsObject,
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

  export class Results extends jspb.Message {
    hasChannel(): boolean;
    clearChannel(): void;
    getChannel(): SearchQuery.Results.Channel | undefined;
    setChannel(value?: SearchQuery.Results.Channel): void;

    hasAgentUserName(): boolean;
    clearAgentUserName(): void;
    getAgentUserName(): SearchQuery.Results.AgentUserName | undefined;
    setAgentUserName(value?: SearchQuery.Results.AgentUserName): void;

    hasSegments(): boolean;
    clearSegments(): void;
    getSegments(): SearchQuery.Results.Segments | undefined;
    setSegments(value?: SearchQuery.Results.Segments): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Results.AsObject;
    static toObject(includeInstance: boolean, msg: Results): Results.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Results, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Results;
    static deserializeBinaryFromReader(message: Results, reader: jspb.BinaryReader): Results;
  }

  export namespace Results {
    export type AsObject = {
      channel?: SearchQuery.Results.Channel.AsObject,
      agentUserName?: SearchQuery.Results.AgentUserName.AsObject,
      segments?: SearchQuery.Results.Segments.AsObject,
    }

    export class Channel extends jspb.Message {
      getEq(): number;
      setEq(value: number): void;

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
        eq: number,
      }
    }

    export class AgentUserName extends jspb.Message {
      clearAnyList(): void;
      getAnyList(): Array<string>;
      setAnyList(value: Array<string>): void;
      addAny(value: string, index?: number): string;

      clearAllList(): void;
      getAllList(): Array<string>;
      setAllList(value: Array<string>): void;
      addAll(value: string, index?: number): string;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): AgentUserName.AsObject;
      static toObject(includeInstance: boolean, msg: AgentUserName): AgentUserName.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: AgentUserName, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): AgentUserName;
      static deserializeBinaryFromReader(message: AgentUserName, reader: jspb.BinaryReader): AgentUserName;
    }

    export namespace AgentUserName {
      export type AsObject = {
        anyList: Array<string>,
        allList: Array<string>,
      }
    }

    export class Segments extends jspb.Message {
      hasText(): boolean;
      clearText(): void;
      getText(): SearchQuery.Results.Segments.Text | undefined;
      setText(value?: SearchQuery.Results.Segments.Text): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Segments.AsObject;
      static toObject(includeInstance: boolean, msg: Segments): Segments.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Segments, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Segments;
      static deserializeBinaryFromReader(message: Segments, reader: jspb.BinaryReader): Segments;
    }

    export namespace Segments {
      export type AsObject = {
        text?: SearchQuery.Results.Segments.Text.AsObject,
      }

      export class Text extends jspb.Message {
        hasPhrase(): boolean;
        clearPhrase(): void;
        getPhrase(): SearchQuery.Results.Segments.Text.Phrase | undefined;
        setPhrase(value?: SearchQuery.Results.Segments.Text.Phrase): void;

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
          phrase?: SearchQuery.Results.Segments.Text.Phrase.AsObject,
        }

        export class Phrase extends jspb.Message {
          clearWordsList(): void;
          getWordsList(): Array<SearchQuery.Results.Segments.Text.Phrase.Word>;
          setWordsList(value: Array<SearchQuery.Results.Segments.Text.Phrase.Word>): void;
          addWords(value?: SearchQuery.Results.Segments.Text.Phrase.Word, index?: number): SearchQuery.Results.Segments.Text.Phrase.Word;

          getSlop(): number;
          setSlop(value: number): void;

          getInOrder(): boolean;
          setInOrder(value: boolean): void;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): Phrase.AsObject;
          static toObject(includeInstance: boolean, msg: Phrase): Phrase.AsObject;
          static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
          static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
          static serializeBinaryToWriter(message: Phrase, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): Phrase;
          static deserializeBinaryFromReader(message: Phrase, reader: jspb.BinaryReader): Phrase;
        }

        export namespace Phrase {
          export type AsObject = {
            wordsList: Array<SearchQuery.Results.Segments.Text.Phrase.Word.AsObject>,
            slop: number,
            inOrder: boolean,
          }

          export class Word extends jspb.Message {
            getValue(): string;
            setValue(value: string): void;

            getFuzziness(): string;
            setFuzziness(value: string): void;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Word.AsObject;
            static toObject(includeInstance: boolean, msg: Word): Word.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Word, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Word;
            static deserializeBinaryFromReader(message: Word, reader: jspb.BinaryReader): Word;
          }

          export namespace Word {
            export type AsObject = {
              value: string,
              fuzziness: string,
            }
          }
        }
      }
    }
  }

  export class DeleteTime extends jspb.Message {
    hasExists(): boolean;
    clearExists(): void;
    getExists(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setExists(value?: google_protobuf_wrappers_pb.BoolValue): void;

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
      exists?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }
  }

  export class TranscriptSid extends jspb.Message {
    clearAnyList(): void;
    getAnyList(): Array<number>;
    setAnyList(value: Array<number>): void;
    addAny(value: number, index?: number): number;

    hasGte(): boolean;
    clearGte(): void;
    getGte(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setGte(value?: google_protobuf_wrappers_pb.Int64Value): void;

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
      gte?: google_protobuf_wrappers_pb.Int64Value.AsObject,
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

  export class FlagSummary extends jspb.Message {
    hasNeedReview(): boolean;
    clearNeedReview(): void;
    getNeedReview(): SearchQuery.FlagSummary.NeedReview | undefined;
    setNeedReview(value?: SearchQuery.FlagSummary.NeedReview): void;

    hasReviewStatus(): boolean;
    clearReviewStatus(): void;
    getReviewStatus(): SearchQuery.FlagSummary.ReviewStatus | undefined;
    setReviewStatus(value?: SearchQuery.FlagSummary.ReviewStatus): void;

    hasFlags(): boolean;
    clearFlags(): void;
    getFlags(): SearchQuery.FlagSummary.Flags | undefined;
    setFlags(value?: SearchQuery.FlagSummary.Flags): void;

    hasCount(): boolean;
    clearCount(): void;
    getCount(): SearchQuery.FlagSummary.Count | undefined;
    setCount(value?: SearchQuery.FlagSummary.Count): void;

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
      needReview?: SearchQuery.FlagSummary.NeedReview.AsObject,
      reviewStatus?: SearchQuery.FlagSummary.ReviewStatus.AsObject,
      flags?: SearchQuery.FlagSummary.Flags.AsObject,
      count?: SearchQuery.FlagSummary.Count.AsObject,
    }

    export class NeedReview extends jspb.Message {
      hasFlagSids(): boolean;
      clearFlagSids(): void;
      getFlagSids(): SearchQuery.FlagSummary.NeedReview.FlagSids | undefined;
      setFlagSids(value?: SearchQuery.FlagSummary.NeedReview.FlagSids): void;

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
        flagSids?: SearchQuery.FlagSummary.NeedReview.FlagSids.AsObject,
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
      getAnyList(): Array<TranscriptReviewStatusMap[keyof TranscriptReviewStatusMap]>;
      setAnyList(value: Array<TranscriptReviewStatusMap[keyof TranscriptReviewStatusMap]>): void;
      addAny(value: TranscriptReviewStatusMap[keyof TranscriptReviewStatusMap], index?: number): TranscriptReviewStatusMap[keyof TranscriptReviewStatusMap];

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
        anyList: Array<TranscriptReviewStatusMap[keyof TranscriptReviewStatusMap]>,
      }
    }

    export class Flags extends jspb.Message {
      hasFlagSid(): boolean;
      clearFlagSid(): void;
      getFlagSid(): SearchQuery.FlagSummary.Flags.FlagSid | undefined;
      setFlagSid(value?: SearchQuery.FlagSummary.Flags.FlagSid): void;

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
        flagSid?: SearchQuery.FlagSummary.Flags.FlagSid.AsObject,
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
}

export class SearchResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): void;

  clearHitsList(): void;
  getHitsList(): Array<SearchResponse.Hit>;
  setHitsList(value: Array<SearchResponse.Hit>): void;
  addHits(value?: SearchResponse.Hit, index?: number): SearchResponse.Hit;

  hasSort(): boolean;
  clearSort(): void;
  getSort(): Sort | undefined;
  setSort(value?: Sort): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchResponse): SearchResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchResponse;
  static deserializeBinaryFromReader(message: SearchResponse, reader: jspb.BinaryReader): SearchResponse;
}

export namespace SearchResponse {
  export type AsObject = {
    total: number,
    hitsList: Array<SearchResponse.Hit.AsObject>,
    sort?: Sort.AsObject,
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

export class AgentCallLogQuery extends jspb.Message {
  hasCallSkillsInitial(): boolean;
  clearCallSkillsInitial(): void;
  getCallSkillsInitial(): CallSkillsInitialQuery | undefined;
  setCallSkillsInitial(value?: CallSkillsInitialQuery): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentCallLogQuery.AsObject;
  static toObject(includeInstance: boolean, msg: AgentCallLogQuery): AgentCallLogQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentCallLogQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentCallLogQuery;
  static deserializeBinaryFromReader(message: AgentCallLogQuery, reader: jspb.BinaryReader): AgentCallLogQuery;
}

export namespace AgentCallLogQuery {
  export type AsObject = {
    callSkillsInitial?: CallSkillsInitialQuery.AsObject,
  }
}

export class CallSkillsInitialQuery extends jspb.Message {
  clearNeedList(): void;
  getNeedList(): Array<VanaTermsQuery>;
  setNeedList(value: Array<VanaTermsQuery>): void;
  addNeed(value?: VanaTermsQuery, index?: number): VanaTermsQuery;

  clearWantList(): void;
  getWantList(): Array<VanaTermsQuery>;
  setWantList(value: Array<VanaTermsQuery>): void;
  addWant(value?: VanaTermsQuery, index?: number): VanaTermsQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallSkillsInitialQuery.AsObject;
  static toObject(includeInstance: boolean, msg: CallSkillsInitialQuery): CallSkillsInitialQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallSkillsInitialQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallSkillsInitialQuery;
  static deserializeBinaryFromReader(message: CallSkillsInitialQuery, reader: jspb.BinaryReader): CallSkillsInitialQuery;
}

export namespace CallSkillsInitialQuery {
  export type AsObject = {
    needList: Array<VanaTermsQuery.AsObject>,
    wantList: Array<VanaTermsQuery.AsObject>,
  }
}

export class VanaTermsQuery extends jspb.Message {
  clearTermsList(): void;
  getTermsList(): Array<string>;
  setTermsList(value: Array<string>): void;
  addTerms(value: string, index?: number): string;

  getLacks(): boolean;
  setLacks(value: boolean): void;

  getAll(): boolean;
  setAll(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VanaTermsQuery.AsObject;
  static toObject(includeInstance: boolean, msg: VanaTermsQuery): VanaTermsQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VanaTermsQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VanaTermsQuery;
  static deserializeBinaryFromReader(message: VanaTermsQuery, reader: jspb.BinaryReader): VanaTermsQuery;
}

export namespace VanaTermsQuery {
  export type AsObject = {
    termsList: Array<string>,
    lacks: boolean,
    all: boolean,
  }
}

export class Sort extends jspb.Message {
  clearFieldsList(): void;
  getFieldsList(): Array<Sort.Field>;
  setFieldsList(value: Array<Sort.Field>): void;
  addFields(value?: Sort.Field, index?: number): Sort.Field;

  clearAfterList(): void;
  getAfterList(): Array<string>;
  setAfterList(value: Array<string>): void;
  addAfter(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sort.AsObject;
  static toObject(includeInstance: boolean, msg: Sort): Sort.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Sort, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sort;
  static deserializeBinaryFromReader(message: Sort, reader: jspb.BinaryReader): Sort;
}

export namespace Sort {
  export type AsObject = {
    fieldsList: Array<Sort.Field.AsObject>,
    afterList: Array<string>,
  }

  export class Field extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getDesc(): boolean;
    setDesc(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Field.AsObject;
    static toObject(includeInstance: boolean, msg: Field): Field.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Field, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Field;
    static deserializeBinaryFromReader(message: Field, reader: jspb.BinaryReader): Field;
  }

  export namespace Field {
    export type AsObject = {
      name: string,
      desc: boolean,
    }
  }
}

export class ListTranscriptGroupNamesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTranscriptGroupNamesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTranscriptGroupNamesRequest): ListTranscriptGroupNamesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTranscriptGroupNamesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTranscriptGroupNamesRequest;
  static deserializeBinaryFromReader(message: ListTranscriptGroupNamesRequest, reader: jspb.BinaryReader): ListTranscriptGroupNamesRequest;
}

export namespace ListTranscriptGroupNamesRequest {
  export type AsObject = {
  }
}

export class ListTranscriptGroupNamesResponse extends jspb.Message {
  clearGroupNamesList(): void;
  getGroupNamesList(): Array<TranscriptGroupName>;
  setGroupNamesList(value: Array<TranscriptGroupName>): void;
  addGroupNames(value?: TranscriptGroupName, index?: number): TranscriptGroupName;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTranscriptGroupNamesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTranscriptGroupNamesResponse): ListTranscriptGroupNamesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTranscriptGroupNamesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTranscriptGroupNamesResponse;
  static deserializeBinaryFromReader(message: ListTranscriptGroupNamesResponse, reader: jspb.BinaryReader): ListTranscriptGroupNamesResponse;
}

export namespace ListTranscriptGroupNamesResponse {
  export type AsObject = {
    groupNamesList: Array<TranscriptGroupName.AsObject>,
  }
}

export class TranscriptGroupName extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TranscriptGroupName.AsObject;
  static toObject(includeInstance: boolean, msg: TranscriptGroupName): TranscriptGroupName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TranscriptGroupName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TranscriptGroupName;
  static deserializeBinaryFromReader(message: TranscriptGroupName, reader: jspb.BinaryReader): TranscriptGroupName;
}

export namespace TranscriptGroupName {
  export type AsObject = {
    value: string,
  }
}

export class ListAgentResponseValuesRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentResponseValuesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentResponseValuesRequest): ListAgentResponseValuesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentResponseValuesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentResponseValuesRequest;
  static deserializeBinaryFromReader(message: ListAgentResponseValuesRequest, reader: jspb.BinaryReader): ListAgentResponseValuesRequest;
}

export namespace ListAgentResponseValuesRequest {
  export type AsObject = {
    key: string,
  }
}

export class ListAgentResponseValuesResponse extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<string>;
  setValuesList(value: Array<string>): void;
  addValues(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentResponseValuesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentResponseValuesResponse): ListAgentResponseValuesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentResponseValuesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentResponseValuesResponse;
  static deserializeBinaryFromReader(message: ListAgentResponseValuesResponse, reader: jspb.BinaryReader): ListAgentResponseValuesResponse;
}

export namespace ListAgentResponseValuesResponse {
  export type AsObject = {
    valuesList: Array<string>,
  }
}

export class Transcript extends jspb.Message {
  getTranscriptSid(): number;
  setTranscriptSid(value: number): void;

  getCallSid(): number;
  setCallSid(value: number): void;

  getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  clearResultsList(): void;
  getResultsList(): Array<Result>;
  setResultsList(value: Array<Result>): void;
  addResults(value?: Result, index?: number): Result;

  hasSilence(): boolean;
  clearSilence(): void;
  getSilence(): Silence | undefined;
  setSilence(value?: Silence): void;

  getTalkTime(): number;
  setTalkTime(value: number): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCallStartTime(): boolean;
  clearCallStartTime(): void;
  getCallStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCallStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTalkOver(): boolean;
  clearTalkOver(): void;
  getTalkOver(): TalkOver | undefined;
  setTalkOver(value?: TalkOver): void;

  getCallerId(): string;
  setCallerId(value: string): void;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): void;

  getAudioTime(): number;
  setAudioTime(value: number): void;

  getAudioBytes(): number;
  setAudioBytes(value: number): void;

  getGroupName(): string;
  setGroupName(value: string): void;

  hasAgentCallLog(): boolean;
  clearAgentCallLog(): void;
  getAgentCallLog(): api_v1alpha1_vanalytics_aclpb_aclpb_pb.AgentCallLog | undefined;
  setAgentCallLog(value?: api_v1alpha1_vanalytics_aclpb_aclpb_pb.AgentCallLog): void;

  hasFlagSummary(): boolean;
  clearFlagSummary(): void;
  getFlagSummary(): FlagSummary | undefined;
  setFlagSummary(value?: FlagSummary): void;

  hasDeleteTime(): boolean;
  clearDeleteTime(): void;
  getDeleteTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeleteTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getNumberFormat(): string;
  setNumberFormat(value: string): void;

  getAgentResponseMap(): jspb.Map<string, AgentResponse>;
  clearAgentResponseMap(): void;
  hasSummary(): boolean;
  clearSummary(): void;
  getSummary(): api_v1alpha1_vanalytics_transcript_summary_pb.TranscriptSummary | undefined;
  setSummary(value?: api_v1alpha1_vanalytics_transcript_summary_pb.TranscriptSummary): void;

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
    transcriptSid: number,
    callSid: number,
    callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
    resultsList: Array<Result.AsObject>,
    silence?: Silence.AsObject,
    talkTime: number,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    callStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    talkOver?: TalkOver.AsObject,
    callerId: string,
    phoneNumber: string,
    audioTime: number,
    audioBytes: number,
    groupName: string,
    agentCallLog?: api_v1alpha1_vanalytics_aclpb_aclpb_pb.AgentCallLog.AsObject,
    flagSummary?: FlagSummary.AsObject,
    deleteTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    numberFormat: string,
    agentResponseMap: Array<[string, AgentResponse.AsObject]>,
    summary?: api_v1alpha1_vanalytics_transcript_summary_pb.TranscriptSummary.AsObject,
  }
}

export class Result extends jspb.Message {
  getChannel(): number;
  setChannel(value: number): void;

  clearSegmentsList(): void;
  getSegmentsList(): Array<Segment>;
  setSegmentsList(value: Array<Segment>): void;
  addSegments(value?: Segment, index?: number): Segment;

  getAgentFirstName(): string;
  setAgentFirstName(value: string): void;

  getAgentLastName(): string;
  setAgentLastName(value: string): void;

  getAgentUserName(): string;
  setAgentUserName(value: string): void;

  getBeginTime(): number;
  setBeginTime(value: number): void;

  getDuration(): number;
  setDuration(value: number): void;

  getText(): string;
  setText(value: string): void;

  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Result.AsObject;
  static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Result;
  static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
}

export namespace Result {
  export type AsObject = {
    channel: number,
    segmentsList: Array<Segment.AsObject>,
    agentFirstName: string,
    agentLastName: string,
    agentUserName: string,
    beginTime: number,
    duration: number,
    text: string,
    huntGroupSid: number,
  }
}

export class Segment extends jspb.Message {
  getBeginTime(): number;
  setBeginTime(value: number): void;

  getConfidence(): number;
  setConfidence(value: number): void;

  getDuration(): number;
  setDuration(value: number): void;

  getText(): string;
  setText(value: string): void;

  clearWordsList(): void;
  getWordsList(): Array<Word>;
  setWordsList(value: Array<Word>): void;
  addWords(value?: Word, index?: number): Word;

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
    beginTime: number,
    confidence: number,
    duration: number,
    text: string,
    wordsList: Array<Word.AsObject>,
  }
}

export class Word extends jspb.Message {
  getBeginTime(): number;
  setBeginTime(value: number): void;

  getConfidence(): number;
  setConfidence(value: number): void;

  getDuration(): number;
  setDuration(value: number): void;

  getSpoken(): string;
  setSpoken(value: string): void;

  getRedacted(): boolean;
  setRedacted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Word.AsObject;
  static toObject(includeInstance: boolean, msg: Word): Word.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Word, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Word;
  static deserializeBinaryFromReader(message: Word, reader: jspb.BinaryReader): Word;
}

export namespace Word {
  export type AsObject = {
    beginTime: number,
    confidence: number,
    duration: number,
    spoken: string,
    redacted: boolean,
  }
}

export class Silence extends jspb.Message {
  hasDuration(): boolean;
  clearDuration(): void;
  getDuration(): Silence.Duration | undefined;
  setDuration(value?: Silence.Duration): void;

  clearSegmentsList(): void;
  getSegmentsList(): Array<Silence.Segment>;
  setSegmentsList(value: Array<Silence.Segment>): void;
  addSegments(value?: Silence.Segment, index?: number): Silence.Segment;

  hasOccurrence(): boolean;
  clearOccurrence(): void;
  getOccurrence(): Silence.Occurrence | undefined;
  setOccurrence(value?: Silence.Occurrence): void;

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
    duration?: Silence.Duration.AsObject,
    segmentsList: Array<Silence.Segment.AsObject>,
    occurrence?: Silence.Occurrence.AsObject,
    threshold: number,
  }

  export class Duration extends jspb.Message {
    getTotal(): number;
    setTotal(value: number): void;

    getMax(): number;
    setMax(value: number): void;

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
      total: number,
      max: number,
      percentage: number,
    }
  }

  export class Segment extends jspb.Message {
    getBeginTime(): number;
    setBeginTime(value: number): void;

    getDuration(): number;
    setDuration(value: number): void;

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
      beginTime: number,
      duration: number,
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

export class TalkOver extends jspb.Message {
  hasOccurrence(): boolean;
  clearOccurrence(): void;
  getOccurrence(): TalkOver.Occurrence | undefined;
  setOccurrence(value?: TalkOver.Occurrence): void;

  hasDuration(): boolean;
  clearDuration(): void;
  getDuration(): TalkOver.Duration | undefined;
  setDuration(value?: TalkOver.Duration): void;

  clearResultsList(): void;
  getResultsList(): Array<TalkOver.Result>;
  setResultsList(value: Array<TalkOver.Result>): void;
  addResults(value?: TalkOver.Result, index?: number): TalkOver.Result;

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
    occurrence?: TalkOver.Occurrence.AsObject,
    duration?: TalkOver.Duration.AsObject,
    resultsList: Array<TalkOver.Result.AsObject>,
    threshold: number,
  }

  export class Duration extends jspb.Message {
    getTotal(): number;
    setTotal(value: number): void;

    getMax(): number;
    setMax(value: number): void;

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
      total: number,
      max: number,
      percentage: number,
    }
  }

  export class Result extends jspb.Message {
    getChannel(): number;
    setChannel(value: number): void;

    hasOccurrence(): boolean;
    clearOccurrence(): void;
    getOccurrence(): TalkOver.Occurrence | undefined;
    setOccurrence(value?: TalkOver.Occurrence): void;

    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): TalkOver.Duration | undefined;
    setDuration(value?: TalkOver.Duration): void;

    clearSegmentsList(): void;
    getSegmentsList(): Array<TalkOver.Segment>;
    setSegmentsList(value: Array<TalkOver.Segment>): void;
    addSegments(value?: TalkOver.Segment, index?: number): TalkOver.Segment;

    getAgentUserName(): string;
    setAgentUserName(value: string): void;

    getAgentSessionSid(): number;
    setAgentSessionSid(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Result.AsObject;
    static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Result;
    static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
  }

  export namespace Result {
    export type AsObject = {
      channel: number,
      occurrence?: TalkOver.Occurrence.AsObject,
      duration?: TalkOver.Duration.AsObject,
      segmentsList: Array<TalkOver.Segment.AsObject>,
      agentUserName: string,
      agentSessionSid: number,
    }
  }

  export class Segment extends jspb.Message {
    getBeginTime(): number;
    setBeginTime(value: number): void;

    getDuration(): number;
    setDuration(value: number): void;

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
      beginTime: number,
      duration: number,
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

  getReviewStatus(): TranscriptReviewStatusMap[keyof TranscriptReviewStatusMap];
  setReviewStatus(value: TranscriptReviewStatusMap[keyof TranscriptReviewStatusMap]): void;

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
    reviewStatus: TranscriptReviewStatusMap[keyof TranscriptReviewStatusMap],
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

export class SearchByOrgIdRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  hasSort(): boolean;
  clearSort(): void;
  getSort(): Sort | undefined;
  setSort(value?: Sort): void;

  hasTranscriptMask(): boolean;
  clearTranscriptMask(): void;
  getTranscriptMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setTranscriptMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasFlagSummary(): boolean;
  clearFlagSummary(): void;
  getFlagSummary(): SearchQuery.FlagSummary | undefined;
  setFlagSummary(value?: SearchQuery.FlagSummary): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchByOrgIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchByOrgIdRequest): SearchByOrgIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchByOrgIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchByOrgIdRequest;
  static deserializeBinaryFromReader(message: SearchByOrgIdRequest, reader: jspb.BinaryReader): SearchByOrgIdRequest;
}

export namespace SearchByOrgIdRequest {
  export type AsObject = {
    orgId: string,
    pageSize: number,
    sort?: Sort.AsObject,
    transcriptMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    flagSummary?: SearchQuery.FlagSummary.AsObject,
  }
}

export interface TranscriptReviewStatusMap {
  TRANSCRIPT_REVIEW_STATUS_TODO: 0;
  TRANSCRIPT_REVIEW_STATUS_DONE: 1;
  TRANSCRIPT_REVIEW_STATUS_NONE: 2;
}

export const TranscriptReviewStatus: TranscriptReviewStatusMap;

