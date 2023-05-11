// package: api.v0alpha
// file: api/v0alpha/sds.proto

import * as api_v0alpha_sds_pb from "../../api/v0alpha/sds_pb";
import {grpc} from "@improbable-eng/grpc-web";

type SdsGetAgentResponseData = {
  readonly methodName: string;
  readonly service: typeof Sds;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_sds_pb.GetAgentResponseDataReq;
  readonly responseType: typeof api_v0alpha_sds_pb.GetAgentResponseDataRes;
};

type SdsGetCall = {
  readonly methodName: string;
  readonly service: typeof Sds;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_sds_pb.GetCallReq;
  readonly responseType: typeof api_v0alpha_sds_pb.CallObject;
};

type SdsUpdateAgentResponseData = {
  readonly methodName: string;
  readonly service: typeof Sds;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_sds_pb.UpdateAgentResponseDataReq;
  readonly responseType: typeof api_v0alpha_sds_pb.UpdateAgentResponseDataRes;
};

type SdsUpdateVoicemailBox = {
  readonly methodName: string;
  readonly service: typeof Sds;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_sds_pb.UpdateVoicemailBoxReq;
  readonly responseType: typeof api_v0alpha_sds_pb.UpdateVoicemailBoxRes;
};

export class Sds {
  static readonly serviceName: string;
  static readonly GetAgentResponseData: SdsGetAgentResponseData;
  static readonly GetCall: SdsGetCall;
  static readonly UpdateAgentResponseData: SdsUpdateAgentResponseData;
  static readonly UpdateVoicemailBox: SdsUpdateVoicemailBox;
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

export class SdsClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getAgentResponseData(
    requestMessage: api_v0alpha_sds_pb.GetAgentResponseDataReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_sds_pb.GetAgentResponseDataRes|null) => void
  ): UnaryResponse;
  getAgentResponseData(
    requestMessage: api_v0alpha_sds_pb.GetAgentResponseDataReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_sds_pb.GetAgentResponseDataRes|null) => void
  ): UnaryResponse;
  getCall(
    requestMessage: api_v0alpha_sds_pb.GetCallReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_sds_pb.CallObject|null) => void
  ): UnaryResponse;
  getCall(
    requestMessage: api_v0alpha_sds_pb.GetCallReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_sds_pb.CallObject|null) => void
  ): UnaryResponse;
  updateAgentResponseData(
    requestMessage: api_v0alpha_sds_pb.UpdateAgentResponseDataReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_sds_pb.UpdateAgentResponseDataRes|null) => void
  ): UnaryResponse;
  updateAgentResponseData(
    requestMessage: api_v0alpha_sds_pb.UpdateAgentResponseDataReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_sds_pb.UpdateAgentResponseDataRes|null) => void
  ): UnaryResponse;
  updateVoicemailBox(
    requestMessage: api_v0alpha_sds_pb.UpdateVoicemailBoxReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_sds_pb.UpdateVoicemailBoxRes|null) => void
  ): UnaryResponse;
  updateVoicemailBox(
    requestMessage: api_v0alpha_sds_pb.UpdateVoicemailBoxReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_sds_pb.UpdateVoicemailBoxRes|null) => void
  ): UnaryResponse;
}

