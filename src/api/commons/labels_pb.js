// source: api/commons/labels.proto
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

goog.exportSymbol('api.commons.EntityType', null, proto);
goog.exportSymbol('api.commons.LabeledEntity', null, proto);
/**
 * @enum {number}
 */
proto.api.commons.EntityType = {
  ENTITY_TYPE_INVALID: 0,
  ENTITY_TYPE_USER: 1,
  ENTITY_TYPE_LMS_PIPELINE: 2
};

/**
 * @enum {number}
 */
proto.api.commons.LabeledEntity = {
  LABELED_ENTITY_UNSPECIFIED: 0,
  LABELED_ENTITY_SKILL_GROUP: 1,
  LABELED_ENTITY_USER: 2,
  LABELED_ENTITY_TICKET: 3
};

goog.object.extend(exports, proto);
