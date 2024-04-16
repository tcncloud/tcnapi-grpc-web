// package: api.v1alpha1.agenttraining
// file: api/v1alpha1/agenttraining/support_service.proto

import * as api_v1alpha1_agenttraining_support_service_pb from "../../../api/v1alpha1/agenttraining/support_service_pb";
import * as api_v1alpha1_agenttraining_learning_opportunity_pb from "../../../api/v1alpha1/agenttraining/learning_opportunity_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AgentTrainingSupportServiceListLearningOpportunitiesByOrgId = {
  readonly methodName: string;
  readonly service: typeof AgentTrainingSupportService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_agenttraining_learning_opportunity_pb.ListLearningOpportunitiesByOrgIdRequest;
  readonly responseType: typeof api_v1alpha1_agenttraining_learning_opportunity_pb.ListLearningOpportunitiesResponse;
};

type AgentTrainingSupportServiceDeleteLearningOpportunityByOrgId = {
  readonly methodName: string;
  readonly service: typeof AgentTrainingSupportService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_agenttraining_learning_opportunity_pb.DeleteLearningOpportunityByOrgIdRequest;
  readonly responseType: typeof api_v1alpha1_agenttraining_learning_opportunity_pb.DeleteLearningOpportunityResponse;
};

export class AgentTrainingSupportService {
  static readonly serviceName: string;
  static readonly ListLearningOpportunitiesByOrgId: AgentTrainingSupportServiceListLearningOpportunitiesByOrgId;
  static readonly DeleteLearningOpportunityByOrgId: AgentTrainingSupportServiceDeleteLearningOpportunityByOrgId;
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

export class AgentTrainingSupportServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  listLearningOpportunitiesByOrgId(
    requestMessage: api_v1alpha1_agenttraining_learning_opportunity_pb.ListLearningOpportunitiesByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_agenttraining_learning_opportunity_pb.ListLearningOpportunitiesResponse|null) => void
  ): UnaryResponse;
  listLearningOpportunitiesByOrgId(
    requestMessage: api_v1alpha1_agenttraining_learning_opportunity_pb.ListLearningOpportunitiesByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_agenttraining_learning_opportunity_pb.ListLearningOpportunitiesResponse|null) => void
  ): UnaryResponse;
  deleteLearningOpportunityByOrgId(
    requestMessage: api_v1alpha1_agenttraining_learning_opportunity_pb.DeleteLearningOpportunityByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_agenttraining_learning_opportunity_pb.DeleteLearningOpportunityResponse|null) => void
  ): UnaryResponse;
  deleteLearningOpportunityByOrgId(
    requestMessage: api_v1alpha1_agenttraining_learning_opportunity_pb.DeleteLearningOpportunityByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_agenttraining_learning_opportunity_pb.DeleteLearningOpportunityResponse|null) => void
  ): UnaryResponse;
}

