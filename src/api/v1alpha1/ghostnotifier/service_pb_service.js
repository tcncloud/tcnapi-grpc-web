// package: api.v1alpha1.ghostnotifier
// file: api/v1alpha1/ghostnotifier/service.proto

var api_v1alpha1_ghostnotifier_service_pb = require("../../../api/v1alpha1/ghostnotifier/service_pb");
var api_commons_ghostnotifier_pb = require("../../../api/commons/ghostnotifier_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var GhostNotifierApi = (function () {
  function GhostNotifierApi() {}
  GhostNotifierApi.serviceName = "api.v1alpha1.ghostnotifier.GhostNotifierApi";
  return GhostNotifierApi;
}());

GhostNotifierApi.ListNotifications = {
  methodName: "ListNotifications",
  service: GhostNotifierApi,
  requestStream: false,
  responseStream: true,
  requestType: api_v1alpha1_ghostnotifier_service_pb.ListNotificationsReq,
  responseType: api_commons_ghostnotifier_pb.GhostNotification
};

exports.GhostNotifierApi = GhostNotifierApi;

function GhostNotifierApiClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

GhostNotifierApiClient.prototype.listNotifications = function listNotifications(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(GhostNotifierApi.ListNotifications, {
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

exports.GhostNotifierApiClient = GhostNotifierApiClient;

