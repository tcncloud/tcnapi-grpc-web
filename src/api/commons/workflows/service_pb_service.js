// package: api.commons.workflows
// file: api/commons/workflows/service.proto

var api_commons_workflows_service_pb = require("../../../api/commons/workflows/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var WorkflowsDefinitionsService = (function () {
  function WorkflowsDefinitionsService() {}
  WorkflowsDefinitionsService.serviceName = "api.commons.workflows.WorkflowsDefinitionsService";
  return WorkflowsDefinitionsService;
}());

WorkflowsDefinitionsService.SaveFlowDefinition = {
  methodName: "SaveFlowDefinition",
  service: WorkflowsDefinitionsService,
  requestStream: false,
  responseStream: false,
  requestType: api_commons_workflows_service_pb.SaveFlowDefinitionRequest,
  responseType: api_commons_workflows_service_pb.SaveFlowDefinitionResponse
};

WorkflowsDefinitionsService.GetFlowDefinition = {
  methodName: "GetFlowDefinition",
  service: WorkflowsDefinitionsService,
  requestStream: false,
  responseStream: false,
  requestType: api_commons_workflows_service_pb.GetFlowDefinitionRequest,
  responseType: api_commons_workflows_service_pb.GetFlowDefinitionResponse
};

exports.WorkflowsDefinitionsService = WorkflowsDefinitionsService;

function WorkflowsDefinitionsServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

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

exports.WorkflowsDefinitionsServiceClient = WorkflowsDefinitionsServiceClient;

var WorkflowsStateService = (function () {
  function WorkflowsStateService() {}
  WorkflowsStateService.serviceName = "api.commons.workflows.WorkflowsStateService";
  return WorkflowsStateService;
}());

WorkflowsStateService.SaveFlowState = {
  methodName: "SaveFlowState",
  service: WorkflowsStateService,
  requestStream: false,
  responseStream: false,
  requestType: api_commons_workflows_service_pb.SaveFlowStateRequest,
  responseType: api_commons_workflows_service_pb.SaveFlowStateResponse
};

WorkflowsStateService.GetFlowState = {
  methodName: "GetFlowState",
  service: WorkflowsStateService,
  requestStream: false,
  responseStream: false,
  requestType: api_commons_workflows_service_pb.GetFlowStateRequest,
  responseType: api_commons_workflows_service_pb.GetFlowStateResponse
};

exports.WorkflowsStateService = WorkflowsStateService;

function WorkflowsStateServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

WorkflowsStateServiceClient.prototype.saveFlowState = function saveFlowState(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WorkflowsStateService.SaveFlowState, {
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

WorkflowsStateServiceClient.prototype.getFlowState = function getFlowState(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WorkflowsStateService.GetFlowState, {
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

exports.WorkflowsStateServiceClient = WorkflowsStateServiceClient;

