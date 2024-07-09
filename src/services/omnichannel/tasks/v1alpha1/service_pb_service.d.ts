// package: services.omnichannel.tasks.v1alpha1
// file: services/omnichannel/tasks/v1alpha1/service.proto

import * as services_omnichannel_tasks_v1alpha1_service_pb from "../../../../services/omnichannel/tasks/v1alpha1/service_pb";
import * as services_omnichannel_tasks_v1alpha1_entities_pb from "../../../../services/omnichannel/tasks/v1alpha1/entities_pb";
import {grpc} from "@improbable-eng/grpc-web";

type TasksServiceCancelTasks = {
  readonly methodName: string;
  readonly service: typeof TasksService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_omnichannel_tasks_v1alpha1_entities_pb.CancelTasksRequest;
  readonly responseType: typeof services_omnichannel_tasks_v1alpha1_entities_pb.CancelTasksResponse;
};

type TasksServiceBulkCancelTasks = {
  readonly methodName: string;
  readonly service: typeof TasksService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_omnichannel_tasks_v1alpha1_entities_pb.BulkCancelTasksRequest;
  readonly responseType: typeof services_omnichannel_tasks_v1alpha1_entities_pb.BulkCancelTasksResponse;
};

export class TasksService {
  static readonly serviceName: string;
  static readonly CancelTasks: TasksServiceCancelTasks;
  static readonly BulkCancelTasks: TasksServiceBulkCancelTasks;
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

export class TasksServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  cancelTasks(
    requestMessage: services_omnichannel_tasks_v1alpha1_entities_pb.CancelTasksRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_omnichannel_tasks_v1alpha1_entities_pb.CancelTasksResponse|null) => void
  ): UnaryResponse;
  cancelTasks(
    requestMessage: services_omnichannel_tasks_v1alpha1_entities_pb.CancelTasksRequest,
    callback: (error: ServiceError|null, responseMessage: services_omnichannel_tasks_v1alpha1_entities_pb.CancelTasksResponse|null) => void
  ): UnaryResponse;
  bulkCancelTasks(
    requestMessage: services_omnichannel_tasks_v1alpha1_entities_pb.BulkCancelTasksRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_omnichannel_tasks_v1alpha1_entities_pb.BulkCancelTasksResponse|null) => void
  ): UnaryResponse;
  bulkCancelTasks(
    requestMessage: services_omnichannel_tasks_v1alpha1_entities_pb.BulkCancelTasksRequest,
    callback: (error: ServiceError|null, responseMessage: services_omnichannel_tasks_v1alpha1_entities_pb.BulkCancelTasksResponse|null) => void
  ): UnaryResponse;
}

