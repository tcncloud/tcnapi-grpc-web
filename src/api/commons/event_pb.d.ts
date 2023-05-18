// package: api.commons
// file: api/commons/event.proto

import * as jspb from "google-protobuf";
import * as api_commons_asm_pb from "../../api/commons/asm_pb";
import * as api_commons_omnichannel_pb from "../../api/commons/omnichannel_pb";

export class Event extends jspb.Message {
  getState(): api_commons_asm_pb.StatusStateMap[keyof api_commons_asm_pb.StatusStateMap];
  setState(value: api_commons_asm_pb.StatusStateMap[keyof api_commons_asm_pb.StatusStateMap]): void;

  getEventTime(): number;
  setEventTime(value: number): void;

  hasActivatedConversationEvent(): boolean;
  clearActivatedConversationEvent(): void;
  getActivatedConversationEvent(): ActivatedConversationEvent | undefined;
  setActivatedConversationEvent(value?: ActivatedConversationEvent): void;

  hasDeactivatedConversationEvent(): boolean;
  clearDeactivatedConversationEvent(): void;
  getDeactivatedConversationEvent(): DeactivatedConversationEvent | undefined;
  setDeactivatedConversationEvent(value?: DeactivatedConversationEvent): void;

  hasSentMessageEvent(): boolean;
  clearSentMessageEvent(): void;
  getSentMessageEvent(): SentMessageEvent | undefined;
  setSentMessageEvent(value?: SentMessageEvent): void;

  hasSendStatusEvent(): boolean;
  clearSendStatusEvent(): void;
  getSendStatusEvent(): SendStatusEvent | undefined;
  setSendStatusEvent(value?: SendStatusEvent): void;

  hasPauseEvent(): boolean;
  clearPauseEvent(): void;
  getPauseEvent(): PauseEvent | undefined;
  setPauseEvent(value?: PauseEvent): void;

  hasResumeEvent(): boolean;
  clearResumeEvent(): void;
  getResumeEvent(): ResumeEvent | undefined;
  setResumeEvent(value?: ResumeEvent): void;

  getEventCase(): Event.EventCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Event.AsObject;
  static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Event;
  static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
  export type AsObject = {
    state: api_commons_asm_pb.StatusStateMap[keyof api_commons_asm_pb.StatusStateMap],
    eventTime: number,
    activatedConversationEvent?: ActivatedConversationEvent.AsObject,
    deactivatedConversationEvent?: DeactivatedConversationEvent.AsObject,
    sentMessageEvent?: SentMessageEvent.AsObject,
    sendStatusEvent?: SendStatusEvent.AsObject,
    pauseEvent?: PauseEvent.AsObject,
    resumeEvent?: ResumeEvent.AsObject,
  }

  export enum EventCase {
    EVENT_NOT_SET = 0,
    ACTIVATED_CONVERSATION_EVENT = 5,
    DEACTIVATED_CONVERSATION_EVENT = 6,
    SENT_MESSAGE_EVENT = 7,
    SEND_STATUS_EVENT = 8,
    PAUSE_EVENT = 9,
    RESUME_EVENT = 10,
  }
}

export class ActivatedConversationEvent extends jspb.Message {
  hasConversation(): boolean;
  clearConversation(): void;
  getConversation(): api_commons_omnichannel_pb.OmniConversation | undefined;
  setConversation(value?: api_commons_omnichannel_pb.OmniConversation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivatedConversationEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ActivatedConversationEvent): ActivatedConversationEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActivatedConversationEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivatedConversationEvent;
  static deserializeBinaryFromReader(message: ActivatedConversationEvent, reader: jspb.BinaryReader): ActivatedConversationEvent;
}

export namespace ActivatedConversationEvent {
  export type AsObject = {
    conversation?: api_commons_omnichannel_pb.OmniConversation.AsObject,
  }
}

export class DeactivatedConversationEvent extends jspb.Message {
  hasConversation(): boolean;
  clearConversation(): void;
  getConversation(): api_commons_omnichannel_pb.OmniConversation | undefined;
  setConversation(value?: api_commons_omnichannel_pb.OmniConversation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeactivatedConversationEvent.AsObject;
  static toObject(includeInstance: boolean, msg: DeactivatedConversationEvent): DeactivatedConversationEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeactivatedConversationEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeactivatedConversationEvent;
  static deserializeBinaryFromReader(message: DeactivatedConversationEvent, reader: jspb.BinaryReader): DeactivatedConversationEvent;
}

export namespace DeactivatedConversationEvent {
  export type AsObject = {
    conversation?: api_commons_omnichannel_pb.OmniConversation.AsObject,
  }
}

export class SentMessageEvent extends jspb.Message {
  getResponseTimeSeconds(): number;
  setResponseTimeSeconds(value: number): void;

  getIsInitialAgentMessage(): boolean;
  setIsInitialAgentMessage(value: boolean): void;

  hasConversation(): boolean;
  clearConversation(): void;
  getConversation(): api_commons_omnichannel_pb.OmniConversation | undefined;
  setConversation(value?: api_commons_omnichannel_pb.OmniConversation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SentMessageEvent.AsObject;
  static toObject(includeInstance: boolean, msg: SentMessageEvent): SentMessageEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SentMessageEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SentMessageEvent;
  static deserializeBinaryFromReader(message: SentMessageEvent, reader: jspb.BinaryReader): SentMessageEvent;
}

export namespace SentMessageEvent {
  export type AsObject = {
    responseTimeSeconds: number,
    isInitialAgentMessage: boolean,
    conversation?: api_commons_omnichannel_pb.OmniConversation.AsObject,
  }
}

export class SendStatusEvent extends jspb.Message {
  getStatus(): api_commons_asm_pb.StatusStateMap[keyof api_commons_asm_pb.StatusStateMap];
  setStatus(value: api_commons_asm_pb.StatusStateMap[keyof api_commons_asm_pb.StatusStateMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendStatusEvent.AsObject;
  static toObject(includeInstance: boolean, msg: SendStatusEvent): SendStatusEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendStatusEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendStatusEvent;
  static deserializeBinaryFromReader(message: SendStatusEvent, reader: jspb.BinaryReader): SendStatusEvent;
}

export namespace SendStatusEvent {
  export type AsObject = {
    status: api_commons_asm_pb.StatusStateMap[keyof api_commons_asm_pb.StatusStateMap],
  }
}

export class AsmEvent extends jspb.Message {
  getState(): api_commons_asm_pb.StatusStateMap[keyof api_commons_asm_pb.StatusStateMap];
  setState(value: api_commons_asm_pb.StatusStateMap[keyof api_commons_asm_pb.StatusStateMap]): void;

  getEventTime(): number;
  setEventTime(value: number): void;

  hasActivatedConversationAsmEvent(): boolean;
  clearActivatedConversationAsmEvent(): void;
  getActivatedConversationAsmEvent(): ActivatedConversationAsmEvent | undefined;
  setActivatedConversationAsmEvent(value?: ActivatedConversationAsmEvent): void;

  hasDeactivatedConversationAsmEvent(): boolean;
  clearDeactivatedConversationAsmEvent(): void;
  getDeactivatedConversationAsmEvent(): DeactivatedConversationAsmEvent | undefined;
  setDeactivatedConversationAsmEvent(value?: DeactivatedConversationAsmEvent): void;

  hasSentMessageAsmEvent(): boolean;
  clearSentMessageAsmEvent(): void;
  getSentMessageAsmEvent(): SentMessageAsmEvent | undefined;
  setSentMessageAsmEvent(value?: SentMessageAsmEvent): void;

  hasSendStatusAsmEvent(): boolean;
  clearSendStatusAsmEvent(): void;
  getSendStatusAsmEvent(): SendStatusAsmEvent | undefined;
  setSendStatusAsmEvent(value?: SendStatusAsmEvent): void;

  hasPauseEvent(): boolean;
  clearPauseEvent(): void;
  getPauseEvent(): PauseEvent | undefined;
  setPauseEvent(value?: PauseEvent): void;

  hasResumeEvent(): boolean;
  clearResumeEvent(): void;
  getResumeEvent(): ResumeEvent | undefined;
  setResumeEvent(value?: ResumeEvent): void;

  hasConversationPulledEvent(): boolean;
  clearConversationPulledEvent(): void;
  getConversationPulledEvent(): ConversationPulledEvent | undefined;
  setConversationPulledEvent(value?: ConversationPulledEvent): void;

  getEventCase(): AsmEvent.EventCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AsmEvent.AsObject;
  static toObject(includeInstance: boolean, msg: AsmEvent): AsmEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AsmEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AsmEvent;
  static deserializeBinaryFromReader(message: AsmEvent, reader: jspb.BinaryReader): AsmEvent;
}

export namespace AsmEvent {
  export type AsObject = {
    state: api_commons_asm_pb.StatusStateMap[keyof api_commons_asm_pb.StatusStateMap],
    eventTime: number,
    activatedConversationAsmEvent?: ActivatedConversationAsmEvent.AsObject,
    deactivatedConversationAsmEvent?: DeactivatedConversationAsmEvent.AsObject,
    sentMessageAsmEvent?: SentMessageAsmEvent.AsObject,
    sendStatusAsmEvent?: SendStatusAsmEvent.AsObject,
    pauseEvent?: PauseEvent.AsObject,
    resumeEvent?: ResumeEvent.AsObject,
    conversationPulledEvent?: ConversationPulledEvent.AsObject,
  }

  export enum EventCase {
    EVENT_NOT_SET = 0,
    ACTIVATED_CONVERSATION_ASM_EVENT = 5,
    DEACTIVATED_CONVERSATION_ASM_EVENT = 6,
    SENT_MESSAGE_ASM_EVENT = 7,
    SEND_STATUS_ASM_EVENT = 8,
    PAUSE_EVENT = 9,
    RESUME_EVENT = 10,
    CONVERSATION_PULLED_EVENT = 11,
  }
}

export class ActivatedConversationAsmEvent extends jspb.Message {
  hasConversation(): boolean;
  clearConversation(): void;
  getConversation(): api_commons_omnichannel_pb.OmniConversation | undefined;
  setConversation(value?: api_commons_omnichannel_pb.OmniConversation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivatedConversationAsmEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ActivatedConversationAsmEvent): ActivatedConversationAsmEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActivatedConversationAsmEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivatedConversationAsmEvent;
  static deserializeBinaryFromReader(message: ActivatedConversationAsmEvent, reader: jspb.BinaryReader): ActivatedConversationAsmEvent;
}

export namespace ActivatedConversationAsmEvent {
  export type AsObject = {
    conversation?: api_commons_omnichannel_pb.OmniConversation.AsObject,
  }
}

export class DeactivatedConversationAsmEvent extends jspb.Message {
  hasConversation(): boolean;
  clearConversation(): void;
  getConversation(): api_commons_omnichannel_pb.OmniConversation | undefined;
  setConversation(value?: api_commons_omnichannel_pb.OmniConversation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeactivatedConversationAsmEvent.AsObject;
  static toObject(includeInstance: boolean, msg: DeactivatedConversationAsmEvent): DeactivatedConversationAsmEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeactivatedConversationAsmEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeactivatedConversationAsmEvent;
  static deserializeBinaryFromReader(message: DeactivatedConversationAsmEvent, reader: jspb.BinaryReader): DeactivatedConversationAsmEvent;
}

export namespace DeactivatedConversationAsmEvent {
  export type AsObject = {
    conversation?: api_commons_omnichannel_pb.OmniConversation.AsObject,
  }
}

export class SentMessageAsmEvent extends jspb.Message {
  getResponseTimeSeconds(): number;
  setResponseTimeSeconds(value: number): void;

  getIsInitialAgentMessage(): boolean;
  setIsInitialAgentMessage(value: boolean): void;

  hasConversation(): boolean;
  clearConversation(): void;
  getConversation(): api_commons_omnichannel_pb.OmniConversation | undefined;
  setConversation(value?: api_commons_omnichannel_pb.OmniConversation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SentMessageAsmEvent.AsObject;
  static toObject(includeInstance: boolean, msg: SentMessageAsmEvent): SentMessageAsmEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SentMessageAsmEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SentMessageAsmEvent;
  static deserializeBinaryFromReader(message: SentMessageAsmEvent, reader: jspb.BinaryReader): SentMessageAsmEvent;
}

export namespace SentMessageAsmEvent {
  export type AsObject = {
    responseTimeSeconds: number,
    isInitialAgentMessage: boolean,
    conversation?: api_commons_omnichannel_pb.OmniConversation.AsObject,
  }
}

export class SendStatusAsmEvent extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendStatusAsmEvent.AsObject;
  static toObject(includeInstance: boolean, msg: SendStatusAsmEvent): SendStatusAsmEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendStatusAsmEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendStatusAsmEvent;
  static deserializeBinaryFromReader(message: SendStatusAsmEvent, reader: jspb.BinaryReader): SendStatusAsmEvent;
}

export namespace SendStatusAsmEvent {
  export type AsObject = {
  }
}

export class PauseEvent extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseEvent.AsObject;
  static toObject(includeInstance: boolean, msg: PauseEvent): PauseEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PauseEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseEvent;
  static deserializeBinaryFromReader(message: PauseEvent, reader: jspb.BinaryReader): PauseEvent;
}

export namespace PauseEvent {
  export type AsObject = {
  }
}

export class ResumeEvent extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeEvent): ResumeEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResumeEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeEvent;
  static deserializeBinaryFromReader(message: ResumeEvent, reader: jspb.BinaryReader): ResumeEvent;
}

export namespace ResumeEvent {
  export type AsObject = {
  }
}

export class ConversationPulledEvent extends jspb.Message {
  hasConversation(): boolean;
  clearConversation(): void;
  getConversation(): api_commons_omnichannel_pb.OmniConversation | undefined;
  setConversation(value?: api_commons_omnichannel_pb.OmniConversation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationPulledEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationPulledEvent): ConversationPulledEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversationPulledEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationPulledEvent;
  static deserializeBinaryFromReader(message: ConversationPulledEvent, reader: jspb.BinaryReader): ConversationPulledEvent;
}

export namespace ConversationPulledEvent {
  export type AsObject = {
    conversation?: api_commons_omnichannel_pb.OmniConversation.AsObject,
  }
}

