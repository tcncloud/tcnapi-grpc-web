// package: api.v1alpha1.agenttraining
// file: api/v1alpha1/agenttraining/learning_opportunity.proto

import * as jspb from "google-protobuf";
import * as api_commons_agent_training_pb from "../../../api/commons/agent_training_pb";
import * as api_commons_dashboards_pb from "../../../api/commons/dashboards_pb";
import * as api_commons_scorecards_pb from "../../../api/commons/scorecards_pb";
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
  clearCallIdentifiersList(): void;
  getCallIdentifiersList(): Array<api_commons_agent_training_pb.CallIdentifier>;
  setCallIdentifiersList(value: Array<api_commons_agent_training_pb.CallIdentifier>): void;
  addCallIdentifiers(value?: api_commons_agent_training_pb.CallIdentifier, index?: number): api_commons_agent_training_pb.CallIdentifier;

  clearTranscriptSidsList(): void;
  getTranscriptSidsList(): Array<number>;
  setTranscriptSidsList(value: Array<number>): void;
  addTranscriptSids(value: number, index?: number): number;

  clearAgentUserIdsList(): void;
  getAgentUserIdsList(): Array<string>;
  setAgentUserIdsList(value: Array<string>): void;
  addAgentUserIds(value: string, index?: number): string;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): api_commons_scorecards_pb.TimeFilter | undefined;
  setCreatedAt(value?: api_commons_scorecards_pb.TimeFilter): void;

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
    callIdentifiersList: Array<api_commons_agent_training_pb.CallIdentifier.AsObject>,
    transcriptSidsList: Array<number>,
    agentUserIdsList: Array<string>,
    createdAt?: api_commons_scorecards_pb.TimeFilter.AsObject,
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
  clearCallIdentifiersList(): void;
  getCallIdentifiersList(): Array<api_commons_agent_training_pb.CallIdentifier>;
  setCallIdentifiersList(value: Array<api_commons_agent_training_pb.CallIdentifier>): void;
  addCallIdentifiers(value?: api_commons_agent_training_pb.CallIdentifier, index?: number): api_commons_agent_training_pb.CallIdentifier;

  clearTranscriptSidsList(): void;
  getTranscriptSidsList(): Array<number>;
  setTranscriptSidsList(value: Array<number>): void;
  addTranscriptSids(value: number, index?: number): number;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): api_commons_scorecards_pb.TimeFilter | undefined;
  setCreatedAt(value?: api_commons_scorecards_pb.TimeFilter): void;

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
    callIdentifiersList: Array<api_commons_agent_training_pb.CallIdentifier.AsObject>,
    transcriptSidsList: Array<number>,
    createdAt?: api_commons_scorecards_pb.TimeFilter.AsObject,
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

export class CompleteAgentLearningOpportunityRequest extends jspb.Message {
  getLearningOpportunityId(): number;
  setLearningOpportunityId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteAgentLearningOpportunityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CompleteAgentLearningOpportunityRequest): CompleteAgentLearningOpportunityRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompleteAgentLearningOpportunityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompleteAgentLearningOpportunityRequest;
  static deserializeBinaryFromReader(message: CompleteAgentLearningOpportunityRequest, reader: jspb.BinaryReader): CompleteAgentLearningOpportunityRequest;
}

export namespace CompleteAgentLearningOpportunityRequest {
  export type AsObject = {
    learningOpportunityId: number,
  }
}

export class CompleteAgentLearningOpportunityResponse extends jspb.Message {
  hasLearningOpportunity(): boolean;
  clearLearningOpportunity(): void;
  getLearningOpportunity(): api_commons_agent_training_pb.LearningOpportunity | undefined;
  setLearningOpportunity(value?: api_commons_agent_training_pb.LearningOpportunity): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteAgentLearningOpportunityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CompleteAgentLearningOpportunityResponse): CompleteAgentLearningOpportunityResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompleteAgentLearningOpportunityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompleteAgentLearningOpportunityResponse;
  static deserializeBinaryFromReader(message: CompleteAgentLearningOpportunityResponse, reader: jspb.BinaryReader): CompleteAgentLearningOpportunityResponse;
}

export namespace CompleteAgentLearningOpportunityResponse {
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

export class ListDashboardsRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDashboardsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDashboardsRequest): ListDashboardsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDashboardsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDashboardsRequest;
  static deserializeBinaryFromReader(message: ListDashboardsRequest, reader: jspb.BinaryReader): ListDashboardsRequest;
}

export namespace ListDashboardsRequest {
  export type AsObject = {
    orgId: string,
  }
}

export class ListDashboardsResponse extends jspb.Message {
  clearDashboardsList(): void;
  getDashboardsList(): Array<api_commons_dashboards_pb.DashboardSummary>;
  setDashboardsList(value: Array<api_commons_dashboards_pb.DashboardSummary>): void;
  addDashboards(value?: api_commons_dashboards_pb.DashboardSummary, index?: number): api_commons_dashboards_pb.DashboardSummary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDashboardsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDashboardsResponse): ListDashboardsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDashboardsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDashboardsResponse;
  static deserializeBinaryFromReader(message: ListDashboardsResponse, reader: jspb.BinaryReader): ListDashboardsResponse;
}

export namespace ListDashboardsResponse {
  export type AsObject = {
    dashboardsList: Array<api_commons_dashboards_pb.DashboardSummary.AsObject>,
  }
}

export class ListLearningOpportunitiesByOrgIdRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  clearCallIdentifiersList(): void;
  getCallIdentifiersList(): Array<api_commons_agent_training_pb.CallIdentifier>;
  setCallIdentifiersList(value: Array<api_commons_agent_training_pb.CallIdentifier>): void;
  addCallIdentifiers(value?: api_commons_agent_training_pb.CallIdentifier, index?: number): api_commons_agent_training_pb.CallIdentifier;

  clearTranscriptSidsList(): void;
  getTranscriptSidsList(): Array<number>;
  setTranscriptSidsList(value: Array<number>): void;
  addTranscriptSids(value: number, index?: number): number;

  clearAgentUserIdsList(): void;
  getAgentUserIdsList(): Array<string>;
  setAgentUserIdsList(value: Array<string>): void;
  addAgentUserIds(value: string, index?: number): string;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): api_commons_scorecards_pb.TimeFilter | undefined;
  setCreatedAt(value?: api_commons_scorecards_pb.TimeFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLearningOpportunitiesByOrgIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLearningOpportunitiesByOrgIdRequest): ListLearningOpportunitiesByOrgIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListLearningOpportunitiesByOrgIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLearningOpportunitiesByOrgIdRequest;
  static deserializeBinaryFromReader(message: ListLearningOpportunitiesByOrgIdRequest, reader: jspb.BinaryReader): ListLearningOpportunitiesByOrgIdRequest;
}

export namespace ListLearningOpportunitiesByOrgIdRequest {
  export type AsObject = {
    orgId: string,
    callIdentifiersList: Array<api_commons_agent_training_pb.CallIdentifier.AsObject>,
    transcriptSidsList: Array<number>,
    agentUserIdsList: Array<string>,
    createdAt?: api_commons_scorecards_pb.TimeFilter.AsObject,
  }
}

export class DeleteLearningOpportunityByOrgIdRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getLearningOpportunityId(): number;
  setLearningOpportunityId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLearningOpportunityByOrgIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLearningOpportunityByOrgIdRequest): DeleteLearningOpportunityByOrgIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteLearningOpportunityByOrgIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLearningOpportunityByOrgIdRequest;
  static deserializeBinaryFromReader(message: DeleteLearningOpportunityByOrgIdRequest, reader: jspb.BinaryReader): DeleteLearningOpportunityByOrgIdRequest;
}

export namespace DeleteLearningOpportunityByOrgIdRequest {
  export type AsObject = {
    orgId: string,
    learningOpportunityId: number,
  }
}

