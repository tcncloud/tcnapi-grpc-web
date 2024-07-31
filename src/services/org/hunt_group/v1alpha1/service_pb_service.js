// package: services.org.hunt_group.v1alpha1
// file: services/org/hunt_group/v1alpha1/service.proto

var services_org_hunt_group_v1alpha1_service_pb = require("../../../../services/org/hunt_group/v1alpha1/service_pb");
var services_org_hunt_group_v1alpha1_entities_pb = require("../../../../services/org/hunt_group/v1alpha1/entities_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var HuntGroupService = (function () {
  function HuntGroupService() {}
  HuntGroupService.serviceName = "services.org.hunt_group.v1alpha1.HuntGroupService";
  return HuntGroupService;
}());

HuntGroupService.ListHuntGroupExileLinks = {
  methodName: "ListHuntGroupExileLinks",
  service: HuntGroupService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_hunt_group_v1alpha1_entities_pb.ListHuntGroupExileLinksRequest,
  responseType: services_org_hunt_group_v1alpha1_entities_pb.ListHuntGroupExileLinksResponse
};

exports.HuntGroupService = HuntGroupService;

function HuntGroupServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

HuntGroupServiceClient.prototype.listHuntGroupExileLinks = function listHuntGroupExileLinks(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(HuntGroupService.ListHuntGroupExileLinks, {
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

exports.HuntGroupServiceClient = HuntGroupServiceClient;

