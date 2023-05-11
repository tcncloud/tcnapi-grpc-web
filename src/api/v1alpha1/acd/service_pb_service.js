// package: api.v1alpha1.acd
// file: api/v1alpha1/acd/service.proto

var api_v1alpha1_acd_service_pb = require("../../../api/v1alpha1/acd/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AcdApi = (function () {
  function AcdApi() {}
  AcdApi.serviceName = "api.v1alpha1.acd.AcdApi";
  return AcdApi;
}());

exports.AcdApi = AcdApi;

function AcdApiClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

exports.AcdApiClient = AcdApiClient;

