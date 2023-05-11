// package: api.v0alpha
// file: api/v0alpha/cbs.proto

import * as api_v0alpha_cbs_pb from "../../api/v0alpha/cbs_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CBSCreateServiceId = {
  readonly methodName: string;
  readonly service: typeof CBS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_cbs_pb.CreateServiceIdReq;
  readonly responseType: typeof api_v0alpha_cbs_pb.CreateServiceIdRes;
};

type CBSCreateCallbackWithDetails = {
  readonly methodName: string;
  readonly service: typeof CBS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_cbs_pb.CreateCallbackWithDetailsReq;
  readonly responseType: typeof api_v0alpha_cbs_pb.CreateCallbackWithDetailsRes;
};

type CBSUpdateScheduledCallbackToReady = {
  readonly methodName: string;
  readonly service: typeof CBS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_cbs_pb.UpdateScheduledCallbackToReadyReq;
  readonly responseType: typeof api_v0alpha_cbs_pb.UpdateScheduledCallbackToReadyRes;
};

type CBSUpdateScheduledCallbackToCanceled = {
  readonly methodName: string;
  readonly service: typeof CBS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_cbs_pb.UpdateScheduledCallbackToCanceledReq;
  readonly responseType: typeof api_v0alpha_cbs_pb.UpdateScheduledCallbackToCanceledRes;
};

type CBSGetNextScheduledCallbackWithDetails = {
  readonly methodName: string;
  readonly service: typeof CBS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_cbs_pb.GetNextScheduledCallbackWithDetailsReq;
  readonly responseType: typeof api_v0alpha_cbs_pb.GetNextScheduledCallbackWithDetailsRes;
};

type CBSUpdateScheduledCallbackToClosed = {
  readonly methodName: string;
  readonly service: typeof CBS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_cbs_pb.UpdateScheduledCallbackToClosedReq;
  readonly responseType: typeof api_v0alpha_cbs_pb.UpdateScheduledCallbackToClosedRes;
};

type CBSUpdateScheduledCallback = {
  readonly methodName: string;
  readonly service: typeof CBS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_cbs_pb.UpdateScheduledCallbackReq;
  readonly responseType: typeof api_v0alpha_cbs_pb.UpdateScheduledCallbackRes;
};

type CBSGetScheduledCallbackWithDetails = {
  readonly methodName: string;
  readonly service: typeof CBS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_cbs_pb.GetScheduledCallbackWithDetailsReq;
  readonly responseType: typeof api_v0alpha_cbs_pb.GetScheduledCallbackWithDetailsRes;
};

type CBSListScheduledCallbacksWithDetails = {
  readonly methodName: string;
  readonly service: typeof CBS;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v0alpha_cbs_pb.ListScheduledCallbacksWithDetailsReq;
  readonly responseType: typeof api_v0alpha_cbs_pb.ListScheduledCallbacksWithDetailsRes;
};

type CBSListScheduledCallbacksWithDetailsBySkills = {
  readonly methodName: string;
  readonly service: typeof CBS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_cbs_pb.ListScheduledCallbacksWithDetailsBySkillsReq;
  readonly responseType: typeof api_v0alpha_cbs_pb.ListScheduledCallbacksWithDetailsRes;
};

export class CBS {
  static readonly serviceName: string;
  static readonly CreateServiceId: CBSCreateServiceId;
  static readonly CreateCallbackWithDetails: CBSCreateCallbackWithDetails;
  static readonly UpdateScheduledCallbackToReady: CBSUpdateScheduledCallbackToReady;
  static readonly UpdateScheduledCallbackToCanceled: CBSUpdateScheduledCallbackToCanceled;
  static readonly GetNextScheduledCallbackWithDetails: CBSGetNextScheduledCallbackWithDetails;
  static readonly UpdateScheduledCallbackToClosed: CBSUpdateScheduledCallbackToClosed;
  static readonly UpdateScheduledCallback: CBSUpdateScheduledCallback;
  static readonly GetScheduledCallbackWithDetails: CBSGetScheduledCallbackWithDetails;
  static readonly ListScheduledCallbacksWithDetails: CBSListScheduledCallbacksWithDetails;
  static readonly ListScheduledCallbacksWithDetailsBySkills: CBSListScheduledCallbacksWithDetailsBySkills;
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

export class CBSClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createServiceId(
    requestMessage: api_v0alpha_cbs_pb.CreateServiceIdReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_cbs_pb.CreateServiceIdRes|null) => void
  ): UnaryResponse;
  createServiceId(
    requestMessage: api_v0alpha_cbs_pb.CreateServiceIdReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_cbs_pb.CreateServiceIdRes|null) => void
  ): UnaryResponse;
  createCallbackWithDetails(
    requestMessage: api_v0alpha_cbs_pb.CreateCallbackWithDetailsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_cbs_pb.CreateCallbackWithDetailsRes|null) => void
  ): UnaryResponse;
  createCallbackWithDetails(
    requestMessage: api_v0alpha_cbs_pb.CreateCallbackWithDetailsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_cbs_pb.CreateCallbackWithDetailsRes|null) => void
  ): UnaryResponse;
  updateScheduledCallbackToReady(
    requestMessage: api_v0alpha_cbs_pb.UpdateScheduledCallbackToReadyReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_cbs_pb.UpdateScheduledCallbackToReadyRes|null) => void
  ): UnaryResponse;
  updateScheduledCallbackToReady(
    requestMessage: api_v0alpha_cbs_pb.UpdateScheduledCallbackToReadyReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_cbs_pb.UpdateScheduledCallbackToReadyRes|null) => void
  ): UnaryResponse;
  updateScheduledCallbackToCanceled(
    requestMessage: api_v0alpha_cbs_pb.UpdateScheduledCallbackToCanceledReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_cbs_pb.UpdateScheduledCallbackToCanceledRes|null) => void
  ): UnaryResponse;
  updateScheduledCallbackToCanceled(
    requestMessage: api_v0alpha_cbs_pb.UpdateScheduledCallbackToCanceledReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_cbs_pb.UpdateScheduledCallbackToCanceledRes|null) => void
  ): UnaryResponse;
  getNextScheduledCallbackWithDetails(
    requestMessage: api_v0alpha_cbs_pb.GetNextScheduledCallbackWithDetailsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_cbs_pb.GetNextScheduledCallbackWithDetailsRes|null) => void
  ): UnaryResponse;
  getNextScheduledCallbackWithDetails(
    requestMessage: api_v0alpha_cbs_pb.GetNextScheduledCallbackWithDetailsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_cbs_pb.GetNextScheduledCallbackWithDetailsRes|null) => void
  ): UnaryResponse;
  updateScheduledCallbackToClosed(
    requestMessage: api_v0alpha_cbs_pb.UpdateScheduledCallbackToClosedReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_cbs_pb.UpdateScheduledCallbackToClosedRes|null) => void
  ): UnaryResponse;
  updateScheduledCallbackToClosed(
    requestMessage: api_v0alpha_cbs_pb.UpdateScheduledCallbackToClosedReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_cbs_pb.UpdateScheduledCallbackToClosedRes|null) => void
  ): UnaryResponse;
  updateScheduledCallback(
    requestMessage: api_v0alpha_cbs_pb.UpdateScheduledCallbackReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_cbs_pb.UpdateScheduledCallbackRes|null) => void
  ): UnaryResponse;
  updateScheduledCallback(
    requestMessage: api_v0alpha_cbs_pb.UpdateScheduledCallbackReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_cbs_pb.UpdateScheduledCallbackRes|null) => void
  ): UnaryResponse;
  getScheduledCallbackWithDetails(
    requestMessage: api_v0alpha_cbs_pb.GetScheduledCallbackWithDetailsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_cbs_pb.GetScheduledCallbackWithDetailsRes|null) => void
  ): UnaryResponse;
  getScheduledCallbackWithDetails(
    requestMessage: api_v0alpha_cbs_pb.GetScheduledCallbackWithDetailsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_cbs_pb.GetScheduledCallbackWithDetailsRes|null) => void
  ): UnaryResponse;
  listScheduledCallbacksWithDetails(requestMessage: api_v0alpha_cbs_pb.ListScheduledCallbacksWithDetailsReq, metadata?: grpc.Metadata): ResponseStream<api_v0alpha_cbs_pb.ListScheduledCallbacksWithDetailsRes>;
  listScheduledCallbacksWithDetailsBySkills(
    requestMessage: api_v0alpha_cbs_pb.ListScheduledCallbacksWithDetailsBySkillsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_cbs_pb.ListScheduledCallbacksWithDetailsRes|null) => void
  ): UnaryResponse;
  listScheduledCallbacksWithDetailsBySkills(
    requestMessage: api_v0alpha_cbs_pb.ListScheduledCallbacksWithDetailsBySkillsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_cbs_pb.ListScheduledCallbacksWithDetailsRes|null) => void
  ): UnaryResponse;
}

