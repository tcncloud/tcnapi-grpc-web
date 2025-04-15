// package: api.commons.audit
// file: api/commons/audit/p3_amqp_events.proto

import * as jspb from "google-protobuf";
import * as api_commons_acd_pb from "../../../api/commons/acd_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class P3AMQPCallResultEvent extends jspb.Message {
  getResult(): string;
  setResult(value: string): void;

  getCampaignSid(): string;
  setCampaignSid(value: string): void;

  hasTimeOfCall(): boolean;
  clearTimeOfCall(): void;
  getTimeOfCall(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimeOfCall(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  getClientSid(): string;
  setClientSid(value: string): void;

  hasDuration(): boolean;
  clearDuration(): void;
  getDuration(): google_protobuf_duration_pb.Duration | undefined;
  setDuration(value?: google_protobuf_duration_pb.Duration): void;

  getGroupDescription(): string;
  setGroupDescription(value: string): void;

  hasEndTimeOfCall(): boolean;
  clearEndTimeOfCall(): void;
  getEndTimeOfCall(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTimeOfCall(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): void;

  getTaskSid(): string;
  setTaskSid(value: string): void;

  getCallSid(): string;
  setCallSid(value: string): void;

  getCallerId(): string;
  setCallerId(value: string): void;

  getDtmfResponses(): string;
  setDtmfResponses(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): P3AMQPCallResultEvent.AsObject;
  static toObject(includeInstance: boolean, msg: P3AMQPCallResultEvent): P3AMQPCallResultEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: P3AMQPCallResultEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): P3AMQPCallResultEvent;
  static deserializeBinaryFromReader(message: P3AMQPCallResultEvent, reader: jspb.BinaryReader): P3AMQPCallResultEvent;
}

export namespace P3AMQPCallResultEvent {
  export type AsObject = {
    result: string,
    campaignSid: string,
    timeOfCall?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
    clientSid: string,
    duration?: google_protobuf_duration_pb.Duration.AsObject,
    groupDescription: string,
    endTimeOfCall?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    phoneNumber: string,
    taskSid: string,
    callSid: string,
    callerId: string,
    dtmfResponses: string,
  }
}

export class P3AMQPAgentResponseEvent extends jspb.Message {
  getClientSid(): string;
  setClientSid(value: string): void;

  getAgentSid(): string;
  setAgentSid(value: string): void;

  getHuntGroupSid(): string;
  setHuntGroupSid(value: string): void;

  getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  getCampaignSid(): string;
  setCampaignSid(value: string): void;

  getCallSid(): string;
  setCallSid(value: string): void;

  clearAggregationMethodsList(): void;
  getAggregationMethodsList(): Array<string>;
  setAggregationMethodsList(value: Array<string>): void;
  addAggregationMethods(value: string, index?: number): string;

  getAgentName(): string;
  setAgentName(value: string): void;

  getHuntGroupName(): string;
  setHuntGroupName(value: string): void;

  getResponsesMapMap(): jspb.Map<string, string>;
  clearResponsesMapMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): P3AMQPAgentResponseEvent.AsObject;
  static toObject(includeInstance: boolean, msg: P3AMQPAgentResponseEvent): P3AMQPAgentResponseEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: P3AMQPAgentResponseEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): P3AMQPAgentResponseEvent;
  static deserializeBinaryFromReader(message: P3AMQPAgentResponseEvent, reader: jspb.BinaryReader): P3AMQPAgentResponseEvent;
}

export namespace P3AMQPAgentResponseEvent {
  export type AsObject = {
    clientSid: string,
    agentSid: string,
    huntGroupSid: string,
    callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
    campaignSid: string,
    callSid: string,
    aggregationMethodsList: Array<string>,
    agentName: string,
    huntGroupName: string,
    responsesMapMap: Array<[string, string]>,
  }
}

