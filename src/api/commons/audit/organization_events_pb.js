// source: api/commons/audit/organization_events.proto
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
var localGlobalThis = require("../../../global.js");
var proto = localGlobalThis.proto;
var goog = jspb;
var global = localGlobalThis || 
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.api.commons.audit.UsersAccessTokensExpiringEvent', null, global);
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
proto.api.commons.audit.UsersAccessTokensExpiringEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.UsersAccessTokensExpiringEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.UsersAccessTokensExpiringEvent.displayName = 'proto.api.commons.audit.UsersAccessTokensExpiringEvent';
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
proto.api.commons.audit.UsersAccessTokensExpiringEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.UsersAccessTokensExpiringEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.UsersAccessTokensExpiringEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.UsersAccessTokensExpiringEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
report: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.api.commons.audit.UsersAccessTokensExpiringEvent}
 */
proto.api.commons.audit.UsersAccessTokensExpiringEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.UsersAccessTokensExpiringEvent;
  return proto.api.commons.audit.UsersAccessTokensExpiringEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.UsersAccessTokensExpiringEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.UsersAccessTokensExpiringEvent}
 */
proto.api.commons.audit.UsersAccessTokensExpiringEvent.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setReport(value);
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
proto.api.commons.audit.UsersAccessTokensExpiringEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.UsersAccessTokensExpiringEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.UsersAccessTokensExpiringEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.UsersAccessTokensExpiringEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReport();
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
proto.api.commons.audit.UsersAccessTokensExpiringEvent.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.UsersAccessTokensExpiringEvent} returns this
 */
proto.api.commons.audit.UsersAccessTokensExpiringEvent.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string report = 2;
 * @return {string}
 */
proto.api.commons.audit.UsersAccessTokensExpiringEvent.prototype.getReport = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.UsersAccessTokensExpiringEvent} returns this
 */
proto.api.commons.audit.UsersAccessTokensExpiringEvent.prototype.setReport = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.api.commons.audit);
