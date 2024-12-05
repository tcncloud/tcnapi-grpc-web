// package: services.org.hunt_groups.v1alpha1
// file: services/org/hunt_groups/v1alpha1/service.proto

var services_org_hunt_groups_v1alpha1_service_pb = require("../../../../services/org/hunt_groups/v1alpha1/service_pb");
var services_org_hunt_groups_v1alpha1_entities_pb = require("../../../../services/org/hunt_groups/v1alpha1/entities_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var HuntGroupsService = (function () {
  function HuntGroupsService() {}
  HuntGroupsService.serviceName = "services.org.hunt_groups.v1alpha1.HuntGroupsService";
  return HuntGroupsService;
}());

HuntGroupsService.ListHuntGroupExileLinks = {
  methodName: "ListHuntGroupExileLinks",
  service: HuntGroupsService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_hunt_groups_v1alpha1_entities_pb.ListHuntGroupExileLinksRequest,
  responseType: services_org_hunt_groups_v1alpha1_entities_pb.ListHuntGroupExileLinksResponse
};

HuntGroupsService.CopyHuntGroupExileLink = {
  methodName: "CopyHuntGroupExileLink",
  service: HuntGroupsService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_hunt_groups_v1alpha1_entities_pb.CopyHuntGroupExileLinkRequest,
  responseType: services_org_hunt_groups_v1alpha1_entities_pb.CopyHuntGroupExileLinkResponse
};

HuntGroupsService.UpdateHuntGroupExileLinks = {
  methodName: "UpdateHuntGroupExileLinks",
  service: HuntGroupsService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_hunt_groups_v1alpha1_entities_pb.UpdateHuntGroupExileLinksRequest,
  responseType: services_org_hunt_groups_v1alpha1_entities_pb.UpdateHuntGroupExileLinksResponse
};

HuntGroupsService.ListHuntGroupAgentTriggers = {
  methodName: "ListHuntGroupAgentTriggers",
  service: HuntGroupsService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_hunt_groups_v1alpha1_entities_pb.ListHuntGroupAgentTriggersRequest,
  responseType: services_org_hunt_groups_v1alpha1_entities_pb.ListHuntGroupAgentTriggersResponse
};

HuntGroupsService.CopyHuntGroupAgentTrigger = {
  methodName: "CopyHuntGroupAgentTrigger",
  service: HuntGroupsService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_hunt_groups_v1alpha1_entities_pb.CopyHuntGroupAgentTriggerRequest,
  responseType: services_org_hunt_groups_v1alpha1_entities_pb.CopyHuntGroupAgentTriggerResponse
};

HuntGroupsService.UpdateHuntGroupAgentTriggers = {
  methodName: "UpdateHuntGroupAgentTriggers",
  service: HuntGroupsService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_hunt_groups_v1alpha1_entities_pb.UpdateHuntGroupAgentTriggersRequest,
  responseType: services_org_hunt_groups_v1alpha1_entities_pb.UpdateHuntGroupAgentTriggersResponse
};

HuntGroupsService.CopyHuntGroupToOrganization = {
  methodName: "CopyHuntGroupToOrganization",
  service: HuntGroupsService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_hunt_groups_v1alpha1_entities_pb.CopyHuntGroupToOrganizationRequest,
  responseType: services_org_hunt_groups_v1alpha1_entities_pb.CopyHuntGroupToOrganizationResponse
};

HuntGroupsService.AdminCopyHuntGroupToOrganization = {
  methodName: "AdminCopyHuntGroupToOrganization",
  service: HuntGroupsService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_hunt_groups_v1alpha1_entities_pb.AdminCopyHuntGroupToOrganizationRequest,
  responseType: services_org_hunt_groups_v1alpha1_entities_pb.AdminCopyHuntGroupToOrganizationResponse
};

HuntGroupsService.AdminListHuntGroups = {
  methodName: "AdminListHuntGroups",
  service: HuntGroupsService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_hunt_groups_v1alpha1_entities_pb.AdminListHuntGroupsRequest,
  responseType: services_org_hunt_groups_v1alpha1_entities_pb.AdminListHuntGroupsResponse
};

HuntGroupsService.ListAgentScripts = {
  methodName: "ListAgentScripts",
  service: HuntGroupsService,
  requestStream: false,
  responseStream: true,
  requestType: services_org_hunt_groups_v1alpha1_entities_pb.ListAgentScriptsRequest,
  responseType: services_org_hunt_groups_v1alpha1_entities_pb.ListAgentScriptsResponse
};

HuntGroupsService.CreateAgentClientInfoDisplayTemplate = {
  methodName: "CreateAgentClientInfoDisplayTemplate",
  service: HuntGroupsService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_hunt_groups_v1alpha1_entities_pb.CreateAgentClientInfoDisplayTemplateRequest,
  responseType: services_org_hunt_groups_v1alpha1_entities_pb.CreateAgentClientInfoDisplayTemplateResponse
};

HuntGroupsService.UpdateAgentClientInfoDisplayTemplate = {
  methodName: "UpdateAgentClientInfoDisplayTemplate",
  service: HuntGroupsService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_hunt_groups_v1alpha1_entities_pb.UpdateAgentClientInfoDisplayTemplateRequest,
  responseType: services_org_hunt_groups_v1alpha1_entities_pb.UpdateAgentClientInfoDisplayTemplateResponse
};

HuntGroupsService.GetAgentClientInfoDisplayTemplate = {
  methodName: "GetAgentClientInfoDisplayTemplate",
  service: HuntGroupsService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_hunt_groups_v1alpha1_entities_pb.GetAgentClientInfoDisplayTemplateRequest,
  responseType: services_org_hunt_groups_v1alpha1_entities_pb.GetAgentClientInfoDisplayTemplateResponse
};

HuntGroupsService.ListAgentClientInfoDisplayTemplates = {
  methodName: "ListAgentClientInfoDisplayTemplates",
  service: HuntGroupsService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_hunt_groups_v1alpha1_entities_pb.ListAgentClientInfoDisplayTemplatesRequest,
  responseType: services_org_hunt_groups_v1alpha1_entities_pb.ListAgentClientInfoDisplayTemplatesResponse
};

HuntGroupsService.DeleteAgentClientInfoDisplayTemplate = {
  methodName: "DeleteAgentClientInfoDisplayTemplate",
  service: HuntGroupsService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_hunt_groups_v1alpha1_entities_pb.DeleteAgentClientInfoDisplayTemplateRequest,
  responseType: services_org_hunt_groups_v1alpha1_entities_pb.DeleteAgentClientInfoDisplayTemplateResponse
};

HuntGroupsService.AssignAgentClientInfoDisplayTemplateToHuntGroups = {
  methodName: "AssignAgentClientInfoDisplayTemplateToHuntGroups",
  service: HuntGroupsService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_hunt_groups_v1alpha1_entities_pb.AssignAgentClientInfoDisplayTemplateToHuntGroupsRequest,
  responseType: services_org_hunt_groups_v1alpha1_entities_pb.AssignAgentClientInfoDisplayTemplateToHuntGroupsResponse
};

HuntGroupsService.UnassignAgentClientInfoDisplayTemplateFromHuntGroups = {
  methodName: "UnassignAgentClientInfoDisplayTemplateFromHuntGroups",
  service: HuntGroupsService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_hunt_groups_v1alpha1_entities_pb.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsRequest,
  responseType: services_org_hunt_groups_v1alpha1_entities_pb.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsResponse
};

exports.HuntGroupsService = HuntGroupsService;

function HuntGroupsServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

HuntGroupsServiceClient.prototype.listHuntGroupExileLinks = function listHuntGroupExileLinks(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(HuntGroupsService.ListHuntGroupExileLinks, {
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

HuntGroupsServiceClient.prototype.copyHuntGroupExileLink = function copyHuntGroupExileLink(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(HuntGroupsService.CopyHuntGroupExileLink, {
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

HuntGroupsServiceClient.prototype.updateHuntGroupExileLinks = function updateHuntGroupExileLinks(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(HuntGroupsService.UpdateHuntGroupExileLinks, {
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

HuntGroupsServiceClient.prototype.listHuntGroupAgentTriggers = function listHuntGroupAgentTriggers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(HuntGroupsService.ListHuntGroupAgentTriggers, {
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

HuntGroupsServiceClient.prototype.copyHuntGroupAgentTrigger = function copyHuntGroupAgentTrigger(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(HuntGroupsService.CopyHuntGroupAgentTrigger, {
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

HuntGroupsServiceClient.prototype.updateHuntGroupAgentTriggers = function updateHuntGroupAgentTriggers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(HuntGroupsService.UpdateHuntGroupAgentTriggers, {
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

HuntGroupsServiceClient.prototype.copyHuntGroupToOrganization = function copyHuntGroupToOrganization(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(HuntGroupsService.CopyHuntGroupToOrganization, {
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

HuntGroupsServiceClient.prototype.adminCopyHuntGroupToOrganization = function adminCopyHuntGroupToOrganization(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(HuntGroupsService.AdminCopyHuntGroupToOrganization, {
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

HuntGroupsServiceClient.prototype.adminListHuntGroups = function adminListHuntGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(HuntGroupsService.AdminListHuntGroups, {
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

HuntGroupsServiceClient.prototype.listAgentScripts = function listAgentScripts(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(HuntGroupsService.ListAgentScripts, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

HuntGroupsServiceClient.prototype.createAgentClientInfoDisplayTemplate = function createAgentClientInfoDisplayTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(HuntGroupsService.CreateAgentClientInfoDisplayTemplate, {
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

HuntGroupsServiceClient.prototype.updateAgentClientInfoDisplayTemplate = function updateAgentClientInfoDisplayTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(HuntGroupsService.UpdateAgentClientInfoDisplayTemplate, {
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

HuntGroupsServiceClient.prototype.getAgentClientInfoDisplayTemplate = function getAgentClientInfoDisplayTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(HuntGroupsService.GetAgentClientInfoDisplayTemplate, {
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

HuntGroupsServiceClient.prototype.listAgentClientInfoDisplayTemplates = function listAgentClientInfoDisplayTemplates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(HuntGroupsService.ListAgentClientInfoDisplayTemplates, {
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

HuntGroupsServiceClient.prototype.deleteAgentClientInfoDisplayTemplate = function deleteAgentClientInfoDisplayTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(HuntGroupsService.DeleteAgentClientInfoDisplayTemplate, {
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

HuntGroupsServiceClient.prototype.assignAgentClientInfoDisplayTemplateToHuntGroups = function assignAgentClientInfoDisplayTemplateToHuntGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(HuntGroupsService.AssignAgentClientInfoDisplayTemplateToHuntGroups, {
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

HuntGroupsServiceClient.prototype.unassignAgentClientInfoDisplayTemplateFromHuntGroups = function unassignAgentClientInfoDisplayTemplateFromHuntGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(HuntGroupsService.UnassignAgentClientInfoDisplayTemplateFromHuntGroups, {
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

exports.HuntGroupsServiceClient = HuntGroupsServiceClient;

