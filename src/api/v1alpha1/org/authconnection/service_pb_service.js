// package: api.v1alpha1.org.authconnection
// file: api/v1alpha1/org/authconnection/service.proto

var api_v1alpha1_org_authconnection_service_pb = require("../../../../api/v1alpha1/org/authconnection/service_pb");
var api_v1alpha1_org_authconnection_entities_pb = require("../../../../api/v1alpha1/org/authconnection/entities_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AuthConnectionService = (function () {
  function AuthConnectionService() {}
  AuthConnectionService.serviceName = "api.v1alpha1.org.authconnection.AuthConnectionService";
  return AuthConnectionService;
}());

AuthConnectionService.CreateAuthConnection = {
  methodName: "CreateAuthConnection",
  service: AuthConnectionService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_authconnection_entities_pb.CreateAuthConnectionRequest,
  responseType: api_v1alpha1_org_authconnection_entities_pb.CreateAuthConnectionResponse
};

AuthConnectionService.ListAuthConnectionIds = {
  methodName: "ListAuthConnectionIds",
  service: AuthConnectionService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_authconnection_entities_pb.ListAuthConnectionIdsRequest,
  responseType: api_v1alpha1_org_authconnection_entities_pb.ListAuthConnectionIdsResponse
};

AuthConnectionService.GetAuthConnectionSettings = {
  methodName: "GetAuthConnectionSettings",
  service: AuthConnectionService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_authconnection_entities_pb.GetAuthConnectionSettingsRequest,
  responseType: api_v1alpha1_org_authconnection_entities_pb.GetAuthConnectionSettingsResponse
};

AuthConnectionService.GetAuthConnection = {
  methodName: "GetAuthConnection",
  service: AuthConnectionService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_authconnection_entities_pb.GetAuthConnectionRequest,
  responseType: api_v1alpha1_org_authconnection_entities_pb.GetAuthConnectionResponse
};

AuthConnectionService.DeleteAuthConnection = {
  methodName: "DeleteAuthConnection",
  service: AuthConnectionService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_authconnection_entities_pb.DeleteAuthConnectionRequest,
  responseType: api_v1alpha1_org_authconnection_entities_pb.DeleteAuthConnectionResponse
};

AuthConnectionService.UpdateAuthConnectionSecret = {
  methodName: "UpdateAuthConnectionSecret",
  service: AuthConnectionService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_authconnection_entities_pb.UpdateAuthConnectionSecretRequest,
  responseType: api_v1alpha1_org_authconnection_entities_pb.UpdateAuthConnectionSecretResponse
};

AuthConnectionService.UpdateAuthConnectionGroups = {
  methodName: "UpdateAuthConnectionGroups",
  service: AuthConnectionService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_authconnection_entities_pb.UpdateAuthConnectionGroupsRequest,
  responseType: api_v1alpha1_org_authconnection_entities_pb.UpdateAuthConnectionGroupsResponse
};

exports.AuthConnectionService = AuthConnectionService;

function AuthConnectionServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AuthConnectionServiceClient.prototype.createAuthConnection = function createAuthConnection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthConnectionService.CreateAuthConnection, {
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

AuthConnectionServiceClient.prototype.listAuthConnectionIds = function listAuthConnectionIds(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthConnectionService.ListAuthConnectionIds, {
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

AuthConnectionServiceClient.prototype.getAuthConnectionSettings = function getAuthConnectionSettings(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthConnectionService.GetAuthConnectionSettings, {
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

AuthConnectionServiceClient.prototype.getAuthConnection = function getAuthConnection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthConnectionService.GetAuthConnection, {
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

AuthConnectionServiceClient.prototype.deleteAuthConnection = function deleteAuthConnection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthConnectionService.DeleteAuthConnection, {
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

AuthConnectionServiceClient.prototype.updateAuthConnectionSecret = function updateAuthConnectionSecret(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthConnectionService.UpdateAuthConnectionSecret, {
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

AuthConnectionServiceClient.prototype.updateAuthConnectionGroups = function updateAuthConnectionGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthConnectionService.UpdateAuthConnectionGroups, {
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

exports.AuthConnectionServiceClient = AuthConnectionServiceClient;

