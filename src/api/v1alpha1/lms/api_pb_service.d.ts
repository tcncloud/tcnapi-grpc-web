// package: api.v1alpha1.lms
// file: api/v1alpha1/lms/api.proto

import * as api_v1alpha1_lms_api_pb from "../../../api/v1alpha1/lms/api_pb";
import {grpc} from "@improbable-eng/grpc-web";

type LMSDeleteFileTemplate = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_lms_api_pb.DeleteFileTemplateRequest;
  readonly responseType: typeof api_v1alpha1_lms_api_pb.DeleteFileTemplateResponse;
};

type LMSGetFileTemplate = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_lms_api_pb.GetFileTemplateRequest;
  readonly responseType: typeof api_v1alpha1_lms_api_pb.GetFileTemplateResponse;
};

type LMSListFileTemplates = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_lms_api_pb.ListFileTemplatesRequest;
  readonly responseType: typeof api_v1alpha1_lms_api_pb.ListFileTemplatesResponse;
};

type LMSParseFileTemplate = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_lms_api_pb.ParseFileTemplateRequest;
  readonly responseType: typeof api_v1alpha1_lms_api_pb.ParseFileTemplateResult;
};

type LMSUpdateFileTemplate = {
  readonly methodName: string;
  readonly service: typeof LMS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_lms_api_pb.UpdateFileTemplateRequest;
  readonly responseType: typeof api_v1alpha1_lms_api_pb.UpdateFileTemplateResponse;
};

export class LMS {
  static readonly serviceName: string;
  static readonly DeleteFileTemplate: LMSDeleteFileTemplate;
  static readonly GetFileTemplate: LMSGetFileTemplate;
  static readonly ListFileTemplates: LMSListFileTemplates;
  static readonly ParseFileTemplate: LMSParseFileTemplate;
  static readonly UpdateFileTemplate: LMSUpdateFileTemplate;
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

export class LMSClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  deleteFileTemplate(
    requestMessage: api_v1alpha1_lms_api_pb.DeleteFileTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_lms_api_pb.DeleteFileTemplateResponse|null) => void
  ): UnaryResponse;
  deleteFileTemplate(
    requestMessage: api_v1alpha1_lms_api_pb.DeleteFileTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_lms_api_pb.DeleteFileTemplateResponse|null) => void
  ): UnaryResponse;
  getFileTemplate(
    requestMessage: api_v1alpha1_lms_api_pb.GetFileTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_lms_api_pb.GetFileTemplateResponse|null) => void
  ): UnaryResponse;
  getFileTemplate(
    requestMessage: api_v1alpha1_lms_api_pb.GetFileTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_lms_api_pb.GetFileTemplateResponse|null) => void
  ): UnaryResponse;
  listFileTemplates(
    requestMessage: api_v1alpha1_lms_api_pb.ListFileTemplatesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_lms_api_pb.ListFileTemplatesResponse|null) => void
  ): UnaryResponse;
  listFileTemplates(
    requestMessage: api_v1alpha1_lms_api_pb.ListFileTemplatesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_lms_api_pb.ListFileTemplatesResponse|null) => void
  ): UnaryResponse;
  parseFileTemplate(
    requestMessage: api_v1alpha1_lms_api_pb.ParseFileTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_lms_api_pb.ParseFileTemplateResult|null) => void
  ): UnaryResponse;
  parseFileTemplate(
    requestMessage: api_v1alpha1_lms_api_pb.ParseFileTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_lms_api_pb.ParseFileTemplateResult|null) => void
  ): UnaryResponse;
  updateFileTemplate(
    requestMessage: api_v1alpha1_lms_api_pb.UpdateFileTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_lms_api_pb.UpdateFileTemplateResponse|null) => void
  ): UnaryResponse;
  updateFileTemplate(
    requestMessage: api_v1alpha1_lms_api_pb.UpdateFileTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_lms_api_pb.UpdateFileTemplateResponse|null) => void
  ): UnaryResponse;
}

