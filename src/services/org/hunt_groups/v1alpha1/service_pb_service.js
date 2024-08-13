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

exports.HuntGroupsServiceClient = HuntGroupsServiceClient;

