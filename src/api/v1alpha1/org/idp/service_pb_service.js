// package: api.v1alpha1.org.idp
// file: api/v1alpha1/org/idp/service.proto

var api_v1alpha1_org_idp_service_pb = require("../../../../api/v1alpha1/org/idp/service_pb");
var api_v1alpha1_org_idp_entities_pb = require("../../../../api/v1alpha1/org/idp/entities_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var IdpService = (function () {
  function IdpService() {}
  IdpService.serviceName = "api.v1alpha1.org.idp.IdpService";
  return IdpService;
}());

IdpService.CreateClient = {
  methodName: "CreateClient",
  service: IdpService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_idp_entities_pb.CreateClientReq,
  responseType: api_v1alpha1_org_idp_entities_pb.CreateClientResp
};

IdpService.UpdateClient = {
  methodName: "UpdateClient",
  service: IdpService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_idp_entities_pb.UpdateClientReq,
  responseType: api_v1alpha1_org_idp_entities_pb.UpdateClientResp
};

IdpService.DeleteClient = {
  methodName: "DeleteClient",
  service: IdpService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_idp_entities_pb.DeleteClientReq,
  responseType: api_v1alpha1_org_idp_entities_pb.DeleteClientResp
};

IdpService.ListClients = {
  methodName: "ListClients",
  service: IdpService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_idp_entities_pb.ListClientsReq,
  responseType: api_v1alpha1_org_idp_entities_pb.ListClientsResp
};

exports.IdpService = IdpService;

function IdpServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

IdpServiceClient.prototype.createClient = function createClient(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IdpService.CreateClient, {
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

IdpServiceClient.prototype.updateClient = function updateClient(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IdpService.UpdateClient, {
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

IdpServiceClient.prototype.deleteClient = function deleteClient(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IdpService.DeleteClient, {
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

IdpServiceClient.prototype.listClients = function listClients(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IdpService.ListClients, {
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

exports.IdpServiceClient = IdpServiceClient;

