// package: wfo.vanalytics.v2
// file: wfo/vanalytics/v2/service.proto

import * as wfo_vanalytics_v2_service_pb from "../../../wfo/vanalytics/v2/service_pb";
import * as wfo_vanalytics_v2_filter_pb from "../../../wfo/vanalytics/v2/filter_pb";
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
  readonly responseType: typeof wfo_vanalytics_v2_filter_pb.CreateFilterResponse;
};

export class Vanalytics {
  static readonly serviceName: string;
  static readonly SearchTranscripts: VanalyticsSearchTranscripts;
  static readonly CreateFilter: VanalyticsCreateFilter;
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
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_filter_pb.CreateFilterResponse|null) => void
  ): UnaryResponse;
  createFilter(
    requestMessage: wfo_vanalytics_v2_filter_pb.CreateFilterRequest,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_filter_pb.CreateFilterResponse|null) => void
  ): UnaryResponse;
}

