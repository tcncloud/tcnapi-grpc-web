// package: api.v1alpha1.idp
// file: api/v1alpha1/idp/service.proto

var api_v1alpha1_idp_service_pb = require("../../../api/v1alpha1/idp/service_pb");
var api_v1alpha1_idp_entities_pb = require("../../../api/v1alpha1/idp/entities_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var IdentityProviderService = (function () {
  function IdentityProviderService() {}
  IdentityProviderService.serviceName = "api.v1alpha1.idp.IdentityProviderService";
  return IdentityProviderService;
}());

IdentityProviderService.CreateAuthConnection = {
  methodName: "CreateAuthConnection",
  service: IdentityProviderService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_idp_entities_pb.CreateAuthConnectionRequest,
  responseType: api_v1alpha1_idp_entities_pb.CreateAuthConnectionResponse
};

IdentityProviderService.GetAuthConnectionSettings = {
  methodName: "GetAuthConnectionSettings",
  service: IdentityProviderService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_idp_entities_pb.GetAuthConnectionSettingsRequest,
  responseType: api_v1alpha1_idp_entities_pb.GetAuthConnectionSettingsResponse
};

IdentityProviderService.GetAuthConnection = {
  methodName: "GetAuthConnection",
  service: IdentityProviderService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_idp_entities_pb.GetAuthConnectionRequest,
  responseType: api_v1alpha1_idp_entities_pb.GetAuthConnectionResponse
};

IdentityProviderService.DeleteAuthConnection = {
  methodName: "DeleteAuthConnection",
  service: IdentityProviderService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_idp_entities_pb.DeleteAuthConnectionRequest,
  responseType: api_v1alpha1_idp_entities_pb.DeleteAuthConnectionResponse
};

IdentityProviderService.UpdateAuthConnectionSecret = {
  methodName: "UpdateAuthConnectionSecret",
  service: IdentityProviderService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_idp_entities_pb.UpdateAuthConnectionSecretRequest,
  responseType: api_v1alpha1_idp_entities_pb.UpdateAuthConnectionSecretResponse
};

IdentityProviderService.UpdateAuthConnectionGroups = {
  methodName: "UpdateAuthConnectionGroups",
  service: IdentityProviderService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_idp_entities_pb.UpdateAuthConnectionGroupsRequest,
  responseType: api_v1alpha1_idp_entities_pb.UpdateAuthConnectionGroupsResponse
};

exports.IdentityProviderService = IdentityProviderService;

function IdentityProviderServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

IdentityProviderServiceClient.prototype.createAuthConnection = function createAuthConnection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IdentityProviderService.CreateAuthConnection, {
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

IdentityProviderServiceClient.prototype.getAuthConnectionSettings = function getAuthConnectionSettings(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IdentityProviderService.GetAuthConnectionSettings, {
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

IdentityProviderServiceClient.prototype.getAuthConnection = function getAuthConnection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IdentityProviderService.GetAuthConnection, {
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

IdentityProviderServiceClient.prototype.deleteAuthConnection = function deleteAuthConnection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IdentityProviderService.DeleteAuthConnection, {
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

IdentityProviderServiceClient.prototype.updateAuthConnectionSecret = function updateAuthConnectionSecret(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IdentityProviderService.UpdateAuthConnectionSecret, {
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

IdentityProviderServiceClient.prototype.updateAuthConnectionGroups = function updateAuthConnectionGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IdentityProviderService.UpdateAuthConnectionGroups, {
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

exports.IdentityProviderServiceClient = IdentityProviderServiceClient;

