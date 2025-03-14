// package: services.omnichannel.instant.v1alpha1
// file: services/omnichannel/instant/v1alpha1/service.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../../../annotations/authz_pb";
import * as api_commons_acd_pb from "../../../../api/commons/acd_pb";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class StreamAgentEventsRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamAgentEventsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamAgentEventsRequest): StreamAgentEventsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamAgentEventsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamAgentEventsRequest;
  static deserializeBinaryFromReader(message: StreamAgentEventsRequest, reader: jspb.BinaryReader): StreamAgentEventsRequest;
}

export namespace StreamAgentEventsRequest {
  export type AsObject = {
    orgId: string,
  }
}

export class StreamAgentEventsResponse extends jspb.Message {
  clearEventList(): void;
  getEventList(): Array<AgentEvent>;
  setEventList(value: Array<AgentEvent>): void;
  addEvent(value?: AgentEvent, index?: number): AgentEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamAgentEventsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamAgentEventsResponse): StreamAgentEventsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamAgentEventsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamAgentEventsResponse;
  static deserializeBinaryFromReader(message: StreamAgentEventsResponse, reader: jspb.BinaryReader): StreamAgentEventsResponse;
}

export namespace StreamAgentEventsResponse {
  export type AsObject = {
    eventList: Array<AgentEvent.AsObject>,
  }
}

export class StreamCallerEventsRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamCallerEventsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamCallerEventsRequest): StreamCallerEventsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamCallerEventsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamCallerEventsRequest;
  static deserializeBinaryFromReader(message: StreamCallerEventsRequest, reader: jspb.BinaryReader): StreamCallerEventsRequest;
}

export namespace StreamCallerEventsRequest {
  export type AsObject = {
    orgId: string,
  }
}

export class StreamCallerEventsResponse extends jspb.Message {
  clearEventList(): void;
  getEventList(): Array<CallerEvent>;
  setEventList(value: Array<CallerEvent>): void;
  addEvent(value?: CallerEvent, index?: number): CallerEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamCallerEventsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamCallerEventsResponse): StreamCallerEventsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamCallerEventsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamCallerEventsResponse;
  static deserializeBinaryFromReader(message: StreamCallerEventsResponse, reader: jspb.BinaryReader): StreamCallerEventsResponse;
}

export namespace StreamCallerEventsResponse {
  export type AsObject = {
    eventList: Array<CallerEvent.AsObject>,
  }
}

export class AgentEvent extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getClientSid(): number;
  setClientSid(value: number): void;

  getAgentSid(): number;
  setAgentSid(value: number): void;

  getUserId(): string;
  setUserId(value: string): void;

  hasEventTime(): boolean;
  clearEventTime(): void;
  getEventTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEventTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getAgentFirstName(): string;
  setAgentFirstName(value: string): void;

  getAgentLastName(): string;
  setAgentLastName(value: string): void;

  getHuntGroupName(): string;
  setHuntGroupName(value: string): void;

  getEventData(): string;
  setEventData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentEvent.AsObject;
  static toObject(includeInstance: boolean, msg: AgentEvent): AgentEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentEvent;
  static deserializeBinaryFromReader(message: AgentEvent, reader: jspb.BinaryReader): AgentEvent;
}

export namespace AgentEvent {
  export type AsObject = {
    orgId: string,
    clientSid: number,
    agentSid: number,
    userId: string,
    eventTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    agentFirstName: string,
    agentLastName: string,
    huntGroupName: string,
    eventData: string,
  }
}

export class CallerEvent extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getClientSid(): number;
  setClientSid(value: number): void;

  getCallerSid(): number;
  setCallerSid(value: number): void;

  getCallerType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallerType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  hasEventTime(): boolean;
  clearEventTime(): void;
  getEventTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEventTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getEventData(): string;
  setEventData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallerEvent.AsObject;
  static toObject(includeInstance: boolean, msg: CallerEvent): CallerEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallerEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallerEvent;
  static deserializeBinaryFromReader(message: CallerEvent, reader: jspb.BinaryReader): CallerEvent;
}

export namespace CallerEvent {
  export type AsObject = {
    orgId: string,
    clientSid: number,
    callerSid: number,
    callerType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
    eventTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    eventData: string,
  }
}

