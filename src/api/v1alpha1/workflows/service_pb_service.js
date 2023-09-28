// package: api.v1alpha1.workflows
// file: api/v1alpha1/workflows/service.proto

var api_v1alpha1_workflows_service_pb = require("../../../api/v1alpha1/workflows/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var FlowDefinitionPersistService = (function () {
  function FlowDefinitionPersistService() {}
  FlowDefinitionPersistService.serviceName = "api.v1alpha1.workflows.FlowDefinitionPersistService";
  return FlowDefinitionPersistService;
}());

FlowDefinitionPersistService.CreateFlowDefinition = {
  methodName: "CreateFlowDefinition",
  service: FlowDefinitionPersistService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_workflows_service_pb.CreateFlowDefinitionRequest,
  responseType: api_v1alpha1_workflows_service_pb.CreateFlowDefinitionResponse
};

FlowDefinitionPersistService.GetFlowDefinition = {
  methodName: "GetFlowDefinition",
  service: FlowDefinitionPersistService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_workflows_service_pb.GetFlowDefinitionRequest,
  responseType: api_v1alpha1_workflows_service_pb.GetFlowDefinitionResponse
};

FlowDefinitionPersistService.ListFlowDefinitions = {
  methodName: "ListFlowDefinitions",
  service: FlowDefinitionPersistService,
  requestStream: false,
  responseStream: true,
  requestType: api_v1alpha1_workflows_service_pb.ListFlowDefinitionsRequest,
  responseType: api_v1alpha1_workflows_service_pb.ListFlowDefinitionsResponse
};

FlowDefinitionPersistService.UpdateFlowDefinition = {
  methodName: "UpdateFlowDefinition",
  service: FlowDefinitionPersistService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_workflows_service_pb.UpdateFlowDefinitionRequest,
  responseType: api_v1alpha1_workflows_service_pb.UpdateFlowDefinitionResponse
};

FlowDefinitionPersistService.ValidateFlowDefinition = {
  methodName: "ValidateFlowDefinition",
  service: FlowDefinitionPersistService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_workflows_service_pb.ValidateFlowDefinitionRequest,
  responseType: api_v1alpha1_workflows_service_pb.ValidateFlowDefinitionResponse
};

exports.FlowDefinitionPersistService = FlowDefinitionPersistService;

function FlowDefinitionPersistServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

FlowDefinitionPersistServiceClient.prototype.createFlowDefinition = function createFlowDefinition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FlowDefinitionPersistService.CreateFlowDefinition, {
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

FlowDefinitionPersistServiceClient.prototype.getFlowDefinition = function getFlowDefinition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FlowDefinitionPersistService.GetFlowDefinition, {
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

FlowDefinitionPersistServiceClient.prototype.listFlowDefinitions = function listFlowDefinitions(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(FlowDefinitionPersistService.ListFlowDefinitions, {
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

FlowDefinitionPersistServiceClient.prototype.updateFlowDefinition = function updateFlowDefinition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FlowDefinitionPersistService.UpdateFlowDefinition, {
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

FlowDefinitionPersistServiceClient.prototype.validateFlowDefinition = function validateFlowDefinition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FlowDefinitionPersistService.ValidateFlowDefinition, {
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

exports.FlowDefinitionPersistServiceClient = FlowDefinitionPersistServiceClient;

