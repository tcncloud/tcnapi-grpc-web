// package: api.v1alpha1.org.users
// file: api/v1alpha1/org/users/service.proto

var api_v1alpha1_org_users_service_pb = require("../../../../api/v1alpha1/org/users/service_pb");
var api_v1alpha1_org_users_agent_profile_group_pb = require("../../../../api/v1alpha1/org/users/agent_profile_group_pb");
var api_v1alpha1_org_users_auth_token_pb = require("../../../../api/v1alpha1/org/users/auth_token_pb");
var api_v1alpha1_org_users_notifications_pb = require("../../../../api/v1alpha1/org/users/notifications_pb");
var api_v1alpha1_org_users_users_pb = require("../../../../api/v1alpha1/org/users/users_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var UsersService = (function () {
  function UsersService() {}
  UsersService.serviceName = "api.v1alpha1.org.users.UsersService";
  return UsersService;
}());

UsersService.CreateUser = {
  methodName: "CreateUser",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.CreateUserRequest,
  responseType: api_v1alpha1_org_users_users_pb.CreateUserResponse
};

UsersService.CreateDelegatedUser = {
  methodName: "CreateDelegatedUser",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.CreateDelegatedUserRequest,
  responseType: api_v1alpha1_org_users_users_pb.CreateDelegatedUserResponse
};

UsersService.GetMyUser = {
  methodName: "GetMyUser",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.GetMyUserRequest,
  responseType: api_v1alpha1_org_users_users_pb.GetMyUserResponse
};

UsersService.GetUser = {
  methodName: "GetUser",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.GetUserRequest,
  responseType: api_v1alpha1_org_users_users_pb.GetUserResponse
};

UsersService.GetUserByOrgId = {
  methodName: "GetUserByOrgId",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.GetUserByOrgIdRequest,
  responseType: api_v1alpha1_org_users_users_pb.GetUserByOrgIdResponse
};

UsersService.ListAgents = {
  methodName: "ListAgents",
  service: UsersService,
  requestStream: false,
  responseStream: true,
  requestType: api_v1alpha1_org_users_users_pb.ListAgentsRequest,
  responseType: api_v1alpha1_org_users_users_pb.ListAgentsResponse
};

UsersService.ListPublicUsers = {
  methodName: "ListPublicUsers",
  service: UsersService,
  requestStream: false,
  responseStream: true,
  requestType: api_v1alpha1_org_users_users_pb.ListPublicUsersRequest,
  responseType: api_v1alpha1_org_users_users_pb.ListPublicUsersResponse
};

UsersService.ListUsers = {
  methodName: "ListUsers",
  service: UsersService,
  requestStream: false,
  responseStream: true,
  requestType: api_v1alpha1_org_users_users_pb.ListUsersRequest,
  responseType: api_v1alpha1_org_users_users_pb.ListUsersResponse
};

UsersService.ListUsersByOrgId = {
  methodName: "ListUsersByOrgId",
  service: UsersService,
  requestStream: false,
  responseStream: true,
  requestType: api_v1alpha1_org_users_users_pb.ListUsersByOrgIdRequest,
  responseType: api_v1alpha1_org_users_users_pb.ListUsersByOrgIdResponse
};

UsersService.ListUsersByRegion = {
  methodName: "ListUsersByRegion",
  service: UsersService,
  requestStream: false,
  responseStream: true,
  requestType: api_v1alpha1_org_users_users_pb.ListUsersByRegionRequest,
  responseType: api_v1alpha1_org_users_users_pb.ListUsersByRegionResponse
};

UsersService.UpdateMyUser = {
  methodName: "UpdateMyUser",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.UpdateMyUserRequest,
  responseType: api_v1alpha1_org_users_users_pb.UpdateMyUserResponse
};

UsersService.UpdateUser = {
  methodName: "UpdateUser",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.UpdateUserRequest,
  responseType: api_v1alpha1_org_users_users_pb.UpdateUserResponse
};

UsersService.UpdateUserLabels = {
  methodName: "UpdateUserLabels",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.UpdateUserLabelsRequest,
  responseType: api_v1alpha1_org_users_users_pb.UpdateUserLabelsResponse
};

UsersService.UpdateUserCallerId = {
  methodName: "UpdateUserCallerId",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.UpdateUserCallerIdRequest,
  responseType: api_v1alpha1_org_users_users_pb.UpdateUserCallerIdResponse
};

UsersService.UpdateUserDisabled = {
  methodName: "UpdateUserDisabled",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.UpdateUserDisabledRequest,
  responseType: api_v1alpha1_org_users_users_pb.UpdateUserDisabledResponse
};

UsersService.UpdateUserDisabledByOrgId = {
  methodName: "UpdateUserDisabledByOrgId",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.UpdateUserDisabledByOrgIdRequest,
  responseType: api_v1alpha1_org_users_users_pb.UpdateUserDisabledByOrgIdResponse
};

UsersService.GetMyUserPasswordResetLink = {
  methodName: "GetMyUserPasswordResetLink",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.GetMyUserPasswordResetLinkRequest,
  responseType: api_v1alpha1_org_users_users_pb.GetMyUserPasswordResetLinkResponse
};

UsersService.GetUserPasswordResetLink = {
  methodName: "GetUserPasswordResetLink",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.GetUserPasswordResetLinkRequest,
  responseType: api_v1alpha1_org_users_users_pb.GetUserPasswordResetLinkResponse
};

UsersService.GetUserPasswordResetLinkByOrgId = {
  methodName: "GetUserPasswordResetLinkByOrgId",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.GetUserPasswordResetLinkByOrgIdRequest,
  responseType: api_v1alpha1_org_users_users_pb.GetUserPasswordResetLinkByOrgIdResponse
};

UsersService.CreatePasswordResetLink = {
  methodName: "CreatePasswordResetLink",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.CreatePasswordResetLinkRequest,
  responseType: api_v1alpha1_org_users_users_pb.CreatePasswordResetLinkResponse
};

UsersService.CreatePasswordResetLinkByOrgId = {
  methodName: "CreatePasswordResetLinkByOrgId",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.CreatePasswordResetLinkByOrgIdRequest,
  responseType: api_v1alpha1_org_users_users_pb.CreatePasswordResetLinkByOrgIdResponse
};

UsersService.GetUserLoginInfo = {
  methodName: "GetUserLoginInfo",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.GetUserLoginInfoRequest,
  responseType: api_v1alpha1_org_users_users_pb.GetUserLoginInfoResponse
};

UsersService.GetUserEmailVerified = {
  methodName: "GetUserEmailVerified",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.GetUserEmailVerifiedRequest,
  responseType: api_v1alpha1_org_users_users_pb.GetUserEmailVerifiedResponse
};

UsersService.GetUserEmailVerifiedByOrgId = {
  methodName: "GetUserEmailVerifiedByOrgId",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.GetUserEmailVerifiedByOrgIdRequest,
  responseType: api_v1alpha1_org_users_users_pb.GetUserEmailVerifiedByOrgIdResponse
};

UsersService.ResetMyPassword = {
  methodName: "ResetMyPassword",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.ResetMyPasswordRequest,
  responseType: api_v1alpha1_org_users_users_pb.ResetMyPasswordResponse
};

UsersService.ResetUserPassword = {
  methodName: "ResetUserPassword",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.ResetUserPasswordRequest,
  responseType: api_v1alpha1_org_users_users_pb.ResetUserPasswordResponse
};

UsersService.ResetUserPasswordByOrgId = {
  methodName: "ResetUserPasswordByOrgId",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.ResetUserPasswordByOrgIdRequest,
  responseType: api_v1alpha1_org_users_users_pb.ResetUserPasswordByOrgIdResponse
};

UsersService.SendUserEmailVerification = {
  methodName: "SendUserEmailVerification",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.SendUserEmailVerificationRequest,
  responseType: api_v1alpha1_org_users_users_pb.SendUserEmailVerificationResponse
};

UsersService.SendUserEmailVerificationByOrgId = {
  methodName: "SendUserEmailVerificationByOrgId",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.SendUserEmailVerificationByOrgIdRequest,
  responseType: api_v1alpha1_org_users_users_pb.SendUserEmailVerificationByOrgIdResponse
};

UsersService.SendPasswordReset = {
  methodName: "SendPasswordReset",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.SendPasswordResetRequest,
  responseType: api_v1alpha1_org_users_users_pb.SendPasswordResetResponse
};

UsersService.SendPasswordResetByOrgId = {
  methodName: "SendPasswordResetByOrgId",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.SendPasswordResetByOrgIdRequest,
  responseType: api_v1alpha1_org_users_users_pb.SendPasswordResetByOrgIdResponse
};

UsersService.GetUserSessionData = {
  methodName: "GetUserSessionData",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.GetUserSessionDataRequest,
  responseType: api_v1alpha1_org_users_users_pb.GetUserSessionDataResponse
};

UsersService.GetAgentProfileGroup = {
  methodName: "GetAgentProfileGroup",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_agent_profile_group_pb.GetAgentProfileGroupRequest,
  responseType: api_v1alpha1_org_users_agent_profile_group_pb.GetAgentProfileGroupResponse
};

UsersService.ListAgentProfileGroups = {
  methodName: "ListAgentProfileGroups",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_agent_profile_group_pb.ListAgentProfileGroupsRequest,
  responseType: api_v1alpha1_org_users_agent_profile_group_pb.ListAgentProfileGroupsResponse
};

UsersService.UpdateAgentProfileGroup = {
  methodName: "UpdateAgentProfileGroup",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_agent_profile_group_pb.UpdateAgentProfileGroupRequest,
  responseType: api_v1alpha1_org_users_agent_profile_group_pb.UpdateAgentProfileGroupResponse
};

UsersService.CreateAgentProfileGroup = {
  methodName: "CreateAgentProfileGroup",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_agent_profile_group_pb.CreateAgentProfileGroupRequest,
  responseType: api_v1alpha1_org_users_agent_profile_group_pb.CreateAgentProfileGroupResponse
};

UsersService.DeleteAgentProfileGroup = {
  methodName: "DeleteAgentProfileGroup",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_agent_profile_group_pb.DeleteAgentProfileGroupRequest,
  responseType: api_v1alpha1_org_users_agent_profile_group_pb.DeleteAgentProfileGroupResponse
};

UsersService.AssignAgentProfileGroups = {
  methodName: "AssignAgentProfileGroups",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_agent_profile_group_pb.AssignAgentProfileGroupsRequest,
  responseType: api_v1alpha1_org_users_agent_profile_group_pb.AssignAgentProfileGroupsResponse
};

UsersService.AddUserSubscription = {
  methodName: "AddUserSubscription",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_notifications_pb.AddUserSubscriptionRequest,
  responseType: api_v1alpha1_org_users_notifications_pb.AddUserSubscriptionResponse
};

UsersService.AddUserSubscriptionByUserId = {
  methodName: "AddUserSubscriptionByUserId",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_notifications_pb.AddUserSubscriptionByUserIdRequest,
  responseType: api_v1alpha1_org_users_notifications_pb.AddUserSubscriptionByUserIdResponse
};

UsersService.GetUserSubscription = {
  methodName: "GetUserSubscription",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_notifications_pb.GetUserSubscriptionRequest,
  responseType: api_v1alpha1_org_users_notifications_pb.GetUserSubscriptionResponse
};

UsersService.GetUserSubscriptionByUserId = {
  methodName: "GetUserSubscriptionByUserId",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_notifications_pb.GetUserSubscriptionByUserIdRequest,
  responseType: api_v1alpha1_org_users_notifications_pb.GetUserSubscriptionByUserIdResponse
};

UsersService.UpdateUserSubscription = {
  methodName: "UpdateUserSubscription",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_notifications_pb.UpdateUserSubscriptionRequest,
  responseType: api_v1alpha1_org_users_notifications_pb.UpdateUserSubscriptionResponse
};

UsersService.UpdateUserSubscriptionByUserId = {
  methodName: "UpdateUserSubscriptionByUserId",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_notifications_pb.UpdateUserSubscriptionByUserIdRequest,
  responseType: api_v1alpha1_org_users_notifications_pb.UpdateUserSubscriptionByUserIdResponse
};

UsersService.RemoveUserSubscription = {
  methodName: "RemoveUserSubscription",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_notifications_pb.RemoveUserSubscriptionRequest,
  responseType: api_v1alpha1_org_users_notifications_pb.RemoveUserSubscriptionResponse
};

UsersService.RemoveUserSubscriptionByUserId = {
  methodName: "RemoveUserSubscriptionByUserId",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_notifications_pb.RemoveUserSubscriptionByUserIdRequest,
  responseType: api_v1alpha1_org_users_notifications_pb.RemoveUserSubscriptionByUserIdResponse
};

UsersService.ListUserSubscriptions = {
  methodName: "ListUserSubscriptions",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_notifications_pb.ListUserSubscriptionsRequest,
  responseType: api_v1alpha1_org_users_notifications_pb.ListUserSubscriptionsResponse
};

UsersService.ListUserSubscriptionsByUserId = {
  methodName: "ListUserSubscriptionsByUserId",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_notifications_pb.ListUserSubscriptionsByUserIdRequest,
  responseType: api_v1alpha1_org_users_notifications_pb.ListUserSubscriptionsByUserIdResponse
};

UsersService.ListOrgSubscriptions = {
  methodName: "ListOrgSubscriptions",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_notifications_pb.ListOrgSubscriptionsRequest,
  responseType: api_v1alpha1_org_users_notifications_pb.ListOrgSubscriptionsResponse
};

UsersService.CreateAuthToken = {
  methodName: "CreateAuthToken",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_auth_token_pb.CreateAuthTokenRequest,
  responseType: api_v1alpha1_org_users_auth_token_pb.CreateAuthTokenResponse
};

UsersService.CreateAuthTokenByUserId = {
  methodName: "CreateAuthTokenByUserId",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_auth_token_pb.CreateAuthTokenByUserIdRequest,
  responseType: api_v1alpha1_org_users_auth_token_pb.CreateAuthTokenByUserIdResponse
};

UsersService.ListAuthTokens = {
  methodName: "ListAuthTokens",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_auth_token_pb.ListAuthTokensRequest,
  responseType: api_v1alpha1_org_users_auth_token_pb.ListAuthTokensResponse
};

UsersService.ListAuthTokensByUserId = {
  methodName: "ListAuthTokensByUserId",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_auth_token_pb.ListAuthTokensByUserIdRequest,
  responseType: api_v1alpha1_org_users_auth_token_pb.ListAuthTokensByUserIdResponse
};

UsersService.SetAuthTokenExpiration = {
  methodName: "SetAuthTokenExpiration",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_auth_token_pb.SetAuthTokenExpirationRequest,
  responseType: api_v1alpha1_org_users_auth_token_pb.SetAuthTokenExpirationResponse
};

UsersService.SetAuthTokenExpirationByUserId = {
  methodName: "SetAuthTokenExpirationByUserId",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_auth_token_pb.SetAuthTokenExpirationByUserIdRequest,
  responseType: api_v1alpha1_org_users_auth_token_pb.SetAuthTokenExpirationByUserIdResponse
};

UsersService.DeleteAuthToken = {
  methodName: "DeleteAuthToken",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_auth_token_pb.DeleteAuthTokenRequest,
  responseType: api_v1alpha1_org_users_auth_token_pb.DeleteAuthTokenResponse
};

UsersService.DeleteAuthTokenByUserId = {
  methodName: "DeleteAuthTokenByUserId",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_auth_token_pb.DeleteAuthTokenByUserIdRequest,
  responseType: api_v1alpha1_org_users_auth_token_pb.DeleteAuthTokenByUserIdResponse
};

UsersService.RefreshMfaLockout = {
  methodName: "RefreshMfaLockout",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.RefreshMfaLockoutRequest,
  responseType: api_v1alpha1_org_users_users_pb.RefreshMfaLockoutResponse
};

UsersService.RefreshMfaLockoutByOrgId = {
  methodName: "RefreshMfaLockoutByOrgId",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.RefreshMfaLockoutByOrgIdRequest,
  responseType: api_v1alpha1_org_users_users_pb.RefreshMfaLockoutByOrgIdResponse
};

UsersService.SetMfaType = {
  methodName: "SetMfaType",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.SetMfaTypeRequest,
  responseType: api_v1alpha1_org_users_users_pb.SetMfaTypeResponse
};

UsersService.SetMyMfaType = {
  methodName: "SetMyMfaType",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.SetMyMfaTypeRequest,
  responseType: api_v1alpha1_org_users_users_pb.SetMyMfaTypeResponse
};

UsersService.EnableUserMfa = {
  methodName: "EnableUserMfa",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.EnableUserMfaRequest,
  responseType: api_v1alpha1_org_users_users_pb.EnableUserMfaResponse
};

UsersService.EnableMyUserMfa = {
  methodName: "EnableMyUserMfa",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.EnableMyUserMfaRequest,
  responseType: api_v1alpha1_org_users_users_pb.EnableMyUserMfaResponse
};

UsersService.GetUserMfaInfo = {
  methodName: "GetUserMfaInfo",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.GetUserMfaInfoRequest,
  responseType: api_v1alpha1_org_users_users_pb.GetUserMfaInfoResponse
};

UsersService.GetMyUserMfaInfo = {
  methodName: "GetMyUserMfaInfo",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.GetMyUserMfaInfoRequest,
  responseType: api_v1alpha1_org_users_users_pb.GetMyUserMfaInfoResponse
};

UsersService.AddGroupedUserIPRestrictions = {
  methodName: "AddGroupedUserIPRestrictions",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.AddGroupedUserIPRestrictionsRequest,
  responseType: api_v1alpha1_org_users_users_pb.AddGroupedUserIPRestrictionsResponse
};

UsersService.RemoveGroupedUserIPRestrictions = {
  methodName: "RemoveGroupedUserIPRestrictions",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.RemoveGroupedUserIPRestrictionsRequest,
  responseType: api_v1alpha1_org_users_users_pb.RemoveGroupedUserIPRestrictionsResponse
};

UsersService.ListUsersAllowedIps = {
  methodName: "ListUsersAllowedIps",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.ListUsersAllowedIpsRequest,
  responseType: api_v1alpha1_org_users_users_pb.ListUsersAllowedIpsResponse
};

UsersService.ListUserDirectories = {
  methodName: "ListUserDirectories",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.ListUserDirectoriesRequest,
  responseType: api_v1alpha1_org_users_users_pb.ListUserDirectoriesResponse
};

UsersService.UpdateBulkUsersDisabled = {
  methodName: "UpdateBulkUsersDisabled",
  service: UsersService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_users_users_pb.UpdateBulkUsersDisabledRequest,
  responseType: api_v1alpha1_org_users_users_pb.UpdateBulkUsersDisabledResponse
};

exports.UsersService = UsersService;

function UsersServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

UsersServiceClient.prototype.createUser = function createUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.CreateUser, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.createDelegatedUser = function createDelegatedUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.CreateDelegatedUser, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.getMyUser = function getMyUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.GetMyUser, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.getUser = function getUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.GetUser, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.getUserByOrgId = function getUserByOrgId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.GetUserByOrgId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.listAgents = function listAgents(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(UsersService.ListAgents, {
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

UsersServiceClient.prototype.listPublicUsers = function listPublicUsers(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(UsersService.ListPublicUsers, {
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

UsersServiceClient.prototype.listUsers = function listUsers(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(UsersService.ListUsers, {
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

UsersServiceClient.prototype.listUsersByOrgId = function listUsersByOrgId(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(UsersService.ListUsersByOrgId, {
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

UsersServiceClient.prototype.listUsersByRegion = function listUsersByRegion(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(UsersService.ListUsersByRegion, {
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

UsersServiceClient.prototype.updateMyUser = function updateMyUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.UpdateMyUser, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.updateUser = function updateUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.UpdateUser, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.updateUserLabels = function updateUserLabels(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.UpdateUserLabels, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.updateUserCallerId = function updateUserCallerId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.UpdateUserCallerId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.updateUserDisabled = function updateUserDisabled(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.UpdateUserDisabled, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.updateUserDisabledByOrgId = function updateUserDisabledByOrgId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.UpdateUserDisabledByOrgId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.getMyUserPasswordResetLink = function getMyUserPasswordResetLink(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.GetMyUserPasswordResetLink, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.getUserPasswordResetLink = function getUserPasswordResetLink(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.GetUserPasswordResetLink, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.getUserPasswordResetLinkByOrgId = function getUserPasswordResetLinkByOrgId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.GetUserPasswordResetLinkByOrgId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.createPasswordResetLink = function createPasswordResetLink(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.CreatePasswordResetLink, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.createPasswordResetLinkByOrgId = function createPasswordResetLinkByOrgId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.CreatePasswordResetLinkByOrgId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.getUserLoginInfo = function getUserLoginInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.GetUserLoginInfo, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.getUserEmailVerified = function getUserEmailVerified(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.GetUserEmailVerified, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.getUserEmailVerifiedByOrgId = function getUserEmailVerifiedByOrgId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.GetUserEmailVerifiedByOrgId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.resetMyPassword = function resetMyPassword(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.ResetMyPassword, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.resetUserPassword = function resetUserPassword(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.ResetUserPassword, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.resetUserPasswordByOrgId = function resetUserPasswordByOrgId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.ResetUserPasswordByOrgId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.sendUserEmailVerification = function sendUserEmailVerification(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.SendUserEmailVerification, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.sendUserEmailVerificationByOrgId = function sendUserEmailVerificationByOrgId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.SendUserEmailVerificationByOrgId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.sendPasswordReset = function sendPasswordReset(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.SendPasswordReset, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.sendPasswordResetByOrgId = function sendPasswordResetByOrgId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.SendPasswordResetByOrgId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.getUserSessionData = function getUserSessionData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.GetUserSessionData, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.getAgentProfileGroup = function getAgentProfileGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.GetAgentProfileGroup, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.listAgentProfileGroups = function listAgentProfileGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.ListAgentProfileGroups, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.updateAgentProfileGroup = function updateAgentProfileGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.UpdateAgentProfileGroup, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.createAgentProfileGroup = function createAgentProfileGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.CreateAgentProfileGroup, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.deleteAgentProfileGroup = function deleteAgentProfileGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.DeleteAgentProfileGroup, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.assignAgentProfileGroups = function assignAgentProfileGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.AssignAgentProfileGroups, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.addUserSubscription = function addUserSubscription(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.AddUserSubscription, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.addUserSubscriptionByUserId = function addUserSubscriptionByUserId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.AddUserSubscriptionByUserId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.getUserSubscription = function getUserSubscription(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.GetUserSubscription, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.getUserSubscriptionByUserId = function getUserSubscriptionByUserId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.GetUserSubscriptionByUserId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.updateUserSubscription = function updateUserSubscription(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.UpdateUserSubscription, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.updateUserSubscriptionByUserId = function updateUserSubscriptionByUserId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.UpdateUserSubscriptionByUserId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.removeUserSubscription = function removeUserSubscription(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.RemoveUserSubscription, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.removeUserSubscriptionByUserId = function removeUserSubscriptionByUserId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.RemoveUserSubscriptionByUserId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.listUserSubscriptions = function listUserSubscriptions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.ListUserSubscriptions, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.listUserSubscriptionsByUserId = function listUserSubscriptionsByUserId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.ListUserSubscriptionsByUserId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.listOrgSubscriptions = function listOrgSubscriptions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.ListOrgSubscriptions, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.createAuthToken = function createAuthToken(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.CreateAuthToken, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.createAuthTokenByUserId = function createAuthTokenByUserId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.CreateAuthTokenByUserId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.listAuthTokens = function listAuthTokens(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.ListAuthTokens, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.listAuthTokensByUserId = function listAuthTokensByUserId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.ListAuthTokensByUserId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.setAuthTokenExpiration = function setAuthTokenExpiration(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.SetAuthTokenExpiration, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.setAuthTokenExpirationByUserId = function setAuthTokenExpirationByUserId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.SetAuthTokenExpirationByUserId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.deleteAuthToken = function deleteAuthToken(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.DeleteAuthToken, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.deleteAuthTokenByUserId = function deleteAuthTokenByUserId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.DeleteAuthTokenByUserId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.refreshMfaLockout = function refreshMfaLockout(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.RefreshMfaLockout, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.refreshMfaLockoutByOrgId = function refreshMfaLockoutByOrgId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.RefreshMfaLockoutByOrgId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.setMfaType = function setMfaType(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.SetMfaType, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.setMyMfaType = function setMyMfaType(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.SetMyMfaType, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.enableUserMfa = function enableUserMfa(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.EnableUserMfa, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.enableMyUserMfa = function enableMyUserMfa(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.EnableMyUserMfa, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.getUserMfaInfo = function getUserMfaInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.GetUserMfaInfo, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.getMyUserMfaInfo = function getMyUserMfaInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.GetMyUserMfaInfo, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.addGroupedUserIPRestrictions = function addGroupedUserIPRestrictions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.AddGroupedUserIPRestrictions, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.removeGroupedUserIPRestrictions = function removeGroupedUserIPRestrictions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.RemoveGroupedUserIPRestrictions, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.listUsersAllowedIps = function listUsersAllowedIps(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.ListUsersAllowedIps, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.listUserDirectories = function listUserDirectories(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.ListUserDirectories, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

UsersServiceClient.prototype.updateBulkUsersDisabled = function updateBulkUsersDisabled(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UsersService.UpdateBulkUsersDisabled, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.UsersServiceClient = UsersServiceClient;

