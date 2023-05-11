// package: api.v0alpha
// file: api/v0alpha/sentinel.proto

import * as api_v0alpha_sentinel_pb from "../../api/v0alpha/sentinel_pb";
import {grpc} from "@improbable-eng/grpc-web";

type SentinelSendEvents = {
  readonly methodName: string;
  readonly service: typeof Sentinel;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_sentinel_pb.SendEventsReq;
  readonly responseType: typeof api_v0alpha_sentinel_pb.SendEventsRes;
};

export class Sentinel {
  static readonly serviceName: string;
  static readonly SendEvents: SentinelSendEvents;
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

export class SentinelClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  sendEvents(
    requestMessage: api_v0alpha_sentinel_pb.SendEventsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_sentinel_pb.SendEventsRes|null) => void
  ): UnaryResponse;
  sendEvents(
    requestMessage: api_v0alpha_sentinel_pb.SendEventsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_sentinel_pb.SendEventsRes|null) => void
  ): UnaryResponse;
}

