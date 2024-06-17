// package: services.billing.v1alpha3
// file: services/billing/v1alpha3/draft.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as services_billing_entities_v1alpha3_plans_pb from "../../../services/billing/entities/v1alpha3/plans_pb";
import * as services_billing_v1alpha3_core_pb from "../../../services/billing/v1alpha3/core_pb";

export class ApplyDraftRequest extends jspb.Message {
  getPlanId(): string;
  setPlanId(value: string): void;

  clearOrgIdsList(): void;
  getOrgIdsList(): Array<string>;
  setOrgIdsList(value: Array<string>): void;
  addOrgIds(value: string, index?: number): string;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyDraftRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyDraftRequest): ApplyDraftRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplyDraftRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyDraftRequest;
  static deserializeBinaryFromReader(message: ApplyDraftRequest, reader: jspb.BinaryReader): ApplyDraftRequest;
}

export namespace ApplyDraftRequest {
  export type AsObject = {
    planId: string,
    orgIdsList: Array<string>,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ApplyDraftResponse extends jspb.Message {
  clearPlanIdsList(): void;
  getPlanIdsList(): Array<string>;
  setPlanIdsList(value: Array<string>): void;
  addPlanIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyDraftResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyDraftResponse): ApplyDraftResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplyDraftResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyDraftResponse;
  static deserializeBinaryFromReader(message: ApplyDraftResponse, reader: jspb.BinaryReader): ApplyDraftResponse;
}

export namespace ApplyDraftResponse {
  export type AsObject = {
    planIdsList: Array<string>,
  }
}

export class ApplyTemplateDraftRequest extends jspb.Message {
  getPlanId(): string;
  setPlanId(value: string): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyTemplateDraftRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyTemplateDraftRequest): ApplyTemplateDraftRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplyTemplateDraftRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyTemplateDraftRequest;
  static deserializeBinaryFromReader(message: ApplyTemplateDraftRequest, reader: jspb.BinaryReader): ApplyTemplateDraftRequest;
}

export namespace ApplyTemplateDraftRequest {
  export type AsObject = {
    planId: string,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ApplyTemplateDraftResponse extends jspb.Message {
  clearPlanIdsList(): void;
  getPlanIdsList(): Array<string>;
  setPlanIdsList(value: Array<string>): void;
  addPlanIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyTemplateDraftResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyTemplateDraftResponse): ApplyTemplateDraftResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplyTemplateDraftResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyTemplateDraftResponse;
  static deserializeBinaryFromReader(message: ApplyTemplateDraftResponse, reader: jspb.BinaryReader): ApplyTemplateDraftResponse;
}

export namespace ApplyTemplateDraftResponse {
  export type AsObject = {
    planIdsList: Array<string>,
  }
}

export class CreateDraftRequest extends jspb.Message {
  getPlanId(): string;
  setPlanId(value: string): void;

  hasPlan(): boolean;
  clearPlan(): void;
  getPlan(): services_billing_entities_v1alpha3_plans_pb.Plan | undefined;
  setPlan(value?: services_billing_entities_v1alpha3_plans_pb.Plan): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDraftRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDraftRequest): CreateDraftRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDraftRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDraftRequest;
  static deserializeBinaryFromReader(message: CreateDraftRequest, reader: jspb.BinaryReader): CreateDraftRequest;
}

export namespace CreateDraftRequest {
  export type AsObject = {
    planId: string,
    plan?: services_billing_entities_v1alpha3_plans_pb.Plan.AsObject,
  }
}

export class CreateDraftResponse extends jspb.Message {
  getPlanId(): string;
  setPlanId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDraftResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDraftResponse): CreateDraftResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDraftResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDraftResponse;
  static deserializeBinaryFromReader(message: CreateDraftResponse, reader: jspb.BinaryReader): CreateDraftResponse;
}

export namespace CreateDraftResponse {
  export type AsObject = {
    planId: string,
  }
}

export class CreateTemplateDraftRequest extends jspb.Message {
  getPlanId(): string;
  setPlanId(value: string): void;

  hasPlan(): boolean;
  clearPlan(): void;
  getPlan(): services_billing_entities_v1alpha3_plans_pb.Plan | undefined;
  setPlan(value?: services_billing_entities_v1alpha3_plans_pb.Plan): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTemplateDraftRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTemplateDraftRequest): CreateTemplateDraftRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTemplateDraftRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTemplateDraftRequest;
  static deserializeBinaryFromReader(message: CreateTemplateDraftRequest, reader: jspb.BinaryReader): CreateTemplateDraftRequest;
}

export namespace CreateTemplateDraftRequest {
  export type AsObject = {
    planId: string,
    plan?: services_billing_entities_v1alpha3_plans_pb.Plan.AsObject,
  }
}

export class CreateTemplateDraftResponse extends jspb.Message {
  getPlanId(): string;
  setPlanId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTemplateDraftResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTemplateDraftResponse): CreateTemplateDraftResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTemplateDraftResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTemplateDraftResponse;
  static deserializeBinaryFromReader(message: CreateTemplateDraftResponse, reader: jspb.BinaryReader): CreateTemplateDraftResponse;
}

export namespace CreateTemplateDraftResponse {
  export type AsObject = {
    planId: string,
  }
}

export class DeleteDraftRequest extends jspb.Message {
  getPlanId(): string;
  setPlanId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDraftRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDraftRequest): DeleteDraftRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDraftRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDraftRequest;
  static deserializeBinaryFromReader(message: DeleteDraftRequest, reader: jspb.BinaryReader): DeleteDraftRequest;
}

export namespace DeleteDraftRequest {
  export type AsObject = {
    planId: string,
  }
}

export class DeleteDraftResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDraftResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDraftResponse): DeleteDraftResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDraftResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDraftResponse;
  static deserializeBinaryFromReader(message: DeleteDraftResponse, reader: jspb.BinaryReader): DeleteDraftResponse;
}

export namespace DeleteDraftResponse {
  export type AsObject = {
  }
}

export class DeleteTemplateDraftRequest extends jspb.Message {
  getPlanId(): string;
  setPlanId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTemplateDraftRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTemplateDraftRequest): DeleteTemplateDraftRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTemplateDraftRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTemplateDraftRequest;
  static deserializeBinaryFromReader(message: DeleteTemplateDraftRequest, reader: jspb.BinaryReader): DeleteTemplateDraftRequest;
}

export namespace DeleteTemplateDraftRequest {
  export type AsObject = {
    planId: string,
  }
}

export class DeleteTemplateDraftResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTemplateDraftResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTemplateDraftResponse): DeleteTemplateDraftResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTemplateDraftResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTemplateDraftResponse;
  static deserializeBinaryFromReader(message: DeleteTemplateDraftResponse, reader: jspb.BinaryReader): DeleteTemplateDraftResponse;
}

export namespace DeleteTemplateDraftResponse {
  export type AsObject = {
  }
}

export class GetDraftRequest extends jspb.Message {
  getPlanId(): string;
  setPlanId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDraftRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDraftRequest): GetDraftRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDraftRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDraftRequest;
  static deserializeBinaryFromReader(message: GetDraftRequest, reader: jspb.BinaryReader): GetDraftRequest;
}

export namespace GetDraftRequest {
  export type AsObject = {
    planId: string,
  }
}

export class GetDraftResponse extends jspb.Message {
  hasPlan(): boolean;
  clearPlan(): void;
  getPlan(): services_billing_entities_v1alpha3_plans_pb.Plan | undefined;
  setPlan(value?: services_billing_entities_v1alpha3_plans_pb.Plan): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDraftResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDraftResponse): GetDraftResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDraftResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDraftResponse;
  static deserializeBinaryFromReader(message: GetDraftResponse, reader: jspb.BinaryReader): GetDraftResponse;
}

export namespace GetDraftResponse {
  export type AsObject = {
    plan?: services_billing_entities_v1alpha3_plans_pb.Plan.AsObject,
  }
}

export class GetTemplateDraftRequest extends jspb.Message {
  getPlanId(): string;
  setPlanId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTemplateDraftRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTemplateDraftRequest): GetTemplateDraftRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTemplateDraftRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTemplateDraftRequest;
  static deserializeBinaryFromReader(message: GetTemplateDraftRequest, reader: jspb.BinaryReader): GetTemplateDraftRequest;
}

export namespace GetTemplateDraftRequest {
  export type AsObject = {
    planId: string,
  }
}

export class GetTemplateDraftResponse extends jspb.Message {
  hasPlan(): boolean;
  clearPlan(): void;
  getPlan(): services_billing_entities_v1alpha3_plans_pb.Plan | undefined;
  setPlan(value?: services_billing_entities_v1alpha3_plans_pb.Plan): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTemplateDraftResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTemplateDraftResponse): GetTemplateDraftResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTemplateDraftResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTemplateDraftResponse;
  static deserializeBinaryFromReader(message: GetTemplateDraftResponse, reader: jspb.BinaryReader): GetTemplateDraftResponse;
}

export namespace GetTemplateDraftResponse {
  export type AsObject = {
    plan?: services_billing_entities_v1alpha3_plans_pb.Plan.AsObject,
  }
}

export class ListDraftsRequest extends jspb.Message {
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
  toObject(includeInstance?: boolean): ListDraftsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDraftsRequest): ListDraftsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDraftsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDraftsRequest;
  static deserializeBinaryFromReader(message: ListDraftsRequest, reader: jspb.BinaryReader): ListDraftsRequest;
}

export namespace ListDraftsRequest {
  export type AsObject = {
    planId: string,
    filter: string,
    fields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    sortList: Array<services_billing_v1alpha3_core_pb.Sort.AsObject>,
    page?: services_billing_v1alpha3_core_pb.Page.AsObject,
  }
}

export class ListDraftsResponse extends jspb.Message {
  clearPlansList(): void;
  getPlansList(): Array<services_billing_entities_v1alpha3_plans_pb.Plan>;
  setPlansList(value: Array<services_billing_entities_v1alpha3_plans_pb.Plan>): void;
  addPlans(value?: services_billing_entities_v1alpha3_plans_pb.Plan, index?: number): services_billing_entities_v1alpha3_plans_pb.Plan;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDraftsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDraftsResponse): ListDraftsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDraftsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDraftsResponse;
  static deserializeBinaryFromReader(message: ListDraftsResponse, reader: jspb.BinaryReader): ListDraftsResponse;
}

export namespace ListDraftsResponse {
  export type AsObject = {
    plansList: Array<services_billing_entities_v1alpha3_plans_pb.Plan.AsObject>,
    token: string,
  }
}

export class ListTemplateDraftsRequest extends jspb.Message {
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
  toObject(includeInstance?: boolean): ListTemplateDraftsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTemplateDraftsRequest): ListTemplateDraftsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTemplateDraftsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTemplateDraftsRequest;
  static deserializeBinaryFromReader(message: ListTemplateDraftsRequest, reader: jspb.BinaryReader): ListTemplateDraftsRequest;
}

export namespace ListTemplateDraftsRequest {
  export type AsObject = {
    planId: string,
    filter: string,
    fields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    sortList: Array<services_billing_v1alpha3_core_pb.Sort.AsObject>,
    page?: services_billing_v1alpha3_core_pb.Page.AsObject,
  }
}

export class ListTemplateDraftsResponse extends jspb.Message {
  clearPlansList(): void;
  getPlansList(): Array<services_billing_entities_v1alpha3_plans_pb.Plan>;
  setPlansList(value: Array<services_billing_entities_v1alpha3_plans_pb.Plan>): void;
  addPlans(value?: services_billing_entities_v1alpha3_plans_pb.Plan, index?: number): services_billing_entities_v1alpha3_plans_pb.Plan;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTemplateDraftsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTemplateDraftsResponse): ListTemplateDraftsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTemplateDraftsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTemplateDraftsResponse;
  static deserializeBinaryFromReader(message: ListTemplateDraftsResponse, reader: jspb.BinaryReader): ListTemplateDraftsResponse;
}

export namespace ListTemplateDraftsResponse {
  export type AsObject = {
    plansList: Array<services_billing_entities_v1alpha3_plans_pb.Plan.AsObject>,
    token: string,
  }
}

export class UpdateDraftRequest extends jspb.Message {
  getPlanId(): string;
  setPlanId(value: string): void;

  hasPlan(): boolean;
  clearPlan(): void;
  getPlan(): services_billing_entities_v1alpha3_plans_pb.Plan | undefined;
  setPlan(value?: services_billing_entities_v1alpha3_plans_pb.Plan): void;

  hasUpdateFields(): boolean;
  clearUpdateFields(): void;
  getUpdateFields(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateFields(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDraftRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDraftRequest): UpdateDraftRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDraftRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDraftRequest;
  static deserializeBinaryFromReader(message: UpdateDraftRequest, reader: jspb.BinaryReader): UpdateDraftRequest;
}

export namespace UpdateDraftRequest {
  export type AsObject = {
    planId: string,
    plan?: services_billing_entities_v1alpha3_plans_pb.Plan.AsObject,
    updateFields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateDraftResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDraftResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDraftResponse): UpdateDraftResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDraftResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDraftResponse;
  static deserializeBinaryFromReader(message: UpdateDraftResponse, reader: jspb.BinaryReader): UpdateDraftResponse;
}

export namespace UpdateDraftResponse {
  export type AsObject = {
  }
}

export class UpdateTemplateDraftRequest extends jspb.Message {
  getPlanId(): string;
  setPlanId(value: string): void;

  hasPlan(): boolean;
  clearPlan(): void;
  getPlan(): services_billing_entities_v1alpha3_plans_pb.Plan | undefined;
  setPlan(value?: services_billing_entities_v1alpha3_plans_pb.Plan): void;

  hasUpdateFields(): boolean;
  clearUpdateFields(): void;
  getUpdateFields(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateFields(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTemplateDraftRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTemplateDraftRequest): UpdateTemplateDraftRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTemplateDraftRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTemplateDraftRequest;
  static deserializeBinaryFromReader(message: UpdateTemplateDraftRequest, reader: jspb.BinaryReader): UpdateTemplateDraftRequest;
}

export namespace UpdateTemplateDraftRequest {
  export type AsObject = {
    planId: string,
    plan?: services_billing_entities_v1alpha3_plans_pb.Plan.AsObject,
    updateFields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateTemplateDraftResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTemplateDraftResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTemplateDraftResponse): UpdateTemplateDraftResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTemplateDraftResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTemplateDraftResponse;
  static deserializeBinaryFromReader(message: UpdateTemplateDraftResponse, reader: jspb.BinaryReader): UpdateTemplateDraftResponse;
}

export namespace UpdateTemplateDraftResponse {
  export type AsObject = {
  }
}

