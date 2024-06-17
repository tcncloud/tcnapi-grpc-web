// package: services.billing.v1alpha3
// file: services/billing/v1alpha3/service.proto

import * as services_billing_v1alpha3_service_pb from "../../../services/billing/v1alpha3/service_pb";
import * as services_billing_v1alpha3_draft_pb from "../../../services/billing/v1alpha3/draft_pb";
import * as services_billing_v1alpha3_invoice_pb from "../../../services/billing/v1alpha3/invoice_pb";
import * as services_billing_v1alpha3_plan_pb from "../../../services/billing/v1alpha3/plan_pb";
import * as services_billing_v1alpha3_rate_definition_pb from "../../../services/billing/v1alpha3/rate_definition_pb";
import * as services_billing_v1alpha3_rating_module_pb from "../../../services/billing/v1alpha3/rating_module_pb";
import * as services_billing_v1alpha3_sku_pb from "../../../services/billing/v1alpha3/sku_pb";
import {grpc} from "@improbable-eng/grpc-web";

type BillingServiceListRatingModules = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_rating_module_pb.ListRatingModulesRequest;
  readonly responseType: typeof services_billing_v1alpha3_rating_module_pb.ListRatingModulesResponse;
};

type BillingServiceCreateSku = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_sku_pb.CreateSkuRequest;
  readonly responseType: typeof services_billing_v1alpha3_sku_pb.CreateSkuResponse;
};

type BillingServiceDeleteSku = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_sku_pb.DeleteSkuRequest;
  readonly responseType: typeof services_billing_v1alpha3_sku_pb.DeleteSkuResponse;
};

type BillingServiceGetSku = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_sku_pb.GetSkuRequest;
  readonly responseType: typeof services_billing_v1alpha3_sku_pb.GetSkuResponse;
};

type BillingServiceListSkus = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_sku_pb.ListSkusRequest;
  readonly responseType: typeof services_billing_v1alpha3_sku_pb.ListSkusResponse;
};

type BillingServiceUpdateSku = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_sku_pb.UpdateSkuRequest;
  readonly responseType: typeof services_billing_v1alpha3_sku_pb.UpdateSkuResponse;
};

type BillingServiceCreatePlan = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_plan_pb.CreatePlanRequest;
  readonly responseType: typeof services_billing_v1alpha3_plan_pb.CreatePlanResponse;
};

type BillingServiceGetPlanChangelog = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_plan_pb.GetPlanChangelogRequest;
  readonly responseType: typeof services_billing_v1alpha3_plan_pb.GetPlanChangelogResponse;
};

type BillingServiceListPlans = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_plan_pb.ListPlansRequest;
  readonly responseType: typeof services_billing_v1alpha3_plan_pb.ListPlansResponse;
};

type BillingServiceApplyDraft = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_draft_pb.ApplyDraftRequest;
  readonly responseType: typeof services_billing_v1alpha3_draft_pb.ApplyDraftResponse;
};

type BillingServiceApplyTemplateDraft = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_draft_pb.ApplyTemplateDraftRequest;
  readonly responseType: typeof services_billing_v1alpha3_draft_pb.ApplyTemplateDraftResponse;
};

type BillingServiceCreateDraft = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_draft_pb.CreateDraftRequest;
  readonly responseType: typeof services_billing_v1alpha3_draft_pb.CreateDraftResponse;
};

type BillingServiceCreateTemplateDraft = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_draft_pb.CreateTemplateDraftRequest;
  readonly responseType: typeof services_billing_v1alpha3_draft_pb.CreateTemplateDraftResponse;
};

type BillingServiceDeleteDraft = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_draft_pb.DeleteDraftRequest;
  readonly responseType: typeof services_billing_v1alpha3_draft_pb.DeleteDraftResponse;
};

type BillingServiceDeleteTemplateDraft = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_draft_pb.DeleteTemplateDraftRequest;
  readonly responseType: typeof services_billing_v1alpha3_draft_pb.DeleteTemplateDraftResponse;
};

type BillingServiceGetDraft = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_draft_pb.GetDraftRequest;
  readonly responseType: typeof services_billing_v1alpha3_draft_pb.GetDraftResponse;
};

type BillingServiceGetTemplateDraft = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_draft_pb.GetTemplateDraftRequest;
  readonly responseType: typeof services_billing_v1alpha3_draft_pb.GetTemplateDraftResponse;
};

type BillingServiceListDrafts = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_draft_pb.ListDraftsRequest;
  readonly responseType: typeof services_billing_v1alpha3_draft_pb.ListDraftsResponse;
};

type BillingServiceListTemplateDrafts = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_draft_pb.ListTemplateDraftsRequest;
  readonly responseType: typeof services_billing_v1alpha3_draft_pb.ListTemplateDraftsResponse;
};

type BillingServiceUpdateDraft = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_draft_pb.UpdateDraftRequest;
  readonly responseType: typeof services_billing_v1alpha3_draft_pb.UpdateDraftResponse;
};

type BillingServiceUpdateTemplateDraft = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_draft_pb.UpdateTemplateDraftRequest;
  readonly responseType: typeof services_billing_v1alpha3_draft_pb.UpdateTemplateDraftResponse;
};

type BillingServiceCreateRateDefinition = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_rate_definition_pb.CreateRateDefinitionRequest;
  readonly responseType: typeof services_billing_v1alpha3_rate_definition_pb.CreateRateDefinitionResponse;
};

type BillingServiceCreateTemplateRateDefinition = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_rate_definition_pb.CreateTemplateRateDefinitionRequest;
  readonly responseType: typeof services_billing_v1alpha3_rate_definition_pb.CreateTemplateRateDefinitionResponse;
};

type BillingServiceDeleteRateDefinition = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_rate_definition_pb.DeleteRateDefinitionRequest;
  readonly responseType: typeof services_billing_v1alpha3_rate_definition_pb.DeleteRateDefinitionResponse;
};

type BillingServiceDeleteTemplateRateDefinition = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_rate_definition_pb.DeleteTemplateRateDefinitionRequest;
  readonly responseType: typeof services_billing_v1alpha3_rate_definition_pb.DeleteTemplateRateDefinitionResponse;
};

type BillingServiceGetRateDefinition = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_rate_definition_pb.GetRateDefinitionRequest;
  readonly responseType: typeof services_billing_v1alpha3_rate_definition_pb.GetRateDefinitionResponse;
};

type BillingServiceListRateDefinitions = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_rate_definition_pb.ListRateDefinitionsRequest;
  readonly responseType: typeof services_billing_v1alpha3_rate_definition_pb.ListRateDefinitionsResponse;
};

type BillingServiceUpdateRateDefinition = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_rate_definition_pb.UpdateRateDefinitionRequest;
  readonly responseType: typeof services_billing_v1alpha3_rate_definition_pb.UpdateRateDefinitionResponse;
};

type BillingServiceUpdateTemplateRateDefinition = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha3_rate_definition_pb.UpdateTemplateRateDefinitionRequest;
  readonly responseType: typeof services_billing_v1alpha3_rate_definition_pb.UpdateTemplateRateDefinitionResponse;
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
  static readonly ListRatingModules: BillingServiceListRatingModules;
  static readonly CreateSku: BillingServiceCreateSku;
  static readonly DeleteSku: BillingServiceDeleteSku;
  static readonly GetSku: BillingServiceGetSku;
  static readonly ListSkus: BillingServiceListSkus;
  static readonly UpdateSku: BillingServiceUpdateSku;
  static readonly CreatePlan: BillingServiceCreatePlan;
  static readonly GetPlanChangelog: BillingServiceGetPlanChangelog;
  static readonly ListPlans: BillingServiceListPlans;
  static readonly ApplyDraft: BillingServiceApplyDraft;
  static readonly ApplyTemplateDraft: BillingServiceApplyTemplateDraft;
  static readonly CreateDraft: BillingServiceCreateDraft;
  static readonly CreateTemplateDraft: BillingServiceCreateTemplateDraft;
  static readonly DeleteDraft: BillingServiceDeleteDraft;
  static readonly DeleteTemplateDraft: BillingServiceDeleteTemplateDraft;
  static readonly GetDraft: BillingServiceGetDraft;
  static readonly GetTemplateDraft: BillingServiceGetTemplateDraft;
  static readonly ListDrafts: BillingServiceListDrafts;
  static readonly ListTemplateDrafts: BillingServiceListTemplateDrafts;
  static readonly UpdateDraft: BillingServiceUpdateDraft;
  static readonly UpdateTemplateDraft: BillingServiceUpdateTemplateDraft;
  static readonly CreateRateDefinition: BillingServiceCreateRateDefinition;
  static readonly CreateTemplateRateDefinition: BillingServiceCreateTemplateRateDefinition;
  static readonly DeleteRateDefinition: BillingServiceDeleteRateDefinition;
  static readonly DeleteTemplateRateDefinition: BillingServiceDeleteTemplateRateDefinition;
  static readonly GetRateDefinition: BillingServiceGetRateDefinition;
  static readonly ListRateDefinitions: BillingServiceListRateDefinitions;
  static readonly UpdateRateDefinition: BillingServiceUpdateRateDefinition;
  static readonly UpdateTemplateRateDefinition: BillingServiceUpdateTemplateRateDefinition;
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
  listRatingModules(
    requestMessage: services_billing_v1alpha3_rating_module_pb.ListRatingModulesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_rating_module_pb.ListRatingModulesResponse|null) => void
  ): UnaryResponse;
  listRatingModules(
    requestMessage: services_billing_v1alpha3_rating_module_pb.ListRatingModulesRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_rating_module_pb.ListRatingModulesResponse|null) => void
  ): UnaryResponse;
  createSku(
    requestMessage: services_billing_v1alpha3_sku_pb.CreateSkuRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_sku_pb.CreateSkuResponse|null) => void
  ): UnaryResponse;
  createSku(
    requestMessage: services_billing_v1alpha3_sku_pb.CreateSkuRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_sku_pb.CreateSkuResponse|null) => void
  ): UnaryResponse;
  deleteSku(
    requestMessage: services_billing_v1alpha3_sku_pb.DeleteSkuRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_sku_pb.DeleteSkuResponse|null) => void
  ): UnaryResponse;
  deleteSku(
    requestMessage: services_billing_v1alpha3_sku_pb.DeleteSkuRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_sku_pb.DeleteSkuResponse|null) => void
  ): UnaryResponse;
  getSku(
    requestMessage: services_billing_v1alpha3_sku_pb.GetSkuRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_sku_pb.GetSkuResponse|null) => void
  ): UnaryResponse;
  getSku(
    requestMessage: services_billing_v1alpha3_sku_pb.GetSkuRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_sku_pb.GetSkuResponse|null) => void
  ): UnaryResponse;
  listSkus(
    requestMessage: services_billing_v1alpha3_sku_pb.ListSkusRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_sku_pb.ListSkusResponse|null) => void
  ): UnaryResponse;
  listSkus(
    requestMessage: services_billing_v1alpha3_sku_pb.ListSkusRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_sku_pb.ListSkusResponse|null) => void
  ): UnaryResponse;
  updateSku(
    requestMessage: services_billing_v1alpha3_sku_pb.UpdateSkuRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_sku_pb.UpdateSkuResponse|null) => void
  ): UnaryResponse;
  updateSku(
    requestMessage: services_billing_v1alpha3_sku_pb.UpdateSkuRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_sku_pb.UpdateSkuResponse|null) => void
  ): UnaryResponse;
  createPlan(
    requestMessage: services_billing_v1alpha3_plan_pb.CreatePlanRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_plan_pb.CreatePlanResponse|null) => void
  ): UnaryResponse;
  createPlan(
    requestMessage: services_billing_v1alpha3_plan_pb.CreatePlanRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_plan_pb.CreatePlanResponse|null) => void
  ): UnaryResponse;
  getPlanChangelog(
    requestMessage: services_billing_v1alpha3_plan_pb.GetPlanChangelogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_plan_pb.GetPlanChangelogResponse|null) => void
  ): UnaryResponse;
  getPlanChangelog(
    requestMessage: services_billing_v1alpha3_plan_pb.GetPlanChangelogRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_plan_pb.GetPlanChangelogResponse|null) => void
  ): UnaryResponse;
  listPlans(
    requestMessage: services_billing_v1alpha3_plan_pb.ListPlansRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_plan_pb.ListPlansResponse|null) => void
  ): UnaryResponse;
  listPlans(
    requestMessage: services_billing_v1alpha3_plan_pb.ListPlansRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_plan_pb.ListPlansResponse|null) => void
  ): UnaryResponse;
  applyDraft(
    requestMessage: services_billing_v1alpha3_draft_pb.ApplyDraftRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_draft_pb.ApplyDraftResponse|null) => void
  ): UnaryResponse;
  applyDraft(
    requestMessage: services_billing_v1alpha3_draft_pb.ApplyDraftRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_draft_pb.ApplyDraftResponse|null) => void
  ): UnaryResponse;
  applyTemplateDraft(
    requestMessage: services_billing_v1alpha3_draft_pb.ApplyTemplateDraftRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_draft_pb.ApplyTemplateDraftResponse|null) => void
  ): UnaryResponse;
  applyTemplateDraft(
    requestMessage: services_billing_v1alpha3_draft_pb.ApplyTemplateDraftRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_draft_pb.ApplyTemplateDraftResponse|null) => void
  ): UnaryResponse;
  createDraft(
    requestMessage: services_billing_v1alpha3_draft_pb.CreateDraftRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_draft_pb.CreateDraftResponse|null) => void
  ): UnaryResponse;
  createDraft(
    requestMessage: services_billing_v1alpha3_draft_pb.CreateDraftRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_draft_pb.CreateDraftResponse|null) => void
  ): UnaryResponse;
  createTemplateDraft(
    requestMessage: services_billing_v1alpha3_draft_pb.CreateTemplateDraftRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_draft_pb.CreateTemplateDraftResponse|null) => void
  ): UnaryResponse;
  createTemplateDraft(
    requestMessage: services_billing_v1alpha3_draft_pb.CreateTemplateDraftRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_draft_pb.CreateTemplateDraftResponse|null) => void
  ): UnaryResponse;
  deleteDraft(
    requestMessage: services_billing_v1alpha3_draft_pb.DeleteDraftRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_draft_pb.DeleteDraftResponse|null) => void
  ): UnaryResponse;
  deleteDraft(
    requestMessage: services_billing_v1alpha3_draft_pb.DeleteDraftRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_draft_pb.DeleteDraftResponse|null) => void
  ): UnaryResponse;
  deleteTemplateDraft(
    requestMessage: services_billing_v1alpha3_draft_pb.DeleteTemplateDraftRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_draft_pb.DeleteTemplateDraftResponse|null) => void
  ): UnaryResponse;
  deleteTemplateDraft(
    requestMessage: services_billing_v1alpha3_draft_pb.DeleteTemplateDraftRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_draft_pb.DeleteTemplateDraftResponse|null) => void
  ): UnaryResponse;
  getDraft(
    requestMessage: services_billing_v1alpha3_draft_pb.GetDraftRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_draft_pb.GetDraftResponse|null) => void
  ): UnaryResponse;
  getDraft(
    requestMessage: services_billing_v1alpha3_draft_pb.GetDraftRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_draft_pb.GetDraftResponse|null) => void
  ): UnaryResponse;
  getTemplateDraft(
    requestMessage: services_billing_v1alpha3_draft_pb.GetTemplateDraftRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_draft_pb.GetTemplateDraftResponse|null) => void
  ): UnaryResponse;
  getTemplateDraft(
    requestMessage: services_billing_v1alpha3_draft_pb.GetTemplateDraftRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_draft_pb.GetTemplateDraftResponse|null) => void
  ): UnaryResponse;
  listDrafts(
    requestMessage: services_billing_v1alpha3_draft_pb.ListDraftsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_draft_pb.ListDraftsResponse|null) => void
  ): UnaryResponse;
  listDrafts(
    requestMessage: services_billing_v1alpha3_draft_pb.ListDraftsRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_draft_pb.ListDraftsResponse|null) => void
  ): UnaryResponse;
  listTemplateDrafts(
    requestMessage: services_billing_v1alpha3_draft_pb.ListTemplateDraftsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_draft_pb.ListTemplateDraftsResponse|null) => void
  ): UnaryResponse;
  listTemplateDrafts(
    requestMessage: services_billing_v1alpha3_draft_pb.ListTemplateDraftsRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_draft_pb.ListTemplateDraftsResponse|null) => void
  ): UnaryResponse;
  updateDraft(
    requestMessage: services_billing_v1alpha3_draft_pb.UpdateDraftRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_draft_pb.UpdateDraftResponse|null) => void
  ): UnaryResponse;
  updateDraft(
    requestMessage: services_billing_v1alpha3_draft_pb.UpdateDraftRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_draft_pb.UpdateDraftResponse|null) => void
  ): UnaryResponse;
  updateTemplateDraft(
    requestMessage: services_billing_v1alpha3_draft_pb.UpdateTemplateDraftRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_draft_pb.UpdateTemplateDraftResponse|null) => void
  ): UnaryResponse;
  updateTemplateDraft(
    requestMessage: services_billing_v1alpha3_draft_pb.UpdateTemplateDraftRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_draft_pb.UpdateTemplateDraftResponse|null) => void
  ): UnaryResponse;
  createRateDefinition(
    requestMessage: services_billing_v1alpha3_rate_definition_pb.CreateRateDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_rate_definition_pb.CreateRateDefinitionResponse|null) => void
  ): UnaryResponse;
  createRateDefinition(
    requestMessage: services_billing_v1alpha3_rate_definition_pb.CreateRateDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_rate_definition_pb.CreateRateDefinitionResponse|null) => void
  ): UnaryResponse;
  createTemplateRateDefinition(
    requestMessage: services_billing_v1alpha3_rate_definition_pb.CreateTemplateRateDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_rate_definition_pb.CreateTemplateRateDefinitionResponse|null) => void
  ): UnaryResponse;
  createTemplateRateDefinition(
    requestMessage: services_billing_v1alpha3_rate_definition_pb.CreateTemplateRateDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_rate_definition_pb.CreateTemplateRateDefinitionResponse|null) => void
  ): UnaryResponse;
  deleteRateDefinition(
    requestMessage: services_billing_v1alpha3_rate_definition_pb.DeleteRateDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_rate_definition_pb.DeleteRateDefinitionResponse|null) => void
  ): UnaryResponse;
  deleteRateDefinition(
    requestMessage: services_billing_v1alpha3_rate_definition_pb.DeleteRateDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_rate_definition_pb.DeleteRateDefinitionResponse|null) => void
  ): UnaryResponse;
  deleteTemplateRateDefinition(
    requestMessage: services_billing_v1alpha3_rate_definition_pb.DeleteTemplateRateDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_rate_definition_pb.DeleteTemplateRateDefinitionResponse|null) => void
  ): UnaryResponse;
  deleteTemplateRateDefinition(
    requestMessage: services_billing_v1alpha3_rate_definition_pb.DeleteTemplateRateDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_rate_definition_pb.DeleteTemplateRateDefinitionResponse|null) => void
  ): UnaryResponse;
  getRateDefinition(
    requestMessage: services_billing_v1alpha3_rate_definition_pb.GetRateDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_rate_definition_pb.GetRateDefinitionResponse|null) => void
  ): UnaryResponse;
  getRateDefinition(
    requestMessage: services_billing_v1alpha3_rate_definition_pb.GetRateDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_rate_definition_pb.GetRateDefinitionResponse|null) => void
  ): UnaryResponse;
  listRateDefinitions(
    requestMessage: services_billing_v1alpha3_rate_definition_pb.ListRateDefinitionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_rate_definition_pb.ListRateDefinitionsResponse|null) => void
  ): UnaryResponse;
  listRateDefinitions(
    requestMessage: services_billing_v1alpha3_rate_definition_pb.ListRateDefinitionsRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_rate_definition_pb.ListRateDefinitionsResponse|null) => void
  ): UnaryResponse;
  updateRateDefinition(
    requestMessage: services_billing_v1alpha3_rate_definition_pb.UpdateRateDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_rate_definition_pb.UpdateRateDefinitionResponse|null) => void
  ): UnaryResponse;
  updateRateDefinition(
    requestMessage: services_billing_v1alpha3_rate_definition_pb.UpdateRateDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_rate_definition_pb.UpdateRateDefinitionResponse|null) => void
  ): UnaryResponse;
  updateTemplateRateDefinition(
    requestMessage: services_billing_v1alpha3_rate_definition_pb.UpdateTemplateRateDefinitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_rate_definition_pb.UpdateTemplateRateDefinitionResponse|null) => void
  ): UnaryResponse;
  updateTemplateRateDefinition(
    requestMessage: services_billing_v1alpha3_rate_definition_pb.UpdateTemplateRateDefinitionRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha3_rate_definition_pb.UpdateTemplateRateDefinitionResponse|null) => void
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

