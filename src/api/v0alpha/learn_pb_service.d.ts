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

type LearnListSearchResults = {
  readonly methodName: string;
  readonly service: typeof Learn;
  readonly requestStream: false;
  readonly responseStream: true;
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

type LearnSnippet = {
  readonly methodName: string;
  readonly service: typeof Learn;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_learn_pb.SnippetReq;
  readonly responseType: typeof api_v0alpha_learn_pb.SnippetRes;
};

type LearnDeleteLearnPages = {
  readonly methodName: string;
  readonly service: typeof Learn;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_learn_pb.DeleteLearnPagesReq;
  readonly responseType: typeof api_v0alpha_learn_pb.DeleteLearnPagesRes;
};

type LearnCreateEditVersion = {
  readonly methodName: string;
  readonly service: typeof Learn;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_learn_pb.CreateEditVersionReq;
  readonly responseType: typeof api_v0alpha_learn_pb.CreateEditVersionRes;
};

type LearnPublishVersion = {
  readonly methodName: string;
  readonly service: typeof Learn;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_learn_pb.PublishVersionReq;
  readonly responseType: typeof api_v0alpha_learn_pb.PublishVersionRes;
};

type LearnContentByVersion = {
  readonly methodName: string;
  readonly service: typeof Learn;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_learn_pb.ContentByVersionReq;
  readonly responseType: typeof api_v0alpha_learn_pb.ContentRes;
};

type LearnUpdateByVersion = {
  readonly methodName: string;
  readonly service: typeof Learn;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_learn_pb.UpdateByVersionReq;
  readonly responseType: typeof api_v0alpha_learn_pb.UpdateRes;
};

type LearnListSearchResultsByVersion = {
  readonly methodName: string;
  readonly service: typeof Learn;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v0alpha_learn_pb.SearchContentByVersionReq;
  readonly responseType: typeof api_v0alpha_learn_pb.SearchRes;
};

type LearnReviewFileVersions = {
  readonly methodName: string;
  readonly service: typeof Learn;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_learn_pb.ReviewFileVersionsReq;
  readonly responseType: typeof api_v0alpha_learn_pb.ReviewFileVersionsRes;
};

type LearnReviewVersion = {
  readonly methodName: string;
  readonly service: typeof Learn;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_learn_pb.ReviewVersionReq;
  readonly responseType: typeof api_v0alpha_learn_pb.ReviewVersionRes;
};

type LearnExportManyStream = {
  readonly methodName: string;
  readonly service: typeof Learn;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v0alpha_learn_pb.ExportManyReq;
  readonly responseType: typeof api_v0alpha_learn_pb.ExportRes;
};

type LearnListVersions = {
  readonly methodName: string;
  readonly service: typeof Learn;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_learn_pb.ListVersionsReq;
  readonly responseType: typeof api_v0alpha_learn_pb.ListVersionsRes;
};

type LearnExportManyVersionStream = {
  readonly methodName: string;
  readonly service: typeof Learn;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v0alpha_learn_pb.ExportManyVersionReq;
  readonly responseType: typeof api_v0alpha_learn_pb.ExportRes;
};

export class Learn {
  static readonly serviceName: string;
  static readonly Exist: LearnExist;
  static readonly Content: LearnContent;
  static readonly ExportMany: LearnExportMany;
  static readonly SearchContent: LearnSearchContent;
  static readonly ListSearchResults: LearnListSearchResults;
  static readonly Standalone: LearnStandalone;
  static readonly ContentEditorData: LearnContentEditorData;
  static readonly Update: LearnUpdate;
  static readonly StoreStaticImage: LearnStoreStaticImage;
  static readonly UploadDynamicScreenshot: LearnUploadDynamicScreenshot;
  static readonly DeleteStandalone: LearnDeleteStandalone;
  static readonly Snippet: LearnSnippet;
  static readonly DeleteLearnPages: LearnDeleteLearnPages;
  static readonly CreateEditVersion: LearnCreateEditVersion;
  static readonly PublishVersion: LearnPublishVersion;
  static readonly ContentByVersion: LearnContentByVersion;
  static readonly UpdateByVersion: LearnUpdateByVersion;
  static readonly ListSearchResultsByVersion: LearnListSearchResultsByVersion;
  static readonly ReviewFileVersions: LearnReviewFileVersions;
  static readonly ReviewVersion: LearnReviewVersion;
  static readonly ExportManyStream: LearnExportManyStream;
  static readonly ListVersions: LearnListVersions;
  static readonly ExportManyVersionStream: LearnExportManyVersionStream;
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
  listSearchResults(requestMessage: api_v0alpha_learn_pb.SearchContentReq, metadata?: grpc.Metadata): ResponseStream<api_v0alpha_learn_pb.SearchRes>;
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
  snippet(
    requestMessage: api_v0alpha_learn_pb.SnippetReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.SnippetRes|null) => void
  ): UnaryResponse;
  snippet(
    requestMessage: api_v0alpha_learn_pb.SnippetReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.SnippetRes|null) => void
  ): UnaryResponse;
  deleteLearnPages(
    requestMessage: api_v0alpha_learn_pb.DeleteLearnPagesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.DeleteLearnPagesRes|null) => void
  ): UnaryResponse;
  deleteLearnPages(
    requestMessage: api_v0alpha_learn_pb.DeleteLearnPagesReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.DeleteLearnPagesRes|null) => void
  ): UnaryResponse;
  createEditVersion(
    requestMessage: api_v0alpha_learn_pb.CreateEditVersionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.CreateEditVersionRes|null) => void
  ): UnaryResponse;
  createEditVersion(
    requestMessage: api_v0alpha_learn_pb.CreateEditVersionReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.CreateEditVersionRes|null) => void
  ): UnaryResponse;
  publishVersion(
    requestMessage: api_v0alpha_learn_pb.PublishVersionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.PublishVersionRes|null) => void
  ): UnaryResponse;
  publishVersion(
    requestMessage: api_v0alpha_learn_pb.PublishVersionReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.PublishVersionRes|null) => void
  ): UnaryResponse;
  contentByVersion(
    requestMessage: api_v0alpha_learn_pb.ContentByVersionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.ContentRes|null) => void
  ): UnaryResponse;
  contentByVersion(
    requestMessage: api_v0alpha_learn_pb.ContentByVersionReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.ContentRes|null) => void
  ): UnaryResponse;
  updateByVersion(
    requestMessage: api_v0alpha_learn_pb.UpdateByVersionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.UpdateRes|null) => void
  ): UnaryResponse;
  updateByVersion(
    requestMessage: api_v0alpha_learn_pb.UpdateByVersionReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.UpdateRes|null) => void
  ): UnaryResponse;
  listSearchResultsByVersion(requestMessage: api_v0alpha_learn_pb.SearchContentByVersionReq, metadata?: grpc.Metadata): ResponseStream<api_v0alpha_learn_pb.SearchRes>;
  reviewFileVersions(
    requestMessage: api_v0alpha_learn_pb.ReviewFileVersionsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.ReviewFileVersionsRes|null) => void
  ): UnaryResponse;
  reviewFileVersions(
    requestMessage: api_v0alpha_learn_pb.ReviewFileVersionsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.ReviewFileVersionsRes|null) => void
  ): UnaryResponse;
  reviewVersion(
    requestMessage: api_v0alpha_learn_pb.ReviewVersionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.ReviewVersionRes|null) => void
  ): UnaryResponse;
  reviewVersion(
    requestMessage: api_v0alpha_learn_pb.ReviewVersionReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.ReviewVersionRes|null) => void
  ): UnaryResponse;
  exportManyStream(requestMessage: api_v0alpha_learn_pb.ExportManyReq, metadata?: grpc.Metadata): ResponseStream<api_v0alpha_learn_pb.ExportRes>;
  listVersions(
    requestMessage: api_v0alpha_learn_pb.ListVersionsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.ListVersionsRes|null) => void
  ): UnaryResponse;
  listVersions(
    requestMessage: api_v0alpha_learn_pb.ListVersionsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_learn_pb.ListVersionsRes|null) => void
  ): UnaryResponse;
  exportManyVersionStream(requestMessage: api_v0alpha_learn_pb.ExportManyVersionReq, metadata?: grpc.Metadata): ResponseStream<api_v0alpha_learn_pb.ExportRes>;
}

