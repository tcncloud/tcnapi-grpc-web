// package: api.v0alpha
// file: api/v0alpha/ana.proto

import * as api_v0alpha_ana_pb from "../../api/v0alpha/ana_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AnaGetSpecifiedVisualizations = {
  readonly methodName: string;
  readonly service: typeof Ana;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_ana_pb.GetSpecifiedVisualizationsReq;
  readonly responseType: typeof api_v0alpha_ana_pb.Visualizations;
};

type AnaRegisterAccount = {
  readonly methodName: string;
  readonly service: typeof Ana;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_ana_pb.RegisterAccountReq;
  readonly responseType: typeof api_v0alpha_ana_pb.AnaAccount;
};

type AnaSetWeeks = {
  readonly methodName: string;
  readonly service: typeof Ana;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_ana_pb.SetWeeksReq;
  readonly responseType: typeof api_v0alpha_ana_pb.SetWeeksRes;
};

type AnaSetDefaultTimeFilter = {
  readonly methodName: string;
  readonly service: typeof Ana;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_ana_pb.SetDefaultTimeFilterReq;
  readonly responseType: typeof api_v0alpha_ana_pb.SetDefaultTimeFilterRes;
};

type AnaSetDefaultDashboard = {
  readonly methodName: string;
  readonly service: typeof Ana;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_ana_pb.SetDefaultDashboardReq;
  readonly responseType: typeof api_v0alpha_ana_pb.SetDefaultDashboardRes;
};

type AnaGetAccount = {
  readonly methodName: string;
  readonly service: typeof Ana;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_ana_pb.GetAccountReq;
  readonly responseType: typeof api_v0alpha_ana_pb.AnaAccount;
};

type AnaGetSpecifiedAccount = {
  readonly methodName: string;
  readonly service: typeof Ana;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_ana_pb.GetSpecifiedAccountReq;
  readonly responseType: typeof api_v0alpha_ana_pb.AnaAccount;
};

type AnaGetAuthorizedAnalyticsLink = {
  readonly methodName: string;
  readonly service: typeof Ana;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_ana_pb.GetAuthorizedAnalyticsLinkReq;
  readonly responseType: typeof api_v0alpha_ana_pb.GetAuthorizedAnalyticsLinkRes;
};

type AnaGenerateMonthlyBilling = {
  readonly methodName: string;
  readonly service: typeof Ana;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_ana_pb.GenerateMonthlyBillingReq;
  readonly responseType: typeof api_v0alpha_ana_pb.GenerateMonthlyBillingRes;
};

type AnaGetTimeZone = {
  readonly methodName: string;
  readonly service: typeof Ana;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_ana_pb.GetTimeZoneReq;
  readonly responseType: typeof api_v0alpha_ana_pb.TimeZone;
};

type AnaSetTimeZone = {
  readonly methodName: string;
  readonly service: typeof Ana;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_ana_pb.SetTimeZoneReq;
  readonly responseType: typeof api_v0alpha_ana_pb.SetTimeZoneRes;
};

type AnaCopyDashViz = {
  readonly methodName: string;
  readonly service: typeof Ana;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_ana_pb.CopyDashVizReq;
  readonly responseType: typeof api_v0alpha_ana_pb.CopyDashVizRes;
};

type AnaGetSpecifiedBillingSummary = {
  readonly methodName: string;
  readonly service: typeof Ana;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_ana_pb.GetSpecifiedBillingSummaryReq;
  readonly responseType: typeof api_v0alpha_ana_pb.BillingSummary;
};

type AnaGetBillingSummary = {
  readonly methodName: string;
  readonly service: typeof Ana;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_ana_pb.GetBillingSummaryReq;
  readonly responseType: typeof api_v0alpha_ana_pb.BillingSummary;
};

type AnaEnableCustomReports = {
  readonly methodName: string;
  readonly service: typeof Ana;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_ana_pb.SetCustomReportsEnabledReq;
  readonly responseType: typeof api_v0alpha_ana_pb.SetCustomReportsEnabledRes;
};

type AnaDisableCustomReports = {
  readonly methodName: string;
  readonly service: typeof Ana;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_ana_pb.SetCustomReportsEnabledReq;
  readonly responseType: typeof api_v0alpha_ana_pb.SetCustomReportsEnabledRes;
};

type AnaMakeAdoptable = {
  readonly methodName: string;
  readonly service: typeof Ana;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_ana_pb.MakeAdoptableReq;
  readonly responseType: typeof api_v0alpha_ana_pb.MakeAdoptableRes;
};

type AnaMakeUnadoptable = {
  readonly methodName: string;
  readonly service: typeof Ana;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_ana_pb.MakeAdoptableReq;
  readonly responseType: typeof api_v0alpha_ana_pb.MakeAdoptableRes;
};

type AnaAdoptAnaAccount = {
  readonly methodName: string;
  readonly service: typeof Ana;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_ana_pb.SetAnaAccountRelationReq;
  readonly responseType: typeof api_v0alpha_ana_pb.SetAnaAccountRelationRes;
};

type AnaDisownAnaAccount = {
  readonly methodName: string;
  readonly service: typeof Ana;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_ana_pb.SetAnaAccountRelationReq;
  readonly responseType: typeof api_v0alpha_ana_pb.SetAnaAccountRelationRes;
};

type AnaGetAccessibleClients = {
  readonly methodName: string;
  readonly service: typeof Ana;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_ana_pb.GetAccessibleClientsReq;
  readonly responseType: typeof api_v0alpha_ana_pb.SimpleRelations;
};

type AnaGetFamily = {
  readonly methodName: string;
  readonly service: typeof Ana;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_ana_pb.GetFamilyReq;
  readonly responseType: typeof api_v0alpha_ana_pb.Family;
};

type AnaGetAllowedDataVisibility = {
  readonly methodName: string;
  readonly service: typeof Ana;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_ana_pb.GetVisibilityReq;
  readonly responseType: typeof api_v0alpha_ana_pb.DataVisibility;
};

type AnaGetCurrentDataVisibility = {
  readonly methodName: string;
  readonly service: typeof Ana;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_ana_pb.GetVisibilityReq;
  readonly responseType: typeof api_v0alpha_ana_pb.DataVisibility;
};

type AnaGetIndicesVisibility = {
  readonly methodName: string;
  readonly service: typeof Ana;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_ana_pb.GetVisibilityReq;
  readonly responseType: typeof api_v0alpha_ana_pb.IndicesVisibility;
};

type AnaGetAuditableDataVisibility = {
  readonly methodName: string;
  readonly service: typeof Ana;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_ana_pb.GetVisibilityReq;
  readonly responseType: typeof api_v0alpha_ana_pb.DataVisibility;
};

type AnaGetOrganizationNames = {
  readonly methodName: string;
  readonly service: typeof Ana;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_ana_pb.GetOrganizationNamesReq;
  readonly responseType: typeof api_v0alpha_ana_pb.GetOrganizationNamesRes;
};

type AnaGenerateVizDataById = {
  readonly methodName: string;
  readonly service: typeof Ana;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_ana_pb.GenerateVizDataByIdReq;
  readonly responseType: typeof api_v0alpha_ana_pb.GenerateVizDataByIdRes;
};

type AnaGetClientStatus = {
  readonly methodName: string;
  readonly service: typeof Ana;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_ana_pb.GetClientStatusReq;
  readonly responseType: typeof api_v0alpha_ana_pb.GetClientStatusResp;
};

type AnaReloadClientData = {
  readonly methodName: string;
  readonly service: typeof Ana;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_ana_pb.ReloadClientDataReq;
  readonly responseType: typeof api_v0alpha_ana_pb.ReloadClientDataResp;
};

type AnaListVisualizationsLegacy = {
  readonly methodName: string;
  readonly service: typeof Ana;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_ana_pb.ListVisualizationsLegacyReq;
  readonly responseType: typeof api_v0alpha_ana_pb.ListVisualizationsLegacyRes;
};

export class Ana {
  static readonly serviceName: string;
  static readonly GetSpecifiedVisualizations: AnaGetSpecifiedVisualizations;
  static readonly RegisterAccount: AnaRegisterAccount;
  static readonly SetWeeks: AnaSetWeeks;
  static readonly SetDefaultTimeFilter: AnaSetDefaultTimeFilter;
  static readonly SetDefaultDashboard: AnaSetDefaultDashboard;
  static readonly GetAccount: AnaGetAccount;
  static readonly GetSpecifiedAccount: AnaGetSpecifiedAccount;
  static readonly GetAuthorizedAnalyticsLink: AnaGetAuthorizedAnalyticsLink;
  static readonly GenerateMonthlyBilling: AnaGenerateMonthlyBilling;
  static readonly GetTimeZone: AnaGetTimeZone;
  static readonly SetTimeZone: AnaSetTimeZone;
  static readonly CopyDashViz: AnaCopyDashViz;
  static readonly GetSpecifiedBillingSummary: AnaGetSpecifiedBillingSummary;
  static readonly GetBillingSummary: AnaGetBillingSummary;
  static readonly EnableCustomReports: AnaEnableCustomReports;
  static readonly DisableCustomReports: AnaDisableCustomReports;
  static readonly MakeAdoptable: AnaMakeAdoptable;
  static readonly MakeUnadoptable: AnaMakeUnadoptable;
  static readonly AdoptAnaAccount: AnaAdoptAnaAccount;
  static readonly DisownAnaAccount: AnaDisownAnaAccount;
  static readonly GetAccessibleClients: AnaGetAccessibleClients;
  static readonly GetFamily: AnaGetFamily;
  static readonly GetAllowedDataVisibility: AnaGetAllowedDataVisibility;
  static readonly GetCurrentDataVisibility: AnaGetCurrentDataVisibility;
  static readonly GetIndicesVisibility: AnaGetIndicesVisibility;
  static readonly GetAuditableDataVisibility: AnaGetAuditableDataVisibility;
  static readonly GetOrganizationNames: AnaGetOrganizationNames;
  static readonly GenerateVizDataById: AnaGenerateVizDataById;
  static readonly GetClientStatus: AnaGetClientStatus;
  static readonly ReloadClientData: AnaReloadClientData;
  static readonly ListVisualizationsLegacy: AnaListVisualizationsLegacy;
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

export class AnaClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getSpecifiedVisualizations(
    requestMessage: api_v0alpha_ana_pb.GetSpecifiedVisualizationsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.Visualizations|null) => void
  ): UnaryResponse;
  getSpecifiedVisualizations(
    requestMessage: api_v0alpha_ana_pb.GetSpecifiedVisualizationsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.Visualizations|null) => void
  ): UnaryResponse;
  registerAccount(
    requestMessage: api_v0alpha_ana_pb.RegisterAccountReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.AnaAccount|null) => void
  ): UnaryResponse;
  registerAccount(
    requestMessage: api_v0alpha_ana_pb.RegisterAccountReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.AnaAccount|null) => void
  ): UnaryResponse;
  setWeeks(
    requestMessage: api_v0alpha_ana_pb.SetWeeksReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.SetWeeksRes|null) => void
  ): UnaryResponse;
  setWeeks(
    requestMessage: api_v0alpha_ana_pb.SetWeeksReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.SetWeeksRes|null) => void
  ): UnaryResponse;
  setDefaultTimeFilter(
    requestMessage: api_v0alpha_ana_pb.SetDefaultTimeFilterReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.SetDefaultTimeFilterRes|null) => void
  ): UnaryResponse;
  setDefaultTimeFilter(
    requestMessage: api_v0alpha_ana_pb.SetDefaultTimeFilterReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.SetDefaultTimeFilterRes|null) => void
  ): UnaryResponse;
  setDefaultDashboard(
    requestMessage: api_v0alpha_ana_pb.SetDefaultDashboardReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.SetDefaultDashboardRes|null) => void
  ): UnaryResponse;
  setDefaultDashboard(
    requestMessage: api_v0alpha_ana_pb.SetDefaultDashboardReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.SetDefaultDashboardRes|null) => void
  ): UnaryResponse;
  getAccount(
    requestMessage: api_v0alpha_ana_pb.GetAccountReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.AnaAccount|null) => void
  ): UnaryResponse;
  getAccount(
    requestMessage: api_v0alpha_ana_pb.GetAccountReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.AnaAccount|null) => void
  ): UnaryResponse;
  getSpecifiedAccount(
    requestMessage: api_v0alpha_ana_pb.GetSpecifiedAccountReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.AnaAccount|null) => void
  ): UnaryResponse;
  getSpecifiedAccount(
    requestMessage: api_v0alpha_ana_pb.GetSpecifiedAccountReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.AnaAccount|null) => void
  ): UnaryResponse;
  getAuthorizedAnalyticsLink(
    requestMessage: api_v0alpha_ana_pb.GetAuthorizedAnalyticsLinkReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.GetAuthorizedAnalyticsLinkRes|null) => void
  ): UnaryResponse;
  getAuthorizedAnalyticsLink(
    requestMessage: api_v0alpha_ana_pb.GetAuthorizedAnalyticsLinkReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.GetAuthorizedAnalyticsLinkRes|null) => void
  ): UnaryResponse;
  generateMonthlyBilling(
    requestMessage: api_v0alpha_ana_pb.GenerateMonthlyBillingReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.GenerateMonthlyBillingRes|null) => void
  ): UnaryResponse;
  generateMonthlyBilling(
    requestMessage: api_v0alpha_ana_pb.GenerateMonthlyBillingReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.GenerateMonthlyBillingRes|null) => void
  ): UnaryResponse;
  getTimeZone(
    requestMessage: api_v0alpha_ana_pb.GetTimeZoneReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.TimeZone|null) => void
  ): UnaryResponse;
  getTimeZone(
    requestMessage: api_v0alpha_ana_pb.GetTimeZoneReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.TimeZone|null) => void
  ): UnaryResponse;
  setTimeZone(
    requestMessage: api_v0alpha_ana_pb.SetTimeZoneReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.SetTimeZoneRes|null) => void
  ): UnaryResponse;
  setTimeZone(
    requestMessage: api_v0alpha_ana_pb.SetTimeZoneReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.SetTimeZoneRes|null) => void
  ): UnaryResponse;
  copyDashViz(
    requestMessage: api_v0alpha_ana_pb.CopyDashVizReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.CopyDashVizRes|null) => void
  ): UnaryResponse;
  copyDashViz(
    requestMessage: api_v0alpha_ana_pb.CopyDashVizReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.CopyDashVizRes|null) => void
  ): UnaryResponse;
  getSpecifiedBillingSummary(
    requestMessage: api_v0alpha_ana_pb.GetSpecifiedBillingSummaryReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.BillingSummary|null) => void
  ): UnaryResponse;
  getSpecifiedBillingSummary(
    requestMessage: api_v0alpha_ana_pb.GetSpecifiedBillingSummaryReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.BillingSummary|null) => void
  ): UnaryResponse;
  getBillingSummary(
    requestMessage: api_v0alpha_ana_pb.GetBillingSummaryReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.BillingSummary|null) => void
  ): UnaryResponse;
  getBillingSummary(
    requestMessage: api_v0alpha_ana_pb.GetBillingSummaryReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.BillingSummary|null) => void
  ): UnaryResponse;
  enableCustomReports(
    requestMessage: api_v0alpha_ana_pb.SetCustomReportsEnabledReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.SetCustomReportsEnabledRes|null) => void
  ): UnaryResponse;
  enableCustomReports(
    requestMessage: api_v0alpha_ana_pb.SetCustomReportsEnabledReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.SetCustomReportsEnabledRes|null) => void
  ): UnaryResponse;
  disableCustomReports(
    requestMessage: api_v0alpha_ana_pb.SetCustomReportsEnabledReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.SetCustomReportsEnabledRes|null) => void
  ): UnaryResponse;
  disableCustomReports(
    requestMessage: api_v0alpha_ana_pb.SetCustomReportsEnabledReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.SetCustomReportsEnabledRes|null) => void
  ): UnaryResponse;
  makeAdoptable(
    requestMessage: api_v0alpha_ana_pb.MakeAdoptableReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.MakeAdoptableRes|null) => void
  ): UnaryResponse;
  makeAdoptable(
    requestMessage: api_v0alpha_ana_pb.MakeAdoptableReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.MakeAdoptableRes|null) => void
  ): UnaryResponse;
  makeUnadoptable(
    requestMessage: api_v0alpha_ana_pb.MakeAdoptableReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.MakeAdoptableRes|null) => void
  ): UnaryResponse;
  makeUnadoptable(
    requestMessage: api_v0alpha_ana_pb.MakeAdoptableReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.MakeAdoptableRes|null) => void
  ): UnaryResponse;
  adoptAnaAccount(
    requestMessage: api_v0alpha_ana_pb.SetAnaAccountRelationReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.SetAnaAccountRelationRes|null) => void
  ): UnaryResponse;
  adoptAnaAccount(
    requestMessage: api_v0alpha_ana_pb.SetAnaAccountRelationReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.SetAnaAccountRelationRes|null) => void
  ): UnaryResponse;
  disownAnaAccount(
    requestMessage: api_v0alpha_ana_pb.SetAnaAccountRelationReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.SetAnaAccountRelationRes|null) => void
  ): UnaryResponse;
  disownAnaAccount(
    requestMessage: api_v0alpha_ana_pb.SetAnaAccountRelationReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.SetAnaAccountRelationRes|null) => void
  ): UnaryResponse;
  getAccessibleClients(
    requestMessage: api_v0alpha_ana_pb.GetAccessibleClientsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.SimpleRelations|null) => void
  ): UnaryResponse;
  getAccessibleClients(
    requestMessage: api_v0alpha_ana_pb.GetAccessibleClientsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.SimpleRelations|null) => void
  ): UnaryResponse;
  getFamily(
    requestMessage: api_v0alpha_ana_pb.GetFamilyReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.Family|null) => void
  ): UnaryResponse;
  getFamily(
    requestMessage: api_v0alpha_ana_pb.GetFamilyReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.Family|null) => void
  ): UnaryResponse;
  getAllowedDataVisibility(
    requestMessage: api_v0alpha_ana_pb.GetVisibilityReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.DataVisibility|null) => void
  ): UnaryResponse;
  getAllowedDataVisibility(
    requestMessage: api_v0alpha_ana_pb.GetVisibilityReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.DataVisibility|null) => void
  ): UnaryResponse;
  getCurrentDataVisibility(
    requestMessage: api_v0alpha_ana_pb.GetVisibilityReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.DataVisibility|null) => void
  ): UnaryResponse;
  getCurrentDataVisibility(
    requestMessage: api_v0alpha_ana_pb.GetVisibilityReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.DataVisibility|null) => void
  ): UnaryResponse;
  getIndicesVisibility(
    requestMessage: api_v0alpha_ana_pb.GetVisibilityReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.IndicesVisibility|null) => void
  ): UnaryResponse;
  getIndicesVisibility(
    requestMessage: api_v0alpha_ana_pb.GetVisibilityReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.IndicesVisibility|null) => void
  ): UnaryResponse;
  getAuditableDataVisibility(
    requestMessage: api_v0alpha_ana_pb.GetVisibilityReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.DataVisibility|null) => void
  ): UnaryResponse;
  getAuditableDataVisibility(
    requestMessage: api_v0alpha_ana_pb.GetVisibilityReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.DataVisibility|null) => void
  ): UnaryResponse;
  getOrganizationNames(
    requestMessage: api_v0alpha_ana_pb.GetOrganizationNamesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.GetOrganizationNamesRes|null) => void
  ): UnaryResponse;
  getOrganizationNames(
    requestMessage: api_v0alpha_ana_pb.GetOrganizationNamesReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.GetOrganizationNamesRes|null) => void
  ): UnaryResponse;
  generateVizDataById(
    requestMessage: api_v0alpha_ana_pb.GenerateVizDataByIdReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.GenerateVizDataByIdRes|null) => void
  ): UnaryResponse;
  generateVizDataById(
    requestMessage: api_v0alpha_ana_pb.GenerateVizDataByIdReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.GenerateVizDataByIdRes|null) => void
  ): UnaryResponse;
  getClientStatus(
    requestMessage: api_v0alpha_ana_pb.GetClientStatusReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.GetClientStatusResp|null) => void
  ): UnaryResponse;
  getClientStatus(
    requestMessage: api_v0alpha_ana_pb.GetClientStatusReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.GetClientStatusResp|null) => void
  ): UnaryResponse;
  reloadClientData(
    requestMessage: api_v0alpha_ana_pb.ReloadClientDataReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.ReloadClientDataResp|null) => void
  ): UnaryResponse;
  reloadClientData(
    requestMessage: api_v0alpha_ana_pb.ReloadClientDataReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.ReloadClientDataResp|null) => void
  ): UnaryResponse;
  listVisualizationsLegacy(
    requestMessage: api_v0alpha_ana_pb.ListVisualizationsLegacyReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.ListVisualizationsLegacyRes|null) => void
  ): UnaryResponse;
  listVisualizationsLegacy(
    requestMessage: api_v0alpha_ana_pb.ListVisualizationsLegacyReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_ana_pb.ListVisualizationsLegacyRes|null) => void
  ): UnaryResponse;
}

