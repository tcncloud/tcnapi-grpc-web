// package: services.omnichannel.tasks.v1alpha1
// file: services/omnichannel/tasks/v1alpha1/service.proto

var services_omnichannel_tasks_v1alpha1_service_pb = require("../../../../services/omnichannel/tasks/v1alpha1/service_pb");
var services_omnichannel_tasks_v1alpha1_entities_pb = require("../../../../services/omnichannel/tasks/v1alpha1/entities_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var TasksService = (function () {
  function TasksService() {}
  TasksService.serviceName = "services.omnichannel.tasks.v1alpha1.TasksService";
  return TasksService;
}());

TasksService.CancelTasks = {
  methodName: "CancelTasks",
  service: TasksService,
  requestStream: false,
  responseStream: false,
  requestType: services_omnichannel_tasks_v1alpha1_entities_pb.CancelTasksRequest,
  responseType: services_omnichannel_tasks_v1alpha1_entities_pb.CancelTasksResponse
};

TasksService.CancelAllTasks = {
  methodName: "CancelAllTasks",
  service: TasksService,
  requestStream: false,
  responseStream: false,
  requestType: services_omnichannel_tasks_v1alpha1_entities_pb.CancelAllTasksRequest,
  responseType: services_omnichannel_tasks_v1alpha1_entities_pb.CancelAllTasksResponse
};

exports.TasksService = TasksService;

function TasksServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

TasksServiceClient.prototype.cancelTasks = function cancelTasks(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TasksService.CancelTasks, {
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

TasksServiceClient.prototype.cancelAllTasks = function cancelAllTasks(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TasksService.CancelAllTasks, {
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

exports.TasksServiceClient = TasksServiceClient;

