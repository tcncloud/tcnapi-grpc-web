// package: services.billing.v1alpha4
// file: services/billing/v1alpha4/sku.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as services_billing_entities_v1alpha4_rates_pb from "../../../services/billing/entities/v1alpha4/rates_pb";
import * as services_billing_v1alpha4_core_pb from "../../../services/billing/v1alpha4/core_pb";

export class CreateSkuRequest extends jspb.Message {
  getSkuId(): string;
  setSkuId(value: string): void;

  hasSku(): boolean;
  clearSku(): void;
  getSku(): services_billing_entities_v1alpha4_rates_pb.Sku | undefined;
  setSku(value?: services_billing_entities_v1alpha4_rates_pb.Sku): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSkuRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSkuRequest): CreateSkuRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSkuRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSkuRequest;
  static deserializeBinaryFromReader(message: CreateSkuRequest, reader: jspb.BinaryReader): CreateSkuRequest;
}

export namespace CreateSkuRequest {
  export type AsObject = {
    skuId: string,
    sku?: services_billing_entities_v1alpha4_rates_pb.Sku.AsObject,
  }
}

export class CreateSkuResponse extends jspb.Message {
  getSkuId(): string;
  setSkuId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSkuResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSkuResponse): CreateSkuResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSkuResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSkuResponse;
  static deserializeBinaryFromReader(message: CreateSkuResponse, reader: jspb.BinaryReader): CreateSkuResponse;
}

export namespace CreateSkuResponse {
  export type AsObject = {
    skuId: string,
  }
}

export class DeleteSkuRequest extends jspb.Message {
  getSkuId(): string;
  setSkuId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSkuRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSkuRequest): DeleteSkuRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSkuRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSkuRequest;
  static deserializeBinaryFromReader(message: DeleteSkuRequest, reader: jspb.BinaryReader): DeleteSkuRequest;
}

export namespace DeleteSkuRequest {
  export type AsObject = {
    skuId: string,
  }
}

export class DeleteSkuResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSkuResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSkuResponse): DeleteSkuResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSkuResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSkuResponse;
  static deserializeBinaryFromReader(message: DeleteSkuResponse, reader: jspb.BinaryReader): DeleteSkuResponse;
}

export namespace DeleteSkuResponse {
  export type AsObject = {
  }
}

export class GetSkuRequest extends jspb.Message {
  getSkuId(): string;
  setSkuId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSkuRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSkuRequest): GetSkuRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSkuRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSkuRequest;
  static deserializeBinaryFromReader(message: GetSkuRequest, reader: jspb.BinaryReader): GetSkuRequest;
}

export namespace GetSkuRequest {
  export type AsObject = {
    skuId: string,
  }
}

export class GetSkuResponse extends jspb.Message {
  hasSku(): boolean;
  clearSku(): void;
  getSku(): services_billing_entities_v1alpha4_rates_pb.Sku | undefined;
  setSku(value?: services_billing_entities_v1alpha4_rates_pb.Sku): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSkuResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSkuResponse): GetSkuResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSkuResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSkuResponse;
  static deserializeBinaryFromReader(message: GetSkuResponse, reader: jspb.BinaryReader): GetSkuResponse;
}

export namespace GetSkuResponse {
  export type AsObject = {
    sku?: services_billing_entities_v1alpha4_rates_pb.Sku.AsObject,
  }
}

export class ListSkusRequest extends jspb.Message {
  getSkuId(): string;
  setSkuId(value: string): void;

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
  toObject(includeInstance?: boolean): ListSkusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSkusRequest): ListSkusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSkusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSkusRequest;
  static deserializeBinaryFromReader(message: ListSkusRequest, reader: jspb.BinaryReader): ListSkusRequest;
}

export namespace ListSkusRequest {
  export type AsObject = {
    skuId: string,
    filter: string,
    fields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    sortList: Array<services_billing_v1alpha4_core_pb.Sort.AsObject>,
    page?: services_billing_v1alpha4_core_pb.Page.AsObject,
  }
}

export class ListSkusResponse extends jspb.Message {
  clearSkusList(): void;
  getSkusList(): Array<services_billing_entities_v1alpha4_rates_pb.Sku>;
  setSkusList(value: Array<services_billing_entities_v1alpha4_rates_pb.Sku>): void;
  addSkus(value?: services_billing_entities_v1alpha4_rates_pb.Sku, index?: number): services_billing_entities_v1alpha4_rates_pb.Sku;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSkusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSkusResponse): ListSkusResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSkusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSkusResponse;
  static deserializeBinaryFromReader(message: ListSkusResponse, reader: jspb.BinaryReader): ListSkusResponse;
}

export namespace ListSkusResponse {
  export type AsObject = {
    skusList: Array<services_billing_entities_v1alpha4_rates_pb.Sku.AsObject>,
    token: string,
  }
}

export class UpdateSkuRequest extends jspb.Message {
  getSkuId(): string;
  setSkuId(value: string): void;

  hasSku(): boolean;
  clearSku(): void;
  getSku(): services_billing_entities_v1alpha4_rates_pb.Sku | undefined;
  setSku(value?: services_billing_entities_v1alpha4_rates_pb.Sku): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSkuRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSkuRequest): UpdateSkuRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSkuRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSkuRequest;
  static deserializeBinaryFromReader(message: UpdateSkuRequest, reader: jspb.BinaryReader): UpdateSkuRequest;
}

export namespace UpdateSkuRequest {
  export type AsObject = {
    skuId: string,
    sku?: services_billing_entities_v1alpha4_rates_pb.Sku.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateSkuResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSkuResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSkuResponse): UpdateSkuResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSkuResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSkuResponse;
  static deserializeBinaryFromReader(message: UpdateSkuResponse, reader: jspb.BinaryReader): UpdateSkuResponse;
}

export namespace UpdateSkuResponse {
  export type AsObject = {
  }
}

