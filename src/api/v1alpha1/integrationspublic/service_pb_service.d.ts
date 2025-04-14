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

type IntegrationsPublicProcessWorkflow = {
  readonly methodName: string;
  readonly service: typeof IntegrationsPublic;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrationspublic_service_pb.ProcessWorkflowReq;
  readonly responseType: typeof api_v1alpha1_integrationspublic_service_pb.ProcessWorkflowRes;
};

type IntegrationsPublicGetLinkDetails = {
  readonly methodName: string;
  readonly service: typeof IntegrationsPublic;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrationspublic_service_pb.GetLinkDetailsReq;
  readonly responseType: typeof api_v1alpha1_integrationspublic_service_pb.GetLinkDetailsRes;
};

type IntegrationsPublicCalculateFees = {
  readonly methodName: string;
  readonly service: typeof IntegrationsPublic;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrationspublic_service_pb.CalculateFeesReq;
  readonly responseType: typeof api_v1alpha1_integrationspublic_service_pb.CalculateFeesRes;
};

type IntegrationsPublicGetOrgIntegrationSettings = {
  readonly methodName: string;
  readonly service: typeof IntegrationsPublic;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrationspublic_service_pb.GetOrgIntegrationSettingsReq;
  readonly responseType: typeof api_v1alpha1_integrationspublic_service_pb.GetOrgIntegrationSettingsRes;
};

type IntegrationsPublicUpsertOrgIntegrationSettings = {
  readonly methodName: string;
  readonly service: typeof IntegrationsPublic;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrationspublic_service_pb.UpsertOrgIntegrationSettingsReq;
  readonly responseType: typeof api_v1alpha1_integrationspublic_service_pb.UpsertOrgIntegrationSettingsRes;
};

export class IntegrationsPublic {
  static readonly serviceName: string;
  static readonly GetLinkData: IntegrationsPublicGetLinkData;
  static readonly SubmitVerification: IntegrationsPublicSubmitVerification;
  static readonly SessionKeepAlive: IntegrationsPublicSessionKeepAlive;
  static readonly GetInvoice: IntegrationsPublicGetInvoice;
  static readonly SubmitPayment: IntegrationsPublicSubmitPayment;
  static readonly GetReceipt: IntegrationsPublicGetReceipt;
  static readonly ProcessWorkflow: IntegrationsPublicProcessWorkflow;
  static readonly GetLinkDetails: IntegrationsPublicGetLinkDetails;
  static readonly CalculateFees: IntegrationsPublicCalculateFees;
  static readonly GetOrgIntegrationSettings: IntegrationsPublicGetOrgIntegrationSettings;
  static readonly UpsertOrgIntegrationSettings: IntegrationsPublicUpsertOrgIntegrationSettings;
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
  processWorkflow(
    requestMessage: api_v1alpha1_integrationspublic_service_pb.ProcessWorkflowReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrationspublic_service_pb.ProcessWorkflowRes|null) => void
  ): UnaryResponse;
  processWorkflow(
    requestMessage: api_v1alpha1_integrationspublic_service_pb.ProcessWorkflowReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrationspublic_service_pb.ProcessWorkflowRes|null) => void
  ): UnaryResponse;
  getLinkDetails(
    requestMessage: api_v1alpha1_integrationspublic_service_pb.GetLinkDetailsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrationspublic_service_pb.GetLinkDetailsRes|null) => void
  ): UnaryResponse;
  getLinkDetails(
    requestMessage: api_v1alpha1_integrationspublic_service_pb.GetLinkDetailsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrationspublic_service_pb.GetLinkDetailsRes|null) => void
  ): UnaryResponse;
  calculateFees(
    requestMessage: api_v1alpha1_integrationspublic_service_pb.CalculateFeesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrationspublic_service_pb.CalculateFeesRes|null) => void
  ): UnaryResponse;
  calculateFees(
    requestMessage: api_v1alpha1_integrationspublic_service_pb.CalculateFeesReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrationspublic_service_pb.CalculateFeesRes|null) => void
  ): UnaryResponse;
  getOrgIntegrationSettings(
    requestMessage: api_v1alpha1_integrationspublic_service_pb.GetOrgIntegrationSettingsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrationspublic_service_pb.GetOrgIntegrationSettingsRes|null) => void
  ): UnaryResponse;
  getOrgIntegrationSettings(
    requestMessage: api_v1alpha1_integrationspublic_service_pb.GetOrgIntegrationSettingsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrationspublic_service_pb.GetOrgIntegrationSettingsRes|null) => void
  ): UnaryResponse;
  upsertOrgIntegrationSettings(
    requestMessage: api_v1alpha1_integrationspublic_service_pb.UpsertOrgIntegrationSettingsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrationspublic_service_pb.UpsertOrgIntegrationSettingsRes|null) => void
  ): UnaryResponse;
  upsertOrgIntegrationSettings(
    requestMessage: api_v1alpha1_integrationspublic_service_pb.UpsertOrgIntegrationSettingsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrationspublic_service_pb.UpsertOrgIntegrationSettingsRes|null) => void
  ): UnaryResponse;
}

