// package: services.billing.v1alpha1
// file: services/billing/v1alpha1/plans.proto

import * as jspb from "google-protobuf";
import * as data_billing_v1alpha1_plans_pb from "../../../data/billing/v1alpha1/plans_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as services_billing_v1alpha1_core_pb from "../../../services/billing/v1alpha1/core_pb";

export class CreateBillingPlanRequest extends jspb.Message {
  hasBillingPlan(): boolean;
  clearBillingPlan(): void;
  getBillingPlan(): data_billing_v1alpha1_plans_pb.BillingPlan | undefined;
  setBillingPlan(value?: data_billing_v1alpha1_plans_pb.BillingPlan): void;

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
    billingPlan?: data_billing_v1alpha1_plans_pb.BillingPlan.AsObject,
  }
}

export class CreateBillingPlanResponse extends jspb.Message {
  hasBillingPlan(): boolean;
  clearBillingPlan(): void;
  getBillingPlan(): data_billing_v1alpha1_plans_pb.BillingPlan | undefined;
  setBillingPlan(value?: data_billing_v1alpha1_plans_pb.BillingPlan): void;

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
    billingPlan?: data_billing_v1alpha1_plans_pb.BillingPlan.AsObject,
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

export class GetBillingPlanRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

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
    orgId: string,
  }
}

export class GetBillingPlanResponse extends jspb.Message {
  hasBillingPlan(): boolean;
  clearBillingPlan(): void;
  getBillingPlan(): data_billing_v1alpha1_plans_pb.BillingPlan | undefined;
  setBillingPlan(value?: data_billing_v1alpha1_plans_pb.BillingPlan): void;

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
    billingPlan?: data_billing_v1alpha1_plans_pb.BillingPlan.AsObject,
  }
}

export class GetDefaultBillingPlanRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDefaultBillingPlanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDefaultBillingPlanRequest): GetDefaultBillingPlanRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDefaultBillingPlanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDefaultBillingPlanRequest;
  static deserializeBinaryFromReader(message: GetDefaultBillingPlanRequest, reader: jspb.BinaryReader): GetDefaultBillingPlanRequest;
}

export namespace GetDefaultBillingPlanRequest {
  export type AsObject = {
  }
}

export class GetDefaultBillingPlanResponse extends jspb.Message {
  hasBillingPlan(): boolean;
  clearBillingPlan(): void;
  getBillingPlan(): data_billing_v1alpha1_plans_pb.BillingPlan | undefined;
  setBillingPlan(value?: data_billing_v1alpha1_plans_pb.BillingPlan): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDefaultBillingPlanResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDefaultBillingPlanResponse): GetDefaultBillingPlanResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDefaultBillingPlanResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDefaultBillingPlanResponse;
  static deserializeBinaryFromReader(message: GetDefaultBillingPlanResponse, reader: jspb.BinaryReader): GetDefaultBillingPlanResponse;
}

export namespace GetDefaultBillingPlanResponse {
  export type AsObject = {
    billingPlan?: data_billing_v1alpha1_plans_pb.BillingPlan.AsObject,
  }
}

export class ListBillingPlansRequest extends jspb.Message {
  hasBillingPlan(): boolean;
  clearBillingPlan(): void;
  getBillingPlan(): data_billing_v1alpha1_plans_pb.BillingPlan | undefined;
  setBillingPlan(value?: data_billing_v1alpha1_plans_pb.BillingPlan): void;

  hasSelectorFields(): boolean;
  clearSelectorFields(): void;
  getSelectorFields(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setSelectorFields(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasReturnFields(): boolean;
  clearReturnFields(): void;
  getReturnFields(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReturnFields(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasOrderBy(): boolean;
  clearOrderBy(): void;
  getOrderBy(): services_billing_v1alpha1_core_pb.OrderBy | undefined;
  setOrderBy(value?: services_billing_v1alpha1_core_pb.OrderBy): void;

  clearTimeSelectorsList(): void;
  getTimeSelectorsList(): Array<services_billing_v1alpha1_core_pb.TimeSelector>;
  setTimeSelectorsList(value: Array<services_billing_v1alpha1_core_pb.TimeSelector>): void;
  addTimeSelectors(value?: services_billing_v1alpha1_core_pb.TimeSelector, index?: number): services_billing_v1alpha1_core_pb.TimeSelector;

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
    billingPlan?: data_billing_v1alpha1_plans_pb.BillingPlan.AsObject,
    selectorFields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    returnFields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    orderBy?: services_billing_v1alpha1_core_pb.OrderBy.AsObject,
    timeSelectorsList: Array<services_billing_v1alpha1_core_pb.TimeSelector.AsObject>,
  }
}

export class ListBillingPlansResponse extends jspb.Message {
  hasBillingPlan(): boolean;
  clearBillingPlan(): void;
  getBillingPlan(): data_billing_v1alpha1_plans_pb.BillingPlan | undefined;
  setBillingPlan(value?: data_billing_v1alpha1_plans_pb.BillingPlan): void;

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
    billingPlan?: data_billing_v1alpha1_plans_pb.BillingPlan.AsObject,
  }
}

export class UpdateBillingPlanRequest extends jspb.Message {
  hasBillingPlan(): boolean;
  clearBillingPlan(): void;
  getBillingPlan(): data_billing_v1alpha1_plans_pb.BillingPlan | undefined;
  setBillingPlan(value?: data_billing_v1alpha1_plans_pb.BillingPlan): void;

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
    billingPlan?: data_billing_v1alpha1_plans_pb.BillingPlan.AsObject,
    updateFields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateBillingPlanResponse extends jspb.Message {
  hasBillingPlan(): boolean;
  clearBillingPlan(): void;
  getBillingPlan(): data_billing_v1alpha1_plans_pb.BillingPlan | undefined;
  setBillingPlan(value?: data_billing_v1alpha1_plans_pb.BillingPlan): void;

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
    billingPlan?: data_billing_v1alpha1_plans_pb.BillingPlan.AsObject,
  }
}

export class UpdateDefaultBillingPlanRequest extends jspb.Message {
  hasBillingPlan(): boolean;
  clearBillingPlan(): void;
  getBillingPlan(): data_billing_v1alpha1_plans_pb.BillingPlan | undefined;
  setBillingPlan(value?: data_billing_v1alpha1_plans_pb.BillingPlan): void;

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
    billingPlan?: data_billing_v1alpha1_plans_pb.BillingPlan.AsObject,
    updateFields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateDefaultBillingPlanResponse extends jspb.Message {
  hasBillingPlan(): boolean;
  clearBillingPlan(): void;
  getBillingPlan(): data_billing_v1alpha1_plans_pb.BillingPlan | undefined;
  setBillingPlan(value?: data_billing_v1alpha1_plans_pb.BillingPlan): void;

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
    billingPlan?: data_billing_v1alpha1_plans_pb.BillingPlan.AsObject,
  }
}

