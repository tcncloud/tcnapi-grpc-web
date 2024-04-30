// package: api.v1alpha1.org
// file: api/v1alpha1/org/service.proto

import * as api_v1alpha1_org_service_pb from "../../../api/v1alpha1/org/service_pb";
import * as api_v1alpha1_org_agent_profile_group_pb from "../../../api/v1alpha1/org/agent_profile_group_pb";
import * as api_v1alpha1_org_auth_token_pb from "../../../api/v1alpha1/org/auth_token_pb";
import * as api_v1alpha1_org_huntgroup_pb from "../../../api/v1alpha1/org/huntgroup_pb";
import * as api_v1alpha1_org_labels_pb from "../../../api/v1alpha1/org/labels_pb";
import * as api_v1alpha1_org_notifications_pb from "../../../api/v1alpha1/org/notifications_pb";
import * as api_v1alpha1_org_organization_pb from "../../../api/v1alpha1/org/organization_pb";
import * as api_v1alpha1_org_p3_permissions_pb from "../../../api/v1alpha1/org/p3_permissions_pb";
import * as api_v1alpha1_org_permissions_pb from "../../../api/v1alpha1/org/permissions_pb";
import * as api_v1alpha1_org_preferences_pb from "../../../api/v1alpha1/org/preferences_pb";
import * as api_v1alpha1_org_trusts_pb from "../../../api/v1alpha1/org/trusts_pb";
import * as api_v1alpha1_org_user_pb from "../../../api/v1alpha1/org/user_pb";
import {grpc} from "@improbable-eng/grpc-web";

type OrgCreateOrganization = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_organization_pb.CreateOrganizationRequest;
  readonly responseType: typeof api_v1alpha1_org_organization_pb.CreateOrganizationResponse;
};

type OrgGetOrganization = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_organization_pb.GetOrganizationRequest;
  readonly responseType: typeof api_v1alpha1_org_organization_pb.GetOrganizationResponse;
};

type OrgGetOrganizationById = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_organization_pb.GetOrganizationByIdRequest;
  readonly responseType: typeof api_v1alpha1_org_organization_pb.GetOrganizationByIdResponse;
};

type OrgUpdateOrganization = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_organization_pb.UpdateOrganizationRequest;
  readonly responseType: typeof api_v1alpha1_org_organization_pb.UpdateOrganizationResponse;
};

type OrgArchiveOrganization = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_organization_pb.ArchiveOrganizationRequest;
  readonly responseType: typeof api_v1alpha1_org_organization_pb.ArchiveOrganizationResponse;
};

type OrgUnArchiveOrganization = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_organization_pb.UnArchiveOrganizationRequest;
  readonly responseType: typeof api_v1alpha1_org_organization_pb.UnArchiveOrganizationResponse;
};

type OrgListAllOrganizationsGlobally = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v1alpha1_org_organization_pb.ListAllOrganizationsGloballyRequest;
  readonly responseType: typeof api_v1alpha1_org_organization_pb.ListAllOrganizationsGloballyResponse;
};

type OrgListOrganizationsByRegion = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v1alpha1_org_organization_pb.ListOrganizationsByRegionRequest;
  readonly responseType: typeof api_v1alpha1_org_organization_pb.ListOrganizationsByRegionResponse;
};

type OrgListArchivedOrganizations = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v1alpha1_org_organization_pb.ListArchivedOrganizationsRequest;
  readonly responseType: typeof api_v1alpha1_org_organization_pb.ListArchivedOrganizationsResponse;
};

type OrgConvertOrgToManual = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_organization_pb.ConvertOrgToManualRequest;
  readonly responseType: typeof api_v1alpha1_org_organization_pb.ConvertOrgToManualResponse;
};

type OrgListOwnedOrgs = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v1alpha1_org_organization_pb.ListOwnedOrgsRequest;
  readonly responseType: typeof api_v1alpha1_org_organization_pb.ListOwnedOrgsResponse;
};

type OrgGetOrganizationPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetOrganizationPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetOrganizationPreferencesResponse;
};

type OrgUpdateOrganizationPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateOrganizationPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateOrganizationPreferencesResponse;
};

type OrgGetAgentPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetAgentPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetAgentPreferencesResponse;
};

type OrgUpdateAgentPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateAgentPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateAgentPreferencesResponse;
};

type OrgGetContactPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetContactPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetContactPreferencesResponse;
};

type OrgUpdateContactPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateContactPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateContactPreferencesResponse;
};

type OrgGetAuthenticationPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetAuthenticationPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetAuthenticationPreferencesResponse;
};

type OrgUpdateAuthenticationPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateAuthenticationPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateAuthenticationPreferencesResponse;
};

type OrgGetWebhookPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetWebhookPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetWebhookPreferencesResponse;
};

type OrgUpdateWebhookPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateWebhookPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateWebhookPreferencesResponse;
};

type OrgGetDashboardGeneralPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetDashboardGeneralPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetDashboardGeneralPreferencesResponse;
};

type OrgUpdateDashboardGeneralPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateDashboardGeneralPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateDashboardGeneralPreferencesResponse;
};

type OrgGetDashboardQueuePreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetDashboardQueuePreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetDashboardQueuePreferencesResponse;
};

type OrgUpdateDashboardQueuePreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateDashboardQueuePreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateDashboardQueuePreferencesResponse;
};

type OrgGetPhonePreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetPhonePreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetPhonePreferencesResponse;
};

type OrgUpdatePhonePreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdatePhonePreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdatePhonePreferencesResponse;
};

type OrgGetCompliancePreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetCompliancePreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetCompliancePreferencesResponse;
};

type OrgUpdateCompliancePreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateCompliancePreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateCompliancePreferencesResponse;
};

type OrgGetBroadcastPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetBroadcastPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetBroadcastPreferencesResponse;
};

type OrgUpdateBroadcastPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateBroadcastPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateBroadcastPreferencesResponse;
};

type OrgGetSchedulePreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetSchedulePreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetSchedulePreferencesResponse;
};

type OrgUpdateSchedulePreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateSchedulePreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateSchedulePreferencesResponse;
};

type OrgGetEmailSmsPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetEmailSmsPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetEmailSmsPreferencesResponse;
};

type OrgUpdateEmailSmsPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateEmailSmsPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateEmailSmsPreferencesResponse;
};

type OrgGetBusinessPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetBusinessPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetBusinessPreferencesResponse;
};

type OrgUpdateBusinessPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateBusinessPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateBusinessPreferencesResponse;
};

type OrgUpdateAdminBusinessPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateAdminBusinessPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateAdminBusinessPreferencesResponse;
};

type OrgGetScorecardsPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetScorecardsPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetScorecardsPreferencesResponse;
};

type OrgUpdateScorecardsPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateScorecardsPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateScorecardsPreferencesResponse;
};

type OrgGetVoiceAnalyticsPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetVoiceAnalyticsPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetVoiceAnalyticsPreferencesResponse;
};

type OrgListVoiceAnalyticsPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.ListVoiceAnalyticsPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.ListVoiceAnalyticsPreferencesResponse;
};

type OrgUpdateVoiceAnalyticsPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateVoiceAnalyticsPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateVoiceAnalyticsPreferencesResponse;
};

type OrgGetEndOfDayPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetEndOfDayPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetEndOfDayPreferencesResponse;
};

type OrgUpdateEndOfDayPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateEndOfDayPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateEndOfDayPreferencesResponse;
};

type OrgGetReportFilterPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetFilterPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetFilterPreferencesResponse;
};

type OrgUpdateReportFilterPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateFilterPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateFilterPreferencesResponse;
};

type OrgGetRecordingPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetRecordingPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetRecordingPreferencesResponse;
};

type OrgUpdateRecordingPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateRecordingPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateRecordingPreferencesResponse;
};

type OrgGetAdminClientPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetAdminClientPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetAdminClientPreferencesResponse;
};

type OrgUpdateAdminClientPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateAdminClientPreferencesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateAdminClientPreferencesResponse;
};

type OrgAcceptLinkbackRecordingTerms = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.AcceptLinkbackRecordingTermsRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.AcceptLinkbackRecordingTermsResponse;
};

type OrgLinkbackUpdateBroadcastTemplates = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.LinkbackUpdateBroadcastTemplatesRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.LinkbackUpdateBroadcastTemplatesResponse;
};

type OrgRecordEmailUnsubscribeAcknowledgement = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.RecordEmailUnsubscribeAcknowledgementRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.RecordEmailUnsubscribeAcknowledgementResponse;
};

type OrgClearEmailUnsubscribeAcknowledgement = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.ClearEmailUnsubscribeAcknowledgementRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.ClearEmailUnsubscribeAcknowledgementResponse;
};

type OrgListBusinessHours = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.ListBusinessHoursRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.ListBusinessHoursResponse;
};

type OrgGetBusinessHours = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.GetBusinessHoursRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.GetBusinessHoursResponse;
};

type OrgSetBusinessHours = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.SetBusinessHoursRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.SetBusinessHoursResponse;
};

type OrgAddIntervalToBusinessHours = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.AddIntervalToBusinessHoursRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.AddIntervalToBusinessHoursResponse;
};

type OrgRemoveIntervalFromBusinessHours = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.RemoveIntervalFromBusinessHoursRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.RemoveIntervalFromBusinessHoursResponse;
};

type OrgUpdateBusinessHoursInfo = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateBusinessHoursInfoRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateBusinessHoursInfoResponse;
};

type OrgDeleteBusinessHours = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.DeleteBusinessHoursRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.DeleteBusinessHoursResponse;
};

type OrgEvaluateBusinessHours = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.EvaluateBusinessHoursRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.EvaluateBusinessHoursResponse;
};

type OrgCreateUser = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.CreateUserRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.CreateUserResponse;
};

type OrgCreateDelegatedUser = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.CreateDelegatedUserRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.CreateDelegatedUserResponse;
};

type OrgGetMyUser = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.GetMyUserRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.GetMyUserResponse;
};

type OrgGetUser = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.GetUserRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.GetUserResponse;
};

type OrgGetUserByOrgId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.GetUserByOrgIdRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.GetUserByOrgIdResponse;
};

type OrgListAgents = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v1alpha1_org_user_pb.ListAgentsRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.ListAgentsResponse;
};

type OrgListPublicUsers = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v1alpha1_org_user_pb.ListPublicUsersRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.ListPublicUsersResponse;
};

type OrgListUsers = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v1alpha1_org_user_pb.ListUsersRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.ListUsersResponse;
};

type OrgListUsersByOrgId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v1alpha1_org_user_pb.ListUsersByOrgIdRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.ListUsersByOrgIdResponse;
};

type OrgListUsersByRegion = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v1alpha1_org_user_pb.ListUsersByRegionRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.ListUsersByRegionResponse;
};

type OrgUpdateMyUser = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.UpdateMyUserRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.UpdateMyUserResponse;
};

type OrgUpdateUser = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.UpdateUserRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.UpdateUserResponse;
};

type OrgUpdateUserLabels = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.UpdateUserLabelsRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.UpdateUserLabelsResponse;
};

type OrgUpdateUserCallerId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.UpdateUserCallerIdRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.UpdateUserCallerIdResponse;
};

type OrgUpdateUserDisabled = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.UpdateUserDisabledRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.UpdateUserDisabledResponse;
};

type OrgUpdateUserDisabledByOrgId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.UpdateUserDisabledByOrgIdRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.UpdateUserDisabledByOrgIdResponse;
};

type OrgGetMyUserPasswordResetLink = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.GetMyUserPasswordResetLinkRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.GetMyUserPasswordResetLinkResponse;
};

type OrgGetUserPasswordResetLink = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.GetUserPasswordResetLinkRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.GetUserPasswordResetLinkResponse;
};

type OrgGetUserPasswordResetLinkByOrgId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.GetUserPasswordResetLinkByOrgIdRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.GetUserPasswordResetLinkByOrgIdResponse;
};

type OrgCreatePasswordResetLink = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.CreatePasswordResetLinkRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.CreatePasswordResetLinkResponse;
};

type OrgCreatePasswordResetLinkByOrgId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.CreatePasswordResetLinkByOrgIdRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.CreatePasswordResetLinkByOrgIdResponse;
};

type OrgGetUserLoginInfo = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.GetUserLoginInfoRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.GetUserLoginInfoResponse;
};

type OrgGetUserEmailVerified = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.GetUserEmailVerifiedRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.GetUserEmailVerifiedResponse;
};

type OrgGetUserEmailVerifiedByOrgId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.GetUserEmailVerifiedByOrgIdRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.GetUserEmailVerifiedByOrgIdResponse;
};

type OrgResetMyPassword = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.ResetMyPasswordRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.ResetMyPasswordResponse;
};

type OrgResetUserPassword = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.ResetUserPasswordRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.ResetUserPasswordResponse;
};

type OrgResetUserPasswordByOrgId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.ResetUserPasswordByOrgIdRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.ResetUserPasswordByOrgIdResponse;
};

type OrgSendUserEmailVerification = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.SendUserEmailVerificationRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.SendUserEmailVerificationResponse;
};

type OrgSendUserEmailVerificationByOrgId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.SendUserEmailVerificationByOrgIdRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.SendUserEmailVerificationByOrgIdResponse;
};

type OrgSendPasswordReset = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.SendPasswordResetRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.SendPasswordResetResponse;
};

type OrgSendPasswordResetByOrgId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.SendPasswordResetByOrgIdRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.SendPasswordResetByOrgIdResponse;
};

type OrgGetUserSessionData = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.GetUserSessionDataRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.GetUserSessionDataResponse;
};

type OrgGetAgentProfileGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_agent_profile_group_pb.GetAgentProfileGroupRequest;
  readonly responseType: typeof api_v1alpha1_org_agent_profile_group_pb.GetAgentProfileGroupResponse;
};

type OrgListAgentProfileGroups = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_agent_profile_group_pb.ListAgentProfileGroupsRequest;
  readonly responseType: typeof api_v1alpha1_org_agent_profile_group_pb.ListAgentProfileGroupsResponse;
};

type OrgUpdateAgentProfileGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_agent_profile_group_pb.UpdateAgentProfileGroupRequest;
  readonly responseType: typeof api_v1alpha1_org_agent_profile_group_pb.UpdateAgentProfileGroupResponse;
};

type OrgCreateAgentProfileGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_agent_profile_group_pb.CreateAgentProfileGroupRequest;
  readonly responseType: typeof api_v1alpha1_org_agent_profile_group_pb.CreateAgentProfileGroupResponse;
};

type OrgDeleteAgentProfileGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_agent_profile_group_pb.DeleteAgentProfileGroupRequest;
  readonly responseType: typeof api_v1alpha1_org_agent_profile_group_pb.DeleteAgentProfileGroupResponse;
};

type OrgAssignAgentProfileGroups = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_agent_profile_group_pb.AssignAgentProfileGroupsRequest;
  readonly responseType: typeof api_v1alpha1_org_agent_profile_group_pb.AssignAgentProfileGroupsResponse;
};

type OrgAddUserSubscription = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_notifications_pb.AddUserSubscriptionRequest;
  readonly responseType: typeof api_v1alpha1_org_notifications_pb.AddUserSubscriptionResponse;
};

type OrgAddUserSubscriptionByUserId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_notifications_pb.AddUserSubscriptionByUserIdRequest;
  readonly responseType: typeof api_v1alpha1_org_notifications_pb.AddUserSubscriptionByUserIdResponse;
};

type OrgGetUserSubscription = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_notifications_pb.GetUserSubscriptionRequest;
  readonly responseType: typeof api_v1alpha1_org_notifications_pb.GetUserSubscriptionResponse;
};

type OrgGetUserSubscriptionByUserId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_notifications_pb.GetUserSubscriptionByUserIdRequest;
  readonly responseType: typeof api_v1alpha1_org_notifications_pb.GetUserSubscriptionByUserIdResponse;
};

type OrgUpdateUserSubscription = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_notifications_pb.UpdateUserSubscriptionRequest;
  readonly responseType: typeof api_v1alpha1_org_notifications_pb.UpdateUserSubscriptionResponse;
};

type OrgUpdateUserSubscriptionByUserId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_notifications_pb.UpdateUserSubscriptionByUserIdRequest;
  readonly responseType: typeof api_v1alpha1_org_notifications_pb.UpdateUserSubscriptionByUserIdResponse;
};

type OrgRemoveUserSubscription = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_notifications_pb.RemoveUserSubscriptionRequest;
  readonly responseType: typeof api_v1alpha1_org_notifications_pb.RemoveUserSubscriptionResponse;
};

type OrgRemoveUserSubscriptionByUserId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_notifications_pb.RemoveUserSubscriptionByUserIdRequest;
  readonly responseType: typeof api_v1alpha1_org_notifications_pb.RemoveUserSubscriptionByUserIdResponse;
};

type OrgListUserSubscriptions = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_notifications_pb.ListUserSubscriptionsRequest;
  readonly responseType: typeof api_v1alpha1_org_notifications_pb.ListUserSubscriptionsResponse;
};

type OrgListUserSubscriptionsByUserId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_notifications_pb.ListUserSubscriptionsByUserIdRequest;
  readonly responseType: typeof api_v1alpha1_org_notifications_pb.ListUserSubscriptionsByUserIdResponse;
};

type OrgListOrgSubscriptions = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_notifications_pb.ListOrgSubscriptionsRequest;
  readonly responseType: typeof api_v1alpha1_org_notifications_pb.ListOrgSubscriptionsResponse;
};

type OrgCreateAuthToken = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_auth_token_pb.CreateAuthTokenRequest;
  readonly responseType: typeof api_v1alpha1_org_auth_token_pb.CreateAuthTokenResponse;
};

type OrgCreateAuthTokenByUserId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_auth_token_pb.CreateAuthTokenByUserIdRequest;
  readonly responseType: typeof api_v1alpha1_org_auth_token_pb.CreateAuthTokenByUserIdResponse;
};

type OrgListAuthTokens = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_auth_token_pb.ListAuthTokensRequest;
  readonly responseType: typeof api_v1alpha1_org_auth_token_pb.ListAuthTokensResponse;
};

type OrgListAuthTokensByUserId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_auth_token_pb.ListAuthTokensByUserIdRequest;
  readonly responseType: typeof api_v1alpha1_org_auth_token_pb.ListAuthTokensByUserIdResponse;
};

type OrgSetAuthTokenExpiration = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_auth_token_pb.SetAuthTokenExpirationRequest;
  readonly responseType: typeof api_v1alpha1_org_auth_token_pb.SetAuthTokenExpirationResponse;
};

type OrgSetAuthTokenExpirationByUserId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_auth_token_pb.SetAuthTokenExpirationByUserIdRequest;
  readonly responseType: typeof api_v1alpha1_org_auth_token_pb.SetAuthTokenExpirationByUserIdResponse;
};

type OrgDeleteAuthToken = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_auth_token_pb.DeleteAuthTokenRequest;
  readonly responseType: typeof api_v1alpha1_org_auth_token_pb.DeleteAuthTokenResponse;
};

type OrgDeleteAuthTokenByUserId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_auth_token_pb.DeleteAuthTokenByUserIdRequest;
  readonly responseType: typeof api_v1alpha1_org_auth_token_pb.DeleteAuthTokenByUserIdResponse;
};

type OrgGetHuntGroupSettings = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.GetHuntGroupSettingsRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.GetHuntGroupSettingsResponse;
};

type OrgUpdateHuntGroupSettings = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupSettingsRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupSettingsResponse;
};

type OrgCreateHuntGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.CreateHuntGroupRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.CreateHuntGroupResponse;
};

type OrgUpdateHuntGroupGeneralDetails = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupGeneralDetailsRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupGeneralDetailsResponse;
};

type OrgDeleteHuntGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.DeleteHuntGroupRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.DeleteHuntGroupResponse;
};

type OrgGetHuntGroupDetails = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.GetHuntGroupDetailsRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.GetHuntGroupDetailsResponse;
};

type OrgListCallerIdBuckets = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.ListCallerIdBucketsRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.ListCallerIdBucketsResponse;
};

type OrgGetDataDipTemplate = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.GetDataDipTemplateRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.GetDataDipTemplateResponse;
};

type OrgListDataDipTemplates = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.ListDataDipTemplatesRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.ListDataDipTemplatesResponse;
};

type OrgCreateDataDipTemplate = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.CreateDataDipTemplateRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.CreateDataDipTemplateResponse;
};

type OrgUpdateDataDipTemplate = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.UpdateDataDipTemplateRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.UpdateDataDipTemplateResponse;
};

type OrgDeleteDataDipTemplate = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.DeleteDataDipTemplateRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.DeleteDataDipTemplateResponse;
};

type OrgCopyDataDipTemplate = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.CopyDataDipTemplateRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.CopyDataDipTemplateResponse;
};

type OrgCopyDataDipTemplateToOrganization = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.CopyDataDipTemplateToOrganizationRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.CopyDataDipTemplateToOrganizationResponse;
};

type OrgListBroadcastTemplateGeneralDetails = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.ListBroadcastTemplateGeneralDetailsRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.ListBroadcastTemplateGeneralDetailsResponse;
};

type OrgListAgentResponseAutoRules = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.ListAgentResponseAutoRulesRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.ListAgentResponseAutoRulesResponse;
};

type OrgCreateAgentResponseAutoRules = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.CreateAgentResponseAutoRulesRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.CreateAgentResponseAutoRulesResponse;
};

type OrgUpdateAgentResponseAutoRules = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.UpdateAgentResponseAutoRulesRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.UpdateAgentResponseAutoRulesResponse;
};

type OrgDeleteAgentResponseAutoRules = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.DeleteAgentResponseAutoRulesRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.DeleteAgentResponseAutoRulesResponse;
};

type OrgListHuntGroupWebLinks = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.ListHuntGroupWebLinksRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.ListHuntGroupWebLinksResponse;
};

type OrgCopyHuntGroupWebLink = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.CopyHuntGroupWebLinkRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.CopyHuntGroupWebLinkResponse;
};

type OrgUpdateHuntGroupWebLinks = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupWebLinksRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupWebLinksResponse;
};

type OrgListHuntGroupIntegrationLinks = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.ListHuntGroupIntegrationLinksRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.ListHuntGroupIntegrationLinksResponse;
};

type OrgCopyHuntGroupIntegrationLink = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.CopyHuntGroupIntegrationLinkRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.CopyHuntGroupIntegrationLinkResponse;
};

type OrgUpdateHuntGroupIntegrationLinks = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupIntegrationLinksRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupIntegrationLinksResponse;
};

type OrgGetHuntGroupClientInfoDisplayTemplate = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.GetHuntGroupClientInfoDisplayTemplateRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.GetHuntGroupClientInfoDisplayTemplateResponse;
};

type OrgCreateHuntGroupClientInfoDisplayTemplate = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.CreateHuntGroupClientInfoDisplayTemplateRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.CreateHuntGroupClientInfoDisplayTemplateResponse;
};

type OrgUpdateHuntGroupClientInfoDisplayTemplate = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupClientInfoDisplayTemplateRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupClientInfoDisplayTemplateResponse;
};

type OrgDeleteHuntGroupClientInfoDisplayTemplate = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.DeleteHuntGroupClientInfoDisplayTemplateRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.DeleteHuntGroupClientInfoDisplayTemplateResponse;
};

type OrgCopyHuntGroupClientInfoDisplayTemplate = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.CopyHuntGroupClientInfoDisplayTemplateRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.CopyHuntGroupClientInfoDisplayTemplateResponse;
};

type OrgCreateCampaignClientInfoDisplayTemplate = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.CreateCampaignClientInfoDisplayTemplateRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.CreateCampaignClientInfoDisplayTemplateResponse;
};

type OrgListHuntGroupsWithClientInfoTemplateData = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.ListHuntGroupsWithClientInfoTemplateDataRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.ListHuntGroupsWithClientInfoTemplateDataResponse;
};

type OrgListAgentTriggers = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.ListAgentTriggersRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.ListAgentTriggersResponse;
};

type OrgCopyAgentTrigger = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.CopyAgentTriggerRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.CopyAgentTriggerResponse;
};

type OrgUpdateAgentTriggers = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.UpdateAgentTriggersRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.UpdateAgentTriggersResponse;
};

type OrgListHuntGroupScripts = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.ListHuntGroupScriptsRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.ListHuntGroupScriptsResponse;
};

type OrgGetHuntGroupScript = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.GetHuntGroupScriptRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.GetHuntGroupScriptResponse;
};

type OrgCreateHuntGroupScript = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.CreateHuntGroupScriptRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.CreateHuntGroupScriptResponse;
};

type OrgUpdateHuntGroupScript = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupScriptRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupScriptResponse;
};

type OrgDeleteHuntGroupScript = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.DeleteHuntGroupScriptRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.DeleteHuntGroupScriptResponse;
};

type OrgAssignScriptToHuntGroups = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.AssignScriptToHuntGroupsRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.AssignScriptToHuntGroupsResponse;
};

type OrgUnassignScriptFromHuntGroups = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_huntgroup_pb.UnassignScriptFromHuntGroupsRequest;
  readonly responseType: typeof api_v1alpha1_org_huntgroup_pb.UnassignScriptFromHuntGroupsResponse;
};

type OrgCreateTrust = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_trusts_pb.CreateTrustRequest;
  readonly responseType: typeof api_v1alpha1_org_trusts_pb.CreateTrustResponse;
};

type OrgAcceptTrust = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_trusts_pb.AcceptTrustRequest;
  readonly responseType: typeof api_v1alpha1_org_trusts_pb.AcceptTrustResponse;
};

type OrgRejectTrust = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_trusts_pb.RejectTrustRequest;
  readonly responseType: typeof api_v1alpha1_org_trusts_pb.RejectTrustResponse;
};

type OrgGetTrust = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_trusts_pb.GetTrustRequest;
  readonly responseType: typeof api_v1alpha1_org_trusts_pb.GetTrustResponse;
};

type OrgListIncomingTrusts = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_trusts_pb.ListIncomingTrustsRequest;
  readonly responseType: typeof api_v1alpha1_org_trusts_pb.ListIncomingTrustsResponse;
};

type OrgListGivenTrusts = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_trusts_pb.ListGivenTrustsRequest;
  readonly responseType: typeof api_v1alpha1_org_trusts_pb.ListGivenTrustsResponse;
};

type OrgListAssignableTrusts = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_trusts_pb.ListAssignableTrustsRequest;
  readonly responseType: typeof api_v1alpha1_org_trusts_pb.ListAssignableTrustsResponse;
};

type OrgDeleteTrust = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_trusts_pb.DeleteTrustRequest;
  readonly responseType: typeof api_v1alpha1_org_trusts_pb.DeleteTrustResponse;
};

type OrgAssignTrust = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_trusts_pb.AssignTrustRequest;
  readonly responseType: typeof api_v1alpha1_org_trusts_pb.AssignTrustResponse;
};

type OrgUnassignTrust = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_trusts_pb.UnassignTrustRequest;
  readonly responseType: typeof api_v1alpha1_org_trusts_pb.UnassignTrustResponse;
};

type OrgCreateLabel = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_labels_pb.CreateLabelRequest;
  readonly responseType: typeof api_v1alpha1_org_labels_pb.CreateLabelResponse;
};

type OrgDeleteLabel = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_labels_pb.DeleteLabelRequest;
  readonly responseType: typeof api_v1alpha1_org_labels_pb.DeleteLabelResponse;
};

type OrgListLabels = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_labels_pb.ListLabelsRequest;
  readonly responseType: typeof api_v1alpha1_org_labels_pb.ListLabelsResponse;
};

type OrgGetLabel = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_labels_pb.GetLabelRequest;
  readonly responseType: typeof api_v1alpha1_org_labels_pb.GetLabelResponse;
};

type OrgUpdateLabel = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_labels_pb.UpdateLabelRequest;
  readonly responseType: typeof api_v1alpha1_org_labels_pb.UpdateLabelResponse;
};

type OrgAssignLabel = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_labels_pb.AssignLabelRequest;
  readonly responseType: typeof api_v1alpha1_org_labels_pb.AssignLabelResponse;
};

type OrgUnassignLabel = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_labels_pb.UnassignLabelRequest;
  readonly responseType: typeof api_v1alpha1_org_labels_pb.UnassignLabelResponse;
};

type OrgGetAssignmentCounts = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_labels_pb.GetAssignmentCountsRequest;
  readonly responseType: typeof api_v1alpha1_org_labels_pb.GetAssignmentCountsResponse;
};

type OrgGetAssignableLabels = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_labels_pb.GetAssignableLabelsRequest;
  readonly responseType: typeof api_v1alpha1_org_labels_pb.GetAssignableLabelsResponse;
};

type OrgGetPermissions = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_permissions_pb.GetPermissionsRequest;
  readonly responseType: typeof api_v1alpha1_org_permissions_pb.GetPermissionsResponse;
};

type OrgGetUserPermissions = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_permissions_pb.GetUserPermissionsRequest;
  readonly responseType: typeof api_v1alpha1_org_permissions_pb.GetUserPermissionsResponse;
};

type OrgCreatePermissionGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_permissions_pb.CreatePermissionGroupRequest;
  readonly responseType: typeof api_v1alpha1_org_permissions_pb.CreatePermissionGroupResponse;
};

type OrgUpdatePermissionGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_permissions_pb.UpdatePermissionGroupRequest;
  readonly responseType: typeof api_v1alpha1_org_permissions_pb.UpdatePermissionGroupResponse;
};

type OrgDeletePermissionGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_permissions_pb.DeletePermissionGroupRequest;
  readonly responseType: typeof api_v1alpha1_org_permissions_pb.DeletePermissionGroupResponse;
};

type OrgListPermissionGroups = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_permissions_pb.ListPermissionGroupsRequest;
  readonly responseType: typeof api_v1alpha1_org_permissions_pb.ListPermissionGroupsResponse;
};

type OrgListPermissionGroupsByOrgId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_permissions_pb.ListPermissionGroupsByOrgIdRequest;
  readonly responseType: typeof api_v1alpha1_org_permissions_pb.ListPermissionGroupsByOrgIdResponse;
};

type OrgAssignUsersPermissionGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_permissions_pb.AssignUsersPermissionGroupRequest;
  readonly responseType: typeof api_v1alpha1_org_permissions_pb.AssignUsersPermissionGroupResponse;
};

type OrgRevokeUsersPermissionGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_permissions_pb.RevokeUsersPermissionGroupRequest;
  readonly responseType: typeof api_v1alpha1_org_permissions_pb.RevokeUsersPermissionGroupResponse;
};

type OrgAssignLabels = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_permissions_pb.AssignLabelsRequest;
  readonly responseType: typeof api_v1alpha1_org_permissions_pb.AssignLabelsResponse;
};

type OrgRevokeLabels = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_permissions_pb.RevokeLabelsRequest;
  readonly responseType: typeof api_v1alpha1_org_permissions_pb.RevokeLabelsResponse;
};

type OrgAssignAccountOwnerPermissionToUser = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_permissions_pb.AssignAccountOwnerPermissionToUserRequest;
  readonly responseType: typeof api_v1alpha1_org_permissions_pb.AssignAccountOwnerPermissionToUserResponse;
};

type OrgRevokeAccountOwnerPermissionFromUser = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_permissions_pb.RevokeAccountOwnerPermissionFromUserRequest;
  readonly responseType: typeof api_v1alpha1_org_permissions_pb.RevokeAccountOwnerPermissionFromUserResponse;
};

type OrgInitDefaultPermissionGroups = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_permissions_pb.InitDefaultPermissionGroupsRequest;
  readonly responseType: typeof api_v1alpha1_org_permissions_pb.InitDefaultPermissionGroupsResponse;
};

type OrgGetAccountOwnerGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_permissions_pb.GetAccountOwnerGroupRequest;
  readonly responseType: typeof api_v1alpha1_org_permissions_pb.GetAccountOwnerGroupResponse;
};

type OrgGetLicenses = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_permissions_pb.GetLicensesRequest;
  readonly responseType: typeof api_v1alpha1_org_permissions_pb.GetLicensesResponse;
};

type OrgGetOrgLicenses = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_permissions_pb.GetOrgLicensesRequest;
  readonly responseType: typeof api_v1alpha1_org_permissions_pb.GetOrgLicensesResponse;
};

type OrgUpdateLicenses = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_permissions_pb.UpdateLicensesRequest;
  readonly responseType: typeof api_v1alpha1_org_permissions_pb.UpdateLicensesResponse;
};

type OrgRemovePermissionFromAllPermissionGroups = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_permissions_pb.RemovePermissionFromAllPermissionGroupsRequest;
  readonly responseType: typeof api_v1alpha1_org_permissions_pb.RemovePermissionFromAllPermissionGroupsResponse;
};

type OrgListP3PermissionGroups = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_p3_permissions_pb.ListP3PermissionGroupsRequest;
  readonly responseType: typeof api_v1alpha1_org_p3_permissions_pb.ListP3PermissionGroupsResponse;
};

type OrgListP3PermissionGroupsByOrgId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_p3_permissions_pb.ListP3PermissionGroupsRequest;
  readonly responseType: typeof api_v1alpha1_org_p3_permissions_pb.ListP3PermissionGroupsResponse;
};

type OrgCreateP3PermissionGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_p3_permissions_pb.CreateP3PermissionGroupRequest;
  readonly responseType: typeof api_v1alpha1_org_p3_permissions_pb.CreateP3PermissionGroupResponse;
};

type OrgUpdateP3PermissionGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_p3_permissions_pb.UpdateP3PermissionGroupRequest;
  readonly responseType: typeof api_v1alpha1_org_p3_permissions_pb.UpdateP3PermissionGroupResponse;
};

type OrgUpdateP3PermissionGroupByOrgId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_p3_permissions_pb.UpdateP3PermissionGroupByOrgIdRequest;
  readonly responseType: typeof api_v1alpha1_org_p3_permissions_pb.UpdateP3PermissionGroupByOrgIdResponse;
};

type OrgDeleteP3PermissionGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_p3_permissions_pb.DeleteP3PermissionGroupRequest;
  readonly responseType: typeof api_v1alpha1_org_p3_permissions_pb.DeleteP3PermissionGroupResponse;
};

type OrgAssignUsersP3PermissionGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_p3_permissions_pb.AssignUsersP3PermissionGroupRequest;
  readonly responseType: typeof api_v1alpha1_org_p3_permissions_pb.AssignUsersP3PermissionGroupResponse;
};

type OrgRevokeUsersP3PermissionGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_p3_permissions_pb.RevokeUsersP3PermissionGroupRequest;
  readonly responseType: typeof api_v1alpha1_org_p3_permissions_pb.RevokeUsersP3PermissionGroupResponse;
};

type OrgRefreshMfaLockout = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.RefreshMfaLockoutRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.RefreshMfaLockoutResponse;
};

type OrgRefreshMfaLockoutByOrgId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.RefreshMfaLockoutByOrgIdRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.RefreshMfaLockoutByOrgIdResponse;
};

type OrgSetMfaType = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.SetMfaTypeRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.SetMfaTypeResponse;
};

type OrgSetMyMfaType = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.SetMyMfaTypeRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.SetMyMfaTypeResponse;
};

type OrgEnableUserMfa = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.EnableUserMfaRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.EnableUserMfaResponse;
};

type OrgEnableMyUserMfa = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.EnableMyUserMfaRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.EnableMyUserMfaResponse;
};

type OrgGetUserMfaInfo = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.GetUserMfaInfoRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.GetUserMfaInfoResponse;
};

type OrgGetMyUserMfaInfo = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.GetMyUserMfaInfoRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.GetMyUserMfaInfoResponse;
};

type OrgGetMyAllowedMfaMethods = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.GetMyAllowedMfaMethodsRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.GetMyAllowedMfaMethodsResponse;
};

type OrgCreateBusinessHours = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.CreateBusinessHoursRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.CreateBusinessHoursResponse;
};

type OrgUpdateBusinessHours = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_preferences_pb.UpdateBusinessHoursRequest;
  readonly responseType: typeof api_v1alpha1_org_preferences_pb.UpdateBusinessHoursResponse;
};

type OrgAddGroupedUserIPRestrictions = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.AddGroupedUserIPRestrictionsRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.AddGroupedUserIPRestrictionsResponse;
};

type OrgRemoveGroupedUserIPRestrictions = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.RemoveGroupedUserIPRestrictionsRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.RemoveGroupedUserIPRestrictionsResponse;
};

type OrgListUsersAllowedIps = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_user_pb.ListUsersAllowedIpsRequest;
  readonly responseType: typeof api_v1alpha1_org_user_pb.ListUsersAllowedIpsResponse;
};

export class Org {
  static readonly serviceName: string;
  static readonly CreateOrganization: OrgCreateOrganization;
  static readonly GetOrganization: OrgGetOrganization;
  static readonly GetOrganizationById: OrgGetOrganizationById;
  static readonly UpdateOrganization: OrgUpdateOrganization;
  static readonly ArchiveOrganization: OrgArchiveOrganization;
  static readonly UnArchiveOrganization: OrgUnArchiveOrganization;
  static readonly ListAllOrganizationsGlobally: OrgListAllOrganizationsGlobally;
  static readonly ListOrganizationsByRegion: OrgListOrganizationsByRegion;
  static readonly ListArchivedOrganizations: OrgListArchivedOrganizations;
  static readonly ConvertOrgToManual: OrgConvertOrgToManual;
  static readonly ListOwnedOrgs: OrgListOwnedOrgs;
  static readonly GetOrganizationPreferences: OrgGetOrganizationPreferences;
  static readonly UpdateOrganizationPreferences: OrgUpdateOrganizationPreferences;
  static readonly GetAgentPreferences: OrgGetAgentPreferences;
  static readonly UpdateAgentPreferences: OrgUpdateAgentPreferences;
  static readonly GetContactPreferences: OrgGetContactPreferences;
  static readonly UpdateContactPreferences: OrgUpdateContactPreferences;
  static readonly GetAuthenticationPreferences: OrgGetAuthenticationPreferences;
  static readonly UpdateAuthenticationPreferences: OrgUpdateAuthenticationPreferences;
  static readonly GetWebhookPreferences: OrgGetWebhookPreferences;
  static readonly UpdateWebhookPreferences: OrgUpdateWebhookPreferences;
  static readonly GetDashboardGeneralPreferences: OrgGetDashboardGeneralPreferences;
  static readonly UpdateDashboardGeneralPreferences: OrgUpdateDashboardGeneralPreferences;
  static readonly GetDashboardQueuePreferences: OrgGetDashboardQueuePreferences;
  static readonly UpdateDashboardQueuePreferences: OrgUpdateDashboardQueuePreferences;
  static readonly GetPhonePreferences: OrgGetPhonePreferences;
  static readonly UpdatePhonePreferences: OrgUpdatePhonePreferences;
  static readonly GetCompliancePreferences: OrgGetCompliancePreferences;
  static readonly UpdateCompliancePreferences: OrgUpdateCompliancePreferences;
  static readonly GetBroadcastPreferences: OrgGetBroadcastPreferences;
  static readonly UpdateBroadcastPreferences: OrgUpdateBroadcastPreferences;
  static readonly GetSchedulePreferences: OrgGetSchedulePreferences;
  static readonly UpdateSchedulePreferences: OrgUpdateSchedulePreferences;
  static readonly GetEmailSmsPreferences: OrgGetEmailSmsPreferences;
  static readonly UpdateEmailSmsPreferences: OrgUpdateEmailSmsPreferences;
  static readonly GetBusinessPreferences: OrgGetBusinessPreferences;
  static readonly UpdateBusinessPreferences: OrgUpdateBusinessPreferences;
  static readonly UpdateAdminBusinessPreferences: OrgUpdateAdminBusinessPreferences;
  static readonly GetScorecardsPreferences: OrgGetScorecardsPreferences;
  static readonly UpdateScorecardsPreferences: OrgUpdateScorecardsPreferences;
  static readonly GetVoiceAnalyticsPreferences: OrgGetVoiceAnalyticsPreferences;
  static readonly ListVoiceAnalyticsPreferences: OrgListVoiceAnalyticsPreferences;
  static readonly UpdateVoiceAnalyticsPreferences: OrgUpdateVoiceAnalyticsPreferences;
  static readonly GetEndOfDayPreferences: OrgGetEndOfDayPreferences;
  static readonly UpdateEndOfDayPreferences: OrgUpdateEndOfDayPreferences;
  static readonly GetReportFilterPreferences: OrgGetReportFilterPreferences;
  static readonly UpdateReportFilterPreferences: OrgUpdateReportFilterPreferences;
  static readonly GetRecordingPreferences: OrgGetRecordingPreferences;
  static readonly UpdateRecordingPreferences: OrgUpdateRecordingPreferences;
  static readonly GetAdminClientPreferences: OrgGetAdminClientPreferences;
  static readonly UpdateAdminClientPreferences: OrgUpdateAdminClientPreferences;
  static readonly AcceptLinkbackRecordingTerms: OrgAcceptLinkbackRecordingTerms;
  static readonly LinkbackUpdateBroadcastTemplates: OrgLinkbackUpdateBroadcastTemplates;
  static readonly RecordEmailUnsubscribeAcknowledgement: OrgRecordEmailUnsubscribeAcknowledgement;
  static readonly ClearEmailUnsubscribeAcknowledgement: OrgClearEmailUnsubscribeAcknowledgement;
  static readonly ListBusinessHours: OrgListBusinessHours;
  static readonly GetBusinessHours: OrgGetBusinessHours;
  static readonly SetBusinessHours: OrgSetBusinessHours;
  static readonly AddIntervalToBusinessHours: OrgAddIntervalToBusinessHours;
  static readonly RemoveIntervalFromBusinessHours: OrgRemoveIntervalFromBusinessHours;
  static readonly UpdateBusinessHoursInfo: OrgUpdateBusinessHoursInfo;
  static readonly DeleteBusinessHours: OrgDeleteBusinessHours;
  static readonly EvaluateBusinessHours: OrgEvaluateBusinessHours;
  static readonly CreateUser: OrgCreateUser;
  static readonly CreateDelegatedUser: OrgCreateDelegatedUser;
  static readonly GetMyUser: OrgGetMyUser;
  static readonly GetUser: OrgGetUser;
  static readonly GetUserByOrgId: OrgGetUserByOrgId;
  static readonly ListAgents: OrgListAgents;
  static readonly ListPublicUsers: OrgListPublicUsers;
  static readonly ListUsers: OrgListUsers;
  static readonly ListUsersByOrgId: OrgListUsersByOrgId;
  static readonly ListUsersByRegion: OrgListUsersByRegion;
  static readonly UpdateMyUser: OrgUpdateMyUser;
  static readonly UpdateUser: OrgUpdateUser;
  static readonly UpdateUserLabels: OrgUpdateUserLabels;
  static readonly UpdateUserCallerId: OrgUpdateUserCallerId;
  static readonly UpdateUserDisabled: OrgUpdateUserDisabled;
  static readonly UpdateUserDisabledByOrgId: OrgUpdateUserDisabledByOrgId;
  static readonly GetMyUserPasswordResetLink: OrgGetMyUserPasswordResetLink;
  static readonly GetUserPasswordResetLink: OrgGetUserPasswordResetLink;
  static readonly GetUserPasswordResetLinkByOrgId: OrgGetUserPasswordResetLinkByOrgId;
  static readonly CreatePasswordResetLink: OrgCreatePasswordResetLink;
  static readonly CreatePasswordResetLinkByOrgId: OrgCreatePasswordResetLinkByOrgId;
  static readonly GetUserLoginInfo: OrgGetUserLoginInfo;
  static readonly GetUserEmailVerified: OrgGetUserEmailVerified;
  static readonly GetUserEmailVerifiedByOrgId: OrgGetUserEmailVerifiedByOrgId;
  static readonly ResetMyPassword: OrgResetMyPassword;
  static readonly ResetUserPassword: OrgResetUserPassword;
  static readonly ResetUserPasswordByOrgId: OrgResetUserPasswordByOrgId;
  static readonly SendUserEmailVerification: OrgSendUserEmailVerification;
  static readonly SendUserEmailVerificationByOrgId: OrgSendUserEmailVerificationByOrgId;
  static readonly SendPasswordReset: OrgSendPasswordReset;
  static readonly SendPasswordResetByOrgId: OrgSendPasswordResetByOrgId;
  static readonly GetUserSessionData: OrgGetUserSessionData;
  static readonly GetAgentProfileGroup: OrgGetAgentProfileGroup;
  static readonly ListAgentProfileGroups: OrgListAgentProfileGroups;
  static readonly UpdateAgentProfileGroup: OrgUpdateAgentProfileGroup;
  static readonly CreateAgentProfileGroup: OrgCreateAgentProfileGroup;
  static readonly DeleteAgentProfileGroup: OrgDeleteAgentProfileGroup;
  static readonly AssignAgentProfileGroups: OrgAssignAgentProfileGroups;
  static readonly AddUserSubscription: OrgAddUserSubscription;
  static readonly AddUserSubscriptionByUserId: OrgAddUserSubscriptionByUserId;
  static readonly GetUserSubscription: OrgGetUserSubscription;
  static readonly GetUserSubscriptionByUserId: OrgGetUserSubscriptionByUserId;
  static readonly UpdateUserSubscription: OrgUpdateUserSubscription;
  static readonly UpdateUserSubscriptionByUserId: OrgUpdateUserSubscriptionByUserId;
  static readonly RemoveUserSubscription: OrgRemoveUserSubscription;
  static readonly RemoveUserSubscriptionByUserId: OrgRemoveUserSubscriptionByUserId;
  static readonly ListUserSubscriptions: OrgListUserSubscriptions;
  static readonly ListUserSubscriptionsByUserId: OrgListUserSubscriptionsByUserId;
  static readonly ListOrgSubscriptions: OrgListOrgSubscriptions;
  static readonly CreateAuthToken: OrgCreateAuthToken;
  static readonly CreateAuthTokenByUserId: OrgCreateAuthTokenByUserId;
  static readonly ListAuthTokens: OrgListAuthTokens;
  static readonly ListAuthTokensByUserId: OrgListAuthTokensByUserId;
  static readonly SetAuthTokenExpiration: OrgSetAuthTokenExpiration;
  static readonly SetAuthTokenExpirationByUserId: OrgSetAuthTokenExpirationByUserId;
  static readonly DeleteAuthToken: OrgDeleteAuthToken;
  static readonly DeleteAuthTokenByUserId: OrgDeleteAuthTokenByUserId;
  static readonly GetHuntGroupSettings: OrgGetHuntGroupSettings;
  static readonly UpdateHuntGroupSettings: OrgUpdateHuntGroupSettings;
  static readonly CreateHuntGroup: OrgCreateHuntGroup;
  static readonly UpdateHuntGroupGeneralDetails: OrgUpdateHuntGroupGeneralDetails;
  static readonly DeleteHuntGroup: OrgDeleteHuntGroup;
  static readonly GetHuntGroupDetails: OrgGetHuntGroupDetails;
  static readonly ListCallerIdBuckets: OrgListCallerIdBuckets;
  static readonly GetDataDipTemplate: OrgGetDataDipTemplate;
  static readonly ListDataDipTemplates: OrgListDataDipTemplates;
  static readonly CreateDataDipTemplate: OrgCreateDataDipTemplate;
  static readonly UpdateDataDipTemplate: OrgUpdateDataDipTemplate;
  static readonly DeleteDataDipTemplate: OrgDeleteDataDipTemplate;
  static readonly CopyDataDipTemplate: OrgCopyDataDipTemplate;
  static readonly CopyDataDipTemplateToOrganization: OrgCopyDataDipTemplateToOrganization;
  static readonly ListBroadcastTemplateGeneralDetails: OrgListBroadcastTemplateGeneralDetails;
  static readonly ListAgentResponseAutoRules: OrgListAgentResponseAutoRules;
  static readonly CreateAgentResponseAutoRules: OrgCreateAgentResponseAutoRules;
  static readonly UpdateAgentResponseAutoRules: OrgUpdateAgentResponseAutoRules;
  static readonly DeleteAgentResponseAutoRules: OrgDeleteAgentResponseAutoRules;
  static readonly ListHuntGroupWebLinks: OrgListHuntGroupWebLinks;
  static readonly CopyHuntGroupWebLink: OrgCopyHuntGroupWebLink;
  static readonly UpdateHuntGroupWebLinks: OrgUpdateHuntGroupWebLinks;
  static readonly ListHuntGroupIntegrationLinks: OrgListHuntGroupIntegrationLinks;
  static readonly CopyHuntGroupIntegrationLink: OrgCopyHuntGroupIntegrationLink;
  static readonly UpdateHuntGroupIntegrationLinks: OrgUpdateHuntGroupIntegrationLinks;
  static readonly GetHuntGroupClientInfoDisplayTemplate: OrgGetHuntGroupClientInfoDisplayTemplate;
  static readonly CreateHuntGroupClientInfoDisplayTemplate: OrgCreateHuntGroupClientInfoDisplayTemplate;
  static readonly UpdateHuntGroupClientInfoDisplayTemplate: OrgUpdateHuntGroupClientInfoDisplayTemplate;
  static readonly DeleteHuntGroupClientInfoDisplayTemplate: OrgDeleteHuntGroupClientInfoDisplayTemplate;
  static readonly CopyHuntGroupClientInfoDisplayTemplate: OrgCopyHuntGroupClientInfoDisplayTemplate;
  static readonly CreateCampaignClientInfoDisplayTemplate: OrgCreateCampaignClientInfoDisplayTemplate;
  static readonly ListHuntGroupsWithClientInfoTemplateData: OrgListHuntGroupsWithClientInfoTemplateData;
  static readonly ListAgentTriggers: OrgListAgentTriggers;
  static readonly CopyAgentTrigger: OrgCopyAgentTrigger;
  static readonly UpdateAgentTriggers: OrgUpdateAgentTriggers;
  static readonly ListHuntGroupScripts: OrgListHuntGroupScripts;
  static readonly GetHuntGroupScript: OrgGetHuntGroupScript;
  static readonly CreateHuntGroupScript: OrgCreateHuntGroupScript;
  static readonly UpdateHuntGroupScript: OrgUpdateHuntGroupScript;
  static readonly DeleteHuntGroupScript: OrgDeleteHuntGroupScript;
  static readonly AssignScriptToHuntGroups: OrgAssignScriptToHuntGroups;
  static readonly UnassignScriptFromHuntGroups: OrgUnassignScriptFromHuntGroups;
  static readonly CreateTrust: OrgCreateTrust;
  static readonly AcceptTrust: OrgAcceptTrust;
  static readonly RejectTrust: OrgRejectTrust;
  static readonly GetTrust: OrgGetTrust;
  static readonly ListIncomingTrusts: OrgListIncomingTrusts;
  static readonly ListGivenTrusts: OrgListGivenTrusts;
  static readonly ListAssignableTrusts: OrgListAssignableTrusts;
  static readonly DeleteTrust: OrgDeleteTrust;
  static readonly AssignTrust: OrgAssignTrust;
  static readonly UnassignTrust: OrgUnassignTrust;
  static readonly CreateLabel: OrgCreateLabel;
  static readonly DeleteLabel: OrgDeleteLabel;
  static readonly ListLabels: OrgListLabels;
  static readonly GetLabel: OrgGetLabel;
  static readonly UpdateLabel: OrgUpdateLabel;
  static readonly AssignLabel: OrgAssignLabel;
  static readonly UnassignLabel: OrgUnassignLabel;
  static readonly GetAssignmentCounts: OrgGetAssignmentCounts;
  static readonly GetAssignableLabels: OrgGetAssignableLabels;
  static readonly GetPermissions: OrgGetPermissions;
  static readonly GetUserPermissions: OrgGetUserPermissions;
  static readonly CreatePermissionGroup: OrgCreatePermissionGroup;
  static readonly UpdatePermissionGroup: OrgUpdatePermissionGroup;
  static readonly DeletePermissionGroup: OrgDeletePermissionGroup;
  static readonly ListPermissionGroups: OrgListPermissionGroups;
  static readonly ListPermissionGroupsByOrgId: OrgListPermissionGroupsByOrgId;
  static readonly AssignUsersPermissionGroup: OrgAssignUsersPermissionGroup;
  static readonly RevokeUsersPermissionGroup: OrgRevokeUsersPermissionGroup;
  static readonly AssignLabels: OrgAssignLabels;
  static readonly RevokeLabels: OrgRevokeLabels;
  static readonly AssignAccountOwnerPermissionToUser: OrgAssignAccountOwnerPermissionToUser;
  static readonly RevokeAccountOwnerPermissionFromUser: OrgRevokeAccountOwnerPermissionFromUser;
  static readonly InitDefaultPermissionGroups: OrgInitDefaultPermissionGroups;
  static readonly GetAccountOwnerGroup: OrgGetAccountOwnerGroup;
  static readonly GetLicenses: OrgGetLicenses;
  static readonly GetOrgLicenses: OrgGetOrgLicenses;
  static readonly UpdateLicenses: OrgUpdateLicenses;
  static readonly RemovePermissionFromAllPermissionGroups: OrgRemovePermissionFromAllPermissionGroups;
  static readonly ListP3PermissionGroups: OrgListP3PermissionGroups;
  static readonly ListP3PermissionGroupsByOrgId: OrgListP3PermissionGroupsByOrgId;
  static readonly CreateP3PermissionGroup: OrgCreateP3PermissionGroup;
  static readonly UpdateP3PermissionGroup: OrgUpdateP3PermissionGroup;
  static readonly UpdateP3PermissionGroupByOrgId: OrgUpdateP3PermissionGroupByOrgId;
  static readonly DeleteP3PermissionGroup: OrgDeleteP3PermissionGroup;
  static readonly AssignUsersP3PermissionGroup: OrgAssignUsersP3PermissionGroup;
  static readonly RevokeUsersP3PermissionGroup: OrgRevokeUsersP3PermissionGroup;
  static readonly RefreshMfaLockout: OrgRefreshMfaLockout;
  static readonly RefreshMfaLockoutByOrgId: OrgRefreshMfaLockoutByOrgId;
  static readonly SetMfaType: OrgSetMfaType;
  static readonly SetMyMfaType: OrgSetMyMfaType;
  static readonly EnableUserMfa: OrgEnableUserMfa;
  static readonly EnableMyUserMfa: OrgEnableMyUserMfa;
  static readonly GetUserMfaInfo: OrgGetUserMfaInfo;
  static readonly GetMyUserMfaInfo: OrgGetMyUserMfaInfo;
  static readonly GetMyAllowedMfaMethods: OrgGetMyAllowedMfaMethods;
  static readonly CreateBusinessHours: OrgCreateBusinessHours;
  static readonly UpdateBusinessHours: OrgUpdateBusinessHours;
  static readonly AddGroupedUserIPRestrictions: OrgAddGroupedUserIPRestrictions;
  static readonly RemoveGroupedUserIPRestrictions: OrgRemoveGroupedUserIPRestrictions;
  static readonly ListUsersAllowedIps: OrgListUsersAllowedIps;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class OrgClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createOrganization(
    requestMessage: api_v1alpha1_org_organization_pb.CreateOrganizationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_organization_pb.CreateOrganizationResponse|null) => void
  ): UnaryResponse;
  createOrganization(
    requestMessage: api_v1alpha1_org_organization_pb.CreateOrganizationRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_organization_pb.CreateOrganizationResponse|null) => void
  ): UnaryResponse;
  getOrganization(
    requestMessage: api_v1alpha1_org_organization_pb.GetOrganizationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_organization_pb.GetOrganizationResponse|null) => void
  ): UnaryResponse;
  getOrganization(
    requestMessage: api_v1alpha1_org_organization_pb.GetOrganizationRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_organization_pb.GetOrganizationResponse|null) => void
  ): UnaryResponse;
  getOrganizationById(
    requestMessage: api_v1alpha1_org_organization_pb.GetOrganizationByIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_organization_pb.GetOrganizationByIdResponse|null) => void
  ): UnaryResponse;
  getOrganizationById(
    requestMessage: api_v1alpha1_org_organization_pb.GetOrganizationByIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_organization_pb.GetOrganizationByIdResponse|null) => void
  ): UnaryResponse;
  updateOrganization(
    requestMessage: api_v1alpha1_org_organization_pb.UpdateOrganizationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_organization_pb.UpdateOrganizationResponse|null) => void
  ): UnaryResponse;
  updateOrganization(
    requestMessage: api_v1alpha1_org_organization_pb.UpdateOrganizationRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_organization_pb.UpdateOrganizationResponse|null) => void
  ): UnaryResponse;
  archiveOrganization(
    requestMessage: api_v1alpha1_org_organization_pb.ArchiveOrganizationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_organization_pb.ArchiveOrganizationResponse|null) => void
  ): UnaryResponse;
  archiveOrganization(
    requestMessage: api_v1alpha1_org_organization_pb.ArchiveOrganizationRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_organization_pb.ArchiveOrganizationResponse|null) => void
  ): UnaryResponse;
  unArchiveOrganization(
    requestMessage: api_v1alpha1_org_organization_pb.UnArchiveOrganizationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_organization_pb.UnArchiveOrganizationResponse|null) => void
  ): UnaryResponse;
  unArchiveOrganization(
    requestMessage: api_v1alpha1_org_organization_pb.UnArchiveOrganizationRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_organization_pb.UnArchiveOrganizationResponse|null) => void
  ): UnaryResponse;
  listAllOrganizationsGlobally(requestMessage: api_v1alpha1_org_organization_pb.ListAllOrganizationsGloballyRequest, metadata?: grpc.Metadata): ResponseStream<api_v1alpha1_org_organization_pb.ListAllOrganizationsGloballyResponse>;
  listOrganizationsByRegion(requestMessage: api_v1alpha1_org_organization_pb.ListOrganizationsByRegionRequest, metadata?: grpc.Metadata): ResponseStream<api_v1alpha1_org_organization_pb.ListOrganizationsByRegionResponse>;
  listArchivedOrganizations(requestMessage: api_v1alpha1_org_organization_pb.ListArchivedOrganizationsRequest, metadata?: grpc.Metadata): ResponseStream<api_v1alpha1_org_organization_pb.ListArchivedOrganizationsResponse>;
  convertOrgToManual(
    requestMessage: api_v1alpha1_org_organization_pb.ConvertOrgToManualRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_organization_pb.ConvertOrgToManualResponse|null) => void
  ): UnaryResponse;
  convertOrgToManual(
    requestMessage: api_v1alpha1_org_organization_pb.ConvertOrgToManualRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_organization_pb.ConvertOrgToManualResponse|null) => void
  ): UnaryResponse;
  listOwnedOrgs(requestMessage: api_v1alpha1_org_organization_pb.ListOwnedOrgsRequest, metadata?: grpc.Metadata): ResponseStream<api_v1alpha1_org_organization_pb.ListOwnedOrgsResponse>;
  getOrganizationPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetOrganizationPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetOrganizationPreferencesResponse|null) => void
  ): UnaryResponse;
  getOrganizationPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetOrganizationPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetOrganizationPreferencesResponse|null) => void
  ): UnaryResponse;
  updateOrganizationPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateOrganizationPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateOrganizationPreferencesResponse|null) => void
  ): UnaryResponse;
  updateOrganizationPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateOrganizationPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateOrganizationPreferencesResponse|null) => void
  ): UnaryResponse;
  getAgentPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetAgentPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetAgentPreferencesResponse|null) => void
  ): UnaryResponse;
  getAgentPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetAgentPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetAgentPreferencesResponse|null) => void
  ): UnaryResponse;
  updateAgentPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateAgentPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateAgentPreferencesResponse|null) => void
  ): UnaryResponse;
  updateAgentPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateAgentPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateAgentPreferencesResponse|null) => void
  ): UnaryResponse;
  getContactPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetContactPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetContactPreferencesResponse|null) => void
  ): UnaryResponse;
  getContactPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetContactPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetContactPreferencesResponse|null) => void
  ): UnaryResponse;
  updateContactPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateContactPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateContactPreferencesResponse|null) => void
  ): UnaryResponse;
  updateContactPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateContactPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateContactPreferencesResponse|null) => void
  ): UnaryResponse;
  getAuthenticationPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetAuthenticationPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetAuthenticationPreferencesResponse|null) => void
  ): UnaryResponse;
  getAuthenticationPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetAuthenticationPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetAuthenticationPreferencesResponse|null) => void
  ): UnaryResponse;
  updateAuthenticationPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateAuthenticationPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateAuthenticationPreferencesResponse|null) => void
  ): UnaryResponse;
  updateAuthenticationPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateAuthenticationPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateAuthenticationPreferencesResponse|null) => void
  ): UnaryResponse;
  getWebhookPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetWebhookPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetWebhookPreferencesResponse|null) => void
  ): UnaryResponse;
  getWebhookPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetWebhookPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetWebhookPreferencesResponse|null) => void
  ): UnaryResponse;
  updateWebhookPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateWebhookPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateWebhookPreferencesResponse|null) => void
  ): UnaryResponse;
  updateWebhookPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateWebhookPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateWebhookPreferencesResponse|null) => void
  ): UnaryResponse;
  getDashboardGeneralPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetDashboardGeneralPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetDashboardGeneralPreferencesResponse|null) => void
  ): UnaryResponse;
  getDashboardGeneralPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetDashboardGeneralPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetDashboardGeneralPreferencesResponse|null) => void
  ): UnaryResponse;
  updateDashboardGeneralPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateDashboardGeneralPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateDashboardGeneralPreferencesResponse|null) => void
  ): UnaryResponse;
  updateDashboardGeneralPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateDashboardGeneralPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateDashboardGeneralPreferencesResponse|null) => void
  ): UnaryResponse;
  getDashboardQueuePreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetDashboardQueuePreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetDashboardQueuePreferencesResponse|null) => void
  ): UnaryResponse;
  getDashboardQueuePreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetDashboardQueuePreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetDashboardQueuePreferencesResponse|null) => void
  ): UnaryResponse;
  updateDashboardQueuePreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateDashboardQueuePreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateDashboardQueuePreferencesResponse|null) => void
  ): UnaryResponse;
  updateDashboardQueuePreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateDashboardQueuePreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateDashboardQueuePreferencesResponse|null) => void
  ): UnaryResponse;
  getPhonePreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetPhonePreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetPhonePreferencesResponse|null) => void
  ): UnaryResponse;
  getPhonePreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetPhonePreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetPhonePreferencesResponse|null) => void
  ): UnaryResponse;
  updatePhonePreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdatePhonePreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdatePhonePreferencesResponse|null) => void
  ): UnaryResponse;
  updatePhonePreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdatePhonePreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdatePhonePreferencesResponse|null) => void
  ): UnaryResponse;
  getCompliancePreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetCompliancePreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetCompliancePreferencesResponse|null) => void
  ): UnaryResponse;
  getCompliancePreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetCompliancePreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetCompliancePreferencesResponse|null) => void
  ): UnaryResponse;
  updateCompliancePreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateCompliancePreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateCompliancePreferencesResponse|null) => void
  ): UnaryResponse;
  updateCompliancePreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateCompliancePreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateCompliancePreferencesResponse|null) => void
  ): UnaryResponse;
  getBroadcastPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetBroadcastPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetBroadcastPreferencesResponse|null) => void
  ): UnaryResponse;
  getBroadcastPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetBroadcastPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetBroadcastPreferencesResponse|null) => void
  ): UnaryResponse;
  updateBroadcastPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateBroadcastPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateBroadcastPreferencesResponse|null) => void
  ): UnaryResponse;
  updateBroadcastPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateBroadcastPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateBroadcastPreferencesResponse|null) => void
  ): UnaryResponse;
  getSchedulePreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetSchedulePreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetSchedulePreferencesResponse|null) => void
  ): UnaryResponse;
  getSchedulePreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetSchedulePreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetSchedulePreferencesResponse|null) => void
  ): UnaryResponse;
  updateSchedulePreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateSchedulePreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateSchedulePreferencesResponse|null) => void
  ): UnaryResponse;
  updateSchedulePreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateSchedulePreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateSchedulePreferencesResponse|null) => void
  ): UnaryResponse;
  getEmailSmsPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetEmailSmsPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetEmailSmsPreferencesResponse|null) => void
  ): UnaryResponse;
  getEmailSmsPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetEmailSmsPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetEmailSmsPreferencesResponse|null) => void
  ): UnaryResponse;
  updateEmailSmsPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateEmailSmsPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateEmailSmsPreferencesResponse|null) => void
  ): UnaryResponse;
  updateEmailSmsPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateEmailSmsPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateEmailSmsPreferencesResponse|null) => void
  ): UnaryResponse;
  getBusinessPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetBusinessPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetBusinessPreferencesResponse|null) => void
  ): UnaryResponse;
  getBusinessPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetBusinessPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetBusinessPreferencesResponse|null) => void
  ): UnaryResponse;
  updateBusinessPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateBusinessPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateBusinessPreferencesResponse|null) => void
  ): UnaryResponse;
  updateBusinessPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateBusinessPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateBusinessPreferencesResponse|null) => void
  ): UnaryResponse;
  updateAdminBusinessPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateAdminBusinessPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateAdminBusinessPreferencesResponse|null) => void
  ): UnaryResponse;
  updateAdminBusinessPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateAdminBusinessPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateAdminBusinessPreferencesResponse|null) => void
  ): UnaryResponse;
  getScorecardsPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetScorecardsPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetScorecardsPreferencesResponse|null) => void
  ): UnaryResponse;
  getScorecardsPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetScorecardsPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetScorecardsPreferencesResponse|null) => void
  ): UnaryResponse;
  updateScorecardsPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateScorecardsPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateScorecardsPreferencesResponse|null) => void
  ): UnaryResponse;
  updateScorecardsPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateScorecardsPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateScorecardsPreferencesResponse|null) => void
  ): UnaryResponse;
  getVoiceAnalyticsPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetVoiceAnalyticsPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetVoiceAnalyticsPreferencesResponse|null) => void
  ): UnaryResponse;
  getVoiceAnalyticsPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetVoiceAnalyticsPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetVoiceAnalyticsPreferencesResponse|null) => void
  ): UnaryResponse;
  listVoiceAnalyticsPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.ListVoiceAnalyticsPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.ListVoiceAnalyticsPreferencesResponse|null) => void
  ): UnaryResponse;
  listVoiceAnalyticsPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.ListVoiceAnalyticsPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.ListVoiceAnalyticsPreferencesResponse|null) => void
  ): UnaryResponse;
  updateVoiceAnalyticsPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateVoiceAnalyticsPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateVoiceAnalyticsPreferencesResponse|null) => void
  ): UnaryResponse;
  updateVoiceAnalyticsPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateVoiceAnalyticsPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateVoiceAnalyticsPreferencesResponse|null) => void
  ): UnaryResponse;
  getEndOfDayPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetEndOfDayPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetEndOfDayPreferencesResponse|null) => void
  ): UnaryResponse;
  getEndOfDayPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetEndOfDayPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetEndOfDayPreferencesResponse|null) => void
  ): UnaryResponse;
  updateEndOfDayPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateEndOfDayPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateEndOfDayPreferencesResponse|null) => void
  ): UnaryResponse;
  updateEndOfDayPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateEndOfDayPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateEndOfDayPreferencesResponse|null) => void
  ): UnaryResponse;
  getReportFilterPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetFilterPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetFilterPreferencesResponse|null) => void
  ): UnaryResponse;
  getReportFilterPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetFilterPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetFilterPreferencesResponse|null) => void
  ): UnaryResponse;
  updateReportFilterPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateFilterPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateFilterPreferencesResponse|null) => void
  ): UnaryResponse;
  updateReportFilterPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateFilterPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateFilterPreferencesResponse|null) => void
  ): UnaryResponse;
  getRecordingPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetRecordingPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetRecordingPreferencesResponse|null) => void
  ): UnaryResponse;
  getRecordingPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetRecordingPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetRecordingPreferencesResponse|null) => void
  ): UnaryResponse;
  updateRecordingPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateRecordingPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateRecordingPreferencesResponse|null) => void
  ): UnaryResponse;
  updateRecordingPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateRecordingPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateRecordingPreferencesResponse|null) => void
  ): UnaryResponse;
  getAdminClientPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetAdminClientPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetAdminClientPreferencesResponse|null) => void
  ): UnaryResponse;
  getAdminClientPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.GetAdminClientPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetAdminClientPreferencesResponse|null) => void
  ): UnaryResponse;
  updateAdminClientPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateAdminClientPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateAdminClientPreferencesResponse|null) => void
  ): UnaryResponse;
  updateAdminClientPreferences(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateAdminClientPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateAdminClientPreferencesResponse|null) => void
  ): UnaryResponse;
  acceptLinkbackRecordingTerms(
    requestMessage: api_v1alpha1_org_preferences_pb.AcceptLinkbackRecordingTermsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.AcceptLinkbackRecordingTermsResponse|null) => void
  ): UnaryResponse;
  acceptLinkbackRecordingTerms(
    requestMessage: api_v1alpha1_org_preferences_pb.AcceptLinkbackRecordingTermsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.AcceptLinkbackRecordingTermsResponse|null) => void
  ): UnaryResponse;
  linkbackUpdateBroadcastTemplates(
    requestMessage: api_v1alpha1_org_preferences_pb.LinkbackUpdateBroadcastTemplatesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.LinkbackUpdateBroadcastTemplatesResponse|null) => void
  ): UnaryResponse;
  linkbackUpdateBroadcastTemplates(
    requestMessage: api_v1alpha1_org_preferences_pb.LinkbackUpdateBroadcastTemplatesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.LinkbackUpdateBroadcastTemplatesResponse|null) => void
  ): UnaryResponse;
  recordEmailUnsubscribeAcknowledgement(
    requestMessage: api_v1alpha1_org_preferences_pb.RecordEmailUnsubscribeAcknowledgementRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.RecordEmailUnsubscribeAcknowledgementResponse|null) => void
  ): UnaryResponse;
  recordEmailUnsubscribeAcknowledgement(
    requestMessage: api_v1alpha1_org_preferences_pb.RecordEmailUnsubscribeAcknowledgementRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.RecordEmailUnsubscribeAcknowledgementResponse|null) => void
  ): UnaryResponse;
  clearEmailUnsubscribeAcknowledgement(
    requestMessage: api_v1alpha1_org_preferences_pb.ClearEmailUnsubscribeAcknowledgementRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.ClearEmailUnsubscribeAcknowledgementResponse|null) => void
  ): UnaryResponse;
  clearEmailUnsubscribeAcknowledgement(
    requestMessage: api_v1alpha1_org_preferences_pb.ClearEmailUnsubscribeAcknowledgementRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.ClearEmailUnsubscribeAcknowledgementResponse|null) => void
  ): UnaryResponse;
  listBusinessHours(
    requestMessage: api_v1alpha1_org_preferences_pb.ListBusinessHoursRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.ListBusinessHoursResponse|null) => void
  ): UnaryResponse;
  listBusinessHours(
    requestMessage: api_v1alpha1_org_preferences_pb.ListBusinessHoursRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.ListBusinessHoursResponse|null) => void
  ): UnaryResponse;
  getBusinessHours(
    requestMessage: api_v1alpha1_org_preferences_pb.GetBusinessHoursRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetBusinessHoursResponse|null) => void
  ): UnaryResponse;
  getBusinessHours(
    requestMessage: api_v1alpha1_org_preferences_pb.GetBusinessHoursRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.GetBusinessHoursResponse|null) => void
  ): UnaryResponse;
  setBusinessHours(
    requestMessage: api_v1alpha1_org_preferences_pb.SetBusinessHoursRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.SetBusinessHoursResponse|null) => void
  ): UnaryResponse;
  setBusinessHours(
    requestMessage: api_v1alpha1_org_preferences_pb.SetBusinessHoursRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.SetBusinessHoursResponse|null) => void
  ): UnaryResponse;
  addIntervalToBusinessHours(
    requestMessage: api_v1alpha1_org_preferences_pb.AddIntervalToBusinessHoursRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.AddIntervalToBusinessHoursResponse|null) => void
  ): UnaryResponse;
  addIntervalToBusinessHours(
    requestMessage: api_v1alpha1_org_preferences_pb.AddIntervalToBusinessHoursRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.AddIntervalToBusinessHoursResponse|null) => void
  ): UnaryResponse;
  removeIntervalFromBusinessHours(
    requestMessage: api_v1alpha1_org_preferences_pb.RemoveIntervalFromBusinessHoursRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.RemoveIntervalFromBusinessHoursResponse|null) => void
  ): UnaryResponse;
  removeIntervalFromBusinessHours(
    requestMessage: api_v1alpha1_org_preferences_pb.RemoveIntervalFromBusinessHoursRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.RemoveIntervalFromBusinessHoursResponse|null) => void
  ): UnaryResponse;
  updateBusinessHoursInfo(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateBusinessHoursInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateBusinessHoursInfoResponse|null) => void
  ): UnaryResponse;
  updateBusinessHoursInfo(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateBusinessHoursInfoRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateBusinessHoursInfoResponse|null) => void
  ): UnaryResponse;
  deleteBusinessHours(
    requestMessage: api_v1alpha1_org_preferences_pb.DeleteBusinessHoursRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.DeleteBusinessHoursResponse|null) => void
  ): UnaryResponse;
  deleteBusinessHours(
    requestMessage: api_v1alpha1_org_preferences_pb.DeleteBusinessHoursRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.DeleteBusinessHoursResponse|null) => void
  ): UnaryResponse;
  evaluateBusinessHours(
    requestMessage: api_v1alpha1_org_preferences_pb.EvaluateBusinessHoursRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.EvaluateBusinessHoursResponse|null) => void
  ): UnaryResponse;
  evaluateBusinessHours(
    requestMessage: api_v1alpha1_org_preferences_pb.EvaluateBusinessHoursRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.EvaluateBusinessHoursResponse|null) => void
  ): UnaryResponse;
  createUser(
    requestMessage: api_v1alpha1_org_user_pb.CreateUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.CreateUserResponse|null) => void
  ): UnaryResponse;
  createUser(
    requestMessage: api_v1alpha1_org_user_pb.CreateUserRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.CreateUserResponse|null) => void
  ): UnaryResponse;
  createDelegatedUser(
    requestMessage: api_v1alpha1_org_user_pb.CreateDelegatedUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.CreateDelegatedUserResponse|null) => void
  ): UnaryResponse;
  createDelegatedUser(
    requestMessage: api_v1alpha1_org_user_pb.CreateDelegatedUserRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.CreateDelegatedUserResponse|null) => void
  ): UnaryResponse;
  getMyUser(
    requestMessage: api_v1alpha1_org_user_pb.GetMyUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.GetMyUserResponse|null) => void
  ): UnaryResponse;
  getMyUser(
    requestMessage: api_v1alpha1_org_user_pb.GetMyUserRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.GetMyUserResponse|null) => void
  ): UnaryResponse;
  getUser(
    requestMessage: api_v1alpha1_org_user_pb.GetUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.GetUserResponse|null) => void
  ): UnaryResponse;
  getUser(
    requestMessage: api_v1alpha1_org_user_pb.GetUserRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.GetUserResponse|null) => void
  ): UnaryResponse;
  getUserByOrgId(
    requestMessage: api_v1alpha1_org_user_pb.GetUserByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.GetUserByOrgIdResponse|null) => void
  ): UnaryResponse;
  getUserByOrgId(
    requestMessage: api_v1alpha1_org_user_pb.GetUserByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.GetUserByOrgIdResponse|null) => void
  ): UnaryResponse;
  listAgents(requestMessage: api_v1alpha1_org_user_pb.ListAgentsRequest, metadata?: grpc.Metadata): ResponseStream<api_v1alpha1_org_user_pb.ListAgentsResponse>;
  listPublicUsers(requestMessage: api_v1alpha1_org_user_pb.ListPublicUsersRequest, metadata?: grpc.Metadata): ResponseStream<api_v1alpha1_org_user_pb.ListPublicUsersResponse>;
  listUsers(requestMessage: api_v1alpha1_org_user_pb.ListUsersRequest, metadata?: grpc.Metadata): ResponseStream<api_v1alpha1_org_user_pb.ListUsersResponse>;
  listUsersByOrgId(requestMessage: api_v1alpha1_org_user_pb.ListUsersByOrgIdRequest, metadata?: grpc.Metadata): ResponseStream<api_v1alpha1_org_user_pb.ListUsersByOrgIdResponse>;
  listUsersByRegion(requestMessage: api_v1alpha1_org_user_pb.ListUsersByRegionRequest, metadata?: grpc.Metadata): ResponseStream<api_v1alpha1_org_user_pb.ListUsersByRegionResponse>;
  updateMyUser(
    requestMessage: api_v1alpha1_org_user_pb.UpdateMyUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.UpdateMyUserResponse|null) => void
  ): UnaryResponse;
  updateMyUser(
    requestMessage: api_v1alpha1_org_user_pb.UpdateMyUserRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.UpdateMyUserResponse|null) => void
  ): UnaryResponse;
  updateUser(
    requestMessage: api_v1alpha1_org_user_pb.UpdateUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.UpdateUserResponse|null) => void
  ): UnaryResponse;
  updateUser(
    requestMessage: api_v1alpha1_org_user_pb.UpdateUserRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.UpdateUserResponse|null) => void
  ): UnaryResponse;
  updateUserLabels(
    requestMessage: api_v1alpha1_org_user_pb.UpdateUserLabelsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.UpdateUserLabelsResponse|null) => void
  ): UnaryResponse;
  updateUserLabels(
    requestMessage: api_v1alpha1_org_user_pb.UpdateUserLabelsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.UpdateUserLabelsResponse|null) => void
  ): UnaryResponse;
  updateUserCallerId(
    requestMessage: api_v1alpha1_org_user_pb.UpdateUserCallerIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.UpdateUserCallerIdResponse|null) => void
  ): UnaryResponse;
  updateUserCallerId(
    requestMessage: api_v1alpha1_org_user_pb.UpdateUserCallerIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.UpdateUserCallerIdResponse|null) => void
  ): UnaryResponse;
  updateUserDisabled(
    requestMessage: api_v1alpha1_org_user_pb.UpdateUserDisabledRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.UpdateUserDisabledResponse|null) => void
  ): UnaryResponse;
  updateUserDisabled(
    requestMessage: api_v1alpha1_org_user_pb.UpdateUserDisabledRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.UpdateUserDisabledResponse|null) => void
  ): UnaryResponse;
  updateUserDisabledByOrgId(
    requestMessage: api_v1alpha1_org_user_pb.UpdateUserDisabledByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.UpdateUserDisabledByOrgIdResponse|null) => void
  ): UnaryResponse;
  updateUserDisabledByOrgId(
    requestMessage: api_v1alpha1_org_user_pb.UpdateUserDisabledByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.UpdateUserDisabledByOrgIdResponse|null) => void
  ): UnaryResponse;
  getMyUserPasswordResetLink(
    requestMessage: api_v1alpha1_org_user_pb.GetMyUserPasswordResetLinkRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.GetMyUserPasswordResetLinkResponse|null) => void
  ): UnaryResponse;
  getMyUserPasswordResetLink(
    requestMessage: api_v1alpha1_org_user_pb.GetMyUserPasswordResetLinkRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.GetMyUserPasswordResetLinkResponse|null) => void
  ): UnaryResponse;
  getUserPasswordResetLink(
    requestMessage: api_v1alpha1_org_user_pb.GetUserPasswordResetLinkRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.GetUserPasswordResetLinkResponse|null) => void
  ): UnaryResponse;
  getUserPasswordResetLink(
    requestMessage: api_v1alpha1_org_user_pb.GetUserPasswordResetLinkRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.GetUserPasswordResetLinkResponse|null) => void
  ): UnaryResponse;
  getUserPasswordResetLinkByOrgId(
    requestMessage: api_v1alpha1_org_user_pb.GetUserPasswordResetLinkByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.GetUserPasswordResetLinkByOrgIdResponse|null) => void
  ): UnaryResponse;
  getUserPasswordResetLinkByOrgId(
    requestMessage: api_v1alpha1_org_user_pb.GetUserPasswordResetLinkByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.GetUserPasswordResetLinkByOrgIdResponse|null) => void
  ): UnaryResponse;
  createPasswordResetLink(
    requestMessage: api_v1alpha1_org_user_pb.CreatePasswordResetLinkRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.CreatePasswordResetLinkResponse|null) => void
  ): UnaryResponse;
  createPasswordResetLink(
    requestMessage: api_v1alpha1_org_user_pb.CreatePasswordResetLinkRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.CreatePasswordResetLinkResponse|null) => void
  ): UnaryResponse;
  createPasswordResetLinkByOrgId(
    requestMessage: api_v1alpha1_org_user_pb.CreatePasswordResetLinkByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.CreatePasswordResetLinkByOrgIdResponse|null) => void
  ): UnaryResponse;
  createPasswordResetLinkByOrgId(
    requestMessage: api_v1alpha1_org_user_pb.CreatePasswordResetLinkByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.CreatePasswordResetLinkByOrgIdResponse|null) => void
  ): UnaryResponse;
  getUserLoginInfo(
    requestMessage: api_v1alpha1_org_user_pb.GetUserLoginInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.GetUserLoginInfoResponse|null) => void
  ): UnaryResponse;
  getUserLoginInfo(
    requestMessage: api_v1alpha1_org_user_pb.GetUserLoginInfoRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.GetUserLoginInfoResponse|null) => void
  ): UnaryResponse;
  getUserEmailVerified(
    requestMessage: api_v1alpha1_org_user_pb.GetUserEmailVerifiedRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.GetUserEmailVerifiedResponse|null) => void
  ): UnaryResponse;
  getUserEmailVerified(
    requestMessage: api_v1alpha1_org_user_pb.GetUserEmailVerifiedRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.GetUserEmailVerifiedResponse|null) => void
  ): UnaryResponse;
  getUserEmailVerifiedByOrgId(
    requestMessage: api_v1alpha1_org_user_pb.GetUserEmailVerifiedByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.GetUserEmailVerifiedByOrgIdResponse|null) => void
  ): UnaryResponse;
  getUserEmailVerifiedByOrgId(
    requestMessage: api_v1alpha1_org_user_pb.GetUserEmailVerifiedByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.GetUserEmailVerifiedByOrgIdResponse|null) => void
  ): UnaryResponse;
  resetMyPassword(
    requestMessage: api_v1alpha1_org_user_pb.ResetMyPasswordRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.ResetMyPasswordResponse|null) => void
  ): UnaryResponse;
  resetMyPassword(
    requestMessage: api_v1alpha1_org_user_pb.ResetMyPasswordRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.ResetMyPasswordResponse|null) => void
  ): UnaryResponse;
  resetUserPassword(
    requestMessage: api_v1alpha1_org_user_pb.ResetUserPasswordRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.ResetUserPasswordResponse|null) => void
  ): UnaryResponse;
  resetUserPassword(
    requestMessage: api_v1alpha1_org_user_pb.ResetUserPasswordRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.ResetUserPasswordResponse|null) => void
  ): UnaryResponse;
  resetUserPasswordByOrgId(
    requestMessage: api_v1alpha1_org_user_pb.ResetUserPasswordByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.ResetUserPasswordByOrgIdResponse|null) => void
  ): UnaryResponse;
  resetUserPasswordByOrgId(
    requestMessage: api_v1alpha1_org_user_pb.ResetUserPasswordByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.ResetUserPasswordByOrgIdResponse|null) => void
  ): UnaryResponse;
  sendUserEmailVerification(
    requestMessage: api_v1alpha1_org_user_pb.SendUserEmailVerificationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.SendUserEmailVerificationResponse|null) => void
  ): UnaryResponse;
  sendUserEmailVerification(
    requestMessage: api_v1alpha1_org_user_pb.SendUserEmailVerificationRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.SendUserEmailVerificationResponse|null) => void
  ): UnaryResponse;
  sendUserEmailVerificationByOrgId(
    requestMessage: api_v1alpha1_org_user_pb.SendUserEmailVerificationByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.SendUserEmailVerificationByOrgIdResponse|null) => void
  ): UnaryResponse;
  sendUserEmailVerificationByOrgId(
    requestMessage: api_v1alpha1_org_user_pb.SendUserEmailVerificationByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.SendUserEmailVerificationByOrgIdResponse|null) => void
  ): UnaryResponse;
  sendPasswordReset(
    requestMessage: api_v1alpha1_org_user_pb.SendPasswordResetRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.SendPasswordResetResponse|null) => void
  ): UnaryResponse;
  sendPasswordReset(
    requestMessage: api_v1alpha1_org_user_pb.SendPasswordResetRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.SendPasswordResetResponse|null) => void
  ): UnaryResponse;
  sendPasswordResetByOrgId(
    requestMessage: api_v1alpha1_org_user_pb.SendPasswordResetByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.SendPasswordResetByOrgIdResponse|null) => void
  ): UnaryResponse;
  sendPasswordResetByOrgId(
    requestMessage: api_v1alpha1_org_user_pb.SendPasswordResetByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.SendPasswordResetByOrgIdResponse|null) => void
  ): UnaryResponse;
  getUserSessionData(
    requestMessage: api_v1alpha1_org_user_pb.GetUserSessionDataRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.GetUserSessionDataResponse|null) => void
  ): UnaryResponse;
  getUserSessionData(
    requestMessage: api_v1alpha1_org_user_pb.GetUserSessionDataRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.GetUserSessionDataResponse|null) => void
  ): UnaryResponse;
  getAgentProfileGroup(
    requestMessage: api_v1alpha1_org_agent_profile_group_pb.GetAgentProfileGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_agent_profile_group_pb.GetAgentProfileGroupResponse|null) => void
  ): UnaryResponse;
  getAgentProfileGroup(
    requestMessage: api_v1alpha1_org_agent_profile_group_pb.GetAgentProfileGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_agent_profile_group_pb.GetAgentProfileGroupResponse|null) => void
  ): UnaryResponse;
  listAgentProfileGroups(
    requestMessage: api_v1alpha1_org_agent_profile_group_pb.ListAgentProfileGroupsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_agent_profile_group_pb.ListAgentProfileGroupsResponse|null) => void
  ): UnaryResponse;
  listAgentProfileGroups(
    requestMessage: api_v1alpha1_org_agent_profile_group_pb.ListAgentProfileGroupsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_agent_profile_group_pb.ListAgentProfileGroupsResponse|null) => void
  ): UnaryResponse;
  updateAgentProfileGroup(
    requestMessage: api_v1alpha1_org_agent_profile_group_pb.UpdateAgentProfileGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_agent_profile_group_pb.UpdateAgentProfileGroupResponse|null) => void
  ): UnaryResponse;
  updateAgentProfileGroup(
    requestMessage: api_v1alpha1_org_agent_profile_group_pb.UpdateAgentProfileGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_agent_profile_group_pb.UpdateAgentProfileGroupResponse|null) => void
  ): UnaryResponse;
  createAgentProfileGroup(
    requestMessage: api_v1alpha1_org_agent_profile_group_pb.CreateAgentProfileGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_agent_profile_group_pb.CreateAgentProfileGroupResponse|null) => void
  ): UnaryResponse;
  createAgentProfileGroup(
    requestMessage: api_v1alpha1_org_agent_profile_group_pb.CreateAgentProfileGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_agent_profile_group_pb.CreateAgentProfileGroupResponse|null) => void
  ): UnaryResponse;
  deleteAgentProfileGroup(
    requestMessage: api_v1alpha1_org_agent_profile_group_pb.DeleteAgentProfileGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_agent_profile_group_pb.DeleteAgentProfileGroupResponse|null) => void
  ): UnaryResponse;
  deleteAgentProfileGroup(
    requestMessage: api_v1alpha1_org_agent_profile_group_pb.DeleteAgentProfileGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_agent_profile_group_pb.DeleteAgentProfileGroupResponse|null) => void
  ): UnaryResponse;
  assignAgentProfileGroups(
    requestMessage: api_v1alpha1_org_agent_profile_group_pb.AssignAgentProfileGroupsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_agent_profile_group_pb.AssignAgentProfileGroupsResponse|null) => void
  ): UnaryResponse;
  assignAgentProfileGroups(
    requestMessage: api_v1alpha1_org_agent_profile_group_pb.AssignAgentProfileGroupsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_agent_profile_group_pb.AssignAgentProfileGroupsResponse|null) => void
  ): UnaryResponse;
  addUserSubscription(
    requestMessage: api_v1alpha1_org_notifications_pb.AddUserSubscriptionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_notifications_pb.AddUserSubscriptionResponse|null) => void
  ): UnaryResponse;
  addUserSubscription(
    requestMessage: api_v1alpha1_org_notifications_pb.AddUserSubscriptionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_notifications_pb.AddUserSubscriptionResponse|null) => void
  ): UnaryResponse;
  addUserSubscriptionByUserId(
    requestMessage: api_v1alpha1_org_notifications_pb.AddUserSubscriptionByUserIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_notifications_pb.AddUserSubscriptionByUserIdResponse|null) => void
  ): UnaryResponse;
  addUserSubscriptionByUserId(
    requestMessage: api_v1alpha1_org_notifications_pb.AddUserSubscriptionByUserIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_notifications_pb.AddUserSubscriptionByUserIdResponse|null) => void
  ): UnaryResponse;
  getUserSubscription(
    requestMessage: api_v1alpha1_org_notifications_pb.GetUserSubscriptionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_notifications_pb.GetUserSubscriptionResponse|null) => void
  ): UnaryResponse;
  getUserSubscription(
    requestMessage: api_v1alpha1_org_notifications_pb.GetUserSubscriptionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_notifications_pb.GetUserSubscriptionResponse|null) => void
  ): UnaryResponse;
  getUserSubscriptionByUserId(
    requestMessage: api_v1alpha1_org_notifications_pb.GetUserSubscriptionByUserIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_notifications_pb.GetUserSubscriptionByUserIdResponse|null) => void
  ): UnaryResponse;
  getUserSubscriptionByUserId(
    requestMessage: api_v1alpha1_org_notifications_pb.GetUserSubscriptionByUserIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_notifications_pb.GetUserSubscriptionByUserIdResponse|null) => void
  ): UnaryResponse;
  updateUserSubscription(
    requestMessage: api_v1alpha1_org_notifications_pb.UpdateUserSubscriptionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_notifications_pb.UpdateUserSubscriptionResponse|null) => void
  ): UnaryResponse;
  updateUserSubscription(
    requestMessage: api_v1alpha1_org_notifications_pb.UpdateUserSubscriptionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_notifications_pb.UpdateUserSubscriptionResponse|null) => void
  ): UnaryResponse;
  updateUserSubscriptionByUserId(
    requestMessage: api_v1alpha1_org_notifications_pb.UpdateUserSubscriptionByUserIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_notifications_pb.UpdateUserSubscriptionByUserIdResponse|null) => void
  ): UnaryResponse;
  updateUserSubscriptionByUserId(
    requestMessage: api_v1alpha1_org_notifications_pb.UpdateUserSubscriptionByUserIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_notifications_pb.UpdateUserSubscriptionByUserIdResponse|null) => void
  ): UnaryResponse;
  removeUserSubscription(
    requestMessage: api_v1alpha1_org_notifications_pb.RemoveUserSubscriptionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_notifications_pb.RemoveUserSubscriptionResponse|null) => void
  ): UnaryResponse;
  removeUserSubscription(
    requestMessage: api_v1alpha1_org_notifications_pb.RemoveUserSubscriptionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_notifications_pb.RemoveUserSubscriptionResponse|null) => void
  ): UnaryResponse;
  removeUserSubscriptionByUserId(
    requestMessage: api_v1alpha1_org_notifications_pb.RemoveUserSubscriptionByUserIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_notifications_pb.RemoveUserSubscriptionByUserIdResponse|null) => void
  ): UnaryResponse;
  removeUserSubscriptionByUserId(
    requestMessage: api_v1alpha1_org_notifications_pb.RemoveUserSubscriptionByUserIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_notifications_pb.RemoveUserSubscriptionByUserIdResponse|null) => void
  ): UnaryResponse;
  listUserSubscriptions(
    requestMessage: api_v1alpha1_org_notifications_pb.ListUserSubscriptionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_notifications_pb.ListUserSubscriptionsResponse|null) => void
  ): UnaryResponse;
  listUserSubscriptions(
    requestMessage: api_v1alpha1_org_notifications_pb.ListUserSubscriptionsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_notifications_pb.ListUserSubscriptionsResponse|null) => void
  ): UnaryResponse;
  listUserSubscriptionsByUserId(
    requestMessage: api_v1alpha1_org_notifications_pb.ListUserSubscriptionsByUserIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_notifications_pb.ListUserSubscriptionsByUserIdResponse|null) => void
  ): UnaryResponse;
  listUserSubscriptionsByUserId(
    requestMessage: api_v1alpha1_org_notifications_pb.ListUserSubscriptionsByUserIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_notifications_pb.ListUserSubscriptionsByUserIdResponse|null) => void
  ): UnaryResponse;
  listOrgSubscriptions(
    requestMessage: api_v1alpha1_org_notifications_pb.ListOrgSubscriptionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_notifications_pb.ListOrgSubscriptionsResponse|null) => void
  ): UnaryResponse;
  listOrgSubscriptions(
    requestMessage: api_v1alpha1_org_notifications_pb.ListOrgSubscriptionsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_notifications_pb.ListOrgSubscriptionsResponse|null) => void
  ): UnaryResponse;
  createAuthToken(
    requestMessage: api_v1alpha1_org_auth_token_pb.CreateAuthTokenRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_auth_token_pb.CreateAuthTokenResponse|null) => void
  ): UnaryResponse;
  createAuthToken(
    requestMessage: api_v1alpha1_org_auth_token_pb.CreateAuthTokenRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_auth_token_pb.CreateAuthTokenResponse|null) => void
  ): UnaryResponse;
  createAuthTokenByUserId(
    requestMessage: api_v1alpha1_org_auth_token_pb.CreateAuthTokenByUserIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_auth_token_pb.CreateAuthTokenByUserIdResponse|null) => void
  ): UnaryResponse;
  createAuthTokenByUserId(
    requestMessage: api_v1alpha1_org_auth_token_pb.CreateAuthTokenByUserIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_auth_token_pb.CreateAuthTokenByUserIdResponse|null) => void
  ): UnaryResponse;
  listAuthTokens(
    requestMessage: api_v1alpha1_org_auth_token_pb.ListAuthTokensRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_auth_token_pb.ListAuthTokensResponse|null) => void
  ): UnaryResponse;
  listAuthTokens(
    requestMessage: api_v1alpha1_org_auth_token_pb.ListAuthTokensRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_auth_token_pb.ListAuthTokensResponse|null) => void
  ): UnaryResponse;
  listAuthTokensByUserId(
    requestMessage: api_v1alpha1_org_auth_token_pb.ListAuthTokensByUserIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_auth_token_pb.ListAuthTokensByUserIdResponse|null) => void
  ): UnaryResponse;
  listAuthTokensByUserId(
    requestMessage: api_v1alpha1_org_auth_token_pb.ListAuthTokensByUserIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_auth_token_pb.ListAuthTokensByUserIdResponse|null) => void
  ): UnaryResponse;
  setAuthTokenExpiration(
    requestMessage: api_v1alpha1_org_auth_token_pb.SetAuthTokenExpirationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_auth_token_pb.SetAuthTokenExpirationResponse|null) => void
  ): UnaryResponse;
  setAuthTokenExpiration(
    requestMessage: api_v1alpha1_org_auth_token_pb.SetAuthTokenExpirationRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_auth_token_pb.SetAuthTokenExpirationResponse|null) => void
  ): UnaryResponse;
  setAuthTokenExpirationByUserId(
    requestMessage: api_v1alpha1_org_auth_token_pb.SetAuthTokenExpirationByUserIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_auth_token_pb.SetAuthTokenExpirationByUserIdResponse|null) => void
  ): UnaryResponse;
  setAuthTokenExpirationByUserId(
    requestMessage: api_v1alpha1_org_auth_token_pb.SetAuthTokenExpirationByUserIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_auth_token_pb.SetAuthTokenExpirationByUserIdResponse|null) => void
  ): UnaryResponse;
  deleteAuthToken(
    requestMessage: api_v1alpha1_org_auth_token_pb.DeleteAuthTokenRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_auth_token_pb.DeleteAuthTokenResponse|null) => void
  ): UnaryResponse;
  deleteAuthToken(
    requestMessage: api_v1alpha1_org_auth_token_pb.DeleteAuthTokenRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_auth_token_pb.DeleteAuthTokenResponse|null) => void
  ): UnaryResponse;
  deleteAuthTokenByUserId(
    requestMessage: api_v1alpha1_org_auth_token_pb.DeleteAuthTokenByUserIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_auth_token_pb.DeleteAuthTokenByUserIdResponse|null) => void
  ): UnaryResponse;
  deleteAuthTokenByUserId(
    requestMessage: api_v1alpha1_org_auth_token_pb.DeleteAuthTokenByUserIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_auth_token_pb.DeleteAuthTokenByUserIdResponse|null) => void
  ): UnaryResponse;
  getHuntGroupSettings(
    requestMessage: api_v1alpha1_org_huntgroup_pb.GetHuntGroupSettingsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.GetHuntGroupSettingsResponse|null) => void
  ): UnaryResponse;
  getHuntGroupSettings(
    requestMessage: api_v1alpha1_org_huntgroup_pb.GetHuntGroupSettingsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.GetHuntGroupSettingsResponse|null) => void
  ): UnaryResponse;
  updateHuntGroupSettings(
    requestMessage: api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupSettingsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupSettingsResponse|null) => void
  ): UnaryResponse;
  updateHuntGroupSettings(
    requestMessage: api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupSettingsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupSettingsResponse|null) => void
  ): UnaryResponse;
  createHuntGroup(
    requestMessage: api_v1alpha1_org_huntgroup_pb.CreateHuntGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.CreateHuntGroupResponse|null) => void
  ): UnaryResponse;
  createHuntGroup(
    requestMessage: api_v1alpha1_org_huntgroup_pb.CreateHuntGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.CreateHuntGroupResponse|null) => void
  ): UnaryResponse;
  updateHuntGroupGeneralDetails(
    requestMessage: api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupGeneralDetailsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupGeneralDetailsResponse|null) => void
  ): UnaryResponse;
  updateHuntGroupGeneralDetails(
    requestMessage: api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupGeneralDetailsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupGeneralDetailsResponse|null) => void
  ): UnaryResponse;
  deleteHuntGroup(
    requestMessage: api_v1alpha1_org_huntgroup_pb.DeleteHuntGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.DeleteHuntGroupResponse|null) => void
  ): UnaryResponse;
  deleteHuntGroup(
    requestMessage: api_v1alpha1_org_huntgroup_pb.DeleteHuntGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.DeleteHuntGroupResponse|null) => void
  ): UnaryResponse;
  getHuntGroupDetails(
    requestMessage: api_v1alpha1_org_huntgroup_pb.GetHuntGroupDetailsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.GetHuntGroupDetailsResponse|null) => void
  ): UnaryResponse;
  getHuntGroupDetails(
    requestMessage: api_v1alpha1_org_huntgroup_pb.GetHuntGroupDetailsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.GetHuntGroupDetailsResponse|null) => void
  ): UnaryResponse;
  listCallerIdBuckets(
    requestMessage: api_v1alpha1_org_huntgroup_pb.ListCallerIdBucketsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.ListCallerIdBucketsResponse|null) => void
  ): UnaryResponse;
  listCallerIdBuckets(
    requestMessage: api_v1alpha1_org_huntgroup_pb.ListCallerIdBucketsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.ListCallerIdBucketsResponse|null) => void
  ): UnaryResponse;
  getDataDipTemplate(
    requestMessage: api_v1alpha1_org_huntgroup_pb.GetDataDipTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.GetDataDipTemplateResponse|null) => void
  ): UnaryResponse;
  getDataDipTemplate(
    requestMessage: api_v1alpha1_org_huntgroup_pb.GetDataDipTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.GetDataDipTemplateResponse|null) => void
  ): UnaryResponse;
  listDataDipTemplates(
    requestMessage: api_v1alpha1_org_huntgroup_pb.ListDataDipTemplatesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.ListDataDipTemplatesResponse|null) => void
  ): UnaryResponse;
  listDataDipTemplates(
    requestMessage: api_v1alpha1_org_huntgroup_pb.ListDataDipTemplatesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.ListDataDipTemplatesResponse|null) => void
  ): UnaryResponse;
  createDataDipTemplate(
    requestMessage: api_v1alpha1_org_huntgroup_pb.CreateDataDipTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.CreateDataDipTemplateResponse|null) => void
  ): UnaryResponse;
  createDataDipTemplate(
    requestMessage: api_v1alpha1_org_huntgroup_pb.CreateDataDipTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.CreateDataDipTemplateResponse|null) => void
  ): UnaryResponse;
  updateDataDipTemplate(
    requestMessage: api_v1alpha1_org_huntgroup_pb.UpdateDataDipTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.UpdateDataDipTemplateResponse|null) => void
  ): UnaryResponse;
  updateDataDipTemplate(
    requestMessage: api_v1alpha1_org_huntgroup_pb.UpdateDataDipTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.UpdateDataDipTemplateResponse|null) => void
  ): UnaryResponse;
  deleteDataDipTemplate(
    requestMessage: api_v1alpha1_org_huntgroup_pb.DeleteDataDipTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.DeleteDataDipTemplateResponse|null) => void
  ): UnaryResponse;
  deleteDataDipTemplate(
    requestMessage: api_v1alpha1_org_huntgroup_pb.DeleteDataDipTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.DeleteDataDipTemplateResponse|null) => void
  ): UnaryResponse;
  copyDataDipTemplate(
    requestMessage: api_v1alpha1_org_huntgroup_pb.CopyDataDipTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.CopyDataDipTemplateResponse|null) => void
  ): UnaryResponse;
  copyDataDipTemplate(
    requestMessage: api_v1alpha1_org_huntgroup_pb.CopyDataDipTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.CopyDataDipTemplateResponse|null) => void
  ): UnaryResponse;
  copyDataDipTemplateToOrganization(
    requestMessage: api_v1alpha1_org_huntgroup_pb.CopyDataDipTemplateToOrganizationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.CopyDataDipTemplateToOrganizationResponse|null) => void
  ): UnaryResponse;
  copyDataDipTemplateToOrganization(
    requestMessage: api_v1alpha1_org_huntgroup_pb.CopyDataDipTemplateToOrganizationRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.CopyDataDipTemplateToOrganizationResponse|null) => void
  ): UnaryResponse;
  listBroadcastTemplateGeneralDetails(
    requestMessage: api_v1alpha1_org_huntgroup_pb.ListBroadcastTemplateGeneralDetailsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.ListBroadcastTemplateGeneralDetailsResponse|null) => void
  ): UnaryResponse;
  listBroadcastTemplateGeneralDetails(
    requestMessage: api_v1alpha1_org_huntgroup_pb.ListBroadcastTemplateGeneralDetailsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.ListBroadcastTemplateGeneralDetailsResponse|null) => void
  ): UnaryResponse;
  listAgentResponseAutoRules(
    requestMessage: api_v1alpha1_org_huntgroup_pb.ListAgentResponseAutoRulesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.ListAgentResponseAutoRulesResponse|null) => void
  ): UnaryResponse;
  listAgentResponseAutoRules(
    requestMessage: api_v1alpha1_org_huntgroup_pb.ListAgentResponseAutoRulesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.ListAgentResponseAutoRulesResponse|null) => void
  ): UnaryResponse;
  createAgentResponseAutoRules(
    requestMessage: api_v1alpha1_org_huntgroup_pb.CreateAgentResponseAutoRulesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.CreateAgentResponseAutoRulesResponse|null) => void
  ): UnaryResponse;
  createAgentResponseAutoRules(
    requestMessage: api_v1alpha1_org_huntgroup_pb.CreateAgentResponseAutoRulesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.CreateAgentResponseAutoRulesResponse|null) => void
  ): UnaryResponse;
  updateAgentResponseAutoRules(
    requestMessage: api_v1alpha1_org_huntgroup_pb.UpdateAgentResponseAutoRulesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.UpdateAgentResponseAutoRulesResponse|null) => void
  ): UnaryResponse;
  updateAgentResponseAutoRules(
    requestMessage: api_v1alpha1_org_huntgroup_pb.UpdateAgentResponseAutoRulesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.UpdateAgentResponseAutoRulesResponse|null) => void
  ): UnaryResponse;
  deleteAgentResponseAutoRules(
    requestMessage: api_v1alpha1_org_huntgroup_pb.DeleteAgentResponseAutoRulesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.DeleteAgentResponseAutoRulesResponse|null) => void
  ): UnaryResponse;
  deleteAgentResponseAutoRules(
    requestMessage: api_v1alpha1_org_huntgroup_pb.DeleteAgentResponseAutoRulesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.DeleteAgentResponseAutoRulesResponse|null) => void
  ): UnaryResponse;
  listHuntGroupWebLinks(
    requestMessage: api_v1alpha1_org_huntgroup_pb.ListHuntGroupWebLinksRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.ListHuntGroupWebLinksResponse|null) => void
  ): UnaryResponse;
  listHuntGroupWebLinks(
    requestMessage: api_v1alpha1_org_huntgroup_pb.ListHuntGroupWebLinksRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.ListHuntGroupWebLinksResponse|null) => void
  ): UnaryResponse;
  copyHuntGroupWebLink(
    requestMessage: api_v1alpha1_org_huntgroup_pb.CopyHuntGroupWebLinkRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.CopyHuntGroupWebLinkResponse|null) => void
  ): UnaryResponse;
  copyHuntGroupWebLink(
    requestMessage: api_v1alpha1_org_huntgroup_pb.CopyHuntGroupWebLinkRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.CopyHuntGroupWebLinkResponse|null) => void
  ): UnaryResponse;
  updateHuntGroupWebLinks(
    requestMessage: api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupWebLinksRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupWebLinksResponse|null) => void
  ): UnaryResponse;
  updateHuntGroupWebLinks(
    requestMessage: api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupWebLinksRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupWebLinksResponse|null) => void
  ): UnaryResponse;
  listHuntGroupIntegrationLinks(
    requestMessage: api_v1alpha1_org_huntgroup_pb.ListHuntGroupIntegrationLinksRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.ListHuntGroupIntegrationLinksResponse|null) => void
  ): UnaryResponse;
  listHuntGroupIntegrationLinks(
    requestMessage: api_v1alpha1_org_huntgroup_pb.ListHuntGroupIntegrationLinksRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.ListHuntGroupIntegrationLinksResponse|null) => void
  ): UnaryResponse;
  copyHuntGroupIntegrationLink(
    requestMessage: api_v1alpha1_org_huntgroup_pb.CopyHuntGroupIntegrationLinkRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.CopyHuntGroupIntegrationLinkResponse|null) => void
  ): UnaryResponse;
  copyHuntGroupIntegrationLink(
    requestMessage: api_v1alpha1_org_huntgroup_pb.CopyHuntGroupIntegrationLinkRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.CopyHuntGroupIntegrationLinkResponse|null) => void
  ): UnaryResponse;
  updateHuntGroupIntegrationLinks(
    requestMessage: api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupIntegrationLinksRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupIntegrationLinksResponse|null) => void
  ): UnaryResponse;
  updateHuntGroupIntegrationLinks(
    requestMessage: api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupIntegrationLinksRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupIntegrationLinksResponse|null) => void
  ): UnaryResponse;
  getHuntGroupClientInfoDisplayTemplate(
    requestMessage: api_v1alpha1_org_huntgroup_pb.GetHuntGroupClientInfoDisplayTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.GetHuntGroupClientInfoDisplayTemplateResponse|null) => void
  ): UnaryResponse;
  getHuntGroupClientInfoDisplayTemplate(
    requestMessage: api_v1alpha1_org_huntgroup_pb.GetHuntGroupClientInfoDisplayTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.GetHuntGroupClientInfoDisplayTemplateResponse|null) => void
  ): UnaryResponse;
  createHuntGroupClientInfoDisplayTemplate(
    requestMessage: api_v1alpha1_org_huntgroup_pb.CreateHuntGroupClientInfoDisplayTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.CreateHuntGroupClientInfoDisplayTemplateResponse|null) => void
  ): UnaryResponse;
  createHuntGroupClientInfoDisplayTemplate(
    requestMessage: api_v1alpha1_org_huntgroup_pb.CreateHuntGroupClientInfoDisplayTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.CreateHuntGroupClientInfoDisplayTemplateResponse|null) => void
  ): UnaryResponse;
  updateHuntGroupClientInfoDisplayTemplate(
    requestMessage: api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupClientInfoDisplayTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupClientInfoDisplayTemplateResponse|null) => void
  ): UnaryResponse;
  updateHuntGroupClientInfoDisplayTemplate(
    requestMessage: api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupClientInfoDisplayTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupClientInfoDisplayTemplateResponse|null) => void
  ): UnaryResponse;
  deleteHuntGroupClientInfoDisplayTemplate(
    requestMessage: api_v1alpha1_org_huntgroup_pb.DeleteHuntGroupClientInfoDisplayTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.DeleteHuntGroupClientInfoDisplayTemplateResponse|null) => void
  ): UnaryResponse;
  deleteHuntGroupClientInfoDisplayTemplate(
    requestMessage: api_v1alpha1_org_huntgroup_pb.DeleteHuntGroupClientInfoDisplayTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.DeleteHuntGroupClientInfoDisplayTemplateResponse|null) => void
  ): UnaryResponse;
  copyHuntGroupClientInfoDisplayTemplate(
    requestMessage: api_v1alpha1_org_huntgroup_pb.CopyHuntGroupClientInfoDisplayTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.CopyHuntGroupClientInfoDisplayTemplateResponse|null) => void
  ): UnaryResponse;
  copyHuntGroupClientInfoDisplayTemplate(
    requestMessage: api_v1alpha1_org_huntgroup_pb.CopyHuntGroupClientInfoDisplayTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.CopyHuntGroupClientInfoDisplayTemplateResponse|null) => void
  ): UnaryResponse;
  createCampaignClientInfoDisplayTemplate(
    requestMessage: api_v1alpha1_org_huntgroup_pb.CreateCampaignClientInfoDisplayTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.CreateCampaignClientInfoDisplayTemplateResponse|null) => void
  ): UnaryResponse;
  createCampaignClientInfoDisplayTemplate(
    requestMessage: api_v1alpha1_org_huntgroup_pb.CreateCampaignClientInfoDisplayTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.CreateCampaignClientInfoDisplayTemplateResponse|null) => void
  ): UnaryResponse;
  listHuntGroupsWithClientInfoTemplateData(
    requestMessage: api_v1alpha1_org_huntgroup_pb.ListHuntGroupsWithClientInfoTemplateDataRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.ListHuntGroupsWithClientInfoTemplateDataResponse|null) => void
  ): UnaryResponse;
  listHuntGroupsWithClientInfoTemplateData(
    requestMessage: api_v1alpha1_org_huntgroup_pb.ListHuntGroupsWithClientInfoTemplateDataRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.ListHuntGroupsWithClientInfoTemplateDataResponse|null) => void
  ): UnaryResponse;
  listAgentTriggers(
    requestMessage: api_v1alpha1_org_huntgroup_pb.ListAgentTriggersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.ListAgentTriggersResponse|null) => void
  ): UnaryResponse;
  listAgentTriggers(
    requestMessage: api_v1alpha1_org_huntgroup_pb.ListAgentTriggersRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.ListAgentTriggersResponse|null) => void
  ): UnaryResponse;
  copyAgentTrigger(
    requestMessage: api_v1alpha1_org_huntgroup_pb.CopyAgentTriggerRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.CopyAgentTriggerResponse|null) => void
  ): UnaryResponse;
  copyAgentTrigger(
    requestMessage: api_v1alpha1_org_huntgroup_pb.CopyAgentTriggerRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.CopyAgentTriggerResponse|null) => void
  ): UnaryResponse;
  updateAgentTriggers(
    requestMessage: api_v1alpha1_org_huntgroup_pb.UpdateAgentTriggersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.UpdateAgentTriggersResponse|null) => void
  ): UnaryResponse;
  updateAgentTriggers(
    requestMessage: api_v1alpha1_org_huntgroup_pb.UpdateAgentTriggersRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.UpdateAgentTriggersResponse|null) => void
  ): UnaryResponse;
  listHuntGroupScripts(
    requestMessage: api_v1alpha1_org_huntgroup_pb.ListHuntGroupScriptsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.ListHuntGroupScriptsResponse|null) => void
  ): UnaryResponse;
  listHuntGroupScripts(
    requestMessage: api_v1alpha1_org_huntgroup_pb.ListHuntGroupScriptsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.ListHuntGroupScriptsResponse|null) => void
  ): UnaryResponse;
  getHuntGroupScript(
    requestMessage: api_v1alpha1_org_huntgroup_pb.GetHuntGroupScriptRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.GetHuntGroupScriptResponse|null) => void
  ): UnaryResponse;
  getHuntGroupScript(
    requestMessage: api_v1alpha1_org_huntgroup_pb.GetHuntGroupScriptRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.GetHuntGroupScriptResponse|null) => void
  ): UnaryResponse;
  createHuntGroupScript(
    requestMessage: api_v1alpha1_org_huntgroup_pb.CreateHuntGroupScriptRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.CreateHuntGroupScriptResponse|null) => void
  ): UnaryResponse;
  createHuntGroupScript(
    requestMessage: api_v1alpha1_org_huntgroup_pb.CreateHuntGroupScriptRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.CreateHuntGroupScriptResponse|null) => void
  ): UnaryResponse;
  updateHuntGroupScript(
    requestMessage: api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupScriptRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupScriptResponse|null) => void
  ): UnaryResponse;
  updateHuntGroupScript(
    requestMessage: api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupScriptRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.UpdateHuntGroupScriptResponse|null) => void
  ): UnaryResponse;
  deleteHuntGroupScript(
    requestMessage: api_v1alpha1_org_huntgroup_pb.DeleteHuntGroupScriptRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.DeleteHuntGroupScriptResponse|null) => void
  ): UnaryResponse;
  deleteHuntGroupScript(
    requestMessage: api_v1alpha1_org_huntgroup_pb.DeleteHuntGroupScriptRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.DeleteHuntGroupScriptResponse|null) => void
  ): UnaryResponse;
  assignScriptToHuntGroups(
    requestMessage: api_v1alpha1_org_huntgroup_pb.AssignScriptToHuntGroupsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.AssignScriptToHuntGroupsResponse|null) => void
  ): UnaryResponse;
  assignScriptToHuntGroups(
    requestMessage: api_v1alpha1_org_huntgroup_pb.AssignScriptToHuntGroupsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.AssignScriptToHuntGroupsResponse|null) => void
  ): UnaryResponse;
  unassignScriptFromHuntGroups(
    requestMessage: api_v1alpha1_org_huntgroup_pb.UnassignScriptFromHuntGroupsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.UnassignScriptFromHuntGroupsResponse|null) => void
  ): UnaryResponse;
  unassignScriptFromHuntGroups(
    requestMessage: api_v1alpha1_org_huntgroup_pb.UnassignScriptFromHuntGroupsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_huntgroup_pb.UnassignScriptFromHuntGroupsResponse|null) => void
  ): UnaryResponse;
  createTrust(
    requestMessage: api_v1alpha1_org_trusts_pb.CreateTrustRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.CreateTrustResponse|null) => void
  ): UnaryResponse;
  createTrust(
    requestMessage: api_v1alpha1_org_trusts_pb.CreateTrustRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.CreateTrustResponse|null) => void
  ): UnaryResponse;
  acceptTrust(
    requestMessage: api_v1alpha1_org_trusts_pb.AcceptTrustRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.AcceptTrustResponse|null) => void
  ): UnaryResponse;
  acceptTrust(
    requestMessage: api_v1alpha1_org_trusts_pb.AcceptTrustRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.AcceptTrustResponse|null) => void
  ): UnaryResponse;
  rejectTrust(
    requestMessage: api_v1alpha1_org_trusts_pb.RejectTrustRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.RejectTrustResponse|null) => void
  ): UnaryResponse;
  rejectTrust(
    requestMessage: api_v1alpha1_org_trusts_pb.RejectTrustRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.RejectTrustResponse|null) => void
  ): UnaryResponse;
  getTrust(
    requestMessage: api_v1alpha1_org_trusts_pb.GetTrustRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.GetTrustResponse|null) => void
  ): UnaryResponse;
  getTrust(
    requestMessage: api_v1alpha1_org_trusts_pb.GetTrustRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.GetTrustResponse|null) => void
  ): UnaryResponse;
  listIncomingTrusts(
    requestMessage: api_v1alpha1_org_trusts_pb.ListIncomingTrustsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.ListIncomingTrustsResponse|null) => void
  ): UnaryResponse;
  listIncomingTrusts(
    requestMessage: api_v1alpha1_org_trusts_pb.ListIncomingTrustsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.ListIncomingTrustsResponse|null) => void
  ): UnaryResponse;
  listGivenTrusts(
    requestMessage: api_v1alpha1_org_trusts_pb.ListGivenTrustsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.ListGivenTrustsResponse|null) => void
  ): UnaryResponse;
  listGivenTrusts(
    requestMessage: api_v1alpha1_org_trusts_pb.ListGivenTrustsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.ListGivenTrustsResponse|null) => void
  ): UnaryResponse;
  listAssignableTrusts(
    requestMessage: api_v1alpha1_org_trusts_pb.ListAssignableTrustsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.ListAssignableTrustsResponse|null) => void
  ): UnaryResponse;
  listAssignableTrusts(
    requestMessage: api_v1alpha1_org_trusts_pb.ListAssignableTrustsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.ListAssignableTrustsResponse|null) => void
  ): UnaryResponse;
  deleteTrust(
    requestMessage: api_v1alpha1_org_trusts_pb.DeleteTrustRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.DeleteTrustResponse|null) => void
  ): UnaryResponse;
  deleteTrust(
    requestMessage: api_v1alpha1_org_trusts_pb.DeleteTrustRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.DeleteTrustResponse|null) => void
  ): UnaryResponse;
  assignTrust(
    requestMessage: api_v1alpha1_org_trusts_pb.AssignTrustRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.AssignTrustResponse|null) => void
  ): UnaryResponse;
  assignTrust(
    requestMessage: api_v1alpha1_org_trusts_pb.AssignTrustRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.AssignTrustResponse|null) => void
  ): UnaryResponse;
  unassignTrust(
    requestMessage: api_v1alpha1_org_trusts_pb.UnassignTrustRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.UnassignTrustResponse|null) => void
  ): UnaryResponse;
  unassignTrust(
    requestMessage: api_v1alpha1_org_trusts_pb.UnassignTrustRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_trusts_pb.UnassignTrustResponse|null) => void
  ): UnaryResponse;
  createLabel(
    requestMessage: api_v1alpha1_org_labels_pb.CreateLabelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_labels_pb.CreateLabelResponse|null) => void
  ): UnaryResponse;
  createLabel(
    requestMessage: api_v1alpha1_org_labels_pb.CreateLabelRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_labels_pb.CreateLabelResponse|null) => void
  ): UnaryResponse;
  deleteLabel(
    requestMessage: api_v1alpha1_org_labels_pb.DeleteLabelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_labels_pb.DeleteLabelResponse|null) => void
  ): UnaryResponse;
  deleteLabel(
    requestMessage: api_v1alpha1_org_labels_pb.DeleteLabelRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_labels_pb.DeleteLabelResponse|null) => void
  ): UnaryResponse;
  listLabels(
    requestMessage: api_v1alpha1_org_labels_pb.ListLabelsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_labels_pb.ListLabelsResponse|null) => void
  ): UnaryResponse;
  listLabels(
    requestMessage: api_v1alpha1_org_labels_pb.ListLabelsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_labels_pb.ListLabelsResponse|null) => void
  ): UnaryResponse;
  getLabel(
    requestMessage: api_v1alpha1_org_labels_pb.GetLabelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_labels_pb.GetLabelResponse|null) => void
  ): UnaryResponse;
  getLabel(
    requestMessage: api_v1alpha1_org_labels_pb.GetLabelRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_labels_pb.GetLabelResponse|null) => void
  ): UnaryResponse;
  updateLabel(
    requestMessage: api_v1alpha1_org_labels_pb.UpdateLabelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_labels_pb.UpdateLabelResponse|null) => void
  ): UnaryResponse;
  updateLabel(
    requestMessage: api_v1alpha1_org_labels_pb.UpdateLabelRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_labels_pb.UpdateLabelResponse|null) => void
  ): UnaryResponse;
  assignLabel(
    requestMessage: api_v1alpha1_org_labels_pb.AssignLabelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_labels_pb.AssignLabelResponse|null) => void
  ): UnaryResponse;
  assignLabel(
    requestMessage: api_v1alpha1_org_labels_pb.AssignLabelRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_labels_pb.AssignLabelResponse|null) => void
  ): UnaryResponse;
  unassignLabel(
    requestMessage: api_v1alpha1_org_labels_pb.UnassignLabelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_labels_pb.UnassignLabelResponse|null) => void
  ): UnaryResponse;
  unassignLabel(
    requestMessage: api_v1alpha1_org_labels_pb.UnassignLabelRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_labels_pb.UnassignLabelResponse|null) => void
  ): UnaryResponse;
  getAssignmentCounts(
    requestMessage: api_v1alpha1_org_labels_pb.GetAssignmentCountsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_labels_pb.GetAssignmentCountsResponse|null) => void
  ): UnaryResponse;
  getAssignmentCounts(
    requestMessage: api_v1alpha1_org_labels_pb.GetAssignmentCountsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_labels_pb.GetAssignmentCountsResponse|null) => void
  ): UnaryResponse;
  getAssignableLabels(
    requestMessage: api_v1alpha1_org_labels_pb.GetAssignableLabelsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_labels_pb.GetAssignableLabelsResponse|null) => void
  ): UnaryResponse;
  getAssignableLabels(
    requestMessage: api_v1alpha1_org_labels_pb.GetAssignableLabelsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_labels_pb.GetAssignableLabelsResponse|null) => void
  ): UnaryResponse;
  getPermissions(
    requestMessage: api_v1alpha1_org_permissions_pb.GetPermissionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.GetPermissionsResponse|null) => void
  ): UnaryResponse;
  getPermissions(
    requestMessage: api_v1alpha1_org_permissions_pb.GetPermissionsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.GetPermissionsResponse|null) => void
  ): UnaryResponse;
  getUserPermissions(
    requestMessage: api_v1alpha1_org_permissions_pb.GetUserPermissionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.GetUserPermissionsResponse|null) => void
  ): UnaryResponse;
  getUserPermissions(
    requestMessage: api_v1alpha1_org_permissions_pb.GetUserPermissionsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.GetUserPermissionsResponse|null) => void
  ): UnaryResponse;
  createPermissionGroup(
    requestMessage: api_v1alpha1_org_permissions_pb.CreatePermissionGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.CreatePermissionGroupResponse|null) => void
  ): UnaryResponse;
  createPermissionGroup(
    requestMessage: api_v1alpha1_org_permissions_pb.CreatePermissionGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.CreatePermissionGroupResponse|null) => void
  ): UnaryResponse;
  updatePermissionGroup(
    requestMessage: api_v1alpha1_org_permissions_pb.UpdatePermissionGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.UpdatePermissionGroupResponse|null) => void
  ): UnaryResponse;
  updatePermissionGroup(
    requestMessage: api_v1alpha1_org_permissions_pb.UpdatePermissionGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.UpdatePermissionGroupResponse|null) => void
  ): UnaryResponse;
  deletePermissionGroup(
    requestMessage: api_v1alpha1_org_permissions_pb.DeletePermissionGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.DeletePermissionGroupResponse|null) => void
  ): UnaryResponse;
  deletePermissionGroup(
    requestMessage: api_v1alpha1_org_permissions_pb.DeletePermissionGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.DeletePermissionGroupResponse|null) => void
  ): UnaryResponse;
  listPermissionGroups(
    requestMessage: api_v1alpha1_org_permissions_pb.ListPermissionGroupsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.ListPermissionGroupsResponse|null) => void
  ): UnaryResponse;
  listPermissionGroups(
    requestMessage: api_v1alpha1_org_permissions_pb.ListPermissionGroupsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.ListPermissionGroupsResponse|null) => void
  ): UnaryResponse;
  listPermissionGroupsByOrgId(
    requestMessage: api_v1alpha1_org_permissions_pb.ListPermissionGroupsByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.ListPermissionGroupsByOrgIdResponse|null) => void
  ): UnaryResponse;
  listPermissionGroupsByOrgId(
    requestMessage: api_v1alpha1_org_permissions_pb.ListPermissionGroupsByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.ListPermissionGroupsByOrgIdResponse|null) => void
  ): UnaryResponse;
  assignUsersPermissionGroup(
    requestMessage: api_v1alpha1_org_permissions_pb.AssignUsersPermissionGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.AssignUsersPermissionGroupResponse|null) => void
  ): UnaryResponse;
  assignUsersPermissionGroup(
    requestMessage: api_v1alpha1_org_permissions_pb.AssignUsersPermissionGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.AssignUsersPermissionGroupResponse|null) => void
  ): UnaryResponse;
  revokeUsersPermissionGroup(
    requestMessage: api_v1alpha1_org_permissions_pb.RevokeUsersPermissionGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.RevokeUsersPermissionGroupResponse|null) => void
  ): UnaryResponse;
  revokeUsersPermissionGroup(
    requestMessage: api_v1alpha1_org_permissions_pb.RevokeUsersPermissionGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.RevokeUsersPermissionGroupResponse|null) => void
  ): UnaryResponse;
  assignLabels(
    requestMessage: api_v1alpha1_org_permissions_pb.AssignLabelsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.AssignLabelsResponse|null) => void
  ): UnaryResponse;
  assignLabels(
    requestMessage: api_v1alpha1_org_permissions_pb.AssignLabelsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.AssignLabelsResponse|null) => void
  ): UnaryResponse;
  revokeLabels(
    requestMessage: api_v1alpha1_org_permissions_pb.RevokeLabelsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.RevokeLabelsResponse|null) => void
  ): UnaryResponse;
  revokeLabels(
    requestMessage: api_v1alpha1_org_permissions_pb.RevokeLabelsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.RevokeLabelsResponse|null) => void
  ): UnaryResponse;
  assignAccountOwnerPermissionToUser(
    requestMessage: api_v1alpha1_org_permissions_pb.AssignAccountOwnerPermissionToUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.AssignAccountOwnerPermissionToUserResponse|null) => void
  ): UnaryResponse;
  assignAccountOwnerPermissionToUser(
    requestMessage: api_v1alpha1_org_permissions_pb.AssignAccountOwnerPermissionToUserRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.AssignAccountOwnerPermissionToUserResponse|null) => void
  ): UnaryResponse;
  revokeAccountOwnerPermissionFromUser(
    requestMessage: api_v1alpha1_org_permissions_pb.RevokeAccountOwnerPermissionFromUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.RevokeAccountOwnerPermissionFromUserResponse|null) => void
  ): UnaryResponse;
  revokeAccountOwnerPermissionFromUser(
    requestMessage: api_v1alpha1_org_permissions_pb.RevokeAccountOwnerPermissionFromUserRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.RevokeAccountOwnerPermissionFromUserResponse|null) => void
  ): UnaryResponse;
  initDefaultPermissionGroups(
    requestMessage: api_v1alpha1_org_permissions_pb.InitDefaultPermissionGroupsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.InitDefaultPermissionGroupsResponse|null) => void
  ): UnaryResponse;
  initDefaultPermissionGroups(
    requestMessage: api_v1alpha1_org_permissions_pb.InitDefaultPermissionGroupsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.InitDefaultPermissionGroupsResponse|null) => void
  ): UnaryResponse;
  getAccountOwnerGroup(
    requestMessage: api_v1alpha1_org_permissions_pb.GetAccountOwnerGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.GetAccountOwnerGroupResponse|null) => void
  ): UnaryResponse;
  getAccountOwnerGroup(
    requestMessage: api_v1alpha1_org_permissions_pb.GetAccountOwnerGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.GetAccountOwnerGroupResponse|null) => void
  ): UnaryResponse;
  getLicenses(
    requestMessage: api_v1alpha1_org_permissions_pb.GetLicensesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.GetLicensesResponse|null) => void
  ): UnaryResponse;
  getLicenses(
    requestMessage: api_v1alpha1_org_permissions_pb.GetLicensesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.GetLicensesResponse|null) => void
  ): UnaryResponse;
  getOrgLicenses(
    requestMessage: api_v1alpha1_org_permissions_pb.GetOrgLicensesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.GetOrgLicensesResponse|null) => void
  ): UnaryResponse;
  getOrgLicenses(
    requestMessage: api_v1alpha1_org_permissions_pb.GetOrgLicensesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.GetOrgLicensesResponse|null) => void
  ): UnaryResponse;
  updateLicenses(
    requestMessage: api_v1alpha1_org_permissions_pb.UpdateLicensesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.UpdateLicensesResponse|null) => void
  ): UnaryResponse;
  updateLicenses(
    requestMessage: api_v1alpha1_org_permissions_pb.UpdateLicensesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.UpdateLicensesResponse|null) => void
  ): UnaryResponse;
  removePermissionFromAllPermissionGroups(
    requestMessage: api_v1alpha1_org_permissions_pb.RemovePermissionFromAllPermissionGroupsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.RemovePermissionFromAllPermissionGroupsResponse|null) => void
  ): UnaryResponse;
  removePermissionFromAllPermissionGroups(
    requestMessage: api_v1alpha1_org_permissions_pb.RemovePermissionFromAllPermissionGroupsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_permissions_pb.RemovePermissionFromAllPermissionGroupsResponse|null) => void
  ): UnaryResponse;
  listP3PermissionGroups(
    requestMessage: api_v1alpha1_org_p3_permissions_pb.ListP3PermissionGroupsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_p3_permissions_pb.ListP3PermissionGroupsResponse|null) => void
  ): UnaryResponse;
  listP3PermissionGroups(
    requestMessage: api_v1alpha1_org_p3_permissions_pb.ListP3PermissionGroupsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_p3_permissions_pb.ListP3PermissionGroupsResponse|null) => void
  ): UnaryResponse;
  listP3PermissionGroupsByOrgId(
    requestMessage: api_v1alpha1_org_p3_permissions_pb.ListP3PermissionGroupsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_p3_permissions_pb.ListP3PermissionGroupsResponse|null) => void
  ): UnaryResponse;
  listP3PermissionGroupsByOrgId(
    requestMessage: api_v1alpha1_org_p3_permissions_pb.ListP3PermissionGroupsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_p3_permissions_pb.ListP3PermissionGroupsResponse|null) => void
  ): UnaryResponse;
  createP3PermissionGroup(
    requestMessage: api_v1alpha1_org_p3_permissions_pb.CreateP3PermissionGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_p3_permissions_pb.CreateP3PermissionGroupResponse|null) => void
  ): UnaryResponse;
  createP3PermissionGroup(
    requestMessage: api_v1alpha1_org_p3_permissions_pb.CreateP3PermissionGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_p3_permissions_pb.CreateP3PermissionGroupResponse|null) => void
  ): UnaryResponse;
  updateP3PermissionGroup(
    requestMessage: api_v1alpha1_org_p3_permissions_pb.UpdateP3PermissionGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_p3_permissions_pb.UpdateP3PermissionGroupResponse|null) => void
  ): UnaryResponse;
  updateP3PermissionGroup(
    requestMessage: api_v1alpha1_org_p3_permissions_pb.UpdateP3PermissionGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_p3_permissions_pb.UpdateP3PermissionGroupResponse|null) => void
  ): UnaryResponse;
  updateP3PermissionGroupByOrgId(
    requestMessage: api_v1alpha1_org_p3_permissions_pb.UpdateP3PermissionGroupByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_p3_permissions_pb.UpdateP3PermissionGroupByOrgIdResponse|null) => void
  ): UnaryResponse;
  updateP3PermissionGroupByOrgId(
    requestMessage: api_v1alpha1_org_p3_permissions_pb.UpdateP3PermissionGroupByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_p3_permissions_pb.UpdateP3PermissionGroupByOrgIdResponse|null) => void
  ): UnaryResponse;
  deleteP3PermissionGroup(
    requestMessage: api_v1alpha1_org_p3_permissions_pb.DeleteP3PermissionGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_p3_permissions_pb.DeleteP3PermissionGroupResponse|null) => void
  ): UnaryResponse;
  deleteP3PermissionGroup(
    requestMessage: api_v1alpha1_org_p3_permissions_pb.DeleteP3PermissionGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_p3_permissions_pb.DeleteP3PermissionGroupResponse|null) => void
  ): UnaryResponse;
  assignUsersP3PermissionGroup(
    requestMessage: api_v1alpha1_org_p3_permissions_pb.AssignUsersP3PermissionGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_p3_permissions_pb.AssignUsersP3PermissionGroupResponse|null) => void
  ): UnaryResponse;
  assignUsersP3PermissionGroup(
    requestMessage: api_v1alpha1_org_p3_permissions_pb.AssignUsersP3PermissionGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_p3_permissions_pb.AssignUsersP3PermissionGroupResponse|null) => void
  ): UnaryResponse;
  revokeUsersP3PermissionGroup(
    requestMessage: api_v1alpha1_org_p3_permissions_pb.RevokeUsersP3PermissionGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_p3_permissions_pb.RevokeUsersP3PermissionGroupResponse|null) => void
  ): UnaryResponse;
  revokeUsersP3PermissionGroup(
    requestMessage: api_v1alpha1_org_p3_permissions_pb.RevokeUsersP3PermissionGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_p3_permissions_pb.RevokeUsersP3PermissionGroupResponse|null) => void
  ): UnaryResponse;
  refreshMfaLockout(
    requestMessage: api_v1alpha1_org_user_pb.RefreshMfaLockoutRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.RefreshMfaLockoutResponse|null) => void
  ): UnaryResponse;
  refreshMfaLockout(
    requestMessage: api_v1alpha1_org_user_pb.RefreshMfaLockoutRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.RefreshMfaLockoutResponse|null) => void
  ): UnaryResponse;
  refreshMfaLockoutByOrgId(
    requestMessage: api_v1alpha1_org_user_pb.RefreshMfaLockoutByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.RefreshMfaLockoutByOrgIdResponse|null) => void
  ): UnaryResponse;
  refreshMfaLockoutByOrgId(
    requestMessage: api_v1alpha1_org_user_pb.RefreshMfaLockoutByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.RefreshMfaLockoutByOrgIdResponse|null) => void
  ): UnaryResponse;
  setMfaType(
    requestMessage: api_v1alpha1_org_user_pb.SetMfaTypeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.SetMfaTypeResponse|null) => void
  ): UnaryResponse;
  setMfaType(
    requestMessage: api_v1alpha1_org_user_pb.SetMfaTypeRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.SetMfaTypeResponse|null) => void
  ): UnaryResponse;
  setMyMfaType(
    requestMessage: api_v1alpha1_org_user_pb.SetMyMfaTypeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.SetMyMfaTypeResponse|null) => void
  ): UnaryResponse;
  setMyMfaType(
    requestMessage: api_v1alpha1_org_user_pb.SetMyMfaTypeRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.SetMyMfaTypeResponse|null) => void
  ): UnaryResponse;
  enableUserMfa(
    requestMessage: api_v1alpha1_org_user_pb.EnableUserMfaRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.EnableUserMfaResponse|null) => void
  ): UnaryResponse;
  enableUserMfa(
    requestMessage: api_v1alpha1_org_user_pb.EnableUserMfaRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.EnableUserMfaResponse|null) => void
  ): UnaryResponse;
  enableMyUserMfa(
    requestMessage: api_v1alpha1_org_user_pb.EnableMyUserMfaRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.EnableMyUserMfaResponse|null) => void
  ): UnaryResponse;
  enableMyUserMfa(
    requestMessage: api_v1alpha1_org_user_pb.EnableMyUserMfaRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.EnableMyUserMfaResponse|null) => void
  ): UnaryResponse;
  getUserMfaInfo(
    requestMessage: api_v1alpha1_org_user_pb.GetUserMfaInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.GetUserMfaInfoResponse|null) => void
  ): UnaryResponse;
  getUserMfaInfo(
    requestMessage: api_v1alpha1_org_user_pb.GetUserMfaInfoRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.GetUserMfaInfoResponse|null) => void
  ): UnaryResponse;
  getMyUserMfaInfo(
    requestMessage: api_v1alpha1_org_user_pb.GetMyUserMfaInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.GetMyUserMfaInfoResponse|null) => void
  ): UnaryResponse;
  getMyUserMfaInfo(
    requestMessage: api_v1alpha1_org_user_pb.GetMyUserMfaInfoRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.GetMyUserMfaInfoResponse|null) => void
  ): UnaryResponse;
  getMyAllowedMfaMethods(
    requestMessage: api_v1alpha1_org_user_pb.GetMyAllowedMfaMethodsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.GetMyAllowedMfaMethodsResponse|null) => void
  ): UnaryResponse;
  getMyAllowedMfaMethods(
    requestMessage: api_v1alpha1_org_user_pb.GetMyAllowedMfaMethodsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.GetMyAllowedMfaMethodsResponse|null) => void
  ): UnaryResponse;
  createBusinessHours(
    requestMessage: api_v1alpha1_org_preferences_pb.CreateBusinessHoursRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.CreateBusinessHoursResponse|null) => void
  ): UnaryResponse;
  createBusinessHours(
    requestMessage: api_v1alpha1_org_preferences_pb.CreateBusinessHoursRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.CreateBusinessHoursResponse|null) => void
  ): UnaryResponse;
  updateBusinessHours(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateBusinessHoursRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateBusinessHoursResponse|null) => void
  ): UnaryResponse;
  updateBusinessHours(
    requestMessage: api_v1alpha1_org_preferences_pb.UpdateBusinessHoursRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_preferences_pb.UpdateBusinessHoursResponse|null) => void
  ): UnaryResponse;
  addGroupedUserIPRestrictions(
    requestMessage: api_v1alpha1_org_user_pb.AddGroupedUserIPRestrictionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.AddGroupedUserIPRestrictionsResponse|null) => void
  ): UnaryResponse;
  addGroupedUserIPRestrictions(
    requestMessage: api_v1alpha1_org_user_pb.AddGroupedUserIPRestrictionsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.AddGroupedUserIPRestrictionsResponse|null) => void
  ): UnaryResponse;
  removeGroupedUserIPRestrictions(
    requestMessage: api_v1alpha1_org_user_pb.RemoveGroupedUserIPRestrictionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.RemoveGroupedUserIPRestrictionsResponse|null) => void
  ): UnaryResponse;
  removeGroupedUserIPRestrictions(
    requestMessage: api_v1alpha1_org_user_pb.RemoveGroupedUserIPRestrictionsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.RemoveGroupedUserIPRestrictionsResponse|null) => void
  ): UnaryResponse;
  listUsersAllowedIps(
    requestMessage: api_v1alpha1_org_user_pb.ListUsersAllowedIpsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.ListUsersAllowedIpsResponse|null) => void
  ): UnaryResponse;
  listUsersAllowedIps(
    requestMessage: api_v1alpha1_org_user_pb.ListUsersAllowedIpsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_user_pb.ListUsersAllowedIpsResponse|null) => void
  ): UnaryResponse;
}

