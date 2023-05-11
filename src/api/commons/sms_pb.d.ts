// package: api.commons
// file: api/commons/sms.proto

import * as jspb from "google-protobuf";

export class SimpleSmsMamData extends jspb.Message {
  getSrc(): string;
  setSrc(value: string): void;

  getDst(): string;
  setDst(value: string): void;

  getMsg(): string;
  setMsg(value: string): void;

  getSmsGroupSid(): number;
  setSmsGroupSid(value: number): void;

  getSmsTaskSid(): number;
  setSmsTaskSid(value: number): void;

  getIsTollFree(): string;
  setIsTollFree(value: string): void;

  getIsTimeZone(): string;
  setIsTimeZone(value: string): void;

  getProviderName(): string;
  setProviderName(value: string): void;

  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  getClientSid(): number;
  setClientSid(value: number): void;

  clearSimpleSmsMamMetaDataList(): void;
  getSimpleSmsMamMetaDataList(): Array<SimpleSmsMamKeyValue>;
  setSimpleSmsMamMetaDataList(value: Array<SimpleSmsMamKeyValue>): void;
  addSimpleSmsMamMetaData(value?: SimpleSmsMamKeyValue, index?: number): SimpleSmsMamKeyValue;

  getDstCountryCode(): number;
  setDstCountryCode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimpleSmsMamData.AsObject;
  static toObject(includeInstance: boolean, msg: SimpleSmsMamData): SimpleSmsMamData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SimpleSmsMamData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimpleSmsMamData;
  static deserializeBinaryFromReader(message: SimpleSmsMamData, reader: jspb.BinaryReader): SimpleSmsMamData;
}

export namespace SimpleSmsMamData {
  export type AsObject = {
    src: string,
    dst: string,
    msg: string,
    smsGroupSid: number,
    smsTaskSid: number,
    isTollFree: string,
    isTimeZone: string,
    providerName: string,
    huntGroupSid: number,
    clientSid: number,
    simpleSmsMamMetaDataList: Array<SimpleSmsMamKeyValue.AsObject>,
    dstCountryCode: number,
  }
}

export class SimpleSmsMamKeyValue extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimpleSmsMamKeyValue.AsObject;
  static toObject(includeInstance: boolean, msg: SimpleSmsMamKeyValue): SimpleSmsMamKeyValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SimpleSmsMamKeyValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimpleSmsMamKeyValue;
  static deserializeBinaryFromReader(message: SimpleSmsMamKeyValue, reader: jspb.BinaryReader): SimpleSmsMamKeyValue;
}

export namespace SimpleSmsMamKeyValue {
  export type AsObject = {
    key: string,
    value: string,
  }
}

export interface SMSStatusMap {
  SMS_UNKWNON: 0;
  SMS_PREPARING: 7000;
  SMS_SCHEDULED: 7100;
  SMS_RESUME: 7150;
  SMS_RUNNING: 7200;
  SMS_COMPLETED: 7300;
  SMS_CANCELLED: 7310;
  SMS_CANCELLED_ADMIN: 7320;
  SMS_SUMMED_COMPLETED: 7400;
  SMS_SUMMED_CANCELLED: 7410;
  SMS_SUMMED_CANCELLED_ADMIN: 7420;
  SMS_PAUSED: 7500;
  SMS_TASK_WAITING: 7600;
  SMS_TASK_PROCESSING: 7700;
  SMS_TASK_DNC: 7710;
  SMS_TASK_INVALID: 7720;
  SMS_TASK_QUEUED: 7800;
  SMS_TASK_SENT: 7900;
  SMS_TASK_DELIVERED: 7910;
  SMS_TASK_NOT_DELIVERED: 7920;
  SMS_TASK_CANCELED: 7930;
}

export const SMSStatus: SMSStatusMap;

export interface SMSIBGroupStatusMap {
  IB_SMS_GROUP_UNKNOWN: 0;
  IB_SMS_GROUP_PREPARING: 11000;
  IB_SMS_GROUP_SCHEDULED: 11010;
  IB_SMS_GROUP_RUNNING: 11020;
  IB_SMS_GROUP_PAUSED: 11030;
  IB_SMS_GROUP_RESUME: 11040;
  IB_SMS_GROUP_COMPLETED: 11050;
  IB_SMS_GROUP_CANCELLED_USER: 11060;
  IB_SMS_GROUP_CANCELLED_ADMIN: 11070;
  IB_SMS_GROUP_SUMMED_COMPLETED: 11150;
  IB_SMS_GROUP_SUMMED_CANCELLED_USER: 11160;
  IB_SMS_GROUP_SUMMED_CANCELLED_ADMIN: 11170;
}

export const SMSIBGroupStatus: SMSIBGroupStatusMap;

export interface SMSIBTaskStatusMap {
  IB_SMS_TASK_UNKNOWN: 0;
  IB_SMS_TASK_COMPLETED: 13000;
}

export const SMSIBTaskStatus: SMSIBTaskStatusMap;

export interface SMSConversationAuditActionMap {
  SMS_AUDIT_ACTION_CONVERSATION_START: 0;
  SMS_AUDIT_ACTION_CONVERSATION_MSG_SENT: 1;
  SMS_AUDIT_ACTION_CONVERSATION_MSG_READ: 2;
  SMS_AUDIT_ACTION_CONVERSATION_UNASSIGNED: 3;
  SMS_AUDIT_ACTION_CONVERSATION_ASSIGNED: 4;
  SMS_AUDIT_ACTION_CONVERSATION_TRANSFERRED: 5;
}

export const SMSConversationAuditAction: SMSConversationAuditActionMap;

export interface SMSMamStatusMap {
  QUEUED: 0;
  APPROVED: 1;
  REJECTED: 2;
}

export const SMSMamStatus: SMSMamStatusMap;

