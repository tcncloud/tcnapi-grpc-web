// package: api.v1alpha1.scorecards
// file: api/v1alpha1/scorecards/support_service.proto

import * as api_v1alpha1_scorecards_support_service_pb from "../../../api/v1alpha1/scorecards/support_service_pb";
import * as api_v1alpha1_scorecards_auto_evaluation_pb from "../../../api/v1alpha1/scorecards/auto_evaluation_pb";
import * as api_v1alpha1_scorecards_category_pb from "../../../api/v1alpha1/scorecards/category_pb";
import * as api_v1alpha1_scorecards_evaluation_pb from "../../../api/v1alpha1/scorecards/evaluation_pb";
import * as api_v1alpha1_scorecards_scorecard_pb from "../../../api/v1alpha1/scorecards/scorecard_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ScorecardsSupportListEvaluationsByOrgId = {
  readonly methodName: string;
  readonly service: typeof ScorecardsSupport;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_evaluation_pb.ListEvaluationsByOrgIdRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_evaluation_pb.ListEvaluationsResponse;
};

type ScorecardsSupportListAutoEvaluationsByOrgId = {
  readonly methodName: string;
  readonly service: typeof ScorecardsSupport;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_auto_evaluation_pb.ListAutoEvaluationsByOrgIdRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_auto_evaluation_pb.ListAutoEvaluationsResponse;
};

type ScorecardsSupportDeleteEvaluationByOrgId = {
  readonly methodName: string;
  readonly service: typeof ScorecardsSupport;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_evaluation_pb.DeleteEvaluationByOrgIdRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_evaluation_pb.DeleteEvaluationResponse;
};

type ScorecardsSupportDeleteAutoEvaluationByOrgId = {
  readonly methodName: string;
  readonly service: typeof ScorecardsSupport;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_auto_evaluation_pb.DeleteAutoEvaluationByOrgIdRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_auto_evaluation_pb.DeleteAutoEvaluationResponse;
};

type ScorecardsSupportListScorecardsByOrgId = {
  readonly methodName: string;
  readonly service: typeof ScorecardsSupport;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_scorecard_pb.ListScorecardsByOrgIdRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_scorecard_pb.ListScorecardsResponse;
};

type ScorecardsSupportListCategoriesByOrgId = {
  readonly methodName: string;
  readonly service: typeof ScorecardsSupport;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_category_pb.ListCategoriesByOrgIdRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_category_pb.ListCategoriesResponse;
};

export class ScorecardsSupport {
  static readonly serviceName: string;
  static readonly ListEvaluationsByOrgId: ScorecardsSupportListEvaluationsByOrgId;
  static readonly ListAutoEvaluationsByOrgId: ScorecardsSupportListAutoEvaluationsByOrgId;
  static readonly DeleteEvaluationByOrgId: ScorecardsSupportDeleteEvaluationByOrgId;
  static readonly DeleteAutoEvaluationByOrgId: ScorecardsSupportDeleteAutoEvaluationByOrgId;
  static readonly ListScorecardsByOrgId: ScorecardsSupportListScorecardsByOrgId;
  static readonly ListCategoriesByOrgId: ScorecardsSupportListCategoriesByOrgId;
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

export class ScorecardsSupportClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  listEvaluationsByOrgId(
    requestMessage: api_v1alpha1_scorecards_evaluation_pb.ListEvaluationsByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_evaluation_pb.ListEvaluationsResponse|null) => void
  ): UnaryResponse;
  listEvaluationsByOrgId(
    requestMessage: api_v1alpha1_scorecards_evaluation_pb.ListEvaluationsByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_evaluation_pb.ListEvaluationsResponse|null) => void
  ): UnaryResponse;
  listAutoEvaluationsByOrgId(
    requestMessage: api_v1alpha1_scorecards_auto_evaluation_pb.ListAutoEvaluationsByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_auto_evaluation_pb.ListAutoEvaluationsResponse|null) => void
  ): UnaryResponse;
  listAutoEvaluationsByOrgId(
    requestMessage: api_v1alpha1_scorecards_auto_evaluation_pb.ListAutoEvaluationsByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_auto_evaluation_pb.ListAutoEvaluationsResponse|null) => void
  ): UnaryResponse;
  deleteEvaluationByOrgId(
    requestMessage: api_v1alpha1_scorecards_evaluation_pb.DeleteEvaluationByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_evaluation_pb.DeleteEvaluationResponse|null) => void
  ): UnaryResponse;
  deleteEvaluationByOrgId(
    requestMessage: api_v1alpha1_scorecards_evaluation_pb.DeleteEvaluationByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_evaluation_pb.DeleteEvaluationResponse|null) => void
  ): UnaryResponse;
  deleteAutoEvaluationByOrgId(
    requestMessage: api_v1alpha1_scorecards_auto_evaluation_pb.DeleteAutoEvaluationByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_auto_evaluation_pb.DeleteAutoEvaluationResponse|null) => void
  ): UnaryResponse;
  deleteAutoEvaluationByOrgId(
    requestMessage: api_v1alpha1_scorecards_auto_evaluation_pb.DeleteAutoEvaluationByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_auto_evaluation_pb.DeleteAutoEvaluationResponse|null) => void
  ): UnaryResponse;
  listScorecardsByOrgId(
    requestMessage: api_v1alpha1_scorecards_scorecard_pb.ListScorecardsByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_scorecard_pb.ListScorecardsResponse|null) => void
  ): UnaryResponse;
  listScorecardsByOrgId(
    requestMessage: api_v1alpha1_scorecards_scorecard_pb.ListScorecardsByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_scorecard_pb.ListScorecardsResponse|null) => void
  ): UnaryResponse;
  listCategoriesByOrgId(
    requestMessage: api_v1alpha1_scorecards_category_pb.ListCategoriesByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_category_pb.ListCategoriesResponse|null) => void
  ): UnaryResponse;
  listCategoriesByOrgId(
    requestMessage: api_v1alpha1_scorecards_category_pb.ListCategoriesByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_category_pb.ListCategoriesResponse|null) => void
  ): UnaryResponse;
}

