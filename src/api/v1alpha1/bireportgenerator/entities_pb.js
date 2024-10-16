// source: api/v1alpha1/bireportgenerator/entities.proto
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

var api_commons_bireportgenerator_pb = require('../../../api/commons/bireportgenerator_pb.js');
goog.object.extend(proto, api_commons_bireportgenerator_pb);
var api_commons_enums_pb = require('../../../api/commons/enums_pb.js');
goog.object.extend(proto, api_commons_enums_pb);
var api_commons_org_pb = require('../../../api/commons/org_pb.js');
goog.object.extend(proto, api_commons_org_pb);
var api_commons_types_pb = require('../../../api/commons/types_pb.js');
goog.object.extend(proto, api_commons_types_pb);
goog.exportSymbol('proto.api.v1alpha1.bireportgenerator.ReportJob', null, global);
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
proto.api.v1alpha1.bireportgenerator.ReportJob = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.bireportgenerator.ReportJob.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.bireportgenerator.ReportJob, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.bireportgenerator.ReportJob.displayName = 'proto.api.v1alpha1.bireportgenerator.ReportJob';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.repeatedFields_ = [9];



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
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.bireportgenerator.ReportJob.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.bireportgenerator.ReportJob} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.toObject = function(includeInstance, msg) {
  var f, obj = {
reportJobId: jspb.Message.getFieldWithDefault(msg, 1, ""),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
description: jspb.Message.getFieldWithDefault(msg, 3, ""),
dashboardId: jspb.Message.getFieldWithDefault(msg, 4, ""),
timeZone: jspb.Message.getFieldWithDefault(msg, 5, ""),
timePeriod: jspb.Message.getFieldWithDefault(msg, 6, 0),
deliveryTimes: (f = msg.getDeliveryTimes()) && api_commons_bireportgenerator_pb.DeliveryTimes.toObject(includeInstance, f),
dayFilter: (f = msg.getDayFilter()) && api_commons_bireportgenerator_pb.DayFilter.toObject(includeInstance, f),
monthsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
formatOptions: (f = msg.getFormatOptions()) && api_commons_bireportgenerator_pb.FormatOptions.toObject(includeInstance, f),
deliveryOptions: (f = msg.getDeliveryOptions()) && api_commons_bireportgenerator_pb.DeliveryOptions.toObject(includeInstance, f),
isActive: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
sendEmptyReport: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
dashboardResourceId: jspb.Message.getFieldWithDefault(msg, 14, ""),
timeZoneWrapper: (f = msg.getTimeZoneWrapper()) && api_commons_org_pb.TimeZoneWrapper.toObject(includeInstance, f),
hideCsvFooter: jspb.Message.getBooleanFieldWithDefault(msg, 16, false),
transferConfigSid: jspb.Message.getFieldWithDefault(msg, 17, 0),
cronExpression: (f = msg.getCronExpression()) && api_commons_types_pb.CronExpression.toObject(includeInstance, f),
transferOptions: (f = msg.getTransferOptions()) && api_commons_bireportgenerator_pb.TransferOptions.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.bireportgenerator.ReportJob}
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.bireportgenerator.ReportJob;
  return proto.api.v1alpha1.bireportgenerator.ReportJob.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.bireportgenerator.ReportJob} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.bireportgenerator.ReportJob}
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReportJobId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDashboardId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimeZone(value);
      break;
    case 6:
      var value = /** @type {!proto.api.commons.TimePeriod} */ (reader.readEnum());
      msg.setTimePeriod(value);
      break;
    case 7:
      var value = new api_commons_bireportgenerator_pb.DeliveryTimes;
      reader.readMessage(value,api_commons_bireportgenerator_pb.DeliveryTimes.deserializeBinaryFromReader);
      msg.setDeliveryTimes(value);
      break;
    case 8:
      var value = new api_commons_bireportgenerator_pb.DayFilter;
      reader.readMessage(value,api_commons_bireportgenerator_pb.DayFilter.deserializeBinaryFromReader);
      msg.setDayFilter(value);
      break;
    case 9:
      var values = /** @type {!Array<!proto.api.commons.Month>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addMonths(values[i]);
      }
      break;
    case 10:
      var value = new api_commons_bireportgenerator_pb.FormatOptions;
      reader.readMessage(value,api_commons_bireportgenerator_pb.FormatOptions.deserializeBinaryFromReader);
      msg.setFormatOptions(value);
      break;
    case 11:
      var value = new api_commons_bireportgenerator_pb.DeliveryOptions;
      reader.readMessage(value,api_commons_bireportgenerator_pb.DeliveryOptions.deserializeBinaryFromReader);
      msg.setDeliveryOptions(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsActive(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSendEmptyReport(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setDashboardResourceId(value);
      break;
    case 15:
      var value = new api_commons_org_pb.TimeZoneWrapper;
      reader.readMessage(value,api_commons_org_pb.TimeZoneWrapper.deserializeBinaryFromReader);
      msg.setTimeZoneWrapper(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHideCsvFooter(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTransferConfigSid(value);
      break;
    case 18:
      var value = new api_commons_types_pb.CronExpression;
      reader.readMessage(value,api_commons_types_pb.CronExpression.deserializeBinaryFromReader);
      msg.setCronExpression(value);
      break;
    case 19:
      var value = new api_commons_bireportgenerator_pb.TransferOptions;
      reader.readMessage(value,api_commons_bireportgenerator_pb.TransferOptions.deserializeBinaryFromReader);
      msg.setTransferOptions(value);
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
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.bireportgenerator.ReportJob.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.bireportgenerator.ReportJob} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReportJobId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDashboardId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTimeZone();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTimePeriod();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getDeliveryTimes();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      api_commons_bireportgenerator_pb.DeliveryTimes.serializeBinaryToWriter
    );
  }
  f = message.getDayFilter();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      api_commons_bireportgenerator_pb.DayFilter.serializeBinaryToWriter
    );
  }
  f = message.getMonthsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      9,
      f
    );
  }
  f = message.getFormatOptions();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      api_commons_bireportgenerator_pb.FormatOptions.serializeBinaryToWriter
    );
  }
  f = message.getDeliveryOptions();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      api_commons_bireportgenerator_pb.DeliveryOptions.serializeBinaryToWriter
    );
  }
  f = message.getIsActive();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getSendEmptyReport();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getDashboardResourceId();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getTimeZoneWrapper();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      api_commons_org_pb.TimeZoneWrapper.serializeBinaryToWriter
    );
  }
  f = message.getHideCsvFooter();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
  f = message.getTransferConfigSid();
  if (f !== 0) {
    writer.writeInt64(
      17,
      f
    );
  }
  f = message.getCronExpression();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      api_commons_types_pb.CronExpression.serializeBinaryToWriter
    );
  }
  f = message.getTransferOptions();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      api_commons_bireportgenerator_pb.TransferOptions.serializeBinaryToWriter
    );
  }
};


/**
 * optional string report_job_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.getReportJobId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.bireportgenerator.ReportJob} returns this
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.setReportJobId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.bireportgenerator.ReportJob} returns this
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.bireportgenerator.ReportJob} returns this
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string dashboard_id = 4;
 * @return {string}
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.getDashboardId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.bireportgenerator.ReportJob} returns this
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.setDashboardId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string time_zone = 5;
 * @return {string}
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.getTimeZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.bireportgenerator.ReportJob} returns this
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.setTimeZone = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional api.commons.TimePeriod time_period = 6;
 * @return {!proto.api.commons.TimePeriod}
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.getTimePeriod = function() {
  return /** @type {!proto.api.commons.TimePeriod} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.api.commons.TimePeriod} value
 * @return {!proto.api.v1alpha1.bireportgenerator.ReportJob} returns this
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.setTimePeriod = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional api.commons.DeliveryTimes delivery_times = 7;
 * @return {?proto.api.commons.DeliveryTimes}
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.getDeliveryTimes = function() {
  return /** @type{?proto.api.commons.DeliveryTimes} */ (
    jspb.Message.getWrapperField(this, api_commons_bireportgenerator_pb.DeliveryTimes, 7));
};


/**
 * @param {?proto.api.commons.DeliveryTimes|undefined} value
 * @return {!proto.api.v1alpha1.bireportgenerator.ReportJob} returns this
*/
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.setDeliveryTimes = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.bireportgenerator.ReportJob} returns this
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.clearDeliveryTimes = function() {
  return this.setDeliveryTimes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.hasDeliveryTimes = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional api.commons.DayFilter day_filter = 8;
 * @return {?proto.api.commons.DayFilter}
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.getDayFilter = function() {
  return /** @type{?proto.api.commons.DayFilter} */ (
    jspb.Message.getWrapperField(this, api_commons_bireportgenerator_pb.DayFilter, 8));
};


/**
 * @param {?proto.api.commons.DayFilter|undefined} value
 * @return {!proto.api.v1alpha1.bireportgenerator.ReportJob} returns this
*/
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.setDayFilter = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.bireportgenerator.ReportJob} returns this
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.clearDayFilter = function() {
  return this.setDayFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.hasDayFilter = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated api.commons.Month months = 9;
 * @return {!Array<!proto.api.commons.Month>}
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.getMonthsList = function() {
  return /** @type {!Array<!proto.api.commons.Month>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<!proto.api.commons.Month>} value
 * @return {!proto.api.v1alpha1.bireportgenerator.ReportJob} returns this
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.setMonthsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {!proto.api.commons.Month} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.bireportgenerator.ReportJob} returns this
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.addMonths = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.bireportgenerator.ReportJob} returns this
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.clearMonthsList = function() {
  return this.setMonthsList([]);
};


/**
 * optional api.commons.FormatOptions format_options = 10;
 * @return {?proto.api.commons.FormatOptions}
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.getFormatOptions = function() {
  return /** @type{?proto.api.commons.FormatOptions} */ (
    jspb.Message.getWrapperField(this, api_commons_bireportgenerator_pb.FormatOptions, 10));
};


/**
 * @param {?proto.api.commons.FormatOptions|undefined} value
 * @return {!proto.api.v1alpha1.bireportgenerator.ReportJob} returns this
*/
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.setFormatOptions = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.bireportgenerator.ReportJob} returns this
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.clearFormatOptions = function() {
  return this.setFormatOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.hasFormatOptions = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional api.commons.DeliveryOptions delivery_options = 11;
 * @return {?proto.api.commons.DeliveryOptions}
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.getDeliveryOptions = function() {
  return /** @type{?proto.api.commons.DeliveryOptions} */ (
    jspb.Message.getWrapperField(this, api_commons_bireportgenerator_pb.DeliveryOptions, 11));
};


/**
 * @param {?proto.api.commons.DeliveryOptions|undefined} value
 * @return {!proto.api.v1alpha1.bireportgenerator.ReportJob} returns this
*/
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.setDeliveryOptions = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.bireportgenerator.ReportJob} returns this
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.clearDeliveryOptions = function() {
  return this.setDeliveryOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.hasDeliveryOptions = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool is_active = 12;
 * @return {boolean}
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.getIsActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.bireportgenerator.ReportJob} returns this
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.setIsActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool send_empty_report = 13;
 * @return {boolean}
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.getSendEmptyReport = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.bireportgenerator.ReportJob} returns this
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.setSendEmptyReport = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional string dashboard_resource_id = 14;
 * @return {string}
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.getDashboardResourceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.bireportgenerator.ReportJob} returns this
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.setDashboardResourceId = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional api.commons.TimeZoneWrapper time_zone_wrapper = 15;
 * @return {?proto.api.commons.TimeZoneWrapper}
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.getTimeZoneWrapper = function() {
  return /** @type{?proto.api.commons.TimeZoneWrapper} */ (
    jspb.Message.getWrapperField(this, api_commons_org_pb.TimeZoneWrapper, 15));
};


/**
 * @param {?proto.api.commons.TimeZoneWrapper|undefined} value
 * @return {!proto.api.v1alpha1.bireportgenerator.ReportJob} returns this
*/
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.setTimeZoneWrapper = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.bireportgenerator.ReportJob} returns this
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.clearTimeZoneWrapper = function() {
  return this.setTimeZoneWrapper(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.hasTimeZoneWrapper = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional bool hide_csv_footer = 16;
 * @return {boolean}
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.getHideCsvFooter = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.bireportgenerator.ReportJob} returns this
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.setHideCsvFooter = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
};


/**
 * optional int64 transfer_config_sid = 17;
 * @return {number}
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.getTransferConfigSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.bireportgenerator.ReportJob} returns this
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.setTransferConfigSid = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional api.commons.CronExpression cron_expression = 18;
 * @return {?proto.api.commons.CronExpression}
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.getCronExpression = function() {
  return /** @type{?proto.api.commons.CronExpression} */ (
    jspb.Message.getWrapperField(this, api_commons_types_pb.CronExpression, 18));
};


/**
 * @param {?proto.api.commons.CronExpression|undefined} value
 * @return {!proto.api.v1alpha1.bireportgenerator.ReportJob} returns this
*/
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.setCronExpression = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.bireportgenerator.ReportJob} returns this
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.clearCronExpression = function() {
  return this.setCronExpression(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.hasCronExpression = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional api.commons.TransferOptions transfer_options = 19;
 * @return {?proto.api.commons.TransferOptions}
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.getTransferOptions = function() {
  return /** @type{?proto.api.commons.TransferOptions} */ (
    jspb.Message.getWrapperField(this, api_commons_bireportgenerator_pb.TransferOptions, 19));
};


/**
 * @param {?proto.api.commons.TransferOptions|undefined} value
 * @return {!proto.api.v1alpha1.bireportgenerator.ReportJob} returns this
*/
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.setTransferOptions = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.bireportgenerator.ReportJob} returns this
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.clearTransferOptions = function() {
  return this.setTransferOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.bireportgenerator.ReportJob.prototype.hasTransferOptions = function() {
  return jspb.Message.getField(this, 19) != null;
};


goog.object.extend(exports, proto.api.v1alpha1.bireportgenerator);
