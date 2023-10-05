// package: services.billing.v1alpha1
// file: services/billing/v1alpha1/service.proto

import * as services_billing_v1alpha1_service_pb from "../../../services/billing/v1alpha1/service_pb";
import * as services_billing_v1alpha1_groups_pb from "../../../services/billing/v1alpha1/groups_pb";
import * as services_billing_v1alpha1_invoices_pb from "../../../services/billing/v1alpha1/invoices_pb";
import * as services_billing_v1alpha1_plans_pb from "../../../services/billing/v1alpha1/plans_pb";
import * as services_billing_v1alpha1_rates_pb from "../../../services/billing/v1alpha1/rates_pb";
import {grpc} from "@improbable-eng/grpc-web";

type BillingServiceBulkDeleteRateDefinitions = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_rates_pb.BulkDeleteRateDefinitionsRequest;
  readonly responseType: typeof services_billing_v1alpha1_rates_pb.BulkDeleteRateDefinitionsResponse;
};

type BillingServiceBulkUpdateRateDefinitions = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_rates_pb.BulkUpdateRateDefinitionsRequest;
  readonly responseType: typeof services_billing_v1alpha1_rates_pb.BulkUpdateRateDefinitionsResponse;
};

type BillingServiceCreateBillingPlan = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_plans_pb.CreateBillingPlanRequest;
  readonly responseType: typeof services_billing_v1alpha1_plans_pb.CreateBillingPlanResponse;
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

type BillingServiceCreateRateDefinitionGroup = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_groups_pb.CreateRateDefinitionGroupRequest;
  readonly responseType: typeof services_billing_v1alpha1_groups_pb.CreateRateDefinitionGroupResponse;
};

type BillingServiceDeleteBillingPlan = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_plans_pb.DeleteBillingPlanRequest;
  readonly responseType: typeof services_billing_v1alpha1_plans_pb.DeleteBillingPlanResponse;
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

type BillingServiceDeleteRateDefinitionGroup = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_groups_pb.DeleteRateDefinitionGroupRequest;
  readonly responseType: typeof services_billing_v1alpha1_groups_pb.DeleteRateDefinitionGroupResponse;
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

type BillingServiceGetDefaultBillingPlan = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_plans_pb.GetDefaultBillingPlanRequest;
  readonly responseType: typeof services_billing_v1alpha1_plans_pb.GetDefaultBillingPlanResponse;
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

type BillingServiceGetRateDefinitionGroup = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_groups_pb.GetRateDefinitionGroupRequest;
  readonly responseType: typeof services_billing_v1alpha1_groups_pb.GetRateDefinitionGroupResponse;
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

type BillingServiceListRateDefinitionGroups = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_groups_pb.ListRateDefinitionGroupsRequest;
  readonly responseType: typeof services_billing_v1alpha1_groups_pb.ListRateDefinitionGroupsResponse;
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

type BillingServiceUpdateRateDefinitionGroup = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_billing_v1alpha1_groups_pb.UpdateRateDefinitionGroupRequest;
  readonly responseType: typeof services_billing_v1alpha1_groups_pb.UpdateRateDefinitionGroupResponse;
};

export class BillingService {
  static readonly serviceName: string;
  static readonly BulkDeleteRateDefinitions: BillingServiceBulkDeleteRateDefinitions;
  static readonly BulkUpdateRateDefinitions: BillingServiceBulkUpdateRateDefinitions;
  static readonly CreateBillingPlan: BillingServiceCreateBillingPlan;
  static readonly CreateInvoice: BillingServiceCreateInvoice;
  static readonly CreateRateDefinition: BillingServiceCreateRateDefinition;
  static readonly CreateRateDefinitionGroup: BillingServiceCreateRateDefinitionGroup;
  static readonly DeleteBillingPlan: BillingServiceDeleteBillingPlan;
  static readonly DeleteInvoice: BillingServiceDeleteInvoice;
  static readonly DeleteRateDefinition: BillingServiceDeleteRateDefinition;
  static readonly DeleteRateDefinitionGroup: BillingServiceDeleteRateDefinitionGroup;
  static readonly ExportInvoice: BillingServiceExportInvoice;
  static readonly GetActiveBillingPlan: BillingServiceGetActiveBillingPlan;
  static readonly GetBillingPlan: BillingServiceGetBillingPlan;
  static readonly GetDefaultBillingPlan: BillingServiceGetDefaultBillingPlan;
  static readonly GetInvoice: BillingServiceGetInvoice;
  static readonly GetRateDefinition: BillingServiceGetRateDefinition;
  static readonly GetRateDefinitionGroup: BillingServiceGetRateDefinitionGroup;
  static readonly ListBillingPlans: BillingServiceListBillingPlans;
  static readonly ListInvoices: BillingServiceListInvoices;
  static readonly ListRateDefinitions: BillingServiceListRateDefinitions;
  static readonly ListRateDefinitionGroups: BillingServiceListRateDefinitionGroups;
  static readonly UpdateBillingPlan: BillingServiceUpdateBillingPlan;
  static readonly UpdateDefaultBillingPlan: BillingServiceUpdateDefaultBillingPlan;
  static readonly UpdateInvoice: BillingServiceUpdateInvoice;
  static readonly UpdateRateDefinition: BillingServiceUpdateRateDefinition;
  static readonly UpdateRateDefinitionGroup: BillingServiceUpdateRateDefinitionGroup;
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
  bulkDeleteRateDefinitions(
    requestMessage: services_billing_v1alpha1_rates_pb.BulkDeleteRateDefinitionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_rates_pb.BulkDeleteRateDefinitionsResponse|null) => void
  ): UnaryResponse;
  bulkDeleteRateDefinitions(
    requestMessage: services_billing_v1alpha1_rates_pb.BulkDeleteRateDefinitionsRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_rates_pb.BulkDeleteRateDefinitionsResponse|null) => void
  ): UnaryResponse;
  bulkUpdateRateDefinitions(
    requestMessage: services_billing_v1alpha1_rates_pb.BulkUpdateRateDefinitionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_rates_pb.BulkUpdateRateDefinitionsResponse|null) => void
  ): UnaryResponse;
  bulkUpdateRateDefinitions(
    requestMessage: services_billing_v1alpha1_rates_pb.BulkUpdateRateDefinitionsRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_rates_pb.BulkUpdateRateDefinitionsResponse|null) => void
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
  createRateDefinitionGroup(
    requestMessage: services_billing_v1alpha1_groups_pb.CreateRateDefinitionGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_groups_pb.CreateRateDefinitionGroupResponse|null) => void
  ): UnaryResponse;
  createRateDefinitionGroup(
    requestMessage: services_billing_v1alpha1_groups_pb.CreateRateDefinitionGroupRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_groups_pb.CreateRateDefinitionGroupResponse|null) => void
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
  deleteRateDefinitionGroup(
    requestMessage: services_billing_v1alpha1_groups_pb.DeleteRateDefinitionGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_groups_pb.DeleteRateDefinitionGroupResponse|null) => void
  ): UnaryResponse;
  deleteRateDefinitionGroup(
    requestMessage: services_billing_v1alpha1_groups_pb.DeleteRateDefinitionGroupRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_groups_pb.DeleteRateDefinitionGroupResponse|null) => void
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
  getDefaultBillingPlan(
    requestMessage: services_billing_v1alpha1_plans_pb.GetDefaultBillingPlanRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_plans_pb.GetDefaultBillingPlanResponse|null) => void
  ): UnaryResponse;
  getDefaultBillingPlan(
    requestMessage: services_billing_v1alpha1_plans_pb.GetDefaultBillingPlanRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_plans_pb.GetDefaultBillingPlanResponse|null) => void
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
  getRateDefinitionGroup(
    requestMessage: services_billing_v1alpha1_groups_pb.GetRateDefinitionGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_groups_pb.GetRateDefinitionGroupResponse|null) => void
  ): UnaryResponse;
  getRateDefinitionGroup(
    requestMessage: services_billing_v1alpha1_groups_pb.GetRateDefinitionGroupRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_groups_pb.GetRateDefinitionGroupResponse|null) => void
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
  listRateDefinitionGroups(
    requestMessage: services_billing_v1alpha1_groups_pb.ListRateDefinitionGroupsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_groups_pb.ListRateDefinitionGroupsResponse|null) => void
  ): UnaryResponse;
  listRateDefinitionGroups(
    requestMessage: services_billing_v1alpha1_groups_pb.ListRateDefinitionGroupsRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_groups_pb.ListRateDefinitionGroupsResponse|null) => void
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
  updateRateDefinitionGroup(
    requestMessage: services_billing_v1alpha1_groups_pb.UpdateRateDefinitionGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_groups_pb.UpdateRateDefinitionGroupResponse|null) => void
  ): UnaryResponse;
  updateRateDefinitionGroup(
    requestMessage: services_billing_v1alpha1_groups_pb.UpdateRateDefinitionGroupRequest,
    callback: (error: ServiceError|null, responseMessage: services_billing_v1alpha1_groups_pb.UpdateRateDefinitionGroupResponse|null) => void
  ): UnaryResponse;
}

