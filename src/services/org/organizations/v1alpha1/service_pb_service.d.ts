// package: services.org.organizations.v1alpha1
// file: services/org/organizations/v1alpha1/service.proto

import * as services_org_organizations_v1alpha1_service_pb from "../../../../services/org/organizations/v1alpha1/service_pb";
import * as services_org_organizations_v1alpha1_preferences_pb from "../../../../services/org/organizations/v1alpha1/preferences_pb";
import {grpc} from "@improbable-eng/grpc-web";

type OrganizationsServiceGetOrganizationLocalePreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_organizations_v1alpha1_preferences_pb.GetOrganizationLocalePreferencesRequest;
  readonly responseType: typeof services_org_organizations_v1alpha1_preferences_pb.GetOrganizationLocalePreferencesResponse;
};

type OrganizationsServiceUpdateOrganizationLocalePreferences = {
  readonly methodName: string;
  readonly service: typeof OrganizationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_organizations_v1alpha1_preferences_pb.UpdateOrganizationLocalePreferencesRequest;
  readonly responseType: typeof services_org_organizations_v1alpha1_preferences_pb.UpdateOrganizationLocalePreferencesResponse;
};

export class OrganizationsService {
  static readonly serviceName: string;
  static readonly GetOrganizationLocalePreferences: OrganizationsServiceGetOrganizationLocalePreferences;
  static readonly UpdateOrganizationLocalePreferences: OrganizationsServiceUpdateOrganizationLocalePreferences;
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

export class OrganizationsServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getOrganizationLocalePreferences(
    requestMessage: services_org_organizations_v1alpha1_preferences_pb.GetOrganizationLocalePreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_organizations_v1alpha1_preferences_pb.GetOrganizationLocalePreferencesResponse|null) => void
  ): UnaryResponse;
  getOrganizationLocalePreferences(
    requestMessage: services_org_organizations_v1alpha1_preferences_pb.GetOrganizationLocalePreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_organizations_v1alpha1_preferences_pb.GetOrganizationLocalePreferencesResponse|null) => void
  ): UnaryResponse;
  updateOrganizationLocalePreferences(
    requestMessage: services_org_organizations_v1alpha1_preferences_pb.UpdateOrganizationLocalePreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_organizations_v1alpha1_preferences_pb.UpdateOrganizationLocalePreferencesResponse|null) => void
  ): UnaryResponse;
  updateOrganizationLocalePreferences(
    requestMessage: services_org_organizations_v1alpha1_preferences_pb.UpdateOrganizationLocalePreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_organizations_v1alpha1_preferences_pb.UpdateOrganizationLocalePreferencesResponse|null) => void
  ): UnaryResponse;
}

