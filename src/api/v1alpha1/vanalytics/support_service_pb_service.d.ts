// package: api.v1alpha1.vanalytics
// file: api/v1alpha1/vanalytics/support_service.proto

import * as api_v1alpha1_vanalytics_support_service_pb from "../../../api/v1alpha1/vanalytics/support_service_pb";
import * as api_v1alpha1_vanalytics_flag_transcript_pb from "../../../api/v1alpha1/vanalytics/flag_transcript_pb";
import * as api_v1alpha1_vanalytics_transcript_pb from "../../../api/v1alpha1/vanalytics/transcript_pb";
import {grpc} from "@improbable-eng/grpc-web";

type VanalyticsSupportDeleteFlagTranscript = {
  readonly methodName: string;
  readonly service: typeof VanalyticsSupport;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_vanalytics_flag_transcript_pb.DeleteFlagTranscriptRequest;
  readonly responseType: typeof api_v1alpha1_vanalytics_flag_transcript_pb.DeleteFlagTranscriptResponse;
};

type VanalyticsSupportListFlaggedTranscriptsByOrgId = {
  readonly methodName: string;
  readonly service: typeof VanalyticsSupport;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_vanalytics_transcript_pb.ListFlaggedTranscriptsByOrgIdRequest;
  readonly responseType: typeof api_v1alpha1_vanalytics_transcript_pb.SearchResponse;
};

export class VanalyticsSupport {
  static readonly serviceName: string;
  static readonly DeleteFlagTranscript: VanalyticsSupportDeleteFlagTranscript;
  static readonly ListFlaggedTranscriptsByOrgId: VanalyticsSupportListFlaggedTranscriptsByOrgId;
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

export class VanalyticsSupportClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  deleteFlagTranscript(
    requestMessage: api_v1alpha1_vanalytics_flag_transcript_pb.DeleteFlagTranscriptRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_flag_transcript_pb.DeleteFlagTranscriptResponse|null) => void
  ): UnaryResponse;
  deleteFlagTranscript(
    requestMessage: api_v1alpha1_vanalytics_flag_transcript_pb.DeleteFlagTranscriptRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_flag_transcript_pb.DeleteFlagTranscriptResponse|null) => void
  ): UnaryResponse;
  listFlaggedTranscriptsByOrgId(
    requestMessage: api_v1alpha1_vanalytics_transcript_pb.ListFlaggedTranscriptsByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_transcript_pb.SearchResponse|null) => void
  ): UnaryResponse;
  listFlaggedTranscriptsByOrgId(
    requestMessage: api_v1alpha1_vanalytics_transcript_pb.ListFlaggedTranscriptsByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_vanalytics_transcript_pb.SearchResponse|null) => void
  ): UnaryResponse;
}

