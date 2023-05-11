// package: api.v0alpha
// file: api/v0alpha/sentinel.proto

import * as jspb from "google-protobuf";
import * as api_commons_logging_pb from "../../api/commons/logging_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class SentinelEvent extends jspb.Message {
  hasLogEvent(): boolean;
  clearLogEvent(): void;
  getLogEvent(): LogEvent | undefined;
  setLogEvent(value?: LogEvent): void;

  getEventCase(): SentinelEvent.EventCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SentinelEvent.AsObject;
  static toObject(includeInstance: boolean, msg: SentinelEvent): SentinelEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SentinelEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SentinelEvent;
  static deserializeBinaryFromReader(message: SentinelEvent, reader: jspb.BinaryReader): SentinelEvent;
}

export namespace SentinelEvent {
  export type AsObject = {
    logEvent?: LogEvent.AsObject,
  }

  export enum EventCase {
    EVENT_NOT_SET = 0,
    LOG_EVENT = 1,
  }
}

export class LogEvent extends jspb.Message {
  getTraceId(): string;
  setTraceId(value: string): void;

  getSessionId(): string;
  setSessionId(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  getLocation(): string;
  setLocation(value: string): void;

  getStackTrace(): string;
  setStackTrace(value: string): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): void;
  getSeverity(): api_commons_logging_pb.LevelMap[keyof api_commons_logging_pb.LevelMap];
  setSeverity(value: api_commons_logging_pb.LevelMap[keyof api_commons_logging_pb.LevelMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogEvent.AsObject;
  static toObject(includeInstance: boolean, msg: LogEvent): LogEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LogEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogEvent;
  static deserializeBinaryFromReader(message: LogEvent, reader: jspb.BinaryReader): LogEvent;
}

export namespace LogEvent {
  export type AsObject = {
    traceId: string,
    sessionId: string,
    message: string,
    location: string,
    stackTrace: string,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    metadataMap: Array<[string, string]>,
    severity: api_commons_logging_pb.LevelMap[keyof api_commons_logging_pb.LevelMap],
  }
}

export class SendEventsReq extends jspb.Message {
  clearEventsList(): void;
  getEventsList(): Array<SentinelEvent>;
  setEventsList(value: Array<SentinelEvent>): void;
  addEvents(value?: SentinelEvent, index?: number): SentinelEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendEventsReq.AsObject;
  static toObject(includeInstance: boolean, msg: SendEventsReq): SendEventsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendEventsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendEventsReq;
  static deserializeBinaryFromReader(message: SendEventsReq, reader: jspb.BinaryReader): SendEventsReq;
}

export namespace SendEventsReq {
  export type AsObject = {
    eventsList: Array<SentinelEvent.AsObject>,
  }
}

export class SendEventsRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendEventsRes.AsObject;
  static toObject(includeInstance: boolean, msg: SendEventsRes): SendEventsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendEventsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendEventsRes;
  static deserializeBinaryFromReader(message: SendEventsRes, reader: jspb.BinaryReader): SendEventsRes;
}

export namespace SendEventsRes {
  export type AsObject = {
  }
}

