// package: api.v1alpha1.scorecards
// file: api/v1alpha1/scorecards/service.proto

import * as api_v1alpha1_scorecards_service_pb from "../../../api/v1alpha1/scorecards/service_pb";
import * as api_v1alpha1_scorecards_auto_evaluation_pb from "../../../api/v1alpha1/scorecards/auto_evaluation_pb";
import * as api_v1alpha1_scorecards_auto_question_pb from "../../../api/v1alpha1/scorecards/auto_question_pb";
import * as api_v1alpha1_scorecards_category_pb from "../../../api/v1alpha1/scorecards/category_pb";
import * as api_v1alpha1_scorecards_evaluation_pb from "../../../api/v1alpha1/scorecards/evaluation_pb";
import * as api_v1alpha1_scorecards_evaluation_question_pb from "../../../api/v1alpha1/scorecards/evaluation_question_pb";
import * as api_v1alpha1_scorecards_question_pb from "../../../api/v1alpha1/scorecards/question_pb";
import * as api_v1alpha1_scorecards_scorecard_pb from "../../../api/v1alpha1/scorecards/scorecard_pb";
import * as api_v1alpha1_scorecards_scorecard_question_pb from "../../../api/v1alpha1/scorecards/scorecard_question_pb";
import * as api_v1alpha1_scorecards_section_pb from "../../../api/v1alpha1/scorecards/section_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ScorecardsCreateScorecard = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_scorecard_pb.CreateScorecardRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_scorecard_pb.CreateScorecardResponse;
};

type ScorecardsListScorecards = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_scorecard_pb.ListScorecardsRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_scorecard_pb.ListScorecardsResponse;
};

type ScorecardsUpdateScorecard = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_scorecard_pb.UpdateScorecardRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_scorecard_pb.UpdateScorecardResponse;
};

type ScorecardsDeleteScorecard = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_scorecard_pb.DeleteScorecardRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_scorecard_pb.DeleteScorecardResponse;
};

type ScorecardsGetScorecard = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_scorecard_pb.GetScorecardRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_scorecard_pb.GetScorecardResponse;
};

type ScorecardsCreateQuestion = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_question_pb.CreateQuestionRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_question_pb.CreateQuestionResponse;
};

type ScorecardsListQuestions = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_question_pb.ListQuestionsRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_question_pb.ListQuestionsResponse;
};

type ScorecardsUpdateQuestion = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_question_pb.UpdateQuestionRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_question_pb.UpdateQuestionResponse;
};

type ScorecardsDeleteQuestion = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_question_pb.DeleteQuestionRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_question_pb.DeleteQuestionResponse;
};

type ScorecardsGetQuestion = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_question_pb.GetQuestionRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_question_pb.GetQuestionResponse;
};

type ScorecardsBulkCreateQuestions = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_question_pb.BulkCreateQuestionsRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_question_pb.BulkCreateQuestionsResponse;
};

type ScorecardsCreateCategory = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_category_pb.CreateCategoryRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_category_pb.CreateCategoryResponse;
};

type ScorecardsListCategories = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_category_pb.ListCategoriesRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_category_pb.ListCategoriesResponse;
};

type ScorecardsUpdateCategory = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_category_pb.UpdateCategoryRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_category_pb.UpdateCategoryResponse;
};

type ScorecardsDeleteCategory = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_category_pb.DeleteCategoryRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_category_pb.DeleteCategoryResponse;
};

type ScorecardsGetCategory = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_category_pb.GetCategoryRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_category_pb.GetCategoryResponse;
};

type ScorecardsCreateScorecardQuestion = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_scorecard_question_pb.CreateScorecardQuestionRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_scorecard_question_pb.CreateScorecardQuestionResponse;
};

type ScorecardsUpdateScorecardQuestion = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_scorecard_question_pb.UpdateScorecardQuestionRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_scorecard_question_pb.UpdateScorecardQuestionResponse;
};

type ScorecardsDeleteScorecardQuestion = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_scorecard_question_pb.DeleteScorecardQuestionRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_scorecard_question_pb.DeleteScorecardQuestionResponse;
};

type ScorecardsGetScorecardQuestion = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_scorecard_question_pb.GetScorecardQuestionRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_scorecard_question_pb.GetScorecardQuestionResponse;
};

type ScorecardsCreateSection = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_section_pb.CreateSectionRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_section_pb.CreateSectionResponse;
};

type ScorecardsListSections = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_section_pb.ListSectionsRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_section_pb.ListSectionsResponse;
};

type ScorecardsUpdateSection = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_section_pb.UpdateSectionRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_section_pb.UpdateSectionResponse;
};

type ScorecardsGetSection = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_section_pb.GetSectionRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_section_pb.GetSectionResponse;
};

type ScorecardsDeleteSection = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_section_pb.DeleteSectionRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_section_pb.DeleteSectionResponse;
};

type ScorecardsCreateQuestionCategory = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_question_pb.CreateQuestionCategoryRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_question_pb.CreateQuestionCategoryResponse;
};

type ScorecardsDeleteQuestionCategory = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_question_pb.DeleteQuestionCategoryRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_question_pb.DeleteQuestionCategoryResponse;
};

type ScorecardsCreateEvaluation = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_evaluation_pb.CreateEvaluationRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_evaluation_pb.CreateEvaluationResponse;
};

type ScorecardsDeleteEvaluation = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_evaluation_pb.DeleteEvaluationRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_evaluation_pb.DeleteEvaluationResponse;
};

type ScorecardsScoreEvaluation = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_evaluation_pb.ScoreEvaluationRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_evaluation_pb.ScoreEvaluationResponse;
};

type ScorecardsUpdateEvaluation = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_evaluation_pb.UpdateEvaluationRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_evaluation_pb.UpdateEvaluationResponse;
};

type ScorecardsGetEvaluation = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_evaluation_pb.GetEvaluationRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_evaluation_pb.GetEvaluationResponse;
};

type ScorecardsListEvaluations = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_evaluation_pb.ListEvaluationsRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_evaluation_pb.ListEvaluationsResponse;
};

type ScorecardsCreateEvaluationQuestion = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_evaluation_question_pb.CreateEvaluationQuestionRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_evaluation_question_pb.CreateEvaluationQuestionResponse;
};

type ScorecardsUpdateEvaluationQuestion = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_evaluation_question_pb.UpdateEvaluationQuestionRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_evaluation_question_pb.UpdateEvaluationQuestionResponse;
};

type ScorecardsDeleteEvaluationQuestion = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_evaluation_question_pb.DeleteEvaluationQuestionRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_evaluation_question_pb.DeleteEvaluationQuestionResponse;
};

type ScorecardsSampleCallsByCategory = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_category_pb.SampleCallsByCategoryRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_category_pb.SampleCallsByCategoryResponse;
};

type ScorecardsCreateAutoQuestion = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_auto_question_pb.CreateAutoQuestionRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_auto_question_pb.CreateAutoQuestionResponse;
};

type ScorecardsUpdateAutoQuestion = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_auto_question_pb.UpdateAutoQuestionRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_auto_question_pb.UpdateAutoQuestionResponse;
};

type ScorecardsDeleteAutoQuestion = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_auto_question_pb.DeleteAutoQuestionRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_auto_question_pb.DeleteAutoQuestionResponse;
};

type ScorecardsGetAutoQuestion = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_auto_question_pb.GetAutoQuestionRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_auto_question_pb.GetAutoQuestionResponse;
};

type ScorecardsGetAutoEvaluation = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_auto_evaluation_pb.GetAutoEvaluationRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_auto_evaluation_pb.GetAutoEvaluationResponse;
};

type ScorecardsListAutoEvaluations = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_auto_evaluation_pb.ListAutoEvaluationsRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_auto_evaluation_pb.ListAutoEvaluationsResponse;
};

type ScorecardsDeleteAutoEvaluation = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_auto_evaluation_pb.DeleteAutoEvaluationRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_auto_evaluation_pb.DeleteAutoEvaluationResponse;
};

type ScorecardsPreviewEvaluationScore = {
  readonly methodName: string;
  readonly service: typeof Scorecards;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_scorecards_evaluation_pb.PreviewEvaluationScoreRequest;
  readonly responseType: typeof api_v1alpha1_scorecards_evaluation_pb.PreviewEvaluationScoreResponse;
};

export class Scorecards {
  static readonly serviceName: string;
  static readonly CreateScorecard: ScorecardsCreateScorecard;
  static readonly ListScorecards: ScorecardsListScorecards;
  static readonly UpdateScorecard: ScorecardsUpdateScorecard;
  static readonly DeleteScorecard: ScorecardsDeleteScorecard;
  static readonly GetScorecard: ScorecardsGetScorecard;
  static readonly CreateQuestion: ScorecardsCreateQuestion;
  static readonly ListQuestions: ScorecardsListQuestions;
  static readonly UpdateQuestion: ScorecardsUpdateQuestion;
  static readonly DeleteQuestion: ScorecardsDeleteQuestion;
  static readonly GetQuestion: ScorecardsGetQuestion;
  static readonly BulkCreateQuestions: ScorecardsBulkCreateQuestions;
  static readonly CreateCategory: ScorecardsCreateCategory;
  static readonly ListCategories: ScorecardsListCategories;
  static readonly UpdateCategory: ScorecardsUpdateCategory;
  static readonly DeleteCategory: ScorecardsDeleteCategory;
  static readonly GetCategory: ScorecardsGetCategory;
  static readonly CreateScorecardQuestion: ScorecardsCreateScorecardQuestion;
  static readonly UpdateScorecardQuestion: ScorecardsUpdateScorecardQuestion;
  static readonly DeleteScorecardQuestion: ScorecardsDeleteScorecardQuestion;
  static readonly GetScorecardQuestion: ScorecardsGetScorecardQuestion;
  static readonly CreateSection: ScorecardsCreateSection;
  static readonly ListSections: ScorecardsListSections;
  static readonly UpdateSection: ScorecardsUpdateSection;
  static readonly GetSection: ScorecardsGetSection;
  static readonly DeleteSection: ScorecardsDeleteSection;
  static readonly CreateQuestionCategory: ScorecardsCreateQuestionCategory;
  static readonly DeleteQuestionCategory: ScorecardsDeleteQuestionCategory;
  static readonly CreateEvaluation: ScorecardsCreateEvaluation;
  static readonly DeleteEvaluation: ScorecardsDeleteEvaluation;
  static readonly ScoreEvaluation: ScorecardsScoreEvaluation;
  static readonly UpdateEvaluation: ScorecardsUpdateEvaluation;
  static readonly GetEvaluation: ScorecardsGetEvaluation;
  static readonly ListEvaluations: ScorecardsListEvaluations;
  static readonly CreateEvaluationQuestion: ScorecardsCreateEvaluationQuestion;
  static readonly UpdateEvaluationQuestion: ScorecardsUpdateEvaluationQuestion;
  static readonly DeleteEvaluationQuestion: ScorecardsDeleteEvaluationQuestion;
  static readonly SampleCallsByCategory: ScorecardsSampleCallsByCategory;
  static readonly CreateAutoQuestion: ScorecardsCreateAutoQuestion;
  static readonly UpdateAutoQuestion: ScorecardsUpdateAutoQuestion;
  static readonly DeleteAutoQuestion: ScorecardsDeleteAutoQuestion;
  static readonly GetAutoQuestion: ScorecardsGetAutoQuestion;
  static readonly GetAutoEvaluation: ScorecardsGetAutoEvaluation;
  static readonly ListAutoEvaluations: ScorecardsListAutoEvaluations;
  static readonly DeleteAutoEvaluation: ScorecardsDeleteAutoEvaluation;
  static readonly PreviewEvaluationScore: ScorecardsPreviewEvaluationScore;
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

export class ScorecardsClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createScorecard(
    requestMessage: api_v1alpha1_scorecards_scorecard_pb.CreateScorecardRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_scorecard_pb.CreateScorecardResponse|null) => void
  ): UnaryResponse;
  createScorecard(
    requestMessage: api_v1alpha1_scorecards_scorecard_pb.CreateScorecardRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_scorecard_pb.CreateScorecardResponse|null) => void
  ): UnaryResponse;
  listScorecards(
    requestMessage: api_v1alpha1_scorecards_scorecard_pb.ListScorecardsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_scorecard_pb.ListScorecardsResponse|null) => void
  ): UnaryResponse;
  listScorecards(
    requestMessage: api_v1alpha1_scorecards_scorecard_pb.ListScorecardsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_scorecard_pb.ListScorecardsResponse|null) => void
  ): UnaryResponse;
  updateScorecard(
    requestMessage: api_v1alpha1_scorecards_scorecard_pb.UpdateScorecardRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_scorecard_pb.UpdateScorecardResponse|null) => void
  ): UnaryResponse;
  updateScorecard(
    requestMessage: api_v1alpha1_scorecards_scorecard_pb.UpdateScorecardRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_scorecard_pb.UpdateScorecardResponse|null) => void
  ): UnaryResponse;
  deleteScorecard(
    requestMessage: api_v1alpha1_scorecards_scorecard_pb.DeleteScorecardRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_scorecard_pb.DeleteScorecardResponse|null) => void
  ): UnaryResponse;
  deleteScorecard(
    requestMessage: api_v1alpha1_scorecards_scorecard_pb.DeleteScorecardRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_scorecard_pb.DeleteScorecardResponse|null) => void
  ): UnaryResponse;
  getScorecard(
    requestMessage: api_v1alpha1_scorecards_scorecard_pb.GetScorecardRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_scorecard_pb.GetScorecardResponse|null) => void
  ): UnaryResponse;
  getScorecard(
    requestMessage: api_v1alpha1_scorecards_scorecard_pb.GetScorecardRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_scorecard_pb.GetScorecardResponse|null) => void
  ): UnaryResponse;
  createQuestion(
    requestMessage: api_v1alpha1_scorecards_question_pb.CreateQuestionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_question_pb.CreateQuestionResponse|null) => void
  ): UnaryResponse;
  createQuestion(
    requestMessage: api_v1alpha1_scorecards_question_pb.CreateQuestionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_question_pb.CreateQuestionResponse|null) => void
  ): UnaryResponse;
  listQuestions(
    requestMessage: api_v1alpha1_scorecards_question_pb.ListQuestionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_question_pb.ListQuestionsResponse|null) => void
  ): UnaryResponse;
  listQuestions(
    requestMessage: api_v1alpha1_scorecards_question_pb.ListQuestionsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_question_pb.ListQuestionsResponse|null) => void
  ): UnaryResponse;
  updateQuestion(
    requestMessage: api_v1alpha1_scorecards_question_pb.UpdateQuestionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_question_pb.UpdateQuestionResponse|null) => void
  ): UnaryResponse;
  updateQuestion(
    requestMessage: api_v1alpha1_scorecards_question_pb.UpdateQuestionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_question_pb.UpdateQuestionResponse|null) => void
  ): UnaryResponse;
  deleteQuestion(
    requestMessage: api_v1alpha1_scorecards_question_pb.DeleteQuestionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_question_pb.DeleteQuestionResponse|null) => void
  ): UnaryResponse;
  deleteQuestion(
    requestMessage: api_v1alpha1_scorecards_question_pb.DeleteQuestionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_question_pb.DeleteQuestionResponse|null) => void
  ): UnaryResponse;
  getQuestion(
    requestMessage: api_v1alpha1_scorecards_question_pb.GetQuestionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_question_pb.GetQuestionResponse|null) => void
  ): UnaryResponse;
  getQuestion(
    requestMessage: api_v1alpha1_scorecards_question_pb.GetQuestionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_question_pb.GetQuestionResponse|null) => void
  ): UnaryResponse;
  bulkCreateQuestions(
    requestMessage: api_v1alpha1_scorecards_question_pb.BulkCreateQuestionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_question_pb.BulkCreateQuestionsResponse|null) => void
  ): UnaryResponse;
  bulkCreateQuestions(
    requestMessage: api_v1alpha1_scorecards_question_pb.BulkCreateQuestionsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_question_pb.BulkCreateQuestionsResponse|null) => void
  ): UnaryResponse;
  createCategory(
    requestMessage: api_v1alpha1_scorecards_category_pb.CreateCategoryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_category_pb.CreateCategoryResponse|null) => void
  ): UnaryResponse;
  createCategory(
    requestMessage: api_v1alpha1_scorecards_category_pb.CreateCategoryRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_category_pb.CreateCategoryResponse|null) => void
  ): UnaryResponse;
  listCategories(
    requestMessage: api_v1alpha1_scorecards_category_pb.ListCategoriesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_category_pb.ListCategoriesResponse|null) => void
  ): UnaryResponse;
  listCategories(
    requestMessage: api_v1alpha1_scorecards_category_pb.ListCategoriesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_category_pb.ListCategoriesResponse|null) => void
  ): UnaryResponse;
  updateCategory(
    requestMessage: api_v1alpha1_scorecards_category_pb.UpdateCategoryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_category_pb.UpdateCategoryResponse|null) => void
  ): UnaryResponse;
  updateCategory(
    requestMessage: api_v1alpha1_scorecards_category_pb.UpdateCategoryRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_category_pb.UpdateCategoryResponse|null) => void
  ): UnaryResponse;
  deleteCategory(
    requestMessage: api_v1alpha1_scorecards_category_pb.DeleteCategoryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_category_pb.DeleteCategoryResponse|null) => void
  ): UnaryResponse;
  deleteCategory(
    requestMessage: api_v1alpha1_scorecards_category_pb.DeleteCategoryRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_category_pb.DeleteCategoryResponse|null) => void
  ): UnaryResponse;
  getCategory(
    requestMessage: api_v1alpha1_scorecards_category_pb.GetCategoryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_category_pb.GetCategoryResponse|null) => void
  ): UnaryResponse;
  getCategory(
    requestMessage: api_v1alpha1_scorecards_category_pb.GetCategoryRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_category_pb.GetCategoryResponse|null) => void
  ): UnaryResponse;
  createScorecardQuestion(
    requestMessage: api_v1alpha1_scorecards_scorecard_question_pb.CreateScorecardQuestionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_scorecard_question_pb.CreateScorecardQuestionResponse|null) => void
  ): UnaryResponse;
  createScorecardQuestion(
    requestMessage: api_v1alpha1_scorecards_scorecard_question_pb.CreateScorecardQuestionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_scorecard_question_pb.CreateScorecardQuestionResponse|null) => void
  ): UnaryResponse;
  updateScorecardQuestion(
    requestMessage: api_v1alpha1_scorecards_scorecard_question_pb.UpdateScorecardQuestionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_scorecard_question_pb.UpdateScorecardQuestionResponse|null) => void
  ): UnaryResponse;
  updateScorecardQuestion(
    requestMessage: api_v1alpha1_scorecards_scorecard_question_pb.UpdateScorecardQuestionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_scorecard_question_pb.UpdateScorecardQuestionResponse|null) => void
  ): UnaryResponse;
  deleteScorecardQuestion(
    requestMessage: api_v1alpha1_scorecards_scorecard_question_pb.DeleteScorecardQuestionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_scorecard_question_pb.DeleteScorecardQuestionResponse|null) => void
  ): UnaryResponse;
  deleteScorecardQuestion(
    requestMessage: api_v1alpha1_scorecards_scorecard_question_pb.DeleteScorecardQuestionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_scorecard_question_pb.DeleteScorecardQuestionResponse|null) => void
  ): UnaryResponse;
  getScorecardQuestion(
    requestMessage: api_v1alpha1_scorecards_scorecard_question_pb.GetScorecardQuestionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_scorecard_question_pb.GetScorecardQuestionResponse|null) => void
  ): UnaryResponse;
  getScorecardQuestion(
    requestMessage: api_v1alpha1_scorecards_scorecard_question_pb.GetScorecardQuestionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_scorecard_question_pb.GetScorecardQuestionResponse|null) => void
  ): UnaryResponse;
  createSection(
    requestMessage: api_v1alpha1_scorecards_section_pb.CreateSectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_section_pb.CreateSectionResponse|null) => void
  ): UnaryResponse;
  createSection(
    requestMessage: api_v1alpha1_scorecards_section_pb.CreateSectionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_section_pb.CreateSectionResponse|null) => void
  ): UnaryResponse;
  listSections(
    requestMessage: api_v1alpha1_scorecards_section_pb.ListSectionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_section_pb.ListSectionsResponse|null) => void
  ): UnaryResponse;
  listSections(
    requestMessage: api_v1alpha1_scorecards_section_pb.ListSectionsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_section_pb.ListSectionsResponse|null) => void
  ): UnaryResponse;
  updateSection(
    requestMessage: api_v1alpha1_scorecards_section_pb.UpdateSectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_section_pb.UpdateSectionResponse|null) => void
  ): UnaryResponse;
  updateSection(
    requestMessage: api_v1alpha1_scorecards_section_pb.UpdateSectionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_section_pb.UpdateSectionResponse|null) => void
  ): UnaryResponse;
  getSection(
    requestMessage: api_v1alpha1_scorecards_section_pb.GetSectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_section_pb.GetSectionResponse|null) => void
  ): UnaryResponse;
  getSection(
    requestMessage: api_v1alpha1_scorecards_section_pb.GetSectionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_section_pb.GetSectionResponse|null) => void
  ): UnaryResponse;
  deleteSection(
    requestMessage: api_v1alpha1_scorecards_section_pb.DeleteSectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_section_pb.DeleteSectionResponse|null) => void
  ): UnaryResponse;
  deleteSection(
    requestMessage: api_v1alpha1_scorecards_section_pb.DeleteSectionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_section_pb.DeleteSectionResponse|null) => void
  ): UnaryResponse;
  createQuestionCategory(
    requestMessage: api_v1alpha1_scorecards_question_pb.CreateQuestionCategoryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_question_pb.CreateQuestionCategoryResponse|null) => void
  ): UnaryResponse;
  createQuestionCategory(
    requestMessage: api_v1alpha1_scorecards_question_pb.CreateQuestionCategoryRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_question_pb.CreateQuestionCategoryResponse|null) => void
  ): UnaryResponse;
  deleteQuestionCategory(
    requestMessage: api_v1alpha1_scorecards_question_pb.DeleteQuestionCategoryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_question_pb.DeleteQuestionCategoryResponse|null) => void
  ): UnaryResponse;
  deleteQuestionCategory(
    requestMessage: api_v1alpha1_scorecards_question_pb.DeleteQuestionCategoryRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_question_pb.DeleteQuestionCategoryResponse|null) => void
  ): UnaryResponse;
  createEvaluation(
    requestMessage: api_v1alpha1_scorecards_evaluation_pb.CreateEvaluationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_evaluation_pb.CreateEvaluationResponse|null) => void
  ): UnaryResponse;
  createEvaluation(
    requestMessage: api_v1alpha1_scorecards_evaluation_pb.CreateEvaluationRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_evaluation_pb.CreateEvaluationResponse|null) => void
  ): UnaryResponse;
  deleteEvaluation(
    requestMessage: api_v1alpha1_scorecards_evaluation_pb.DeleteEvaluationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_evaluation_pb.DeleteEvaluationResponse|null) => void
  ): UnaryResponse;
  deleteEvaluation(
    requestMessage: api_v1alpha1_scorecards_evaluation_pb.DeleteEvaluationRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_evaluation_pb.DeleteEvaluationResponse|null) => void
  ): UnaryResponse;
  scoreEvaluation(
    requestMessage: api_v1alpha1_scorecards_evaluation_pb.ScoreEvaluationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_evaluation_pb.ScoreEvaluationResponse|null) => void
  ): UnaryResponse;
  scoreEvaluation(
    requestMessage: api_v1alpha1_scorecards_evaluation_pb.ScoreEvaluationRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_evaluation_pb.ScoreEvaluationResponse|null) => void
  ): UnaryResponse;
  updateEvaluation(
    requestMessage: api_v1alpha1_scorecards_evaluation_pb.UpdateEvaluationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_evaluation_pb.UpdateEvaluationResponse|null) => void
  ): UnaryResponse;
  updateEvaluation(
    requestMessage: api_v1alpha1_scorecards_evaluation_pb.UpdateEvaluationRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_evaluation_pb.UpdateEvaluationResponse|null) => void
  ): UnaryResponse;
  getEvaluation(
    requestMessage: api_v1alpha1_scorecards_evaluation_pb.GetEvaluationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_evaluation_pb.GetEvaluationResponse|null) => void
  ): UnaryResponse;
  getEvaluation(
    requestMessage: api_v1alpha1_scorecards_evaluation_pb.GetEvaluationRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_evaluation_pb.GetEvaluationResponse|null) => void
  ): UnaryResponse;
  listEvaluations(
    requestMessage: api_v1alpha1_scorecards_evaluation_pb.ListEvaluationsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_evaluation_pb.ListEvaluationsResponse|null) => void
  ): UnaryResponse;
  listEvaluations(
    requestMessage: api_v1alpha1_scorecards_evaluation_pb.ListEvaluationsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_evaluation_pb.ListEvaluationsResponse|null) => void
  ): UnaryResponse;
  createEvaluationQuestion(
    requestMessage: api_v1alpha1_scorecards_evaluation_question_pb.CreateEvaluationQuestionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_evaluation_question_pb.CreateEvaluationQuestionResponse|null) => void
  ): UnaryResponse;
  createEvaluationQuestion(
    requestMessage: api_v1alpha1_scorecards_evaluation_question_pb.CreateEvaluationQuestionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_evaluation_question_pb.CreateEvaluationQuestionResponse|null) => void
  ): UnaryResponse;
  updateEvaluationQuestion(
    requestMessage: api_v1alpha1_scorecards_evaluation_question_pb.UpdateEvaluationQuestionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_evaluation_question_pb.UpdateEvaluationQuestionResponse|null) => void
  ): UnaryResponse;
  updateEvaluationQuestion(
    requestMessage: api_v1alpha1_scorecards_evaluation_question_pb.UpdateEvaluationQuestionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_evaluation_question_pb.UpdateEvaluationQuestionResponse|null) => void
  ): UnaryResponse;
  deleteEvaluationQuestion(
    requestMessage: api_v1alpha1_scorecards_evaluation_question_pb.DeleteEvaluationQuestionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_evaluation_question_pb.DeleteEvaluationQuestionResponse|null) => void
  ): UnaryResponse;
  deleteEvaluationQuestion(
    requestMessage: api_v1alpha1_scorecards_evaluation_question_pb.DeleteEvaluationQuestionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_evaluation_question_pb.DeleteEvaluationQuestionResponse|null) => void
  ): UnaryResponse;
  sampleCallsByCategory(
    requestMessage: api_v1alpha1_scorecards_category_pb.SampleCallsByCategoryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_category_pb.SampleCallsByCategoryResponse|null) => void
  ): UnaryResponse;
  sampleCallsByCategory(
    requestMessage: api_v1alpha1_scorecards_category_pb.SampleCallsByCategoryRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_category_pb.SampleCallsByCategoryResponse|null) => void
  ): UnaryResponse;
  createAutoQuestion(
    requestMessage: api_v1alpha1_scorecards_auto_question_pb.CreateAutoQuestionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_auto_question_pb.CreateAutoQuestionResponse|null) => void
  ): UnaryResponse;
  createAutoQuestion(
    requestMessage: api_v1alpha1_scorecards_auto_question_pb.CreateAutoQuestionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_auto_question_pb.CreateAutoQuestionResponse|null) => void
  ): UnaryResponse;
  updateAutoQuestion(
    requestMessage: api_v1alpha1_scorecards_auto_question_pb.UpdateAutoQuestionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_auto_question_pb.UpdateAutoQuestionResponse|null) => void
  ): UnaryResponse;
  updateAutoQuestion(
    requestMessage: api_v1alpha1_scorecards_auto_question_pb.UpdateAutoQuestionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_auto_question_pb.UpdateAutoQuestionResponse|null) => void
  ): UnaryResponse;
  deleteAutoQuestion(
    requestMessage: api_v1alpha1_scorecards_auto_question_pb.DeleteAutoQuestionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_auto_question_pb.DeleteAutoQuestionResponse|null) => void
  ): UnaryResponse;
  deleteAutoQuestion(
    requestMessage: api_v1alpha1_scorecards_auto_question_pb.DeleteAutoQuestionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_auto_question_pb.DeleteAutoQuestionResponse|null) => void
  ): UnaryResponse;
  getAutoQuestion(
    requestMessage: api_v1alpha1_scorecards_auto_question_pb.GetAutoQuestionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_auto_question_pb.GetAutoQuestionResponse|null) => void
  ): UnaryResponse;
  getAutoQuestion(
    requestMessage: api_v1alpha1_scorecards_auto_question_pb.GetAutoQuestionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_auto_question_pb.GetAutoQuestionResponse|null) => void
  ): UnaryResponse;
  getAutoEvaluation(
    requestMessage: api_v1alpha1_scorecards_auto_evaluation_pb.GetAutoEvaluationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_auto_evaluation_pb.GetAutoEvaluationResponse|null) => void
  ): UnaryResponse;
  getAutoEvaluation(
    requestMessage: api_v1alpha1_scorecards_auto_evaluation_pb.GetAutoEvaluationRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_auto_evaluation_pb.GetAutoEvaluationResponse|null) => void
  ): UnaryResponse;
  listAutoEvaluations(
    requestMessage: api_v1alpha1_scorecards_auto_evaluation_pb.ListAutoEvaluationsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_auto_evaluation_pb.ListAutoEvaluationsResponse|null) => void
  ): UnaryResponse;
  listAutoEvaluations(
    requestMessage: api_v1alpha1_scorecards_auto_evaluation_pb.ListAutoEvaluationsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_auto_evaluation_pb.ListAutoEvaluationsResponse|null) => void
  ): UnaryResponse;
  deleteAutoEvaluation(
    requestMessage: api_v1alpha1_scorecards_auto_evaluation_pb.DeleteAutoEvaluationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_auto_evaluation_pb.DeleteAutoEvaluationResponse|null) => void
  ): UnaryResponse;
  deleteAutoEvaluation(
    requestMessage: api_v1alpha1_scorecards_auto_evaluation_pb.DeleteAutoEvaluationRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_auto_evaluation_pb.DeleteAutoEvaluationResponse|null) => void
  ): UnaryResponse;
  previewEvaluationScore(
    requestMessage: api_v1alpha1_scorecards_evaluation_pb.PreviewEvaluationScoreRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_evaluation_pb.PreviewEvaluationScoreResponse|null) => void
  ): UnaryResponse;
  previewEvaluationScore(
    requestMessage: api_v1alpha1_scorecards_evaluation_pb.PreviewEvaluationScoreRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_scorecards_evaluation_pb.PreviewEvaluationScoreResponse|null) => void
  ): UnaryResponse;
}

