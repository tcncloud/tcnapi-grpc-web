// package: api.v1alpha1.org
// file: api/v1alpha1/org/organizations/service.proto

var api_v1alpha1_org_organizations_service_pb = require("../../../../api/v1alpha1/org/organizations/service_pb");
var api_v1alpha1_org_organization_pb = require("../../../../api/v1alpha1/org/organization_pb");
var api_v1alpha1_org_preferences_pb = require("../../../../api/v1alpha1/org/preferences_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var OrganizationsService = (function () {
  function OrganizationsService() {}
  OrganizationsService.serviceName = "api.v1alpha1.org.OrganizationsService";
  return OrganizationsService;
}());

OrganizationsService.CreateOrganization = {
  methodName: "CreateOrganization",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_organization_pb.CreateOrganizationRequest,
  responseType: api_v1alpha1_org_organization_pb.CreateOrganizationResponse
};

OrganizationsService.GetOrganization = {
  methodName: "GetOrganization",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_organization_pb.GetOrganizationRequest,
  responseType: api_v1alpha1_org_organization_pb.GetOrganizationResponse
};

OrganizationsService.GetOrganizationById = {
  methodName: "GetOrganizationById",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_organization_pb.GetOrganizationByIdRequest,
  responseType: api_v1alpha1_org_organization_pb.GetOrganizationByIdResponse
};

OrganizationsService.UpdateOrganization = {
  methodName: "UpdateOrganization",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_organization_pb.UpdateOrganizationRequest,
  responseType: api_v1alpha1_org_organization_pb.UpdateOrganizationResponse
};

OrganizationsService.ArchiveOrganization = {
  methodName: "ArchiveOrganization",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_organization_pb.ArchiveOrganizationRequest,
  responseType: api_v1alpha1_org_organization_pb.ArchiveOrganizationResponse
};

OrganizationsService.UnArchiveOrganization = {
  methodName: "UnArchiveOrganization",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_organization_pb.UnArchiveOrganizationRequest,
  responseType: api_v1alpha1_org_organization_pb.UnArchiveOrganizationResponse
};

OrganizationsService.ListAllOrganizationsGlobally = {
  methodName: "ListAllOrganizationsGlobally",
  service: OrganizationsService,
  requestStream: false,
  responseStream: true,
  requestType: api_v1alpha1_org_organization_pb.ListAllOrganizationsGloballyRequest,
  responseType: api_v1alpha1_org_organization_pb.ListAllOrganizationsGloballyResponse
};

OrganizationsService.ListOrganizationsByRegion = {
  methodName: "ListOrganizationsByRegion",
  service: OrganizationsService,
  requestStream: false,
  responseStream: true,
  requestType: api_v1alpha1_org_organization_pb.ListOrganizationsByRegionRequest,
  responseType: api_v1alpha1_org_organization_pb.ListOrganizationsByRegionResponse
};

OrganizationsService.ListArchivedOrganizations = {
  methodName: "ListArchivedOrganizations",
  service: OrganizationsService,
  requestStream: false,
  responseStream: true,
  requestType: api_v1alpha1_org_organization_pb.ListArchivedOrganizationsRequest,
  responseType: api_v1alpha1_org_organization_pb.ListArchivedOrganizationsResponse
};

OrganizationsService.ConvertOrgToManual = {
  methodName: "ConvertOrgToManual",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_organization_pb.ConvertOrgToManualRequest,
  responseType: api_v1alpha1_org_organization_pb.ConvertOrgToManualResponse
};

OrganizationsService.ListOwnedOrgs = {
  methodName: "ListOwnedOrgs",
  service: OrganizationsService,
  requestStream: false,
  responseStream: true,
  requestType: api_v1alpha1_org_organization_pb.ListOwnedOrgsRequest,
  responseType: api_v1alpha1_org_organization_pb.ListOwnedOrgsResponse
};

OrganizationsService.GetOrganizationPreferences = {
  methodName: "GetOrganizationPreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetOrganizationPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetOrganizationPreferencesResponse
};

OrganizationsService.UpdateOrganizationPreferences = {
  methodName: "UpdateOrganizationPreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateOrganizationPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateOrganizationPreferencesResponse
};

OrganizationsService.GetAgentPreferences = {
  methodName: "GetAgentPreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetAgentPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetAgentPreferencesResponse
};

OrganizationsService.UpdateAgentPreferences = {
  methodName: "UpdateAgentPreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateAgentPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateAgentPreferencesResponse
};

OrganizationsService.GetContactPreferences = {
  methodName: "GetContactPreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetContactPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetContactPreferencesResponse
};

OrganizationsService.UpdateContactPreferences = {
  methodName: "UpdateContactPreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateContactPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateContactPreferencesResponse
};

OrganizationsService.GetAuthenticationPreferences = {
  methodName: "GetAuthenticationPreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetAuthenticationPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetAuthenticationPreferencesResponse
};

OrganizationsService.UpdateAuthenticationPreferences = {
  methodName: "UpdateAuthenticationPreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateAuthenticationPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateAuthenticationPreferencesResponse
};

OrganizationsService.GetWebhookPreferences = {
  methodName: "GetWebhookPreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetWebhookPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetWebhookPreferencesResponse
};

OrganizationsService.UpdateWebhookPreferences = {
  methodName: "UpdateWebhookPreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateWebhookPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateWebhookPreferencesResponse
};

OrganizationsService.GetDashboardGeneralPreferences = {
  methodName: "GetDashboardGeneralPreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetDashboardGeneralPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetDashboardGeneralPreferencesResponse
};

OrganizationsService.UpdateDashboardGeneralPreferences = {
  methodName: "UpdateDashboardGeneralPreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateDashboardGeneralPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateDashboardGeneralPreferencesResponse
};

OrganizationsService.GetDashboardQueuePreferences = {
  methodName: "GetDashboardQueuePreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetDashboardQueuePreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetDashboardQueuePreferencesResponse
};

OrganizationsService.UpdateDashboardQueuePreferences = {
  methodName: "UpdateDashboardQueuePreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateDashboardQueuePreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateDashboardQueuePreferencesResponse
};

OrganizationsService.GetPhonePreferences = {
  methodName: "GetPhonePreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetPhonePreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetPhonePreferencesResponse
};

OrganizationsService.UpdatePhonePreferences = {
  methodName: "UpdatePhonePreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdatePhonePreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdatePhonePreferencesResponse
};

OrganizationsService.GetCompliancePreferences = {
  methodName: "GetCompliancePreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetCompliancePreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetCompliancePreferencesResponse
};

OrganizationsService.UpdateCompliancePreferences = {
  methodName: "UpdateCompliancePreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateCompliancePreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateCompliancePreferencesResponse
};

OrganizationsService.GetBroadcastPreferences = {
  methodName: "GetBroadcastPreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetBroadcastPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetBroadcastPreferencesResponse
};

OrganizationsService.UpdateBroadcastPreferences = {
  methodName: "UpdateBroadcastPreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateBroadcastPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateBroadcastPreferencesResponse
};

OrganizationsService.GetSchedulePreferences = {
  methodName: "GetSchedulePreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetSchedulePreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetSchedulePreferencesResponse
};

OrganizationsService.UpdateSchedulePreferences = {
  methodName: "UpdateSchedulePreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateSchedulePreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateSchedulePreferencesResponse
};

OrganizationsService.GetEmailSmsPreferences = {
  methodName: "GetEmailSmsPreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetEmailSmsPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetEmailSmsPreferencesResponse
};

OrganizationsService.UpdateEmailSmsPreferences = {
  methodName: "UpdateEmailSmsPreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateEmailSmsPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateEmailSmsPreferencesResponse
};

OrganizationsService.GetBusinessPreferences = {
  methodName: "GetBusinessPreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetBusinessPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetBusinessPreferencesResponse
};

OrganizationsService.UpdateBusinessPreferences = {
  methodName: "UpdateBusinessPreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateBusinessPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateBusinessPreferencesResponse
};

OrganizationsService.UpdateAdminBusinessPreferences = {
  methodName: "UpdateAdminBusinessPreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateAdminBusinessPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateAdminBusinessPreferencesResponse
};

OrganizationsService.GetScorecardsPreferences = {
  methodName: "GetScorecardsPreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetScorecardsPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetScorecardsPreferencesResponse
};

OrganizationsService.UpdateScorecardsPreferences = {
  methodName: "UpdateScorecardsPreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateScorecardsPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateScorecardsPreferencesResponse
};

OrganizationsService.GetVoiceAnalyticsPreferences = {
  methodName: "GetVoiceAnalyticsPreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetVoiceAnalyticsPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetVoiceAnalyticsPreferencesResponse
};

OrganizationsService.ListVoiceAnalyticsPreferences = {
  methodName: "ListVoiceAnalyticsPreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.ListVoiceAnalyticsPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.ListVoiceAnalyticsPreferencesResponse
};

OrganizationsService.UpdateVoiceAnalyticsPreferences = {
  methodName: "UpdateVoiceAnalyticsPreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateVoiceAnalyticsPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateVoiceAnalyticsPreferencesResponse
};

OrganizationsService.GetEndOfDayPreferences = {
  methodName: "GetEndOfDayPreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetEndOfDayPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetEndOfDayPreferencesResponse
};

OrganizationsService.UpdateEndOfDayPreferences = {
  methodName: "UpdateEndOfDayPreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateEndOfDayPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateEndOfDayPreferencesResponse
};

OrganizationsService.GetReportFilterPreferences = {
  methodName: "GetReportFilterPreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetFilterPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetFilterPreferencesResponse
};

OrganizationsService.UpdateReportFilterPreferences = {
  methodName: "UpdateReportFilterPreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateFilterPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateFilterPreferencesResponse
};

OrganizationsService.GetRecordingPreferences = {
  methodName: "GetRecordingPreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetRecordingPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetRecordingPreferencesResponse
};

OrganizationsService.UpdateRecordingPreferences = {
  methodName: "UpdateRecordingPreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateRecordingPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateRecordingPreferencesResponse
};

OrganizationsService.GetAdminClientPreferences = {
  methodName: "GetAdminClientPreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetAdminClientPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetAdminClientPreferencesResponse
};

OrganizationsService.UpdateAdminClientPreferences = {
  methodName: "UpdateAdminClientPreferences",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateAdminClientPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateAdminClientPreferencesResponse
};

OrganizationsService.AcceptLinkbackRecordingTerms = {
  methodName: "AcceptLinkbackRecordingTerms",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.AcceptLinkbackRecordingTermsRequest,
  responseType: api_v1alpha1_org_preferences_pb.AcceptLinkbackRecordingTermsResponse
};

OrganizationsService.LinkbackUpdateBroadcastTemplates = {
  methodName: "LinkbackUpdateBroadcastTemplates",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.LinkbackUpdateBroadcastTemplatesRequest,
  responseType: api_v1alpha1_org_preferences_pb.LinkbackUpdateBroadcastTemplatesResponse
};

OrganizationsService.RecordEmailUnsubscribeAcknowledgement = {
  methodName: "RecordEmailUnsubscribeAcknowledgement",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.RecordEmailUnsubscribeAcknowledgementRequest,
  responseType: api_v1alpha1_org_preferences_pb.RecordEmailUnsubscribeAcknowledgementResponse
};

OrganizationsService.ClearEmailUnsubscribeAcknowledgement = {
  methodName: "ClearEmailUnsubscribeAcknowledgement",
  service: OrganizationsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.ClearEmailUnsubscribeAcknowledgementRequest,
  responseType: api_v1alpha1_org_preferences_pb.ClearEmailUnsubscribeAcknowledgementResponse
};

exports.OrganizationsService = OrganizationsService;

function OrganizationsServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

OrganizationsServiceClient.prototype.createOrganization = function createOrganization(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.CreateOrganization, {
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

OrganizationsServiceClient.prototype.getOrganization = function getOrganization(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.GetOrganization, {
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

OrganizationsServiceClient.prototype.getOrganizationById = function getOrganizationById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.GetOrganizationById, {
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

OrganizationsServiceClient.prototype.updateOrganization = function updateOrganization(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.UpdateOrganization, {
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

OrganizationsServiceClient.prototype.archiveOrganization = function archiveOrganization(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.ArchiveOrganization, {
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

OrganizationsServiceClient.prototype.unArchiveOrganization = function unArchiveOrganization(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.UnArchiveOrganization, {
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

OrganizationsServiceClient.prototype.listAllOrganizationsGlobally = function listAllOrganizationsGlobally(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(OrganizationsService.ListAllOrganizationsGlobally, {
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

OrganizationsServiceClient.prototype.listOrganizationsByRegion = function listOrganizationsByRegion(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(OrganizationsService.ListOrganizationsByRegion, {
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

OrganizationsServiceClient.prototype.listArchivedOrganizations = function listArchivedOrganizations(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(OrganizationsService.ListArchivedOrganizations, {
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

OrganizationsServiceClient.prototype.convertOrgToManual = function convertOrgToManual(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.ConvertOrgToManual, {
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

OrganizationsServiceClient.prototype.listOwnedOrgs = function listOwnedOrgs(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(OrganizationsService.ListOwnedOrgs, {
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

OrganizationsServiceClient.prototype.getOrganizationPreferences = function getOrganizationPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.GetOrganizationPreferences, {
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

OrganizationsServiceClient.prototype.updateOrganizationPreferences = function updateOrganizationPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.UpdateOrganizationPreferences, {
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

OrganizationsServiceClient.prototype.getAgentPreferences = function getAgentPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.GetAgentPreferences, {
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

OrganizationsServiceClient.prototype.updateAgentPreferences = function updateAgentPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.UpdateAgentPreferences, {
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

OrganizationsServiceClient.prototype.getContactPreferences = function getContactPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.GetContactPreferences, {
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

OrganizationsServiceClient.prototype.updateContactPreferences = function updateContactPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.UpdateContactPreferences, {
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

OrganizationsServiceClient.prototype.getAuthenticationPreferences = function getAuthenticationPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.GetAuthenticationPreferences, {
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

OrganizationsServiceClient.prototype.updateAuthenticationPreferences = function updateAuthenticationPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.UpdateAuthenticationPreferences, {
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

OrganizationsServiceClient.prototype.getWebhookPreferences = function getWebhookPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.GetWebhookPreferences, {
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

OrganizationsServiceClient.prototype.updateWebhookPreferences = function updateWebhookPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.UpdateWebhookPreferences, {
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

OrganizationsServiceClient.prototype.getDashboardGeneralPreferences = function getDashboardGeneralPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.GetDashboardGeneralPreferences, {
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

OrganizationsServiceClient.prototype.updateDashboardGeneralPreferences = function updateDashboardGeneralPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.UpdateDashboardGeneralPreferences, {
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

OrganizationsServiceClient.prototype.getDashboardQueuePreferences = function getDashboardQueuePreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.GetDashboardQueuePreferences, {
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

OrganizationsServiceClient.prototype.updateDashboardQueuePreferences = function updateDashboardQueuePreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.UpdateDashboardQueuePreferences, {
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

OrganizationsServiceClient.prototype.getPhonePreferences = function getPhonePreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.GetPhonePreferences, {
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

OrganizationsServiceClient.prototype.updatePhonePreferences = function updatePhonePreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.UpdatePhonePreferences, {
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

OrganizationsServiceClient.prototype.getCompliancePreferences = function getCompliancePreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.GetCompliancePreferences, {
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

OrganizationsServiceClient.prototype.updateCompliancePreferences = function updateCompliancePreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.UpdateCompliancePreferences, {
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

OrganizationsServiceClient.prototype.getBroadcastPreferences = function getBroadcastPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.GetBroadcastPreferences, {
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

OrganizationsServiceClient.prototype.updateBroadcastPreferences = function updateBroadcastPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.UpdateBroadcastPreferences, {
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

OrganizationsServiceClient.prototype.getSchedulePreferences = function getSchedulePreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.GetSchedulePreferences, {
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

OrganizationsServiceClient.prototype.updateSchedulePreferences = function updateSchedulePreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.UpdateSchedulePreferences, {
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

OrganizationsServiceClient.prototype.getEmailSmsPreferences = function getEmailSmsPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.GetEmailSmsPreferences, {
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

OrganizationsServiceClient.prototype.updateEmailSmsPreferences = function updateEmailSmsPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.UpdateEmailSmsPreferences, {
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

OrganizationsServiceClient.prototype.getBusinessPreferences = function getBusinessPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.GetBusinessPreferences, {
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

OrganizationsServiceClient.prototype.updateBusinessPreferences = function updateBusinessPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.UpdateBusinessPreferences, {
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

OrganizationsServiceClient.prototype.updateAdminBusinessPreferences = function updateAdminBusinessPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.UpdateAdminBusinessPreferences, {
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

OrganizationsServiceClient.prototype.getScorecardsPreferences = function getScorecardsPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.GetScorecardsPreferences, {
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

OrganizationsServiceClient.prototype.updateScorecardsPreferences = function updateScorecardsPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.UpdateScorecardsPreferences, {
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

OrganizationsServiceClient.prototype.getVoiceAnalyticsPreferences = function getVoiceAnalyticsPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.GetVoiceAnalyticsPreferences, {
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

OrganizationsServiceClient.prototype.listVoiceAnalyticsPreferences = function listVoiceAnalyticsPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.ListVoiceAnalyticsPreferences, {
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

OrganizationsServiceClient.prototype.updateVoiceAnalyticsPreferences = function updateVoiceAnalyticsPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.UpdateVoiceAnalyticsPreferences, {
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

OrganizationsServiceClient.prototype.getEndOfDayPreferences = function getEndOfDayPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.GetEndOfDayPreferences, {
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

OrganizationsServiceClient.prototype.updateEndOfDayPreferences = function updateEndOfDayPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.UpdateEndOfDayPreferences, {
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

OrganizationsServiceClient.prototype.getReportFilterPreferences = function getReportFilterPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.GetReportFilterPreferences, {
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

OrganizationsServiceClient.prototype.updateReportFilterPreferences = function updateReportFilterPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.UpdateReportFilterPreferences, {
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

OrganizationsServiceClient.prototype.getRecordingPreferences = function getRecordingPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.GetRecordingPreferences, {
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

OrganizationsServiceClient.prototype.updateRecordingPreferences = function updateRecordingPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.UpdateRecordingPreferences, {
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

OrganizationsServiceClient.prototype.getAdminClientPreferences = function getAdminClientPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.GetAdminClientPreferences, {
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

OrganizationsServiceClient.prototype.updateAdminClientPreferences = function updateAdminClientPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.UpdateAdminClientPreferences, {
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

OrganizationsServiceClient.prototype.acceptLinkbackRecordingTerms = function acceptLinkbackRecordingTerms(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.AcceptLinkbackRecordingTerms, {
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

OrganizationsServiceClient.prototype.linkbackUpdateBroadcastTemplates = function linkbackUpdateBroadcastTemplates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.LinkbackUpdateBroadcastTemplates, {
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

OrganizationsServiceClient.prototype.recordEmailUnsubscribeAcknowledgement = function recordEmailUnsubscribeAcknowledgement(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.RecordEmailUnsubscribeAcknowledgement, {
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

OrganizationsServiceClient.prototype.clearEmailUnsubscribeAcknowledgement = function clearEmailUnsubscribeAcknowledgement(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrganizationsService.ClearEmailUnsubscribeAcknowledgement, {
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

