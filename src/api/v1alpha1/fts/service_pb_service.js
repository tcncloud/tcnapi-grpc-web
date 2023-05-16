// package: api.v1alpha1.fts
// file: api/v1alpha1/fts/service.proto

var api_v1alpha1_fts_service_pb = require("../../../api/v1alpha1/fts/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var FtsApi = (function () {
  function FtsApi() {}
  FtsApi.serviceName = "api.v1alpha1.fts.FtsApi";
  return FtsApi;
}());

FtsApi.GetUploadFileUrl = {
  methodName: "GetUploadFileUrl",
  service: FtsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_fts_service_pb.GetUploadFileUrlReq,
  responseType: api_v1alpha1_fts_service_pb.GetUploadFileUrlRes
};

exports.FtsApi = FtsApi;

function FtsApiClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

FtsApiClient.prototype.getUploadFileUrl = function getUploadFileUrl(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FtsApi.GetUploadFileUrl, {
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

exports.FtsApiClient = FtsApiClient;

