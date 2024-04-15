// package: api.v1alpha1.agenttraining
// file: api/v1alpha1/agenttraining/support_service.proto

var api_v1alpha1_agenttraining_support_service_pb = require("../../../api/v1alpha1/agenttraining/support_service_pb");
var api_v1alpha1_agenttraining_learning_opportunity_pb = require("../../../api/v1alpha1/agenttraining/learning_opportunity_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AgentTrainingSupportService = (function () {
  function AgentTrainingSupportService() {}
  AgentTrainingSupportService.serviceName = "api.v1alpha1.agenttraining.AgentTrainingSupportService";
  return AgentTrainingSupportService;
}());

AgentTrainingSupportService.ListLearningOpportunitiesByOrgId = {
  methodName: "ListLearningOpportunitiesByOrgId",
  service: AgentTrainingSupportService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_agenttraining_learning_opportunity_pb.ListLearningOpportunitiesByOrgIdRequest,
  responseType: api_v1alpha1_agenttraining_learning_opportunity_pb.ListLearningOpportunitiesResponse
};

AgentTrainingSupportService.DeleteLearningOpportunityByOrgId = {
  methodName: "DeleteLearningOpportunityByOrgId",
  service: AgentTrainingSupportService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_agenttraining_learning_opportunity_pb.DeleteLearningOpportunityByOrgIdRequest,
  responseType: api_v1alpha1_agenttraining_learning_opportunity_pb.DeleteLearningOpportunityResponse
};

exports.AgentTrainingSupportService = AgentTrainingSupportService;

function AgentTrainingSupportServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AgentTrainingSupportServiceClient.prototype.listLearningOpportunitiesByOrgId = function listLearningOpportunitiesByOrgId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AgentTrainingSupportService.ListLearningOpportunitiesByOrgId, {
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

AgentTrainingSupportServiceClient.prototype.deleteLearningOpportunityByOrgId = function deleteLearningOpportunityByOrgId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AgentTrainingSupportService.DeleteLearningOpportunityByOrgId, {
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

exports.AgentTrainingSupportServiceClient = AgentTrainingSupportServiceClient;

