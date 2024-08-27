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

UsersService.GetUserLocalePreferences = {
  methodName: "GetUserLocalePreferences",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_users_v1alpha1_preferences_pb.GetUserLocalePreferencesRequest,
  responseType: services_org_users_v1alpha1_preferences_pb.GetUserLocalePreferencesResponse
};

UsersService.UpdateUserLocalePreferences = {
  methodName: "UpdateUserLocalePreferences",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_users_v1alpha1_preferences_pb.UpdateUserLocalePreferencesRequest,
  responseType: services_org_users_v1alpha1_preferences_pb.UpdateUserLocalePreferencesResponse
};

UsersService.GetMyUserLocalePreferences = {
  methodName: "GetMyUserLocalePreferences",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_users_v1alpha1_preferences_pb.GetMyUserLocalePreferencesRequest,
  responseType: services_org_users_v1alpha1_preferences_pb.GetMyUserLocalePreferencesResponse
};

UsersService.UpdateMyUserLocalePreferences = {
  methodName: "UpdateMyUserLocalePreferences",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_users_v1alpha1_preferences_pb.UpdateMyUserLocalePreferencesRequest,
  responseType: services_org_users_v1alpha1_preferences_pb.UpdateMyUserLocalePreferencesResponse
};

exports.UsersService = UsersService;

function UsersServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

UsersServiceClient.prototype.getUserLocalePreferences = function getUserLocalePreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.GetUserLocalePreferences, {
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

UsersServiceClient.prototype.updateUserLocalePreferences = function updateUserLocalePreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.UpdateUserLocalePreferences, {
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

UsersServiceClient.prototype.getMyUserLocalePreferences = function getMyUserLocalePreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.GetMyUserLocalePreferences, {
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

UsersServiceClient.prototype.updateMyUserLocalePreferences = function updateMyUserLocalePreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.UpdateMyUserLocalePreferences, {
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

