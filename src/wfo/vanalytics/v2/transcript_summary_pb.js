// source: wfo/vanalytics/v2/transcript_summary.proto
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

var api_commons_vanalytics_pb = require('../../../api/commons/vanalytics_pb.js');
goog.object.extend(proto, api_commons_vanalytics_pb);
goog.exportSymbol('proto.wfo.vanalytics.v2.GetTranscriptSummaryRequest', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.GetTranscriptSummaryResponse', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.TranscriptSummary', null, global);
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
proto.wfo.vanalytics.v2.GetTranscriptSummaryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.GetTranscriptSummaryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.GetTranscriptSummaryRequest.displayName = 'proto.wfo.vanalytics.v2.GetTranscriptSummaryRequest';
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
proto.wfo.vanalytics.v2.GetTranscriptSummaryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.GetTranscriptSummaryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.GetTranscriptSummaryResponse.displayName = 'proto.wfo.vanalytics.v2.GetTranscriptSummaryResponse';
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
proto.wfo.vanalytics.v2.TranscriptSummary = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.TranscriptSummary.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.TranscriptSummary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.TranscriptSummary.displayName = 'proto.wfo.vanalytics.v2.TranscriptSummary';
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
proto.wfo.vanalytics.v2.GetTranscriptSummaryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.GetTranscriptSummaryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.GetTranscriptSummaryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.GetTranscriptSummaryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    transcriptSid: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.wfo.vanalytics.v2.GetTranscriptSummaryRequest}
 */
proto.wfo.vanalytics.v2.GetTranscriptSummaryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.GetTranscriptSummaryRequest;
  return proto.wfo.vanalytics.v2.GetTranscriptSummaryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.GetTranscriptSummaryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.GetTranscriptSummaryRequest}
 */
proto.wfo.vanalytics.v2.GetTranscriptSummaryRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.wfo.vanalytics.v2.GetTranscriptSummaryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.GetTranscriptSummaryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.GetTranscriptSummaryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.GetTranscriptSummaryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTranscriptSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 transcript_sid = 2;
 * @return {number}
 */
proto.wfo.vanalytics.v2.GetTranscriptSummaryRequest.prototype.getTranscriptSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.wfo.vanalytics.v2.GetTranscriptSummaryRequest} returns this
 */
proto.wfo.vanalytics.v2.GetTranscriptSummaryRequest.prototype.setTranscriptSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.wfo.vanalytics.v2.GetTranscriptSummaryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.GetTranscriptSummaryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.GetTranscriptSummaryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.GetTranscriptSummaryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    transcriptSummary: (f = msg.getTranscriptSummary()) && proto.wfo.vanalytics.v2.TranscriptSummary.toObject(includeInstance, f)
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
 * @return {!proto.wfo.vanalytics.v2.GetTranscriptSummaryResponse}
 */
proto.wfo.vanalytics.v2.GetTranscriptSummaryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.GetTranscriptSummaryResponse;
  return proto.wfo.vanalytics.v2.GetTranscriptSummaryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.GetTranscriptSummaryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.GetTranscriptSummaryResponse}
 */
proto.wfo.vanalytics.v2.GetTranscriptSummaryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wfo.vanalytics.v2.TranscriptSummary;
      reader.readMessage(value,proto.wfo.vanalytics.v2.TranscriptSummary.deserializeBinaryFromReader);
      msg.setTranscriptSummary(value);
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
proto.wfo.vanalytics.v2.GetTranscriptSummaryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.GetTranscriptSummaryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.GetTranscriptSummaryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.GetTranscriptSummaryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTranscriptSummary();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.wfo.vanalytics.v2.TranscriptSummary.serializeBinaryToWriter
    );
  }
};


/**
 * optional TranscriptSummary transcript_summary = 1;
 * @return {?proto.wfo.vanalytics.v2.TranscriptSummary}
 */
proto.wfo.vanalytics.v2.GetTranscriptSummaryResponse.prototype.getTranscriptSummary = function() {
  return /** @type{?proto.wfo.vanalytics.v2.TranscriptSummary} */ (
    jspb.Message.getWrapperField(this, proto.wfo.vanalytics.v2.TranscriptSummary, 1));
};


/**
 * @param {?proto.wfo.vanalytics.v2.TranscriptSummary|undefined} value
 * @return {!proto.wfo.vanalytics.v2.GetTranscriptSummaryResponse} returns this
*/
proto.wfo.vanalytics.v2.GetTranscriptSummaryResponse.prototype.setTranscriptSummary = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.GetTranscriptSummaryResponse} returns this
 */
proto.wfo.vanalytics.v2.GetTranscriptSummaryResponse.prototype.clearTranscriptSummary = function() {
  return this.setTranscriptSummary(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.GetTranscriptSummaryResponse.prototype.hasTranscriptSummary = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.TranscriptSummary.repeatedFields_ = [1];



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
proto.wfo.vanalytics.v2.TranscriptSummary.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.TranscriptSummary.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.TranscriptSummary} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptSummary.toObject = function(includeInstance, msg) {
  var f, obj = {
    bulletPointsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    status: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.wfo.vanalytics.v2.TranscriptSummary}
 */
proto.wfo.vanalytics.v2.TranscriptSummary.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.TranscriptSummary;
  return proto.wfo.vanalytics.v2.TranscriptSummary.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.TranscriptSummary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.TranscriptSummary}
 */
proto.wfo.vanalytics.v2.TranscriptSummary.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addBulletPoints(value);
      break;
    case 2:
      var value = /** @type {!proto.api.commons.TranscriptSummaryStatus} */ (reader.readEnum());
      msg.setStatus(value);
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
proto.wfo.vanalytics.v2.TranscriptSummary.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.TranscriptSummary.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.TranscriptSummary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.TranscriptSummary.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBulletPointsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * repeated string bullet_points = 1;
 * @return {!Array<string>}
 */
proto.wfo.vanalytics.v2.TranscriptSummary.prototype.getBulletPointsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptSummary} returns this
 */
proto.wfo.vanalytics.v2.TranscriptSummary.prototype.setBulletPointsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.TranscriptSummary} returns this
 */
proto.wfo.vanalytics.v2.TranscriptSummary.prototype.addBulletPoints = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.TranscriptSummary} returns this
 */
proto.wfo.vanalytics.v2.TranscriptSummary.prototype.clearBulletPointsList = function() {
  return this.setBulletPointsList([]);
};


/**
 * optional api.commons.TranscriptSummaryStatus status = 2;
 * @return {!proto.api.commons.TranscriptSummaryStatus}
 */
proto.wfo.vanalytics.v2.TranscriptSummary.prototype.getStatus = function() {
  return /** @type {!proto.api.commons.TranscriptSummaryStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.TranscriptSummaryStatus} value
 * @return {!proto.wfo.vanalytics.v2.TranscriptSummary} returns this
 */
proto.wfo.vanalytics.v2.TranscriptSummary.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


goog.object.extend(exports, proto.wfo.vanalytics.v2);
