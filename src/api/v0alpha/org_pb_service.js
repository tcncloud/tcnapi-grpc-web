// package: api.v0alpha
// file: api/v0alpha/org.proto

var api_v0alpha_org_pb = require("../../api/v0alpha/org_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Org = (function () {
  function Org() {}
  Org.serviceName = "api.v0alpha.Org";
  return Org;
}());

Org.RegisterOrganization = {
  methodName: "RegisterOrganization",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.RegisterOrganizationRequest,
  responseType: api_v0alpha_org_pb.RegisterOrganizationResponse
};

Org.ConvertOrgToManual = {
  methodName: "ConvertOrgToManual",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.ConvertOrgToManualRequest,
  responseType: api_v0alpha_org_pb.ConvertOrgToManualResponse
};

Org.UpdateOrganization = {
  methodName: "UpdateOrganization",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateOrganizationRequest,
  responseType: api_v0alpha_org_pb.UpdateOrganizationResponse
};

Org.ArchiveOrganization = {
  methodName: "ArchiveOrganization",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.ArchiveOrganizationRequest,
  responseType: api_v0alpha_org_pb.ArchiveOrganizationResponse
};

Org.UnArchiveOrganization = {
  methodName: "UnArchiveOrganization",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UnArchiveOrganizationRequest,
  responseType: api_v0alpha_org_pb.UnArchiveOrganizationResponse
};

Org.ListArchivedOrganizations = {
  methodName: "ListArchivedOrganizations",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.ListArchivedOrganizationsRequest,
  responseType: api_v0alpha_org_pb.ListArchivedOrganizationsResponse
};

Org.GetOrganizationProfile = {
  methodName: "GetOrganizationProfile",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetOrganizationProfileRequest,
  responseType: api_v0alpha_org_pb.GetOrganizationProfileResponse
};

Org.GetOrganizationProfileById = {
  methodName: "GetOrganizationProfileById",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetOrganizationProfileByIdRequest,
  responseType: api_v0alpha_org_pb.GetOrganizationProfileResponse
};

Org.ListOrganizationDescriptions = {
  methodName: "ListOrganizationDescriptions",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.ListOrganizationDescriptionsRequest,
  responseType: api_v0alpha_org_pb.ListOrganizationDescriptionsResponse
};

Org.ListRegionalOrganizations = {
  methodName: "ListRegionalOrganizations",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.ListRegionalOrganizationsRequest,
  responseType: api_v0alpha_org_pb.ListRegionalOrganizationsResponse
};

Org.UpdateP3OwningOrg = {
  methodName: "UpdateP3OwningOrg",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateP3OwningOrgRequest,
  responseType: api_v0alpha_org_pb.UpdateP3OwningOrgResponse
};

Org.GetP3OwningOrg = {
  methodName: "GetP3OwningOrg",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetP3OwningOrgRequest,
  responseType: api_v0alpha_org_pb.GetP3OwningOrgResponse
};

Org.ListOrganizationUserDescriptions = {
  methodName: "ListOrganizationUserDescriptions",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.ListOrganizationUserDescriptionsRequest,
  responseType: api_v0alpha_org_pb.ListOrganizationUserDescriptionsResponse
};

Org.AdminListUserDescriptions = {
  methodName: "AdminListUserDescriptions",
  service: Org,
  requestStream: false,
  responseStream: true,
  requestType: api_v0alpha_org_pb.AdminListUserDescriptionsRequest,
  responseType: api_v0alpha_org_pb.AdminListUserDescriptionsResponse
};

Org.ListUserDescriptions = {
  methodName: "ListUserDescriptions",
  service: Org,
  requestStream: false,
  responseStream: true,
  requestType: api_v0alpha_org_pb.ListUserDescriptionsRequest,
  responseType: api_v0alpha_org_pb.ListUserDescriptionsResponse
};

Org.GetUserDirectory = {
  methodName: "GetUserDirectory",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetUserDirectoryRequest,
  responseType: api_v0alpha_org_pb.GetUserDirectoryResponse
};

Org.GetRegions = {
  methodName: "GetRegions",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetRegionsRequest,
  responseType: api_v0alpha_org_pb.GetRegionsResponse
};

Org.GetMyUserDetails = {
  methodName: "GetMyUserDetails",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetMyUserDetailsRequest,
  responseType: api_v0alpha_org_pb.UserDetails
};

Org.GetUserDetails = {
  methodName: "GetUserDetails",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetUserDetailsRequest,
  responseType: api_v0alpha_org_pb.UserDetails
};

Org.AdminGetUserDetails = {
  methodName: "AdminGetUserDetails",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.AdminGetUserDetailsRequest,
  responseType: api_v0alpha_org_pb.UserDetails
};

Org.GetAgentUsers = {
  methodName: "GetAgentUsers",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetAgentUsersRequest,
  responseType: api_v0alpha_org_pb.GetAgentUsersResponse
};

Org.GetAgentSettings = {
  methodName: "GetAgentSettings",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetAgentSettingsRequest,
  responseType: api_v0alpha_org_pb.GetAgentSettingsResponse
};

Org.GetAgentProfileGroup = {
  methodName: "GetAgentProfileGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetAgentProfileGroupRequest,
  responseType: api_v0alpha_org_pb.GetAgentProfileGroupResponse
};

Org.UpdateAgentProfileGroup = {
  methodName: "UpdateAgentProfileGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateAgentProfileGroupRequest,
  responseType: api_v0alpha_org_pb.UpdateAgentProfileGroupResponse
};

Org.CreateAgentProfileGroup = {
  methodName: "CreateAgentProfileGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.CreateAgentProfileGroupRequest,
  responseType: api_v0alpha_org_pb.CreateAgentProfileGroupResponse
};

Org.ListAgentProfileGroups = {
  methodName: "ListAgentProfileGroups",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.ListAgentProfileGroupsRequest,
  responseType: api_v0alpha_org_pb.ListAgentProfileGroupsResponse
};

Org.DeleteAgentProfileGroup = {
  methodName: "DeleteAgentProfileGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.DeleteAgentProfileGroupRequest,
  responseType: api_v0alpha_org_pb.DeleteAgentProfileGroupResponse
};

Org.AssignAgentProfileGroups = {
  methodName: "AssignAgentProfileGroups",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.AssignAgentProfileGroupsRequest,
  responseType: api_v0alpha_org_pb.AssignAgentProfileGroupsResponse
};

Org.UpdateMyUser = {
  methodName: "UpdateMyUser",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateMyUserRequest,
  responseType: api_v0alpha_org_pb.UpdateMyUserResponse
};

Org.UpdateUserByUserId = {
  methodName: "UpdateUserByUserId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateUserByUserIdRequest,
  responseType: api_v0alpha_org_pb.UpdateUserByUserIdResponse
};

Org.UpdateUserByCallerId = {
  methodName: "UpdateUserByCallerId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateUserByCallerIdRequest,
  responseType: api_v0alpha_org_pb.UpdateUserByCallerIdResponse
};

Org.CreateUser = {
  methodName: "CreateUser",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.CreateUserRequest,
  responseType: api_v0alpha_org_pb.CreateUserResponse
};

Org.CreateUserByOrgId = {
  methodName: "CreateUserByOrgId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.CreateUserByOrgIdRequest,
  responseType: api_v0alpha_org_pb.CreateUserByOrgIdResponse
};

Org.CreateDelegatedUser = {
  methodName: "CreateDelegatedUser",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.CreateDelegatedUserRequest,
  responseType: api_v0alpha_org_pb.CreateDelegatedUserResponse
};

Org.UpdateMyUserPassword = {
  methodName: "UpdateMyUserPassword",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateMyUserPasswordRequest,
  responseType: api_v0alpha_org_pb.UpdateMyUserPasswordResponse
};

Org.UpdateUserPasswordByUserId = {
  methodName: "UpdateUserPasswordByUserId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateUserPasswordByUserIdRequest,
  responseType: api_v0alpha_org_pb.UpdateUserPasswordByUserIdResponse
};

Org.UpdateUserPasswordByOrgId = {
  methodName: "UpdateUserPasswordByOrgId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateUserPasswordByOrgIdRequest,
  responseType: api_v0alpha_org_pb.UpdateUserPasswordByOrgIdResponse
};

Org.ResetUserRequirePasswordReset = {
  methodName: "ResetUserRequirePasswordReset",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.ResetUserRequirePasswordResetRequest,
  responseType: api_v0alpha_org_pb.ResetUserRequirePasswordResetResponse
};

Org.GetMyUserPasswordResetLink = {
  methodName: "GetMyUserPasswordResetLink",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetMyUserPasswordResetLinkRequest,
  responseType: api_v0alpha_org_pb.GetMyUserPasswordResetLinkResponse
};

Org.GetUserPasswordResetLinkByUserId = {
  methodName: "GetUserPasswordResetLinkByUserId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetUserPasswordResetLinkByUserIdRequest,
  responseType: api_v0alpha_org_pb.GetUserPasswordResetLinkByUserIdResponse
};

Org.GetUserPasswordResetLinkByOrgId = {
  methodName: "GetUserPasswordResetLinkByOrgId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetUserPasswordResetLinkByOrgIdRequest,
  responseType: api_v0alpha_org_pb.GetUserPasswordResetLinkByOrgIdResponse
};

Org.GetUserEmailVerified = {
  methodName: "GetUserEmailVerified",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetUserEmailVerifiedRequest,
  responseType: api_v0alpha_org_pb.GetUserEmailVerifiedResponse
};

Org.GetUserEmailVerifiedByOrgId = {
  methodName: "GetUserEmailVerifiedByOrgId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetUserEmailVerifiedByOrgIdRequest,
  responseType: api_v0alpha_org_pb.GetUserEmailVerifiedByOrgIdResponse
};

Org.SendUserVerificationEmailByOrgId = {
  methodName: "SendUserVerificationEmailByOrgId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.SendUserVerificationEmailByOrgIdRequest,
  responseType: api_v0alpha_org_pb.SendUserVerificationEmailByOrgIdResponse
};

Org.SendUserVerificationEmail = {
  methodName: "SendUserVerificationEmail",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.SendUserVerificationEmailRequest,
  responseType: api_v0alpha_org_pb.SendUserVerificationEmailResponse
};

Org.ManualUserEmailVerificationByOrgId = {
  methodName: "ManualUserEmailVerificationByOrgId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.ManualUserEmailVerificationByOrgIdRequest,
  responseType: api_v0alpha_org_pb.ManualUserEmailVerificationByOrgIdResponse
};

Org.ManualUserEmailVerification = {
  methodName: "ManualUserEmailVerification",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.ManualUserEmailVerificationRequest,
  responseType: api_v0alpha_org_pb.ManualUserEmailVerificationResponse
};

Org.GetMyTempUserToken = {
  methodName: "GetMyTempUserToken",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetMyTempUserTokenReq,
  responseType: api_v0alpha_org_pb.GetMyTempUserTokenRes
};

Org.GetTempUserTokenByUserId = {
  methodName: "GetTempUserTokenByUserId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetTempUserTokenByUserIdReq,
  responseType: api_v0alpha_org_pb.GetTempUserTokenByUserIdRes
};

Org.GetCountriesList = {
  methodName: "GetCountriesList",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetCountriesListRequest,
  responseType: api_v0alpha_org_pb.GetCountriesListResponse
};

Org.GetAdminClientPreferences = {
  methodName: "GetAdminClientPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetAdminClientPreferencesRequest,
  responseType: api_v0alpha_org_pb.GetAdminClientPreferencesResponse
};

Org.UpdateAdminClientPreferences = {
  methodName: "UpdateAdminClientPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateAdminClientPreferencesRequest,
  responseType: api_v0alpha_org_pb.UpdateAdminClientPreferencesResponse
};

Org.GetPermissions = {
  methodName: "GetPermissions",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetPermissionsRequest,
  responseType: api_v0alpha_org_pb.GetPermissionsResponse
};

Org.RevokeAccountOwnerPermissionFromUser = {
  methodName: "RevokeAccountOwnerPermissionFromUser",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.RevokeAccountOwnerPermissionFromUserRequest,
  responseType: api_v0alpha_org_pb.RevokeAccountOwnerPermissionFromUserResponse
};

Org.UpdateUserDisabled = {
  methodName: "UpdateUserDisabled",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateUserDisabledRequest,
  responseType: api_v0alpha_org_pb.UpdateUserDisabledResponse
};

Org.UpdateUserDisabledByOrgId = {
  methodName: "UpdateUserDisabledByOrgId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateUserDisabledByOrgIdRequest,
  responseType: api_v0alpha_org_pb.UpdateUserDisabledByOrgIdResponse
};

Org.UpdateBulkUsersDisabled = {
  methodName: "UpdateBulkUsersDisabled",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateBulkUsersDisabledRequest,
  responseType: api_v0alpha_org_pb.UpdateBulkUsersDisabledResponse
};

Org.GetOrgBillingSettingsByOrgId = {
  methodName: "GetOrgBillingSettingsByOrgId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetOrgBillingSettingsByOrgIdRequest,
  responseType: api_v0alpha_org_pb.GetOrgBillingSettingsByOrgIdResponse
};

Org.GetOrgBillingSettings = {
  methodName: "GetOrgBillingSettings",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetOrgBillingSettingsRequest,
  responseType: api_v0alpha_org_pb.GetOrgBillingSettingsResponse
};

Org.SetOrgBillingSettings = {
  methodName: "SetOrgBillingSettings",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.SetOrgBillingSettingsRequest,
  responseType: api_v0alpha_org_pb.SetOrgBillingSettingsResponse
};

Org.AddOrgBillingOverride = {
  methodName: "AddOrgBillingOverride",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.AddOrgBillingOverrideRequest,
  responseType: api_v0alpha_org_pb.AddOrgBillingOverrideResponse
};

Org.RemoveOrgBillingOverride = {
  methodName: "RemoveOrgBillingOverride",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.RemoveOrgBillingOverrideRequest,
  responseType: api_v0alpha_org_pb.RemoveOrgBillingOverrideResponse
};

Org.GetSystemDefaultBillingRates = {
  methodName: "GetSystemDefaultBillingRates",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetSystemDefaultBillingRatesRequest,
  responseType: api_v0alpha_org_pb.GetSystemDefaultBillingRatesResponse
};

Org.ListPermissionGroupsByOrgId = {
  methodName: "ListPermissionGroupsByOrgId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.ListPermissionGroupsByOrgIdRequest,
  responseType: api_v0alpha_org_pb.ListPermissionGroupsByOrgIdResponse
};

Org.ListPermissionGroups = {
  methodName: "ListPermissionGroups",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.ListPermissionGroupsRequest,
  responseType: api_v0alpha_org_pb.ListPermissionGroupsResponse
};

Org.CreatePermissionGroup = {
  methodName: "CreatePermissionGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.CreatePermissionGroupRequest,
  responseType: api_v0alpha_org_pb.CreatePermissionGroupResponse
};

Org.UpdatePermissionGroup = {
  methodName: "UpdatePermissionGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdatePermissionGroupRequest,
  responseType: api_v0alpha_org_pb.UpdatePermissionGroupResponse
};

Org.DeletePermissionGroup = {
  methodName: "DeletePermissionGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.DeletePermissionGroupRequest,
  responseType: api_v0alpha_org_pb.DeletePermissionGroupResponse
};

Org.AssignUserToAccountOwnerPermissionGroup = {
  methodName: "AssignUserToAccountOwnerPermissionGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.AssignUserToAccountOwnerPermissionGroupRequest,
  responseType: api_v0alpha_org_pb.AssignUserToAccountOwnerPermissionGroupResponse
};

Org.AssignUserPermissionGroup = {
  methodName: "AssignUserPermissionGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.AssignUserPermissionGroupRequest,
  responseType: api_v0alpha_org_pb.AssignUserPermissionGroupResponse
};

Org.AssignUsersPermissionGroup = {
  methodName: "AssignUsersPermissionGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.AssignUsersPermissionGroupRequest,
  responseType: api_v0alpha_org_pb.AssignUsersPermissionGroupResponse
};

Org.UpdateUserNeoPermissionGroups = {
  methodName: "UpdateUserNeoPermissionGroups",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateUserNeoPermissionGroupsRequest,
  responseType: api_v0alpha_org_pb.UpdateUserNeoPermissionGroupsResponse
};

Org.RevokeUserPermissionGroup = {
  methodName: "RevokeUserPermissionGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.RevokeUserPermissionGroupRequest,
  responseType: api_v0alpha_org_pb.RevokeUserPermissionGroupResponse
};

Org.RevokeUsersPermissionGroup = {
  methodName: "RevokeUsersPermissionGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.RevokeUsersPermissionGroupRequest,
  responseType: api_v0alpha_org_pb.RevokeUsersPermissionGroupResponse
};

Org.InitDefaultPermissionGroups = {
  methodName: "InitDefaultPermissionGroups",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.InitDefaultPermissionGroupsRequest,
  responseType: api_v0alpha_org_pb.InitDefaultPermissionGroupsResponse
};

Org.AddPermissionToAccountOwnerPermissionGroup = {
  methodName: "AddPermissionToAccountOwnerPermissionGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.AddPermissionToAccountOwnerPermissionGroupRequest,
  responseType: api_v0alpha_org_pb.AddPermissionToAccountOwnerPermissionGroupResponse
};

Org.RevokePermissionToAccountOwnerPermissionGroup = {
  methodName: "RevokePermissionToAccountOwnerPermissionGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.RevokePermissionToAccountOwnerPermissionGroupRequest,
  responseType: api_v0alpha_org_pb.RevokePermissionToAccountOwnerPermissionGroupResponse
};

Org.AddPermissionToOrgDefaultGroup = {
  methodName: "AddPermissionToOrgDefaultGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.AddPermissionToOrgDefaultGroupRequest,
  responseType: api_v0alpha_org_pb.AddPermissionToOrgDefaultGroupResponse
};

Org.RemovePermissionFromOrgDefaultGroup = {
  methodName: "RemovePermissionFromOrgDefaultGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.RemovePermissionFromOrgDefaultGroupRequest,
  responseType: api_v0alpha_org_pb.RemovePermissionFromOrgDefaultGroupResponse
};

Org.GetOrgDefaultSuperUserGroup = {
  methodName: "GetOrgDefaultSuperUserGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetOrgDefaultSuperUserGroupRequest,
  responseType: api_v0alpha_org_pb.GetOrgDefaultSuperUserGroupResponse
};

Org.ListP3PermissionGroupsByOrgId = {
  methodName: "ListP3PermissionGroupsByOrgId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.ListP3PermissionGroupsByOrgIdRequest,
  responseType: api_v0alpha_org_pb.ListP3PermissionGroupsByOrgIdResponse
};

Org.ListP3PermissionGroups = {
  methodName: "ListP3PermissionGroups",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.ListP3PermissionGroupsRequest,
  responseType: api_v0alpha_org_pb.ListP3PermissionGroupsResponse
};

Org.AddUserRegion = {
  methodName: "AddUserRegion",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.AddUserRegionRequest,
  responseType: api_v0alpha_org_pb.AddUserRegionResponse
};

Org.RemoveUserRegion = {
  methodName: "RemoveUserRegion",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.RemoveUserRegionRequest,
  responseType: api_v0alpha_org_pb.RemoveUserRegionResponse
};

Org.CreateP3PermissionGroup = {
  methodName: "CreateP3PermissionGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.CreateP3PermissionGroupRequest,
  responseType: api_v0alpha_org_pb.CreateP3PermissionGroupResponse
};

Org.UpdateP3PermissionGroupByOrgId = {
  methodName: "UpdateP3PermissionGroupByOrgId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateP3PermissionGroupByOrgIdRequest,
  responseType: api_v0alpha_org_pb.UpdateP3PermissionGroupByOrgIdResponse
};

Org.UpdateP3PermissionGroup = {
  methodName: "UpdateP3PermissionGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateP3PermissionGroupRequest,
  responseType: api_v0alpha_org_pb.UpdateP3PermissionGroupResponse
};

Org.DeleteP3PermissionGroup = {
  methodName: "DeleteP3PermissionGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.DeleteP3PermissionGroupRequest,
  responseType: api_v0alpha_org_pb.DeleteP3PermissionGroupResponse
};

Org.AssignUsersP3PermissionGroup = {
  methodName: "AssignUsersP3PermissionGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.AssignUsersP3PermissionGroupRequest,
  responseType: api_v0alpha_org_pb.AssignUsersP3PermissionGroupResponse
};

Org.AddLoginToUser = {
  methodName: "AddLoginToUser",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.AddLoginToUserRequest,
  responseType: api_v0alpha_org_pb.AddLoginToUserResponse
};

Org.RevokeUsersP3PermissionGroup = {
  methodName: "RevokeUsersP3PermissionGroup",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.RevokeUsersP3PermissionGroupRequest,
  responseType: api_v0alpha_org_pb.RevokeUsersP3PermissionGroupResponse
};

Org.GetContactPreferences = {
  methodName: "GetContactPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetContactPreferencesRequest,
  responseType: api_v0alpha_org_pb.GetContactPreferencesResponse
};

Org.UpdateContactPreferences = {
  methodName: "UpdateContactPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateContactPreferencesRequest,
  responseType: api_v0alpha_org_pb.UpdateContactPreferencesResponse
};

Org.GetCompliancePreferences = {
  methodName: "GetCompliancePreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetCompliancePreferencesRequest,
  responseType: api_v0alpha_org_pb.GetCompliancePreferencesResponse
};

Org.UpdateCompliancePreferences = {
  methodName: "UpdateCompliancePreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateCompliancePreferencesRequest,
  responseType: api_v0alpha_org_pb.UpdateCompliancePreferencesResponse
};

Org.GetAgentPreferences = {
  methodName: "GetAgentPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetAgentPreferencesRequest,
  responseType: api_v0alpha_org_pb.GetAgentPreferencesResponse
};

Org.UpdateAgentPreferences = {
  methodName: "UpdateAgentPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateAgentPreferencesRequest,
  responseType: api_v0alpha_org_pb.UpdateAgentPreferencesResponse
};

Org.GetOrganizationPreferences = {
  methodName: "GetOrganizationPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetOrganizationPreferencesRequest,
  responseType: api_v0alpha_org_pb.GetOrganizationPreferencesResponse
};

Org.UpdateOrganizationPreferences = {
  methodName: "UpdateOrganizationPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateOrganizationPreferencesRequest,
  responseType: api_v0alpha_org_pb.UpdateOrganizationPreferencesResponse
};

Org.GetSchedulePreferences = {
  methodName: "GetSchedulePreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetSchedulePreferencesRequest,
  responseType: api_v0alpha_org_pb.GetSchedulePreferencesResponse
};

Org.UpdateSchedulePreferences = {
  methodName: "UpdateSchedulePreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateSchedulePreferencesRequest,
  responseType: api_v0alpha_org_pb.UpdateSchedulePreferencesResponse
};

Org.GetBusinessPreferences = {
  methodName: "GetBusinessPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetBusinessPreferencesRequest,
  responseType: api_v0alpha_org_pb.GetBusinessPreferencesResponse
};

Org.UpdateBusinessPreferences = {
  methodName: "UpdateBusinessPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateBusinessPreferencesRequest,
  responseType: api_v0alpha_org_pb.UpdateBusinessPreferencesResponse
};

Org.GetEndOfDayPreferences = {
  methodName: "GetEndOfDayPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetEndOfDayPreferencesRequest,
  responseType: api_v0alpha_org_pb.GetEndOfDayPreferencesResponse
};

Org.UpdateEndOfDayPreferences = {
  methodName: "UpdateEndOfDayPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateEndOfDayPreferencesRequest,
  responseType: api_v0alpha_org_pb.UpdateEndOfDayPreferencesResponse
};

Org.GetReportFilterPreferences = {
  methodName: "GetReportFilterPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetFilterPreferencesRequest,
  responseType: api_v0alpha_org_pb.GetFilterPreferencesResponse
};

Org.UpdateReportFilterPreferences = {
  methodName: "UpdateReportFilterPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateFilterPreferencesRequest,
  responseType: api_v0alpha_org_pb.UpdateFilterPreferencesResponse
};

Org.GetPhonePreferences = {
  methodName: "GetPhonePreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetPhonePreferencesRequest,
  responseType: api_v0alpha_org_pb.GetPhonePreferencesResponse
};

Org.UpdatePhonePreferences = {
  methodName: "UpdatePhonePreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdatePhonePreferencesRequest,
  responseType: api_v0alpha_org_pb.UpdatePhonePreferencesResponse
};

Org.GetDashboardGeneralPreferences = {
  methodName: "GetDashboardGeneralPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetDashboardGeneralPreferencesRequest,
  responseType: api_v0alpha_org_pb.GetDashboardGeneralPreferencesResponse
};

Org.UpdateDashboardGeneralPreferences = {
  methodName: "UpdateDashboardGeneralPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateDashboardGeneralPreferencesRequest,
  responseType: api_v0alpha_org_pb.UpdateDashboardGeneralPreferencesResponse
};

Org.GetWebhookPreferences = {
  methodName: "GetWebhookPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetWebhookPreferencesRequest,
  responseType: api_v0alpha_org_pb.GetWebhookPreferencesResponse
};

Org.UpdateWebhookPreferences = {
  methodName: "UpdateWebhookPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateWebhookPreferencesRequest,
  responseType: api_v0alpha_org_pb.UpdateWebhookPreferencesResponse
};

Org.GetBroadcastPreferences = {
  methodName: "GetBroadcastPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetBroadcastPreferencesRequest,
  responseType: api_v0alpha_org_pb.GetBroadcastPreferencesResponse
};

Org.UpdateBroadcastPreferences = {
  methodName: "UpdateBroadcastPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateBroadcastPreferencesRequest,
  responseType: api_v0alpha_org_pb.UpdateBroadcastPreferencesResponse
};

Org.GetAuthenticationPreferences = {
  methodName: "GetAuthenticationPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetAuthenticationPreferencesRequest,
  responseType: api_v0alpha_org_pb.GetAuthenticationPreferencesResponse
};

Org.UpdateAuthenticationPreferences = {
  methodName: "UpdateAuthenticationPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateAuthenticationPreferencesRequest,
  responseType: api_v0alpha_org_pb.UpdateAuthenticationPreferencesResponse
};

Org.GetRecordingPreferences = {
  methodName: "GetRecordingPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetRecordingPreferencesRequest,
  responseType: api_v0alpha_org_pb.GetRecordingPreferencesResponse
};

Org.UpdateRecordingPreferences = {
  methodName: "UpdateRecordingPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateRecordingPreferencesRequest,
  responseType: api_v0alpha_org_pb.UpdateRecordingPreferencesResponse
};

Org.GetDashboardQueuePreferences = {
  methodName: "GetDashboardQueuePreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetDashboardQueuePreferencesRequest,
  responseType: api_v0alpha_org_pb.GetDashboardQueuePreferencesResponse
};

Org.UpdateDashboardQueuePreferences = {
  methodName: "UpdateDashboardQueuePreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateDashboardQueuePreferencesRequest,
  responseType: api_v0alpha_org_pb.UpdateDashboardQueuePreferencesResponse
};

Org.GetAgentQuickViewPreferences = {
  methodName: "GetAgentQuickViewPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetAgentQuickViewPreferencesRequest,
  responseType: api_v0alpha_org_pb.GetAgentQuickViewPreferencesResponse
};

Org.GetVoiceAnalyticsPreferences = {
  methodName: "GetVoiceAnalyticsPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetVoiceAnalyticsPreferencesRequest,
  responseType: api_v0alpha_org_pb.GetVoiceAnalyticsPreferencesResponse
};

Org.UpdateVoiceAnalyticsPreferences = {
  methodName: "UpdateVoiceAnalyticsPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateVoiceAnalyticsPreferencesRequest,
  responseType: api_v0alpha_org_pb.UpdateVoiceAnalyticsPreferencesResponse
};

Org.UpdateVoiceAnalyticsPreferencesEnabled = {
  methodName: "UpdateVoiceAnalyticsPreferencesEnabled",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateVoiceAnalyticsPreferencesEnabledRequest,
  responseType: api_v0alpha_org_pb.UpdateVoiceAnalyticsPreferencesEnabledResponse
};

Org.GetScorecardsPreferences = {
  methodName: "GetScorecardsPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetScorecardsPreferencesRequest,
  responseType: api_v0alpha_org_pb.GetScorecardsPreferencesResponse
};

Org.UpdateScorecardsPreferences = {
  methodName: "UpdateScorecardsPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateScorecardsPreferencesRequest,
  responseType: api_v0alpha_org_pb.UpdateScorecardsPreferencesResponse
};

Org.GetEmailSmsPreferences = {
  methodName: "GetEmailSmsPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetEmailSmsPreferencesRequest,
  responseType: api_v0alpha_org_pb.GetEmailSmsPreferencesResponse
};

Org.UpdateEmailSmsPreferences = {
  methodName: "UpdateEmailSmsPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateEmailSmsPreferencesRequest,
  responseType: api_v0alpha_org_pb.UpdateEmailSmsPreferencesResponse
};

Org.EditAgentQuickViewPreferences = {
  methodName: "EditAgentQuickViewPreferences",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.EditAgentQuickViewPreferencesRequest,
  responseType: api_v0alpha_org_pb.EditAgentQuickViewPreferencesResponse
};

Org.EditBackofficeThemePreference = {
  methodName: "EditBackofficeThemePreference",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.EditBackofficeThemePreferenceRequest,
  responseType: api_v0alpha_org_pb.EditBackofficeThemePreferenceResponse
};

Org.GetBackofficeThemePreference = {
  methodName: "GetBackofficeThemePreference",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetBackofficeThemePreferenceRequest,
  responseType: api_v0alpha_org_pb.GetBackofficeThemePreferenceResponse
};

Org.AcceptLinkbackRecordingTerms = {
  methodName: "AcceptLinkbackRecordingTerms",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.AcceptLinkbackRecordingTermsRequest,
  responseType: api_v0alpha_org_pb.AcceptLinkbackRecordingTermsResponse
};

Org.LinkbackUpdateBroadcastTemplates = {
  methodName: "LinkbackUpdateBroadcastTemplates",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.LinkbackUpdateBroadcastTemplatesRequest,
  responseType: api_v0alpha_org_pb.LinkbackUpdateBroadcastTemplatesResponse
};

Org.RecordEmailUnsubscribeAcknowledgement = {
  methodName: "RecordEmailUnsubscribeAcknowledgement",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.RecordEmailUnsubscribeAcknowledgementRequest,
  responseType: api_v0alpha_org_pb.RecordEmailUnsubscribeAcknowledgementResponse
};

Org.ClearEmailUnsubscribeAcknowledgement = {
  methodName: "ClearEmailUnsubscribeAcknowledgement",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.ClearEmailUnsubscribeAcknowledgementRequest,
  responseType: api_v0alpha_org_pb.ClearEmailUnsubscribeAcknowledgementResponse
};

Org.CreateWebLinkTemplate = {
  methodName: "CreateWebLinkTemplate",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.CreateWebLinkTemplateRequest,
  responseType: api_v0alpha_org_pb.CreateWebLinkTemplateResponse
};

Org.ListWebLinkTemplates = {
  methodName: "ListWebLinkTemplates",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.ListWebLinkTemplatesRequest,
  responseType: api_v0alpha_org_pb.ListWebLinkTemplatesResponse
};

Org.GetWebLinkTemplate = {
  methodName: "GetWebLinkTemplate",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetWebLinkTemplateRequest,
  responseType: api_v0alpha_org_pb.GetWebLinkTemplateResponse
};

Org.UpdateWebLinkTemplate = {
  methodName: "UpdateWebLinkTemplate",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateWebLinkTemplateRequest,
  responseType: api_v0alpha_org_pb.UpdateWebLinkTemplateResponse
};

Org.DeleteWebLinkTemplate = {
  methodName: "DeleteWebLinkTemplate",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.DeleteWebLinkTemplateRequest,
  responseType: api_v0alpha_org_pb.DeleteWebLinkTemplateResponse
};

Org.CreateAgentTriggerTemplate = {
  methodName: "CreateAgentTriggerTemplate",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.CreateAgentTriggerTemplateRequest,
  responseType: api_v0alpha_org_pb.CreateAgentTriggerTemplateResponse
};

Org.ListAgentTriggerTemplates = {
  methodName: "ListAgentTriggerTemplates",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.ListAgentTriggerTemplatesRequest,
  responseType: api_v0alpha_org_pb.ListAgentTriggerTemplatesResponse
};

Org.GetAgentTriggerTemplate = {
  methodName: "GetAgentTriggerTemplate",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetAgentTriggerTemplateRequest,
  responseType: api_v0alpha_org_pb.GetAgentTriggerTemplateResponse
};

Org.UpdateAgentTriggerTemplate = {
  methodName: "UpdateAgentTriggerTemplate",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateAgentTriggerTemplateRequest,
  responseType: api_v0alpha_org_pb.UpdateAgentTriggerTemplateResponse
};

Org.DeleteAgentTriggerTemplate = {
  methodName: "DeleteAgentTriggerTemplate",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.DeleteAgentTriggerTemplateRequest,
  responseType: api_v0alpha_org_pb.DeleteAgentTriggerTemplateResponse
};

Org.CreateClientInfoDisplayTemplate = {
  methodName: "CreateClientInfoDisplayTemplate",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.CreateClientInfoDisplayTemplateRequest,
  responseType: api_v0alpha_org_pb.CreateClientInfoDisplayTemplateResponse
};

Org.ListClientInfoDisplayTemplates = {
  methodName: "ListClientInfoDisplayTemplates",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.ListClientInfoDisplayTemplatesRequest,
  responseType: api_v0alpha_org_pb.ListClientInfoDisplayTemplatesResponse
};

Org.UpdateClientInfoDisplayTemplate = {
  methodName: "UpdateClientInfoDisplayTemplate",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateClientInfoDisplayTemplateRequest,
  responseType: api_v0alpha_org_pb.UpdateClientInfoDisplayTemplateResponse
};

Org.DeleteClientInfoDisplayTemplate = {
  methodName: "DeleteClientInfoDisplayTemplate",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.DeleteClientInfoDisplayTemplateRequest,
  responseType: api_v0alpha_org_pb.DeleteClientInfoDisplayTemplateResponse
};

Org.GetClientInfoDisplayTemplate = {
  methodName: "GetClientInfoDisplayTemplate",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetClientInfoDisplayTemplateRequest,
  responseType: api_v0alpha_org_pb.GetClientInfoDisplayTemplateResponse
};

Org.ListAgentPauseCodes = {
  methodName: "ListAgentPauseCodes",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.ListAgentPauseCodesRequest,
  responseType: api_v0alpha_org_pb.ListAgentPauseCodesResponse
};

Org.CreateAgentPauseCode = {
  methodName: "CreateAgentPauseCode",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.CreateAgentPauseCodeRequest,
  responseType: api_v0alpha_org_pb.CreateAgentPauseCodeResponse
};

Org.UpdateAgentPauseCode = {
  methodName: "UpdateAgentPauseCode",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateAgentPauseCodeRequest,
  responseType: api_v0alpha_org_pb.UpdateAgentPauseCodeResponse
};

Org.DeleteAgentPauseCode = {
  methodName: "DeleteAgentPauseCode",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.DeleteAgentPauseCodeRequest,
  responseType: api_v0alpha_org_pb.DeleteAgentPauseCodeResponse
};

Org.ListCustomReportFilters = {
  methodName: "ListCustomReportFilters",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.ListCustomReportFiltersRequest,
  responseType: api_v0alpha_org_pb.ListCustomReportFiltersResponse
};

Org.CreateCustomReportFilter = {
  methodName: "CreateCustomReportFilter",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.CreateCustomReportFilterRequest,
  responseType: api_v0alpha_org_pb.CreateCustomReportFilterResponse
};

Org.UpdateCustomReportFilter = {
  methodName: "UpdateCustomReportFilter",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateCustomReportFilterRequest,
  responseType: api_v0alpha_org_pb.UpdateCustomReportFilterResponse
};

Org.DeleteCustomReportFilter = {
  methodName: "DeleteCustomReportFilter",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.DeleteCustomReportFilterRequest,
  responseType: api_v0alpha_org_pb.DeleteCustomReportFilterResponse
};

Org.ListAgentResponseGroups = {
  methodName: "ListAgentResponseGroups",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.ListAgentResponseGroupsRequest,
  responseType: api_v0alpha_org_pb.ListAgentResponseGroupsResponse
};

Org.ListLastTemplateElements = {
  methodName: "ListLastTemplateElements",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.ListLastTemplateElementsRequest,
  responseType: api_v0alpha_org_pb.ListLastTemplateElementsResponse
};

Org.ListQueueConfigs = {
  methodName: "ListQueueConfigs",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.ListQueueConfigsReq,
  responseType: api_v0alpha_org_pb.ListQueueConfigsRes
};

Org.DeleteQueueConfig = {
  methodName: "DeleteQueueConfig",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.DeleteQueueConfigReq,
  responseType: api_v0alpha_org_pb.DeleteQueueConfigRes
};

Org.GetQueueConfig = {
  methodName: "GetQueueConfig",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetQueueConfigReq,
  responseType: api_v0alpha_org_pb.GetQueueConfigRes
};

Org.CreateQueueConfig = {
  methodName: "CreateQueueConfig",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.CreateQueueConfigReq,
  responseType: api_v0alpha_org_pb.CreateQueueConfigRes
};

Org.UpdateQueueConfig = {
  methodName: "UpdateQueueConfig",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateQueueConfigReq,
  responseType: api_v0alpha_org_pb.UpdateQueueConfigRes
};

Org.CopyQueueConfig = {
  methodName: "CopyQueueConfig",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.CopyQueueConfigReq,
  responseType: api_v0alpha_org_pb.CopyQueueConfigRes
};

Org.GetAllQueueConfigSounds = {
  methodName: "GetAllQueueConfigSounds",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetAllQueueConfigSoundsReq,
  responseType: api_v0alpha_org_pb.GetAllQueueConfigSoundsRes
};

Org.GetQueueConfigSound = {
  methodName: "GetQueueConfigSound",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetQueueConfigSoundReq,
  responseType: api_v0alpha_org_pb.GetQueueConfigSoundRes
};

Org.SetQueueConfigSound = {
  methodName: "SetQueueConfigSound",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.SetQueueConfigSoundReq,
  responseType: api_v0alpha_org_pb.SetQueueConfigSoundRes
};

Org.SetAllQueueConfigSoundsFromSource = {
  methodName: "SetAllQueueConfigSoundsFromSource",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.SetAllQueueConfigSoundsFromSourceReq,
  responseType: api_v0alpha_org_pb.SetAllQueueConfigSoundsFromSourceRes
};

Org.GetUserBlocked = {
  methodName: "GetUserBlocked",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetUserBlockedRequest,
  responseType: api_v0alpha_org_pb.GetUserBlockedResponse
};

Org.UnblockUser = {
  methodName: "UnblockUser",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UnblockUserRequest,
  responseType: api_v0alpha_org_pb.UnblockUserResponse
};

Org.ListP3UnMigratedUsers = {
  methodName: "ListP3UnMigratedUsers",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.ListP3UnMigratedUsersRequest,
  responseType: api_v0alpha_org_pb.ListP3UnMigratedUsersResponse
};

Org.MigrateP3User = {
  methodName: "MigrateP3User",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.MigrateP3UserRequest,
  responseType: api_v0alpha_org_pb.MigrateP3UserResponse
};

Org.UpdateP3UserName = {
  methodName: "UpdateP3UserName",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateP3UserNameRequest,
  responseType: api_v0alpha_org_pb.UpdateP3UserNameResponse
};

Org.ListOwnedUsers = {
  methodName: "ListOwnedUsers",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.ListOwnedUsersRequest,
  responseType: api_v0alpha_org_pb.ListOwnedUsersResponse
};

Org.ListOwnedOrgsByOrgId = {
  methodName: "ListOwnedOrgsByOrgId",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.ListOwnedOrgsByOrgIdRequest,
  responseType: api_v0alpha_org_pb.ListOwnedOrgsByOrgIdResponse
};

Org.ListOwnedOrgs = {
  methodName: "ListOwnedOrgs",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.ListOwnedOrgsRequest,
  responseType: api_v0alpha_org_pb.ListOwnedOrgsResponse
};

Org.RemoveLoginStrikes = {
  methodName: "RemoveLoginStrikes",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.RemoveLoginStrikesRequest,
  responseType: api_v0alpha_org_pb.RemoveLoginStrikesResponse
};

Org.RemoveUserLoginStrikes = {
  methodName: "RemoveUserLoginStrikes",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.RemoveUserLoginStrikesRequest,
  responseType: api_v0alpha_org_pb.RemoveUserLoginStrikesResponse
};

Org.ListLoginHistory = {
  methodName: "ListLoginHistory",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.ListLoginHistoryRequest,
  responseType: api_v0alpha_org_pb.ListLoginHistoryResponse
};

Org.UpdateP3UserSids = {
  methodName: "UpdateP3UserSids",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateP3UserSidsRequest,
  responseType: api_v0alpha_org_pb.UpdateP3UserSidsResponse
};

Org.CreateAuthConnection = {
  methodName: "CreateAuthConnection",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.CreateAuthConnectionRequest,
  responseType: api_v0alpha_org_pb.CreateAuthConnectionResponse
};

Org.GetAuthConnectionSettings = {
  methodName: "GetAuthConnectionSettings",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetAuthConnectionSettingsRequest,
  responseType: api_v0alpha_org_pb.GetAuthConnectionSettingsResponse
};

Org.UpdateAuthConnectionSettings = {
  methodName: "UpdateAuthConnectionSettings",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateAuthConnectionSettingsRequest,
  responseType: api_v0alpha_org_pb.UpdateAuthConnectionSettingsResponse
};

Org.DeleteAuthConnection = {
  methodName: "DeleteAuthConnection",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.DeleteAuthConnectionRequest,
  responseType: api_v0alpha_org_pb.DeleteAuthConnectionResponse
};

Org.GetUserSubscription = {
  methodName: "GetUserSubscription",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetUserSubscriptionRequest,
  responseType: api_v0alpha_org_pb.GetUserSubscriptionResponse
};

Org.AddUserSubscription = {
  methodName: "AddUserSubscription",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.AddUserSubscriptionRequest,
  responseType: api_v0alpha_org_pb.AddUserSubscriptionResponse
};

Org.RemoveUserSubscription = {
  methodName: "RemoveUserSubscription",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.RemoveUserSubscriptionRequest,
  responseType: api_v0alpha_org_pb.RemoveUserSubscriptionResponse
};

Org.RemoveMyUserSubscription = {
  methodName: "RemoveMyUserSubscription",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.RemoveMyUserSubscriptionRequest,
  responseType: api_v0alpha_org_pb.RemoveMyUserSubscriptionResponse
};

Org.UpdateUserSubscription = {
  methodName: "UpdateUserSubscription",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateUserSubscriptionRequest,
  responseType: api_v0alpha_org_pb.UpdateUserSubscriptionResponse
};

Org.ListUserSubscriptions = {
  methodName: "ListUserSubscriptions",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.ListUserSubscriptionsRequest,
  responseType: api_v0alpha_org_pb.ListUserSubscriptionsResponse
};

Org.ListOrgSubscriptions = {
  methodName: "ListOrgSubscriptions",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.ListOrgSubscriptionsRequest,
  responseType: api_v0alpha_org_pb.ListOrgSubscriptionsResponse
};

Org.GetSystemEnvironmentDetails = {
  methodName: "GetSystemEnvironmentDetails",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.GetSystemEnvironmentDetailsRequest,
  responseType: api_v0alpha_org_pb.GetSystemEnvironmentDetailsResponse
};

Org.ListAgentStatisticsTemplates = {
  methodName: "ListAgentStatisticsTemplates",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.ListAgentStatisticsTemplatesRequest,
  responseType: api_v0alpha_org_pb.ListAgentStatisticsTemplatesResponse
};

Org.CreateAgentStatisticsTemplate = {
  methodName: "CreateAgentStatisticsTemplate",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.CreateAgentStatisticsTemplateRequest,
  responseType: api_v0alpha_org_pb.CreateAgentStatisticsTemplateResponse
};

Org.UpdateAgentStatisticsTemplate = {
  methodName: "UpdateAgentStatisticsTemplate",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.UpdateAgentStatisticsTemplateRequest,
  responseType: api_v0alpha_org_pb.UpdateAgentStatisticsTemplateResponse
};

Org.DeleteAgentStatisticsTemplate = {
  methodName: "DeleteAgentStatisticsTemplate",
  service: Org,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_org_pb.DeleteAgentStatisticsTemplateRequest,
  responseType: api_v0alpha_org_pb.DeleteAgentStatisticsTemplateResponse
};

exports.Org = Org;

function OrgClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

OrgClient.prototype.registerOrganization = function registerOrganization(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.RegisterOrganization, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
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

OrgClient.prototype.listArchivedOrganizations = function listArchivedOrganizations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListArchivedOrganizations, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.getOrganizationProfile = function getOrganizationProfile(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetOrganizationProfile, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.getOrganizationProfileById = function getOrganizationProfileById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetOrganizationProfileById, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.listOrganizationDescriptions = function listOrganizationDescriptions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListOrganizationDescriptions, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.listRegionalOrganizations = function listRegionalOrganizations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListRegionalOrganizations, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.updateP3OwningOrg = function updateP3OwningOrg(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateP3OwningOrg, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.getP3OwningOrg = function getP3OwningOrg(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetP3OwningOrg, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.listOrganizationUserDescriptions = function listOrganizationUserDescriptions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListOrganizationUserDescriptions, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.adminListUserDescriptions = function adminListUserDescriptions(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Org.AdminListUserDescriptions, {
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

OrgClient.prototype.listUserDescriptions = function listUserDescriptions(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Org.ListUserDescriptions, {
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

OrgClient.prototype.getUserDirectory = function getUserDirectory(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetUserDirectory, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.getRegions = function getRegions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetRegions, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.getMyUserDetails = function getMyUserDetails(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetMyUserDetails, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.getUserDetails = function getUserDetails(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetUserDetails, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.adminGetUserDetails = function adminGetUserDetails(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.AdminGetUserDetails, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.getAgentUsers = function getAgentUsers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetAgentUsers, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.getAgentSettings = function getAgentSettings(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetAgentSettings, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
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

OrgClient.prototype.updateUserByUserId = function updateUserByUserId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateUserByUserId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.updateUserByCallerId = function updateUserByCallerId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateUserByCallerId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
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

OrgClient.prototype.createUserByOrgId = function createUserByOrgId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.CreateUserByOrgId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
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

OrgClient.prototype.updateMyUserPassword = function updateMyUserPassword(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateMyUserPassword, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.updateUserPasswordByUserId = function updateUserPasswordByUserId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateUserPasswordByUserId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.updateUserPasswordByOrgId = function updateUserPasswordByOrgId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateUserPasswordByOrgId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.resetUserRequirePasswordReset = function resetUserRequirePasswordReset(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ResetUserRequirePasswordReset, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
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

OrgClient.prototype.getUserPasswordResetLinkByUserId = function getUserPasswordResetLinkByUserId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetUserPasswordResetLinkByUserId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
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

OrgClient.prototype.sendUserVerificationEmailByOrgId = function sendUserVerificationEmailByOrgId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.SendUserVerificationEmailByOrgId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.sendUserVerificationEmail = function sendUserVerificationEmail(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.SendUserVerificationEmail, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.manualUserEmailVerificationByOrgId = function manualUserEmailVerificationByOrgId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ManualUserEmailVerificationByOrgId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.manualUserEmailVerification = function manualUserEmailVerification(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ManualUserEmailVerification, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.getMyTempUserToken = function getMyTempUserToken(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetMyTempUserToken, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.getTempUserTokenByUserId = function getTempUserTokenByUserId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetTempUserTokenByUserId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.getCountriesList = function getCountriesList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetCountriesList, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
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

OrgClient.prototype.updateBulkUsersDisabled = function updateBulkUsersDisabled(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateBulkUsersDisabled, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.getOrgBillingSettingsByOrgId = function getOrgBillingSettingsByOrgId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetOrgBillingSettingsByOrgId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.getOrgBillingSettings = function getOrgBillingSettings(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetOrgBillingSettings, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.setOrgBillingSettings = function setOrgBillingSettings(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.SetOrgBillingSettings, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.addOrgBillingOverride = function addOrgBillingOverride(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.AddOrgBillingOverride, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.removeOrgBillingOverride = function removeOrgBillingOverride(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.RemoveOrgBillingOverride, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.getSystemDefaultBillingRates = function getSystemDefaultBillingRates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetSystemDefaultBillingRates, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
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

OrgClient.prototype.assignUserToAccountOwnerPermissionGroup = function assignUserToAccountOwnerPermissionGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.AssignUserToAccountOwnerPermissionGroup, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.assignUserPermissionGroup = function assignUserPermissionGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.AssignUserPermissionGroup, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
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

OrgClient.prototype.updateUserNeoPermissionGroups = function updateUserNeoPermissionGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateUserNeoPermissionGroups, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.revokeUserPermissionGroup = function revokeUserPermissionGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.RevokeUserPermissionGroup, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
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

OrgClient.prototype.addPermissionToAccountOwnerPermissionGroup = function addPermissionToAccountOwnerPermissionGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.AddPermissionToAccountOwnerPermissionGroup, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.revokePermissionToAccountOwnerPermissionGroup = function revokePermissionToAccountOwnerPermissionGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.RevokePermissionToAccountOwnerPermissionGroup, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.addPermissionToOrgDefaultGroup = function addPermissionToOrgDefaultGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.AddPermissionToOrgDefaultGroup, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.removePermissionFromOrgDefaultGroup = function removePermissionFromOrgDefaultGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.RemovePermissionFromOrgDefaultGroup, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.getOrgDefaultSuperUserGroup = function getOrgDefaultSuperUserGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetOrgDefaultSuperUserGroup, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
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

OrgClient.prototype.addUserRegion = function addUserRegion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.AddUserRegion, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.removeUserRegion = function removeUserRegion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.RemoveUserRegion, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
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

OrgClient.prototype.addLoginToUser = function addLoginToUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.AddLoginToUser, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
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

OrgClient.prototype.getAgentQuickViewPreferences = function getAgentQuickViewPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetAgentQuickViewPreferences, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
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

OrgClient.prototype.updateVoiceAnalyticsPreferencesEnabled = function updateVoiceAnalyticsPreferencesEnabled(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateVoiceAnalyticsPreferencesEnabled, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
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

OrgClient.prototype.editAgentQuickViewPreferences = function editAgentQuickViewPreferences(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.EditAgentQuickViewPreferences, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.editBackofficeThemePreference = function editBackofficeThemePreference(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.EditBackofficeThemePreference, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.getBackofficeThemePreference = function getBackofficeThemePreference(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetBackofficeThemePreference, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
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

OrgClient.prototype.createWebLinkTemplate = function createWebLinkTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.CreateWebLinkTemplate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.listWebLinkTemplates = function listWebLinkTemplates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListWebLinkTemplates, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.getWebLinkTemplate = function getWebLinkTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetWebLinkTemplate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.updateWebLinkTemplate = function updateWebLinkTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateWebLinkTemplate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.deleteWebLinkTemplate = function deleteWebLinkTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.DeleteWebLinkTemplate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.createAgentTriggerTemplate = function createAgentTriggerTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.CreateAgentTriggerTemplate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.listAgentTriggerTemplates = function listAgentTriggerTemplates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListAgentTriggerTemplates, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.getAgentTriggerTemplate = function getAgentTriggerTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetAgentTriggerTemplate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.updateAgentTriggerTemplate = function updateAgentTriggerTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateAgentTriggerTemplate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.deleteAgentTriggerTemplate = function deleteAgentTriggerTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.DeleteAgentTriggerTemplate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.createClientInfoDisplayTemplate = function createClientInfoDisplayTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.CreateClientInfoDisplayTemplate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.listClientInfoDisplayTemplates = function listClientInfoDisplayTemplates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListClientInfoDisplayTemplates, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.updateClientInfoDisplayTemplate = function updateClientInfoDisplayTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateClientInfoDisplayTemplate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.deleteClientInfoDisplayTemplate = function deleteClientInfoDisplayTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.DeleteClientInfoDisplayTemplate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.getClientInfoDisplayTemplate = function getClientInfoDisplayTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetClientInfoDisplayTemplate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.listAgentPauseCodes = function listAgentPauseCodes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListAgentPauseCodes, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.createAgentPauseCode = function createAgentPauseCode(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.CreateAgentPauseCode, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.updateAgentPauseCode = function updateAgentPauseCode(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateAgentPauseCode, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.deleteAgentPauseCode = function deleteAgentPauseCode(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.DeleteAgentPauseCode, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.listCustomReportFilters = function listCustomReportFilters(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListCustomReportFilters, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.createCustomReportFilter = function createCustomReportFilter(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.CreateCustomReportFilter, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.updateCustomReportFilter = function updateCustomReportFilter(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateCustomReportFilter, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.deleteCustomReportFilter = function deleteCustomReportFilter(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.DeleteCustomReportFilter, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.listAgentResponseGroups = function listAgentResponseGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListAgentResponseGroups, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.listLastTemplateElements = function listLastTemplateElements(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListLastTemplateElements, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.listQueueConfigs = function listQueueConfigs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListQueueConfigs, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.deleteQueueConfig = function deleteQueueConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.DeleteQueueConfig, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.getQueueConfig = function getQueueConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetQueueConfig, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.createQueueConfig = function createQueueConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.CreateQueueConfig, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.updateQueueConfig = function updateQueueConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateQueueConfig, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.copyQueueConfig = function copyQueueConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.CopyQueueConfig, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.getAllQueueConfigSounds = function getAllQueueConfigSounds(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetAllQueueConfigSounds, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.getQueueConfigSound = function getQueueConfigSound(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetQueueConfigSound, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.setQueueConfigSound = function setQueueConfigSound(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.SetQueueConfigSound, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.setAllQueueConfigSoundsFromSource = function setAllQueueConfigSoundsFromSource(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.SetAllQueueConfigSoundsFromSource, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.getUserBlocked = function getUserBlocked(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetUserBlocked, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.unblockUser = function unblockUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UnblockUser, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.listP3UnMigratedUsers = function listP3UnMigratedUsers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListP3UnMigratedUsers, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.migrateP3User = function migrateP3User(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.MigrateP3User, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.updateP3UserName = function updateP3UserName(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateP3UserName, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.listOwnedUsers = function listOwnedUsers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListOwnedUsers, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.listOwnedOrgsByOrgId = function listOwnedOrgsByOrgId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListOwnedOrgsByOrgId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.listOwnedOrgs = function listOwnedOrgs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListOwnedOrgs, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.removeLoginStrikes = function removeLoginStrikes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.RemoveLoginStrikes, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.removeUserLoginStrikes = function removeUserLoginStrikes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.RemoveUserLoginStrikes, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.listLoginHistory = function listLoginHistory(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListLoginHistory, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.updateP3UserSids = function updateP3UserSids(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateP3UserSids, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.createAuthConnection = function createAuthConnection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.CreateAuthConnection, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.getAuthConnectionSettings = function getAuthConnectionSettings(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetAuthConnectionSettings, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.updateAuthConnectionSettings = function updateAuthConnectionSettings(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateAuthConnectionSettings, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.deleteAuthConnection = function deleteAuthConnection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.DeleteAuthConnection, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
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

OrgClient.prototype.removeMyUserSubscription = function removeMyUserSubscription(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.RemoveMyUserSubscription, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
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

OrgClient.prototype.getSystemEnvironmentDetails = function getSystemEnvironmentDetails(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.GetSystemEnvironmentDetails, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.listAgentStatisticsTemplates = function listAgentStatisticsTemplates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.ListAgentStatisticsTemplates, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.createAgentStatisticsTemplate = function createAgentStatisticsTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.CreateAgentStatisticsTemplate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.updateAgentStatisticsTemplate = function updateAgentStatisticsTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.UpdateAgentStatisticsTemplate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrgClient.prototype.deleteAgentStatisticsTemplate = function deleteAgentStatisticsTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Org.DeleteAgentStatisticsTemplate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
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

