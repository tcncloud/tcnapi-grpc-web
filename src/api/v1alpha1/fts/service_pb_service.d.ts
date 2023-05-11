// package: api.v1alpha1.fts
// file: api/v1alpha1/fts/service.proto

import * as api_v1alpha1_fts_service_pb from "../../../api/v1alpha1/fts/service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type FtsApiGetUploadFileUrl = {
  readonly methodName: string;
  readonly service: typeof FtsApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_fts_service_pb.GetUploadFileUrlReq;
  readonly responseType: typeof api_v1alpha1_fts_service_pb.GetUploadFileUrlRes;
};

export class FtsApi {
  static readonly serviceName: string;
  static readonly GetUploadFileUrl: FtsApiGetUploadFileUrl;
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

export class FtsApiClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getUploadFileUrl(
    requestMessage: api_v1alpha1_fts_service_pb.GetUploadFileUrlReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_fts_service_pb.GetUploadFileUrlRes|null) => void
  ): UnaryResponse;
  getUploadFileUrl(
    requestMessage: api_v1alpha1_fts_service_pb.GetUploadFileUrlReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_fts_service_pb.GetUploadFileUrlRes|null) => void
  ): UnaryResponse;
}

