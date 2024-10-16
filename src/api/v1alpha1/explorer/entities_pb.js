// source: api/v1alpha1/explorer/entities.proto
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

goog.exportSymbol('proto.api.v1alpha1.explorer.DatasourceType', null, global);
goog.exportSymbol('proto.api.v1alpha1.explorer.ExportFormat', null, global);
goog.exportSymbol('proto.api.v1alpha1.explorer.Parameters', null, global);
goog.exportSymbol('proto.api.v1alpha1.explorer.Parameters.Parameter', null, global);
goog.exportSymbol('proto.api.v1alpha1.explorer.Schema', null, global);
goog.exportSymbol('proto.api.v1alpha1.explorer.SchemaField', null, global);
goog.exportSymbol('proto.api.v1alpha1.explorer.SchemaType', null, global);
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
proto.api.v1alpha1.explorer.SchemaField = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.explorer.SchemaField, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.explorer.SchemaField.displayName = 'proto.api.v1alpha1.explorer.SchemaField';
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
proto.api.v1alpha1.explorer.Schema = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.explorer.Schema.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.explorer.Schema, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.explorer.Schema.displayName = 'proto.api.v1alpha1.explorer.Schema';
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
proto.api.v1alpha1.explorer.Parameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.explorer.Parameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.explorer.Parameters.displayName = 'proto.api.v1alpha1.explorer.Parameters';
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
proto.api.v1alpha1.explorer.Parameters.Parameter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.explorer.Parameters.Parameter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.explorer.Parameters.Parameter.displayName = 'proto.api.v1alpha1.explorer.Parameters.Parameter';
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
proto.api.v1alpha1.explorer.SchemaField.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.explorer.SchemaField.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.explorer.SchemaField} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.explorer.SchemaField.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
columnType: jspb.Message.getFieldWithDefault(msg, 2, 0),
isPrimaryKey: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
isLowCardinality: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
columnDescription: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.api.v1alpha1.explorer.SchemaField}
 */
proto.api.v1alpha1.explorer.SchemaField.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.explorer.SchemaField;
  return proto.api.v1alpha1.explorer.SchemaField.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.explorer.SchemaField} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.explorer.SchemaField}
 */
proto.api.v1alpha1.explorer.SchemaField.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.api.v1alpha1.explorer.SchemaType} */ (reader.readEnum());
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
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnDescription(value);
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
proto.api.v1alpha1.explorer.SchemaField.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.explorer.SchemaField.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.explorer.SchemaField} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.explorer.SchemaField.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getColumnDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.api.v1alpha1.explorer.SchemaField.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.explorer.SchemaField} returns this
 */
proto.api.v1alpha1.explorer.SchemaField.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SchemaType column_type = 2;
 * @return {!proto.api.v1alpha1.explorer.SchemaType}
 */
proto.api.v1alpha1.explorer.SchemaField.prototype.getColumnType = function() {
  return /** @type {!proto.api.v1alpha1.explorer.SchemaType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.v1alpha1.explorer.SchemaType} value
 * @return {!proto.api.v1alpha1.explorer.SchemaField} returns this
 */
proto.api.v1alpha1.explorer.SchemaField.prototype.setColumnType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional bool is_primary_key = 3;
 * @return {boolean}
 */
proto.api.v1alpha1.explorer.SchemaField.prototype.getIsPrimaryKey = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.explorer.SchemaField} returns this
 */
proto.api.v1alpha1.explorer.SchemaField.prototype.setIsPrimaryKey = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool is_low_cardinality = 4;
 * @return {boolean}
 */
proto.api.v1alpha1.explorer.SchemaField.prototype.getIsLowCardinality = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.explorer.SchemaField} returns this
 */
proto.api.v1alpha1.explorer.SchemaField.prototype.setIsLowCardinality = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string column_description = 5;
 * @return {string}
 */
proto.api.v1alpha1.explorer.SchemaField.prototype.getColumnDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.explorer.SchemaField} returns this
 */
proto.api.v1alpha1.explorer.SchemaField.prototype.setColumnDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.explorer.Schema.repeatedFields_ = [3];



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
proto.api.v1alpha1.explorer.Schema.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.explorer.Schema.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.explorer.Schema} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.explorer.Schema.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
datasourceType: jspb.Message.getFieldWithDefault(msg, 2, 0),
fieldsList: jspb.Message.toObjectList(msg.getFieldsList(),
    proto.api.v1alpha1.explorer.SchemaField.toObject, includeInstance),
tableDescription: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.api.v1alpha1.explorer.Schema}
 */
proto.api.v1alpha1.explorer.Schema.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.explorer.Schema;
  return proto.api.v1alpha1.explorer.Schema.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.explorer.Schema} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.explorer.Schema}
 */
proto.api.v1alpha1.explorer.Schema.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.api.v1alpha1.explorer.DatasourceType} */ (reader.readEnum());
      msg.setDatasourceType(value);
      break;
    case 3:
      var value = new proto.api.v1alpha1.explorer.SchemaField;
      reader.readMessage(value,proto.api.v1alpha1.explorer.SchemaField.deserializeBinaryFromReader);
      msg.addFields(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableDescription(value);
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
proto.api.v1alpha1.explorer.Schema.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.explorer.Schema.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.explorer.Schema} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.explorer.Schema.serializeBinaryToWriter = function(message, writer) {
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
      proto.api.v1alpha1.explorer.SchemaField.serializeBinaryToWriter
    );
  }
  f = message.getTableDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.api.v1alpha1.explorer.Schema.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.explorer.Schema} returns this
 */
proto.api.v1alpha1.explorer.Schema.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DatasourceType datasource_type = 2;
 * @return {!proto.api.v1alpha1.explorer.DatasourceType}
 */
proto.api.v1alpha1.explorer.Schema.prototype.getDatasourceType = function() {
  return /** @type {!proto.api.v1alpha1.explorer.DatasourceType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.v1alpha1.explorer.DatasourceType} value
 * @return {!proto.api.v1alpha1.explorer.Schema} returns this
 */
proto.api.v1alpha1.explorer.Schema.prototype.setDatasourceType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated SchemaField fields = 3;
 * @return {!Array<!proto.api.v1alpha1.explorer.SchemaField>}
 */
proto.api.v1alpha1.explorer.Schema.prototype.getFieldsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.explorer.SchemaField>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.explorer.SchemaField, 3));
};


/**
 * @param {!Array<!proto.api.v1alpha1.explorer.SchemaField>} value
 * @return {!proto.api.v1alpha1.explorer.Schema} returns this
*/
proto.api.v1alpha1.explorer.Schema.prototype.setFieldsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.api.v1alpha1.explorer.SchemaField=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.explorer.SchemaField}
 */
proto.api.v1alpha1.explorer.Schema.prototype.addFields = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.api.v1alpha1.explorer.SchemaField, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.explorer.Schema} returns this
 */
proto.api.v1alpha1.explorer.Schema.prototype.clearFieldsList = function() {
  return this.setFieldsList([]);
};


/**
 * optional string table_description = 4;
 * @return {string}
 */
proto.api.v1alpha1.explorer.Schema.prototype.getTableDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.explorer.Schema} returns this
 */
proto.api.v1alpha1.explorer.Schema.prototype.setTableDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.api.v1alpha1.explorer.Parameters.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.explorer.Parameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.explorer.Parameters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.explorer.Parameters.toObject = function(includeInstance, msg) {
  var f, obj = {
parametersMap: (f = msg.getParametersMap()) ? f.toObject(includeInstance, proto.api.v1alpha1.explorer.Parameters.Parameter.toObject) : []
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
 * @return {!proto.api.v1alpha1.explorer.Parameters}
 */
proto.api.v1alpha1.explorer.Parameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.explorer.Parameters;
  return proto.api.v1alpha1.explorer.Parameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.explorer.Parameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.explorer.Parameters}
 */
proto.api.v1alpha1.explorer.Parameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getParametersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api.v1alpha1.explorer.Parameters.Parameter.deserializeBinaryFromReader, "", new proto.api.v1alpha1.explorer.Parameters.Parameter());
         });
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
proto.api.v1alpha1.explorer.Parameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.explorer.Parameters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.explorer.Parameters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.explorer.Parameters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParametersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api.v1alpha1.explorer.Parameters.Parameter.serializeBinaryToWriter);
  }
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
proto.api.v1alpha1.explorer.Parameters.Parameter.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.explorer.Parameters.Parameter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.explorer.Parameters.Parameter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.explorer.Parameters.Parameter.toObject = function(includeInstance, msg) {
  var f, obj = {
value: jspb.Message.getFieldWithDefault(msg, 2, ""),
dataType: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.api.v1alpha1.explorer.Parameters.Parameter}
 */
proto.api.v1alpha1.explorer.Parameters.Parameter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.explorer.Parameters.Parameter;
  return proto.api.v1alpha1.explorer.Parameters.Parameter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.explorer.Parameters.Parameter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.explorer.Parameters.Parameter}
 */
proto.api.v1alpha1.explorer.Parameters.Parameter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDataType(value);
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
proto.api.v1alpha1.explorer.Parameters.Parameter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.explorer.Parameters.Parameter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.explorer.Parameters.Parameter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.explorer.Parameters.Parameter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDataType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.api.v1alpha1.explorer.Parameters.Parameter.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.explorer.Parameters.Parameter} returns this
 */
proto.api.v1alpha1.explorer.Parameters.Parameter.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string data_type = 3;
 * @return {string}
 */
proto.api.v1alpha1.explorer.Parameters.Parameter.prototype.getDataType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.explorer.Parameters.Parameter} returns this
 */
proto.api.v1alpha1.explorer.Parameters.Parameter.prototype.setDataType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, Parameter> parameters = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api.v1alpha1.explorer.Parameters.Parameter>}
 */
proto.api.v1alpha1.explorer.Parameters.prototype.getParametersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api.v1alpha1.explorer.Parameters.Parameter>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.api.v1alpha1.explorer.Parameters.Parameter));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.explorer.Parameters} returns this
 */
proto.api.v1alpha1.explorer.Parameters.prototype.clearParametersMap = function() {
  this.getParametersMap().clear();
  return this;
};


/**
 * @enum {number}
 */
proto.api.v1alpha1.explorer.ExportFormat = {
  REPORT_FORMAT_UNSPECIFIED: 0,
  REPORT_FORMAT_CSV: 1,
  REPORT_FORMAT_PARQUET: 2
};

/**
 * @enum {number}
 */
proto.api.v1alpha1.explorer.SchemaType = {
  SCHEMA_TYPE_UNSPECIFIED: 0,
  SCHEMA_TYPE_INT: 2,
  SCHEMA_TYPE_FLOAT: 3,
  SCHEMA_TYPE_STRING: 5,
  SCHEMA_TYPE_BOOL: 6,
  SCHEMA_TYPE_TIMESTAMP: 7,
  SCHEMA_TYPE_INT_ARRAY: 8,
  SCHEMA_TYPE_FLOAT_ARRAY: 9,
  SCHEMA_TYPE_STRING_ARRAY: 10,
  SCHEMA_TYPE_BOOL_ARRAY: 11,
  SCHEMA_TYPE_MAP: 12
};

/**
 * @enum {number}
 */
proto.api.v1alpha1.explorer.DatasourceType = {
  DATASOURCE_TYPE_UNSPECIFIED: 0,
  DATASOURCE_TYPE_VFS: 1,
  DATASOURCE_TYPE_CLICKHOUSE: 2
};

goog.object.extend(exports, proto.api.v1alpha1.explorer);
