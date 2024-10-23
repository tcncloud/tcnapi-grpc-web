// package: api.v1alpha1.classifier
// file: api/v1alpha1/classifier/service.proto

import * as api_v1alpha1_classifier_service_pb from "../../../api/v1alpha1/classifier/service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ClassifierFileTemplatesParseFile = {
  readonly methodName: string;
  readonly service: typeof ClassifierFileTemplates;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_classifier_service_pb.ParseFileRequest;
  readonly responseType: typeof api_v1alpha1_classifier_service_pb.ParseFileResponse;
};

type ClassifierFileTemplatesListEvents = {
  readonly methodName: string;
  readonly service: typeof ClassifierFileTemplates;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_classifier_service_pb.ListEventsRequest;
  readonly responseType: typeof api_v1alpha1_classifier_service_pb.ListEventsResponse;
};

type ClassifierFileTemplatesPeekList = {
  readonly methodName: string;
  readonly service: typeof ClassifierFileTemplates;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_classifier_service_pb.PeekListRequest;
  readonly responseType: typeof api_v1alpha1_classifier_service_pb.PeekListResponse;
};

type ClassifierFileTemplatesParseFTSFile = {
  readonly methodName: string;
  readonly service: typeof ClassifierFileTemplates;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_classifier_service_pb.ParseFTSFileRequest;
  readonly responseType: typeof api_v1alpha1_classifier_service_pb.ParseFTSFileResponse;
};

type ClassifierFileTemplatesUpdateFileTemplate = {
  readonly methodName: string;
  readonly service: typeof ClassifierFileTemplates;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_classifier_service_pb.UpdateFileTemplateRequest;
  readonly responseType: typeof api_v1alpha1_classifier_service_pb.UpdateFileTemplateResponse;
};

type ClassifierFileTemplatesDeleteFileTemplate = {
  readonly methodName: string;
  readonly service: typeof ClassifierFileTemplates;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_classifier_service_pb.DeleteFileTemplateRequest;
  readonly responseType: typeof api_v1alpha1_classifier_service_pb.DeleteFileTemplateResponse;
};

type ClassifierFileTemplatesListFileTemplates = {
  readonly methodName: string;
  readonly service: typeof ClassifierFileTemplates;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_classifier_service_pb.ListFileTemplatesRequest;
  readonly responseType: typeof api_v1alpha1_classifier_service_pb.ListFileTemplatesResponse;
};

type ClassifierFileTemplatesGetFileTemplate = {
  readonly methodName: string;
  readonly service: typeof ClassifierFileTemplates;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_classifier_service_pb.GetFileTemplateRequest;
  readonly responseType: typeof api_v1alpha1_classifier_service_pb.GetFileTemplateResponse;
};

export class ClassifierFileTemplates {
  static readonly serviceName: string;
  static readonly ParseFile: ClassifierFileTemplatesParseFile;
  static readonly ListEvents: ClassifierFileTemplatesListEvents;
  static readonly PeekList: ClassifierFileTemplatesPeekList;
  static readonly ParseFTSFile: ClassifierFileTemplatesParseFTSFile;
  static readonly UpdateFileTemplate: ClassifierFileTemplatesUpdateFileTemplate;
  static readonly DeleteFileTemplate: ClassifierFileTemplatesDeleteFileTemplate;
  static readonly ListFileTemplates: ClassifierFileTemplatesListFileTemplates;
  static readonly GetFileTemplate: ClassifierFileTemplatesGetFileTemplate;
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

export class ClassifierFileTemplatesClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  parseFile(
    requestMessage: api_v1alpha1_classifier_service_pb.ParseFileRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_classifier_service_pb.ParseFileResponse|null) => void
  ): UnaryResponse;
  parseFile(
    requestMessage: api_v1alpha1_classifier_service_pb.ParseFileRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_classifier_service_pb.ParseFileResponse|null) => void
  ): UnaryResponse;
  listEvents(
    requestMessage: api_v1alpha1_classifier_service_pb.ListEventsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_classifier_service_pb.ListEventsResponse|null) => void
  ): UnaryResponse;
  listEvents(
    requestMessage: api_v1alpha1_classifier_service_pb.ListEventsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_classifier_service_pb.ListEventsResponse|null) => void
  ): UnaryResponse;
  peekList(
    requestMessage: api_v1alpha1_classifier_service_pb.PeekListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_classifier_service_pb.PeekListResponse|null) => void
  ): UnaryResponse;
  peekList(
    requestMessage: api_v1alpha1_classifier_service_pb.PeekListRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_classifier_service_pb.PeekListResponse|null) => void
  ): UnaryResponse;
  parseFTSFile(
    requestMessage: api_v1alpha1_classifier_service_pb.ParseFTSFileRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_classifier_service_pb.ParseFTSFileResponse|null) => void
  ): UnaryResponse;
  parseFTSFile(
    requestMessage: api_v1alpha1_classifier_service_pb.ParseFTSFileRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_classifier_service_pb.ParseFTSFileResponse|null) => void
  ): UnaryResponse;
  updateFileTemplate(
    requestMessage: api_v1alpha1_classifier_service_pb.UpdateFileTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_classifier_service_pb.UpdateFileTemplateResponse|null) => void
  ): UnaryResponse;
  updateFileTemplate(
    requestMessage: api_v1alpha1_classifier_service_pb.UpdateFileTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_classifier_service_pb.UpdateFileTemplateResponse|null) => void
  ): UnaryResponse;
  deleteFileTemplate(
    requestMessage: api_v1alpha1_classifier_service_pb.DeleteFileTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_classifier_service_pb.DeleteFileTemplateResponse|null) => void
  ): UnaryResponse;
  deleteFileTemplate(
    requestMessage: api_v1alpha1_classifier_service_pb.DeleteFileTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_classifier_service_pb.DeleteFileTemplateResponse|null) => void
  ): UnaryResponse;
  listFileTemplates(
    requestMessage: api_v1alpha1_classifier_service_pb.ListFileTemplatesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_classifier_service_pb.ListFileTemplatesResponse|null) => void
  ): UnaryResponse;
  listFileTemplates(
    requestMessage: api_v1alpha1_classifier_service_pb.ListFileTemplatesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_classifier_service_pb.ListFileTemplatesResponse|null) => void
  ): UnaryResponse;
  getFileTemplate(
    requestMessage: api_v1alpha1_classifier_service_pb.GetFileTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_classifier_service_pb.GetFileTemplateResponse|null) => void
  ): UnaryResponse;
  getFileTemplate(
    requestMessage: api_v1alpha1_classifier_service_pb.GetFileTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_classifier_service_pb.GetFileTemplateResponse|null) => void
  ): UnaryResponse;
}

