// package: api.commons.billing
// file: api/commons/billing/detail.proto

import * as jspb from "google-protobuf";
import * as api_commons_audit_event_types_pb from "../../../api/commons/audit/event_types_pb";
import * as api_commons_billing_modules_modules_pb from "../../../api/commons/billing/modules/modules_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class BillingPlan extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  clearPlansList(): void;
  getPlansList(): Array<Plan>;
  setPlansList(value: Array<Plan>): void;
  addPlans(value?: Plan, index?: number): Plan;

  getBillingPlanId(): string;
  setBillingPlanId(value: string): void;

  hasDateCreated(): boolean;
  clearDateCreated(): void;
  getDateCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDateModified(): boolean;
  clearDateModified(): void;
  getDateModified(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateModified(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingPlan.AsObject;
  static toObject(includeInstance: boolean, msg: BillingPlan): BillingPlan.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillingPlan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingPlan;
  static deserializeBinaryFromReader(message: BillingPlan, reader: jspb.BinaryReader): BillingPlan;
}

export namespace BillingPlan {
  export type AsObject = {
    orgId: string,
    plansList: Array<Plan.AsObject>,
    billingPlanId: string,
    dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dateModified?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Plan extends jspb.Message {
  clearDetailsList(): void;
  getDetailsList(): Array<Detail>;
  setDetailsList(value: Array<Detail>): void;
  addDetails(value?: Detail, index?: number): Detail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Plan.AsObject;
  static toObject(includeInstance: boolean, msg: Plan): Plan.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Plan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Plan;
  static deserializeBinaryFromReader(message: Plan, reader: jspb.BinaryReader): Plan;
}

export namespace Plan {
  export type AsObject = {
    detailsList: Array<Detail.AsObject>,
  }
}

export class Detail extends jspb.Message {
  getBillingDetailSid(): number;
  setBillingDetailSid(value: number): void;

  getEventType(): api_commons_audit_event_types_pb.EventTypeMap[keyof api_commons_audit_event_types_pb.EventTypeMap];
  setEventType(value: api_commons_audit_event_types_pb.EventTypeMap[keyof api_commons_audit_event_types_pb.EventTypeMap]): void;

  getConfigType(): DetailConfigTypeMap[keyof DetailConfigTypeMap];
  setConfigType(value: DetailConfigTypeMap[keyof DetailConfigTypeMap]): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): DetailConfig | undefined;
  setConfig(value?: DetailConfig): void;

  hasDateCreated(): boolean;
  clearDateCreated(): void;
  getDateCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDateModified(): boolean;
  clearDateModified(): void;
  getDateModified(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateModified(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDeletedOn(): boolean;
  clearDeletedOn(): void;
  getDeletedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletedOn(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getBillingPlanId(): string;
  setBillingPlanId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Detail.AsObject;
  static toObject(includeInstance: boolean, msg: Detail): Detail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Detail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Detail;
  static deserializeBinaryFromReader(message: Detail, reader: jspb.BinaryReader): Detail;
}

export namespace Detail {
  export type AsObject = {
    billingDetailSid: number,
    eventType: api_commons_audit_event_types_pb.EventTypeMap[keyof api_commons_audit_event_types_pb.EventTypeMap],
    configType: DetailConfigTypeMap[keyof DetailConfigTypeMap],
    config?: DetailConfig.AsObject,
    dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dateModified?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    billingPlanId: string,
  }
}

export class DetailConfig extends jspb.Message {
  hasAgentSeatsConfig(): boolean;
  clearAgentSeatsConfig(): void;
  getAgentSeatsConfig(): api_commons_billing_modules_modules_pb.BasicConfig | undefined;
  setAgentSeatsConfig(value?: api_commons_billing_modules_modules_pb.BasicConfig): void;

  hasAgentTextMessageChatConfig(): boolean;
  clearAgentTextMessageChatConfig(): void;
  getAgentTextMessageChatConfig(): api_commons_billing_modules_modules_pb.BasicConfig | undefined;
  setAgentTextMessageChatConfig(value?: api_commons_billing_modules_modules_pb.BasicConfig): void;

  hasAgentTextMessageEmailMessageConfig(): boolean;
  clearAgentTextMessageEmailMessageConfig(): void;
  getAgentTextMessageEmailMessageConfig(): api_commons_billing_modules_modules_pb.BasicConfig | undefined;
  setAgentTextMessageEmailMessageConfig(value?: api_commons_billing_modules_modules_pb.BasicConfig): void;

  hasAgentTextMessageEmailSizeConfig(): boolean;
  clearAgentTextMessageEmailSizeConfig(): void;
  getAgentTextMessageEmailSizeConfig(): api_commons_billing_modules_modules_pb.BasicAmountConfig | undefined;
  setAgentTextMessageEmailSizeConfig(value?: api_commons_billing_modules_modules_pb.BasicAmountConfig): void;

  hasAgentTextMessageSmsConfig(): boolean;
  clearAgentTextMessageSmsConfig(): void;
  getAgentTextMessageSmsConfig(): api_commons_billing_modules_modules_pb.BasicConfig | undefined;
  setAgentTextMessageSmsConfig(value?: api_commons_billing_modules_modules_pb.BasicConfig): void;

  hasTaskMessageSentEmailMessageConfig(): boolean;
  clearTaskMessageSentEmailMessageConfig(): void;
  getTaskMessageSentEmailMessageConfig(): api_commons_billing_modules_modules_pb.BasicConfig | undefined;
  setTaskMessageSentEmailMessageConfig(value?: api_commons_billing_modules_modules_pb.BasicConfig): void;

  hasTaskMessageSentEmailSizeConfig(): boolean;
  clearTaskMessageSentEmailSizeConfig(): void;
  getTaskMessageSentEmailSizeConfig(): api_commons_billing_modules_modules_pb.BasicAmountConfig | undefined;
  setTaskMessageSentEmailSizeConfig(value?: api_commons_billing_modules_modules_pb.BasicAmountConfig): void;

  hasTaskMessageSentSmsConfig(): boolean;
  clearTaskMessageSentSmsConfig(): void;
  getTaskMessageSentSmsConfig(): api_commons_billing_modules_modules_pb.BasicConfig | undefined;
  setTaskMessageSentSmsConfig(value?: api_commons_billing_modules_modules_pb.BasicConfig): void;

  hasConnectedInboxPollConfig(): boolean;
  clearConnectedInboxPollConfig(): void;
  getConnectedInboxPollConfig(): api_commons_billing_modules_modules_pb.BasicConfig | undefined;
  setConnectedInboxPollConfig(value?: api_commons_billing_modules_modules_pb.BasicConfig): void;

  hasManagerTextMessageChatConfig(): boolean;
  clearManagerTextMessageChatConfig(): void;
  getManagerTextMessageChatConfig(): api_commons_billing_modules_modules_pb.BasicConfig | undefined;
  setManagerTextMessageChatConfig(value?: api_commons_billing_modules_modules_pb.BasicConfig): void;

  hasManagerTextMessageEmailMessageConfig(): boolean;
  clearManagerTextMessageEmailMessageConfig(): void;
  getManagerTextMessageEmailMessageConfig(): api_commons_billing_modules_modules_pb.BasicConfig | undefined;
  setManagerTextMessageEmailMessageConfig(value?: api_commons_billing_modules_modules_pb.BasicConfig): void;

  hasManagerTextMessageEmailSizeConfig(): boolean;
  clearManagerTextMessageEmailSizeConfig(): void;
  getManagerTextMessageEmailSizeConfig(): api_commons_billing_modules_modules_pb.BasicAmountConfig | undefined;
  setManagerTextMessageEmailSizeConfig(value?: api_commons_billing_modules_modules_pb.BasicAmountConfig): void;

  hasManagerTextMessageSmsConfig(): boolean;
  clearManagerTextMessageSmsConfig(): void;
  getManagerTextMessageSmsConfig(): api_commons_billing_modules_modules_pb.BasicConfig | undefined;
  setManagerTextMessageSmsConfig(value?: api_commons_billing_modules_modules_pb.BasicConfig): void;

  hasCustomerTextMessageChatConfig(): boolean;
  clearCustomerTextMessageChatConfig(): void;
  getCustomerTextMessageChatConfig(): api_commons_billing_modules_modules_pb.BasicConfig | undefined;
  setCustomerTextMessageChatConfig(value?: api_commons_billing_modules_modules_pb.BasicConfig): void;

  hasCustomerTextMessageEmailMessageConfig(): boolean;
  clearCustomerTextMessageEmailMessageConfig(): void;
  getCustomerTextMessageEmailMessageConfig(): api_commons_billing_modules_modules_pb.BasicConfig | undefined;
  setCustomerTextMessageEmailMessageConfig(value?: api_commons_billing_modules_modules_pb.BasicConfig): void;

  hasCustomerTextMessageEmailSizeConfig(): boolean;
  clearCustomerTextMessageEmailSizeConfig(): void;
  getCustomerTextMessageEmailSizeConfig(): api_commons_billing_modules_modules_pb.BasicAmountConfig | undefined;
  setCustomerTextMessageEmailSizeConfig(value?: api_commons_billing_modules_modules_pb.BasicAmountConfig): void;

  hasCustomerTextMessageSmsConfig(): boolean;
  clearCustomerTextMessageSmsConfig(): void;
  getCustomerTextMessageSmsConfig(): api_commons_billing_modules_modules_pb.BasicConfig | undefined;
  setCustomerTextMessageSmsConfig(value?: api_commons_billing_modules_modules_pb.BasicConfig): void;

  hasAgentTextMessageChatSizeConfig(): boolean;
  clearAgentTextMessageChatSizeConfig(): void;
  getAgentTextMessageChatSizeConfig(): api_commons_billing_modules_modules_pb.BasicAmountConfig | undefined;
  setAgentTextMessageChatSizeConfig(value?: api_commons_billing_modules_modules_pb.BasicAmountConfig): void;

  hasManagerTextMessageChatSizeConfig(): boolean;
  clearManagerTextMessageChatSizeConfig(): void;
  getManagerTextMessageChatSizeConfig(): api_commons_billing_modules_modules_pb.BasicAmountConfig | undefined;
  setManagerTextMessageChatSizeConfig(value?: api_commons_billing_modules_modules_pb.BasicAmountConfig): void;

  hasCustomerTextMessageChatSizeConfig(): boolean;
  clearCustomerTextMessageChatSizeConfig(): void;
  getCustomerTextMessageChatSizeConfig(): api_commons_billing_modules_modules_pb.BasicAmountConfig | undefined;
  setCustomerTextMessageChatSizeConfig(value?: api_commons_billing_modules_modules_pb.BasicAmountConfig): void;

  hasConnectedInboxCreatedConfig(): boolean;
  clearConnectedInboxCreatedConfig(): void;
  getConnectedInboxCreatedConfig(): api_commons_billing_modules_modules_pb.BasicConfig | undefined;
  setConnectedInboxCreatedConfig(value?: api_commons_billing_modules_modules_pb.BasicConfig): void;

  hasAgentTextMessageSmsSizeConfig(): boolean;
  clearAgentTextMessageSmsSizeConfig(): void;
  getAgentTextMessageSmsSizeConfig(): api_commons_billing_modules_modules_pb.BasicAmountConfig | undefined;
  setAgentTextMessageSmsSizeConfig(value?: api_commons_billing_modules_modules_pb.BasicAmountConfig): void;

  hasManagerTextMessageSmsSizeConfig(): boolean;
  clearManagerTextMessageSmsSizeConfig(): void;
  getManagerTextMessageSmsSizeConfig(): api_commons_billing_modules_modules_pb.BasicAmountConfig | undefined;
  setManagerTextMessageSmsSizeConfig(value?: api_commons_billing_modules_modules_pb.BasicAmountConfig): void;

  hasCustomerTextMessageSmsSizeConfig(): boolean;
  clearCustomerTextMessageSmsSizeConfig(): void;
  getCustomerTextMessageSmsSizeConfig(): api_commons_billing_modules_modules_pb.BasicAmountConfig | undefined;
  setCustomerTextMessageSmsSizeConfig(value?: api_commons_billing_modules_modules_pb.BasicAmountConfig): void;

  hasTaskMessageSentSmsSizeConfig(): boolean;
  clearTaskMessageSentSmsSizeConfig(): void;
  getTaskMessageSentSmsSizeConfig(): api_commons_billing_modules_modules_pb.BasicAmountConfig | undefined;
  setTaskMessageSentSmsSizeConfig(value?: api_commons_billing_modules_modules_pb.BasicAmountConfig): void;

  hasAgentChatMessageUnitsConfig(): boolean;
  clearAgentChatMessageUnitsConfig(): void;
  getAgentChatMessageUnitsConfig(): api_commons_billing_modules_modules_pb.BasicConfig | undefined;
  setAgentChatMessageUnitsConfig(value?: api_commons_billing_modules_modules_pb.BasicConfig): void;

  hasAgentEmailMessageUnitsConfig(): boolean;
  clearAgentEmailMessageUnitsConfig(): void;
  getAgentEmailMessageUnitsConfig(): api_commons_billing_modules_modules_pb.BasicConfig | undefined;
  setAgentEmailMessageUnitsConfig(value?: api_commons_billing_modules_modules_pb.BasicConfig): void;

  hasAgentSmsMessageUnitsConfig(): boolean;
  clearAgentSmsMessageUnitsConfig(): void;
  getAgentSmsMessageUnitsConfig(): api_commons_billing_modules_modules_pb.BasicConfig | undefined;
  setAgentSmsMessageUnitsConfig(value?: api_commons_billing_modules_modules_pb.BasicConfig): void;

  hasManagerChatMessageUnitsConfig(): boolean;
  clearManagerChatMessageUnitsConfig(): void;
  getManagerChatMessageUnitsConfig(): api_commons_billing_modules_modules_pb.BasicConfig | undefined;
  setManagerChatMessageUnitsConfig(value?: api_commons_billing_modules_modules_pb.BasicConfig): void;

  hasManagerEmailMessageUnitsConfig(): boolean;
  clearManagerEmailMessageUnitsConfig(): void;
  getManagerEmailMessageUnitsConfig(): api_commons_billing_modules_modules_pb.BasicConfig | undefined;
  setManagerEmailMessageUnitsConfig(value?: api_commons_billing_modules_modules_pb.BasicConfig): void;

  hasManagerSmsMessageUnitsConfig(): boolean;
  clearManagerSmsMessageUnitsConfig(): void;
  getManagerSmsMessageUnitsConfig(): api_commons_billing_modules_modules_pb.BasicConfig | undefined;
  setManagerSmsMessageUnitsConfig(value?: api_commons_billing_modules_modules_pb.BasicConfig): void;

  hasCustomerChatMessageUnitsConfig(): boolean;
  clearCustomerChatMessageUnitsConfig(): void;
  getCustomerChatMessageUnitsConfig(): api_commons_billing_modules_modules_pb.BasicConfig | undefined;
  setCustomerChatMessageUnitsConfig(value?: api_commons_billing_modules_modules_pb.BasicConfig): void;

  hasCustomerEmailMessageUnitsConfig(): boolean;
  clearCustomerEmailMessageUnitsConfig(): void;
  getCustomerEmailMessageUnitsConfig(): api_commons_billing_modules_modules_pb.BasicConfig | undefined;
  setCustomerEmailMessageUnitsConfig(value?: api_commons_billing_modules_modules_pb.BasicConfig): void;

  hasCustomerSmsMessageUnitsConfig(): boolean;
  clearCustomerSmsMessageUnitsConfig(): void;
  getCustomerSmsMessageUnitsConfig(): api_commons_billing_modules_modules_pb.BasicConfig | undefined;
  setCustomerSmsMessageUnitsConfig(value?: api_commons_billing_modules_modules_pb.BasicConfig): void;

  hasSystemChatMessageUnitsConfig(): boolean;
  clearSystemChatMessageUnitsConfig(): void;
  getSystemChatMessageUnitsConfig(): api_commons_billing_modules_modules_pb.BasicConfig | undefined;
  setSystemChatMessageUnitsConfig(value?: api_commons_billing_modules_modules_pb.BasicConfig): void;

  hasSystemEmailMessageUnitsConfig(): boolean;
  clearSystemEmailMessageUnitsConfig(): void;
  getSystemEmailMessageUnitsConfig(): api_commons_billing_modules_modules_pb.BasicConfig | undefined;
  setSystemEmailMessageUnitsConfig(value?: api_commons_billing_modules_modules_pb.BasicConfig): void;

  hasSystemSmsMessageUnitsConfig(): boolean;
  clearSystemSmsMessageUnitsConfig(): void;
  getSystemSmsMessageUnitsConfig(): api_commons_billing_modules_modules_pb.BasicConfig | undefined;
  setSystemSmsMessageUnitsConfig(value?: api_commons_billing_modules_modules_pb.BasicConfig): void;

  hasComplianceRndQueryConfig(): boolean;
  clearComplianceRndQueryConfig(): void;
  getComplianceRndQueryConfig(): api_commons_billing_modules_modules_pb.BasicConfig | undefined;
  setComplianceRndQueryConfig(value?: api_commons_billing_modules_modules_pb.BasicConfig): void;

  hasComplianceRndQueryCachedConfig(): boolean;
  clearComplianceRndQueryCachedConfig(): void;
  getComplianceRndQueryCachedConfig(): api_commons_billing_modules_modules_pb.BasicConfig | undefined;
  setComplianceRndQueryCachedConfig(value?: api_commons_billing_modules_modules_pb.BasicConfig): void;

  getConfigCase(): DetailConfig.ConfigCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DetailConfig.AsObject;
  static toObject(includeInstance: boolean, msg: DetailConfig): DetailConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DetailConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DetailConfig;
  static deserializeBinaryFromReader(message: DetailConfig, reader: jspb.BinaryReader): DetailConfig;
}

export namespace DetailConfig {
  export type AsObject = {
    agentSeatsConfig?: api_commons_billing_modules_modules_pb.BasicConfig.AsObject,
    agentTextMessageChatConfig?: api_commons_billing_modules_modules_pb.BasicConfig.AsObject,
    agentTextMessageEmailMessageConfig?: api_commons_billing_modules_modules_pb.BasicConfig.AsObject,
    agentTextMessageEmailSizeConfig?: api_commons_billing_modules_modules_pb.BasicAmountConfig.AsObject,
    agentTextMessageSmsConfig?: api_commons_billing_modules_modules_pb.BasicConfig.AsObject,
    taskMessageSentEmailMessageConfig?: api_commons_billing_modules_modules_pb.BasicConfig.AsObject,
    taskMessageSentEmailSizeConfig?: api_commons_billing_modules_modules_pb.BasicAmountConfig.AsObject,
    taskMessageSentSmsConfig?: api_commons_billing_modules_modules_pb.BasicConfig.AsObject,
    connectedInboxPollConfig?: api_commons_billing_modules_modules_pb.BasicConfig.AsObject,
    managerTextMessageChatConfig?: api_commons_billing_modules_modules_pb.BasicConfig.AsObject,
    managerTextMessageEmailMessageConfig?: api_commons_billing_modules_modules_pb.BasicConfig.AsObject,
    managerTextMessageEmailSizeConfig?: api_commons_billing_modules_modules_pb.BasicAmountConfig.AsObject,
    managerTextMessageSmsConfig?: api_commons_billing_modules_modules_pb.BasicConfig.AsObject,
    customerTextMessageChatConfig?: api_commons_billing_modules_modules_pb.BasicConfig.AsObject,
    customerTextMessageEmailMessageConfig?: api_commons_billing_modules_modules_pb.BasicConfig.AsObject,
    customerTextMessageEmailSizeConfig?: api_commons_billing_modules_modules_pb.BasicAmountConfig.AsObject,
    customerTextMessageSmsConfig?: api_commons_billing_modules_modules_pb.BasicConfig.AsObject,
    agentTextMessageChatSizeConfig?: api_commons_billing_modules_modules_pb.BasicAmountConfig.AsObject,
    managerTextMessageChatSizeConfig?: api_commons_billing_modules_modules_pb.BasicAmountConfig.AsObject,
    customerTextMessageChatSizeConfig?: api_commons_billing_modules_modules_pb.BasicAmountConfig.AsObject,
    connectedInboxCreatedConfig?: api_commons_billing_modules_modules_pb.BasicConfig.AsObject,
    agentTextMessageSmsSizeConfig?: api_commons_billing_modules_modules_pb.BasicAmountConfig.AsObject,
    managerTextMessageSmsSizeConfig?: api_commons_billing_modules_modules_pb.BasicAmountConfig.AsObject,
    customerTextMessageSmsSizeConfig?: api_commons_billing_modules_modules_pb.BasicAmountConfig.AsObject,
    taskMessageSentSmsSizeConfig?: api_commons_billing_modules_modules_pb.BasicAmountConfig.AsObject,
    agentChatMessageUnitsConfig?: api_commons_billing_modules_modules_pb.BasicConfig.AsObject,
    agentEmailMessageUnitsConfig?: api_commons_billing_modules_modules_pb.BasicConfig.AsObject,
    agentSmsMessageUnitsConfig?: api_commons_billing_modules_modules_pb.BasicConfig.AsObject,
    managerChatMessageUnitsConfig?: api_commons_billing_modules_modules_pb.BasicConfig.AsObject,
    managerEmailMessageUnitsConfig?: api_commons_billing_modules_modules_pb.BasicConfig.AsObject,
    managerSmsMessageUnitsConfig?: api_commons_billing_modules_modules_pb.BasicConfig.AsObject,
    customerChatMessageUnitsConfig?: api_commons_billing_modules_modules_pb.BasicConfig.AsObject,
    customerEmailMessageUnitsConfig?: api_commons_billing_modules_modules_pb.BasicConfig.AsObject,
    customerSmsMessageUnitsConfig?: api_commons_billing_modules_modules_pb.BasicConfig.AsObject,
    systemChatMessageUnitsConfig?: api_commons_billing_modules_modules_pb.BasicConfig.AsObject,
    systemEmailMessageUnitsConfig?: api_commons_billing_modules_modules_pb.BasicConfig.AsObject,
    systemSmsMessageUnitsConfig?: api_commons_billing_modules_modules_pb.BasicConfig.AsObject,
    complianceRndQueryConfig?: api_commons_billing_modules_modules_pb.BasicConfig.AsObject,
    complianceRndQueryCachedConfig?: api_commons_billing_modules_modules_pb.BasicConfig.AsObject,
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

export interface DetailConfigTypeMap {
  DETAIL_CONFIG_TYPE_UNSPECIFIED: 0;
  DETAIL_CONFIG_TYPE_NOOP: 1;
  DETAIL_CONFIG_TYPE_AGENT_SEATS: 2;
  DETAIL_CONFIG_TYPE_AGENT_TEXT_MESSAGE_CHAT: 100;
  DETAIL_CONFIG_TYPE_AGENT_TEXT_MESSAGE_EMAIL_MESSAGE: 101;
  DETAIL_CONFIG_TYPE_AGENT_TEXT_MESSAGE_EMAIL_SIZE: 102;
  DETAIL_CONFIG_TYPE_AGENT_TEXT_MESSAGE_SMS: 103;
  DETAIL_CONFIG_TYPE_TASK_MESSAGE_SENT_EMAIL_MESSAGE: 104;
  DETAIL_CONFIG_TYPE_TASK_MESSAGE_SENT_EMAIL_SIZE: 105;
  DETAIL_CONFIG_TYPE_TASK_MESSAGE_SENT_SMS: 106;
  DETAIL_CONFIG_TYPE_CONNECTED_INBOX_POLL: 107;
  DETAIL_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_CHAT: 108;
  DETAIL_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_EMAIL_MESSAGE: 109;
  DETAIL_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_EMAIL_SIZE: 110;
  DETAIL_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_SMS: 111;
  DETAIL_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_CHAT: 112;
  DETAIL_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_EMAIL_MESSAGE: 113;
  DETAIL_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_EMAIL_SIZE: 114;
  DETAIL_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_SMS: 115;
  DETAIL_CONFIG_TYPE_AGENT_TEXT_MESSAGE_CHAT_SIZE: 116;
  DETAIL_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_CHAT_SIZE: 117;
  DETAIL_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_CHAT_SIZE: 118;
  DETAIL_CONFIG_TYPE_CONNECTED_INBOX_CREATED: 119;
  DETAIL_CONFIG_TYPE_AGENT_TEXT_MESSAGE_SMS_SIZE: 120;
  DETAIL_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_SMS_SIZE: 121;
  DETAIL_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_SMS_SIZE: 122;
  DETAIL_CONFIG_TYPE_TASK_MESSAGE_SENT_SMS_SIZE: 123;
  DETAIL_CONFIG_TYPE_AGENT_CHAT_MESSAGE_UNITS: 124;
  DETAIL_CONFIG_TYPE_AGENT_EMAIL_MESSAGE_UNITS: 125;
  DETAIL_CONFIG_TYPE_AGENT_SMS_MESSAGE_UNITS: 126;
  DETAIL_CONFIG_TYPE_MANAGER_CHAT_MESSAGE_UNITS: 127;
  DETAIL_CONFIG_TYPE_MANAGER_EMAIL_MESSAGE_UNITS: 128;
  DETAIL_CONFIG_TYPE_MANAGER_SMS_MESSAGE_UNITS: 129;
  DETAIL_CONFIG_TYPE_CUSTOMER_CHAT_MESSAGE_UNITS: 130;
  DETAIL_CONFIG_TYPE_CUSTOMER_EMAIL_MESSAGE_UNITS: 131;
  DETAIL_CONFIG_TYPE_CUSTOMER_SMS_MESSAGE_UNITS: 132;
  DETAIL_CONFIG_TYPE_SYSTEM_CHAT_MESSAGE_UNITS: 133;
  DETAIL_CONFIG_TYPE_SYSTEM_EMAIL_MESSAGE_UNITS: 134;
  DETAIL_CONFIG_TYPE_SYSTEM_SMS_MESSAGE_UNITS: 135;
  BILLINGDETAILCONFIGTYPE_COMPLIANCE_RND_QUERY: 200;
  BILLINGDETAILCONFIGTYPE_COMPLIANCE_RND_QUERY_CACHED: 201;
}

export const DetailConfigType: DetailConfigTypeMap;

