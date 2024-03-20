// source: services/billing/v1alpha1/history.proto
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

var services_billing_entities_v1alpha1_history_pb = require('../../../services/billing/entities/v1alpha1/history_pb.js');
goog.object.extend(proto, services_billing_entities_v1alpha1_history_pb);
goog.exportSymbol('proto.services.billing.v1alpha1.GetRateHistoryRequest', null, global);
goog.exportSymbol('proto.services.billing.v1alpha1.GetRateHistoryResponse', null, global);
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
proto.services.billing.v1alpha1.GetRateHistoryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.billing.v1alpha1.GetRateHistoryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.billing.v1alpha1.GetRateHistoryRequest.displayName = 'proto.services.billing.v1alpha1.GetRateHistoryRequest';
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
proto.services.billing.v1alpha1.GetRateHistoryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.services.billing.v1alpha1.GetRateHistoryResponse.repeatedFields_, null);
};
goog.inherits(proto.services.billing.v1alpha1.GetRateHistoryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.billing.v1alpha1.GetRateHistoryResponse.displayName = 'proto.services.billing.v1alpha1.GetRateHistoryResponse';
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
proto.services.billing.v1alpha1.GetRateHistoryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.services.billing.v1alpha1.GetRateHistoryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.billing.v1alpha1.GetRateHistoryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.billing.v1alpha1.GetRateHistoryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.services.billing.v1alpha1.GetRateHistoryRequest}
 */
proto.services.billing.v1alpha1.GetRateHistoryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.billing.v1alpha1.GetRateHistoryRequest;
  return proto.services.billing.v1alpha1.GetRateHistoryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.billing.v1alpha1.GetRateHistoryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.billing.v1alpha1.GetRateHistoryRequest}
 */
proto.services.billing.v1alpha1.GetRateHistoryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
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
proto.services.billing.v1alpha1.GetRateHistoryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.billing.v1alpha1.GetRateHistoryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.billing.v1alpha1.GetRateHistoryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.billing.v1alpha1.GetRateHistoryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.services.billing.v1alpha1.GetRateHistoryRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.billing.v1alpha1.GetRateHistoryRequest} returns this
 */
proto.services.billing.v1alpha1.GetRateHistoryRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.services.billing.v1alpha1.GetRateHistoryResponse.repeatedFields_ = [1];



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
proto.services.billing.v1alpha1.GetRateHistoryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.services.billing.v1alpha1.GetRateHistoryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.billing.v1alpha1.GetRateHistoryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.billing.v1alpha1.GetRateHistoryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    historyList: jspb.Message.toObjectList(msg.getHistoryList(),
    services_billing_entities_v1alpha1_history_pb.RateHistoryItem.toObject, includeInstance)
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
 * @return {!proto.services.billing.v1alpha1.GetRateHistoryResponse}
 */
proto.services.billing.v1alpha1.GetRateHistoryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.billing.v1alpha1.GetRateHistoryResponse;
  return proto.services.billing.v1alpha1.GetRateHistoryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.billing.v1alpha1.GetRateHistoryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.billing.v1alpha1.GetRateHistoryResponse}
 */
proto.services.billing.v1alpha1.GetRateHistoryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new services_billing_entities_v1alpha1_history_pb.RateHistoryItem;
      reader.readMessage(value,services_billing_entities_v1alpha1_history_pb.RateHistoryItem.deserializeBinaryFromReader);
      msg.addHistory(value);
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
proto.services.billing.v1alpha1.GetRateHistoryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.billing.v1alpha1.GetRateHistoryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.billing.v1alpha1.GetRateHistoryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.billing.v1alpha1.GetRateHistoryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHistoryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      services_billing_entities_v1alpha1_history_pb.RateHistoryItem.serializeBinaryToWriter
    );
  }
};


/**
 * repeated services.billing.entities.v1alpha1.RateHistoryItem history = 1;
 * @return {!Array<!proto.services.billing.entities.v1alpha1.RateHistoryItem>}
 */
proto.services.billing.v1alpha1.GetRateHistoryResponse.prototype.getHistoryList = function() {
  return /** @type{!Array<!proto.services.billing.entities.v1alpha1.RateHistoryItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, services_billing_entities_v1alpha1_history_pb.RateHistoryItem, 1));
};


/**
 * @param {!Array<!proto.services.billing.entities.v1alpha1.RateHistoryItem>} value
 * @return {!proto.services.billing.v1alpha1.GetRateHistoryResponse} returns this
*/
proto.services.billing.v1alpha1.GetRateHistoryResponse.prototype.setHistoryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.services.billing.entities.v1alpha1.RateHistoryItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.services.billing.entities.v1alpha1.RateHistoryItem}
 */
proto.services.billing.v1alpha1.GetRateHistoryResponse.prototype.addHistory = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.services.billing.entities.v1alpha1.RateHistoryItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.services.billing.v1alpha1.GetRateHistoryResponse} returns this
 */
proto.services.billing.v1alpha1.GetRateHistoryResponse.prototype.clearHistoryList = function() {
  return this.setHistoryList([]);
};


goog.object.extend(exports, proto.services.billing.v1alpha1);
