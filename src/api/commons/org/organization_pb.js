// source: api/commons/org/organization.proto
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

var api_commons_org_pb = require('../../../api/commons/org_pb.js');
goog.object.extend(proto, api_commons_org_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('api.commons.org.Organization', null, proto);
goog.exportSymbol('api.commons.org.OrganizationDetails', null, proto);
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
proto.api.commons.org.Organization = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.Organization, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.Organization.displayName = 'proto.api.commons.org.Organization';
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
proto.api.commons.org.OrganizationDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.OrganizationDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.OrganizationDetails.displayName = 'proto.api.commons.org.OrganizationDetails';
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
proto.api.commons.org.Organization.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.Organization.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.Organization} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.Organization.toObject = function(includeInstance, msg) {
  var f, obj = {
orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
enabledRegionsMap: (f = msg.getEnabledRegionsMap()) ? f.toObject(includeInstance, undefined) : [],
regionId: jspb.Message.getFieldWithDefault(msg, 3, ""),
billingId: jspb.Message.getFieldWithDefault(msg, 4, ""),
clientSid: jspb.Message.getFieldWithDefault(msg, 5, 0),
name: jspb.Message.getFieldWithDefault(msg, 6, ""),
addDate: (f = msg.getAddDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
isManualOnlyAccount: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
backofficeTheme: jspb.Message.getFieldWithDefault(msg, 9, 0),
archived: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
crmId: jspb.Message.getFieldWithDefault(msg, 11, ""),
timeZone: jspb.Message.getFieldWithDefault(msg, 12, 0),
callbacksServiceId: jspb.Message.getFieldWithDefault(msg, 13, ""),
p3OwnerId: jspb.Message.getFieldWithDefault(msg, 14, "")
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
 * @return {!proto.api.commons.org.Organization}
 */
proto.api.commons.org.Organization.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.Organization;
  return proto.api.commons.org.Organization.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.Organization} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.Organization}
 */
proto.api.commons.org.Organization.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = msg.getEnabledRegionsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt64, null, "", 0);
         });
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegionId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBillingId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setClientSid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setAddDate(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsManualOnlyAccount(value);
      break;
    case 9:
      var value = /** @type {!proto.api.commons.ClientSkin} */ (reader.readEnum());
      msg.setBackofficeTheme(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setArchived(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setCrmId(value);
      break;
    case 12:
      var value = /** @type {!proto.api.commons.TimeZone} */ (reader.readEnum());
      msg.setTimeZone(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setCallbacksServiceId(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setP3OwnerId(value);
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
proto.api.commons.org.Organization.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.Organization.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.Organization} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.Organization.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEnabledRegionsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt64);
  }
  f = message.getRegionId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBillingId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getClientSid();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getAddDate();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getIsManualOnlyAccount();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getBackofficeTheme();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getArchived();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getCrmId();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getTimeZone();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getCallbacksServiceId();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getP3OwnerId();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.commons.org.Organization.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.Organization} returns this
 */
proto.api.commons.org.Organization.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, int64> enabled_regions = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.api.commons.org.Organization.prototype.getEnabledRegionsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.commons.org.Organization} returns this
 */
proto.api.commons.org.Organization.prototype.clearEnabledRegionsMap = function() {
  this.getEnabledRegionsMap().clear();
  return this;
};


/**
 * optional string region_id = 3;
 * @return {string}
 */
proto.api.commons.org.Organization.prototype.getRegionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.Organization} returns this
 */
proto.api.commons.org.Organization.prototype.setRegionId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string billing_id = 4;
 * @return {string}
 */
proto.api.commons.org.Organization.prototype.getBillingId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.Organization} returns this
 */
proto.api.commons.org.Organization.prototype.setBillingId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 client_sid = 5;
 * @return {number}
 */
proto.api.commons.org.Organization.prototype.getClientSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.Organization} returns this
 */
proto.api.commons.org.Organization.prototype.setClientSid = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string name = 6;
 * @return {string}
 */
proto.api.commons.org.Organization.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.Organization} returns this
 */
proto.api.commons.org.Organization.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp add_date = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.org.Organization.prototype.getAddDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.org.Organization} returns this
*/
proto.api.commons.org.Organization.prototype.setAddDate = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.Organization} returns this
 */
proto.api.commons.org.Organization.prototype.clearAddDate = function() {
  return this.setAddDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.Organization.prototype.hasAddDate = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool is_manual_only_account = 8;
 * @return {boolean}
 */
proto.api.commons.org.Organization.prototype.getIsManualOnlyAccount = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.Organization} returns this
 */
proto.api.commons.org.Organization.prototype.setIsManualOnlyAccount = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional api.commons.ClientSkin backoffice_theme = 9;
 * @return {!proto.api.commons.ClientSkin}
 */
proto.api.commons.org.Organization.prototype.getBackofficeTheme = function() {
  return /** @type {!proto.api.commons.ClientSkin} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.api.commons.ClientSkin} value
 * @return {!proto.api.commons.org.Organization} returns this
 */
proto.api.commons.org.Organization.prototype.setBackofficeTheme = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional bool archived = 10;
 * @return {boolean}
 */
proto.api.commons.org.Organization.prototype.getArchived = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.Organization} returns this
 */
proto.api.commons.org.Organization.prototype.setArchived = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional string crm_id = 11;
 * @return {string}
 */
proto.api.commons.org.Organization.prototype.getCrmId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.Organization} returns this
 */
proto.api.commons.org.Organization.prototype.setCrmId = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional api.commons.TimeZone time_zone = 12;
 * @return {!proto.api.commons.TimeZone}
 */
proto.api.commons.org.Organization.prototype.getTimeZone = function() {
  return /** @type {!proto.api.commons.TimeZone} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.api.commons.TimeZone} value
 * @return {!proto.api.commons.org.Organization} returns this
 */
proto.api.commons.org.Organization.prototype.setTimeZone = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional string callbacks_service_id = 13;
 * @return {string}
 */
proto.api.commons.org.Organization.prototype.getCallbacksServiceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.Organization} returns this
 */
proto.api.commons.org.Organization.prototype.setCallbacksServiceId = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string p3_owner_id = 14;
 * @return {string}
 */
proto.api.commons.org.Organization.prototype.getP3OwnerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.Organization} returns this
 */
proto.api.commons.org.Organization.prototype.setP3OwnerId = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
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
proto.api.commons.org.OrganizationDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.OrganizationDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.OrganizationDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.OrganizationDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
organization: (f = msg.getOrganization()) && proto.api.commons.org.Organization.toObject(includeInstance, f),
lastScheduledDate: (f = msg.getLastScheduledDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.api.commons.org.OrganizationDetails}
 */
proto.api.commons.org.OrganizationDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.OrganizationDetails;
  return proto.api.commons.org.OrganizationDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.OrganizationDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.OrganizationDetails}
 */
proto.api.commons.org.OrganizationDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.commons.org.Organization;
      reader.readMessage(value,proto.api.commons.org.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastScheduledDate(value);
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
proto.api.commons.org.OrganizationDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.OrganizationDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.OrganizationDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.OrganizationDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.commons.org.Organization.serializeBinaryToWriter
    );
  }
  f = message.getLastScheduledDate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional Organization organization = 1;
 * @return {?proto.api.commons.org.Organization}
 */
proto.api.commons.org.OrganizationDetails.prototype.getOrganization = function() {
  return /** @type{?proto.api.commons.org.Organization} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.Organization, 1));
};


/**
 * @param {?proto.api.commons.org.Organization|undefined} value
 * @return {!proto.api.commons.org.OrganizationDetails} returns this
*/
proto.api.commons.org.OrganizationDetails.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.OrganizationDetails} returns this
 */
proto.api.commons.org.OrganizationDetails.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.OrganizationDetails.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp last_scheduled_date = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.org.OrganizationDetails.prototype.getLastScheduledDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.org.OrganizationDetails} returns this
*/
proto.api.commons.org.OrganizationDetails.prototype.setLastScheduledDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.OrganizationDetails} returns this
 */
proto.api.commons.org.OrganizationDetails.prototype.clearLastScheduledDate = function() {
  return this.setLastScheduledDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.OrganizationDetails.prototype.hasLastScheduledDate = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto);
