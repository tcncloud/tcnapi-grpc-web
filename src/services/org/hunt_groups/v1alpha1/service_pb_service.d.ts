// package: services.org.hunt_groups.v1alpha1
// file: services/org/hunt_groups/v1alpha1/service.proto

import * as services_org_hunt_groups_v1alpha1_service_pb from "../../../../services/org/hunt_groups/v1alpha1/service_pb";
import * as services_org_hunt_groups_v1alpha1_entities_pb from "../../../../services/org/hunt_groups/v1alpha1/entities_pb";
import {grpc} from "@improbable-eng/grpc-web";

type HuntGroupsServiceListHuntGroupExileLinks = {
  readonly methodName: string;
  readonly service: typeof HuntGroupsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_hunt_groups_v1alpha1_entities_pb.ListHuntGroupExileLinksRequest;
  readonly responseType: typeof services_org_hunt_groups_v1alpha1_entities_pb.ListHuntGroupExileLinksResponse;
};

type HuntGroupsServiceCopyHuntGroupExileLink = {
  readonly methodName: string;
  readonly service: typeof HuntGroupsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_hunt_groups_v1alpha1_entities_pb.CopyHuntGroupExileLinkRequest;
  readonly responseType: typeof services_org_hunt_groups_v1alpha1_entities_pb.CopyHuntGroupExileLinkResponse;
};

type HuntGroupsServiceUpdateHuntGroupExileLinks = {
  readonly methodName: string;
  readonly service: typeof HuntGroupsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_hunt_groups_v1alpha1_entities_pb.UpdateHuntGroupExileLinksRequest;
  readonly responseType: typeof services_org_hunt_groups_v1alpha1_entities_pb.UpdateHuntGroupExileLinksResponse;
};

type HuntGroupsServiceListHuntGroupAgentTriggers = {
  readonly methodName: string;
  readonly service: typeof HuntGroupsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_hunt_groups_v1alpha1_entities_pb.ListHuntGroupAgentTriggersRequest;
  readonly responseType: typeof services_org_hunt_groups_v1alpha1_entities_pb.ListHuntGroupAgentTriggersResponse;
};

type HuntGroupsServiceCopyHuntGroupAgentTrigger = {
  readonly methodName: string;
  readonly service: typeof HuntGroupsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_hunt_groups_v1alpha1_entities_pb.CopyHuntGroupAgentTriggerRequest;
  readonly responseType: typeof services_org_hunt_groups_v1alpha1_entities_pb.CopyHuntGroupAgentTriggerResponse;
};

type HuntGroupsServiceUpdateHuntGroupAgentTriggers = {
  readonly methodName: string;
  readonly service: typeof HuntGroupsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_hunt_groups_v1alpha1_entities_pb.UpdateHuntGroupAgentTriggersRequest;
  readonly responseType: typeof services_org_hunt_groups_v1alpha1_entities_pb.UpdateHuntGroupAgentTriggersResponse;
};

type HuntGroupsServiceCopyHuntGroupToOrganization = {
  readonly methodName: string;
  readonly service: typeof HuntGroupsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_hunt_groups_v1alpha1_entities_pb.CopyHuntGroupToOrganizationRequest;
  readonly responseType: typeof services_org_hunt_groups_v1alpha1_entities_pb.CopyHuntGroupToOrganizationResponse;
};

type HuntGroupsServiceAdminCopyHuntGroupToOrganization = {
  readonly methodName: string;
  readonly service: typeof HuntGroupsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_hunt_groups_v1alpha1_entities_pb.AdminCopyHuntGroupToOrganizationRequest;
  readonly responseType: typeof services_org_hunt_groups_v1alpha1_entities_pb.AdminCopyHuntGroupToOrganizationResponse;
};

type HuntGroupsServiceAdminListHuntGroups = {
  readonly methodName: string;
  readonly service: typeof HuntGroupsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_hunt_groups_v1alpha1_entities_pb.AdminListHuntGroupsRequest;
  readonly responseType: typeof services_org_hunt_groups_v1alpha1_entities_pb.AdminListHuntGroupsResponse;
};

type HuntGroupsServiceListAgentScripts = {
  readonly methodName: string;
  readonly service: typeof HuntGroupsService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof services_org_hunt_groups_v1alpha1_entities_pb.ListAgentScriptsRequest;
  readonly responseType: typeof services_org_hunt_groups_v1alpha1_entities_pb.ListAgentScriptsResponse;
};

type HuntGroupsServiceCreateAgentClientInfoDisplayTemplate = {
  readonly methodName: string;
  readonly service: typeof HuntGroupsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_hunt_groups_v1alpha1_entities_pb.CreateAgentClientInfoDisplayTemplateRequest;
  readonly responseType: typeof services_org_hunt_groups_v1alpha1_entities_pb.CreateAgentClientInfoDisplayTemplateResponse;
};

type HuntGroupsServiceUpdateAgentClientInfoDisplayTemplate = {
  readonly methodName: string;
  readonly service: typeof HuntGroupsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_hunt_groups_v1alpha1_entities_pb.UpdateAgentClientInfoDisplayTemplateRequest;
  readonly responseType: typeof services_org_hunt_groups_v1alpha1_entities_pb.UpdateAgentClientInfoDisplayTemplateResponse;
};

type HuntGroupsServiceGetAgentClientInfoDisplayTemplate = {
  readonly methodName: string;
  readonly service: typeof HuntGroupsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_hunt_groups_v1alpha1_entities_pb.GetAgentClientInfoDisplayTemplateRequest;
  readonly responseType: typeof services_org_hunt_groups_v1alpha1_entities_pb.GetAgentClientInfoDisplayTemplateResponse;
};

type HuntGroupsServiceListAgentClientInfoDisplayTemplates = {
  readonly methodName: string;
  readonly service: typeof HuntGroupsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_hunt_groups_v1alpha1_entities_pb.ListAgentClientInfoDisplayTemplatesRequest;
  readonly responseType: typeof services_org_hunt_groups_v1alpha1_entities_pb.ListAgentClientInfoDisplayTemplatesResponse;
};

type HuntGroupsServiceDeleteAgentClientInfoDisplayTemplate = {
  readonly methodName: string;
  readonly service: typeof HuntGroupsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_hunt_groups_v1alpha1_entities_pb.DeleteAgentClientInfoDisplayTemplateRequest;
  readonly responseType: typeof services_org_hunt_groups_v1alpha1_entities_pb.DeleteAgentClientInfoDisplayTemplateResponse;
};

type HuntGroupsServiceAssignAgentClientInfoDisplayTemplateToHuntGroups = {
  readonly methodName: string;
  readonly service: typeof HuntGroupsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_hunt_groups_v1alpha1_entities_pb.AssignAgentClientInfoDisplayTemplateToHuntGroupsRequest;
  readonly responseType: typeof services_org_hunt_groups_v1alpha1_entities_pb.AssignAgentClientInfoDisplayTemplateToHuntGroupsResponse;
};

type HuntGroupsServiceUnassignAgentClientInfoDisplayTemplateFromHuntGroups = {
  readonly methodName: string;
  readonly service: typeof HuntGroupsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_hunt_groups_v1alpha1_entities_pb.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsRequest;
  readonly responseType: typeof services_org_hunt_groups_v1alpha1_entities_pb.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsResponse;
};

export class HuntGroupsService {
  static readonly serviceName: string;
  static readonly ListHuntGroupExileLinks: HuntGroupsServiceListHuntGroupExileLinks;
  static readonly CopyHuntGroupExileLink: HuntGroupsServiceCopyHuntGroupExileLink;
  static readonly UpdateHuntGroupExileLinks: HuntGroupsServiceUpdateHuntGroupExileLinks;
  static readonly ListHuntGroupAgentTriggers: HuntGroupsServiceListHuntGroupAgentTriggers;
  static readonly CopyHuntGroupAgentTrigger: HuntGroupsServiceCopyHuntGroupAgentTrigger;
  static readonly UpdateHuntGroupAgentTriggers: HuntGroupsServiceUpdateHuntGroupAgentTriggers;
  static readonly CopyHuntGroupToOrganization: HuntGroupsServiceCopyHuntGroupToOrganization;
  static readonly AdminCopyHuntGroupToOrganization: HuntGroupsServiceAdminCopyHuntGroupToOrganization;
  static readonly AdminListHuntGroups: HuntGroupsServiceAdminListHuntGroups;
  static readonly ListAgentScripts: HuntGroupsServiceListAgentScripts;
  static readonly CreateAgentClientInfoDisplayTemplate: HuntGroupsServiceCreateAgentClientInfoDisplayTemplate;
  static readonly UpdateAgentClientInfoDisplayTemplate: HuntGroupsServiceUpdateAgentClientInfoDisplayTemplate;
  static readonly GetAgentClientInfoDisplayTemplate: HuntGroupsServiceGetAgentClientInfoDisplayTemplate;
  static readonly ListAgentClientInfoDisplayTemplates: HuntGroupsServiceListAgentClientInfoDisplayTemplates;
  static readonly DeleteAgentClientInfoDisplayTemplate: HuntGroupsServiceDeleteAgentClientInfoDisplayTemplate;
  static readonly AssignAgentClientInfoDisplayTemplateToHuntGroups: HuntGroupsServiceAssignAgentClientInfoDisplayTemplateToHuntGroups;
  static readonly UnassignAgentClientInfoDisplayTemplateFromHuntGroups: HuntGroupsServiceUnassignAgentClientInfoDisplayTemplateFromHuntGroups;
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

export class HuntGroupsServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  listHuntGroupExileLinks(
    requestMessage: services_org_hunt_groups_v1alpha1_entities_pb.ListHuntGroupExileLinksRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_hunt_groups_v1alpha1_entities_pb.ListHuntGroupExileLinksResponse|null) => void
  ): UnaryResponse;
  listHuntGroupExileLinks(
    requestMessage: services_org_hunt_groups_v1alpha1_entities_pb.ListHuntGroupExileLinksRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_hunt_groups_v1alpha1_entities_pb.ListHuntGroupExileLinksResponse|null) => void
  ): UnaryResponse;
  copyHuntGroupExileLink(
    requestMessage: services_org_hunt_groups_v1alpha1_entities_pb.CopyHuntGroupExileLinkRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_hunt_groups_v1alpha1_entities_pb.CopyHuntGroupExileLinkResponse|null) => void
  ): UnaryResponse;
  copyHuntGroupExileLink(
    requestMessage: services_org_hunt_groups_v1alpha1_entities_pb.CopyHuntGroupExileLinkRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_hunt_groups_v1alpha1_entities_pb.CopyHuntGroupExileLinkResponse|null) => void
  ): UnaryResponse;
  updateHuntGroupExileLinks(
    requestMessage: services_org_hunt_groups_v1alpha1_entities_pb.UpdateHuntGroupExileLinksRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_hunt_groups_v1alpha1_entities_pb.UpdateHuntGroupExileLinksResponse|null) => void
  ): UnaryResponse;
  updateHuntGroupExileLinks(
    requestMessage: services_org_hunt_groups_v1alpha1_entities_pb.UpdateHuntGroupExileLinksRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_hunt_groups_v1alpha1_entities_pb.UpdateHuntGroupExileLinksResponse|null) => void
  ): UnaryResponse;
  listHuntGroupAgentTriggers(
    requestMessage: services_org_hunt_groups_v1alpha1_entities_pb.ListHuntGroupAgentTriggersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_hunt_groups_v1alpha1_entities_pb.ListHuntGroupAgentTriggersResponse|null) => void
  ): UnaryResponse;
  listHuntGroupAgentTriggers(
    requestMessage: services_org_hunt_groups_v1alpha1_entities_pb.ListHuntGroupAgentTriggersRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_hunt_groups_v1alpha1_entities_pb.ListHuntGroupAgentTriggersResponse|null) => void
  ): UnaryResponse;
  copyHuntGroupAgentTrigger(
    requestMessage: services_org_hunt_groups_v1alpha1_entities_pb.CopyHuntGroupAgentTriggerRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_hunt_groups_v1alpha1_entities_pb.CopyHuntGroupAgentTriggerResponse|null) => void
  ): UnaryResponse;
  copyHuntGroupAgentTrigger(
    requestMessage: services_org_hunt_groups_v1alpha1_entities_pb.CopyHuntGroupAgentTriggerRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_hunt_groups_v1alpha1_entities_pb.CopyHuntGroupAgentTriggerResponse|null) => void
  ): UnaryResponse;
  updateHuntGroupAgentTriggers(
    requestMessage: services_org_hunt_groups_v1alpha1_entities_pb.UpdateHuntGroupAgentTriggersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_hunt_groups_v1alpha1_entities_pb.UpdateHuntGroupAgentTriggersResponse|null) => void
  ): UnaryResponse;
  updateHuntGroupAgentTriggers(
    requestMessage: services_org_hunt_groups_v1alpha1_entities_pb.UpdateHuntGroupAgentTriggersRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_hunt_groups_v1alpha1_entities_pb.UpdateHuntGroupAgentTriggersResponse|null) => void
  ): UnaryResponse;
  copyHuntGroupToOrganization(
    requestMessage: services_org_hunt_groups_v1alpha1_entities_pb.CopyHuntGroupToOrganizationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_hunt_groups_v1alpha1_entities_pb.CopyHuntGroupToOrganizationResponse|null) => void
  ): UnaryResponse;
  copyHuntGroupToOrganization(
    requestMessage: services_org_hunt_groups_v1alpha1_entities_pb.CopyHuntGroupToOrganizationRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_hunt_groups_v1alpha1_entities_pb.CopyHuntGroupToOrganizationResponse|null) => void
  ): UnaryResponse;
  adminCopyHuntGroupToOrganization(
    requestMessage: services_org_hunt_groups_v1alpha1_entities_pb.AdminCopyHuntGroupToOrganizationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_hunt_groups_v1alpha1_entities_pb.AdminCopyHuntGroupToOrganizationResponse|null) => void
  ): UnaryResponse;
  adminCopyHuntGroupToOrganization(
    requestMessage: services_org_hunt_groups_v1alpha1_entities_pb.AdminCopyHuntGroupToOrganizationRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_hunt_groups_v1alpha1_entities_pb.AdminCopyHuntGroupToOrganizationResponse|null) => void
  ): UnaryResponse;
  adminListHuntGroups(
    requestMessage: services_org_hunt_groups_v1alpha1_entities_pb.AdminListHuntGroupsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_hunt_groups_v1alpha1_entities_pb.AdminListHuntGroupsResponse|null) => void
  ): UnaryResponse;
  adminListHuntGroups(
    requestMessage: services_org_hunt_groups_v1alpha1_entities_pb.AdminListHuntGroupsRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_hunt_groups_v1alpha1_entities_pb.AdminListHuntGroupsResponse|null) => void
  ): UnaryResponse;
  listAgentScripts(requestMessage: services_org_hunt_groups_v1alpha1_entities_pb.ListAgentScriptsRequest, metadata?: grpc.Metadata): ResponseStream<services_org_hunt_groups_v1alpha1_entities_pb.ListAgentScriptsResponse>;
  createAgentClientInfoDisplayTemplate(
    requestMessage: services_org_hunt_groups_v1alpha1_entities_pb.CreateAgentClientInfoDisplayTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_hunt_groups_v1alpha1_entities_pb.CreateAgentClientInfoDisplayTemplateResponse|null) => void
  ): UnaryResponse;
  createAgentClientInfoDisplayTemplate(
    requestMessage: services_org_hunt_groups_v1alpha1_entities_pb.CreateAgentClientInfoDisplayTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_hunt_groups_v1alpha1_entities_pb.CreateAgentClientInfoDisplayTemplateResponse|null) => void
  ): UnaryResponse;
  updateAgentClientInfoDisplayTemplate(
    requestMessage: services_org_hunt_groups_v1alpha1_entities_pb.UpdateAgentClientInfoDisplayTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_hunt_groups_v1alpha1_entities_pb.UpdateAgentClientInfoDisplayTemplateResponse|null) => void
  ): UnaryResponse;
  updateAgentClientInfoDisplayTemplate(
    requestMessage: services_org_hunt_groups_v1alpha1_entities_pb.UpdateAgentClientInfoDisplayTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_hunt_groups_v1alpha1_entities_pb.UpdateAgentClientInfoDisplayTemplateResponse|null) => void
  ): UnaryResponse;
  getAgentClientInfoDisplayTemplate(
    requestMessage: services_org_hunt_groups_v1alpha1_entities_pb.GetAgentClientInfoDisplayTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_hunt_groups_v1alpha1_entities_pb.GetAgentClientInfoDisplayTemplateResponse|null) => void
  ): UnaryResponse;
  getAgentClientInfoDisplayTemplate(
    requestMessage: services_org_hunt_groups_v1alpha1_entities_pb.GetAgentClientInfoDisplayTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_hunt_groups_v1alpha1_entities_pb.GetAgentClientInfoDisplayTemplateResponse|null) => void
  ): UnaryResponse;
  listAgentClientInfoDisplayTemplates(
    requestMessage: services_org_hunt_groups_v1alpha1_entities_pb.ListAgentClientInfoDisplayTemplatesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_hunt_groups_v1alpha1_entities_pb.ListAgentClientInfoDisplayTemplatesResponse|null) => void
  ): UnaryResponse;
  listAgentClientInfoDisplayTemplates(
    requestMessage: services_org_hunt_groups_v1alpha1_entities_pb.ListAgentClientInfoDisplayTemplatesRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_hunt_groups_v1alpha1_entities_pb.ListAgentClientInfoDisplayTemplatesResponse|null) => void
  ): UnaryResponse;
  deleteAgentClientInfoDisplayTemplate(
    requestMessage: services_org_hunt_groups_v1alpha1_entities_pb.DeleteAgentClientInfoDisplayTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_hunt_groups_v1alpha1_entities_pb.DeleteAgentClientInfoDisplayTemplateResponse|null) => void
  ): UnaryResponse;
  deleteAgentClientInfoDisplayTemplate(
    requestMessage: services_org_hunt_groups_v1alpha1_entities_pb.DeleteAgentClientInfoDisplayTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_hunt_groups_v1alpha1_entities_pb.DeleteAgentClientInfoDisplayTemplateResponse|null) => void
  ): UnaryResponse;
  assignAgentClientInfoDisplayTemplateToHuntGroups(
    requestMessage: services_org_hunt_groups_v1alpha1_entities_pb.AssignAgentClientInfoDisplayTemplateToHuntGroupsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_hunt_groups_v1alpha1_entities_pb.AssignAgentClientInfoDisplayTemplateToHuntGroupsResponse|null) => void
  ): UnaryResponse;
  assignAgentClientInfoDisplayTemplateToHuntGroups(
    requestMessage: services_org_hunt_groups_v1alpha1_entities_pb.AssignAgentClientInfoDisplayTemplateToHuntGroupsRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_hunt_groups_v1alpha1_entities_pb.AssignAgentClientInfoDisplayTemplateToHuntGroupsResponse|null) => void
  ): UnaryResponse;
  unassignAgentClientInfoDisplayTemplateFromHuntGroups(
    requestMessage: services_org_hunt_groups_v1alpha1_entities_pb.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_hunt_groups_v1alpha1_entities_pb.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsResponse|null) => void
  ): UnaryResponse;
  unassignAgentClientInfoDisplayTemplateFromHuntGroups(
    requestMessage: services_org_hunt_groups_v1alpha1_entities_pb.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_hunt_groups_v1alpha1_entities_pb.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsResponse|null) => void
  ): UnaryResponse;
}

