// package: api.v1alpha1.agenttraining
// file: api/v1alpha1/agenttraining/service.proto

import * as api_v1alpha1_agenttraining_service_pb from "../../../api/v1alpha1/agenttraining/service_pb";
import * as api_v1alpha1_agenttraining_learning_opportunity_pb from "../../../api/v1alpha1/agenttraining/learning_opportunity_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AgentTrainingServiceCreateLearningOpportunity = {
  readonly methodName: string;
  readonly service: typeof AgentTrainingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_agenttraining_learning_opportunity_pb.CreateLearningOpportunityRequest;
  readonly responseType: typeof api_v1alpha1_agenttraining_learning_opportunity_pb.CreateLearningOpportunityResponse;
};

type AgentTrainingServiceListLearningOpportunities = {
  readonly methodName: string;
  readonly service: typeof AgentTrainingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_agenttraining_learning_opportunity_pb.ListLearningOpportunitiesRequest;
  readonly responseType: typeof api_v1alpha1_agenttraining_learning_opportunity_pb.ListLearningOpportunitiesResponse;
};

type AgentTrainingServiceListAgentLearningOpportunities = {
  readonly methodName: string;
  readonly service: typeof AgentTrainingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_agenttraining_learning_opportunity_pb.ListAgentLearningOpportunitiesRequest;
  readonly responseType: typeof api_v1alpha1_agenttraining_learning_opportunity_pb.ListAgentLearningOpportunitiesResponse;
};

type AgentTrainingServiceUpdateLearningOpportunity = {
  readonly methodName: string;
  readonly service: typeof AgentTrainingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_agenttraining_learning_opportunity_pb.UpdateLearningOpportunityRequest;
  readonly responseType: typeof api_v1alpha1_agenttraining_learning_opportunity_pb.UpdateLearningOpportunityResponse;
};

type AgentTrainingServiceDeleteLearningOpportunity = {
  readonly methodName: string;
  readonly service: typeof AgentTrainingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_agenttraining_learning_opportunity_pb.DeleteLearningOpportunityRequest;
  readonly responseType: typeof api_v1alpha1_agenttraining_learning_opportunity_pb.DeleteLearningOpportunityResponse;
};

type AgentTrainingServiceGetLearningOpportunity = {
  readonly methodName: string;
  readonly service: typeof AgentTrainingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_agenttraining_learning_opportunity_pb.GetLearningOpportunityRequest;
  readonly responseType: typeof api_v1alpha1_agenttraining_learning_opportunity_pb.GetLearningOpportunityResponse;
};

export class AgentTrainingService {
  static readonly serviceName: string;
  static readonly CreateLearningOpportunity: AgentTrainingServiceCreateLearningOpportunity;
  static readonly ListLearningOpportunities: AgentTrainingServiceListLearningOpportunities;
  static readonly ListAgentLearningOpportunities: AgentTrainingServiceListAgentLearningOpportunities;
  static readonly UpdateLearningOpportunity: AgentTrainingServiceUpdateLearningOpportunity;
  static readonly DeleteLearningOpportunity: AgentTrainingServiceDeleteLearningOpportunity;
  static readonly GetLearningOpportunity: AgentTrainingServiceGetLearningOpportunity;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class AgentTrainingServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createLearningOpportunity(
    requestMessage: api_v1alpha1_agenttraining_learning_opportunity_pb.CreateLearningOpportunityRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_agenttraining_learning_opportunity_pb.CreateLearningOpportunityResponse|null) => void
  ): UnaryResponse;
  createLearningOpportunity(
    requestMessage: api_v1alpha1_agenttraining_learning_opportunity_pb.CreateLearningOpportunityRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_agenttraining_learning_opportunity_pb.CreateLearningOpportunityResponse|null) => void
  ): UnaryResponse;
  listLearningOpportunities(
    requestMessage: api_v1alpha1_agenttraining_learning_opportunity_pb.ListLearningOpportunitiesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_agenttraining_learning_opportunity_pb.ListLearningOpportunitiesResponse|null) => void
  ): UnaryResponse;
  listLearningOpportunities(
    requestMessage: api_v1alpha1_agenttraining_learning_opportunity_pb.ListLearningOpportunitiesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_agenttraining_learning_opportunity_pb.ListLearningOpportunitiesResponse|null) => void
  ): UnaryResponse;
  listAgentLearningOpportunities(
    requestMessage: api_v1alpha1_agenttraining_learning_opportunity_pb.ListAgentLearningOpportunitiesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_agenttraining_learning_opportunity_pb.ListAgentLearningOpportunitiesResponse|null) => void
  ): UnaryResponse;
  listAgentLearningOpportunities(
    requestMessage: api_v1alpha1_agenttraining_learning_opportunity_pb.ListAgentLearningOpportunitiesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_agenttraining_learning_opportunity_pb.ListAgentLearningOpportunitiesResponse|null) => void
  ): UnaryResponse;
  updateLearningOpportunity(
    requestMessage: api_v1alpha1_agenttraining_learning_opportunity_pb.UpdateLearningOpportunityRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_agenttraining_learning_opportunity_pb.UpdateLearningOpportunityResponse|null) => void
  ): UnaryResponse;
  updateLearningOpportunity(
    requestMessage: api_v1alpha1_agenttraining_learning_opportunity_pb.UpdateLearningOpportunityRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_agenttraining_learning_opportunity_pb.UpdateLearningOpportunityResponse|null) => void
  ): UnaryResponse;
  deleteLearningOpportunity(
    requestMessage: api_v1alpha1_agenttraining_learning_opportunity_pb.DeleteLearningOpportunityRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_agenttraining_learning_opportunity_pb.DeleteLearningOpportunityResponse|null) => void
  ): UnaryResponse;
  deleteLearningOpportunity(
    requestMessage: api_v1alpha1_agenttraining_learning_opportunity_pb.DeleteLearningOpportunityRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_agenttraining_learning_opportunity_pb.DeleteLearningOpportunityResponse|null) => void
  ): UnaryResponse;
  getLearningOpportunity(
    requestMessage: api_v1alpha1_agenttraining_learning_opportunity_pb.GetLearningOpportunityRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_agenttraining_learning_opportunity_pb.GetLearningOpportunityResponse|null) => void
  ): UnaryResponse;
  getLearningOpportunity(
    requestMessage: api_v1alpha1_agenttraining_learning_opportunity_pb.GetLearningOpportunityRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_agenttraining_learning_opportunity_pb.GetLearningOpportunityResponse|null) => void
  ): UnaryResponse;
}

