// package: api.v1alpha1.workflows
// file: api/v1alpha1/workflows/service.proto

import * as api_v1alpha1_workflows_service_pb from "../../../api/v1alpha1/workflows/service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type FlowDefinitionPersistServiceCreateFlowDefinition = {
  readonly methodName: string;
  readonly service: typeof FlowDefinitionPersistService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_workflows_service_pb.CreateFlowDefinitionRequest;
  readonly responseType: typeof api_v1alpha1_workflows_service_pb.CreateFlowDefinitionResponse;
};

type FlowDefinitionPersistServiceGetFlowDefinition = {
  readonly methodName: string;
  readonly service: typeof FlowDefinitionPersistService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_workflows_service_pb.GetFlowDefinitionRequest;
  readonly responseType: typeof api_v1alpha1_workflows_service_pb.GetFlowDefinitionResponse;
};

type FlowDefinitionPersistServiceListFlowDefinitions = {
  readonly methodName: string;
  readonly service: typeof FlowDefinitionPersistService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v1alpha1_workflows_service_pb.ListFlowDefinitionsRequest;
  readonly responseType: typeof api_v1alpha1_workflows_service_pb.ListFlowDefinitionsResponse;
};

type FlowDefinitionPersistServiceUpdateFlowDefinition = {
  readonly methodName: string;
  readonly service: typeof FlowDefinitionPersistService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_workflows_service_pb.UpdateFlowDefinitionRequest;
  readonly responseType: typeof api_v1alpha1_workflows_service_pb.UpdateFlowDefinitionResponse;
};

type FlowDefinitionPersistServiceValidateFlowDefinition = {
  readonly methodName: string;
  readonly service: typeof FlowDefinitionPersistService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_workflows_service_pb.ValidateFlowDefinitionRequest;
  readonly responseType: typeof api_v1alpha1_workflows_service_pb.ValidateFlowDefinitionResponse;
};

export class FlowDefinitionPersistService {
  static readonly serviceName: string;
  static readonly CreateFlowDefinition: FlowDefinitionPersistServiceCreateFlowDefinition;
  static readonly GetFlowDefinition: FlowDefinitionPersistServiceGetFlowDefinition;
  static readonly ListFlowDefinitions: FlowDefinitionPersistServiceListFlowDefinitions;
  static readonly UpdateFlowDefinition: FlowDefinitionPersistServiceUpdateFlowDefinition;
  static readonly ValidateFlowDefinition: FlowDefinitionPersistServiceValidateFlowDefinition;
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

export class FlowDefinitionPersistServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createFlowDefinition(
    requestMessage: api_v1alpha1_workflows_service_pb.CreateFlowDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_workflows_service_pb.CreateFlowDefinitionResponse|null) => void
  ): UnaryResponse;
  createFlowDefinition(
    requestMessage: api_v1alpha1_workflows_service_pb.CreateFlowDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_workflows_service_pb.CreateFlowDefinitionResponse|null) => void
  ): UnaryResponse;
  getFlowDefinition(
    requestMessage: api_v1alpha1_workflows_service_pb.GetFlowDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_workflows_service_pb.GetFlowDefinitionResponse|null) => void
  ): UnaryResponse;
  getFlowDefinition(
    requestMessage: api_v1alpha1_workflows_service_pb.GetFlowDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_workflows_service_pb.GetFlowDefinitionResponse|null) => void
  ): UnaryResponse;
  listFlowDefinitions(requestMessage: api_v1alpha1_workflows_service_pb.ListFlowDefinitionsRequest, metadata?: grpc.Metadata): ResponseStream<api_v1alpha1_workflows_service_pb.ListFlowDefinitionsResponse>;
  updateFlowDefinition(
    requestMessage: api_v1alpha1_workflows_service_pb.UpdateFlowDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_workflows_service_pb.UpdateFlowDefinitionResponse|null) => void
  ): UnaryResponse;
  updateFlowDefinition(
    requestMessage: api_v1alpha1_workflows_service_pb.UpdateFlowDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_workflows_service_pb.UpdateFlowDefinitionResponse|null) => void
  ): UnaryResponse;
  validateFlowDefinition(
    requestMessage: api_v1alpha1_workflows_service_pb.ValidateFlowDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_workflows_service_pb.ValidateFlowDefinitionResponse|null) => void
  ): UnaryResponse;
  validateFlowDefinition(
    requestMessage: api_v1alpha1_workflows_service_pb.ValidateFlowDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_workflows_service_pb.ValidateFlowDefinitionResponse|null) => void
  ): UnaryResponse;
}

