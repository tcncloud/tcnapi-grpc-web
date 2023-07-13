// package: api.v1alpha1.workflows
// file: api/v1alpha1/workflows/service.proto

var api_v1alpha1_workflows_service_pb = require("../../../api/v1alpha1/workflows/service_pb");
var api_v1alpha1_workflows_entities_pb = require("../../../api/v1alpha1/workflows/entities_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var WorkflowsDefinitionService = (function () {
  function WorkflowsDefinitionService() {}
  WorkflowsDefinitionService.serviceName = "api.v1alpha1.workflows.WorkflowsDefinitionService";
  return WorkflowsDefinitionService;
}());

WorkflowsDefinitionService.ListFlowDefinitions = {
  methodName: "ListFlowDefinitions",
  service: WorkflowsDefinitionService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_workflows_entities_pb.ListFlowDefinitionsRequest,
  responseType: api_v1alpha1_workflows_entities_pb.ListFlowDefinitionsResponse
};

WorkflowsDefinitionService.SaveFlowDefinition = {
  methodName: "SaveFlowDefinition",
  service: WorkflowsDefinitionService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_workflows_entities_pb.SaveFlowDefinitionRequest,
  responseType: api_v1alpha1_workflows_entities_pb.SaveFlowDefinitionResponse
};

WorkflowsDefinitionService.GetFlowDefinition = {
  methodName: "GetFlowDefinition",
  service: WorkflowsDefinitionService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_workflows_entities_pb.GetFlowDefinitionRequest,
  responseType: api_v1alpha1_workflows_entities_pb.GetFlowDefinitionResponse
};

WorkflowsDefinitionService.DeleteFlowDefinition = {
  methodName: "DeleteFlowDefinition",
  service: WorkflowsDefinitionService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_workflows_entities_pb.DeleteFlowDefinitionRequest,
  responseType: api_v1alpha1_workflows_entities_pb.DeleteFlowDefinitionResponse
};

exports.WorkflowsDefinitionService = WorkflowsDefinitionService;

function WorkflowsDefinitionServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

WorkflowsDefinitionServiceClient.prototype.listFlowDefinitions = function listFlowDefinitions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WorkflowsDefinitionService.ListFlowDefinitions, {
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

WorkflowsDefinitionServiceClient.prototype.saveFlowDefinition = function saveFlowDefinition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WorkflowsDefinitionService.SaveFlowDefinition, {
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

WorkflowsDefinitionServiceClient.prototype.getFlowDefinition = function getFlowDefinition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WorkflowsDefinitionService.GetFlowDefinition, {
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

WorkflowsDefinitionServiceClient.prototype.deleteFlowDefinition = function deleteFlowDefinition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WorkflowsDefinitionService.DeleteFlowDefinition, {
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

exports.WorkflowsDefinitionServiceClient = WorkflowsDefinitionServiceClient;

