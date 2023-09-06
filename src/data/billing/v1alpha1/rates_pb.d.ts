// package: data.billing.v1alpha1
// file: data/billing/v1alpha1/rates.proto

import * as jspb from "google-protobuf";
import * as api_commons_audit_event_types_pb from "../../../api/commons/audit/event_types_pb";
import * as data_billing_v1alpha1_matching_pb from "../../../data/billing/v1alpha1/matching_pb";
import * as data_billing_v1alpha1_modules_pb from "../../../data/billing/v1alpha1/modules_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class RateDefinition extends jspb.Message {
  getRateDefinitionId(): string;
  setRateDefinitionId(value: string): void;

  getBillingPlanId(): string;
  setBillingPlanId(value: string): void;

  getEventType(): api_commons_audit_event_types_pb.EventTypeMap[keyof api_commons_audit_event_types_pb.EventTypeMap];
  setEventType(value: api_commons_audit_event_types_pb.EventTypeMap[keyof api_commons_audit_event_types_pb.EventTypeMap]): void;

  getConfigType(): RateDefinitionConfigTypeMap[keyof RateDefinitionConfigTypeMap];
  setConfigType(value: RateDefinitionConfigTypeMap[keyof RateDefinitionConfigTypeMap]): void;

  getMatchingRule(): data_billing_v1alpha1_matching_pb.MatchingRuleMap[keyof data_billing_v1alpha1_matching_pb.MatchingRuleMap];
  setMatchingRule(value: data_billing_v1alpha1_matching_pb.MatchingRuleMap[keyof data_billing_v1alpha1_matching_pb.MatchingRuleMap]): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): RateDefinitionConfig | undefined;
  setConfig(value?: RateDefinitionConfig): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

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
    billingPlanId: string,
    eventType: api_commons_audit_event_types_pb.EventTypeMap[keyof api_commons_audit_event_types_pb.EventTypeMap],
    configType: RateDefinitionConfigTypeMap[keyof RateDefinitionConfigTypeMap],
    matchingRule: data_billing_v1alpha1_matching_pb.MatchingRuleMap[keyof data_billing_v1alpha1_matching_pb.MatchingRuleMap],
    config?: RateDefinitionConfig.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class RateDefinitionConfig extends jspb.Message {
  hasAgentSeatsConfig(): boolean;
  clearAgentSeatsConfig(): void;
  getAgentSeatsConfig(): data_billing_v1alpha1_modules_pb.BasicConfig | undefined;
  setAgentSeatsConfig(value?: data_billing_v1alpha1_modules_pb.BasicConfig): void;

  hasAgentTextMessageChatConfig(): boolean;
  clearAgentTextMessageChatConfig(): void;
  getAgentTextMessageChatConfig(): data_billing_v1alpha1_modules_pb.BasicConfig | undefined;
  setAgentTextMessageChatConfig(value?: data_billing_v1alpha1_modules_pb.BasicConfig): void;

  hasAgentTextMessageEmailMessageConfig(): boolean;
  clearAgentTextMessageEmailMessageConfig(): void;
  getAgentTextMessageEmailMessageConfig(): data_billing_v1alpha1_modules_pb.BasicConfig | undefined;
  setAgentTextMessageEmailMessageConfig(value?: data_billing_v1alpha1_modules_pb.BasicConfig): void;

  hasAgentTextMessageEmailSizeConfig(): boolean;
  clearAgentTextMessageEmailSizeConfig(): void;
  getAgentTextMessageEmailSizeConfig(): data_billing_v1alpha1_modules_pb.BasicAmountConfig | undefined;
  setAgentTextMessageEmailSizeConfig(value?: data_billing_v1alpha1_modules_pb.BasicAmountConfig): void;

  hasAgentTextMessageSmsConfig(): boolean;
  clearAgentTextMessageSmsConfig(): void;
  getAgentTextMessageSmsConfig(): data_billing_v1alpha1_modules_pb.BasicConfig | undefined;
  setAgentTextMessageSmsConfig(value?: data_billing_v1alpha1_modules_pb.BasicConfig): void;

  hasTaskMessageSentEmailMessageConfig(): boolean;
  clearTaskMessageSentEmailMessageConfig(): void;
  getTaskMessageSentEmailMessageConfig(): data_billing_v1alpha1_modules_pb.BasicConfig | undefined;
  setTaskMessageSentEmailMessageConfig(value?: data_billing_v1alpha1_modules_pb.BasicConfig): void;

  hasTaskMessageSentEmailSizeConfig(): boolean;
  clearTaskMessageSentEmailSizeConfig(): void;
  getTaskMessageSentEmailSizeConfig(): data_billing_v1alpha1_modules_pb.BasicAmountConfig | undefined;
  setTaskMessageSentEmailSizeConfig(value?: data_billing_v1alpha1_modules_pb.BasicAmountConfig): void;

  hasTaskMessageSentSmsConfig(): boolean;
  clearTaskMessageSentSmsConfig(): void;
  getTaskMessageSentSmsConfig(): data_billing_v1alpha1_modules_pb.BasicConfig | undefined;
  setTaskMessageSentSmsConfig(value?: data_billing_v1alpha1_modules_pb.BasicConfig): void;

  hasConnectedInboxPollConfig(): boolean;
  clearConnectedInboxPollConfig(): void;
  getConnectedInboxPollConfig(): data_billing_v1alpha1_modules_pb.BasicConfig | undefined;
  setConnectedInboxPollConfig(value?: data_billing_v1alpha1_modules_pb.BasicConfig): void;

  hasManagerTextMessageChatConfig(): boolean;
  clearManagerTextMessageChatConfig(): void;
  getManagerTextMessageChatConfig(): data_billing_v1alpha1_modules_pb.BasicConfig | undefined;
  setManagerTextMessageChatConfig(value?: data_billing_v1alpha1_modules_pb.BasicConfig): void;

  hasManagerTextMessageEmailMessageConfig(): boolean;
  clearManagerTextMessageEmailMessageConfig(): void;
  getManagerTextMessageEmailMessageConfig(): data_billing_v1alpha1_modules_pb.BasicConfig | undefined;
  setManagerTextMessageEmailMessageConfig(value?: data_billing_v1alpha1_modules_pb.BasicConfig): void;

  hasManagerTextMessageEmailSizeConfig(): boolean;
  clearManagerTextMessageEmailSizeConfig(): void;
  getManagerTextMessageEmailSizeConfig(): data_billing_v1alpha1_modules_pb.BasicAmountConfig | undefined;
  setManagerTextMessageEmailSizeConfig(value?: data_billing_v1alpha1_modules_pb.BasicAmountConfig): void;

  hasManagerTextMessageSmsConfig(): boolean;
  clearManagerTextMessageSmsConfig(): void;
  getManagerTextMessageSmsConfig(): data_billing_v1alpha1_modules_pb.BasicConfig | undefined;
  setManagerTextMessageSmsConfig(value?: data_billing_v1alpha1_modules_pb.BasicConfig): void;

  hasCustomerTextMessageChatConfig(): boolean;
  clearCustomerTextMessageChatConfig(): void;
  getCustomerTextMessageChatConfig(): data_billing_v1alpha1_modules_pb.BasicConfig | undefined;
  setCustomerTextMessageChatConfig(value?: data_billing_v1alpha1_modules_pb.BasicConfig): void;

  hasCustomerTextMessageEmailMessageConfig(): boolean;
  clearCustomerTextMessageEmailMessageConfig(): void;
  getCustomerTextMessageEmailMessageConfig(): data_billing_v1alpha1_modules_pb.BasicConfig | undefined;
  setCustomerTextMessageEmailMessageConfig(value?: data_billing_v1alpha1_modules_pb.BasicConfig): void;

  hasCustomerTextMessageEmailSizeConfig(): boolean;
  clearCustomerTextMessageEmailSizeConfig(): void;
  getCustomerTextMessageEmailSizeConfig(): data_billing_v1alpha1_modules_pb.BasicAmountConfig | undefined;
  setCustomerTextMessageEmailSizeConfig(value?: data_billing_v1alpha1_modules_pb.BasicAmountConfig): void;

  hasCustomerTextMessageSmsConfig(): boolean;
  clearCustomerTextMessageSmsConfig(): void;
  getCustomerTextMessageSmsConfig(): data_billing_v1alpha1_modules_pb.BasicConfig | undefined;
  setCustomerTextMessageSmsConfig(value?: data_billing_v1alpha1_modules_pb.BasicConfig): void;

  hasAgentTextMessageChatSizeConfig(): boolean;
  clearAgentTextMessageChatSizeConfig(): void;
  getAgentTextMessageChatSizeConfig(): data_billing_v1alpha1_modules_pb.BasicAmountConfig | undefined;
  setAgentTextMessageChatSizeConfig(value?: data_billing_v1alpha1_modules_pb.BasicAmountConfig): void;

  hasManagerTextMessageChatSizeConfig(): boolean;
  clearManagerTextMessageChatSizeConfig(): void;
  getManagerTextMessageChatSizeConfig(): data_billing_v1alpha1_modules_pb.BasicAmountConfig | undefined;
  setManagerTextMessageChatSizeConfig(value?: data_billing_v1alpha1_modules_pb.BasicAmountConfig): void;

  hasCustomerTextMessageChatSizeConfig(): boolean;
  clearCustomerTextMessageChatSizeConfig(): void;
  getCustomerTextMessageChatSizeConfig(): data_billing_v1alpha1_modules_pb.BasicAmountConfig | undefined;
  setCustomerTextMessageChatSizeConfig(value?: data_billing_v1alpha1_modules_pb.BasicAmountConfig): void;

  hasConnectedInboxCreatedConfig(): boolean;
  clearConnectedInboxCreatedConfig(): void;
  getConnectedInboxCreatedConfig(): data_billing_v1alpha1_modules_pb.BasicConfig | undefined;
  setConnectedInboxCreatedConfig(value?: data_billing_v1alpha1_modules_pb.BasicConfig): void;

  hasAgentTextMessageSmsSizeConfig(): boolean;
  clearAgentTextMessageSmsSizeConfig(): void;
  getAgentTextMessageSmsSizeConfig(): data_billing_v1alpha1_modules_pb.BasicAmountConfig | undefined;
  setAgentTextMessageSmsSizeConfig(value?: data_billing_v1alpha1_modules_pb.BasicAmountConfig): void;

  hasManagerTextMessageSmsSizeConfig(): boolean;
  clearManagerTextMessageSmsSizeConfig(): void;
  getManagerTextMessageSmsSizeConfig(): data_billing_v1alpha1_modules_pb.BasicAmountConfig | undefined;
  setManagerTextMessageSmsSizeConfig(value?: data_billing_v1alpha1_modules_pb.BasicAmountConfig): void;

  hasCustomerTextMessageSmsSizeConfig(): boolean;
  clearCustomerTextMessageSmsSizeConfig(): void;
  getCustomerTextMessageSmsSizeConfig(): data_billing_v1alpha1_modules_pb.BasicAmountConfig | undefined;
  setCustomerTextMessageSmsSizeConfig(value?: data_billing_v1alpha1_modules_pb.BasicAmountConfig): void;

  hasTaskMessageSentSmsSizeConfig(): boolean;
  clearTaskMessageSentSmsSizeConfig(): void;
  getTaskMessageSentSmsSizeConfig(): data_billing_v1alpha1_modules_pb.BasicAmountConfig | undefined;
  setTaskMessageSentSmsSizeConfig(value?: data_billing_v1alpha1_modules_pb.BasicAmountConfig): void;

  hasAgentChatMessageUnitsConfig(): boolean;
  clearAgentChatMessageUnitsConfig(): void;
  getAgentChatMessageUnitsConfig(): data_billing_v1alpha1_modules_pb.BasicConfig | undefined;
  setAgentChatMessageUnitsConfig(value?: data_billing_v1alpha1_modules_pb.BasicConfig): void;

  hasAgentEmailMessageUnitsConfig(): boolean;
  clearAgentEmailMessageUnitsConfig(): void;
  getAgentEmailMessageUnitsConfig(): data_billing_v1alpha1_modules_pb.BasicConfig | undefined;
  setAgentEmailMessageUnitsConfig(value?: data_billing_v1alpha1_modules_pb.BasicConfig): void;

  hasAgentSmsMessageUnitsConfig(): boolean;
  clearAgentSmsMessageUnitsConfig(): void;
  getAgentSmsMessageUnitsConfig(): data_billing_v1alpha1_modules_pb.BasicConfig | undefined;
  setAgentSmsMessageUnitsConfig(value?: data_billing_v1alpha1_modules_pb.BasicConfig): void;

  hasManagerChatMessageUnitsConfig(): boolean;
  clearManagerChatMessageUnitsConfig(): void;
  getManagerChatMessageUnitsConfig(): data_billing_v1alpha1_modules_pb.BasicConfig | undefined;
  setManagerChatMessageUnitsConfig(value?: data_billing_v1alpha1_modules_pb.BasicConfig): void;

  hasManagerEmailMessageUnitsConfig(): boolean;
  clearManagerEmailMessageUnitsConfig(): void;
  getManagerEmailMessageUnitsConfig(): data_billing_v1alpha1_modules_pb.BasicConfig | undefined;
  setManagerEmailMessageUnitsConfig(value?: data_billing_v1alpha1_modules_pb.BasicConfig): void;

  hasManagerSmsMessageUnitsConfig(): boolean;
  clearManagerSmsMessageUnitsConfig(): void;
  getManagerSmsMessageUnitsConfig(): data_billing_v1alpha1_modules_pb.BasicConfig | undefined;
  setManagerSmsMessageUnitsConfig(value?: data_billing_v1alpha1_modules_pb.BasicConfig): void;

  hasCustomerChatMessageUnitsConfig(): boolean;
  clearCustomerChatMessageUnitsConfig(): void;
  getCustomerChatMessageUnitsConfig(): data_billing_v1alpha1_modules_pb.BasicConfig | undefined;
  setCustomerChatMessageUnitsConfig(value?: data_billing_v1alpha1_modules_pb.BasicConfig): void;

  hasCustomerEmailMessageUnitsConfig(): boolean;
  clearCustomerEmailMessageUnitsConfig(): void;
  getCustomerEmailMessageUnitsConfig(): data_billing_v1alpha1_modules_pb.BasicConfig | undefined;
  setCustomerEmailMessageUnitsConfig(value?: data_billing_v1alpha1_modules_pb.BasicConfig): void;

  hasCustomerSmsMessageUnitsConfig(): boolean;
  clearCustomerSmsMessageUnitsConfig(): void;
  getCustomerSmsMessageUnitsConfig(): data_billing_v1alpha1_modules_pb.BasicConfig | undefined;
  setCustomerSmsMessageUnitsConfig(value?: data_billing_v1alpha1_modules_pb.BasicConfig): void;

  hasSystemChatMessageUnitsConfig(): boolean;
  clearSystemChatMessageUnitsConfig(): void;
  getSystemChatMessageUnitsConfig(): data_billing_v1alpha1_modules_pb.BasicConfig | undefined;
  setSystemChatMessageUnitsConfig(value?: data_billing_v1alpha1_modules_pb.BasicConfig): void;

  hasSystemEmailMessageUnitsConfig(): boolean;
  clearSystemEmailMessageUnitsConfig(): void;
  getSystemEmailMessageUnitsConfig(): data_billing_v1alpha1_modules_pb.BasicConfig | undefined;
  setSystemEmailMessageUnitsConfig(value?: data_billing_v1alpha1_modules_pb.BasicConfig): void;

  hasSystemSmsMessageUnitsConfig(): boolean;
  clearSystemSmsMessageUnitsConfig(): void;
  getSystemSmsMessageUnitsConfig(): data_billing_v1alpha1_modules_pb.BasicConfig | undefined;
  setSystemSmsMessageUnitsConfig(value?: data_billing_v1alpha1_modules_pb.BasicConfig): void;

  hasComplianceRndQueryConfig(): boolean;
  clearComplianceRndQueryConfig(): void;
  getComplianceRndQueryConfig(): data_billing_v1alpha1_modules_pb.BasicConfig | undefined;
  setComplianceRndQueryConfig(value?: data_billing_v1alpha1_modules_pb.BasicConfig): void;

  hasComplianceRndQueryCachedConfig(): boolean;
  clearComplianceRndQueryCachedConfig(): void;
  getComplianceRndQueryCachedConfig(): data_billing_v1alpha1_modules_pb.BasicConfig | undefined;
  setComplianceRndQueryCachedConfig(value?: data_billing_v1alpha1_modules_pb.BasicConfig): void;

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
    agentSeatsConfig?: data_billing_v1alpha1_modules_pb.BasicConfig.AsObject,
    agentTextMessageChatConfig?: data_billing_v1alpha1_modules_pb.BasicConfig.AsObject,
    agentTextMessageEmailMessageConfig?: data_billing_v1alpha1_modules_pb.BasicConfig.AsObject,
    agentTextMessageEmailSizeConfig?: data_billing_v1alpha1_modules_pb.BasicAmountConfig.AsObject,
    agentTextMessageSmsConfig?: data_billing_v1alpha1_modules_pb.BasicConfig.AsObject,
    taskMessageSentEmailMessageConfig?: data_billing_v1alpha1_modules_pb.BasicConfig.AsObject,
    taskMessageSentEmailSizeConfig?: data_billing_v1alpha1_modules_pb.BasicAmountConfig.AsObject,
    taskMessageSentSmsConfig?: data_billing_v1alpha1_modules_pb.BasicConfig.AsObject,
    connectedInboxPollConfig?: data_billing_v1alpha1_modules_pb.BasicConfig.AsObject,
    managerTextMessageChatConfig?: data_billing_v1alpha1_modules_pb.BasicConfig.AsObject,
    managerTextMessageEmailMessageConfig?: data_billing_v1alpha1_modules_pb.BasicConfig.AsObject,
    managerTextMessageEmailSizeConfig?: data_billing_v1alpha1_modules_pb.BasicAmountConfig.AsObject,
    managerTextMessageSmsConfig?: data_billing_v1alpha1_modules_pb.BasicConfig.AsObject,
    customerTextMessageChatConfig?: data_billing_v1alpha1_modules_pb.BasicConfig.AsObject,
    customerTextMessageEmailMessageConfig?: data_billing_v1alpha1_modules_pb.BasicConfig.AsObject,
    customerTextMessageEmailSizeConfig?: data_billing_v1alpha1_modules_pb.BasicAmountConfig.AsObject,
    customerTextMessageSmsConfig?: data_billing_v1alpha1_modules_pb.BasicConfig.AsObject,
    agentTextMessageChatSizeConfig?: data_billing_v1alpha1_modules_pb.BasicAmountConfig.AsObject,
    managerTextMessageChatSizeConfig?: data_billing_v1alpha1_modules_pb.BasicAmountConfig.AsObject,
    customerTextMessageChatSizeConfig?: data_billing_v1alpha1_modules_pb.BasicAmountConfig.AsObject,
    connectedInboxCreatedConfig?: data_billing_v1alpha1_modules_pb.BasicConfig.AsObject,
    agentTextMessageSmsSizeConfig?: data_billing_v1alpha1_modules_pb.BasicAmountConfig.AsObject,
    managerTextMessageSmsSizeConfig?: data_billing_v1alpha1_modules_pb.BasicAmountConfig.AsObject,
    customerTextMessageSmsSizeConfig?: data_billing_v1alpha1_modules_pb.BasicAmountConfig.AsObject,
    taskMessageSentSmsSizeConfig?: data_billing_v1alpha1_modules_pb.BasicAmountConfig.AsObject,
    agentChatMessageUnitsConfig?: data_billing_v1alpha1_modules_pb.BasicConfig.AsObject,
    agentEmailMessageUnitsConfig?: data_billing_v1alpha1_modules_pb.BasicConfig.AsObject,
    agentSmsMessageUnitsConfig?: data_billing_v1alpha1_modules_pb.BasicConfig.AsObject,
    managerChatMessageUnitsConfig?: data_billing_v1alpha1_modules_pb.BasicConfig.AsObject,
    managerEmailMessageUnitsConfig?: data_billing_v1alpha1_modules_pb.BasicConfig.AsObject,
    managerSmsMessageUnitsConfig?: data_billing_v1alpha1_modules_pb.BasicConfig.AsObject,
    customerChatMessageUnitsConfig?: data_billing_v1alpha1_modules_pb.BasicConfig.AsObject,
    customerEmailMessageUnitsConfig?: data_billing_v1alpha1_modules_pb.BasicConfig.AsObject,
    customerSmsMessageUnitsConfig?: data_billing_v1alpha1_modules_pb.BasicConfig.AsObject,
    systemChatMessageUnitsConfig?: data_billing_v1alpha1_modules_pb.BasicConfig.AsObject,
    systemEmailMessageUnitsConfig?: data_billing_v1alpha1_modules_pb.BasicConfig.AsObject,
    systemSmsMessageUnitsConfig?: data_billing_v1alpha1_modules_pb.BasicConfig.AsObject,
    complianceRndQueryConfig?: data_billing_v1alpha1_modules_pb.BasicConfig.AsObject,
    complianceRndQueryCachedConfig?: data_billing_v1alpha1_modules_pb.BasicConfig.AsObject,
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

