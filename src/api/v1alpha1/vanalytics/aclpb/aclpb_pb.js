// source: api/v1alpha1/vanalytics/aclpb/aclpb.proto
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
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.api.v1alpha1.vanalytics.aclpb.Action', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.aclpb.Action.KindCase', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.aclpb.AgentCallLog', null, global);
goog.exportSymbol('proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial', null, global);
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
proto.api.v1alpha1.vanalytics.aclpb.AgentCallLog = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.aclpb.AgentCallLog.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.aclpb.AgentCallLog, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.aclpb.AgentCallLog.displayName = 'proto.api.v1alpha1.vanalytics.aclpb.AgentCallLog';
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
proto.api.v1alpha1.vanalytics.aclpb.Action = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.v1alpha1.vanalytics.aclpb.Action.oneofGroups_);
};
goog.inherits(proto.api.v1alpha1.vanalytics.aclpb.Action, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.aclpb.Action.displayName = 'proto.api.v1alpha1.vanalytics.aclpb.Action';
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
proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial.displayName = 'proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.aclpb.AgentCallLog.repeatedFields_ = [1];



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
proto.api.v1alpha1.vanalytics.aclpb.AgentCallLog.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.aclpb.AgentCallLog.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.aclpb.AgentCallLog} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.aclpb.AgentCallLog.toObject = function(includeInstance, msg) {
  var f, obj = {
    actionsList: jspb.Message.toObjectList(msg.getActionsList(),
    proto.api.v1alpha1.vanalytics.aclpb.Action.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.vanalytics.aclpb.AgentCallLog}
 */
proto.api.v1alpha1.vanalytics.aclpb.AgentCallLog.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.aclpb.AgentCallLog;
  return proto.api.v1alpha1.vanalytics.aclpb.AgentCallLog.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.aclpb.AgentCallLog} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.aclpb.AgentCallLog}
 */
proto.api.v1alpha1.vanalytics.aclpb.AgentCallLog.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.vanalytics.aclpb.Action;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.aclpb.Action.deserializeBinaryFromReader);
      msg.addActions(value);
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
proto.api.v1alpha1.vanalytics.aclpb.AgentCallLog.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.aclpb.AgentCallLog.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.aclpb.AgentCallLog} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.aclpb.AgentCallLog.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.vanalytics.aclpb.Action.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Action actions = 1;
 * @return {!Array<!proto.api.v1alpha1.vanalytics.aclpb.Action>}
 */
proto.api.v1alpha1.vanalytics.aclpb.AgentCallLog.prototype.getActionsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.vanalytics.aclpb.Action>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.vanalytics.aclpb.Action, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.vanalytics.aclpb.Action>} value
 * @return {!proto.api.v1alpha1.vanalytics.aclpb.AgentCallLog} returns this
*/
proto.api.v1alpha1.vanalytics.aclpb.AgentCallLog.prototype.setActionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.vanalytics.aclpb.Action=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.aclpb.Action}
 */
proto.api.v1alpha1.vanalytics.aclpb.AgentCallLog.prototype.addActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.vanalytics.aclpb.Action, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.aclpb.AgentCallLog} returns this
 */
proto.api.v1alpha1.vanalytics.aclpb.AgentCallLog.prototype.clearActionsList = function() {
  return this.setActionsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.v1alpha1.vanalytics.aclpb.Action.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.api.v1alpha1.vanalytics.aclpb.Action.KindCase = {
  KIND_NOT_SET: 0,
  CALL_SKILLS_INITIAL: 1,
  CALL_ENDED: 2
};

/**
 * @return {proto.api.v1alpha1.vanalytics.aclpb.Action.KindCase}
 */
proto.api.v1alpha1.vanalytics.aclpb.Action.prototype.getKindCase = function() {
  return /** @type {proto.api.v1alpha1.vanalytics.aclpb.Action.KindCase} */(jspb.Message.computeOneofCase(this, proto.api.v1alpha1.vanalytics.aclpb.Action.oneofGroups_[0]));
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
proto.api.v1alpha1.vanalytics.aclpb.Action.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.aclpb.Action.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.aclpb.Action} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.aclpb.Action.toObject = function(includeInstance, msg) {
  var f, obj = {
    callSkillsInitial: (f = msg.getCallSkillsInitial()) && proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial.toObject(includeInstance, f),
    callEnded: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.api.v1alpha1.vanalytics.aclpb.Action}
 */
proto.api.v1alpha1.vanalytics.aclpb.Action.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.aclpb.Action;
  return proto.api.v1alpha1.vanalytics.aclpb.Action.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.aclpb.Action} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.aclpb.Action}
 */
proto.api.v1alpha1.vanalytics.aclpb.Action.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial;
      reader.readMessage(value,proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial.deserializeBinaryFromReader);
      msg.setCallSkillsInitial(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCallEnded(value);
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
proto.api.v1alpha1.vanalytics.aclpb.Action.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.aclpb.Action.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.aclpb.Action} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.aclpb.Action.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCallSkillsInitial();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional CallSkillsInitial call_skills_initial = 1;
 * @return {?proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial}
 */
proto.api.v1alpha1.vanalytics.aclpb.Action.prototype.getCallSkillsInitial = function() {
  return /** @type{?proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial, 1));
};


/**
 * @param {?proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial|undefined} value
 * @return {!proto.api.v1alpha1.vanalytics.aclpb.Action} returns this
*/
proto.api.v1alpha1.vanalytics.aclpb.Action.prototype.setCallSkillsInitial = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.api.v1alpha1.vanalytics.aclpb.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.aclpb.Action} returns this
 */
proto.api.v1alpha1.vanalytics.aclpb.Action.prototype.clearCallSkillsInitial = function() {
  return this.setCallSkillsInitial(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.aclpb.Action.prototype.hasCallSkillsInitial = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string call_ended = 2;
 * @return {string}
 */
proto.api.v1alpha1.vanalytics.aclpb.Action.prototype.getCallEnded = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.vanalytics.aclpb.Action} returns this
 */
proto.api.v1alpha1.vanalytics.aclpb.Action.prototype.setCallEnded = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.api.v1alpha1.vanalytics.aclpb.Action.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.v1alpha1.vanalytics.aclpb.Action} returns this
 */
proto.api.v1alpha1.vanalytics.aclpb.Action.prototype.clearCallEnded = function() {
  return jspb.Message.setOneofField(this, 2, proto.api.v1alpha1.vanalytics.aclpb.Action.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.vanalytics.aclpb.Action.prototype.hasCallEnded = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial.repeatedFields_ = [1,2];



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
proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial.toObject = function(includeInstance, msg) {
  var f, obj = {
    needList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    wantList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial}
 */
proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial;
  return proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial}
 */
proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addNeed(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addWant(value);
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
proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNeedList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getWantList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated string need = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial.prototype.getNeedList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial} returns this
 */
proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial.prototype.setNeedList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial} returns this
 */
proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial.prototype.addNeed = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial} returns this
 */
proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial.prototype.clearNeedList = function() {
  return this.setNeedList([]);
};


/**
 * repeated string want = 2;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial.prototype.getWantList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial} returns this
 */
proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial.prototype.setWantList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial} returns this
 */
proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial.prototype.addWant = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial} returns this
 */
proto.api.v1alpha1.vanalytics.aclpb.CallSkillsInitial.prototype.clearWantList = function() {
  return this.setWantList([]);
};


goog.object.extend(exports, proto.api.v1alpha1.vanalytics.aclpb);
