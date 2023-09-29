// package: api.v1alpha1.workflows
// file: api/v1alpha1/workflows/service.proto

var api_v1alpha1_workflows_service_pb = require("../../../api/v1alpha1/workflows/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var WorkflowDefinitionPersistService = (function () {
  function WorkflowDefinitionPersistService() {}
  WorkflowDefinitionPersistService.serviceName = "api.v1alpha1.workflows.WorkflowDefinitionPersistService";
  return WorkflowDefinitionPersistService;
}());

WorkflowDefinitionPersistService.CreateWorkflowDefinition = {
  methodName: "CreateWorkflowDefinition",
  service: WorkflowDefinitionPersistService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_workflows_service_pb.CreateWorkflowDefinitionRequest,
  responseType: api_v1alpha1_workflows_service_pb.CreateWorkflowDefinitionResponse
};

WorkflowDefinitionPersistService.GetWorkflowDefinition = {
  methodName: "GetWorkflowDefinition",
  service: WorkflowDefinitionPersistService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_workflows_service_pb.GetWorkflowDefinitionRequest,
  responseType: api_v1alpha1_workflows_service_pb.GetWorkflowDefinitionResponse
};

WorkflowDefinitionPersistService.ListWorkflowDefinitions = {
  methodName: "ListWorkflowDefinitions",
  service: WorkflowDefinitionPersistService,
  requestStream: false,
  responseStream: true,
  requestType: api_v1alpha1_workflows_service_pb.ListWorkflowDefinitionsRequest,
  responseType: api_v1alpha1_workflows_service_pb.ListWorkflowDefinitionsResponse
};

WorkflowDefinitionPersistService.UpdateWorkflowDefinition = {
  methodName: "UpdateWorkflowDefinition",
  service: WorkflowDefinitionPersistService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_workflows_service_pb.UpdateWorkflowDefinitionRequest,
  responseType: api_v1alpha1_workflows_service_pb.UpdateWorkflowDefinitionResponse
};

WorkflowDefinitionPersistService.ValidateWorkflowDefinition = {
  methodName: "ValidateWorkflowDefinition",
  service: WorkflowDefinitionPersistService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_workflows_service_pb.ValidateWorkflowDefinitionRequest,
  responseType: api_v1alpha1_workflows_service_pb.ValidateWorkflowDefinitionResponse
};

exports.WorkflowDefinitionPersistService = WorkflowDefinitionPersistService;

function WorkflowDefinitionPersistServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

WorkflowDefinitionPersistServiceClient.prototype.createWorkflowDefinition = function createWorkflowDefinition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WorkflowDefinitionPersistService.CreateWorkflowDefinition, {
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

WorkflowDefinitionPersistServiceClient.prototype.getWorkflowDefinition = function getWorkflowDefinition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WorkflowDefinitionPersistService.GetWorkflowDefinition, {
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

WorkflowDefinitionPersistServiceClient.prototype.listWorkflowDefinitions = function listWorkflowDefinitions(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(WorkflowDefinitionPersistService.ListWorkflowDefinitions, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

WorkflowDefinitionPersistServiceClient.prototype.updateWorkflowDefinition = function updateWorkflowDefinition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WorkflowDefinitionPersistService.UpdateWorkflowDefinition, {
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

WorkflowDefinitionPersistServiceClient.prototype.validateWorkflowDefinition = function validateWorkflowDefinition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WorkflowDefinitionPersistService.ValidateWorkflowDefinition, {
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

exports.WorkflowDefinitionPersistServiceClient = WorkflowDefinitionPersistServiceClient;

