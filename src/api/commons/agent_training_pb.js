// source: api/commons/agent_training.proto
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
var goog = jspb;
var proto = {};

var api_commons_acd_pb = require('../../api/commons/acd_pb.js');
goog.object.extend(proto, api_commons_acd_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('api.commons.CallIdentifier', null, proto);
goog.exportSymbol('api.commons.LearningOpportunity', null, proto);
goog.exportSymbol('api.commons.LearningOpportunity.OriginIdentifierCase', null, proto);
goog.exportSymbol('api.commons.LearningOpportunityOrigin', null, proto);
goog.exportSymbol('api.commons.LearningOpportunityStatus', null, proto);
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
proto.api.commons.LearningOpportunity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.commons.LearningOpportunity.oneofGroups_);
};
goog.inherits(proto.api.commons.LearningOpportunity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.LearningOpportunity.displayName = 'proto.api.commons.LearningOpportunity';
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
proto.api.commons.CallIdentifier = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.CallIdentifier, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.CallIdentifier.displayName = 'proto.api.commons.CallIdentifier';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.commons.LearningOpportunity.oneofGroups_ = [[16,17,18]];

/**
 * @enum {number}
 */
proto.api.commons.LearningOpportunity.OriginIdentifierCase = {
  ORIGIN_IDENTIFIER_NOT_SET: 0,
  EVALUATION_ID: 16,
  AUTO_EVALUATION_ID: 17,
  SMART_EVALUATION_ID: 18
};

/**
 * @return {proto.api.commons.LearningOpportunity.OriginIdentifierCase}
 */
proto.api.commons.LearningOpportunity.prototype.getOriginIdentifierCase = function() {
  return /** @type {proto.api.commons.LearningOpportunity.OriginIdentifierCase} */(jspb.Message.computeOneofCase(this, proto.api.commons.LearningOpportunity.oneofGroups_[0]));
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
proto.api.commons.LearningOpportunity.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.LearningOpportunity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.LearningOpportunity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.LearningOpportunity.toObject = function(includeInstance, msg) {
  var f, obj = {
learningOpportunityId: jspb.Message.getFieldWithDefault(msg, 2, 0),
callSid: jspb.Message.getFieldWithDefault(msg, 3, 0),
callType: jspb.Message.getFieldWithDefault(msg, 4, 0),
transcriptSid: jspb.Message.getFieldWithDefault(msg, 5, 0),
agentUserId: jspb.Message.getFieldWithDefault(msg, 6, ""),
startOffset: jspb.Message.getFieldWithDefault(msg, 7, 0),
endOffset: jspb.Message.getFieldWithDefault(msg, 8, 0),
description: jspb.Message.getFieldWithDefault(msg, 9, ""),
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
title: jspb.Message.getFieldWithDefault(msg, 12, ""),
status: jspb.Message.getFieldWithDefault(msg, 13, 0),
origin: jspb.Message.getFieldWithDefault(msg, 14, 0),
creatorUserId: jspb.Message.getFieldWithDefault(msg, 15, ""),
evaluationId: (f = jspb.Message.getField(msg, 16)) == null ? undefined : f,
autoEvaluationId: (f = jspb.Message.getField(msg, 17)) == null ? undefined : f,
smartEvaluationId: (f = jspb.Message.getField(msg, 18)) == null ? undefined : f
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
 * @return {!proto.api.commons.LearningOpportunity}
 */
proto.api.commons.LearningOpportunity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.LearningOpportunity;
  return proto.api.commons.LearningOpportunity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.LearningOpportunity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.LearningOpportunity}
 */
proto.api.commons.LearningOpportunity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLearningOpportunityId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCallSid(value);
      break;
    case 4:
      var value = /** @type {!proto.api.commons.CallType.Enum} */ (reader.readEnum());
      msg.setCallType(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTranscriptSid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setAgentUserId(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStartOffset(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEndOffset(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 13:
      var value = /** @type {!proto.api.commons.LearningOpportunityStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 14:
      var value = /** @type {!proto.api.commons.LearningOpportunityOrigin} */ (reader.readEnum());
      msg.setOrigin(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatorUserId(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEvaluationId(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAutoEvaluationId(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmartEvaluationId(value);
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
proto.api.commons.LearningOpportunity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.LearningOpportunity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.LearningOpportunity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.LearningOpportunity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLearningOpportunityId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getCallSid();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getCallType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getTranscriptSid();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getAgentUserId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getStartOffset();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getEndOffset();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = message.getOrigin();
  if (f !== 0.0) {
    writer.writeEnum(
      14,
      f
    );
  }
  f = message.getCreatorUserId();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeInt64(
      16,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeInt64(
      17,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeInt64(
      18,
      f
    );
  }
};


/**
 * optional int64 learning_opportunity_id = 2;
 * @return {number}
 */
proto.api.commons.LearningOpportunity.prototype.getLearningOpportunityId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.LearningOpportunity} returns this
 */
proto.api.commons.LearningOpportunity.prototype.setLearningOpportunityId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 call_sid = 3;
 * @return {number}
 */
proto.api.commons.LearningOpportunity.prototype.getCallSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.LearningOpportunity} returns this
 */
proto.api.commons.LearningOpportunity.prototype.setCallSid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional CallType.Enum call_type = 4;
 * @return {!proto.api.commons.CallType.Enum}
 */
proto.api.commons.LearningOpportunity.prototype.getCallType = function() {
  return /** @type {!proto.api.commons.CallType.Enum} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.CallType.Enum} value
 * @return {!proto.api.commons.LearningOpportunity} returns this
 */
proto.api.commons.LearningOpportunity.prototype.setCallType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional int64 transcript_sid = 5;
 * @return {number}
 */
proto.api.commons.LearningOpportunity.prototype.getTranscriptSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.LearningOpportunity} returns this
 */
proto.api.commons.LearningOpportunity.prototype.setTranscriptSid = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string agent_user_id = 6;
 * @return {string}
 */
proto.api.commons.LearningOpportunity.prototype.getAgentUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.LearningOpportunity} returns this
 */
proto.api.commons.LearningOpportunity.prototype.setAgentUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int32 start_offset = 7;
 * @return {number}
 */
proto.api.commons.LearningOpportunity.prototype.getStartOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.LearningOpportunity} returns this
 */
proto.api.commons.LearningOpportunity.prototype.setStartOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 end_offset = 8;
 * @return {number}
 */
proto.api.commons.LearningOpportunity.prototype.getEndOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.LearningOpportunity} returns this
 */
proto.api.commons.LearningOpportunity.prototype.setEndOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string description = 9;
 * @return {string}
 */
proto.api.commons.LearningOpportunity.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.LearningOpportunity} returns this
 */
proto.api.commons.LearningOpportunity.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.LearningOpportunity.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.LearningOpportunity} returns this
*/
proto.api.commons.LearningOpportunity.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.LearningOpportunity} returns this
 */
proto.api.commons.LearningOpportunity.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.LearningOpportunity.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string title = 12;
 * @return {string}
 */
proto.api.commons.LearningOpportunity.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.LearningOpportunity} returns this
 */
proto.api.commons.LearningOpportunity.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional LearningOpportunityStatus status = 13;
 * @return {!proto.api.commons.LearningOpportunityStatus}
 */
proto.api.commons.LearningOpportunity.prototype.getStatus = function() {
  return /** @type {!proto.api.commons.LearningOpportunityStatus} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.api.commons.LearningOpportunityStatus} value
 * @return {!proto.api.commons.LearningOpportunity} returns this
 */
proto.api.commons.LearningOpportunity.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 13, value);
};


/**
 * optional LearningOpportunityOrigin origin = 14;
 * @return {!proto.api.commons.LearningOpportunityOrigin}
 */
proto.api.commons.LearningOpportunity.prototype.getOrigin = function() {
  return /** @type {!proto.api.commons.LearningOpportunityOrigin} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {!proto.api.commons.LearningOpportunityOrigin} value
 * @return {!proto.api.commons.LearningOpportunity} returns this
 */
proto.api.commons.LearningOpportunity.prototype.setOrigin = function(value) {
  return jspb.Message.setProto3EnumField(this, 14, value);
};


/**
 * optional string creator_user_id = 15;
 * @return {string}
 */
proto.api.commons.LearningOpportunity.prototype.getCreatorUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.LearningOpportunity} returns this
 */
proto.api.commons.LearningOpportunity.prototype.setCreatorUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional int64 evaluation_id = 16;
 * @return {number}
 */
proto.api.commons.LearningOpportunity.prototype.getEvaluationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.LearningOpportunity} returns this
 */
proto.api.commons.LearningOpportunity.prototype.setEvaluationId = function(value) {
  return jspb.Message.setOneofField(this, 16, proto.api.commons.LearningOpportunity.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.commons.LearningOpportunity} returns this
 */
proto.api.commons.LearningOpportunity.prototype.clearEvaluationId = function() {
  return jspb.Message.setOneofField(this, 16, proto.api.commons.LearningOpportunity.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.LearningOpportunity.prototype.hasEvaluationId = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional int64 auto_evaluation_id = 17;
 * @return {number}
 */
proto.api.commons.LearningOpportunity.prototype.getAutoEvaluationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.LearningOpportunity} returns this
 */
proto.api.commons.LearningOpportunity.prototype.setAutoEvaluationId = function(value) {
  return jspb.Message.setOneofField(this, 17, proto.api.commons.LearningOpportunity.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.commons.LearningOpportunity} returns this
 */
proto.api.commons.LearningOpportunity.prototype.clearAutoEvaluationId = function() {
  return jspb.Message.setOneofField(this, 17, proto.api.commons.LearningOpportunity.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.LearningOpportunity.prototype.hasAutoEvaluationId = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional int64 smart_evaluation_id = 18;
 * @return {number}
 */
proto.api.commons.LearningOpportunity.prototype.getSmartEvaluationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.LearningOpportunity} returns this
 */
proto.api.commons.LearningOpportunity.prototype.setSmartEvaluationId = function(value) {
  return jspb.Message.setOneofField(this, 18, proto.api.commons.LearningOpportunity.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.commons.LearningOpportunity} returns this
 */
proto.api.commons.LearningOpportunity.prototype.clearSmartEvaluationId = function() {
  return jspb.Message.setOneofField(this, 18, proto.api.commons.LearningOpportunity.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.LearningOpportunity.prototype.hasSmartEvaluationId = function() {
  return jspb.Message.getField(this, 18) != null;
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
proto.api.commons.CallIdentifier.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.CallIdentifier.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.CallIdentifier} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.CallIdentifier.toObject = function(includeInstance, msg) {
  var f, obj = {
sid: jspb.Message.getFieldWithDefault(msg, 1, 0),
type: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.api.commons.CallIdentifier}
 */
proto.api.commons.CallIdentifier.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.CallIdentifier;
  return proto.api.commons.CallIdentifier.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.CallIdentifier} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.CallIdentifier}
 */
proto.api.commons.CallIdentifier.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSid(value);
      break;
    case 2:
      var value = /** @type {!proto.api.commons.CallType.Enum} */ (reader.readEnum());
      msg.setType(value);
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
proto.api.commons.CallIdentifier.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.CallIdentifier.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.CallIdentifier} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.CallIdentifier.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional int64 sid = 1;
 * @return {number}
 */
proto.api.commons.CallIdentifier.prototype.getSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.CallIdentifier} returns this
 */
proto.api.commons.CallIdentifier.prototype.setSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional CallType.Enum type = 2;
 * @return {!proto.api.commons.CallType.Enum}
 */
proto.api.commons.CallIdentifier.prototype.getType = function() {
  return /** @type {!proto.api.commons.CallType.Enum} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.CallType.Enum} value
 * @return {!proto.api.commons.CallIdentifier} returns this
 */
proto.api.commons.CallIdentifier.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.api.commons.LearningOpportunityStatus = {
  STATUS_OPEN: 0,
  STATUS_COMPLETED: 1
};

/**
 * @enum {number}
 */
proto.api.commons.LearningOpportunityOrigin = {
  UNDEFINED: 0,
  QUALITY_EVALUATION: 1,
  AUTO_EVALUATION: 2,
  FLAG_EVALUATION: 3,
  CONVERSATION: 4,
  FLAGGED_CONVERSATION: 5,
  SMART_EVALUATION: 6
};

goog.object.extend(exports, proto);
