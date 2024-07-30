// package: services.billing.v1alpha4
// file: services/billing/v1alpha4/service.proto

var services_billing_v1alpha4_service_pb = require("../../../services/billing/v1alpha4/service_pb");
var services_billing_v1alpha4_defaults_pb = require("../../../services/billing/v1alpha4/defaults_pb");
var services_billing_v1alpha4_invoice_pb = require("../../../services/billing/v1alpha4/invoice_pb");
var services_billing_v1alpha4_matching_rule_pb = require("../../../services/billing/v1alpha4/matching_rule_pb");
var services_billing_v1alpha4_plan_pb = require("../../../services/billing/v1alpha4/plan_pb");
var services_billing_v1alpha4_tag_pb = require("../../../services/billing/v1alpha4/tag_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var BillingService = (function () {
  function BillingService() {}
  BillingService.serviceName = "services.billing.v1alpha4.BillingService";
  return BillingService;
}());

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

BillingService.CreateMatchingRule = {
  methodName: "CreateMatchingRule",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_matching_rule_pb.CreateMatchingRuleRequest,
  responseType: services_billing_v1alpha4_matching_rule_pb.CreateMatchingRuleResponse
};

BillingService.DeleteMatchingRule = {
  methodName: "DeleteMatchingRule",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_matching_rule_pb.DeleteMatchingRuleRequest,
  responseType: services_billing_v1alpha4_matching_rule_pb.DeleteMatchingRuleResponse
};

BillingService.GetMatchingRule = {
  methodName: "GetMatchingRule",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_matching_rule_pb.GetMatchingRuleRequest,
  responseType: services_billing_v1alpha4_matching_rule_pb.GetMatchingRuleResponse
};

BillingService.ListMatchingRules = {
  methodName: "ListMatchingRules",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_matching_rule_pb.ListMatchingRulesRequest,
  responseType: services_billing_v1alpha4_matching_rule_pb.ListMatchingRulesResponse
};

BillingService.UpdateMatchingRule = {
  methodName: "UpdateMatchingRule",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_matching_rule_pb.UpdateMatchingRuleRequest,
  responseType: services_billing_v1alpha4_matching_rule_pb.UpdateMatchingRuleResponse
};

BillingService.CreateBillingTag = {
  methodName: "CreateBillingTag",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_tag_pb.CreateBillingTagRequest,
  responseType: services_billing_v1alpha4_tag_pb.CreateBillingTagResponse
};

BillingService.DeleteBillingTag = {
  methodName: "DeleteBillingTag",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_tag_pb.DeleteBillingTagRequest,
  responseType: services_billing_v1alpha4_tag_pb.DeleteBillingTagResponse
};

BillingService.GetBillingTag = {
  methodName: "GetBillingTag",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_tag_pb.GetBillingTagRequest,
  responseType: services_billing_v1alpha4_tag_pb.GetBillingTagResponse
};

BillingService.ListBillingTags = {
  methodName: "ListBillingTags",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_tag_pb.ListBillingTagsRequest,
  responseType: services_billing_v1alpha4_tag_pb.ListBillingTagsResponse
};

BillingService.UpdateBillingTag = {
  methodName: "UpdateBillingTag",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: services_billing_v1alpha4_tag_pb.UpdateBillingTagRequest,
  responseType: services_billing_v1alpha4_tag_pb.UpdateBillingTagResponse
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

BillingServiceClient.prototype.createMatchingRule = function createMatchingRule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.CreateMatchingRule, {
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

BillingServiceClient.prototype.deleteMatchingRule = function deleteMatchingRule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.DeleteMatchingRule, {
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

BillingServiceClient.prototype.getMatchingRule = function getMatchingRule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.GetMatchingRule, {
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

BillingServiceClient.prototype.listMatchingRules = function listMatchingRules(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.ListMatchingRules, {
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

BillingServiceClient.prototype.updateMatchingRule = function updateMatchingRule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.UpdateMatchingRule, {
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

BillingServiceClient.prototype.createBillingTag = function createBillingTag(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.CreateBillingTag, {
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

BillingServiceClient.prototype.deleteBillingTag = function deleteBillingTag(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.DeleteBillingTag, {
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

BillingServiceClient.prototype.getBillingTag = function getBillingTag(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.GetBillingTag, {
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

BillingServiceClient.prototype.listBillingTags = function listBillingTags(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.ListBillingTags, {
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

BillingServiceClient.prototype.updateBillingTag = function updateBillingTag(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.UpdateBillingTag, {
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

