// package: api.v1alpha1.exile.station.finvi.v1
// file: api/v1alpha1/exile/station/finvi/v1/service.proto

import * as api_v1alpha1_exile_station_finvi_v1_service_pb from "../../../../../../api/v1alpha1/exile/station/finvi/v1/service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type GenericFinviServicePopAccount = {
  readonly methodName: string;
  readonly service: typeof GenericFinviService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_exile_station_finvi_v1_service_pb.PopAccountReq;
  readonly responseType: typeof api_v1alpha1_exile_station_finvi_v1_service_pb.PopAccountRes;
};

export class GenericFinviService {
  static readonly serviceName: string;
  static readonly PopAccount: GenericFinviServicePopAccount;
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

export class GenericFinviServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  popAccount(
    requestMessage: api_v1alpha1_exile_station_finvi_v1_service_pb.PopAccountReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_exile_station_finvi_v1_service_pb.PopAccountRes|null) => void
  ): UnaryResponse;
  popAccount(
    requestMessage: api_v1alpha1_exile_station_finvi_v1_service_pb.PopAccountReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_exile_station_finvi_v1_service_pb.PopAccountRes|null) => void
  ): UnaryResponse;
}

