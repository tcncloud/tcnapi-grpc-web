// package: services.billing.v1alpha3
// file: services/billing/v1alpha3/plan.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as services_billing_entities_v1alpha3_plans_pb from "../../../services/billing/entities/v1alpha3/plans_pb";
import * as services_billing_v1alpha3_core_pb from "../../../services/billing/v1alpha3/core_pb";

export class CreatePlanRequest extends jspb.Message {
  getPlanId(): string;
  setPlanId(value: string): void;

  hasPlan(): boolean;
  clearPlan(): void;
  getPlan(): services_billing_entities_v1alpha3_plans_pb.Plan | undefined;
  setPlan(value?: services_billing_entities_v1alpha3_plans_pb.Plan): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePlanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePlanRequest): CreatePlanRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePlanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePlanRequest;
  static deserializeBinaryFromReader(message: CreatePlanRequest, reader: jspb.BinaryReader): CreatePlanRequest;
}

export namespace CreatePlanRequest {
  export type AsObject = {
    planId: string,
    plan?: services_billing_entities_v1alpha3_plans_pb.Plan.AsObject,
  }
}

export class CreatePlanResponse extends jspb.Message {
  getPlanId(): string;
  setPlanId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePlanResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePlanResponse): CreatePlanResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePlanResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePlanResponse;
  static deserializeBinaryFromReader(message: CreatePlanResponse, reader: jspb.BinaryReader): CreatePlanResponse;
}

export namespace CreatePlanResponse {
  export type AsObject = {
    planId: string,
  }
}

export class GetPlanChangelogRequest extends jspb.Message {
  hasSearchTime(): boolean;
  clearSearchTime(): void;
  getSearchTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSearchTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPlanChangelogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPlanChangelogRequest): GetPlanChangelogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPlanChangelogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPlanChangelogRequest;
  static deserializeBinaryFromReader(message: GetPlanChangelogRequest, reader: jspb.BinaryReader): GetPlanChangelogRequest;
}

export namespace GetPlanChangelogRequest {
  export type AsObject = {
    searchTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetPlanChangelogResponse extends jspb.Message {
  clearPlansList(): void;
  getPlansList(): Array<services_billing_entities_v1alpha3_plans_pb.Plan>;
  setPlansList(value: Array<services_billing_entities_v1alpha3_plans_pb.Plan>): void;
  addPlans(value?: services_billing_entities_v1alpha3_plans_pb.Plan, index?: number): services_billing_entities_v1alpha3_plans_pb.Plan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPlanChangelogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPlanChangelogResponse): GetPlanChangelogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPlanChangelogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPlanChangelogResponse;
  static deserializeBinaryFromReader(message: GetPlanChangelogResponse, reader: jspb.BinaryReader): GetPlanChangelogResponse;
}

export namespace GetPlanChangelogResponse {
  export type AsObject = {
    plansList: Array<services_billing_entities_v1alpha3_plans_pb.Plan.AsObject>,
  }
}

export class ListPlansRequest extends jspb.Message {
  getPlanId(): string;
  setPlanId(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  hasFields(): boolean;
  clearFields(): void;
  getFields(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFields(value?: google_protobuf_field_mask_pb.FieldMask): void;

  clearSortList(): void;
  getSortList(): Array<services_billing_v1alpha3_core_pb.Sort>;
  setSortList(value: Array<services_billing_v1alpha3_core_pb.Sort>): void;
  addSort(value?: services_billing_v1alpha3_core_pb.Sort, index?: number): services_billing_v1alpha3_core_pb.Sort;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): services_billing_v1alpha3_core_pb.Page | undefined;
  setPage(value?: services_billing_v1alpha3_core_pb.Page): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPlansRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPlansRequest): ListPlansRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPlansRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPlansRequest;
  static deserializeBinaryFromReader(message: ListPlansRequest, reader: jspb.BinaryReader): ListPlansRequest;
}

export namespace ListPlansRequest {
  export type AsObject = {
    planId: string,
    filter: string,
    fields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    sortList: Array<services_billing_v1alpha3_core_pb.Sort.AsObject>,
    page?: services_billing_v1alpha3_core_pb.Page.AsObject,
  }
}

export class ListPlansResponse extends jspb.Message {
  clearPlansList(): void;
  getPlansList(): Array<services_billing_entities_v1alpha3_plans_pb.Plan>;
  setPlansList(value: Array<services_billing_entities_v1alpha3_plans_pb.Plan>): void;
  addPlans(value?: services_billing_entities_v1alpha3_plans_pb.Plan, index?: number): services_billing_entities_v1alpha3_plans_pb.Plan;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPlansResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPlansResponse): ListPlansResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPlansResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPlansResponse;
  static deserializeBinaryFromReader(message: ListPlansResponse, reader: jspb.BinaryReader): ListPlansResponse;
}

export namespace ListPlansResponse {
  export type AsObject = {
    plansList: Array<services_billing_entities_v1alpha3_plans_pb.Plan.AsObject>,
    token: string,
  }
}

