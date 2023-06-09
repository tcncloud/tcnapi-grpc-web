// source: api/v1alpha1/org/user.proto
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
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var api_commons_org_pb = require('../../../api/commons/org_pb.js');
goog.object.extend(proto, api_commons_org_pb);
var api_commons_org_labels_pb = require('../../../api/commons/org/labels_pb.js');
goog.object.extend(proto, api_commons_org_labels_pb);
var api_commons_org_permissions_pb = require('../../../api/commons/org/permissions_pb.js');
goog.object.extend(proto, api_commons_org_permissions_pb);
var api_commons_org_trusts_pb = require('../../../api/commons/org/trusts_pb.js');
goog.object.extend(proto, api_commons_org_trusts_pb);
var api_commons_org_user_pb = require('../../../api/commons/org/user_pb.js');
goog.object.extend(proto, api_commons_org_user_pb);
var api_commons_perms_pb = require('../../../api/commons/perms_pb.js');
goog.object.extend(proto, api_commons_perms_pb);
var api_commons_user_pb = require('../../../api/commons/user_pb.js');
goog.object.extend(proto, api_commons_user_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.api.v1alpha1.org.CreateDelegatedUserRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.CreateDelegatedUserResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.CreateUserRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.CreateUserResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetMyUserPasswordResetLinkRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetMyUserPasswordResetLinkResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetMyUserRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetMyUserResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetMyUserResponse.AgentProfileGroup', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetMyUserResponse.HuntGroup', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetUserByOrgIdRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetUserByOrgIdResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetUserByOrgIdResponse.AgentProfileGroup', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetUserByOrgIdResponse.HuntGroup', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetUserEmailVerifiedRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetUserEmailVerifiedResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetUserLoginInfoRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetUserLoginInfoResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetUserPasswordResetLinkRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetUserPasswordResetLinkResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetUserRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetUserResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetUserResponse.AgentProfileGroup', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetUserResponse.HuntGroup', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetUserSessionDataRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetUserSessionDataResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetUserSessionDataResponse.User', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.ListAgentsRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.ListAgentsResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.AgentProfileGroup', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.HuntGroup', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.ListUsersByOrgIdRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.ListUsersByOrgIdResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.ListUsersByRegionRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.ListUsersByRegionResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.ListUsersRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.ListUsersResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.ListUsersResponse.UserDetails', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.SendUserEmailVerificationRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.SendUserEmailVerificationResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateMyUserRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateMyUserResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateUserCallerIdRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateUserCallerIdResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateUserDisabledRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateUserDisabledResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateUserLabelsRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateUserLabelsResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateUserRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateUserResponse', null, global);
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
proto.api.v1alpha1.org.CreateUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.CreateUserRequest.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.CreateUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.CreateUserRequest.displayName = 'proto.api.v1alpha1.org.CreateUserRequest';
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
proto.api.v1alpha1.org.CreateUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.CreateUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.CreateUserResponse.displayName = 'proto.api.v1alpha1.org.CreateUserResponse';
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
proto.api.v1alpha1.org.CreateDelegatedUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.CreateDelegatedUserRequest.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.CreateDelegatedUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.CreateDelegatedUserRequest.displayName = 'proto.api.v1alpha1.org.CreateDelegatedUserRequest';
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
proto.api.v1alpha1.org.CreateDelegatedUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.CreateDelegatedUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.CreateDelegatedUserResponse.displayName = 'proto.api.v1alpha1.org.CreateDelegatedUserResponse';
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
proto.api.v1alpha1.org.GetMyUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetMyUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetMyUserRequest.displayName = 'proto.api.v1alpha1.org.GetMyUserRequest';
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
proto.api.v1alpha1.org.GetMyUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.GetMyUserResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.GetMyUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetMyUserResponse.displayName = 'proto.api.v1alpha1.org.GetMyUserResponse';
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
proto.api.v1alpha1.org.GetMyUserResponse.HuntGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetMyUserResponse.HuntGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetMyUserResponse.HuntGroup.displayName = 'proto.api.v1alpha1.org.GetMyUserResponse.HuntGroup';
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
proto.api.v1alpha1.org.GetMyUserResponse.AgentProfileGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetMyUserResponse.AgentProfileGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetMyUserResponse.AgentProfileGroup.displayName = 'proto.api.v1alpha1.org.GetMyUserResponse.AgentProfileGroup';
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
proto.api.v1alpha1.org.GetUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetUserRequest.displayName = 'proto.api.v1alpha1.org.GetUserRequest';
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
proto.api.v1alpha1.org.GetUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.GetUserResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.GetUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetUserResponse.displayName = 'proto.api.v1alpha1.org.GetUserResponse';
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
proto.api.v1alpha1.org.GetUserResponse.HuntGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetUserResponse.HuntGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetUserResponse.HuntGroup.displayName = 'proto.api.v1alpha1.org.GetUserResponse.HuntGroup';
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
proto.api.v1alpha1.org.GetUserResponse.AgentProfileGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetUserResponse.AgentProfileGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetUserResponse.AgentProfileGroup.displayName = 'proto.api.v1alpha1.org.GetUserResponse.AgentProfileGroup';
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
proto.api.v1alpha1.org.GetUserByOrgIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetUserByOrgIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetUserByOrgIdRequest.displayName = 'proto.api.v1alpha1.org.GetUserByOrgIdRequest';
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
proto.api.v1alpha1.org.GetUserByOrgIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.GetUserByOrgIdResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.GetUserByOrgIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetUserByOrgIdResponse.displayName = 'proto.api.v1alpha1.org.GetUserByOrgIdResponse';
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
proto.api.v1alpha1.org.GetUserByOrgIdResponse.HuntGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetUserByOrgIdResponse.HuntGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetUserByOrgIdResponse.HuntGroup.displayName = 'proto.api.v1alpha1.org.GetUserByOrgIdResponse.HuntGroup';
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
proto.api.v1alpha1.org.GetUserByOrgIdResponse.AgentProfileGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetUserByOrgIdResponse.AgentProfileGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetUserByOrgIdResponse.AgentProfileGroup.displayName = 'proto.api.v1alpha1.org.GetUserByOrgIdResponse.AgentProfileGroup';
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
proto.api.v1alpha1.org.ListAgentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.ListAgentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.ListAgentsRequest.displayName = 'proto.api.v1alpha1.org.ListAgentsRequest';
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
proto.api.v1alpha1.org.ListAgentsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.ListAgentsResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.ListAgentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.ListAgentsResponse.displayName = 'proto.api.v1alpha1.org.ListAgentsResponse';
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
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.displayName = 'proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails';
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
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.HuntGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.HuntGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.HuntGroup.displayName = 'proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.HuntGroup';
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
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.AgentProfileGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.AgentProfileGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.AgentProfileGroup.displayName = 'proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.AgentProfileGroup';
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
proto.api.v1alpha1.org.ListUsersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.ListUsersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.ListUsersRequest.displayName = 'proto.api.v1alpha1.org.ListUsersRequest';
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
proto.api.v1alpha1.org.ListUsersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.ListUsersResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.ListUsersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.ListUsersResponse.displayName = 'proto.api.v1alpha1.org.ListUsersResponse';
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
proto.api.v1alpha1.org.ListUsersResponse.UserDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.ListUsersResponse.UserDetails.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.ListUsersResponse.UserDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.ListUsersResponse.UserDetails.displayName = 'proto.api.v1alpha1.org.ListUsersResponse.UserDetails';
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
proto.api.v1alpha1.org.ListUsersByOrgIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.ListUsersByOrgIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.ListUsersByOrgIdRequest.displayName = 'proto.api.v1alpha1.org.ListUsersByOrgIdRequest';
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
proto.api.v1alpha1.org.ListUsersByOrgIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.ListUsersByOrgIdResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.ListUsersByOrgIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.ListUsersByOrgIdResponse.displayName = 'proto.api.v1alpha1.org.ListUsersByOrgIdResponse';
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
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.displayName = 'proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails';
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
proto.api.v1alpha1.org.ListUsersByRegionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.ListUsersByRegionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.ListUsersByRegionRequest.displayName = 'proto.api.v1alpha1.org.ListUsersByRegionRequest';
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
proto.api.v1alpha1.org.ListUsersByRegionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.ListUsersByRegionResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.ListUsersByRegionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.ListUsersByRegionResponse.displayName = 'proto.api.v1alpha1.org.ListUsersByRegionResponse';
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
proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.displayName = 'proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails';
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
proto.api.v1alpha1.org.UpdateMyUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.UpdateMyUserRequest.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateMyUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateMyUserRequest.displayName = 'proto.api.v1alpha1.org.UpdateMyUserRequest';
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
proto.api.v1alpha1.org.UpdateMyUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateMyUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateMyUserResponse.displayName = 'proto.api.v1alpha1.org.UpdateMyUserResponse';
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
proto.api.v1alpha1.org.UpdateUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.UpdateUserRequest.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateUserRequest.displayName = 'proto.api.v1alpha1.org.UpdateUserRequest';
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
proto.api.v1alpha1.org.UpdateUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateUserResponse.displayName = 'proto.api.v1alpha1.org.UpdateUserResponse';
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
proto.api.v1alpha1.org.UpdateUserLabelsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.UpdateUserLabelsRequest.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateUserLabelsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateUserLabelsRequest.displayName = 'proto.api.v1alpha1.org.UpdateUserLabelsRequest';
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
proto.api.v1alpha1.org.UpdateUserLabelsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateUserLabelsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateUserLabelsResponse.displayName = 'proto.api.v1alpha1.org.UpdateUserLabelsResponse';
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
proto.api.v1alpha1.org.UpdateUserCallerIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateUserCallerIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateUserCallerIdRequest.displayName = 'proto.api.v1alpha1.org.UpdateUserCallerIdRequest';
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
proto.api.v1alpha1.org.UpdateUserCallerIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateUserCallerIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateUserCallerIdResponse.displayName = 'proto.api.v1alpha1.org.UpdateUserCallerIdResponse';
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
proto.api.v1alpha1.org.UpdateUserDisabledRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateUserDisabledRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateUserDisabledRequest.displayName = 'proto.api.v1alpha1.org.UpdateUserDisabledRequest';
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
proto.api.v1alpha1.org.UpdateUserDisabledResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateUserDisabledResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateUserDisabledResponse.displayName = 'proto.api.v1alpha1.org.UpdateUserDisabledResponse';
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
proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdRequest.displayName = 'proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdRequest';
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
proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdResponse.displayName = 'proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdResponse';
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
proto.api.v1alpha1.org.GetMyUserPasswordResetLinkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetMyUserPasswordResetLinkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetMyUserPasswordResetLinkRequest.displayName = 'proto.api.v1alpha1.org.GetMyUserPasswordResetLinkRequest';
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
proto.api.v1alpha1.org.GetMyUserPasswordResetLinkResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetMyUserPasswordResetLinkResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetMyUserPasswordResetLinkResponse.displayName = 'proto.api.v1alpha1.org.GetMyUserPasswordResetLinkResponse';
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
proto.api.v1alpha1.org.GetUserPasswordResetLinkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetUserPasswordResetLinkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetUserPasswordResetLinkRequest.displayName = 'proto.api.v1alpha1.org.GetUserPasswordResetLinkRequest';
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
proto.api.v1alpha1.org.GetUserPasswordResetLinkResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetUserPasswordResetLinkResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetUserPasswordResetLinkResponse.displayName = 'proto.api.v1alpha1.org.GetUserPasswordResetLinkResponse';
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
proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdRequest.displayName = 'proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdRequest';
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
proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdResponse.displayName = 'proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdResponse';
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
proto.api.v1alpha1.org.GetUserLoginInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetUserLoginInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetUserLoginInfoRequest.displayName = 'proto.api.v1alpha1.org.GetUserLoginInfoRequest';
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
proto.api.v1alpha1.org.GetUserLoginInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetUserLoginInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetUserLoginInfoResponse.displayName = 'proto.api.v1alpha1.org.GetUserLoginInfoResponse';
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
proto.api.v1alpha1.org.GetUserEmailVerifiedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetUserEmailVerifiedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetUserEmailVerifiedRequest.displayName = 'proto.api.v1alpha1.org.GetUserEmailVerifiedRequest';
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
proto.api.v1alpha1.org.GetUserEmailVerifiedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetUserEmailVerifiedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetUserEmailVerifiedResponse.displayName = 'proto.api.v1alpha1.org.GetUserEmailVerifiedResponse';
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
proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdRequest.displayName = 'proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdRequest';
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
proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdResponse.displayName = 'proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdResponse';
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
proto.api.v1alpha1.org.SendUserEmailVerificationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.SendUserEmailVerificationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.SendUserEmailVerificationRequest.displayName = 'proto.api.v1alpha1.org.SendUserEmailVerificationRequest';
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
proto.api.v1alpha1.org.SendUserEmailVerificationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.SendUserEmailVerificationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.SendUserEmailVerificationResponse.displayName = 'proto.api.v1alpha1.org.SendUserEmailVerificationResponse';
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
proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdRequest.displayName = 'proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdRequest';
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
proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdResponse.displayName = 'proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdResponse';
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
proto.api.v1alpha1.org.GetUserSessionDataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetUserSessionDataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetUserSessionDataRequest.displayName = 'proto.api.v1alpha1.org.GetUserSessionDataRequest';
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
proto.api.v1alpha1.org.GetUserSessionDataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.GetUserSessionDataResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.GetUserSessionDataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetUserSessionDataResponse.displayName = 'proto.api.v1alpha1.org.GetUserSessionDataResponse';
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
proto.api.v1alpha1.org.GetUserSessionDataResponse.User = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.GetUserSessionDataResponse.User.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.GetUserSessionDataResponse.User, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetUserSessionDataResponse.User.displayName = 'proto.api.v1alpha1.org.GetUserSessionDataResponse.User';
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
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids.displayName = 'proto.api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.CreateUserRequest.repeatedFields_ = [7,11,12,16];



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
proto.api.v1alpha1.org.CreateUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.CreateUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.CreateUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CreateUserRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.CreateUserRequest}
 */
proto.api.v1alpha1.org.CreateUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.CreateUserRequest;
  return proto.api.v1alpha1.org.CreateUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.CreateUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.CreateUserRequest}
 */
proto.api.v1alpha1.org.CreateUserRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.CreateUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.CreateUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.CreateUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CreateUserRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.CreateUserRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string first_name = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string last_name = 3;
 * @return {string}
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string email = 4;
 * @return {string}
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string user_name = 5;
 * @return {string}
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.getUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.setUserName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string password = 6;
 * @return {string}
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated string permission_group_ids = 7;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.getPermissionGroupIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.setPermissionGroupIdsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.addPermissionGroupIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.clearPermissionGroupIdsList = function() {
  return this.setPermissionGroupIdsList([]);
};


/**
 * optional string partner_agent_id = 9;
 * @return {string}
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.getPartnerAgentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.setPartnerAgentId = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string p3_permission_group_id = 10;
 * @return {string}
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.getP3PermissionGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.setP3PermissionGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * repeated string linkback_numbers = 11;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.getLinkbackNumbersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.setLinkbackNumbersList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.addLinkbackNumbers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.clearLinkbackNumbersList = function() {
  return this.setLinkbackNumbersList([]);
};


/**
 * repeated string caller_ids = 12;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.getCallerIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 12));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.setCallerIdsList = function(value) {
  return jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.addCallerIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.clearCallerIdsList = function() {
  return this.setCallerIdsList([]);
};


/**
 * optional api.commons.OperatorApplications default_app = 13;
 * @return {!proto.api.commons.OperatorApplications}
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.getDefaultApp = function() {
  return /** @type {!proto.api.commons.OperatorApplications} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.api.commons.OperatorApplications} value
 * @return {!proto.api.v1alpha1.org.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.setDefaultApp = function(value) {
  return jspb.Message.setProto3EnumField(this, 13, value);
};


/**
 * optional string user_caller_id = 14;
 * @return {string}
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.getUserCallerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.setUserCallerId = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string agent_profile_group_id = 15;
 * @return {string}
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.getAgentProfileGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.setAgentProfileGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * repeated string label_ids = 16;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.getLabelIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 16));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.setLabelIdsList = function(value) {
  return jspb.Message.setField(this, 16, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.addLabelIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 16, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.clearLabelIdsList = function() {
  return this.setLabelIdsList([]);
};


/**
 * optional api.commons.TimeZoneWrapper time_zone_override = 17;
 * @return {?proto.api.commons.TimeZoneWrapper}
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.getTimeZoneOverride = function() {
  return /** @type{?proto.api.commons.TimeZoneWrapper} */ (
    jspb.Message.getWrapperField(this, api_commons_org_pb.TimeZoneWrapper, 17));
};


/**
 * @param {?proto.api.commons.TimeZoneWrapper|undefined} value
 * @return {!proto.api.v1alpha1.org.CreateUserRequest} returns this
*/
proto.api.v1alpha1.org.CreateUserRequest.prototype.setTimeZoneOverride = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.clearTimeZoneOverride = function() {
  return this.setTimeZoneOverride(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.hasTimeZoneOverride = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional int64 hunt_group_sid = 18;
 * @return {number}
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.CreateUserRequest} returns this
 */
proto.api.v1alpha1.org.CreateUserRequest.prototype.setHuntGroupSid = function(value) {
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
proto.api.v1alpha1.org.CreateUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.CreateUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.CreateUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CreateUserResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.CreateUserResponse}
 */
proto.api.v1alpha1.org.CreateUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.CreateUserResponse;
  return proto.api.v1alpha1.org.CreateUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.CreateUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.CreateUserResponse}
 */
proto.api.v1alpha1.org.CreateUserResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.CreateUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.CreateUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.CreateUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CreateUserResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.CreateUserResponse.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.CreateUserResponse} returns this
 */
proto.api.v1alpha1.org.CreateUserResponse.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.CreateDelegatedUserRequest.repeatedFields_ = [7];



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
proto.api.v1alpha1.org.CreateDelegatedUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.CreateDelegatedUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.CreateDelegatedUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CreateDelegatedUserRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.CreateDelegatedUserRequest}
 */
proto.api.v1alpha1.org.CreateDelegatedUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.CreateDelegatedUserRequest;
  return proto.api.v1alpha1.org.CreateDelegatedUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.CreateDelegatedUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.CreateDelegatedUserRequest}
 */
proto.api.v1alpha1.org.CreateDelegatedUserRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.CreateDelegatedUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.CreateDelegatedUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.CreateDelegatedUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CreateDelegatedUserRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.CreateDelegatedUserRequest.prototype.getAuthUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.CreateDelegatedUserRequest} returns this
 */
proto.api.v1alpha1.org.CreateDelegatedUserRequest.prototype.setAuthUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.CreateDelegatedUserRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.CreateDelegatedUserRequest} returns this
 */
proto.api.v1alpha1.org.CreateDelegatedUserRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string email = 3;
 * @return {string}
 */
proto.api.v1alpha1.org.CreateDelegatedUserRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.CreateDelegatedUserRequest} returns this
 */
proto.api.v1alpha1.org.CreateDelegatedUserRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string username = 4;
 * @return {string}
 */
proto.api.v1alpha1.org.CreateDelegatedUserRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.CreateDelegatedUserRequest} returns this
 */
proto.api.v1alpha1.org.CreateDelegatedUserRequest.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string first_name = 5;
 * @return {string}
 */
proto.api.v1alpha1.org.CreateDelegatedUserRequest.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.CreateDelegatedUserRequest} returns this
 */
proto.api.v1alpha1.org.CreateDelegatedUserRequest.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string last_name = 6;
 * @return {string}
 */
proto.api.v1alpha1.org.CreateDelegatedUserRequest.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.CreateDelegatedUserRequest} returns this
 */
proto.api.v1alpha1.org.CreateDelegatedUserRequest.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated string groups = 7;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.CreateDelegatedUserRequest.prototype.getGroupsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.CreateDelegatedUserRequest} returns this
 */
proto.api.v1alpha1.org.CreateDelegatedUserRequest.prototype.setGroupsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.CreateDelegatedUserRequest} returns this
 */
proto.api.v1alpha1.org.CreateDelegatedUserRequest.prototype.addGroups = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.CreateDelegatedUserRequest} returns this
 */
proto.api.v1alpha1.org.CreateDelegatedUserRequest.prototype.clearGroupsList = function() {
  return this.setGroupsList([]);
};


/**
 * optional string connection_id = 8;
 * @return {string}
 */
proto.api.v1alpha1.org.CreateDelegatedUserRequest.prototype.getConnectionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.CreateDelegatedUserRequest} returns this
 */
proto.api.v1alpha1.org.CreateDelegatedUserRequest.prototype.setConnectionId = function(value) {
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
proto.api.v1alpha1.org.CreateDelegatedUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.CreateDelegatedUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.CreateDelegatedUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CreateDelegatedUserResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.CreateDelegatedUserResponse}
 */
proto.api.v1alpha1.org.CreateDelegatedUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.CreateDelegatedUserResponse;
  return proto.api.v1alpha1.org.CreateDelegatedUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.CreateDelegatedUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.CreateDelegatedUserResponse}
 */
proto.api.v1alpha1.org.CreateDelegatedUserResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.CreateDelegatedUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.CreateDelegatedUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.CreateDelegatedUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CreateDelegatedUserResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.CreateDelegatedUserResponse.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.CreateDelegatedUserResponse} returns this
 */
proto.api.v1alpha1.org.CreateDelegatedUserResponse.prototype.setUserId = function(value) {
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
proto.api.v1alpha1.org.GetMyUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetMyUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetMyUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetMyUserRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetMyUserRequest}
 */
proto.api.v1alpha1.org.GetMyUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetMyUserRequest;
  return proto.api.v1alpha1.org.GetMyUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetMyUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetMyUserRequest}
 */
proto.api.v1alpha1.org.GetMyUserRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetMyUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetMyUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetMyUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetMyUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.GetMyUserResponse.repeatedFields_ = [6,7,8,11];



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
proto.api.v1alpha1.org.GetMyUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetMyUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetMyUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetMyUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orgId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    username: jspb.Message.getFieldWithDefault(msg, 13, ""),
    delegated: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    orgName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    huntGroup: (f = msg.getHuntGroup()) && proto.api.v1alpha1.org.GetMyUserResponse.HuntGroup.toObject(includeInstance, f),
    labelsList: jspb.Message.toObjectList(msg.getLabelsList(),
    api_commons_org_labels_pb.Label.toObject, includeInstance),
    skillsList: jspb.Message.toObjectList(msg.getSkillsList(),
    api_commons_org_user_pb.Skill.toObject, includeInstance),
    permissionGroupsList: jspb.Message.toObjectList(msg.getPermissionGroupsList(),
    api_commons_org_permissions_pb.PermissionGroup.toObject, includeInstance),
    p3PermissionGroup: (f = msg.getP3PermissionGroup()) && api_commons_org_permissions_pb.P3PermissionGroup.toObject(includeInstance, f),
    agentProfileGroup: (f = msg.getAgentProfileGroup()) && proto.api.v1alpha1.org.GetMyUserResponse.AgentProfileGroup.toObject(includeInstance, f),
    trustsList: jspb.Message.toObjectList(msg.getTrustsList(),
    api_commons_org_trusts_pb.Trust.toObject, includeInstance),
    accountOwner: jspb.Message.getBooleanFieldWithDefault(msg, 12, false)
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
 * @return {!proto.api.v1alpha1.org.GetMyUserResponse}
 */
proto.api.v1alpha1.org.GetMyUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetMyUserResponse;
  return proto.api.v1alpha1.org.GetMyUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetMyUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetMyUserResponse}
 */
proto.api.v1alpha1.org.GetMyUserResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.api.v1alpha1.org.GetMyUserResponse.HuntGroup;
      reader.readMessage(value,proto.api.v1alpha1.org.GetMyUserResponse.HuntGroup.deserializeBinaryFromReader);
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
      var value = new proto.api.v1alpha1.org.GetMyUserResponse.AgentProfileGroup;
      reader.readMessage(value,proto.api.v1alpha1.org.GetMyUserResponse.AgentProfileGroup.deserializeBinaryFromReader);
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
proto.api.v1alpha1.org.GetMyUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetMyUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetMyUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetMyUserResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.api.v1alpha1.org.GetMyUserResponse.HuntGroup.serializeBinaryToWriter
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
      proto.api.v1alpha1.org.GetMyUserResponse.AgentProfileGroup.serializeBinaryToWriter
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
proto.api.v1alpha1.org.GetMyUserResponse.HuntGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetMyUserResponse.HuntGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetMyUserResponse.HuntGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetMyUserResponse.HuntGroup.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetMyUserResponse.HuntGroup}
 */
proto.api.v1alpha1.org.GetMyUserResponse.HuntGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetMyUserResponse.HuntGroup;
  return proto.api.v1alpha1.org.GetMyUserResponse.HuntGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetMyUserResponse.HuntGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetMyUserResponse.HuntGroup}
 */
proto.api.v1alpha1.org.GetMyUserResponse.HuntGroup.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetMyUserResponse.HuntGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetMyUserResponse.HuntGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetMyUserResponse.HuntGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetMyUserResponse.HuntGroup.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetMyUserResponse.HuntGroup.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.GetMyUserResponse.HuntGroup} returns this
 */
proto.api.v1alpha1.org.GetMyUserResponse.HuntGroup.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string hunt_group_name = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.GetMyUserResponse.HuntGroup.prototype.getHuntGroupName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetMyUserResponse.HuntGroup} returns this
 */
proto.api.v1alpha1.org.GetMyUserResponse.HuntGroup.prototype.setHuntGroupName = function(value) {
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
proto.api.v1alpha1.org.GetMyUserResponse.AgentProfileGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetMyUserResponse.AgentProfileGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetMyUserResponse.AgentProfileGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetMyUserResponse.AgentProfileGroup.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetMyUserResponse.AgentProfileGroup}
 */
proto.api.v1alpha1.org.GetMyUserResponse.AgentProfileGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetMyUserResponse.AgentProfileGroup;
  return proto.api.v1alpha1.org.GetMyUserResponse.AgentProfileGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetMyUserResponse.AgentProfileGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetMyUserResponse.AgentProfileGroup}
 */
proto.api.v1alpha1.org.GetMyUserResponse.AgentProfileGroup.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetMyUserResponse.AgentProfileGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetMyUserResponse.AgentProfileGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetMyUserResponse.AgentProfileGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetMyUserResponse.AgentProfileGroup.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetMyUserResponse.AgentProfileGroup.prototype.getAgentProfileGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetMyUserResponse.AgentProfileGroup} returns this
 */
proto.api.v1alpha1.org.GetMyUserResponse.AgentProfileGroup.prototype.setAgentProfileGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string agent_profile_group_name = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.GetMyUserResponse.AgentProfileGroup.prototype.getAgentProfileGroupName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetMyUserResponse.AgentProfileGroup} returns this
 */
proto.api.v1alpha1.org.GetMyUserResponse.AgentProfileGroup.prototype.setAgentProfileGroupName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.GetMyUserResponse.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetMyUserResponse} returns this
 */
proto.api.v1alpha1.org.GetMyUserResponse.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.GetMyUserResponse.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetMyUserResponse} returns this
 */
proto.api.v1alpha1.org.GetMyUserResponse.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string username = 13;
 * @return {string}
 */
proto.api.v1alpha1.org.GetMyUserResponse.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetMyUserResponse} returns this
 */
proto.api.v1alpha1.org.GetMyUserResponse.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional bool delegated = 3;
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetMyUserResponse.prototype.getDelegated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.GetMyUserResponse} returns this
 */
proto.api.v1alpha1.org.GetMyUserResponse.prototype.setDelegated = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string org_name = 4;
 * @return {string}
 */
proto.api.v1alpha1.org.GetMyUserResponse.prototype.getOrgName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetMyUserResponse} returns this
 */
proto.api.v1alpha1.org.GetMyUserResponse.prototype.setOrgName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional HuntGroup hunt_group = 5;
 * @return {?proto.api.v1alpha1.org.GetMyUserResponse.HuntGroup}
 */
proto.api.v1alpha1.org.GetMyUserResponse.prototype.getHuntGroup = function() {
  return /** @type{?proto.api.v1alpha1.org.GetMyUserResponse.HuntGroup} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.org.GetMyUserResponse.HuntGroup, 5));
};


/**
 * @param {?proto.api.v1alpha1.org.GetMyUserResponse.HuntGroup|undefined} value
 * @return {!proto.api.v1alpha1.org.GetMyUserResponse} returns this
*/
proto.api.v1alpha1.org.GetMyUserResponse.prototype.setHuntGroup = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetMyUserResponse} returns this
 */
proto.api.v1alpha1.org.GetMyUserResponse.prototype.clearHuntGroup = function() {
  return this.setHuntGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetMyUserResponse.prototype.hasHuntGroup = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated api.commons.org.Label labels = 6;
 * @return {!Array<!proto.api.commons.org.Label>}
 */
proto.api.v1alpha1.org.GetMyUserResponse.prototype.getLabelsList = function() {
  return /** @type{!Array<!proto.api.commons.org.Label>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_labels_pb.Label, 6));
};


/**
 * @param {!Array<!proto.api.commons.org.Label>} value
 * @return {!proto.api.v1alpha1.org.GetMyUserResponse} returns this
*/
proto.api.v1alpha1.org.GetMyUserResponse.prototype.setLabelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.api.commons.org.Label=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.Label}
 */
proto.api.v1alpha1.org.GetMyUserResponse.prototype.addLabels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.api.commons.org.Label, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.GetMyUserResponse} returns this
 */
proto.api.v1alpha1.org.GetMyUserResponse.prototype.clearLabelsList = function() {
  return this.setLabelsList([]);
};


/**
 * repeated api.commons.org.Skill skills = 7;
 * @return {!Array<!proto.api.commons.org.Skill>}
 */
proto.api.v1alpha1.org.GetMyUserResponse.prototype.getSkillsList = function() {
  return /** @type{!Array<!proto.api.commons.org.Skill>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_user_pb.Skill, 7));
};


/**
 * @param {!Array<!proto.api.commons.org.Skill>} value
 * @return {!proto.api.v1alpha1.org.GetMyUserResponse} returns this
*/
proto.api.v1alpha1.org.GetMyUserResponse.prototype.setSkillsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.api.commons.org.Skill=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.Skill}
 */
proto.api.v1alpha1.org.GetMyUserResponse.prototype.addSkills = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.api.commons.org.Skill, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.GetMyUserResponse} returns this
 */
proto.api.v1alpha1.org.GetMyUserResponse.prototype.clearSkillsList = function() {
  return this.setSkillsList([]);
};


/**
 * repeated api.commons.org.PermissionGroup permission_groups = 8;
 * @return {!Array<!proto.api.commons.org.PermissionGroup>}
 */
proto.api.v1alpha1.org.GetMyUserResponse.prototype.getPermissionGroupsList = function() {
  return /** @type{!Array<!proto.api.commons.org.PermissionGroup>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_permissions_pb.PermissionGroup, 8));
};


/**
 * @param {!Array<!proto.api.commons.org.PermissionGroup>} value
 * @return {!proto.api.v1alpha1.org.GetMyUserResponse} returns this
*/
proto.api.v1alpha1.org.GetMyUserResponse.prototype.setPermissionGroupsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.api.commons.org.PermissionGroup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.PermissionGroup}
 */
proto.api.v1alpha1.org.GetMyUserResponse.prototype.addPermissionGroups = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.api.commons.org.PermissionGroup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.GetMyUserResponse} returns this
 */
proto.api.v1alpha1.org.GetMyUserResponse.prototype.clearPermissionGroupsList = function() {
  return this.setPermissionGroupsList([]);
};


/**
 * optional api.commons.org.P3PermissionGroup p3_permission_group = 9;
 * @return {?proto.api.commons.org.P3PermissionGroup}
 */
proto.api.v1alpha1.org.GetMyUserResponse.prototype.getP3PermissionGroup = function() {
  return /** @type{?proto.api.commons.org.P3PermissionGroup} */ (
    jspb.Message.getWrapperField(this, api_commons_org_permissions_pb.P3PermissionGroup, 9));
};


/**
 * @param {?proto.api.commons.org.P3PermissionGroup|undefined} value
 * @return {!proto.api.v1alpha1.org.GetMyUserResponse} returns this
*/
proto.api.v1alpha1.org.GetMyUserResponse.prototype.setP3PermissionGroup = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetMyUserResponse} returns this
 */
proto.api.v1alpha1.org.GetMyUserResponse.prototype.clearP3PermissionGroup = function() {
  return this.setP3PermissionGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetMyUserResponse.prototype.hasP3PermissionGroup = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional AgentProfileGroup agent_profile_group = 10;
 * @return {?proto.api.v1alpha1.org.GetMyUserResponse.AgentProfileGroup}
 */
proto.api.v1alpha1.org.GetMyUserResponse.prototype.getAgentProfileGroup = function() {
  return /** @type{?proto.api.v1alpha1.org.GetMyUserResponse.AgentProfileGroup} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.org.GetMyUserResponse.AgentProfileGroup, 10));
};


/**
 * @param {?proto.api.v1alpha1.org.GetMyUserResponse.AgentProfileGroup|undefined} value
 * @return {!proto.api.v1alpha1.org.GetMyUserResponse} returns this
*/
proto.api.v1alpha1.org.GetMyUserResponse.prototype.setAgentProfileGroup = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetMyUserResponse} returns this
 */
proto.api.v1alpha1.org.GetMyUserResponse.prototype.clearAgentProfileGroup = function() {
  return this.setAgentProfileGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetMyUserResponse.prototype.hasAgentProfileGroup = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * repeated api.commons.org.Trust trusts = 11;
 * @return {!Array<!proto.api.commons.org.Trust>}
 */
proto.api.v1alpha1.org.GetMyUserResponse.prototype.getTrustsList = function() {
  return /** @type{!Array<!proto.api.commons.org.Trust>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_trusts_pb.Trust, 11));
};


/**
 * @param {!Array<!proto.api.commons.org.Trust>} value
 * @return {!proto.api.v1alpha1.org.GetMyUserResponse} returns this
*/
proto.api.v1alpha1.org.GetMyUserResponse.prototype.setTrustsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.api.commons.org.Trust=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.Trust}
 */
proto.api.v1alpha1.org.GetMyUserResponse.prototype.addTrusts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.api.commons.org.Trust, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.GetMyUserResponse} returns this
 */
proto.api.v1alpha1.org.GetMyUserResponse.prototype.clearTrustsList = function() {
  return this.setTrustsList([]);
};


/**
 * optional bool account_owner = 12;
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetMyUserResponse.prototype.getAccountOwner = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.GetMyUserResponse} returns this
 */
proto.api.v1alpha1.org.GetMyUserResponse.prototype.setAccountOwner = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
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
proto.api.v1alpha1.org.GetUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetUserRequest}
 */
proto.api.v1alpha1.org.GetUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetUserRequest;
  return proto.api.v1alpha1.org.GetUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetUserRequest}
 */
proto.api.v1alpha1.org.GetUserRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetUserRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserRequest} returns this
 */
proto.api.v1alpha1.org.GetUserRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.GetUserResponse.repeatedFields_ = [6,7,8,18,19,23];



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
proto.api.v1alpha1.org.GetUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orgId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    delegated: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    timeZoneOverride: (f = msg.getTimeZoneOverride()) && api_commons_org_pb.TimeZoneWrapper.toObject(includeInstance, f),
    huntGroup: (f = msg.getHuntGroup()) && proto.api.v1alpha1.org.GetUserResponse.HuntGroup.toObject(includeInstance, f),
    labelsList: jspb.Message.toObjectList(msg.getLabelsList(),
    api_commons_org_labels_pb.Label.toObject, includeInstance),
    skillsList: jspb.Message.toObjectList(msg.getSkillsList(),
    api_commons_org_user_pb.Skill.toObject, includeInstance),
    permissionGroupsList: jspb.Message.toObjectList(msg.getPermissionGroupsList(),
    api_commons_org_permissions_pb.PermissionGroup.toObject, includeInstance),
    p3PermissionGroup: (f = msg.getP3PermissionGroup()) && api_commons_org_permissions_pb.P3PermissionGroup.toObject(includeInstance, f),
    agentProfileGroup: (f = msg.getAgentProfileGroup()) && proto.api.v1alpha1.org.GetUserResponse.AgentProfileGroup.toObject(includeInstance, f),
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
    accountOwner: jspb.Message.getBooleanFieldWithDefault(msg, 29, false)
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
 * @return {!proto.api.v1alpha1.org.GetUserResponse}
 */
proto.api.v1alpha1.org.GetUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetUserResponse;
  return proto.api.v1alpha1.org.GetUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetUserResponse}
 */
proto.api.v1alpha1.org.GetUserResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.api.v1alpha1.org.GetUserResponse.HuntGroup;
      reader.readMessage(value,proto.api.v1alpha1.org.GetUserResponse.HuntGroup.deserializeBinaryFromReader);
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
      var value = new proto.api.v1alpha1.org.GetUserResponse.AgentProfileGroup;
      reader.readMessage(value,proto.api.v1alpha1.org.GetUserResponse.AgentProfileGroup.deserializeBinaryFromReader);
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
proto.api.v1alpha1.org.GetUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.api.v1alpha1.org.GetUserResponse.HuntGroup.serializeBinaryToWriter
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
      proto.api.v1alpha1.org.GetUserResponse.AgentProfileGroup.serializeBinaryToWriter
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
proto.api.v1alpha1.org.GetUserResponse.HuntGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetUserResponse.HuntGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetUserResponse.HuntGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserResponse.HuntGroup.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetUserResponse.HuntGroup}
 */
proto.api.v1alpha1.org.GetUserResponse.HuntGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetUserResponse.HuntGroup;
  return proto.api.v1alpha1.org.GetUserResponse.HuntGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetUserResponse.HuntGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetUserResponse.HuntGroup}
 */
proto.api.v1alpha1.org.GetUserResponse.HuntGroup.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetUserResponse.HuntGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetUserResponse.HuntGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetUserResponse.HuntGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserResponse.HuntGroup.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetUserResponse.HuntGroup.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.GetUserResponse.HuntGroup} returns this
 */
proto.api.v1alpha1.org.GetUserResponse.HuntGroup.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string hunt_group_name = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.GetUserResponse.HuntGroup.prototype.getHuntGroupName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserResponse.HuntGroup} returns this
 */
proto.api.v1alpha1.org.GetUserResponse.HuntGroup.prototype.setHuntGroupName = function(value) {
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
proto.api.v1alpha1.org.GetUserResponse.AgentProfileGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetUserResponse.AgentProfileGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetUserResponse.AgentProfileGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserResponse.AgentProfileGroup.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetUserResponse.AgentProfileGroup}
 */
proto.api.v1alpha1.org.GetUserResponse.AgentProfileGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetUserResponse.AgentProfileGroup;
  return proto.api.v1alpha1.org.GetUserResponse.AgentProfileGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetUserResponse.AgentProfileGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetUserResponse.AgentProfileGroup}
 */
proto.api.v1alpha1.org.GetUserResponse.AgentProfileGroup.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetUserResponse.AgentProfileGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetUserResponse.AgentProfileGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetUserResponse.AgentProfileGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserResponse.AgentProfileGroup.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetUserResponse.AgentProfileGroup.prototype.getAgentProfileGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserResponse.AgentProfileGroup} returns this
 */
proto.api.v1alpha1.org.GetUserResponse.AgentProfileGroup.prototype.setAgentProfileGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string agent_profile_group_name = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.GetUserResponse.AgentProfileGroup.prototype.getAgentProfileGroupName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserResponse.AgentProfileGroup} returns this
 */
proto.api.v1alpha1.org.GetUserResponse.AgentProfileGroup.prototype.setAgentProfileGroupName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool delegated = 3;
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.getDelegated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.setDelegated = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional api.commons.TimeZoneWrapper time_zone_override = 4;
 * @return {?proto.api.commons.TimeZoneWrapper}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.getTimeZoneOverride = function() {
  return /** @type{?proto.api.commons.TimeZoneWrapper} */ (
    jspb.Message.getWrapperField(this, api_commons_org_pb.TimeZoneWrapper, 4));
};


/**
 * @param {?proto.api.commons.TimeZoneWrapper|undefined} value
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
*/
proto.api.v1alpha1.org.GetUserResponse.prototype.setTimeZoneOverride = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.clearTimeZoneOverride = function() {
  return this.setTimeZoneOverride(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.hasTimeZoneOverride = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional HuntGroup hunt_group = 5;
 * @return {?proto.api.v1alpha1.org.GetUserResponse.HuntGroup}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.getHuntGroup = function() {
  return /** @type{?proto.api.v1alpha1.org.GetUserResponse.HuntGroup} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.org.GetUserResponse.HuntGroup, 5));
};


/**
 * @param {?proto.api.v1alpha1.org.GetUserResponse.HuntGroup|undefined} value
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
*/
proto.api.v1alpha1.org.GetUserResponse.prototype.setHuntGroup = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.clearHuntGroup = function() {
  return this.setHuntGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.hasHuntGroup = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated api.commons.org.Label labels = 6;
 * @return {!Array<!proto.api.commons.org.Label>}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.getLabelsList = function() {
  return /** @type{!Array<!proto.api.commons.org.Label>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_labels_pb.Label, 6));
};


/**
 * @param {!Array<!proto.api.commons.org.Label>} value
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
*/
proto.api.v1alpha1.org.GetUserResponse.prototype.setLabelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.api.commons.org.Label=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.Label}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.addLabels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.api.commons.org.Label, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.clearLabelsList = function() {
  return this.setLabelsList([]);
};


/**
 * repeated api.commons.org.Skill skills = 7;
 * @return {!Array<!proto.api.commons.org.Skill>}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.getSkillsList = function() {
  return /** @type{!Array<!proto.api.commons.org.Skill>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_user_pb.Skill, 7));
};


/**
 * @param {!Array<!proto.api.commons.org.Skill>} value
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
*/
proto.api.v1alpha1.org.GetUserResponse.prototype.setSkillsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.api.commons.org.Skill=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.Skill}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.addSkills = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.api.commons.org.Skill, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.clearSkillsList = function() {
  return this.setSkillsList([]);
};


/**
 * repeated api.commons.org.PermissionGroup permission_groups = 8;
 * @return {!Array<!proto.api.commons.org.PermissionGroup>}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.getPermissionGroupsList = function() {
  return /** @type{!Array<!proto.api.commons.org.PermissionGroup>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_permissions_pb.PermissionGroup, 8));
};


/**
 * @param {!Array<!proto.api.commons.org.PermissionGroup>} value
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
*/
proto.api.v1alpha1.org.GetUserResponse.prototype.setPermissionGroupsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.api.commons.org.PermissionGroup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.PermissionGroup}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.addPermissionGroups = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.api.commons.org.PermissionGroup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.clearPermissionGroupsList = function() {
  return this.setPermissionGroupsList([]);
};


/**
 * optional api.commons.org.P3PermissionGroup p3_permission_group = 9;
 * @return {?proto.api.commons.org.P3PermissionGroup}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.getP3PermissionGroup = function() {
  return /** @type{?proto.api.commons.org.P3PermissionGroup} */ (
    jspb.Message.getWrapperField(this, api_commons_org_permissions_pb.P3PermissionGroup, 9));
};


/**
 * @param {?proto.api.commons.org.P3PermissionGroup|undefined} value
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
*/
proto.api.v1alpha1.org.GetUserResponse.prototype.setP3PermissionGroup = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.clearP3PermissionGroup = function() {
  return this.setP3PermissionGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.hasP3PermissionGroup = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional AgentProfileGroup agent_profile_group = 10;
 * @return {?proto.api.v1alpha1.org.GetUserResponse.AgentProfileGroup}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.getAgentProfileGroup = function() {
  return /** @type{?proto.api.v1alpha1.org.GetUserResponse.AgentProfileGroup} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.org.GetUserResponse.AgentProfileGroup, 10));
};


/**
 * @param {?proto.api.v1alpha1.org.GetUserResponse.AgentProfileGroup|undefined} value
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
*/
proto.api.v1alpha1.org.GetUserResponse.prototype.setAgentProfileGroup = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.clearAgentProfileGroup = function() {
  return this.setAgentProfileGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.hasAgentProfileGroup = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string org_name = 11;
 * @return {string}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.getOrgName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.setOrgName = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string first_name = 12;
 * @return {string}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string username = 13;
 * @return {string}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string last_name = 14;
 * @return {string}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional bool login_disabled = 15;
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.getLoginDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.setLoginDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * optional string partner_agent_id = 16;
 * @return {string}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.getPartnerAgentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.setPartnerAgentId = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string user_caller_id = 17;
 * @return {string}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.getUserCallerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.setUserCallerId = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * repeated string linkback_numbers = 18;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.getLinkbackNumbersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 18));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.setLinkbackNumbersList = function(value) {
  return jspb.Message.setField(this, 18, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.addLinkbackNumbers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 18, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.clearLinkbackNumbersList = function() {
  return this.setLinkbackNumbersList([]);
};


/**
 * repeated string caller_ids = 19;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.getCallerIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 19));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.setCallerIdsList = function(value) {
  return jspb.Message.setField(this, 19, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.addCallerIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 19, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.clearCallerIdsList = function() {
  return this.setCallerIdsList([]);
};


/**
 * optional api.commons.OperatorApplications default_app = 20;
 * @return {!proto.api.commons.OperatorApplications}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.getDefaultApp = function() {
  return /** @type {!proto.api.commons.OperatorApplications} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {!proto.api.commons.OperatorApplications} value
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.setDefaultApp = function(value) {
  return jspb.Message.setProto3EnumField(this, 20, value);
};


/**
 * optional int64 login_sid = 21;
 * @return {number}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.getLoginSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.setLoginSid = function(value) {
  return jspb.Message.setProto3IntField(this, 21, value);
};


/**
 * optional int64 agent_sid = 22;
 * @return {number}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.getAgentSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.setAgentSid = function(value) {
  return jspb.Message.setProto3IntField(this, 22, value);
};


/**
 * repeated api.commons.org.Trust trusts = 23;
 * @return {!Array<!proto.api.commons.org.Trust>}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.getTrustsList = function() {
  return /** @type{!Array<!proto.api.commons.org.Trust>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_trusts_pb.Trust, 23));
};


/**
 * @param {!Array<!proto.api.commons.org.Trust>} value
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
*/
proto.api.v1alpha1.org.GetUserResponse.prototype.setTrustsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 23, value);
};


/**
 * @param {!proto.api.commons.org.Trust=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.Trust}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.addTrusts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 23, opt_value, proto.api.commons.org.Trust, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.clearTrustsList = function() {
  return this.setTrustsList([]);
};


/**
 * optional string email = 24;
 * @return {string}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 24, value);
};


/**
 * optional string default_region = 25;
 * @return {string}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.getDefaultRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.setDefaultRegion = function(value) {
  return jspb.Message.setProto3StringField(this, 25, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 26;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 26));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
*/
proto.api.v1alpha1.org.GetUserResponse.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 26, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional google.protobuf.Timestamp last_updated = 27;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.getLastUpdated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 27));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
*/
proto.api.v1alpha1.org.GetUserResponse.prototype.setLastUpdated = function(value) {
  return jspb.Message.setWrapperField(this, 27, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.clearLastUpdated = function() {
  return this.setLastUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.hasLastUpdated = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional bool password_reset_required = 28;
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.getPasswordResetRequired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 28, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.setPasswordResetRequired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 28, value);
};


/**
 * optional bool account_owner = 29;
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.getAccountOwner = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 29, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.GetUserResponse} returns this
 */
proto.api.v1alpha1.org.GetUserResponse.prototype.setAccountOwner = function(value) {
  return jspb.Message.setProto3BooleanField(this, 29, value);
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
proto.api.v1alpha1.org.GetUserByOrgIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetUserByOrgIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetUserByOrgIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserByOrgIdRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetUserByOrgIdRequest}
 */
proto.api.v1alpha1.org.GetUserByOrgIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetUserByOrgIdRequest;
  return proto.api.v1alpha1.org.GetUserByOrgIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetUserByOrgIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetUserByOrgIdRequest}
 */
proto.api.v1alpha1.org.GetUserByOrgIdRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetUserByOrgIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetUserByOrgIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetUserByOrgIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserByOrgIdRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetUserByOrgIdRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserByOrgIdRequest} returns this
 */
proto.api.v1alpha1.org.GetUserByOrgIdRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.GetUserByOrgIdRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserByOrgIdRequest} returns this
 */
proto.api.v1alpha1.org.GetUserByOrgIdRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.repeatedFields_ = [6,7,8,21];



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
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetUserByOrgIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetUserByOrgIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orgId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    username: jspb.Message.getFieldWithDefault(msg, 13, ""),
    delegated: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    orgName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    huntGroup: (f = msg.getHuntGroup()) && proto.api.v1alpha1.org.GetUserByOrgIdResponse.HuntGroup.toObject(includeInstance, f),
    labelsList: jspb.Message.toObjectList(msg.getLabelsList(),
    api_commons_org_labels_pb.Label.toObject, includeInstance),
    skillsList: jspb.Message.toObjectList(msg.getSkillsList(),
    api_commons_org_user_pb.Skill.toObject, includeInstance),
    permissionGroupsList: jspb.Message.toObjectList(msg.getPermissionGroupsList(),
    api_commons_org_permissions_pb.PermissionGroup.toObject, includeInstance),
    p3PermissionGroup: (f = msg.getP3PermissionGroup()) && api_commons_org_permissions_pb.P3PermissionGroup.toObject(includeInstance, f),
    agentProfileGroup: (f = msg.getAgentProfileGroup()) && proto.api.v1alpha1.org.GetUserByOrgIdResponse.AgentProfileGroup.toObject(includeInstance, f),
    trustsList: jspb.Message.toObjectList(msg.getTrustsList(),
    api_commons_org_trusts_pb.Trust.toObject, includeInstance),
    accountOwner: jspb.Message.getBooleanFieldWithDefault(msg, 22, false)
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
 * @return {!proto.api.v1alpha1.org.GetUserByOrgIdResponse}
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetUserByOrgIdResponse;
  return proto.api.v1alpha1.org.GetUserByOrgIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetUserByOrgIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetUserByOrgIdResponse}
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.api.v1alpha1.org.GetUserByOrgIdResponse.HuntGroup;
      reader.readMessage(value,proto.api.v1alpha1.org.GetUserByOrgIdResponse.HuntGroup.deserializeBinaryFromReader);
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
      var value = new proto.api.v1alpha1.org.GetUserByOrgIdResponse.AgentProfileGroup;
      reader.readMessage(value,proto.api.v1alpha1.org.GetUserByOrgIdResponse.AgentProfileGroup.deserializeBinaryFromReader);
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
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetUserByOrgIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetUserByOrgIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.api.v1alpha1.org.GetUserByOrgIdResponse.HuntGroup.serializeBinaryToWriter
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
      proto.api.v1alpha1.org.GetUserByOrgIdResponse.AgentProfileGroup.serializeBinaryToWriter
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
proto.api.v1alpha1.org.GetUserByOrgIdResponse.HuntGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetUserByOrgIdResponse.HuntGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetUserByOrgIdResponse.HuntGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.HuntGroup.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetUserByOrgIdResponse.HuntGroup}
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.HuntGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetUserByOrgIdResponse.HuntGroup;
  return proto.api.v1alpha1.org.GetUserByOrgIdResponse.HuntGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetUserByOrgIdResponse.HuntGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetUserByOrgIdResponse.HuntGroup}
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.HuntGroup.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetUserByOrgIdResponse.HuntGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetUserByOrgIdResponse.HuntGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetUserByOrgIdResponse.HuntGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.HuntGroup.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetUserByOrgIdResponse.HuntGroup.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.GetUserByOrgIdResponse.HuntGroup} returns this
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.HuntGroup.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string hunt_group_name = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.HuntGroup.prototype.getHuntGroupName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserByOrgIdResponse.HuntGroup} returns this
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.HuntGroup.prototype.setHuntGroupName = function(value) {
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
proto.api.v1alpha1.org.GetUserByOrgIdResponse.AgentProfileGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetUserByOrgIdResponse.AgentProfileGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetUserByOrgIdResponse.AgentProfileGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.AgentProfileGroup.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetUserByOrgIdResponse.AgentProfileGroup}
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.AgentProfileGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetUserByOrgIdResponse.AgentProfileGroup;
  return proto.api.v1alpha1.org.GetUserByOrgIdResponse.AgentProfileGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetUserByOrgIdResponse.AgentProfileGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetUserByOrgIdResponse.AgentProfileGroup}
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.AgentProfileGroup.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetUserByOrgIdResponse.AgentProfileGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetUserByOrgIdResponse.AgentProfileGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetUserByOrgIdResponse.AgentProfileGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.AgentProfileGroup.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetUserByOrgIdResponse.AgentProfileGroup.prototype.getAgentProfileGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserByOrgIdResponse.AgentProfileGroup} returns this
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.AgentProfileGroup.prototype.setAgentProfileGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string agent_profile_group_name = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.AgentProfileGroup.prototype.getAgentProfileGroupName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserByOrgIdResponse.AgentProfileGroup} returns this
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.AgentProfileGroup.prototype.setAgentProfileGroupName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserByOrgIdResponse} returns this
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserByOrgIdResponse} returns this
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string username = 13;
 * @return {string}
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserByOrgIdResponse} returns this
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional bool delegated = 3;
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.getDelegated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.GetUserByOrgIdResponse} returns this
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.setDelegated = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string org_name = 4;
 * @return {string}
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.getOrgName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserByOrgIdResponse} returns this
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.setOrgName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional HuntGroup hunt_group = 5;
 * @return {?proto.api.v1alpha1.org.GetUserByOrgIdResponse.HuntGroup}
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.getHuntGroup = function() {
  return /** @type{?proto.api.v1alpha1.org.GetUserByOrgIdResponse.HuntGroup} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.org.GetUserByOrgIdResponse.HuntGroup, 5));
};


/**
 * @param {?proto.api.v1alpha1.org.GetUserByOrgIdResponse.HuntGroup|undefined} value
 * @return {!proto.api.v1alpha1.org.GetUserByOrgIdResponse} returns this
*/
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.setHuntGroup = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetUserByOrgIdResponse} returns this
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.clearHuntGroup = function() {
  return this.setHuntGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.hasHuntGroup = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated api.commons.org.Label labels = 6;
 * @return {!Array<!proto.api.commons.org.Label>}
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.getLabelsList = function() {
  return /** @type{!Array<!proto.api.commons.org.Label>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_labels_pb.Label, 6));
};


/**
 * @param {!Array<!proto.api.commons.org.Label>} value
 * @return {!proto.api.v1alpha1.org.GetUserByOrgIdResponse} returns this
*/
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.setLabelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.api.commons.org.Label=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.Label}
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.addLabels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.api.commons.org.Label, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.GetUserByOrgIdResponse} returns this
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.clearLabelsList = function() {
  return this.setLabelsList([]);
};


/**
 * repeated api.commons.org.Skill skills = 7;
 * @return {!Array<!proto.api.commons.org.Skill>}
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.getSkillsList = function() {
  return /** @type{!Array<!proto.api.commons.org.Skill>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_user_pb.Skill, 7));
};


/**
 * @param {!Array<!proto.api.commons.org.Skill>} value
 * @return {!proto.api.v1alpha1.org.GetUserByOrgIdResponse} returns this
*/
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.setSkillsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.api.commons.org.Skill=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.Skill}
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.addSkills = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.api.commons.org.Skill, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.GetUserByOrgIdResponse} returns this
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.clearSkillsList = function() {
  return this.setSkillsList([]);
};


/**
 * repeated api.commons.org.PermissionGroup permission_groups = 8;
 * @return {!Array<!proto.api.commons.org.PermissionGroup>}
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.getPermissionGroupsList = function() {
  return /** @type{!Array<!proto.api.commons.org.PermissionGroup>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_permissions_pb.PermissionGroup, 8));
};


/**
 * @param {!Array<!proto.api.commons.org.PermissionGroup>} value
 * @return {!proto.api.v1alpha1.org.GetUserByOrgIdResponse} returns this
*/
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.setPermissionGroupsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.api.commons.org.PermissionGroup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.PermissionGroup}
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.addPermissionGroups = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.api.commons.org.PermissionGroup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.GetUserByOrgIdResponse} returns this
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.clearPermissionGroupsList = function() {
  return this.setPermissionGroupsList([]);
};


/**
 * optional api.commons.org.P3PermissionGroup p3_permission_group = 9;
 * @return {?proto.api.commons.org.P3PermissionGroup}
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.getP3PermissionGroup = function() {
  return /** @type{?proto.api.commons.org.P3PermissionGroup} */ (
    jspb.Message.getWrapperField(this, api_commons_org_permissions_pb.P3PermissionGroup, 9));
};


/**
 * @param {?proto.api.commons.org.P3PermissionGroup|undefined} value
 * @return {!proto.api.v1alpha1.org.GetUserByOrgIdResponse} returns this
*/
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.setP3PermissionGroup = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetUserByOrgIdResponse} returns this
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.clearP3PermissionGroup = function() {
  return this.setP3PermissionGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.hasP3PermissionGroup = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional AgentProfileGroup agent_profile_group = 10;
 * @return {?proto.api.v1alpha1.org.GetUserByOrgIdResponse.AgentProfileGroup}
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.getAgentProfileGroup = function() {
  return /** @type{?proto.api.v1alpha1.org.GetUserByOrgIdResponse.AgentProfileGroup} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.org.GetUserByOrgIdResponse.AgentProfileGroup, 10));
};


/**
 * @param {?proto.api.v1alpha1.org.GetUserByOrgIdResponse.AgentProfileGroup|undefined} value
 * @return {!proto.api.v1alpha1.org.GetUserByOrgIdResponse} returns this
*/
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.setAgentProfileGroup = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetUserByOrgIdResponse} returns this
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.clearAgentProfileGroup = function() {
  return this.setAgentProfileGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.hasAgentProfileGroup = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * repeated api.commons.org.Trust trusts = 21;
 * @return {!Array<!proto.api.commons.org.Trust>}
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.getTrustsList = function() {
  return /** @type{!Array<!proto.api.commons.org.Trust>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_trusts_pb.Trust, 21));
};


/**
 * @param {!Array<!proto.api.commons.org.Trust>} value
 * @return {!proto.api.v1alpha1.org.GetUserByOrgIdResponse} returns this
*/
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.setTrustsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 21, value);
};


/**
 * @param {!proto.api.commons.org.Trust=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.Trust}
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.addTrusts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 21, opt_value, proto.api.commons.org.Trust, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.GetUserByOrgIdResponse} returns this
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.clearTrustsList = function() {
  return this.setTrustsList([]);
};


/**
 * optional bool account_owner = 22;
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.getAccountOwner = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 22, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.GetUserByOrgIdResponse} returns this
 */
proto.api.v1alpha1.org.GetUserByOrgIdResponse.prototype.setAccountOwner = function(value) {
  return jspb.Message.setProto3BooleanField(this, 22, value);
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
proto.api.v1alpha1.org.ListAgentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.ListAgentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.ListAgentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListAgentsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.ListAgentsRequest}
 */
proto.api.v1alpha1.org.ListAgentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.ListAgentsRequest;
  return proto.api.v1alpha1.org.ListAgentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.ListAgentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.ListAgentsRequest}
 */
proto.api.v1alpha1.org.ListAgentsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.ListAgentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.ListAgentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.ListAgentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListAgentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.ListAgentsResponse.repeatedFields_ = [1];



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
proto.api.v1alpha1.org.ListAgentsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.ListAgentsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.ListAgentsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListAgentsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    agentsList: jspb.Message.toObjectList(msg.getAgentsList(),
    proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse}
 */
proto.api.v1alpha1.org.ListAgentsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.ListAgentsResponse;
  return proto.api.v1alpha1.org.ListAgentsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.ListAgentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse}
 */
proto.api.v1alpha1.org.ListAgentsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails;
      reader.readMessage(value,proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.deserializeBinaryFromReader);
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
proto.api.v1alpha1.org.ListAgentsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.ListAgentsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.ListAgentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListAgentsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.repeatedFields_ = [6,11,12];



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
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orgId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    firstName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    username: jspb.Message.getFieldWithDefault(msg, 5, ""),
    skillsList: jspb.Message.toObjectList(msg.getSkillsList(),
    api_commons_org_user_pb.Skill.toObject, includeInstance),
    loginDisabled: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    huntGroup: (f = msg.getHuntGroup()) && proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.HuntGroup.toObject(includeInstance, f),
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
    agentProfileGroup: (f = msg.getAgentProfileGroup()) && proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.AgentProfileGroup.toObject(includeInstance, f),
    agent: jspb.Message.getBooleanFieldWithDefault(msg, 20, false),
    timeZoneOverride: (f = msg.getTimeZoneOverride()) && api_commons_org_pb.TimeZoneWrapper.toObject(includeInstance, f),
    email: jspb.Message.getFieldWithDefault(msg, 22, "")
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
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails}
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails;
  return proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails}
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.HuntGroup;
      reader.readMessage(value,proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.HuntGroup.deserializeBinaryFromReader);
      msg.setHuntGroup(value);
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
      var value = new proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.AgentProfileGroup;
      reader.readMessage(value,proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.AgentProfileGroup.deserializeBinaryFromReader);
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
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.serializeBinaryToWriter = function(message, writer) {
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
      proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.HuntGroup.serializeBinaryToWriter
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
      proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.AgentProfileGroup.serializeBinaryToWriter
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
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.HuntGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.HuntGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.HuntGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.HuntGroup.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.HuntGroup}
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.HuntGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.HuntGroup;
  return proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.HuntGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.HuntGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.HuntGroup}
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.HuntGroup.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.HuntGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.HuntGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.HuntGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.HuntGroup.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.HuntGroup.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.HuntGroup} returns this
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.HuntGroup.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string hunt_group_name = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.HuntGroup.prototype.getHuntGroupName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.HuntGroup} returns this
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.HuntGroup.prototype.setHuntGroupName = function(value) {
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
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.AgentProfileGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.AgentProfileGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.AgentProfileGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.AgentProfileGroup.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.AgentProfileGroup}
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.AgentProfileGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.AgentProfileGroup;
  return proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.AgentProfileGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.AgentProfileGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.AgentProfileGroup}
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.AgentProfileGroup.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.AgentProfileGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.AgentProfileGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.AgentProfileGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.AgentProfileGroup.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.AgentProfileGroup.prototype.getAgentProfileGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.AgentProfileGroup} returns this
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.AgentProfileGroup.prototype.setAgentProfileGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string agent_profile_group_name = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.AgentProfileGroup.prototype.getAgentProfileGroupName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.AgentProfileGroup} returns this
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.AgentProfileGroup.prototype.setAgentProfileGroupName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string first_name = 3;
 * @return {string}
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string last_name = 4;
 * @return {string}
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string username = 5;
 * @return {string}
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated api.commons.org.Skill skills = 6;
 * @return {!Array<!proto.api.commons.org.Skill>}
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.getSkillsList = function() {
  return /** @type{!Array<!proto.api.commons.org.Skill>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_user_pb.Skill, 6));
};


/**
 * @param {!Array<!proto.api.commons.org.Skill>} value
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails} returns this
*/
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.setSkillsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.api.commons.org.Skill=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.Skill}
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.addSkills = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.api.commons.org.Skill, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.clearSkillsList = function() {
  return this.setSkillsList([]);
};


/**
 * optional bool login_disabled = 7;
 * @return {boolean}
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.getLoginDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.setLoginDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional HuntGroup hunt_group = 8;
 * @return {?proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.HuntGroup}
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.getHuntGroup = function() {
  return /** @type{?proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.HuntGroup} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.HuntGroup, 8));
};


/**
 * @param {?proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.HuntGroup|undefined} value
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails} returns this
*/
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.setHuntGroup = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.clearHuntGroup = function() {
  return this.setHuntGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.hasHuntGroup = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool delegated = 10;
 * @return {boolean}
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.getDelegated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.setDelegated = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * repeated string trust_ids = 11;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.getTrustIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.setTrustIdsList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.addTrustIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.clearTrustIdsList = function() {
  return this.setTrustIdsList([]);
};


/**
 * repeated api.commons.org.PermissionGroup permission_groups = 12;
 * @return {!Array<!proto.api.commons.org.PermissionGroup>}
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.getPermissionGroupsList = function() {
  return /** @type{!Array<!proto.api.commons.org.PermissionGroup>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_permissions_pb.PermissionGroup, 12));
};


/**
 * @param {!Array<!proto.api.commons.org.PermissionGroup>} value
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails} returns this
*/
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.setPermissionGroupsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.api.commons.org.PermissionGroup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.PermissionGroup}
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.addPermissionGroups = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.api.commons.org.PermissionGroup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.clearPermissionGroupsList = function() {
  return this.setPermissionGroupsList([]);
};


/**
 * optional int64 agent_sid = 13;
 * @return {number}
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.getAgentSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.setAgentSid = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional string name = 14;
 * @return {string}
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string partner_agent_id = 15;
 * @return {string}
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.getPartnerAgentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.setPartnerAgentId = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string user_caller_id = 16;
 * @return {string}
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.getUserCallerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.setUserCallerId = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional google.protobuf.Timestamp created = 17;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.getCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 17));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails} returns this
*/
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.setCreated = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.clearCreated = function() {
  return this.setCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.hasCreated = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional google.protobuf.Timestamp last_updated = 18;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.getLastUpdated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 18));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails} returns this
*/
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.setLastUpdated = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.clearLastUpdated = function() {
  return this.setLastUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.hasLastUpdated = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional AgentProfileGroup agent_profile_group = 19;
 * @return {?proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.AgentProfileGroup}
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.getAgentProfileGroup = function() {
  return /** @type{?proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.AgentProfileGroup} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.AgentProfileGroup, 19));
};


/**
 * @param {?proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.AgentProfileGroup|undefined} value
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails} returns this
*/
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.setAgentProfileGroup = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.clearAgentProfileGroup = function() {
  return this.setAgentProfileGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.hasAgentProfileGroup = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional bool agent = 20;
 * @return {boolean}
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.getAgent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 20, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.setAgent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 20, value);
};


/**
 * optional api.commons.TimeZoneWrapper time_zone_override = 21;
 * @return {?proto.api.commons.TimeZoneWrapper}
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.getTimeZoneOverride = function() {
  return /** @type{?proto.api.commons.TimeZoneWrapper} */ (
    jspb.Message.getWrapperField(this, api_commons_org_pb.TimeZoneWrapper, 21));
};


/**
 * @param {?proto.api.commons.TimeZoneWrapper|undefined} value
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails} returns this
*/
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.setTimeZoneOverride = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.clearTimeZoneOverride = function() {
  return this.setTimeZoneOverride(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.hasTimeZoneOverride = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional string email = 22;
 * @return {string}
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails} returns this
 */
proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * repeated AgentDetails agents = 1;
 * @return {!Array<!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails>}
 */
proto.api.v1alpha1.org.ListAgentsResponse.prototype.getAgentsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails>} value
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse} returns this
*/
proto.api.v1alpha1.org.ListAgentsResponse.prototype.setAgentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails}
 */
proto.api.v1alpha1.org.ListAgentsResponse.prototype.addAgents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.org.ListAgentsResponse.AgentDetails, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.ListAgentsResponse} returns this
 */
proto.api.v1alpha1.org.ListAgentsResponse.prototype.clearAgentsList = function() {
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
proto.api.v1alpha1.org.ListUsersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.ListUsersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.ListUsersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListUsersRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.ListUsersRequest}
 */
proto.api.v1alpha1.org.ListUsersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.ListUsersRequest;
  return proto.api.v1alpha1.org.ListUsersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.ListUsersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.ListUsersRequest}
 */
proto.api.v1alpha1.org.ListUsersRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.ListUsersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.ListUsersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.ListUsersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListUsersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.ListUsersResponse.repeatedFields_ = [1];



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
proto.api.v1alpha1.org.ListUsersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.ListUsersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.ListUsersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListUsersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    usersList: jspb.Message.toObjectList(msg.getUsersList(),
    proto.api.v1alpha1.org.ListUsersResponse.UserDetails.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.org.ListUsersResponse}
 */
proto.api.v1alpha1.org.ListUsersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.ListUsersResponse;
  return proto.api.v1alpha1.org.ListUsersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.ListUsersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.ListUsersResponse}
 */
proto.api.v1alpha1.org.ListUsersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.org.ListUsersResponse.UserDetails;
      reader.readMessage(value,proto.api.v1alpha1.org.ListUsersResponse.UserDetails.deserializeBinaryFromReader);
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
proto.api.v1alpha1.org.ListUsersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.ListUsersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.ListUsersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListUsersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.org.ListUsersResponse.UserDetails.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.ListUsersResponse.UserDetails.repeatedFields_ = [9,13];



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
proto.api.v1alpha1.org.ListUsersResponse.UserDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.ListUsersResponse.UserDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.ListUsersResponse.UserDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListUsersResponse.UserDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orgId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    firstName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    username: jspb.Message.getFieldWithDefault(msg, 5, ""),
    loginDisabled: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    permissionGroupIdsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    accountOwner: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    agent: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    trustIdsList: (f = jspb.Message.getRepeatedField(msg, 13)) == null ? undefined : f
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
 * @return {!proto.api.v1alpha1.org.ListUsersResponse.UserDetails}
 */
proto.api.v1alpha1.org.ListUsersResponse.UserDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.ListUsersResponse.UserDetails;
  return proto.api.v1alpha1.org.ListUsersResponse.UserDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.ListUsersResponse.UserDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.ListUsersResponse.UserDetails}
 */
proto.api.v1alpha1.org.ListUsersResponse.UserDetails.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.ListUsersResponse.UserDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.ListUsersResponse.UserDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.ListUsersResponse.UserDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListUsersResponse.UserDetails.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.ListUsersResponse.UserDetails.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.ListUsersResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersResponse.UserDetails.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.ListUsersResponse.UserDetails.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.ListUsersResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersResponse.UserDetails.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string first_name = 3;
 * @return {string}
 */
proto.api.v1alpha1.org.ListUsersResponse.UserDetails.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.ListUsersResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersResponse.UserDetails.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string last_name = 4;
 * @return {string}
 */
proto.api.v1alpha1.org.ListUsersResponse.UserDetails.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.ListUsersResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersResponse.UserDetails.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string username = 5;
 * @return {string}
 */
proto.api.v1alpha1.org.ListUsersResponse.UserDetails.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.ListUsersResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersResponse.UserDetails.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool login_disabled = 7;
 * @return {boolean}
 */
proto.api.v1alpha1.org.ListUsersResponse.UserDetails.prototype.getLoginDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.ListUsersResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersResponse.UserDetails.prototype.setLoginDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * repeated string permission_group_ids = 9;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.ListUsersResponse.UserDetails.prototype.getPermissionGroupIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.ListUsersResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersResponse.UserDetails.prototype.setPermissionGroupIdsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.ListUsersResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersResponse.UserDetails.prototype.addPermissionGroupIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.ListUsersResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersResponse.UserDetails.prototype.clearPermissionGroupIdsList = function() {
  return this.setPermissionGroupIdsList([]);
};


/**
 * optional bool account_owner = 11;
 * @return {boolean}
 */
proto.api.v1alpha1.org.ListUsersResponse.UserDetails.prototype.getAccountOwner = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.ListUsersResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersResponse.UserDetails.prototype.setAccountOwner = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional bool agent = 12;
 * @return {boolean}
 */
proto.api.v1alpha1.org.ListUsersResponse.UserDetails.prototype.getAgent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.ListUsersResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersResponse.UserDetails.prototype.setAgent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * repeated string trust_ids = 13;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.ListUsersResponse.UserDetails.prototype.getTrustIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 13));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.ListUsersResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersResponse.UserDetails.prototype.setTrustIdsList = function(value) {
  return jspb.Message.setField(this, 13, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.ListUsersResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersResponse.UserDetails.prototype.addTrustIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 13, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.ListUsersResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersResponse.UserDetails.prototype.clearTrustIdsList = function() {
  return this.setTrustIdsList([]);
};


/**
 * repeated UserDetails users = 1;
 * @return {!Array<!proto.api.v1alpha1.org.ListUsersResponse.UserDetails>}
 */
proto.api.v1alpha1.org.ListUsersResponse.prototype.getUsersList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.org.ListUsersResponse.UserDetails>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.org.ListUsersResponse.UserDetails, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.org.ListUsersResponse.UserDetails>} value
 * @return {!proto.api.v1alpha1.org.ListUsersResponse} returns this
*/
proto.api.v1alpha1.org.ListUsersResponse.prototype.setUsersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.org.ListUsersResponse.UserDetails=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.ListUsersResponse.UserDetails}
 */
proto.api.v1alpha1.org.ListUsersResponse.prototype.addUsers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.org.ListUsersResponse.UserDetails, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.ListUsersResponse} returns this
 */
proto.api.v1alpha1.org.ListUsersResponse.prototype.clearUsersList = function() {
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
proto.api.v1alpha1.org.ListUsersByOrgIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.ListUsersByOrgIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.ListUsersByOrgIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListUsersByOrgIdRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.ListUsersByOrgIdRequest}
 */
proto.api.v1alpha1.org.ListUsersByOrgIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.ListUsersByOrgIdRequest;
  return proto.api.v1alpha1.org.ListUsersByOrgIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.ListUsersByOrgIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.ListUsersByOrgIdRequest}
 */
proto.api.v1alpha1.org.ListUsersByOrgIdRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.ListUsersByOrgIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.ListUsersByOrgIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.ListUsersByOrgIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListUsersByOrgIdRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.ListUsersByOrgIdRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.ListUsersByOrgIdRequest} returns this
 */
proto.api.v1alpha1.org.ListUsersByOrgIdRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional api.commons.UserArchivedStateFilter archived_filter = 2;
 * @return {!proto.api.commons.UserArchivedStateFilter}
 */
proto.api.v1alpha1.org.ListUsersByOrgIdRequest.prototype.getArchivedFilter = function() {
  return /** @type {!proto.api.commons.UserArchivedStateFilter} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.UserArchivedStateFilter} value
 * @return {!proto.api.v1alpha1.org.ListUsersByOrgIdRequest} returns this
 */
proto.api.v1alpha1.org.ListUsersByOrgIdRequest.prototype.setArchivedFilter = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.repeatedFields_ = [1];



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
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.ListUsersByOrgIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.ListUsersByOrgIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    usersList: jspb.Message.toObjectList(msg.getUsersList(),
    proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.org.ListUsersByOrgIdResponse}
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.ListUsersByOrgIdResponse;
  return proto.api.v1alpha1.org.ListUsersByOrgIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.ListUsersByOrgIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.ListUsersByOrgIdResponse}
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails;
      reader.readMessage(value,proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.deserializeBinaryFromReader);
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
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.ListUsersByOrgIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.ListUsersByOrgIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.repeatedFields_ = [8,12];



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
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orgId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    orgName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    firstName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    username: jspb.Message.getFieldWithDefault(msg, 6, ""),
    loginDisabled: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    permissionGroupIdsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    accountOwner: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    agent: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    trustIdsList: (f = jspb.Message.getRepeatedField(msg, 12)) == null ? undefined : f
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
 * @return {!proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails}
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails;
  return proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails}
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string org_name = 3;
 * @return {string}
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.prototype.getOrgName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.prototype.setOrgName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string first_name = 4;
 * @return {string}
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string last_name = 5;
 * @return {string}
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string username = 6;
 * @return {string}
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool login_disabled = 7;
 * @return {boolean}
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.prototype.getLoginDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.prototype.setLoginDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * repeated string permission_group_ids = 8;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.prototype.getPermissionGroupIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.prototype.setPermissionGroupIdsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.prototype.addPermissionGroupIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.prototype.clearPermissionGroupIdsList = function() {
  return this.setPermissionGroupIdsList([]);
};


/**
 * optional bool account_owner = 10;
 * @return {boolean}
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.prototype.getAccountOwner = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.prototype.setAccountOwner = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool agent = 11;
 * @return {boolean}
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.prototype.getAgent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.prototype.setAgent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * repeated string trust_ids = 12;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.prototype.getTrustIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 12));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.prototype.setTrustIdsList = function(value) {
  return jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.prototype.addTrustIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails.prototype.clearTrustIdsList = function() {
  return this.setTrustIdsList([]);
};


/**
 * repeated UserDetails users = 1;
 * @return {!Array<!proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails>}
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.prototype.getUsersList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails>} value
 * @return {!proto.api.v1alpha1.org.ListUsersByOrgIdResponse} returns this
*/
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.prototype.setUsersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails}
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.prototype.addUsers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.ListUsersByOrgIdResponse} returns this
 */
proto.api.v1alpha1.org.ListUsersByOrgIdResponse.prototype.clearUsersList = function() {
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
proto.api.v1alpha1.org.ListUsersByRegionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.ListUsersByRegionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.ListUsersByRegionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListUsersByRegionRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.ListUsersByRegionRequest}
 */
proto.api.v1alpha1.org.ListUsersByRegionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.ListUsersByRegionRequest;
  return proto.api.v1alpha1.org.ListUsersByRegionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.ListUsersByRegionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.ListUsersByRegionRequest}
 */
proto.api.v1alpha1.org.ListUsersByRegionRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.ListUsersByRegionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.ListUsersByRegionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.ListUsersByRegionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListUsersByRegionRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.ListUsersByRegionRequest.prototype.getRegionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.ListUsersByRegionRequest} returns this
 */
proto.api.v1alpha1.org.ListUsersByRegionRequest.prototype.setRegionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool agent = 2;
 * @return {boolean}
 */
proto.api.v1alpha1.org.ListUsersByRegionRequest.prototype.getAgent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.ListUsersByRegionRequest} returns this
 */
proto.api.v1alpha1.org.ListUsersByRegionRequest.prototype.setAgent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional api.commons.UserArchivedStateFilter archived_filter = 3;
 * @return {!proto.api.commons.UserArchivedStateFilter}
 */
proto.api.v1alpha1.org.ListUsersByRegionRequest.prototype.getArchivedFilter = function() {
  return /** @type {!proto.api.commons.UserArchivedStateFilter} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.UserArchivedStateFilter} value
 * @return {!proto.api.v1alpha1.org.ListUsersByRegionRequest} returns this
 */
proto.api.v1alpha1.org.ListUsersByRegionRequest.prototype.setArchivedFilter = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.ListUsersByRegionResponse.repeatedFields_ = [1];



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
proto.api.v1alpha1.org.ListUsersByRegionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.ListUsersByRegionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.ListUsersByRegionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListUsersByRegionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    usersList: jspb.Message.toObjectList(msg.getUsersList(),
    proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.org.ListUsersByRegionResponse}
 */
proto.api.v1alpha1.org.ListUsersByRegionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.ListUsersByRegionResponse;
  return proto.api.v1alpha1.org.ListUsersByRegionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.ListUsersByRegionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.ListUsersByRegionResponse}
 */
proto.api.v1alpha1.org.ListUsersByRegionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails;
      reader.readMessage(value,proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.deserializeBinaryFromReader);
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
proto.api.v1alpha1.org.ListUsersByRegionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.ListUsersByRegionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.ListUsersByRegionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListUsersByRegionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.repeatedFields_ = [9,13];



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
proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orgId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    firstName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    username: jspb.Message.getFieldWithDefault(msg, 5, ""),
    loginDisabled: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    permissionGroupIdsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    accountOwner: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    agent: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    trustIdsList: (f = jspb.Message.getRepeatedField(msg, 13)) == null ? undefined : f
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
 * @return {!proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails}
 */
proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails;
  return proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails}
 */
proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string first_name = 3;
 * @return {string}
 */
proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string last_name = 4;
 * @return {string}
 */
proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string username = 5;
 * @return {string}
 */
proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool login_disabled = 7;
 * @return {boolean}
 */
proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.prototype.getLoginDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.prototype.setLoginDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * repeated string permission_group_ids = 9;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.prototype.getPermissionGroupIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.prototype.setPermissionGroupIdsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.prototype.addPermissionGroupIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.prototype.clearPermissionGroupIdsList = function() {
  return this.setPermissionGroupIdsList([]);
};


/**
 * optional bool account_owner = 11;
 * @return {boolean}
 */
proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.prototype.getAccountOwner = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.prototype.setAccountOwner = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional bool agent = 12;
 * @return {boolean}
 */
proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.prototype.getAgent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.prototype.setAgent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * repeated string trust_ids = 13;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.prototype.getTrustIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 13));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.prototype.setTrustIdsList = function(value) {
  return jspb.Message.setField(this, 13, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.prototype.addTrustIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 13, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails} returns this
 */
proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails.prototype.clearTrustIdsList = function() {
  return this.setTrustIdsList([]);
};


/**
 * repeated UserDetails users = 1;
 * @return {!Array<!proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails>}
 */
proto.api.v1alpha1.org.ListUsersByRegionResponse.prototype.getUsersList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails>} value
 * @return {!proto.api.v1alpha1.org.ListUsersByRegionResponse} returns this
*/
proto.api.v1alpha1.org.ListUsersByRegionResponse.prototype.setUsersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails}
 */
proto.api.v1alpha1.org.ListUsersByRegionResponse.prototype.addUsers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.org.ListUsersByRegionResponse.UserDetails, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.ListUsersByRegionResponse} returns this
 */
proto.api.v1alpha1.org.ListUsersByRegionResponse.prototype.clearUsersList = function() {
  return this.setUsersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.UpdateMyUserRequest.repeatedFields_ = [1,2,10];



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
proto.api.v1alpha1.org.UpdateMyUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateMyUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateMyUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateMyUserRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateMyUserRequest}
 */
proto.api.v1alpha1.org.UpdateMyUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateMyUserRequest;
  return proto.api.v1alpha1.org.UpdateMyUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateMyUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateMyUserRequest}
 */
proto.api.v1alpha1.org.UpdateMyUserRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateMyUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateMyUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateMyUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateMyUserRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.UpdateMyUserRequest.prototype.getLinkbackNumbersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.UpdateMyUserRequest} returns this
 */
proto.api.v1alpha1.org.UpdateMyUserRequest.prototype.setLinkbackNumbersList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.UpdateMyUserRequest} returns this
 */
proto.api.v1alpha1.org.UpdateMyUserRequest.prototype.addLinkbackNumbers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.UpdateMyUserRequest} returns this
 */
proto.api.v1alpha1.org.UpdateMyUserRequest.prototype.clearLinkbackNumbersList = function() {
  return this.setLinkbackNumbersList([]);
};


/**
 * repeated string caller_ids = 2;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.UpdateMyUserRequest.prototype.getCallerIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.UpdateMyUserRequest} returns this
 */
proto.api.v1alpha1.org.UpdateMyUserRequest.prototype.setCallerIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.UpdateMyUserRequest} returns this
 */
proto.api.v1alpha1.org.UpdateMyUserRequest.prototype.addCallerIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.UpdateMyUserRequest} returns this
 */
proto.api.v1alpha1.org.UpdateMyUserRequest.prototype.clearCallerIdsList = function() {
  return this.setCallerIdsList([]);
};


/**
 * optional api.commons.TimeZoneWrapper time_zone_override = 3;
 * @return {?proto.api.commons.TimeZoneWrapper}
 */
proto.api.v1alpha1.org.UpdateMyUserRequest.prototype.getTimeZoneOverride = function() {
  return /** @type{?proto.api.commons.TimeZoneWrapper} */ (
    jspb.Message.getWrapperField(this, api_commons_org_pb.TimeZoneWrapper, 3));
};


/**
 * @param {?proto.api.commons.TimeZoneWrapper|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateMyUserRequest} returns this
*/
proto.api.v1alpha1.org.UpdateMyUserRequest.prototype.setTimeZoneOverride = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateMyUserRequest} returns this
 */
proto.api.v1alpha1.org.UpdateMyUserRequest.prototype.clearTimeZoneOverride = function() {
  return this.setTimeZoneOverride(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateMyUserRequest.prototype.hasTimeZoneOverride = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional api.commons.OperatorApplications default_app = 4;
 * @return {!proto.api.commons.OperatorApplications}
 */
proto.api.v1alpha1.org.UpdateMyUserRequest.prototype.getDefaultApp = function() {
  return /** @type {!proto.api.commons.OperatorApplications} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.OperatorApplications} value
 * @return {!proto.api.v1alpha1.org.UpdateMyUserRequest} returns this
 */
proto.api.v1alpha1.org.UpdateMyUserRequest.prototype.setDefaultApp = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * repeated string field_mask = 10;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.UpdateMyUserRequest.prototype.getFieldMaskList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.UpdateMyUserRequest} returns this
 */
proto.api.v1alpha1.org.UpdateMyUserRequest.prototype.setFieldMaskList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.UpdateMyUserRequest} returns this
 */
proto.api.v1alpha1.org.UpdateMyUserRequest.prototype.addFieldMask = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.UpdateMyUserRequest} returns this
 */
proto.api.v1alpha1.org.UpdateMyUserRequest.prototype.clearFieldMaskList = function() {
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
proto.api.v1alpha1.org.UpdateMyUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateMyUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateMyUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateMyUserResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateMyUserResponse}
 */
proto.api.v1alpha1.org.UpdateMyUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateMyUserResponse;
  return proto.api.v1alpha1.org.UpdateMyUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateMyUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateMyUserResponse}
 */
proto.api.v1alpha1.org.UpdateMyUserResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateMyUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateMyUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateMyUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateMyUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.UpdateUserRequest.repeatedFields_ = [6,7,14,20];



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
proto.api.v1alpha1.org.UpdateUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateUserRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateUserRequest}
 */
proto.api.v1alpha1.org.UpdateUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateUserRequest;
  return proto.api.v1alpha1.org.UpdateUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateUserRequest}
 */
proto.api.v1alpha1.org.UpdateUserRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateUserRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.UpdateUserRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string first_name = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string last_name = 3;
 * @return {string}
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string partner_agent_id = 4;
 * @return {string}
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.getPartnerAgentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.setPartnerAgentId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional api.commons.TimeZoneWrapper time_zone_override = 5;
 * @return {?proto.api.commons.TimeZoneWrapper}
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.getTimeZoneOverride = function() {
  return /** @type{?proto.api.commons.TimeZoneWrapper} */ (
    jspb.Message.getWrapperField(this, api_commons_org_pb.TimeZoneWrapper, 5));
};


/**
 * @param {?proto.api.commons.TimeZoneWrapper|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateUserRequest} returns this
*/
proto.api.v1alpha1.org.UpdateUserRequest.prototype.setTimeZoneOverride = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.clearTimeZoneOverride = function() {
  return this.setTimeZoneOverride(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.hasTimeZoneOverride = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated string linkback_numbers = 6;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.getLinkbackNumbersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.setLinkbackNumbersList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.addLinkbackNumbers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.clearLinkbackNumbersList = function() {
  return this.setLinkbackNumbersList([]);
};


/**
 * repeated string caller_ids = 7;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.getCallerIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.setCallerIdsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.addCallerIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.clearCallerIdsList = function() {
  return this.setCallerIdsList([]);
};


/**
 * optional api.commons.OperatorApplications default_app = 8;
 * @return {!proto.api.commons.OperatorApplications}
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.getDefaultApp = function() {
  return /** @type {!proto.api.commons.OperatorApplications} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.api.commons.OperatorApplications} value
 * @return {!proto.api.v1alpha1.org.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.setDefaultApp = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional bool password_reset_required = 9;
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.getPasswordResetRequired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.setPasswordResetRequired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional string agent_profile_group_id = 10;
 * @return {string}
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.getAgentProfileGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.setAgentProfileGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string username = 11;
 * @return {string}
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string email = 12;
 * @return {string}
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string user_caller_id = 13;
 * @return {string}
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.getUserCallerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.setUserCallerId = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * repeated string label_ids = 14;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.getLabelIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 14));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.setLabelIdsList = function(value) {
  return jspb.Message.setField(this, 14, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.addLabelIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 14, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.clearLabelIdsList = function() {
  return this.setLabelIdsList([]);
};


/**
 * repeated string field_mask = 20;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.getFieldMaskList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 20));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.setFieldMaskList = function(value) {
  return jspb.Message.setField(this, 20, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.addFieldMask = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 20, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.UpdateUserRequest} returns this
 */
proto.api.v1alpha1.org.UpdateUserRequest.prototype.clearFieldMaskList = function() {
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
proto.api.v1alpha1.org.UpdateUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateUserResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateUserResponse}
 */
proto.api.v1alpha1.org.UpdateUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateUserResponse;
  return proto.api.v1alpha1.org.UpdateUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateUserResponse}
 */
proto.api.v1alpha1.org.UpdateUserResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.UpdateUserLabelsRequest.repeatedFields_ = [3];



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
proto.api.v1alpha1.org.UpdateUserLabelsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateUserLabelsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateUserLabelsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateUserLabelsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateUserLabelsRequest}
 */
proto.api.v1alpha1.org.UpdateUserLabelsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateUserLabelsRequest;
  return proto.api.v1alpha1.org.UpdateUserLabelsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateUserLabelsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateUserLabelsRequest}
 */
proto.api.v1alpha1.org.UpdateUserLabelsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateUserLabelsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateUserLabelsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateUserLabelsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateUserLabelsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.UpdateUserLabelsRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.UpdateUserLabelsRequest} returns this
 */
proto.api.v1alpha1.org.UpdateUserLabelsRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.UpdateUserLabelsRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.UpdateUserLabelsRequest} returns this
 */
proto.api.v1alpha1.org.UpdateUserLabelsRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string label_ids = 3;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.UpdateUserLabelsRequest.prototype.getLabelIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.UpdateUserLabelsRequest} returns this
 */
proto.api.v1alpha1.org.UpdateUserLabelsRequest.prototype.setLabelIdsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.UpdateUserLabelsRequest} returns this
 */
proto.api.v1alpha1.org.UpdateUserLabelsRequest.prototype.addLabelIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.UpdateUserLabelsRequest} returns this
 */
proto.api.v1alpha1.org.UpdateUserLabelsRequest.prototype.clearLabelIdsList = function() {
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
proto.api.v1alpha1.org.UpdateUserLabelsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateUserLabelsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateUserLabelsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateUserLabelsResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateUserLabelsResponse}
 */
proto.api.v1alpha1.org.UpdateUserLabelsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateUserLabelsResponse;
  return proto.api.v1alpha1.org.UpdateUserLabelsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateUserLabelsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateUserLabelsResponse}
 */
proto.api.v1alpha1.org.UpdateUserLabelsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateUserLabelsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateUserLabelsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateUserLabelsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateUserLabelsResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.UpdateUserCallerIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateUserCallerIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateUserCallerIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateUserCallerIdRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateUserCallerIdRequest}
 */
proto.api.v1alpha1.org.UpdateUserCallerIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateUserCallerIdRequest;
  return proto.api.v1alpha1.org.UpdateUserCallerIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateUserCallerIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateUserCallerIdRequest}
 */
proto.api.v1alpha1.org.UpdateUserCallerIdRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateUserCallerIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateUserCallerIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateUserCallerIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateUserCallerIdRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.UpdateUserCallerIdRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.UpdateUserCallerIdRequest} returns this
 */
proto.api.v1alpha1.org.UpdateUserCallerIdRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_caller_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.UpdateUserCallerIdRequest.prototype.getUserCallerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.UpdateUserCallerIdRequest} returns this
 */
proto.api.v1alpha1.org.UpdateUserCallerIdRequest.prototype.setUserCallerId = function(value) {
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
proto.api.v1alpha1.org.UpdateUserCallerIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateUserCallerIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateUserCallerIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateUserCallerIdResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateUserCallerIdResponse}
 */
proto.api.v1alpha1.org.UpdateUserCallerIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateUserCallerIdResponse;
  return proto.api.v1alpha1.org.UpdateUserCallerIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateUserCallerIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateUserCallerIdResponse}
 */
proto.api.v1alpha1.org.UpdateUserCallerIdResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateUserCallerIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateUserCallerIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateUserCallerIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateUserCallerIdResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.UpdateUserDisabledRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateUserDisabledRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateUserDisabledRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateUserDisabledRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateUserDisabledRequest}
 */
proto.api.v1alpha1.org.UpdateUserDisabledRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateUserDisabledRequest;
  return proto.api.v1alpha1.org.UpdateUserDisabledRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateUserDisabledRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateUserDisabledRequest}
 */
proto.api.v1alpha1.org.UpdateUserDisabledRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateUserDisabledRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateUserDisabledRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateUserDisabledRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateUserDisabledRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.UpdateUserDisabledRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.UpdateUserDisabledRequest} returns this
 */
proto.api.v1alpha1.org.UpdateUserDisabledRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool login_disabled = 2;
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateUserDisabledRequest.prototype.getLoginDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.UpdateUserDisabledRequest} returns this
 */
proto.api.v1alpha1.org.UpdateUserDisabledRequest.prototype.setLoginDisabled = function(value) {
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
proto.api.v1alpha1.org.UpdateUserDisabledResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateUserDisabledResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateUserDisabledResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateUserDisabledResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateUserDisabledResponse}
 */
proto.api.v1alpha1.org.UpdateUserDisabledResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateUserDisabledResponse;
  return proto.api.v1alpha1.org.UpdateUserDisabledResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateUserDisabledResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateUserDisabledResponse}
 */
proto.api.v1alpha1.org.UpdateUserDisabledResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateUserDisabledResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateUserDisabledResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateUserDisabledResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateUserDisabledResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdRequest}
 */
proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdRequest;
  return proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdRequest}
 */
proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdRequest} returns this
 */
proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdRequest} returns this
 */
proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool login_disabled = 3;
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdRequest.prototype.getLoginDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdRequest} returns this
 */
proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdRequest.prototype.setLoginDisabled = function(value) {
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
proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdResponse}
 */
proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdResponse;
  return proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdResponse}
 */
proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateUserDisabledByOrgIdResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetMyUserPasswordResetLinkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetMyUserPasswordResetLinkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetMyUserPasswordResetLinkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetMyUserPasswordResetLinkRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetMyUserPasswordResetLinkRequest}
 */
proto.api.v1alpha1.org.GetMyUserPasswordResetLinkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetMyUserPasswordResetLinkRequest;
  return proto.api.v1alpha1.org.GetMyUserPasswordResetLinkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetMyUserPasswordResetLinkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetMyUserPasswordResetLinkRequest}
 */
proto.api.v1alpha1.org.GetMyUserPasswordResetLinkRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetMyUserPasswordResetLinkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetMyUserPasswordResetLinkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetMyUserPasswordResetLinkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetMyUserPasswordResetLinkRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetMyUserPasswordResetLinkRequest.prototype.getTtl = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.GetMyUserPasswordResetLinkRequest} returns this
 */
proto.api.v1alpha1.org.GetMyUserPasswordResetLinkRequest.prototype.setTtl = function(value) {
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
proto.api.v1alpha1.org.GetMyUserPasswordResetLinkResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetMyUserPasswordResetLinkResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetMyUserPasswordResetLinkResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetMyUserPasswordResetLinkResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetMyUserPasswordResetLinkResponse}
 */
proto.api.v1alpha1.org.GetMyUserPasswordResetLinkResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetMyUserPasswordResetLinkResponse;
  return proto.api.v1alpha1.org.GetMyUserPasswordResetLinkResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetMyUserPasswordResetLinkResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetMyUserPasswordResetLinkResponse}
 */
proto.api.v1alpha1.org.GetMyUserPasswordResetLinkResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetMyUserPasswordResetLinkResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetMyUserPasswordResetLinkResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetMyUserPasswordResetLinkResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetMyUserPasswordResetLinkResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetMyUserPasswordResetLinkResponse.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetMyUserPasswordResetLinkResponse} returns this
 */
proto.api.v1alpha1.org.GetMyUserPasswordResetLinkResponse.prototype.setUrl = function(value) {
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
proto.api.v1alpha1.org.GetUserPasswordResetLinkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetUserPasswordResetLinkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetUserPasswordResetLinkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserPasswordResetLinkRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetUserPasswordResetLinkRequest}
 */
proto.api.v1alpha1.org.GetUserPasswordResetLinkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetUserPasswordResetLinkRequest;
  return proto.api.v1alpha1.org.GetUserPasswordResetLinkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetUserPasswordResetLinkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetUserPasswordResetLinkRequest}
 */
proto.api.v1alpha1.org.GetUserPasswordResetLinkRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetUserPasswordResetLinkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetUserPasswordResetLinkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetUserPasswordResetLinkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserPasswordResetLinkRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetUserPasswordResetLinkRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserPasswordResetLinkRequest} returns this
 */
proto.api.v1alpha1.org.GetUserPasswordResetLinkRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 ttl = 2;
 * @return {number}
 */
proto.api.v1alpha1.org.GetUserPasswordResetLinkRequest.prototype.getTtl = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.GetUserPasswordResetLinkRequest} returns this
 */
proto.api.v1alpha1.org.GetUserPasswordResetLinkRequest.prototype.setTtl = function(value) {
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
proto.api.v1alpha1.org.GetUserPasswordResetLinkResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetUserPasswordResetLinkResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetUserPasswordResetLinkResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserPasswordResetLinkResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetUserPasswordResetLinkResponse}
 */
proto.api.v1alpha1.org.GetUserPasswordResetLinkResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetUserPasswordResetLinkResponse;
  return proto.api.v1alpha1.org.GetUserPasswordResetLinkResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetUserPasswordResetLinkResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetUserPasswordResetLinkResponse}
 */
proto.api.v1alpha1.org.GetUserPasswordResetLinkResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetUserPasswordResetLinkResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetUserPasswordResetLinkResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetUserPasswordResetLinkResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserPasswordResetLinkResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetUserPasswordResetLinkResponse.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserPasswordResetLinkResponse} returns this
 */
proto.api.v1alpha1.org.GetUserPasswordResetLinkResponse.prototype.setUrl = function(value) {
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
proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdRequest}
 */
proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdRequest;
  return proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdRequest}
 */
proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdRequest} returns this
 */
proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdRequest} returns this
 */
proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 ttl = 3;
 * @return {number}
 */
proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdRequest.prototype.getTtl = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdRequest} returns this
 */
proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdRequest.prototype.setTtl = function(value) {
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
proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdResponse}
 */
proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdResponse;
  return proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdResponse}
 */
proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdResponse.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdResponse} returns this
 */
proto.api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdResponse.prototype.setUrl = function(value) {
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
proto.api.v1alpha1.org.GetUserLoginInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetUserLoginInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetUserLoginInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserLoginInfoRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetUserLoginInfoRequest}
 */
proto.api.v1alpha1.org.GetUserLoginInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetUserLoginInfoRequest;
  return proto.api.v1alpha1.org.GetUserLoginInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetUserLoginInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetUserLoginInfoRequest}
 */
proto.api.v1alpha1.org.GetUserLoginInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetUserLoginInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetUserLoginInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetUserLoginInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserLoginInfoRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetUserLoginInfoRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserLoginInfoRequest} returns this
 */
proto.api.v1alpha1.org.GetUserLoginInfoRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.GetUserLoginInfoRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserLoginInfoRequest} returns this
 */
proto.api.v1alpha1.org.GetUserLoginInfoRequest.prototype.setOrgId = function(value) {
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
proto.api.v1alpha1.org.GetUserLoginInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetUserLoginInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetUserLoginInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserLoginInfoResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetUserLoginInfoResponse}
 */
proto.api.v1alpha1.org.GetUserLoginInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetUserLoginInfoResponse;
  return proto.api.v1alpha1.org.GetUserLoginInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetUserLoginInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetUserLoginInfoResponse}
 */
proto.api.v1alpha1.org.GetUserLoginInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetUserLoginInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetUserLoginInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetUserLoginInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserLoginInfoResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetUserLoginInfoResponse.prototype.getBlocked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.GetUserLoginInfoResponse} returns this
 */
proto.api.v1alpha1.org.GetUserLoginInfoResponse.prototype.setBlocked = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string last_ip = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.GetUserLoginInfoResponse.prototype.getLastIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserLoginInfoResponse} returns this
 */
proto.api.v1alpha1.org.GetUserLoginInfoResponse.prototype.setLastIp = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp last_login = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.org.GetUserLoginInfoResponse.prototype.getLastLogin = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.org.GetUserLoginInfoResponse} returns this
*/
proto.api.v1alpha1.org.GetUserLoginInfoResponse.prototype.setLastLogin = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetUserLoginInfoResponse} returns this
 */
proto.api.v1alpha1.org.GetUserLoginInfoResponse.prototype.clearLastLogin = function() {
  return this.setLastLogin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetUserLoginInfoResponse.prototype.hasLastLogin = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp last_password_reset = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.org.GetUserLoginInfoResponse.prototype.getLastPasswordReset = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.org.GetUserLoginInfoResponse} returns this
*/
proto.api.v1alpha1.org.GetUserLoginInfoResponse.prototype.setLastPasswordReset = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetUserLoginInfoResponse} returns this
 */
proto.api.v1alpha1.org.GetUserLoginInfoResponse.prototype.clearLastPasswordReset = function() {
  return this.setLastPasswordReset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetUserLoginInfoResponse.prototype.hasLastPasswordReset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int64 logins_count = 5;
 * @return {number}
 */
proto.api.v1alpha1.org.GetUserLoginInfoResponse.prototype.getLoginsCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.GetUserLoginInfoResponse} returns this
 */
proto.api.v1alpha1.org.GetUserLoginInfoResponse.prototype.setLoginsCount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.org.GetUserLoginInfoResponse.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.org.GetUserLoginInfoResponse} returns this
*/
proto.api.v1alpha1.org.GetUserLoginInfoResponse.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetUserLoginInfoResponse} returns this
 */
proto.api.v1alpha1.org.GetUserLoginInfoResponse.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetUserLoginInfoResponse.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.org.GetUserLoginInfoResponse.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.org.GetUserLoginInfoResponse} returns this
*/
proto.api.v1alpha1.org.GetUserLoginInfoResponse.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetUserLoginInfoResponse} returns this
 */
proto.api.v1alpha1.org.GetUserLoginInfoResponse.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetUserLoginInfoResponse.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool has_blocked_ips = 8;
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetUserLoginInfoResponse.prototype.getHasBlockedIps = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.GetUserLoginInfoResponse} returns this
 */
proto.api.v1alpha1.org.GetUserLoginInfoResponse.prototype.setHasBlockedIps = function(value) {
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
proto.api.v1alpha1.org.GetUserEmailVerifiedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetUserEmailVerifiedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetUserEmailVerifiedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserEmailVerifiedRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetUserEmailVerifiedRequest}
 */
proto.api.v1alpha1.org.GetUserEmailVerifiedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetUserEmailVerifiedRequest;
  return proto.api.v1alpha1.org.GetUserEmailVerifiedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetUserEmailVerifiedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetUserEmailVerifiedRequest}
 */
proto.api.v1alpha1.org.GetUserEmailVerifiedRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetUserEmailVerifiedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetUserEmailVerifiedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetUserEmailVerifiedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserEmailVerifiedRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetUserEmailVerifiedRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserEmailVerifiedRequest} returns this
 */
proto.api.v1alpha1.org.GetUserEmailVerifiedRequest.prototype.setUserId = function(value) {
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
proto.api.v1alpha1.org.GetUserEmailVerifiedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetUserEmailVerifiedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetUserEmailVerifiedResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserEmailVerifiedResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetUserEmailVerifiedResponse}
 */
proto.api.v1alpha1.org.GetUserEmailVerifiedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetUserEmailVerifiedResponse;
  return proto.api.v1alpha1.org.GetUserEmailVerifiedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetUserEmailVerifiedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetUserEmailVerifiedResponse}
 */
proto.api.v1alpha1.org.GetUserEmailVerifiedResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetUserEmailVerifiedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetUserEmailVerifiedResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetUserEmailVerifiedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserEmailVerifiedResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetUserEmailVerifiedResponse.prototype.getEmailVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.GetUserEmailVerifiedResponse} returns this
 */
proto.api.v1alpha1.org.GetUserEmailVerifiedResponse.prototype.setEmailVerified = function(value) {
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
proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdRequest}
 */
proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdRequest;
  return proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdRequest}
 */
proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdRequest} returns this
 */
proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdRequest} returns this
 */
proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdRequest.prototype.setOrgId = function(value) {
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
proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdResponse}
 */
proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdResponse;
  return proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdResponse}
 */
proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdResponse.prototype.getEmailVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdResponse} returns this
 */
proto.api.v1alpha1.org.GetUserEmailVerifiedByOrgIdResponse.prototype.setEmailVerified = function(value) {
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
proto.api.v1alpha1.org.SendUserEmailVerificationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.SendUserEmailVerificationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.SendUserEmailVerificationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.SendUserEmailVerificationRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.SendUserEmailVerificationRequest}
 */
proto.api.v1alpha1.org.SendUserEmailVerificationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.SendUserEmailVerificationRequest;
  return proto.api.v1alpha1.org.SendUserEmailVerificationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.SendUserEmailVerificationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.SendUserEmailVerificationRequest}
 */
proto.api.v1alpha1.org.SendUserEmailVerificationRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.SendUserEmailVerificationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.SendUserEmailVerificationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.SendUserEmailVerificationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.SendUserEmailVerificationRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.SendUserEmailVerificationRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.SendUserEmailVerificationRequest} returns this
 */
proto.api.v1alpha1.org.SendUserEmailVerificationRequest.prototype.setUserId = function(value) {
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
proto.api.v1alpha1.org.SendUserEmailVerificationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.SendUserEmailVerificationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.SendUserEmailVerificationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.SendUserEmailVerificationResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.SendUserEmailVerificationResponse}
 */
proto.api.v1alpha1.org.SendUserEmailVerificationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.SendUserEmailVerificationResponse;
  return proto.api.v1alpha1.org.SendUserEmailVerificationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.SendUserEmailVerificationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.SendUserEmailVerificationResponse}
 */
proto.api.v1alpha1.org.SendUserEmailVerificationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.SendUserEmailVerificationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.SendUserEmailVerificationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.SendUserEmailVerificationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.SendUserEmailVerificationResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdRequest}
 */
proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdRequest;
  return proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdRequest}
 */
proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdRequest} returns this
 */
proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdRequest} returns this
 */
proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdRequest.prototype.setOrgId = function(value) {
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
proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdResponse}
 */
proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdResponse;
  return proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdResponse}
 */
proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.SendUserEmailVerificationByOrgIdResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetUserSessionDataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetUserSessionDataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetUserSessionDataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserSessionDataRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataRequest}
 */
proto.api.v1alpha1.org.GetUserSessionDataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetUserSessionDataRequest;
  return proto.api.v1alpha1.org.GetUserSessionDataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetUserSessionDataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataRequest}
 */
proto.api.v1alpha1.org.GetUserSessionDataRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetUserSessionDataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetUserSessionDataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetUserSessionDataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserSessionDataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.repeatedFields_ = [3,4,5];



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
proto.api.v1alpha1.org.GetUserSessionDataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetUserSessionDataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetUserSessionDataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: (f = msg.getUser()) && proto.api.v1alpha1.org.GetUserSessionDataResponse.User.toObject(includeInstance, f),
    orgName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    p3PermissionsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    permissionGroupsList: jspb.Message.toObjectList(msg.getPermissionGroupsList(),
    api_commons_org_permissions_pb.PermissionGroup.toObject, includeInstance),
    labelsList: jspb.Message.toObjectList(msg.getLabelsList(),
    api_commons_org_labels_pb.Label.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetUserSessionDataResponse;
  return proto.api.v1alpha1.org.GetUserSessionDataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetUserSessionDataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.org.GetUserSessionDataResponse.User;
      reader.readMessage(value,proto.api.v1alpha1.org.GetUserSessionDataResponse.User.deserializeBinaryFromReader);
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
proto.api.v1alpha1.org.GetUserSessionDataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetUserSessionDataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetUserSessionDataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.org.GetUserSessionDataResponse.User.serializeBinaryToWriter
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
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.repeatedFields_ = [15,16,26,27];



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
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetUserSessionDataResponse.User.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orgId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    username: jspb.Message.getFieldWithDefault(msg, 3, ""),
    p3PermissionGroupId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    partnerAgentId: jspb.Message.getFieldWithDefault(msg, 8, ""),
    regionSidMapMap: (f = msg.getRegionSidMapMap()) ? f.toObject(includeInstance, proto.api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids.toObject) : [],
    defaultRegion: jspb.Message.getFieldWithDefault(msg, 11, ""),
    apiKey: jspb.Message.getFieldWithDefault(msg, 12, ""),
    email: jspb.Message.getFieldWithDefault(msg, 13, ""),
    loginDisabled: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
    callerIdsList: (f = jspb.Message.getRepeatedField(msg, 15)) == null ? undefined : f,
    linkbackNumbersList: (f = jspb.Message.getRepeatedField(msg, 16)) == null ? undefined : f,
    authUserId: jspb.Message.getFieldWithDefault(msg, 17, ""),
    enableMfa: jspb.Message.getBooleanFieldWithDefault(msg, 18, false),
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
    accountOwner: jspb.Message.getBooleanFieldWithDefault(msg, 32, false)
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
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetUserSessionDataResponse.User;
  return proto.api.v1alpha1.org.GetUserSessionDataResponse.User.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.deserializeBinaryFromReader = function(msg, reader) {
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
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids.deserializeBinaryFromReader, "", new proto.api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids());
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
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableMfa(value);
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
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetUserSessionDataResponse.User.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.serializeBinaryToWriter = function(message, writer) {
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
    f.serializeBinary(10, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids.serializeBinaryToWriter);
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
  f = message.getEnableMfa();
  if (f) {
    writer.writeBool(
      18,
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
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids;
  return proto.api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids.prototype.getLoginSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids.prototype.setLoginSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 agent_sid = 2;
 * @return {number}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids.prototype.getAgentSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids.prototype.setAgentSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 client_sid = 3;
 * @return {number}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids.prototype.getClientSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids.prototype.setClientSid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string username = 3;
 * @return {string}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string p3_permission_group_id = 4;
 * @return {string}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.getP3PermissionGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.setP3PermissionGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string partner_agent_id = 8;
 * @return {string}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.getPartnerAgentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.setPartnerAgentId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * map<string, RegionSids> region_sid_map = 10;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids>}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.getRegionSidMapMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids>} */ (
      jspb.Message.getMapField(this, 10, opt_noLazyCreate,
      proto.api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.clearRegionSidMapMap = function() {
  this.getRegionSidMapMap().clear();
  return this;
};


/**
 * optional string default_region = 11;
 * @return {string}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.getDefaultRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.setDefaultRegion = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string api_key = 12;
 * @return {string}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.getApiKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.setApiKey = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string email = 13;
 * @return {string}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional bool login_disabled = 14;
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.getLoginDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.setLoginDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * repeated string caller_ids = 15;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.getCallerIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 15));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.setCallerIdsList = function(value) {
  return jspb.Message.setField(this, 15, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.addCallerIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 15, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.clearCallerIdsList = function() {
  return this.setCallerIdsList([]);
};


/**
 * repeated string linkback_numbers = 16;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.getLinkbackNumbersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 16));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.setLinkbackNumbersList = function(value) {
  return jspb.Message.setField(this, 16, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.addLinkbackNumbers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 16, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.clearLinkbackNumbersList = function() {
  return this.setLinkbackNumbersList([]);
};


/**
 * optional string auth_user_id = 17;
 * @return {string}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.getAuthUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.setAuthUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional bool enable_mfa = 18;
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.getEnableMfa = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.setEnableMfa = function(value) {
  return jspb.Message.setProto3BooleanField(this, 18, value);
};


/**
 * optional string first_name = 19;
 * @return {string}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional string last_name = 20;
 * @return {string}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional google.protobuf.Timestamp created = 21;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.getCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 21));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
*/
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.setCreated = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.clearCreated = function() {
  return this.setCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.hasCreated = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional google.protobuf.Timestamp last_updated = 22;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.getLastUpdated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 22));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
*/
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.setLastUpdated = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.clearLastUpdated = function() {
  return this.setLastUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.hasLastUpdated = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional bool password_reset_required = 23;
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.getPasswordResetRequired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 23, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.setPasswordResetRequired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 23, value);
};


/**
 * optional google.protobuf.StringValue connection_id = 24;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.getConnectionId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 24));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
*/
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.setConnectionId = function(value) {
  return jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.clearConnectionId = function() {
  return this.setConnectionId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.hasConnectionId = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional api.commons.TimeZoneWrapper time_zone_override = 25;
 * @return {?proto.api.commons.TimeZoneWrapper}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.getTimeZoneOverride = function() {
  return /** @type{?proto.api.commons.TimeZoneWrapper} */ (
    jspb.Message.getWrapperField(this, api_commons_org_pb.TimeZoneWrapper, 25));
};


/**
 * @param {?proto.api.commons.TimeZoneWrapper|undefined} value
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
*/
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.setTimeZoneOverride = function(value) {
  return jspb.Message.setWrapperField(this, 25, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.clearTimeZoneOverride = function() {
  return this.setTimeZoneOverride(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.hasTimeZoneOverride = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * repeated string permission_group_ids = 26;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.getPermissionGroupIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 26));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.setPermissionGroupIdsList = function(value) {
  return jspb.Message.setField(this, 26, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.addPermissionGroupIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 26, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.clearPermissionGroupIdsList = function() {
  return this.setPermissionGroupIdsList([]);
};


/**
 * repeated string trust_ids = 27;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.getTrustIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 27));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.setTrustIdsList = function(value) {
  return jspb.Message.setField(this, 27, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.addTrustIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 27, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.clearTrustIdsList = function() {
  return this.setTrustIdsList([]);
};


/**
 * optional api.commons.OperatorApplications default_application = 28;
 * @return {!proto.api.commons.OperatorApplications}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.getDefaultApplication = function() {
  return /** @type {!proto.api.commons.OperatorApplications} */ (jspb.Message.getFieldWithDefault(this, 28, 0));
};


/**
 * @param {!proto.api.commons.OperatorApplications} value
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.setDefaultApplication = function(value) {
  return jspb.Message.setProto3EnumField(this, 28, value);
};


/**
 * optional string user_caller_id = 29;
 * @return {string}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.getUserCallerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 29, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.setUserCallerId = function(value) {
  return jspb.Message.setProto3StringField(this, 29, value);
};


/**
 * optional string agent_profile_group_id = 30;
 * @return {string}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.getAgentProfileGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 30, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.setAgentProfileGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 30, value);
};


/**
 * optional bool agent = 31;
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.getAgent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 31, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.setAgent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 31, value);
};


/**
 * optional bool account_owner = 32;
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.getAccountOwner = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 32, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse.User} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.User.prototype.setAccountOwner = function(value) {
  return jspb.Message.setProto3BooleanField(this, 32, value);
};


/**
 * optional User user = 1;
 * @return {?proto.api.v1alpha1.org.GetUserSessionDataResponse.User}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.prototype.getUser = function() {
  return /** @type{?proto.api.v1alpha1.org.GetUserSessionDataResponse.User} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.org.GetUserSessionDataResponse.User, 1));
};


/**
 * @param {?proto.api.v1alpha1.org.GetUserSessionDataResponse.User|undefined} value
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse} returns this
*/
proto.api.v1alpha1.org.GetUserSessionDataResponse.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.prototype.hasUser = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string org_name = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.prototype.getOrgName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.prototype.setOrgName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated api.commons.Permission p3_permissions = 3;
 * @return {!Array<!proto.api.commons.Permission>}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.prototype.getP3PermissionsList = function() {
  return /** @type {!Array<!proto.api.commons.Permission>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<!proto.api.commons.Permission>} value
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.prototype.setP3PermissionsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!proto.api.commons.Permission} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.prototype.addP3Permissions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.prototype.clearP3PermissionsList = function() {
  return this.setP3PermissionsList([]);
};


/**
 * repeated api.commons.org.PermissionGroup permission_groups = 4;
 * @return {!Array<!proto.api.commons.org.PermissionGroup>}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.prototype.getPermissionGroupsList = function() {
  return /** @type{!Array<!proto.api.commons.org.PermissionGroup>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_permissions_pb.PermissionGroup, 4));
};


/**
 * @param {!Array<!proto.api.commons.org.PermissionGroup>} value
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse} returns this
*/
proto.api.v1alpha1.org.GetUserSessionDataResponse.prototype.setPermissionGroupsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.api.commons.org.PermissionGroup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.PermissionGroup}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.prototype.addPermissionGroups = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.api.commons.org.PermissionGroup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.prototype.clearPermissionGroupsList = function() {
  return this.setPermissionGroupsList([]);
};


/**
 * repeated api.commons.org.Label labels = 5;
 * @return {!Array<!proto.api.commons.org.Label>}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.prototype.getLabelsList = function() {
  return /** @type{!Array<!proto.api.commons.org.Label>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_labels_pb.Label, 5));
};


/**
 * @param {!Array<!proto.api.commons.org.Label>} value
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse} returns this
*/
proto.api.v1alpha1.org.GetUserSessionDataResponse.prototype.setLabelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.api.commons.org.Label=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.Label}
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.prototype.addLabels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.api.commons.org.Label, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.GetUserSessionDataResponse} returns this
 */
proto.api.v1alpha1.org.GetUserSessionDataResponse.prototype.clearLabelsList = function() {
  return this.setLabelsList([]);
};


goog.object.extend(exports, proto.api.v1alpha1.org);
