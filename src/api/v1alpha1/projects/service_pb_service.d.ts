// package: api.v1alpha1.projects
// file: api/v1alpha1/projects/service.proto

import * as api_v1alpha1_projects_service_pb from "../../../api/v1alpha1/projects/service_pb";
import * as api_v1alpha1_projects_projects_pb from "../../../api/v1alpha1/projects/projects_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ProjectsListProjects = {
  readonly methodName: string;
  readonly service: typeof Projects;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_projects_projects_pb.ListProjectsRequest;
  readonly responseType: typeof api_v1alpha1_projects_projects_pb.ListProjectsResponse;
};

type ProjectsGetProjectById = {
  readonly methodName: string;
  readonly service: typeof Projects;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_projects_projects_pb.GetProjectByIdRequest;
  readonly responseType: typeof api_v1alpha1_projects_projects_pb.GetProjectByIdResponse;
};

export class Projects {
  static readonly serviceName: string;
  static readonly ListProjects: ProjectsListProjects;
  static readonly GetProjectById: ProjectsGetProjectById;
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

export class ProjectsClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  listProjects(
    requestMessage: api_v1alpha1_projects_projects_pb.ListProjectsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_projects_projects_pb.ListProjectsResponse|null) => void
  ): UnaryResponse;
  listProjects(
    requestMessage: api_v1alpha1_projects_projects_pb.ListProjectsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_projects_projects_pb.ListProjectsResponse|null) => void
  ): UnaryResponse;
  getProjectById(
    requestMessage: api_v1alpha1_projects_projects_pb.GetProjectByIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_projects_projects_pb.GetProjectByIdResponse|null) => void
  ): UnaryResponse;
  getProjectById(
    requestMessage: api_v1alpha1_projects_projects_pb.GetProjectByIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_projects_projects_pb.GetProjectByIdResponse|null) => void
  ): UnaryResponse;
}

