// package: services.billing.entities.v1alpha1
// file: services/billing/entities/v1alpha1/rates.proto

import * as jspb from "google-protobuf";
import * as api_commons_audit_event_types_pb from "../../../../api/commons/audit/event_types_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as services_billing_entities_v1alpha1_matching_pb from "../../../../services/billing/entities/v1alpha1/matching_pb";
import * as services_billing_entities_v1alpha1_modules_pb from "../../../../services/billing/entities/v1alpha1/modules_pb";

export class RateDefinition extends jspb.Message {
  getRateDefinitionId(): string;
  setRateDefinitionId(value: string): void;

  getRateDefinitionGroupId(): string;
  setRateDefinitionGroupId(value: string): void;

  getEventType(): api_commons_audit_event_types_pb.EventTypeMap[keyof api_commons_audit_event_types_pb.EventTypeMap];
  setEventType(value: api_commons_audit_event_types_pb.EventTypeMap[keyof api_commons_audit_event_types_pb.EventTypeMap]): void;

  getConfigType(): RateDefinitionConfigTypeMap[keyof RateDefinitionConfigTypeMap];
  setConfigType(value: RateDefinitionConfigTypeMap[keyof RateDefinitionConfigTypeMap]): void;

  getMatchingRule(): services_billing_entities_v1alpha1_matching_pb.MatchingRuleMap[keyof services_billing_entities_v1alpha1_matching_pb.MatchingRuleMap];
  setMatchingRule(value: services_billing_entities_v1alpha1_matching_pb.MatchingRuleMap[keyof services_billing_entities_v1alpha1_matching_pb.MatchingRuleMap]): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): RateDefinitionConfig | undefined;
  setConfig(value?: RateDefinitionConfig): void;

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
    rateDefinitionGroupId: string,
    eventType: api_commons_audit_event_types_pb.EventTypeMap[keyof api_commons_audit_event_types_pb.EventTypeMap],
    configType: RateDefinitionConfigTypeMap[keyof RateDefinitionConfigTypeMap],
    matchingRule: services_billing_entities_v1alpha1_matching_pb.MatchingRuleMap[keyof services_billing_entities_v1alpha1_matching_pb.MatchingRuleMap],
    config?: RateDefinitionConfig.AsObject,
    matchingConfig?: services_billing_entities_v1alpha1_matching_pb.MatchingConfig.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deleteTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class RateDefinitionConfig extends jspb.Message {
  hasAgentSeatsConfig(): boolean;
  clearAgentSeatsConfig(): void;
  getAgentSeatsConfig(): services_billing_entities_v1alpha1_modules_pb.BasicConfig | undefined;
  setAgentSeatsConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicConfig): void;

  hasAgentTextMessageChatConfig(): boolean;
  clearAgentTextMessageChatConfig(): void;
  getAgentTextMessageChatConfig(): services_billing_entities_v1alpha1_modules_pb.BasicConfig | undefined;
  setAgentTextMessageChatConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicConfig): void;

  hasAgentTextMessageEmailMessageConfig(): boolean;
  clearAgentTextMessageEmailMessageConfig(): void;
  getAgentTextMessageEmailMessageConfig(): services_billing_entities_v1alpha1_modules_pb.BasicConfig | undefined;
  setAgentTextMessageEmailMessageConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicConfig): void;

  hasAgentTextMessageEmailSizeConfig(): boolean;
  clearAgentTextMessageEmailSizeConfig(): void;
  getAgentTextMessageEmailSizeConfig(): services_billing_entities_v1alpha1_modules_pb.BasicAmountConfig | undefined;
  setAgentTextMessageEmailSizeConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicAmountConfig): void;

  hasAgentTextMessageSmsConfig(): boolean;
  clearAgentTextMessageSmsConfig(): void;
  getAgentTextMessageSmsConfig(): services_billing_entities_v1alpha1_modules_pb.BasicConfig | undefined;
  setAgentTextMessageSmsConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicConfig): void;

  hasTaskMessageSentEmailMessageConfig(): boolean;
  clearTaskMessageSentEmailMessageConfig(): void;
  getTaskMessageSentEmailMessageConfig(): services_billing_entities_v1alpha1_modules_pb.BasicConfig | undefined;
  setTaskMessageSentEmailMessageConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicConfig): void;

  hasTaskMessageSentEmailSizeConfig(): boolean;
  clearTaskMessageSentEmailSizeConfig(): void;
  getTaskMessageSentEmailSizeConfig(): services_billing_entities_v1alpha1_modules_pb.BasicAmountConfig | undefined;
  setTaskMessageSentEmailSizeConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicAmountConfig): void;

  hasTaskMessageSentSmsConfig(): boolean;
  clearTaskMessageSentSmsConfig(): void;
  getTaskMessageSentSmsConfig(): services_billing_entities_v1alpha1_modules_pb.BasicConfig | undefined;
  setTaskMessageSentSmsConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicConfig): void;

  hasConnectedInboxPollConfig(): boolean;
  clearConnectedInboxPollConfig(): void;
  getConnectedInboxPollConfig(): services_billing_entities_v1alpha1_modules_pb.BasicConfig | undefined;
  setConnectedInboxPollConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicConfig): void;

  hasManagerTextMessageChatConfig(): boolean;
  clearManagerTextMessageChatConfig(): void;
  getManagerTextMessageChatConfig(): services_billing_entities_v1alpha1_modules_pb.BasicConfig | undefined;
  setManagerTextMessageChatConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicConfig): void;

  hasManagerTextMessageEmailMessageConfig(): boolean;
  clearManagerTextMessageEmailMessageConfig(): void;
  getManagerTextMessageEmailMessageConfig(): services_billing_entities_v1alpha1_modules_pb.BasicConfig | undefined;
  setManagerTextMessageEmailMessageConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicConfig): void;

  hasManagerTextMessageEmailSizeConfig(): boolean;
  clearManagerTextMessageEmailSizeConfig(): void;
  getManagerTextMessageEmailSizeConfig(): services_billing_entities_v1alpha1_modules_pb.BasicAmountConfig | undefined;
  setManagerTextMessageEmailSizeConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicAmountConfig): void;

  hasManagerTextMessageSmsConfig(): boolean;
  clearManagerTextMessageSmsConfig(): void;
  getManagerTextMessageSmsConfig(): services_billing_entities_v1alpha1_modules_pb.BasicConfig | undefined;
  setManagerTextMessageSmsConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicConfig): void;

  hasCustomerTextMessageChatConfig(): boolean;
  clearCustomerTextMessageChatConfig(): void;
  getCustomerTextMessageChatConfig(): services_billing_entities_v1alpha1_modules_pb.BasicConfig | undefined;
  setCustomerTextMessageChatConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicConfig): void;

  hasCustomerTextMessageEmailMessageConfig(): boolean;
  clearCustomerTextMessageEmailMessageConfig(): void;
  getCustomerTextMessageEmailMessageConfig(): services_billing_entities_v1alpha1_modules_pb.BasicConfig | undefined;
  setCustomerTextMessageEmailMessageConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicConfig): void;

  hasCustomerTextMessageEmailSizeConfig(): boolean;
  clearCustomerTextMessageEmailSizeConfig(): void;
  getCustomerTextMessageEmailSizeConfig(): services_billing_entities_v1alpha1_modules_pb.BasicAmountConfig | undefined;
  setCustomerTextMessageEmailSizeConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicAmountConfig): void;

  hasCustomerTextMessageSmsConfig(): boolean;
  clearCustomerTextMessageSmsConfig(): void;
  getCustomerTextMessageSmsConfig(): services_billing_entities_v1alpha1_modules_pb.BasicConfig | undefined;
  setCustomerTextMessageSmsConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicConfig): void;

  hasAgentTextMessageChatSizeConfig(): boolean;
  clearAgentTextMessageChatSizeConfig(): void;
  getAgentTextMessageChatSizeConfig(): services_billing_entities_v1alpha1_modules_pb.BasicAmountConfig | undefined;
  setAgentTextMessageChatSizeConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicAmountConfig): void;

  hasManagerTextMessageChatSizeConfig(): boolean;
  clearManagerTextMessageChatSizeConfig(): void;
  getManagerTextMessageChatSizeConfig(): services_billing_entities_v1alpha1_modules_pb.BasicAmountConfig | undefined;
  setManagerTextMessageChatSizeConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicAmountConfig): void;

  hasCustomerTextMessageChatSizeConfig(): boolean;
  clearCustomerTextMessageChatSizeConfig(): void;
  getCustomerTextMessageChatSizeConfig(): services_billing_entities_v1alpha1_modules_pb.BasicAmountConfig | undefined;
  setCustomerTextMessageChatSizeConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicAmountConfig): void;

  hasConnectedInboxCreatedConfig(): boolean;
  clearConnectedInboxCreatedConfig(): void;
  getConnectedInboxCreatedConfig(): services_billing_entities_v1alpha1_modules_pb.BasicConfig | undefined;
  setConnectedInboxCreatedConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicConfig): void;

  hasAgentTextMessageSmsSizeConfig(): boolean;
  clearAgentTextMessageSmsSizeConfig(): void;
  getAgentTextMessageSmsSizeConfig(): services_billing_entities_v1alpha1_modules_pb.BasicAmountConfig | undefined;
  setAgentTextMessageSmsSizeConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicAmountConfig): void;

  hasManagerTextMessageSmsSizeConfig(): boolean;
  clearManagerTextMessageSmsSizeConfig(): void;
  getManagerTextMessageSmsSizeConfig(): services_billing_entities_v1alpha1_modules_pb.BasicAmountConfig | undefined;
  setManagerTextMessageSmsSizeConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicAmountConfig): void;

  hasCustomerTextMessageSmsSizeConfig(): boolean;
  clearCustomerTextMessageSmsSizeConfig(): void;
  getCustomerTextMessageSmsSizeConfig(): services_billing_entities_v1alpha1_modules_pb.BasicAmountConfig | undefined;
  setCustomerTextMessageSmsSizeConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicAmountConfig): void;

  hasTaskMessageSentSmsSizeConfig(): boolean;
  clearTaskMessageSentSmsSizeConfig(): void;
  getTaskMessageSentSmsSizeConfig(): services_billing_entities_v1alpha1_modules_pb.BasicAmountConfig | undefined;
  setTaskMessageSentSmsSizeConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicAmountConfig): void;

  hasAgentChatMessageUnitsConfig(): boolean;
  clearAgentChatMessageUnitsConfig(): void;
  getAgentChatMessageUnitsConfig(): services_billing_entities_v1alpha1_modules_pb.BasicConfig | undefined;
  setAgentChatMessageUnitsConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicConfig): void;

  hasAgentEmailMessageUnitsConfig(): boolean;
  clearAgentEmailMessageUnitsConfig(): void;
  getAgentEmailMessageUnitsConfig(): services_billing_entities_v1alpha1_modules_pb.BasicConfig | undefined;
  setAgentEmailMessageUnitsConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicConfig): void;

  hasAgentSmsMessageUnitsConfig(): boolean;
  clearAgentSmsMessageUnitsConfig(): void;
  getAgentSmsMessageUnitsConfig(): services_billing_entities_v1alpha1_modules_pb.BasicConfig | undefined;
  setAgentSmsMessageUnitsConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicConfig): void;

  hasManagerChatMessageUnitsConfig(): boolean;
  clearManagerChatMessageUnitsConfig(): void;
  getManagerChatMessageUnitsConfig(): services_billing_entities_v1alpha1_modules_pb.BasicConfig | undefined;
  setManagerChatMessageUnitsConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicConfig): void;

  hasManagerEmailMessageUnitsConfig(): boolean;
  clearManagerEmailMessageUnitsConfig(): void;
  getManagerEmailMessageUnitsConfig(): services_billing_entities_v1alpha1_modules_pb.BasicConfig | undefined;
  setManagerEmailMessageUnitsConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicConfig): void;

  hasManagerSmsMessageUnitsConfig(): boolean;
  clearManagerSmsMessageUnitsConfig(): void;
  getManagerSmsMessageUnitsConfig(): services_billing_entities_v1alpha1_modules_pb.BasicConfig | undefined;
  setManagerSmsMessageUnitsConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicConfig): void;

  hasCustomerChatMessageUnitsConfig(): boolean;
  clearCustomerChatMessageUnitsConfig(): void;
  getCustomerChatMessageUnitsConfig(): services_billing_entities_v1alpha1_modules_pb.BasicConfig | undefined;
  setCustomerChatMessageUnitsConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicConfig): void;

  hasCustomerEmailMessageUnitsConfig(): boolean;
  clearCustomerEmailMessageUnitsConfig(): void;
  getCustomerEmailMessageUnitsConfig(): services_billing_entities_v1alpha1_modules_pb.BasicConfig | undefined;
  setCustomerEmailMessageUnitsConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicConfig): void;

  hasCustomerSmsMessageUnitsConfig(): boolean;
  clearCustomerSmsMessageUnitsConfig(): void;
  getCustomerSmsMessageUnitsConfig(): services_billing_entities_v1alpha1_modules_pb.BasicConfig | undefined;
  setCustomerSmsMessageUnitsConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicConfig): void;

  hasSystemChatMessageUnitsConfig(): boolean;
  clearSystemChatMessageUnitsConfig(): void;
  getSystemChatMessageUnitsConfig(): services_billing_entities_v1alpha1_modules_pb.BasicConfig | undefined;
  setSystemChatMessageUnitsConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicConfig): void;

  hasSystemEmailMessageUnitsConfig(): boolean;
  clearSystemEmailMessageUnitsConfig(): void;
  getSystemEmailMessageUnitsConfig(): services_billing_entities_v1alpha1_modules_pb.BasicConfig | undefined;
  setSystemEmailMessageUnitsConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicConfig): void;

  hasSystemSmsMessageUnitsConfig(): boolean;
  clearSystemSmsMessageUnitsConfig(): void;
  getSystemSmsMessageUnitsConfig(): services_billing_entities_v1alpha1_modules_pb.BasicConfig | undefined;
  setSystemSmsMessageUnitsConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicConfig): void;

  hasComplianceRndQueryConfig(): boolean;
  clearComplianceRndQueryConfig(): void;
  getComplianceRndQueryConfig(): services_billing_entities_v1alpha1_modules_pb.BasicConfig | undefined;
  setComplianceRndQueryConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicConfig): void;

  hasComplianceRndQueryCachedConfig(): boolean;
  clearComplianceRndQueryCachedConfig(): void;
  getComplianceRndQueryCachedConfig(): services_billing_entities_v1alpha1_modules_pb.BasicConfig | undefined;
  setComplianceRndQueryCachedConfig(value?: services_billing_entities_v1alpha1_modules_pb.BasicConfig): void;

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
    agentSeatsConfig?: services_billing_entities_v1alpha1_modules_pb.BasicConfig.AsObject,
    agentTextMessageChatConfig?: services_billing_entities_v1alpha1_modules_pb.BasicConfig.AsObject,
    agentTextMessageEmailMessageConfig?: services_billing_entities_v1alpha1_modules_pb.BasicConfig.AsObject,
    agentTextMessageEmailSizeConfig?: services_billing_entities_v1alpha1_modules_pb.BasicAmountConfig.AsObject,
    agentTextMessageSmsConfig?: services_billing_entities_v1alpha1_modules_pb.BasicConfig.AsObject,
    taskMessageSentEmailMessageConfig?: services_billing_entities_v1alpha1_modules_pb.BasicConfig.AsObject,
    taskMessageSentEmailSizeConfig?: services_billing_entities_v1alpha1_modules_pb.BasicAmountConfig.AsObject,
    taskMessageSentSmsConfig?: services_billing_entities_v1alpha1_modules_pb.BasicConfig.AsObject,
    connectedInboxPollConfig?: services_billing_entities_v1alpha1_modules_pb.BasicConfig.AsObject,
    managerTextMessageChatConfig?: services_billing_entities_v1alpha1_modules_pb.BasicConfig.AsObject,
    managerTextMessageEmailMessageConfig?: services_billing_entities_v1alpha1_modules_pb.BasicConfig.AsObject,
    managerTextMessageEmailSizeConfig?: services_billing_entities_v1alpha1_modules_pb.BasicAmountConfig.AsObject,
    managerTextMessageSmsConfig?: services_billing_entities_v1alpha1_modules_pb.BasicConfig.AsObject,
    customerTextMessageChatConfig?: services_billing_entities_v1alpha1_modules_pb.BasicConfig.AsObject,
    customerTextMessageEmailMessageConfig?: services_billing_entities_v1alpha1_modules_pb.BasicConfig.AsObject,
    customerTextMessageEmailSizeConfig?: services_billing_entities_v1alpha1_modules_pb.BasicAmountConfig.AsObject,
    customerTextMessageSmsConfig?: services_billing_entities_v1alpha1_modules_pb.BasicConfig.AsObject,
    agentTextMessageChatSizeConfig?: services_billing_entities_v1alpha1_modules_pb.BasicAmountConfig.AsObject,
    managerTextMessageChatSizeConfig?: services_billing_entities_v1alpha1_modules_pb.BasicAmountConfig.AsObject,
    customerTextMessageChatSizeConfig?: services_billing_entities_v1alpha1_modules_pb.BasicAmountConfig.AsObject,
    connectedInboxCreatedConfig?: services_billing_entities_v1alpha1_modules_pb.BasicConfig.AsObject,
    agentTextMessageSmsSizeConfig?: services_billing_entities_v1alpha1_modules_pb.BasicAmountConfig.AsObject,
    managerTextMessageSmsSizeConfig?: services_billing_entities_v1alpha1_modules_pb.BasicAmountConfig.AsObject,
    customerTextMessageSmsSizeConfig?: services_billing_entities_v1alpha1_modules_pb.BasicAmountConfig.AsObject,
    taskMessageSentSmsSizeConfig?: services_billing_entities_v1alpha1_modules_pb.BasicAmountConfig.AsObject,
    agentChatMessageUnitsConfig?: services_billing_entities_v1alpha1_modules_pb.BasicConfig.AsObject,
    agentEmailMessageUnitsConfig?: services_billing_entities_v1alpha1_modules_pb.BasicConfig.AsObject,
    agentSmsMessageUnitsConfig?: services_billing_entities_v1alpha1_modules_pb.BasicConfig.AsObject,
    managerChatMessageUnitsConfig?: services_billing_entities_v1alpha1_modules_pb.BasicConfig.AsObject,
    managerEmailMessageUnitsConfig?: services_billing_entities_v1alpha1_modules_pb.BasicConfig.AsObject,
    managerSmsMessageUnitsConfig?: services_billing_entities_v1alpha1_modules_pb.BasicConfig.AsObject,
    customerChatMessageUnitsConfig?: services_billing_entities_v1alpha1_modules_pb.BasicConfig.AsObject,
    customerEmailMessageUnitsConfig?: services_billing_entities_v1alpha1_modules_pb.BasicConfig.AsObject,
    customerSmsMessageUnitsConfig?: services_billing_entities_v1alpha1_modules_pb.BasicConfig.AsObject,
    systemChatMessageUnitsConfig?: services_billing_entities_v1alpha1_modules_pb.BasicConfig.AsObject,
    systemEmailMessageUnitsConfig?: services_billing_entities_v1alpha1_modules_pb.BasicConfig.AsObject,
    systemSmsMessageUnitsConfig?: services_billing_entities_v1alpha1_modules_pb.BasicConfig.AsObject,
    complianceRndQueryConfig?: services_billing_entities_v1alpha1_modules_pb.BasicConfig.AsObject,
    complianceRndQueryCachedConfig?: services_billing_entities_v1alpha1_modules_pb.BasicConfig.AsObject,
  }

  export enum ConfigCase {
    CONFIG_NOT_SET = 0,
    AGENT_SEATS_CONFIG = 2,
    AGENT_TEXT_MESSAGE_CHAT_CONFIG = 100,
    AGENT_TEXT_MESSAGE_EMAIL_MESSAGE_CONFIG = 101,
    AGENT_TEXT_MESSAGE_EMAIL_SIZE_CONFIG = 102,
    AGENT_TEXT_MESSAGE_SMS_CONFIG = 103,
    TASK_MESSAGE_SENT_EMAIL_MESSAGE_CONFIG = 104,
    TASK_MESSAGE_SENT_EMAIL_SIZE_CONFIG = 105,
    TASK_MESSAGE_SENT_SMS_CONFIG = 106,
    CONNECTED_INBOX_POLL_CONFIG = 107,
    MANAGER_TEXT_MESSAGE_CHAT_CONFIG = 108,
    MANAGER_TEXT_MESSAGE_EMAIL_MESSAGE_CONFIG = 109,
    MANAGER_TEXT_MESSAGE_EMAIL_SIZE_CONFIG = 110,
    MANAGER_TEXT_MESSAGE_SMS_CONFIG = 111,
    CUSTOMER_TEXT_MESSAGE_CHAT_CONFIG = 112,
    CUSTOMER_TEXT_MESSAGE_EMAIL_MESSAGE_CONFIG = 113,
    CUSTOMER_TEXT_MESSAGE_EMAIL_SIZE_CONFIG = 114,
    CUSTOMER_TEXT_MESSAGE_SMS_CONFIG = 115,
    AGENT_TEXT_MESSAGE_CHAT_SIZE_CONFIG = 116,
    MANAGER_TEXT_MESSAGE_CHAT_SIZE_CONFIG = 117,
    CUSTOMER_TEXT_MESSAGE_CHAT_SIZE_CONFIG = 118,
    CONNECTED_INBOX_CREATED_CONFIG = 119,
    AGENT_TEXT_MESSAGE_SMS_SIZE_CONFIG = 120,
    MANAGER_TEXT_MESSAGE_SMS_SIZE_CONFIG = 121,
    CUSTOMER_TEXT_MESSAGE_SMS_SIZE_CONFIG = 122,
    TASK_MESSAGE_SENT_SMS_SIZE_CONFIG = 123,
    AGENT_CHAT_MESSAGE_UNITS_CONFIG = 124,
    AGENT_EMAIL_MESSAGE_UNITS_CONFIG = 125,
    AGENT_SMS_MESSAGE_UNITS_CONFIG = 126,
    MANAGER_CHAT_MESSAGE_UNITS_CONFIG = 127,
    MANAGER_EMAIL_MESSAGE_UNITS_CONFIG = 128,
    MANAGER_SMS_MESSAGE_UNITS_CONFIG = 129,
    CUSTOMER_CHAT_MESSAGE_UNITS_CONFIG = 130,
    CUSTOMER_EMAIL_MESSAGE_UNITS_CONFIG = 131,
    CUSTOMER_SMS_MESSAGE_UNITS_CONFIG = 132,
    SYSTEM_CHAT_MESSAGE_UNITS_CONFIG = 133,
    SYSTEM_EMAIL_MESSAGE_UNITS_CONFIG = 134,
    SYSTEM_SMS_MESSAGE_UNITS_CONFIG = 135,
    COMPLIANCE_RND_QUERY_CONFIG = 200,
    COMPLIANCE_RND_QUERY_CACHED_CONFIG = 201,
  }
}

export interface RateDefinitionConfigTypeMap {
  RATE_DEFINITION_CONFIG_TYPE_UNSPECIFIED: 0;
  RATE_DEFINITION_CONFIG_TYPE_NOOP: 1;
  RATE_DEFINITION_CONFIG_TYPE_AGENT_SEATS: 2;
  RATE_DEFINITION_CONFIG_TYPE_AGENT_TEXT_MESSAGE_CHAT: 100;
  RATE_DEFINITION_CONFIG_TYPE_AGENT_TEXT_MESSAGE_EMAIL_MESSAGE: 101;
  RATE_DEFINITION_CONFIG_TYPE_AGENT_TEXT_MESSAGE_EMAIL_SIZE: 102;
  RATE_DEFINITION_CONFIG_TYPE_AGENT_TEXT_MESSAGE_SMS: 103;
  RATE_DEFINITION_CONFIG_TYPE_TASK_MESSAGE_SENT_EMAIL_MESSAGE: 104;
  RATE_DEFINITION_CONFIG_TYPE_TASK_MESSAGE_SENT_EMAIL_SIZE: 105;
  RATE_DEFINITION_CONFIG_TYPE_TASK_MESSAGE_SENT_SMS: 106;
  RATE_DEFINITION_CONFIG_TYPE_CONNECTED_INBOX_POLL: 107;
  RATE_DEFINITION_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_CHAT: 108;
  RATE_DEFINITION_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_EMAIL_MESSAGE: 109;
  RATE_DEFINITION_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_EMAIL_SIZE: 110;
  RATE_DEFINITION_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_SMS: 111;
  RATE_DEFINITION_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_CHAT: 112;
  RATE_DEFINITION_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_EMAIL_MESSAGE: 113;
  RATE_DEFINITION_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_EMAIL_SIZE: 114;
  RATE_DEFINITION_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_SMS: 115;
  RATE_DEFINITION_CONFIG_TYPE_AGENT_TEXT_MESSAGE_CHAT_SIZE: 116;
  RATE_DEFINITION_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_CHAT_SIZE: 117;
  RATE_DEFINITION_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_CHAT_SIZE: 118;
  RATE_DEFINITION_CONFIG_TYPE_CONNECTED_INBOX_CREATED: 119;
  RATE_DEFINITION_CONFIG_TYPE_AGENT_TEXT_MESSAGE_SMS_SIZE: 120;
  RATE_DEFINITION_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_SMS_SIZE: 121;
  RATE_DEFINITION_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_SMS_SIZE: 122;
  RATE_DEFINITION_CONFIG_TYPE_TASK_MESSAGE_SENT_SMS_SIZE: 123;
  RATE_DEFINITION_CONFIG_TYPE_AGENT_CHAT_MESSAGE_UNITS: 124;
  RATE_DEFINITION_CONFIG_TYPE_AGENT_EMAIL_MESSAGE_UNITS: 125;
  RATE_DEFINITION_CONFIG_TYPE_AGENT_SMS_MESSAGE_UNITS: 126;
  RATE_DEFINITION_CONFIG_TYPE_MANAGER_CHAT_MESSAGE_UNITS: 127;
  RATE_DEFINITION_CONFIG_TYPE_MANAGER_EMAIL_MESSAGE_UNITS: 128;
  RATE_DEFINITION_CONFIG_TYPE_MANAGER_SMS_MESSAGE_UNITS: 129;
  RATE_DEFINITION_CONFIG_TYPE_CUSTOMER_CHAT_MESSAGE_UNITS: 130;
  RATE_DEFINITION_CONFIG_TYPE_CUSTOMER_EMAIL_MESSAGE_UNITS: 131;
  RATE_DEFINITION_CONFIG_TYPE_CUSTOMER_SMS_MESSAGE_UNITS: 132;
  RATE_DEFINITION_CONFIG_TYPE_SYSTEM_CHAT_MESSAGE_UNITS: 133;
  RATE_DEFINITION_CONFIG_TYPE_SYSTEM_EMAIL_MESSAGE_UNITS: 134;
  RATE_DEFINITION_CONFIG_TYPE_SYSTEM_SMS_MESSAGE_UNITS: 135;
  RATE_DEFINITION_CONFIG_TYPE_COMPLIANCE_RND_QUERY: 200;
  RATE_DEFINITION_CONFIG_TYPE_COMPLIANCE_RND_QUERY_CACHED: 201;
}

export const RateDefinitionConfigType: RateDefinitionConfigTypeMap;

