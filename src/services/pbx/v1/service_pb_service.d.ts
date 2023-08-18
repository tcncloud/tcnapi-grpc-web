// package: services.pbx.v1
// file: services/pbx/v1/service.proto

import * as services_pbx_v1_service_pb from "../../../services/pbx/v1/service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type PBXServiceQueryPbxUsers = {
  readonly methodName: string;
  readonly service: typeof PBXService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_pbx_v1_service_pb.QueryPbxUsersRequest;
  readonly responseType: typeof services_pbx_v1_service_pb.QueryPbxUsersResponse;
};

type PBXServiceQueryRingGroups = {
  readonly methodName: string;
  readonly service: typeof PBXService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_pbx_v1_service_pb.QueryRingGroupsRequest;
  readonly responseType: typeof services_pbx_v1_service_pb.QueryRingGroupsResponse;
};

type PBXServiceUpdatePbxUser = {
  readonly methodName: string;
  readonly service: typeof PBXService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_pbx_v1_service_pb.UpdatePbxUserRequest;
  readonly responseType: typeof services_pbx_v1_service_pb.UpdatePbxUserResponse;
};

type PBXServiceUpdateRingGroup = {
  readonly methodName: string;
  readonly service: typeof PBXService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_pbx_v1_service_pb.UpdateRingGroupRequest;
  readonly responseType: typeof services_pbx_v1_service_pb.UpdateRingGroupResponse;
};

type PBXServiceCreateRingGroup = {
  readonly methodName: string;
  readonly service: typeof PBXService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_pbx_v1_service_pb.CreateRingGroupRequest;
  readonly responseType: typeof services_pbx_v1_service_pb.CreateRingGroupResponse;
};

type PBXServiceDeleteRingGroup = {
  readonly methodName: string;
  readonly service: typeof PBXService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_pbx_v1_service_pb.DeleteRingGroupRequest;
  readonly responseType: typeof services_pbx_v1_service_pb.DeleteRingGroupResponse;
};

type PBXServiceAssignRandomExtension = {
  readonly methodName: string;
  readonly service: typeof PBXService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_pbx_v1_service_pb.AssignRandomExtensionRequest;
  readonly responseType: typeof services_pbx_v1_service_pb.AssignRandomExtensionResponse;
};

export class PBXService {
  static readonly serviceName: string;
  static readonly QueryPbxUsers: PBXServiceQueryPbxUsers;
  static readonly QueryRingGroups: PBXServiceQueryRingGroups;
  static readonly UpdatePbxUser: PBXServiceUpdatePbxUser;
  static readonly UpdateRingGroup: PBXServiceUpdateRingGroup;
  static readonly CreateRingGroup: PBXServiceCreateRingGroup;
  static readonly DeleteRingGroup: PBXServiceDeleteRingGroup;
  static readonly AssignRandomExtension: PBXServiceAssignRandomExtension;
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

export class PBXServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  queryPbxUsers(
    requestMessage: services_pbx_v1_service_pb.QueryPbxUsersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_pbx_v1_service_pb.QueryPbxUsersResponse|null) => void
  ): UnaryResponse;
  queryPbxUsers(
    requestMessage: services_pbx_v1_service_pb.QueryPbxUsersRequest,
    callback: (error: ServiceError|null, responseMessage: services_pbx_v1_service_pb.QueryPbxUsersResponse|null) => void
  ): UnaryResponse;
  queryRingGroups(
    requestMessage: services_pbx_v1_service_pb.QueryRingGroupsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_pbx_v1_service_pb.QueryRingGroupsResponse|null) => void
  ): UnaryResponse;
  queryRingGroups(
    requestMessage: services_pbx_v1_service_pb.QueryRingGroupsRequest,
    callback: (error: ServiceError|null, responseMessage: services_pbx_v1_service_pb.QueryRingGroupsResponse|null) => void
  ): UnaryResponse;
  updatePbxUser(
    requestMessage: services_pbx_v1_service_pb.UpdatePbxUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_pbx_v1_service_pb.UpdatePbxUserResponse|null) => void
  ): UnaryResponse;
  updatePbxUser(
    requestMessage: services_pbx_v1_service_pb.UpdatePbxUserRequest,
    callback: (error: ServiceError|null, responseMessage: services_pbx_v1_service_pb.UpdatePbxUserResponse|null) => void
  ): UnaryResponse;
  updateRingGroup(
    requestMessage: services_pbx_v1_service_pb.UpdateRingGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_pbx_v1_service_pb.UpdateRingGroupResponse|null) => void
  ): UnaryResponse;
  updateRingGroup(
    requestMessage: services_pbx_v1_service_pb.UpdateRingGroupRequest,
    callback: (error: ServiceError|null, responseMessage: services_pbx_v1_service_pb.UpdateRingGroupResponse|null) => void
  ): UnaryResponse;
  createRingGroup(
    requestMessage: services_pbx_v1_service_pb.CreateRingGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_pbx_v1_service_pb.CreateRingGroupResponse|null) => void
  ): UnaryResponse;
  createRingGroup(
    requestMessage: services_pbx_v1_service_pb.CreateRingGroupRequest,
    callback: (error: ServiceError|null, responseMessage: services_pbx_v1_service_pb.CreateRingGroupResponse|null) => void
  ): UnaryResponse;
  deleteRingGroup(
    requestMessage: services_pbx_v1_service_pb.DeleteRingGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_pbx_v1_service_pb.DeleteRingGroupResponse|null) => void
  ): UnaryResponse;
  deleteRingGroup(
    requestMessage: services_pbx_v1_service_pb.DeleteRingGroupRequest,
    callback: (error: ServiceError|null, responseMessage: services_pbx_v1_service_pb.DeleteRingGroupResponse|null) => void
  ): UnaryResponse;
  assignRandomExtension(
    requestMessage: services_pbx_v1_service_pb.AssignRandomExtensionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_pbx_v1_service_pb.AssignRandomExtensionResponse|null) => void
  ): UnaryResponse;
  assignRandomExtension(
    requestMessage: services_pbx_v1_service_pb.AssignRandomExtensionRequest,
    callback: (error: ServiceError|null, responseMessage: services_pbx_v1_service_pb.AssignRandomExtensionResponse|null) => void
  ): UnaryResponse;
}

