// package: api.v1alpha1.agentsmith
// file: api/v1alpha1/agentsmith/service.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../../annotations/authz_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class FollowAgentReq extends jspb.Message {
  hasUserId(): boolean;
  clearUserId(): void;
  getUserId(): string;
  setUserId(value: string): void;

  hasAsmSessionSid(): boolean;
  clearAsmSessionSid(): void;
  getAsmSessionSid(): number;
  setAsmSessionSid(value: number): void;

  getBogusField1(): number;
  setBogusField1(value: number): void;

  getBogusField2(): number;
  setBogusField2(value: number): void;

  getIdCase(): FollowAgentReq.IdCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FollowAgentReq.AsObject;
  static toObject(includeInstance: boolean, msg: FollowAgentReq): FollowAgentReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FollowAgentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FollowAgentReq;
  static deserializeBinaryFromReader(message: FollowAgentReq, reader: jspb.BinaryReader): FollowAgentReq;
}

export namespace FollowAgentReq {
  export type AsObject = {
    userId: string,
    asmSessionSid: number,
    bogusField1: number,
    bogusField2: number,
  }

  export enum IdCase {
    ID_NOT_SET = 0,
    USER_ID = 1,
    ASM_SESSION_SID = 2,
  }
}

export class FollowAgentRes extends jspb.Message {
  hasTs(): boolean;
  clearTs(): void;
  getTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTs(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasAgentStateChange(): boolean;
  clearAgentStateChange(): void;
  getAgentStateChange(): AgentStateChangeEvent | undefined;
  setAgentStateChange(value?: AgentStateChangeEvent): void;

  hasAgentVoiceStart(): boolean;
  clearAgentVoiceStart(): void;
  getAgentVoiceStart(): AgentVoiceStartEvent | undefined;
  setAgentVoiceStart(value?: AgentVoiceStartEvent): void;

  hasAgentVoiceEnd(): boolean;
  clearAgentVoiceEnd(): void;
  getAgentVoiceEnd(): AgentVoiceEndEvent | undefined;
  setAgentVoiceEnd(value?: AgentVoiceEndEvent): void;

  hasAgentSessionEnd(): boolean;
  clearAgentSessionEnd(): void;
  getAgentSessionEnd(): AgentSessionEndEvent | undefined;
  setAgentSessionEnd(value?: AgentSessionEndEvent): void;

  getEventCase(): FollowAgentRes.EventCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FollowAgentRes.AsObject;
  static toObject(includeInstance: boolean, msg: FollowAgentRes): FollowAgentRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FollowAgentRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FollowAgentRes;
  static deserializeBinaryFromReader(message: FollowAgentRes, reader: jspb.BinaryReader): FollowAgentRes;
}

export namespace FollowAgentRes {
  export type AsObject = {
    ts?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    agentStateChange?: AgentStateChangeEvent.AsObject,
    agentVoiceStart?: AgentVoiceStartEvent.AsObject,
    agentVoiceEnd?: AgentVoiceEndEvent.AsObject,
    agentSessionEnd?: AgentSessionEndEvent.AsObject,
  }

  export enum EventCase {
    EVENT_NOT_SET = 0,
    AGENT_STATE_CHANGE = 10,
    AGENT_VOICE_START = 11,
    AGENT_VOICE_END = 12,
    AGENT_SESSION_END = 13,
  }
}

export class AgentStateChangeEvent extends jspb.Message {
  getOldState(): AgentStateMap[keyof AgentStateMap];
  setOldState(value: AgentStateMap[keyof AgentStateMap]): void;

  getNewState(): AgentStateMap[keyof AgentStateMap];
  setNewState(value: AgentStateMap[keyof AgentStateMap]): void;

  hasEmpty(): boolean;
  clearEmpty(): void;
  getEmpty(): EmptyState | undefined;
  setEmpty(value?: EmptyState): void;

  getStateDetailsCase(): AgentStateChangeEvent.StateDetailsCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentStateChangeEvent.AsObject;
  static toObject(includeInstance: boolean, msg: AgentStateChangeEvent): AgentStateChangeEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentStateChangeEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentStateChangeEvent;
  static deserializeBinaryFromReader(message: AgentStateChangeEvent, reader: jspb.BinaryReader): AgentStateChangeEvent;
}

export namespace AgentStateChangeEvent {
  export type AsObject = {
    oldState: AgentStateMap[keyof AgentStateMap],
    newState: AgentStateMap[keyof AgentStateMap],
    empty?: EmptyState.AsObject,
  }

  export enum StateDetailsCase {
    STATE_DETAILS_NOT_SET = 0,
    EMPTY = 10,
  }
}

export class EmptyState extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmptyState.AsObject;
  static toObject(includeInstance: boolean, msg: EmptyState): EmptyState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmptyState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmptyState;
  static deserializeBinaryFromReader(message: EmptyState, reader: jspb.BinaryReader): EmptyState;
}

export namespace EmptyState {
  export type AsObject = {
  }
}

export class AgentVoiceStartEvent extends jspb.Message {
  getSipDialUrl(): string;
  setSipDialUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentVoiceStartEvent.AsObject;
  static toObject(includeInstance: boolean, msg: AgentVoiceStartEvent): AgentVoiceStartEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentVoiceStartEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentVoiceStartEvent;
  static deserializeBinaryFromReader(message: AgentVoiceStartEvent, reader: jspb.BinaryReader): AgentVoiceStartEvent;
}

export namespace AgentVoiceStartEvent {
  export type AsObject = {
    sipDialUrl: string,
  }
}

export class AgentVoiceEndEvent extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentVoiceEndEvent.AsObject;
  static toObject(includeInstance: boolean, msg: AgentVoiceEndEvent): AgentVoiceEndEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentVoiceEndEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentVoiceEndEvent;
  static deserializeBinaryFromReader(message: AgentVoiceEndEvent, reader: jspb.BinaryReader): AgentVoiceEndEvent;
}

export namespace AgentVoiceEndEvent {
  export type AsObject = {
  }
}

export class AgentSessionEndEvent extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentSessionEndEvent.AsObject;
  static toObject(includeInstance: boolean, msg: AgentSessionEndEvent): AgentSessionEndEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentSessionEndEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentSessionEndEvent;
  static deserializeBinaryFromReader(message: AgentSessionEndEvent, reader: jspb.BinaryReader): AgentSessionEndEvent;
}

export namespace AgentSessionEndEvent {
  export type AsObject = {
  }
}

export interface AgentStateMap {
  UNKNOWN: 0;
  UNAVAILABLE: 1;
  IDLE: 2;
  READY: 3;
  HUNGUP: 4;
  DESTROYED: 5;
  PEERED: 6;
  PAUSED: 7;
  WRAPUP: 8;
  PREPARING_AFTER_IDLE: 10;
}

export const AgentState: AgentStateMap;

