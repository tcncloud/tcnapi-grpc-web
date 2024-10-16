// source: wfo/vanalytics/v2/flag_transcript_filter.proto
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

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
var wfo_vanalytics_v2_filter_snapshot_pb = require('../../../wfo/vanalytics/v2/filter_snapshot_pb.js');
goog.object.extend(proto, wfo_vanalytics_v2_filter_snapshot_pb);
var wfo_vanalytics_v2_flag_snapshot_pb = require('../../../wfo/vanalytics/v2/flag_snapshot_pb.js');
goog.object.extend(proto, wfo_vanalytics_v2_flag_snapshot_pb);
goog.exportSymbol('proto.wfo.vanalytics.v2.FlagTranscriptFilter', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersRequest', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersResponse', null, global);
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
proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersRequest.displayName = 'proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersRequest';
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
proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersResponse.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersResponse.displayName = 'proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersResponse';
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
proto.wfo.vanalytics.v2.FlagTranscriptFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.FlagTranscriptFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.FlagTranscriptFilter.displayName = 'proto.wfo.vanalytics.v2.FlagTranscriptFilter';
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
proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
transcriptSid: jspb.Message.getFieldWithDefault(msg, 2, 0),
flagSnapshotMask: (f = msg.getFlagSnapshotMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
filterSnapshotMask: (f = msg.getFilterSnapshotMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersRequest}
 */
proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersRequest;
  return proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersRequest}
 */
proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTranscriptSid(value);
      break;
    case 3:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFlagSnapshotMask(value);
      break;
    case 4:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFilterSnapshotMask(value);
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
proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTranscriptSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getFlagSnapshotMask();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getFilterSnapshotMask();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 transcript_sid = 2;
 * @return {number}
 */
proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersRequest.prototype.getTranscriptSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersRequest} returns this
 */
proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersRequest.prototype.setTranscriptSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional google.protobuf.FieldMask flag_snapshot_mask = 3;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersRequest.prototype.getFlagSnapshotMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 3));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersRequest} returns this
*/
proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersRequest.prototype.setFlagSnapshotMask = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersRequest} returns this
 */
proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersRequest.prototype.clearFlagSnapshotMask = function() {
  return this.setFlagSnapshotMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersRequest.prototype.hasFlagSnapshotMask = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.FieldMask filter_snapshot_mask = 4;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersRequest.prototype.getFilterSnapshotMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 4));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersRequest} returns this
*/
proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersRequest.prototype.setFilterSnapshotMask = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersRequest} returns this
 */
proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersRequest.prototype.clearFilterSnapshotMask = function() {
  return this.setFilterSnapshotMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersRequest.prototype.hasFilterSnapshotMask = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersResponse.repeatedFields_ = [1];



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
proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
flagTranscriptFiltersList: jspb.Message.toObjectList(msg.getFlagTranscriptFiltersList(),
    proto.wfo.vanalytics.v2.FlagTranscriptFilter.toObject, includeInstance)
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
 * @return {!proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersResponse}
 */
proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersResponse;
  return proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersResponse}
 */
proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wfo.vanalytics.v2.FlagTranscriptFilter;
      reader.readMessage(value,proto.wfo.vanalytics.v2.FlagTranscriptFilter.deserializeBinaryFromReader);
      msg.addFlagTranscriptFilters(value);
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
proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFlagTranscriptFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.wfo.vanalytics.v2.FlagTranscriptFilter.serializeBinaryToWriter
    );
  }
};


/**
 * repeated FlagTranscriptFilter flag_transcript_filters = 1;
 * @return {!Array<!proto.wfo.vanalytics.v2.FlagTranscriptFilter>}
 */
proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersResponse.prototype.getFlagTranscriptFiltersList = function() {
  return /** @type{!Array<!proto.wfo.vanalytics.v2.FlagTranscriptFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.wfo.vanalytics.v2.FlagTranscriptFilter, 1));
};


/**
 * @param {!Array<!proto.wfo.vanalytics.v2.FlagTranscriptFilter>} value
 * @return {!proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersResponse} returns this
*/
proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersResponse.prototype.setFlagTranscriptFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.wfo.vanalytics.v2.FlagTranscriptFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.FlagTranscriptFilter}
 */
proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersResponse.prototype.addFlagTranscriptFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.wfo.vanalytics.v2.FlagTranscriptFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersResponse} returns this
 */
proto.wfo.vanalytics.v2.ListFlagTranscriptFiltersResponse.prototype.clearFlagTranscriptFiltersList = function() {
  return this.setFlagTranscriptFiltersList([]);
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
proto.wfo.vanalytics.v2.FlagTranscriptFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.FlagTranscriptFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.FlagTranscriptFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.FlagTranscriptFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
flagSnapshot: (f = msg.getFlagSnapshot()) && wfo_vanalytics_v2_flag_snapshot_pb.FlagSnapshot.toObject(includeInstance, f),
filterSnapshot: (f = msg.getFilterSnapshot()) && wfo_vanalytics_v2_filter_snapshot_pb.FilterSnapshot.toObject(includeInstance, f)
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
 * @return {!proto.wfo.vanalytics.v2.FlagTranscriptFilter}
 */
proto.wfo.vanalytics.v2.FlagTranscriptFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.FlagTranscriptFilter;
  return proto.wfo.vanalytics.v2.FlagTranscriptFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.FlagTranscriptFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.FlagTranscriptFilter}
 */
proto.wfo.vanalytics.v2.FlagTranscriptFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new wfo_vanalytics_v2_flag_snapshot_pb.FlagSnapshot;
      reader.readMessage(value,wfo_vanalytics_v2_flag_snapshot_pb.FlagSnapshot.deserializeBinaryFromReader);
      msg.setFlagSnapshot(value);
      break;
    case 2:
      var value = new wfo_vanalytics_v2_filter_snapshot_pb.FilterSnapshot;
      reader.readMessage(value,wfo_vanalytics_v2_filter_snapshot_pb.FilterSnapshot.deserializeBinaryFromReader);
      msg.setFilterSnapshot(value);
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
proto.wfo.vanalytics.v2.FlagTranscriptFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.FlagTranscriptFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.FlagTranscriptFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.FlagTranscriptFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFlagSnapshot();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      wfo_vanalytics_v2_flag_snapshot_pb.FlagSnapshot.serializeBinaryToWriter
    );
  }
  f = message.getFilterSnapshot();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      wfo_vanalytics_v2_filter_snapshot_pb.FilterSnapshot.serializeBinaryToWriter
    );
  }
};


/**
 * optional FlagSnapshot flag_snapshot = 1;
 * @return {?proto.wfo.vanalytics.v2.FlagSnapshot}
 */
proto.wfo.vanalytics.v2.FlagTranscriptFilter.prototype.getFlagSnapshot = function() {
  return /** @type{?proto.wfo.vanalytics.v2.FlagSnapshot} */ (
    jspb.Message.getWrapperField(this, wfo_vanalytics_v2_flag_snapshot_pb.FlagSnapshot, 1));
};


/**
 * @param {?proto.wfo.vanalytics.v2.FlagSnapshot|undefined} value
 * @return {!proto.wfo.vanalytics.v2.FlagTranscriptFilter} returns this
*/
proto.wfo.vanalytics.v2.FlagTranscriptFilter.prototype.setFlagSnapshot = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.FlagTranscriptFilter} returns this
 */
proto.wfo.vanalytics.v2.FlagTranscriptFilter.prototype.clearFlagSnapshot = function() {
  return this.setFlagSnapshot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.FlagTranscriptFilter.prototype.hasFlagSnapshot = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional FilterSnapshot filter_snapshot = 2;
 * @return {?proto.wfo.vanalytics.v2.FilterSnapshot}
 */
proto.wfo.vanalytics.v2.FlagTranscriptFilter.prototype.getFilterSnapshot = function() {
  return /** @type{?proto.wfo.vanalytics.v2.FilterSnapshot} */ (
    jspb.Message.getWrapperField(this, wfo_vanalytics_v2_filter_snapshot_pb.FilterSnapshot, 2));
};


/**
 * @param {?proto.wfo.vanalytics.v2.FilterSnapshot|undefined} value
 * @return {!proto.wfo.vanalytics.v2.FlagTranscriptFilter} returns this
*/
proto.wfo.vanalytics.v2.FlagTranscriptFilter.prototype.setFilterSnapshot = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.FlagTranscriptFilter} returns this
 */
proto.wfo.vanalytics.v2.FlagTranscriptFilter.prototype.clearFilterSnapshot = function() {
  return this.setFilterSnapshot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.FlagTranscriptFilter.prototype.hasFilterSnapshot = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.wfo.vanalytics.v2);
