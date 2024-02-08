// package: api.v1alpha1.wfm
// file: api/v1alpha1/wfm/wfm_adherence_app.proto

var api_v1alpha1_wfm_wfm_adherence_app_pb = require("../../../api/v1alpha1/wfm/wfm_adherence_app_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var WfmAdherenceAppService = (function () {
  function WfmAdherenceAppService() {}
  WfmAdherenceAppService.serviceName = "api.v1alpha1.wfm.WfmAdherenceAppService";
  return WfmAdherenceAppService;
}());

exports.WfmAdherenceAppService = WfmAdherenceAppService;

function WfmAdherenceAppServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

exports.WfmAdherenceAppServiceClient = WfmAdherenceAppServiceClient;

