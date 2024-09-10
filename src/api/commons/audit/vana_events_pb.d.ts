// package: api.commons.audit
// file: api/commons/audit/vana_events.proto

import * as jspb from "google-protobuf";
import * as api_commons_acd_pb from "../../../api/commons/acd_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class VanaFlagEvent extends jspb.Message {
  getFlagName(): string;
  setFlagName(value: string): void;

  getFlagSid(): number;
  setFlagSid(value: number): void;

  getUrl(): string;
  setUrl(value: string): void;

  getNumTranscripts(): number;
  setNumTranscripts(value: number): void;

  getPriority(): number;
  setPriority(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VanaFlagEvent.AsObject;
  static toObject(includeInstance: boolean, msg: VanaFlagEvent): VanaFlagEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VanaFlagEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VanaFlagEvent;
  static deserializeBinaryFromReader(message: VanaFlagEvent, reader: jspb.BinaryReader): VanaFlagEvent;
}

export namespace VanaFlagEvent {
  export type AsObject = {
    flagName: string,
    flagSid: number,
    url: string,
    numTranscripts: number,
    priority: number,
  }
}

export class VanaFlagReviewEvent extends jspb.Message {
  getFlagName(): string;
  setFlagName(value: string): void;

  getFlagSid(): number;
  setFlagSid(value: number): void;

  getUrl(): string;
  setUrl(value: string): void;

  getNumTranscripts(): number;
  setNumTranscripts(value: number): void;

  getPriority(): number;
  setPriority(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VanaFlagReviewEvent.AsObject;
  static toObject(includeInstance: boolean, msg: VanaFlagReviewEvent): VanaFlagReviewEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VanaFlagReviewEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VanaFlagReviewEvent;
  static deserializeBinaryFromReader(message: VanaFlagReviewEvent, reader: jspb.BinaryReader): VanaFlagReviewEvent;
}

export namespace VanaFlagReviewEvent {
  export type AsObject = {
    flagName: string,
    flagSid: number,
    url: string,
    numTranscripts: number,
    priority: number,
  }
}

export class VanaBillingReportEvent extends jspb.Message {
  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VanaBillingReportEvent.AsObject;
  static toObject(includeInstance: boolean, msg: VanaBillingReportEvent): VanaBillingReportEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VanaBillingReportEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VanaBillingReportEvent;
  static deserializeBinaryFromReader(message: VanaBillingReportEvent, reader: jspb.BinaryReader): VanaBillingReportEvent;
}

export namespace VanaBillingReportEvent {
  export type AsObject = {
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    url: string,
  }
}

export class VanaFlagSummaryEvent extends jspb.Message {
  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearFlagSummariesList(): void;
  getFlagSummariesList(): Array<VanaFlagSummaryEvent.FlagSummary>;
  setFlagSummariesList(value: Array<VanaFlagSummaryEvent.FlagSummary>): void;
  addFlagSummaries(value?: VanaFlagSummaryEvent.FlagSummary, index?: number): VanaFlagSummaryEvent.FlagSummary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VanaFlagSummaryEvent.AsObject;
  static toObject(includeInstance: boolean, msg: VanaFlagSummaryEvent): VanaFlagSummaryEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VanaFlagSummaryEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VanaFlagSummaryEvent;
  static deserializeBinaryFromReader(message: VanaFlagSummaryEvent, reader: jspb.BinaryReader): VanaFlagSummaryEvent;
}

export namespace VanaFlagSummaryEvent {
  export type AsObject = {
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    flagSummariesList: Array<VanaFlagSummaryEvent.FlagSummary.AsObject>,
  }

  export class FlagSummary extends jspb.Message {
    getTranscriptSid(): number;
    setTranscriptSid(value: number): void;

    clearFlagSidsList(): void;
    getFlagSidsList(): Array<number>;
    setFlagSidsList(value: Array<number>): void;
    addFlagSids(value: number, index?: number): number;

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
      transcriptSid: number,
      flagSidsList: Array<number>,
    }
  }
}

export class VanaPhraseCorrectionEvent extends jspb.Message {
  hasStartOffset(): boolean;
  clearStartOffset(): void;
  getStartOffset(): google_protobuf_duration_pb.Duration | undefined;
  setStartOffset(value?: google_protobuf_duration_pb.Duration): void;

  hasEndOffset(): boolean;
  clearEndOffset(): void;
  getEndOffset(): google_protobuf_duration_pb.Duration | undefined;
  setEndOffset(value?: google_protobuf_duration_pb.Duration): void;

  getOriginalText(): string;
  setOriginalText(value: string): void;

  getProposedText(): string;
  setProposedText(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  getChannel(): number;
  setChannel(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VanaPhraseCorrectionEvent.AsObject;
  static toObject(includeInstance: boolean, msg: VanaPhraseCorrectionEvent): VanaPhraseCorrectionEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VanaPhraseCorrectionEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VanaPhraseCorrectionEvent;
  static deserializeBinaryFromReader(message: VanaPhraseCorrectionEvent, reader: jspb.BinaryReader): VanaPhraseCorrectionEvent;
}

export namespace VanaPhraseCorrectionEvent {
  export type AsObject = {
    startOffset?: google_protobuf_duration_pb.Duration.AsObject,
    endOffset?: google_protobuf_duration_pb.Duration.AsObject,
    originalText: string,
    proposedText: string,
    url: string,
    channel: number,
  }
}

export class VanaCreateTranscriptEvent extends jspb.Message {
  getTranscriptSid(): number;
  setTranscriptSid(value: number): void;

  hasCall(): boolean;
  clearCall(): void;
  getCall(): VanaCreateTranscriptEvent.Call | undefined;
  setCall(value?: VanaCreateTranscriptEvent.Call): void;

  hasSms(): boolean;
  clearSms(): void;
  getSms(): VanaCreateTranscriptEvent.Sms | undefined;
  setSms(value?: VanaCreateTranscriptEvent.Sms): void;

  getMetadataCase(): VanaCreateTranscriptEvent.MetadataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VanaCreateTranscriptEvent.AsObject;
  static toObject(includeInstance: boolean, msg: VanaCreateTranscriptEvent): VanaCreateTranscriptEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VanaCreateTranscriptEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VanaCreateTranscriptEvent;
  static deserializeBinaryFromReader(message: VanaCreateTranscriptEvent, reader: jspb.BinaryReader): VanaCreateTranscriptEvent;
}

export namespace VanaCreateTranscriptEvent {
  export type AsObject = {
    transcriptSid: number,
    call?: VanaCreateTranscriptEvent.Call.AsObject,
    sms?: VanaCreateTranscriptEvent.Sms.AsObject,
  }

  export class Call extends jspb.Message {
    getCallSid(): number;
    setCallSid(value: number): void;

    getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
    setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

    hasTalkTime(): boolean;
    clearTalkTime(): void;
    getTalkTime(): google_protobuf_duration_pb.Duration | undefined;
    setTalkTime(value?: google_protobuf_duration_pb.Duration): void;

    hasAudioTime(): boolean;
    clearAudioTime(): void;
    getAudioTime(): google_protobuf_duration_pb.Duration | undefined;
    setAudioTime(value?: google_protobuf_duration_pb.Duration): void;

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
      talkTime?: google_protobuf_duration_pb.Duration.AsObject,
      audioTime?: google_protobuf_duration_pb.Duration.AsObject,
    }
  }

  export class Sms extends jspb.Message {
    getConversationSid(): number;
    setConversationSid(value: number): void;

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
    }
  }

  export enum MetadataCase {
    METADATA_NOT_SET = 0,
    CALL = 2,
    SMS = 3,
  }
}

