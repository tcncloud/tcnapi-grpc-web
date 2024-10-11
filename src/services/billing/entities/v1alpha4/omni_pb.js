// source: services/billing/entities/v1alpha4/omni.proto
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
var proto = {};

var services_billing_entities_v1alpha4_matching_pb = require('../../../../services/billing/entities/v1alpha4/matching_pb.js');
goog.object.extend(proto, services_billing_entities_v1alpha4_matching_pb);
var services_billing_entities_v1alpha4_modules_pb = require('../../../../services/billing/entities/v1alpha4/modules_pb.js');
goog.object.extend(proto, services_billing_entities_v1alpha4_modules_pb);
goog.exportSymbol('services.billing.entities.v1alpha4.OmniSmsConfig', null, proto);
goog.exportSymbol('services.billing.entities.v1alpha4.OmniSmsUnitConfig', null, proto);
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
proto.services.billing.entities.v1alpha4.OmniSmsConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.billing.entities.v1alpha4.OmniSmsConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.billing.entities.v1alpha4.OmniSmsConfig.displayName = 'proto.services.billing.entities.v1alpha4.OmniSmsConfig';
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
proto.services.billing.entities.v1alpha4.OmniSmsUnitConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.billing.entities.v1alpha4.OmniSmsUnitConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.billing.entities.v1alpha4.OmniSmsUnitConfig.displayName = 'proto.services.billing.entities.v1alpha4.OmniSmsUnitConfig';
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
proto.services.billing.entities.v1alpha4.OmniSmsConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.services.billing.entities.v1alpha4.OmniSmsConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.billing.entities.v1alpha4.OmniSmsConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.billing.entities.v1alpha4.OmniSmsConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
prefixes: (f = msg.getPrefixes()) && services_billing_entities_v1alpha4_matching_pb.CountryCodePrefix.toObject(includeInstance, f),
config: (f = msg.getConfig()) && services_billing_entities_v1alpha4_modules_pb.BasicConfig.toObject(includeInstance, f)
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
 * @return {!proto.services.billing.entities.v1alpha4.OmniSmsConfig}
 */
proto.services.billing.entities.v1alpha4.OmniSmsConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.billing.entities.v1alpha4.OmniSmsConfig;
  return proto.services.billing.entities.v1alpha4.OmniSmsConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.billing.entities.v1alpha4.OmniSmsConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.billing.entities.v1alpha4.OmniSmsConfig}
 */
proto.services.billing.entities.v1alpha4.OmniSmsConfig.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new services_billing_entities_v1alpha4_matching_pb.CountryCodePrefix;
      reader.readMessage(value,services_billing_entities_v1alpha4_matching_pb.CountryCodePrefix.deserializeBinaryFromReader);
      msg.setPrefixes(value);
      break;
    case 3:
      var value = new services_billing_entities_v1alpha4_modules_pb.BasicConfig;
      reader.readMessage(value,services_billing_entities_v1alpha4_modules_pb.BasicConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
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
proto.services.billing.entities.v1alpha4.OmniSmsConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.billing.entities.v1alpha4.OmniSmsConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.billing.entities.v1alpha4.OmniSmsConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.billing.entities.v1alpha4.OmniSmsConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPrefixes();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      services_billing_entities_v1alpha4_matching_pb.CountryCodePrefix.serializeBinaryToWriter
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      services_billing_entities_v1alpha4_modules_pb.BasicConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.services.billing.entities.v1alpha4.OmniSmsConfig.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.billing.entities.v1alpha4.OmniSmsConfig} returns this
 */
proto.services.billing.entities.v1alpha4.OmniSmsConfig.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CountryCodePrefix prefixes = 2;
 * @return {?proto.services.billing.entities.v1alpha4.CountryCodePrefix}
 */
proto.services.billing.entities.v1alpha4.OmniSmsConfig.prototype.getPrefixes = function() {
  return /** @type{?proto.services.billing.entities.v1alpha4.CountryCodePrefix} */ (
    jspb.Message.getWrapperField(this, services_billing_entities_v1alpha4_matching_pb.CountryCodePrefix, 2));
};


/**
 * @param {?proto.services.billing.entities.v1alpha4.CountryCodePrefix|undefined} value
 * @return {!proto.services.billing.entities.v1alpha4.OmniSmsConfig} returns this
*/
proto.services.billing.entities.v1alpha4.OmniSmsConfig.prototype.setPrefixes = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.billing.entities.v1alpha4.OmniSmsConfig} returns this
 */
proto.services.billing.entities.v1alpha4.OmniSmsConfig.prototype.clearPrefixes = function() {
  return this.setPrefixes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.billing.entities.v1alpha4.OmniSmsConfig.prototype.hasPrefixes = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional BasicConfig config = 3;
 * @return {?proto.services.billing.entities.v1alpha4.BasicConfig}
 */
proto.services.billing.entities.v1alpha4.OmniSmsConfig.prototype.getConfig = function() {
  return /** @type{?proto.services.billing.entities.v1alpha4.BasicConfig} */ (
    jspb.Message.getWrapperField(this, services_billing_entities_v1alpha4_modules_pb.BasicConfig, 3));
};


/**
 * @param {?proto.services.billing.entities.v1alpha4.BasicConfig|undefined} value
 * @return {!proto.services.billing.entities.v1alpha4.OmniSmsConfig} returns this
*/
proto.services.billing.entities.v1alpha4.OmniSmsConfig.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.billing.entities.v1alpha4.OmniSmsConfig} returns this
 */
proto.services.billing.entities.v1alpha4.OmniSmsConfig.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.billing.entities.v1alpha4.OmniSmsConfig.prototype.hasConfig = function() {
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
proto.services.billing.entities.v1alpha4.OmniSmsUnitConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.services.billing.entities.v1alpha4.OmniSmsUnitConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.billing.entities.v1alpha4.OmniSmsUnitConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.billing.entities.v1alpha4.OmniSmsUnitConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
prefixes: (f = msg.getPrefixes()) && services_billing_entities_v1alpha4_matching_pb.CountryCodePrefix.toObject(includeInstance, f),
config: (f = msg.getConfig()) && services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig.toObject(includeInstance, f)
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
 * @return {!proto.services.billing.entities.v1alpha4.OmniSmsUnitConfig}
 */
proto.services.billing.entities.v1alpha4.OmniSmsUnitConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.billing.entities.v1alpha4.OmniSmsUnitConfig;
  return proto.services.billing.entities.v1alpha4.OmniSmsUnitConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.billing.entities.v1alpha4.OmniSmsUnitConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.billing.entities.v1alpha4.OmniSmsUnitConfig}
 */
proto.services.billing.entities.v1alpha4.OmniSmsUnitConfig.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new services_billing_entities_v1alpha4_matching_pb.CountryCodePrefix;
      reader.readMessage(value,services_billing_entities_v1alpha4_matching_pb.CountryCodePrefix.deserializeBinaryFromReader);
      msg.setPrefixes(value);
      break;
    case 3:
      var value = new services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig;
      reader.readMessage(value,services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
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
proto.services.billing.entities.v1alpha4.OmniSmsUnitConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.billing.entities.v1alpha4.OmniSmsUnitConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.billing.entities.v1alpha4.OmniSmsUnitConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.billing.entities.v1alpha4.OmniSmsUnitConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPrefixes();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      services_billing_entities_v1alpha4_matching_pb.CountryCodePrefix.serializeBinaryToWriter
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.services.billing.entities.v1alpha4.OmniSmsUnitConfig.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.billing.entities.v1alpha4.OmniSmsUnitConfig} returns this
 */
proto.services.billing.entities.v1alpha4.OmniSmsUnitConfig.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CountryCodePrefix prefixes = 2;
 * @return {?proto.services.billing.entities.v1alpha4.CountryCodePrefix}
 */
proto.services.billing.entities.v1alpha4.OmniSmsUnitConfig.prototype.getPrefixes = function() {
  return /** @type{?proto.services.billing.entities.v1alpha4.CountryCodePrefix} */ (
    jspb.Message.getWrapperField(this, services_billing_entities_v1alpha4_matching_pb.CountryCodePrefix, 2));
};


/**
 * @param {?proto.services.billing.entities.v1alpha4.CountryCodePrefix|undefined} value
 * @return {!proto.services.billing.entities.v1alpha4.OmniSmsUnitConfig} returns this
*/
proto.services.billing.entities.v1alpha4.OmniSmsUnitConfig.prototype.setPrefixes = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.billing.entities.v1alpha4.OmniSmsUnitConfig} returns this
 */
proto.services.billing.entities.v1alpha4.OmniSmsUnitConfig.prototype.clearPrefixes = function() {
  return this.setPrefixes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.billing.entities.v1alpha4.OmniSmsUnitConfig.prototype.hasPrefixes = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional BasicUnitConfig config = 3;
 * @return {?proto.services.billing.entities.v1alpha4.BasicUnitConfig}
 */
proto.services.billing.entities.v1alpha4.OmniSmsUnitConfig.prototype.getConfig = function() {
  return /** @type{?proto.services.billing.entities.v1alpha4.BasicUnitConfig} */ (
    jspb.Message.getWrapperField(this, services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig, 3));
};


/**
 * @param {?proto.services.billing.entities.v1alpha4.BasicUnitConfig|undefined} value
 * @return {!proto.services.billing.entities.v1alpha4.OmniSmsUnitConfig} returns this
*/
proto.services.billing.entities.v1alpha4.OmniSmsUnitConfig.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.billing.entities.v1alpha4.OmniSmsUnitConfig} returns this
 */
proto.services.billing.entities.v1alpha4.OmniSmsUnitConfig.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.billing.entities.v1alpha4.OmniSmsUnitConfig.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto);
