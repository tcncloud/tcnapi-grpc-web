// package: services.billing.entities.v1alpha4
// file: services/billing/entities/v1alpha4/tags.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class BillingTag extends jspb.Message {
  getBillingTagId(): string;
  setBillingTagId(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDeleteTime(): boolean;
  clearDeleteTime(): void;
  getDeleteTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeleteTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getCategory(): string;
  setCategory(value: string): void;

  getBillingCategory(): CategoryMap[keyof CategoryMap];
  setBillingCategory(value: CategoryMap[keyof CategoryMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingTag.AsObject;
  static toObject(includeInstance: boolean, msg: BillingTag): BillingTag.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillingTag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingTag;
  static deserializeBinaryFromReader(message: BillingTag, reader: jspb.BinaryReader): BillingTag;
}

export namespace BillingTag {
  export type AsObject = {
    billingTagId: string,
    name: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deleteTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    category: string,
    billingCategory: CategoryMap[keyof CategoryMap],
  }
}

export interface CategoryMap {
  CATEGORY_UNSPECIFIED: 0;
  CATEGORY_COMMUNICATIONS_OMNI_CHAT: 100;
  CATEGORY_COMMUNICATIONS_OMNI_EMAIL: 101;
  CATEGORY_COMMUNICATIONS_OMNI_SMS: 102;
  CATEGORY_COMMUNICATIONS_OMNI_AGENT: 103;
  CATEGORY_COMMUNICATIONS_OMNI_RESOURCES: 104;
  CATEGORY_DATA_MANAGEMENT_COMPLIANCE: 200;
}

export const Category: CategoryMap;

