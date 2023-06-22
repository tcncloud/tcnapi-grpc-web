// package: api.v1alpha1.workflows
// file: api/v1alpha1/workflows/service.proto

var api_v1alpha1_workflows_service_pb = require("../../../api/v1alpha1/workflows/service_pb");
var api_v1alpha1_workflows_entities_pb = require("../../../api/v1alpha1/workflows/entities_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var WorkflowsDefinitionsService = (function () {
  function WorkflowsDefinitionsService() {}
  WorkflowsDefinitionsService.serviceName = "api.v1alpha1.workflows.WorkflowsDefinitionsService";
  return WorkflowsDefinitionsService;
}());

WorkflowsDefinitionsService.ListFlowDefinitions = {
  methodName: "ListFlowDefinitions",
  service: WorkflowsDefinitionsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_workflows_entities_pb.ListFlowDefinitionsRequest,
  responseType: api_v1alpha1_workflows_entities_pb.ListFlowDefinitionsResponse
};

WorkflowsDefinitionsService.SaveFlowDefinition = {
  methodName: "SaveFlowDefinition",
  service: WorkflowsDefinitionsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_workflows_entities_pb.SaveFlowDefinitionRequest,
  responseType: api_v1alpha1_workflows_entities_pb.SaveFlowDefinitionResponse
};

WorkflowsDefinitionsService.GetFlowDefinition = {
  methodName: "GetFlowDefinition",
  service: WorkflowsDefinitionsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_workflows_entities_pb.GetFlowDefinitionRequest,
  responseType: api_v1alpha1_workflows_entities_pb.GetFlowDefinitionResponse
};

WorkflowsDefinitionsService.DeleteFlowDefinition = {
  methodName: "DeleteFlowDefinition",
  service: WorkflowsDefinitionsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_workflows_entities_pb.DeleteFlowDefinitionRequest,
  responseType: api_v1alpha1_workflows_entities_pb.DeleteFlowDefinitionResponse
};

exports.WorkflowsDefinitionsService = WorkflowsDefinitionsService;

function WorkflowsDefinitionsServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

WorkflowsDefinitionsServiceClient.prototype.listFlowDefinitions = function listFlowDefinitions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WorkflowsDefinitionsService.ListFlowDefinitions, {
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

WorkflowsDefinitionsServiceClient.prototype.saveFlowDefinition = function saveFlowDefinition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WorkflowsDefinitionsService.SaveFlowDefinition, {
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

WorkflowsDefinitionsServiceClient.prototype.getFlowDefinition = function getFlowDefinition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WorkflowsDefinitionsService.GetFlowDefinition, {
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

WorkflowsDefinitionsServiceClient.prototype.deleteFlowDefinition = function deleteFlowDefinition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WorkflowsDefinitionsService.DeleteFlowDefinition, {
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

exports.WorkflowsDefinitionsServiceClient = WorkflowsDefinitionsServiceClient;

