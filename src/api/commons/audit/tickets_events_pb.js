// source: api/commons/audit/tickets_events.proto
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

var api_commons_tickets_pb = require('../../../api/commons/tickets_pb.js');
goog.object.extend(proto, api_commons_tickets_pb);
goog.exportSymbol('proto.api.commons.audit.TicketCustomFieldCreateEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.TicketCustomFieldEditEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.TicketEvent', null, global);
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
proto.api.commons.audit.TicketEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.TicketEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.TicketEvent.displayName = 'proto.api.commons.audit.TicketEvent';
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
proto.api.commons.audit.TicketCustomFieldCreateEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.TicketCustomFieldCreateEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.TicketCustomFieldCreateEvent.displayName = 'proto.api.commons.audit.TicketCustomFieldCreateEvent';
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
proto.api.commons.audit.TicketCustomFieldEditEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.TicketCustomFieldEditEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.TicketCustomFieldEditEvent.displayName = 'proto.api.commons.audit.TicketCustomFieldEditEvent';
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
proto.api.commons.audit.TicketEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.TicketEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.TicketEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.TicketEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
editticket: (f = msg.getEditticket()) && api_commons_tickets_pb.EditTicket.toObject(includeInstance, f),
createdById: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.api.commons.audit.TicketEvent}
 */
proto.api.commons.audit.TicketEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.TicketEvent;
  return proto.api.commons.audit.TicketEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.TicketEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.TicketEvent}
 */
proto.api.commons.audit.TicketEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_tickets_pb.EditTicket;
      reader.readMessage(value,api_commons_tickets_pb.EditTicket.deserializeBinaryFromReader);
      msg.setEditticket(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedById(value);
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
proto.api.commons.audit.TicketEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.TicketEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.TicketEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.TicketEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEditticket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_tickets_pb.EditTicket.serializeBinaryToWriter
    );
  }
  f = message.getCreatedById();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional api.commons.EditTicket editticket = 1;
 * @return {?proto.api.commons.EditTicket}
 */
proto.api.commons.audit.TicketEvent.prototype.getEditticket = function() {
  return /** @type{?proto.api.commons.EditTicket} */ (
    jspb.Message.getWrapperField(this, api_commons_tickets_pb.EditTicket, 1));
};


/**
 * @param {?proto.api.commons.EditTicket|undefined} value
 * @return {!proto.api.commons.audit.TicketEvent} returns this
*/
proto.api.commons.audit.TicketEvent.prototype.setEditticket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.TicketEvent} returns this
 */
proto.api.commons.audit.TicketEvent.prototype.clearEditticket = function() {
  return this.setEditticket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.TicketEvent.prototype.hasEditticket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string created_by_id = 2;
 * @return {string}
 */
proto.api.commons.audit.TicketEvent.prototype.getCreatedById = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.TicketEvent} returns this
 */
proto.api.commons.audit.TicketEvent.prototype.setCreatedById = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.api.commons.audit.TicketCustomFieldCreateEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.TicketCustomFieldCreateEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.TicketCustomFieldCreateEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.TicketCustomFieldCreateEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
ticketCustomFieldAuditLog: (f = msg.getTicketCustomFieldAuditLog()) && api_commons_tickets_pb.TicketCustomFieldAuditLog.toObject(includeInstance, f),
createdById: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.api.commons.audit.TicketCustomFieldCreateEvent}
 */
proto.api.commons.audit.TicketCustomFieldCreateEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.TicketCustomFieldCreateEvent;
  return proto.api.commons.audit.TicketCustomFieldCreateEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.TicketCustomFieldCreateEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.TicketCustomFieldCreateEvent}
 */
proto.api.commons.audit.TicketCustomFieldCreateEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_tickets_pb.TicketCustomFieldAuditLog;
      reader.readMessage(value,api_commons_tickets_pb.TicketCustomFieldAuditLog.deserializeBinaryFromReader);
      msg.setTicketCustomFieldAuditLog(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedById(value);
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
proto.api.commons.audit.TicketCustomFieldCreateEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.TicketCustomFieldCreateEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.TicketCustomFieldCreateEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.TicketCustomFieldCreateEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicketCustomFieldAuditLog();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_tickets_pb.TicketCustomFieldAuditLog.serializeBinaryToWriter
    );
  }
  f = message.getCreatedById();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional api.commons.TicketCustomFieldAuditLog ticket_custom_field_audit_log = 1;
 * @return {?proto.api.commons.TicketCustomFieldAuditLog}
 */
proto.api.commons.audit.TicketCustomFieldCreateEvent.prototype.getTicketCustomFieldAuditLog = function() {
  return /** @type{?proto.api.commons.TicketCustomFieldAuditLog} */ (
    jspb.Message.getWrapperField(this, api_commons_tickets_pb.TicketCustomFieldAuditLog, 1));
};


/**
 * @param {?proto.api.commons.TicketCustomFieldAuditLog|undefined} value
 * @return {!proto.api.commons.audit.TicketCustomFieldCreateEvent} returns this
*/
proto.api.commons.audit.TicketCustomFieldCreateEvent.prototype.setTicketCustomFieldAuditLog = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.TicketCustomFieldCreateEvent} returns this
 */
proto.api.commons.audit.TicketCustomFieldCreateEvent.prototype.clearTicketCustomFieldAuditLog = function() {
  return this.setTicketCustomFieldAuditLog(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.TicketCustomFieldCreateEvent.prototype.hasTicketCustomFieldAuditLog = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string created_by_id = 2;
 * @return {string}
 */
proto.api.commons.audit.TicketCustomFieldCreateEvent.prototype.getCreatedById = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.TicketCustomFieldCreateEvent} returns this
 */
proto.api.commons.audit.TicketCustomFieldCreateEvent.prototype.setCreatedById = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.api.commons.audit.TicketCustomFieldEditEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.TicketCustomFieldEditEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.TicketCustomFieldEditEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.TicketCustomFieldEditEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
ticketCustomFieldAuditLog: (f = msg.getTicketCustomFieldAuditLog()) && api_commons_tickets_pb.TicketCustomFieldAuditLog.toObject(includeInstance, f),
createdById: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.api.commons.audit.TicketCustomFieldEditEvent}
 */
proto.api.commons.audit.TicketCustomFieldEditEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.TicketCustomFieldEditEvent;
  return proto.api.commons.audit.TicketCustomFieldEditEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.TicketCustomFieldEditEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.TicketCustomFieldEditEvent}
 */
proto.api.commons.audit.TicketCustomFieldEditEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_tickets_pb.TicketCustomFieldAuditLog;
      reader.readMessage(value,api_commons_tickets_pb.TicketCustomFieldAuditLog.deserializeBinaryFromReader);
      msg.setTicketCustomFieldAuditLog(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedById(value);
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
proto.api.commons.audit.TicketCustomFieldEditEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.TicketCustomFieldEditEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.TicketCustomFieldEditEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.TicketCustomFieldEditEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicketCustomFieldAuditLog();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_tickets_pb.TicketCustomFieldAuditLog.serializeBinaryToWriter
    );
  }
  f = message.getCreatedById();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional api.commons.TicketCustomFieldAuditLog ticket_custom_field_audit_log = 1;
 * @return {?proto.api.commons.TicketCustomFieldAuditLog}
 */
proto.api.commons.audit.TicketCustomFieldEditEvent.prototype.getTicketCustomFieldAuditLog = function() {
  return /** @type{?proto.api.commons.TicketCustomFieldAuditLog} */ (
    jspb.Message.getWrapperField(this, api_commons_tickets_pb.TicketCustomFieldAuditLog, 1));
};


/**
 * @param {?proto.api.commons.TicketCustomFieldAuditLog|undefined} value
 * @return {!proto.api.commons.audit.TicketCustomFieldEditEvent} returns this
*/
proto.api.commons.audit.TicketCustomFieldEditEvent.prototype.setTicketCustomFieldAuditLog = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.TicketCustomFieldEditEvent} returns this
 */
proto.api.commons.audit.TicketCustomFieldEditEvent.prototype.clearTicketCustomFieldAuditLog = function() {
  return this.setTicketCustomFieldAuditLog(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.TicketCustomFieldEditEvent.prototype.hasTicketCustomFieldAuditLog = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string created_by_id = 2;
 * @return {string}
 */
proto.api.commons.audit.TicketCustomFieldEditEvent.prototype.getCreatedById = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.TicketCustomFieldEditEvent} returns this
 */
proto.api.commons.audit.TicketCustomFieldEditEvent.prototype.setCreatedById = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.api.commons.audit);
