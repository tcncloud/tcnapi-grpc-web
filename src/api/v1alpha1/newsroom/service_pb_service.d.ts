// package: api.v1alpha1.newsroom
// file: api/v1alpha1/newsroom/service.proto

import * as api_v1alpha1_newsroom_service_pb from "../../../api/v1alpha1/newsroom/service_pb";
import * as api_v1alpha1_newsroom_entities_pb from "../../../api/v1alpha1/newsroom/entities_pb";
import {grpc} from "@improbable-eng/grpc-web";

type NewsroomAPICreateNewsArticle = {
  readonly methodName: string;
  readonly service: typeof NewsroomAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_newsroom_entities_pb.CreateNewsArticleRequest;
  readonly responseType: typeof api_v1alpha1_newsroom_entities_pb.CreateNewsArticleResponse;
};

type NewsroomAPIListNewsArticles = {
  readonly methodName: string;
  readonly service: typeof NewsroomAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_newsroom_entities_pb.ListNewsArticlesRequest;
  readonly responseType: typeof api_v1alpha1_newsroom_entities_pb.ListNewsArticlesResponse;
};

type NewsroomAPIGetNewsArticleById = {
  readonly methodName: string;
  readonly service: typeof NewsroomAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_newsroom_entities_pb.GetNewsArticleByIdRequest;
  readonly responseType: typeof api_v1alpha1_newsroom_entities_pb.GetNewsArticleByIdResponse;
};

type NewsroomAPIUpdateNewsArticle = {
  readonly methodName: string;
  readonly service: typeof NewsroomAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_newsroom_entities_pb.UpdateNewsArticleRequest;
  readonly responseType: typeof api_v1alpha1_newsroom_entities_pb.UpdateNewsArticleResponse;
};

type NewsroomAPICreatePublishedNewsArticle = {
  readonly methodName: string;
  readonly service: typeof NewsroomAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_newsroom_entities_pb.CreatePublishedNewsArticleRequest;
  readonly responseType: typeof api_v1alpha1_newsroom_entities_pb.CreatePublishedNewsArticleResponse;
};

type NewsroomAPIListPublishedNewsArticles = {
  readonly methodName: string;
  readonly service: typeof NewsroomAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_newsroom_entities_pb.ListPublishedNewsArticlesRequest;
  readonly responseType: typeof api_v1alpha1_newsroom_entities_pb.ListPublishedNewsArticlesResponse;
};

type NewsroomAPIGetPublishedNewsArticleById = {
  readonly methodName: string;
  readonly service: typeof NewsroomAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_newsroom_entities_pb.GetPublishedNewsArticleByIdRequest;
  readonly responseType: typeof api_v1alpha1_newsroom_entities_pb.GetPublishedNewsArticleByIdResponse;
};

type NewsroomAPIUpdatePublishedNewsArticle = {
  readonly methodName: string;
  readonly service: typeof NewsroomAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_newsroom_entities_pb.UpdatePublishedNewsArticleRequest;
  readonly responseType: typeof api_v1alpha1_newsroom_entities_pb.UpdatePublishedNewsArticleResponse;
};

export class NewsroomAPI {
  static readonly serviceName: string;
  static readonly CreateNewsArticle: NewsroomAPICreateNewsArticle;
  static readonly ListNewsArticles: NewsroomAPIListNewsArticles;
  static readonly GetNewsArticleById: NewsroomAPIGetNewsArticleById;
  static readonly UpdateNewsArticle: NewsroomAPIUpdateNewsArticle;
  static readonly CreatePublishedNewsArticle: NewsroomAPICreatePublishedNewsArticle;
  static readonly ListPublishedNewsArticles: NewsroomAPIListPublishedNewsArticles;
  static readonly GetPublishedNewsArticleById: NewsroomAPIGetPublishedNewsArticleById;
  static readonly UpdatePublishedNewsArticle: NewsroomAPIUpdatePublishedNewsArticle;
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

export class NewsroomAPIClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createNewsArticle(
    requestMessage: api_v1alpha1_newsroom_entities_pb.CreateNewsArticleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.CreateNewsArticleResponse|null) => void
  ): UnaryResponse;
  createNewsArticle(
    requestMessage: api_v1alpha1_newsroom_entities_pb.CreateNewsArticleRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.CreateNewsArticleResponse|null) => void
  ): UnaryResponse;
  listNewsArticles(
    requestMessage: api_v1alpha1_newsroom_entities_pb.ListNewsArticlesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.ListNewsArticlesResponse|null) => void
  ): UnaryResponse;
  listNewsArticles(
    requestMessage: api_v1alpha1_newsroom_entities_pb.ListNewsArticlesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.ListNewsArticlesResponse|null) => void
  ): UnaryResponse;
  getNewsArticleById(
    requestMessage: api_v1alpha1_newsroom_entities_pb.GetNewsArticleByIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.GetNewsArticleByIdResponse|null) => void
  ): UnaryResponse;
  getNewsArticleById(
    requestMessage: api_v1alpha1_newsroom_entities_pb.GetNewsArticleByIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.GetNewsArticleByIdResponse|null) => void
  ): UnaryResponse;
  updateNewsArticle(
    requestMessage: api_v1alpha1_newsroom_entities_pb.UpdateNewsArticleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.UpdateNewsArticleResponse|null) => void
  ): UnaryResponse;
  updateNewsArticle(
    requestMessage: api_v1alpha1_newsroom_entities_pb.UpdateNewsArticleRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.UpdateNewsArticleResponse|null) => void
  ): UnaryResponse;
  createPublishedNewsArticle(
    requestMessage: api_v1alpha1_newsroom_entities_pb.CreatePublishedNewsArticleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.CreatePublishedNewsArticleResponse|null) => void
  ): UnaryResponse;
  createPublishedNewsArticle(
    requestMessage: api_v1alpha1_newsroom_entities_pb.CreatePublishedNewsArticleRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.CreatePublishedNewsArticleResponse|null) => void
  ): UnaryResponse;
  listPublishedNewsArticles(
    requestMessage: api_v1alpha1_newsroom_entities_pb.ListPublishedNewsArticlesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.ListPublishedNewsArticlesResponse|null) => void
  ): UnaryResponse;
  listPublishedNewsArticles(
    requestMessage: api_v1alpha1_newsroom_entities_pb.ListPublishedNewsArticlesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.ListPublishedNewsArticlesResponse|null) => void
  ): UnaryResponse;
  getPublishedNewsArticleById(
    requestMessage: api_v1alpha1_newsroom_entities_pb.GetPublishedNewsArticleByIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.GetPublishedNewsArticleByIdResponse|null) => void
  ): UnaryResponse;
  getPublishedNewsArticleById(
    requestMessage: api_v1alpha1_newsroom_entities_pb.GetPublishedNewsArticleByIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.GetPublishedNewsArticleByIdResponse|null) => void
  ): UnaryResponse;
  updatePublishedNewsArticle(
    requestMessage: api_v1alpha1_newsroom_entities_pb.UpdatePublishedNewsArticleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.UpdatePublishedNewsArticleResponse|null) => void
  ): UnaryResponse;
  updatePublishedNewsArticle(
    requestMessage: api_v1alpha1_newsroom_entities_pb.UpdatePublishedNewsArticleRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.UpdatePublishedNewsArticleResponse|null) => void
  ): UnaryResponse;
}

