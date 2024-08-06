// source: api/v1alpha1/explorer/service.proto
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

var api_v1alpha1_explorer_entities_pb = require('../../../api/v1alpha1/explorer/entities_pb.js');
goog.object.extend(proto, api_v1alpha1_explorer_entities_pb);
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.api.v1alpha1.explorer.ListDatasourceSchemasRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.explorer.ListDatasourceSchemasResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.explorer.QueryRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.explorer.QueryRequest.QueryCase', null, global);
goog.exportSymbol('proto.api.v1alpha1.explorer.QueryResponse', null, global);
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
proto.api.v1alpha1.explorer.ListDatasourceSchemasRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.explorer.ListDatasourceSchemasRequest.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.explorer.ListDatasourceSchemasRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.explorer.ListDatasourceSchemasRequest.displayName = 'proto.api.v1alpha1.explorer.ListDatasourceSchemasRequest';
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
proto.api.v1alpha1.explorer.ListDatasourceSchemasResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.explorer.ListDatasourceSchemasResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.explorer.ListDatasourceSchemasResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.explorer.ListDatasourceSchemasResponse.displayName = 'proto.api.v1alpha1.explorer.ListDatasourceSchemasResponse';
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
proto.api.v1alpha1.explorer.QueryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.explorer.QueryRequest.repeatedFields_, proto.api.v1alpha1.explorer.QueryRequest.oneofGroups_);
};
goog.inherits(proto.api.v1alpha1.explorer.QueryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.explorer.QueryRequest.displayName = 'proto.api.v1alpha1.explorer.QueryRequest';
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
proto.api.v1alpha1.explorer.QueryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.explorer.QueryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.explorer.QueryResponse.displayName = 'proto.api.v1alpha1.explorer.QueryResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.explorer.ListDatasourceSchemasRequest.repeatedFields_ = [1];



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
proto.api.v1alpha1.explorer.ListDatasourceSchemasRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.explorer.ListDatasourceSchemasRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.explorer.ListDatasourceSchemasRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.explorer.ListDatasourceSchemasRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
datasourceNamesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
datasourceType: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.api.v1alpha1.explorer.ListDatasourceSchemasRequest}
 */
proto.api.v1alpha1.explorer.ListDatasourceSchemasRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.explorer.ListDatasourceSchemasRequest;
  return proto.api.v1alpha1.explorer.ListDatasourceSchemasRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.explorer.ListDatasourceSchemasRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.explorer.ListDatasourceSchemasRequest}
 */
proto.api.v1alpha1.explorer.ListDatasourceSchemasRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addDatasourceNames(value);
      break;
    case 2:
      var value = /** @type {!proto.api.v1alpha1.explorer.DatasourceType} */ (reader.readEnum());
      msg.setDatasourceType(value);
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
proto.api.v1alpha1.explorer.ListDatasourceSchemasRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.explorer.ListDatasourceSchemasRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.explorer.ListDatasourceSchemasRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.explorer.ListDatasourceSchemasRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatasourceNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
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
};


/**
 * repeated string datasource_names = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.explorer.ListDatasourceSchemasRequest.prototype.getDatasourceNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.explorer.ListDatasourceSchemasRequest} returns this
 */
proto.api.v1alpha1.explorer.ListDatasourceSchemasRequest.prototype.setDatasourceNamesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.explorer.ListDatasourceSchemasRequest} returns this
 */
proto.api.v1alpha1.explorer.ListDatasourceSchemasRequest.prototype.addDatasourceNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.explorer.ListDatasourceSchemasRequest} returns this
 */
proto.api.v1alpha1.explorer.ListDatasourceSchemasRequest.prototype.clearDatasourceNamesList = function() {
  return this.setDatasourceNamesList([]);
};


/**
 * optional DatasourceType datasource_type = 2;
 * @return {!proto.api.v1alpha1.explorer.DatasourceType}
 */
proto.api.v1alpha1.explorer.ListDatasourceSchemasRequest.prototype.getDatasourceType = function() {
  return /** @type {!proto.api.v1alpha1.explorer.DatasourceType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.v1alpha1.explorer.DatasourceType} value
 * @return {!proto.api.v1alpha1.explorer.ListDatasourceSchemasRequest} returns this
 */
proto.api.v1alpha1.explorer.ListDatasourceSchemasRequest.prototype.setDatasourceType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.explorer.ListDatasourceSchemasResponse.repeatedFields_ = [1];



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
proto.api.v1alpha1.explorer.ListDatasourceSchemasResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.explorer.ListDatasourceSchemasResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.explorer.ListDatasourceSchemasResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.explorer.ListDatasourceSchemasResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
schemasList: jspb.Message.toObjectList(msg.getSchemasList(),
    api_v1alpha1_explorer_entities_pb.Schema.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.explorer.ListDatasourceSchemasResponse}
 */
proto.api.v1alpha1.explorer.ListDatasourceSchemasResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.explorer.ListDatasourceSchemasResponse;
  return proto.api.v1alpha1.explorer.ListDatasourceSchemasResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.explorer.ListDatasourceSchemasResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.explorer.ListDatasourceSchemasResponse}
 */
proto.api.v1alpha1.explorer.ListDatasourceSchemasResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_v1alpha1_explorer_entities_pb.Schema;
      reader.readMessage(value,api_v1alpha1_explorer_entities_pb.Schema.deserializeBinaryFromReader);
      msg.addSchemas(value);
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
proto.api.v1alpha1.explorer.ListDatasourceSchemasResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.explorer.ListDatasourceSchemasResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.explorer.ListDatasourceSchemasResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.explorer.ListDatasourceSchemasResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSchemasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      api_v1alpha1_explorer_entities_pb.Schema.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Schema schemas = 1;
 * @return {!Array<!proto.api.v1alpha1.explorer.Schema>}
 */
proto.api.v1alpha1.explorer.ListDatasourceSchemasResponse.prototype.getSchemasList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.explorer.Schema>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_v1alpha1_explorer_entities_pb.Schema, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.explorer.Schema>} value
 * @return {!proto.api.v1alpha1.explorer.ListDatasourceSchemasResponse} returns this
*/
proto.api.v1alpha1.explorer.ListDatasourceSchemasResponse.prototype.setSchemasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.explorer.Schema=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.explorer.Schema}
 */
proto.api.v1alpha1.explorer.ListDatasourceSchemasResponse.prototype.addSchemas = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.explorer.Schema, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.explorer.ListDatasourceSchemasResponse} returns this
 */
proto.api.v1alpha1.explorer.ListDatasourceSchemasResponse.prototype.clearSchemasList = function() {
  return this.setSchemasList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.explorer.QueryRequest.repeatedFields_ = [5];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.v1alpha1.explorer.QueryRequest.oneofGroups_ = [[3,4]];

/**
 * @enum {number}
 */
proto.api.v1alpha1.explorer.QueryRequest.QueryCase = {
  QUERY_NOT_SET: 0,
  PIPELINE: 3,
  PRQL: 4
};

/**
 * @return {proto.api.v1alpha1.explorer.QueryRequest.QueryCase}
 */
proto.api.v1alpha1.explorer.QueryRequest.prototype.getQueryCase = function() {
  return /** @type {proto.api.v1alpha1.explorer.QueryRequest.QueryCase} */(jspb.Message.computeOneofCase(this, proto.api.v1alpha1.explorer.QueryRequest.oneofGroups_[0]));
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
proto.api.v1alpha1.explorer.QueryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.explorer.QueryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.explorer.QueryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.explorer.QueryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
datasourceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
datasourceType: jspb.Message.getFieldWithDefault(msg, 2, 0),
pipeline: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
prql: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
orgIdsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
endTime: (f = msg.getEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
timezone: jspb.Message.getFieldWithDefault(msg, 8, ""),
pipelineParameters: (f = msg.getPipelineParameters()) && api_v1alpha1_explorer_entities_pb.Parameters.toObject(includeInstance, f),
uiTraceId: jspb.Message.getFieldWithDefault(msg, 10, ""),
comment: jspb.Message.getFieldWithDefault(msg, 11, ""),
format: jspb.Message.getFieldWithDefault(msg, 12, 0)
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
 * @return {!proto.api.v1alpha1.explorer.QueryRequest}
 */
proto.api.v1alpha1.explorer.QueryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.explorer.QueryRequest;
  return proto.api.v1alpha1.explorer.QueryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.explorer.QueryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.explorer.QueryRequest}
 */
proto.api.v1alpha1.explorer.QueryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasourceName(value);
      break;
    case 2:
      var value = /** @type {!proto.api.v1alpha1.explorer.DatasourceType} */ (reader.readEnum());
      msg.setDatasourceType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPipeline(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrql(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addOrgIds(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndTime(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimezone(value);
      break;
    case 9:
      var value = new api_v1alpha1_explorer_entities_pb.Parameters;
      reader.readMessage(value,api_v1alpha1_explorer_entities_pb.Parameters.deserializeBinaryFromReader);
      msg.setPipelineParameters(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setUiTraceId(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    case 12:
      var value = /** @type {!proto.api.v1alpha1.explorer.ExportFormat} */ (reader.readEnum());
      msg.setFormat(value);
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
proto.api.v1alpha1.explorer.QueryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.explorer.QueryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.explorer.QueryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.explorer.QueryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatasourceName();
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
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOrgIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndTime();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTimezone();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getPipelineParameters();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      api_v1alpha1_explorer_entities_pb.Parameters.serializeBinaryToWriter
    );
  }
  f = message.getUiTraceId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getFormat();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
};


/**
 * optional string datasource_name = 1;
 * @return {string}
 */
proto.api.v1alpha1.explorer.QueryRequest.prototype.getDatasourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.explorer.QueryRequest} returns this
 */
proto.api.v1alpha1.explorer.QueryRequest.prototype.setDatasourceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DatasourceType datasource_type = 2;
 * @return {!proto.api.v1alpha1.explorer.DatasourceType}
 */
proto.api.v1alpha1.explorer.QueryRequest.prototype.getDatasourceType = function() {
  return /** @type {!proto.api.v1alpha1.explorer.DatasourceType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.v1alpha1.explorer.DatasourceType} value
 * @return {!proto.api.v1alpha1.explorer.QueryRequest} returns this
 */
proto.api.v1alpha1.explorer.QueryRequest.prototype.setDatasourceType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string pipeline = 3;
 * @return {string}
 */
proto.api.v1alpha1.explorer.QueryRequest.prototype.getPipeline = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.explorer.QueryRequest} returns this
 */
proto.api.v1alpha1.explorer.QueryRequest.prototype.setPipeline = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.api.v1alpha1.explorer.QueryRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.v1alpha1.explorer.QueryRequest} returns this
 */
proto.api.v1alpha1.explorer.QueryRequest.prototype.clearPipeline = function() {
  return jspb.Message.setOneofField(this, 3, proto.api.v1alpha1.explorer.QueryRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.explorer.QueryRequest.prototype.hasPipeline = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string prql = 4;
 * @return {string}
 */
proto.api.v1alpha1.explorer.QueryRequest.prototype.getPrql = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.explorer.QueryRequest} returns this
 */
proto.api.v1alpha1.explorer.QueryRequest.prototype.setPrql = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.api.v1alpha1.explorer.QueryRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.v1alpha1.explorer.QueryRequest} returns this
 */
proto.api.v1alpha1.explorer.QueryRequest.prototype.clearPrql = function() {
  return jspb.Message.setOneofField(this, 4, proto.api.v1alpha1.explorer.QueryRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.explorer.QueryRequest.prototype.hasPrql = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated string org_ids = 5;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.explorer.QueryRequest.prototype.getOrgIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.explorer.QueryRequest} returns this
 */
proto.api.v1alpha1.explorer.QueryRequest.prototype.setOrgIdsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.explorer.QueryRequest} returns this
 */
proto.api.v1alpha1.explorer.QueryRequest.prototype.addOrgIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.explorer.QueryRequest} returns this
 */
proto.api.v1alpha1.explorer.QueryRequest.prototype.clearOrgIdsList = function() {
  return this.setOrgIdsList([]);
};


/**
 * optional google.protobuf.Timestamp start_time = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.explorer.QueryRequest.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.explorer.QueryRequest} returns this
*/
proto.api.v1alpha1.explorer.QueryRequest.prototype.setStartTime = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.explorer.QueryRequest} returns this
 */
proto.api.v1alpha1.explorer.QueryRequest.prototype.clearStartTime = function() {
  return this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.explorer.QueryRequest.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp end_time = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.explorer.QueryRequest.prototype.getEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.explorer.QueryRequest} returns this
*/
proto.api.v1alpha1.explorer.QueryRequest.prototype.setEndTime = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.explorer.QueryRequest} returns this
 */
proto.api.v1alpha1.explorer.QueryRequest.prototype.clearEndTime = function() {
  return this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.explorer.QueryRequest.prototype.hasEndTime = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string timezone = 8;
 * @return {string}
 */
proto.api.v1alpha1.explorer.QueryRequest.prototype.getTimezone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.explorer.QueryRequest} returns this
 */
proto.api.v1alpha1.explorer.QueryRequest.prototype.setTimezone = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional Parameters pipeline_parameters = 9;
 * @return {?proto.api.v1alpha1.explorer.Parameters}
 */
proto.api.v1alpha1.explorer.QueryRequest.prototype.getPipelineParameters = function() {
  return /** @type{?proto.api.v1alpha1.explorer.Parameters} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_explorer_entities_pb.Parameters, 9));
};


/**
 * @param {?proto.api.v1alpha1.explorer.Parameters|undefined} value
 * @return {!proto.api.v1alpha1.explorer.QueryRequest} returns this
*/
proto.api.v1alpha1.explorer.QueryRequest.prototype.setPipelineParameters = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.explorer.QueryRequest} returns this
 */
proto.api.v1alpha1.explorer.QueryRequest.prototype.clearPipelineParameters = function() {
  return this.setPipelineParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.explorer.QueryRequest.prototype.hasPipelineParameters = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string ui_trace_id = 10;
 * @return {string}
 */
proto.api.v1alpha1.explorer.QueryRequest.prototype.getUiTraceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.explorer.QueryRequest} returns this
 */
proto.api.v1alpha1.explorer.QueryRequest.prototype.setUiTraceId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string comment = 11;
 * @return {string}
 */
proto.api.v1alpha1.explorer.QueryRequest.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.explorer.QueryRequest} returns this
 */
proto.api.v1alpha1.explorer.QueryRequest.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional ExportFormat format = 12;
 * @return {!proto.api.v1alpha1.explorer.ExportFormat}
 */
proto.api.v1alpha1.explorer.QueryRequest.prototype.getFormat = function() {
  return /** @type {!proto.api.v1alpha1.explorer.ExportFormat} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.api.v1alpha1.explorer.ExportFormat} value
 * @return {!proto.api.v1alpha1.explorer.QueryRequest} returns this
 */
proto.api.v1alpha1.explorer.QueryRequest.prototype.setFormat = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
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
proto.api.v1alpha1.explorer.QueryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.explorer.QueryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.explorer.QueryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.explorer.QueryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
resultUrl: jspb.Message.getFieldWithDefault(msg, 1, ""),
resultSizeBytes: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.api.v1alpha1.explorer.QueryResponse}
 */
proto.api.v1alpha1.explorer.QueryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.explorer.QueryResponse;
  return proto.api.v1alpha1.explorer.QueryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.explorer.QueryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.explorer.QueryResponse}
 */
proto.api.v1alpha1.explorer.QueryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResultUrl(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setResultSizeBytes(value);
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
proto.api.v1alpha1.explorer.QueryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.explorer.QueryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.explorer.QueryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.explorer.QueryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResultSizeBytes();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string result_url = 1;
 * @return {string}
 */
proto.api.v1alpha1.explorer.QueryResponse.prototype.getResultUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.explorer.QueryResponse} returns this
 */
proto.api.v1alpha1.explorer.QueryResponse.prototype.setResultUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 result_size_bytes = 2;
 * @return {number}
 */
proto.api.v1alpha1.explorer.QueryResponse.prototype.getResultSizeBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.explorer.QueryResponse} returns this
 */
proto.api.v1alpha1.explorer.QueryResponse.prototype.setResultSizeBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


goog.object.extend(exports, proto.api.v1alpha1.explorer);
