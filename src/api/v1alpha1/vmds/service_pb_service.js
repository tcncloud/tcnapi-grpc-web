// package: api.v1alpha1.vmds
// file: api/v1alpha1/vmds/service.proto

var api_v1alpha1_vmds_service_pb = require("../../../api/v1alpha1/vmds/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var VmdsService = (function () {
  function VmdsService() {}
  VmdsService.serviceName = "api.v1alpha1.vmds.VmdsService";
  return VmdsService;
}());

VmdsService.DownloadSpecifiedMessages = {
  methodName: "DownloadSpecifiedMessages",
  service: VmdsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_vmds_service_pb.DownloadSpecifiedMessagesRequest,
  responseType: api_v1alpha1_vmds_service_pb.DownloadSpecifiedMessagesResponse
};

exports.VmdsService = VmdsService;

function VmdsServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

VmdsServiceClient.prototype.downloadSpecifiedMessages = function downloadSpecifiedMessages(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VmdsService.DownloadSpecifiedMessages, {
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

exports.VmdsServiceClient = VmdsServiceClient;

