// package: services.billing.v1alpha3
// file: services/billing/v1alpha3/service.proto

import * as services_billing_v1alpha3_service_pb from "../../../services/billing/v1alpha3/service_pb";
import * as services_billing_v1alpha3_defaults_pb from "../../../services/billing/v1alpha3/defaults_pb";
import * as services_billing_v1alpha3_invoice_pb from "../../../services/billing/v1alpha3/invoice_pb";
import * as services_billing_v1alpha3_plan_pb from "../../../services/billing/v1alpha3/plan_pb";
import * as services_billing_v1alpha3_product_pb from "../../../services/billing/v1alpha3/product_pb";
import {grpc} from "@improbable-eng/grpc-web";

type BillingServiceListProducts = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_product_pb.ListProductsRequest;
  readonly responseType: typeof services_billing_v1alpha3_product_pb.ListProductsResponse;
};

type BillingServiceApplyBillingPlanDraft = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_plan_pb.ApplyBillingPlanDraftRequest;
  readonly responseType: typeof services_billing_v1alpha3_plan_pb.ApplyBillingPlanDraftResponse;
};

type BillingServiceCreateBillingPlan = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_plan_pb.CreateBillingPlanRequest;
  readonly responseType: typeof services_billing_v1alpha3_plan_pb.CreateBillingPlanResponse;
};

type BillingServiceDeleteBillingPlan = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_plan_pb.DeleteBillingPlanRequest;
  readonly responseType: typeof services_billing_v1alpha3_plan_pb.DeleteBillingPlanResponse;
};

type BillingServiceGetBillingPlan = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_plan_pb.GetBillingPlanRequest;
  readonly responseType: typeof services_billing_v1alpha3_plan_pb.GetBillingPlanResponse;
};

type BillingServiceListBillingPlans = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_plan_pb.ListBillingPlansRequest;
  readonly responseType: typeof services_billing_v1alpha3_plan_pb.ListBillingPlansResponse;
};

type BillingServiceUpdateBillingPlan = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_plan_pb.UpdateBillingPlanRequest;
  readonly responseType: typeof services_billing_v1alpha3_plan_pb.UpdateBillingPlanResponse;
};

type BillingServiceApplyDefaultBillingPlanDraft = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_defaults_pb.ApplyDefaultBillingPlanDraftRequest;
  readonly responseType: typeof services_billing_v1alpha3_defaults_pb.ApplyDefaultBillingPlanDraftResponse;
};

type BillingServiceCreateDefaultBillingPlan = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_defaults_pb.CreateDefaultBillingPlanRequest;
  readonly responseType: typeof services_billing_v1alpha3_defaults_pb.CreateDefaultBillingPlanResponse;
};

type BillingServiceDeleteDefaultBillingPlan = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_defaults_pb.DeleteDefaultBillingPlanRequest;
  readonly responseType: typeof services_billing_v1alpha3_defaults_pb.DeleteDefaultBillingPlanResponse;
};

type BillingServiceGetDefaultBillingPlan = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_defaults_pb.GetDefaultBillingPlanRequest;
  readonly responseType: typeof services_billing_v1alpha3_defaults_pb.GetDefaultBillingPlanResponse;
};

type BillingServiceListDefaultBillingPlans = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_defaults_pb.ListDefaultBillingPlansRequest;
  readonly responseType: typeof services_billing_v1alpha3_defaults_pb.ListDefaultBillingPlansResponse;
};

type BillingServiceUpdateDefaultBillingPlan = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_defaults_pb.UpdateDefaultBillingPlanRequest;
  readonly responseType: typeof services_billing_v1alpha3_defaults_pb.UpdateDefaultBillingPlanResponse;
};

type BillingServiceCreateRateDefinition = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_plan_pb.CreateRateDefinitionRequest;
  readonly responseType: typeof services_billing_v1alpha3_plan_pb.CreateRateDefinitionResponse;
};

type BillingServiceDeleteRateDefinition = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_plan_pb.DeleteRateDefinitionRequest;
  readonly responseType: typeof services_billing_v1alpha3_plan_pb.DeleteRateDefinitionResponse;
};

type BillingServiceGetRateDefinition = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_plan_pb.GetRateDefinitionRequest;
  readonly responseType: typeof services_billing_v1alpha3_plan_pb.GetRateDefinitionResponse;
};

type BillingServiceListRateDefinitions = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_plan_pb.ListRateDefinitionsRequest;
  readonly responseType: typeof services_billing_v1alpha3_plan_pb.ListRateDefinitionsResponse;
};

type BillingServiceUpdateRateDefinition = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_plan_pb.UpdateRateDefinitionRequest;
  readonly responseType: typeof services_billing_v1alpha3_plan_pb.UpdateRateDefinitionResponse;
};

type BillingServiceCreateDefaultRateDefinition = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_defaults_pb.CreateDefaultRateDefinitionRequest;
  readonly responseType: typeof services_billing_v1alpha3_defaults_pb.CreateDefaultRateDefinitionResponse;
};

type BillingServiceDeleteDefaultRateDefinition = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_defaults_pb.DeleteDefaultRateDefinitionRequest;
  readonly responseType: typeof services_billing_v1alpha3_defaults_pb.DeleteDefaultRateDefinitionResponse;
};

type BillingServiceGetDefaultRateDefinition = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_defaults_pb.GetDefaultRateDefinitionRequest;
  readonly responseType: typeof services_billing_v1alpha3_defaults_pb.GetDefaultRateDefinitionResponse;
};

type BillingServiceListDefaultRateDefinitions = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_defaults_pb.ListDefaultRateDefinitionsRequest;
  readonly responseType: typeof services_billing_v1alpha3_defaults_pb.ListDefaultRateDefinitionsResponse;
};

type BillingServiceUpdateDefaultRateDefinition = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_defaults_pb.UpdateDefaultRateDefinitionRequest;
  readonly responseType: typeof services_billing_v1alpha3_defaults_pb.UpdateDefaultRateDefinitionResponse;
};

type BillingServiceExportInvoice = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_invoice_pb.ExportInvoiceRequest;
  readonly responseType: typeof services_billing_v1alpha3_invoice_pb.ExportInvoiceResponse;
};

export class BillingService {
  static readonly serviceName: string;
  static readonly ListProducts: BillingServiceListProducts;
  static readonly ApplyBillingPlanDraft: BillingServiceApplyBillingPlanDraft;
  static readonly CreateBillingPlan: BillingServiceCreateBillingPlan;
  static readonly DeleteBillingPlan: BillingServiceDeleteBillingPlan;
  static readonly GetBillingPlan: BillingServiceGetBillingPlan;
  static readonly ListBillingPlans: BillingServiceListBillingPlans;
  static readonly UpdateBillingPlan: BillingServiceUpdateBillingPlan;
  static readonly ApplyDefaultBillingPlanDraft: BillingServiceApplyDefaultBillingPlanDraft;
  static readonly CreateDefaultBillingPlan: BillingServiceCreateDefaultBillingPlan;
  static readonly DeleteDefaultBillingPlan: BillingServiceDeleteDefaultBillingPlan;
  static readonly GetDefaultBillingPlan: BillingServiceGetDefaultBillingPlan;
  static readonly ListDefaultBillingPlans: BillingServiceListDefaultBillingPlans;
  static readonly UpdateDefaultBillingPlan: BillingServiceUpdateDefaultBillingPlan;
  static readonly CreateRateDefinition: BillingServiceCreateRateDefinition;
  static readonly DeleteRateDefinition: BillingServiceDeleteRateDefinition;
  static readonly GetRateDefinition: BillingServiceGetRateDefinition;
  static readonly ListRateDefinitions: BillingServiceListRateDefinitions;
  static readonly UpdateRateDefinition: BillingServiceUpdateRateDefinition;
  static readonly CreateDefaultRateDefinition: BillingServiceCreateDefaultRateDefinition;
  static readonly DeleteDefaultRateDefinition: BillingServiceDeleteDefaultRateDefinition;
  static readonly GetDefaultRateDefinition: BillingServiceGetDefaultRateDefinition;
  static readonly ListDefaultRateDefinitions: BillingServiceListDefaultRateDefinitions;
  static readonly UpdateDefaultRateDefinition: BillingServiceUpdateDefaultRateDefinition;
  static readonly ExportInvoice: BillingServiceExportInvoice;
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
  listProducts(
    requestMessage: services_billing_v1alpha3_product_pb.ListProductsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_product_pb.ListProductsResponse|null) => void
  ): UnaryResponse;
  listProducts(
    requestMessage: services_billing_v1alpha3_product_pb.ListProductsRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_product_pb.ListProductsResponse|null) => void
  ): UnaryResponse;
  applyBillingPlanDraft(
    requestMessage: services_billing_v1alpha3_plan_pb.ApplyBillingPlanDraftRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_plan_pb.ApplyBillingPlanDraftResponse|null) => void
  ): UnaryResponse;
  applyBillingPlanDraft(
    requestMessage: services_billing_v1alpha3_plan_pb.ApplyBillingPlanDraftRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_plan_pb.ApplyBillingPlanDraftResponse|null) => void
  ): UnaryResponse;
  createBillingPlan(
    requestMessage: services_billing_v1alpha3_plan_pb.CreateBillingPlanRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_plan_pb.CreateBillingPlanResponse|null) => void
  ): UnaryResponse;
  createBillingPlan(
    requestMessage: services_billing_v1alpha3_plan_pb.CreateBillingPlanRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_plan_pb.CreateBillingPlanResponse|null) => void
  ): UnaryResponse;
  deleteBillingPlan(
    requestMessage: services_billing_v1alpha3_plan_pb.DeleteBillingPlanRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_plan_pb.DeleteBillingPlanResponse|null) => void
  ): UnaryResponse;
  deleteBillingPlan(
    requestMessage: services_billing_v1alpha3_plan_pb.DeleteBillingPlanRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_plan_pb.DeleteBillingPlanResponse|null) => void
  ): UnaryResponse;
  getBillingPlan(
    requestMessage: services_billing_v1alpha3_plan_pb.GetBillingPlanRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_plan_pb.GetBillingPlanResponse|null) => void
  ): UnaryResponse;
  getBillingPlan(
    requestMessage: services_billing_v1alpha3_plan_pb.GetBillingPlanRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_plan_pb.GetBillingPlanResponse|null) => void
  ): UnaryResponse;
  listBillingPlans(
    requestMessage: services_billing_v1alpha3_plan_pb.ListBillingPlansRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_plan_pb.ListBillingPlansResponse|null) => void
  ): UnaryResponse;
  listBillingPlans(
    requestMessage: services_billing_v1alpha3_plan_pb.ListBillingPlansRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_plan_pb.ListBillingPlansResponse|null) => void
  ): UnaryResponse;
  updateBillingPlan(
    requestMessage: services_billing_v1alpha3_plan_pb.UpdateBillingPlanRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_plan_pb.UpdateBillingPlanResponse|null) => void
  ): UnaryResponse;
  updateBillingPlan(
    requestMessage: services_billing_v1alpha3_plan_pb.UpdateBillingPlanRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_plan_pb.UpdateBillingPlanResponse|null) => void
  ): UnaryResponse;
  applyDefaultBillingPlanDraft(
    requestMessage: services_billing_v1alpha3_defaults_pb.ApplyDefaultBillingPlanDraftRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_defaults_pb.ApplyDefaultBillingPlanDraftResponse|null) => void
  ): UnaryResponse;
  applyDefaultBillingPlanDraft(
    requestMessage: services_billing_v1alpha3_defaults_pb.ApplyDefaultBillingPlanDraftRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_defaults_pb.ApplyDefaultBillingPlanDraftResponse|null) => void
  ): UnaryResponse;
  createDefaultBillingPlan(
    requestMessage: services_billing_v1alpha3_defaults_pb.CreateDefaultBillingPlanRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_defaults_pb.CreateDefaultBillingPlanResponse|null) => void
  ): UnaryResponse;
  createDefaultBillingPlan(
    requestMessage: services_billing_v1alpha3_defaults_pb.CreateDefaultBillingPlanRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_defaults_pb.CreateDefaultBillingPlanResponse|null) => void
  ): UnaryResponse;
  deleteDefaultBillingPlan(
    requestMessage: services_billing_v1alpha3_defaults_pb.DeleteDefaultBillingPlanRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_defaults_pb.DeleteDefaultBillingPlanResponse|null) => void
  ): UnaryResponse;
  deleteDefaultBillingPlan(
    requestMessage: services_billing_v1alpha3_defaults_pb.DeleteDefaultBillingPlanRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_defaults_pb.DeleteDefaultBillingPlanResponse|null) => void
  ): UnaryResponse;
  getDefaultBillingPlan(
    requestMessage: services_billing_v1alpha3_defaults_pb.GetDefaultBillingPlanRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_defaults_pb.GetDefaultBillingPlanResponse|null) => void
  ): UnaryResponse;
  getDefaultBillingPlan(
    requestMessage: services_billing_v1alpha3_defaults_pb.GetDefaultBillingPlanRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_defaults_pb.GetDefaultBillingPlanResponse|null) => void
  ): UnaryResponse;
  listDefaultBillingPlans(
    requestMessage: services_billing_v1alpha3_defaults_pb.ListDefaultBillingPlansRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_defaults_pb.ListDefaultBillingPlansResponse|null) => void
  ): UnaryResponse;
  listDefaultBillingPlans(
    requestMessage: services_billing_v1alpha3_defaults_pb.ListDefaultBillingPlansRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_defaults_pb.ListDefaultBillingPlansResponse|null) => void
  ): UnaryResponse;
  updateDefaultBillingPlan(
    requestMessage: services_billing_v1alpha3_defaults_pb.UpdateDefaultBillingPlanRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_defaults_pb.UpdateDefaultBillingPlanResponse|null) => void
  ): UnaryResponse;
  updateDefaultBillingPlan(
    requestMessage: services_billing_v1alpha3_defaults_pb.UpdateDefaultBillingPlanRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_defaults_pb.UpdateDefaultBillingPlanResponse|null) => void
  ): UnaryResponse;
  createRateDefinition(
    requestMessage: services_billing_v1alpha3_plan_pb.CreateRateDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_plan_pb.CreateRateDefinitionResponse|null) => void
  ): UnaryResponse;
  createRateDefinition(
    requestMessage: services_billing_v1alpha3_plan_pb.CreateRateDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_plan_pb.CreateRateDefinitionResponse|null) => void
  ): UnaryResponse;
  deleteRateDefinition(
    requestMessage: services_billing_v1alpha3_plan_pb.DeleteRateDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_plan_pb.DeleteRateDefinitionResponse|null) => void
  ): UnaryResponse;
  deleteRateDefinition(
    requestMessage: services_billing_v1alpha3_plan_pb.DeleteRateDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_plan_pb.DeleteRateDefinitionResponse|null) => void
  ): UnaryResponse;
  getRateDefinition(
    requestMessage: services_billing_v1alpha3_plan_pb.GetRateDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_plan_pb.GetRateDefinitionResponse|null) => void
  ): UnaryResponse;
  getRateDefinition(
    requestMessage: services_billing_v1alpha3_plan_pb.GetRateDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_plan_pb.GetRateDefinitionResponse|null) => void
  ): UnaryResponse;
  listRateDefinitions(
    requestMessage: services_billing_v1alpha3_plan_pb.ListRateDefinitionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_plan_pb.ListRateDefinitionsResponse|null) => void
  ): UnaryResponse;
  listRateDefinitions(
    requestMessage: services_billing_v1alpha3_plan_pb.ListRateDefinitionsRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_plan_pb.ListRateDefinitionsResponse|null) => void
  ): UnaryResponse;
  updateRateDefinition(
    requestMessage: services_billing_v1alpha3_plan_pb.UpdateRateDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_plan_pb.UpdateRateDefinitionResponse|null) => void
  ): UnaryResponse;
  updateRateDefinition(
    requestMessage: services_billing_v1alpha3_plan_pb.UpdateRateDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_plan_pb.UpdateRateDefinitionResponse|null) => void
  ): UnaryResponse;
  createDefaultRateDefinition(
    requestMessage: services_billing_v1alpha3_defaults_pb.CreateDefaultRateDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_defaults_pb.CreateDefaultRateDefinitionResponse|null) => void
  ): UnaryResponse;
  createDefaultRateDefinition(
    requestMessage: services_billing_v1alpha3_defaults_pb.CreateDefaultRateDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_defaults_pb.CreateDefaultRateDefinitionResponse|null) => void
  ): UnaryResponse;
  deleteDefaultRateDefinition(
    requestMessage: services_billing_v1alpha3_defaults_pb.DeleteDefaultRateDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_defaults_pb.DeleteDefaultRateDefinitionResponse|null) => void
  ): UnaryResponse;
  deleteDefaultRateDefinition(
    requestMessage: services_billing_v1alpha3_defaults_pb.DeleteDefaultRateDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_defaults_pb.DeleteDefaultRateDefinitionResponse|null) => void
  ): UnaryResponse;
  getDefaultRateDefinition(
    requestMessage: services_billing_v1alpha3_defaults_pb.GetDefaultRateDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_defaults_pb.GetDefaultRateDefinitionResponse|null) => void
  ): UnaryResponse;
  getDefaultRateDefinition(
    requestMessage: services_billing_v1alpha3_defaults_pb.GetDefaultRateDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_defaults_pb.GetDefaultRateDefinitionResponse|null) => void
  ): UnaryResponse;
  listDefaultRateDefinitions(
    requestMessage: services_billing_v1alpha3_defaults_pb.ListDefaultRateDefinitionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_defaults_pb.ListDefaultRateDefinitionsResponse|null) => void
  ): UnaryResponse;
  listDefaultRateDefinitions(
    requestMessage: services_billing_v1alpha3_defaults_pb.ListDefaultRateDefinitionsRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_defaults_pb.ListDefaultRateDefinitionsResponse|null) => void
  ): UnaryResponse;
  updateDefaultRateDefinition(
    requestMessage: services_billing_v1alpha3_defaults_pb.UpdateDefaultRateDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_defaults_pb.UpdateDefaultRateDefinitionResponse|null) => void
  ): UnaryResponse;
  updateDefaultRateDefinition(
    requestMessage: services_billing_v1alpha3_defaults_pb.UpdateDefaultRateDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_defaults_pb.UpdateDefaultRateDefinitionResponse|null) => void
  ): UnaryResponse;
  exportInvoice(
    requestMessage: services_billing_v1alpha3_invoice_pb.ExportInvoiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_invoice_pb.ExportInvoiceResponse|null) => void
  ): UnaryResponse;
  exportInvoice(
    requestMessage: services_billing_v1alpha3_invoice_pb.ExportInvoiceRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_invoice_pb.ExportInvoiceResponse|null) => void
  ): UnaryResponse;
}

