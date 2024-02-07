// package: api.v1alpha1.org.idp
// file: api/v1alpha1/org/idp/service.proto

import * as api_v1alpha1_org_idp_service_pb from "../../../../api/v1alpha1/org/idp/service_pb";
import * as api_v1alpha1_org_idp_entities_pb from "../../../../api/v1alpha1/org/idp/entities_pb";
import {grpc} from "@improbable-eng/grpc-web";

type IdpServiceCreateClient = {
  readonly methodName: string;
  readonly service: typeof IdpService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_idp_entities_pb.CreateClientReq;
  readonly responseType: typeof api_v1alpha1_org_idp_entities_pb.CreateClientResp;
};

type IdpServiceUpdateClient = {
  readonly methodName: string;
  readonly service: typeof IdpService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_idp_entities_pb.UpdateClientReq;
  readonly responseType: typeof api_v1alpha1_org_idp_entities_pb.UpdateClientResp;
};

type IdpServiceDeleteClient = {
  readonly methodName: string;
  readonly service: typeof IdpService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_idp_entities_pb.DeleteClientReq;
  readonly responseType: typeof api_v1alpha1_org_idp_entities_pb.DeleteClientResp;
};

type IdpServiceListClients = {
  readonly methodName: string;
  readonly service: typeof IdpService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_idp_entities_pb.ListClientsReq;
  readonly responseType: typeof api_v1alpha1_org_idp_entities_pb.ListClientsResp;
};

export class IdpService {
  static readonly serviceName: string;
  static readonly CreateClient: IdpServiceCreateClient;
  static readonly UpdateClient: IdpServiceUpdateClient;
  static readonly DeleteClient: IdpServiceDeleteClient;
  static readonly ListClients: IdpServiceListClients;
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

export class IdpServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createClient(
    requestMessage: api_v1alpha1_org_idp_entities_pb.CreateClientReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_idp_entities_pb.CreateClientResp|null) => void
  ): UnaryResponse;
  createClient(
    requestMessage: api_v1alpha1_org_idp_entities_pb.CreateClientReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_idp_entities_pb.CreateClientResp|null) => void
  ): UnaryResponse;
  updateClient(
    requestMessage: api_v1alpha1_org_idp_entities_pb.UpdateClientReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_idp_entities_pb.UpdateClientResp|null) => void
  ): UnaryResponse;
  updateClient(
    requestMessage: api_v1alpha1_org_idp_entities_pb.UpdateClientReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_idp_entities_pb.UpdateClientResp|null) => void
  ): UnaryResponse;
  deleteClient(
    requestMessage: api_v1alpha1_org_idp_entities_pb.DeleteClientReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_idp_entities_pb.DeleteClientResp|null) => void
  ): UnaryResponse;
  deleteClient(
    requestMessage: api_v1alpha1_org_idp_entities_pb.DeleteClientReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_idp_entities_pb.DeleteClientResp|null) => void
  ): UnaryResponse;
  listClients(
    requestMessage: api_v1alpha1_org_idp_entities_pb.ListClientsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_idp_entities_pb.ListClientsResp|null) => void
  ): UnaryResponse;
  listClients(
    requestMessage: api_v1alpha1_org_idp_entities_pb.ListClientsReq,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_idp_entities_pb.ListClientsResp|null) => void
  ): UnaryResponse;
}

