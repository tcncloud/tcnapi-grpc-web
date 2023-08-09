// package: api.v1alpha1.newsroom
// file: api/v1alpha1/newsroom/service.proto

var api_v1alpha1_newsroom_service_pb = require("../../../api/v1alpha1/newsroom/service_pb");
var api_v1alpha1_newsroom_entities_pb = require("../../../api/v1alpha1/newsroom/entities_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var NewsroomAPI = (function () {
  function NewsroomAPI() {}
  NewsroomAPI.serviceName = "api.v1alpha1.newsroom.NewsroomAPI";
  return NewsroomAPI;
}());

NewsroomAPI.Ping = {
  methodName: "Ping",
  service: NewsroomAPI,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_newsroom_entities_pb.PingReq,
  responseType: api_v1alpha1_newsroom_entities_pb.PingRes
};

exports.NewsroomAPI = NewsroomAPI;

function NewsroomAPIClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

NewsroomAPIClient.prototype.ping = function ping(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NewsroomAPI.Ping, {
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

exports.NewsroomAPIClient = NewsroomAPIClient;

