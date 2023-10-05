// package: services.billing.v1alpha1
// file: services/billing/v1alpha1/service.proto

var services_billing_v1alpha1_service_pb = require("../../../services/billing/v1alpha1/service_pb");
var services_billing_v1alpha1_groups_pb = require("../../../services/billing/v1alpha1/groups_pb");
var services_billing_v1alpha1_invoices_pb = require("../../../services/billing/v1alpha1/invoices_pb");
var services_billing_v1alpha1_plans_pb = require("../../../services/billing/v1alpha1/plans_pb");
var services_billing_v1alpha1_rates_pb = require("../../../services/billing/v1alpha1/rates_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var BillingService = (function () {
  function BillingService() {}
  BillingService.serviceName = "services.billing.v1alpha1.BillingService";
  return BillingService;
}());

BillingService.BulkDeleteRateDefinitions = {
  methodName: "BulkDeleteRateDefinitions",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha1_rates_pb.BulkDeleteRateDefinitionsRequest,
  responseType: services_billing_v1alpha1_rates_pb.BulkDeleteRateDefinitionsResponse
};

BillingService.BulkUpdateRateDefinitions = {
  methodName: "BulkUpdateRateDefinitions",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha1_rates_pb.BulkUpdateRateDefinitionsRequest,
  responseType: services_billing_v1alpha1_rates_pb.BulkUpdateRateDefinitionsResponse
};

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

BillingService.CreateRateDefinition = {
  methodName: "CreateRateDefinition",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha1_rates_pb.CreateRateDefinitionRequest,
  responseType: services_billing_v1alpha1_rates_pb.CreateRateDefinitionResponse
};

BillingService.CreateRateDefinitionGroup = {
  methodName: "CreateRateDefinitionGroup",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha1_groups_pb.CreateRateDefinitionGroupRequest,
  responseType: services_billing_v1alpha1_groups_pb.CreateRateDefinitionGroupResponse
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

BillingService.DeleteRateDefinition = {
  methodName: "DeleteRateDefinition",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha1_rates_pb.DeleteRateDefinitionRequest,
  responseType: services_billing_v1alpha1_rates_pb.DeleteRateDefinitionResponse
};

BillingService.DeleteRateDefinitionGroup = {
  methodName: "DeleteRateDefinitionGroup",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha1_groups_pb.DeleteRateDefinitionGroupRequest,
  responseType: services_billing_v1alpha1_groups_pb.DeleteRateDefinitionGroupResponse
};

BillingService.ExportInvoice = {
  methodName: "ExportInvoice",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha1_invoices_pb.ExportInvoiceRequest,
  responseType: services_billing_v1alpha1_invoices_pb.ExportInvoiceResponse
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

BillingService.GetRateDefinition = {
  methodName: "GetRateDefinition",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha1_rates_pb.GetRateDefinitionRequest,
  responseType: services_billing_v1alpha1_rates_pb.GetRateDefinitionResponse
};

BillingService.GetRateDefinitionGroup = {
  methodName: "GetRateDefinitionGroup",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha1_groups_pb.GetRateDefinitionGroupRequest,
  responseType: services_billing_v1alpha1_groups_pb.GetRateDefinitionGroupResponse
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

BillingService.ListRateDefinitions = {
  methodName: "ListRateDefinitions",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha1_rates_pb.ListRateDefinitionsRequest,
  responseType: services_billing_v1alpha1_rates_pb.ListRateDefinitionsResponse
};

BillingService.ListRateDefinitionGroups = {
  methodName: "ListRateDefinitionGroups",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha1_groups_pb.ListRateDefinitionGroupsRequest,
  responseType: services_billing_v1alpha1_groups_pb.ListRateDefinitionGroupsResponse
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

BillingService.UpdateRateDefinition = {
  methodName: "UpdateRateDefinition",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha1_rates_pb.UpdateRateDefinitionRequest,
  responseType: services_billing_v1alpha1_rates_pb.UpdateRateDefinitionResponse
};

BillingService.UpdateRateDefinitionGroup = {
  methodName: "UpdateRateDefinitionGroup",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha1_groups_pb.UpdateRateDefinitionGroupRequest,
  responseType: services_billing_v1alpha1_groups_pb.UpdateRateDefinitionGroupResponse
};

exports.BillingService = BillingService;

function BillingServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

BillingServiceClient.prototype.bulkDeleteRateDefinitions = function bulkDeleteRateDefinitions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.BulkDeleteRateDefinitions, {
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

BillingServiceClient.prototype.bulkUpdateRateDefinitions = function bulkUpdateRateDefinitions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.BulkUpdateRateDefinitions, {
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

BillingServiceClient.prototype.createRateDefinitionGroup = function createRateDefinitionGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.CreateRateDefinitionGroup, {
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

BillingServiceClient.prototype.deleteRateDefinitionGroup = function deleteRateDefinitionGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.DeleteRateDefinitionGroup, {
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

BillingServiceClient.prototype.getRateDefinitionGroup = function getRateDefinitionGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.GetRateDefinitionGroup, {
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

BillingServiceClient.prototype.listRateDefinitionGroups = function listRateDefinitionGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.ListRateDefinitionGroups, {
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

BillingServiceClient.prototype.updateRateDefinitionGroup = function updateRateDefinitionGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.UpdateRateDefinitionGroup, {
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

