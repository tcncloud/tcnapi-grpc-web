// package: api.v0alpha
// file: api/v0alpha/cbs.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../annotations/authz_pb";
import * as api_commons_acd_pb from "../../api/commons/acd_pb";
import * as api_commons_cbs_pb from "../../api/commons/cbs_pb";
import * as google_api_annotations_pb from "../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class CreateServiceIdReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateServiceIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateServiceIdReq): CreateServiceIdReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateServiceIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateServiceIdReq;
  static deserializeBinaryFromReader(message: CreateServiceIdReq, reader: jspb.BinaryReader): CreateServiceIdReq;
}

export namespace CreateServiceIdReq {
  export type AsObject = {
  }
}

export class CreateServiceIdRes extends jspb.Message {
  getServiceId(): string;
  setServiceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateServiceIdRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateServiceIdRes): CreateServiceIdRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateServiceIdRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateServiceIdRes;
  static deserializeBinaryFromReader(message: CreateServiceIdRes, reader: jspb.BinaryReader): CreateServiceIdRes;
}

export namespace CreateServiceIdRes {
  export type AsObject = {
    serviceId: string,
  }
}

export class ScheduledCallback extends jspb.Message {
  getScheduledCallbackId(): string;
  setScheduledCallbackId(value: string): void;

  getServiceId(): string;
  setServiceId(value: string): void;

  getStatus(): api_commons_cbs_pb.ScheduledCallbackStatusMap[keyof api_commons_cbs_pb.ScheduledCallbackStatusMap];
  setStatus(value: api_commons_cbs_pb.ScheduledCallbackStatusMap[keyof api_commons_cbs_pb.ScheduledCallbackStatusMap]): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): void;

  getCallerId(): string;
  setCallerId(value: string): void;

  getNotes(): string;
  setNotes(value: string): void;

  hasCreateDate(): boolean;
  clearCreateDate(): void;
  getCreateDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastUpdate(): boolean;
  clearLastUpdate(): void;
  getLastUpdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getLastUpdatedBy(): string;
  setLastUpdatedBy(value: string): void;

  clearCallbackSkillsList(): void;
  getCallbackSkillsList(): Array<string>;
  setCallbackSkillsList(value: Array<string>): void;
  addCallbackSkills(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduledCallback.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduledCallback): ScheduledCallback.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduledCallback, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduledCallback;
  static deserializeBinaryFromReader(message: ScheduledCallback, reader: jspb.BinaryReader): ScheduledCallback;
}

export namespace ScheduledCallback {
  export type AsObject = {
    scheduledCallbackId: string,
    serviceId: string,
    status: api_commons_cbs_pb.ScheduledCallbackStatusMap[keyof api_commons_cbs_pb.ScheduledCallbackStatusMap],
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    phoneNumber: string,
    callerId: string,
    notes: string,
    createDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastUpdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastUpdatedBy: string,
    callbackSkillsList: Array<string>,
  }
}

export class ScheduledCallbackDetail extends jspb.Message {
  getScheduledCallbackDetailId(): string;
  setScheduledCallbackDetailId(value: string): void;

  getScheduledCallbackId(): string;
  setScheduledCallbackId(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduledCallbackDetail.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduledCallbackDetail): ScheduledCallbackDetail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduledCallbackDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduledCallbackDetail;
  static deserializeBinaryFromReader(message: ScheduledCallbackDetail, reader: jspb.BinaryReader): ScheduledCallbackDetail;
}

export namespace ScheduledCallbackDetail {
  export type AsObject = {
    scheduledCallbackDetailId: string,
    scheduledCallbackId: string,
    key: string,
    value: string,
  }
}

export class UpdateScheduledCallbackToReadyReq extends jspb.Message {
  getScheduledCallbackId(): string;
  setScheduledCallbackId(value: string): void;

  getIsAutoReturn(): boolean;
  setIsAutoReturn(value: boolean): void;

  getServiceId(): string;
  setServiceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateScheduledCallbackToReadyReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateScheduledCallbackToReadyReq): UpdateScheduledCallbackToReadyReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateScheduledCallbackToReadyReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateScheduledCallbackToReadyReq;
  static deserializeBinaryFromReader(message: UpdateScheduledCallbackToReadyReq, reader: jspb.BinaryReader): UpdateScheduledCallbackToReadyReq;
}

export namespace UpdateScheduledCallbackToReadyReq {
  export type AsObject = {
    scheduledCallbackId: string,
    isAutoReturn: boolean,
    serviceId: string,
  }
}

export class UpdateScheduledCallbackToReadyRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateScheduledCallbackToReadyRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateScheduledCallbackToReadyRes): UpdateScheduledCallbackToReadyRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateScheduledCallbackToReadyRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateScheduledCallbackToReadyRes;
  static deserializeBinaryFromReader(message: UpdateScheduledCallbackToReadyRes, reader: jspb.BinaryReader): UpdateScheduledCallbackToReadyRes;
}

export namespace UpdateScheduledCallbackToReadyRes {
  export type AsObject = {
  }
}

export class UpdateScheduledCallbackToCanceledReq extends jspb.Message {
  getScheduledCallbackId(): string;
  setScheduledCallbackId(value: string): void;

  getServiceId(): string;
  setServiceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateScheduledCallbackToCanceledReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateScheduledCallbackToCanceledReq): UpdateScheduledCallbackToCanceledReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateScheduledCallbackToCanceledReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateScheduledCallbackToCanceledReq;
  static deserializeBinaryFromReader(message: UpdateScheduledCallbackToCanceledReq, reader: jspb.BinaryReader): UpdateScheduledCallbackToCanceledReq;
}

export namespace UpdateScheduledCallbackToCanceledReq {
  export type AsObject = {
    scheduledCallbackId: string,
    serviceId: string,
  }
}

export class UpdateScheduledCallbackToCanceledRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateScheduledCallbackToCanceledRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateScheduledCallbackToCanceledRes): UpdateScheduledCallbackToCanceledRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateScheduledCallbackToCanceledRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateScheduledCallbackToCanceledRes;
  static deserializeBinaryFromReader(message: UpdateScheduledCallbackToCanceledRes, reader: jspb.BinaryReader): UpdateScheduledCallbackToCanceledRes;
}

export namespace UpdateScheduledCallbackToCanceledRes {
  export type AsObject = {
  }
}

export class UpdateScheduledCallbackToClosedReq extends jspb.Message {
  getScheduledCallbackId(): string;
  setScheduledCallbackId(value: string): void;

  getManualDialCallSid(): number;
  setManualDialCallSid(value: number): void;

  getServiceId(): string;
  setServiceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateScheduledCallbackToClosedReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateScheduledCallbackToClosedReq): UpdateScheduledCallbackToClosedReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateScheduledCallbackToClosedReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateScheduledCallbackToClosedReq;
  static deserializeBinaryFromReader(message: UpdateScheduledCallbackToClosedReq, reader: jspb.BinaryReader): UpdateScheduledCallbackToClosedReq;
}

export namespace UpdateScheduledCallbackToClosedReq {
  export type AsObject = {
    scheduledCallbackId: string,
    manualDialCallSid: number,
    serviceId: string,
  }
}

export class UpdateScheduledCallbackToClosedRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateScheduledCallbackToClosedRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateScheduledCallbackToClosedRes): UpdateScheduledCallbackToClosedRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateScheduledCallbackToClosedRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateScheduledCallbackToClosedRes;
  static deserializeBinaryFromReader(message: UpdateScheduledCallbackToClosedRes, reader: jspb.BinaryReader): UpdateScheduledCallbackToClosedRes;
}

export namespace UpdateScheduledCallbackToClosedRes {
  export type AsObject = {
  }
}

export class CreateCallbackWithDetailsReq extends jspb.Message {
  hasCallback(): boolean;
  clearCallback(): void;
  getCallback(): ScheduledCallback | undefined;
  setCallback(value?: ScheduledCallback): void;

  clearCallbackDetailsList(): void;
  getCallbackDetailsList(): Array<ScheduledCallbackDetail>;
  setCallbackDetailsList(value: Array<ScheduledCallbackDetail>): void;
  addCallbackDetails(value?: ScheduledCallbackDetail, index?: number): ScheduledCallbackDetail;

  getName(): string;
  setName(value: string): void;

  getFormerCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setFormerCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  getFormerCallSid(): number;
  setFormerCallSid(value: number): void;

  hasCountrySid(): boolean;
  clearCountrySid(): void;
  getCountrySid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCountrySid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  getManagerLogin(): boolean;
  setManagerLogin(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCallbackWithDetailsReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCallbackWithDetailsReq): CreateCallbackWithDetailsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCallbackWithDetailsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCallbackWithDetailsReq;
  static deserializeBinaryFromReader(message: CreateCallbackWithDetailsReq, reader: jspb.BinaryReader): CreateCallbackWithDetailsReq;
}

export namespace CreateCallbackWithDetailsReq {
  export type AsObject = {
    callback?: ScheduledCallback.AsObject,
    callbackDetailsList: Array<ScheduledCallbackDetail.AsObject>,
    name: string,
    formerCallType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
    formerCallSid: number,
    countrySid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    managerLogin: boolean,
  }
}

export class CreateCallbackWithDetailsRes extends jspb.Message {
  getScheduledCallbackId(): string;
  setScheduledCallbackId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCallbackWithDetailsRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCallbackWithDetailsRes): CreateCallbackWithDetailsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCallbackWithDetailsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCallbackWithDetailsRes;
  static deserializeBinaryFromReader(message: CreateCallbackWithDetailsRes, reader: jspb.BinaryReader): CreateCallbackWithDetailsRes;
}

export namespace CreateCallbackWithDetailsRes {
  export type AsObject = {
    scheduledCallbackId: string,
  }
}

export class UpdateScheduledCallbackReq extends jspb.Message {
  getScheduledCallbackId(): string;
  setScheduledCallbackId(value: string): void;

  getNewStatus(): api_commons_cbs_pb.ScheduledCallbackStatusMap[keyof api_commons_cbs_pb.ScheduledCallbackStatusMap];
  setNewStatus(value: api_commons_cbs_pb.ScheduledCallbackStatusMap[keyof api_commons_cbs_pb.ScheduledCallbackStatusMap]): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): void;

  getCallerId(): string;
  setCallerId(value: string): void;

  clearSkillsList(): void;
  getSkillsList(): Array<string>;
  setSkillsList(value: Array<string>): void;
  addSkills(value: string, index?: number): string;

  getLastUpdatedBy(): string;
  setLastUpdatedBy(value: string): void;

  getNotes(): string;
  setNotes(value: string): void;

  clearCallbackDetailsList(): void;
  getCallbackDetailsList(): Array<ScheduledCallbackDetail>;
  setCallbackDetailsList(value: Array<ScheduledCallbackDetail>): void;
  addCallbackDetails(value?: ScheduledCallbackDetail, index?: number): ScheduledCallbackDetail;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateScheduledCallbackReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateScheduledCallbackReq): UpdateScheduledCallbackReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateScheduledCallbackReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateScheduledCallbackReq;
  static deserializeBinaryFromReader(message: UpdateScheduledCallbackReq, reader: jspb.BinaryReader): UpdateScheduledCallbackReq;
}

export namespace UpdateScheduledCallbackReq {
  export type AsObject = {
    scheduledCallbackId: string,
    newStatus: api_commons_cbs_pb.ScheduledCallbackStatusMap[keyof api_commons_cbs_pb.ScheduledCallbackStatusMap],
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    phoneNumber: string,
    callerId: string,
    skillsList: Array<string>,
    lastUpdatedBy: string,
    notes: string,
    callbackDetailsList: Array<ScheduledCallbackDetail.AsObject>,
    name: string,
  }
}

export class UpdateScheduledCallbackRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateScheduledCallbackRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateScheduledCallbackRes): UpdateScheduledCallbackRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateScheduledCallbackRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateScheduledCallbackRes;
  static deserializeBinaryFromReader(message: UpdateScheduledCallbackRes, reader: jspb.BinaryReader): UpdateScheduledCallbackRes;
}

export namespace UpdateScheduledCallbackRes {
  export type AsObject = {
  }
}

export class ScheduledCallbackWithDetails extends jspb.Message {
  getScheduledCallbackId(): string;
  setScheduledCallbackId(value: string): void;

  getServiceId(): string;
  setServiceId(value: string): void;

  getStatus(): api_commons_cbs_pb.ScheduledCallbackStatusMap[keyof api_commons_cbs_pb.ScheduledCallbackStatusMap];
  setStatus(value: api_commons_cbs_pb.ScheduledCallbackStatusMap[keyof api_commons_cbs_pb.ScheduledCallbackStatusMap]): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): void;

  getCallerId(): string;
  setCallerId(value: string): void;

  clearSkillsList(): void;
  getSkillsList(): Array<string>;
  setSkillsList(value: Array<string>): void;
  addSkills(value: string, index?: number): string;

  getNotes(): string;
  setNotes(value: string): void;

  hasCreateDate(): boolean;
  clearCreateDate(): void;
  getCreateDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastUpdate(): boolean;
  clearLastUpdate(): void;
  getLastUpdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getCreatedBy(): string;
  setCreatedBy(value: string): void;

  getLastUpdatedBy(): string;
  setLastUpdatedBy(value: string): void;

  getName(): string;
  setName(value: string): void;

  getFormerCallSid(): number;
  setFormerCallSid(value: number): void;

  getFormerCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setFormerCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  clearCallbackDetailsList(): void;
  getCallbackDetailsList(): Array<ScheduledCallbackDetail>;
  setCallbackDetailsList(value: Array<ScheduledCallbackDetail>): void;
  addCallbackDetails(value?: ScheduledCallbackDetail, index?: number): ScheduledCallbackDetail;

  hasCountrySid(): boolean;
  clearCountrySid(): void;
  getCountrySid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCountrySid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduledCallbackWithDetails.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduledCallbackWithDetails): ScheduledCallbackWithDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduledCallbackWithDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduledCallbackWithDetails;
  static deserializeBinaryFromReader(message: ScheduledCallbackWithDetails, reader: jspb.BinaryReader): ScheduledCallbackWithDetails;
}

export namespace ScheduledCallbackWithDetails {
  export type AsObject = {
    scheduledCallbackId: string,
    serviceId: string,
    status: api_commons_cbs_pb.ScheduledCallbackStatusMap[keyof api_commons_cbs_pb.ScheduledCallbackStatusMap],
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    phoneNumber: string,
    callerId: string,
    skillsList: Array<string>,
    notes: string,
    createDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastUpdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdBy: string,
    lastUpdatedBy: string,
    name: string,
    formerCallSid: number,
    formerCallType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
    callbackDetailsList: Array<ScheduledCallbackDetail.AsObject>,
    countrySid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class GetScheduledCallbackWithDetailsReq extends jspb.Message {
  getServiceId(): string;
  setServiceId(value: string): void;

  getScheduledCallbackId(): string;
  setScheduledCallbackId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScheduledCallbackWithDetailsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetScheduledCallbackWithDetailsReq): GetScheduledCallbackWithDetailsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetScheduledCallbackWithDetailsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScheduledCallbackWithDetailsReq;
  static deserializeBinaryFromReader(message: GetScheduledCallbackWithDetailsReq, reader: jspb.BinaryReader): GetScheduledCallbackWithDetailsReq;
}

export namespace GetScheduledCallbackWithDetailsReq {
  export type AsObject = {
    serviceId: string,
    scheduledCallbackId: string,
  }
}

export class GetScheduledCallbackWithDetailsRes extends jspb.Message {
  hasCallback(): boolean;
  clearCallback(): void;
  getCallback(): ScheduledCallbackWithDetails | undefined;
  setCallback(value?: ScheduledCallbackWithDetails): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScheduledCallbackWithDetailsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetScheduledCallbackWithDetailsRes): GetScheduledCallbackWithDetailsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetScheduledCallbackWithDetailsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScheduledCallbackWithDetailsRes;
  static deserializeBinaryFromReader(message: GetScheduledCallbackWithDetailsRes, reader: jspb.BinaryReader): GetScheduledCallbackWithDetailsRes;
}

export namespace GetScheduledCallbackWithDetailsRes {
  export type AsObject = {
    callback?: ScheduledCallbackWithDetails.AsObject,
  }
}

export class ListScheduledCallbacksWithDetailsRes extends jspb.Message {
  clearCallbacksList(): void;
  getCallbacksList(): Array<ScheduledCallbackWithDetails>;
  setCallbacksList(value: Array<ScheduledCallbackWithDetails>): void;
  addCallbacks(value?: ScheduledCallbackWithDetails, index?: number): ScheduledCallbackWithDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListScheduledCallbacksWithDetailsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListScheduledCallbacksWithDetailsRes): ListScheduledCallbacksWithDetailsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListScheduledCallbacksWithDetailsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListScheduledCallbacksWithDetailsRes;
  static deserializeBinaryFromReader(message: ListScheduledCallbacksWithDetailsRes, reader: jspb.BinaryReader): ListScheduledCallbacksWithDetailsRes;
}

export namespace ListScheduledCallbacksWithDetailsRes {
  export type AsObject = {
    callbacksList: Array<ScheduledCallbackWithDetails.AsObject>,
  }
}

export class GetNextScheduledCallbackWithDetailsReq extends jspb.Message {
  getServiceId(): string;
  setServiceId(value: string): void;

  clearAgentSkillsList(): void;
  getAgentSkillsList(): Array<string>;
  setAgentSkillsList(value: Array<string>): void;
  addAgentSkills(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNextScheduledCallbackWithDetailsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetNextScheduledCallbackWithDetailsReq): GetNextScheduledCallbackWithDetailsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNextScheduledCallbackWithDetailsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNextScheduledCallbackWithDetailsReq;
  static deserializeBinaryFromReader(message: GetNextScheduledCallbackWithDetailsReq, reader: jspb.BinaryReader): GetNextScheduledCallbackWithDetailsReq;
}

export namespace GetNextScheduledCallbackWithDetailsReq {
  export type AsObject = {
    serviceId: string,
    agentSkillsList: Array<string>,
  }
}

export class GetNextScheduledCallbackWithDetailsRes extends jspb.Message {
  hasScheduledCallback(): boolean;
  clearScheduledCallback(): void;
  getScheduledCallback(): ScheduledCallbackWithDetails | undefined;
  setScheduledCallback(value?: ScheduledCallbackWithDetails): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNextScheduledCallbackWithDetailsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetNextScheduledCallbackWithDetailsRes): GetNextScheduledCallbackWithDetailsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNextScheduledCallbackWithDetailsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNextScheduledCallbackWithDetailsRes;
  static deserializeBinaryFromReader(message: GetNextScheduledCallbackWithDetailsRes, reader: jspb.BinaryReader): GetNextScheduledCallbackWithDetailsRes;
}

export namespace GetNextScheduledCallbackWithDetailsRes {
  export type AsObject = {
    scheduledCallback?: ScheduledCallbackWithDetails.AsObject,
  }
}

export class ListScheduledCallbacksWithDetailsReq extends jspb.Message {
  getPhoneNumber(): string;
  setPhoneNumber(value: string): void;

  getCallerId(): string;
  setCallerId(value: string): void;

  hasFromStartTime(): boolean;
  clearFromStartTime(): void;
  getFromStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFromStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasToStartTime(): boolean;
  clearToStartTime(): void;
  getToStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setToStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearSkillsList(): void;
  getSkillsList(): Array<string>;
  setSkillsList(value: Array<string>): void;
  addSkills(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListScheduledCallbacksWithDetailsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListScheduledCallbacksWithDetailsReq): ListScheduledCallbacksWithDetailsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListScheduledCallbacksWithDetailsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListScheduledCallbacksWithDetailsReq;
  static deserializeBinaryFromReader(message: ListScheduledCallbacksWithDetailsReq, reader: jspb.BinaryReader): ListScheduledCallbacksWithDetailsReq;
}

export namespace ListScheduledCallbacksWithDetailsReq {
  export type AsObject = {
    phoneNumber: string,
    callerId: string,
    fromStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    toStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    skillsList: Array<string>,
  }
}

export class ListScheduledCallbacksWithDetailsBySkillsReq extends jspb.Message {
  getServiceId(): string;
  setServiceId(value: string): void;

  clearSkillsList(): void;
  getSkillsList(): Array<string>;
  setSkillsList(value: Array<string>): void;
  addSkills(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListScheduledCallbacksWithDetailsBySkillsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListScheduledCallbacksWithDetailsBySkillsReq): ListScheduledCallbacksWithDetailsBySkillsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListScheduledCallbacksWithDetailsBySkillsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListScheduledCallbacksWithDetailsBySkillsReq;
  static deserializeBinaryFromReader(message: ListScheduledCallbacksWithDetailsBySkillsReq, reader: jspb.BinaryReader): ListScheduledCallbacksWithDetailsBySkillsReq;
}

export namespace ListScheduledCallbacksWithDetailsBySkillsReq {
  export type AsObject = {
    serviceId: string,
    skillsList: Array<string>,
  }
}

