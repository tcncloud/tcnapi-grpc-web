// package: api.v1alpha1.vmds
// file: api/v1alpha1/vmds/service.proto

import * as api_v1alpha1_vmds_service_pb from "../../../api/v1alpha1/vmds/service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type VmdsServiceDownloadSpecifiedMessages = {
  readonly methodName: string;
  readonly service: typeof VmdsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_vmds_service_pb.DownloadSpecifiedMessagesRequest;
  readonly responseType: typeof api_v1alpha1_vmds_service_pb.DownloadSpecifiedMessagesResponse;
};

export class VmdsService {
  static readonly serviceName: string;
  static readonly DownloadSpecifiedMessages: VmdsServiceDownloadSpecifiedMessages;
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

export class VmdsServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  downloadSpecifiedMessages(
    requestMessage: api_v1alpha1_vmds_service_pb.DownloadSpecifiedMessagesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vmds_service_pb.DownloadSpecifiedMessagesResponse|null) => void
  ): UnaryResponse;
  downloadSpecifiedMessages(
    requestMessage: api_v1alpha1_vmds_service_pb.DownloadSpecifiedMessagesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vmds_service_pb.DownloadSpecifiedMessagesResponse|null) => void
  ): UnaryResponse;
}

