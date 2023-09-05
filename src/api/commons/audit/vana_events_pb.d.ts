// package: api.commons.audit
// file: api/commons/audit/vana_events.proto

import * as jspb from "google-protobuf";
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

