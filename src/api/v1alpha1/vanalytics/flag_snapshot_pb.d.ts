// package: api.v1alpha1.vanalytics
// file: api/v1alpha1/vanalytics/flag_snapshot.proto

import * as jspb from "google-protobuf";
import * as api_v1alpha1_vanalytics_dncl_list_pb from "../../../api/v1alpha1/vanalytics/dncl_list_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ListFlagSnapshotsRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): void;

  getOrderBy(): string;
  setOrderBy(value: string): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  clearFlagSnapshotSidsList(): void;
  getFlagSnapshotSidsList(): Array<number>;
  setFlagSnapshotSidsList(value: Array<number>): void;
  addFlagSnapshotSids(value: number, index?: number): number;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getTranscriptSid(): number;
  setTranscriptSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFlagSnapshotsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFlagSnapshotsRequest): ListFlagSnapshotsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFlagSnapshotsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFlagSnapshotsRequest;
  static deserializeBinaryFromReader(message: ListFlagSnapshotsRequest, reader: jspb.BinaryReader): ListFlagSnapshotsRequest;
}

export namespace ListFlagSnapshotsRequest {
  export type AsObject = {
    pageSize: number,
    orderBy: string,
    pageToken: string,
    flagSnapshotSidsList: Array<number>,
    mask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    transcriptSid: number,
  }
}

export class ListFlagSnapshotsResponse extends jspb.Message {
  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  clearFlagSnapshotsList(): void;
  getFlagSnapshotsList(): Array<FlagSnapshot>;
  setFlagSnapshotsList(value: Array<FlagSnapshot>): void;
  addFlagSnapshots(value?: FlagSnapshot, index?: number): FlagSnapshot;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFlagSnapshotsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFlagSnapshotsResponse): ListFlagSnapshotsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFlagSnapshotsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFlagSnapshotsResponse;
  static deserializeBinaryFromReader(message: ListFlagSnapshotsResponse, reader: jspb.BinaryReader): ListFlagSnapshotsResponse;
}

export namespace ListFlagSnapshotsResponse {
  export type AsObject = {
    nextPageToken: string,
    flagSnapshotsList: Array<FlagSnapshot.AsObject>,
  }
}

export class FlagSnapshot extends jspb.Message {
  getFlagSnapshotSid(): number;
  setFlagSnapshotSid(value: number): void;

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

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getMustReview(): boolean;
  setMustReview(value: boolean): void;

  getMustNotify(): boolean;
  setMustNotify(value: boolean): void;

  hasBoolExpr(): boolean;
  clearBoolExpr(): void;
  getBoolExpr(): FlagSnapshot.BoolExpr | undefined;
  setBoolExpr(value?: FlagSnapshot.BoolExpr): void;

  clearDnclListList(): void;
  getDnclListList(): Array<api_v1alpha1_vanalytics_dncl_list_pb.DnclList>;
  setDnclListList(value: Array<api_v1alpha1_vanalytics_dncl_list_pb.DnclList>): void;
  addDnclList(value?: api_v1alpha1_vanalytics_dncl_list_pb.DnclList, index?: number): api_v1alpha1_vanalytics_dncl_list_pb.DnclList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlagSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: FlagSnapshot): FlagSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlagSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlagSnapshot;
  static deserializeBinaryFromReader(message: FlagSnapshot, reader: jspb.BinaryReader): FlagSnapshot;
}

export namespace FlagSnapshot {
  export type AsObject = {
    flagSnapshotSid: number,
    flagSid: number,
    name: string,
    reviewGroupId: string,
    notifyGroupId: string,
    priority: number,
    version: number,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    mustReview: boolean,
    mustNotify: boolean,
    boolExpr?: FlagSnapshot.BoolExpr.AsObject,
    dnclListList: Array<api_v1alpha1_vanalytics_dncl_list_pb.DnclList.AsObject>,
  }

  export class BoolExpr extends jspb.Message {
    clearAndList(): void;
    getAndList(): Array<FlagSnapshot.BoolExpr>;
    setAndList(value: Array<FlagSnapshot.BoolExpr>): void;
    addAnd(value?: FlagSnapshot.BoolExpr, index?: number): FlagSnapshot.BoolExpr;

    clearOrList(): void;
    getOrList(): Array<FlagSnapshot.BoolExpr>;
    setOrList(value: Array<FlagSnapshot.BoolExpr>): void;
    addOr(value?: FlagSnapshot.BoolExpr, index?: number): FlagSnapshot.BoolExpr;

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): FlagSnapshot.BoolExpr.Filter | undefined;
    setFilter(value?: FlagSnapshot.BoolExpr.Filter): void;

    hasNot(): boolean;
    clearNot(): void;
    getNot(): FlagSnapshot.BoolExpr | undefined;
    setNot(value?: FlagSnapshot.BoolExpr): void;

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
      andList: Array<FlagSnapshot.BoolExpr.AsObject>,
      orList: Array<FlagSnapshot.BoolExpr.AsObject>,
      filter?: FlagSnapshot.BoolExpr.Filter.AsObject,
      not?: FlagSnapshot.BoolExpr.AsObject,
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

