// package: api.v1alpha1.agentsmith
// file: api/v1alpha1/agentsmith/service.proto

var api_v1alpha1_agentsmith_service_pb = require("../../../api/v1alpha1/agentsmith/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AgentSmith = (function () {
  function AgentSmith() {}
  AgentSmith.serviceName = "api.v1alpha1.agentsmith.AgentSmith";
  return AgentSmith;
}());

AgentSmith.FollowAgent = {
  methodName: "FollowAgent",
  service: AgentSmith,
  requestStream: false,
  responseStream: true,
  requestType: api_v1alpha1_agentsmith_service_pb.FollowAgentReq,
  responseType: api_v1alpha1_agentsmith_service_pb.FollowAgentRes
};

exports.AgentSmith = AgentSmith;

function AgentSmithClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AgentSmithClient.prototype.followAgent = function followAgent(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(AgentSmith.FollowAgent, {
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

exports.AgentSmithClient = AgentSmithClient;

