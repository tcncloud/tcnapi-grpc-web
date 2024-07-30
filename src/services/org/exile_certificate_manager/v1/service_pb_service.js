// package: services.org.exile_certificate_manager.v1
// file: services/org/exile_certificate_manager/v1/service.proto

var services_org_exile_certificate_manager_v1_service_pb = require("../../../../services/org/exile_certificate_manager/v1/service_pb");
var services_org_exile_certificate_manager_v1_certificate_info_pb = require("../../../../services/org/exile_certificate_manager/v1/certificate_info_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ExileCertificateManagerService = (function () {
  function ExileCertificateManagerService() {}
  ExileCertificateManagerService.serviceName = "services.org.exile_certificate_manager.v1.ExileCertificateManagerService";
  return ExileCertificateManagerService;
}());

ExileCertificateManagerService.CreateCertificateInfo = {
  methodName: "CreateCertificateInfo",
  service: ExileCertificateManagerService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_exile_certificate_manager_v1_certificate_info_pb.CreateCertificateInfoRequest,
  responseType: services_org_exile_certificate_manager_v1_certificate_info_pb.CreateCertificateInfoResponse
};

ExileCertificateManagerService.DeleteCertificateInfo = {
  methodName: "DeleteCertificateInfo",
  service: ExileCertificateManagerService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_exile_certificate_manager_v1_certificate_info_pb.DeleteCertificateInfoRequest,
  responseType: services_org_exile_certificate_manager_v1_certificate_info_pb.DeleteCertificateInfoResponse
};

ExileCertificateManagerService.RevokeCertificateInfo = {
  methodName: "RevokeCertificateInfo",
  service: ExileCertificateManagerService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_exile_certificate_manager_v1_certificate_info_pb.RevokeCertificateInfoRequest,
  responseType: services_org_exile_certificate_manager_v1_certificate_info_pb.RevokeCertificateInfoResponse
};

ExileCertificateManagerService.ListCertificateInfo = {
  methodName: "ListCertificateInfo",
  service: ExileCertificateManagerService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_exile_certificate_manager_v1_certificate_info_pb.ListCertificateInfoRequest,
  responseType: services_org_exile_certificate_manager_v1_certificate_info_pb.ListCertificateInfoResponse
};

exports.ExileCertificateManagerService = ExileCertificateManagerService;

function ExileCertificateManagerServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ExileCertificateManagerServiceClient.prototype.createCertificateInfo = function createCertificateInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ExileCertificateManagerService.CreateCertificateInfo, {
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

ExileCertificateManagerServiceClient.prototype.deleteCertificateInfo = function deleteCertificateInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ExileCertificateManagerService.DeleteCertificateInfo, {
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

ExileCertificateManagerServiceClient.prototype.revokeCertificateInfo = function revokeCertificateInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ExileCertificateManagerService.RevokeCertificateInfo, {
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

ExileCertificateManagerServiceClient.prototype.listCertificateInfo = function listCertificateInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ExileCertificateManagerService.ListCertificateInfo, {
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

exports.ExileCertificateManagerServiceClient = ExileCertificateManagerServiceClient;

