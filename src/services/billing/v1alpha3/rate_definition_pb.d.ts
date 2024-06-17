// package: services.billing.v1alpha3
// file: services/billing/v1alpha3/rate_definition.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as services_billing_entities_v1alpha3_rates_pb from "../../../services/billing/entities/v1alpha3/rates_pb";
import * as services_billing_v1alpha3_core_pb from "../../../services/billing/v1alpha3/core_pb";

export class CreateRateDefinitionRequest extends jspb.Message {
  getRateDefinitionId(): string;
  setRateDefinitionId(value: string): void;

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
    rateDefinitionId: string,
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

export class CreateTemplateRateDefinitionRequest extends jspb.Message {
  getRateDefinitionId(): string;
  setRateDefinitionId(value: string): void;

  hasRateDefinition(): boolean;
  clearRateDefinition(): void;
  getRateDefinition(): services_billing_entities_v1alpha3_rates_pb.RateDefinition | undefined;
  setRateDefinition(value?: services_billing_entities_v1alpha3_rates_pb.RateDefinition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTemplateRateDefinitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTemplateRateDefinitionRequest): CreateTemplateRateDefinitionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTemplateRateDefinitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTemplateRateDefinitionRequest;
  static deserializeBinaryFromReader(message: CreateTemplateRateDefinitionRequest, reader: jspb.BinaryReader): CreateTemplateRateDefinitionRequest;
}

export namespace CreateTemplateRateDefinitionRequest {
  export type AsObject = {
    rateDefinitionId: string,
    rateDefinition?: services_billing_entities_v1alpha3_rates_pb.RateDefinition.AsObject,
  }
}

export class CreateTemplateRateDefinitionResponse extends jspb.Message {
  getRateDefinitionId(): string;
  setRateDefinitionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTemplateRateDefinitionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTemplateRateDefinitionResponse): CreateTemplateRateDefinitionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTemplateRateDefinitionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTemplateRateDefinitionResponse;
  static deserializeBinaryFromReader(message: CreateTemplateRateDefinitionResponse, reader: jspb.BinaryReader): CreateTemplateRateDefinitionResponse;
}

export namespace CreateTemplateRateDefinitionResponse {
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

export class DeleteTemplateRateDefinitionRequest extends jspb.Message {
  getRateDefinitionId(): string;
  setRateDefinitionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTemplateRateDefinitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTemplateRateDefinitionRequest): DeleteTemplateRateDefinitionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTemplateRateDefinitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTemplateRateDefinitionRequest;
  static deserializeBinaryFromReader(message: DeleteTemplateRateDefinitionRequest, reader: jspb.BinaryReader): DeleteTemplateRateDefinitionRequest;
}

export namespace DeleteTemplateRateDefinitionRequest {
  export type AsObject = {
    rateDefinitionId: string,
  }
}

export class DeleteTemplateRateDefinitionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTemplateRateDefinitionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTemplateRateDefinitionResponse): DeleteTemplateRateDefinitionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTemplateRateDefinitionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTemplateRateDefinitionResponse;
  static deserializeBinaryFromReader(message: DeleteTemplateRateDefinitionResponse, reader: jspb.BinaryReader): DeleteTemplateRateDefinitionResponse;
}

export namespace DeleteTemplateRateDefinitionResponse {
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
    rateDefinition?: services_billing_entities_v1alpha3_rates_pb.RateDefinition.AsObject,
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

export class UpdateTemplateRateDefinitionRequest extends jspb.Message {
  getRateDefinitionId(): string;
  setRateDefinitionId(value: string): void;

  hasRateDefinition(): boolean;
  clearRateDefinition(): void;
  getRateDefinition(): services_billing_entities_v1alpha3_rates_pb.RateDefinition | undefined;
  setRateDefinition(value?: services_billing_entities_v1alpha3_rates_pb.RateDefinition): void;

  hasUpdateFields(): boolean;
  clearUpdateFields(): void;
  getUpdateFields(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateFields(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTemplateRateDefinitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTemplateRateDefinitionRequest): UpdateTemplateRateDefinitionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTemplateRateDefinitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTemplateRateDefinitionRequest;
  static deserializeBinaryFromReader(message: UpdateTemplateRateDefinitionRequest, reader: jspb.BinaryReader): UpdateTemplateRateDefinitionRequest;
}

export namespace UpdateTemplateRateDefinitionRequest {
  export type AsObject = {
    rateDefinitionId: string,
    rateDefinition?: services_billing_entities_v1alpha3_rates_pb.RateDefinition.AsObject,
    updateFields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateTemplateRateDefinitionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTemplateRateDefinitionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTemplateRateDefinitionResponse): UpdateTemplateRateDefinitionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTemplateRateDefinitionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTemplateRateDefinitionResponse;
  static deserializeBinaryFromReader(message: UpdateTemplateRateDefinitionResponse, reader: jspb.BinaryReader): UpdateTemplateRateDefinitionResponse;
}

export namespace UpdateTemplateRateDefinitionResponse {
  export type AsObject = {
  }
}

