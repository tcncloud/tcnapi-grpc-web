// source: api/commons/audit/delivery_events.proto
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

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('api.commons.audit.DeliveryFailureEvent', null, proto);
goog.exportSymbol('api.commons.audit.DeliverySuccessEvent', null, proto);
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
proto.api.commons.audit.DeliveryFailureEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.audit.DeliveryFailureEvent.repeatedFields_, null);
};
goog.inherits(proto.api.commons.audit.DeliveryFailureEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.DeliveryFailureEvent.displayName = 'proto.api.commons.audit.DeliveryFailureEvent';
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
proto.api.commons.audit.DeliverySuccessEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.audit.DeliverySuccessEvent.repeatedFields_, null);
};
goog.inherits(proto.api.commons.audit.DeliverySuccessEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.DeliverySuccessEvent.displayName = 'proto.api.commons.audit.DeliverySuccessEvent';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.audit.DeliveryFailureEvent.repeatedFields_ = [4];



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
proto.api.commons.audit.DeliveryFailureEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.DeliveryFailureEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.DeliveryFailureEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.DeliveryFailureEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
deliveryDefinitionName: jspb.Message.getFieldWithDefault(msg, 1, 0),
orgId: jspb.Message.getFieldWithDefault(msg, 2, ""),
transactionSid: jspb.Message.getFieldWithDefault(msg, 3, 0),
attachmentNamesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
failureTime: (f = msg.getFailureTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
failureErrorMessage: jspb.Message.getFieldWithDefault(msg, 6, ""),
definition: jspb.Message.getFieldWithDefault(msg, 7, ""),
originalPayload: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.api.commons.audit.DeliveryFailureEvent}
 */
proto.api.commons.audit.DeliveryFailureEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.DeliveryFailureEvent;
  return proto.api.commons.audit.DeliveryFailureEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.DeliveryFailureEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.DeliveryFailureEvent}
 */
proto.api.commons.audit.DeliveryFailureEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDeliveryDefinitionName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTransactionSid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addAttachmentNames(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFailureTime(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFailureErrorMessage(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefinition(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setOriginalPayload(value);
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
proto.api.commons.audit.DeliveryFailureEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.DeliveryFailureEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.DeliveryFailureEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.DeliveryFailureEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeliveryDefinitionName();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTransactionSid();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getAttachmentNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getFailureTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getFailureErrorMessage();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDefinition();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getOriginalPayload();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional int64 delivery_definition_name = 1;
 * @return {number}
 */
proto.api.commons.audit.DeliveryFailureEvent.prototype.getDeliveryDefinitionName = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.audit.DeliveryFailureEvent} returns this
 */
proto.api.commons.audit.DeliveryFailureEvent.prototype.setDeliveryDefinitionName = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.commons.audit.DeliveryFailureEvent.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.DeliveryFailureEvent} returns this
 */
proto.api.commons.audit.DeliveryFailureEvent.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 transaction_sid = 3;
 * @return {number}
 */
proto.api.commons.audit.DeliveryFailureEvent.prototype.getTransactionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.audit.DeliveryFailureEvent} returns this
 */
proto.api.commons.audit.DeliveryFailureEvent.prototype.setTransactionSid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated string attachment_names = 4;
 * @return {!Array<string>}
 */
proto.api.commons.audit.DeliveryFailureEvent.prototype.getAttachmentNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.commons.audit.DeliveryFailureEvent} returns this
 */
proto.api.commons.audit.DeliveryFailureEvent.prototype.setAttachmentNamesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.audit.DeliveryFailureEvent} returns this
 */
proto.api.commons.audit.DeliveryFailureEvent.prototype.addAttachmentNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.audit.DeliveryFailureEvent} returns this
 */
proto.api.commons.audit.DeliveryFailureEvent.prototype.clearAttachmentNamesList = function() {
  return this.setAttachmentNamesList([]);
};


/**
 * optional google.protobuf.Timestamp failure_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.audit.DeliveryFailureEvent.prototype.getFailureTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.audit.DeliveryFailureEvent} returns this
*/
proto.api.commons.audit.DeliveryFailureEvent.prototype.setFailureTime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.DeliveryFailureEvent} returns this
 */
proto.api.commons.audit.DeliveryFailureEvent.prototype.clearFailureTime = function() {
  return this.setFailureTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.DeliveryFailureEvent.prototype.hasFailureTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string failure_error_message = 6;
 * @return {string}
 */
proto.api.commons.audit.DeliveryFailureEvent.prototype.getFailureErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.DeliveryFailureEvent} returns this
 */
proto.api.commons.audit.DeliveryFailureEvent.prototype.setFailureErrorMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string definition = 7;
 * @return {string}
 */
proto.api.commons.audit.DeliveryFailureEvent.prototype.getDefinition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.DeliveryFailureEvent} returns this
 */
proto.api.commons.audit.DeliveryFailureEvent.prototype.setDefinition = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string original_payload = 8;
 * @return {string}
 */
proto.api.commons.audit.DeliveryFailureEvent.prototype.getOriginalPayload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.DeliveryFailureEvent} returns this
 */
proto.api.commons.audit.DeliveryFailureEvent.prototype.setOriginalPayload = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.audit.DeliverySuccessEvent.repeatedFields_ = [4];



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
proto.api.commons.audit.DeliverySuccessEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.DeliverySuccessEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.DeliverySuccessEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.DeliverySuccessEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
deliveryDefinitionName: jspb.Message.getFieldWithDefault(msg, 1, ""),
orgId: jspb.Message.getFieldWithDefault(msg, 2, ""),
transactionSid: jspb.Message.getFieldWithDefault(msg, 3, 0),
attachmentNamesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
successTime: (f = msg.getSuccessTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
successMessage: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.api.commons.audit.DeliverySuccessEvent}
 */
proto.api.commons.audit.DeliverySuccessEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.DeliverySuccessEvent;
  return proto.api.commons.audit.DeliverySuccessEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.DeliverySuccessEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.DeliverySuccessEvent}
 */
proto.api.commons.audit.DeliverySuccessEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeliveryDefinitionName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTransactionSid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addAttachmentNames(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setSuccessTime(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSuccessMessage(value);
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
proto.api.commons.audit.DeliverySuccessEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.DeliverySuccessEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.DeliverySuccessEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.DeliverySuccessEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeliveryDefinitionName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTransactionSid();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getAttachmentNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getSuccessTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSuccessMessage();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string delivery_definition_name = 1;
 * @return {string}
 */
proto.api.commons.audit.DeliverySuccessEvent.prototype.getDeliveryDefinitionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.DeliverySuccessEvent} returns this
 */
proto.api.commons.audit.DeliverySuccessEvent.prototype.setDeliveryDefinitionName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.commons.audit.DeliverySuccessEvent.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.DeliverySuccessEvent} returns this
 */
proto.api.commons.audit.DeliverySuccessEvent.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 transaction_sid = 3;
 * @return {number}
 */
proto.api.commons.audit.DeliverySuccessEvent.prototype.getTransactionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.audit.DeliverySuccessEvent} returns this
 */
proto.api.commons.audit.DeliverySuccessEvent.prototype.setTransactionSid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated string attachment_names = 4;
 * @return {!Array<string>}
 */
proto.api.commons.audit.DeliverySuccessEvent.prototype.getAttachmentNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.commons.audit.DeliverySuccessEvent} returns this
 */
proto.api.commons.audit.DeliverySuccessEvent.prototype.setAttachmentNamesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.audit.DeliverySuccessEvent} returns this
 */
proto.api.commons.audit.DeliverySuccessEvent.prototype.addAttachmentNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.audit.DeliverySuccessEvent} returns this
 */
proto.api.commons.audit.DeliverySuccessEvent.prototype.clearAttachmentNamesList = function() {
  return this.setAttachmentNamesList([]);
};


/**
 * optional google.protobuf.Timestamp success_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.audit.DeliverySuccessEvent.prototype.getSuccessTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.audit.DeliverySuccessEvent} returns this
*/
proto.api.commons.audit.DeliverySuccessEvent.prototype.setSuccessTime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.DeliverySuccessEvent} returns this
 */
proto.api.commons.audit.DeliverySuccessEvent.prototype.clearSuccessTime = function() {
  return this.setSuccessTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.DeliverySuccessEvent.prototype.hasSuccessTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string success_message = 6;
 * @return {string}
 */
proto.api.commons.audit.DeliverySuccessEvent.prototype.getSuccessMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.DeliverySuccessEvent} returns this
 */
proto.api.commons.audit.DeliverySuccessEvent.prototype.setSuccessMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


goog.object.extend(exports, proto);
