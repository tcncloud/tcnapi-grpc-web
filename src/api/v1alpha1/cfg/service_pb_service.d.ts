// package: api.v1alpha1.cfg
// file: api/v1alpha1/cfg/service.proto

import * as api_v1alpha1_cfg_service_pb from "../../../api/v1alpha1/cfg/service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CfgGetWebAgentConfig = {
  readonly methodName: string;
  readonly service: typeof Cfg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_cfg_service_pb.GetWebAgentConfigReq;
  readonly responseType: typeof api_v1alpha1_cfg_service_pb.WebAgent;
};

export class Cfg {
  static readonly serviceName: string;
  static readonly GetWebAgentConfig: CfgGetWebAgentConfig;
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

export class CfgClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getWebAgentConfig(
    requestMessage: api_v1alpha1_cfg_service_pb.GetWebAgentConfigReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_cfg_service_pb.WebAgent|null) => void
  ): UnaryResponse;
  getWebAgentConfig(
    requestMessage: api_v1alpha1_cfg_service_pb.GetWebAgentConfigReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_cfg_service_pb.WebAgent|null) => void
  ): UnaryResponse;
}

