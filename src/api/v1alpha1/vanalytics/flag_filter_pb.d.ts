// package: api.v1alpha1.vanalytics
// file: api/v1alpha1/vanalytics/flag_filter.proto

import * as jspb from "google-protobuf";
import * as api_v1alpha1_vanalytics_filter_pb from "../../../api/v1alpha1/vanalytics/filter_pb";
import * as api_v1alpha1_vanalytics_flag_pb from "../../../api/v1alpha1/vanalytics/flag_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class CreateFlagFilterRequest extends jspb.Message {
  hasFlagFilter(): boolean;
  clearFlagFilter(): void;
  getFlagFilter(): FlagFilter | undefined;
  setFlagFilter(value?: FlagFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFlagFilterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFlagFilterRequest): CreateFlagFilterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFlagFilterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFlagFilterRequest;
  static deserializeBinaryFromReader(message: CreateFlagFilterRequest, reader: jspb.BinaryReader): CreateFlagFilterRequest;
}

export namespace CreateFlagFilterRequest {
  export type AsObject = {
    flagFilter?: FlagFilter.AsObject,
  }
}

export class ListFlagFiltersRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  hasFlagMask(): boolean;
  clearFlagMask(): void;
  getFlagMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFlagMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasFilterMask(): boolean;
  clearFilterMask(): void;
  getFilterMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFilterMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  clearFlagSidsList(): void;
  getFlagSidsList(): Array<number>;
  setFlagSidsList(value: Array<number>): void;
  addFlagSids(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFlagFiltersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFlagFiltersRequest): ListFlagFiltersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFlagFiltersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFlagFiltersRequest;
  static deserializeBinaryFromReader(message: ListFlagFiltersRequest, reader: jspb.BinaryReader): ListFlagFiltersRequest;
}

export namespace ListFlagFiltersRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: string,
    flagMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    filterMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    flagSidsList: Array<number>,
  }
}

export class ListFlagFiltersResponse extends jspb.Message {
  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  clearFlagFiltersList(): void;
  getFlagFiltersList(): Array<FlagFilter>;
  setFlagFiltersList(value: Array<FlagFilter>): void;
  addFlagFilters(value?: FlagFilter, index?: number): FlagFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFlagFiltersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFlagFiltersResponse): ListFlagFiltersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFlagFiltersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFlagFiltersResponse;
  static deserializeBinaryFromReader(message: ListFlagFiltersResponse, reader: jspb.BinaryReader): ListFlagFiltersResponse;
}

export namespace ListFlagFiltersResponse {
  export type AsObject = {
    nextPageToken: string,
    flagFiltersList: Array<FlagFilter.AsObject>,
  }
}

export class DeleteFlagFilterRequest extends jspb.Message {
  getFlagSid(): number;
  setFlagSid(value: number): void;

  getFilterSid(): number;
  setFilterSid(value: number): void;

  getAll(): boolean;
  setAll(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFlagFilterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFlagFilterRequest): DeleteFlagFilterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteFlagFilterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFlagFilterRequest;
  static deserializeBinaryFromReader(message: DeleteFlagFilterRequest, reader: jspb.BinaryReader): DeleteFlagFilterRequest;
}

export namespace DeleteFlagFilterRequest {
  export type AsObject = {
    flagSid: number,
    filterSid: number,
    all: boolean,
  }
}

export class DeleteFlagFilterResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFlagFilterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFlagFilterResponse): DeleteFlagFilterResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteFlagFilterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFlagFilterResponse;
  static deserializeBinaryFromReader(message: DeleteFlagFilterResponse, reader: jspb.BinaryReader): DeleteFlagFilterResponse;
}

export namespace DeleteFlagFilterResponse {
  export type AsObject = {
  }
}

export class FlagFilter extends jspb.Message {
  getFlagFilterSid(): number;
  setFlagFilterSid(value: number): void;

  getFilterSid(): number;
  setFilterSid(value: number): void;

  getFlagSid(): number;
  setFlagSid(value: number): void;

  hasFlag(): boolean;
  clearFlag(): void;
  getFlag(): api_v1alpha1_vanalytics_flag_pb.Flag | undefined;
  setFlag(value?: api_v1alpha1_vanalytics_flag_pb.Flag): void;

  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): api_v1alpha1_vanalytics_filter_pb.Filter | undefined;
  setFilter(value?: api_v1alpha1_vanalytics_filter_pb.Filter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlagFilter.AsObject;
  static toObject(includeInstance: boolean, msg: FlagFilter): FlagFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlagFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlagFilter;
  static deserializeBinaryFromReader(message: FlagFilter, reader: jspb.BinaryReader): FlagFilter;
}

export namespace FlagFilter {
  export type AsObject = {
    flagFilterSid: number,
    filterSid: number,
    flagSid: number,
    flag?: api_v1alpha1_vanalytics_flag_pb.Flag.AsObject,
    filter?: api_v1alpha1_vanalytics_filter_pb.Filter.AsObject,
  }
}

