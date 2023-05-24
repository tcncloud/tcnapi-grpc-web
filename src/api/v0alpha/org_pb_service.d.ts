// package: api.v0alpha
// file: api/v0alpha/org.proto

import * as api_v0alpha_org_pb from "../../api/v0alpha/org_pb";
import {grpc} from "@improbable-eng/grpc-web";

type OrgRegisterOrganization = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.RegisterOrganizationRequest;
  readonly responseType: typeof api_v0alpha_org_pb.RegisterOrganizationResponse;
};

type OrgConvertOrgToManual = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.ConvertOrgToManualRequest;
  readonly responseType: typeof api_v0alpha_org_pb.ConvertOrgToManualResponse;
};

type OrgUpdateOrganization = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateOrganizationRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateOrganizationResponse;
};

type OrgArchiveOrganization = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.ArchiveOrganizationRequest;
  readonly responseType: typeof api_v0alpha_org_pb.ArchiveOrganizationResponse;
};

type OrgUnArchiveOrganization = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UnArchiveOrganizationRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UnArchiveOrganizationResponse;
};

type OrgListArchivedOrganizations = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.ListArchivedOrganizationsRequest;
  readonly responseType: typeof api_v0alpha_org_pb.ListArchivedOrganizationsResponse;
};

type OrgGetOrganizationProfile = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetOrganizationProfileRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetOrganizationProfileResponse;
};

type OrgGetOrganizationProfileById = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetOrganizationProfileByIdRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetOrganizationProfileResponse;
};

type OrgListOrganizationDescriptions = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.ListOrganizationDescriptionsRequest;
  readonly responseType: typeof api_v0alpha_org_pb.ListOrganizationDescriptionsResponse;
};

type OrgListRegionalOrganizations = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.ListRegionalOrganizationsRequest;
  readonly responseType: typeof api_v0alpha_org_pb.ListRegionalOrganizationsResponse;
};

type OrgUpdateP3OwningOrg = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateP3OwningOrgRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateP3OwningOrgResponse;
};

type OrgGetP3OwningOrg = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetP3OwningOrgRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetP3OwningOrgResponse;
};

type OrgListOrganizationUserDescriptions = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.ListOrganizationUserDescriptionsRequest;
  readonly responseType: typeof api_v0alpha_org_pb.ListOrganizationUserDescriptionsResponse;
};

type OrgAdminListUserDescriptions = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v0alpha_org_pb.AdminListUserDescriptionsRequest;
  readonly responseType: typeof api_v0alpha_org_pb.AdminListUserDescriptionsResponse;
};

type OrgListUserDescriptions = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v0alpha_org_pb.ListUserDescriptionsRequest;
  readonly responseType: typeof api_v0alpha_org_pb.ListUserDescriptionsResponse;
};

type OrgGetUserDirectory = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetUserDirectoryRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetUserDirectoryResponse;
};

type OrgGetRegions = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetRegionsRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetRegionsResponse;
};

type OrgGetMyUserDetails = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetMyUserDetailsRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UserDetails;
};

type OrgGetUserDetails = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetUserDetailsRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UserDetails;
};

type OrgAdminGetUserDetails = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.AdminGetUserDetailsRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UserDetails;
};

type OrgGetAgentUsers = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetAgentUsersRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetAgentUsersResponse;
};

type OrgGetAgentSettings = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetAgentSettingsRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetAgentSettingsResponse;
};

type OrgGetAgentProfileGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetAgentProfileGroupRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetAgentProfileGroupResponse;
};

type OrgUpdateAgentProfileGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateAgentProfileGroupRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateAgentProfileGroupResponse;
};

type OrgCreateAgentProfileGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.CreateAgentProfileGroupRequest;
  readonly responseType: typeof api_v0alpha_org_pb.CreateAgentProfileGroupResponse;
};

type OrgListAgentProfileGroups = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.ListAgentProfileGroupsRequest;
  readonly responseType: typeof api_v0alpha_org_pb.ListAgentProfileGroupsResponse;
};

type OrgDeleteAgentProfileGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.DeleteAgentProfileGroupRequest;
  readonly responseType: typeof api_v0alpha_org_pb.DeleteAgentProfileGroupResponse;
};

type OrgAssignAgentProfileGroups = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.AssignAgentProfileGroupsRequest;
  readonly responseType: typeof api_v0alpha_org_pb.AssignAgentProfileGroupsResponse;
};

type OrgUpdateUser = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateUserRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateUserResponse;
};

type OrgUpdateMyUser = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateMyUserRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateMyUserResponse;
};

type OrgUpdateUserByCallerId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateUserByCallerIdRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateUserByCallerIdResponse;
};

type OrgCreateUser = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.CreateUserRequest;
  readonly responseType: typeof api_v0alpha_org_pb.CreateUserResponse;
};

type OrgCreateUserByOrgId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.CreateUserByOrgIdRequest;
  readonly responseType: typeof api_v0alpha_org_pb.CreateUserByOrgIdResponse;
};

type OrgCreateDelegatedUser = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.CreateDelegatedUserRequest;
  readonly responseType: typeof api_v0alpha_org_pb.CreateDelegatedUserResponse;
};

type OrgUpdateUserPassword = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateUserPasswordRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateUserPasswordResponse;
};

type OrgUpdateUserPasswordByUserId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateUserPasswordByUserIdRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateUserPasswordByUserIdResponse;
};

type OrgUpdateUserPasswordByOrgId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateUserPasswordByOrgIdRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateUserPasswordByOrgIdResponse;
};

type OrgResetUserRequirePasswordReset = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.ResetUserRequirePasswordResetRequest;
  readonly responseType: typeof api_v0alpha_org_pb.ResetUserRequirePasswordResetResponse;
};

type OrgGetMyUserPasswordResetLink = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetMyUserPasswordResetLinkRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetMyUserPasswordResetLinkResponse;
};

type OrgGetUserPasswordResetLink = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetUserPasswordResetLinkRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetUserPasswordResetLinkResponse;
};

type OrgGetUserPasswordResetLinkByOrgId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetUserPasswordResetLinkByOrgIdRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetUserPasswordResetLinkByOrgIdResponse;
};

type OrgGetUserEmailVerified = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetUserEmailVerifiedRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetUserEmailVerifiedResponse;
};

type OrgGetUserEmailVerifiedByOrgId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetUserEmailVerifiedByOrgIdRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetUserEmailVerifiedByOrgIdResponse;
};

type OrgSendUserVerificationEmailByOrgId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.SendUserVerificationEmailByOrgIdRequest;
  readonly responseType: typeof api_v0alpha_org_pb.SendUserVerificationEmailByOrgIdResponse;
};

type OrgSendUserVerificationEmail = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.SendUserVerificationEmailRequest;
  readonly responseType: typeof api_v0alpha_org_pb.SendUserVerificationEmailResponse;
};

type OrgManualUserEmailVerificationByOrgId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.ManualUserEmailVerificationByOrgIdRequest;
  readonly responseType: typeof api_v0alpha_org_pb.ManualUserEmailVerificationByOrgIdResponse;
};

type OrgManualUserEmailVerification = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.ManualUserEmailVerificationRequest;
  readonly responseType: typeof api_v0alpha_org_pb.ManualUserEmailVerificationResponse;
};

type OrgGetTempUserToken = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetTempUserTokenReq;
  readonly responseType: typeof api_v0alpha_org_pb.GetTempUserTokenRes;
};

type OrgGetTempUserTokenByUserId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetTempUserTokenByUserIdReq;
  readonly responseType: typeof api_v0alpha_org_pb.GetTempUserTokenByUserIdRes;
};

type OrgGetCountriesList = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetCountriesListRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetCountriesListResponse;
};

type OrgGetAdminClientPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetAdminClientPreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetAdminClientPreferencesResponse;
};

type OrgUpdateAdminClientPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateAdminClientPreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateAdminClientPreferencesResponse;
};

type OrgGetPermissions = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetPermissionsRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetPermissionsResponse;
};

type OrgRevokeAccountOwnerPermissionFromUser = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.RevokeAccountOwnerPermissionFromUserRequest;
  readonly responseType: typeof api_v0alpha_org_pb.RevokeAccountOwnerPermissionFromUserResponse;
};

type OrgUpdateUserDisabled = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateUserDisabledRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateUserDisabledResponse;
};

type OrgUpdateUserDisabledByOrgId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateUserDisabledByOrgIdRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateUserDisabledByOrgIdResponse;
};

type OrgUpdateBulkUsersDisabled = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateBulkUsersDisabledRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateBulkUsersDisabledResponse;
};

type OrgGetOrgBillingSettingsByOrgId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetOrgBillingSettingsByOrgIdRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetOrgBillingSettingsByOrgIdResponse;
};

type OrgGetOrgBillingSettings = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetOrgBillingSettingsRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetOrgBillingSettingsResponse;
};

type OrgSetOrgBillingSettings = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.SetOrgBillingSettingsRequest;
  readonly responseType: typeof api_v0alpha_org_pb.SetOrgBillingSettingsResponse;
};

type OrgAddOrgBillingOverride = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.AddOrgBillingOverrideRequest;
  readonly responseType: typeof api_v0alpha_org_pb.AddOrgBillingOverrideResponse;
};

type OrgRemoveOrgBillingOverride = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.RemoveOrgBillingOverrideRequest;
  readonly responseType: typeof api_v0alpha_org_pb.RemoveOrgBillingOverrideResponse;
};

type OrgGetSystemDefaultBillingRates = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetSystemDefaultBillingRatesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetSystemDefaultBillingRatesResponse;
};

type OrgListPermissionGroupsByOrgId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.ListPermissionGroupsByOrgIdRequest;
  readonly responseType: typeof api_v0alpha_org_pb.ListPermissionGroupsByOrgIdResponse;
};

type OrgListPermissionGroups = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.ListPermissionGroupsRequest;
  readonly responseType: typeof api_v0alpha_org_pb.ListPermissionGroupsResponse;
};

type OrgCreatePermissionGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.CreatePermissionGroupRequest;
  readonly responseType: typeof api_v0alpha_org_pb.CreatePermissionGroupResponse;
};

type OrgUpdatePermissionGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdatePermissionGroupRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdatePermissionGroupResponse;
};

type OrgDeletePermissionGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.DeletePermissionGroupRequest;
  readonly responseType: typeof api_v0alpha_org_pb.DeletePermissionGroupResponse;
};

type OrgAssignUserToAccountOwnerPermissionGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.AssignUserToAccountOwnerPermissionGroupRequest;
  readonly responseType: typeof api_v0alpha_org_pb.AssignUserToAccountOwnerPermissionGroupResponse;
};

type OrgAssignUserPermissionGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.AssignUserPermissionGroupRequest;
  readonly responseType: typeof api_v0alpha_org_pb.AssignUserPermissionGroupResponse;
};

type OrgAssignUsersPermissionGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.AssignUsersPermissionGroupRequest;
  readonly responseType: typeof api_v0alpha_org_pb.AssignUsersPermissionGroupResponse;
};

type OrgUpdateUserNeoPermissionGroups = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateUserNeoPermissionGroupsRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateUserNeoPermissionGroupsResponse;
};

type OrgRevokeUserPermissionGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.RevokeUserPermissionGroupRequest;
  readonly responseType: typeof api_v0alpha_org_pb.RevokeUserPermissionGroupResponse;
};

type OrgRevokeUsersPermissionGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.RevokeUsersPermissionGroupRequest;
  readonly responseType: typeof api_v0alpha_org_pb.RevokeUsersPermissionGroupResponse;
};

type OrgInitDefaultPermissionGroups = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.InitDefaultPermissionGroupsRequest;
  readonly responseType: typeof api_v0alpha_org_pb.InitDefaultPermissionGroupsResponse;
};

type OrgAddPermissionToAccountOwnerPermissionGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.AddPermissionToAccountOwnerPermissionGroupRequest;
  readonly responseType: typeof api_v0alpha_org_pb.AddPermissionToAccountOwnerPermissionGroupResponse;
};

type OrgRevokePermissionToAccountOwnerPermissionGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.RevokePermissionToAccountOwnerPermissionGroupRequest;
  readonly responseType: typeof api_v0alpha_org_pb.RevokePermissionToAccountOwnerPermissionGroupResponse;
};

type OrgAddPermissionToOrgDefaultGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.AddPermissionToOrgDefaultGroupRequest;
  readonly responseType: typeof api_v0alpha_org_pb.AddPermissionToOrgDefaultGroupResponse;
};

type OrgRemovePermissionFromOrgDefaultGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.RemovePermissionFromOrgDefaultGroupRequest;
  readonly responseType: typeof api_v0alpha_org_pb.RemovePermissionFromOrgDefaultGroupResponse;
};

type OrgGetOrgDefaultSuperUserGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetOrgDefaultSuperUserGroupRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetOrgDefaultSuperUserGroupResponse;
};

type OrgListP3PermissionGroupsByOrgId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.ListP3PermissionGroupsByOrgIdRequest;
  readonly responseType: typeof api_v0alpha_org_pb.ListP3PermissionGroupsByOrgIdResponse;
};

type OrgListP3PermissionGroups = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.ListP3PermissionGroupsRequest;
  readonly responseType: typeof api_v0alpha_org_pb.ListP3PermissionGroupsResponse;
};

type OrgAddUserRegion = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.AddUserRegionRequest;
  readonly responseType: typeof api_v0alpha_org_pb.AddUserRegionResponse;
};

type OrgRemoveUserRegion = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.RemoveUserRegionRequest;
  readonly responseType: typeof api_v0alpha_org_pb.RemoveUserRegionResponse;
};

type OrgCreateP3PermissionGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.CreateP3PermissionGroupRequest;
  readonly responseType: typeof api_v0alpha_org_pb.CreateP3PermissionGroupResponse;
};

type OrgUpdateP3PermissionGroupByOrgId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateP3PermissionGroupByOrgIdRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateP3PermissionGroupByOrgIdResponse;
};

type OrgUpdateP3PermissionGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateP3PermissionGroupRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateP3PermissionGroupResponse;
};

type OrgDeleteP3PermissionGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.DeleteP3PermissionGroupRequest;
  readonly responseType: typeof api_v0alpha_org_pb.DeleteP3PermissionGroupResponse;
};

type OrgAssignUsersP3PermissionGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.AssignUsersP3PermissionGroupRequest;
  readonly responseType: typeof api_v0alpha_org_pb.AssignUsersP3PermissionGroupResponse;
};

type OrgAddLoginToUser = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.AddLoginToUserRequest;
  readonly responseType: typeof api_v0alpha_org_pb.AddLoginToUserResponse;
};

type OrgRevokeUsersP3PermissionGroup = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.RevokeUsersP3PermissionGroupRequest;
  readonly responseType: typeof api_v0alpha_org_pb.RevokeUsersP3PermissionGroupResponse;
};

type OrgGetContactPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetContactPreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetContactPreferencesResponse;
};

type OrgUpdateContactPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateContactPreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateContactPreferencesResponse;
};

type OrgGetCompliancePreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetCompliancePreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetCompliancePreferencesResponse;
};

type OrgUpdateCompliancePreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateCompliancePreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateCompliancePreferencesResponse;
};

type OrgGetAgentPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetAgentPreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetAgentPreferencesResponse;
};

type OrgUpdateAgentPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateAgentPreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateAgentPreferencesResponse;
};

type OrgGetOrganizationPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetOrganizationPreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetOrganizationPreferencesResponse;
};

type OrgUpdateOrganizationPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateOrganizationPreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateOrganizationPreferencesResponse;
};

type OrgGetSchedulePreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetSchedulePreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetSchedulePreferencesResponse;
};

type OrgUpdateSchedulePreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateSchedulePreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateSchedulePreferencesResponse;
};

type OrgGetBusinessPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetBusinessPreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetBusinessPreferencesResponse;
};

type OrgUpdateBusinessPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateBusinessPreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateBusinessPreferencesResponse;
};

type OrgGetEndOfDayPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetEndOfDayPreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetEndOfDayPreferencesResponse;
};

type OrgUpdateEndOfDayPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateEndOfDayPreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateEndOfDayPreferencesResponse;
};

type OrgGetReportFilterPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetFilterPreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetFilterPreferencesResponse;
};

type OrgUpdateReportFilterPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateFilterPreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateFilterPreferencesResponse;
};

type OrgGetPhonePreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetPhonePreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetPhonePreferencesResponse;
};

type OrgUpdatePhonePreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdatePhonePreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdatePhonePreferencesResponse;
};

type OrgGetDashboardGeneralPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetDashboardGeneralPreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetDashboardGeneralPreferencesResponse;
};

type OrgUpdateDashboardGeneralPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateDashboardGeneralPreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateDashboardGeneralPreferencesResponse;
};

type OrgGetWebhookPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetWebhookPreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetWebhookPreferencesResponse;
};

type OrgUpdateWebhookPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateWebhookPreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateWebhookPreferencesResponse;
};

type OrgGetBroadcastPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetBroadcastPreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetBroadcastPreferencesResponse;
};

type OrgUpdateBroadcastPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateBroadcastPreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateBroadcastPreferencesResponse;
};

type OrgGetAuthenticationPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetAuthenticationPreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetAuthenticationPreferencesResponse;
};

type OrgUpdateAuthenticationPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateAuthenticationPreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateAuthenticationPreferencesResponse;
};

type OrgGetRecordingPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetRecordingPreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetRecordingPreferencesResponse;
};

type OrgUpdateRecordingPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateRecordingPreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateRecordingPreferencesResponse;
};

type OrgGetDashboardQueuePreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetDashboardQueuePreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetDashboardQueuePreferencesResponse;
};

type OrgUpdateDashboardQueuePreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateDashboardQueuePreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateDashboardQueuePreferencesResponse;
};

type OrgGetAgentQuickViewPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetAgentQuickViewPreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetAgentQuickViewPreferencesResponse;
};

type OrgGetVoiceAnalyticsPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetVoiceAnalyticsPreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetVoiceAnalyticsPreferencesResponse;
};

type OrgUpdateVoiceAnalyticsPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateVoiceAnalyticsPreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateVoiceAnalyticsPreferencesResponse;
};

type OrgUpdateVoiceAnalyticsPreferencesEnabled = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateVoiceAnalyticsPreferencesEnabledRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateVoiceAnalyticsPreferencesEnabledResponse;
};

type OrgGetScorecardsPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetScorecardsPreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetScorecardsPreferencesResponse;
};

type OrgUpdateScorecardsPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateScorecardsPreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateScorecardsPreferencesResponse;
};

type OrgGetEmailSmsPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetEmailSmsPreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetEmailSmsPreferencesResponse;
};

type OrgUpdateEmailSmsPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateEmailSmsPreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateEmailSmsPreferencesResponse;
};

type OrgEditAgentQuickViewPreferences = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.EditAgentQuickViewPreferencesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.EditAgentQuickViewPreferencesResponse;
};

type OrgEditBackofficeThemePreference = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.EditBackofficeThemePreferenceRequest;
  readonly responseType: typeof api_v0alpha_org_pb.EditBackofficeThemePreferenceResponse;
};

type OrgGetBackofficeThemePreference = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetBackofficeThemePreferenceRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetBackofficeThemePreferenceResponse;
};

type OrgAcceptLinkbackRecordingTerms = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.AcceptLinkbackRecordingTermsRequest;
  readonly responseType: typeof api_v0alpha_org_pb.AcceptLinkbackRecordingTermsResponse;
};

type OrgLinkbackUpdateBroadcastTemplates = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.LinkbackUpdateBroadcastTemplatesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.LinkbackUpdateBroadcastTemplatesResponse;
};

type OrgRecordEmailUnsubscribeAcknowledgement = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.RecordEmailUnsubscribeAcknowledgementRequest;
  readonly responseType: typeof api_v0alpha_org_pb.RecordEmailUnsubscribeAcknowledgementResponse;
};

type OrgClearEmailUnsubscribeAcknowledgement = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.ClearEmailUnsubscribeAcknowledgementRequest;
  readonly responseType: typeof api_v0alpha_org_pb.ClearEmailUnsubscribeAcknowledgementResponse;
};

type OrgCreateWebLinkTemplate = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.CreateWebLinkTemplateRequest;
  readonly responseType: typeof api_v0alpha_org_pb.CreateWebLinkTemplateResponse;
};

type OrgListWebLinkTemplates = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.ListWebLinkTemplatesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.ListWebLinkTemplatesResponse;
};

type OrgGetWebLinkTemplate = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetWebLinkTemplateRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetWebLinkTemplateResponse;
};

type OrgUpdateWebLinkTemplate = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateWebLinkTemplateRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateWebLinkTemplateResponse;
};

type OrgDeleteWebLinkTemplate = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.DeleteWebLinkTemplateRequest;
  readonly responseType: typeof api_v0alpha_org_pb.DeleteWebLinkTemplateResponse;
};

type OrgCreateAgentTriggerTemplate = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.CreateAgentTriggerTemplateRequest;
  readonly responseType: typeof api_v0alpha_org_pb.CreateAgentTriggerTemplateResponse;
};

type OrgListAgentTriggerTemplates = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.ListAgentTriggerTemplatesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.ListAgentTriggerTemplatesResponse;
};

type OrgGetAgentTriggerTemplate = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetAgentTriggerTemplateRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetAgentTriggerTemplateResponse;
};

type OrgUpdateAgentTriggerTemplate = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateAgentTriggerTemplateRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateAgentTriggerTemplateResponse;
};

type OrgDeleteAgentTriggerTemplate = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.DeleteAgentTriggerTemplateRequest;
  readonly responseType: typeof api_v0alpha_org_pb.DeleteAgentTriggerTemplateResponse;
};

type OrgCreateClientInfoDisplayTemplate = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.CreateClientInfoDisplayTemplateRequest;
  readonly responseType: typeof api_v0alpha_org_pb.CreateClientInfoDisplayTemplateResponse;
};

type OrgListClientInfoDisplayTemplates = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.ListClientInfoDisplayTemplatesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.ListClientInfoDisplayTemplatesResponse;
};

type OrgUpdateClientInfoDisplayTemplate = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateClientInfoDisplayTemplateRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateClientInfoDisplayTemplateResponse;
};

type OrgDeleteClientInfoDisplayTemplate = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.DeleteClientInfoDisplayTemplateRequest;
  readonly responseType: typeof api_v0alpha_org_pb.DeleteClientInfoDisplayTemplateResponse;
};

type OrgGetClientInfoDisplayTemplate = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetClientInfoDisplayTemplateRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetClientInfoDisplayTemplateResponse;
};

type OrgListAgentPauseCodes = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.ListAgentPauseCodesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.ListAgentPauseCodesResponse;
};

type OrgCreateAgentPauseCode = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.CreateAgentPauseCodeRequest;
  readonly responseType: typeof api_v0alpha_org_pb.CreateAgentPauseCodeResponse;
};

type OrgUpdateAgentPauseCode = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateAgentPauseCodeRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateAgentPauseCodeResponse;
};

type OrgDeleteAgentPauseCode = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.DeleteAgentPauseCodeRequest;
  readonly responseType: typeof api_v0alpha_org_pb.DeleteAgentPauseCodeResponse;
};

type OrgListCustomReportFilters = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.ListCustomReportFiltersRequest;
  readonly responseType: typeof api_v0alpha_org_pb.ListCustomReportFiltersResponse;
};

type OrgCreateCustomReportFilter = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.CreateCustomReportFilterRequest;
  readonly responseType: typeof api_v0alpha_org_pb.CreateCustomReportFilterResponse;
};

type OrgUpdateCustomReportFilter = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateCustomReportFilterRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateCustomReportFilterResponse;
};

type OrgDeleteCustomReportFilter = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.DeleteCustomReportFilterRequest;
  readonly responseType: typeof api_v0alpha_org_pb.DeleteCustomReportFilterResponse;
};

type OrgListAgentResponseGroups = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.ListAgentResponseGroupsRequest;
  readonly responseType: typeof api_v0alpha_org_pb.ListAgentResponseGroupsResponse;
};

type OrgListLastTemplateElements = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.ListLastTemplateElementsRequest;
  readonly responseType: typeof api_v0alpha_org_pb.ListLastTemplateElementsResponse;
};

type OrgListQueueConfigs = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.ListQueueConfigsReq;
  readonly responseType: typeof api_v0alpha_org_pb.ListQueueConfigsRes;
};

type OrgDeleteQueueConfig = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.DeleteQueueConfigReq;
  readonly responseType: typeof api_v0alpha_org_pb.DeleteQueueConfigRes;
};

type OrgGetQueueConfig = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetQueueConfigReq;
  readonly responseType: typeof api_v0alpha_org_pb.GetQueueConfigRes;
};

type OrgCreateQueueConfig = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.CreateQueueConfigReq;
  readonly responseType: typeof api_v0alpha_org_pb.CreateQueueConfigRes;
};

type OrgUpdateQueueConfig = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateQueueConfigReq;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateQueueConfigRes;
};

type OrgCopyQueueConfig = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.CopyQueueConfigReq;
  readonly responseType: typeof api_v0alpha_org_pb.CopyQueueConfigRes;
};

type OrgGetAllQueueConfigSounds = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetAllQueueConfigSoundsReq;
  readonly responseType: typeof api_v0alpha_org_pb.GetAllQueueConfigSoundsRes;
};

type OrgGetQueueConfigSound = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetQueueConfigSoundReq;
  readonly responseType: typeof api_v0alpha_org_pb.GetQueueConfigSoundRes;
};

type OrgSetQueueConfigSound = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.SetQueueConfigSoundReq;
  readonly responseType: typeof api_v0alpha_org_pb.SetQueueConfigSoundRes;
};

type OrgSetAllQueueConfigSoundsFromSource = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.SetAllQueueConfigSoundsFromSourceReq;
  readonly responseType: typeof api_v0alpha_org_pb.SetAllQueueConfigSoundsFromSourceRes;
};

type OrgGetUserBlocked = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetUserBlockedRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetUserBlockedResponse;
};

type OrgUnblockUser = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UnblockUserRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UnblockUserResponse;
};

type OrgListP3UnMigratedUsers = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.ListP3UnMigratedUsersRequest;
  readonly responseType: typeof api_v0alpha_org_pb.ListP3UnMigratedUsersResponse;
};

type OrgMigrateP3User = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.MigrateP3UserRequest;
  readonly responseType: typeof api_v0alpha_org_pb.MigrateP3UserResponse;
};

type OrgUpdateP3UserName = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateP3UserNameRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateP3UserNameResponse;
};

type OrgListOwnedUsers = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.ListOwnedUsersRequest;
  readonly responseType: typeof api_v0alpha_org_pb.ListOwnedUsersResponse;
};

type OrgListOwnedOrgsByOrgId = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.ListOwnedOrgsByOrgIdRequest;
  readonly responseType: typeof api_v0alpha_org_pb.ListOwnedOrgsByOrgIdResponse;
};

type OrgListOwnedOrgs = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.ListOwnedOrgsRequest;
  readonly responseType: typeof api_v0alpha_org_pb.ListOwnedOrgsResponse;
};

type OrgRemoveLoginStrikes = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.RemoveLoginStrikesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.RemoveLoginStrikesResponse;
};

type OrgRemoveUserLoginStrikes = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.RemoveUserLoginStrikesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.RemoveUserLoginStrikesResponse;
};

type OrgListLoginHistory = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.ListLoginHistoryRequest;
  readonly responseType: typeof api_v0alpha_org_pb.ListLoginHistoryResponse;
};

type OrgUpdateP3UserSids = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateP3UserSidsRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateP3UserSidsResponse;
};

type OrgCreateAuthConnection = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.CreateAuthConnectionRequest;
  readonly responseType: typeof api_v0alpha_org_pb.CreateAuthConnectionResponse;
};

type OrgGetAuthConnectionSettings = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetAuthConnectionSettingsRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetAuthConnectionSettingsResponse;
};

type OrgUpdateAuthConnectionSettings = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateAuthConnectionSettingsRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateAuthConnectionSettingsResponse;
};

type OrgDeleteAuthConnection = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.DeleteAuthConnectionRequest;
  readonly responseType: typeof api_v0alpha_org_pb.DeleteAuthConnectionResponse;
};

type OrgGetUserSubscription = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetUserSubscriptionRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetUserSubscriptionResponse;
};

type OrgAddUserSubscription = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.AddUserSubscriptionRequest;
  readonly responseType: typeof api_v0alpha_org_pb.AddUserSubscriptionResponse;
};

type OrgRemoveUserSubscription = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.RemoveUserSubscriptionRequest;
  readonly responseType: typeof api_v0alpha_org_pb.RemoveUserSubscriptionResponse;
};

type OrgRemoveMyUserSubscription = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.RemoveMyUserSubscriptionRequest;
  readonly responseType: typeof api_v0alpha_org_pb.RemoveMyUserSubscriptionResponse;
};

type OrgUpdateUserSubscription = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateUserSubscriptionRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateUserSubscriptionResponse;
};

type OrgListUserSubscriptions = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.ListUserSubscriptionsRequest;
  readonly responseType: typeof api_v0alpha_org_pb.ListUserSubscriptionsResponse;
};

type OrgListOrgSubscriptions = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.ListOrgSubscriptionsRequest;
  readonly responseType: typeof api_v0alpha_org_pb.ListOrgSubscriptionsResponse;
};

type OrgGetSystemEnvironmentDetails = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.GetSystemEnvironmentDetailsRequest;
  readonly responseType: typeof api_v0alpha_org_pb.GetSystemEnvironmentDetailsResponse;
};

type OrgListAgentStatisticsTemplates = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.ListAgentStatisticsTemplatesRequest;
  readonly responseType: typeof api_v0alpha_org_pb.ListAgentStatisticsTemplatesResponse;
};

type OrgCreateAgentStatisticsTemplate = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.CreateAgentStatisticsTemplateRequest;
  readonly responseType: typeof api_v0alpha_org_pb.CreateAgentStatisticsTemplateResponse;
};

type OrgUpdateAgentStatisticsTemplate = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.UpdateAgentStatisticsTemplateRequest;
  readonly responseType: typeof api_v0alpha_org_pb.UpdateAgentStatisticsTemplateResponse;
};

type OrgDeleteAgentStatisticsTemplate = {
  readonly methodName: string;
  readonly service: typeof Org;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_org_pb.DeleteAgentStatisticsTemplateRequest;
  readonly responseType: typeof api_v0alpha_org_pb.DeleteAgentStatisticsTemplateResponse;
};

export class Org {
  static readonly serviceName: string;
  static readonly RegisterOrganization: OrgRegisterOrganization;
  static readonly ConvertOrgToManual: OrgConvertOrgToManual;
  static readonly UpdateOrganization: OrgUpdateOrganization;
  static readonly ArchiveOrganization: OrgArchiveOrganization;
  static readonly UnArchiveOrganization: OrgUnArchiveOrganization;
  static readonly ListArchivedOrganizations: OrgListArchivedOrganizations;
  static readonly GetOrganizationProfile: OrgGetOrganizationProfile;
  static readonly GetOrganizationProfileById: OrgGetOrganizationProfileById;
  static readonly ListOrganizationDescriptions: OrgListOrganizationDescriptions;
  static readonly ListRegionalOrganizations: OrgListRegionalOrganizations;
  static readonly UpdateP3OwningOrg: OrgUpdateP3OwningOrg;
  static readonly GetP3OwningOrg: OrgGetP3OwningOrg;
  static readonly ListOrganizationUserDescriptions: OrgListOrganizationUserDescriptions;
  static readonly AdminListUserDescriptions: OrgAdminListUserDescriptions;
  static readonly ListUserDescriptions: OrgListUserDescriptions;
  static readonly GetUserDirectory: OrgGetUserDirectory;
  static readonly GetRegions: OrgGetRegions;
  static readonly GetMyUserDetails: OrgGetMyUserDetails;
  static readonly GetUserDetails: OrgGetUserDetails;
  static readonly AdminGetUserDetails: OrgAdminGetUserDetails;
  static readonly GetAgentUsers: OrgGetAgentUsers;
  static readonly GetAgentSettings: OrgGetAgentSettings;
  static readonly GetAgentProfileGroup: OrgGetAgentProfileGroup;
  static readonly UpdateAgentProfileGroup: OrgUpdateAgentProfileGroup;
  static readonly CreateAgentProfileGroup: OrgCreateAgentProfileGroup;
  static readonly ListAgentProfileGroups: OrgListAgentProfileGroups;
  static readonly DeleteAgentProfileGroup: OrgDeleteAgentProfileGroup;
  static readonly AssignAgentProfileGroups: OrgAssignAgentProfileGroups;
  static readonly UpdateUser: OrgUpdateUser;
  static readonly UpdateMyUser: OrgUpdateMyUser;
  static readonly UpdateUserByCallerId: OrgUpdateUserByCallerId;
  static readonly CreateUser: OrgCreateUser;
  static readonly CreateUserByOrgId: OrgCreateUserByOrgId;
  static readonly CreateDelegatedUser: OrgCreateDelegatedUser;
  static readonly UpdateUserPassword: OrgUpdateUserPassword;
  static readonly UpdateUserPasswordByUserId: OrgUpdateUserPasswordByUserId;
  static readonly UpdateUserPasswordByOrgId: OrgUpdateUserPasswordByOrgId;
  static readonly ResetUserRequirePasswordReset: OrgResetUserRequirePasswordReset;
  static readonly GetMyUserPasswordResetLink: OrgGetMyUserPasswordResetLink;
  static readonly GetUserPasswordResetLink: OrgGetUserPasswordResetLink;
  static readonly GetUserPasswordResetLinkByOrgId: OrgGetUserPasswordResetLinkByOrgId;
  static readonly GetUserEmailVerified: OrgGetUserEmailVerified;
  static readonly GetUserEmailVerifiedByOrgId: OrgGetUserEmailVerifiedByOrgId;
  static readonly SendUserVerificationEmailByOrgId: OrgSendUserVerificationEmailByOrgId;
  static readonly SendUserVerificationEmail: OrgSendUserVerificationEmail;
  static readonly ManualUserEmailVerificationByOrgId: OrgManualUserEmailVerificationByOrgId;
  static readonly ManualUserEmailVerification: OrgManualUserEmailVerification;
  static readonly GetTempUserToken: OrgGetTempUserToken;
  static readonly GetTempUserTokenByUserId: OrgGetTempUserTokenByUserId;
  static readonly GetCountriesList: OrgGetCountriesList;
  static readonly GetAdminClientPreferences: OrgGetAdminClientPreferences;
  static readonly UpdateAdminClientPreferences: OrgUpdateAdminClientPreferences;
  static readonly GetPermissions: OrgGetPermissions;
  static readonly RevokeAccountOwnerPermissionFromUser: OrgRevokeAccountOwnerPermissionFromUser;
  static readonly UpdateUserDisabled: OrgUpdateUserDisabled;
  static readonly UpdateUserDisabledByOrgId: OrgUpdateUserDisabledByOrgId;
  static readonly UpdateBulkUsersDisabled: OrgUpdateBulkUsersDisabled;
  static readonly GetOrgBillingSettingsByOrgId: OrgGetOrgBillingSettingsByOrgId;
  static readonly GetOrgBillingSettings: OrgGetOrgBillingSettings;
  static readonly SetOrgBillingSettings: OrgSetOrgBillingSettings;
  static readonly AddOrgBillingOverride: OrgAddOrgBillingOverride;
  static readonly RemoveOrgBillingOverride: OrgRemoveOrgBillingOverride;
  static readonly GetSystemDefaultBillingRates: OrgGetSystemDefaultBillingRates;
  static readonly ListPermissionGroupsByOrgId: OrgListPermissionGroupsByOrgId;
  static readonly ListPermissionGroups: OrgListPermissionGroups;
  static readonly CreatePermissionGroup: OrgCreatePermissionGroup;
  static readonly UpdatePermissionGroup: OrgUpdatePermissionGroup;
  static readonly DeletePermissionGroup: OrgDeletePermissionGroup;
  static readonly AssignUserToAccountOwnerPermissionGroup: OrgAssignUserToAccountOwnerPermissionGroup;
  static readonly AssignUserPermissionGroup: OrgAssignUserPermissionGroup;
  static readonly AssignUsersPermissionGroup: OrgAssignUsersPermissionGroup;
  static readonly UpdateUserNeoPermissionGroups: OrgUpdateUserNeoPermissionGroups;
  static readonly RevokeUserPermissionGroup: OrgRevokeUserPermissionGroup;
  static readonly RevokeUsersPermissionGroup: OrgRevokeUsersPermissionGroup;
  static readonly InitDefaultPermissionGroups: OrgInitDefaultPermissionGroups;
  static readonly AddPermissionToAccountOwnerPermissionGroup: OrgAddPermissionToAccountOwnerPermissionGroup;
  static readonly RevokePermissionToAccountOwnerPermissionGroup: OrgRevokePermissionToAccountOwnerPermissionGroup;
  static readonly AddPermissionToOrgDefaultGroup: OrgAddPermissionToOrgDefaultGroup;
  static readonly RemovePermissionFromOrgDefaultGroup: OrgRemovePermissionFromOrgDefaultGroup;
  static readonly GetOrgDefaultSuperUserGroup: OrgGetOrgDefaultSuperUserGroup;
  static readonly ListP3PermissionGroupsByOrgId: OrgListP3PermissionGroupsByOrgId;
  static readonly ListP3PermissionGroups: OrgListP3PermissionGroups;
  static readonly AddUserRegion: OrgAddUserRegion;
  static readonly RemoveUserRegion: OrgRemoveUserRegion;
  static readonly CreateP3PermissionGroup: OrgCreateP3PermissionGroup;
  static readonly UpdateP3PermissionGroupByOrgId: OrgUpdateP3PermissionGroupByOrgId;
  static readonly UpdateP3PermissionGroup: OrgUpdateP3PermissionGroup;
  static readonly DeleteP3PermissionGroup: OrgDeleteP3PermissionGroup;
  static readonly AssignUsersP3PermissionGroup: OrgAssignUsersP3PermissionGroup;
  static readonly AddLoginToUser: OrgAddLoginToUser;
  static readonly RevokeUsersP3PermissionGroup: OrgRevokeUsersP3PermissionGroup;
  static readonly GetContactPreferences: OrgGetContactPreferences;
  static readonly UpdateContactPreferences: OrgUpdateContactPreferences;
  static readonly GetCompliancePreferences: OrgGetCompliancePreferences;
  static readonly UpdateCompliancePreferences: OrgUpdateCompliancePreferences;
  static readonly GetAgentPreferences: OrgGetAgentPreferences;
  static readonly UpdateAgentPreferences: OrgUpdateAgentPreferences;
  static readonly GetOrganizationPreferences: OrgGetOrganizationPreferences;
  static readonly UpdateOrganizationPreferences: OrgUpdateOrganizationPreferences;
  static readonly GetSchedulePreferences: OrgGetSchedulePreferences;
  static readonly UpdateSchedulePreferences: OrgUpdateSchedulePreferences;
  static readonly GetBusinessPreferences: OrgGetBusinessPreferences;
  static readonly UpdateBusinessPreferences: OrgUpdateBusinessPreferences;
  static readonly GetEndOfDayPreferences: OrgGetEndOfDayPreferences;
  static readonly UpdateEndOfDayPreferences: OrgUpdateEndOfDayPreferences;
  static readonly GetReportFilterPreferences: OrgGetReportFilterPreferences;
  static readonly UpdateReportFilterPreferences: OrgUpdateReportFilterPreferences;
  static readonly GetPhonePreferences: OrgGetPhonePreferences;
  static readonly UpdatePhonePreferences: OrgUpdatePhonePreferences;
  static readonly GetDashboardGeneralPreferences: OrgGetDashboardGeneralPreferences;
  static readonly UpdateDashboardGeneralPreferences: OrgUpdateDashboardGeneralPreferences;
  static readonly GetWebhookPreferences: OrgGetWebhookPreferences;
  static readonly UpdateWebhookPreferences: OrgUpdateWebhookPreferences;
  static readonly GetBroadcastPreferences: OrgGetBroadcastPreferences;
  static readonly UpdateBroadcastPreferences: OrgUpdateBroadcastPreferences;
  static readonly GetAuthenticationPreferences: OrgGetAuthenticationPreferences;
  static readonly UpdateAuthenticationPreferences: OrgUpdateAuthenticationPreferences;
  static readonly GetRecordingPreferences: OrgGetRecordingPreferences;
  static readonly UpdateRecordingPreferences: OrgUpdateRecordingPreferences;
  static readonly GetDashboardQueuePreferences: OrgGetDashboardQueuePreferences;
  static readonly UpdateDashboardQueuePreferences: OrgUpdateDashboardQueuePreferences;
  static readonly GetAgentQuickViewPreferences: OrgGetAgentQuickViewPreferences;
  static readonly GetVoiceAnalyticsPreferences: OrgGetVoiceAnalyticsPreferences;
  static readonly UpdateVoiceAnalyticsPreferences: OrgUpdateVoiceAnalyticsPreferences;
  static readonly UpdateVoiceAnalyticsPreferencesEnabled: OrgUpdateVoiceAnalyticsPreferencesEnabled;
  static readonly GetScorecardsPreferences: OrgGetScorecardsPreferences;
  static readonly UpdateScorecardsPreferences: OrgUpdateScorecardsPreferences;
  static readonly GetEmailSmsPreferences: OrgGetEmailSmsPreferences;
  static readonly UpdateEmailSmsPreferences: OrgUpdateEmailSmsPreferences;
  static readonly EditAgentQuickViewPreferences: OrgEditAgentQuickViewPreferences;
  static readonly EditBackofficeThemePreference: OrgEditBackofficeThemePreference;
  static readonly GetBackofficeThemePreference: OrgGetBackofficeThemePreference;
  static readonly AcceptLinkbackRecordingTerms: OrgAcceptLinkbackRecordingTerms;
  static readonly LinkbackUpdateBroadcastTemplates: OrgLinkbackUpdateBroadcastTemplates;
  static readonly RecordEmailUnsubscribeAcknowledgement: OrgRecordEmailUnsubscribeAcknowledgement;
  static readonly ClearEmailUnsubscribeAcknowledgement: OrgClearEmailUnsubscribeAcknowledgement;
  static readonly CreateWebLinkTemplate: OrgCreateWebLinkTemplate;
  static readonly ListWebLinkTemplates: OrgListWebLinkTemplates;
  static readonly GetWebLinkTemplate: OrgGetWebLinkTemplate;
  static readonly UpdateWebLinkTemplate: OrgUpdateWebLinkTemplate;
  static readonly DeleteWebLinkTemplate: OrgDeleteWebLinkTemplate;
  static readonly CreateAgentTriggerTemplate: OrgCreateAgentTriggerTemplate;
  static readonly ListAgentTriggerTemplates: OrgListAgentTriggerTemplates;
  static readonly GetAgentTriggerTemplate: OrgGetAgentTriggerTemplate;
  static readonly UpdateAgentTriggerTemplate: OrgUpdateAgentTriggerTemplate;
  static readonly DeleteAgentTriggerTemplate: OrgDeleteAgentTriggerTemplate;
  static readonly CreateClientInfoDisplayTemplate: OrgCreateClientInfoDisplayTemplate;
  static readonly ListClientInfoDisplayTemplates: OrgListClientInfoDisplayTemplates;
  static readonly UpdateClientInfoDisplayTemplate: OrgUpdateClientInfoDisplayTemplate;
  static readonly DeleteClientInfoDisplayTemplate: OrgDeleteClientInfoDisplayTemplate;
  static readonly GetClientInfoDisplayTemplate: OrgGetClientInfoDisplayTemplate;
  static readonly ListAgentPauseCodes: OrgListAgentPauseCodes;
  static readonly CreateAgentPauseCode: OrgCreateAgentPauseCode;
  static readonly UpdateAgentPauseCode: OrgUpdateAgentPauseCode;
  static readonly DeleteAgentPauseCode: OrgDeleteAgentPauseCode;
  static readonly ListCustomReportFilters: OrgListCustomReportFilters;
  static readonly CreateCustomReportFilter: OrgCreateCustomReportFilter;
  static readonly UpdateCustomReportFilter: OrgUpdateCustomReportFilter;
  static readonly DeleteCustomReportFilter: OrgDeleteCustomReportFilter;
  static readonly ListAgentResponseGroups: OrgListAgentResponseGroups;
  static readonly ListLastTemplateElements: OrgListLastTemplateElements;
  static readonly ListQueueConfigs: OrgListQueueConfigs;
  static readonly DeleteQueueConfig: OrgDeleteQueueConfig;
  static readonly GetQueueConfig: OrgGetQueueConfig;
  static readonly CreateQueueConfig: OrgCreateQueueConfig;
  static readonly UpdateQueueConfig: OrgUpdateQueueConfig;
  static readonly CopyQueueConfig: OrgCopyQueueConfig;
  static readonly GetAllQueueConfigSounds: OrgGetAllQueueConfigSounds;
  static readonly GetQueueConfigSound: OrgGetQueueConfigSound;
  static readonly SetQueueConfigSound: OrgSetQueueConfigSound;
  static readonly SetAllQueueConfigSoundsFromSource: OrgSetAllQueueConfigSoundsFromSource;
  static readonly GetUserBlocked: OrgGetUserBlocked;
  static readonly UnblockUser: OrgUnblockUser;
  static readonly ListP3UnMigratedUsers: OrgListP3UnMigratedUsers;
  static readonly MigrateP3User: OrgMigrateP3User;
  static readonly UpdateP3UserName: OrgUpdateP3UserName;
  static readonly ListOwnedUsers: OrgListOwnedUsers;
  static readonly ListOwnedOrgsByOrgId: OrgListOwnedOrgsByOrgId;
  static readonly ListOwnedOrgs: OrgListOwnedOrgs;
  static readonly RemoveLoginStrikes: OrgRemoveLoginStrikes;
  static readonly RemoveUserLoginStrikes: OrgRemoveUserLoginStrikes;
  static readonly ListLoginHistory: OrgListLoginHistory;
  static readonly UpdateP3UserSids: OrgUpdateP3UserSids;
  static readonly CreateAuthConnection: OrgCreateAuthConnection;
  static readonly GetAuthConnectionSettings: OrgGetAuthConnectionSettings;
  static readonly UpdateAuthConnectionSettings: OrgUpdateAuthConnectionSettings;
  static readonly DeleteAuthConnection: OrgDeleteAuthConnection;
  static readonly GetUserSubscription: OrgGetUserSubscription;
  static readonly AddUserSubscription: OrgAddUserSubscription;
  static readonly RemoveUserSubscription: OrgRemoveUserSubscription;
  static readonly RemoveMyUserSubscription: OrgRemoveMyUserSubscription;
  static readonly UpdateUserSubscription: OrgUpdateUserSubscription;
  static readonly ListUserSubscriptions: OrgListUserSubscriptions;
  static readonly ListOrgSubscriptions: OrgListOrgSubscriptions;
  static readonly GetSystemEnvironmentDetails: OrgGetSystemEnvironmentDetails;
  static readonly ListAgentStatisticsTemplates: OrgListAgentStatisticsTemplates;
  static readonly CreateAgentStatisticsTemplate: OrgCreateAgentStatisticsTemplate;
  static readonly UpdateAgentStatisticsTemplate: OrgUpdateAgentStatisticsTemplate;
  static readonly DeleteAgentStatisticsTemplate: OrgDeleteAgentStatisticsTemplate;
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
  registerOrganization(
    requestMessage: api_v0alpha_org_pb.RegisterOrganizationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.RegisterOrganizationResponse|null) => void
  ): UnaryResponse;
  registerOrganization(
    requestMessage: api_v0alpha_org_pb.RegisterOrganizationRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.RegisterOrganizationResponse|null) => void
  ): UnaryResponse;
  convertOrgToManual(
    requestMessage: api_v0alpha_org_pb.ConvertOrgToManualRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ConvertOrgToManualResponse|null) => void
  ): UnaryResponse;
  convertOrgToManual(
    requestMessage: api_v0alpha_org_pb.ConvertOrgToManualRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ConvertOrgToManualResponse|null) => void
  ): UnaryResponse;
  updateOrganization(
    requestMessage: api_v0alpha_org_pb.UpdateOrganizationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateOrganizationResponse|null) => void
  ): UnaryResponse;
  updateOrganization(
    requestMessage: api_v0alpha_org_pb.UpdateOrganizationRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateOrganizationResponse|null) => void
  ): UnaryResponse;
  archiveOrganization(
    requestMessage: api_v0alpha_org_pb.ArchiveOrganizationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ArchiveOrganizationResponse|null) => void
  ): UnaryResponse;
  archiveOrganization(
    requestMessage: api_v0alpha_org_pb.ArchiveOrganizationRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ArchiveOrganizationResponse|null) => void
  ): UnaryResponse;
  unArchiveOrganization(
    requestMessage: api_v0alpha_org_pb.UnArchiveOrganizationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UnArchiveOrganizationResponse|null) => void
  ): UnaryResponse;
  unArchiveOrganization(
    requestMessage: api_v0alpha_org_pb.UnArchiveOrganizationRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UnArchiveOrganizationResponse|null) => void
  ): UnaryResponse;
  listArchivedOrganizations(
    requestMessage: api_v0alpha_org_pb.ListArchivedOrganizationsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListArchivedOrganizationsResponse|null) => void
  ): UnaryResponse;
  listArchivedOrganizations(
    requestMessage: api_v0alpha_org_pb.ListArchivedOrganizationsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListArchivedOrganizationsResponse|null) => void
  ): UnaryResponse;
  getOrganizationProfile(
    requestMessage: api_v0alpha_org_pb.GetOrganizationProfileRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetOrganizationProfileResponse|null) => void
  ): UnaryResponse;
  getOrganizationProfile(
    requestMessage: api_v0alpha_org_pb.GetOrganizationProfileRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetOrganizationProfileResponse|null) => void
  ): UnaryResponse;
  getOrganizationProfileById(
    requestMessage: api_v0alpha_org_pb.GetOrganizationProfileByIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetOrganizationProfileResponse|null) => void
  ): UnaryResponse;
  getOrganizationProfileById(
    requestMessage: api_v0alpha_org_pb.GetOrganizationProfileByIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetOrganizationProfileResponse|null) => void
  ): UnaryResponse;
  listOrganizationDescriptions(
    requestMessage: api_v0alpha_org_pb.ListOrganizationDescriptionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListOrganizationDescriptionsResponse|null) => void
  ): UnaryResponse;
  listOrganizationDescriptions(
    requestMessage: api_v0alpha_org_pb.ListOrganizationDescriptionsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListOrganizationDescriptionsResponse|null) => void
  ): UnaryResponse;
  listRegionalOrganizations(
    requestMessage: api_v0alpha_org_pb.ListRegionalOrganizationsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListRegionalOrganizationsResponse|null) => void
  ): UnaryResponse;
  listRegionalOrganizations(
    requestMessage: api_v0alpha_org_pb.ListRegionalOrganizationsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListRegionalOrganizationsResponse|null) => void
  ): UnaryResponse;
  updateP3OwningOrg(
    requestMessage: api_v0alpha_org_pb.UpdateP3OwningOrgRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateP3OwningOrgResponse|null) => void
  ): UnaryResponse;
  updateP3OwningOrg(
    requestMessage: api_v0alpha_org_pb.UpdateP3OwningOrgRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateP3OwningOrgResponse|null) => void
  ): UnaryResponse;
  getP3OwningOrg(
    requestMessage: api_v0alpha_org_pb.GetP3OwningOrgRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetP3OwningOrgResponse|null) => void
  ): UnaryResponse;
  getP3OwningOrg(
    requestMessage: api_v0alpha_org_pb.GetP3OwningOrgRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetP3OwningOrgResponse|null) => void
  ): UnaryResponse;
  listOrganizationUserDescriptions(
    requestMessage: api_v0alpha_org_pb.ListOrganizationUserDescriptionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListOrganizationUserDescriptionsResponse|null) => void
  ): UnaryResponse;
  listOrganizationUserDescriptions(
    requestMessage: api_v0alpha_org_pb.ListOrganizationUserDescriptionsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListOrganizationUserDescriptionsResponse|null) => void
  ): UnaryResponse;
  adminListUserDescriptions(requestMessage: api_v0alpha_org_pb.AdminListUserDescriptionsRequest, metadata?: grpc.Metadata): ResponseStream<api_v0alpha_org_pb.AdminListUserDescriptionsResponse>;
  listUserDescriptions(requestMessage: api_v0alpha_org_pb.ListUserDescriptionsRequest, metadata?: grpc.Metadata): ResponseStream<api_v0alpha_org_pb.ListUserDescriptionsResponse>;
  getUserDirectory(
    requestMessage: api_v0alpha_org_pb.GetUserDirectoryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetUserDirectoryResponse|null) => void
  ): UnaryResponse;
  getUserDirectory(
    requestMessage: api_v0alpha_org_pb.GetUserDirectoryRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetUserDirectoryResponse|null) => void
  ): UnaryResponse;
  getRegions(
    requestMessage: api_v0alpha_org_pb.GetRegionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetRegionsResponse|null) => void
  ): UnaryResponse;
  getRegions(
    requestMessage: api_v0alpha_org_pb.GetRegionsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetRegionsResponse|null) => void
  ): UnaryResponse;
  getMyUserDetails(
    requestMessage: api_v0alpha_org_pb.GetMyUserDetailsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UserDetails|null) => void
  ): UnaryResponse;
  getMyUserDetails(
    requestMessage: api_v0alpha_org_pb.GetMyUserDetailsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UserDetails|null) => void
  ): UnaryResponse;
  getUserDetails(
    requestMessage: api_v0alpha_org_pb.GetUserDetailsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UserDetails|null) => void
  ): UnaryResponse;
  getUserDetails(
    requestMessage: api_v0alpha_org_pb.GetUserDetailsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UserDetails|null) => void
  ): UnaryResponse;
  adminGetUserDetails(
    requestMessage: api_v0alpha_org_pb.AdminGetUserDetailsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UserDetails|null) => void
  ): UnaryResponse;
  adminGetUserDetails(
    requestMessage: api_v0alpha_org_pb.AdminGetUserDetailsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UserDetails|null) => void
  ): UnaryResponse;
  getAgentUsers(
    requestMessage: api_v0alpha_org_pb.GetAgentUsersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetAgentUsersResponse|null) => void
  ): UnaryResponse;
  getAgentUsers(
    requestMessage: api_v0alpha_org_pb.GetAgentUsersRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetAgentUsersResponse|null) => void
  ): UnaryResponse;
  getAgentSettings(
    requestMessage: api_v0alpha_org_pb.GetAgentSettingsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetAgentSettingsResponse|null) => void
  ): UnaryResponse;
  getAgentSettings(
    requestMessage: api_v0alpha_org_pb.GetAgentSettingsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetAgentSettingsResponse|null) => void
  ): UnaryResponse;
  getAgentProfileGroup(
    requestMessage: api_v0alpha_org_pb.GetAgentProfileGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetAgentProfileGroupResponse|null) => void
  ): UnaryResponse;
  getAgentProfileGroup(
    requestMessage: api_v0alpha_org_pb.GetAgentProfileGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetAgentProfileGroupResponse|null) => void
  ): UnaryResponse;
  updateAgentProfileGroup(
    requestMessage: api_v0alpha_org_pb.UpdateAgentProfileGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateAgentProfileGroupResponse|null) => void
  ): UnaryResponse;
  updateAgentProfileGroup(
    requestMessage: api_v0alpha_org_pb.UpdateAgentProfileGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateAgentProfileGroupResponse|null) => void
  ): UnaryResponse;
  createAgentProfileGroup(
    requestMessage: api_v0alpha_org_pb.CreateAgentProfileGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.CreateAgentProfileGroupResponse|null) => void
  ): UnaryResponse;
  createAgentProfileGroup(
    requestMessage: api_v0alpha_org_pb.CreateAgentProfileGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.CreateAgentProfileGroupResponse|null) => void
  ): UnaryResponse;
  listAgentProfileGroups(
    requestMessage: api_v0alpha_org_pb.ListAgentProfileGroupsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListAgentProfileGroupsResponse|null) => void
  ): UnaryResponse;
  listAgentProfileGroups(
    requestMessage: api_v0alpha_org_pb.ListAgentProfileGroupsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListAgentProfileGroupsResponse|null) => void
  ): UnaryResponse;
  deleteAgentProfileGroup(
    requestMessage: api_v0alpha_org_pb.DeleteAgentProfileGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.DeleteAgentProfileGroupResponse|null) => void
  ): UnaryResponse;
  deleteAgentProfileGroup(
    requestMessage: api_v0alpha_org_pb.DeleteAgentProfileGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.DeleteAgentProfileGroupResponse|null) => void
  ): UnaryResponse;
  assignAgentProfileGroups(
    requestMessage: api_v0alpha_org_pb.AssignAgentProfileGroupsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.AssignAgentProfileGroupsResponse|null) => void
  ): UnaryResponse;
  assignAgentProfileGroups(
    requestMessage: api_v0alpha_org_pb.AssignAgentProfileGroupsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.AssignAgentProfileGroupsResponse|null) => void
  ): UnaryResponse;
  updateUser(
    requestMessage: api_v0alpha_org_pb.UpdateUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateUserResponse|null) => void
  ): UnaryResponse;
  updateUser(
    requestMessage: api_v0alpha_org_pb.UpdateUserRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateUserResponse|null) => void
  ): UnaryResponse;
  updateMyUser(
    requestMessage: api_v0alpha_org_pb.UpdateMyUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateMyUserResponse|null) => void
  ): UnaryResponse;
  updateMyUser(
    requestMessage: api_v0alpha_org_pb.UpdateMyUserRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateMyUserResponse|null) => void
  ): UnaryResponse;
  updateUserByCallerId(
    requestMessage: api_v0alpha_org_pb.UpdateUserByCallerIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateUserByCallerIdResponse|null) => void
  ): UnaryResponse;
  updateUserByCallerId(
    requestMessage: api_v0alpha_org_pb.UpdateUserByCallerIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateUserByCallerIdResponse|null) => void
  ): UnaryResponse;
  createUser(
    requestMessage: api_v0alpha_org_pb.CreateUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.CreateUserResponse|null) => void
  ): UnaryResponse;
  createUser(
    requestMessage: api_v0alpha_org_pb.CreateUserRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.CreateUserResponse|null) => void
  ): UnaryResponse;
  createUserByOrgId(
    requestMessage: api_v0alpha_org_pb.CreateUserByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.CreateUserByOrgIdResponse|null) => void
  ): UnaryResponse;
  createUserByOrgId(
    requestMessage: api_v0alpha_org_pb.CreateUserByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.CreateUserByOrgIdResponse|null) => void
  ): UnaryResponse;
  createDelegatedUser(
    requestMessage: api_v0alpha_org_pb.CreateDelegatedUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.CreateDelegatedUserResponse|null) => void
  ): UnaryResponse;
  createDelegatedUser(
    requestMessage: api_v0alpha_org_pb.CreateDelegatedUserRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.CreateDelegatedUserResponse|null) => void
  ): UnaryResponse;
  updateUserPassword(
    requestMessage: api_v0alpha_org_pb.UpdateUserPasswordRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateUserPasswordResponse|null) => void
  ): UnaryResponse;
  updateUserPassword(
    requestMessage: api_v0alpha_org_pb.UpdateUserPasswordRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateUserPasswordResponse|null) => void
  ): UnaryResponse;
  updateUserPasswordByUserId(
    requestMessage: api_v0alpha_org_pb.UpdateUserPasswordByUserIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateUserPasswordByUserIdResponse|null) => void
  ): UnaryResponse;
  updateUserPasswordByUserId(
    requestMessage: api_v0alpha_org_pb.UpdateUserPasswordByUserIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateUserPasswordByUserIdResponse|null) => void
  ): UnaryResponse;
  updateUserPasswordByOrgId(
    requestMessage: api_v0alpha_org_pb.UpdateUserPasswordByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateUserPasswordByOrgIdResponse|null) => void
  ): UnaryResponse;
  updateUserPasswordByOrgId(
    requestMessage: api_v0alpha_org_pb.UpdateUserPasswordByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateUserPasswordByOrgIdResponse|null) => void
  ): UnaryResponse;
  resetUserRequirePasswordReset(
    requestMessage: api_v0alpha_org_pb.ResetUserRequirePasswordResetRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ResetUserRequirePasswordResetResponse|null) => void
  ): UnaryResponse;
  resetUserRequirePasswordReset(
    requestMessage: api_v0alpha_org_pb.ResetUserRequirePasswordResetRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ResetUserRequirePasswordResetResponse|null) => void
  ): UnaryResponse;
  getMyUserPasswordResetLink(
    requestMessage: api_v0alpha_org_pb.GetMyUserPasswordResetLinkRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetMyUserPasswordResetLinkResponse|null) => void
  ): UnaryResponse;
  getMyUserPasswordResetLink(
    requestMessage: api_v0alpha_org_pb.GetMyUserPasswordResetLinkRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetMyUserPasswordResetLinkResponse|null) => void
  ): UnaryResponse;
  getUserPasswordResetLink(
    requestMessage: api_v0alpha_org_pb.GetUserPasswordResetLinkRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetUserPasswordResetLinkResponse|null) => void
  ): UnaryResponse;
  getUserPasswordResetLink(
    requestMessage: api_v0alpha_org_pb.GetUserPasswordResetLinkRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetUserPasswordResetLinkResponse|null) => void
  ): UnaryResponse;
  getUserPasswordResetLinkByOrgId(
    requestMessage: api_v0alpha_org_pb.GetUserPasswordResetLinkByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetUserPasswordResetLinkByOrgIdResponse|null) => void
  ): UnaryResponse;
  getUserPasswordResetLinkByOrgId(
    requestMessage: api_v0alpha_org_pb.GetUserPasswordResetLinkByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetUserPasswordResetLinkByOrgIdResponse|null) => void
  ): UnaryResponse;
  getUserEmailVerified(
    requestMessage: api_v0alpha_org_pb.GetUserEmailVerifiedRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetUserEmailVerifiedResponse|null) => void
  ): UnaryResponse;
  getUserEmailVerified(
    requestMessage: api_v0alpha_org_pb.GetUserEmailVerifiedRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetUserEmailVerifiedResponse|null) => void
  ): UnaryResponse;
  getUserEmailVerifiedByOrgId(
    requestMessage: api_v0alpha_org_pb.GetUserEmailVerifiedByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetUserEmailVerifiedByOrgIdResponse|null) => void
  ): UnaryResponse;
  getUserEmailVerifiedByOrgId(
    requestMessage: api_v0alpha_org_pb.GetUserEmailVerifiedByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetUserEmailVerifiedByOrgIdResponse|null) => void
  ): UnaryResponse;
  sendUserVerificationEmailByOrgId(
    requestMessage: api_v0alpha_org_pb.SendUserVerificationEmailByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.SendUserVerificationEmailByOrgIdResponse|null) => void
  ): UnaryResponse;
  sendUserVerificationEmailByOrgId(
    requestMessage: api_v0alpha_org_pb.SendUserVerificationEmailByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.SendUserVerificationEmailByOrgIdResponse|null) => void
  ): UnaryResponse;
  sendUserVerificationEmail(
    requestMessage: api_v0alpha_org_pb.SendUserVerificationEmailRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.SendUserVerificationEmailResponse|null) => void
  ): UnaryResponse;
  sendUserVerificationEmail(
    requestMessage: api_v0alpha_org_pb.SendUserVerificationEmailRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.SendUserVerificationEmailResponse|null) => void
  ): UnaryResponse;
  manualUserEmailVerificationByOrgId(
    requestMessage: api_v0alpha_org_pb.ManualUserEmailVerificationByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ManualUserEmailVerificationByOrgIdResponse|null) => void
  ): UnaryResponse;
  manualUserEmailVerificationByOrgId(
    requestMessage: api_v0alpha_org_pb.ManualUserEmailVerificationByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ManualUserEmailVerificationByOrgIdResponse|null) => void
  ): UnaryResponse;
  manualUserEmailVerification(
    requestMessage: api_v0alpha_org_pb.ManualUserEmailVerificationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ManualUserEmailVerificationResponse|null) => void
  ): UnaryResponse;
  manualUserEmailVerification(
    requestMessage: api_v0alpha_org_pb.ManualUserEmailVerificationRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ManualUserEmailVerificationResponse|null) => void
  ): UnaryResponse;
  getTempUserToken(
    requestMessage: api_v0alpha_org_pb.GetTempUserTokenReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetTempUserTokenRes|null) => void
  ): UnaryResponse;
  getTempUserToken(
    requestMessage: api_v0alpha_org_pb.GetTempUserTokenReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetTempUserTokenRes|null) => void
  ): UnaryResponse;
  getTempUserTokenByUserId(
    requestMessage: api_v0alpha_org_pb.GetTempUserTokenByUserIdReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetTempUserTokenByUserIdRes|null) => void
  ): UnaryResponse;
  getTempUserTokenByUserId(
    requestMessage: api_v0alpha_org_pb.GetTempUserTokenByUserIdReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetTempUserTokenByUserIdRes|null) => void
  ): UnaryResponse;
  getCountriesList(
    requestMessage: api_v0alpha_org_pb.GetCountriesListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetCountriesListResponse|null) => void
  ): UnaryResponse;
  getCountriesList(
    requestMessage: api_v0alpha_org_pb.GetCountriesListRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetCountriesListResponse|null) => void
  ): UnaryResponse;
  getAdminClientPreferences(
    requestMessage: api_v0alpha_org_pb.GetAdminClientPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetAdminClientPreferencesResponse|null) => void
  ): UnaryResponse;
  getAdminClientPreferences(
    requestMessage: api_v0alpha_org_pb.GetAdminClientPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetAdminClientPreferencesResponse|null) => void
  ): UnaryResponse;
  updateAdminClientPreferences(
    requestMessage: api_v0alpha_org_pb.UpdateAdminClientPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateAdminClientPreferencesResponse|null) => void
  ): UnaryResponse;
  updateAdminClientPreferences(
    requestMessage: api_v0alpha_org_pb.UpdateAdminClientPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateAdminClientPreferencesResponse|null) => void
  ): UnaryResponse;
  getPermissions(
    requestMessage: api_v0alpha_org_pb.GetPermissionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetPermissionsResponse|null) => void
  ): UnaryResponse;
  getPermissions(
    requestMessage: api_v0alpha_org_pb.GetPermissionsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetPermissionsResponse|null) => void
  ): UnaryResponse;
  revokeAccountOwnerPermissionFromUser(
    requestMessage: api_v0alpha_org_pb.RevokeAccountOwnerPermissionFromUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.RevokeAccountOwnerPermissionFromUserResponse|null) => void
  ): UnaryResponse;
  revokeAccountOwnerPermissionFromUser(
    requestMessage: api_v0alpha_org_pb.RevokeAccountOwnerPermissionFromUserRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.RevokeAccountOwnerPermissionFromUserResponse|null) => void
  ): UnaryResponse;
  updateUserDisabled(
    requestMessage: api_v0alpha_org_pb.UpdateUserDisabledRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateUserDisabledResponse|null) => void
  ): UnaryResponse;
  updateUserDisabled(
    requestMessage: api_v0alpha_org_pb.UpdateUserDisabledRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateUserDisabledResponse|null) => void
  ): UnaryResponse;
  updateUserDisabledByOrgId(
    requestMessage: api_v0alpha_org_pb.UpdateUserDisabledByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateUserDisabledByOrgIdResponse|null) => void
  ): UnaryResponse;
  updateUserDisabledByOrgId(
    requestMessage: api_v0alpha_org_pb.UpdateUserDisabledByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateUserDisabledByOrgIdResponse|null) => void
  ): UnaryResponse;
  updateBulkUsersDisabled(
    requestMessage: api_v0alpha_org_pb.UpdateBulkUsersDisabledRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateBulkUsersDisabledResponse|null) => void
  ): UnaryResponse;
  updateBulkUsersDisabled(
    requestMessage: api_v0alpha_org_pb.UpdateBulkUsersDisabledRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateBulkUsersDisabledResponse|null) => void
  ): UnaryResponse;
  getOrgBillingSettingsByOrgId(
    requestMessage: api_v0alpha_org_pb.GetOrgBillingSettingsByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetOrgBillingSettingsByOrgIdResponse|null) => void
  ): UnaryResponse;
  getOrgBillingSettingsByOrgId(
    requestMessage: api_v0alpha_org_pb.GetOrgBillingSettingsByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetOrgBillingSettingsByOrgIdResponse|null) => void
  ): UnaryResponse;
  getOrgBillingSettings(
    requestMessage: api_v0alpha_org_pb.GetOrgBillingSettingsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetOrgBillingSettingsResponse|null) => void
  ): UnaryResponse;
  getOrgBillingSettings(
    requestMessage: api_v0alpha_org_pb.GetOrgBillingSettingsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetOrgBillingSettingsResponse|null) => void
  ): UnaryResponse;
  setOrgBillingSettings(
    requestMessage: api_v0alpha_org_pb.SetOrgBillingSettingsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.SetOrgBillingSettingsResponse|null) => void
  ): UnaryResponse;
  setOrgBillingSettings(
    requestMessage: api_v0alpha_org_pb.SetOrgBillingSettingsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.SetOrgBillingSettingsResponse|null) => void
  ): UnaryResponse;
  addOrgBillingOverride(
    requestMessage: api_v0alpha_org_pb.AddOrgBillingOverrideRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.AddOrgBillingOverrideResponse|null) => void
  ): UnaryResponse;
  addOrgBillingOverride(
    requestMessage: api_v0alpha_org_pb.AddOrgBillingOverrideRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.AddOrgBillingOverrideResponse|null) => void
  ): UnaryResponse;
  removeOrgBillingOverride(
    requestMessage: api_v0alpha_org_pb.RemoveOrgBillingOverrideRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.RemoveOrgBillingOverrideResponse|null) => void
  ): UnaryResponse;
  removeOrgBillingOverride(
    requestMessage: api_v0alpha_org_pb.RemoveOrgBillingOverrideRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.RemoveOrgBillingOverrideResponse|null) => void
  ): UnaryResponse;
  getSystemDefaultBillingRates(
    requestMessage: api_v0alpha_org_pb.GetSystemDefaultBillingRatesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetSystemDefaultBillingRatesResponse|null) => void
  ): UnaryResponse;
  getSystemDefaultBillingRates(
    requestMessage: api_v0alpha_org_pb.GetSystemDefaultBillingRatesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetSystemDefaultBillingRatesResponse|null) => void
  ): UnaryResponse;
  listPermissionGroupsByOrgId(
    requestMessage: api_v0alpha_org_pb.ListPermissionGroupsByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListPermissionGroupsByOrgIdResponse|null) => void
  ): UnaryResponse;
  listPermissionGroupsByOrgId(
    requestMessage: api_v0alpha_org_pb.ListPermissionGroupsByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListPermissionGroupsByOrgIdResponse|null) => void
  ): UnaryResponse;
  listPermissionGroups(
    requestMessage: api_v0alpha_org_pb.ListPermissionGroupsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListPermissionGroupsResponse|null) => void
  ): UnaryResponse;
  listPermissionGroups(
    requestMessage: api_v0alpha_org_pb.ListPermissionGroupsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListPermissionGroupsResponse|null) => void
  ): UnaryResponse;
  createPermissionGroup(
    requestMessage: api_v0alpha_org_pb.CreatePermissionGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.CreatePermissionGroupResponse|null) => void
  ): UnaryResponse;
  createPermissionGroup(
    requestMessage: api_v0alpha_org_pb.CreatePermissionGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.CreatePermissionGroupResponse|null) => void
  ): UnaryResponse;
  updatePermissionGroup(
    requestMessage: api_v0alpha_org_pb.UpdatePermissionGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdatePermissionGroupResponse|null) => void
  ): UnaryResponse;
  updatePermissionGroup(
    requestMessage: api_v0alpha_org_pb.UpdatePermissionGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdatePermissionGroupResponse|null) => void
  ): UnaryResponse;
  deletePermissionGroup(
    requestMessage: api_v0alpha_org_pb.DeletePermissionGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.DeletePermissionGroupResponse|null) => void
  ): UnaryResponse;
  deletePermissionGroup(
    requestMessage: api_v0alpha_org_pb.DeletePermissionGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.DeletePermissionGroupResponse|null) => void
  ): UnaryResponse;
  assignUserToAccountOwnerPermissionGroup(
    requestMessage: api_v0alpha_org_pb.AssignUserToAccountOwnerPermissionGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.AssignUserToAccountOwnerPermissionGroupResponse|null) => void
  ): UnaryResponse;
  assignUserToAccountOwnerPermissionGroup(
    requestMessage: api_v0alpha_org_pb.AssignUserToAccountOwnerPermissionGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.AssignUserToAccountOwnerPermissionGroupResponse|null) => void
  ): UnaryResponse;
  assignUserPermissionGroup(
    requestMessage: api_v0alpha_org_pb.AssignUserPermissionGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.AssignUserPermissionGroupResponse|null) => void
  ): UnaryResponse;
  assignUserPermissionGroup(
    requestMessage: api_v0alpha_org_pb.AssignUserPermissionGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.AssignUserPermissionGroupResponse|null) => void
  ): UnaryResponse;
  assignUsersPermissionGroup(
    requestMessage: api_v0alpha_org_pb.AssignUsersPermissionGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.AssignUsersPermissionGroupResponse|null) => void
  ): UnaryResponse;
  assignUsersPermissionGroup(
    requestMessage: api_v0alpha_org_pb.AssignUsersPermissionGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.AssignUsersPermissionGroupResponse|null) => void
  ): UnaryResponse;
  updateUserNeoPermissionGroups(
    requestMessage: api_v0alpha_org_pb.UpdateUserNeoPermissionGroupsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateUserNeoPermissionGroupsResponse|null) => void
  ): UnaryResponse;
  updateUserNeoPermissionGroups(
    requestMessage: api_v0alpha_org_pb.UpdateUserNeoPermissionGroupsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateUserNeoPermissionGroupsResponse|null) => void
  ): UnaryResponse;
  revokeUserPermissionGroup(
    requestMessage: api_v0alpha_org_pb.RevokeUserPermissionGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.RevokeUserPermissionGroupResponse|null) => void
  ): UnaryResponse;
  revokeUserPermissionGroup(
    requestMessage: api_v0alpha_org_pb.RevokeUserPermissionGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.RevokeUserPermissionGroupResponse|null) => void
  ): UnaryResponse;
  revokeUsersPermissionGroup(
    requestMessage: api_v0alpha_org_pb.RevokeUsersPermissionGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.RevokeUsersPermissionGroupResponse|null) => void
  ): UnaryResponse;
  revokeUsersPermissionGroup(
    requestMessage: api_v0alpha_org_pb.RevokeUsersPermissionGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.RevokeUsersPermissionGroupResponse|null) => void
  ): UnaryResponse;
  initDefaultPermissionGroups(
    requestMessage: api_v0alpha_org_pb.InitDefaultPermissionGroupsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.InitDefaultPermissionGroupsResponse|null) => void
  ): UnaryResponse;
  initDefaultPermissionGroups(
    requestMessage: api_v0alpha_org_pb.InitDefaultPermissionGroupsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.InitDefaultPermissionGroupsResponse|null) => void
  ): UnaryResponse;
  addPermissionToAccountOwnerPermissionGroup(
    requestMessage: api_v0alpha_org_pb.AddPermissionToAccountOwnerPermissionGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.AddPermissionToAccountOwnerPermissionGroupResponse|null) => void
  ): UnaryResponse;
  addPermissionToAccountOwnerPermissionGroup(
    requestMessage: api_v0alpha_org_pb.AddPermissionToAccountOwnerPermissionGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.AddPermissionToAccountOwnerPermissionGroupResponse|null) => void
  ): UnaryResponse;
  revokePermissionToAccountOwnerPermissionGroup(
    requestMessage: api_v0alpha_org_pb.RevokePermissionToAccountOwnerPermissionGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.RevokePermissionToAccountOwnerPermissionGroupResponse|null) => void
  ): UnaryResponse;
  revokePermissionToAccountOwnerPermissionGroup(
    requestMessage: api_v0alpha_org_pb.RevokePermissionToAccountOwnerPermissionGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.RevokePermissionToAccountOwnerPermissionGroupResponse|null) => void
  ): UnaryResponse;
  addPermissionToOrgDefaultGroup(
    requestMessage: api_v0alpha_org_pb.AddPermissionToOrgDefaultGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.AddPermissionToOrgDefaultGroupResponse|null) => void
  ): UnaryResponse;
  addPermissionToOrgDefaultGroup(
    requestMessage: api_v0alpha_org_pb.AddPermissionToOrgDefaultGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.AddPermissionToOrgDefaultGroupResponse|null) => void
  ): UnaryResponse;
  removePermissionFromOrgDefaultGroup(
    requestMessage: api_v0alpha_org_pb.RemovePermissionFromOrgDefaultGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.RemovePermissionFromOrgDefaultGroupResponse|null) => void
  ): UnaryResponse;
  removePermissionFromOrgDefaultGroup(
    requestMessage: api_v0alpha_org_pb.RemovePermissionFromOrgDefaultGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.RemovePermissionFromOrgDefaultGroupResponse|null) => void
  ): UnaryResponse;
  getOrgDefaultSuperUserGroup(
    requestMessage: api_v0alpha_org_pb.GetOrgDefaultSuperUserGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetOrgDefaultSuperUserGroupResponse|null) => void
  ): UnaryResponse;
  getOrgDefaultSuperUserGroup(
    requestMessage: api_v0alpha_org_pb.GetOrgDefaultSuperUserGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetOrgDefaultSuperUserGroupResponse|null) => void
  ): UnaryResponse;
  listP3PermissionGroupsByOrgId(
    requestMessage: api_v0alpha_org_pb.ListP3PermissionGroupsByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListP3PermissionGroupsByOrgIdResponse|null) => void
  ): UnaryResponse;
  listP3PermissionGroupsByOrgId(
    requestMessage: api_v0alpha_org_pb.ListP3PermissionGroupsByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListP3PermissionGroupsByOrgIdResponse|null) => void
  ): UnaryResponse;
  listP3PermissionGroups(
    requestMessage: api_v0alpha_org_pb.ListP3PermissionGroupsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListP3PermissionGroupsResponse|null) => void
  ): UnaryResponse;
  listP3PermissionGroups(
    requestMessage: api_v0alpha_org_pb.ListP3PermissionGroupsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListP3PermissionGroupsResponse|null) => void
  ): UnaryResponse;
  addUserRegion(
    requestMessage: api_v0alpha_org_pb.AddUserRegionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.AddUserRegionResponse|null) => void
  ): UnaryResponse;
  addUserRegion(
    requestMessage: api_v0alpha_org_pb.AddUserRegionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.AddUserRegionResponse|null) => void
  ): UnaryResponse;
  removeUserRegion(
    requestMessage: api_v0alpha_org_pb.RemoveUserRegionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.RemoveUserRegionResponse|null) => void
  ): UnaryResponse;
  removeUserRegion(
    requestMessage: api_v0alpha_org_pb.RemoveUserRegionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.RemoveUserRegionResponse|null) => void
  ): UnaryResponse;
  createP3PermissionGroup(
    requestMessage: api_v0alpha_org_pb.CreateP3PermissionGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.CreateP3PermissionGroupResponse|null) => void
  ): UnaryResponse;
  createP3PermissionGroup(
    requestMessage: api_v0alpha_org_pb.CreateP3PermissionGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.CreateP3PermissionGroupResponse|null) => void
  ): UnaryResponse;
  updateP3PermissionGroupByOrgId(
    requestMessage: api_v0alpha_org_pb.UpdateP3PermissionGroupByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateP3PermissionGroupByOrgIdResponse|null) => void
  ): UnaryResponse;
  updateP3PermissionGroupByOrgId(
    requestMessage: api_v0alpha_org_pb.UpdateP3PermissionGroupByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateP3PermissionGroupByOrgIdResponse|null) => void
  ): UnaryResponse;
  updateP3PermissionGroup(
    requestMessage: api_v0alpha_org_pb.UpdateP3PermissionGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateP3PermissionGroupResponse|null) => void
  ): UnaryResponse;
  updateP3PermissionGroup(
    requestMessage: api_v0alpha_org_pb.UpdateP3PermissionGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateP3PermissionGroupResponse|null) => void
  ): UnaryResponse;
  deleteP3PermissionGroup(
    requestMessage: api_v0alpha_org_pb.DeleteP3PermissionGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.DeleteP3PermissionGroupResponse|null) => void
  ): UnaryResponse;
  deleteP3PermissionGroup(
    requestMessage: api_v0alpha_org_pb.DeleteP3PermissionGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.DeleteP3PermissionGroupResponse|null) => void
  ): UnaryResponse;
  assignUsersP3PermissionGroup(
    requestMessage: api_v0alpha_org_pb.AssignUsersP3PermissionGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.AssignUsersP3PermissionGroupResponse|null) => void
  ): UnaryResponse;
  assignUsersP3PermissionGroup(
    requestMessage: api_v0alpha_org_pb.AssignUsersP3PermissionGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.AssignUsersP3PermissionGroupResponse|null) => void
  ): UnaryResponse;
  addLoginToUser(
    requestMessage: api_v0alpha_org_pb.AddLoginToUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.AddLoginToUserResponse|null) => void
  ): UnaryResponse;
  addLoginToUser(
    requestMessage: api_v0alpha_org_pb.AddLoginToUserRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.AddLoginToUserResponse|null) => void
  ): UnaryResponse;
  revokeUsersP3PermissionGroup(
    requestMessage: api_v0alpha_org_pb.RevokeUsersP3PermissionGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.RevokeUsersP3PermissionGroupResponse|null) => void
  ): UnaryResponse;
  revokeUsersP3PermissionGroup(
    requestMessage: api_v0alpha_org_pb.RevokeUsersP3PermissionGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.RevokeUsersP3PermissionGroupResponse|null) => void
  ): UnaryResponse;
  getContactPreferences(
    requestMessage: api_v0alpha_org_pb.GetContactPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetContactPreferencesResponse|null) => void
  ): UnaryResponse;
  getContactPreferences(
    requestMessage: api_v0alpha_org_pb.GetContactPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetContactPreferencesResponse|null) => void
  ): UnaryResponse;
  updateContactPreferences(
    requestMessage: api_v0alpha_org_pb.UpdateContactPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateContactPreferencesResponse|null) => void
  ): UnaryResponse;
  updateContactPreferences(
    requestMessage: api_v0alpha_org_pb.UpdateContactPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateContactPreferencesResponse|null) => void
  ): UnaryResponse;
  getCompliancePreferences(
    requestMessage: api_v0alpha_org_pb.GetCompliancePreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetCompliancePreferencesResponse|null) => void
  ): UnaryResponse;
  getCompliancePreferences(
    requestMessage: api_v0alpha_org_pb.GetCompliancePreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetCompliancePreferencesResponse|null) => void
  ): UnaryResponse;
  updateCompliancePreferences(
    requestMessage: api_v0alpha_org_pb.UpdateCompliancePreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateCompliancePreferencesResponse|null) => void
  ): UnaryResponse;
  updateCompliancePreferences(
    requestMessage: api_v0alpha_org_pb.UpdateCompliancePreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateCompliancePreferencesResponse|null) => void
  ): UnaryResponse;
  getAgentPreferences(
    requestMessage: api_v0alpha_org_pb.GetAgentPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetAgentPreferencesResponse|null) => void
  ): UnaryResponse;
  getAgentPreferences(
    requestMessage: api_v0alpha_org_pb.GetAgentPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetAgentPreferencesResponse|null) => void
  ): UnaryResponse;
  updateAgentPreferences(
    requestMessage: api_v0alpha_org_pb.UpdateAgentPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateAgentPreferencesResponse|null) => void
  ): UnaryResponse;
  updateAgentPreferences(
    requestMessage: api_v0alpha_org_pb.UpdateAgentPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateAgentPreferencesResponse|null) => void
  ): UnaryResponse;
  getOrganizationPreferences(
    requestMessage: api_v0alpha_org_pb.GetOrganizationPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetOrganizationPreferencesResponse|null) => void
  ): UnaryResponse;
  getOrganizationPreferences(
    requestMessage: api_v0alpha_org_pb.GetOrganizationPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetOrganizationPreferencesResponse|null) => void
  ): UnaryResponse;
  updateOrganizationPreferences(
    requestMessage: api_v0alpha_org_pb.UpdateOrganizationPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateOrganizationPreferencesResponse|null) => void
  ): UnaryResponse;
  updateOrganizationPreferences(
    requestMessage: api_v0alpha_org_pb.UpdateOrganizationPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateOrganizationPreferencesResponse|null) => void
  ): UnaryResponse;
  getSchedulePreferences(
    requestMessage: api_v0alpha_org_pb.GetSchedulePreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetSchedulePreferencesResponse|null) => void
  ): UnaryResponse;
  getSchedulePreferences(
    requestMessage: api_v0alpha_org_pb.GetSchedulePreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetSchedulePreferencesResponse|null) => void
  ): UnaryResponse;
  updateSchedulePreferences(
    requestMessage: api_v0alpha_org_pb.UpdateSchedulePreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateSchedulePreferencesResponse|null) => void
  ): UnaryResponse;
  updateSchedulePreferences(
    requestMessage: api_v0alpha_org_pb.UpdateSchedulePreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateSchedulePreferencesResponse|null) => void
  ): UnaryResponse;
  getBusinessPreferences(
    requestMessage: api_v0alpha_org_pb.GetBusinessPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetBusinessPreferencesResponse|null) => void
  ): UnaryResponse;
  getBusinessPreferences(
    requestMessage: api_v0alpha_org_pb.GetBusinessPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetBusinessPreferencesResponse|null) => void
  ): UnaryResponse;
  updateBusinessPreferences(
    requestMessage: api_v0alpha_org_pb.UpdateBusinessPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateBusinessPreferencesResponse|null) => void
  ): UnaryResponse;
  updateBusinessPreferences(
    requestMessage: api_v0alpha_org_pb.UpdateBusinessPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateBusinessPreferencesResponse|null) => void
  ): UnaryResponse;
  getEndOfDayPreferences(
    requestMessage: api_v0alpha_org_pb.GetEndOfDayPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetEndOfDayPreferencesResponse|null) => void
  ): UnaryResponse;
  getEndOfDayPreferences(
    requestMessage: api_v0alpha_org_pb.GetEndOfDayPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetEndOfDayPreferencesResponse|null) => void
  ): UnaryResponse;
  updateEndOfDayPreferences(
    requestMessage: api_v0alpha_org_pb.UpdateEndOfDayPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateEndOfDayPreferencesResponse|null) => void
  ): UnaryResponse;
  updateEndOfDayPreferences(
    requestMessage: api_v0alpha_org_pb.UpdateEndOfDayPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateEndOfDayPreferencesResponse|null) => void
  ): UnaryResponse;
  getReportFilterPreferences(
    requestMessage: api_v0alpha_org_pb.GetFilterPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetFilterPreferencesResponse|null) => void
  ): UnaryResponse;
  getReportFilterPreferences(
    requestMessage: api_v0alpha_org_pb.GetFilterPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetFilterPreferencesResponse|null) => void
  ): UnaryResponse;
  updateReportFilterPreferences(
    requestMessage: api_v0alpha_org_pb.UpdateFilterPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateFilterPreferencesResponse|null) => void
  ): UnaryResponse;
  updateReportFilterPreferences(
    requestMessage: api_v0alpha_org_pb.UpdateFilterPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateFilterPreferencesResponse|null) => void
  ): UnaryResponse;
  getPhonePreferences(
    requestMessage: api_v0alpha_org_pb.GetPhonePreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetPhonePreferencesResponse|null) => void
  ): UnaryResponse;
  getPhonePreferences(
    requestMessage: api_v0alpha_org_pb.GetPhonePreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetPhonePreferencesResponse|null) => void
  ): UnaryResponse;
  updatePhonePreferences(
    requestMessage: api_v0alpha_org_pb.UpdatePhonePreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdatePhonePreferencesResponse|null) => void
  ): UnaryResponse;
  updatePhonePreferences(
    requestMessage: api_v0alpha_org_pb.UpdatePhonePreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdatePhonePreferencesResponse|null) => void
  ): UnaryResponse;
  getDashboardGeneralPreferences(
    requestMessage: api_v0alpha_org_pb.GetDashboardGeneralPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetDashboardGeneralPreferencesResponse|null) => void
  ): UnaryResponse;
  getDashboardGeneralPreferences(
    requestMessage: api_v0alpha_org_pb.GetDashboardGeneralPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetDashboardGeneralPreferencesResponse|null) => void
  ): UnaryResponse;
  updateDashboardGeneralPreferences(
    requestMessage: api_v0alpha_org_pb.UpdateDashboardGeneralPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateDashboardGeneralPreferencesResponse|null) => void
  ): UnaryResponse;
  updateDashboardGeneralPreferences(
    requestMessage: api_v0alpha_org_pb.UpdateDashboardGeneralPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateDashboardGeneralPreferencesResponse|null) => void
  ): UnaryResponse;
  getWebhookPreferences(
    requestMessage: api_v0alpha_org_pb.GetWebhookPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetWebhookPreferencesResponse|null) => void
  ): UnaryResponse;
  getWebhookPreferences(
    requestMessage: api_v0alpha_org_pb.GetWebhookPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetWebhookPreferencesResponse|null) => void
  ): UnaryResponse;
  updateWebhookPreferences(
    requestMessage: api_v0alpha_org_pb.UpdateWebhookPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateWebhookPreferencesResponse|null) => void
  ): UnaryResponse;
  updateWebhookPreferences(
    requestMessage: api_v0alpha_org_pb.UpdateWebhookPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateWebhookPreferencesResponse|null) => void
  ): UnaryResponse;
  getBroadcastPreferences(
    requestMessage: api_v0alpha_org_pb.GetBroadcastPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetBroadcastPreferencesResponse|null) => void
  ): UnaryResponse;
  getBroadcastPreferences(
    requestMessage: api_v0alpha_org_pb.GetBroadcastPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetBroadcastPreferencesResponse|null) => void
  ): UnaryResponse;
  updateBroadcastPreferences(
    requestMessage: api_v0alpha_org_pb.UpdateBroadcastPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateBroadcastPreferencesResponse|null) => void
  ): UnaryResponse;
  updateBroadcastPreferences(
    requestMessage: api_v0alpha_org_pb.UpdateBroadcastPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateBroadcastPreferencesResponse|null) => void
  ): UnaryResponse;
  getAuthenticationPreferences(
    requestMessage: api_v0alpha_org_pb.GetAuthenticationPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetAuthenticationPreferencesResponse|null) => void
  ): UnaryResponse;
  getAuthenticationPreferences(
    requestMessage: api_v0alpha_org_pb.GetAuthenticationPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetAuthenticationPreferencesResponse|null) => void
  ): UnaryResponse;
  updateAuthenticationPreferences(
    requestMessage: api_v0alpha_org_pb.UpdateAuthenticationPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateAuthenticationPreferencesResponse|null) => void
  ): UnaryResponse;
  updateAuthenticationPreferences(
    requestMessage: api_v0alpha_org_pb.UpdateAuthenticationPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateAuthenticationPreferencesResponse|null) => void
  ): UnaryResponse;
  getRecordingPreferences(
    requestMessage: api_v0alpha_org_pb.GetRecordingPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetRecordingPreferencesResponse|null) => void
  ): UnaryResponse;
  getRecordingPreferences(
    requestMessage: api_v0alpha_org_pb.GetRecordingPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetRecordingPreferencesResponse|null) => void
  ): UnaryResponse;
  updateRecordingPreferences(
    requestMessage: api_v0alpha_org_pb.UpdateRecordingPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateRecordingPreferencesResponse|null) => void
  ): UnaryResponse;
  updateRecordingPreferences(
    requestMessage: api_v0alpha_org_pb.UpdateRecordingPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateRecordingPreferencesResponse|null) => void
  ): UnaryResponse;
  getDashboardQueuePreferences(
    requestMessage: api_v0alpha_org_pb.GetDashboardQueuePreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetDashboardQueuePreferencesResponse|null) => void
  ): UnaryResponse;
  getDashboardQueuePreferences(
    requestMessage: api_v0alpha_org_pb.GetDashboardQueuePreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetDashboardQueuePreferencesResponse|null) => void
  ): UnaryResponse;
  updateDashboardQueuePreferences(
    requestMessage: api_v0alpha_org_pb.UpdateDashboardQueuePreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateDashboardQueuePreferencesResponse|null) => void
  ): UnaryResponse;
  updateDashboardQueuePreferences(
    requestMessage: api_v0alpha_org_pb.UpdateDashboardQueuePreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateDashboardQueuePreferencesResponse|null) => void
  ): UnaryResponse;
  getAgentQuickViewPreferences(
    requestMessage: api_v0alpha_org_pb.GetAgentQuickViewPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetAgentQuickViewPreferencesResponse|null) => void
  ): UnaryResponse;
  getAgentQuickViewPreferences(
    requestMessage: api_v0alpha_org_pb.GetAgentQuickViewPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetAgentQuickViewPreferencesResponse|null) => void
  ): UnaryResponse;
  getVoiceAnalyticsPreferences(
    requestMessage: api_v0alpha_org_pb.GetVoiceAnalyticsPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetVoiceAnalyticsPreferencesResponse|null) => void
  ): UnaryResponse;
  getVoiceAnalyticsPreferences(
    requestMessage: api_v0alpha_org_pb.GetVoiceAnalyticsPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetVoiceAnalyticsPreferencesResponse|null) => void
  ): UnaryResponse;
  updateVoiceAnalyticsPreferences(
    requestMessage: api_v0alpha_org_pb.UpdateVoiceAnalyticsPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateVoiceAnalyticsPreferencesResponse|null) => void
  ): UnaryResponse;
  updateVoiceAnalyticsPreferences(
    requestMessage: api_v0alpha_org_pb.UpdateVoiceAnalyticsPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateVoiceAnalyticsPreferencesResponse|null) => void
  ): UnaryResponse;
  updateVoiceAnalyticsPreferencesEnabled(
    requestMessage: api_v0alpha_org_pb.UpdateVoiceAnalyticsPreferencesEnabledRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateVoiceAnalyticsPreferencesEnabledResponse|null) => void
  ): UnaryResponse;
  updateVoiceAnalyticsPreferencesEnabled(
    requestMessage: api_v0alpha_org_pb.UpdateVoiceAnalyticsPreferencesEnabledRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateVoiceAnalyticsPreferencesEnabledResponse|null) => void
  ): UnaryResponse;
  getScorecardsPreferences(
    requestMessage: api_v0alpha_org_pb.GetScorecardsPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetScorecardsPreferencesResponse|null) => void
  ): UnaryResponse;
  getScorecardsPreferences(
    requestMessage: api_v0alpha_org_pb.GetScorecardsPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetScorecardsPreferencesResponse|null) => void
  ): UnaryResponse;
  updateScorecardsPreferences(
    requestMessage: api_v0alpha_org_pb.UpdateScorecardsPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateScorecardsPreferencesResponse|null) => void
  ): UnaryResponse;
  updateScorecardsPreferences(
    requestMessage: api_v0alpha_org_pb.UpdateScorecardsPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateScorecardsPreferencesResponse|null) => void
  ): UnaryResponse;
  getEmailSmsPreferences(
    requestMessage: api_v0alpha_org_pb.GetEmailSmsPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetEmailSmsPreferencesResponse|null) => void
  ): UnaryResponse;
  getEmailSmsPreferences(
    requestMessage: api_v0alpha_org_pb.GetEmailSmsPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetEmailSmsPreferencesResponse|null) => void
  ): UnaryResponse;
  updateEmailSmsPreferences(
    requestMessage: api_v0alpha_org_pb.UpdateEmailSmsPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateEmailSmsPreferencesResponse|null) => void
  ): UnaryResponse;
  updateEmailSmsPreferences(
    requestMessage: api_v0alpha_org_pb.UpdateEmailSmsPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateEmailSmsPreferencesResponse|null) => void
  ): UnaryResponse;
  editAgentQuickViewPreferences(
    requestMessage: api_v0alpha_org_pb.EditAgentQuickViewPreferencesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.EditAgentQuickViewPreferencesResponse|null) => void
  ): UnaryResponse;
  editAgentQuickViewPreferences(
    requestMessage: api_v0alpha_org_pb.EditAgentQuickViewPreferencesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.EditAgentQuickViewPreferencesResponse|null) => void
  ): UnaryResponse;
  editBackofficeThemePreference(
    requestMessage: api_v0alpha_org_pb.EditBackofficeThemePreferenceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.EditBackofficeThemePreferenceResponse|null) => void
  ): UnaryResponse;
  editBackofficeThemePreference(
    requestMessage: api_v0alpha_org_pb.EditBackofficeThemePreferenceRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.EditBackofficeThemePreferenceResponse|null) => void
  ): UnaryResponse;
  getBackofficeThemePreference(
    requestMessage: api_v0alpha_org_pb.GetBackofficeThemePreferenceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetBackofficeThemePreferenceResponse|null) => void
  ): UnaryResponse;
  getBackofficeThemePreference(
    requestMessage: api_v0alpha_org_pb.GetBackofficeThemePreferenceRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetBackofficeThemePreferenceResponse|null) => void
  ): UnaryResponse;
  acceptLinkbackRecordingTerms(
    requestMessage: api_v0alpha_org_pb.AcceptLinkbackRecordingTermsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.AcceptLinkbackRecordingTermsResponse|null) => void
  ): UnaryResponse;
  acceptLinkbackRecordingTerms(
    requestMessage: api_v0alpha_org_pb.AcceptLinkbackRecordingTermsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.AcceptLinkbackRecordingTermsResponse|null) => void
  ): UnaryResponse;
  linkbackUpdateBroadcastTemplates(
    requestMessage: api_v0alpha_org_pb.LinkbackUpdateBroadcastTemplatesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.LinkbackUpdateBroadcastTemplatesResponse|null) => void
  ): UnaryResponse;
  linkbackUpdateBroadcastTemplates(
    requestMessage: api_v0alpha_org_pb.LinkbackUpdateBroadcastTemplatesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.LinkbackUpdateBroadcastTemplatesResponse|null) => void
  ): UnaryResponse;
  recordEmailUnsubscribeAcknowledgement(
    requestMessage: api_v0alpha_org_pb.RecordEmailUnsubscribeAcknowledgementRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.RecordEmailUnsubscribeAcknowledgementResponse|null) => void
  ): UnaryResponse;
  recordEmailUnsubscribeAcknowledgement(
    requestMessage: api_v0alpha_org_pb.RecordEmailUnsubscribeAcknowledgementRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.RecordEmailUnsubscribeAcknowledgementResponse|null) => void
  ): UnaryResponse;
  clearEmailUnsubscribeAcknowledgement(
    requestMessage: api_v0alpha_org_pb.ClearEmailUnsubscribeAcknowledgementRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ClearEmailUnsubscribeAcknowledgementResponse|null) => void
  ): UnaryResponse;
  clearEmailUnsubscribeAcknowledgement(
    requestMessage: api_v0alpha_org_pb.ClearEmailUnsubscribeAcknowledgementRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ClearEmailUnsubscribeAcknowledgementResponse|null) => void
  ): UnaryResponse;
  createWebLinkTemplate(
    requestMessage: api_v0alpha_org_pb.CreateWebLinkTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.CreateWebLinkTemplateResponse|null) => void
  ): UnaryResponse;
  createWebLinkTemplate(
    requestMessage: api_v0alpha_org_pb.CreateWebLinkTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.CreateWebLinkTemplateResponse|null) => void
  ): UnaryResponse;
  listWebLinkTemplates(
    requestMessage: api_v0alpha_org_pb.ListWebLinkTemplatesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListWebLinkTemplatesResponse|null) => void
  ): UnaryResponse;
  listWebLinkTemplates(
    requestMessage: api_v0alpha_org_pb.ListWebLinkTemplatesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListWebLinkTemplatesResponse|null) => void
  ): UnaryResponse;
  getWebLinkTemplate(
    requestMessage: api_v0alpha_org_pb.GetWebLinkTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetWebLinkTemplateResponse|null) => void
  ): UnaryResponse;
  getWebLinkTemplate(
    requestMessage: api_v0alpha_org_pb.GetWebLinkTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetWebLinkTemplateResponse|null) => void
  ): UnaryResponse;
  updateWebLinkTemplate(
    requestMessage: api_v0alpha_org_pb.UpdateWebLinkTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateWebLinkTemplateResponse|null) => void
  ): UnaryResponse;
  updateWebLinkTemplate(
    requestMessage: api_v0alpha_org_pb.UpdateWebLinkTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateWebLinkTemplateResponse|null) => void
  ): UnaryResponse;
  deleteWebLinkTemplate(
    requestMessage: api_v0alpha_org_pb.DeleteWebLinkTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.DeleteWebLinkTemplateResponse|null) => void
  ): UnaryResponse;
  deleteWebLinkTemplate(
    requestMessage: api_v0alpha_org_pb.DeleteWebLinkTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.DeleteWebLinkTemplateResponse|null) => void
  ): UnaryResponse;
  createAgentTriggerTemplate(
    requestMessage: api_v0alpha_org_pb.CreateAgentTriggerTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.CreateAgentTriggerTemplateResponse|null) => void
  ): UnaryResponse;
  createAgentTriggerTemplate(
    requestMessage: api_v0alpha_org_pb.CreateAgentTriggerTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.CreateAgentTriggerTemplateResponse|null) => void
  ): UnaryResponse;
  listAgentTriggerTemplates(
    requestMessage: api_v0alpha_org_pb.ListAgentTriggerTemplatesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListAgentTriggerTemplatesResponse|null) => void
  ): UnaryResponse;
  listAgentTriggerTemplates(
    requestMessage: api_v0alpha_org_pb.ListAgentTriggerTemplatesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListAgentTriggerTemplatesResponse|null) => void
  ): UnaryResponse;
  getAgentTriggerTemplate(
    requestMessage: api_v0alpha_org_pb.GetAgentTriggerTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetAgentTriggerTemplateResponse|null) => void
  ): UnaryResponse;
  getAgentTriggerTemplate(
    requestMessage: api_v0alpha_org_pb.GetAgentTriggerTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetAgentTriggerTemplateResponse|null) => void
  ): UnaryResponse;
  updateAgentTriggerTemplate(
    requestMessage: api_v0alpha_org_pb.UpdateAgentTriggerTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateAgentTriggerTemplateResponse|null) => void
  ): UnaryResponse;
  updateAgentTriggerTemplate(
    requestMessage: api_v0alpha_org_pb.UpdateAgentTriggerTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateAgentTriggerTemplateResponse|null) => void
  ): UnaryResponse;
  deleteAgentTriggerTemplate(
    requestMessage: api_v0alpha_org_pb.DeleteAgentTriggerTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.DeleteAgentTriggerTemplateResponse|null) => void
  ): UnaryResponse;
  deleteAgentTriggerTemplate(
    requestMessage: api_v0alpha_org_pb.DeleteAgentTriggerTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.DeleteAgentTriggerTemplateResponse|null) => void
  ): UnaryResponse;
  createClientInfoDisplayTemplate(
    requestMessage: api_v0alpha_org_pb.CreateClientInfoDisplayTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.CreateClientInfoDisplayTemplateResponse|null) => void
  ): UnaryResponse;
  createClientInfoDisplayTemplate(
    requestMessage: api_v0alpha_org_pb.CreateClientInfoDisplayTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.CreateClientInfoDisplayTemplateResponse|null) => void
  ): UnaryResponse;
  listClientInfoDisplayTemplates(
    requestMessage: api_v0alpha_org_pb.ListClientInfoDisplayTemplatesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListClientInfoDisplayTemplatesResponse|null) => void
  ): UnaryResponse;
  listClientInfoDisplayTemplates(
    requestMessage: api_v0alpha_org_pb.ListClientInfoDisplayTemplatesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListClientInfoDisplayTemplatesResponse|null) => void
  ): UnaryResponse;
  updateClientInfoDisplayTemplate(
    requestMessage: api_v0alpha_org_pb.UpdateClientInfoDisplayTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateClientInfoDisplayTemplateResponse|null) => void
  ): UnaryResponse;
  updateClientInfoDisplayTemplate(
    requestMessage: api_v0alpha_org_pb.UpdateClientInfoDisplayTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateClientInfoDisplayTemplateResponse|null) => void
  ): UnaryResponse;
  deleteClientInfoDisplayTemplate(
    requestMessage: api_v0alpha_org_pb.DeleteClientInfoDisplayTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.DeleteClientInfoDisplayTemplateResponse|null) => void
  ): UnaryResponse;
  deleteClientInfoDisplayTemplate(
    requestMessage: api_v0alpha_org_pb.DeleteClientInfoDisplayTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.DeleteClientInfoDisplayTemplateResponse|null) => void
  ): UnaryResponse;
  getClientInfoDisplayTemplate(
    requestMessage: api_v0alpha_org_pb.GetClientInfoDisplayTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetClientInfoDisplayTemplateResponse|null) => void
  ): UnaryResponse;
  getClientInfoDisplayTemplate(
    requestMessage: api_v0alpha_org_pb.GetClientInfoDisplayTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetClientInfoDisplayTemplateResponse|null) => void
  ): UnaryResponse;
  listAgentPauseCodes(
    requestMessage: api_v0alpha_org_pb.ListAgentPauseCodesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListAgentPauseCodesResponse|null) => void
  ): UnaryResponse;
  listAgentPauseCodes(
    requestMessage: api_v0alpha_org_pb.ListAgentPauseCodesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListAgentPauseCodesResponse|null) => void
  ): UnaryResponse;
  createAgentPauseCode(
    requestMessage: api_v0alpha_org_pb.CreateAgentPauseCodeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.CreateAgentPauseCodeResponse|null) => void
  ): UnaryResponse;
  createAgentPauseCode(
    requestMessage: api_v0alpha_org_pb.CreateAgentPauseCodeRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.CreateAgentPauseCodeResponse|null) => void
  ): UnaryResponse;
  updateAgentPauseCode(
    requestMessage: api_v0alpha_org_pb.UpdateAgentPauseCodeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateAgentPauseCodeResponse|null) => void
  ): UnaryResponse;
  updateAgentPauseCode(
    requestMessage: api_v0alpha_org_pb.UpdateAgentPauseCodeRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateAgentPauseCodeResponse|null) => void
  ): UnaryResponse;
  deleteAgentPauseCode(
    requestMessage: api_v0alpha_org_pb.DeleteAgentPauseCodeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.DeleteAgentPauseCodeResponse|null) => void
  ): UnaryResponse;
  deleteAgentPauseCode(
    requestMessage: api_v0alpha_org_pb.DeleteAgentPauseCodeRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.DeleteAgentPauseCodeResponse|null) => void
  ): UnaryResponse;
  listCustomReportFilters(
    requestMessage: api_v0alpha_org_pb.ListCustomReportFiltersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListCustomReportFiltersResponse|null) => void
  ): UnaryResponse;
  listCustomReportFilters(
    requestMessage: api_v0alpha_org_pb.ListCustomReportFiltersRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListCustomReportFiltersResponse|null) => void
  ): UnaryResponse;
  createCustomReportFilter(
    requestMessage: api_v0alpha_org_pb.CreateCustomReportFilterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.CreateCustomReportFilterResponse|null) => void
  ): UnaryResponse;
  createCustomReportFilter(
    requestMessage: api_v0alpha_org_pb.CreateCustomReportFilterRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.CreateCustomReportFilterResponse|null) => void
  ): UnaryResponse;
  updateCustomReportFilter(
    requestMessage: api_v0alpha_org_pb.UpdateCustomReportFilterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateCustomReportFilterResponse|null) => void
  ): UnaryResponse;
  updateCustomReportFilter(
    requestMessage: api_v0alpha_org_pb.UpdateCustomReportFilterRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateCustomReportFilterResponse|null) => void
  ): UnaryResponse;
  deleteCustomReportFilter(
    requestMessage: api_v0alpha_org_pb.DeleteCustomReportFilterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.DeleteCustomReportFilterResponse|null) => void
  ): UnaryResponse;
  deleteCustomReportFilter(
    requestMessage: api_v0alpha_org_pb.DeleteCustomReportFilterRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.DeleteCustomReportFilterResponse|null) => void
  ): UnaryResponse;
  listAgentResponseGroups(
    requestMessage: api_v0alpha_org_pb.ListAgentResponseGroupsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListAgentResponseGroupsResponse|null) => void
  ): UnaryResponse;
  listAgentResponseGroups(
    requestMessage: api_v0alpha_org_pb.ListAgentResponseGroupsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListAgentResponseGroupsResponse|null) => void
  ): UnaryResponse;
  listLastTemplateElements(
    requestMessage: api_v0alpha_org_pb.ListLastTemplateElementsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListLastTemplateElementsResponse|null) => void
  ): UnaryResponse;
  listLastTemplateElements(
    requestMessage: api_v0alpha_org_pb.ListLastTemplateElementsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListLastTemplateElementsResponse|null) => void
  ): UnaryResponse;
  listQueueConfigs(
    requestMessage: api_v0alpha_org_pb.ListQueueConfigsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListQueueConfigsRes|null) => void
  ): UnaryResponse;
  listQueueConfigs(
    requestMessage: api_v0alpha_org_pb.ListQueueConfigsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListQueueConfigsRes|null) => void
  ): UnaryResponse;
  deleteQueueConfig(
    requestMessage: api_v0alpha_org_pb.DeleteQueueConfigReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.DeleteQueueConfigRes|null) => void
  ): UnaryResponse;
  deleteQueueConfig(
    requestMessage: api_v0alpha_org_pb.DeleteQueueConfigReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.DeleteQueueConfigRes|null) => void
  ): UnaryResponse;
  getQueueConfig(
    requestMessage: api_v0alpha_org_pb.GetQueueConfigReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetQueueConfigRes|null) => void
  ): UnaryResponse;
  getQueueConfig(
    requestMessage: api_v0alpha_org_pb.GetQueueConfigReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetQueueConfigRes|null) => void
  ): UnaryResponse;
  createQueueConfig(
    requestMessage: api_v0alpha_org_pb.CreateQueueConfigReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.CreateQueueConfigRes|null) => void
  ): UnaryResponse;
  createQueueConfig(
    requestMessage: api_v0alpha_org_pb.CreateQueueConfigReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.CreateQueueConfigRes|null) => void
  ): UnaryResponse;
  updateQueueConfig(
    requestMessage: api_v0alpha_org_pb.UpdateQueueConfigReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateQueueConfigRes|null) => void
  ): UnaryResponse;
  updateQueueConfig(
    requestMessage: api_v0alpha_org_pb.UpdateQueueConfigReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateQueueConfigRes|null) => void
  ): UnaryResponse;
  copyQueueConfig(
    requestMessage: api_v0alpha_org_pb.CopyQueueConfigReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.CopyQueueConfigRes|null) => void
  ): UnaryResponse;
  copyQueueConfig(
    requestMessage: api_v0alpha_org_pb.CopyQueueConfigReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.CopyQueueConfigRes|null) => void
  ): UnaryResponse;
  getAllQueueConfigSounds(
    requestMessage: api_v0alpha_org_pb.GetAllQueueConfigSoundsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetAllQueueConfigSoundsRes|null) => void
  ): UnaryResponse;
  getAllQueueConfigSounds(
    requestMessage: api_v0alpha_org_pb.GetAllQueueConfigSoundsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetAllQueueConfigSoundsRes|null) => void
  ): UnaryResponse;
  getQueueConfigSound(
    requestMessage: api_v0alpha_org_pb.GetQueueConfigSoundReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetQueueConfigSoundRes|null) => void
  ): UnaryResponse;
  getQueueConfigSound(
    requestMessage: api_v0alpha_org_pb.GetQueueConfigSoundReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetQueueConfigSoundRes|null) => void
  ): UnaryResponse;
  setQueueConfigSound(
    requestMessage: api_v0alpha_org_pb.SetQueueConfigSoundReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.SetQueueConfigSoundRes|null) => void
  ): UnaryResponse;
  setQueueConfigSound(
    requestMessage: api_v0alpha_org_pb.SetQueueConfigSoundReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.SetQueueConfigSoundRes|null) => void
  ): UnaryResponse;
  setAllQueueConfigSoundsFromSource(
    requestMessage: api_v0alpha_org_pb.SetAllQueueConfigSoundsFromSourceReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.SetAllQueueConfigSoundsFromSourceRes|null) => void
  ): UnaryResponse;
  setAllQueueConfigSoundsFromSource(
    requestMessage: api_v0alpha_org_pb.SetAllQueueConfigSoundsFromSourceReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.SetAllQueueConfigSoundsFromSourceRes|null) => void
  ): UnaryResponse;
  getUserBlocked(
    requestMessage: api_v0alpha_org_pb.GetUserBlockedRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetUserBlockedResponse|null) => void
  ): UnaryResponse;
  getUserBlocked(
    requestMessage: api_v0alpha_org_pb.GetUserBlockedRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetUserBlockedResponse|null) => void
  ): UnaryResponse;
  unblockUser(
    requestMessage: api_v0alpha_org_pb.UnblockUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UnblockUserResponse|null) => void
  ): UnaryResponse;
  unblockUser(
    requestMessage: api_v0alpha_org_pb.UnblockUserRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UnblockUserResponse|null) => void
  ): UnaryResponse;
  listP3UnMigratedUsers(
    requestMessage: api_v0alpha_org_pb.ListP3UnMigratedUsersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListP3UnMigratedUsersResponse|null) => void
  ): UnaryResponse;
  listP3UnMigratedUsers(
    requestMessage: api_v0alpha_org_pb.ListP3UnMigratedUsersRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListP3UnMigratedUsersResponse|null) => void
  ): UnaryResponse;
  migrateP3User(
    requestMessage: api_v0alpha_org_pb.MigrateP3UserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.MigrateP3UserResponse|null) => void
  ): UnaryResponse;
  migrateP3User(
    requestMessage: api_v0alpha_org_pb.MigrateP3UserRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.MigrateP3UserResponse|null) => void
  ): UnaryResponse;
  updateP3UserName(
    requestMessage: api_v0alpha_org_pb.UpdateP3UserNameRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateP3UserNameResponse|null) => void
  ): UnaryResponse;
  updateP3UserName(
    requestMessage: api_v0alpha_org_pb.UpdateP3UserNameRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateP3UserNameResponse|null) => void
  ): UnaryResponse;
  listOwnedUsers(
    requestMessage: api_v0alpha_org_pb.ListOwnedUsersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListOwnedUsersResponse|null) => void
  ): UnaryResponse;
  listOwnedUsers(
    requestMessage: api_v0alpha_org_pb.ListOwnedUsersRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListOwnedUsersResponse|null) => void
  ): UnaryResponse;
  listOwnedOrgsByOrgId(
    requestMessage: api_v0alpha_org_pb.ListOwnedOrgsByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListOwnedOrgsByOrgIdResponse|null) => void
  ): UnaryResponse;
  listOwnedOrgsByOrgId(
    requestMessage: api_v0alpha_org_pb.ListOwnedOrgsByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListOwnedOrgsByOrgIdResponse|null) => void
  ): UnaryResponse;
  listOwnedOrgs(
    requestMessage: api_v0alpha_org_pb.ListOwnedOrgsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListOwnedOrgsResponse|null) => void
  ): UnaryResponse;
  listOwnedOrgs(
    requestMessage: api_v0alpha_org_pb.ListOwnedOrgsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListOwnedOrgsResponse|null) => void
  ): UnaryResponse;
  removeLoginStrikes(
    requestMessage: api_v0alpha_org_pb.RemoveLoginStrikesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.RemoveLoginStrikesResponse|null) => void
  ): UnaryResponse;
  removeLoginStrikes(
    requestMessage: api_v0alpha_org_pb.RemoveLoginStrikesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.RemoveLoginStrikesResponse|null) => void
  ): UnaryResponse;
  removeUserLoginStrikes(
    requestMessage: api_v0alpha_org_pb.RemoveUserLoginStrikesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.RemoveUserLoginStrikesResponse|null) => void
  ): UnaryResponse;
  removeUserLoginStrikes(
    requestMessage: api_v0alpha_org_pb.RemoveUserLoginStrikesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.RemoveUserLoginStrikesResponse|null) => void
  ): UnaryResponse;
  listLoginHistory(
    requestMessage: api_v0alpha_org_pb.ListLoginHistoryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListLoginHistoryResponse|null) => void
  ): UnaryResponse;
  listLoginHistory(
    requestMessage: api_v0alpha_org_pb.ListLoginHistoryRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListLoginHistoryResponse|null) => void
  ): UnaryResponse;
  updateP3UserSids(
    requestMessage: api_v0alpha_org_pb.UpdateP3UserSidsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateP3UserSidsResponse|null) => void
  ): UnaryResponse;
  updateP3UserSids(
    requestMessage: api_v0alpha_org_pb.UpdateP3UserSidsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateP3UserSidsResponse|null) => void
  ): UnaryResponse;
  createAuthConnection(
    requestMessage: api_v0alpha_org_pb.CreateAuthConnectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.CreateAuthConnectionResponse|null) => void
  ): UnaryResponse;
  createAuthConnection(
    requestMessage: api_v0alpha_org_pb.CreateAuthConnectionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.CreateAuthConnectionResponse|null) => void
  ): UnaryResponse;
  getAuthConnectionSettings(
    requestMessage: api_v0alpha_org_pb.GetAuthConnectionSettingsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetAuthConnectionSettingsResponse|null) => void
  ): UnaryResponse;
  getAuthConnectionSettings(
    requestMessage: api_v0alpha_org_pb.GetAuthConnectionSettingsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetAuthConnectionSettingsResponse|null) => void
  ): UnaryResponse;
  updateAuthConnectionSettings(
    requestMessage: api_v0alpha_org_pb.UpdateAuthConnectionSettingsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateAuthConnectionSettingsResponse|null) => void
  ): UnaryResponse;
  updateAuthConnectionSettings(
    requestMessage: api_v0alpha_org_pb.UpdateAuthConnectionSettingsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateAuthConnectionSettingsResponse|null) => void
  ): UnaryResponse;
  deleteAuthConnection(
    requestMessage: api_v0alpha_org_pb.DeleteAuthConnectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.DeleteAuthConnectionResponse|null) => void
  ): UnaryResponse;
  deleteAuthConnection(
    requestMessage: api_v0alpha_org_pb.DeleteAuthConnectionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.DeleteAuthConnectionResponse|null) => void
  ): UnaryResponse;
  getUserSubscription(
    requestMessage: api_v0alpha_org_pb.GetUserSubscriptionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetUserSubscriptionResponse|null) => void
  ): UnaryResponse;
  getUserSubscription(
    requestMessage: api_v0alpha_org_pb.GetUserSubscriptionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetUserSubscriptionResponse|null) => void
  ): UnaryResponse;
  addUserSubscription(
    requestMessage: api_v0alpha_org_pb.AddUserSubscriptionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.AddUserSubscriptionResponse|null) => void
  ): UnaryResponse;
  addUserSubscription(
    requestMessage: api_v0alpha_org_pb.AddUserSubscriptionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.AddUserSubscriptionResponse|null) => void
  ): UnaryResponse;
  removeUserSubscription(
    requestMessage: api_v0alpha_org_pb.RemoveUserSubscriptionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.RemoveUserSubscriptionResponse|null) => void
  ): UnaryResponse;
  removeUserSubscription(
    requestMessage: api_v0alpha_org_pb.RemoveUserSubscriptionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.RemoveUserSubscriptionResponse|null) => void
  ): UnaryResponse;
  removeMyUserSubscription(
    requestMessage: api_v0alpha_org_pb.RemoveMyUserSubscriptionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.RemoveMyUserSubscriptionResponse|null) => void
  ): UnaryResponse;
  removeMyUserSubscription(
    requestMessage: api_v0alpha_org_pb.RemoveMyUserSubscriptionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.RemoveMyUserSubscriptionResponse|null) => void
  ): UnaryResponse;
  updateUserSubscription(
    requestMessage: api_v0alpha_org_pb.UpdateUserSubscriptionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateUserSubscriptionResponse|null) => void
  ): UnaryResponse;
  updateUserSubscription(
    requestMessage: api_v0alpha_org_pb.UpdateUserSubscriptionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateUserSubscriptionResponse|null) => void
  ): UnaryResponse;
  listUserSubscriptions(
    requestMessage: api_v0alpha_org_pb.ListUserSubscriptionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListUserSubscriptionsResponse|null) => void
  ): UnaryResponse;
  listUserSubscriptions(
    requestMessage: api_v0alpha_org_pb.ListUserSubscriptionsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListUserSubscriptionsResponse|null) => void
  ): UnaryResponse;
  listOrgSubscriptions(
    requestMessage: api_v0alpha_org_pb.ListOrgSubscriptionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListOrgSubscriptionsResponse|null) => void
  ): UnaryResponse;
  listOrgSubscriptions(
    requestMessage: api_v0alpha_org_pb.ListOrgSubscriptionsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListOrgSubscriptionsResponse|null) => void
  ): UnaryResponse;
  getSystemEnvironmentDetails(
    requestMessage: api_v0alpha_org_pb.GetSystemEnvironmentDetailsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetSystemEnvironmentDetailsResponse|null) => void
  ): UnaryResponse;
  getSystemEnvironmentDetails(
    requestMessage: api_v0alpha_org_pb.GetSystemEnvironmentDetailsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.GetSystemEnvironmentDetailsResponse|null) => void
  ): UnaryResponse;
  listAgentStatisticsTemplates(
    requestMessage: api_v0alpha_org_pb.ListAgentStatisticsTemplatesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListAgentStatisticsTemplatesResponse|null) => void
  ): UnaryResponse;
  listAgentStatisticsTemplates(
    requestMessage: api_v0alpha_org_pb.ListAgentStatisticsTemplatesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.ListAgentStatisticsTemplatesResponse|null) => void
  ): UnaryResponse;
  createAgentStatisticsTemplate(
    requestMessage: api_v0alpha_org_pb.CreateAgentStatisticsTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.CreateAgentStatisticsTemplateResponse|null) => void
  ): UnaryResponse;
  createAgentStatisticsTemplate(
    requestMessage: api_v0alpha_org_pb.CreateAgentStatisticsTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.CreateAgentStatisticsTemplateResponse|null) => void
  ): UnaryResponse;
  updateAgentStatisticsTemplate(
    requestMessage: api_v0alpha_org_pb.UpdateAgentStatisticsTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateAgentStatisticsTemplateResponse|null) => void
  ): UnaryResponse;
  updateAgentStatisticsTemplate(
    requestMessage: api_v0alpha_org_pb.UpdateAgentStatisticsTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.UpdateAgentStatisticsTemplateResponse|null) => void
  ): UnaryResponse;
  deleteAgentStatisticsTemplate(
    requestMessage: api_v0alpha_org_pb.DeleteAgentStatisticsTemplateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.DeleteAgentStatisticsTemplateResponse|null) => void
  ): UnaryResponse;
  deleteAgentStatisticsTemplate(
    requestMessage: api_v0alpha_org_pb.DeleteAgentStatisticsTemplateRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_org_pb.DeleteAgentStatisticsTemplateResponse|null) => void
  ): UnaryResponse;
}

