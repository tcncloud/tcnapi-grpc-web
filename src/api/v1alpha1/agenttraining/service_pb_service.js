// package: api.v1alpha1.agenttraining
// file: api/v1alpha1/agenttraining/service.proto

var api_v1alpha1_agenttraining_service_pb = require("../../../api/v1alpha1/agenttraining/service_pb");
var api_v1alpha1_agenttraining_learning_opportunity_pb = require("../../../api/v1alpha1/agenttraining/learning_opportunity_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AgentTrainingService = (function () {
  function AgentTrainingService() {}
  AgentTrainingService.serviceName = "api.v1alpha1.agenttraining.AgentTrainingService";
  return AgentTrainingService;
}());

AgentTrainingService.CreateLearningOpportunity = {
  methodName: "CreateLearningOpportunity",
  service: AgentTrainingService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_agenttraining_learning_opportunity_pb.CreateLearningOpportunityRequest,
  responseType: api_v1alpha1_agenttraining_learning_opportunity_pb.CreateLearningOpportunityResponse
};

AgentTrainingService.ListLearningOpportunities = {
  methodName: "ListLearningOpportunities",
  service: AgentTrainingService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_agenttraining_learning_opportunity_pb.ListLearningOpportunitiesRequest,
  responseType: api_v1alpha1_agenttraining_learning_opportunity_pb.ListLearningOpportunitiesResponse
};

AgentTrainingService.ListAgentLearningOpportunities = {
  methodName: "ListAgentLearningOpportunities",
  service: AgentTrainingService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_agenttraining_learning_opportunity_pb.ListAgentLearningOpportunitiesRequest,
  responseType: api_v1alpha1_agenttraining_learning_opportunity_pb.ListAgentLearningOpportunitiesResponse
};

AgentTrainingService.CompleteAgentLearningOpportunity = {
  methodName: "CompleteAgentLearningOpportunity",
  service: AgentTrainingService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_agenttraining_learning_opportunity_pb.CompleteAgentLearningOpportunityRequest,
  responseType: api_v1alpha1_agenttraining_learning_opportunity_pb.CompleteAgentLearningOpportunityResponse
};

AgentTrainingService.UpdateLearningOpportunity = {
  methodName: "UpdateLearningOpportunity",
  service: AgentTrainingService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_agenttraining_learning_opportunity_pb.UpdateLearningOpportunityRequest,
  responseType: api_v1alpha1_agenttraining_learning_opportunity_pb.UpdateLearningOpportunityResponse
};

AgentTrainingService.DeleteLearningOpportunity = {
  methodName: "DeleteLearningOpportunity",
  service: AgentTrainingService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_agenttraining_learning_opportunity_pb.DeleteLearningOpportunityRequest,
  responseType: api_v1alpha1_agenttraining_learning_opportunity_pb.DeleteLearningOpportunityResponse
};

AgentTrainingService.GetLearningOpportunity = {
  methodName: "GetLearningOpportunity",
  service: AgentTrainingService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_agenttraining_learning_opportunity_pb.GetLearningOpportunityRequest,
  responseType: api_v1alpha1_agenttraining_learning_opportunity_pb.GetLearningOpportunityResponse
};

exports.AgentTrainingService = AgentTrainingService;

function AgentTrainingServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AgentTrainingServiceClient.prototype.createLearningOpportunity = function createLearningOpportunity(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AgentTrainingService.CreateLearningOpportunity, {
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

AgentTrainingServiceClient.prototype.listLearningOpportunities = function listLearningOpportunities(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AgentTrainingService.ListLearningOpportunities, {
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

AgentTrainingServiceClient.prototype.listAgentLearningOpportunities = function listAgentLearningOpportunities(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AgentTrainingService.ListAgentLearningOpportunities, {
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

AgentTrainingServiceClient.prototype.completeAgentLearningOpportunity = function completeAgentLearningOpportunity(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AgentTrainingService.CompleteAgentLearningOpportunity, {
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

AgentTrainingServiceClient.prototype.updateLearningOpportunity = function updateLearningOpportunity(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AgentTrainingService.UpdateLearningOpportunity, {
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

AgentTrainingServiceClient.prototype.deleteLearningOpportunity = function deleteLearningOpportunity(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AgentTrainingService.DeleteLearningOpportunity, {
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

AgentTrainingServiceClient.prototype.getLearningOpportunity = function getLearningOpportunity(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AgentTrainingService.GetLearningOpportunity, {
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

exports.AgentTrainingServiceClient = AgentTrainingServiceClient;

