// package: api.v1alpha1.org
// file: api/v1alpha1/org/service.proto

var api_v1alpha1_org_service_pb = require("../../../api/v1alpha1/org/service_pb");
var api_v1alpha1_org_agent_profile_group_pb = require("../../../api/v1alpha1/org/agent_profile_group_pb");
var api_v1alpha1_org_auth_token_pb = require("../../../api/v1alpha1/org/auth_token_pb");
var api_v1alpha1_org_huntgroup_pb = require("../../../api/v1alpha1/org/huntgroup_pb");
var api_v1alpha1_org_labels_pb = require("../../../api/v1alpha1/org/labels_pb");
var api_v1alpha1_org_notifications_pb = require("../../../api/v1alpha1/org/notifications_pb");
var api_v1alpha1_org_organization_pb = require("../../../api/v1alpha1/org/organization_pb");
var api_v1alpha1_org_p3_permissions_pb = require("../../../api/v1alpha1/org/p3_permissions_pb");
var api_v1alpha1_org_permissions_pb = require("../../../api/v1alpha1/org/permissions_pb");
var api_v1alpha1_org_preferences_pb = require("../../../api/v1alpha1/org/preferences_pb");
var api_v1alpha1_org_trusts_pb = require("../../../api/v1alpha1/org/trusts_pb");
var api_v1alpha1_org_user_pb = require("../../../api/v1alpha1/org/user_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Org = (function () {
  function Org() {}
  Org.serviceName = "api.v1alpha1.org.Org";
  return Org;
}());

Org.CreateOrganization = {
  methodName: "CreateOrganization",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_organization_pb.CreateOrganizationRequest,
  responseType: api_v1alpha1_org_organization_pb.CreateOrganizationResponse
};

Org.GetOrganization = {
  methodName: "GetOrganization",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_organization_pb.GetOrganizationRequest,
  responseType: api_v1alpha1_org_organization_pb.GetOrganizationResponse
};

Org.GetOrganizationById = {
  methodName: "GetOrganizationById",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_organization_pb.GetOrganizationByIdRequest,
  responseType: api_v1alpha1_org_organization_pb.GetOrganizationByIdResponse
};

Org.UpdateOrganization = {
  methodName: "UpdateOrganization",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_organization_pb.UpdateOrganizationRequest,
  responseType: api_v1alpha1_org_organization_pb.UpdateOrganizationResponse
};

Org.ArchiveOrganization = {
  methodName: "ArchiveOrganization",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_organization_pb.ArchiveOrganizationRequest,
  responseType: api_v1alpha1_org_organization_pb.ArchiveOrganizationResponse
};

Org.UnArchiveOrganization = {
  methodName: "UnArchiveOrganization",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_organization_pb.UnArchiveOrganizationRequest,
  responseType: api_v1alpha1_org_organization_pb.UnArchiveOrganizationResponse
};

Org.ListAllOrganizationsGlobally = {
  methodName: "ListAllOrganizationsGlobally",
  service: Org,
  requestStream: false,
  responseStream: true,
  requestType: api_v1alpha1_org_organization_pb.ListAllOrganizationsGloballyRequest,
  responseType: api_v1alpha1_org_organization_pb.ListAllOrganizationsGloballyResponse
};

Org.ListOrganizationsByRegion = {
  methodName: "ListOrganizationsByRegion",
  service: Org,
  requestStream: false,
  responseStream: true,
  requestType: api_v1alpha1_org_organization_pb.ListOrganizationsByRegionRequest,
  responseType: api_v1alpha1_org_organization_pb.ListOrganizationsByRegionResponse
};

Org.ListArchivedOrganizations = {
  methodName: "ListArchivedOrganizations",
  service: Org,
  requestStream: false,
  responseStream: true,
  requestType: api_v1alpha1_org_organization_pb.ListArchivedOrganizationsRequest,
  responseType: api_v1alpha1_org_organization_pb.ListArchivedOrganizationsResponse
};

Org.ConvertOrgToManual = {
  methodName: "ConvertOrgToManual",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_organization_pb.ConvertOrgToManualRequest,
  responseType: api_v1alpha1_org_organization_pb.ConvertOrgToManualResponse
};

Org.ListOwnedOrgs = {
  methodName: "ListOwnedOrgs",
  service: Org,
  requestStream: false,
  responseStream: true,
  requestType: api_v1alpha1_org_organization_pb.ListOwnedOrgsRequest,
  responseType: api_v1alpha1_org_organization_pb.ListOwnedOrgsResponse
};

Org.GetOrganizationPreferences = {
  methodName: "GetOrganizationPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetOrganizationPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetOrganizationPreferencesResponse
};

Org.UpdateOrganizationPreferences = {
  methodName: "UpdateOrganizationPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateOrganizationPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateOrganizationPreferencesResponse
};

Org.GetAgentPreferences = {
  methodName: "GetAgentPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetAgentPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetAgentPreferencesResponse
};

Org.UpdateAgentPreferences = {
  methodName: "UpdateAgentPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateAgentPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateAgentPreferencesResponse
};

Org.GetContactPreferences = {
  methodName: "GetContactPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetContactPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetContactPreferencesResponse
};

Org.UpdateContactPreferences = {
  methodName: "UpdateContactPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateContactPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateContactPreferencesResponse
};

Org.GetAuthenticationPreferences = {
  methodName: "GetAuthenticationPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetAuthenticationPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetAuthenticationPreferencesResponse
};

Org.UpdateAuthenticationPreferences = {
  methodName: "UpdateAuthenticationPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateAuthenticationPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateAuthenticationPreferencesResponse
};

Org.GetWebhookPreferences = {
  methodName: "GetWebhookPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetWebhookPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetWebhookPreferencesResponse
};

Org.UpdateWebhookPreferences = {
  methodName: "UpdateWebhookPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateWebhookPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateWebhookPreferencesResponse
};

Org.GetDashboardGeneralPreferences = {
  methodName: "GetDashboardGeneralPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetDashboardGeneralPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetDashboardGeneralPreferencesResponse
};

Org.UpdateDashboardGeneralPreferences = {
  methodName: "UpdateDashboardGeneralPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateDashboardGeneralPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateDashboardGeneralPreferencesResponse
};

Org.GetDashboardQueuePreferences = {
  methodName: "GetDashboardQueuePreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetDashboardQueuePreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetDashboardQueuePreferencesResponse
};

Org.UpdateDashboardQueuePreferences = {
  methodName: "UpdateDashboardQueuePreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateDashboardQueuePreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateDashboardQueuePreferencesResponse
};

Org.GetPhonePreferences = {
  methodName: "GetPhonePreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetPhonePreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetPhonePreferencesResponse
};

Org.UpdatePhonePreferences = {
  methodName: "UpdatePhonePreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdatePhonePreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdatePhonePreferencesResponse
};

Org.GetCompliancePreferences = {
  methodName: "GetCompliancePreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetCompliancePreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetCompliancePreferencesResponse
};

Org.UpdateCompliancePreferences = {
  methodName: "UpdateCompliancePreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateCompliancePreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateCompliancePreferencesResponse
};

Org.GetBroadcastPreferences = {
  methodName: "GetBroadcastPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetBroadcastPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetBroadcastPreferencesResponse
};

Org.UpdateBroadcastPreferences = {
  methodName: "UpdateBroadcastPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateBroadcastPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateBroadcastPreferencesResponse
};

Org.GetSchedulePreferences = {
  methodName: "GetSchedulePreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetSchedulePreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetSchedulePreferencesResponse
};

Org.UpdateSchedulePreferences = {
  methodName: "UpdateSchedulePreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateSchedulePreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateSchedulePreferencesResponse
};

Org.GetEmailSmsPreferences = {
  methodName: "GetEmailSmsPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetEmailSmsPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetEmailSmsPreferencesResponse
};

Org.UpdateEmailSmsPreferences = {
  methodName: "UpdateEmailSmsPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateEmailSmsPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateEmailSmsPreferencesResponse
};

Org.GetBusinessPreferences = {
  methodName: "GetBusinessPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetBusinessPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetBusinessPreferencesResponse
};

Org.UpdateBusinessPreferences = {
  methodName: "UpdateBusinessPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateBusinessPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateBusinessPreferencesResponse
};

Org.UpdateAdminBusinessPreferences = {
  methodName: "UpdateAdminBusinessPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateAdminBusinessPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateAdminBusinessPreferencesResponse
};

Org.GetScorecardsPreferences = {
  methodName: "GetScorecardsPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetScorecardsPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetScorecardsPreferencesResponse
};

Org.UpdateScorecardsPreferences = {
  methodName: "UpdateScorecardsPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateScorecardsPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateScorecardsPreferencesResponse
};

Org.GetVoiceAnalyticsPreferences = {
  methodName: "GetVoiceAnalyticsPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetVoiceAnalyticsPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetVoiceAnalyticsPreferencesResponse
};

Org.ListVoiceAnalyticsPreferences = {
  methodName: "ListVoiceAnalyticsPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.ListVoiceAnalyticsPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.ListVoiceAnalyticsPreferencesResponse
};

Org.UpdateVoiceAnalyticsPreferences = {
  methodName: "UpdateVoiceAnalyticsPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateVoiceAnalyticsPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateVoiceAnalyticsPreferencesResponse
};

Org.GetEndOfDayPreferences = {
  methodName: "GetEndOfDayPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetEndOfDayPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetEndOfDayPreferencesResponse
};

Org.UpdateEndOfDayPreferences = {
  methodName: "UpdateEndOfDayPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateEndOfDayPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateEndOfDayPreferencesResponse
};

Org.GetReportFilterPreferences = {
  methodName: "GetReportFilterPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetFilterPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetFilterPreferencesResponse
};

Org.UpdateReportFilterPreferences = {
  methodName: "UpdateReportFilterPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateFilterPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateFilterPreferencesResponse
};

Org.GetRecordingPreferences = {
  methodName: "GetRecordingPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetRecordingPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetRecordingPreferencesResponse
};

Org.UpdateRecordingPreferences = {
  methodName: "UpdateRecordingPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateRecordingPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateRecordingPreferencesResponse
};

Org.GetAdminClientPreferences = {
  methodName: "GetAdminClientPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.GetAdminClientPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.GetAdminClientPreferencesResponse
};

Org.UpdateAdminClientPreferences = {
  methodName: "UpdateAdminClientPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.UpdateAdminClientPreferencesRequest,
  responseType: api_v1alpha1_org_preferences_pb.UpdateAdminClientPreferencesResponse
};

Org.AcceptLinkbackRecordingTerms = {
  methodName: "AcceptLinkbackRecordingTerms",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.AcceptLinkbackRecordingTermsRequest,
  responseType: api_v1alpha1_org_preferences_pb.AcceptLinkbackRecordingTermsResponse
};

Org.LinkbackUpdateBroadcastTemplates = {
  methodName: "LinkbackUpdateBroadcastTemplates",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.LinkbackUpdateBroadcastTemplatesRequest,
  responseType: api_v1alpha1_org_preferences_pb.LinkbackUpdateBroadcastTemplatesResponse
};

Org.RecordEmailUnsubscribeAcknowledgement = {
  methodName: "RecordEmailUnsubscribeAcknowledgement",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.RecordEmailUnsubscribeAcknowledgementRequest,
  responseType: api_v1alpha1_org_preferences_pb.RecordEmailUnsubscribeAcknowledgementResponse
};

Org.ClearEmailUnsubscribeAcknowledgement = {
  methodName: "ClearEmailUnsubscribeAcknowledgement",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_preferences_pb.ClearEmailUnsubscribeAcknowledgementRequest,
  responseType: api_v1alpha1_org_preferences_pb.ClearEmailUnsubscribeAcknowledgementResponse
};

Org.CreateUser = {
  methodName: "CreateUser",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_user_pb.CreateUserRequest,
  responseType: api_v1alpha1_org_user_pb.CreateUserResponse
};

Org.CreateDelegatedUser = {
  methodName: "CreateDelegatedUser",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_user_pb.CreateDelegatedUserRequest,
  responseType: api_v1alpha1_org_user_pb.CreateDelegatedUserResponse
};

Org.GetMyUser = {
  methodName: "GetMyUser",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_user_pb.GetMyUserRequest,
  responseType: api_v1alpha1_org_user_pb.GetMyUserResponse
};

Org.GetUser = {
  methodName: "GetUser",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_user_pb.GetUserRequest,
  responseType: api_v1alpha1_org_user_pb.GetUserResponse
};

Org.GetUserByOrgId = {
  methodName: "GetUserByOrgId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_user_pb.GetUserByOrgIdRequest,
  responseType: api_v1alpha1_org_user_pb.GetUserByOrgIdResponse
};

Org.ListAgents = {
  methodName: "ListAgents",
  service: Org,
  requestStream: false,
  responseStream: true,
  requestType: api_v1alpha1_org_user_pb.ListAgentsRequest,
  responseType: api_v1alpha1_org_user_pb.ListAgentsResponse
};

Org.ListPublicUsers = {
  methodName: "ListPublicUsers",
  service: Org,
  requestStream: false,
  responseStream: true,
  requestType: api_v1alpha1_org_user_pb.ListPublicUsersRequest,
  responseType: api_v1alpha1_org_user_pb.ListPublicUsersResponse
};

Org.ListUsers = {
  methodName: "ListUsers",
  service: Org,
  requestStream: false,
  responseStream: true,
  requestType: api_v1alpha1_org_user_pb.ListUsersRequest,
  responseType: api_v1alpha1_org_user_pb.ListUsersResponse
};

Org.ListUsersByOrgId = {
  methodName: "ListUsersByOrgId",
  service: Org,
  requestStream: false,
  responseStream: true,
  requestType: api_v1alpha1_org_user_pb.ListUsersByOrgIdRequest,
  responseType: api_v1alpha1_org_user_pb.ListUsersByOrgIdResponse
};

Org.ListUsersByRegion = {
  methodName: "ListUsersByRegion",
  service: Org,
  requestStream: false,
  responseStream: true,
  requestType: api_v1alpha1_org_user_pb.ListUsersByRegionRequest,
  responseType: api_v1alpha1_org_user_pb.ListUsersByRegionResponse
};

Org.UpdateMyUser = {
  methodName: "UpdateMyUser",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_user_pb.UpdateMyUserRequest,
  responseType: api_v1alpha1_org_user_pb.UpdateMyUserResponse
};

Org.UpdateUser = {
  methodName: "UpdateUser",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_user_pb.UpdateUserRequest,
  responseType: api_v1alpha1_org_user_pb.UpdateUserResponse
};

Org.UpdateUserLabels = {
  methodName: "UpdateUserLabels",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_user_pb.UpdateUserLabelsRequest,
  responseType: api_v1alpha1_org_user_pb.UpdateUserLabelsResponse
};

Org.UpdateUserCallerId = {
  methodName: "UpdateUserCallerId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_user_pb.UpdateUserCallerIdRequest,
  responseType: api_v1alpha1_org_user_pb.UpdateUserCallerIdResponse
};

Org.UpdateUserDisabled = {
  methodName: "UpdateUserDisabled",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_user_pb.UpdateUserDisabledRequest,
  responseType: api_v1alpha1_org_user_pb.UpdateUserDisabledResponse
};

Org.UpdateUserDisabledByOrgId = {
  methodName: "UpdateUserDisabledByOrgId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_user_pb.UpdateUserDisabledByOrgIdRequest,
  responseType: api_v1alpha1_org_user_pb.UpdateUserDisabledByOrgIdResponse
};

Org.GetMyUserPasswordResetLink = {
  methodName: "GetMyUserPasswordResetLink",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_user_pb.GetMyUserPasswordResetLinkRequest,
  responseType: api_v1alpha1_org_user_pb.GetMyUserPasswordResetLinkResponse
};

Org.GetUserPasswordResetLink = {
  methodName: "GetUserPasswordResetLink",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_user_pb.GetUserPasswordResetLinkRequest,
  responseType: api_v1alpha1_org_user_pb.GetUserPasswordResetLinkResponse
};

Org.GetUserPasswordResetLinkByOrgId = {
  methodName: "GetUserPasswordResetLinkByOrgId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_user_pb.GetUserPasswordResetLinkByOrgIdRequest,
  responseType: api_v1alpha1_org_user_pb.GetUserPasswordResetLinkByOrgIdResponse
};

Org.CreatePasswordResetLink = {
  methodName: "CreatePasswordResetLink",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_user_pb.CreatePasswordResetLinkRequest,
  responseType: api_v1alpha1_org_user_pb.CreatePasswordResetLinkResponse
};

Org.CreatePasswordResetLinkByOrgId = {
  methodName: "CreatePasswordResetLinkByOrgId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_user_pb.CreatePasswordResetLinkByOrgIdRequest,
  responseType: api_v1alpha1_org_user_pb.CreatePasswordResetLinkByOrgIdResponse
};

Org.GetUserLoginInfo = {
  methodName: "GetUserLoginInfo",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_user_pb.GetUserLoginInfoRequest,
  responseType: api_v1alpha1_org_user_pb.GetUserLoginInfoResponse
};

Org.GetUserEmailVerified = {
  methodName: "GetUserEmailVerified",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_user_pb.GetUserEmailVerifiedRequest,
  responseType: api_v1alpha1_org_user_pb.GetUserEmailVerifiedResponse
};

Org.GetUserEmailVerifiedByOrgId = {
  methodName: "GetUserEmailVerifiedByOrgId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_user_pb.GetUserEmailVerifiedByOrgIdRequest,
  responseType: api_v1alpha1_org_user_pb.GetUserEmailVerifiedByOrgIdResponse
};

Org.ResetMyPassword = {
  methodName: "ResetMyPassword",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_user_pb.ResetMyPasswordRequest,
  responseType: api_v1alpha1_org_user_pb.ResetMyPasswordResponse
};

Org.ResetUserPassword = {
  methodName: "ResetUserPassword",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_user_pb.ResetUserPasswordRequest,
  responseType: api_v1alpha1_org_user_pb.ResetUserPasswordResponse
};

Org.ResetUserPasswordByOrgId = {
  methodName: "ResetUserPasswordByOrgId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_user_pb.ResetUserPasswordByOrgIdRequest,
  responseType: api_v1alpha1_org_user_pb.ResetUserPasswordByOrgIdResponse
};

Org.SendUserEmailVerification = {
  methodName: "SendUserEmailVerification",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_user_pb.SendUserEmailVerificationRequest,
  responseType: api_v1alpha1_org_user_pb.SendUserEmailVerificationResponse
};

Org.SendUserEmailVerificationByOrgId = {
  methodName: "SendUserEmailVerificationByOrgId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_user_pb.SendUserEmailVerificationByOrgIdRequest,
  responseType: api_v1alpha1_org_user_pb.SendUserEmailVerificationByOrgIdResponse
};

Org.SendPasswordReset = {
  methodName: "SendPasswordReset",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_user_pb.SendPasswordResetRequest,
  responseType: api_v1alpha1_org_user_pb.SendPasswordResetResponse
};

Org.SendPasswordResetByOrgId = {
  methodName: "SendPasswordResetByOrgId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_user_pb.SendPasswordResetByOrgIdRequest,
  responseType: api_v1alpha1_org_user_pb.SendPasswordResetByOrgIdResponse
};

Org.GetUserSessionData = {
  methodName: "GetUserSessionData",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_user_pb.GetUserSessionDataRequest,
  responseType: api_v1alpha1_org_user_pb.GetUserSessionDataResponse
};

Org.GetAgentProfileGroup = {
  methodName: "GetAgentProfileGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_agent_profile_group_pb.GetAgentProfileGroupRequest,
  responseType: api_v1alpha1_org_agent_profile_group_pb.GetAgentProfileGroupResponse
};

Org.ListAgentProfileGroups = {
  methodName: "ListAgentProfileGroups",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_agent_profile_group_pb.ListAgentProfileGroupsRequest,
  responseType: api_v1alpha1_org_agent_profile_group_pb.ListAgentProfileGroupsResponse
};

Org.UpdateAgentProfileGroup = {
  methodName: "UpdateAgentProfileGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_agent_profile_group_pb.UpdateAgentProfileGroupRequest,
  responseType: api_v1alpha1_org_agent_profile_group_pb.UpdateAgentProfileGroupResponse
};

Org.CreateAgentProfileGroup = {
  methodName: "CreateAgentProfileGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_agent_profile_group_pb.CreateAgentProfileGroupRequest,
  responseType: api_v1alpha1_org_agent_profile_group_pb.CreateAgentProfileGroupResponse
};

Org.DeleteAgentProfileGroup = {
  methodName: "DeleteAgentProfileGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_agent_profile_group_pb.DeleteAgentProfileGroupRequest,
  responseType: api_v1alpha1_org_agent_profile_group_pb.DeleteAgentProfileGroupResponse
};

Org.AssignAgentProfileGroups = {
  methodName: "AssignAgentProfileGroups",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_agent_profile_group_pb.AssignAgentProfileGroupsRequest,
  responseType: api_v1alpha1_org_agent_profile_group_pb.AssignAgentProfileGroupsResponse
};

Org.AddUserSubscription = {
  methodName: "AddUserSubscription",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_notifications_pb.AddUserSubscriptionRequest,
  responseType: api_v1alpha1_org_notifications_pb.AddUserSubscriptionResponse
};

Org.AddUserSubscriptionByUserId = {
  methodName: "AddUserSubscriptionByUserId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_notifications_pb.AddUserSubscriptionByUserIdRequest,
  responseType: api_v1alpha1_org_notifications_pb.AddUserSubscriptionByUserIdResponse
};

Org.GetUserSubscription = {
  methodName: "GetUserSubscription",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_notifications_pb.GetUserSubscriptionRequest,
  responseType: api_v1alpha1_org_notifications_pb.GetUserSubscriptionResponse
};

Org.GetUserSubscriptionByUserId = {
  methodName: "GetUserSubscriptionByUserId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_notifications_pb.GetUserSubscriptionByUserIdRequest,
  responseType: api_v1alpha1_org_notifications_pb.GetUserSubscriptionByUserIdResponse
};

Org.UpdateUserSubscription = {
  methodName: "UpdateUserSubscription",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_notifications_pb.UpdateUserSubscriptionRequest,
  responseType: api_v1alpha1_org_notifications_pb.UpdateUserSubscriptionResponse
};

Org.UpdateUserSubscriptionByUserId = {
  methodName: "UpdateUserSubscriptionByUserId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_notifications_pb.UpdateUserSubscriptionByUserIdRequest,
  responseType: api_v1alpha1_org_notifications_pb.UpdateUserSubscriptionByUserIdResponse
};

Org.RemoveUserSubscription = {
  methodName: "RemoveUserSubscription",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_notifications_pb.RemoveUserSubscriptionRequest,
  responseType: api_v1alpha1_org_notifications_pb.RemoveUserSubscriptionResponse
};

Org.RemoveUserSubscriptionByUserId = {
  methodName: "RemoveUserSubscriptionByUserId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_notifications_pb.RemoveUserSubscriptionByUserIdRequest,
  responseType: api_v1alpha1_org_notifications_pb.RemoveUserSubscriptionByUserIdResponse
};

Org.ListUserSubscriptions = {
  methodName: "ListUserSubscriptions",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_notifications_pb.ListUserSubscriptionsRequest,
  responseType: api_v1alpha1_org_notifications_pb.ListUserSubscriptionsResponse
};

Org.ListUserSubscriptionsByUserId = {
  methodName: "ListUserSubscriptionsByUserId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_notifications_pb.ListUserSubscriptionsByUserIdRequest,
  responseType: api_v1alpha1_org_notifications_pb.ListUserSubscriptionsByUserIdResponse
};

Org.ListOrgSubscriptions = {
  methodName: "ListOrgSubscriptions",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_notifications_pb.ListOrgSubscriptionsRequest,
  responseType: api_v1alpha1_org_notifications_pb.ListOrgSubscriptionsResponse
};

Org.CreateAuthToken = {
  methodName: "CreateAuthToken",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_auth_token_pb.CreateAuthTokenRequest,
  responseType: api_v1alpha1_org_auth_token_pb.CreateAuthTokenResponse
};

Org.CreateAuthTokenByUserId = {
  methodName: "CreateAuthTokenByUserId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_auth_token_pb.CreateAuthTokenByUserIdRequest,
  responseType: api_v1alpha1_org_auth_token_pb.CreateAuthTokenByUserIdResponse
};

Org.ListAuthTokens = {
  methodName: "ListAuthTokens",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_auth_token_pb.ListAuthTokensRequest,
  responseType: api_v1alpha1_org_auth_token_pb.ListAuthTokensResponse
};

Org.ListAuthTokensByUserId = {
  methodName: "ListAuthTokensByUserId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_auth_token_pb.ListAuthTokensByUserIdRequest,
  responseType: api_v1alpha1_org_auth_token_pb.ListAuthTokensByUserIdResponse
};

Org.SetAuthTokenExpiration = {
  methodName: "SetAuthTokenExpiration",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_auth_token_pb.SetAuthTokenExpirationRequest,
  responseType: api_v1alpha1_org_auth_token_pb.SetAuthTokenExpirationResponse
};

Org.SetAuthTokenExpirationByUserId = {
  methodName: "SetAuthTokenExpirationByUserId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_auth_token_pb.SetAuthTokenExpirationByUserIdRequest,
  responseType: api_v1alpha1_org_auth_token_pb.SetAuthTokenExpirationByUserIdResponse
};

Org.DeleteAuthToken = {
  methodName: "DeleteAuthToken",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_auth_token_pb.DeleteAuthTokenRequest,
  responseType: api_v1alpha1_org_auth_token_pb.DeleteAuthTokenResponse
};

Org.DeleteAuthTokenByUserId = {
  methodName: "DeleteAuthTokenByUserId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_auth_token_pb.DeleteAuthTokenByUserIdRequest,
  responseType: api_v1alpha1_org_auth_token_pb.DeleteAuthTokenByUserIdResponse
};

Org.GetHuntGroupSettings = {
  methodName: "GetHuntGroupSettings",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_huntgroup_pb.GetHuntGroupSettingsRequest,
  responseType: api_v1alpha1_org_huntgroup_pb.GetHuntGroupSettingsResponse
};

Org.UpdateHuntGroupSettings = {
  methodName: "UpdateHuntGroupSettings",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupSettingsRequest,
  responseType: api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupSettingsResponse
};

Org.CreateHuntGroup = {
  methodName: "CreateHuntGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_huntgroup_pb.CreateHuntGroupRequest,
  responseType: api_v1alpha1_org_huntgroup_pb.CreateHuntGroupResponse
};

Org.UpdateHuntGroupGeneralDetails = {
  methodName: "UpdateHuntGroupGeneralDetails",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupGeneralDetailsRequest,
  responseType: api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupGeneralDetailsResponse
};

Org.DeleteHuntGroup = {
  methodName: "DeleteHuntGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_huntgroup_pb.DeleteHuntGroupRequest,
  responseType: api_v1alpha1_org_huntgroup_pb.DeleteHuntGroupResponse
};

Org.GetHuntGroupDetails = {
  methodName: "GetHuntGroupDetails",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_huntgroup_pb.GetHuntGroupDetailsRequest,
  responseType: api_v1alpha1_org_huntgroup_pb.GetHuntGroupDetailsResponse
};

Org.ListCallerIdBuckets = {
  methodName: "ListCallerIdBuckets",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_huntgroup_pb.ListCallerIdBucketsRequest,
  responseType: api_v1alpha1_org_huntgroup_pb.ListCallerIdBucketsResponse
};

Org.GetDataDipTemplate = {
  methodName: "GetDataDipTemplate",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_huntgroup_pb.GetDataDipTemplateRequest,
  responseType: api_v1alpha1_org_huntgroup_pb.GetDataDipTemplateResponse
};

Org.ListDataDipTemplates = {
  methodName: "ListDataDipTemplates",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_huntgroup_pb.ListDataDipTemplatesRequest,
  responseType: api_v1alpha1_org_huntgroup_pb.ListDataDipTemplatesResponse
};

Org.CreateDataDipTemplate = {
  methodName: "CreateDataDipTemplate",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_huntgroup_pb.CreateDataDipTemplateRequest,
  responseType: api_v1alpha1_org_huntgroup_pb.CreateDataDipTemplateResponse
};

Org.UpdateDataDipTemplate = {
  methodName: "UpdateDataDipTemplate",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_huntgroup_pb.UpdateDataDipTemplateRequest,
  responseType: api_v1alpha1_org_huntgroup_pb.UpdateDataDipTemplateResponse
};

Org.DeleteDataDipTemplate = {
  methodName: "DeleteDataDipTemplate",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_huntgroup_pb.DeleteDataDipTemplateRequest,
  responseType: api_v1alpha1_org_huntgroup_pb.DeleteDataDipTemplateResponse
};

Org.CopyDataDipTemplate = {
  methodName: "CopyDataDipTemplate",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_huntgroup_pb.CopyDataDipTemplateRequest,
  responseType: api_v1alpha1_org_huntgroup_pb.CopyDataDipTemplateResponse
};

Org.CopyDataDipTemplateToOrganization = {
  methodName: "CopyDataDipTemplateToOrganization",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_huntgroup_pb.CopyDataDipTemplateToOrganizationRequest,
  responseType: api_v1alpha1_org_huntgroup_pb.CopyDataDipTemplateToOrganizationResponse
};

Org.ListAgentResponseAutoRules = {
  methodName: "ListAgentResponseAutoRules",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_huntgroup_pb.ListAgentResponseAutoRulesRequest,
  responseType: api_v1alpha1_org_huntgroup_pb.ListAgentResponseAutoRulesResponse
};

Org.CreateAgentResponseAutoRules = {
  methodName: "CreateAgentResponseAutoRules",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_huntgroup_pb.CreateAgentResponseAutoRulesRequest,
  responseType: api_v1alpha1_org_huntgroup_pb.CreateAgentResponseAutoRulesResponse
};

Org.UpdateAgentResponseAutoRules = {
  methodName: "UpdateAgentResponseAutoRules",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_huntgroup_pb.UpdateAgentResponseAutoRulesRequest,
  responseType: api_v1alpha1_org_huntgroup_pb.UpdateAgentResponseAutoRulesResponse
};

Org.DeleteAgentResponseAutoRules = {
  methodName: "DeleteAgentResponseAutoRules",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_huntgroup_pb.DeleteAgentResponseAutoRulesRequest,
  responseType: api_v1alpha1_org_huntgroup_pb.DeleteAgentResponseAutoRulesResponse
};

Org.ListHuntGroupWebLinks = {
  methodName: "ListHuntGroupWebLinks",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_huntgroup_pb.ListHuntGroupWebLinksRequest,
  responseType: api_v1alpha1_org_huntgroup_pb.ListHuntGroupWebLinksResponse
};

Org.CopyHuntGroupWebLink = {
  methodName: "CopyHuntGroupWebLink",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_huntgroup_pb.CopyHuntGroupWebLinkRequest,
  responseType: api_v1alpha1_org_huntgroup_pb.CopyHuntGroupWebLinkResponse
};

Org.UpdateHuntGroupWebLinks = {
  methodName: "UpdateHuntGroupWebLinks",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupWebLinksRequest,
  responseType: api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupWebLinksResponse
};

Org.ListHuntGroupIntegrationLinks = {
  methodName: "ListHuntGroupIntegrationLinks",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_huntgroup_pb.ListHuntGroupIntegrationLinksRequest,
  responseType: api_v1alpha1_org_huntgroup_pb.ListHuntGroupIntegrationLinksResponse
};

Org.GetHuntGroupClientInfoDisplayTemplate = {
  methodName: "GetHuntGroupClientInfoDisplayTemplate",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_huntgroup_pb.GetHuntGroupClientInfoDisplayTemplateRequest,
  responseType: api_v1alpha1_org_huntgroup_pb.GetHuntGroupClientInfoDisplayTemplateResponse
};

Org.CreateHuntGroupClientInfoDisplayTemplate = {
  methodName: "CreateHuntGroupClientInfoDisplayTemplate",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_huntgroup_pb.CreateHuntGroupClientInfoDisplayTemplateRequest,
  responseType: api_v1alpha1_org_huntgroup_pb.CreateHuntGroupClientInfoDisplayTemplateResponse
};

Org.UpdateHuntGroupClientInfoDisplayTemplate = {
  methodName: "UpdateHuntGroupClientInfoDisplayTemplate",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupClientInfoDisplayTemplateRequest,
  responseType: api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupClientInfoDisplayTemplateResponse
};

Org.DeleteHuntGroupClientInfoDisplayTemplate = {
  methodName: "DeleteHuntGroupClientInfoDisplayTemplate",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_huntgroup_pb.DeleteHuntGroupClientInfoDisplayTemplateRequest,
  responseType: api_v1alpha1_org_huntgroup_pb.DeleteHuntGroupClientInfoDisplayTemplateResponse
};

Org.ListAgentTriggers = {
  methodName: "ListAgentTriggers",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_huntgroup_pb.ListAgentTriggersRequest,
  responseType: api_v1alpha1_org_huntgroup_pb.ListAgentTriggersResponse
};

Org.CopyAgentTrigger = {
  methodName: "CopyAgentTrigger",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_huntgroup_pb.CopyAgentTriggerRequest,
  responseType: api_v1alpha1_org_huntgroup_pb.CopyAgentTriggerResponse
};

Org.UpdateAgentTriggers = {
  methodName: "UpdateAgentTriggers",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_huntgroup_pb.UpdateAgentTriggersRequest,
  responseType: api_v1alpha1_org_huntgroup_pb.UpdateAgentTriggersResponse
};

Org.CreateTrust = {
  methodName: "CreateTrust",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_trusts_pb.CreateTrustRequest,
  responseType: api_v1alpha1_org_trusts_pb.CreateTrustResponse
};

Org.AcceptTrust = {
  methodName: "AcceptTrust",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_trusts_pb.AcceptTrustRequest,
  responseType: api_v1alpha1_org_trusts_pb.AcceptTrustResponse
};

Org.RejectTrust = {
  methodName: "RejectTrust",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_trusts_pb.RejectTrustRequest,
  responseType: api_v1alpha1_org_trusts_pb.RejectTrustResponse
};

Org.GetTrust = {
  methodName: "GetTrust",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_trusts_pb.GetTrustRequest,
  responseType: api_v1alpha1_org_trusts_pb.GetTrustResponse
};

Org.ListIncomingTrusts = {
  methodName: "ListIncomingTrusts",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_trusts_pb.ListIncomingTrustsRequest,
  responseType: api_v1alpha1_org_trusts_pb.ListIncomingTrustsResponse
};

Org.ListGivenTrusts = {
  methodName: "ListGivenTrusts",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_trusts_pb.ListGivenTrustsRequest,
  responseType: api_v1alpha1_org_trusts_pb.ListGivenTrustsResponse
};

Org.ListAssignableTrusts = {
  methodName: "ListAssignableTrusts",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_trusts_pb.ListAssignableTrustsRequest,
  responseType: api_v1alpha1_org_trusts_pb.ListAssignableTrustsResponse
};

Org.DeleteTrust = {
  methodName: "DeleteTrust",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_trusts_pb.DeleteTrustRequest,
  responseType: api_v1alpha1_org_trusts_pb.DeleteTrustResponse
};

Org.AssignTrust = {
  methodName: "AssignTrust",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_trusts_pb.AssignTrustRequest,
  responseType: api_v1alpha1_org_trusts_pb.AssignTrustResponse
};

Org.UnassignTrust = {
  methodName: "UnassignTrust",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_trusts_pb.UnassignTrustRequest,
  responseType: api_v1alpha1_org_trusts_pb.UnassignTrustResponse
};

Org.CreateLabel = {
  methodName: "CreateLabel",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_labels_pb.CreateLabelRequest,
  responseType: api_v1alpha1_org_labels_pb.CreateLabelResponse
};

Org.DeleteLabel = {
  methodName: "DeleteLabel",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_labels_pb.DeleteLabelRequest,
  responseType: api_v1alpha1_org_labels_pb.DeleteLabelResponse
};

Org.ListLabels = {
  methodName: "ListLabels",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_labels_pb.ListLabelsRequest,
  responseType: api_v1alpha1_org_labels_pb.ListLabelsResponse
};

Org.GetLabel = {
  methodName: "GetLabel",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_labels_pb.GetLabelRequest,
  responseType: api_v1alpha1_org_labels_pb.GetLabelResponse
};

Org.UpdateLabel = {
  methodName: "UpdateLabel",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_labels_pb.UpdateLabelRequest,
  responseType: api_v1alpha1_org_labels_pb.UpdateLabelResponse
};

Org.AssignLabel = {
  methodName: "AssignLabel",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_labels_pb.AssignLabelRequest,
  responseType: api_v1alpha1_org_labels_pb.AssignLabelResponse
};

Org.UnassignLabel = {
  methodName: "UnassignLabel",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_labels_pb.UnassignLabelRequest,
  responseType: api_v1alpha1_org_labels_pb.UnassignLabelResponse
};

Org.GetAssignmentCounts = {
  methodName: "GetAssignmentCounts",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_labels_pb.GetAssignmentCountsRequest,
  responseType: api_v1alpha1_org_labels_pb.GetAssignmentCountsResponse
};

Org.GetAssignableLabels = {
  methodName: "GetAssignableLabels",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_labels_pb.GetAssignableLabelsRequest,
  responseType: api_v1alpha1_org_labels_pb.GetAssignableLabelsResponse
};

Org.GetPermissions = {
  methodName: "GetPermissions",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_permissions_pb.GetPermissionsRequest,
  responseType: api_v1alpha1_org_permissions_pb.GetPermissionsResponse
};

Org.GetUserPermissions = {
  methodName: "GetUserPermissions",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_permissions_pb.GetUserPermissionsRequest,
  responseType: api_v1alpha1_org_permissions_pb.GetUserPermissionsResponse
};

Org.CreatePermissionGroup = {
  methodName: "CreatePermissionGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_permissions_pb.CreatePermissionGroupRequest,
  responseType: api_v1alpha1_org_permissions_pb.CreatePermissionGroupResponse
};

Org.UpdatePermissionGroup = {
  methodName: "UpdatePermissionGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_permissions_pb.UpdatePermissionGroupRequest,
  responseType: api_v1alpha1_org_permissions_pb.UpdatePermissionGroupResponse
};

Org.DeletePermissionGroup = {
  methodName: "DeletePermissionGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_permissions_pb.DeletePermissionGroupRequest,
  responseType: api_v1alpha1_org_permissions_pb.DeletePermissionGroupResponse
};

Org.ListPermissionGroups = {
  methodName: "ListPermissionGroups",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_permissions_pb.ListPermissionGroupsRequest,
  responseType: api_v1alpha1_org_permissions_pb.ListPermissionGroupsResponse
};

Org.ListPermissionGroupsByOrgId = {
  methodName: "ListPermissionGroupsByOrgId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_permissions_pb.ListPermissionGroupsByOrgIdRequest,
  responseType: api_v1alpha1_org_permissions_pb.ListPermissionGroupsByOrgIdResponse
};

Org.AssignUsersPermissionGroup = {
  methodName: "AssignUsersPermissionGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_permissions_pb.AssignUsersPermissionGroupRequest,
  responseType: api_v1alpha1_org_permissions_pb.AssignUsersPermissionGroupResponse
};

Org.RevokeUsersPermissionGroup = {
  methodName: "RevokeUsersPermissionGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_permissions_pb.RevokeUsersPermissionGroupRequest,
  responseType: api_v1alpha1_org_permissions_pb.RevokeUsersPermissionGroupResponse
};

Org.AssignAccountOwnerPermissionToUser = {
  methodName: "AssignAccountOwnerPermissionToUser",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_permissions_pb.AssignAccountOwnerPermissionToUserRequest,
  responseType: api_v1alpha1_org_permissions_pb.AssignAccountOwnerPermissionToUserResponse
};

Org.RevokeAccountOwnerPermissionFromUser = {
  methodName: "RevokeAccountOwnerPermissionFromUser",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_permissions_pb.RevokeAccountOwnerPermissionFromUserRequest,
  responseType: api_v1alpha1_org_permissions_pb.RevokeAccountOwnerPermissionFromUserResponse
};

Org.InitDefaultPermissionGroups = {
  methodName: "InitDefaultPermissionGroups",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_permissions_pb.InitDefaultPermissionGroupsRequest,
  responseType: api_v1alpha1_org_permissions_pb.InitDefaultPermissionGroupsResponse
};

Org.GetAccountOwnerGroup = {
  methodName: "GetAccountOwnerGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_permissions_pb.GetAccountOwnerGroupRequest,
  responseType: api_v1alpha1_org_permissions_pb.GetAccountOwnerGroupResponse
};

Org.GetLicenses = {
  methodName: "GetLicenses",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_permissions_pb.GetLicensesRequest,
  responseType: api_v1alpha1_org_permissions_pb.GetLicensesResponse
};

Org.GetOrgLicenses = {
  methodName: "GetOrgLicenses",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_permissions_pb.GetOrgLicensesRequest,
  responseType: api_v1alpha1_org_permissions_pb.GetOrgLicensesResponse
};

Org.UpdateLicenses = {
  methodName: "UpdateLicenses",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_permissions_pb.UpdateLicensesRequest,
  responseType: api_v1alpha1_org_permissions_pb.UpdateLicensesResponse
};

Org.RemovePermissionFromAllPermissionGroups = {
  methodName: "RemovePermissionFromAllPermissionGroups",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_permissions_pb.RemovePermissionFromAllPermissionGroupsRequest,
  responseType: api_v1alpha1_org_permissions_pb.RemovePermissionFromAllPermissionGroupsResponse
};

Org.ListP3PermissionGroups = {
  methodName: "ListP3PermissionGroups",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_p3_permissions_pb.ListP3PermissionGroupsRequest,
  responseType: api_v1alpha1_org_p3_permissions_pb.ListP3PermissionGroupsResponse
};

Org.ListP3PermissionGroupsByOrgId = {
  methodName: "ListP3PermissionGroupsByOrgId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_p3_permissions_pb.ListP3PermissionGroupsRequest,
  responseType: api_v1alpha1_org_p3_permissions_pb.ListP3PermissionGroupsResponse
};

Org.CreateP3PermissionGroup = {
  methodName: "CreateP3PermissionGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_p3_permissions_pb.CreateP3PermissionGroupRequest,
  responseType: api_v1alpha1_org_p3_permissions_pb.CreateP3PermissionGroupResponse
};

Org.UpdateP3PermissionGroup = {
  methodName: "UpdateP3PermissionGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_p3_permissions_pb.UpdateP3PermissionGroupRequest,
  responseType: api_v1alpha1_org_p3_permissions_pb.UpdateP3PermissionGroupResponse
};

Org.UpdateP3PermissionGroupByOrgId = {
  methodName: "UpdateP3PermissionGroupByOrgId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_p3_permissions_pb.UpdateP3PermissionGroupByOrgIdRequest,
  responseType: api_v1alpha1_org_p3_permissions_pb.UpdateP3PermissionGroupByOrgIdResponse
};

Org.DeleteP3PermissionGroup = {
  methodName: "DeleteP3PermissionGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_p3_permissions_pb.DeleteP3PermissionGroupRequest,
  responseType: api_v1alpha1_org_p3_permissions_pb.DeleteP3PermissionGroupResponse
};

Org.AssignUsersP3PermissionGroup = {
  methodName: "AssignUsersP3PermissionGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_p3_permissions_pb.AssignUsersP3PermissionGroupRequest,
  responseType: api_v1alpha1_org_p3_permissions_pb.AssignUsersP3PermissionGroupResponse
};

Org.RevokeUsersP3PermissionGroup = {
  methodName: "RevokeUsersP3PermissionGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_p3_permissions_pb.RevokeUsersP3PermissionGroupRequest,
  responseType: api_v1alpha1_org_p3_permissions_pb.RevokeUsersP3PermissionGroupResponse
};

Org.Refresh2FALockout = {
  methodName: "Refresh2FALockout",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_user_pb.Refresh2FALockoutRequest,
  responseType: api_v1alpha1_org_user_pb.Refresh2FALockoutResponse
};

Org.Refresh2FALockoutByOrgId = {
  methodName: "Refresh2FALockoutByOrgId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_user_pb.Refresh2FALockoutByOrgIdRequest,
  responseType: api_v1alpha1_org_user_pb.Refresh2FALockoutByOrgIdResponse
};

exports.Org = Org;

function OrgClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

OrgClient.prototype.createOrganization = function createOrganization(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.CreateOrganization, {
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

OrgClient.prototype.getOrganization = function getOrganization(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetOrganization, {
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

OrgClient.prototype.getOrganizationById = function getOrganizationById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetOrganizationById, {
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

OrgClient.prototype.updateOrganization = function updateOrganization(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateOrganization, {
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

OrgClient.prototype.archiveOrganization = function archiveOrganization(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ArchiveOrganization, {
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

OrgClient.prototype.unArchiveOrganization = function unArchiveOrganization(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UnArchiveOrganization, {
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

OrgClient.prototype.listAllOrganizationsGlobally = function listAllOrganizationsGlobally(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Org.ListAllOrganizationsGlobally, {
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

OrgClient.prototype.listOrganizationsByRegion = function listOrganizationsByRegion(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Org.ListOrganizationsByRegion, {
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

OrgClient.prototype.listArchivedOrganizations = function listArchivedOrganizations(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Org.ListArchivedOrganizations, {
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

OrgClient.prototype.convertOrgToManual = function convertOrgToManual(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ConvertOrgToManual, {
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

OrgClient.prototype.listOwnedOrgs = function listOwnedOrgs(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Org.ListOwnedOrgs, {
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

OrgClient.prototype.getOrganizationPreferences = function getOrganizationPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetOrganizationPreferences, {
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

OrgClient.prototype.updateOrganizationPreferences = function updateOrganizationPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateOrganizationPreferences, {
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

OrgClient.prototype.getAgentPreferences = function getAgentPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetAgentPreferences, {
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

OrgClient.prototype.updateAgentPreferences = function updateAgentPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateAgentPreferences, {
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

OrgClient.prototype.getContactPreferences = function getContactPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetContactPreferences, {
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

OrgClient.prototype.updateContactPreferences = function updateContactPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateContactPreferences, {
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

OrgClient.prototype.getAuthenticationPreferences = function getAuthenticationPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetAuthenticationPreferences, {
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

OrgClient.prototype.updateAuthenticationPreferences = function updateAuthenticationPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateAuthenticationPreferences, {
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

OrgClient.prototype.getWebhookPreferences = function getWebhookPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetWebhookPreferences, {
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

OrgClient.prototype.updateWebhookPreferences = function updateWebhookPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateWebhookPreferences, {
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

OrgClient.prototype.getDashboardGeneralPreferences = function getDashboardGeneralPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetDashboardGeneralPreferences, {
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

OrgClient.prototype.updateDashboardGeneralPreferences = function updateDashboardGeneralPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateDashboardGeneralPreferences, {
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

OrgClient.prototype.getDashboardQueuePreferences = function getDashboardQueuePreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetDashboardQueuePreferences, {
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

OrgClient.prototype.updateDashboardQueuePreferences = function updateDashboardQueuePreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateDashboardQueuePreferences, {
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

OrgClient.prototype.getPhonePreferences = function getPhonePreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetPhonePreferences, {
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

OrgClient.prototype.updatePhonePreferences = function updatePhonePreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdatePhonePreferences, {
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

OrgClient.prototype.getCompliancePreferences = function getCompliancePreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetCompliancePreferences, {
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

OrgClient.prototype.updateCompliancePreferences = function updateCompliancePreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateCompliancePreferences, {
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

OrgClient.prototype.getBroadcastPreferences = function getBroadcastPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetBroadcastPreferences, {
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

OrgClient.prototype.updateBroadcastPreferences = function updateBroadcastPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateBroadcastPreferences, {
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

OrgClient.prototype.getSchedulePreferences = function getSchedulePreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetSchedulePreferences, {
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

OrgClient.prototype.updateSchedulePreferences = function updateSchedulePreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateSchedulePreferences, {
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

OrgClient.prototype.getEmailSmsPreferences = function getEmailSmsPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetEmailSmsPreferences, {
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

OrgClient.prototype.updateEmailSmsPreferences = function updateEmailSmsPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateEmailSmsPreferences, {
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

OrgClient.prototype.getBusinessPreferences = function getBusinessPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetBusinessPreferences, {
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

OrgClient.prototype.updateBusinessPreferences = function updateBusinessPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateBusinessPreferences, {
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

OrgClient.prototype.updateAdminBusinessPreferences = function updateAdminBusinessPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateAdminBusinessPreferences, {
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

OrgClient.prototype.getScorecardsPreferences = function getScorecardsPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetScorecardsPreferences, {
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

OrgClient.prototype.updateScorecardsPreferences = function updateScorecardsPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateScorecardsPreferences, {
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

OrgClient.prototype.getVoiceAnalyticsPreferences = function getVoiceAnalyticsPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetVoiceAnalyticsPreferences, {
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

OrgClient.prototype.listVoiceAnalyticsPreferences = function listVoiceAnalyticsPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListVoiceAnalyticsPreferences, {
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

OrgClient.prototype.updateVoiceAnalyticsPreferences = function updateVoiceAnalyticsPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateVoiceAnalyticsPreferences, {
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

OrgClient.prototype.getEndOfDayPreferences = function getEndOfDayPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetEndOfDayPreferences, {
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

OrgClient.prototype.updateEndOfDayPreferences = function updateEndOfDayPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateEndOfDayPreferences, {
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

OrgClient.prototype.getReportFilterPreferences = function getReportFilterPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetReportFilterPreferences, {
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

OrgClient.prototype.updateReportFilterPreferences = function updateReportFilterPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateReportFilterPreferences, {
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

OrgClient.prototype.getRecordingPreferences = function getRecordingPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetRecordingPreferences, {
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

OrgClient.prototype.updateRecordingPreferences = function updateRecordingPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateRecordingPreferences, {
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

OrgClient.prototype.getAdminClientPreferences = function getAdminClientPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetAdminClientPreferences, {
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

OrgClient.prototype.updateAdminClientPreferences = function updateAdminClientPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateAdminClientPreferences, {
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

OrgClient.prototype.acceptLinkbackRecordingTerms = function acceptLinkbackRecordingTerms(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.AcceptLinkbackRecordingTerms, {
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

OrgClient.prototype.linkbackUpdateBroadcastTemplates = function linkbackUpdateBroadcastTemplates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.LinkbackUpdateBroadcastTemplates, {
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

OrgClient.prototype.recordEmailUnsubscribeAcknowledgement = function recordEmailUnsubscribeAcknowledgement(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.RecordEmailUnsubscribeAcknowledgement, {
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

OrgClient.prototype.clearEmailUnsubscribeAcknowledgement = function clearEmailUnsubscribeAcknowledgement(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ClearEmailUnsubscribeAcknowledgement, {
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

OrgClient.prototype.createUser = function createUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.CreateUser, {
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

OrgClient.prototype.createDelegatedUser = function createDelegatedUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.CreateDelegatedUser, {
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

OrgClient.prototype.getMyUser = function getMyUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetMyUser, {
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

OrgClient.prototype.getUser = function getUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetUser, {
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

OrgClient.prototype.getUserByOrgId = function getUserByOrgId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetUserByOrgId, {
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

OrgClient.prototype.listAgents = function listAgents(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Org.ListAgents, {
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

OrgClient.prototype.listPublicUsers = function listPublicUsers(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Org.ListPublicUsers, {
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

OrgClient.prototype.listUsers = function listUsers(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Org.ListUsers, {
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

OrgClient.prototype.listUsersByOrgId = function listUsersByOrgId(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Org.ListUsersByOrgId, {
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

OrgClient.prototype.listUsersByRegion = function listUsersByRegion(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Org.ListUsersByRegion, {
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

OrgClient.prototype.updateMyUser = function updateMyUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateMyUser, {
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

OrgClient.prototype.updateUser = function updateUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateUser, {
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

OrgClient.prototype.updateUserLabels = function updateUserLabels(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateUserLabels, {
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

OrgClient.prototype.updateUserCallerId = function updateUserCallerId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateUserCallerId, {
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

OrgClient.prototype.updateUserDisabled = function updateUserDisabled(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateUserDisabled, {
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

OrgClient.prototype.updateUserDisabledByOrgId = function updateUserDisabledByOrgId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateUserDisabledByOrgId, {
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

OrgClient.prototype.getMyUserPasswordResetLink = function getMyUserPasswordResetLink(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetMyUserPasswordResetLink, {
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

OrgClient.prototype.getUserPasswordResetLink = function getUserPasswordResetLink(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetUserPasswordResetLink, {
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

OrgClient.prototype.getUserPasswordResetLinkByOrgId = function getUserPasswordResetLinkByOrgId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetUserPasswordResetLinkByOrgId, {
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

OrgClient.prototype.createPasswordResetLink = function createPasswordResetLink(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.CreatePasswordResetLink, {
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

OrgClient.prototype.createPasswordResetLinkByOrgId = function createPasswordResetLinkByOrgId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.CreatePasswordResetLinkByOrgId, {
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

OrgClient.prototype.getUserLoginInfo = function getUserLoginInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetUserLoginInfo, {
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

OrgClient.prototype.getUserEmailVerified = function getUserEmailVerified(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetUserEmailVerified, {
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

OrgClient.prototype.getUserEmailVerifiedByOrgId = function getUserEmailVerifiedByOrgId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetUserEmailVerifiedByOrgId, {
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

OrgClient.prototype.resetMyPassword = function resetMyPassword(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ResetMyPassword, {
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

OrgClient.prototype.resetUserPassword = function resetUserPassword(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ResetUserPassword, {
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

OrgClient.prototype.resetUserPasswordByOrgId = function resetUserPasswordByOrgId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ResetUserPasswordByOrgId, {
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

OrgClient.prototype.sendUserEmailVerification = function sendUserEmailVerification(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.SendUserEmailVerification, {
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

OrgClient.prototype.sendUserEmailVerificationByOrgId = function sendUserEmailVerificationByOrgId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.SendUserEmailVerificationByOrgId, {
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

OrgClient.prototype.sendPasswordReset = function sendPasswordReset(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.SendPasswordReset, {
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

OrgClient.prototype.sendPasswordResetByOrgId = function sendPasswordResetByOrgId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.SendPasswordResetByOrgId, {
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

OrgClient.prototype.getUserSessionData = function getUserSessionData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetUserSessionData, {
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

OrgClient.prototype.getAgentProfileGroup = function getAgentProfileGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetAgentProfileGroup, {
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

OrgClient.prototype.listAgentProfileGroups = function listAgentProfileGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListAgentProfileGroups, {
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

OrgClient.prototype.updateAgentProfileGroup = function updateAgentProfileGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateAgentProfileGroup, {
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

OrgClient.prototype.createAgentProfileGroup = function createAgentProfileGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.CreateAgentProfileGroup, {
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

OrgClient.prototype.deleteAgentProfileGroup = function deleteAgentProfileGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.DeleteAgentProfileGroup, {
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

OrgClient.prototype.assignAgentProfileGroups = function assignAgentProfileGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.AssignAgentProfileGroups, {
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

OrgClient.prototype.addUserSubscription = function addUserSubscription(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.AddUserSubscription, {
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

OrgClient.prototype.addUserSubscriptionByUserId = function addUserSubscriptionByUserId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.AddUserSubscriptionByUserId, {
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

OrgClient.prototype.getUserSubscription = function getUserSubscription(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetUserSubscription, {
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

OrgClient.prototype.getUserSubscriptionByUserId = function getUserSubscriptionByUserId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetUserSubscriptionByUserId, {
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

OrgClient.prototype.updateUserSubscription = function updateUserSubscription(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateUserSubscription, {
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

OrgClient.prototype.updateUserSubscriptionByUserId = function updateUserSubscriptionByUserId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateUserSubscriptionByUserId, {
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

OrgClient.prototype.removeUserSubscription = function removeUserSubscription(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.RemoveUserSubscription, {
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

OrgClient.prototype.removeUserSubscriptionByUserId = function removeUserSubscriptionByUserId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.RemoveUserSubscriptionByUserId, {
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

OrgClient.prototype.listUserSubscriptions = function listUserSubscriptions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListUserSubscriptions, {
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

OrgClient.prototype.listUserSubscriptionsByUserId = function listUserSubscriptionsByUserId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListUserSubscriptionsByUserId, {
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

OrgClient.prototype.listOrgSubscriptions = function listOrgSubscriptions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListOrgSubscriptions, {
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

OrgClient.prototype.createAuthToken = function createAuthToken(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.CreateAuthToken, {
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

OrgClient.prototype.createAuthTokenByUserId = function createAuthTokenByUserId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.CreateAuthTokenByUserId, {
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

OrgClient.prototype.listAuthTokens = function listAuthTokens(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListAuthTokens, {
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

OrgClient.prototype.listAuthTokensByUserId = function listAuthTokensByUserId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListAuthTokensByUserId, {
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

OrgClient.prototype.setAuthTokenExpiration = function setAuthTokenExpiration(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.SetAuthTokenExpiration, {
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

OrgClient.prototype.setAuthTokenExpirationByUserId = function setAuthTokenExpirationByUserId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.SetAuthTokenExpirationByUserId, {
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

OrgClient.prototype.deleteAuthToken = function deleteAuthToken(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.DeleteAuthToken, {
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

OrgClient.prototype.deleteAuthTokenByUserId = function deleteAuthTokenByUserId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.DeleteAuthTokenByUserId, {
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

OrgClient.prototype.getHuntGroupSettings = function getHuntGroupSettings(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetHuntGroupSettings, {
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

OrgClient.prototype.updateHuntGroupSettings = function updateHuntGroupSettings(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateHuntGroupSettings, {
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

OrgClient.prototype.createHuntGroup = function createHuntGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.CreateHuntGroup, {
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

OrgClient.prototype.updateHuntGroupGeneralDetails = function updateHuntGroupGeneralDetails(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateHuntGroupGeneralDetails, {
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

OrgClient.prototype.deleteHuntGroup = function deleteHuntGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.DeleteHuntGroup, {
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

OrgClient.prototype.getHuntGroupDetails = function getHuntGroupDetails(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetHuntGroupDetails, {
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

OrgClient.prototype.listCallerIdBuckets = function listCallerIdBuckets(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListCallerIdBuckets, {
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

OrgClient.prototype.getDataDipTemplate = function getDataDipTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetDataDipTemplate, {
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

OrgClient.prototype.listDataDipTemplates = function listDataDipTemplates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListDataDipTemplates, {
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

OrgClient.prototype.createDataDipTemplate = function createDataDipTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.CreateDataDipTemplate, {
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

OrgClient.prototype.updateDataDipTemplate = function updateDataDipTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateDataDipTemplate, {
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

OrgClient.prototype.deleteDataDipTemplate = function deleteDataDipTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.DeleteDataDipTemplate, {
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

OrgClient.prototype.copyDataDipTemplate = function copyDataDipTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.CopyDataDipTemplate, {
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

OrgClient.prototype.copyDataDipTemplateToOrganization = function copyDataDipTemplateToOrganization(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.CopyDataDipTemplateToOrganization, {
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

OrgClient.prototype.listAgentResponseAutoRules = function listAgentResponseAutoRules(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListAgentResponseAutoRules, {
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

OrgClient.prototype.createAgentResponseAutoRules = function createAgentResponseAutoRules(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.CreateAgentResponseAutoRules, {
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

OrgClient.prototype.updateAgentResponseAutoRules = function updateAgentResponseAutoRules(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateAgentResponseAutoRules, {
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

OrgClient.prototype.deleteAgentResponseAutoRules = function deleteAgentResponseAutoRules(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.DeleteAgentResponseAutoRules, {
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

OrgClient.prototype.listHuntGroupWebLinks = function listHuntGroupWebLinks(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListHuntGroupWebLinks, {
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

OrgClient.prototype.copyHuntGroupWebLink = function copyHuntGroupWebLink(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.CopyHuntGroupWebLink, {
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

OrgClient.prototype.updateHuntGroupWebLinks = function updateHuntGroupWebLinks(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateHuntGroupWebLinks, {
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

OrgClient.prototype.listHuntGroupIntegrationLinks = function listHuntGroupIntegrationLinks(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListHuntGroupIntegrationLinks, {
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

OrgClient.prototype.getHuntGroupClientInfoDisplayTemplate = function getHuntGroupClientInfoDisplayTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetHuntGroupClientInfoDisplayTemplate, {
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

OrgClient.prototype.createHuntGroupClientInfoDisplayTemplate = function createHuntGroupClientInfoDisplayTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.CreateHuntGroupClientInfoDisplayTemplate, {
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

OrgClient.prototype.updateHuntGroupClientInfoDisplayTemplate = function updateHuntGroupClientInfoDisplayTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateHuntGroupClientInfoDisplayTemplate, {
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

OrgClient.prototype.deleteHuntGroupClientInfoDisplayTemplate = function deleteHuntGroupClientInfoDisplayTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.DeleteHuntGroupClientInfoDisplayTemplate, {
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

OrgClient.prototype.listAgentTriggers = function listAgentTriggers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListAgentTriggers, {
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

OrgClient.prototype.copyAgentTrigger = function copyAgentTrigger(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.CopyAgentTrigger, {
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

OrgClient.prototype.updateAgentTriggers = function updateAgentTriggers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateAgentTriggers, {
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

OrgClient.prototype.createTrust = function createTrust(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.CreateTrust, {
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

OrgClient.prototype.acceptTrust = function acceptTrust(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.AcceptTrust, {
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

OrgClient.prototype.rejectTrust = function rejectTrust(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.RejectTrust, {
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

OrgClient.prototype.getTrust = function getTrust(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetTrust, {
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

OrgClient.prototype.listIncomingTrusts = function listIncomingTrusts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListIncomingTrusts, {
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

OrgClient.prototype.listGivenTrusts = function listGivenTrusts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListGivenTrusts, {
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

OrgClient.prototype.listAssignableTrusts = function listAssignableTrusts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListAssignableTrusts, {
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

OrgClient.prototype.deleteTrust = function deleteTrust(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.DeleteTrust, {
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

OrgClient.prototype.assignTrust = function assignTrust(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.AssignTrust, {
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

OrgClient.prototype.unassignTrust = function unassignTrust(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UnassignTrust, {
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

OrgClient.prototype.createLabel = function createLabel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.CreateLabel, {
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

OrgClient.prototype.deleteLabel = function deleteLabel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.DeleteLabel, {
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

OrgClient.prototype.listLabels = function listLabels(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListLabels, {
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

OrgClient.prototype.getLabel = function getLabel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetLabel, {
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

OrgClient.prototype.updateLabel = function updateLabel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateLabel, {
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

OrgClient.prototype.assignLabel = function assignLabel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.AssignLabel, {
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

OrgClient.prototype.unassignLabel = function unassignLabel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UnassignLabel, {
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

OrgClient.prototype.getAssignmentCounts = function getAssignmentCounts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetAssignmentCounts, {
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

OrgClient.prototype.getAssignableLabels = function getAssignableLabels(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetAssignableLabels, {
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

OrgClient.prototype.getPermissions = function getPermissions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetPermissions, {
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

OrgClient.prototype.getUserPermissions = function getUserPermissions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetUserPermissions, {
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

OrgClient.prototype.createPermissionGroup = function createPermissionGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.CreatePermissionGroup, {
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

OrgClient.prototype.updatePermissionGroup = function updatePermissionGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdatePermissionGroup, {
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

OrgClient.prototype.deletePermissionGroup = function deletePermissionGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.DeletePermissionGroup, {
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

OrgClient.prototype.listPermissionGroups = function listPermissionGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListPermissionGroups, {
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

OrgClient.prototype.listPermissionGroupsByOrgId = function listPermissionGroupsByOrgId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListPermissionGroupsByOrgId, {
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

OrgClient.prototype.assignUsersPermissionGroup = function assignUsersPermissionGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.AssignUsersPermissionGroup, {
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

OrgClient.prototype.revokeUsersPermissionGroup = function revokeUsersPermissionGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.RevokeUsersPermissionGroup, {
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

OrgClient.prototype.assignAccountOwnerPermissionToUser = function assignAccountOwnerPermissionToUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.AssignAccountOwnerPermissionToUser, {
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

OrgClient.prototype.revokeAccountOwnerPermissionFromUser = function revokeAccountOwnerPermissionFromUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.RevokeAccountOwnerPermissionFromUser, {
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

OrgClient.prototype.initDefaultPermissionGroups = function initDefaultPermissionGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.InitDefaultPermissionGroups, {
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

OrgClient.prototype.getAccountOwnerGroup = function getAccountOwnerGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetAccountOwnerGroup, {
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

OrgClient.prototype.getLicenses = function getLicenses(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetLicenses, {
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

OrgClient.prototype.getOrgLicenses = function getOrgLicenses(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetOrgLicenses, {
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

OrgClient.prototype.updateLicenses = function updateLicenses(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateLicenses, {
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

OrgClient.prototype.removePermissionFromAllPermissionGroups = function removePermissionFromAllPermissionGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.RemovePermissionFromAllPermissionGroups, {
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

OrgClient.prototype.listP3PermissionGroups = function listP3PermissionGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListP3PermissionGroups, {
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

OrgClient.prototype.listP3PermissionGroupsByOrgId = function listP3PermissionGroupsByOrgId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListP3PermissionGroupsByOrgId, {
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

OrgClient.prototype.createP3PermissionGroup = function createP3PermissionGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.CreateP3PermissionGroup, {
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

OrgClient.prototype.updateP3PermissionGroup = function updateP3PermissionGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateP3PermissionGroup, {
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

OrgClient.prototype.updateP3PermissionGroupByOrgId = function updateP3PermissionGroupByOrgId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateP3PermissionGroupByOrgId, {
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

OrgClient.prototype.deleteP3PermissionGroup = function deleteP3PermissionGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.DeleteP3PermissionGroup, {
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

OrgClient.prototype.assignUsersP3PermissionGroup = function assignUsersP3PermissionGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.AssignUsersP3PermissionGroup, {
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

OrgClient.prototype.revokeUsersP3PermissionGroup = function revokeUsersP3PermissionGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.RevokeUsersP3PermissionGroup, {
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

OrgClient.prototype.refresh2FALockout = function refresh2FALockout(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.Refresh2FALockout, {
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

OrgClient.prototype.refresh2FALockoutByOrgId = function refresh2FALockoutByOrgId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.Refresh2FALockoutByOrgId, {
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

exports.OrgClient = OrgClient;

