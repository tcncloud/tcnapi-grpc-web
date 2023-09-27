// package: api.v1alpha1.vanalytics
// file: api/v1alpha1/vanalytics/service.proto

import * as api_v1alpha1_vanalytics_service_pb from "../../../api/v1alpha1/vanalytics/service_pb";
import * as api_v1alpha1_vanalytics_correction_pb from "../../../api/v1alpha1/vanalytics/correction_pb";
import * as api_v1alpha1_vanalytics_filter_pb from "../../../api/v1alpha1/vanalytics/filter_pb";
import * as api_v1alpha1_vanalytics_flag_pb from "../../../api/v1alpha1/vanalytics/flag_pb";
import * as api_v1alpha1_vanalytics_flag_filter_pb from "../../../api/v1alpha1/vanalytics/flag_filter_pb";
import * as api_v1alpha1_vanalytics_flag_review_pb from "../../../api/v1alpha1/vanalytics/flag_review_pb";
import * as api_v1alpha1_vanalytics_flag_snapshot_pb from "../../../api/v1alpha1/vanalytics/flag_snapshot_pb";
import * as api_v1alpha1_vanalytics_flag_transcript_pb from "../../../api/v1alpha1/vanalytics/flag_transcript_pb";
import * as api_v1alpha1_vanalytics_flag_transcript_filter_pb from "../../../api/v1alpha1/vanalytics/flag_transcript_filter_pb";
import * as api_v1alpha1_vanalytics_transcript_pb from "../../../api/v1alpha1/vanalytics/transcript_pb";
import {grpc} from "@improbable-eng/grpc-web";

type VanalyticsAudit = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_vanalytics_service_pb.AuditRequest;
  readonly responseType: typeof api_v1alpha1_vanalytics_service_pb.AuditResponse;
};

type VanalyticsGetRecordingUrl = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_vanalytics_service_pb.GetRecordingUrlRequest;
  readonly responseType: typeof api_v1alpha1_vanalytics_service_pb.GetRecordingUrlResponse;
};

type VanalyticsListBillingSpan = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_vanalytics_service_pb.ListBillingSpanRequest;
  readonly responseType: typeof api_v1alpha1_vanalytics_service_pb.ListBillingSpanResponse;
};

type VanalyticsSearch = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_vanalytics_transcript_pb.SearchRequest;
  readonly responseType: typeof api_v1alpha1_vanalytics_transcript_pb.SearchResponse;
};

type VanalyticsListTranscriptGroupNames = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_vanalytics_transcript_pb.ListTranscriptGroupNamesRequest;
  readonly responseType: typeof api_v1alpha1_vanalytics_transcript_pb.ListTranscriptGroupNamesResponse;
};

type VanalyticsBulkDeleteTranscripts = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_vanalytics_transcript_pb.BulkDeleteTranscriptsRequest;
  readonly responseType: typeof api_v1alpha1_vanalytics_transcript_pb.BulkDeleteTranscriptsResponse;
};

type VanalyticsBulkRestoreTranscripts = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_vanalytics_transcript_pb.BulkRestoreTranscriptsRequest;
  readonly responseType: typeof api_v1alpha1_vanalytics_transcript_pb.BulkRestoreTranscriptsResponse;
};

type VanalyticsListAgentResponseValues = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_vanalytics_transcript_pb.ListAgentResponseValuesRequest;
  readonly responseType: typeof api_v1alpha1_vanalytics_transcript_pb.ListAgentResponseValuesResponse;
};

type VanalyticsCreateFilter = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_vanalytics_filter_pb.CreateFilterRequest;
  readonly responseType: typeof api_v1alpha1_vanalytics_filter_pb.Filter;
};

type VanalyticsListFilters = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_vanalytics_filter_pb.ListFiltersRequest;
  readonly responseType: typeof api_v1alpha1_vanalytics_filter_pb.ListFiltersResponse;
};

type VanalyticsUpdateFilter = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_vanalytics_filter_pb.UpdateFilterRequest;
  readonly responseType: typeof api_v1alpha1_vanalytics_filter_pb.Filter;
};

type VanalyticsDeleteFilter = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_vanalytics_filter_pb.DeleteFilterRequest;
  readonly responseType: typeof api_v1alpha1_vanalytics_filter_pb.DeleteFilterResponse;
};

type VanalyticsGetFilter = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_vanalytics_filter_pb.GetFilterRequest;
  readonly responseType: typeof api_v1alpha1_vanalytics_filter_pb.Filter;
};

type VanalyticsGetFlag = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_vanalytics_flag_pb.GetFlagRequest;
  readonly responseType: typeof api_v1alpha1_vanalytics_flag_pb.Flag;
};

type VanalyticsCreateFlag = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_vanalytics_flag_pb.CreateFlagRequest;
  readonly responseType: typeof api_v1alpha1_vanalytics_flag_pb.Flag;
};

type VanalyticsListFlags = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_vanalytics_flag_pb.ListFlagsRequest;
  readonly responseType: typeof api_v1alpha1_vanalytics_flag_pb.ListFlagsResponse;
};

type VanalyticsUpdateFlag = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_vanalytics_flag_pb.UpdateFlagRequest;
  readonly responseType: typeof api_v1alpha1_vanalytics_flag_pb.Flag;
};

type VanalyticsDeleteFlag = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_vanalytics_flag_pb.DeleteFlagRequest;
  readonly responseType: typeof api_v1alpha1_vanalytics_flag_pb.DeleteFlagResponse;
};

type VanalyticsCreateFlagReview = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_vanalytics_flag_review_pb.CreateFlagReviewRequest;
  readonly responseType: typeof api_v1alpha1_vanalytics_flag_review_pb.FlagReview;
};

type VanalyticsBulkCreateFlagReview = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_vanalytics_flag_review_pb.BulkCreateFlagReviewRequest;
  readonly responseType: typeof api_v1alpha1_vanalytics_flag_review_pb.BulkCreateFlagReviewResponse;
};

type VanalyticsListFlagReviews = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_vanalytics_flag_review_pb.ListFlagReviewsRequest;
  readonly responseType: typeof api_v1alpha1_vanalytics_flag_review_pb.ListFlagReviewsResponse;
};

type VanalyticsCreateFlagTranscript = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_vanalytics_flag_transcript_pb.CreateFlagTranscriptRequest;
  readonly responseType: typeof api_v1alpha1_vanalytics_flag_transcript_pb.CreateFlagTranscriptResponse;
};

type VanalyticsSearchFlagTranscripts = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_vanalytics_flag_transcript_pb.SearchFlagTranscriptsRequest;
  readonly responseType: typeof api_v1alpha1_vanalytics_flag_transcript_pb.SearchFlagTranscriptsResponse;
};

type VanalyticsCreateFlagFilter = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_vanalytics_flag_filter_pb.CreateFlagFilterRequest;
  readonly responseType: typeof api_v1alpha1_vanalytics_flag_filter_pb.FlagFilter;
};

type VanalyticsListFlagFilters = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_vanalytics_flag_filter_pb.ListFlagFiltersRequest;
  readonly responseType: typeof api_v1alpha1_vanalytics_flag_filter_pb.ListFlagFiltersResponse;
};

type VanalyticsDeleteFlagFilter = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_vanalytics_flag_filter_pb.DeleteFlagFilterRequest;
  readonly responseType: typeof api_v1alpha1_vanalytics_flag_filter_pb.DeleteFlagFilterResponse;
};

type VanalyticsListFlagSnapshots = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_vanalytics_flag_snapshot_pb.ListFlagSnapshotsRequest;
  readonly responseType: typeof api_v1alpha1_vanalytics_flag_snapshot_pb.ListFlagSnapshotsResponse;
};

type VanalyticsListFlagTranscriptFilters = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_vanalytics_flag_transcript_filter_pb.ListFlagTranscriptFiltersRequest;
  readonly responseType: typeof api_v1alpha1_vanalytics_flag_transcript_filter_pb.ListFlagTranscriptFiltersResponse;
};

type VanalyticsCreateCorrection = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_vanalytics_correction_pb.CreateCorrectionRequest;
  readonly responseType: typeof api_v1alpha1_vanalytics_correction_pb.CreateCorrectionResponse;
};

export class Vanalytics {
  static readonly serviceName: string;
  static readonly Audit: VanalyticsAudit;
  static readonly GetRecordingUrl: VanalyticsGetRecordingUrl;
  static readonly ListBillingSpan: VanalyticsListBillingSpan;
  static readonly Search: VanalyticsSearch;
  static readonly ListTranscriptGroupNames: VanalyticsListTranscriptGroupNames;
  static readonly BulkDeleteTranscripts: VanalyticsBulkDeleteTranscripts;
  static readonly BulkRestoreTranscripts: VanalyticsBulkRestoreTranscripts;
  static readonly ListAgentResponseValues: VanalyticsListAgentResponseValues;
  static readonly CreateFilter: VanalyticsCreateFilter;
  static readonly ListFilters: VanalyticsListFilters;
  static readonly UpdateFilter: VanalyticsUpdateFilter;
  static readonly DeleteFilter: VanalyticsDeleteFilter;
  static readonly GetFilter: VanalyticsGetFilter;
  static readonly GetFlag: VanalyticsGetFlag;
  static readonly CreateFlag: VanalyticsCreateFlag;
  static readonly ListFlags: VanalyticsListFlags;
  static readonly UpdateFlag: VanalyticsUpdateFlag;
  static readonly DeleteFlag: VanalyticsDeleteFlag;
  static readonly CreateFlagReview: VanalyticsCreateFlagReview;
  static readonly BulkCreateFlagReview: VanalyticsBulkCreateFlagReview;
  static readonly ListFlagReviews: VanalyticsListFlagReviews;
  static readonly CreateFlagTranscript: VanalyticsCreateFlagTranscript;
  static readonly SearchFlagTranscripts: VanalyticsSearchFlagTranscripts;
  static readonly CreateFlagFilter: VanalyticsCreateFlagFilter;
  static readonly ListFlagFilters: VanalyticsListFlagFilters;
  static readonly DeleteFlagFilter: VanalyticsDeleteFlagFilter;
  static readonly ListFlagSnapshots: VanalyticsListFlagSnapshots;
  static readonly ListFlagTranscriptFilters: VanalyticsListFlagTranscriptFilters;
  static readonly CreateCorrection: VanalyticsCreateCorrection;
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

export class VanalyticsClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  audit(
    requestMessage: api_v1alpha1_vanalytics_service_pb.AuditRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_service_pb.AuditResponse|null) => void
  ): UnaryResponse;
  audit(
    requestMessage: api_v1alpha1_vanalytics_service_pb.AuditRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_service_pb.AuditResponse|null) => void
  ): UnaryResponse;
  getRecordingUrl(
    requestMessage: api_v1alpha1_vanalytics_service_pb.GetRecordingUrlRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_service_pb.GetRecordingUrlResponse|null) => void
  ): UnaryResponse;
  getRecordingUrl(
    requestMessage: api_v1alpha1_vanalytics_service_pb.GetRecordingUrlRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_service_pb.GetRecordingUrlResponse|null) => void
  ): UnaryResponse;
  listBillingSpan(
    requestMessage: api_v1alpha1_vanalytics_service_pb.ListBillingSpanRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_service_pb.ListBillingSpanResponse|null) => void
  ): UnaryResponse;
  listBillingSpan(
    requestMessage: api_v1alpha1_vanalytics_service_pb.ListBillingSpanRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_service_pb.ListBillingSpanResponse|null) => void
  ): UnaryResponse;
  search(
    requestMessage: api_v1alpha1_vanalytics_transcript_pb.SearchRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_transcript_pb.SearchResponse|null) => void
  ): UnaryResponse;
  search(
    requestMessage: api_v1alpha1_vanalytics_transcript_pb.SearchRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_transcript_pb.SearchResponse|null) => void
  ): UnaryResponse;
  listTranscriptGroupNames(
    requestMessage: api_v1alpha1_vanalytics_transcript_pb.ListTranscriptGroupNamesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_transcript_pb.ListTranscriptGroupNamesResponse|null) => void
  ): UnaryResponse;
  listTranscriptGroupNames(
    requestMessage: api_v1alpha1_vanalytics_transcript_pb.ListTranscriptGroupNamesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_transcript_pb.ListTranscriptGroupNamesResponse|null) => void
  ): UnaryResponse;
  bulkDeleteTranscripts(
    requestMessage: api_v1alpha1_vanalytics_transcript_pb.BulkDeleteTranscriptsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_transcript_pb.BulkDeleteTranscriptsResponse|null) => void
  ): UnaryResponse;
  bulkDeleteTranscripts(
    requestMessage: api_v1alpha1_vanalytics_transcript_pb.BulkDeleteTranscriptsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_transcript_pb.BulkDeleteTranscriptsResponse|null) => void
  ): UnaryResponse;
  bulkRestoreTranscripts(
    requestMessage: api_v1alpha1_vanalytics_transcript_pb.BulkRestoreTranscriptsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_transcript_pb.BulkRestoreTranscriptsResponse|null) => void
  ): UnaryResponse;
  bulkRestoreTranscripts(
    requestMessage: api_v1alpha1_vanalytics_transcript_pb.BulkRestoreTranscriptsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_transcript_pb.BulkRestoreTranscriptsResponse|null) => void
  ): UnaryResponse;
  listAgentResponseValues(
    requestMessage: api_v1alpha1_vanalytics_transcript_pb.ListAgentResponseValuesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_transcript_pb.ListAgentResponseValuesResponse|null) => void
  ): UnaryResponse;
  listAgentResponseValues(
    requestMessage: api_v1alpha1_vanalytics_transcript_pb.ListAgentResponseValuesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_transcript_pb.ListAgentResponseValuesResponse|null) => void
  ): UnaryResponse;
  createFilter(
    requestMessage: api_v1alpha1_vanalytics_filter_pb.CreateFilterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_filter_pb.Filter|null) => void
  ): UnaryResponse;
  createFilter(
    requestMessage: api_v1alpha1_vanalytics_filter_pb.CreateFilterRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_filter_pb.Filter|null) => void
  ): UnaryResponse;
  listFilters(
    requestMessage: api_v1alpha1_vanalytics_filter_pb.ListFiltersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_filter_pb.ListFiltersResponse|null) => void
  ): UnaryResponse;
  listFilters(
    requestMessage: api_v1alpha1_vanalytics_filter_pb.ListFiltersRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_filter_pb.ListFiltersResponse|null) => void
  ): UnaryResponse;
  updateFilter(
    requestMessage: api_v1alpha1_vanalytics_filter_pb.UpdateFilterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_filter_pb.Filter|null) => void
  ): UnaryResponse;
  updateFilter(
    requestMessage: api_v1alpha1_vanalytics_filter_pb.UpdateFilterRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_filter_pb.Filter|null) => void
  ): UnaryResponse;
  deleteFilter(
    requestMessage: api_v1alpha1_vanalytics_filter_pb.DeleteFilterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_filter_pb.DeleteFilterResponse|null) => void
  ): UnaryResponse;
  deleteFilter(
    requestMessage: api_v1alpha1_vanalytics_filter_pb.DeleteFilterRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_filter_pb.DeleteFilterResponse|null) => void
  ): UnaryResponse;
  getFilter(
    requestMessage: api_v1alpha1_vanalytics_filter_pb.GetFilterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_filter_pb.Filter|null) => void
  ): UnaryResponse;
  getFilter(
    requestMessage: api_v1alpha1_vanalytics_filter_pb.GetFilterRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_filter_pb.Filter|null) => void
  ): UnaryResponse;
  getFlag(
    requestMessage: api_v1alpha1_vanalytics_flag_pb.GetFlagRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_flag_pb.Flag|null) => void
  ): UnaryResponse;
  getFlag(
    requestMessage: api_v1alpha1_vanalytics_flag_pb.GetFlagRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_flag_pb.Flag|null) => void
  ): UnaryResponse;
  createFlag(
    requestMessage: api_v1alpha1_vanalytics_flag_pb.CreateFlagRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_flag_pb.Flag|null) => void
  ): UnaryResponse;
  createFlag(
    requestMessage: api_v1alpha1_vanalytics_flag_pb.CreateFlagRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_flag_pb.Flag|null) => void
  ): UnaryResponse;
  listFlags(
    requestMessage: api_v1alpha1_vanalytics_flag_pb.ListFlagsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_flag_pb.ListFlagsResponse|null) => void
  ): UnaryResponse;
  listFlags(
    requestMessage: api_v1alpha1_vanalytics_flag_pb.ListFlagsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_flag_pb.ListFlagsResponse|null) => void
  ): UnaryResponse;
  updateFlag(
    requestMessage: api_v1alpha1_vanalytics_flag_pb.UpdateFlagRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_flag_pb.Flag|null) => void
  ): UnaryResponse;
  updateFlag(
    requestMessage: api_v1alpha1_vanalytics_flag_pb.UpdateFlagRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_flag_pb.Flag|null) => void
  ): UnaryResponse;
  deleteFlag(
    requestMessage: api_v1alpha1_vanalytics_flag_pb.DeleteFlagRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_flag_pb.DeleteFlagResponse|null) => void
  ): UnaryResponse;
  deleteFlag(
    requestMessage: api_v1alpha1_vanalytics_flag_pb.DeleteFlagRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_flag_pb.DeleteFlagResponse|null) => void
  ): UnaryResponse;
  createFlagReview(
    requestMessage: api_v1alpha1_vanalytics_flag_review_pb.CreateFlagReviewRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_flag_review_pb.FlagReview|null) => void
  ): UnaryResponse;
  createFlagReview(
    requestMessage: api_v1alpha1_vanalytics_flag_review_pb.CreateFlagReviewRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_flag_review_pb.FlagReview|null) => void
  ): UnaryResponse;
  bulkCreateFlagReview(
    requestMessage: api_v1alpha1_vanalytics_flag_review_pb.BulkCreateFlagReviewRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_flag_review_pb.BulkCreateFlagReviewResponse|null) => void
  ): UnaryResponse;
  bulkCreateFlagReview(
    requestMessage: api_v1alpha1_vanalytics_flag_review_pb.BulkCreateFlagReviewRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_flag_review_pb.BulkCreateFlagReviewResponse|null) => void
  ): UnaryResponse;
  listFlagReviews(
    requestMessage: api_v1alpha1_vanalytics_flag_review_pb.ListFlagReviewsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_flag_review_pb.ListFlagReviewsResponse|null) => void
  ): UnaryResponse;
  listFlagReviews(
    requestMessage: api_v1alpha1_vanalytics_flag_review_pb.ListFlagReviewsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_flag_review_pb.ListFlagReviewsResponse|null) => void
  ): UnaryResponse;
  createFlagTranscript(
    requestMessage: api_v1alpha1_vanalytics_flag_transcript_pb.CreateFlagTranscriptRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_flag_transcript_pb.CreateFlagTranscriptResponse|null) => void
  ): UnaryResponse;
  createFlagTranscript(
    requestMessage: api_v1alpha1_vanalytics_flag_transcript_pb.CreateFlagTranscriptRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_flag_transcript_pb.CreateFlagTranscriptResponse|null) => void
  ): UnaryResponse;
  searchFlagTranscripts(
    requestMessage: api_v1alpha1_vanalytics_flag_transcript_pb.SearchFlagTranscriptsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_flag_transcript_pb.SearchFlagTranscriptsResponse|null) => void
  ): UnaryResponse;
  searchFlagTranscripts(
    requestMessage: api_v1alpha1_vanalytics_flag_transcript_pb.SearchFlagTranscriptsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_flag_transcript_pb.SearchFlagTranscriptsResponse|null) => void
  ): UnaryResponse;
  createFlagFilter(
    requestMessage: api_v1alpha1_vanalytics_flag_filter_pb.CreateFlagFilterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_flag_filter_pb.FlagFilter|null) => void
  ): UnaryResponse;
  createFlagFilter(
    requestMessage: api_v1alpha1_vanalytics_flag_filter_pb.CreateFlagFilterRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_flag_filter_pb.FlagFilter|null) => void
  ): UnaryResponse;
  listFlagFilters(
    requestMessage: api_v1alpha1_vanalytics_flag_filter_pb.ListFlagFiltersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_flag_filter_pb.ListFlagFiltersResponse|null) => void
  ): UnaryResponse;
  listFlagFilters(
    requestMessage: api_v1alpha1_vanalytics_flag_filter_pb.ListFlagFiltersRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_flag_filter_pb.ListFlagFiltersResponse|null) => void
  ): UnaryResponse;
  deleteFlagFilter(
    requestMessage: api_v1alpha1_vanalytics_flag_filter_pb.DeleteFlagFilterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_flag_filter_pb.DeleteFlagFilterResponse|null) => void
  ): UnaryResponse;
  deleteFlagFilter(
    requestMessage: api_v1alpha1_vanalytics_flag_filter_pb.DeleteFlagFilterRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_flag_filter_pb.DeleteFlagFilterResponse|null) => void
  ): UnaryResponse;
  listFlagSnapshots(
    requestMessage: api_v1alpha1_vanalytics_flag_snapshot_pb.ListFlagSnapshotsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_flag_snapshot_pb.ListFlagSnapshotsResponse|null) => void
  ): UnaryResponse;
  listFlagSnapshots(
    requestMessage: api_v1alpha1_vanalytics_flag_snapshot_pb.ListFlagSnapshotsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_flag_snapshot_pb.ListFlagSnapshotsResponse|null) => void
  ): UnaryResponse;
  listFlagTranscriptFilters(
    requestMessage: api_v1alpha1_vanalytics_flag_transcript_filter_pb.ListFlagTranscriptFiltersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_flag_transcript_filter_pb.ListFlagTranscriptFiltersResponse|null) => void
  ): UnaryResponse;
  listFlagTranscriptFilters(
    requestMessage: api_v1alpha1_vanalytics_flag_transcript_filter_pb.ListFlagTranscriptFiltersRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_flag_transcript_filter_pb.ListFlagTranscriptFiltersResponse|null) => void
  ): UnaryResponse;
  createCorrection(
    requestMessage: api_v1alpha1_vanalytics_correction_pb.CreateCorrectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_correction_pb.CreateCorrectionResponse|null) => void
  ): UnaryResponse;
  createCorrection(
    requestMessage: api_v1alpha1_vanalytics_correction_pb.CreateCorrectionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_correction_pb.CreateCorrectionResponse|null) => void
  ): UnaryResponse;
}

