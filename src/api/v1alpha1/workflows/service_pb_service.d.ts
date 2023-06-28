// package: api.v1alpha1.workflows
// file: api/v1alpha1/workflows/service.proto

import * as api_v1alpha1_workflows_service_pb from "../../../api/v1alpha1/workflows/service_pb";
import * as api_v1alpha1_workflows_entities_pb from "../../../api/v1alpha1/workflows/entities_pb";
import {grpc} from "@improbable-eng/grpc-web";

type WorkflowsDefinitionServiceListFlowDefinitions = {
  readonly methodName: string;
  readonly service: typeof WorkflowsDefinitionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_workflows_entities_pb.ListFlowDefinitionsRequest;
  readonly responseType: typeof api_v1alpha1_workflows_entities_pb.ListFlowDefinitionsResponse;
};

type WorkflowsDefinitionServiceSaveFlowDefinition = {
  readonly methodName: string;
  readonly service: typeof WorkflowsDefinitionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_workflows_entities_pb.SaveFlowDefinitionRequest;
  readonly responseType: typeof api_v1alpha1_workflows_entities_pb.SaveFlowDefinitionResponse;
};

type WorkflowsDefinitionServiceGetFlowDefinition = {
  readonly methodName: string;
  readonly service: typeof WorkflowsDefinitionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_workflows_entities_pb.GetFlowDefinitionRequest;
  readonly responseType: typeof api_v1alpha1_workflows_entities_pb.GetFlowDefinitionResponse;
};

type WorkflowsDefinitionServiceDeleteFlowDefinitionById = {
  readonly methodName: string;
  readonly service: typeof WorkflowsDefinitionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_workflows_entities_pb.DeleteFlowDefinitionByIdRequest;
  readonly responseType: typeof api_v1alpha1_workflows_entities_pb.DeleteFlowDefinitionByIdResponse;
};

export class WorkflowsDefinitionService {
  static readonly serviceName: string;
  static readonly ListFlowDefinitions: WorkflowsDefinitionServiceListFlowDefinitions;
  static readonly SaveFlowDefinition: WorkflowsDefinitionServiceSaveFlowDefinition;
  static readonly GetFlowDefinition: WorkflowsDefinitionServiceGetFlowDefinition;
  static readonly DeleteFlowDefinitionById: WorkflowsDefinitionServiceDeleteFlowDefinitionById;
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

export class WorkflowsDefinitionServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  listFlowDefinitions(
    requestMessage: api_v1alpha1_workflows_entities_pb.ListFlowDefinitionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_workflows_entities_pb.ListFlowDefinitionsResponse|null) => void
  ): UnaryResponse;
  listFlowDefinitions(
    requestMessage: api_v1alpha1_workflows_entities_pb.ListFlowDefinitionsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_workflows_entities_pb.ListFlowDefinitionsResponse|null) => void
  ): UnaryResponse;
  saveFlowDefinition(
    requestMessage: api_v1alpha1_workflows_entities_pb.SaveFlowDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_workflows_entities_pb.SaveFlowDefinitionResponse|null) => void
  ): UnaryResponse;
  saveFlowDefinition(
    requestMessage: api_v1alpha1_workflows_entities_pb.SaveFlowDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_workflows_entities_pb.SaveFlowDefinitionResponse|null) => void
  ): UnaryResponse;
  getFlowDefinition(
    requestMessage: api_v1alpha1_workflows_entities_pb.GetFlowDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_workflows_entities_pb.GetFlowDefinitionResponse|null) => void
  ): UnaryResponse;
  getFlowDefinition(
    requestMessage: api_v1alpha1_workflows_entities_pb.GetFlowDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_workflows_entities_pb.GetFlowDefinitionResponse|null) => void
  ): UnaryResponse;
  deleteFlowDefinitionById(
    requestMessage: api_v1alpha1_workflows_entities_pb.DeleteFlowDefinitionByIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_workflows_entities_pb.DeleteFlowDefinitionByIdResponse|null) => void
  ): UnaryResponse;
  deleteFlowDefinitionById(
    requestMessage: api_v1alpha1_workflows_entities_pb.DeleteFlowDefinitionByIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_workflows_entities_pb.DeleteFlowDefinitionByIdResponse|null) => void
  ): UnaryResponse;
}

