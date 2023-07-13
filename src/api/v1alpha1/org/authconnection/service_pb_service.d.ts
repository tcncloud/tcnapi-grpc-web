// package: api.v1alpha1.org.authconnection
// file: api/v1alpha1/org/authconnection/service.proto

import * as api_v1alpha1_org_authconnection_service_pb from "../../../../api/v1alpha1/org/authconnection/service_pb";
import * as api_v1alpha1_org_authconnection_entities_pb from "../../../../api/v1alpha1/org/authconnection/entities_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AuthConnectionServiceCreateAuthConnection = {
  readonly methodName: string;
  readonly service: typeof AuthConnectionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_authconnection_entities_pb.CreateAuthConnectionRequest;
  readonly responseType: typeof api_v1alpha1_org_authconnection_entities_pb.CreateAuthConnectionResponse;
};

type AuthConnectionServiceGetAuthConnectionSettings = {
  readonly methodName: string;
  readonly service: typeof AuthConnectionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_authconnection_entities_pb.GetAuthConnectionSettingsRequest;
  readonly responseType: typeof api_v1alpha1_org_authconnection_entities_pb.GetAuthConnectionSettingsResponse;
};

type AuthConnectionServiceDeleteAuthConnection = {
  readonly methodName: string;
  readonly service: typeof AuthConnectionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_authconnection_entities_pb.DeleteAuthConnectionRequest;
  readonly responseType: typeof api_v1alpha1_org_authconnection_entities_pb.DeleteAuthConnectionResponse;
};

type AuthConnectionServiceUpdateAuthConnectionSecret = {
  readonly methodName: string;
  readonly service: typeof AuthConnectionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_authconnection_entities_pb.UpdateAuthConnectionSecretRequest;
  readonly responseType: typeof api_v1alpha1_org_authconnection_entities_pb.UpdateAuthConnectionSecretResponse;
};

type AuthConnectionServiceUpdateAuthConnectionGroups = {
  readonly methodName: string;
  readonly service: typeof AuthConnectionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_authconnection_entities_pb.UpdateAuthConnectionGroupsRequest;
  readonly responseType: typeof api_v1alpha1_org_authconnection_entities_pb.UpdateAuthConnectionGroupsResponse;
};

export class AuthConnectionService {
  static readonly serviceName: string;
  static readonly CreateAuthConnection: AuthConnectionServiceCreateAuthConnection;
  static readonly GetAuthConnectionSettings: AuthConnectionServiceGetAuthConnectionSettings;
  static readonly DeleteAuthConnection: AuthConnectionServiceDeleteAuthConnection;
  static readonly UpdateAuthConnectionSecret: AuthConnectionServiceUpdateAuthConnectionSecret;
  static readonly UpdateAuthConnectionGroups: AuthConnectionServiceUpdateAuthConnectionGroups;
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

export class AuthConnectionServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createAuthConnection(
    requestMessage: api_v1alpha1_org_authconnection_entities_pb.CreateAuthConnectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_authconnection_entities_pb.CreateAuthConnectionResponse|null) => void
  ): UnaryResponse;
  createAuthConnection(
    requestMessage: api_v1alpha1_org_authconnection_entities_pb.CreateAuthConnectionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_authconnection_entities_pb.CreateAuthConnectionResponse|null) => void
  ): UnaryResponse;
  getAuthConnectionSettings(
    requestMessage: api_v1alpha1_org_authconnection_entities_pb.GetAuthConnectionSettingsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_authconnection_entities_pb.GetAuthConnectionSettingsResponse|null) => void
  ): UnaryResponse;
  getAuthConnectionSettings(
    requestMessage: api_v1alpha1_org_authconnection_entities_pb.GetAuthConnectionSettingsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_authconnection_entities_pb.GetAuthConnectionSettingsResponse|null) => void
  ): UnaryResponse;
  deleteAuthConnection(
    requestMessage: api_v1alpha1_org_authconnection_entities_pb.DeleteAuthConnectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_authconnection_entities_pb.DeleteAuthConnectionResponse|null) => void
  ): UnaryResponse;
  deleteAuthConnection(
    requestMessage: api_v1alpha1_org_authconnection_entities_pb.DeleteAuthConnectionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_authconnection_entities_pb.DeleteAuthConnectionResponse|null) => void
  ): UnaryResponse;
  updateAuthConnectionSecret(
    requestMessage: api_v1alpha1_org_authconnection_entities_pb.UpdateAuthConnectionSecretRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_authconnection_entities_pb.UpdateAuthConnectionSecretResponse|null) => void
  ): UnaryResponse;
  updateAuthConnectionSecret(
    requestMessage: api_v1alpha1_org_authconnection_entities_pb.UpdateAuthConnectionSecretRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_authconnection_entities_pb.UpdateAuthConnectionSecretResponse|null) => void
  ): UnaryResponse;
  updateAuthConnectionGroups(
    requestMessage: api_v1alpha1_org_authconnection_entities_pb.UpdateAuthConnectionGroupsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_authconnection_entities_pb.UpdateAuthConnectionGroupsResponse|null) => void
  ): UnaryResponse;
  updateAuthConnectionGroups(
    requestMessage: api_v1alpha1_org_authconnection_entities_pb.UpdateAuthConnectionGroupsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_authconnection_entities_pb.UpdateAuthConnectionGroupsResponse|null) => void
  ): UnaryResponse;
}

