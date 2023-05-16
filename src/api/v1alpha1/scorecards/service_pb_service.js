// package: api.v1alpha1.scorecards
// file: api/v1alpha1/scorecards/service.proto

var api_v1alpha1_scorecards_service_pb = require("../../../api/v1alpha1/scorecards/service_pb");
var api_v1alpha1_scorecards_auto_evaluation_pb = require("../../../api/v1alpha1/scorecards/auto_evaluation_pb");
var api_v1alpha1_scorecards_auto_question_pb = require("../../../api/v1alpha1/scorecards/auto_question_pb");
var api_v1alpha1_scorecards_category_pb = require("../../../api/v1alpha1/scorecards/category_pb");
var api_v1alpha1_scorecards_evaluation_pb = require("../../../api/v1alpha1/scorecards/evaluation_pb");
var api_v1alpha1_scorecards_evaluation_question_pb = require("../../../api/v1alpha1/scorecards/evaluation_question_pb");
var api_v1alpha1_scorecards_question_pb = require("../../../api/v1alpha1/scorecards/question_pb");
var api_v1alpha1_scorecards_scorecard_pb = require("../../../api/v1alpha1/scorecards/scorecard_pb");
var api_v1alpha1_scorecards_scorecard_question_pb = require("../../../api/v1alpha1/scorecards/scorecard_question_pb");
var api_v1alpha1_scorecards_section_pb = require("../../../api/v1alpha1/scorecards/section_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Scorecards = (function () {
  function Scorecards() {}
  Scorecards.serviceName = "api.v1alpha1.scorecards.Scorecards";
  return Scorecards;
}());

Scorecards.CreateScorecard = {
  methodName: "CreateScorecard",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_scorecard_pb.CreateScorecardRequest,
  responseType: api_v1alpha1_scorecards_scorecard_pb.CreateScorecardResponse
};

Scorecards.ListScorecards = {
  methodName: "ListScorecards",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_scorecard_pb.ListScorecardsRequest,
  responseType: api_v1alpha1_scorecards_scorecard_pb.ListScorecardsResponse
};

Scorecards.UpdateScorecard = {
  methodName: "UpdateScorecard",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_scorecard_pb.UpdateScorecardRequest,
  responseType: api_v1alpha1_scorecards_scorecard_pb.UpdateScorecardResponse
};

Scorecards.DeleteScorecard = {
  methodName: "DeleteScorecard",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_scorecard_pb.DeleteScorecardRequest,
  responseType: api_v1alpha1_scorecards_scorecard_pb.DeleteScorecardResponse
};

Scorecards.GetScorecard = {
  methodName: "GetScorecard",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_scorecard_pb.GetScorecardRequest,
  responseType: api_v1alpha1_scorecards_scorecard_pb.GetScorecardResponse
};

Scorecards.CreateQuestion = {
  methodName: "CreateQuestion",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_question_pb.CreateQuestionRequest,
  responseType: api_v1alpha1_scorecards_question_pb.CreateQuestionResponse
};

Scorecards.ListQuestions = {
  methodName: "ListQuestions",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_question_pb.ListQuestionsRequest,
  responseType: api_v1alpha1_scorecards_question_pb.ListQuestionsResponse
};

Scorecards.UpdateQuestion = {
  methodName: "UpdateQuestion",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_question_pb.UpdateQuestionRequest,
  responseType: api_v1alpha1_scorecards_question_pb.UpdateQuestionResponse
};

Scorecards.DeleteQuestion = {
  methodName: "DeleteQuestion",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_question_pb.DeleteQuestionRequest,
  responseType: api_v1alpha1_scorecards_question_pb.DeleteQuestionResponse
};

Scorecards.GetQuestion = {
  methodName: "GetQuestion",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_question_pb.GetQuestionRequest,
  responseType: api_v1alpha1_scorecards_question_pb.GetQuestionResponse
};

Scorecards.BulkCreateQuestions = {
  methodName: "BulkCreateQuestions",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_question_pb.BulkCreateQuestionsRequest,
  responseType: api_v1alpha1_scorecards_question_pb.BulkCreateQuestionsResponse
};

Scorecards.CreateCategory = {
  methodName: "CreateCategory",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_category_pb.CreateCategoryRequest,
  responseType: api_v1alpha1_scorecards_category_pb.CreateCategoryResponse
};

Scorecards.ListCategories = {
  methodName: "ListCategories",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_category_pb.ListCategoriesRequest,
  responseType: api_v1alpha1_scorecards_category_pb.ListCategoriesResponse
};

Scorecards.UpdateCategory = {
  methodName: "UpdateCategory",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_category_pb.UpdateCategoryRequest,
  responseType: api_v1alpha1_scorecards_category_pb.UpdateCategoryResponse
};

Scorecards.DeleteCategory = {
  methodName: "DeleteCategory",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_category_pb.DeleteCategoryRequest,
  responseType: api_v1alpha1_scorecards_category_pb.DeleteCategoryResponse
};

Scorecards.GetCategory = {
  methodName: "GetCategory",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_category_pb.GetCategoryRequest,
  responseType: api_v1alpha1_scorecards_category_pb.GetCategoryResponse
};

Scorecards.CreateScorecardQuestion = {
  methodName: "CreateScorecardQuestion",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_scorecard_question_pb.CreateScorecardQuestionRequest,
  responseType: api_v1alpha1_scorecards_scorecard_question_pb.CreateScorecardQuestionResponse
};

Scorecards.UpdateScorecardQuestion = {
  methodName: "UpdateScorecardQuestion",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_scorecard_question_pb.UpdateScorecardQuestionRequest,
  responseType: api_v1alpha1_scorecards_scorecard_question_pb.UpdateScorecardQuestionResponse
};

Scorecards.DeleteScorecardQuestion = {
  methodName: "DeleteScorecardQuestion",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_scorecard_question_pb.DeleteScorecardQuestionRequest,
  responseType: api_v1alpha1_scorecards_scorecard_question_pb.DeleteScorecardQuestionResponse
};

Scorecards.GetScorecardQuestion = {
  methodName: "GetScorecardQuestion",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_scorecard_question_pb.GetScorecardQuestionRequest,
  responseType: api_v1alpha1_scorecards_scorecard_question_pb.GetScorecardQuestionResponse
};

Scorecards.CreateSection = {
  methodName: "CreateSection",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_section_pb.CreateSectionRequest,
  responseType: api_v1alpha1_scorecards_section_pb.CreateSectionResponse
};

Scorecards.ListSections = {
  methodName: "ListSections",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_section_pb.ListSectionsRequest,
  responseType: api_v1alpha1_scorecards_section_pb.ListSectionsResponse
};

Scorecards.UpdateSection = {
  methodName: "UpdateSection",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_section_pb.UpdateSectionRequest,
  responseType: api_v1alpha1_scorecards_section_pb.UpdateSectionResponse
};

Scorecards.GetSection = {
  methodName: "GetSection",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_section_pb.GetSectionRequest,
  responseType: api_v1alpha1_scorecards_section_pb.GetSectionResponse
};

Scorecards.DeleteSection = {
  methodName: "DeleteSection",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_section_pb.DeleteSectionRequest,
  responseType: api_v1alpha1_scorecards_section_pb.DeleteSectionResponse
};

Scorecards.CreateQuestionCategory = {
  methodName: "CreateQuestionCategory",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_question_pb.CreateQuestionCategoryRequest,
  responseType: api_v1alpha1_scorecards_question_pb.CreateQuestionCategoryResponse
};

Scorecards.DeleteQuestionCategory = {
  methodName: "DeleteQuestionCategory",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_question_pb.DeleteQuestionCategoryRequest,
  responseType: api_v1alpha1_scorecards_question_pb.DeleteQuestionCategoryResponse
};

Scorecards.CreateEvaluation = {
  methodName: "CreateEvaluation",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_evaluation_pb.CreateEvaluationRequest,
  responseType: api_v1alpha1_scorecards_evaluation_pb.CreateEvaluationResponse
};

Scorecards.DeleteEvaluation = {
  methodName: "DeleteEvaluation",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_evaluation_pb.DeleteEvaluationRequest,
  responseType: api_v1alpha1_scorecards_evaluation_pb.DeleteEvaluationResponse
};

Scorecards.ScoreEvaluation = {
  methodName: "ScoreEvaluation",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_evaluation_pb.ScoreEvaluationRequest,
  responseType: api_v1alpha1_scorecards_evaluation_pb.ScoreEvaluationResponse
};

Scorecards.GetEvaluation = {
  methodName: "GetEvaluation",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_evaluation_pb.GetEvaluationRequest,
  responseType: api_v1alpha1_scorecards_evaluation_pb.GetEvaluationResponse
};

Scorecards.ListEvaluations = {
  methodName: "ListEvaluations",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_evaluation_pb.ListEvaluationsRequest,
  responseType: api_v1alpha1_scorecards_evaluation_pb.ListEvaluationsResponse
};

Scorecards.CreateEvaluationQuestion = {
  methodName: "CreateEvaluationQuestion",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_evaluation_question_pb.CreateEvaluationQuestionRequest,
  responseType: api_v1alpha1_scorecards_evaluation_question_pb.CreateEvaluationQuestionResponse
};

Scorecards.UpdateEvaluationQuestion = {
  methodName: "UpdateEvaluationQuestion",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_evaluation_question_pb.UpdateEvaluationQuestionRequest,
  responseType: api_v1alpha1_scorecards_evaluation_question_pb.UpdateEvaluationQuestionResponse
};

Scorecards.DeleteEvaluationQuestion = {
  methodName: "DeleteEvaluationQuestion",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_evaluation_question_pb.DeleteEvaluationQuestionRequest,
  responseType: api_v1alpha1_scorecards_evaluation_question_pb.DeleteEvaluationQuestionResponse
};

Scorecards.SampleCallsByCategory = {
  methodName: "SampleCallsByCategory",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_category_pb.SampleCallsByCategoryRequest,
  responseType: api_v1alpha1_scorecards_category_pb.SampleCallsByCategoryResponse
};

Scorecards.CreateAutoQuestion = {
  methodName: "CreateAutoQuestion",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_auto_question_pb.CreateAutoQuestionRequest,
  responseType: api_v1alpha1_scorecards_auto_question_pb.CreateAutoQuestionResponse
};

Scorecards.UpdateAutoQuestion = {
  methodName: "UpdateAutoQuestion",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_auto_question_pb.UpdateAutoQuestionRequest,
  responseType: api_v1alpha1_scorecards_auto_question_pb.UpdateAutoQuestionResponse
};

Scorecards.DeleteAutoQuestion = {
  methodName: "DeleteAutoQuestion",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_auto_question_pb.DeleteAutoQuestionRequest,
  responseType: api_v1alpha1_scorecards_auto_question_pb.DeleteAutoQuestionResponse
};

Scorecards.GetAutoQuestion = {
  methodName: "GetAutoQuestion",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_auto_question_pb.GetAutoQuestionRequest,
  responseType: api_v1alpha1_scorecards_auto_question_pb.GetAutoQuestionResponse
};

Scorecards.GetAutoEvaluation = {
  methodName: "GetAutoEvaluation",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_auto_evaluation_pb.GetAutoEvaluationRequest,
  responseType: api_v1alpha1_scorecards_auto_evaluation_pb.GetAutoEvaluationResponse
};

Scorecards.ListAutoEvaluations = {
  methodName: "ListAutoEvaluations",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_auto_evaluation_pb.ListAutoEvaluationsRequest,
  responseType: api_v1alpha1_scorecards_auto_evaluation_pb.ListAutoEvaluationsResponse
};

Scorecards.DeleteAutoEvaluation = {
  methodName: "DeleteAutoEvaluation",
  service: Scorecards,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_auto_evaluation_pb.DeleteAutoEvaluationRequest,
  responseType: api_v1alpha1_scorecards_auto_evaluation_pb.DeleteAutoEvaluationResponse
};

exports.Scorecards = Scorecards;

function ScorecardsClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ScorecardsClient.prototype.createScorecard = function createScorecard(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.CreateScorecard, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.listScorecards = function listScorecards(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.ListScorecards, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.updateScorecard = function updateScorecard(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.UpdateScorecard, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.deleteScorecard = function deleteScorecard(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.DeleteScorecard, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.getScorecard = function getScorecard(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.GetScorecard, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.createQuestion = function createQuestion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.CreateQuestion, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.listQuestions = function listQuestions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.ListQuestions, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.updateQuestion = function updateQuestion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.UpdateQuestion, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.deleteQuestion = function deleteQuestion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.DeleteQuestion, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.getQuestion = function getQuestion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.GetQuestion, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.bulkCreateQuestions = function bulkCreateQuestions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.BulkCreateQuestions, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.createCategory = function createCategory(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.CreateCategory, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.listCategories = function listCategories(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.ListCategories, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.updateCategory = function updateCategory(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.UpdateCategory, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.deleteCategory = function deleteCategory(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.DeleteCategory, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.getCategory = function getCategory(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.GetCategory, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.createScorecardQuestion = function createScorecardQuestion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.CreateScorecardQuestion, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.updateScorecardQuestion = function updateScorecardQuestion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.UpdateScorecardQuestion, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.deleteScorecardQuestion = function deleteScorecardQuestion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.DeleteScorecardQuestion, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.getScorecardQuestion = function getScorecardQuestion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.GetScorecardQuestion, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.createSection = function createSection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.CreateSection, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.listSections = function listSections(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.ListSections, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.updateSection = function updateSection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.UpdateSection, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.getSection = function getSection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.GetSection, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.deleteSection = function deleteSection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.DeleteSection, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.createQuestionCategory = function createQuestionCategory(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.CreateQuestionCategory, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.deleteQuestionCategory = function deleteQuestionCategory(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.DeleteQuestionCategory, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.createEvaluation = function createEvaluation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.CreateEvaluation, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.deleteEvaluation = function deleteEvaluation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.DeleteEvaluation, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.scoreEvaluation = function scoreEvaluation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.ScoreEvaluation, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.getEvaluation = function getEvaluation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.GetEvaluation, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.listEvaluations = function listEvaluations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.ListEvaluations, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.createEvaluationQuestion = function createEvaluationQuestion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.CreateEvaluationQuestion, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.updateEvaluationQuestion = function updateEvaluationQuestion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.UpdateEvaluationQuestion, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.deleteEvaluationQuestion = function deleteEvaluationQuestion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.DeleteEvaluationQuestion, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.sampleCallsByCategory = function sampleCallsByCategory(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.SampleCallsByCategory, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.createAutoQuestion = function createAutoQuestion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.CreateAutoQuestion, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.updateAutoQuestion = function updateAutoQuestion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.UpdateAutoQuestion, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.deleteAutoQuestion = function deleteAutoQuestion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.DeleteAutoQuestion, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.getAutoQuestion = function getAutoQuestion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.GetAutoQuestion, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.getAutoEvaluation = function getAutoEvaluation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.GetAutoEvaluation, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.listAutoEvaluations = function listAutoEvaluations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.ListAutoEvaluations, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScorecardsClient.prototype.deleteAutoEvaluation = function deleteAutoEvaluation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Scorecards.DeleteAutoEvaluation, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.ScorecardsClient = ScorecardsClient;

