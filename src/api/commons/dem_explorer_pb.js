// source: api/commons/dem_explorer.proto
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
var localGlobalThis = require("../../global.js");
var proto = localGlobalThis.proto;
var goog = jspb;
var global = localGlobalThis || 
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.api.commons.DatasourceType', null, global);
goog.exportSymbol('proto.api.commons.Schema', null, global);
goog.exportSymbol('proto.api.commons.SchemaField', null, global);
goog.exportSymbol('proto.api.commons.SchemaType', null, global);
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
proto.api.commons.SchemaField = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.SchemaField, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.SchemaField.displayName = 'proto.api.commons.SchemaField';
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
proto.api.commons.Schema = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.Schema.repeatedFields_, null);
};
goog.inherits(proto.api.commons.Schema, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.Schema.displayName = 'proto.api.commons.Schema';
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
proto.api.commons.SchemaField.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.SchemaField.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.SchemaField} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.SchemaField.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
columnType: jspb.Message.getFieldWithDefault(msg, 2, 0),
isPrimaryKey: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
isLowCardinality: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.api.commons.SchemaField}
 */
proto.api.commons.SchemaField.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.SchemaField;
  return proto.api.commons.SchemaField.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.SchemaField} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.SchemaField}
 */
proto.api.commons.SchemaField.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.api.commons.SchemaType} */ (reader.readEnum());
      msg.setColumnType(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPrimaryKey(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsLowCardinality(value);
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
proto.api.commons.SchemaField.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.SchemaField.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.SchemaField} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.SchemaField.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getColumnType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getIsPrimaryKey();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getIsLowCardinality();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.api.commons.SchemaField.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.SchemaField} returns this
 */
proto.api.commons.SchemaField.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SchemaType column_type = 2;
 * @return {!proto.api.commons.SchemaType}
 */
proto.api.commons.SchemaField.prototype.getColumnType = function() {
  return /** @type {!proto.api.commons.SchemaType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.SchemaType} value
 * @return {!proto.api.commons.SchemaField} returns this
 */
proto.api.commons.SchemaField.prototype.setColumnType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional bool is_primary_key = 3;
 * @return {boolean}
 */
proto.api.commons.SchemaField.prototype.getIsPrimaryKey = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.SchemaField} returns this
 */
proto.api.commons.SchemaField.prototype.setIsPrimaryKey = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool is_low_cardinality = 4;
 * @return {boolean}
 */
proto.api.commons.SchemaField.prototype.getIsLowCardinality = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.SchemaField} returns this
 */
proto.api.commons.SchemaField.prototype.setIsLowCardinality = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.Schema.repeatedFields_ = [3];



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
proto.api.commons.Schema.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.Schema.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.Schema} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.Schema.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
datasourceType: jspb.Message.getFieldWithDefault(msg, 2, 0),
fieldsList: jspb.Message.toObjectList(msg.getFieldsList(),
    proto.api.commons.SchemaField.toObject, includeInstance)
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
 * @return {!proto.api.commons.Schema}
 */
proto.api.commons.Schema.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.Schema;
  return proto.api.commons.Schema.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.Schema} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.Schema}
 */
proto.api.commons.Schema.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.api.commons.DatasourceType} */ (reader.readEnum());
      msg.setDatasourceType(value);
      break;
    case 3:
      var value = new proto.api.commons.SchemaField;
      reader.readMessage(value,proto.api.commons.SchemaField.deserializeBinaryFromReader);
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
proto.api.commons.Schema.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.Schema.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.Schema} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.Schema.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDatasourceType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.api.commons.SchemaField.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.api.commons.Schema.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.Schema} returns this
 */
proto.api.commons.Schema.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DatasourceType datasource_type = 2;
 * @return {!proto.api.commons.DatasourceType}
 */
proto.api.commons.Schema.prototype.getDatasourceType = function() {
  return /** @type {!proto.api.commons.DatasourceType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.DatasourceType} value
 * @return {!proto.api.commons.Schema} returns this
 */
proto.api.commons.Schema.prototype.setDatasourceType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated SchemaField fields = 3;
 * @return {!Array<!proto.api.commons.SchemaField>}
 */
proto.api.commons.Schema.prototype.getFieldsList = function() {
  return /** @type{!Array<!proto.api.commons.SchemaField>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.SchemaField, 3));
};


/**
 * @param {!Array<!proto.api.commons.SchemaField>} value
 * @return {!proto.api.commons.Schema} returns this
*/
proto.api.commons.Schema.prototype.setFieldsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.api.commons.SchemaField=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.SchemaField}
 */
proto.api.commons.Schema.prototype.addFields = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.api.commons.SchemaField, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.Schema} returns this
 */
proto.api.commons.Schema.prototype.clearFieldsList = function() {
  return this.setFieldsList([]);
};


/**
 * @enum {number}
 */
proto.api.commons.SchemaType = {
  SCHEMA_TYPE_UNSPECIFIED: 0,
  SCHEMA_TYPE_INT: 2,
  SCHEMA_TYPE_FLOAT: 3,
  SCHEMA_TYPE_STRING: 5,
  SCHEMA_TYPE_BOOL: 6,
  SCHEMA_TYPE_TIMESTAMP: 7,
  SCHEMA_TYPE_INT_ARRAY: 8,
  SCHEMA_TYPE_FLOAT_ARRAY: 9,
  SCHEMA_TYPE_STRING_ARRAY: 10,
  SCHEMA_TYPE_BOOL_ARRAY: 11
};

/**
 * @enum {number}
 */
proto.api.commons.DatasourceType = {
  DATASOURCE_TYPE_UNSPECIFIED: 0,
  DATASOURCE_TYPE_VFS: 1,
  DATASOURCE_TYPE_CLICKHOUSE: 2
};

goog.object.extend(exports, proto.api.commons);
