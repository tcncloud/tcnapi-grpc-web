// package: api.v1alpha1.integrationspublic
// file: api/v1alpha1/integrationspublic/service.proto

import * as api_v1alpha1_integrationspublic_service_pb from "../../../api/v1alpha1/integrationspublic/service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type IntegrationsPublicGetLinkData = {
  readonly methodName: string;
  readonly service: typeof IntegrationsPublic;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrationspublic_service_pb.GetLinkDataReq;
  readonly responseType: typeof api_v1alpha1_integrationspublic_service_pb.GetLinkDataRes;
};

type IntegrationsPublicSubmitVerification = {
  readonly methodName: string;
  readonly service: typeof IntegrationsPublic;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrationspublic_service_pb.SubmitVerificationReq;
  readonly responseType: typeof api_v1alpha1_integrationspublic_service_pb.SubmitVerificationRes;
};

type IntegrationsPublicSessionKeepAlive = {
  readonly methodName: string;
  readonly service: typeof IntegrationsPublic;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrationspublic_service_pb.SessionKeepAliveReq;
  readonly responseType: typeof api_v1alpha1_integrationspublic_service_pb.SessionKeepAliveRes;
};

type IntegrationsPublicGetInvoice = {
  readonly methodName: string;
  readonly service: typeof IntegrationsPublic;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrationspublic_service_pb.GetInvoiceReq;
  readonly responseType: typeof api_v1alpha1_integrationspublic_service_pb.GetInvoiceRes;
};

type IntegrationsPublicSubmitPayment = {
  readonly methodName: string;
  readonly service: typeof IntegrationsPublic;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrationspublic_service_pb.SubmitPaymentReq;
  readonly responseType: typeof api_v1alpha1_integrationspublic_service_pb.SubmitPaymentRes;
};

type IntegrationsPublicGetReceipt = {
  readonly methodName: string;
  readonly service: typeof IntegrationsPublic;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrationspublic_service_pb.GetReceiptReq;
  readonly responseType: typeof api_v1alpha1_integrationspublic_service_pb.GetReceiptRes;
};

export class IntegrationsPublic {
  static readonly serviceName: string;
  static readonly GetLinkData: IntegrationsPublicGetLinkData;
  static readonly SubmitVerification: IntegrationsPublicSubmitVerification;
  static readonly SessionKeepAlive: IntegrationsPublicSessionKeepAlive;
  static readonly GetInvoice: IntegrationsPublicGetInvoice;
  static readonly SubmitPayment: IntegrationsPublicSubmitPayment;
  static readonly GetReceipt: IntegrationsPublicGetReceipt;
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

export class IntegrationsPublicClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getLinkData(
    requestMessage: api_v1alpha1_integrationspublic_service_pb.GetLinkDataReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrationspublic_service_pb.GetLinkDataRes|null) => void
  ): UnaryResponse;
  getLinkData(
    requestMessage: api_v1alpha1_integrationspublic_service_pb.GetLinkDataReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrationspublic_service_pb.GetLinkDataRes|null) => void
  ): UnaryResponse;
  submitVerification(
    requestMessage: api_v1alpha1_integrationspublic_service_pb.SubmitVerificationReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrationspublic_service_pb.SubmitVerificationRes|null) => void
  ): UnaryResponse;
  submitVerification(
    requestMessage: api_v1alpha1_integrationspublic_service_pb.SubmitVerificationReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrationspublic_service_pb.SubmitVerificationRes|null) => void
  ): UnaryResponse;
  sessionKeepAlive(
    requestMessage: api_v1alpha1_integrationspublic_service_pb.SessionKeepAliveReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrationspublic_service_pb.SessionKeepAliveRes|null) => void
  ): UnaryResponse;
  sessionKeepAlive(
    requestMessage: api_v1alpha1_integrationspublic_service_pb.SessionKeepAliveReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrationspublic_service_pb.SessionKeepAliveRes|null) => void
  ): UnaryResponse;
  getInvoice(
    requestMessage: api_v1alpha1_integrationspublic_service_pb.GetInvoiceReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrationspublic_service_pb.GetInvoiceRes|null) => void
  ): UnaryResponse;
  getInvoice(
    requestMessage: api_v1alpha1_integrationspublic_service_pb.GetInvoiceReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrationspublic_service_pb.GetInvoiceRes|null) => void
  ): UnaryResponse;
  submitPayment(
    requestMessage: api_v1alpha1_integrationspublic_service_pb.SubmitPaymentReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrationspublic_service_pb.SubmitPaymentRes|null) => void
  ): UnaryResponse;
  submitPayment(
    requestMessage: api_v1alpha1_integrationspublic_service_pb.SubmitPaymentReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrationspublic_service_pb.SubmitPaymentRes|null) => void
  ): UnaryResponse;
  getReceipt(
    requestMessage: api_v1alpha1_integrationspublic_service_pb.GetReceiptReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrationspublic_service_pb.GetReceiptRes|null) => void
  ): UnaryResponse;
  getReceipt(
    requestMessage: api_v1alpha1_integrationspublic_service_pb.GetReceiptReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrationspublic_service_pb.GetReceiptRes|null) => void
  ): UnaryResponse;
}

