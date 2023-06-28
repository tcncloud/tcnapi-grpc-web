// package: api.commons.workflows
// file: api/commons/workflows/service.proto

var api_commons_workflows_service_pb = require("../../../api/commons/workflows/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var WorkflowsDefinitionService = (function () {
  function WorkflowsDefinitionService() {}
  WorkflowsDefinitionService.serviceName = "api.commons.workflows.WorkflowsDefinitionService";
  return WorkflowsDefinitionService;
}());

WorkflowsDefinitionService.SaveFlowDefinition = {
  methodName: "SaveFlowDefinition",
  service: WorkflowsDefinitionService,
  requestStream: false,
  responseStream: false,
  requestType: api_commons_workflows_service_pb.SaveFlowDefinitionRequest,
  responseType: api_commons_workflows_service_pb.SaveFlowDefinitionResponse
};

WorkflowsDefinitionService.GetFlowDefinition = {
  methodName: "GetFlowDefinition",
  service: WorkflowsDefinitionService,
  requestStream: false,
  responseStream: false,
  requestType: api_commons_workflows_service_pb.GetFlowDefinitionRequest,
  responseType: api_commons_workflows_service_pb.GetFlowDefinitionResponse
};

exports.WorkflowsDefinitionService = WorkflowsDefinitionService;

function WorkflowsDefinitionServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

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

exports.WorkflowsDefinitionServiceClient = WorkflowsDefinitionServiceClient;

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

