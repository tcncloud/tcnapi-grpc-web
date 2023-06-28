// package: api.commons.workflows
// file: api/commons/workflows/service.proto

import * as api_commons_workflows_service_pb from "../../../api/commons/workflows/service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type WorkflowsDefinitionsServiceSaveFlowDefinition = {
  readonly methodName: string;
  readonly service: typeof WorkflowsDefinitionsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_commons_workflows_service_pb.SaveFlowDefinitionRequest;
  readonly responseType: typeof api_commons_workflows_service_pb.SaveFlowDefinitionResponse;
};

type WorkflowsDefinitionsServiceGetFlowDefinition = {
  readonly methodName: string;
  readonly service: typeof WorkflowsDefinitionsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_commons_workflows_service_pb.GetFlowDefinitionRequest;
  readonly responseType: typeof api_commons_workflows_service_pb.GetFlowDefinitionResponse;
};

export class WorkflowsDefinitionsService {
  static readonly serviceName: string;
  static readonly SaveFlowDefinition: WorkflowsDefinitionsServiceSaveFlowDefinition;
  static readonly GetFlowDefinition: WorkflowsDefinitionsServiceGetFlowDefinition;
}

type WorkflowsStateServiceSaveFlowState = {
  readonly methodName: string;
  readonly service: typeof WorkflowsStateService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_commons_workflows_service_pb.SaveFlowStateRequest;
  readonly responseType: typeof api_commons_workflows_service_pb.SaveFlowStateResponse;
};

type WorkflowsStateServiceGetFlowState = {
  readonly methodName: string;
  readonly service: typeof WorkflowsStateService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_commons_workflows_service_pb.GetFlowStateRequest;
  readonly responseType: typeof api_commons_workflows_service_pb.GetFlowStateResponse;
};

export class WorkflowsStateService {
  static readonly serviceName: string;
  static readonly SaveFlowState: WorkflowsStateServiceSaveFlowState;
  static readonly GetFlowState: WorkflowsStateServiceGetFlowState;
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

export class WorkflowsDefinitionsServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  saveFlowDefinition(
    requestMessage: api_commons_workflows_service_pb.SaveFlowDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_commons_workflows_service_pb.SaveFlowDefinitionResponse|null) => void
  ): UnaryResponse;
  saveFlowDefinition(
    requestMessage: api_commons_workflows_service_pb.SaveFlowDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: api_commons_workflows_service_pb.SaveFlowDefinitionResponse|null) => void
  ): UnaryResponse;
  getFlowDefinition(
    requestMessage: api_commons_workflows_service_pb.GetFlowDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_commons_workflows_service_pb.GetFlowDefinitionResponse|null) => void
  ): UnaryResponse;
  getFlowDefinition(
    requestMessage: api_commons_workflows_service_pb.GetFlowDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: api_commons_workflows_service_pb.GetFlowDefinitionResponse|null) => void
  ): UnaryResponse;
}

export class WorkflowsStateServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  saveFlowState(
    requestMessage: api_commons_workflows_service_pb.SaveFlowStateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_commons_workflows_service_pb.SaveFlowStateResponse|null) => void
  ): UnaryResponse;
  saveFlowState(
    requestMessage: api_commons_workflows_service_pb.SaveFlowStateRequest,
    callback: (error: ServiceError|null, responseMessage: api_commons_workflows_service_pb.SaveFlowStateResponse|null) => void
  ): UnaryResponse;
  getFlowState(
    requestMessage: api_commons_workflows_service_pb.GetFlowStateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_commons_workflows_service_pb.GetFlowStateResponse|null) => void
  ): UnaryResponse;
  getFlowState(
    requestMessage: api_commons_workflows_service_pb.GetFlowStateRequest,
    callback: (error: ServiceError|null, responseMessage: api_commons_workflows_service_pb.GetFlowStateResponse|null) => void
  ): UnaryResponse;
}

