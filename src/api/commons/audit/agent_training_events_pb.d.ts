// package: api.commons.audit
// file: api/commons/audit/agent_training_events.proto

import * as jspb from "google-protobuf";
import * as api_commons_agent_training_pb from "../../../api/commons/agent_training_pb";

export class AgentTrainingCreateLearningOpportunityEvent extends jspb.Message {
  hasLearningOpportunity(): boolean;
  clearLearningOpportunity(): void;
  getLearningOpportunity(): api_commons_agent_training_pb.LearningOpportunity | undefined;
  setLearningOpportunity(value?: api_commons_agent_training_pb.LearningOpportunity): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentTrainingCreateLearningOpportunityEvent.AsObject;
  static toObject(includeInstance: boolean, msg: AgentTrainingCreateLearningOpportunityEvent): AgentTrainingCreateLearningOpportunityEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentTrainingCreateLearningOpportunityEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentTrainingCreateLearningOpportunityEvent;
  static deserializeBinaryFromReader(message: AgentTrainingCreateLearningOpportunityEvent, reader: jspb.BinaryReader): AgentTrainingCreateLearningOpportunityEvent;
}

export namespace AgentTrainingCreateLearningOpportunityEvent {
  export type AsObject = {
    learningOpportunity?: api_commons_agent_training_pb.LearningOpportunity.AsObject,
  }
}

