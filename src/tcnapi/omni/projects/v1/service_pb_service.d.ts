// package: tcnapi.omni.projects.v1
// file: tcnapi/omni/projects/v1/service.proto

import * as tcnapi_omni_projects_v1_service_pb from "../../../../tcnapi/omni/projects/v1/service_pb";
import * as tcnapi_omni_projects_v1_entities_pb from "../../../../tcnapi/omni/projects/v1/entities_pb";
import * as tcnapi_omni_projects_v1_projects_pb from "../../../../tcnapi/omni/projects/v1/projects_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ProjectsListProjects = {
  readonly methodName: string;
  readonly service: typeof Projects;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tcnapi_omni_projects_v1_entities_pb.ListProjectsRequest;
  readonly responseType: typeof tcnapi_omni_projects_v1_entities_pb.ListProjectsResponse;
};

type ProjectsGetProject = {
  readonly methodName: string;
  readonly service: typeof Projects;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tcnapi_omni_projects_v1_entities_pb.GetProjectRequest;
  readonly responseType: typeof tcnapi_omni_projects_v1_projects_pb.Project;
};

export class Projects {
  static readonly serviceName: string;
  static readonly ListProjects: ProjectsListProjects;
  static readonly GetProject: ProjectsGetProject;
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
    requestMessage: tcnapi_omni_projects_v1_entities_pb.ListProjectsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tcnapi_omni_projects_v1_entities_pb.ListProjectsResponse|null) => void
  ): UnaryResponse;
  listProjects(
    requestMessage: tcnapi_omni_projects_v1_entities_pb.ListProjectsRequest,
    callback: (error: ServiceError|null, responseMessage: tcnapi_omni_projects_v1_entities_pb.ListProjectsResponse|null) => void
  ): UnaryResponse;
  getProject(
    requestMessage: tcnapi_omni_projects_v1_entities_pb.GetProjectRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tcnapi_omni_projects_v1_projects_pb.Project|null) => void
  ): UnaryResponse;
  getProject(
    requestMessage: tcnapi_omni_projects_v1_entities_pb.GetProjectRequest,
    callback: (error: ServiceError|null, responseMessage: tcnapi_omni_projects_v1_projects_pb.Project|null) => void
  ): UnaryResponse;
}

