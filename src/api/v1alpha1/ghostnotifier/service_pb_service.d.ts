// package: api.v1alpha1.ghostnotifier
// file: api/v1alpha1/ghostnotifier/service.proto

import * as api_v1alpha1_ghostnotifier_service_pb from "../../../api/v1alpha1/ghostnotifier/service_pb";
import * as api_commons_ghostnotifier_pb from "../../../api/commons/ghostnotifier_pb";
import {grpc} from "@improbable-eng/grpc-web";

type GhostNotifierApiListNotifications = {
  readonly methodName: string;
  readonly service: typeof GhostNotifierApi;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v1alpha1_ghostnotifier_service_pb.ListNotificationsReq;
  readonly responseType: typeof api_commons_ghostnotifier_pb.GhostNotification;
};

export class GhostNotifierApi {
  static readonly serviceName: string;
  static readonly ListNotifications: GhostNotifierApiListNotifications;
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

export class GhostNotifierApiClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  listNotifications(requestMessage: api_v1alpha1_ghostnotifier_service_pb.ListNotificationsReq, metadata?: grpc.Metadata): ResponseStream<api_commons_ghostnotifier_pb.GhostNotification>;
}

