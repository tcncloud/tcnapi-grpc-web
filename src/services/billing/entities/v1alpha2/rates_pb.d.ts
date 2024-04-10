// package: services.billing.entities.v1alpha2
// file: services/billing/entities/v1alpha2/rates.proto

import * as jspb from "google-protobuf";
import * as api_commons_audit_event_types_pb from "../../../../api/commons/audit/event_types_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as services_billing_entities_v1alpha2_matching_pb from "../../../../services/billing/entities/v1alpha2/matching_pb";
import * as services_billing_entities_v1alpha2_modules_pb from "../../../../services/billing/entities/v1alpha2/modules_pb";

export class RateSnapshot extends jspb.Message {
  hasStartDate(): boolean;
  clearStartDate(): void;
  getStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndDate(): boolean;
  clearEndDate(): void;
  getEndDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearRatesList(): void;
  getRatesList(): Array<RateDefinition>;
  setRatesList(value: Array<RateDefinition>): void;
  addRates(value?: RateDefinition, index?: number): RateDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RateSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: RateSnapshot): RateSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RateSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RateSnapshot;
  static deserializeBinaryFromReader(message: RateSnapshot, reader: jspb.BinaryReader): RateSnapshot;
}

export namespace RateSnapshot {
  export type AsObject = {
    startDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    ratesList: Array<RateDefinition.AsObject>,
  }
}

export class RateDefinition extends jspb.Message {
  getRateDefinitionId(): string;
  setRateDefinitionId(value: string): void;

  getEventType(): api_commons_audit_event_types_pb.EventTypeMap[keyof api_commons_audit_event_types_pb.EventTypeMap];
  setEventType(value: api_commons_audit_event_types_pb.EventTypeMap[keyof api_commons_audit_event_types_pb.EventTypeMap]): void;

  getConfigType(): RateDefinitionConfigTypeMap[keyof RateDefinitionConfigTypeMap];
  setConfigType(value: RateDefinitionConfigTypeMap[keyof RateDefinitionConfigTypeMap]): void;

  getMatchingRule(): services_billing_entities_v1alpha2_matching_pb.MatchingRuleMap[keyof services_billing_entities_v1alpha2_matching_pb.MatchingRuleMap];
  setMatchingRule(value: services_billing_entities_v1alpha2_matching_pb.MatchingRuleMap[keyof services_billing_entities_v1alpha2_matching_pb.MatchingRuleMap]): void;

  hasMatchingConfig(): boolean;
  clearMatchingConfig(): void;
  getMatchingConfig(): services_billing_entities_v1alpha2_matching_pb.MatchingConfig | undefined;
  setMatchingConfig(value?: services_billing_entities_v1alpha2_matching_pb.MatchingConfig): void;

  getMatchingSha(): string;
  setMatchingSha(value: string): void;

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

  hasEffectiveTime(): boolean;
  clearEffectiveTime(): void;
  getEffectiveTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEffectiveTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): RateDefinitionConfig | undefined;
  setConfig(value?: RateDefinitionConfig): void;

  getGroupId(): string;
  setGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RateDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: RateDefinition): RateDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RateDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RateDefinition;
  static deserializeBinaryFromReader(message: RateDefinition, reader: jspb.BinaryReader): RateDefinition;
}

export namespace RateDefinition {
  export type AsObject = {
    rateDefinitionId: string,
    eventType: api_commons_audit_event_types_pb.EventTypeMap[keyof api_commons_audit_event_types_pb.EventTypeMap],
    configType: RateDefinitionConfigTypeMap[keyof RateDefinitionConfigTypeMap],
    matchingRule: services_billing_entities_v1alpha2_matching_pb.MatchingRuleMap[keyof services_billing_entities_v1alpha2_matching_pb.MatchingRuleMap],
    matchingConfig?: services_billing_entities_v1alpha2_matching_pb.MatchingConfig.AsObject,
    matchingSha: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deleteTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    effectiveTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    config?: RateDefinitionConfig.AsObject,
    groupId: string,
  }
}

export class RateDefinitionConfig extends jspb.Message {
  hasAgentSeats(): boolean;
  clearAgentSeats(): void;
  getAgentSeats(): services_billing_entities_v1alpha2_modules_pb.BasicConfig | undefined;
  setAgentSeats(value?: services_billing_entities_v1alpha2_modules_pb.BasicConfig): void;

  hasConnectedInboxPoll(): boolean;
  clearConnectedInboxPoll(): void;
  getConnectedInboxPoll(): services_billing_entities_v1alpha2_modules_pb.BasicConfig | undefined;
  setConnectedInboxPoll(value?: services_billing_entities_v1alpha2_modules_pb.BasicConfig): void;

  hasConnectedInboxCreated(): boolean;
  clearConnectedInboxCreated(): void;
  getConnectedInboxCreated(): services_billing_entities_v1alpha2_modules_pb.BasicConfig | undefined;
  setConnectedInboxCreated(value?: services_billing_entities_v1alpha2_modules_pb.BasicConfig): void;

  hasAgentMessageChatConfig(): boolean;
  clearAgentMessageChatConfig(): void;
  getAgentMessageChatConfig(): services_billing_entities_v1alpha2_modules_pb.BasicConfig | undefined;
  setAgentMessageChatConfig(value?: services_billing_entities_v1alpha2_modules_pb.BasicConfig): void;

  hasAgentMessageChatSize(): boolean;
  clearAgentMessageChatSize(): void;
  getAgentMessageChatSize(): services_billing_entities_v1alpha2_modules_pb.BasicUnitConfig | undefined;
  setAgentMessageChatSize(value?: services_billing_entities_v1alpha2_modules_pb.BasicUnitConfig): void;

  hasAgentMessageEmailConfig(): boolean;
  clearAgentMessageEmailConfig(): void;
  getAgentMessageEmailConfig(): services_billing_entities_v1alpha2_modules_pb.BasicConfig | undefined;
  setAgentMessageEmailConfig(value?: services_billing_entities_v1alpha2_modules_pb.BasicConfig): void;

  hasAgentMessageEmailSize(): boolean;
  clearAgentMessageEmailSize(): void;
  getAgentMessageEmailSize(): services_billing_entities_v1alpha2_modules_pb.BasicUnitConfig | undefined;
  setAgentMessageEmailSize(value?: services_billing_entities_v1alpha2_modules_pb.BasicUnitConfig): void;

  hasAgentMessageSmsConfig(): boolean;
  clearAgentMessageSmsConfig(): void;
  getAgentMessageSmsConfig(): services_billing_entities_v1alpha2_modules_pb.BasicConfig | undefined;
  setAgentMessageSmsConfig(value?: services_billing_entities_v1alpha2_modules_pb.BasicConfig): void;

  hasAgentMessageSmsSize(): boolean;
  clearAgentMessageSmsSize(): void;
  getAgentMessageSmsSize(): services_billing_entities_v1alpha2_modules_pb.BasicUnitConfig | undefined;
  setAgentMessageSmsSize(value?: services_billing_entities_v1alpha2_modules_pb.BasicUnitConfig): void;

  hasManagerMessageChatConfig(): boolean;
  clearManagerMessageChatConfig(): void;
  getManagerMessageChatConfig(): services_billing_entities_v1alpha2_modules_pb.BasicConfig | undefined;
  setManagerMessageChatConfig(value?: services_billing_entities_v1alpha2_modules_pb.BasicConfig): void;

  hasManagerMessageChatSize(): boolean;
  clearManagerMessageChatSize(): void;
  getManagerMessageChatSize(): services_billing_entities_v1alpha2_modules_pb.BasicUnitConfig | undefined;
  setManagerMessageChatSize(value?: services_billing_entities_v1alpha2_modules_pb.BasicUnitConfig): void;

  hasManagerMessageEmailConfig(): boolean;
  clearManagerMessageEmailConfig(): void;
  getManagerMessageEmailConfig(): services_billing_entities_v1alpha2_modules_pb.BasicConfig | undefined;
  setManagerMessageEmailConfig(value?: services_billing_entities_v1alpha2_modules_pb.BasicConfig): void;

  hasManagerMessageEmailSize(): boolean;
  clearManagerMessageEmailSize(): void;
  getManagerMessageEmailSize(): services_billing_entities_v1alpha2_modules_pb.BasicUnitConfig | undefined;
  setManagerMessageEmailSize(value?: services_billing_entities_v1alpha2_modules_pb.BasicUnitConfig): void;

  hasManagerMessageSmsConfig(): boolean;
  clearManagerMessageSmsConfig(): void;
  getManagerMessageSmsConfig(): services_billing_entities_v1alpha2_modules_pb.BasicConfig | undefined;
  setManagerMessageSmsConfig(value?: services_billing_entities_v1alpha2_modules_pb.BasicConfig): void;

  hasManagerMessageSmsSize(): boolean;
  clearManagerMessageSmsSize(): void;
  getManagerMessageSmsSize(): services_billing_entities_v1alpha2_modules_pb.BasicUnitConfig | undefined;
  setManagerMessageSmsSize(value?: services_billing_entities_v1alpha2_modules_pb.BasicUnitConfig): void;

  hasSystemMessageChatConfig(): boolean;
  clearSystemMessageChatConfig(): void;
  getSystemMessageChatConfig(): services_billing_entities_v1alpha2_modules_pb.BasicConfig | undefined;
  setSystemMessageChatConfig(value?: services_billing_entities_v1alpha2_modules_pb.BasicConfig): void;

  hasSystemMessageChatSize(): boolean;
  clearSystemMessageChatSize(): void;
  getSystemMessageChatSize(): services_billing_entities_v1alpha2_modules_pb.BasicUnitConfig | undefined;
  setSystemMessageChatSize(value?: services_billing_entities_v1alpha2_modules_pb.BasicUnitConfig): void;

  hasSystemMessageEmailConfig(): boolean;
  clearSystemMessageEmailConfig(): void;
  getSystemMessageEmailConfig(): services_billing_entities_v1alpha2_modules_pb.BasicConfig | undefined;
  setSystemMessageEmailConfig(value?: services_billing_entities_v1alpha2_modules_pb.BasicConfig): void;

  hasSystemMessageEmailSize(): boolean;
  clearSystemMessageEmailSize(): void;
  getSystemMessageEmailSize(): services_billing_entities_v1alpha2_modules_pb.BasicUnitConfig | undefined;
  setSystemMessageEmailSize(value?: services_billing_entities_v1alpha2_modules_pb.BasicUnitConfig): void;

  hasSystemMessageSmsConfig(): boolean;
  clearSystemMessageSmsConfig(): void;
  getSystemMessageSmsConfig(): services_billing_entities_v1alpha2_modules_pb.BasicConfig | undefined;
  setSystemMessageSmsConfig(value?: services_billing_entities_v1alpha2_modules_pb.BasicConfig): void;

  hasSystemMessageSmsSize(): boolean;
  clearSystemMessageSmsSize(): void;
  getSystemMessageSmsSize(): services_billing_entities_v1alpha2_modules_pb.BasicUnitConfig | undefined;
  setSystemMessageSmsSize(value?: services_billing_entities_v1alpha2_modules_pb.BasicUnitConfig): void;

  hasCustomerMessageChatConfig(): boolean;
  clearCustomerMessageChatConfig(): void;
  getCustomerMessageChatConfig(): services_billing_entities_v1alpha2_modules_pb.BasicConfig | undefined;
  setCustomerMessageChatConfig(value?: services_billing_entities_v1alpha2_modules_pb.BasicConfig): void;

  hasCustomerMessageChatSize(): boolean;
  clearCustomerMessageChatSize(): void;
  getCustomerMessageChatSize(): services_billing_entities_v1alpha2_modules_pb.BasicUnitConfig | undefined;
  setCustomerMessageChatSize(value?: services_billing_entities_v1alpha2_modules_pb.BasicUnitConfig): void;

  hasCustomerMessageEmailConfig(): boolean;
  clearCustomerMessageEmailConfig(): void;
  getCustomerMessageEmailConfig(): services_billing_entities_v1alpha2_modules_pb.BasicConfig | undefined;
  setCustomerMessageEmailConfig(value?: services_billing_entities_v1alpha2_modules_pb.BasicConfig): void;

  hasCustomerMessageEmailSize(): boolean;
  clearCustomerMessageEmailSize(): void;
  getCustomerMessageEmailSize(): services_billing_entities_v1alpha2_modules_pb.BasicUnitConfig | undefined;
  setCustomerMessageEmailSize(value?: services_billing_entities_v1alpha2_modules_pb.BasicUnitConfig): void;

  hasCustomerMessageSmsConfig(): boolean;
  clearCustomerMessageSmsConfig(): void;
  getCustomerMessageSmsConfig(): services_billing_entities_v1alpha2_modules_pb.BasicConfig | undefined;
  setCustomerMessageSmsConfig(value?: services_billing_entities_v1alpha2_modules_pb.BasicConfig): void;

  hasCustomerMessageSmsSize(): boolean;
  clearCustomerMessageSmsSize(): void;
  getCustomerMessageSmsSize(): services_billing_entities_v1alpha2_modules_pb.BasicUnitConfig | undefined;
  setCustomerMessageSmsSize(value?: services_billing_entities_v1alpha2_modules_pb.BasicUnitConfig): void;

  hasComplianceRndQuery(): boolean;
  clearComplianceRndQuery(): void;
  getComplianceRndQuery(): services_billing_entities_v1alpha2_modules_pb.BasicConfig | undefined;
  setComplianceRndQuery(value?: services_billing_entities_v1alpha2_modules_pb.BasicConfig): void;

  hasComplianceRndQueryCached(): boolean;
  clearComplianceRndQueryCached(): void;
  getComplianceRndQueryCached(): services_billing_entities_v1alpha2_modules_pb.BasicConfig | undefined;
  setComplianceRndQueryCached(value?: services_billing_entities_v1alpha2_modules_pb.BasicConfig): void;

  getConfigCase(): RateDefinitionConfig.ConfigCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RateDefinitionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: RateDefinitionConfig): RateDefinitionConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RateDefinitionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RateDefinitionConfig;
  static deserializeBinaryFromReader(message: RateDefinitionConfig, reader: jspb.BinaryReader): RateDefinitionConfig;
}

export namespace RateDefinitionConfig {
  export type AsObject = {
    agentSeats?: services_billing_entities_v1alpha2_modules_pb.BasicConfig.AsObject,
    connectedInboxPoll?: services_billing_entities_v1alpha2_modules_pb.BasicConfig.AsObject,
    connectedInboxCreated?: services_billing_entities_v1alpha2_modules_pb.BasicConfig.AsObject,
    agentMessageChatConfig?: services_billing_entities_v1alpha2_modules_pb.BasicConfig.AsObject,
    agentMessageChatSize?: services_billing_entities_v1alpha2_modules_pb.BasicUnitConfig.AsObject,
    agentMessageEmailConfig?: services_billing_entities_v1alpha2_modules_pb.BasicConfig.AsObject,
    agentMessageEmailSize?: services_billing_entities_v1alpha2_modules_pb.BasicUnitConfig.AsObject,
    agentMessageSmsConfig?: services_billing_entities_v1alpha2_modules_pb.BasicConfig.AsObject,
    agentMessageSmsSize?: services_billing_entities_v1alpha2_modules_pb.BasicUnitConfig.AsObject,
    managerMessageChatConfig?: services_billing_entities_v1alpha2_modules_pb.BasicConfig.AsObject,
    managerMessageChatSize?: services_billing_entities_v1alpha2_modules_pb.BasicUnitConfig.AsObject,
    managerMessageEmailConfig?: services_billing_entities_v1alpha2_modules_pb.BasicConfig.AsObject,
    managerMessageEmailSize?: services_billing_entities_v1alpha2_modules_pb.BasicUnitConfig.AsObject,
    managerMessageSmsConfig?: services_billing_entities_v1alpha2_modules_pb.BasicConfig.AsObject,
    managerMessageSmsSize?: services_billing_entities_v1alpha2_modules_pb.BasicUnitConfig.AsObject,
    systemMessageChatConfig?: services_billing_entities_v1alpha2_modules_pb.BasicConfig.AsObject,
    systemMessageChatSize?: services_billing_entities_v1alpha2_modules_pb.BasicUnitConfig.AsObject,
    systemMessageEmailConfig?: services_billing_entities_v1alpha2_modules_pb.BasicConfig.AsObject,
    systemMessageEmailSize?: services_billing_entities_v1alpha2_modules_pb.BasicUnitConfig.AsObject,
    systemMessageSmsConfig?: services_billing_entities_v1alpha2_modules_pb.BasicConfig.AsObject,
    systemMessageSmsSize?: services_billing_entities_v1alpha2_modules_pb.BasicUnitConfig.AsObject,
    customerMessageChatConfig?: services_billing_entities_v1alpha2_modules_pb.BasicConfig.AsObject,
    customerMessageChatSize?: services_billing_entities_v1alpha2_modules_pb.BasicUnitConfig.AsObject,
    customerMessageEmailConfig?: services_billing_entities_v1alpha2_modules_pb.BasicConfig.AsObject,
    customerMessageEmailSize?: services_billing_entities_v1alpha2_modules_pb.BasicUnitConfig.AsObject,
    customerMessageSmsConfig?: services_billing_entities_v1alpha2_modules_pb.BasicConfig.AsObject,
    customerMessageSmsSize?: services_billing_entities_v1alpha2_modules_pb.BasicUnitConfig.AsObject,
    complianceRndQuery?: services_billing_entities_v1alpha2_modules_pb.BasicConfig.AsObject,
    complianceRndQueryCached?: services_billing_entities_v1alpha2_modules_pb.BasicConfig.AsObject,
  }

  export enum ConfigCase {
    CONFIG_NOT_SET = 0,
    AGENT_SEATS = 1000,
    CONNECTED_INBOX_POLL = 1500,
    CONNECTED_INBOX_CREATED = 1501,
    AGENT_MESSAGE_CHAT_CONFIG = 1600,
    AGENT_MESSAGE_CHAT_SIZE = 1601,
    AGENT_MESSAGE_EMAIL_CONFIG = 1610,
    AGENT_MESSAGE_EMAIL_SIZE = 1611,
    AGENT_MESSAGE_SMS_CONFIG = 1620,
    AGENT_MESSAGE_SMS_SIZE = 1621,
    MANAGER_MESSAGE_CHAT_CONFIG = 1700,
    MANAGER_MESSAGE_CHAT_SIZE = 1701,
    MANAGER_MESSAGE_EMAIL_CONFIG = 1710,
    MANAGER_MESSAGE_EMAIL_SIZE = 1711,
    MANAGER_MESSAGE_SMS_CONFIG = 1720,
    MANAGER_MESSAGE_SMS_SIZE = 1721,
    SYSTEM_MESSAGE_CHAT_CONFIG = 1800,
    SYSTEM_MESSAGE_CHAT_SIZE = 1801,
    SYSTEM_MESSAGE_EMAIL_CONFIG = 1810,
    SYSTEM_MESSAGE_EMAIL_SIZE = 1811,
    SYSTEM_MESSAGE_SMS_CONFIG = 1820,
    SYSTEM_MESSAGE_SMS_SIZE = 1821,
    CUSTOMER_MESSAGE_CHAT_CONFIG = 1900,
    CUSTOMER_MESSAGE_CHAT_SIZE = 1901,
    CUSTOMER_MESSAGE_EMAIL_CONFIG = 1910,
    CUSTOMER_MESSAGE_EMAIL_SIZE = 1911,
    CUSTOMER_MESSAGE_SMS_CONFIG = 1920,
    CUSTOMER_MESSAGE_SMS_SIZE = 1921,
    COMPLIANCE_RND_QUERY = 2000,
    COMPLIANCE_RND_QUERY_CACHED = 2001,
  }
}

export interface RateDefinitionConfigTypeMap {
  RATE_DEFINITION_CONFIG_TYPE_UNSPECIFIED: 0;
  RATE_DEFINITION_CONFIG_TYPE_NOOP: 1;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_AGENT_SEATS: 1000;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_CONNECTED_INBOX_POLL: 1500;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_CONNECTED_INBOX_CREATED: 1501;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_AGENT_MESSAGE_CHAT: 1600;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_AGENT_MESSAGE_CHAT_SIZE: 1601;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_AGENT_MESSAGE_EMAIL: 1610;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_AGENT_MESSAGE_EMAIL_SIZE: 1611;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_AGENT_MESSAGE_SMS: 1620;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_AGENT_MESSAGE_SMS_SIZE: 1621;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_MANAGER_MESSAGE_CHAT: 1700;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_MANAGER_MESSAGE_CHAT_SIZE: 1701;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_MANAGER_MESSAGE_EMAIL: 1710;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_MANAGER_MESSAGE_EMAIL_SIZE: 1711;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_MANAGER_MESSAGE_SMS: 1720;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_MANAGER_MESSAGE_SMS_SIZE: 1721;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_SYSTEM_MESSAGE_CHAT: 1800;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_SYSTEM_MESSAGE_CHAT_SIZE: 1801;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_SYSTEM_MESSAGE_EMAIL: 1810;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_SYSTEM_MESSAGE_EMAIL_SIZE: 1811;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_SYSTEM_MESSAGE_SMS: 1820;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_SYSTEM_MESSAGE_SMS_SIZE: 1821;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_CUSTOMER_MESSAGE_CHAT: 1900;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_CUSTOMER_MESSAGE_CHAT_SIZE: 1901;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_CUSTOMER_MESSAGE_EMAIL: 1910;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_CUSTOMER_MESSAGE_EMAIL_SIZE: 1911;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_CUSTOMER_MESSAGE_SMS: 1920;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_CUSTOMER_MESSAGE_SMS_SIZE: 1921;
  RATE_DEFINITION_CONFIG_TYPE_COMPLIANCE_RND_QUERY: 2000;
  RATE_DEFINITION_CONFIG_TYPE_COMPLIANCE_RND_QUERY_CACHED: 2001;
}

export const RateDefinitionConfigType: RateDefinitionConfigTypeMap;

