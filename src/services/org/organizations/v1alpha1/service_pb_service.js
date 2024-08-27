// package: services.org.organizations.v1alpha1
// file: services/org/organizations/v1alpha1/service.proto

var services_org_organizations_v1alpha1_service_pb = require("../../../../services/org/organizations/v1alpha1/service_pb");
var services_org_organizations_v1alpha1_preferences_pb = require("../../../../services/org/organizations/v1alpha1/preferences_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var OrganizationsService = (function () {
  function OrganizationsService() {}
  OrganizationsService.serviceName = "services.org.organizations.v1alpha1.OrganizationsService";
  return OrganizationsService;
}());

OrganizationsService.GetOrganizationLocalePreferences = {
  methodName: "GetOrganizationLocalePreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_organizations_v1alpha1_preferences_pb.GetOrganizationLocalePreferencesRequest,
  responseType: services_org_organizations_v1alpha1_preferences_pb.GetOrganizationLocalePreferencesResponse
};

OrganizationsService.UpdateOrganizationLocalePreferences = {
  methodName: "UpdateOrganizationLocalePreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: services_org_organizations_v1alpha1_preferences_pb.UpdateOrganizationLocalePreferencesRequest,
  responseType: services_org_organizations_v1alpha1_preferences_pb.UpdateOrganizationLocalePreferencesResponse
};

exports.OrganizationsService = OrganizationsService;

function OrganizationsServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

OrganizationsServiceClient.prototype.getOrganizationLocalePreferences = function getOrganizationLocalePreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.GetOrganizationLocalePreferences, {
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

OrganizationsServiceClient.prototype.updateOrganizationLocalePreferences = function updateOrganizationLocalePreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.UpdateOrganizationLocalePreferences, {
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

exports.OrganizationsServiceClient = OrganizationsServiceClient;

