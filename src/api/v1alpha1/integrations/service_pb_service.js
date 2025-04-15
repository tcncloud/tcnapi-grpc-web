// package: api.v1alpha1.integrations
// file: api/v1alpha1/integrations/service.proto

var api_v1alpha1_integrations_service_pb = require("../../../api/v1alpha1/integrations/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Integrations = (function () {
  function Integrations() {}
  Integrations.serviceName = "api.v1alpha1.integrations.Integrations";
  return Integrations;
}());

Integrations.Process = {
  methodName: "Process",
  service: Integrations,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.ProcessReq,
  responseType: api_v1alpha1_integrations_service_pb.ProcessRes
};

Integrations.GetIntegrationTransaction = {
  methodName: "GetIntegrationTransaction",
  service: Integrations,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.GetIntegrationTransactionReq,
  responseType: api_v1alpha1_integrations_service_pb.IntegrationTransaction
};

Integrations.GetIntegrationTransactionReport = {
  methodName: "GetIntegrationTransactionReport",
  service: Integrations,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.GetIntegrationTransactionReportReq,
  responseType: api_v1alpha1_integrations_service_pb.GetIntegrationTransactionReportRes
};

Integrations.GetIntegrationTransactionReportData = {
  methodName: "GetIntegrationTransactionReportData",
  service: Integrations,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.GetIntegrationTransactionReportDataReq,
  responseType: api_v1alpha1_integrations_service_pb.GetIntegrationTransactionReportDataRes
};

Integrations.SearchPastTransactions = {
  methodName: "SearchPastTransactions",
  service: Integrations,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.SearchPastTransactionsRequest,
  responseType: api_v1alpha1_integrations_service_pb.SearchPastTransactionsResponse
};

Integrations.GetAggregatedMetadata = {
  methodName: "GetAggregatedMetadata",
  service: Integrations,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.GetAggregatedMetadataReq,
  responseType: api_v1alpha1_integrations_service_pb.GetAggregatedMetadataRes
};

Integrations.GetPortalLinksByDateRange = {
  methodName: "GetPortalLinksByDateRange",
  service: Integrations,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.GetPortalLinksByDateRangeReq,
  responseType: api_v1alpha1_integrations_service_pb.GetPortalLinksByDateRangeRes
};

Integrations.CreateIntegrationConfig = {
  methodName: "CreateIntegrationConfig",
  service: Integrations,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.IntegrationConfig,
  responseType: api_v1alpha1_integrations_service_pb.Empty
};

Integrations.GetIntegrationConfig = {
  methodName: "GetIntegrationConfig",
  service: Integrations,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.GetIntegrationConfigReq,
  responseType: api_v1alpha1_integrations_service_pb.IntegrationConfig
};

Integrations.UpdateIntegrationConfig = {
  methodName: "UpdateIntegrationConfig",
  service: Integrations,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.UpdateIntegrationConfigReq,
  responseType: api_v1alpha1_integrations_service_pb.Empty
};

Integrations.DeleteIntegrationConfig = {
  methodName: "DeleteIntegrationConfig",
  service: Integrations,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.DeleteIntegrationConfigReq,
  responseType: api_v1alpha1_integrations_service_pb.Empty
};

Integrations.ListIntegrations = {
  methodName: "ListIntegrations",
  service: Integrations,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.Empty,
  responseType: api_v1alpha1_integrations_service_pb.IntegrationInfos
};

Integrations.ListIntegrationsForOrg = {
  methodName: "ListIntegrationsForOrg",
  service: Integrations,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.ListIntegrationsForOrgReq,
  responseType: api_v1alpha1_integrations_service_pb.IntegrationInfos
};

Integrations.ListIntegrationConfigNames = {
  methodName: "ListIntegrationConfigNames",
  service: Integrations,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.ListIntegrationConfigNamesReq,
  responseType: api_v1alpha1_integrations_service_pb.ListIntegrationConfigNamesRes
};

Integrations.ListJourneyConfigs = {
  methodName: "ListJourneyConfigs",
  service: Integrations,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.ListJourneyConfigsReq,
  responseType: api_v1alpha1_integrations_service_pb.IntegrationConfigs
};

Integrations.ListNonJourneyConfigs = {
  methodName: "ListNonJourneyConfigs",
  service: Integrations,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.ListNonJourneyConfigsReq,
  responseType: api_v1alpha1_integrations_service_pb.IntegrationConfigs
};

Integrations.CreatePortalConfig = {
  methodName: "CreatePortalConfig",
  service: Integrations,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.PortalConfig,
  responseType: api_v1alpha1_integrations_service_pb.Empty
};

Integrations.ListPortalConfigs = {
  methodName: "ListPortalConfigs",
  service: Integrations,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.ListPortalConfigsReq,
  responseType: api_v1alpha1_integrations_service_pb.PortalConfigs
};

Integrations.UpdatePortalConfig = {
  methodName: "UpdatePortalConfig",
  service: Integrations,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.PortalConfig,
  responseType: api_v1alpha1_integrations_service_pb.Empty
};

Integrations.GetPortalConfig = {
  methodName: "GetPortalConfig",
  service: Integrations,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.GetPortalConfigReq,
  responseType: api_v1alpha1_integrations_service_pb.PortalConfig
};

Integrations.DeletePortalConfig = {
  methodName: "DeletePortalConfig",
  service: Integrations,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.DeletePortalConfigReq,
  responseType: api_v1alpha1_integrations_service_pb.Empty
};

Integrations.UpdatePortalLogo = {
  methodName: "UpdatePortalLogo",
  service: Integrations,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.UpdatePortalLogoReq,
  responseType: api_v1alpha1_integrations_service_pb.Empty
};

Integrations.GetPortalLogo = {
  methodName: "GetPortalLogo",
  service: Integrations,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.GetPortalLogoReq,
  responseType: api_v1alpha1_integrations_service_pb.Logo
};

Integrations.CreatePaymentPortalLinks = {
  methodName: "CreatePaymentPortalLinks",
  service: Integrations,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.CreatePaymentPortalLinksReq,
  responseType: api_v1alpha1_integrations_service_pb.CreatePaymentPortalLinksRes
};

Integrations.Summary = {
  methodName: "Summary",
  service: Integrations,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.SummaryReq,
  responseType: api_v1alpha1_integrations_service_pb.SummaryRes
};

Integrations.ListIntegrationTemplatesByConfig = {
  methodName: "ListIntegrationTemplatesByConfig",
  service: Integrations,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.ListIntegrationTemplatesByConfigReq,
  responseType: api_v1alpha1_integrations_service_pb.ListIntegrationTemplatesByConfigRes
};

Integrations.CallEpicPatient = {
  methodName: "CallEpicPatient",
  service: Integrations,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.CallEpicPatientReq,
  responseType: api_v1alpha1_integrations_service_pb.CallEpicPatientRes
};

Integrations.HangUpEpicPatientCall = {
  methodName: "HangUpEpicPatientCall",
  service: Integrations,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.HangUpEpicPatientCallReq,
  responseType: api_v1alpha1_integrations_service_pb.Empty
};

Integrations.GenerateEpicKeyPairs = {
  methodName: "GenerateEpicKeyPairs",
  service: Integrations,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.GenerateEpicKeyPairReq,
  responseType: api_v1alpha1_integrations_service_pb.GenerateEpicKeyPairRes
};

Integrations.PopulateIntegrationLink = {
  methodName: "PopulateIntegrationLink",
  service: Integrations,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.PopulateIntegrationLinkReq,
  responseType: api_v1alpha1_integrations_service_pb.PopulateIntegrationLinkRes
};

Integrations.ProcessWorkflow = {
  methodName: "ProcessWorkflow",
  service: Integrations,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.ProcessWorkflowReq,
  responseType: api_v1alpha1_integrations_service_pb.ProcessWorkflowRes
};

Integrations.InsertPrivateField = {
  methodName: "InsertPrivateField",
  service: Integrations,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.InsertPrivateFieldReq,
  responseType: api_v1alpha1_integrations_service_pb.InsertPrivateFieldRes
};

Integrations.CalculateFees = {
  methodName: "CalculateFees",
  service: Integrations,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.CalculateFeesReq,
  responseType: api_v1alpha1_integrations_service_pb.CalculateFeesRes
};

Integrations.GetIntegrationSettings = {
  methodName: "GetIntegrationSettings",
  service: Integrations,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.GetIntegrationSettingsReq,
  responseType: api_v1alpha1_integrations_service_pb.GetIntegrationSettingsRes
};

Integrations.UpsertIntegrationSettings = {
  methodName: "UpsertIntegrationSettings",
  service: Integrations,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.UpsertIntegrationSettingsReq,
  responseType: api_v1alpha1_integrations_service_pb.UpsertIntegrationSettingsRes
};

Integrations.DeliverReceipt = {
  methodName: "DeliverReceipt",
  service: Integrations,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.DeliverReceiptReq,
  responseType: api_v1alpha1_integrations_service_pb.DeliverReceiptRes
};

exports.Integrations = Integrations;

function IntegrationsClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

IntegrationsClient.prototype.process = function process(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Integrations.Process, {
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

IntegrationsClient.prototype.getIntegrationTransaction = function getIntegrationTransaction(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Integrations.GetIntegrationTransaction, {
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

IntegrationsClient.prototype.getIntegrationTransactionReport = function getIntegrationTransactionReport(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Integrations.GetIntegrationTransactionReport, {
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

IntegrationsClient.prototype.getIntegrationTransactionReportData = function getIntegrationTransactionReportData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Integrations.GetIntegrationTransactionReportData, {
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

IntegrationsClient.prototype.searchPastTransactions = function searchPastTransactions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Integrations.SearchPastTransactions, {
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

IntegrationsClient.prototype.getAggregatedMetadata = function getAggregatedMetadata(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Integrations.GetAggregatedMetadata, {
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

IntegrationsClient.prototype.getPortalLinksByDateRange = function getPortalLinksByDateRange(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Integrations.GetPortalLinksByDateRange, {
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

IntegrationsClient.prototype.createIntegrationConfig = function createIntegrationConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Integrations.CreateIntegrationConfig, {
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

IntegrationsClient.prototype.getIntegrationConfig = function getIntegrationConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Integrations.GetIntegrationConfig, {
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

IntegrationsClient.prototype.updateIntegrationConfig = function updateIntegrationConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Integrations.UpdateIntegrationConfig, {
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

IntegrationsClient.prototype.deleteIntegrationConfig = function deleteIntegrationConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Integrations.DeleteIntegrationConfig, {
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

IntegrationsClient.prototype.listIntegrations = function listIntegrations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Integrations.ListIntegrations, {
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

IntegrationsClient.prototype.listIntegrationsForOrg = function listIntegrationsForOrg(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Integrations.ListIntegrationsForOrg, {
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

IntegrationsClient.prototype.listIntegrationConfigNames = function listIntegrationConfigNames(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Integrations.ListIntegrationConfigNames, {
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

IntegrationsClient.prototype.listJourneyConfigs = function listJourneyConfigs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Integrations.ListJourneyConfigs, {
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

IntegrationsClient.prototype.listNonJourneyConfigs = function listNonJourneyConfigs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Integrations.ListNonJourneyConfigs, {
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

IntegrationsClient.prototype.createPortalConfig = function createPortalConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Integrations.CreatePortalConfig, {
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

IntegrationsClient.prototype.listPortalConfigs = function listPortalConfigs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Integrations.ListPortalConfigs, {
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

IntegrationsClient.prototype.updatePortalConfig = function updatePortalConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Integrations.UpdatePortalConfig, {
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

IntegrationsClient.prototype.getPortalConfig = function getPortalConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Integrations.GetPortalConfig, {
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

IntegrationsClient.prototype.deletePortalConfig = function deletePortalConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Integrations.DeletePortalConfig, {
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

IntegrationsClient.prototype.updatePortalLogo = function updatePortalLogo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Integrations.UpdatePortalLogo, {
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

IntegrationsClient.prototype.getPortalLogo = function getPortalLogo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Integrations.GetPortalLogo, {
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

IntegrationsClient.prototype.createPaymentPortalLinks = function createPaymentPortalLinks(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Integrations.CreatePaymentPortalLinks, {
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

IntegrationsClient.prototype.summary = function summary(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Integrations.Summary, {
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

IntegrationsClient.prototype.listIntegrationTemplatesByConfig = function listIntegrationTemplatesByConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Integrations.ListIntegrationTemplatesByConfig, {
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

IntegrationsClient.prototype.callEpicPatient = function callEpicPatient(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Integrations.CallEpicPatient, {
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

IntegrationsClient.prototype.hangUpEpicPatientCall = function hangUpEpicPatientCall(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Integrations.HangUpEpicPatientCall, {
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

IntegrationsClient.prototype.generateEpicKeyPairs = function generateEpicKeyPairs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Integrations.GenerateEpicKeyPairs, {
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

IntegrationsClient.prototype.populateIntegrationLink = function populateIntegrationLink(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Integrations.PopulateIntegrationLink, {
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

IntegrationsClient.prototype.processWorkflow = function processWorkflow(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Integrations.ProcessWorkflow, {
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

IntegrationsClient.prototype.insertPrivateField = function insertPrivateField(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Integrations.InsertPrivateField, {
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

IntegrationsClient.prototype.calculateFees = function calculateFees(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Integrations.CalculateFees, {
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

IntegrationsClient.prototype.getIntegrationSettings = function getIntegrationSettings(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Integrations.GetIntegrationSettings, {
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

IntegrationsClient.prototype.upsertIntegrationSettings = function upsertIntegrationSettings(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Integrations.UpsertIntegrationSettings, {
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

IntegrationsClient.prototype.deliverReceipt = function deliverReceipt(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Integrations.DeliverReceipt, {
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

exports.IntegrationsClient = IntegrationsClient;

