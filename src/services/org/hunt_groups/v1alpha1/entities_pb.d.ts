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

  hasPauseCode(): boolean;
  clearPauseCode(): void;
  getPauseCode(): TriggerPauseCode | undefined;
  setPauseCode(value?: TriggerPauseCode): void;

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
    pauseCode?: TriggerPauseCode.AsObject,
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
  getToOrganizationId(): string;
  setToOrganizationId(value: string): void;

  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  getNewHuntGroupName(): string;
  setNewHuntGroupName(value: string): void;

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
    toOrganizationId: string,
    huntGroupSid: number,
    newHuntGroupName: string,
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

export class AdminCopyHuntGroupToOrganizationRequest extends jspb.Message {
  getFromOrganizationId(): string;
  setFromOrganizationId(value: string): void;

  getToOrganizationId(): string;
  setToOrganizationId(value: string): void;

  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  getNewHuntGroupName(): string;
  setNewHuntGroupName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminCopyHuntGroupToOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminCopyHuntGroupToOrganizationRequest): AdminCopyHuntGroupToOrganizationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdminCopyHuntGroupToOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminCopyHuntGroupToOrganizationRequest;
  static deserializeBinaryFromReader(message: AdminCopyHuntGroupToOrganizationRequest, reader: jspb.BinaryReader): AdminCopyHuntGroupToOrganizationRequest;
}

export namespace AdminCopyHuntGroupToOrganizationRequest {
  export type AsObject = {
    fromOrganizationId: string,
    toOrganizationId: string,
    huntGroupSid: number,
    newHuntGroupName: string,
  }
}

export class AdminCopyHuntGroupToOrganizationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminCopyHuntGroupToOrganizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AdminCopyHuntGroupToOrganizationResponse): AdminCopyHuntGroupToOrganizationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdminCopyHuntGroupToOrganizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminCopyHuntGroupToOrganizationResponse;
  static deserializeBinaryFromReader(message: AdminCopyHuntGroupToOrganizationResponse, reader: jspb.BinaryReader): AdminCopyHuntGroupToOrganizationResponse;
}

export namespace AdminCopyHuntGroupToOrganizationResponse {
  export type AsObject = {
  }
}

export class AdminListHuntGroupsRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminListHuntGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminListHuntGroupsRequest): AdminListHuntGroupsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdminListHuntGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminListHuntGroupsRequest;
  static deserializeBinaryFromReader(message: AdminListHuntGroupsRequest, reader: jspb.BinaryReader): AdminListHuntGroupsRequest;
}

export namespace AdminListHuntGroupsRequest {
  export type AsObject = {
    orgId: string,
  }
}

export class AdminListHuntGroupsResponse extends jspb.Message {
  clearHuntGroupsList(): void;
  getHuntGroupsList(): Array<AdminListHuntGroupsResponse.HuntGroup>;
  setHuntGroupsList(value: Array<AdminListHuntGroupsResponse.HuntGroup>): void;
  addHuntGroups(value?: AdminListHuntGroupsResponse.HuntGroup, index?: number): AdminListHuntGroupsResponse.HuntGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminListHuntGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AdminListHuntGroupsResponse): AdminListHuntGroupsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdminListHuntGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminListHuntGroupsResponse;
  static deserializeBinaryFromReader(message: AdminListHuntGroupsResponse, reader: jspb.BinaryReader): AdminListHuntGroupsResponse;
}

export namespace AdminListHuntGroupsResponse {
  export type AsObject = {
    huntGroupsList: Array<AdminListHuntGroupsResponse.HuntGroup.AsObject>,
  }

  export class HuntGroup extends jspb.Message {
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
      huntGroupSid: number,
      huntGroupName: string,
    }
  }
}

export class ListAgentScriptsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentScriptsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentScriptsRequest): ListAgentScriptsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentScriptsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentScriptsRequest;
  static deserializeBinaryFromReader(message: ListAgentScriptsRequest, reader: jspb.BinaryReader): ListAgentScriptsRequest;
}

export namespace ListAgentScriptsRequest {
  export type AsObject = {
  }
}

export class ListAgentScriptsResponse extends jspb.Message {
  clearScriptsList(): void;
  getScriptsList(): Array<ListAgentScriptsResponse.Script>;
  setScriptsList(value: Array<ListAgentScriptsResponse.Script>): void;
  addScripts(value?: ListAgentScriptsResponse.Script, index?: number): ListAgentScriptsResponse.Script;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentScriptsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentScriptsResponse): ListAgentScriptsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentScriptsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentScriptsResponse;
  static deserializeBinaryFromReader(message: ListAgentScriptsResponse, reader: jspb.BinaryReader): ListAgentScriptsResponse;
}

export namespace ListAgentScriptsResponse {
  export type AsObject = {
    scriptsList: Array<ListAgentScriptsResponse.Script.AsObject>,
  }

  export class Script extends jspb.Message {
    hasScript(): boolean;
    clearScript(): void;
    getScript(): api_commons_org_huntgroup_pb.HuntGroupScript | undefined;
    setScript(value?: api_commons_org_huntgroup_pb.HuntGroupScript): void;

    clearHuntGroupSidsList(): void;
    getHuntGroupSidsList(): Array<number>;
    setHuntGroupSidsList(value: Array<number>): void;
    addHuntGroupSids(value: number, index?: number): number;

    clearOutboundBroadcastTemplateSidsList(): void;
    getOutboundBroadcastTemplateSidsList(): Array<number>;
    setOutboundBroadcastTemplateSidsList(value: Array<number>): void;
    addOutboundBroadcastTemplateSids(value: number, index?: number): number;

    clearInboundBroadcastTemplateSidsList(): void;
    getInboundBroadcastTemplateSidsList(): Array<number>;
    setInboundBroadcastTemplateSidsList(value: Array<number>): void;
    addInboundBroadcastTemplateSids(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Script.AsObject;
    static toObject(includeInstance: boolean, msg: Script): Script.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Script, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Script;
    static deserializeBinaryFromReader(message: Script, reader: jspb.BinaryReader): Script;
  }

  export namespace Script {
    export type AsObject = {
      script?: api_commons_org_huntgroup_pb.HuntGroupScript.AsObject,
      huntGroupSidsList: Array<number>,
      outboundBroadcastTemplateSidsList: Array<number>,
      inboundBroadcastTemplateSidsList: Array<number>,
    }
  }
}

export class CreateAgentClientInfoDisplayTemplateRequest extends jspb.Message {
  hasTemplate(): boolean;
  clearTemplate(): void;
  getTemplate(): api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate | undefined;
  setTemplate(value?: api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAgentClientInfoDisplayTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAgentClientInfoDisplayTemplateRequest): CreateAgentClientInfoDisplayTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAgentClientInfoDisplayTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAgentClientInfoDisplayTemplateRequest;
  static deserializeBinaryFromReader(message: CreateAgentClientInfoDisplayTemplateRequest, reader: jspb.BinaryReader): CreateAgentClientInfoDisplayTemplateRequest;
}

export namespace CreateAgentClientInfoDisplayTemplateRequest {
  export type AsObject = {
    template?: api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate.AsObject,
  }
}

export class CreateAgentClientInfoDisplayTemplateResponse extends jspb.Message {
  getTemplateId(): number;
  setTemplateId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAgentClientInfoDisplayTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAgentClientInfoDisplayTemplateResponse): CreateAgentClientInfoDisplayTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAgentClientInfoDisplayTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAgentClientInfoDisplayTemplateResponse;
  static deserializeBinaryFromReader(message: CreateAgentClientInfoDisplayTemplateResponse, reader: jspb.BinaryReader): CreateAgentClientInfoDisplayTemplateResponse;
}

export namespace CreateAgentClientInfoDisplayTemplateResponse {
  export type AsObject = {
    templateId: number,
  }
}

export class UpdateAgentClientInfoDisplayTemplateRequest extends jspb.Message {
  hasTemplate(): boolean;
  clearTemplate(): void;
  getTemplate(): api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate | undefined;
  setTemplate(value?: api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAgentClientInfoDisplayTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAgentClientInfoDisplayTemplateRequest): UpdateAgentClientInfoDisplayTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAgentClientInfoDisplayTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAgentClientInfoDisplayTemplateRequest;
  static deserializeBinaryFromReader(message: UpdateAgentClientInfoDisplayTemplateRequest, reader: jspb.BinaryReader): UpdateAgentClientInfoDisplayTemplateRequest;
}

export namespace UpdateAgentClientInfoDisplayTemplateRequest {
  export type AsObject = {
    template?: api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate.AsObject,
  }
}

export class UpdateAgentClientInfoDisplayTemplateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAgentClientInfoDisplayTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAgentClientInfoDisplayTemplateResponse): UpdateAgentClientInfoDisplayTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAgentClientInfoDisplayTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAgentClientInfoDisplayTemplateResponse;
  static deserializeBinaryFromReader(message: UpdateAgentClientInfoDisplayTemplateResponse, reader: jspb.BinaryReader): UpdateAgentClientInfoDisplayTemplateResponse;
}

export namespace UpdateAgentClientInfoDisplayTemplateResponse {
  export type AsObject = {
  }
}

export class GetAgentClientInfoDisplayTemplateRequest extends jspb.Message {
  getTemplateId(): number;
  setTemplateId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAgentClientInfoDisplayTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAgentClientInfoDisplayTemplateRequest): GetAgentClientInfoDisplayTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAgentClientInfoDisplayTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAgentClientInfoDisplayTemplateRequest;
  static deserializeBinaryFromReader(message: GetAgentClientInfoDisplayTemplateRequest, reader: jspb.BinaryReader): GetAgentClientInfoDisplayTemplateRequest;
}

export namespace GetAgentClientInfoDisplayTemplateRequest {
  export type AsObject = {
    templateId: number,
  }
}

export class GetAgentClientInfoDisplayTemplateResponse extends jspb.Message {
  getTemplateSid(): number;
  setTemplateSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAgentClientInfoDisplayTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAgentClientInfoDisplayTemplateResponse): GetAgentClientInfoDisplayTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAgentClientInfoDisplayTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAgentClientInfoDisplayTemplateResponse;
  static deserializeBinaryFromReader(message: GetAgentClientInfoDisplayTemplateResponse, reader: jspb.BinaryReader): GetAgentClientInfoDisplayTemplateResponse;
}

export namespace GetAgentClientInfoDisplayTemplateResponse {
  export type AsObject = {
    templateSid: number,
  }
}

export class ListAgentClientInfoDisplayTemplatesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentClientInfoDisplayTemplatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentClientInfoDisplayTemplatesRequest): ListAgentClientInfoDisplayTemplatesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentClientInfoDisplayTemplatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentClientInfoDisplayTemplatesRequest;
  static deserializeBinaryFromReader(message: ListAgentClientInfoDisplayTemplatesRequest, reader: jspb.BinaryReader): ListAgentClientInfoDisplayTemplatesRequest;
}

export namespace ListAgentClientInfoDisplayTemplatesRequest {
  export type AsObject = {
  }
}

export class ListAgentClientInfoDisplayTemplatesResponse extends jspb.Message {
  clearTemplatesList(): void;
  getTemplatesList(): Array<api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate>;
  setTemplatesList(value: Array<api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate>): void;
  addTemplates(value?: api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate, index?: number): api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentClientInfoDisplayTemplatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentClientInfoDisplayTemplatesResponse): ListAgentClientInfoDisplayTemplatesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentClientInfoDisplayTemplatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentClientInfoDisplayTemplatesResponse;
  static deserializeBinaryFromReader(message: ListAgentClientInfoDisplayTemplatesResponse, reader: jspb.BinaryReader): ListAgentClientInfoDisplayTemplatesResponse;
}

export namespace ListAgentClientInfoDisplayTemplatesResponse {
  export type AsObject = {
    templatesList: Array<api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate.AsObject>,
  }
}

export class DeleteAgentClientInfoDisplayTemplateRequest extends jspb.Message {
  getTemplateId(): number;
  setTemplateId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAgentClientInfoDisplayTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAgentClientInfoDisplayTemplateRequest): DeleteAgentClientInfoDisplayTemplateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAgentClientInfoDisplayTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAgentClientInfoDisplayTemplateRequest;
  static deserializeBinaryFromReader(message: DeleteAgentClientInfoDisplayTemplateRequest, reader: jspb.BinaryReader): DeleteAgentClientInfoDisplayTemplateRequest;
}

export namespace DeleteAgentClientInfoDisplayTemplateRequest {
  export type AsObject = {
    templateId: number,
  }
}

export class DeleteAgentClientInfoDisplayTemplateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAgentClientInfoDisplayTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAgentClientInfoDisplayTemplateResponse): DeleteAgentClientInfoDisplayTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAgentClientInfoDisplayTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAgentClientInfoDisplayTemplateResponse;
  static deserializeBinaryFromReader(message: DeleteAgentClientInfoDisplayTemplateResponse, reader: jspb.BinaryReader): DeleteAgentClientInfoDisplayTemplateResponse;
}

export namespace DeleteAgentClientInfoDisplayTemplateResponse {
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

