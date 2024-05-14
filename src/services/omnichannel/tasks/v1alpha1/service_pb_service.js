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

TasksService.CancelTask = {
  methodName: "CancelTask",
  service: TasksService,
  requestStream: false,
  responseStream: false,
  requestType: services_omnichannel_tasks_v1alpha1_entities_pb.CancelTaskRequest,
  responseType: services_omnichannel_tasks_v1alpha1_entities_pb.CancelTaskResponse
};

exports.TasksService = TasksService;

function TasksServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

TasksServiceClient.prototype.cancelTask = function cancelTask(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TasksService.CancelTask, {
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

