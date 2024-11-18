// package: services.callmonitor.v1alpha1
// file: services/callmonitor/v1alpha1/service.proto

import * as services_callmonitor_v1alpha1_service_pb from "../../../services/callmonitor/v1alpha1/service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CallMonitorServiceGetHoldQueueStats = {
  readonly methodName: string;
  readonly service: typeof CallMonitorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_callmonitor_v1alpha1_service_pb.GetHoldQueueStatsRequest;
  readonly responseType: typeof services_callmonitor_v1alpha1_service_pb.GetHoldQueueStatsResponse;
};

export class CallMonitorService {
  static readonly serviceName: string;
  static readonly GetHoldQueueStats: CallMonitorServiceGetHoldQueueStats;
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

export class CallMonitorServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getHoldQueueStats(
    requestMessage: services_callmonitor_v1alpha1_service_pb.GetHoldQueueStatsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_callmonitor_v1alpha1_service_pb.GetHoldQueueStatsResponse|null) => void
  ): UnaryResponse;
  getHoldQueueStats(
    requestMessage: services_callmonitor_v1alpha1_service_pb.GetHoldQueueStatsRequest,
    callback: (error: ServiceError|null, responseMessage: services_callmonitor_v1alpha1_service_pb.GetHoldQueueStatsResponse|null) => void
  ): UnaryResponse;
}

