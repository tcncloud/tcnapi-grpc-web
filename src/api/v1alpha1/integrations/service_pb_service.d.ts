// package: api.v1alpha1.integrations
// file: api/v1alpha1/integrations/service.proto

import * as api_v1alpha1_integrations_service_pb from "../../../api/v1alpha1/integrations/service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type IntegrationsProcess = {
  readonly methodName: string;
  readonly service: typeof Integrations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_service_pb.ProcessReq;
  readonly responseType: typeof api_v1alpha1_integrations_service_pb.ProcessRes;
};

type IntegrationsGetIntegrationTransaction = {
  readonly methodName: string;
  readonly service: typeof Integrations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_service_pb.GetIntegrationTransactionReq;
  readonly responseType: typeof api_v1alpha1_integrations_service_pb.IntegrationTransaction;
};

type IntegrationsGetIntegrationTransactionReport = {
  readonly methodName: string;
  readonly service: typeof Integrations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_service_pb.GetIntegrationTransactionReportReq;
  readonly responseType: typeof api_v1alpha1_integrations_service_pb.GetIntegrationTransactionReportRes;
};

type IntegrationsGetIntegrationTransactionReportData = {
  readonly methodName: string;
  readonly service: typeof Integrations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_service_pb.GetIntegrationTransactionReportDataReq;
  readonly responseType: typeof api_v1alpha1_integrations_service_pb.GetIntegrationTransactionReportDataRes;
};

type IntegrationsSearchPastTransactions = {
  readonly methodName: string;
  readonly service: typeof Integrations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_service_pb.SearchPastTransactionsRequest;
  readonly responseType: typeof api_v1alpha1_integrations_service_pb.SearchPastTransactionsResponse;
};

type IntegrationsGetAggregatedMetadata = {
  readonly methodName: string;
  readonly service: typeof Integrations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_service_pb.GetAggregatedMetadataReq;
  readonly responseType: typeof api_v1alpha1_integrations_service_pb.GetAggregatedMetadataRes;
};

type IntegrationsGetPortalLinksByDateRange = {
  readonly methodName: string;
  readonly service: typeof Integrations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_service_pb.GetPortalLinksByDateRangeReq;
  readonly responseType: typeof api_v1alpha1_integrations_service_pb.GetPortalLinksByDateRangeRes;
};

type IntegrationsCreateIntegrationConfig = {
  readonly methodName: string;
  readonly service: typeof Integrations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_service_pb.IntegrationConfig;
  readonly responseType: typeof api_v1alpha1_integrations_service_pb.Empty;
};

type IntegrationsGetIntegrationConfig = {
  readonly methodName: string;
  readonly service: typeof Integrations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_service_pb.GetIntegrationConfigReq;
  readonly responseType: typeof api_v1alpha1_integrations_service_pb.IntegrationConfig;
};

type IntegrationsUpdateIntegrationConfig = {
  readonly methodName: string;
  readonly service: typeof Integrations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_service_pb.UpdateIntegrationConfigReq;
  readonly responseType: typeof api_v1alpha1_integrations_service_pb.Empty;
};

type IntegrationsDeleteIntegrationConfig = {
  readonly methodName: string;
  readonly service: typeof Integrations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_service_pb.DeleteIntegrationConfigReq;
  readonly responseType: typeof api_v1alpha1_integrations_service_pb.Empty;
};

type IntegrationsListIntegrations = {
  readonly methodName: string;
  readonly service: typeof Integrations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_service_pb.Empty;
  readonly responseType: typeof api_v1alpha1_integrations_service_pb.IntegrationInfos;
};

type IntegrationsListIntegrationsForOrg = {
  readonly methodName: string;
  readonly service: typeof Integrations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_service_pb.ListIntegrationsForOrgReq;
  readonly responseType: typeof api_v1alpha1_integrations_service_pb.IntegrationInfos;
};

type IntegrationsListIntegrationConfigNames = {
  readonly methodName: string;
  readonly service: typeof Integrations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_service_pb.ListIntegrationConfigNamesReq;
  readonly responseType: typeof api_v1alpha1_integrations_service_pb.ListIntegrationConfigNamesRes;
};

type IntegrationsListJourneyConfigs = {
  readonly methodName: string;
  readonly service: typeof Integrations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_service_pb.ListJourneyConfigsReq;
  readonly responseType: typeof api_v1alpha1_integrations_service_pb.IntegrationConfigs;
};

type IntegrationsListNonJourneyConfigs = {
  readonly methodName: string;
  readonly service: typeof Integrations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_service_pb.ListNonJourneyConfigsReq;
  readonly responseType: typeof api_v1alpha1_integrations_service_pb.IntegrationConfigs;
};

type IntegrationsCreatePortalConfig = {
  readonly methodName: string;
  readonly service: typeof Integrations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_service_pb.PortalConfig;
  readonly responseType: typeof api_v1alpha1_integrations_service_pb.Empty;
};

type IntegrationsListPortalConfigs = {
  readonly methodName: string;
  readonly service: typeof Integrations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_service_pb.ListPortalConfigsReq;
  readonly responseType: typeof api_v1alpha1_integrations_service_pb.PortalConfigs;
};

type IntegrationsUpdatePortalConfig = {
  readonly methodName: string;
  readonly service: typeof Integrations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_service_pb.PortalConfig;
  readonly responseType: typeof api_v1alpha1_integrations_service_pb.Empty;
};

type IntegrationsGetPortalConfig = {
  readonly methodName: string;
  readonly service: typeof Integrations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_service_pb.GetPortalConfigReq;
  readonly responseType: typeof api_v1alpha1_integrations_service_pb.PortalConfig;
};

type IntegrationsDeletePortalConfig = {
  readonly methodName: string;
  readonly service: typeof Integrations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_service_pb.DeletePortalConfigReq;
  readonly responseType: typeof api_v1alpha1_integrations_service_pb.Empty;
};

type IntegrationsUpdatePortalLogo = {
  readonly methodName: string;
  readonly service: typeof Integrations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_service_pb.UpdatePortalLogoReq;
  readonly responseType: typeof api_v1alpha1_integrations_service_pb.Empty;
};

type IntegrationsGetPortalLogo = {
  readonly methodName: string;
  readonly service: typeof Integrations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_service_pb.GetPortalLogoReq;
  readonly responseType: typeof api_v1alpha1_integrations_service_pb.Logo;
};

type IntegrationsCreatePaymentPortalLinks = {
  readonly methodName: string;
  readonly service: typeof Integrations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_service_pb.CreatePaymentPortalLinksReq;
  readonly responseType: typeof api_v1alpha1_integrations_service_pb.CreatePaymentPortalLinksRes;
};

type IntegrationsSummary = {
  readonly methodName: string;
  readonly service: typeof Integrations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_service_pb.SummaryReq;
  readonly responseType: typeof api_v1alpha1_integrations_service_pb.SummaryRes;
};

type IntegrationsListIntegrationTemplatesByConfig = {
  readonly methodName: string;
  readonly service: typeof Integrations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_service_pb.ListIntegrationTemplatesByConfigReq;
  readonly responseType: typeof api_v1alpha1_integrations_service_pb.ListIntegrationTemplatesByConfigRes;
};

type IntegrationsCallEpicPatient = {
  readonly methodName: string;
  readonly service: typeof Integrations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_service_pb.CallEpicPatientReq;
  readonly responseType: typeof api_v1alpha1_integrations_service_pb.CallEpicPatientRes;
};

type IntegrationsHangUpEpicPatientCall = {
  readonly methodName: string;
  readonly service: typeof Integrations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_service_pb.HangUpEpicPatientCallReq;
  readonly responseType: typeof api_v1alpha1_integrations_service_pb.Empty;
};

type IntegrationsGenerateEpicKeyPairs = {
  readonly methodName: string;
  readonly service: typeof Integrations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_service_pb.GenerateEpicKeyPairReq;
  readonly responseType: typeof api_v1alpha1_integrations_service_pb.GenerateEpicKeyPairRes;
};

type IntegrationsPopulateIntegrationLink = {
  readonly methodName: string;
  readonly service: typeof Integrations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_service_pb.PopulateIntegrationLinkReq;
  readonly responseType: typeof api_v1alpha1_integrations_service_pb.PopulateIntegrationLinkRes;
};

type IntegrationsProcessWorkflow = {
  readonly methodName: string;
  readonly service: typeof Integrations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_service_pb.ProcessWorkflowReq;
  readonly responseType: typeof api_v1alpha1_integrations_service_pb.ProcessWorkflowRes;
};

type IntegrationsInsertPrivateField = {
  readonly methodName: string;
  readonly service: typeof Integrations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_service_pb.InsertPrivateFieldReq;
  readonly responseType: typeof api_v1alpha1_integrations_service_pb.InsertPrivateFieldRes;
};

type IntegrationsCalculateFees = {
  readonly methodName: string;
  readonly service: typeof Integrations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_service_pb.CalculateFeesReq;
  readonly responseType: typeof api_v1alpha1_integrations_service_pb.CalculateFeesRes;
};

type IntegrationsDeliverReceipt = {
  readonly methodName: string;
  readonly service: typeof Integrations;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_service_pb.DeliverReceiptReq;
  readonly responseType: typeof api_v1alpha1_integrations_service_pb.DeliverReceiptRes;
};

export class Integrations {
  static readonly serviceName: string;
  static readonly Process: IntegrationsProcess;
  static readonly GetIntegrationTransaction: IntegrationsGetIntegrationTransaction;
  static readonly GetIntegrationTransactionReport: IntegrationsGetIntegrationTransactionReport;
  static readonly GetIntegrationTransactionReportData: IntegrationsGetIntegrationTransactionReportData;
  static readonly SearchPastTransactions: IntegrationsSearchPastTransactions;
  static readonly GetAggregatedMetadata: IntegrationsGetAggregatedMetadata;
  static readonly GetPortalLinksByDateRange: IntegrationsGetPortalLinksByDateRange;
  static readonly CreateIntegrationConfig: IntegrationsCreateIntegrationConfig;
  static readonly GetIntegrationConfig: IntegrationsGetIntegrationConfig;
  static readonly UpdateIntegrationConfig: IntegrationsUpdateIntegrationConfig;
  static readonly DeleteIntegrationConfig: IntegrationsDeleteIntegrationConfig;
  static readonly ListIntegrations: IntegrationsListIntegrations;
  static readonly ListIntegrationsForOrg: IntegrationsListIntegrationsForOrg;
  static readonly ListIntegrationConfigNames: IntegrationsListIntegrationConfigNames;
  static readonly ListJourneyConfigs: IntegrationsListJourneyConfigs;
  static readonly ListNonJourneyConfigs: IntegrationsListNonJourneyConfigs;
  static readonly CreatePortalConfig: IntegrationsCreatePortalConfig;
  static readonly ListPortalConfigs: IntegrationsListPortalConfigs;
  static readonly UpdatePortalConfig: IntegrationsUpdatePortalConfig;
  static readonly GetPortalConfig: IntegrationsGetPortalConfig;
  static readonly DeletePortalConfig: IntegrationsDeletePortalConfig;
  static readonly UpdatePortalLogo: IntegrationsUpdatePortalLogo;
  static readonly GetPortalLogo: IntegrationsGetPortalLogo;
  static readonly CreatePaymentPortalLinks: IntegrationsCreatePaymentPortalLinks;
  static readonly Summary: IntegrationsSummary;
  static readonly ListIntegrationTemplatesByConfig: IntegrationsListIntegrationTemplatesByConfig;
  static readonly CallEpicPatient: IntegrationsCallEpicPatient;
  static readonly HangUpEpicPatientCall: IntegrationsHangUpEpicPatientCall;
  static readonly GenerateEpicKeyPairs: IntegrationsGenerateEpicKeyPairs;
  static readonly PopulateIntegrationLink: IntegrationsPopulateIntegrationLink;
  static readonly ProcessWorkflow: IntegrationsProcessWorkflow;
  static readonly InsertPrivateField: IntegrationsInsertPrivateField;
  static readonly CalculateFees: IntegrationsCalculateFees;
  static readonly DeliverReceipt: IntegrationsDeliverReceipt;
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

export class IntegrationsClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  process(
    requestMessage: api_v1alpha1_integrations_service_pb.ProcessReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.ProcessRes|null) => void
  ): UnaryResponse;
  process(
    requestMessage: api_v1alpha1_integrations_service_pb.ProcessReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.ProcessRes|null) => void
  ): UnaryResponse;
  getIntegrationTransaction(
    requestMessage: api_v1alpha1_integrations_service_pb.GetIntegrationTransactionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.IntegrationTransaction|null) => void
  ): UnaryResponse;
  getIntegrationTransaction(
    requestMessage: api_v1alpha1_integrations_service_pb.GetIntegrationTransactionReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.IntegrationTransaction|null) => void
  ): UnaryResponse;
  getIntegrationTransactionReport(
    requestMessage: api_v1alpha1_integrations_service_pb.GetIntegrationTransactionReportReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.GetIntegrationTransactionReportRes|null) => void
  ): UnaryResponse;
  getIntegrationTransactionReport(
    requestMessage: api_v1alpha1_integrations_service_pb.GetIntegrationTransactionReportReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.GetIntegrationTransactionReportRes|null) => void
  ): UnaryResponse;
  getIntegrationTransactionReportData(
    requestMessage: api_v1alpha1_integrations_service_pb.GetIntegrationTransactionReportDataReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.GetIntegrationTransactionReportDataRes|null) => void
  ): UnaryResponse;
  getIntegrationTransactionReportData(
    requestMessage: api_v1alpha1_integrations_service_pb.GetIntegrationTransactionReportDataReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.GetIntegrationTransactionReportDataRes|null) => void
  ): UnaryResponse;
  searchPastTransactions(
    requestMessage: api_v1alpha1_integrations_service_pb.SearchPastTransactionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.SearchPastTransactionsResponse|null) => void
  ): UnaryResponse;
  searchPastTransactions(
    requestMessage: api_v1alpha1_integrations_service_pb.SearchPastTransactionsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.SearchPastTransactionsResponse|null) => void
  ): UnaryResponse;
  getAggregatedMetadata(
    requestMessage: api_v1alpha1_integrations_service_pb.GetAggregatedMetadataReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.GetAggregatedMetadataRes|null) => void
  ): UnaryResponse;
  getAggregatedMetadata(
    requestMessage: api_v1alpha1_integrations_service_pb.GetAggregatedMetadataReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.GetAggregatedMetadataRes|null) => void
  ): UnaryResponse;
  getPortalLinksByDateRange(
    requestMessage: api_v1alpha1_integrations_service_pb.GetPortalLinksByDateRangeReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.GetPortalLinksByDateRangeRes|null) => void
  ): UnaryResponse;
  getPortalLinksByDateRange(
    requestMessage: api_v1alpha1_integrations_service_pb.GetPortalLinksByDateRangeReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.GetPortalLinksByDateRangeRes|null) => void
  ): UnaryResponse;
  createIntegrationConfig(
    requestMessage: api_v1alpha1_integrations_service_pb.IntegrationConfig,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.Empty|null) => void
  ): UnaryResponse;
  createIntegrationConfig(
    requestMessage: api_v1alpha1_integrations_service_pb.IntegrationConfig,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.Empty|null) => void
  ): UnaryResponse;
  getIntegrationConfig(
    requestMessage: api_v1alpha1_integrations_service_pb.GetIntegrationConfigReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.IntegrationConfig|null) => void
  ): UnaryResponse;
  getIntegrationConfig(
    requestMessage: api_v1alpha1_integrations_service_pb.GetIntegrationConfigReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.IntegrationConfig|null) => void
  ): UnaryResponse;
  updateIntegrationConfig(
    requestMessage: api_v1alpha1_integrations_service_pb.UpdateIntegrationConfigReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.Empty|null) => void
  ): UnaryResponse;
  updateIntegrationConfig(
    requestMessage: api_v1alpha1_integrations_service_pb.UpdateIntegrationConfigReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.Empty|null) => void
  ): UnaryResponse;
  deleteIntegrationConfig(
    requestMessage: api_v1alpha1_integrations_service_pb.DeleteIntegrationConfigReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.Empty|null) => void
  ): UnaryResponse;
  deleteIntegrationConfig(
    requestMessage: api_v1alpha1_integrations_service_pb.DeleteIntegrationConfigReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.Empty|null) => void
  ): UnaryResponse;
  listIntegrations(
    requestMessage: api_v1alpha1_integrations_service_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.IntegrationInfos|null) => void
  ): UnaryResponse;
  listIntegrations(
    requestMessage: api_v1alpha1_integrations_service_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.IntegrationInfos|null) => void
  ): UnaryResponse;
  listIntegrationsForOrg(
    requestMessage: api_v1alpha1_integrations_service_pb.ListIntegrationsForOrgReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.IntegrationInfos|null) => void
  ): UnaryResponse;
  listIntegrationsForOrg(
    requestMessage: api_v1alpha1_integrations_service_pb.ListIntegrationsForOrgReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.IntegrationInfos|null) => void
  ): UnaryResponse;
  listIntegrationConfigNames(
    requestMessage: api_v1alpha1_integrations_service_pb.ListIntegrationConfigNamesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.ListIntegrationConfigNamesRes|null) => void
  ): UnaryResponse;
  listIntegrationConfigNames(
    requestMessage: api_v1alpha1_integrations_service_pb.ListIntegrationConfigNamesReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.ListIntegrationConfigNamesRes|null) => void
  ): UnaryResponse;
  listJourneyConfigs(
    requestMessage: api_v1alpha1_integrations_service_pb.ListJourneyConfigsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.IntegrationConfigs|null) => void
  ): UnaryResponse;
  listJourneyConfigs(
    requestMessage: api_v1alpha1_integrations_service_pb.ListJourneyConfigsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.IntegrationConfigs|null) => void
  ): UnaryResponse;
  listNonJourneyConfigs(
    requestMessage: api_v1alpha1_integrations_service_pb.ListNonJourneyConfigsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.IntegrationConfigs|null) => void
  ): UnaryResponse;
  listNonJourneyConfigs(
    requestMessage: api_v1alpha1_integrations_service_pb.ListNonJourneyConfigsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.IntegrationConfigs|null) => void
  ): UnaryResponse;
  createPortalConfig(
    requestMessage: api_v1alpha1_integrations_service_pb.PortalConfig,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.Empty|null) => void
  ): UnaryResponse;
  createPortalConfig(
    requestMessage: api_v1alpha1_integrations_service_pb.PortalConfig,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.Empty|null) => void
  ): UnaryResponse;
  listPortalConfigs(
    requestMessage: api_v1alpha1_integrations_service_pb.ListPortalConfigsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.PortalConfigs|null) => void
  ): UnaryResponse;
  listPortalConfigs(
    requestMessage: api_v1alpha1_integrations_service_pb.ListPortalConfigsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.PortalConfigs|null) => void
  ): UnaryResponse;
  updatePortalConfig(
    requestMessage: api_v1alpha1_integrations_service_pb.PortalConfig,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.Empty|null) => void
  ): UnaryResponse;
  updatePortalConfig(
    requestMessage: api_v1alpha1_integrations_service_pb.PortalConfig,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.Empty|null) => void
  ): UnaryResponse;
  getPortalConfig(
    requestMessage: api_v1alpha1_integrations_service_pb.GetPortalConfigReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.PortalConfig|null) => void
  ): UnaryResponse;
  getPortalConfig(
    requestMessage: api_v1alpha1_integrations_service_pb.GetPortalConfigReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.PortalConfig|null) => void
  ): UnaryResponse;
  deletePortalConfig(
    requestMessage: api_v1alpha1_integrations_service_pb.DeletePortalConfigReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.Empty|null) => void
  ): UnaryResponse;
  deletePortalConfig(
    requestMessage: api_v1alpha1_integrations_service_pb.DeletePortalConfigReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.Empty|null) => void
  ): UnaryResponse;
  updatePortalLogo(
    requestMessage: api_v1alpha1_integrations_service_pb.UpdatePortalLogoReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.Empty|null) => void
  ): UnaryResponse;
  updatePortalLogo(
    requestMessage: api_v1alpha1_integrations_service_pb.UpdatePortalLogoReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.Empty|null) => void
  ): UnaryResponse;
  getPortalLogo(
    requestMessage: api_v1alpha1_integrations_service_pb.GetPortalLogoReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.Logo|null) => void
  ): UnaryResponse;
  getPortalLogo(
    requestMessage: api_v1alpha1_integrations_service_pb.GetPortalLogoReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.Logo|null) => void
  ): UnaryResponse;
  createPaymentPortalLinks(
    requestMessage: api_v1alpha1_integrations_service_pb.CreatePaymentPortalLinksReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.CreatePaymentPortalLinksRes|null) => void
  ): UnaryResponse;
  createPaymentPortalLinks(
    requestMessage: api_v1alpha1_integrations_service_pb.CreatePaymentPortalLinksReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.CreatePaymentPortalLinksRes|null) => void
  ): UnaryResponse;
  summary(
    requestMessage: api_v1alpha1_integrations_service_pb.SummaryReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.SummaryRes|null) => void
  ): UnaryResponse;
  summary(
    requestMessage: api_v1alpha1_integrations_service_pb.SummaryReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.SummaryRes|null) => void
  ): UnaryResponse;
  listIntegrationTemplatesByConfig(
    requestMessage: api_v1alpha1_integrations_service_pb.ListIntegrationTemplatesByConfigReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.ListIntegrationTemplatesByConfigRes|null) => void
  ): UnaryResponse;
  listIntegrationTemplatesByConfig(
    requestMessage: api_v1alpha1_integrations_service_pb.ListIntegrationTemplatesByConfigReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.ListIntegrationTemplatesByConfigRes|null) => void
  ): UnaryResponse;
  callEpicPatient(
    requestMessage: api_v1alpha1_integrations_service_pb.CallEpicPatientReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.CallEpicPatientRes|null) => void
  ): UnaryResponse;
  callEpicPatient(
    requestMessage: api_v1alpha1_integrations_service_pb.CallEpicPatientReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.CallEpicPatientRes|null) => void
  ): UnaryResponse;
  hangUpEpicPatientCall(
    requestMessage: api_v1alpha1_integrations_service_pb.HangUpEpicPatientCallReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.Empty|null) => void
  ): UnaryResponse;
  hangUpEpicPatientCall(
    requestMessage: api_v1alpha1_integrations_service_pb.HangUpEpicPatientCallReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.Empty|null) => void
  ): UnaryResponse;
  generateEpicKeyPairs(
    requestMessage: api_v1alpha1_integrations_service_pb.GenerateEpicKeyPairReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.GenerateEpicKeyPairRes|null) => void
  ): UnaryResponse;
  generateEpicKeyPairs(
    requestMessage: api_v1alpha1_integrations_service_pb.GenerateEpicKeyPairReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.GenerateEpicKeyPairRes|null) => void
  ): UnaryResponse;
  populateIntegrationLink(
    requestMessage: api_v1alpha1_integrations_service_pb.PopulateIntegrationLinkReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.PopulateIntegrationLinkRes|null) => void
  ): UnaryResponse;
  populateIntegrationLink(
    requestMessage: api_v1alpha1_integrations_service_pb.PopulateIntegrationLinkReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.PopulateIntegrationLinkRes|null) => void
  ): UnaryResponse;
  processWorkflow(
    requestMessage: api_v1alpha1_integrations_service_pb.ProcessWorkflowReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.ProcessWorkflowRes|null) => void
  ): UnaryResponse;
  processWorkflow(
    requestMessage: api_v1alpha1_integrations_service_pb.ProcessWorkflowReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.ProcessWorkflowRes|null) => void
  ): UnaryResponse;
  insertPrivateField(
    requestMessage: api_v1alpha1_integrations_service_pb.InsertPrivateFieldReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.InsertPrivateFieldRes|null) => void
  ): UnaryResponse;
  insertPrivateField(
    requestMessage: api_v1alpha1_integrations_service_pb.InsertPrivateFieldReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.InsertPrivateFieldRes|null) => void
  ): UnaryResponse;
  calculateFees(
    requestMessage: api_v1alpha1_integrations_service_pb.CalculateFeesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.CalculateFeesRes|null) => void
  ): UnaryResponse;
  calculateFees(
    requestMessage: api_v1alpha1_integrations_service_pb.CalculateFeesReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.CalculateFeesRes|null) => void
  ): UnaryResponse;
  deliverReceipt(
    requestMessage: api_v1alpha1_integrations_service_pb.DeliverReceiptReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.DeliverReceiptRes|null) => void
  ): UnaryResponse;
  deliverReceipt(
    requestMessage: api_v1alpha1_integrations_service_pb.DeliverReceiptReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_service_pb.DeliverReceiptRes|null) => void
  ): UnaryResponse;
}

