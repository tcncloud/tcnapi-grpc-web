// package: services.billing.v1alpha1
// file: services/billing/v1alpha1/history.proto

import * as jspb from "google-protobuf";
import * as api_commons_audit_event_types_pb from "../../../api/commons/audit/event_types_pb";
import * as services_billing_entities_v1alpha1_history_pb from "../../../services/billing/entities/v1alpha1/history_pb";
import * as services_billing_entities_v1alpha1_matching_pb from "../../../services/billing/entities/v1alpha1/matching_pb";
import * as services_billing_entities_v1alpha1_rates_pb from "../../../services/billing/entities/v1alpha1/rates_pb";

export class GetRateHistoryRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

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

  clearMatchingShasList(): void;
  getMatchingShasList(): Array<string>;
  setMatchingShasList(value: Array<string>): void;
  addMatchingShas(value: string, index?: number): string;

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
    eventTypesList: Array<api_commons_audit_event_types_pb.EventTypeMap[keyof api_commons_audit_event_types_pb.EventTypeMap]>,
    configTypesList: Array<services_billing_entities_v1alpha1_rates_pb.RateDefinitionConfigTypeMap[keyof services_billing_entities_v1alpha1_rates_pb.RateDefinitionConfigTypeMap]>,
    matchingRulesList: Array<services_billing_entities_v1alpha1_matching_pb.MatchingRuleMap[keyof services_billing_entities_v1alpha1_matching_pb.MatchingRuleMap]>,
    matchingShasList: Array<string>,
  }
}

export class GetRateHistoryResponse extends jspb.Message {
  clearHistoryList(): void;
  getHistoryList(): Array<services_billing_entities_v1alpha1_history_pb.RateHistoryItem>;
  setHistoryList(value: Array<services_billing_entities_v1alpha1_history_pb.RateHistoryItem>): void;
  addHistory(value?: services_billing_entities_v1alpha1_history_pb.RateHistoryItem, index?: number): services_billing_entities_v1alpha1_history_pb.RateHistoryItem;

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
    historyList: Array<services_billing_entities_v1alpha1_history_pb.RateHistoryItem.AsObject>,
  }
}

