// source: api/commons/audit/compliance_events.proto
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

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.api.commons.audit.ComplianceRndQueryEvent', null, global);
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
proto.api.commons.audit.ComplianceRndQueryEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.ComplianceRndQueryEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.ComplianceRndQueryEvent.displayName = 'proto.api.commons.audit.ComplianceRndQueryEvent';
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
proto.api.commons.audit.ComplianceRndQueryEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.ComplianceRndQueryEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.ComplianceRndQueryEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.ComplianceRndQueryEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
phoneNumber: jspb.Message.getFieldWithDefault(msg, 2, ""),
result: jspb.Message.getFieldWithDefault(msg, 3, ""),
dateLastContact: (f = msg.getDateLastContact()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.api.commons.audit.ComplianceRndQueryEvent}
 */
proto.api.commons.audit.ComplianceRndQueryEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.ComplianceRndQueryEvent;
  return proto.api.commons.audit.ComplianceRndQueryEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.ComplianceRndQueryEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.ComplianceRndQueryEvent}
 */
proto.api.commons.audit.ComplianceRndQueryEvent.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setPhoneNumber(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setResult(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateLastContact(value);
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
proto.api.commons.audit.ComplianceRndQueryEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.ComplianceRndQueryEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.ComplianceRndQueryEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.ComplianceRndQueryEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPhoneNumber();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getResult();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDateLastContact();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.commons.audit.ComplianceRndQueryEvent.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.ComplianceRndQueryEvent} returns this
 */
proto.api.commons.audit.ComplianceRndQueryEvent.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string phone_number = 2;
 * @return {string}
 */
proto.api.commons.audit.ComplianceRndQueryEvent.prototype.getPhoneNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.ComplianceRndQueryEvent} returns this
 */
proto.api.commons.audit.ComplianceRndQueryEvent.prototype.setPhoneNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string result = 3;
 * @return {string}
 */
proto.api.commons.audit.ComplianceRndQueryEvent.prototype.getResult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.ComplianceRndQueryEvent} returns this
 */
proto.api.commons.audit.ComplianceRndQueryEvent.prototype.setResult = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp date_last_contact = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.audit.ComplianceRndQueryEvent.prototype.getDateLastContact = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.audit.ComplianceRndQueryEvent} returns this
*/
proto.api.commons.audit.ComplianceRndQueryEvent.prototype.setDateLastContact = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.ComplianceRndQueryEvent} returns this
 */
proto.api.commons.audit.ComplianceRndQueryEvent.prototype.clearDateLastContact = function() {
  return this.setDateLastContact(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.ComplianceRndQueryEvent.prototype.hasDateLastContact = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.api.commons.audit);
