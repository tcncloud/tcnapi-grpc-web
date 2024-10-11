// source: services/billing/entities/v1alpha4/rates.proto
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
var services_billing_entities_v1alpha4_matching_pb = require('../../../../services/billing/entities/v1alpha4/matching_pb.js');
goog.object.extend(proto, services_billing_entities_v1alpha4_matching_pb);
var services_billing_entities_v1alpha4_products_pb = require('../../../../services/billing/entities/v1alpha4/products_pb.js');
goog.object.extend(proto, services_billing_entities_v1alpha4_products_pb);
var services_billing_entities_v1alpha4_tags_pb = require('../../../../services/billing/entities/v1alpha4/tags_pb.js');
goog.object.extend(proto, services_billing_entities_v1alpha4_tags_pb);
goog.exportSymbol('services.billing.entities.v1alpha4.MatchingRule', null, proto);
goog.exportSymbol('services.billing.entities.v1alpha4.MatchingRule.MatchingConfigCase', null, proto);
goog.exportSymbol('services.billing.entities.v1alpha4.RateDefinition', null, proto);
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
proto.services.billing.entities.v1alpha4.RateDefinition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.billing.entities.v1alpha4.RateDefinition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.billing.entities.v1alpha4.RateDefinition.displayName = 'proto.services.billing.entities.v1alpha4.RateDefinition';
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
proto.services.billing.entities.v1alpha4.MatchingRule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.services.billing.entities.v1alpha4.MatchingRule.oneofGroups_);
};
goog.inherits(proto.services.billing.entities.v1alpha4.MatchingRule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.billing.entities.v1alpha4.MatchingRule.displayName = 'proto.services.billing.entities.v1alpha4.MatchingRule';
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
proto.services.billing.entities.v1alpha4.RateDefinition.prototype.toObject = function(opt_includeInstance) {
  return proto.services.billing.entities.v1alpha4.RateDefinition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.billing.entities.v1alpha4.RateDefinition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.billing.entities.v1alpha4.RateDefinition.toObject = function(includeInstance, msg) {
  var f, obj = {
rateDefinitionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
skuId: jspb.Message.getFieldWithDefault(msg, 2, ""),
billingTag: (f = msg.getBillingTag()) && services_billing_entities_v1alpha4_tags_pb.BillingTag.toObject(includeInstance, f),
config: (f = msg.getConfig()) && services_billing_entities_v1alpha4_products_pb.ProductConfig.toObject(includeInstance, f),
isDraft: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
isOverwrite: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
updateTime: (f = msg.getUpdateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
deleteTime: (f = msg.getDeleteTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
billingTagId: jspb.Message.getFieldWithDefault(msg, 10, "")
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
 * @return {!proto.services.billing.entities.v1alpha4.RateDefinition}
 */
proto.services.billing.entities.v1alpha4.RateDefinition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.billing.entities.v1alpha4.RateDefinition;
  return proto.services.billing.entities.v1alpha4.RateDefinition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.billing.entities.v1alpha4.RateDefinition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.billing.entities.v1alpha4.RateDefinition}
 */
proto.services.billing.entities.v1alpha4.RateDefinition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRateDefinitionId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSkuId(value);
      break;
    case 3:
      var value = new services_billing_entities_v1alpha4_tags_pb.BillingTag;
      reader.readMessage(value,services_billing_entities_v1alpha4_tags_pb.BillingTag.deserializeBinaryFromReader);
      msg.setBillingTag(value);
      break;
    case 4:
      var value = new services_billing_entities_v1alpha4_products_pb.ProductConfig;
      reader.readMessage(value,services_billing_entities_v1alpha4_products_pb.ProductConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDraft(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsOverwrite(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTime(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDeleteTime(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setBillingTagId(value);
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
proto.services.billing.entities.v1alpha4.RateDefinition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.billing.entities.v1alpha4.RateDefinition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.billing.entities.v1alpha4.RateDefinition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.billing.entities.v1alpha4.RateDefinition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRateDefinitionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSkuId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBillingTag();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      services_billing_entities_v1alpha4_tags_pb.BillingTag.serializeBinaryToWriter
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      services_billing_entities_v1alpha4_products_pb.ProductConfig.serializeBinaryToWriter
    );
  }
  f = message.getIsDraft();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getIsOverwrite();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateTime();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDeleteTime();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getBillingTagId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string rate_definition_id = 1;
 * @return {string}
 */
proto.services.billing.entities.v1alpha4.RateDefinition.prototype.getRateDefinitionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.billing.entities.v1alpha4.RateDefinition} returns this
 */
proto.services.billing.entities.v1alpha4.RateDefinition.prototype.setRateDefinitionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string sku_id = 2;
 * @return {string}
 */
proto.services.billing.entities.v1alpha4.RateDefinition.prototype.getSkuId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.billing.entities.v1alpha4.RateDefinition} returns this
 */
proto.services.billing.entities.v1alpha4.RateDefinition.prototype.setSkuId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional BillingTag billing_tag = 3;
 * @return {?proto.services.billing.entities.v1alpha4.BillingTag}
 */
proto.services.billing.entities.v1alpha4.RateDefinition.prototype.getBillingTag = function() {
  return /** @type{?proto.services.billing.entities.v1alpha4.BillingTag} */ (
    jspb.Message.getWrapperField(this, services_billing_entities_v1alpha4_tags_pb.BillingTag, 3));
};


/**
 * @param {?proto.services.billing.entities.v1alpha4.BillingTag|undefined} value
 * @return {!proto.services.billing.entities.v1alpha4.RateDefinition} returns this
*/
proto.services.billing.entities.v1alpha4.RateDefinition.prototype.setBillingTag = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.billing.entities.v1alpha4.RateDefinition} returns this
 */
proto.services.billing.entities.v1alpha4.RateDefinition.prototype.clearBillingTag = function() {
  return this.setBillingTag(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.billing.entities.v1alpha4.RateDefinition.prototype.hasBillingTag = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ProductConfig config = 4;
 * @return {?proto.services.billing.entities.v1alpha4.ProductConfig}
 */
proto.services.billing.entities.v1alpha4.RateDefinition.prototype.getConfig = function() {
  return /** @type{?proto.services.billing.entities.v1alpha4.ProductConfig} */ (
    jspb.Message.getWrapperField(this, services_billing_entities_v1alpha4_products_pb.ProductConfig, 4));
};


/**
 * @param {?proto.services.billing.entities.v1alpha4.ProductConfig|undefined} value
 * @return {!proto.services.billing.entities.v1alpha4.RateDefinition} returns this
*/
proto.services.billing.entities.v1alpha4.RateDefinition.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.billing.entities.v1alpha4.RateDefinition} returns this
 */
proto.services.billing.entities.v1alpha4.RateDefinition.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.billing.entities.v1alpha4.RateDefinition.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool is_draft = 5;
 * @return {boolean}
 */
proto.services.billing.entities.v1alpha4.RateDefinition.prototype.getIsDraft = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.services.billing.entities.v1alpha4.RateDefinition} returns this
 */
proto.services.billing.entities.v1alpha4.RateDefinition.prototype.setIsDraft = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool is_overwrite = 6;
 * @return {boolean}
 */
proto.services.billing.entities.v1alpha4.RateDefinition.prototype.getIsOverwrite = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.services.billing.entities.v1alpha4.RateDefinition} returns this
 */
proto.services.billing.entities.v1alpha4.RateDefinition.prototype.setIsOverwrite = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp create_time = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.services.billing.entities.v1alpha4.RateDefinition.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.services.billing.entities.v1alpha4.RateDefinition} returns this
*/
proto.services.billing.entities.v1alpha4.RateDefinition.prototype.setCreateTime = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.billing.entities.v1alpha4.RateDefinition} returns this
 */
proto.services.billing.entities.v1alpha4.RateDefinition.prototype.clearCreateTime = function() {
  return this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.billing.entities.v1alpha4.RateDefinition.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp update_time = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.services.billing.entities.v1alpha4.RateDefinition.prototype.getUpdateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.services.billing.entities.v1alpha4.RateDefinition} returns this
*/
proto.services.billing.entities.v1alpha4.RateDefinition.prototype.setUpdateTime = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.billing.entities.v1alpha4.RateDefinition} returns this
 */
proto.services.billing.entities.v1alpha4.RateDefinition.prototype.clearUpdateTime = function() {
  return this.setUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.billing.entities.v1alpha4.RateDefinition.prototype.hasUpdateTime = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp delete_time = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.services.billing.entities.v1alpha4.RateDefinition.prototype.getDeleteTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.services.billing.entities.v1alpha4.RateDefinition} returns this
*/
proto.services.billing.entities.v1alpha4.RateDefinition.prototype.setDeleteTime = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.billing.entities.v1alpha4.RateDefinition} returns this
 */
proto.services.billing.entities.v1alpha4.RateDefinition.prototype.clearDeleteTime = function() {
  return this.setDeleteTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.billing.entities.v1alpha4.RateDefinition.prototype.hasDeleteTime = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string billing_tag_id = 10;
 * @return {string}
 */
proto.services.billing.entities.v1alpha4.RateDefinition.prototype.getBillingTagId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.billing.entities.v1alpha4.RateDefinition} returns this
 */
proto.services.billing.entities.v1alpha4.RateDefinition.prototype.setBillingTagId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.services.billing.entities.v1alpha4.MatchingRule.oneofGroups_ = [[100]];

/**
 * @enum {number}
 */
proto.services.billing.entities.v1alpha4.MatchingRule.MatchingConfigCase = {
  MATCHING_CONFIG_NOT_SET: 0,
  COUNTRY_CODE_PREFIX: 100
};

/**
 * @return {proto.services.billing.entities.v1alpha4.MatchingRule.MatchingConfigCase}
 */
proto.services.billing.entities.v1alpha4.MatchingRule.prototype.getMatchingConfigCase = function() {
  return /** @type {proto.services.billing.entities.v1alpha4.MatchingRule.MatchingConfigCase} */(jspb.Message.computeOneofCase(this, proto.services.billing.entities.v1alpha4.MatchingRule.oneofGroups_[0]));
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
proto.services.billing.entities.v1alpha4.MatchingRule.prototype.toObject = function(opt_includeInstance) {
  return proto.services.billing.entities.v1alpha4.MatchingRule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.billing.entities.v1alpha4.MatchingRule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.billing.entities.v1alpha4.MatchingRule.toObject = function(includeInstance, msg) {
  var f, obj = {
matchingRuleId: jspb.Message.getFieldWithDefault(msg, 1, ""),
config: (f = msg.getConfig()) && services_billing_entities_v1alpha4_products_pb.ProductConfig.toObject(includeInstance, f),
createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
deleteTime: (f = msg.getDeleteTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
updateTime: (f = msg.getUpdateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
ruleConfig: (f = msg.getRuleConfig()) && services_billing_entities_v1alpha4_matching_pb.MatchingConfig.toObject(includeInstance, f),
countryCodePrefix: (f = msg.getCountryCodePrefix()) && services_billing_entities_v1alpha4_matching_pb.CountryCodePrefix.toObject(includeInstance, f)
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
 * @return {!proto.services.billing.entities.v1alpha4.MatchingRule}
 */
proto.services.billing.entities.v1alpha4.MatchingRule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.billing.entities.v1alpha4.MatchingRule;
  return proto.services.billing.entities.v1alpha4.MatchingRule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.billing.entities.v1alpha4.MatchingRule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.billing.entities.v1alpha4.MatchingRule}
 */
proto.services.billing.entities.v1alpha4.MatchingRule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMatchingRuleId(value);
      break;
    case 2:
      var value = new services_billing_entities_v1alpha4_products_pb.ProductConfig;
      reader.readMessage(value,services_billing_entities_v1alpha4_products_pb.ProductConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDeleteTime(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTime(value);
      break;
    case 6:
      var value = new services_billing_entities_v1alpha4_matching_pb.MatchingConfig;
      reader.readMessage(value,services_billing_entities_v1alpha4_matching_pb.MatchingConfig.deserializeBinaryFromReader);
      msg.setRuleConfig(value);
      break;
    case 100:
      var value = new services_billing_entities_v1alpha4_matching_pb.CountryCodePrefix;
      reader.readMessage(value,services_billing_entities_v1alpha4_matching_pb.CountryCodePrefix.deserializeBinaryFromReader);
      msg.setCountryCodePrefix(value);
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
proto.services.billing.entities.v1alpha4.MatchingRule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.billing.entities.v1alpha4.MatchingRule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.billing.entities.v1alpha4.MatchingRule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.billing.entities.v1alpha4.MatchingRule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatchingRuleId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      services_billing_entities_v1alpha4_products_pb.ProductConfig.serializeBinaryToWriter
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDeleteTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getRuleConfig();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      services_billing_entities_v1alpha4_matching_pb.MatchingConfig.serializeBinaryToWriter
    );
  }
  f = message.getCountryCodePrefix();
  if (f != null) {
    writer.writeMessage(
      100,
      f,
      services_billing_entities_v1alpha4_matching_pb.CountryCodePrefix.serializeBinaryToWriter
    );
  }
};


/**
 * optional string matching_rule_id = 1;
 * @return {string}
 */
proto.services.billing.entities.v1alpha4.MatchingRule.prototype.getMatchingRuleId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.billing.entities.v1alpha4.MatchingRule} returns this
 */
proto.services.billing.entities.v1alpha4.MatchingRule.prototype.setMatchingRuleId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ProductConfig config = 2;
 * @return {?proto.services.billing.entities.v1alpha4.ProductConfig}
 */
proto.services.billing.entities.v1alpha4.MatchingRule.prototype.getConfig = function() {
  return /** @type{?proto.services.billing.entities.v1alpha4.ProductConfig} */ (
    jspb.Message.getWrapperField(this, services_billing_entities_v1alpha4_products_pb.ProductConfig, 2));
};


/**
 * @param {?proto.services.billing.entities.v1alpha4.ProductConfig|undefined} value
 * @return {!proto.services.billing.entities.v1alpha4.MatchingRule} returns this
*/
proto.services.billing.entities.v1alpha4.MatchingRule.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.billing.entities.v1alpha4.MatchingRule} returns this
 */
proto.services.billing.entities.v1alpha4.MatchingRule.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.billing.entities.v1alpha4.MatchingRule.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp create_time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.services.billing.entities.v1alpha4.MatchingRule.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.services.billing.entities.v1alpha4.MatchingRule} returns this
*/
proto.services.billing.entities.v1alpha4.MatchingRule.prototype.setCreateTime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.billing.entities.v1alpha4.MatchingRule} returns this
 */
proto.services.billing.entities.v1alpha4.MatchingRule.prototype.clearCreateTime = function() {
  return this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.billing.entities.v1alpha4.MatchingRule.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp delete_time = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.services.billing.entities.v1alpha4.MatchingRule.prototype.getDeleteTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.services.billing.entities.v1alpha4.MatchingRule} returns this
*/
proto.services.billing.entities.v1alpha4.MatchingRule.prototype.setDeleteTime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.billing.entities.v1alpha4.MatchingRule} returns this
 */
proto.services.billing.entities.v1alpha4.MatchingRule.prototype.clearDeleteTime = function() {
  return this.setDeleteTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.billing.entities.v1alpha4.MatchingRule.prototype.hasDeleteTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp update_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.services.billing.entities.v1alpha4.MatchingRule.prototype.getUpdateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.services.billing.entities.v1alpha4.MatchingRule} returns this
*/
proto.services.billing.entities.v1alpha4.MatchingRule.prototype.setUpdateTime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.billing.entities.v1alpha4.MatchingRule} returns this
 */
proto.services.billing.entities.v1alpha4.MatchingRule.prototype.clearUpdateTime = function() {
  return this.setUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.billing.entities.v1alpha4.MatchingRule.prototype.hasUpdateTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional MatchingConfig rule_config = 6;
 * @return {?proto.services.billing.entities.v1alpha4.MatchingConfig}
 */
proto.services.billing.entities.v1alpha4.MatchingRule.prototype.getRuleConfig = function() {
  return /** @type{?proto.services.billing.entities.v1alpha4.MatchingConfig} */ (
    jspb.Message.getWrapperField(this, services_billing_entities_v1alpha4_matching_pb.MatchingConfig, 6));
};


/**
 * @param {?proto.services.billing.entities.v1alpha4.MatchingConfig|undefined} value
 * @return {!proto.services.billing.entities.v1alpha4.MatchingRule} returns this
*/
proto.services.billing.entities.v1alpha4.MatchingRule.prototype.setRuleConfig = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.billing.entities.v1alpha4.MatchingRule} returns this
 */
proto.services.billing.entities.v1alpha4.MatchingRule.prototype.clearRuleConfig = function() {
  return this.setRuleConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.billing.entities.v1alpha4.MatchingRule.prototype.hasRuleConfig = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional CountryCodePrefix country_code_prefix = 100;
 * @return {?proto.services.billing.entities.v1alpha4.CountryCodePrefix}
 */
proto.services.billing.entities.v1alpha4.MatchingRule.prototype.getCountryCodePrefix = function() {
  return /** @type{?proto.services.billing.entities.v1alpha4.CountryCodePrefix} */ (
    jspb.Message.getWrapperField(this, services_billing_entities_v1alpha4_matching_pb.CountryCodePrefix, 100));
};


/**
 * @param {?proto.services.billing.entities.v1alpha4.CountryCodePrefix|undefined} value
 * @return {!proto.services.billing.entities.v1alpha4.MatchingRule} returns this
*/
proto.services.billing.entities.v1alpha4.MatchingRule.prototype.setCountryCodePrefix = function(value) {
  return jspb.Message.setOneofWrapperField(this, 100, proto.services.billing.entities.v1alpha4.MatchingRule.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.billing.entities.v1alpha4.MatchingRule} returns this
 */
proto.services.billing.entities.v1alpha4.MatchingRule.prototype.clearCountryCodePrefix = function() {
  return this.setCountryCodePrefix(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.billing.entities.v1alpha4.MatchingRule.prototype.hasCountryCodePrefix = function() {
  return jspb.Message.getField(this, 100) != null;
};


goog.object.extend(exports, proto);
