// package: api.v1alpha1.org.skills
// file: api/v1alpha1/org/skills/service.proto

import * as api_v1alpha1_org_skills_service_pb from "../../../../api/v1alpha1/org/skills/service_pb";
import * as api_v1alpha1_org_skills_entities_pb from "../../../../api/v1alpha1/org/skills/entities_pb";
import {grpc} from "@improbable-eng/grpc-web";

type SkillsServiceCreateSkillGroup = {
  readonly methodName: string;
  readonly service: typeof SkillsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_skills_entities_pb.CreateSkillGroupRequest;
  readonly responseType: typeof api_v1alpha1_org_skills_entities_pb.CreateSkillGroupResponse;
};

type SkillsServiceListSkillGroups = {
  readonly methodName: string;
  readonly service: typeof SkillsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_skills_entities_pb.ListSkillGroupsRequest;
  readonly responseType: typeof api_v1alpha1_org_skills_entities_pb.ListSkillGroupsResponse;
};

type SkillsServiceUpdateSkillGroup = {
  readonly methodName: string;
  readonly service: typeof SkillsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_skills_entities_pb.UpdateSkillGroupRequest;
  readonly responseType: typeof api_v1alpha1_org_skills_entities_pb.UpdateSkillGroupResponse;
};

type SkillsServiceGetSkillGroup = {
  readonly methodName: string;
  readonly service: typeof SkillsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_skills_entities_pb.GetSkillGroupRequest;
  readonly responseType: typeof api_v1alpha1_org_skills_entities_pb.GetSkillGroupResponse;
};

type SkillsServiceDeleteSkillGroup = {
  readonly methodName: string;
  readonly service: typeof SkillsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_skills_entities_pb.DeleteSkillGroupRequest;
  readonly responseType: typeof api_v1alpha1_org_skills_entities_pb.DeleteSkillGroupResponse;
};

type SkillsServiceAssignSkillGroups = {
  readonly methodName: string;
  readonly service: typeof SkillsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_skills_entities_pb.AssignSkillGroupsRequest;
  readonly responseType: typeof api_v1alpha1_org_skills_entities_pb.AssignSkillGroupsResponse;
};

type SkillsServiceRevokeSkillGroups = {
  readonly methodName: string;
  readonly service: typeof SkillsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_skills_entities_pb.RevokeSkillGroupsRequest;
  readonly responseType: typeof api_v1alpha1_org_skills_entities_pb.RevokeSkillGroupsResponse;
};

type SkillsServiceGetUserSkillGroups = {
  readonly methodName: string;
  readonly service: typeof SkillsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_skills_entities_pb.GetUserSkillGroupsRequest;
  readonly responseType: typeof api_v1alpha1_org_skills_entities_pb.GetUserSkillGroupsResponse;
};

type SkillsServiceGetUserSkills = {
  readonly methodName: string;
  readonly service: typeof SkillsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_skills_entities_pb.GetUserSkillsRequest;
  readonly responseType: typeof api_v1alpha1_org_skills_entities_pb.GetUserSkillsResponse;
};

type SkillsServiceGetSkillGroupMembers = {
  readonly methodName: string;
  readonly service: typeof SkillsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_skills_entities_pb.GetSkillGroupMembersRequest;
  readonly responseType: typeof api_v1alpha1_org_skills_entities_pb.GetSkillGroupMembersResponse;
};

type SkillsServiceListSkillGroupsMembers = {
  readonly methodName: string;
  readonly service: typeof SkillsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_skills_entities_pb.ListSkillGroupsMembersRequest;
  readonly responseType: typeof api_v1alpha1_org_skills_entities_pb.ListSkillGroupsMembersResponse;
};

export class SkillsService {
  static readonly serviceName: string;
  static readonly CreateSkillGroup: SkillsServiceCreateSkillGroup;
  static readonly ListSkillGroups: SkillsServiceListSkillGroups;
  static readonly UpdateSkillGroup: SkillsServiceUpdateSkillGroup;
  static readonly GetSkillGroup: SkillsServiceGetSkillGroup;
  static readonly DeleteSkillGroup: SkillsServiceDeleteSkillGroup;
  static readonly AssignSkillGroups: SkillsServiceAssignSkillGroups;
  static readonly RevokeSkillGroups: SkillsServiceRevokeSkillGroups;
  static readonly GetUserSkillGroups: SkillsServiceGetUserSkillGroups;
  static readonly GetUserSkills: SkillsServiceGetUserSkills;
  static readonly GetSkillGroupMembers: SkillsServiceGetSkillGroupMembers;
  static readonly ListSkillGroupsMembers: SkillsServiceListSkillGroupsMembers;
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

export class SkillsServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createSkillGroup(
    requestMessage: api_v1alpha1_org_skills_entities_pb.CreateSkillGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_skills_entities_pb.CreateSkillGroupResponse|null) => void
  ): UnaryResponse;
  createSkillGroup(
    requestMessage: api_v1alpha1_org_skills_entities_pb.CreateSkillGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_skills_entities_pb.CreateSkillGroupResponse|null) => void
  ): UnaryResponse;
  listSkillGroups(
    requestMessage: api_v1alpha1_org_skills_entities_pb.ListSkillGroupsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_skills_entities_pb.ListSkillGroupsResponse|null) => void
  ): UnaryResponse;
  listSkillGroups(
    requestMessage: api_v1alpha1_org_skills_entities_pb.ListSkillGroupsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_skills_entities_pb.ListSkillGroupsResponse|null) => void
  ): UnaryResponse;
  updateSkillGroup(
    requestMessage: api_v1alpha1_org_skills_entities_pb.UpdateSkillGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_skills_entities_pb.UpdateSkillGroupResponse|null) => void
  ): UnaryResponse;
  updateSkillGroup(
    requestMessage: api_v1alpha1_org_skills_entities_pb.UpdateSkillGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_skills_entities_pb.UpdateSkillGroupResponse|null) => void
  ): UnaryResponse;
  getSkillGroup(
    requestMessage: api_v1alpha1_org_skills_entities_pb.GetSkillGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_skills_entities_pb.GetSkillGroupResponse|null) => void
  ): UnaryResponse;
  getSkillGroup(
    requestMessage: api_v1alpha1_org_skills_entities_pb.GetSkillGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_skills_entities_pb.GetSkillGroupResponse|null) => void
  ): UnaryResponse;
  deleteSkillGroup(
    requestMessage: api_v1alpha1_org_skills_entities_pb.DeleteSkillGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_skills_entities_pb.DeleteSkillGroupResponse|null) => void
  ): UnaryResponse;
  deleteSkillGroup(
    requestMessage: api_v1alpha1_org_skills_entities_pb.DeleteSkillGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_skills_entities_pb.DeleteSkillGroupResponse|null) => void
  ): UnaryResponse;
  assignSkillGroups(
    requestMessage: api_v1alpha1_org_skills_entities_pb.AssignSkillGroupsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_skills_entities_pb.AssignSkillGroupsResponse|null) => void
  ): UnaryResponse;
  assignSkillGroups(
    requestMessage: api_v1alpha1_org_skills_entities_pb.AssignSkillGroupsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_skills_entities_pb.AssignSkillGroupsResponse|null) => void
  ): UnaryResponse;
  revokeSkillGroups(
    requestMessage: api_v1alpha1_org_skills_entities_pb.RevokeSkillGroupsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_skills_entities_pb.RevokeSkillGroupsResponse|null) => void
  ): UnaryResponse;
  revokeSkillGroups(
    requestMessage: api_v1alpha1_org_skills_entities_pb.RevokeSkillGroupsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_skills_entities_pb.RevokeSkillGroupsResponse|null) => void
  ): UnaryResponse;
  getUserSkillGroups(
    requestMessage: api_v1alpha1_org_skills_entities_pb.GetUserSkillGroupsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_skills_entities_pb.GetUserSkillGroupsResponse|null) => void
  ): UnaryResponse;
  getUserSkillGroups(
    requestMessage: api_v1alpha1_org_skills_entities_pb.GetUserSkillGroupsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_skills_entities_pb.GetUserSkillGroupsResponse|null) => void
  ): UnaryResponse;
  getUserSkills(
    requestMessage: api_v1alpha1_org_skills_entities_pb.GetUserSkillsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_skills_entities_pb.GetUserSkillsResponse|null) => void
  ): UnaryResponse;
  getUserSkills(
    requestMessage: api_v1alpha1_org_skills_entities_pb.GetUserSkillsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_skills_entities_pb.GetUserSkillsResponse|null) => void
  ): UnaryResponse;
  getSkillGroupMembers(
    requestMessage: api_v1alpha1_org_skills_entities_pb.GetSkillGroupMembersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_skills_entities_pb.GetSkillGroupMembersResponse|null) => void
  ): UnaryResponse;
  getSkillGroupMembers(
    requestMessage: api_v1alpha1_org_skills_entities_pb.GetSkillGroupMembersRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_skills_entities_pb.GetSkillGroupMembersResponse|null) => void
  ): UnaryResponse;
  listSkillGroupsMembers(
    requestMessage: api_v1alpha1_org_skills_entities_pb.ListSkillGroupsMembersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_skills_entities_pb.ListSkillGroupsMembersResponse|null) => void
  ): UnaryResponse;
  listSkillGroupsMembers(
    requestMessage: api_v1alpha1_org_skills_entities_pb.ListSkillGroupsMembersRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_skills_entities_pb.ListSkillGroupsMembersResponse|null) => void
  ): UnaryResponse;
}

