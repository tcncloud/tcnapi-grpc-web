// package: api.v1alpha1.idp
// file: api/v1alpha1/idp/service.proto

var api_v1alpha1_idp_service_pb = require("../../../api/v1alpha1/idp/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var IdentityProvider = (function () {
  function IdentityProvider() {}
  IdentityProvider.serviceName = "api.v1alpha1.idp.IdentityProvider";
  return IdentityProvider;
}());

exports.IdentityProvider = IdentityProvider;

function IdentityProviderClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

exports.IdentityProviderClient = IdentityProviderClient;

