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

type NewsroomAPICreatePublishedArticle = {
  readonly methodName: string;
  readonly service: typeof NewsroomAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_newsroom_entities_pb.CreatePublishedArticleRequest;
  readonly responseType: typeof api_v1alpha1_newsroom_entities_pb.CreatePublishedArticleResponse;
};

type NewsroomAPIListPublishedArticles = {
  readonly methodName: string;
  readonly service: typeof NewsroomAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_newsroom_entities_pb.ListPublishedArticlesRequest;
  readonly responseType: typeof api_v1alpha1_newsroom_entities_pb.ListPublishedArticlesResponse;
};

type NewsroomAPIGetPublishedArticleById = {
  readonly methodName: string;
  readonly service: typeof NewsroomAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_newsroom_entities_pb.GetPublishedArticleByIdRequest;
  readonly responseType: typeof api_v1alpha1_newsroom_entities_pb.GetPublishedArticleByIdResponse;
};

type NewsroomAPIUserActivity = {
  readonly methodName: string;
  readonly service: typeof NewsroomAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_newsroom_entities_pb.UserActivityRequest;
  readonly responseType: typeof api_v1alpha1_newsroom_entities_pb.UserActivityResponse;
};

type NewsroomAPIGetNewsForUser = {
  readonly methodName: string;
  readonly service: typeof NewsroomAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_newsroom_entities_pb.GetNewsForUserRequest;
  readonly responseType: typeof api_v1alpha1_newsroom_entities_pb.GetNewsForUserResponse;
};

type NewsroomAPIStoreNewsArticleImage = {
  readonly methodName: string;
  readonly service: typeof NewsroomAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_newsroom_entities_pb.StoreNewsArticleImageRequest;
  readonly responseType: typeof api_v1alpha1_newsroom_entities_pb.StoreNewsArticleImageResponse;
};

type NewsroomAPIListImagesForNewsArticle = {
  readonly methodName: string;
  readonly service: typeof NewsroomAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_newsroom_entities_pb.ListImagesForNewsArticleRequest;
  readonly responseType: typeof api_v1alpha1_newsroom_entities_pb.ListImagesForNewsArticleResponse;
};

type NewsroomAPIUploadNewsArticleImage = {
  readonly methodName: string;
  readonly service: typeof NewsroomAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_newsroom_entities_pb.UploadNewsArticleImageRequest;
  readonly responseType: typeof api_v1alpha1_newsroom_entities_pb.UploadNewsArticleImageResponse;
};

type NewsroomAPICreateClientArticle = {
  readonly methodName: string;
  readonly service: typeof NewsroomAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_newsroom_entities_pb.CreateClientArticleRequest;
  readonly responseType: typeof api_v1alpha1_newsroom_entities_pb.CreateClientArticleResponse;
};

type NewsroomAPIUpdateClientArticle = {
  readonly methodName: string;
  readonly service: typeof NewsroomAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_newsroom_entities_pb.UpdateClientArticleRequest;
  readonly responseType: typeof api_v1alpha1_newsroom_entities_pb.UpdateClientArticleResponse;
};

type NewsroomAPIListClientArticles = {
  readonly methodName: string;
  readonly service: typeof NewsroomAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_newsroom_entities_pb.ListClientArticlesRequest;
  readonly responseType: typeof api_v1alpha1_newsroom_entities_pb.ListClientArticlesResponse;
};

type NewsroomAPICreatePublishedClientArticle = {
  readonly methodName: string;
  readonly service: typeof NewsroomAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_newsroom_entities_pb.CreatePublishedClientArticleRequest;
  readonly responseType: typeof api_v1alpha1_newsroom_entities_pb.CreatePublishedClientArticleResponse;
};

export class NewsroomAPI {
  static readonly serviceName: string;
  static readonly CreateNewsArticle: NewsroomAPICreateNewsArticle;
  static readonly ListNewsArticles: NewsroomAPIListNewsArticles;
  static readonly GetNewsArticleById: NewsroomAPIGetNewsArticleById;
  static readonly UpdateNewsArticle: NewsroomAPIUpdateNewsArticle;
  static readonly CreatePublishedArticle: NewsroomAPICreatePublishedArticle;
  static readonly ListPublishedArticles: NewsroomAPIListPublishedArticles;
  static readonly GetPublishedArticleById: NewsroomAPIGetPublishedArticleById;
  static readonly UserActivity: NewsroomAPIUserActivity;
  static readonly GetNewsForUser: NewsroomAPIGetNewsForUser;
  static readonly StoreNewsArticleImage: NewsroomAPIStoreNewsArticleImage;
  static readonly ListImagesForNewsArticle: NewsroomAPIListImagesForNewsArticle;
  static readonly UploadNewsArticleImage: NewsroomAPIUploadNewsArticleImage;
  static readonly CreateClientArticle: NewsroomAPICreateClientArticle;
  static readonly UpdateClientArticle: NewsroomAPIUpdateClientArticle;
  static readonly ListClientArticles: NewsroomAPIListClientArticles;
  static readonly CreatePublishedClientArticle: NewsroomAPICreatePublishedClientArticle;
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
  createPublishedArticle(
    requestMessage: api_v1alpha1_newsroom_entities_pb.CreatePublishedArticleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.CreatePublishedArticleResponse|null) => void
  ): UnaryResponse;
  createPublishedArticle(
    requestMessage: api_v1alpha1_newsroom_entities_pb.CreatePublishedArticleRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.CreatePublishedArticleResponse|null) => void
  ): UnaryResponse;
  listPublishedArticles(
    requestMessage: api_v1alpha1_newsroom_entities_pb.ListPublishedArticlesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.ListPublishedArticlesResponse|null) => void
  ): UnaryResponse;
  listPublishedArticles(
    requestMessage: api_v1alpha1_newsroom_entities_pb.ListPublishedArticlesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.ListPublishedArticlesResponse|null) => void
  ): UnaryResponse;
  getPublishedArticleById(
    requestMessage: api_v1alpha1_newsroom_entities_pb.GetPublishedArticleByIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.GetPublishedArticleByIdResponse|null) => void
  ): UnaryResponse;
  getPublishedArticleById(
    requestMessage: api_v1alpha1_newsroom_entities_pb.GetPublishedArticleByIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.GetPublishedArticleByIdResponse|null) => void
  ): UnaryResponse;
  userActivity(
    requestMessage: api_v1alpha1_newsroom_entities_pb.UserActivityRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.UserActivityResponse|null) => void
  ): UnaryResponse;
  userActivity(
    requestMessage: api_v1alpha1_newsroom_entities_pb.UserActivityRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.UserActivityResponse|null) => void
  ): UnaryResponse;
  getNewsForUser(
    requestMessage: api_v1alpha1_newsroom_entities_pb.GetNewsForUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.GetNewsForUserResponse|null) => void
  ): UnaryResponse;
  getNewsForUser(
    requestMessage: api_v1alpha1_newsroom_entities_pb.GetNewsForUserRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.GetNewsForUserResponse|null) => void
  ): UnaryResponse;
  storeNewsArticleImage(
    requestMessage: api_v1alpha1_newsroom_entities_pb.StoreNewsArticleImageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.StoreNewsArticleImageResponse|null) => void
  ): UnaryResponse;
  storeNewsArticleImage(
    requestMessage: api_v1alpha1_newsroom_entities_pb.StoreNewsArticleImageRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.StoreNewsArticleImageResponse|null) => void
  ): UnaryResponse;
  listImagesForNewsArticle(
    requestMessage: api_v1alpha1_newsroom_entities_pb.ListImagesForNewsArticleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.ListImagesForNewsArticleResponse|null) => void
  ): UnaryResponse;
  listImagesForNewsArticle(
    requestMessage: api_v1alpha1_newsroom_entities_pb.ListImagesForNewsArticleRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.ListImagesForNewsArticleResponse|null) => void
  ): UnaryResponse;
  uploadNewsArticleImage(
    requestMessage: api_v1alpha1_newsroom_entities_pb.UploadNewsArticleImageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.UploadNewsArticleImageResponse|null) => void
  ): UnaryResponse;
  uploadNewsArticleImage(
    requestMessage: api_v1alpha1_newsroom_entities_pb.UploadNewsArticleImageRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.UploadNewsArticleImageResponse|null) => void
  ): UnaryResponse;
  createClientArticle(
    requestMessage: api_v1alpha1_newsroom_entities_pb.CreateClientArticleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.CreateClientArticleResponse|null) => void
  ): UnaryResponse;
  createClientArticle(
    requestMessage: api_v1alpha1_newsroom_entities_pb.CreateClientArticleRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.CreateClientArticleResponse|null) => void
  ): UnaryResponse;
  updateClientArticle(
    requestMessage: api_v1alpha1_newsroom_entities_pb.UpdateClientArticleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.UpdateClientArticleResponse|null) => void
  ): UnaryResponse;
  updateClientArticle(
    requestMessage: api_v1alpha1_newsroom_entities_pb.UpdateClientArticleRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.UpdateClientArticleResponse|null) => void
  ): UnaryResponse;
  listClientArticles(
    requestMessage: api_v1alpha1_newsroom_entities_pb.ListClientArticlesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.ListClientArticlesResponse|null) => void
  ): UnaryResponse;
  listClientArticles(
    requestMessage: api_v1alpha1_newsroom_entities_pb.ListClientArticlesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.ListClientArticlesResponse|null) => void
  ): UnaryResponse;
  createPublishedClientArticle(
    requestMessage: api_v1alpha1_newsroom_entities_pb.CreatePublishedClientArticleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.CreatePublishedClientArticleResponse|null) => void
  ): UnaryResponse;
  createPublishedClientArticle(
    requestMessage: api_v1alpha1_newsroom_entities_pb.CreatePublishedClientArticleRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_newsroom_entities_pb.CreatePublishedClientArticleResponse|null) => void
  ): UnaryResponse;
}

