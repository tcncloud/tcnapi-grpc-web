// package: api.v1alpha1.org.exile_manager
// file: api/v1alpha1/org/exile_manager/service.proto

var api_v1alpha1_org_exile_manager_service_pb = require("../../../../api/v1alpha1/org/exile_manager/service_pb");
var api_v1alpha1_org_exile_manager_entities_pb = require("../../../../api/v1alpha1/org/exile_manager/entities_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ExileManagerService = (function () {
  function ExileManagerService() {}
  ExileManagerService.serviceName = "api.v1alpha1.org.exile_manager.ExileManagerService";
  return ExileManagerService;
}());

ExileManagerService.CreateCertificateInfo = {
  methodName: "CreateCertificateInfo",
  service: ExileManagerService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_exile_manager_entities_pb.CreateCertificateInfoRequest,
  responseType: api_v1alpha1_org_exile_manager_entities_pb.CreateCertificateInfoResponse
};

ExileManagerService.DeleteCertificateInfo = {
  methodName: "DeleteCertificateInfo",
  service: ExileManagerService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_exile_manager_entities_pb.DeleteCertificateInfoRequest,
  responseType: api_v1alpha1_org_exile_manager_entities_pb.DeleteCertificateInfoResponse
};

ExileManagerService.RevokeCertificateInfo = {
  methodName: "RevokeCertificateInfo",
  service: ExileManagerService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_exile_manager_entities_pb.RevokeCertificateInfoRequest,
  responseType: api_v1alpha1_org_exile_manager_entities_pb.RevokeCertificateInfoResponse
};

ExileManagerService.ListCertificateInfo = {
  methodName: "ListCertificateInfo",
  service: ExileManagerService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_exile_manager_entities_pb.ListCertificateInfoRequest,
  responseType: api_v1alpha1_org_exile_manager_entities_pb.ListCertificateInfoResponse
};

exports.ExileManagerService = ExileManagerService;

function ExileManagerServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ExileManagerServiceClient.prototype.createCertificateInfo = function createCertificateInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ExileManagerService.CreateCertificateInfo, {
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

ExileManagerServiceClient.prototype.deleteCertificateInfo = function deleteCertificateInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ExileManagerService.DeleteCertificateInfo, {
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

ExileManagerServiceClient.prototype.revokeCertificateInfo = function revokeCertificateInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ExileManagerService.RevokeCertificateInfo, {
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

ExileManagerServiceClient.prototype.listCertificateInfo = function listCertificateInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ExileManagerService.ListCertificateInfo, {
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

exports.ExileManagerServiceClient = ExileManagerServiceClient;

