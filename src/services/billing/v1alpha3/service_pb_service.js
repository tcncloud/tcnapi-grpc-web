// package: services.billing.v1alpha3
// file: services/billing/v1alpha3/service.proto

var services_billing_v1alpha3_service_pb = require("../../../services/billing/v1alpha3/service_pb");
var services_billing_v1alpha3_draft_pb = require("../../../services/billing/v1alpha3/draft_pb");
var services_billing_v1alpha3_invoice_pb = require("../../../services/billing/v1alpha3/invoice_pb");
var services_billing_v1alpha3_plan_pb = require("../../../services/billing/v1alpha3/plan_pb");
var services_billing_v1alpha3_rate_definition_pb = require("../../../services/billing/v1alpha3/rate_definition_pb");
var services_billing_v1alpha3_rating_module_pb = require("../../../services/billing/v1alpha3/rating_module_pb");
var services_billing_v1alpha3_sku_pb = require("../../../services/billing/v1alpha3/sku_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var BillingService = (function () {
  function BillingService() {}
  BillingService.serviceName = "services.billing.v1alpha3.BillingService";
  return BillingService;
}());

BillingService.ListRatingModules = {
  methodName: "ListRatingModules",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha3_rating_module_pb.ListRatingModulesRequest,
  responseType: services_billing_v1alpha3_rating_module_pb.ListRatingModulesResponse
};

BillingService.CreateSku = {
  methodName: "CreateSku",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha3_sku_pb.CreateSkuRequest,
  responseType: services_billing_v1alpha3_sku_pb.CreateSkuResponse
};

BillingService.DeleteSku = {
  methodName: "DeleteSku",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha3_sku_pb.DeleteSkuRequest,
  responseType: services_billing_v1alpha3_sku_pb.DeleteSkuResponse
};

BillingService.GetSku = {
  methodName: "GetSku",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha3_sku_pb.GetSkuRequest,
  responseType: services_billing_v1alpha3_sku_pb.GetSkuResponse
};

BillingService.ListSkus = {
  methodName: "ListSkus",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha3_sku_pb.ListSkusRequest,
  responseType: services_billing_v1alpha3_sku_pb.ListSkusResponse
};

BillingService.UpdateSku = {
  methodName: "UpdateSku",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha3_sku_pb.UpdateSkuRequest,
  responseType: services_billing_v1alpha3_sku_pb.UpdateSkuResponse
};

BillingService.CreatePlan = {
  methodName: "CreatePlan",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha3_plan_pb.CreatePlanRequest,
  responseType: services_billing_v1alpha3_plan_pb.CreatePlanResponse
};

BillingService.GetPlanChangelog = {
  methodName: "GetPlanChangelog",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha3_plan_pb.GetPlanChangelogRequest,
  responseType: services_billing_v1alpha3_plan_pb.GetPlanChangelogResponse
};

BillingService.ListPlans = {
  methodName: "ListPlans",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha3_plan_pb.ListPlansRequest,
  responseType: services_billing_v1alpha3_plan_pb.ListPlansResponse
};

BillingService.ApplyDraft = {
  methodName: "ApplyDraft",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha3_draft_pb.ApplyDraftRequest,
  responseType: services_billing_v1alpha3_draft_pb.ApplyDraftResponse
};

BillingService.ApplyTemplateDraft = {
  methodName: "ApplyTemplateDraft",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha3_draft_pb.ApplyTemplateDraftRequest,
  responseType: services_billing_v1alpha3_draft_pb.ApplyTemplateDraftResponse
};

BillingService.CreateDraft = {
  methodName: "CreateDraft",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha3_draft_pb.CreateDraftRequest,
  responseType: services_billing_v1alpha3_draft_pb.CreateDraftResponse
};

BillingService.CreateTemplateDraft = {
  methodName: "CreateTemplateDraft",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha3_draft_pb.CreateTemplateDraftRequest,
  responseType: services_billing_v1alpha3_draft_pb.CreateTemplateDraftResponse
};

BillingService.DeleteDraft = {
  methodName: "DeleteDraft",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha3_draft_pb.DeleteDraftRequest,
  responseType: services_billing_v1alpha3_draft_pb.DeleteDraftResponse
};

BillingService.DeleteTemplateDraft = {
  methodName: "DeleteTemplateDraft",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha3_draft_pb.DeleteTemplateDraftRequest,
  responseType: services_billing_v1alpha3_draft_pb.DeleteTemplateDraftResponse
};

BillingService.GetDraft = {
  methodName: "GetDraft",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha3_draft_pb.GetDraftRequest,
  responseType: services_billing_v1alpha3_draft_pb.GetDraftResponse
};

BillingService.GetTemplateDraft = {
  methodName: "GetTemplateDraft",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha3_draft_pb.GetTemplateDraftRequest,
  responseType: services_billing_v1alpha3_draft_pb.GetTemplateDraftResponse
};

BillingService.ListDrafts = {
  methodName: "ListDrafts",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha3_draft_pb.ListDraftsRequest,
  responseType: services_billing_v1alpha3_draft_pb.ListDraftsResponse
};

BillingService.ListTemplateDrafts = {
  methodName: "ListTemplateDrafts",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha3_draft_pb.ListTemplateDraftsRequest,
  responseType: services_billing_v1alpha3_draft_pb.ListTemplateDraftsResponse
};

BillingService.UpdateDraft = {
  methodName: "UpdateDraft",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha3_draft_pb.UpdateDraftRequest,
  responseType: services_billing_v1alpha3_draft_pb.UpdateDraftResponse
};

BillingService.UpdateTemplateDraft = {
  methodName: "UpdateTemplateDraft",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha3_draft_pb.UpdateTemplateDraftRequest,
  responseType: services_billing_v1alpha3_draft_pb.UpdateTemplateDraftResponse
};

BillingService.CreateRateDefinition = {
  methodName: "CreateRateDefinition",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha3_rate_definition_pb.CreateRateDefinitionRequest,
  responseType: services_billing_v1alpha3_rate_definition_pb.CreateRateDefinitionResponse
};

BillingService.CreateTemplateRateDefinition = {
  methodName: "CreateTemplateRateDefinition",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha3_rate_definition_pb.CreateTemplateRateDefinitionRequest,
  responseType: services_billing_v1alpha3_rate_definition_pb.CreateTemplateRateDefinitionResponse
};

BillingService.DeleteRateDefinition = {
  methodName: "DeleteRateDefinition",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha3_rate_definition_pb.DeleteRateDefinitionRequest,
  responseType: services_billing_v1alpha3_rate_definition_pb.DeleteRateDefinitionResponse
};

BillingService.DeleteTemplateRateDefinition = {
  methodName: "DeleteTemplateRateDefinition",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha3_rate_definition_pb.DeleteTemplateRateDefinitionRequest,
  responseType: services_billing_v1alpha3_rate_definition_pb.DeleteTemplateRateDefinitionResponse
};

BillingService.GetRateDefinition = {
  methodName: "GetRateDefinition",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha3_rate_definition_pb.GetRateDefinitionRequest,
  responseType: services_billing_v1alpha3_rate_definition_pb.GetRateDefinitionResponse
};

BillingService.ListRateDefinitions = {
  methodName: "ListRateDefinitions",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha3_rate_definition_pb.ListRateDefinitionsRequest,
  responseType: services_billing_v1alpha3_rate_definition_pb.ListRateDefinitionsResponse
};

BillingService.UpdateRateDefinition = {
  methodName: "UpdateRateDefinition",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha3_rate_definition_pb.UpdateRateDefinitionRequest,
  responseType: services_billing_v1alpha3_rate_definition_pb.UpdateRateDefinitionResponse
};

BillingService.UpdateTemplateRateDefinition = {
  methodName: "UpdateTemplateRateDefinition",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha3_rate_definition_pb.UpdateTemplateRateDefinitionRequest,
  responseType: services_billing_v1alpha3_rate_definition_pb.UpdateTemplateRateDefinitionResponse
};

BillingService.ExportInvoice = {
  methodName: "ExportInvoice",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha3_invoice_pb.ExportInvoiceRequest,
  responseType: services_billing_v1alpha3_invoice_pb.ExportInvoiceResponse
};

exports.BillingService = BillingService;

function BillingServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

BillingServiceClient.prototype.listRatingModules = function listRatingModules(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.ListRatingModules, {
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

BillingServiceClient.prototype.createPlan = function createPlan(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.CreatePlan, {
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

BillingServiceClient.prototype.getPlanChangelog = function getPlanChangelog(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.GetPlanChangelog, {
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

BillingServiceClient.prototype.listPlans = function listPlans(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.ListPlans, {
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

BillingServiceClient.prototype.applyDraft = function applyDraft(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.ApplyDraft, {
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

BillingServiceClient.prototype.applyTemplateDraft = function applyTemplateDraft(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.ApplyTemplateDraft, {
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

BillingServiceClient.prototype.createDraft = function createDraft(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.CreateDraft, {
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

BillingServiceClient.prototype.createTemplateDraft = function createTemplateDraft(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.CreateTemplateDraft, {
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

BillingServiceClient.prototype.deleteDraft = function deleteDraft(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.DeleteDraft, {
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

BillingServiceClient.prototype.deleteTemplateDraft = function deleteTemplateDraft(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.DeleteTemplateDraft, {
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

BillingServiceClient.prototype.getDraft = function getDraft(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.GetDraft, {
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

BillingServiceClient.prototype.getTemplateDraft = function getTemplateDraft(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.GetTemplateDraft, {
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

BillingServiceClient.prototype.listDrafts = function listDrafts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.ListDrafts, {
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

BillingServiceClient.prototype.listTemplateDrafts = function listTemplateDrafts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.ListTemplateDrafts, {
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

BillingServiceClient.prototype.updateDraft = function updateDraft(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.UpdateDraft, {
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

BillingServiceClient.prototype.updateTemplateDraft = function updateTemplateDraft(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.UpdateTemplateDraft, {
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

BillingServiceClient.prototype.createTemplateRateDefinition = function createTemplateRateDefinition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.CreateTemplateRateDefinition, {
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

BillingServiceClient.prototype.deleteTemplateRateDefinition = function deleteTemplateRateDefinition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.DeleteTemplateRateDefinition, {
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

BillingServiceClient.prototype.updateTemplateRateDefinition = function updateTemplateRateDefinition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.UpdateTemplateRateDefinition, {
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

