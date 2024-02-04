// package: api.commons
// file: api/commons/agent_training.proto

import * as jspb from "google-protobuf";
import * as api_commons_acd_pb from "../../api/commons/acd_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class LearningOpportunity extends jspb.Message {
  getLearningOpportunityId(): number;
  setLearningOpportunityId(value: number): void;

  getCallSid(): number;
  setCallSid(value: number): void;

  getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  getTranscriptSid(): number;
  setTranscriptSid(value: number): void;

  getAgentUserId(): string;
  setAgentUserId(value: string): void;

  getStartOffset(): number;
  setStartOffset(value: number): void;

  getEndOffset(): number;
  setEndOffset(value: number): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTitle(): string;
  setTitle(value: string): void;

  getStatus(): LearningOpportunityStatusMap[keyof LearningOpportunityStatusMap];
  setStatus(value: LearningOpportunityStatusMap[keyof LearningOpportunityStatusMap]): void;

  getOrigin(): LearningOpportunityOriginMap[keyof LearningOpportunityOriginMap];
  setOrigin(value: LearningOpportunityOriginMap[keyof LearningOpportunityOriginMap]): void;

  getCreatorUserId(): string;
  setCreatorUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LearningOpportunity.AsObject;
  static toObject(includeInstance: boolean, msg: LearningOpportunity): LearningOpportunity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LearningOpportunity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LearningOpportunity;
  static deserializeBinaryFromReader(message: LearningOpportunity, reader: jspb.BinaryReader): LearningOpportunity;
}

export namespace LearningOpportunity {
  export type AsObject = {
    learningOpportunityId: number,
    callSid: number,
    callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
    transcriptSid: number,
    agentUserId: string,
    startOffset: number,
    endOffset: number,
    description: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    title: string,
    status: LearningOpportunityStatusMap[keyof LearningOpportunityStatusMap],
    origin: LearningOpportunityOriginMap[keyof LearningOpportunityOriginMap],
    creatorUserId: string,
  }
}

export class CallIdentifier extends jspb.Message {
  getSid(): number;
  setSid(value: number): void;

  getType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallIdentifier.AsObject;
  static toObject(includeInstance: boolean, msg: CallIdentifier): CallIdentifier.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallIdentifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallIdentifier;
  static deserializeBinaryFromReader(message: CallIdentifier, reader: jspb.BinaryReader): CallIdentifier;
}

export namespace CallIdentifier {
  export type AsObject = {
    sid: number,
    type: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
  }
}

export interface LearningOpportunityStatusMap {
  STATUS_OPEN: 0;
  STATUS_COMPLETED: 1;
}

export const LearningOpportunityStatus: LearningOpportunityStatusMap;

export interface LearningOpportunityOriginMap {
  UNDEFINED: 0;
  QUALITY_EVALUATION: 1;
  AUTO_EVALUATION: 2;
  FLAG_EVALUATION: 3;
  CONVERSATION: 4;
  FLAGGED_CONVERSATION: 5;
}

export const LearningOpportunityOrigin: LearningOpportunityOriginMap;

