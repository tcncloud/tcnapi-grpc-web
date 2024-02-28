// package: api.v1alpha1.wfm
// file: api/v1alpha1/wfm/wfm_adherence_app.proto

import * as api_v1alpha1_wfm_wfm_adherence_app_pb from "../../../api/v1alpha1/wfm/wfm_adherence_app_pb";
import {grpc} from "@improbable-eng/grpc-web";

type WfmAdherenceAppServiceHelloWorldWFMAdherence = {
  readonly methodName: string;
  readonly service: typeof WfmAdherenceAppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_wfm_wfm_adherence_app_pb.HelloWorldWFMAdherenceRequest;
  readonly responseType: typeof api_v1alpha1_wfm_wfm_adherence_app_pb.HelloWorldWFMAdherenceResponse;
};

export class WfmAdherenceAppService {
  static readonly serviceName: string;
  static readonly HelloWorldWFMAdherence: WfmAdherenceAppServiceHelloWorldWFMAdherence;
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

export class WfmAdherenceAppServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  helloWorldWFMAdherence(
    requestMessage: api_v1alpha1_wfm_wfm_adherence_app_pb.HelloWorldWFMAdherenceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_adherence_app_pb.HelloWorldWFMAdherenceResponse|null) => void
  ): UnaryResponse;
  helloWorldWFMAdherence(
    requestMessage: api_v1alpha1_wfm_wfm_adherence_app_pb.HelloWorldWFMAdherenceRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_wfm_wfm_adherence_app_pb.HelloWorldWFMAdherenceResponse|null) => void
  ): UnaryResponse;
}

