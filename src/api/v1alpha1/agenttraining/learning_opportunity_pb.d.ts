// package: api.v1alpha1.agenttraining
// file: api/v1alpha1/agenttraining/learning_opportunity.proto

import * as jspb from "google-protobuf";
import * as api_commons_agent_training_pb from "../../../api/commons/agent_training_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

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

export class ListAgentLearningOpportunitiesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentLearningOpportunitiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentLearningOpportunitiesRequest): ListAgentLearningOpportunitiesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentLearningOpportunitiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentLearningOpportunitiesRequest;
  static deserializeBinaryFromReader(message: ListAgentLearningOpportunitiesRequest, reader: jspb.BinaryReader): ListAgentLearningOpportunitiesRequest;
}

export namespace ListAgentLearningOpportunitiesRequest {
  export type AsObject = {
  }
}

export class ListAgentLearningOpportunitiesResponse extends jspb.Message {
  clearLearningOpportunitiesList(): void;
  getLearningOpportunitiesList(): Array<api_commons_agent_training_pb.LearningOpportunity>;
  setLearningOpportunitiesList(value: Array<api_commons_agent_training_pb.LearningOpportunity>): void;
  addLearningOpportunities(value?: api_commons_agent_training_pb.LearningOpportunity, index?: number): api_commons_agent_training_pb.LearningOpportunity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentLearningOpportunitiesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentLearningOpportunitiesResponse): ListAgentLearningOpportunitiesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentLearningOpportunitiesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentLearningOpportunitiesResponse;
  static deserializeBinaryFromReader(message: ListAgentLearningOpportunitiesResponse, reader: jspb.BinaryReader): ListAgentLearningOpportunitiesResponse;
}

export namespace ListAgentLearningOpportunitiesResponse {
  export type AsObject = {
    learningOpportunitiesList: Array<api_commons_agent_training_pb.LearningOpportunity.AsObject>,
  }
}

export class UpdateLearningOpportunityRequest extends jspb.Message {
  hasLearningOpportunity(): boolean;
  clearLearningOpportunity(): void;
  getLearningOpportunity(): api_commons_agent_training_pb.LearningOpportunity | undefined;
  setLearningOpportunity(value?: api_commons_agent_training_pb.LearningOpportunity): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLearningOpportunityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLearningOpportunityRequest): UpdateLearningOpportunityRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateLearningOpportunityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLearningOpportunityRequest;
  static deserializeBinaryFromReader(message: UpdateLearningOpportunityRequest, reader: jspb.BinaryReader): UpdateLearningOpportunityRequest;
}

export namespace UpdateLearningOpportunityRequest {
  export type AsObject = {
    learningOpportunity?: api_commons_agent_training_pb.LearningOpportunity.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateLearningOpportunityResponse extends jspb.Message {
  hasLearningOpportunity(): boolean;
  clearLearningOpportunity(): void;
  getLearningOpportunity(): api_commons_agent_training_pb.LearningOpportunity | undefined;
  setLearningOpportunity(value?: api_commons_agent_training_pb.LearningOpportunity): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLearningOpportunityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLearningOpportunityResponse): UpdateLearningOpportunityResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateLearningOpportunityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLearningOpportunityResponse;
  static deserializeBinaryFromReader(message: UpdateLearningOpportunityResponse, reader: jspb.BinaryReader): UpdateLearningOpportunityResponse;
}

export namespace UpdateLearningOpportunityResponse {
  export type AsObject = {
    learningOpportunity?: api_commons_agent_training_pb.LearningOpportunity.AsObject,
  }
}

export class DeleteLearningOpportunityRequest extends jspb.Message {
  getLearningOpportunityId(): number;
  setLearningOpportunityId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLearningOpportunityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLearningOpportunityRequest): DeleteLearningOpportunityRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteLearningOpportunityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLearningOpportunityRequest;
  static deserializeBinaryFromReader(message: DeleteLearningOpportunityRequest, reader: jspb.BinaryReader): DeleteLearningOpportunityRequest;
}

export namespace DeleteLearningOpportunityRequest {
  export type AsObject = {
    learningOpportunityId: number,
  }
}

export class DeleteLearningOpportunityResponse extends jspb.Message {
  hasLearningOpportunity(): boolean;
  clearLearningOpportunity(): void;
  getLearningOpportunity(): api_commons_agent_training_pb.LearningOpportunity | undefined;
  setLearningOpportunity(value?: api_commons_agent_training_pb.LearningOpportunity): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLearningOpportunityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLearningOpportunityResponse): DeleteLearningOpportunityResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteLearningOpportunityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLearningOpportunityResponse;
  static deserializeBinaryFromReader(message: DeleteLearningOpportunityResponse, reader: jspb.BinaryReader): DeleteLearningOpportunityResponse;
}

export namespace DeleteLearningOpportunityResponse {
  export type AsObject = {
    learningOpportunity?: api_commons_agent_training_pb.LearningOpportunity.AsObject,
  }
}

export class GetLearningOpportunityRequest extends jspb.Message {
  getLearningOpportunity(): number;
  setLearningOpportunity(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLearningOpportunityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLearningOpportunityRequest): GetLearningOpportunityRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLearningOpportunityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLearningOpportunityRequest;
  static deserializeBinaryFromReader(message: GetLearningOpportunityRequest, reader: jspb.BinaryReader): GetLearningOpportunityRequest;
}

export namespace GetLearningOpportunityRequest {
  export type AsObject = {
    learningOpportunity: number,
  }
}

export class GetLearningOpportunityResponse extends jspb.Message {
  hasLearningOpportunity(): boolean;
  clearLearningOpportunity(): void;
  getLearningOpportunity(): api_commons_agent_training_pb.LearningOpportunity | undefined;
  setLearningOpportunity(value?: api_commons_agent_training_pb.LearningOpportunity): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLearningOpportunityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLearningOpportunityResponse): GetLearningOpportunityResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLearningOpportunityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLearningOpportunityResponse;
  static deserializeBinaryFromReader(message: GetLearningOpportunityResponse, reader: jspb.BinaryReader): GetLearningOpportunityResponse;
}

export namespace GetLearningOpportunityResponse {
  export type AsObject = {
    learningOpportunity?: api_commons_agent_training_pb.LearningOpportunity.AsObject,
  }
}

