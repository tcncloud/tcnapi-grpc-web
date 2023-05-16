// package: api.v0alpha
// file: api/v0alpha/fts.proto

import * as api_v0alpha_fts_pb from "../../api/v0alpha/fts_pb";
import {grpc} from "@improbable-eng/grpc-web";

type FTSGetUploadFileUrl = {
  readonly methodName: string;
  readonly service: typeof FTS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_fts_pb.GetUploadFileUrlReq;
  readonly responseType: typeof api_v0alpha_fts_pb.GetUploadFileUrlRes;
};

export class FTS {
  static readonly serviceName: string;
  static readonly GetUploadFileUrl: FTSGetUploadFileUrl;
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

export class FTSClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getUploadFileUrl(
    requestMessage: api_v0alpha_fts_pb.GetUploadFileUrlReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_fts_pb.GetUploadFileUrlRes|null) => void
  ): UnaryResponse;
  getUploadFileUrl(
    requestMessage: api_v0alpha_fts_pb.GetUploadFileUrlReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_fts_pb.GetUploadFileUrlRes|null) => void
  ): UnaryResponse;
}

