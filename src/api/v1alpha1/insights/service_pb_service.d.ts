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

type InsightsListOrgInsights = {
  readonly methodName: string;
  readonly service: typeof Insights;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_insights_insight_pb.ListOrgInsightsRequest;
  readonly responseType: typeof api_v1alpha1_insights_insight_pb.ListOrgInsightsResponse;
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

type InsightsListVfsSchemas = {
  readonly methodName: string;
  readonly service: typeof Insights;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_insights_insight_pb.ListVfsSchemasRequest;
  readonly responseType: typeof api_v1alpha1_insights_insight_pb.ListVfsSchemasResponse;
};

type InsightsPublishInsight = {
  readonly methodName: string;
  readonly service: typeof Insights;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_insights_insight_pb.PublishInsightRequest;
  readonly responseType: typeof api_v1alpha1_insights_insight_pb.PublishInsightResponse;
};

type InsightsCreateOutputConfiguration = {
  readonly methodName: string;
  readonly service: typeof Insights;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_insights_insight_pb.CreateOutputConfigurationRequest;
  readonly responseType: typeof api_v1alpha1_insights_insight_pb.CreateOutputConfigurationResponse;
};

type InsightsListOutputConfigurations = {
  readonly methodName: string;
  readonly service: typeof Insights;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_insights_insight_pb.ListOutputConfigurationsRequest;
  readonly responseType: typeof api_v1alpha1_insights_insight_pb.ListOutputConfigurationsResponse;
};

type InsightsListOutputConfigurationsStreamed = {
  readonly methodName: string;
  readonly service: typeof Insights;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v1alpha1_insights_insight_pb.ListOutputConfigurationsRequest;
  readonly responseType: typeof api_v1alpha1_insights_insight_pb.ListOutputConfigurationsResponse;
};

type InsightsUpdateOutputConfiguration = {
  readonly methodName: string;
  readonly service: typeof Insights;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_insights_insight_pb.UpdateOutputConfigurationRequest;
  readonly responseType: typeof api_v1alpha1_insights_insight_pb.UpdateOutputConfigurationResponse;
};

type InsightsDeleteOutputConfiguration = {
  readonly methodName: string;
  readonly service: typeof Insights;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_insights_insight_pb.DeleteOutputConfigurationRequest;
  readonly responseType: typeof api_v1alpha1_insights_insight_pb.DeleteOutputConfigurationResponse;
};

type InsightsGetOutputConfiguration = {
  readonly methodName: string;
  readonly service: typeof Insights;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_insights_insight_pb.GetOutputConfigurationRequest;
  readonly responseType: typeof api_v1alpha1_insights_insight_pb.GetOutputConfigurationResponse;
};

type InsightsSetDefaultOutputConfiguration = {
  readonly methodName: string;
  readonly service: typeof Insights;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_insights_insight_pb.SetDefaultOutputConfigurationRequest;
  readonly responseType: typeof api_v1alpha1_insights_insight_pb.SetDefaultOutputConfigurationResponse;
};

type InsightsGetDefaultOutputConfiguration = {
  readonly methodName: string;
  readonly service: typeof Insights;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_insights_insight_pb.GetDefaultOutputConfigurationRequest;
  readonly responseType: typeof api_v1alpha1_insights_insight_pb.GetDefaultOutputConfigurationResponse;
};

export class Insights {
  static readonly serviceName: string;
  static readonly CreateInsight: InsightsCreateInsight;
  static readonly ListInsights: InsightsListInsights;
  static readonly ListOrgInsights: InsightsListOrgInsights;
  static readonly UpdateInsight: InsightsUpdateInsight;
  static readonly DeleteInsight: InsightsDeleteInsight;
  static readonly GetInsight: InsightsGetInsight;
  static readonly CreateCommonsInsight: InsightsCreateCommonsInsight;
  static readonly UpdateCommonsInsight: InsightsUpdateCommonsInsight;
  static readonly DeleteCommonsInsight: InsightsDeleteCommonsInsight;
  static readonly GetVfsSchema: InsightsGetVfsSchema;
  static readonly ListVfses: InsightsListVfses;
  static readonly ListVfsSchemas: InsightsListVfsSchemas;
  static readonly PublishInsight: InsightsPublishInsight;
  static readonly CreateOutputConfiguration: InsightsCreateOutputConfiguration;
  static readonly ListOutputConfigurations: InsightsListOutputConfigurations;
  static readonly ListOutputConfigurationsStreamed: InsightsListOutputConfigurationsStreamed;
  static readonly UpdateOutputConfiguration: InsightsUpdateOutputConfiguration;
  static readonly DeleteOutputConfiguration: InsightsDeleteOutputConfiguration;
  static readonly GetOutputConfiguration: InsightsGetOutputConfiguration;
  static readonly SetDefaultOutputConfiguration: InsightsSetDefaultOutputConfiguration;
  static readonly GetDefaultOutputConfiguration: InsightsGetDefaultOutputConfiguration;
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
  listOrgInsights(
    requestMessage: api_v1alpha1_insights_insight_pb.ListOrgInsightsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.ListOrgInsightsResponse|null) => void
  ): UnaryResponse;
  listOrgInsights(
    requestMessage: api_v1alpha1_insights_insight_pb.ListOrgInsightsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.ListOrgInsightsResponse|null) => void
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
  listVfsSchemas(
    requestMessage: api_v1alpha1_insights_insight_pb.ListVfsSchemasRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.ListVfsSchemasResponse|null) => void
  ): UnaryResponse;
  listVfsSchemas(
    requestMessage: api_v1alpha1_insights_insight_pb.ListVfsSchemasRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.ListVfsSchemasResponse|null) => void
  ): UnaryResponse;
  publishInsight(
    requestMessage: api_v1alpha1_insights_insight_pb.PublishInsightRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.PublishInsightResponse|null) => void
  ): UnaryResponse;
  publishInsight(
    requestMessage: api_v1alpha1_insights_insight_pb.PublishInsightRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.PublishInsightResponse|null) => void
  ): UnaryResponse;
  createOutputConfiguration(
    requestMessage: api_v1alpha1_insights_insight_pb.CreateOutputConfigurationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.CreateOutputConfigurationResponse|null) => void
  ): UnaryResponse;
  createOutputConfiguration(
    requestMessage: api_v1alpha1_insights_insight_pb.CreateOutputConfigurationRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.CreateOutputConfigurationResponse|null) => void
  ): UnaryResponse;
  listOutputConfigurations(
    requestMessage: api_v1alpha1_insights_insight_pb.ListOutputConfigurationsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.ListOutputConfigurationsResponse|null) => void
  ): UnaryResponse;
  listOutputConfigurations(
    requestMessage: api_v1alpha1_insights_insight_pb.ListOutputConfigurationsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.ListOutputConfigurationsResponse|null) => void
  ): UnaryResponse;
  listOutputConfigurationsStreamed(requestMessage: api_v1alpha1_insights_insight_pb.ListOutputConfigurationsRequest, metadata?: grpc.Metadata): ResponseStream<api_v1alpha1_insights_insight_pb.ListOutputConfigurationsResponse>;
  updateOutputConfiguration(
    requestMessage: api_v1alpha1_insights_insight_pb.UpdateOutputConfigurationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.UpdateOutputConfigurationResponse|null) => void
  ): UnaryResponse;
  updateOutputConfiguration(
    requestMessage: api_v1alpha1_insights_insight_pb.UpdateOutputConfigurationRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.UpdateOutputConfigurationResponse|null) => void
  ): UnaryResponse;
  deleteOutputConfiguration(
    requestMessage: api_v1alpha1_insights_insight_pb.DeleteOutputConfigurationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.DeleteOutputConfigurationResponse|null) => void
  ): UnaryResponse;
  deleteOutputConfiguration(
    requestMessage: api_v1alpha1_insights_insight_pb.DeleteOutputConfigurationRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.DeleteOutputConfigurationResponse|null) => void
  ): UnaryResponse;
  getOutputConfiguration(
    requestMessage: api_v1alpha1_insights_insight_pb.GetOutputConfigurationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.GetOutputConfigurationResponse|null) => void
  ): UnaryResponse;
  getOutputConfiguration(
    requestMessage: api_v1alpha1_insights_insight_pb.GetOutputConfigurationRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.GetOutputConfigurationResponse|null) => void
  ): UnaryResponse;
  setDefaultOutputConfiguration(
    requestMessage: api_v1alpha1_insights_insight_pb.SetDefaultOutputConfigurationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.SetDefaultOutputConfigurationResponse|null) => void
  ): UnaryResponse;
  setDefaultOutputConfiguration(
    requestMessage: api_v1alpha1_insights_insight_pb.SetDefaultOutputConfigurationRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.SetDefaultOutputConfigurationResponse|null) => void
  ): UnaryResponse;
  getDefaultOutputConfiguration(
    requestMessage: api_v1alpha1_insights_insight_pb.GetDefaultOutputConfigurationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.GetDefaultOutputConfigurationResponse|null) => void
  ): UnaryResponse;
  getDefaultOutputConfiguration(
    requestMessage: api_v1alpha1_insights_insight_pb.GetDefaultOutputConfigurationRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_insights_insight_pb.GetDefaultOutputConfigurationResponse|null) => void
  ): UnaryResponse;
}

