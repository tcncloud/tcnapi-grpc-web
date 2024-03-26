// package: services.billing.v1alpha1
// file: services/billing/v1alpha1/service.proto

import * as services_billing_v1alpha1_service_pb from "../../../services/billing/v1alpha1/service_pb";
import * as services_billing_v1alpha1_invoices_pb from "../../../services/billing/v1alpha1/invoices_pb";
import * as services_billing_v1alpha1_plans_pb from "../../../services/billing/v1alpha1/plans_pb";
import * as services_billing_v1alpha1_rates_pb from "../../../services/billing/v1alpha1/rates_pb";
import {grpc} from "@improbable-eng/grpc-web";

type BillingServiceCommitBillingPlan = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_plans_pb.CommitBillingPlanRequest;
  readonly responseType: typeof services_billing_v1alpha1_plans_pb.CommitBillingPlanResponse;
};

type BillingServiceCommitDefaultBillingPlan = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_plans_pb.CommitDefaultBillingPlanRequest;
  readonly responseType: typeof services_billing_v1alpha1_plans_pb.CommitDefaultBillingPlanResponse;
};

type BillingServiceCreateBillingPlan = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_plans_pb.CreateBillingPlanRequest;
  readonly responseType: typeof services_billing_v1alpha1_plans_pb.CreateBillingPlanResponse;
};

type BillingServiceCreateDefaultBillingPlan = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_plans_pb.CreateDefaultBillingPlanRequest;
  readonly responseType: typeof services_billing_v1alpha1_plans_pb.CreateDefaultBillingPlanResponse;
};

type BillingServiceCreateDefaultRateDefinition = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_rates_pb.CreateDefaultRateDefinitionRequest;
  readonly responseType: typeof services_billing_v1alpha1_rates_pb.CreateDefaultRateDefinitionResponse;
};

type BillingServiceCreateInvoice = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_invoices_pb.CreateInvoiceRequest;
  readonly responseType: typeof services_billing_v1alpha1_invoices_pb.CreateInvoiceResponse;
};

type BillingServiceCreateRateDefinition = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_rates_pb.CreateRateDefinitionRequest;
  readonly responseType: typeof services_billing_v1alpha1_rates_pb.CreateRateDefinitionResponse;
};

type BillingServiceDeleteBillingPlan = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_plans_pb.DeleteBillingPlanRequest;
  readonly responseType: typeof services_billing_v1alpha1_plans_pb.DeleteBillingPlanResponse;
};

type BillingServiceDeleteDefaultBillingPlan = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_plans_pb.DeleteDefaultBillingPlanRequest;
  readonly responseType: typeof services_billing_v1alpha1_plans_pb.DeleteDefaultBillingPlanResponse;
};

type BillingServiceDeleteDefaultRateDefinition = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_rates_pb.DeleteDefaultRateDefinitionRequest;
  readonly responseType: typeof services_billing_v1alpha1_rates_pb.DeleteDefaultRateDefinitionResponse;
};

type BillingServiceDeleteInvoice = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_invoices_pb.DeleteInvoiceRequest;
  readonly responseType: typeof services_billing_v1alpha1_invoices_pb.DeleteInvoiceResponse;
};

type BillingServiceDeleteRateDefinition = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_rates_pb.DeleteRateDefinitionRequest;
  readonly responseType: typeof services_billing_v1alpha1_rates_pb.DeleteRateDefinitionResponse;
};

type BillingServiceDuplicateBillingPlan = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_plans_pb.DuplicateBillingPlanRequest;
  readonly responseType: typeof services_billing_v1alpha1_plans_pb.DuplicateBillingPlanResponse;
};

type BillingServiceDuplicateDefaultBillingPlan = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_plans_pb.DuplicateDefaultBillingPlanRequest;
  readonly responseType: typeof services_billing_v1alpha1_plans_pb.DuplicateDefaultBillingPlanResponse;
};

type BillingServiceExportInvoice = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_invoices_pb.ExportInvoiceRequest;
  readonly responseType: typeof services_billing_v1alpha1_invoices_pb.ExportInvoiceResponse;
};

type BillingServiceGetActiveBillingPlan = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_plans_pb.GetActiveBillingPlanRequest;
  readonly responseType: typeof services_billing_v1alpha1_plans_pb.GetActiveBillingPlanResponse;
};

type BillingServiceGetBillingPlan = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_plans_pb.GetBillingPlanRequest;
  readonly responseType: typeof services_billing_v1alpha1_plans_pb.GetBillingPlanResponse;
};

type BillingServiceGetBillingPlanHistory = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_plans_pb.GetBillingPlanHistoryRequest;
  readonly responseType: typeof services_billing_v1alpha1_plans_pb.GetBillingPlanHistoryResponse;
};

type BillingServiceGetInvoice = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_invoices_pb.GetInvoiceRequest;
  readonly responseType: typeof services_billing_v1alpha1_invoices_pb.GetInvoiceResponse;
};

type BillingServiceGetRateDefinition = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_rates_pb.GetRateDefinitionRequest;
  readonly responseType: typeof services_billing_v1alpha1_rates_pb.GetRateDefinitionResponse;
};

type BillingServiceListBillingPlans = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_plans_pb.ListBillingPlansRequest;
  readonly responseType: typeof services_billing_v1alpha1_plans_pb.ListBillingPlansResponse;
};

type BillingServiceListInvoices = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_invoices_pb.ListInvoicesRequest;
  readonly responseType: typeof services_billing_v1alpha1_invoices_pb.ListInvoicesResponse;
};

type BillingServiceListRateDefinitions = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_rates_pb.ListRateDefinitionsRequest;
  readonly responseType: typeof services_billing_v1alpha1_rates_pb.ListRateDefinitionsResponse;
};

type BillingServiceUpdateBillingPlan = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_plans_pb.UpdateBillingPlanRequest;
  readonly responseType: typeof services_billing_v1alpha1_plans_pb.UpdateBillingPlanResponse;
};

type BillingServiceUpdateDefaultBillingPlan = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_plans_pb.UpdateDefaultBillingPlanRequest;
  readonly responseType: typeof services_billing_v1alpha1_plans_pb.UpdateDefaultBillingPlanResponse;
};

type BillingServiceUpdateDefaultRateDefinition = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_rates_pb.UpdateDefaultRateDefinitionRequest;
  readonly responseType: typeof services_billing_v1alpha1_rates_pb.UpdateDefaultRateDefinitionResponse;
};

type BillingServiceUpdateInvoice = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_invoices_pb.UpdateInvoiceRequest;
  readonly responseType: typeof services_billing_v1alpha1_invoices_pb.UpdateInvoiceResponse;
};

type BillingServiceUpdateRateDefinition = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_rates_pb.UpdateRateDefinitionRequest;
  readonly responseType: typeof services_billing_v1alpha1_rates_pb.UpdateRateDefinitionResponse;
};

export class BillingService {
  static readonly serviceName: string;
  static readonly CommitBillingPlan: BillingServiceCommitBillingPlan;
  static readonly CommitDefaultBillingPlan: BillingServiceCommitDefaultBillingPlan;
  static readonly CreateBillingPlan: BillingServiceCreateBillingPlan;
  static readonly CreateDefaultBillingPlan: BillingServiceCreateDefaultBillingPlan;
  static readonly CreateDefaultRateDefinition: BillingServiceCreateDefaultRateDefinition;
  static readonly CreateInvoice: BillingServiceCreateInvoice;
  static readonly CreateRateDefinition: BillingServiceCreateRateDefinition;
  static readonly DeleteBillingPlan: BillingServiceDeleteBillingPlan;
  static readonly DeleteDefaultBillingPlan: BillingServiceDeleteDefaultBillingPlan;
  static readonly DeleteDefaultRateDefinition: BillingServiceDeleteDefaultRateDefinition;
  static readonly DeleteInvoice: BillingServiceDeleteInvoice;
  static readonly DeleteRateDefinition: BillingServiceDeleteRateDefinition;
  static readonly DuplicateBillingPlan: BillingServiceDuplicateBillingPlan;
  static readonly DuplicateDefaultBillingPlan: BillingServiceDuplicateDefaultBillingPlan;
  static readonly ExportInvoice: BillingServiceExportInvoice;
  static readonly GetActiveBillingPlan: BillingServiceGetActiveBillingPlan;
  static readonly GetBillingPlan: BillingServiceGetBillingPlan;
  static readonly GetBillingPlanHistory: BillingServiceGetBillingPlanHistory;
  static readonly GetInvoice: BillingServiceGetInvoice;
  static readonly GetRateDefinition: BillingServiceGetRateDefinition;
  static readonly ListBillingPlans: BillingServiceListBillingPlans;
  static readonly ListInvoices: BillingServiceListInvoices;
  static readonly ListRateDefinitions: BillingServiceListRateDefinitions;
  static readonly UpdateBillingPlan: BillingServiceUpdateBillingPlan;
  static readonly UpdateDefaultBillingPlan: BillingServiceUpdateDefaultBillingPlan;
  static readonly UpdateDefaultRateDefinition: BillingServiceUpdateDefaultRateDefinition;
  static readonly UpdateInvoice: BillingServiceUpdateInvoice;
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
  commitBillingPlan(
    requestMessage: services_billing_v1alpha1_plans_pb.CommitBillingPlanRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_plans_pb.CommitBillingPlanResponse|null) => void
  ): UnaryResponse;
  commitBillingPlan(
    requestMessage: services_billing_v1alpha1_plans_pb.CommitBillingPlanRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_plans_pb.CommitBillingPlanResponse|null) => void
  ): UnaryResponse;
  commitDefaultBillingPlan(
    requestMessage: services_billing_v1alpha1_plans_pb.CommitDefaultBillingPlanRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_plans_pb.CommitDefaultBillingPlanResponse|null) => void
  ): UnaryResponse;
  commitDefaultBillingPlan(
    requestMessage: services_billing_v1alpha1_plans_pb.CommitDefaultBillingPlanRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_plans_pb.CommitDefaultBillingPlanResponse|null) => void
  ): UnaryResponse;
  createBillingPlan(
    requestMessage: services_billing_v1alpha1_plans_pb.CreateBillingPlanRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_plans_pb.CreateBillingPlanResponse|null) => void
  ): UnaryResponse;
  createBillingPlan(
    requestMessage: services_billing_v1alpha1_plans_pb.CreateBillingPlanRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_plans_pb.CreateBillingPlanResponse|null) => void
  ): UnaryResponse;
  createDefaultBillingPlan(
    requestMessage: services_billing_v1alpha1_plans_pb.CreateDefaultBillingPlanRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_plans_pb.CreateDefaultBillingPlanResponse|null) => void
  ): UnaryResponse;
  createDefaultBillingPlan(
    requestMessage: services_billing_v1alpha1_plans_pb.CreateDefaultBillingPlanRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_plans_pb.CreateDefaultBillingPlanResponse|null) => void
  ): UnaryResponse;
  createDefaultRateDefinition(
    requestMessage: services_billing_v1alpha1_rates_pb.CreateDefaultRateDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_rates_pb.CreateDefaultRateDefinitionResponse|null) => void
  ): UnaryResponse;
  createDefaultRateDefinition(
    requestMessage: services_billing_v1alpha1_rates_pb.CreateDefaultRateDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_rates_pb.CreateDefaultRateDefinitionResponse|null) => void
  ): UnaryResponse;
  createInvoice(
    requestMessage: services_billing_v1alpha1_invoices_pb.CreateInvoiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_invoices_pb.CreateInvoiceResponse|null) => void
  ): UnaryResponse;
  createInvoice(
    requestMessage: services_billing_v1alpha1_invoices_pb.CreateInvoiceRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_invoices_pb.CreateInvoiceResponse|null) => void
  ): UnaryResponse;
  createRateDefinition(
    requestMessage: services_billing_v1alpha1_rates_pb.CreateRateDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_rates_pb.CreateRateDefinitionResponse|null) => void
  ): UnaryResponse;
  createRateDefinition(
    requestMessage: services_billing_v1alpha1_rates_pb.CreateRateDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_rates_pb.CreateRateDefinitionResponse|null) => void
  ): UnaryResponse;
  deleteBillingPlan(
    requestMessage: services_billing_v1alpha1_plans_pb.DeleteBillingPlanRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_plans_pb.DeleteBillingPlanResponse|null) => void
  ): UnaryResponse;
  deleteBillingPlan(
    requestMessage: services_billing_v1alpha1_plans_pb.DeleteBillingPlanRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_plans_pb.DeleteBillingPlanResponse|null) => void
  ): UnaryResponse;
  deleteDefaultBillingPlan(
    requestMessage: services_billing_v1alpha1_plans_pb.DeleteDefaultBillingPlanRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_plans_pb.DeleteDefaultBillingPlanResponse|null) => void
  ): UnaryResponse;
  deleteDefaultBillingPlan(
    requestMessage: services_billing_v1alpha1_plans_pb.DeleteDefaultBillingPlanRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_plans_pb.DeleteDefaultBillingPlanResponse|null) => void
  ): UnaryResponse;
  deleteDefaultRateDefinition(
    requestMessage: services_billing_v1alpha1_rates_pb.DeleteDefaultRateDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_rates_pb.DeleteDefaultRateDefinitionResponse|null) => void
  ): UnaryResponse;
  deleteDefaultRateDefinition(
    requestMessage: services_billing_v1alpha1_rates_pb.DeleteDefaultRateDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_rates_pb.DeleteDefaultRateDefinitionResponse|null) => void
  ): UnaryResponse;
  deleteInvoice(
    requestMessage: services_billing_v1alpha1_invoices_pb.DeleteInvoiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_invoices_pb.DeleteInvoiceResponse|null) => void
  ): UnaryResponse;
  deleteInvoice(
    requestMessage: services_billing_v1alpha1_invoices_pb.DeleteInvoiceRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_invoices_pb.DeleteInvoiceResponse|null) => void
  ): UnaryResponse;
  deleteRateDefinition(
    requestMessage: services_billing_v1alpha1_rates_pb.DeleteRateDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_rates_pb.DeleteRateDefinitionResponse|null) => void
  ): UnaryResponse;
  deleteRateDefinition(
    requestMessage: services_billing_v1alpha1_rates_pb.DeleteRateDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_rates_pb.DeleteRateDefinitionResponse|null) => void
  ): UnaryResponse;
  duplicateBillingPlan(
    requestMessage: services_billing_v1alpha1_plans_pb.DuplicateBillingPlanRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_plans_pb.DuplicateBillingPlanResponse|null) => void
  ): UnaryResponse;
  duplicateBillingPlan(
    requestMessage: services_billing_v1alpha1_plans_pb.DuplicateBillingPlanRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_plans_pb.DuplicateBillingPlanResponse|null) => void
  ): UnaryResponse;
  duplicateDefaultBillingPlan(
    requestMessage: services_billing_v1alpha1_plans_pb.DuplicateDefaultBillingPlanRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_plans_pb.DuplicateDefaultBillingPlanResponse|null) => void
  ): UnaryResponse;
  duplicateDefaultBillingPlan(
    requestMessage: services_billing_v1alpha1_plans_pb.DuplicateDefaultBillingPlanRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_plans_pb.DuplicateDefaultBillingPlanResponse|null) => void
  ): UnaryResponse;
  exportInvoice(
    requestMessage: services_billing_v1alpha1_invoices_pb.ExportInvoiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_invoices_pb.ExportInvoiceResponse|null) => void
  ): UnaryResponse;
  exportInvoice(
    requestMessage: services_billing_v1alpha1_invoices_pb.ExportInvoiceRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_invoices_pb.ExportInvoiceResponse|null) => void
  ): UnaryResponse;
  getActiveBillingPlan(
    requestMessage: services_billing_v1alpha1_plans_pb.GetActiveBillingPlanRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_plans_pb.GetActiveBillingPlanResponse|null) => void
  ): UnaryResponse;
  getActiveBillingPlan(
    requestMessage: services_billing_v1alpha1_plans_pb.GetActiveBillingPlanRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_plans_pb.GetActiveBillingPlanResponse|null) => void
  ): UnaryResponse;
  getBillingPlan(
    requestMessage: services_billing_v1alpha1_plans_pb.GetBillingPlanRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_plans_pb.GetBillingPlanResponse|null) => void
  ): UnaryResponse;
  getBillingPlan(
    requestMessage: services_billing_v1alpha1_plans_pb.GetBillingPlanRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_plans_pb.GetBillingPlanResponse|null) => void
  ): UnaryResponse;
  getBillingPlanHistory(
    requestMessage: services_billing_v1alpha1_plans_pb.GetBillingPlanHistoryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_plans_pb.GetBillingPlanHistoryResponse|null) => void
  ): UnaryResponse;
  getBillingPlanHistory(
    requestMessage: services_billing_v1alpha1_plans_pb.GetBillingPlanHistoryRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_plans_pb.GetBillingPlanHistoryResponse|null) => void
  ): UnaryResponse;
  getInvoice(
    requestMessage: services_billing_v1alpha1_invoices_pb.GetInvoiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_invoices_pb.GetInvoiceResponse|null) => void
  ): UnaryResponse;
  getInvoice(
    requestMessage: services_billing_v1alpha1_invoices_pb.GetInvoiceRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_invoices_pb.GetInvoiceResponse|null) => void
  ): UnaryResponse;
  getRateDefinition(
    requestMessage: services_billing_v1alpha1_rates_pb.GetRateDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_rates_pb.GetRateDefinitionResponse|null) => void
  ): UnaryResponse;
  getRateDefinition(
    requestMessage: services_billing_v1alpha1_rates_pb.GetRateDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_rates_pb.GetRateDefinitionResponse|null) => void
  ): UnaryResponse;
  listBillingPlans(
    requestMessage: services_billing_v1alpha1_plans_pb.ListBillingPlansRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_plans_pb.ListBillingPlansResponse|null) => void
  ): UnaryResponse;
  listBillingPlans(
    requestMessage: services_billing_v1alpha1_plans_pb.ListBillingPlansRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_plans_pb.ListBillingPlansResponse|null) => void
  ): UnaryResponse;
  listInvoices(
    requestMessage: services_billing_v1alpha1_invoices_pb.ListInvoicesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_invoices_pb.ListInvoicesResponse|null) => void
  ): UnaryResponse;
  listInvoices(
    requestMessage: services_billing_v1alpha1_invoices_pb.ListInvoicesRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_invoices_pb.ListInvoicesResponse|null) => void
  ): UnaryResponse;
  listRateDefinitions(
    requestMessage: services_billing_v1alpha1_rates_pb.ListRateDefinitionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_rates_pb.ListRateDefinitionsResponse|null) => void
  ): UnaryResponse;
  listRateDefinitions(
    requestMessage: services_billing_v1alpha1_rates_pb.ListRateDefinitionsRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_rates_pb.ListRateDefinitionsResponse|null) => void
  ): UnaryResponse;
  updateBillingPlan(
    requestMessage: services_billing_v1alpha1_plans_pb.UpdateBillingPlanRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_plans_pb.UpdateBillingPlanResponse|null) => void
  ): UnaryResponse;
  updateBillingPlan(
    requestMessage: services_billing_v1alpha1_plans_pb.UpdateBillingPlanRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_plans_pb.UpdateBillingPlanResponse|null) => void
  ): UnaryResponse;
  updateDefaultBillingPlan(
    requestMessage: services_billing_v1alpha1_plans_pb.UpdateDefaultBillingPlanRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_plans_pb.UpdateDefaultBillingPlanResponse|null) => void
  ): UnaryResponse;
  updateDefaultBillingPlan(
    requestMessage: services_billing_v1alpha1_plans_pb.UpdateDefaultBillingPlanRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_plans_pb.UpdateDefaultBillingPlanResponse|null) => void
  ): UnaryResponse;
  updateDefaultRateDefinition(
    requestMessage: services_billing_v1alpha1_rates_pb.UpdateDefaultRateDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_rates_pb.UpdateDefaultRateDefinitionResponse|null) => void
  ): UnaryResponse;
  updateDefaultRateDefinition(
    requestMessage: services_billing_v1alpha1_rates_pb.UpdateDefaultRateDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_rates_pb.UpdateDefaultRateDefinitionResponse|null) => void
  ): UnaryResponse;
  updateInvoice(
    requestMessage: services_billing_v1alpha1_invoices_pb.UpdateInvoiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_invoices_pb.UpdateInvoiceResponse|null) => void
  ): UnaryResponse;
  updateInvoice(
    requestMessage: services_billing_v1alpha1_invoices_pb.UpdateInvoiceRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_invoices_pb.UpdateInvoiceResponse|null) => void
  ): UnaryResponse;
  updateRateDefinition(
    requestMessage: services_billing_v1alpha1_rates_pb.UpdateRateDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_rates_pb.UpdateRateDefinitionResponse|null) => void
  ): UnaryResponse;
  updateRateDefinition(
    requestMessage: services_billing_v1alpha1_rates_pb.UpdateRateDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_rates_pb.UpdateRateDefinitionResponse|null) => void
  ): UnaryResponse;
}

