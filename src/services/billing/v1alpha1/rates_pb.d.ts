// package: services.billing.v1alpha1
// file: services/billing/v1alpha1/rates.proto

import * as jspb from "google-protobuf";
import * as api_commons_audit_event_types_pb from "../../../api/commons/audit/event_types_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as services_billing_entities_v1alpha1_history_pb from "../../../services/billing/entities/v1alpha1/history_pb";
import * as services_billing_entities_v1alpha1_matching_pb from "../../../services/billing/entities/v1alpha1/matching_pb";
import * as services_billing_entities_v1alpha1_rates_pb from "../../../services/billing/entities/v1alpha1/rates_pb";
import * as services_billing_v1alpha1_core_pb from "../../../services/billing/v1alpha1/core_pb";

export class CreateDefaultRateDefinitionRequest extends jspb.Message {
  getRateDefinitionId(): string;
  setRateDefinitionId(value: string): void;

  hasRateDefinition(): boolean;
  clearRateDefinition(): void;
  getRateDefinition(): services_billing_entities_v1alpha1_rates_pb.RateDefinition | undefined;
  setRateDefinition(value?: services_billing_entities_v1alpha1_rates_pb.RateDefinition): void;

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
    rateDefinition?: services_billing_entities_v1alpha1_rates_pb.RateDefinition.AsObject,
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

export class CreateRateDefinitionRequest extends jspb.Message {
  getRateDefinitionId(): string;
  setRateDefinitionId(value: string): void;

  hasRateDefinition(): boolean;
  clearRateDefinition(): void;
  getRateDefinition(): services_billing_entities_v1alpha1_rates_pb.RateDefinition | undefined;
  setRateDefinition(value?: services_billing_entities_v1alpha1_rates_pb.RateDefinition): void;

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
    rateDefinition?: services_billing_entities_v1alpha1_rates_pb.RateDefinition.AsObject,
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
  getRateDefinition(): services_billing_entities_v1alpha1_rates_pb.RateDefinition | undefined;
  setRateDefinition(value?: services_billing_entities_v1alpha1_rates_pb.RateDefinition): void;

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
    rateDefinition?: services_billing_entities_v1alpha1_rates_pb.RateDefinition.AsObject,
  }
}

export class ListHistoricalRateDefinitionsRequest extends jspb.Message {
  hasHistoryItem(): boolean;
  clearHistoryItem(): void;
  getHistoryItem(): services_billing_entities_v1alpha1_history_pb.RateHistoryItem | undefined;
  setHistoryItem(value?: services_billing_entities_v1alpha1_history_pb.RateHistoryItem): void;

  clearEventTypesList(): void;
  getEventTypesList(): Array<api_commons_audit_event_types_pb.EventTypeMap[keyof api_commons_audit_event_types_pb.EventTypeMap]>;
  setEventTypesList(value: Array<api_commons_audit_event_types_pb.EventTypeMap[keyof api_commons_audit_event_types_pb.EventTypeMap]>): void;
  addEventTypes(value: api_commons_audit_event_types_pb.EventTypeMap[keyof api_commons_audit_event_types_pb.EventTypeMap], index?: number): api_commons_audit_event_types_pb.EventTypeMap[keyof api_commons_audit_event_types_pb.EventTypeMap];

  clearConfigTypesList(): void;
  getConfigTypesList(): Array<services_billing_entities_v1alpha1_rates_pb.RateDefinitionConfigTypeMap[keyof services_billing_entities_v1alpha1_rates_pb.RateDefinitionConfigTypeMap]>;
  setConfigTypesList(value: Array<services_billing_entities_v1alpha1_rates_pb.RateDefinitionConfigTypeMap[keyof services_billing_entities_v1alpha1_rates_pb.RateDefinitionConfigTypeMap]>): void;
  addConfigTypes(value: services_billing_entities_v1alpha1_rates_pb.RateDefinitionConfigTypeMap[keyof services_billing_entities_v1alpha1_rates_pb.RateDefinitionConfigTypeMap], index?: number): services_billing_entities_v1alpha1_rates_pb.RateDefinitionConfigTypeMap[keyof services_billing_entities_v1alpha1_rates_pb.RateDefinitionConfigTypeMap];

  clearMatchingRulesList(): void;
  getMatchingRulesList(): Array<services_billing_entities_v1alpha1_matching_pb.MatchingRuleMap[keyof services_billing_entities_v1alpha1_matching_pb.MatchingRuleMap]>;
  setMatchingRulesList(value: Array<services_billing_entities_v1alpha1_matching_pb.MatchingRuleMap[keyof services_billing_entities_v1alpha1_matching_pb.MatchingRuleMap]>): void;
  addMatchingRules(value: services_billing_entities_v1alpha1_matching_pb.MatchingRuleMap[keyof services_billing_entities_v1alpha1_matching_pb.MatchingRuleMap], index?: number): services_billing_entities_v1alpha1_matching_pb.MatchingRuleMap[keyof services_billing_entities_v1alpha1_matching_pb.MatchingRuleMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListHistoricalRateDefinitionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListHistoricalRateDefinitionsRequest): ListHistoricalRateDefinitionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListHistoricalRateDefinitionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListHistoricalRateDefinitionsRequest;
  static deserializeBinaryFromReader(message: ListHistoricalRateDefinitionsRequest, reader: jspb.BinaryReader): ListHistoricalRateDefinitionsRequest;
}

export namespace ListHistoricalRateDefinitionsRequest {
  export type AsObject = {
    historyItem?: services_billing_entities_v1alpha1_history_pb.RateHistoryItem.AsObject,
    eventTypesList: Array<api_commons_audit_event_types_pb.EventTypeMap[keyof api_commons_audit_event_types_pb.EventTypeMap]>,
    configTypesList: Array<services_billing_entities_v1alpha1_rates_pb.RateDefinitionConfigTypeMap[keyof services_billing_entities_v1alpha1_rates_pb.RateDefinitionConfigTypeMap]>,
    matchingRulesList: Array<services_billing_entities_v1alpha1_matching_pb.MatchingRuleMap[keyof services_billing_entities_v1alpha1_matching_pb.MatchingRuleMap]>,
  }
}

export class ListHistoricalRateDefinitionsResponse extends jspb.Message {
  clearRateDefinitionsList(): void;
  getRateDefinitionsList(): Array<services_billing_entities_v1alpha1_rates_pb.RateDefinition>;
  setRateDefinitionsList(value: Array<services_billing_entities_v1alpha1_rates_pb.RateDefinition>): void;
  addRateDefinitions(value?: services_billing_entities_v1alpha1_rates_pb.RateDefinition, index?: number): services_billing_entities_v1alpha1_rates_pb.RateDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListHistoricalRateDefinitionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListHistoricalRateDefinitionsResponse): ListHistoricalRateDefinitionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListHistoricalRateDefinitionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListHistoricalRateDefinitionsResponse;
  static deserializeBinaryFromReader(message: ListHistoricalRateDefinitionsResponse, reader: jspb.BinaryReader): ListHistoricalRateDefinitionsResponse;
}

export namespace ListHistoricalRateDefinitionsResponse {
  export type AsObject = {
    rateDefinitionsList: Array<services_billing_entities_v1alpha1_rates_pb.RateDefinition.AsObject>,
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
  getSortList(): Array<services_billing_v1alpha1_core_pb.Sort>;
  setSortList(value: Array<services_billing_v1alpha1_core_pb.Sort>): void;
  addSort(value?: services_billing_v1alpha1_core_pb.Sort, index?: number): services_billing_v1alpha1_core_pb.Sort;

  hasPage(): boolean;
  clearPage(): void;
  getPage(): services_billing_v1alpha1_core_pb.Page | undefined;
  setPage(value?: services_billing_v1alpha1_core_pb.Page): void;

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
    sortList: Array<services_billing_v1alpha1_core_pb.Sort.AsObject>,
    page?: services_billing_v1alpha1_core_pb.Page.AsObject,
  }
}

export class ListRateDefinitionsResponse extends jspb.Message {
  clearRateDefinitionsList(): void;
  getRateDefinitionsList(): Array<services_billing_entities_v1alpha1_rates_pb.RateDefinition>;
  setRateDefinitionsList(value: Array<services_billing_entities_v1alpha1_rates_pb.RateDefinition>): void;
  addRateDefinitions(value?: services_billing_entities_v1alpha1_rates_pb.RateDefinition, index?: number): services_billing_entities_v1alpha1_rates_pb.RateDefinition;

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
    rateDefinitionsList: Array<services_billing_entities_v1alpha1_rates_pb.RateDefinition.AsObject>,
    token: string,
  }
}

export class UpdateDefaultRateDefinitionRequest extends jspb.Message {
  getRateDefinitionId(): string;
  setRateDefinitionId(value: string): void;

  hasRateDefinition(): boolean;
  clearRateDefinition(): void;
  getRateDefinition(): services_billing_entities_v1alpha1_rates_pb.RateDefinition | undefined;
  setRateDefinition(value?: services_billing_entities_v1alpha1_rates_pb.RateDefinition): void;

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
    rateDefinition?: services_billing_entities_v1alpha1_rates_pb.RateDefinition.AsObject,
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
  getRateDefinition(): services_billing_entities_v1alpha1_rates_pb.RateDefinition | undefined;
  setRateDefinition(value?: services_billing_entities_v1alpha1_rates_pb.RateDefinition): void;

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
    rateDefinition?: services_billing_entities_v1alpha1_rates_pb.RateDefinition.AsObject,
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

