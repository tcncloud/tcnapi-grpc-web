// package: services.billing.v1alpha4
// file: services/billing/v1alpha4/matching_rule.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as services_billing_entities_v1alpha4_rates_pb from "../../../services/billing/entities/v1alpha4/rates_pb";
import * as services_billing_v1alpha4_core_pb from "../../../services/billing/v1alpha4/core_pb";

export class CreateMatchingRuleRequest extends jspb.Message {
  getMatchingRuleId(): string;
  setMatchingRuleId(value: string): void;

  hasMatchingRule(): boolean;
  clearMatchingRule(): void;
  getMatchingRule(): services_billing_entities_v1alpha4_rates_pb.MatchingRule | undefined;
  setMatchingRule(value?: services_billing_entities_v1alpha4_rates_pb.MatchingRule): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMatchingRuleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMatchingRuleRequest): CreateMatchingRuleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateMatchingRuleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMatchingRuleRequest;
  static deserializeBinaryFromReader(message: CreateMatchingRuleRequest, reader: jspb.BinaryReader): CreateMatchingRuleRequest;
}

export namespace CreateMatchingRuleRequest {
  export type AsObject = {
    matchingRuleId: string,
    matchingRule?: services_billing_entities_v1alpha4_rates_pb.MatchingRule.AsObject,
  }
}

export class CreateMatchingRuleResponse extends jspb.Message {
  getMatchingRuleId(): string;
  setMatchingRuleId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMatchingRuleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMatchingRuleResponse): CreateMatchingRuleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateMatchingRuleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMatchingRuleResponse;
  static deserializeBinaryFromReader(message: CreateMatchingRuleResponse, reader: jspb.BinaryReader): CreateMatchingRuleResponse;
}

export namespace CreateMatchingRuleResponse {
  export type AsObject = {
    matchingRuleId: string,
  }
}

export class DeleteMatchingRuleRequest extends jspb.Message {
  getMatchingRuleId(): string;
  setMatchingRuleId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMatchingRuleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMatchingRuleRequest): DeleteMatchingRuleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteMatchingRuleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMatchingRuleRequest;
  static deserializeBinaryFromReader(message: DeleteMatchingRuleRequest, reader: jspb.BinaryReader): DeleteMatchingRuleRequest;
}

export namespace DeleteMatchingRuleRequest {
  export type AsObject = {
    matchingRuleId: string,
  }
}

export class DeleteMatchingRuleResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMatchingRuleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMatchingRuleResponse): DeleteMatchingRuleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteMatchingRuleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMatchingRuleResponse;
  static deserializeBinaryFromReader(message: DeleteMatchingRuleResponse, reader: jspb.BinaryReader): DeleteMatchingRuleResponse;
}

export namespace DeleteMatchingRuleResponse {
  export type AsObject = {
  }
}

export class GetMatchingRuleRequest extends jspb.Message {
  getMatchingRuleId(): string;
  setMatchingRuleId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMatchingRuleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMatchingRuleRequest): GetMatchingRuleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMatchingRuleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMatchingRuleRequest;
  static deserializeBinaryFromReader(message: GetMatchingRuleRequest, reader: jspb.BinaryReader): GetMatchingRuleRequest;
}

export namespace GetMatchingRuleRequest {
  export type AsObject = {
    matchingRuleId: string,
  }
}

export class GetMatchingRuleResponse extends jspb.Message {
  hasMatchingRule(): boolean;
  clearMatchingRule(): void;
  getMatchingRule(): services_billing_entities_v1alpha4_rates_pb.MatchingRule | undefined;
  setMatchingRule(value?: services_billing_entities_v1alpha4_rates_pb.MatchingRule): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMatchingRuleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMatchingRuleResponse): GetMatchingRuleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMatchingRuleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMatchingRuleResponse;
  static deserializeBinaryFromReader(message: GetMatchingRuleResponse, reader: jspb.BinaryReader): GetMatchingRuleResponse;
}

export namespace GetMatchingRuleResponse {
  export type AsObject = {
    matchingRule?: services_billing_entities_v1alpha4_rates_pb.MatchingRule.AsObject,
  }
}

export class ListMatchingRulesRequest extends jspb.Message {
  getMatchingRuleId(): string;
  setMatchingRuleId(value: string): void;

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
  toObject(includeInstance?: boolean): ListMatchingRulesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListMatchingRulesRequest): ListMatchingRulesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListMatchingRulesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMatchingRulesRequest;
  static deserializeBinaryFromReader(message: ListMatchingRulesRequest, reader: jspb.BinaryReader): ListMatchingRulesRequest;
}

export namespace ListMatchingRulesRequest {
  export type AsObject = {
    matchingRuleId: string,
    filter: string,
    fields?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    sortList: Array<services_billing_v1alpha4_core_pb.Sort.AsObject>,
    page?: services_billing_v1alpha4_core_pb.Page.AsObject,
  }
}

export class ListMatchingRulesResponse extends jspb.Message {
  clearMatchingRulesList(): void;
  getMatchingRulesList(): Array<services_billing_entities_v1alpha4_rates_pb.MatchingRule>;
  setMatchingRulesList(value: Array<services_billing_entities_v1alpha4_rates_pb.MatchingRule>): void;
  addMatchingRules(value?: services_billing_entities_v1alpha4_rates_pb.MatchingRule, index?: number): services_billing_entities_v1alpha4_rates_pb.MatchingRule;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMatchingRulesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListMatchingRulesResponse): ListMatchingRulesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListMatchingRulesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMatchingRulesResponse;
  static deserializeBinaryFromReader(message: ListMatchingRulesResponse, reader: jspb.BinaryReader): ListMatchingRulesResponse;
}

export namespace ListMatchingRulesResponse {
  export type AsObject = {
    matchingRulesList: Array<services_billing_entities_v1alpha4_rates_pb.MatchingRule.AsObject>,
    token: string,
  }
}

export class UpdateMatchingRuleRequest extends jspb.Message {
  getMatchingRuleId(): string;
  setMatchingRuleId(value: string): void;

  hasMatchingRule(): boolean;
  clearMatchingRule(): void;
  getMatchingRule(): services_billing_entities_v1alpha4_rates_pb.MatchingRule | undefined;
  setMatchingRule(value?: services_billing_entities_v1alpha4_rates_pb.MatchingRule): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMatchingRuleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMatchingRuleRequest): UpdateMatchingRuleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateMatchingRuleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMatchingRuleRequest;
  static deserializeBinaryFromReader(message: UpdateMatchingRuleRequest, reader: jspb.BinaryReader): UpdateMatchingRuleRequest;
}

export namespace UpdateMatchingRuleRequest {
  export type AsObject = {
    matchingRuleId: string,
    matchingRule?: services_billing_entities_v1alpha4_rates_pb.MatchingRule.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateMatchingRuleResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMatchingRuleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMatchingRuleResponse): UpdateMatchingRuleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateMatchingRuleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMatchingRuleResponse;
  static deserializeBinaryFromReader(message: UpdateMatchingRuleResponse, reader: jspb.BinaryReader): UpdateMatchingRuleResponse;
}

export namespace UpdateMatchingRuleResponse {
  export type AsObject = {
  }
}

