// source: wfo/vanalytics/v2/flag_transcript.proto
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

var wfo_vanalytics_v2_flag_pb = require('../../../wfo/vanalytics/v2/flag_pb.js');
goog.object.extend(proto, wfo_vanalytics_v2_flag_pb);
var wfo_vanalytics_v2_transcript_pb = require('../../../wfo/vanalytics/v2/transcript_pb.js');
goog.object.extend(proto, wfo_vanalytics_v2_transcript_pb);
goog.exportSymbol('proto.wfo.vanalytics.v2.CreateFlagTranscriptRequest', null, global);
goog.exportSymbol('proto.wfo.vanalytics.v2.CreateFlagTranscriptResponse', null, global);
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
proto.wfo.vanalytics.v2.CreateFlagTranscriptRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wfo.vanalytics.v2.CreateFlagTranscriptRequest.repeatedFields_, null);
};
goog.inherits(proto.wfo.vanalytics.v2.CreateFlagTranscriptRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.CreateFlagTranscriptRequest.displayName = 'proto.wfo.vanalytics.v2.CreateFlagTranscriptRequest';
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
proto.wfo.vanalytics.v2.CreateFlagTranscriptResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wfo.vanalytics.v2.CreateFlagTranscriptResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wfo.vanalytics.v2.CreateFlagTranscriptResponse.displayName = 'proto.wfo.vanalytics.v2.CreateFlagTranscriptResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wfo.vanalytics.v2.CreateFlagTranscriptRequest.repeatedFields_ = [1];



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
proto.wfo.vanalytics.v2.CreateFlagTranscriptRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.CreateFlagTranscriptRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.CreateFlagTranscriptRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.CreateFlagTranscriptRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    transcriptSidsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    flag: (f = msg.getFlag()) && wfo_vanalytics_v2_flag_pb.Flag.toObject(includeInstance, f)
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
 * @return {!proto.wfo.vanalytics.v2.CreateFlagTranscriptRequest}
 */
proto.wfo.vanalytics.v2.CreateFlagTranscriptRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.CreateFlagTranscriptRequest;
  return proto.wfo.vanalytics.v2.CreateFlagTranscriptRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.CreateFlagTranscriptRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.CreateFlagTranscriptRequest}
 */
proto.wfo.vanalytics.v2.CreateFlagTranscriptRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addTranscriptSids(values[i]);
      }
      break;
    case 2:
      var value = new wfo_vanalytics_v2_flag_pb.Flag;
      reader.readMessage(value,wfo_vanalytics_v2_flag_pb.Flag.deserializeBinaryFromReader);
      msg.setFlag(value);
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
proto.wfo.vanalytics.v2.CreateFlagTranscriptRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.CreateFlagTranscriptRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.CreateFlagTranscriptRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.CreateFlagTranscriptRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTranscriptSidsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      1,
      f
    );
  }
  f = message.getFlag();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      wfo_vanalytics_v2_flag_pb.Flag.serializeBinaryToWriter
    );
  }
};


/**
 * repeated int64 transcript_sids = 1;
 * @return {!Array<number>}
 */
proto.wfo.vanalytics.v2.CreateFlagTranscriptRequest.prototype.getTranscriptSidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.wfo.vanalytics.v2.CreateFlagTranscriptRequest} returns this
 */
proto.wfo.vanalytics.v2.CreateFlagTranscriptRequest.prototype.setTranscriptSidsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.wfo.vanalytics.v2.CreateFlagTranscriptRequest} returns this
 */
proto.wfo.vanalytics.v2.CreateFlagTranscriptRequest.prototype.addTranscriptSids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wfo.vanalytics.v2.CreateFlagTranscriptRequest} returns this
 */
proto.wfo.vanalytics.v2.CreateFlagTranscriptRequest.prototype.clearTranscriptSidsList = function() {
  return this.setTranscriptSidsList([]);
};


/**
 * optional Flag flag = 2;
 * @return {?proto.wfo.vanalytics.v2.Flag}
 */
proto.wfo.vanalytics.v2.CreateFlagTranscriptRequest.prototype.getFlag = function() {
  return /** @type{?proto.wfo.vanalytics.v2.Flag} */ (
    jspb.Message.getWrapperField(this, wfo_vanalytics_v2_flag_pb.Flag, 2));
};


/**
 * @param {?proto.wfo.vanalytics.v2.Flag|undefined} value
 * @return {!proto.wfo.vanalytics.v2.CreateFlagTranscriptRequest} returns this
*/
proto.wfo.vanalytics.v2.CreateFlagTranscriptRequest.prototype.setFlag = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wfo.vanalytics.v2.CreateFlagTranscriptRequest} returns this
 */
proto.wfo.vanalytics.v2.CreateFlagTranscriptRequest.prototype.clearFlag = function() {
  return this.setFlag(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wfo.vanalytics.v2.CreateFlagTranscriptRequest.prototype.hasFlag = function() {
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
proto.wfo.vanalytics.v2.CreateFlagTranscriptResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.wfo.vanalytics.v2.CreateFlagTranscriptResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wfo.vanalytics.v2.CreateFlagTranscriptResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.CreateFlagTranscriptResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wfo.vanalytics.v2.CreateFlagTranscriptResponse}
 */
proto.wfo.vanalytics.v2.CreateFlagTranscriptResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wfo.vanalytics.v2.CreateFlagTranscriptResponse;
  return proto.wfo.vanalytics.v2.CreateFlagTranscriptResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wfo.vanalytics.v2.CreateFlagTranscriptResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wfo.vanalytics.v2.CreateFlagTranscriptResponse}
 */
proto.wfo.vanalytics.v2.CreateFlagTranscriptResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.wfo.vanalytics.v2.CreateFlagTranscriptResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wfo.vanalytics.v2.CreateFlagTranscriptResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wfo.vanalytics.v2.CreateFlagTranscriptResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wfo.vanalytics.v2.CreateFlagTranscriptResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.wfo.vanalytics.v2);