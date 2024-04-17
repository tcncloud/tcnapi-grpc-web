// source: services/omnichannel/asm/entities/v1alpha1/session.proto
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

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.services.omnichannel.asm.entities.v1alpha1.AsmSession', null, global);
goog.exportSymbol('proto.services.omnichannel.asm.entities.v1alpha1.AsmUserDetails', null, global);
goog.exportSymbol('proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration', null, global);
goog.exportSymbol('proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession', null, global);
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
proto.services.omnichannel.asm.entities.v1alpha1.AsmSession = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.omnichannel.asm.entities.v1alpha1.AsmSession, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.omnichannel.asm.entities.v1alpha1.AsmSession.displayName = 'proto.services.omnichannel.asm.entities.v1alpha1.AsmSession';
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
proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession.displayName = 'proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession';
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
proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration.displayName = 'proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration';
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
proto.services.omnichannel.asm.entities.v1alpha1.AsmUserDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.omnichannel.asm.entities.v1alpha1.AsmUserDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.omnichannel.asm.entities.v1alpha1.AsmUserDetails.displayName = 'proto.services.omnichannel.asm.entities.v1alpha1.AsmUserDetails';
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
proto.services.omnichannel.asm.entities.v1alpha1.AsmSession.prototype.toObject = function(opt_includeInstance) {
  return proto.services.omnichannel.asm.entities.v1alpha1.AsmSession.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.omnichannel.asm.entities.v1alpha1.AsmSession} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.omnichannel.asm.entities.v1alpha1.AsmSession.toObject = function(includeInstance, msg) {
  var f, obj = {
    asmSessionSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    asmSessionStart: (f = msg.getAsmSessionStart()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    asmSessionEnd: (f = msg.getAsmSessionEnd()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    voiceSession: (f = msg.getVoiceSession()) && proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession.toObject(includeInstance, f)
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
 * @return {!proto.services.omnichannel.asm.entities.v1alpha1.AsmSession}
 */
proto.services.omnichannel.asm.entities.v1alpha1.AsmSession.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.omnichannel.asm.entities.v1alpha1.AsmSession;
  return proto.services.omnichannel.asm.entities.v1alpha1.AsmSession.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.omnichannel.asm.entities.v1alpha1.AsmSession} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.omnichannel.asm.entities.v1alpha1.AsmSession}
 */
proto.services.omnichannel.asm.entities.v1alpha1.AsmSession.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAsmSessionSid(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setAsmSessionStart(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setAsmSessionEnd(value);
      break;
    case 6:
      var value = new proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession;
      reader.readMessage(value,proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession.deserializeBinaryFromReader);
      msg.setVoiceSession(value);
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
proto.services.omnichannel.asm.entities.v1alpha1.AsmSession.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.omnichannel.asm.entities.v1alpha1.AsmSession.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.omnichannel.asm.entities.v1alpha1.AsmSession} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.omnichannel.asm.entities.v1alpha1.AsmSession.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAsmSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getAsmSessionStart();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAsmSessionEnd();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getVoiceSession();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 asm_session_sid = 1;
 * @return {number}
 */
proto.services.omnichannel.asm.entities.v1alpha1.AsmSession.prototype.getAsmSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.omnichannel.asm.entities.v1alpha1.AsmSession} returns this
 */
proto.services.omnichannel.asm.entities.v1alpha1.AsmSession.prototype.setAsmSessionSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp asm_session_start = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.services.omnichannel.asm.entities.v1alpha1.AsmSession.prototype.getAsmSessionStart = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.services.omnichannel.asm.entities.v1alpha1.AsmSession} returns this
*/
proto.services.omnichannel.asm.entities.v1alpha1.AsmSession.prototype.setAsmSessionStart = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.omnichannel.asm.entities.v1alpha1.AsmSession} returns this
 */
proto.services.omnichannel.asm.entities.v1alpha1.AsmSession.prototype.clearAsmSessionStart = function() {
  return this.setAsmSessionStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.omnichannel.asm.entities.v1alpha1.AsmSession.prototype.hasAsmSessionStart = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp asm_session_end = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.services.omnichannel.asm.entities.v1alpha1.AsmSession.prototype.getAsmSessionEnd = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.services.omnichannel.asm.entities.v1alpha1.AsmSession} returns this
*/
proto.services.omnichannel.asm.entities.v1alpha1.AsmSession.prototype.setAsmSessionEnd = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.omnichannel.asm.entities.v1alpha1.AsmSession} returns this
 */
proto.services.omnichannel.asm.entities.v1alpha1.AsmSession.prototype.clearAsmSessionEnd = function() {
  return this.setAsmSessionEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.omnichannel.asm.entities.v1alpha1.AsmSession.prototype.hasAsmSessionEnd = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional VoiceSession voice_session = 6;
 * @return {?proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession}
 */
proto.services.omnichannel.asm.entities.v1alpha1.AsmSession.prototype.getVoiceSession = function() {
  return /** @type{?proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession} */ (
    jspb.Message.getWrapperField(this, proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession, 6));
};


/**
 * @param {?proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession|undefined} value
 * @return {!proto.services.omnichannel.asm.entities.v1alpha1.AsmSession} returns this
*/
proto.services.omnichannel.asm.entities.v1alpha1.AsmSession.prototype.setVoiceSession = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.omnichannel.asm.entities.v1alpha1.AsmSession} returns this
 */
proto.services.omnichannel.asm.entities.v1alpha1.AsmSession.prototype.clearVoiceSession = function() {
  return this.setVoiceSession(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.omnichannel.asm.entities.v1alpha1.AsmSession.prototype.hasVoiceSession = function() {
  return jspb.Message.getField(this, 6) != null;
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
proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession.prototype.toObject = function(opt_includeInstance) {
  return proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession.toObject = function(includeInstance, msg) {
  var f, obj = {
    voiceSessionSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    voiceSessionStart: (f = msg.getVoiceSessionStart()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    voiceSessionEnd: (f = msg.getVoiceSessionEnd()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession}
 */
proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession;
  return proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession}
 */
proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVoiceSessionSid(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setVoiceSessionStart(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setVoiceSessionEnd(value);
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
proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVoiceSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getVoiceSessionStart();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getVoiceSessionEnd();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 voice_session_sid = 1;
 * @return {number}
 */
proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession.prototype.getVoiceSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession} returns this
 */
proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession.prototype.setVoiceSessionSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp voice_session_start = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession.prototype.getVoiceSessionStart = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession} returns this
*/
proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession.prototype.setVoiceSessionStart = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession} returns this
 */
proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession.prototype.clearVoiceSessionStart = function() {
  return this.setVoiceSessionStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession.prototype.hasVoiceSessionStart = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp voice_session_end = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession.prototype.getVoiceSessionEnd = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession} returns this
*/
proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession.prototype.setVoiceSessionEnd = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession} returns this
 */
proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession.prototype.clearVoiceSessionEnd = function() {
  return this.setVoiceSessionEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.omnichannel.asm.entities.v1alpha1.VoiceSession.prototype.hasVoiceSessionEnd = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration.prototype.toObject = function(opt_includeInstance) {
  return proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 2, ""),
    password: jspb.Message.getFieldWithDefault(msg, 3, ""),
    dialUrl: jspb.Message.getFieldWithDefault(msg, 4, ""),
    pstnPhone: jspb.Message.getFieldWithDefault(msg, 5, ""),
    defaultTimeZone: jspb.Message.getFieldWithDefault(msg, 6, ""),
    expirationTimestamp: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration}
 */
proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration;
  return proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration}
 */
proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDialUrl(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPstnPhone(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultTimeZone(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpirationTimestamp(value);
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
proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDialUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPstnPhone();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDefaultTimeZone();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getExpirationTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
};


/**
 * optional string username = 2;
 * @return {string}
 */
proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration} returns this
 */
proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string password = 3;
 * @return {string}
 */
proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration} returns this
 */
proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string dial_url = 4;
 * @return {string}
 */
proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration.prototype.getDialUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration} returns this
 */
proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration.prototype.setDialUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string pstn_phone = 5;
 * @return {string}
 */
proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration.prototype.getPstnPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration} returns this
 */
proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration.prototype.setPstnPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string default_time_zone = 6;
 * @return {string}
 */
proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration.prototype.getDefaultTimeZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration} returns this
 */
proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration.prototype.setDefaultTimeZone = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int64 expiration_timestamp = 7;
 * @return {number}
 */
proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration.prototype.getExpirationTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration} returns this
 */
proto.services.omnichannel.asm.entities.v1alpha1.VoiceRegistration.prototype.setExpirationTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
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
proto.services.omnichannel.asm.entities.v1alpha1.AsmUserDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.services.omnichannel.asm.entities.v1alpha1.AsmUserDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.omnichannel.asm.entities.v1alpha1.AsmUserDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.omnichannel.asm.entities.v1alpha1.AsmUserDetails.toObject = function(includeInstance, msg) {
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
 * @return {!proto.services.omnichannel.asm.entities.v1alpha1.AsmUserDetails}
 */
proto.services.omnichannel.asm.entities.v1alpha1.AsmUserDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.omnichannel.asm.entities.v1alpha1.AsmUserDetails;
  return proto.services.omnichannel.asm.entities.v1alpha1.AsmUserDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.omnichannel.asm.entities.v1alpha1.AsmUserDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.omnichannel.asm.entities.v1alpha1.AsmUserDetails}
 */
proto.services.omnichannel.asm.entities.v1alpha1.AsmUserDetails.deserializeBinaryFromReader = function(msg, reader) {
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
proto.services.omnichannel.asm.entities.v1alpha1.AsmUserDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.omnichannel.asm.entities.v1alpha1.AsmUserDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.omnichannel.asm.entities.v1alpha1.AsmUserDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.omnichannel.asm.entities.v1alpha1.AsmUserDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.services.omnichannel.asm.entities.v1alpha1);
