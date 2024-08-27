// package: services.org.users.v1alpha1
// file: services/org/users/v1alpha1/service.proto

var services_org_users_v1alpha1_service_pb = require("../../../../services/org/users/v1alpha1/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var UsersService = (function () {
  function UsersService() {}
  UsersService.serviceName = "services.org.users.v1alpha1.UsersService";
  return UsersService;
}());

exports.UsersService = UsersService;

function UsersServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

exports.UsersServiceClient = UsersServiceClient;

