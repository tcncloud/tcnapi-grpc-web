// package: services.org.hunt_groups.v1alpha1
// file: services/org/hunt_groups/v1alpha1/entities.proto

import * as jspb from "google-protobuf";
import * as api_commons_org_huntgroup_pb from "../../../../api/commons/org/huntgroup_pb";

export class ExileLink extends jspb.Message {
  getParameterSid(): number;
  setParameterSid(value: number): void;

  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getOrder(): number;
  setOrder(value: number): void;

  hasInboundData(): boolean;
  clearInboundData(): void;
  getInboundData(): ExileLinkData | undefined;
  setInboundData(value?: ExileLinkData): void;

  hasOutboundData(): boolean;
  clearOutboundData(): void;
  getOutboundData(): ExileLinkData | undefined;
  setOutboundData(value?: ExileLinkData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExileLink.AsObject;
  static toObject(includeInstance: boolean, msg: ExileLink): ExileLink.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExileLink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExileLink;
  static deserializeBinaryFromReader(message: ExileLink, reader: jspb.BinaryReader): ExileLink;
}

export namespace ExileLink {
  export type AsObject = {
    parameterSid: number,
    huntGroupSid: number,
    name: string,
    description: string,
    order: number,
    inboundData?: ExileLinkData.AsObject,
    outboundData?: ExileLinkData.AsObject,
  }
}

export class ExileLinkData extends jspb.Message {
  hasRecordId(): boolean;
  clearRecordId(): void;
  getRecordId(): ExileLinkParameter | undefined;
  setRecordId(value?: ExileLinkParameter): void;

  hasAlternateId(): boolean;
  clearAlternateId(): void;
  getAlternateId(): ExileLinkParameter | undefined;
  setAlternateId(value?: ExileLinkParameter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExileLinkData.AsObject;
  static toObject(includeInstance: boolean, msg: ExileLinkData): ExileLinkData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExileLinkData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExileLinkData;
  static deserializeBinaryFromReader(message: ExileLinkData, reader: jspb.BinaryReader): ExileLinkData;
}

export namespace ExileLinkData {
  export type AsObject = {
    recordId?: ExileLinkParameter.AsObject,
    alternateId?: ExileLinkParameter.AsObject,
  }
}

export class ExileLinkParameter extends jspb.Message {
  getContactFieldSid(): number;
  setContactFieldSid(value: number): void;

  getHelperValue(): string;
  setHelperValue(value: string): void;

  getParameterSourceType(): api_commons_org_huntgroup_pb.ParameterSourceTypeMap[keyof api_commons_org_huntgroup_pb.ParameterSourceTypeMap];
  setParameterSourceType(value: api_commons_org_huntgroup_pb.ParameterSourceTypeMap[keyof api_commons_org_huntgroup_pb.ParameterSourceTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExileLinkParameter.AsObject;
  static toObject(includeInstance: boolean, msg: ExileLinkParameter): ExileLinkParameter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExileLinkParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExileLinkParameter;
  static deserializeBinaryFromReader(message: ExileLinkParameter, reader: jspb.BinaryReader): ExileLinkParameter;
}

export namespace ExileLinkParameter {
  export type AsObject = {
    contactFieldSid: number,
    helperValue: string,
    parameterSourceType: api_commons_org_huntgroup_pb.ParameterSourceTypeMap[keyof api_commons_org_huntgroup_pb.ParameterSourceTypeMap],
  }
}

export class ListHuntGroupExileLinksRequest extends jspb.Message {
  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListHuntGroupExileLinksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListHuntGroupExileLinksRequest): ListHuntGroupExileLinksRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListHuntGroupExileLinksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListHuntGroupExileLinksRequest;
  static deserializeBinaryFromReader(message: ListHuntGroupExileLinksRequest, reader: jspb.BinaryReader): ListHuntGroupExileLinksRequest;
}

export namespace ListHuntGroupExileLinksRequest {
  export type AsObject = {
    huntGroupSid: number,
  }
}

export class ListHuntGroupExileLinksResponse extends jspb.Message {
  clearExileLinksList(): void;
  getExileLinksList(): Array<ExileLink>;
  setExileLinksList(value: Array<ExileLink>): void;
  addExileLinks(value?: ExileLink, index?: number): ExileLink;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListHuntGroupExileLinksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListHuntGroupExileLinksResponse): ListHuntGroupExileLinksResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListHuntGroupExileLinksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListHuntGroupExileLinksResponse;
  static deserializeBinaryFromReader(message: ListHuntGroupExileLinksResponse, reader: jspb.BinaryReader): ListHuntGroupExileLinksResponse;
}

export namespace ListHuntGroupExileLinksResponse {
  export type AsObject = {
    exileLinksList: Array<ExileLink.AsObject>,
  }
}

export class CopyHuntGroupExileLinkRequest extends jspb.Message {
  getToHuntGroupSid(): number;
  setToHuntGroupSid(value: number): void;

  hasExileLink(): boolean;
  clearExileLink(): void;
  getExileLink(): ExileLink | undefined;
  setExileLink(value?: ExileLink): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyHuntGroupExileLinkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CopyHuntGroupExileLinkRequest): CopyHuntGroupExileLinkRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyHuntGroupExileLinkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyHuntGroupExileLinkRequest;
  static deserializeBinaryFromReader(message: CopyHuntGroupExileLinkRequest, reader: jspb.BinaryReader): CopyHuntGroupExileLinkRequest;
}

export namespace CopyHuntGroupExileLinkRequest {
  export type AsObject = {
    toHuntGroupSid: number,
    exileLink?: ExileLink.AsObject,
  }
}

export class CopyHuntGroupExileLinkResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyHuntGroupExileLinkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CopyHuntGroupExileLinkResponse): CopyHuntGroupExileLinkResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyHuntGroupExileLinkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyHuntGroupExileLinkResponse;
  static deserializeBinaryFromReader(message: CopyHuntGroupExileLinkResponse, reader: jspb.BinaryReader): CopyHuntGroupExileLinkResponse;
}

export namespace CopyHuntGroupExileLinkResponse {
  export type AsObject = {
  }
}

export class UpdateHuntGroupExileLinksRequest extends jspb.Message {
  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  clearExileLinksList(): void;
  getExileLinksList(): Array<ExileLink>;
  setExileLinksList(value: Array<ExileLink>): void;
  addExileLinks(value?: ExileLink, index?: number): ExileLink;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateHuntGroupExileLinksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateHuntGroupExileLinksRequest): UpdateHuntGroupExileLinksRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateHuntGroupExileLinksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateHuntGroupExileLinksRequest;
  static deserializeBinaryFromReader(message: UpdateHuntGroupExileLinksRequest, reader: jspb.BinaryReader): UpdateHuntGroupExileLinksRequest;
}

export namespace UpdateHuntGroupExileLinksRequest {
  export type AsObject = {
    huntGroupSid: number,
    exileLinksList: Array<ExileLink.AsObject>,
  }
}

export class UpdateHuntGroupExileLinksResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateHuntGroupExileLinksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateHuntGroupExileLinksResponse): UpdateHuntGroupExileLinksResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateHuntGroupExileLinksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateHuntGroupExileLinksResponse;
  static deserializeBinaryFromReader(message: UpdateHuntGroupExileLinksResponse, reader: jspb.BinaryReader): UpdateHuntGroupExileLinksResponse;
}

export namespace UpdateHuntGroupExileLinksResponse {
  export type AsObject = {
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

  getExileLinkSid(): number;
  setExileLinkSid(value: number): void;

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
    exileLinkSid: number,
  }
}

export class ListHuntGroupAgentTriggersRequest extends jspb.Message {
  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListHuntGroupAgentTriggersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListHuntGroupAgentTriggersRequest): ListHuntGroupAgentTriggersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListHuntGroupAgentTriggersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListHuntGroupAgentTriggersRequest;
  static deserializeBinaryFromReader(message: ListHuntGroupAgentTriggersRequest, reader: jspb.BinaryReader): ListHuntGroupAgentTriggersRequest;
}

export namespace ListHuntGroupAgentTriggersRequest {
  export type AsObject = {
    huntGroupSid: number,
  }
}

export class ListHuntGroupAgentTriggersResponse extends jspb.Message {
  clearAgentTriggersList(): void;
  getAgentTriggersList(): Array<AgentTrigger>;
  setAgentTriggersList(value: Array<AgentTrigger>): void;
  addAgentTriggers(value?: AgentTrigger, index?: number): AgentTrigger;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListHuntGroupAgentTriggersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListHuntGroupAgentTriggersResponse): ListHuntGroupAgentTriggersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListHuntGroupAgentTriggersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListHuntGroupAgentTriggersResponse;
  static deserializeBinaryFromReader(message: ListHuntGroupAgentTriggersResponse, reader: jspb.BinaryReader): ListHuntGroupAgentTriggersResponse;
}

export namespace ListHuntGroupAgentTriggersResponse {
  export type AsObject = {
    agentTriggersList: Array<AgentTrigger.AsObject>,
  }
}

export class CopyHuntGroupAgentTriggerRequest extends jspb.Message {
  getFromHuntGroupSid(): number;
  setFromHuntGroupSid(value: number): void;

  getToHuntGroupSid(): number;
  setToHuntGroupSid(value: number): void;

  hasAgentTrigger(): boolean;
  clearAgentTrigger(): void;
  getAgentTrigger(): AgentTrigger | undefined;
  setAgentTrigger(value?: AgentTrigger): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyHuntGroupAgentTriggerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CopyHuntGroupAgentTriggerRequest): CopyHuntGroupAgentTriggerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyHuntGroupAgentTriggerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyHuntGroupAgentTriggerRequest;
  static deserializeBinaryFromReader(message: CopyHuntGroupAgentTriggerRequest, reader: jspb.BinaryReader): CopyHuntGroupAgentTriggerRequest;
}

export namespace CopyHuntGroupAgentTriggerRequest {
  export type AsObject = {
    fromHuntGroupSid: number,
    toHuntGroupSid: number,
    agentTrigger?: AgentTrigger.AsObject,
  }
}

export class CopyHuntGroupAgentTriggerResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyHuntGroupAgentTriggerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CopyHuntGroupAgentTriggerResponse): CopyHuntGroupAgentTriggerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyHuntGroupAgentTriggerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyHuntGroupAgentTriggerResponse;
  static deserializeBinaryFromReader(message: CopyHuntGroupAgentTriggerResponse, reader: jspb.BinaryReader): CopyHuntGroupAgentTriggerResponse;
}

export namespace CopyHuntGroupAgentTriggerResponse {
  export type AsObject = {
  }
}

export class UpdateHuntGroupAgentTriggersRequest extends jspb.Message {
  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  clearAgentTriggersList(): void;
  getAgentTriggersList(): Array<AgentTrigger>;
  setAgentTriggersList(value: Array<AgentTrigger>): void;
  addAgentTriggers(value?: AgentTrigger, index?: number): AgentTrigger;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateHuntGroupAgentTriggersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateHuntGroupAgentTriggersRequest): UpdateHuntGroupAgentTriggersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateHuntGroupAgentTriggersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateHuntGroupAgentTriggersRequest;
  static deserializeBinaryFromReader(message: UpdateHuntGroupAgentTriggersRequest, reader: jspb.BinaryReader): UpdateHuntGroupAgentTriggersRequest;
}

export namespace UpdateHuntGroupAgentTriggersRequest {
  export type AsObject = {
    huntGroupSid: number,
    agentTriggersList: Array<AgentTrigger.AsObject>,
  }
}

export class UpdateHuntGroupAgentTriggersResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateHuntGroupAgentTriggersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateHuntGroupAgentTriggersResponse): UpdateHuntGroupAgentTriggersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateHuntGroupAgentTriggersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateHuntGroupAgentTriggersResponse;
  static deserializeBinaryFromReader(message: UpdateHuntGroupAgentTriggersResponse, reader: jspb.BinaryReader): UpdateHuntGroupAgentTriggersResponse;
}

export namespace UpdateHuntGroupAgentTriggersResponse {
  export type AsObject = {
  }
}

export class CopyHuntGroupToOrganizationRequest extends jspb.Message {
  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyHuntGroupToOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CopyHuntGroupToOrganizationRequest): CopyHuntGroupToOrganizationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyHuntGroupToOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyHuntGroupToOrganizationRequest;
  static deserializeBinaryFromReader(message: CopyHuntGroupToOrganizationRequest, reader: jspb.BinaryReader): CopyHuntGroupToOrganizationRequest;
}

export namespace CopyHuntGroupToOrganizationRequest {
  export type AsObject = {
    huntGroupSid: number,
    organizationId: number,
  }
}

export class CopyHuntGroupToOrganizationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyHuntGroupToOrganizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CopyHuntGroupToOrganizationResponse): CopyHuntGroupToOrganizationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyHuntGroupToOrganizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyHuntGroupToOrganizationResponse;
  static deserializeBinaryFromReader(message: CopyHuntGroupToOrganizationResponse, reader: jspb.BinaryReader): CopyHuntGroupToOrganizationResponse;
}

export namespace CopyHuntGroupToOrganizationResponse {
  export type AsObject = {
  }
}

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
  TRIGGER_ACTION_EXECUTE_EXILE_LINK: 6;
}

export const TriggerAction: TriggerActionMap;

