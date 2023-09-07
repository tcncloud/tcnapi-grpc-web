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

export class NewsroomAPI {
  static readonly serviceName: string;
  static readonly CreateNewsArticle: NewsroomAPICreateNewsArticle;
  static readonly ListNewsArticles: NewsroomAPIListNewsArticles;
  static readonly GetNewsArticleById: NewsroomAPIGetNewsArticleById;
  static readonly UpdateNewsArticle: NewsroomAPIUpdateNewsArticle;
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
}
