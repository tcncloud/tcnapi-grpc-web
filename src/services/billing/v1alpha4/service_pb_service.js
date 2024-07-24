// package: services.billing.v1alpha4
// file: services/billing/v1alpha4/service.proto

var services_billing_v1alpha4_service_pb = require("../../../services/billing/v1alpha4/service_pb");
var services_billing_v1alpha4_defaults_pb = require("../../../services/billing/v1alpha4/defaults_pb");
var services_billing_v1alpha4_invoice_pb = require("../../../services/billing/v1alpha4/invoice_pb");
var services_billing_v1alpha4_plan_pb = require("../../../services/billing/v1alpha4/plan_pb");
var services_billing_v1alpha4_product_pb = require("../../../services/billing/v1alpha4/product_pb");
var services_billing_v1alpha4_sku_pb = require("../../../services/billing/v1alpha4/sku_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var BillingService = (function () {
  function BillingService() {}
  BillingService.serviceName = "services.billing.v1alpha4.BillingService";
  return BillingService;
}());

BillingService.ListProducts = {
  methodName: "ListProducts",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_product_pb.ListProductsRequest,
  responseType: services_billing_v1alpha4_product_pb.ListProductsResponse
};

BillingService.ApplyBillingPlanDraft = {
  methodName: "ApplyBillingPlanDraft",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_plan_pb.ApplyBillingPlanDraftRequest,
  responseType: services_billing_v1alpha4_plan_pb.ApplyBillingPlanDraftResponse
};

BillingService.CreateBillingPlan = {
  methodName: "CreateBillingPlan",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_plan_pb.CreateBillingPlanRequest,
  responseType: services_billing_v1alpha4_plan_pb.CreateBillingPlanResponse
};

BillingService.DeleteBillingPlan = {
  methodName: "DeleteBillingPlan",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_plan_pb.DeleteBillingPlanRequest,
  responseType: services_billing_v1alpha4_plan_pb.DeleteBillingPlanResponse
};

BillingService.GetBillingPlan = {
  methodName: "GetBillingPlan",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_plan_pb.GetBillingPlanRequest,
  responseType: services_billing_v1alpha4_plan_pb.GetBillingPlanResponse
};

BillingService.ListBillingPlans = {
  methodName: "ListBillingPlans",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_plan_pb.ListBillingPlansRequest,
  responseType: services_billing_v1alpha4_plan_pb.ListBillingPlansResponse
};

BillingService.UpdateBillingPlan = {
  methodName: "UpdateBillingPlan",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_plan_pb.UpdateBillingPlanRequest,
  responseType: services_billing_v1alpha4_plan_pb.UpdateBillingPlanResponse
};

BillingService.ApplyDefaultBillingPlanDraft = {
  methodName: "ApplyDefaultBillingPlanDraft",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_defaults_pb.ApplyDefaultBillingPlanDraftRequest,
  responseType: services_billing_v1alpha4_defaults_pb.ApplyDefaultBillingPlanDraftResponse
};

BillingService.CreateDefaultBillingPlan = {
  methodName: "CreateDefaultBillingPlan",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_defaults_pb.CreateDefaultBillingPlanRequest,
  responseType: services_billing_v1alpha4_defaults_pb.CreateDefaultBillingPlanResponse
};

BillingService.DeleteDefaultBillingPlan = {
  methodName: "DeleteDefaultBillingPlan",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_defaults_pb.DeleteDefaultBillingPlanRequest,
  responseType: services_billing_v1alpha4_defaults_pb.DeleteDefaultBillingPlanResponse
};

BillingService.GetDefaultBillingPlan = {
  methodName: "GetDefaultBillingPlan",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_defaults_pb.GetDefaultBillingPlanRequest,
  responseType: services_billing_v1alpha4_defaults_pb.GetDefaultBillingPlanResponse
};

BillingService.ListDefaultBillingPlans = {
  methodName: "ListDefaultBillingPlans",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_defaults_pb.ListDefaultBillingPlansRequest,
  responseType: services_billing_v1alpha4_defaults_pb.ListDefaultBillingPlansResponse
};

BillingService.UpdateDefaultBillingPlan = {
  methodName: "UpdateDefaultBillingPlan",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_defaults_pb.UpdateDefaultBillingPlanRequest,
  responseType: services_billing_v1alpha4_defaults_pb.UpdateDefaultBillingPlanResponse
};

BillingService.CreateRateDefinition = {
  methodName: "CreateRateDefinition",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_plan_pb.CreateRateDefinitionRequest,
  responseType: services_billing_v1alpha4_plan_pb.CreateRateDefinitionResponse
};

BillingService.DeleteRateDefinition = {
  methodName: "DeleteRateDefinition",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_plan_pb.DeleteRateDefinitionRequest,
  responseType: services_billing_v1alpha4_plan_pb.DeleteRateDefinitionResponse
};

BillingService.GetRateDefinition = {
  methodName: "GetRateDefinition",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_plan_pb.GetRateDefinitionRequest,
  responseType: services_billing_v1alpha4_plan_pb.GetRateDefinitionResponse
};

BillingService.ListRateDefinitions = {
  methodName: "ListRateDefinitions",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_plan_pb.ListRateDefinitionsRequest,
  responseType: services_billing_v1alpha4_plan_pb.ListRateDefinitionsResponse
};

BillingService.UpdateRateDefinition = {
  methodName: "UpdateRateDefinition",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_plan_pb.UpdateRateDefinitionRequest,
  responseType: services_billing_v1alpha4_plan_pb.UpdateRateDefinitionResponse
};

BillingService.CreateDefaultRateDefinition = {
  methodName: "CreateDefaultRateDefinition",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_defaults_pb.CreateDefaultRateDefinitionRequest,
  responseType: services_billing_v1alpha4_defaults_pb.CreateDefaultRateDefinitionResponse
};

BillingService.DeleteDefaultRateDefinition = {
  methodName: "DeleteDefaultRateDefinition",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_defaults_pb.DeleteDefaultRateDefinitionRequest,
  responseType: services_billing_v1alpha4_defaults_pb.DeleteDefaultRateDefinitionResponse
};

BillingService.GetDefaultRateDefinition = {
  methodName: "GetDefaultRateDefinition",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_defaults_pb.GetDefaultRateDefinitionRequest,
  responseType: services_billing_v1alpha4_defaults_pb.GetDefaultRateDefinitionResponse
};

BillingService.ListDefaultRateDefinitions = {
  methodName: "ListDefaultRateDefinitions",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_defaults_pb.ListDefaultRateDefinitionsRequest,
  responseType: services_billing_v1alpha4_defaults_pb.ListDefaultRateDefinitionsResponse
};

BillingService.UpdateDefaultRateDefinition = {
  methodName: "UpdateDefaultRateDefinition",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_defaults_pb.UpdateDefaultRateDefinitionRequest,
  responseType: services_billing_v1alpha4_defaults_pb.UpdateDefaultRateDefinitionResponse
};

BillingService.CreateSku = {
  methodName: "CreateSku",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_sku_pb.CreateSkuRequest,
  responseType: services_billing_v1alpha4_sku_pb.CreateSkuResponse
};

BillingService.DeleteSku = {
  methodName: "DeleteSku",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_sku_pb.DeleteSkuRequest,
  responseType: services_billing_v1alpha4_sku_pb.DeleteSkuResponse
};

BillingService.GetSku = {
  methodName: "GetSku",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_sku_pb.GetSkuRequest,
  responseType: services_billing_v1alpha4_sku_pb.GetSkuResponse
};

BillingService.ListSkus = {
  methodName: "ListSkus",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_sku_pb.ListSkusRequest,
  responseType: services_billing_v1alpha4_sku_pb.ListSkusResponse
};

BillingService.UpdateSku = {
  methodName: "UpdateSku",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_sku_pb.UpdateSkuRequest,
  responseType: services_billing_v1alpha4_sku_pb.UpdateSkuResponse
};

BillingService.ExportInvoice = {
  methodName: "ExportInvoice",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_invoice_pb.ExportInvoiceRequest,
  responseType: services_billing_v1alpha4_invoice_pb.ExportInvoiceResponse
};

exports.BillingService = BillingService;

function BillingServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

BillingServiceClient.prototype.listProducts = function listProducts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.ListProducts, {
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

BillingServiceClient.prototype.applyBillingPlanDraft = function applyBillingPlanDraft(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.ApplyBillingPlanDraft, {
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

BillingServiceClient.prototype.applyDefaultBillingPlanDraft = function applyDefaultBillingPlanDraft(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.ApplyDefaultBillingPlanDraft, {
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

BillingServiceClient.prototype.createDefaultBillingPlan = function createDefaultBillingPlan(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.CreateDefaultBillingPlan, {
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

BillingServiceClient.prototype.deleteDefaultBillingPlan = function deleteDefaultBillingPlan(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.DeleteDefaultBillingPlan, {
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

BillingServiceClient.prototype.listDefaultBillingPlans = function listDefaultBillingPlans(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.ListDefaultBillingPlans, {
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

BillingServiceClient.prototype.getDefaultRateDefinition = function getDefaultRateDefinition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.GetDefaultRateDefinition, {
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

BillingServiceClient.prototype.listDefaultRateDefinitions = function listDefaultRateDefinitions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.ListDefaultRateDefinitions, {
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

BillingServiceClient.prototype.createSku = function createSku(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.CreateSku, {
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

BillingServiceClient.prototype.deleteSku = function deleteSku(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.DeleteSku, {
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

BillingServiceClient.prototype.getSku = function getSku(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.GetSku, {
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

BillingServiceClient.prototype.listSkus = function listSkus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.ListSkus, {
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

BillingServiceClient.prototype.updateSku = function updateSku(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.UpdateSku, {
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

exports.BillingServiceClient = BillingServiceClient;

