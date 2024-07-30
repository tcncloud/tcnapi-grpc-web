// package: services.org.exile_certificate_manager.v1alpha1
// file: services/org/exile_certificate_manager/v1alpha1/service.proto

var services_org_exile_certificate_manager_v1alpha1_service_pb = require("../../../../services/org/exile_certificate_manager/v1alpha1/service_pb");
var services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb = require("../../../../services/org/exile_certificate_manager/v1alpha1/exile_certificate_pb");
var services_org_exile_certificate_manager_v1alpha1_exile_configuration_pb = require("../../../../services/org/exile_certificate_manager/v1alpha1/exile_configuration_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ExileCertificateManagerService = (function () {
  function ExileCertificateManagerService() {}
  ExileCertificateManagerService.serviceName = "services.org.exile_certificate_manager.v1alpha1.ExileCertificateManagerService";
  return ExileCertificateManagerService;
}());

ExileCertificateManagerService.CreateExileCertificate = {
  methodName: "CreateExileCertificate",
  service: ExileCertificateManagerService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.CreateExileCertificateRequest,
  responseType: services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.CreateExileCertificateResponse
};

ExileCertificateManagerService.RevokeExileCertificate = {
  methodName: "RevokeExileCertificate",
  service: ExileCertificateManagerService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.RevokeExileCertificateRequest,
  responseType: services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.RevokeExileCertificateResponse
};

ExileCertificateManagerService.AssignExileConfiguration = {
  methodName: "AssignExileConfiguration",
  service: ExileCertificateManagerService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.AssignExileConfigurationRequest,
  responseType: services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.AssignExileConfigurationResponse
};

ExileCertificateManagerService.UnassignExileConfiguration = {
  methodName: "UnassignExileConfiguration",
  service: ExileCertificateManagerService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.UnassignExileConfigurationRequest,
  responseType: services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.UnassignExileConfigurationResponse
};

ExileCertificateManagerService.ListExileCertificates = {
  methodName: "ListExileCertificates",
  service: ExileCertificateManagerService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.ListExileCertificatesRequest,
  responseType: services_org_exile_certificate_manager_v1alpha1_exile_certificate_pb.ListExileCertificatesResponse
};

ExileCertificateManagerService.CreateExileConfiguration = {
  methodName: "CreateExileConfiguration",
  service: ExileCertificateManagerService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_exile_certificate_manager_v1alpha1_exile_configuration_pb.CreateExileConfigurationRequest,
  responseType: services_org_exile_certificate_manager_v1alpha1_exile_configuration_pb.CreateExileConfigurationResponse
};

ExileCertificateManagerService.UpdateExileConfiguration = {
  methodName: "UpdateExileConfiguration",
  service: ExileCertificateManagerService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_exile_certificate_manager_v1alpha1_exile_configuration_pb.UpdateExileConfigurationRequest,
  responseType: services_org_exile_certificate_manager_v1alpha1_exile_configuration_pb.UpdateExileConfigurationResponse
};

ExileCertificateManagerService.DeleteExileConfiguration = {
  methodName: "DeleteExileConfiguration",
  service: ExileCertificateManagerService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_exile_certificate_manager_v1alpha1_exile_configuration_pb.DeleteExileConfigurationRequest,
  responseType: services_org_exile_certificate_manager_v1alpha1_exile_configuration_pb.DeleteExileConfigurationResponse
};

ExileCertificateManagerService.ListExileConfigurations = {
  methodName: "ListExileConfigurations",
  service: ExileCertificateManagerService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_exile_certificate_manager_v1alpha1_exile_configuration_pb.ListExileConfigurationsRequest,
  responseType: services_org_exile_certificate_manager_v1alpha1_exile_configuration_pb.ListExileConfigurationsResponse
};

exports.ExileCertificateManagerService = ExileCertificateManagerService;

function ExileCertificateManagerServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ExileCertificateManagerServiceClient.prototype.createExileCertificate = function createExileCertificate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ExileCertificateManagerService.CreateExileCertificate, {
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

ExileCertificateManagerServiceClient.prototype.revokeExileCertificate = function revokeExileCertificate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ExileCertificateManagerService.RevokeExileCertificate, {
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

ExileCertificateManagerServiceClient.prototype.assignExileConfiguration = function assignExileConfiguration(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ExileCertificateManagerService.AssignExileConfiguration, {
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

ExileCertificateManagerServiceClient.prototype.unassignExileConfiguration = function unassignExileConfiguration(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ExileCertificateManagerService.UnassignExileConfiguration, {
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

ExileCertificateManagerServiceClient.prototype.listExileCertificates = function listExileCertificates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ExileCertificateManagerService.ListExileCertificates, {
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

ExileCertificateManagerServiceClient.prototype.createExileConfiguration = function createExileConfiguration(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ExileCertificateManagerService.CreateExileConfiguration, {
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

ExileCertificateManagerServiceClient.prototype.updateExileConfiguration = function updateExileConfiguration(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ExileCertificateManagerService.UpdateExileConfiguration, {
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

ExileCertificateManagerServiceClient.prototype.deleteExileConfiguration = function deleteExileConfiguration(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ExileCertificateManagerService.DeleteExileConfiguration, {
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

ExileCertificateManagerServiceClient.prototype.listExileConfigurations = function listExileConfigurations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ExileCertificateManagerService.ListExileConfigurations, {
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

