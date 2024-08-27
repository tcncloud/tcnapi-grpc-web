// package: services.org.users.v1alpha1
// file: services/org/users/v1alpha1/service.proto

import * as services_org_users_v1alpha1_service_pb from "../../../../services/org/users/v1alpha1/service_pb";
import * as services_org_users_v1alpha1_preferences_pb from "../../../../services/org/users/v1alpha1/preferences_pb";
import {grpc} from "@improbable-eng/grpc-web";

type UsersServiceGetUserLocalePreferences = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_users_v1alpha1_preferences_pb.GetUserLocalePreferencesRequest;
  readonly responseType: typeof services_org_users_v1alpha1_preferences_pb.GetUserLocalePreferencesResponse;
};

type UsersServiceUpdateUserLocalePreferences = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_users_v1alpha1_preferences_pb.UpdateUserLocalePreferencesRequest;
  readonly responseType: typeof services_org_users_v1alpha1_preferences_pb.UpdateUserLocalePreferencesResponse;
};

type UsersServiceGetMyUserLocalePreferences = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_users_v1alpha1_preferences_pb.GetMyUserLocalePreferencesRequest;
  readonly responseType: typeof services_org_users_v1alpha1_preferences_pb.GetMyUserLocalePreferencesResponse;
};

type UsersServiceUpdateMyUserLocalePreferences = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_users_v1alpha1_preferences_pb.UpdateMyUserLocalePreferencesRequest;
  readonly responseType: typeof services_org_users_v1alpha1_preferences_pb.UpdateMyUserLocalePreferencesResponse;
};

export class UsersService {
  static readonly serviceName: string;
  static readonly GetUserLocalePreferences: UsersServiceGetUserLocalePreferences;
  static readonly UpdateUserLocalePreferences: UsersServiceUpdateUserLocalePreferences;
  static readonly GetMyUserLocalePreferences: UsersServiceGetMyUserLocalePreferences;
  static readonly UpdateMyUserLocalePreferences: UsersServiceUpdateMyUserLocalePreferences;
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

export class UsersServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getUserLocalePreferences(
    requestMessage: services_org_users_v1alpha1_preferences_pb.GetUserLocalePreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_users_v1alpha1_preferences_pb.GetUserLocalePreferencesResponse|null) => void
  ): UnaryResponse;
  getUserLocalePreferences(
    requestMessage: services_org_users_v1alpha1_preferences_pb.GetUserLocalePreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_users_v1alpha1_preferences_pb.GetUserLocalePreferencesResponse|null) => void
  ): UnaryResponse;
  updateUserLocalePreferences(
    requestMessage: services_org_users_v1alpha1_preferences_pb.UpdateUserLocalePreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_users_v1alpha1_preferences_pb.UpdateUserLocalePreferencesResponse|null) => void
  ): UnaryResponse;
  updateUserLocalePreferences(
    requestMessage: services_org_users_v1alpha1_preferences_pb.UpdateUserLocalePreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_users_v1alpha1_preferences_pb.UpdateUserLocalePreferencesResponse|null) => void
  ): UnaryResponse;
  getMyUserLocalePreferences(
    requestMessage: services_org_users_v1alpha1_preferences_pb.GetMyUserLocalePreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_users_v1alpha1_preferences_pb.GetMyUserLocalePreferencesResponse|null) => void
  ): UnaryResponse;
  getMyUserLocalePreferences(
    requestMessage: services_org_users_v1alpha1_preferences_pb.GetMyUserLocalePreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_users_v1alpha1_preferences_pb.GetMyUserLocalePreferencesResponse|null) => void
  ): UnaryResponse;
  updateMyUserLocalePreferences(
    requestMessage: services_org_users_v1alpha1_preferences_pb.UpdateMyUserLocalePreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_users_v1alpha1_preferences_pb.UpdateMyUserLocalePreferencesResponse|null) => void
  ): UnaryResponse;
  updateMyUserLocalePreferences(
    requestMessage: services_org_users_v1alpha1_preferences_pb.UpdateMyUserLocalePreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_users_v1alpha1_preferences_pb.UpdateMyUserLocalePreferencesResponse|null) => void
  ): UnaryResponse;
}

