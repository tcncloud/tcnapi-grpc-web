// package: api.v1alpha1.org.users
// file: api/v1alpha1/org/users/service.proto

var api_v1alpha1_org_users_service_pb = require("../../../../api/v1alpha1/org/users/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var UsersService = (function () {
  function UsersService() {}
  UsersService.serviceName = "api.v1alpha1.org.users.UsersService";
  return UsersService;
}());

exports.UsersService = UsersService;

function UsersServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

exports.UsersServiceClient = UsersServiceClient;

