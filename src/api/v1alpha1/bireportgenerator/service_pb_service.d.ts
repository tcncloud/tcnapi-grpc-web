// package: api.v1alpha1.bireportgenerator
// file: api/v1alpha1/bireportgenerator/service.proto

import * as api_v1alpha1_bireportgenerator_service_pb from "../../../api/v1alpha1/bireportgenerator/service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type BIReportGeneratorServiceCreateReportJob = {
  readonly methodName: string;
  readonly service: typeof BIReportGeneratorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_bireportgenerator_service_pb.CreateReportJobRequest;
  readonly responseType: typeof api_v1alpha1_bireportgenerator_service_pb.CreateReportJobResponse;
};

type BIReportGeneratorServiceListReportJobs = {
  readonly methodName: string;
  readonly service: typeof BIReportGeneratorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_bireportgenerator_service_pb.ListReportJobsRequest;
  readonly responseType: typeof api_v1alpha1_bireportgenerator_service_pb.ListReportJobsResponse;
};

type BIReportGeneratorServiceUpdateReportJob = {
  readonly methodName: string;
  readonly service: typeof BIReportGeneratorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_bireportgenerator_service_pb.UpdateReportJobRequest;
  readonly responseType: typeof api_v1alpha1_bireportgenerator_service_pb.UpdateReportJobResponse;
};

type BIReportGeneratorServiceDeleteReportJob = {
  readonly methodName: string;
  readonly service: typeof BIReportGeneratorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_bireportgenerator_service_pb.DeleteReportJobRequest;
  readonly responseType: typeof api_v1alpha1_bireportgenerator_service_pb.DeleteReportJobResponse;
};

type BIReportGeneratorServiceGetReportJob = {
  readonly methodName: string;
  readonly service: typeof BIReportGeneratorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_bireportgenerator_service_pb.GetReportJobRequest;
  readonly responseType: typeof api_v1alpha1_bireportgenerator_service_pb.GetReportJobResponse;
};

type BIReportGeneratorServiceGenerateReport = {
  readonly methodName: string;
  readonly service: typeof BIReportGeneratorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_bireportgenerator_service_pb.GenerateReportRequest;
  readonly responseType: typeof api_v1alpha1_bireportgenerator_service_pb.GenerateReportResponse;
};

export class BIReportGeneratorService {
  static readonly serviceName: string;
  static readonly CreateReportJob: BIReportGeneratorServiceCreateReportJob;
  static readonly ListReportJobs: BIReportGeneratorServiceListReportJobs;
  static readonly UpdateReportJob: BIReportGeneratorServiceUpdateReportJob;
  static readonly DeleteReportJob: BIReportGeneratorServiceDeleteReportJob;
  static readonly GetReportJob: BIReportGeneratorServiceGetReportJob;
  static readonly GenerateReport: BIReportGeneratorServiceGenerateReport;
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

export class BIReportGeneratorServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createReportJob(
    requestMessage: api_v1alpha1_bireportgenerator_service_pb.CreateReportJobRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_bireportgenerator_service_pb.CreateReportJobResponse|null) => void
  ): UnaryResponse;
  createReportJob(
    requestMessage: api_v1alpha1_bireportgenerator_service_pb.CreateReportJobRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_bireportgenerator_service_pb.CreateReportJobResponse|null) => void
  ): UnaryResponse;
  listReportJobs(
    requestMessage: api_v1alpha1_bireportgenerator_service_pb.ListReportJobsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_bireportgenerator_service_pb.ListReportJobsResponse|null) => void
  ): UnaryResponse;
  listReportJobs(
    requestMessage: api_v1alpha1_bireportgenerator_service_pb.ListReportJobsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_bireportgenerator_service_pb.ListReportJobsResponse|null) => void
  ): UnaryResponse;
  updateReportJob(
    requestMessage: api_v1alpha1_bireportgenerator_service_pb.UpdateReportJobRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_bireportgenerator_service_pb.UpdateReportJobResponse|null) => void
  ): UnaryResponse;
  updateReportJob(
    requestMessage: api_v1alpha1_bireportgenerator_service_pb.UpdateReportJobRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_bireportgenerator_service_pb.UpdateReportJobResponse|null) => void
  ): UnaryResponse;
  deleteReportJob(
    requestMessage: api_v1alpha1_bireportgenerator_service_pb.DeleteReportJobRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_bireportgenerator_service_pb.DeleteReportJobResponse|null) => void
  ): UnaryResponse;
  deleteReportJob(
    requestMessage: api_v1alpha1_bireportgenerator_service_pb.DeleteReportJobRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_bireportgenerator_service_pb.DeleteReportJobResponse|null) => void
  ): UnaryResponse;
  getReportJob(
    requestMessage: api_v1alpha1_bireportgenerator_service_pb.GetReportJobRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_bireportgenerator_service_pb.GetReportJobResponse|null) => void
  ): UnaryResponse;
  getReportJob(
    requestMessage: api_v1alpha1_bireportgenerator_service_pb.GetReportJobRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_bireportgenerator_service_pb.GetReportJobResponse|null) => void
  ): UnaryResponse;
  generateReport(
    requestMessage: api_v1alpha1_bireportgenerator_service_pb.GenerateReportRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_bireportgenerator_service_pb.GenerateReportResponse|null) => void
  ): UnaryResponse;
  generateReport(
    requestMessage: api_v1alpha1_bireportgenerator_service_pb.GenerateReportRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_bireportgenerator_service_pb.GenerateReportResponse|null) => void
  ): UnaryResponse;
}

