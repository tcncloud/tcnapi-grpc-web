// source: services/billing/entities/v1alpha1/product.proto
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

goog.exportSymbol('services.billing.entities.v1alpha1.Product', null, proto);
/**
 * @enum {number}
 */
proto.services.billing.entities.v1alpha1.Product = {
  PRODUCT_UNSPECIFIED: 0,
  PRODUCT_AGENT_SEATS: 100,
  PRODUCT_OMNI: 200,
  PRODUCT_OMNI_CHAT_SENT: 201,
  PRODUCT_OMNI_CHAT_RECEIVED: 202,
  PRODUCT_OMNI_EMAILS_SENT: 203,
  PRODUCT_OMNI_EMAILS_RECEIVED: 204,
  PRODUCT_OMNI_SMS_SENT: 205,
  PRODUCT_OMNI_SMS_RECEIVED: 206,
  PRODUCT_COMPLIANCE: 300
};

goog.object.extend(exports, proto);
