// package: api.v1alpha1.cfg
// file: api/v1alpha1/cfg/service.proto

var api_v1alpha1_cfg_service_pb = require("../../../api/v1alpha1/cfg/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Cfg = (function () {
  function Cfg() {}
  Cfg.serviceName = "api.v1alpha1.cfg.Cfg";
  return Cfg;
}());

Cfg.GetWebAgentConfig = {
  methodName: "GetWebAgentConfig",
  service: Cfg,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_cfg_service_pb.GetWebAgentConfigReq,
  responseType: api_v1alpha1_cfg_service_pb.WebAgent
};

exports.Cfg = Cfg;

function CfgClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CfgClient.prototype.getWebAgentConfig = function getWebAgentConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Cfg.GetWebAgentConfig, {
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

exports.CfgClient = CfgClient;

