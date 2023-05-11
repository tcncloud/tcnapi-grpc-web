// package: api.commons
// file: api/commons/chat.proto

import * as jspb from "google-protobuf";

export class ChatColorProperties extends jspb.Message {
  getPrimaryColor(): string;
  setPrimaryColor(value: string): void;

  getHeaderTextColor(): string;
  setHeaderTextColor(value: string): void;

  getParagraphTextColor(): string;
  setParagraphTextColor(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatColorProperties.AsObject;
  static toObject(includeInstance: boolean, msg: ChatColorProperties): ChatColorProperties.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChatColorProperties, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatColorProperties;
  static deserializeBinaryFromReader(message: ChatColorProperties, reader: jspb.BinaryReader): ChatColorProperties;
}

export namespace ChatColorProperties {
  export type AsObject = {
    primaryColor: string,
    headerTextColor: string,
    paragraphTextColor: string,
  }
}

export class ChatHeader extends jspb.Message {
  getHeader(): string;
  setHeader(value: string): void;

  getSubheader(): string;
  setSubheader(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatHeader.AsObject;
  static toObject(includeInstance: boolean, msg: ChatHeader): ChatHeader.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChatHeader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatHeader;
  static deserializeBinaryFromReader(message: ChatHeader, reader: jspb.BinaryReader): ChatHeader;
}

export namespace ChatHeader {
  export type AsObject = {
    header: string,
    subheader: string,
  }
}

export class HoursOfOperation extends jspb.Message {
  clearMondayList(): void;
  getMondayList(): Array<HoursOfOperationRange>;
  setMondayList(value: Array<HoursOfOperationRange>): void;
  addMonday(value?: HoursOfOperationRange, index?: number): HoursOfOperationRange;

  clearTuesdayList(): void;
  getTuesdayList(): Array<HoursOfOperationRange>;
  setTuesdayList(value: Array<HoursOfOperationRange>): void;
  addTuesday(value?: HoursOfOperationRange, index?: number): HoursOfOperationRange;

  clearWednesdayList(): void;
  getWednesdayList(): Array<HoursOfOperationRange>;
  setWednesdayList(value: Array<HoursOfOperationRange>): void;
  addWednesday(value?: HoursOfOperationRange, index?: number): HoursOfOperationRange;

  clearThursdayList(): void;
  getThursdayList(): Array<HoursOfOperationRange>;
  setThursdayList(value: Array<HoursOfOperationRange>): void;
  addThursday(value?: HoursOfOperationRange, index?: number): HoursOfOperationRange;

  clearFridayList(): void;
  getFridayList(): Array<HoursOfOperationRange>;
  setFridayList(value: Array<HoursOfOperationRange>): void;
  addFriday(value?: HoursOfOperationRange, index?: number): HoursOfOperationRange;

  clearSaturdayList(): void;
  getSaturdayList(): Array<HoursOfOperationRange>;
  setSaturdayList(value: Array<HoursOfOperationRange>): void;
  addSaturday(value?: HoursOfOperationRange, index?: number): HoursOfOperationRange;

  clearSundayList(): void;
  getSundayList(): Array<HoursOfOperationRange>;
  setSundayList(value: Array<HoursOfOperationRange>): void;
  addSunday(value?: HoursOfOperationRange, index?: number): HoursOfOperationRange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HoursOfOperation.AsObject;
  static toObject(includeInstance: boolean, msg: HoursOfOperation): HoursOfOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HoursOfOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HoursOfOperation;
  static deserializeBinaryFromReader(message: HoursOfOperation, reader: jspb.BinaryReader): HoursOfOperation;
}

export namespace HoursOfOperation {
  export type AsObject = {
    mondayList: Array<HoursOfOperationRange.AsObject>,
    tuesdayList: Array<HoursOfOperationRange.AsObject>,
    wednesdayList: Array<HoursOfOperationRange.AsObject>,
    thursdayList: Array<HoursOfOperationRange.AsObject>,
    fridayList: Array<HoursOfOperationRange.AsObject>,
    saturdayList: Array<HoursOfOperationRange.AsObject>,
    sundayList: Array<HoursOfOperationRange.AsObject>,
  }
}

export class HoursOfOperationRange extends jspb.Message {
  getStartHour(): number;
  setStartHour(value: number): void;

  getStartMinute(): number;
  setStartMinute(value: number): void;

  getEndHour(): number;
  setEndHour(value: number): void;

  getEndMinute(): number;
  setEndMinute(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HoursOfOperationRange.AsObject;
  static toObject(includeInstance: boolean, msg: HoursOfOperationRange): HoursOfOperationRange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HoursOfOperationRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HoursOfOperationRange;
  static deserializeBinaryFromReader(message: HoursOfOperationRange, reader: jspb.BinaryReader): HoursOfOperationRange;
}

export namespace HoursOfOperationRange {
  export type AsObject = {
    startHour: number,
    startMinute: number,
    endHour: number,
    endMinute: number,
  }
}

export interface ChatMessageSenderTypeMap {
  CHAT_MESSAGE_SENDER_TYPE_AGENT: 0;
  CHAT_MESSAGE_SENDER_TYPE_CUSTOMER: 1;
  CHAT_MESSAGE_SENDER_TYPE_MANAGER: 2;
}

export const ChatMessageSenderType: ChatMessageSenderTypeMap;

export interface ChatCampaignStatusMap {
  CHAT_CAMPAIGN_UNKNOWN: 0;
  CHAT_CAMPAIGN_RUNNING: 15010;
  CHAT_CAMPAIGN_STOPPED: 15050;
  CHAT_CAMPAIGN_ARCHIVED: 15060;
  CHAT_CAMPAIGN_PAUSED: 15070;
}

export const ChatCampaignStatus: ChatCampaignStatusMap;

export interface ChatCampaignEventMap {
  CHAT_CAMPAIGN_EVENT_UNKNOWN: 0;
  CHAT_CAMPAIGN_EVENT_SCHEDULED: 1;
  CHAT_CAMPAIGN_EVENT_STOPPED: 2;
  CHAT_CAMPAIGN_EVENT_ARCHIVED: 3;
  CHAT_CAMPAIGN_EVENT_PAUSED: 4;
}

export const ChatCampaignEvent: ChatCampaignEventMap;

export interface ChatMessageTypeMap {
  CHAT_REPLY_FROM_CUSTOMER: 0;
  CHAT_REPLY_FROM_AGENT: 1;
}

export const ChatMessageType: ChatMessageTypeMap;

