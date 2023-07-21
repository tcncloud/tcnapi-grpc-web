// package: api.v1alpha1.agenttraining
// file: api/v1alpha1/agenttraining/learning_opportunity.proto

import * as jspb from "google-protobuf";
import * as api_commons_agent_training_pb from "../../../api/commons/agent_training_pb";

export class CreateLearningOpportunityRequest extends jspb.Message {
  hasLearningOpportunity(): boolean;
  clearLearningOpportunity(): void;
  getLearningOpportunity(): api_commons_agent_training_pb.LearningOpportunity | undefined;
  setLearningOpportunity(value?: api_commons_agent_training_pb.LearningOpportunity): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLearningOpportunityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLearningOpportunityRequest): CreateLearningOpportunityRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateLearningOpportunityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLearningOpportunityRequest;
  static deserializeBinaryFromReader(message: CreateLearningOpportunityRequest, reader: jspb.BinaryReader): CreateLearningOpportunityRequest;
}

export namespace CreateLearningOpportunityRequest {
  export type AsObject = {
    learningOpportunity?: api_commons_agent_training_pb.LearningOpportunity.AsObject,
  }
}

export class CreateLearningOpportunityResponse extends jspb.Message {
  hasLearningOpportunity(): boolean;
  clearLearningOpportunity(): void;
  getLearningOpportunity(): api_commons_agent_training_pb.LearningOpportunity | undefined;
  setLearningOpportunity(value?: api_commons_agent_training_pb.LearningOpportunity): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLearningOpportunityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLearningOpportunityResponse): CreateLearningOpportunityResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateLearningOpportunityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLearningOpportunityResponse;
  static deserializeBinaryFromReader(message: CreateLearningOpportunityResponse, reader: jspb.BinaryReader): CreateLearningOpportunityResponse;
}

export namespace CreateLearningOpportunityResponse {
  export type AsObject = {
    learningOpportunity?: api_commons_agent_training_pb.LearningOpportunity.AsObject,
  }
}

export class ListLearningOpportunitiesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLearningOpportunitiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLearningOpportunitiesRequest): ListLearningOpportunitiesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListLearningOpportunitiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLearningOpportunitiesRequest;
  static deserializeBinaryFromReader(message: ListLearningOpportunitiesRequest, reader: jspb.BinaryReader): ListLearningOpportunitiesRequest;
}

export namespace ListLearningOpportunitiesRequest {
  export type AsObject = {
  }
}

export class ListLearningOpportunitiesResponse extends jspb.Message {
  clearLearningOpportunitiesList(): void;
  getLearningOpportunitiesList(): Array<api_commons_agent_training_pb.LearningOpportunity>;
  setLearningOpportunitiesList(value: Array<api_commons_agent_training_pb.LearningOpportunity>): void;
  addLearningOpportunities(value?: api_commons_agent_training_pb.LearningOpportunity, index?: number): api_commons_agent_training_pb.LearningOpportunity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLearningOpportunitiesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLearningOpportunitiesResponse): ListLearningOpportunitiesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListLearningOpportunitiesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLearningOpportunitiesResponse;
  static deserializeBinaryFromReader(message: ListLearningOpportunitiesResponse, reader: jspb.BinaryReader): ListLearningOpportunitiesResponse;
}

export namespace ListLearningOpportunitiesResponse {
  export type AsObject = {
    learningOpportunitiesList: Array<api_commons_agent_training_pb.LearningOpportunity.AsObject>,
  }
}

