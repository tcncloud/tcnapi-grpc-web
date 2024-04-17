// package: wfo.vanalytics.v2
// file: wfo/vanalytics/v2/service.proto

import * as wfo_vanalytics_v2_service_pb from "../../../wfo/vanalytics/v2/service_pb";
import * as wfo_vanalytics_v2_filter_pb from "../../../wfo/vanalytics/v2/filter_pb";
import * as wfo_vanalytics_v2_flag_transcript_filter_pb from "../../../wfo/vanalytics/v2/flag_transcript_filter_pb";
import * as wfo_vanalytics_v2_transcript_pb from "../../../wfo/vanalytics/v2/transcript_pb";
import {grpc} from "@improbable-eng/grpc-web";

type VanalyticsSearchTranscripts = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof wfo_vanalytics_v2_transcript_pb.SearchTranscriptsRequest;
  readonly responseType: typeof wfo_vanalytics_v2_transcript_pb.SearchTranscriptsResponse;
};

type VanalyticsCreateFilter = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof wfo_vanalytics_v2_filter_pb.CreateFilterRequest;
  readonly responseType: typeof wfo_vanalytics_v2_filter_pb.Filter;
};

type VanalyticsListFilters = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof wfo_vanalytics_v2_filter_pb.ListFiltersRequest;
  readonly responseType: typeof wfo_vanalytics_v2_filter_pb.ListFiltersResponse;
};

type VanalyticsUpdateFilter = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof wfo_vanalytics_v2_filter_pb.UpdateFilterRequest;
  readonly responseType: typeof wfo_vanalytics_v2_filter_pb.Filter;
};

type VanalyticsDeleteFilter = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof wfo_vanalytics_v2_filter_pb.DeleteFilterRequest;
  readonly responseType: typeof wfo_vanalytics_v2_filter_pb.DeleteFilterResponse;
};

type VanalyticsGetFilter = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof wfo_vanalytics_v2_filter_pb.GetFilterRequest;
  readonly responseType: typeof wfo_vanalytics_v2_filter_pb.Filter;
};

type VanalyticsListFlagTranscriptFilters = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof wfo_vanalytics_v2_flag_transcript_filter_pb.ListFlagTranscriptFiltersRequest;
  readonly responseType: typeof wfo_vanalytics_v2_flag_transcript_filter_pb.ListFlagTranscriptFiltersResponse;
};

export class Vanalytics {
  static readonly serviceName: string;
  static readonly SearchTranscripts: VanalyticsSearchTranscripts;
  static readonly CreateFilter: VanalyticsCreateFilter;
  static readonly ListFilters: VanalyticsListFilters;
  static readonly UpdateFilter: VanalyticsUpdateFilter;
  static readonly DeleteFilter: VanalyticsDeleteFilter;
  static readonly GetFilter: VanalyticsGetFilter;
  static readonly ListFlagTranscriptFilters: VanalyticsListFlagTranscriptFilters;
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
  searchTranscripts(
    requestMessage: wfo_vanalytics_v2_transcript_pb.SearchTranscriptsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_transcript_pb.SearchTranscriptsResponse|null) => void
  ): UnaryResponse;
  searchTranscripts(
    requestMessage: wfo_vanalytics_v2_transcript_pb.SearchTranscriptsRequest,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_transcript_pb.SearchTranscriptsResponse|null) => void
  ): UnaryResponse;
  createFilter(
    requestMessage: wfo_vanalytics_v2_filter_pb.CreateFilterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_filter_pb.Filter|null) => void
  ): UnaryResponse;
  createFilter(
    requestMessage: wfo_vanalytics_v2_filter_pb.CreateFilterRequest,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_filter_pb.Filter|null) => void
  ): UnaryResponse;
  listFilters(
    requestMessage: wfo_vanalytics_v2_filter_pb.ListFiltersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_filter_pb.ListFiltersResponse|null) => void
  ): UnaryResponse;
  listFilters(
    requestMessage: wfo_vanalytics_v2_filter_pb.ListFiltersRequest,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_filter_pb.ListFiltersResponse|null) => void
  ): UnaryResponse;
  updateFilter(
    requestMessage: wfo_vanalytics_v2_filter_pb.UpdateFilterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_filter_pb.Filter|null) => void
  ): UnaryResponse;
  updateFilter(
    requestMessage: wfo_vanalytics_v2_filter_pb.UpdateFilterRequest,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_filter_pb.Filter|null) => void
  ): UnaryResponse;
  deleteFilter(
    requestMessage: wfo_vanalytics_v2_filter_pb.DeleteFilterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_filter_pb.DeleteFilterResponse|null) => void
  ): UnaryResponse;
  deleteFilter(
    requestMessage: wfo_vanalytics_v2_filter_pb.DeleteFilterRequest,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_filter_pb.DeleteFilterResponse|null) => void
  ): UnaryResponse;
  getFilter(
    requestMessage: wfo_vanalytics_v2_filter_pb.GetFilterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_filter_pb.Filter|null) => void
  ): UnaryResponse;
  getFilter(
    requestMessage: wfo_vanalytics_v2_filter_pb.GetFilterRequest,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_filter_pb.Filter|null) => void
  ): UnaryResponse;
  listFlagTranscriptFilters(
    requestMessage: wfo_vanalytics_v2_flag_transcript_filter_pb.ListFlagTranscriptFiltersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_flag_transcript_filter_pb.ListFlagTranscriptFiltersResponse|null) => void
  ): UnaryResponse;
  listFlagTranscriptFilters(
    requestMessage: wfo_vanalytics_v2_flag_transcript_filter_pb.ListFlagTranscriptFiltersRequest,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_flag_transcript_filter_pb.ListFlagTranscriptFiltersResponse|null) => void
  ): UnaryResponse;
}

