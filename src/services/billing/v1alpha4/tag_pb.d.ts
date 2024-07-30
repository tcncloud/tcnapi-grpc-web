// package: services.billing.v1alpha4
// file: services/billing/v1alpha4/tag.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as services_billing_entities_v1alpha4_tags_pb from "../../../services/billing/entities/v1alpha4/tags_pb";
import * as services_billing_v1alpha4_core_pb from "../../../services/billing/v1alpha4/core_pb";

export class CreateBillingTagRequest extends jspb.Message {
  getBillingTagId(): string;
  setBillingTagId(value: string): void;

  hasBillingTag(): boolean;
  clearBillingTag(): void;
  getBillingTag(): services_billing_entities_v1alpha4_tags_pb.BillingTag | undefined;
  setBillingTag(value?: services_billing_entities_v1alpha4_tags_pb.BillingTag): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBillingTagRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBillingTagRequest): CreateBillingTagRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateBillingTagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBillingTagRequest;
  static deserializeBinaryFromReader(message: CreateBillingTagRequest, reader: jspb.BinaryReader): CreateBillingTagRequest;
}

export namespace CreateBillingTagRequest {
  export type AsObject = {
    billingTagId: string,
    billingTag?: services_billing_entities_v1alpha4_tags_pb.BillingTag.AsObject,
  }
}

export class CreateBillingTagResponse extends jspb.Message {
  getBillingTagId(): string;
  setBillingTagId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBillingTagResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBillingTagResponse): CreateBillingTagResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateBillingTagResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBillingTagResponse;
  static deserializeBinaryFromReader(message: CreateBillingTagResponse, reader: jspb.BinaryReader): CreateBillingTagResponse;
}

export namespace CreateBillingTagResponse {
  export type AsObject = {
    billingTagId: string,
  }
}

export class DeleteBillingTagRequest extends jspb.Message {
  getBillingTagId(): string;
  setBillingTagId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBillingTagRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBillingTagRequest): DeleteBillingTagRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteBillingTagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBillingTagRequest;
  static deserializeBinaryFromReader(message: DeleteBillingTagRequest, reader: jspb.BinaryReader): DeleteBillingTagRequest;
}

export namespace DeleteBillingTagRequest {
  export type AsObject = {
    billingTagId: string,
  }
}

export class DeleteBillingTagResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBillingTagResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBillingTagResponse): DeleteBillingTagResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteBillingTagResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBillingTagResponse;
  static deserializeBinaryFromReader(message: DeleteBillingTagResponse, reader: jspb.BinaryReader): DeleteBillingTagResponse;
}

export namespace DeleteBillingTagResponse {
  export type AsObject = {
  }
}

export class GetBillingTagRequest extends jspb.Message {
  getBillingTagId(): string;
  setBillingTagId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillingTagRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillingTagRequest): GetBillingTagRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBillingTagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillingTagRequest;
  static deserializeBinaryFromReader(message: GetBillingTagRequest, reader: jspb.BinaryReader): GetBillingTagRequest;
}

export namespace GetBillingTagRequest {
  export type AsObject = {
    billingTagId: string,
  }
}

export class GetBillingTagResponse extends jspb.Message {
  hasBillingTag(): boolean;
  clearBillingTag(): void;
  getBillingTag(): services_billing_entities_v1alpha4_tags_pb.BillingTag | undefined;
  setBillingTag(value?: services_billing_entities_v1alpha4_tags_pb.BillingTag): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillingTagResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillingTagResponse): GetBillingTagResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBillingTagResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillingTagResponse;
  static deserializeBinaryFromReader(message: GetBillingTagResponse, reader: jspb.BinaryReader): GetBillingTagResponse;
}

export namespace GetBillingTagResponse {
  export type AsObject = {
    billingTag?: services_billing_entities_v1alpha4_tags_pb.BillingTag.AsObject,
  }
}

export class ListBillingTagsRequest extends jspb.Message {
  getBillingTagId(): string;
  setBillingTagId(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  hasFields(): boolean;
  clearFields(): void;
  getFields(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFields(value?: google_protobuf_field_mask_pb.FieldMask): void;

  clearSortList(): void;
  getSortList(): Array<services_billing_v1alpha4_core_pb.Sort>;
  setSortList(value: Array<services_billing_v1alpha4_core_pb.Sort>): void;
  addSort(value?: services_billing_v1alpha4_core_pb.Sort, index?: number): services_billing_v1alpha4_core_pb.Sort;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): services_billing_v1alpha4_core_pb.Page | undefined;
  setPage(value?: services_billing_v1alpha4_core_pb.Page): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBillingTagsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBillingTagsRequest): ListBillingTagsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBillingTagsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBillingTagsRequest;
  static deserializeBinaryFromReader(message: ListBillingTagsRequest, reader: jspb.BinaryReader): ListBillingTagsRequest;
}

export namespace ListBillingTagsRequest {
  export type AsObject = {
    billingTagId: string,
    filter: string,
    fields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    sortList: Array<services_billing_v1alpha4_core_pb.Sort.AsObject>,
    page?: services_billing_v1alpha4_core_pb.Page.AsObject,
  }
}

export class ListBillingTagsResponse extends jspb.Message {
  clearBillingTagsList(): void;
  getBillingTagsList(): Array<services_billing_entities_v1alpha4_tags_pb.BillingTag>;
  setBillingTagsList(value: Array<services_billing_entities_v1alpha4_tags_pb.BillingTag>): void;
  addBillingTags(value?: services_billing_entities_v1alpha4_tags_pb.BillingTag, index?: number): services_billing_entities_v1alpha4_tags_pb.BillingTag;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBillingTagsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBillingTagsResponse): ListBillingTagsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBillingTagsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBillingTagsResponse;
  static deserializeBinaryFromReader(message: ListBillingTagsResponse, reader: jspb.BinaryReader): ListBillingTagsResponse;
}

export namespace ListBillingTagsResponse {
  export type AsObject = {
    billingTagsList: Array<services_billing_entities_v1alpha4_tags_pb.BillingTag.AsObject>,
    token: string,
  }
}

export class UpdateBillingTagRequest extends jspb.Message {
  getBillingTagId(): string;
  setBillingTagId(value: string): void;

  hasBillingTag(): boolean;
  clearBillingTag(): void;
  getBillingTag(): services_billing_entities_v1alpha4_tags_pb.BillingTag | undefined;
  setBillingTag(value?: services_billing_entities_v1alpha4_tags_pb.BillingTag): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBillingTagRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBillingTagRequest): UpdateBillingTagRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBillingTagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBillingTagRequest;
  static deserializeBinaryFromReader(message: UpdateBillingTagRequest, reader: jspb.BinaryReader): UpdateBillingTagRequest;
}

export namespace UpdateBillingTagRequest {
  export type AsObject = {
    billingTagId: string,
    billingTag?: services_billing_entities_v1alpha4_tags_pb.BillingTag.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateBillingTagResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBillingTagResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBillingTagResponse): UpdateBillingTagResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBillingTagResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBillingTagResponse;
  static deserializeBinaryFromReader(message: UpdateBillingTagResponse, reader: jspb.BinaryReader): UpdateBillingTagResponse;
}

export namespace UpdateBillingTagResponse {
  export type AsObject = {
  }
}

