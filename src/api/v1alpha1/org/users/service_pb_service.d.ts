// package: api.v1alpha1.org.users
// file: api/v1alpha1/org/users/service.proto

import * as api_v1alpha1_org_users_service_pb from "../../../../api/v1alpha1/org/users/service_pb";
import * as api_v1alpha1_org_users_agent_profile_group_pb from "../../../../api/v1alpha1/org/users/agent_profile_group_pb";
import * as api_v1alpha1_org_users_auth_token_pb from "../../../../api/v1alpha1/org/users/auth_token_pb";
import * as api_v1alpha1_org_users_notifications_pb from "../../../../api/v1alpha1/org/users/notifications_pb";
import * as api_v1alpha1_org_users_users_pb from "../../../../api/v1alpha1/org/users/users_pb";
import {grpc} from "@improbable-eng/grpc-web";

type UsersServiceCreateUser = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.CreateUserRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.CreateUserResponse;
};

type UsersServiceCreateDelegatedUser = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.CreateDelegatedUserRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.CreateDelegatedUserResponse;
};

type UsersServiceGetMyUser = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.GetMyUserRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.GetMyUserResponse;
};

type UsersServiceGetUser = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.GetUserRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.GetUserResponse;
};

type UsersServiceGetUserByOrgId = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.GetUserByOrgIdRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.GetUserByOrgIdResponse;
};

type UsersServiceListAgents = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.ListAgentsRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.ListAgentsResponse;
};

type UsersServiceListPublicUsers = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.ListPublicUsersRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.ListPublicUsersResponse;
};

type UsersServiceListUsers = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.ListUsersRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.ListUsersResponse;
};

type UsersServiceListUsersByOrgId = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.ListUsersByOrgIdRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.ListUsersByOrgIdResponse;
};

type UsersServiceListUsersByRegion = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.ListUsersByRegionRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.ListUsersByRegionResponse;
};

type UsersServiceUpdateMyUser = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.UpdateMyUserRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.UpdateMyUserResponse;
};

type UsersServiceUpdateUser = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.UpdateUserRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.UpdateUserResponse;
};

type UsersServiceUpdateUserLabels = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.UpdateUserLabelsRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.UpdateUserLabelsResponse;
};

type UsersServiceUpdateUserCallerId = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.UpdateUserCallerIdRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.UpdateUserCallerIdResponse;
};

type UsersServiceUpdateUserDisabled = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.UpdateUserDisabledRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.UpdateUserDisabledResponse;
};

type UsersServiceUpdateUserDisabledByOrgId = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.UpdateUserDisabledByOrgIdRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.UpdateUserDisabledByOrgIdResponse;
};

type UsersServiceGetMyUserPasswordResetLink = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.GetMyUserPasswordResetLinkRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.GetMyUserPasswordResetLinkResponse;
};

type UsersServiceGetUserPasswordResetLink = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.GetUserPasswordResetLinkRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.GetUserPasswordResetLinkResponse;
};

type UsersServiceGetUserPasswordResetLinkByOrgId = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.GetUserPasswordResetLinkByOrgIdRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.GetUserPasswordResetLinkByOrgIdResponse;
};

type UsersServiceCreatePasswordResetLink = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.CreatePasswordResetLinkRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.CreatePasswordResetLinkResponse;
};

type UsersServiceCreatePasswordResetLinkByOrgId = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.CreatePasswordResetLinkByOrgIdRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.CreatePasswordResetLinkByOrgIdResponse;
};

type UsersServiceGetUserLoginInfo = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.GetUserLoginInfoRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.GetUserLoginInfoResponse;
};

type UsersServiceGetUserEmailVerified = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.GetUserEmailVerifiedRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.GetUserEmailVerifiedResponse;
};

type UsersServiceGetUserEmailVerifiedByOrgId = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.GetUserEmailVerifiedByOrgIdRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.GetUserEmailVerifiedByOrgIdResponse;
};

type UsersServiceResetMyPassword = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.ResetMyPasswordRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.ResetMyPasswordResponse;
};

type UsersServiceResetUserPassword = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.ResetUserPasswordRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.ResetUserPasswordResponse;
};

type UsersServiceResetUserPasswordByOrgId = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.ResetUserPasswordByOrgIdRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.ResetUserPasswordByOrgIdResponse;
};

type UsersServiceSendUserEmailVerification = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.SendUserEmailVerificationRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.SendUserEmailVerificationResponse;
};

type UsersServiceSendUserEmailVerificationByOrgId = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.SendUserEmailVerificationByOrgIdRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.SendUserEmailVerificationByOrgIdResponse;
};

type UsersServiceSendPasswordReset = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.SendPasswordResetRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.SendPasswordResetResponse;
};

type UsersServiceSendPasswordResetByOrgId = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.SendPasswordResetByOrgIdRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.SendPasswordResetByOrgIdResponse;
};

type UsersServiceGetUserSessionData = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.GetUserSessionDataRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.GetUserSessionDataResponse;
};

type UsersServiceGetAgentProfileGroup = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_agent_profile_group_pb.GetAgentProfileGroupRequest;
  readonly responseType: typeof api_v1alpha1_org_users_agent_profile_group_pb.GetAgentProfileGroupResponse;
};

type UsersServiceListAgentProfileGroups = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_agent_profile_group_pb.ListAgentProfileGroupsRequest;
  readonly responseType: typeof api_v1alpha1_org_users_agent_profile_group_pb.ListAgentProfileGroupsResponse;
};

type UsersServiceUpdateAgentProfileGroup = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_agent_profile_group_pb.UpdateAgentProfileGroupRequest;
  readonly responseType: typeof api_v1alpha1_org_users_agent_profile_group_pb.UpdateAgentProfileGroupResponse;
};

type UsersServiceCreateAgentProfileGroup = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_agent_profile_group_pb.CreateAgentProfileGroupRequest;
  readonly responseType: typeof api_v1alpha1_org_users_agent_profile_group_pb.CreateAgentProfileGroupResponse;
};

type UsersServiceDeleteAgentProfileGroup = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_agent_profile_group_pb.DeleteAgentProfileGroupRequest;
  readonly responseType: typeof api_v1alpha1_org_users_agent_profile_group_pb.DeleteAgentProfileGroupResponse;
};

type UsersServiceAssignAgentProfileGroups = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_agent_profile_group_pb.AssignAgentProfileGroupsRequest;
  readonly responseType: typeof api_v1alpha1_org_users_agent_profile_group_pb.AssignAgentProfileGroupsResponse;
};

type UsersServiceAddUserSubscription = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_notifications_pb.AddUserSubscriptionRequest;
  readonly responseType: typeof api_v1alpha1_org_users_notifications_pb.AddUserSubscriptionResponse;
};

type UsersServiceAddUserSubscriptionByUserId = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_notifications_pb.AddUserSubscriptionByUserIdRequest;
  readonly responseType: typeof api_v1alpha1_org_users_notifications_pb.AddUserSubscriptionByUserIdResponse;
};

type UsersServiceGetUserSubscription = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_notifications_pb.GetUserSubscriptionRequest;
  readonly responseType: typeof api_v1alpha1_org_users_notifications_pb.GetUserSubscriptionResponse;
};

type UsersServiceGetUserSubscriptionByUserId = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_notifications_pb.GetUserSubscriptionByUserIdRequest;
  readonly responseType: typeof api_v1alpha1_org_users_notifications_pb.GetUserSubscriptionByUserIdResponse;
};

type UsersServiceUpdateUserSubscription = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_notifications_pb.UpdateUserSubscriptionRequest;
  readonly responseType: typeof api_v1alpha1_org_users_notifications_pb.UpdateUserSubscriptionResponse;
};

type UsersServiceUpdateUserSubscriptionByUserId = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_notifications_pb.UpdateUserSubscriptionByUserIdRequest;
  readonly responseType: typeof api_v1alpha1_org_users_notifications_pb.UpdateUserSubscriptionByUserIdResponse;
};

type UsersServiceRemoveUserSubscription = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_notifications_pb.RemoveUserSubscriptionRequest;
  readonly responseType: typeof api_v1alpha1_org_users_notifications_pb.RemoveUserSubscriptionResponse;
};

type UsersServiceRemoveUserSubscriptionByUserId = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_notifications_pb.RemoveUserSubscriptionByUserIdRequest;
  readonly responseType: typeof api_v1alpha1_org_users_notifications_pb.RemoveUserSubscriptionByUserIdResponse;
};

type UsersServiceListUserSubscriptions = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_notifications_pb.ListUserSubscriptionsRequest;
  readonly responseType: typeof api_v1alpha1_org_users_notifications_pb.ListUserSubscriptionsResponse;
};

type UsersServiceListUserSubscriptionsByUserId = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_notifications_pb.ListUserSubscriptionsByUserIdRequest;
  readonly responseType: typeof api_v1alpha1_org_users_notifications_pb.ListUserSubscriptionsByUserIdResponse;
};

type UsersServiceListOrgSubscriptions = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_notifications_pb.ListOrgSubscriptionsRequest;
  readonly responseType: typeof api_v1alpha1_org_users_notifications_pb.ListOrgSubscriptionsResponse;
};

type UsersServiceCreateAuthToken = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_auth_token_pb.CreateAuthTokenRequest;
  readonly responseType: typeof api_v1alpha1_org_users_auth_token_pb.CreateAuthTokenResponse;
};

type UsersServiceCreateAuthTokenByUserId = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_auth_token_pb.CreateAuthTokenByUserIdRequest;
  readonly responseType: typeof api_v1alpha1_org_users_auth_token_pb.CreateAuthTokenByUserIdResponse;
};

type UsersServiceListAuthTokens = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_auth_token_pb.ListAuthTokensRequest;
  readonly responseType: typeof api_v1alpha1_org_users_auth_token_pb.ListAuthTokensResponse;
};

type UsersServiceListAuthTokensByUserId = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_auth_token_pb.ListAuthTokensByUserIdRequest;
  readonly responseType: typeof api_v1alpha1_org_users_auth_token_pb.ListAuthTokensByUserIdResponse;
};

type UsersServiceSetAuthTokenExpiration = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_auth_token_pb.SetAuthTokenExpirationRequest;
  readonly responseType: typeof api_v1alpha1_org_users_auth_token_pb.SetAuthTokenExpirationResponse;
};

type UsersServiceSetAuthTokenExpirationByUserId = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_auth_token_pb.SetAuthTokenExpirationByUserIdRequest;
  readonly responseType: typeof api_v1alpha1_org_users_auth_token_pb.SetAuthTokenExpirationByUserIdResponse;
};

type UsersServiceDeleteAuthToken = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_auth_token_pb.DeleteAuthTokenRequest;
  readonly responseType: typeof api_v1alpha1_org_users_auth_token_pb.DeleteAuthTokenResponse;
};

type UsersServiceDeleteAuthTokenByUserId = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_auth_token_pb.DeleteAuthTokenByUserIdRequest;
  readonly responseType: typeof api_v1alpha1_org_users_auth_token_pb.DeleteAuthTokenByUserIdResponse;
};

type UsersServiceRefreshMfaLockout = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.RefreshMfaLockoutRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.RefreshMfaLockoutResponse;
};

type UsersServiceRefreshMfaLockoutByOrgId = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.RefreshMfaLockoutByOrgIdRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.RefreshMfaLockoutByOrgIdResponse;
};

type UsersServiceSetMfaType = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.SetMfaTypeRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.SetMfaTypeResponse;
};

type UsersServiceSetMyMfaType = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.SetMyMfaTypeRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.SetMyMfaTypeResponse;
};

type UsersServiceEnableUserMfa = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.EnableUserMfaRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.EnableUserMfaResponse;
};

type UsersServiceEnableMyUserMfa = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.EnableMyUserMfaRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.EnableMyUserMfaResponse;
};

type UsersServiceGetUserMfaInfo = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.GetUserMfaInfoRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.GetUserMfaInfoResponse;
};

type UsersServiceGetMyUserMfaInfo = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.GetMyUserMfaInfoRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.GetMyUserMfaInfoResponse;
};

type UsersServiceAddGroupedUserIPRestrictions = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.AddGroupedUserIPRestrictionsRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.AddGroupedUserIPRestrictionsResponse;
};

type UsersServiceRemoveGroupedUserIPRestrictions = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.RemoveGroupedUserIPRestrictionsRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.RemoveGroupedUserIPRestrictionsResponse;
};

type UsersServiceListUsersAllowedIps = {
  readonly methodName: string;
  readonly service: typeof UsersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v1alpha1_org_users_users_pb.ListUsersAllowedIpsRequest;
  readonly responseType: typeof api_v1alpha1_org_users_users_pb.ListUsersAllowedIpsResponse;
};

export class UsersService {
  static readonly serviceName: string;
  static readonly CreateUser: UsersServiceCreateUser;
  static readonly CreateDelegatedUser: UsersServiceCreateDelegatedUser;
  static readonly GetMyUser: UsersServiceGetMyUser;
  static readonly GetUser: UsersServiceGetUser;
  static readonly GetUserByOrgId: UsersServiceGetUserByOrgId;
  static readonly ListAgents: UsersServiceListAgents;
  static readonly ListPublicUsers: UsersServiceListPublicUsers;
  static readonly ListUsers: UsersServiceListUsers;
  static readonly ListUsersByOrgId: UsersServiceListUsersByOrgId;
  static readonly ListUsersByRegion: UsersServiceListUsersByRegion;
  static readonly UpdateMyUser: UsersServiceUpdateMyUser;
  static readonly UpdateUser: UsersServiceUpdateUser;
  static readonly UpdateUserLabels: UsersServiceUpdateUserLabels;
  static readonly UpdateUserCallerId: UsersServiceUpdateUserCallerId;
  static readonly UpdateUserDisabled: UsersServiceUpdateUserDisabled;
  static readonly UpdateUserDisabledByOrgId: UsersServiceUpdateUserDisabledByOrgId;
  static readonly GetMyUserPasswordResetLink: UsersServiceGetMyUserPasswordResetLink;
  static readonly GetUserPasswordResetLink: UsersServiceGetUserPasswordResetLink;
  static readonly GetUserPasswordResetLinkByOrgId: UsersServiceGetUserPasswordResetLinkByOrgId;
  static readonly CreatePasswordResetLink: UsersServiceCreatePasswordResetLink;
  static readonly CreatePasswordResetLinkByOrgId: UsersServiceCreatePasswordResetLinkByOrgId;
  static readonly GetUserLoginInfo: UsersServiceGetUserLoginInfo;
  static readonly GetUserEmailVerified: UsersServiceGetUserEmailVerified;
  static readonly GetUserEmailVerifiedByOrgId: UsersServiceGetUserEmailVerifiedByOrgId;
  static readonly ResetMyPassword: UsersServiceResetMyPassword;
  static readonly ResetUserPassword: UsersServiceResetUserPassword;
  static readonly ResetUserPasswordByOrgId: UsersServiceResetUserPasswordByOrgId;
  static readonly SendUserEmailVerification: UsersServiceSendUserEmailVerification;
  static readonly SendUserEmailVerificationByOrgId: UsersServiceSendUserEmailVerificationByOrgId;
  static readonly SendPasswordReset: UsersServiceSendPasswordReset;
  static readonly SendPasswordResetByOrgId: UsersServiceSendPasswordResetByOrgId;
  static readonly GetUserSessionData: UsersServiceGetUserSessionData;
  static readonly GetAgentProfileGroup: UsersServiceGetAgentProfileGroup;
  static readonly ListAgentProfileGroups: UsersServiceListAgentProfileGroups;
  static readonly UpdateAgentProfileGroup: UsersServiceUpdateAgentProfileGroup;
  static readonly CreateAgentProfileGroup: UsersServiceCreateAgentProfileGroup;
  static readonly DeleteAgentProfileGroup: UsersServiceDeleteAgentProfileGroup;
  static readonly AssignAgentProfileGroups: UsersServiceAssignAgentProfileGroups;
  static readonly AddUserSubscription: UsersServiceAddUserSubscription;
  static readonly AddUserSubscriptionByUserId: UsersServiceAddUserSubscriptionByUserId;
  static readonly GetUserSubscription: UsersServiceGetUserSubscription;
  static readonly GetUserSubscriptionByUserId: UsersServiceGetUserSubscriptionByUserId;
  static readonly UpdateUserSubscription: UsersServiceUpdateUserSubscription;
  static readonly UpdateUserSubscriptionByUserId: UsersServiceUpdateUserSubscriptionByUserId;
  static readonly RemoveUserSubscription: UsersServiceRemoveUserSubscription;
  static readonly RemoveUserSubscriptionByUserId: UsersServiceRemoveUserSubscriptionByUserId;
  static readonly ListUserSubscriptions: UsersServiceListUserSubscriptions;
  static readonly ListUserSubscriptionsByUserId: UsersServiceListUserSubscriptionsByUserId;
  static readonly ListOrgSubscriptions: UsersServiceListOrgSubscriptions;
  static readonly CreateAuthToken: UsersServiceCreateAuthToken;
  static readonly CreateAuthTokenByUserId: UsersServiceCreateAuthTokenByUserId;
  static readonly ListAuthTokens: UsersServiceListAuthTokens;
  static readonly ListAuthTokensByUserId: UsersServiceListAuthTokensByUserId;
  static readonly SetAuthTokenExpiration: UsersServiceSetAuthTokenExpiration;
  static readonly SetAuthTokenExpirationByUserId: UsersServiceSetAuthTokenExpirationByUserId;
  static readonly DeleteAuthToken: UsersServiceDeleteAuthToken;
  static readonly DeleteAuthTokenByUserId: UsersServiceDeleteAuthTokenByUserId;
  static readonly RefreshMfaLockout: UsersServiceRefreshMfaLockout;
  static readonly RefreshMfaLockoutByOrgId: UsersServiceRefreshMfaLockoutByOrgId;
  static readonly SetMfaType: UsersServiceSetMfaType;
  static readonly SetMyMfaType: UsersServiceSetMyMfaType;
  static readonly EnableUserMfa: UsersServiceEnableUserMfa;
  static readonly EnableMyUserMfa: UsersServiceEnableMyUserMfa;
  static readonly GetUserMfaInfo: UsersServiceGetUserMfaInfo;
  static readonly GetMyUserMfaInfo: UsersServiceGetMyUserMfaInfo;
  static readonly AddGroupedUserIPRestrictions: UsersServiceAddGroupedUserIPRestrictions;
  static readonly RemoveGroupedUserIPRestrictions: UsersServiceRemoveGroupedUserIPRestrictions;
  static readonly ListUsersAllowedIps: UsersServiceListUsersAllowedIps;
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

export class UsersServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createUser(
    requestMessage: api_v1alpha1_org_users_users_pb.CreateUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.CreateUserResponse|null) => void
  ): UnaryResponse;
  createUser(
    requestMessage: api_v1alpha1_org_users_users_pb.CreateUserRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.CreateUserResponse|null) => void
  ): UnaryResponse;
  createDelegatedUser(
    requestMessage: api_v1alpha1_org_users_users_pb.CreateDelegatedUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.CreateDelegatedUserResponse|null) => void
  ): UnaryResponse;
  createDelegatedUser(
    requestMessage: api_v1alpha1_org_users_users_pb.CreateDelegatedUserRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.CreateDelegatedUserResponse|null) => void
  ): UnaryResponse;
  getMyUser(
    requestMessage: api_v1alpha1_org_users_users_pb.GetMyUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.GetMyUserResponse|null) => void
  ): UnaryResponse;
  getMyUser(
    requestMessage: api_v1alpha1_org_users_users_pb.GetMyUserRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.GetMyUserResponse|null) => void
  ): UnaryResponse;
  getUser(
    requestMessage: api_v1alpha1_org_users_users_pb.GetUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.GetUserResponse|null) => void
  ): UnaryResponse;
  getUser(
    requestMessage: api_v1alpha1_org_users_users_pb.GetUserRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.GetUserResponse|null) => void
  ): UnaryResponse;
  getUserByOrgId(
    requestMessage: api_v1alpha1_org_users_users_pb.GetUserByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.GetUserByOrgIdResponse|null) => void
  ): UnaryResponse;
  getUserByOrgId(
    requestMessage: api_v1alpha1_org_users_users_pb.GetUserByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.GetUserByOrgIdResponse|null) => void
  ): UnaryResponse;
  listAgents(requestMessage: api_v1alpha1_org_users_users_pb.ListAgentsRequest, metadata?: grpc.Metadata): ResponseStream<api_v1alpha1_org_users_users_pb.ListAgentsResponse>;
  listPublicUsers(requestMessage: api_v1alpha1_org_users_users_pb.ListPublicUsersRequest, metadata?: grpc.Metadata): ResponseStream<api_v1alpha1_org_users_users_pb.ListPublicUsersResponse>;
  listUsers(requestMessage: api_v1alpha1_org_users_users_pb.ListUsersRequest, metadata?: grpc.Metadata): ResponseStream<api_v1alpha1_org_users_users_pb.ListUsersResponse>;
  listUsersByOrgId(requestMessage: api_v1alpha1_org_users_users_pb.ListUsersByOrgIdRequest, metadata?: grpc.Metadata): ResponseStream<api_v1alpha1_org_users_users_pb.ListUsersByOrgIdResponse>;
  listUsersByRegion(requestMessage: api_v1alpha1_org_users_users_pb.ListUsersByRegionRequest, metadata?: grpc.Metadata): ResponseStream<api_v1alpha1_org_users_users_pb.ListUsersByRegionResponse>;
  updateMyUser(
    requestMessage: api_v1alpha1_org_users_users_pb.UpdateMyUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.UpdateMyUserResponse|null) => void
  ): UnaryResponse;
  updateMyUser(
    requestMessage: api_v1alpha1_org_users_users_pb.UpdateMyUserRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.UpdateMyUserResponse|null) => void
  ): UnaryResponse;
  updateUser(
    requestMessage: api_v1alpha1_org_users_users_pb.UpdateUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.UpdateUserResponse|null) => void
  ): UnaryResponse;
  updateUser(
    requestMessage: api_v1alpha1_org_users_users_pb.UpdateUserRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.UpdateUserResponse|null) => void
  ): UnaryResponse;
  updateUserLabels(
    requestMessage: api_v1alpha1_org_users_users_pb.UpdateUserLabelsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.UpdateUserLabelsResponse|null) => void
  ): UnaryResponse;
  updateUserLabels(
    requestMessage: api_v1alpha1_org_users_users_pb.UpdateUserLabelsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.UpdateUserLabelsResponse|null) => void
  ): UnaryResponse;
  updateUserCallerId(
    requestMessage: api_v1alpha1_org_users_users_pb.UpdateUserCallerIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.UpdateUserCallerIdResponse|null) => void
  ): UnaryResponse;
  updateUserCallerId(
    requestMessage: api_v1alpha1_org_users_users_pb.UpdateUserCallerIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.UpdateUserCallerIdResponse|null) => void
  ): UnaryResponse;
  updateUserDisabled(
    requestMessage: api_v1alpha1_org_users_users_pb.UpdateUserDisabledRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.UpdateUserDisabledResponse|null) => void
  ): UnaryResponse;
  updateUserDisabled(
    requestMessage: api_v1alpha1_org_users_users_pb.UpdateUserDisabledRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.UpdateUserDisabledResponse|null) => void
  ): UnaryResponse;
  updateUserDisabledByOrgId(
    requestMessage: api_v1alpha1_org_users_users_pb.UpdateUserDisabledByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.UpdateUserDisabledByOrgIdResponse|null) => void
  ): UnaryResponse;
  updateUserDisabledByOrgId(
    requestMessage: api_v1alpha1_org_users_users_pb.UpdateUserDisabledByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.UpdateUserDisabledByOrgIdResponse|null) => void
  ): UnaryResponse;
  getMyUserPasswordResetLink(
    requestMessage: api_v1alpha1_org_users_users_pb.GetMyUserPasswordResetLinkRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.GetMyUserPasswordResetLinkResponse|null) => void
  ): UnaryResponse;
  getMyUserPasswordResetLink(
    requestMessage: api_v1alpha1_org_users_users_pb.GetMyUserPasswordResetLinkRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.GetMyUserPasswordResetLinkResponse|null) => void
  ): UnaryResponse;
  getUserPasswordResetLink(
    requestMessage: api_v1alpha1_org_users_users_pb.GetUserPasswordResetLinkRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.GetUserPasswordResetLinkResponse|null) => void
  ): UnaryResponse;
  getUserPasswordResetLink(
    requestMessage: api_v1alpha1_org_users_users_pb.GetUserPasswordResetLinkRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.GetUserPasswordResetLinkResponse|null) => void
  ): UnaryResponse;
  getUserPasswordResetLinkByOrgId(
    requestMessage: api_v1alpha1_org_users_users_pb.GetUserPasswordResetLinkByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.GetUserPasswordResetLinkByOrgIdResponse|null) => void
  ): UnaryResponse;
  getUserPasswordResetLinkByOrgId(
    requestMessage: api_v1alpha1_org_users_users_pb.GetUserPasswordResetLinkByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.GetUserPasswordResetLinkByOrgIdResponse|null) => void
  ): UnaryResponse;
  createPasswordResetLink(
    requestMessage: api_v1alpha1_org_users_users_pb.CreatePasswordResetLinkRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.CreatePasswordResetLinkResponse|null) => void
  ): UnaryResponse;
  createPasswordResetLink(
    requestMessage: api_v1alpha1_org_users_users_pb.CreatePasswordResetLinkRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.CreatePasswordResetLinkResponse|null) => void
  ): UnaryResponse;
  createPasswordResetLinkByOrgId(
    requestMessage: api_v1alpha1_org_users_users_pb.CreatePasswordResetLinkByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.CreatePasswordResetLinkByOrgIdResponse|null) => void
  ): UnaryResponse;
  createPasswordResetLinkByOrgId(
    requestMessage: api_v1alpha1_org_users_users_pb.CreatePasswordResetLinkByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.CreatePasswordResetLinkByOrgIdResponse|null) => void
  ): UnaryResponse;
  getUserLoginInfo(
    requestMessage: api_v1alpha1_org_users_users_pb.GetUserLoginInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.GetUserLoginInfoResponse|null) => void
  ): UnaryResponse;
  getUserLoginInfo(
    requestMessage: api_v1alpha1_org_users_users_pb.GetUserLoginInfoRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.GetUserLoginInfoResponse|null) => void
  ): UnaryResponse;
  getUserEmailVerified(
    requestMessage: api_v1alpha1_org_users_users_pb.GetUserEmailVerifiedRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.GetUserEmailVerifiedResponse|null) => void
  ): UnaryResponse;
  getUserEmailVerified(
    requestMessage: api_v1alpha1_org_users_users_pb.GetUserEmailVerifiedRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.GetUserEmailVerifiedResponse|null) => void
  ): UnaryResponse;
  getUserEmailVerifiedByOrgId(
    requestMessage: api_v1alpha1_org_users_users_pb.GetUserEmailVerifiedByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.GetUserEmailVerifiedByOrgIdResponse|null) => void
  ): UnaryResponse;
  getUserEmailVerifiedByOrgId(
    requestMessage: api_v1alpha1_org_users_users_pb.GetUserEmailVerifiedByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.GetUserEmailVerifiedByOrgIdResponse|null) => void
  ): UnaryResponse;
  resetMyPassword(
    requestMessage: api_v1alpha1_org_users_users_pb.ResetMyPasswordRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.ResetMyPasswordResponse|null) => void
  ): UnaryResponse;
  resetMyPassword(
    requestMessage: api_v1alpha1_org_users_users_pb.ResetMyPasswordRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.ResetMyPasswordResponse|null) => void
  ): UnaryResponse;
  resetUserPassword(
    requestMessage: api_v1alpha1_org_users_users_pb.ResetUserPasswordRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.ResetUserPasswordResponse|null) => void
  ): UnaryResponse;
  resetUserPassword(
    requestMessage: api_v1alpha1_org_users_users_pb.ResetUserPasswordRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.ResetUserPasswordResponse|null) => void
  ): UnaryResponse;
  resetUserPasswordByOrgId(
    requestMessage: api_v1alpha1_org_users_users_pb.ResetUserPasswordByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.ResetUserPasswordByOrgIdResponse|null) => void
  ): UnaryResponse;
  resetUserPasswordByOrgId(
    requestMessage: api_v1alpha1_org_users_users_pb.ResetUserPasswordByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.ResetUserPasswordByOrgIdResponse|null) => void
  ): UnaryResponse;
  sendUserEmailVerification(
    requestMessage: api_v1alpha1_org_users_users_pb.SendUserEmailVerificationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.SendUserEmailVerificationResponse|null) => void
  ): UnaryResponse;
  sendUserEmailVerification(
    requestMessage: api_v1alpha1_org_users_users_pb.SendUserEmailVerificationRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.SendUserEmailVerificationResponse|null) => void
  ): UnaryResponse;
  sendUserEmailVerificationByOrgId(
    requestMessage: api_v1alpha1_org_users_users_pb.SendUserEmailVerificationByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.SendUserEmailVerificationByOrgIdResponse|null) => void
  ): UnaryResponse;
  sendUserEmailVerificationByOrgId(
    requestMessage: api_v1alpha1_org_users_users_pb.SendUserEmailVerificationByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.SendUserEmailVerificationByOrgIdResponse|null) => void
  ): UnaryResponse;
  sendPasswordReset(
    requestMessage: api_v1alpha1_org_users_users_pb.SendPasswordResetRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.SendPasswordResetResponse|null) => void
  ): UnaryResponse;
  sendPasswordReset(
    requestMessage: api_v1alpha1_org_users_users_pb.SendPasswordResetRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.SendPasswordResetResponse|null) => void
  ): UnaryResponse;
  sendPasswordResetByOrgId(
    requestMessage: api_v1alpha1_org_users_users_pb.SendPasswordResetByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.SendPasswordResetByOrgIdResponse|null) => void
  ): UnaryResponse;
  sendPasswordResetByOrgId(
    requestMessage: api_v1alpha1_org_users_users_pb.SendPasswordResetByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.SendPasswordResetByOrgIdResponse|null) => void
  ): UnaryResponse;
  getUserSessionData(
    requestMessage: api_v1alpha1_org_users_users_pb.GetUserSessionDataRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.GetUserSessionDataResponse|null) => void
  ): UnaryResponse;
  getUserSessionData(
    requestMessage: api_v1alpha1_org_users_users_pb.GetUserSessionDataRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.GetUserSessionDataResponse|null) => void
  ): UnaryResponse;
  getAgentProfileGroup(
    requestMessage: api_v1alpha1_org_users_agent_profile_group_pb.GetAgentProfileGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_agent_profile_group_pb.GetAgentProfileGroupResponse|null) => void
  ): UnaryResponse;
  getAgentProfileGroup(
    requestMessage: api_v1alpha1_org_users_agent_profile_group_pb.GetAgentProfileGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_agent_profile_group_pb.GetAgentProfileGroupResponse|null) => void
  ): UnaryResponse;
  listAgentProfileGroups(
    requestMessage: api_v1alpha1_org_users_agent_profile_group_pb.ListAgentProfileGroupsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_agent_profile_group_pb.ListAgentProfileGroupsResponse|null) => void
  ): UnaryResponse;
  listAgentProfileGroups(
    requestMessage: api_v1alpha1_org_users_agent_profile_group_pb.ListAgentProfileGroupsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_agent_profile_group_pb.ListAgentProfileGroupsResponse|null) => void
  ): UnaryResponse;
  updateAgentProfileGroup(
    requestMessage: api_v1alpha1_org_users_agent_profile_group_pb.UpdateAgentProfileGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_agent_profile_group_pb.UpdateAgentProfileGroupResponse|null) => void
  ): UnaryResponse;
  updateAgentProfileGroup(
    requestMessage: api_v1alpha1_org_users_agent_profile_group_pb.UpdateAgentProfileGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_agent_profile_group_pb.UpdateAgentProfileGroupResponse|null) => void
  ): UnaryResponse;
  createAgentProfileGroup(
    requestMessage: api_v1alpha1_org_users_agent_profile_group_pb.CreateAgentProfileGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_agent_profile_group_pb.CreateAgentProfileGroupResponse|null) => void
  ): UnaryResponse;
  createAgentProfileGroup(
    requestMessage: api_v1alpha1_org_users_agent_profile_group_pb.CreateAgentProfileGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_agent_profile_group_pb.CreateAgentProfileGroupResponse|null) => void
  ): UnaryResponse;
  deleteAgentProfileGroup(
    requestMessage: api_v1alpha1_org_users_agent_profile_group_pb.DeleteAgentProfileGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_agent_profile_group_pb.DeleteAgentProfileGroupResponse|null) => void
  ): UnaryResponse;
  deleteAgentProfileGroup(
    requestMessage: api_v1alpha1_org_users_agent_profile_group_pb.DeleteAgentProfileGroupRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_agent_profile_group_pb.DeleteAgentProfileGroupResponse|null) => void
  ): UnaryResponse;
  assignAgentProfileGroups(
    requestMessage: api_v1alpha1_org_users_agent_profile_group_pb.AssignAgentProfileGroupsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_agent_profile_group_pb.AssignAgentProfileGroupsResponse|null) => void
  ): UnaryResponse;
  assignAgentProfileGroups(
    requestMessage: api_v1alpha1_org_users_agent_profile_group_pb.AssignAgentProfileGroupsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_agent_profile_group_pb.AssignAgentProfileGroupsResponse|null) => void
  ): UnaryResponse;
  addUserSubscription(
    requestMessage: api_v1alpha1_org_users_notifications_pb.AddUserSubscriptionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_notifications_pb.AddUserSubscriptionResponse|null) => void
  ): UnaryResponse;
  addUserSubscription(
    requestMessage: api_v1alpha1_org_users_notifications_pb.AddUserSubscriptionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_notifications_pb.AddUserSubscriptionResponse|null) => void
  ): UnaryResponse;
  addUserSubscriptionByUserId(
    requestMessage: api_v1alpha1_org_users_notifications_pb.AddUserSubscriptionByUserIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_notifications_pb.AddUserSubscriptionByUserIdResponse|null) => void
  ): UnaryResponse;
  addUserSubscriptionByUserId(
    requestMessage: api_v1alpha1_org_users_notifications_pb.AddUserSubscriptionByUserIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_notifications_pb.AddUserSubscriptionByUserIdResponse|null) => void
  ): UnaryResponse;
  getUserSubscription(
    requestMessage: api_v1alpha1_org_users_notifications_pb.GetUserSubscriptionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_notifications_pb.GetUserSubscriptionResponse|null) => void
  ): UnaryResponse;
  getUserSubscription(
    requestMessage: api_v1alpha1_org_users_notifications_pb.GetUserSubscriptionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_notifications_pb.GetUserSubscriptionResponse|null) => void
  ): UnaryResponse;
  getUserSubscriptionByUserId(
    requestMessage: api_v1alpha1_org_users_notifications_pb.GetUserSubscriptionByUserIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_notifications_pb.GetUserSubscriptionByUserIdResponse|null) => void
  ): UnaryResponse;
  getUserSubscriptionByUserId(
    requestMessage: api_v1alpha1_org_users_notifications_pb.GetUserSubscriptionByUserIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_notifications_pb.GetUserSubscriptionByUserIdResponse|null) => void
  ): UnaryResponse;
  updateUserSubscription(
    requestMessage: api_v1alpha1_org_users_notifications_pb.UpdateUserSubscriptionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_notifications_pb.UpdateUserSubscriptionResponse|null) => void
  ): UnaryResponse;
  updateUserSubscription(
    requestMessage: api_v1alpha1_org_users_notifications_pb.UpdateUserSubscriptionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_notifications_pb.UpdateUserSubscriptionResponse|null) => void
  ): UnaryResponse;
  updateUserSubscriptionByUserId(
    requestMessage: api_v1alpha1_org_users_notifications_pb.UpdateUserSubscriptionByUserIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_notifications_pb.UpdateUserSubscriptionByUserIdResponse|null) => void
  ): UnaryResponse;
  updateUserSubscriptionByUserId(
    requestMessage: api_v1alpha1_org_users_notifications_pb.UpdateUserSubscriptionByUserIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_notifications_pb.UpdateUserSubscriptionByUserIdResponse|null) => void
  ): UnaryResponse;
  removeUserSubscription(
    requestMessage: api_v1alpha1_org_users_notifications_pb.RemoveUserSubscriptionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_notifications_pb.RemoveUserSubscriptionResponse|null) => void
  ): UnaryResponse;
  removeUserSubscription(
    requestMessage: api_v1alpha1_org_users_notifications_pb.RemoveUserSubscriptionRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_notifications_pb.RemoveUserSubscriptionResponse|null) => void
  ): UnaryResponse;
  removeUserSubscriptionByUserId(
    requestMessage: api_v1alpha1_org_users_notifications_pb.RemoveUserSubscriptionByUserIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_notifications_pb.RemoveUserSubscriptionByUserIdResponse|null) => void
  ): UnaryResponse;
  removeUserSubscriptionByUserId(
    requestMessage: api_v1alpha1_org_users_notifications_pb.RemoveUserSubscriptionByUserIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_notifications_pb.RemoveUserSubscriptionByUserIdResponse|null) => void
  ): UnaryResponse;
  listUserSubscriptions(
    requestMessage: api_v1alpha1_org_users_notifications_pb.ListUserSubscriptionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_notifications_pb.ListUserSubscriptionsResponse|null) => void
  ): UnaryResponse;
  listUserSubscriptions(
    requestMessage: api_v1alpha1_org_users_notifications_pb.ListUserSubscriptionsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_notifications_pb.ListUserSubscriptionsResponse|null) => void
  ): UnaryResponse;
  listUserSubscriptionsByUserId(
    requestMessage: api_v1alpha1_org_users_notifications_pb.ListUserSubscriptionsByUserIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_notifications_pb.ListUserSubscriptionsByUserIdResponse|null) => void
  ): UnaryResponse;
  listUserSubscriptionsByUserId(
    requestMessage: api_v1alpha1_org_users_notifications_pb.ListUserSubscriptionsByUserIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_notifications_pb.ListUserSubscriptionsByUserIdResponse|null) => void
  ): UnaryResponse;
  listOrgSubscriptions(
    requestMessage: api_v1alpha1_org_users_notifications_pb.ListOrgSubscriptionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_notifications_pb.ListOrgSubscriptionsResponse|null) => void
  ): UnaryResponse;
  listOrgSubscriptions(
    requestMessage: api_v1alpha1_org_users_notifications_pb.ListOrgSubscriptionsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_notifications_pb.ListOrgSubscriptionsResponse|null) => void
  ): UnaryResponse;
  createAuthToken(
    requestMessage: api_v1alpha1_org_users_auth_token_pb.CreateAuthTokenRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_auth_token_pb.CreateAuthTokenResponse|null) => void
  ): UnaryResponse;
  createAuthToken(
    requestMessage: api_v1alpha1_org_users_auth_token_pb.CreateAuthTokenRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_auth_token_pb.CreateAuthTokenResponse|null) => void
  ): UnaryResponse;
  createAuthTokenByUserId(
    requestMessage: api_v1alpha1_org_users_auth_token_pb.CreateAuthTokenByUserIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_auth_token_pb.CreateAuthTokenByUserIdResponse|null) => void
  ): UnaryResponse;
  createAuthTokenByUserId(
    requestMessage: api_v1alpha1_org_users_auth_token_pb.CreateAuthTokenByUserIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_auth_token_pb.CreateAuthTokenByUserIdResponse|null) => void
  ): UnaryResponse;
  listAuthTokens(
    requestMessage: api_v1alpha1_org_users_auth_token_pb.ListAuthTokensRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_auth_token_pb.ListAuthTokensResponse|null) => void
  ): UnaryResponse;
  listAuthTokens(
    requestMessage: api_v1alpha1_org_users_auth_token_pb.ListAuthTokensRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_auth_token_pb.ListAuthTokensResponse|null) => void
  ): UnaryResponse;
  listAuthTokensByUserId(
    requestMessage: api_v1alpha1_org_users_auth_token_pb.ListAuthTokensByUserIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_auth_token_pb.ListAuthTokensByUserIdResponse|null) => void
  ): UnaryResponse;
  listAuthTokensByUserId(
    requestMessage: api_v1alpha1_org_users_auth_token_pb.ListAuthTokensByUserIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_auth_token_pb.ListAuthTokensByUserIdResponse|null) => void
  ): UnaryResponse;
  setAuthTokenExpiration(
    requestMessage: api_v1alpha1_org_users_auth_token_pb.SetAuthTokenExpirationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_auth_token_pb.SetAuthTokenExpirationResponse|null) => void
  ): UnaryResponse;
  setAuthTokenExpiration(
    requestMessage: api_v1alpha1_org_users_auth_token_pb.SetAuthTokenExpirationRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_auth_token_pb.SetAuthTokenExpirationResponse|null) => void
  ): UnaryResponse;
  setAuthTokenExpirationByUserId(
    requestMessage: api_v1alpha1_org_users_auth_token_pb.SetAuthTokenExpirationByUserIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_auth_token_pb.SetAuthTokenExpirationByUserIdResponse|null) => void
  ): UnaryResponse;
  setAuthTokenExpirationByUserId(
    requestMessage: api_v1alpha1_org_users_auth_token_pb.SetAuthTokenExpirationByUserIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_auth_token_pb.SetAuthTokenExpirationByUserIdResponse|null) => void
  ): UnaryResponse;
  deleteAuthToken(
    requestMessage: api_v1alpha1_org_users_auth_token_pb.DeleteAuthTokenRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_auth_token_pb.DeleteAuthTokenResponse|null) => void
  ): UnaryResponse;
  deleteAuthToken(
    requestMessage: api_v1alpha1_org_users_auth_token_pb.DeleteAuthTokenRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_auth_token_pb.DeleteAuthTokenResponse|null) => void
  ): UnaryResponse;
  deleteAuthTokenByUserId(
    requestMessage: api_v1alpha1_org_users_auth_token_pb.DeleteAuthTokenByUserIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_auth_token_pb.DeleteAuthTokenByUserIdResponse|null) => void
  ): UnaryResponse;
  deleteAuthTokenByUserId(
    requestMessage: api_v1alpha1_org_users_auth_token_pb.DeleteAuthTokenByUserIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_auth_token_pb.DeleteAuthTokenByUserIdResponse|null) => void
  ): UnaryResponse;
  refreshMfaLockout(
    requestMessage: api_v1alpha1_org_users_users_pb.RefreshMfaLockoutRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.RefreshMfaLockoutResponse|null) => void
  ): UnaryResponse;
  refreshMfaLockout(
    requestMessage: api_v1alpha1_org_users_users_pb.RefreshMfaLockoutRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.RefreshMfaLockoutResponse|null) => void
  ): UnaryResponse;
  refreshMfaLockoutByOrgId(
    requestMessage: api_v1alpha1_org_users_users_pb.RefreshMfaLockoutByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.RefreshMfaLockoutByOrgIdResponse|null) => void
  ): UnaryResponse;
  refreshMfaLockoutByOrgId(
    requestMessage: api_v1alpha1_org_users_users_pb.RefreshMfaLockoutByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.RefreshMfaLockoutByOrgIdResponse|null) => void
  ): UnaryResponse;
  setMfaType(
    requestMessage: api_v1alpha1_org_users_users_pb.SetMfaTypeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.SetMfaTypeResponse|null) => void
  ): UnaryResponse;
  setMfaType(
    requestMessage: api_v1alpha1_org_users_users_pb.SetMfaTypeRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.SetMfaTypeResponse|null) => void
  ): UnaryResponse;
  setMyMfaType(
    requestMessage: api_v1alpha1_org_users_users_pb.SetMyMfaTypeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.SetMyMfaTypeResponse|null) => void
  ): UnaryResponse;
  setMyMfaType(
    requestMessage: api_v1alpha1_org_users_users_pb.SetMyMfaTypeRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.SetMyMfaTypeResponse|null) => void
  ): UnaryResponse;
  enableUserMfa(
    requestMessage: api_v1alpha1_org_users_users_pb.EnableUserMfaRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.EnableUserMfaResponse|null) => void
  ): UnaryResponse;
  enableUserMfa(
    requestMessage: api_v1alpha1_org_users_users_pb.EnableUserMfaRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.EnableUserMfaResponse|null) => void
  ): UnaryResponse;
  enableMyUserMfa(
    requestMessage: api_v1alpha1_org_users_users_pb.EnableMyUserMfaRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.EnableMyUserMfaResponse|null) => void
  ): UnaryResponse;
  enableMyUserMfa(
    requestMessage: api_v1alpha1_org_users_users_pb.EnableMyUserMfaRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.EnableMyUserMfaResponse|null) => void
  ): UnaryResponse;
  getUserMfaInfo(
    requestMessage: api_v1alpha1_org_users_users_pb.GetUserMfaInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.GetUserMfaInfoResponse|null) => void
  ): UnaryResponse;
  getUserMfaInfo(
    requestMessage: api_v1alpha1_org_users_users_pb.GetUserMfaInfoRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.GetUserMfaInfoResponse|null) => void
  ): UnaryResponse;
  getMyUserMfaInfo(
    requestMessage: api_v1alpha1_org_users_users_pb.GetMyUserMfaInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.GetMyUserMfaInfoResponse|null) => void
  ): UnaryResponse;
  getMyUserMfaInfo(
    requestMessage: api_v1alpha1_org_users_users_pb.GetMyUserMfaInfoRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.GetMyUserMfaInfoResponse|null) => void
  ): UnaryResponse;
  addGroupedUserIPRestrictions(
    requestMessage: api_v1alpha1_org_users_users_pb.AddGroupedUserIPRestrictionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.AddGroupedUserIPRestrictionsResponse|null) => void
  ): UnaryResponse;
  addGroupedUserIPRestrictions(
    requestMessage: api_v1alpha1_org_users_users_pb.AddGroupedUserIPRestrictionsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.AddGroupedUserIPRestrictionsResponse|null) => void
  ): UnaryResponse;
  removeGroupedUserIPRestrictions(
    requestMessage: api_v1alpha1_org_users_users_pb.RemoveGroupedUserIPRestrictionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.RemoveGroupedUserIPRestrictionsResponse|null) => void
  ): UnaryResponse;
  removeGroupedUserIPRestrictions(
    requestMessage: api_v1alpha1_org_users_users_pb.RemoveGroupedUserIPRestrictionsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.RemoveGroupedUserIPRestrictionsResponse|null) => void
  ): UnaryResponse;
  listUsersAllowedIps(
    requestMessage: api_v1alpha1_org_users_users_pb.ListUsersAllowedIpsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.ListUsersAllowedIpsResponse|null) => void
  ): UnaryResponse;
  listUsersAllowedIps(
    requestMessage: api_v1alpha1_org_users_users_pb.ListUsersAllowedIpsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v1alpha1_org_users_users_pb.ListUsersAllowedIpsResponse|null) => void
  ): UnaryResponse;
}

