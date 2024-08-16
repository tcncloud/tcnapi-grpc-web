// package: services.billing.v1alpha4
// file: services/billing/v1alpha4/defaults.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as services_billing_entities_v1alpha4_plan_pb from "../../../services/billing/entities/v1alpha4/plan_pb";
import * as services_billing_entities_v1alpha4_rates_pb from "../../../services/billing/entities/v1alpha4/rates_pb";
import * as services_billing_v1alpha4_core_pb from "../../../services/billing/v1alpha4/core_pb";

export class ApplyDefaultBillingPlanDraftRequest extends jspb.Message {
  getBillingPlanId(): string;
  setBillingPlanId(value: string): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearOrgIdsList(): void;
  getOrgIdsList(): Array<string>;
  setOrgIdsList(value: Array<string>): void;
  addOrgIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyDefaultBillingPlanDraftRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyDefaultBillingPlanDraftRequest): ApplyDefaultBillingPlanDraftRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplyDefaultBillingPlanDraftRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyDefaultBillingPlanDraftRequest;
  static deserializeBinaryFromReader(message: ApplyDefaultBillingPlanDraftRequest, reader: jspb.BinaryReader): ApplyDefaultBillingPlanDraftRequest;
}

export namespace ApplyDefaultBillingPlanDraftRequest {
  export type AsObject = {
    billingPlanId: string,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    orgIdsList: Array<string>,
  }
}

export class ApplyDefaultBillingPlanDraftResponse extends jspb.Message {
  clearBillingPlanIdsList(): void;
  getBillingPlanIdsList(): Array<string>;
  setBillingPlanIdsList(value: Array<string>): void;
  addBillingPlanIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyDefaultBillingPlanDraftResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyDefaultBillingPlanDraftResponse): ApplyDefaultBillingPlanDraftResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplyDefaultBillingPlanDraftResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyDefaultBillingPlanDraftResponse;
  static deserializeBinaryFromReader(message: ApplyDefaultBillingPlanDraftResponse, reader: jspb.BinaryReader): ApplyDefaultBillingPlanDraftResponse;
}

export namespace ApplyDefaultBillingPlanDraftResponse {
  export type AsObject = {
    billingPlanIdsList: Array<string>,
  }
}

export class CloneDefaultBillingPlanRequest extends jspb.Message {
  getBillingPlanId(): string;
  setBillingPlanId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloneDefaultBillingPlanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CloneDefaultBillingPlanRequest): CloneDefaultBillingPlanRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CloneDefaultBillingPlanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloneDefaultBillingPlanRequest;
  static deserializeBinaryFromReader(message: CloneDefaultBillingPlanRequest, reader: jspb.BinaryReader): CloneDefaultBillingPlanRequest;
}

export namespace CloneDefaultBillingPlanRequest {
  export type AsObject = {
    billingPlanId: string,
    title: string,
  }
}

export class CloneDefaultBillingPlanResponse extends jspb.Message {
  getBillingPlanId(): string;
  setBillingPlanId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloneDefaultBillingPlanResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CloneDefaultBillingPlanResponse): CloneDefaultBillingPlanResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CloneDefaultBillingPlanResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloneDefaultBillingPlanResponse;
  static deserializeBinaryFromReader(message: CloneDefaultBillingPlanResponse, reader: jspb.BinaryReader): CloneDefaultBillingPlanResponse;
}

export namespace CloneDefaultBillingPlanResponse {
  export type AsObject = {
    billingPlanId: string,
  }
}

export class CreateDefaultBillingPlanRequest extends jspb.Message {
  getBillingPlanId(): string;
  setBillingPlanId(value: string): void;

  hasBillingPlan(): boolean;
  clearBillingPlan(): void;
  getBillingPlan(): services_billing_entities_v1alpha4_plan_pb.BillingPlan | undefined;
  setBillingPlan(value?: services_billing_entities_v1alpha4_plan_pb.BillingPlan): void;

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
    billingPlan?: services_billing_entities_v1alpha4_plan_pb.BillingPlan.AsObject,
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

export class GetDefaultBillingPlanRequest extends jspb.Message {
  getBillingPlanId(): string;
  setBillingPlanId(value: string): void;

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
    billingPlanId: string,
  }
}

export class GetDefaultBillingPlanResponse extends jspb.Message {
  hasBillingPlan(): boolean;
  clearBillingPlan(): void;
  getBillingPlan(): services_billing_entities_v1alpha4_plan_pb.BillingPlan | undefined;
  setBillingPlan(value?: services_billing_entities_v1alpha4_plan_pb.BillingPlan): void;

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
    billingPlan?: services_billing_entities_v1alpha4_plan_pb.BillingPlan.AsObject,
  }
}

export class ListDefaultBillingPlansRequest extends jspb.Message {
  getBillingPlanId(): string;
  setBillingPlanId(value: string): void;

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
  toObject(includeInstance?: boolean): ListDefaultBillingPlansRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDefaultBillingPlansRequest): ListDefaultBillingPlansRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDefaultBillingPlansRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDefaultBillingPlansRequest;
  static deserializeBinaryFromReader(message: ListDefaultBillingPlansRequest, reader: jspb.BinaryReader): ListDefaultBillingPlansRequest;
}

export namespace ListDefaultBillingPlansRequest {
  export type AsObject = {
    billingPlanId: string,
    filter: string,
    fields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    sortList: Array<services_billing_v1alpha4_core_pb.Sort.AsObject>,
    page?: services_billing_v1alpha4_core_pb.Page.AsObject,
  }
}

export class ListDefaultBillingPlansResponse extends jspb.Message {
  clearBillingPlansList(): void;
  getBillingPlansList(): Array<services_billing_entities_v1alpha4_plan_pb.BillingPlan>;
  setBillingPlansList(value: Array<services_billing_entities_v1alpha4_plan_pb.BillingPlan>): void;
  addBillingPlans(value?: services_billing_entities_v1alpha4_plan_pb.BillingPlan, index?: number): services_billing_entities_v1alpha4_plan_pb.BillingPlan;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDefaultBillingPlansResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDefaultBillingPlansResponse): ListDefaultBillingPlansResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDefaultBillingPlansResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDefaultBillingPlansResponse;
  static deserializeBinaryFromReader(message: ListDefaultBillingPlansResponse, reader: jspb.BinaryReader): ListDefaultBillingPlansResponse;
}

export namespace ListDefaultBillingPlansResponse {
  export type AsObject = {
    billingPlansList: Array<services_billing_entities_v1alpha4_plan_pb.BillingPlan.AsObject>,
    token: string,
  }
}

export class UpdateDefaultBillingPlanRequest extends jspb.Message {
  getBillingPlanId(): string;
  setBillingPlanId(value: string): void;

  hasBillingPlan(): boolean;
  clearBillingPlan(): void;
  getBillingPlan(): services_billing_entities_v1alpha4_plan_pb.BillingPlan | undefined;
  setBillingPlan(value?: services_billing_entities_v1alpha4_plan_pb.BillingPlan): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

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
    billingPlan?: services_billing_entities_v1alpha4_plan_pb.BillingPlan.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
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

export class CreateDefaultRateDefinitionRequest extends jspb.Message {
  getRateDefinitionId(): string;
  setRateDefinitionId(value: string): void;

  hasRateDefinition(): boolean;
  clearRateDefinition(): void;
  getRateDefinition(): services_billing_entities_v1alpha4_rates_pb.RateDefinition | undefined;
  setRateDefinition(value?: services_billing_entities_v1alpha4_rates_pb.RateDefinition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDefaultRateDefinitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDefaultRateDefinitionRequest): CreateDefaultRateDefinitionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDefaultRateDefinitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDefaultRateDefinitionRequest;
  static deserializeBinaryFromReader(message: CreateDefaultRateDefinitionRequest, reader: jspb.BinaryReader): CreateDefaultRateDefinitionRequest;
}

export namespace CreateDefaultRateDefinitionRequest {
  export type AsObject = {
    rateDefinitionId: string,
    rateDefinition?: services_billing_entities_v1alpha4_rates_pb.RateDefinition.AsObject,
  }
}

export class CreateDefaultRateDefinitionResponse extends jspb.Message {
  getRateDefinitionId(): string;
  setRateDefinitionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDefaultRateDefinitionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDefaultRateDefinitionResponse): CreateDefaultRateDefinitionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDefaultRateDefinitionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDefaultRateDefinitionResponse;
  static deserializeBinaryFromReader(message: CreateDefaultRateDefinitionResponse, reader: jspb.BinaryReader): CreateDefaultRateDefinitionResponse;
}

export namespace CreateDefaultRateDefinitionResponse {
  export type AsObject = {
    rateDefinitionId: string,
  }
}

export class DeleteDefaultRateDefinitionRequest extends jspb.Message {
  getRateDefinitionId(): string;
  setRateDefinitionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDefaultRateDefinitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDefaultRateDefinitionRequest): DeleteDefaultRateDefinitionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDefaultRateDefinitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDefaultRateDefinitionRequest;
  static deserializeBinaryFromReader(message: DeleteDefaultRateDefinitionRequest, reader: jspb.BinaryReader): DeleteDefaultRateDefinitionRequest;
}

export namespace DeleteDefaultRateDefinitionRequest {
  export type AsObject = {
    rateDefinitionId: string,
  }
}

export class DeleteDefaultRateDefinitionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDefaultRateDefinitionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDefaultRateDefinitionResponse): DeleteDefaultRateDefinitionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDefaultRateDefinitionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDefaultRateDefinitionResponse;
  static deserializeBinaryFromReader(message: DeleteDefaultRateDefinitionResponse, reader: jspb.BinaryReader): DeleteDefaultRateDefinitionResponse;
}

export namespace DeleteDefaultRateDefinitionResponse {
  export type AsObject = {
  }
}

export class GetDefaultRateDefinitionRequest extends jspb.Message {
  getRateDefinitionId(): string;
  setRateDefinitionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDefaultRateDefinitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDefaultRateDefinitionRequest): GetDefaultRateDefinitionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDefaultRateDefinitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDefaultRateDefinitionRequest;
  static deserializeBinaryFromReader(message: GetDefaultRateDefinitionRequest, reader: jspb.BinaryReader): GetDefaultRateDefinitionRequest;
}

export namespace GetDefaultRateDefinitionRequest {
  export type AsObject = {
    rateDefinitionId: string,
  }
}

export class GetDefaultRateDefinitionResponse extends jspb.Message {
  hasRateDefinition(): boolean;
  clearRateDefinition(): void;
  getRateDefinition(): services_billing_entities_v1alpha4_rates_pb.RateDefinition | undefined;
  setRateDefinition(value?: services_billing_entities_v1alpha4_rates_pb.RateDefinition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDefaultRateDefinitionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDefaultRateDefinitionResponse): GetDefaultRateDefinitionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDefaultRateDefinitionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDefaultRateDefinitionResponse;
  static deserializeBinaryFromReader(message: GetDefaultRateDefinitionResponse, reader: jspb.BinaryReader): GetDefaultRateDefinitionResponse;
}

export namespace GetDefaultRateDefinitionResponse {
  export type AsObject = {
    rateDefinition?: services_billing_entities_v1alpha4_rates_pb.RateDefinition.AsObject,
  }
}

export class ListDefaultRateDefinitionsRequest extends jspb.Message {
  getRateDefinitionId(): string;
  setRateDefinitionId(value: string): void;

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
  toObject(includeInstance?: boolean): ListDefaultRateDefinitionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDefaultRateDefinitionsRequest): ListDefaultRateDefinitionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDefaultRateDefinitionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDefaultRateDefinitionsRequest;
  static deserializeBinaryFromReader(message: ListDefaultRateDefinitionsRequest, reader: jspb.BinaryReader): ListDefaultRateDefinitionsRequest;
}

export namespace ListDefaultRateDefinitionsRequest {
  export type AsObject = {
    rateDefinitionId: string,
    filter: string,
    fields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    sortList: Array<services_billing_v1alpha4_core_pb.Sort.AsObject>,
    page?: services_billing_v1alpha4_core_pb.Page.AsObject,
  }
}

export class ListDefaultRateDefinitionsResponse extends jspb.Message {
  clearRateDefinitionsList(): void;
  getRateDefinitionsList(): Array<services_billing_entities_v1alpha4_rates_pb.RateDefinition>;
  setRateDefinitionsList(value: Array<services_billing_entities_v1alpha4_rates_pb.RateDefinition>): void;
  addRateDefinitions(value?: services_billing_entities_v1alpha4_rates_pb.RateDefinition, index?: number): services_billing_entities_v1alpha4_rates_pb.RateDefinition;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDefaultRateDefinitionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDefaultRateDefinitionsResponse): ListDefaultRateDefinitionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDefaultRateDefinitionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDefaultRateDefinitionsResponse;
  static deserializeBinaryFromReader(message: ListDefaultRateDefinitionsResponse, reader: jspb.BinaryReader): ListDefaultRateDefinitionsResponse;
}

export namespace ListDefaultRateDefinitionsResponse {
  export type AsObject = {
    rateDefinitionsList: Array<services_billing_entities_v1alpha4_rates_pb.RateDefinition.AsObject>,
    token: string,
  }
}

export class UpdateDefaultRateDefinitionRequest extends jspb.Message {
  getRateDefinitionId(): string;
  setRateDefinitionId(value: string): void;

  hasRateDefinition(): boolean;
  clearRateDefinition(): void;
  getRateDefinition(): services_billing_entities_v1alpha4_rates_pb.RateDefinition | undefined;
  setRateDefinition(value?: services_billing_entities_v1alpha4_rates_pb.RateDefinition): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDefaultRateDefinitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDefaultRateDefinitionRequest): UpdateDefaultRateDefinitionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDefaultRateDefinitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDefaultRateDefinitionRequest;
  static deserializeBinaryFromReader(message: UpdateDefaultRateDefinitionRequest, reader: jspb.BinaryReader): UpdateDefaultRateDefinitionRequest;
}

export namespace UpdateDefaultRateDefinitionRequest {
  export type AsObject = {
    rateDefinitionId: string,
    rateDefinition?: services_billing_entities_v1alpha4_rates_pb.RateDefinition.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateDefaultRateDefinitionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDefaultRateDefinitionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDefaultRateDefinitionResponse): UpdateDefaultRateDefinitionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDefaultRateDefinitionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDefaultRateDefinitionResponse;
  static deserializeBinaryFromReader(message: UpdateDefaultRateDefinitionResponse, reader: jspb.BinaryReader): UpdateDefaultRateDefinitionResponse;
}

export namespace UpdateDefaultRateDefinitionResponse {
  export type AsObject = {
  }
}

