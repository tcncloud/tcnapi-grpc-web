// package: api.v1alpha1.delivery
// file: api/v1alpha1/delivery/service.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../../annotations/authz_pb";
import * as api_commons_delivery_pb from "../../../api/commons/delivery_pb";
import * as api_commons_omnichannel_pb from "../../../api/commons/omnichannel_pb";
import * as api_commons_org_pb from "../../../api/commons/org_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class TriggerDemoOutboundDeliveryReq extends jspb.Message {
  getTransferconfigname(): string;
  setTransferconfigname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TriggerDemoOutboundDeliveryReq.AsObject;
  static toObject(includeInstance: boolean, msg: TriggerDemoOutboundDeliveryReq): TriggerDemoOutboundDeliveryReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TriggerDemoOutboundDeliveryReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TriggerDemoOutboundDeliveryReq;
  static deserializeBinaryFromReader(message: TriggerDemoOutboundDeliveryReq, reader: jspb.BinaryReader): TriggerDemoOutboundDeliveryReq;
}

export namespace TriggerDemoOutboundDeliveryReq {
  export type AsObject = {
    transferconfigname: string,
  }
}

export class TriggerDemoOutboundDeliveryRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TriggerDemoOutboundDeliveryRes.AsObject;
  static toObject(includeInstance: boolean, msg: TriggerDemoOutboundDeliveryRes): TriggerDemoOutboundDeliveryRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TriggerDemoOutboundDeliveryRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TriggerDemoOutboundDeliveryRes;
  static deserializeBinaryFromReader(message: TriggerDemoOutboundDeliveryRes, reader: jspb.BinaryReader): TriggerDemoOutboundDeliveryRes;
}

export namespace TriggerDemoOutboundDeliveryRes {
  export type AsObject = {
  }
}

export class CreateTransferConfigReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): TransferConfig | undefined;
  setEntity(value?: TransferConfig): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTransferConfigReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTransferConfigReq): CreateTransferConfigReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTransferConfigReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTransferConfigReq;
  static deserializeBinaryFromReader(message: CreateTransferConfigReq, reader: jspb.BinaryReader): CreateTransferConfigReq;
}

export namespace CreateTransferConfigReq {
  export type AsObject = {
    entity?: TransferConfig.AsObject,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class CreateTransferConfigRes extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): ID | undefined;
  setEntity(value?: ID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTransferConfigRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTransferConfigRes): CreateTransferConfigRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTransferConfigRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTransferConfigRes;
  static deserializeBinaryFromReader(message: CreateTransferConfigRes, reader: jspb.BinaryReader): CreateTransferConfigRes;
}

export namespace CreateTransferConfigRes {
  export type AsObject = {
    entity?: ID.AsObject,
  }
}

export class ListTransferConfigsReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): TransferConfig | undefined;
  setEntity(value?: TransferConfig): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasListReq(): boolean;
  clearListReq(): void;
  getListReq(): ListReq | undefined;
  setListReq(value?: ListReq): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTransferConfigsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListTransferConfigsReq): ListTransferConfigsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTransferConfigsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTransferConfigsReq;
  static deserializeBinaryFromReader(message: ListTransferConfigsReq, reader: jspb.BinaryReader): ListTransferConfigsReq;
}

export namespace ListTransferConfigsReq {
  export type AsObject = {
    entity?: TransferConfig.AsObject,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    listReq?: ListReq.AsObject,
  }
}

export class ListTransferConfigsRes extends jspb.Message {
  clearEntitiesList(): void;
  getEntitiesList(): Array<TransferConfig>;
  setEntitiesList(value: Array<TransferConfig>): void;
  addEntities(value?: TransferConfig, index?: number): TransferConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTransferConfigsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListTransferConfigsRes): ListTransferConfigsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTransferConfigsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTransferConfigsRes;
  static deserializeBinaryFromReader(message: ListTransferConfigsRes, reader: jspb.BinaryReader): ListTransferConfigsRes;
}

export namespace ListTransferConfigsRes {
  export type AsObject = {
    entitiesList: Array<TransferConfig.AsObject>,
  }
}

export class ListTransferConfigsByCredentialIDReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): TransferConfig | undefined;
  setEntity(value?: TransferConfig): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasCredentialSid(): boolean;
  clearCredentialSid(): void;
  getCredentialSid(): ID | undefined;
  setCredentialSid(value?: ID): void;

  hasListReq(): boolean;
  clearListReq(): void;
  getListReq(): ListReq | undefined;
  setListReq(value?: ListReq): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTransferConfigsByCredentialIDReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListTransferConfigsByCredentialIDReq): ListTransferConfigsByCredentialIDReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTransferConfigsByCredentialIDReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTransferConfigsByCredentialIDReq;
  static deserializeBinaryFromReader(message: ListTransferConfigsByCredentialIDReq, reader: jspb.BinaryReader): ListTransferConfigsByCredentialIDReq;
}

export namespace ListTransferConfigsByCredentialIDReq {
  export type AsObject = {
    entity?: TransferConfig.AsObject,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    credentialSid?: ID.AsObject,
    listReq?: ListReq.AsObject,
  }
}

export class ListTransferConfigsByCredentialIDRes extends jspb.Message {
  clearEntitiesList(): void;
  getEntitiesList(): Array<TransferConfig>;
  setEntitiesList(value: Array<TransferConfig>): void;
  addEntities(value?: TransferConfig, index?: number): TransferConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTransferConfigsByCredentialIDRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListTransferConfigsByCredentialIDRes): ListTransferConfigsByCredentialIDRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTransferConfigsByCredentialIDRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTransferConfigsByCredentialIDRes;
  static deserializeBinaryFromReader(message: ListTransferConfigsByCredentialIDRes, reader: jspb.BinaryReader): ListTransferConfigsByCredentialIDRes;
}

export namespace ListTransferConfigsByCredentialIDRes {
  export type AsObject = {
    entitiesList: Array<TransferConfig.AsObject>,
  }
}

export class UpdateTransferConfigReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): TransferConfig | undefined;
  setEntity(value?: TransferConfig): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTransferConfigReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTransferConfigReq): UpdateTransferConfigReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTransferConfigReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTransferConfigReq;
  static deserializeBinaryFromReader(message: UpdateTransferConfigReq, reader: jspb.BinaryReader): UpdateTransferConfigReq;
}

export namespace UpdateTransferConfigReq {
  export type AsObject = {
    entity?: TransferConfig.AsObject,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateTransferConfigRes extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): ID | undefined;
  setEntity(value?: ID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTransferConfigRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTransferConfigRes): UpdateTransferConfigRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTransferConfigRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTransferConfigRes;
  static deserializeBinaryFromReader(message: UpdateTransferConfigRes, reader: jspb.BinaryReader): UpdateTransferConfigRes;
}

export namespace UpdateTransferConfigRes {
  export type AsObject = {
    entity?: ID.AsObject,
  }
}

export class DeleteTransferConfigReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): TransferConfig | undefined;
  setEntity(value?: TransferConfig): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTransferConfigReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTransferConfigReq): DeleteTransferConfigReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTransferConfigReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTransferConfigReq;
  static deserializeBinaryFromReader(message: DeleteTransferConfigReq, reader: jspb.BinaryReader): DeleteTransferConfigReq;
}

export namespace DeleteTransferConfigReq {
  export type AsObject = {
    entity?: TransferConfig.AsObject,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteTransferConfigRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTransferConfigRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTransferConfigRes): DeleteTransferConfigRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTransferConfigRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTransferConfigRes;
  static deserializeBinaryFromReader(message: DeleteTransferConfigRes, reader: jspb.BinaryReader): DeleteTransferConfigRes;
}

export namespace DeleteTransferConfigRes {
  export type AsObject = {
  }
}

export class GetTransferConfigReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): TransferConfig | undefined;
  setEntity(value?: TransferConfig): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransferConfigReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransferConfigReq): GetTransferConfigReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTransferConfigReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransferConfigReq;
  static deserializeBinaryFromReader(message: GetTransferConfigReq, reader: jspb.BinaryReader): GetTransferConfigReq;
}

export namespace GetTransferConfigReq {
  export type AsObject = {
    entity?: TransferConfig.AsObject,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetTransferConfigRes extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): TransferConfig | undefined;
  setEntity(value?: TransferConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransferConfigRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransferConfigRes): GetTransferConfigRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTransferConfigRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransferConfigRes;
  static deserializeBinaryFromReader(message: GetTransferConfigRes, reader: jspb.BinaryReader): GetTransferConfigRes;
}

export namespace GetTransferConfigRes {
  export type AsObject = {
    entity?: TransferConfig.AsObject,
  }
}

export class GetTransferConfigByNameReq extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): TransferConfig | undefined;
  setEntity(value?: TransferConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransferConfigByNameReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransferConfigByNameReq): GetTransferConfigByNameReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTransferConfigByNameReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransferConfigByNameReq;
  static deserializeBinaryFromReader(message: GetTransferConfigByNameReq, reader: jspb.BinaryReader): GetTransferConfigByNameReq;
}

export namespace GetTransferConfigByNameReq {
  export type AsObject = {
    name: string,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    entity?: TransferConfig.AsObject,
  }
}

export class GetTransferConfigByNameRes extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): TransferConfig | undefined;
  setEntity(value?: TransferConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransferConfigByNameRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransferConfigByNameRes): GetTransferConfigByNameRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTransferConfigByNameRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransferConfigByNameRes;
  static deserializeBinaryFromReader(message: GetTransferConfigByNameRes, reader: jspb.BinaryReader): GetTransferConfigByNameRes;
}

export namespace GetTransferConfigByNameRes {
  export type AsObject = {
    entity?: TransferConfig.AsObject,
  }
}

export class ListHistoryReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): History | undefined;
  setEntity(value?: History): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasListReq(): boolean;
  clearListReq(): void;
  getListReq(): ListReq | undefined;
  setListReq(value?: ListReq): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListHistoryReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListHistoryReq): ListHistoryReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListHistoryReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListHistoryReq;
  static deserializeBinaryFromReader(message: ListHistoryReq, reader: jspb.BinaryReader): ListHistoryReq;
}

export namespace ListHistoryReq {
  export type AsObject = {
    entity?: History.AsObject,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    listReq?: ListReq.AsObject,
  }
}

export class ListHistoryRes extends jspb.Message {
  clearEntitiesList(): void;
  getEntitiesList(): Array<History>;
  setEntitiesList(value: Array<History>): void;
  addEntities(value?: History, index?: number): History;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListHistoryRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListHistoryRes): ListHistoryRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListHistoryRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListHistoryRes;
  static deserializeBinaryFromReader(message: ListHistoryRes, reader: jspb.BinaryReader): ListHistoryRes;
}

export namespace ListHistoryRes {
  export type AsObject = {
    entitiesList: Array<History.AsObject>,
  }
}

export class ListHistoryByTransferConfigReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): ListByIDReq | undefined;
  setEntity(value?: ListByIDReq): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListHistoryByTransferConfigReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListHistoryByTransferConfigReq): ListHistoryByTransferConfigReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListHistoryByTransferConfigReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListHistoryByTransferConfigReq;
  static deserializeBinaryFromReader(message: ListHistoryByTransferConfigReq, reader: jspb.BinaryReader): ListHistoryByTransferConfigReq;
}

export namespace ListHistoryByTransferConfigReq {
  export type AsObject = {
    entity?: ListByIDReq.AsObject,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ListHistoryByTransferConfigRes extends jspb.Message {
  clearEntitiesList(): void;
  getEntitiesList(): Array<History>;
  setEntitiesList(value: Array<History>): void;
  addEntities(value?: History, index?: number): History;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListHistoryByTransferConfigRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListHistoryByTransferConfigRes): ListHistoryByTransferConfigRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListHistoryByTransferConfigRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListHistoryByTransferConfigRes;
  static deserializeBinaryFromReader(message: ListHistoryByTransferConfigRes, reader: jspb.BinaryReader): ListHistoryByTransferConfigRes;
}

export namespace ListHistoryByTransferConfigRes {
  export type AsObject = {
    entitiesList: Array<History.AsObject>,
  }
}

export class CreateHistoryReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): History | undefined;
  setEntity(value?: History): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateHistoryReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateHistoryReq): CreateHistoryReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateHistoryReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateHistoryReq;
  static deserializeBinaryFromReader(message: CreateHistoryReq, reader: jspb.BinaryReader): CreateHistoryReq;
}

export namespace CreateHistoryReq {
  export type AsObject = {
    entity?: History.AsObject,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class CreateHistoryRes extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): ID | undefined;
  setEntity(value?: ID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateHistoryRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateHistoryRes): CreateHistoryRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateHistoryRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateHistoryRes;
  static deserializeBinaryFromReader(message: CreateHistoryRes, reader: jspb.BinaryReader): CreateHistoryRes;
}

export namespace CreateHistoryRes {
  export type AsObject = {
    entity?: ID.AsObject,
  }
}

export class GetHistoryReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): ID | undefined;
  setEntity(value?: ID): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHistoryReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetHistoryReq): GetHistoryReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHistoryReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHistoryReq;
  static deserializeBinaryFromReader(message: GetHistoryReq, reader: jspb.BinaryReader): GetHistoryReq;
}

export namespace GetHistoryReq {
  export type AsObject = {
    entity?: ID.AsObject,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetHistoryRes extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): History | undefined;
  setEntity(value?: History): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHistoryRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetHistoryRes): GetHistoryRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHistoryRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHistoryRes;
  static deserializeBinaryFromReader(message: GetHistoryRes, reader: jspb.BinaryReader): GetHistoryRes;
}

export namespace GetHistoryRes {
  export type AsObject = {
    entity?: History.AsObject,
  }
}

export class CreateDeliveryDefinitionReq extends jspb.Message {
  hasDefinition(): boolean;
  clearDefinition(): void;
  getDefinition(): DeliveryDefinition | undefined;
  setDefinition(value?: DeliveryDefinition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDeliveryDefinitionReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDeliveryDefinitionReq): CreateDeliveryDefinitionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDeliveryDefinitionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDeliveryDefinitionReq;
  static deserializeBinaryFromReader(message: CreateDeliveryDefinitionReq, reader: jspb.BinaryReader): CreateDeliveryDefinitionReq;
}

export namespace CreateDeliveryDefinitionReq {
  export type AsObject = {
    definition?: DeliveryDefinition.AsObject,
  }
}

export class CreateDeliveryDefinitionRes extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): ID | undefined;
  setEntity(value?: ID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDeliveryDefinitionRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDeliveryDefinitionRes): CreateDeliveryDefinitionRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDeliveryDefinitionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDeliveryDefinitionRes;
  static deserializeBinaryFromReader(message: CreateDeliveryDefinitionRes, reader: jspb.BinaryReader): CreateDeliveryDefinitionRes;
}

export namespace CreateDeliveryDefinitionRes {
  export type AsObject = {
    entity?: ID.AsObject,
  }
}

export class DeleteDeliveryDefinitionReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): ID | undefined;
  setEntity(value?: ID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDeliveryDefinitionReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDeliveryDefinitionReq): DeleteDeliveryDefinitionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDeliveryDefinitionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDeliveryDefinitionReq;
  static deserializeBinaryFromReader(message: DeleteDeliveryDefinitionReq, reader: jspb.BinaryReader): DeleteDeliveryDefinitionReq;
}

export namespace DeleteDeliveryDefinitionReq {
  export type AsObject = {
    entity?: ID.AsObject,
  }
}

export class DeleteDeliveryDefinitionRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDeliveryDefinitionRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDeliveryDefinitionRes): DeleteDeliveryDefinitionRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDeliveryDefinitionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDeliveryDefinitionRes;
  static deserializeBinaryFromReader(message: DeleteDeliveryDefinitionRes, reader: jspb.BinaryReader): DeleteDeliveryDefinitionRes;
}

export namespace DeleteDeliveryDefinitionRes {
  export type AsObject = {
  }
}

export class GetDeliveryDefinitionReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): DeliveryDefinition | undefined;
  setEntity(value?: DeliveryDefinition): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeliveryDefinitionReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeliveryDefinitionReq): GetDeliveryDefinitionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeliveryDefinitionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeliveryDefinitionReq;
  static deserializeBinaryFromReader(message: GetDeliveryDefinitionReq, reader: jspb.BinaryReader): GetDeliveryDefinitionReq;
}

export namespace GetDeliveryDefinitionReq {
  export type AsObject = {
    entity?: DeliveryDefinition.AsObject,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetDeliveryDefinitionRes extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): DeliveryDefinition | undefined;
  setEntity(value?: DeliveryDefinition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeliveryDefinitionRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeliveryDefinitionRes): GetDeliveryDefinitionRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeliveryDefinitionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeliveryDefinitionRes;
  static deserializeBinaryFromReader(message: GetDeliveryDefinitionRes, reader: jspb.BinaryReader): GetDeliveryDefinitionRes;
}

export namespace GetDeliveryDefinitionRes {
  export type AsObject = {
    entity?: DeliveryDefinition.AsObject,
  }
}

export class GetDeliveryDefinitionByNameReq extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): DeliveryDefinition | undefined;
  setEntity(value?: DeliveryDefinition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeliveryDefinitionByNameReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeliveryDefinitionByNameReq): GetDeliveryDefinitionByNameReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeliveryDefinitionByNameReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeliveryDefinitionByNameReq;
  static deserializeBinaryFromReader(message: GetDeliveryDefinitionByNameReq, reader: jspb.BinaryReader): GetDeliveryDefinitionByNameReq;
}

export namespace GetDeliveryDefinitionByNameReq {
  export type AsObject = {
    name: string,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    entity?: DeliveryDefinition.AsObject,
  }
}

export class GetDeliveryDefinitionByNameRes extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): DeliveryDefinition | undefined;
  setEntity(value?: DeliveryDefinition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeliveryDefinitionByNameRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeliveryDefinitionByNameRes): GetDeliveryDefinitionByNameRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeliveryDefinitionByNameRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeliveryDefinitionByNameRes;
  static deserializeBinaryFromReader(message: GetDeliveryDefinitionByNameRes, reader: jspb.BinaryReader): GetDeliveryDefinitionByNameRes;
}

export namespace GetDeliveryDefinitionByNameRes {
  export type AsObject = {
    entity?: DeliveryDefinition.AsObject,
  }
}

export class ListDeliveryDefinitionsReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): DeliveryDefinition | undefined;
  setEntity(value?: DeliveryDefinition): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasListReq(): boolean;
  clearListReq(): void;
  getListReq(): ListReq | undefined;
  setListReq(value?: ListReq): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDeliveryDefinitionsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListDeliveryDefinitionsReq): ListDeliveryDefinitionsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDeliveryDefinitionsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDeliveryDefinitionsReq;
  static deserializeBinaryFromReader(message: ListDeliveryDefinitionsReq, reader: jspb.BinaryReader): ListDeliveryDefinitionsReq;
}

export namespace ListDeliveryDefinitionsReq {
  export type AsObject = {
    entity?: DeliveryDefinition.AsObject,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    listReq?: ListReq.AsObject,
  }
}

export class ListDeliveryDefinitionsRes extends jspb.Message {
  clearEntitiesList(): void;
  getEntitiesList(): Array<DeliveryDefinition>;
  setEntitiesList(value: Array<DeliveryDefinition>): void;
  addEntities(value?: DeliveryDefinition, index?: number): DeliveryDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDeliveryDefinitionsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListDeliveryDefinitionsRes): ListDeliveryDefinitionsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDeliveryDefinitionsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDeliveryDefinitionsRes;
  static deserializeBinaryFromReader(message: ListDeliveryDefinitionsRes, reader: jspb.BinaryReader): ListDeliveryDefinitionsRes;
}

export namespace ListDeliveryDefinitionsRes {
  export type AsObject = {
    entitiesList: Array<DeliveryDefinition.AsObject>,
  }
}

export class ListDeliveryDefinitionsByCredentialIDReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): DeliveryDefinition | undefined;
  setEntity(value?: DeliveryDefinition): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasCredentialSid(): boolean;
  clearCredentialSid(): void;
  getCredentialSid(): ID | undefined;
  setCredentialSid(value?: ID): void;

  hasListReq(): boolean;
  clearListReq(): void;
  getListReq(): ListReq | undefined;
  setListReq(value?: ListReq): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDeliveryDefinitionsByCredentialIDReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListDeliveryDefinitionsByCredentialIDReq): ListDeliveryDefinitionsByCredentialIDReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDeliveryDefinitionsByCredentialIDReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDeliveryDefinitionsByCredentialIDReq;
  static deserializeBinaryFromReader(message: ListDeliveryDefinitionsByCredentialIDReq, reader: jspb.BinaryReader): ListDeliveryDefinitionsByCredentialIDReq;
}

export namespace ListDeliveryDefinitionsByCredentialIDReq {
  export type AsObject = {
    entity?: DeliveryDefinition.AsObject,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    credentialSid?: ID.AsObject,
    listReq?: ListReq.AsObject,
  }
}

export class ListDeliveryDefinitionsByCredentialIDRes extends jspb.Message {
  clearEntitiesList(): void;
  getEntitiesList(): Array<DeliveryDefinition>;
  setEntitiesList(value: Array<DeliveryDefinition>): void;
  addEntities(value?: DeliveryDefinition, index?: number): DeliveryDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDeliveryDefinitionsByCredentialIDRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListDeliveryDefinitionsByCredentialIDRes): ListDeliveryDefinitionsByCredentialIDRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDeliveryDefinitionsByCredentialIDRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDeliveryDefinitionsByCredentialIDRes;
  static deserializeBinaryFromReader(message: ListDeliveryDefinitionsByCredentialIDRes, reader: jspb.BinaryReader): ListDeliveryDefinitionsByCredentialIDRes;
}

export namespace ListDeliveryDefinitionsByCredentialIDRes {
  export type AsObject = {
    entitiesList: Array<DeliveryDefinition.AsObject>,
  }
}

export class UpdateDeliveryDefinitionReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): DeliveryDefinition | undefined;
  setEntity(value?: DeliveryDefinition): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDeliveryDefinitionReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDeliveryDefinitionReq): UpdateDeliveryDefinitionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDeliveryDefinitionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDeliveryDefinitionReq;
  static deserializeBinaryFromReader(message: UpdateDeliveryDefinitionReq, reader: jspb.BinaryReader): UpdateDeliveryDefinitionReq;
}

export namespace UpdateDeliveryDefinitionReq {
  export type AsObject = {
    entity?: DeliveryDefinition.AsObject,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateDeliveryDefinitionRes extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): ID | undefined;
  setEntity(value?: ID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDeliveryDefinitionRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDeliveryDefinitionRes): UpdateDeliveryDefinitionRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDeliveryDefinitionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDeliveryDefinitionRes;
  static deserializeBinaryFromReader(message: UpdateDeliveryDefinitionRes, reader: jspb.BinaryReader): UpdateDeliveryDefinitionRes;
}

export namespace UpdateDeliveryDefinitionRes {
  export type AsObject = {
    entity?: ID.AsObject,
  }
}

export class CreateEncryptionReq extends jspb.Message {
  hasEncryption(): boolean;
  clearEncryption(): void;
  getEncryption(): Encryption | undefined;
  setEncryption(value?: Encryption): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEncryptionReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEncryptionReq): CreateEncryptionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEncryptionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEncryptionReq;
  static deserializeBinaryFromReader(message: CreateEncryptionReq, reader: jspb.BinaryReader): CreateEncryptionReq;
}

export namespace CreateEncryptionReq {
  export type AsObject = {
    encryption?: Encryption.AsObject,
  }
}

export class CreateEncryptionRes extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): ID | undefined;
  setEntity(value?: ID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEncryptionRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEncryptionRes): CreateEncryptionRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEncryptionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEncryptionRes;
  static deserializeBinaryFromReader(message: CreateEncryptionRes, reader: jspb.BinaryReader): CreateEncryptionRes;
}

export namespace CreateEncryptionRes {
  export type AsObject = {
    entity?: ID.AsObject,
  }
}

export class DeleteEncryptionReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): ID | undefined;
  setEntity(value?: ID): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEncryptionReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEncryptionReq): DeleteEncryptionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteEncryptionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEncryptionReq;
  static deserializeBinaryFromReader(message: DeleteEncryptionReq, reader: jspb.BinaryReader): DeleteEncryptionReq;
}

export namespace DeleteEncryptionReq {
  export type AsObject = {
    entity?: ID.AsObject,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteEncryptionRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEncryptionRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEncryptionRes): DeleteEncryptionRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteEncryptionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEncryptionRes;
  static deserializeBinaryFromReader(message: DeleteEncryptionRes, reader: jspb.BinaryReader): DeleteEncryptionRes;
}

export namespace DeleteEncryptionRes {
  export type AsObject = {
  }
}

export class GetEncryptionReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): Encryption | undefined;
  setEntity(value?: Encryption): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEncryptionReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetEncryptionReq): GetEncryptionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEncryptionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEncryptionReq;
  static deserializeBinaryFromReader(message: GetEncryptionReq, reader: jspb.BinaryReader): GetEncryptionReq;
}

export namespace GetEncryptionReq {
  export type AsObject = {
    entity?: Encryption.AsObject,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetEncryptionRes extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): Encryption | undefined;
  setEntity(value?: Encryption): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEncryptionRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetEncryptionRes): GetEncryptionRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEncryptionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEncryptionRes;
  static deserializeBinaryFromReader(message: GetEncryptionRes, reader: jspb.BinaryReader): GetEncryptionRes;
}

export namespace GetEncryptionRes {
  export type AsObject = {
    entity?: Encryption.AsObject,
  }
}

export class ListEncryptionsReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): ListReq | undefined;
  setEntity(value?: ListReq): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEncryptionsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListEncryptionsReq): ListEncryptionsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListEncryptionsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEncryptionsReq;
  static deserializeBinaryFromReader(message: ListEncryptionsReq, reader: jspb.BinaryReader): ListEncryptionsReq;
}

export namespace ListEncryptionsReq {
  export type AsObject = {
    entity?: ListReq.AsObject,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ListEncryptionsRes extends jspb.Message {
  clearEntitiesList(): void;
  getEntitiesList(): Array<Encryption>;
  setEntitiesList(value: Array<Encryption>): void;
  addEntities(value?: Encryption, index?: number): Encryption;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEncryptionsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListEncryptionsRes): ListEncryptionsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListEncryptionsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEncryptionsRes;
  static deserializeBinaryFromReader(message: ListEncryptionsRes, reader: jspb.BinaryReader): ListEncryptionsRes;
}

export namespace ListEncryptionsRes {
  export type AsObject = {
    entitiesList: Array<Encryption.AsObject>,
  }
}

export class UpdateEncryptionReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): Encryption | undefined;
  setEntity(value?: Encryption): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEncryptionReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEncryptionReq): UpdateEncryptionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateEncryptionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEncryptionReq;
  static deserializeBinaryFromReader(message: UpdateEncryptionReq, reader: jspb.BinaryReader): UpdateEncryptionReq;
}

export namespace UpdateEncryptionReq {
  export type AsObject = {
    entity?: Encryption.AsObject,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateEncryptionRes extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): ID | undefined;
  setEntity(value?: ID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEncryptionRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEncryptionRes): UpdateEncryptionRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateEncryptionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEncryptionRes;
  static deserializeBinaryFromReader(message: UpdateEncryptionRes, reader: jspb.BinaryReader): UpdateEncryptionRes;
}

export namespace UpdateEncryptionRes {
  export type AsObject = {
    entity?: ID.AsObject,
  }
}

export class TransferConfig extends jspb.Message {
  getSid(): string;
  setSid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getTtl(): number;
  setTtl(value: number): void;

  hasCredential(): boolean;
  clearCredential(): void;
  getCredential(): Credential | undefined;
  setCredential(value?: Credential): void;

  hasDestination(): boolean;
  clearDestination(): void;
  getDestination(): Destination | undefined;
  setDestination(value?: Destination): void;

  hasSource(): boolean;
  clearSource(): void;
  getSource(): Source | undefined;
  setSource(value?: Source): void;

  hasCreatedOn(): boolean;
  clearCreatedOn(): void;
  getCreatedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedOn(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastEdited(): boolean;
  clearLastEdited(): void;
  getLastEdited(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastEdited(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferConfig.AsObject;
  static toObject(includeInstance: boolean, msg: TransferConfig): TransferConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferConfig;
  static deserializeBinaryFromReader(message: TransferConfig, reader: jspb.BinaryReader): TransferConfig;
}

export namespace TransferConfig {
  export type AsObject = {
    sid: string,
    name: string,
    description: string,
    ttl: number,
    credential?: Credential.AsObject,
    destination?: Destination.AsObject,
    source?: Source.AsObject,
    createdOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastEdited?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ID extends jspb.Message {
  getSid(): string;
  setSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ID.AsObject;
  static toObject(includeInstance: boolean, msg: ID): ID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ID;
  static deserializeBinaryFromReader(message: ID, reader: jspb.BinaryReader): ID;
}

export namespace ID {
  export type AsObject = {
    sid: string,
  }
}

export class ListReq extends jspb.Message {
  getBeforeSid(): number;
  setBeforeSid(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListReq): ListReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListReq;
  static deserializeBinaryFromReader(message: ListReq, reader: jspb.BinaryReader): ListReq;
}

export namespace ListReq {
  export type AsObject = {
    beforeSid: number,
    limit: number,
  }
}

export class History extends jspb.Message {
  getSid(): string;
  setSid(value: string): void;

  getTransferConfigName(): string;
  setTransferConfigName(value: string): void;

  getTransferConfigSid(): string;
  setTransferConfigSid(value: string): void;

  getDeliveryType(): string;
  setDeliveryType(value: string): void;

  getError(): string;
  setError(value: string): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasCreatedOn(): boolean;
  clearCreatedOn(): void;
  getCreatedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedOn(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTransferStart(): boolean;
  clearTransferStart(): void;
  getTransferStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTransferStart(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTransferComplete(): boolean;
  clearTransferComplete(): void;
  getTransferComplete(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTransferComplete(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getOrigin(): api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap];
  setOrigin(value: api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap]): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getMessagePayload(): string;
  setMessagePayload(value: string): void;

  getMessagePayloadLen(): number;
  setMessagePayloadLen(value: number): void;

  getStatus(): api_commons_delivery_pb.TransferStatusMap[keyof api_commons_delivery_pb.TransferStatusMap];
  setStatus(value: api_commons_delivery_pb.TransferStatusMap[keyof api_commons_delivery_pb.TransferStatusMap]): void;

  getIsInbound(): boolean;
  setIsInbound(value: boolean): void;

  getTransactionSid(): string;
  setTransactionSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): History.AsObject;
  static toObject(includeInstance: boolean, msg: History): History.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: History, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): History;
  static deserializeBinaryFromReader(message: History, reader: jspb.BinaryReader): History;
}

export namespace History {
  export type AsObject = {
    sid: string,
    transferConfigName: string,
    transferConfigSid: string,
    deliveryType: string,
    error: string,
    success: boolean,
    createdOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    transferStart?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    transferComplete?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    origin: api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap],
    orgId: string,
    messagePayload: string,
    messagePayloadLen: number,
    status: api_commons_delivery_pb.TransferStatusMap[keyof api_commons_delivery_pb.TransferStatusMap],
    isInbound: boolean,
    transactionSid: string,
  }
}

export class ListByIDReq extends jspb.Message {
  getBeforeSid(): number;
  setBeforeSid(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  getOtherSid(): number;
  setOtherSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListByIDReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListByIDReq): ListByIDReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListByIDReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListByIDReq;
  static deserializeBinaryFromReader(message: ListByIDReq, reader: jspb.BinaryReader): ListByIDReq;
}

export namespace ListByIDReq {
  export type AsObject = {
    beforeSid: number,
    limit: number,
    otherSid: number,
  }
}

export class Credential extends jspb.Message {
  getSid(): string;
  setSid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): CredentialData | undefined;
  setData(value?: CredentialData): void;

  hasCreatedOn(): boolean;
  clearCreatedOn(): void;
  getCreatedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedOn(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastEdited(): boolean;
  clearLastEdited(): void;
  getLastEdited(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastEdited(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Credential.AsObject;
  static toObject(includeInstance: boolean, msg: Credential): Credential.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Credential, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Credential;
  static deserializeBinaryFromReader(message: Credential, reader: jspb.BinaryReader): Credential;
}

export namespace Credential {
  export type AsObject = {
    sid: string,
    name: string,
    description: string,
    data?: CredentialData.AsObject,
    createdOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastEdited?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Destination extends jspb.Message {
  hasEncryption(): boolean;
  clearEncryption(): void;
  getEncryption(): api_commons_delivery_pb.Encryption | undefined;
  setEncryption(value?: api_commons_delivery_pb.Encryption): void;

  hasEmail(): boolean;
  clearEmail(): void;
  getEmail(): EmailDestination | undefined;
  setEmail(value?: EmailDestination): void;

  hasRoom303(): boolean;
  clearRoom303(): void;
  getRoom303(): Room303Destination | undefined;
  setRoom303(value?: Room303Destination): void;

  hasSms(): boolean;
  clearSms(): void;
  getSms(): SmsDestination | undefined;
  setSms(value?: SmsDestination): void;

  hasSftp(): boolean;
  clearSftp(): void;
  getSftp(): SftpDestination | undefined;
  setSftp(value?: SftpDestination): void;

  getValueCase(): Destination.ValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Destination.AsObject;
  static toObject(includeInstance: boolean, msg: Destination): Destination.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Destination, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Destination;
  static deserializeBinaryFromReader(message: Destination, reader: jspb.BinaryReader): Destination;
}

export namespace Destination {
  export type AsObject = {
    encryption?: api_commons_delivery_pb.Encryption.AsObject,
    email?: EmailDestination.AsObject,
    room303?: Room303Destination.AsObject,
    sms?: SmsDestination.AsObject,
    sftp?: SftpDestination.AsObject,
  }

  export enum ValueCase {
    VALUE_NOT_SET = 0,
    EMAIL = 2,
    ROOM303 = 3,
    SMS = 4,
    SFTP = 5,
  }
}

export class SftpDestination extends jspb.Message {
  getBaseDirectory(): string;
  setBaseDirectory(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  getPort(): number;
  setPort(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SftpDestination.AsObject;
  static toObject(includeInstance: boolean, msg: SftpDestination): SftpDestination.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SftpDestination, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SftpDestination;
  static deserializeBinaryFromReader(message: SftpDestination, reader: jspb.BinaryReader): SftpDestination;
}

export namespace SftpDestination {
  export type AsObject = {
    baseDirectory: string,
    address: string,
    port: number,
  }
}

export class Room303Destination extends jspb.Message {
  getRoom(): string;
  setRoom(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Room303Destination.AsObject;
  static toObject(includeInstance: boolean, msg: Room303Destination): Room303Destination.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Room303Destination, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Room303Destination;
  static deserializeBinaryFromReader(message: Room303Destination, reader: jspb.BinaryReader): Room303Destination;
}

export namespace Room303Destination {
  export type AsObject = {
    room: string,
    username: string,
    userId: string,
  }
}

export class SmsDestination extends jspb.Message {
  getDestinationPhone(): string;
  setDestinationPhone(value: string): void;

  getSourcePhone(): string;
  setSourcePhone(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmsDestination.AsObject;
  static toObject(includeInstance: boolean, msg: SmsDestination): SmsDestination.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SmsDestination, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmsDestination;
  static deserializeBinaryFromReader(message: SmsDestination, reader: jspb.BinaryReader): SmsDestination;
}

export namespace SmsDestination {
  export type AsObject = {
    destinationPhone: string,
    sourcePhone: string,
  }
}

export class EmailDestination extends jspb.Message {
  getToAddr(): string;
  setToAddr(value: string): void;

  clearCcAddrsList(): void;
  getCcAddrsList(): Array<string>;
  setCcAddrsList(value: Array<string>): void;
  addCcAddrs(value: string, index?: number): string;

  getFromAddr(): string;
  setFromAddr(value: string): void;

  clearToAddrsList(): void;
  getToAddrsList(): Array<string>;
  setToAddrsList(value: Array<string>): void;
  addToAddrs(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailDestination.AsObject;
  static toObject(includeInstance: boolean, msg: EmailDestination): EmailDestination.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmailDestination, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailDestination;
  static deserializeBinaryFromReader(message: EmailDestination, reader: jspb.BinaryReader): EmailDestination;
}

export namespace EmailDestination {
  export type AsObject = {
    toAddr: string,
    ccAddrsList: Array<string>,
    fromAddr: string,
    toAddrsList: Array<string>,
  }
}

export class CredentialData extends jspb.Message {
  hasUserPassword(): boolean;
  clearUserPassword(): void;
  getUserPassword(): UserPassword | undefined;
  setUserPassword(value?: UserPassword): void;

  hasPassword(): boolean;
  clearPassword(): void;
  getPassword(): Password | undefined;
  setPassword(value?: Password): void;

  hasSshKeyPair(): boolean;
  clearSshKeyPair(): void;
  getSshKeyPair(): SSHKeyPair | undefined;
  setSshKeyPair(value?: SSHKeyPair): void;

  hasPgpKeyPair(): boolean;
  clearPgpKeyPair(): void;
  getPgpKeyPair(): PGPKeyPair | undefined;
  setPgpKeyPair(value?: PGPKeyPair): void;

  hasAesPassword(): boolean;
  clearAesPassword(): void;
  getAesPassword(): AESPassword | undefined;
  setAesPassword(value?: AESPassword): void;

  getDataCase(): CredentialData.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CredentialData.AsObject;
  static toObject(includeInstance: boolean, msg: CredentialData): CredentialData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CredentialData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CredentialData;
  static deserializeBinaryFromReader(message: CredentialData, reader: jspb.BinaryReader): CredentialData;
}

export namespace CredentialData {
  export type AsObject = {
    userPassword?: UserPassword.AsObject,
    password?: Password.AsObject,
    sshKeyPair?: SSHKeyPair.AsObject,
    pgpKeyPair?: PGPKeyPair.AsObject,
    aesPassword?: AESPassword.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    USER_PASSWORD = 1,
    PASSWORD = 2,
    SSH_KEY_PAIR = 3,
    PGP_KEY_PAIR = 4,
    AES_PASSWORD = 5,
  }
}

export class UserPassword extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserPassword.AsObject;
  static toObject(includeInstance: boolean, msg: UserPassword): UserPassword.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserPassword, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserPassword;
  static deserializeBinaryFromReader(message: UserPassword, reader: jspb.BinaryReader): UserPassword;
}

export namespace UserPassword {
  export type AsObject = {
    username: string,
    password: string,
  }
}

export class Password extends jspb.Message {
  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Password.AsObject;
  static toObject(includeInstance: boolean, msg: Password): Password.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Password, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Password;
  static deserializeBinaryFromReader(message: Password, reader: jspb.BinaryReader): Password;
}

export namespace Password {
  export type AsObject = {
    password: string,
  }
}

export class SSHKeyPair extends jspb.Message {
  getPublicKey(): string;
  setPublicKey(value: string): void;

  getPrivateKey(): string;
  setPrivateKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SSHKeyPair.AsObject;
  static toObject(includeInstance: boolean, msg: SSHKeyPair): SSHKeyPair.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SSHKeyPair, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SSHKeyPair;
  static deserializeBinaryFromReader(message: SSHKeyPair, reader: jspb.BinaryReader): SSHKeyPair;
}

export namespace SSHKeyPair {
  export type AsObject = {
    publicKey: string,
    privateKey: string,
  }
}

export class PGPKeyPair extends jspb.Message {
  getPublicKey(): string;
  setPublicKey(value: string): void;

  getPrivateKey(): string;
  setPrivateKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PGPKeyPair.AsObject;
  static toObject(includeInstance: boolean, msg: PGPKeyPair): PGPKeyPair.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PGPKeyPair, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PGPKeyPair;
  static deserializeBinaryFromReader(message: PGPKeyPair, reader: jspb.BinaryReader): PGPKeyPair;
}

export namespace PGPKeyPair {
  export type AsObject = {
    publicKey: string,
    privateKey: string,
  }
}

export class AESPassword extends jspb.Message {
  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AESPassword.AsObject;
  static toObject(includeInstance: boolean, msg: AESPassword): AESPassword.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AESPassword, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AESPassword;
  static deserializeBinaryFromReader(message: AESPassword, reader: jspb.BinaryReader): AESPassword;
}

export namespace AESPassword {
  export type AsObject = {
    password: string,
  }
}

export class Source extends jspb.Message {
  hasEncryption(): boolean;
  clearEncryption(): void;
  getEncryption(): api_commons_delivery_pb.Encryption | undefined;
  setEncryption(value?: api_commons_delivery_pb.Encryption): void;

  hasSftp(): boolean;
  clearSftp(): void;
  getSftp(): SftpSource | undefined;
  setSftp(value?: SftpSource): void;

  getValueCase(): Source.ValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Source.AsObject;
  static toObject(includeInstance: boolean, msg: Source): Source.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Source, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Source;
  static deserializeBinaryFromReader(message: Source, reader: jspb.BinaryReader): Source;
}

export namespace Source {
  export type AsObject = {
    encryption?: api_commons_delivery_pb.Encryption.AsObject,
    sftp?: SftpSource.AsObject,
  }

  export enum ValueCase {
    VALUE_NOT_SET = 0,
    SFTP = 2,
  }
}

export class SftpSource extends jspb.Message {
  getDirectory(): string;
  setDirectory(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SftpSource.AsObject;
  static toObject(includeInstance: boolean, msg: SftpSource): SftpSource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SftpSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SftpSource;
  static deserializeBinaryFromReader(message: SftpSource, reader: jspb.BinaryReader): SftpSource;
}

export namespace SftpSource {
  export type AsObject = {
    directory: string,
  }
}

export class GetCredentialReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): Credential | undefined;
  setEntity(value?: Credential): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCredentialReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetCredentialReq): GetCredentialReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCredentialReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCredentialReq;
  static deserializeBinaryFromReader(message: GetCredentialReq, reader: jspb.BinaryReader): GetCredentialReq;
}

export namespace GetCredentialReq {
  export type AsObject = {
    entity?: Credential.AsObject,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetCredentialRes extends jspb.Message {
  hasCredential(): boolean;
  clearCredential(): void;
  getCredential(): Credential | undefined;
  setCredential(value?: Credential): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCredentialRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetCredentialRes): GetCredentialRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCredentialRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCredentialRes;
  static deserializeBinaryFromReader(message: GetCredentialRes, reader: jspb.BinaryReader): GetCredentialRes;
}

export namespace GetCredentialRes {
  export type AsObject = {
    credential?: Credential.AsObject,
  }
}

export class ListCredentialsReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): ListReq | undefined;
  setEntity(value?: ListReq): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCredentialsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListCredentialsReq): ListCredentialsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCredentialsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCredentialsReq;
  static deserializeBinaryFromReader(message: ListCredentialsReq, reader: jspb.BinaryReader): ListCredentialsReq;
}

export namespace ListCredentialsReq {
  export type AsObject = {
    entity?: ListReq.AsObject,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ListCredentialsRes extends jspb.Message {
  hasCredentials(): boolean;
  clearCredentials(): void;
  getCredentials(): Credentials | undefined;
  setCredentials(value?: Credentials): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCredentialsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListCredentialsRes): ListCredentialsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCredentialsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCredentialsRes;
  static deserializeBinaryFromReader(message: ListCredentialsRes, reader: jspb.BinaryReader): ListCredentialsRes;
}

export namespace ListCredentialsRes {
  export type AsObject = {
    credentials?: Credentials.AsObject,
  }
}

export class CreateCredentialReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): Credential | undefined;
  setEntity(value?: Credential): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCredentialReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCredentialReq): CreateCredentialReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCredentialReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCredentialReq;
  static deserializeBinaryFromReader(message: CreateCredentialReq, reader: jspb.BinaryReader): CreateCredentialReq;
}

export namespace CreateCredentialReq {
  export type AsObject = {
    entity?: Credential.AsObject,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class CreateCredentialRes extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): ID | undefined;
  setEntity(value?: ID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCredentialRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCredentialRes): CreateCredentialRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCredentialRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCredentialRes;
  static deserializeBinaryFromReader(message: CreateCredentialRes, reader: jspb.BinaryReader): CreateCredentialRes;
}

export namespace CreateCredentialRes {
  export type AsObject = {
    entity?: ID.AsObject,
  }
}

export class DeleteCredentialReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): ID | undefined;
  setEntity(value?: ID): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCredentialReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCredentialReq): DeleteCredentialReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCredentialReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCredentialReq;
  static deserializeBinaryFromReader(message: DeleteCredentialReq, reader: jspb.BinaryReader): DeleteCredentialReq;
}

export namespace DeleteCredentialReq {
  export type AsObject = {
    entity?: ID.AsObject,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteCredentialRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCredentialRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCredentialRes): DeleteCredentialRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCredentialRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCredentialRes;
  static deserializeBinaryFromReader(message: DeleteCredentialRes, reader: jspb.BinaryReader): DeleteCredentialRes;
}

export namespace DeleteCredentialRes {
  export type AsObject = {
  }
}

export class UpdateCredentialReq extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): Credential | undefined;
  setEntity(value?: Credential): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCredentialReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCredentialReq): UpdateCredentialReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCredentialReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCredentialReq;
  static deserializeBinaryFromReader(message: UpdateCredentialReq, reader: jspb.BinaryReader): UpdateCredentialReq;
}

export namespace UpdateCredentialReq {
  export type AsObject = {
    entity?: Credential.AsObject,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateCredentialRes extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): ID | undefined;
  setEntity(value?: ID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCredentialRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCredentialRes): UpdateCredentialRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCredentialRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCredentialRes;
  static deserializeBinaryFromReader(message: UpdateCredentialRes, reader: jspb.BinaryReader): UpdateCredentialRes;
}

export namespace UpdateCredentialRes {
  export type AsObject = {
    entity?: ID.AsObject,
  }
}

export class Credentials extends jspb.Message {
  clearEntitiesList(): void;
  getEntitiesList(): Array<Credential>;
  setEntitiesList(value: Array<Credential>): void;
  addEntities(value?: Credential, index?: number): Credential;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Credentials.AsObject;
  static toObject(includeInstance: boolean, msg: Credentials): Credentials.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Credentials, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Credentials;
  static deserializeBinaryFromReader(message: Credentials, reader: jspb.BinaryReader): Credentials;
}

export namespace Credentials {
  export type AsObject = {
    entitiesList: Array<Credential.AsObject>,
  }
}

export class DeliveryDefinition extends jspb.Message {
  getDeliveryDefinitionSid(): string;
  setDeliveryDefinitionSid(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getTtl(): number;
  setTtl(value: number): void;

  hasSftp(): boolean;
  clearSftp(): void;
  getSftp(): SFTPTransport | undefined;
  setSftp(value?: SFTPTransport): void;

  hasEmail(): boolean;
  clearEmail(): void;
  getEmail(): EmailTransport | undefined;
  setEmail(value?: EmailTransport): void;

  hasRoom303(): boolean;
  clearRoom303(): void;
  getRoom303(): Room303Transport | undefined;
  setRoom303(value?: Room303Transport): void;

  hasSms(): boolean;
  clearSms(): void;
  getSms(): SMSTransport | undefined;
  setSms(value?: SMSTransport): void;

  hasAes(): boolean;
  clearAes(): void;
  getAes(): AESEncryptionRef | undefined;
  setAes(value?: AESEncryptionRef): void;

  hasPgp(): boolean;
  clearPgp(): void;
  getPgp(): PGPEncryptionRef | undefined;
  setPgp(value?: PGPEncryptionRef): void;

  hasCreatedOn(): boolean;
  clearCreatedOn(): void;
  getCreatedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedOn(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastEdited(): boolean;
  clearLastEdited(): void;
  getLastEdited(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastEdited(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTransportCase(): DeliveryDefinition.TransportCase;
  getEncryptionCase(): DeliveryDefinition.EncryptionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeliveryDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: DeliveryDefinition): DeliveryDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeliveryDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeliveryDefinition;
  static deserializeBinaryFromReader(message: DeliveryDefinition, reader: jspb.BinaryReader): DeliveryDefinition;
}

export namespace DeliveryDefinition {
  export type AsObject = {
    deliveryDefinitionSid: string,
    orgId: string,
    name: string,
    description: string,
    ttl: number,
    sftp?: SFTPTransport.AsObject,
    email?: EmailTransport.AsObject,
    room303?: Room303Transport.AsObject,
    sms?: SMSTransport.AsObject,
    aes?: AESEncryptionRef.AsObject,
    pgp?: PGPEncryptionRef.AsObject,
    createdOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastEdited?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum TransportCase {
    TRANSPORT_NOT_SET = 0,
    SFTP = 9,
    EMAIL = 10,
    ROOM303 = 11,
    SMS = 12,
  }

  export enum EncryptionCase {
    ENCRYPTION_NOT_SET = 0,
    AES = 13,
    PGP = 14,
  }
}

export class SFTPTransport extends jspb.Message {
  getHost(): string;
  setHost(value: string): void;

  getPort(): number;
  setPort(value: number): void;

  hasPassword(): boolean;
  clearPassword(): void;
  getPassword(): PasswordRef | undefined;
  setPassword(value?: PasswordRef): void;

  hasSshKey(): boolean;
  clearSshKey(): void;
  getSshKey(): SSHKeyRef | undefined;
  setSshKey(value?: SSHKeyRef): void;

  getUsername(): string;
  setUsername(value: string): void;

  getBaseDir(): string;
  setBaseDir(value: string): void;

  getCredentialsCase(): SFTPTransport.CredentialsCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SFTPTransport.AsObject;
  static toObject(includeInstance: boolean, msg: SFTPTransport): SFTPTransport.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SFTPTransport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SFTPTransport;
  static deserializeBinaryFromReader(message: SFTPTransport, reader: jspb.BinaryReader): SFTPTransport;
}

export namespace SFTPTransport {
  export type AsObject = {
    host: string,
    port: number,
    password?: PasswordRef.AsObject,
    sshKey?: SSHKeyRef.AsObject,
    username: string,
    baseDir: string,
  }

  export enum CredentialsCase {
    CREDENTIALS_NOT_SET = 0,
    PASSWORD = 3,
    SSH_KEY = 4,
  }
}

export class EmailTransport extends jspb.Message {
  getFromAddress(): string;
  setFromAddress(value: string): void;

  getToAddress(): string;
  setToAddress(value: string): void;

  clearCcAddressesList(): void;
  getCcAddressesList(): Array<string>;
  setCcAddressesList(value: Array<string>): void;
  addCcAddresses(value: string, index?: number): string;

  clearToAddressesList(): void;
  getToAddressesList(): Array<string>;
  setToAddressesList(value: Array<string>): void;
  addToAddresses(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailTransport.AsObject;
  static toObject(includeInstance: boolean, msg: EmailTransport): EmailTransport.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmailTransport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailTransport;
  static deserializeBinaryFromReader(message: EmailTransport, reader: jspb.BinaryReader): EmailTransport;
}

export namespace EmailTransport {
  export type AsObject = {
    fromAddress: string,
    toAddress: string,
    ccAddressesList: Array<string>,
    toAddressesList: Array<string>,
  }
}

export class Room303Transport extends jspb.Message {
  hasSystemMessage(): boolean;
  clearSystemMessage(): void;
  getSystemMessage(): Room303SystemMessage | undefined;
  setSystemMessage(value?: Room303SystemMessage): void;

  hasSystemMessages(): boolean;
  clearSystemMessages(): void;
  getSystemMessages(): Room303SystemMessages | undefined;
  setSystemMessages(value?: Room303SystemMessages): void;

  getTransportCase(): Room303Transport.TransportCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Room303Transport.AsObject;
  static toObject(includeInstance: boolean, msg: Room303Transport): Room303Transport.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Room303Transport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Room303Transport;
  static deserializeBinaryFromReader(message: Room303Transport, reader: jspb.BinaryReader): Room303Transport;
}

export namespace Room303Transport {
  export type AsObject = {
    systemMessage?: Room303SystemMessage.AsObject,
    systemMessages?: Room303SystemMessages.AsObject,
  }

  export enum TransportCase {
    TRANSPORT_NOT_SET = 0,
    SYSTEM_MESSAGE = 1,
    SYSTEM_MESSAGES = 2,
  }
}

export class Room303SystemMessage extends jspb.Message {
  getRoom(): string;
  setRoom(value: string): void;

  hasUsername(): boolean;
  clearUsername(): void;
  getUsername(): string;
  setUsername(value: string): void;

  hasUserId(): boolean;
  clearUserId(): void;
  getUserId(): string;
  setUserId(value: string): void;

  getUserCase(): Room303SystemMessage.UserCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Room303SystemMessage.AsObject;
  static toObject(includeInstance: boolean, msg: Room303SystemMessage): Room303SystemMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Room303SystemMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Room303SystemMessage;
  static deserializeBinaryFromReader(message: Room303SystemMessage, reader: jspb.BinaryReader): Room303SystemMessage;
}

export namespace Room303SystemMessage {
  export type AsObject = {
    room: string,
    username: string,
    userId: string,
  }

  export enum UserCase {
    USER_NOT_SET = 0,
    USERNAME = 2,
    USER_ID = 3,
  }
}

export class Room303SystemMessages extends jspb.Message {
  clearSystemMessagesList(): void;
  getSystemMessagesList(): Array<Room303SystemMessage>;
  setSystemMessagesList(value: Array<Room303SystemMessage>): void;
  addSystemMessages(value?: Room303SystemMessage, index?: number): Room303SystemMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Room303SystemMessages.AsObject;
  static toObject(includeInstance: boolean, msg: Room303SystemMessages): Room303SystemMessages.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Room303SystemMessages, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Room303SystemMessages;
  static deserializeBinaryFromReader(message: Room303SystemMessages, reader: jspb.BinaryReader): Room303SystemMessages;
}

export namespace Room303SystemMessages {
  export type AsObject = {
    systemMessagesList: Array<Room303SystemMessage.AsObject>,
  }
}

export class SMSTransport extends jspb.Message {
  getDestinationPhone(): string;
  setDestinationPhone(value: string): void;

  getSourcePhone(): string;
  setSourcePhone(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SMSTransport.AsObject;
  static toObject(includeInstance: boolean, msg: SMSTransport): SMSTransport.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SMSTransport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SMSTransport;
  static deserializeBinaryFromReader(message: SMSTransport, reader: jspb.BinaryReader): SMSTransport;
}

export namespace SMSTransport {
  export type AsObject = {
    destinationPhone: string,
    sourcePhone: string,
  }
}

export class AESEncryptionRef extends jspb.Message {
  getAesSid(): string;
  setAesSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AESEncryptionRef.AsObject;
  static toObject(includeInstance: boolean, msg: AESEncryptionRef): AESEncryptionRef.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AESEncryptionRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AESEncryptionRef;
  static deserializeBinaryFromReader(message: AESEncryptionRef, reader: jspb.BinaryReader): AESEncryptionRef;
}

export namespace AESEncryptionRef {
  export type AsObject = {
    aesSid: string,
  }
}

export class PGPEncryptionRef extends jspb.Message {
  getPgpSid(): string;
  setPgpSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PGPEncryptionRef.AsObject;
  static toObject(includeInstance: boolean, msg: PGPEncryptionRef): PGPEncryptionRef.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PGPEncryptionRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PGPEncryptionRef;
  static deserializeBinaryFromReader(message: PGPEncryptionRef, reader: jspb.BinaryReader): PGPEncryptionRef;
}

export namespace PGPEncryptionRef {
  export type AsObject = {
    pgpSid: string,
  }
}

export class PasswordRef extends jspb.Message {
  getPasswordSid(): string;
  setPasswordSid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PasswordRef.AsObject;
  static toObject(includeInstance: boolean, msg: PasswordRef): PasswordRef.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PasswordRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PasswordRef;
  static deserializeBinaryFromReader(message: PasswordRef, reader: jspb.BinaryReader): PasswordRef;
}

export namespace PasswordRef {
  export type AsObject = {
    passwordSid: string,
  }
}

export class SSHKeyRef extends jspb.Message {
  getSshKeySid(): string;
  setSshKeySid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SSHKeyRef.AsObject;
  static toObject(includeInstance: boolean, msg: SSHKeyRef): SSHKeyRef.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SSHKeyRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SSHKeyRef;
  static deserializeBinaryFromReader(message: SSHKeyRef, reader: jspb.BinaryReader): SSHKeyRef;
}

export namespace SSHKeyRef {
  export type AsObject = {
    sshKeySid: string,
  }
}

export class Encryption extends jspb.Message {
  getEncryptionSid(): number;
  setEncryptionSid(value: number): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasPgpKeyPair(): boolean;
  clearPgpKeyPair(): void;
  getPgpKeyPair(): PGPKeyPair | undefined;
  setPgpKeyPair(value?: PGPKeyPair): void;

  hasAesPassword(): boolean;
  clearAesPassword(): void;
  getAesPassword(): AESPassword | undefined;
  setAesPassword(value?: AESPassword): void;

  hasCreatedOn(): boolean;
  clearCreatedOn(): void;
  getCreatedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedOn(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastEdited(): boolean;
  clearLastEdited(): void;
  getLastEdited(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastEdited(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getEncryptionCase(): Encryption.EncryptionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Encryption.AsObject;
  static toObject(includeInstance: boolean, msg: Encryption): Encryption.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Encryption, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Encryption;
  static deserializeBinaryFromReader(message: Encryption, reader: jspb.BinaryReader): Encryption;
}

export namespace Encryption {
  export type AsObject = {
    encryptionSid: number,
    orgId: string,
    name: string,
    description: string,
    pgpKeyPair?: PGPKeyPair.AsObject,
    aesPassword?: AESPassword.AsObject,
    createdOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastEdited?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum EncryptionCase {
    ENCRYPTION_NOT_SET = 0,
    PGP_KEY_PAIR = 5,
    AES_PASSWORD = 6,
  }
}

export class ListSMSNumbersReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSMSNumbersReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListSMSNumbersReq): ListSMSNumbersReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSMSNumbersReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSMSNumbersReq;
  static deserializeBinaryFromReader(message: ListSMSNumbersReq, reader: jspb.BinaryReader): ListSMSNumbersReq;
}

export namespace ListSMSNumbersReq {
  export type AsObject = {
  }
}

export class ListSMSNumbersRes extends jspb.Message {
  clearSmsNumbersList(): void;
  getSmsNumbersList(): Array<api_commons_omnichannel_pb.SmsNumber>;
  setSmsNumbersList(value: Array<api_commons_omnichannel_pb.SmsNumber>): void;
  addSmsNumbers(value?: api_commons_omnichannel_pb.SmsNumber, index?: number): api_commons_omnichannel_pb.SmsNumber;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSMSNumbersRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListSMSNumbersRes): ListSMSNumbersRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSMSNumbersRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSMSNumbersRes;
  static deserializeBinaryFromReader(message: ListSMSNumbersRes, reader: jspb.BinaryReader): ListSMSNumbersRes;
}

export namespace ListSMSNumbersRes {
  export type AsObject = {
    smsNumbersList: Array<api_commons_omnichannel_pb.SmsNumber.AsObject>,
  }
}

