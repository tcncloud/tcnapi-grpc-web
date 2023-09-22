// package: api.v0alpha
// file: api/v0alpha/dashboards.proto

import * as api_v0alpha_dashboards_pb from "../../api/v0alpha/dashboards_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type DashboardsCreateDashboard = {
  readonly methodName: string;
  readonly service: typeof Dashboards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_dashboards_pb.CreateDashboardRequest;
  readonly responseType: typeof api_v0alpha_dashboards_pb.CreateDashboardResponse;
};

type DashboardsGetDashboard = {
  readonly methodName: string;
  readonly service: typeof Dashboards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_dashboards_pb.GetDashboardRequest;
  readonly responseType: typeof api_v0alpha_dashboards_pb.Dashboard;
};

type DashboardsGetDefaultDashboard = {
  readonly methodName: string;
  readonly service: typeof Dashboards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_dashboards_pb.GetDefaultDashboardRequest;
  readonly responseType: typeof api_v0alpha_dashboards_pb.Dashboard;
};

type DashboardsListDashboards = {
  readonly methodName: string;
  readonly service: typeof Dashboards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_dashboards_pb.ListDashboardsRequest;
  readonly responseType: typeof api_v0alpha_dashboards_pb.ListDashboardsResponse;
};

type DashboardsListProductTypes = {
  readonly methodName: string;
  readonly service: typeof Dashboards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_dashboards_pb.ListProductTypesRequest;
  readonly responseType: typeof api_v0alpha_dashboards_pb.ListProductTypesResult;
};

type DashboardsDeleteDashboard = {
  readonly methodName: string;
  readonly service: typeof Dashboards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_dashboards_pb.DeleteDashboardRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type DashboardsSetDefaultDashboard = {
  readonly methodName: string;
  readonly service: typeof Dashboards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_dashboards_pb.SetDefaultDashboardRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type DashboardsUpdateDashboard = {
  readonly methodName: string;
  readonly service: typeof Dashboards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_dashboards_pb.UpdateDashboardRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type DashboardsUpdateDashboardTitleAndDescription = {
  readonly methodName: string;
  readonly service: typeof Dashboards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_dashboards_pb.UpdateDashboardTitleAndDescriptionRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type DashboardsUpdateDashboardView = {
  readonly methodName: string;
  readonly service: typeof Dashboards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_dashboards_pb.UpdateDashboardViewRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type DashboardsUpdateDashboardLayout = {
  readonly methodName: string;
  readonly service: typeof Dashboards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_dashboards_pb.UpdateDashboardLayoutRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type DashboardsPublishDashboard = {
  readonly methodName: string;
  readonly service: typeof Dashboards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_dashboards_pb.PublishDashboardRequest;
  readonly responseType: typeof api_v0alpha_dashboards_pb.PublishDashboardResponse;
};

export class Dashboards {
  static readonly serviceName: string;
  static readonly CreateDashboard: DashboardsCreateDashboard;
  static readonly GetDashboard: DashboardsGetDashboard;
  static readonly GetDefaultDashboard: DashboardsGetDefaultDashboard;
  static readonly ListDashboards: DashboardsListDashboards;
  static readonly ListProductTypes: DashboardsListProductTypes;
  static readonly DeleteDashboard: DashboardsDeleteDashboard;
  static readonly SetDefaultDashboard: DashboardsSetDefaultDashboard;
  static readonly UpdateDashboard: DashboardsUpdateDashboard;
  static readonly UpdateDashboardTitleAndDescription: DashboardsUpdateDashboardTitleAndDescription;
  static readonly UpdateDashboardView: DashboardsUpdateDashboardView;
  static readonly UpdateDashboardLayout: DashboardsUpdateDashboardLayout;
  static readonly PublishDashboard: DashboardsPublishDashboard;
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

export class DashboardsClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createDashboard(
    requestMessage: api_v0alpha_dashboards_pb.CreateDashboardRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_dashboards_pb.CreateDashboardResponse|null) => void
  ): UnaryResponse;
  createDashboard(
    requestMessage: api_v0alpha_dashboards_pb.CreateDashboardRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_dashboards_pb.CreateDashboardResponse|null) => void
  ): UnaryResponse;
  getDashboard(
    requestMessage: api_v0alpha_dashboards_pb.GetDashboardRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_dashboards_pb.Dashboard|null) => void
  ): UnaryResponse;
  getDashboard(
    requestMessage: api_v0alpha_dashboards_pb.GetDashboardRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_dashboards_pb.Dashboard|null) => void
  ): UnaryResponse;
  getDefaultDashboard(
    requestMessage: api_v0alpha_dashboards_pb.GetDefaultDashboardRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_dashboards_pb.Dashboard|null) => void
  ): UnaryResponse;
  getDefaultDashboard(
    requestMessage: api_v0alpha_dashboards_pb.GetDefaultDashboardRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_dashboards_pb.Dashboard|null) => void
  ): UnaryResponse;
  listDashboards(
    requestMessage: api_v0alpha_dashboards_pb.ListDashboardsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_dashboards_pb.ListDashboardsResponse|null) => void
  ): UnaryResponse;
  listDashboards(
    requestMessage: api_v0alpha_dashboards_pb.ListDashboardsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_dashboards_pb.ListDashboardsResponse|null) => void
  ): UnaryResponse;
  listProductTypes(
    requestMessage: api_v0alpha_dashboards_pb.ListProductTypesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_dashboards_pb.ListProductTypesResult|null) => void
  ): UnaryResponse;
  listProductTypes(
    requestMessage: api_v0alpha_dashboards_pb.ListProductTypesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_dashboards_pb.ListProductTypesResult|null) => void
  ): UnaryResponse;
  deleteDashboard(
    requestMessage: api_v0alpha_dashboards_pb.DeleteDashboardRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteDashboard(
    requestMessage: api_v0alpha_dashboards_pb.DeleteDashboardRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  setDefaultDashboard(
    requestMessage: api_v0alpha_dashboards_pb.SetDefaultDashboardRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  setDefaultDashboard(
    requestMessage: api_v0alpha_dashboards_pb.SetDefaultDashboardRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  updateDashboard(
    requestMessage: api_v0alpha_dashboards_pb.UpdateDashboardRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  updateDashboard(
    requestMessage: api_v0alpha_dashboards_pb.UpdateDashboardRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  updateDashboardTitleAndDescription(
    requestMessage: api_v0alpha_dashboards_pb.UpdateDashboardTitleAndDescriptionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  updateDashboardTitleAndDescription(
    requestMessage: api_v0alpha_dashboards_pb.UpdateDashboardTitleAndDescriptionRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  updateDashboardView(
    requestMessage: api_v0alpha_dashboards_pb.UpdateDashboardViewRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  updateDashboardView(
    requestMessage: api_v0alpha_dashboards_pb.UpdateDashboardViewRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  updateDashboardLayout(
    requestMessage: api_v0alpha_dashboards_pb.UpdateDashboardLayoutRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  updateDashboardLayout(
    requestMessage: api_v0alpha_dashboards_pb.UpdateDashboardLayoutRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  publishDashboard(
    requestMessage: api_v0alpha_dashboards_pb.PublishDashboardRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_dashboards_pb.PublishDashboardResponse|null) => void
  ): UnaryResponse;
  publishDashboard(
    requestMessage: api_v0alpha_dashboards_pb.PublishDashboardRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_dashboards_pb.PublishDashboardResponse|null) => void
  ): UnaryResponse;
}

