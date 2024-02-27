// package: api.commons.org
// file: api/commons/org/preferences.proto

import * as jspb from "google-protobuf";
import * as api_commons_ana_pb from "../../../api/commons/ana_pb";
import * as api_commons_country_pb from "../../../api/commons/country_pb";
import * as api_commons_lms_pb from "../../../api/commons/lms_pb";
import * as api_commons_org_pb from "../../../api/commons/org_pb";
import * as api_commons_org_preferences_pb from "../../../api/commons/org_preferences_pb";

export class OrganizationPreferences extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getDefaultCountry(): api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap];
  setDefaultCountry(value: api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap]): void;

  getTimeZone(): api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap];
  setTimeZone(value: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap]): void;

  getDisplayLanguage(): api_commons_org_pb.DisplayLanguageMap[keyof api_commons_org_pb.DisplayLanguageMap];
  setDisplayLanguage(value: api_commons_org_pb.DisplayLanguageMap[keyof api_commons_org_pb.DisplayLanguageMap]): void;

  getOperatorDisplayLanguage(): string;
  setOperatorDisplayLanguage(value: string): void;

  getUseScriptDirectionRtl(): boolean;
  setUseScriptDirectionRtl(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationPreferences.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationPreferences): OrganizationPreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrganizationPreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationPreferences;
  static deserializeBinaryFromReader(message: OrganizationPreferences, reader: jspb.BinaryReader): OrganizationPreferences;
}

export namespace OrganizationPreferences {
  export type AsObject = {
    orgId: string,
    defaultCountry: api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap],
    timeZone: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap],
    displayLanguage: api_commons_org_pb.DisplayLanguageMap[keyof api_commons_org_pb.DisplayLanguageMap],
    operatorDisplayLanguage: string,
    useScriptDirectionRtl: boolean,
  }
}

export class AgentPreferences extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getDefaultAgentDialIn(): string;
  setDefaultAgentDialIn(value: string): void;

  getPbxExtensionLength(): number;
  setPbxExtensionLength(value: number): void;

  getDefaultSoftphoneVolumeIn(): number;
  setDefaultSoftphoneVolumeIn(value: number): void;

  getDefaultSoftphoneVolumeOut(): number;
  setDefaultSoftphoneVolumeOut(value: number): void;

  clearConfigDialInNumbersList(): void;
  getConfigDialInNumbersList(): Array<string>;
  setConfigDialInNumbersList(value: Array<string>): void;
  addConfigDialInNumbers(value: string, index?: number): string;

  clearClientDialInNumbersList(): void;
  getClientDialInNumbersList(): Array<string>;
  setClientDialInNumbersList(value: Array<string>): void;
  addClientDialInNumbers(value: string, index?: number): string;

  getManualDialCallerIdPrivacy(): boolean;
  setManualDialCallerIdPrivacy(value: boolean): void;

  getUseManualDialCallerIdPrivacy(): boolean;
  setUseManualDialCallerIdPrivacy(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentPreferences.AsObject;
  static toObject(includeInstance: boolean, msg: AgentPreferences): AgentPreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentPreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentPreferences;
  static deserializeBinaryFromReader(message: AgentPreferences, reader: jspb.BinaryReader): AgentPreferences;
}

export namespace AgentPreferences {
  export type AsObject = {
    orgId: string,
    defaultAgentDialIn: string,
    pbxExtensionLength: number,
    defaultSoftphoneVolumeIn: number,
    defaultSoftphoneVolumeOut: number,
    configDialInNumbersList: Array<string>,
    clientDialInNumbersList: Array<string>,
    manualDialCallerIdPrivacy: boolean,
    useManualDialCallerIdPrivacy: boolean,
  }
}

export class ContactPreferences extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  hasDefaultContactImportFormat(): boolean;
  clearDefaultContactImportFormat(): void;
  getDefaultContactImportFormat(): ImportFormat | undefined;
  setDefaultContactImportFormat(value?: ImportFormat): void;

  getUseContactImportFormat(): boolean;
  setUseContactImportFormat(value: boolean): void;

  hasDefaultContactAreaCode(): boolean;
  clearDefaultContactAreaCode(): void;
  getDefaultContactAreaCode(): ContactAreaCode | undefined;
  setDefaultContactAreaCode(value?: ContactAreaCode): void;

  getUseContactAreaCode(): boolean;
  setUseContactAreaCode(value: boolean): void;

  getDiscardRecordDefaultAbsentNumbersHandling(): boolean;
  setDiscardRecordDefaultAbsentNumbersHandling(value: boolean): void;

  getDefaultContactsImportRandomization(): boolean;
  setDefaultContactsImportRandomization(value: boolean): void;

  getDefaultEmailColumn(): string;
  setDefaultEmailColumn(value: string): void;

  getDefaultDuplicateHandling(): api_commons_org_pb.DefaultDuplicateHandlingMap[keyof api_commons_org_pb.DefaultDuplicateHandlingMap];
  setDefaultDuplicateHandling(value: api_commons_org_pb.DefaultDuplicateHandlingMap[keyof api_commons_org_pb.DefaultDuplicateHandlingMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactPreferences.AsObject;
  static toObject(includeInstance: boolean, msg: ContactPreferences): ContactPreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactPreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactPreferences;
  static deserializeBinaryFromReader(message: ContactPreferences, reader: jspb.BinaryReader): ContactPreferences;
}

export namespace ContactPreferences {
  export type AsObject = {
    orgId: string,
    defaultContactImportFormat?: ImportFormat.AsObject,
    useContactImportFormat: boolean,
    defaultContactAreaCode?: ContactAreaCode.AsObject,
    useContactAreaCode: boolean,
    discardRecordDefaultAbsentNumbersHandling: boolean,
    defaultContactsImportRandomization: boolean,
    defaultEmailColumn: string,
    defaultDuplicateHandling: api_commons_org_pb.DefaultDuplicateHandlingMap[keyof api_commons_org_pb.DefaultDuplicateHandlingMap],
  }
}

export class ImportFormat extends jspb.Message {
  hasStandard(): boolean;
  clearStandard(): void;
  getStandard(): api_commons_org_pb.StandardImportFormatMap[keyof api_commons_org_pb.StandardImportFormatMap];
  setStandard(value: api_commons_org_pb.StandardImportFormatMap[keyof api_commons_org_pb.StandardImportFormatMap]): void;

  hasCustom(): boolean;
  clearCustom(): void;
  getCustom(): CustomImportFormat | undefined;
  setCustom(value?: CustomImportFormat): void;

  getFormatCase(): ImportFormat.FormatCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportFormat.AsObject;
  static toObject(includeInstance: boolean, msg: ImportFormat): ImportFormat.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImportFormat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportFormat;
  static deserializeBinaryFromReader(message: ImportFormat, reader: jspb.BinaryReader): ImportFormat;
}

export namespace ImportFormat {
  export type AsObject = {
    standard: api_commons_org_pb.StandardImportFormatMap[keyof api_commons_org_pb.StandardImportFormatMap],
    custom?: CustomImportFormat.AsObject,
  }

  export enum FormatCase {
    FORMAT_NOT_SET = 0,
    STANDARD = 1,
    CUSTOM = 2,
  }
}

export class CustomImportFormat extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomImportFormat.AsObject;
  static toObject(includeInstance: boolean, msg: CustomImportFormat): CustomImportFormat.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomImportFormat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomImportFormat;
  static deserializeBinaryFromReader(message: CustomImportFormat, reader: jspb.BinaryReader): CustomImportFormat;
}

export namespace CustomImportFormat {
  export type AsObject = {
    id: number,
    name: string,
  }
}

export class ContactAreaCode extends jspb.Message {
  hasCfd(): boolean;
  clearCfd(): void;
  getCfd(): ContactFieldDescription | undefined;
  setCfd(value?: ContactFieldDescription): void;

  hasCustom(): boolean;
  clearCustom(): void;
  getCustom(): number;
  setCustom(value: number): void;

  getAreaCodeCase(): ContactAreaCode.AreaCodeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactAreaCode.AsObject;
  static toObject(includeInstance: boolean, msg: ContactAreaCode): ContactAreaCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactAreaCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactAreaCode;
  static deserializeBinaryFromReader(message: ContactAreaCode, reader: jspb.BinaryReader): ContactAreaCode;
}

export namespace ContactAreaCode {
  export type AsObject = {
    cfd?: ContactFieldDescription.AsObject,
    custom: number,
  }

  export enum AreaCodeCase {
    AREA_CODE_NOT_SET = 0,
    CFD = 1,
    CUSTOM = 2,
  }
}

export class ContactFieldDescription extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getFieldName(): string;
  setFieldName(value: string): void;

  getIsPhone(): boolean;
  setIsPhone(value: boolean): void;

  getDisplayFormatString(): string;
  setDisplayFormatString(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactFieldDescription.AsObject;
  static toObject(includeInstance: boolean, msg: ContactFieldDescription): ContactFieldDescription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactFieldDescription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactFieldDescription;
  static deserializeBinaryFromReader(message: ContactFieldDescription, reader: jspb.BinaryReader): ContactFieldDescription;
}

export namespace ContactFieldDescription {
  export type AsObject = {
    id: number,
    fieldName: string,
    isPhone: boolean,
    displayFormatString: string,
  }
}

export class AuthenticationPreferences extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getAuthorizationViaIp(): boolean;
  setAuthorizationViaIp(value: boolean): void;

  clearAllowedIpsList(): void;
  getAllowedIpsList(): Array<string>;
  setAllowedIpsList(value: Array<string>): void;
  addAllowedIps(value: string, index?: number): string;

  getAgentApiKey(): string;
  setAgentApiKey(value: string): void;

  getEnable2fa(): boolean;
  setEnable2fa(value: boolean): void;

  getBlockUnverifiedUsers(): boolean;
  setBlockUnverifiedUsers(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationPreferences.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationPreferences): AuthenticationPreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthenticationPreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationPreferences;
  static deserializeBinaryFromReader(message: AuthenticationPreferences, reader: jspb.BinaryReader): AuthenticationPreferences;
}

export namespace AuthenticationPreferences {
  export type AsObject = {
    orgId: string,
    authorizationViaIp: boolean,
    allowedIpsList: Array<string>,
    agentApiKey: string,
    enable2fa: boolean,
    blockUnverifiedUsers: boolean,
  }
}

export class WebhookPreferences extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getPushUrlsEnabled(): boolean;
  setPushUrlsEnabled(value: boolean): void;

  getCallResultPushUrl(): string;
  setCallResultPushUrl(value: string): void;

  getAgentResponsePushUrl(): string;
  setAgentResponsePushUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebhookPreferences.AsObject;
  static toObject(includeInstance: boolean, msg: WebhookPreferences): WebhookPreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebhookPreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebhookPreferences;
  static deserializeBinaryFromReader(message: WebhookPreferences, reader: jspb.BinaryReader): WebhookPreferences;
}

export namespace WebhookPreferences {
  export type AsObject = {
    orgId: string,
    pushUrlsEnabled: boolean,
    callResultPushUrl: string,
    agentResponsePushUrl: string,
  }
}

export class DashboardPreferences extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getDefaultInfoView(): boolean;
  setDefaultInfoView(value: boolean): void;

  getDefaultTableInclusion(): boolean;
  setDefaultTableInclusion(value: boolean): void;

  getDefaultInfoGrouping(): boolean;
  setDefaultInfoGrouping(value: boolean): void;

  getDefaultSmallIcon(): boolean;
  setDefaultSmallIcon(value: boolean): void;

  getDefaultDescendingSort(): boolean;
  setDefaultDescendingSort(value: boolean): void;

  getTableTemplateSid(): number;
  setTableTemplateSid(value: number): void;

  hasDefaultCallTypes(): boolean;
  clearDefaultCallTypes(): void;
  getDefaultCallTypes(): IncludedCallTypes | undefined;
  setDefaultCallTypes(value?: IncludedCallTypes): void;

  getDefaultInfoSortByValue(): api_commons_org_pb.AgentInfoSortByMap[keyof api_commons_org_pb.AgentInfoSortByMap];
  setDefaultInfoSortByValue(value: api_commons_org_pb.AgentInfoSortByMap[keyof api_commons_org_pb.AgentInfoSortByMap]): void;

  hasDefaultBargeInFiltering(): boolean;
  clearDefaultBargeInFiltering(): void;
  getDefaultBargeInFiltering(): BargeInFiltering | undefined;
  setDefaultBargeInFiltering(value?: BargeInFiltering): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashboardPreferences.AsObject;
  static toObject(includeInstance: boolean, msg: DashboardPreferences): DashboardPreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashboardPreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashboardPreferences;
  static deserializeBinaryFromReader(message: DashboardPreferences, reader: jspb.BinaryReader): DashboardPreferences;
}

export namespace DashboardPreferences {
  export type AsObject = {
    orgId: string,
    defaultInfoView: boolean,
    defaultTableInclusion: boolean,
    defaultInfoGrouping: boolean,
    defaultSmallIcon: boolean,
    defaultDescendingSort: boolean,
    tableTemplateSid: number,
    defaultCallTypes?: IncludedCallTypes.AsObject,
    defaultInfoSortByValue: api_commons_org_pb.AgentInfoSortByMap[keyof api_commons_org_pb.AgentInfoSortByMap],
    defaultBargeInFiltering?: BargeInFiltering.AsObject,
  }
}

export class IncludedCallTypes extends jspb.Message {
  getOutbound(): boolean;
  setOutbound(value: boolean): void;

  getInbound(): boolean;
  setInbound(value: boolean): void;

  getManualDial(): boolean;
  setManualDial(value: boolean): void;

  getPreviewDial(): boolean;
  setPreviewDial(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IncludedCallTypes.AsObject;
  static toObject(includeInstance: boolean, msg: IncludedCallTypes): IncludedCallTypes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IncludedCallTypes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IncludedCallTypes;
  static deserializeBinaryFromReader(message: IncludedCallTypes, reader: jspb.BinaryReader): IncludedCallTypes;
}

export namespace IncludedCallTypes {
  export type AsObject = {
    outbound: boolean,
    inbound: boolean,
    manualDial: boolean,
    previewDial: boolean,
  }
}

export class BargeInFiltering extends jspb.Message {
  hasHuntGroup(): boolean;
  clearHuntGroup(): void;
  getHuntGroup(): BargeInFiltering.HuntGroup | undefined;
  setHuntGroup(value?: BargeInFiltering.HuntGroup): void;

  hasAgentStatus(): boolean;
  clearAgentStatus(): void;
  getAgentStatus(): BargeInFiltering.AgentStatus | undefined;
  setAgentStatus(value?: BargeInFiltering.AgentStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BargeInFiltering.AsObject;
  static toObject(includeInstance: boolean, msg: BargeInFiltering): BargeInFiltering.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BargeInFiltering, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BargeInFiltering;
  static deserializeBinaryFromReader(message: BargeInFiltering, reader: jspb.BinaryReader): BargeInFiltering;
}

export namespace BargeInFiltering {
  export type AsObject = {
    huntGroup?: BargeInFiltering.HuntGroup.AsObject,
    agentStatus?: BargeInFiltering.AgentStatus.AsObject,
  }

  export class HuntGroup extends jspb.Message {
    getAny(): boolean;
    setAny(value: boolean): void;

    getHuntGroupSid(): number;
    setHuntGroupSid(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HuntGroup.AsObject;
    static toObject(includeInstance: boolean, msg: HuntGroup): HuntGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HuntGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HuntGroup;
    static deserializeBinaryFromReader(message: HuntGroup, reader: jspb.BinaryReader): HuntGroup;
  }

  export namespace HuntGroup {
    export type AsObject = {
      any: boolean,
      huntGroupSid: number,
    }
  }

  export class AgentStatus extends jspb.Message {
    getAny(): boolean;
    setAny(value: boolean): void;

    getWaiting(): boolean;
    setWaiting(value: boolean): void;

    getOnCall(): boolean;
    setOnCall(value: boolean): void;

    getWrapUp(): boolean;
    setWrapUp(value: boolean): void;

    getPaused(): boolean;
    setPaused(value: boolean): void;

    getTransfer(): boolean;
    setTransfer(value: boolean): void;

    getPreview(): boolean;
    setPreview(value: boolean): void;

    getManual(): boolean;
    setManual(value: boolean): void;

    getPbx(): boolean;
    setPbx(value: boolean): void;

    getIntercom(): boolean;
    setIntercom(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AgentStatus.AsObject;
    static toObject(includeInstance: boolean, msg: AgentStatus): AgentStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AgentStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AgentStatus;
    static deserializeBinaryFromReader(message: AgentStatus, reader: jspb.BinaryReader): AgentStatus;
  }

  export namespace AgentStatus {
    export type AsObject = {
      any: boolean,
      waiting: boolean,
      onCall: boolean,
      wrapUp: boolean,
      paused: boolean,
      transfer: boolean,
      preview: boolean,
      manual: boolean,
      pbx: boolean,
      intercom: boolean,
    }
  }
}

export class DashboardQueuePreferences extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getDefaultInfoView(): boolean;
  setDefaultInfoView(value: boolean): void;

  getDefaultInfoGrouping(): boolean;
  setDefaultInfoGrouping(value: boolean): void;

  getDefaultSmallIcon(): boolean;
  setDefaultSmallIcon(value: boolean): void;

  getDefaultDescendingSort(): boolean;
  setDefaultDescendingSort(value: boolean): void;

  getDefaultAgentSkillsFilter(): number;
  setDefaultAgentSkillsFilter(value: number): void;

  getDefaultInfoTableTemplate(): number;
  setDefaultInfoTableTemplate(value: number): void;

  getDefaultInfoSortByValue(): api_commons_org_pb.QueueInfoSortByMap[keyof api_commons_org_pb.QueueInfoSortByMap];
  setDefaultInfoSortByValue(value: api_commons_org_pb.QueueInfoSortByMap[keyof api_commons_org_pb.QueueInfoSortByMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashboardQueuePreferences.AsObject;
  static toObject(includeInstance: boolean, msg: DashboardQueuePreferences): DashboardQueuePreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashboardQueuePreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashboardQueuePreferences;
  static deserializeBinaryFromReader(message: DashboardQueuePreferences, reader: jspb.BinaryReader): DashboardQueuePreferences;
}

export namespace DashboardQueuePreferences {
  export type AsObject = {
    orgId: string,
    defaultInfoView: boolean,
    defaultInfoGrouping: boolean,
    defaultSmallIcon: boolean,
    defaultDescendingSort: boolean,
    defaultAgentSkillsFilter: number,
    defaultInfoTableTemplate: number,
    defaultInfoSortByValue: api_commons_org_pb.QueueInfoSortByMap[keyof api_commons_org_pb.QueueInfoSortByMap],
  }
}

export class PhonePreferences extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getAgentPreviewDialing(): boolean;
  setAgentPreviewDialing(value: boolean): void;

  getDefaultRingLengthThreshold(): number;
  setDefaultRingLengthThreshold(value: number): void;

  getDisplayRingLengthThreshold(): boolean;
  setDisplayRingLengthThreshold(value: boolean): void;

  getShowCallerId(): boolean;
  setShowCallerId(value: boolean): void;

  getDefaultUseCallerId(): boolean;
  setDefaultUseCallerId(value: boolean): void;

  getOverrideLinkbackRecording(): boolean;
  setOverrideLinkbackRecording(value: boolean): void;

  getCallerIdCfdSid(): number;
  setCallerIdCfdSid(value: number): void;

  hasDefaultDialOrder(): boolean;
  clearDefaultDialOrder(): void;
  getDefaultDialOrder(): DialOrder | undefined;
  setDefaultDialOrder(value?: DialOrder): void;

  getAnsweringMachineDetection(): api_commons_org_preferences_pb.AnsweringMachineDetectionMap[keyof api_commons_org_preferences_pb.AnsweringMachineDetectionMap];
  setAnsweringMachineDetection(value: api_commons_org_preferences_pb.AnsweringMachineDetectionMap[keyof api_commons_org_preferences_pb.AnsweringMachineDetectionMap]): void;

  getLinkbackRecording(): boolean;
  setLinkbackRecording(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PhonePreferences.AsObject;
  static toObject(includeInstance: boolean, msg: PhonePreferences): PhonePreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PhonePreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PhonePreferences;
  static deserializeBinaryFromReader(message: PhonePreferences, reader: jspb.BinaryReader): PhonePreferences;
}

export namespace PhonePreferences {
  export type AsObject = {
    orgId: string,
    agentPreviewDialing: boolean,
    defaultRingLengthThreshold: number,
    displayRingLengthThreshold: boolean,
    showCallerId: boolean,
    defaultUseCallerId: boolean,
    overrideLinkbackRecording: boolean,
    callerIdCfdSid: number,
    defaultDialOrder?: DialOrder.AsObject,
    answeringMachineDetection: api_commons_org_preferences_pb.AnsweringMachineDetectionMap[keyof api_commons_org_preferences_pb.AnsweringMachineDetectionMap],
    linkbackRecording: boolean,
  }
}

export class DialOrder extends jspb.Message {
  hasStandard(): boolean;
  clearStandard(): void;
  getStandard(): api_commons_lms_pb.DialOrderTypeMap[keyof api_commons_lms_pb.DialOrderTypeMap];
  setStandard(value: api_commons_lms_pb.DialOrderTypeMap[keyof api_commons_lms_pb.DialOrderTypeMap]): void;

  hasCustom(): boolean;
  clearCustom(): void;
  getCustom(): CustomDialOrder | undefined;
  setCustom(value?: CustomDialOrder): void;

  getTypeCase(): DialOrder.TypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DialOrder.AsObject;
  static toObject(includeInstance: boolean, msg: DialOrder): DialOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DialOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DialOrder;
  static deserializeBinaryFromReader(message: DialOrder, reader: jspb.BinaryReader): DialOrder;
}

export namespace DialOrder {
  export type AsObject = {
    standard: api_commons_lms_pb.DialOrderTypeMap[keyof api_commons_lms_pb.DialOrderTypeMap],
    custom?: CustomDialOrder.AsObject,
  }

  export enum TypeCase {
    TYPE_NOT_SET = 0,
    STANDARD = 1,
    CUSTOM = 2,
  }
}

export class CustomDialOrder extends jspb.Message {
  clearDialOrderFieldsList(): void;
  getDialOrderFieldsList(): Array<DialOrderField>;
  setDialOrderFieldsList(value: Array<DialOrderField>): void;
  addDialOrderFields(value?: DialOrderField, index?: number): DialOrderField;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomDialOrder.AsObject;
  static toObject(includeInstance: boolean, msg: CustomDialOrder): CustomDialOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomDialOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomDialOrder;
  static deserializeBinaryFromReader(message: CustomDialOrder, reader: jspb.BinaryReader): CustomDialOrder;
}

export namespace CustomDialOrder {
  export type AsObject = {
    dialOrderFieldsList: Array<DialOrderField.AsObject>,
  }
}

export class DialOrderField extends jspb.Message {
  getCfdSid(): number;
  setCfdSid(value: number): void;

  getFieldName(): string;
  setFieldName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DialOrderField.AsObject;
  static toObject(includeInstance: boolean, msg: DialOrderField): DialOrderField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DialOrderField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DialOrderField;
  static deserializeBinaryFromReader(message: DialOrderField, reader: jspb.BinaryReader): DialOrderField;
}

export namespace DialOrderField {
  export type AsObject = {
    cfdSid: number,
    fieldName: string,
  }
}

export class CompliancePreferences extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getDisplayAfterHoursCalls(): boolean;
  setDisplayAfterHoursCalls(value: boolean): void;

  getAfterHoursCalls(): boolean;
  setAfterHoursCalls(value: boolean): void;

  getDisplayNaturalCompliance(): boolean;
  setDisplayNaturalCompliance(value: boolean): void;

  getUseNaturalCompliance(): boolean;
  setUseNaturalCompliance(value: boolean): void;

  getDefaultComplianceRuleSet(): string;
  setDefaultComplianceRuleSet(value: string): void;

  getDisplayCellPhoneScrub(): boolean;
  setDisplayCellPhoneScrub(value: boolean): void;

  getCellPhoneScrub(): boolean;
  setCellPhoneScrub(value: boolean): void;

  getDisplayScheduleRules(): boolean;
  setDisplayScheduleRules(value: boolean): void;

  getUseScheduleRules(): boolean;
  setUseScheduleRules(value: boolean): void;

  hasDefaultScheduleRule(): boolean;
  clearDefaultScheduleRule(): void;
  getDefaultScheduleRule(): ScheduleRuleField | undefined;
  setDefaultScheduleRule(value?: ScheduleRuleField): void;

  getDoZipCodeScrub(): boolean;
  setDoZipCodeScrub(value: boolean): void;

  hasZipCodeScrub(): boolean;
  clearZipCodeScrub(): void;
  getZipCodeScrub(): ZipCodeField | undefined;
  setZipCodeScrub(value?: ZipCodeField): void;

  getDefaultEmailComplianceList(): string;
  setDefaultEmailComplianceList(value: string): void;

  getDefaultSmsComplianceList(): string;
  setDefaultSmsComplianceList(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompliancePreferences.AsObject;
  static toObject(includeInstance: boolean, msg: CompliancePreferences): CompliancePreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompliancePreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompliancePreferences;
  static deserializeBinaryFromReader(message: CompliancePreferences, reader: jspb.BinaryReader): CompliancePreferences;
}

export namespace CompliancePreferences {
  export type AsObject = {
    orgId: string,
    displayAfterHoursCalls: boolean,
    afterHoursCalls: boolean,
    displayNaturalCompliance: boolean,
    useNaturalCompliance: boolean,
    defaultComplianceRuleSet: string,
    displayCellPhoneScrub: boolean,
    cellPhoneScrub: boolean,
    displayScheduleRules: boolean,
    useScheduleRules: boolean,
    defaultScheduleRule?: ScheduleRuleField.AsObject,
    doZipCodeScrub: boolean,
    zipCodeScrub?: ZipCodeField.AsObject,
    defaultEmailComplianceList: string,
    defaultSmsComplianceList: string,
  }
}

export class ScheduleRuleField extends jspb.Message {
  getRuleId(): number;
  setRuleId(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleRuleField.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleRuleField): ScheduleRuleField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduleRuleField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleRuleField;
  static deserializeBinaryFromReader(message: ScheduleRuleField, reader: jspb.BinaryReader): ScheduleRuleField;
}

export namespace ScheduleRuleField {
  export type AsObject = {
    ruleId: number,
    name: string,
  }
}

export class ZipCodeField extends jspb.Message {
  getCfdSid(): number;
  setCfdSid(value: number): void;

  getFieldName(): string;
  setFieldName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ZipCodeField.AsObject;
  static toObject(includeInstance: boolean, msg: ZipCodeField): ZipCodeField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ZipCodeField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ZipCodeField;
  static deserializeBinaryFromReader(message: ZipCodeField, reader: jspb.BinaryReader): ZipCodeField;
}

export namespace ZipCodeField {
  export type AsObject = {
    cfdSid: number,
    fieldName: string,
  }
}

export class BroadcastPreferences extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getDisplayListPenetrationStrategy(): boolean;
  setDisplayListPenetrationStrategy(value: boolean): void;

  getDialListPenetrationStrategy(): boolean;
  setDialListPenetrationStrategy(value: boolean): void;

  getDisplayFollowTheSun(): boolean;
  setDisplayFollowTheSun(value: boolean): void;

  getFollowTheSun(): boolean;
  setFollowTheSun(value: boolean): void;

  getSequenceTerminatorOverride(): boolean;
  setSequenceTerminatorOverride(value: boolean): void;

  getBroadcastTemplateOrdering(): api_commons_org_preferences_pb.BroadcastTemplateOrderingMap[keyof api_commons_org_preferences_pb.BroadcastTemplateOrderingMap];
  setBroadcastTemplateOrdering(value: api_commons_org_preferences_pb.BroadcastTemplateOrderingMap[keyof api_commons_org_preferences_pb.BroadcastTemplateOrderingMap]): void;

  getStartTimeEnabled(): boolean;
  setStartTimeEnabled(value: boolean): void;

  hasDefaultStartTime(): boolean;
  clearDefaultStartTime(): void;
  getDefaultStartTime(): BroadcastTime | undefined;
  setDefaultStartTime(value?: BroadcastTime): void;

  getStopTimeEnabled(): boolean;
  setStopTimeEnabled(value: boolean): void;

  hasDefaultStopTime(): boolean;
  clearDefaultStopTime(): void;
  getDefaultStopTime(): BroadcastTime | undefined;
  setDefaultStopTime(value?: BroadcastTime): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BroadcastPreferences.AsObject;
  static toObject(includeInstance: boolean, msg: BroadcastPreferences): BroadcastPreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BroadcastPreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BroadcastPreferences;
  static deserializeBinaryFromReader(message: BroadcastPreferences, reader: jspb.BinaryReader): BroadcastPreferences;
}

export namespace BroadcastPreferences {
  export type AsObject = {
    orgId: string,
    displayListPenetrationStrategy: boolean,
    dialListPenetrationStrategy: boolean,
    displayFollowTheSun: boolean,
    followTheSun: boolean,
    sequenceTerminatorOverride: boolean,
    broadcastTemplateOrdering: api_commons_org_preferences_pb.BroadcastTemplateOrderingMap[keyof api_commons_org_preferences_pb.BroadcastTemplateOrderingMap],
    startTimeEnabled: boolean,
    defaultStartTime?: BroadcastTime.AsObject,
    stopTimeEnabled: boolean,
    defaultStopTime?: BroadcastTime.AsObject,
  }
}

export class BroadcastTime extends jspb.Message {
  getHours(): number;
  setHours(value: number): void;

  getMinutes(): number;
  setMinutes(value: number): void;

  getTimezone(): api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap];
  setTimezone(value: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BroadcastTime.AsObject;
  static toObject(includeInstance: boolean, msg: BroadcastTime): BroadcastTime.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BroadcastTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BroadcastTime;
  static deserializeBinaryFromReader(message: BroadcastTime, reader: jspb.BinaryReader): BroadcastTime;
}

export namespace BroadcastTime {
  export type AsObject = {
    hours: number,
    minutes: number,
    timezone: api_commons_org_pb.TimeZoneMap[keyof api_commons_org_pb.TimeZoneMap],
  }
}

export class SchedulePreferences extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getDisplayScheduleByTimeZone(): boolean;
  setDisplayScheduleByTimeZone(value: boolean): void;

  getUseScheduleByTimeZone(): boolean;
  setUseScheduleByTimeZone(value: boolean): void;

  getScheduleByTimeZoneScope(): api_commons_org_preferences_pb.ScheduleByTimeZoneScopeMap[keyof api_commons_org_preferences_pb.ScheduleByTimeZoneScopeMap];
  setScheduleByTimeZoneScope(value: api_commons_org_preferences_pb.ScheduleByTimeZoneScopeMap[keyof api_commons_org_preferences_pb.ScheduleByTimeZoneScopeMap]): void;

  getDisplayScheduleAsPaused(): boolean;
  setDisplayScheduleAsPaused(value: boolean): void;

  getScheduleAsPaused(): boolean;
  setScheduleAsPaused(value: boolean): void;

  getDefaultCompletionThreshold(): number;
  setDefaultCompletionThreshold(value: number): void;

  getDisplayCampaignLinking(): boolean;
  setDisplayCampaignLinking(value: boolean): void;

  getUseCampaignLinking(): boolean;
  setUseCampaignLinking(value: boolean): void;

  getCampaignLinksMap(): jspb.Map<string, string>;
  clearCampaignLinksMap(): void;
  getDefaultCampaignLinkId(): string;
  setDefaultCampaignLinkId(value: string): void;

  getResendCancelledCampaigns(): boolean;
  setResendCancelledCampaigns(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchedulePreferences.AsObject;
  static toObject(includeInstance: boolean, msg: SchedulePreferences): SchedulePreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SchedulePreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchedulePreferences;
  static deserializeBinaryFromReader(message: SchedulePreferences, reader: jspb.BinaryReader): SchedulePreferences;
}

export namespace SchedulePreferences {
  export type AsObject = {
    orgId: string,
    displayScheduleByTimeZone: boolean,
    useScheduleByTimeZone: boolean,
    scheduleByTimeZoneScope: api_commons_org_preferences_pb.ScheduleByTimeZoneScopeMap[keyof api_commons_org_preferences_pb.ScheduleByTimeZoneScopeMap],
    displayScheduleAsPaused: boolean,
    scheduleAsPaused: boolean,
    defaultCompletionThreshold: number,
    displayCampaignLinking: boolean,
    useCampaignLinking: boolean,
    campaignLinksMap: Array<[string, string]>,
    defaultCampaignLinkId: string,
    resendCancelledCampaigns: boolean,
  }
}

export class EmailSmsPreferences extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getUseCustomLinks(): boolean;
  setUseCustomLinks(value: boolean): void;

  getClientAcknowledgement(): boolean;
  setClientAcknowledgement(value: boolean): void;

  clearEmailFromAddressesList(): void;
  getEmailFromAddressesList(): Array<string>;
  setEmailFromAddressesList(value: Array<string>): void;
  addEmailFromAddresses(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailSmsPreferences.AsObject;
  static toObject(includeInstance: boolean, msg: EmailSmsPreferences): EmailSmsPreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmailSmsPreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailSmsPreferences;
  static deserializeBinaryFromReader(message: EmailSmsPreferences, reader: jspb.BinaryReader): EmailSmsPreferences;
}

export namespace EmailSmsPreferences {
  export type AsObject = {
    orgId: string,
    useCustomLinks: boolean,
    clientAcknowledgement: boolean,
    emailFromAddressesList: Array<string>,
  }
}

export class BusinessPreferences extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getWeeksOfData(): number;
  setWeeksOfData(value: number): void;

  getTimeZone(): api_commons_ana_pb.AnaTimeZoneMap[keyof api_commons_ana_pb.AnaTimeZoneMap];
  setTimeZone(value: api_commons_ana_pb.AnaTimeZoneMap[keyof api_commons_ana_pb.AnaTimeZoneMap]): void;

  getMultiClientAccess(): boolean;
  setMultiClientAccess(value: boolean): void;

  getCustomVisualizations(): boolean;
  setCustomVisualizations(value: boolean): void;

  getTimeFilter(): string;
  setTimeFilter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BusinessPreferences.AsObject;
  static toObject(includeInstance: boolean, msg: BusinessPreferences): BusinessPreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BusinessPreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BusinessPreferences;
  static deserializeBinaryFromReader(message: BusinessPreferences, reader: jspb.BinaryReader): BusinessPreferences;
}

export namespace BusinessPreferences {
  export type AsObject = {
    orgId: string,
    weeksOfData: number,
    timeZone: api_commons_ana_pb.AnaTimeZoneMap[keyof api_commons_ana_pb.AnaTimeZoneMap],
    multiClientAccess: boolean,
    customVisualizations: boolean,
    timeFilter: string,
  }
}

export class ScorecardsPreferences extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getCallSamplePercentage(): number;
  setCallSamplePercentage(value: number): void;

  getMaxUserEvaluations(): number;
  setMaxUserEvaluations(value: number): void;

  getEvaluationInterval(): Scorecards.EvaluationIntervalMap[keyof Scorecards.EvaluationIntervalMap];
  setEvaluationInterval(value: Scorecards.EvaluationIntervalMap[keyof Scorecards.EvaluationIntervalMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScorecardsPreferences.AsObject;
  static toObject(includeInstance: boolean, msg: ScorecardsPreferences): ScorecardsPreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScorecardsPreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScorecardsPreferences;
  static deserializeBinaryFromReader(message: ScorecardsPreferences, reader: jspb.BinaryReader): ScorecardsPreferences;
}

export namespace ScorecardsPreferences {
  export type AsObject = {
    orgId: string,
    callSamplePercentage: number,
    maxUserEvaluations: number,
    evaluationInterval: Scorecards.EvaluationIntervalMap[keyof Scorecards.EvaluationIntervalMap],
  }
}

export class Scorecards extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Scorecards.AsObject;
  static toObject(includeInstance: boolean, msg: Scorecards): Scorecards.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Scorecards, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Scorecards;
  static deserializeBinaryFromReader(message: Scorecards, reader: jspb.BinaryReader): Scorecards;
}

export namespace Scorecards {
  export type AsObject = {
  }

  export interface EvaluationIntervalMap {
    EVALUATION_INTERVAL_DAY_UNSPECIFIED: 0;
    EVALUATION_INTERVAL_WEEK: 1;
    EVALUATION_INTERVAL_MONTH: 2;
  }

  export const EvaluationInterval: EvaluationIntervalMap;
}

export class VoiceAnalyticsPreferences extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  clearRedactList(): void;
  getRedactList(): Array<VoiceAnalytics.Redact>;
  setRedactList(value: Array<VoiceAnalytics.Redact>): void;
  addRedact(value?: VoiceAnalytics.Redact, index?: number): VoiceAnalytics.Redact;

  hasNotify(): boolean;
  clearNotify(): void;
  getNotify(): VoiceAnalytics.Notify | undefined;
  setNotify(value?: VoiceAnalytics.Notify): void;

  hasBillingNotify(): boolean;
  clearBillingNotify(): void;
  getBillingNotify(): VoiceAnalytics.Notify | undefined;
  setBillingNotify(value?: VoiceAnalytics.Notify): void;

  getNumberFormat(): string;
  setNumberFormat(value: string): void;

  getRedactAllDigits(): boolean;
  setRedactAllDigits(value: boolean): void;

  getSilenceThreshold(): number;
  setSilenceThreshold(value: number): void;

  getTalkOverThreshold(): number;
  setTalkOverThreshold(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VoiceAnalyticsPreferences.AsObject;
  static toObject(includeInstance: boolean, msg: VoiceAnalyticsPreferences): VoiceAnalyticsPreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VoiceAnalyticsPreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VoiceAnalyticsPreferences;
  static deserializeBinaryFromReader(message: VoiceAnalyticsPreferences, reader: jspb.BinaryReader): VoiceAnalyticsPreferences;
}

export namespace VoiceAnalyticsPreferences {
  export type AsObject = {
    orgId: string,
    enabled: boolean,
    redactList: Array<VoiceAnalytics.Redact.AsObject>,
    notify?: VoiceAnalytics.Notify.AsObject,
    billingNotify?: VoiceAnalytics.Notify.AsObject,
    numberFormat: string,
    redactAllDigits: boolean,
    silenceThreshold: number,
    talkOverThreshold: number,
  }
}

export class VoiceAnalytics extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VoiceAnalytics.AsObject;
  static toObject(includeInstance: boolean, msg: VoiceAnalytics): VoiceAnalytics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VoiceAnalytics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VoiceAnalytics;
  static deserializeBinaryFromReader(message: VoiceAnalytics, reader: jspb.BinaryReader): VoiceAnalytics;
}

export namespace VoiceAnalytics {
  export type AsObject = {
  }

  export class Redact extends jspb.Message {
    hasNumber(): boolean;
    clearNumber(): void;
    getNumber(): VoiceAnalytics.Number | undefined;
    setNumber(value?: VoiceAnalytics.Number): void;

    getWhereCase(): Redact.WhereCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Redact.AsObject;
    static toObject(includeInstance: boolean, msg: Redact): Redact.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Redact, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Redact;
    static deserializeBinaryFromReader(message: Redact, reader: jspb.BinaryReader): Redact;
  }

  export namespace Redact {
    export type AsObject = {
      number?: VoiceAnalytics.Number.AsObject,
    }

    export enum WhereCase {
      WHERE_NOT_SET = 0,
      NUMBER = 1,
    }
  }

  export class Number extends jspb.Message {
    getKind(): VoiceAnalytics.Number.KindMap[keyof VoiceAnalytics.Number.KindMap];
    setKind(value: VoiceAnalytics.Number.KindMap[keyof VoiceAnalytics.Number.KindMap]): void;

    getMinConsecutive(): number;
    setMinConsecutive(value: number): void;

    getMaxConsecutive(): number;
    setMaxConsecutive(value: number): void;

    getSlop(): number;
    setSlop(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Number.AsObject;
    static toObject(includeInstance: boolean, msg: Number): Number.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Number, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Number;
    static deserializeBinaryFromReader(message: Number, reader: jspb.BinaryReader): Number;
  }

  export namespace Number {
    export type AsObject = {
      kind: VoiceAnalytics.Number.KindMap[keyof VoiceAnalytics.Number.KindMap],
      minConsecutive: number,
      maxConsecutive: number,
      slop: number,
    }

    export interface KindMap {
      KIND_CARDINAL_UNSPECIFIED: 0;
      KIND_ORDINAL: 1;
      KIND_ANY: 2;
    }

    export const Kind: KindMap;
  }

  export class Notify extends jspb.Message {
    getCron(): string;
    setCron(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Notify.AsObject;
    static toObject(includeInstance: boolean, msg: Notify): Notify.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Notify, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Notify;
    static deserializeBinaryFromReader(message: Notify, reader: jspb.BinaryReader): Notify;
  }

  export namespace Notify {
    export type AsObject = {
      cron: string,
    }
  }
}

export class EndOfDayPreferences extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getEodMonday(): number;
  setEodMonday(value: number): void;

  getEodTuesday(): number;
  setEodTuesday(value: number): void;

  getEodWednesday(): number;
  setEodWednesday(value: number): void;

  getEodThursday(): number;
  setEodThursday(value: number): void;

  getEodFriday(): number;
  setEodFriday(value: number): void;

  getEodSaturday(): number;
  setEodSaturday(value: number): void;

  getEodSunday(): number;
  setEodSunday(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndOfDayPreferences.AsObject;
  static toObject(includeInstance: boolean, msg: EndOfDayPreferences): EndOfDayPreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EndOfDayPreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndOfDayPreferences;
  static deserializeBinaryFromReader(message: EndOfDayPreferences, reader: jspb.BinaryReader): EndOfDayPreferences;
}

export namespace EndOfDayPreferences {
  export type AsObject = {
    orgId: string,
    eodMonday: number,
    eodTuesday: number,
    eodWednesday: number,
    eodThursday: number,
    eodFriday: number,
    eodSaturday: number,
    eodSunday: number,
  }
}

export class FilterPreferences extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  hasDefaultAutoReportFilter(): boolean;
  clearDefaultAutoReportFilter(): void;
  getDefaultAutoReportFilter(): ReportFilter | undefined;
  setDefaultAutoReportFilter(value?: ReportFilter): void;

  getSendEmptyAutoReports(): boolean;
  setSendEmptyAutoReports(value: boolean): void;

  getDisplayBroadcastResendFilter(): boolean;
  setDisplayBroadcastResendFilter(value: boolean): void;

  hasDefaultBroadcastResendFilter(): boolean;
  clearDefaultBroadcastResendFilter(): void;
  getDefaultBroadcastResendFilter(): ReportFilter | undefined;
  setDefaultBroadcastResendFilter(value?: ReportFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterPreferences.AsObject;
  static toObject(includeInstance: boolean, msg: FilterPreferences): FilterPreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FilterPreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterPreferences;
  static deserializeBinaryFromReader(message: FilterPreferences, reader: jspb.BinaryReader): FilterPreferences;
}

export namespace FilterPreferences {
  export type AsObject = {
    orgId: string,
    defaultAutoReportFilter?: ReportFilter.AsObject,
    sendEmptyAutoReports: boolean,
    displayBroadcastResendFilter: boolean,
    defaultBroadcastResendFilter?: ReportFilter.AsObject,
  }
}

export class ReportFilter extends jspb.Message {
  hasStandard(): boolean;
  clearStandard(): void;
  getStandard(): api_commons_org_preferences_pb.StandardReportFilterMap[keyof api_commons_org_preferences_pb.StandardReportFilterMap];
  setStandard(value: api_commons_org_preferences_pb.StandardReportFilterMap[keyof api_commons_org_preferences_pb.StandardReportFilterMap]): void;

  hasCustom(): boolean;
  clearCustom(): void;
  getCustom(): number;
  setCustom(value: number): void;

  getChoiceCase(): ReportFilter.ChoiceCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ReportFilter): ReportFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReportFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportFilter;
  static deserializeBinaryFromReader(message: ReportFilter, reader: jspb.BinaryReader): ReportFilter;
}

export namespace ReportFilter {
  export type AsObject = {
    standard: api_commons_org_preferences_pb.StandardReportFilterMap[keyof api_commons_org_preferences_pb.StandardReportFilterMap],
    custom: number,
  }

  export enum ChoiceCase {
    CHOICE_NOT_SET = 0,
    STANDARD = 1,
    CUSTOM = 2,
  }
}

export class RecordingPreferences extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getConventionEnabled(): boolean;
  setConventionEnabled(value: boolean): void;

  hasFileNameConvention(): boolean;
  clearFileNameConvention(): void;
  getFileNameConvention(): RecordingsFileNamingConvention | undefined;
  setFileNameConvention(value?: RecordingsFileNamingConvention): void;

  getZipConventionEnabled(): boolean;
  setZipConventionEnabled(value: boolean): void;

  hasZipFileNameConvention(): boolean;
  clearZipFileNameConvention(): void;
  getZipFileNameConvention(): RecordingsZipFileNamingConvention | undefined;
  setZipFileNameConvention(value?: RecordingsZipFileNamingConvention): void;

  getExportFileType(): api_commons_org_pb.RecordingFileTypeMap[keyof api_commons_org_pb.RecordingFileTypeMap];
  setExportFileType(value: api_commons_org_pb.RecordingFileTypeMap[keyof api_commons_org_pb.RecordingFileTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingPreferences.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingPreferences): RecordingPreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingPreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingPreferences;
  static deserializeBinaryFromReader(message: RecordingPreferences, reader: jspb.BinaryReader): RecordingPreferences;
}

export namespace RecordingPreferences {
  export type AsObject = {
    orgId: string,
    conventionEnabled: boolean,
    fileNameConvention?: RecordingsFileNamingConvention.AsObject,
    zipConventionEnabled: boolean,
    zipFileNameConvention?: RecordingsZipFileNamingConvention.AsObject,
    exportFileType: api_commons_org_pb.RecordingFileTypeMap[keyof api_commons_org_pb.RecordingFileTypeMap],
  }
}

export class RecordingsFileNamingConvention extends jspb.Message {
  getXmlClientPropertySid(): number;
  setXmlClientPropertySid(value: number): void;

  hasInbound(): boolean;
  clearInbound(): void;
  getInbound(): FileNamingConvention | undefined;
  setInbound(value?: FileNamingConvention): void;

  hasManual(): boolean;
  clearManual(): void;
  getManual(): FileNamingConvention | undefined;
  setManual(value?: FileNamingConvention): void;

  hasOutbound(): boolean;
  clearOutbound(): void;
  getOutbound(): FileNamingConvention | undefined;
  setOutbound(value?: FileNamingConvention): void;

  hasPreview(): boolean;
  clearPreview(): void;
  getPreview(): FileNamingConvention | undefined;
  setPreview(value?: FileNamingConvention): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingsFileNamingConvention.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingsFileNamingConvention): RecordingsFileNamingConvention.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingsFileNamingConvention, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingsFileNamingConvention;
  static deserializeBinaryFromReader(message: RecordingsFileNamingConvention, reader: jspb.BinaryReader): RecordingsFileNamingConvention;
}

export namespace RecordingsFileNamingConvention {
  export type AsObject = {
    xmlClientPropertySid: number,
    inbound?: FileNamingConvention.AsObject,
    manual?: FileNamingConvention.AsObject,
    outbound?: FileNamingConvention.AsObject,
    preview?: FileNamingConvention.AsObject,
  }
}

export class RecordingsZipFileNamingConvention extends jspb.Message {
  getXmlClientPropertySid(): number;
  setXmlClientPropertySid(value: number): void;

  hasInbound(): boolean;
  clearInbound(): void;
  getInbound(): FileNamingConvention | undefined;
  setInbound(value?: FileNamingConvention): void;

  hasManual(): boolean;
  clearManual(): void;
  getManual(): FileNamingConvention | undefined;
  setManual(value?: FileNamingConvention): void;

  hasOutbound(): boolean;
  clearOutbound(): void;
  getOutbound(): FileNamingConvention | undefined;
  setOutbound(value?: FileNamingConvention): void;

  hasCombined(): boolean;
  clearCombined(): void;
  getCombined(): FileNamingConvention | undefined;
  setCombined(value?: FileNamingConvention): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingsZipFileNamingConvention.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingsZipFileNamingConvention): RecordingsZipFileNamingConvention.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingsZipFileNamingConvention, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingsZipFileNamingConvention;
  static deserializeBinaryFromReader(message: RecordingsZipFileNamingConvention, reader: jspb.BinaryReader): RecordingsZipFileNamingConvention;
}

export namespace RecordingsZipFileNamingConvention {
  export type AsObject = {
    xmlClientPropertySid: number,
    inbound?: FileNamingConvention.AsObject,
    manual?: FileNamingConvention.AsObject,
    outbound?: FileNamingConvention.AsObject,
    combined?: FileNamingConvention.AsObject,
  }
}

export class FileNamingConvention extends jspb.Message {
  clearSegmentsList(): void;
  getSegmentsList(): Array<FileNameSegment>;
  setSegmentsList(value: Array<FileNameSegment>): void;
  addSegments(value?: FileNameSegment, index?: number): FileNameSegment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileNamingConvention.AsObject;
  static toObject(includeInstance: boolean, msg: FileNamingConvention): FileNamingConvention.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileNamingConvention, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileNamingConvention;
  static deserializeBinaryFromReader(message: FileNamingConvention, reader: jspb.BinaryReader): FileNamingConvention;
}

export namespace FileNamingConvention {
  export type AsObject = {
    segmentsList: Array<FileNameSegment.AsObject>,
  }
}

export class FileNameSegment extends jspb.Message {
  getSegmentType(): string;
  setSegmentType(value: string): void;

  getFormatPattern(): string;
  setFormatPattern(value: string): void;

  getTimeZoneId(): string;
  setTimeZoneId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileNameSegment.AsObject;
  static toObject(includeInstance: boolean, msg: FileNameSegment): FileNameSegment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileNameSegment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileNameSegment;
  static deserializeBinaryFromReader(message: FileNameSegment, reader: jspb.BinaryReader): FileNameSegment;
}

export namespace FileNameSegment {
  export type AsObject = {
    segmentType: string,
    formatPattern: string,
    timeZoneId: string,
  }
}

export class AdminClientPreferences extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getUseReservedCarrier(): boolean;
  setUseReservedCarrier(value: boolean): void;

  clearReservedCarriersList(): void;
  getReservedCarriersList(): Array<string>;
  setReservedCarriersList(value: Array<string>): void;
  addReservedCarriers(value: string, index?: number): string;

  getEmailKey(): string;
  setEmailKey(value: string): void;

  getEmailId(): string;
  setEmailId(value: string): void;

  getEmailName(): string;
  setEmailName(value: string): void;

  clearWhitelistIpsList(): void;
  getWhitelistIpsList(): Array<string>;
  setWhitelistIpsList(value: Array<string>): void;
  addWhitelistIps(value: string, index?: number): string;

  clearWhitelistDomainsList(): void;
  getWhitelistDomainsList(): Array<string>;
  setWhitelistDomainsList(value: Array<string>): void;
  addWhitelistDomains(value: string, index?: number): string;

  getCallbacksServiceId(): string;
  setCallbacksServiceId(value: string): void;

  getAgentScreenRecording(): boolean;
  setAgentScreenRecording(value: boolean): void;

  clearAllowedCountriesList(): void;
  getAllowedCountriesList(): Array<api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap]>;
  setAllowedCountriesList(value: Array<api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap]>): void;
  addAllowedCountries(value: api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap], index?: number): api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminClientPreferences.AsObject;
  static toObject(includeInstance: boolean, msg: AdminClientPreferences): AdminClientPreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdminClientPreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminClientPreferences;
  static deserializeBinaryFromReader(message: AdminClientPreferences, reader: jspb.BinaryReader): AdminClientPreferences;
}

export namespace AdminClientPreferences {
  export type AsObject = {
    orgId: string,
    useReservedCarrier: boolean,
    reservedCarriersList: Array<string>,
    emailKey: string,
    emailId: string,
    emailName: string,
    whitelistIpsList: Array<string>,
    whitelistDomainsList: Array<string>,
    callbacksServiceId: string,
    agentScreenRecording: boolean,
    allowedCountriesList: Array<api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap]>,
  }
}

export class BusinessHours extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearRangesList(): void;
  getRangesList(): Array<Range>;
  setRangesList(value: Array<Range>): void;
  addRanges(value?: Range, index?: number): Range;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BusinessHours.AsObject;
  static toObject(includeInstance: boolean, msg: BusinessHours): BusinessHours.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BusinessHours, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BusinessHours;
  static deserializeBinaryFromReader(message: BusinessHours, reader: jspb.BinaryReader): BusinessHours;
}

export namespace BusinessHours {
  export type AsObject = {
    orgId: string,
    id: string,
    name: string,
    description: string,
    rangesList: Array<Range.AsObject>,
  }
}

export class Range extends jspb.Message {
  getStartHour(): number;
  setStartHour(value: number): void;

  getStartMinute(): number;
  setStartMinute(value: number): void;

  getEndHour(): number;
  setEndHour(value: number): void;

  getEndMinute(): number;
  setEndMinute(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Range.AsObject;
  static toObject(includeInstance: boolean, msg: Range): Range.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Range, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Range;
  static deserializeBinaryFromReader(message: Range, reader: jspb.BinaryReader): Range;
}

export namespace Range {
  export type AsObject = {
    startHour: number,
    startMinute: number,
    endHour: number,
    endMinute: number,
  }
}

