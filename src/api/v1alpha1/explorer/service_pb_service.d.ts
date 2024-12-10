// package: api.v1alpha1.explorer
// file: api/v1alpha1/explorer/service.proto

import * as api_v1alpha1_explorer_service_pb from "../../../api/v1alpha1/explorer/service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ExplorerServiceListDatasourceSchemas = {
  readonly methodName: string;
  readonly service: typeof ExplorerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_explorer_service_pb.ListDatasourceSchemasRequest;
  readonly responseType: typeof api_v1alpha1_explorer_service_pb.ListDatasourceSchemasResponse;
};

type ExplorerServiceQuery = {
  readonly methodName: string;
  readonly service: typeof ExplorerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_explorer_service_pb.QueryRequest;
  readonly responseType: typeof api_v1alpha1_explorer_service_pb.QueryResponse;
};

type ExplorerServiceGetSupportQuery = {
  readonly methodName: string;
  readonly service: typeof ExplorerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_explorer_service_pb.SupportQueryRequest;
  readonly responseType: typeof api_v1alpha1_explorer_service_pb.SupportQueryResponse;
};

type ExplorerServiceGetQueryExplain = {
  readonly methodName: string;
  readonly service: typeof ExplorerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_explorer_service_pb.QueryExplainRequest;
  readonly responseType: typeof api_v1alpha1_explorer_service_pb.QueryExplainResponse;
};

type ExplorerServiceGetWeeksOfData = {
  readonly methodName: string;
  readonly service: typeof ExplorerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_explorer_service_pb.GetWeeksOfDataRequest;
  readonly responseType: typeof api_v1alpha1_explorer_service_pb.GetWeeksOfDataResponse;
};

export class ExplorerService {
  static readonly serviceName: string;
  static readonly ListDatasourceSchemas: ExplorerServiceListDatasourceSchemas;
  static readonly Query: ExplorerServiceQuery;
  static readonly GetSupportQuery: ExplorerServiceGetSupportQuery;
  static readonly GetQueryExplain: ExplorerServiceGetQueryExplain;
  static readonly GetWeeksOfData: ExplorerServiceGetWeeksOfData;
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

export class ExplorerServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  listDatasourceSchemas(
    requestMessage: api_v1alpha1_explorer_service_pb.ListDatasourceSchemasRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_explorer_service_pb.ListDatasourceSchemasResponse|null) => void
  ): UnaryResponse;
  listDatasourceSchemas(
    requestMessage: api_v1alpha1_explorer_service_pb.ListDatasourceSchemasRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_explorer_service_pb.ListDatasourceSchemasResponse|null) => void
  ): UnaryResponse;
  query(
    requestMessage: api_v1alpha1_explorer_service_pb.QueryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_explorer_service_pb.QueryResponse|null) => void
  ): UnaryResponse;
  query(
    requestMessage: api_v1alpha1_explorer_service_pb.QueryRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_explorer_service_pb.QueryResponse|null) => void
  ): UnaryResponse;
  getSupportQuery(
    requestMessage: api_v1alpha1_explorer_service_pb.SupportQueryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_explorer_service_pb.SupportQueryResponse|null) => void
  ): UnaryResponse;
  getSupportQuery(
    requestMessage: api_v1alpha1_explorer_service_pb.SupportQueryRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_explorer_service_pb.SupportQueryResponse|null) => void
  ): UnaryResponse;
  getQueryExplain(
    requestMessage: api_v1alpha1_explorer_service_pb.QueryExplainRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_explorer_service_pb.QueryExplainResponse|null) => void
  ): UnaryResponse;
  getQueryExplain(
    requestMessage: api_v1alpha1_explorer_service_pb.QueryExplainRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_explorer_service_pb.QueryExplainResponse|null) => void
  ): UnaryResponse;
  getWeeksOfData(
    requestMessage: api_v1alpha1_explorer_service_pb.GetWeeksOfDataRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_explorer_service_pb.GetWeeksOfDataResponse|null) => void
  ): UnaryResponse;
  getWeeksOfData(
    requestMessage: api_v1alpha1_explorer_service_pb.GetWeeksOfDataRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_explorer_service_pb.GetWeeksOfDataResponse|null) => void
  ): UnaryResponse;
}

