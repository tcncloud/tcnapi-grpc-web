// package: api.v1alpha1.vanalytics.notifier
// file: api/v1alpha1/vanalytics/notifier/service.proto

var api_v1alpha1_vanalytics_notifier_service_pb = require("../../../../api/v1alpha1/vanalytics/notifier/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Notifier = (function () {
  function Notifier() {}
  Notifier.serviceName = "api.v1alpha1.vanalytics.notifier.Notifier";
  return Notifier;
}());

Notifier.GetNotify = {
  methodName: "GetNotify",
  service: Notifier,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vanalytics_notifier_service_pb.GetNotifyRequest,
  responseType: api_v1alpha1_vanalytics_notifier_service_pb.Notify
};

exports.Notifier = Notifier;

function NotifierClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

NotifierClient.prototype.getNotify = function getNotify(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Notifier.GetNotify, {
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

exports.NotifierClient = NotifierClient;

