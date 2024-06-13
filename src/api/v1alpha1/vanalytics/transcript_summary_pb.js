// source: api/v1alpha1/vanalytics/transcript_summary.proto
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

goog.exportSymbol('proto.api.v1alpha1.vanalytics.GetTranscriptSummaryRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.GetTranscriptSummaryResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.TranscriptSummary', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.TranscriptSummaryStatus', null, global);
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
proto.api.v1alpha1.vanalytics.GetTranscriptSummaryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.GetTranscriptSummaryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.GetTranscriptSummaryRequest.displayName = 'proto.api.v1alpha1.vanalytics.GetTranscriptSummaryRequest';
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
proto.api.v1alpha1.vanalytics.GetTranscriptSummaryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.GetTranscriptSummaryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.GetTranscriptSummaryResponse.displayName = 'proto.api.v1alpha1.vanalytics.GetTranscriptSummaryResponse';
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
proto.api.v1alpha1.vanalytics.TranscriptSummary = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.TranscriptSummary.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.TranscriptSummary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.TranscriptSummary.displayName = 'proto.api.v1alpha1.vanalytics.TranscriptSummary';
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
proto.api.v1alpha1.vanalytics.GetTranscriptSummaryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.GetTranscriptSummaryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.GetTranscriptSummaryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.GetTranscriptSummaryRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.vanalytics.GetTranscriptSummaryRequest}
 */
proto.api.v1alpha1.vanalytics.GetTranscriptSummaryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.GetTranscriptSummaryRequest;
  return proto.api.v1alpha1.vanalytics.GetTranscriptSummaryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.GetTranscriptSummaryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.GetTranscriptSummaryRequest}
 */
proto.api.v1alpha1.vanalytics.GetTranscriptSummaryRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.vanalytics.GetTranscriptSummaryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.GetTranscriptSummaryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.GetTranscriptSummaryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.GetTranscriptSummaryRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.vanalytics.GetTranscriptSummaryRequest.prototype.getTranscriptSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.vanalytics.GetTranscriptSummaryRequest} returns this
 */
proto.api.v1alpha1.vanalytics.GetTranscriptSummaryRequest.prototype.setTranscriptSid = function(value) {
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
proto.api.v1alpha1.vanalytics.GetTranscriptSummaryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.GetTranscriptSummaryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.GetTranscriptSummaryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.GetTranscriptSummaryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    transcriptSummary: (f = msg.getTranscriptSummary()) && proto.api.v1alpha1.vanalytics.TranscriptSummary.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.vanalytics.GetTranscriptSummaryResponse}
 */
proto.api.v1alpha1.vanalytics.GetTranscriptSummaryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.GetTranscriptSummaryResponse;
  return proto.api.v1alpha1.vanalytics.GetTranscriptSummaryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.GetTranscriptSummaryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.GetTranscriptSummaryResponse}
 */
proto.api.v1alpha1.vanalytics.GetTranscriptSummaryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.vanalytics.TranscriptSummary;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.TranscriptSummary.deserializeBinaryFromReader);
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
proto.api.v1alpha1.vanalytics.GetTranscriptSummaryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.GetTranscriptSummaryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.GetTranscriptSummaryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.GetTranscriptSummaryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTranscriptSummary();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.vanalytics.TranscriptSummary.serializeBinaryToWriter
    );
  }
};


/**
 * optional TranscriptSummary transcript_summary = 1;
 * @return {?proto.api.v1alpha1.vanalytics.TranscriptSummary}
 */
proto.api.v1alpha1.vanalytics.GetTranscriptSummaryResponse.prototype.getTranscriptSummary = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.TranscriptSummary} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.TranscriptSummary, 1));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.TranscriptSummary|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.GetTranscriptSummaryResponse} returns this
*/
proto.api.v1alpha1.vanalytics.GetTranscriptSummaryResponse.prototype.setTranscriptSummary = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.GetTranscriptSummaryResponse} returns this
 */
proto.api.v1alpha1.vanalytics.GetTranscriptSummaryResponse.prototype.clearTranscriptSummary = function() {
  return this.setTranscriptSummary(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.GetTranscriptSummaryResponse.prototype.hasTranscriptSummary = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.TranscriptSummary.repeatedFields_ = [1];



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
proto.api.v1alpha1.vanalytics.TranscriptSummary.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.TranscriptSummary.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.TranscriptSummary} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.TranscriptSummary.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.vanalytics.TranscriptSummary}
 */
proto.api.v1alpha1.vanalytics.TranscriptSummary.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.TranscriptSummary;
  return proto.api.v1alpha1.vanalytics.TranscriptSummary.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.TranscriptSummary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.TranscriptSummary}
 */
proto.api.v1alpha1.vanalytics.TranscriptSummary.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.api.v1alpha1.vanalytics.TranscriptSummaryStatus} */ (reader.readEnum());
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
proto.api.v1alpha1.vanalytics.TranscriptSummary.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.TranscriptSummary.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.TranscriptSummary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.TranscriptSummary.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.vanalytics.TranscriptSummary.prototype.getBulletPointsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.vanalytics.TranscriptSummary} returns this
 */
proto.api.v1alpha1.vanalytics.TranscriptSummary.prototype.setBulletPointsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.TranscriptSummary} returns this
 */
proto.api.v1alpha1.vanalytics.TranscriptSummary.prototype.addBulletPoints = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.TranscriptSummary} returns this
 */
proto.api.v1alpha1.vanalytics.TranscriptSummary.prototype.clearBulletPointsList = function() {
  return this.setBulletPointsList([]);
};


/**
 * optional TranscriptSummaryStatus status = 2;
 * @return {!proto.api.v1alpha1.vanalytics.TranscriptSummaryStatus}
 */
proto.api.v1alpha1.vanalytics.TranscriptSummary.prototype.getStatus = function() {
  return /** @type {!proto.api.v1alpha1.vanalytics.TranscriptSummaryStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.v1alpha1.vanalytics.TranscriptSummaryStatus} value
 * @return {!proto.api.v1alpha1.vanalytics.TranscriptSummary} returns this
 */
proto.api.v1alpha1.vanalytics.TranscriptSummary.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.api.v1alpha1.vanalytics.TranscriptSummaryStatus = {
  QUEUED: 0,
  QUEUED_ERRORED: -1,
  SUMMARIZED: 1,
  SUMMARIZED_ERRORED: -2,
  VISIBLE: 2
};

goog.object.extend(exports, proto.api.v1alpha1.vanalytics);
