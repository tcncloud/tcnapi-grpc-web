// source: services/billing/entities/v1alpha2/modules.proto
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

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var google_type_decimal_pb = require('../../../../google/type/decimal_pb.js');
goog.object.extend(proto, google_type_decimal_pb);
goog.exportSymbol('proto.services.billing.entities.v1alpha2.BasicConfig', null, global);
goog.exportSymbol('proto.services.billing.entities.v1alpha2.BasicUnitConfig', null, global);
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
proto.services.billing.entities.v1alpha2.BasicConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.billing.entities.v1alpha2.BasicConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.billing.entities.v1alpha2.BasicConfig.displayName = 'proto.services.billing.entities.v1alpha2.BasicConfig';
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
proto.services.billing.entities.v1alpha2.BasicUnitConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.billing.entities.v1alpha2.BasicUnitConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.billing.entities.v1alpha2.BasicUnitConfig.displayName = 'proto.services.billing.entities.v1alpha2.BasicUnitConfig';
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
proto.services.billing.entities.v1alpha2.BasicConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.services.billing.entities.v1alpha2.BasicConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.billing.entities.v1alpha2.BasicConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.billing.entities.v1alpha2.BasicConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
rate: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
rateDecimal: (f = msg.getRateDecimal()) && google_type_decimal_pb.Decimal.toObject(includeInstance, f)
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
 * @return {!proto.services.billing.entities.v1alpha2.BasicConfig}
 */
proto.services.billing.entities.v1alpha2.BasicConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.billing.entities.v1alpha2.BasicConfig;
  return proto.services.billing.entities.v1alpha2.BasicConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.billing.entities.v1alpha2.BasicConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.billing.entities.v1alpha2.BasicConfig}
 */
proto.services.billing.entities.v1alpha2.BasicConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRate(value);
      break;
    case 2:
      var value = new google_type_decimal_pb.Decimal;
      reader.readMessage(value,google_type_decimal_pb.Decimal.deserializeBinaryFromReader);
      msg.setRateDecimal(value);
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
proto.services.billing.entities.v1alpha2.BasicConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.billing.entities.v1alpha2.BasicConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.billing.entities.v1alpha2.BasicConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.billing.entities.v1alpha2.BasicConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRate();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getRateDecimal();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_type_decimal_pb.Decimal.serializeBinaryToWriter
    );
  }
};


/**
 * optional double rate = 1;
 * @return {number}
 */
proto.services.billing.entities.v1alpha2.BasicConfig.prototype.getRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.services.billing.entities.v1alpha2.BasicConfig} returns this
 */
proto.services.billing.entities.v1alpha2.BasicConfig.prototype.setRate = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional google.type.Decimal rate_decimal = 2;
 * @return {?proto.google.type.Decimal}
 */
proto.services.billing.entities.v1alpha2.BasicConfig.prototype.getRateDecimal = function() {
  return /** @type{?proto.google.type.Decimal} */ (
    jspb.Message.getWrapperField(this, google_type_decimal_pb.Decimal, 2));
};


/**
 * @param {?proto.google.type.Decimal|undefined} value
 * @return {!proto.services.billing.entities.v1alpha2.BasicConfig} returns this
*/
proto.services.billing.entities.v1alpha2.BasicConfig.prototype.setRateDecimal = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.billing.entities.v1alpha2.BasicConfig} returns this
 */
proto.services.billing.entities.v1alpha2.BasicConfig.prototype.clearRateDecimal = function() {
  return this.setRateDecimal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.billing.entities.v1alpha2.BasicConfig.prototype.hasRateDecimal = function() {
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
proto.services.billing.entities.v1alpha2.BasicUnitConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.services.billing.entities.v1alpha2.BasicUnitConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.billing.entities.v1alpha2.BasicUnitConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.billing.entities.v1alpha2.BasicUnitConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
unitSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
rate: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
minUnits: (f = msg.getMinUnits()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
maxUnits: (f = msg.getMaxUnits()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
minUnitsPerCycle: (f = msg.getMinUnitsPerCycle()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
maxUnitsPerCycle: (f = msg.getMaxUnitsPerCycle()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
rateDecimal: (f = msg.getRateDecimal()) && google_type_decimal_pb.Decimal.toObject(includeInstance, f)
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
 * @return {!proto.services.billing.entities.v1alpha2.BasicUnitConfig}
 */
proto.services.billing.entities.v1alpha2.BasicUnitConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.billing.entities.v1alpha2.BasicUnitConfig;
  return proto.services.billing.entities.v1alpha2.BasicUnitConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.billing.entities.v1alpha2.BasicUnitConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.billing.entities.v1alpha2.BasicUnitConfig}
 */
proto.services.billing.entities.v1alpha2.BasicUnitConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUnitSize(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRate(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setMinUnits(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setMaxUnits(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setMinUnitsPerCycle(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setMaxUnitsPerCycle(value);
      break;
    case 7:
      var value = new google_type_decimal_pb.Decimal;
      reader.readMessage(value,google_type_decimal_pb.Decimal.deserializeBinaryFromReader);
      msg.setRateDecimal(value);
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
proto.services.billing.entities.v1alpha2.BasicUnitConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.billing.entities.v1alpha2.BasicUnitConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.billing.entities.v1alpha2.BasicUnitConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.billing.entities.v1alpha2.BasicUnitConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUnitSize();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRate();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getMinUnits();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getMaxUnits();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getMinUnitsPerCycle();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getMaxUnitsPerCycle();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getRateDecimal();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_type_decimal_pb.Decimal.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 unit_size = 1;
 * @return {number}
 */
proto.services.billing.entities.v1alpha2.BasicUnitConfig.prototype.getUnitSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.billing.entities.v1alpha2.BasicUnitConfig} returns this
 */
proto.services.billing.entities.v1alpha2.BasicUnitConfig.prototype.setUnitSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional double rate = 2;
 * @return {number}
 */
proto.services.billing.entities.v1alpha2.BasicUnitConfig.prototype.getRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.services.billing.entities.v1alpha2.BasicUnitConfig} returns this
 */
proto.services.billing.entities.v1alpha2.BasicUnitConfig.prototype.setRate = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional google.protobuf.Int64Value min_units = 3;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.services.billing.entities.v1alpha2.BasicUnitConfig.prototype.getMinUnits = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 3));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.services.billing.entities.v1alpha2.BasicUnitConfig} returns this
*/
proto.services.billing.entities.v1alpha2.BasicUnitConfig.prototype.setMinUnits = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.billing.entities.v1alpha2.BasicUnitConfig} returns this
 */
proto.services.billing.entities.v1alpha2.BasicUnitConfig.prototype.clearMinUnits = function() {
  return this.setMinUnits(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.billing.entities.v1alpha2.BasicUnitConfig.prototype.hasMinUnits = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Int64Value max_units = 4;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.services.billing.entities.v1alpha2.BasicUnitConfig.prototype.getMaxUnits = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 4));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.services.billing.entities.v1alpha2.BasicUnitConfig} returns this
*/
proto.services.billing.entities.v1alpha2.BasicUnitConfig.prototype.setMaxUnits = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.billing.entities.v1alpha2.BasicUnitConfig} returns this
 */
proto.services.billing.entities.v1alpha2.BasicUnitConfig.prototype.clearMaxUnits = function() {
  return this.setMaxUnits(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.billing.entities.v1alpha2.BasicUnitConfig.prototype.hasMaxUnits = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Int64Value min_units_per_cycle = 5;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.services.billing.entities.v1alpha2.BasicUnitConfig.prototype.getMinUnitsPerCycle = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 5));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.services.billing.entities.v1alpha2.BasicUnitConfig} returns this
*/
proto.services.billing.entities.v1alpha2.BasicUnitConfig.prototype.setMinUnitsPerCycle = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.billing.entities.v1alpha2.BasicUnitConfig} returns this
 */
proto.services.billing.entities.v1alpha2.BasicUnitConfig.prototype.clearMinUnitsPerCycle = function() {
  return this.setMinUnitsPerCycle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.billing.entities.v1alpha2.BasicUnitConfig.prototype.hasMinUnitsPerCycle = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Int64Value max_units_per_cycle = 6;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.services.billing.entities.v1alpha2.BasicUnitConfig.prototype.getMaxUnitsPerCycle = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 6));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.services.billing.entities.v1alpha2.BasicUnitConfig} returns this
*/
proto.services.billing.entities.v1alpha2.BasicUnitConfig.prototype.setMaxUnitsPerCycle = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.billing.entities.v1alpha2.BasicUnitConfig} returns this
 */
proto.services.billing.entities.v1alpha2.BasicUnitConfig.prototype.clearMaxUnitsPerCycle = function() {
  return this.setMaxUnitsPerCycle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.billing.entities.v1alpha2.BasicUnitConfig.prototype.hasMaxUnitsPerCycle = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.type.Decimal rate_decimal = 7;
 * @return {?proto.google.type.Decimal}
 */
proto.services.billing.entities.v1alpha2.BasicUnitConfig.prototype.getRateDecimal = function() {
  return /** @type{?proto.google.type.Decimal} */ (
    jspb.Message.getWrapperField(this, google_type_decimal_pb.Decimal, 7));
};


/**
 * @param {?proto.google.type.Decimal|undefined} value
 * @return {!proto.services.billing.entities.v1alpha2.BasicUnitConfig} returns this
*/
proto.services.billing.entities.v1alpha2.BasicUnitConfig.prototype.setRateDecimal = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.billing.entities.v1alpha2.BasicUnitConfig} returns this
 */
proto.services.billing.entities.v1alpha2.BasicUnitConfig.prototype.clearRateDecimal = function() {
  return this.setRateDecimal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.billing.entities.v1alpha2.BasicUnitConfig.prototype.hasRateDecimal = function() {
  return jspb.Message.getField(this, 7) != null;
};


goog.object.extend(exports, proto.services.billing.entities.v1alpha2);
