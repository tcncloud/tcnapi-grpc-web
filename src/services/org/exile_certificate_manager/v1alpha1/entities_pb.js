// source: services/org/exile_certificate_manager/v1alpha1/entities.proto
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

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate', null, global);
goog.exportSymbol('proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration', null, global);
goog.exportSymbol('proto.services.org.exile_certificate_manager.v1alpha1.ExileConfigurationType', null, global);
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
proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate.displayName = 'proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate';
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
proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration.displayName = 'proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration';
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
proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate.toObject = function(includeInstance, msg) {
  var f, obj = {
exileCertificateId: jspb.Message.getFieldWithDefault(msg, 1, ""),
orgId: jspb.Message.getFieldWithDefault(msg, 2, ""),
name: jspb.Message.getFieldWithDefault(msg, 3, ""),
description: jspb.Message.getFieldWithDefault(msg, 4, ""),
hash: jspb.Message.getFieldWithDefault(msg, 5, ""),
expirationDate: (f = msg.getExpirationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
creationDate: (f = msg.getCreationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
requestBy: jspb.Message.getFieldWithDefault(msg, 8, ""),
revoked: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
exileConfigurationId: jspb.Message.getFieldWithDefault(msg, 10, ""),
renewalInstance: jspb.Message.getFieldWithDefault(msg, 11, 0)
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
 * @return {!proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate}
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate;
  return proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate}
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setExileCertificateId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setHash(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpirationDate(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreationDate(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestBy(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRevoked(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setExileConfigurationId(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRenewalInstance(value);
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
proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExileCertificateId();
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
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getExpirationDate();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCreationDate();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getRequestBy();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getRevoked();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getExileConfigurationId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getRenewalInstance();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
};


/**
 * optional string exile_certificate_id = 1;
 * @return {string}
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate.prototype.getExileCertificateId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate} returns this
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate.prototype.setExileCertificateId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate} returns this
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate} returns this
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate} returns this
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string hash = 5;
 * @return {string}
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate} returns this
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate.prototype.setHash = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp expiration_date = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate.prototype.getExpirationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate} returns this
*/
proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate.prototype.setExpirationDate = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate} returns this
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate.prototype.clearExpirationDate = function() {
  return this.setExpirationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate.prototype.hasExpirationDate = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp creation_date = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate} returns this
*/
proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate.prototype.setCreationDate = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate} returns this
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate.prototype.clearCreationDate = function() {
  return this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string request_by = 8;
 * @return {string}
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate.prototype.getRequestBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate} returns this
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate.prototype.setRequestBy = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional bool revoked = 9;
 * @return {boolean}
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate.prototype.getRevoked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate} returns this
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate.prototype.setRevoked = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional string exile_configuration_id = 10;
 * @return {string}
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate.prototype.getExileConfigurationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate} returns this
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate.prototype.setExileConfigurationId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int64 renewal_instance = 11;
 * @return {number}
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate.prototype.getRenewalInstance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate} returns this
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileCertificate.prototype.setRenewalInstance = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
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
proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration.toObject = function(includeInstance, msg) {
  var f, obj = {
exileConfigurationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
orgId: jspb.Message.getFieldWithDefault(msg, 2, ""),
name: jspb.Message.getFieldWithDefault(msg, 3, ""),
description: jspb.Message.getFieldWithDefault(msg, 4, ""),
type: jspb.Message.getFieldWithDefault(msg, 5, 0),
parameters: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration}
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration;
  return proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration}
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setExileConfigurationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {!proto.services.org.exile_certificate_manager.v1alpha1.ExileConfigurationType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setParameters(value);
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
proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExileConfigurationId();
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
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getParameters();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string exile_configuration_id = 1;
 * @return {string}
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration.prototype.getExileConfigurationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration} returns this
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration.prototype.setExileConfigurationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration} returns this
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration} returns this
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration} returns this
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional ExileConfigurationType type = 5;
 * @return {!proto.services.org.exile_certificate_manager.v1alpha1.ExileConfigurationType}
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration.prototype.getType = function() {
  return /** @type {!proto.services.org.exile_certificate_manager.v1alpha1.ExileConfigurationType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.services.org.exile_certificate_manager.v1alpha1.ExileConfigurationType} value
 * @return {!proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration} returns this
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional string parameters = 6;
 * @return {string}
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration.prototype.getParameters = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration} returns this
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileConfiguration.prototype.setParameters = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * @enum {number}
 */
proto.services.org.exile_certificate_manager.v1alpha1.ExileConfigurationType = {
  EXILE_CONFIGURATION_TYPE_UNSPECIFIED: 0,
  EXILE_CONFIGURATION_TYPE_NONE: 1,
  EXILE_CONFIGURATION_TYPE_ARTIVA_HCX: 2,
  EXILE_CONFIGURATION_TYPE_ARTIVA_RM: 3,
  EXILE_CONFIGURATION_TYPE_FACS: 4,
  EXILE_CONFIGURATION_TYPE_VELOSIDY: 5,
  EXILE_CONFIGURATION_TYPE_LATITUDE_CLASSIC: 6,
  EXILE_CONFIGURATION_TYPE_LATITUDE_LIQUID: 7
};

goog.object.extend(exports, proto.services.org.exile_certificate_manager.v1alpha1);
