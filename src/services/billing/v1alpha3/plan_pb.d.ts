// package: services.billing.v1alpha3
// file: services/billing/v1alpha3/plan.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as services_billing_entities_v1alpha3_plan_pb from "../../../services/billing/entities/v1alpha3/plan_pb";
import * as services_billing_entities_v1alpha3_rates_pb from "../../../services/billing/entities/v1alpha3/rates_pb";
import * as services_billing_v1alpha3_core_pb from "../../../services/billing/v1alpha3/core_pb";

export class ApplyBillingPlanDraftRequest extends jspb.Message {
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
  toObject(includeInstance?: boolean): ApplyBillingPlanDraftRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyBillingPlanDraftRequest): ApplyBillingPlanDraftRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplyBillingPlanDraftRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyBillingPlanDraftRequest;
  static deserializeBinaryFromReader(message: ApplyBillingPlanDraftRequest, reader: jspb.BinaryReader): ApplyBillingPlanDraftRequest;
}

export namespace ApplyBillingPlanDraftRequest {
  export type AsObject = {
    billingPlanId: string,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    orgIdsList: Array<string>,
  }
}

export class ApplyBillingPlanDraftResponse extends jspb.Message {
  clearBillingPlanIdsList(): void;
  getBillingPlanIdsList(): Array<string>;
  setBillingPlanIdsList(value: Array<string>): void;
  addBillingPlanIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyBillingPlanDraftResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyBillingPlanDraftResponse): ApplyBillingPlanDraftResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplyBillingPlanDraftResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyBillingPlanDraftResponse;
  static deserializeBinaryFromReader(message: ApplyBillingPlanDraftResponse, reader: jspb.BinaryReader): ApplyBillingPlanDraftResponse;
}

export namespace ApplyBillingPlanDraftResponse {
  export type AsObject = {
    billingPlanIdsList: Array<string>,
  }
}

export class CreateBillingPlanRequest extends jspb.Message {
  getBillingPlanId(): string;
  setBillingPlanId(value: string): void;

  hasBillingPlan(): boolean;
  clearBillingPlan(): void;
  getBillingPlan(): services_billing_entities_v1alpha3_plan_pb.BillingPlan | undefined;
  setBillingPlan(value?: services_billing_entities_v1alpha3_plan_pb.BillingPlan): void;

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
    billingPlan?: services_billing_entities_v1alpha3_plan_pb.BillingPlan.AsObject,
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

export class GetOrgBillingPlanRequest extends jspb.Message {
  getBillingPlanId(): string;
  setBillingPlanId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrgBillingPlanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrgBillingPlanRequest): GetOrgBillingPlanRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrgBillingPlanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrgBillingPlanRequest;
  static deserializeBinaryFromReader(message: GetOrgBillingPlanRequest, reader: jspb.BinaryReader): GetOrgBillingPlanRequest;
}

export namespace GetOrgBillingPlanRequest {
  export type AsObject = {
    billingPlanId: string,
  }
}

export class GetOrgBillingPlanResponse extends jspb.Message {
  hasBillingPlan(): boolean;
  clearBillingPlan(): void;
  getBillingPlan(): services_billing_entities_v1alpha3_plan_pb.BillingPlan | undefined;
  setBillingPlan(value?: services_billing_entities_v1alpha3_plan_pb.BillingPlan): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrgBillingPlanResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrgBillingPlanResponse): GetOrgBillingPlanResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrgBillingPlanResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrgBillingPlanResponse;
  static deserializeBinaryFromReader(message: GetOrgBillingPlanResponse, reader: jspb.BinaryReader): GetOrgBillingPlanResponse;
}

export namespace GetOrgBillingPlanResponse {
  export type AsObject = {
    billingPlan?: services_billing_entities_v1alpha3_plan_pb.BillingPlan.AsObject,
  }
}

export class ListOrgBillingPlansRequest extends jspb.Message {
  getBillingPlanId(): string;
  setBillingPlanId(value: string): void;

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
  toObject(includeInstance?: boolean): ListOrgBillingPlansRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrgBillingPlansRequest): ListOrgBillingPlansRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrgBillingPlansRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrgBillingPlansRequest;
  static deserializeBinaryFromReader(message: ListOrgBillingPlansRequest, reader: jspb.BinaryReader): ListOrgBillingPlansRequest;
}

export namespace ListOrgBillingPlansRequest {
  export type AsObject = {
    billingPlanId: string,
    filter: string,
    fields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    sortList: Array<services_billing_v1alpha3_core_pb.Sort.AsObject>,
    page?: services_billing_v1alpha3_core_pb.Page.AsObject,
  }
}

export class ListOrgBillingPlansResponse extends jspb.Message {
  clearBillingPlansList(): void;
  getBillingPlansList(): Array<services_billing_entities_v1alpha3_plan_pb.BillingPlan>;
  setBillingPlansList(value: Array<services_billing_entities_v1alpha3_plan_pb.BillingPlan>): void;
  addBillingPlans(value?: services_billing_entities_v1alpha3_plan_pb.BillingPlan, index?: number): services_billing_entities_v1alpha3_plan_pb.BillingPlan;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrgBillingPlansResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrgBillingPlansResponse): ListOrgBillingPlansResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrgBillingPlansResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrgBillingPlansResponse;
  static deserializeBinaryFromReader(message: ListOrgBillingPlansResponse, reader: jspb.BinaryReader): ListOrgBillingPlansResponse;
}

export namespace ListOrgBillingPlansResponse {
  export type AsObject = {
    billingPlansList: Array<services_billing_entities_v1alpha3_plan_pb.BillingPlan.AsObject>,
    token: string,
  }
}

export class UpdateBillingPlanRequest extends jspb.Message {
  getBillingPlanId(): string;
  setBillingPlanId(value: string): void;

  hasBillingPlan(): boolean;
  clearBillingPlan(): void;
  getBillingPlan(): services_billing_entities_v1alpha3_plan_pb.BillingPlan | undefined;
  setBillingPlan(value?: services_billing_entities_v1alpha3_plan_pb.BillingPlan): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

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
    billingPlan?: services_billing_entities_v1alpha3_plan_pb.BillingPlan.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
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

export class CreateRateDefinitionRequest extends jspb.Message {
  getBillingPlanId(): string;
  setBillingPlanId(value: string): void;

  hasRateDefinition(): boolean;
  clearRateDefinition(): void;
  getRateDefinition(): services_billing_entities_v1alpha3_rates_pb.RateDefinition | undefined;
  setRateDefinition(value?: services_billing_entities_v1alpha3_rates_pb.RateDefinition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRateDefinitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRateDefinitionRequest): CreateRateDefinitionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRateDefinitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRateDefinitionRequest;
  static deserializeBinaryFromReader(message: CreateRateDefinitionRequest, reader: jspb.BinaryReader): CreateRateDefinitionRequest;
}

export namespace CreateRateDefinitionRequest {
  export type AsObject = {
    billingPlanId: string,
    rateDefinition?: services_billing_entities_v1alpha3_rates_pb.RateDefinition.AsObject,
  }
}

export class CreateRateDefinitionResponse extends jspb.Message {
  getRateDefinitionId(): string;
  setRateDefinitionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRateDefinitionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRateDefinitionResponse): CreateRateDefinitionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRateDefinitionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRateDefinitionResponse;
  static deserializeBinaryFromReader(message: CreateRateDefinitionResponse, reader: jspb.BinaryReader): CreateRateDefinitionResponse;
}

export namespace CreateRateDefinitionResponse {
  export type AsObject = {
    rateDefinitionId: string,
  }
}

export class DeleteRateDefinitionRequest extends jspb.Message {
  getRateDefinitionId(): string;
  setRateDefinitionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRateDefinitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRateDefinitionRequest): DeleteRateDefinitionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRateDefinitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRateDefinitionRequest;
  static deserializeBinaryFromReader(message: DeleteRateDefinitionRequest, reader: jspb.BinaryReader): DeleteRateDefinitionRequest;
}

export namespace DeleteRateDefinitionRequest {
  export type AsObject = {
    rateDefinitionId: string,
  }
}

export class DeleteRateDefinitionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRateDefinitionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRateDefinitionResponse): DeleteRateDefinitionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRateDefinitionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRateDefinitionResponse;
  static deserializeBinaryFromReader(message: DeleteRateDefinitionResponse, reader: jspb.BinaryReader): DeleteRateDefinitionResponse;
}

export namespace DeleteRateDefinitionResponse {
  export type AsObject = {
  }
}

export class GetRateDefinitionRequest extends jspb.Message {
  getRateDefinitionId(): string;
  setRateDefinitionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRateDefinitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRateDefinitionRequest): GetRateDefinitionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRateDefinitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRateDefinitionRequest;
  static deserializeBinaryFromReader(message: GetRateDefinitionRequest, reader: jspb.BinaryReader): GetRateDefinitionRequest;
}

export namespace GetRateDefinitionRequest {
  export type AsObject = {
    rateDefinitionId: string,
  }
}

export class GetRateDefinitionResponse extends jspb.Message {
  hasRateDefinition(): boolean;
  clearRateDefinition(): void;
  getRateDefinition(): services_billing_entities_v1alpha3_rates_pb.RateDefinition | undefined;
  setRateDefinition(value?: services_billing_entities_v1alpha3_rates_pb.RateDefinition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRateDefinitionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRateDefinitionResponse): GetRateDefinitionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRateDefinitionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRateDefinitionResponse;
  static deserializeBinaryFromReader(message: GetRateDefinitionResponse, reader: jspb.BinaryReader): GetRateDefinitionResponse;
}

export namespace GetRateDefinitionResponse {
  export type AsObject = {
    rateDefinition?: services_billing_entities_v1alpha3_rates_pb.RateDefinition.AsObject,
  }
}

export class ListRateDefinitionsRequest extends jspb.Message {
  getRateDefinitionId(): string;
  setRateDefinitionId(value: string): void;

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
  toObject(includeInstance?: boolean): ListRateDefinitionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRateDefinitionsRequest): ListRateDefinitionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRateDefinitionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRateDefinitionsRequest;
  static deserializeBinaryFromReader(message: ListRateDefinitionsRequest, reader: jspb.BinaryReader): ListRateDefinitionsRequest;
}

export namespace ListRateDefinitionsRequest {
  export type AsObject = {
    rateDefinitionId: string,
    filter: string,
    fields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    sortList: Array<services_billing_v1alpha3_core_pb.Sort.AsObject>,
    page?: services_billing_v1alpha3_core_pb.Page.AsObject,
  }
}

export class ListRateDefinitionsResponse extends jspb.Message {
  clearRateDefinitionsList(): void;
  getRateDefinitionsList(): Array<services_billing_entities_v1alpha3_rates_pb.RateDefinition>;
  setRateDefinitionsList(value: Array<services_billing_entities_v1alpha3_rates_pb.RateDefinition>): void;
  addRateDefinitions(value?: services_billing_entities_v1alpha3_rates_pb.RateDefinition, index?: number): services_billing_entities_v1alpha3_rates_pb.RateDefinition;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRateDefinitionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRateDefinitionsResponse): ListRateDefinitionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRateDefinitionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRateDefinitionsResponse;
  static deserializeBinaryFromReader(message: ListRateDefinitionsResponse, reader: jspb.BinaryReader): ListRateDefinitionsResponse;
}

export namespace ListRateDefinitionsResponse {
  export type AsObject = {
    rateDefinitionsList: Array<services_billing_entities_v1alpha3_rates_pb.RateDefinition.AsObject>,
    token: string,
  }
}

export class UpdateRateDefinitionRequest extends jspb.Message {
  getRateDefinitionId(): string;
  setRateDefinitionId(value: string): void;

  hasRateDefinition(): boolean;
  clearRateDefinition(): void;
  getRateDefinition(): services_billing_entities_v1alpha3_rates_pb.RateDefinition | undefined;
  setRateDefinition(value?: services_billing_entities_v1alpha3_rates_pb.RateDefinition): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRateDefinitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRateDefinitionRequest): UpdateRateDefinitionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateRateDefinitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRateDefinitionRequest;
  static deserializeBinaryFromReader(message: UpdateRateDefinitionRequest, reader: jspb.BinaryReader): UpdateRateDefinitionRequest;
}

export namespace UpdateRateDefinitionRequest {
  export type AsObject = {
    rateDefinitionId: string,
    rateDefinition?: services_billing_entities_v1alpha3_rates_pb.RateDefinition.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateRateDefinitionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRateDefinitionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRateDefinitionResponse): UpdateRateDefinitionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateRateDefinitionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRateDefinitionResponse;
  static deserializeBinaryFromReader(message: UpdateRateDefinitionResponse, reader: jspb.BinaryReader): UpdateRateDefinitionResponse;
}

export namespace UpdateRateDefinitionResponse {
  export type AsObject = {
  }
}

