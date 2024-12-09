// package: services.omnichannel.instant.v1alpha1
// file: services/omnichannel/instant/v1alpha1/service.proto

var services_omnichannel_instant_v1alpha1_service_pb = require("../../../../services/omnichannel/instant/v1alpha1/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var OauthService = (function () {
  function OauthService() {}
  OauthService.serviceName = "services.omnichannel.instant.v1alpha1.OauthService";
  return OauthService;
}());

OauthService.StreamContactCenterSnapshot = {
  methodName: "StreamContactCenterSnapshot",
  service: OauthService,
  requestStream: false,
  responseStream: true,
  requestType: services_omnichannel_instant_v1alpha1_service_pb.StreamContactCenterSnapshotRequest,
  responseType: services_omnichannel_instant_v1alpha1_service_pb.StreamContactCenterSnapshotResponse
};

exports.OauthService = OauthService;

function OauthServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

OauthServiceClient.prototype.streamContactCenterSnapshot = function streamContactCenterSnapshot(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(OauthService.StreamContactCenterSnapshot, {
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

exports.OauthServiceClient = OauthServiceClient;

