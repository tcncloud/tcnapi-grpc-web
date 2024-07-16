// source: api/commons/insights.proto
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

goog.exportSymbol('proto.api.commons.ColumnSort', null, global);
goog.exportSymbol('proto.api.commons.InsightPermissionType', null, global);
goog.exportSymbol('proto.api.commons.InsightType', null, global);
goog.exportSymbol('proto.api.commons.InsightVfsSchemaType', null, global);
goog.exportSymbol('proto.api.commons.OutputConfigurationColumnFormatType', null, global);
goog.exportSymbol('proto.api.commons.OutputConfigurationColumnSummaryType', null, global);
goog.exportSymbol('proto.api.commons.OutputConfigurationType', null, global);
goog.exportSymbol('proto.api.commons.TableColumnConfig', null, global);
goog.exportSymbol('proto.api.commons.TableVisualization', null, global);
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
proto.api.commons.TableVisualization = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.TableVisualization, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.TableVisualization.displayName = 'proto.api.commons.TableVisualization';
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
proto.api.commons.TableColumnConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.TableColumnConfig.repeatedFields_, null);
};
goog.inherits(proto.api.commons.TableColumnConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.TableColumnConfig.displayName = 'proto.api.commons.TableColumnConfig';
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
proto.api.commons.TableVisualization.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.TableVisualization.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.TableVisualization} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.TableVisualization.toObject = function(includeInstance, msg) {
  var f, obj = {
tableColumnDetailsMap: (f = msg.getTableColumnDetailsMap()) ? f.toObject(includeInstance, proto.api.commons.TableColumnConfig.toObject) : [],
defaultColumnWidth: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.api.commons.TableVisualization}
 */
proto.api.commons.TableVisualization.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.TableVisualization;
  return proto.api.commons.TableVisualization.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.TableVisualization} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.TableVisualization}
 */
proto.api.commons.TableVisualization.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getTableColumnDetailsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api.commons.TableColumnConfig.deserializeBinaryFromReader, "", new proto.api.commons.TableColumnConfig());
         });
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDefaultColumnWidth(value);
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
proto.api.commons.TableVisualization.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.TableVisualization.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.TableVisualization} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.TableVisualization.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTableColumnDetailsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api.commons.TableColumnConfig.serializeBinaryToWriter);
  }
  f = message.getDefaultColumnWidth();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * map<string, TableColumnConfig> table_column_details = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api.commons.TableColumnConfig>}
 */
proto.api.commons.TableVisualization.prototype.getTableColumnDetailsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api.commons.TableColumnConfig>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.api.commons.TableColumnConfig));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.commons.TableVisualization} returns this
 */
proto.api.commons.TableVisualization.prototype.clearTableColumnDetailsMap = function() {
  this.getTableColumnDetailsMap().clear();
  return this;
};


/**
 * optional int64 default_column_width = 2;
 * @return {number}
 */
proto.api.commons.TableVisualization.prototype.getDefaultColumnWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.TableVisualization} returns this
 */
proto.api.commons.TableVisualization.prototype.setDefaultColumnWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.TableColumnConfig.repeatedFields_ = [6];



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
proto.api.commons.TableColumnConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.TableColumnConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.TableColumnConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.TableColumnConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
key: jspb.Message.getFieldWithDefault(msg, 1, ""),
columnWidth: jspb.Message.getFieldWithDefault(msg, 2, 0),
hideColumn: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
label: jspb.Message.getFieldWithDefault(msg, 4, ""),
columnFormatType: jspb.Message.getFieldWithDefault(msg, 5, 0),
columnFormatValuesList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
columnSummary: jspb.Message.getFieldWithDefault(msg, 7, 0),
description: jspb.Message.getFieldWithDefault(msg, 8, ""),
order: jspb.Message.getFieldWithDefault(msg, 9, 0),
sortDirection: jspb.Message.getFieldWithDefault(msg, 10, 0)
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
 * @return {!proto.api.commons.TableColumnConfig}
 */
proto.api.commons.TableColumnConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.TableColumnConfig;
  return proto.api.commons.TableColumnConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.TableColumnConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.TableColumnConfig}
 */
proto.api.commons.TableColumnConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setColumnWidth(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHideColumn(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabel(value);
      break;
    case 5:
      var value = /** @type {!proto.api.commons.OutputConfigurationColumnFormatType} */ (reader.readEnum());
      msg.setColumnFormatType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addColumnFormatValues(value);
      break;
    case 7:
      var value = /** @type {!proto.api.commons.OutputConfigurationColumnSummaryType} */ (reader.readEnum());
      msg.setColumnSummary(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOrder(value);
      break;
    case 10:
      var value = /** @type {!proto.api.commons.ColumnSort} */ (reader.readEnum());
      msg.setSortDirection(value);
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
proto.api.commons.TableColumnConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.TableColumnConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.TableColumnConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.TableColumnConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getColumnWidth();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getHideColumn();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getLabel();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getColumnFormatType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getColumnFormatValuesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getColumnSummary();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getOrder();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getSortDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.api.commons.TableColumnConfig.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.TableColumnConfig} returns this
 */
proto.api.commons.TableColumnConfig.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 column_width = 2;
 * @return {number}
 */
proto.api.commons.TableColumnConfig.prototype.getColumnWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.TableColumnConfig} returns this
 */
proto.api.commons.TableColumnConfig.prototype.setColumnWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool hide_column = 3;
 * @return {boolean}
 */
proto.api.commons.TableColumnConfig.prototype.getHideColumn = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.TableColumnConfig} returns this
 */
proto.api.commons.TableColumnConfig.prototype.setHideColumn = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string label = 4;
 * @return {string}
 */
proto.api.commons.TableColumnConfig.prototype.getLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.TableColumnConfig} returns this
 */
proto.api.commons.TableColumnConfig.prototype.setLabel = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional OutputConfigurationColumnFormatType column_format_type = 5;
 * @return {!proto.api.commons.OutputConfigurationColumnFormatType}
 */
proto.api.commons.TableColumnConfig.prototype.getColumnFormatType = function() {
  return /** @type {!proto.api.commons.OutputConfigurationColumnFormatType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.api.commons.OutputConfigurationColumnFormatType} value
 * @return {!proto.api.commons.TableColumnConfig} returns this
 */
proto.api.commons.TableColumnConfig.prototype.setColumnFormatType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * repeated string column_format_values = 6;
 * @return {!Array<string>}
 */
proto.api.commons.TableColumnConfig.prototype.getColumnFormatValuesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.commons.TableColumnConfig} returns this
 */
proto.api.commons.TableColumnConfig.prototype.setColumnFormatValuesList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.TableColumnConfig} returns this
 */
proto.api.commons.TableColumnConfig.prototype.addColumnFormatValues = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.TableColumnConfig} returns this
 */
proto.api.commons.TableColumnConfig.prototype.clearColumnFormatValuesList = function() {
  return this.setColumnFormatValuesList([]);
};


/**
 * optional OutputConfigurationColumnSummaryType column_summary = 7;
 * @return {!proto.api.commons.OutputConfigurationColumnSummaryType}
 */
proto.api.commons.TableColumnConfig.prototype.getColumnSummary = function() {
  return /** @type {!proto.api.commons.OutputConfigurationColumnSummaryType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.api.commons.OutputConfigurationColumnSummaryType} value
 * @return {!proto.api.commons.TableColumnConfig} returns this
 */
proto.api.commons.TableColumnConfig.prototype.setColumnSummary = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional string description = 8;
 * @return {string}
 */
proto.api.commons.TableColumnConfig.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.TableColumnConfig} returns this
 */
proto.api.commons.TableColumnConfig.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int64 order = 9;
 * @return {number}
 */
proto.api.commons.TableColumnConfig.prototype.getOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.TableColumnConfig} returns this
 */
proto.api.commons.TableColumnConfig.prototype.setOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional ColumnSort sort_direction = 10;
 * @return {!proto.api.commons.ColumnSort}
 */
proto.api.commons.TableColumnConfig.prototype.getSortDirection = function() {
  return /** @type {!proto.api.commons.ColumnSort} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.api.commons.ColumnSort} value
 * @return {!proto.api.commons.TableColumnConfig} returns this
 */
proto.api.commons.TableColumnConfig.prototype.setSortDirection = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * @enum {number}
 */
proto.api.commons.InsightPermissionType = {
  INSIGHT_PERMISSION_TYPE_COMMON_LIBRARY: 0,
  INSIGHT_PERMISSION_TYPE_ORG: 1
};

/**
 * @enum {number}
 */
proto.api.commons.InsightType = {
  INSIGHT_TYPE_TABLE_VIEW: 0
};

/**
 * @enum {number}
 */
proto.api.commons.InsightVfsSchemaType = {
  INSIGHT_VFS_SCHEMA_TYPE_STRING: 0,
  INSIGHT_VFS_SCHEMA_TYPE_INT64: 1,
  INSIGHT_VFS_SCHEMA_TYPE_FLOAT64: 2,
  INSIGHT_VFS_SCHEMA_TYPE_BOOLEAN: 3,
  INSIGHT_VFS_SCHEMA_TYPE_DATETIME: 4
};

/**
 * @enum {number}
 */
proto.api.commons.OutputConfigurationType = {
  OUTPUT_CONFIGURATION_TYPE_UNSPECIFIED: 0,
  OUTPUT_CONFIGURATION_TYPE_TABLE: 1,
  OUTPUT_CONFIGURATION_TYPE_MULTI_SERIES: 2
};

/**
 * @enum {number}
 */
proto.api.commons.OutputConfigurationColumnFormatType = {
  OUTPUT_CONFIGURATION_COLUMN_FORMAT_TYPE_UNSPECIFIED: 0,
  OUTPUT_CONFIGURATION_COLUMN_FORMAT_TYPE_PERCENTAGE: 1,
  OUTPUT_CONFIGURATION_COLUMN_FORMAT_TYPE_DOLLARS: 2,
  OUTPUT_CONFIGURATION_COLUMN_FORMAT_TYPE_DATE: 3,
  OUTPUT_CONFIGURATION_COLUMN_FORMAT_TYPE_PREFIX: 4,
  OUTPUT_CONFIGURATION_COLUMN_FORMAT_TYPE_SUFFIX: 5,
  OUTPUT_CONFIGURATION_COLUMN_FORMAT_TYPE_DURATION: 6,
  OUTPUT_CONFIGURATION_COLUMN_FORMAT_TYPE_DURATION_SECONDS: 7,
  OUTPUT_CONFIGURATION_COLUMN_FORMAT_TYPE_NUMBER: 8
};

/**
 * @enum {number}
 */
proto.api.commons.ColumnSort = {
  COLUMN_SORT_ASCENDING: 0,
  COLUMN_SORT_DESCENDING: 1
};

/**
 * @enum {number}
 */
proto.api.commons.OutputConfigurationColumnSummaryType = {
  OUTPUT_CONFIGURATION_COLUMN_SUMMARY_TYPE_UNSPECIFIED: 0,
  OUTPUT_CONFIGURATION_COLUMN_SUMMARY_TYPE_AVG: 1,
  OUTPUT_CONFIGURATION_COLUMN_SUMMARY_TYPE_SUM: 2,
  OUTPUT_CONFIGURATION_COLUMN_SUMMARY_TYPE_MIN: 3,
  OUTPUT_CONFIGURATION_COLUMN_SUMMARY_TYPE_MAX: 4
};

goog.object.extend(exports, proto.api.commons);
