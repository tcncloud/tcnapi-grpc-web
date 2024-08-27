// package: services.org.users.v1alpha1
// file: services/org/users/v1alpha1/service.proto

import * as services_org_users_v1alpha1_service_pb from "../../../../services/org/users/v1alpha1/service_pb";
import * as services_org_users_v1alpha1_preferences_pb from "../../../../services/org/users/v1alpha1/preferences_pb";
import {grpc} from "@improbable-eng/grpc-web";

type UsersServiceGetUserLocalePreferencesOverride = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_users_v1alpha1_preferences_pb.GetUserLocalePreferencesOverrideRequest;
  readonly responseType: typeof services_org_users_v1alpha1_preferences_pb.GetUserLocalePreferencesOverrideResponse;
};

type UsersServiceUpdateUserLocalePreferencesOverride = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_users_v1alpha1_preferences_pb.UpdateUserLocalePreferencesOverrideRequest;
  readonly responseType: typeof services_org_users_v1alpha1_preferences_pb.UpdateUserLocalePreferencesOverrideResponse;
};

type UsersServiceGetMyUserLocalePreferencesOverride = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_users_v1alpha1_preferences_pb.GetMyUserLocalePreferencesOverrideRequest;
  readonly responseType: typeof services_org_users_v1alpha1_preferences_pb.GetMyUserLocalePreferencesOverrideResponse;
};

type UsersServiceUpdateMyUserLocalePreferencesOverride = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_users_v1alpha1_preferences_pb.UpdateMyUserLocalePreferencesOverrideRequest;
  readonly responseType: typeof services_org_users_v1alpha1_preferences_pb.UpdateMyUserLocalePreferencesOverrideResponse;
};

export class UsersService {
  static readonly serviceName: string;
  static readonly GetUserLocalePreferencesOverride: UsersServiceGetUserLocalePreferencesOverride;
  static readonly UpdateUserLocalePreferencesOverride: UsersServiceUpdateUserLocalePreferencesOverride;
  static readonly GetMyUserLocalePreferencesOverride: UsersServiceGetMyUserLocalePreferencesOverride;
  static readonly UpdateMyUserLocalePreferencesOverride: UsersServiceUpdateMyUserLocalePreferencesOverride;
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
  getUserLocalePreferencesOverride(
    requestMessage: services_org_users_v1alpha1_preferences_pb.GetUserLocalePreferencesOverrideRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_users_v1alpha1_preferences_pb.GetUserLocalePreferencesOverrideResponse|null) => void
  ): UnaryResponse;
  getUserLocalePreferencesOverride(
    requestMessage: services_org_users_v1alpha1_preferences_pb.GetUserLocalePreferencesOverrideRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_users_v1alpha1_preferences_pb.GetUserLocalePreferencesOverrideResponse|null) => void
  ): UnaryResponse;
  updateUserLocalePreferencesOverride(
    requestMessage: services_org_users_v1alpha1_preferences_pb.UpdateUserLocalePreferencesOverrideRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_users_v1alpha1_preferences_pb.UpdateUserLocalePreferencesOverrideResponse|null) => void
  ): UnaryResponse;
  updateUserLocalePreferencesOverride(
    requestMessage: services_org_users_v1alpha1_preferences_pb.UpdateUserLocalePreferencesOverrideRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_users_v1alpha1_preferences_pb.UpdateUserLocalePreferencesOverrideResponse|null) => void
  ): UnaryResponse;
  getMyUserLocalePreferencesOverride(
    requestMessage: services_org_users_v1alpha1_preferences_pb.GetMyUserLocalePreferencesOverrideRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_users_v1alpha1_preferences_pb.GetMyUserLocalePreferencesOverrideResponse|null) => void
  ): UnaryResponse;
  getMyUserLocalePreferencesOverride(
    requestMessage: services_org_users_v1alpha1_preferences_pb.GetMyUserLocalePreferencesOverrideRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_users_v1alpha1_preferences_pb.GetMyUserLocalePreferencesOverrideResponse|null) => void
  ): UnaryResponse;
  updateMyUserLocalePreferencesOverride(
    requestMessage: services_org_users_v1alpha1_preferences_pb.UpdateMyUserLocalePreferencesOverrideRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_users_v1alpha1_preferences_pb.UpdateMyUserLocalePreferencesOverrideResponse|null) => void
  ): UnaryResponse;
  updateMyUserLocalePreferencesOverride(
    requestMessage: services_org_users_v1alpha1_preferences_pb.UpdateMyUserLocalePreferencesOverrideRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_users_v1alpha1_preferences_pb.UpdateMyUserLocalePreferencesOverrideResponse|null) => void
  ): UnaryResponse;
}

