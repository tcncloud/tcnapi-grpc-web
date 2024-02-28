// package: api.v1alpha1.wfm
// file: api/v1alpha1/wfm/wfm_adherence_app.proto

var api_v1alpha1_wfm_wfm_adherence_app_pb = require("../../../api/v1alpha1/wfm/wfm_adherence_app_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var WfmAdherenceAppService = (function () {
  function WfmAdherenceAppService() {}
  WfmAdherenceAppService.serviceName = "api.v1alpha1.wfm.WfmAdherenceAppService";
  return WfmAdherenceAppService;
}());

WfmAdherenceAppService.HelloWorldWFMAdherence = {
  methodName: "HelloWorldWFMAdherence",
  service: WfmAdherenceAppService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_wfm_wfm_adherence_app_pb.HelloWorldWFMAdherenceRequest,
  responseType: api_v1alpha1_wfm_wfm_adherence_app_pb.HelloWorldWFMAdherenceResponse
};

exports.WfmAdherenceAppService = WfmAdherenceAppService;

function WfmAdherenceAppServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

WfmAdherenceAppServiceClient.prototype.helloWorldWFMAdherence = function helloWorldWFMAdherence(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WfmAdherenceAppService.HelloWorldWFMAdherence, {
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

exports.WfmAdherenceAppServiceClient = WfmAdherenceAppServiceClient;

