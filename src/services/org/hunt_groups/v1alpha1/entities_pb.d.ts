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

