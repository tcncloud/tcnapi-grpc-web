// package: api.commons.org
// file: api/commons/org/huntgroup.proto

import * as jspb from "google-protobuf";
import * as api_commons_country_pb from "../../../api/commons/country_pb";
import * as api_commons_org_pb from "../../../api/commons/org_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

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

  hasPrepareStateCallDelivery(): boolean;
  clearPrepareStateCallDelivery(): void;
  getPrepareStateCallDelivery(): GeneralSettings.PrepareStateCallDelivery | undefined;
  setPrepareStateCallDelivery(value?: GeneralSettings.PrepareStateCallDelivery): void;

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
    prepareStateCallDelivery?: GeneralSettings.PrepareStateCallDelivery.AsObject,
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

  export class PrepareStateCallDelivery extends jspb.Message {
    getManualDial(): boolean;
    setManualDial(value: boolean): void;

    getPreviewDial(): boolean;
    setPreviewDial(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PrepareStateCallDelivery.AsObject;
    static toObject(includeInstance: boolean, msg: PrepareStateCallDelivery): PrepareStateCallDelivery.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PrepareStateCallDelivery, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PrepareStateCallDelivery;
    static deserializeBinaryFromReader(message: PrepareStateCallDelivery, reader: jspb.BinaryReader): PrepareStateCallDelivery;
  }

  export namespace PrepareStateCallDelivery {
    export type AsObject = {
      manualDial: boolean,
      previewDial: boolean,
    }
  }
}

export class HuntGroupDetails extends jspb.Message {
  hasGeneralDetails(): boolean;
  clearGeneralDetails(): void;
  getGeneralDetails(): HuntGroupDetails.GeneralDetails | undefined;
  setGeneralDetails(value?: HuntGroupDetails.GeneralDetails): void;

  hasTemplateDetails(): boolean;
  clearTemplateDetails(): void;
  getTemplateDetails(): HuntGroupDetails.ClientInfoDisplayTemplateDetails | undefined;
  setTemplateDetails(value?: HuntGroupDetails.ClientInfoDisplayTemplateDetails): void;

  clearWebLinkDetailsList(): void;
  getWebLinkDetailsList(): Array<HuntGroupDetails.WebLinkDetails>;
  setWebLinkDetailsList(value: Array<HuntGroupDetails.WebLinkDetails>): void;
  addWebLinkDetails(value?: HuntGroupDetails.WebLinkDetails, index?: number): HuntGroupDetails.WebLinkDetails;

  clearTriggerDetailsList(): void;
  getTriggerDetailsList(): Array<HuntGroupDetails.TriggerDetails>;
  setTriggerDetailsList(value: Array<HuntGroupDetails.TriggerDetails>): void;
  addTriggerDetails(value?: HuntGroupDetails.TriggerDetails, index?: number): HuntGroupDetails.TriggerDetails;

  clearIntegrationLinkDetailsList(): void;
  getIntegrationLinkDetailsList(): Array<HuntGroupDetails.IntegrationLinkDetails>;
  setIntegrationLinkDetailsList(value: Array<HuntGroupDetails.IntegrationLinkDetails>): void;
  addIntegrationLinkDetails(value?: HuntGroupDetails.IntegrationLinkDetails, index?: number): HuntGroupDetails.IntegrationLinkDetails;

  hasScriptDetails(): boolean;
  clearScriptDetails(): void;
  getScriptDetails(): HuntGroupDetails.ScriptDetails | undefined;
  setScriptDetails(value?: HuntGroupDetails.ScriptDetails): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HuntGroupDetails.AsObject;
  static toObject(includeInstance: boolean, msg: HuntGroupDetails): HuntGroupDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HuntGroupDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HuntGroupDetails;
  static deserializeBinaryFromReader(message: HuntGroupDetails, reader: jspb.BinaryReader): HuntGroupDetails;
}

export namespace HuntGroupDetails {
  export type AsObject = {
    generalDetails?: HuntGroupDetails.GeneralDetails.AsObject,
    templateDetails?: HuntGroupDetails.ClientInfoDisplayTemplateDetails.AsObject,
    webLinkDetailsList: Array<HuntGroupDetails.WebLinkDetails.AsObject>,
    triggerDetailsList: Array<HuntGroupDetails.TriggerDetails.AsObject>,
    integrationLinkDetailsList: Array<HuntGroupDetails.IntegrationLinkDetails.AsObject>,
    scriptDetails?: HuntGroupDetails.ScriptDetails.AsObject,
  }

  export class GeneralDetails extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getDescription(): string;
    setDescription(value: string): void;

    getType(): HuntGroupTypeMap[keyof HuntGroupTypeMap];
    setType(value: HuntGroupTypeMap[keyof HuntGroupTypeMap]): void;

    hasModifyDate(): boolean;
    clearModifyDate(): void;
    getModifyDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifyDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

    getAgentCount(): number;
    setAgentCount(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GeneralDetails.AsObject;
    static toObject(includeInstance: boolean, msg: GeneralDetails): GeneralDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GeneralDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GeneralDetails;
    static deserializeBinaryFromReader(message: GeneralDetails, reader: jspb.BinaryReader): GeneralDetails;
  }

  export namespace GeneralDetails {
    export type AsObject = {
      name: string,
      description: string,
      type: HuntGroupTypeMap[keyof HuntGroupTypeMap],
      modifyDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      agentCount: number,
    }
  }

  export class ClientInfoDisplayTemplateDetails extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getDescription(): string;
    setDescription(value: string): void;

    getDisplayAllFields(): boolean;
    setDisplayAllFields(value: boolean): void;

    getDefinedFieldCount(): number;
    setDefinedFieldCount(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClientInfoDisplayTemplateDetails.AsObject;
    static toObject(includeInstance: boolean, msg: ClientInfoDisplayTemplateDetails): ClientInfoDisplayTemplateDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClientInfoDisplayTemplateDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClientInfoDisplayTemplateDetails;
    static deserializeBinaryFromReader(message: ClientInfoDisplayTemplateDetails, reader: jspb.BinaryReader): ClientInfoDisplayTemplateDetails;
  }

  export namespace ClientInfoDisplayTemplateDetails {
    export type AsObject = {
      name: string,
      description: string,
      displayAllFields: boolean,
      definedFieldCount: number,
    }
  }

  export class WebLinkDetails extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getDescription(): string;
    setDescription(value: string): void;

    getBaseUrl(): string;
    setBaseUrl(value: string): void;

    getParameterCount(): number;
    setParameterCount(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebLinkDetails.AsObject;
    static toObject(includeInstance: boolean, msg: WebLinkDetails): WebLinkDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebLinkDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebLinkDetails;
    static deserializeBinaryFromReader(message: WebLinkDetails, reader: jspb.BinaryReader): WebLinkDetails;
  }

  export namespace WebLinkDetails {
    export type AsObject = {
      name: string,
      description: string,
      baseUrl: string,
      parameterCount: number,
    }
  }

  export class TriggerDetails extends jspb.Message {
    getDescription(): string;
    setDescription(value: string): void;

    getStatus(): AgentStatusMap[keyof AgentStatusMap];
    setStatus(value: AgentStatusMap[keyof AgentStatusMap]): void;

    getDuration(): number;
    setDuration(value: number): void;

    getAction(): TriggerActionMap[keyof TriggerActionMap];
    setAction(value: TriggerActionMap[keyof TriggerActionMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TriggerDetails.AsObject;
    static toObject(includeInstance: boolean, msg: TriggerDetails): TriggerDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TriggerDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TriggerDetails;
    static deserializeBinaryFromReader(message: TriggerDetails, reader: jspb.BinaryReader): TriggerDetails;
  }

  export namespace TriggerDetails {
    export type AsObject = {
      description: string,
      status: AgentStatusMap[keyof AgentStatusMap],
      duration: number,
      action: TriggerActionMap[keyof TriggerActionMap],
    }
  }

  export class IntegrationLinkDetails extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getDescription(): string;
    setDescription(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IntegrationLinkDetails.AsObject;
    static toObject(includeInstance: boolean, msg: IntegrationLinkDetails): IntegrationLinkDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IntegrationLinkDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IntegrationLinkDetails;
    static deserializeBinaryFromReader(message: IntegrationLinkDetails, reader: jspb.BinaryReader): IntegrationLinkDetails;
  }

  export namespace IntegrationLinkDetails {
    export type AsObject = {
      name: string,
      description: string,
    }
  }

  export class ScriptDetails extends jspb.Message {
    getScriptSid(): number;
    setScriptSid(value: number): void;

    getName(): string;
    setName(value: string): void;

    getDescription(): string;
    setDescription(value: string): void;

    getActCount(): number;
    setActCount(value: number): void;

    getDispositionCount(): number;
    setDispositionCount(value: number): void;

    getVerbiageCount(): number;
    setVerbiageCount(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScriptDetails.AsObject;
    static toObject(includeInstance: boolean, msg: ScriptDetails): ScriptDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScriptDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScriptDetails;
    static deserializeBinaryFromReader(message: ScriptDetails, reader: jspb.BinaryReader): ScriptDetails;
  }

  export namespace ScriptDetails {
    export type AsObject = {
      scriptSid: number,
      name: string,
      description: string,
      actCount: number,
      dispositionCount: number,
      verbiageCount: number,
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

  getEnableRejectOptionForApprovers(): boolean;
  setEnableRejectOptionForApprovers(value: boolean): void;

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
    enableRejectOptionForApprovers: boolean,
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

export class ClientInfoDisplayTemplate extends jspb.Message {
  getTemplateSid(): string;
  setTemplateSid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getDisplayAllFields(): boolean;
  setDisplayAllFields(value: boolean): void;

  hasDialedNumberFieldStyle(): boolean;
  clearDialedNumberFieldStyle(): void;
  getDialedNumberFieldStyle(): DialedNumberFieldStyle | undefined;
  setDialedNumberFieldStyle(value?: DialedNumberFieldStyle): void;

  clearContactFieldStylesList(): void;
  getContactFieldStylesList(): Array<ContactFieldStyle>;
  setContactFieldStylesList(value: Array<ContactFieldStyle>): void;
  addContactFieldStyles(value?: ContactFieldStyle, index?: number): ContactFieldStyle;

  getTemplateCategory(): TemplateCategoryMap[keyof TemplateCategoryMap];
  setTemplateCategory(value: TemplateCategoryMap[keyof TemplateCategoryMap]): void;

  getClientInfoDisplayTemplateSid(): number;
  setClientInfoDisplayTemplateSid(value: number): void;

  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientInfoDisplayTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: ClientInfoDisplayTemplate): ClientInfoDisplayTemplate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientInfoDisplayTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientInfoDisplayTemplate;
  static deserializeBinaryFromReader(message: ClientInfoDisplayTemplate, reader: jspb.BinaryReader): ClientInfoDisplayTemplate;
}

export namespace ClientInfoDisplayTemplate {
  export type AsObject = {
    templateSid: string,
    name: string,
    description: string,
    displayAllFields: boolean,
    dialedNumberFieldStyle?: DialedNumberFieldStyle.AsObject,
    contactFieldStylesList: Array<ContactFieldStyle.AsObject>,
    templateCategory: TemplateCategoryMap[keyof TemplateCategoryMap],
    clientInfoDisplayTemplateSid: number,
    huntGroupSid: number,
  }
}

export class FieldStyle extends jspb.Message {
  getTextColor(): string;
  setTextColor(value: string): void;

  getBackgroundColor(): string;
  setBackgroundColor(value: string): void;

  getAllowAgentCopy(): boolean;
  setAllowAgentCopy(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldStyle.AsObject;
  static toObject(includeInstance: boolean, msg: FieldStyle): FieldStyle.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FieldStyle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldStyle;
  static deserializeBinaryFromReader(message: FieldStyle, reader: jspb.BinaryReader): FieldStyle;
}

export namespace FieldStyle {
  export type AsObject = {
    textColor: string,
    backgroundColor: string,
    allowAgentCopy: boolean,
  }
}

export class ContactFieldStyle extends jspb.Message {
  getDescriptionId(): number;
  setDescriptionId(value: number): void;

  hasFieldStyle(): boolean;
  clearFieldStyle(): void;
  getFieldStyle(): FieldStyle | undefined;
  setFieldStyle(value?: FieldStyle): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactFieldStyle.AsObject;
  static toObject(includeInstance: boolean, msg: ContactFieldStyle): ContactFieldStyle.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactFieldStyle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactFieldStyle;
  static deserializeBinaryFromReader(message: ContactFieldStyle, reader: jspb.BinaryReader): ContactFieldStyle;
}

export namespace ContactFieldStyle {
  export type AsObject = {
    descriptionId: number,
    fieldStyle?: FieldStyle.AsObject,
  }
}

export class DialedNumberFieldStyle extends jspb.Message {
  hasFieldStyle(): boolean;
  clearFieldStyle(): void;
  getFieldStyle(): FieldStyle | undefined;
  setFieldStyle(value?: FieldStyle): void;

  getDisplayToAgent(): boolean;
  setDisplayToAgent(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DialedNumberFieldStyle.AsObject;
  static toObject(includeInstance: boolean, msg: DialedNumberFieldStyle): DialedNumberFieldStyle.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DialedNumberFieldStyle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DialedNumberFieldStyle;
  static deserializeBinaryFromReader(message: DialedNumberFieldStyle, reader: jspb.BinaryReader): DialedNumberFieldStyle;
}

export namespace DialedNumberFieldStyle {
  export type AsObject = {
    fieldStyle?: FieldStyle.AsObject,
    displayToAgent: boolean,
  }
}

export class HuntGroupWithClientInfoTemplateData extends jspb.Message {
  hasHuntGroup(): boolean;
  clearHuntGroup(): void;
  getHuntGroup(): HuntGroupWithClientInfoTemplateData.HuntGroup | undefined;
  setHuntGroup(value?: HuntGroupWithClientInfoTemplateData.HuntGroup): void;

  hasTemplate(): boolean;
  clearTemplate(): void;
  getTemplate(): ClientInfoDisplayTemplate | undefined;
  setTemplate(value?: ClientInfoDisplayTemplate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HuntGroupWithClientInfoTemplateData.AsObject;
  static toObject(includeInstance: boolean, msg: HuntGroupWithClientInfoTemplateData): HuntGroupWithClientInfoTemplateData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HuntGroupWithClientInfoTemplateData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HuntGroupWithClientInfoTemplateData;
  static deserializeBinaryFromReader(message: HuntGroupWithClientInfoTemplateData, reader: jspb.BinaryReader): HuntGroupWithClientInfoTemplateData;
}

export namespace HuntGroupWithClientInfoTemplateData {
  export type AsObject = {
    huntGroup?: HuntGroupWithClientInfoTemplateData.HuntGroup.AsObject,
    template?: ClientInfoDisplayTemplate.AsObject,
  }

  export class HuntGroup extends jspb.Message {
    getClientSid(): number;
    setClientSid(value: number): void;

    getHuntGroupSid(): number;
    setHuntGroupSid(value: number): void;

    getHuntGroupName(): string;
    setHuntGroupName(value: string): void;

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
      clientSid: number,
      huntGroupSid: number,
      huntGroupName: string,
    }
  }
}

export class WebLink extends jspb.Message {
  getWebLinkSid(): number;
  setWebLinkSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getLinkType(): WebLinkTypeMap[keyof WebLinkTypeMap];
  setLinkType(value: WebLinkTypeMap[keyof WebLinkTypeMap]): void;

  getOrder(): number;
  setOrder(value: number): void;

  clearBaseUrlList(): void;
  getBaseUrlList(): Array<WebLinkComponent>;
  setBaseUrlList(value: Array<WebLinkComponent>): void;
  addBaseUrl(value?: WebLinkComponent, index?: number): WebLinkComponent;

  clearParametersList(): void;
  getParametersList(): Array<WebLinkParameter>;
  setParametersList(value: Array<WebLinkParameter>): void;
  addParameters(value?: WebLinkParameter, index?: number): WebLinkParameter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebLink.AsObject;
  static toObject(includeInstance: boolean, msg: WebLink): WebLink.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebLink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebLink;
  static deserializeBinaryFromReader(message: WebLink, reader: jspb.BinaryReader): WebLink;
}

export namespace WebLink {
  export type AsObject = {
    webLinkSid: number,
    name: string,
    description: string,
    linkType: WebLinkTypeMap[keyof WebLinkTypeMap],
    order: number,
    baseUrlList: Array<WebLinkComponent.AsObject>,
    parametersList: Array<WebLinkParameter.AsObject>,
  }
}

export class WebLinkComponent extends jspb.Message {
  getKeyType(): WebLinkComponentKeyTypeMap[keyof WebLinkComponentKeyTypeMap];
  setKeyType(value: WebLinkComponentKeyTypeMap[keyof WebLinkComponentKeyTypeMap]): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebLinkComponent.AsObject;
  static toObject(includeInstance: boolean, msg: WebLinkComponent): WebLinkComponent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebLinkComponent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebLinkComponent;
  static deserializeBinaryFromReader(message: WebLinkComponent, reader: jspb.BinaryReader): WebLinkComponent;
}

export namespace WebLinkComponent {
  export type AsObject = {
    keyType: WebLinkComponentKeyTypeMap[keyof WebLinkComponentKeyTypeMap],
    value: string,
  }
}

export class WebLinkParameter extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  clearComponentsList(): void;
  getComponentsList(): Array<WebLinkComponent>;
  setComponentsList(value: Array<WebLinkComponent>): void;
  addComponents(value?: WebLinkComponent, index?: number): WebLinkComponent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebLinkParameter.AsObject;
  static toObject(includeInstance: boolean, msg: WebLinkParameter): WebLinkParameter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebLinkParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebLinkParameter;
  static deserializeBinaryFromReader(message: WebLinkParameter, reader: jspb.BinaryReader): WebLinkParameter;
}

export namespace WebLinkParameter {
  export type AsObject = {
    key: string,
    componentsList: Array<WebLinkComponent.AsObject>,
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

export class IntegrationLink extends jspb.Message {
  getIntegrationId(): number;
  setIntegrationId(value: number): void;

  getParameterSid(): number;
  setParameterSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getMethodId(): number;
  setMethodId(value: number): void;

  getOrder(): number;
  setOrder(value: number): void;

  clearParametersList(): void;
  getParametersList(): Array<IntegrationLinkParameter>;
  setParametersList(value: Array<IntegrationLinkParameter>): void;
  addParameters(value?: IntegrationLinkParameter, index?: number): IntegrationLinkParameter;

  getConfigurationName(): string;
  setConfigurationName(value: string): void;

  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntegrationLink.AsObject;
  static toObject(includeInstance: boolean, msg: IntegrationLink): IntegrationLink.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntegrationLink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntegrationLink;
  static deserializeBinaryFromReader(message: IntegrationLink, reader: jspb.BinaryReader): IntegrationLink;
}

export namespace IntegrationLink {
  export type AsObject = {
    integrationId: number,
    parameterSid: number,
    name: string,
    description: string,
    methodId: number,
    order: number,
    parametersList: Array<IntegrationLinkParameter.AsObject>,
    configurationName: string,
    huntGroupSid: number,
  }
}

export class IntegrationLinkParameter extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  clearSubParametersList(): void;
  getSubParametersList(): Array<IntegrationLinkSubParameter>;
  setSubParametersList(value: Array<IntegrationLinkSubParameter>): void;
  addSubParameters(value?: IntegrationLinkSubParameter, index?: number): IntegrationLinkSubParameter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntegrationLinkParameter.AsObject;
  static toObject(includeInstance: boolean, msg: IntegrationLinkParameter): IntegrationLinkParameter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntegrationLinkParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntegrationLinkParameter;
  static deserializeBinaryFromReader(message: IntegrationLinkParameter, reader: jspb.BinaryReader): IntegrationLinkParameter;
}

export namespace IntegrationLinkParameter {
  export type AsObject = {
    key: string,
    subParametersList: Array<IntegrationLinkSubParameter.AsObject>,
  }
}

export class IntegrationLinkSubParameter extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  clearPartsList(): void;
  getPartsList(): Array<IntegrationLinkSubParameterPart>;
  setPartsList(value: Array<IntegrationLinkSubParameterPart>): void;
  addParts(value?: IntegrationLinkSubParameterPart, index?: number): IntegrationLinkSubParameterPart;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntegrationLinkSubParameter.AsObject;
  static toObject(includeInstance: boolean, msg: IntegrationLinkSubParameter): IntegrationLinkSubParameter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntegrationLinkSubParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntegrationLinkSubParameter;
  static deserializeBinaryFromReader(message: IntegrationLinkSubParameter, reader: jspb.BinaryReader): IntegrationLinkSubParameter;
}

export namespace IntegrationLinkSubParameter {
  export type AsObject = {
    key: string,
    partsList: Array<IntegrationLinkSubParameterPart.AsObject>,
  }
}

export class IntegrationLinkSubParameterPart extends jspb.Message {
  getContactFieldSid(): number;
  setContactFieldSid(value: number): void;

  getHelperValue(): string;
  setHelperValue(value: string): void;

  getParameterSourceType(): ParameterSourceTypeMap[keyof ParameterSourceTypeMap];
  setParameterSourceType(value: ParameterSourceTypeMap[keyof ParameterSourceTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntegrationLinkSubParameterPart.AsObject;
  static toObject(includeInstance: boolean, msg: IntegrationLinkSubParameterPart): IntegrationLinkSubParameterPart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntegrationLinkSubParameterPart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntegrationLinkSubParameterPart;
  static deserializeBinaryFromReader(message: IntegrationLinkSubParameterPart, reader: jspb.BinaryReader): IntegrationLinkSubParameterPart;
}

export namespace IntegrationLinkSubParameterPart {
  export type AsObject = {
    contactFieldSid: number,
    helperValue: string,
    parameterSourceType: ParameterSourceTypeMap[keyof ParameterSourceTypeMap],
  }
}

export class AgentTrigger extends jspb.Message {
  getAgentTriggerSid(): number;
  setAgentTriggerSid(value: number): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasAgentStatusOption(): boolean;
  clearAgentStatusOption(): void;
  getAgentStatusOption(): AgentStatusOption | undefined;
  setAgentStatusOption(value?: AgentStatusOption): void;

  hasTriggerActionOption(): boolean;
  clearTriggerActionOption(): void;
  getTriggerActionOption(): TriggerActionOption | undefined;
  setTriggerActionOption(value?: TriggerActionOption): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentTrigger.AsObject;
  static toObject(includeInstance: boolean, msg: AgentTrigger): AgentTrigger.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentTrigger, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentTrigger;
  static deserializeBinaryFromReader(message: AgentTrigger, reader: jspb.BinaryReader): AgentTrigger;
}

export namespace AgentTrigger {
  export type AsObject = {
    agentTriggerSid: number,
    description: string,
    agentStatusOption?: AgentStatusOption.AsObject,
    triggerActionOption?: TriggerActionOption.AsObject,
  }
}

export class AgentStatusOption extends jspb.Message {
  getAgentStatus(): AgentStatusMap[keyof AgentStatusMap];
  setAgentStatus(value: AgentStatusMap[keyof AgentStatusMap]): void;

  getDuration(): number;
  setDuration(value: number): void;

  hasPauseCode(): boolean;
  clearPauseCode(): void;
  getPauseCode(): TriggerPauseCode | undefined;
  setPauseCode(value?: TriggerPauseCode): void;

  hasCallTypes(): boolean;
  clearCallTypes(): void;
  getCallTypes(): TriggerCallTypes | undefined;
  setCallTypes(value?: TriggerCallTypes): void;

  getScheduledCallbackPresent(): boolean;
  setScheduledCallbackPresent(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentStatusOption.AsObject;
  static toObject(includeInstance: boolean, msg: AgentStatusOption): AgentStatusOption.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentStatusOption, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentStatusOption;
  static deserializeBinaryFromReader(message: AgentStatusOption, reader: jspb.BinaryReader): AgentStatusOption;
}

export namespace AgentStatusOption {
  export type AsObject = {
    agentStatus: AgentStatusMap[keyof AgentStatusMap],
    duration: number,
    pauseCode?: TriggerPauseCode.AsObject,
    callTypes?: TriggerCallTypes.AsObject,
    scheduledCallbackPresent: boolean,
  }
}

export class TriggerPauseCode extends jspb.Message {
  hasSystemPauseCode(): boolean;
  clearSystemPauseCode(): void;
  getSystemPauseCode(): SystemPauseCodeMap[keyof SystemPauseCodeMap];
  setSystemPauseCode(value: SystemPauseCodeMap[keyof SystemPauseCodeMap]): void;

  hasCustomPauseCode(): boolean;
  clearCustomPauseCode(): void;
  getCustomPauseCode(): string;
  setCustomPauseCode(value: string): void;

  getPauseCodeCase(): TriggerPauseCode.PauseCodeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TriggerPauseCode.AsObject;
  static toObject(includeInstance: boolean, msg: TriggerPauseCode): TriggerPauseCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TriggerPauseCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TriggerPauseCode;
  static deserializeBinaryFromReader(message: TriggerPauseCode, reader: jspb.BinaryReader): TriggerPauseCode;
}

export namespace TriggerPauseCode {
  export type AsObject = {
    systemPauseCode: SystemPauseCodeMap[keyof SystemPauseCodeMap],
    customPauseCode: string,
  }

  export enum PauseCodeCase {
    PAUSE_CODE_NOT_SET = 0,
    SYSTEM_PAUSE_CODE = 1,
    CUSTOM_PAUSE_CODE = 2,
  }
}

export class TriggerCallTypes extends jspb.Message {
  getOutbound(): boolean;
  setOutbound(value: boolean): void;

  getInbound(): boolean;
  setInbound(value: boolean): void;

  getManual(): boolean;
  setManual(value: boolean): void;

  getPreview(): boolean;
  setPreview(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TriggerCallTypes.AsObject;
  static toObject(includeInstance: boolean, msg: TriggerCallTypes): TriggerCallTypes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TriggerCallTypes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TriggerCallTypes;
  static deserializeBinaryFromReader(message: TriggerCallTypes, reader: jspb.BinaryReader): TriggerCallTypes;
}

export namespace TriggerCallTypes {
  export type AsObject = {
    outbound: boolean,
    inbound: boolean,
    manual: boolean,
    preview: boolean,
  }
}

export class TriggerActionOption extends jspb.Message {
  getAction(): TriggerActionMap[keyof TriggerActionMap];
  setAction(value: TriggerActionMap[keyof TriggerActionMap]): void;

  getDisplayMessage(): string;
  setDisplayMessage(value: string): void;

  getAdvanceToStatus(): AgentStatusMap[keyof AgentStatusMap];
  setAdvanceToStatus(value: AgentStatusMap[keyof AgentStatusMap]): void;

  getWebLinkSid(): number;
  setWebLinkSid(value: number): void;

  getIntegrationLinkSid(): number;
  setIntegrationLinkSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TriggerActionOption.AsObject;
  static toObject(includeInstance: boolean, msg: TriggerActionOption): TriggerActionOption.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TriggerActionOption, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TriggerActionOption;
  static deserializeBinaryFromReader(message: TriggerActionOption, reader: jspb.BinaryReader): TriggerActionOption;
}

export namespace TriggerActionOption {
  export type AsObject = {
    action: TriggerActionMap[keyof TriggerActionMap],
    displayMessage: string,
    advanceToStatus: AgentStatusMap[keyof AgentStatusMap],
    webLinkSid: number,
    integrationLinkSid: number,
  }
}

export class HuntGroupScript extends jspb.Message {
  getScriptSid(): number;
  setScriptSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getAutoScriptProgression(): boolean;
  setAutoScriptProgression(value: boolean): void;

  getScriptCategory(): ScriptCategoryMap[keyof ScriptCategoryMap];
  setScriptCategory(value: ScriptCategoryMap[keyof ScriptCategoryMap]): void;

  clearActsList(): void;
  getActsList(): Array<Act>;
  setActsList(value: Array<Act>): void;
  addActs(value?: Act, index?: number): Act;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HuntGroupScript.AsObject;
  static toObject(includeInstance: boolean, msg: HuntGroupScript): HuntGroupScript.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HuntGroupScript, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HuntGroupScript;
  static deserializeBinaryFromReader(message: HuntGroupScript, reader: jspb.BinaryReader): HuntGroupScript;
}

export namespace HuntGroupScript {
  export type AsObject = {
    scriptSid: number,
    name: string,
    description: string,
    autoScriptProgression: boolean,
    scriptCategory: ScriptCategoryMap[keyof ScriptCategoryMap],
    actsList: Array<Act.AsObject>,
  }
}

export class Act extends jspb.Message {
  clearDispositionsList(): void;
  getDispositionsList(): Array<Disposition>;
  setDispositionsList(value: Array<Disposition>): void;
  addDispositions(value?: Disposition, index?: number): Disposition;

  clearVerbiagesList(): void;
  getVerbiagesList(): Array<Verbiage>;
  setVerbiagesList(value: Array<Verbiage>): void;
  addVerbiages(value?: Verbiage, index?: number): Verbiage;

  clearConditionalNavigationsList(): void;
  getConditionalNavigationsList(): Array<ConditionalNavigation>;
  setConditionalNavigationsList(value: Array<ConditionalNavigation>): void;
  addConditionalNavigations(value?: ConditionalNavigation, index?: number): ConditionalNavigation;

  getDefaultConditionalNavigationTarget(): number;
  setDefaultConditionalNavigationTarget(value: number): void;

  getPageArrivalRecordingControl(): number;
  setPageArrivalRecordingControl(value: number): void;

  getPageExitRecordingControl(): number;
  setPageExitRecordingControl(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Act.AsObject;
  static toObject(includeInstance: boolean, msg: Act): Act.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Act, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Act;
  static deserializeBinaryFromReader(message: Act, reader: jspb.BinaryReader): Act;
}

export namespace Act {
  export type AsObject = {
    dispositionsList: Array<Disposition.AsObject>,
    verbiagesList: Array<Verbiage.AsObject>,
    conditionalNavigationsList: Array<ConditionalNavigation.AsObject>,
    defaultConditionalNavigationTarget: number,
    pageArrivalRecordingControl: number,
    pageExitRecordingControl: number,
  }
}

export class Disposition extends jspb.Message {
  clearResponseOptionsList(): void;
  getResponseOptionsList(): Array<string>;
  setResponseOptionsList(value: Array<string>): void;
  addResponseOptions(value: string, index?: number): string;

  getHeader(): string;
  setHeader(value: string): void;

  getPrompt(): string;
  setPrompt(value: string): void;

  getOrder(): number;
  setOrder(value: number): void;

  getRequired(): boolean;
  setRequired(value: boolean): void;

  getDefaultValue(): string;
  setDefaultValue(value: string): void;

  getBypassAutoScriptProgression(): boolean;
  setBypassAutoScriptProgression(value: boolean): void;

  getResponseType(): ScriptResponseTypeMap[keyof ScriptResponseTypeMap];
  setResponseType(value: ScriptResponseTypeMap[keyof ScriptResponseTypeMap]): void;

  getResponseEvaluator(): number;
  setResponseEvaluator(value: number): void;

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
    responseOptionsList: Array<string>,
    header: string,
    prompt: string,
    order: number,
    required: boolean,
    defaultValue: string,
    bypassAutoScriptProgression: boolean,
    responseType: ScriptResponseTypeMap[keyof ScriptResponseTypeMap],
    responseEvaluator: number,
  }
}

export class Verbiage extends jspb.Message {
  getOrder(): number;
  setOrder(value: number): void;

  getHeader(): string;
  setHeader(value: string): void;

  getBody(): string;
  setBody(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Verbiage.AsObject;
  static toObject(includeInstance: boolean, msg: Verbiage): Verbiage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Verbiage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Verbiage;
  static deserializeBinaryFromReader(message: Verbiage, reader: jspb.BinaryReader): Verbiage;
}

export namespace Verbiage {
  export type AsObject = {
    order: number,
    header: string,
    body: string,
  }
}

export class ConditionalNavigation extends jspb.Message {
  getTargetActIndex(): number;
  setTargetActIndex(value: number): void;

  hasComplexBooleanExpressionList(): boolean;
  clearComplexBooleanExpressionList(): void;
  getComplexBooleanExpressionList(): ComplexBooleanExpressionList | undefined;
  setComplexBooleanExpressionList(value?: ComplexBooleanExpressionList): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConditionalNavigation.AsObject;
  static toObject(includeInstance: boolean, msg: ConditionalNavigation): ConditionalNavigation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConditionalNavigation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConditionalNavigation;
  static deserializeBinaryFromReader(message: ConditionalNavigation, reader: jspb.BinaryReader): ConditionalNavigation;
}

export namespace ConditionalNavigation {
  export type AsObject = {
    targetActIndex: number,
    complexBooleanExpressionList?: ComplexBooleanExpressionList.AsObject,
  }
}

export class ComplexBooleanExpressionList extends jspb.Message {
  clearComplexBooleanExpressionsList(): void;
  getComplexBooleanExpressionsList(): Array<ComplexBooleanExpression>;
  setComplexBooleanExpressionsList(value: Array<ComplexBooleanExpression>): void;
  addComplexBooleanExpressions(value?: ComplexBooleanExpression, index?: number): ComplexBooleanExpression;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComplexBooleanExpressionList.AsObject;
  static toObject(includeInstance: boolean, msg: ComplexBooleanExpressionList): ComplexBooleanExpressionList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ComplexBooleanExpressionList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComplexBooleanExpressionList;
  static deserializeBinaryFromReader(message: ComplexBooleanExpressionList, reader: jspb.BinaryReader): ComplexBooleanExpressionList;
}

export namespace ComplexBooleanExpressionList {
  export type AsObject = {
    complexBooleanExpressionsList: Array<ComplexBooleanExpression.AsObject>,
  }
}

export class ComplexBooleanExpression extends jspb.Message {
  hasCompareExpressionList(): boolean;
  clearCompareExpressionList(): void;
  getCompareExpressionList(): CompareExpressionList | undefined;
  setCompareExpressionList(value?: CompareExpressionList): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComplexBooleanExpression.AsObject;
  static toObject(includeInstance: boolean, msg: ComplexBooleanExpression): ComplexBooleanExpression.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ComplexBooleanExpression, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComplexBooleanExpression;
  static deserializeBinaryFromReader(message: ComplexBooleanExpression, reader: jspb.BinaryReader): ComplexBooleanExpression;
}

export namespace ComplexBooleanExpression {
  export type AsObject = {
    compareExpressionList?: CompareExpressionList.AsObject,
  }
}

export class CompareExpressionList extends jspb.Message {
  clearSimpleCompareExpressionList(): void;
  getSimpleCompareExpressionList(): Array<SimpleCompareExpression>;
  setSimpleCompareExpressionList(value: Array<SimpleCompareExpression>): void;
  addSimpleCompareExpression(value?: SimpleCompareExpression, index?: number): SimpleCompareExpression;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompareExpressionList.AsObject;
  static toObject(includeInstance: boolean, msg: CompareExpressionList): CompareExpressionList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompareExpressionList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompareExpressionList;
  static deserializeBinaryFromReader(message: CompareExpressionList, reader: jspb.BinaryReader): CompareExpressionList;
}

export namespace CompareExpressionList {
  export type AsObject = {
    simpleCompareExpressionList: Array<SimpleCompareExpression.AsObject>,
  }
}

export class SimpleCompareExpression extends jspb.Message {
  getOperatorType(): CompareOperatorTypeMap[keyof CompareOperatorTypeMap];
  setOperatorType(value: CompareOperatorTypeMap[keyof CompareOperatorTypeMap]): void;

  getActIndex(): number;
  setActIndex(value: number): void;

  getDispositionHeader(): string;
  setDispositionHeader(value: string): void;

  getCompareValue(): string;
  setCompareValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimpleCompareExpression.AsObject;
  static toObject(includeInstance: boolean, msg: SimpleCompareExpression): SimpleCompareExpression.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SimpleCompareExpression, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimpleCompareExpression;
  static deserializeBinaryFromReader(message: SimpleCompareExpression, reader: jspb.BinaryReader): SimpleCompareExpression;
}

export namespace SimpleCompareExpression {
  export type AsObject = {
    operatorType: CompareOperatorTypeMap[keyof CompareOperatorTypeMap],
    actIndex: number,
    dispositionHeader: string,
    compareValue: string,
  }
}

export interface HuntGroupTypeMap {
  HUNT_GROUP_TYPE_UNSPECIFIED: 0;
  HUNT_GROUP_TYPE_CONNECTED: 1;
  HUNT_GROUP_TYPE_SOFTPHONE: 2;
}

export const HuntGroupType: HuntGroupTypeMap;

export interface TemplateCategoryMap {
  TEMPLATE_CATEGORY_UNSPECIFIED: 0;
  TEMPLATE_CATEGORY_HUNT_GROUP: 1;
  TEMPLATE_CATEGORY_CAMPAIGN: 2;
}

export const TemplateCategory: TemplateCategoryMap;

export interface WebLinkTypeMap {
  WEB_LINK_TYPE_UNSPECIFIED: 0;
  WEB_LINK_STANDARD: 1;
  WEB_LINK_JAVASCRIPT: 2;
}

export const WebLinkType: WebLinkTypeMap;

export interface WebLinkComponentKeyTypeMap {
  WEB_LINK_COMPONENT_KEY_TYPE_UNSPECIFIED: 0;
  WEB_LINK_COMPONENT_KEY_TYPE_STATIC_TEXT: 1;
  WEB_LINK_COMPONENT_KEY_TYPE_TTS_FIELD: 2;
  WEB_LINK_COMPONENT_KEY_TYPE_AGENT_INFO: 3;
  WEB_LINK_COMPONENT_KEY_TYPE_DATA_DIP: 4;
  WEB_LINK_COMPONENT_KEY_TYPE_IVR_DATA: 5;
  WEB_LINK_COMPONENT_KEY_TYPE_DATA_COLLECT: 6;
  WEB_LINK_COMPONENT_KEY_TYPE_PHONE_METADATA: 7;
  WEB_LINK_COMPONENT_KEY_TYPE_ZIP_POSTAL_METADATA: 8;
  WEB_LINK_COMPONENT_KEY_TYPE_CUSTOM_ACCOUNT_DATA_KEY: 9;
  WEB_LINK_COMPONENT_KEY_TYPE_SIP_HEADER_DATA: 10;
  WEB_LINK_COMPONENT_KEY_TYPE_INTEGRATION_DATA: 11;
  WEB_LINK_COMPONENT_KEY_TYPE_JOURNEY_DATA: 12;
}

export const WebLinkComponentKeyType: WebLinkComponentKeyTypeMap;

export interface ParameterSourceTypeMap {
  PARAMETER_SOURCE_TYPE_UNSPECIFIED: 0;
  PARAMETER_SOURCE_TYPE_STATIC_TEXT: 1;
  PARAMETER_SOURCE_TYPE_CFD_ID: 100;
  PARAMETER_SOURCE_TYPE_AGENT_ID: 200;
  PARAMETER_SOURCE_TYPE_AGENT_FIRST_NAME: 201;
  PARAMETER_SOURCE_TYPE_AGENT_LAST_NAME: 202;
  PARAMETER_SOURCE_TYPE_AGENT_USERNAME: 203;
  PARAMETER_SOURCE_TYPE_PARTNER_AGENT_ID: 204;
  PARAMETER_SOURCE_TYPE_HG_ID: 205;
  PARAMETER_SOURCE_TYPE_HG_NAME: 206;
  PARAMETER_SOURCE_TYPE_HG_TYPE: 207;
  PARAMETER_SOURCE_TYPE_CONSUMER_PHONE: 208;
  PARAMETER_SOURCE_TYPE_CALLER_ID: 209;
  PARAMETER_SOURCE_TYPE_CALL_ID: 210;
  PARAMETER_SOURCE_TYPE_GROUP_ID: 211;
  PARAMETER_SOURCE_TYPE_AGENT_SESSION_ID: 212;
  PARAMETER_SOURCE_TYPE_DATA_DIP: 300;
  PARAMETER_SOURCE_TYPE_IVR_DATA: 400;
  PARAMETER_SOURCE_TYPE_DATA_COLLECT: 500;
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_AREA_CODE: 600;
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_CARRIER: 601;
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_CENTRAL_OFFICE_CODE: 602;
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_CITY: 603;
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_COUNTRY_CODE: 604;
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_SUBSCRIBER_NUMBER: 605;
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_ISO_CODE: 606;
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_INTERNATIONAL_PREFIX: 607;
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_LANGUAGE: 608;
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_LATITUDE: 609;
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_LONGITUDE: 610;
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_MAXIMUM_BLOCK_NUMBER: 611;
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_MINIMUM_BLOCK_NUMBER: 612;
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_NATIONAL_DESTINATION: 613;
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_NATIONAL_PREFIX: 614;
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_NUMBER_BLOCK_ID: 615;
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_NUMBER_TYPE: 616;
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_USES_NDC: 617;
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_DAYLIGHT_SAVINGS: 618;
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_PREFIX: 619;
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_REGION_CODE: 620;
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_REGION_NAME: 621;
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_SPECIAL_SERVICE_CODE_1: 622;
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_SPECIAL_SERVICE_CODE_2: 623;
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_SPECIAL_SERVICE_CODE_3: 624;
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_SPECIAL_SERVICE_CODE_4: 625;
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_TIME_ZONE: 626;
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_UTC_OFFSET: 627;
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_ADMIN_CODE_1: 700;
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_ADMIN_CODE_2: 701;
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_ADMIN_CODE_3: 702;
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_ADMIN_NAME_1: 703;
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_ADMIN_NAME_2: 704;
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_ADMIN_NAME_3: 705;
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_AREA_CODE: 706;
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_CITY_NAME: 707;
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_CITY_TYPE: 708;
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_COUNTRY_CODE: 709;
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_ISO_CODE: 710;
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_COUNTRY_NAME: 711;
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_COUNTRY_FPS_CODE: 712;
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_LATITUDE: 713;
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_POSITION_ACCURACY: 714;
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_LONGITUDE: 715;
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_METROPOLITAN_AREA: 716;
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_DAYLIGHT_SAVINGS: 717;
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_PLACE_NAME: 718;
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_POSTAL_CODE: 719;
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_POSTAL_CODE_KEY: 720;
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_POSTAL_TYPE: 721;
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_PROVICE_ABBREVIATION: 722;
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_PROVINCE_NAME: 723;
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_STATE_FPS_CODE: 724;
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_TIME_ZONE: 725;
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_UTC_OFFSET: 726;
  PARAMETER_SOURCE_TYPE_CUSTOM_ACCOUNT_DATA: 800;
  PARAMETER_SOURCE_TYPE_SIP_HEADER_DATA: 900;
  PARAMETER_SOURCE_TYPE_INTEGRATION_DATA: 1000;
  PARAMETER_SOURCE_TYPE_JOURNEY_DATA: 1100;
}

export const ParameterSourceType: ParameterSourceTypeMap;

export interface AgentStatusMap {
  AGENT_STATUS_UNSPECIFIED: 0;
  AGENT_STATUS_LOGGED_IN: 1;
  AGENT_STATUS_WAITING: 2;
  AGENT_STATUS_PAUSED: 3;
  AGENT_STATUS_ON_CALL: 4;
  AGENT_STATUS_TRANSFER_CALL: 5;
  AGENT_STATUS_TRANSFER_LOST: 6;
  AGENT_STATUS_TRANSFER_TARGET_LOST: 7;
  AGENT_STATUS_PREVIEW_CALL: 8;
  AGENT_STATUS_MANUAL_DIAL_CALL: 9;
  AGENT_STATUS_WRAP_UP: 10;
}

export const AgentStatus: AgentStatusMap;

export interface SystemPauseCodeMap {
  SYSTEM_PAUSE_CODE_UNSPECIFIED: 0;
  SYSTEM_PAUSE_CODE_AGENT_TRIGGER_ADVANCE_TO_PAUSED: 1;
  SYSTEM_PAUSE_CODE_CHANGE_PASSWORD: 2;
  SYSTEM_PAUSE_CODE_CHECK_VOICE_MAIL: 3;
  SYSTEM_PAUSE_CODE_MANUALLY_APPROVE_CALLS: 4;
}

export const SystemPauseCode: SystemPauseCodeMap;

export interface TriggerActionMap {
  TRIGGER_ACTION_UNSPECIFIED: 0;
  TRIGGER_ACTION_ADVANCE_TO_STATUS: 1;
  TRIGGER_ACTION_DISPLAY_MESSAGE: 2;
  TRIGGER_ACTION_EJECT_AGENT: 3;
  TRIGGER_ACTION_EXECUTE_WEB_LINK: 4;
  TRIGGER_ACTION_EXECUTE_INTEGRATION_LINK: 5;
}

export const TriggerAction: TriggerActionMap;

export interface ScriptCategoryMap {
  SCRIPT_CATEGORY_UNSPECIFIED: 0;
  SCRIPT_CATEGORY_HUNT_GROUP: 1;
  SCRIPT_CATEGORY_CAMPAIGN: 2;
}

export const ScriptCategory: ScriptCategoryMap;

export interface ScriptResponseTypeMap {
  SCRIPT_RESPONSE_TYPE_UNSPECIFIED: 0;
  SCRIPT_RESPONSE_TYPE_DROP_DOWN_SELECT_MENU: 1;
  SCRIPT_RESPONSE_TYPE_MULTIPLE_SELECT_MENU: 2;
  SCRIPT_RESPONSE_TYPE_CHECK_BOXES: 3;
  SCRIPT_RESPONSE_TYPE_RADIO_BUTTONS: 4;
  SCRIPT_RESPONSE_TYPE_TEXT_BOX: 5;
  SCRIPT_RESPONSE_TYPE_TEXT_BOX_ALPHANUMERIC: 6;
  SCRIPT_RESPONSE_TYPE_TEXT_BOX_NUMERICAL: 7;
  SCRIPT_RESPONSE_TYPE_TEXT_VERIFICATION_FIELD: 8;
  SCRIPT_RESPONSE_TYPE_TEXT_AREA: 9;
  SCRIPT_RESPONSE_TYPE_REGULAR_EXPRESSION_FIELD: 10;
  SCRIPT_RESPONSE_TYPE_REGULAR_EXPRESSION_AREA: 11;
}

export const ScriptResponseType: ScriptResponseTypeMap;

export interface CompareOperatorTypeMap {
  COMPARE_OPERATOR_TYPE_UNSPECIFIED: 0;
  COMPARE_OPERATOR_TYPE_EQUALS: 1;
  COMPARE_OPERATOR_TYPE_NOT_EQUALS: 2;
  COMPARE_OPERATOR_TYPE_GREATER_THAN: 3;
  COMPARE_OPERATOR_TYPE_LESS_THAN: 4;
  COMPARE_OPERATOR_TYPE_GREATER_THAN_OR_EQUAL_TO: 5;
  COMPARE_OPERATOR_TYPE_LESS_THAN_OR_EQUAL_TO: 6;
  COMPARE_OPERATOR_TYPE_CONTAINS: 7;
  COMPARE_OPERATOR_TYPE_DOES_NOT_CONTAIN: 8;
  COMPARE_OPERATOR_TYPE_BLANK: 9;
  COMPARE_OPERATOR_TYPE_NOT_BALNK: 10;
  COMPARE_OPERATOR_TYPE_STARTS_WITH: 11;
  COMPARE_OPERATOR_TYPE_DOES_NOT_START_WITH: 12;
  COMPARE_OPERATOR_TYPE_ENDS_WITH: 13;
  COMPARE_OPERATOR_TYPE_DOES_NOT_END_WITH: 14;
}

export const CompareOperatorType: CompareOperatorTypeMap;

