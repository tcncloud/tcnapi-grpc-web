// source: services/billing/entities/v1alpha3/omni.proto
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

var services_billing_entities_v1alpha3_matching_pb = require('../../../../services/billing/entities/v1alpha3/matching_pb.js');
goog.object.extend(proto, services_billing_entities_v1alpha3_matching_pb);
var services_billing_entities_v1alpha3_modules_pb = require('../../../../services/billing/entities/v1alpha3/modules_pb.js');
goog.object.extend(proto, services_billing_entities_v1alpha3_modules_pb);
goog.exportSymbol('proto.services.billing.entities.v1alpha3.OmniSmsConfig', null, global);
goog.exportSymbol('proto.services.billing.entities.v1alpha3.OmniSmsUnitConfig', null, global);
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
proto.services.billing.entities.v1alpha3.OmniSmsConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.billing.entities.v1alpha3.OmniSmsConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.billing.entities.v1alpha3.OmniSmsConfig.displayName = 'proto.services.billing.entities.v1alpha3.OmniSmsConfig';
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
proto.services.billing.entities.v1alpha3.OmniSmsUnitConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.billing.entities.v1alpha3.OmniSmsUnitConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.billing.entities.v1alpha3.OmniSmsUnitConfig.displayName = 'proto.services.billing.entities.v1alpha3.OmniSmsUnitConfig';
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
proto.services.billing.entities.v1alpha3.OmniSmsConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.services.billing.entities.v1alpha3.OmniSmsConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.billing.entities.v1alpha3.OmniSmsConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.billing.entities.v1alpha3.OmniSmsConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    prefixes: (f = msg.getPrefixes()) && services_billing_entities_v1alpha3_matching_pb.CountryCodePrefix.toObject(includeInstance, f),
    config: (f = msg.getConfig()) && services_billing_entities_v1alpha3_modules_pb.BasicConfig.toObject(includeInstance, f)
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
 * @return {!proto.services.billing.entities.v1alpha3.OmniSmsConfig}
 */
proto.services.billing.entities.v1alpha3.OmniSmsConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.billing.entities.v1alpha3.OmniSmsConfig;
  return proto.services.billing.entities.v1alpha3.OmniSmsConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.billing.entities.v1alpha3.OmniSmsConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.billing.entities.v1alpha3.OmniSmsConfig}
 */
proto.services.billing.entities.v1alpha3.OmniSmsConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new services_billing_entities_v1alpha3_matching_pb.CountryCodePrefix;
      reader.readMessage(value,services_billing_entities_v1alpha3_matching_pb.CountryCodePrefix.deserializeBinaryFromReader);
      msg.setPrefixes(value);
      break;
    case 2:
      var value = new services_billing_entities_v1alpha3_modules_pb.BasicConfig;
      reader.readMessage(value,services_billing_entities_v1alpha3_modules_pb.BasicConfig.deserializeBinaryFromReader);
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
proto.services.billing.entities.v1alpha3.OmniSmsConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.billing.entities.v1alpha3.OmniSmsConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.billing.entities.v1alpha3.OmniSmsConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.billing.entities.v1alpha3.OmniSmsConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrefixes();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      services_billing_entities_v1alpha3_matching_pb.CountryCodePrefix.serializeBinaryToWriter
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      services_billing_entities_v1alpha3_modules_pb.BasicConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional CountryCodePrefix prefixes = 1;
 * @return {?proto.services.billing.entities.v1alpha3.CountryCodePrefix}
 */
proto.services.billing.entities.v1alpha3.OmniSmsConfig.prototype.getPrefixes = function() {
  return /** @type{?proto.services.billing.entities.v1alpha3.CountryCodePrefix} */ (
    jspb.Message.getWrapperField(this, services_billing_entities_v1alpha3_matching_pb.CountryCodePrefix, 1));
};


/**
 * @param {?proto.services.billing.entities.v1alpha3.CountryCodePrefix|undefined} value
 * @return {!proto.services.billing.entities.v1alpha3.OmniSmsConfig} returns this
*/
proto.services.billing.entities.v1alpha3.OmniSmsConfig.prototype.setPrefixes = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.billing.entities.v1alpha3.OmniSmsConfig} returns this
 */
proto.services.billing.entities.v1alpha3.OmniSmsConfig.prototype.clearPrefixes = function() {
  return this.setPrefixes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.billing.entities.v1alpha3.OmniSmsConfig.prototype.hasPrefixes = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BasicConfig config = 2;
 * @return {?proto.services.billing.entities.v1alpha3.BasicConfig}
 */
proto.services.billing.entities.v1alpha3.OmniSmsConfig.prototype.getConfig = function() {
  return /** @type{?proto.services.billing.entities.v1alpha3.BasicConfig} */ (
    jspb.Message.getWrapperField(this, services_billing_entities_v1alpha3_modules_pb.BasicConfig, 2));
};


/**
 * @param {?proto.services.billing.entities.v1alpha3.BasicConfig|undefined} value
 * @return {!proto.services.billing.entities.v1alpha3.OmniSmsConfig} returns this
*/
proto.services.billing.entities.v1alpha3.OmniSmsConfig.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.billing.entities.v1alpha3.OmniSmsConfig} returns this
 */
proto.services.billing.entities.v1alpha3.OmniSmsConfig.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.billing.entities.v1alpha3.OmniSmsConfig.prototype.hasConfig = function() {
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
proto.services.billing.entities.v1alpha3.OmniSmsUnitConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.services.billing.entities.v1alpha3.OmniSmsUnitConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.billing.entities.v1alpha3.OmniSmsUnitConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.billing.entities.v1alpha3.OmniSmsUnitConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    prefixes: (f = msg.getPrefixes()) && services_billing_entities_v1alpha3_matching_pb.CountryCodePrefix.toObject(includeInstance, f),
    config: (f = msg.getConfig()) && services_billing_entities_v1alpha3_modules_pb.BasicUnitConfig.toObject(includeInstance, f)
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
 * @return {!proto.services.billing.entities.v1alpha3.OmniSmsUnitConfig}
 */
proto.services.billing.entities.v1alpha3.OmniSmsUnitConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.billing.entities.v1alpha3.OmniSmsUnitConfig;
  return proto.services.billing.entities.v1alpha3.OmniSmsUnitConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.billing.entities.v1alpha3.OmniSmsUnitConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.billing.entities.v1alpha3.OmniSmsUnitConfig}
 */
proto.services.billing.entities.v1alpha3.OmniSmsUnitConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new services_billing_entities_v1alpha3_matching_pb.CountryCodePrefix;
      reader.readMessage(value,services_billing_entities_v1alpha3_matching_pb.CountryCodePrefix.deserializeBinaryFromReader);
      msg.setPrefixes(value);
      break;
    case 2:
      var value = new services_billing_entities_v1alpha3_modules_pb.BasicUnitConfig;
      reader.readMessage(value,services_billing_entities_v1alpha3_modules_pb.BasicUnitConfig.deserializeBinaryFromReader);
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
proto.services.billing.entities.v1alpha3.OmniSmsUnitConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.billing.entities.v1alpha3.OmniSmsUnitConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.billing.entities.v1alpha3.OmniSmsUnitConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.billing.entities.v1alpha3.OmniSmsUnitConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrefixes();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      services_billing_entities_v1alpha3_matching_pb.CountryCodePrefix.serializeBinaryToWriter
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      services_billing_entities_v1alpha3_modules_pb.BasicUnitConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional CountryCodePrefix prefixes = 1;
 * @return {?proto.services.billing.entities.v1alpha3.CountryCodePrefix}
 */
proto.services.billing.entities.v1alpha3.OmniSmsUnitConfig.prototype.getPrefixes = function() {
  return /** @type{?proto.services.billing.entities.v1alpha3.CountryCodePrefix} */ (
    jspb.Message.getWrapperField(this, services_billing_entities_v1alpha3_matching_pb.CountryCodePrefix, 1));
};


/**
 * @param {?proto.services.billing.entities.v1alpha3.CountryCodePrefix|undefined} value
 * @return {!proto.services.billing.entities.v1alpha3.OmniSmsUnitConfig} returns this
*/
proto.services.billing.entities.v1alpha3.OmniSmsUnitConfig.prototype.setPrefixes = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.billing.entities.v1alpha3.OmniSmsUnitConfig} returns this
 */
proto.services.billing.entities.v1alpha3.OmniSmsUnitConfig.prototype.clearPrefixes = function() {
  return this.setPrefixes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.billing.entities.v1alpha3.OmniSmsUnitConfig.prototype.hasPrefixes = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BasicUnitConfig config = 2;
 * @return {?proto.services.billing.entities.v1alpha3.BasicUnitConfig}
 */
proto.services.billing.entities.v1alpha3.OmniSmsUnitConfig.prototype.getConfig = function() {
  return /** @type{?proto.services.billing.entities.v1alpha3.BasicUnitConfig} */ (
    jspb.Message.getWrapperField(this, services_billing_entities_v1alpha3_modules_pb.BasicUnitConfig, 2));
};


/**
 * @param {?proto.services.billing.entities.v1alpha3.BasicUnitConfig|undefined} value
 * @return {!proto.services.billing.entities.v1alpha3.OmniSmsUnitConfig} returns this
*/
proto.services.billing.entities.v1alpha3.OmniSmsUnitConfig.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.billing.entities.v1alpha3.OmniSmsUnitConfig} returns this
 */
proto.services.billing.entities.v1alpha3.OmniSmsUnitConfig.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.billing.entities.v1alpha3.OmniSmsUnitConfig.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.services.billing.entities.v1alpha3);