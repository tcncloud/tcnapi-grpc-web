// package: api.v0alpha
// file: api/v0alpha/fts.proto

var api_v0alpha_fts_pb = require("../../api/v0alpha/fts_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var FTS = (function () {
  function FTS() {}
  FTS.serviceName = "api.v0alpha.FTS";
  return FTS;
}());

FTS.GetUploadFileUrl = {
  methodName: "GetUploadFileUrl",
  service: FTS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_fts_pb.GetUploadFileUrlReq,
  responseType: api_v0alpha_fts_pb.GetUploadFileUrlRes
};

exports.FTS = FTS;

function FTSClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

FTSClient.prototype.getUploadFileUrl = function getUploadFileUrl(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FTS.GetUploadFileUrl, {
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

exports.FTSClient = FTSClient;

