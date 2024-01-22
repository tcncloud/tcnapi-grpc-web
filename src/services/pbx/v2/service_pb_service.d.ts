// package: services.pbx.v2
// file: services/pbx/v2/service.proto

import * as services_pbx_v2_service_pb from "../../../services/pbx/v2/service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type PBXServiceListPBXUsers = {
  readonly methodName: string;
  readonly service: typeof PBXService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_pbx_v2_service_pb.ListPBXUsersRequest;
  readonly responseType: typeof services_pbx_v2_service_pb.ListPBXUsersResponse;
};

type PBXServiceGetPBXUser = {
  readonly methodName: string;
  readonly service: typeof PBXService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_pbx_v2_service_pb.GetPBXUserRequest;
  readonly responseType: typeof services_pbx_v2_service_pb.GetPBXUserResponse;
};

type PBXServiceListRingGroups = {
  readonly methodName: string;
  readonly service: typeof PBXService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_pbx_v2_service_pb.ListRingGroupsRequest;
  readonly responseType: typeof services_pbx_v2_service_pb.ListRingGroupsResponse;
};

type PBXServiceGetRingGroup = {
  readonly methodName: string;
  readonly service: typeof PBXService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_pbx_v2_service_pb.GetRingGroupRequest;
  readonly responseType: typeof services_pbx_v2_service_pb.GetRingGroupResponse;
};

type PBXServiceUpdateSIPAccount = {
  readonly methodName: string;
  readonly service: typeof PBXService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_pbx_v2_service_pb.UpdateSIPAccountRequest;
  readonly responseType: typeof services_pbx_v2_service_pb.UpdateSIPAccountResponse;
};

type PBXServiceUpdateRingGroup = {
  readonly methodName: string;
  readonly service: typeof PBXService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_pbx_v2_service_pb.UpdateRingGroupRequest;
  readonly responseType: typeof services_pbx_v2_service_pb.UpdateRingGroupResponse;
};

type PBXServiceCreateRingGroup = {
  readonly methodName: string;
  readonly service: typeof PBXService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_pbx_v2_service_pb.CreateRingGroupRequest;
  readonly responseType: typeof services_pbx_v2_service_pb.CreateRingGroupResponse;
};

type PBXServiceDeleteRingGroup = {
  readonly methodName: string;
  readonly service: typeof PBXService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_pbx_v2_service_pb.DeleteRingGroupRequest;
  readonly responseType: typeof services_pbx_v2_service_pb.DeleteRingGroupResponse;
};

type PBXServiceAssignRandomExtension = {
  readonly methodName: string;
  readonly service: typeof PBXService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_pbx_v2_service_pb.AssignRandomExtensionRequest;
  readonly responseType: typeof services_pbx_v2_service_pb.AssignRandomExtensionResponse;
};

export class PBXService {
  static readonly serviceName: string;
  static readonly ListPBXUsers: PBXServiceListPBXUsers;
  static readonly GetPBXUser: PBXServiceGetPBXUser;
  static readonly ListRingGroups: PBXServiceListRingGroups;
  static readonly GetRingGroup: PBXServiceGetRingGroup;
  static readonly UpdateSIPAccount: PBXServiceUpdateSIPAccount;
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
  listPBXUsers(
    requestMessage: services_pbx_v2_service_pb.ListPBXUsersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_pbx_v2_service_pb.ListPBXUsersResponse|null) => void
  ): UnaryResponse;
  listPBXUsers(
    requestMessage: services_pbx_v2_service_pb.ListPBXUsersRequest,
    callback: (error: ServiceError|null, responseMessage: services_pbx_v2_service_pb.ListPBXUsersResponse|null) => void
  ): UnaryResponse;
  getPBXUser(
    requestMessage: services_pbx_v2_service_pb.GetPBXUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_pbx_v2_service_pb.GetPBXUserResponse|null) => void
  ): UnaryResponse;
  getPBXUser(
    requestMessage: services_pbx_v2_service_pb.GetPBXUserRequest,
    callback: (error: ServiceError|null, responseMessage: services_pbx_v2_service_pb.GetPBXUserResponse|null) => void
  ): UnaryResponse;
  listRingGroups(
    requestMessage: services_pbx_v2_service_pb.ListRingGroupsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_pbx_v2_service_pb.ListRingGroupsResponse|null) => void
  ): UnaryResponse;
  listRingGroups(
    requestMessage: services_pbx_v2_service_pb.ListRingGroupsRequest,
    callback: (error: ServiceError|null, responseMessage: services_pbx_v2_service_pb.ListRingGroupsResponse|null) => void
  ): UnaryResponse;
  getRingGroup(
    requestMessage: services_pbx_v2_service_pb.GetRingGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_pbx_v2_service_pb.GetRingGroupResponse|null) => void
  ): UnaryResponse;
  getRingGroup(
    requestMessage: services_pbx_v2_service_pb.GetRingGroupRequest,
    callback: (error: ServiceError|null, responseMessage: services_pbx_v2_service_pb.GetRingGroupResponse|null) => void
  ): UnaryResponse;
  updateSIPAccount(
    requestMessage: services_pbx_v2_service_pb.UpdateSIPAccountRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_pbx_v2_service_pb.UpdateSIPAccountResponse|null) => void
  ): UnaryResponse;
  updateSIPAccount(
    requestMessage: services_pbx_v2_service_pb.UpdateSIPAccountRequest,
    callback: (error: ServiceError|null, responseMessage: services_pbx_v2_service_pb.UpdateSIPAccountResponse|null) => void
  ): UnaryResponse;
  updateRingGroup(
    requestMessage: services_pbx_v2_service_pb.UpdateRingGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_pbx_v2_service_pb.UpdateRingGroupResponse|null) => void
  ): UnaryResponse;
  updateRingGroup(
    requestMessage: services_pbx_v2_service_pb.UpdateRingGroupRequest,
    callback: (error: ServiceError|null, responseMessage: services_pbx_v2_service_pb.UpdateRingGroupResponse|null) => void
  ): UnaryResponse;
  createRingGroup(
    requestMessage: services_pbx_v2_service_pb.CreateRingGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_pbx_v2_service_pb.CreateRingGroupResponse|null) => void
  ): UnaryResponse;
  createRingGroup(
    requestMessage: services_pbx_v2_service_pb.CreateRingGroupRequest,
    callback: (error: ServiceError|null, responseMessage: services_pbx_v2_service_pb.CreateRingGroupResponse|null) => void
  ): UnaryResponse;
  deleteRingGroup(
    requestMessage: services_pbx_v2_service_pb.DeleteRingGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_pbx_v2_service_pb.DeleteRingGroupResponse|null) => void
  ): UnaryResponse;
  deleteRingGroup(
    requestMessage: services_pbx_v2_service_pb.DeleteRingGroupRequest,
    callback: (error: ServiceError|null, responseMessage: services_pbx_v2_service_pb.DeleteRingGroupResponse|null) => void
  ): UnaryResponse;
  assignRandomExtension(
    requestMessage: services_pbx_v2_service_pb.AssignRandomExtensionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_pbx_v2_service_pb.AssignRandomExtensionResponse|null) => void
  ): UnaryResponse;
  assignRandomExtension(
    requestMessage: services_pbx_v2_service_pb.AssignRandomExtensionRequest,
    callback: (error: ServiceError|null, responseMessage: services_pbx_v2_service_pb.AssignRandomExtensionResponse|null) => void
  ): UnaryResponse;
}

