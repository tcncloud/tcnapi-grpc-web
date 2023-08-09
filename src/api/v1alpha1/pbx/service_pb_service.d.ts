// package: api.v1alpha1.pbx
// file: api/v1alpha1/pbx/service.proto

import * as api_v1alpha1_pbx_service_pb from "../../../api/v1alpha1/pbx/service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type PBXListPbxUsers = {
  readonly methodName: string;
  readonly service: typeof PBX;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_pbx_service_pb.ListPbxUsersRequest;
  readonly responseType: typeof api_v1alpha1_pbx_service_pb.ListPbxUsersResponse;
};

type PBXActivatePbxUser = {
  readonly methodName: string;
  readonly service: typeof PBX;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_pbx_service_pb.ActivatePbxUserRequest;
  readonly responseType: typeof api_v1alpha1_pbx_service_pb.ActivatePbxUserResponse;
};

type PBXDeactivatePbxUser = {
  readonly methodName: string;
  readonly service: typeof PBX;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_pbx_service_pb.DeactivatePbxUserRequest;
  readonly responseType: typeof api_v1alpha1_pbx_service_pb.DeactivatePbxUserResponse;
};

type PBXUpdateUserExtension = {
  readonly methodName: string;
  readonly service: typeof PBX;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_pbx_service_pb.UpdateUserExtensionRequest;
  readonly responseType: typeof api_v1alpha1_pbx_service_pb.UpdateUserExtensionResponse;
};

type PBXCreateRingGroup = {
  readonly methodName: string;
  readonly service: typeof PBX;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_pbx_service_pb.CreateRingGroupRequest;
  readonly responseType: typeof api_v1alpha1_pbx_service_pb.CreateRingGroupResponse;
};

type PBXListRingGroups = {
  readonly methodName: string;
  readonly service: typeof PBX;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_pbx_service_pb.ListRingGroupsRequest;
  readonly responseType: typeof api_v1alpha1_pbx_service_pb.ListRingGroupsResponse;
};

type PBXUpdateRingGroup = {
  readonly methodName: string;
  readonly service: typeof PBX;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_pbx_service_pb.UpdateRingGroupRequest;
  readonly responseType: typeof api_v1alpha1_pbx_service_pb.UpdateRingGroupResponse;
};

type PBXAddUsersToRingGroup = {
  readonly methodName: string;
  readonly service: typeof PBX;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_pbx_service_pb.AddUsersToRingGroupRequest;
  readonly responseType: typeof api_v1alpha1_pbx_service_pb.AddUsersToRingGroupResponse;
};

type PBXRemoveUsersFromRingGroup = {
  readonly methodName: string;
  readonly service: typeof PBX;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_pbx_service_pb.RemoveUsersFromRingGroupRequest;
  readonly responseType: typeof api_v1alpha1_pbx_service_pb.RemoveUsersFromRingGroupResponse;
};

type PBXDeleteRingGroup = {
  readonly methodName: string;
  readonly service: typeof PBX;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_pbx_service_pb.DeleteRingGroupRequest;
  readonly responseType: typeof api_v1alpha1_pbx_service_pb.DeleteRingGroupResponse;
};

type PBXAssignRandomUserExtension = {
  readonly methodName: string;
  readonly service: typeof PBX;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_pbx_service_pb.AssignRandomUserExtensionRequest;
  readonly responseType: typeof api_v1alpha1_pbx_service_pb.AssignRandomUserExtensionResponse;
};

type PBXAssignRandomGroupExtension = {
  readonly methodName: string;
  readonly service: typeof PBX;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_pbx_service_pb.AssignRandomGroupExtensionRequest;
  readonly responseType: typeof api_v1alpha1_pbx_service_pb.AssignRandomGroupExtensionResponse;
};

export class PBX {
  static readonly serviceName: string;
  static readonly ListPbxUsers: PBXListPbxUsers;
  static readonly ActivatePbxUser: PBXActivatePbxUser;
  static readonly DeactivatePbxUser: PBXDeactivatePbxUser;
  static readonly UpdateUserExtension: PBXUpdateUserExtension;
  static readonly CreateRingGroup: PBXCreateRingGroup;
  static readonly ListRingGroups: PBXListRingGroups;
  static readonly UpdateRingGroup: PBXUpdateRingGroup;
  static readonly AddUsersToRingGroup: PBXAddUsersToRingGroup;
  static readonly RemoveUsersFromRingGroup: PBXRemoveUsersFromRingGroup;
  static readonly DeleteRingGroup: PBXDeleteRingGroup;
  static readonly AssignRandomUserExtension: PBXAssignRandomUserExtension;
  static readonly AssignRandomGroupExtension: PBXAssignRandomGroupExtension;
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

export class PBXClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  listPbxUsers(
    requestMessage: api_v1alpha1_pbx_service_pb.ListPbxUsersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_pbx_service_pb.ListPbxUsersResponse|null) => void
  ): UnaryResponse;
  listPbxUsers(
    requestMessage: api_v1alpha1_pbx_service_pb.ListPbxUsersRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_pbx_service_pb.ListPbxUsersResponse|null) => void
  ): UnaryResponse;
  activatePbxUser(
    requestMessage: api_v1alpha1_pbx_service_pb.ActivatePbxUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_pbx_service_pb.ActivatePbxUserResponse|null) => void
  ): UnaryResponse;
  activatePbxUser(
    requestMessage: api_v1alpha1_pbx_service_pb.ActivatePbxUserRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_pbx_service_pb.ActivatePbxUserResponse|null) => void
  ): UnaryResponse;
  deactivatePbxUser(
    requestMessage: api_v1alpha1_pbx_service_pb.DeactivatePbxUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_pbx_service_pb.DeactivatePbxUserResponse|null) => void
  ): UnaryResponse;
  deactivatePbxUser(
    requestMessage: api_v1alpha1_pbx_service_pb.DeactivatePbxUserRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_pbx_service_pb.DeactivatePbxUserResponse|null) => void
  ): UnaryResponse;
  updateUserExtension(
    requestMessage: api_v1alpha1_pbx_service_pb.UpdateUserExtensionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_pbx_service_pb.UpdateUserExtensionResponse|null) => void
  ): UnaryResponse;
  updateUserExtension(
    requestMessage: api_v1alpha1_pbx_service_pb.UpdateUserExtensionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_pbx_service_pb.UpdateUserExtensionResponse|null) => void
  ): UnaryResponse;
  createRingGroup(
    requestMessage: api_v1alpha1_pbx_service_pb.CreateRingGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_pbx_service_pb.CreateRingGroupResponse|null) => void
  ): UnaryResponse;
  createRingGroup(
    requestMessage: api_v1alpha1_pbx_service_pb.CreateRingGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_pbx_service_pb.CreateRingGroupResponse|null) => void
  ): UnaryResponse;
  listRingGroups(
    requestMessage: api_v1alpha1_pbx_service_pb.ListRingGroupsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_pbx_service_pb.ListRingGroupsResponse|null) => void
  ): UnaryResponse;
  listRingGroups(
    requestMessage: api_v1alpha1_pbx_service_pb.ListRingGroupsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_pbx_service_pb.ListRingGroupsResponse|null) => void
  ): UnaryResponse;
  updateRingGroup(
    requestMessage: api_v1alpha1_pbx_service_pb.UpdateRingGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_pbx_service_pb.UpdateRingGroupResponse|null) => void
  ): UnaryResponse;
  updateRingGroup(
    requestMessage: api_v1alpha1_pbx_service_pb.UpdateRingGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_pbx_service_pb.UpdateRingGroupResponse|null) => void
  ): UnaryResponse;
  addUsersToRingGroup(
    requestMessage: api_v1alpha1_pbx_service_pb.AddUsersToRingGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_pbx_service_pb.AddUsersToRingGroupResponse|null) => void
  ): UnaryResponse;
  addUsersToRingGroup(
    requestMessage: api_v1alpha1_pbx_service_pb.AddUsersToRingGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_pbx_service_pb.AddUsersToRingGroupResponse|null) => void
  ): UnaryResponse;
  removeUsersFromRingGroup(
    requestMessage: api_v1alpha1_pbx_service_pb.RemoveUsersFromRingGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_pbx_service_pb.RemoveUsersFromRingGroupResponse|null) => void
  ): UnaryResponse;
  removeUsersFromRingGroup(
    requestMessage: api_v1alpha1_pbx_service_pb.RemoveUsersFromRingGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_pbx_service_pb.RemoveUsersFromRingGroupResponse|null) => void
  ): UnaryResponse;
  deleteRingGroup(
    requestMessage: api_v1alpha1_pbx_service_pb.DeleteRingGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_pbx_service_pb.DeleteRingGroupResponse|null) => void
  ): UnaryResponse;
  deleteRingGroup(
    requestMessage: api_v1alpha1_pbx_service_pb.DeleteRingGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_pbx_service_pb.DeleteRingGroupResponse|null) => void
  ): UnaryResponse;
  assignRandomUserExtension(
    requestMessage: api_v1alpha1_pbx_service_pb.AssignRandomUserExtensionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_pbx_service_pb.AssignRandomUserExtensionResponse|null) => void
  ): UnaryResponse;
  assignRandomUserExtension(
    requestMessage: api_v1alpha1_pbx_service_pb.AssignRandomUserExtensionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_pbx_service_pb.AssignRandomUserExtensionResponse|null) => void
  ): UnaryResponse;
  assignRandomGroupExtension(
    requestMessage: api_v1alpha1_pbx_service_pb.AssignRandomGroupExtensionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_pbx_service_pb.AssignRandomGroupExtensionResponse|null) => void
  ): UnaryResponse;
  assignRandomGroupExtension(
    requestMessage: api_v1alpha1_pbx_service_pb.AssignRandomGroupExtensionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_pbx_service_pb.AssignRandomGroupExtensionResponse|null) => void
  ): UnaryResponse;
}

