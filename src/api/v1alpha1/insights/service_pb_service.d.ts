// package: api.v1alpha1.insights
// file: api/v1alpha1/insights/service.proto

import * as api_v1alpha1_insights_service_pb from "../../../api/v1alpha1/insights/service_pb";
import * as api_v1alpha1_insights_insight_pb from "../../../api/v1alpha1/insights/insight_pb";
import {grpc} from "@improbable-eng/grpc-web";

type InsightsCreateInsight = {
  readonly methodName: string;
  readonly service: typeof Insights;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_insights_insight_pb.CreateInsightRequest;
  readonly responseType: typeof api_v1alpha1_insights_insight_pb.CreateInsightResponse;
};

type InsightsListInsights = {
  readonly methodName: string;
  readonly service: typeof Insights;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_insights_insight_pb.ListInsightsRequest;
  readonly responseType: typeof api_v1alpha1_insights_insight_pb.ListInsightsResponse;
};

type InsightsUpdateInsight = {
  readonly methodName: string;
  readonly service: typeof Insights;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_insights_insight_pb.UpdateInsightRequest;
  readonly responseType: typeof api_v1alpha1_insights_insight_pb.UpdateInsightResponse;
};

type InsightsDeleteInsight = {
  readonly methodName: string;
  readonly service: typeof Insights;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_insights_insight_pb.DeleteInsightRequest;
  readonly responseType: typeof api_v1alpha1_insights_insight_pb.DeleteInsightResponse;
};

type InsightsGetInsight = {
  readonly methodName: string;
  readonly service: typeof Insights;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_insights_insight_pb.GetInsightRequest;
  readonly responseType: typeof api_v1alpha1_insights_insight_pb.GetInsightResponse;
};

type InsightsCreateCommonsInsight = {
  readonly methodName: string;
  readonly service: typeof Insights;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_insights_insight_pb.CreateInsightRequest;
  readonly responseType: typeof api_v1alpha1_insights_insight_pb.CreateInsightResponse;
};

type InsightsUpdateCommonsInsight = {
  readonly methodName: string;
  readonly service: typeof Insights;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_insights_insight_pb.UpdateInsightRequest;
  readonly responseType: typeof api_v1alpha1_insights_insight_pb.UpdateInsightResponse;
};

type InsightsDeleteCommonsInsight = {
  readonly methodName: string;
  readonly service: typeof Insights;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_insights_insight_pb.DeleteInsightRequest;
  readonly responseType: typeof api_v1alpha1_insights_insight_pb.DeleteInsightResponse;
};

type InsightsGetVfsSchema = {
  readonly methodName: string;
  readonly service: typeof Insights;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_insights_insight_pb.GetVfsSchemaRequest;
  readonly responseType: typeof api_v1alpha1_insights_insight_pb.GetVfsSchemaResponse;
};

type InsightsListVfses = {
  readonly methodName: string;
  readonly service: typeof Insights;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_insights_insight_pb.ListVfsesRequest;
  readonly responseType: typeof api_v1alpha1_insights_insight_pb.ListVfsesResponse;
};

export class Insights {
  static readonly serviceName: string;
  static readonly CreateInsight: InsightsCreateInsight;
  static readonly ListInsights: InsightsListInsights;
  static readonly UpdateInsight: InsightsUpdateInsight;
  static readonly DeleteInsight: InsightsDeleteInsight;
  static readonly GetInsight: InsightsGetInsight;
  static readonly CreateCommonsInsight: InsightsCreateCommonsInsight;
  static readonly UpdateCommonsInsight: InsightsUpdateCommonsInsight;
  static readonly DeleteCommonsInsight: InsightsDeleteCommonsInsight;
  static readonly GetVfsSchema: InsightsGetVfsSchema;
  static readonly ListVfses: InsightsListVfses;
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

export class InsightsClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createInsight(
    requestMessage: api_v1alpha1_insights_insight_pb.CreateInsightRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.CreateInsightResponse|null) => void
  ): UnaryResponse;
  createInsight(
    requestMessage: api_v1alpha1_insights_insight_pb.CreateInsightRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.CreateInsightResponse|null) => void
  ): UnaryResponse;
  listInsights(
    requestMessage: api_v1alpha1_insights_insight_pb.ListInsightsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.ListInsightsResponse|null) => void
  ): UnaryResponse;
  listInsights(
    requestMessage: api_v1alpha1_insights_insight_pb.ListInsightsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.ListInsightsResponse|null) => void
  ): UnaryResponse;
  updateInsight(
    requestMessage: api_v1alpha1_insights_insight_pb.UpdateInsightRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.UpdateInsightResponse|null) => void
  ): UnaryResponse;
  updateInsight(
    requestMessage: api_v1alpha1_insights_insight_pb.UpdateInsightRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.UpdateInsightResponse|null) => void
  ): UnaryResponse;
  deleteInsight(
    requestMessage: api_v1alpha1_insights_insight_pb.DeleteInsightRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.DeleteInsightResponse|null) => void
  ): UnaryResponse;
  deleteInsight(
    requestMessage: api_v1alpha1_insights_insight_pb.DeleteInsightRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.DeleteInsightResponse|null) => void
  ): UnaryResponse;
  getInsight(
    requestMessage: api_v1alpha1_insights_insight_pb.GetInsightRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.GetInsightResponse|null) => void
  ): UnaryResponse;
  getInsight(
    requestMessage: api_v1alpha1_insights_insight_pb.GetInsightRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.GetInsightResponse|null) => void
  ): UnaryResponse;
  createCommonsInsight(
    requestMessage: api_v1alpha1_insights_insight_pb.CreateInsightRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.CreateInsightResponse|null) => void
  ): UnaryResponse;
  createCommonsInsight(
    requestMessage: api_v1alpha1_insights_insight_pb.CreateInsightRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.CreateInsightResponse|null) => void
  ): UnaryResponse;
  updateCommonsInsight(
    requestMessage: api_v1alpha1_insights_insight_pb.UpdateInsightRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.UpdateInsightResponse|null) => void
  ): UnaryResponse;
  updateCommonsInsight(
    requestMessage: api_v1alpha1_insights_insight_pb.UpdateInsightRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.UpdateInsightResponse|null) => void
  ): UnaryResponse;
  deleteCommonsInsight(
    requestMessage: api_v1alpha1_insights_insight_pb.DeleteInsightRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.DeleteInsightResponse|null) => void
  ): UnaryResponse;
  deleteCommonsInsight(
    requestMessage: api_v1alpha1_insights_insight_pb.DeleteInsightRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.DeleteInsightResponse|null) => void
  ): UnaryResponse;
  getVfsSchema(
    requestMessage: api_v1alpha1_insights_insight_pb.GetVfsSchemaRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.GetVfsSchemaResponse|null) => void
  ): UnaryResponse;
  getVfsSchema(
    requestMessage: api_v1alpha1_insights_insight_pb.GetVfsSchemaRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.GetVfsSchemaResponse|null) => void
  ): UnaryResponse;
  listVfses(
    requestMessage: api_v1alpha1_insights_insight_pb.ListVfsesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.ListVfsesResponse|null) => void
  ): UnaryResponse;
  listVfses(
    requestMessage: api_v1alpha1_insights_insight_pb.ListVfsesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.ListVfsesResponse|null) => void
  ): UnaryResponse;
}

