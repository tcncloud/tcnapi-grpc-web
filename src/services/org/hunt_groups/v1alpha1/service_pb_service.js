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

HuntGroupsService.AdminCopyHuntGroupToOrganization = {
  methodName: "AdminCopyHuntGroupToOrganization",
  service: HuntGroupsService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_hunt_groups_v1alpha1_entities_pb.AdminCopyHuntGroupToOrganizationRequest,
  responseType: services_org_hunt_groups_v1alpha1_entities_pb.AdminCopyHuntGroupToOrganizationResponse
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

exports.HuntGroupsServiceClient = HuntGroupsServiceClient;

