// package: api.v1alpha1.asm
// file: api/v1alpha1/asm/service.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../../annotations/authz_pb";
import * as api_commons_acd_pb from "../../../api/commons/acd_pb";
import * as api_commons_asm_pb from "../../../api/commons/asm_pb";
import * as api_commons_auth_user_pb from "../../../api/commons/auth/user_pb";
import * as api_commons_event_pb from "../../../api/commons/event_pb";
import * as api_commons_omnichannel_pb from "../../../api/commons/omnichannel_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class CreateSessionReq extends jspb.Message {
  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  getSkillsMap(): jspb.Map<string, number>;
  clearSkillsMap(): void;
  getSubsessionType(): api_commons_asm_pb.AsmSubsessionTypeMap[keyof api_commons_asm_pb.AsmSubsessionTypeMap];
  setSubsessionType(value: api_commons_asm_pb.AsmSubsessionTypeMap[keyof api_commons_asm_pb.AsmSubsessionTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSessionReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSessionReq): CreateSessionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSessionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSessionReq;
  static deserializeBinaryFromReader(message: CreateSessionReq, reader: jspb.BinaryReader): CreateSessionReq;
}

export namespace CreateSessionReq {
  export type AsObject = {
    huntGroupSid: number,
    skillsMap: Array<[string, number]>,
    subsessionType: api_commons_asm_pb.AsmSubsessionTypeMap[keyof api_commons_asm_pb.AsmSubsessionTypeMap],
  }
}

export class CreateSessionRes extends jspb.Message {
  getAsmSessionSid(): number;
  setAsmSessionSid(value: number): void;

  getVoiceSessionSid(): number;
  setVoiceSessionSid(value: number): void;

  hasVoiceRegistration(): boolean;
  clearVoiceRegistration(): void;
  getVoiceRegistration(): VoiceRegistration | undefined;
  setVoiceRegistration(value?: VoiceRegistration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSessionRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSessionRes): CreateSessionRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSessionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSessionRes;
  static deserializeBinaryFromReader(message: CreateSessionRes, reader: jspb.BinaryReader): CreateSessionRes;
}

export namespace CreateSessionRes {
  export type AsObject = {
    asmSessionSid: number,
    voiceSessionSid: number,
    voiceRegistration?: VoiceRegistration.AsObject,
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

export class StreamAgentStateReq extends jspb.Message {
  getAsmSessionSid(): number;
  setAsmSessionSid(value: number): void;

  getKeepAlive(): boolean;
  setKeepAlive(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamAgentStateReq.AsObject;
  static toObject(includeInstance: boolean, msg: StreamAgentStateReq): StreamAgentStateReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamAgentStateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamAgentStateReq;
  static deserializeBinaryFromReader(message: StreamAgentStateReq, reader: jspb.BinaryReader): StreamAgentStateReq;
}

export namespace StreamAgentStateReq {
  export type AsObject = {
    asmSessionSid: number,
    keepAlive: boolean,
  }
}

export class ManagerStreamAgentStateReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManagerStreamAgentStateReq.AsObject;
  static toObject(includeInstance: boolean, msg: ManagerStreamAgentStateReq): ManagerStreamAgentStateReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ManagerStreamAgentStateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManagerStreamAgentStateReq;
  static deserializeBinaryFromReader(message: ManagerStreamAgentStateReq, reader: jspb.BinaryReader): ManagerStreamAgentStateReq;
}

export namespace ManagerStreamAgentStateReq {
  export type AsObject = {
  }
}

export class GetStatusReq extends jspb.Message {
  getAsmSessionSid(): number;
  setAsmSessionSid(value: number): void;

  getPerformKeepAlive(): boolean;
  setPerformKeepAlive(value: boolean): void;

  getPerformGetQueuedCalls(): boolean;
  setPerformGetQueuedCalls(value: boolean): void;

  getPerformGetMessage(): boolean;
  setPerformGetMessage(value: boolean): void;

  getMinimumMessageTimestamp(): number;
  setMinimumMessageTimestamp(value: number): void;

  clearSkillsList(): void;
  getSkillsList(): Array<string>;
  setSkillsList(value: Array<string>): void;
  addSkills(value: string, index?: number): string;

  clearEventsList(): void;
  getEventsList(): Array<api_commons_event_pb.Event>;
  setEventsList(value: Array<api_commons_event_pb.Event>): void;
  addEvents(value?: api_commons_event_pb.Event, index?: number): api_commons_event_pb.Event;

  clearAgentPbxExtensionsList(): void;
  getAgentPbxExtensionsList(): Array<string>;
  setAgentPbxExtensionsList(value: Array<string>): void;
  addAgentPbxExtensions(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStatusReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetStatusReq): GetStatusReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStatusReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStatusReq;
  static deserializeBinaryFromReader(message: GetStatusReq, reader: jspb.BinaryReader): GetStatusReq;
}

export namespace GetStatusReq {
  export type AsObject = {
    asmSessionSid: number,
    performKeepAlive: boolean,
    performGetQueuedCalls: boolean,
    performGetMessage: boolean,
    minimumMessageTimestamp: number,
    skillsList: Array<string>,
    eventsList: Array<api_commons_event_pb.Event.AsObject>,
    agentPbxExtensionsList: Array<string>,
  }
}

export class GetStatusRes extends jspb.Message {
  hasVoiceStatus(): boolean;
  clearVoiceStatus(): void;
  getVoiceStatus(): VoiceStatus | undefined;
  setVoiceStatus(value?: VoiceStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStatusRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetStatusRes): GetStatusRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStatusRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStatusRes;
  static deserializeBinaryFromReader(message: GetStatusRes, reader: jspb.BinaryReader): GetStatusRes;
}

export namespace GetStatusRes {
  export type AsObject = {
    voiceStatus?: VoiceStatus.AsObject,
  }
}

export class VoiceStatus extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getStatusDesc(): api_commons_acd_pb.AgentStatus.EnumMap[keyof api_commons_acd_pb.AgentStatus.EnumMap];
  setStatusDesc(value: api_commons_acd_pb.AgentStatus.EnumMap[keyof api_commons_acd_pb.AgentStatus.EnumMap]): void;

  getPaused(): boolean;
  setPaused(value: boolean): void;

  getQueue(): string;
  setQueue(value: string): void;

  getCurrentSessionId(): number;
  setCurrentSessionId(value: number): void;

  getLastStatusChange(): number;
  setLastStatusChange(value: number): void;

  getMonitoring(): boolean;
  setMonitoring(value: boolean): void;

  getCallsCount(): number;
  setCallsCount(value: number): void;

  getLastSipCode(): number;
  setLastSipCode(value: number): void;

  getAgentPeerIsLostCall(): boolean;
  setAgentPeerIsLostCall(value: boolean): void;

  getDisabled(): boolean;
  setDisabled(value: boolean): void;

  getKeepAliveSucceeded(): boolean;
  setKeepAliveSucceeded(value: boolean): void;

  getMessage(): string;
  setMessage(value: string): void;

  getMessageTimestamp(): number;
  setMessageTimestamp(value: number): void;

  hasQueuedCalls(): boolean;
  clearQueuedCalls(): void;
  getQueuedCalls(): QueuedCalls | undefined;
  setQueuedCalls(value?: QueuedCalls): void;

  getCallerWasSuspended(): boolean;
  setCallerWasSuspended(value: boolean): void;

  clearTransferMembersList(): void;
  getTransferMembersList(): Array<api_commons_acd_pb.TransferMember>;
  setTransferMembersList(value: Array<api_commons_acd_pb.TransferMember>): void;
  addTransferMembers(value?: api_commons_acd_pb.TransferMember, index?: number): api_commons_acd_pb.TransferMember;

  hasAlert(): boolean;
  clearAlert(): void;
  getAlert(): api_commons_acd_pb.AgentAlert | undefined;
  setAlert(value?: api_commons_acd_pb.AgentAlert): void;

  getAgentPeerIsDirectToAgent(): boolean;
  setAgentPeerIsDirectToAgent(value: boolean): void;

  getAgentIsMuted(): boolean;
  setAgentIsMuted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VoiceStatus.AsObject;
  static toObject(includeInstance: boolean, msg: VoiceStatus): VoiceStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VoiceStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VoiceStatus;
  static deserializeBinaryFromReader(message: VoiceStatus, reader: jspb.BinaryReader): VoiceStatus;
}

export namespace VoiceStatus {
  export type AsObject = {
    status: number,
    statusDesc: api_commons_acd_pb.AgentStatus.EnumMap[keyof api_commons_acd_pb.AgentStatus.EnumMap],
    paused: boolean,
    queue: string,
    currentSessionId: number,
    lastStatusChange: number,
    monitoring: boolean,
    callsCount: number,
    lastSipCode: number,
    agentPeerIsLostCall: boolean,
    disabled: boolean,
    keepAliveSucceeded: boolean,
    message: string,
    messageTimestamp: number,
    queuedCalls?: QueuedCalls.AsObject,
    callerWasSuspended: boolean,
    transferMembersList: Array<api_commons_acd_pb.TransferMember.AsObject>,
    alert?: api_commons_acd_pb.AgentAlert.AsObject,
    agentPeerIsDirectToAgent: boolean,
    agentIsMuted: boolean,
  }
}

export class QueuedCalls extends jspb.Message {
  clearAgentQueueCallsList(): void;
  getAgentQueueCallsList(): Array<QueuedCalls.QueuedCallData>;
  setAgentQueueCallsList(value: Array<QueuedCalls.QueuedCallData>): void;
  addAgentQueueCalls(value?: QueuedCalls.QueuedCallData, index?: number): QueuedCalls.QueuedCallData;

  clearOnHoldCallsList(): void;
  getOnHoldCallsList(): Array<QueuedCalls.QueuedCallData>;
  setOnHoldCallsList(value: Array<QueuedCalls.QueuedCallData>): void;
  addOnHoldCalls(value?: QueuedCalls.QueuedCallData, index?: number): QueuedCalls.QueuedCallData;

  clearHqmCallsList(): void;
  getHqmCallsList(): Array<QueuedCalls.QueuedCallData>;
  setHqmCallsList(value: Array<QueuedCalls.QueuedCallData>): void;
  addHqmCalls(value?: QueuedCalls.QueuedCallData, index?: number): QueuedCalls.QueuedCallData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueuedCalls.AsObject;
  static toObject(includeInstance: boolean, msg: QueuedCalls): QueuedCalls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueuedCalls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueuedCalls;
  static deserializeBinaryFromReader(message: QueuedCalls, reader: jspb.BinaryReader): QueuedCalls;
}

export namespace QueuedCalls {
  export type AsObject = {
    agentQueueCallsList: Array<QueuedCalls.QueuedCallData.AsObject>,
    onHoldCallsList: Array<QueuedCalls.QueuedCallData.AsObject>,
    hqmCallsList: Array<QueuedCalls.QueuedCallData.AsObject>,
  }

  export class QueuedCallData extends jspb.Message {
    getCallSid(): number;
    setCallSid(value: number): void;

    getPhoneNumber(): string;
    setPhoneNumber(value: string): void;

    getCallerId(): string;
    setCallerId(value: string): void;

    getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
    setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

    hasStartDate(): boolean;
    clearStartDate(): void;
    getStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasHoldDate(): boolean;
    clearHoldDate(): void;
    getHoldDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setHoldDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

    clearSkillsList(): void;
    getSkillsList(): Array<string>;
    setSkillsList(value: Array<string>): void;
    addSkills(value: string, index?: number): string;

    getAgentSpecific(): boolean;
    setAgentSpecific(value: boolean): void;

    getQueuedNotificationType(): api_commons_acd_pb.QueuedNotificationTypeMap[keyof api_commons_acd_pb.QueuedNotificationTypeMap];
    setQueuedNotificationType(value: api_commons_acd_pb.QueuedNotificationTypeMap[keyof api_commons_acd_pb.QueuedNotificationTypeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueuedCallData.AsObject;
    static toObject(includeInstance: boolean, msg: QueuedCallData): QueuedCallData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueuedCallData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueuedCallData;
    static deserializeBinaryFromReader(message: QueuedCallData, reader: jspb.BinaryReader): QueuedCallData;
  }

  export namespace QueuedCallData {
    export type AsObject = {
      callSid: number,
      phoneNumber: string,
      callerId: string,
      callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
      startDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      holdDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      skillsList: Array<string>,
      agentSpecific: boolean,
      queuedNotificationType: api_commons_acd_pb.QueuedNotificationTypeMap[keyof api_commons_acd_pb.QueuedNotificationTypeMap],
    }
  }
}

export class EndSessionReq extends jspb.Message {
  getAsmSessionSid(): number;
  setAsmSessionSid(value: number): void;

  getReason(): string;
  setReason(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndSessionReq.AsObject;
  static toObject(includeInstance: boolean, msg: EndSessionReq): EndSessionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EndSessionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndSessionReq;
  static deserializeBinaryFromReader(message: EndSessionReq, reader: jspb.BinaryReader): EndSessionReq;
}

export namespace EndSessionReq {
  export type AsObject = {
    asmSessionSid: number,
    reason: string,
  }
}

export class EndSessionRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndSessionRes.AsObject;
  static toObject(includeInstance: boolean, msg: EndSessionRes): EndSessionRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EndSessionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndSessionRes;
  static deserializeBinaryFromReader(message: EndSessionRes, reader: jspb.BinaryReader): EndSessionRes;
}

export namespace EndSessionRes {
  export type AsObject = {
  }
}

export class GetCurrentSessionReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurrentSessionReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurrentSessionReq): GetCurrentSessionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCurrentSessionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurrentSessionReq;
  static deserializeBinaryFromReader(message: GetCurrentSessionReq, reader: jspb.BinaryReader): GetCurrentSessionReq;
}

export namespace GetCurrentSessionReq {
  export type AsObject = {
  }
}

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

export class SwitchSubsessionReq extends jspb.Message {
  getAsmSessionSid(): number;
  setAsmSessionSid(value: number): void;

  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  getSkillsMap(): jspb.Map<string, number>;
  clearSkillsMap(): void;
  getChannelType(): api_commons_asm_pb.AsmSubsessionTypeMap[keyof api_commons_asm_pb.AsmSubsessionTypeMap];
  setChannelType(value: api_commons_asm_pb.AsmSubsessionTypeMap[keyof api_commons_asm_pb.AsmSubsessionTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwitchSubsessionReq.AsObject;
  static toObject(includeInstance: boolean, msg: SwitchSubsessionReq): SwitchSubsessionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SwitchSubsessionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwitchSubsessionReq;
  static deserializeBinaryFromReader(message: SwitchSubsessionReq, reader: jspb.BinaryReader): SwitchSubsessionReq;
}

export namespace SwitchSubsessionReq {
  export type AsObject = {
    asmSessionSid: number,
    huntGroupSid: number,
    skillsMap: Array<[string, number]>,
    channelType: api_commons_asm_pb.AsmSubsessionTypeMap[keyof api_commons_asm_pb.AsmSubsessionTypeMap],
  }
}

export class SwitchSubsessionRes extends jspb.Message {
  getVoiceSessionSid(): number;
  setVoiceSessionSid(value: number): void;

  hasVoiceRegistration(): boolean;
  clearVoiceRegistration(): void;
  getVoiceRegistration(): VoiceRegistration | undefined;
  setVoiceRegistration(value?: VoiceRegistration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwitchSubsessionRes.AsObject;
  static toObject(includeInstance: boolean, msg: SwitchSubsessionRes): SwitchSubsessionRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SwitchSubsessionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwitchSubsessionRes;
  static deserializeBinaryFromReader(message: SwitchSubsessionRes, reader: jspb.BinaryReader): SwitchSubsessionRes;
}

export namespace SwitchSubsessionRes {
  export type AsObject = {
    voiceSessionSid: number,
    voiceRegistration?: VoiceRegistration.AsObject,
  }
}

export class Conversation extends jspb.Message {
  getConversationSid(): string;
  setConversationSid(value: string): void;

  hasConversationCreatedTime(): boolean;
  clearConversationCreatedTime(): void;
  getConversationCreatedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setConversationCreatedTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasAssignedLastUpdatedTime(): boolean;
  clearAssignedLastUpdatedTime(): void;
  getAssignedLastUpdatedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAssignedLastUpdatedTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getConversationStatus(): api_commons_omnichannel_pb.ConversationStatusMap[keyof api_commons_omnichannel_pb.ConversationStatusMap];
  setConversationStatus(value: api_commons_omnichannel_pb.ConversationStatusMap[keyof api_commons_omnichannel_pb.ConversationStatusMap]): void;

  getChannelType(): api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap];
  setChannelType(value: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]): void;

  hasCustomerInfo(): boolean;
  clearCustomerInfo(): void;
  getCustomerInfo(): api_commons_omnichannel_pb.ConversationCustomerInformation | undefined;
  setCustomerInfo(value?: api_commons_omnichannel_pb.ConversationCustomerInformation): void;

  hasLastMessageTime(): boolean;
  clearLastMessageTime(): void;
  getLastMessageTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastMessageTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasSkills(): boolean;
  clearSkills(): void;
  getSkills(): ConversationSkills | undefined;
  setSkills(value?: ConversationSkills): void;

  getAssignmentStatus(): api_commons_omnichannel_pb.AgentConversationAssignmentStatusMap[keyof api_commons_omnichannel_pb.AgentConversationAssignmentStatusMap];
  setAssignmentStatus(value: api_commons_omnichannel_pb.AgentConversationAssignmentStatusMap[keyof api_commons_omnichannel_pb.AgentConversationAssignmentStatusMap]): void;

  getAssignmentType(): api_commons_omnichannel_pb.AgentConversationAssignmentTypeMap[keyof api_commons_omnichannel_pb.AgentConversationAssignmentTypeMap];
  setAssignmentType(value: api_commons_omnichannel_pb.AgentConversationAssignmentTypeMap[keyof api_commons_omnichannel_pb.AgentConversationAssignmentTypeMap]): void;

  hasSlaTimeouts(): boolean;
  clearSlaTimeouts(): void;
  getSlaTimeouts(): api_commons_omnichannel_pb.SLATimeouts | undefined;
  setSlaTimeouts(value?: api_commons_omnichannel_pb.SLATimeouts): void;

  hasConversationCollectedData(): boolean;
  clearConversationCollectedData(): void;
  getConversationCollectedData(): api_commons_omnichannel_pb.ConversationCollectedData | undefined;
  setConversationCollectedData(value?: api_commons_omnichannel_pb.ConversationCollectedData): void;

  hasLastMessageGroupTime(): boolean;
  clearLastMessageGroupTime(): void;
  getLastMessageGroupTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastMessageGroupTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getLastMessageGroupType(): api_commons_omnichannel_pb.OmniSenderTypeMap[keyof api_commons_omnichannel_pb.OmniSenderTypeMap];
  setLastMessageGroupType(value: api_commons_omnichannel_pb.OmniSenderTypeMap[keyof api_commons_omnichannel_pb.OmniSenderTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Conversation.AsObject;
  static toObject(includeInstance: boolean, msg: Conversation): Conversation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Conversation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Conversation;
  static deserializeBinaryFromReader(message: Conversation, reader: jspb.BinaryReader): Conversation;
}

export namespace Conversation {
  export type AsObject = {
    conversationSid: string,
    conversationCreatedTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    assignedLastUpdatedTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    conversationStatus: api_commons_omnichannel_pb.ConversationStatusMap[keyof api_commons_omnichannel_pb.ConversationStatusMap],
    channelType: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap],
    customerInfo?: api_commons_omnichannel_pb.ConversationCustomerInformation.AsObject,
    lastMessageTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    skills?: ConversationSkills.AsObject,
    assignmentStatus: api_commons_omnichannel_pb.AgentConversationAssignmentStatusMap[keyof api_commons_omnichannel_pb.AgentConversationAssignmentStatusMap],
    assignmentType: api_commons_omnichannel_pb.AgentConversationAssignmentTypeMap[keyof api_commons_omnichannel_pb.AgentConversationAssignmentTypeMap],
    slaTimeouts?: api_commons_omnichannel_pb.SLATimeouts.AsObject,
    conversationCollectedData?: api_commons_omnichannel_pb.ConversationCollectedData.AsObject,
    lastMessageGroupTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastMessageGroupType: api_commons_omnichannel_pb.OmniSenderTypeMap[keyof api_commons_omnichannel_pb.OmniSenderTypeMap],
  }
}

export class ConversationSkills extends jspb.Message {
  getSkillsMap(): jspb.Map<string, boolean>;
  clearSkillsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationSkills.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationSkills): ConversationSkills.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversationSkills, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationSkills;
  static deserializeBinaryFromReader(message: ConversationSkills, reader: jspb.BinaryReader): ConversationSkills;
}

export namespace ConversationSkills {
  export type AsObject = {
    skillsMap: Array<[string, boolean]>,
  }
}

export class AssignNewConversationReq extends jspb.Message {
  getAsmSessionSid(): number;
  setAsmSessionSid(value: number): void;

  getSkillsMap(): jspb.Map<string, number>;
  clearSkillsMap(): void;
  clearChannelTypesList(): void;
  getChannelTypesList(): Array<api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]>;
  setChannelTypesList(value: Array<api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]>): void;
  addChannelTypes(value: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap], index?: number): api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignNewConversationReq.AsObject;
  static toObject(includeInstance: boolean, msg: AssignNewConversationReq): AssignNewConversationReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignNewConversationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignNewConversationReq;
  static deserializeBinaryFromReader(message: AssignNewConversationReq, reader: jspb.BinaryReader): AssignNewConversationReq;
}

export namespace AssignNewConversationReq {
  export type AsObject = {
    asmSessionSid: number,
    skillsMap: Array<[string, number]>,
    channelTypesList: Array<api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]>,
  }
}

export class AssignNewConversationRes extends jspb.Message {
  hasConversation(): boolean;
  clearConversation(): void;
  getConversation(): Conversation | undefined;
  setConversation(value?: Conversation): void;

  getReferenceId(): string;
  setReferenceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignNewConversationRes.AsObject;
  static toObject(includeInstance: boolean, msg: AssignNewConversationRes): AssignNewConversationRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignNewConversationRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignNewConversationRes;
  static deserializeBinaryFromReader(message: AssignNewConversationRes, reader: jspb.BinaryReader): AssignNewConversationRes;
}

export namespace AssignNewConversationRes {
  export type AsObject = {
    conversation?: Conversation.AsObject,
    referenceId: string,
  }
}

export class ListAgentsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentsReq): ListAgentsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentsReq;
  static deserializeBinaryFromReader(message: ListAgentsReq, reader: jspb.BinaryReader): ListAgentsReq;
}

export namespace ListAgentsReq {
  export type AsObject = {
  }
}

export class ListAgentsRes extends jspb.Message {
  clearAgentsList(): void;
  getAgentsList(): Array<api_commons_asm_pb.DashboardAgentInfo>;
  setAgentsList(value: Array<api_commons_asm_pb.DashboardAgentInfo>): void;
  addAgents(value?: api_commons_asm_pb.DashboardAgentInfo, index?: number): api_commons_asm_pb.DashboardAgentInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentsRes): ListAgentsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentsRes;
  static deserializeBinaryFromReader(message: ListAgentsRes, reader: jspb.BinaryReader): ListAgentsRes;
}

export namespace ListAgentsRes {
  export type AsObject = {
    agentsList: Array<api_commons_asm_pb.DashboardAgentInfo.AsObject>,
  }
}

export class SetConversationCollectedDataReq extends jspb.Message {
  getConversationSid(): string;
  setConversationSid(value: string): void;

  getChannelType(): api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap];
  setChannelType(value: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]): void;

  getCollectedDataMap(): jspb.Map<string, string>;
  clearCollectedDataMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetConversationCollectedDataReq.AsObject;
  static toObject(includeInstance: boolean, msg: SetConversationCollectedDataReq): SetConversationCollectedDataReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetConversationCollectedDataReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetConversationCollectedDataReq;
  static deserializeBinaryFromReader(message: SetConversationCollectedDataReq, reader: jspb.BinaryReader): SetConversationCollectedDataReq;
}

export namespace SetConversationCollectedDataReq {
  export type AsObject = {
    conversationSid: string,
    channelType: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap],
    collectedDataMap: Array<[string, string]>,
  }
}

export class SetConversationCollectedDataRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetConversationCollectedDataRes.AsObject;
  static toObject(includeInstance: boolean, msg: SetConversationCollectedDataRes): SetConversationCollectedDataRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetConversationCollectedDataRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetConversationCollectedDataRes;
  static deserializeBinaryFromReader(message: SetConversationCollectedDataRes, reader: jspb.BinaryReader): SetConversationCollectedDataRes;
}

export namespace SetConversationCollectedDataRes {
  export type AsObject = {
  }
}

export class ListConversationsReq extends jspb.Message {
  getAsmSessionSid(): number;
  setAsmSessionSid(value: number): void;

  hasAuthenticatedUser(): boolean;
  clearAuthenticatedUser(): void;
  getAuthenticatedUser(): api_commons_auth_user_pb.AuthenticatedUser | undefined;
  setAuthenticatedUser(value?: api_commons_auth_user_pb.AuthenticatedUser): void;

  getUserId(): string;
  setUserId(value: string): void;

  clearStatusesList(): void;
  getStatusesList(): Array<api_commons_omnichannel_pb.ConversationStatusMap[keyof api_commons_omnichannel_pb.ConversationStatusMap]>;
  setStatusesList(value: Array<api_commons_omnichannel_pb.ConversationStatusMap[keyof api_commons_omnichannel_pb.ConversationStatusMap]>): void;
  addStatuses(value: api_commons_omnichannel_pb.ConversationStatusMap[keyof api_commons_omnichannel_pb.ConversationStatusMap], index?: number): api_commons_omnichannel_pb.ConversationStatusMap[keyof api_commons_omnichannel_pb.ConversationStatusMap];

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  clearChannelTypesList(): void;
  getChannelTypesList(): Array<api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]>;
  setChannelTypesList(value: Array<api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]>): void;
  addChannelTypes(value: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap], index?: number): api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConversationsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListConversationsReq): ListConversationsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListConversationsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConversationsReq;
  static deserializeBinaryFromReader(message: ListConversationsReq, reader: jspb.BinaryReader): ListConversationsReq;
}

export namespace ListConversationsReq {
  export type AsObject = {
    asmSessionSid: number,
    authenticatedUser?: api_commons_auth_user_pb.AuthenticatedUser.AsObject,
    userId: string,
    statusesList: Array<api_commons_omnichannel_pb.ConversationStatusMap[keyof api_commons_omnichannel_pb.ConversationStatusMap]>,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    channelTypesList: Array<api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]>,
  }
}

export class ListConversationsRes extends jspb.Message {
  clearConversationsList(): void;
  getConversationsList(): Array<api_commons_omnichannel_pb.OmniConversation>;
  setConversationsList(value: Array<api_commons_omnichannel_pb.OmniConversation>): void;
  addConversations(value?: api_commons_omnichannel_pb.OmniConversation, index?: number): api_commons_omnichannel_pb.OmniConversation;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConversationsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListConversationsRes): ListConversationsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListConversationsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConversationsRes;
  static deserializeBinaryFromReader(message: ListConversationsRes, reader: jspb.BinaryReader): ListConversationsRes;
}

export namespace ListConversationsRes {
  export type AsObject = {
    conversationsList: Array<api_commons_omnichannel_pb.OmniConversation.AsObject>,
    nextPageToken: string,
  }
}

export class GetQueuesDetailsReq extends jspb.Message {
  getAsmSessionSid(): number;
  setAsmSessionSid(value: number): void;

  clearChannelTypesList(): void;
  getChannelTypesList(): Array<api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]>;
  setChannelTypesList(value: Array<api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]>): void;
  addChannelTypes(value: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap], index?: number): api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap];

  getSkillsMap(): jspb.Map<string, number>;
  clearSkillsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetQueuesDetailsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetQueuesDetailsReq): GetQueuesDetailsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetQueuesDetailsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetQueuesDetailsReq;
  static deserializeBinaryFromReader(message: GetQueuesDetailsReq, reader: jspb.BinaryReader): GetQueuesDetailsReq;
}

export namespace GetQueuesDetailsReq {
  export type AsObject = {
    asmSessionSid: number,
    channelTypesList: Array<api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]>,
    skillsMap: Array<[string, number]>,
  }
}

export class PushEventsReq extends jspb.Message {
  getAsmSessionSid(): number;
  setAsmSessionSid(value: number): void;

  clearEventsList(): void;
  getEventsList(): Array<api_commons_event_pb.AsmEvent>;
  setEventsList(value: Array<api_commons_event_pb.AsmEvent>): void;
  addEvents(value?: api_commons_event_pb.AsmEvent, index?: number): api_commons_event_pb.AsmEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PushEventsReq.AsObject;
  static toObject(includeInstance: boolean, msg: PushEventsReq): PushEventsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PushEventsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PushEventsReq;
  static deserializeBinaryFromReader(message: PushEventsReq, reader: jspb.BinaryReader): PushEventsReq;
}

export namespace PushEventsReq {
  export type AsObject = {
    asmSessionSid: number,
    eventsList: Array<api_commons_event_pb.AsmEvent.AsObject>,
  }
}

export class PushEventsRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PushEventsRes.AsObject;
  static toObject(includeInstance: boolean, msg: PushEventsRes): PushEventsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PushEventsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PushEventsRes;
  static deserializeBinaryFromReader(message: PushEventsRes, reader: jspb.BinaryReader): PushEventsRes;
}

export namespace PushEventsRes {
  export type AsObject = {
  }
}

export class EnableVoiceReq extends jspb.Message {
  getAsmSessionSid(): number;
  setAsmSessionSid(value: number): void;

  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  getSkillsMap(): jspb.Map<string, number>;
  clearSkillsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableVoiceReq.AsObject;
  static toObject(includeInstance: boolean, msg: EnableVoiceReq): EnableVoiceReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnableVoiceReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableVoiceReq;
  static deserializeBinaryFromReader(message: EnableVoiceReq, reader: jspb.BinaryReader): EnableVoiceReq;
}

export namespace EnableVoiceReq {
  export type AsObject = {
    asmSessionSid: number,
    huntGroupSid: number,
    skillsMap: Array<[string, number]>,
  }
}

export class EnableVoiceRes extends jspb.Message {
  getVoiceSessionSid(): number;
  setVoiceSessionSid(value: number): void;

  hasVoiceRegistration(): boolean;
  clearVoiceRegistration(): void;
  getVoiceRegistration(): VoiceRegistration | undefined;
  setVoiceRegistration(value?: VoiceRegistration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableVoiceRes.AsObject;
  static toObject(includeInstance: boolean, msg: EnableVoiceRes): EnableVoiceRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnableVoiceRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableVoiceRes;
  static deserializeBinaryFromReader(message: EnableVoiceRes, reader: jspb.BinaryReader): EnableVoiceRes;
}

export namespace EnableVoiceRes {
  export type AsObject = {
    voiceSessionSid: number,
    voiceRegistration?: VoiceRegistration.AsObject,
  }
}

export class DisableVoiceReq extends jspb.Message {
  getAsmSessionSid(): number;
  setAsmSessionSid(value: number): void;

  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  getSkillsMap(): jspb.Map<string, number>;
  clearSkillsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisableVoiceReq.AsObject;
  static toObject(includeInstance: boolean, msg: DisableVoiceReq): DisableVoiceReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DisableVoiceReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisableVoiceReq;
  static deserializeBinaryFromReader(message: DisableVoiceReq, reader: jspb.BinaryReader): DisableVoiceReq;
}

export namespace DisableVoiceReq {
  export type AsObject = {
    asmSessionSid: number,
    huntGroupSid: number,
    skillsMap: Array<[string, number]>,
  }
}

export class DisableVoiceRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisableVoiceRes.AsObject;
  static toObject(includeInstance: boolean, msg: DisableVoiceRes): DisableVoiceRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DisableVoiceRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisableVoiceRes;
  static deserializeBinaryFromReader(message: DisableVoiceRes, reader: jspb.BinaryReader): DisableVoiceRes;
}

export namespace DisableVoiceRes {
  export type AsObject = {
  }
}

