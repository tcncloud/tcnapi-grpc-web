// package: api.v1alpha1.org.legacy
// file: api/v1alpha1/org/legacy/service.proto

var api_v1alpha1_org_legacy_service_pb = require("../../../../api/v1alpha1/org/legacy/service_pb");
var api_v1alpha1_org_legacy_entities_pb = require("../../../../api/v1alpha1/org/legacy/entities_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var OrgLegacy = (function () {
  function OrgLegacy() {}
  OrgLegacy.serviceName = "api.v1alpha1.org.legacy.OrgLegacy";
  return OrgLegacy;
}());

OrgLegacy.RegisterOrganization = {
  methodName: "RegisterOrganization",
  service: OrgLegacy,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_legacy_entities_pb.RegisterOrganizationRequest,
  responseType: api_v1alpha1_org_legacy_entities_pb.RegisterOrganizationResponse
};

exports.OrgLegacy = OrgLegacy;

function OrgLegacyClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

OrgLegacyClient.prototype.registerOrganization = function registerOrganization(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrgLegacy.RegisterOrganization, {
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

exports.OrgLegacyClient = OrgLegacyClient;

