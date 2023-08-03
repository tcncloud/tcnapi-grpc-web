// package: api.v1alpha1.workflows
// file: api/v1alpha1/workflows/service.proto

var api_v1alpha1_workflows_service_pb = require("../../../api/v1alpha1/workflows/service_pb");
var api_v1alpha1_workflows_entities_pb = require("../../../api/v1alpha1/workflows/entities_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Workflows = (function () {
  function Workflows() {}
  Workflows.serviceName = "api.v1alpha1.workflows.Workflows";
  return Workflows;
}());

Workflows.ListFlowDefinitions = {
  methodName: "ListFlowDefinitions",
  service: Workflows,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_workflows_entities_pb.ListFlowDefinitionsRequest,
  responseType: api_v1alpha1_workflows_entities_pb.ListFlowDefinitionsResponse
};

Workflows.SaveFlowDefinition = {
  methodName: "SaveFlowDefinition",
  service: Workflows,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_workflows_entities_pb.SaveFlowDefinitionRequest,
  responseType: api_v1alpha1_workflows_entities_pb.SaveFlowDefinitionResponse
};

Workflows.GetFlowDefinition = {
  methodName: "GetFlowDefinition",
  service: Workflows,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_workflows_entities_pb.GetFlowDefinitionRequest,
  responseType: api_v1alpha1_workflows_entities_pb.GetFlowDefinitionResponse
};

Workflows.DeleteFlowDefinition = {
  methodName: "DeleteFlowDefinition",
  service: Workflows,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_workflows_entities_pb.DeleteFlowDefinitionRequest,
  responseType: api_v1alpha1_workflows_entities_pb.DeleteFlowDefinitionResponse
};

exports.Workflows = Workflows;

function WorkflowsClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

WorkflowsClient.prototype.listFlowDefinitions = function listFlowDefinitions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Workflows.ListFlowDefinitions, {
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

WorkflowsClient.prototype.saveFlowDefinition = function saveFlowDefinition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Workflows.SaveFlowDefinition, {
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

WorkflowsClient.prototype.getFlowDefinition = function getFlowDefinition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Workflows.GetFlowDefinition, {
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

WorkflowsClient.prototype.deleteFlowDefinition = function deleteFlowDefinition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Workflows.DeleteFlowDefinition, {
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

exports.WorkflowsClient = WorkflowsClient;

