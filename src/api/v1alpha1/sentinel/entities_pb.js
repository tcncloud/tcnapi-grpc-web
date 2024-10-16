// source: api/v1alpha1/sentinel/entities.proto
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

var api_commons_logging_pb = require('../../../api/commons/logging_pb.js');
goog.object.extend(proto, api_commons_logging_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.api.v1alpha1.sentinel.LogEvent', null, global);
goog.exportSymbol('proto.api.v1alpha1.sentinel.SendEventsReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.sentinel.SendEventsRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.sentinel.SentinelEvent', null, global);
goog.exportSymbol('proto.api.v1alpha1.sentinel.SentinelEvent.EventCase', null, global);
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
proto.api.v1alpha1.sentinel.SentinelEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.v1alpha1.sentinel.SentinelEvent.oneofGroups_);
};
goog.inherits(proto.api.v1alpha1.sentinel.SentinelEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.sentinel.SentinelEvent.displayName = 'proto.api.v1alpha1.sentinel.SentinelEvent';
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
proto.api.v1alpha1.sentinel.LogEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.sentinel.LogEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.sentinel.LogEvent.displayName = 'proto.api.v1alpha1.sentinel.LogEvent';
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
proto.api.v1alpha1.sentinel.SendEventsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.sentinel.SendEventsReq.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.sentinel.SendEventsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.sentinel.SendEventsReq.displayName = 'proto.api.v1alpha1.sentinel.SendEventsReq';
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
proto.api.v1alpha1.sentinel.SendEventsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.sentinel.SendEventsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.sentinel.SendEventsRes.displayName = 'proto.api.v1alpha1.sentinel.SendEventsRes';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.v1alpha1.sentinel.SentinelEvent.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.api.v1alpha1.sentinel.SentinelEvent.EventCase = {
  EVENT_NOT_SET: 0,
  LOG_EVENT: 1
};

/**
 * @return {proto.api.v1alpha1.sentinel.SentinelEvent.EventCase}
 */
proto.api.v1alpha1.sentinel.SentinelEvent.prototype.getEventCase = function() {
  return /** @type {proto.api.v1alpha1.sentinel.SentinelEvent.EventCase} */(jspb.Message.computeOneofCase(this, proto.api.v1alpha1.sentinel.SentinelEvent.oneofGroups_[0]));
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
proto.api.v1alpha1.sentinel.SentinelEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.sentinel.SentinelEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.sentinel.SentinelEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.sentinel.SentinelEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
logEvent: (f = msg.getLogEvent()) && proto.api.v1alpha1.sentinel.LogEvent.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.sentinel.SentinelEvent}
 */
proto.api.v1alpha1.sentinel.SentinelEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.sentinel.SentinelEvent;
  return proto.api.v1alpha1.sentinel.SentinelEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.sentinel.SentinelEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.sentinel.SentinelEvent}
 */
proto.api.v1alpha1.sentinel.SentinelEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.sentinel.LogEvent;
      reader.readMessage(value,proto.api.v1alpha1.sentinel.LogEvent.deserializeBinaryFromReader);
      msg.setLogEvent(value);
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
proto.api.v1alpha1.sentinel.SentinelEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.sentinel.SentinelEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.sentinel.SentinelEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.sentinel.SentinelEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLogEvent();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.sentinel.LogEvent.serializeBinaryToWriter
    );
  }
};


/**
 * optional LogEvent log_event = 1;
 * @return {?proto.api.v1alpha1.sentinel.LogEvent}
 */
proto.api.v1alpha1.sentinel.SentinelEvent.prototype.getLogEvent = function() {
  return /** @type{?proto.api.v1alpha1.sentinel.LogEvent} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.sentinel.LogEvent, 1));
};


/**
 * @param {?proto.api.v1alpha1.sentinel.LogEvent|undefined} value
 * @return {!proto.api.v1alpha1.sentinel.SentinelEvent} returns this
*/
proto.api.v1alpha1.sentinel.SentinelEvent.prototype.setLogEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.api.v1alpha1.sentinel.SentinelEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.sentinel.SentinelEvent} returns this
 */
proto.api.v1alpha1.sentinel.SentinelEvent.prototype.clearLogEvent = function() {
  return this.setLogEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.sentinel.SentinelEvent.prototype.hasLogEvent = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.api.v1alpha1.sentinel.LogEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.sentinel.LogEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.sentinel.LogEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.sentinel.LogEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
traceId: jspb.Message.getFieldWithDefault(msg, 3, ""),
sessionId: jspb.Message.getFieldWithDefault(msg, 4, ""),
message: jspb.Message.getFieldWithDefault(msg, 5, ""),
location: jspb.Message.getFieldWithDefault(msg, 6, ""),
stackTrace: jspb.Message.getFieldWithDefault(msg, 7, ""),
timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
metadataMap: (f = msg.getMetadataMap()) ? f.toObject(includeInstance, undefined) : [],
severity: jspb.Message.getFieldWithDefault(msg, 10, 0)
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
 * @return {!proto.api.v1alpha1.sentinel.LogEvent}
 */
proto.api.v1alpha1.sentinel.LogEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.sentinel.LogEvent;
  return proto.api.v1alpha1.sentinel.LogEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.sentinel.LogEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.sentinel.LogEvent}
 */
proto.api.v1alpha1.sentinel.LogEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTraceId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setStackTrace(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 9:
      var value = msg.getMetadataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 10:
      var value = /** @type {!proto.api.commons.Level} */ (reader.readEnum());
      msg.setSeverity(value);
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
proto.api.v1alpha1.sentinel.LogEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.sentinel.LogEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.sentinel.LogEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.sentinel.LogEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTraceId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLocation();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getStackTrace();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMetadataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(9, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getSeverity();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
};


/**
 * optional string trace_id = 3;
 * @return {string}
 */
proto.api.v1alpha1.sentinel.LogEvent.prototype.getTraceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.sentinel.LogEvent} returns this
 */
proto.api.v1alpha1.sentinel.LogEvent.prototype.setTraceId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string session_id = 4;
 * @return {string}
 */
proto.api.v1alpha1.sentinel.LogEvent.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.sentinel.LogEvent} returns this
 */
proto.api.v1alpha1.sentinel.LogEvent.prototype.setSessionId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.api.v1alpha1.sentinel.LogEvent.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.sentinel.LogEvent} returns this
 */
proto.api.v1alpha1.sentinel.LogEvent.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string location = 6;
 * @return {string}
 */
proto.api.v1alpha1.sentinel.LogEvent.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.sentinel.LogEvent} returns this
 */
proto.api.v1alpha1.sentinel.LogEvent.prototype.setLocation = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string stack_trace = 7;
 * @return {string}
 */
proto.api.v1alpha1.sentinel.LogEvent.prototype.getStackTrace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.sentinel.LogEvent} returns this
 */
proto.api.v1alpha1.sentinel.LogEvent.prototype.setStackTrace = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.sentinel.LogEvent.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.sentinel.LogEvent} returns this
*/
proto.api.v1alpha1.sentinel.LogEvent.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.sentinel.LogEvent} returns this
 */
proto.api.v1alpha1.sentinel.LogEvent.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.sentinel.LogEvent.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * map<string, string> metadata = 9;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.api.v1alpha1.sentinel.LogEvent.prototype.getMetadataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 9, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.sentinel.LogEvent} returns this
 */
proto.api.v1alpha1.sentinel.LogEvent.prototype.clearMetadataMap = function() {
  this.getMetadataMap().clear();
  return this;
};


/**
 * optional api.commons.Level severity = 10;
 * @return {!proto.api.commons.Level}
 */
proto.api.v1alpha1.sentinel.LogEvent.prototype.getSeverity = function() {
  return /** @type {!proto.api.commons.Level} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.api.commons.Level} value
 * @return {!proto.api.v1alpha1.sentinel.LogEvent} returns this
 */
proto.api.v1alpha1.sentinel.LogEvent.prototype.setSeverity = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.sentinel.SendEventsReq.repeatedFields_ = [1];



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
proto.api.v1alpha1.sentinel.SendEventsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.sentinel.SendEventsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.sentinel.SendEventsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.sentinel.SendEventsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.api.v1alpha1.sentinel.SentinelEvent.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.sentinel.SendEventsReq}
 */
proto.api.v1alpha1.sentinel.SendEventsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.sentinel.SendEventsReq;
  return proto.api.v1alpha1.sentinel.SendEventsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.sentinel.SendEventsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.sentinel.SendEventsReq}
 */
proto.api.v1alpha1.sentinel.SendEventsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.sentinel.SentinelEvent;
      reader.readMessage(value,proto.api.v1alpha1.sentinel.SentinelEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.api.v1alpha1.sentinel.SendEventsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.sentinel.SendEventsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.sentinel.SendEventsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.sentinel.SendEventsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.sentinel.SentinelEvent.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SentinelEvent events = 1;
 * @return {!Array<!proto.api.v1alpha1.sentinel.SentinelEvent>}
 */
proto.api.v1alpha1.sentinel.SendEventsReq.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.sentinel.SentinelEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.sentinel.SentinelEvent, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.sentinel.SentinelEvent>} value
 * @return {!proto.api.v1alpha1.sentinel.SendEventsReq} returns this
*/
proto.api.v1alpha1.sentinel.SendEventsReq.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.sentinel.SentinelEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.sentinel.SentinelEvent}
 */
proto.api.v1alpha1.sentinel.SendEventsReq.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.sentinel.SentinelEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.sentinel.SendEventsReq} returns this
 */
proto.api.v1alpha1.sentinel.SendEventsReq.prototype.clearEventsList = function() {
  return this.setEventsList([]);
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
proto.api.v1alpha1.sentinel.SendEventsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.sentinel.SendEventsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.sentinel.SendEventsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.sentinel.SendEventsRes.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.api.v1alpha1.sentinel.SendEventsRes}
 */
proto.api.v1alpha1.sentinel.SendEventsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.sentinel.SendEventsRes;
  return proto.api.v1alpha1.sentinel.SendEventsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.sentinel.SendEventsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.sentinel.SendEventsRes}
 */
proto.api.v1alpha1.sentinel.SendEventsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.api.v1alpha1.sentinel.SendEventsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.sentinel.SendEventsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.sentinel.SendEventsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.sentinel.SendEventsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.api.v1alpha1.sentinel);
