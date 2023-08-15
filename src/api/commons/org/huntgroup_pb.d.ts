// package: api.commons.org
// file: api/commons/org/huntgroup.proto

import * as jspb from "google-protobuf";
import * as api_commons_country_pb from "../../../api/commons/country_pb";
import * as api_commons_org_pb from "../../../api/commons/org_pb";

export class HuntGroupSettings extends jspb.Message {
  hasGeneralSettings(): boolean;
  clearGeneralSettings(): void;
  getGeneralSettings(): GeneralSettings | undefined;
  setGeneralSettings(value?: GeneralSettings): void;

  hasCommunicationSettings(): boolean;
  clearCommunicationSettings(): void;
  getCommunicationSettings(): CommunicationSettings | undefined;
  setCommunicationSettings(value?: CommunicationSettings): void;

  hasCallbackSettings(): boolean;
  clearCallbackSettings(): void;
  getCallbackSettings(): CallbackSettings | undefined;
  setCallbackSettings(value?: CallbackSettings): void;

  hasPreviewDialSettings(): boolean;
  clearPreviewDialSettings(): void;
  getPreviewDialSettings(): PreviewDialSettings | undefined;
  setPreviewDialSettings(value?: PreviewDialSettings): void;

  hasManualDialSettings(): boolean;
  clearManualDialSettings(): void;
  getManualDialSettings(): ManualDialSettings | undefined;
  setManualDialSettings(value?: ManualDialSettings): void;

  hasTransferCallSettings(): boolean;
  clearTransferCallSettings(): void;
  getTransferCallSettings(): TransferCallSettings | undefined;
  setTransferCallSettings(value?: TransferCallSettings): void;

  hasNumberHistorySettings(): boolean;
  clearNumberHistorySettings(): void;
  getNumberHistorySettings(): NumberHistorySettings | undefined;
  setNumberHistorySettings(value?: NumberHistorySettings): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HuntGroupSettings.AsObject;
  static toObject(includeInstance: boolean, msg: HuntGroupSettings): HuntGroupSettings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HuntGroupSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HuntGroupSettings;
  static deserializeBinaryFromReader(message: HuntGroupSettings, reader: jspb.BinaryReader): HuntGroupSettings;
}

export namespace HuntGroupSettings {
  export type AsObject = {
    generalSettings?: GeneralSettings.AsObject,
    communicationSettings?: CommunicationSettings.AsObject,
    callbackSettings?: CallbackSettings.AsObject,
    previewDialSettings?: PreviewDialSettings.AsObject,
    manualDialSettings?: ManualDialSettings.AsObject,
    transferCallSettings?: TransferCallSettings.AsObject,
    numberHistorySettings?: NumberHistorySettings.AsObject,
  }
}

export class GeneralSettings extends jspb.Message {
  getEnableAgentGatewayTitleBar(): boolean;
  setEnableAgentGatewayTitleBar(value: boolean): void;

  getDefaultAgentDialIn(): string;
  setDefaultAgentDialIn(value: string): void;

  getRequireEndCallConfirmation(): boolean;
  setRequireEndCallConfirmation(value: boolean): void;

  getEnableAuthorizationByIp(): boolean;
  setEnableAuthorizationByIp(value: boolean): void;

  clearAuthorizedIpAddressesList(): void;
  getAuthorizedIpAddressesList(): Array<string>;
  setAuthorizedIpAddressesList(value: Array<string>): void;
  addAuthorizedIpAddresses(value: string, index?: number): string;

  getInitialAgentStatus(): api_commons_org_pb.InitialAgentStatusMap[keyof api_commons_org_pb.InitialAgentStatusMap];
  setInitialAgentStatus(value: api_commons_org_pb.InitialAgentStatusMap[keyof api_commons_org_pb.InitialAgentStatusMap]): void;

  getEnableAgentPause(): boolean;
  setEnableAgentPause(value: boolean): void;

  hasAgentPauseOptionSet(): boolean;
  clearAgentPauseOptionSet(): void;
  getAgentPauseOptionSet(): GeneralSettings.PauseOptionSet | undefined;
  setAgentPauseOptionSet(value?: GeneralSettings.PauseOptionSet): void;

  getDefaultAgentPauseOption(): string;
  setDefaultAgentPauseOption(value: string): void;

  getEnablePauseOptionReset(): boolean;
  setEnablePauseOptionReset(value: boolean): void;

  getDisplayRecordingIndicator(): boolean;
  setDisplayRecordingIndicator(value: boolean): void;

  getEnableCallRecordingPause(): boolean;
  setEnableCallRecordingPause(value: boolean): void;

  getCallRecordingPauseConfirmation(): boolean;
  setCallRecordingPauseConfirmation(value: boolean): void;

  getCallRecordingDelay(): number;
  setCallRecordingDelay(value: number): void;

  getEnablePauseRecordingOnHold(): boolean;
  setEnablePauseRecordingOnHold(value: boolean): void;

  getEnableEnvisionScreenRecording(): boolean;
  setEnableEnvisionScreenRecording(value: boolean): void;

  getEnableAgentSimpleHold(): boolean;
  setEnableAgentSimpleHold(value: boolean): void;

  getEnableAgentMultiAccept(): boolean;
  setEnableAgentMultiAccept(value: boolean): void;

  getPauseAgentAfterMultiAccept(): boolean;
  setPauseAgentAfterMultiAccept(value: boolean): void;

  hasHoldQueueMonitoring(): boolean;
  clearHoldQueueMonitoring(): void;
  getHoldQueueMonitoring(): GeneralSettings.HoldQueueMonitoring | undefined;
  setHoldQueueMonitoring(value?: GeneralSettings.HoldQueueMonitoring): void;

  getDisplayMachineDeliver(): boolean;
  setDisplayMachineDeliver(value: boolean): void;

  getDisplayLinkbackHuntGroup(): boolean;
  setDisplayLinkbackHuntGroup(value: boolean): void;

  getDisplaySipHeaderData(): boolean;
  setDisplaySipHeaderData(value: boolean): void;

  getDisplayIvrNavigationKeys(): boolean;
  setDisplayIvrNavigationKeys(value: boolean): void;

  getDisplayDataCollectData(): boolean;
  setDisplayDataCollectData(value: boolean): void;

  hasDisplayDataDippedData(): boolean;
  clearDisplayDataDippedData(): void;
  getDisplayDataDippedData(): GeneralSettings.DataDipDataDisplay | undefined;
  setDisplayDataDippedData(value?: GeneralSettings.DataDipDataDisplay): void;

  hasIntegrationDataDisplay(): boolean;
  clearIntegrationDataDisplay(): void;
  getIntegrationDataDisplay(): GeneralSettings.IntegrationDataDisplay | undefined;
  setIntegrationDataDisplay(value?: GeneralSettings.IntegrationDataDisplay): void;

  hasJourneyDataDisplay(): boolean;
  clearJourneyDataDisplay(): void;
  getJourneyDataDisplay(): GeneralSettings.JourneyDataDisplay | undefined;
  setJourneyDataDisplay(value?: GeneralSettings.JourneyDataDisplay): void;

  getAgentCallHistoryScope(): api_commons_org_pb.AgentCallHistoryScopeMap[keyof api_commons_org_pb.AgentCallHistoryScopeMap];
  setAgentCallHistoryScope(value: api_commons_org_pb.AgentCallHistoryScopeMap[keyof api_commons_org_pb.AgentCallHistoryScopeMap]): void;

  hasAgentLoginGuiStatisticsDisplay(): boolean;
  clearAgentLoginGuiStatisticsDisplay(): void;
  getAgentLoginGuiStatisticsDisplay(): GeneralSettings.AgentLoginGuiStatisticsDisplay | undefined;
  setAgentLoginGuiStatisticsDisplay(value?: GeneralSettings.AgentLoginGuiStatisticsDisplay): void;

  hasPhoneZipMetadataDisplay(): boolean;
  clearPhoneZipMetadataDisplay(): void;
  getPhoneZipMetadataDisplay(): GeneralSettings.PhoneZipMetadataDisplay | undefined;
  setPhoneZipMetadataDisplay(value?: GeneralSettings.PhoneZipMetadataDisplay): void;

  getDisplaySkills(): boolean;
  setDisplaySkills(value: boolean): void;

  getDisplayWebLinks(): boolean;
  setDisplayWebLinks(value: boolean): void;

  getEnableAgentHuntGroupReassignment(): boolean;
  setEnableAgentHuntGroupReassignment(value: boolean): void;

  hasDisallowedHuntGroups(): boolean;
  clearDisallowedHuntGroups(): void;
  getDisallowedHuntGroups(): GeneralSettings.DisallowedHuntGroups | undefined;
  setDisallowedHuntGroups(value?: GeneralSettings.DisallowedHuntGroups): void;

  getEnableManualApprovalOfCalls(): boolean;
  setEnableManualApprovalOfCalls(value: boolean): void;

  getRequireManualApprovalNumber(): boolean;
  setRequireManualApprovalNumber(value: boolean): void;

  getEnableManualApprovalOfSms(): boolean;
  setEnableManualApprovalOfSms(value: boolean): void;

  getRequireManualApprovalNumberSms(): boolean;
  setRequireManualApprovalNumberSms(value: boolean): void;

  getDisableRejectOptionForApprovers(): boolean;
  setDisableRejectOptionForApprovers(value: boolean): void;

  hasAlphanumericKeypad(): boolean;
  clearAlphanumericKeypad(): void;
  getAlphanumericKeypad(): GeneralSettings.AlphanumericKeypad | undefined;
  setAlphanumericKeypad(value?: GeneralSettings.AlphanumericKeypad): void;

  getEnableCallDesktopNotifications(): boolean;
  setEnableCallDesktopNotifications(value: boolean): void;

  hasInboundComplianceMetadata(): boolean;
  clearInboundComplianceMetadata(): void;
  getInboundComplianceMetadata(): GeneralSettings.InboundComplianceMetadata | undefined;
  setInboundComplianceMetadata(value?: GeneralSettings.InboundComplianceMetadata): void;

  getEnableAgentIntercom(): boolean;
  setEnableAgentIntercom(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeneralSettings.AsObject;
  static toObject(includeInstance: boolean, msg: GeneralSettings): GeneralSettings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GeneralSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeneralSettings;
  static deserializeBinaryFromReader(message: GeneralSettings, reader: jspb.BinaryReader): GeneralSettings;
}

export namespace GeneralSettings {
  export type AsObject = {
    enableAgentGatewayTitleBar: boolean,
    defaultAgentDialIn: string,
    requireEndCallConfirmation: boolean,
    enableAuthorizationByIp: boolean,
    authorizedIpAddressesList: Array<string>,
    initialAgentStatus: api_commons_org_pb.InitialAgentStatusMap[keyof api_commons_org_pb.InitialAgentStatusMap],
    enableAgentPause: boolean,
    agentPauseOptionSet?: GeneralSettings.PauseOptionSet.AsObject,
    defaultAgentPauseOption: string,
    enablePauseOptionReset: boolean,
    displayRecordingIndicator: boolean,
    enableCallRecordingPause: boolean,
    callRecordingPauseConfirmation: boolean,
    callRecordingDelay: number,
    enablePauseRecordingOnHold: boolean,
    enableEnvisionScreenRecording: boolean,
    enableAgentSimpleHold: boolean,
    enableAgentMultiAccept: boolean,
    pauseAgentAfterMultiAccept: boolean,
    holdQueueMonitoring?: GeneralSettings.HoldQueueMonitoring.AsObject,
    displayMachineDeliver: boolean,
    displayLinkbackHuntGroup: boolean,
    displaySipHeaderData: boolean,
    displayIvrNavigationKeys: boolean,
    displayDataCollectData: boolean,
    displayDataDippedData?: GeneralSettings.DataDipDataDisplay.AsObject,
    integrationDataDisplay?: GeneralSettings.IntegrationDataDisplay.AsObject,
    journeyDataDisplay?: GeneralSettings.JourneyDataDisplay.AsObject,
    agentCallHistoryScope: api_commons_org_pb.AgentCallHistoryScopeMap[keyof api_commons_org_pb.AgentCallHistoryScopeMap],
    agentLoginGuiStatisticsDisplay?: GeneralSettings.AgentLoginGuiStatisticsDisplay.AsObject,
    phoneZipMetadataDisplay?: GeneralSettings.PhoneZipMetadataDisplay.AsObject,
    displaySkills: boolean,
    displayWebLinks: boolean,
    enableAgentHuntGroupReassignment: boolean,
    disallowedHuntGroups?: GeneralSettings.DisallowedHuntGroups.AsObject,
    enableManualApprovalOfCalls: boolean,
    requireManualApprovalNumber: boolean,
    enableManualApprovalOfSms: boolean,
    requireManualApprovalNumberSms: boolean,
    disableRejectOptionForApprovers: boolean,
    alphanumericKeypad?: GeneralSettings.AlphanumericKeypad.AsObject,
    enableCallDesktopNotifications: boolean,
    inboundComplianceMetadata?: GeneralSettings.InboundComplianceMetadata.AsObject,
    enableAgentIntercom: boolean,
  }

  export class PauseOptionSet extends jspb.Message {
    getEnabled(): boolean;
    setEnabled(value: boolean): void;

    getSetSid(): number;
    setSetSid(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PauseOptionSet.AsObject;
    static toObject(includeInstance: boolean, msg: PauseOptionSet): PauseOptionSet.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PauseOptionSet, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PauseOptionSet;
    static deserializeBinaryFromReader(message: PauseOptionSet, reader: jspb.BinaryReader): PauseOptionSet;
  }

  export namespace PauseOptionSet {
    export type AsObject = {
      enabled: boolean,
      setSid: number,
    }
  }

  export class HoldQueueMonitoring extends jspb.Message {
    getEnabled(): boolean;
    setEnabled(value: boolean): void;

    getAgentRouting(): api_commons_org_pb.AgentRoutingMap[keyof api_commons_org_pb.AgentRoutingMap];
    setAgentRouting(value: api_commons_org_pb.AgentRoutingMap[keyof api_commons_org_pb.AgentRoutingMap]): void;

    getRequiredHuntGroupRouting(): number;
    setRequiredHuntGroupRouting(value: number): void;

    getPreferredHuntGroupRouting(): number;
    setPreferredHuntGroupRouting(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HoldQueueMonitoring.AsObject;
    static toObject(includeInstance: boolean, msg: HoldQueueMonitoring): HoldQueueMonitoring.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HoldQueueMonitoring, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HoldQueueMonitoring;
    static deserializeBinaryFromReader(message: HoldQueueMonitoring, reader: jspb.BinaryReader): HoldQueueMonitoring;
  }

  export namespace HoldQueueMonitoring {
    export type AsObject = {
      enabled: boolean,
      agentRouting: api_commons_org_pb.AgentRoutingMap[keyof api_commons_org_pb.AgentRoutingMap],
      requiredHuntGroupRouting: number,
      preferredHuntGroupRouting: number,
    }
  }

  export class DataDipDataDisplay extends jspb.Message {
    getDisplayDataDipData(): boolean;
    setDisplayDataDipData(value: boolean): void;

    clearDataDipDisplayKeysList(): void;
    getDataDipDisplayKeysList(): Array<string>;
    setDataDipDisplayKeysList(value: Array<string>): void;
    addDataDipDisplayKeys(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataDipDataDisplay.AsObject;
    static toObject(includeInstance: boolean, msg: DataDipDataDisplay): DataDipDataDisplay.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataDipDataDisplay, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataDipDataDisplay;
    static deserializeBinaryFromReader(message: DataDipDataDisplay, reader: jspb.BinaryReader): DataDipDataDisplay;
  }

  export namespace DataDipDataDisplay {
    export type AsObject = {
      displayDataDipData: boolean,
      dataDipDisplayKeysList: Array<string>,
    }
  }

  export class IntegrationDataDisplay extends jspb.Message {
    getDisplayIntegrationData(): boolean;
    setDisplayIntegrationData(value: boolean): void;

    clearIntegrationDisplayKeysList(): void;
    getIntegrationDisplayKeysList(): Array<string>;
    setIntegrationDisplayKeysList(value: Array<string>): void;
    addIntegrationDisplayKeys(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IntegrationDataDisplay.AsObject;
    static toObject(includeInstance: boolean, msg: IntegrationDataDisplay): IntegrationDataDisplay.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IntegrationDataDisplay, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IntegrationDataDisplay;
    static deserializeBinaryFromReader(message: IntegrationDataDisplay, reader: jspb.BinaryReader): IntegrationDataDisplay;
  }

  export namespace IntegrationDataDisplay {
    export type AsObject = {
      displayIntegrationData: boolean,
      integrationDisplayKeysList: Array<string>,
    }
  }

  export class JourneyDataDisplay extends jspb.Message {
    getDisplayJourneyData(): boolean;
    setDisplayJourneyData(value: boolean): void;

    clearJourneyDisplayKeysList(): void;
    getJourneyDisplayKeysList(): Array<string>;
    setJourneyDisplayKeysList(value: Array<string>): void;
    addJourneyDisplayKeys(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JourneyDataDisplay.AsObject;
    static toObject(includeInstance: boolean, msg: JourneyDataDisplay): JourneyDataDisplay.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JourneyDataDisplay, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JourneyDataDisplay;
    static deserializeBinaryFromReader(message: JourneyDataDisplay, reader: jspb.BinaryReader): JourneyDataDisplay;
  }

  export namespace JourneyDataDisplay {
    export type AsObject = {
      displayJourneyData: boolean,
      journeyDisplayKeysList: Array<string>,
    }
  }

  export class AgentLoginGuiStatisticsDisplay extends jspb.Message {
    getDisplayAgentLoginGuiStatistics(): boolean;
    setDisplayAgentLoginGuiStatistics(value: boolean): void;

    getAgentLoginGuiStatisticsTemplate(): number;
    setAgentLoginGuiStatisticsTemplate(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AgentLoginGuiStatisticsDisplay.AsObject;
    static toObject(includeInstance: boolean, msg: AgentLoginGuiStatisticsDisplay): AgentLoginGuiStatisticsDisplay.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AgentLoginGuiStatisticsDisplay, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AgentLoginGuiStatisticsDisplay;
    static deserializeBinaryFromReader(message: AgentLoginGuiStatisticsDisplay, reader: jspb.BinaryReader): AgentLoginGuiStatisticsDisplay;
  }

  export namespace AgentLoginGuiStatisticsDisplay {
    export type AsObject = {
      displayAgentLoginGuiStatistics: boolean,
      agentLoginGuiStatisticsTemplate: number,
    }
  }

  export class PhoneZipMetadataDisplay extends jspb.Message {
    getDisplayPhoneZipMetadata(): boolean;
    setDisplayPhoneZipMetadata(value: boolean): void;

    clearPhoneZipMetadataKeysList(): void;
    getPhoneZipMetadataKeysList(): Array<api_commons_org_pb.PhonePostalDisplayOptionsMap[keyof api_commons_org_pb.PhonePostalDisplayOptionsMap]>;
    setPhoneZipMetadataKeysList(value: Array<api_commons_org_pb.PhonePostalDisplayOptionsMap[keyof api_commons_org_pb.PhonePostalDisplayOptionsMap]>): void;
    addPhoneZipMetadataKeys(value: api_commons_org_pb.PhonePostalDisplayOptionsMap[keyof api_commons_org_pb.PhonePostalDisplayOptionsMap], index?: number): api_commons_org_pb.PhonePostalDisplayOptionsMap[keyof api_commons_org_pb.PhonePostalDisplayOptionsMap];

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PhoneZipMetadataDisplay.AsObject;
    static toObject(includeInstance: boolean, msg: PhoneZipMetadataDisplay): PhoneZipMetadataDisplay.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PhoneZipMetadataDisplay, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PhoneZipMetadataDisplay;
    static deserializeBinaryFromReader(message: PhoneZipMetadataDisplay, reader: jspb.BinaryReader): PhoneZipMetadataDisplay;
  }

  export namespace PhoneZipMetadataDisplay {
    export type AsObject = {
      displayPhoneZipMetadata: boolean,
      phoneZipMetadataKeysList: Array<api_commons_org_pb.PhonePostalDisplayOptionsMap[keyof api_commons_org_pb.PhonePostalDisplayOptionsMap]>,
    }
  }

  export class DisallowedHuntGroups extends jspb.Message {
    getEnabled(): boolean;
    setEnabled(value: boolean): void;

    clearHuntGroupsList(): void;
    getHuntGroupsList(): Array<number>;
    setHuntGroupsList(value: Array<number>): void;
    addHuntGroups(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DisallowedHuntGroups.AsObject;
    static toObject(includeInstance: boolean, msg: DisallowedHuntGroups): DisallowedHuntGroups.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DisallowedHuntGroups, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DisallowedHuntGroups;
    static deserializeBinaryFromReader(message: DisallowedHuntGroups, reader: jspb.BinaryReader): DisallowedHuntGroups;
  }

  export namespace DisallowedHuntGroups {
    export type AsObject = {
      enabled: boolean,
      huntGroupsList: Array<number>,
    }
  }

  export class AlphanumericKeypad extends jspb.Message {
    getEnabled(): boolean;
    setEnabled(value: boolean): void;

    getDelimiter(): api_commons_org_pb.AlphanumericKeypadDelimiterMap[keyof api_commons_org_pb.AlphanumericKeypadDelimiterMap];
    setDelimiter(value: api_commons_org_pb.AlphanumericKeypadDelimiterMap[keyof api_commons_org_pb.AlphanumericKeypadDelimiterMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AlphanumericKeypad.AsObject;
    static toObject(includeInstance: boolean, msg: AlphanumericKeypad): AlphanumericKeypad.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AlphanumericKeypad, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AlphanumericKeypad;
    static deserializeBinaryFromReader(message: AlphanumericKeypad, reader: jspb.BinaryReader): AlphanumericKeypad;
  }

  export namespace AlphanumericKeypad {
    export type AsObject = {
      enabled: boolean,
      delimiter: api_commons_org_pb.AlphanumericKeypadDelimiterMap[keyof api_commons_org_pb.AlphanumericKeypadDelimiterMap],
    }
  }

  export class InboundComplianceMetadata extends jspb.Message {
    getEnabled(): boolean;
    setEnabled(value: boolean): void;

    clearOptionalDataList(): void;
    getOptionalDataList(): Array<number>;
    setOptionalDataList(value: Array<number>): void;
    addOptionalData(value: number, index?: number): number;

    clearRequiredDataList(): void;
    getRequiredDataList(): Array<number>;
    setRequiredDataList(value: Array<number>): void;
    addRequiredData(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InboundComplianceMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: InboundComplianceMetadata): InboundComplianceMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InboundComplianceMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InboundComplianceMetadata;
    static deserializeBinaryFromReader(message: InboundComplianceMetadata, reader: jspb.BinaryReader): InboundComplianceMetadata;
  }

  export namespace InboundComplianceMetadata {
    export type AsObject = {
      enabled: boolean,
      optionalDataList: Array<number>,
      requiredDataList: Array<number>,
    }
  }
}

export class CommunicationSettings extends jspb.Message {
  getEnableScrubListAdding(): boolean;
  setEnableScrubListAdding(value: boolean): void;

  clearScrubListsList(): void;
  getScrubListsList(): Array<string>;
  setScrubListsList(value: Array<string>): void;
  addScrubLists(value: string, index?: number): string;

  getEnableScrubListRemoval(): boolean;
  setEnableScrubListRemoval(value: boolean): void;

  clearScrubListsRemovalAllowedList(): void;
  getScrubListsRemovalAllowedList(): Array<string>;
  setScrubListsRemovalAllowedList(value: Array<string>): void;
  addScrubListsRemovalAllowed(value: string, index?: number): string;

  getComplianceDefaultCountry(): api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap];
  setComplianceDefaultCountry(value: api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap]): void;

  getDisplayOptionsInWrapup(): boolean;
  setDisplayOptionsInWrapup(value: boolean): void;

  hasInboundScrubListExpiration(): boolean;
  clearInboundScrubListExpiration(): void;
  getInboundScrubListExpiration(): CommunicationSettings.ScrubListExpiration | undefined;
  setInboundScrubListExpiration(value?: CommunicationSettings.ScrubListExpiration): void;

  hasManualScrubListExpiration(): boolean;
  clearManualScrubListExpiration(): void;
  getManualScrubListExpiration(): CommunicationSettings.ScrubListExpiration | undefined;
  setManualScrubListExpiration(value?: CommunicationSettings.ScrubListExpiration): void;

  hasOutboundScrubListExpiration(): boolean;
  clearOutboundScrubListExpiration(): void;
  getOutboundScrubListExpiration(): CommunicationSettings.ScrubListExpiration | undefined;
  setOutboundScrubListExpiration(value?: CommunicationSettings.ScrubListExpiration): void;

  hasPreviewScrubListExpiration(): boolean;
  clearPreviewScrubListExpiration(): void;
  getPreviewScrubListExpiration(): CommunicationSettings.ScrubListExpiration | undefined;
  setPreviewScrubListExpiration(value?: CommunicationSettings.ScrubListExpiration): void;

  getAutomateManuallyDialedScrubList(): boolean;
  setAutomateManuallyDialedScrubList(value: boolean): void;

  getAutomatePreviewDialedScrubList(): boolean;
  setAutomatePreviewDialedScrubList(value: boolean): void;

  hasAutomateResponseRules(): boolean;
  clearAutomateResponseRules(): void;
  getAutomateResponseRules(): CommunicationSettings.AutomateResponseRules | undefined;
  setAutomateResponseRules(value?: CommunicationSettings.AutomateResponseRules): void;

  hasAutomateScrubListCallData(): boolean;
  clearAutomateScrubListCallData(): void;
  getAutomateScrubListCallData(): CommunicationSettings.AutomateScrubListCallData | undefined;
  setAutomateScrubListCallData(value?: CommunicationSettings.AutomateScrubListCallData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommunicationSettings.AsObject;
  static toObject(includeInstance: boolean, msg: CommunicationSettings): CommunicationSettings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommunicationSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommunicationSettings;
  static deserializeBinaryFromReader(message: CommunicationSettings, reader: jspb.BinaryReader): CommunicationSettings;
}

export namespace CommunicationSettings {
  export type AsObject = {
    enableScrubListAdding: boolean,
    scrubListsList: Array<string>,
    enableScrubListRemoval: boolean,
    scrubListsRemovalAllowedList: Array<string>,
    complianceDefaultCountry: api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap],
    displayOptionsInWrapup: boolean,
    inboundScrubListExpiration?: CommunicationSettings.ScrubListExpiration.AsObject,
    manualScrubListExpiration?: CommunicationSettings.ScrubListExpiration.AsObject,
    outboundScrubListExpiration?: CommunicationSettings.ScrubListExpiration.AsObject,
    previewScrubListExpiration?: CommunicationSettings.ScrubListExpiration.AsObject,
    automateManuallyDialedScrubList: boolean,
    automatePreviewDialedScrubList: boolean,
    automateResponseRules?: CommunicationSettings.AutomateResponseRules.AsObject,
    automateScrubListCallData?: CommunicationSettings.AutomateScrubListCallData.AsObject,
  }

  export class ScrubListExpiration extends jspb.Message {
    getDefaultExpiration(): api_commons_org_pb.CommunicationExpirationMap[keyof api_commons_org_pb.CommunicationExpirationMap];
    setDefaultExpiration(value: api_commons_org_pb.CommunicationExpirationMap[keyof api_commons_org_pb.CommunicationExpirationMap]): void;

    getLimitExpiration(): boolean;
    setLimitExpiration(value: boolean): void;

    clearLimitedExpirationsList(): void;
    getLimitedExpirationsList(): Array<api_commons_org_pb.CommunicationExpirationMap[keyof api_commons_org_pb.CommunicationExpirationMap]>;
    setLimitedExpirationsList(value: Array<api_commons_org_pb.CommunicationExpirationMap[keyof api_commons_org_pb.CommunicationExpirationMap]>): void;
    addLimitedExpirations(value: api_commons_org_pb.CommunicationExpirationMap[keyof api_commons_org_pb.CommunicationExpirationMap], index?: number): api_commons_org_pb.CommunicationExpirationMap[keyof api_commons_org_pb.CommunicationExpirationMap];

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScrubListExpiration.AsObject;
    static toObject(includeInstance: boolean, msg: ScrubListExpiration): ScrubListExpiration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScrubListExpiration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScrubListExpiration;
    static deserializeBinaryFromReader(message: ScrubListExpiration, reader: jspb.BinaryReader): ScrubListExpiration;
  }

  export namespace ScrubListExpiration {
    export type AsObject = {
      defaultExpiration: api_commons_org_pb.CommunicationExpirationMap[keyof api_commons_org_pb.CommunicationExpirationMap],
      limitExpiration: boolean,
      limitedExpirationsList: Array<api_commons_org_pb.CommunicationExpirationMap[keyof api_commons_org_pb.CommunicationExpirationMap]>,
    }
  }

  export class AutomateResponseRules extends jspb.Message {
    getEnabled(): boolean;
    setEnabled(value: boolean): void;

    getRuleSid(): number;
    setRuleSid(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AutomateResponseRules.AsObject;
    static toObject(includeInstance: boolean, msg: AutomateResponseRules): AutomateResponseRules.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AutomateResponseRules, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AutomateResponseRules;
    static deserializeBinaryFromReader(message: AutomateResponseRules, reader: jspb.BinaryReader): AutomateResponseRules;
  }

  export namespace AutomateResponseRules {
    export type AsObject = {
      enabled: boolean,
      ruleSid: number,
    }
  }

  export class AutomateScrubListCallData extends jspb.Message {
    getEnabled(): boolean;
    setEnabled(value: boolean): void;

    clearScrubListDataFieldsList(): void;
    getScrubListDataFieldsList(): Array<CommunicationSettings.AutomateScrubListCallData.ScrubListDataField>;
    setScrubListDataFieldsList(value: Array<CommunicationSettings.AutomateScrubListCallData.ScrubListDataField>): void;
    addScrubListDataFields(value?: CommunicationSettings.AutomateScrubListCallData.ScrubListDataField, index?: number): CommunicationSettings.AutomateScrubListCallData.ScrubListDataField;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AutomateScrubListCallData.AsObject;
    static toObject(includeInstance: boolean, msg: AutomateScrubListCallData): AutomateScrubListCallData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AutomateScrubListCallData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AutomateScrubListCallData;
    static deserializeBinaryFromReader(message: AutomateScrubListCallData, reader: jspb.BinaryReader): AutomateScrubListCallData;
  }

  export namespace AutomateScrubListCallData {
    export type AsObject = {
      enabled: boolean,
      scrubListDataFieldsList: Array<CommunicationSettings.AutomateScrubListCallData.ScrubListDataField.AsObject>,
    }

    export class ScrubListDataField extends jspb.Message {
      getScrubList(): string;
      setScrubList(value: string): void;

      getCallDataField(): number;
      setCallDataField(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ScrubListDataField.AsObject;
      static toObject(includeInstance: boolean, msg: ScrubListDataField): ScrubListDataField.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ScrubListDataField, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ScrubListDataField;
      static deserializeBinaryFromReader(message: ScrubListDataField, reader: jspb.BinaryReader): ScrubListDataField;
    }

    export namespace ScrubListDataField {
      export type AsObject = {
        scrubList: string,
        callDataField: number,
      }
    }
  }
}

export class CallbackSettings extends jspb.Message {
  getEnableCallbackScheduling(): boolean;
  setEnableCallbackScheduling(value: boolean): void;

  hasDefaultCallbackRouting(): boolean;
  clearDefaultCallbackRouting(): void;
  getDefaultCallbackRouting(): CallbackSettings.DefaultRouting | undefined;
  setDefaultCallbackRouting(value?: CallbackSettings.DefaultRouting): void;

  getEnableCallbackCalling(): boolean;
  setEnableCallbackCalling(value: boolean): void;

  getEnableAutomaticRetrieval(): boolean;
  setEnableAutomaticRetrieval(value: boolean): void;

  hasCallbackRoutingDisallowed(): boolean;
  clearCallbackRoutingDisallowed(): void;
  getCallbackRoutingDisallowed(): CallbackSettings.CallbackRoutingDisallowed | undefined;
  setCallbackRoutingDisallowed(value?: CallbackSettings.CallbackRoutingDisallowed): void;

  getEnableCustomizableCallerId(): boolean;
  setEnableCustomizableCallerId(value: boolean): void;

  getDefaultCallerId(): string;
  setDefaultCallerId(value: string): void;

  getEnableCallbackCalendar(): boolean;
  setEnableCallbackCalendar(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallbackSettings.AsObject;
  static toObject(includeInstance: boolean, msg: CallbackSettings): CallbackSettings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallbackSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallbackSettings;
  static deserializeBinaryFromReader(message: CallbackSettings, reader: jspb.BinaryReader): CallbackSettings;
}

export namespace CallbackSettings {
  export type AsObject = {
    enableCallbackScheduling: boolean,
    defaultCallbackRouting?: CallbackSettings.DefaultRouting.AsObject,
    enableCallbackCalling: boolean,
    enableAutomaticRetrieval: boolean,
    callbackRoutingDisallowed?: CallbackSettings.CallbackRoutingDisallowed.AsObject,
    enableCustomizableCallerId: boolean,
    defaultCallerId: string,
    enableCallbackCalendar: boolean,
  }

  export class DefaultRouting extends jspb.Message {
    getRoutingMode(): api_commons_org_pb.DefaultCallbackRoutingMap[keyof api_commons_org_pb.DefaultCallbackRoutingMap];
    setRoutingMode(value: api_commons_org_pb.DefaultCallbackRoutingMap[keyof api_commons_org_pb.DefaultCallbackRoutingMap]): void;

    getAgentSid(): number;
    setAgentSid(value: number): void;

    clearAgentSkillsetsList(): void;
    getAgentSkillsetsList(): Array<number>;
    setAgentSkillsetsList(value: Array<number>): void;
    addAgentSkillsets(value: number, index?: number): number;

    clearHuntGroupSidsList(): void;
    getHuntGroupSidsList(): Array<number>;
    setHuntGroupSidsList(value: Array<number>): void;
    addHuntGroupSids(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DefaultRouting.AsObject;
    static toObject(includeInstance: boolean, msg: DefaultRouting): DefaultRouting.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DefaultRouting, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DefaultRouting;
    static deserializeBinaryFromReader(message: DefaultRouting, reader: jspb.BinaryReader): DefaultRouting;
  }

  export namespace DefaultRouting {
    export type AsObject = {
      routingMode: api_commons_org_pb.DefaultCallbackRoutingMap[keyof api_commons_org_pb.DefaultCallbackRoutingMap],
      agentSid: number,
      agentSkillsetsList: Array<number>,
      huntGroupSidsList: Array<number>,
    }
  }

  export class CallbackRoutingDisallowed extends jspb.Message {
    getUseRoutingLimiting(): boolean;
    setUseRoutingLimiting(value: boolean): void;

    clearAgentSidsList(): void;
    getAgentSidsList(): Array<number>;
    setAgentSidsList(value: Array<number>): void;
    addAgentSids(value: number, index?: number): number;

    clearHuntGroupSidsList(): void;
    getHuntGroupSidsList(): Array<number>;
    setHuntGroupSidsList(value: Array<number>): void;
    addHuntGroupSids(value: number, index?: number): number;

    clearAgentSkillSidsList(): void;
    getAgentSkillSidsList(): Array<number>;
    setAgentSkillSidsList(value: Array<number>): void;
    addAgentSkillSids(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallbackRoutingDisallowed.AsObject;
    static toObject(includeInstance: boolean, msg: CallbackRoutingDisallowed): CallbackRoutingDisallowed.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallbackRoutingDisallowed, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallbackRoutingDisallowed;
    static deserializeBinaryFromReader(message: CallbackRoutingDisallowed, reader: jspb.BinaryReader): CallbackRoutingDisallowed;
  }

  export namespace CallbackRoutingDisallowed {
    export type AsObject = {
      useRoutingLimiting: boolean,
      agentSidsList: Array<number>,
      huntGroupSidsList: Array<number>,
      agentSkillSidsList: Array<number>,
    }
  }
}

export class PreviewDialSettings extends jspb.Message {
  getEnablePreviewDialCancel(): boolean;
  setEnablePreviewDialCancel(value: boolean): void;

  getEnableAutoPauseOnCancel(): boolean;
  setEnableAutoPauseOnCancel(value: boolean): void;

  getTimeoutMinutes(): number;
  setTimeoutMinutes(value: number): void;

  getRequireNumberConfirmation(): boolean;
  setRequireNumberConfirmation(value: boolean): void;

  getPreviewQueueConfig(): string;
  setPreviewQueueConfig(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreviewDialSettings.AsObject;
  static toObject(includeInstance: boolean, msg: PreviewDialSettings): PreviewDialSettings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PreviewDialSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreviewDialSettings;
  static deserializeBinaryFromReader(message: PreviewDialSettings, reader: jspb.BinaryReader): PreviewDialSettings;
}

export namespace PreviewDialSettings {
  export type AsObject = {
    enablePreviewDialCancel: boolean,
    enableAutoPauseOnCancel: boolean,
    timeoutMinutes: number,
    requireNumberConfirmation: boolean,
    previewQueueConfig: string,
  }
}

export class ManualDialSettings extends jspb.Message {
  getEnableManualDial(): boolean;
  setEnableManualDial(value: boolean): void;

  getQueueConfigurationName(): string;
  setQueueConfigurationName(value: string): void;

  getDefaultCallRecording(): api_commons_org_pb.HuntGroupOrgDefaultCustomMap[keyof api_commons_org_pb.HuntGroupOrgDefaultCustomMap];
  setDefaultCallRecording(value: api_commons_org_pb.HuntGroupOrgDefaultCustomMap[keyof api_commons_org_pb.HuntGroupOrgDefaultCustomMap]): void;

  getCellPhoneScrub(): api_commons_org_pb.HuntGroupOrgDefaultCustomMap[keyof api_commons_org_pb.HuntGroupOrgDefaultCustomMap];
  setCellPhoneScrub(value: api_commons_org_pb.HuntGroupOrgDefaultCustomMap[keyof api_commons_org_pb.HuntGroupOrgDefaultCustomMap]): void;

  getTimeZoneRestriction(): api_commons_org_pb.HuntGroupOrgDefaultCustomMap[keyof api_commons_org_pb.HuntGroupOrgDefaultCustomMap];
  setTimeZoneRestriction(value: api_commons_org_pb.HuntGroupOrgDefaultCustomMap[keyof api_commons_org_pb.HuntGroupOrgDefaultCustomMap]): void;

  getTimeZoneValidationPostalCode(): api_commons_org_pb.ManualDialTimeZoneValidationMap[keyof api_commons_org_pb.ManualDialTimeZoneValidationMap];
  setTimeZoneValidationPostalCode(value: api_commons_org_pb.ManualDialTimeZoneValidationMap[keyof api_commons_org_pb.ManualDialTimeZoneValidationMap]): void;

  hasNaturalComplianceScrub(): boolean;
  clearNaturalComplianceScrub(): void;
  getNaturalComplianceScrub(): NaturalLanguageComplianceScrub | undefined;
  setNaturalComplianceScrub(value?: NaturalLanguageComplianceScrub): void;

  hasScrubOverride(): boolean;
  clearScrubOverride(): void;
  getScrubOverride(): ManualDialSettings.ScrubOverride | undefined;
  setScrubOverride(value?: ManualDialSettings.ScrubOverride): void;

  getEnableWhitelist(): boolean;
  setEnableWhitelist(value: boolean): void;

  getDefaultOutboundCountry(): api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap];
  setDefaultOutboundCountry(value: api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap]): void;

  getDisplayOutboundCountrySelection(): boolean;
  setDisplayOutboundCountrySelection(value: boolean): void;

  getDisplayOutboundNumberPhoneBook(): boolean;
  setDisplayOutboundNumberPhoneBook(value: boolean): void;

  getDefaultCallerIdCountry(): api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap];
  setDefaultCallerIdCountry(value: api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap]): void;

  getDisplayCallerIdCountrySelection(): boolean;
  setDisplayCallerIdCountrySelection(value: boolean): void;

  getDisplayCallerIdPhoneBook(): boolean;
  setDisplayCallerIdPhoneBook(value: boolean): void;

  getEnableCustomizableCallerId(): boolean;
  setEnableCustomizableCallerId(value: boolean): void;

  hasDefaultCallerId(): boolean;
  clearDefaultCallerId(): void;
  getDefaultCallerId(): ManualDialSettings.DefaultCallerId | undefined;
  setDefaultCallerId(value?: ManualDialSettings.DefaultCallerId): void;

  getEnableCallerIdBucket(): boolean;
  setEnableCallerIdBucket(value: boolean): void;

  getRandomCallerIdBucket(): number;
  setRandomCallerIdBucket(value: number): void;

  getAutomateRandomCallerId(): boolean;
  setAutomateRandomCallerId(value: boolean): void;

  getEnableMaskCallerId(): boolean;
  setEnableMaskCallerId(value: boolean): void;

  getEnableSipAddress(): boolean;
  setEnableSipAddress(value: boolean): void;

  hasNaturalLanguageComplianceMetadata(): boolean;
  clearNaturalLanguageComplianceMetadata(): void;
  getNaturalLanguageComplianceMetadata(): NaturalLanguageComplianceMetadata | undefined;
  setNaturalLanguageComplianceMetadata(value?: NaturalLanguageComplianceMetadata): void;

  getDataDipScope(): api_commons_org_pb.ManualDialDataDipScopeMap[keyof api_commons_org_pb.ManualDialDataDipScopeMap];
  setDataDipScope(value: api_commons_org_pb.ManualDialDataDipScopeMap[keyof api_commons_org_pb.ManualDialDataDipScopeMap]): void;

  getDataDipConfigSid(): number;
  setDataDipConfigSid(value: number): void;

  getDataDipResultHandling(): api_commons_org_pb.ManualDialDataDipHandlingMap[keyof api_commons_org_pb.ManualDialDataDipHandlingMap];
  setDataDipResultHandling(value: api_commons_org_pb.ManualDialDataDipHandlingMap[keyof api_commons_org_pb.ManualDialDataDipHandlingMap]): void;

  clearDataDipIntegrationMappingsList(): void;
  getDataDipIntegrationMappingsList(): Array<ManualDialSettings.DataDipIntegrationMapping>;
  setDataDipIntegrationMappingsList(value: Array<ManualDialSettings.DataDipIntegrationMapping>): void;
  addDataDipIntegrationMappings(value?: ManualDialSettings.DataDipIntegrationMapping, index?: number): ManualDialSettings.DataDipIntegrationMapping;

  getDataDipIntegrationHandling(): api_commons_org_pb.ManualDialDataDipHandlingMap[keyof api_commons_org_pb.ManualDialDataDipHandlingMap];
  setDataDipIntegrationHandling(value: api_commons_org_pb.ManualDialDataDipHandlingMap[keyof api_commons_org_pb.ManualDialDataDipHandlingMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualDialSettings.AsObject;
  static toObject(includeInstance: boolean, msg: ManualDialSettings): ManualDialSettings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ManualDialSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualDialSettings;
  static deserializeBinaryFromReader(message: ManualDialSettings, reader: jspb.BinaryReader): ManualDialSettings;
}

export namespace ManualDialSettings {
  export type AsObject = {
    enableManualDial: boolean,
    queueConfigurationName: string,
    defaultCallRecording: api_commons_org_pb.HuntGroupOrgDefaultCustomMap[keyof api_commons_org_pb.HuntGroupOrgDefaultCustomMap],
    cellPhoneScrub: api_commons_org_pb.HuntGroupOrgDefaultCustomMap[keyof api_commons_org_pb.HuntGroupOrgDefaultCustomMap],
    timeZoneRestriction: api_commons_org_pb.HuntGroupOrgDefaultCustomMap[keyof api_commons_org_pb.HuntGroupOrgDefaultCustomMap],
    timeZoneValidationPostalCode: api_commons_org_pb.ManualDialTimeZoneValidationMap[keyof api_commons_org_pb.ManualDialTimeZoneValidationMap],
    naturalComplianceScrub?: NaturalLanguageComplianceScrub.AsObject,
    scrubOverride?: ManualDialSettings.ScrubOverride.AsObject,
    enableWhitelist: boolean,
    defaultOutboundCountry: api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap],
    displayOutboundCountrySelection: boolean,
    displayOutboundNumberPhoneBook: boolean,
    defaultCallerIdCountry: api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap],
    displayCallerIdCountrySelection: boolean,
    displayCallerIdPhoneBook: boolean,
    enableCustomizableCallerId: boolean,
    defaultCallerId?: ManualDialSettings.DefaultCallerId.AsObject,
    enableCallerIdBucket: boolean,
    randomCallerIdBucket: number,
    automateRandomCallerId: boolean,
    enableMaskCallerId: boolean,
    enableSipAddress: boolean,
    naturalLanguageComplianceMetadata?: NaturalLanguageComplianceMetadata.AsObject,
    dataDipScope: api_commons_org_pb.ManualDialDataDipScopeMap[keyof api_commons_org_pb.ManualDialDataDipScopeMap],
    dataDipConfigSid: number,
    dataDipResultHandling: api_commons_org_pb.ManualDialDataDipHandlingMap[keyof api_commons_org_pb.ManualDialDataDipHandlingMap],
    dataDipIntegrationMappingsList: Array<ManualDialSettings.DataDipIntegrationMapping.AsObject>,
    dataDipIntegrationHandling: api_commons_org_pb.ManualDialDataDipHandlingMap[keyof api_commons_org_pb.ManualDialDataDipHandlingMap],
  }

  export class ScrubOverride extends jspb.Message {
    getEnableDnclOverride(): boolean;
    setEnableDnclOverride(value: boolean): void;

    getEnableCellScrubOverride(): boolean;
    setEnableCellScrubOverride(value: boolean): void;

    getEnableTimeZoneScrubOverride(): boolean;
    setEnableTimeZoneScrubOverride(value: boolean): void;

    getNaturalComplianceOverride(): boolean;
    setNaturalComplianceOverride(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScrubOverride.AsObject;
    static toObject(includeInstance: boolean, msg: ScrubOverride): ScrubOverride.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScrubOverride, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScrubOverride;
    static deserializeBinaryFromReader(message: ScrubOverride, reader: jspb.BinaryReader): ScrubOverride;
  }

  export namespace ScrubOverride {
    export type AsObject = {
      enableDnclOverride: boolean,
      enableCellScrubOverride: boolean,
      enableTimeZoneScrubOverride: boolean,
      naturalComplianceOverride: boolean,
    }
  }

  export class DefaultCallerId extends jspb.Message {
    getUsage(): api_commons_org_pb.DefaultManualDialCallerIdMap[keyof api_commons_org_pb.DefaultManualDialCallerIdMap];
    setUsage(value: api_commons_org_pb.DefaultManualDialCallerIdMap[keyof api_commons_org_pb.DefaultManualDialCallerIdMap]): void;

    getCustomCallerId(): string;
    setCustomCallerId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DefaultCallerId.AsObject;
    static toObject(includeInstance: boolean, msg: DefaultCallerId): DefaultCallerId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DefaultCallerId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DefaultCallerId;
    static deserializeBinaryFromReader(message: DefaultCallerId, reader: jspb.BinaryReader): DefaultCallerId;
  }

  export namespace DefaultCallerId {
    export type AsObject = {
      usage: api_commons_org_pb.DefaultManualDialCallerIdMap[keyof api_commons_org_pb.DefaultManualDialCallerIdMap],
      customCallerId: string,
    }
  }

  export class DataDipIntegrationMapping extends jspb.Message {
    getMappingType(): api_commons_org_pb.ManualDialDataDipIntegrationMap[keyof api_commons_org_pb.ManualDialDataDipIntegrationMap];
    setMappingType(value: api_commons_org_pb.ManualDialDataDipIntegrationMap[keyof api_commons_org_pb.ManualDialDataDipIntegrationMap]): void;

    getDataDipReturnKey(): string;
    setDataDipReturnKey(value: string): void;

    getContactFieldDescriptionSid(): number;
    setContactFieldDescriptionSid(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataDipIntegrationMapping.AsObject;
    static toObject(includeInstance: boolean, msg: DataDipIntegrationMapping): DataDipIntegrationMapping.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataDipIntegrationMapping, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataDipIntegrationMapping;
    static deserializeBinaryFromReader(message: DataDipIntegrationMapping, reader: jspb.BinaryReader): DataDipIntegrationMapping;
  }

  export namespace DataDipIntegrationMapping {
    export type AsObject = {
      mappingType: api_commons_org_pb.ManualDialDataDipIntegrationMap[keyof api_commons_org_pb.ManualDialDataDipIntegrationMap],
      dataDipReturnKey: string,
      contactFieldDescriptionSid: number,
    }
  }
}

export class NaturalLanguageComplianceScrub extends jspb.Message {
  getComplianceScrub(): api_commons_org_pb.HuntGroupOrgDefaultCustomMap[keyof api_commons_org_pb.HuntGroupOrgDefaultCustomMap];
  setComplianceScrub(value: api_commons_org_pb.HuntGroupOrgDefaultCustomMap[keyof api_commons_org_pb.HuntGroupOrgDefaultCustomMap]): void;

  getRuleSetId(): string;
  setRuleSetId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NaturalLanguageComplianceScrub.AsObject;
  static toObject(includeInstance: boolean, msg: NaturalLanguageComplianceScrub): NaturalLanguageComplianceScrub.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NaturalLanguageComplianceScrub, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NaturalLanguageComplianceScrub;
  static deserializeBinaryFromReader(message: NaturalLanguageComplianceScrub, reader: jspb.BinaryReader): NaturalLanguageComplianceScrub;
}

export namespace NaturalLanguageComplianceScrub {
  export type AsObject = {
    complianceScrub: api_commons_org_pb.HuntGroupOrgDefaultCustomMap[keyof api_commons_org_pb.HuntGroupOrgDefaultCustomMap],
    ruleSetId: string,
  }
}

export class NaturalLanguageComplianceMetadata extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  clearOptionalDataList(): void;
  getOptionalDataList(): Array<number>;
  setOptionalDataList(value: Array<number>): void;
  addOptionalData(value: number, index?: number): number;

  clearRequiredDataList(): void;
  getRequiredDataList(): Array<number>;
  setRequiredDataList(value: Array<number>): void;
  addRequiredData(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NaturalLanguageComplianceMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: NaturalLanguageComplianceMetadata): NaturalLanguageComplianceMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NaturalLanguageComplianceMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NaturalLanguageComplianceMetadata;
  static deserializeBinaryFromReader(message: NaturalLanguageComplianceMetadata, reader: jspb.BinaryReader): NaturalLanguageComplianceMetadata;
}

export namespace NaturalLanguageComplianceMetadata {
  export type AsObject = {
    enabled: boolean,
    optionalDataList: Array<number>,
    requiredDataList: Array<number>,
  }
}

export class CallerIdBucketData extends jspb.Message {
  getXmlClientPropertySid(): number;
  setXmlClientPropertySid(value: number): void;

  getBucketName(): string;
  setBucketName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallerIdBucketData.AsObject;
  static toObject(includeInstance: boolean, msg: CallerIdBucketData): CallerIdBucketData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallerIdBucketData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallerIdBucketData;
  static deserializeBinaryFromReader(message: CallerIdBucketData, reader: jspb.BinaryReader): CallerIdBucketData;
}

export namespace CallerIdBucketData {
  export type AsObject = {
    xmlClientPropertySid: number,
    bucketName: string,
  }
}

export class TransferCallSettings extends jspb.Message {
  getEnableTransfer(): boolean;
  setEnableTransfer(value: boolean): void;

  hasHandOffTypes(): boolean;
  clearHandOffTypes(): void;
  getHandOffTypes(): TransferCallSettings.HandOffTypes | undefined;
  setHandOffTypes(value?: TransferCallSettings.HandOffTypes): void;

  getRecordingStatus(): api_commons_org_pb.TransferRecordingStatusMap[keyof api_commons_org_pb.TransferRecordingStatusMap];
  setRecordingStatus(value: api_commons_org_pb.TransferRecordingStatusMap[keyof api_commons_org_pb.TransferRecordingStatusMap]): void;

  hasTransferTypes(): boolean;
  clearTransferTypes(): void;
  getTransferTypes(): TransferCallSettings.TransferTypes | undefined;
  setTransferTypes(value?: TransferCallSettings.TransferTypes): void;

  getDisplayTransferNumberPhoneBook(): boolean;
  setDisplayTransferNumberPhoneBook(value: boolean): void;

  getEnableTransferNumberEditing(): boolean;
  setEnableTransferNumberEditing(value: boolean): void;

  getDefaultTransferNumber(): string;
  setDefaultTransferNumber(value: string): void;

  clearStartRecordingNumbersList(): void;
  getStartRecordingNumbersList(): Array<string>;
  setStartRecordingNumbersList(value: Array<string>): void;
  addStartRecordingNumbers(value: string, index?: number): string;

  clearStopRecordingNumbersList(): void;
  getStopRecordingNumbersList(): Array<string>;
  setStopRecordingNumbersList(value: Array<string>): void;
  addStopRecordingNumbers(value: string, index?: number): string;

  getTransferNumberCountry(): api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap];
  setTransferNumberCountry(value: api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap]): void;

  getDisplayTransferCountrySelection(): boolean;
  setDisplayTransferCountrySelection(value: boolean): void;

  getDisplayCallerIdPhoneBook(): boolean;
  setDisplayCallerIdPhoneBook(value: boolean): void;

  getEnableCallerIdEditing(): boolean;
  setEnableCallerIdEditing(value: boolean): void;

  hasDefaultCallerId(): boolean;
  clearDefaultCallerId(): void;
  getDefaultCallerId(): TransferCallSettings.DefaultCallerId | undefined;
  setDefaultCallerId(value?: TransferCallSettings.DefaultCallerId): void;

  getCallerIdCountry(): api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap];
  setCallerIdCountry(value: api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap]): void;

  getDisplayCallerIdCountrySelection(): boolean;
  setDisplayCallerIdCountrySelection(value: boolean): void;

  getDisplayAgentTransferFiltering(): boolean;
  setDisplayAgentTransferFiltering(value: boolean): void;

  getDefaultAgentTransferFiltering(): boolean;
  setDefaultAgentTransferFiltering(value: boolean): void;

  getEnableHuntGroupFiltering(): boolean;
  setEnableHuntGroupFiltering(value: boolean): void;

  hasRequeueQueueConfig(): boolean;
  clearRequeueQueueConfig(): void;
  getRequeueQueueConfig(): TransferCallSettings.RequeueQueueConfiguration | undefined;
  setRequeueQueueConfig(value?: TransferCallSettings.RequeueQueueConfiguration): void;

  hasRequeueTransferDisallowed(): boolean;
  clearRequeueTransferDisallowed(): void;
  getRequeueTransferDisallowed(): TransferCallSettings.RequeueTransferDisallowed | undefined;
  setRequeueTransferDisallowed(value?: TransferCallSettings.RequeueTransferDisallowed): void;

  hasPbxTransferDisallowed(): boolean;
  clearPbxTransferDisallowed(): void;
  getPbxTransferDisallowed(): TransferCallSettings.PbxTransferDisallowed | undefined;
  setPbxTransferDisallowed(value?: TransferCallSettings.PbxTransferDisallowed): void;

  getEnableScrubOverride(): boolean;
  setEnableScrubOverride(value: boolean): void;

  getEnableWhitelist(): boolean;
  setEnableWhitelist(value: boolean): void;

  hasNaturalComplianceScrub(): boolean;
  clearNaturalComplianceScrub(): void;
  getNaturalComplianceScrub(): NaturalLanguageComplianceScrub | undefined;
  setNaturalComplianceScrub(value?: NaturalLanguageComplianceScrub): void;

  hasNaturalLanguageComplianceMetadata(): boolean;
  clearNaturalLanguageComplianceMetadata(): void;
  getNaturalLanguageComplianceMetadata(): NaturalLanguageComplianceMetadata | undefined;
  setNaturalLanguageComplianceMetadata(value?: NaturalLanguageComplianceMetadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferCallSettings.AsObject;
  static toObject(includeInstance: boolean, msg: TransferCallSettings): TransferCallSettings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferCallSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferCallSettings;
  static deserializeBinaryFromReader(message: TransferCallSettings, reader: jspb.BinaryReader): TransferCallSettings;
}

export namespace TransferCallSettings {
  export type AsObject = {
    enableTransfer: boolean,
    handOffTypes?: TransferCallSettings.HandOffTypes.AsObject,
    recordingStatus: api_commons_org_pb.TransferRecordingStatusMap[keyof api_commons_org_pb.TransferRecordingStatusMap],
    transferTypes?: TransferCallSettings.TransferTypes.AsObject,
    displayTransferNumberPhoneBook: boolean,
    enableTransferNumberEditing: boolean,
    defaultTransferNumber: string,
    startRecordingNumbersList: Array<string>,
    stopRecordingNumbersList: Array<string>,
    transferNumberCountry: api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap],
    displayTransferCountrySelection: boolean,
    displayCallerIdPhoneBook: boolean,
    enableCallerIdEditing: boolean,
    defaultCallerId?: TransferCallSettings.DefaultCallerId.AsObject,
    callerIdCountry: api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap],
    displayCallerIdCountrySelection: boolean,
    displayAgentTransferFiltering: boolean,
    defaultAgentTransferFiltering: boolean,
    enableHuntGroupFiltering: boolean,
    requeueQueueConfig?: TransferCallSettings.RequeueQueueConfiguration.AsObject,
    requeueTransferDisallowed?: TransferCallSettings.RequeueTransferDisallowed.AsObject,
    pbxTransferDisallowed?: TransferCallSettings.PbxTransferDisallowed.AsObject,
    enableScrubOverride: boolean,
    enableWhitelist: boolean,
    naturalComplianceScrub?: NaturalLanguageComplianceScrub.AsObject,
    naturalLanguageComplianceMetadata?: NaturalLanguageComplianceMetadata.AsObject,
  }

  export class HandOffTypes extends jspb.Message {
    getEnableConference(): boolean;
    setEnableConference(value: boolean): void;

    getEnableWarm(): boolean;
    setEnableWarm(value: boolean): void;

    getEnableCold(): boolean;
    setEnableCold(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HandOffTypes.AsObject;
    static toObject(includeInstance: boolean, msg: HandOffTypes): HandOffTypes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HandOffTypes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HandOffTypes;
    static deserializeBinaryFromReader(message: HandOffTypes, reader: jspb.BinaryReader): HandOffTypes;
  }

  export namespace HandOffTypes {
    export type AsObject = {
      enableConference: boolean,
      enableWarm: boolean,
      enableCold: boolean,
    }
  }

  export class TransferTypes extends jspb.Message {
    getEnableAgentTransfer(): boolean;
    setEnableAgentTransfer(value: boolean): void;

    getEnableOpenTransfer(): boolean;
    setEnableOpenTransfer(value: boolean): void;

    getEnableRequeueTransfer(): boolean;
    setEnableRequeueTransfer(value: boolean): void;

    getEnablePbxExtensionTransfer(): boolean;
    setEnablePbxExtensionTransfer(value: boolean): void;

    getEnableVoicemailTransfer(): boolean;
    setEnableVoicemailTransfer(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransferTypes.AsObject;
    static toObject(includeInstance: boolean, msg: TransferTypes): TransferTypes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransferTypes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransferTypes;
    static deserializeBinaryFromReader(message: TransferTypes, reader: jspb.BinaryReader): TransferTypes;
  }

  export namespace TransferTypes {
    export type AsObject = {
      enableAgentTransfer: boolean,
      enableOpenTransfer: boolean,
      enableRequeueTransfer: boolean,
      enablePbxExtensionTransfer: boolean,
      enableVoicemailTransfer: boolean,
    }
  }

  export class RequeueTransferDisallowed extends jspb.Message {
    getEnable(): boolean;
    setEnable(value: boolean): void;

    clearAgentSkillSidsList(): void;
    getAgentSkillSidsList(): Array<number>;
    setAgentSkillSidsList(value: Array<number>): void;
    addAgentSkillSids(value: number, index?: number): number;

    clearHuntGroupSidsList(): void;
    getHuntGroupSidsList(): Array<number>;
    setHuntGroupSidsList(value: Array<number>): void;
    addHuntGroupSids(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RequeueTransferDisallowed.AsObject;
    static toObject(includeInstance: boolean, msg: RequeueTransferDisallowed): RequeueTransferDisallowed.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RequeueTransferDisallowed, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RequeueTransferDisallowed;
    static deserializeBinaryFromReader(message: RequeueTransferDisallowed, reader: jspb.BinaryReader): RequeueTransferDisallowed;
  }

  export namespace RequeueTransferDisallowed {
    export type AsObject = {
      enable: boolean,
      agentSkillSidsList: Array<number>,
      huntGroupSidsList: Array<number>,
    }
  }

  export class PbxTransferDisallowed extends jspb.Message {
    getEnable(): boolean;
    setEnable(value: boolean): void;

    clearExtensionsList(): void;
    getExtensionsList(): Array<string>;
    setExtensionsList(value: Array<string>): void;
    addExtensions(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PbxTransferDisallowed.AsObject;
    static toObject(includeInstance: boolean, msg: PbxTransferDisallowed): PbxTransferDisallowed.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PbxTransferDisallowed, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PbxTransferDisallowed;
    static deserializeBinaryFromReader(message: PbxTransferDisallowed, reader: jspb.BinaryReader): PbxTransferDisallowed;
  }

  export namespace PbxTransferDisallowed {
    export type AsObject = {
      enable: boolean,
      extensionsList: Array<string>,
    }
  }

  export class RequeueQueueConfiguration extends jspb.Message {
    getUsage(): api_commons_org_pb.RequeueTransferQueueConfigMap[keyof api_commons_org_pb.RequeueTransferQueueConfigMap];
    setUsage(value: api_commons_org_pb.RequeueTransferQueueConfigMap[keyof api_commons_org_pb.RequeueTransferQueueConfigMap]): void;

    getCustomName(): string;
    setCustomName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RequeueQueueConfiguration.AsObject;
    static toObject(includeInstance: boolean, msg: RequeueQueueConfiguration): RequeueQueueConfiguration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RequeueQueueConfiguration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RequeueQueueConfiguration;
    static deserializeBinaryFromReader(message: RequeueQueueConfiguration, reader: jspb.BinaryReader): RequeueQueueConfiguration;
  }

  export namespace RequeueQueueConfiguration {
    export type AsObject = {
      usage: api_commons_org_pb.RequeueTransferQueueConfigMap[keyof api_commons_org_pb.RequeueTransferQueueConfigMap],
      customName: string,
    }
  }

  export class DefaultCallerId extends jspb.Message {
    getUsage(): api_commons_org_pb.DefaultTransferCallerIdMap[keyof api_commons_org_pb.DefaultTransferCallerIdMap];
    setUsage(value: api_commons_org_pb.DefaultTransferCallerIdMap[keyof api_commons_org_pb.DefaultTransferCallerIdMap]): void;

    getCustomCallerId(): string;
    setCustomCallerId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DefaultCallerId.AsObject;
    static toObject(includeInstance: boolean, msg: DefaultCallerId): DefaultCallerId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DefaultCallerId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DefaultCallerId;
    static deserializeBinaryFromReader(message: DefaultCallerId, reader: jspb.BinaryReader): DefaultCallerId;
  }

  export namespace DefaultCallerId {
    export type AsObject = {
      usage: api_commons_org_pb.DefaultTransferCallerIdMap[keyof api_commons_org_pb.DefaultTransferCallerIdMap],
      customCallerId: string,
    }
  }
}

export class NumberHistorySettings extends jspb.Message {
  getEnableSearch(): boolean;
  setEnableSearch(value: boolean): void;

  getEnableReportDownload(): boolean;
  setEnableReportDownload(value: boolean): void;

  getEnableRecordingsDownload(): boolean;
  setEnableRecordingsDownload(value: boolean): void;

  getEnableAgentResponseEditing(): boolean;
  setEnableAgentResponseEditing(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NumberHistorySettings.AsObject;
  static toObject(includeInstance: boolean, msg: NumberHistorySettings): NumberHistorySettings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NumberHistorySettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NumberHistorySettings;
  static deserializeBinaryFromReader(message: NumberHistorySettings, reader: jspb.BinaryReader): NumberHistorySettings;
}

export namespace NumberHistorySettings {
  export type AsObject = {
    enableSearch: boolean,
    enableReportDownload: boolean,
    enableRecordingsDownload: boolean,
    enableAgentResponseEditing: boolean,
  }
}

export class AgentResponseAutoRuleSet extends jspb.Message {
  getRulesetSid(): number;
  setRulesetSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getCountry(): api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap];
  setCountry(value: api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap]): void;

  clearResponsesList(): void;
  getResponsesList(): Array<AutoResponseChoice>;
  setResponsesList(value: Array<AutoResponseChoice>): void;
  addResponses(value?: AutoResponseChoice, index?: number): AutoResponseChoice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentResponseAutoRuleSet.AsObject;
  static toObject(includeInstance: boolean, msg: AgentResponseAutoRuleSet): AgentResponseAutoRuleSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentResponseAutoRuleSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentResponseAutoRuleSet;
  static deserializeBinaryFromReader(message: AgentResponseAutoRuleSet, reader: jspb.BinaryReader): AgentResponseAutoRuleSet;
}

export namespace AgentResponseAutoRuleSet {
  export type AsObject = {
    rulesetSid: number,
    name: string,
    description: string,
    country: api_commons_country_pb.CountryMap[keyof api_commons_country_pb.CountryMap],
    responsesList: Array<AutoResponseChoice.AsObject>,
  }
}

export class AutoResponseChoice extends jspb.Message {
  getAgentCallResponse(): string;
  setAgentCallResponse(value: string): void;

  clearComparitorsList(): void;
  getComparitorsList(): Array<AgentResponseComparitors>;
  setComparitorsList(value: Array<AgentResponseComparitors>): void;
  addComparitors(value?: AgentResponseComparitors, index?: number): AgentResponseComparitors;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AutoResponseChoice.AsObject;
  static toObject(includeInstance: boolean, msg: AutoResponseChoice): AutoResponseChoice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AutoResponseChoice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AutoResponseChoice;
  static deserializeBinaryFromReader(message: AutoResponseChoice, reader: jspb.BinaryReader): AutoResponseChoice;
}

export namespace AutoResponseChoice {
  export type AsObject = {
    agentCallResponse: string,
    comparitorsList: Array<AgentResponseComparitors.AsObject>,
  }
}

export class AgentResponseComparitors extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  getExpiration(): number;
  setExpiration(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentResponseComparitors.AsObject;
  static toObject(includeInstance: boolean, msg: AgentResponseComparitors): AgentResponseComparitors.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentResponseComparitors, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentResponseComparitors;
  static deserializeBinaryFromReader(message: AgentResponseComparitors, reader: jspb.BinaryReader): AgentResponseComparitors;
}

export namespace AgentResponseComparitors {
  export type AsObject = {
    value: string,
    expiration: number,
  }
}

export class DataDipConfig extends jspb.Message {
  getConfigName(): string;
  setConfigName(value: string): void;

  getConfigType(): string;
  setConfigType(value: string): void;

  getRemoteUrl(): string;
  setRemoteUrl(value: string): void;

  clearParamTypeValueTuplesList(): void;
  getParamTypeValueTuplesList(): Array<DataDipConfig.ParamTypeValueTuple>;
  setParamTypeValueTuplesList(value: Array<DataDipConfig.ParamTypeValueTuple>): void;
  addParamTypeValueTuples(value?: DataDipConfig.ParamTypeValueTuple, index?: number): DataDipConfig.ParamTypeValueTuple;

  clearParamsList(): void;
  getParamsList(): Array<DataDipConfig.Param>;
  setParamsList(value: Array<DataDipConfig.Param>): void;
  addParams(value?: DataDipConfig.Param, index?: number): DataDipConfig.Param;

  clearDataList(): void;
  getDataList(): Array<DataDipConfig.ReturnData>;
  setDataList(value: Array<DataDipConfig.ReturnData>): void;
  addData(value?: DataDipConfig.ReturnData, index?: number): DataDipConfig.ReturnData;

  getRequestMethod(): string;
  setRequestMethod(value: string): void;

  getXmlClientPropertySid(): number;
  setXmlClientPropertySid(value: number): void;

  clearHeadersList(): void;
  getHeadersList(): Array<DataDipConfig.Header>;
  setHeadersList(value: Array<DataDipConfig.Header>): void;
  addHeaders(value?: DataDipConfig.Header, index?: number): DataDipConfig.Header;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataDipConfig.AsObject;
  static toObject(includeInstance: boolean, msg: DataDipConfig): DataDipConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataDipConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataDipConfig;
  static deserializeBinaryFromReader(message: DataDipConfig, reader: jspb.BinaryReader): DataDipConfig;
}

export namespace DataDipConfig {
  export type AsObject = {
    configName: string,
    configType: string,
    remoteUrl: string,
    paramTypeValueTuplesList: Array<DataDipConfig.ParamTypeValueTuple.AsObject>,
    paramsList: Array<DataDipConfig.Param.AsObject>,
    dataList: Array<DataDipConfig.ReturnData.AsObject>,
    requestMethod: string,
    xmlClientPropertySid: number,
    headersList: Array<DataDipConfig.Header.AsObject>,
  }

  export class Param extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getValue(): string;
    setValue(value: string): void;

    getParamType(): string;
    setParamType(value: string): void;

    clearCompositeValueList(): void;
    getCompositeValueList(): Array<DataDipConfig.ParamTypeValueTuple>;
    setCompositeValueList(value: Array<DataDipConfig.ParamTypeValueTuple>): void;
    addCompositeValue(value?: DataDipConfig.ParamTypeValueTuple, index?: number): DataDipConfig.ParamTypeValueTuple;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Param.AsObject;
    static toObject(includeInstance: boolean, msg: Param): Param.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Param, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Param;
    static deserializeBinaryFromReader(message: Param, reader: jspb.BinaryReader): Param;
  }

  export namespace Param {
    export type AsObject = {
      name: string,
      value: string,
      paramType: string,
      compositeValueList: Array<DataDipConfig.ParamTypeValueTuple.AsObject>,
    }
  }

  export class ParamTypeValueTuple extends jspb.Message {
    getKey(): string;
    setKey(value: string): void;

    getValue(): string;
    setValue(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ParamTypeValueTuple.AsObject;
    static toObject(includeInstance: boolean, msg: ParamTypeValueTuple): ParamTypeValueTuple.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ParamTypeValueTuple, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ParamTypeValueTuple;
    static deserializeBinaryFromReader(message: ParamTypeValueTuple, reader: jspb.BinaryReader): ParamTypeValueTuple;
  }

  export namespace ParamTypeValueTuple {
    export type AsObject = {
      key: string,
      value: string,
    }
  }

  export class ReturnData extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getAccessType(): string;
    setAccessType(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReturnData.AsObject;
    static toObject(includeInstance: boolean, msg: ReturnData): ReturnData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReturnData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReturnData;
    static deserializeBinaryFromReader(message: ReturnData, reader: jspb.BinaryReader): ReturnData;
  }

  export namespace ReturnData {
    export type AsObject = {
      name: string,
      accessType: string,
    }
  }

  export class Header extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getValue(): string;
    setValue(value: string): void;

    getHeaderType(): string;
    setHeaderType(value: string): void;

    clearParamTypeValueTuplesList(): void;
    getParamTypeValueTuplesList(): Array<DataDipConfig.ParamTypeValueTuple>;
    setParamTypeValueTuplesList(value: Array<DataDipConfig.ParamTypeValueTuple>): void;
    addParamTypeValueTuples(value?: DataDipConfig.ParamTypeValueTuple, index?: number): DataDipConfig.ParamTypeValueTuple;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Header.AsObject;
    static toObject(includeInstance: boolean, msg: Header): Header.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Header, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Header;
    static deserializeBinaryFromReader(message: Header, reader: jspb.BinaryReader): Header;
  }

  export namespace Header {
    export type AsObject = {
      name: string,
      value: string,
      headerType: string,
      paramTypeValueTuplesList: Array<DataDipConfig.ParamTypeValueTuple.AsObject>,
    }
  }
}

