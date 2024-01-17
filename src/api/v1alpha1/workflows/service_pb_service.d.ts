// package: api.v1alpha1.workflows
// file: api/v1alpha1/workflows/service.proto

import * as api_v1alpha1_workflows_service_pb from "../../../api/v1alpha1/workflows/service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type WorkflowDefinitionPersistServiceCreateWorkflowDefinition = {
  readonly methodName: string;
  readonly service: typeof WorkflowDefinitionPersistService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_workflows_service_pb.CreateWorkflowDefinitionRequest;
  readonly responseType: typeof api_v1alpha1_workflows_service_pb.CreateWorkflowDefinitionResponse;
};

type WorkflowDefinitionPersistServiceGetWorkflowDefinition = {
  readonly methodName: string;
  readonly service: typeof WorkflowDefinitionPersistService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_workflows_service_pb.GetWorkflowDefinitionRequest;
  readonly responseType: typeof api_v1alpha1_workflows_service_pb.GetWorkflowDefinitionResponse;
};

type WorkflowDefinitionPersistServiceListWorkflowDefinitions = {
  readonly methodName: string;
  readonly service: typeof WorkflowDefinitionPersistService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v1alpha1_workflows_service_pb.ListWorkflowDefinitionsRequest;
  readonly responseType: typeof api_v1alpha1_workflows_service_pb.ListWorkflowDefinitionsResponse;
};

type WorkflowDefinitionPersistServiceUpdateWorkflowDefinition = {
  readonly methodName: string;
  readonly service: typeof WorkflowDefinitionPersistService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_workflows_service_pb.UpdateWorkflowDefinitionRequest;
  readonly responseType: typeof api_v1alpha1_workflows_service_pb.UpdateWorkflowDefinitionResponse;
};

type WorkflowDefinitionPersistServiceDeleteWorkflowDefinition = {
  readonly methodName: string;
  readonly service: typeof WorkflowDefinitionPersistService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_workflows_service_pb.DeleteWorkflowDefinitionRequest;
  readonly responseType: typeof api_v1alpha1_workflows_service_pb.DeleteWorkflowDefinitionResponse;
};

type WorkflowDefinitionPersistServiceValidateWorkflowDefinition = {
  readonly methodName: string;
  readonly service: typeof WorkflowDefinitionPersistService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_workflows_service_pb.ValidateWorkflowDefinitionRequest;
  readonly responseType: typeof api_v1alpha1_workflows_service_pb.ValidateWorkflowDefinitionResponse;
};

export class WorkflowDefinitionPersistService {
  static readonly serviceName: string;
  static readonly CreateWorkflowDefinition: WorkflowDefinitionPersistServiceCreateWorkflowDefinition;
  static readonly GetWorkflowDefinition: WorkflowDefinitionPersistServiceGetWorkflowDefinition;
  static readonly ListWorkflowDefinitions: WorkflowDefinitionPersistServiceListWorkflowDefinitions;
  static readonly UpdateWorkflowDefinition: WorkflowDefinitionPersistServiceUpdateWorkflowDefinition;
  static readonly DeleteWorkflowDefinition: WorkflowDefinitionPersistServiceDeleteWorkflowDefinition;
  static readonly ValidateWorkflowDefinition: WorkflowDefinitionPersistServiceValidateWorkflowDefinition;
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

export class WorkflowDefinitionPersistServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createWorkflowDefinition(
    requestMessage: api_v1alpha1_workflows_service_pb.CreateWorkflowDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_workflows_service_pb.CreateWorkflowDefinitionResponse|null) => void
  ): UnaryResponse;
  createWorkflowDefinition(
    requestMessage: api_v1alpha1_workflows_service_pb.CreateWorkflowDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_workflows_service_pb.CreateWorkflowDefinitionResponse|null) => void
  ): UnaryResponse;
  getWorkflowDefinition(
    requestMessage: api_v1alpha1_workflows_service_pb.GetWorkflowDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_workflows_service_pb.GetWorkflowDefinitionResponse|null) => void
  ): UnaryResponse;
  getWorkflowDefinition(
    requestMessage: api_v1alpha1_workflows_service_pb.GetWorkflowDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_workflows_service_pb.GetWorkflowDefinitionResponse|null) => void
  ): UnaryResponse;
  listWorkflowDefinitions(requestMessage: api_v1alpha1_workflows_service_pb.ListWorkflowDefinitionsRequest, metadata?: grpc.Metadata): ResponseStream<api_v1alpha1_workflows_service_pb.ListWorkflowDefinitionsResponse>;
  updateWorkflowDefinition(
    requestMessage: api_v1alpha1_workflows_service_pb.UpdateWorkflowDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_workflows_service_pb.UpdateWorkflowDefinitionResponse|null) => void
  ): UnaryResponse;
  updateWorkflowDefinition(
    requestMessage: api_v1alpha1_workflows_service_pb.UpdateWorkflowDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_workflows_service_pb.UpdateWorkflowDefinitionResponse|null) => void
  ): UnaryResponse;
  deleteWorkflowDefinition(
    requestMessage: api_v1alpha1_workflows_service_pb.DeleteWorkflowDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_workflows_service_pb.DeleteWorkflowDefinitionResponse|null) => void
  ): UnaryResponse;
  deleteWorkflowDefinition(
    requestMessage: api_v1alpha1_workflows_service_pb.DeleteWorkflowDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_workflows_service_pb.DeleteWorkflowDefinitionResponse|null) => void
  ): UnaryResponse;
  validateWorkflowDefinition(
    requestMessage: api_v1alpha1_workflows_service_pb.ValidateWorkflowDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_workflows_service_pb.ValidateWorkflowDefinitionResponse|null) => void
  ): UnaryResponse;
  validateWorkflowDefinition(
    requestMessage: api_v1alpha1_workflows_service_pb.ValidateWorkflowDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_workflows_service_pb.ValidateWorkflowDefinitionResponse|null) => void
  ): UnaryResponse;
}

