// package: api.v0alpha
// file: api/v0alpha/acd.proto

import * as jspb from "google-protobuf";
import * as api_commons_acd_pb from "../../api/commons/acd_pb";
import * as google_api_annotations_pb from "../../google/api/annotations_pb";

export class AgentGetStatusRequest extends jspb.Message {
  getSessionSid(): number;
  setSessionSid(value: number): void;

  getPerformKeepAlive(): boolean;
  setPerformKeepAlive(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentGetStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AgentGetStatusRequest): AgentGetStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentGetStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentGetStatusRequest;
  static deserializeBinaryFromReader(message: AgentGetStatusRequest, reader: jspb.BinaryReader): AgentGetStatusRequest;
}

export namespace AgentGetStatusRequest {
  export type AsObject = {
    sessionSid: number,
    performKeepAlive: boolean,
  }
}

export class AgentGetStatusReply extends jspb.Message {
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

  clearTransferMembersList(): void;
  getTransferMembersList(): Array<api_commons_acd_pb.TransferMember>;
  setTransferMembersList(value: Array<api_commons_acd_pb.TransferMember>): void;
  addTransferMembers(value?: api_commons_acd_pb.TransferMember, index?: number): api_commons_acd_pb.TransferMember;

  getAgentIsMuted(): boolean;
  setAgentIsMuted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentGetStatusReply.AsObject;
  static toObject(includeInstance: boolean, msg: AgentGetStatusReply): AgentGetStatusReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentGetStatusReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentGetStatusReply;
  static deserializeBinaryFromReader(message: AgentGetStatusReply, reader: jspb.BinaryReader): AgentGetStatusReply;
}

export namespace AgentGetStatusReply {
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
    transferMembersList: Array<api_commons_acd_pb.TransferMember.AsObject>,
    agentIsMuted: boolean,
  }
}

export class AgentGetConnectedPartyRequest extends jspb.Message {
  getSessionSid(): number;
  setSessionSid(value: number): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentGetConnectedPartyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AgentGetConnectedPartyRequest): AgentGetConnectedPartyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentGetConnectedPartyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentGetConnectedPartyRequest;
  static deserializeBinaryFromReader(message: AgentGetConnectedPartyRequest, reader: jspb.BinaryReader): AgentGetConnectedPartyRequest;
}

export namespace AgentGetConnectedPartyRequest {
  export type AsObject = {
    sessionSid: number,
    userId: string,
  }
}

export class AgentGetConnectedPartyReply extends jspb.Message {
  getCallId(): number;
  setCallId(value: number): void;

  getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentGetConnectedPartyReply.AsObject;
  static toObject(includeInstance: boolean, msg: AgentGetConnectedPartyReply): AgentGetConnectedPartyReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentGetConnectedPartyReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentGetConnectedPartyReply;
  static deserializeBinaryFromReader(message: AgentGetConnectedPartyReply, reader: jspb.BinaryReader): AgentGetConnectedPartyReply;
}

export namespace AgentGetConnectedPartyReply {
  export type AsObject = {
    callId: number,
    callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
  }
}

export class AgentIntercomRequest extends jspb.Message {
  getTargetAgentId(): number;
  setTargetAgentId(value: number): void;

  getSessionSid(): number;
  setSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentIntercomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AgentIntercomRequest): AgentIntercomRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentIntercomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentIntercomRequest;
  static deserializeBinaryFromReader(message: AgentIntercomRequest, reader: jspb.BinaryReader): AgentIntercomRequest;
}

export namespace AgentIntercomRequest {
  export type AsObject = {
    targetAgentId: number,
    sessionSid: number,
  }
}

export class AgentIntercomReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentIntercomReply.AsObject;
  static toObject(includeInstance: boolean, msg: AgentIntercomReply): AgentIntercomReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentIntercomReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentIntercomReply;
  static deserializeBinaryFromReader(message: AgentIntercomReply, reader: jspb.BinaryReader): AgentIntercomReply;
}

export namespace AgentIntercomReply {
  export type AsObject = {
  }
}

export class AgentIntercomAcceptRequest extends jspb.Message {
  getSessionSid(): number;
  setSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentIntercomAcceptRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AgentIntercomAcceptRequest): AgentIntercomAcceptRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentIntercomAcceptRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentIntercomAcceptRequest;
  static deserializeBinaryFromReader(message: AgentIntercomAcceptRequest, reader: jspb.BinaryReader): AgentIntercomAcceptRequest;
}

export namespace AgentIntercomAcceptRequest {
  export type AsObject = {
    sessionSid: number,
  }
}

export class AgentIntercomAcceptReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentIntercomAcceptReply.AsObject;
  static toObject(includeInstance: boolean, msg: AgentIntercomAcceptReply): AgentIntercomAcceptReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentIntercomAcceptReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentIntercomAcceptReply;
  static deserializeBinaryFromReader(message: AgentIntercomAcceptReply, reader: jspb.BinaryReader): AgentIntercomAcceptReply;
}

export namespace AgentIntercomAcceptReply {
  export type AsObject = {
  }
}

export class AgentIntercomRejectRequest extends jspb.Message {
  getSessionSid(): number;
  setSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentIntercomRejectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AgentIntercomRejectRequest): AgentIntercomRejectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentIntercomRejectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentIntercomRejectRequest;
  static deserializeBinaryFromReader(message: AgentIntercomRejectRequest, reader: jspb.BinaryReader): AgentIntercomRejectRequest;
}

export namespace AgentIntercomRejectRequest {
  export type AsObject = {
    sessionSid: number,
  }
}

export class AgentIntercomRejectReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentIntercomRejectReply.AsObject;
  static toObject(includeInstance: boolean, msg: AgentIntercomRejectReply): AgentIntercomRejectReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentIntercomRejectReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentIntercomRejectReply;
  static deserializeBinaryFromReader(message: AgentIntercomRejectReply, reader: jspb.BinaryReader): AgentIntercomRejectReply;
}

export namespace AgentIntercomRejectReply {
  export type AsObject = {
  }
}

export class AgentIntercomCancelRequest extends jspb.Message {
  getSessionSid(): number;
  setSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentIntercomCancelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AgentIntercomCancelRequest): AgentIntercomCancelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentIntercomCancelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentIntercomCancelRequest;
  static deserializeBinaryFromReader(message: AgentIntercomCancelRequest, reader: jspb.BinaryReader): AgentIntercomCancelRequest;
}

export namespace AgentIntercomCancelRequest {
  export type AsObject = {
    sessionSid: number,
  }
}

export class AgentIntercomCancelReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentIntercomCancelReply.AsObject;
  static toObject(includeInstance: boolean, msg: AgentIntercomCancelReply): AgentIntercomCancelReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentIntercomCancelReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentIntercomCancelReply;
  static deserializeBinaryFromReader(message: AgentIntercomCancelReply, reader: jspb.BinaryReader): AgentIntercomCancelReply;
}

export namespace AgentIntercomCancelReply {
  export type AsObject = {
  }
}

export class DialManualPrepareRequest extends jspb.Message {
  getSessionSid(): number;
  setSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DialManualPrepareRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DialManualPrepareRequest): DialManualPrepareRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DialManualPrepareRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DialManualPrepareRequest;
  static deserializeBinaryFromReader(message: DialManualPrepareRequest, reader: jspb.BinaryReader): DialManualPrepareRequest;
}

export namespace DialManualPrepareRequest {
  export type AsObject = {
    sessionSid: number,
  }
}

export class DialManualPrepareReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DialManualPrepareReply.AsObject;
  static toObject(includeInstance: boolean, msg: DialManualPrepareReply): DialManualPrepareReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DialManualPrepareReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DialManualPrepareReply;
  static deserializeBinaryFromReader(message: DialManualPrepareReply, reader: jspb.BinaryReader): DialManualPrepareReply;
}

export namespace DialManualPrepareReply {
  export type AsObject = {
  }
}

export class DialManualCancelRequest extends jspb.Message {
  getSessionSid(): number;
  setSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DialManualCancelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DialManualCancelRequest): DialManualCancelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DialManualCancelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DialManualCancelRequest;
  static deserializeBinaryFromReader(message: DialManualCancelRequest, reader: jspb.BinaryReader): DialManualCancelRequest;
}

export namespace DialManualCancelRequest {
  export type AsObject = {
    sessionSid: number,
  }
}

export class DialManualCancelReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DialManualCancelReply.AsObject;
  static toObject(includeInstance: boolean, msg: DialManualCancelReply): DialManualCancelReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DialManualCancelReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DialManualCancelReply;
  static deserializeBinaryFromReader(message: DialManualCancelReply, reader: jspb.BinaryReader): DialManualCancelReply;
}

export namespace DialManualCancelReply {
  export type AsObject = {
  }
}

export class DialPreviewPrepareRequest extends jspb.Message {
  getSessionSid(): number;
  setSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DialPreviewPrepareRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DialPreviewPrepareRequest): DialPreviewPrepareRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DialPreviewPrepareRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DialPreviewPrepareRequest;
  static deserializeBinaryFromReader(message: DialPreviewPrepareRequest, reader: jspb.BinaryReader): DialPreviewPrepareRequest;
}

export namespace DialPreviewPrepareRequest {
  export type AsObject = {
    sessionSid: number,
  }
}

export class DialPreviewPrepareReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DialPreviewPrepareReply.AsObject;
  static toObject(includeInstance: boolean, msg: DialPreviewPrepareReply): DialPreviewPrepareReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DialPreviewPrepareReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DialPreviewPrepareReply;
  static deserializeBinaryFromReader(message: DialPreviewPrepareReply, reader: jspb.BinaryReader): DialPreviewPrepareReply;
}

export namespace DialPreviewPrepareReply {
  export type AsObject = {
  }
}

export class AgentPauseRequest extends jspb.Message {
  getSessionSid(): number;
  setSessionSid(value: number): void;

  getReason(): string;
  setReason(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentPauseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AgentPauseRequest): AgentPauseRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentPauseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentPauseRequest;
  static deserializeBinaryFromReader(message: AgentPauseRequest, reader: jspb.BinaryReader): AgentPauseRequest;
}

export namespace AgentPauseRequest {
  export type AsObject = {
    sessionSid: number,
    reason: string,
  }
}

export class AgentPauseReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentPauseReply.AsObject;
  static toObject(includeInstance: boolean, msg: AgentPauseReply): AgentPauseReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentPauseReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentPauseReply;
  static deserializeBinaryFromReader(message: AgentPauseReply, reader: jspb.BinaryReader): AgentPauseReply;
}

export namespace AgentPauseReply {
  export type AsObject = {
  }
}

export class AgentSetReadyRequest extends jspb.Message {
  getSessionSid(): number;
  setSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentSetReadyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AgentSetReadyRequest): AgentSetReadyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentSetReadyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentSetReadyRequest;
  static deserializeBinaryFromReader(message: AgentSetReadyRequest, reader: jspb.BinaryReader): AgentSetReadyRequest;
}

export namespace AgentSetReadyRequest {
  export type AsObject = {
    sessionSid: number,
  }
}

export class AgentSetReadyReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentSetReadyReply.AsObject;
  static toObject(includeInstance: boolean, msg: AgentSetReadyReply): AgentSetReadyReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentSetReadyReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentSetReadyReply;
  static deserializeBinaryFromReader(message: AgentSetReadyReply, reader: jspb.BinaryReader): AgentSetReadyReply;
}

export namespace AgentSetReadyReply {
  export type AsObject = {
  }
}

export class AgentGUIBusyRequest extends jspb.Message {
  getSessionSid(): number;
  setSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentGUIBusyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AgentGUIBusyRequest): AgentGUIBusyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentGUIBusyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentGUIBusyRequest;
  static deserializeBinaryFromReader(message: AgentGUIBusyRequest, reader: jspb.BinaryReader): AgentGUIBusyRequest;
}

export namespace AgentGUIBusyRequest {
  export type AsObject = {
    sessionSid: number,
  }
}

export class AgentGUIBusyReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentGUIBusyReply.AsObject;
  static toObject(includeInstance: boolean, msg: AgentGUIBusyReply): AgentGUIBusyReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentGUIBusyReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentGUIBusyReply;
  static deserializeBinaryFromReader(message: AgentGUIBusyReply, reader: jspb.BinaryReader): AgentGUIBusyReply;
}

export namespace AgentGUIBusyReply {
  export type AsObject = {
  }
}

export class AgentDisconnectRequest extends jspb.Message {
  getReason(): string;
  setReason(value: string): void;

  getSessionSid(): number;
  setSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentDisconnectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AgentDisconnectRequest): AgentDisconnectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentDisconnectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentDisconnectRequest;
  static deserializeBinaryFromReader(message: AgentDisconnectRequest, reader: jspb.BinaryReader): AgentDisconnectRequest;
}

export namespace AgentDisconnectRequest {
  export type AsObject = {
    reason: string,
    sessionSid: number,
  }
}

export class AgentDisconnectReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentDisconnectReply.AsObject;
  static toObject(includeInstance: boolean, msg: AgentDisconnectReply): AgentDisconnectReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentDisconnectReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentDisconnectReply;
  static deserializeBinaryFromReader(message: AgentDisconnectReply, reader: jspb.BinaryReader): AgentDisconnectReply;
}

export namespace AgentDisconnectReply {
  export type AsObject = {
  }
}

export class AgentSessionEventReq extends jspb.Message {
  getAgentSessionSid(): number;
  setAgentSessionSid(value: number): void;

  getActionKey(): api_commons_acd_pb.AgentSessionLogActionKey.EnumMap[keyof api_commons_acd_pb.AgentSessionLogActionKey.EnumMap];
  setActionKey(value: api_commons_acd_pb.AgentSessionLogActionKey.EnumMap[keyof api_commons_acd_pb.AgentSessionLogActionKey.EnumMap]): void;

  getActionValue(): string;
  setActionValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentSessionEventReq.AsObject;
  static toObject(includeInstance: boolean, msg: AgentSessionEventReq): AgentSessionEventReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentSessionEventReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentSessionEventReq;
  static deserializeBinaryFromReader(message: AgentSessionEventReq, reader: jspb.BinaryReader): AgentSessionEventReq;
}

export namespace AgentSessionEventReq {
  export type AsObject = {
    agentSessionSid: number,
    actionKey: api_commons_acd_pb.AgentSessionLogActionKey.EnumMap[keyof api_commons_acd_pb.AgentSessionLogActionKey.EnumMap],
    actionValue: string,
  }
}

export class AgentSessionEventRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentSessionEventRes.AsObject;
  static toObject(includeInstance: boolean, msg: AgentSessionEventRes): AgentSessionEventRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentSessionEventRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentSessionEventRes;
  static deserializeBinaryFromReader(message: AgentSessionEventRes, reader: jspb.BinaryReader): AgentSessionEventRes;
}

export namespace AgentSessionEventRes {
  export type AsObject = {
  }
}

export class CallerRequeueRequest extends jspb.Message {
  getNewConfigFolder(): string;
  setNewConfigFolder(value: string): void;

  getSkillsMap(): jspb.Map<string, boolean>;
  clearSkillsMap(): void;
  getReplaceSkills(): boolean;
  setReplaceSkills(value: boolean): void;

  getReplaceConfig(): api_commons_acd_pb.ReplaceConfig.EnumMap[keyof api_commons_acd_pb.ReplaceConfig.EnumMap];
  setReplaceConfig(value: api_commons_acd_pb.ReplaceConfig.EnumMap[keyof api_commons_acd_pb.ReplaceConfig.EnumMap]): void;

  getSessionSid(): number;
  setSessionSid(value: number): void;

  getVoicemailBox(): string;
  setVoicemailBox(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallerRequeueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CallerRequeueRequest): CallerRequeueRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallerRequeueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallerRequeueRequest;
  static deserializeBinaryFromReader(message: CallerRequeueRequest, reader: jspb.BinaryReader): CallerRequeueRequest;
}

export namespace CallerRequeueRequest {
  export type AsObject = {
    newConfigFolder: string,
    skillsMap: Array<[string, boolean]>,
    replaceSkills: boolean,
    replaceConfig: api_commons_acd_pb.ReplaceConfig.EnumMap[keyof api_commons_acd_pb.ReplaceConfig.EnumMap],
    sessionSid: number,
    voicemailBox: string,
  }
}

export class CallerRequeueReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallerRequeueReply.AsObject;
  static toObject(includeInstance: boolean, msg: CallerRequeueReply): CallerRequeueReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallerRequeueReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallerRequeueReply;
  static deserializeBinaryFromReader(message: CallerRequeueReply, reader: jspb.BinaryReader): CallerRequeueReply;
}

export namespace CallerRequeueReply {
  export type AsObject = {
  }
}

export class TransferWarmToAgentCancelRequest extends jspb.Message {
  getSessionSid(): number;
  setSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferWarmToAgentCancelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransferWarmToAgentCancelRequest): TransferWarmToAgentCancelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferWarmToAgentCancelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferWarmToAgentCancelRequest;
  static deserializeBinaryFromReader(message: TransferWarmToAgentCancelRequest, reader: jspb.BinaryReader): TransferWarmToAgentCancelRequest;
}

export namespace TransferWarmToAgentCancelRequest {
  export type AsObject = {
    sessionSid: number,
  }
}

export class TransferWarmToAgentCancelReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferWarmToAgentCancelReply.AsObject;
  static toObject(includeInstance: boolean, msg: TransferWarmToAgentCancelReply): TransferWarmToAgentCancelReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferWarmToAgentCancelReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferWarmToAgentCancelReply;
  static deserializeBinaryFromReader(message: TransferWarmToAgentCancelReply, reader: jspb.BinaryReader): TransferWarmToAgentCancelReply;
}

export namespace TransferWarmToAgentCancelReply {
  export type AsObject = {
  }
}

export class TransferWarmToOutboundCancelRequest extends jspb.Message {
  getSessionSid(): number;
  setSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferWarmToOutboundCancelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransferWarmToOutboundCancelRequest): TransferWarmToOutboundCancelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferWarmToOutboundCancelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferWarmToOutboundCancelRequest;
  static deserializeBinaryFromReader(message: TransferWarmToOutboundCancelRequest, reader: jspb.BinaryReader): TransferWarmToOutboundCancelRequest;
}

export namespace TransferWarmToOutboundCancelRequest {
  export type AsObject = {
    sessionSid: number,
  }
}

export class TransferWarmToOutboundCancelReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferWarmToOutboundCancelReply.AsObject;
  static toObject(includeInstance: boolean, msg: TransferWarmToOutboundCancelReply): TransferWarmToOutboundCancelReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferWarmToOutboundCancelReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferWarmToOutboundCancelReply;
  static deserializeBinaryFromReader(message: TransferWarmToOutboundCancelReply, reader: jspb.BinaryReader): TransferWarmToOutboundCancelReply;
}

export namespace TransferWarmToOutboundCancelReply {
  export type AsObject = {
  }
}

export class TransferWarmToAgentApproveRequest extends jspb.Message {
  getSessionSid(): number;
  setSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferWarmToAgentApproveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransferWarmToAgentApproveRequest): TransferWarmToAgentApproveRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferWarmToAgentApproveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferWarmToAgentApproveRequest;
  static deserializeBinaryFromReader(message: TransferWarmToAgentApproveRequest, reader: jspb.BinaryReader): TransferWarmToAgentApproveRequest;
}

export namespace TransferWarmToAgentApproveRequest {
  export type AsObject = {
    sessionSid: number,
  }
}

export class TransferWarmToAgentApproveReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferWarmToAgentApproveReply.AsObject;
  static toObject(includeInstance: boolean, msg: TransferWarmToAgentApproveReply): TransferWarmToAgentApproveReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferWarmToAgentApproveReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferWarmToAgentApproveReply;
  static deserializeBinaryFromReader(message: TransferWarmToAgentApproveReply, reader: jspb.BinaryReader): TransferWarmToAgentApproveReply;
}

export namespace TransferWarmToAgentApproveReply {
  export type AsObject = {
  }
}

export class TransferWarmToOutboundApproveRequest extends jspb.Message {
  getSessionSid(): number;
  setSessionSid(value: number): void;

  clearMemberIdentifiersList(): void;
  getMemberIdentifiersList(): Array<string>;
  setMemberIdentifiersList(value: Array<string>): void;
  addMemberIdentifiers(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferWarmToOutboundApproveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransferWarmToOutboundApproveRequest): TransferWarmToOutboundApproveRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferWarmToOutboundApproveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferWarmToOutboundApproveRequest;
  static deserializeBinaryFromReader(message: TransferWarmToOutboundApproveRequest, reader: jspb.BinaryReader): TransferWarmToOutboundApproveRequest;
}

export namespace TransferWarmToOutboundApproveRequest {
  export type AsObject = {
    sessionSid: number,
    memberIdentifiersList: Array<string>,
  }
}

export class TransferWarmToOutboundApproveReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferWarmToOutboundApproveReply.AsObject;
  static toObject(includeInstance: boolean, msg: TransferWarmToOutboundApproveReply): TransferWarmToOutboundApproveReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferWarmToOutboundApproveReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferWarmToOutboundApproveReply;
  static deserializeBinaryFromReader(message: TransferWarmToOutboundApproveReply, reader: jspb.BinaryReader): TransferWarmToOutboundApproveReply;
}

export namespace TransferWarmToOutboundApproveReply {
  export type AsObject = {
  }
}

export class CallerSendToVoicemailRequest extends jspb.Message {
  getMailbox(): string;
  setMailbox(value: string): void;

  getSessionSid(): number;
  setSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallerSendToVoicemailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CallerSendToVoicemailRequest): CallerSendToVoicemailRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallerSendToVoicemailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallerSendToVoicemailRequest;
  static deserializeBinaryFromReader(message: CallerSendToVoicemailRequest, reader: jspb.BinaryReader): CallerSendToVoicemailRequest;
}

export namespace CallerSendToVoicemailRequest {
  export type AsObject = {
    mailbox: string,
    sessionSid: number,
  }
}

export class CallerSendToVoicemailReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallerSendToVoicemailReply.AsObject;
  static toObject(includeInstance: boolean, msg: CallerSendToVoicemailReply): CallerSendToVoicemailReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallerSendToVoicemailReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallerSendToVoicemailReply;
  static deserializeBinaryFromReader(message: CallerSendToVoicemailReply, reader: jspb.BinaryReader): CallerSendToVoicemailReply;
}

export namespace CallerSendToVoicemailReply {
  export type AsObject = {
  }
}

export class AgentInviteTransferCallerToConferenceRequest extends jspb.Message {
  getSessionSid(): number;
  setSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentInviteTransferCallerToConferenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AgentInviteTransferCallerToConferenceRequest): AgentInviteTransferCallerToConferenceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentInviteTransferCallerToConferenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentInviteTransferCallerToConferenceRequest;
  static deserializeBinaryFromReader(message: AgentInviteTransferCallerToConferenceRequest, reader: jspb.BinaryReader): AgentInviteTransferCallerToConferenceRequest;
}

export namespace AgentInviteTransferCallerToConferenceRequest {
  export type AsObject = {
    sessionSid: number,
  }
}

export class AgentInviteTransferCallerToConferenceReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentInviteTransferCallerToConferenceReply.AsObject;
  static toObject(includeInstance: boolean, msg: AgentInviteTransferCallerToConferenceReply): AgentInviteTransferCallerToConferenceReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentInviteTransferCallerToConferenceReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentInviteTransferCallerToConferenceReply;
  static deserializeBinaryFromReader(message: AgentInviteTransferCallerToConferenceReply, reader: jspb.BinaryReader): AgentInviteTransferCallerToConferenceReply;
}

export namespace AgentInviteTransferCallerToConferenceReply {
  export type AsObject = {
  }
}

export class AgentMonitorCallsRequest extends jspb.Message {
  getMonitor(): boolean;
  setMonitor(value: boolean): void;

  getSessionSid(): number;
  setSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentMonitorCallsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AgentMonitorCallsRequest): AgentMonitorCallsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentMonitorCallsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentMonitorCallsRequest;
  static deserializeBinaryFromReader(message: AgentMonitorCallsRequest, reader: jspb.BinaryReader): AgentMonitorCallsRequest;
}

export namespace AgentMonitorCallsRequest {
  export type AsObject = {
    monitor: boolean,
    sessionSid: number,
  }
}

export class AgentMonitorCallsReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentMonitorCallsReply.AsObject;
  static toObject(includeInstance: boolean, msg: AgentMonitorCallsReply): AgentMonitorCallsReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentMonitorCallsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentMonitorCallsReply;
  static deserializeBinaryFromReader(message: AgentMonitorCallsReply, reader: jspb.BinaryReader): AgentMonitorCallsReply;
}

export namespace AgentMonitorCallsReply {
  export type AsObject = {
  }
}

export class TransferColdToOutboundRequest extends jspb.Message {
  getCallerId(): string;
  setCallerId(value: string): void;

  getDestination(): string;
  setDestination(value: string): void;

  clearReservedCarriersList(): void;
  getReservedCarriersList(): Array<string>;
  setReservedCarriersList(value: Array<string>): void;
  addReservedCarriers(value: string, index?: number): string;

  getSessionSid(): number;
  setSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferColdToOutboundRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransferColdToOutboundRequest): TransferColdToOutboundRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferColdToOutboundRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferColdToOutboundRequest;
  static deserializeBinaryFromReader(message: TransferColdToOutboundRequest, reader: jspb.BinaryReader): TransferColdToOutboundRequest;
}

export namespace TransferColdToOutboundRequest {
  export type AsObject = {
    callerId: string,
    destination: string,
    reservedCarriersList: Array<string>,
    sessionSid: number,
  }
}

export class TransferColdToOutboundReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferColdToOutboundReply.AsObject;
  static toObject(includeInstance: boolean, msg: TransferColdToOutboundReply): TransferColdToOutboundReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferColdToOutboundReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferColdToOutboundReply;
  static deserializeBinaryFromReader(message: TransferColdToOutboundReply, reader: jspb.BinaryReader): TransferColdToOutboundReply;
}

export namespace TransferColdToOutboundReply {
  export type AsObject = {
  }
}

export class TransferColdToAgentRequest extends jspb.Message {
  getDestinationAgentId(): number;
  setDestinationAgentId(value: number): void;

  getSessionSid(): number;
  setSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferColdToAgentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransferColdToAgentRequest): TransferColdToAgentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferColdToAgentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferColdToAgentRequest;
  static deserializeBinaryFromReader(message: TransferColdToAgentRequest, reader: jspb.BinaryReader): TransferColdToAgentRequest;
}

export namespace TransferColdToAgentRequest {
  export type AsObject = {
    destinationAgentId: number,
    sessionSid: number,
  }
}

export class TransferColdToAgentReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferColdToAgentReply.AsObject;
  static toObject(includeInstance: boolean, msg: TransferColdToAgentReply): TransferColdToAgentReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferColdToAgentReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferColdToAgentReply;
  static deserializeBinaryFromReader(message: TransferColdToAgentReply, reader: jspb.BinaryReader): TransferColdToAgentReply;
}

export namespace TransferColdToAgentReply {
  export type AsObject = {
  }
}

export class TransferWarmToOutboundStartRequest extends jspb.Message {
  getCallerId(): string;
  setCallerId(value: string): void;

  getDestination(): string;
  setDestination(value: string): void;

  clearReservedCarriersList(): void;
  getReservedCarriersList(): Array<string>;
  setReservedCarriersList(value: Array<string>): void;
  addReservedCarriers(value: string, index?: number): string;

  getCallerHold(): boolean;
  setCallerHold(value: boolean): void;

  getSessionSid(): number;
  setSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferWarmToOutboundStartRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransferWarmToOutboundStartRequest): TransferWarmToOutboundStartRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferWarmToOutboundStartRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferWarmToOutboundStartRequest;
  static deserializeBinaryFromReader(message: TransferWarmToOutboundStartRequest, reader: jspb.BinaryReader): TransferWarmToOutboundStartRequest;
}

export namespace TransferWarmToOutboundStartRequest {
  export type AsObject = {
    callerId: string,
    destination: string,
    reservedCarriersList: Array<string>,
    callerHold: boolean,
    sessionSid: number,
  }
}

export class TransferWarmToOutboundStartReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferWarmToOutboundStartReply.AsObject;
  static toObject(includeInstance: boolean, msg: TransferWarmToOutboundStartReply): TransferWarmToOutboundStartReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferWarmToOutboundStartReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferWarmToOutboundStartReply;
  static deserializeBinaryFromReader(message: TransferWarmToOutboundStartReply, reader: jspb.BinaryReader): TransferWarmToOutboundStartReply;
}

export namespace TransferWarmToOutboundStartReply {
  export type AsObject = {
  }
}

export class CreateWarmOutboundTransferMemberRequest extends jspb.Message {
  getCallerId(): string;
  setCallerId(value: string): void;

  getDestination(): string;
  setDestination(value: string): void;

  clearReservedCarriersList(): void;
  getReservedCarriersList(): Array<string>;
  setReservedCarriersList(value: Array<string>): void;
  addReservedCarriers(value: string, index?: number): string;

  getSessionSid(): number;
  setSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWarmOutboundTransferMemberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWarmOutboundTransferMemberRequest): CreateWarmOutboundTransferMemberRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateWarmOutboundTransferMemberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWarmOutboundTransferMemberRequest;
  static deserializeBinaryFromReader(message: CreateWarmOutboundTransferMemberRequest, reader: jspb.BinaryReader): CreateWarmOutboundTransferMemberRequest;
}

export namespace CreateWarmOutboundTransferMemberRequest {
  export type AsObject = {
    callerId: string,
    destination: string,
    reservedCarriersList: Array<string>,
    sessionSid: number,
  }
}

export class CreateWarmOutboundTransferMemberReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWarmOutboundTransferMemberReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWarmOutboundTransferMemberReply): CreateWarmOutboundTransferMemberReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateWarmOutboundTransferMemberReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWarmOutboundTransferMemberReply;
  static deserializeBinaryFromReader(message: CreateWarmOutboundTransferMemberReply, reader: jspb.BinaryReader): CreateWarmOutboundTransferMemberReply;
}

export namespace CreateWarmOutboundTransferMemberReply {
  export type AsObject = {
  }
}

export class RemoveTransferMemberRequest extends jspb.Message {
  getMemberIdentifier(): string;
  setMemberIdentifier(value: string): void;

  getSessionSid(): number;
  setSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveTransferMemberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveTransferMemberRequest): RemoveTransferMemberRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveTransferMemberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveTransferMemberRequest;
  static deserializeBinaryFromReader(message: RemoveTransferMemberRequest, reader: jspb.BinaryReader): RemoveTransferMemberRequest;
}

export namespace RemoveTransferMemberRequest {
  export type AsObject = {
    memberIdentifier: string,
    sessionSid: number,
  }
}

export class RemoveTransferMemberReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveTransferMemberReply.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveTransferMemberReply): RemoveTransferMemberReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveTransferMemberReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveTransferMemberReply;
  static deserializeBinaryFromReader(message: RemoveTransferMemberReply, reader: jspb.BinaryReader): RemoveTransferMemberReply;
}

export namespace RemoveTransferMemberReply {
  export type AsObject = {
  }
}

export class TransferWarmToAgentStartRequest extends jspb.Message {
  getDestinationAgentId(): number;
  setDestinationAgentId(value: number): void;

  getCallerHold(): boolean;
  setCallerHold(value: boolean): void;

  getSessionSid(): number;
  setSessionSid(value: number): void;

  getSkillsMap(): jspb.Map<string, boolean>;
  clearSkillsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferWarmToAgentStartRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransferWarmToAgentStartRequest): TransferWarmToAgentStartRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferWarmToAgentStartRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferWarmToAgentStartRequest;
  static deserializeBinaryFromReader(message: TransferWarmToAgentStartRequest, reader: jspb.BinaryReader): TransferWarmToAgentStartRequest;
}

export namespace TransferWarmToAgentStartRequest {
  export type AsObject = {
    destinationAgentId: number,
    callerHold: boolean,
    sessionSid: number,
    skillsMap: Array<[string, boolean]>,
  }
}

export class TransferWarmToAgentStartReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferWarmToAgentStartReply.AsObject;
  static toObject(includeInstance: boolean, msg: TransferWarmToAgentStartReply): TransferWarmToAgentStartReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferWarmToAgentStartReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferWarmToAgentStartReply;
  static deserializeBinaryFromReader(message: TransferWarmToAgentStartReply, reader: jspb.BinaryReader): TransferWarmToAgentStartReply;
}

export namespace TransferWarmToAgentStartReply {
  export type AsObject = {
  }
}

export class AgentGetCallFromHoldRequest extends jspb.Message {
  getSessionSid(): number;
  setSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentGetCallFromHoldRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AgentGetCallFromHoldRequest): AgentGetCallFromHoldRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentGetCallFromHoldRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentGetCallFromHoldRequest;
  static deserializeBinaryFromReader(message: AgentGetCallFromHoldRequest, reader: jspb.BinaryReader): AgentGetCallFromHoldRequest;
}

export namespace AgentGetCallFromHoldRequest {
  export type AsObject = {
    sessionSid: number,
  }
}

export class AgentGetCallFromHoldReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentGetCallFromHoldReply.AsObject;
  static toObject(includeInstance: boolean, msg: AgentGetCallFromHoldReply): AgentGetCallFromHoldReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentGetCallFromHoldReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentGetCallFromHoldReply;
  static deserializeBinaryFromReader(message: AgentGetCallFromHoldReply, reader: jspb.BinaryReader): AgentGetCallFromHoldReply;
}

export namespace AgentGetCallFromHoldReply {
  export type AsObject = {
  }
}

export class AgentGetSpecificCallFromHoldRequest extends jspb.Message {
  getCallId(): number;
  setCallId(value: number): void;

  getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  getSessionSid(): number;
  setSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentGetSpecificCallFromHoldRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AgentGetSpecificCallFromHoldRequest): AgentGetSpecificCallFromHoldRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentGetSpecificCallFromHoldRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentGetSpecificCallFromHoldRequest;
  static deserializeBinaryFromReader(message: AgentGetSpecificCallFromHoldRequest, reader: jspb.BinaryReader): AgentGetSpecificCallFromHoldRequest;
}

export namespace AgentGetSpecificCallFromHoldRequest {
  export type AsObject = {
    callId: number,
    callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
    sessionSid: number,
  }
}

export class AgentGetSpecificCallFromHoldReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentGetSpecificCallFromHoldReply.AsObject;
  static toObject(includeInstance: boolean, msg: AgentGetSpecificCallFromHoldReply): AgentGetSpecificCallFromHoldReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentGetSpecificCallFromHoldReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentGetSpecificCallFromHoldReply;
  static deserializeBinaryFromReader(message: AgentGetSpecificCallFromHoldReply, reader: jspb.BinaryReader): AgentGetSpecificCallFromHoldReply;
}

export namespace AgentGetSpecificCallFromHoldReply {
  export type AsObject = {
  }
}

export class AgentPutCallOnHoldRequest extends jspb.Message {
  getHoldType(): api_commons_acd_pb.HoldTypeMap[keyof api_commons_acd_pb.HoldTypeMap];
  setHoldType(value: api_commons_acd_pb.HoldTypeMap[keyof api_commons_acd_pb.HoldTypeMap]): void;

  getSessionSid(): number;
  setSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentPutCallOnHoldRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AgentPutCallOnHoldRequest): AgentPutCallOnHoldRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentPutCallOnHoldRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentPutCallOnHoldRequest;
  static deserializeBinaryFromReader(message: AgentPutCallOnHoldRequest, reader: jspb.BinaryReader): AgentPutCallOnHoldRequest;
}

export namespace AgentPutCallOnHoldRequest {
  export type AsObject = {
    holdType: api_commons_acd_pb.HoldTypeMap[keyof api_commons_acd_pb.HoldTypeMap],
    sessionSid: number,
  }
}

export class AgentPutCallOnHoldReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentPutCallOnHoldReply.AsObject;
  static toObject(includeInstance: boolean, msg: AgentPutCallOnHoldReply): AgentPutCallOnHoldReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentPutCallOnHoldReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentPutCallOnHoldReply;
  static deserializeBinaryFromReader(message: AgentPutCallOnHoldReply, reader: jspb.BinaryReader): AgentPutCallOnHoldReply;
}

export namespace AgentPutCallOnHoldReply {
  export type AsObject = {
  }
}

export class ACDGetAllAgentsStatusesRequest extends jspb.Message {
  clearSkillsList(): void;
  getSkillsList(): Array<string>;
  setSkillsList(value: Array<string>): void;
  addSkills(value: string, index?: number): string;

  getAllSkillsRequired(): boolean;
  setAllSkillsRequired(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ACDGetAllAgentsStatusesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ACDGetAllAgentsStatusesRequest): ACDGetAllAgentsStatusesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ACDGetAllAgentsStatusesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ACDGetAllAgentsStatusesRequest;
  static deserializeBinaryFromReader(message: ACDGetAllAgentsStatusesRequest, reader: jspb.BinaryReader): ACDGetAllAgentsStatusesRequest;
}

export namespace ACDGetAllAgentsStatusesRequest {
  export type AsObject = {
    skillsList: Array<string>,
    allSkillsRequired: boolean,
  }
}

export class AgentStatusDetails extends jspb.Message {
  getSid(): number;
  setSid(value: number): void;

  getCurrentSessionId(): number;
  setCurrentSessionId(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  getStatusDesc(): api_commons_acd_pb.AgentStatus.EnumMap[keyof api_commons_acd_pb.AgentStatus.EnumMap];
  setStatusDesc(value: api_commons_acd_pb.AgentStatus.EnumMap[keyof api_commons_acd_pb.AgentStatus.EnumMap]): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentStatusDetails.AsObject;
  static toObject(includeInstance: boolean, msg: AgentStatusDetails): AgentStatusDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentStatusDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentStatusDetails;
  static deserializeBinaryFromReader(message: AgentStatusDetails, reader: jspb.BinaryReader): AgentStatusDetails;
}

export namespace AgentStatusDetails {
  export type AsObject = {
    sid: number,
    currentSessionId: number,
    status: number,
    statusDesc: api_commons_acd_pb.AgentStatus.EnumMap[keyof api_commons_acd_pb.AgentStatus.EnumMap],
    userId: string,
  }
}

export class ACDGetAllAgentsStatusesReply extends jspb.Message {
  clearAgentStatusDetailsList(): void;
  getAgentStatusDetailsList(): Array<AgentStatusDetails>;
  setAgentStatusDetailsList(value: Array<AgentStatusDetails>): void;
  addAgentStatusDetails(value?: AgentStatusDetails, index?: number): AgentStatusDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ACDGetAllAgentsStatusesReply.AsObject;
  static toObject(includeInstance: boolean, msg: ACDGetAllAgentsStatusesReply): ACDGetAllAgentsStatusesReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ACDGetAllAgentsStatusesReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ACDGetAllAgentsStatusesReply;
  static deserializeBinaryFromReader(message: ACDGetAllAgentsStatusesReply, reader: jspb.BinaryReader): ACDGetAllAgentsStatusesReply;
}

export namespace ACDGetAllAgentsStatusesReply {
  export type AsObject = {
    agentStatusDetailsList: Array<AgentStatusDetails.AsObject>,
  }
}

export class AgentReceiveMessageRequest extends jspb.Message {
  getMinimumTimestamp(): number;
  setMinimumTimestamp(value: number): void;

  getSessionSid(): number;
  setSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentReceiveMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AgentReceiveMessageRequest): AgentReceiveMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentReceiveMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentReceiveMessageRequest;
  static deserializeBinaryFromReader(message: AgentReceiveMessageRequest, reader: jspb.BinaryReader): AgentReceiveMessageRequest;
}

export namespace AgentReceiveMessageRequest {
  export type AsObject = {
    minimumTimestamp: number,
    sessionSid: number,
  }
}

export class AgentReceiveMessageReply extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentReceiveMessageReply.AsObject;
  static toObject(includeInstance: boolean, msg: AgentReceiveMessageReply): AgentReceiveMessageReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentReceiveMessageReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentReceiveMessageReply;
  static deserializeBinaryFromReader(message: AgentReceiveMessageReply, reader: jspb.BinaryReader): AgentReceiveMessageReply;
}

export namespace AgentReceiveMessageReply {
  export type AsObject = {
    message: string,
    timestamp: number,
  }
}

export class AgentPBXRejectCallRequest extends jspb.Message {
  getSessionSid(): number;
  setSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentPBXRejectCallRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AgentPBXRejectCallRequest): AgentPBXRejectCallRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentPBXRejectCallRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentPBXRejectCallRequest;
  static deserializeBinaryFromReader(message: AgentPBXRejectCallRequest, reader: jspb.BinaryReader): AgentPBXRejectCallRequest;
}

export namespace AgentPBXRejectCallRequest {
  export type AsObject = {
    sessionSid: number,
  }
}

export class AgentPBXRejectCallReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentPBXRejectCallReply.AsObject;
  static toObject(includeInstance: boolean, msg: AgentPBXRejectCallReply): AgentPBXRejectCallReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentPBXRejectCallReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentPBXRejectCallReply;
  static deserializeBinaryFromReader(message: AgentPBXRejectCallReply, reader: jspb.BinaryReader): AgentPBXRejectCallReply;
}

export namespace AgentPBXRejectCallReply {
  export type AsObject = {
  }
}

export class AgentPBXApproveCallRequest extends jspb.Message {
  getSessionSid(): number;
  setSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentPBXApproveCallRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AgentPBXApproveCallRequest): AgentPBXApproveCallRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentPBXApproveCallRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentPBXApproveCallRequest;
  static deserializeBinaryFromReader(message: AgentPBXApproveCallRequest, reader: jspb.BinaryReader): AgentPBXApproveCallRequest;
}

export namespace AgentPBXApproveCallRequest {
  export type AsObject = {
    sessionSid: number,
  }
}

export class AgentPBXApproveCallReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentPBXApproveCallReply.AsObject;
  static toObject(includeInstance: boolean, msg: AgentPBXApproveCallReply): AgentPBXApproveCallReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentPBXApproveCallReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentPBXApproveCallReply;
  static deserializeBinaryFromReader(message: AgentPBXApproveCallReply, reader: jspb.BinaryReader): AgentPBXApproveCallReply;
}

export namespace AgentPBXApproveCallReply {
  export type AsObject = {
  }
}

export class GetCallerLostPeerRequest extends jspb.Message {
  getCallSid(): number;
  setCallSid(value: number): void;

  getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCallerLostPeerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCallerLostPeerRequest): GetCallerLostPeerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCallerLostPeerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCallerLostPeerRequest;
  static deserializeBinaryFromReader(message: GetCallerLostPeerRequest, reader: jspb.BinaryReader): GetCallerLostPeerRequest;
}

export namespace GetCallerLostPeerRequest {
  export type AsObject = {
    callSid: number,
    callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
  }
}

export class GetCallerLostPeerReply extends jspb.Message {
  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCallerLostPeerReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetCallerLostPeerReply): GetCallerLostPeerReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCallerLostPeerReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCallerLostPeerReply;
  static deserializeBinaryFromReader(message: GetCallerLostPeerReply, reader: jspb.BinaryReader): GetCallerLostPeerReply;
}

export namespace GetCallerLostPeerReply {
  export type AsObject = {
    huntGroupSid: number,
  }
}

export class CallerGetRawEventRequest extends jspb.Message {
  getCallSid(): number;
  setCallSid(value: number): void;

  getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallerGetRawEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CallerGetRawEventRequest): CallerGetRawEventRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallerGetRawEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallerGetRawEventRequest;
  static deserializeBinaryFromReader(message: CallerGetRawEventRequest, reader: jspb.BinaryReader): CallerGetRawEventRequest;
}

export namespace CallerGetRawEventRequest {
  export type AsObject = {
    callSid: number,
    callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
  }
}

export class CallerGetRawEventReply extends jspb.Message {
  hasEvent(): boolean;
  clearEvent(): void;
  getEvent(): CallerEvent | undefined;
  setEvent(value?: CallerEvent): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallerGetRawEventReply.AsObject;
  static toObject(includeInstance: boolean, msg: CallerGetRawEventReply): CallerGetRawEventReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallerGetRawEventReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallerGetRawEventReply;
  static deserializeBinaryFromReader(message: CallerGetRawEventReply, reader: jspb.BinaryReader): CallerGetRawEventReply;
}

export namespace CallerGetRawEventReply {
  export type AsObject = {
    event?: CallerEvent.AsObject,
  }
}

export class CallerEvent extends jspb.Message {
  getSkillsMap(): jspb.Map<string, boolean>;
  clearSkillsMap(): void;
  getAllskillsMap(): jspb.Map<string, boolean>;
  clearAllskillsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallerEvent.AsObject;
  static toObject(includeInstance: boolean, msg: CallerEvent): CallerEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallerEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallerEvent;
  static deserializeBinaryFromReader(message: CallerEvent, reader: jspb.BinaryReader): CallerEvent;
}

export namespace CallerEvent {
  export type AsObject = {
    skillsMap: Array<[string, boolean]>,
    allskillsMap: Array<[string, boolean]>,
  }
}

export class PeerAgentWithCallerRequest extends jspb.Message {
  getCallSid(): number;
  setCallSid(value: number): void;

  getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  getSessionSid(): number;
  setSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeerAgentWithCallerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PeerAgentWithCallerRequest): PeerAgentWithCallerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PeerAgentWithCallerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeerAgentWithCallerRequest;
  static deserializeBinaryFromReader(message: PeerAgentWithCallerRequest, reader: jspb.BinaryReader): PeerAgentWithCallerRequest;
}

export namespace PeerAgentWithCallerRequest {
  export type AsObject = {
    callSid: number,
    callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
    sessionSid: number,
  }
}

export class PeerAgentWithCallerReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeerAgentWithCallerReply.AsObject;
  static toObject(includeInstance: boolean, msg: PeerAgentWithCallerReply): PeerAgentWithCallerReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PeerAgentWithCallerReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeerAgentWithCallerReply;
  static deserializeBinaryFromReader(message: PeerAgentWithCallerReply, reader: jspb.BinaryReader): PeerAgentWithCallerReply;
}

export namespace PeerAgentWithCallerReply {
  export type AsObject = {
  }
}

export class HoldTransferMemberReq extends jspb.Message {
  getSessionSid(): number;
  setSessionSid(value: number): void;

  getMemberIdentifier(): string;
  setMemberIdentifier(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HoldTransferMemberReq.AsObject;
  static toObject(includeInstance: boolean, msg: HoldTransferMemberReq): HoldTransferMemberReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HoldTransferMemberReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HoldTransferMemberReq;
  static deserializeBinaryFromReader(message: HoldTransferMemberReq, reader: jspb.BinaryReader): HoldTransferMemberReq;
}

export namespace HoldTransferMemberReq {
  export type AsObject = {
    sessionSid: number,
    memberIdentifier: string,
  }
}

export class HoldTransferMemberRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HoldTransferMemberRes.AsObject;
  static toObject(includeInstance: boolean, msg: HoldTransferMemberRes): HoldTransferMemberRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HoldTransferMemberRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HoldTransferMemberRes;
  static deserializeBinaryFromReader(message: HoldTransferMemberRes, reader: jspb.BinaryReader): HoldTransferMemberRes;
}

export namespace HoldTransferMemberRes {
  export type AsObject = {
  }
}

export class UnholdTransferMemberReq extends jspb.Message {
  getSessionSid(): number;
  setSessionSid(value: number): void;

  getMemberIdentifier(): string;
  setMemberIdentifier(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnholdTransferMemberReq.AsObject;
  static toObject(includeInstance: boolean, msg: UnholdTransferMemberReq): UnholdTransferMemberReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnholdTransferMemberReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnholdTransferMemberReq;
  static deserializeBinaryFromReader(message: UnholdTransferMemberReq, reader: jspb.BinaryReader): UnholdTransferMemberReq;
}

export namespace UnholdTransferMemberReq {
  export type AsObject = {
    sessionSid: number,
    memberIdentifier: string,
  }
}

export class UnholdTransferMemberRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnholdTransferMemberRes.AsObject;
  static toObject(includeInstance: boolean, msg: UnholdTransferMemberRes): UnholdTransferMemberRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnholdTransferMemberRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnholdTransferMemberRes;
  static deserializeBinaryFromReader(message: UnholdTransferMemberRes, reader: jspb.BinaryReader): UnholdTransferMemberRes;
}

export namespace UnholdTransferMemberRes {
  export type AsObject = {
  }
}

export class GetAgentCallCountsReq extends jspb.Message {
  clearAgentSkillsList(): void;
  getAgentSkillsList(): Array<string>;
  setAgentSkillsList(value: Array<string>): void;
  addAgentSkills(value: string, index?: number): string;

  clearAgentPbxExtensionsList(): void;
  getAgentPbxExtensionsList(): Array<string>;
  setAgentPbxExtensionsList(value: Array<string>): void;
  addAgentPbxExtensions(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAgentCallCountsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetAgentCallCountsReq): GetAgentCallCountsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAgentCallCountsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAgentCallCountsReq;
  static deserializeBinaryFromReader(message: GetAgentCallCountsReq, reader: jspb.BinaryReader): GetAgentCallCountsReq;
}

export namespace GetAgentCallCountsReq {
  export type AsObject = {
    agentSkillsList: Array<string>,
    agentPbxExtensionsList: Array<string>,
  }
}

export class GetAgentCallCountsRes extends jspb.Message {
  getAgentCalls(): number;
  setAgentCalls(value: number): void;

  getSkillCalls(): number;
  setSkillCalls(value: number): void;

  getOnHoldCalls(): number;
  setOnHoldCalls(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAgentCallCountsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetAgentCallCountsRes): GetAgentCallCountsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAgentCallCountsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAgentCallCountsRes;
  static deserializeBinaryFromReader(message: GetAgentCallCountsRes, reader: jspb.BinaryReader): GetAgentCallCountsRes;
}

export namespace GetAgentCallCountsRes {
  export type AsObject = {
    agentCalls: number,
    skillCalls: number,
    onHoldCalls: number,
  }
}

export class WarmCallerTransferStartReq extends jspb.Message {
  getSessionSid(): number;
  setSessionSid(value: number): void;

  getCallSid(): number;
  setCallSid(value: number): void;

  getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  getCallerHold(): boolean;
  setCallerHold(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WarmCallerTransferStartReq.AsObject;
  static toObject(includeInstance: boolean, msg: WarmCallerTransferStartReq): WarmCallerTransferStartReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WarmCallerTransferStartReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WarmCallerTransferStartReq;
  static deserializeBinaryFromReader(message: WarmCallerTransferStartReq, reader: jspb.BinaryReader): WarmCallerTransferStartReq;
}

export namespace WarmCallerTransferStartReq {
  export type AsObject = {
    sessionSid: number,
    callSid: number,
    callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
    callerHold: boolean,
  }
}

export class WarmCallerTransferStartRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WarmCallerTransferStartRes.AsObject;
  static toObject(includeInstance: boolean, msg: WarmCallerTransferStartRes): WarmCallerTransferStartRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WarmCallerTransferStartRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WarmCallerTransferStartRes;
  static deserializeBinaryFromReader(message: WarmCallerTransferStartRes, reader: jspb.BinaryReader): WarmCallerTransferStartRes;
}

export namespace WarmCallerTransferStartRes {
  export type AsObject = {
  }
}

export class WarmCallerTransferCancelReq extends jspb.Message {
  getSessionSid(): number;
  setSessionSid(value: number): void;

  getReason(): string;
  setReason(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WarmCallerTransferCancelReq.AsObject;
  static toObject(includeInstance: boolean, msg: WarmCallerTransferCancelReq): WarmCallerTransferCancelReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WarmCallerTransferCancelReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WarmCallerTransferCancelReq;
  static deserializeBinaryFromReader(message: WarmCallerTransferCancelReq, reader: jspb.BinaryReader): WarmCallerTransferCancelReq;
}

export namespace WarmCallerTransferCancelReq {
  export type AsObject = {
    sessionSid: number,
    reason: string,
  }
}

export class WarmCallerTransferCancelRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WarmCallerTransferCancelRes.AsObject;
  static toObject(includeInstance: boolean, msg: WarmCallerTransferCancelRes): WarmCallerTransferCancelRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WarmCallerTransferCancelRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WarmCallerTransferCancelRes;
  static deserializeBinaryFromReader(message: WarmCallerTransferCancelRes, reader: jspb.BinaryReader): WarmCallerTransferCancelRes;
}

export namespace WarmCallerTransferCancelRes {
  export type AsObject = {
  }
}

export class WarmCallerTransferApproveReq extends jspb.Message {
  getSessionSid(): number;
  setSessionSid(value: number): void;

  getReason(): string;
  setReason(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WarmCallerTransferApproveReq.AsObject;
  static toObject(includeInstance: boolean, msg: WarmCallerTransferApproveReq): WarmCallerTransferApproveReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WarmCallerTransferApproveReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WarmCallerTransferApproveReq;
  static deserializeBinaryFromReader(message: WarmCallerTransferApproveReq, reader: jspb.BinaryReader): WarmCallerTransferApproveReq;
}

export namespace WarmCallerTransferApproveReq {
  export type AsObject = {
    sessionSid: number,
    reason: string,
  }
}

export class WarmCallerTransferApproveRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WarmCallerTransferApproveRes.AsObject;
  static toObject(includeInstance: boolean, msg: WarmCallerTransferApproveRes): WarmCallerTransferApproveRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WarmCallerTransferApproveRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WarmCallerTransferApproveRes;
  static deserializeBinaryFromReader(message: WarmCallerTransferApproveRes, reader: jspb.BinaryReader): WarmCallerTransferApproveRes;
}

export namespace WarmCallerTransferApproveRes {
  export type AsObject = {
  }
}

export class PlaySoundboardEntityReq extends jspb.Message {
  getSessionSid(): number;
  setSessionSid(value: number): void;

  getSoundboardEntityId(): string;
  setSoundboardEntityId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlaySoundboardEntityReq.AsObject;
  static toObject(includeInstance: boolean, msg: PlaySoundboardEntityReq): PlaySoundboardEntityReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlaySoundboardEntityReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlaySoundboardEntityReq;
  static deserializeBinaryFromReader(message: PlaySoundboardEntityReq, reader: jspb.BinaryReader): PlaySoundboardEntityReq;
}

export namespace PlaySoundboardEntityReq {
  export type AsObject = {
    sessionSid: number,
    soundboardEntityId: string,
  }
}

export class PlaySoundboardEntityRes extends jspb.Message {
  getSoundInstanceId(): string;
  setSoundInstanceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlaySoundboardEntityRes.AsObject;
  static toObject(includeInstance: boolean, msg: PlaySoundboardEntityRes): PlaySoundboardEntityRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlaySoundboardEntityRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlaySoundboardEntityRes;
  static deserializeBinaryFromReader(message: PlaySoundboardEntityRes, reader: jspb.BinaryReader): PlaySoundboardEntityRes;
}

export namespace PlaySoundboardEntityRes {
  export type AsObject = {
    soundInstanceId: string,
  }
}

export class StopSoundboardEntityReq extends jspb.Message {
  getSessionSid(): number;
  setSessionSid(value: number): void;

  getSoundInstanceId(): string;
  setSoundInstanceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopSoundboardEntityReq.AsObject;
  static toObject(includeInstance: boolean, msg: StopSoundboardEntityReq): StopSoundboardEntityReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopSoundboardEntityReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopSoundboardEntityReq;
  static deserializeBinaryFromReader(message: StopSoundboardEntityReq, reader: jspb.BinaryReader): StopSoundboardEntityReq;
}

export namespace StopSoundboardEntityReq {
  export type AsObject = {
    sessionSid: number,
    soundInstanceId: string,
  }
}

export class StopSoundboardEntityRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopSoundboardEntityRes.AsObject;
  static toObject(includeInstance: boolean, msg: StopSoundboardEntityRes): StopSoundboardEntityRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopSoundboardEntityRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopSoundboardEntityRes;
  static deserializeBinaryFromReader(message: StopSoundboardEntityRes, reader: jspb.BinaryReader): StopSoundboardEntityRes;
}

export namespace StopSoundboardEntityRes {
  export type AsObject = {
  }
}

export class UpdateAgentSkillsRequest extends jspb.Message {
  getSessionSid(): number;
  setSessionSid(value: number): void;

  getSkillsMap(): jspb.Map<string, number>;
  clearSkillsMap(): void;
  getReplaceSkills(): boolean;
  setReplaceSkills(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAgentSkillsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAgentSkillsRequest): UpdateAgentSkillsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAgentSkillsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAgentSkillsRequest;
  static deserializeBinaryFromReader(message: UpdateAgentSkillsRequest, reader: jspb.BinaryReader): UpdateAgentSkillsRequest;
}

export namespace UpdateAgentSkillsRequest {
  export type AsObject = {
    sessionSid: number,
    skillsMap: Array<[string, number]>,
    replaceSkills: boolean,
  }
}

export class UpdateAgentSkillsReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAgentSkillsReply.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAgentSkillsReply): UpdateAgentSkillsReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAgentSkillsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAgentSkillsReply;
  static deserializeBinaryFromReader(message: UpdateAgentSkillsReply, reader: jspb.BinaryReader): UpdateAgentSkillsReply;
}

export namespace UpdateAgentSkillsReply {
  export type AsObject = {
  }
}

export class PlayDTMFRequest extends jspb.Message {
  getSessionSid(): number;
  setSessionSid(value: number): void;

  clearDtmfDigitsList(): void;
  getDtmfDigitsList(): Array<api_commons_acd_pb.DTMFDigitMap[keyof api_commons_acd_pb.DTMFDigitMap]>;
  setDtmfDigitsList(value: Array<api_commons_acd_pb.DTMFDigitMap[keyof api_commons_acd_pb.DTMFDigitMap]>): void;
  addDtmfDigits(value: api_commons_acd_pb.DTMFDigitMap[keyof api_commons_acd_pb.DTMFDigitMap], index?: number): api_commons_acd_pb.DTMFDigitMap[keyof api_commons_acd_pb.DTMFDigitMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayDTMFRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PlayDTMFRequest): PlayDTMFRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayDTMFRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayDTMFRequest;
  static deserializeBinaryFromReader(message: PlayDTMFRequest, reader: jspb.BinaryReader): PlayDTMFRequest;
}

export namespace PlayDTMFRequest {
  export type AsObject = {
    sessionSid: number,
    dtmfDigitsList: Array<api_commons_acd_pb.DTMFDigitMap[keyof api_commons_acd_pb.DTMFDigitMap]>,
  }
}

export class PlayDTMFReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayDTMFReply.AsObject;
  static toObject(includeInstance: boolean, msg: PlayDTMFReply): PlayDTMFReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayDTMFReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayDTMFReply;
  static deserializeBinaryFromReader(message: PlayDTMFReply, reader: jspb.BinaryReader): PlayDTMFReply;
}

export namespace PlayDTMFReply {
  export type AsObject = {
  }
}

export class AgentMuteRequest extends jspb.Message {
  getSessionSid(): number;
  setSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentMuteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AgentMuteRequest): AgentMuteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentMuteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentMuteRequest;
  static deserializeBinaryFromReader(message: AgentMuteRequest, reader: jspb.BinaryReader): AgentMuteRequest;
}

export namespace AgentMuteRequest {
  export type AsObject = {
    sessionSid: number,
  }
}

export class AgentMuteReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentMuteReply.AsObject;
  static toObject(includeInstance: boolean, msg: AgentMuteReply): AgentMuteReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentMuteReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentMuteReply;
  static deserializeBinaryFromReader(message: AgentMuteReply, reader: jspb.BinaryReader): AgentMuteReply;
}

export namespace AgentMuteReply {
  export type AsObject = {
  }
}

export class AgentUnmuteRequest extends jspb.Message {
  getSessionSid(): number;
  setSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentUnmuteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AgentUnmuteRequest): AgentUnmuteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentUnmuteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentUnmuteRequest;
  static deserializeBinaryFromReader(message: AgentUnmuteRequest, reader: jspb.BinaryReader): AgentUnmuteRequest;
}

export namespace AgentUnmuteRequest {
  export type AsObject = {
    sessionSid: number,
  }
}

export class AgentUnmuteReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentUnmuteReply.AsObject;
  static toObject(includeInstance: boolean, msg: AgentUnmuteReply): AgentUnmuteReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentUnmuteReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentUnmuteReply;
  static deserializeBinaryFromReader(message: AgentUnmuteReply, reader: jspb.BinaryReader): AgentUnmuteReply;
}

export namespace AgentUnmuteReply {
  export type AsObject = {
  }
}

