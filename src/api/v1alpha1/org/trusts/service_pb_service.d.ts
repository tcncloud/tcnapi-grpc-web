// package: api.v1alpha1.org.trusts
// file: api/v1alpha1/org/trusts/service.proto

import * as api_v1alpha1_org_trusts_service_pb from "../../../../api/v1alpha1/org/trusts/service_pb";
import * as api_v1alpha1_org_trusts_pb from "../../../../api/v1alpha1/org/trusts_pb";
import {grpc} from "@improbable-eng/grpc-web";

type TrustsServiceCreateTrust = {
  readonly methodName: string;
  readonly service: typeof TrustsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_trusts_pb.CreateTrustRequest;
  readonly responseType: typeof api_v1alpha1_org_trusts_pb.CreateTrustResponse;
};

type TrustsServiceAcceptTrust = {
  readonly methodName: string;
  readonly service: typeof TrustsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_trusts_pb.AcceptTrustRequest;
  readonly responseType: typeof api_v1alpha1_org_trusts_pb.AcceptTrustResponse;
};

type TrustsServiceRejectTrust = {
  readonly methodName: string;
  readonly service: typeof TrustsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_trusts_pb.RejectTrustRequest;
  readonly responseType: typeof api_v1alpha1_org_trusts_pb.RejectTrustResponse;
};

type TrustsServiceGetTrust = {
  readonly methodName: string;
  readonly service: typeof TrustsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_trusts_pb.GetTrustRequest;
  readonly responseType: typeof api_v1alpha1_org_trusts_pb.GetTrustResponse;
};

type TrustsServiceListIncomingTrusts = {
  readonly methodName: string;
  readonly service: typeof TrustsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_trusts_pb.ListIncomingTrustsRequest;
  readonly responseType: typeof api_v1alpha1_org_trusts_pb.ListIncomingTrustsResponse;
};

type TrustsServiceListGivenTrusts = {
  readonly methodName: string;
  readonly service: typeof TrustsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_trusts_pb.ListGivenTrustsRequest;
  readonly responseType: typeof api_v1alpha1_org_trusts_pb.ListGivenTrustsResponse;
};

type TrustsServiceListAssignableTrusts = {
  readonly methodName: string;
  readonly service: typeof TrustsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_trusts_pb.ListAssignableTrustsRequest;
  readonly responseType: typeof api_v1alpha1_org_trusts_pb.ListAssignableTrustsResponse;
};

type TrustsServiceDeleteTrust = {
  readonly methodName: string;
  readonly service: typeof TrustsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_trusts_pb.DeleteTrustRequest;
  readonly responseType: typeof api_v1alpha1_org_trusts_pb.DeleteTrustResponse;
};

type TrustsServiceAssignTrust = {
  readonly methodName: string;
  readonly service: typeof TrustsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_trusts_pb.AssignTrustRequest;
  readonly responseType: typeof api_v1alpha1_org_trusts_pb.AssignTrustResponse;
};

type TrustsServiceUnassignTrust = {
  readonly methodName: string;
  readonly service: typeof TrustsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_trusts_pb.UnassignTrustRequest;
  readonly responseType: typeof api_v1alpha1_org_trusts_pb.UnassignTrustResponse;
};

export class TrustsService {
  static readonly serviceName: string;
  static readonly CreateTrust: TrustsServiceCreateTrust;
  static readonly AcceptTrust: TrustsServiceAcceptTrust;
  static readonly RejectTrust: TrustsServiceRejectTrust;
  static readonly GetTrust: TrustsServiceGetTrust;
  static readonly ListIncomingTrusts: TrustsServiceListIncomingTrusts;
  static readonly ListGivenTrusts: TrustsServiceListGivenTrusts;
  static readonly ListAssignableTrusts: TrustsServiceListAssignableTrusts;
  static readonly DeleteTrust: TrustsServiceDeleteTrust;
  static readonly AssignTrust: TrustsServiceAssignTrust;
  static readonly UnassignTrust: TrustsServiceUnassignTrust;
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

export class TrustsServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createTrust(
    requestMessage: api_v1alpha1_org_trusts_pb.CreateTrustRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.CreateTrustResponse|null) => void
  ): UnaryResponse;
  createTrust(
    requestMessage: api_v1alpha1_org_trusts_pb.CreateTrustRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.CreateTrustResponse|null) => void
  ): UnaryResponse;
  acceptTrust(
    requestMessage: api_v1alpha1_org_trusts_pb.AcceptTrustRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.AcceptTrustResponse|null) => void
  ): UnaryResponse;
  acceptTrust(
    requestMessage: api_v1alpha1_org_trusts_pb.AcceptTrustRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.AcceptTrustResponse|null) => void
  ): UnaryResponse;
  rejectTrust(
    requestMessage: api_v1alpha1_org_trusts_pb.RejectTrustRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.RejectTrustResponse|null) => void
  ): UnaryResponse;
  rejectTrust(
    requestMessage: api_v1alpha1_org_trusts_pb.RejectTrustRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.RejectTrustResponse|null) => void
  ): UnaryResponse;
  getTrust(
    requestMessage: api_v1alpha1_org_trusts_pb.GetTrustRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.GetTrustResponse|null) => void
  ): UnaryResponse;
  getTrust(
    requestMessage: api_v1alpha1_org_trusts_pb.GetTrustRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.GetTrustResponse|null) => void
  ): UnaryResponse;
  listIncomingTrusts(
    requestMessage: api_v1alpha1_org_trusts_pb.ListIncomingTrustsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.ListIncomingTrustsResponse|null) => void
  ): UnaryResponse;
  listIncomingTrusts(
    requestMessage: api_v1alpha1_org_trusts_pb.ListIncomingTrustsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.ListIncomingTrustsResponse|null) => void
  ): UnaryResponse;
  listGivenTrusts(
    requestMessage: api_v1alpha1_org_trusts_pb.ListGivenTrustsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.ListGivenTrustsResponse|null) => void
  ): UnaryResponse;
  listGivenTrusts(
    requestMessage: api_v1alpha1_org_trusts_pb.ListGivenTrustsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.ListGivenTrustsResponse|null) => void
  ): UnaryResponse;
  listAssignableTrusts(
    requestMessage: api_v1alpha1_org_trusts_pb.ListAssignableTrustsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.ListAssignableTrustsResponse|null) => void
  ): UnaryResponse;
  listAssignableTrusts(
    requestMessage: api_v1alpha1_org_trusts_pb.ListAssignableTrustsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.ListAssignableTrustsResponse|null) => void
  ): UnaryResponse;
  deleteTrust(
    requestMessage: api_v1alpha1_org_trusts_pb.DeleteTrustRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.DeleteTrustResponse|null) => void
  ): UnaryResponse;
  deleteTrust(
    requestMessage: api_v1alpha1_org_trusts_pb.DeleteTrustRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.DeleteTrustResponse|null) => void
  ): UnaryResponse;
  assignTrust(
    requestMessage: api_v1alpha1_org_trusts_pb.AssignTrustRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.AssignTrustResponse|null) => void
  ): UnaryResponse;
  assignTrust(
    requestMessage: api_v1alpha1_org_trusts_pb.AssignTrustRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.AssignTrustResponse|null) => void
  ): UnaryResponse;
  unassignTrust(
    requestMessage: api_v1alpha1_org_trusts_pb.UnassignTrustRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.UnassignTrustResponse|null) => void
  ): UnaryResponse;
  unassignTrust(
    requestMessage: api_v1alpha1_org_trusts_pb.UnassignTrustRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.UnassignTrustResponse|null) => void
  ): UnaryResponse;
}

