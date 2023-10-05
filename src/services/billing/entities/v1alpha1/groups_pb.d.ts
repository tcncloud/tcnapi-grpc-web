// package: services.billing.entities.v1alpha1
// file: services/billing/entities/v1alpha1/groups.proto

import * as jspb from "google-protobuf";
import * as api_commons_audit_event_types_pb from "../../../../api/commons/audit/event_types_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as services_billing_entities_v1alpha1_config_pb from "../../../../services/billing/entities/v1alpha1/config_pb";
import * as services_billing_entities_v1alpha1_matching_pb from "../../../../services/billing/entities/v1alpha1/matching_pb";

export class RateDefinitionGroup extends jspb.Message {
  getRateDefinitionGroupId(): string;
  setRateDefinitionGroupId(value: string): void;

  getEventType(): api_commons_audit_event_types_pb.EventTypeMap[keyof api_commons_audit_event_types_pb.EventTypeMap];
  setEventType(value: api_commons_audit_event_types_pb.EventTypeMap[keyof api_commons_audit_event_types_pb.EventTypeMap]): void;

  getConfigType(): services_billing_entities_v1alpha1_config_pb.RateDefinitionConfigTypeMap[keyof services_billing_entities_v1alpha1_config_pb.RateDefinitionConfigTypeMap];
  setConfigType(value: services_billing_entities_v1alpha1_config_pb.RateDefinitionConfigTypeMap[keyof services_billing_entities_v1alpha1_config_pb.RateDefinitionConfigTypeMap]): void;

  getMatchingRule(): services_billing_entities_v1alpha1_matching_pb.MatchingRuleMap[keyof services_billing_entities_v1alpha1_matching_pb.MatchingRuleMap];
  setMatchingRule(value: services_billing_entities_v1alpha1_matching_pb.MatchingRuleMap[keyof services_billing_entities_v1alpha1_matching_pb.MatchingRuleMap]): void;

  hasMatchingConfig(): boolean;
  clearMatchingConfig(): void;
  getMatchingConfig(): services_billing_entities_v1alpha1_matching_pb.MatchingConfig | undefined;
  setMatchingConfig(value?: services_billing_entities_v1alpha1_matching_pb.MatchingConfig): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDeleteTime(): boolean;
  clearDeleteTime(): void;
  getDeleteTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeleteTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RateDefinitionGroup.AsObject;
  static toObject(includeInstance: boolean, msg: RateDefinitionGroup): RateDefinitionGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RateDefinitionGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RateDefinitionGroup;
  static deserializeBinaryFromReader(message: RateDefinitionGroup, reader: jspb.BinaryReader): RateDefinitionGroup;
}

export namespace RateDefinitionGroup {
  export type AsObject = {
    rateDefinitionGroupId: string,
    eventType: api_commons_audit_event_types_pb.EventTypeMap[keyof api_commons_audit_event_types_pb.EventTypeMap],
    configType: services_billing_entities_v1alpha1_config_pb.RateDefinitionConfigTypeMap[keyof services_billing_entities_v1alpha1_config_pb.RateDefinitionConfigTypeMap],
    matchingRule: services_billing_entities_v1alpha1_matching_pb.MatchingRuleMap[keyof services_billing_entities_v1alpha1_matching_pb.MatchingRuleMap],
    matchingConfig?: services_billing_entities_v1alpha1_matching_pb.MatchingConfig.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deleteTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

