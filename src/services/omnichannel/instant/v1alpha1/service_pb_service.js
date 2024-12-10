// package: services.omnichannel.instant.v1alpha1
// file: services/omnichannel/instant/v1alpha1/service.proto

var services_omnichannel_instant_v1alpha1_service_pb = require("../../../../services/omnichannel/instant/v1alpha1/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var InstantDataService = (function () {
  function InstantDataService() {}
  InstantDataService.serviceName = "services.omnichannel.instant.v1alpha1.InstantDataService";
  return InstantDataService;
}());

InstantDataService.StreamAgentEvents = {
  methodName: "StreamAgentEvents",
  service: InstantDataService,
  requestStream: false,
  responseStream: true,
  requestType: services_omnichannel_instant_v1alpha1_service_pb.StreamAgentEventsRequest,
  responseType: services_omnichannel_instant_v1alpha1_service_pb.StreamAgentEventsResponse
};

InstantDataService.StreamCallerEvents = {
  methodName: "StreamCallerEvents",
  service: InstantDataService,
  requestStream: false,
  responseStream: true,
  requestType: services_omnichannel_instant_v1alpha1_service_pb.StreamCallerEventsRequest,
  responseType: services_omnichannel_instant_v1alpha1_service_pb.StreamCallerEventsResponse
};

exports.InstantDataService = InstantDataService;

function InstantDataServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

InstantDataServiceClient.prototype.streamAgentEvents = function streamAgentEvents(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(InstantDataService.StreamAgentEvents, {
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

InstantDataServiceClient.prototype.streamCallerEvents = function streamCallerEvents(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(InstantDataService.StreamCallerEvents, {
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

exports.InstantDataServiceClient = InstantDataServiceClient;

