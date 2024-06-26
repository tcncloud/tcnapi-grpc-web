// package: services.billing.v1alpha2
// file: services/billing/v1alpha2/rates.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as services_billing_entities_v1alpha2_rates_pb from "../../../services/billing/entities/v1alpha2/rates_pb";
import * as services_billing_v1alpha2_core_pb from "../../../services/billing/v1alpha2/core_pb";

export class CreateDefaultRateDefinitionRequest extends jspb.Message {
  getRateDefinitionId(): string;
  setRateDefinitionId(value: string): void;

  hasRateDefinition(): boolean;
  clearRateDefinition(): void;
  getRateDefinition(): services_billing_entities_v1alpha2_rates_pb.RateDefinition | undefined;
  setRateDefinition(value?: services_billing_entities_v1alpha2_rates_pb.RateDefinition): void;

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
    rateDefinition?: services_billing_entities_v1alpha2_rates_pb.RateDefinition.AsObject,
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

export class CreateDefaultRateDefinitionsRequest extends jspb.Message {
  clearRatesList(): void;
  getRatesList(): Array<CreateDefaultRateDefinitionRequest>;
  setRatesList(value: Array<CreateDefaultRateDefinitionRequest>): void;
  addRates(value?: CreateDefaultRateDefinitionRequest, index?: number): CreateDefaultRateDefinitionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDefaultRateDefinitionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDefaultRateDefinitionsRequest): CreateDefaultRateDefinitionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDefaultRateDefinitionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDefaultRateDefinitionsRequest;
  static deserializeBinaryFromReader(message: CreateDefaultRateDefinitionsRequest, reader: jspb.BinaryReader): CreateDefaultRateDefinitionsRequest;
}

export namespace CreateDefaultRateDefinitionsRequest {
  export type AsObject = {
    ratesList: Array<CreateDefaultRateDefinitionRequest.AsObject>,
  }
}

export class CreateDefaultRateDefinitionsResponse extends jspb.Message {
  clearRatesList(): void;
  getRatesList(): Array<CreateDefaultRateDefinitionResponse>;
  setRatesList(value: Array<CreateDefaultRateDefinitionResponse>): void;
  addRates(value?: CreateDefaultRateDefinitionResponse, index?: number): CreateDefaultRateDefinitionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDefaultRateDefinitionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDefaultRateDefinitionsResponse): CreateDefaultRateDefinitionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDefaultRateDefinitionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDefaultRateDefinitionsResponse;
  static deserializeBinaryFromReader(message: CreateDefaultRateDefinitionsResponse, reader: jspb.BinaryReader): CreateDefaultRateDefinitionsResponse;
}

export namespace CreateDefaultRateDefinitionsResponse {
  export type AsObject = {
    ratesList: Array<CreateDefaultRateDefinitionResponse.AsObject>,
  }
}

export class CreateRateDefinitionRequest extends jspb.Message {
  getRateDefinitionId(): string;
  setRateDefinitionId(value: string): void;

  hasRateDefinition(): boolean;
  clearRateDefinition(): void;
  getRateDefinition(): services_billing_entities_v1alpha2_rates_pb.RateDefinition | undefined;
  setRateDefinition(value?: services_billing_entities_v1alpha2_rates_pb.RateDefinition): void;

  getDefaultRateDefinitionId(): string;
  setDefaultRateDefinitionId(value: string): void;

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
    rateDefinitionId: string,
    rateDefinition?: services_billing_entities_v1alpha2_rates_pb.RateDefinition.AsObject,
    defaultRateDefinitionId: string,
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

export class CreateRateDefinitionsRequest extends jspb.Message {
  clearRatesList(): void;
  getRatesList(): Array<CreateRateDefinitionRequest>;
  setRatesList(value: Array<CreateRateDefinitionRequest>): void;
  addRates(value?: CreateRateDefinitionRequest, index?: number): CreateRateDefinitionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRateDefinitionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRateDefinitionsRequest): CreateRateDefinitionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRateDefinitionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRateDefinitionsRequest;
  static deserializeBinaryFromReader(message: CreateRateDefinitionsRequest, reader: jspb.BinaryReader): CreateRateDefinitionsRequest;
}

export namespace CreateRateDefinitionsRequest {
  export type AsObject = {
    ratesList: Array<CreateRateDefinitionRequest.AsObject>,
  }
}

export class CreateRateDefinitionsResponse extends jspb.Message {
  clearRatesList(): void;
  getRatesList(): Array<CreateRateDefinitionResponse>;
  setRatesList(value: Array<CreateRateDefinitionResponse>): void;
  addRates(value?: CreateRateDefinitionResponse, index?: number): CreateRateDefinitionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRateDefinitionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRateDefinitionsResponse): CreateRateDefinitionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRateDefinitionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRateDefinitionsResponse;
  static deserializeBinaryFromReader(message: CreateRateDefinitionsResponse, reader: jspb.BinaryReader): CreateRateDefinitionsResponse;
}

export namespace CreateRateDefinitionsResponse {
  export type AsObject = {
    ratesList: Array<CreateRateDefinitionResponse.AsObject>,
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

export class DeleteDefaultRateDefinitionsRequest extends jspb.Message {
  clearRateDefinitionIdsList(): void;
  getRateDefinitionIdsList(): Array<string>;
  setRateDefinitionIdsList(value: Array<string>): void;
  addRateDefinitionIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDefaultRateDefinitionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDefaultRateDefinitionsRequest): DeleteDefaultRateDefinitionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDefaultRateDefinitionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDefaultRateDefinitionsRequest;
  static deserializeBinaryFromReader(message: DeleteDefaultRateDefinitionsRequest, reader: jspb.BinaryReader): DeleteDefaultRateDefinitionsRequest;
}

export namespace DeleteDefaultRateDefinitionsRequest {
  export type AsObject = {
    rateDefinitionIdsList: Array<string>,
  }
}

export class DeleteDefaultRateDefinitionsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDefaultRateDefinitionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDefaultRateDefinitionsResponse): DeleteDefaultRateDefinitionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDefaultRateDefinitionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDefaultRateDefinitionsResponse;
  static deserializeBinaryFromReader(message: DeleteDefaultRateDefinitionsResponse, reader: jspb.BinaryReader): DeleteDefaultRateDefinitionsResponse;
}

export namespace DeleteDefaultRateDefinitionsResponse {
  export type AsObject = {
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

export class DeleteRateDefinitionsRequest extends jspb.Message {
  clearRateDefinitionIdsList(): void;
  getRateDefinitionIdsList(): Array<string>;
  setRateDefinitionIdsList(value: Array<string>): void;
  addRateDefinitionIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRateDefinitionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRateDefinitionsRequest): DeleteRateDefinitionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRateDefinitionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRateDefinitionsRequest;
  static deserializeBinaryFromReader(message: DeleteRateDefinitionsRequest, reader: jspb.BinaryReader): DeleteRateDefinitionsRequest;
}

export namespace DeleteRateDefinitionsRequest {
  export type AsObject = {
    rateDefinitionIdsList: Array<string>,
  }
}

export class DeleteRateDefinitionsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRateDefinitionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRateDefinitionsResponse): DeleteRateDefinitionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRateDefinitionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRateDefinitionsResponse;
  static deserializeBinaryFromReader(message: DeleteRateDefinitionsResponse, reader: jspb.BinaryReader): DeleteRateDefinitionsResponse;
}

export namespace DeleteRateDefinitionsResponse {
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
  getRateDefinition(): services_billing_entities_v1alpha2_rates_pb.RateDefinition | undefined;
  setRateDefinition(value?: services_billing_entities_v1alpha2_rates_pb.RateDefinition): void;

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
    rateDefinition?: services_billing_entities_v1alpha2_rates_pb.RateDefinition.AsObject,
  }
}

export class GetRateHistoryRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  clearGroupIdsList(): void;
  getGroupIdsList(): Array<string>;
  setGroupIdsList(value: Array<string>): void;
  addGroupIds(value: string, index?: number): string;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRateHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRateHistoryRequest): GetRateHistoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRateHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRateHistoryRequest;
  static deserializeBinaryFromReader(message: GetRateHistoryRequest, reader: jspb.BinaryReader): GetRateHistoryRequest;
}

export namespace GetRateHistoryRequest {
  export type AsObject = {
    orgId: string,
    groupIdsList: Array<string>,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetRateHistoryResponse extends jspb.Message {
  clearSnapshotsList(): void;
  getSnapshotsList(): Array<services_billing_entities_v1alpha2_rates_pb.RateSnapshot>;
  setSnapshotsList(value: Array<services_billing_entities_v1alpha2_rates_pb.RateSnapshot>): void;
  addSnapshots(value?: services_billing_entities_v1alpha2_rates_pb.RateSnapshot, index?: number): services_billing_entities_v1alpha2_rates_pb.RateSnapshot;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRateHistoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRateHistoryResponse): GetRateHistoryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRateHistoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRateHistoryResponse;
  static deserializeBinaryFromReader(message: GetRateHistoryResponse, reader: jspb.BinaryReader): GetRateHistoryResponse;
}

export namespace GetRateHistoryResponse {
  export type AsObject = {
    snapshotsList: Array<services_billing_entities_v1alpha2_rates_pb.RateSnapshot.AsObject>,
  }
}

export class ListActiveRateDefinitionsRequest extends jspb.Message {
  getRateDefinitionId(): string;
  setRateDefinitionId(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  hasFields(): boolean;
  clearFields(): void;
  getFields(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFields(value?: google_protobuf_field_mask_pb.FieldMask): void;

  clearSortList(): void;
  getSortList(): Array<services_billing_v1alpha2_core_pb.Sort>;
  setSortList(value: Array<services_billing_v1alpha2_core_pb.Sort>): void;
  addSort(value?: services_billing_v1alpha2_core_pb.Sort, index?: number): services_billing_v1alpha2_core_pb.Sort;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): services_billing_v1alpha2_core_pb.Page | undefined;
  setPage(value?: services_billing_v1alpha2_core_pb.Page): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListActiveRateDefinitionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListActiveRateDefinitionsRequest): ListActiveRateDefinitionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListActiveRateDefinitionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListActiveRateDefinitionsRequest;
  static deserializeBinaryFromReader(message: ListActiveRateDefinitionsRequest, reader: jspb.BinaryReader): ListActiveRateDefinitionsRequest;
}

export namespace ListActiveRateDefinitionsRequest {
  export type AsObject = {
    rateDefinitionId: string,
    filter: string,
    fields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    sortList: Array<services_billing_v1alpha2_core_pb.Sort.AsObject>,
    page?: services_billing_v1alpha2_core_pb.Page.AsObject,
  }
}

export class ListActiveRateDefinitionsResponse extends jspb.Message {
  clearRateDefinitionsList(): void;
  getRateDefinitionsList(): Array<services_billing_entities_v1alpha2_rates_pb.RateDefinition>;
  setRateDefinitionsList(value: Array<services_billing_entities_v1alpha2_rates_pb.RateDefinition>): void;
  addRateDefinitions(value?: services_billing_entities_v1alpha2_rates_pb.RateDefinition, index?: number): services_billing_entities_v1alpha2_rates_pb.RateDefinition;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListActiveRateDefinitionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListActiveRateDefinitionsResponse): ListActiveRateDefinitionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListActiveRateDefinitionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListActiveRateDefinitionsResponse;
  static deserializeBinaryFromReader(message: ListActiveRateDefinitionsResponse, reader: jspb.BinaryReader): ListActiveRateDefinitionsResponse;
}

export namespace ListActiveRateDefinitionsResponse {
  export type AsObject = {
    rateDefinitionsList: Array<services_billing_entities_v1alpha2_rates_pb.RateDefinition.AsObject>,
    token: string,
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
  getSortList(): Array<services_billing_v1alpha2_core_pb.Sort>;
  setSortList(value: Array<services_billing_v1alpha2_core_pb.Sort>): void;
  addSort(value?: services_billing_v1alpha2_core_pb.Sort, index?: number): services_billing_v1alpha2_core_pb.Sort;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): services_billing_v1alpha2_core_pb.Page | undefined;
  setPage(value?: services_billing_v1alpha2_core_pb.Page): void;

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
    sortList: Array<services_billing_v1alpha2_core_pb.Sort.AsObject>,
    page?: services_billing_v1alpha2_core_pb.Page.AsObject,
  }
}

export class ListRateDefinitionsResponse extends jspb.Message {
  clearRateDefinitionsList(): void;
  getRateDefinitionsList(): Array<services_billing_entities_v1alpha2_rates_pb.RateDefinition>;
  setRateDefinitionsList(value: Array<services_billing_entities_v1alpha2_rates_pb.RateDefinition>): void;
  addRateDefinitions(value?: services_billing_entities_v1alpha2_rates_pb.RateDefinition, index?: number): services_billing_entities_v1alpha2_rates_pb.RateDefinition;

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
    rateDefinitionsList: Array<services_billing_entities_v1alpha2_rates_pb.RateDefinition.AsObject>,
    token: string,
  }
}

export class UpdateDefaultRateDefinitionRequest extends jspb.Message {
  getRateDefinitionId(): string;
  setRateDefinitionId(value: string): void;

  hasRateDefinition(): boolean;
  clearRateDefinition(): void;
  getRateDefinition(): services_billing_entities_v1alpha2_rates_pb.RateDefinition | undefined;
  setRateDefinition(value?: services_billing_entities_v1alpha2_rates_pb.RateDefinition): void;

  hasUpdateFields(): boolean;
  clearUpdateFields(): void;
  getUpdateFields(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateFields(value?: google_protobuf_field_mask_pb.FieldMask): void;

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
    rateDefinition?: services_billing_entities_v1alpha2_rates_pb.RateDefinition.AsObject,
    updateFields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
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

export class UpdateRateDefinitionRequest extends jspb.Message {
  getRateDefinitionId(): string;
  setRateDefinitionId(value: string): void;

  hasRateDefinition(): boolean;
  clearRateDefinition(): void;
  getRateDefinition(): services_billing_entities_v1alpha2_rates_pb.RateDefinition | undefined;
  setRateDefinition(value?: services_billing_entities_v1alpha2_rates_pb.RateDefinition): void;

  hasUpdateFields(): boolean;
  clearUpdateFields(): void;
  getUpdateFields(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateFields(value?: google_protobuf_field_mask_pb.FieldMask): void;

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
    rateDefinition?: services_billing_entities_v1alpha2_rates_pb.RateDefinition.AsObject,
    updateFields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
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

