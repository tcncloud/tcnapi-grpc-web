// package: services.org.exile_certificate_manager.v1alpha1
// file: services/org/exile_certificate_manager/v1alpha1/service.proto

import * as services_org_exile_certificate_manager_v1alpha1_service_pb from "../../../../services/org/exile_certificate_manager/v1alpha1/service_pb";
import * as services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb from "../../../../services/org/exile_certificate_manager/v1alpha1/exile_certificate_pb";
import * as services_org_exile_certificate_manager_v1alpha1_exile_configuration_pb from "../../../../services/org/exile_certificate_manager/v1alpha1/exile_configuration_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ExileCertificateManagerServiceCreateExileCertificate = {
  readonly methodName: string;
  readonly service: typeof ExileCertificateManagerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.CreateExileCertificateRequest;
  readonly responseType: typeof services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.CreateExileCertificateResponse;
};

type ExileCertificateManagerServiceRevokeExileCertificate = {
  readonly methodName: string;
  readonly service: typeof ExileCertificateManagerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.RevokeExileCertificateRequest;
  readonly responseType: typeof services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.RevokeExileCertificateResponse;
};

type ExileCertificateManagerServiceAssignExileConfiguration = {
  readonly methodName: string;
  readonly service: typeof ExileCertificateManagerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.AssignExileConfigurationRequest;
  readonly responseType: typeof services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.AssignExileConfigurationResponse;
};

type ExileCertificateManagerServiceUnassignExileConfiguration = {
  readonly methodName: string;
  readonly service: typeof ExileCertificateManagerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.UnassignExileConfigurationRequest;
  readonly responseType: typeof services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.UnassignExileConfigurationResponse;
};

type ExileCertificateManagerServiceListExileCertificates = {
  readonly methodName: string;
  readonly service: typeof ExileCertificateManagerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.ListExileCertificatesRequest;
  readonly responseType: typeof services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.ListExileCertificatesResponse;
};

type ExileCertificateManagerServiceCreateExileConfiguration = {
  readonly methodName: string;
  readonly service: typeof ExileCertificateManagerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_exile_certificate_manager_v1alpha1_exile_configuration_pb.CreateExileConfigurationRequest;
  readonly responseType: typeof services_org_exile_certificate_manager_v1alpha1_exile_configuration_pb.CreateExileConfigurationResponse;
};

type ExileCertificateManagerServiceUpdateExileConfiguration = {
  readonly methodName: string;
  readonly service: typeof ExileCertificateManagerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_exile_certificate_manager_v1alpha1_exile_configuration_pb.UpdateExileConfigurationRequest;
  readonly responseType: typeof services_org_exile_certificate_manager_v1alpha1_exile_configuration_pb.UpdateExileConfigurationResponse;
};

type ExileCertificateManagerServiceDeleteExileConfiguration = {
  readonly methodName: string;
  readonly service: typeof ExileCertificateManagerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_exile_certificate_manager_v1alpha1_exile_configuration_pb.DeleteExileConfigurationRequest;
  readonly responseType: typeof services_org_exile_certificate_manager_v1alpha1_exile_configuration_pb.DeleteExileConfigurationResponse;
};

type ExileCertificateManagerServiceListExileConfigurations = {
  readonly methodName: string;
  readonly service: typeof ExileCertificateManagerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_exile_certificate_manager_v1alpha1_exile_configuration_pb.ListExileConfigurationsRequest;
  readonly responseType: typeof services_org_exile_certificate_manager_v1alpha1_exile_configuration_pb.ListExileConfigurationsResponse;
};

export class ExileCertificateManagerService {
  static readonly serviceName: string;
  static readonly CreateExileCertificate: ExileCertificateManagerServiceCreateExileCertificate;
  static readonly RevokeExileCertificate: ExileCertificateManagerServiceRevokeExileCertificate;
  static readonly AssignExileConfiguration: ExileCertificateManagerServiceAssignExileConfiguration;
  static readonly UnassignExileConfiguration: ExileCertificateManagerServiceUnassignExileConfiguration;
  static readonly ListExileCertificates: ExileCertificateManagerServiceListExileCertificates;
  static readonly CreateExileConfiguration: ExileCertificateManagerServiceCreateExileConfiguration;
  static readonly UpdateExileConfiguration: ExileCertificateManagerServiceUpdateExileConfiguration;
  static readonly DeleteExileConfiguration: ExileCertificateManagerServiceDeleteExileConfiguration;
  static readonly ListExileConfigurations: ExileCertificateManagerServiceListExileConfigurations;
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

export class ExileCertificateManagerServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createExileCertificate(
    requestMessage: services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.CreateExileCertificateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.CreateExileCertificateResponse|null) => void
  ): UnaryResponse;
  createExileCertificate(
    requestMessage: services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.CreateExileCertificateRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.CreateExileCertificateResponse|null) => void
  ): UnaryResponse;
  revokeExileCertificate(
    requestMessage: services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.RevokeExileCertificateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.RevokeExileCertificateResponse|null) => void
  ): UnaryResponse;
  revokeExileCertificate(
    requestMessage: services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.RevokeExileCertificateRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.RevokeExileCertificateResponse|null) => void
  ): UnaryResponse;
  assignExileConfiguration(
    requestMessage: services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.AssignExileConfigurationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.AssignExileConfigurationResponse|null) => void
  ): UnaryResponse;
  assignExileConfiguration(
    requestMessage: services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.AssignExileConfigurationRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.AssignExileConfigurationResponse|null) => void
  ): UnaryResponse;
  unassignExileConfiguration(
    requestMessage: services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.UnassignExileConfigurationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.UnassignExileConfigurationResponse|null) => void
  ): UnaryResponse;
  unassignExileConfiguration(
    requestMessage: services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.UnassignExileConfigurationRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.UnassignExileConfigurationResponse|null) => void
  ): UnaryResponse;
  listExileCertificates(
    requestMessage: services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.ListExileCertificatesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.ListExileCertificatesResponse|null) => void
  ): UnaryResponse;
  listExileCertificates(
    requestMessage: services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.ListExileCertificatesRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.ListExileCertificatesResponse|null) => void
  ): UnaryResponse;
  createExileConfiguration(
    requestMessage: services_org_exile_certificate_manager_v1alpha1_exile_configuration_pb.CreateExileConfigurationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1alpha1_exile_configuration_pb.CreateExileConfigurationResponse|null) => void
  ): UnaryResponse;
  createExileConfiguration(
    requestMessage: services_org_exile_certificate_manager_v1alpha1_exile_configuration_pb.CreateExileConfigurationRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1alpha1_exile_configuration_pb.CreateExileConfigurationResponse|null) => void
  ): UnaryResponse;
  updateExileConfiguration(
    requestMessage: services_org_exile_certificate_manager_v1alpha1_exile_configuration_pb.UpdateExileConfigurationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1alpha1_exile_configuration_pb.UpdateExileConfigurationResponse|null) => void
  ): UnaryResponse;
  updateExileConfiguration(
    requestMessage: services_org_exile_certificate_manager_v1alpha1_exile_configuration_pb.UpdateExileConfigurationRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1alpha1_exile_configuration_pb.UpdateExileConfigurationResponse|null) => void
  ): UnaryResponse;
  deleteExileConfiguration(
    requestMessage: services_org_exile_certificate_manager_v1alpha1_exile_configuration_pb.DeleteExileConfigurationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1alpha1_exile_configuration_pb.DeleteExileConfigurationResponse|null) => void
  ): UnaryResponse;
  deleteExileConfiguration(
    requestMessage: services_org_exile_certificate_manager_v1alpha1_exile_configuration_pb.DeleteExileConfigurationRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1alpha1_exile_configuration_pb.DeleteExileConfigurationResponse|null) => void
  ): UnaryResponse;
  listExileConfigurations(
    requestMessage: services_org_exile_certificate_manager_v1alpha1_exile_configuration_pb.ListExileConfigurationsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1alpha1_exile_configuration_pb.ListExileConfigurationsResponse|null) => void
  ): UnaryResponse;
  listExileConfigurations(
    requestMessage: services_org_exile_certificate_manager_v1alpha1_exile_configuration_pb.ListExileConfigurationsRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1alpha1_exile_configuration_pb.ListExileConfigurationsResponse|null) => void
  ): UnaryResponse;
}

