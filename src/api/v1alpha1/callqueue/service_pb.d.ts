// package: api.v1alpha1.callqueue
// file: api/v1alpha1/callqueue/service.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../../annotations/authz_pb";
import * as api_commons_call_pb from "../../../api/commons/call_pb";
import * as api_commons_sms_pb from "../../../api/commons/sms_pb";
import * as api_v0alpha_p3api_pb from "../../../api/v0alpha/p3api_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";

export class DequeuePreviewRecordOrCallReq extends jspb.Message {
  getTimeoutMinutes(): number;
  setTimeoutMinutes(value: number): void;

  getAgentSessionSid(): number;
  setAgentSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DequeuePreviewRecordOrCallReq.AsObject;
  static toObject(includeInstance: boolean, msg: DequeuePreviewRecordOrCallReq): DequeuePreviewRecordOrCallReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DequeuePreviewRecordOrCallReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DequeuePreviewRecordOrCallReq;
  static deserializeBinaryFromReader(message: DequeuePreviewRecordOrCallReq, reader: jspb.BinaryReader): DequeuePreviewRecordOrCallReq;
}

export namespace DequeuePreviewRecordOrCallReq {
  export type AsObject = {
    timeoutMinutes: number,
    agentSessionSid: number,
  }
}

export class DequeuePreviewRecordOrCallRes extends jspb.Message {
  getQueueName(): string;
  setQueueName(value: string): void;

  hasCall(): boolean;
  clearCall(): void;
  getCall(): api_commons_call_pb.SimpleCallData | undefined;
  setCall(value?: api_commons_call_pb.SimpleCallData): void;

  hasRecord(): boolean;
  clearRecord(): void;
  getRecord(): api_commons_call_pb.SimpleRecordData | undefined;
  setRecord(value?: api_commons_call_pb.SimpleRecordData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DequeuePreviewRecordOrCallRes.AsObject;
  static toObject(includeInstance: boolean, msg: DequeuePreviewRecordOrCallRes): DequeuePreviewRecordOrCallRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DequeuePreviewRecordOrCallRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DequeuePreviewRecordOrCallRes;
  static deserializeBinaryFromReader(message: DequeuePreviewRecordOrCallRes, reader: jspb.BinaryReader): DequeuePreviewRecordOrCallRes;
}

export namespace DequeuePreviewRecordOrCallRes {
  export type AsObject = {
    queueName: string,
    call?: api_commons_call_pb.SimpleCallData.AsObject,
    record?: api_commons_call_pb.SimpleRecordData.AsObject,
  }
}

export class EnqueuePreviewRecordReq extends jspb.Message {
  hasRecord(): boolean;
  clearRecord(): void;
  getRecord(): api_commons_call_pb.SimpleRecordData | undefined;
  setRecord(value?: api_commons_call_pb.SimpleRecordData): void;

  getQueueName(): string;
  setQueueName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnqueuePreviewRecordReq.AsObject;
  static toObject(includeInstance: boolean, msg: EnqueuePreviewRecordReq): EnqueuePreviewRecordReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnqueuePreviewRecordReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnqueuePreviewRecordReq;
  static deserializeBinaryFromReader(message: EnqueuePreviewRecordReq, reader: jspb.BinaryReader): EnqueuePreviewRecordReq;
}

export namespace EnqueuePreviewRecordReq {
  export type AsObject = {
    record?: api_commons_call_pb.SimpleRecordData.AsObject,
    queueName: string,
  }
}

export class EnqueuePreviewRecordRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnqueuePreviewRecordRes.AsObject;
  static toObject(includeInstance: boolean, msg: EnqueuePreviewRecordRes): EnqueuePreviewRecordRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnqueuePreviewRecordRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnqueuePreviewRecordRes;
  static deserializeBinaryFromReader(message: EnqueuePreviewRecordRes, reader: jspb.BinaryReader): EnqueuePreviewRecordRes;
}

export namespace EnqueuePreviewRecordRes {
  export type AsObject = {
  }
}

export class DequeueScrubbedCallForPreviewRecordReq extends jspb.Message {
  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): void;

  getPhoneNumIndex(): number;
  setPhoneNumIndex(value: number): void;

  getTaskGroupSid(): number;
  setTaskGroupSid(value: number): void;

  getTaskSid(): number;
  setTaskSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DequeueScrubbedCallForPreviewRecordReq.AsObject;
  static toObject(includeInstance: boolean, msg: DequeueScrubbedCallForPreviewRecordReq): DequeueScrubbedCallForPreviewRecordReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DequeueScrubbedCallForPreviewRecordReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DequeueScrubbedCallForPreviewRecordReq;
  static deserializeBinaryFromReader(message: DequeueScrubbedCallForPreviewRecordReq, reader: jspb.BinaryReader): DequeueScrubbedCallForPreviewRecordReq;
}

export namespace DequeueScrubbedCallForPreviewRecordReq {
  export type AsObject = {
    huntGroupSid: number,
    phoneNumber: string,
    phoneNumIndex: number,
    taskGroupSid: number,
    taskSid: number,
  }
}

export class DequeueScrubbedCallForPreviewRecordRes extends jspb.Message {
  hasCall(): boolean;
  clearCall(): void;
  getCall(): api_commons_call_pb.SimpleCallData | undefined;
  setCall(value?: api_commons_call_pb.SimpleCallData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DequeueScrubbedCallForPreviewRecordRes.AsObject;
  static toObject(includeInstance: boolean, msg: DequeueScrubbedCallForPreviewRecordRes): DequeueScrubbedCallForPreviewRecordRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DequeueScrubbedCallForPreviewRecordRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DequeueScrubbedCallForPreviewRecordRes;
  static deserializeBinaryFromReader(message: DequeueScrubbedCallForPreviewRecordRes, reader: jspb.BinaryReader): DequeueScrubbedCallForPreviewRecordRes;
}

export namespace DequeueScrubbedCallForPreviewRecordRes {
  export type AsObject = {
    call?: api_commons_call_pb.SimpleCallData.AsObject,
  }
}

export class ClearPreviewRecordReturnQueueReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClearPreviewRecordReturnQueueReq.AsObject;
  static toObject(includeInstance: boolean, msg: ClearPreviewRecordReturnQueueReq): ClearPreviewRecordReturnQueueReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClearPreviewRecordReturnQueueReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClearPreviewRecordReturnQueueReq;
  static deserializeBinaryFromReader(message: ClearPreviewRecordReturnQueueReq, reader: jspb.BinaryReader): ClearPreviewRecordReturnQueueReq;
}

export namespace ClearPreviewRecordReturnQueueReq {
  export type AsObject = {
  }
}

export class ClearPreviewRecordReturnQueueRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClearPreviewRecordReturnQueueRes.AsObject;
  static toObject(includeInstance: boolean, msg: ClearPreviewRecordReturnQueueRes): ClearPreviewRecordReturnQueueRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClearPreviewRecordReturnQueueRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClearPreviewRecordReturnQueueRes;
  static deserializeBinaryFromReader(message: ClearPreviewRecordReturnQueueRes, reader: jspb.BinaryReader): ClearPreviewRecordReturnQueueRes;
}

export namespace ClearPreviewRecordReturnQueueRes {
  export type AsObject = {
  }
}

export class EnqueuePreviewDialCallReq extends jspb.Message {
  hasCall(): boolean;
  clearCall(): void;
  getCall(): api_commons_call_pb.SimpleCallData | undefined;
  setCall(value?: api_commons_call_pb.SimpleCallData): void;

  getQueueName(): string;
  setQueueName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnqueuePreviewDialCallReq.AsObject;
  static toObject(includeInstance: boolean, msg: EnqueuePreviewDialCallReq): EnqueuePreviewDialCallReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnqueuePreviewDialCallReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnqueuePreviewDialCallReq;
  static deserializeBinaryFromReader(message: EnqueuePreviewDialCallReq, reader: jspb.BinaryReader): EnqueuePreviewDialCallReq;
}

export namespace EnqueuePreviewDialCallReq {
  export type AsObject = {
    call?: api_commons_call_pb.SimpleCallData.AsObject,
    queueName: string,
  }
}

export class EnqueuePreviewDialCallRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnqueuePreviewDialCallRes.AsObject;
  static toObject(includeInstance: boolean, msg: EnqueuePreviewDialCallRes): EnqueuePreviewDialCallRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnqueuePreviewDialCallRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnqueuePreviewDialCallRes;
  static deserializeBinaryFromReader(message: EnqueuePreviewDialCallRes, reader: jspb.BinaryReader): EnqueuePreviewDialCallRes;
}

export namespace EnqueuePreviewDialCallRes {
  export type AsObject = {
  }
}

export class ClearManualDialQueueReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClearManualDialQueueReq.AsObject;
  static toObject(includeInstance: boolean, msg: ClearManualDialQueueReq): ClearManualDialQueueReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClearManualDialQueueReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClearManualDialQueueReq;
  static deserializeBinaryFromReader(message: ClearManualDialQueueReq, reader: jspb.BinaryReader): ClearManualDialQueueReq;
}

export namespace ClearManualDialQueueReq {
  export type AsObject = {
  }
}

export class ClearManualDialQueueRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClearManualDialQueueRes.AsObject;
  static toObject(includeInstance: boolean, msg: ClearManualDialQueueRes): ClearManualDialQueueRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClearManualDialQueueRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClearManualDialQueueRes;
  static deserializeBinaryFromReader(message: ClearManualDialQueueRes, reader: jspb.BinaryReader): ClearManualDialQueueRes;
}

export namespace ClearManualDialQueueRes {
  export type AsObject = {
  }
}

export class ProcessManualDialCallReq extends jspb.Message {
  hasCall(): boolean;
  clearCall(): void;
  getCall(): api_commons_call_pb.SimpleCallData | undefined;
  setCall(value?: api_commons_call_pb.SimpleCallData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessManualDialCallReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessManualDialCallReq): ProcessManualDialCallReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessManualDialCallReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessManualDialCallReq;
  static deserializeBinaryFromReader(message: ProcessManualDialCallReq, reader: jspb.BinaryReader): ProcessManualDialCallReq;
}

export namespace ProcessManualDialCallReq {
  export type AsObject = {
    call?: api_commons_call_pb.SimpleCallData.AsObject,
  }
}

export class ProcessManualDialCallRes extends jspb.Message {
  hasScrubbedCall(): boolean;
  clearScrubbedCall(): void;
  getScrubbedCall(): api_commons_call_pb.SimpleCallData | undefined;
  setScrubbedCall(value?: api_commons_call_pb.SimpleCallData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessManualDialCallRes.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessManualDialCallRes): ProcessManualDialCallRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessManualDialCallRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessManualDialCallRes;
  static deserializeBinaryFromReader(message: ProcessManualDialCallRes, reader: jspb.BinaryReader): ProcessManualDialCallRes;
}

export namespace ProcessManualDialCallRes {
  export type AsObject = {
    scrubbedCall?: api_commons_call_pb.SimpleCallData.AsObject,
  }
}

export class DequeueCallForManualApprovalReq extends jspb.Message {
  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  getAgentSessionSid(): number;
  setAgentSessionSid(value: number): void;

  getTimeoutMinutes(): number;
  setTimeoutMinutes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DequeueCallForManualApprovalReq.AsObject;
  static toObject(includeInstance: boolean, msg: DequeueCallForManualApprovalReq): DequeueCallForManualApprovalReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DequeueCallForManualApprovalReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DequeueCallForManualApprovalReq;
  static deserializeBinaryFromReader(message: DequeueCallForManualApprovalReq, reader: jspb.BinaryReader): DequeueCallForManualApprovalReq;
}

export namespace DequeueCallForManualApprovalReq {
  export type AsObject = {
    huntGroupSid: number,
    agentSessionSid: number,
    timeoutMinutes: number,
  }
}

export class DequeueCallForManualApprovalRes extends jspb.Message {
  hasCall(): boolean;
  clearCall(): void;
  getCall(): api_commons_call_pb.SimpleCallData | undefined;
  setCall(value?: api_commons_call_pb.SimpleCallData): void;

  getQueue(): string;
  setQueue(value: string): void;

  hasClientInfo(): boolean;
  clearClientInfo(): void;
  getClientInfo(): api_v0alpha_p3api_pb.GetClientInfoDataRes | undefined;
  setClientInfo(value?: api_v0alpha_p3api_pb.GetClientInfoDataRes): void;

  hasClientInfoTemplate(): boolean;
  clearClientInfoTemplate(): void;
  getClientInfoTemplate(): api_v0alpha_p3api_pb.GetClientInfoDisplayTemplateRes | undefined;
  setClientInfoTemplate(value?: api_v0alpha_p3api_pb.GetClientInfoDisplayTemplateRes): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DequeueCallForManualApprovalRes.AsObject;
  static toObject(includeInstance: boolean, msg: DequeueCallForManualApprovalRes): DequeueCallForManualApprovalRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DequeueCallForManualApprovalRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DequeueCallForManualApprovalRes;
  static deserializeBinaryFromReader(message: DequeueCallForManualApprovalRes, reader: jspb.BinaryReader): DequeueCallForManualApprovalRes;
}

export namespace DequeueCallForManualApprovalRes {
  export type AsObject = {
    call?: api_commons_call_pb.SimpleCallData.AsObject,
    queue: string,
    clientInfo?: api_v0alpha_p3api_pb.GetClientInfoDataRes.AsObject,
    clientInfoTemplate?: api_v0alpha_p3api_pb.GetClientInfoDisplayTemplateRes.AsObject,
  }
}

export class EnqueueManuallyApprovedCallReq extends jspb.Message {
  hasCall(): boolean;
  clearCall(): void;
  getCall(): api_commons_call_pb.SimpleCallData | undefined;
  setCall(value?: api_commons_call_pb.SimpleCallData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnqueueManuallyApprovedCallReq.AsObject;
  static toObject(includeInstance: boolean, msg: EnqueueManuallyApprovedCallReq): EnqueueManuallyApprovedCallReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnqueueManuallyApprovedCallReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnqueueManuallyApprovedCallReq;
  static deserializeBinaryFromReader(message: EnqueueManuallyApprovedCallReq, reader: jspb.BinaryReader): EnqueueManuallyApprovedCallReq;
}

export namespace EnqueueManuallyApprovedCallReq {
  export type AsObject = {
    call?: api_commons_call_pb.SimpleCallData.AsObject,
  }
}

export class EnqueueManuallyApprovedCallRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnqueueManuallyApprovedCallRes.AsObject;
  static toObject(includeInstance: boolean, msg: EnqueueManuallyApprovedCallRes): EnqueueManuallyApprovedCallRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnqueueManuallyApprovedCallRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnqueueManuallyApprovedCallRes;
  static deserializeBinaryFromReader(message: EnqueueManuallyApprovedCallRes, reader: jspb.BinaryReader): EnqueueManuallyApprovedCallRes;
}

export namespace EnqueueManuallyApprovedCallRes {
  export type AsObject = {
  }
}

export class EnqueueManuallyRejectedCallReq extends jspb.Message {
  hasCall(): boolean;
  clearCall(): void;
  getCall(): api_commons_call_pb.SimpleCallData | undefined;
  setCall(value?: api_commons_call_pb.SimpleCallData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnqueueManuallyRejectedCallReq.AsObject;
  static toObject(includeInstance: boolean, msg: EnqueueManuallyRejectedCallReq): EnqueueManuallyRejectedCallReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnqueueManuallyRejectedCallReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnqueueManuallyRejectedCallReq;
  static deserializeBinaryFromReader(message: EnqueueManuallyRejectedCallReq, reader: jspb.BinaryReader): EnqueueManuallyRejectedCallReq;
}

export namespace EnqueueManuallyRejectedCallReq {
  export type AsObject = {
    call?: api_commons_call_pb.SimpleCallData.AsObject,
  }
}

export class EnqueueManuallyRejectedCallRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnqueueManuallyRejectedCallRes.AsObject;
  static toObject(includeInstance: boolean, msg: EnqueueManuallyRejectedCallRes): EnqueueManuallyRejectedCallRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnqueueManuallyRejectedCallRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnqueueManuallyRejectedCallRes;
  static deserializeBinaryFromReader(message: EnqueueManuallyRejectedCallRes, reader: jspb.BinaryReader): EnqueueManuallyRejectedCallRes;
}

export namespace EnqueueManuallyRejectedCallRes {
  export type AsObject = {
  }
}

export class RequeueManuallyApprovedCallReq extends jspb.Message {
  hasCall(): boolean;
  clearCall(): void;
  getCall(): api_commons_call_pb.SimpleCallData | undefined;
  setCall(value?: api_commons_call_pb.SimpleCallData): void;

  getQueueName(): string;
  setQueueName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequeueManuallyApprovedCallReq.AsObject;
  static toObject(includeInstance: boolean, msg: RequeueManuallyApprovedCallReq): RequeueManuallyApprovedCallReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequeueManuallyApprovedCallReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequeueManuallyApprovedCallReq;
  static deserializeBinaryFromReader(message: RequeueManuallyApprovedCallReq, reader: jspb.BinaryReader): RequeueManuallyApprovedCallReq;
}

export namespace RequeueManuallyApprovedCallReq {
  export type AsObject = {
    call?: api_commons_call_pb.SimpleCallData.AsObject,
    queueName: string,
  }
}

export class RequeueManuallyApprovedCallRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequeueManuallyApprovedCallRes.AsObject;
  static toObject(includeInstance: boolean, msg: RequeueManuallyApprovedCallRes): RequeueManuallyApprovedCallRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequeueManuallyApprovedCallRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequeueManuallyApprovedCallRes;
  static deserializeBinaryFromReader(message: RequeueManuallyApprovedCallRes, reader: jspb.BinaryReader): RequeueManuallyApprovedCallRes;
}

export namespace RequeueManuallyApprovedCallRes {
  export type AsObject = {
  }
}

export class EnqueueManuallyApprovedSmsReq extends jspb.Message {
  hasSms(): boolean;
  clearSms(): void;
  getSms(): api_commons_sms_pb.SimpleSmsMamData | undefined;
  setSms(value?: api_commons_sms_pb.SimpleSmsMamData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnqueueManuallyApprovedSmsReq.AsObject;
  static toObject(includeInstance: boolean, msg: EnqueueManuallyApprovedSmsReq): EnqueueManuallyApprovedSmsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnqueueManuallyApprovedSmsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnqueueManuallyApprovedSmsReq;
  static deserializeBinaryFromReader(message: EnqueueManuallyApprovedSmsReq, reader: jspb.BinaryReader): EnqueueManuallyApprovedSmsReq;
}

export namespace EnqueueManuallyApprovedSmsReq {
  export type AsObject = {
    sms?: api_commons_sms_pb.SimpleSmsMamData.AsObject,
  }
}

export class EnqueueManuallyApprovedSmsRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnqueueManuallyApprovedSmsRes.AsObject;
  static toObject(includeInstance: boolean, msg: EnqueueManuallyApprovedSmsRes): EnqueueManuallyApprovedSmsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnqueueManuallyApprovedSmsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnqueueManuallyApprovedSmsRes;
  static deserializeBinaryFromReader(message: EnqueueManuallyApprovedSmsRes, reader: jspb.BinaryReader): EnqueueManuallyApprovedSmsRes;
}

export namespace EnqueueManuallyApprovedSmsRes {
  export type AsObject = {
  }
}

export class EnqueueManuallyRejectedSmsReq extends jspb.Message {
  hasSms(): boolean;
  clearSms(): void;
  getSms(): api_commons_sms_pb.SimpleSmsMamData | undefined;
  setSms(value?: api_commons_sms_pb.SimpleSmsMamData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnqueueManuallyRejectedSmsReq.AsObject;
  static toObject(includeInstance: boolean, msg: EnqueueManuallyRejectedSmsReq): EnqueueManuallyRejectedSmsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnqueueManuallyRejectedSmsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnqueueManuallyRejectedSmsReq;
  static deserializeBinaryFromReader(message: EnqueueManuallyRejectedSmsReq, reader: jspb.BinaryReader): EnqueueManuallyRejectedSmsReq;
}

export namespace EnqueueManuallyRejectedSmsReq {
  export type AsObject = {
    sms?: api_commons_sms_pb.SimpleSmsMamData.AsObject,
  }
}

export class EnqueueManuallyRejectedSmsRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnqueueManuallyRejectedSmsRes.AsObject;
  static toObject(includeInstance: boolean, msg: EnqueueManuallyRejectedSmsRes): EnqueueManuallyRejectedSmsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnqueueManuallyRejectedSmsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnqueueManuallyRejectedSmsRes;
  static deserializeBinaryFromReader(message: EnqueueManuallyRejectedSmsRes, reader: jspb.BinaryReader): EnqueueManuallyRejectedSmsRes;
}

export namespace EnqueueManuallyRejectedSmsRes {
  export type AsObject = {
  }
}

export class RequeueManuallyApprovedSmsReq extends jspb.Message {
  hasSms(): boolean;
  clearSms(): void;
  getSms(): api_commons_sms_pb.SimpleSmsMamData | undefined;
  setSms(value?: api_commons_sms_pb.SimpleSmsMamData): void;

  getQueueName(): string;
  setQueueName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequeueManuallyApprovedSmsReq.AsObject;
  static toObject(includeInstance: boolean, msg: RequeueManuallyApprovedSmsReq): RequeueManuallyApprovedSmsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequeueManuallyApprovedSmsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequeueManuallyApprovedSmsReq;
  static deserializeBinaryFromReader(message: RequeueManuallyApprovedSmsReq, reader: jspb.BinaryReader): RequeueManuallyApprovedSmsReq;
}

export namespace RequeueManuallyApprovedSmsReq {
  export type AsObject = {
    sms?: api_commons_sms_pb.SimpleSmsMamData.AsObject,
    queueName: string,
  }
}

export class RequeueManuallyApprovedSmsRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequeueManuallyApprovedSmsRes.AsObject;
  static toObject(includeInstance: boolean, msg: RequeueManuallyApprovedSmsRes): RequeueManuallyApprovedSmsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequeueManuallyApprovedSmsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequeueManuallyApprovedSmsRes;
  static deserializeBinaryFromReader(message: RequeueManuallyApprovedSmsRes, reader: jspb.BinaryReader): RequeueManuallyApprovedSmsRes;
}

export namespace RequeueManuallyApprovedSmsRes {
  export type AsObject = {
  }
}

export class DequeueSmsMamForManualApprovalReq extends jspb.Message {
  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DequeueSmsMamForManualApprovalReq.AsObject;
  static toObject(includeInstance: boolean, msg: DequeueSmsMamForManualApprovalReq): DequeueSmsMamForManualApprovalReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DequeueSmsMamForManualApprovalReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DequeueSmsMamForManualApprovalReq;
  static deserializeBinaryFromReader(message: DequeueSmsMamForManualApprovalReq, reader: jspb.BinaryReader): DequeueSmsMamForManualApprovalReq;
}

export namespace DequeueSmsMamForManualApprovalReq {
  export type AsObject = {
    huntGroupSid: number,
  }
}

export class DequeueSmsMamForManualApprovalRes extends jspb.Message {
  hasSms(): boolean;
  clearSms(): void;
  getSms(): api_commons_sms_pb.SimpleSmsMamData | undefined;
  setSms(value?: api_commons_sms_pb.SimpleSmsMamData): void;

  getQueue(): string;
  setQueue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DequeueSmsMamForManualApprovalRes.AsObject;
  static toObject(includeInstance: boolean, msg: DequeueSmsMamForManualApprovalRes): DequeueSmsMamForManualApprovalRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DequeueSmsMamForManualApprovalRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DequeueSmsMamForManualApprovalRes;
  static deserializeBinaryFromReader(message: DequeueSmsMamForManualApprovalRes, reader: jspb.BinaryReader): DequeueSmsMamForManualApprovalRes;
}

export namespace DequeueSmsMamForManualApprovalRes {
  export type AsObject = {
    sms?: api_commons_sms_pb.SimpleSmsMamData.AsObject,
    queue: string,
  }
}

