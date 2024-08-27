// package: services.org.users.v1alpha1
// file: services/org/users/v1alpha1/service.proto

var services_org_users_v1alpha1_service_pb = require("../../../../services/org/users/v1alpha1/service_pb");
var services_org_users_v1alpha1_preferences_pb = require("../../../../services/org/users/v1alpha1/preferences_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var UsersService = (function () {
  function UsersService() {}
  UsersService.serviceName = "services.org.users.v1alpha1.UsersService";
  return UsersService;
}());

UsersService.GetUserLocalePreferencesOverride = {
  methodName: "GetUserLocalePreferencesOverride",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_users_v1alpha1_preferences_pb.GetUserLocalePreferencesOverrideRequest,
  responseType: services_org_users_v1alpha1_preferences_pb.GetUserLocalePreferencesOverrideResponse
};

UsersService.UpdateUserLocalePreferencesOverride = {
  methodName: "UpdateUserLocalePreferencesOverride",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_users_v1alpha1_preferences_pb.UpdateUserLocalePreferencesOverrideRequest,
  responseType: services_org_users_v1alpha1_preferences_pb.UpdateUserLocalePreferencesOverrideResponse
};

UsersService.GetMyUserLocalePreferencesOverride = {
  methodName: "GetMyUserLocalePreferencesOverride",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_users_v1alpha1_preferences_pb.GetMyUserLocalePreferencesOverrideRequest,
  responseType: services_org_users_v1alpha1_preferences_pb.GetMyUserLocalePreferencesOverrideResponse
};

UsersService.UpdateMyUserLocalePreferencesOverride = {
  methodName: "UpdateMyUserLocalePreferencesOverride",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_users_v1alpha1_preferences_pb.UpdateMyUserLocalePreferencesOverrideRequest,
  responseType: services_org_users_v1alpha1_preferences_pb.UpdateMyUserLocalePreferencesOverrideResponse
};

exports.UsersService = UsersService;

function UsersServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

UsersServiceClient.prototype.getUserLocalePreferencesOverride = function getUserLocalePreferencesOverride(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.GetUserLocalePreferencesOverride, {
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

UsersServiceClient.prototype.updateUserLocalePreferencesOverride = function updateUserLocalePreferencesOverride(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.UpdateUserLocalePreferencesOverride, {
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

UsersServiceClient.prototype.getMyUserLocalePreferencesOverride = function getMyUserLocalePreferencesOverride(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.GetMyUserLocalePreferencesOverride, {
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

UsersServiceClient.prototype.updateMyUserLocalePreferencesOverride = function updateMyUserLocalePreferencesOverride(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.UpdateMyUserLocalePreferencesOverride, {
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

exports.UsersServiceClient = UsersServiceClient;

