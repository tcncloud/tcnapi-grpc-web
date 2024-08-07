// source: services/omnichannel/oauth/v1alpha1/entities.proto
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

var api_commons_omnichannel_pb = require('../../../../api/commons/omnichannel_pb.js');
goog.object.extend(proto, api_commons_omnichannel_pb);
goog.exportSymbol('proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLRequest', null, global);
goog.exportSymbol('proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLResponse', null, global);
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
proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLRequest.displayName = 'proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLRequest';
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
proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLResponse.displayName = 'proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLResponse';
}



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
proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
authenticationType: jspb.Message.getFieldWithDefault(msg, 1, 0),
returningRedirectUri: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLRequest}
 */
proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLRequest;
  return proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLRequest}
 */
proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.commons.ConnectedInboxAuthenticationType} */ (reader.readEnum());
      msg.setAuthenticationType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReturningRedirectUri(value);
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
proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthenticationType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getReturningRedirectUri();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional api.commons.ConnectedInboxAuthenticationType authentication_type = 1;
 * @return {!proto.api.commons.ConnectedInboxAuthenticationType}
 */
proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLRequest.prototype.getAuthenticationType = function() {
  return /** @type {!proto.api.commons.ConnectedInboxAuthenticationType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.commons.ConnectedInboxAuthenticationType} value
 * @return {!proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLRequest} returns this
 */
proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLRequest.prototype.setAuthenticationType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string returning_redirect_uri = 2;
 * @return {string}
 */
proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLRequest.prototype.getReturningRedirectUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLRequest} returns this
 */
proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLRequest.prototype.setReturningRedirectUri = function(value) {
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
proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
oauthUrl: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLResponse}
 */
proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLResponse;
  return proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLResponse}
 */
proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOauthUrl(value);
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
proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOauthUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string oauth_url = 1;
 * @return {string}
 */
proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLResponse.prototype.getOauthUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLResponse} returns this
 */
proto.services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLResponse.prototype.setOauthUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.services.omnichannel.oauth.v1alpha1);
