// package: api.v1alpha1.org.exile_manager
// file: api/v1alpha1/org/exile_manager/service.proto

import * as api_v1alpha1_org_exile_manager_service_pb from "../../../../api/v1alpha1/org/exile_manager/service_pb";
import * as api_v1alpha1_org_exile_manager_certificate_info_pb from "../../../../api/v1alpha1/org/exile_manager/certificate_info_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ExileManagerServiceCreateCertificateInfo = {
  readonly methodName: string;
  readonly service: typeof ExileManagerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_exile_manager_certificate_info_pb.CreateCertificateInfoRequest;
  readonly responseType: typeof api_v1alpha1_org_exile_manager_certificate_info_pb.CreateCertificateInfoResponse;
};

type ExileManagerServiceDeleteCertificateInfo = {
  readonly methodName: string;
  readonly service: typeof ExileManagerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_exile_manager_certificate_info_pb.DeleteCertificateInfoRequest;
  readonly responseType: typeof api_v1alpha1_org_exile_manager_certificate_info_pb.DeleteCertificateInfoResponse;
};

type ExileManagerServiceRevokeCertificateInfo = {
  readonly methodName: string;
  readonly service: typeof ExileManagerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_exile_manager_certificate_info_pb.RevokeCertificateInfoRequest;
  readonly responseType: typeof api_v1alpha1_org_exile_manager_certificate_info_pb.RevokeCertificateInfoResponse;
};

type ExileManagerServiceListCertificateInfo = {
  readonly methodName: string;
  readonly service: typeof ExileManagerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_exile_manager_certificate_info_pb.ListCertificateInfoRequest;
  readonly responseType: typeof api_v1alpha1_org_exile_manager_certificate_info_pb.ListCertificateInfoResponse;
};

export class ExileManagerService {
  static readonly serviceName: string;
  static readonly CreateCertificateInfo: ExileManagerServiceCreateCertificateInfo;
  static readonly DeleteCertificateInfo: ExileManagerServiceDeleteCertificateInfo;
  static readonly RevokeCertificateInfo: ExileManagerServiceRevokeCertificateInfo;
  static readonly ListCertificateInfo: ExileManagerServiceListCertificateInfo;
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

export class ExileManagerServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createCertificateInfo(
    requestMessage: api_v1alpha1_org_exile_manager_certificate_info_pb.CreateCertificateInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_exile_manager_certificate_info_pb.CreateCertificateInfoResponse|null) => void
  ): UnaryResponse;
  createCertificateInfo(
    requestMessage: api_v1alpha1_org_exile_manager_certificate_info_pb.CreateCertificateInfoRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_exile_manager_certificate_info_pb.CreateCertificateInfoResponse|null) => void
  ): UnaryResponse;
  deleteCertificateInfo(
    requestMessage: api_v1alpha1_org_exile_manager_certificate_info_pb.DeleteCertificateInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_exile_manager_certificate_info_pb.DeleteCertificateInfoResponse|null) => void
  ): UnaryResponse;
  deleteCertificateInfo(
    requestMessage: api_v1alpha1_org_exile_manager_certificate_info_pb.DeleteCertificateInfoRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_exile_manager_certificate_info_pb.DeleteCertificateInfoResponse|null) => void
  ): UnaryResponse;
  revokeCertificateInfo(
    requestMessage: api_v1alpha1_org_exile_manager_certificate_info_pb.RevokeCertificateInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_exile_manager_certificate_info_pb.RevokeCertificateInfoResponse|null) => void
  ): UnaryResponse;
  revokeCertificateInfo(
    requestMessage: api_v1alpha1_org_exile_manager_certificate_info_pb.RevokeCertificateInfoRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_exile_manager_certificate_info_pb.RevokeCertificateInfoResponse|null) => void
  ): UnaryResponse;
  listCertificateInfo(
    requestMessage: api_v1alpha1_org_exile_manager_certificate_info_pb.ListCertificateInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_exile_manager_certificate_info_pb.ListCertificateInfoResponse|null) => void
  ): UnaryResponse;
  listCertificateInfo(
    requestMessage: api_v1alpha1_org_exile_manager_certificate_info_pb.ListCertificateInfoRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_exile_manager_certificate_info_pb.ListCertificateInfoResponse|null) => void
  ): UnaryResponse;
}

