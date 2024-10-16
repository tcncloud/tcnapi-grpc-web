// source: services/billing/entities/v1alpha1/plan.proto
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
var localGlobalThis = require("../../../../global.js");
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
var services_billing_entities_v1alpha1_rates_pb = require('../../../../services/billing/entities/v1alpha1/rates_pb.js');
goog.object.extend(proto, services_billing_entities_v1alpha1_rates_pb);
goog.exportSymbol('proto.services.billing.entities.v1alpha1.BillingPlan', null, global);
goog.exportSymbol('proto.services.billing.entities.v1alpha1.BillingPlanSnapshot', null, global);
goog.exportSymbol('proto.services.billing.entities.v1alpha1.BillingPlanStatus', null, global);
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
proto.services.billing.entities.v1alpha1.BillingPlanSnapshot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.services.billing.entities.v1alpha1.BillingPlanSnapshot.repeatedFields_, null);
};
goog.inherits(proto.services.billing.entities.v1alpha1.BillingPlanSnapshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.billing.entities.v1alpha1.BillingPlanSnapshot.displayName = 'proto.services.billing.entities.v1alpha1.BillingPlanSnapshot';
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
proto.services.billing.entities.v1alpha1.BillingPlan = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.services.billing.entities.v1alpha1.BillingPlan.repeatedFields_, null);
};
goog.inherits(proto.services.billing.entities.v1alpha1.BillingPlan, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.billing.entities.v1alpha1.BillingPlan.displayName = 'proto.services.billing.entities.v1alpha1.BillingPlan';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.services.billing.entities.v1alpha1.BillingPlanSnapshot.repeatedFields_ = [3];



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
proto.services.billing.entities.v1alpha1.BillingPlanSnapshot.prototype.toObject = function(opt_includeInstance) {
  return proto.services.billing.entities.v1alpha1.BillingPlanSnapshot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.billing.entities.v1alpha1.BillingPlanSnapshot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.billing.entities.v1alpha1.BillingPlanSnapshot.toObject = function(includeInstance, msg) {
  var f, obj = {
startDate: (f = msg.getStartDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
endDate: (f = msg.getEndDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
ratesList: jspb.Message.toObjectList(msg.getRatesList(),
    services_billing_entities_v1alpha1_rates_pb.RateDefinition.toObject, includeInstance)
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
 * @return {!proto.services.billing.entities.v1alpha1.BillingPlanSnapshot}
 */
proto.services.billing.entities.v1alpha1.BillingPlanSnapshot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.billing.entities.v1alpha1.BillingPlanSnapshot;
  return proto.services.billing.entities.v1alpha1.BillingPlanSnapshot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.billing.entities.v1alpha1.BillingPlanSnapshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.billing.entities.v1alpha1.BillingPlanSnapshot}
 */
proto.services.billing.entities.v1alpha1.BillingPlanSnapshot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartDate(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndDate(value);
      break;
    case 3:
      var value = new services_billing_entities_v1alpha1_rates_pb.RateDefinition;
      reader.readMessage(value,services_billing_entities_v1alpha1_rates_pb.RateDefinition.deserializeBinaryFromReader);
      msg.addRates(value);
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
proto.services.billing.entities.v1alpha1.BillingPlanSnapshot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.billing.entities.v1alpha1.BillingPlanSnapshot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.billing.entities.v1alpha1.BillingPlanSnapshot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.billing.entities.v1alpha1.BillingPlanSnapshot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndDate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getRatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      services_billing_entities_v1alpha1_rates_pb.RateDefinition.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp start_date = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.services.billing.entities.v1alpha1.BillingPlanSnapshot.prototype.getStartDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.services.billing.entities.v1alpha1.BillingPlanSnapshot} returns this
*/
proto.services.billing.entities.v1alpha1.BillingPlanSnapshot.prototype.setStartDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.billing.entities.v1alpha1.BillingPlanSnapshot} returns this
 */
proto.services.billing.entities.v1alpha1.BillingPlanSnapshot.prototype.clearStartDate = function() {
  return this.setStartDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.billing.entities.v1alpha1.BillingPlanSnapshot.prototype.hasStartDate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp end_date = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.services.billing.entities.v1alpha1.BillingPlanSnapshot.prototype.getEndDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.services.billing.entities.v1alpha1.BillingPlanSnapshot} returns this
*/
proto.services.billing.entities.v1alpha1.BillingPlanSnapshot.prototype.setEndDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.billing.entities.v1alpha1.BillingPlanSnapshot} returns this
 */
proto.services.billing.entities.v1alpha1.BillingPlanSnapshot.prototype.clearEndDate = function() {
  return this.setEndDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.billing.entities.v1alpha1.BillingPlanSnapshot.prototype.hasEndDate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated RateDefinition rates = 3;
 * @return {!Array<!proto.services.billing.entities.v1alpha1.RateDefinition>}
 */
proto.services.billing.entities.v1alpha1.BillingPlanSnapshot.prototype.getRatesList = function() {
  return /** @type{!Array<!proto.services.billing.entities.v1alpha1.RateDefinition>} */ (
    jspb.Message.getRepeatedWrapperField(this, services_billing_entities_v1alpha1_rates_pb.RateDefinition, 3));
};


/**
 * @param {!Array<!proto.services.billing.entities.v1alpha1.RateDefinition>} value
 * @return {!proto.services.billing.entities.v1alpha1.BillingPlanSnapshot} returns this
*/
proto.services.billing.entities.v1alpha1.BillingPlanSnapshot.prototype.setRatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.services.billing.entities.v1alpha1.RateDefinition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.services.billing.entities.v1alpha1.RateDefinition}
 */
proto.services.billing.entities.v1alpha1.BillingPlanSnapshot.prototype.addRates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.services.billing.entities.v1alpha1.RateDefinition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.services.billing.entities.v1alpha1.BillingPlanSnapshot} returns this
 */
proto.services.billing.entities.v1alpha1.BillingPlanSnapshot.prototype.clearRatesList = function() {
  return this.setRatesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.services.billing.entities.v1alpha1.BillingPlan.repeatedFields_ = [7];



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
proto.services.billing.entities.v1alpha1.BillingPlan.prototype.toObject = function(opt_includeInstance) {
  return proto.services.billing.entities.v1alpha1.BillingPlan.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.billing.entities.v1alpha1.BillingPlan} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.billing.entities.v1alpha1.BillingPlan.toObject = function(includeInstance, msg) {
  var f, obj = {
billingPlanId: jspb.Message.getFieldWithDefault(msg, 1, ""),
createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
updateTime: (f = msg.getUpdateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
endTime: (f = msg.getEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
deleteTime: (f = msg.getDeleteTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
rateDefinitionIdsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
status: jspb.Message.getFieldWithDefault(msg, 8, 0),
actualStartTime: (f = msg.getActualStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.services.billing.entities.v1alpha1.BillingPlan}
 */
proto.services.billing.entities.v1alpha1.BillingPlan.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.billing.entities.v1alpha1.BillingPlan;
  return proto.services.billing.entities.v1alpha1.BillingPlan.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.billing.entities.v1alpha1.BillingPlan} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.billing.entities.v1alpha1.BillingPlan}
 */
proto.services.billing.entities.v1alpha1.BillingPlan.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBillingPlanId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTime(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndTime(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDeleteTime(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addRateDefinitionIds(value);
      break;
    case 8:
      var value = /** @type {!proto.services.billing.entities.v1alpha1.BillingPlanStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setActualStartTime(value);
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
proto.services.billing.entities.v1alpha1.BillingPlan.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.billing.entities.v1alpha1.BillingPlan.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.billing.entities.v1alpha1.BillingPlan} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.billing.entities.v1alpha1.BillingPlan.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBillingPlanId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDeleteTime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getRateDefinitionIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getActualStartTime();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string billing_plan_id = 1;
 * @return {string}
 */
proto.services.billing.entities.v1alpha1.BillingPlan.prototype.getBillingPlanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.billing.entities.v1alpha1.BillingPlan} returns this
 */
proto.services.billing.entities.v1alpha1.BillingPlan.prototype.setBillingPlanId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp create_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.services.billing.entities.v1alpha1.BillingPlan.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.services.billing.entities.v1alpha1.BillingPlan} returns this
*/
proto.services.billing.entities.v1alpha1.BillingPlan.prototype.setCreateTime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.billing.entities.v1alpha1.BillingPlan} returns this
 */
proto.services.billing.entities.v1alpha1.BillingPlan.prototype.clearCreateTime = function() {
  return this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.billing.entities.v1alpha1.BillingPlan.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp update_time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.services.billing.entities.v1alpha1.BillingPlan.prototype.getUpdateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.services.billing.entities.v1alpha1.BillingPlan} returns this
*/
proto.services.billing.entities.v1alpha1.BillingPlan.prototype.setUpdateTime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.billing.entities.v1alpha1.BillingPlan} returns this
 */
proto.services.billing.entities.v1alpha1.BillingPlan.prototype.clearUpdateTime = function() {
  return this.setUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.billing.entities.v1alpha1.BillingPlan.prototype.hasUpdateTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp start_time = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.services.billing.entities.v1alpha1.BillingPlan.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.services.billing.entities.v1alpha1.BillingPlan} returns this
*/
proto.services.billing.entities.v1alpha1.BillingPlan.prototype.setStartTime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.billing.entities.v1alpha1.BillingPlan} returns this
 */
proto.services.billing.entities.v1alpha1.BillingPlan.prototype.clearStartTime = function() {
  return this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.billing.entities.v1alpha1.BillingPlan.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp end_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.services.billing.entities.v1alpha1.BillingPlan.prototype.getEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.services.billing.entities.v1alpha1.BillingPlan} returns this
*/
proto.services.billing.entities.v1alpha1.BillingPlan.prototype.setEndTime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.billing.entities.v1alpha1.BillingPlan} returns this
 */
proto.services.billing.entities.v1alpha1.BillingPlan.prototype.clearEndTime = function() {
  return this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.billing.entities.v1alpha1.BillingPlan.prototype.hasEndTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp delete_time = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.services.billing.entities.v1alpha1.BillingPlan.prototype.getDeleteTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.services.billing.entities.v1alpha1.BillingPlan} returns this
*/
proto.services.billing.entities.v1alpha1.BillingPlan.prototype.setDeleteTime = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.billing.entities.v1alpha1.BillingPlan} returns this
 */
proto.services.billing.entities.v1alpha1.BillingPlan.prototype.clearDeleteTime = function() {
  return this.setDeleteTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.billing.entities.v1alpha1.BillingPlan.prototype.hasDeleteTime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated string rate_definition_ids = 7;
 * @return {!Array<string>}
 */
proto.services.billing.entities.v1alpha1.BillingPlan.prototype.getRateDefinitionIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.services.billing.entities.v1alpha1.BillingPlan} returns this
 */
proto.services.billing.entities.v1alpha1.BillingPlan.prototype.setRateDefinitionIdsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.services.billing.entities.v1alpha1.BillingPlan} returns this
 */
proto.services.billing.entities.v1alpha1.BillingPlan.prototype.addRateDefinitionIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.services.billing.entities.v1alpha1.BillingPlan} returns this
 */
proto.services.billing.entities.v1alpha1.BillingPlan.prototype.clearRateDefinitionIdsList = function() {
  return this.setRateDefinitionIdsList([]);
};


/**
 * optional BillingPlanStatus status = 8;
 * @return {!proto.services.billing.entities.v1alpha1.BillingPlanStatus}
 */
proto.services.billing.entities.v1alpha1.BillingPlan.prototype.getStatus = function() {
  return /** @type {!proto.services.billing.entities.v1alpha1.BillingPlanStatus} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.services.billing.entities.v1alpha1.BillingPlanStatus} value
 * @return {!proto.services.billing.entities.v1alpha1.BillingPlan} returns this
 */
proto.services.billing.entities.v1alpha1.BillingPlan.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional google.protobuf.Timestamp actual_start_time = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.services.billing.entities.v1alpha1.BillingPlan.prototype.getActualStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.services.billing.entities.v1alpha1.BillingPlan} returns this
*/
proto.services.billing.entities.v1alpha1.BillingPlan.prototype.setActualStartTime = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.billing.entities.v1alpha1.BillingPlan} returns this
 */
proto.services.billing.entities.v1alpha1.BillingPlan.prototype.clearActualStartTime = function() {
  return this.setActualStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.billing.entities.v1alpha1.BillingPlan.prototype.hasActualStartTime = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * @enum {number}
 */
proto.services.billing.entities.v1alpha1.BillingPlanStatus = {
  BILLING_PLAN_STATUS_UNSPECIFIED: 0,
  BILLING_PLAN_STATUS_CREATING: 100,
  BILLING_PLAN_STATUS_CREATED: 200
};

goog.object.extend(exports, proto.services.billing.entities.v1alpha1);
