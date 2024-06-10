// package: api.v1alpha1.scorecards
// file: api/v1alpha1/scorecards/support_service.proto

var api_v1alpha1_scorecards_support_service_pb = require("../../../api/v1alpha1/scorecards/support_service_pb");
var api_v1alpha1_scorecards_auto_evaluation_pb = require("../../../api/v1alpha1/scorecards/auto_evaluation_pb");
var api_v1alpha1_scorecards_category_pb = require("../../../api/v1alpha1/scorecards/category_pb");
var api_v1alpha1_scorecards_evaluation_pb = require("../../../api/v1alpha1/scorecards/evaluation_pb");
var api_v1alpha1_scorecards_scorecard_pb = require("../../../api/v1alpha1/scorecards/scorecard_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ScorecardsSupport = (function () {
  function ScorecardsSupport() {}
  ScorecardsSupport.serviceName = "api.v1alpha1.scorecards.ScorecardsSupport";
  return ScorecardsSupport;
}());

ScorecardsSupport.ListEvaluationsByOrgId = {
  methodName: "ListEvaluationsByOrgId",
  service: ScorecardsSupport,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_evaluation_pb.ListEvaluationsByOrgIdRequest,
  responseType: api_v1alpha1_scorecards_evaluation_pb.ListEvaluationsResponse
};

ScorecardsSupport.ListAutoEvaluationsByOrgId = {
  methodName: "ListAutoEvaluationsByOrgId",
  service: ScorecardsSupport,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_auto_evaluation_pb.ListAutoEvaluationsByOrgIdRequest,
  responseType: api_v1alpha1_scorecards_auto_evaluation_pb.ListAutoEvaluationsResponse
};

ScorecardsSupport.BulkDeleteEvaluations = {
  methodName: "BulkDeleteEvaluations",
  service: ScorecardsSupport,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_evaluation_pb.BulkDeleteEvaluationsRequest,
  responseType: api_v1alpha1_scorecards_evaluation_pb.BulkDeleteEvaluationsResponse
};

ScorecardsSupport.BulkDeleteAutoEvaluations = {
  methodName: "BulkDeleteAutoEvaluations",
  service: ScorecardsSupport,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_auto_evaluation_pb.BulkDeleteAutoEvaluationsRequest,
  responseType: api_v1alpha1_scorecards_auto_evaluation_pb.BulkDeleteAutoEvaluationsResponse
};

ScorecardsSupport.DeleteEvaluationByOrgId = {
  methodName: "DeleteEvaluationByOrgId",
  service: ScorecardsSupport,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_evaluation_pb.DeleteEvaluationByOrgIdRequest,
  responseType: api_v1alpha1_scorecards_evaluation_pb.DeleteEvaluationResponse
};

ScorecardsSupport.DeleteAutoEvaluationByOrgId = {
  methodName: "DeleteAutoEvaluationByOrgId",
  service: ScorecardsSupport,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_auto_evaluation_pb.DeleteAutoEvaluationByOrgIdRequest,
  responseType: api_v1alpha1_scorecards_auto_evaluation_pb.DeleteAutoEvaluationResponse
};

ScorecardsSupport.ListScorecardsByOrgId = {
  methodName: "ListScorecardsByOrgId",
  service: ScorecardsSupport,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_scorecard_pb.ListScorecardsByOrgIdRequest,
  responseType: api_v1alpha1_scorecards_scorecard_pb.ListScorecardsResponse
};

ScorecardsSupport.ListCategoriesByOrgId = {
  methodName: "ListCategoriesByOrgId",
  service: ScorecardsSupport,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_scorecards_category_pb.ListCategoriesByOrgIdRequest,
  responseType: api_v1alpha1_scorecards_category_pb.ListCategoriesResponse
};

exports.ScorecardsSupport = ScorecardsSupport;

function ScorecardsSupportClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ScorecardsSupportClient.prototype.listEvaluationsByOrgId = function listEvaluationsByOrgId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScorecardsSupport.ListEvaluationsByOrgId, {
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

ScorecardsSupportClient.prototype.listAutoEvaluationsByOrgId = function listAutoEvaluationsByOrgId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScorecardsSupport.ListAutoEvaluationsByOrgId, {
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

ScorecardsSupportClient.prototype.bulkDeleteEvaluations = function bulkDeleteEvaluations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScorecardsSupport.BulkDeleteEvaluations, {
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

ScorecardsSupportClient.prototype.bulkDeleteAutoEvaluations = function bulkDeleteAutoEvaluations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScorecardsSupport.BulkDeleteAutoEvaluations, {
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

ScorecardsSupportClient.prototype.deleteEvaluationByOrgId = function deleteEvaluationByOrgId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScorecardsSupport.DeleteEvaluationByOrgId, {
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

ScorecardsSupportClient.prototype.deleteAutoEvaluationByOrgId = function deleteAutoEvaluationByOrgId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScorecardsSupport.DeleteAutoEvaluationByOrgId, {
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

ScorecardsSupportClient.prototype.listScorecardsByOrgId = function listScorecardsByOrgId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScorecardsSupport.ListScorecardsByOrgId, {
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

ScorecardsSupportClient.prototype.listCategoriesByOrgId = function listCategoriesByOrgId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScorecardsSupport.ListCategoriesByOrgId, {
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

exports.ScorecardsSupportClient = ScorecardsSupportClient;

