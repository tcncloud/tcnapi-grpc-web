// source: api/commons/contactmanager.proto
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
var localGlobalThis = require("../../global.js");
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
goog.exportSymbol('proto.api.commons.ContactEntryStatus', null, global);
goog.exportSymbol('proto.api.commons.ContactListStatus', null, global);
goog.exportSymbol('proto.api.commons.ContactManagerEntry', null, global);
goog.exportSymbol('proto.api.commons.ContactManagerEntryVal', null, global);
goog.exportSymbol('proto.api.commons.ContactManagerList', null, global);
goog.exportSymbol('proto.api.commons.DeDuplicationMergeStrategy', null, global);
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
proto.api.commons.ContactManagerEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.ContactManagerEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.ContactManagerEntry.displayName = 'proto.api.commons.ContactManagerEntry';
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
proto.api.commons.ContactManagerList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.ContactManagerList.repeatedFields_, null);
};
goog.inherits(proto.api.commons.ContactManagerList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.ContactManagerList.displayName = 'proto.api.commons.ContactManagerList';
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
proto.api.commons.ContactManagerEntryVal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.ContactManagerEntryVal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.ContactManagerEntryVal.displayName = 'proto.api.commons.ContactManagerEntryVal';
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
proto.api.commons.ContactManagerEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.ContactManagerEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.ContactManagerEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ContactManagerEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
contactManagerEntryId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
contactManagerEntryListId: jspb.Message.getFieldWithDefault(msg, 2, "0"),
key: jspb.Message.getFieldWithDefault(msg, 3, ""),
value: jspb.Message.getFieldWithDefault(msg, 4, ""),
type: jspb.Message.getFieldWithDefault(msg, 5, ""),
dateCreated: (f = msg.getDateCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.api.commons.ContactManagerEntry}
 */
proto.api.commons.ContactManagerEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.ContactManagerEntry;
  return proto.api.commons.ContactManagerEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.ContactManagerEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.ContactManagerEntry}
 */
proto.api.commons.ContactManagerEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setContactManagerEntryId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setContactManagerEntryListId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateCreated(value);
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
proto.api.commons.ContactManagerEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.ContactManagerEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.ContactManagerEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ContactManagerEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContactManagerEntryId();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getContactManagerEntryListId();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      2,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDateCreated();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 contact_manager_entry_id = 1;
 * @return {string}
 */
proto.api.commons.ContactManagerEntry.prototype.getContactManagerEntryId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ContactManagerEntry} returns this
 */
proto.api.commons.ContactManagerEntry.prototype.setContactManagerEntryId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional int64 contact_manager_entry_list_id = 2;
 * @return {string}
 */
proto.api.commons.ContactManagerEntry.prototype.getContactManagerEntryListId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ContactManagerEntry} returns this
 */
proto.api.commons.ContactManagerEntry.prototype.setContactManagerEntryListId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional string key = 3;
 * @return {string}
 */
proto.api.commons.ContactManagerEntry.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ContactManagerEntry} returns this
 */
proto.api.commons.ContactManagerEntry.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string value = 4;
 * @return {string}
 */
proto.api.commons.ContactManagerEntry.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ContactManagerEntry} returns this
 */
proto.api.commons.ContactManagerEntry.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string type = 5;
 * @return {string}
 */
proto.api.commons.ContactManagerEntry.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ContactManagerEntry} returns this
 */
proto.api.commons.ContactManagerEntry.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp date_created = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.ContactManagerEntry.prototype.getDateCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.ContactManagerEntry} returns this
*/
proto.api.commons.ContactManagerEntry.prototype.setDateCreated = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.ContactManagerEntry} returns this
 */
proto.api.commons.ContactManagerEntry.prototype.clearDateCreated = function() {
  return this.setDateCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.ContactManagerEntry.prototype.hasDateCreated = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.ContactManagerList.repeatedFields_ = [6];



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
proto.api.commons.ContactManagerList.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.ContactManagerList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.ContactManagerList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ContactManagerList.toObject = function(includeInstance, msg) {
  var f, obj = {
contactManagerListId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
orgId: jspb.Message.getFieldWithDefault(msg, 2, ""),
projectId: jspb.Message.getFieldWithDefault(msg, 3, "0"),
fileName: jspb.Message.getFieldWithDefault(msg, 4, ""),
description: jspb.Message.getFieldWithDefault(msg, 5, ""),
listDetailsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
ttl: jspb.Message.getFieldWithDefault(msg, 7, "0"),
dateCreated: (f = msg.getDateCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.api.commons.ContactManagerList}
 */
proto.api.commons.ContactManagerList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.ContactManagerList;
  return proto.api.commons.ContactManagerList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.ContactManagerList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.ContactManagerList}
 */
proto.api.commons.ContactManagerList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setContactManagerListId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setProjectId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addListDetails(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setTtl(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateCreated(value);
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
proto.api.commons.ContactManagerList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.ContactManagerList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.ContactManagerList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ContactManagerList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContactManagerListId();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
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
  f = message.getProjectId();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      3,
      f
    );
  }
  f = message.getFileName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getListDetailsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getTtl();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      7,
      f
    );
  }
  f = message.getDateCreated();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 contact_manager_list_id = 1;
 * @return {string}
 */
proto.api.commons.ContactManagerList.prototype.getContactManagerListId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ContactManagerList} returns this
 */
proto.api.commons.ContactManagerList.prototype.setContactManagerListId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.commons.ContactManagerList.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ContactManagerList} returns this
 */
proto.api.commons.ContactManagerList.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 project_id = 3;
 * @return {string}
 */
proto.api.commons.ContactManagerList.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ContactManagerList} returns this
 */
proto.api.commons.ContactManagerList.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};


/**
 * optional string file_name = 4;
 * @return {string}
 */
proto.api.commons.ContactManagerList.prototype.getFileName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ContactManagerList} returns this
 */
proto.api.commons.ContactManagerList.prototype.setFileName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.api.commons.ContactManagerList.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ContactManagerList} returns this
 */
proto.api.commons.ContactManagerList.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated string list_details = 6;
 * @return {!Array<string>}
 */
proto.api.commons.ContactManagerList.prototype.getListDetailsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.commons.ContactManagerList} returns this
 */
proto.api.commons.ContactManagerList.prototype.setListDetailsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.ContactManagerList} returns this
 */
proto.api.commons.ContactManagerList.prototype.addListDetails = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.ContactManagerList} returns this
 */
proto.api.commons.ContactManagerList.prototype.clearListDetailsList = function() {
  return this.setListDetailsList([]);
};


/**
 * optional int64 ttl = 7;
 * @return {string}
 */
proto.api.commons.ContactManagerList.prototype.getTtl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ContactManagerList} returns this
 */
proto.api.commons.ContactManagerList.prototype.setTtl = function(value) {
  return jspb.Message.setProto3StringIntField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp date_created = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.ContactManagerList.prototype.getDateCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.ContactManagerList} returns this
*/
proto.api.commons.ContactManagerList.prototype.setDateCreated = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.ContactManagerList} returns this
 */
proto.api.commons.ContactManagerList.prototype.clearDateCreated = function() {
  return this.setDateCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.ContactManagerList.prototype.hasDateCreated = function() {
  return jspb.Message.getField(this, 8) != null;
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
proto.api.commons.ContactManagerEntryVal.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.ContactManagerEntryVal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.ContactManagerEntryVal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ContactManagerEntryVal.toObject = function(includeInstance, msg) {
  var f, obj = {
type: jspb.Message.getFieldWithDefault(msg, 1, ""),
value: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.api.commons.ContactManagerEntryVal}
 */
proto.api.commons.ContactManagerEntryVal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.ContactManagerEntryVal;
  return proto.api.commons.ContactManagerEntryVal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.ContactManagerEntryVal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.ContactManagerEntryVal}
 */
proto.api.commons.ContactManagerEntryVal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
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
proto.api.commons.ContactManagerEntryVal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.ContactManagerEntryVal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.ContactManagerEntryVal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ContactManagerEntryVal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.api.commons.ContactManagerEntryVal.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ContactManagerEntryVal} returns this
 */
proto.api.commons.ContactManagerEntryVal.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.api.commons.ContactManagerEntryVal.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ContactManagerEntryVal} returns this
 */
proto.api.commons.ContactManagerEntryVal.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.api.commons.DeDuplicationMergeStrategy = {
  KEEP_EXISTING_LIST: 0,
  REPLACE_EXISTING_LIST: 1
};

/**
 * @enum {number}
 */
proto.api.commons.ContactListStatus = {
  CONTACT_LIST_STATUS_NEW: 0
};

/**
 * @enum {number}
 */
proto.api.commons.ContactEntryStatus = {
  CONTACT_ENTRY_STATUS_NEW: 0,
  CONTACT_ENTRY_STATUS_INUSE: 1,
  CONTACT_ENTRY_STATUS_NOTREF: 2,
  CONTACT_ENTRY_STATUS_DONE: 3,
  CONTACT_ENTRY_STATUS_EXPIRED: 4
};

goog.object.extend(exports, proto.api.commons);
