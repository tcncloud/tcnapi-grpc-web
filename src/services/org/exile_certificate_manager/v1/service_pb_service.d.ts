// package: services.org.exile_certificate_manager.v1
// file: services/org/exile_certificate_manager/v1/service.proto

import * as services_org_exile_certificate_manager_v1_service_pb from "../../../../services/org/exile_certificate_manager/v1/service_pb";
import * as services_org_exile_certificate_manager_v1_certificate_configuration_pb from "../../../../services/org/exile_certificate_manager/v1/certificate_configuration_pb";
import * as services_org_exile_certificate_manager_v1_certificate_info_pb from "../../../../services/org/exile_certificate_manager/v1/certificate_info_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ExileCertificateManagerServiceCreateCertificateInfo = {
  readonly methodName: string;
  readonly service: typeof ExileCertificateManagerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_exile_certificate_manager_v1_certificate_info_pb.CreateCertificateInfoRequest;
  readonly responseType: typeof services_org_exile_certificate_manager_v1_certificate_info_pb.CreateCertificateInfoResponse;
};

type ExileCertificateManagerServiceDeleteCertificateInfo = {
  readonly methodName: string;
  readonly service: typeof ExileCertificateManagerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_exile_certificate_manager_v1_certificate_info_pb.DeleteCertificateInfoRequest;
  readonly responseType: typeof services_org_exile_certificate_manager_v1_certificate_info_pb.DeleteCertificateInfoResponse;
};

type ExileCertificateManagerServiceRevokeCertificateInfo = {
  readonly methodName: string;
  readonly service: typeof ExileCertificateManagerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_exile_certificate_manager_v1_certificate_info_pb.RevokeCertificateInfoRequest;
  readonly responseType: typeof services_org_exile_certificate_manager_v1_certificate_info_pb.RevokeCertificateInfoResponse;
};

type ExileCertificateManagerServiceAssignCertificateConfiguration = {
  readonly methodName: string;
  readonly service: typeof ExileCertificateManagerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_exile_certificate_manager_v1_certificate_info_pb.AssignCertificateConfigurationRequest;
  readonly responseType: typeof services_org_exile_certificate_manager_v1_certificate_info_pb.AssignCertificateConfigurationResponse;
};

type ExileCertificateManagerServiceUnassignCertificateConfiguration = {
  readonly methodName: string;
  readonly service: typeof ExileCertificateManagerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_exile_certificate_manager_v1_certificate_info_pb.UnassignCertificateConfigurationRequest;
  readonly responseType: typeof services_org_exile_certificate_manager_v1_certificate_info_pb.UnassignCertificateConfigurationResponse;
};

type ExileCertificateManagerServiceListCertificateInfo = {
  readonly methodName: string;
  readonly service: typeof ExileCertificateManagerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_exile_certificate_manager_v1_certificate_info_pb.ListCertificateInfoRequest;
  readonly responseType: typeof services_org_exile_certificate_manager_v1_certificate_info_pb.ListCertificateInfoResponse;
};

type ExileCertificateManagerServiceCreateCertificateConfiguration = {
  readonly methodName: string;
  readonly service: typeof ExileCertificateManagerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_exile_certificate_manager_v1_certificate_configuration_pb.CreateCertificateConfigurationRequest;
  readonly responseType: typeof services_org_exile_certificate_manager_v1_certificate_configuration_pb.CreateCertificateConfigurationResponse;
};

type ExileCertificateManagerServiceUpdateCertificateConfiguration = {
  readonly methodName: string;
  readonly service: typeof ExileCertificateManagerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_exile_certificate_manager_v1_certificate_configuration_pb.UpdateCertificateConfigurationRequest;
  readonly responseType: typeof services_org_exile_certificate_manager_v1_certificate_configuration_pb.UpdateCertificateConfigurationResponse;
};

type ExileCertificateManagerServiceDeleteCertificateConfiguration = {
  readonly methodName: string;
  readonly service: typeof ExileCertificateManagerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_exile_certificate_manager_v1_certificate_configuration_pb.DeleteCertificateConfigurationRequest;
  readonly responseType: typeof services_org_exile_certificate_manager_v1_certificate_configuration_pb.DeleteCertificateConfigurationResponse;
};

type ExileCertificateManagerServiceListCertificateConfigurations = {
  readonly methodName: string;
  readonly service: typeof ExileCertificateManagerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_org_exile_certificate_manager_v1_certificate_configuration_pb.ListCertificateConfigurationsRequest;
  readonly responseType: typeof services_org_exile_certificate_manager_v1_certificate_configuration_pb.ListCertificateConfigurationsResponse;
};

export class ExileCertificateManagerService {
  static readonly serviceName: string;
  static readonly CreateCertificateInfo: ExileCertificateManagerServiceCreateCertificateInfo;
  static readonly DeleteCertificateInfo: ExileCertificateManagerServiceDeleteCertificateInfo;
  static readonly RevokeCertificateInfo: ExileCertificateManagerServiceRevokeCertificateInfo;
  static readonly AssignCertificateConfiguration: ExileCertificateManagerServiceAssignCertificateConfiguration;
  static readonly UnassignCertificateConfiguration: ExileCertificateManagerServiceUnassignCertificateConfiguration;
  static readonly ListCertificateInfo: ExileCertificateManagerServiceListCertificateInfo;
  static readonly CreateCertificateConfiguration: ExileCertificateManagerServiceCreateCertificateConfiguration;
  static readonly UpdateCertificateConfiguration: ExileCertificateManagerServiceUpdateCertificateConfiguration;
  static readonly DeleteCertificateConfiguration: ExileCertificateManagerServiceDeleteCertificateConfiguration;
  static readonly ListCertificateConfigurations: ExileCertificateManagerServiceListCertificateConfigurations;
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
  createCertificateInfo(
    requestMessage: services_org_exile_certificate_manager_v1_certificate_info_pb.CreateCertificateInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1_certificate_info_pb.CreateCertificateInfoResponse|null) => void
  ): UnaryResponse;
  createCertificateInfo(
    requestMessage: services_org_exile_certificate_manager_v1_certificate_info_pb.CreateCertificateInfoRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1_certificate_info_pb.CreateCertificateInfoResponse|null) => void
  ): UnaryResponse;
  deleteCertificateInfo(
    requestMessage: services_org_exile_certificate_manager_v1_certificate_info_pb.DeleteCertificateInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1_certificate_info_pb.DeleteCertificateInfoResponse|null) => void
  ): UnaryResponse;
  deleteCertificateInfo(
    requestMessage: services_org_exile_certificate_manager_v1_certificate_info_pb.DeleteCertificateInfoRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1_certificate_info_pb.DeleteCertificateInfoResponse|null) => void
  ): UnaryResponse;
  revokeCertificateInfo(
    requestMessage: services_org_exile_certificate_manager_v1_certificate_info_pb.RevokeCertificateInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1_certificate_info_pb.RevokeCertificateInfoResponse|null) => void
  ): UnaryResponse;
  revokeCertificateInfo(
    requestMessage: services_org_exile_certificate_manager_v1_certificate_info_pb.RevokeCertificateInfoRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1_certificate_info_pb.RevokeCertificateInfoResponse|null) => void
  ): UnaryResponse;
  assignCertificateConfiguration(
    requestMessage: services_org_exile_certificate_manager_v1_certificate_info_pb.AssignCertificateConfigurationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1_certificate_info_pb.AssignCertificateConfigurationResponse|null) => void
  ): UnaryResponse;
  assignCertificateConfiguration(
    requestMessage: services_org_exile_certificate_manager_v1_certificate_info_pb.AssignCertificateConfigurationRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1_certificate_info_pb.AssignCertificateConfigurationResponse|null) => void
  ): UnaryResponse;
  unassignCertificateConfiguration(
    requestMessage: services_org_exile_certificate_manager_v1_certificate_info_pb.UnassignCertificateConfigurationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1_certificate_info_pb.UnassignCertificateConfigurationResponse|null) => void
  ): UnaryResponse;
  unassignCertificateConfiguration(
    requestMessage: services_org_exile_certificate_manager_v1_certificate_info_pb.UnassignCertificateConfigurationRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1_certificate_info_pb.UnassignCertificateConfigurationResponse|null) => void
  ): UnaryResponse;
  listCertificateInfo(
    requestMessage: services_org_exile_certificate_manager_v1_certificate_info_pb.ListCertificateInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1_certificate_info_pb.ListCertificateInfoResponse|null) => void
  ): UnaryResponse;
  listCertificateInfo(
    requestMessage: services_org_exile_certificate_manager_v1_certificate_info_pb.ListCertificateInfoRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1_certificate_info_pb.ListCertificateInfoResponse|null) => void
  ): UnaryResponse;
  createCertificateConfiguration(
    requestMessage: services_org_exile_certificate_manager_v1_certificate_configuration_pb.CreateCertificateConfigurationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1_certificate_configuration_pb.CreateCertificateConfigurationResponse|null) => void
  ): UnaryResponse;
  createCertificateConfiguration(
    requestMessage: services_org_exile_certificate_manager_v1_certificate_configuration_pb.CreateCertificateConfigurationRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1_certificate_configuration_pb.CreateCertificateConfigurationResponse|null) => void
  ): UnaryResponse;
  updateCertificateConfiguration(
    requestMessage: services_org_exile_certificate_manager_v1_certificate_configuration_pb.UpdateCertificateConfigurationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1_certificate_configuration_pb.UpdateCertificateConfigurationResponse|null) => void
  ): UnaryResponse;
  updateCertificateConfiguration(
    requestMessage: services_org_exile_certificate_manager_v1_certificate_configuration_pb.UpdateCertificateConfigurationRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1_certificate_configuration_pb.UpdateCertificateConfigurationResponse|null) => void
  ): UnaryResponse;
  deleteCertificateConfiguration(
    requestMessage: services_org_exile_certificate_manager_v1_certificate_configuration_pb.DeleteCertificateConfigurationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1_certificate_configuration_pb.DeleteCertificateConfigurationResponse|null) => void
  ): UnaryResponse;
  deleteCertificateConfiguration(
    requestMessage: services_org_exile_certificate_manager_v1_certificate_configuration_pb.DeleteCertificateConfigurationRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1_certificate_configuration_pb.DeleteCertificateConfigurationResponse|null) => void
  ): UnaryResponse;
  listCertificateConfigurations(
    requestMessage: services_org_exile_certificate_manager_v1_certificate_configuration_pb.ListCertificateConfigurationsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1_certificate_configuration_pb.ListCertificateConfigurationsResponse|null) => void
  ): UnaryResponse;
  listCertificateConfigurations(
    requestMessage: services_org_exile_certificate_manager_v1_certificate_configuration_pb.ListCertificateConfigurationsRequest,
    callback: (error: ServiceError|null, responseMessage: services_org_exile_certificate_manager_v1_certificate_configuration_pb.ListCertificateConfigurationsResponse|null) => void
  ): UnaryResponse;
}

