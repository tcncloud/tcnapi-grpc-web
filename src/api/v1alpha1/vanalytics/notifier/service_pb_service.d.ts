// package: api.v1alpha1.vanalytics.notifier
// file: api/v1alpha1/vanalytics/notifier/service.proto

import * as api_v1alpha1_vanalytics_notifier_service_pb from "../../../../api/v1alpha1/vanalytics/notifier/service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type NotifierGetNotify = {
  readonly methodName: string;
  readonly service: typeof Notifier;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_vanalytics_notifier_service_pb.GetNotifyRequest;
  readonly responseType: typeof api_v1alpha1_vanalytics_notifier_service_pb.Notify;
};

export class Notifier {
  static readonly serviceName: string;
  static readonly GetNotify: NotifierGetNotify;
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

export class NotifierClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getNotify(
    requestMessage: api_v1alpha1_vanalytics_notifier_service_pb.GetNotifyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_notifier_service_pb.Notify|null) => void
  ): UnaryResponse;
  getNotify(
    requestMessage: api_v1alpha1_vanalytics_notifier_service_pb.GetNotifyRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_notifier_service_pb.Notify|null) => void
  ): UnaryResponse;
}

