// package: api.v0alpha
// file: api/v0alpha/learn.proto

import * as api_v0alpha_learn_pb from "../../api/v0alpha/learn_pb";
import {grpc} from "@improbable-eng/grpc-web";

type LearnExist = {
  readonly methodName: string;
  readonly service: typeof Learn;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_learn_pb.ExistReq;
  readonly responseType: typeof api_v0alpha_learn_pb.ExistRes;
};

type LearnContent = {
  readonly methodName: string;
  readonly service: typeof Learn;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_learn_pb.ContentReq;
  readonly responseType: typeof api_v0alpha_learn_pb.ContentRes;
};

type LearnExportMany = {
  readonly methodName: string;
  readonly service: typeof Learn;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_learn_pb.ExportManyReq;
  readonly responseType: typeof api_v0alpha_learn_pb.ExportRes;
};

type LearnSearchContent = {
  readonly methodName: string;
  readonly service: typeof Learn;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_learn_pb.SearchContentReq;
  readonly responseType: typeof api_v0alpha_learn_pb.SearchRes;
};

type LearnStandalone = {
  readonly methodName: string;
  readonly service: typeof Learn;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_learn_pb.StandaloneReq;
  readonly responseType: typeof api_v0alpha_learn_pb.StandaloneRes;
};

type LearnContentEditorData = {
  readonly methodName: string;
  readonly service: typeof Learn;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_learn_pb.ContentEditorDataReq;
  readonly responseType: typeof api_v0alpha_learn_pb.ContentEditorDataRes;
};

type LearnUpdate = {
  readonly methodName: string;
  readonly service: typeof Learn;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_learn_pb.UpdateReq;
  readonly responseType: typeof api_v0alpha_learn_pb.UpdateRes;
};

type LearnStoreStaticImage = {
  readonly methodName: string;
  readonly service: typeof Learn;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_learn_pb.StoreStaticImageReq;
  readonly responseType: typeof api_v0alpha_learn_pb.StoreStaticImageRes;
};

type LearnUploadDynamicScreenshot = {
  readonly methodName: string;
  readonly service: typeof Learn;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_learn_pb.UploadDynamicScreenshotReq;
  readonly responseType: typeof api_v0alpha_learn_pb.UploadDynamicScreenshotRes;
};

type LearnDeleteStandalone = {
  readonly methodName: string;
  readonly service: typeof Learn;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_learn_pb.DeleteStandaloneReq;
  readonly responseType: typeof api_v0alpha_learn_pb.DeleteStandaloneRes;
};

export class Learn {
  static readonly serviceName: string;
  static readonly Exist: LearnExist;
  static readonly Content: LearnContent;
  static readonly ExportMany: LearnExportMany;
  static readonly SearchContent: LearnSearchContent;
  static readonly Standalone: LearnStandalone;
  static readonly ContentEditorData: LearnContentEditorData;
  static readonly Update: LearnUpdate;
  static readonly StoreStaticImage: LearnStoreStaticImage;
  static readonly UploadDynamicScreenshot: LearnUploadDynamicScreenshot;
  static readonly DeleteStandalone: LearnDeleteStandalone;
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

export class LearnClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  exist(
    requestMessage: api_v0alpha_learn_pb.ExistReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.ExistRes|null) => void
  ): UnaryResponse;
  exist(
    requestMessage: api_v0alpha_learn_pb.ExistReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.ExistRes|null) => void
  ): UnaryResponse;
  content(
    requestMessage: api_v0alpha_learn_pb.ContentReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.ContentRes|null) => void
  ): UnaryResponse;
  content(
    requestMessage: api_v0alpha_learn_pb.ContentReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.ContentRes|null) => void
  ): UnaryResponse;
  exportMany(
    requestMessage: api_v0alpha_learn_pb.ExportManyReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.ExportRes|null) => void
  ): UnaryResponse;
  exportMany(
    requestMessage: api_v0alpha_learn_pb.ExportManyReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.ExportRes|null) => void
  ): UnaryResponse;
  searchContent(
    requestMessage: api_v0alpha_learn_pb.SearchContentReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.SearchRes|null) => void
  ): UnaryResponse;
  searchContent(
    requestMessage: api_v0alpha_learn_pb.SearchContentReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.SearchRes|null) => void
  ): UnaryResponse;
  standalone(
    requestMessage: api_v0alpha_learn_pb.StandaloneReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.StandaloneRes|null) => void
  ): UnaryResponse;
  standalone(
    requestMessage: api_v0alpha_learn_pb.StandaloneReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.StandaloneRes|null) => void
  ): UnaryResponse;
  contentEditorData(
    requestMessage: api_v0alpha_learn_pb.ContentEditorDataReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.ContentEditorDataRes|null) => void
  ): UnaryResponse;
  contentEditorData(
    requestMessage: api_v0alpha_learn_pb.ContentEditorDataReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.ContentEditorDataRes|null) => void
  ): UnaryResponse;
  update(
    requestMessage: api_v0alpha_learn_pb.UpdateReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.UpdateRes|null) => void
  ): UnaryResponse;
  update(
    requestMessage: api_v0alpha_learn_pb.UpdateReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.UpdateRes|null) => void
  ): UnaryResponse;
  storeStaticImage(
    requestMessage: api_v0alpha_learn_pb.StoreStaticImageReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.StoreStaticImageRes|null) => void
  ): UnaryResponse;
  storeStaticImage(
    requestMessage: api_v0alpha_learn_pb.StoreStaticImageReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.StoreStaticImageRes|null) => void
  ): UnaryResponse;
  uploadDynamicScreenshot(
    requestMessage: api_v0alpha_learn_pb.UploadDynamicScreenshotReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.UploadDynamicScreenshotRes|null) => void
  ): UnaryResponse;
  uploadDynamicScreenshot(
    requestMessage: api_v0alpha_learn_pb.UploadDynamicScreenshotReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.UploadDynamicScreenshotRes|null) => void
  ): UnaryResponse;
  deleteStandalone(
    requestMessage: api_v0alpha_learn_pb.DeleteStandaloneReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.DeleteStandaloneRes|null) => void
  ): UnaryResponse;
  deleteStandalone(
    requestMessage: api_v0alpha_learn_pb.DeleteStandaloneReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.DeleteStandaloneRes|null) => void
  ): UnaryResponse;
}

