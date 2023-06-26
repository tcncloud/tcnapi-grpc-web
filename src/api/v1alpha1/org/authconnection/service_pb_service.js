// package: api.v1alpha1.org.authconnection
// file: api/v1alpha1/org/authconnection/service.proto

var api_v1alpha1_org_authconnection_service_pb = require("../../../../api/v1alpha1/org/authconnection/service_pb");
var api_v1alpha1_org_authconnection_entities_pb = require("../../../../api/v1alpha1/org/authconnection/entities_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AuthConnection = (function () {
  function AuthConnection() {}
  AuthConnection.serviceName = "api.v1alpha1.org.authconnection.AuthConnection";
  return AuthConnection;
}());

AuthConnection.CreateAuthConnection = {
  methodName: "CreateAuthConnection",
  service: AuthConnection,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_authconnection_entities_pb.CreateAuthConnectionRequest,
  responseType: api_v1alpha1_org_authconnection_entities_pb.CreateAuthConnectionResponse
};

AuthConnection.GetAuthConnectionSettings = {
  methodName: "GetAuthConnectionSettings",
  service: AuthConnection,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_authconnection_entities_pb.GetAuthConnectionSettingsRequest,
  responseType: api_v1alpha1_org_authconnection_entities_pb.GetAuthConnectionSettingsResponse
};

AuthConnection.DeleteAuthConnection = {
  methodName: "DeleteAuthConnection",
  service: AuthConnection,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_authconnection_entities_pb.DeleteAuthConnectionRequest,
  responseType: api_v1alpha1_org_authconnection_entities_pb.DeleteAuthConnectionResponse
};

AuthConnection.UpdateAuthConnectionSecret = {
  methodName: "UpdateAuthConnectionSecret",
  service: AuthConnection,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_authconnection_entities_pb.UpdateAuthConnectionSecretRequest,
  responseType: api_v1alpha1_org_authconnection_entities_pb.UpdateAuthConnectionSecretResponse
};

AuthConnection.UpdateAuthConnectionGroups = {
  methodName: "UpdateAuthConnectionGroups",
  service: AuthConnection,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_authconnection_entities_pb.UpdateAuthConnectionGroupsRequest,
  responseType: api_v1alpha1_org_authconnection_entities_pb.UpdateAuthConnectionGroupsResponse
};

exports.AuthConnection = AuthConnection;

function AuthConnectionClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AuthConnectionClient.prototype.createAuthConnection = function createAuthConnection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthConnection.CreateAuthConnection, {
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

AuthConnectionClient.prototype.getAuthConnectionSettings = function getAuthConnectionSettings(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthConnection.GetAuthConnectionSettings, {
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

AuthConnectionClient.prototype.deleteAuthConnection = function deleteAuthConnection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthConnection.DeleteAuthConnection, {
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

AuthConnectionClient.prototype.updateAuthConnectionSecret = function updateAuthConnectionSecret(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthConnection.UpdateAuthConnectionSecret, {
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

AuthConnectionClient.prototype.updateAuthConnectionGroups = function updateAuthConnectionGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthConnection.UpdateAuthConnectionGroups, {
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

exports.AuthConnectionClient = AuthConnectionClient;

