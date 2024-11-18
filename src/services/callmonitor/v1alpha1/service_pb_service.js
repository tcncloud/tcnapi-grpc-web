// package: services.callmonitor.v1alpha1
// file: services/callmonitor/v1alpha1/service.proto

var services_callmonitor_v1alpha1_service_pb = require("../../../services/callmonitor/v1alpha1/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var CallMonitorService = (function () {
  function CallMonitorService() {}
  CallMonitorService.serviceName = "services.callmonitor.v1alpha1.CallMonitorService";
  return CallMonitorService;
}());

CallMonitorService.GetHoldQueueStats = {
  methodName: "GetHoldQueueStats",
  service: CallMonitorService,
  requestStream: false,
  responseStream: false,
  requestType: services_callmonitor_v1alpha1_service_pb.GetHoldQueueStatsRequest,
  responseType: services_callmonitor_v1alpha1_service_pb.GetHoldQueueStatsResponse
};

exports.CallMonitorService = CallMonitorService;

function CallMonitorServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CallMonitorServiceClient.prototype.getHoldQueueStats = function getHoldQueueStats(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CallMonitorService.GetHoldQueueStats, {
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

exports.CallMonitorServiceClient = CallMonitorServiceClient;

