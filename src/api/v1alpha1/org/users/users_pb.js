// source: api/v1alpha1/org/users/users.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var localGlobalThis = require("../../../../global.js");
var proto = localGlobalThis.proto;
var goog = jspb;
var global = localGlobalThis || 
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var api_commons_org_pb = require('../../../../api/commons/org_pb.js');
goog.object.extend(proto, api_commons_org_pb);
var api_commons_org_labels_pb = require('../../../../api/commons/org/labels_pb.js');
goog.object.extend(proto, api_commons_org_labels_pb);
var api_commons_org_permissions_pb = require('../../../../api/commons/org/permissions_pb.js');
goog.object.extend(proto, api_commons_org_permissions_pb);
var api_commons_org_trusts_pb = require('../../../../api/commons/org/trusts_pb.js');
goog.object.extend(proto, api_commons_org_trusts_pb);
var api_commons_org_user_pb = require('../../../../api/commons/org/user_pb.js');
goog.object.extend(proto, api_commons_org_user_pb);
var api_commons_org_preferences_pb = require('../../../../api/commons/org_preferences_pb.js');
goog.object.extend(proto, api_commons_org_preferences_pb);
var api_commons_perms_pb = require('../../../../api/commons/perms_pb.js');
goog.object.extend(proto, api_commons_perms_pb);
var api_commons_user_pb = require('../../../../api/commons/user_pb.js');
goog.object.extend(proto, api_commons_user_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.CreateDelegatedUserRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.CreateDelegatedUserResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.CreatePasswordResetLinkRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.CreatePasswordResetLinkResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.CreateUserRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.CreateUserResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.EnableMyUserMfaRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.EnableMyUserMfaResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.EnableUserMfaRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.EnableUserMfaResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.GetMyUserMfaInfoRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.GetMyUserMfaInfoResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.GetMyUserRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.GetMyUserResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.GetMyUserResponse.AgentProfileGroup', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.GetMyUserResponse.HuntGroup', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.GetUserByOrgIdRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.GetUserByOrgIdResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.AgentProfileGroup', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.HuntGroup', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.GetUserEmailVerifiedRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.GetUserEmailVerifiedResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.GetUserLoginInfoRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.GetUserLoginInfoResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.GetUserMfaInfoRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.GetUserMfaInfoResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.GetUserPasswordResetLinkRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.GetUserPasswordResetLinkResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.GetUserRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.GetUserResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.GetUserResponse.AgentProfileGroup', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.GetUserResponse.HuntGroup', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.GetUserSessionDataRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.GetUserSessionDataResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.RegionSids', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.ListAgentsRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.ListAgentsResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.AgentProfileGroup', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.HuntGroup', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.ListPublicUsersRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.ListPublicUsersResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.ListPublicUsersResponse.User', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.ListUsersAllowedIpsRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.AllowedIps', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.ListUsersByOrgIdRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.ListUsersByRegionRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.ListUsersByRegionResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.ListUsersRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.ListUsersResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.RefreshMfaLockoutRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.RefreshMfaLockoutResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.ResetMyPasswordRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.ResetMyPasswordResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.ResetUserPasswordRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.ResetUserPasswordResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.SendPasswordResetRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.SendPasswordResetResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.SendUserEmailVerificationRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.SendUserEmailVerificationResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.SetMfaTypeRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.SetMfaTypeResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.SetMyMfaTypeRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.SetMyMfaTypeResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.UpdateMyUserRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.UpdateMyUserResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.UpdateUserCallerIdRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.UpdateUserCallerIdResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.UpdateUserDisabledRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.UpdateUserDisabledResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.UpdateUserLabelsRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.UpdateUserLabelsResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.UpdateUserRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.users.UpdateUserResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.CreateUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.users.CreateUserRequest.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.users.CreateUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.CreateUserRequest.displayName = 'proto.api.v1alpha1.org.users.CreateUserRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.CreateUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.CreateUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.CreateUserResponse.displayName = 'proto.api.v1alpha1.org.users.CreateUserResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.CreateDelegatedUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.users.CreateDelegatedUserRequest.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.users.CreateDelegatedUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.CreateDelegatedUserRequest.displayName = 'proto.api.v1alpha1.org.users.CreateDelegatedUserRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.CreateDelegatedUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.CreateDelegatedUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.CreateDelegatedUserResponse.displayName = 'proto.api.v1alpha1.org.users.CreateDelegatedUserResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.GetMyUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.GetMyUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.GetMyUserRequest.displayName = 'proto.api.v1alpha1.org.users.GetMyUserRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.GetMyUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.users.GetMyUserResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.users.GetMyUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.GetMyUserResponse.displayName = 'proto.api.v1alpha1.org.users.GetMyUserResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.HuntGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.GetMyUserResponse.HuntGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.GetMyUserResponse.HuntGroup.displayName = 'proto.api.v1alpha1.org.users.GetMyUserResponse.HuntGroup';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.AgentProfileGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.GetMyUserResponse.AgentProfileGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.GetMyUserResponse.AgentProfileGroup.displayName = 'proto.api.v1alpha1.org.users.GetMyUserResponse.AgentProfileGroup';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.GetUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.GetUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.GetUserRequest.displayName = 'proto.api.v1alpha1.org.users.GetUserRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.GetUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.users.GetUserResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.users.GetUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.GetUserResponse.displayName = 'proto.api.v1alpha1.org.users.GetUserResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.GetUserResponse.HuntGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.GetUserResponse.HuntGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.GetUserResponse.HuntGroup.displayName = 'proto.api.v1alpha1.org.users.GetUserResponse.HuntGroup';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.GetUserResponse.AgentProfileGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.GetUserResponse.AgentProfileGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.GetUserResponse.AgentProfileGroup.displayName = 'proto.api.v1alpha1.org.users.GetUserResponse.AgentProfileGroup';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.GetUserByOrgIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.GetUserByOrgIdRequest.displayName = 'proto.api.v1alpha1.org.users.GetUserByOrgIdRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.users.GetUserByOrgIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.displayName = 'proto.api.v1alpha1.org.users.GetUserByOrgIdResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.HuntGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.HuntGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.HuntGroup.displayName = 'proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.HuntGroup';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.AgentProfileGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.AgentProfileGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.AgentProfileGroup.displayName = 'proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.AgentProfileGroup';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.ListAgentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.ListAgentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.ListAgentsRequest.displayName = 'proto.api.v1alpha1.org.users.ListAgentsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.ListAgentsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.users.ListAgentsResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.users.ListAgentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.ListAgentsResponse.displayName = 'proto.api.v1alpha1.org.users.ListAgentsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.displayName = 'proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.HuntGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.HuntGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.HuntGroup.displayName = 'proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.HuntGroup';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.AgentProfileGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.AgentProfileGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.AgentProfileGroup.displayName = 'proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.AgentProfileGroup';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.ListPublicUsersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.ListPublicUsersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.ListPublicUsersRequest.displayName = 'proto.api.v1alpha1.org.users.ListPublicUsersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.ListPublicUsersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.users.ListPublicUsersResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.users.ListPublicUsersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.ListPublicUsersResponse.displayName = 'proto.api.v1alpha1.org.users.ListPublicUsersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.ListPublicUsersResponse.User = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.ListPublicUsersResponse.User, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.ListPublicUsersResponse.User.displayName = 'proto.api.v1alpha1.org.users.ListPublicUsersResponse.User';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.ListUsersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.ListUsersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.ListUsersRequest.displayName = 'proto.api.v1alpha1.org.users.ListUsersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.ListUsersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.users.ListUsersResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.users.ListUsersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.ListUsersResponse.displayName = 'proto.api.v1alpha1.org.users.ListUsersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.displayName = 'proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.ListUsersByOrgIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.ListUsersByOrgIdRequest.displayName = 'proto.api.v1alpha1.org.users.ListUsersByOrgIdRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.displayName = 'proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.displayName = 'proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.ListUsersByRegionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.ListUsersByRegionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.ListUsersByRegionRequest.displayName = 'proto.api.v1alpha1.org.users.ListUsersByRegionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.users.ListUsersByRegionResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.users.ListUsersByRegionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.ListUsersByRegionResponse.displayName = 'proto.api.v1alpha1.org.users.ListUsersByRegionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.displayName = 'proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.UpdateMyUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.users.UpdateMyUserRequest.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.users.UpdateMyUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.UpdateMyUserRequest.displayName = 'proto.api.v1alpha1.org.users.UpdateMyUserRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.UpdateMyUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.UpdateMyUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.UpdateMyUserResponse.displayName = 'proto.api.v1alpha1.org.users.UpdateMyUserResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.UpdateUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.users.UpdateUserRequest.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.users.UpdateUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.UpdateUserRequest.displayName = 'proto.api.v1alpha1.org.users.UpdateUserRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.UpdateUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.UpdateUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.UpdateUserResponse.displayName = 'proto.api.v1alpha1.org.users.UpdateUserResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.UpdateUserLabelsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.users.UpdateUserLabelsRequest.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.users.UpdateUserLabelsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.UpdateUserLabelsRequest.displayName = 'proto.api.v1alpha1.org.users.UpdateUserLabelsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.UpdateUserLabelsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.UpdateUserLabelsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.UpdateUserLabelsResponse.displayName = 'proto.api.v1alpha1.org.users.UpdateUserLabelsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.UpdateUserCallerIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.UpdateUserCallerIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.UpdateUserCallerIdRequest.displayName = 'proto.api.v1alpha1.org.users.UpdateUserCallerIdRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.UpdateUserCallerIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.UpdateUserCallerIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.UpdateUserCallerIdResponse.displayName = 'proto.api.v1alpha1.org.users.UpdateUserCallerIdResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.UpdateUserDisabledRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.UpdateUserDisabledRequest.displayName = 'proto.api.v1alpha1.org.users.UpdateUserDisabledRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.UpdateUserDisabledResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.UpdateUserDisabledResponse.displayName = 'proto.api.v1alpha1.org.users.UpdateUserDisabledResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdRequest.displayName = 'proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdResponse.displayName = 'proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkRequest.displayName = 'proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkResponse.displayName = 'proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.GetUserPasswordResetLinkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.GetUserPasswordResetLinkRequest.displayName = 'proto.api.v1alpha1.org.users.GetUserPasswordResetLinkRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.GetUserPasswordResetLinkResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.GetUserPasswordResetLinkResponse.displayName = 'proto.api.v1alpha1.org.users.GetUserPasswordResetLinkResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdRequest.displayName = 'proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdResponse.displayName = 'proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.CreatePasswordResetLinkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.CreatePasswordResetLinkRequest.displayName = 'proto.api.v1alpha1.org.users.CreatePasswordResetLinkRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.CreatePasswordResetLinkResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.CreatePasswordResetLinkResponse.displayName = 'proto.api.v1alpha1.org.users.CreatePasswordResetLinkResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdRequest.displayName = 'proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdResponse.displayName = 'proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.GetUserLoginInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.GetUserLoginInfoRequest.displayName = 'proto.api.v1alpha1.org.users.GetUserLoginInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.GetUserLoginInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.GetUserLoginInfoResponse.displayName = 'proto.api.v1alpha1.org.users.GetUserLoginInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.SendPasswordResetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.SendPasswordResetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.SendPasswordResetRequest.displayName = 'proto.api.v1alpha1.org.users.SendPasswordResetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.SendPasswordResetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.SendPasswordResetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.SendPasswordResetResponse.displayName = 'proto.api.v1alpha1.org.users.SendPasswordResetResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdRequest.displayName = 'proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdResponse.displayName = 'proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.ResetMyPasswordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.ResetMyPasswordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.ResetMyPasswordRequest.displayName = 'proto.api.v1alpha1.org.users.ResetMyPasswordRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.ResetMyPasswordResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.ResetMyPasswordResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.ResetMyPasswordResponse.displayName = 'proto.api.v1alpha1.org.users.ResetMyPasswordResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.ResetUserPasswordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.ResetUserPasswordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.ResetUserPasswordRequest.displayName = 'proto.api.v1alpha1.org.users.ResetUserPasswordRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.ResetUserPasswordResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.ResetUserPasswordResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.ResetUserPasswordResponse.displayName = 'proto.api.v1alpha1.org.users.ResetUserPasswordResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdRequest.displayName = 'proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdResponse.displayName = 'proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.GetUserEmailVerifiedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.GetUserEmailVerifiedRequest.displayName = 'proto.api.v1alpha1.org.users.GetUserEmailVerifiedRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.GetUserEmailVerifiedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.GetUserEmailVerifiedResponse.displayName = 'proto.api.v1alpha1.org.users.GetUserEmailVerifiedResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdRequest.displayName = 'proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdResponse.displayName = 'proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.SendUserEmailVerificationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.SendUserEmailVerificationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.SendUserEmailVerificationRequest.displayName = 'proto.api.v1alpha1.org.users.SendUserEmailVerificationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.SendUserEmailVerificationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.SendUserEmailVerificationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.SendUserEmailVerificationResponse.displayName = 'proto.api.v1alpha1.org.users.SendUserEmailVerificationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdRequest.displayName = 'proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdResponse.displayName = 'proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.GetUserSessionDataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.GetUserSessionDataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.GetUserSessionDataRequest.displayName = 'proto.api.v1alpha1.org.users.GetUserSessionDataRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.users.GetUserSessionDataResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.users.GetUserSessionDataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.GetUserSessionDataResponse.displayName = 'proto.api.v1alpha1.org.users.GetUserSessionDataResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.displayName = 'proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.RegionSids = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.RegionSids, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.RegionSids.displayName = 'proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.RegionSids';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.RefreshMfaLockoutRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.RefreshMfaLockoutRequest.displayName = 'proto.api.v1alpha1.org.users.RefreshMfaLockoutRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.RefreshMfaLockoutResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.RefreshMfaLockoutResponse.displayName = 'proto.api.v1alpha1.org.users.RefreshMfaLockoutResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdRequest.displayName = 'proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdResponse.displayName = 'proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.SetMfaTypeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.SetMfaTypeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.SetMfaTypeRequest.displayName = 'proto.api.v1alpha1.org.users.SetMfaTypeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.SetMfaTypeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.SetMfaTypeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.SetMfaTypeResponse.displayName = 'proto.api.v1alpha1.org.users.SetMfaTypeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.SetMyMfaTypeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.SetMyMfaTypeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.SetMyMfaTypeRequest.displayName = 'proto.api.v1alpha1.org.users.SetMyMfaTypeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.SetMyMfaTypeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.SetMyMfaTypeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.SetMyMfaTypeResponse.displayName = 'proto.api.v1alpha1.org.users.SetMyMfaTypeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.EnableUserMfaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.EnableUserMfaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.EnableUserMfaRequest.displayName = 'proto.api.v1alpha1.org.users.EnableUserMfaRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.EnableUserMfaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.EnableUserMfaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.EnableUserMfaResponse.displayName = 'proto.api.v1alpha1.org.users.EnableUserMfaResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.EnableMyUserMfaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.EnableMyUserMfaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.EnableMyUserMfaRequest.displayName = 'proto.api.v1alpha1.org.users.EnableMyUserMfaRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.EnableMyUserMfaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.EnableMyUserMfaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.EnableMyUserMfaResponse.displayName = 'proto.api.v1alpha1.org.users.EnableMyUserMfaResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.GetUserMfaInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.GetUserMfaInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.GetUserMfaInfoRequest.displayName = 'proto.api.v1alpha1.org.users.GetUserMfaInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.GetUserMfaInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.GetUserMfaInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.GetUserMfaInfoResponse.displayName = 'proto.api.v1alpha1.org.users.GetUserMfaInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.GetMyUserMfaInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.GetMyUserMfaInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.GetMyUserMfaInfoRequest.displayName = 'proto.api.v1alpha1.org.users.GetMyUserMfaInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.GetMyUserMfaInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.GetMyUserMfaInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.GetMyUserMfaInfoResponse.displayName = 'proto.api.v1alpha1.org.users.GetMyUserMfaInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsRequest.displayName = 'proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsResponse.displayName = 'proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsRequest.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsRequest.displayName = 'proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsResponse.displayName = 'proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsRequest.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsRequest.displayName = 'proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsResponse.displayName = 'proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.ListUsersAllowedIpsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.users.ListUsersAllowedIpsRequest.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.users.ListUsersAllowedIpsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.ListUsersAllowedIpsRequest.displayName = 'proto.api.v1alpha1.org.users.ListUsersAllowedIpsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.displayName = 'proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.AllowedIps = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.AllowedIps.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.AllowedIps, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.AllowedIps.displayName = 'proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.AllowedIps';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.users.CreateUserRequest.repeatedFields_ = [7,11,12,16];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.CreateUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.CreateUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.CreateUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    firstName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    email: jspb.Message.getFieldWithDefault(msg, 4, ""),
    userName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    password: jspb.Message.getFieldWithDefault(msg, 6, ""),
    permissionGroupIdsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    partnerAgentId: jspb.Message.getFieldWithDefault(msg, 9, ""),
    p3PermissionGroupId: jspb.Message.getFieldWithDefault(msg, 10, ""),
    linkbackNumbersList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
    callerIdsList: (f = jspb.Message.getRepeatedField(msg, 12)) == null ? undefined : f,
    defaultApp: jspb.Message.getFieldWithDefault(msg, 13, 0),
    userCallerId: jspb.Message.getFieldWithDefault(msg, 14, ""),
    agentProfileGroupId: jspb.Message.getFieldWithDefault(msg, 15, ""),
    labelIdsList: (f = jspb.Message.getRepeatedField(msg, 16)) == null ? undefined : f,
    timeZoneOverride: (f = msg.getTimeZoneOverride()) && api_commons_org_pb.TimeZoneWrapper.toObject(includeInstance, f),
    huntGroupSid: jspb.Message.getFieldWithDefault(msg, 18, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.CreateUserRequest}
 */
proto.api.v1alpha1.org.users.CreateUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.CreateUserRequest;
  return proto.api.v1alpha1.org.users.CreateUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.CreateUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.CreateUserRequest}
 */
proto.api.v1alpha1.org.users.CreateUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addPermissionGroupIds(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartnerAgentId(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setP3PermissionGroupId(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.addLinkbackNumbers(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.addCallerIds(value);
      break;
    case 13:
      var value = /** @type {!proto.api.commons.OperatorApplications} */ (reader.readEnum());
      msg.setDefaultApp(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserCallerId(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setAgentProfileGroupId(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.addLabelIds(value);
      break;
    case 17:
      var value = new api_commons_org_pb.TimeZoneWrapper;
      reader.readMessage(value,api_commons_org_pb.TimeZoneWrapper.deserializeBinaryFromReader);
      msg.setTimeZoneOverride(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHuntGroupSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.CreateUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.CreateUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.CreateUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUserName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPermissionGroupIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getPartnerAgentId();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getP3PermissionGroupId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getLinkbackNumbersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
  f = message.getCallerIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      12,
      f
    );
  }
  f = message.getDefaultApp();
  if (f !== 0.0) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = message.getUserCallerId();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getAgentProfileGroupId();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getLabelIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      16,
      f
    );
  }
  f = message.getTimeZoneOverride();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      api_commons_org_pb.TimeZoneWrapper.serializeBinaryToWriter
    );
  }
  f = message.getHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      18,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string first_name = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string last_name = 3;
 * @return {string}
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string email = 4;
 * @return {string}
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string user_name = 5;
 * @return {string}
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.getUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.setUserName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string password = 6;
 * @return {string}
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated string permission_group_ids = 7;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.getPermissionGroupIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.users.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.setPermissionGroupIdsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.addPermissionGroupIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.clearPermissionGroupIdsList = function() {
  return this.setPermissionGroupIdsList([]);
};


/**
 * optional string partner_agent_id = 9;
 * @return {string}
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.getPartnerAgentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.setPartnerAgentId = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string p3_permission_group_id = 10;
 * @return {string}
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.getP3PermissionGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.setP3PermissionGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * repeated string linkback_numbers = 11;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.getLinkbackNumbersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.users.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.setLinkbackNumbersList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.addLinkbackNumbers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.clearLinkbackNumbersList = function() {
  return this.setLinkbackNumbersList([]);
};


/**
 * repeated string caller_ids = 12;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.getCallerIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 12));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.users.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.setCallerIdsList = function(value) {
  return jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.addCallerIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.clearCallerIdsList = function() {
  return this.setCallerIdsList([]);
};


/**
 * optional api.commons.OperatorApplications default_app = 13;
 * @return {!proto.api.commons.OperatorApplications}
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.getDefaultApp = function() {
  return /** @type {!proto.api.commons.OperatorApplications} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.api.commons.OperatorApplications} value
 * @return {!proto.api.v1alpha1.org.users.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.setDefaultApp = function(value) {
  return jspb.Message.setProto3EnumField(this, 13, value);
};


/**
 * optional string user_caller_id = 14;
 * @return {string}
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.getUserCallerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.setUserCallerId = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string agent_profile_group_id = 15;
 * @return {string}
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.getAgentProfileGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.setAgentProfileGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * repeated string label_ids = 16;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.getLabelIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 16));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.users.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.setLabelIdsList = function(value) {
  return jspb.Message.setField(this, 16, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.addLabelIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 16, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.clearLabelIdsList = function() {
  return this.setLabelIdsList([]);
};


/**
 * optional api.commons.TimeZoneWrapper time_zone_override = 17;
 * @return {?proto.api.commons.TimeZoneWrapper}
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.getTimeZoneOverride = function() {
  return /** @type{?proto.api.commons.TimeZoneWrapper} */ (
    jspb.Message.getWrapperField(this, api_commons_org_pb.TimeZoneWrapper, 17));
};


/**
 * @param {?proto.api.commons.TimeZoneWrapper|undefined} value
 * @return {!proto.api.v1alpha1.org.users.CreateUserRequest} returns this
*/
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.setTimeZoneOverride = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.clearTimeZoneOverride = function() {
  return this.setTimeZoneOverride(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.hasTimeZoneOverride = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional int64 hunt_group_sid = 18;
 * @return {number}
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.users.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.CreateUserRequest.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.CreateUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.CreateUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.CreateUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.CreateUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.CreateUserResponse}
 */
proto.api.v1alpha1.org.users.CreateUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.CreateUserResponse;
  return proto.api.v1alpha1.org.users.CreateUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.CreateUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.CreateUserResponse}
 */
proto.api.v1alpha1.org.users.CreateUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.CreateUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.CreateUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.CreateUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.CreateUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.CreateUserResponse.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.CreateUserResponse} returns this
 */
proto.api.v1alpha1.org.users.CreateUserResponse.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.users.CreateDelegatedUserRequest.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.CreateDelegatedUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.CreateDelegatedUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.CreateDelegatedUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.CreateDelegatedUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    authUserId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orgId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    email: jspb.Message.getFieldWithDefault(msg, 3, ""),
    username: jspb.Message.getFieldWithDefault(msg, 4, ""),
    firstName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 6, ""),
    groupsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    connectionId: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.CreateDelegatedUserRequest}
 */
proto.api.v1alpha1.org.users.CreateDelegatedUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.CreateDelegatedUserRequest;
  return proto.api.v1alpha1.org.users.CreateDelegatedUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.CreateDelegatedUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.CreateDelegatedUserRequest}
 */
proto.api.v1alpha1.org.users.CreateDelegatedUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addGroups(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.CreateDelegatedUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.CreateDelegatedUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.CreateDelegatedUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.CreateDelegatedUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getGroupsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getConnectionId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string auth_user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.CreateDelegatedUserRequest.prototype.getAuthUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.CreateDelegatedUserRequest} returns this
 */
proto.api.v1alpha1.org.users.CreateDelegatedUserRequest.prototype.setAuthUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.users.CreateDelegatedUserRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.CreateDelegatedUserRequest} returns this
 */
proto.api.v1alpha1.org.users.CreateDelegatedUserRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string email = 3;
 * @return {string}
 */
proto.api.v1alpha1.org.users.CreateDelegatedUserRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.CreateDelegatedUserRequest} returns this
 */
proto.api.v1alpha1.org.users.CreateDelegatedUserRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string username = 4;
 * @return {string}
 */
proto.api.v1alpha1.org.users.CreateDelegatedUserRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.CreateDelegatedUserRequest} returns this
 */
proto.api.v1alpha1.org.users.CreateDelegatedUserRequest.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string first_name = 5;
 * @return {string}
 */
proto.api.v1alpha1.org.users.CreateDelegatedUserRequest.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.CreateDelegatedUserRequest} returns this
 */
proto.api.v1alpha1.org.users.CreateDelegatedUserRequest.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string last_name = 6;
 * @return {string}
 */
proto.api.v1alpha1.org.users.CreateDelegatedUserRequest.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.CreateDelegatedUserRequest} returns this
 */
proto.api.v1alpha1.org.users.CreateDelegatedUserRequest.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated string groups = 7;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.users.CreateDelegatedUserRequest.prototype.getGroupsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.users.CreateDelegatedUserRequest} returns this
 */
proto.api.v1alpha1.org.users.CreateDelegatedUserRequest.prototype.setGroupsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.CreateDelegatedUserRequest} returns this
 */
proto.api.v1alpha1.org.users.CreateDelegatedUserRequest.prototype.addGroups = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.CreateDelegatedUserRequest} returns this
 */
proto.api.v1alpha1.org.users.CreateDelegatedUserRequest.prototype.clearGroupsList = function() {
  return this.setGroupsList([]);
};


/**
 * optional string connection_id = 8;
 * @return {string}
 */
proto.api.v1alpha1.org.users.CreateDelegatedUserRequest.prototype.getConnectionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.CreateDelegatedUserRequest} returns this
 */
proto.api.v1alpha1.org.users.CreateDelegatedUserRequest.prototype.setConnectionId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.CreateDelegatedUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.CreateDelegatedUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.CreateDelegatedUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.CreateDelegatedUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.CreateDelegatedUserResponse}
 */
proto.api.v1alpha1.org.users.CreateDelegatedUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.CreateDelegatedUserResponse;
  return proto.api.v1alpha1.org.users.CreateDelegatedUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.CreateDelegatedUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.CreateDelegatedUserResponse}
 */
proto.api.v1alpha1.org.users.CreateDelegatedUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.CreateDelegatedUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.CreateDelegatedUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.CreateDelegatedUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.CreateDelegatedUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.CreateDelegatedUserResponse.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.CreateDelegatedUserResponse} returns this
 */
proto.api.v1alpha1.org.users.CreateDelegatedUserResponse.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.GetMyUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.GetMyUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.GetMyUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetMyUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.GetMyUserRequest}
 */
proto.api.v1alpha1.org.users.GetMyUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.GetMyUserRequest;
  return proto.api.v1alpha1.org.users.GetMyUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.GetMyUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.GetMyUserRequest}
 */
proto.api.v1alpha1.org.users.GetMyUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.GetMyUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.GetMyUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.GetMyUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetMyUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.repeatedFields_ = [6,7,8,11];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.GetMyUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.GetMyUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orgId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    username: jspb.Message.getFieldWithDefault(msg, 13, ""),
    delegated: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    orgName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    huntGroup: (f = msg.getHuntGroup()) && proto.api.v1alpha1.org.users.GetMyUserResponse.HuntGroup.toObject(includeInstance, f),
    labelsList: jspb.Message.toObjectList(msg.getLabelsList(),
    api_commons_org_labels_pb.Label.toObject, includeInstance),
    skillsList: jspb.Message.toObjectList(msg.getSkillsList(),
    api_commons_org_user_pb.Skill.toObject, includeInstance),
    permissionGroupsList: jspb.Message.toObjectList(msg.getPermissionGroupsList(),
    api_commons_org_permissions_pb.PermissionGroup.toObject, includeInstance),
    p3PermissionGroup: (f = msg.getP3PermissionGroup()) && api_commons_org_permissions_pb.P3PermissionGroup.toObject(includeInstance, f),
    agentProfileGroup: (f = msg.getAgentProfileGroup()) && proto.api.v1alpha1.org.users.GetMyUserResponse.AgentProfileGroup.toObject(includeInstance, f),
    trustsList: jspb.Message.toObjectList(msg.getTrustsList(),
    api_commons_org_trusts_pb.Trust.toObject, includeInstance),
    accountOwner: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    emailVerified: jspb.Message.getBooleanFieldWithDefault(msg, 14, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.GetMyUserResponse}
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.GetMyUserResponse;
  return proto.api.v1alpha1.org.users.GetMyUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.GetMyUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.GetMyUserResponse}
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelegated(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgName(value);
      break;
    case 5:
      var value = new proto.api.v1alpha1.org.users.GetMyUserResponse.HuntGroup;
      reader.readMessage(value,proto.api.v1alpha1.org.users.GetMyUserResponse.HuntGroup.deserializeBinaryFromReader);
      msg.setHuntGroup(value);
      break;
    case 6:
      var value = new api_commons_org_labels_pb.Label;
      reader.readMessage(value,api_commons_org_labels_pb.Label.deserializeBinaryFromReader);
      msg.addLabels(value);
      break;
    case 7:
      var value = new api_commons_org_user_pb.Skill;
      reader.readMessage(value,api_commons_org_user_pb.Skill.deserializeBinaryFromReader);
      msg.addSkills(value);
      break;
    case 8:
      var value = new api_commons_org_permissions_pb.PermissionGroup;
      reader.readMessage(value,api_commons_org_permissions_pb.PermissionGroup.deserializeBinaryFromReader);
      msg.addPermissionGroups(value);
      break;
    case 9:
      var value = new api_commons_org_permissions_pb.P3PermissionGroup;
      reader.readMessage(value,api_commons_org_permissions_pb.P3PermissionGroup.deserializeBinaryFromReader);
      msg.setP3PermissionGroup(value);
      break;
    case 10:
      var value = new proto.api.v1alpha1.org.users.GetMyUserResponse.AgentProfileGroup;
      reader.readMessage(value,proto.api.v1alpha1.org.users.GetMyUserResponse.AgentProfileGroup.deserializeBinaryFromReader);
      msg.setAgentProfileGroup(value);
      break;
    case 11:
      var value = new api_commons_org_trusts_pb.Trust;
      reader.readMessage(value,api_commons_org_trusts_pb.Trust.deserializeBinaryFromReader);
      msg.addTrusts(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccountOwner(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEmailVerified(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.GetMyUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.GetMyUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getDelegated();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getOrgName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getHuntGroup();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.api.v1alpha1.org.users.GetMyUserResponse.HuntGroup.serializeBinaryToWriter
    );
  }
  f = message.getLabelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      api_commons_org_labels_pb.Label.serializeBinaryToWriter
    );
  }
  f = message.getSkillsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      api_commons_org_user_pb.Skill.serializeBinaryToWriter
    );
  }
  f = message.getPermissionGroupsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      api_commons_org_permissions_pb.PermissionGroup.serializeBinaryToWriter
    );
  }
  f = message.getP3PermissionGroup();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      api_commons_org_permissions_pb.P3PermissionGroup.serializeBinaryToWriter
    );
  }
  f = message.getAgentProfileGroup();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.api.v1alpha1.org.users.GetMyUserResponse.AgentProfileGroup.serializeBinaryToWriter
    );
  }
  f = message.getTrustsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      api_commons_org_trusts_pb.Trust.serializeBinaryToWriter
    );
  }
  f = message.getAccountOwner();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getEmailVerified();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.HuntGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.GetMyUserResponse.HuntGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.GetMyUserResponse.HuntGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.HuntGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    huntGroupSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    huntGroupName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.GetMyUserResponse.HuntGroup}
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.HuntGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.GetMyUserResponse.HuntGroup;
  return proto.api.v1alpha1.org.users.GetMyUserResponse.HuntGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.GetMyUserResponse.HuntGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.GetMyUserResponse.HuntGroup}
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.HuntGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHuntGroupSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHuntGroupName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.HuntGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.GetMyUserResponse.HuntGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.GetMyUserResponse.HuntGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.HuntGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getHuntGroupName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 hunt_group_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.HuntGroup.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.users.GetMyUserResponse.HuntGroup} returns this
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.HuntGroup.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string hunt_group_name = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.HuntGroup.prototype.getHuntGroupName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetMyUserResponse.HuntGroup} returns this
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.HuntGroup.prototype.setHuntGroupName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.AgentProfileGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.GetMyUserResponse.AgentProfileGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.GetMyUserResponse.AgentProfileGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.AgentProfileGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    agentProfileGroupId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    agentProfileGroupName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.GetMyUserResponse.AgentProfileGroup}
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.AgentProfileGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.GetMyUserResponse.AgentProfileGroup;
  return proto.api.v1alpha1.org.users.GetMyUserResponse.AgentProfileGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.GetMyUserResponse.AgentProfileGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.GetMyUserResponse.AgentProfileGroup}
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.AgentProfileGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAgentProfileGroupId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAgentProfileGroupName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.AgentProfileGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.GetMyUserResponse.AgentProfileGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.GetMyUserResponse.AgentProfileGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.AgentProfileGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentProfileGroupId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAgentProfileGroupName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string agent_profile_group_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.AgentProfileGroup.prototype.getAgentProfileGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetMyUserResponse.AgentProfileGroup} returns this
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.AgentProfileGroup.prototype.setAgentProfileGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string agent_profile_group_name = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.AgentProfileGroup.prototype.getAgentProfileGroupName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetMyUserResponse.AgentProfileGroup} returns this
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.AgentProfileGroup.prototype.setAgentProfileGroupName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetMyUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetMyUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string username = 13;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetMyUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional bool delegated = 3;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.getDelegated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.GetMyUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.setDelegated = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string org_name = 4;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.getOrgName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetMyUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.setOrgName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional HuntGroup hunt_group = 5;
 * @return {?proto.api.v1alpha1.org.users.GetMyUserResponse.HuntGroup}
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.getHuntGroup = function() {
  return /** @type{?proto.api.v1alpha1.org.users.GetMyUserResponse.HuntGroup} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.org.users.GetMyUserResponse.HuntGroup, 5));
};


/**
 * @param {?proto.api.v1alpha1.org.users.GetMyUserResponse.HuntGroup|undefined} value
 * @return {!proto.api.v1alpha1.org.users.GetMyUserResponse} returns this
*/
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.setHuntGroup = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.GetMyUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.clearHuntGroup = function() {
  return this.setHuntGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.hasHuntGroup = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated api.commons.org.Label labels = 6;
 * @return {!Array<!proto.api.commons.org.Label>}
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.getLabelsList = function() {
  return /** @type{!Array<!proto.api.commons.org.Label>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_labels_pb.Label, 6));
};


/**
 * @param {!Array<!proto.api.commons.org.Label>} value
 * @return {!proto.api.v1alpha1.org.users.GetMyUserResponse} returns this
*/
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.setLabelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.api.commons.org.Label=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.Label}
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.addLabels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.api.commons.org.Label, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.GetMyUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.clearLabelsList = function() {
  return this.setLabelsList([]);
};


/**
 * repeated api.commons.org.Skill skills = 7;
 * @return {!Array<!proto.api.commons.org.Skill>}
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.getSkillsList = function() {
  return /** @type{!Array<!proto.api.commons.org.Skill>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_user_pb.Skill, 7));
};


/**
 * @param {!Array<!proto.api.commons.org.Skill>} value
 * @return {!proto.api.v1alpha1.org.users.GetMyUserResponse} returns this
*/
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.setSkillsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.api.commons.org.Skill=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.Skill}
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.addSkills = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.api.commons.org.Skill, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.GetMyUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.clearSkillsList = function() {
  return this.setSkillsList([]);
};


/**
 * repeated api.commons.org.PermissionGroup permission_groups = 8;
 * @return {!Array<!proto.api.commons.org.PermissionGroup>}
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.getPermissionGroupsList = function() {
  return /** @type{!Array<!proto.api.commons.org.PermissionGroup>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_permissions_pb.PermissionGroup, 8));
};


/**
 * @param {!Array<!proto.api.commons.org.PermissionGroup>} value
 * @return {!proto.api.v1alpha1.org.users.GetMyUserResponse} returns this
*/
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.setPermissionGroupsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.api.commons.org.PermissionGroup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.PermissionGroup}
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.addPermissionGroups = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.api.commons.org.PermissionGroup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.GetMyUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.clearPermissionGroupsList = function() {
  return this.setPermissionGroupsList([]);
};


/**
 * optional api.commons.org.P3PermissionGroup p3_permission_group = 9;
 * @return {?proto.api.commons.org.P3PermissionGroup}
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.getP3PermissionGroup = function() {
  return /** @type{?proto.api.commons.org.P3PermissionGroup} */ (
    jspb.Message.getWrapperField(this, api_commons_org_permissions_pb.P3PermissionGroup, 9));
};


/**
 * @param {?proto.api.commons.org.P3PermissionGroup|undefined} value
 * @return {!proto.api.v1alpha1.org.users.GetMyUserResponse} returns this
*/
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.setP3PermissionGroup = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.GetMyUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.clearP3PermissionGroup = function() {
  return this.setP3PermissionGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.hasP3PermissionGroup = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional AgentProfileGroup agent_profile_group = 10;
 * @return {?proto.api.v1alpha1.org.users.GetMyUserResponse.AgentProfileGroup}
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.getAgentProfileGroup = function() {
  return /** @type{?proto.api.v1alpha1.org.users.GetMyUserResponse.AgentProfileGroup} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.org.users.GetMyUserResponse.AgentProfileGroup, 10));
};


/**
 * @param {?proto.api.v1alpha1.org.users.GetMyUserResponse.AgentProfileGroup|undefined} value
 * @return {!proto.api.v1alpha1.org.users.GetMyUserResponse} returns this
*/
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.setAgentProfileGroup = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.GetMyUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.clearAgentProfileGroup = function() {
  return this.setAgentProfileGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.hasAgentProfileGroup = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * repeated api.commons.org.Trust trusts = 11;
 * @return {!Array<!proto.api.commons.org.Trust>}
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.getTrustsList = function() {
  return /** @type{!Array<!proto.api.commons.org.Trust>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_trusts_pb.Trust, 11));
};


/**
 * @param {!Array<!proto.api.commons.org.Trust>} value
 * @return {!proto.api.v1alpha1.org.users.GetMyUserResponse} returns this
*/
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.setTrustsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.api.commons.org.Trust=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.Trust}
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.addTrusts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.api.commons.org.Trust, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.GetMyUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.clearTrustsList = function() {
  return this.setTrustsList([]);
};


/**
 * optional bool account_owner = 12;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.getAccountOwner = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.GetMyUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.setAccountOwner = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool email_verified = 14;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.getEmailVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.GetMyUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetMyUserResponse.prototype.setEmailVerified = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.GetUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.GetUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.GetUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.GetUserRequest}
 */
proto.api.v1alpha1.org.users.GetUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.GetUserRequest;
  return proto.api.v1alpha1.org.users.GetUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.GetUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.GetUserRequest}
 */
proto.api.v1alpha1.org.users.GetUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.GetUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.GetUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.GetUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserRequest} returns this
 */
proto.api.v1alpha1.org.users.GetUserRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.users.GetUserResponse.repeatedFields_ = [6,7,8,18,19,23];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.GetUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.GetUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orgId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    delegated: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    timeZoneOverride: (f = msg.getTimeZoneOverride()) && api_commons_org_pb.TimeZoneWrapper.toObject(includeInstance, f),
    huntGroup: (f = msg.getHuntGroup()) && proto.api.v1alpha1.org.users.GetUserResponse.HuntGroup.toObject(includeInstance, f),
    labelsList: jspb.Message.toObjectList(msg.getLabelsList(),
    api_commons_org_labels_pb.Label.toObject, includeInstance),
    skillsList: jspb.Message.toObjectList(msg.getSkillsList(),
    api_commons_org_user_pb.Skill.toObject, includeInstance),
    permissionGroupsList: jspb.Message.toObjectList(msg.getPermissionGroupsList(),
    api_commons_org_permissions_pb.PermissionGroup.toObject, includeInstance),
    p3PermissionGroup: (f = msg.getP3PermissionGroup()) && api_commons_org_permissions_pb.P3PermissionGroup.toObject(includeInstance, f),
    agentProfileGroup: (f = msg.getAgentProfileGroup()) && proto.api.v1alpha1.org.users.GetUserResponse.AgentProfileGroup.toObject(includeInstance, f),
    orgName: jspb.Message.getFieldWithDefault(msg, 11, ""),
    firstName: jspb.Message.getFieldWithDefault(msg, 12, ""),
    username: jspb.Message.getFieldWithDefault(msg, 13, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 14, ""),
    loginDisabled: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
    partnerAgentId: jspb.Message.getFieldWithDefault(msg, 16, ""),
    userCallerId: jspb.Message.getFieldWithDefault(msg, 17, ""),
    linkbackNumbersList: (f = jspb.Message.getRepeatedField(msg, 18)) == null ? undefined : f,
    callerIdsList: (f = jspb.Message.getRepeatedField(msg, 19)) == null ? undefined : f,
    defaultApp: jspb.Message.getFieldWithDefault(msg, 20, 0),
    loginSid: jspb.Message.getFieldWithDefault(msg, 21, 0),
    agentSid: jspb.Message.getFieldWithDefault(msg, 22, 0),
    trustsList: jspb.Message.toObjectList(msg.getTrustsList(),
    api_commons_org_trusts_pb.Trust.toObject, includeInstance),
    email: jspb.Message.getFieldWithDefault(msg, 24, ""),
    defaultRegion: jspb.Message.getFieldWithDefault(msg, 25, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    lastUpdated: (f = msg.getLastUpdated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    passwordResetRequired: jspb.Message.getBooleanFieldWithDefault(msg, 28, false),
    accountOwner: jspb.Message.getBooleanFieldWithDefault(msg, 29, false),
    emailVerified: jspb.Message.getBooleanFieldWithDefault(msg, 30, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse}
 */
proto.api.v1alpha1.org.users.GetUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.GetUserResponse;
  return proto.api.v1alpha1.org.users.GetUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.GetUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse}
 */
proto.api.v1alpha1.org.users.GetUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelegated(value);
      break;
    case 4:
      var value = new api_commons_org_pb.TimeZoneWrapper;
      reader.readMessage(value,api_commons_org_pb.TimeZoneWrapper.deserializeBinaryFromReader);
      msg.setTimeZoneOverride(value);
      break;
    case 5:
      var value = new proto.api.v1alpha1.org.users.GetUserResponse.HuntGroup;
      reader.readMessage(value,proto.api.v1alpha1.org.users.GetUserResponse.HuntGroup.deserializeBinaryFromReader);
      msg.setHuntGroup(value);
      break;
    case 6:
      var value = new api_commons_org_labels_pb.Label;
      reader.readMessage(value,api_commons_org_labels_pb.Label.deserializeBinaryFromReader);
      msg.addLabels(value);
      break;
    case 7:
      var value = new api_commons_org_user_pb.Skill;
      reader.readMessage(value,api_commons_org_user_pb.Skill.deserializeBinaryFromReader);
      msg.addSkills(value);
      break;
    case 8:
      var value = new api_commons_org_permissions_pb.PermissionGroup;
      reader.readMessage(value,api_commons_org_permissions_pb.PermissionGroup.deserializeBinaryFromReader);
      msg.addPermissionGroups(value);
      break;
    case 9:
      var value = new api_commons_org_permissions_pb.P3PermissionGroup;
      reader.readMessage(value,api_commons_org_permissions_pb.P3PermissionGroup.deserializeBinaryFromReader);
      msg.setP3PermissionGroup(value);
      break;
    case 10:
      var value = new proto.api.v1alpha1.org.users.GetUserResponse.AgentProfileGroup;
      reader.readMessage(value,proto.api.v1alpha1.org.users.GetUserResponse.AgentProfileGroup.deserializeBinaryFromReader);
      msg.setAgentProfileGroup(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgName(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLoginDisabled(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartnerAgentId(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserCallerId(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.addLinkbackNumbers(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.addCallerIds(value);
      break;
    case 20:
      var value = /** @type {!proto.api.commons.OperatorApplications} */ (reader.readEnum());
      msg.setDefaultApp(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLoginSid(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAgentSid(value);
      break;
    case 23:
      var value = new api_commons_org_trusts_pb.Trust;
      reader.readMessage(value,api_commons_org_trusts_pb.Trust.deserializeBinaryFromReader);
      msg.addTrusts(value);
      break;
    case 24:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultRegion(value);
      break;
    case 26:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 27:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastUpdated(value);
      break;
    case 28:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPasswordResetRequired(value);
      break;
    case 29:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccountOwner(value);
      break;
    case 30:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEmailVerified(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.GetUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.GetUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDelegated();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getTimeZoneOverride();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      api_commons_org_pb.TimeZoneWrapper.serializeBinaryToWriter
    );
  }
  f = message.getHuntGroup();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.api.v1alpha1.org.users.GetUserResponse.HuntGroup.serializeBinaryToWriter
    );
  }
  f = message.getLabelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      api_commons_org_labels_pb.Label.serializeBinaryToWriter
    );
  }
  f = message.getSkillsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      api_commons_org_user_pb.Skill.serializeBinaryToWriter
    );
  }
  f = message.getPermissionGroupsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      api_commons_org_permissions_pb.PermissionGroup.serializeBinaryToWriter
    );
  }
  f = message.getP3PermissionGroup();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      api_commons_org_permissions_pb.P3PermissionGroup.serializeBinaryToWriter
    );
  }
  f = message.getAgentProfileGroup();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.api.v1alpha1.org.users.GetUserResponse.AgentProfileGroup.serializeBinaryToWriter
    );
  }
  f = message.getOrgName();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getLoginDisabled();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getPartnerAgentId();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getUserCallerId();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getLinkbackNumbersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      18,
      f
    );
  }
  f = message.getCallerIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      19,
      f
    );
  }
  f = message.getDefaultApp();
  if (f !== 0.0) {
    writer.writeEnum(
      20,
      f
    );
  }
  f = message.getLoginSid();
  if (f !== 0) {
    writer.writeInt64(
      21,
      f
    );
  }
  f = message.getAgentSid();
  if (f !== 0) {
    writer.writeInt64(
      22,
      f
    );
  }
  f = message.getTrustsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      23,
      f,
      api_commons_org_trusts_pb.Trust.serializeBinaryToWriter
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      24,
      f
    );
  }
  f = message.getDefaultRegion();
  if (f.length > 0) {
    writer.writeString(
      25,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLastUpdated();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPasswordResetRequired();
  if (f) {
    writer.writeBool(
      28,
      f
    );
  }
  f = message.getAccountOwner();
  if (f) {
    writer.writeBool(
      29,
      f
    );
  }
  f = message.getEmailVerified();
  if (f) {
    writer.writeBool(
      30,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.GetUserResponse.HuntGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.GetUserResponse.HuntGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.GetUserResponse.HuntGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserResponse.HuntGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    huntGroupSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    huntGroupName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse.HuntGroup}
 */
proto.api.v1alpha1.org.users.GetUserResponse.HuntGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.GetUserResponse.HuntGroup;
  return proto.api.v1alpha1.org.users.GetUserResponse.HuntGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.GetUserResponse.HuntGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse.HuntGroup}
 */
proto.api.v1alpha1.org.users.GetUserResponse.HuntGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHuntGroupSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHuntGroupName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.GetUserResponse.HuntGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.GetUserResponse.HuntGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.GetUserResponse.HuntGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserResponse.HuntGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getHuntGroupName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 hunt_group_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.org.users.GetUserResponse.HuntGroup.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse.HuntGroup} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.HuntGroup.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string hunt_group_name = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserResponse.HuntGroup.prototype.getHuntGroupName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse.HuntGroup} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.HuntGroup.prototype.setHuntGroupName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.GetUserResponse.AgentProfileGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.GetUserResponse.AgentProfileGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.GetUserResponse.AgentProfileGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserResponse.AgentProfileGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    agentProfileGroupId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    agentProfileGroupName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse.AgentProfileGroup}
 */
proto.api.v1alpha1.org.users.GetUserResponse.AgentProfileGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.GetUserResponse.AgentProfileGroup;
  return proto.api.v1alpha1.org.users.GetUserResponse.AgentProfileGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.GetUserResponse.AgentProfileGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse.AgentProfileGroup}
 */
proto.api.v1alpha1.org.users.GetUserResponse.AgentProfileGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAgentProfileGroupId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAgentProfileGroupName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.GetUserResponse.AgentProfileGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.GetUserResponse.AgentProfileGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.GetUserResponse.AgentProfileGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserResponse.AgentProfileGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentProfileGroupId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAgentProfileGroupName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string agent_profile_group_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserResponse.AgentProfileGroup.prototype.getAgentProfileGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse.AgentProfileGroup} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.AgentProfileGroup.prototype.setAgentProfileGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string agent_profile_group_name = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserResponse.AgentProfileGroup.prototype.getAgentProfileGroupName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse.AgentProfileGroup} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.AgentProfileGroup.prototype.setAgentProfileGroupName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool delegated = 3;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.getDelegated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.setDelegated = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional api.commons.TimeZoneWrapper time_zone_override = 4;
 * @return {?proto.api.commons.TimeZoneWrapper}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.getTimeZoneOverride = function() {
  return /** @type{?proto.api.commons.TimeZoneWrapper} */ (
    jspb.Message.getWrapperField(this, api_commons_org_pb.TimeZoneWrapper, 4));
};


/**
 * @param {?proto.api.commons.TimeZoneWrapper|undefined} value
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
*/
proto.api.v1alpha1.org.users.GetUserResponse.prototype.setTimeZoneOverride = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.clearTimeZoneOverride = function() {
  return this.setTimeZoneOverride(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.hasTimeZoneOverride = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional HuntGroup hunt_group = 5;
 * @return {?proto.api.v1alpha1.org.users.GetUserResponse.HuntGroup}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.getHuntGroup = function() {
  return /** @type{?proto.api.v1alpha1.org.users.GetUserResponse.HuntGroup} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.org.users.GetUserResponse.HuntGroup, 5));
};


/**
 * @param {?proto.api.v1alpha1.org.users.GetUserResponse.HuntGroup|undefined} value
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
*/
proto.api.v1alpha1.org.users.GetUserResponse.prototype.setHuntGroup = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.clearHuntGroup = function() {
  return this.setHuntGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.hasHuntGroup = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated api.commons.org.Label labels = 6;
 * @return {!Array<!proto.api.commons.org.Label>}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.getLabelsList = function() {
  return /** @type{!Array<!proto.api.commons.org.Label>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_labels_pb.Label, 6));
};


/**
 * @param {!Array<!proto.api.commons.org.Label>} value
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
*/
proto.api.v1alpha1.org.users.GetUserResponse.prototype.setLabelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.api.commons.org.Label=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.Label}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.addLabels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.api.commons.org.Label, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.clearLabelsList = function() {
  return this.setLabelsList([]);
};


/**
 * repeated api.commons.org.Skill skills = 7;
 * @return {!Array<!proto.api.commons.org.Skill>}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.getSkillsList = function() {
  return /** @type{!Array<!proto.api.commons.org.Skill>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_user_pb.Skill, 7));
};


/**
 * @param {!Array<!proto.api.commons.org.Skill>} value
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
*/
proto.api.v1alpha1.org.users.GetUserResponse.prototype.setSkillsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.api.commons.org.Skill=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.Skill}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.addSkills = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.api.commons.org.Skill, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.clearSkillsList = function() {
  return this.setSkillsList([]);
};


/**
 * repeated api.commons.org.PermissionGroup permission_groups = 8;
 * @return {!Array<!proto.api.commons.org.PermissionGroup>}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.getPermissionGroupsList = function() {
  return /** @type{!Array<!proto.api.commons.org.PermissionGroup>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_permissions_pb.PermissionGroup, 8));
};


/**
 * @param {!Array<!proto.api.commons.org.PermissionGroup>} value
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
*/
proto.api.v1alpha1.org.users.GetUserResponse.prototype.setPermissionGroupsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.api.commons.org.PermissionGroup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.PermissionGroup}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.addPermissionGroups = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.api.commons.org.PermissionGroup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.clearPermissionGroupsList = function() {
  return this.setPermissionGroupsList([]);
};


/**
 * optional api.commons.org.P3PermissionGroup p3_permission_group = 9;
 * @return {?proto.api.commons.org.P3PermissionGroup}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.getP3PermissionGroup = function() {
  return /** @type{?proto.api.commons.org.P3PermissionGroup} */ (
    jspb.Message.getWrapperField(this, api_commons_org_permissions_pb.P3PermissionGroup, 9));
};


/**
 * @param {?proto.api.commons.org.P3PermissionGroup|undefined} value
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
*/
proto.api.v1alpha1.org.users.GetUserResponse.prototype.setP3PermissionGroup = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.clearP3PermissionGroup = function() {
  return this.setP3PermissionGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.hasP3PermissionGroup = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional AgentProfileGroup agent_profile_group = 10;
 * @return {?proto.api.v1alpha1.org.users.GetUserResponse.AgentProfileGroup}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.getAgentProfileGroup = function() {
  return /** @type{?proto.api.v1alpha1.org.users.GetUserResponse.AgentProfileGroup} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.org.users.GetUserResponse.AgentProfileGroup, 10));
};


/**
 * @param {?proto.api.v1alpha1.org.users.GetUserResponse.AgentProfileGroup|undefined} value
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
*/
proto.api.v1alpha1.org.users.GetUserResponse.prototype.setAgentProfileGroup = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.clearAgentProfileGroup = function() {
  return this.setAgentProfileGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.hasAgentProfileGroup = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string org_name = 11;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.getOrgName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.setOrgName = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string first_name = 12;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string username = 13;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string last_name = 14;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional bool login_disabled = 15;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.getLoginDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.setLoginDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * optional string partner_agent_id = 16;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.getPartnerAgentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.setPartnerAgentId = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string user_caller_id = 17;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.getUserCallerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.setUserCallerId = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * repeated string linkback_numbers = 18;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.getLinkbackNumbersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 18));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.setLinkbackNumbersList = function(value) {
  return jspb.Message.setField(this, 18, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.addLinkbackNumbers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 18, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.clearLinkbackNumbersList = function() {
  return this.setLinkbackNumbersList([]);
};


/**
 * repeated string caller_ids = 19;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.getCallerIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 19));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.setCallerIdsList = function(value) {
  return jspb.Message.setField(this, 19, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.addCallerIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 19, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.clearCallerIdsList = function() {
  return this.setCallerIdsList([]);
};


/**
 * optional api.commons.OperatorApplications default_app = 20;
 * @return {!proto.api.commons.OperatorApplications}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.getDefaultApp = function() {
  return /** @type {!proto.api.commons.OperatorApplications} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {!proto.api.commons.OperatorApplications} value
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.setDefaultApp = function(value) {
  return jspb.Message.setProto3EnumField(this, 20, value);
};


/**
 * optional int64 login_sid = 21;
 * @return {number}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.getLoginSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.setLoginSid = function(value) {
  return jspb.Message.setProto3IntField(this, 21, value);
};


/**
 * optional int64 agent_sid = 22;
 * @return {number}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.getAgentSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.setAgentSid = function(value) {
  return jspb.Message.setProto3IntField(this, 22, value);
};


/**
 * repeated api.commons.org.Trust trusts = 23;
 * @return {!Array<!proto.api.commons.org.Trust>}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.getTrustsList = function() {
  return /** @type{!Array<!proto.api.commons.org.Trust>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_trusts_pb.Trust, 23));
};


/**
 * @param {!Array<!proto.api.commons.org.Trust>} value
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
*/
proto.api.v1alpha1.org.users.GetUserResponse.prototype.setTrustsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 23, value);
};


/**
 * @param {!proto.api.commons.org.Trust=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.Trust}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.addTrusts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 23, opt_value, proto.api.commons.org.Trust, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.clearTrustsList = function() {
  return this.setTrustsList([]);
};


/**
 * optional string email = 24;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 24, value);
};


/**
 * optional string default_region = 25;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.getDefaultRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.setDefaultRegion = function(value) {
  return jspb.Message.setProto3StringField(this, 25, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 26;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 26));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
*/
proto.api.v1alpha1.org.users.GetUserResponse.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 26, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional google.protobuf.Timestamp last_updated = 27;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.getLastUpdated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 27));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
*/
proto.api.v1alpha1.org.users.GetUserResponse.prototype.setLastUpdated = function(value) {
  return jspb.Message.setWrapperField(this, 27, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.clearLastUpdated = function() {
  return this.setLastUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.hasLastUpdated = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional bool password_reset_required = 28;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.getPasswordResetRequired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 28, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.setPasswordResetRequired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 28, value);
};


/**
 * optional bool account_owner = 29;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.getAccountOwner = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 29, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.setAccountOwner = function(value) {
  return jspb.Message.setProto3BooleanField(this, 29, value);
};


/**
 * optional bool email_verified = 30;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.getEmailVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 30, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserResponse.prototype.setEmailVerified = function(value) {
  return jspb.Message.setProto3BooleanField(this, 30, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.GetUserByOrgIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.GetUserByOrgIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orgId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.GetUserByOrgIdRequest}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.GetUserByOrgIdRequest;
  return proto.api.v1alpha1.org.users.GetUserByOrgIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.GetUserByOrgIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.GetUserByOrgIdRequest}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.GetUserByOrgIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.GetUserByOrgIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserByOrgIdRequest} returns this
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserByOrgIdRequest} returns this
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.repeatedFields_ = [6,7,8,21];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orgId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    username: jspb.Message.getFieldWithDefault(msg, 13, ""),
    delegated: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    orgName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    huntGroup: (f = msg.getHuntGroup()) && proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.HuntGroup.toObject(includeInstance, f),
    labelsList: jspb.Message.toObjectList(msg.getLabelsList(),
    api_commons_org_labels_pb.Label.toObject, includeInstance),
    skillsList: jspb.Message.toObjectList(msg.getSkillsList(),
    api_commons_org_user_pb.Skill.toObject, includeInstance),
    permissionGroupsList: jspb.Message.toObjectList(msg.getPermissionGroupsList(),
    api_commons_org_permissions_pb.PermissionGroup.toObject, includeInstance),
    p3PermissionGroup: (f = msg.getP3PermissionGroup()) && api_commons_org_permissions_pb.P3PermissionGroup.toObject(includeInstance, f),
    agentProfileGroup: (f = msg.getAgentProfileGroup()) && proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.AgentProfileGroup.toObject(includeInstance, f),
    trustsList: jspb.Message.toObjectList(msg.getTrustsList(),
    api_commons_org_trusts_pb.Trust.toObject, includeInstance),
    accountOwner: jspb.Message.getBooleanFieldWithDefault(msg, 22, false),
    emailVerified: jspb.Message.getBooleanFieldWithDefault(msg, 23, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.GetUserByOrgIdResponse;
  return proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelegated(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgName(value);
      break;
    case 5:
      var value = new proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.HuntGroup;
      reader.readMessage(value,proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.HuntGroup.deserializeBinaryFromReader);
      msg.setHuntGroup(value);
      break;
    case 6:
      var value = new api_commons_org_labels_pb.Label;
      reader.readMessage(value,api_commons_org_labels_pb.Label.deserializeBinaryFromReader);
      msg.addLabels(value);
      break;
    case 7:
      var value = new api_commons_org_user_pb.Skill;
      reader.readMessage(value,api_commons_org_user_pb.Skill.deserializeBinaryFromReader);
      msg.addSkills(value);
      break;
    case 8:
      var value = new api_commons_org_permissions_pb.PermissionGroup;
      reader.readMessage(value,api_commons_org_permissions_pb.PermissionGroup.deserializeBinaryFromReader);
      msg.addPermissionGroups(value);
      break;
    case 9:
      var value = new api_commons_org_permissions_pb.P3PermissionGroup;
      reader.readMessage(value,api_commons_org_permissions_pb.P3PermissionGroup.deserializeBinaryFromReader);
      msg.setP3PermissionGroup(value);
      break;
    case 10:
      var value = new proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.AgentProfileGroup;
      reader.readMessage(value,proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.AgentProfileGroup.deserializeBinaryFromReader);
      msg.setAgentProfileGroup(value);
      break;
    case 21:
      var value = new api_commons_org_trusts_pb.Trust;
      reader.readMessage(value,api_commons_org_trusts_pb.Trust.deserializeBinaryFromReader);
      msg.addTrusts(value);
      break;
    case 22:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccountOwner(value);
      break;
    case 23:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEmailVerified(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getDelegated();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getOrgName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getHuntGroup();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.HuntGroup.serializeBinaryToWriter
    );
  }
  f = message.getLabelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      api_commons_org_labels_pb.Label.serializeBinaryToWriter
    );
  }
  f = message.getSkillsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      api_commons_org_user_pb.Skill.serializeBinaryToWriter
    );
  }
  f = message.getPermissionGroupsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      api_commons_org_permissions_pb.PermissionGroup.serializeBinaryToWriter
    );
  }
  f = message.getP3PermissionGroup();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      api_commons_org_permissions_pb.P3PermissionGroup.serializeBinaryToWriter
    );
  }
  f = message.getAgentProfileGroup();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.AgentProfileGroup.serializeBinaryToWriter
    );
  }
  f = message.getTrustsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      21,
      f,
      api_commons_org_trusts_pb.Trust.serializeBinaryToWriter
    );
  }
  f = message.getAccountOwner();
  if (f) {
    writer.writeBool(
      22,
      f
    );
  }
  f = message.getEmailVerified();
  if (f) {
    writer.writeBool(
      23,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.HuntGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.HuntGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.HuntGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.HuntGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    huntGroupSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    huntGroupName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.HuntGroup}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.HuntGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.HuntGroup;
  return proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.HuntGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.HuntGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.HuntGroup}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.HuntGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHuntGroupSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHuntGroupName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.HuntGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.HuntGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.HuntGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.HuntGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getHuntGroupName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 hunt_group_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.HuntGroup.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.HuntGroup} returns this
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.HuntGroup.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string hunt_group_name = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.HuntGroup.prototype.getHuntGroupName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.HuntGroup} returns this
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.HuntGroup.prototype.setHuntGroupName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.AgentProfileGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.AgentProfileGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.AgentProfileGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.AgentProfileGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    agentProfileGroupId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    agentProfileGroupName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.AgentProfileGroup}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.AgentProfileGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.AgentProfileGroup;
  return proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.AgentProfileGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.AgentProfileGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.AgentProfileGroup}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.AgentProfileGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAgentProfileGroupId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAgentProfileGroupName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.AgentProfileGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.AgentProfileGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.AgentProfileGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.AgentProfileGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentProfileGroupId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAgentProfileGroupName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string agent_profile_group_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.AgentProfileGroup.prototype.getAgentProfileGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.AgentProfileGroup} returns this
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.AgentProfileGroup.prototype.setAgentProfileGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string agent_profile_group_name = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.AgentProfileGroup.prototype.getAgentProfileGroupName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.AgentProfileGroup} returns this
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.AgentProfileGroup.prototype.setAgentProfileGroupName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string username = 13;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional bool delegated = 3;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.getDelegated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.setDelegated = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string org_name = 4;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.getOrgName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.setOrgName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional HuntGroup hunt_group = 5;
 * @return {?proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.HuntGroup}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.getHuntGroup = function() {
  return /** @type{?proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.HuntGroup} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.HuntGroup, 5));
};


/**
 * @param {?proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.HuntGroup|undefined} value
 * @return {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse} returns this
*/
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.setHuntGroup = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.clearHuntGroup = function() {
  return this.setHuntGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.hasHuntGroup = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated api.commons.org.Label labels = 6;
 * @return {!Array<!proto.api.commons.org.Label>}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.getLabelsList = function() {
  return /** @type{!Array<!proto.api.commons.org.Label>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_labels_pb.Label, 6));
};


/**
 * @param {!Array<!proto.api.commons.org.Label>} value
 * @return {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse} returns this
*/
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.setLabelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.api.commons.org.Label=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.Label}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.addLabels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.api.commons.org.Label, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.clearLabelsList = function() {
  return this.setLabelsList([]);
};


/**
 * repeated api.commons.org.Skill skills = 7;
 * @return {!Array<!proto.api.commons.org.Skill>}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.getSkillsList = function() {
  return /** @type{!Array<!proto.api.commons.org.Skill>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_user_pb.Skill, 7));
};


/**
 * @param {!Array<!proto.api.commons.org.Skill>} value
 * @return {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse} returns this
*/
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.setSkillsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.api.commons.org.Skill=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.Skill}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.addSkills = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.api.commons.org.Skill, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.clearSkillsList = function() {
  return this.setSkillsList([]);
};


/**
 * repeated api.commons.org.PermissionGroup permission_groups = 8;
 * @return {!Array<!proto.api.commons.org.PermissionGroup>}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.getPermissionGroupsList = function() {
  return /** @type{!Array<!proto.api.commons.org.PermissionGroup>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_permissions_pb.PermissionGroup, 8));
};


/**
 * @param {!Array<!proto.api.commons.org.PermissionGroup>} value
 * @return {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse} returns this
*/
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.setPermissionGroupsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.api.commons.org.PermissionGroup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.PermissionGroup}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.addPermissionGroups = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.api.commons.org.PermissionGroup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.clearPermissionGroupsList = function() {
  return this.setPermissionGroupsList([]);
};


/**
 * optional api.commons.org.P3PermissionGroup p3_permission_group = 9;
 * @return {?proto.api.commons.org.P3PermissionGroup}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.getP3PermissionGroup = function() {
  return /** @type{?proto.api.commons.org.P3PermissionGroup} */ (
    jspb.Message.getWrapperField(this, api_commons_org_permissions_pb.P3PermissionGroup, 9));
};


/**
 * @param {?proto.api.commons.org.P3PermissionGroup|undefined} value
 * @return {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse} returns this
*/
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.setP3PermissionGroup = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.clearP3PermissionGroup = function() {
  return this.setP3PermissionGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.hasP3PermissionGroup = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional AgentProfileGroup agent_profile_group = 10;
 * @return {?proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.AgentProfileGroup}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.getAgentProfileGroup = function() {
  return /** @type{?proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.AgentProfileGroup} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.AgentProfileGroup, 10));
};


/**
 * @param {?proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.AgentProfileGroup|undefined} value
 * @return {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse} returns this
*/
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.setAgentProfileGroup = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.clearAgentProfileGroup = function() {
  return this.setAgentProfileGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.hasAgentProfileGroup = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * repeated api.commons.org.Trust trusts = 21;
 * @return {!Array<!proto.api.commons.org.Trust>}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.getTrustsList = function() {
  return /** @type{!Array<!proto.api.commons.org.Trust>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_trusts_pb.Trust, 21));
};


/**
 * @param {!Array<!proto.api.commons.org.Trust>} value
 * @return {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse} returns this
*/
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.setTrustsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 21, value);
};


/**
 * @param {!proto.api.commons.org.Trust=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.Trust}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.addTrusts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 21, opt_value, proto.api.commons.org.Trust, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.clearTrustsList = function() {
  return this.setTrustsList([]);
};


/**
 * optional bool account_owner = 22;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.getAccountOwner = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 22, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.setAccountOwner = function(value) {
  return jspb.Message.setProto3BooleanField(this, 22, value);
};


/**
 * optional bool email_verified = 23;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.getEmailVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 23, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.GetUserByOrgIdResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserByOrgIdResponse.prototype.setEmailVerified = function(value) {
  return jspb.Message.setProto3BooleanField(this, 23, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.ListAgentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.ListAgentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.ListAgentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListAgentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.ListAgentsRequest}
 */
proto.api.v1alpha1.org.users.ListAgentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.ListAgentsRequest;
  return proto.api.v1alpha1.org.users.ListAgentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.ListAgentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.ListAgentsRequest}
 */
proto.api.v1alpha1.org.users.ListAgentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.ListAgentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.ListAgentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.ListAgentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListAgentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.ListAgentsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.ListAgentsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    agentsList: jspb.Message.toObjectList(msg.getAgentsList(),
    proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.ListAgentsResponse;
  return proto.api.v1alpha1.org.users.ListAgentsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.ListAgentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails;
      reader.readMessage(value,proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.deserializeBinaryFromReader);
      msg.addAgents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.ListAgentsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.ListAgentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.repeatedFields_ = [6,9,11,12];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orgId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    firstName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    username: jspb.Message.getFieldWithDefault(msg, 5, ""),
    skillsList: jspb.Message.toObjectList(msg.getSkillsList(),
    api_commons_org_user_pb.Skill.toObject, includeInstance),
    loginDisabled: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    huntGroup: (f = msg.getHuntGroup()) && proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.HuntGroup.toObject(includeInstance, f),
    labelsList: jspb.Message.toObjectList(msg.getLabelsList(),
    api_commons_org_labels_pb.Label.toObject, includeInstance),
    delegated: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    trustIdsList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
    permissionGroupsList: jspb.Message.toObjectList(msg.getPermissionGroupsList(),
    api_commons_org_permissions_pb.PermissionGroup.toObject, includeInstance),
    agentSid: jspb.Message.getFieldWithDefault(msg, 13, 0),
    name: jspb.Message.getFieldWithDefault(msg, 14, ""),
    partnerAgentId: jspb.Message.getFieldWithDefault(msg, 15, ""),
    userCallerId: jspb.Message.getFieldWithDefault(msg, 16, ""),
    created: (f = msg.getCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    lastUpdated: (f = msg.getLastUpdated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    agentProfileGroup: (f = msg.getAgentProfileGroup()) && proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.AgentProfileGroup.toObject(includeInstance, f),
    agent: jspb.Message.getBooleanFieldWithDefault(msg, 20, false),
    timeZoneOverride: (f = msg.getTimeZoneOverride()) && api_commons_org_pb.TimeZoneWrapper.toObject(includeInstance, f),
    email: jspb.Message.getFieldWithDefault(msg, 22, ""),
    emailVerified: jspb.Message.getBooleanFieldWithDefault(msg, 23, false),
    mfaInfo: (f = msg.getMfaInfo()) && api_commons_org_user_pb.MfaInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails;
  return proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 6:
      var value = new api_commons_org_user_pb.Skill;
      reader.readMessage(value,api_commons_org_user_pb.Skill.deserializeBinaryFromReader);
      msg.addSkills(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLoginDisabled(value);
      break;
    case 8:
      var value = new proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.HuntGroup;
      reader.readMessage(value,proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.HuntGroup.deserializeBinaryFromReader);
      msg.setHuntGroup(value);
      break;
    case 9:
      var value = new api_commons_org_labels_pb.Label;
      reader.readMessage(value,api_commons_org_labels_pb.Label.deserializeBinaryFromReader);
      msg.addLabels(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelegated(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.addTrustIds(value);
      break;
    case 12:
      var value = new api_commons_org_permissions_pb.PermissionGroup;
      reader.readMessage(value,api_commons_org_permissions_pb.PermissionGroup.deserializeBinaryFromReader);
      msg.addPermissionGroups(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAgentSid(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartnerAgentId(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserCallerId(value);
      break;
    case 17:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreated(value);
      break;
    case 18:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastUpdated(value);
      break;
    case 19:
      var value = new proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.AgentProfileGroup;
      reader.readMessage(value,proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.AgentProfileGroup.deserializeBinaryFromReader);
      msg.setAgentProfileGroup(value);
      break;
    case 20:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAgent(value);
      break;
    case 21:
      var value = new api_commons_org_pb.TimeZoneWrapper;
      reader.readMessage(value,api_commons_org_pb.TimeZoneWrapper.deserializeBinaryFromReader);
      msg.setTimeZoneOverride(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 23:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEmailVerified(value);
      break;
    case 24:
      var value = new api_commons_org_user_pb.MfaInfo;
      reader.readMessage(value,api_commons_org_user_pb.MfaInfo.deserializeBinaryFromReader);
      msg.setMfaInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSkillsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      api_commons_org_user_pb.Skill.serializeBinaryToWriter
    );
  }
  f = message.getLoginDisabled();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getHuntGroup();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.HuntGroup.serializeBinaryToWriter
    );
  }
  f = message.getLabelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      api_commons_org_labels_pb.Label.serializeBinaryToWriter
    );
  }
  f = message.getDelegated();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getTrustIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
  f = message.getPermissionGroupsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      api_commons_org_permissions_pb.PermissionGroup.serializeBinaryToWriter
    );
  }
  f = message.getAgentSid();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getPartnerAgentId();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getUserCallerId();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getCreated();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLastUpdated();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAgentProfileGroup();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.AgentProfileGroup.serializeBinaryToWriter
    );
  }
  f = message.getAgent();
  if (f) {
    writer.writeBool(
      20,
      f
    );
  }
  f = message.getTimeZoneOverride();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      api_commons_org_pb.TimeZoneWrapper.serializeBinaryToWriter
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getEmailVerified();
  if (f) {
    writer.writeBool(
      23,
      f
    );
  }
  f = message.getMfaInfo();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      api_commons_org_user_pb.MfaInfo.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.HuntGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.HuntGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.HuntGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.HuntGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    huntGroupSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    huntGroupName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.HuntGroup}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.HuntGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.HuntGroup;
  return proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.HuntGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.HuntGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.HuntGroup}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.HuntGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHuntGroupSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHuntGroupName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.HuntGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.HuntGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.HuntGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.HuntGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getHuntGroupName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 hunt_group_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.HuntGroup.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.HuntGroup} returns this
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.HuntGroup.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string hunt_group_name = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.HuntGroup.prototype.getHuntGroupName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.HuntGroup} returns this
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.HuntGroup.prototype.setHuntGroupName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.AgentProfileGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.AgentProfileGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.AgentProfileGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.AgentProfileGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    agentProfileGroupId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    agentProfileGroupName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.AgentProfileGroup}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.AgentProfileGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.AgentProfileGroup;
  return proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.AgentProfileGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.AgentProfileGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.AgentProfileGroup}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.AgentProfileGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAgentProfileGroupId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAgentProfileGroupName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.AgentProfileGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.AgentProfileGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.AgentProfileGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.AgentProfileGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentProfileGroupId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAgentProfileGroupName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string agent_profile_group_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.AgentProfileGroup.prototype.getAgentProfileGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.AgentProfileGroup} returns this
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.AgentProfileGroup.prototype.setAgentProfileGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string agent_profile_group_name = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.AgentProfileGroup.prototype.getAgentProfileGroupName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.AgentProfileGroup} returns this
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.AgentProfileGroup.prototype.setAgentProfileGroupName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string first_name = 3;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string last_name = 4;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string username = 5;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated api.commons.org.Skill skills = 6;
 * @return {!Array<!proto.api.commons.org.Skill>}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.getSkillsList = function() {
  return /** @type{!Array<!proto.api.commons.org.Skill>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_user_pb.Skill, 6));
};


/**
 * @param {!Array<!proto.api.commons.org.Skill>} value
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} returns this
*/
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.setSkillsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.api.commons.org.Skill=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.Skill}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.addSkills = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.api.commons.org.Skill, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.clearSkillsList = function() {
  return this.setSkillsList([]);
};


/**
 * optional bool login_disabled = 7;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.getLoginDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.setLoginDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional HuntGroup hunt_group = 8;
 * @return {?proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.HuntGroup}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.getHuntGroup = function() {
  return /** @type{?proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.HuntGroup} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.HuntGroup, 8));
};


/**
 * @param {?proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.HuntGroup|undefined} value
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} returns this
*/
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.setHuntGroup = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.clearHuntGroup = function() {
  return this.setHuntGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.hasHuntGroup = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated api.commons.org.Label labels = 9;
 * @return {!Array<!proto.api.commons.org.Label>}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.getLabelsList = function() {
  return /** @type{!Array<!proto.api.commons.org.Label>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_labels_pb.Label, 9));
};


/**
 * @param {!Array<!proto.api.commons.org.Label>} value
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} returns this
*/
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.setLabelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.api.commons.org.Label=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.Label}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.addLabels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.api.commons.org.Label, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.clearLabelsList = function() {
  return this.setLabelsList([]);
};


/**
 * optional bool delegated = 10;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.getDelegated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.setDelegated = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * repeated string trust_ids = 11;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.getTrustIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.setTrustIdsList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.addTrustIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.clearTrustIdsList = function() {
  return this.setTrustIdsList([]);
};


/**
 * repeated api.commons.org.PermissionGroup permission_groups = 12;
 * @return {!Array<!proto.api.commons.org.PermissionGroup>}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.getPermissionGroupsList = function() {
  return /** @type{!Array<!proto.api.commons.org.PermissionGroup>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_permissions_pb.PermissionGroup, 12));
};


/**
 * @param {!Array<!proto.api.commons.org.PermissionGroup>} value
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} returns this
*/
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.setPermissionGroupsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.api.commons.org.PermissionGroup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.PermissionGroup}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.addPermissionGroups = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.api.commons.org.PermissionGroup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.clearPermissionGroupsList = function() {
  return this.setPermissionGroupsList([]);
};


/**
 * optional int64 agent_sid = 13;
 * @return {number}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.getAgentSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.setAgentSid = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional string name = 14;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string partner_agent_id = 15;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.getPartnerAgentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.setPartnerAgentId = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string user_caller_id = 16;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.getUserCallerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.setUserCallerId = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional google.protobuf.Timestamp created = 17;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.getCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 17));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} returns this
*/
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.setCreated = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.clearCreated = function() {
  return this.setCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.hasCreated = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional google.protobuf.Timestamp last_updated = 18;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.getLastUpdated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 18));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} returns this
*/
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.setLastUpdated = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.clearLastUpdated = function() {
  return this.setLastUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.hasLastUpdated = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional AgentProfileGroup agent_profile_group = 19;
 * @return {?proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.AgentProfileGroup}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.getAgentProfileGroup = function() {
  return /** @type{?proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.AgentProfileGroup} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.AgentProfileGroup, 19));
};


/**
 * @param {?proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.AgentProfileGroup|undefined} value
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} returns this
*/
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.setAgentProfileGroup = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.clearAgentProfileGroup = function() {
  return this.setAgentProfileGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.hasAgentProfileGroup = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional bool agent = 20;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.getAgent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 20, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.setAgent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 20, value);
};


/**
 * optional api.commons.TimeZoneWrapper time_zone_override = 21;
 * @return {?proto.api.commons.TimeZoneWrapper}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.getTimeZoneOverride = function() {
  return /** @type{?proto.api.commons.TimeZoneWrapper} */ (
    jspb.Message.getWrapperField(this, api_commons_org_pb.TimeZoneWrapper, 21));
};


/**
 * @param {?proto.api.commons.TimeZoneWrapper|undefined} value
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} returns this
*/
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.setTimeZoneOverride = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.clearTimeZoneOverride = function() {
  return this.setTimeZoneOverride(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.hasTimeZoneOverride = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional string email = 22;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional bool email_verified = 23;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.getEmailVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 23, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.setEmailVerified = function(value) {
  return jspb.Message.setProto3BooleanField(this, 23, value);
};


/**
 * optional api.commons.org.MfaInfo mfa_info = 24;
 * @return {?proto.api.commons.org.MfaInfo}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.getMfaInfo = function() {
  return /** @type{?proto.api.commons.org.MfaInfo} */ (
    jspb.Message.getWrapperField(this, api_commons_org_user_pb.MfaInfo, 24));
};


/**
 * @param {?proto.api.commons.org.MfaInfo|undefined} value
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} returns this
*/
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.setMfaInfo = function(value) {
  return jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.clearMfaInfo = function() {
  return this.setMfaInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails.prototype.hasMfaInfo = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * repeated AgentDetails agents = 1;
 * @return {!Array<!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails>}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.prototype.getAgentsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails>} value
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse} returns this
*/
proto.api.v1alpha1.org.users.ListAgentsResponse.prototype.setAgentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails}
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.prototype.addAgents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.org.users.ListAgentsResponse.AgentDetails, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.ListAgentsResponse} returns this
 */
proto.api.v1alpha1.org.users.ListAgentsResponse.prototype.clearAgentsList = function() {
  return this.setAgentsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.ListPublicUsersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.ListPublicUsersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.ListPublicUsersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListPublicUsersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    agentFilter: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    archivedFilter: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.ListPublicUsersRequest}
 */
proto.api.v1alpha1.org.users.ListPublicUsersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.ListPublicUsersRequest;
  return proto.api.v1alpha1.org.users.ListPublicUsersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.ListPublicUsersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.ListPublicUsersRequest}
 */
proto.api.v1alpha1.org.users.ListPublicUsersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAgentFilter(value);
      break;
    case 2:
      var value = /** @type {!proto.api.commons.UserArchivedStateFilter} */ (reader.readEnum());
      msg.setArchivedFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.ListPublicUsersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.ListPublicUsersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.ListPublicUsersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListPublicUsersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentFilter();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getArchivedFilter();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional bool agent_filter = 1;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.ListPublicUsersRequest.prototype.getAgentFilter = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.ListPublicUsersRequest} returns this
 */
proto.api.v1alpha1.org.users.ListPublicUsersRequest.prototype.setAgentFilter = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional api.commons.UserArchivedStateFilter archived_filter = 2;
 * @return {!proto.api.commons.UserArchivedStateFilter}
 */
proto.api.v1alpha1.org.users.ListPublicUsersRequest.prototype.getArchivedFilter = function() {
  return /** @type {!proto.api.commons.UserArchivedStateFilter} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.UserArchivedStateFilter} value
 * @return {!proto.api.v1alpha1.org.users.ListPublicUsersRequest} returns this
 */
proto.api.v1alpha1.org.users.ListPublicUsersRequest.prototype.setArchivedFilter = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.users.ListPublicUsersResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.ListPublicUsersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.ListPublicUsersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.ListPublicUsersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListPublicUsersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    usersList: jspb.Message.toObjectList(msg.getUsersList(),
    proto.api.v1alpha1.org.users.ListPublicUsersResponse.User.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.ListPublicUsersResponse}
 */
proto.api.v1alpha1.org.users.ListPublicUsersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.ListPublicUsersResponse;
  return proto.api.v1alpha1.org.users.ListPublicUsersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.ListPublicUsersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.ListPublicUsersResponse}
 */
proto.api.v1alpha1.org.users.ListPublicUsersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.org.users.ListPublicUsersResponse.User;
      reader.readMessage(value,proto.api.v1alpha1.org.users.ListPublicUsersResponse.User.deserializeBinaryFromReader);
      msg.addUsers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.ListPublicUsersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.ListPublicUsersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.ListPublicUsersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListPublicUsersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.org.users.ListPublicUsersResponse.User.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.ListPublicUsersResponse.User.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.ListPublicUsersResponse.User.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.ListPublicUsersResponse.User} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListPublicUsersResponse.User.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    firstName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    username: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.ListPublicUsersResponse.User}
 */
proto.api.v1alpha1.org.users.ListPublicUsersResponse.User.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.ListPublicUsersResponse.User;
  return proto.api.v1alpha1.org.users.ListPublicUsersResponse.User.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.ListPublicUsersResponse.User} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.ListPublicUsersResponse.User}
 */
proto.api.v1alpha1.org.users.ListPublicUsersResponse.User.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.ListPublicUsersResponse.User.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.ListPublicUsersResponse.User.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.ListPublicUsersResponse.User} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListPublicUsersResponse.User.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ListPublicUsersResponse.User.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ListPublicUsersResponse.User} returns this
 */
proto.api.v1alpha1.org.users.ListPublicUsersResponse.User.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string first_name = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ListPublicUsersResponse.User.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ListPublicUsersResponse.User} returns this
 */
proto.api.v1alpha1.org.users.ListPublicUsersResponse.User.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string last_name = 3;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ListPublicUsersResponse.User.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ListPublicUsersResponse.User} returns this
 */
proto.api.v1alpha1.org.users.ListPublicUsersResponse.User.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string username = 4;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ListPublicUsersResponse.User.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ListPublicUsersResponse.User} returns this
 */
proto.api.v1alpha1.org.users.ListPublicUsersResponse.User.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated User users = 1;
 * @return {!Array<!proto.api.v1alpha1.org.users.ListPublicUsersResponse.User>}
 */
proto.api.v1alpha1.org.users.ListPublicUsersResponse.prototype.getUsersList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.org.users.ListPublicUsersResponse.User>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.org.users.ListPublicUsersResponse.User, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.org.users.ListPublicUsersResponse.User>} value
 * @return {!proto.api.v1alpha1.org.users.ListPublicUsersResponse} returns this
*/
proto.api.v1alpha1.org.users.ListPublicUsersResponse.prototype.setUsersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.org.users.ListPublicUsersResponse.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.ListPublicUsersResponse.User}
 */
proto.api.v1alpha1.org.users.ListPublicUsersResponse.prototype.addUsers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.org.users.ListPublicUsersResponse.User, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.ListPublicUsersResponse} returns this
 */
proto.api.v1alpha1.org.users.ListPublicUsersResponse.prototype.clearUsersList = function() {
  return this.setUsersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.ListUsersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.ListUsersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.ListUsersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListUsersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.ListUsersRequest}
 */
proto.api.v1alpha1.org.users.ListUsersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.ListUsersRequest;
  return proto.api.v1alpha1.org.users.ListUsersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.ListUsersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.ListUsersRequest}
 */
proto.api.v1alpha1.org.users.ListUsersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.ListUsersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.ListUsersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.ListUsersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListUsersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.users.ListUsersResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.ListUsersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.ListUsersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.ListUsersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListUsersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    usersList: jspb.Message.toObjectList(msg.getUsersList(),
    proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.ListUsersResponse}
 */
proto.api.v1alpha1.org.users.ListUsersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.ListUsersResponse;
  return proto.api.v1alpha1.org.users.ListUsersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.ListUsersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.ListUsersResponse}
 */
proto.api.v1alpha1.org.users.ListUsersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails;
      reader.readMessage(value,proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.deserializeBinaryFromReader);
      msg.addUsers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.ListUsersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.ListUsersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.ListUsersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListUsersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.repeatedFields_ = [9,10,13];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orgId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    firstName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    username: jspb.Message.getFieldWithDefault(msg, 5, ""),
    loginDisabled: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    permissionGroupIdsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    labelsList: jspb.Message.toObjectList(msg.getLabelsList(),
    api_commons_org_labels_pb.Label.toObject, includeInstance),
    accountOwner: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    agent: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    trustIdsList: (f = jspb.Message.getRepeatedField(msg, 13)) == null ? undefined : f,
    mfaInfo: (f = msg.getMfaInfo()) && api_commons_org_user_pb.MfaInfo.toObject(includeInstance, f),
    emailVerified: jspb.Message.getBooleanFieldWithDefault(msg, 15, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails}
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails;
  return proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails}
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLoginDisabled(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addPermissionGroupIds(value);
      break;
    case 10:
      var value = new api_commons_org_labels_pb.Label;
      reader.readMessage(value,api_commons_org_labels_pb.Label.deserializeBinaryFromReader);
      msg.addLabels(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccountOwner(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAgent(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.addTrustIds(value);
      break;
    case 14:
      var value = new api_commons_org_user_pb.MfaInfo;
      reader.readMessage(value,api_commons_org_user_pb.MfaInfo.deserializeBinaryFromReader);
      msg.setMfaInfo(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEmailVerified(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLoginDisabled();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getPermissionGroupIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getLabelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      api_commons_org_labels_pb.Label.serializeBinaryToWriter
    );
  }
  f = message.getAccountOwner();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getAgent();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getTrustIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      13,
      f
    );
  }
  f = message.getMfaInfo();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      api_commons_org_user_pb.MfaInfo.serializeBinaryToWriter
    );
  }
  f = message.getEmailVerified();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string first_name = 3;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string last_name = 4;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string username = 5;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool login_disabled = 7;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.prototype.getLoginDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.prototype.setLoginDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * repeated string permission_group_ids = 9;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.prototype.getPermissionGroupIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.prototype.setPermissionGroupIdsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.prototype.addPermissionGroupIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.prototype.clearPermissionGroupIdsList = function() {
  return this.setPermissionGroupIdsList([]);
};


/**
 * repeated api.commons.org.Label labels = 10;
 * @return {!Array<!proto.api.commons.org.Label>}
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.prototype.getLabelsList = function() {
  return /** @type{!Array<!proto.api.commons.org.Label>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_labels_pb.Label, 10));
};


/**
 * @param {!Array<!proto.api.commons.org.Label>} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails} returns this
*/
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.prototype.setLabelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.api.commons.org.Label=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.Label}
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.prototype.addLabels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.api.commons.org.Label, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.prototype.clearLabelsList = function() {
  return this.setLabelsList([]);
};


/**
 * optional bool account_owner = 11;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.prototype.getAccountOwner = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.prototype.setAccountOwner = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional bool agent = 12;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.prototype.getAgent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.prototype.setAgent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * repeated string trust_ids = 13;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.prototype.getTrustIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 13));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.prototype.setTrustIdsList = function(value) {
  return jspb.Message.setField(this, 13, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.prototype.addTrustIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 13, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.prototype.clearTrustIdsList = function() {
  return this.setTrustIdsList([]);
};


/**
 * optional api.commons.org.MfaInfo mfa_info = 14;
 * @return {?proto.api.commons.org.MfaInfo}
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.prototype.getMfaInfo = function() {
  return /** @type{?proto.api.commons.org.MfaInfo} */ (
    jspb.Message.getWrapperField(this, api_commons_org_user_pb.MfaInfo, 14));
};


/**
 * @param {?proto.api.commons.org.MfaInfo|undefined} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails} returns this
*/
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.prototype.setMfaInfo = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.prototype.clearMfaInfo = function() {
  return this.setMfaInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.prototype.hasMfaInfo = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional bool email_verified = 15;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.prototype.getEmailVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails.prototype.setEmailVerified = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * repeated UserDetails users = 1;
 * @return {!Array<!proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails>}
 */
proto.api.v1alpha1.org.users.ListUsersResponse.prototype.getUsersList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails>} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersResponse} returns this
*/
proto.api.v1alpha1.org.users.ListUsersResponse.prototype.setUsersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails}
 */
proto.api.v1alpha1.org.users.ListUsersResponse.prototype.addUsers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.org.users.ListUsersResponse.UserDetails, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.ListUsersResponse} returns this
 */
proto.api.v1alpha1.org.users.ListUsersResponse.prototype.clearUsersList = function() {
  return this.setUsersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.ListUsersByOrgIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.ListUsersByOrgIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    archivedFilter: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.ListUsersByOrgIdRequest}
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.ListUsersByOrgIdRequest;
  return proto.api.v1alpha1.org.users.ListUsersByOrgIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.ListUsersByOrgIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.ListUsersByOrgIdRequest}
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 2:
      var value = /** @type {!proto.api.commons.UserArchivedStateFilter} */ (reader.readEnum());
      msg.setArchivedFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.ListUsersByOrgIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.ListUsersByOrgIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getArchivedFilter();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersByOrgIdRequest} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional api.commons.UserArchivedStateFilter archived_filter = 2;
 * @return {!proto.api.commons.UserArchivedStateFilter}
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdRequest.prototype.getArchivedFilter = function() {
  return /** @type {!proto.api.commons.UserArchivedStateFilter} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.UserArchivedStateFilter} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersByOrgIdRequest} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdRequest.prototype.setArchivedFilter = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    usersList: jspb.Message.toObjectList(msg.getUsersList(),
    proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse}
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse;
  return proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse}
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails;
      reader.readMessage(value,proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.deserializeBinaryFromReader);
      msg.addUsers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.repeatedFields_ = [8,9,12];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orgId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    orgName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    firstName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    username: jspb.Message.getFieldWithDefault(msg, 6, ""),
    loginDisabled: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    permissionGroupIdsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    labelsList: jspb.Message.toObjectList(msg.getLabelsList(),
    api_commons_org_labels_pb.Label.toObject, includeInstance),
    accountOwner: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    agent: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    trustIdsList: (f = jspb.Message.getRepeatedField(msg, 12)) == null ? undefined : f,
    mfaInfo: (f = msg.getMfaInfo()) && api_commons_org_user_pb.MfaInfo.toObject(includeInstance, f),
    emailVerified: jspb.Message.getBooleanFieldWithDefault(msg, 15, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails}
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails;
  return proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails}
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLoginDisabled(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addPermissionGroupIds(value);
      break;
    case 9:
      var value = new api_commons_org_labels_pb.Label;
      reader.readMessage(value,api_commons_org_labels_pb.Label.deserializeBinaryFromReader);
      msg.addLabels(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccountOwner(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAgent(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.addTrustIds(value);
      break;
    case 14:
      var value = new api_commons_org_user_pb.MfaInfo;
      reader.readMessage(value,api_commons_org_user_pb.MfaInfo.deserializeBinaryFromReader);
      msg.setMfaInfo(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEmailVerified(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOrgName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getLoginDisabled();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getPermissionGroupIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getLabelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      api_commons_org_labels_pb.Label.serializeBinaryToWriter
    );
  }
  f = message.getAccountOwner();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getAgent();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getTrustIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      12,
      f
    );
  }
  f = message.getMfaInfo();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      api_commons_org_user_pb.MfaInfo.serializeBinaryToWriter
    );
  }
  f = message.getEmailVerified();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string org_name = 3;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.getOrgName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.setOrgName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string first_name = 4;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string last_name = 5;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string username = 6;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool login_disabled = 7;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.getLoginDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.setLoginDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * repeated string permission_group_ids = 8;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.getPermissionGroupIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.setPermissionGroupIdsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.addPermissionGroupIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.clearPermissionGroupIdsList = function() {
  return this.setPermissionGroupIdsList([]);
};


/**
 * repeated api.commons.org.Label labels = 9;
 * @return {!Array<!proto.api.commons.org.Label>}
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.getLabelsList = function() {
  return /** @type{!Array<!proto.api.commons.org.Label>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_labels_pb.Label, 9));
};


/**
 * @param {!Array<!proto.api.commons.org.Label>} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails} returns this
*/
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.setLabelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.api.commons.org.Label=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.Label}
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.addLabels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.api.commons.org.Label, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.clearLabelsList = function() {
  return this.setLabelsList([]);
};


/**
 * optional bool account_owner = 10;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.getAccountOwner = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.setAccountOwner = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool agent = 11;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.getAgent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.setAgent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * repeated string trust_ids = 12;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.getTrustIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 12));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.setTrustIdsList = function(value) {
  return jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.addTrustIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.clearTrustIdsList = function() {
  return this.setTrustIdsList([]);
};


/**
 * optional api.commons.org.MfaInfo mfa_info = 14;
 * @return {?proto.api.commons.org.MfaInfo}
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.getMfaInfo = function() {
  return /** @type{?proto.api.commons.org.MfaInfo} */ (
    jspb.Message.getWrapperField(this, api_commons_org_user_pb.MfaInfo, 14));
};


/**
 * @param {?proto.api.commons.org.MfaInfo|undefined} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails} returns this
*/
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.setMfaInfo = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.clearMfaInfo = function() {
  return this.setMfaInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.hasMfaInfo = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional bool email_verified = 15;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.getEmailVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails.prototype.setEmailVerified = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * repeated UserDetails users = 1;
 * @return {!Array<!proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails>}
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.prototype.getUsersList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails>} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse} returns this
*/
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.prototype.setUsersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails}
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.prototype.addUsers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.UserDetails, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByOrgIdResponse.prototype.clearUsersList = function() {
  return this.setUsersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.ListUsersByRegionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.ListUsersByRegionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.ListUsersByRegionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListUsersByRegionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    regionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    agent: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    archivedFilter: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.ListUsersByRegionRequest}
 */
proto.api.v1alpha1.org.users.ListUsersByRegionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.ListUsersByRegionRequest;
  return proto.api.v1alpha1.org.users.ListUsersByRegionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.ListUsersByRegionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.ListUsersByRegionRequest}
 */
proto.api.v1alpha1.org.users.ListUsersByRegionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegionId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAgent(value);
      break;
    case 3:
      var value = /** @type {!proto.api.commons.UserArchivedStateFilter} */ (reader.readEnum());
      msg.setArchivedFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.ListUsersByRegionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.ListUsersByRegionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.ListUsersByRegionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListUsersByRegionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRegionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAgent();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getArchivedFilter();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string region_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ListUsersByRegionRequest.prototype.getRegionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersByRegionRequest} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByRegionRequest.prototype.setRegionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool agent = 2;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.ListUsersByRegionRequest.prototype.getAgent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersByRegionRequest} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByRegionRequest.prototype.setAgent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional api.commons.UserArchivedStateFilter archived_filter = 3;
 * @return {!proto.api.commons.UserArchivedStateFilter}
 */
proto.api.v1alpha1.org.users.ListUsersByRegionRequest.prototype.getArchivedFilter = function() {
  return /** @type {!proto.api.commons.UserArchivedStateFilter} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.UserArchivedStateFilter} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersByRegionRequest} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByRegionRequest.prototype.setArchivedFilter = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.ListUsersByRegionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.ListUsersByRegionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    usersList: jspb.Message.toObjectList(msg.getUsersList(),
    proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.ListUsersByRegionResponse}
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.ListUsersByRegionResponse;
  return proto.api.v1alpha1.org.users.ListUsersByRegionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.ListUsersByRegionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.ListUsersByRegionResponse}
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails;
      reader.readMessage(value,proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.deserializeBinaryFromReader);
      msg.addUsers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.ListUsersByRegionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.ListUsersByRegionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.repeatedFields_ = [9,10,13];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orgId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    firstName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    username: jspb.Message.getFieldWithDefault(msg, 5, ""),
    loginDisabled: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    permissionGroupIdsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    labelsList: jspb.Message.toObjectList(msg.getLabelsList(),
    api_commons_org_labels_pb.Label.toObject, includeInstance),
    accountOwner: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    agent: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    trustIdsList: (f = jspb.Message.getRepeatedField(msg, 13)) == null ? undefined : f,
    mfaInfo: (f = msg.getMfaInfo()) && api_commons_org_user_pb.MfaInfo.toObject(includeInstance, f),
    emailVerified: jspb.Message.getBooleanFieldWithDefault(msg, 15, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails}
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails;
  return proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails}
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLoginDisabled(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addPermissionGroupIds(value);
      break;
    case 10:
      var value = new api_commons_org_labels_pb.Label;
      reader.readMessage(value,api_commons_org_labels_pb.Label.deserializeBinaryFromReader);
      msg.addLabels(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccountOwner(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAgent(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.addTrustIds(value);
      break;
    case 14:
      var value = new api_commons_org_user_pb.MfaInfo;
      reader.readMessage(value,api_commons_org_user_pb.MfaInfo.deserializeBinaryFromReader);
      msg.setMfaInfo(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEmailVerified(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLoginDisabled();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getPermissionGroupIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getLabelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      api_commons_org_labels_pb.Label.serializeBinaryToWriter
    );
  }
  f = message.getAccountOwner();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getAgent();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getTrustIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      13,
      f
    );
  }
  f = message.getMfaInfo();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      api_commons_org_user_pb.MfaInfo.serializeBinaryToWriter
    );
  }
  f = message.getEmailVerified();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string first_name = 3;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string last_name = 4;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string username = 5;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool login_disabled = 7;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.prototype.getLoginDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.prototype.setLoginDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * repeated string permission_group_ids = 9;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.prototype.getPermissionGroupIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.prototype.setPermissionGroupIdsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.prototype.addPermissionGroupIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.prototype.clearPermissionGroupIdsList = function() {
  return this.setPermissionGroupIdsList([]);
};


/**
 * repeated api.commons.org.Label labels = 10;
 * @return {!Array<!proto.api.commons.org.Label>}
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.prototype.getLabelsList = function() {
  return /** @type{!Array<!proto.api.commons.org.Label>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_labels_pb.Label, 10));
};


/**
 * @param {!Array<!proto.api.commons.org.Label>} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails} returns this
*/
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.prototype.setLabelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.api.commons.org.Label=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.Label}
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.prototype.addLabels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.api.commons.org.Label, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.prototype.clearLabelsList = function() {
  return this.setLabelsList([]);
};


/**
 * optional bool account_owner = 11;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.prototype.getAccountOwner = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.prototype.setAccountOwner = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional bool agent = 12;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.prototype.getAgent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.prototype.setAgent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * repeated string trust_ids = 13;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.prototype.getTrustIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 13));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.prototype.setTrustIdsList = function(value) {
  return jspb.Message.setField(this, 13, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.prototype.addTrustIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 13, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.prototype.clearTrustIdsList = function() {
  return this.setTrustIdsList([]);
};


/**
 * optional api.commons.org.MfaInfo mfa_info = 14;
 * @return {?proto.api.commons.org.MfaInfo}
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.prototype.getMfaInfo = function() {
  return /** @type{?proto.api.commons.org.MfaInfo} */ (
    jspb.Message.getWrapperField(this, api_commons_org_user_pb.MfaInfo, 14));
};


/**
 * @param {?proto.api.commons.org.MfaInfo|undefined} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails} returns this
*/
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.prototype.setMfaInfo = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.prototype.clearMfaInfo = function() {
  return this.setMfaInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.prototype.hasMfaInfo = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional bool email_verified = 15;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.prototype.getEmailVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails.prototype.setEmailVerified = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * repeated UserDetails users = 1;
 * @return {!Array<!proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails>}
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.prototype.getUsersList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails>} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersByRegionResponse} returns this
*/
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.prototype.setUsersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails}
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.prototype.addUsers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.org.users.ListUsersByRegionResponse.UserDetails, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.ListUsersByRegionResponse} returns this
 */
proto.api.v1alpha1.org.users.ListUsersByRegionResponse.prototype.clearUsersList = function() {
  return this.setUsersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.users.UpdateMyUserRequest.repeatedFields_ = [1,2,10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.UpdateMyUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.UpdateMyUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.UpdateMyUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.UpdateMyUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    linkbackNumbersList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    callerIdsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    timeZoneOverride: (f = msg.getTimeZoneOverride()) && api_commons_org_pb.TimeZoneWrapper.toObject(includeInstance, f),
    defaultApp: jspb.Message.getFieldWithDefault(msg, 4, 0),
    fieldMaskList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.UpdateMyUserRequest}
 */
proto.api.v1alpha1.org.users.UpdateMyUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.UpdateMyUserRequest;
  return proto.api.v1alpha1.org.users.UpdateMyUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.UpdateMyUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.UpdateMyUserRequest}
 */
proto.api.v1alpha1.org.users.UpdateMyUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addLinkbackNumbers(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addCallerIds(value);
      break;
    case 3:
      var value = new api_commons_org_pb.TimeZoneWrapper;
      reader.readMessage(value,api_commons_org_pb.TimeZoneWrapper.deserializeBinaryFromReader);
      msg.setTimeZoneOverride(value);
      break;
    case 4:
      var value = /** @type {!proto.api.commons.OperatorApplications} */ (reader.readEnum());
      msg.setDefaultApp(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.addFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.UpdateMyUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.UpdateMyUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.UpdateMyUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.UpdateMyUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLinkbackNumbersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getCallerIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getTimeZoneOverride();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      api_commons_org_pb.TimeZoneWrapper.serializeBinaryToWriter
    );
  }
  f = message.getDefaultApp();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getFieldMaskList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      10,
      f
    );
  }
};


/**
 * repeated string linkback_numbers = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.users.UpdateMyUserRequest.prototype.getLinkbackNumbersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.users.UpdateMyUserRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateMyUserRequest.prototype.setLinkbackNumbersList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.UpdateMyUserRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateMyUserRequest.prototype.addLinkbackNumbers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.UpdateMyUserRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateMyUserRequest.prototype.clearLinkbackNumbersList = function() {
  return this.setLinkbackNumbersList([]);
};


/**
 * repeated string caller_ids = 2;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.users.UpdateMyUserRequest.prototype.getCallerIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.users.UpdateMyUserRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateMyUserRequest.prototype.setCallerIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.UpdateMyUserRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateMyUserRequest.prototype.addCallerIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.UpdateMyUserRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateMyUserRequest.prototype.clearCallerIdsList = function() {
  return this.setCallerIdsList([]);
};


/**
 * optional api.commons.TimeZoneWrapper time_zone_override = 3;
 * @return {?proto.api.commons.TimeZoneWrapper}
 */
proto.api.v1alpha1.org.users.UpdateMyUserRequest.prototype.getTimeZoneOverride = function() {
  return /** @type{?proto.api.commons.TimeZoneWrapper} */ (
    jspb.Message.getWrapperField(this, api_commons_org_pb.TimeZoneWrapper, 3));
};


/**
 * @param {?proto.api.commons.TimeZoneWrapper|undefined} value
 * @return {!proto.api.v1alpha1.org.users.UpdateMyUserRequest} returns this
*/
proto.api.v1alpha1.org.users.UpdateMyUserRequest.prototype.setTimeZoneOverride = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.UpdateMyUserRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateMyUserRequest.prototype.clearTimeZoneOverride = function() {
  return this.setTimeZoneOverride(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.UpdateMyUserRequest.prototype.hasTimeZoneOverride = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional api.commons.OperatorApplications default_app = 4;
 * @return {!proto.api.commons.OperatorApplications}
 */
proto.api.v1alpha1.org.users.UpdateMyUserRequest.prototype.getDefaultApp = function() {
  return /** @type {!proto.api.commons.OperatorApplications} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.OperatorApplications} value
 * @return {!proto.api.v1alpha1.org.users.UpdateMyUserRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateMyUserRequest.prototype.setDefaultApp = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * repeated string field_mask = 10;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.users.UpdateMyUserRequest.prototype.getFieldMaskList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.users.UpdateMyUserRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateMyUserRequest.prototype.setFieldMaskList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.UpdateMyUserRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateMyUserRequest.prototype.addFieldMask = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.UpdateMyUserRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateMyUserRequest.prototype.clearFieldMaskList = function() {
  return this.setFieldMaskList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.UpdateMyUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.UpdateMyUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.UpdateMyUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.UpdateMyUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.UpdateMyUserResponse}
 */
proto.api.v1alpha1.org.users.UpdateMyUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.UpdateMyUserResponse;
  return proto.api.v1alpha1.org.users.UpdateMyUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.UpdateMyUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.UpdateMyUserResponse}
 */
proto.api.v1alpha1.org.users.UpdateMyUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.UpdateMyUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.UpdateMyUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.UpdateMyUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.UpdateMyUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.repeatedFields_ = [6,7,14,20];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.UpdateUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.UpdateUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    firstName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    partnerAgentId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    timeZoneOverride: (f = msg.getTimeZoneOverride()) && api_commons_org_pb.TimeZoneWrapper.toObject(includeInstance, f),
    linkbackNumbersList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    callerIdsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    defaultApp: jspb.Message.getFieldWithDefault(msg, 8, 0),
    passwordResetRequired: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    agentProfileGroupId: jspb.Message.getFieldWithDefault(msg, 10, ""),
    username: jspb.Message.getFieldWithDefault(msg, 11, ""),
    email: jspb.Message.getFieldWithDefault(msg, 12, ""),
    userCallerId: jspb.Message.getFieldWithDefault(msg, 13, ""),
    labelIdsList: (f = jspb.Message.getRepeatedField(msg, 14)) == null ? undefined : f,
    fieldMaskList: (f = jspb.Message.getRepeatedField(msg, 20)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.UpdateUserRequest}
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.UpdateUserRequest;
  return proto.api.v1alpha1.org.users.UpdateUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.UpdateUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.UpdateUserRequest}
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartnerAgentId(value);
      break;
    case 5:
      var value = new api_commons_org_pb.TimeZoneWrapper;
      reader.readMessage(value,api_commons_org_pb.TimeZoneWrapper.deserializeBinaryFromReader);
      msg.setTimeZoneOverride(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addLinkbackNumbers(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addCallerIds(value);
      break;
    case 8:
      var value = /** @type {!proto.api.commons.OperatorApplications} */ (reader.readEnum());
      msg.setDefaultApp(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPasswordResetRequired(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setAgentProfileGroupId(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserCallerId(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.addLabelIds(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.addFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.UpdateUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.UpdateUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPartnerAgentId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTimeZoneOverride();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      api_commons_org_pb.TimeZoneWrapper.serializeBinaryToWriter
    );
  }
  f = message.getLinkbackNumbersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getCallerIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getDefaultApp();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getPasswordResetRequired();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getAgentProfileGroupId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getUserCallerId();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getLabelIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      14,
      f
    );
  }
  f = message.getFieldMaskList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      20,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string first_name = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string last_name = 3;
 * @return {string}
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string partner_agent_id = 4;
 * @return {string}
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.getPartnerAgentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.setPartnerAgentId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional api.commons.TimeZoneWrapper time_zone_override = 5;
 * @return {?proto.api.commons.TimeZoneWrapper}
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.getTimeZoneOverride = function() {
  return /** @type{?proto.api.commons.TimeZoneWrapper} */ (
    jspb.Message.getWrapperField(this, api_commons_org_pb.TimeZoneWrapper, 5));
};


/**
 * @param {?proto.api.commons.TimeZoneWrapper|undefined} value
 * @return {!proto.api.v1alpha1.org.users.UpdateUserRequest} returns this
*/
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.setTimeZoneOverride = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.clearTimeZoneOverride = function() {
  return this.setTimeZoneOverride(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.hasTimeZoneOverride = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated string linkback_numbers = 6;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.getLinkbackNumbersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.users.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.setLinkbackNumbersList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.addLinkbackNumbers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.clearLinkbackNumbersList = function() {
  return this.setLinkbackNumbersList([]);
};


/**
 * repeated string caller_ids = 7;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.getCallerIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.users.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.setCallerIdsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.addCallerIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.clearCallerIdsList = function() {
  return this.setCallerIdsList([]);
};


/**
 * optional api.commons.OperatorApplications default_app = 8;
 * @return {!proto.api.commons.OperatorApplications}
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.getDefaultApp = function() {
  return /** @type {!proto.api.commons.OperatorApplications} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.api.commons.OperatorApplications} value
 * @return {!proto.api.v1alpha1.org.users.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.setDefaultApp = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional bool password_reset_required = 9;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.getPasswordResetRequired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.setPasswordResetRequired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional string agent_profile_group_id = 10;
 * @return {string}
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.getAgentProfileGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.setAgentProfileGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string username = 11;
 * @return {string}
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string email = 12;
 * @return {string}
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string user_caller_id = 13;
 * @return {string}
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.getUserCallerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.setUserCallerId = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * repeated string label_ids = 14;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.getLabelIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 14));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.users.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.setLabelIdsList = function(value) {
  return jspb.Message.setField(this, 14, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.addLabelIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 14, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.clearLabelIdsList = function() {
  return this.setLabelIdsList([]);
};


/**
 * repeated string field_mask = 20;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.getFieldMaskList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 20));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.users.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.setFieldMaskList = function(value) {
  return jspb.Message.setField(this, 20, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.addFieldMask = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 20, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateUserRequest.prototype.clearFieldMaskList = function() {
  return this.setFieldMaskList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.UpdateUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.UpdateUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.UpdateUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.UpdateUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.UpdateUserResponse}
 */
proto.api.v1alpha1.org.users.UpdateUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.UpdateUserResponse;
  return proto.api.v1alpha1.org.users.UpdateUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.UpdateUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.UpdateUserResponse}
 */
proto.api.v1alpha1.org.users.UpdateUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.UpdateUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.UpdateUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.UpdateUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.UpdateUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.users.UpdateUserLabelsRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.UpdateUserLabelsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.UpdateUserLabelsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.UpdateUserLabelsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.UpdateUserLabelsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orgId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    labelIdsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.UpdateUserLabelsRequest}
 */
proto.api.v1alpha1.org.users.UpdateUserLabelsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.UpdateUserLabelsRequest;
  return proto.api.v1alpha1.org.users.UpdateUserLabelsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.UpdateUserLabelsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.UpdateUserLabelsRequest}
 */
proto.api.v1alpha1.org.users.UpdateUserLabelsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addLabelIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.UpdateUserLabelsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.UpdateUserLabelsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.UpdateUserLabelsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.UpdateUserLabelsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLabelIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.UpdateUserLabelsRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.UpdateUserLabelsRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateUserLabelsRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.users.UpdateUserLabelsRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.UpdateUserLabelsRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateUserLabelsRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string label_ids = 3;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.users.UpdateUserLabelsRequest.prototype.getLabelIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.users.UpdateUserLabelsRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateUserLabelsRequest.prototype.setLabelIdsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.UpdateUserLabelsRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateUserLabelsRequest.prototype.addLabelIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.UpdateUserLabelsRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateUserLabelsRequest.prototype.clearLabelIdsList = function() {
  return this.setLabelIdsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.UpdateUserLabelsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.UpdateUserLabelsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.UpdateUserLabelsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.UpdateUserLabelsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.UpdateUserLabelsResponse}
 */
proto.api.v1alpha1.org.users.UpdateUserLabelsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.UpdateUserLabelsResponse;
  return proto.api.v1alpha1.org.users.UpdateUserLabelsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.UpdateUserLabelsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.UpdateUserLabelsResponse}
 */
proto.api.v1alpha1.org.users.UpdateUserLabelsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.UpdateUserLabelsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.UpdateUserLabelsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.UpdateUserLabelsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.UpdateUserLabelsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.UpdateUserCallerIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.UpdateUserCallerIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.UpdateUserCallerIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.UpdateUserCallerIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userCallerId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.UpdateUserCallerIdRequest}
 */
proto.api.v1alpha1.org.users.UpdateUserCallerIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.UpdateUserCallerIdRequest;
  return proto.api.v1alpha1.org.users.UpdateUserCallerIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.UpdateUserCallerIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.UpdateUserCallerIdRequest}
 */
proto.api.v1alpha1.org.users.UpdateUserCallerIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserCallerId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.UpdateUserCallerIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.UpdateUserCallerIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.UpdateUserCallerIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.UpdateUserCallerIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserCallerId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.UpdateUserCallerIdRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.UpdateUserCallerIdRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateUserCallerIdRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_caller_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.users.UpdateUserCallerIdRequest.prototype.getUserCallerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.UpdateUserCallerIdRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateUserCallerIdRequest.prototype.setUserCallerId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.UpdateUserCallerIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.UpdateUserCallerIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.UpdateUserCallerIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.UpdateUserCallerIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.UpdateUserCallerIdResponse}
 */
proto.api.v1alpha1.org.users.UpdateUserCallerIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.UpdateUserCallerIdResponse;
  return proto.api.v1alpha1.org.users.UpdateUserCallerIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.UpdateUserCallerIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.UpdateUserCallerIdResponse}
 */
proto.api.v1alpha1.org.users.UpdateUserCallerIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.UpdateUserCallerIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.UpdateUserCallerIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.UpdateUserCallerIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.UpdateUserCallerIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.UpdateUserDisabledRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.UpdateUserDisabledRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    loginDisabled: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.UpdateUserDisabledRequest}
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.UpdateUserDisabledRequest;
  return proto.api.v1alpha1.org.users.UpdateUserDisabledRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.UpdateUserDisabledRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.UpdateUserDisabledRequest}
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLoginDisabled(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.UpdateUserDisabledRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.UpdateUserDisabledRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLoginDisabled();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.UpdateUserDisabledRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool login_disabled = 2;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledRequest.prototype.getLoginDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.UpdateUserDisabledRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledRequest.prototype.setLoginDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.UpdateUserDisabledResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.UpdateUserDisabledResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.UpdateUserDisabledResponse}
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.UpdateUserDisabledResponse;
  return proto.api.v1alpha1.org.users.UpdateUserDisabledResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.UpdateUserDisabledResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.UpdateUserDisabledResponse}
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.UpdateUserDisabledResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.UpdateUserDisabledResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orgId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    loginDisabled: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdRequest}
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdRequest;
  return proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdRequest}
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLoginDisabled(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLoginDisabled();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool login_disabled = 3;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdRequest.prototype.getLoginDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdRequest} returns this
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdRequest.prototype.setLoginDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdResponse}
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdResponse;
  return proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdResponse}
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.UpdateUserDisabledByOrgIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    ttl: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkRequest}
 */
proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkRequest;
  return proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkRequest}
 */
proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTtl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTtl();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 ttl = 1;
 * @return {number}
 */
proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkRequest.prototype.getTtl = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkRequest} returns this
 */
proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkRequest.prototype.setTtl = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkResponse}
 */
proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkResponse;
  return proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkResponse}
 */
proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkResponse.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkResponse} returns this
 */
proto.api.v1alpha1.org.users.GetMyUserPasswordResetLinkResponse.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.GetUserPasswordResetLinkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.GetUserPasswordResetLinkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ttl: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.GetUserPasswordResetLinkRequest}
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.GetUserPasswordResetLinkRequest;
  return proto.api.v1alpha1.org.users.GetUserPasswordResetLinkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.GetUserPasswordResetLinkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.GetUserPasswordResetLinkRequest}
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTtl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.GetUserPasswordResetLinkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.GetUserPasswordResetLinkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTtl();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserPasswordResetLinkRequest} returns this
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 ttl = 2;
 * @return {number}
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkRequest.prototype.getTtl = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.users.GetUserPasswordResetLinkRequest} returns this
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkRequest.prototype.setTtl = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.GetUserPasswordResetLinkResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.GetUserPasswordResetLinkResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.GetUserPasswordResetLinkResponse}
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.GetUserPasswordResetLinkResponse;
  return proto.api.v1alpha1.org.users.GetUserPasswordResetLinkResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.GetUserPasswordResetLinkResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.GetUserPasswordResetLinkResponse}
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.GetUserPasswordResetLinkResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.GetUserPasswordResetLinkResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkResponse.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserPasswordResetLinkResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkResponse.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orgId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ttl: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdRequest}
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdRequest;
  return proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdRequest}
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTtl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTtl();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdRequest} returns this
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdRequest} returns this
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 ttl = 3;
 * @return {number}
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdRequest.prototype.getTtl = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdRequest} returns this
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdRequest.prototype.setTtl = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdResponse}
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdResponse;
  return proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdResponse}
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdResponse.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserPasswordResetLinkByOrgIdResponse.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.CreatePasswordResetLinkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.CreatePasswordResetLinkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.CreatePasswordResetLinkRequest}
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.CreatePasswordResetLinkRequest;
  return proto.api.v1alpha1.org.users.CreatePasswordResetLinkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.CreatePasswordResetLinkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.CreatePasswordResetLinkRequest}
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.CreatePasswordResetLinkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.CreatePasswordResetLinkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.CreatePasswordResetLinkRequest} returns this
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.CreatePasswordResetLinkResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.CreatePasswordResetLinkResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.CreatePasswordResetLinkResponse}
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.CreatePasswordResetLinkResponse;
  return proto.api.v1alpha1.org.users.CreatePasswordResetLinkResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.CreatePasswordResetLinkResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.CreatePasswordResetLinkResponse}
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.CreatePasswordResetLinkResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.CreatePasswordResetLinkResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkResponse.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.CreatePasswordResetLinkResponse} returns this
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkResponse.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orgId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdRequest}
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdRequest;
  return proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdRequest}
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdRequest} returns this
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdRequest} returns this
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdResponse}
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdResponse;
  return proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdResponse}
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdResponse.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdResponse} returns this
 */
proto.api.v1alpha1.org.users.CreatePasswordResetLinkByOrgIdResponse.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.GetUserLoginInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.GetUserLoginInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orgId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.GetUserLoginInfoRequest}
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.GetUserLoginInfoRequest;
  return proto.api.v1alpha1.org.users.GetUserLoginInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.GetUserLoginInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.GetUserLoginInfoRequest}
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.GetUserLoginInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.GetUserLoginInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserLoginInfoRequest} returns this
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserLoginInfoRequest} returns this
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.GetUserLoginInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.GetUserLoginInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    blocked: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    lastIp: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lastLogin: (f = msg.getLastLogin()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    lastPasswordReset: (f = msg.getLastPasswordReset()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    loginsCount: jspb.Message.getFieldWithDefault(msg, 5, 0),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    hasBlockedIps: jspb.Message.getBooleanFieldWithDefault(msg, 8, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.GetUserLoginInfoResponse}
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.GetUserLoginInfoResponse;
  return proto.api.v1alpha1.org.users.GetUserLoginInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.GetUserLoginInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.GetUserLoginInfoResponse}
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBlocked(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastIp(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastLogin(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastPasswordReset(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLoginsCount(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasBlockedIps(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.GetUserLoginInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.GetUserLoginInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlocked();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getLastIp();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLastLogin();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLastPasswordReset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLoginsCount();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getHasBlockedIps();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * optional bool blocked = 1;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoResponse.prototype.getBlocked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.GetUserLoginInfoResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoResponse.prototype.setBlocked = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string last_ip = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoResponse.prototype.getLastIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserLoginInfoResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoResponse.prototype.setLastIp = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp last_login = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoResponse.prototype.getLastLogin = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.org.users.GetUserLoginInfoResponse} returns this
*/
proto.api.v1alpha1.org.users.GetUserLoginInfoResponse.prototype.setLastLogin = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.GetUserLoginInfoResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoResponse.prototype.clearLastLogin = function() {
  return this.setLastLogin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoResponse.prototype.hasLastLogin = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp last_password_reset = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoResponse.prototype.getLastPasswordReset = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.org.users.GetUserLoginInfoResponse} returns this
*/
proto.api.v1alpha1.org.users.GetUserLoginInfoResponse.prototype.setLastPasswordReset = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.GetUserLoginInfoResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoResponse.prototype.clearLastPasswordReset = function() {
  return this.setLastPasswordReset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoResponse.prototype.hasLastPasswordReset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int64 logins_count = 5;
 * @return {number}
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoResponse.prototype.getLoginsCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.users.GetUserLoginInfoResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoResponse.prototype.setLoginsCount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoResponse.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.org.users.GetUserLoginInfoResponse} returns this
*/
proto.api.v1alpha1.org.users.GetUserLoginInfoResponse.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.GetUserLoginInfoResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoResponse.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoResponse.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoResponse.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.org.users.GetUserLoginInfoResponse} returns this
*/
proto.api.v1alpha1.org.users.GetUserLoginInfoResponse.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.GetUserLoginInfoResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoResponse.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoResponse.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool has_blocked_ips = 8;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoResponse.prototype.getHasBlockedIps = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.GetUserLoginInfoResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserLoginInfoResponse.prototype.setHasBlockedIps = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.SendPasswordResetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.SendPasswordResetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.SendPasswordResetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.SendPasswordResetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    email: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.SendPasswordResetRequest}
 */
proto.api.v1alpha1.org.users.SendPasswordResetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.SendPasswordResetRequest;
  return proto.api.v1alpha1.org.users.SendPasswordResetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.SendPasswordResetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.SendPasswordResetRequest}
 */
proto.api.v1alpha1.org.users.SendPasswordResetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.SendPasswordResetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.SendPasswordResetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.SendPasswordResetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.SendPasswordResetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string email = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.SendPasswordResetRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.SendPasswordResetRequest} returns this
 */
proto.api.v1alpha1.org.users.SendPasswordResetRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.SendPasswordResetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.SendPasswordResetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.SendPasswordResetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.SendPasswordResetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.SendPasswordResetResponse}
 */
proto.api.v1alpha1.org.users.SendPasswordResetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.SendPasswordResetResponse;
  return proto.api.v1alpha1.org.users.SendPasswordResetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.SendPasswordResetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.SendPasswordResetResponse}
 */
proto.api.v1alpha1.org.users.SendPasswordResetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.SendPasswordResetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.SendPasswordResetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.SendPasswordResetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.SendPasswordResetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    email: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdRequest}
 */
proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdRequest;
  return proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdRequest}
 */
proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdRequest} returns this
 */
proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdRequest} returns this
 */
proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdResponse}
 */
proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdResponse;
  return proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdResponse}
 */
proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.SendPasswordResetByOrgIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.ResetMyPasswordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.ResetMyPasswordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.ResetMyPasswordRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ResetMyPasswordRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    password: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.ResetMyPasswordRequest}
 */
proto.api.v1alpha1.org.users.ResetMyPasswordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.ResetMyPasswordRequest;
  return proto.api.v1alpha1.org.users.ResetMyPasswordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.ResetMyPasswordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.ResetMyPasswordRequest}
 */
proto.api.v1alpha1.org.users.ResetMyPasswordRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.ResetMyPasswordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.ResetMyPasswordRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.ResetMyPasswordRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ResetMyPasswordRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string password = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ResetMyPasswordRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ResetMyPasswordRequest} returns this
 */
proto.api.v1alpha1.org.users.ResetMyPasswordRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.ResetMyPasswordResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.ResetMyPasswordResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.ResetMyPasswordResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ResetMyPasswordResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.ResetMyPasswordResponse}
 */
proto.api.v1alpha1.org.users.ResetMyPasswordResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.ResetMyPasswordResponse;
  return proto.api.v1alpha1.org.users.ResetMyPasswordResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.ResetMyPasswordResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.ResetMyPasswordResponse}
 */
proto.api.v1alpha1.org.users.ResetMyPasswordResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.ResetMyPasswordResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.ResetMyPasswordResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.ResetMyPasswordResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ResetMyPasswordResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.ResetUserPasswordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.ResetUserPasswordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.ResetUserPasswordRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ResetUserPasswordRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    password: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.ResetUserPasswordRequest}
 */
proto.api.v1alpha1.org.users.ResetUserPasswordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.ResetUserPasswordRequest;
  return proto.api.v1alpha1.org.users.ResetUserPasswordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.ResetUserPasswordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.ResetUserPasswordRequest}
 */
proto.api.v1alpha1.org.users.ResetUserPasswordRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.ResetUserPasswordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.ResetUserPasswordRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.ResetUserPasswordRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ResetUserPasswordRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string password = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ResetUserPasswordRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ResetUserPasswordRequest} returns this
 */
proto.api.v1alpha1.org.users.ResetUserPasswordRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ResetUserPasswordRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ResetUserPasswordRequest} returns this
 */
proto.api.v1alpha1.org.users.ResetUserPasswordRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.ResetUserPasswordResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.ResetUserPasswordResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.ResetUserPasswordResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ResetUserPasswordResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.ResetUserPasswordResponse}
 */
proto.api.v1alpha1.org.users.ResetUserPasswordResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.ResetUserPasswordResponse;
  return proto.api.v1alpha1.org.users.ResetUserPasswordResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.ResetUserPasswordResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.ResetUserPasswordResponse}
 */
proto.api.v1alpha1.org.users.ResetUserPasswordResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.ResetUserPasswordResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.ResetUserPasswordResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.ResetUserPasswordResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ResetUserPasswordResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    password: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    orgId: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdRequest}
 */
proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdRequest;
  return proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdRequest}
 */
proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string password = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdRequest} returns this
 */
proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdRequest} returns this
 */
proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string org_id = 3;
 * @return {string}
 */
proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdRequest} returns this
 */
proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdResponse}
 */
proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdResponse;
  return proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdResponse}
 */
proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ResetUserPasswordByOrgIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.GetUserEmailVerifiedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.GetUserEmailVerifiedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.GetUserEmailVerifiedRequest}
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.GetUserEmailVerifiedRequest;
  return proto.api.v1alpha1.org.users.GetUserEmailVerifiedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.GetUserEmailVerifiedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.GetUserEmailVerifiedRequest}
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.GetUserEmailVerifiedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.GetUserEmailVerifiedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserEmailVerifiedRequest} returns this
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.GetUserEmailVerifiedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.GetUserEmailVerifiedResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    emailVerified: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.GetUserEmailVerifiedResponse}
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.GetUserEmailVerifiedResponse;
  return proto.api.v1alpha1.org.users.GetUserEmailVerifiedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.GetUserEmailVerifiedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.GetUserEmailVerifiedResponse}
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEmailVerified(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.GetUserEmailVerifiedResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.GetUserEmailVerifiedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmailVerified();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool email_verified = 1;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedResponse.prototype.getEmailVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.GetUserEmailVerifiedResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedResponse.prototype.setEmailVerified = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orgId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdRequest}
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdRequest;
  return proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdRequest}
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdRequest} returns this
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdRequest} returns this
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    emailVerified: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdResponse}
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdResponse;
  return proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdResponse}
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEmailVerified(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmailVerified();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool email_verified = 1;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdResponse.prototype.getEmailVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserEmailVerifiedByOrgIdResponse.prototype.setEmailVerified = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.SendUserEmailVerificationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.SendUserEmailVerificationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.SendUserEmailVerificationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.SendUserEmailVerificationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.SendUserEmailVerificationRequest}
 */
proto.api.v1alpha1.org.users.SendUserEmailVerificationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.SendUserEmailVerificationRequest;
  return proto.api.v1alpha1.org.users.SendUserEmailVerificationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.SendUserEmailVerificationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.SendUserEmailVerificationRequest}
 */
proto.api.v1alpha1.org.users.SendUserEmailVerificationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.SendUserEmailVerificationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.SendUserEmailVerificationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.SendUserEmailVerificationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.SendUserEmailVerificationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.SendUserEmailVerificationRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.SendUserEmailVerificationRequest} returns this
 */
proto.api.v1alpha1.org.users.SendUserEmailVerificationRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.SendUserEmailVerificationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.SendUserEmailVerificationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.SendUserEmailVerificationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.SendUserEmailVerificationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.SendUserEmailVerificationResponse}
 */
proto.api.v1alpha1.org.users.SendUserEmailVerificationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.SendUserEmailVerificationResponse;
  return proto.api.v1alpha1.org.users.SendUserEmailVerificationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.SendUserEmailVerificationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.SendUserEmailVerificationResponse}
 */
proto.api.v1alpha1.org.users.SendUserEmailVerificationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.SendUserEmailVerificationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.SendUserEmailVerificationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.SendUserEmailVerificationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.SendUserEmailVerificationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orgId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdRequest}
 */
proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdRequest;
  return proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdRequest}
 */
proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdRequest} returns this
 */
proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdRequest} returns this
 */
proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdResponse}
 */
proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdResponse;
  return proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdResponse}
 */
proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.SendUserEmailVerificationByOrgIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.GetUserSessionDataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.GetUserSessionDataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserSessionDataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataRequest}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.GetUserSessionDataRequest;
  return proto.api.v1alpha1.org.users.GetUserSessionDataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.GetUserSessionDataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataRequest}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.GetUserSessionDataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.GetUserSessionDataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserSessionDataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.repeatedFields_ = [3,4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.GetUserSessionDataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: (f = msg.getUser()) && proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.toObject(includeInstance, f),
    orgName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    p3PermissionsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    permissionGroupsList: jspb.Message.toObjectList(msg.getPermissionGroupsList(),
    api_commons_org_permissions_pb.PermissionGroup.toObject, includeInstance),
    labelsList: jspb.Message.toObjectList(msg.getLabelsList(),
    api_commons_org_labels_pb.Label.toObject, includeInstance),
    orgAllowedMfa: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    localePreferences: (f = msg.getLocalePreferences()) && api_commons_org_preferences_pb.LocalePreferences.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.GetUserSessionDataResponse;
  return proto.api.v1alpha1.org.users.GetUserSessionDataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User;
      reader.readMessage(value,proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgName(value);
      break;
    case 3:
      var values = /** @type {!Array<!proto.api.commons.Permission>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addP3Permissions(values[i]);
      }
      break;
    case 4:
      var value = new api_commons_org_permissions_pb.PermissionGroup;
      reader.readMessage(value,api_commons_org_permissions_pb.PermissionGroup.deserializeBinaryFromReader);
      msg.addPermissionGroups(value);
      break;
    case 5:
      var value = new api_commons_org_labels_pb.Label;
      reader.readMessage(value,api_commons_org_labels_pb.Label.deserializeBinaryFromReader);
      msg.addLabels(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOrgAllowedMfa(value);
      break;
    case 7:
      var value = new api_commons_org_preferences_pb.LocalePreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.LocalePreferences.deserializeBinaryFromReader);
      msg.setLocalePreferences(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.GetUserSessionDataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.serializeBinaryToWriter
    );
  }
  f = message.getOrgName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getP3PermissionsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      3,
      f
    );
  }
  f = message.getPermissionGroupsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      api_commons_org_permissions_pb.PermissionGroup.serializeBinaryToWriter
    );
  }
  f = message.getLabelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      api_commons_org_labels_pb.Label.serializeBinaryToWriter
    );
  }
  f = message.getOrgAllowedMfa();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getLocalePreferences();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      api_commons_org_preferences_pb.LocalePreferences.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.repeatedFields_ = [15,16,26,27];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orgId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    username: jspb.Message.getFieldWithDefault(msg, 3, ""),
    p3PermissionGroupId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    partnerAgentId: jspb.Message.getFieldWithDefault(msg, 8, ""),
    regionSidMapMap: (f = msg.getRegionSidMapMap()) ? f.toObject(includeInstance, proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.RegionSids.toObject) : [],
    defaultRegion: jspb.Message.getFieldWithDefault(msg, 11, ""),
    apiKey: jspb.Message.getFieldWithDefault(msg, 12, ""),
    email: jspb.Message.getFieldWithDefault(msg, 13, ""),
    loginDisabled: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
    callerIdsList: (f = jspb.Message.getRepeatedField(msg, 15)) == null ? undefined : f,
    linkbackNumbersList: (f = jspb.Message.getRepeatedField(msg, 16)) == null ? undefined : f,
    authUserId: jspb.Message.getFieldWithDefault(msg, 17, ""),
    firstName: jspb.Message.getFieldWithDefault(msg, 19, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 20, ""),
    created: (f = msg.getCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    lastUpdated: (f = msg.getLastUpdated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    passwordResetRequired: jspb.Message.getBooleanFieldWithDefault(msg, 23, false),
    connectionId: (f = msg.getConnectionId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    timeZoneOverride: (f = msg.getTimeZoneOverride()) && api_commons_org_pb.TimeZoneWrapper.toObject(includeInstance, f),
    permissionGroupIdsList: (f = jspb.Message.getRepeatedField(msg, 26)) == null ? undefined : f,
    trustIdsList: (f = jspb.Message.getRepeatedField(msg, 27)) == null ? undefined : f,
    defaultApplication: jspb.Message.getFieldWithDefault(msg, 28, 0),
    userCallerId: jspb.Message.getFieldWithDefault(msg, 29, ""),
    agentProfileGroupId: jspb.Message.getFieldWithDefault(msg, 30, ""),
    agent: jspb.Message.getBooleanFieldWithDefault(msg, 31, false),
    accountOwner: jspb.Message.getBooleanFieldWithDefault(msg, 32, false),
    mfaTimestamp: (f = msg.getMfaTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    passwordResetDate: (f = msg.getPasswordResetDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User;
  return proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setP3PermissionGroupId(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartnerAgentId(value);
      break;
    case 10:
      var value = msg.getRegionSidMapMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.RegionSids.deserializeBinaryFromReader, "", new proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.RegionSids());
         });
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultRegion(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setApiKey(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLoginDisabled(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.addCallerIds(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.addLinkbackNumbers(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthUserId(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 21:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreated(value);
      break;
    case 22:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastUpdated(value);
      break;
    case 23:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPasswordResetRequired(value);
      break;
    case 24:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setConnectionId(value);
      break;
    case 25:
      var value = new api_commons_org_pb.TimeZoneWrapper;
      reader.readMessage(value,api_commons_org_pb.TimeZoneWrapper.deserializeBinaryFromReader);
      msg.setTimeZoneOverride(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.addPermissionGroupIds(value);
      break;
    case 27:
      var value = /** @type {string} */ (reader.readString());
      msg.addTrustIds(value);
      break;
    case 28:
      var value = /** @type {!proto.api.commons.OperatorApplications} */ (reader.readEnum());
      msg.setDefaultApplication(value);
      break;
    case 29:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserCallerId(value);
      break;
    case 30:
      var value = /** @type {string} */ (reader.readString());
      msg.setAgentProfileGroupId(value);
      break;
    case 31:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAgent(value);
      break;
    case 32:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccountOwner(value);
      break;
    case 33:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setMfaTimestamp(value);
      break;
    case 34:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setPasswordResetDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getP3PermissionGroupId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPartnerAgentId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getRegionSidMapMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(10, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.RegionSids.serializeBinaryToWriter);
  }
  f = message.getDefaultRegion();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getApiKey();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getLoginDisabled();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getCallerIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      15,
      f
    );
  }
  f = message.getLinkbackNumbersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      16,
      f
    );
  }
  f = message.getAuthUserId();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getCreated();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLastUpdated();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPasswordResetRequired();
  if (f) {
    writer.writeBool(
      23,
      f
    );
  }
  f = message.getConnectionId();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getTimeZoneOverride();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      api_commons_org_pb.TimeZoneWrapper.serializeBinaryToWriter
    );
  }
  f = message.getPermissionGroupIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      26,
      f
    );
  }
  f = message.getTrustIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      27,
      f
    );
  }
  f = message.getDefaultApplication();
  if (f !== 0.0) {
    writer.writeEnum(
      28,
      f
    );
  }
  f = message.getUserCallerId();
  if (f.length > 0) {
    writer.writeString(
      29,
      f
    );
  }
  f = message.getAgentProfileGroupId();
  if (f.length > 0) {
    writer.writeString(
      30,
      f
    );
  }
  f = message.getAgent();
  if (f) {
    writer.writeBool(
      31,
      f
    );
  }
  f = message.getAccountOwner();
  if (f) {
    writer.writeBool(
      32,
      f
    );
  }
  f = message.getMfaTimestamp();
  if (f != null) {
    writer.writeMessage(
      33,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPasswordResetDate();
  if (f != null) {
    writer.writeMessage(
      34,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.RegionSids.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.RegionSids.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.RegionSids} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.RegionSids.toObject = function(includeInstance, msg) {
  var f, obj = {
    loginSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    agentSid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    clientSid: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.RegionSids}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.RegionSids.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.RegionSids;
  return proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.RegionSids.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.RegionSids} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.RegionSids}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.RegionSids.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLoginSid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAgentSid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setClientSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.RegionSids.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.RegionSids.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.RegionSids} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.RegionSids.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLoginSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getAgentSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getClientSid();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional int64 login_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.RegionSids.prototype.getLoginSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.RegionSids} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.RegionSids.prototype.setLoginSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 agent_sid = 2;
 * @return {number}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.RegionSids.prototype.getAgentSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.RegionSids} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.RegionSids.prototype.setAgentSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 client_sid = 3;
 * @return {number}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.RegionSids.prototype.getClientSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.RegionSids} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.RegionSids.prototype.setClientSid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string username = 3;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string p3_permission_group_id = 4;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.getP3PermissionGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.setP3PermissionGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string partner_agent_id = 8;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.getPartnerAgentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.setPartnerAgentId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * map<string, RegionSids> region_sid_map = 10;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.RegionSids>}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.getRegionSidMapMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.RegionSids>} */ (
      jspb.Message.getMapField(this, 10, opt_noLazyCreate,
      proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.RegionSids));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.clearRegionSidMapMap = function() {
  this.getRegionSidMapMap().clear();
  return this;
};


/**
 * optional string default_region = 11;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.getDefaultRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.setDefaultRegion = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string api_key = 12;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.getApiKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.setApiKey = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string email = 13;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional bool login_disabled = 14;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.getLoginDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.setLoginDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * repeated string caller_ids = 15;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.getCallerIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 15));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.setCallerIdsList = function(value) {
  return jspb.Message.setField(this, 15, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.addCallerIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 15, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.clearCallerIdsList = function() {
  return this.setCallerIdsList([]);
};


/**
 * repeated string linkback_numbers = 16;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.getLinkbackNumbersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 16));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.setLinkbackNumbersList = function(value) {
  return jspb.Message.setField(this, 16, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.addLinkbackNumbers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 16, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.clearLinkbackNumbersList = function() {
  return this.setLinkbackNumbersList([]);
};


/**
 * optional string auth_user_id = 17;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.getAuthUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.setAuthUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string first_name = 19;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional string last_name = 20;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional google.protobuf.Timestamp created = 21;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.getCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 21));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
*/
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.setCreated = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.clearCreated = function() {
  return this.setCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.hasCreated = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional google.protobuf.Timestamp last_updated = 22;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.getLastUpdated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 22));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
*/
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.setLastUpdated = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.clearLastUpdated = function() {
  return this.setLastUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.hasLastUpdated = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional bool password_reset_required = 23;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.getPasswordResetRequired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 23, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.setPasswordResetRequired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 23, value);
};


/**
 * optional google.protobuf.StringValue connection_id = 24;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.getConnectionId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 24));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
*/
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.setConnectionId = function(value) {
  return jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.clearConnectionId = function() {
  return this.setConnectionId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.hasConnectionId = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional api.commons.TimeZoneWrapper time_zone_override = 25;
 * @return {?proto.api.commons.TimeZoneWrapper}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.getTimeZoneOverride = function() {
  return /** @type{?proto.api.commons.TimeZoneWrapper} */ (
    jspb.Message.getWrapperField(this, api_commons_org_pb.TimeZoneWrapper, 25));
};


/**
 * @param {?proto.api.commons.TimeZoneWrapper|undefined} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
*/
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.setTimeZoneOverride = function(value) {
  return jspb.Message.setWrapperField(this, 25, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.clearTimeZoneOverride = function() {
  return this.setTimeZoneOverride(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.hasTimeZoneOverride = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * repeated string permission_group_ids = 26;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.getPermissionGroupIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 26));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.setPermissionGroupIdsList = function(value) {
  return jspb.Message.setField(this, 26, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.addPermissionGroupIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 26, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.clearPermissionGroupIdsList = function() {
  return this.setPermissionGroupIdsList([]);
};


/**
 * repeated string trust_ids = 27;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.getTrustIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 27));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.setTrustIdsList = function(value) {
  return jspb.Message.setField(this, 27, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.addTrustIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 27, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.clearTrustIdsList = function() {
  return this.setTrustIdsList([]);
};


/**
 * optional api.commons.OperatorApplications default_application = 28;
 * @return {!proto.api.commons.OperatorApplications}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.getDefaultApplication = function() {
  return /** @type {!proto.api.commons.OperatorApplications} */ (jspb.Message.getFieldWithDefault(this, 28, 0));
};


/**
 * @param {!proto.api.commons.OperatorApplications} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.setDefaultApplication = function(value) {
  return jspb.Message.setProto3EnumField(this, 28, value);
};


/**
 * optional string user_caller_id = 29;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.getUserCallerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 29, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.setUserCallerId = function(value) {
  return jspb.Message.setProto3StringField(this, 29, value);
};


/**
 * optional string agent_profile_group_id = 30;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.getAgentProfileGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 30, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.setAgentProfileGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 30, value);
};


/**
 * optional bool agent = 31;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.getAgent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 31, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.setAgent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 31, value);
};


/**
 * optional bool account_owner = 32;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.getAccountOwner = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 32, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.setAccountOwner = function(value) {
  return jspb.Message.setProto3BooleanField(this, 32, value);
};


/**
 * optional google.protobuf.Timestamp mfa_timestamp = 33;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.getMfaTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 33));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
*/
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.setMfaTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 33, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.clearMfaTimestamp = function() {
  return this.setMfaTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.hasMfaTimestamp = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional google.protobuf.Timestamp password_reset_date = 34;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.getPasswordResetDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 34));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
*/
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.setPasswordResetDate = function(value) {
  return jspb.Message.setWrapperField(this, 34, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.clearPasswordResetDate = function() {
  return this.setPasswordResetDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User.prototype.hasPasswordResetDate = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * optional User user = 1;
 * @return {?proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.prototype.getUser = function() {
  return /** @type{?proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User, 1));
};


/**
 * @param {?proto.api.v1alpha1.org.users.GetUserSessionDataResponse.User|undefined} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse} returns this
*/
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.prototype.hasUser = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string org_name = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.prototype.getOrgName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.prototype.setOrgName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated api.commons.Permission p3_permissions = 3;
 * @return {!Array<!proto.api.commons.Permission>}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.prototype.getP3PermissionsList = function() {
  return /** @type {!Array<!proto.api.commons.Permission>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<!proto.api.commons.Permission>} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.prototype.setP3PermissionsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!proto.api.commons.Permission} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.prototype.addP3Permissions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.prototype.clearP3PermissionsList = function() {
  return this.setP3PermissionsList([]);
};


/**
 * repeated api.commons.org.PermissionGroup permission_groups = 4;
 * @return {!Array<!proto.api.commons.org.PermissionGroup>}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.prototype.getPermissionGroupsList = function() {
  return /** @type{!Array<!proto.api.commons.org.PermissionGroup>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_permissions_pb.PermissionGroup, 4));
};


/**
 * @param {!Array<!proto.api.commons.org.PermissionGroup>} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse} returns this
*/
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.prototype.setPermissionGroupsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.api.commons.org.PermissionGroup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.PermissionGroup}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.prototype.addPermissionGroups = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.api.commons.org.PermissionGroup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.prototype.clearPermissionGroupsList = function() {
  return this.setPermissionGroupsList([]);
};


/**
 * repeated api.commons.org.Label labels = 5;
 * @return {!Array<!proto.api.commons.org.Label>}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.prototype.getLabelsList = function() {
  return /** @type{!Array<!proto.api.commons.org.Label>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_labels_pb.Label, 5));
};


/**
 * @param {!Array<!proto.api.commons.org.Label>} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse} returns this
*/
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.prototype.setLabelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.api.commons.org.Label=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.Label}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.prototype.addLabels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.api.commons.org.Label, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.prototype.clearLabelsList = function() {
  return this.setLabelsList([]);
};


/**
 * optional bool org_allowed_mfa = 6;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.prototype.getOrgAllowedMfa = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.prototype.setOrgAllowedMfa = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional api.commons.LocalePreferences locale_preferences = 7;
 * @return {?proto.api.commons.LocalePreferences}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.prototype.getLocalePreferences = function() {
  return /** @type{?proto.api.commons.LocalePreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.LocalePreferences, 7));
};


/**
 * @param {?proto.api.commons.LocalePreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse} returns this
*/
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.prototype.setLocalePreferences = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.GetUserSessionDataResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.prototype.clearLocalePreferences = function() {
  return this.setLocalePreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserSessionDataResponse.prototype.hasLocalePreferences = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.RefreshMfaLockoutRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.RefreshMfaLockoutRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.RefreshMfaLockoutRequest}
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.RefreshMfaLockoutRequest;
  return proto.api.v1alpha1.org.users.RefreshMfaLockoutRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.RefreshMfaLockoutRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.RefreshMfaLockoutRequest}
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.RefreshMfaLockoutRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.RefreshMfaLockoutRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.RefreshMfaLockoutRequest} returns this
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.RefreshMfaLockoutResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.RefreshMfaLockoutResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    timeout: (f = msg.getTimeout()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.RefreshMfaLockoutResponse}
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.RefreshMfaLockoutResponse;
  return proto.api.v1alpha1.org.users.RefreshMfaLockoutResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.RefreshMfaLockoutResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.RefreshMfaLockoutResponse}
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimeout(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.RefreshMfaLockoutResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.RefreshMfaLockoutResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimeout();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp timeout = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutResponse.prototype.getTimeout = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.org.users.RefreshMfaLockoutResponse} returns this
*/
proto.api.v1alpha1.org.users.RefreshMfaLockoutResponse.prototype.setTimeout = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.RefreshMfaLockoutResponse} returns this
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutResponse.prototype.clearTimeout = function() {
  return this.setTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutResponse.prototype.hasTimeout = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orgId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdRequest}
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdRequest;
  return proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdRequest}
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdRequest} returns this
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdRequest} returns this
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    timeout: (f = msg.getTimeout()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdResponse}
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdResponse;
  return proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdResponse}
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimeout(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimeout();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp timeout = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdResponse.prototype.getTimeout = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdResponse} returns this
*/
proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdResponse.prototype.setTimeout = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdResponse} returns this
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdResponse.prototype.clearTimeout = function() {
  return this.setTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.RefreshMfaLockoutByOrgIdResponse.prototype.hasTimeout = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.SetMfaTypeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.SetMfaTypeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.SetMfaTypeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.SetMfaTypeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && api_commons_org_user_pb.MfaInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.SetMfaTypeRequest}
 */
proto.api.v1alpha1.org.users.SetMfaTypeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.SetMfaTypeRequest;
  return proto.api.v1alpha1.org.users.SetMfaTypeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.SetMfaTypeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.SetMfaTypeRequest}
 */
proto.api.v1alpha1.org.users.SetMfaTypeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new api_commons_org_user_pb.MfaInfo;
      reader.readMessage(value,api_commons_org_user_pb.MfaInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.SetMfaTypeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.SetMfaTypeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.SetMfaTypeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.SetMfaTypeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      api_commons_org_user_pb.MfaInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.MfaInfo info = 3;
 * @return {?proto.api.commons.org.MfaInfo}
 */
proto.api.v1alpha1.org.users.SetMfaTypeRequest.prototype.getInfo = function() {
  return /** @type{?proto.api.commons.org.MfaInfo} */ (
    jspb.Message.getWrapperField(this, api_commons_org_user_pb.MfaInfo, 3));
};


/**
 * @param {?proto.api.commons.org.MfaInfo|undefined} value
 * @return {!proto.api.v1alpha1.org.users.SetMfaTypeRequest} returns this
*/
proto.api.v1alpha1.org.users.SetMfaTypeRequest.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.SetMfaTypeRequest} returns this
 */
proto.api.v1alpha1.org.users.SetMfaTypeRequest.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.SetMfaTypeRequest.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.SetMfaTypeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.SetMfaTypeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.SetMfaTypeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.SetMfaTypeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.SetMfaTypeResponse}
 */
proto.api.v1alpha1.org.users.SetMfaTypeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.SetMfaTypeResponse;
  return proto.api.v1alpha1.org.users.SetMfaTypeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.SetMfaTypeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.SetMfaTypeResponse}
 */
proto.api.v1alpha1.org.users.SetMfaTypeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.SetMfaTypeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.SetMfaTypeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.SetMfaTypeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.SetMfaTypeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.SetMyMfaTypeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.SetMyMfaTypeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.SetMyMfaTypeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.SetMyMfaTypeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && api_commons_org_user_pb.MfaInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.SetMyMfaTypeRequest}
 */
proto.api.v1alpha1.org.users.SetMyMfaTypeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.SetMyMfaTypeRequest;
  return proto.api.v1alpha1.org.users.SetMyMfaTypeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.SetMyMfaTypeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.SetMyMfaTypeRequest}
 */
proto.api.v1alpha1.org.users.SetMyMfaTypeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new api_commons_org_user_pb.MfaInfo;
      reader.readMessage(value,api_commons_org_user_pb.MfaInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.SetMyMfaTypeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.SetMyMfaTypeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.SetMyMfaTypeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.SetMyMfaTypeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      api_commons_org_user_pb.MfaInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.MfaInfo info = 2;
 * @return {?proto.api.commons.org.MfaInfo}
 */
proto.api.v1alpha1.org.users.SetMyMfaTypeRequest.prototype.getInfo = function() {
  return /** @type{?proto.api.commons.org.MfaInfo} */ (
    jspb.Message.getWrapperField(this, api_commons_org_user_pb.MfaInfo, 2));
};


/**
 * @param {?proto.api.commons.org.MfaInfo|undefined} value
 * @return {!proto.api.v1alpha1.org.users.SetMyMfaTypeRequest} returns this
*/
proto.api.v1alpha1.org.users.SetMyMfaTypeRequest.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.SetMyMfaTypeRequest} returns this
 */
proto.api.v1alpha1.org.users.SetMyMfaTypeRequest.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.SetMyMfaTypeRequest.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.SetMyMfaTypeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.SetMyMfaTypeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.SetMyMfaTypeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.SetMyMfaTypeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.SetMyMfaTypeResponse}
 */
proto.api.v1alpha1.org.users.SetMyMfaTypeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.SetMyMfaTypeResponse;
  return proto.api.v1alpha1.org.users.SetMyMfaTypeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.SetMyMfaTypeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.SetMyMfaTypeResponse}
 */
proto.api.v1alpha1.org.users.SetMyMfaTypeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.SetMyMfaTypeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.SetMyMfaTypeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.SetMyMfaTypeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.SetMyMfaTypeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.EnableUserMfaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.EnableUserMfaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.EnableUserMfaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.EnableUserMfaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    enabled: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.EnableUserMfaRequest}
 */
proto.api.v1alpha1.org.users.EnableUserMfaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.EnableUserMfaRequest;
  return proto.api.v1alpha1.org.users.EnableUserMfaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.EnableUserMfaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.EnableUserMfaRequest}
 */
proto.api.v1alpha1.org.users.EnableUserMfaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.EnableUserMfaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.EnableUserMfaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.EnableUserMfaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.EnableUserMfaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.EnableUserMfaRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.EnableUserMfaRequest} returns this
 */
proto.api.v1alpha1.org.users.EnableUserMfaRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool enabled = 2;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.EnableUserMfaRequest.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.EnableUserMfaRequest} returns this
 */
proto.api.v1alpha1.org.users.EnableUserMfaRequest.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.EnableUserMfaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.EnableUserMfaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.EnableUserMfaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.EnableUserMfaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.EnableUserMfaResponse}
 */
proto.api.v1alpha1.org.users.EnableUserMfaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.EnableUserMfaResponse;
  return proto.api.v1alpha1.org.users.EnableUserMfaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.EnableUserMfaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.EnableUserMfaResponse}
 */
proto.api.v1alpha1.org.users.EnableUserMfaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.EnableUserMfaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.EnableUserMfaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.EnableUserMfaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.EnableUserMfaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.EnableMyUserMfaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.EnableMyUserMfaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.EnableMyUserMfaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.EnableMyUserMfaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.EnableMyUserMfaRequest}
 */
proto.api.v1alpha1.org.users.EnableMyUserMfaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.EnableMyUserMfaRequest;
  return proto.api.v1alpha1.org.users.EnableMyUserMfaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.EnableMyUserMfaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.EnableMyUserMfaRequest}
 */
proto.api.v1alpha1.org.users.EnableMyUserMfaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.EnableMyUserMfaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.EnableMyUserMfaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.EnableMyUserMfaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.EnableMyUserMfaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.EnableMyUserMfaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.EnableMyUserMfaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.EnableMyUserMfaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.EnableMyUserMfaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.EnableMyUserMfaResponse}
 */
proto.api.v1alpha1.org.users.EnableMyUserMfaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.EnableMyUserMfaResponse;
  return proto.api.v1alpha1.org.users.EnableMyUserMfaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.EnableMyUserMfaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.EnableMyUserMfaResponse}
 */
proto.api.v1alpha1.org.users.EnableMyUserMfaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.EnableMyUserMfaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.EnableMyUserMfaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.EnableMyUserMfaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.EnableMyUserMfaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.GetUserMfaInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.GetUserMfaInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.GetUserMfaInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserMfaInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.GetUserMfaInfoRequest}
 */
proto.api.v1alpha1.org.users.GetUserMfaInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.GetUserMfaInfoRequest;
  return proto.api.v1alpha1.org.users.GetUserMfaInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.GetUserMfaInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.GetUserMfaInfoRequest}
 */
proto.api.v1alpha1.org.users.GetUserMfaInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.GetUserMfaInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.GetUserMfaInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.GetUserMfaInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserMfaInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.users.GetUserMfaInfoRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.users.GetUserMfaInfoRequest} returns this
 */
proto.api.v1alpha1.org.users.GetUserMfaInfoRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.GetUserMfaInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.GetUserMfaInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.GetUserMfaInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserMfaInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && api_commons_org_user_pb.MfaInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.GetUserMfaInfoResponse}
 */
proto.api.v1alpha1.org.users.GetUserMfaInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.GetUserMfaInfoResponse;
  return proto.api.v1alpha1.org.users.GetUserMfaInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.GetUserMfaInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.GetUserMfaInfoResponse}
 */
proto.api.v1alpha1.org.users.GetUserMfaInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_user_pb.MfaInfo;
      reader.readMessage(value,api_commons_org_user_pb.MfaInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.GetUserMfaInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.GetUserMfaInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.GetUserMfaInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetUserMfaInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_user_pb.MfaInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.MfaInfo info = 1;
 * @return {?proto.api.commons.org.MfaInfo}
 */
proto.api.v1alpha1.org.users.GetUserMfaInfoResponse.prototype.getInfo = function() {
  return /** @type{?proto.api.commons.org.MfaInfo} */ (
    jspb.Message.getWrapperField(this, api_commons_org_user_pb.MfaInfo, 1));
};


/**
 * @param {?proto.api.commons.org.MfaInfo|undefined} value
 * @return {!proto.api.v1alpha1.org.users.GetUserMfaInfoResponse} returns this
*/
proto.api.v1alpha1.org.users.GetUserMfaInfoResponse.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.GetUserMfaInfoResponse} returns this
 */
proto.api.v1alpha1.org.users.GetUserMfaInfoResponse.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetUserMfaInfoResponse.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.GetMyUserMfaInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.GetMyUserMfaInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.GetMyUserMfaInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetMyUserMfaInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.GetMyUserMfaInfoRequest}
 */
proto.api.v1alpha1.org.users.GetMyUserMfaInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.GetMyUserMfaInfoRequest;
  return proto.api.v1alpha1.org.users.GetMyUserMfaInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.GetMyUserMfaInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.GetMyUserMfaInfoRequest}
 */
proto.api.v1alpha1.org.users.GetMyUserMfaInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.GetMyUserMfaInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.GetMyUserMfaInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.GetMyUserMfaInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetMyUserMfaInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.GetMyUserMfaInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.GetMyUserMfaInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.GetMyUserMfaInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetMyUserMfaInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && api_commons_org_user_pb.MfaInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.GetMyUserMfaInfoResponse}
 */
proto.api.v1alpha1.org.users.GetMyUserMfaInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.GetMyUserMfaInfoResponse;
  return proto.api.v1alpha1.org.users.GetMyUserMfaInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.GetMyUserMfaInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.GetMyUserMfaInfoResponse}
 */
proto.api.v1alpha1.org.users.GetMyUserMfaInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_user_pb.MfaInfo;
      reader.readMessage(value,api_commons_org_user_pb.MfaInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.GetMyUserMfaInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.GetMyUserMfaInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.GetMyUserMfaInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetMyUserMfaInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_user_pb.MfaInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.MfaInfo info = 1;
 * @return {?proto.api.commons.org.MfaInfo}
 */
proto.api.v1alpha1.org.users.GetMyUserMfaInfoResponse.prototype.getInfo = function() {
  return /** @type{?proto.api.commons.org.MfaInfo} */ (
    jspb.Message.getWrapperField(this, api_commons_org_user_pb.MfaInfo, 1));
};


/**
 * @param {?proto.api.commons.org.MfaInfo|undefined} value
 * @return {!proto.api.v1alpha1.org.users.GetMyUserMfaInfoResponse} returns this
*/
proto.api.v1alpha1.org.users.GetMyUserMfaInfoResponse.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.users.GetMyUserMfaInfoResponse} returns this
 */
proto.api.v1alpha1.org.users.GetMyUserMfaInfoResponse.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetMyUserMfaInfoResponse.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsRequest}
 */
proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsRequest;
  return proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsRequest}
 */
proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    mfaEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    emailEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    duoEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsResponse}
 */
proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsResponse;
  return proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsResponse}
 */
proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMfaEnabled(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEmailEnabled(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDuoEnabled(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMfaEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getEmailEnabled();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getDuoEnabled();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional bool mfa_enabled = 1;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsResponse.prototype.getMfaEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsResponse} returns this
 */
proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsResponse.prototype.setMfaEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool email_enabled = 2;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsResponse.prototype.getEmailEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsResponse} returns this
 */
proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsResponse.prototype.setEmailEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool duo_enabled = 3;
 * @return {boolean}
 */
proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsResponse.prototype.getDuoEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsResponse} returns this
 */
proto.api.v1alpha1.org.users.GetMyAllowedMfaMethodsResponse.prototype.setDuoEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsRequest.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    ipsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsRequest}
 */
proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsRequest;
  return proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsRequest}
 */
proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addUserIds(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addIps(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getIpsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated string user_ids = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsRequest.prototype.getUserIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsRequest} returns this
 */
proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsRequest.prototype.setUserIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsRequest} returns this
 */
proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsRequest.prototype.addUserIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsRequest} returns this
 */
proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsRequest.prototype.clearUserIdsList = function() {
  return this.setUserIdsList([]);
};


/**
 * repeated string ips = 2;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsRequest.prototype.getIpsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsRequest} returns this
 */
proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsRequest.prototype.setIpsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsRequest} returns this
 */
proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsRequest.prototype.addIps = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsRequest} returns this
 */
proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsRequest.prototype.clearIpsList = function() {
  return this.setIpsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsResponse}
 */
proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsResponse;
  return proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsResponse}
 */
proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.AddGroupedUserIPRestrictionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsRequest.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    ipsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsRequest}
 */
proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsRequest;
  return proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsRequest}
 */
proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addUserIds(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addIps(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getIpsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated string user_ids = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsRequest.prototype.getUserIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsRequest} returns this
 */
proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsRequest.prototype.setUserIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsRequest} returns this
 */
proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsRequest.prototype.addUserIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsRequest} returns this
 */
proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsRequest.prototype.clearUserIdsList = function() {
  return this.setUserIdsList([]);
};


/**
 * repeated string ips = 2;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsRequest.prototype.getIpsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsRequest} returns this
 */
proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsRequest.prototype.setIpsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsRequest} returns this
 */
proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsRequest.prototype.addIps = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsRequest} returns this
 */
proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsRequest.prototype.clearIpsList = function() {
  return this.setIpsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsResponse}
 */
proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsResponse;
  return proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsResponse}
 */
proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.RemoveGroupedUserIPRestrictionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.users.ListUsersAllowedIpsRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.ListUsersAllowedIpsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.ListUsersAllowedIpsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.ListUsersAllowedIpsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListUsersAllowedIpsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.ListUsersAllowedIpsRequest}
 */
proto.api.v1alpha1.org.users.ListUsersAllowedIpsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.ListUsersAllowedIpsRequest;
  return proto.api.v1alpha1.org.users.ListUsersAllowedIpsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.ListUsersAllowedIpsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.ListUsersAllowedIpsRequest}
 */
proto.api.v1alpha1.org.users.ListUsersAllowedIpsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addUserIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.ListUsersAllowedIpsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.ListUsersAllowedIpsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.ListUsersAllowedIpsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListUsersAllowedIpsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string user_ids = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.users.ListUsersAllowedIpsRequest.prototype.getUserIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersAllowedIpsRequest} returns this
 */
proto.api.v1alpha1.org.users.ListUsersAllowedIpsRequest.prototype.setUserIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.ListUsersAllowedIpsRequest} returns this
 */
proto.api.v1alpha1.org.users.ListUsersAllowedIpsRequest.prototype.addUserIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.ListUsersAllowedIpsRequest} returns this
 */
proto.api.v1alpha1.org.users.ListUsersAllowedIpsRequest.prototype.clearUserIdsList = function() {
  return this.setUserIdsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    userAllowedIpsMapMap: (f = msg.getUserAllowedIpsMapMap()) ? f.toObject(includeInstance, proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.AllowedIps.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse}
 */
proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse;
  return proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse}
 */
proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getUserAllowedIpsMapMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.AllowedIps.deserializeBinaryFromReader, "", new proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.AllowedIps());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserAllowedIpsMapMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.AllowedIps.serializeBinaryToWriter);
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.AllowedIps.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.AllowedIps.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.AllowedIps.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.AllowedIps} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.AllowedIps.toObject = function(includeInstance, msg) {
  var f, obj = {
    ipsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.AllowedIps}
 */
proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.AllowedIps.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.AllowedIps;
  return proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.AllowedIps.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.AllowedIps} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.AllowedIps}
 */
proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.AllowedIps.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addIps(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.AllowedIps.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.AllowedIps.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.AllowedIps} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.AllowedIps.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIpsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string ips = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.AllowedIps.prototype.getIpsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.AllowedIps} returns this
 */
proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.AllowedIps.prototype.setIpsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.AllowedIps} returns this
 */
proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.AllowedIps.prototype.addIps = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.AllowedIps} returns this
 */
proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.AllowedIps.prototype.clearIpsList = function() {
  return this.setIpsList([]);
};


/**
 * map<string, AllowedIps> user_allowed_ips_map = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.AllowedIps>}
 */
proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.prototype.getUserAllowedIpsMapMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.AllowedIps>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.AllowedIps));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse} returns this
 */
proto.api.v1alpha1.org.users.ListUsersAllowedIpsResponse.prototype.clearUserAllowedIpsMapMap = function() {
  this.getUserAllowedIpsMapMap().clear();
  return this;
};


goog.object.extend(exports, proto.api.v1alpha1.org.users);
