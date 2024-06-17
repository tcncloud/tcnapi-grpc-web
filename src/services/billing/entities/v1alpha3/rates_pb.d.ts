// package: services.billing.entities.v1alpha3
// file: services/billing/entities/v1alpha3/rates.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as services_billing_entities_v1alpha3_modules_pb from "../../../../services/billing/entities/v1alpha3/modules_pb";
import * as services_billing_entities_v1alpha3_omni_pb from "../../../../services/billing/entities/v1alpha3/omni_pb";

export class RateDefinition extends jspb.Message {
  getRateDefinitionId(): string;
  setRateDefinitionId(value: string): void;

  getSkuId(): string;
  setSkuId(value: string): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): RateDefinitionConfig | undefined;
  setConfig(value?: RateDefinitionConfig): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

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
    skuId: string,
    config?: RateDefinitionConfig.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class RateDefinitionConfig extends jspb.Message {
  getType(): RateDefinitionConfigTypeMap[keyof RateDefinitionConfigTypeMap];
  setType(value: RateDefinitionConfigTypeMap[keyof RateDefinitionConfigTypeMap]): void;

  hasOmniAgentChat(): boolean;
  clearOmniAgentChat(): void;
  getOmniAgentChat(): services_billing_entities_v1alpha3_omni_pb.OmniChatConfig | undefined;
  setOmniAgentChat(value?: services_billing_entities_v1alpha3_omni_pb.OmniChatConfig): void;

  hasOmniCustomerChat(): boolean;
  clearOmniCustomerChat(): void;
  getOmniCustomerChat(): services_billing_entities_v1alpha3_omni_pb.OmniChatConfig | undefined;
  setOmniCustomerChat(value?: services_billing_entities_v1alpha3_omni_pb.OmniChatConfig): void;

  hasOmniManagerChat(): boolean;
  clearOmniManagerChat(): void;
  getOmniManagerChat(): services_billing_entities_v1alpha3_omni_pb.OmniChatConfig | undefined;
  setOmniManagerChat(value?: services_billing_entities_v1alpha3_omni_pb.OmniChatConfig): void;

  hasOmniSystemChat(): boolean;
  clearOmniSystemChat(): void;
  getOmniSystemChat(): services_billing_entities_v1alpha3_omni_pb.OmniChatConfig | undefined;
  setOmniSystemChat(value?: services_billing_entities_v1alpha3_omni_pb.OmniChatConfig): void;

  hasOmniAgentEmail(): boolean;
  clearOmniAgentEmail(): void;
  getOmniAgentEmail(): services_billing_entities_v1alpha3_omni_pb.OmniEmailConfig | undefined;
  setOmniAgentEmail(value?: services_billing_entities_v1alpha3_omni_pb.OmniEmailConfig): void;

  hasOmniCustomerEmail(): boolean;
  clearOmniCustomerEmail(): void;
  getOmniCustomerEmail(): services_billing_entities_v1alpha3_omni_pb.OmniEmailConfig | undefined;
  setOmniCustomerEmail(value?: services_billing_entities_v1alpha3_omni_pb.OmniEmailConfig): void;

  hasOmniManagerEmail(): boolean;
  clearOmniManagerEmail(): void;
  getOmniManagerEmail(): services_billing_entities_v1alpha3_omni_pb.OmniEmailConfig | undefined;
  setOmniManagerEmail(value?: services_billing_entities_v1alpha3_omni_pb.OmniEmailConfig): void;

  hasOmniSystemEmail(): boolean;
  clearOmniSystemEmail(): void;
  getOmniSystemEmail(): services_billing_entities_v1alpha3_omni_pb.OmniEmailConfig | undefined;
  setOmniSystemEmail(value?: services_billing_entities_v1alpha3_omni_pb.OmniEmailConfig): void;

  hasOmniTaskEmail(): boolean;
  clearOmniTaskEmail(): void;
  getOmniTaskEmail(): services_billing_entities_v1alpha3_omni_pb.OmniEmailConfig | undefined;
  setOmniTaskEmail(value?: services_billing_entities_v1alpha3_omni_pb.OmniEmailConfig): void;

  hasOmniAgentSms(): boolean;
  clearOmniAgentSms(): void;
  getOmniAgentSms(): services_billing_entities_v1alpha3_omni_pb.OmniSmsConfig | undefined;
  setOmniAgentSms(value?: services_billing_entities_v1alpha3_omni_pb.OmniSmsConfig): void;

  hasOmniCustomerSms(): boolean;
  clearOmniCustomerSms(): void;
  getOmniCustomerSms(): services_billing_entities_v1alpha3_omni_pb.OmniSmsConfig | undefined;
  setOmniCustomerSms(value?: services_billing_entities_v1alpha3_omni_pb.OmniSmsConfig): void;

  hasOmniManagerSms(): boolean;
  clearOmniManagerSms(): void;
  getOmniManagerSms(): services_billing_entities_v1alpha3_omni_pb.OmniSmsConfig | undefined;
  setOmniManagerSms(value?: services_billing_entities_v1alpha3_omni_pb.OmniSmsConfig): void;

  hasOmniSystemSms(): boolean;
  clearOmniSystemSms(): void;
  getOmniSystemSms(): services_billing_entities_v1alpha3_omni_pb.OmniSmsConfig | undefined;
  setOmniSystemSms(value?: services_billing_entities_v1alpha3_omni_pb.OmniSmsConfig): void;

  hasOmniTaskSms(): boolean;
  clearOmniTaskSms(): void;
  getOmniTaskSms(): services_billing_entities_v1alpha3_omni_pb.OmniSmsConfig | undefined;
  setOmniTaskSms(value?: services_billing_entities_v1alpha3_omni_pb.OmniSmsConfig): void;

  hasOmniConnectedInboxPoll(): boolean;
  clearOmniConnectedInboxPoll(): void;
  getOmniConnectedInboxPoll(): services_billing_entities_v1alpha3_modules_pb.BasicConfig | undefined;
  setOmniConnectedInboxPoll(value?: services_billing_entities_v1alpha3_modules_pb.BasicConfig): void;

  hasOmniConnectedInboxCreated(): boolean;
  clearOmniConnectedInboxCreated(): void;
  getOmniConnectedInboxCreated(): services_billing_entities_v1alpha3_modules_pb.BasicConfig | undefined;
  setOmniConnectedInboxCreated(value?: services_billing_entities_v1alpha3_modules_pb.BasicConfig): void;

  hasOmniAgentSeats(): boolean;
  clearOmniAgentSeats(): void;
  getOmniAgentSeats(): services_billing_entities_v1alpha3_modules_pb.BasicConfig | undefined;
  setOmniAgentSeats(value?: services_billing_entities_v1alpha3_modules_pb.BasicConfig): void;

  hasComplianceRndQuery(): boolean;
  clearComplianceRndQuery(): void;
  getComplianceRndQuery(): services_billing_entities_v1alpha3_modules_pb.BasicConfig | undefined;
  setComplianceRndQuery(value?: services_billing_entities_v1alpha3_modules_pb.BasicConfig): void;

  hasComplianceRndQueryCached(): boolean;
  clearComplianceRndQueryCached(): void;
  getComplianceRndQueryCached(): services_billing_entities_v1alpha3_modules_pb.BasicConfig | undefined;
  setComplianceRndQueryCached(value?: services_billing_entities_v1alpha3_modules_pb.BasicConfig): void;

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
    type: RateDefinitionConfigTypeMap[keyof RateDefinitionConfigTypeMap],
    omniAgentChat?: services_billing_entities_v1alpha3_omni_pb.OmniChatConfig.AsObject,
    omniCustomerChat?: services_billing_entities_v1alpha3_omni_pb.OmniChatConfig.AsObject,
    omniManagerChat?: services_billing_entities_v1alpha3_omni_pb.OmniChatConfig.AsObject,
    omniSystemChat?: services_billing_entities_v1alpha3_omni_pb.OmniChatConfig.AsObject,
    omniAgentEmail?: services_billing_entities_v1alpha3_omni_pb.OmniEmailConfig.AsObject,
    omniCustomerEmail?: services_billing_entities_v1alpha3_omni_pb.OmniEmailConfig.AsObject,
    omniManagerEmail?: services_billing_entities_v1alpha3_omni_pb.OmniEmailConfig.AsObject,
    omniSystemEmail?: services_billing_entities_v1alpha3_omni_pb.OmniEmailConfig.AsObject,
    omniTaskEmail?: services_billing_entities_v1alpha3_omni_pb.OmniEmailConfig.AsObject,
    omniAgentSms?: services_billing_entities_v1alpha3_omni_pb.OmniSmsConfig.AsObject,
    omniCustomerSms?: services_billing_entities_v1alpha3_omni_pb.OmniSmsConfig.AsObject,
    omniManagerSms?: services_billing_entities_v1alpha3_omni_pb.OmniSmsConfig.AsObject,
    omniSystemSms?: services_billing_entities_v1alpha3_omni_pb.OmniSmsConfig.AsObject,
    omniTaskSms?: services_billing_entities_v1alpha3_omni_pb.OmniSmsConfig.AsObject,
    omniConnectedInboxPoll?: services_billing_entities_v1alpha3_modules_pb.BasicConfig.AsObject,
    omniConnectedInboxCreated?: services_billing_entities_v1alpha3_modules_pb.BasicConfig.AsObject,
    omniAgentSeats?: services_billing_entities_v1alpha3_modules_pb.BasicConfig.AsObject,
    complianceRndQuery?: services_billing_entities_v1alpha3_modules_pb.BasicConfig.AsObject,
    complianceRndQueryCached?: services_billing_entities_v1alpha3_modules_pb.BasicConfig.AsObject,
  }

  export enum ConfigCase {
    CONFIG_NOT_SET = 0,
    OMNI_AGENT_CHAT = 100,
    OMNI_CUSTOMER_CHAT = 101,
    OMNI_MANAGER_CHAT = 102,
    OMNI_SYSTEM_CHAT = 103,
    OMNI_AGENT_EMAIL = 110,
    OMNI_CUSTOMER_EMAIL = 111,
    OMNI_MANAGER_EMAIL = 112,
    OMNI_SYSTEM_EMAIL = 113,
    OMNI_TASK_EMAIL = 114,
    OMNI_AGENT_SMS = 120,
    OMNI_CUSTOMER_SMS = 121,
    OMNI_MANAGER_SMS = 122,
    OMNI_SYSTEM_SMS = 123,
    OMNI_TASK_SMS = 124,
    OMNI_CONNECTED_INBOX_POLL = 197,
    OMNI_CONNECTED_INBOX_CREATED = 198,
    OMNI_AGENT_SEATS = 199,
    COMPLIANCE_RND_QUERY = 200,
    COMPLIANCE_RND_QUERY_CACHED = 201,
  }
}

export interface RateDefinitionConfigTypeMap {
  RATE_DEFINITION_CONFIG_TYPE_UNSPECIFIED: 0;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_AGENT_CHAT: 100;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_CUSTOMER_CHAT: 101;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_MANAGER_CHAT: 102;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_SYSTEM_CHAT: 103;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_AGENT_EMAIL: 110;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_CUSTOMER_EMAIL: 111;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_MANAGER_EMAIL: 112;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_SYSTEM_EMAIL: 113;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_TASK_EMAIL: 114;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_AGENT_SMS: 120;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_CUSTOMER_SMS: 121;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_MANAGER_SMS: 122;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_SYSTEM_SMS: 123;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_TASK_SMS: 124;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_CONNECTED_INBOX_POLL: 197;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_CONNECTED_INBOX_CREATED: 198;
  RATE_DEFINITION_CONFIG_TYPE_OMNI_AGENT_SEATS: 199;
  RATE_DEFINITION_CONFIG_TYPE_COMPLIANCE_RND_QUERY: 200;
  RATE_DEFINITION_CONFIG_TYPE_COMPLIANCE_RND_QUERY_CACHED: 201;
}

export const RateDefinitionConfigType: RateDefinitionConfigTypeMap;

