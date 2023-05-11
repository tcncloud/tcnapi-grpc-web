// package: api.v1alpha1.vanalytics
// file: api/v1alpha1/vanalytics/filter.proto

import * as jspb from "google-protobuf";
import * as api_v1alpha1_vanalytics_transcript_pb from "../../../api/v1alpha1/vanalytics/transcript_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class CreateFilterRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): Filter | undefined;
  setFilter(value?: Filter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFilterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFilterRequest): CreateFilterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFilterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFilterRequest;
  static deserializeBinaryFromReader(message: CreateFilterRequest, reader: jspb.BinaryReader): CreateFilterRequest;
}

export namespace CreateFilterRequest {
  export type AsObject = {
    filter?: Filter.AsObject,
  }
}

export class ListFiltersRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): void;

  getOrderBy(): string;
  setOrderBy(value: string): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  hasConflict(): boolean;
  clearConflict(): void;
  getConflict(): Filter | undefined;
  setConflict(value?: Filter): void;

  hasFlagSid(): boolean;
  clearFlagSid(): void;
  getFlagSid(): number;
  setFlagSid(value: number): void;

  getWhereCase(): ListFiltersRequest.WhereCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFiltersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFiltersRequest): ListFiltersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFiltersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFiltersRequest;
  static deserializeBinaryFromReader(message: ListFiltersRequest, reader: jspb.BinaryReader): ListFiltersRequest;
}

export namespace ListFiltersRequest {
  export type AsObject = {
    pageSize: number,
    orderBy: string,
    pageToken: string,
    conflict?: Filter.AsObject,
    flagSid: number,
  }

  export enum WhereCase {
    WHERE_NOT_SET = 0,
    CONFLICT = 5,
    FLAG_SID = 6,
  }
}

export class ListFiltersResponse extends jspb.Message {
  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  clearFiltersList(): void;
  getFiltersList(): Array<Filter>;
  setFiltersList(value: Array<Filter>): void;
  addFilters(value?: Filter, index?: number): Filter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFiltersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFiltersResponse): ListFiltersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFiltersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFiltersResponse;
  static deserializeBinaryFromReader(message: ListFiltersResponse, reader: jspb.BinaryReader): ListFiltersResponse;
}

export namespace ListFiltersResponse {
  export type AsObject = {
    nextPageToken: string,
    filtersList: Array<Filter.AsObject>,
  }
}

export class UpdateFilterRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): Filter | undefined;
  setFilter(value?: Filter): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getFilterSid(): number;
  setFilterSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFilterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFilterRequest): UpdateFilterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateFilterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFilterRequest;
  static deserializeBinaryFromReader(message: UpdateFilterRequest, reader: jspb.BinaryReader): UpdateFilterRequest;
}

export namespace UpdateFilterRequest {
  export type AsObject = {
    filter?: Filter.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    filterSid: number,
  }
}

export class DeleteFilterRequest extends jspb.Message {
  getFilterSid(): number;
  setFilterSid(value: number): void;

  getReturn(): boolean;
  setReturn(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFilterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFilterRequest): DeleteFilterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteFilterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFilterRequest;
  static deserializeBinaryFromReader(message: DeleteFilterRequest, reader: jspb.BinaryReader): DeleteFilterRequest;
}

export namespace DeleteFilterRequest {
  export type AsObject = {
    filterSid: number,
    pb_return: boolean,
  }
}

export class DeleteFilterResponse extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): Filter | undefined;
  setFilter(value?: Filter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFilterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFilterResponse): DeleteFilterResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteFilterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFilterResponse;
  static deserializeBinaryFromReader(message: DeleteFilterResponse, reader: jspb.BinaryReader): DeleteFilterResponse;
}

export namespace DeleteFilterResponse {
  export type AsObject = {
    filter?: Filter.AsObject,
  }
}

export class GetFilterRequest extends jspb.Message {
  hasSearchRequest(): boolean;
  clearSearchRequest(): void;
  getSearchRequest(): api_v1alpha1_vanalytics_transcript_pb.SearchRequest | undefined;
  setSearchRequest(value?: api_v1alpha1_vanalytics_transcript_pb.SearchRequest): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  hasFilterSid(): boolean;
  clearFilterSid(): void;
  getFilterSid(): number;
  setFilterSid(value: number): void;

  getWhereCase(): GetFilterRequest.WhereCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFilterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFilterRequest): GetFilterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFilterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFilterRequest;
  static deserializeBinaryFromReader(message: GetFilterRequest, reader: jspb.BinaryReader): GetFilterRequest;
}

export namespace GetFilterRequest {
  export type AsObject = {
    searchRequest?: api_v1alpha1_vanalytics_transcript_pb.SearchRequest.AsObject,
    name: string,
    filterSid: number,
  }

  export enum WhereCase {
    WHERE_NOT_SET = 0,
    SEARCH_REQUEST = 2,
    NAME = 3,
    FILTER_SID = 4,
  }
}

export class Filter extends jspb.Message {
  getFilterSid(): number;
  setFilterSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  hasSearchRequest(): boolean;
  clearSearchRequest(): void;
  getSearchRequest(): api_v1alpha1_vanalytics_transcript_pb.SearchRequest | undefined;
  setSearchRequest(value?: api_v1alpha1_vanalytics_transcript_pb.SearchRequest): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getVersion(): number;
  setVersion(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Filter.AsObject;
  static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Filter;
  static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
}

export namespace Filter {
  export type AsObject = {
    filterSid: number,
    name: string,
    searchRequest?: api_v1alpha1_vanalytics_transcript_pb.SearchRequest.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    version: number,
  }
}

