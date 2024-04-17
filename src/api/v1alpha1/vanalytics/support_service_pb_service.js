// package: api.v1alpha1.vanalytics
// file: api/v1alpha1/vanalytics/support_service.proto

var api_v1alpha1_vanalytics_support_service_pb = require("../../../api/v1alpha1/vanalytics/support_service_pb");
var api_v1alpha1_vanalytics_flag_transcript_pb = require("../../../api/v1alpha1/vanalytics/flag_transcript_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var VanalyticsSupport = (function () {
  function VanalyticsSupport() {}
  VanalyticsSupport.serviceName = "api.v1alpha1.vanalytics.VanalyticsSupport";
  return VanalyticsSupport;
}());

VanalyticsSupport.DeleteFlagTranscript = {
  methodName: "DeleteFlagTranscript",
  service: VanalyticsSupport,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vanalytics_flag_transcript_pb.DeleteFlagTranscriptRequest,
  responseType: api_v1alpha1_vanalytics_flag_transcript_pb.DeleteFlagTranscriptResponse
};

exports.VanalyticsSupport = VanalyticsSupport;

function VanalyticsSupportClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

VanalyticsSupportClient.prototype.deleteFlagTranscript = function deleteFlagTranscript(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VanalyticsSupport.DeleteFlagTranscript, {
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

exports.VanalyticsSupportClient = VanalyticsSupportClient;

