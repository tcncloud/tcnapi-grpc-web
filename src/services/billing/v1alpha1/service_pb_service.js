// package: services.billing.v1alpha1
// file: services/billing/v1alpha1/service.proto

var services_billing_v1alpha1_service_pb = require("../../../services/billing/v1alpha1/service_pb");
var services_billing_v1alpha1_invoices_pb = require("../../../services/billing/v1alpha1/invoices_pb");
var services_billing_v1alpha1_plans_pb = require("../../../services/billing/v1alpha1/plans_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var BillingService = (function () {
  function BillingService() {}
  BillingService.serviceName = "services.billing.v1alpha1.BillingService";
  return BillingService;
}());

BillingService.CreateBillingPlan = {
  methodName: "CreateBillingPlan",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha1_plans_pb.CreateBillingPlanRequest,
  responseType: services_billing_v1alpha1_plans_pb.CreateBillingPlanResponse
};

BillingService.CreateInvoice = {
  methodName: "CreateInvoice",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha1_invoices_pb.CreateInvoiceRequest,
  responseType: services_billing_v1alpha1_invoices_pb.CreateInvoiceResponse
};

BillingService.DeleteBillingPlan = {
  methodName: "DeleteBillingPlan",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha1_plans_pb.DeleteBillingPlanRequest,
  responseType: services_billing_v1alpha1_plans_pb.DeleteBillingPlanResponse
};

BillingService.DeleteInvoice = {
  methodName: "DeleteInvoice",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha1_invoices_pb.DeleteInvoiceRequest,
  responseType: services_billing_v1alpha1_invoices_pb.DeleteInvoiceResponse
};

BillingService.GetActiveBillingPlan = {
  methodName: "GetActiveBillingPlan",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha1_plans_pb.GetActiveBillingPlanRequest,
  responseType: services_billing_v1alpha1_plans_pb.GetActiveBillingPlanResponse
};

BillingService.GetBillingPlan = {
  methodName: "GetBillingPlan",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha1_plans_pb.GetBillingPlanRequest,
  responseType: services_billing_v1alpha1_plans_pb.GetBillingPlanResponse
};

BillingService.GetDefaultBillingPlan = {
  methodName: "GetDefaultBillingPlan",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha1_plans_pb.GetDefaultBillingPlanRequest,
  responseType: services_billing_v1alpha1_plans_pb.GetDefaultBillingPlanResponse
};

BillingService.GetInvoice = {
  methodName: "GetInvoice",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha1_invoices_pb.GetInvoiceRequest,
  responseType: services_billing_v1alpha1_invoices_pb.GetInvoiceResponse
};

BillingService.ListBillingPlans = {
  methodName: "ListBillingPlans",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha1_plans_pb.ListBillingPlansRequest,
  responseType: services_billing_v1alpha1_plans_pb.ListBillingPlansResponse
};

BillingService.ListInvoices = {
  methodName: "ListInvoices",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha1_invoices_pb.ListInvoicesRequest,
  responseType: services_billing_v1alpha1_invoices_pb.ListInvoicesResponse
};

BillingService.UpdateBillingPlan = {
  methodName: "UpdateBillingPlan",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha1_plans_pb.UpdateBillingPlanRequest,
  responseType: services_billing_v1alpha1_plans_pb.UpdateBillingPlanResponse
};

BillingService.UpdateDefaultBillingPlan = {
  methodName: "UpdateDefaultBillingPlan",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha1_plans_pb.UpdateDefaultBillingPlanRequest,
  responseType: services_billing_v1alpha1_plans_pb.UpdateDefaultBillingPlanResponse
};

BillingService.UpdateInvoice = {
  methodName: "UpdateInvoice",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha1_invoices_pb.UpdateInvoiceRequest,
  responseType: services_billing_v1alpha1_invoices_pb.UpdateInvoiceResponse
};

exports.BillingService = BillingService;

function BillingServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

BillingServiceClient.prototype.createBillingPlan = function createBillingPlan(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.CreateBillingPlan, {
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

BillingServiceClient.prototype.createInvoice = function createInvoice(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.CreateInvoice, {
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

BillingServiceClient.prototype.deleteBillingPlan = function deleteBillingPlan(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.DeleteBillingPlan, {
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

BillingServiceClient.prototype.deleteInvoice = function deleteInvoice(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.DeleteInvoice, {
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

BillingServiceClient.prototype.getActiveBillingPlan = function getActiveBillingPlan(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.GetActiveBillingPlan, {
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

BillingServiceClient.prototype.getBillingPlan = function getBillingPlan(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.GetBillingPlan, {
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

BillingServiceClient.prototype.getDefaultBillingPlan = function getDefaultBillingPlan(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.GetDefaultBillingPlan, {
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

BillingServiceClient.prototype.getInvoice = function getInvoice(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.GetInvoice, {
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

BillingServiceClient.prototype.listBillingPlans = function listBillingPlans(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.ListBillingPlans, {
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

BillingServiceClient.prototype.listInvoices = function listInvoices(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.ListInvoices, {
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

BillingServiceClient.prototype.updateBillingPlan = function updateBillingPlan(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.UpdateBillingPlan, {
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

BillingServiceClient.prototype.updateDefaultBillingPlan = function updateDefaultBillingPlan(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.UpdateDefaultBillingPlan, {
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

BillingServiceClient.prototype.updateInvoice = function updateInvoice(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.UpdateInvoice, {
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

