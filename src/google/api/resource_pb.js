// source: google/api/resource.proto
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

var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');
goog.object.extend(proto, google_protobuf_descriptor_pb);
goog.exportSymbol('google.api.ResourceDescriptor', null, proto);
goog.exportSymbol('google.api.ResourceDescriptor.History', null, proto);
goog.exportSymbol('google.api.ResourceDescriptor.Style', null, proto);
goog.exportSymbol('google.api.ResourceReference', null, proto);
goog.exportSymbol('google.api.resource', null, proto);
goog.exportSymbol('google.api.resourceDefinitionList', null, proto);
goog.exportSymbol('google.api.resourceReference', null, proto);
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
proto.google.api.ResourceDescriptor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.api.ResourceDescriptor.repeatedFields_, null);
};
goog.inherits(proto.google.api.ResourceDescriptor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.ResourceDescriptor.displayName = 'proto.google.api.ResourceDescriptor';
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
proto.google.api.ResourceReference = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.api.ResourceReference, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.ResourceReference.displayName = 'proto.google.api.ResourceReference';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.api.ResourceDescriptor.repeatedFields_ = [2,10];



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
proto.google.api.ResourceDescriptor.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.ResourceDescriptor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.ResourceDescriptor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.ResourceDescriptor.toObject = function(includeInstance, msg) {
  var f, obj = {
type: jspb.Message.getFieldWithDefault(msg, 1, ""),
patternList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
nameField: jspb.Message.getFieldWithDefault(msg, 3, ""),
history: jspb.Message.getFieldWithDefault(msg, 4, 0),
plural: jspb.Message.getFieldWithDefault(msg, 5, ""),
singular: jspb.Message.getFieldWithDefault(msg, 6, ""),
styleList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f
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
 * @return {!proto.google.api.ResourceDescriptor}
 */
proto.google.api.ResourceDescriptor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.ResourceDescriptor;
  return proto.google.api.ResourceDescriptor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.ResourceDescriptor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.ResourceDescriptor}
 */
proto.google.api.ResourceDescriptor.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addPattern(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNameField(value);
      break;
    case 4:
      var value = /** @type {!proto.google.api.ResourceDescriptor.History} */ (reader.readEnum());
      msg.setHistory(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlural(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSingular(value);
      break;
    case 10:
      var values = /** @type {!Array<!proto.google.api.ResourceDescriptor.Style>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addStyle(values[i]);
      }
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
proto.google.api.ResourceDescriptor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.ResourceDescriptor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.ResourceDescriptor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.ResourceDescriptor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPatternList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getNameField();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getHistory();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getPlural();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSingular();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getStyleList();
  if (f.length > 0) {
    writer.writePackedEnum(
      10,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.google.api.ResourceDescriptor.History = {
  HISTORY_UNSPECIFIED: 0,
  ORIGINALLY_SINGLE_PATTERN: 1,
  FUTURE_MULTI_PATTERN: 2
};

/**
 * @enum {number}
 */
proto.google.api.ResourceDescriptor.Style = {
  STYLE_UNSPECIFIED: 0,
  DECLARATIVE_FRIENDLY: 1
};

/**
 * optional string type = 1;
 * @return {string}
 */
proto.google.api.ResourceDescriptor.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.ResourceDescriptor} returns this
 */
proto.google.api.ResourceDescriptor.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string pattern = 2;
 * @return {!Array<string>}
 */
proto.google.api.ResourceDescriptor.prototype.getPatternList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.api.ResourceDescriptor} returns this
 */
proto.google.api.ResourceDescriptor.prototype.setPatternList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.api.ResourceDescriptor} returns this
 */
proto.google.api.ResourceDescriptor.prototype.addPattern = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.api.ResourceDescriptor} returns this
 */
proto.google.api.ResourceDescriptor.prototype.clearPatternList = function() {
  return this.setPatternList([]);
};


/**
 * optional string name_field = 3;
 * @return {string}
 */
proto.google.api.ResourceDescriptor.prototype.getNameField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.ResourceDescriptor} returns this
 */
proto.google.api.ResourceDescriptor.prototype.setNameField = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional History history = 4;
 * @return {!proto.google.api.ResourceDescriptor.History}
 */
proto.google.api.ResourceDescriptor.prototype.getHistory = function() {
  return /** @type {!proto.google.api.ResourceDescriptor.History} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.google.api.ResourceDescriptor.History} value
 * @return {!proto.google.api.ResourceDescriptor} returns this
 */
proto.google.api.ResourceDescriptor.prototype.setHistory = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string plural = 5;
 * @return {string}
 */
proto.google.api.ResourceDescriptor.prototype.getPlural = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.ResourceDescriptor} returns this
 */
proto.google.api.ResourceDescriptor.prototype.setPlural = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string singular = 6;
 * @return {string}
 */
proto.google.api.ResourceDescriptor.prototype.getSingular = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.ResourceDescriptor} returns this
 */
proto.google.api.ResourceDescriptor.prototype.setSingular = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated Style style = 10;
 * @return {!Array<!proto.google.api.ResourceDescriptor.Style>}
 */
proto.google.api.ResourceDescriptor.prototype.getStyleList = function() {
  return /** @type {!Array<!proto.google.api.ResourceDescriptor.Style>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<!proto.google.api.ResourceDescriptor.Style>} value
 * @return {!proto.google.api.ResourceDescriptor} returns this
 */
proto.google.api.ResourceDescriptor.prototype.setStyleList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {!proto.google.api.ResourceDescriptor.Style} value
 * @param {number=} opt_index
 * @return {!proto.google.api.ResourceDescriptor} returns this
 */
proto.google.api.ResourceDescriptor.prototype.addStyle = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.api.ResourceDescriptor} returns this
 */
proto.google.api.ResourceDescriptor.prototype.clearStyleList = function() {
  return this.setStyleList([]);
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
proto.google.api.ResourceReference.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.ResourceReference.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.ResourceReference} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.ResourceReference.toObject = function(includeInstance, msg) {
  var f, obj = {
type: jspb.Message.getFieldWithDefault(msg, 1, ""),
childType: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.api.ResourceReference}
 */
proto.google.api.ResourceReference.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.ResourceReference;
  return proto.google.api.ResourceReference.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.ResourceReference} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.ResourceReference}
 */
proto.google.api.ResourceReference.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setChildType(value);
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
proto.google.api.ResourceReference.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.ResourceReference.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.ResourceReference} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.ResourceReference.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getChildType();
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
proto.google.api.ResourceReference.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.ResourceReference} returns this
 */
proto.google.api.ResourceReference.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string child_type = 2;
 * @return {string}
 */
proto.google.api.ResourceReference.prototype.getChildType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.ResourceReference} returns this
 */
proto.google.api.ResourceReference.prototype.setChildType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * A tuple of {field number, class constructor} for the extension
 * field named `resourceReference`.
 * @type {!jspb.ExtensionFieldInfo<!proto.google.api.ResourceReference>}
 */
proto.google.api.resourceReference = new jspb.ExtensionFieldInfo(
    1055,
    {resourceReference: 0},
    proto.google.api.ResourceReference,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.google.api.ResourceReference.toObject),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[1055] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.api.resourceReference,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.google.api.ResourceReference.serializeBinaryToWriter,
    proto.google.api.ResourceReference.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[1055] = proto.google.api.resourceReference;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `resourceDefinitionList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<!proto.google.api.ResourceDescriptor>>}
 */
proto.google.api.resourceDefinitionList = new jspb.ExtensionFieldInfo(
    1053,
    {resourceDefinitionList: 0},
    proto.google.api.ResourceDescriptor,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.google.api.ResourceDescriptor.toObject),
    1);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[1053] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.api.resourceDefinitionList,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeRepeatedMessage,
    proto.google.api.ResourceDescriptor.serializeBinaryToWriter,
    proto.google.api.ResourceDescriptor.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[1053] = proto.google.api.resourceDefinitionList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `resource`.
 * @type {!jspb.ExtensionFieldInfo<!proto.google.api.ResourceDescriptor>}
 */
proto.google.api.resource = new jspb.ExtensionFieldInfo(
    1053,
    {resource: 0},
    proto.google.api.ResourceDescriptor,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.google.api.ResourceDescriptor.toObject),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[1053] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.api.resource,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.google.api.ResourceDescriptor.serializeBinaryToWriter,
    proto.google.api.ResourceDescriptor.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[1053] = proto.google.api.resource;

goog.object.extend(exports, proto);
