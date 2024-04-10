// package: services.billing.v1alpha2
// file: services/billing/v1alpha2/service.proto

import * as services_billing_v1alpha2_service_pb from "../../../services/billing/v1alpha2/service_pb";
import * as services_billing_v1alpha2_invoices_pb from "../../../services/billing/v1alpha2/invoices_pb";
import * as services_billing_v1alpha2_rates_pb from "../../../services/billing/v1alpha2/rates_pb";
import {grpc} from "@improbable-eng/grpc-web";

type BillingServiceCreateDefaultRateDefinition = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha2_rates_pb.CreateDefaultRateDefinitionRequest;
  readonly responseType: typeof services_billing_v1alpha2_rates_pb.CreateDefaultRateDefinitionResponse;
};

type BillingServiceCreateRateDefinition = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha2_rates_pb.CreateRateDefinitionRequest;
  readonly responseType: typeof services_billing_v1alpha2_rates_pb.CreateRateDefinitionResponse;
};

type BillingServiceDeleteDefaultRateDefinition = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha2_rates_pb.DeleteDefaultRateDefinitionRequest;
  readonly responseType: typeof services_billing_v1alpha2_rates_pb.DeleteDefaultRateDefinitionResponse;
};

type BillingServiceDeleteRateDefinition = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha2_rates_pb.DeleteRateDefinitionRequest;
  readonly responseType: typeof services_billing_v1alpha2_rates_pb.DeleteRateDefinitionResponse;
};

type BillingServiceExportInvoice = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha2_invoices_pb.ExportInvoiceRequest;
  readonly responseType: typeof services_billing_v1alpha2_invoices_pb.ExportInvoiceResponse;
};

type BillingServiceGetRateDefinition = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha2_rates_pb.GetRateDefinitionRequest;
  readonly responseType: typeof services_billing_v1alpha2_rates_pb.GetRateDefinitionResponse;
};

type BillingServiceGetRateHistory = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha2_rates_pb.GetRateHistoryRequest;
  readonly responseType: typeof services_billing_v1alpha2_rates_pb.GetRateHistoryResponse;
};

type BillingServiceListRateDefinitions = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha2_rates_pb.ListRateDefinitionsRequest;
  readonly responseType: typeof services_billing_v1alpha2_rates_pb.ListRateDefinitionsResponse;
};

type BillingServiceUpdateDefaultRateDefinition = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha2_rates_pb.UpdateDefaultRateDefinitionRequest;
  readonly responseType: typeof services_billing_v1alpha2_rates_pb.UpdateDefaultRateDefinitionResponse;
};

type BillingServiceUpdateRateDefinition = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha2_rates_pb.UpdateRateDefinitionRequest;
  readonly responseType: typeof services_billing_v1alpha2_rates_pb.UpdateRateDefinitionResponse;
};

export class BillingService {
  static readonly serviceName: string;
  static readonly CreateDefaultRateDefinition: BillingServiceCreateDefaultRateDefinition;
  static readonly CreateRateDefinition: BillingServiceCreateRateDefinition;
  static readonly DeleteDefaultRateDefinition: BillingServiceDeleteDefaultRateDefinition;
  static readonly DeleteRateDefinition: BillingServiceDeleteRateDefinition;
  static readonly ExportInvoice: BillingServiceExportInvoice;
  static readonly GetRateDefinition: BillingServiceGetRateDefinition;
  static readonly GetRateHistory: BillingServiceGetRateHistory;
  static readonly ListRateDefinitions: BillingServiceListRateDefinitions;
  static readonly UpdateDefaultRateDefinition: BillingServiceUpdateDefaultRateDefinition;
  static readonly UpdateRateDefinition: BillingServiceUpdateRateDefinition;
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

export class BillingServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createDefaultRateDefinition(
    requestMessage: services_billing_v1alpha2_rates_pb.CreateDefaultRateDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha2_rates_pb.CreateDefaultRateDefinitionResponse|null) => void
  ): UnaryResponse;
  createDefaultRateDefinition(
    requestMessage: services_billing_v1alpha2_rates_pb.CreateDefaultRateDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha2_rates_pb.CreateDefaultRateDefinitionResponse|null) => void
  ): UnaryResponse;
  createRateDefinition(
    requestMessage: services_billing_v1alpha2_rates_pb.CreateRateDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha2_rates_pb.CreateRateDefinitionResponse|null) => void
  ): UnaryResponse;
  createRateDefinition(
    requestMessage: services_billing_v1alpha2_rates_pb.CreateRateDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha2_rates_pb.CreateRateDefinitionResponse|null) => void
  ): UnaryResponse;
  deleteDefaultRateDefinition(
    requestMessage: services_billing_v1alpha2_rates_pb.DeleteDefaultRateDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha2_rates_pb.DeleteDefaultRateDefinitionResponse|null) => void
  ): UnaryResponse;
  deleteDefaultRateDefinition(
    requestMessage: services_billing_v1alpha2_rates_pb.DeleteDefaultRateDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha2_rates_pb.DeleteDefaultRateDefinitionResponse|null) => void
  ): UnaryResponse;
  deleteRateDefinition(
    requestMessage: services_billing_v1alpha2_rates_pb.DeleteRateDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha2_rates_pb.DeleteRateDefinitionResponse|null) => void
  ): UnaryResponse;
  deleteRateDefinition(
    requestMessage: services_billing_v1alpha2_rates_pb.DeleteRateDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha2_rates_pb.DeleteRateDefinitionResponse|null) => void
  ): UnaryResponse;
  exportInvoice(
    requestMessage: services_billing_v1alpha2_invoices_pb.ExportInvoiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha2_invoices_pb.ExportInvoiceResponse|null) => void
  ): UnaryResponse;
  exportInvoice(
    requestMessage: services_billing_v1alpha2_invoices_pb.ExportInvoiceRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha2_invoices_pb.ExportInvoiceResponse|null) => void
  ): UnaryResponse;
  getRateDefinition(
    requestMessage: services_billing_v1alpha2_rates_pb.GetRateDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha2_rates_pb.GetRateDefinitionResponse|null) => void
  ): UnaryResponse;
  getRateDefinition(
    requestMessage: services_billing_v1alpha2_rates_pb.GetRateDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha2_rates_pb.GetRateDefinitionResponse|null) => void
  ): UnaryResponse;
  getRateHistory(
    requestMessage: services_billing_v1alpha2_rates_pb.GetRateHistoryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha2_rates_pb.GetRateHistoryResponse|null) => void
  ): UnaryResponse;
  getRateHistory(
    requestMessage: services_billing_v1alpha2_rates_pb.GetRateHistoryRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha2_rates_pb.GetRateHistoryResponse|null) => void
  ): UnaryResponse;
  listRateDefinitions(
    requestMessage: services_billing_v1alpha2_rates_pb.ListRateDefinitionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha2_rates_pb.ListRateDefinitionsResponse|null) => void
  ): UnaryResponse;
  listRateDefinitions(
    requestMessage: services_billing_v1alpha2_rates_pb.ListRateDefinitionsRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha2_rates_pb.ListRateDefinitionsResponse|null) => void
  ): UnaryResponse;
  updateDefaultRateDefinition(
    requestMessage: services_billing_v1alpha2_rates_pb.UpdateDefaultRateDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha2_rates_pb.UpdateDefaultRateDefinitionResponse|null) => void
  ): UnaryResponse;
  updateDefaultRateDefinition(
    requestMessage: services_billing_v1alpha2_rates_pb.UpdateDefaultRateDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha2_rates_pb.UpdateDefaultRateDefinitionResponse|null) => void
  ): UnaryResponse;
  updateRateDefinition(
    requestMessage: services_billing_v1alpha2_rates_pb.UpdateRateDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha2_rates_pb.UpdateRateDefinitionResponse|null) => void
  ): UnaryResponse;
  updateRateDefinition(
    requestMessage: services_billing_v1alpha2_rates_pb.UpdateRateDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha2_rates_pb.UpdateRateDefinitionResponse|null) => void
  ): UnaryResponse;
}

