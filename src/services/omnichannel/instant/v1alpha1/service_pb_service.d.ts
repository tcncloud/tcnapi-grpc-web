// package: services.omnichannel.instant.v1alpha1
// file: services/omnichannel/instant/v1alpha1/service.proto

import * as services_omnichannel_instant_v1alpha1_service_pb from "../../../../services/omnichannel/instant/v1alpha1/service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type OauthServiceStreamContantCenterSnapshot = {
  readonly methodName: string;
  readonly service: typeof OauthService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof services_omnichannel_instant_v1alpha1_service_pb.StreamContantCenterSnapshotRequest;
  readonly responseType: typeof services_omnichannel_instant_v1alpha1_service_pb.StreamContantCenterSnapshotResponse;
};

export class OauthService {
  static readonly serviceName: string;
  static readonly StreamContantCenterSnapshot: OauthServiceStreamContantCenterSnapshot;
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

export class OauthServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  streamContantCenterSnapshot(requestMessage: services_omnichannel_instant_v1alpha1_service_pb.StreamContantCenterSnapshotRequest, metadata?: grpc.Metadata): ResponseStream<services_omnichannel_instant_v1alpha1_service_pb.StreamContantCenterSnapshotResponse>;
}
