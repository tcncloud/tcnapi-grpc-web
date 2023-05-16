// package: api.v0alpha
// file: api/v0alpha/smsapi.proto

import * as jspb from "google-protobuf";
import * as api_commons_sms_pb from "../../api/commons/sms_pb";
import * as google_api_annotations_pb from "../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class ListSmsTemplatesReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSmsTemplatesReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListSmsTemplatesReq): ListSmsTemplatesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSmsTemplatesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSmsTemplatesReq;
  static deserializeBinaryFromReader(message: ListSmsTemplatesReq, reader: jspb.BinaryReader): ListSmsTemplatesReq;
}

export namespace ListSmsTemplatesReq {
  export type AsObject = {
  }
}

export class ListSmsTemplatesRes extends jspb.Message {
  clearSmsTemplateWithIntentsList(): void;
  getSmsTemplateWithIntentsList(): Array<SmsTemplateWithIntents>;
  setSmsTemplateWithIntentsList(value: Array<SmsTemplateWithIntents>): void;
  addSmsTemplateWithIntents(value?: SmsTemplateWithIntents, index?: number): SmsTemplateWithIntents;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSmsTemplatesRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListSmsTemplatesRes): ListSmsTemplatesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSmsTemplatesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSmsTemplatesRes;
  static deserializeBinaryFromReader(message: ListSmsTemplatesRes, reader: jspb.BinaryReader): ListSmsTemplatesRes;
}

export namespace ListSmsTemplatesRes {
  export type AsObject = {
    smsTemplateWithIntentsList: Array<SmsTemplateWithIntents.AsObject>,
  }
}

export class SmsTemplateWithIntents extends jspb.Message {
  hasSmsTemplate(): boolean;
  clearSmsTemplate(): void;
  getSmsTemplate(): SmsTemplate | undefined;
  setSmsTemplate(value?: SmsTemplate): void;

  clearSmsIntentTemplatesList(): void;
  getSmsIntentTemplatesList(): Array<SmsIntentTemplate>;
  setSmsIntentTemplatesList(value: Array<SmsIntentTemplate>): void;
  addSmsIntentTemplates(value?: SmsIntentTemplate, index?: number): SmsIntentTemplate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmsTemplateWithIntents.AsObject;
  static toObject(includeInstance: boolean, msg: SmsTemplateWithIntents): SmsTemplateWithIntents.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SmsTemplateWithIntents, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmsTemplateWithIntents;
  static deserializeBinaryFromReader(message: SmsTemplateWithIntents, reader: jspb.BinaryReader): SmsTemplateWithIntents;
}

export namespace SmsTemplateWithIntents {
  export type AsObject = {
    smsTemplate?: SmsTemplate.AsObject,
    smsIntentTemplatesList: Array<SmsIntentTemplate.AsObject>,
  }
}

export class SmsTemplate extends jspb.Message {
  getSmsTemplateSid(): number;
  setSmsTemplateSid(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  hasLastUpdated(): boolean;
  clearLastUpdated(): void;
  getLastUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmsTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: SmsTemplate): SmsTemplate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SmsTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmsTemplate;
  static deserializeBinaryFromReader(message: SmsTemplate, reader: jspb.BinaryReader): SmsTemplate;
}

export namespace SmsTemplate {
  export type AsObject = {
    smsTemplateSid: number,
    message: string,
    lastUpdated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CreateSmsTemplateReq extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  clearSmsIntentTemplateSidList(): void;
  getSmsIntentTemplateSidList(): Array<number>;
  setSmsIntentTemplateSidList(value: Array<number>): void;
  addSmsIntentTemplateSid(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSmsTemplateReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSmsTemplateReq): CreateSmsTemplateReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSmsTemplateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSmsTemplateReq;
  static deserializeBinaryFromReader(message: CreateSmsTemplateReq, reader: jspb.BinaryReader): CreateSmsTemplateReq;
}

export namespace CreateSmsTemplateReq {
  export type AsObject = {
    message: string,
    smsIntentTemplateSidList: Array<number>,
  }
}

export class CreateSmsTemplateRes extends jspb.Message {
  getSmsTemplateSid(): number;
  setSmsTemplateSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSmsTemplateRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSmsTemplateRes): CreateSmsTemplateRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSmsTemplateRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSmsTemplateRes;
  static deserializeBinaryFromReader(message: CreateSmsTemplateRes, reader: jspb.BinaryReader): CreateSmsTemplateRes;
}

export namespace CreateSmsTemplateRes {
  export type AsObject = {
    smsTemplateSid: number,
  }
}

export class UpdateSmsTemplateReq extends jspb.Message {
  getSmsTemplateSid(): number;
  setSmsTemplateSid(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  clearSmsIntentTemplateSidList(): void;
  getSmsIntentTemplateSidList(): Array<number>;
  setSmsIntentTemplateSidList(value: Array<number>): void;
  addSmsIntentTemplateSid(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSmsTemplateReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSmsTemplateReq): UpdateSmsTemplateReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSmsTemplateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSmsTemplateReq;
  static deserializeBinaryFromReader(message: UpdateSmsTemplateReq, reader: jspb.BinaryReader): UpdateSmsTemplateReq;
}

export namespace UpdateSmsTemplateReq {
  export type AsObject = {
    smsTemplateSid: number,
    message: string,
    smsIntentTemplateSidList: Array<number>,
  }
}

export class UpdateSmsTemplateRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSmsTemplateRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSmsTemplateRes): UpdateSmsTemplateRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSmsTemplateRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSmsTemplateRes;
  static deserializeBinaryFromReader(message: UpdateSmsTemplateRes, reader: jspb.BinaryReader): UpdateSmsTemplateRes;
}

export namespace UpdateSmsTemplateRes {
  export type AsObject = {
    result: boolean,
  }
}

export class DeleteSmsTemplateReq extends jspb.Message {
  getSmsTemplateSid(): number;
  setSmsTemplateSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSmsTemplateReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSmsTemplateReq): DeleteSmsTemplateReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSmsTemplateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSmsTemplateReq;
  static deserializeBinaryFromReader(message: DeleteSmsTemplateReq, reader: jspb.BinaryReader): DeleteSmsTemplateReq;
}

export namespace DeleteSmsTemplateReq {
  export type AsObject = {
    smsTemplateSid: number,
  }
}

export class DeleteSmsTemplateRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSmsTemplateRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSmsTemplateRes): DeleteSmsTemplateRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSmsTemplateRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSmsTemplateRes;
  static deserializeBinaryFromReader(message: DeleteSmsTemplateRes, reader: jspb.BinaryReader): DeleteSmsTemplateRes;
}

export namespace DeleteSmsTemplateRes {
  export type AsObject = {
    result: boolean,
  }
}

export class GetSmsTemplateBySidReq extends jspb.Message {
  getSmsTemplateSid(): number;
  setSmsTemplateSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSmsTemplateBySidReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetSmsTemplateBySidReq): GetSmsTemplateBySidReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSmsTemplateBySidReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSmsTemplateBySidReq;
  static deserializeBinaryFromReader(message: GetSmsTemplateBySidReq, reader: jspb.BinaryReader): GetSmsTemplateBySidReq;
}

export namespace GetSmsTemplateBySidReq {
  export type AsObject = {
    smsTemplateSid: number,
  }
}

export class GetSmsTemplateBySidRes extends jspb.Message {
  hasSmsTemplate(): boolean;
  clearSmsTemplate(): void;
  getSmsTemplate(): SmsTemplate | undefined;
  setSmsTemplate(value?: SmsTemplate): void;

  clearSmsIntentTemplatesList(): void;
  getSmsIntentTemplatesList(): Array<SmsIntentTemplate>;
  setSmsIntentTemplatesList(value: Array<SmsIntentTemplate>): void;
  addSmsIntentTemplates(value?: SmsIntentTemplate, index?: number): SmsIntentTemplate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSmsTemplateBySidRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetSmsTemplateBySidRes): GetSmsTemplateBySidRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSmsTemplateBySidRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSmsTemplateBySidRes;
  static deserializeBinaryFromReader(message: GetSmsTemplateBySidRes, reader: jspb.BinaryReader): GetSmsTemplateBySidRes;
}

export namespace GetSmsTemplateBySidRes {
  export type AsObject = {
    smsTemplate?: SmsTemplate.AsObject,
    smsIntentTemplatesList: Array<SmsIntentTemplate.AsObject>,
  }
}

export class SmsIntentTemplate extends jspb.Message {
  getSmsIntentTemplateSid(): number;
  setSmsIntentTemplateSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getActionKey(): string;
  setActionKey(value: string): void;

  getActionDetail(): string;
  setActionDetail(value: string): void;

  getActionTrigger(): string;
  setActionTrigger(value: string): void;

  getPriority(): number;
  setPriority(value: number): void;

  hasLastUpdated(): boolean;
  clearLastUpdated(): void;
  getLastUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmsIntentTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: SmsIntentTemplate): SmsIntentTemplate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SmsIntentTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmsIntentTemplate;
  static deserializeBinaryFromReader(message: SmsIntentTemplate, reader: jspb.BinaryReader): SmsIntentTemplate;
}

export namespace SmsIntentTemplate {
  export type AsObject = {
    smsIntentTemplateSid: number,
    name: string,
    description: string,
    actionKey: string,
    actionDetail: string,
    actionTrigger: string,
    priority: number,
    lastUpdated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListSmsIntentTemplatesReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSmsIntentTemplatesReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListSmsIntentTemplatesReq): ListSmsIntentTemplatesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSmsIntentTemplatesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSmsIntentTemplatesReq;
  static deserializeBinaryFromReader(message: ListSmsIntentTemplatesReq, reader: jspb.BinaryReader): ListSmsIntentTemplatesReq;
}

export namespace ListSmsIntentTemplatesReq {
  export type AsObject = {
  }
}

export class ListSmsIntentTemplatesRes extends jspb.Message {
  clearSmsIntentTemplateList(): void;
  getSmsIntentTemplateList(): Array<SmsIntentTemplate>;
  setSmsIntentTemplateList(value: Array<SmsIntentTemplate>): void;
  addSmsIntentTemplate(value?: SmsIntentTemplate, index?: number): SmsIntentTemplate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSmsIntentTemplatesRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListSmsIntentTemplatesRes): ListSmsIntentTemplatesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSmsIntentTemplatesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSmsIntentTemplatesRes;
  static deserializeBinaryFromReader(message: ListSmsIntentTemplatesRes, reader: jspb.BinaryReader): ListSmsIntentTemplatesRes;
}

export namespace ListSmsIntentTemplatesRes {
  export type AsObject = {
    smsIntentTemplateList: Array<SmsIntentTemplate.AsObject>,
  }
}

export class UpdateSmsIntentTemplateRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSmsIntentTemplateRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSmsIntentTemplateRes): UpdateSmsIntentTemplateRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSmsIntentTemplateRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSmsIntentTemplateRes;
  static deserializeBinaryFromReader(message: UpdateSmsIntentTemplateRes, reader: jspb.BinaryReader): UpdateSmsIntentTemplateRes;
}

export namespace UpdateSmsIntentTemplateRes {
  export type AsObject = {
    result: boolean,
  }
}

export class DeleteSmsIntentTemplateReq extends jspb.Message {
  getSmsIntentTemplateSid(): number;
  setSmsIntentTemplateSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSmsIntentTemplateReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSmsIntentTemplateReq): DeleteSmsIntentTemplateReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSmsIntentTemplateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSmsIntentTemplateReq;
  static deserializeBinaryFromReader(message: DeleteSmsIntentTemplateReq, reader: jspb.BinaryReader): DeleteSmsIntentTemplateReq;
}

export namespace DeleteSmsIntentTemplateReq {
  export type AsObject = {
    smsIntentTemplateSid: number,
  }
}

export class DeleteSmsIntentTemplateRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSmsIntentTemplateRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSmsIntentTemplateRes): DeleteSmsIntentTemplateRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSmsIntentTemplateRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSmsIntentTemplateRes;
  static deserializeBinaryFromReader(message: DeleteSmsIntentTemplateRes, reader: jspb.BinaryReader): DeleteSmsIntentTemplateRes;
}

export namespace DeleteSmsIntentTemplateRes {
  export type AsObject = {
    result: boolean,
  }
}

export class CreateSmsIntentTemplateRes extends jspb.Message {
  getSmsIntentTemplateSid(): number;
  setSmsIntentTemplateSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSmsIntentTemplateRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSmsIntentTemplateRes): CreateSmsIntentTemplateRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSmsIntentTemplateRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSmsIntentTemplateRes;
  static deserializeBinaryFromReader(message: CreateSmsIntentTemplateRes, reader: jspb.BinaryReader): CreateSmsIntentTemplateRes;
}

export namespace CreateSmsIntentTemplateRes {
  export type AsObject = {
    smsIntentTemplateSid: number,
  }
}

export class GetSmsIntentTemplateBySidReq extends jspb.Message {
  getSmsIntentTemplateSid(): number;
  setSmsIntentTemplateSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSmsIntentTemplateBySidReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetSmsIntentTemplateBySidReq): GetSmsIntentTemplateBySidReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSmsIntentTemplateBySidReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSmsIntentTemplateBySidReq;
  static deserializeBinaryFromReader(message: GetSmsIntentTemplateBySidReq, reader: jspb.BinaryReader): GetSmsIntentTemplateBySidReq;
}

export namespace GetSmsIntentTemplateBySidReq {
  export type AsObject = {
    smsIntentTemplateSid: number,
  }
}

export class SmsNumbers extends jspb.Message {
  getSmsNumberSid(): number;
  setSmsNumberSid(value: number): void;

  getCountrySid(): number;
  setCountrySid(value: number): void;

  getNumber(): string;
  setNumber(value: string): void;

  getProviderName(): string;
  setProviderName(value: string): void;

  getNotes(): string;
  setNotes(value: string): void;

  hasIvrReference(): boolean;
  clearIvrReference(): void;
  getIvrReference(): google_protobuf_wrappers_pb.StringValue | undefined;
  setIvrReference(value?: google_protobuf_wrappers_pb.StringValue): void;

  getClientName(): string;
  setClientName(value: string): void;

  getIstollfree(): boolean;
  setIstollfree(value: boolean): void;

  getSrcNumberType(): string;
  setSrcNumberType(value: string): void;

  hasLastUpdated(): boolean;
  clearLastUpdated(): void;
  getLastUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmsNumbers.AsObject;
  static toObject(includeInstance: boolean, msg: SmsNumbers): SmsNumbers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SmsNumbers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmsNumbers;
  static deserializeBinaryFromReader(message: SmsNumbers, reader: jspb.BinaryReader): SmsNumbers;
}

export namespace SmsNumbers {
  export type AsObject = {
    smsNumberSid: number,
    countrySid: number,
    number: string,
    providerName: string,
    notes: string,
    ivrReference?: google_protobuf_wrappers_pb.StringValue.AsObject,
    clientName: string,
    istollfree: boolean,
    srcNumberType: string,
    lastUpdated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListSmsSourceNumbersReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSmsSourceNumbersReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListSmsSourceNumbersReq): ListSmsSourceNumbersReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSmsSourceNumbersReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSmsSourceNumbersReq;
  static deserializeBinaryFromReader(message: ListSmsSourceNumbersReq, reader: jspb.BinaryReader): ListSmsSourceNumbersReq;
}

export namespace ListSmsSourceNumbersReq {
  export type AsObject = {
  }
}

export class ListSmsSourceNumbersRes extends jspb.Message {
  clearSmsNumbersList(): void;
  getSmsNumbersList(): Array<SmsNumbers>;
  setSmsNumbersList(value: Array<SmsNumbers>): void;
  addSmsNumbers(value?: SmsNumbers, index?: number): SmsNumbers;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSmsSourceNumbersRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListSmsSourceNumbersRes): ListSmsSourceNumbersRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSmsSourceNumbersRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSmsSourceNumbersRes;
  static deserializeBinaryFromReader(message: ListSmsSourceNumbersRes, reader: jspb.BinaryReader): ListSmsSourceNumbersRes;
}

export namespace ListSmsSourceNumbersRes {
  export type AsObject = {
    smsNumbersList: Array<SmsNumbers.AsObject>,
  }
}

export class UpdateSmsSourceNumberReq extends jspb.Message {
  getSmsNumberSid(): number;
  setSmsNumberSid(value: number): void;

  getCountrySid(): number;
  setCountrySid(value: number): void;

  getNumber(): string;
  setNumber(value: string): void;

  getProviderName(): string;
  setProviderName(value: string): void;

  getNotes(): string;
  setNotes(value: string): void;

  getIvrReference(): string;
  setIvrReference(value: string): void;

  getSrcNumberType(): string;
  setSrcNumberType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSmsSourceNumberReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSmsSourceNumberReq): UpdateSmsSourceNumberReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSmsSourceNumberReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSmsSourceNumberReq;
  static deserializeBinaryFromReader(message: UpdateSmsSourceNumberReq, reader: jspb.BinaryReader): UpdateSmsSourceNumberReq;
}

export namespace UpdateSmsSourceNumberReq {
  export type AsObject = {
    smsNumberSid: number,
    countrySid: number,
    number: string,
    providerName: string,
    notes: string,
    ivrReference: string,
    srcNumberType: string,
  }
}

export class UpdateSmsSourceNumberRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSmsSourceNumberRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSmsSourceNumberRes): UpdateSmsSourceNumberRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSmsSourceNumberRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSmsSourceNumberRes;
  static deserializeBinaryFromReader(message: UpdateSmsSourceNumberRes, reader: jspb.BinaryReader): UpdateSmsSourceNumberRes;
}

export namespace UpdateSmsSourceNumberRes {
  export type AsObject = {
    result: boolean,
  }
}

export class DeleteSmsSourceNumberReq extends jspb.Message {
  getSmsNumberSid(): number;
  setSmsNumberSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSmsSourceNumberReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSmsSourceNumberReq): DeleteSmsSourceNumberReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSmsSourceNumberReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSmsSourceNumberReq;
  static deserializeBinaryFromReader(message: DeleteSmsSourceNumberReq, reader: jspb.BinaryReader): DeleteSmsSourceNumberReq;
}

export namespace DeleteSmsSourceNumberReq {
  export type AsObject = {
    smsNumberSid: number,
  }
}

export class DeleteSmsSourceNumberRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSmsSourceNumberRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSmsSourceNumberRes): DeleteSmsSourceNumberRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSmsSourceNumberRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSmsSourceNumberRes;
  static deserializeBinaryFromReader(message: DeleteSmsSourceNumberRes, reader: jspb.BinaryReader): DeleteSmsSourceNumberRes;
}

export namespace DeleteSmsSourceNumberRes {
  export type AsObject = {
    result: boolean,
  }
}

export class CreateSmsSourceNumberReq extends jspb.Message {
  getCountrySid(): number;
  setCountrySid(value: number): void;

  getNumber(): string;
  setNumber(value: string): void;

  getProviderName(): string;
  setProviderName(value: string): void;

  getNotes(): string;
  setNotes(value: string): void;

  getIvrReference(): string;
  setIvrReference(value: string): void;

  getSrcNumberType(): string;
  setSrcNumberType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSmsSourceNumberReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSmsSourceNumberReq): CreateSmsSourceNumberReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSmsSourceNumberReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSmsSourceNumberReq;
  static deserializeBinaryFromReader(message: CreateSmsSourceNumberReq, reader: jspb.BinaryReader): CreateSmsSourceNumberReq;
}

export namespace CreateSmsSourceNumberReq {
  export type AsObject = {
    countrySid: number,
    number: string,
    providerName: string,
    notes: string,
    ivrReference: string,
    srcNumberType: string,
  }
}

export class CreateSmsSourceNumberRes extends jspb.Message {
  getSmsNumberSid(): number;
  setSmsNumberSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSmsSourceNumberRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSmsSourceNumberRes): CreateSmsSourceNumberRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSmsSourceNumberRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSmsSourceNumberRes;
  static deserializeBinaryFromReader(message: CreateSmsSourceNumberRes, reader: jspb.BinaryReader): CreateSmsSourceNumberRes;
}

export namespace CreateSmsSourceNumberRes {
  export type AsObject = {
    smsNumberSid: number,
  }
}

export class GetSmsSourceNumberBySidReq extends jspb.Message {
  getSmsNumberSid(): number;
  setSmsNumberSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSmsSourceNumberBySidReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetSmsSourceNumberBySidReq): GetSmsSourceNumberBySidReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSmsSourceNumberBySidReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSmsSourceNumberBySidReq;
  static deserializeBinaryFromReader(message: GetSmsSourceNumberBySidReq, reader: jspb.BinaryReader): GetSmsSourceNumberBySidReq;
}

export namespace GetSmsSourceNumberBySidReq {
  export type AsObject = {
    smsNumberSid: number,
  }
}

export class SendSmsNotificationReq extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  clearToPhoneNumArrList(): void;
  getToPhoneNumArrList(): Array<string>;
  setToPhoneNumArrList(value: Array<string>): void;
  addToPhoneNumArr(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendSmsNotificationReq.AsObject;
  static toObject(includeInstance: boolean, msg: SendSmsNotificationReq): SendSmsNotificationReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendSmsNotificationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendSmsNotificationReq;
  static deserializeBinaryFromReader(message: SendSmsNotificationReq, reader: jspb.BinaryReader): SendSmsNotificationReq;
}

export namespace SendSmsNotificationReq {
  export type AsObject = {
    message: string,
    toPhoneNumArrList: Array<string>,
  }
}

export class SendSmsNotificationRes extends jspb.Message {
  getResponse(): string;
  setResponse(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendSmsNotificationRes.AsObject;
  static toObject(includeInstance: boolean, msg: SendSmsNotificationRes): SendSmsNotificationRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendSmsNotificationRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendSmsNotificationRes;
  static deserializeBinaryFromReader(message: SendSmsNotificationRes, reader: jspb.BinaryReader): SendSmsNotificationRes;
}

export namespace SendSmsNotificationRes {
  export type AsObject = {
    response: string,
  }
}

export class ListSmsGroupByFiltersReq extends jspb.Message {
  hasSearchFrom(): boolean;
  clearSearchFrom(): void;
  getSearchFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSearchFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasSearchTo(): boolean;
  clearSearchTo(): void;
  getSearchTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSearchTo(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getStatus(): string;
  setStatus(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSmsGroupByFiltersReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListSmsGroupByFiltersReq): ListSmsGroupByFiltersReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSmsGroupByFiltersReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSmsGroupByFiltersReq;
  static deserializeBinaryFromReader(message: ListSmsGroupByFiltersReq, reader: jspb.BinaryReader): ListSmsGroupByFiltersReq;
}

export namespace ListSmsGroupByFiltersReq {
  export type AsObject = {
    searchFrom?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    searchTo?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: string,
    name: string,
  }
}

export class SmsGroupWithIntents extends jspb.Message {
  hasSmsGroupInfoRes(): boolean;
  clearSmsGroupInfoRes(): void;
  getSmsGroupInfoRes(): SmsGroupInfo | undefined;
  setSmsGroupInfoRes(value?: SmsGroupInfo): void;

  clearSmsIntentGroupsList(): void;
  getSmsIntentGroupsList(): Array<SmsIntentGroup>;
  setSmsIntentGroupsList(value: Array<SmsIntentGroup>): void;
  addSmsIntentGroups(value?: SmsIntentGroup, index?: number): SmsIntentGroup;

  hasSmsMamSettings(): boolean;
  clearSmsMamSettings(): void;
  getSmsMamSettings(): SmsMamSettings | undefined;
  setSmsMamSettings(value?: SmsMamSettings): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmsGroupWithIntents.AsObject;
  static toObject(includeInstance: boolean, msg: SmsGroupWithIntents): SmsGroupWithIntents.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SmsGroupWithIntents, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmsGroupWithIntents;
  static deserializeBinaryFromReader(message: SmsGroupWithIntents, reader: jspb.BinaryReader): SmsGroupWithIntents;
}

export namespace SmsGroupWithIntents {
  export type AsObject = {
    smsGroupInfoRes?: SmsGroupInfo.AsObject,
    smsIntentGroupsList: Array<SmsIntentGroup.AsObject>,
    smsMamSettings?: SmsMamSettings.AsObject,
  }
}

export class ListSmsGroupByFiltersRes extends jspb.Message {
  clearSmsGroupWithIntentsList(): void;
  getSmsGroupWithIntentsList(): Array<SmsGroupWithIntents>;
  setSmsGroupWithIntentsList(value: Array<SmsGroupWithIntents>): void;
  addSmsGroupWithIntents(value?: SmsGroupWithIntents, index?: number): SmsGroupWithIntents;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSmsGroupByFiltersRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListSmsGroupByFiltersRes): ListSmsGroupByFiltersRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSmsGroupByFiltersRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSmsGroupByFiltersRes;
  static deserializeBinaryFromReader(message: ListSmsGroupByFiltersRes, reader: jspb.BinaryReader): ListSmsGroupByFiltersRes;
}

export namespace ListSmsGroupByFiltersRes {
  export type AsObject = {
    smsGroupWithIntentsList: Array<SmsGroupWithIntents.AsObject>,
  }
}

export class ListSmsGroupsByGroupSidsReq extends jspb.Message {
  clearSmsGroupSidsArrList(): void;
  getSmsGroupSidsArrList(): Array<number>;
  setSmsGroupSidsArrList(value: Array<number>): void;
  addSmsGroupSidsArr(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSmsGroupsByGroupSidsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListSmsGroupsByGroupSidsReq): ListSmsGroupsByGroupSidsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSmsGroupsByGroupSidsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSmsGroupsByGroupSidsReq;
  static deserializeBinaryFromReader(message: ListSmsGroupsByGroupSidsReq, reader: jspb.BinaryReader): ListSmsGroupsByGroupSidsReq;
}

export namespace ListSmsGroupsByGroupSidsReq {
  export type AsObject = {
    smsGroupSidsArrList: Array<number>,
  }
}

export class ListSmsGroupsByGroupSidsRes extends jspb.Message {
  clearSmsGroupWithIntentsList(): void;
  getSmsGroupWithIntentsList(): Array<SmsGroupWithIntents>;
  setSmsGroupWithIntentsList(value: Array<SmsGroupWithIntents>): void;
  addSmsGroupWithIntents(value?: SmsGroupWithIntents, index?: number): SmsGroupWithIntents;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSmsGroupsByGroupSidsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListSmsGroupsByGroupSidsRes): ListSmsGroupsByGroupSidsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSmsGroupsByGroupSidsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSmsGroupsByGroupSidsRes;
  static deserializeBinaryFromReader(message: ListSmsGroupsByGroupSidsRes, reader: jspb.BinaryReader): ListSmsGroupsByGroupSidsRes;
}

export namespace ListSmsGroupsByGroupSidsRes {
  export type AsObject = {
    smsGroupWithIntentsList: Array<SmsGroupWithIntents.AsObject>,
  }
}

export class SmsGroupInfo extends jspb.Message {
  getSmsGroupSid(): number;
  setSmsGroupSid(value: number): void;

  getCountrySid(): number;
  setCountrySid(value: number): void;

  getSmsMessageSid(): number;
  setSmsMessageSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStopTime(): boolean;
  clearStopTime(): void;
  getStopTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStopTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getSendsPerMinute(): number;
  setSendsPerMinute(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  getTotalCost(): number;
  setTotalCost(value: number): void;

  clearCallerIdsList(): void;
  getCallerIdsList(): Array<string>;
  setCallerIdsList(value: Array<string>): void;
  addCallerIds(value: string, index?: number): string;

  getClientName(): string;
  setClientName(value: string): void;

  getTotalScheduled(): number;
  setTotalScheduled(value: number): void;

  getTotalCompleted(): number;
  setTotalCompleted(value: number): void;

  hasContactGroupSidStr(): boolean;
  clearContactGroupSidStr(): void;
  getContactGroupSidStr(): google_protobuf_wrappers_pb.StringValue | undefined;
  setContactGroupSidStr(value?: google_protobuf_wrappers_pb.StringValue): void;

  getContactGroupSid(): number;
  setContactGroupSid(value: number): void;

  hasPhoneNumCol(): boolean;
  clearPhoneNumCol(): void;
  getPhoneNumCol(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPhoneNumCol(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasUseTzRestrictions(): boolean;
  clearUseTzRestrictions(): void;
  getUseTzRestrictions(): google_protobuf_wrappers_pb.StringValue | undefined;
  setUseTzRestrictions(value?: google_protobuf_wrappers_pb.StringValue): void;

  getMessageCount(): number;
  setMessageCount(value: number): void;

  getTodaysMessageCount(): number;
  setTodaysMessageCount(value: number): void;

  hasDateCreated(): boolean;
  clearDateCreated(): void;
  getDateCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmsGroupInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SmsGroupInfo): SmsGroupInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SmsGroupInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmsGroupInfo;
  static deserializeBinaryFromReader(message: SmsGroupInfo, reader: jspb.BinaryReader): SmsGroupInfo;
}

export namespace SmsGroupInfo {
  export type AsObject = {
    smsGroupSid: number,
    countrySid: number,
    smsMessageSid: number,
    name: string,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    stopTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    sendsPerMinute: number,
    status: number,
    totalCost: number,
    callerIdsList: Array<string>,
    clientName: string,
    totalScheduled: number,
    totalCompleted: number,
    contactGroupSidStr?: google_protobuf_wrappers_pb.StringValue.AsObject,
    contactGroupSid: number,
    phoneNumCol?: google_protobuf_wrappers_pb.StringValue.AsObject,
    useTzRestrictions?: google_protobuf_wrappers_pb.StringValue.AsObject,
    messageCount: number,
    todaysMessageCount: number,
    dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListSmsTasksByGroupSidsReq extends jspb.Message {
  clearSmsGroupSidsArrList(): void;
  getSmsGroupSidsArrList(): Array<number>;
  setSmsGroupSidsArrList(value: Array<number>): void;
  addSmsGroupSidsArr(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSmsTasksByGroupSidsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListSmsTasksByGroupSidsReq): ListSmsTasksByGroupSidsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSmsTasksByGroupSidsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSmsTasksByGroupSidsReq;
  static deserializeBinaryFromReader(message: ListSmsTasksByGroupSidsReq, reader: jspb.BinaryReader): ListSmsTasksByGroupSidsReq;
}

export namespace ListSmsTasksByGroupSidsReq {
  export type AsObject = {
    smsGroupSidsArrList: Array<number>,
  }
}

export class ListSmsTasksByGroupSidsRes extends jspb.Message {
  clearSmsTaskInfoWithReplyList(): void;
  getSmsTaskInfoWithReplyList(): Array<SmsTaskInfoWithReply>;
  setSmsTaskInfoWithReplyList(value: Array<SmsTaskInfoWithReply>): void;
  addSmsTaskInfoWithReply(value?: SmsTaskInfoWithReply, index?: number): SmsTaskInfoWithReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSmsTasksByGroupSidsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListSmsTasksByGroupSidsRes): ListSmsTasksByGroupSidsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSmsTasksByGroupSidsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSmsTasksByGroupSidsRes;
  static deserializeBinaryFromReader(message: ListSmsTasksByGroupSidsRes, reader: jspb.BinaryReader): ListSmsTasksByGroupSidsRes;
}

export namespace ListSmsTasksByGroupSidsRes {
  export type AsObject = {
    smsTaskInfoWithReplyList: Array<SmsTaskInfoWithReply.AsObject>,
  }
}

export class ListSmsTasksWithDetailedStatusReq extends jspb.Message {
  getSmsGroupSid(): number;
  setSmsGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSmsTasksWithDetailedStatusReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListSmsTasksWithDetailedStatusReq): ListSmsTasksWithDetailedStatusReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSmsTasksWithDetailedStatusReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSmsTasksWithDetailedStatusReq;
  static deserializeBinaryFromReader(message: ListSmsTasksWithDetailedStatusReq, reader: jspb.BinaryReader): ListSmsTasksWithDetailedStatusReq;
}

export namespace ListSmsTasksWithDetailedStatusReq {
  export type AsObject = {
    smsGroupSid: number,
  }
}

export class ListSmsTasksWithDetailedStatusRes extends jspb.Message {
  clearSmsTaskInfoWithReplyList(): void;
  getSmsTaskInfoWithReplyList(): Array<SmsTaskInfoWithReply>;
  setSmsTaskInfoWithReplyList(value: Array<SmsTaskInfoWithReply>): void;
  addSmsTaskInfoWithReply(value?: SmsTaskInfoWithReply, index?: number): SmsTaskInfoWithReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSmsTasksWithDetailedStatusRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListSmsTasksWithDetailedStatusRes): ListSmsTasksWithDetailedStatusRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSmsTasksWithDetailedStatusRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSmsTasksWithDetailedStatusRes;
  static deserializeBinaryFromReader(message: ListSmsTasksWithDetailedStatusRes, reader: jspb.BinaryReader): ListSmsTasksWithDetailedStatusRes;
}

export namespace ListSmsTasksWithDetailedStatusRes {
  export type AsObject = {
    smsTaskInfoWithReplyList: Array<SmsTaskInfoWithReply.AsObject>,
  }
}

export class SmsTaskInfoWithReply extends jspb.Message {
  hasSmsTaskInfoRes(): boolean;
  clearSmsTaskInfoRes(): void;
  getSmsTaskInfoRes(): SmsTaskInfoRes | undefined;
  setSmsTaskInfoRes(value?: SmsTaskInfoRes): void;

  clearSmsReceivedRepliesList(): void;
  getSmsReceivedRepliesList(): Array<SmsReceivedReplies>;
  setSmsReceivedRepliesList(value: Array<SmsReceivedReplies>): void;
  addSmsReceivedReplies(value?: SmsReceivedReplies, index?: number): SmsReceivedReplies;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmsTaskInfoWithReply.AsObject;
  static toObject(includeInstance: boolean, msg: SmsTaskInfoWithReply): SmsTaskInfoWithReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SmsTaskInfoWithReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmsTaskInfoWithReply;
  static deserializeBinaryFromReader(message: SmsTaskInfoWithReply, reader: jspb.BinaryReader): SmsTaskInfoWithReply;
}

export namespace SmsTaskInfoWithReply {
  export type AsObject = {
    smsTaskInfoRes?: SmsTaskInfoRes.AsObject,
    smsReceivedRepliesList: Array<SmsReceivedReplies.AsObject>,
  }
}

export class SmsTaskInfoRes extends jspb.Message {
  getSmsTaskSid(): number;
  setSmsTaskSid(value: number): void;

  getSmsGroupSid(): number;
  setSmsGroupSid(value: number): void;

  getDeliveryStatus(): number;
  setDeliveryStatus(value: number): void;

  getDeliveryStatusMessage(): string;
  setDeliveryStatusMessage(value: string): void;

  getData(): string;
  setData(value: string): void;

  getCost(): number;
  setCost(value: number): void;

  hasMsgUuid(): boolean;
  clearMsgUuid(): void;
  getMsgUuid(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMsgUuid(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasMsgTime(): boolean;
  clearMsgTime(): void;
  getMsgTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setMsgTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getStatus(): number;
  setStatus(value: number): void;

  hasPhoneNumCol(): boolean;
  clearPhoneNumCol(): void;
  getPhoneNumCol(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPhoneNumCol(value?: google_protobuf_wrappers_pb.StringValue): void;

  getUnits(): number;
  setUnits(value: number): void;

  hasSmsTaskParent(): boolean;
  clearSmsTaskParent(): void;
  getSmsTaskParent(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setSmsTaskParent(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasMamAgentResponse(): boolean;
  clearMamAgentResponse(): void;
  getMamAgentResponse(): MamAgentResponse | undefined;
  setMamAgentResponse(value?: MamAgentResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmsTaskInfoRes.AsObject;
  static toObject(includeInstance: boolean, msg: SmsTaskInfoRes): SmsTaskInfoRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SmsTaskInfoRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmsTaskInfoRes;
  static deserializeBinaryFromReader(message: SmsTaskInfoRes, reader: jspb.BinaryReader): SmsTaskInfoRes;
}

export namespace SmsTaskInfoRes {
  export type AsObject = {
    smsTaskSid: number,
    smsGroupSid: number,
    deliveryStatus: number,
    deliveryStatusMessage: string,
    data: string,
    cost: number,
    msgUuid?: google_protobuf_wrappers_pb.StringValue.AsObject,
    msgTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: number,
    phoneNumCol?: google_protobuf_wrappers_pb.StringValue.AsObject,
    units: number,
    smsTaskParent?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    mamAgentResponse?: MamAgentResponse.AsObject,
  }
}

export class SmsReceivedReplies extends jspb.Message {
  getSmsReceivedRepliesSid(): number;
  setSmsReceivedRepliesSid(value: number): void;

  getSmsTaskSid(): number;
  setSmsTaskSid(value: number): void;

  getSrcNumber(): string;
  setSrcNumber(value: string): void;

  getDstNumber(): string;
  setDstNumber(value: string): void;

  getMsgUuid(): string;
  setMsgUuid(value: string): void;

  getReceivedReply(): string;
  setReceivedReply(value: string): void;

  hasReceivedTime(): boolean;
  clearReceivedTime(): void;
  getReceivedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReceivedTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getAnalysisReport(): string;
  setAnalysisReport(value: string): void;

  getInboundSmsGroupId(): string;
  setInboundSmsGroupId(value: string): void;

  getCost(): number;
  setCost(value: number): void;

  getStatus(): api_commons_sms_pb.SMSIBTaskStatusMap[keyof api_commons_sms_pb.SMSIBTaskStatusMap];
  setStatus(value: api_commons_sms_pb.SMSIBTaskStatusMap[keyof api_commons_sms_pb.SMSIBTaskStatusMap]): void;

  getUnits(): number;
  setUnits(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmsReceivedReplies.AsObject;
  static toObject(includeInstance: boolean, msg: SmsReceivedReplies): SmsReceivedReplies.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SmsReceivedReplies, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmsReceivedReplies;
  static deserializeBinaryFromReader(message: SmsReceivedReplies, reader: jspb.BinaryReader): SmsReceivedReplies;
}

export namespace SmsReceivedReplies {
  export type AsObject = {
    smsReceivedRepliesSid: number,
    smsTaskSid: number,
    srcNumber: string,
    dstNumber: string,
    msgUuid: string,
    receivedReply: string,
    receivedTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    analysisReport: string,
    inboundSmsGroupId: string,
    cost: number,
    status: api_commons_sms_pb.SMSIBTaskStatusMap[keyof api_commons_sms_pb.SMSIBTaskStatusMap],
    units: number,
  }
}

export class UpdateSmsGroupRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSmsGroupRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSmsGroupRes): UpdateSmsGroupRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSmsGroupRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSmsGroupRes;
  static deserializeBinaryFromReader(message: UpdateSmsGroupRes, reader: jspb.BinaryReader): UpdateSmsGroupRes;
}

export namespace UpdateSmsGroupRes {
  export type AsObject = {
    result: boolean,
  }
}

export class ScheduleSmsReq extends jspb.Message {
  getSmsTemplateSid(): number;
  setSmsTemplateSid(value: number): void;

  getInitialPace(): number;
  setInitialPace(value: number): void;

  getSelectedPhoneCol(): string;
  setSelectedPhoneCol(value: string): void;

  getSourceNumber(): string;
  setSourceNumber(value: string): void;

  getCountrySid(): number;
  setCountrySid(value: number): void;

  getTimezoneRestrictions(): boolean;
  setTimezoneRestrictions(value: boolean): void;

  getGroupName(): string;
  setGroupName(value: string): void;

  getContactGroupSid(): number;
  setContactGroupSid(value: number): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStopTime(): boolean;
  clearStopTime(): void;
  getStopTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStopTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getSelectedMamHuntGroup(): string;
  setSelectedMamHuntGroup(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleSmsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleSmsReq): ScheduleSmsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduleSmsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleSmsReq;
  static deserializeBinaryFromReader(message: ScheduleSmsReq, reader: jspb.BinaryReader): ScheduleSmsReq;
}

export namespace ScheduleSmsReq {
  export type AsObject = {
    smsTemplateSid: number,
    initialPace: number,
    selectedPhoneCol: string,
    sourceNumber: string,
    countrySid: number,
    timezoneRestrictions: boolean,
    groupName: string,
    contactGroupSid: number,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    stopTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    selectedMamHuntGroup: string,
  }
}

export class ScheduleSmsRes extends jspb.Message {
  getSmsGroupSid(): number;
  setSmsGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleSmsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleSmsRes): ScheduleSmsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduleSmsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleSmsRes;
  static deserializeBinaryFromReader(message: ScheduleSmsRes, reader: jspb.BinaryReader): ScheduleSmsRes;
}

export namespace ScheduleSmsRes {
  export type AsObject = {
    smsGroupSid: number,
  }
}

export class ResendUnconnectedSmsReq extends jspb.Message {
  getSmsGroupSid(): number;
  setSmsGroupSid(value: number): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStopTime(): boolean;
  clearStopTime(): void;
  getStopTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStopTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResendUnconnectedSmsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ResendUnconnectedSmsReq): ResendUnconnectedSmsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResendUnconnectedSmsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResendUnconnectedSmsReq;
  static deserializeBinaryFromReader(message: ResendUnconnectedSmsReq, reader: jspb.BinaryReader): ResendUnconnectedSmsReq;
}

export namespace ResendUnconnectedSmsReq {
  export type AsObject = {
    smsGroupSid: number,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    stopTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ResendUnconnectedSmsRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResendUnconnectedSmsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ResendUnconnectedSmsRes): ResendUnconnectedSmsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResendUnconnectedSmsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResendUnconnectedSmsRes;
  static deserializeBinaryFromReader(message: ResendUnconnectedSmsRes, reader: jspb.BinaryReader): ResendUnconnectedSmsRes;
}

export namespace ResendUnconnectedSmsRes {
  export type AsObject = {
    result: boolean,
  }
}

export class SmsActivitySearchReq extends jspb.Message {
  getToNumber(): string;
  setToNumber(value: string): void;

  getSrcNumber(): string;
  setSrcNumber(value: string): void;

  hasFromDate(): boolean;
  clearFromDate(): void;
  getFromDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFromDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasToDate(): boolean;
  clearToDate(): void;
  getToDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setToDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getEntireHistory(): boolean;
  setEntireHistory(value: boolean): void;

  getSentOnly(): boolean;
  setSentOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmsActivitySearchReq.AsObject;
  static toObject(includeInstance: boolean, msg: SmsActivitySearchReq): SmsActivitySearchReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SmsActivitySearchReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmsActivitySearchReq;
  static deserializeBinaryFromReader(message: SmsActivitySearchReq, reader: jspb.BinaryReader): SmsActivitySearchReq;
}

export namespace SmsActivitySearchReq {
  export type AsObject = {
    toNumber: string,
    srcNumber: string,
    fromDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    toDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    entireHistory: boolean,
    sentOnly: boolean,
  }
}

export class SmsActivitySearchRes extends jspb.Message {
  clearSmsGroupWithIntentsList(): void;
  getSmsGroupWithIntentsList(): Array<SmsGroupWithIntents>;
  setSmsGroupWithIntentsList(value: Array<SmsGroupWithIntents>): void;
  addSmsGroupWithIntents(value?: SmsGroupWithIntents, index?: number): SmsGroupWithIntents;

  clearSmsTaskInfoResList(): void;
  getSmsTaskInfoResList(): Array<SmsTaskInfoRes>;
  setSmsTaskInfoResList(value: Array<SmsTaskInfoRes>): void;
  addSmsTaskInfoRes(value?: SmsTaskInfoRes, index?: number): SmsTaskInfoRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmsActivitySearchRes.AsObject;
  static toObject(includeInstance: boolean, msg: SmsActivitySearchRes): SmsActivitySearchRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SmsActivitySearchRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmsActivitySearchRes;
  static deserializeBinaryFromReader(message: SmsActivitySearchRes, reader: jspb.BinaryReader): SmsActivitySearchRes;
}

export namespace SmsActivitySearchRes {
  export type AsObject = {
    smsGroupWithIntentsList: Array<SmsGroupWithIntents.AsObject>,
    smsTaskInfoResList: Array<SmsTaskInfoRes.AsObject>,
  }
}

export class InboundSmsTemplate extends jspb.Message {
  getInboundSmsTemplateId(): string;
  setInboundSmsTemplateId(value: string): void;

  getSmsNumberSid(): number;
  setSmsNumberSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  hasReportSettings(): boolean;
  clearReportSettings(): void;
  getReportSettings(): ReportSettings | undefined;
  setReportSettings(value?: ReportSettings): void;

  hasLastUpdated(): boolean;
  clearLastUpdated(): void;
  getLastUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InboundSmsTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: InboundSmsTemplate): InboundSmsTemplate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InboundSmsTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InboundSmsTemplate;
  static deserializeBinaryFromReader(message: InboundSmsTemplate, reader: jspb.BinaryReader): InboundSmsTemplate;
}

export namespace InboundSmsTemplate {
  export type AsObject = {
    inboundSmsTemplateId: string,
    smsNumberSid: number,
    name: string,
    reportSettings?: ReportSettings.AsObject,
    lastUpdated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListInboundSmsTemplatesReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInboundSmsTemplatesReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListInboundSmsTemplatesReq): ListInboundSmsTemplatesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListInboundSmsTemplatesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInboundSmsTemplatesReq;
  static deserializeBinaryFromReader(message: ListInboundSmsTemplatesReq, reader: jspb.BinaryReader): ListInboundSmsTemplatesReq;
}

export namespace ListInboundSmsTemplatesReq {
  export type AsObject = {
  }
}

export class ListInboundSmsTemplatesRes extends jspb.Message {
  clearInboundSmsTemplateWithIntentsList(): void;
  getInboundSmsTemplateWithIntentsList(): Array<InboundSmsTemplateWithIntents>;
  setInboundSmsTemplateWithIntentsList(value: Array<InboundSmsTemplateWithIntents>): void;
  addInboundSmsTemplateWithIntents(value?: InboundSmsTemplateWithIntents, index?: number): InboundSmsTemplateWithIntents;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInboundSmsTemplatesRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListInboundSmsTemplatesRes): ListInboundSmsTemplatesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListInboundSmsTemplatesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInboundSmsTemplatesRes;
  static deserializeBinaryFromReader(message: ListInboundSmsTemplatesRes, reader: jspb.BinaryReader): ListInboundSmsTemplatesRes;
}

export namespace ListInboundSmsTemplatesRes {
  export type AsObject = {
    inboundSmsTemplateWithIntentsList: Array<InboundSmsTemplateWithIntents.AsObject>,
  }
}

export class InboundSmsTemplateWithIntents extends jspb.Message {
  hasInboundSmsTemplate(): boolean;
  clearInboundSmsTemplate(): void;
  getInboundSmsTemplate(): InboundSmsTemplate | undefined;
  setInboundSmsTemplate(value?: InboundSmsTemplate): void;

  clearSmsIntentTemplatesList(): void;
  getSmsIntentTemplatesList(): Array<SmsIntentTemplate>;
  setSmsIntentTemplatesList(value: Array<SmsIntentTemplate>): void;
  addSmsIntentTemplates(value?: SmsIntentTemplate, index?: number): SmsIntentTemplate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InboundSmsTemplateWithIntents.AsObject;
  static toObject(includeInstance: boolean, msg: InboundSmsTemplateWithIntents): InboundSmsTemplateWithIntents.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InboundSmsTemplateWithIntents, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InboundSmsTemplateWithIntents;
  static deserializeBinaryFromReader(message: InboundSmsTemplateWithIntents, reader: jspb.BinaryReader): InboundSmsTemplateWithIntents;
}

export namespace InboundSmsTemplateWithIntents {
  export type AsObject = {
    inboundSmsTemplate?: InboundSmsTemplate.AsObject,
    smsIntentTemplatesList: Array<SmsIntentTemplate.AsObject>,
  }
}

export class UpdateInboundSmsTemplateReq extends jspb.Message {
  getInboundSmsTemplateId(): string;
  setInboundSmsTemplateId(value: string): void;

  getSmsNumberSid(): number;
  setSmsNumberSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  clearSmsIntentTemplateSidList(): void;
  getSmsIntentTemplateSidList(): Array<number>;
  setSmsIntentTemplateSidList(value: Array<number>): void;
  addSmsIntentTemplateSid(value: number, index?: number): number;

  hasReportSettings(): boolean;
  clearReportSettings(): void;
  getReportSettings(): ReportSettings | undefined;
  setReportSettings(value?: ReportSettings): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInboundSmsTemplateReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInboundSmsTemplateReq): UpdateInboundSmsTemplateReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateInboundSmsTemplateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInboundSmsTemplateReq;
  static deserializeBinaryFromReader(message: UpdateInboundSmsTemplateReq, reader: jspb.BinaryReader): UpdateInboundSmsTemplateReq;
}

export namespace UpdateInboundSmsTemplateReq {
  export type AsObject = {
    inboundSmsTemplateId: string,
    smsNumberSid: number,
    name: string,
    smsIntentTemplateSidList: Array<number>,
    reportSettings?: ReportSettings.AsObject,
  }
}

export class UpdateInboundSmsTemplateRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInboundSmsTemplateRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInboundSmsTemplateRes): UpdateInboundSmsTemplateRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateInboundSmsTemplateRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInboundSmsTemplateRes;
  static deserializeBinaryFromReader(message: UpdateInboundSmsTemplateRes, reader: jspb.BinaryReader): UpdateInboundSmsTemplateRes;
}

export namespace UpdateInboundSmsTemplateRes {
  export type AsObject = {
    result: boolean,
  }
}

export class DeleteInboundSmsTemplateReq extends jspb.Message {
  getInboundSmsTemplateId(): string;
  setInboundSmsTemplateId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteInboundSmsTemplateReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteInboundSmsTemplateReq): DeleteInboundSmsTemplateReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteInboundSmsTemplateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteInboundSmsTemplateReq;
  static deserializeBinaryFromReader(message: DeleteInboundSmsTemplateReq, reader: jspb.BinaryReader): DeleteInboundSmsTemplateReq;
}

export namespace DeleteInboundSmsTemplateReq {
  export type AsObject = {
    inboundSmsTemplateId: string,
  }
}

export class DeleteInboundSmsTemplateRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteInboundSmsTemplateRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteInboundSmsTemplateRes): DeleteInboundSmsTemplateRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteInboundSmsTemplateRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteInboundSmsTemplateRes;
  static deserializeBinaryFromReader(message: DeleteInboundSmsTemplateRes, reader: jspb.BinaryReader): DeleteInboundSmsTemplateRes;
}

export namespace DeleteInboundSmsTemplateRes {
  export type AsObject = {
    result: boolean,
  }
}

export class CreateInboundSmsTemplateReq extends jspb.Message {
  getSmsNumberSid(): number;
  setSmsNumberSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  clearSmsIntentTemplateSidList(): void;
  getSmsIntentTemplateSidList(): Array<number>;
  setSmsIntentTemplateSidList(value: Array<number>): void;
  addSmsIntentTemplateSid(value: number, index?: number): number;

  hasReportSettings(): boolean;
  clearReportSettings(): void;
  getReportSettings(): ReportSettings | undefined;
  setReportSettings(value?: ReportSettings): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInboundSmsTemplateReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInboundSmsTemplateReq): CreateInboundSmsTemplateReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateInboundSmsTemplateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInboundSmsTemplateReq;
  static deserializeBinaryFromReader(message: CreateInboundSmsTemplateReq, reader: jspb.BinaryReader): CreateInboundSmsTemplateReq;
}

export namespace CreateInboundSmsTemplateReq {
  export type AsObject = {
    smsNumberSid: number,
    name: string,
    smsIntentTemplateSidList: Array<number>,
    reportSettings?: ReportSettings.AsObject,
  }
}

export class CreateInboundSmsTemplateRes extends jspb.Message {
  getInboundSmsTemplateId(): string;
  setInboundSmsTemplateId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInboundSmsTemplateRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInboundSmsTemplateRes): CreateInboundSmsTemplateRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateInboundSmsTemplateRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInboundSmsTemplateRes;
  static deserializeBinaryFromReader(message: CreateInboundSmsTemplateRes, reader: jspb.BinaryReader): CreateInboundSmsTemplateRes;
}

export namespace CreateInboundSmsTemplateRes {
  export type AsObject = {
    inboundSmsTemplateId: string,
  }
}

export class GetInboundSmsTemplateByIdReq extends jspb.Message {
  getInboundSmsTemplateId(): string;
  setInboundSmsTemplateId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInboundSmsTemplateByIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetInboundSmsTemplateByIdReq): GetInboundSmsTemplateByIdReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInboundSmsTemplateByIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInboundSmsTemplateByIdReq;
  static deserializeBinaryFromReader(message: GetInboundSmsTemplateByIdReq, reader: jspb.BinaryReader): GetInboundSmsTemplateByIdReq;
}

export namespace GetInboundSmsTemplateByIdReq {
  export type AsObject = {
    inboundSmsTemplateId: string,
  }
}

export class GetInboundSmsTemplateByIdRes extends jspb.Message {
  hasInboundSmsTemplate(): boolean;
  clearInboundSmsTemplate(): void;
  getInboundSmsTemplate(): InboundSmsTemplate | undefined;
  setInboundSmsTemplate(value?: InboundSmsTemplate): void;

  clearSmsIntentTemplatesList(): void;
  getSmsIntentTemplatesList(): Array<SmsIntentTemplate>;
  setSmsIntentTemplatesList(value: Array<SmsIntentTemplate>): void;
  addSmsIntentTemplates(value?: SmsIntentTemplate, index?: number): SmsIntentTemplate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInboundSmsTemplateByIdRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetInboundSmsTemplateByIdRes): GetInboundSmsTemplateByIdRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInboundSmsTemplateByIdRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInboundSmsTemplateByIdRes;
  static deserializeBinaryFromReader(message: GetInboundSmsTemplateByIdRes, reader: jspb.BinaryReader): GetInboundSmsTemplateByIdRes;
}

export namespace GetInboundSmsTemplateByIdRes {
  export type AsObject = {
    inboundSmsTemplate?: InboundSmsTemplate.AsObject,
    smsIntentTemplatesList: Array<SmsIntentTemplate.AsObject>,
  }
}

export class InboundSmsGroupWithIntents extends jspb.Message {
  hasInboundSmsGroup(): boolean;
  clearInboundSmsGroup(): void;
  getInboundSmsGroup(): InboundSmsGroup | undefined;
  setInboundSmsGroup(value?: InboundSmsGroup): void;

  clearSmsIntentTemplatesList(): void;
  getSmsIntentTemplatesList(): Array<SmsIntentTemplate>;
  setSmsIntentTemplatesList(value: Array<SmsIntentTemplate>): void;
  addSmsIntentTemplates(value?: SmsIntentTemplate, index?: number): SmsIntentTemplate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InboundSmsGroupWithIntents.AsObject;
  static toObject(includeInstance: boolean, msg: InboundSmsGroupWithIntents): InboundSmsGroupWithIntents.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InboundSmsGroupWithIntents, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InboundSmsGroupWithIntents;
  static deserializeBinaryFromReader(message: InboundSmsGroupWithIntents, reader: jspb.BinaryReader): InboundSmsGroupWithIntents;
}

export namespace InboundSmsGroupWithIntents {
  export type AsObject = {
    inboundSmsGroup?: InboundSmsGroup.AsObject,
    smsIntentTemplatesList: Array<SmsIntentTemplate.AsObject>,
  }
}

export class InboundSmsGroup extends jspb.Message {
  getInboundSmsGroupId(): string;
  setInboundSmsGroupId(value: string): void;

  getSmsNumberSid(): number;
  setSmsNumberSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getStatus(): api_commons_sms_pb.SMSIBGroupStatusMap[keyof api_commons_sms_pb.SMSIBGroupStatusMap];
  setStatus(value: api_commons_sms_pb.SMSIBGroupStatusMap[keyof api_commons_sms_pb.SMSIBGroupStatusMap]): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStopTime(): boolean;
  clearStopTime(): void;
  getStopTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStopTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTotalCost(): number;
  setTotalCost(value: number): void;

  getInboundSmsTemplateId(): string;
  setInboundSmsTemplateId(value: string): void;

  getMessageCount(): number;
  setMessageCount(value: number): void;

  getTodaysMessageCount(): number;
  setTodaysMessageCount(value: number): void;

  hasReportSettings(): boolean;
  clearReportSettings(): void;
  getReportSettings(): ReportSettings | undefined;
  setReportSettings(value?: ReportSettings): void;

  hasDateCreated(): boolean;
  clearDateCreated(): void;
  getDateCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InboundSmsGroup.AsObject;
  static toObject(includeInstance: boolean, msg: InboundSmsGroup): InboundSmsGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InboundSmsGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InboundSmsGroup;
  static deserializeBinaryFromReader(message: InboundSmsGroup, reader: jspb.BinaryReader): InboundSmsGroup;
}

export namespace InboundSmsGroup {
  export type AsObject = {
    inboundSmsGroupId: string,
    smsNumberSid: number,
    name: string,
    status: api_commons_sms_pb.SMSIBGroupStatusMap[keyof api_commons_sms_pb.SMSIBGroupStatusMap],
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    stopTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    totalCost: number,
    inboundSmsTemplateId: string,
    messageCount: number,
    todaysMessageCount: number,
    reportSettings?: ReportSettings.AsObject,
    dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListInboundSmsGroupsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInboundSmsGroupsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListInboundSmsGroupsReq): ListInboundSmsGroupsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListInboundSmsGroupsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInboundSmsGroupsReq;
  static deserializeBinaryFromReader(message: ListInboundSmsGroupsReq, reader: jspb.BinaryReader): ListInboundSmsGroupsReq;
}

export namespace ListInboundSmsGroupsReq {
  export type AsObject = {
  }
}

export class ListInboundSmsGroupsRes extends jspb.Message {
  clearInboundSmsGroupWithIntentsList(): void;
  getInboundSmsGroupWithIntentsList(): Array<InboundSmsGroupWithIntents>;
  setInboundSmsGroupWithIntentsList(value: Array<InboundSmsGroupWithIntents>): void;
  addInboundSmsGroupWithIntents(value?: InboundSmsGroupWithIntents, index?: number): InboundSmsGroupWithIntents;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInboundSmsGroupsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListInboundSmsGroupsRes): ListInboundSmsGroupsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListInboundSmsGroupsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInboundSmsGroupsRes;
  static deserializeBinaryFromReader(message: ListInboundSmsGroupsRes, reader: jspb.BinaryReader): ListInboundSmsGroupsRes;
}

export namespace ListInboundSmsGroupsRes {
  export type AsObject = {
    inboundSmsGroupWithIntentsList: Array<InboundSmsGroupWithIntents.AsObject>,
  }
}

export class UpdateInboundSmsGroupReq extends jspb.Message {
  getInboundSmsGroupId(): string;
  setInboundSmsGroupId(value: string): void;

  getSmsNumberSid(): number;
  setSmsNumberSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getStatus(): api_commons_sms_pb.SMSIBGroupStatusMap[keyof api_commons_sms_pb.SMSIBGroupStatusMap];
  setStatus(value: api_commons_sms_pb.SMSIBGroupStatusMap[keyof api_commons_sms_pb.SMSIBGroupStatusMap]): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStopTime(): boolean;
  clearStopTime(): void;
  getStopTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStopTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTotalCost(): number;
  setTotalCost(value: number): void;

  getInboundSmsTemplateId(): string;
  setInboundSmsTemplateId(value: string): void;

  hasReportSettings(): boolean;
  clearReportSettings(): void;
  getReportSettings(): ReportSettings | undefined;
  setReportSettings(value?: ReportSettings): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInboundSmsGroupReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInboundSmsGroupReq): UpdateInboundSmsGroupReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateInboundSmsGroupReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInboundSmsGroupReq;
  static deserializeBinaryFromReader(message: UpdateInboundSmsGroupReq, reader: jspb.BinaryReader): UpdateInboundSmsGroupReq;
}

export namespace UpdateInboundSmsGroupReq {
  export type AsObject = {
    inboundSmsGroupId: string,
    smsNumberSid: number,
    name: string,
    status: api_commons_sms_pb.SMSIBGroupStatusMap[keyof api_commons_sms_pb.SMSIBGroupStatusMap],
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    stopTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    totalCost: number,
    inboundSmsTemplateId: string,
    reportSettings?: ReportSettings.AsObject,
  }
}

export class UpdateInboundSmsGroupRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInboundSmsGroupRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInboundSmsGroupRes): UpdateInboundSmsGroupRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateInboundSmsGroupRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInboundSmsGroupRes;
  static deserializeBinaryFromReader(message: UpdateInboundSmsGroupRes, reader: jspb.BinaryReader): UpdateInboundSmsGroupRes;
}

export namespace UpdateInboundSmsGroupRes {
  export type AsObject = {
    result: boolean,
  }
}

export class DeleteInboundSmsGroupReq extends jspb.Message {
  getInboundSmsGroupId(): string;
  setInboundSmsGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteInboundSmsGroupReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteInboundSmsGroupReq): DeleteInboundSmsGroupReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteInboundSmsGroupReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteInboundSmsGroupReq;
  static deserializeBinaryFromReader(message: DeleteInboundSmsGroupReq, reader: jspb.BinaryReader): DeleteInboundSmsGroupReq;
}

export namespace DeleteInboundSmsGroupReq {
  export type AsObject = {
    inboundSmsGroupId: string,
  }
}

export class DeleteInboundSmsGroupRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteInboundSmsGroupRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteInboundSmsGroupRes): DeleteInboundSmsGroupRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteInboundSmsGroupRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteInboundSmsGroupRes;
  static deserializeBinaryFromReader(message: DeleteInboundSmsGroupRes, reader: jspb.BinaryReader): DeleteInboundSmsGroupRes;
}

export namespace DeleteInboundSmsGroupRes {
  export type AsObject = {
    result: boolean,
  }
}

export class CreateInboundSmsGroupReq extends jspb.Message {
  getSmsNumberSid(): number;
  setSmsNumberSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getStatus(): api_commons_sms_pb.SMSIBGroupStatusMap[keyof api_commons_sms_pb.SMSIBGroupStatusMap];
  setStatus(value: api_commons_sms_pb.SMSIBGroupStatusMap[keyof api_commons_sms_pb.SMSIBGroupStatusMap]): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStopTime(): boolean;
  clearStopTime(): void;
  getStopTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStopTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTotalCost(): number;
  setTotalCost(value: number): void;

  getInboundSmsTemplateId(): string;
  setInboundSmsTemplateId(value: string): void;

  hasReportSettings(): boolean;
  clearReportSettings(): void;
  getReportSettings(): ReportSettings | undefined;
  setReportSettings(value?: ReportSettings): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInboundSmsGroupReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInboundSmsGroupReq): CreateInboundSmsGroupReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateInboundSmsGroupReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInboundSmsGroupReq;
  static deserializeBinaryFromReader(message: CreateInboundSmsGroupReq, reader: jspb.BinaryReader): CreateInboundSmsGroupReq;
}

export namespace CreateInboundSmsGroupReq {
  export type AsObject = {
    smsNumberSid: number,
    name: string,
    status: api_commons_sms_pb.SMSIBGroupStatusMap[keyof api_commons_sms_pb.SMSIBGroupStatusMap],
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    stopTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    totalCost: number,
    inboundSmsTemplateId: string,
    reportSettings?: ReportSettings.AsObject,
  }
}

export class CreateInboundSmsGroupRes extends jspb.Message {
  getInboundSmsGroupId(): string;
  setInboundSmsGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInboundSmsGroupRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInboundSmsGroupRes): CreateInboundSmsGroupRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateInboundSmsGroupRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInboundSmsGroupRes;
  static deserializeBinaryFromReader(message: CreateInboundSmsGroupRes, reader: jspb.BinaryReader): CreateInboundSmsGroupRes;
}

export namespace CreateInboundSmsGroupRes {
  export type AsObject = {
    inboundSmsGroupId: string,
  }
}

export class GetInboundSmsGroupByIdReq extends jspb.Message {
  getInboundSmsGroupId(): string;
  setInboundSmsGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInboundSmsGroupByIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetInboundSmsGroupByIdReq): GetInboundSmsGroupByIdReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInboundSmsGroupByIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInboundSmsGroupByIdReq;
  static deserializeBinaryFromReader(message: GetInboundSmsGroupByIdReq, reader: jspb.BinaryReader): GetInboundSmsGroupByIdReq;
}

export namespace GetInboundSmsGroupByIdReq {
  export type AsObject = {
    inboundSmsGroupId: string,
  }
}

export class GetInboundSmsGroupByIdRes extends jspb.Message {
  hasInboundSmsGroupWithIntents(): boolean;
  clearInboundSmsGroupWithIntents(): void;
  getInboundSmsGroupWithIntents(): InboundSmsGroupWithIntents | undefined;
  setInboundSmsGroupWithIntents(value?: InboundSmsGroupWithIntents): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInboundSmsGroupByIdRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetInboundSmsGroupByIdRes): GetInboundSmsGroupByIdRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInboundSmsGroupByIdRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInboundSmsGroupByIdRes;
  static deserializeBinaryFromReader(message: GetInboundSmsGroupByIdRes, reader: jspb.BinaryReader): GetInboundSmsGroupByIdRes;
}

export namespace GetInboundSmsGroupByIdRes {
  export type AsObject = {
    inboundSmsGroupWithIntents?: InboundSmsGroupWithIntents.AsObject,
  }
}

export class ListActiveInboundSmsGroupsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListActiveInboundSmsGroupsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListActiveInboundSmsGroupsReq): ListActiveInboundSmsGroupsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListActiveInboundSmsGroupsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListActiveInboundSmsGroupsReq;
  static deserializeBinaryFromReader(message: ListActiveInboundSmsGroupsReq, reader: jspb.BinaryReader): ListActiveInboundSmsGroupsReq;
}

export namespace ListActiveInboundSmsGroupsReq {
  export type AsObject = {
  }
}

export class ListActiveInboundSmsGroupsRes extends jspb.Message {
  clearInboundSmsGroupWithIntentsList(): void;
  getInboundSmsGroupWithIntentsList(): Array<InboundSmsGroupWithIntents>;
  setInboundSmsGroupWithIntentsList(value: Array<InboundSmsGroupWithIntents>): void;
  addInboundSmsGroupWithIntents(value?: InboundSmsGroupWithIntents, index?: number): InboundSmsGroupWithIntents;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListActiveInboundSmsGroupsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListActiveInboundSmsGroupsRes): ListActiveInboundSmsGroupsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListActiveInboundSmsGroupsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListActiveInboundSmsGroupsRes;
  static deserializeBinaryFromReader(message: ListActiveInboundSmsGroupsRes, reader: jspb.BinaryReader): ListActiveInboundSmsGroupsRes;
}

export namespace ListActiveInboundSmsGroupsRes {
  export type AsObject = {
    inboundSmsGroupWithIntentsList: Array<InboundSmsGroupWithIntents.AsObject>,
  }
}

export class ListInboundSmsGroupByFiltersReq extends jspb.Message {
  hasSearchFrom(): boolean;
  clearSearchFrom(): void;
  getSearchFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSearchFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasSearchTo(): boolean;
  clearSearchTo(): void;
  getSearchTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSearchTo(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getStatus(): string;
  setStatus(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInboundSmsGroupByFiltersReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListInboundSmsGroupByFiltersReq): ListInboundSmsGroupByFiltersReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListInboundSmsGroupByFiltersReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInboundSmsGroupByFiltersReq;
  static deserializeBinaryFromReader(message: ListInboundSmsGroupByFiltersReq, reader: jspb.BinaryReader): ListInboundSmsGroupByFiltersReq;
}

export namespace ListInboundSmsGroupByFiltersReq {
  export type AsObject = {
    searchFrom?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    searchTo?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: string,
    name: string,
  }
}

export class ListInboundSmsGroupByFiltersRes extends jspb.Message {
  clearInboundSmsGroupWithIntentsList(): void;
  getInboundSmsGroupWithIntentsList(): Array<InboundSmsGroupWithIntents>;
  setInboundSmsGroupWithIntentsList(value: Array<InboundSmsGroupWithIntents>): void;
  addInboundSmsGroupWithIntents(value?: InboundSmsGroupWithIntents, index?: number): InboundSmsGroupWithIntents;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInboundSmsGroupByFiltersRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListInboundSmsGroupByFiltersRes): ListInboundSmsGroupByFiltersRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListInboundSmsGroupByFiltersRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInboundSmsGroupByFiltersRes;
  static deserializeBinaryFromReader(message: ListInboundSmsGroupByFiltersRes, reader: jspb.BinaryReader): ListInboundSmsGroupByFiltersRes;
}

export namespace ListInboundSmsGroupByFiltersRes {
  export type AsObject = {
    inboundSmsGroupWithIntentsList: Array<InboundSmsGroupWithIntents.AsObject>,
  }
}

export class ListInboundSmsGroupsByGroupIdsReq extends jspb.Message {
  clearInboundSmsGroupIdsArrList(): void;
  getInboundSmsGroupIdsArrList(): Array<string>;
  setInboundSmsGroupIdsArrList(value: Array<string>): void;
  addInboundSmsGroupIdsArr(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInboundSmsGroupsByGroupIdsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListInboundSmsGroupsByGroupIdsReq): ListInboundSmsGroupsByGroupIdsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListInboundSmsGroupsByGroupIdsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInboundSmsGroupsByGroupIdsReq;
  static deserializeBinaryFromReader(message: ListInboundSmsGroupsByGroupIdsReq, reader: jspb.BinaryReader): ListInboundSmsGroupsByGroupIdsReq;
}

export namespace ListInboundSmsGroupsByGroupIdsReq {
  export type AsObject = {
    inboundSmsGroupIdsArrList: Array<string>,
  }
}

export class ListInboundSmsGroupsByGroupIdsRes extends jspb.Message {
  clearInboundSmsGroupWithIntentsList(): void;
  getInboundSmsGroupWithIntentsList(): Array<InboundSmsGroupWithIntents>;
  setInboundSmsGroupWithIntentsList(value: Array<InboundSmsGroupWithIntents>): void;
  addInboundSmsGroupWithIntents(value?: InboundSmsGroupWithIntents, index?: number): InboundSmsGroupWithIntents;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInboundSmsGroupsByGroupIdsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListInboundSmsGroupsByGroupIdsRes): ListInboundSmsGroupsByGroupIdsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListInboundSmsGroupsByGroupIdsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInboundSmsGroupsByGroupIdsRes;
  static deserializeBinaryFromReader(message: ListInboundSmsGroupsByGroupIdsRes, reader: jspb.BinaryReader): ListInboundSmsGroupsByGroupIdsRes;
}

export namespace ListInboundSmsGroupsByGroupIdsRes {
  export type AsObject = {
    inboundSmsGroupWithIntentsList: Array<InboundSmsGroupWithIntents.AsObject>,
  }
}

export class ScheduleInboundSmsReq extends jspb.Message {
  getInboundSmsTemplateId(): string;
  setInboundSmsTemplateId(value: string): void;

  getSmsNumberSid(): number;
  setSmsNumberSid(value: number): void;

  getGroupName(): string;
  setGroupName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleInboundSmsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleInboundSmsReq): ScheduleInboundSmsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduleInboundSmsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleInboundSmsReq;
  static deserializeBinaryFromReader(message: ScheduleInboundSmsReq, reader: jspb.BinaryReader): ScheduleInboundSmsReq;
}

export namespace ScheduleInboundSmsReq {
  export type AsObject = {
    inboundSmsTemplateId: string,
    smsNumberSid: number,
    groupName: string,
  }
}

export class ScheduleInboundSmsRes extends jspb.Message {
  getInboundSmsGroupId(): string;
  setInboundSmsGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleInboundSmsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleInboundSmsRes): ScheduleInboundSmsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduleInboundSmsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleInboundSmsRes;
  static deserializeBinaryFromReader(message: ScheduleInboundSmsRes, reader: jspb.BinaryReader): ScheduleInboundSmsRes;
}

export namespace ScheduleInboundSmsRes {
  export type AsObject = {
    inboundSmsGroupId: string,
  }
}

export class StopInboundSmsGroupReq extends jspb.Message {
  getInboundSmsGroupId(): string;
  setInboundSmsGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopInboundSmsGroupReq.AsObject;
  static toObject(includeInstance: boolean, msg: StopInboundSmsGroupReq): StopInboundSmsGroupReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopInboundSmsGroupReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopInboundSmsGroupReq;
  static deserializeBinaryFromReader(message: StopInboundSmsGroupReq, reader: jspb.BinaryReader): StopInboundSmsGroupReq;
}

export namespace StopInboundSmsGroupReq {
  export type AsObject = {
    inboundSmsGroupId: string,
  }
}

export class StopInboundSmsGroupRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopInboundSmsGroupRes.AsObject;
  static toObject(includeInstance: boolean, msg: StopInboundSmsGroupRes): StopInboundSmsGroupRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopInboundSmsGroupRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopInboundSmsGroupRes;
  static deserializeBinaryFromReader(message: StopInboundSmsGroupRes, reader: jspb.BinaryReader): StopInboundSmsGroupRes;
}

export namespace StopInboundSmsGroupRes {
  export type AsObject = {
    result: boolean,
  }
}

export class SmsConversation extends jspb.Message {
  getSmsConversationId(): string;
  setSmsConversationId(value: string): void;

  getInboundSmsGroupId(): string;
  setInboundSmsGroupId(value: string): void;

  hasSmsTaskParent(): boolean;
  clearSmsTaskParent(): void;
  getSmsTaskParent(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setSmsTaskParent(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasCreatedOn(): boolean;
  clearCreatedOn(): void;
  getCreatedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedOn(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmsConversation.AsObject;
  static toObject(includeInstance: boolean, msg: SmsConversation): SmsConversation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SmsConversation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmsConversation;
  static deserializeBinaryFromReader(message: SmsConversation, reader: jspb.BinaryReader): SmsConversation;
}

export namespace SmsConversation {
  export type AsObject = {
    smsConversationId: string,
    inboundSmsGroupId: string,
    smsTaskParent?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    createdOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListSmsConversationsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSmsConversationsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListSmsConversationsReq): ListSmsConversationsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSmsConversationsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSmsConversationsReq;
  static deserializeBinaryFromReader(message: ListSmsConversationsReq, reader: jspb.BinaryReader): ListSmsConversationsReq;
}

export namespace ListSmsConversationsReq {
  export type AsObject = {
  }
}

export class ListSmsConversationsRes extends jspb.Message {
  clearSmsConversationsList(): void;
  getSmsConversationsList(): Array<SmsConversation>;
  setSmsConversationsList(value: Array<SmsConversation>): void;
  addSmsConversations(value?: SmsConversation, index?: number): SmsConversation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSmsConversationsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListSmsConversationsRes): ListSmsConversationsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSmsConversationsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSmsConversationsRes;
  static deserializeBinaryFromReader(message: ListSmsConversationsRes, reader: jspb.BinaryReader): ListSmsConversationsRes;
}

export namespace ListSmsConversationsRes {
  export type AsObject = {
    smsConversationsList: Array<SmsConversation.AsObject>,
  }
}

export class UpdateSmsConversationReq extends jspb.Message {
  getSmsConversationId(): string;
  setSmsConversationId(value: string): void;

  getInboundSmsGroupId(): string;
  setInboundSmsGroupId(value: string): void;

  hasSmsTaskParent(): boolean;
  clearSmsTaskParent(): void;
  getSmsTaskParent(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setSmsTaskParent(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSmsConversationReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSmsConversationReq): UpdateSmsConversationReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSmsConversationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSmsConversationReq;
  static deserializeBinaryFromReader(message: UpdateSmsConversationReq, reader: jspb.BinaryReader): UpdateSmsConversationReq;
}

export namespace UpdateSmsConversationReq {
  export type AsObject = {
    smsConversationId: string,
    inboundSmsGroupId: string,
    smsTaskParent?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class UpdateSmsConversationRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSmsConversationRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSmsConversationRes): UpdateSmsConversationRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSmsConversationRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSmsConversationRes;
  static deserializeBinaryFromReader(message: UpdateSmsConversationRes, reader: jspb.BinaryReader): UpdateSmsConversationRes;
}

export namespace UpdateSmsConversationRes {
  export type AsObject = {
    result: boolean,
  }
}

export class DeleteSmsConversationReq extends jspb.Message {
  getSmsConversationId(): string;
  setSmsConversationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSmsConversationReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSmsConversationReq): DeleteSmsConversationReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSmsConversationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSmsConversationReq;
  static deserializeBinaryFromReader(message: DeleteSmsConversationReq, reader: jspb.BinaryReader): DeleteSmsConversationReq;
}

export namespace DeleteSmsConversationReq {
  export type AsObject = {
    smsConversationId: string,
  }
}

export class DeleteSmsConversationRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSmsConversationRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSmsConversationRes): DeleteSmsConversationRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSmsConversationRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSmsConversationRes;
  static deserializeBinaryFromReader(message: DeleteSmsConversationRes, reader: jspb.BinaryReader): DeleteSmsConversationRes;
}

export namespace DeleteSmsConversationRes {
  export type AsObject = {
    result: boolean,
  }
}

export class CreateSmsConversationReq extends jspb.Message {
  getInboundSmsGroupId(): string;
  setInboundSmsGroupId(value: string): void;

  hasSmsTaskParent(): boolean;
  clearSmsTaskParent(): void;
  getSmsTaskParent(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setSmsTaskParent(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSmsConversationReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSmsConversationReq): CreateSmsConversationReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSmsConversationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSmsConversationReq;
  static deserializeBinaryFromReader(message: CreateSmsConversationReq, reader: jspb.BinaryReader): CreateSmsConversationReq;
}

export namespace CreateSmsConversationReq {
  export type AsObject = {
    inboundSmsGroupId: string,
    smsTaskParent?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class CreateSmsConversationRes extends jspb.Message {
  getSmsConversationId(): string;
  setSmsConversationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSmsConversationRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSmsConversationRes): CreateSmsConversationRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSmsConversationRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSmsConversationRes;
  static deserializeBinaryFromReader(message: CreateSmsConversationRes, reader: jspb.BinaryReader): CreateSmsConversationRes;
}

export namespace CreateSmsConversationRes {
  export type AsObject = {
    smsConversationId: string,
  }
}

export class GetSmsConversationByIdReq extends jspb.Message {
  getSmsConversationId(): string;
  setSmsConversationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSmsConversationByIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetSmsConversationByIdReq): GetSmsConversationByIdReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSmsConversationByIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSmsConversationByIdReq;
  static deserializeBinaryFromReader(message: GetSmsConversationByIdReq, reader: jspb.BinaryReader): GetSmsConversationByIdReq;
}

export namespace GetSmsConversationByIdReq {
  export type AsObject = {
    smsConversationId: string,
  }
}

export class GetSmsConversationByIdRes extends jspb.Message {
  hasSmsConversation(): boolean;
  clearSmsConversation(): void;
  getSmsConversation(): SmsConversation | undefined;
  setSmsConversation(value?: SmsConversation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSmsConversationByIdRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetSmsConversationByIdRes): GetSmsConversationByIdRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSmsConversationByIdRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSmsConversationByIdRes;
  static deserializeBinaryFromReader(message: GetSmsConversationByIdRes, reader: jspb.BinaryReader): GetSmsConversationByIdRes;
}

export namespace GetSmsConversationByIdRes {
  export type AsObject = {
    smsConversation?: SmsConversation.AsObject,
  }
}

export class ListSmsConversationAuditsReq extends jspb.Message {
  getSmsConversationId(): string;
  setSmsConversationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSmsConversationAuditsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListSmsConversationAuditsReq): ListSmsConversationAuditsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSmsConversationAuditsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSmsConversationAuditsReq;
  static deserializeBinaryFromReader(message: ListSmsConversationAuditsReq, reader: jspb.BinaryReader): ListSmsConversationAuditsReq;
}

export namespace ListSmsConversationAuditsReq {
  export type AsObject = {
    smsConversationId: string,
  }
}

export class ListSmsConversationAuditsRes extends jspb.Message {
  clearSmsConversationAuditsList(): void;
  getSmsConversationAuditsList(): Array<SmsConversationAudit>;
  setSmsConversationAuditsList(value: Array<SmsConversationAudit>): void;
  addSmsConversationAudits(value?: SmsConversationAudit, index?: number): SmsConversationAudit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSmsConversationAuditsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListSmsConversationAuditsRes): ListSmsConversationAuditsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSmsConversationAuditsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSmsConversationAuditsRes;
  static deserializeBinaryFromReader(message: ListSmsConversationAuditsRes, reader: jspb.BinaryReader): ListSmsConversationAuditsRes;
}

export namespace ListSmsConversationAuditsRes {
  export type AsObject = {
    smsConversationAuditsList: Array<SmsConversationAudit.AsObject>,
  }
}

export class CreateSmsConversationAuditRes extends jspb.Message {
  getSmsConversationAuditId(): string;
  setSmsConversationAuditId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSmsConversationAuditRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSmsConversationAuditRes): CreateSmsConversationAuditRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSmsConversationAuditRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSmsConversationAuditRes;
  static deserializeBinaryFromReader(message: CreateSmsConversationAuditRes, reader: jspb.BinaryReader): CreateSmsConversationAuditRes;
}

export namespace CreateSmsConversationAuditRes {
  export type AsObject = {
    smsConversationAuditId: string,
  }
}

export class GetSmsConversationAuditByIdReq extends jspb.Message {
  getSmsConversationAuditId(): string;
  setSmsConversationAuditId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSmsConversationAuditByIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetSmsConversationAuditByIdReq): GetSmsConversationAuditByIdReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSmsConversationAuditByIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSmsConversationAuditByIdReq;
  static deserializeBinaryFromReader(message: GetSmsConversationAuditByIdReq, reader: jspb.BinaryReader): GetSmsConversationAuditByIdReq;
}

export namespace GetSmsConversationAuditByIdReq {
  export type AsObject = {
    smsConversationAuditId: string,
  }
}

export class GetSmsConversationAuditByIdRes extends jspb.Message {
  hasSmsConversationAudit(): boolean;
  clearSmsConversationAudit(): void;
  getSmsConversationAudit(): SmsConversationAudit | undefined;
  setSmsConversationAudit(value?: SmsConversationAudit): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSmsConversationAuditByIdRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetSmsConversationAuditByIdRes): GetSmsConversationAuditByIdRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSmsConversationAuditByIdRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSmsConversationAuditByIdRes;
  static deserializeBinaryFromReader(message: GetSmsConversationAuditByIdRes, reader: jspb.BinaryReader): GetSmsConversationAuditByIdRes;
}

export namespace GetSmsConversationAuditByIdRes {
  export type AsObject = {
    smsConversationAudit?: SmsConversationAudit.AsObject,
  }
}

export class ListSmsConversationAssignedAgentsReq extends jspb.Message {
  getSmsConversationId(): string;
  setSmsConversationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSmsConversationAssignedAgentsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListSmsConversationAssignedAgentsReq): ListSmsConversationAssignedAgentsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSmsConversationAssignedAgentsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSmsConversationAssignedAgentsReq;
  static deserializeBinaryFromReader(message: ListSmsConversationAssignedAgentsReq, reader: jspb.BinaryReader): ListSmsConversationAssignedAgentsReq;
}

export namespace ListSmsConversationAssignedAgentsReq {
  export type AsObject = {
    smsConversationId: string,
  }
}

export class ListSmsConversationAssignedAgentsRes extends jspb.Message {
  clearSmsConversationAssignedAgentsList(): void;
  getSmsConversationAssignedAgentsList(): Array<SmsConversationAssignedAgent>;
  setSmsConversationAssignedAgentsList(value: Array<SmsConversationAssignedAgent>): void;
  addSmsConversationAssignedAgents(value?: SmsConversationAssignedAgent, index?: number): SmsConversationAssignedAgent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSmsConversationAssignedAgentsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListSmsConversationAssignedAgentsRes): ListSmsConversationAssignedAgentsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSmsConversationAssignedAgentsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSmsConversationAssignedAgentsRes;
  static deserializeBinaryFromReader(message: ListSmsConversationAssignedAgentsRes, reader: jspb.BinaryReader): ListSmsConversationAssignedAgentsRes;
}

export namespace ListSmsConversationAssignedAgentsRes {
  export type AsObject = {
    smsConversationAssignedAgentsList: Array<SmsConversationAssignedAgent.AsObject>,
  }
}

export class CreateSmsConversationAssignedAgentRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSmsConversationAssignedAgentRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSmsConversationAssignedAgentRes): CreateSmsConversationAssignedAgentRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSmsConversationAssignedAgentRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSmsConversationAssignedAgentRes;
  static deserializeBinaryFromReader(message: CreateSmsConversationAssignedAgentRes, reader: jspb.BinaryReader): CreateSmsConversationAssignedAgentRes;
}

export namespace CreateSmsConversationAssignedAgentRes {
  export type AsObject = {
    result: boolean,
  }
}

export class GetSmsConversationAssignedAgentByIdReq extends jspb.Message {
  getSmsConversationId(): string;
  setSmsConversationId(value: string): void;

  getAssignedAgentId(): number;
  setAssignedAgentId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSmsConversationAssignedAgentByIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetSmsConversationAssignedAgentByIdReq): GetSmsConversationAssignedAgentByIdReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSmsConversationAssignedAgentByIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSmsConversationAssignedAgentByIdReq;
  static deserializeBinaryFromReader(message: GetSmsConversationAssignedAgentByIdReq, reader: jspb.BinaryReader): GetSmsConversationAssignedAgentByIdReq;
}

export namespace GetSmsConversationAssignedAgentByIdReq {
  export type AsObject = {
    smsConversationId: string,
    assignedAgentId: number,
  }
}

export class GetSmsConversationAssignedAgentByIdRes extends jspb.Message {
  hasSmsConversationAssignedAgent(): boolean;
  clearSmsConversationAssignedAgent(): void;
  getSmsConversationAssignedAgent(): SmsConversationAssignedAgent | undefined;
  setSmsConversationAssignedAgent(value?: SmsConversationAssignedAgent): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSmsConversationAssignedAgentByIdRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetSmsConversationAssignedAgentByIdRes): GetSmsConversationAssignedAgentByIdRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSmsConversationAssignedAgentByIdRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSmsConversationAssignedAgentByIdRes;
  static deserializeBinaryFromReader(message: GetSmsConversationAssignedAgentByIdRes, reader: jspb.BinaryReader): GetSmsConversationAssignedAgentByIdRes;
}

export namespace GetSmsConversationAssignedAgentByIdRes {
  export type AsObject = {
    smsConversationAssignedAgent?: SmsConversationAssignedAgent.AsObject,
  }
}

export class SmsConversationAudit extends jspb.Message {
  getSmsConversationAuditId(): string;
  setSmsConversationAuditId(value: string): void;

  getSmsConversationId(): string;
  setSmsConversationId(value: string): void;

  getSmsTaskSid(): number;
  setSmsTaskSid(value: number): void;

  getSmsReceivedRepliesSid(): number;
  setSmsReceivedRepliesSid(value: number): void;

  getAction(): number;
  setAction(value: number): void;

  getDescription(): string;
  setDescription(value: string): void;

  getAgentId(): number;
  setAgentId(value: number): void;

  hasCreatedOn(): boolean;
  clearCreatedOn(): void;
  getCreatedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedOn(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmsConversationAudit.AsObject;
  static toObject(includeInstance: boolean, msg: SmsConversationAudit): SmsConversationAudit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SmsConversationAudit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmsConversationAudit;
  static deserializeBinaryFromReader(message: SmsConversationAudit, reader: jspb.BinaryReader): SmsConversationAudit;
}

export namespace SmsConversationAudit {
  export type AsObject = {
    smsConversationAuditId: string,
    smsConversationId: string,
    smsTaskSid: number,
    smsReceivedRepliesSid: number,
    action: number,
    description: string,
    agentId: number,
    createdOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class SmsConversationAssignedAgent extends jspb.Message {
  getSmsConversationId(): string;
  setSmsConversationId(value: string): void;

  getAssignedAgentId(): number;
  setAssignedAgentId(value: number): void;

  getPrimaryAgent(): boolean;
  setPrimaryAgent(value: boolean): void;

  getNotify(): boolean;
  setNotify(value: boolean): void;

  hasCreatedOn(): boolean;
  clearCreatedOn(): void;
  getCreatedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedOn(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmsConversationAssignedAgent.AsObject;
  static toObject(includeInstance: boolean, msg: SmsConversationAssignedAgent): SmsConversationAssignedAgent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SmsConversationAssignedAgent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmsConversationAssignedAgent;
  static deserializeBinaryFromReader(message: SmsConversationAssignedAgent, reader: jspb.BinaryReader): SmsConversationAssignedAgent;
}

export namespace SmsConversationAssignedAgent {
  export type AsObject = {
    smsConversationId: string,
    assignedAgentId: number,
    primaryAgent: boolean,
    notify: boolean,
    createdOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetSmsMessageReq extends jspb.Message {
  getSmsMessageSid(): number;
  setSmsMessageSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSmsMessageReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetSmsMessageReq): GetSmsMessageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSmsMessageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSmsMessageReq;
  static deserializeBinaryFromReader(message: GetSmsMessageReq, reader: jspb.BinaryReader): GetSmsMessageReq;
}

export namespace GetSmsMessageReq {
  export type AsObject = {
    smsMessageSid: number,
  }
}

export class GetSmsMessageRes extends jspb.Message {
  hasSmsMessage(): boolean;
  clearSmsMessage(): void;
  getSmsMessage(): SmsMessage | undefined;
  setSmsMessage(value?: SmsMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSmsMessageRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetSmsMessageRes): GetSmsMessageRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSmsMessageRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSmsMessageRes;
  static deserializeBinaryFromReader(message: GetSmsMessageRes, reader: jspb.BinaryReader): GetSmsMessageRes;
}

export namespace GetSmsMessageRes {
  export type AsObject = {
    smsMessage?: SmsMessage.AsObject,
  }
}

export class SmsMessage extends jspb.Message {
  getSmsMessageSid(): number;
  setSmsMessageSid(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmsMessage.AsObject;
  static toObject(includeInstance: boolean, msg: SmsMessage): SmsMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SmsMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmsMessage;
  static deserializeBinaryFromReader(message: SmsMessage, reader: jspb.BinaryReader): SmsMessage;
}

export namespace SmsMessage {
  export type AsObject = {
    smsMessageSid: number,
    message: string,
  }
}

export class SmsIntentGroup extends jspb.Message {
  getSmsIntentGroupSid(): number;
  setSmsIntentGroupSid(value: number): void;

  getSmsGroupSid(): number;
  setSmsGroupSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getActionKey(): string;
  setActionKey(value: string): void;

  getActionDetail(): string;
  setActionDetail(value: string): void;

  getActionTrigger(): string;
  setActionTrigger(value: string): void;

  getPriority(): number;
  setPriority(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmsIntentGroup.AsObject;
  static toObject(includeInstance: boolean, msg: SmsIntentGroup): SmsIntentGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SmsIntentGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmsIntentGroup;
  static deserializeBinaryFromReader(message: SmsIntentGroup, reader: jspb.BinaryReader): SmsIntentGroup;
}

export namespace SmsIntentGroup {
  export type AsObject = {
    smsIntentGroupSid: number,
    smsGroupSid: number,
    name: string,
    description: string,
    actionKey: string,
    actionDetail: string,
    actionTrigger: string,
    priority: number,
  }
}

export class InboundSmsTask extends jspb.Message {
  getSmsReceivedRepliesId(): number;
  setSmsReceivedRepliesId(value: number): void;

  getSrcNumber(): string;
  setSrcNumber(value: string): void;

  getDstNumber(): string;
  setDstNumber(value: string): void;

  getMsgId(): string;
  setMsgId(value: string): void;

  getReceivedReply(): string;
  setReceivedReply(value: string): void;

  hasReceivedTime(): boolean;
  clearReceivedTime(): void;
  getReceivedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReceivedTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getInboundSmsGroupId(): string;
  setInboundSmsGroupId(value: string): void;

  getCost(): number;
  setCost(value: number): void;

  getStatus(): api_commons_sms_pb.SMSIBTaskStatusMap[keyof api_commons_sms_pb.SMSIBTaskStatusMap];
  setStatus(value: api_commons_sms_pb.SMSIBTaskStatusMap[keyof api_commons_sms_pb.SMSIBTaskStatusMap]): void;

  getAnalysisReport(): string;
  setAnalysisReport(value: string): void;

  getUnits(): number;
  setUnits(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InboundSmsTask.AsObject;
  static toObject(includeInstance: boolean, msg: InboundSmsTask): InboundSmsTask.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InboundSmsTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InboundSmsTask;
  static deserializeBinaryFromReader(message: InboundSmsTask, reader: jspb.BinaryReader): InboundSmsTask;
}

export namespace InboundSmsTask {
  export type AsObject = {
    smsReceivedRepliesId: number,
    srcNumber: string,
    dstNumber: string,
    msgId: string,
    receivedReply: string,
    receivedTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    inboundSmsGroupId: string,
    cost: number,
    status: api_commons_sms_pb.SMSIBTaskStatusMap[keyof api_commons_sms_pb.SMSIBTaskStatusMap],
    analysisReport: string,
    units: number,
  }
}

export class ListInboundSmsTasksByGroupIdsReq extends jspb.Message {
  clearInboundSmsGroupIdsArrList(): void;
  getInboundSmsGroupIdsArrList(): Array<string>;
  setInboundSmsGroupIdsArrList(value: Array<string>): void;
  addInboundSmsGroupIdsArr(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInboundSmsTasksByGroupIdsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListInboundSmsTasksByGroupIdsReq): ListInboundSmsTasksByGroupIdsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListInboundSmsTasksByGroupIdsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInboundSmsTasksByGroupIdsReq;
  static deserializeBinaryFromReader(message: ListInboundSmsTasksByGroupIdsReq, reader: jspb.BinaryReader): ListInboundSmsTasksByGroupIdsReq;
}

export namespace ListInboundSmsTasksByGroupIdsReq {
  export type AsObject = {
    inboundSmsGroupIdsArrList: Array<string>,
  }
}

export class ListInboundSmsTasksByGroupIdsRes extends jspb.Message {
  clearInboundSmsTasksList(): void;
  getInboundSmsTasksList(): Array<InboundSmsTask>;
  setInboundSmsTasksList(value: Array<InboundSmsTask>): void;
  addInboundSmsTasks(value?: InboundSmsTask, index?: number): InboundSmsTask;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInboundSmsTasksByGroupIdsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListInboundSmsTasksByGroupIdsRes): ListInboundSmsTasksByGroupIdsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListInboundSmsTasksByGroupIdsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInboundSmsTasksByGroupIdsRes;
  static deserializeBinaryFromReader(message: ListInboundSmsTasksByGroupIdsRes, reader: jspb.BinaryReader): ListInboundSmsTasksByGroupIdsRes;
}

export namespace ListInboundSmsTasksByGroupIdsRes {
  export type AsObject = {
    inboundSmsTasksList: Array<InboundSmsTask.AsObject>,
  }
}

export class ReportSettings extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  getDeliveryMethod(): string;
  setDeliveryMethod(value: string): void;

  getReportTemplateSid(): number;
  setReportTemplateSid(value: number): void;

  hasSmsSettings(): boolean;
  clearSmsSettings(): void;
  getSmsSettings(): SmsSettings | undefined;
  setSmsSettings(value?: SmsSettings): void;

  hasEmailSettings(): boolean;
  clearEmailSettings(): void;
  getEmailSettings(): EmailSettings | undefined;
  setEmailSettings(value?: EmailSettings): void;

  hasFtpSettings(): boolean;
  clearFtpSettings(): void;
  getFtpSettings(): FtpSettings | undefined;
  setFtpSettings(value?: FtpSettings): void;

  hasSftpSettings(): boolean;
  clearSftpSettings(): void;
  getSftpSettings(): SftpSettings | undefined;
  setSftpSettings(value?: SftpSettings): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportSettings.AsObject;
  static toObject(includeInstance: boolean, msg: ReportSettings): ReportSettings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReportSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportSettings;
  static deserializeBinaryFromReader(message: ReportSettings, reader: jspb.BinaryReader): ReportSettings;
}

export namespace ReportSettings {
  export type AsObject = {
    enabled: boolean,
    deliveryMethod: string,
    reportTemplateSid: number,
    smsSettings?: SmsSettings.AsObject,
    emailSettings?: EmailSettings.AsObject,
    ftpSettings?: FtpSettings.AsObject,
    sftpSettings?: SftpSettings.AsObject,
  }
}

export class SmsSettings extends jspb.Message {
  clearPhoneNumbersList(): void;
  getPhoneNumbersList(): Array<string>;
  setPhoneNumbersList(value: Array<string>): void;
  addPhoneNumbers(value: string, index?: number): string;

  getSrcNumber(): string;
  setSrcNumber(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmsSettings.AsObject;
  static toObject(includeInstance: boolean, msg: SmsSettings): SmsSettings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SmsSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmsSettings;
  static deserializeBinaryFromReader(message: SmsSettings, reader: jspb.BinaryReader): SmsSettings;
}

export namespace SmsSettings {
  export type AsObject = {
    phoneNumbersList: Array<string>,
    srcNumber: string,
  }
}

export class EmailSettings extends jspb.Message {
  getReportType(): string;
  setReportType(value: string): void;

  clearEmailAddressesList(): void;
  getEmailAddressesList(): Array<string>;
  setEmailAddressesList(value: Array<string>): void;
  addEmailAddresses(value: string, index?: number): string;

  getReportFormat(): string;
  setReportFormat(value: string): void;

  getFromEmailAddress(): string;
  setFromEmailAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailSettings.AsObject;
  static toObject(includeInstance: boolean, msg: EmailSettings): EmailSettings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmailSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailSettings;
  static deserializeBinaryFromReader(message: EmailSettings, reader: jspb.BinaryReader): EmailSettings;
}

export namespace EmailSettings {
  export type AsObject = {
    reportType: string,
    emailAddressesList: Array<string>,
    reportFormat: string,
    fromEmailAddress: string,
  }
}

export class FtpSettings extends jspb.Message {
  getPasswd(): string;
  setPasswd(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getReportFormat(): string;
  setReportFormat(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FtpSettings.AsObject;
  static toObject(includeInstance: boolean, msg: FtpSettings): FtpSettings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FtpSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FtpSettings;
  static deserializeBinaryFromReader(message: FtpSettings, reader: jspb.BinaryReader): FtpSettings;
}

export namespace FtpSettings {
  export type AsObject = {
    passwd: string,
    username: string,
    reportFormat: string,
    path: string,
    url: string,
  }
}

export class SftpSettings extends jspb.Message {
  getPasswd(): string;
  setPasswd(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getReportFormat(): string;
  setReportFormat(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  getAuthenticationType(): string;
  setAuthenticationType(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  getPrivateKey(): string;
  setPrivateKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SftpSettings.AsObject;
  static toObject(includeInstance: boolean, msg: SftpSettings): SftpSettings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SftpSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SftpSettings;
  static deserializeBinaryFromReader(message: SftpSettings, reader: jspb.BinaryReader): SftpSettings;
}

export namespace SftpSettings {
  export type AsObject = {
    passwd: string,
    username: string,
    reportFormat: string,
    path: string,
    authenticationType: string,
    url: string,
    privateKey: string,
  }
}

export class SmsMamSettings extends jspb.Message {
  getMamHgSid(): string;
  setMamHgSid(value: string): void;

  getMamHgName(): string;
  setMamHgName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmsMamSettings.AsObject;
  static toObject(includeInstance: boolean, msg: SmsMamSettings): SmsMamSettings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SmsMamSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmsMamSettings;
  static deserializeBinaryFromReader(message: SmsMamSettings, reader: jspb.BinaryReader): SmsMamSettings;
}

export namespace SmsMamSettings {
  export type AsObject = {
    mamHgSid: string,
    mamHgName: string,
  }
}

export class MamAgentResponse extends jspb.Message {
  getStatus(): api_commons_sms_pb.SMSMamStatusMap[keyof api_commons_sms_pb.SMSMamStatusMap];
  setStatus(value: api_commons_sms_pb.SMSMamStatusMap[keyof api_commons_sms_pb.SMSMamStatusMap]): void;

  hasAgentResponseTime(): boolean;
  clearAgentResponseTime(): void;
  getAgentResponseTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAgentResponseTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getAgentName(): string;
  setAgentName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MamAgentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MamAgentResponse): MamAgentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MamAgentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MamAgentResponse;
  static deserializeBinaryFromReader(message: MamAgentResponse, reader: jspb.BinaryReader): MamAgentResponse;
}

export namespace MamAgentResponse {
  export type AsObject = {
    status: api_commons_sms_pb.SMSMamStatusMap[keyof api_commons_sms_pb.SMSMamStatusMap],
    agentResponseTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    agentName: string,
  }
}

export class StopAllOutboundSmsGroupsReq extends jspb.Message {
  clearSmsGroupSidsArrList(): void;
  getSmsGroupSidsArrList(): Array<number>;
  setSmsGroupSidsArrList(value: Array<number>): void;
  addSmsGroupSidsArr(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopAllOutboundSmsGroupsReq.AsObject;
  static toObject(includeInstance: boolean, msg: StopAllOutboundSmsGroupsReq): StopAllOutboundSmsGroupsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopAllOutboundSmsGroupsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopAllOutboundSmsGroupsReq;
  static deserializeBinaryFromReader(message: StopAllOutboundSmsGroupsReq, reader: jspb.BinaryReader): StopAllOutboundSmsGroupsReq;
}

export namespace StopAllOutboundSmsGroupsReq {
  export type AsObject = {
    smsGroupSidsArrList: Array<number>,
  }
}

export class StopAllOutboundSmsGroupsRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopAllOutboundSmsGroupsRes.AsObject;
  static toObject(includeInstance: boolean, msg: StopAllOutboundSmsGroupsRes): StopAllOutboundSmsGroupsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopAllOutboundSmsGroupsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopAllOutboundSmsGroupsRes;
  static deserializeBinaryFromReader(message: StopAllOutboundSmsGroupsRes, reader: jspb.BinaryReader): StopAllOutboundSmsGroupsRes;
}

export namespace StopAllOutboundSmsGroupsRes {
  export type AsObject = {
    result: boolean,
  }
}

export class StopAllInboundSmsGroupsReq extends jspb.Message {
  clearInboundSmsGroupIdsArrList(): void;
  getInboundSmsGroupIdsArrList(): Array<string>;
  setInboundSmsGroupIdsArrList(value: Array<string>): void;
  addInboundSmsGroupIdsArr(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopAllInboundSmsGroupsReq.AsObject;
  static toObject(includeInstance: boolean, msg: StopAllInboundSmsGroupsReq): StopAllInboundSmsGroupsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopAllInboundSmsGroupsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopAllInboundSmsGroupsReq;
  static deserializeBinaryFromReader(message: StopAllInboundSmsGroupsReq, reader: jspb.BinaryReader): StopAllInboundSmsGroupsReq;
}

export namespace StopAllInboundSmsGroupsReq {
  export type AsObject = {
    inboundSmsGroupIdsArrList: Array<string>,
  }
}

export class StopAllInboundSmsGroupsRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopAllInboundSmsGroupsRes.AsObject;
  static toObject(includeInstance: boolean, msg: StopAllInboundSmsGroupsRes): StopAllInboundSmsGroupsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopAllInboundSmsGroupsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopAllInboundSmsGroupsRes;
  static deserializeBinaryFromReader(message: StopAllInboundSmsGroupsRes, reader: jspb.BinaryReader): StopAllInboundSmsGroupsRes;
}

export namespace StopAllInboundSmsGroupsRes {
  export type AsObject = {
    result: boolean,
  }
}

