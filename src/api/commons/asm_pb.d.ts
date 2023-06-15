// package: api.commons
// file: api/commons/asm.proto

import * as jspb from "google-protobuf";
import * as api_commons_acd_pb from "../../api/commons/acd_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class DashboardAgentInfo extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getUserName(): string;
  setUserName(value: string): void;

  getHuntGroupName(): string;
  setHuntGroupName(value: string): void;

  getPartnerAgentId(): string;
  setPartnerAgentId(value: string): void;

  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  getAgentSid(): number;
  setAgentSid(value: number): void;

  getUserCallerId(): string;
  setUserCallerId(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastUpdated(): boolean;
  clearLastUpdated(): void;
  getLastUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getAgentProfileGroupId(): string;
  setAgentProfileGroupId(value: string): void;

  getAgentProfileGroupName(): string;
  setAgentProfileGroupName(value: string): void;

  getAgentStatus(): StatusStateMap[keyof StatusStateMap];
  setAgentStatus(value: StatusStateMap[keyof StatusStateMap]): void;

  getCurrentConversationSid(): string;
  setCurrentConversationSid(value: string): void;

  getAverageCustomerWaitTimeSeconds(): number;
  setAverageCustomerWaitTimeSeconds(value: number): void;

  getAverageTimeToRespondSeconds(): number;
  setAverageTimeToRespondSeconds(value: number): void;

  getAverageConversationDurationSeconds(): number;
  setAverageConversationDurationSeconds(value: number): void;

  hasLoginTime(): boolean;
  clearLoginTime(): void;
  getLoginTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLoginTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastEventTime(): boolean;
  clearLastEventTime(): void;
  getLastEventTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastEventTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearEventsList(): void;
  getEventsList(): Array<DashboardAgentInfo.DashboardAgentResponseEvent>;
  setEventsList(value: Array<DashboardAgentInfo.DashboardAgentResponseEvent>): void;
  addEvents(value?: DashboardAgentInfo.DashboardAgentResponseEvent, index?: number): DashboardAgentInfo.DashboardAgentResponseEvent;

  getSkillsMap(): jspb.Map<string, number>;
  clearSkillsMap(): void;
  hasAsmSessionSid(): boolean;
  clearAsmSessionSid(): void;
  getAsmSessionSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAsmSessionSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashboardAgentInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DashboardAgentInfo): DashboardAgentInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashboardAgentInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashboardAgentInfo;
  static deserializeBinaryFromReader(message: DashboardAgentInfo, reader: jspb.BinaryReader): DashboardAgentInfo;
}

export namespace DashboardAgentInfo {
  export type AsObject = {
    userId: string,
    name: string,
    userName: string,
    huntGroupName: string,
    partnerAgentId: string,
    huntGroupSid: number,
    agentSid: number,
    userCallerId: string,
    firstName: string,
    lastName: string,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastUpdated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    agentProfileGroupId: string,
    agentProfileGroupName: string,
    agentStatus: StatusStateMap[keyof StatusStateMap],
    currentConversationSid: string,
    averageCustomerWaitTimeSeconds: number,
    averageTimeToRespondSeconds: number,
    averageConversationDurationSeconds: number,
    loginTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastEventTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    eventsList: Array<DashboardAgentInfo.DashboardAgentResponseEvent.AsObject>,
    skillsMap: Array<[string, number]>,
    asmSessionSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
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
}

export class StreamAgentStateRes extends jspb.Message {
  hasState(): boolean;
  clearState(): void;
  getState(): api_commons_acd_pb.AgentState | undefined;
  setState(value?: api_commons_acd_pb.AgentState): void;

  hasHeartBeat(): boolean;
  clearHeartBeat(): void;
  getHeartBeat(): KeepAlive | undefined;
  setHeartBeat(value?: KeepAlive): void;

  hasCallQueueAdd(): boolean;
  clearCallQueueAdd(): void;
  getCallQueueAdd(): QueueCallAdd | undefined;
  setCallQueueAdd(value?: QueueCallAdd): void;

  hasCallQueueRemove(): boolean;
  clearCallQueueRemove(): void;
  getCallQueueRemove(): QueueCallRemove | undefined;
  setCallQueueRemove(value?: QueueCallRemove): void;

  getAgentStateCase(): StreamAgentStateRes.AgentStateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamAgentStateRes.AsObject;
  static toObject(includeInstance: boolean, msg: StreamAgentStateRes): StreamAgentStateRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamAgentStateRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamAgentStateRes;
  static deserializeBinaryFromReader(message: StreamAgentStateRes, reader: jspb.BinaryReader): StreamAgentStateRes;
}

export namespace StreamAgentStateRes {
  export type AsObject = {
    state?: api_commons_acd_pb.AgentState.AsObject,
    heartBeat?: KeepAlive.AsObject,
    callQueueAdd?: QueueCallAdd.AsObject,
    callQueueRemove?: QueueCallRemove.AsObject,
  }

  export enum AgentStateCase {
    AGENT_STATE_NOT_SET = 0,
    STATE = 1,
    HEART_BEAT = 2,
    CALL_QUEUE_ADD = 3,
    CALL_QUEUE_REMOVE = 4,
  }
}

export class ManagerStreamAgentStateRes extends jspb.Message {
  hasState(): boolean;
  clearState(): void;
  getState(): api_commons_acd_pb.AgentState | undefined;
  setState(value?: api_commons_acd_pb.AgentState): void;

  hasHeartBeat(): boolean;
  clearHeartBeat(): void;
  getHeartBeat(): KeepAlive | undefined;
  setHeartBeat(value?: KeepAlive): void;

  getManagerAgentStateCase(): ManagerStreamAgentStateRes.ManagerAgentStateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManagerStreamAgentStateRes.AsObject;
  static toObject(includeInstance: boolean, msg: ManagerStreamAgentStateRes): ManagerStreamAgentStateRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ManagerStreamAgentStateRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManagerStreamAgentStateRes;
  static deserializeBinaryFromReader(message: ManagerStreamAgentStateRes, reader: jspb.BinaryReader): ManagerStreamAgentStateRes;
}

export namespace ManagerStreamAgentStateRes {
  export type AsObject = {
    state?: api_commons_acd_pb.AgentState.AsObject,
    heartBeat?: KeepAlive.AsObject,
  }

  export enum ManagerAgentStateCase {
    MANAGER_AGENT_STATE_NOT_SET = 0,
    STATE = 1,
    HEART_BEAT = 2,
  }
}

export class KeepAlive extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeepAlive.AsObject;
  static toObject(includeInstance: boolean, msg: KeepAlive): KeepAlive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeepAlive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeepAlive;
  static deserializeBinaryFromReader(message: KeepAlive, reader: jspb.BinaryReader): KeepAlive;
}

export namespace KeepAlive {
  export type AsObject = {
  }
}

export class QueueCallAdd extends jspb.Message {
  getPhoneNumber(): string;
  setPhoneNumber(value: string): void;

  getCallerId(): string;
  setCallerId(value: string): void;

  hasStartDate(): boolean;
  clearStartDate(): void;
  getStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasHoldDate(): boolean;
  clearHoldDate(): void;
  getHoldDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setHoldDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getFormattedSkillsMap(): jspb.Map<string, string>;
  clearFormattedSkillsMap(): void;
  getAgentSpecific(): boolean;
  setAgentSpecific(value: boolean): void;

  getQueuedNotificationType(): api_commons_acd_pb.QueuedNotificationTypeMap[keyof api_commons_acd_pb.QueuedNotificationTypeMap];
  setQueuedNotificationType(value: api_commons_acd_pb.QueuedNotificationTypeMap[keyof api_commons_acd_pb.QueuedNotificationTypeMap]): void;

  hasCallerSid(): boolean;
  clearCallerSid(): void;
  getCallerSid(): api_commons_acd_pb.CallerSid | undefined;
  setCallerSid(value?: api_commons_acd_pb.CallerSid): void;

  getSkillsMap(): jspb.Map<string, boolean>;
  clearSkillsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueCallAdd.AsObject;
  static toObject(includeInstance: boolean, msg: QueueCallAdd): QueueCallAdd.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueueCallAdd, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueCallAdd;
  static deserializeBinaryFromReader(message: QueueCallAdd, reader: jspb.BinaryReader): QueueCallAdd;
}

export namespace QueueCallAdd {
  export type AsObject = {
    phoneNumber: string,
    callerId: string,
    startDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    holdDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    formattedSkillsMap: Array<[string, string]>,
    agentSpecific: boolean,
    queuedNotificationType: api_commons_acd_pb.QueuedNotificationTypeMap[keyof api_commons_acd_pb.QueuedNotificationTypeMap],
    callerSid?: api_commons_acd_pb.CallerSid.AsObject,
    skillsMap: Array<[string, boolean]>,
  }
}

export class QueueCallRemove extends jspb.Message {
  hasCallerSid(): boolean;
  clearCallerSid(): void;
  getCallerSid(): api_commons_acd_pb.CallerSid | undefined;
  setCallerSid(value?: api_commons_acd_pb.CallerSid): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueCallRemove.AsObject;
  static toObject(includeInstance: boolean, msg: QueueCallRemove): QueueCallRemove.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueueCallRemove, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueCallRemove;
  static deserializeBinaryFromReader(message: QueueCallRemove, reader: jspb.BinaryReader): QueueCallRemove;
}

export namespace QueueCallRemove {
  export type AsObject = {
    callerSid?: api_commons_acd_pb.CallerSid.AsObject,
  }
}

export interface AsmSubsessionTypeMap {
  VOICE: 0;
  OMNI: 1;
}

export const AsmSubsessionType: AsmSubsessionTypeMap;

export interface StatusStateMap {
  STATUS_STATE_UNKNOWN: 0;
  WAITING: 1;
  IDLE: 2;
  CONVERSATION_OPEN: 3;
}

export const StatusState: StatusStateMap;

