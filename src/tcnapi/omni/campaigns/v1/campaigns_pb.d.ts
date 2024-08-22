// package: tcnapi.omni.campaigns.v1
// file: tcnapi/omni/campaigns/v1/campaigns.proto

import * as jspb from "google-protobuf";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../google/api/resource_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class Campaign extends jspb.Message {
  getName(): number;
  setName(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasStartDate(): boolean;
  clearStartDate(): void;
  getStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getState(): Campaign.CampaignStateMap[keyof Campaign.CampaignStateMap];
  setState(value: Campaign.CampaignStateMap[keyof Campaign.CampaignStateMap]): void;

  getChannelType(): Campaign.ChannelTypeMap[keyof Campaign.ChannelTypeMap];
  setChannelType(value: Campaign.ChannelTypeMap[keyof Campaign.ChannelTypeMap]): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getProjectSid(): number;
  setProjectSid(value: number): void;

  hasTimeZone(): boolean;
  clearTimeZone(): void;
  getTimeZone(): TimeZoneWrapper | undefined;
  setTimeZone(value?: TimeZoneWrapper): void;

  getShortenUrl(): boolean;
  setShortenUrl(value: boolean): void;

  clearModuleList(): void;
  getModuleList(): Array<Campaign.Module>;
  setModuleList(value: Array<Campaign.Module>): void;
  addModule(value?: Campaign.Module, index?: number): Campaign.Module;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Campaign.AsObject;
  static toObject(includeInstance: boolean, msg: Campaign): Campaign.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Campaign, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Campaign;
  static deserializeBinaryFromReader(message: Campaign, reader: jspb.BinaryReader): Campaign;
}

export namespace Campaign {
  export type AsObject = {
    name: number,
    title: string,
    description: string,
    startDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    state: Campaign.CampaignStateMap[keyof Campaign.CampaignStateMap],
    channelType: Campaign.ChannelTypeMap[keyof Campaign.ChannelTypeMap],
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    projectSid: number,
    timeZone?: TimeZoneWrapper.AsObject,
    shortenUrl: boolean,
    moduleList: Array<Campaign.Module.AsObject>,
  }

  export class Module extends jspb.Message {
    getCampaignModuleSid(): number;
    setCampaignModuleSid(value: number): void;

    getCampaignSid(): number;
    setCampaignSid(value: number): void;

    getModuleType(): Campaign.Module.ModuleTypeMap[keyof Campaign.Module.ModuleTypeMap];
    setModuleType(value: Campaign.Module.ModuleTypeMap[keyof Campaign.Module.ModuleTypeMap]): void;

    getState(): Campaign.Module.ModuleStateMap[keyof Campaign.Module.ModuleStateMap];
    setState(value: Campaign.Module.ModuleStateMap[keyof Campaign.Module.ModuleStateMap]): void;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): Campaign.Module.ModuleConfig | undefined;
    setConfig(value?: Campaign.Module.ModuleConfig): void;

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
    getDetails(): Campaign.Module.Details | undefined;
    setDetails(value?: Campaign.Module.Details): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Module.AsObject;
    static toObject(includeInstance: boolean, msg: Module): Module.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Module, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Module;
    static deserializeBinaryFromReader(message: Module, reader: jspb.BinaryReader): Module;
  }

  export namespace Module {
    export type AsObject = {
      campaignModuleSid: number,
      campaignSid: number,
      moduleType: Campaign.Module.ModuleTypeMap[keyof Campaign.Module.ModuleTypeMap],
      state: Campaign.Module.ModuleStateMap[keyof Campaign.Module.ModuleStateMap],
      config?: Campaign.Module.ModuleConfig.AsObject,
      dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      dateModified?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      scheduledStopDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      actualStopDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      hoursOfOperation?: WeekdayTimeRange.AsObject,
      details?: Campaign.Module.Details.AsObject,
    }

    export class ModuleConfig extends jspb.Message {
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
      getColorProperties(): Campaign.Module.ModuleConfig.ChatColorProperties | undefined;
      setColorProperties(value?: Campaign.Module.ModuleConfig.ChatColorProperties): void;

      hasConnectedInboxSid(): boolean;
      clearConnectedInboxSid(): void;
      getConnectedInboxSid(): Int64Id | undefined;
      setConnectedInboxSid(value?: Int64Id): void;

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
      getSmsNumber(): Campaign.Module.ModuleConfig.SmsNumber | undefined;
      setSmsNumber(value?: Campaign.Module.ModuleConfig.SmsNumber): void;

      hasHeader(): boolean;
      clearHeader(): void;
      getHeader(): Campaign.Module.ModuleConfig.ChatHeader | undefined;
      setHeader(value?: Campaign.Module.ModuleConfig.ChatHeader): void;

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
      getUnsubscribeLinkSid(): Int64Id | undefined;
      setUnsubscribeLinkSid(value?: Int64Id): void;

      hasVerifiedEmailSid(): boolean;
      clearVerifiedEmailSid(): void;
      getVerifiedEmailSid(): Int64Id | undefined;
      setVerifiedEmailSid(value?: Int64Id): void;

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
      getFlowId(): Int64Id | undefined;
      setFlowId(value?: Int64Id): void;

      hasSkills(): boolean;
      clearSkills(): void;
      getSkills(): Campaign.Module.ModuleConfig.OmniConversationSkills | undefined;
      setSkills(value?: Campaign.Module.ModuleConfig.OmniConversationSkills): void;

      hasWhatsappNumber(): boolean;
      clearWhatsappNumber(): void;
      getWhatsappNumber(): Campaign.Module.ModuleConfig.WhatsAppNumber | undefined;
      setWhatsappNumber(value?: Campaign.Module.ModuleConfig.WhatsAppNumber): void;

      getProviderMetadataMap(): jspb.Map<string, string>;
      clearProviderMetadataMap(): void;
      getCountryCode(): number;
      setCountryCode(value: number): void;

      getPostalCodeField(): string;
      setPostalCodeField(value: string): void;

      hasTimeoutMessageConfig(): boolean;
      clearTimeoutMessageConfig(): void;
      getTimeoutMessageConfig(): Campaign.Module.ModuleConfig.ConversationTimeoutMessageConfig | undefined;
      setTimeoutMessageConfig(value?: Campaign.Module.ModuleConfig.ConversationTimeoutMessageConfig): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ModuleConfig.AsObject;
      static toObject(includeInstance: boolean, msg: ModuleConfig): ModuleConfig.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ModuleConfig, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ModuleConfig;
      static deserializeBinaryFromReader(message: ModuleConfig, reader: jspb.BinaryReader): ModuleConfig;
    }

    export namespace ModuleConfig {
      export type AsObject = {
        apiKeyPrimary?: google_protobuf_wrappers_pb.StringValue.AsObject,
        apiKeySecondary?: google_protobuf_wrappers_pb.StringValue.AsObject,
        colorProperties?: Campaign.Module.ModuleConfig.ChatColorProperties.AsObject,
        connectedInboxSid?: Int64Id.AsObject,
        dispositionsList: Array<Disposition.AsObject>,
        email?: google_protobuf_wrappers_pb.StringValue.AsObject,
        messageBody?: google_protobuf_wrappers_pb.StringValue.AsObject,
        emailSubject?: google_protobuf_wrappers_pb.StringValue.AsObject,
        smsNumber?: Campaign.Module.ModuleConfig.SmsNumber.AsObject,
        header?: Campaign.Module.ModuleConfig.ChatHeader.AsObject,
        slaTimeouts?: SLATimeouts.AsObject,
        sendsPerHour?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        unsubscribeLinkSid?: Int64Id.AsObject,
        verifiedEmailSid?: Int64Id.AsObject,
        stopOnTaskDeplete?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        attachmentsList: Array<OmniAttachment.AsObject>,
        complianceRuleSetId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        paymentPortalIdsList: Array<string>,
        flowId?: Int64Id.AsObject,
        skills?: Campaign.Module.ModuleConfig.OmniConversationSkills.AsObject,
        whatsappNumber?: Campaign.Module.ModuleConfig.WhatsAppNumber.AsObject,
        providerMetadataMap: Array<[string, string]>,
        countryCode: number,
        postalCodeField: string,
        timeoutMessageConfig?: Campaign.Module.ModuleConfig.ConversationTimeoutMessageConfig.AsObject,
      }

      export class ChatColorProperties extends jspb.Message {
        getPrimaryColor(): string;
        setPrimaryColor(value: string): void;

        getHeaderTextColor(): string;
        setHeaderTextColor(value: string): void;

        getParagraphTextColor(): string;
        setParagraphTextColor(value: string): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ChatColorProperties.AsObject;
        static toObject(includeInstance: boolean, msg: ChatColorProperties): ChatColorProperties.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ChatColorProperties, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ChatColorProperties;
        static deserializeBinaryFromReader(message: ChatColorProperties, reader: jspb.BinaryReader): ChatColorProperties;
      }

      export namespace ChatColorProperties {
        export type AsObject = {
          primaryColor: string,
          headerTextColor: string,
          paragraphTextColor: string,
        }
      }

      export class ChatHeader extends jspb.Message {
        getHeader(): string;
        setHeader(value: string): void;

        getSubheader(): string;
        setSubheader(value: string): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ChatHeader.AsObject;
        static toObject(includeInstance: boolean, msg: ChatHeader): ChatHeader.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ChatHeader, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ChatHeader;
        static deserializeBinaryFromReader(message: ChatHeader, reader: jspb.BinaryReader): ChatHeader;
      }

      export namespace ChatHeader {
        export type AsObject = {
          header: string,
          subheader: string,
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

      export class SmsNumber extends jspb.Message {
        getNumber(): string;
        setNumber(value: string): void;

        getType(): Campaign.Module.ModuleConfig.SmsNumber.SmsNumberTypeMap[keyof Campaign.Module.ModuleConfig.SmsNumber.SmsNumberTypeMap];
        setType(value: Campaign.Module.ModuleConfig.SmsNumber.SmsNumberTypeMap[keyof Campaign.Module.ModuleConfig.SmsNumber.SmsNumberTypeMap]): void;

        getProvider(): Campaign.Module.ModuleConfig.SmsNumber.SmsNumberProviderMap[keyof Campaign.Module.ModuleConfig.SmsNumber.SmsNumberProviderMap];
        setProvider(value: Campaign.Module.ModuleConfig.SmsNumber.SmsNumberProviderMap[keyof Campaign.Module.ModuleConfig.SmsNumber.SmsNumberProviderMap]): void;

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
          type: Campaign.Module.ModuleConfig.SmsNumber.SmsNumberTypeMap[keyof Campaign.Module.ModuleConfig.SmsNumber.SmsNumberTypeMap],
          provider: Campaign.Module.ModuleConfig.SmsNumber.SmsNumberProviderMap[keyof Campaign.Module.ModuleConfig.SmsNumber.SmsNumberProviderMap],
          countryCode: number,
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
      }

      export class WhatsAppNumber extends jspb.Message {
        getNumber(): string;
        setNumber(value: string): void;

        getProvider(): Campaign.Module.ModuleConfig.WhatsAppNumber.WhatsAppNumberProviderMap[keyof Campaign.Module.ModuleConfig.WhatsAppNumber.WhatsAppNumberProviderMap];
        setProvider(value: Campaign.Module.ModuleConfig.WhatsAppNumber.WhatsAppNumberProviderMap[keyof Campaign.Module.ModuleConfig.WhatsAppNumber.WhatsAppNumberProviderMap]): void;

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
          provider: Campaign.Module.ModuleConfig.WhatsAppNumber.WhatsAppNumberProviderMap[keyof Campaign.Module.ModuleConfig.WhatsAppNumber.WhatsAppNumberProviderMap],
          countryCode: number,
          whatsappNumberSid: string,
          displayName: string,
          dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
          dateModified?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        }

        export interface WhatsAppNumberProviderMap {
          UNKNOWN_WHATSAPP_PROVIDER: 0;
          WHATSAPP_SMS_PROVIDER: 1;
        }

        export const WhatsAppNumberProvider: WhatsAppNumberProviderMap;
      }

      export class ConversationTimeoutMessageConfig extends jspb.Message {
        getIsDisabled(): boolean;
        setIsDisabled(value: boolean): void;

        getMsg(): string;
        setMsg(value: string): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ConversationTimeoutMessageConfig.AsObject;
        static toObject(includeInstance: boolean, msg: ConversationTimeoutMessageConfig): ConversationTimeoutMessageConfig.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ConversationTimeoutMessageConfig, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ConversationTimeoutMessageConfig;
        static deserializeBinaryFromReader(message: ConversationTimeoutMessageConfig, reader: jspb.BinaryReader): ConversationTimeoutMessageConfig;
      }

      export namespace ConversationTimeoutMessageConfig {
        export type AsObject = {
          isDisabled: boolean,
          msg: string,
        }
      }
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

      hasCanceledTaskCount(): boolean;
      clearCanceledTaskCount(): void;
      getCanceledTaskCount(): google_protobuf_wrappers_pb.Int64Value | undefined;
      setCanceledTaskCount(value?: google_protobuf_wrappers_pb.Int64Value): void;

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
        canceledTaskCount?: google_protobuf_wrappers_pb.Int64Value.AsObject,
      }
    }

    export interface ModuleStateMap {
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

    export const ModuleState: ModuleStateMap;

    export interface ModuleTypeMap {
      MODULE_TYPE_INBOUND: 0;
      MODULE_TYPE_OUTBOUND: 1;
      MODULE_TYPE_MANUAL_APPROVAL: 2;
      MODULE_TYPE_MANUAL: 3;
    }

    export const ModuleType: ModuleTypeMap;
  }

  export interface ChannelTypeMap {
    CHANNEL_TYPE_EMAIL: 0;
    CHANNEL_TYPE_SMS: 1;
    CHANNEL_TYPE_CHAT: 2;
    CHANNEL_TYPE_VOICE: 3;
    CHANNEL_TYPE_WHATSAPP: 4;
  }

  export const ChannelType: ChannelTypeMap;

  export interface CampaignStateMap {
    SCHEDULING: 0;
    RUNNING: 200;
    PAUSED: 400;
    COMPLETED: 600;
    ARCHIVED: 800;
  }

  export const CampaignState: CampaignStateMap;
}

export class TimeZoneWrapper extends jspb.Message {
  getValue(): TimeZoneMap[keyof TimeZoneMap];
  setValue(value: TimeZoneMap[keyof TimeZoneMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeZoneWrapper.AsObject;
  static toObject(includeInstance: boolean, msg: TimeZoneWrapper): TimeZoneWrapper.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimeZoneWrapper, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeZoneWrapper;
  static deserializeBinaryFromReader(message: TimeZoneWrapper, reader: jspb.BinaryReader): TimeZoneWrapper;
}

export namespace TimeZoneWrapper {
  export type AsObject = {
    value: TimeZoneMap[keyof TimeZoneMap],
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
  getStartDay(): Weekday.EnumMap[keyof Weekday.EnumMap];
  setStartDay(value: Weekday.EnumMap[keyof Weekday.EnumMap]): void;

  getStartHour(): number;
  setStartHour(value: number): void;

  getStartMinute(): number;
  setStartMinute(value: number): void;

  getEndDay(): Weekday.EnumMap[keyof Weekday.EnumMap];
  setEndDay(value: Weekday.EnumMap[keyof Weekday.EnumMap]): void;

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
    startDay: Weekday.EnumMap[keyof Weekday.EnumMap],
    startHour: number,
    startMinute: number,
    endDay: Weekday.EnumMap[keyof Weekday.EnumMap],
    endHour: number,
    endMinute: number,
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

export class Weekday extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Weekday.AsObject;
  static toObject(includeInstance: boolean, msg: Weekday): Weekday.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Weekday, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Weekday;
  static deserializeBinaryFromReader(message: Weekday, reader: jspb.BinaryReader): Weekday;
}

export namespace Weekday {
  export type AsObject = {
  }

  export interface EnumMap {
    SUNDAY: 0;
    MONDAY: 1;
    TUESDAY: 2;
    WEDNESDAY: 3;
    THURSDAY: 4;
    FRIDAY: 5;
    SATURDAY: 6;
  }

  export const Enum: EnumMap;
}

export class Int64Id extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Int64Id.AsObject;
  static toObject(includeInstance: boolean, msg: Int64Id): Int64Id.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Int64Id, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Int64Id;
  static deserializeBinaryFromReader(message: Int64Id, reader: jspb.BinaryReader): Int64Id;
}

export namespace Int64Id {
  export type AsObject = {
    value: string,
  }
}

export interface TimeZoneMap {
  TIME_ZONE_AMERICA_PUERTO_RICO: 0;
  TIME_ZONE_AMERICA_NEW_YORK: 1;
  TIME_ZONE_AMERICA_INDIANAPOLIS: 2;
  TIME_ZONE_AMERICA_CHICAGO: 3;
  TIME_ZONE_AMERICA_PHOENIX: 4;
  TIME_ZONE_AMERICA_DENVER: 5;
  TIME_ZONE_AMERICA_LOS_ANGELES: 6;
  TIME_ZONE_AMERICA_ANCHORAGE: 7;
  TIME_ZONE_ASIA_MANILA: 8;
  TIME_ZONE_ASIA_CALCUTTA: 9;
  TIME_ZONE_ASIA_COLOMBO: 10;
  TIME_ZONE_PACIFIC_HONOLULU: 11;
  TIME_ZONE_CANADA_NEWFOUNDLAND: 12;
  TIME_ZONE_CANADA_ATLANTIC: 13;
  TIME_ZONE_CANADA_CENTRAL: 14;
  TIME_ZONE_CANADA_EAST_SASKATCHEWAN: 15;
  TIME_ZONE_CANADA_EASTERN: 16;
  TIME_ZONE_CANADA_MOUNTAIN: 17;
  TIME_ZONE_CANADA_PACIFIC: 18;
  TIME_ZONE_CANADA_SASKATCHEWAN: 19;
  TIME_ZONE_CANADA_YUKON: 20;
  TIME_ZONE_ETC_GREENWICH: 21;
  TIME_ZONE_ETC_UNIVERSAL: 22;
  TIME_ZONE_EUROPE_LONDON: 23;
  TIME_ZONE_EUROPE_MADRID: 24;
  TIME_ZONE_EUROPE_BERLIN: 25;
  TIME_ZONE_EUROPE_BUCHAREST: 26;
  TIME_ZONE_AMERICA_MEXICO_CITY: 27;
  TIME_ZONE_MEXICO_BAJASUR: 28;
  TIME_ZONE_MEXICO_BAJANORTE: 29;
  TIME_ZONE_BRAZIL_ACRE: 30;
  TIME_ZONE_BRAZIL_WEST: 31;
  TIME_ZONE_BRAZIL_EAST: 32;
  TIME_ZONE_BRAZIL_DENORONHA: 33;
  TIME_ZONE_AUSTRALIA_DARWIN: 34;
  TIME_ZONE_AUSTRALIA_ADELAIDE: 35;
  TIME_ZONE_AUSTRALIA_SYDNEY: 36;
  TIME_ZONE_AUSTRALIA_BRISBANE: 37;
  TIME_ZONE_AUSTRALIA_MELBOURNE: 38;
  TIME_ZONE_AUSTRALIA_PERTH: 39;
  TIME_ZONE_PACIFIC_AUCKLAND: 40;
  TIME_ZONE_PACIFIC_CHATHAM: 41;
  TIME_ZONE_ASIA_SINGAPORE: 42;
  TIME_ZONE_ASIA_JAPAN: 43;
}

export const TimeZone: TimeZoneMap;

