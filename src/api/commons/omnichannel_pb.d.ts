// package: api.commons
// file: api/commons/omnichannel.proto

import * as jspb from "google-protobuf";
import * as api_commons_chat_pb from "../../api/commons/chat_pb";
import * as api_commons_enums_pb from "../../api/commons/enums_pb";
import * as api_commons_lms_pb from "../../api/commons/lms_pb";
import * as api_commons_org_pb from "../../api/commons/org_pb";
import * as api_commons_types_pb from "../../api/commons/types_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class OmniCampaign extends jspb.Message {
  getCampaignSid(): string;
  setCampaignSid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasSkills(): boolean;
  clearSkills(): void;
  getSkills(): OmniConversationSkills | undefined;
  setSkills(value?: OmniConversationSkills): void;

  hasStartDate(): boolean;
  clearStartDate(): void;
  getStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getStatus(): OmniCampaignStatusMap[keyof OmniCampaignStatusMap];
  setStatus(value: OmniCampaignStatusMap[keyof OmniCampaignStatusMap]): void;

  getChannelType(): ChannelTypeMap[keyof ChannelTypeMap];
  setChannelType(value: ChannelTypeMap[keyof ChannelTypeMap]): void;

  hasDateCreated(): boolean;
  clearDateCreated(): void;
  getDateCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDateModified(): boolean;
  clearDateModified(): void;
  getDateModified(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateModified(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getProjectSid(): string;
  setProjectSid(value: string): void;

  clearModulesList(): void;
  getModulesList(): Array<OmniCampaignModule>;
  setModulesList(value: Array<OmniCampaignModule>): void;
  addModules(value?: OmniCampaignModule, index?: number): OmniCampaignModule;

  hasTimeZone(): boolean;
  clearTimeZone(): void;
  getTimeZone(): api_commons_org_pb.TimeZoneWrapper | undefined;
  setTimeZone(value?: api_commons_org_pb.TimeZoneWrapper): void;

  getShortenUrl(): boolean;
  setShortenUrl(value: boolean): void;

  hasComplianceConfig(): boolean;
  clearComplianceConfig(): void;
  getComplianceConfig(): OmniComplianceConfig | undefined;
  setComplianceConfig(value?: OmniComplianceConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniCampaign.AsObject;
  static toObject(includeInstance: boolean, msg: OmniCampaign): OmniCampaign.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniCampaign, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniCampaign;
  static deserializeBinaryFromReader(message: OmniCampaign, reader: jspb.BinaryReader): OmniCampaign;
}

export namespace OmniCampaign {
  export type AsObject = {
    campaignSid: string,
    name: string,
    description: string,
    skills?: OmniConversationSkills.AsObject,
    startDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: OmniCampaignStatusMap[keyof OmniCampaignStatusMap],
    channelType: ChannelTypeMap[keyof ChannelTypeMap],
    dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dateModified?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    projectSid: string,
    modulesList: Array<OmniCampaignModule.AsObject>,
    timeZone?: api_commons_org_pb.TimeZoneWrapper.AsObject,
    shortenUrl: boolean,
    complianceConfig?: OmniComplianceConfig.AsObject,
  }
}

export class OmniCampaignModule extends jspb.Message {
  getCampaignModuleSid(): string;
  setCampaignModuleSid(value: string): void;

  getCampaignSid(): string;
  setCampaignSid(value: string): void;

  getModuleType(): OmniCampaignModuleTypeMap[keyof OmniCampaignModuleTypeMap];
  setModuleType(value: OmniCampaignModuleTypeMap[keyof OmniCampaignModuleTypeMap]): void;

  getStatus(): OmniCampaignModuleStatusMap[keyof OmniCampaignModuleStatusMap];
  setStatus(value: OmniCampaignModuleStatusMap[keyof OmniCampaignModuleStatusMap]): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): OmniCampaignModuleConfig | undefined;
  setConfig(value?: OmniCampaignModuleConfig): void;

  hasDateCreated(): boolean;
  clearDateCreated(): void;
  getDateCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDateModified(): boolean;
  clearDateModified(): void;
  getDateModified(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateModified(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasScheduledStopDate(): boolean;
  clearScheduledStopDate(): void;
  getScheduledStopDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setScheduledStopDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasActualStopDate(): boolean;
  clearActualStopDate(): void;
  getActualStopDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setActualStopDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasHoursOfOperation(): boolean;
  clearHoursOfOperation(): void;
  getHoursOfOperation(): WeekdayTimeRange | undefined;
  setHoursOfOperation(value?: WeekdayTimeRange): void;

  hasDetails(): boolean;
  clearDetails(): void;
  getDetails(): OmniCampaignModule.Details | undefined;
  setDetails(value?: OmniCampaignModule.Details): void;

  clearAttachmentsList(): void;
  getAttachmentsList(): Array<OmniAttachment>;
  setAttachmentsList(value: Array<OmniAttachment>): void;
  addAttachments(value?: OmniAttachment, index?: number): OmniAttachment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniCampaignModule.AsObject;
  static toObject(includeInstance: boolean, msg: OmniCampaignModule): OmniCampaignModule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniCampaignModule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniCampaignModule;
  static deserializeBinaryFromReader(message: OmniCampaignModule, reader: jspb.BinaryReader): OmniCampaignModule;
}

export namespace OmniCampaignModule {
  export type AsObject = {
    campaignModuleSid: string,
    campaignSid: string,
    moduleType: OmniCampaignModuleTypeMap[keyof OmniCampaignModuleTypeMap],
    status: OmniCampaignModuleStatusMap[keyof OmniCampaignModuleStatusMap],
    config?: OmniCampaignModuleConfig.AsObject,
    dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dateModified?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    scheduledStopDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    actualStopDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    hoursOfOperation?: WeekdayTimeRange.AsObject,
    details?: OmniCampaignModule.Details.AsObject,
    attachmentsList: Array<OmniAttachment.AsObject>,
  }

  export class Details extends jspb.Message {
    hasTotalTaskCount(): boolean;
    clearTotalTaskCount(): void;
    getTotalTaskCount(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTotalTaskCount(value?: google_protobuf_wrappers_pb.Int64Value): void;

    hasCompletedTaskCount(): boolean;
    clearCompletedTaskCount(): void;
    getCompletedTaskCount(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setCompletedTaskCount(value?: google_protobuf_wrappers_pb.Int64Value): void;

    hasConnectedInboxAddress(): boolean;
    clearConnectedInboxAddress(): void;
    getConnectedInboxAddress(): google_protobuf_wrappers_pb.StringValue | undefined;
    setConnectedInboxAddress(value?: google_protobuf_wrappers_pb.StringValue): void;

    hasVerifiedEmailAddress(): boolean;
    clearVerifiedEmailAddress(): void;
    getVerifiedEmailAddress(): google_protobuf_wrappers_pb.StringValue | undefined;
    setVerifiedEmailAddress(value?: google_protobuf_wrappers_pb.StringValue): void;

    hasPendingTaskCount(): boolean;
    clearPendingTaskCount(): void;
    getPendingTaskCount(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setPendingTaskCount(value?: google_protobuf_wrappers_pb.Int64Value): void;

    hasFailedTaskCount(): boolean;
    clearFailedTaskCount(): void;
    getFailedTaskCount(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setFailedTaskCount(value?: google_protobuf_wrappers_pb.Int64Value): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Details.AsObject;
    static toObject(includeInstance: boolean, msg: Details): Details.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Details, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Details;
    static deserializeBinaryFromReader(message: Details, reader: jspb.BinaryReader): Details;
  }

  export namespace Details {
    export type AsObject = {
      totalTaskCount?: google_protobuf_wrappers_pb.Int64Value.AsObject,
      completedTaskCount?: google_protobuf_wrappers_pb.Int64Value.AsObject,
      connectedInboxAddress?: google_protobuf_wrappers_pb.StringValue.AsObject,
      verifiedEmailAddress?: google_protobuf_wrappers_pb.StringValue.AsObject,
      pendingTaskCount?: google_protobuf_wrappers_pb.Int64Value.AsObject,
      failedTaskCount?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
  }
}

export class OmniCampaignModuleConfig extends jspb.Message {
  hasApiKeyPrimary(): boolean;
  clearApiKeyPrimary(): void;
  getApiKeyPrimary(): google_protobuf_wrappers_pb.StringValue | undefined;
  setApiKeyPrimary(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasApiKeySecondary(): boolean;
  clearApiKeySecondary(): void;
  getApiKeySecondary(): google_protobuf_wrappers_pb.StringValue | undefined;
  setApiKeySecondary(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasColorProperties(): boolean;
  clearColorProperties(): void;
  getColorProperties(): api_commons_chat_pb.ChatColorProperties | undefined;
  setColorProperties(value?: api_commons_chat_pb.ChatColorProperties): void;

  hasConnectedInboxSid(): boolean;
  clearConnectedInboxSid(): void;
  getConnectedInboxSid(): api_commons_types_pb.Int64Id | undefined;
  setConnectedInboxSid(value?: api_commons_types_pb.Int64Id): void;

  clearDispositionsList(): void;
  getDispositionsList(): Array<Disposition>;
  setDispositionsList(value: Array<Disposition>): void;
  addDispositions(value?: Disposition, index?: number): Disposition;

  hasEmail(): boolean;
  clearEmail(): void;
  getEmail(): google_protobuf_wrappers_pb.StringValue | undefined;
  setEmail(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasMessageBody(): boolean;
  clearMessageBody(): void;
  getMessageBody(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMessageBody(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasEmailSubject(): boolean;
  clearEmailSubject(): void;
  getEmailSubject(): google_protobuf_wrappers_pb.StringValue | undefined;
  setEmailSubject(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasSmsNumber(): boolean;
  clearSmsNumber(): void;
  getSmsNumber(): SmsNumber | undefined;
  setSmsNumber(value?: SmsNumber): void;

  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): api_commons_chat_pb.ChatHeader | undefined;
  setHeader(value?: api_commons_chat_pb.ChatHeader): void;

  hasSlaTimeouts(): boolean;
  clearSlaTimeouts(): void;
  getSlaTimeouts(): SLATimeouts | undefined;
  setSlaTimeouts(value?: SLATimeouts): void;

  hasSendsPerHour(): boolean;
  clearSendsPerHour(): void;
  getSendsPerHour(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setSendsPerHour(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasUnsubscribeLinkSid(): boolean;
  clearUnsubscribeLinkSid(): void;
  getUnsubscribeLinkSid(): api_commons_types_pb.Int64Id | undefined;
  setUnsubscribeLinkSid(value?: api_commons_types_pb.Int64Id): void;

  hasVerifiedEmailSid(): boolean;
  clearVerifiedEmailSid(): void;
  getVerifiedEmailSid(): api_commons_types_pb.Int64Id | undefined;
  setVerifiedEmailSid(value?: api_commons_types_pb.Int64Id): void;

  hasStopOnTaskDeplete(): boolean;
  clearStopOnTaskDeplete(): void;
  getStopOnTaskDeplete(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setStopOnTaskDeplete(value?: google_protobuf_wrappers_pb.BoolValue): void;

  clearAttachmentsList(): void;
  getAttachmentsList(): Array<OmniAttachment>;
  setAttachmentsList(value: Array<OmniAttachment>): void;
  addAttachments(value?: OmniAttachment, index?: number): OmniAttachment;

  hasComplianceRuleSetId(): boolean;
  clearComplianceRuleSetId(): void;
  getComplianceRuleSetId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setComplianceRuleSetId(value?: google_protobuf_wrappers_pb.StringValue): void;

  clearPaymentPortalIdsList(): void;
  getPaymentPortalIdsList(): Array<string>;
  setPaymentPortalIdsList(value: Array<string>): void;
  addPaymentPortalIds(value: string, index?: number): string;

  hasFlowId(): boolean;
  clearFlowId(): void;
  getFlowId(): api_commons_types_pb.Int64Id | undefined;
  setFlowId(value?: api_commons_types_pb.Int64Id): void;

  hasSkills(): boolean;
  clearSkills(): void;
  getSkills(): OmniConversationSkills | undefined;
  setSkills(value?: OmniConversationSkills): void;

  hasWhatsappNumber(): boolean;
  clearWhatsappNumber(): void;
  getWhatsappNumber(): WhatsAppNumber | undefined;
  setWhatsappNumber(value?: WhatsAppNumber): void;

  hasContentId(): boolean;
  clearContentId(): void;
  getContentId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setContentId(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniCampaignModuleConfig.AsObject;
  static toObject(includeInstance: boolean, msg: OmniCampaignModuleConfig): OmniCampaignModuleConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniCampaignModuleConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniCampaignModuleConfig;
  static deserializeBinaryFromReader(message: OmniCampaignModuleConfig, reader: jspb.BinaryReader): OmniCampaignModuleConfig;
}

export namespace OmniCampaignModuleConfig {
  export type AsObject = {
    apiKeyPrimary?: google_protobuf_wrappers_pb.StringValue.AsObject,
    apiKeySecondary?: google_protobuf_wrappers_pb.StringValue.AsObject,
    colorProperties?: api_commons_chat_pb.ChatColorProperties.AsObject,
    connectedInboxSid?: api_commons_types_pb.Int64Id.AsObject,
    dispositionsList: Array<Disposition.AsObject>,
    email?: google_protobuf_wrappers_pb.StringValue.AsObject,
    messageBody?: google_protobuf_wrappers_pb.StringValue.AsObject,
    emailSubject?: google_protobuf_wrappers_pb.StringValue.AsObject,
    smsNumber?: SmsNumber.AsObject,
    header?: api_commons_chat_pb.ChatHeader.AsObject,
    slaTimeouts?: SLATimeouts.AsObject,
    sendsPerHour?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    unsubscribeLinkSid?: api_commons_types_pb.Int64Id.AsObject,
    verifiedEmailSid?: api_commons_types_pb.Int64Id.AsObject,
    stopOnTaskDeplete?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    attachmentsList: Array<OmniAttachment.AsObject>,
    complianceRuleSetId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    paymentPortalIdsList: Array<string>,
    flowId?: api_commons_types_pb.Int64Id.AsObject,
    skills?: OmniConversationSkills.AsObject,
    whatsappNumber?: WhatsAppNumber.AsObject,
    contentId?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class SmsNumber extends jspb.Message {
  getNumber(): string;
  setNumber(value: string): void;

  getType(): SmsNumberTypeMap[keyof SmsNumberTypeMap];
  setType(value: SmsNumberTypeMap[keyof SmsNumberTypeMap]): void;

  getProvider(): SmsNumberProviderMap[keyof SmsNumberProviderMap];
  setProvider(value: SmsNumberProviderMap[keyof SmsNumberProviderMap]): void;

  getCountryCode(): number;
  setCountryCode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmsNumber.AsObject;
  static toObject(includeInstance: boolean, msg: SmsNumber): SmsNumber.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SmsNumber, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmsNumber;
  static deserializeBinaryFromReader(message: SmsNumber, reader: jspb.BinaryReader): SmsNumber;
}

export namespace SmsNumber {
  export type AsObject = {
    number: string,
    type: SmsNumberTypeMap[keyof SmsNumberTypeMap],
    provider: SmsNumberProviderMap[keyof SmsNumberProviderMap],
    countryCode: number,
  }
}

export class ConversationCustomerInformation extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): void;

  getEmailAddress(): string;
  setEmailAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationCustomerInformation.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationCustomerInformation): ConversationCustomerInformation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversationCustomerInformation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationCustomerInformation;
  static deserializeBinaryFromReader(message: ConversationCustomerInformation, reader: jspb.BinaryReader): ConversationCustomerInformation;
}

export namespace ConversationCustomerInformation {
  export type AsObject = {
    name: string,
    phoneNumber: string,
    emailAddress: string,
  }
}

export class SLATimeouts extends jspb.Message {
  getT1(): number;
  setT1(value: number): void;

  getT2(): number;
  setT2(value: number): void;

  getT3(): number;
  setT3(value: number): void;

  getT10(): number;
  setT10(value: number): void;

  getT11(): number;
  setT11(value: number): void;

  getT12(): number;
  setT12(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SLATimeouts.AsObject;
  static toObject(includeInstance: boolean, msg: SLATimeouts): SLATimeouts.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SLATimeouts, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SLATimeouts;
  static deserializeBinaryFromReader(message: SLATimeouts, reader: jspb.BinaryReader): SLATimeouts;
}

export namespace SLATimeouts {
  export type AsObject = {
    t1: number,
    t2: number,
    t3: number,
    t10: number,
    t11: number,
    t12: number,
  }
}

export class ConversationCollectedData extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<ConversationCollectedData_Item>;
  setItemsList(value: Array<ConversationCollectedData_Item>): void;
  addItems(value?: ConversationCollectedData_Item, index?: number): ConversationCollectedData_Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationCollectedData.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationCollectedData): ConversationCollectedData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversationCollectedData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationCollectedData;
  static deserializeBinaryFromReader(message: ConversationCollectedData, reader: jspb.BinaryReader): ConversationCollectedData;
}

export namespace ConversationCollectedData {
  export type AsObject = {
    itemsList: Array<ConversationCollectedData_Item.AsObject>,
  }
}

export class ConversationCollectedData_Item extends jspb.Message {
  getConversationCollectedDataSid(): string;
  setConversationCollectedDataSid(value: string): void;

  getConversationSid(): string;
  setConversationSid(value: string): void;

  getDataName(): string;
  setDataName(value: string): void;

  getDataValue(): string;
  setDataValue(value: string): void;

  hasCollectionTime(): boolean;
  clearCollectionTime(): void;
  getCollectionTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCollectionTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUserId(): boolean;
  clearUserId(): void;
  getUserId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setUserId(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationCollectedData_Item.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationCollectedData_Item): ConversationCollectedData_Item.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversationCollectedData_Item, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationCollectedData_Item;
  static deserializeBinaryFromReader(message: ConversationCollectedData_Item, reader: jspb.BinaryReader): ConversationCollectedData_Item;
}

export namespace ConversationCollectedData_Item {
  export type AsObject = {
    conversationCollectedDataSid: string,
    conversationSid: string,
    dataName: string,
    dataValue: string,
    collectionTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    userId?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class OmniMessage extends jspb.Message {
  getMessageSid(): string;
  setMessageSid(value: string): void;

  hasUserId(): boolean;
  clearUserId(): void;
  getUserId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setUserId(value?: google_protobuf_wrappers_pb.StringValue): void;

  getSentFrom(): string;
  setSentFrom(value: string): void;

  getSentTo(): string;
  setSentTo(value: string): void;

  getChannelType(): ChannelTypeMap[keyof ChannelTypeMap];
  setChannelType(value: ChannelTypeMap[keyof ChannelTypeMap]): void;

  hasReferenceId(): boolean;
  clearReferenceId(): void;
  getReferenceId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setReferenceId(value?: google_protobuf_wrappers_pb.StringValue): void;

  getUiReferenceId(): string;
  setUiReferenceId(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): OmniMessagePayload | undefined;
  setPayload(value?: OmniMessagePayload): void;

  hasConversationSid(): boolean;
  clearConversationSid(): void;
  getConversationSid(): api_commons_types_pb.Int64Id | undefined;
  setConversationSid(value?: api_commons_types_pb.Int64Id): void;

  getStatus(): OmniMessageStatusMap[keyof OmniMessageStatusMap];
  setStatus(value: OmniMessageStatusMap[keyof OmniMessageStatusMap]): void;

  hasDateCreated(): boolean;
  clearDateCreated(): void;
  getDateCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDateModified(): boolean;
  clearDateModified(): void;
  getDateModified(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateModified(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getCampaignSid(): string;
  setCampaignSid(value: string): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): google_protobuf_wrappers_pb.StringValue | undefined;
  setSubject(value?: google_protobuf_wrappers_pb.StringValue): void;

  getSenderType(): OmniSenderTypeMap[keyof OmniSenderTypeMap];
  setSenderType(value: OmniSenderTypeMap[keyof OmniSenderTypeMap]): void;

  hasStatusMessage(): boolean;
  clearStatusMessage(): void;
  getStatusMessage(): google_protobuf_wrappers_pb.StringValue | undefined;
  setStatusMessage(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniMessage.AsObject;
  static toObject(includeInstance: boolean, msg: OmniMessage): OmniMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniMessage;
  static deserializeBinaryFromReader(message: OmniMessage, reader: jspb.BinaryReader): OmniMessage;
}

export namespace OmniMessage {
  export type AsObject = {
    messageSid: string,
    userId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    sentFrom: string,
    sentTo: string,
    channelType: ChannelTypeMap[keyof ChannelTypeMap],
    referenceId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    uiReferenceId: string,
    payload?: OmniMessagePayload.AsObject,
    conversationSid?: api_commons_types_pb.Int64Id.AsObject,
    status: OmniMessageStatusMap[keyof OmniMessageStatusMap],
    dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dateModified?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    campaignSid: string,
    subject?: google_protobuf_wrappers_pb.StringValue.AsObject,
    senderType: OmniSenderTypeMap[keyof OmniSenderTypeMap],
    statusMessage?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class CustomerChatWidgetMessage extends jspb.Message {
  getMessageSid(): string;
  setMessageSid(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): OmniMessagePayload | undefined;
  setPayload(value?: OmniMessagePayload): void;

  hasDateCreated(): boolean;
  clearDateCreated(): void;
  getDateCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getUiReferenceId(): string;
  setUiReferenceId(value: string): void;

  hasCustomerInformation(): boolean;
  clearCustomerInformation(): void;
  getCustomerInformation(): ConversationCustomerInformation | undefined;
  setCustomerInformation(value?: ConversationCustomerInformation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerChatWidgetMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerChatWidgetMessage): CustomerChatWidgetMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerChatWidgetMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerChatWidgetMessage;
  static deserializeBinaryFromReader(message: CustomerChatWidgetMessage, reader: jspb.BinaryReader): CustomerChatWidgetMessage;
}

export namespace CustomerChatWidgetMessage {
  export type AsObject = {
    messageSid: string,
    payload?: OmniMessagePayload.AsObject,
    dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    uiReferenceId: string,
    customerInformation?: ConversationCustomerInformation.AsObject,
  }
}

export class AgentChatWidgetMessage extends jspb.Message {
  getMessageSid(): string;
  setMessageSid(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): OmniMessagePayload | undefined;
  setPayload(value?: OmniMessagePayload): void;

  hasDateCreated(): boolean;
  clearDateCreated(): void;
  getDateCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getUiReferenceId(): string;
  setUiReferenceId(value: string): void;

  hasUserInformation(): boolean;
  clearUserInformation(): void;
  getUserInformation(): OmniConversationUserInformation | undefined;
  setUserInformation(value?: OmniConversationUserInformation): void;

  getSenderType(): OmniSenderTypeMap[keyof OmniSenderTypeMap];
  setSenderType(value: OmniSenderTypeMap[keyof OmniSenderTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentChatWidgetMessage.AsObject;
  static toObject(includeInstance: boolean, msg: AgentChatWidgetMessage): AgentChatWidgetMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentChatWidgetMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentChatWidgetMessage;
  static deserializeBinaryFromReader(message: AgentChatWidgetMessage, reader: jspb.BinaryReader): AgentChatWidgetMessage;
}

export namespace AgentChatWidgetMessage {
  export type AsObject = {
    messageSid: string,
    payload?: OmniMessagePayload.AsObject,
    dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    uiReferenceId: string,
    userInformation?: OmniConversationUserInformation.AsObject,
    senderType: OmniSenderTypeMap[keyof OmniSenderTypeMap],
  }
}

export class OmniMessagePayload extends jspb.Message {
  hasTextMessage(): boolean;
  clearTextMessage(): void;
  getTextMessage(): OmniTextMessage | undefined;
  setTextMessage(value?: OmniTextMessage): void;

  hasTypingNotification(): boolean;
  clearTypingNotification(): void;
  getTypingNotification(): OmniTypingNotification | undefined;
  setTypingNotification(value?: OmniTypingNotification): void;

  hasReassignment(): boolean;
  clearReassignment(): void;
  getReassignment(): OmniReassignmentNotification | undefined;
  setReassignment(value?: OmniReassignmentNotification): void;

  hasRequestAttachmentUploadUrl(): boolean;
  clearRequestAttachmentUploadUrl(): void;
  getRequestAttachmentUploadUrl(): OmniRequestAttachmentUploadURL | undefined;
  setRequestAttachmentUploadUrl(value?: OmniRequestAttachmentUploadURL): void;

  hasAttachmentUploadUrl(): boolean;
  clearAttachmentUploadUrl(): void;
  getAttachmentUploadUrl(): OmniAttachmentUploadURL | undefined;
  setAttachmentUploadUrl(value?: OmniAttachmentUploadURL): void;

  hasAttachment(): boolean;
  clearAttachment(): void;
  getAttachment(): OmniAttachment | undefined;
  setAttachment(value?: OmniAttachment): void;

  hasCloseConversation(): boolean;
  clearCloseConversation(): void;
  getCloseConversation(): OmniCloseConversation | undefined;
  setCloseConversation(value?: OmniCloseConversation): void;

  hasAssignConversation(): boolean;
  clearAssignConversation(): void;
  getAssignConversation(): OmniAssignConversation | undefined;
  setAssignConversation(value?: OmniAssignConversation): void;

  hasUnassignConversation(): boolean;
  clearUnassignConversation(): void;
  getUnassignConversation(): OmniUnassignConversation | undefined;
  setUnassignConversation(value?: OmniUnassignConversation): void;

  hasFinishWrapUp(): boolean;
  clearFinishWrapUp(): void;
  getFinishWrapUp(): OmniFinishWrapUp | undefined;
  setFinishWrapUp(value?: OmniFinishWrapUp): void;

  hasSuspend(): boolean;
  clearSuspend(): void;
  getSuspend(): OmniSuspend | undefined;
  setSuspend(value?: OmniSuspend): void;

  hasStartWrapUp(): boolean;
  clearStartWrapUp(): void;
  getStartWrapUp(): OmniStartWrapUp | undefined;
  setStartWrapUp(value?: OmniStartWrapUp): void;

  hasQueueInformation(): boolean;
  clearQueueInformation(): void;
  getQueueInformation(): OmniQueueInformation | undefined;
  setQueueInformation(value?: OmniQueueInformation): void;

  hasRequestQueueInformation(): boolean;
  clearRequestQueueInformation(): void;
  getRequestQueueInformation(): OmniRequestQueueInformation | undefined;
  setRequestQueueInformation(value?: OmniRequestQueueInformation): void;

  hasOffLoadedTextMessage(): boolean;
  clearOffLoadedTextMessage(): void;
  getOffLoadedTextMessage(): OmniOffLoadedTextMessage | undefined;
  setOffLoadedTextMessage(value?: OmniOffLoadedTextMessage): void;

  hasCannedMessage(): boolean;
  clearCannedMessage(): void;
  getCannedMessage(): OmniCannedMessage | undefined;
  setCannedMessage(value?: OmniCannedMessage): void;

  getPayloadCase(): OmniMessagePayload.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniMessagePayload.AsObject;
  static toObject(includeInstance: boolean, msg: OmniMessagePayload): OmniMessagePayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniMessagePayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniMessagePayload;
  static deserializeBinaryFromReader(message: OmniMessagePayload, reader: jspb.BinaryReader): OmniMessagePayload;
}

export namespace OmniMessagePayload {
  export type AsObject = {
    textMessage?: OmniTextMessage.AsObject,
    typingNotification?: OmniTypingNotification.AsObject,
    reassignment?: OmniReassignmentNotification.AsObject,
    requestAttachmentUploadUrl?: OmniRequestAttachmentUploadURL.AsObject,
    attachmentUploadUrl?: OmniAttachmentUploadURL.AsObject,
    attachment?: OmniAttachment.AsObject,
    closeConversation?: OmniCloseConversation.AsObject,
    assignConversation?: OmniAssignConversation.AsObject,
    unassignConversation?: OmniUnassignConversation.AsObject,
    finishWrapUp?: OmniFinishWrapUp.AsObject,
    suspend?: OmniSuspend.AsObject,
    startWrapUp?: OmniStartWrapUp.AsObject,
    queueInformation?: OmniQueueInformation.AsObject,
    requestQueueInformation?: OmniRequestQueueInformation.AsObject,
    offLoadedTextMessage?: OmniOffLoadedTextMessage.AsObject,
    cannedMessage?: OmniCannedMessage.AsObject,
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    TEXT_MESSAGE = 100,
    TYPING_NOTIFICATION = 101,
    REASSIGNMENT = 102,
    REQUEST_ATTACHMENT_UPLOAD_URL = 103,
    ATTACHMENT_UPLOAD_URL = 104,
    ATTACHMENT = 105,
    CLOSE_CONVERSATION = 106,
    ASSIGN_CONVERSATION = 107,
    UNASSIGN_CONVERSATION = 108,
    FINISH_WRAP_UP = 109,
    SUSPEND = 110,
    START_WRAP_UP = 111,
    QUEUE_INFORMATION = 112,
    REQUEST_QUEUE_INFORMATION = 113,
    OFF_LOADED_TEXT_MESSAGE = 114,
    CANNED_MESSAGE = 115,
  }
}

export class OmniTextMessage extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  clearAttachmentsList(): void;
  getAttachmentsList(): Array<OmniAttachment>;
  setAttachmentsList(value: Array<OmniAttachment>): void;
  addAttachments(value?: OmniAttachment, index?: number): OmniAttachment;

  hasPrimaryAsmSessionSid(): boolean;
  clearPrimaryAsmSessionSid(): void;
  getPrimaryAsmSessionSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPrimaryAsmSessionSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniTextMessage.AsObject;
  static toObject(includeInstance: boolean, msg: OmniTextMessage): OmniTextMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniTextMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniTextMessage;
  static deserializeBinaryFromReader(message: OmniTextMessage, reader: jspb.BinaryReader): OmniTextMessage;
}

export namespace OmniTextMessage {
  export type AsObject = {
    message: string,
    attachmentsList: Array<OmniAttachment.AsObject>,
    primaryAsmSessionSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class OmniOffLoadedTextMessage extends jspb.Message {
  getLocation(): string;
  setLocation(value: string): void;

  clearAttachmentsList(): void;
  getAttachmentsList(): Array<OmniAttachment>;
  setAttachmentsList(value: Array<OmniAttachment>): void;
  addAttachments(value?: OmniAttachment, index?: number): OmniAttachment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniOffLoadedTextMessage.AsObject;
  static toObject(includeInstance: boolean, msg: OmniOffLoadedTextMessage): OmniOffLoadedTextMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniOffLoadedTextMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniOffLoadedTextMessage;
  static deserializeBinaryFromReader(message: OmniOffLoadedTextMessage, reader: jspb.BinaryReader): OmniOffLoadedTextMessage;
}

export namespace OmniOffLoadedTextMessage {
  export type AsObject = {
    location: string,
    attachmentsList: Array<OmniAttachment.AsObject>,
  }
}

export class OmniTypingNotification extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniTypingNotification.AsObject;
  static toObject(includeInstance: boolean, msg: OmniTypingNotification): OmniTypingNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniTypingNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniTypingNotification;
  static deserializeBinaryFromReader(message: OmniTypingNotification, reader: jspb.BinaryReader): OmniTypingNotification;
}

export namespace OmniTypingNotification {
  export type AsObject = {
  }
}

export class OmniAssignConversation extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getUserName(): string;
  setUserName(value: string): void;

  getPrimaryAsmSessionSid(): number;
  setPrimaryAsmSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniAssignConversation.AsObject;
  static toObject(includeInstance: boolean, msg: OmniAssignConversation): OmniAssignConversation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniAssignConversation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniAssignConversation;
  static deserializeBinaryFromReader(message: OmniAssignConversation, reader: jspb.BinaryReader): OmniAssignConversation;
}

export namespace OmniAssignConversation {
  export type AsObject = {
    userId: string,
    userName: string,
    primaryAsmSessionSid: number,
  }
}

export class OmniReassignmentNotification extends jspb.Message {
  getCurrentUserId(): string;
  setCurrentUserId(value: string): void;

  getCurrentUserName(): string;
  setCurrentUserName(value: string): void;

  getNewUserId(): string;
  setNewUserId(value: string): void;

  getNewUserName(): string;
  setNewUserName(value: string): void;

  hasNewUserAsmSessionSid(): boolean;
  clearNewUserAsmSessionSid(): void;
  getNewUserAsmSessionSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setNewUserAsmSessionSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniReassignmentNotification.AsObject;
  static toObject(includeInstance: boolean, msg: OmniReassignmentNotification): OmniReassignmentNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniReassignmentNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniReassignmentNotification;
  static deserializeBinaryFromReader(message: OmniReassignmentNotification, reader: jspb.BinaryReader): OmniReassignmentNotification;
}

export namespace OmniReassignmentNotification {
  export type AsObject = {
    currentUserId: string,
    currentUserName: string,
    newUserId: string,
    newUserName: string,
    newUserAsmSessionSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class OmniUnassignConversation extends jspb.Message {
  hasUserId(): boolean;
  clearUserId(): void;
  getUserId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setUserId(value?: google_protobuf_wrappers_pb.StringValue): void;

  getUserName(): string;
  setUserName(value: string): void;

  getAll(): boolean;
  setAll(value: boolean): void;

  hasPrimaryAsmSessionSid(): boolean;
  clearPrimaryAsmSessionSid(): void;
  getPrimaryAsmSessionSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPrimaryAsmSessionSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniUnassignConversation.AsObject;
  static toObject(includeInstance: boolean, msg: OmniUnassignConversation): OmniUnassignConversation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniUnassignConversation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniUnassignConversation;
  static deserializeBinaryFromReader(message: OmniUnassignConversation, reader: jspb.BinaryReader): OmniUnassignConversation;
}

export namespace OmniUnassignConversation {
  export type AsObject = {
    userId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    userName: string,
    all: boolean,
    primaryAsmSessionSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class OmniRequestAttachmentUploadURL extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniRequestAttachmentUploadURL.AsObject;
  static toObject(includeInstance: boolean, msg: OmniRequestAttachmentUploadURL): OmniRequestAttachmentUploadURL.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniRequestAttachmentUploadURL, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniRequestAttachmentUploadURL;
  static deserializeBinaryFromReader(message: OmniRequestAttachmentUploadURL, reader: jspb.BinaryReader): OmniRequestAttachmentUploadURL;
}

export namespace OmniRequestAttachmentUploadURL {
  export type AsObject = {
  }
}

export class OmniAttachmentUploadURL extends jspb.Message {
  getUploadUrl(): string;
  setUploadUrl(value: string): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniAttachmentUploadURL.AsObject;
  static toObject(includeInstance: boolean, msg: OmniAttachmentUploadURL): OmniAttachmentUploadURL.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniAttachmentUploadURL, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniAttachmentUploadURL;
  static deserializeBinaryFromReader(message: OmniAttachmentUploadURL, reader: jspb.BinaryReader): OmniAttachmentUploadURL;
}

export namespace OmniAttachmentUploadURL {
  export type AsObject = {
    uploadUrl: string,
    id: string,
  }
}

export class OmniAttachment extends jspb.Message {
  getOmniAttachmentSid(): string;
  setOmniAttachmentSid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getFileType(): string;
  setFileType(value: string): void;

  getFileSize(): number;
  setFileSize(value: number): void;

  getPath(): string;
  setPath(value: string): void;

  hasTempId(): boolean;
  clearTempId(): void;
  getTempId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTempId(value?: google_protobuf_wrappers_pb.StringValue): void;

  getDownloadUrl(): string;
  setDownloadUrl(value: string): void;

  hasDateCreated(): boolean;
  clearDateCreated(): void;
  getDateCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDateModified(): boolean;
  clearDateModified(): void;
  getDateModified(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateModified(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasContentId(): boolean;
  clearContentId(): void;
  getContentId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setContentId(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasWidth(): boolean;
  clearWidth(): void;
  getWidth(): google_protobuf_wrappers_pb.StringValue | undefined;
  setWidth(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasHeight(): boolean;
  clearHeight(): void;
  getHeight(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHeight(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniAttachment.AsObject;
  static toObject(includeInstance: boolean, msg: OmniAttachment): OmniAttachment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniAttachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniAttachment;
  static deserializeBinaryFromReader(message: OmniAttachment, reader: jspb.BinaryReader): OmniAttachment;
}

export namespace OmniAttachment {
  export type AsObject = {
    omniAttachmentSid: string,
    name: string,
    fileType: string,
    fileSize: number,
    path: string,
    tempId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    downloadUrl: string,
    dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dateModified?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    contentId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    width?: google_protobuf_wrappers_pb.StringValue.AsObject,
    height?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class OmniStartWrapUp extends jspb.Message {
  hasPrimaryAsmSessionSid(): boolean;
  clearPrimaryAsmSessionSid(): void;
  getPrimaryAsmSessionSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPrimaryAsmSessionSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniStartWrapUp.AsObject;
  static toObject(includeInstance: boolean, msg: OmniStartWrapUp): OmniStartWrapUp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniStartWrapUp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniStartWrapUp;
  static deserializeBinaryFromReader(message: OmniStartWrapUp, reader: jspb.BinaryReader): OmniStartWrapUp;
}

export namespace OmniStartWrapUp {
  export type AsObject = {
    primaryAsmSessionSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class OmniFinishWrapUp extends jspb.Message {
  hasPrimaryAsmSessionSid(): boolean;
  clearPrimaryAsmSessionSid(): void;
  getPrimaryAsmSessionSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPrimaryAsmSessionSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniFinishWrapUp.AsObject;
  static toObject(includeInstance: boolean, msg: OmniFinishWrapUp): OmniFinishWrapUp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniFinishWrapUp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniFinishWrapUp;
  static deserializeBinaryFromReader(message: OmniFinishWrapUp, reader: jspb.BinaryReader): OmniFinishWrapUp;
}

export namespace OmniFinishWrapUp {
  export type AsObject = {
    primaryAsmSessionSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class OmniSuspend extends jspb.Message {
  hasPrimaryAsmSessionSid(): boolean;
  clearPrimaryAsmSessionSid(): void;
  getPrimaryAsmSessionSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPrimaryAsmSessionSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniSuspend.AsObject;
  static toObject(includeInstance: boolean, msg: OmniSuspend): OmniSuspend.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniSuspend, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniSuspend;
  static deserializeBinaryFromReader(message: OmniSuspend, reader: jspb.BinaryReader): OmniSuspend;
}

export namespace OmniSuspend {
  export type AsObject = {
    primaryAsmSessionSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class OmniCloseConversation extends jspb.Message {
  hasPrimaryAsmSessionSid(): boolean;
  clearPrimaryAsmSessionSid(): void;
  getPrimaryAsmSessionSid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPrimaryAsmSessionSid(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniCloseConversation.AsObject;
  static toObject(includeInstance: boolean, msg: OmniCloseConversation): OmniCloseConversation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniCloseConversation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniCloseConversation;
  static deserializeBinaryFromReader(message: OmniCloseConversation, reader: jspb.BinaryReader): OmniCloseConversation;
}

export namespace OmniCloseConversation {
  export type AsObject = {
    primaryAsmSessionSid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class OmniQueueInformation extends jspb.Message {
  getPosition(): number;
  setPosition(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniQueueInformation.AsObject;
  static toObject(includeInstance: boolean, msg: OmniQueueInformation): OmniQueueInformation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniQueueInformation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniQueueInformation;
  static deserializeBinaryFromReader(message: OmniQueueInformation, reader: jspb.BinaryReader): OmniQueueInformation;
}

export namespace OmniQueueInformation {
  export type AsObject = {
    position: number,
  }
}

export class OmniRequestQueueInformation extends jspb.Message {
  getPosition(): boolean;
  setPosition(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniRequestQueueInformation.AsObject;
  static toObject(includeInstance: boolean, msg: OmniRequestQueueInformation): OmniRequestQueueInformation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniRequestQueueInformation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniRequestQueueInformation;
  static deserializeBinaryFromReader(message: OmniRequestQueueInformation, reader: jspb.BinaryReader): OmniRequestQueueInformation;
}

export namespace OmniRequestQueueInformation {
  export type AsObject = {
    position: boolean,
  }
}

export class OmniCannedMessage extends jspb.Message {
  getCannedMessageId(): string;
  setCannedMessageId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniCannedMessage.AsObject;
  static toObject(includeInstance: boolean, msg: OmniCannedMessage): OmniCannedMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniCannedMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniCannedMessage;
  static deserializeBinaryFromReader(message: OmniCannedMessage, reader: jspb.BinaryReader): OmniCannedMessage;
}

export namespace OmniCannedMessage {
  export type AsObject = {
    cannedMessageId: string,
  }
}

export class OmniConversationUserInformation extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniConversationUserInformation.AsObject;
  static toObject(includeInstance: boolean, msg: OmniConversationUserInformation): OmniConversationUserInformation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniConversationUserInformation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniConversationUserInformation;
  static deserializeBinaryFromReader(message: OmniConversationUserInformation, reader: jspb.BinaryReader): OmniConversationUserInformation;
}

export namespace OmniConversationUserInformation {
  export type AsObject = {
    userId: string,
    name: string,
  }
}

export class CustomerCollectedData extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<CustomerCollectedDataItem>;
  setItemsList(value: Array<CustomerCollectedDataItem>): void;
  addItems(value?: CustomerCollectedDataItem, index?: number): CustomerCollectedDataItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerCollectedData.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerCollectedData): CustomerCollectedData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerCollectedData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerCollectedData;
  static deserializeBinaryFromReader(message: CustomerCollectedData, reader: jspb.BinaryReader): CustomerCollectedData;
}

export namespace CustomerCollectedData {
  export type AsObject = {
    itemsList: Array<CustomerCollectedDataItem.AsObject>,
  }
}

export class CustomerCollectedDataItem extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerCollectedDataItem.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerCollectedDataItem): CustomerCollectedDataItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerCollectedDataItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerCollectedDataItem;
  static deserializeBinaryFromReader(message: CustomerCollectedDataItem, reader: jspb.BinaryReader): CustomerCollectedDataItem;
}

export namespace CustomerCollectedDataItem {
  export type AsObject = {
    key: string,
    value: string,
  }
}

export class OmniConversation extends jspb.Message {
  getConversationSid(): string;
  setConversationSid(value: string): void;

  getChannelType(): ChannelTypeMap[keyof ChannelTypeMap];
  setChannelType(value: ChannelTypeMap[keyof ChannelTypeMap]): void;

  hasSkills(): boolean;
  clearSkills(): void;
  getSkills(): OmniConversationSkills | undefined;
  setSkills(value?: OmniConversationSkills): void;

  hasDateCreated(): boolean;
  clearDateCreated(): void;
  getDateCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDateModified(): boolean;
  clearDateModified(): void;
  getDateModified(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateModified(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getStatus(): ConversationStatusMap[keyof ConversationStatusMap];
  setStatus(value: ConversationStatusMap[keyof ConversationStatusMap]): void;

  hasCustomerEmailAddress(): boolean;
  clearCustomerEmailAddress(): void;
  getCustomerEmailAddress(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCustomerEmailAddress(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCustomerPhoneNumber(): boolean;
  clearCustomerPhoneNumber(): void;
  getCustomerPhoneNumber(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCustomerPhoneNumber(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCustomerName(): boolean;
  clearCustomerName(): void;
  getCustomerName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCustomerName(value?: google_protobuf_wrappers_pb.StringValue): void;

  getCampaignSid(): string;
  setCampaignSid(value: string): void;

  hasReferenceId(): boolean;
  clearReferenceId(): void;
  getReferenceId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setReferenceId(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasLastMessageTime(): boolean;
  clearLastMessageTime(): void;
  getLastMessageTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastMessageTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasConversationCollectedData(): boolean;
  clearConversationCollectedData(): void;
  getConversationCollectedData(): ConversationCollectedData | undefined;
  setConversationCollectedData(value?: ConversationCollectedData): void;

  hasSlaTimeouts(): boolean;
  clearSlaTimeouts(): void;
  getSlaTimeouts(): SLATimeouts | undefined;
  setSlaTimeouts(value?: SLATimeouts): void;

  clearConversationAssignmentsList(): void;
  getConversationAssignmentsList(): Array<OmniConversationAssignment>;
  setConversationAssignmentsList(value: Array<OmniConversationAssignment>): void;
  addConversationAssignments(value?: OmniConversationAssignment, index?: number): OmniConversationAssignment;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): OmniConversation.ConversationDetails | undefined;
  setMetadata(value?: OmniConversation.ConversationDetails): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getCampaignModuleSid(): string;
  setCampaignModuleSid(value: string): void;

  hasLastMessageGroupTime(): boolean;
  clearLastMessageGroupTime(): void;
  getLastMessageGroupTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastMessageGroupTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getLastMessageGroupType(): OmniSenderTypeMap[keyof OmniSenderTypeMap];
  setLastMessageGroupType(value: OmniSenderTypeMap[keyof OmniSenderTypeMap]): void;

  getResult(): OmniConversationResultMap[keyof OmniConversationResultMap];
  setResult(value: OmniConversationResultMap[keyof OmniConversationResultMap]): void;

  hasLastStateChangedTime(): boolean;
  clearLastStateChangedTime(): void;
  getLastStateChangedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastStateChangedTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniConversation.AsObject;
  static toObject(includeInstance: boolean, msg: OmniConversation): OmniConversation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniConversation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniConversation;
  static deserializeBinaryFromReader(message: OmniConversation, reader: jspb.BinaryReader): OmniConversation;
}

export namespace OmniConversation {
  export type AsObject = {
    conversationSid: string,
    channelType: ChannelTypeMap[keyof ChannelTypeMap],
    skills?: OmniConversationSkills.AsObject,
    dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dateModified?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: ConversationStatusMap[keyof ConversationStatusMap],
    customerEmailAddress?: google_protobuf_wrappers_pb.StringValue.AsObject,
    customerPhoneNumber?: google_protobuf_wrappers_pb.StringValue.AsObject,
    customerName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    campaignSid: string,
    referenceId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    lastMessageTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    conversationCollectedData?: ConversationCollectedData.AsObject,
    slaTimeouts?: SLATimeouts.AsObject,
    conversationAssignmentsList: Array<OmniConversationAssignment.AsObject>,
    metadata?: OmniConversation.ConversationDetails.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    campaignModuleSid: string,
    lastMessageGroupTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastMessageGroupType: OmniSenderTypeMap[keyof OmniSenderTypeMap],
    result: OmniConversationResultMap[keyof OmniConversationResultMap],
    lastStateChangedTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export class ConversationDetails extends jspb.Message {
    getCampaignName(): string;
    setCampaignName(value: string): void;

    getSupportEmail(): string;
    setSupportEmail(value: string): void;

    getCampaignShortenUrl(): boolean;
    setCampaignShortenUrl(value: boolean): void;

    clearPaymentPortalIdsList(): void;
    getPaymentPortalIdsList(): Array<string>;
    setPaymentPortalIdsList(value: Array<string>): void;
    addPaymentPortalIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConversationDetails.AsObject;
    static toObject(includeInstance: boolean, msg: ConversationDetails): ConversationDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConversationDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConversationDetails;
    static deserializeBinaryFromReader(message: ConversationDetails, reader: jspb.BinaryReader): ConversationDetails;
  }

  export namespace ConversationDetails {
    export type AsObject = {
      campaignName: string,
      supportEmail: string,
      campaignShortenUrl: boolean,
      paymentPortalIdsList: Array<string>,
    }
  }
}

export class OmniConversationAssignment extends jspb.Message {
  getConversationAssignmentSid(): string;
  setConversationAssignmentSid(value: string): void;

  getConversationSid(): string;
  setConversationSid(value: string): void;

  getIsActive(): boolean;
  setIsActive(value: boolean): void;

  getAssignmentType(): AgentConversationAssignmentTypeMap[keyof AgentConversationAssignmentTypeMap];
  setAssignmentType(value: AgentConversationAssignmentTypeMap[keyof AgentConversationAssignmentTypeMap]): void;

  hasDateCreated(): boolean;
  clearDateCreated(): void;
  getDateCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDateModified(): boolean;
  clearDateModified(): void;
  getDateModified(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateModified(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getUserId(): string;
  setUserId(value: string): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): OmniConversationAssignment.ConversationAssignmentDetails | undefined;
  setMetadata(value?: OmniConversationAssignment.ConversationAssignmentDetails): void;

  getAsmSessionSid(): number;
  setAsmSessionSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniConversationAssignment.AsObject;
  static toObject(includeInstance: boolean, msg: OmniConversationAssignment): OmniConversationAssignment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniConversationAssignment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniConversationAssignment;
  static deserializeBinaryFromReader(message: OmniConversationAssignment, reader: jspb.BinaryReader): OmniConversationAssignment;
}

export namespace OmniConversationAssignment {
  export type AsObject = {
    conversationAssignmentSid: string,
    conversationSid: string,
    isActive: boolean,
    assignmentType: AgentConversationAssignmentTypeMap[keyof AgentConversationAssignmentTypeMap],
    dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dateModified?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    userId: string,
    metadata?: OmniConversationAssignment.ConversationAssignmentDetails.AsObject,
    asmSessionSid: number,
  }

  export class ConversationAssignmentDetails extends jspb.Message {
    getUserName(): string;
    setUserName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConversationAssignmentDetails.AsObject;
    static toObject(includeInstance: boolean, msg: ConversationAssignmentDetails): ConversationAssignmentDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConversationAssignmentDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConversationAssignmentDetails;
    static deserializeBinaryFromReader(message: ConversationAssignmentDetails, reader: jspb.BinaryReader): ConversationAssignmentDetails;
  }

  export namespace ConversationAssignmentDetails {
    export type AsObject = {
      userName: string,
    }
  }
}

export class OmniConversationSkills extends jspb.Message {
  getSkillsMap(): jspb.Map<string, boolean>;
  clearSkillsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniConversationSkills.AsObject;
  static toObject(includeInstance: boolean, msg: OmniConversationSkills): OmniConversationSkills.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniConversationSkills, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniConversationSkills;
  static deserializeBinaryFromReader(message: OmniConversationSkills, reader: jspb.BinaryReader): OmniConversationSkills;
}

export namespace OmniConversationSkills {
  export type AsObject = {
    skillsMap: Array<[string, boolean]>,
  }
}

export class WeekdayTimeRange extends jspb.Message {
  clearEntriesList(): void;
  getEntriesList(): Array<WeekdayTimeRangeEntry>;
  setEntriesList(value: Array<WeekdayTimeRangeEntry>): void;
  addEntries(value?: WeekdayTimeRangeEntry, index?: number): WeekdayTimeRangeEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WeekdayTimeRange.AsObject;
  static toObject(includeInstance: boolean, msg: WeekdayTimeRange): WeekdayTimeRange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WeekdayTimeRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WeekdayTimeRange;
  static deserializeBinaryFromReader(message: WeekdayTimeRange, reader: jspb.BinaryReader): WeekdayTimeRange;
}

export namespace WeekdayTimeRange {
  export type AsObject = {
    entriesList: Array<WeekdayTimeRangeEntry.AsObject>,
  }
}

export class WeekdayTimeRangeEntry extends jspb.Message {
  getStartDay(): api_commons_enums_pb.Weekday.EnumMap[keyof api_commons_enums_pb.Weekday.EnumMap];
  setStartDay(value: api_commons_enums_pb.Weekday.EnumMap[keyof api_commons_enums_pb.Weekday.EnumMap]): void;

  getStartHour(): number;
  setStartHour(value: number): void;

  getStartMinute(): number;
  setStartMinute(value: number): void;

  getEndDay(): api_commons_enums_pb.Weekday.EnumMap[keyof api_commons_enums_pb.Weekday.EnumMap];
  setEndDay(value: api_commons_enums_pb.Weekday.EnumMap[keyof api_commons_enums_pb.Weekday.EnumMap]): void;

  getEndHour(): number;
  setEndHour(value: number): void;

  getEndMinute(): number;
  setEndMinute(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WeekdayTimeRangeEntry.AsObject;
  static toObject(includeInstance: boolean, msg: WeekdayTimeRangeEntry): WeekdayTimeRangeEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WeekdayTimeRangeEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WeekdayTimeRangeEntry;
  static deserializeBinaryFromReader(message: WeekdayTimeRangeEntry, reader: jspb.BinaryReader): WeekdayTimeRangeEntry;
}

export namespace WeekdayTimeRangeEntry {
  export type AsObject = {
    startDay: api_commons_enums_pb.Weekday.EnumMap[keyof api_commons_enums_pb.Weekday.EnumMap],
    startHour: number,
    startMinute: number,
    endDay: api_commons_enums_pb.Weekday.EnumMap[keyof api_commons_enums_pb.Weekday.EnumMap],
    endHour: number,
    endMinute: number,
  }
}

export class Disposition extends jspb.Message {
  getDispositionSid(): string;
  setDispositionSid(value: string): void;

  hasDateCreated(): boolean;
  clearDateCreated(): void;
  getDateCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDateModified(): boolean;
  clearDateModified(): void;
  getDateModified(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateModified(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getDisposition(): string;
  setDisposition(value: string): void;

  getDeleted(): boolean;
  setDeleted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Disposition.AsObject;
  static toObject(includeInstance: boolean, msg: Disposition): Disposition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Disposition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Disposition;
  static deserializeBinaryFromReader(message: Disposition, reader: jspb.BinaryReader): Disposition;
}

export namespace Disposition {
  export type AsObject = {
    dispositionSid: string,
    dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dateModified?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    disposition: string,
    deleted: boolean,
  }
}

export class GetQueuesDetailsRes extends jspb.Message {
  clearQueueDetailsList(): void;
  getQueueDetailsList(): Array<GetQueuesDetailsRes.QueueDetails>;
  setQueueDetailsList(value: Array<GetQueuesDetailsRes.QueueDetails>): void;
  addQueueDetails(value?: GetQueuesDetailsRes.QueueDetails, index?: number): GetQueuesDetailsRes.QueueDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetQueuesDetailsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetQueuesDetailsRes): GetQueuesDetailsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetQueuesDetailsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetQueuesDetailsRes;
  static deserializeBinaryFromReader(message: GetQueuesDetailsRes, reader: jspb.BinaryReader): GetQueuesDetailsRes;
}

export namespace GetQueuesDetailsRes {
  export type AsObject = {
    queueDetailsList: Array<GetQueuesDetailsRes.QueueDetails.AsObject>,
  }

  export class QueueDetails extends jspb.Message {
    getChannelType(): ChannelTypeMap[keyof ChannelTypeMap];
    setChannelType(value: ChannelTypeMap[keyof ChannelTypeMap]): void;

    getQueuesize(): number;
    setQueuesize(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueueDetails.AsObject;
    static toObject(includeInstance: boolean, msg: QueueDetails): QueueDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueueDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueueDetails;
    static deserializeBinaryFromReader(message: QueueDetails, reader: jspb.BinaryReader): QueueDetails;
  }

  export namespace QueueDetails {
    export type AsObject = {
      channelType: ChannelTypeMap[keyof ChannelTypeMap],
      queuesize: number,
    }
  }
}

export class OmniCustomUnsubscribeLink extends jspb.Message {
  getCustomUnsubscribeLinkSid(): string;
  setCustomUnsubscribeLinkSid(value: string): void;

  getLinkName(): string;
  setLinkName(value: string): void;

  getLinkUrl(): string;
  setLinkUrl(value: string): void;

  getValidated(): boolean;
  setValidated(value: boolean): void;

  hasDateCreated(): boolean;
  clearDateCreated(): void;
  getDateCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDateModified(): boolean;
  clearDateModified(): void;
  getDateModified(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateModified(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDateValidated(): boolean;
  clearDateValidated(): void;
  getDateValidated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateValidated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getDescription(): string;
  setDescription(value: string): void;

  getDeleted(): boolean;
  setDeleted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniCustomUnsubscribeLink.AsObject;
  static toObject(includeInstance: boolean, msg: OmniCustomUnsubscribeLink): OmniCustomUnsubscribeLink.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniCustomUnsubscribeLink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniCustomUnsubscribeLink;
  static deserializeBinaryFromReader(message: OmniCustomUnsubscribeLink, reader: jspb.BinaryReader): OmniCustomUnsubscribeLink;
}

export namespace OmniCustomUnsubscribeLink {
  export type AsObject = {
    customUnsubscribeLinkSid: string,
    linkName: string,
    linkUrl: string,
    validated: boolean,
    dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dateModified?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dateValidated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    description: string,
    deleted: boolean,
  }
}

export class ContactList extends jspb.Message {
  getContactListSid(): string;
  setContactListSid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearFieldNamesList(): void;
  getFieldNamesList(): Array<string>;
  setFieldNamesList(value: Array<string>): void;
  addFieldNames(value: string, index?: number): string;

  hasProjectSid(): boolean;
  clearProjectSid(): void;
  getProjectSid(): api_commons_types_pb.Int64Id | undefined;
  setProjectSid(value?: api_commons_types_pb.Int64Id): void;

  hasDateCreated(): boolean;
  clearDateCreated(): void;
  getDateCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDateModified(): boolean;
  clearDateModified(): void;
  getDateModified(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateModified(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearContactEntriesList(): void;
  getContactEntriesList(): Array<ContactEntry>;
  setContactEntriesList(value: Array<ContactEntry>): void;
  addContactEntries(value?: ContactEntry, index?: number): ContactEntry;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): ContactList.Metadata | undefined;
  setMetadata(value?: ContactList.Metadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactList.AsObject;
  static toObject(includeInstance: boolean, msg: ContactList): ContactList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactList;
  static deserializeBinaryFromReader(message: ContactList, reader: jspb.BinaryReader): ContactList;
}

export namespace ContactList {
  export type AsObject = {
    contactListSid: string,
    name: string,
    description: string,
    fieldNamesList: Array<string>,
    projectSid?: api_commons_types_pb.Int64Id.AsObject,
    dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dateModified?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    contactEntriesList: Array<ContactEntry.AsObject>,
    metadata?: ContactList.Metadata.AsObject,
  }

  export class Metadata extends jspb.Message {
    getEntryCount(): number;
    setEntryCount(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Metadata.AsObject;
    static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Metadata;
    static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
  }

  export namespace Metadata {
    export type AsObject = {
      entryCount: number,
    }
  }
}

export class ContactEntry extends jspb.Message {
  getContactEntrySid(): string;
  setContactEntrySid(value: string): void;

  getContactListSid(): string;
  setContactListSid(value: string): void;

  hasDateCreated(): boolean;
  clearDateCreated(): void;
  getDateCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDateModified(): boolean;
  clearDateModified(): void;
  getDateModified(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateModified(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearFieldNamesList(): void;
  getFieldNamesList(): Array<string>;
  setFieldNamesList(value: Array<string>): void;
  addFieldNames(value: string, index?: number): string;

  clearDataFieldsList(): void;
  getDataFieldsList(): Array<OmniDataField>;
  setDataFieldsList(value: Array<OmniDataField>): void;
  addDataFields(value?: OmniDataField, index?: number): OmniDataField;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactEntry.AsObject;
  static toObject(includeInstance: boolean, msg: ContactEntry): ContactEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactEntry;
  static deserializeBinaryFromReader(message: ContactEntry, reader: jspb.BinaryReader): ContactEntry;
}

export namespace ContactEntry {
  export type AsObject = {
    contactEntrySid: string,
    contactListSid: string,
    dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dateModified?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    fieldNamesList: Array<string>,
    dataFieldsList: Array<OmniDataField.AsObject>,
  }
}

export class OmniTask extends jspb.Message {
  getTaskSid(): string;
  setTaskSid(value: string): void;

  getStatus(): OmniTaskStatusMap[keyof OmniTaskStatusMap];
  setStatus(value: OmniTaskStatusMap[keyof OmniTaskStatusMap]): void;

  hasDateCreated(): boolean;
  clearDateCreated(): void;
  getDateCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDateModified(): boolean;
  clearDateModified(): void;
  getDateModified(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateModified(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getCampaignModuleSid(): string;
  setCampaignModuleSid(value: string): void;

  getCampaignSid(): string;
  setCampaignSid(value: string): void;

  hasContactEntrySid(): boolean;
  clearContactEntrySid(): void;
  getContactEntrySid(): api_commons_types_pb.Int64Id | undefined;
  setContactEntrySid(value?: api_commons_types_pb.Int64Id): void;

  hasState(): boolean;
  clearState(): void;
  getState(): OmniTaskState | undefined;
  setState(value?: OmniTaskState): void;

  clearDataFieldsList(): void;
  getDataFieldsList(): Array<OmniDataField>;
  setDataFieldsList(value: Array<OmniDataField>): void;
  addDataFields(value?: OmniDataField, index?: number): OmniDataField;

  hasDetails(): boolean;
  clearDetails(): void;
  getDetails(): OmniTask.Details | undefined;
  setDetails(value?: OmniTask.Details): void;

  getName(): string;
  setName(value: string): void;

  hasStatusMessage(): boolean;
  clearStatusMessage(): void;
  getStatusMessage(): google_protobuf_wrappers_pb.StringValue | undefined;
  setStatusMessage(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasScheduledTime(): boolean;
  clearScheduledTime(): void;
  getScheduledTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setScheduledTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTaskConfig(): boolean;
  clearTaskConfig(): void;
  getTaskConfig(): OmniTaskConfig | undefined;
  setTaskConfig(value?: OmniTaskConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniTask.AsObject;
  static toObject(includeInstance: boolean, msg: OmniTask): OmniTask.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniTask;
  static deserializeBinaryFromReader(message: OmniTask, reader: jspb.BinaryReader): OmniTask;
}

export namespace OmniTask {
  export type AsObject = {
    taskSid: string,
    status: OmniTaskStatusMap[keyof OmniTaskStatusMap],
    dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dateModified?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    campaignModuleSid: string,
    campaignSid: string,
    contactEntrySid?: api_commons_types_pb.Int64Id.AsObject,
    state?: OmniTaskState.AsObject,
    dataFieldsList: Array<OmniDataField.AsObject>,
    details?: OmniTask.Details.AsObject,
    name: string,
    statusMessage?: google_protobuf_wrappers_pb.StringValue.AsObject,
    scheduledTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    taskConfig?: OmniTaskConfig.AsObject,
  }

  export class Details extends jspb.Message {
    hasContactListName(): boolean;
    clearContactListName(): void;
    getContactListName(): google_protobuf_wrappers_pb.StringValue | undefined;
    setContactListName(value?: google_protobuf_wrappers_pb.StringValue): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Details.AsObject;
    static toObject(includeInstance: boolean, msg: Details): Details.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Details, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Details;
    static deserializeBinaryFromReader(message: Details, reader: jspb.BinaryReader): Details;
  }

  export namespace Details {
    export type AsObject = {
      contactListName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
  }
}

export class OmniTaskConfig extends jspb.Message {
  hasSkills(): boolean;
  clearSkills(): void;
  getSkills(): OmniConversationSkills | undefined;
  setSkills(value?: OmniConversationSkills): void;

  hasAbsoluteTimeoutDuration(): boolean;
  clearAbsoluteTimeoutDuration(): void;
  getAbsoluteTimeoutDuration(): google_protobuf_duration_pb.Duration | undefined;
  setAbsoluteTimeoutDuration(value?: google_protobuf_duration_pb.Duration): void;

  hasAgentTimeoutDuration(): boolean;
  clearAgentTimeoutDuration(): void;
  getAgentTimeoutDuration(): google_protobuf_duration_pb.Duration | undefined;
  setAgentTimeoutDuration(value?: google_protobuf_duration_pb.Duration): void;

  getSubject(): string;
  setSubject(value: string): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): OmniMessagePayload | undefined;
  setMessage(value?: OmniMessagePayload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniTaskConfig.AsObject;
  static toObject(includeInstance: boolean, msg: OmniTaskConfig): OmniTaskConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniTaskConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniTaskConfig;
  static deserializeBinaryFromReader(message: OmniTaskConfig, reader: jspb.BinaryReader): OmniTaskConfig;
}

export namespace OmniTaskConfig {
  export type AsObject = {
    skills?: OmniConversationSkills.AsObject,
    absoluteTimeoutDuration?: google_protobuf_duration_pb.Duration.AsObject,
    agentTimeoutDuration?: google_protobuf_duration_pb.Duration.AsObject,
    subject: string,
    message?: OmniMessagePayload.AsObject,
  }
}

export class OmniTaskState extends jspb.Message {
  clearDestinationsList(): void;
  getDestinationsList(): Array<OmniTaskState.Entry>;
  setDestinationsList(value: Array<OmniTaskState.Entry>): void;
  addDestinations(value?: OmniTaskState.Entry, index?: number): OmniTaskState.Entry;

  clearSourcesList(): void;
  getSourcesList(): Array<OmniTaskState.Entry>;
  setSourcesList(value: Array<OmniTaskState.Entry>): void;
  addSources(value?: OmniTaskState.Entry, index?: number): OmniTaskState.Entry;

  hasRuleSet(): boolean;
  clearRuleSet(): void;
  getRuleSet(): ComplianceRuleSet | undefined;
  setRuleSet(value?: ComplianceRuleSet): void;

  hasScrubListId(): boolean;
  clearScrubListId(): void;
  getScrubListId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setScrubListId(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniTaskState.AsObject;
  static toObject(includeInstance: boolean, msg: OmniTaskState): OmniTaskState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniTaskState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniTaskState;
  static deserializeBinaryFromReader(message: OmniTaskState, reader: jspb.BinaryReader): OmniTaskState;
}

export namespace OmniTaskState {
  export type AsObject = {
    destinationsList: Array<OmniTaskState.Entry.AsObject>,
    sourcesList: Array<OmniTaskState.Entry.AsObject>,
    ruleSet?: ComplianceRuleSet.AsObject,
    scrubListId?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }

  export class Entry extends jspb.Message {
    getAddress(): string;
    setAddress(value: string): void;

    getTimesUsed(): number;
    setTimesUsed(value: number): void;

    hasLastUsed(): boolean;
    clearLastUsed(): void;
    getLastUsed(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastUsed(value?: google_protobuf_timestamp_pb.Timestamp): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Entry.AsObject;
    static toObject(includeInstance: boolean, msg: Entry): Entry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Entry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Entry;
    static deserializeBinaryFromReader(message: Entry, reader: jspb.BinaryReader): Entry;
  }

  export namespace Entry {
    export type AsObject = {
      address: string,
      timesUsed: number,
      lastUsed?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }
}

export class ComplianceRuleSet extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getSha(): string;
  setSha(value: string): void;

  clearRulesList(): void;
  getRulesList(): Array<ComplianceRule>;
  setRulesList(value: Array<ComplianceRule>): void;
  addRules(value?: ComplianceRule, index?: number): ComplianceRule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComplianceRuleSet.AsObject;
  static toObject(includeInstance: boolean, msg: ComplianceRuleSet): ComplianceRuleSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ComplianceRuleSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComplianceRuleSet;
  static deserializeBinaryFromReader(message: ComplianceRuleSet, reader: jspb.BinaryReader): ComplianceRuleSet;
}

export namespace ComplianceRuleSet {
  export type AsObject = {
    id: string,
    name: string,
    sha: string,
    rulesList: Array<ComplianceRule.AsObject>,
  }
}

export class ComplianceRule extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  getPermit(): boolean;
  setPermit(value: boolean): void;

  getPluginResponse(): string;
  setPluginResponse(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComplianceRule.AsObject;
  static toObject(includeInstance: boolean, msg: ComplianceRule): ComplianceRule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ComplianceRule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComplianceRule;
  static deserializeBinaryFromReader(message: ComplianceRule, reader: jspb.BinaryReader): ComplianceRule;
}

export namespace ComplianceRule {
  export type AsObject = {
    text: string,
    permit: boolean,
    pluginResponse: string,
  }
}

export class OmniDataField extends jspb.Message {
  getFieldSid(): string;
  setFieldSid(value: string): void;

  getParentSid(): string;
  setParentSid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getType(): api_commons_lms_pb.FieldTypeMap[keyof api_commons_lms_pb.FieldTypeMap];
  setType(value: api_commons_lms_pb.FieldTypeMap[keyof api_commons_lms_pb.FieldTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniDataField.AsObject;
  static toObject(includeInstance: boolean, msg: OmniDataField): OmniDataField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniDataField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniDataField;
  static deserializeBinaryFromReader(message: OmniDataField, reader: jspb.BinaryReader): OmniDataField;
}

export namespace OmniDataField {
  export type AsObject = {
    fieldSid: string,
    parentSid: string,
    name: string,
    value: string,
    type: api_commons_lms_pb.FieldTypeMap[keyof api_commons_lms_pb.FieldTypeMap],
  }
}

export class ConnectedInbox extends jspb.Message {
  getConnectedInboxSid(): string;
  setConnectedInboxSid(value: string): void;

  getEmailAddress(): string;
  setEmailAddress(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getCheckFrequencyMinutes(): number;
  setCheckFrequencyMinutes(value: number): void;

  getServerName(): string;
  setServerName(value: string): void;

  getServerPort(): number;
  setServerPort(value: number): void;

  hasLastScheduledTime(): boolean;
  clearLastScheduledTime(): void;
  getLastScheduledTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastScheduledTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastChecked(): boolean;
  clearLastChecked(): void;
  getLastChecked(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastChecked(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getPurgeThreshold(): number;
  setPurgeThreshold(value: number): void;

  getEmailSalt(): string;
  setEmailSalt(value: string): void;

  getNumConsecutiveFailures(): number;
  setNumConsecutiveFailures(value: number): void;

  hasLastError(): boolean;
  clearLastError(): void;
  getLastError(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLastError(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasStandbyErrorTime(): boolean;
  clearStandbyErrorTime(): void;
  getStandbyErrorTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStandbyErrorTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastUpdated(): boolean;
  clearLastUpdated(): void;
  getLastUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getMaxMessageSize(): number;
  setMaxMessageSize(value: number): void;

  getMaxMessages(): number;
  setMaxMessages(value: number): void;

  hasGoogleXoauth2RefreshToken(): boolean;
  clearGoogleXoauth2RefreshToken(): void;
  getGoogleXoauth2RefreshToken(): google_protobuf_wrappers_pb.StringValue | undefined;
  setGoogleXoauth2RefreshToken(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasGoogleXoauth2AccessToken(): boolean;
  clearGoogleXoauth2AccessToken(): void;
  getGoogleXoauth2AccessToken(): google_protobuf_wrappers_pb.StringValue | undefined;
  setGoogleXoauth2AccessToken(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasGoogleXoauth2AccessTokenExpiration(): boolean;
  clearGoogleXoauth2AccessTokenExpiration(): void;
  getGoogleXoauth2AccessTokenExpiration(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setGoogleXoauth2AccessTokenExpiration(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getAuthenticationType(): ConnectedInboxAuthenticationTypeMap[keyof ConnectedInboxAuthenticationTypeMap];
  setAuthenticationType(value: ConnectedInboxAuthenticationTypeMap[keyof ConnectedInboxAuthenticationTypeMap]): void;

  hasOauthReferenceId(): boolean;
  clearOauthReferenceId(): void;
  getOauthReferenceId(): ConnectedInboxOAuthConfig | undefined;
  setOauthReferenceId(value?: ConnectedInboxOAuthConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectedInbox.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectedInbox): ConnectedInbox.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConnectedInbox, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectedInbox;
  static deserializeBinaryFromReader(message: ConnectedInbox, reader: jspb.BinaryReader): ConnectedInbox;
}

export namespace ConnectedInbox {
  export type AsObject = {
    connectedInboxSid: string,
    emailAddress: string,
    username: string,
    password: string,
    checkFrequencyMinutes: number,
    serverName: string,
    serverPort: number,
    lastScheduledTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastChecked?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    purgeThreshold: number,
    emailSalt: string,
    numConsecutiveFailures: number,
    lastError?: google_protobuf_wrappers_pb.StringValue.AsObject,
    standbyErrorTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastUpdated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    maxMessageSize: number,
    maxMessages: number,
    googleXoauth2RefreshToken?: google_protobuf_wrappers_pb.StringValue.AsObject,
    googleXoauth2AccessToken?: google_protobuf_wrappers_pb.StringValue.AsObject,
    googleXoauth2AccessTokenExpiration?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    authenticationType: ConnectedInboxAuthenticationTypeMap[keyof ConnectedInboxAuthenticationTypeMap],
    oauthReferenceId?: ConnectedInboxOAuthConfig.AsObject,
  }
}

export class ConnectedInboxOAuthConfig extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): void;

  getRefreshToken(): string;
  setRefreshToken(value: string): void;

  getExpiresAt(): number;
  setExpiresAt(value: number): void;

  getReferenceId(): string;
  setReferenceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectedInboxOAuthConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectedInboxOAuthConfig): ConnectedInboxOAuthConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConnectedInboxOAuthConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectedInboxOAuthConfig;
  static deserializeBinaryFromReader(message: ConnectedInboxOAuthConfig, reader: jspb.BinaryReader): ConnectedInboxOAuthConfig;
}

export namespace ConnectedInboxOAuthConfig {
  export type AsObject = {
    accessToken: string,
    refreshToken: string,
    expiresAt: number,
    referenceId: string,
  }
}

export class VerifiedEmail extends jspb.Message {
  getVerifiedEmailSid(): string;
  setVerifiedEmailSid(value: string): void;

  getEmailAddress(): string;
  setEmailAddress(value: string): void;

  getVerified(): boolean;
  setVerified(value: boolean): void;

  hasCreatedOn(): boolean;
  clearCreatedOn(): void;
  getCreatedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedOn(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasVerifiedOn(): boolean;
  clearVerifiedOn(): void;
  getVerifiedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setVerifiedOn(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getDeleted(): boolean;
  setDeleted(value: boolean): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifiedEmail.AsObject;
  static toObject(includeInstance: boolean, msg: VerifiedEmail): VerifiedEmail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifiedEmail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifiedEmail;
  static deserializeBinaryFromReader(message: VerifiedEmail, reader: jspb.BinaryReader): VerifiedEmail;
}

export namespace VerifiedEmail {
  export type AsObject = {
    verifiedEmailSid: string,
    emailAddress: string,
    verified: boolean,
    createdOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    verifiedOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deleted: boolean,
    description?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class Signature extends jspb.Message {
  getSignatureSid(): string;
  setSignatureSid(value: string): void;

  getSignature(): string;
  setSignature(value: string): void;

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

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Signature.AsObject;
  static toObject(includeInstance: boolean, msg: Signature): Signature.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Signature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Signature;
  static deserializeBinaryFromReader(message: Signature, reader: jspb.BinaryReader): Signature;
}

export namespace Signature {
  export type AsObject = {
    signatureSid: string,
    signature: string,
    dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dateModified?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    name: string,
    description: string,
  }
}

export class OmniProjectComplianceConfig extends jspb.Message {
  hasEmail(): boolean;
  clearEmail(): void;
  getEmail(): OmniComplianceConfig | undefined;
  setEmail(value?: OmniComplianceConfig): void;

  hasSms(): boolean;
  clearSms(): void;
  getSms(): OmniComplianceConfig | undefined;
  setSms(value?: OmniComplianceConfig): void;

  hasWhatsapp(): boolean;
  clearWhatsapp(): void;
  getWhatsapp(): OmniComplianceConfig | undefined;
  setWhatsapp(value?: OmniComplianceConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniProjectComplianceConfig.AsObject;
  static toObject(includeInstance: boolean, msg: OmniProjectComplianceConfig): OmniProjectComplianceConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniProjectComplianceConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniProjectComplianceConfig;
  static deserializeBinaryFromReader(message: OmniProjectComplianceConfig, reader: jspb.BinaryReader): OmniProjectComplianceConfig;
}

export namespace OmniProjectComplianceConfig {
  export type AsObject = {
    email?: OmniComplianceConfig.AsObject,
    sms?: OmniComplianceConfig.AsObject,
    whatsapp?: OmniComplianceConfig.AsObject,
  }
}

export class OmniComplianceAction extends jspb.Message {
  clearKeywordsList(): void;
  getKeywordsList(): Array<string>;
  setKeywordsList(value: Array<string>): void;
  addKeywords(value: string, index?: number): string;

  getConfirmationMessage(): string;
  setConfirmationMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniComplianceAction.AsObject;
  static toObject(includeInstance: boolean, msg: OmniComplianceAction): OmniComplianceAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniComplianceAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniComplianceAction;
  static deserializeBinaryFromReader(message: OmniComplianceAction, reader: jspb.BinaryReader): OmniComplianceAction;
}

export namespace OmniComplianceAction {
  export type AsObject = {
    keywordsList: Array<string>,
    confirmationMessage: string,
  }
}

export class OmniComplianceConfig extends jspb.Message {
  hasOptIn(): boolean;
  clearOptIn(): void;
  getOptIn(): OmniComplianceAction | undefined;
  setOptIn(value?: OmniComplianceAction): void;

  hasOptOut(): boolean;
  clearOptOut(): void;
  getOptOut(): OmniComplianceAction | undefined;
  setOptOut(value?: OmniComplianceAction): void;

  hasHelp(): boolean;
  clearHelp(): void;
  getHelp(): OmniComplianceAction | undefined;
  setHelp(value?: OmniComplianceAction): void;

  hasInformation(): boolean;
  clearInformation(): void;
  getInformation(): OmniComplianceAction | undefined;
  setInformation(value?: OmniComplianceAction): void;

  getScrubListId(): string;
  setScrubListId(value: string): void;

  hasRuleSetId(): boolean;
  clearRuleSetId(): void;
  getRuleSetId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setRuleSetId(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniComplianceConfig.AsObject;
  static toObject(includeInstance: boolean, msg: OmniComplianceConfig): OmniComplianceConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniComplianceConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniComplianceConfig;
  static deserializeBinaryFromReader(message: OmniComplianceConfig, reader: jspb.BinaryReader): OmniComplianceConfig;
}

export namespace OmniComplianceConfig {
  export type AsObject = {
    optIn?: OmniComplianceAction.AsObject,
    optOut?: OmniComplianceAction.AsObject,
    help?: OmniComplianceAction.AsObject,
    information?: OmniComplianceAction.AsObject,
    scrubListId: string,
    ruleSetId?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class WhatsAppNumber extends jspb.Message {
  getNumber(): string;
  setNumber(value: string): void;

  getProvider(): WhatsAppNumberProviderMap[keyof WhatsAppNumberProviderMap];
  setProvider(value: WhatsAppNumberProviderMap[keyof WhatsAppNumberProviderMap]): void;

  getCountryCode(): number;
  setCountryCode(value: number): void;

  getWhatsappNumberSid(): string;
  setWhatsappNumberSid(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  hasDateCreated(): boolean;
  clearDateCreated(): void;
  getDateCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDateModified(): boolean;
  clearDateModified(): void;
  getDateModified(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateModified(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhatsAppNumber.AsObject;
  static toObject(includeInstance: boolean, msg: WhatsAppNumber): WhatsAppNumber.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WhatsAppNumber, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhatsAppNumber;
  static deserializeBinaryFromReader(message: WhatsAppNumber, reader: jspb.BinaryReader): WhatsAppNumber;
}

export namespace WhatsAppNumber {
  export type AsObject = {
    number: string,
    provider: WhatsAppNumberProviderMap[keyof WhatsAppNumberProviderMap],
    countryCode: number,
    whatsappNumberSid: string,
    displayName: string,
    dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dateModified?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export interface SmsNumberTypeMap {
  SMS_SHORT_CODE_TYPE: 0;
  SMS_ALPHANUMERIC_TYPE: 1;
  SMS_NUMBER_TYPE: 2;
}

export const SmsNumberType: SmsNumberTypeMap;

export interface SmsNumberProviderMap {
  UNKNOWN_PROVIDER: 0;
  BANDWIDTH_PROVIDER: 1;
  BURST_SMS_PROVIDER: 2;
  PLIVO_PROVIDER: 3;
  APEIRON_PROVIDER: 4;
  AUSBURST_SMS_PROVIDER: 5;
  MEDIASAT_SMS_PROVIDER: 6;
  TEXTLOCAL_SMS_PROVIDER: 7;
  SMARTPING_SMS_PROVIDER: 8;
}

export const SmsNumberProvider: SmsNumberProviderMap;

export interface OmniCampaignModuleTypeMap {
  MODULE_TYPE_INBOUND: 0;
  MODULE_TYPE_OUTBOUND: 1;
  MODULE_TYPE_MANUAL_APPROVAL: 2;
  MODULE_TYPE_MANUAL: 3;
}

export const OmniCampaignModuleType: OmniCampaignModuleTypeMap;

export interface ChannelTypeMap {
  CHANNEL_TYPE_EMAIL: 0;
  CHANNEL_TYPE_SMS: 1;
  CHANNEL_TYPE_CHAT: 2;
  CHANNEL_TYPE_VOICE: 3;
  CHANNEL_TYPE_WHATSAPP: 4;
}

export const ChannelType: ChannelTypeMap;

export interface OmniCampaignDirectionMap {
  INBOUND: 0;
  OUTBOUND: 1;
}

export const OmniCampaignDirection: OmniCampaignDirectionMap;

export interface OmniCampaignStatusMap {
  SCHEDULING: 0;
  RUNNING: 200;
  PAUSED: 400;
  COMPLETED: 600;
  ARCHIVED: 800;
}

export const OmniCampaignStatus: OmniCampaignStatusMap;

export interface OmniCampaignModuleStatusMap {
  MODULE_PREPARING: 0;
  MODULE_SCHEDULING: 100;
  MODULE_RUNNING: 200;
  MODULE_RUNNING_ERROR: 250;
  MODULE_ERROR_STANDBY: 300;
  MODULE_PAUSED: 400;
  MODULE_RESUMING: 500;
  MODULE_COMPLETED: 600;
  MODULE_ARCHIVED: 700;
}

export const OmniCampaignModuleStatus: OmniCampaignModuleStatusMap;

export interface ConversationStatusMap {
  CONVERSATION_STATUS_NEW: 0;
  CONVERSATION_STATUS_AWAITING_REPLY_FROM_CUSTOMER: 1;
  CONVERSATION_STATUS_AWAITING_REPLY_FROM_AGENT: 2;
  CONVERSATION_STATUS_CLOSED_TIMEOUT: 3;
  CONVERSATION_STATUS_CLOSED_AGENT: 4;
  CONVERSATION_STATUS_CLOSED_CUSTOMER: 5;
  CONVERSATION_STATUS_SUSPENDED_AWAITING_REPLY_FROM_CUSTOMER: 6;
  CONVERSATION_STATUS_AWAITING_ASSIGNMENT: 7;
  CONVERSATION_STATUS_NEWLY_ASSIGNED: 8;
  CONVERSATION_STATUS_WRAP_UP_CUSTOMER: 9;
  CONVERSATION_STATUS_WRAP_UP_TIMEOUT: 10;
  CONVERSATION_STATUS_CLOSED_MANAGER: 11;
  CONVERSATION_STATUS_NEW_PENDING_CUSTOMER_REPLY: 12;
  CONVERSATION_STATUS_FLOW: 13;
  CONVERSATION_STATUS_CLOSED_DUPLICATE_THREAD: 14;
}

export const ConversationStatus: ConversationStatusMap;

export interface AgentAssignmentActiveSearchTypeMap {
  AGENT_ASSIGNMENT_ACTIVE_SEARCH_TYPE_ACTIVE: 0;
  AGENT_ASSIGNMENT_ACTIVE_SEARCH_TYPE_INACTIVE: 1;
  AGENT_ASSIGNMENT_ACTIVE_SEARCH_TYPE_ALL: 2;
}

export const AgentAssignmentActiveSearchType: AgentAssignmentActiveSearchTypeMap;

export interface AgentConversationAssignmentStatusMap {
  ACTIVE_AGENT: 0;
  INACTIVE_AGENT: 1;
}

export const AgentConversationAssignmentStatus: AgentConversationAssignmentStatusMap;

export interface AgentConversationAssignmentTypeMap {
  PRIMARY_AGENT: 0;
  SECONDARY_AGENT: 1;
}

export const AgentConversationAssignmentType: AgentConversationAssignmentTypeMap;

export interface OmniMessageStatusMap {
  OMNI_MESSAGE_CREATED: 0;
  OMNI_INBOUND_MESSAGE_RECEIVED: 16000;
  OMNI_OUTBOUND_MESSAGE_RECEIVED: 16010;
  OMNI_OUTBOUND_MESSAGE_WAITING: 16100;
  OMNI_OUTBOUND_MESSAGE_PROCESSING: 16110;
  OMNI_OUTBOUND_MESSAGE_DNC: 16120;
  OMNI_OUTBOUND_MESSAGE_INVALID: 16130;
  OMNI_OUTBOUND_MESSAGE_ATTACHMENT_ERROR: 16140;
  OMNI_OUTBOUND_MESSAGE_CANCELLED: 16150;
  OMNI_OUTBOUND_MESSAGE_QUEUED: 16160;
  OMNI_OUTBOUND_MESSAGE_DELIVERED: 16170;
  OMNI_OUTBOUND_MESSAGE_DROPPED: 16180;
  OMNI_OUTBOUND_MESSAGE_DEFERRED: 16190;
  OMNI_OUTBOUND_MESSAGE_BOUNCED: 16200;
  OMNI_OUTBOUND_MESSAGE_OPENED: 16210;
  OMNI_OUTBOUND_MESSAGE_CLICKED: 16220;
  OMNI_OUTBOUND_MESSAGE_UNSUBSCRIBED: 16230;
  OMNI_OUTBOUND_MESSAGE_MARKED_AS_SPAM: 16240;
  OMNI_OUTBOUND_MESSAGE_BLOCKED: 16250;
  OMNI_SYSTEM_MESSAGE: 16050;
}

export const OmniMessageStatus: OmniMessageStatusMap;

export interface OmniConversationResultMap {
  NONE: 0;
  ABANDONED: 1;
}

export const OmniConversationResult: OmniConversationResultMap;

export interface OmniTaskStatusMap {
  OMNI_TASK_WAITING: 0;
  OMNI_TASK_WAITING_FOR_QUEUE: 1;
  OMNI_TASK_WAITING_FOR_APPROVAL: 2;
  OMNI_TASK_SENDING: 100;
  OMNI_TASK_SENDING_FAILED: 110;
  OMNI_TASK_SENDING_INCOMPLETE: 111;
  OMNI_TASK_SENT: 120;
  OMNI_TASK_RECEIVED: 130;
}

export const OmniTaskStatus: OmniTaskStatusMap;

export interface OmniSenderTypeMap {
  OMNI_SENDER_TYPE_AGENT: 0;
  OMNI_SENDER_TYPE_CUSTOMER: 1;
  OMNI_SENDER_TYPE_SYSTEM: 2;
  OMNI_SENDER_TYPE_MANAGER: 3;
  OMNI_SENDER_TYPE_FLOW: 4;
}

export const OmniSenderType: OmniSenderTypeMap;

export interface ConnectedInboxAuthenticationTypeMap {
  CONNECTED_INBOX_AUTHENTICATION_TYPE_PASSWORD: 0;
  CONNECTED_INBOX_AUTHENTICATION_TYPE_GOOGLE_XOAUTH2: 1;
  CONNECTED_INBOX_AUTHENTICATION_TYPE_MICROSOFT_365: 2;
}

export const ConnectedInboxAuthenticationType: ConnectedInboxAuthenticationTypeMap;

export interface ConversationStateChangeTimerNameMap {
  CONVERSATION_STATE_CHANGE_TIMER_NAME_WAIT: 0;
  CONVERSATION_STATE_CHANGE_TIMER_NAME_TALK: 100;
  CONVERSATION_STATE_CHANGE_TIMER_NAME_TALK_INITIAL_AGENT_RESPONSE: 101;
  CONVERSATION_STATE_CHANGE_TIMER_NAME_TALK_AGENT_RESPONSE: 102;
  CONVERSATION_STATE_CHANGE_TIMER_NAME_TALK_CUSTOMER_RESPONSE: 103;
  CONVERSATION_STATE_CHANGE_TIMER_NAME_TALK_SUSPENDED: 104;
  CONVERSATION_STATE_CHANGE_TIMER_NAME_WRAP_UP: 200;
  CONVERSATION_STATE_CHANGE_TIMER_NAME_IDLE: 300;
}

export const ConversationStateChangeTimerName: ConversationStateChangeTimerNameMap;

export interface OmniConversationMetadataNameMap {
  AGENT_RESPONSE_TIME: 0;
  CUSTOMER_WAIT_TIME: 1;
  HANDLE_TIME: 2;
  TRANSCRIPT_PATH: 3;
  OMNI_CONVERSATION_METADATA_NAME_FLOW_DATA: 4;
  OMNI_CONVERSATION_METADATA_NAME_TIMER_WAIT: 10;
  OMNI_CONVERSATION_METADATA_NAME_TIMER_TALK: 100;
  OMNI_CONVERSATION_METADATA_NAME_TIMER_TALK_INITIAL_AGENT_RESPONSE: 101;
  OMNI_CONVERSATION_METADATA_NAME_TIMER_TALK_AGENT_RESPONSE: 102;
  OMNI_CONVERSATION_METADATA_NAME_TIMER_TALK_CUSTOMER_RESPONSE: 103;
  OMNI_CONVERSATION_METADATA_NAME_TIMER_TALK_SUSPENDED: 104;
  OMNI_CONVERSATION_METADATA_NAME_TIMER_WRAP_UP: 200;
  OMNI_CONVERSATION_METADATA_NAME_TIMER_IDLE: 300;
}

export const OmniConversationMetadataName: OmniConversationMetadataNameMap;

export interface ProjectStatusMap {
  PROJECT_STATUS_UNKNOWN: 0;
  PROJECT_STATUS_OPEN: 17000;
  PROJECT_STATUS_CLOSED: 17010;
}

export const ProjectStatus: ProjectStatusMap;

export interface CampaignStatusMap {
  CAMPAIGN_STATUS_SCHEDULED: 0;
  CAMPAIGN_STATUS_RUNNING: 1;
  CAMPAIGN_STATUS_PAUSED: 2;
  CAMPAIGN_STATUS_COMPLETED: 3;
  CAMPAIGN_STATUS_CANCELED: 4;
  CAMPAIGN_STATUS_ERROR_PAUSED: 5;
}

export const CampaignStatus: CampaignStatusMap;

export interface CampaignDirectionMap {
  CAMPAIGN_DIRECTION_INBOUND: 0;
  CAMPAIGN_DIRECTION_OUTBOUND: 1;
}

export const CampaignDirection: CampaignDirectionMap;

export interface WhatsAppNumberProviderMap {
  UNKNOWN_WHATSAPP_PROVIDER: 0;
  WHATSAPP_SMS_PROVIDER: 1;
}

export const WhatsAppNumberProvider: WhatsAppNumberProviderMap;

