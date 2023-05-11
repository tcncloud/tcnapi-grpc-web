// package: api.commons
// file: api/commons/p3api.proto

import * as jspb from "google-protobuf";

export class ClientInfoDataRow extends jspb.Message {
  getFieldLabel(): string;
  setFieldLabel(value: string): void;

  getFieldValue(): string;
  setFieldValue(value: string): void;

  getIsPhone(): boolean;
  setIsPhone(value: boolean): void;

  getDialedNumber(): boolean;
  setDialedNumber(value: boolean): void;

  getContactFieldDescriptionSid(): number;
  setContactFieldDescriptionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientInfoDataRow.AsObject;
  static toObject(includeInstance: boolean, msg: ClientInfoDataRow): ClientInfoDataRow.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientInfoDataRow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientInfoDataRow;
  static deserializeBinaryFromReader(message: ClientInfoDataRow, reader: jspb.BinaryReader): ClientInfoDataRow;
}

export namespace ClientInfoDataRow {
  export type AsObject = {
    fieldLabel: string,
    fieldValue: string,
    isPhone: boolean,
    dialedNumber: boolean,
    contactFieldDescriptionSid: number,
  }
}

export class RGBColor extends jspb.Message {
  getRed(): number;
  setRed(value: number): void;

  getGreen(): number;
  setGreen(value: number): void;

  getBlue(): number;
  setBlue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RGBColor.AsObject;
  static toObject(includeInstance: boolean, msg: RGBColor): RGBColor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RGBColor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RGBColor;
  static deserializeBinaryFromReader(message: RGBColor, reader: jspb.BinaryReader): RGBColor;
}

export namespace RGBColor {
  export type AsObject = {
    red: number,
    green: number,
    blue: number,
  }
}

export class DialedNumberFieldSettings extends jspb.Message {
  getShouldDisplay(): boolean;
  setShouldDisplay(value: boolean): void;

  hasColor(): boolean;
  clearColor(): void;
  getColor(): RGBColor | undefined;
  setColor(value?: RGBColor): void;

  hasBgColor(): boolean;
  clearBgColor(): void;
  getBgColor(): RGBColor | undefined;
  setBgColor(value?: RGBColor): void;

  getAllowAgentCopy(): boolean;
  setAllowAgentCopy(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DialedNumberFieldSettings.AsObject;
  static toObject(includeInstance: boolean, msg: DialedNumberFieldSettings): DialedNumberFieldSettings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DialedNumberFieldSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DialedNumberFieldSettings;
  static deserializeBinaryFromReader(message: DialedNumberFieldSettings, reader: jspb.BinaryReader): DialedNumberFieldSettings;
}

export namespace DialedNumberFieldSettings {
  export type AsObject = {
    shouldDisplay: boolean,
    color?: RGBColor.AsObject,
    bgColor?: RGBColor.AsObject,
    allowAgentCopy: boolean,
  }
}

export class ClientInfoDisplayTemplateRow extends jspb.Message {
  getFieldLabel(): string;
  setFieldLabel(value: string): void;

  hasColor(): boolean;
  clearColor(): void;
  getColor(): RGBColor | undefined;
  setColor(value?: RGBColor): void;

  hasBgColor(): boolean;
  clearBgColor(): void;
  getBgColor(): RGBColor | undefined;
  setBgColor(value?: RGBColor): void;

  getContactFieldDescriptionSid(): number;
  setContactFieldDescriptionSid(value: number): void;

  getAllowAgentCopy(): boolean;
  setAllowAgentCopy(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientInfoDisplayTemplateRow.AsObject;
  static toObject(includeInstance: boolean, msg: ClientInfoDisplayTemplateRow): ClientInfoDisplayTemplateRow.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientInfoDisplayTemplateRow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientInfoDisplayTemplateRow;
  static deserializeBinaryFromReader(message: ClientInfoDisplayTemplateRow, reader: jspb.BinaryReader): ClientInfoDisplayTemplateRow;
}

export namespace ClientInfoDisplayTemplateRow {
  export type AsObject = {
    fieldLabel: string,
    color?: RGBColor.AsObject,
    bgColor?: RGBColor.AsObject,
    contactFieldDescriptionSid: number,
    allowAgentCopy: boolean,
  }
}

export class CallHistorySearchType extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallHistorySearchType.AsObject;
  static toObject(includeInstance: boolean, msg: CallHistorySearchType): CallHistorySearchType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallHistorySearchType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallHistorySearchType;
  static deserializeBinaryFromReader(message: CallHistorySearchType, reader: jspb.BinaryReader): CallHistorySearchType;
}

export namespace CallHistorySearchType {
  export type AsObject = {
  }

  export interface EnumMap {
    STANDARD: 0;
    BY_ID: 1;
    BY_AGENT: 2;
  }

  export const Enum: EnumMap;
}

export class CallHistorySearchScope extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallHistorySearchScope.AsObject;
  static toObject(includeInstance: boolean, msg: CallHistorySearchScope): CallHistorySearchScope.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallHistorySearchScope, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallHistorySearchScope;
  static deserializeBinaryFromReader(message: CallHistorySearchScope, reader: jspb.BinaryReader): CallHistorySearchScope;
}

export namespace CallHistorySearchScope {
  export type AsObject = {
  }

  export interface EnumMap {
    ALL: 0;
    TWENTY_FOUR_HOURS: 1;
    TWO_DAYS: 2;
    THREE_DAYS: 3;
    FIVE_DAYS: 4;
    SEVEN_DAYS: 5;
    THIRTY_DAYS: 6;
    SIXTY_DAYS: 7;
    NINETY_DAYS: 8;
    ONEHUNDRED_TWENTY_DAYS: 9;
    ONEHUNDRED_FIFTY_DAYS: 10;
    ONEHUNDRED_EIGHTY_DAYS: 11;
  }

  export const Enum: EnumMap;
}

export class ListPhoneBookOrderBy extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPhoneBookOrderBy.AsObject;
  static toObject(includeInstance: boolean, msg: ListPhoneBookOrderBy): ListPhoneBookOrderBy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPhoneBookOrderBy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPhoneBookOrderBy;
  static deserializeBinaryFromReader(message: ListPhoneBookOrderBy, reader: jspb.BinaryReader): ListPhoneBookOrderBy;
}

export namespace ListPhoneBookOrderBy {
  export type AsObject = {
  }

  export interface EnumMap {
    PHONE_BOOK_SID: 0;
    ENTRY_TYPE: 1;
    ENTRY_NAME: 2;
    CLIENT_SID: 3;
    HUNT_GROUP_SID: 4;
    PHONE_NUMBER: 5;
    PHONE_NUMBER_TYPE: 6;
    PHONE_NUMBER_HIDDEN: 7;
  }

  export const Enum: EnumMap;
}

export interface InterruptedPeeringStatusMap {
  INTERRUPTPEERINGSTATUS_MANUAL: 0;
  INTERRUPTPEERINGSTATUS_PREVIEW: 1;
}

export const InterruptedPeeringStatus: InterruptedPeeringStatusMap;

export interface RecalculateBillingMonthMap {
  RECALCULATE_BILLING_MONTH_CURRENT: 0;
  RECALCULATE_BILLING_MONTH_PREVIOUS: 1;
}

export const RecalculateBillingMonth: RecalculateBillingMonthMap;

export interface RecalculateBillingTypeMap {
  RECALCULATE_BILLING_TYPE_OUTBOUND_CALLS: 0;
  RECALCULATE_BILLING_TYPE_INBOUND_CALLS: 1;
  RECALCULATE_BILLING_TYPE_AGENTS: 2;
  RECALCULATE_BILLING_TYPE_SMS: 3;
  RECALCULATE_BILLING_TYPE_EMAIL: 4;
  RECALCULATE_BILLING_TYPE_MANUAL_DIAL_CALLS: 6;
}

export const RecalculateBillingType: RecalculateBillingTypeMap;

export interface PhoneBookSIPTypeMap {
  PHONE_BOOK_SIP_TYPE_OUTBOUND: 0;
  PHONE_BOOK_SIP_TYPE_TRANSFER: 1;
}

export const PhoneBookSIPType: PhoneBookSIPTypeMap;

export interface PhoneBookPhoneNumberTypeMap {
  PHONE_BOOK_PHONE_NUMBER_TYPE_CALLER_ID: 0;
  PHONE_BOOK_PHONE_NUMBER_TYPE_OUTBOUND: 1;
  PHONE_BOOK_PHONE_NUMBER_TYPE_TRANSFER: 2;
}

export const PhoneBookPhoneNumberType: PhoneBookPhoneNumberTypeMap;

