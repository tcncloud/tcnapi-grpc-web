// package: api.v1alpha1.integrations
// file: api/v1alpha1/integrations/portals.proto

var api_v1alpha1_integrations_portals_pb = require("../../../api/v1alpha1/integrations/portals_pb");
var api_v1alpha1_integrations_service_pb = require("../../../api/v1alpha1/integrations/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var PortalManagerApi = (function () {
  function PortalManagerApi() {}
  PortalManagerApi.serviceName = "api.v1alpha1.integrations.PortalManagerApi";
  return PortalManagerApi;
}());

PortalManagerApi.UpsertPortalConfig = {
  methodName: "UpsertPortalConfig",
  service: PortalManagerApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_portals_pb.UpsertPortalConfigReq,
  responseType: api_v1alpha1_integrations_portals_pb.UpsertPortalConfigRes
};

PortalManagerApi.ListPortalConfigs = {
  methodName: "ListPortalConfigs",
  service: PortalManagerApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.ListPortalConfigsReq,
  responseType: api_v1alpha1_integrations_portals_pb.ListPortalConfigsRes
};

PortalManagerApi.GetPortalConfig = {
  methodName: "GetPortalConfig",
  service: PortalManagerApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.GetPortalConfigReq,
  responseType: api_v1alpha1_integrations_portals_pb.GetPortalConfigRes
};

PortalManagerApi.DeletePortalConfig = {
  methodName: "DeletePortalConfig",
  service: PortalManagerApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_service_pb.DeletePortalConfigReq,
  responseType: api_v1alpha1_integrations_portals_pb.DeletePortalConfigRes
};

PortalManagerApi.UpdatePortalConfigLogo = {
  methodName: "UpdatePortalConfigLogo",
  service: PortalManagerApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_portals_pb.UpdatePortalConfigLogoReq,
  responseType: api_v1alpha1_integrations_portals_pb.UpdatePortalConfigLogoRes
};

PortalManagerApi.GetPortalConfigLogo = {
  methodName: "GetPortalConfigLogo",
  service: PortalManagerApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_portals_pb.GetPortalConfigLogoReq,
  responseType: api_v1alpha1_integrations_portals_pb.GetPortalConfigLogoRes
};

PortalManagerApi.ListPortalLinks = {
  methodName: "ListPortalLinks",
  service: PortalManagerApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_portals_pb.ListPortalLinksReq,
  responseType: api_v1alpha1_integrations_portals_pb.ListPortalLinksRes
};

PortalManagerApi.GetPortalLink = {
  methodName: "GetPortalLink",
  service: PortalManagerApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_portals_pb.GetPortalLinkReq,
  responseType: api_v1alpha1_integrations_portals_pb.GetPortalLinkRes
};

PortalManagerApi.DeletePortalLink = {
  methodName: "DeletePortalLink",
  service: PortalManagerApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_portals_pb.DeletePortalLinkReq,
  responseType: api_v1alpha1_integrations_portals_pb.DeletePortalLinkRes
};

PortalManagerApi.CreatePortalLinks = {
  methodName: "CreatePortalLinks",
  service: PortalManagerApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_portals_pb.CreatePortalLinksReq,
  responseType: api_v1alpha1_integrations_portals_pb.CreatePortalLinksRes
};

PortalManagerApi.UpsertPortal = {
  methodName: "UpsertPortal",
  service: PortalManagerApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_portals_pb.UpsertPortalReq,
  responseType: api_v1alpha1_integrations_portals_pb.UpsertPortalRes
};

PortalManagerApi.GetPortal = {
  methodName: "GetPortal",
  service: PortalManagerApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_portals_pb.GetPortalReq,
  responseType: api_v1alpha1_integrations_portals_pb.GetPortalRes
};

PortalManagerApi.DeletePortal = {
  methodName: "DeletePortal",
  service: PortalManagerApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_portals_pb.DeletePortalReq,
  responseType: api_v1alpha1_integrations_portals_pb.DeletePortalRes
};

PortalManagerApi.ListPortals = {
  methodName: "ListPortals",
  service: PortalManagerApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_portals_pb.ListPortalsReq,
  responseType: api_v1alpha1_integrations_portals_pb.ListPortalsRes
};

PortalManagerApi.ListDetailedPortals = {
  methodName: "ListDetailedPortals",
  service: PortalManagerApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_portals_pb.ListDetailedPortalsReq,
  responseType: api_v1alpha1_integrations_portals_pb.ListDetailedPortalsRes
};

PortalManagerApi.GetDetailedPortal = {
  methodName: "GetDetailedPortal",
  service: PortalManagerApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_portals_pb.GetDetailedPortalReq,
  responseType: api_v1alpha1_integrations_portals_pb.GetDetailedPortalRes
};

PortalManagerApi.UpsertPluginInstance = {
  methodName: "UpsertPluginInstance",
  service: PortalManagerApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_portals_pb.UpsertPluginInstanceReq,
  responseType: api_v1alpha1_integrations_portals_pb.UpsertPluginInstanceRes
};

PortalManagerApi.GetPluginInstance = {
  methodName: "GetPluginInstance",
  service: PortalManagerApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_portals_pb.GetPluginInstanceReq,
  responseType: api_v1alpha1_integrations_portals_pb.GetPluginInstanceRes
};

PortalManagerApi.DeletePluginInstance = {
  methodName: "DeletePluginInstance",
  service: PortalManagerApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_portals_pb.DeletePluginInstanceReq,
  responseType: api_v1alpha1_integrations_portals_pb.DeletePluginInstanceRes
};

PortalManagerApi.ListPluginInstance = {
  methodName: "ListPluginInstance",
  service: PortalManagerApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_portals_pb.ListPluginInstanceReq,
  responseType: api_v1alpha1_integrations_portals_pb.ListPluginInstanceRes
};

PortalManagerApi.ListFlowFieldNames = {
  methodName: "ListFlowFieldNames",
  service: PortalManagerApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_portals_pb.ListFlowFieldNamesReq,
  responseType: api_v1alpha1_integrations_portals_pb.ListFlowFieldNamesRes
};

PortalManagerApi.ListAvailableVerificationFields = {
  methodName: "ListAvailableVerificationFields",
  service: PortalManagerApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_portals_pb.ListAvailableVerificationFieldsReq,
  responseType: api_v1alpha1_integrations_portals_pb.ListAvailableVerificationFieldsRes
};

PortalManagerApi.ListAvailablePaymentFields = {
  methodName: "ListAvailablePaymentFields",
  service: PortalManagerApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_portals_pb.ListAvailablePaymentFieldsReq,
  responseType: api_v1alpha1_integrations_portals_pb.ListAvailablePaymentFieldsRes
};

PortalManagerApi.ListPortalTypes = {
  methodName: "ListPortalTypes",
  service: PortalManagerApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_portals_pb.ListPortalTypesReq,
  responseType: api_v1alpha1_integrations_portals_pb.ListPortalTypesResponse
};

PortalManagerApi.ListPortalWorkflows = {
  methodName: "ListPortalWorkflows",
  service: PortalManagerApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_portals_pb.ListPortalWorkflowsReq,
  responseType: api_v1alpha1_integrations_portals_pb.ListPortalWorkflowsResponse
};

PortalManagerApi.ListAllActionDefinitions = {
  methodName: "ListAllActionDefinitions",
  service: PortalManagerApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_portals_pb.ListAllActionDefinitionsReq,
  responseType: api_v1alpha1_integrations_portals_pb.ListAllActionDefinitionsResponse
};

PortalManagerApi.ListPluginsByMethod = {
  methodName: "ListPluginsByMethod",
  service: PortalManagerApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_integrations_portals_pb.ListPluginsByMethodReq,
  responseType: api_v1alpha1_integrations_portals_pb.ListPluginsByMethodRes
};

exports.PortalManagerApi = PortalManagerApi;

function PortalManagerApiClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

PortalManagerApiClient.prototype.upsertPortalConfig = function upsertPortalConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PortalManagerApi.UpsertPortalConfig, {
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

PortalManagerApiClient.prototype.listPortalConfigs = function listPortalConfigs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PortalManagerApi.ListPortalConfigs, {
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

PortalManagerApiClient.prototype.getPortalConfig = function getPortalConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PortalManagerApi.GetPortalConfig, {
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

PortalManagerApiClient.prototype.deletePortalConfig = function deletePortalConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PortalManagerApi.DeletePortalConfig, {
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

PortalManagerApiClient.prototype.updatePortalConfigLogo = function updatePortalConfigLogo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PortalManagerApi.UpdatePortalConfigLogo, {
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

PortalManagerApiClient.prototype.getPortalConfigLogo = function getPortalConfigLogo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PortalManagerApi.GetPortalConfigLogo, {
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

PortalManagerApiClient.prototype.listPortalLinks = function listPortalLinks(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PortalManagerApi.ListPortalLinks, {
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

PortalManagerApiClient.prototype.getPortalLink = function getPortalLink(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PortalManagerApi.GetPortalLink, {
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

PortalManagerApiClient.prototype.deletePortalLink = function deletePortalLink(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PortalManagerApi.DeletePortalLink, {
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

PortalManagerApiClient.prototype.createPortalLinks = function createPortalLinks(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PortalManagerApi.CreatePortalLinks, {
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

PortalManagerApiClient.prototype.upsertPortal = function upsertPortal(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PortalManagerApi.UpsertPortal, {
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

PortalManagerApiClient.prototype.getPortal = function getPortal(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PortalManagerApi.GetPortal, {
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

PortalManagerApiClient.prototype.deletePortal = function deletePortal(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PortalManagerApi.DeletePortal, {
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

PortalManagerApiClient.prototype.listPortals = function listPortals(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PortalManagerApi.ListPortals, {
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

PortalManagerApiClient.prototype.listDetailedPortals = function listDetailedPortals(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PortalManagerApi.ListDetailedPortals, {
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

PortalManagerApiClient.prototype.getDetailedPortal = function getDetailedPortal(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PortalManagerApi.GetDetailedPortal, {
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

PortalManagerApiClient.prototype.upsertPluginInstance = function upsertPluginInstance(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PortalManagerApi.UpsertPluginInstance, {
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

PortalManagerApiClient.prototype.getPluginInstance = function getPluginInstance(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PortalManagerApi.GetPluginInstance, {
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

PortalManagerApiClient.prototype.deletePluginInstance = function deletePluginInstance(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PortalManagerApi.DeletePluginInstance, {
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

PortalManagerApiClient.prototype.listPluginInstance = function listPluginInstance(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PortalManagerApi.ListPluginInstance, {
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

PortalManagerApiClient.prototype.listFlowFieldNames = function listFlowFieldNames(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PortalManagerApi.ListFlowFieldNames, {
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

PortalManagerApiClient.prototype.listAvailableVerificationFields = function listAvailableVerificationFields(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PortalManagerApi.ListAvailableVerificationFields, {
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

PortalManagerApiClient.prototype.listAvailablePaymentFields = function listAvailablePaymentFields(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PortalManagerApi.ListAvailablePaymentFields, {
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

PortalManagerApiClient.prototype.listPortalTypes = function listPortalTypes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PortalManagerApi.ListPortalTypes, {
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

PortalManagerApiClient.prototype.listPortalWorkflows = function listPortalWorkflows(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PortalManagerApi.ListPortalWorkflows, {
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

PortalManagerApiClient.prototype.listAllActionDefinitions = function listAllActionDefinitions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PortalManagerApi.ListAllActionDefinitions, {
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

PortalManagerApiClient.prototype.listPluginsByMethod = function listPluginsByMethod(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PortalManagerApi.ListPluginsByMethod, {
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

exports.PortalManagerApiClient = PortalManagerApiClient;

