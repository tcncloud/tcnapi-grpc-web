// package: api.commons.audit
// file: api/commons/audit/omnichannel_events.proto

import * as jspb from "google-protobuf";
import * as api_commons_omnichannel_pb from "../../../api/commons/omnichannel_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class OmnichannelCreateProjectEvent extends jspb.Message {
  getClientSid(): number;
  setClientSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasComplianceConfig(): boolean;
  clearComplianceConfig(): void;
  getComplianceConfig(): api_commons_omnichannel_pb.OmniProjectComplianceConfig | undefined;
  setComplianceConfig(value?: api_commons_omnichannel_pb.OmniProjectComplianceConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelCreateProjectEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelCreateProjectEvent): OmnichannelCreateProjectEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelCreateProjectEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelCreateProjectEvent;
  static deserializeBinaryFromReader(message: OmnichannelCreateProjectEvent, reader: jspb.BinaryReader): OmnichannelCreateProjectEvent;
}

export namespace OmnichannelCreateProjectEvent {
  export type AsObject = {
    clientSid: number,
    name: string,
    description: string,
    complianceConfig?: api_commons_omnichannel_pb.OmniProjectComplianceConfig.AsObject,
  }
}

export class OmnichannelCreateCampaignEvent extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getChannelType(): api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap];
  setChannelType(value: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]): void;

  getCampaignDirection(): api_commons_omnichannel_pb.CampaignDirectionMap[keyof api_commons_omnichannel_pb.CampaignDirectionMap];
  setCampaignDirection(value: api_commons_omnichannel_pb.CampaignDirectionMap[keyof api_commons_omnichannel_pb.CampaignDirectionMap]): void;

  getCampaignSid(): string;
  setCampaignSid(value: string): void;

  hasOmniCampaign(): boolean;
  clearOmniCampaign(): void;
  getOmniCampaign(): api_commons_omnichannel_pb.OmniCampaign | undefined;
  setOmniCampaign(value?: api_commons_omnichannel_pb.OmniCampaign): void;

  getProjectSid(): string;
  setProjectSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelCreateCampaignEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelCreateCampaignEvent): OmnichannelCreateCampaignEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelCreateCampaignEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelCreateCampaignEvent;
  static deserializeBinaryFromReader(message: OmnichannelCreateCampaignEvent, reader: jspb.BinaryReader): OmnichannelCreateCampaignEvent;
}

export namespace OmnichannelCreateCampaignEvent {
  export type AsObject = {
    name: string,
    description: string,
    channelType: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap],
    campaignDirection: api_commons_omnichannel_pb.CampaignDirectionMap[keyof api_commons_omnichannel_pb.CampaignDirectionMap],
    campaignSid: string,
    omniCampaign?: api_commons_omnichannel_pb.OmniCampaign.AsObject,
    projectSid: string,
  }
}

export class OmnichannelT10Event extends jspb.Message {
  getConversationSid(): string;
  setConversationSid(value: string): void;

  getCampaignSid(): string;
  setCampaignSid(value: string): void;

  getChannelType(): api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap];
  setChannelType(value: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]): void;

  hasConversation(): boolean;
  clearConversation(): void;
  getConversation(): api_commons_omnichannel_pb.OmniConversation | undefined;
  setConversation(value?: api_commons_omnichannel_pb.OmniConversation): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): api_commons_omnichannel_pb.OmniMessage | undefined;
  setMessage(value?: api_commons_omnichannel_pb.OmniMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelT10Event.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelT10Event): OmnichannelT10Event.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelT10Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelT10Event;
  static deserializeBinaryFromReader(message: OmnichannelT10Event, reader: jspb.BinaryReader): OmnichannelT10Event;
}

export namespace OmnichannelT10Event {
  export type AsObject = {
    conversationSid: string,
    campaignSid: string,
    channelType: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap],
    conversation?: api_commons_omnichannel_pb.OmniConversation.AsObject,
    message?: api_commons_omnichannel_pb.OmniMessage.AsObject,
  }
}

export class OmnichannelDailyProjectReportEvent extends jspb.Message {
  getDownloadUrl(): string;
  setDownloadUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelDailyProjectReportEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelDailyProjectReportEvent): OmnichannelDailyProjectReportEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelDailyProjectReportEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelDailyProjectReportEvent;
  static deserializeBinaryFromReader(message: OmnichannelDailyProjectReportEvent, reader: jspb.BinaryReader): OmnichannelDailyProjectReportEvent;
}

export namespace OmnichannelDailyProjectReportEvent {
  export type AsObject = {
    downloadUrl: string,
  }
}

export class OmnichannelDailyConversationReportEvent extends jspb.Message {
  getDownloadUrl(): string;
  setDownloadUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelDailyConversationReportEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelDailyConversationReportEvent): OmnichannelDailyConversationReportEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelDailyConversationReportEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelDailyConversationReportEvent;
  static deserializeBinaryFromReader(message: OmnichannelDailyConversationReportEvent, reader: jspb.BinaryReader): OmnichannelDailyConversationReportEvent;
}

export namespace OmnichannelDailyConversationReportEvent {
  export type AsObject = {
    downloadUrl: string,
  }
}

export class OmnichannelAgentAssignConversationEvent extends jspb.Message {
  getConversationSid(): string;
  setConversationSid(value: string): void;

  getCampaignSid(): string;
  setCampaignSid(value: string): void;

  getChannelType(): api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap];
  setChannelType(value: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]): void;

  getUserId(): string;
  setUserId(value: string): void;

  hasConversation(): boolean;
  clearConversation(): void;
  getConversation(): api_commons_omnichannel_pb.OmniConversation | undefined;
  setConversation(value?: api_commons_omnichannel_pb.OmniConversation): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): api_commons_omnichannel_pb.OmniMessage | undefined;
  setMessage(value?: api_commons_omnichannel_pb.OmniMessage): void;

  hasAsmSessionSid(): boolean;
  clearAsmSessionSid(): void;
  getAsmSessionSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAsmSessionSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelAgentAssignConversationEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelAgentAssignConversationEvent): OmnichannelAgentAssignConversationEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelAgentAssignConversationEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelAgentAssignConversationEvent;
  static deserializeBinaryFromReader(message: OmnichannelAgentAssignConversationEvent, reader: jspb.BinaryReader): OmnichannelAgentAssignConversationEvent;
}

export namespace OmnichannelAgentAssignConversationEvent {
  export type AsObject = {
    conversationSid: string,
    campaignSid: string,
    channelType: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap],
    userId: string,
    conversation?: api_commons_omnichannel_pb.OmniConversation.AsObject,
    message?: api_commons_omnichannel_pb.OmniMessage.AsObject,
    asmSessionSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class OmnichannelAgentUnassignConversationEvent extends jspb.Message {
  getConversationSid(): string;
  setConversationSid(value: string): void;

  getCampaignSid(): string;
  setCampaignSid(value: string): void;

  getChannelType(): api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap];
  setChannelType(value: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]): void;

  getUserId(): string;
  setUserId(value: string): void;

  hasConversation(): boolean;
  clearConversation(): void;
  getConversation(): api_commons_omnichannel_pb.OmniConversation | undefined;
  setConversation(value?: api_commons_omnichannel_pb.OmniConversation): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): api_commons_omnichannel_pb.OmniMessage | undefined;
  setMessage(value?: api_commons_omnichannel_pb.OmniMessage): void;

  hasAsmSessionSid(): boolean;
  clearAsmSessionSid(): void;
  getAsmSessionSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAsmSessionSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelAgentUnassignConversationEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelAgentUnassignConversationEvent): OmnichannelAgentUnassignConversationEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelAgentUnassignConversationEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelAgentUnassignConversationEvent;
  static deserializeBinaryFromReader(message: OmnichannelAgentUnassignConversationEvent, reader: jspb.BinaryReader): OmnichannelAgentUnassignConversationEvent;
}

export namespace OmnichannelAgentUnassignConversationEvent {
  export type AsObject = {
    conversationSid: string,
    campaignSid: string,
    channelType: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap],
    userId: string,
    conversation?: api_commons_omnichannel_pb.OmniConversation.AsObject,
    message?: api_commons_omnichannel_pb.OmniMessage.AsObject,
    asmSessionSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class OmnichannelAgentReassignConversationEvent extends jspb.Message {
  getConversationSid(): string;
  setConversationSid(value: string): void;

  getCampaignSid(): string;
  setCampaignSid(value: string): void;

  getChannelType(): api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap];
  setChannelType(value: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]): void;

  getUserId(): string;
  setUserId(value: string): void;

  getCurrentUserId(): string;
  setCurrentUserId(value: string): void;

  getNewUserId(): string;
  setNewUserId(value: string): void;

  hasConversation(): boolean;
  clearConversation(): void;
  getConversation(): api_commons_omnichannel_pb.OmniConversation | undefined;
  setConversation(value?: api_commons_omnichannel_pb.OmniConversation): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): api_commons_omnichannel_pb.OmniMessage | undefined;
  setMessage(value?: api_commons_omnichannel_pb.OmniMessage): void;

  hasNewUserAsmSessionSid(): boolean;
  clearNewUserAsmSessionSid(): void;
  getNewUserAsmSessionSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setNewUserAsmSessionSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelAgentReassignConversationEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelAgentReassignConversationEvent): OmnichannelAgentReassignConversationEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelAgentReassignConversationEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelAgentReassignConversationEvent;
  static deserializeBinaryFromReader(message: OmnichannelAgentReassignConversationEvent, reader: jspb.BinaryReader): OmnichannelAgentReassignConversationEvent;
}

export namespace OmnichannelAgentReassignConversationEvent {
  export type AsObject = {
    conversationSid: string,
    campaignSid: string,
    channelType: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap],
    userId: string,
    currentUserId: string,
    newUserId: string,
    conversation?: api_commons_omnichannel_pb.OmniConversation.AsObject,
    message?: api_commons_omnichannel_pb.OmniMessage.AsObject,
    newUserAsmSessionSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class OmnichannelCustomerTextMessageEvent extends jspb.Message {
  getConversationSid(): string;
  setConversationSid(value: string): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): api_commons_omnichannel_pb.OmniMessage | undefined;
  setMessage(value?: api_commons_omnichannel_pb.OmniMessage): void;

  hasConversation(): boolean;
  clearConversation(): void;
  getConversation(): api_commons_omnichannel_pb.OmniConversation | undefined;
  setConversation(value?: api_commons_omnichannel_pb.OmniConversation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelCustomerTextMessageEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelCustomerTextMessageEvent): OmnichannelCustomerTextMessageEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelCustomerTextMessageEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelCustomerTextMessageEvent;
  static deserializeBinaryFromReader(message: OmnichannelCustomerTextMessageEvent, reader: jspb.BinaryReader): OmnichannelCustomerTextMessageEvent;
}

export namespace OmnichannelCustomerTextMessageEvent {
  export type AsObject = {
    conversationSid: string,
    message?: api_commons_omnichannel_pb.OmniMessage.AsObject,
    conversation?: api_commons_omnichannel_pb.OmniConversation.AsObject,
  }
}

export class OmnichannelAgentTextMessageEvent extends jspb.Message {
  getConversationSid(): string;
  setConversationSid(value: string): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): api_commons_omnichannel_pb.OmniMessage | undefined;
  setMessage(value?: api_commons_omnichannel_pb.OmniMessage): void;

  hasConversation(): boolean;
  clearConversation(): void;
  getConversation(): api_commons_omnichannel_pb.OmniConversation | undefined;
  setConversation(value?: api_commons_omnichannel_pb.OmniConversation): void;

  hasAsmSessionSid(): boolean;
  clearAsmSessionSid(): void;
  getAsmSessionSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAsmSessionSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelAgentTextMessageEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelAgentTextMessageEvent): OmnichannelAgentTextMessageEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelAgentTextMessageEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelAgentTextMessageEvent;
  static deserializeBinaryFromReader(message: OmnichannelAgentTextMessageEvent, reader: jspb.BinaryReader): OmnichannelAgentTextMessageEvent;
}

export namespace OmnichannelAgentTextMessageEvent {
  export type AsObject = {
    conversationSid: string,
    message?: api_commons_omnichannel_pb.OmniMessage.AsObject,
    conversation?: api_commons_omnichannel_pb.OmniConversation.AsObject,
    asmSessionSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    userId: string,
  }
}

export class OmnichannelManagerTextMessageEvent extends jspb.Message {
  getConversationSid(): string;
  setConversationSid(value: string): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): api_commons_omnichannel_pb.OmniMessage | undefined;
  setMessage(value?: api_commons_omnichannel_pb.OmniMessage): void;

  hasConversation(): boolean;
  clearConversation(): void;
  getConversation(): api_commons_omnichannel_pb.OmniConversation | undefined;
  setConversation(value?: api_commons_omnichannel_pb.OmniConversation): void;

  hasAsmSessionSid(): boolean;
  clearAsmSessionSid(): void;
  getAsmSessionSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAsmSessionSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelManagerTextMessageEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelManagerTextMessageEvent): OmnichannelManagerTextMessageEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelManagerTextMessageEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelManagerTextMessageEvent;
  static deserializeBinaryFromReader(message: OmnichannelManagerTextMessageEvent, reader: jspb.BinaryReader): OmnichannelManagerTextMessageEvent;
}

export namespace OmnichannelManagerTextMessageEvent {
  export type AsObject = {
    conversationSid: string,
    message?: api_commons_omnichannel_pb.OmniMessage.AsObject,
    conversation?: api_commons_omnichannel_pb.OmniConversation.AsObject,
    asmSessionSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    userId: string,
  }
}

export class OmnichannelFinishWrapUpEvent extends jspb.Message {
  getConversationSid(): string;
  setConversationSid(value: string): void;

  getCampaignSid(): string;
  setCampaignSid(value: string): void;

  getChannelType(): api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap];
  setChannelType(value: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]): void;

  hasConversation(): boolean;
  clearConversation(): void;
  getConversation(): api_commons_omnichannel_pb.OmniConversation | undefined;
  setConversation(value?: api_commons_omnichannel_pb.OmniConversation): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): api_commons_omnichannel_pb.OmniMessage | undefined;
  setMessage(value?: api_commons_omnichannel_pb.OmniMessage): void;

  hasAsmSessionSid(): boolean;
  clearAsmSessionSid(): void;
  getAsmSessionSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAsmSessionSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelFinishWrapUpEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelFinishWrapUpEvent): OmnichannelFinishWrapUpEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelFinishWrapUpEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelFinishWrapUpEvent;
  static deserializeBinaryFromReader(message: OmnichannelFinishWrapUpEvent, reader: jspb.BinaryReader): OmnichannelFinishWrapUpEvent;
}

export namespace OmnichannelFinishWrapUpEvent {
  export type AsObject = {
    conversationSid: string,
    campaignSid: string,
    channelType: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap],
    conversation?: api_commons_omnichannel_pb.OmniConversation.AsObject,
    message?: api_commons_omnichannel_pb.OmniMessage.AsObject,
    asmSessionSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class OmnichannelBeginWrapUpEvent extends jspb.Message {
  getConversationSid(): string;
  setConversationSid(value: string): void;

  getCampaignSid(): string;
  setCampaignSid(value: string): void;

  getChannelType(): api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap];
  setChannelType(value: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]): void;

  hasConversation(): boolean;
  clearConversation(): void;
  getConversation(): api_commons_omnichannel_pb.OmniConversation | undefined;
  setConversation(value?: api_commons_omnichannel_pb.OmniConversation): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): api_commons_omnichannel_pb.OmniMessage | undefined;
  setMessage(value?: api_commons_omnichannel_pb.OmniMessage): void;

  hasAsmSessionSid(): boolean;
  clearAsmSessionSid(): void;
  getAsmSessionSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAsmSessionSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelBeginWrapUpEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelBeginWrapUpEvent): OmnichannelBeginWrapUpEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelBeginWrapUpEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelBeginWrapUpEvent;
  static deserializeBinaryFromReader(message: OmnichannelBeginWrapUpEvent, reader: jspb.BinaryReader): OmnichannelBeginWrapUpEvent;
}

export namespace OmnichannelBeginWrapUpEvent {
  export type AsObject = {
    conversationSid: string,
    campaignSid: string,
    channelType: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap],
    conversation?: api_commons_omnichannel_pb.OmniConversation.AsObject,
    message?: api_commons_omnichannel_pb.OmniMessage.AsObject,
    asmSessionSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    userId: string,
  }
}

export class OmnichannelT11Event extends jspb.Message {
  getConversationSid(): string;
  setConversationSid(value: string): void;

  getCampaignSid(): string;
  setCampaignSid(value: string): void;

  getChannelType(): api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap];
  setChannelType(value: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]): void;

  hasConversation(): boolean;
  clearConversation(): void;
  getConversation(): api_commons_omnichannel_pb.OmniConversation | undefined;
  setConversation(value?: api_commons_omnichannel_pb.OmniConversation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelT11Event.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelT11Event): OmnichannelT11Event.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelT11Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelT11Event;
  static deserializeBinaryFromReader(message: OmnichannelT11Event, reader: jspb.BinaryReader): OmnichannelT11Event;
}

export namespace OmnichannelT11Event {
  export type AsObject = {
    conversationSid: string,
    campaignSid: string,
    channelType: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap],
    conversation?: api_commons_omnichannel_pb.OmniConversation.AsObject,
  }
}

export class OmnichannelCreateConversationEvent extends jspb.Message {
  getCampaignSid(): string;
  setCampaignSid(value: string): void;

  getChannelType(): api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap];
  setChannelType(value: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]): void;

  hasConversation(): boolean;
  clearConversation(): void;
  getConversation(): api_commons_omnichannel_pb.OmniConversation | undefined;
  setConversation(value?: api_commons_omnichannel_pb.OmniConversation): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): api_commons_omnichannel_pb.OmniMessage | undefined;
  setMessage(value?: api_commons_omnichannel_pb.OmniMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelCreateConversationEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelCreateConversationEvent): OmnichannelCreateConversationEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelCreateConversationEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelCreateConversationEvent;
  static deserializeBinaryFromReader(message: OmnichannelCreateConversationEvent, reader: jspb.BinaryReader): OmnichannelCreateConversationEvent;
}

export namespace OmnichannelCreateConversationEvent {
  export type AsObject = {
    campaignSid: string,
    channelType: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap],
    conversation?: api_commons_omnichannel_pb.OmniConversation.AsObject,
    message?: api_commons_omnichannel_pb.OmniMessage.AsObject,
  }
}

export class OmnichannelAgentSuspendEvent extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): api_commons_omnichannel_pb.OmniMessage | undefined;
  setMessage(value?: api_commons_omnichannel_pb.OmniMessage): void;

  hasConversation(): boolean;
  clearConversation(): void;
  getConversation(): api_commons_omnichannel_pb.OmniConversation | undefined;
  setConversation(value?: api_commons_omnichannel_pb.OmniConversation): void;

  hasAsmSessionSid(): boolean;
  clearAsmSessionSid(): void;
  getAsmSessionSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAsmSessionSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelAgentSuspendEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelAgentSuspendEvent): OmnichannelAgentSuspendEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelAgentSuspendEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelAgentSuspendEvent;
  static deserializeBinaryFromReader(message: OmnichannelAgentSuspendEvent, reader: jspb.BinaryReader): OmnichannelAgentSuspendEvent;
}

export namespace OmnichannelAgentSuspendEvent {
  export type AsObject = {
    message?: api_commons_omnichannel_pb.OmniMessage.AsObject,
    conversation?: api_commons_omnichannel_pb.OmniConversation.AsObject,
    asmSessionSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class OmnichannelCloseConversationEvent extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): api_commons_omnichannel_pb.OmniMessage | undefined;
  setMessage(value?: api_commons_omnichannel_pb.OmniMessage): void;

  hasConversation(): boolean;
  clearConversation(): void;
  getConversation(): api_commons_omnichannel_pb.OmniConversation | undefined;
  setConversation(value?: api_commons_omnichannel_pb.OmniConversation): void;

  hasAsmSessionSid(): boolean;
  clearAsmSessionSid(): void;
  getAsmSessionSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAsmSessionSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelCloseConversationEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelCloseConversationEvent): OmnichannelCloseConversationEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelCloseConversationEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelCloseConversationEvent;
  static deserializeBinaryFromReader(message: OmnichannelCloseConversationEvent, reader: jspb.BinaryReader): OmnichannelCloseConversationEvent;
}

export namespace OmnichannelCloseConversationEvent {
  export type AsObject = {
    message?: api_commons_omnichannel_pb.OmniMessage.AsObject,
    conversation?: api_commons_omnichannel_pb.OmniConversation.AsObject,
    asmSessionSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    userId: string,
  }
}

export class OmnichannelTranscriptSavedEvent extends jspb.Message {
  getConversationSid(): number;
  setConversationSid(value: number): void;

  getTranscriptPath(): string;
  setTranscriptPath(value: string): void;

  hasConversation(): boolean;
  clearConversation(): void;
  getConversation(): api_commons_omnichannel_pb.OmniConversation | undefined;
  setConversation(value?: api_commons_omnichannel_pb.OmniConversation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelTranscriptSavedEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelTranscriptSavedEvent): OmnichannelTranscriptSavedEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelTranscriptSavedEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelTranscriptSavedEvent;
  static deserializeBinaryFromReader(message: OmnichannelTranscriptSavedEvent, reader: jspb.BinaryReader): OmnichannelTranscriptSavedEvent;
}

export namespace OmnichannelTranscriptSavedEvent {
  export type AsObject = {
    conversationSid: number,
    transcriptPath: string,
    conversation?: api_commons_omnichannel_pb.OmniConversation.AsObject,
  }
}

export class OmnichannelUpdateCampaignEvent extends jspb.Message {
  getCampaignSid(): string;
  setCampaignSid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getChannelType(): api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap];
  setChannelType(value: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]): void;

  hasOmniCampaign(): boolean;
  clearOmniCampaign(): void;
  getOmniCampaign(): api_commons_omnichannel_pb.OmniCampaign | undefined;
  setOmniCampaign(value?: api_commons_omnichannel_pb.OmniCampaign): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelUpdateCampaignEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelUpdateCampaignEvent): OmnichannelUpdateCampaignEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelUpdateCampaignEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelUpdateCampaignEvent;
  static deserializeBinaryFromReader(message: OmnichannelUpdateCampaignEvent, reader: jspb.BinaryReader): OmnichannelUpdateCampaignEvent;
}

export namespace OmnichannelUpdateCampaignEvent {
  export type AsObject = {
    campaignSid: string,
    name: string,
    description: string,
    channelType: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap],
    omniCampaign?: api_commons_omnichannel_pb.OmniCampaign.AsObject,
  }
}

export class OmnichannelSetConversationCollectedDataEvent extends jspb.Message {
  getConversationSid(): string;
  setConversationSid(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  getChannelType(): api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap];
  setChannelType(value: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]): void;

  getCampaignDirection(): api_commons_omnichannel_pb.CampaignDirectionMap[keyof api_commons_omnichannel_pb.CampaignDirectionMap];
  setCampaignDirection(value: api_commons_omnichannel_pb.CampaignDirectionMap[keyof api_commons_omnichannel_pb.CampaignDirectionMap]): void;

  hasCollectedData(): boolean;
  clearCollectedData(): void;
  getCollectedData(): api_commons_omnichannel_pb.ConversationCollectedData | undefined;
  setCollectedData(value?: api_commons_omnichannel_pb.ConversationCollectedData): void;

  hasAsmSessionSid(): boolean;
  clearAsmSessionSid(): void;
  getAsmSessionSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAsmSessionSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelSetConversationCollectedDataEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelSetConversationCollectedDataEvent): OmnichannelSetConversationCollectedDataEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelSetConversationCollectedDataEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelSetConversationCollectedDataEvent;
  static deserializeBinaryFromReader(message: OmnichannelSetConversationCollectedDataEvent, reader: jspb.BinaryReader): OmnichannelSetConversationCollectedDataEvent;
}

export namespace OmnichannelSetConversationCollectedDataEvent {
  export type AsObject = {
    conversationSid: string,
    userId: string,
    channelType: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap],
    campaignDirection: api_commons_omnichannel_pb.CampaignDirectionMap[keyof api_commons_omnichannel_pb.CampaignDirectionMap],
    collectedData?: api_commons_omnichannel_pb.ConversationCollectedData.AsObject,
    asmSessionSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class OmnichannelCompleteCampaignEvent extends jspb.Message {
  getCampaignSid(): string;
  setCampaignSid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getChannelType(): api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap];
  setChannelType(value: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]): void;

  hasOmniCampaign(): boolean;
  clearOmniCampaign(): void;
  getOmniCampaign(): api_commons_omnichannel_pb.OmniCampaign | undefined;
  setOmniCampaign(value?: api_commons_omnichannel_pb.OmniCampaign): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelCompleteCampaignEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelCompleteCampaignEvent): OmnichannelCompleteCampaignEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelCompleteCampaignEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelCompleteCampaignEvent;
  static deserializeBinaryFromReader(message: OmnichannelCompleteCampaignEvent, reader: jspb.BinaryReader): OmnichannelCompleteCampaignEvent;
}

export namespace OmnichannelCompleteCampaignEvent {
  export type AsObject = {
    campaignSid: string,
    name: string,
    description: string,
    channelType: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap],
    omniCampaign?: api_commons_omnichannel_pb.OmniCampaign.AsObject,
  }
}

export class OmnichannelArchiveCampaignEvent extends jspb.Message {
  getCampaignSid(): string;
  setCampaignSid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getChannelType(): api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap];
  setChannelType(value: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]): void;

  hasOmniCampaign(): boolean;
  clearOmniCampaign(): void;
  getOmniCampaign(): api_commons_omnichannel_pb.OmniCampaign | undefined;
  setOmniCampaign(value?: api_commons_omnichannel_pb.OmniCampaign): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelArchiveCampaignEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelArchiveCampaignEvent): OmnichannelArchiveCampaignEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelArchiveCampaignEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelArchiveCampaignEvent;
  static deserializeBinaryFromReader(message: OmnichannelArchiveCampaignEvent, reader: jspb.BinaryReader): OmnichannelArchiveCampaignEvent;
}

export namespace OmnichannelArchiveCampaignEvent {
  export type AsObject = {
    campaignSid: string,
    name: string,
    description: string,
    channelType: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap],
    omniCampaign?: api_commons_omnichannel_pb.OmniCampaign.AsObject,
  }
}

export class OmnichannelStartCampaignEvent extends jspb.Message {
  getCampaignSid(): string;
  setCampaignSid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getChannelType(): api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap];
  setChannelType(value: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]): void;

  hasOmniCampaign(): boolean;
  clearOmniCampaign(): void;
  getOmniCampaign(): api_commons_omnichannel_pb.OmniCampaign | undefined;
  setOmniCampaign(value?: api_commons_omnichannel_pb.OmniCampaign): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelStartCampaignEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelStartCampaignEvent): OmnichannelStartCampaignEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelStartCampaignEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelStartCampaignEvent;
  static deserializeBinaryFromReader(message: OmnichannelStartCampaignEvent, reader: jspb.BinaryReader): OmnichannelStartCampaignEvent;
}

export namespace OmnichannelStartCampaignEvent {
  export type AsObject = {
    campaignSid: string,
    name: string,
    description: string,
    channelType: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap],
    omniCampaign?: api_commons_omnichannel_pb.OmniCampaign.AsObject,
  }
}

export class OmnichannelPauseCampaignEvent extends jspb.Message {
  getCampaignSid(): string;
  setCampaignSid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getChannelType(): api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap];
  setChannelType(value: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]): void;

  hasOmniCampaign(): boolean;
  clearOmniCampaign(): void;
  getOmniCampaign(): api_commons_omnichannel_pb.OmniCampaign | undefined;
  setOmniCampaign(value?: api_commons_omnichannel_pb.OmniCampaign): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelPauseCampaignEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelPauseCampaignEvent): OmnichannelPauseCampaignEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelPauseCampaignEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelPauseCampaignEvent;
  static deserializeBinaryFromReader(message: OmnichannelPauseCampaignEvent, reader: jspb.BinaryReader): OmnichannelPauseCampaignEvent;
}

export namespace OmnichannelPauseCampaignEvent {
  export type AsObject = {
    campaignSid: string,
    name: string,
    description: string,
    channelType: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap],
    omniCampaign?: api_commons_omnichannel_pb.OmniCampaign.AsObject,
  }
}

export class OmnichannelResumeCampaignEvent extends jspb.Message {
  getCampaignSid(): string;
  setCampaignSid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getChannelType(): api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap];
  setChannelType(value: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]): void;

  hasOmniCampaign(): boolean;
  clearOmniCampaign(): void;
  getOmniCampaign(): api_commons_omnichannel_pb.OmniCampaign | undefined;
  setOmniCampaign(value?: api_commons_omnichannel_pb.OmniCampaign): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelResumeCampaignEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelResumeCampaignEvent): OmnichannelResumeCampaignEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelResumeCampaignEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelResumeCampaignEvent;
  static deserializeBinaryFromReader(message: OmnichannelResumeCampaignEvent, reader: jspb.BinaryReader): OmnichannelResumeCampaignEvent;
}

export namespace OmnichannelResumeCampaignEvent {
  export type AsObject = {
    campaignSid: string,
    name: string,
    description: string,
    channelType: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap],
    omniCampaign?: api_commons_omnichannel_pb.OmniCampaign.AsObject,
  }
}

export class OmnichannelScheduleModuleEvent extends jspb.Message {
  getModuleSid(): string;
  setModuleSid(value: string): void;

  hasOmniCampaign(): boolean;
  clearOmniCampaign(): void;
  getOmniCampaign(): api_commons_omnichannel_pb.OmniCampaign | undefined;
  setOmniCampaign(value?: api_commons_omnichannel_pb.OmniCampaign): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelScheduleModuleEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelScheduleModuleEvent): OmnichannelScheduleModuleEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelScheduleModuleEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelScheduleModuleEvent;
  static deserializeBinaryFromReader(message: OmnichannelScheduleModuleEvent, reader: jspb.BinaryReader): OmnichannelScheduleModuleEvent;
}

export namespace OmnichannelScheduleModuleEvent {
  export type AsObject = {
    moduleSid: string,
    omniCampaign?: api_commons_omnichannel_pb.OmniCampaign.AsObject,
  }
}

export class OmnichannelStartModuleEvent extends jspb.Message {
  getModuleSid(): string;
  setModuleSid(value: string): void;

  hasOmniCampaign(): boolean;
  clearOmniCampaign(): void;
  getOmniCampaign(): api_commons_omnichannel_pb.OmniCampaign | undefined;
  setOmniCampaign(value?: api_commons_omnichannel_pb.OmniCampaign): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelStartModuleEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelStartModuleEvent): OmnichannelStartModuleEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelStartModuleEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelStartModuleEvent;
  static deserializeBinaryFromReader(message: OmnichannelStartModuleEvent, reader: jspb.BinaryReader): OmnichannelStartModuleEvent;
}

export namespace OmnichannelStartModuleEvent {
  export type AsObject = {
    moduleSid: string,
    omniCampaign?: api_commons_omnichannel_pb.OmniCampaign.AsObject,
  }
}

export class OmnichannelPauseModuleEvent extends jspb.Message {
  getModuleSid(): string;
  setModuleSid(value: string): void;

  hasOmniCampaign(): boolean;
  clearOmniCampaign(): void;
  getOmniCampaign(): api_commons_omnichannel_pb.OmniCampaign | undefined;
  setOmniCampaign(value?: api_commons_omnichannel_pb.OmniCampaign): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelPauseModuleEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelPauseModuleEvent): OmnichannelPauseModuleEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelPauseModuleEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelPauseModuleEvent;
  static deserializeBinaryFromReader(message: OmnichannelPauseModuleEvent, reader: jspb.BinaryReader): OmnichannelPauseModuleEvent;
}

export namespace OmnichannelPauseModuleEvent {
  export type AsObject = {
    moduleSid: string,
    omniCampaign?: api_commons_omnichannel_pb.OmniCampaign.AsObject,
  }
}

export class OmnichannelResumeModuleEvent extends jspb.Message {
  getModuleSid(): string;
  setModuleSid(value: string): void;

  hasOmniCampaign(): boolean;
  clearOmniCampaign(): void;
  getOmniCampaign(): api_commons_omnichannel_pb.OmniCampaign | undefined;
  setOmniCampaign(value?: api_commons_omnichannel_pb.OmniCampaign): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelResumeModuleEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelResumeModuleEvent): OmnichannelResumeModuleEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelResumeModuleEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelResumeModuleEvent;
  static deserializeBinaryFromReader(message: OmnichannelResumeModuleEvent, reader: jspb.BinaryReader): OmnichannelResumeModuleEvent;
}

export namespace OmnichannelResumeModuleEvent {
  export type AsObject = {
    moduleSid: string,
    omniCampaign?: api_commons_omnichannel_pb.OmniCampaign.AsObject,
  }
}

export class OmnichannelErrorModuleEvent extends jspb.Message {
  getModuleSid(): string;
  setModuleSid(value: string): void;

  hasOmniCampaign(): boolean;
  clearOmniCampaign(): void;
  getOmniCampaign(): api_commons_omnichannel_pb.OmniCampaign | undefined;
  setOmniCampaign(value?: api_commons_omnichannel_pb.OmniCampaign): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelErrorModuleEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelErrorModuleEvent): OmnichannelErrorModuleEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelErrorModuleEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelErrorModuleEvent;
  static deserializeBinaryFromReader(message: OmnichannelErrorModuleEvent, reader: jspb.BinaryReader): OmnichannelErrorModuleEvent;
}

export namespace OmnichannelErrorModuleEvent {
  export type AsObject = {
    moduleSid: string,
    omniCampaign?: api_commons_omnichannel_pb.OmniCampaign.AsObject,
  }
}

export class OmnichannelSuccessModuleEvent extends jspb.Message {
  getModuleSid(): string;
  setModuleSid(value: string): void;

  hasOmniCampaign(): boolean;
  clearOmniCampaign(): void;
  getOmniCampaign(): api_commons_omnichannel_pb.OmniCampaign | undefined;
  setOmniCampaign(value?: api_commons_omnichannel_pb.OmniCampaign): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelSuccessModuleEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelSuccessModuleEvent): OmnichannelSuccessModuleEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelSuccessModuleEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelSuccessModuleEvent;
  static deserializeBinaryFromReader(message: OmnichannelSuccessModuleEvent, reader: jspb.BinaryReader): OmnichannelSuccessModuleEvent;
}

export namespace OmnichannelSuccessModuleEvent {
  export type AsObject = {
    moduleSid: string,
    omniCampaign?: api_commons_omnichannel_pb.OmniCampaign.AsObject,
  }
}

export class OmnichannelFailModuleEvent extends jspb.Message {
  getModuleSid(): string;
  setModuleSid(value: string): void;

  hasOmniCampaign(): boolean;
  clearOmniCampaign(): void;
  getOmniCampaign(): api_commons_omnichannel_pb.OmniCampaign | undefined;
  setOmniCampaign(value?: api_commons_omnichannel_pb.OmniCampaign): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelFailModuleEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelFailModuleEvent): OmnichannelFailModuleEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelFailModuleEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelFailModuleEvent;
  static deserializeBinaryFromReader(message: OmnichannelFailModuleEvent, reader: jspb.BinaryReader): OmnichannelFailModuleEvent;
}

export namespace OmnichannelFailModuleEvent {
  export type AsObject = {
    moduleSid: string,
    omniCampaign?: api_commons_omnichannel_pb.OmniCampaign.AsObject,
  }
}

export class OmnichannelCompleteModuleEvent extends jspb.Message {
  getModuleSid(): string;
  setModuleSid(value: string): void;

  hasOmniCampaign(): boolean;
  clearOmniCampaign(): void;
  getOmniCampaign(): api_commons_omnichannel_pb.OmniCampaign | undefined;
  setOmniCampaign(value?: api_commons_omnichannel_pb.OmniCampaign): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelCompleteModuleEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelCompleteModuleEvent): OmnichannelCompleteModuleEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelCompleteModuleEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelCompleteModuleEvent;
  static deserializeBinaryFromReader(message: OmnichannelCompleteModuleEvent, reader: jspb.BinaryReader): OmnichannelCompleteModuleEvent;
}

export namespace OmnichannelCompleteModuleEvent {
  export type AsObject = {
    moduleSid: string,
    omniCampaign?: api_commons_omnichannel_pb.OmniCampaign.AsObject,
  }
}

export class OmnichannelArchiveModuleEvent extends jspb.Message {
  getModuleSid(): string;
  setModuleSid(value: string): void;

  hasOmniCampaign(): boolean;
  clearOmniCampaign(): void;
  getOmniCampaign(): api_commons_omnichannel_pb.OmniCampaign | undefined;
  setOmniCampaign(value?: api_commons_omnichannel_pb.OmniCampaign): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelArchiveModuleEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelArchiveModuleEvent): OmnichannelArchiveModuleEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelArchiveModuleEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelArchiveModuleEvent;
  static deserializeBinaryFromReader(message: OmnichannelArchiveModuleEvent, reader: jspb.BinaryReader): OmnichannelArchiveModuleEvent;
}

export namespace OmnichannelArchiveModuleEvent {
  export type AsObject = {
    moduleSid: string,
    omniCampaign?: api_commons_omnichannel_pb.OmniCampaign.AsObject,
  }
}

export class OmnichannelUpdateModuleEvent extends jspb.Message {
  getModuleSid(): string;
  setModuleSid(value: string): void;

  hasOmniCampaign(): boolean;
  clearOmniCampaign(): void;
  getOmniCampaign(): api_commons_omnichannel_pb.OmniCampaign | undefined;
  setOmniCampaign(value?: api_commons_omnichannel_pb.OmniCampaign): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelUpdateModuleEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelUpdateModuleEvent): OmnichannelUpdateModuleEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelUpdateModuleEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelUpdateModuleEvent;
  static deserializeBinaryFromReader(message: OmnichannelUpdateModuleEvent, reader: jspb.BinaryReader): OmnichannelUpdateModuleEvent;
}

export namespace OmnichannelUpdateModuleEvent {
  export type AsObject = {
    moduleSid: string,
    omniCampaign?: api_commons_omnichannel_pb.OmniCampaign.AsObject,
  }
}

export class OmnichannelSmsMessageSentModuleEvent extends jspb.Message {
  getModuleSid(): string;
  setModuleSid(value: string): void;

  getMessageUnits(): number;
  setMessageUnits(value: number): void;

  hasOmniCampaign(): boolean;
  clearOmniCampaign(): void;
  getOmniCampaign(): api_commons_omnichannel_pb.OmniCampaign | undefined;
  setOmniCampaign(value?: api_commons_omnichannel_pb.OmniCampaign): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): api_commons_omnichannel_pb.OmniMessage | undefined;
  setMessage(value?: api_commons_omnichannel_pb.OmniMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelSmsMessageSentModuleEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelSmsMessageSentModuleEvent): OmnichannelSmsMessageSentModuleEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelSmsMessageSentModuleEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelSmsMessageSentModuleEvent;
  static deserializeBinaryFromReader(message: OmnichannelSmsMessageSentModuleEvent, reader: jspb.BinaryReader): OmnichannelSmsMessageSentModuleEvent;
}

export namespace OmnichannelSmsMessageSentModuleEvent {
  export type AsObject = {
    moduleSid: string,
    messageUnits: number,
    omniCampaign?: api_commons_omnichannel_pb.OmniCampaign.AsObject,
    message?: api_commons_omnichannel_pb.OmniMessage.AsObject,
  }
}

export class OmnichannelModuleInitialReplyEvent extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getCampaignSid(): number;
  setCampaignSid(value: number): void;

  getCampaignModuleSid(): number;
  setCampaignModuleSid(value: number): void;

  getConversationSid(): number;
  setConversationSid(value: number): void;

  getChannelType(): api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap];
  setChannelType(value: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): api_commons_omnichannel_pb.OmniMessage | undefined;
  setMessage(value?: api_commons_omnichannel_pb.OmniMessage): void;

  hasCampaign(): boolean;
  clearCampaign(): void;
  getCampaign(): api_commons_omnichannel_pb.OmniCampaign | undefined;
  setCampaign(value?: api_commons_omnichannel_pb.OmniCampaign): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelModuleInitialReplyEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelModuleInitialReplyEvent): OmnichannelModuleInitialReplyEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelModuleInitialReplyEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelModuleInitialReplyEvent;
  static deserializeBinaryFromReader(message: OmnichannelModuleInitialReplyEvent, reader: jspb.BinaryReader): OmnichannelModuleInitialReplyEvent;
}

export namespace OmnichannelModuleInitialReplyEvent {
  export type AsObject = {
    orgId: string,
    campaignSid: number,
    campaignModuleSid: number,
    conversationSid: number,
    channelType: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap],
    message?: api_commons_omnichannel_pb.OmniMessage.AsObject,
    campaign?: api_commons_omnichannel_pb.OmniCampaign.AsObject,
  }
}

export class OmnichannelTaskMessageSentEvent extends jspb.Message {
  getTaskSid(): number;
  setTaskSid(value: number): void;

  getCampaignSid(): number;
  setCampaignSid(value: number): void;

  getModuleSid(): number;
  setModuleSid(value: number): void;

  getMessageUnits(): number;
  setMessageUnits(value: number): void;

  hasCampaign(): boolean;
  clearCampaign(): void;
  getCampaign(): api_commons_omnichannel_pb.OmniCampaign | undefined;
  setCampaign(value?: api_commons_omnichannel_pb.OmniCampaign): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): api_commons_omnichannel_pb.OmniMessage | undefined;
  setMessage(value?: api_commons_omnichannel_pb.OmniMessage): void;

  hasTask(): boolean;
  clearTask(): void;
  getTask(): api_commons_omnichannel_pb.OmniTask | undefined;
  setTask(value?: api_commons_omnichannel_pb.OmniTask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelTaskMessageSentEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelTaskMessageSentEvent): OmnichannelTaskMessageSentEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelTaskMessageSentEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelTaskMessageSentEvent;
  static deserializeBinaryFromReader(message: OmnichannelTaskMessageSentEvent, reader: jspb.BinaryReader): OmnichannelTaskMessageSentEvent;
}

export namespace OmnichannelTaskMessageSentEvent {
  export type AsObject = {
    taskSid: number,
    campaignSid: number,
    moduleSid: number,
    messageUnits: number,
    campaign?: api_commons_omnichannel_pb.OmniCampaign.AsObject,
    message?: api_commons_omnichannel_pb.OmniMessage.AsObject,
    task?: api_commons_omnichannel_pb.OmniTask.AsObject,
  }
}

export class OmnichannelConnectedInboxPollEvent extends jspb.Message {
  hasOmniCampaign(): boolean;
  clearOmniCampaign(): void;
  getOmniCampaign(): api_commons_omnichannel_pb.OmniCampaign | undefined;
  setOmniCampaign(value?: api_commons_omnichannel_pb.OmniCampaign): void;

  getCampaignModuleSid(): number;
  setCampaignModuleSid(value: number): void;

  hasConnectedInbox(): boolean;
  clearConnectedInbox(): void;
  getConnectedInbox(): api_commons_omnichannel_pb.ConnectedInbox | undefined;
  setConnectedInbox(value?: api_commons_omnichannel_pb.ConnectedInbox): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelConnectedInboxPollEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelConnectedInboxPollEvent): OmnichannelConnectedInboxPollEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelConnectedInboxPollEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelConnectedInboxPollEvent;
  static deserializeBinaryFromReader(message: OmnichannelConnectedInboxPollEvent, reader: jspb.BinaryReader): OmnichannelConnectedInboxPollEvent;
}

export namespace OmnichannelConnectedInboxPollEvent {
  export type AsObject = {
    omniCampaign?: api_commons_omnichannel_pb.OmniCampaign.AsObject,
    campaignModuleSid: number,
    connectedInbox?: api_commons_omnichannel_pb.ConnectedInbox.AsObject,
  }
}

export class OmnichannelConnectedInboxCreatedEvent extends jspb.Message {
  hasConnectedInbox(): boolean;
  clearConnectedInbox(): void;
  getConnectedInbox(): api_commons_omnichannel_pb.ConnectedInbox | undefined;
  setConnectedInbox(value?: api_commons_omnichannel_pb.ConnectedInbox): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelConnectedInboxCreatedEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelConnectedInboxCreatedEvent): OmnichannelConnectedInboxCreatedEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelConnectedInboxCreatedEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelConnectedInboxCreatedEvent;
  static deserializeBinaryFromReader(message: OmnichannelConnectedInboxCreatedEvent, reader: jspb.BinaryReader): OmnichannelConnectedInboxCreatedEvent;
}

export namespace OmnichannelConnectedInboxCreatedEvent {
  export type AsObject = {
    connectedInbox?: api_commons_omnichannel_pb.ConnectedInbox.AsObject,
  }
}

export class OmnichannelAgentMessageUnitsEvent extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): api_commons_omnichannel_pb.OmniMessage | undefined;
  setMessage(value?: api_commons_omnichannel_pb.OmniMessage): void;

  getMessageUnits(): number;
  setMessageUnits(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelAgentMessageUnitsEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelAgentMessageUnitsEvent): OmnichannelAgentMessageUnitsEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelAgentMessageUnitsEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelAgentMessageUnitsEvent;
  static deserializeBinaryFromReader(message: OmnichannelAgentMessageUnitsEvent, reader: jspb.BinaryReader): OmnichannelAgentMessageUnitsEvent;
}

export namespace OmnichannelAgentMessageUnitsEvent {
  export type AsObject = {
    message?: api_commons_omnichannel_pb.OmniMessage.AsObject,
    messageUnits: number,
  }
}

export class OmnichannelManagerMessageUnitsEvent extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): api_commons_omnichannel_pb.OmniMessage | undefined;
  setMessage(value?: api_commons_omnichannel_pb.OmniMessage): void;

  getMessageUnits(): number;
  setMessageUnits(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelManagerMessageUnitsEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelManagerMessageUnitsEvent): OmnichannelManagerMessageUnitsEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelManagerMessageUnitsEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelManagerMessageUnitsEvent;
  static deserializeBinaryFromReader(message: OmnichannelManagerMessageUnitsEvent, reader: jspb.BinaryReader): OmnichannelManagerMessageUnitsEvent;
}

export namespace OmnichannelManagerMessageUnitsEvent {
  export type AsObject = {
    message?: api_commons_omnichannel_pb.OmniMessage.AsObject,
    messageUnits: number,
  }
}

export class OmnichannelCustomerMessageUnitsEvent extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): api_commons_omnichannel_pb.OmniMessage | undefined;
  setMessage(value?: api_commons_omnichannel_pb.OmniMessage): void;

  getMessageUnits(): number;
  setMessageUnits(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelCustomerMessageUnitsEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelCustomerMessageUnitsEvent): OmnichannelCustomerMessageUnitsEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelCustomerMessageUnitsEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelCustomerMessageUnitsEvent;
  static deserializeBinaryFromReader(message: OmnichannelCustomerMessageUnitsEvent, reader: jspb.BinaryReader): OmnichannelCustomerMessageUnitsEvent;
}

export namespace OmnichannelCustomerMessageUnitsEvent {
  export type AsObject = {
    message?: api_commons_omnichannel_pb.OmniMessage.AsObject,
    messageUnits: number,
  }
}

export class OmnichannelSystemMessageUnitsEvent extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): api_commons_omnichannel_pb.OmniMessage | undefined;
  setMessage(value?: api_commons_omnichannel_pb.OmniMessage): void;

  getMessageUnits(): number;
  setMessageUnits(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelSystemMessageUnitsEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelSystemMessageUnitsEvent): OmnichannelSystemMessageUnitsEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelSystemMessageUnitsEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelSystemMessageUnitsEvent;
  static deserializeBinaryFromReader(message: OmnichannelSystemMessageUnitsEvent, reader: jspb.BinaryReader): OmnichannelSystemMessageUnitsEvent;
}

export namespace OmnichannelSystemMessageUnitsEvent {
  export type AsObject = {
    message?: api_commons_omnichannel_pb.OmniMessage.AsObject,
    messageUnits: number,
  }
}

export class OmnichannelPaymentLinkSentEvent extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): api_commons_omnichannel_pb.OmniMessage | undefined;
  setMessage(value?: api_commons_omnichannel_pb.OmniMessage): void;

  getLink(): string;
  setLink(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelPaymentLinkSentEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelPaymentLinkSentEvent): OmnichannelPaymentLinkSentEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelPaymentLinkSentEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelPaymentLinkSentEvent;
  static deserializeBinaryFromReader(message: OmnichannelPaymentLinkSentEvent, reader: jspb.BinaryReader): OmnichannelPaymentLinkSentEvent;
}

export namespace OmnichannelPaymentLinkSentEvent {
  export type AsObject = {
    message?: api_commons_omnichannel_pb.OmniMessage.AsObject,
    link: string,
  }
}

export class OmnichannelManualApproveTaskAcceptedEvent extends jspb.Message {
  hasTask(): boolean;
  clearTask(): void;
  getTask(): api_commons_omnichannel_pb.OmniTask | undefined;
  setTask(value?: api_commons_omnichannel_pb.OmniTask): void;

  getUserId(): string;
  setUserId(value: string): void;

  getAsmSessionSid(): number;
  setAsmSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelManualApproveTaskAcceptedEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelManualApproveTaskAcceptedEvent): OmnichannelManualApproveTaskAcceptedEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelManualApproveTaskAcceptedEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelManualApproveTaskAcceptedEvent;
  static deserializeBinaryFromReader(message: OmnichannelManualApproveTaskAcceptedEvent, reader: jspb.BinaryReader): OmnichannelManualApproveTaskAcceptedEvent;
}

export namespace OmnichannelManualApproveTaskAcceptedEvent {
  export type AsObject = {
    task?: api_commons_omnichannel_pb.OmniTask.AsObject,
    userId: string,
    asmSessionSid: number,
  }
}

export class OmnichannelManualApproveTaskRejectedEvent extends jspb.Message {
  hasTask(): boolean;
  clearTask(): void;
  getTask(): api_commons_omnichannel_pb.OmniTask | undefined;
  setTask(value?: api_commons_omnichannel_pb.OmniTask): void;

  getUserId(): string;
  setUserId(value: string): void;

  getAsmSessionSid(): number;
  setAsmSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelManualApproveTaskRejectedEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelManualApproveTaskRejectedEvent): OmnichannelManualApproveTaskRejectedEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelManualApproveTaskRejectedEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelManualApproveTaskRejectedEvent;
  static deserializeBinaryFromReader(message: OmnichannelManualApproveTaskRejectedEvent, reader: jspb.BinaryReader): OmnichannelManualApproveTaskRejectedEvent;
}

export namespace OmnichannelManualApproveTaskRejectedEvent {
  export type AsObject = {
    task?: api_commons_omnichannel_pb.OmniTask.AsObject,
    userId: string,
    asmSessionSid: number,
  }
}

export class OmnichannelManualApproveTaskTimeoutEvent extends jspb.Message {
  hasTask(): boolean;
  clearTask(): void;
  getTask(): api_commons_omnichannel_pb.OmniTask | undefined;
  setTask(value?: api_commons_omnichannel_pb.OmniTask): void;

  getUserId(): string;
  setUserId(value: string): void;

  getAsmSessionSid(): number;
  setAsmSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelManualApproveTaskTimeoutEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelManualApproveTaskTimeoutEvent): OmnichannelManualApproveTaskTimeoutEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelManualApproveTaskTimeoutEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelManualApproveTaskTimeoutEvent;
  static deserializeBinaryFromReader(message: OmnichannelManualApproveTaskTimeoutEvent, reader: jspb.BinaryReader): OmnichannelManualApproveTaskTimeoutEvent;
}

export namespace OmnichannelManualApproveTaskTimeoutEvent {
  export type AsObject = {
    task?: api_commons_omnichannel_pb.OmniTask.AsObject,
    userId: string,
    asmSessionSid: number,
  }
}

export class OmnichannelManualApproveTaskRequeueEvent extends jspb.Message {
  hasTask(): boolean;
  clearTask(): void;
  getTask(): api_commons_omnichannel_pb.OmniTask | undefined;
  setTask(value?: api_commons_omnichannel_pb.OmniTask): void;

  getUserId(): string;
  setUserId(value: string): void;

  getAsmSessionSid(): number;
  setAsmSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelManualApproveTaskRequeueEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelManualApproveTaskRequeueEvent): OmnichannelManualApproveTaskRequeueEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelManualApproveTaskRequeueEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelManualApproveTaskRequeueEvent;
  static deserializeBinaryFromReader(message: OmnichannelManualApproveTaskRequeueEvent, reader: jspb.BinaryReader): OmnichannelManualApproveTaskRequeueEvent;
}

export namespace OmnichannelManualApproveTaskRequeueEvent {
  export type AsObject = {
    task?: api_commons_omnichannel_pb.OmniTask.AsObject,
    userId: string,
    asmSessionSid: number,
  }
}

export class OmnichannelMessageSentEvent extends jspb.Message {
  getMessageSid(): number;
  setMessageSid(value: number): void;

  getChannelType(): api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap];
  setChannelType(value: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap]): void;

  getSentFrom(): string;
  setSentFrom(value: string): void;

  getSentTo(): string;
  setSentTo(value: string): void;

  getUnits(): number;
  setUnits(value: number): void;

  getMessageSize(): number;
  setMessageSize(value: number): void;

  getAttachmentSize(): number;
  setAttachmentSize(value: number): void;

  getSenderType(): api_commons_omnichannel_pb.OmniSenderTypeMap[keyof api_commons_omnichannel_pb.OmniSenderTypeMap];
  setSenderType(value: api_commons_omnichannel_pb.OmniSenderTypeMap[keyof api_commons_omnichannel_pb.OmniSenderTypeMap]): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmnichannelMessageSentEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OmnichannelMessageSentEvent): OmnichannelMessageSentEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmnichannelMessageSentEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmnichannelMessageSentEvent;
  static deserializeBinaryFromReader(message: OmnichannelMessageSentEvent, reader: jspb.BinaryReader): OmnichannelMessageSentEvent;
}

export namespace OmnichannelMessageSentEvent {
  export type AsObject = {
    messageSid: number,
    channelType: api_commons_omnichannel_pb.ChannelTypeMap[keyof api_commons_omnichannel_pb.ChannelTypeMap],
    sentFrom: string,
    sentTo: string,
    units: number,
    messageSize: number,
    attachmentSize: number,
    senderType: api_commons_omnichannel_pb.OmniSenderTypeMap[keyof api_commons_omnichannel_pb.OmniSenderTypeMap],
    userId: string,
  }
}

