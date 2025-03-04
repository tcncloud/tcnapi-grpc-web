// package: api.commons
// file: api/commons/ghostnotifier.proto

import * as jspb from "google-protobuf";
import * as api_commons_acd_pb from "../../api/commons/acd_pb";
import * as api_commons_omnichannel_pb from "../../api/commons/omnichannel_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class GhostNotification extends jspb.Message {
  getReferenceId(): string;
  setReferenceId(value: string): void;

  hasAny(): boolean;
  clearAny(): void;
  getAny(): google_protobuf_any_pb.Any | undefined;
  setAny(value?: google_protobuf_any_pb.Any): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): Status | undefined;
  setStatus(value?: Status): void;

  hasOmniConversation(): boolean;
  clearOmniConversation(): void;
  getOmniConversation(): api_commons_omnichannel_pb.OmniConversation | undefined;
  setOmniConversation(value?: api_commons_omnichannel_pb.OmniConversation): void;

  hasBackofficeMessage(): boolean;
  clearBackofficeMessage(): void;
  getBackofficeMessage(): api_commons_acd_pb.AgentBackofficeMessageAlert | undefined;
  setBackofficeMessage(value?: api_commons_acd_pb.AgentBackofficeMessageAlert): void;

  hasDirectedCallRinging(): boolean;
  clearDirectedCallRinging(): void;
  getDirectedCallRinging(): api_commons_acd_pb.AgentDirectedCallRingingAlert | undefined;
  setDirectedCallRinging(value?: api_commons_acd_pb.AgentDirectedCallRingingAlert): void;

  hasDirectedCallHangup(): boolean;
  clearDirectedCallHangup(): void;
  getDirectedCallHangup(): api_commons_acd_pb.AgentDirectedCallHangupAlert | undefined;
  setDirectedCallHangup(value?: api_commons_acd_pb.AgentDirectedCallHangupAlert): void;

  hasAgentQueuedCallsNotification(): boolean;
  clearAgentQueuedCallsNotification(): void;
  getAgentQueuedCallsNotification(): AgentQueuedCallsNotification | undefined;
  setAgentQueuedCallsNotification(value?: AgentQueuedCallsNotification): void;

  hasAuthTokenExpirationNotification(): boolean;
  clearAuthTokenExpirationNotification(): void;
  getAuthTokenExpirationNotification(): AuthTokenExpiration | undefined;
  setAuthTokenExpirationNotification(value?: AuthTokenExpiration): void;

  hasOmniMessageReceived(): boolean;
  clearOmniMessageReceived(): void;
  getOmniMessageReceived(): OmniMessageReceieved | undefined;
  setOmniMessageReceived(value?: OmniMessageReceieved): void;

  hasOmniConversationAssigned(): boolean;
  clearOmniConversationAssigned(): void;
  getOmniConversationAssigned(): OmniConversationAssigned | undefined;
  setOmniConversationAssigned(value?: OmniConversationAssigned): void;

  getPayloadCase(): GhostNotification.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GhostNotification.AsObject;
  static toObject(includeInstance: boolean, msg: GhostNotification): GhostNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GhostNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GhostNotification;
  static deserializeBinaryFromReader(message: GhostNotification, reader: jspb.BinaryReader): GhostNotification;
}

export namespace GhostNotification {
  export type AsObject = {
    referenceId: string,
    any?: google_protobuf_any_pb.Any.AsObject,
    status?: Status.AsObject,
    omniConversation?: api_commons_omnichannel_pb.OmniConversation.AsObject,
    backofficeMessage?: api_commons_acd_pb.AgentBackofficeMessageAlert.AsObject,
    directedCallRinging?: api_commons_acd_pb.AgentDirectedCallRingingAlert.AsObject,
    directedCallHangup?: api_commons_acd_pb.AgentDirectedCallHangupAlert.AsObject,
    agentQueuedCallsNotification?: AgentQueuedCallsNotification.AsObject,
    authTokenExpirationNotification?: AuthTokenExpiration.AsObject,
    omniMessageReceived?: OmniMessageReceieved.AsObject,
    omniConversationAssigned?: OmniConversationAssigned.AsObject,
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    ANY = 2,
    STATUS = 3,
    OMNI_CONVERSATION = 4,
    BACKOFFICE_MESSAGE = 6,
    DIRECTED_CALL_RINGING = 7,
    DIRECTED_CALL_HANGUP = 8,
    AGENT_QUEUED_CALLS_NOTIFICATION = 9,
    AUTH_TOKEN_EXPIRATION_NOTIFICATION = 11,
    OMNI_MESSAGE_RECEIVED = 12,
    OMNI_CONVERSATION_ASSIGNED = 13,
  }
}

export class Status extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Status.AsObject;
  static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Status;
  static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class AgentQueuedCallsNotification extends jspb.Message {
  clearAgentQueueCallsList(): void;
  getAgentQueueCallsList(): Array<AgentQueuedCallsNotification.QueuedCallData>;
  setAgentQueueCallsList(value: Array<AgentQueuedCallsNotification.QueuedCallData>): void;
  addAgentQueueCalls(value?: AgentQueuedCallsNotification.QueuedCallData, index?: number): AgentQueuedCallsNotification.QueuedCallData;

  clearOnHoldCallsList(): void;
  getOnHoldCallsList(): Array<AgentQueuedCallsNotification.QueuedCallData>;
  setOnHoldCallsList(value: Array<AgentQueuedCallsNotification.QueuedCallData>): void;
  addOnHoldCalls(value?: AgentQueuedCallsNotification.QueuedCallData, index?: number): AgentQueuedCallsNotification.QueuedCallData;

  clearHqmCallsList(): void;
  getHqmCallsList(): Array<AgentQueuedCallsNotification.QueuedCallData>;
  setHqmCallsList(value: Array<AgentQueuedCallsNotification.QueuedCallData>): void;
  addHqmCalls(value?: AgentQueuedCallsNotification.QueuedCallData, index?: number): AgentQueuedCallsNotification.QueuedCallData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentQueuedCallsNotification.AsObject;
  static toObject(includeInstance: boolean, msg: AgentQueuedCallsNotification): AgentQueuedCallsNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentQueuedCallsNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentQueuedCallsNotification;
  static deserializeBinaryFromReader(message: AgentQueuedCallsNotification, reader: jspb.BinaryReader): AgentQueuedCallsNotification;
}

export namespace AgentQueuedCallsNotification {
  export type AsObject = {
    agentQueueCallsList: Array<AgentQueuedCallsNotification.QueuedCallData.AsObject>,
    onHoldCallsList: Array<AgentQueuedCallsNotification.QueuedCallData.AsObject>,
    hqmCallsList: Array<AgentQueuedCallsNotification.QueuedCallData.AsObject>,
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

export class AuthTokenExpiration extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  hasExpiration(): boolean;
  clearExpiration(): void;
  getExpiration(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiration(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthTokenExpiration.AsObject;
  static toObject(includeInstance: boolean, msg: AuthTokenExpiration): AuthTokenExpiration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthTokenExpiration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthTokenExpiration;
  static deserializeBinaryFromReader(message: AuthTokenExpiration, reader: jspb.BinaryReader): AuthTokenExpiration;
}

export namespace AuthTokenExpiration {
  export type AsObject = {
    token: string,
    expiration?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class OmniConversationAssigned extends jspb.Message {
  getConversationSid(): number;
  setConversationSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniConversationAssigned.AsObject;
  static toObject(includeInstance: boolean, msg: OmniConversationAssigned): OmniConversationAssigned.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniConversationAssigned, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniConversationAssigned;
  static deserializeBinaryFromReader(message: OmniConversationAssigned, reader: jspb.BinaryReader): OmniConversationAssigned;
}

export namespace OmniConversationAssigned {
  export type AsObject = {
    conversationSid: number,
  }
}

export class OmniMessageReceieved extends jspb.Message {
  getConversationSid(): number;
  setConversationSid(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniMessageReceieved.AsObject;
  static toObject(includeInstance: boolean, msg: OmniMessageReceieved): OmniMessageReceieved.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniMessageReceieved, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniMessageReceieved;
  static deserializeBinaryFromReader(message: OmniMessageReceieved, reader: jspb.BinaryReader): OmniMessageReceieved;
}

export namespace OmniMessageReceieved {
  export type AsObject = {
    conversationSid: number,
    message: string,
  }
}

