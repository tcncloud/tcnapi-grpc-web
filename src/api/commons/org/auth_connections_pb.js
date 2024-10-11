// source: api/commons/org/auth_connections.proto
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
goog.exportSymbol('api.commons.org.AuthConnectionSettings', null, proto);
goog.exportSymbol('api.commons.org.AuthConnectionSettings.SecretExpiration', null, proto);
goog.exportSymbol('api.commons.org.ConnectionType', null, proto);
goog.exportSymbol('api.commons.org.GroupItem', null, proto);
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
proto.api.commons.org.AuthConnectionSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.AuthConnectionSettings.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.AuthConnectionSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.AuthConnectionSettings.displayName = 'proto.api.commons.org.AuthConnectionSettings';
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
proto.api.commons.org.AuthConnectionSettings.SecretExpiration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.AuthConnectionSettings.SecretExpiration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.AuthConnectionSettings.SecretExpiration.displayName = 'proto.api.commons.org.AuthConnectionSettings.SecretExpiration';
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
proto.api.commons.org.GroupItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.GroupItem.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.GroupItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.GroupItem.displayName = 'proto.api.commons.org.GroupItem';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.AuthConnectionSettings.repeatedFields_ = [7];



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
proto.api.commons.org.AuthConnectionSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.AuthConnectionSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.AuthConnectionSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.AuthConnectionSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
issuerUrl: jspb.Message.getFieldWithDefault(msg, 1, ""),
tenantUrl: jspb.Message.getFieldWithDefault(msg, 2, ""),
clientId: jspb.Message.getFieldWithDefault(msg, 3, ""),
connectionId: jspb.Message.getFieldWithDefault(msg, 4, ""),
secretExpiration: (f = msg.getSecretExpiration()) && proto.api.commons.org.AuthConnectionSettings.SecretExpiration.toObject(includeInstance, f),
defaultGroup: (f = msg.getDefaultGroup()) && proto.api.commons.org.GroupItem.toObject(includeInstance, f),
customGroupsList: jspb.Message.toObjectList(msg.getCustomGroupsList(),
    proto.api.commons.org.GroupItem.toObject, includeInstance),
orgId: jspb.Message.getFieldWithDefault(msg, 8, ""),
name: jspb.Message.getFieldWithDefault(msg, 9, ""),
type: jspb.Message.getFieldWithDefault(msg, 10, 0),
resourceUrl: jspb.Message.getFieldWithDefault(msg, 100, ""),
useGovernmentAzure: jspb.Message.getBooleanFieldWithDefault(msg, 101, false)
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
 * @return {!proto.api.commons.org.AuthConnectionSettings}
 */
proto.api.commons.org.AuthConnectionSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.AuthConnectionSettings;
  return proto.api.commons.org.AuthConnectionSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.AuthConnectionSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.AuthConnectionSettings}
 */
proto.api.commons.org.AuthConnectionSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIssuerUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTenantUrl(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionId(value);
      break;
    case 5:
      var value = new proto.api.commons.org.AuthConnectionSettings.SecretExpiration;
      reader.readMessage(value,proto.api.commons.org.AuthConnectionSettings.SecretExpiration.deserializeBinaryFromReader);
      msg.setSecretExpiration(value);
      break;
    case 6:
      var value = new proto.api.commons.org.GroupItem;
      reader.readMessage(value,proto.api.commons.org.GroupItem.deserializeBinaryFromReader);
      msg.setDefaultGroup(value);
      break;
    case 7:
      var value = new proto.api.commons.org.GroupItem;
      reader.readMessage(value,proto.api.commons.org.GroupItem.deserializeBinaryFromReader);
      msg.addCustomGroups(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 10:
      var value = /** @type {!proto.api.commons.org.ConnectionType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 100:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceUrl(value);
      break;
    case 101:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseGovernmentAzure(value);
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
proto.api.commons.org.AuthConnectionSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.AuthConnectionSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.AuthConnectionSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.AuthConnectionSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIssuerUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTenantUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getConnectionId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSecretExpiration();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.api.commons.org.AuthConnectionSettings.SecretExpiration.serializeBinaryToWriter
    );
  }
  f = message.getDefaultGroup();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.api.commons.org.GroupItem.serializeBinaryToWriter
    );
  }
  f = message.getCustomGroupsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.api.commons.org.GroupItem.serializeBinaryToWriter
    );
  }
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getResourceUrl();
  if (f.length > 0) {
    writer.writeString(
      100,
      f
    );
  }
  f = message.getUseGovernmentAzure();
  if (f) {
    writer.writeBool(
      101,
      f
    );
  }
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
proto.api.commons.org.AuthConnectionSettings.SecretExpiration.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.AuthConnectionSettings.SecretExpiration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.AuthConnectionSettings.SecretExpiration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.AuthConnectionSettings.SecretExpiration.toObject = function(includeInstance, msg) {
  var f, obj = {
date: (f = msg.getDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.api.commons.org.AuthConnectionSettings.SecretExpiration}
 */
proto.api.commons.org.AuthConnectionSettings.SecretExpiration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.AuthConnectionSettings.SecretExpiration;
  return proto.api.commons.org.AuthConnectionSettings.SecretExpiration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.AuthConnectionSettings.SecretExpiration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.AuthConnectionSettings.SecretExpiration}
 */
proto.api.commons.org.AuthConnectionSettings.SecretExpiration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDate(value);
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
proto.api.commons.org.AuthConnectionSettings.SecretExpiration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.AuthConnectionSettings.SecretExpiration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.AuthConnectionSettings.SecretExpiration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.AuthConnectionSettings.SecretExpiration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp date = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.org.AuthConnectionSettings.SecretExpiration.prototype.getDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.org.AuthConnectionSettings.SecretExpiration} returns this
*/
proto.api.commons.org.AuthConnectionSettings.SecretExpiration.prototype.setDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.AuthConnectionSettings.SecretExpiration} returns this
 */
proto.api.commons.org.AuthConnectionSettings.SecretExpiration.prototype.clearDate = function() {
  return this.setDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.AuthConnectionSettings.SecretExpiration.prototype.hasDate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string issuer_url = 1;
 * @return {string}
 */
proto.api.commons.org.AuthConnectionSettings.prototype.getIssuerUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.AuthConnectionSettings} returns this
 */
proto.api.commons.org.AuthConnectionSettings.prototype.setIssuerUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string tenant_url = 2;
 * @return {string}
 */
proto.api.commons.org.AuthConnectionSettings.prototype.getTenantUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.AuthConnectionSettings} returns this
 */
proto.api.commons.org.AuthConnectionSettings.prototype.setTenantUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string client_id = 3;
 * @return {string}
 */
proto.api.commons.org.AuthConnectionSettings.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.AuthConnectionSettings} returns this
 */
proto.api.commons.org.AuthConnectionSettings.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string connection_id = 4;
 * @return {string}
 */
proto.api.commons.org.AuthConnectionSettings.prototype.getConnectionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.AuthConnectionSettings} returns this
 */
proto.api.commons.org.AuthConnectionSettings.prototype.setConnectionId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional SecretExpiration secret_expiration = 5;
 * @return {?proto.api.commons.org.AuthConnectionSettings.SecretExpiration}
 */
proto.api.commons.org.AuthConnectionSettings.prototype.getSecretExpiration = function() {
  return /** @type{?proto.api.commons.org.AuthConnectionSettings.SecretExpiration} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.AuthConnectionSettings.SecretExpiration, 5));
};


/**
 * @param {?proto.api.commons.org.AuthConnectionSettings.SecretExpiration|undefined} value
 * @return {!proto.api.commons.org.AuthConnectionSettings} returns this
*/
proto.api.commons.org.AuthConnectionSettings.prototype.setSecretExpiration = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.AuthConnectionSettings} returns this
 */
proto.api.commons.org.AuthConnectionSettings.prototype.clearSecretExpiration = function() {
  return this.setSecretExpiration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.AuthConnectionSettings.prototype.hasSecretExpiration = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional GroupItem default_group = 6;
 * @return {?proto.api.commons.org.GroupItem}
 */
proto.api.commons.org.AuthConnectionSettings.prototype.getDefaultGroup = function() {
  return /** @type{?proto.api.commons.org.GroupItem} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.GroupItem, 6));
};


/**
 * @param {?proto.api.commons.org.GroupItem|undefined} value
 * @return {!proto.api.commons.org.AuthConnectionSettings} returns this
*/
proto.api.commons.org.AuthConnectionSettings.prototype.setDefaultGroup = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.AuthConnectionSettings} returns this
 */
proto.api.commons.org.AuthConnectionSettings.prototype.clearDefaultGroup = function() {
  return this.setDefaultGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.AuthConnectionSettings.prototype.hasDefaultGroup = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated GroupItem custom_groups = 7;
 * @return {!Array<!proto.api.commons.org.GroupItem>}
 */
proto.api.commons.org.AuthConnectionSettings.prototype.getCustomGroupsList = function() {
  return /** @type{!Array<!proto.api.commons.org.GroupItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.org.GroupItem, 7));
};


/**
 * @param {!Array<!proto.api.commons.org.GroupItem>} value
 * @return {!proto.api.commons.org.AuthConnectionSettings} returns this
*/
proto.api.commons.org.AuthConnectionSettings.prototype.setCustomGroupsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.api.commons.org.GroupItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.GroupItem}
 */
proto.api.commons.org.AuthConnectionSettings.prototype.addCustomGroups = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.api.commons.org.GroupItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.AuthConnectionSettings} returns this
 */
proto.api.commons.org.AuthConnectionSettings.prototype.clearCustomGroupsList = function() {
  return this.setCustomGroupsList([]);
};


/**
 * optional string org_id = 8;
 * @return {string}
 */
proto.api.commons.org.AuthConnectionSettings.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.AuthConnectionSettings} returns this
 */
proto.api.commons.org.AuthConnectionSettings.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string name = 9;
 * @return {string}
 */
proto.api.commons.org.AuthConnectionSettings.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.AuthConnectionSettings} returns this
 */
proto.api.commons.org.AuthConnectionSettings.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional ConnectionType type = 10;
 * @return {!proto.api.commons.org.ConnectionType}
 */
proto.api.commons.org.AuthConnectionSettings.prototype.getType = function() {
  return /** @type {!proto.api.commons.org.ConnectionType} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.api.commons.org.ConnectionType} value
 * @return {!proto.api.commons.org.AuthConnectionSettings} returns this
 */
proto.api.commons.org.AuthConnectionSettings.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional string resource_url = 100;
 * @return {string}
 */
proto.api.commons.org.AuthConnectionSettings.prototype.getResourceUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 100, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.AuthConnectionSettings} returns this
 */
proto.api.commons.org.AuthConnectionSettings.prototype.setResourceUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 100, value);
};


/**
 * optional bool use_government_azure = 101;
 * @return {boolean}
 */
proto.api.commons.org.AuthConnectionSettings.prototype.getUseGovernmentAzure = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 101, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.AuthConnectionSettings} returns this
 */
proto.api.commons.org.AuthConnectionSettings.prototype.setUseGovernmentAzure = function(value) {
  return jspb.Message.setProto3BooleanField(this, 101, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.GroupItem.repeatedFields_ = [5];



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
proto.api.commons.org.GroupItem.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.GroupItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.GroupItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.GroupItem.toObject = function(includeInstance, msg) {
  var f, obj = {
groupName: jspb.Message.getFieldWithDefault(msg, 1, ""),
huntGroupSid: jspb.Message.getFieldWithDefault(msg, 2, 0),
agentProfileGroupId: jspb.Message.getFieldWithDefault(msg, 3, ""),
p3PermissionGroupId: jspb.Message.getFieldWithDefault(msg, 4, ""),
permissionGroupIdsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.api.commons.org.GroupItem}
 */
proto.api.commons.org.GroupItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.GroupItem;
  return proto.api.commons.org.GroupItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.GroupItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.GroupItem}
 */
proto.api.commons.org.GroupItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHuntGroupSid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAgentProfileGroupId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setP3PermissionGroupId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addPermissionGroupIds(value);
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
proto.api.commons.org.GroupItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.GroupItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.GroupItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.GroupItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getAgentProfileGroupId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getP3PermissionGroupId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPermissionGroupIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional string group_name = 1;
 * @return {string}
 */
proto.api.commons.org.GroupItem.prototype.getGroupName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.GroupItem} returns this
 */
proto.api.commons.org.GroupItem.prototype.setGroupName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 hunt_group_sid = 2;
 * @return {number}
 */
proto.api.commons.org.GroupItem.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.GroupItem} returns this
 */
proto.api.commons.org.GroupItem.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string agent_profile_group_id = 3;
 * @return {string}
 */
proto.api.commons.org.GroupItem.prototype.getAgentProfileGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.GroupItem} returns this
 */
proto.api.commons.org.GroupItem.prototype.setAgentProfileGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string p3_permission_group_id = 4;
 * @return {string}
 */
proto.api.commons.org.GroupItem.prototype.getP3PermissionGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.GroupItem} returns this
 */
proto.api.commons.org.GroupItem.prototype.setP3PermissionGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated string permission_group_ids = 5;
 * @return {!Array<string>}
 */
proto.api.commons.org.GroupItem.prototype.getPermissionGroupIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.commons.org.GroupItem} returns this
 */
proto.api.commons.org.GroupItem.prototype.setPermissionGroupIdsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.GroupItem} returns this
 */
proto.api.commons.org.GroupItem.prototype.addPermissionGroupIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.GroupItem} returns this
 */
proto.api.commons.org.GroupItem.prototype.clearPermissionGroupIdsList = function() {
  return this.setPermissionGroupIdsList([]);
};


/**
 * @enum {number}
 */
proto.api.commons.org.ConnectionType = {
  CONNECTION_TYPE_NONE: 0,
  CONNECTION_TYPE_OIDC: 1,
  CONNECTION_TYPE_AZURE: 2
};

goog.object.extend(exports, proto);
