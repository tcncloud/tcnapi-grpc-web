// package: wfo.vanalytics.v2
// file: wfo/vanalytics/v2/service.proto

import * as wfo_vanalytics_v2_service_pb from "../../../wfo/vanalytics/v2/service_pb";
import * as wfo_vanalytics_v2_correction_pb from "../../../wfo/vanalytics/v2/correction_pb";
import * as wfo_vanalytics_v2_flag_pb from "../../../wfo/vanalytics/v2/flag_pb";
import * as wfo_vanalytics_v2_flag_review_pb from "../../../wfo/vanalytics/v2/flag_review_pb";
import * as wfo_vanalytics_v2_flag_snapshot_pb from "../../../wfo/vanalytics/v2/flag_snapshot_pb";
import * as wfo_vanalytics_v2_flag_transcript_pb from "../../../wfo/vanalytics/v2/flag_transcript_pb";
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

type VanalyticsGetFlag = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof wfo_vanalytics_v2_flag_pb.GetFlagRequest;
  readonly responseType: typeof wfo_vanalytics_v2_flag_pb.Flag;
};

type VanalyticsCreateFlag = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof wfo_vanalytics_v2_flag_pb.CreateFlagRequest;
  readonly responseType: typeof wfo_vanalytics_v2_flag_pb.Flag;
};

type VanalyticsListFlags = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof wfo_vanalytics_v2_flag_pb.ListFlagsRequest;
  readonly responseType: typeof wfo_vanalytics_v2_flag_pb.ListFlagsResponse;
};

type VanalyticsUpdateFlag = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof wfo_vanalytics_v2_flag_pb.UpdateFlagRequest;
  readonly responseType: typeof wfo_vanalytics_v2_flag_pb.Flag;
};

type VanalyticsDeleteFlag = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof wfo_vanalytics_v2_flag_pb.DeleteFlagRequest;
  readonly responseType: typeof wfo_vanalytics_v2_flag_pb.DeleteFlagResponse;
};

type VanalyticsCreateFlagReview = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof wfo_vanalytics_v2_flag_review_pb.CreateFlagReviewRequest;
  readonly responseType: typeof wfo_vanalytics_v2_flag_review_pb.FlagReview;
};

type VanalyticsBulkCreateFlagReview = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof wfo_vanalytics_v2_flag_review_pb.BulkCreateFlagReviewRequest;
  readonly responseType: typeof wfo_vanalytics_v2_flag_review_pb.BulkCreateFlagReviewResponse;
};

type VanalyticsListFlagReviews = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof wfo_vanalytics_v2_flag_review_pb.ListFlagReviewsRequest;
  readonly responseType: typeof wfo_vanalytics_v2_flag_review_pb.ListFlagReviewsResponse;
};

type VanalyticsCreateFlagTranscript = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof wfo_vanalytics_v2_flag_transcript_pb.CreateFlagTranscriptRequest;
  readonly responseType: typeof wfo_vanalytics_v2_flag_transcript_pb.CreateFlagTranscriptResponse;
};

type VanalyticsSearchFlagTranscripts = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof wfo_vanalytics_v2_flag_transcript_pb.SearchFlagTranscriptsRequest;
  readonly responseType: typeof wfo_vanalytics_v2_flag_transcript_pb.SearchFlagTranscriptsResponse;
};

type VanalyticsListFlagSnapshots = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof wfo_vanalytics_v2_flag_snapshot_pb.ListFlagSnapshotsRequest;
  readonly responseType: typeof wfo_vanalytics_v2_flag_snapshot_pb.ListFlagSnapshotsResponse;
};

type VanalyticsCreateCorrection = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof wfo_vanalytics_v2_correction_pb.CreateCorrectionRequest;
  readonly responseType: typeof wfo_vanalytics_v2_correction_pb.CreateCorrectionResponse;
};

type VanalyticsGetCorrection = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof wfo_vanalytics_v2_correction_pb.GetCorrectionRequest;
  readonly responseType: typeof wfo_vanalytics_v2_correction_pb.Correction;
};

type VanalyticsDeleteCorrection = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof wfo_vanalytics_v2_correction_pb.DeleteCorrectionRequest;
  readonly responseType: typeof wfo_vanalytics_v2_correction_pb.DeleteCorrectionResponse;
};

type VanalyticsListCorrections = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof wfo_vanalytics_v2_correction_pb.ListCorrectionsRequest;
  readonly responseType: typeof wfo_vanalytics_v2_correction_pb.ListCorrectionsResponse;
};

type VanalyticsUpdateCorrection = {
  readonly methodName: string;
  readonly service: typeof Vanalytics;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof wfo_vanalytics_v2_correction_pb.UpdateCorrectionRequest;
  readonly responseType: typeof wfo_vanalytics_v2_correction_pb.UpdateCorrectionResponse;
};

export class Vanalytics {
  static readonly serviceName: string;
  static readonly SearchTranscripts: VanalyticsSearchTranscripts;
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
  static readonly ListFlagSnapshots: VanalyticsListFlagSnapshots;
  static readonly CreateCorrection: VanalyticsCreateCorrection;
  static readonly GetCorrection: VanalyticsGetCorrection;
  static readonly DeleteCorrection: VanalyticsDeleteCorrection;
  static readonly ListCorrections: VanalyticsListCorrections;
  static readonly UpdateCorrection: VanalyticsUpdateCorrection;
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
  getFlag(
    requestMessage: wfo_vanalytics_v2_flag_pb.GetFlagRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_flag_pb.Flag|null) => void
  ): UnaryResponse;
  getFlag(
    requestMessage: wfo_vanalytics_v2_flag_pb.GetFlagRequest,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_flag_pb.Flag|null) => void
  ): UnaryResponse;
  createFlag(
    requestMessage: wfo_vanalytics_v2_flag_pb.CreateFlagRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_flag_pb.Flag|null) => void
  ): UnaryResponse;
  createFlag(
    requestMessage: wfo_vanalytics_v2_flag_pb.CreateFlagRequest,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_flag_pb.Flag|null) => void
  ): UnaryResponse;
  listFlags(
    requestMessage: wfo_vanalytics_v2_flag_pb.ListFlagsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_flag_pb.ListFlagsResponse|null) => void
  ): UnaryResponse;
  listFlags(
    requestMessage: wfo_vanalytics_v2_flag_pb.ListFlagsRequest,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_flag_pb.ListFlagsResponse|null) => void
  ): UnaryResponse;
  updateFlag(
    requestMessage: wfo_vanalytics_v2_flag_pb.UpdateFlagRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_flag_pb.Flag|null) => void
  ): UnaryResponse;
  updateFlag(
    requestMessage: wfo_vanalytics_v2_flag_pb.UpdateFlagRequest,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_flag_pb.Flag|null) => void
  ): UnaryResponse;
  deleteFlag(
    requestMessage: wfo_vanalytics_v2_flag_pb.DeleteFlagRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_flag_pb.DeleteFlagResponse|null) => void
  ): UnaryResponse;
  deleteFlag(
    requestMessage: wfo_vanalytics_v2_flag_pb.DeleteFlagRequest,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_flag_pb.DeleteFlagResponse|null) => void
  ): UnaryResponse;
  createFlagReview(
    requestMessage: wfo_vanalytics_v2_flag_review_pb.CreateFlagReviewRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_flag_review_pb.FlagReview|null) => void
  ): UnaryResponse;
  createFlagReview(
    requestMessage: wfo_vanalytics_v2_flag_review_pb.CreateFlagReviewRequest,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_flag_review_pb.FlagReview|null) => void
  ): UnaryResponse;
  bulkCreateFlagReview(
    requestMessage: wfo_vanalytics_v2_flag_review_pb.BulkCreateFlagReviewRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_flag_review_pb.BulkCreateFlagReviewResponse|null) => void
  ): UnaryResponse;
  bulkCreateFlagReview(
    requestMessage: wfo_vanalytics_v2_flag_review_pb.BulkCreateFlagReviewRequest,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_flag_review_pb.BulkCreateFlagReviewResponse|null) => void
  ): UnaryResponse;
  listFlagReviews(
    requestMessage: wfo_vanalytics_v2_flag_review_pb.ListFlagReviewsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_flag_review_pb.ListFlagReviewsResponse|null) => void
  ): UnaryResponse;
  listFlagReviews(
    requestMessage: wfo_vanalytics_v2_flag_review_pb.ListFlagReviewsRequest,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_flag_review_pb.ListFlagReviewsResponse|null) => void
  ): UnaryResponse;
  createFlagTranscript(
    requestMessage: wfo_vanalytics_v2_flag_transcript_pb.CreateFlagTranscriptRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_flag_transcript_pb.CreateFlagTranscriptResponse|null) => void
  ): UnaryResponse;
  createFlagTranscript(
    requestMessage: wfo_vanalytics_v2_flag_transcript_pb.CreateFlagTranscriptRequest,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_flag_transcript_pb.CreateFlagTranscriptResponse|null) => void
  ): UnaryResponse;
  searchFlagTranscripts(
    requestMessage: wfo_vanalytics_v2_flag_transcript_pb.SearchFlagTranscriptsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_flag_transcript_pb.SearchFlagTranscriptsResponse|null) => void
  ): UnaryResponse;
  searchFlagTranscripts(
    requestMessage: wfo_vanalytics_v2_flag_transcript_pb.SearchFlagTranscriptsRequest,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_flag_transcript_pb.SearchFlagTranscriptsResponse|null) => void
  ): UnaryResponse;
  listFlagSnapshots(
    requestMessage: wfo_vanalytics_v2_flag_snapshot_pb.ListFlagSnapshotsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_flag_snapshot_pb.ListFlagSnapshotsResponse|null) => void
  ): UnaryResponse;
  listFlagSnapshots(
    requestMessage: wfo_vanalytics_v2_flag_snapshot_pb.ListFlagSnapshotsRequest,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_flag_snapshot_pb.ListFlagSnapshotsResponse|null) => void
  ): UnaryResponse;
  createCorrection(
    requestMessage: wfo_vanalytics_v2_correction_pb.CreateCorrectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_correction_pb.CreateCorrectionResponse|null) => void
  ): UnaryResponse;
  createCorrection(
    requestMessage: wfo_vanalytics_v2_correction_pb.CreateCorrectionRequest,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_correction_pb.CreateCorrectionResponse|null) => void
  ): UnaryResponse;
  getCorrection(
    requestMessage: wfo_vanalytics_v2_correction_pb.GetCorrectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_correction_pb.Correction|null) => void
  ): UnaryResponse;
  getCorrection(
    requestMessage: wfo_vanalytics_v2_correction_pb.GetCorrectionRequest,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_correction_pb.Correction|null) => void
  ): UnaryResponse;
  deleteCorrection(
    requestMessage: wfo_vanalytics_v2_correction_pb.DeleteCorrectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_correction_pb.DeleteCorrectionResponse|null) => void
  ): UnaryResponse;
  deleteCorrection(
    requestMessage: wfo_vanalytics_v2_correction_pb.DeleteCorrectionRequest,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_correction_pb.DeleteCorrectionResponse|null) => void
  ): UnaryResponse;
  listCorrections(
    requestMessage: wfo_vanalytics_v2_correction_pb.ListCorrectionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_correction_pb.ListCorrectionsResponse|null) => void
  ): UnaryResponse;
  listCorrections(
    requestMessage: wfo_vanalytics_v2_correction_pb.ListCorrectionsRequest,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_correction_pb.ListCorrectionsResponse|null) => void
  ): UnaryResponse;
  updateCorrection(
    requestMessage: wfo_vanalytics_v2_correction_pb.UpdateCorrectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_correction_pb.UpdateCorrectionResponse|null) => void
  ): UnaryResponse;
  updateCorrection(
    requestMessage: wfo_vanalytics_v2_correction_pb.UpdateCorrectionRequest,
    callback: (error: ServiceError|null, responseMessage: wfo_vanalytics_v2_correction_pb.UpdateCorrectionResponse|null) => void
  ): UnaryResponse;
}

