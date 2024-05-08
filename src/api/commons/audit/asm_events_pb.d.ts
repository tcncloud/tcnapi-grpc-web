// package: api.commons.audit
// file: api/commons/audit/asm_events.proto

import * as jspb from "google-protobuf";
import * as api_commons_asm_pb from "../../../api/commons/asm_pb";
import * as api_commons_omnichannel_pb from "../../../api/commons/omnichannel_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class AsmAgentLoginEvent extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getAsmSessionSid(): number;
  setAsmSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AsmAgentLoginEvent.AsObject;
  static toObject(includeInstance: boolean, msg: AsmAgentLoginEvent): AsmAgentLoginEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AsmAgentLoginEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AsmAgentLoginEvent;
  static deserializeBinaryFromReader(message: AsmAgentLoginEvent, reader: jspb.BinaryReader): AsmAgentLoginEvent;
}

export namespace AsmAgentLoginEvent {
  export type AsObject = {
    userId: string,
    asmSessionSid: number,
  }
}

export class AsmOpenVoiceEvent extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getAsmSessionSid(): number;
  setAsmSessionSid(value: number): void;

  getVoiceSessionSid(): number;
  setVoiceSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AsmOpenVoiceEvent.AsObject;
  static toObject(includeInstance: boolean, msg: AsmOpenVoiceEvent): AsmOpenVoiceEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AsmOpenVoiceEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AsmOpenVoiceEvent;
  static deserializeBinaryFromReader(message: AsmOpenVoiceEvent, reader: jspb.BinaryReader): AsmOpenVoiceEvent;
}

export namespace AsmOpenVoiceEvent {
  export type AsObject = {
    userId: string,
    asmSessionSid: number,
    voiceSessionSid: number,
  }
}

export class AsmOpenOmniAgentEvent extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getAsmSessionSid(): number;
  setAsmSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AsmOpenOmniAgentEvent.AsObject;
  static toObject(includeInstance: boolean, msg: AsmOpenOmniAgentEvent): AsmOpenOmniAgentEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AsmOpenOmniAgentEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AsmOpenOmniAgentEvent;
  static deserializeBinaryFromReader(message: AsmOpenOmniAgentEvent, reader: jspb.BinaryReader): AsmOpenOmniAgentEvent;
}

export namespace AsmOpenOmniAgentEvent {
  export type AsObject = {
    userId: string,
    asmSessionSid: number,
  }
}

export class AsmActivateConversationEvent extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getAsmSessionSid(): number;
  setAsmSessionSid(value: number): void;

  hasConversation(): boolean;
  clearConversation(): void;
  getConversation(): api_commons_omnichannel_pb.OmniConversation | undefined;
  setConversation(value?: api_commons_omnichannel_pb.OmniConversation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AsmActivateConversationEvent.AsObject;
  static toObject(includeInstance: boolean, msg: AsmActivateConversationEvent): AsmActivateConversationEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AsmActivateConversationEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AsmActivateConversationEvent;
  static deserializeBinaryFromReader(message: AsmActivateConversationEvent, reader: jspb.BinaryReader): AsmActivateConversationEvent;
}

export namespace AsmActivateConversationEvent {
  export type AsObject = {
    userId: string,
    asmSessionSid: number,
    conversation?: api_commons_omnichannel_pb.OmniConversation.AsObject,
  }
}

export class AsmDeactivateConversationEvent extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getAsmSessionSid(): number;
  setAsmSessionSid(value: number): void;

  hasConversation(): boolean;
  clearConversation(): void;
  getConversation(): api_commons_omnichannel_pb.OmniConversation | undefined;
  setConversation(value?: api_commons_omnichannel_pb.OmniConversation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AsmDeactivateConversationEvent.AsObject;
  static toObject(includeInstance: boolean, msg: AsmDeactivateConversationEvent): AsmDeactivateConversationEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AsmDeactivateConversationEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AsmDeactivateConversationEvent;
  static deserializeBinaryFromReader(message: AsmDeactivateConversationEvent, reader: jspb.BinaryReader): AsmDeactivateConversationEvent;
}

export namespace AsmDeactivateConversationEvent {
  export type AsObject = {
    userId: string,
    asmSessionSid: number,
    conversation?: api_commons_omnichannel_pb.OmniConversation.AsObject,
  }
}

export class AsmAgentStateChangedEvent extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getAsmSessionSid(): number;
  setAsmSessionSid(value: number): void;

  getNewStatus(): api_commons_asm_pb.StatusStateMap[keyof api_commons_asm_pb.StatusStateMap];
  setNewStatus(value: api_commons_asm_pb.StatusStateMap[keyof api_commons_asm_pb.StatusStateMap]): void;

  getOldStatus(): api_commons_asm_pb.StatusStateMap[keyof api_commons_asm_pb.StatusStateMap];
  setOldStatus(value: api_commons_asm_pb.StatusStateMap[keyof api_commons_asm_pb.StatusStateMap]): void;

  getOldStatusDurationMilliseconds(): number;
  setOldStatusDurationMilliseconds(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AsmAgentStateChangedEvent.AsObject;
  static toObject(includeInstance: boolean, msg: AsmAgentStateChangedEvent): AsmAgentStateChangedEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AsmAgentStateChangedEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AsmAgentStateChangedEvent;
  static deserializeBinaryFromReader(message: AsmAgentStateChangedEvent, reader: jspb.BinaryReader): AsmAgentStateChangedEvent;
}

export namespace AsmAgentStateChangedEvent {
  export type AsObject = {
    userId: string,
    asmSessionSid: number,
    newStatus: api_commons_asm_pb.StatusStateMap[keyof api_commons_asm_pb.StatusStateMap],
    oldStatus: api_commons_asm_pb.StatusStateMap[keyof api_commons_asm_pb.StatusStateMap],
    oldStatusDurationMilliseconds: number,
  }
}

export class AsmAgentLogoutEvent extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getAsmSessionSid(): number;
  setAsmSessionSid(value: number): void;

  getReason(): string;
  setReason(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AsmAgentLogoutEvent.AsObject;
  static toObject(includeInstance: boolean, msg: AsmAgentLogoutEvent): AsmAgentLogoutEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AsmAgentLogoutEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AsmAgentLogoutEvent;
  static deserializeBinaryFromReader(message: AsmAgentLogoutEvent, reader: jspb.BinaryReader): AsmAgentLogoutEvent;
}

export namespace AsmAgentLogoutEvent {
  export type AsObject = {
    userId: string,
    asmSessionSid: number,
    reason: string,
  }
}

export class AsmPauseEvent extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getAsmSessionSid(): number;
  setAsmSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AsmPauseEvent.AsObject;
  static toObject(includeInstance: boolean, msg: AsmPauseEvent): AsmPauseEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AsmPauseEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AsmPauseEvent;
  static deserializeBinaryFromReader(message: AsmPauseEvent, reader: jspb.BinaryReader): AsmPauseEvent;
}

export namespace AsmPauseEvent {
  export type AsObject = {
    userId: string,
    asmSessionSid: number,
  }
}

export class AsmResumeEvent extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getAsmSessionSid(): number;
  setAsmSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AsmResumeEvent.AsObject;
  static toObject(includeInstance: boolean, msg: AsmResumeEvent): AsmResumeEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AsmResumeEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AsmResumeEvent;
  static deserializeBinaryFromReader(message: AsmResumeEvent, reader: jspb.BinaryReader): AsmResumeEvent;
}

export namespace AsmResumeEvent {
  export type AsObject = {
    userId: string,
    asmSessionSid: number,
  }
}

export class AsmConversationPulledEvent extends jspb.Message {
  hasConversation(): boolean;
  clearConversation(): void;
  getConversation(): api_commons_omnichannel_pb.OmniConversation | undefined;
  setConversation(value?: api_commons_omnichannel_pb.OmniConversation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AsmConversationPulledEvent.AsObject;
  static toObject(includeInstance: boolean, msg: AsmConversationPulledEvent): AsmConversationPulledEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AsmConversationPulledEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AsmConversationPulledEvent;
  static deserializeBinaryFromReader(message: AsmConversationPulledEvent, reader: jspb.BinaryReader): AsmConversationPulledEvent;
}

export namespace AsmConversationPulledEvent {
  export type AsObject = {
    conversation?: api_commons_omnichannel_pb.OmniConversation.AsObject,
  }
}

