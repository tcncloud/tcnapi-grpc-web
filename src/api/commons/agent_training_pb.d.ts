// package: api.commons
// file: api/commons/agent_training.proto

import * as jspb from "google-protobuf";
import * as api_commons_acd_pb from "../../api/commons/acd_pb";

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
  }
}

