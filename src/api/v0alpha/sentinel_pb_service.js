// package: api.v0alpha
// file: api/v0alpha/sentinel.proto

var api_v0alpha_sentinel_pb = require("../../api/v0alpha/sentinel_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Sentinel = (function () {
  function Sentinel() {}
  Sentinel.serviceName = "api.v0alpha.Sentinel";
  return Sentinel;
}());

Sentinel.SendEvents = {
  methodName: "SendEvents",
  service: Sentinel,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_sentinel_pb.SendEventsReq,
  responseType: api_v0alpha_sentinel_pb.SendEventsRes
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

