// source: services/translations/v1alpha1/entities.proto
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

goog.exportSymbol('proto.services.translations.v1alpha1.TranslateTemplateRequest', null, global);
goog.exportSymbol('proto.services.translations.v1alpha1.TranslateTemplateResponse', null, global);
goog.exportSymbol('proto.services.translations.v1alpha1.Translation', null, global);
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
proto.services.translations.v1alpha1.TranslateTemplateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.translations.v1alpha1.TranslateTemplateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.translations.v1alpha1.TranslateTemplateRequest.displayName = 'proto.services.translations.v1alpha1.TranslateTemplateRequest';
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
proto.services.translations.v1alpha1.TranslateTemplateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.services.translations.v1alpha1.TranslateTemplateResponse.repeatedFields_, null);
};
goog.inherits(proto.services.translations.v1alpha1.TranslateTemplateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.translations.v1alpha1.TranslateTemplateResponse.displayName = 'proto.services.translations.v1alpha1.TranslateTemplateResponse';
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
proto.services.translations.v1alpha1.Translation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.translations.v1alpha1.Translation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.translations.v1alpha1.Translation.displayName = 'proto.services.translations.v1alpha1.Translation';
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
proto.services.translations.v1alpha1.TranslateTemplateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.services.translations.v1alpha1.TranslateTemplateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.translations.v1alpha1.TranslateTemplateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.translations.v1alpha1.TranslateTemplateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    template: jspb.Message.getFieldWithDefault(msg, 1, ""),
    context: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.services.translations.v1alpha1.TranslateTemplateRequest}
 */
proto.services.translations.v1alpha1.TranslateTemplateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.translations.v1alpha1.TranslateTemplateRequest;
  return proto.services.translations.v1alpha1.TranslateTemplateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.translations.v1alpha1.TranslateTemplateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.translations.v1alpha1.TranslateTemplateRequest}
 */
proto.services.translations.v1alpha1.TranslateTemplateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTemplate(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContext(value);
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
proto.services.translations.v1alpha1.TranslateTemplateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.translations.v1alpha1.TranslateTemplateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.translations.v1alpha1.TranslateTemplateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.translations.v1alpha1.TranslateTemplateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTemplate();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContext();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string template = 1;
 * @return {string}
 */
proto.services.translations.v1alpha1.TranslateTemplateRequest.prototype.getTemplate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.translations.v1alpha1.TranslateTemplateRequest} returns this
 */
proto.services.translations.v1alpha1.TranslateTemplateRequest.prototype.setTemplate = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string context = 2;
 * @return {string}
 */
proto.services.translations.v1alpha1.TranslateTemplateRequest.prototype.getContext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.translations.v1alpha1.TranslateTemplateRequest} returns this
 */
proto.services.translations.v1alpha1.TranslateTemplateRequest.prototype.setContext = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.services.translations.v1alpha1.TranslateTemplateResponse.repeatedFields_ = [1];



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
proto.services.translations.v1alpha1.TranslateTemplateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.services.translations.v1alpha1.TranslateTemplateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.translations.v1alpha1.TranslateTemplateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.translations.v1alpha1.TranslateTemplateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    translationsList: jspb.Message.toObjectList(msg.getTranslationsList(),
    proto.services.translations.v1alpha1.Translation.toObject, includeInstance)
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
 * @return {!proto.services.translations.v1alpha1.TranslateTemplateResponse}
 */
proto.services.translations.v1alpha1.TranslateTemplateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.translations.v1alpha1.TranslateTemplateResponse;
  return proto.services.translations.v1alpha1.TranslateTemplateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.translations.v1alpha1.TranslateTemplateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.translations.v1alpha1.TranslateTemplateResponse}
 */
proto.services.translations.v1alpha1.TranslateTemplateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.services.translations.v1alpha1.Translation;
      reader.readMessage(value,proto.services.translations.v1alpha1.Translation.deserializeBinaryFromReader);
      msg.addTranslations(value);
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
proto.services.translations.v1alpha1.TranslateTemplateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.translations.v1alpha1.TranslateTemplateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.translations.v1alpha1.TranslateTemplateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.translations.v1alpha1.TranslateTemplateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTranslationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.services.translations.v1alpha1.Translation.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Translation translations = 1;
 * @return {!Array<!proto.services.translations.v1alpha1.Translation>}
 */
proto.services.translations.v1alpha1.TranslateTemplateResponse.prototype.getTranslationsList = function() {
  return /** @type{!Array<!proto.services.translations.v1alpha1.Translation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.services.translations.v1alpha1.Translation, 1));
};


/**
 * @param {!Array<!proto.services.translations.v1alpha1.Translation>} value
 * @return {!proto.services.translations.v1alpha1.TranslateTemplateResponse} returns this
*/
proto.services.translations.v1alpha1.TranslateTemplateResponse.prototype.setTranslationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.services.translations.v1alpha1.Translation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.services.translations.v1alpha1.Translation}
 */
proto.services.translations.v1alpha1.TranslateTemplateResponse.prototype.addTranslations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.services.translations.v1alpha1.Translation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.services.translations.v1alpha1.TranslateTemplateResponse} returns this
 */
proto.services.translations.v1alpha1.TranslateTemplateResponse.prototype.clearTranslationsList = function() {
  return this.setTranslationsList([]);
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
proto.services.translations.v1alpha1.Translation.prototype.toObject = function(opt_includeInstance) {
  return proto.services.translations.v1alpha1.Translation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.translations.v1alpha1.Translation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.translations.v1alpha1.Translation.toObject = function(includeInstance, msg) {
  var f, obj = {
    translationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    template: jspb.Message.getFieldWithDefault(msg, 2, ""),
    context: jspb.Message.getFieldWithDefault(msg, 3, ""),
    languageTag: jspb.Message.getFieldWithDefault(msg, 4, ""),
    llmTranslation: jspb.Message.getFieldWithDefault(msg, 5, ""),
    manualTranslation: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.services.translations.v1alpha1.Translation}
 */
proto.services.translations.v1alpha1.Translation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.translations.v1alpha1.Translation;
  return proto.services.translations.v1alpha1.Translation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.translations.v1alpha1.Translation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.translations.v1alpha1.Translation}
 */
proto.services.translations.v1alpha1.Translation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTranslationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTemplate(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContext(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageTag(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLlmTranslation(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setManualTranslation(value);
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
proto.services.translations.v1alpha1.Translation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.translations.v1alpha1.Translation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.translations.v1alpha1.Translation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.translations.v1alpha1.Translation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTranslationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTemplate();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContext();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLanguageTag();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLlmTranslation();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getManualTranslation();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string translation_id = 1;
 * @return {string}
 */
proto.services.translations.v1alpha1.Translation.prototype.getTranslationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.translations.v1alpha1.Translation} returns this
 */
proto.services.translations.v1alpha1.Translation.prototype.setTranslationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string template = 2;
 * @return {string}
 */
proto.services.translations.v1alpha1.Translation.prototype.getTemplate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.translations.v1alpha1.Translation} returns this
 */
proto.services.translations.v1alpha1.Translation.prototype.setTemplate = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string context = 3;
 * @return {string}
 */
proto.services.translations.v1alpha1.Translation.prototype.getContext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.translations.v1alpha1.Translation} returns this
 */
proto.services.translations.v1alpha1.Translation.prototype.setContext = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string language_tag = 4;
 * @return {string}
 */
proto.services.translations.v1alpha1.Translation.prototype.getLanguageTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.translations.v1alpha1.Translation} returns this
 */
proto.services.translations.v1alpha1.Translation.prototype.setLanguageTag = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string llm_translation = 5;
 * @return {string}
 */
proto.services.translations.v1alpha1.Translation.prototype.getLlmTranslation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.translations.v1alpha1.Translation} returns this
 */
proto.services.translations.v1alpha1.Translation.prototype.setLlmTranslation = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string manual_translation = 6;
 * @return {string}
 */
proto.services.translations.v1alpha1.Translation.prototype.getManualTranslation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.translations.v1alpha1.Translation} returns this
 */
proto.services.translations.v1alpha1.Translation.prototype.setManualTranslation = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


goog.object.extend(exports, proto.services.translations.v1alpha1);
