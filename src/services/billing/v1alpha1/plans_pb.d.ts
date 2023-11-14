// package: services.billing.v1alpha1
// file: services/billing/v1alpha1/plans.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as services_billing_entities_v1alpha1_plan_pb from "../../../services/billing/entities/v1alpha1/plan_pb";
import * as services_billing_v1alpha1_core_pb from "../../../services/billing/v1alpha1/core_pb";

export class CommitBillingPlanRequest extends jspb.Message {
  getBillingPlanId(): string;
  setBillingPlanId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommitBillingPlanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CommitBillingPlanRequest): CommitBillingPlanRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommitBillingPlanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommitBillingPlanRequest;
  static deserializeBinaryFromReader(message: CommitBillingPlanRequest, reader: jspb.BinaryReader): CommitBillingPlanRequest;
}

export namespace CommitBillingPlanRequest {
  export type AsObject = {
    billingPlanId: string,
  }
}

export class CommitBillingPlanResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommitBillingPlanResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CommitBillingPlanResponse): CommitBillingPlanResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommitBillingPlanResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommitBillingPlanResponse;
  static deserializeBinaryFromReader(message: CommitBillingPlanResponse, reader: jspb.BinaryReader): CommitBillingPlanResponse;
}

export namespace CommitBillingPlanResponse {
  export type AsObject = {
  }
}

export class CommitDefaultBillingPlanRequest extends jspb.Message {
  getBillingPlanId(): string;
  setBillingPlanId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommitDefaultBillingPlanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CommitDefaultBillingPlanRequest): CommitDefaultBillingPlanRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommitDefaultBillingPlanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommitDefaultBillingPlanRequest;
  static deserializeBinaryFromReader(message: CommitDefaultBillingPlanRequest, reader: jspb.BinaryReader): CommitDefaultBillingPlanRequest;
}

export namespace CommitDefaultBillingPlanRequest {
  export type AsObject = {
    billingPlanId: string,
  }
}

export class CommitDefaultBillingPlanResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommitDefaultBillingPlanResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CommitDefaultBillingPlanResponse): CommitDefaultBillingPlanResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommitDefaultBillingPlanResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommitDefaultBillingPlanResponse;
  static deserializeBinaryFromReader(message: CommitDefaultBillingPlanResponse, reader: jspb.BinaryReader): CommitDefaultBillingPlanResponse;
}

export namespace CommitDefaultBillingPlanResponse {
  export type AsObject = {
  }
}

export class CreateBillingPlanRequest extends jspb.Message {
  getBillingPlanId(): string;
  setBillingPlanId(value: string): void;

  hasBillingPlan(): boolean;
  clearBillingPlan(): void;
  getBillingPlan(): services_billing_entities_v1alpha1_plan_pb.BillingPlan | undefined;
  setBillingPlan(value?: services_billing_entities_v1alpha1_plan_pb.BillingPlan): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBillingPlanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBillingPlanRequest): CreateBillingPlanRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateBillingPlanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBillingPlanRequest;
  static deserializeBinaryFromReader(message: CreateBillingPlanRequest, reader: jspb.BinaryReader): CreateBillingPlanRequest;
}

export namespace CreateBillingPlanRequest {
  export type AsObject = {
    billingPlanId: string,
    billingPlan?: services_billing_entities_v1alpha1_plan_pb.BillingPlan.AsObject,
  }
}

export class CreateBillingPlanResponse extends jspb.Message {
  getBillingPlanId(): string;
  setBillingPlanId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBillingPlanResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBillingPlanResponse): CreateBillingPlanResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateBillingPlanResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBillingPlanResponse;
  static deserializeBinaryFromReader(message: CreateBillingPlanResponse, reader: jspb.BinaryReader): CreateBillingPlanResponse;
}

export namespace CreateBillingPlanResponse {
  export type AsObject = {
    billingPlanId: string,
  }
}

export class CreateDefaultBillingPlanRequest extends jspb.Message {
  getBillingPlanId(): string;
  setBillingPlanId(value: string): void;

  hasBillingPlan(): boolean;
  clearBillingPlan(): void;
  getBillingPlan(): services_billing_entities_v1alpha1_plan_pb.BillingPlan | undefined;
  setBillingPlan(value?: services_billing_entities_v1alpha1_plan_pb.BillingPlan): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDefaultBillingPlanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDefaultBillingPlanRequest): CreateDefaultBillingPlanRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDefaultBillingPlanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDefaultBillingPlanRequest;
  static deserializeBinaryFromReader(message: CreateDefaultBillingPlanRequest, reader: jspb.BinaryReader): CreateDefaultBillingPlanRequest;
}

export namespace CreateDefaultBillingPlanRequest {
  export type AsObject = {
    billingPlanId: string,
    billingPlan?: services_billing_entities_v1alpha1_plan_pb.BillingPlan.AsObject,
  }
}

export class CreateDefaultBillingPlanResponse extends jspb.Message {
  getBillingPlanId(): string;
  setBillingPlanId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDefaultBillingPlanResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDefaultBillingPlanResponse): CreateDefaultBillingPlanResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDefaultBillingPlanResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDefaultBillingPlanResponse;
  static deserializeBinaryFromReader(message: CreateDefaultBillingPlanResponse, reader: jspb.BinaryReader): CreateDefaultBillingPlanResponse;
}

export namespace CreateDefaultBillingPlanResponse {
  export type AsObject = {
    billingPlanId: string,
  }
}

export class DeleteBillingPlanRequest extends jspb.Message {
  getBillingPlanId(): string;
  setBillingPlanId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBillingPlanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBillingPlanRequest): DeleteBillingPlanRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteBillingPlanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBillingPlanRequest;
  static deserializeBinaryFromReader(message: DeleteBillingPlanRequest, reader: jspb.BinaryReader): DeleteBillingPlanRequest;
}

export namespace DeleteBillingPlanRequest {
  export type AsObject = {
    billingPlanId: string,
  }
}

export class DeleteBillingPlanResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBillingPlanResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBillingPlanResponse): DeleteBillingPlanResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteBillingPlanResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBillingPlanResponse;
  static deserializeBinaryFromReader(message: DeleteBillingPlanResponse, reader: jspb.BinaryReader): DeleteBillingPlanResponse;
}

export namespace DeleteBillingPlanResponse {
  export type AsObject = {
  }
}

export class DeleteDefaultBillingPlanRequest extends jspb.Message {
  getBillingPlanId(): string;
  setBillingPlanId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDefaultBillingPlanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDefaultBillingPlanRequest): DeleteDefaultBillingPlanRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDefaultBillingPlanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDefaultBillingPlanRequest;
  static deserializeBinaryFromReader(message: DeleteDefaultBillingPlanRequest, reader: jspb.BinaryReader): DeleteDefaultBillingPlanRequest;
}

export namespace DeleteDefaultBillingPlanRequest {
  export type AsObject = {
    billingPlanId: string,
  }
}

export class DeleteDefaultBillingPlanResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDefaultBillingPlanResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDefaultBillingPlanResponse): DeleteDefaultBillingPlanResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDefaultBillingPlanResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDefaultBillingPlanResponse;
  static deserializeBinaryFromReader(message: DeleteDefaultBillingPlanResponse, reader: jspb.BinaryReader): DeleteDefaultBillingPlanResponse;
}

export namespace DeleteDefaultBillingPlanResponse {
  export type AsObject = {
  }
}

export class DuplicateBillingPlanRequest extends jspb.Message {
  getBillingPlanId(): string;
  setBillingPlanId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DuplicateBillingPlanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DuplicateBillingPlanRequest): DuplicateBillingPlanRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DuplicateBillingPlanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DuplicateBillingPlanRequest;
  static deserializeBinaryFromReader(message: DuplicateBillingPlanRequest, reader: jspb.BinaryReader): DuplicateBillingPlanRequest;
}

export namespace DuplicateBillingPlanRequest {
  export type AsObject = {
    billingPlanId: string,
  }
}

export class DuplicateBillingPlanResponse extends jspb.Message {
  getBillingPlanId(): string;
  setBillingPlanId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DuplicateBillingPlanResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DuplicateBillingPlanResponse): DuplicateBillingPlanResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DuplicateBillingPlanResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DuplicateBillingPlanResponse;
  static deserializeBinaryFromReader(message: DuplicateBillingPlanResponse, reader: jspb.BinaryReader): DuplicateBillingPlanResponse;
}

export namespace DuplicateBillingPlanResponse {
  export type AsObject = {
    billingPlanId: string,
  }
}

export class DuplicateDefaultBillingPlanRequest extends jspb.Message {
  getBillingPlanId(): string;
  setBillingPlanId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DuplicateDefaultBillingPlanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DuplicateDefaultBillingPlanRequest): DuplicateDefaultBillingPlanRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DuplicateDefaultBillingPlanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DuplicateDefaultBillingPlanRequest;
  static deserializeBinaryFromReader(message: DuplicateDefaultBillingPlanRequest, reader: jspb.BinaryReader): DuplicateDefaultBillingPlanRequest;
}

export namespace DuplicateDefaultBillingPlanRequest {
  export type AsObject = {
    billingPlanId: string,
  }
}

export class DuplicateDefaultBillingPlanResponse extends jspb.Message {
  getBillingPlanId(): string;
  setBillingPlanId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DuplicateDefaultBillingPlanResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DuplicateDefaultBillingPlanResponse): DuplicateDefaultBillingPlanResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DuplicateDefaultBillingPlanResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DuplicateDefaultBillingPlanResponse;
  static deserializeBinaryFromReader(message: DuplicateDefaultBillingPlanResponse, reader: jspb.BinaryReader): DuplicateDefaultBillingPlanResponse;
}

export namespace DuplicateDefaultBillingPlanResponse {
  export type AsObject = {
    billingPlanId: string,
  }
}

export class GetActiveBillingPlanRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  hasEffectiveTime(): boolean;
  clearEffectiveTime(): void;
  getEffectiveTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEffectiveTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActiveBillingPlanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetActiveBillingPlanRequest): GetActiveBillingPlanRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetActiveBillingPlanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActiveBillingPlanRequest;
  static deserializeBinaryFromReader(message: GetActiveBillingPlanRequest, reader: jspb.BinaryReader): GetActiveBillingPlanRequest;
}

export namespace GetActiveBillingPlanRequest {
  export type AsObject = {
    orgId: string,
    effectiveTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetActiveBillingPlanResponse extends jspb.Message {
  hasBillingPlan(): boolean;
  clearBillingPlan(): void;
  getBillingPlan(): services_billing_entities_v1alpha1_plan_pb.BillingPlan | undefined;
  setBillingPlan(value?: services_billing_entities_v1alpha1_plan_pb.BillingPlan): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActiveBillingPlanResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetActiveBillingPlanResponse): GetActiveBillingPlanResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetActiveBillingPlanResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActiveBillingPlanResponse;
  static deserializeBinaryFromReader(message: GetActiveBillingPlanResponse, reader: jspb.BinaryReader): GetActiveBillingPlanResponse;
}

export namespace GetActiveBillingPlanResponse {
  export type AsObject = {
    billingPlan?: services_billing_entities_v1alpha1_plan_pb.BillingPlan.AsObject,
  }
}

export class GetBillingPlanRequest extends jspb.Message {
  getBillingPlanId(): string;
  setBillingPlanId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillingPlanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillingPlanRequest): GetBillingPlanRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBillingPlanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillingPlanRequest;
  static deserializeBinaryFromReader(message: GetBillingPlanRequest, reader: jspb.BinaryReader): GetBillingPlanRequest;
}

export namespace GetBillingPlanRequest {
  export type AsObject = {
    billingPlanId: string,
  }
}

export class GetBillingPlanResponse extends jspb.Message {
  hasBillingPlan(): boolean;
  clearBillingPlan(): void;
  getBillingPlan(): services_billing_entities_v1alpha1_plan_pb.BillingPlan | undefined;
  setBillingPlan(value?: services_billing_entities_v1alpha1_plan_pb.BillingPlan): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillingPlanResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillingPlanResponse): GetBillingPlanResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBillingPlanResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillingPlanResponse;
  static deserializeBinaryFromReader(message: GetBillingPlanResponse, reader: jspb.BinaryReader): GetBillingPlanResponse;
}

export namespace GetBillingPlanResponse {
  export type AsObject = {
    billingPlan?: services_billing_entities_v1alpha1_plan_pb.BillingPlan.AsObject,
  }
}

export class ListBillingPlansRequest extends jspb.Message {
  getBillingPlanId(): string;
  setBillingPlanId(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  hasFields(): boolean;
  clearFields(): void;
  getFields(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFields(value?: google_protobuf_field_mask_pb.FieldMask): void;

  clearSortList(): void;
  getSortList(): Array<services_billing_v1alpha1_core_pb.Sort>;
  setSortList(value: Array<services_billing_v1alpha1_core_pb.Sort>): void;
  addSort(value?: services_billing_v1alpha1_core_pb.Sort, index?: number): services_billing_v1alpha1_core_pb.Sort;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): services_billing_v1alpha1_core_pb.Page | undefined;
  setPage(value?: services_billing_v1alpha1_core_pb.Page): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBillingPlansRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBillingPlansRequest): ListBillingPlansRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBillingPlansRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBillingPlansRequest;
  static deserializeBinaryFromReader(message: ListBillingPlansRequest, reader: jspb.BinaryReader): ListBillingPlansRequest;
}

export namespace ListBillingPlansRequest {
  export type AsObject = {
    billingPlanId: string,
    filter: string,
    fields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    sortList: Array<services_billing_v1alpha1_core_pb.Sort.AsObject>,
    page?: services_billing_v1alpha1_core_pb.Page.AsObject,
  }
}

export class ListBillingPlansResponse extends jspb.Message {
  clearBillingPlansList(): void;
  getBillingPlansList(): Array<services_billing_entities_v1alpha1_plan_pb.BillingPlan>;
  setBillingPlansList(value: Array<services_billing_entities_v1alpha1_plan_pb.BillingPlan>): void;
  addBillingPlans(value?: services_billing_entities_v1alpha1_plan_pb.BillingPlan, index?: number): services_billing_entities_v1alpha1_plan_pb.BillingPlan;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBillingPlansResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBillingPlansResponse): ListBillingPlansResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBillingPlansResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBillingPlansResponse;
  static deserializeBinaryFromReader(message: ListBillingPlansResponse, reader: jspb.BinaryReader): ListBillingPlansResponse;
}

export namespace ListBillingPlansResponse {
  export type AsObject = {
    billingPlansList: Array<services_billing_entities_v1alpha1_plan_pb.BillingPlan.AsObject>,
    token: string,
  }
}

export class UpdateBillingPlanRequest extends jspb.Message {
  getBillingPlanId(): string;
  setBillingPlanId(value: string): void;

  hasBillingPlan(): boolean;
  clearBillingPlan(): void;
  getBillingPlan(): services_billing_entities_v1alpha1_plan_pb.BillingPlan | undefined;
  setBillingPlan(value?: services_billing_entities_v1alpha1_plan_pb.BillingPlan): void;

  hasUpdateFields(): boolean;
  clearUpdateFields(): void;
  getUpdateFields(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateFields(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBillingPlanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBillingPlanRequest): UpdateBillingPlanRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBillingPlanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBillingPlanRequest;
  static deserializeBinaryFromReader(message: UpdateBillingPlanRequest, reader: jspb.BinaryReader): UpdateBillingPlanRequest;
}

export namespace UpdateBillingPlanRequest {
  export type AsObject = {
    billingPlanId: string,
    billingPlan?: services_billing_entities_v1alpha1_plan_pb.BillingPlan.AsObject,
    updateFields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateBillingPlanResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBillingPlanResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBillingPlanResponse): UpdateBillingPlanResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBillingPlanResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBillingPlanResponse;
  static deserializeBinaryFromReader(message: UpdateBillingPlanResponse, reader: jspb.BinaryReader): UpdateBillingPlanResponse;
}

export namespace UpdateBillingPlanResponse {
  export type AsObject = {
  }
}

export class UpdateDefaultBillingPlanRequest extends jspb.Message {
  getBillingPlanId(): string;
  setBillingPlanId(value: string): void;

  hasBillingPlan(): boolean;
  clearBillingPlan(): void;
  getBillingPlan(): services_billing_entities_v1alpha1_plan_pb.BillingPlan | undefined;
  setBillingPlan(value?: services_billing_entities_v1alpha1_plan_pb.BillingPlan): void;

  hasUpdateFields(): boolean;
  clearUpdateFields(): void;
  getUpdateFields(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateFields(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDefaultBillingPlanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDefaultBillingPlanRequest): UpdateDefaultBillingPlanRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDefaultBillingPlanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDefaultBillingPlanRequest;
  static deserializeBinaryFromReader(message: UpdateDefaultBillingPlanRequest, reader: jspb.BinaryReader): UpdateDefaultBillingPlanRequest;
}

export namespace UpdateDefaultBillingPlanRequest {
  export type AsObject = {
    billingPlanId: string,
    billingPlan?: services_billing_entities_v1alpha1_plan_pb.BillingPlan.AsObject,
    updateFields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateDefaultBillingPlanResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDefaultBillingPlanResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDefaultBillingPlanResponse): UpdateDefaultBillingPlanResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDefaultBillingPlanResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDefaultBillingPlanResponse;
  static deserializeBinaryFromReader(message: UpdateDefaultBillingPlanResponse, reader: jspb.BinaryReader): UpdateDefaultBillingPlanResponse;
}

export namespace UpdateDefaultBillingPlanResponse {
  export type AsObject = {
  }
}

