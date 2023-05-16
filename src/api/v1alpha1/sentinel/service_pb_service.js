// package: api.v1alpha1.sentinel
// file: api/v1alpha1/sentinel/service.proto

var api_v1alpha1_sentinel_service_pb = require("../../../api/v1alpha1/sentinel/service_pb");
var api_v1alpha1_sentinel_entities_pb = require("../../../api/v1alpha1/sentinel/entities_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Sentinel = (function () {
  function Sentinel() {}
  Sentinel.serviceName = "api.v1alpha1.sentinel.Sentinel";
  return Sentinel;
}());

Sentinel.SendEvents = {
  methodName: "SendEvents",
  service: Sentinel,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_sentinel_entities_pb.SendEventsReq,
  responseType: api_v1alpha1_sentinel_entities_pb.SendEventsRes
};

exports.Sentinel = Sentinel;

function SentinelClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

SentinelClient.prototype.sendEvents = function sendEvents(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Sentinel.SendEvents, {
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

exports.SentinelClient = SentinelClient;

