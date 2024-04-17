// package: api.v1alpha1.integrations
// file: api/v1alpha1/integrations/portals.proto

import * as api_v1alpha1_integrations_portals_pb from "../../../api/v1alpha1/integrations/portals_pb";
import * as api_v1alpha1_integrations_service_pb from "../../../api/v1alpha1/integrations/service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type PortalManagerApiUpsertPortalConfig = {
  readonly methodName: string;
  readonly service: typeof PortalManagerApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_portals_pb.UpsertPortalConfigReq;
  readonly responseType: typeof api_v1alpha1_integrations_portals_pb.UpsertPortalConfigRes;
};

type PortalManagerApiListPortalConfigs = {
  readonly methodName: string;
  readonly service: typeof PortalManagerApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_service_pb.ListPortalConfigsReq;
  readonly responseType: typeof api_v1alpha1_integrations_portals_pb.ListPortalConfigsRes;
};

type PortalManagerApiGetPortalConfig = {
  readonly methodName: string;
  readonly service: typeof PortalManagerApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_service_pb.GetPortalConfigReq;
  readonly responseType: typeof api_v1alpha1_integrations_portals_pb.GetPortalConfigRes;
};

type PortalManagerApiDeletePortalConfig = {
  readonly methodName: string;
  readonly service: typeof PortalManagerApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_service_pb.DeletePortalConfigReq;
  readonly responseType: typeof api_v1alpha1_integrations_portals_pb.DeletePortalConfigRes;
};

type PortalManagerApiUpdatePortalConfigLogo = {
  readonly methodName: string;
  readonly service: typeof PortalManagerApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_portals_pb.UpdatePortalConfigLogoReq;
  readonly responseType: typeof api_v1alpha1_integrations_portals_pb.UpdatePortalConfigLogoRes;
};

type PortalManagerApiGetPortalConfigLogo = {
  readonly methodName: string;
  readonly service: typeof PortalManagerApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_portals_pb.GetPortalConfigLogoReq;
  readonly responseType: typeof api_v1alpha1_integrations_portals_pb.GetPortalConfigLogoRes;
};

type PortalManagerApiListPortalLinks = {
  readonly methodName: string;
  readonly service: typeof PortalManagerApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_portals_pb.ListPortalLinksReq;
  readonly responseType: typeof api_v1alpha1_integrations_portals_pb.ListPortalLinksRes;
};

type PortalManagerApiGetPortalLink = {
  readonly methodName: string;
  readonly service: typeof PortalManagerApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_portals_pb.GetPortalLinkReq;
  readonly responseType: typeof api_v1alpha1_integrations_portals_pb.GetPortalLinkRes;
};

type PortalManagerApiDeletePortalLink = {
  readonly methodName: string;
  readonly service: typeof PortalManagerApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_portals_pb.DeletePortalLinkReq;
  readonly responseType: typeof api_v1alpha1_integrations_portals_pb.DeletePortalLinkRes;
};

type PortalManagerApiCreatePortalLinks = {
  readonly methodName: string;
  readonly service: typeof PortalManagerApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_portals_pb.CreatePortalLinksReq;
  readonly responseType: typeof api_v1alpha1_integrations_portals_pb.CreatePortalLinksRes;
};

type PortalManagerApiUpsertPortal = {
  readonly methodName: string;
  readonly service: typeof PortalManagerApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_portals_pb.UpsertPortalReq;
  readonly responseType: typeof api_v1alpha1_integrations_portals_pb.UpsertPortalRes;
};

type PortalManagerApiGetPortal = {
  readonly methodName: string;
  readonly service: typeof PortalManagerApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_portals_pb.GetPortalReq;
  readonly responseType: typeof api_v1alpha1_integrations_portals_pb.GetPortalRes;
};

type PortalManagerApiDeletePortal = {
  readonly methodName: string;
  readonly service: typeof PortalManagerApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_portals_pb.DeletePortalReq;
  readonly responseType: typeof api_v1alpha1_integrations_portals_pb.DeletePortalRes;
};

type PortalManagerApiListPortals = {
  readonly methodName: string;
  readonly service: typeof PortalManagerApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_portals_pb.ListPortalsReq;
  readonly responseType: typeof api_v1alpha1_integrations_portals_pb.ListPortalsRes;
};

type PortalManagerApiListDetailedPortals = {
  readonly methodName: string;
  readonly service: typeof PortalManagerApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_portals_pb.ListDetailedPortalsReq;
  readonly responseType: typeof api_v1alpha1_integrations_portals_pb.ListDetailedPortalsRes;
};

type PortalManagerApiGetDetailedPortal = {
  readonly methodName: string;
  readonly service: typeof PortalManagerApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_portals_pb.GetDetailedPortalReq;
  readonly responseType: typeof api_v1alpha1_integrations_portals_pb.GetDetailedPortalRes;
};

type PortalManagerApiUpsertPluginInstance = {
  readonly methodName: string;
  readonly service: typeof PortalManagerApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_portals_pb.UpsertPluginInstanceReq;
  readonly responseType: typeof api_v1alpha1_integrations_portals_pb.UpsertPluginInstanceRes;
};

type PortalManagerApiGetPluginInstance = {
  readonly methodName: string;
  readonly service: typeof PortalManagerApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_portals_pb.GetPluginInstanceReq;
  readonly responseType: typeof api_v1alpha1_integrations_portals_pb.GetPluginInstanceRes;
};

type PortalManagerApiDeletePluginInstance = {
  readonly methodName: string;
  readonly service: typeof PortalManagerApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_portals_pb.DeletePluginInstanceReq;
  readonly responseType: typeof api_v1alpha1_integrations_portals_pb.DeletePluginInstanceRes;
};

type PortalManagerApiListPluginInstance = {
  readonly methodName: string;
  readonly service: typeof PortalManagerApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_portals_pb.ListPluginInstanceReq;
  readonly responseType: typeof api_v1alpha1_integrations_portals_pb.ListPluginInstanceRes;
};

type PortalManagerApiListFlowFieldNames = {
  readonly methodName: string;
  readonly service: typeof PortalManagerApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_portals_pb.ListFlowFieldNamesReq;
  readonly responseType: typeof api_v1alpha1_integrations_portals_pb.ListFlowFieldNamesRes;
};

type PortalManagerApiListAvailableVerificationFields = {
  readonly methodName: string;
  readonly service: typeof PortalManagerApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_portals_pb.ListAvailableVerificationFieldsReq;
  readonly responseType: typeof api_v1alpha1_integrations_portals_pb.ListAvailableVerificationFieldsRes;
};

type PortalManagerApiListAvailablePaymentFields = {
  readonly methodName: string;
  readonly service: typeof PortalManagerApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_portals_pb.ListAvailablePaymentFieldsReq;
  readonly responseType: typeof api_v1alpha1_integrations_portals_pb.ListAvailablePaymentFieldsRes;
};

type PortalManagerApiListPortalTypes = {
  readonly methodName: string;
  readonly service: typeof PortalManagerApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_portals_pb.ListPortalTypesReq;
  readonly responseType: typeof api_v1alpha1_integrations_portals_pb.ListPortalTypesResponse;
};

type PortalManagerApiListPortalWorkflows = {
  readonly methodName: string;
  readonly service: typeof PortalManagerApi;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_integrations_portals_pb.ListPortalWorkflowsReq;
  readonly responseType: typeof api_v1alpha1_integrations_portals_pb.ListPortalWorkflowsResponse;
};

export class PortalManagerApi {
  static readonly serviceName: string;
  static readonly UpsertPortalConfig: PortalManagerApiUpsertPortalConfig;
  static readonly ListPortalConfigs: PortalManagerApiListPortalConfigs;
  static readonly GetPortalConfig: PortalManagerApiGetPortalConfig;
  static readonly DeletePortalConfig: PortalManagerApiDeletePortalConfig;
  static readonly UpdatePortalConfigLogo: PortalManagerApiUpdatePortalConfigLogo;
  static readonly GetPortalConfigLogo: PortalManagerApiGetPortalConfigLogo;
  static readonly ListPortalLinks: PortalManagerApiListPortalLinks;
  static readonly GetPortalLink: PortalManagerApiGetPortalLink;
  static readonly DeletePortalLink: PortalManagerApiDeletePortalLink;
  static readonly CreatePortalLinks: PortalManagerApiCreatePortalLinks;
  static readonly UpsertPortal: PortalManagerApiUpsertPortal;
  static readonly GetPortal: PortalManagerApiGetPortal;
  static readonly DeletePortal: PortalManagerApiDeletePortal;
  static readonly ListPortals: PortalManagerApiListPortals;
  static readonly ListDetailedPortals: PortalManagerApiListDetailedPortals;
  static readonly GetDetailedPortal: PortalManagerApiGetDetailedPortal;
  static readonly UpsertPluginInstance: PortalManagerApiUpsertPluginInstance;
  static readonly GetPluginInstance: PortalManagerApiGetPluginInstance;
  static readonly DeletePluginInstance: PortalManagerApiDeletePluginInstance;
  static readonly ListPluginInstance: PortalManagerApiListPluginInstance;
  static readonly ListFlowFieldNames: PortalManagerApiListFlowFieldNames;
  static readonly ListAvailableVerificationFields: PortalManagerApiListAvailableVerificationFields;
  static readonly ListAvailablePaymentFields: PortalManagerApiListAvailablePaymentFields;
  static readonly ListPortalTypes: PortalManagerApiListPortalTypes;
  static readonly ListPortalWorkflows: PortalManagerApiListPortalWorkflows;
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

export class PortalManagerApiClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  upsertPortalConfig(
    requestMessage: api_v1alpha1_integrations_portals_pb.UpsertPortalConfigReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.UpsertPortalConfigRes|null) => void
  ): UnaryResponse;
  upsertPortalConfig(
    requestMessage: api_v1alpha1_integrations_portals_pb.UpsertPortalConfigReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.UpsertPortalConfigRes|null) => void
  ): UnaryResponse;
  listPortalConfigs(
    requestMessage: api_v1alpha1_integrations_service_pb.ListPortalConfigsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.ListPortalConfigsRes|null) => void
  ): UnaryResponse;
  listPortalConfigs(
    requestMessage: api_v1alpha1_integrations_service_pb.ListPortalConfigsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.ListPortalConfigsRes|null) => void
  ): UnaryResponse;
  getPortalConfig(
    requestMessage: api_v1alpha1_integrations_service_pb.GetPortalConfigReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.GetPortalConfigRes|null) => void
  ): UnaryResponse;
  getPortalConfig(
    requestMessage: api_v1alpha1_integrations_service_pb.GetPortalConfigReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.GetPortalConfigRes|null) => void
  ): UnaryResponse;
  deletePortalConfig(
    requestMessage: api_v1alpha1_integrations_service_pb.DeletePortalConfigReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.DeletePortalConfigRes|null) => void
  ): UnaryResponse;
  deletePortalConfig(
    requestMessage: api_v1alpha1_integrations_service_pb.DeletePortalConfigReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.DeletePortalConfigRes|null) => void
  ): UnaryResponse;
  updatePortalConfigLogo(
    requestMessage: api_v1alpha1_integrations_portals_pb.UpdatePortalConfigLogoReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.UpdatePortalConfigLogoRes|null) => void
  ): UnaryResponse;
  updatePortalConfigLogo(
    requestMessage: api_v1alpha1_integrations_portals_pb.UpdatePortalConfigLogoReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.UpdatePortalConfigLogoRes|null) => void
  ): UnaryResponse;
  getPortalConfigLogo(
    requestMessage: api_v1alpha1_integrations_portals_pb.GetPortalConfigLogoReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.GetPortalConfigLogoRes|null) => void
  ): UnaryResponse;
  getPortalConfigLogo(
    requestMessage: api_v1alpha1_integrations_portals_pb.GetPortalConfigLogoReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.GetPortalConfigLogoRes|null) => void
  ): UnaryResponse;
  listPortalLinks(
    requestMessage: api_v1alpha1_integrations_portals_pb.ListPortalLinksReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.ListPortalLinksRes|null) => void
  ): UnaryResponse;
  listPortalLinks(
    requestMessage: api_v1alpha1_integrations_portals_pb.ListPortalLinksReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.ListPortalLinksRes|null) => void
  ): UnaryResponse;
  getPortalLink(
    requestMessage: api_v1alpha1_integrations_portals_pb.GetPortalLinkReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.GetPortalLinkRes|null) => void
  ): UnaryResponse;
  getPortalLink(
    requestMessage: api_v1alpha1_integrations_portals_pb.GetPortalLinkReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.GetPortalLinkRes|null) => void
  ): UnaryResponse;
  deletePortalLink(
    requestMessage: api_v1alpha1_integrations_portals_pb.DeletePortalLinkReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.DeletePortalLinkRes|null) => void
  ): UnaryResponse;
  deletePortalLink(
    requestMessage: api_v1alpha1_integrations_portals_pb.DeletePortalLinkReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.DeletePortalLinkRes|null) => void
  ): UnaryResponse;
  createPortalLinks(
    requestMessage: api_v1alpha1_integrations_portals_pb.CreatePortalLinksReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.CreatePortalLinksRes|null) => void
  ): UnaryResponse;
  createPortalLinks(
    requestMessage: api_v1alpha1_integrations_portals_pb.CreatePortalLinksReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.CreatePortalLinksRes|null) => void
  ): UnaryResponse;
  upsertPortal(
    requestMessage: api_v1alpha1_integrations_portals_pb.UpsertPortalReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.UpsertPortalRes|null) => void
  ): UnaryResponse;
  upsertPortal(
    requestMessage: api_v1alpha1_integrations_portals_pb.UpsertPortalReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.UpsertPortalRes|null) => void
  ): UnaryResponse;
  getPortal(
    requestMessage: api_v1alpha1_integrations_portals_pb.GetPortalReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.GetPortalRes|null) => void
  ): UnaryResponse;
  getPortal(
    requestMessage: api_v1alpha1_integrations_portals_pb.GetPortalReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.GetPortalRes|null) => void
  ): UnaryResponse;
  deletePortal(
    requestMessage: api_v1alpha1_integrations_portals_pb.DeletePortalReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.DeletePortalRes|null) => void
  ): UnaryResponse;
  deletePortal(
    requestMessage: api_v1alpha1_integrations_portals_pb.DeletePortalReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.DeletePortalRes|null) => void
  ): UnaryResponse;
  listPortals(
    requestMessage: api_v1alpha1_integrations_portals_pb.ListPortalsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.ListPortalsRes|null) => void
  ): UnaryResponse;
  listPortals(
    requestMessage: api_v1alpha1_integrations_portals_pb.ListPortalsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.ListPortalsRes|null) => void
  ): UnaryResponse;
  listDetailedPortals(
    requestMessage: api_v1alpha1_integrations_portals_pb.ListDetailedPortalsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.ListDetailedPortalsRes|null) => void
  ): UnaryResponse;
  listDetailedPortals(
    requestMessage: api_v1alpha1_integrations_portals_pb.ListDetailedPortalsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.ListDetailedPortalsRes|null) => void
  ): UnaryResponse;
  getDetailedPortal(
    requestMessage: api_v1alpha1_integrations_portals_pb.GetDetailedPortalReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.GetDetailedPortalRes|null) => void
  ): UnaryResponse;
  getDetailedPortal(
    requestMessage: api_v1alpha1_integrations_portals_pb.GetDetailedPortalReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.GetDetailedPortalRes|null) => void
  ): UnaryResponse;
  upsertPluginInstance(
    requestMessage: api_v1alpha1_integrations_portals_pb.UpsertPluginInstanceReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.UpsertPluginInstanceRes|null) => void
  ): UnaryResponse;
  upsertPluginInstance(
    requestMessage: api_v1alpha1_integrations_portals_pb.UpsertPluginInstanceReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.UpsertPluginInstanceRes|null) => void
  ): UnaryResponse;
  getPluginInstance(
    requestMessage: api_v1alpha1_integrations_portals_pb.GetPluginInstanceReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.GetPluginInstanceRes|null) => void
  ): UnaryResponse;
  getPluginInstance(
    requestMessage: api_v1alpha1_integrations_portals_pb.GetPluginInstanceReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.GetPluginInstanceRes|null) => void
  ): UnaryResponse;
  deletePluginInstance(
    requestMessage: api_v1alpha1_integrations_portals_pb.DeletePluginInstanceReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.DeletePluginInstanceRes|null) => void
  ): UnaryResponse;
  deletePluginInstance(
    requestMessage: api_v1alpha1_integrations_portals_pb.DeletePluginInstanceReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.DeletePluginInstanceRes|null) => void
  ): UnaryResponse;
  listPluginInstance(
    requestMessage: api_v1alpha1_integrations_portals_pb.ListPluginInstanceReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.ListPluginInstanceRes|null) => void
  ): UnaryResponse;
  listPluginInstance(
    requestMessage: api_v1alpha1_integrations_portals_pb.ListPluginInstanceReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.ListPluginInstanceRes|null) => void
  ): UnaryResponse;
  listFlowFieldNames(
    requestMessage: api_v1alpha1_integrations_portals_pb.ListFlowFieldNamesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.ListFlowFieldNamesRes|null) => void
  ): UnaryResponse;
  listFlowFieldNames(
    requestMessage: api_v1alpha1_integrations_portals_pb.ListFlowFieldNamesReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.ListFlowFieldNamesRes|null) => void
  ): UnaryResponse;
  listAvailableVerificationFields(
    requestMessage: api_v1alpha1_integrations_portals_pb.ListAvailableVerificationFieldsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.ListAvailableVerificationFieldsRes|null) => void
  ): UnaryResponse;
  listAvailableVerificationFields(
    requestMessage: api_v1alpha1_integrations_portals_pb.ListAvailableVerificationFieldsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.ListAvailableVerificationFieldsRes|null) => void
  ): UnaryResponse;
  listAvailablePaymentFields(
    requestMessage: api_v1alpha1_integrations_portals_pb.ListAvailablePaymentFieldsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.ListAvailablePaymentFieldsRes|null) => void
  ): UnaryResponse;
  listAvailablePaymentFields(
    requestMessage: api_v1alpha1_integrations_portals_pb.ListAvailablePaymentFieldsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.ListAvailablePaymentFieldsRes|null) => void
  ): UnaryResponse;
  listPortalTypes(
    requestMessage: api_v1alpha1_integrations_portals_pb.ListPortalTypesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.ListPortalTypesResponse|null) => void
  ): UnaryResponse;
  listPortalTypes(
    requestMessage: api_v1alpha1_integrations_portals_pb.ListPortalTypesReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.ListPortalTypesResponse|null) => void
  ): UnaryResponse;
  listPortalWorkflows(
    requestMessage: api_v1alpha1_integrations_portals_pb.ListPortalWorkflowsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.ListPortalWorkflowsResponse|null) => void
  ): UnaryResponse;
  listPortalWorkflows(
    requestMessage: api_v1alpha1_integrations_portals_pb.ListPortalWorkflowsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_integrations_portals_pb.ListPortalWorkflowsResponse|null) => void
  ): UnaryResponse;
}

