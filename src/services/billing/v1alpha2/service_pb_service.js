// package: services.billing.v1alpha2
// file: services/billing/v1alpha2/service.proto

var services_billing_v1alpha2_service_pb = require("../../../services/billing/v1alpha2/service_pb");
var services_billing_v1alpha2_invoices_pb = require("../../../services/billing/v1alpha2/invoices_pb");
var services_billing_v1alpha2_rates_pb = require("../../../services/billing/v1alpha2/rates_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var BillingService = (function () {
  function BillingService() {}
  BillingService.serviceName = "services.billing.v1alpha2.BillingService";
  return BillingService;
}());

BillingService.CreateDefaultRateDefinition = {
  methodName: "CreateDefaultRateDefinition",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha2_rates_pb.CreateDefaultRateDefinitionRequest,
  responseType: services_billing_v1alpha2_rates_pb.CreateDefaultRateDefinitionResponse
};

BillingService.CreateRateDefinition = {
  methodName: "CreateRateDefinition",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha2_rates_pb.CreateRateDefinitionRequest,
  responseType: services_billing_v1alpha2_rates_pb.CreateRateDefinitionResponse
};

BillingService.DeleteDefaultRateDefinition = {
  methodName: "DeleteDefaultRateDefinition",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha2_rates_pb.DeleteDefaultRateDefinitionRequest,
  responseType: services_billing_v1alpha2_rates_pb.DeleteDefaultRateDefinitionResponse
};

BillingService.DeleteRateDefinition = {
  methodName: "DeleteRateDefinition",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha2_rates_pb.DeleteRateDefinitionRequest,
  responseType: services_billing_v1alpha2_rates_pb.DeleteRateDefinitionResponse
};

BillingService.ExportInvoice = {
  methodName: "ExportInvoice",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha2_invoices_pb.ExportInvoiceRequest,
  responseType: services_billing_v1alpha2_invoices_pb.ExportInvoiceResponse
};

BillingService.GetRateDefinition = {
  methodName: "GetRateDefinition",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha2_rates_pb.GetRateDefinitionRequest,
  responseType: services_billing_v1alpha2_rates_pb.GetRateDefinitionResponse
};

BillingService.GetRateHistory = {
  methodName: "GetRateHistory",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha2_rates_pb.GetRateHistoryRequest,
  responseType: services_billing_v1alpha2_rates_pb.GetRateHistoryResponse
};

BillingService.ListActiveRateDefinitions = {
  methodName: "ListActiveRateDefinitions",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha2_rates_pb.ListActiveRateDefinitionsRequest,
  responseType: services_billing_v1alpha2_rates_pb.ListActiveRateDefinitionsResponse
};

BillingService.ListRateDefinitions = {
  methodName: "ListRateDefinitions",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha2_rates_pb.ListRateDefinitionsRequest,
  responseType: services_billing_v1alpha2_rates_pb.ListRateDefinitionsResponse
};

BillingService.UpdateDefaultRateDefinition = {
  methodName: "UpdateDefaultRateDefinition",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha2_rates_pb.UpdateDefaultRateDefinitionRequest,
  responseType: services_billing_v1alpha2_rates_pb.UpdateDefaultRateDefinitionResponse
};

BillingService.UpdateRateDefinition = {
  methodName: "UpdateRateDefinition",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha2_rates_pb.UpdateRateDefinitionRequest,
  responseType: services_billing_v1alpha2_rates_pb.UpdateRateDefinitionResponse
};

exports.BillingService = BillingService;

function BillingServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

BillingServiceClient.prototype.createDefaultRateDefinition = function createDefaultRateDefinition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.CreateDefaultRateDefinition, {
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

BillingServiceClient.prototype.createRateDefinition = function createRateDefinition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.CreateRateDefinition, {
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

BillingServiceClient.prototype.deleteDefaultRateDefinition = function deleteDefaultRateDefinition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.DeleteDefaultRateDefinition, {
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

BillingServiceClient.prototype.deleteRateDefinition = function deleteRateDefinition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.DeleteRateDefinition, {
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

BillingServiceClient.prototype.exportInvoice = function exportInvoice(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.ExportInvoice, {
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

BillingServiceClient.prototype.getRateDefinition = function getRateDefinition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.GetRateDefinition, {
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

BillingServiceClient.prototype.getRateHistory = function getRateHistory(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.GetRateHistory, {
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

BillingServiceClient.prototype.listActiveRateDefinitions = function listActiveRateDefinitions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.ListActiveRateDefinitions, {
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

BillingServiceClient.prototype.listRateDefinitions = function listRateDefinitions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.ListRateDefinitions, {
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

BillingServiceClient.prototype.updateDefaultRateDefinition = function updateDefaultRateDefinition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.UpdateDefaultRateDefinition, {
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

BillingServiceClient.prototype.updateRateDefinition = function updateRateDefinition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.UpdateRateDefinition, {
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

exports.BillingServiceClient = BillingServiceClient;

