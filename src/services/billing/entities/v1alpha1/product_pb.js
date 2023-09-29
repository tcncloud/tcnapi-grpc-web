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
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.services.billing.entities.v1alpha1.Product', null, global);
/**
 * @enum {number}
 */
proto.services.billing.entities.v1alpha1.Product = {
  PRODUCT_UNSPECIFIED: 0,
  PRODUCT_AGENT_SEATS: 100,
  PRODUCT_EMAILS_SENT: 200,
  PRODUCT_EMAILS_RECEIVED: 201,
  PRODUCT_SMS_SENT: 202,
  PRODUCT_SMS_RECEIVED: 203,
  PRODUCT_CHAT_SENT: 204,
  PRODUCT_CHAT_RECEIVED: 205,
  PRODUCT_OMNI: 300,
  PRODUCT_VANA: 400,
  PRODUCT_COMPLIANCE: 500
};

goog.object.extend(exports, proto.services.billing.entities.v1alpha1);
