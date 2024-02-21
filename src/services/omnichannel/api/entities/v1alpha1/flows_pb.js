// source: services/omnichannel/api/entities/v1alpha1/flows.proto
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
var localGlobalThis = require("../../../../../global.js");
var proto = localGlobalThis.proto;
var goog = jspb;
var global = localGlobalThis || 
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.services.omnichannel.api.entities.v1alpha1.FlowField', null, global);
goog.exportSymbol('proto.services.omnichannel.api.entities.v1alpha1.FlowField.ValueCase', null, global);
goog.exportSymbol('proto.services.omnichannel.api.entities.v1alpha1.FlowFieldName', null, global);
goog.exportSymbol('proto.services.omnichannel.api.entities.v1alpha1.FlowPayload', null, global);
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
proto.services.omnichannel.api.entities.v1alpha1.FlowPayload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.services.omnichannel.api.entities.v1alpha1.FlowPayload.repeatedFields_, null);
};
goog.inherits(proto.services.omnichannel.api.entities.v1alpha1.FlowPayload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.omnichannel.api.entities.v1alpha1.FlowPayload.displayName = 'proto.services.omnichannel.api.entities.v1alpha1.FlowPayload';
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
proto.services.omnichannel.api.entities.v1alpha1.FlowField = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.services.omnichannel.api.entities.v1alpha1.FlowField.oneofGroups_);
};
goog.inherits(proto.services.omnichannel.api.entities.v1alpha1.FlowField, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.omnichannel.api.entities.v1alpha1.FlowField.displayName = 'proto.services.omnichannel.api.entities.v1alpha1.FlowField';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.services.omnichannel.api.entities.v1alpha1.FlowPayload.repeatedFields_ = [1];



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
proto.services.omnichannel.api.entities.v1alpha1.FlowPayload.prototype.toObject = function(opt_includeInstance) {
  return proto.services.omnichannel.api.entities.v1alpha1.FlowPayload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.omnichannel.api.entities.v1alpha1.FlowPayload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.omnichannel.api.entities.v1alpha1.FlowPayload.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldsList: jspb.Message.toObjectList(msg.getFieldsList(),
    proto.services.omnichannel.api.entities.v1alpha1.FlowField.toObject, includeInstance)
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
 * @return {!proto.services.omnichannel.api.entities.v1alpha1.FlowPayload}
 */
proto.services.omnichannel.api.entities.v1alpha1.FlowPayload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.omnichannel.api.entities.v1alpha1.FlowPayload;
  return proto.services.omnichannel.api.entities.v1alpha1.FlowPayload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.omnichannel.api.entities.v1alpha1.FlowPayload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.omnichannel.api.entities.v1alpha1.FlowPayload}
 */
proto.services.omnichannel.api.entities.v1alpha1.FlowPayload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.services.omnichannel.api.entities.v1alpha1.FlowField;
      reader.readMessage(value,proto.services.omnichannel.api.entities.v1alpha1.FlowField.deserializeBinaryFromReader);
      msg.addFields(value);
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
proto.services.omnichannel.api.entities.v1alpha1.FlowPayload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.omnichannel.api.entities.v1alpha1.FlowPayload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.omnichannel.api.entities.v1alpha1.FlowPayload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.omnichannel.api.entities.v1alpha1.FlowPayload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.services.omnichannel.api.entities.v1alpha1.FlowField.serializeBinaryToWriter
    );
  }
};


/**
 * repeated FlowField fields = 1;
 * @return {!Array<!proto.services.omnichannel.api.entities.v1alpha1.FlowField>}
 */
proto.services.omnichannel.api.entities.v1alpha1.FlowPayload.prototype.getFieldsList = function() {
  return /** @type{!Array<!proto.services.omnichannel.api.entities.v1alpha1.FlowField>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.services.omnichannel.api.entities.v1alpha1.FlowField, 1));
};


/**
 * @param {!Array<!proto.services.omnichannel.api.entities.v1alpha1.FlowField>} value
 * @return {!proto.services.omnichannel.api.entities.v1alpha1.FlowPayload} returns this
*/
proto.services.omnichannel.api.entities.v1alpha1.FlowPayload.prototype.setFieldsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.services.omnichannel.api.entities.v1alpha1.FlowField=} opt_value
 * @param {number=} opt_index
 * @return {!proto.services.omnichannel.api.entities.v1alpha1.FlowField}
 */
proto.services.omnichannel.api.entities.v1alpha1.FlowPayload.prototype.addFields = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.services.omnichannel.api.entities.v1alpha1.FlowField, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.services.omnichannel.api.entities.v1alpha1.FlowPayload} returns this
 */
proto.services.omnichannel.api.entities.v1alpha1.FlowPayload.prototype.clearFieldsList = function() {
  return this.setFieldsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.services.omnichannel.api.entities.v1alpha1.FlowField.oneofGroups_ = [[100]];

/**
 * @enum {number}
 */
proto.services.omnichannel.api.entities.v1alpha1.FlowField.ValueCase = {
  VALUE_NOT_SET: 0,
  USER_INPUT: 100
};

/**
 * @return {proto.services.omnichannel.api.entities.v1alpha1.FlowField.ValueCase}
 */
proto.services.omnichannel.api.entities.v1alpha1.FlowField.prototype.getValueCase = function() {
  return /** @type {proto.services.omnichannel.api.entities.v1alpha1.FlowField.ValueCase} */(jspb.Message.computeOneofCase(this, proto.services.omnichannel.api.entities.v1alpha1.FlowField.oneofGroups_[0]));
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
proto.services.omnichannel.api.entities.v1alpha1.FlowField.prototype.toObject = function(opt_includeInstance) {
  return proto.services.omnichannel.api.entities.v1alpha1.FlowField.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.omnichannel.api.entities.v1alpha1.FlowField} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.omnichannel.api.entities.v1alpha1.FlowField.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userInput: jspb.Message.getFieldWithDefault(msg, 100, "")
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
 * @return {!proto.services.omnichannel.api.entities.v1alpha1.FlowField}
 */
proto.services.omnichannel.api.entities.v1alpha1.FlowField.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.omnichannel.api.entities.v1alpha1.FlowField;
  return proto.services.omnichannel.api.entities.v1alpha1.FlowField.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.omnichannel.api.entities.v1alpha1.FlowField} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.omnichannel.api.entities.v1alpha1.FlowField}
 */
proto.services.omnichannel.api.entities.v1alpha1.FlowField.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.services.omnichannel.api.entities.v1alpha1.FlowFieldName} */ (reader.readEnum());
      msg.setName(value);
      break;
    case 100:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserInput(value);
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
proto.services.omnichannel.api.entities.v1alpha1.FlowField.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.omnichannel.api.entities.v1alpha1.FlowField.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.omnichannel.api.entities.v1alpha1.FlowField} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.omnichannel.api.entities.v1alpha1.FlowField.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 100));
  if (f != null) {
    writer.writeString(
      100,
      f
    );
  }
};


/**
 * optional FlowFieldName name = 1;
 * @return {!proto.services.omnichannel.api.entities.v1alpha1.FlowFieldName}
 */
proto.services.omnichannel.api.entities.v1alpha1.FlowField.prototype.getName = function() {
  return /** @type {!proto.services.omnichannel.api.entities.v1alpha1.FlowFieldName} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.services.omnichannel.api.entities.v1alpha1.FlowFieldName} value
 * @return {!proto.services.omnichannel.api.entities.v1alpha1.FlowField} returns this
 */
proto.services.omnichannel.api.entities.v1alpha1.FlowField.prototype.setName = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string user_input = 100;
 * @return {string}
 */
proto.services.omnichannel.api.entities.v1alpha1.FlowField.prototype.getUserInput = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 100, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.omnichannel.api.entities.v1alpha1.FlowField} returns this
 */
proto.services.omnichannel.api.entities.v1alpha1.FlowField.prototype.setUserInput = function(value) {
  return jspb.Message.setOneofField(this, 100, proto.services.omnichannel.api.entities.v1alpha1.FlowField.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.services.omnichannel.api.entities.v1alpha1.FlowField} returns this
 */
proto.services.omnichannel.api.entities.v1alpha1.FlowField.prototype.clearUserInput = function() {
  return jspb.Message.setOneofField(this, 100, proto.services.omnichannel.api.entities.v1alpha1.FlowField.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.omnichannel.api.entities.v1alpha1.FlowField.prototype.hasUserInput = function() {
  return jspb.Message.getField(this, 100) != null;
};


/**
 * @enum {number}
 */
proto.services.omnichannel.api.entities.v1alpha1.FlowFieldName = {
  FIELD_NAME_UNSPECIFIED: 0,
  FIELD_NAME_USER_INPUT: 1
};

goog.object.extend(exports, proto.services.omnichannel.api.entities.v1alpha1);