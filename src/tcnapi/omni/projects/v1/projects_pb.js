// source: tcnapi/omni/projects/v1/projects.proto
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

var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
goog.object.extend(proto, google_api_field_behavior_pb);
var google_api_resource_pb = require('../../../../google/api/resource_pb.js');
goog.object.extend(proto, google_api_resource_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.tcnapi.omni.projects.v1.Project', null, global);
goog.exportSymbol('proto.tcnapi.omni.projects.v1.Project.State', null, global);
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
proto.tcnapi.omni.projects.v1.Project = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tcnapi.omni.projects.v1.Project, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tcnapi.omni.projects.v1.Project.displayName = 'proto.tcnapi.omni.projects.v1.Project';
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
proto.tcnapi.omni.projects.v1.Project.prototype.toObject = function(opt_includeInstance) {
  return proto.tcnapi.omni.projects.v1.Project.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tcnapi.omni.projects.v1.Project} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcnapi.omni.projects.v1.Project.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
title: jspb.Message.getFieldWithDefault(msg, 2, ""),
description: jspb.Message.getFieldWithDefault(msg, 3, ""),
state: jspb.Message.getFieldWithDefault(msg, 4, 0),
createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.tcnapi.omni.projects.v1.Project}
 */
proto.tcnapi.omni.projects.v1.Project.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tcnapi.omni.projects.v1.Project;
  return proto.tcnapi.omni.projects.v1.Project.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tcnapi.omni.projects.v1.Project} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tcnapi.omni.projects.v1.Project}
 */
proto.tcnapi.omni.projects.v1.Project.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {!proto.tcnapi.omni.projects.v1.Project.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
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
proto.tcnapi.omni.projects.v1.Project.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tcnapi.omni.projects.v1.Project.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tcnapi.omni.projects.v1.Project} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tcnapi.omni.projects.v1.Project.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.tcnapi.omni.projects.v1.Project.State = {
  STATE_UNSPECIFIED: 0,
  STATE_OPEN: 17000,
  STATE_CLOSED: 17010
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.tcnapi.omni.projects.v1.Project.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcnapi.omni.projects.v1.Project} returns this
 */
proto.tcnapi.omni.projects.v1.Project.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.tcnapi.omni.projects.v1.Project.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcnapi.omni.projects.v1.Project} returns this
 */
proto.tcnapi.omni.projects.v1.Project.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.tcnapi.omni.projects.v1.Project.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tcnapi.omni.projects.v1.Project} returns this
 */
proto.tcnapi.omni.projects.v1.Project.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional State state = 4;
 * @return {!proto.tcnapi.omni.projects.v1.Project.State}
 */
proto.tcnapi.omni.projects.v1.Project.prototype.getState = function() {
  return /** @type {!proto.tcnapi.omni.projects.v1.Project.State} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.tcnapi.omni.projects.v1.Project.State} value
 * @return {!proto.tcnapi.omni.projects.v1.Project} returns this
 */
proto.tcnapi.omni.projects.v1.Project.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp create_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tcnapi.omni.projects.v1.Project.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.tcnapi.omni.projects.v1.Project} returns this
*/
proto.tcnapi.omni.projects.v1.Project.prototype.setCreateTime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tcnapi.omni.projects.v1.Project} returns this
 */
proto.tcnapi.omni.projects.v1.Project.prototype.clearCreateTime = function() {
  return this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tcnapi.omni.projects.v1.Project.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.tcnapi.omni.projects.v1);
