// package: api.v1alpha1.vanalytics
// file: api/v1alpha1/vanalytics/flag.proto

import * as jspb from "google-protobuf";
import * as api_v1alpha1_vanalytics_dncl_list_pb from "../../../api/v1alpha1/vanalytics/dncl_list_pb";
import * as api_v1alpha1_vanalytics_filter_pb from "../../../api/v1alpha1/vanalytics/filter_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class CreateFlagRequest extends jspb.Message {
  hasFlag(): boolean;
  clearFlag(): void;
  getFlag(): Flag | undefined;
  setFlag(value?: Flag): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFlagRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFlagRequest): CreateFlagRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFlagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFlagRequest;
  static deserializeBinaryFromReader(message: CreateFlagRequest, reader: jspb.BinaryReader): CreateFlagRequest;
}

export namespace CreateFlagRequest {
  export type AsObject = {
    flag?: Flag.AsObject,
  }
}

export class ListFlagsRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): void;

  getOrderBy(): string;
  setOrderBy(value: string): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  hasFilterSid(): boolean;
  clearFilterSid(): void;
  getFilterSid(): number;
  setFilterSid(value: number): void;

  clearFlagSidsList(): void;
  getFlagSidsList(): Array<number>;
  setFlagSidsList(value: Array<number>): void;
  addFlagSids(value: number, index?: number): number;

  hasReadMask(): boolean;
  clearReadMask(): void;
  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  clearNamesList(): void;
  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): void;
  addNames(value: string, index?: number): string;

  clearPrioritiesList(): void;
  getPrioritiesList(): Array<number>;
  setPrioritiesList(value: Array<number>): void;
  addPriorities(value: number, index?: number): number;

  clearMustReviewList(): void;
  getMustReviewList(): Array<boolean>;
  setMustReviewList(value: Array<boolean>): void;
  addMustReview(value: boolean, index?: number): boolean;

  clearMustNotifyList(): void;
  getMustNotifyList(): Array<boolean>;
  setMustNotifyList(value: Array<boolean>): void;
  addMustNotify(value: boolean, index?: number): boolean;

  getWhereCase(): ListFlagsRequest.WhereCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFlagsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFlagsRequest): ListFlagsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFlagsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFlagsRequest;
  static deserializeBinaryFromReader(message: ListFlagsRequest, reader: jspb.BinaryReader): ListFlagsRequest;
}

export namespace ListFlagsRequest {
  export type AsObject = {
    pageSize: number,
    orderBy: string,
    pageToken: string,
    filterSid: number,
    flagSidsList: Array<number>,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    namesList: Array<string>,
    prioritiesList: Array<number>,
    mustReviewList: Array<boolean>,
    mustNotifyList: Array<boolean>,
  }

  export enum WhereCase {
    WHERE_NOT_SET = 0,
    FILTER_SID = 5,
  }
}

export class ListFlagsResponse extends jspb.Message {
  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  clearFlagsList(): void;
  getFlagsList(): Array<Flag>;
  setFlagsList(value: Array<Flag>): void;
  addFlags(value?: Flag, index?: number): Flag;

  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFlagsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFlagsResponse): ListFlagsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFlagsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFlagsResponse;
  static deserializeBinaryFromReader(message: ListFlagsResponse, reader: jspb.BinaryReader): ListFlagsResponse;
}

export namespace ListFlagsResponse {
  export type AsObject = {
    nextPageToken: string,
    flagsList: Array<Flag.AsObject>,
    total: number,
  }
}

export class UpdateFlagRequest extends jspb.Message {
  getFlagSid(): number;
  setFlagSid(value: number): void;

  hasFlag(): boolean;
  clearFlag(): void;
  getFlag(): Flag | undefined;
  setFlag(value?: Flag): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFlagRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFlagRequest): UpdateFlagRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateFlagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFlagRequest;
  static deserializeBinaryFromReader(message: UpdateFlagRequest, reader: jspb.BinaryReader): UpdateFlagRequest;
}

export namespace UpdateFlagRequest {
  export type AsObject = {
    flagSid: number,
    flag?: Flag.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteFlagRequest extends jspb.Message {
  getFlagSid(): number;
  setFlagSid(value: number): void;

  getReturn(): boolean;
  setReturn(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFlagRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFlagRequest): DeleteFlagRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteFlagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFlagRequest;
  static deserializeBinaryFromReader(message: DeleteFlagRequest, reader: jspb.BinaryReader): DeleteFlagRequest;
}

export namespace DeleteFlagRequest {
  export type AsObject = {
    flagSid: number,
    pb_return: boolean,
  }
}

export class DeleteFlagResponse extends jspb.Message {
  hasFlag(): boolean;
  clearFlag(): void;
  getFlag(): Flag | undefined;
  setFlag(value?: Flag): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFlagResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFlagResponse): DeleteFlagResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteFlagResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFlagResponse;
  static deserializeBinaryFromReader(message: DeleteFlagResponse, reader: jspb.BinaryReader): DeleteFlagResponse;
}

export namespace DeleteFlagResponse {
  export type AsObject = {
    flag?: Flag.AsObject,
  }
}

export class GetFlagRequest extends jspb.Message {
  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  hasFlagSid(): boolean;
  clearFlagSid(): void;
  getFlagSid(): number;
  setFlagSid(value: number): void;

  getWhereCase(): GetFlagRequest.WhereCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFlagRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFlagRequest): GetFlagRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFlagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFlagRequest;
  static deserializeBinaryFromReader(message: GetFlagRequest, reader: jspb.BinaryReader): GetFlagRequest;
}

export namespace GetFlagRequest {
  export type AsObject = {
    name: string,
    flagSid: number,
  }

  export enum WhereCase {
    WHERE_NOT_SET = 0,
    NAME = 2,
    FLAG_SID = 3,
  }
}

export class Flag extends jspb.Message {
  getFlagSid(): number;
  setFlagSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getReviewGroupId(): string;
  setReviewGroupId(value: string): void;

  getNotifyGroupId(): string;
  setNotifyGroupId(value: string): void;

  getPriority(): number;
  setPriority(value: number): void;

  getVersion(): number;
  setVersion(value: number): void;

  clearFiltersList(): void;
  getFiltersList(): Array<api_v1alpha1_vanalytics_filter_pb.Filter>;
  setFiltersList(value: Array<api_v1alpha1_vanalytics_filter_pb.Filter>): void;
  addFilters(value?: api_v1alpha1_vanalytics_filter_pb.Filter, index?: number): api_v1alpha1_vanalytics_filter_pb.Filter;

  getMustReview(): boolean;
  setMustReview(value: boolean): void;

  getMustNotify(): boolean;
  setMustNotify(value: boolean): void;

  hasBoolExpr(): boolean;
  clearBoolExpr(): void;
  getBoolExpr(): Flag.BoolExpr | undefined;
  setBoolExpr(value?: Flag.BoolExpr): void;

  clearDnclListList(): void;
  getDnclListList(): Array<api_v1alpha1_vanalytics_dncl_list_pb.DnclList>;
  setDnclListList(value: Array<api_v1alpha1_vanalytics_dncl_list_pb.DnclList>): void;
  addDnclList(value?: api_v1alpha1_vanalytics_dncl_list_pb.DnclList, index?: number): api_v1alpha1_vanalytics_dncl_list_pb.DnclList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Flag.AsObject;
  static toObject(includeInstance: boolean, msg: Flag): Flag.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Flag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Flag;
  static deserializeBinaryFromReader(message: Flag, reader: jspb.BinaryReader): Flag;
}

export namespace Flag {
  export type AsObject = {
    flagSid: number,
    name: string,
    reviewGroupId: string,
    notifyGroupId: string,
    priority: number,
    version: number,
    filtersList: Array<api_v1alpha1_vanalytics_filter_pb.Filter.AsObject>,
    mustReview: boolean,
    mustNotify: boolean,
    boolExpr?: Flag.BoolExpr.AsObject,
    dnclListList: Array<api_v1alpha1_vanalytics_dncl_list_pb.DnclList.AsObject>,
  }

  export class BoolExpr extends jspb.Message {
    clearAndList(): void;
    getAndList(): Array<Flag.BoolExpr>;
    setAndList(value: Array<Flag.BoolExpr>): void;
    addAnd(value?: Flag.BoolExpr, index?: number): Flag.BoolExpr;

    clearOrList(): void;
    getOrList(): Array<Flag.BoolExpr>;
    setOrList(value: Array<Flag.BoolExpr>): void;
    addOr(value?: Flag.BoolExpr, index?: number): Flag.BoolExpr;

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): Flag.BoolExpr.Filter | undefined;
    setFilter(value?: Flag.BoolExpr.Filter): void;

    hasNot(): boolean;
    clearNot(): void;
    getNot(): Flag.BoolExpr | undefined;
    setNot(value?: Flag.BoolExpr): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BoolExpr.AsObject;
    static toObject(includeInstance: boolean, msg: BoolExpr): BoolExpr.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BoolExpr, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BoolExpr;
    static deserializeBinaryFromReader(message: BoolExpr, reader: jspb.BinaryReader): BoolExpr;
  }

  export namespace BoolExpr {
    export type AsObject = {
      andList: Array<Flag.BoolExpr.AsObject>,
      orList: Array<Flag.BoolExpr.AsObject>,
      filter?: Flag.BoolExpr.Filter.AsObject,
      not?: Flag.BoolExpr.AsObject,
    }

    export class Filter extends jspb.Message {
      getFilterSid(): number;
      setFilterSid(value: number): void;

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
      }
    }
  }
}

