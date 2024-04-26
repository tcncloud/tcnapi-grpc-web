// package: services.omnichannel.asm.entities.v1alpha1
// file: services/omnichannel/asm/entities/v1alpha1/session.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class AsmSession extends jspb.Message {
  getAsmSessionSid(): number;
  setAsmSessionSid(value: number): void;

  hasAsmSessionStart(): boolean;
  clearAsmSessionStart(): void;
  getAsmSessionStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAsmSessionStart(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasAsmSessionEnd(): boolean;
  clearAsmSessionEnd(): void;
  getAsmSessionEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAsmSessionEnd(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasVoiceSession(): boolean;
  clearVoiceSession(): void;
  getVoiceSession(): VoiceSession | undefined;
  setVoiceSession(value?: VoiceSession): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AsmSession.AsObject;
  static toObject(includeInstance: boolean, msg: AsmSession): AsmSession.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AsmSession, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AsmSession;
  static deserializeBinaryFromReader(message: AsmSession, reader: jspb.BinaryReader): AsmSession;
}

export namespace AsmSession {
  export type AsObject = {
    asmSessionSid: number,
    asmSessionStart?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    asmSessionEnd?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    voiceSession?: VoiceSession.AsObject,
  }
}

export class VoiceSession extends jspb.Message {
  getVoiceSessionSid(): number;
  setVoiceSessionSid(value: number): void;

  hasVoiceSessionStart(): boolean;
  clearVoiceSessionStart(): void;
  getVoiceSessionStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setVoiceSessionStart(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasVoiceSessionEnd(): boolean;
  clearVoiceSessionEnd(): void;
  getVoiceSessionEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setVoiceSessionEnd(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VoiceSession.AsObject;
  static toObject(includeInstance: boolean, msg: VoiceSession): VoiceSession.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VoiceSession, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VoiceSession;
  static deserializeBinaryFromReader(message: VoiceSession, reader: jspb.BinaryReader): VoiceSession;
}

export namespace VoiceSession {
  export type AsObject = {
    voiceSessionSid: number,
    voiceSessionStart?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    voiceSessionEnd?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class VoiceRegistration extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getDialUrl(): string;
  setDialUrl(value: string): void;

  getPstnPhone(): string;
  setPstnPhone(value: string): void;

  getDefaultTimeZone(): string;
  setDefaultTimeZone(value: string): void;

  getExpirationTimestamp(): number;
  setExpirationTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VoiceRegistration.AsObject;
  static toObject(includeInstance: boolean, msg: VoiceRegistration): VoiceRegistration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VoiceRegistration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VoiceRegistration;
  static deserializeBinaryFromReader(message: VoiceRegistration, reader: jspb.BinaryReader): VoiceRegistration;
}

export namespace VoiceRegistration {
  export type AsObject = {
    username: string,
    password: string,
    dialUrl: string,
    pstnPhone: string,
    defaultTimeZone: string,
    expirationTimestamp: number,
  }
}

export class AsmUserDetails extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getAgentSid(): number;
  setAgentSid(value: number): void;

  getAgentStatus(): StatusStateMap[keyof StatusStateMap];
  setAgentStatus(value: StatusStateMap[keyof StatusStateMap]): void;

  getAgentProfileGroupName(): string;
  setAgentProfileGroupName(value: string): void;

  getCurrentConversationSid(): string;
  setCurrentConversationSid(value: string): void;

  getAverageCustomerWaitTimeSeconds(): number;
  setAverageCustomerWaitTimeSeconds(value: number): void;

  getAverageTimeToRespondSeconds(): number;
  setAverageTimeToRespondSeconds(value: number): void;

  hasLastEventTime(): boolean;
  clearLastEventTime(): void;
  getLastEventTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastEventTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getSkillsMap(): jspb.Map<string, number>;
  clearSkillsMap(): void;
  hasAsmSessionSid(): boolean;
  clearAsmSessionSid(): void;
  getAsmSessionSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAsmSessionSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  clearEventsList(): void;
  getEventsList(): Array<DashboardAgentResponseEvent>;
  setEventsList(value: Array<DashboardAgentResponseEvent>): void;
  addEvents(value?: DashboardAgentResponseEvent, index?: number): DashboardAgentResponseEvent;

  hasLoginTome(): boolean;
  clearLoginTome(): void;
  getLoginTome(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLoginTome(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AsmUserDetails.AsObject;
  static toObject(includeInstance: boolean, msg: AsmUserDetails): AsmUserDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AsmUserDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AsmUserDetails;
  static deserializeBinaryFromReader(message: AsmUserDetails, reader: jspb.BinaryReader): AsmUserDetails;
}

export namespace AsmUserDetails {
  export type AsObject = {
    userId: string,
    name: string,
    agentSid: number,
    agentStatus: StatusStateMap[keyof StatusStateMap],
    agentProfileGroupName: string,
    currentConversationSid: string,
    averageCustomerWaitTimeSeconds: number,
    averageTimeToRespondSeconds: number,
    lastEventTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    skillsMap: Array<[string, number]>,
    asmSessionSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    eventsList: Array<DashboardAgentResponseEvent.AsObject>,
    loginTome?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class DashboardAgentResponseEvent extends jspb.Message {
  getResponseTimeSeconds(): number;
  setResponseTimeSeconds(value: number): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getIsInitialAgentMessage(): boolean;
  setIsInitialAgentMessage(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashboardAgentResponseEvent.AsObject;
  static toObject(includeInstance: boolean, msg: DashboardAgentResponseEvent): DashboardAgentResponseEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashboardAgentResponseEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashboardAgentResponseEvent;
  static deserializeBinaryFromReader(message: DashboardAgentResponseEvent, reader: jspb.BinaryReader): DashboardAgentResponseEvent;
}

export namespace DashboardAgentResponseEvent {
  export type AsObject = {
    responseTimeSeconds: number,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    isInitialAgentMessage: boolean,
  }
}

export interface StatusStateMap {
  STATUS_STATE_UNKNOWN: 0;
  WAITING: 1;
  IDLE: 2;
  CONVERSATION_OPEN: 3;
}

export const StatusState: StatusStateMap;

