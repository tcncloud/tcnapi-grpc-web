// source: api/v1alpha1/delivery/service.proto
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

var annotations_authz_pb = require('../../../annotations/authz_pb.js');
goog.object.extend(proto, annotations_authz_pb);
var api_commons_delivery_pb = require('../../../api/commons/delivery_pb.js');
goog.object.extend(proto, api_commons_delivery_pb);
var api_commons_omnichannel_pb = require('../../../api/commons/omnichannel_pb.js');
goog.object.extend(proto, api_commons_omnichannel_pb);
var api_commons_org_pb = require('../../../api/commons/org_pb.js');
goog.object.extend(proto, api_commons_org_pb);
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.api.v1alpha1.delivery.AESEncryptionRef', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.AESPassword', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.CreateCredentialReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.CreateCredentialRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.CreateDeliveryDefinitionReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.CreateDeliveryDefinitionRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.CreateEncryptionReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.CreateEncryptionRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.CreateHistoryReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.CreateHistoryRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.CreateTransferConfigReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.CreateTransferConfigRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.Credential', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.CredentialData', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.CredentialData.DataCase', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.Credentials', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.DeleteCredentialReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.DeleteCredentialRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.DeleteEncryptionReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.DeleteEncryptionRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.DeleteTransferConfigReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.DeleteTransferConfigRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.DeliveryDefinition', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.DeliveryDefinition.EncryptionCase', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.DeliveryDefinition.TransportCase', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.Destination', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.Destination.ValueCase', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.EmailDestination', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.EmailTransport', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.Encryption', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.Encryption.EncryptionCase', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.GetCredentialReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.GetCredentialRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.GetDeliveryDefinitionReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.GetDeliveryDefinitionRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.GetEncryptionReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.GetEncryptionRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.GetHistoryReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.GetHistoryRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.GetTransferConfigByNameReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.GetTransferConfigByNameRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.GetTransferConfigReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.GetTransferConfigRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.History', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.ID', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.ListByIDReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.ListCredentialsReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.ListCredentialsRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.ListDeliveryDefinitionsRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.ListEncryptionsReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.ListEncryptionsRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.ListHistoryByTransferConfigReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.ListHistoryByTransferConfigRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.ListHistoryReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.ListHistoryRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.ListReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.ListSMSNumbersReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.ListSMSNumbersRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.ListTransferConfigsReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.ListTransferConfigsRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.PGPEncryptionRef', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.PGPKeyPair', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.Password', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.PasswordRef', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.Room303Destination', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.Room303SystemMessage', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.Room303SystemMessage.UserCase', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.Room303Transport', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.Room303Transport.TransportCase', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.SFTPTransport', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.SFTPTransport.CredentialsCase', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.SMSTransport', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.SSHKeyPair', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.SSHKeyRef', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.SftpDestination', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.SftpSource', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.SmsDestination', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.Source', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.Source.ValueCase', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.TransferConfig', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.UpdateCredentialReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.UpdateCredentialRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.UpdateEncryptionReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.UpdateEncryptionRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.UpdateTransferConfigReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.UpdateTransferConfigRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.delivery.UserPassword', null, global);
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
proto.api.v1alpha1.delivery.CreateTransferConfigReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.CreateTransferConfigReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.CreateTransferConfigReq.displayName = 'proto.api.v1alpha1.delivery.CreateTransferConfigReq';
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
proto.api.v1alpha1.delivery.CreateTransferConfigRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.CreateTransferConfigRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.CreateTransferConfigRes.displayName = 'proto.api.v1alpha1.delivery.CreateTransferConfigRes';
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
proto.api.v1alpha1.delivery.ListTransferConfigsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.ListTransferConfigsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.ListTransferConfigsReq.displayName = 'proto.api.v1alpha1.delivery.ListTransferConfigsReq';
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
proto.api.v1alpha1.delivery.ListTransferConfigsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.delivery.ListTransferConfigsRes.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.delivery.ListTransferConfigsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.ListTransferConfigsRes.displayName = 'proto.api.v1alpha1.delivery.ListTransferConfigsRes';
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
proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq.displayName = 'proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq';
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
proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDRes.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDRes.displayName = 'proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDRes';
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
proto.api.v1alpha1.delivery.UpdateTransferConfigReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.UpdateTransferConfigReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.UpdateTransferConfigReq.displayName = 'proto.api.v1alpha1.delivery.UpdateTransferConfigReq';
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
proto.api.v1alpha1.delivery.UpdateTransferConfigRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.UpdateTransferConfigRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.UpdateTransferConfigRes.displayName = 'proto.api.v1alpha1.delivery.UpdateTransferConfigRes';
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
proto.api.v1alpha1.delivery.DeleteTransferConfigReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.DeleteTransferConfigReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.DeleteTransferConfigReq.displayName = 'proto.api.v1alpha1.delivery.DeleteTransferConfigReq';
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
proto.api.v1alpha1.delivery.DeleteTransferConfigRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.DeleteTransferConfigRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.DeleteTransferConfigRes.displayName = 'proto.api.v1alpha1.delivery.DeleteTransferConfigRes';
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
proto.api.v1alpha1.delivery.GetTransferConfigReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.GetTransferConfigReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.GetTransferConfigReq.displayName = 'proto.api.v1alpha1.delivery.GetTransferConfigReq';
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
proto.api.v1alpha1.delivery.GetTransferConfigRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.GetTransferConfigRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.GetTransferConfigRes.displayName = 'proto.api.v1alpha1.delivery.GetTransferConfigRes';
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
proto.api.v1alpha1.delivery.GetTransferConfigByNameReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.GetTransferConfigByNameReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.GetTransferConfigByNameReq.displayName = 'proto.api.v1alpha1.delivery.GetTransferConfigByNameReq';
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
proto.api.v1alpha1.delivery.GetTransferConfigByNameRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.GetTransferConfigByNameRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.GetTransferConfigByNameRes.displayName = 'proto.api.v1alpha1.delivery.GetTransferConfigByNameRes';
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
proto.api.v1alpha1.delivery.ListHistoryReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.ListHistoryReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.ListHistoryReq.displayName = 'proto.api.v1alpha1.delivery.ListHistoryReq';
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
proto.api.v1alpha1.delivery.ListHistoryRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.delivery.ListHistoryRes.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.delivery.ListHistoryRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.ListHistoryRes.displayName = 'proto.api.v1alpha1.delivery.ListHistoryRes';
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
proto.api.v1alpha1.delivery.ListHistoryByTransferConfigReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.ListHistoryByTransferConfigReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.ListHistoryByTransferConfigReq.displayName = 'proto.api.v1alpha1.delivery.ListHistoryByTransferConfigReq';
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
proto.api.v1alpha1.delivery.ListHistoryByTransferConfigRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.delivery.ListHistoryByTransferConfigRes.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.delivery.ListHistoryByTransferConfigRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.ListHistoryByTransferConfigRes.displayName = 'proto.api.v1alpha1.delivery.ListHistoryByTransferConfigRes';
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
proto.api.v1alpha1.delivery.CreateHistoryReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.CreateHistoryReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.CreateHistoryReq.displayName = 'proto.api.v1alpha1.delivery.CreateHistoryReq';
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
proto.api.v1alpha1.delivery.CreateHistoryRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.CreateHistoryRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.CreateHistoryRes.displayName = 'proto.api.v1alpha1.delivery.CreateHistoryRes';
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
proto.api.v1alpha1.delivery.GetHistoryReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.GetHistoryReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.GetHistoryReq.displayName = 'proto.api.v1alpha1.delivery.GetHistoryReq';
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
proto.api.v1alpha1.delivery.GetHistoryRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.GetHistoryRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.GetHistoryRes.displayName = 'proto.api.v1alpha1.delivery.GetHistoryRes';
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
proto.api.v1alpha1.delivery.CreateDeliveryDefinitionReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.CreateDeliveryDefinitionReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.CreateDeliveryDefinitionReq.displayName = 'proto.api.v1alpha1.delivery.CreateDeliveryDefinitionReq';
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
proto.api.v1alpha1.delivery.CreateDeliveryDefinitionRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.CreateDeliveryDefinitionRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.CreateDeliveryDefinitionRes.displayName = 'proto.api.v1alpha1.delivery.CreateDeliveryDefinitionRes';
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
proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionReq.displayName = 'proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionReq';
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
proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionRes.displayName = 'proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionRes';
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
proto.api.v1alpha1.delivery.GetDeliveryDefinitionReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.GetDeliveryDefinitionReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.GetDeliveryDefinitionReq.displayName = 'proto.api.v1alpha1.delivery.GetDeliveryDefinitionReq';
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
proto.api.v1alpha1.delivery.GetDeliveryDefinitionRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.GetDeliveryDefinitionRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.GetDeliveryDefinitionRes.displayName = 'proto.api.v1alpha1.delivery.GetDeliveryDefinitionRes';
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
proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameReq.displayName = 'proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameReq';
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
proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameRes.displayName = 'proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameRes';
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
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq.displayName = 'proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq';
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
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.delivery.ListDeliveryDefinitionsRes.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.delivery.ListDeliveryDefinitionsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.ListDeliveryDefinitionsRes.displayName = 'proto.api.v1alpha1.delivery.ListDeliveryDefinitionsRes';
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
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq.displayName = 'proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq';
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
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDRes.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDRes.displayName = 'proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDRes';
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
proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionReq.displayName = 'proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionReq';
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
proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionRes.displayName = 'proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionRes';
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
proto.api.v1alpha1.delivery.CreateEncryptionReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.CreateEncryptionReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.CreateEncryptionReq.displayName = 'proto.api.v1alpha1.delivery.CreateEncryptionReq';
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
proto.api.v1alpha1.delivery.CreateEncryptionRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.CreateEncryptionRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.CreateEncryptionRes.displayName = 'proto.api.v1alpha1.delivery.CreateEncryptionRes';
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
proto.api.v1alpha1.delivery.DeleteEncryptionReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.DeleteEncryptionReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.DeleteEncryptionReq.displayName = 'proto.api.v1alpha1.delivery.DeleteEncryptionReq';
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
proto.api.v1alpha1.delivery.DeleteEncryptionRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.DeleteEncryptionRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.DeleteEncryptionRes.displayName = 'proto.api.v1alpha1.delivery.DeleteEncryptionRes';
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
proto.api.v1alpha1.delivery.GetEncryptionReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.GetEncryptionReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.GetEncryptionReq.displayName = 'proto.api.v1alpha1.delivery.GetEncryptionReq';
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
proto.api.v1alpha1.delivery.GetEncryptionRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.GetEncryptionRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.GetEncryptionRes.displayName = 'proto.api.v1alpha1.delivery.GetEncryptionRes';
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
proto.api.v1alpha1.delivery.ListEncryptionsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.ListEncryptionsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.ListEncryptionsReq.displayName = 'proto.api.v1alpha1.delivery.ListEncryptionsReq';
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
proto.api.v1alpha1.delivery.ListEncryptionsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.delivery.ListEncryptionsRes.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.delivery.ListEncryptionsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.ListEncryptionsRes.displayName = 'proto.api.v1alpha1.delivery.ListEncryptionsRes';
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
proto.api.v1alpha1.delivery.UpdateEncryptionReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.UpdateEncryptionReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.UpdateEncryptionReq.displayName = 'proto.api.v1alpha1.delivery.UpdateEncryptionReq';
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
proto.api.v1alpha1.delivery.UpdateEncryptionRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.UpdateEncryptionRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.UpdateEncryptionRes.displayName = 'proto.api.v1alpha1.delivery.UpdateEncryptionRes';
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
proto.api.v1alpha1.delivery.TransferConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.TransferConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.TransferConfig.displayName = 'proto.api.v1alpha1.delivery.TransferConfig';
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
proto.api.v1alpha1.delivery.ID = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.ID, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.ID.displayName = 'proto.api.v1alpha1.delivery.ID';
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
proto.api.v1alpha1.delivery.ListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.ListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.ListReq.displayName = 'proto.api.v1alpha1.delivery.ListReq';
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
proto.api.v1alpha1.delivery.History = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.History, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.History.displayName = 'proto.api.v1alpha1.delivery.History';
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
proto.api.v1alpha1.delivery.ListByIDReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.ListByIDReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.ListByIDReq.displayName = 'proto.api.v1alpha1.delivery.ListByIDReq';
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
proto.api.v1alpha1.delivery.Credential = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.Credential, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.Credential.displayName = 'proto.api.v1alpha1.delivery.Credential';
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
proto.api.v1alpha1.delivery.Destination = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.v1alpha1.delivery.Destination.oneofGroups_);
};
goog.inherits(proto.api.v1alpha1.delivery.Destination, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.Destination.displayName = 'proto.api.v1alpha1.delivery.Destination';
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
proto.api.v1alpha1.delivery.SftpDestination = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.SftpDestination, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.SftpDestination.displayName = 'proto.api.v1alpha1.delivery.SftpDestination';
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
proto.api.v1alpha1.delivery.Room303Destination = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.Room303Destination, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.Room303Destination.displayName = 'proto.api.v1alpha1.delivery.Room303Destination';
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
proto.api.v1alpha1.delivery.SmsDestination = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.SmsDestination, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.SmsDestination.displayName = 'proto.api.v1alpha1.delivery.SmsDestination';
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
proto.api.v1alpha1.delivery.EmailDestination = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.delivery.EmailDestination.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.delivery.EmailDestination, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.EmailDestination.displayName = 'proto.api.v1alpha1.delivery.EmailDestination';
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
proto.api.v1alpha1.delivery.CredentialData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.v1alpha1.delivery.CredentialData.oneofGroups_);
};
goog.inherits(proto.api.v1alpha1.delivery.CredentialData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.CredentialData.displayName = 'proto.api.v1alpha1.delivery.CredentialData';
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
proto.api.v1alpha1.delivery.UserPassword = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.UserPassword, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.UserPassword.displayName = 'proto.api.v1alpha1.delivery.UserPassword';
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
proto.api.v1alpha1.delivery.Password = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.Password, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.Password.displayName = 'proto.api.v1alpha1.delivery.Password';
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
proto.api.v1alpha1.delivery.SSHKeyPair = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.SSHKeyPair, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.SSHKeyPair.displayName = 'proto.api.v1alpha1.delivery.SSHKeyPair';
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
proto.api.v1alpha1.delivery.PGPKeyPair = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.PGPKeyPair, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.PGPKeyPair.displayName = 'proto.api.v1alpha1.delivery.PGPKeyPair';
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
proto.api.v1alpha1.delivery.AESPassword = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.AESPassword, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.AESPassword.displayName = 'proto.api.v1alpha1.delivery.AESPassword';
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
proto.api.v1alpha1.delivery.Source = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.v1alpha1.delivery.Source.oneofGroups_);
};
goog.inherits(proto.api.v1alpha1.delivery.Source, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.Source.displayName = 'proto.api.v1alpha1.delivery.Source';
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
proto.api.v1alpha1.delivery.SftpSource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.SftpSource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.SftpSource.displayName = 'proto.api.v1alpha1.delivery.SftpSource';
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
proto.api.v1alpha1.delivery.GetCredentialReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.GetCredentialReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.GetCredentialReq.displayName = 'proto.api.v1alpha1.delivery.GetCredentialReq';
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
proto.api.v1alpha1.delivery.GetCredentialRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.GetCredentialRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.GetCredentialRes.displayName = 'proto.api.v1alpha1.delivery.GetCredentialRes';
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
proto.api.v1alpha1.delivery.ListCredentialsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.ListCredentialsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.ListCredentialsReq.displayName = 'proto.api.v1alpha1.delivery.ListCredentialsReq';
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
proto.api.v1alpha1.delivery.ListCredentialsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.ListCredentialsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.ListCredentialsRes.displayName = 'proto.api.v1alpha1.delivery.ListCredentialsRes';
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
proto.api.v1alpha1.delivery.CreateCredentialReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.CreateCredentialReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.CreateCredentialReq.displayName = 'proto.api.v1alpha1.delivery.CreateCredentialReq';
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
proto.api.v1alpha1.delivery.CreateCredentialRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.CreateCredentialRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.CreateCredentialRes.displayName = 'proto.api.v1alpha1.delivery.CreateCredentialRes';
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
proto.api.v1alpha1.delivery.DeleteCredentialReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.DeleteCredentialReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.DeleteCredentialReq.displayName = 'proto.api.v1alpha1.delivery.DeleteCredentialReq';
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
proto.api.v1alpha1.delivery.DeleteCredentialRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.DeleteCredentialRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.DeleteCredentialRes.displayName = 'proto.api.v1alpha1.delivery.DeleteCredentialRes';
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
proto.api.v1alpha1.delivery.UpdateCredentialReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.UpdateCredentialReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.UpdateCredentialReq.displayName = 'proto.api.v1alpha1.delivery.UpdateCredentialReq';
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
proto.api.v1alpha1.delivery.UpdateCredentialRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.UpdateCredentialRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.UpdateCredentialRes.displayName = 'proto.api.v1alpha1.delivery.UpdateCredentialRes';
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
proto.api.v1alpha1.delivery.Credentials = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.delivery.Credentials.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.delivery.Credentials, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.Credentials.displayName = 'proto.api.v1alpha1.delivery.Credentials';
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
proto.api.v1alpha1.delivery.DeliveryDefinition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.v1alpha1.delivery.DeliveryDefinition.oneofGroups_);
};
goog.inherits(proto.api.v1alpha1.delivery.DeliveryDefinition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.DeliveryDefinition.displayName = 'proto.api.v1alpha1.delivery.DeliveryDefinition';
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
proto.api.v1alpha1.delivery.SFTPTransport = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.v1alpha1.delivery.SFTPTransport.oneofGroups_);
};
goog.inherits(proto.api.v1alpha1.delivery.SFTPTransport, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.SFTPTransport.displayName = 'proto.api.v1alpha1.delivery.SFTPTransport';
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
proto.api.v1alpha1.delivery.EmailTransport = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.delivery.EmailTransport.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.delivery.EmailTransport, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.EmailTransport.displayName = 'proto.api.v1alpha1.delivery.EmailTransport';
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
proto.api.v1alpha1.delivery.Room303Transport = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.v1alpha1.delivery.Room303Transport.oneofGroups_);
};
goog.inherits(proto.api.v1alpha1.delivery.Room303Transport, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.Room303Transport.displayName = 'proto.api.v1alpha1.delivery.Room303Transport';
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
proto.api.v1alpha1.delivery.Room303SystemMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.v1alpha1.delivery.Room303SystemMessage.oneofGroups_);
};
goog.inherits(proto.api.v1alpha1.delivery.Room303SystemMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.Room303SystemMessage.displayName = 'proto.api.v1alpha1.delivery.Room303SystemMessage';
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
proto.api.v1alpha1.delivery.SMSTransport = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.SMSTransport, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.SMSTransport.displayName = 'proto.api.v1alpha1.delivery.SMSTransport';
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
proto.api.v1alpha1.delivery.AESEncryptionRef = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.AESEncryptionRef, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.AESEncryptionRef.displayName = 'proto.api.v1alpha1.delivery.AESEncryptionRef';
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
proto.api.v1alpha1.delivery.PGPEncryptionRef = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.PGPEncryptionRef, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.PGPEncryptionRef.displayName = 'proto.api.v1alpha1.delivery.PGPEncryptionRef';
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
proto.api.v1alpha1.delivery.PasswordRef = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.PasswordRef, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.PasswordRef.displayName = 'proto.api.v1alpha1.delivery.PasswordRef';
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
proto.api.v1alpha1.delivery.SSHKeyRef = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.SSHKeyRef, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.SSHKeyRef.displayName = 'proto.api.v1alpha1.delivery.SSHKeyRef';
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
proto.api.v1alpha1.delivery.Encryption = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.v1alpha1.delivery.Encryption.oneofGroups_);
};
goog.inherits(proto.api.v1alpha1.delivery.Encryption, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.Encryption.displayName = 'proto.api.v1alpha1.delivery.Encryption';
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
proto.api.v1alpha1.delivery.ListSMSNumbersReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.delivery.ListSMSNumbersReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.ListSMSNumbersReq.displayName = 'proto.api.v1alpha1.delivery.ListSMSNumbersReq';
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
proto.api.v1alpha1.delivery.ListSMSNumbersRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.delivery.ListSMSNumbersRes.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.delivery.ListSMSNumbersRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.delivery.ListSMSNumbersRes.displayName = 'proto.api.v1alpha1.delivery.ListSMSNumbersRes';
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
proto.api.v1alpha1.delivery.CreateTransferConfigReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.CreateTransferConfigReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.CreateTransferConfigReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.CreateTransferConfigReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.TransferConfig.toObject(includeInstance, f),
    mask: (f = msg.getMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.CreateTransferConfigReq}
 */
proto.api.v1alpha1.delivery.CreateTransferConfigReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.CreateTransferConfigReq;
  return proto.api.v1alpha1.delivery.CreateTransferConfigReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.CreateTransferConfigReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.CreateTransferConfigReq}
 */
proto.api.v1alpha1.delivery.CreateTransferConfigReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.TransferConfig;
      reader.readMessage(value,proto.api.v1alpha1.delivery.TransferConfig.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setMask(value);
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
proto.api.v1alpha1.delivery.CreateTransferConfigReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.CreateTransferConfigReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.CreateTransferConfigReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.CreateTransferConfigReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.TransferConfig.serializeBinaryToWriter
    );
  }
  f = message.getMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional TransferConfig entity = 1;
 * @return {?proto.api.v1alpha1.delivery.TransferConfig}
 */
proto.api.v1alpha1.delivery.CreateTransferConfigReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.TransferConfig} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.TransferConfig, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.TransferConfig|undefined} value
 * @return {!proto.api.v1alpha1.delivery.CreateTransferConfigReq} returns this
*/
proto.api.v1alpha1.delivery.CreateTransferConfigReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.CreateTransferConfigReq} returns this
 */
proto.api.v1alpha1.delivery.CreateTransferConfigReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.CreateTransferConfigReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.delivery.CreateTransferConfigReq.prototype.getMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.delivery.CreateTransferConfigReq} returns this
*/
proto.api.v1alpha1.delivery.CreateTransferConfigReq.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.CreateTransferConfigReq} returns this
 */
proto.api.v1alpha1.delivery.CreateTransferConfigReq.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.CreateTransferConfigReq.prototype.hasMask = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.api.v1alpha1.delivery.CreateTransferConfigRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.CreateTransferConfigRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.CreateTransferConfigRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.CreateTransferConfigRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.ID.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.CreateTransferConfigRes}
 */
proto.api.v1alpha1.delivery.CreateTransferConfigRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.CreateTransferConfigRes;
  return proto.api.v1alpha1.delivery.CreateTransferConfigRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.CreateTransferConfigRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.CreateTransferConfigRes}
 */
proto.api.v1alpha1.delivery.CreateTransferConfigRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.ID;
      reader.readMessage(value,proto.api.v1alpha1.delivery.ID.deserializeBinaryFromReader);
      msg.setEntity(value);
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
proto.api.v1alpha1.delivery.CreateTransferConfigRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.CreateTransferConfigRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.CreateTransferConfigRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.CreateTransferConfigRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.ID.serializeBinaryToWriter
    );
  }
};


/**
 * optional ID entity = 1;
 * @return {?proto.api.v1alpha1.delivery.ID}
 */
proto.api.v1alpha1.delivery.CreateTransferConfigRes.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.ID} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.ID, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.ID|undefined} value
 * @return {!proto.api.v1alpha1.delivery.CreateTransferConfigRes} returns this
*/
proto.api.v1alpha1.delivery.CreateTransferConfigRes.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.CreateTransferConfigRes} returns this
 */
proto.api.v1alpha1.delivery.CreateTransferConfigRes.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.CreateTransferConfigRes.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.api.v1alpha1.delivery.ListTransferConfigsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.ListTransferConfigsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.ListTransferConfigsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListTransferConfigsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.TransferConfig.toObject(includeInstance, f),
    mask: (f = msg.getMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    listReq: (f = msg.getListReq()) && proto.api.v1alpha1.delivery.ListReq.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.ListTransferConfigsReq}
 */
proto.api.v1alpha1.delivery.ListTransferConfigsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.ListTransferConfigsReq;
  return proto.api.v1alpha1.delivery.ListTransferConfigsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.ListTransferConfigsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.ListTransferConfigsReq}
 */
proto.api.v1alpha1.delivery.ListTransferConfigsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.TransferConfig;
      reader.readMessage(value,proto.api.v1alpha1.delivery.TransferConfig.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setMask(value);
      break;
    case 3:
      var value = new proto.api.v1alpha1.delivery.ListReq;
      reader.readMessage(value,proto.api.v1alpha1.delivery.ListReq.deserializeBinaryFromReader);
      msg.setListReq(value);
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
proto.api.v1alpha1.delivery.ListTransferConfigsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.ListTransferConfigsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.ListTransferConfigsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListTransferConfigsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.TransferConfig.serializeBinaryToWriter
    );
  }
  f = message.getMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getListReq();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.v1alpha1.delivery.ListReq.serializeBinaryToWriter
    );
  }
};


/**
 * optional TransferConfig entity = 1;
 * @return {?proto.api.v1alpha1.delivery.TransferConfig}
 */
proto.api.v1alpha1.delivery.ListTransferConfigsReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.TransferConfig} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.TransferConfig, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.TransferConfig|undefined} value
 * @return {!proto.api.v1alpha1.delivery.ListTransferConfigsReq} returns this
*/
proto.api.v1alpha1.delivery.ListTransferConfigsReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.ListTransferConfigsReq} returns this
 */
proto.api.v1alpha1.delivery.ListTransferConfigsReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.ListTransferConfigsReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.delivery.ListTransferConfigsReq.prototype.getMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.delivery.ListTransferConfigsReq} returns this
*/
proto.api.v1alpha1.delivery.ListTransferConfigsReq.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.ListTransferConfigsReq} returns this
 */
proto.api.v1alpha1.delivery.ListTransferConfigsReq.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.ListTransferConfigsReq.prototype.hasMask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ListReq list_req = 3;
 * @return {?proto.api.v1alpha1.delivery.ListReq}
 */
proto.api.v1alpha1.delivery.ListTransferConfigsReq.prototype.getListReq = function() {
  return /** @type{?proto.api.v1alpha1.delivery.ListReq} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.ListReq, 3));
};


/**
 * @param {?proto.api.v1alpha1.delivery.ListReq|undefined} value
 * @return {!proto.api.v1alpha1.delivery.ListTransferConfigsReq} returns this
*/
proto.api.v1alpha1.delivery.ListTransferConfigsReq.prototype.setListReq = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.ListTransferConfigsReq} returns this
 */
proto.api.v1alpha1.delivery.ListTransferConfigsReq.prototype.clearListReq = function() {
  return this.setListReq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.ListTransferConfigsReq.prototype.hasListReq = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.delivery.ListTransferConfigsRes.repeatedFields_ = [1];



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
proto.api.v1alpha1.delivery.ListTransferConfigsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.ListTransferConfigsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.ListTransferConfigsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListTransferConfigsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entitiesList: jspb.Message.toObjectList(msg.getEntitiesList(),
    proto.api.v1alpha1.delivery.TransferConfig.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.delivery.ListTransferConfigsRes}
 */
proto.api.v1alpha1.delivery.ListTransferConfigsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.ListTransferConfigsRes;
  return proto.api.v1alpha1.delivery.ListTransferConfigsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.ListTransferConfigsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.ListTransferConfigsRes}
 */
proto.api.v1alpha1.delivery.ListTransferConfigsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.TransferConfig;
      reader.readMessage(value,proto.api.v1alpha1.delivery.TransferConfig.deserializeBinaryFromReader);
      msg.addEntities(value);
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
proto.api.v1alpha1.delivery.ListTransferConfigsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.ListTransferConfigsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.ListTransferConfigsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListTransferConfigsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.TransferConfig.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TransferConfig entities = 1;
 * @return {!Array<!proto.api.v1alpha1.delivery.TransferConfig>}
 */
proto.api.v1alpha1.delivery.ListTransferConfigsRes.prototype.getEntitiesList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.delivery.TransferConfig>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.delivery.TransferConfig, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.delivery.TransferConfig>} value
 * @return {!proto.api.v1alpha1.delivery.ListTransferConfigsRes} returns this
*/
proto.api.v1alpha1.delivery.ListTransferConfigsRes.prototype.setEntitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.delivery.TransferConfig=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.delivery.TransferConfig}
 */
proto.api.v1alpha1.delivery.ListTransferConfigsRes.prototype.addEntities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.delivery.TransferConfig, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.delivery.ListTransferConfigsRes} returns this
 */
proto.api.v1alpha1.delivery.ListTransferConfigsRes.prototype.clearEntitiesList = function() {
  return this.setEntitiesList([]);
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
proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.TransferConfig.toObject(includeInstance, f),
    mask: (f = msg.getMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    credentialSid: (f = msg.getCredentialSid()) && proto.api.v1alpha1.delivery.ID.toObject(includeInstance, f),
    listReq: (f = msg.getListReq()) && proto.api.v1alpha1.delivery.ListReq.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq}
 */
proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq;
  return proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq}
 */
proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.TransferConfig;
      reader.readMessage(value,proto.api.v1alpha1.delivery.TransferConfig.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setMask(value);
      break;
    case 3:
      var value = new proto.api.v1alpha1.delivery.ID;
      reader.readMessage(value,proto.api.v1alpha1.delivery.ID.deserializeBinaryFromReader);
      msg.setCredentialSid(value);
      break;
    case 4:
      var value = new proto.api.v1alpha1.delivery.ListReq;
      reader.readMessage(value,proto.api.v1alpha1.delivery.ListReq.deserializeBinaryFromReader);
      msg.setListReq(value);
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
proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.TransferConfig.serializeBinaryToWriter
    );
  }
  f = message.getMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getCredentialSid();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.v1alpha1.delivery.ID.serializeBinaryToWriter
    );
  }
  f = message.getListReq();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api.v1alpha1.delivery.ListReq.serializeBinaryToWriter
    );
  }
};


/**
 * optional TransferConfig entity = 1;
 * @return {?proto.api.v1alpha1.delivery.TransferConfig}
 */
proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.TransferConfig} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.TransferConfig, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.TransferConfig|undefined} value
 * @return {!proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq} returns this
*/
proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq} returns this
 */
proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq.prototype.getMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq} returns this
*/
proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq} returns this
 */
proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq.prototype.hasMask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ID credential_sid = 3;
 * @return {?proto.api.v1alpha1.delivery.ID}
 */
proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq.prototype.getCredentialSid = function() {
  return /** @type{?proto.api.v1alpha1.delivery.ID} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.ID, 3));
};


/**
 * @param {?proto.api.v1alpha1.delivery.ID|undefined} value
 * @return {!proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq} returns this
*/
proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq.prototype.setCredentialSid = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq} returns this
 */
proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq.prototype.clearCredentialSid = function() {
  return this.setCredentialSid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq.prototype.hasCredentialSid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ListReq list_req = 4;
 * @return {?proto.api.v1alpha1.delivery.ListReq}
 */
proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq.prototype.getListReq = function() {
  return /** @type{?proto.api.v1alpha1.delivery.ListReq} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.ListReq, 4));
};


/**
 * @param {?proto.api.v1alpha1.delivery.ListReq|undefined} value
 * @return {!proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq} returns this
*/
proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq.prototype.setListReq = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq} returns this
 */
proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq.prototype.clearListReq = function() {
  return this.setListReq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq.prototype.hasListReq = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDRes.repeatedFields_ = [1];



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
proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entitiesList: jspb.Message.toObjectList(msg.getEntitiesList(),
    proto.api.v1alpha1.delivery.TransferConfig.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDRes}
 */
proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDRes;
  return proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDRes}
 */
proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.TransferConfig;
      reader.readMessage(value,proto.api.v1alpha1.delivery.TransferConfig.deserializeBinaryFromReader);
      msg.addEntities(value);
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
proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.TransferConfig.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TransferConfig entities = 1;
 * @return {!Array<!proto.api.v1alpha1.delivery.TransferConfig>}
 */
proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDRes.prototype.getEntitiesList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.delivery.TransferConfig>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.delivery.TransferConfig, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.delivery.TransferConfig>} value
 * @return {!proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDRes} returns this
*/
proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDRes.prototype.setEntitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.delivery.TransferConfig=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.delivery.TransferConfig}
 */
proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDRes.prototype.addEntities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.delivery.TransferConfig, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDRes} returns this
 */
proto.api.v1alpha1.delivery.ListTransferConfigsByCredentialIDRes.prototype.clearEntitiesList = function() {
  return this.setEntitiesList([]);
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
proto.api.v1alpha1.delivery.UpdateTransferConfigReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.UpdateTransferConfigReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.UpdateTransferConfigReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.UpdateTransferConfigReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.TransferConfig.toObject(includeInstance, f),
    mask: (f = msg.getMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.UpdateTransferConfigReq}
 */
proto.api.v1alpha1.delivery.UpdateTransferConfigReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.UpdateTransferConfigReq;
  return proto.api.v1alpha1.delivery.UpdateTransferConfigReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.UpdateTransferConfigReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.UpdateTransferConfigReq}
 */
proto.api.v1alpha1.delivery.UpdateTransferConfigReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.TransferConfig;
      reader.readMessage(value,proto.api.v1alpha1.delivery.TransferConfig.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setMask(value);
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
proto.api.v1alpha1.delivery.UpdateTransferConfigReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.UpdateTransferConfigReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.UpdateTransferConfigReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.UpdateTransferConfigReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.TransferConfig.serializeBinaryToWriter
    );
  }
  f = message.getMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional TransferConfig entity = 1;
 * @return {?proto.api.v1alpha1.delivery.TransferConfig}
 */
proto.api.v1alpha1.delivery.UpdateTransferConfigReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.TransferConfig} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.TransferConfig, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.TransferConfig|undefined} value
 * @return {!proto.api.v1alpha1.delivery.UpdateTransferConfigReq} returns this
*/
proto.api.v1alpha1.delivery.UpdateTransferConfigReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.UpdateTransferConfigReq} returns this
 */
proto.api.v1alpha1.delivery.UpdateTransferConfigReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.UpdateTransferConfigReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.delivery.UpdateTransferConfigReq.prototype.getMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.delivery.UpdateTransferConfigReq} returns this
*/
proto.api.v1alpha1.delivery.UpdateTransferConfigReq.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.UpdateTransferConfigReq} returns this
 */
proto.api.v1alpha1.delivery.UpdateTransferConfigReq.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.UpdateTransferConfigReq.prototype.hasMask = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.api.v1alpha1.delivery.UpdateTransferConfigRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.UpdateTransferConfigRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.UpdateTransferConfigRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.UpdateTransferConfigRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.ID.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.UpdateTransferConfigRes}
 */
proto.api.v1alpha1.delivery.UpdateTransferConfigRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.UpdateTransferConfigRes;
  return proto.api.v1alpha1.delivery.UpdateTransferConfigRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.UpdateTransferConfigRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.UpdateTransferConfigRes}
 */
proto.api.v1alpha1.delivery.UpdateTransferConfigRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.ID;
      reader.readMessage(value,proto.api.v1alpha1.delivery.ID.deserializeBinaryFromReader);
      msg.setEntity(value);
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
proto.api.v1alpha1.delivery.UpdateTransferConfigRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.UpdateTransferConfigRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.UpdateTransferConfigRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.UpdateTransferConfigRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.ID.serializeBinaryToWriter
    );
  }
};


/**
 * optional ID entity = 1;
 * @return {?proto.api.v1alpha1.delivery.ID}
 */
proto.api.v1alpha1.delivery.UpdateTransferConfigRes.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.ID} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.ID, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.ID|undefined} value
 * @return {!proto.api.v1alpha1.delivery.UpdateTransferConfigRes} returns this
*/
proto.api.v1alpha1.delivery.UpdateTransferConfigRes.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.UpdateTransferConfigRes} returns this
 */
proto.api.v1alpha1.delivery.UpdateTransferConfigRes.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.UpdateTransferConfigRes.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.api.v1alpha1.delivery.DeleteTransferConfigReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.DeleteTransferConfigReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.DeleteTransferConfigReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.DeleteTransferConfigReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.TransferConfig.toObject(includeInstance, f),
    mask: (f = msg.getMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.DeleteTransferConfigReq}
 */
proto.api.v1alpha1.delivery.DeleteTransferConfigReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.DeleteTransferConfigReq;
  return proto.api.v1alpha1.delivery.DeleteTransferConfigReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.DeleteTransferConfigReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.DeleteTransferConfigReq}
 */
proto.api.v1alpha1.delivery.DeleteTransferConfigReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.TransferConfig;
      reader.readMessage(value,proto.api.v1alpha1.delivery.TransferConfig.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setMask(value);
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
proto.api.v1alpha1.delivery.DeleteTransferConfigReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.DeleteTransferConfigReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.DeleteTransferConfigReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.DeleteTransferConfigReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.TransferConfig.serializeBinaryToWriter
    );
  }
  f = message.getMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional TransferConfig entity = 1;
 * @return {?proto.api.v1alpha1.delivery.TransferConfig}
 */
proto.api.v1alpha1.delivery.DeleteTransferConfigReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.TransferConfig} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.TransferConfig, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.TransferConfig|undefined} value
 * @return {!proto.api.v1alpha1.delivery.DeleteTransferConfigReq} returns this
*/
proto.api.v1alpha1.delivery.DeleteTransferConfigReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.DeleteTransferConfigReq} returns this
 */
proto.api.v1alpha1.delivery.DeleteTransferConfigReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.DeleteTransferConfigReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.delivery.DeleteTransferConfigReq.prototype.getMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.delivery.DeleteTransferConfigReq} returns this
*/
proto.api.v1alpha1.delivery.DeleteTransferConfigReq.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.DeleteTransferConfigReq} returns this
 */
proto.api.v1alpha1.delivery.DeleteTransferConfigReq.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.DeleteTransferConfigReq.prototype.hasMask = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.api.v1alpha1.delivery.DeleteTransferConfigRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.DeleteTransferConfigRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.DeleteTransferConfigRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.DeleteTransferConfigRes.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.api.v1alpha1.delivery.DeleteTransferConfigRes}
 */
proto.api.v1alpha1.delivery.DeleteTransferConfigRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.DeleteTransferConfigRes;
  return proto.api.v1alpha1.delivery.DeleteTransferConfigRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.DeleteTransferConfigRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.DeleteTransferConfigRes}
 */
proto.api.v1alpha1.delivery.DeleteTransferConfigRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.api.v1alpha1.delivery.DeleteTransferConfigRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.DeleteTransferConfigRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.DeleteTransferConfigRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.DeleteTransferConfigRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.api.v1alpha1.delivery.GetTransferConfigReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.GetTransferConfigReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.GetTransferConfigReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.GetTransferConfigReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.TransferConfig.toObject(includeInstance, f),
    mask: (f = msg.getMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.GetTransferConfigReq}
 */
proto.api.v1alpha1.delivery.GetTransferConfigReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.GetTransferConfigReq;
  return proto.api.v1alpha1.delivery.GetTransferConfigReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.GetTransferConfigReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.GetTransferConfigReq}
 */
proto.api.v1alpha1.delivery.GetTransferConfigReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.TransferConfig;
      reader.readMessage(value,proto.api.v1alpha1.delivery.TransferConfig.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setMask(value);
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
proto.api.v1alpha1.delivery.GetTransferConfigReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.GetTransferConfigReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.GetTransferConfigReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.GetTransferConfigReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.TransferConfig.serializeBinaryToWriter
    );
  }
  f = message.getMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional TransferConfig entity = 1;
 * @return {?proto.api.v1alpha1.delivery.TransferConfig}
 */
proto.api.v1alpha1.delivery.GetTransferConfigReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.TransferConfig} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.TransferConfig, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.TransferConfig|undefined} value
 * @return {!proto.api.v1alpha1.delivery.GetTransferConfigReq} returns this
*/
proto.api.v1alpha1.delivery.GetTransferConfigReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.GetTransferConfigReq} returns this
 */
proto.api.v1alpha1.delivery.GetTransferConfigReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.GetTransferConfigReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.delivery.GetTransferConfigReq.prototype.getMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.delivery.GetTransferConfigReq} returns this
*/
proto.api.v1alpha1.delivery.GetTransferConfigReq.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.GetTransferConfigReq} returns this
 */
proto.api.v1alpha1.delivery.GetTransferConfigReq.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.GetTransferConfigReq.prototype.hasMask = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.api.v1alpha1.delivery.GetTransferConfigRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.GetTransferConfigRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.GetTransferConfigRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.GetTransferConfigRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.TransferConfig.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.GetTransferConfigRes}
 */
proto.api.v1alpha1.delivery.GetTransferConfigRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.GetTransferConfigRes;
  return proto.api.v1alpha1.delivery.GetTransferConfigRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.GetTransferConfigRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.GetTransferConfigRes}
 */
proto.api.v1alpha1.delivery.GetTransferConfigRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.TransferConfig;
      reader.readMessage(value,proto.api.v1alpha1.delivery.TransferConfig.deserializeBinaryFromReader);
      msg.setEntity(value);
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
proto.api.v1alpha1.delivery.GetTransferConfigRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.GetTransferConfigRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.GetTransferConfigRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.GetTransferConfigRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.TransferConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional TransferConfig entity = 1;
 * @return {?proto.api.v1alpha1.delivery.TransferConfig}
 */
proto.api.v1alpha1.delivery.GetTransferConfigRes.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.TransferConfig} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.TransferConfig, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.TransferConfig|undefined} value
 * @return {!proto.api.v1alpha1.delivery.GetTransferConfigRes} returns this
*/
proto.api.v1alpha1.delivery.GetTransferConfigRes.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.GetTransferConfigRes} returns this
 */
proto.api.v1alpha1.delivery.GetTransferConfigRes.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.GetTransferConfigRes.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.api.v1alpha1.delivery.GetTransferConfigByNameReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.GetTransferConfigByNameReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.GetTransferConfigByNameReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.GetTransferConfigByNameReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    mask: (f = msg.getMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.TransferConfig.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.GetTransferConfigByNameReq}
 */
proto.api.v1alpha1.delivery.GetTransferConfigByNameReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.GetTransferConfigByNameReq;
  return proto.api.v1alpha1.delivery.GetTransferConfigByNameReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.GetTransferConfigByNameReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.GetTransferConfigByNameReq}
 */
proto.api.v1alpha1.delivery.GetTransferConfigByNameReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setMask(value);
      break;
    case 3:
      var value = new proto.api.v1alpha1.delivery.TransferConfig;
      reader.readMessage(value,proto.api.v1alpha1.delivery.TransferConfig.deserializeBinaryFromReader);
      msg.setEntity(value);
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
proto.api.v1alpha1.delivery.GetTransferConfigByNameReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.GetTransferConfigByNameReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.GetTransferConfigByNameReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.GetTransferConfigByNameReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.v1alpha1.delivery.TransferConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.api.v1alpha1.delivery.GetTransferConfigByNameReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.GetTransferConfigByNameReq} returns this
 */
proto.api.v1alpha1.delivery.GetTransferConfigByNameReq.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.FieldMask mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.delivery.GetTransferConfigByNameReq.prototype.getMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.delivery.GetTransferConfigByNameReq} returns this
*/
proto.api.v1alpha1.delivery.GetTransferConfigByNameReq.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.GetTransferConfigByNameReq} returns this
 */
proto.api.v1alpha1.delivery.GetTransferConfigByNameReq.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.GetTransferConfigByNameReq.prototype.hasMask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TransferConfig entity = 3;
 * @return {?proto.api.v1alpha1.delivery.TransferConfig}
 */
proto.api.v1alpha1.delivery.GetTransferConfigByNameReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.TransferConfig} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.TransferConfig, 3));
};


/**
 * @param {?proto.api.v1alpha1.delivery.TransferConfig|undefined} value
 * @return {!proto.api.v1alpha1.delivery.GetTransferConfigByNameReq} returns this
*/
proto.api.v1alpha1.delivery.GetTransferConfigByNameReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.GetTransferConfigByNameReq} returns this
 */
proto.api.v1alpha1.delivery.GetTransferConfigByNameReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.GetTransferConfigByNameReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.api.v1alpha1.delivery.GetTransferConfigByNameRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.GetTransferConfigByNameRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.GetTransferConfigByNameRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.GetTransferConfigByNameRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.TransferConfig.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.GetTransferConfigByNameRes}
 */
proto.api.v1alpha1.delivery.GetTransferConfigByNameRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.GetTransferConfigByNameRes;
  return proto.api.v1alpha1.delivery.GetTransferConfigByNameRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.GetTransferConfigByNameRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.GetTransferConfigByNameRes}
 */
proto.api.v1alpha1.delivery.GetTransferConfigByNameRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.TransferConfig;
      reader.readMessage(value,proto.api.v1alpha1.delivery.TransferConfig.deserializeBinaryFromReader);
      msg.setEntity(value);
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
proto.api.v1alpha1.delivery.GetTransferConfigByNameRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.GetTransferConfigByNameRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.GetTransferConfigByNameRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.GetTransferConfigByNameRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.TransferConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional TransferConfig entity = 1;
 * @return {?proto.api.v1alpha1.delivery.TransferConfig}
 */
proto.api.v1alpha1.delivery.GetTransferConfigByNameRes.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.TransferConfig} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.TransferConfig, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.TransferConfig|undefined} value
 * @return {!proto.api.v1alpha1.delivery.GetTransferConfigByNameRes} returns this
*/
proto.api.v1alpha1.delivery.GetTransferConfigByNameRes.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.GetTransferConfigByNameRes} returns this
 */
proto.api.v1alpha1.delivery.GetTransferConfigByNameRes.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.GetTransferConfigByNameRes.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.api.v1alpha1.delivery.ListHistoryReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.ListHistoryReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.ListHistoryReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListHistoryReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.History.toObject(includeInstance, f),
    mask: (f = msg.getMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    listReq: (f = msg.getListReq()) && proto.api.v1alpha1.delivery.ListReq.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.ListHistoryReq}
 */
proto.api.v1alpha1.delivery.ListHistoryReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.ListHistoryReq;
  return proto.api.v1alpha1.delivery.ListHistoryReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.ListHistoryReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.ListHistoryReq}
 */
proto.api.v1alpha1.delivery.ListHistoryReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.History;
      reader.readMessage(value,proto.api.v1alpha1.delivery.History.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setMask(value);
      break;
    case 3:
      var value = new proto.api.v1alpha1.delivery.ListReq;
      reader.readMessage(value,proto.api.v1alpha1.delivery.ListReq.deserializeBinaryFromReader);
      msg.setListReq(value);
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
proto.api.v1alpha1.delivery.ListHistoryReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.ListHistoryReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.ListHistoryReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListHistoryReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.History.serializeBinaryToWriter
    );
  }
  f = message.getMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getListReq();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.v1alpha1.delivery.ListReq.serializeBinaryToWriter
    );
  }
};


/**
 * optional History entity = 1;
 * @return {?proto.api.v1alpha1.delivery.History}
 */
proto.api.v1alpha1.delivery.ListHistoryReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.History} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.History, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.History|undefined} value
 * @return {!proto.api.v1alpha1.delivery.ListHistoryReq} returns this
*/
proto.api.v1alpha1.delivery.ListHistoryReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.ListHistoryReq} returns this
 */
proto.api.v1alpha1.delivery.ListHistoryReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.ListHistoryReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.delivery.ListHistoryReq.prototype.getMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.delivery.ListHistoryReq} returns this
*/
proto.api.v1alpha1.delivery.ListHistoryReq.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.ListHistoryReq} returns this
 */
proto.api.v1alpha1.delivery.ListHistoryReq.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.ListHistoryReq.prototype.hasMask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ListReq list_req = 3;
 * @return {?proto.api.v1alpha1.delivery.ListReq}
 */
proto.api.v1alpha1.delivery.ListHistoryReq.prototype.getListReq = function() {
  return /** @type{?proto.api.v1alpha1.delivery.ListReq} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.ListReq, 3));
};


/**
 * @param {?proto.api.v1alpha1.delivery.ListReq|undefined} value
 * @return {!proto.api.v1alpha1.delivery.ListHistoryReq} returns this
*/
proto.api.v1alpha1.delivery.ListHistoryReq.prototype.setListReq = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.ListHistoryReq} returns this
 */
proto.api.v1alpha1.delivery.ListHistoryReq.prototype.clearListReq = function() {
  return this.setListReq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.ListHistoryReq.prototype.hasListReq = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.delivery.ListHistoryRes.repeatedFields_ = [1];



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
proto.api.v1alpha1.delivery.ListHistoryRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.ListHistoryRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.ListHistoryRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListHistoryRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entitiesList: jspb.Message.toObjectList(msg.getEntitiesList(),
    proto.api.v1alpha1.delivery.History.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.delivery.ListHistoryRes}
 */
proto.api.v1alpha1.delivery.ListHistoryRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.ListHistoryRes;
  return proto.api.v1alpha1.delivery.ListHistoryRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.ListHistoryRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.ListHistoryRes}
 */
proto.api.v1alpha1.delivery.ListHistoryRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.History;
      reader.readMessage(value,proto.api.v1alpha1.delivery.History.deserializeBinaryFromReader);
      msg.addEntities(value);
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
proto.api.v1alpha1.delivery.ListHistoryRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.ListHistoryRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.ListHistoryRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListHistoryRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.History.serializeBinaryToWriter
    );
  }
};


/**
 * repeated History entities = 1;
 * @return {!Array<!proto.api.v1alpha1.delivery.History>}
 */
proto.api.v1alpha1.delivery.ListHistoryRes.prototype.getEntitiesList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.delivery.History>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.delivery.History, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.delivery.History>} value
 * @return {!proto.api.v1alpha1.delivery.ListHistoryRes} returns this
*/
proto.api.v1alpha1.delivery.ListHistoryRes.prototype.setEntitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.delivery.History=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.delivery.History}
 */
proto.api.v1alpha1.delivery.ListHistoryRes.prototype.addEntities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.delivery.History, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.delivery.ListHistoryRes} returns this
 */
proto.api.v1alpha1.delivery.ListHistoryRes.prototype.clearEntitiesList = function() {
  return this.setEntitiesList([]);
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
proto.api.v1alpha1.delivery.ListHistoryByTransferConfigReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.ListHistoryByTransferConfigReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.ListHistoryByTransferConfigReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListHistoryByTransferConfigReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.ListByIDReq.toObject(includeInstance, f),
    mask: (f = msg.getMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.ListHistoryByTransferConfigReq}
 */
proto.api.v1alpha1.delivery.ListHistoryByTransferConfigReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.ListHistoryByTransferConfigReq;
  return proto.api.v1alpha1.delivery.ListHistoryByTransferConfigReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.ListHistoryByTransferConfigReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.ListHistoryByTransferConfigReq}
 */
proto.api.v1alpha1.delivery.ListHistoryByTransferConfigReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.ListByIDReq;
      reader.readMessage(value,proto.api.v1alpha1.delivery.ListByIDReq.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setMask(value);
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
proto.api.v1alpha1.delivery.ListHistoryByTransferConfigReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.ListHistoryByTransferConfigReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.ListHistoryByTransferConfigReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListHistoryByTransferConfigReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.ListByIDReq.serializeBinaryToWriter
    );
  }
  f = message.getMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional ListByIDReq entity = 1;
 * @return {?proto.api.v1alpha1.delivery.ListByIDReq}
 */
proto.api.v1alpha1.delivery.ListHistoryByTransferConfigReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.ListByIDReq} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.ListByIDReq, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.ListByIDReq|undefined} value
 * @return {!proto.api.v1alpha1.delivery.ListHistoryByTransferConfigReq} returns this
*/
proto.api.v1alpha1.delivery.ListHistoryByTransferConfigReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.ListHistoryByTransferConfigReq} returns this
 */
proto.api.v1alpha1.delivery.ListHistoryByTransferConfigReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.ListHistoryByTransferConfigReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.delivery.ListHistoryByTransferConfigReq.prototype.getMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.delivery.ListHistoryByTransferConfigReq} returns this
*/
proto.api.v1alpha1.delivery.ListHistoryByTransferConfigReq.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.ListHistoryByTransferConfigReq} returns this
 */
proto.api.v1alpha1.delivery.ListHistoryByTransferConfigReq.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.ListHistoryByTransferConfigReq.prototype.hasMask = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.delivery.ListHistoryByTransferConfigRes.repeatedFields_ = [1];



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
proto.api.v1alpha1.delivery.ListHistoryByTransferConfigRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.ListHistoryByTransferConfigRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.ListHistoryByTransferConfigRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListHistoryByTransferConfigRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entitiesList: jspb.Message.toObjectList(msg.getEntitiesList(),
    proto.api.v1alpha1.delivery.History.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.delivery.ListHistoryByTransferConfigRes}
 */
proto.api.v1alpha1.delivery.ListHistoryByTransferConfigRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.ListHistoryByTransferConfigRes;
  return proto.api.v1alpha1.delivery.ListHistoryByTransferConfigRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.ListHistoryByTransferConfigRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.ListHistoryByTransferConfigRes}
 */
proto.api.v1alpha1.delivery.ListHistoryByTransferConfigRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.History;
      reader.readMessage(value,proto.api.v1alpha1.delivery.History.deserializeBinaryFromReader);
      msg.addEntities(value);
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
proto.api.v1alpha1.delivery.ListHistoryByTransferConfigRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.ListHistoryByTransferConfigRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.ListHistoryByTransferConfigRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListHistoryByTransferConfigRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.History.serializeBinaryToWriter
    );
  }
};


/**
 * repeated History entities = 1;
 * @return {!Array<!proto.api.v1alpha1.delivery.History>}
 */
proto.api.v1alpha1.delivery.ListHistoryByTransferConfigRes.prototype.getEntitiesList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.delivery.History>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.delivery.History, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.delivery.History>} value
 * @return {!proto.api.v1alpha1.delivery.ListHistoryByTransferConfigRes} returns this
*/
proto.api.v1alpha1.delivery.ListHistoryByTransferConfigRes.prototype.setEntitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.delivery.History=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.delivery.History}
 */
proto.api.v1alpha1.delivery.ListHistoryByTransferConfigRes.prototype.addEntities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.delivery.History, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.delivery.ListHistoryByTransferConfigRes} returns this
 */
proto.api.v1alpha1.delivery.ListHistoryByTransferConfigRes.prototype.clearEntitiesList = function() {
  return this.setEntitiesList([]);
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
proto.api.v1alpha1.delivery.CreateHistoryReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.CreateHistoryReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.CreateHistoryReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.CreateHistoryReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.History.toObject(includeInstance, f),
    mask: (f = msg.getMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.CreateHistoryReq}
 */
proto.api.v1alpha1.delivery.CreateHistoryReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.CreateHistoryReq;
  return proto.api.v1alpha1.delivery.CreateHistoryReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.CreateHistoryReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.CreateHistoryReq}
 */
proto.api.v1alpha1.delivery.CreateHistoryReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.History;
      reader.readMessage(value,proto.api.v1alpha1.delivery.History.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setMask(value);
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
proto.api.v1alpha1.delivery.CreateHistoryReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.CreateHistoryReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.CreateHistoryReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.CreateHistoryReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.History.serializeBinaryToWriter
    );
  }
  f = message.getMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional History entity = 1;
 * @return {?proto.api.v1alpha1.delivery.History}
 */
proto.api.v1alpha1.delivery.CreateHistoryReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.History} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.History, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.History|undefined} value
 * @return {!proto.api.v1alpha1.delivery.CreateHistoryReq} returns this
*/
proto.api.v1alpha1.delivery.CreateHistoryReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.CreateHistoryReq} returns this
 */
proto.api.v1alpha1.delivery.CreateHistoryReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.CreateHistoryReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.delivery.CreateHistoryReq.prototype.getMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.delivery.CreateHistoryReq} returns this
*/
proto.api.v1alpha1.delivery.CreateHistoryReq.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.CreateHistoryReq} returns this
 */
proto.api.v1alpha1.delivery.CreateHistoryReq.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.CreateHistoryReq.prototype.hasMask = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.api.v1alpha1.delivery.CreateHistoryRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.CreateHistoryRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.CreateHistoryRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.CreateHistoryRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.ID.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.CreateHistoryRes}
 */
proto.api.v1alpha1.delivery.CreateHistoryRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.CreateHistoryRes;
  return proto.api.v1alpha1.delivery.CreateHistoryRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.CreateHistoryRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.CreateHistoryRes}
 */
proto.api.v1alpha1.delivery.CreateHistoryRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.ID;
      reader.readMessage(value,proto.api.v1alpha1.delivery.ID.deserializeBinaryFromReader);
      msg.setEntity(value);
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
proto.api.v1alpha1.delivery.CreateHistoryRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.CreateHistoryRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.CreateHistoryRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.CreateHistoryRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.ID.serializeBinaryToWriter
    );
  }
};


/**
 * optional ID entity = 1;
 * @return {?proto.api.v1alpha1.delivery.ID}
 */
proto.api.v1alpha1.delivery.CreateHistoryRes.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.ID} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.ID, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.ID|undefined} value
 * @return {!proto.api.v1alpha1.delivery.CreateHistoryRes} returns this
*/
proto.api.v1alpha1.delivery.CreateHistoryRes.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.CreateHistoryRes} returns this
 */
proto.api.v1alpha1.delivery.CreateHistoryRes.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.CreateHistoryRes.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.api.v1alpha1.delivery.GetHistoryReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.GetHistoryReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.GetHistoryReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.GetHistoryReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.ID.toObject(includeInstance, f),
    mask: (f = msg.getMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.GetHistoryReq}
 */
proto.api.v1alpha1.delivery.GetHistoryReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.GetHistoryReq;
  return proto.api.v1alpha1.delivery.GetHistoryReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.GetHistoryReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.GetHistoryReq}
 */
proto.api.v1alpha1.delivery.GetHistoryReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.ID;
      reader.readMessage(value,proto.api.v1alpha1.delivery.ID.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setMask(value);
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
proto.api.v1alpha1.delivery.GetHistoryReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.GetHistoryReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.GetHistoryReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.GetHistoryReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.ID.serializeBinaryToWriter
    );
  }
  f = message.getMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional ID entity = 1;
 * @return {?proto.api.v1alpha1.delivery.ID}
 */
proto.api.v1alpha1.delivery.GetHistoryReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.ID} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.ID, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.ID|undefined} value
 * @return {!proto.api.v1alpha1.delivery.GetHistoryReq} returns this
*/
proto.api.v1alpha1.delivery.GetHistoryReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.GetHistoryReq} returns this
 */
proto.api.v1alpha1.delivery.GetHistoryReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.GetHistoryReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.delivery.GetHistoryReq.prototype.getMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.delivery.GetHistoryReq} returns this
*/
proto.api.v1alpha1.delivery.GetHistoryReq.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.GetHistoryReq} returns this
 */
proto.api.v1alpha1.delivery.GetHistoryReq.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.GetHistoryReq.prototype.hasMask = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.api.v1alpha1.delivery.GetHistoryRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.GetHistoryRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.GetHistoryRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.GetHistoryRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.History.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.GetHistoryRes}
 */
proto.api.v1alpha1.delivery.GetHistoryRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.GetHistoryRes;
  return proto.api.v1alpha1.delivery.GetHistoryRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.GetHistoryRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.GetHistoryRes}
 */
proto.api.v1alpha1.delivery.GetHistoryRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.History;
      reader.readMessage(value,proto.api.v1alpha1.delivery.History.deserializeBinaryFromReader);
      msg.setEntity(value);
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
proto.api.v1alpha1.delivery.GetHistoryRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.GetHistoryRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.GetHistoryRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.GetHistoryRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.History.serializeBinaryToWriter
    );
  }
};


/**
 * optional History entity = 1;
 * @return {?proto.api.v1alpha1.delivery.History}
 */
proto.api.v1alpha1.delivery.GetHistoryRes.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.History} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.History, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.History|undefined} value
 * @return {!proto.api.v1alpha1.delivery.GetHistoryRes} returns this
*/
proto.api.v1alpha1.delivery.GetHistoryRes.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.GetHistoryRes} returns this
 */
proto.api.v1alpha1.delivery.GetHistoryRes.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.GetHistoryRes.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.api.v1alpha1.delivery.CreateDeliveryDefinitionReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.CreateDeliveryDefinitionReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.CreateDeliveryDefinitionReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.CreateDeliveryDefinitionReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    definition: (f = msg.getDefinition()) && proto.api.v1alpha1.delivery.DeliveryDefinition.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.CreateDeliveryDefinitionReq}
 */
proto.api.v1alpha1.delivery.CreateDeliveryDefinitionReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.CreateDeliveryDefinitionReq;
  return proto.api.v1alpha1.delivery.CreateDeliveryDefinitionReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.CreateDeliveryDefinitionReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.CreateDeliveryDefinitionReq}
 */
proto.api.v1alpha1.delivery.CreateDeliveryDefinitionReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.DeliveryDefinition;
      reader.readMessage(value,proto.api.v1alpha1.delivery.DeliveryDefinition.deserializeBinaryFromReader);
      msg.setDefinition(value);
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
proto.api.v1alpha1.delivery.CreateDeliveryDefinitionReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.CreateDeliveryDefinitionReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.CreateDeliveryDefinitionReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.CreateDeliveryDefinitionReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDefinition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.DeliveryDefinition.serializeBinaryToWriter
    );
  }
};


/**
 * optional DeliveryDefinition definition = 1;
 * @return {?proto.api.v1alpha1.delivery.DeliveryDefinition}
 */
proto.api.v1alpha1.delivery.CreateDeliveryDefinitionReq.prototype.getDefinition = function() {
  return /** @type{?proto.api.v1alpha1.delivery.DeliveryDefinition} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.DeliveryDefinition, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.DeliveryDefinition|undefined} value
 * @return {!proto.api.v1alpha1.delivery.CreateDeliveryDefinitionReq} returns this
*/
proto.api.v1alpha1.delivery.CreateDeliveryDefinitionReq.prototype.setDefinition = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.CreateDeliveryDefinitionReq} returns this
 */
proto.api.v1alpha1.delivery.CreateDeliveryDefinitionReq.prototype.clearDefinition = function() {
  return this.setDefinition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.CreateDeliveryDefinitionReq.prototype.hasDefinition = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.api.v1alpha1.delivery.CreateDeliveryDefinitionRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.CreateDeliveryDefinitionRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.CreateDeliveryDefinitionRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.CreateDeliveryDefinitionRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.ID.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.CreateDeliveryDefinitionRes}
 */
proto.api.v1alpha1.delivery.CreateDeliveryDefinitionRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.CreateDeliveryDefinitionRes;
  return proto.api.v1alpha1.delivery.CreateDeliveryDefinitionRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.CreateDeliveryDefinitionRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.CreateDeliveryDefinitionRes}
 */
proto.api.v1alpha1.delivery.CreateDeliveryDefinitionRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.ID;
      reader.readMessage(value,proto.api.v1alpha1.delivery.ID.deserializeBinaryFromReader);
      msg.setEntity(value);
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
proto.api.v1alpha1.delivery.CreateDeliveryDefinitionRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.CreateDeliveryDefinitionRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.CreateDeliveryDefinitionRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.CreateDeliveryDefinitionRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.ID.serializeBinaryToWriter
    );
  }
};


/**
 * optional ID entity = 1;
 * @return {?proto.api.v1alpha1.delivery.ID}
 */
proto.api.v1alpha1.delivery.CreateDeliveryDefinitionRes.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.ID} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.ID, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.ID|undefined} value
 * @return {!proto.api.v1alpha1.delivery.CreateDeliveryDefinitionRes} returns this
*/
proto.api.v1alpha1.delivery.CreateDeliveryDefinitionRes.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.CreateDeliveryDefinitionRes} returns this
 */
proto.api.v1alpha1.delivery.CreateDeliveryDefinitionRes.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.CreateDeliveryDefinitionRes.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.ID.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionReq}
 */
proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionReq;
  return proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionReq}
 */
proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.ID;
      reader.readMessage(value,proto.api.v1alpha1.delivery.ID.deserializeBinaryFromReader);
      msg.setEntity(value);
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
proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.ID.serializeBinaryToWriter
    );
  }
};


/**
 * optional ID entity = 1;
 * @return {?proto.api.v1alpha1.delivery.ID}
 */
proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.ID} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.ID, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.ID|undefined} value
 * @return {!proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionReq} returns this
*/
proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionReq} returns this
 */
proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionRes.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionRes}
 */
proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionRes;
  return proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionRes}
 */
proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.DeleteDeliveryDefinitionRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.api.v1alpha1.delivery.GetDeliveryDefinitionReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.GetDeliveryDefinitionReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.GetDeliveryDefinitionReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.GetDeliveryDefinitionReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.DeliveryDefinition.toObject(includeInstance, f),
    mask: (f = msg.getMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.GetDeliveryDefinitionReq}
 */
proto.api.v1alpha1.delivery.GetDeliveryDefinitionReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.GetDeliveryDefinitionReq;
  return proto.api.v1alpha1.delivery.GetDeliveryDefinitionReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.GetDeliveryDefinitionReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.GetDeliveryDefinitionReq}
 */
proto.api.v1alpha1.delivery.GetDeliveryDefinitionReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.DeliveryDefinition;
      reader.readMessage(value,proto.api.v1alpha1.delivery.DeliveryDefinition.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setMask(value);
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
proto.api.v1alpha1.delivery.GetDeliveryDefinitionReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.GetDeliveryDefinitionReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.GetDeliveryDefinitionReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.GetDeliveryDefinitionReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.DeliveryDefinition.serializeBinaryToWriter
    );
  }
  f = message.getMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional DeliveryDefinition entity = 1;
 * @return {?proto.api.v1alpha1.delivery.DeliveryDefinition}
 */
proto.api.v1alpha1.delivery.GetDeliveryDefinitionReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.DeliveryDefinition} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.DeliveryDefinition, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.DeliveryDefinition|undefined} value
 * @return {!proto.api.v1alpha1.delivery.GetDeliveryDefinitionReq} returns this
*/
proto.api.v1alpha1.delivery.GetDeliveryDefinitionReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.GetDeliveryDefinitionReq} returns this
 */
proto.api.v1alpha1.delivery.GetDeliveryDefinitionReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.GetDeliveryDefinitionReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.delivery.GetDeliveryDefinitionReq.prototype.getMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.delivery.GetDeliveryDefinitionReq} returns this
*/
proto.api.v1alpha1.delivery.GetDeliveryDefinitionReq.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.GetDeliveryDefinitionReq} returns this
 */
proto.api.v1alpha1.delivery.GetDeliveryDefinitionReq.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.GetDeliveryDefinitionReq.prototype.hasMask = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.api.v1alpha1.delivery.GetDeliveryDefinitionRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.GetDeliveryDefinitionRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.GetDeliveryDefinitionRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.GetDeliveryDefinitionRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.DeliveryDefinition.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.GetDeliveryDefinitionRes}
 */
proto.api.v1alpha1.delivery.GetDeliveryDefinitionRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.GetDeliveryDefinitionRes;
  return proto.api.v1alpha1.delivery.GetDeliveryDefinitionRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.GetDeliveryDefinitionRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.GetDeliveryDefinitionRes}
 */
proto.api.v1alpha1.delivery.GetDeliveryDefinitionRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.DeliveryDefinition;
      reader.readMessage(value,proto.api.v1alpha1.delivery.DeliveryDefinition.deserializeBinaryFromReader);
      msg.setEntity(value);
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
proto.api.v1alpha1.delivery.GetDeliveryDefinitionRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.GetDeliveryDefinitionRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.GetDeliveryDefinitionRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.GetDeliveryDefinitionRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.DeliveryDefinition.serializeBinaryToWriter
    );
  }
};


/**
 * optional DeliveryDefinition entity = 1;
 * @return {?proto.api.v1alpha1.delivery.DeliveryDefinition}
 */
proto.api.v1alpha1.delivery.GetDeliveryDefinitionRes.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.DeliveryDefinition} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.DeliveryDefinition, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.DeliveryDefinition|undefined} value
 * @return {!proto.api.v1alpha1.delivery.GetDeliveryDefinitionRes} returns this
*/
proto.api.v1alpha1.delivery.GetDeliveryDefinitionRes.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.GetDeliveryDefinitionRes} returns this
 */
proto.api.v1alpha1.delivery.GetDeliveryDefinitionRes.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.GetDeliveryDefinitionRes.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    mask: (f = msg.getMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.DeliveryDefinition.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameReq}
 */
proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameReq;
  return proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameReq}
 */
proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setMask(value);
      break;
    case 3:
      var value = new proto.api.v1alpha1.delivery.DeliveryDefinition;
      reader.readMessage(value,proto.api.v1alpha1.delivery.DeliveryDefinition.deserializeBinaryFromReader);
      msg.setEntity(value);
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
proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.v1alpha1.delivery.DeliveryDefinition.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameReq} returns this
 */
proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameReq.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.FieldMask mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameReq.prototype.getMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameReq} returns this
*/
proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameReq.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameReq} returns this
 */
proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameReq.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameReq.prototype.hasMask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DeliveryDefinition entity = 3;
 * @return {?proto.api.v1alpha1.delivery.DeliveryDefinition}
 */
proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.DeliveryDefinition} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.DeliveryDefinition, 3));
};


/**
 * @param {?proto.api.v1alpha1.delivery.DeliveryDefinition|undefined} value
 * @return {!proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameReq} returns this
*/
proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameReq} returns this
 */
proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.DeliveryDefinition.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameRes}
 */
proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameRes;
  return proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameRes}
 */
proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.DeliveryDefinition;
      reader.readMessage(value,proto.api.v1alpha1.delivery.DeliveryDefinition.deserializeBinaryFromReader);
      msg.setEntity(value);
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
proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.DeliveryDefinition.serializeBinaryToWriter
    );
  }
};


/**
 * optional DeliveryDefinition entity = 1;
 * @return {?proto.api.v1alpha1.delivery.DeliveryDefinition}
 */
proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameRes.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.DeliveryDefinition} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.DeliveryDefinition, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.DeliveryDefinition|undefined} value
 * @return {!proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameRes} returns this
*/
proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameRes.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameRes} returns this
 */
proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameRes.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.GetDeliveryDefinitionByNameRes.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.DeliveryDefinition.toObject(includeInstance, f),
    mask: (f = msg.getMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    listReq: (f = msg.getListReq()) && proto.api.v1alpha1.delivery.ListReq.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq}
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq;
  return proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq}
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.DeliveryDefinition;
      reader.readMessage(value,proto.api.v1alpha1.delivery.DeliveryDefinition.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setMask(value);
      break;
    case 3:
      var value = new proto.api.v1alpha1.delivery.ListReq;
      reader.readMessage(value,proto.api.v1alpha1.delivery.ListReq.deserializeBinaryFromReader);
      msg.setListReq(value);
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
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.DeliveryDefinition.serializeBinaryToWriter
    );
  }
  f = message.getMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getListReq();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.v1alpha1.delivery.ListReq.serializeBinaryToWriter
    );
  }
};


/**
 * optional DeliveryDefinition entity = 1;
 * @return {?proto.api.v1alpha1.delivery.DeliveryDefinition}
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.DeliveryDefinition} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.DeliveryDefinition, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.DeliveryDefinition|undefined} value
 * @return {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq} returns this
*/
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq} returns this
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq.prototype.getMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq} returns this
*/
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq} returns this
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq.prototype.hasMask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ListReq list_req = 3;
 * @return {?proto.api.v1alpha1.delivery.ListReq}
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq.prototype.getListReq = function() {
  return /** @type{?proto.api.v1alpha1.delivery.ListReq} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.ListReq, 3));
};


/**
 * @param {?proto.api.v1alpha1.delivery.ListReq|undefined} value
 * @return {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq} returns this
*/
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq.prototype.setListReq = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq} returns this
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq.prototype.clearListReq = function() {
  return this.setListReq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsReq.prototype.hasListReq = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsRes.repeatedFields_ = [1];



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
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.ListDeliveryDefinitionsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entitiesList: jspb.Message.toObjectList(msg.getEntitiesList(),
    proto.api.v1alpha1.delivery.DeliveryDefinition.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsRes}
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.ListDeliveryDefinitionsRes;
  return proto.api.v1alpha1.delivery.ListDeliveryDefinitionsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsRes}
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.DeliveryDefinition;
      reader.readMessage(value,proto.api.v1alpha1.delivery.DeliveryDefinition.deserializeBinaryFromReader);
      msg.addEntities(value);
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
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.ListDeliveryDefinitionsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.DeliveryDefinition.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DeliveryDefinition entities = 1;
 * @return {!Array<!proto.api.v1alpha1.delivery.DeliveryDefinition>}
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsRes.prototype.getEntitiesList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.delivery.DeliveryDefinition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.delivery.DeliveryDefinition, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.delivery.DeliveryDefinition>} value
 * @return {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsRes} returns this
*/
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsRes.prototype.setEntitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.delivery.DeliveryDefinition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.delivery.DeliveryDefinition}
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsRes.prototype.addEntities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.delivery.DeliveryDefinition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsRes} returns this
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsRes.prototype.clearEntitiesList = function() {
  return this.setEntitiesList([]);
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
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.DeliveryDefinition.toObject(includeInstance, f),
    mask: (f = msg.getMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    credentialSid: (f = msg.getCredentialSid()) && proto.api.v1alpha1.delivery.ID.toObject(includeInstance, f),
    listReq: (f = msg.getListReq()) && proto.api.v1alpha1.delivery.ListReq.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq}
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq;
  return proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq}
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.DeliveryDefinition;
      reader.readMessage(value,proto.api.v1alpha1.delivery.DeliveryDefinition.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setMask(value);
      break;
    case 3:
      var value = new proto.api.v1alpha1.delivery.ID;
      reader.readMessage(value,proto.api.v1alpha1.delivery.ID.deserializeBinaryFromReader);
      msg.setCredentialSid(value);
      break;
    case 4:
      var value = new proto.api.v1alpha1.delivery.ListReq;
      reader.readMessage(value,proto.api.v1alpha1.delivery.ListReq.deserializeBinaryFromReader);
      msg.setListReq(value);
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
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.DeliveryDefinition.serializeBinaryToWriter
    );
  }
  f = message.getMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getCredentialSid();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.v1alpha1.delivery.ID.serializeBinaryToWriter
    );
  }
  f = message.getListReq();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api.v1alpha1.delivery.ListReq.serializeBinaryToWriter
    );
  }
};


/**
 * optional DeliveryDefinition entity = 1;
 * @return {?proto.api.v1alpha1.delivery.DeliveryDefinition}
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.DeliveryDefinition} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.DeliveryDefinition, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.DeliveryDefinition|undefined} value
 * @return {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq} returns this
*/
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq} returns this
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq.prototype.getMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq} returns this
*/
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq} returns this
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq.prototype.hasMask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ID credential_sid = 3;
 * @return {?proto.api.v1alpha1.delivery.ID}
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq.prototype.getCredentialSid = function() {
  return /** @type{?proto.api.v1alpha1.delivery.ID} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.ID, 3));
};


/**
 * @param {?proto.api.v1alpha1.delivery.ID|undefined} value
 * @return {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq} returns this
*/
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq.prototype.setCredentialSid = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq} returns this
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq.prototype.clearCredentialSid = function() {
  return this.setCredentialSid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq.prototype.hasCredentialSid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ListReq list_req = 4;
 * @return {?proto.api.v1alpha1.delivery.ListReq}
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq.prototype.getListReq = function() {
  return /** @type{?proto.api.v1alpha1.delivery.ListReq} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.ListReq, 4));
};


/**
 * @param {?proto.api.v1alpha1.delivery.ListReq|undefined} value
 * @return {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq} returns this
*/
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq.prototype.setListReq = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq} returns this
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq.prototype.clearListReq = function() {
  return this.setListReq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDReq.prototype.hasListReq = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDRes.repeatedFields_ = [1];



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
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entitiesList: jspb.Message.toObjectList(msg.getEntitiesList(),
    proto.api.v1alpha1.delivery.DeliveryDefinition.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDRes}
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDRes;
  return proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDRes}
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.DeliveryDefinition;
      reader.readMessage(value,proto.api.v1alpha1.delivery.DeliveryDefinition.deserializeBinaryFromReader);
      msg.addEntities(value);
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
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.DeliveryDefinition.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DeliveryDefinition entities = 1;
 * @return {!Array<!proto.api.v1alpha1.delivery.DeliveryDefinition>}
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDRes.prototype.getEntitiesList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.delivery.DeliveryDefinition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.delivery.DeliveryDefinition, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.delivery.DeliveryDefinition>} value
 * @return {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDRes} returns this
*/
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDRes.prototype.setEntitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.delivery.DeliveryDefinition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.delivery.DeliveryDefinition}
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDRes.prototype.addEntities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.delivery.DeliveryDefinition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDRes} returns this
 */
proto.api.v1alpha1.delivery.ListDeliveryDefinitionsByCredentialIDRes.prototype.clearEntitiesList = function() {
  return this.setEntitiesList([]);
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
proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.DeliveryDefinition.toObject(includeInstance, f),
    mask: (f = msg.getMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionReq}
 */
proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionReq;
  return proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionReq}
 */
proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.DeliveryDefinition;
      reader.readMessage(value,proto.api.v1alpha1.delivery.DeliveryDefinition.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setMask(value);
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
proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.DeliveryDefinition.serializeBinaryToWriter
    );
  }
  f = message.getMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional DeliveryDefinition entity = 1;
 * @return {?proto.api.v1alpha1.delivery.DeliveryDefinition}
 */
proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.DeliveryDefinition} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.DeliveryDefinition, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.DeliveryDefinition|undefined} value
 * @return {!proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionReq} returns this
*/
proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionReq} returns this
 */
proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionReq.prototype.getMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionReq} returns this
*/
proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionReq.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionReq} returns this
 */
proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionReq.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionReq.prototype.hasMask = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.ID.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionRes}
 */
proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionRes;
  return proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionRes}
 */
proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.ID;
      reader.readMessage(value,proto.api.v1alpha1.delivery.ID.deserializeBinaryFromReader);
      msg.setEntity(value);
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
proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.ID.serializeBinaryToWriter
    );
  }
};


/**
 * optional ID entity = 1;
 * @return {?proto.api.v1alpha1.delivery.ID}
 */
proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionRes.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.ID} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.ID, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.ID|undefined} value
 * @return {!proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionRes} returns this
*/
proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionRes.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionRes} returns this
 */
proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionRes.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.UpdateDeliveryDefinitionRes.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.api.v1alpha1.delivery.CreateEncryptionReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.CreateEncryptionReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.CreateEncryptionReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.CreateEncryptionReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    encryption: (f = msg.getEncryption()) && proto.api.v1alpha1.delivery.Encryption.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.CreateEncryptionReq}
 */
proto.api.v1alpha1.delivery.CreateEncryptionReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.CreateEncryptionReq;
  return proto.api.v1alpha1.delivery.CreateEncryptionReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.CreateEncryptionReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.CreateEncryptionReq}
 */
proto.api.v1alpha1.delivery.CreateEncryptionReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.Encryption;
      reader.readMessage(value,proto.api.v1alpha1.delivery.Encryption.deserializeBinaryFromReader);
      msg.setEncryption(value);
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
proto.api.v1alpha1.delivery.CreateEncryptionReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.CreateEncryptionReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.CreateEncryptionReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.CreateEncryptionReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEncryption();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.Encryption.serializeBinaryToWriter
    );
  }
};


/**
 * optional Encryption encryption = 1;
 * @return {?proto.api.v1alpha1.delivery.Encryption}
 */
proto.api.v1alpha1.delivery.CreateEncryptionReq.prototype.getEncryption = function() {
  return /** @type{?proto.api.v1alpha1.delivery.Encryption} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.Encryption, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.Encryption|undefined} value
 * @return {!proto.api.v1alpha1.delivery.CreateEncryptionReq} returns this
*/
proto.api.v1alpha1.delivery.CreateEncryptionReq.prototype.setEncryption = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.CreateEncryptionReq} returns this
 */
proto.api.v1alpha1.delivery.CreateEncryptionReq.prototype.clearEncryption = function() {
  return this.setEncryption(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.CreateEncryptionReq.prototype.hasEncryption = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.api.v1alpha1.delivery.CreateEncryptionRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.CreateEncryptionRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.CreateEncryptionRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.CreateEncryptionRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.ID.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.CreateEncryptionRes}
 */
proto.api.v1alpha1.delivery.CreateEncryptionRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.CreateEncryptionRes;
  return proto.api.v1alpha1.delivery.CreateEncryptionRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.CreateEncryptionRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.CreateEncryptionRes}
 */
proto.api.v1alpha1.delivery.CreateEncryptionRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.ID;
      reader.readMessage(value,proto.api.v1alpha1.delivery.ID.deserializeBinaryFromReader);
      msg.setEntity(value);
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
proto.api.v1alpha1.delivery.CreateEncryptionRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.CreateEncryptionRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.CreateEncryptionRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.CreateEncryptionRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.ID.serializeBinaryToWriter
    );
  }
};


/**
 * optional ID entity = 1;
 * @return {?proto.api.v1alpha1.delivery.ID}
 */
proto.api.v1alpha1.delivery.CreateEncryptionRes.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.ID} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.ID, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.ID|undefined} value
 * @return {!proto.api.v1alpha1.delivery.CreateEncryptionRes} returns this
*/
proto.api.v1alpha1.delivery.CreateEncryptionRes.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.CreateEncryptionRes} returns this
 */
proto.api.v1alpha1.delivery.CreateEncryptionRes.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.CreateEncryptionRes.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.api.v1alpha1.delivery.DeleteEncryptionReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.DeleteEncryptionReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.DeleteEncryptionReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.DeleteEncryptionReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.ID.toObject(includeInstance, f),
    mask: (f = msg.getMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.DeleteEncryptionReq}
 */
proto.api.v1alpha1.delivery.DeleteEncryptionReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.DeleteEncryptionReq;
  return proto.api.v1alpha1.delivery.DeleteEncryptionReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.DeleteEncryptionReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.DeleteEncryptionReq}
 */
proto.api.v1alpha1.delivery.DeleteEncryptionReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.ID;
      reader.readMessage(value,proto.api.v1alpha1.delivery.ID.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setMask(value);
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
proto.api.v1alpha1.delivery.DeleteEncryptionReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.DeleteEncryptionReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.DeleteEncryptionReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.DeleteEncryptionReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.ID.serializeBinaryToWriter
    );
  }
  f = message.getMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional ID entity = 1;
 * @return {?proto.api.v1alpha1.delivery.ID}
 */
proto.api.v1alpha1.delivery.DeleteEncryptionReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.ID} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.ID, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.ID|undefined} value
 * @return {!proto.api.v1alpha1.delivery.DeleteEncryptionReq} returns this
*/
proto.api.v1alpha1.delivery.DeleteEncryptionReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.DeleteEncryptionReq} returns this
 */
proto.api.v1alpha1.delivery.DeleteEncryptionReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.DeleteEncryptionReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.delivery.DeleteEncryptionReq.prototype.getMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.delivery.DeleteEncryptionReq} returns this
*/
proto.api.v1alpha1.delivery.DeleteEncryptionReq.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.DeleteEncryptionReq} returns this
 */
proto.api.v1alpha1.delivery.DeleteEncryptionReq.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.DeleteEncryptionReq.prototype.hasMask = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.api.v1alpha1.delivery.DeleteEncryptionRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.DeleteEncryptionRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.DeleteEncryptionRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.DeleteEncryptionRes.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.api.v1alpha1.delivery.DeleteEncryptionRes}
 */
proto.api.v1alpha1.delivery.DeleteEncryptionRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.DeleteEncryptionRes;
  return proto.api.v1alpha1.delivery.DeleteEncryptionRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.DeleteEncryptionRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.DeleteEncryptionRes}
 */
proto.api.v1alpha1.delivery.DeleteEncryptionRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.api.v1alpha1.delivery.DeleteEncryptionRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.DeleteEncryptionRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.DeleteEncryptionRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.DeleteEncryptionRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.api.v1alpha1.delivery.GetEncryptionReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.GetEncryptionReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.GetEncryptionReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.GetEncryptionReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.Encryption.toObject(includeInstance, f),
    mask: (f = msg.getMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.GetEncryptionReq}
 */
proto.api.v1alpha1.delivery.GetEncryptionReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.GetEncryptionReq;
  return proto.api.v1alpha1.delivery.GetEncryptionReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.GetEncryptionReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.GetEncryptionReq}
 */
proto.api.v1alpha1.delivery.GetEncryptionReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.Encryption;
      reader.readMessage(value,proto.api.v1alpha1.delivery.Encryption.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setMask(value);
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
proto.api.v1alpha1.delivery.GetEncryptionReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.GetEncryptionReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.GetEncryptionReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.GetEncryptionReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.Encryption.serializeBinaryToWriter
    );
  }
  f = message.getMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional Encryption entity = 1;
 * @return {?proto.api.v1alpha1.delivery.Encryption}
 */
proto.api.v1alpha1.delivery.GetEncryptionReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.Encryption} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.Encryption, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.Encryption|undefined} value
 * @return {!proto.api.v1alpha1.delivery.GetEncryptionReq} returns this
*/
proto.api.v1alpha1.delivery.GetEncryptionReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.GetEncryptionReq} returns this
 */
proto.api.v1alpha1.delivery.GetEncryptionReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.GetEncryptionReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.delivery.GetEncryptionReq.prototype.getMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.delivery.GetEncryptionReq} returns this
*/
proto.api.v1alpha1.delivery.GetEncryptionReq.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.GetEncryptionReq} returns this
 */
proto.api.v1alpha1.delivery.GetEncryptionReq.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.GetEncryptionReq.prototype.hasMask = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.api.v1alpha1.delivery.GetEncryptionRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.GetEncryptionRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.GetEncryptionRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.GetEncryptionRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.Encryption.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.GetEncryptionRes}
 */
proto.api.v1alpha1.delivery.GetEncryptionRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.GetEncryptionRes;
  return proto.api.v1alpha1.delivery.GetEncryptionRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.GetEncryptionRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.GetEncryptionRes}
 */
proto.api.v1alpha1.delivery.GetEncryptionRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.Encryption;
      reader.readMessage(value,proto.api.v1alpha1.delivery.Encryption.deserializeBinaryFromReader);
      msg.setEntity(value);
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
proto.api.v1alpha1.delivery.GetEncryptionRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.GetEncryptionRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.GetEncryptionRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.GetEncryptionRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.Encryption.serializeBinaryToWriter
    );
  }
};


/**
 * optional Encryption entity = 1;
 * @return {?proto.api.v1alpha1.delivery.Encryption}
 */
proto.api.v1alpha1.delivery.GetEncryptionRes.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.Encryption} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.Encryption, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.Encryption|undefined} value
 * @return {!proto.api.v1alpha1.delivery.GetEncryptionRes} returns this
*/
proto.api.v1alpha1.delivery.GetEncryptionRes.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.GetEncryptionRes} returns this
 */
proto.api.v1alpha1.delivery.GetEncryptionRes.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.GetEncryptionRes.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.api.v1alpha1.delivery.ListEncryptionsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.ListEncryptionsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.ListEncryptionsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListEncryptionsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.ListReq.toObject(includeInstance, f),
    mask: (f = msg.getMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.ListEncryptionsReq}
 */
proto.api.v1alpha1.delivery.ListEncryptionsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.ListEncryptionsReq;
  return proto.api.v1alpha1.delivery.ListEncryptionsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.ListEncryptionsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.ListEncryptionsReq}
 */
proto.api.v1alpha1.delivery.ListEncryptionsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.ListReq;
      reader.readMessage(value,proto.api.v1alpha1.delivery.ListReq.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setMask(value);
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
proto.api.v1alpha1.delivery.ListEncryptionsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.ListEncryptionsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.ListEncryptionsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListEncryptionsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.ListReq.serializeBinaryToWriter
    );
  }
  f = message.getMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional ListReq entity = 1;
 * @return {?proto.api.v1alpha1.delivery.ListReq}
 */
proto.api.v1alpha1.delivery.ListEncryptionsReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.ListReq} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.ListReq, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.ListReq|undefined} value
 * @return {!proto.api.v1alpha1.delivery.ListEncryptionsReq} returns this
*/
proto.api.v1alpha1.delivery.ListEncryptionsReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.ListEncryptionsReq} returns this
 */
proto.api.v1alpha1.delivery.ListEncryptionsReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.ListEncryptionsReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.delivery.ListEncryptionsReq.prototype.getMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.delivery.ListEncryptionsReq} returns this
*/
proto.api.v1alpha1.delivery.ListEncryptionsReq.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.ListEncryptionsReq} returns this
 */
proto.api.v1alpha1.delivery.ListEncryptionsReq.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.ListEncryptionsReq.prototype.hasMask = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.delivery.ListEncryptionsRes.repeatedFields_ = [1];



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
proto.api.v1alpha1.delivery.ListEncryptionsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.ListEncryptionsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.ListEncryptionsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListEncryptionsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entitiesList: jspb.Message.toObjectList(msg.getEntitiesList(),
    proto.api.v1alpha1.delivery.Encryption.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.delivery.ListEncryptionsRes}
 */
proto.api.v1alpha1.delivery.ListEncryptionsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.ListEncryptionsRes;
  return proto.api.v1alpha1.delivery.ListEncryptionsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.ListEncryptionsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.ListEncryptionsRes}
 */
proto.api.v1alpha1.delivery.ListEncryptionsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.Encryption;
      reader.readMessage(value,proto.api.v1alpha1.delivery.Encryption.deserializeBinaryFromReader);
      msg.addEntities(value);
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
proto.api.v1alpha1.delivery.ListEncryptionsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.ListEncryptionsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.ListEncryptionsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListEncryptionsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.Encryption.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Encryption entities = 1;
 * @return {!Array<!proto.api.v1alpha1.delivery.Encryption>}
 */
proto.api.v1alpha1.delivery.ListEncryptionsRes.prototype.getEntitiesList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.delivery.Encryption>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.delivery.Encryption, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.delivery.Encryption>} value
 * @return {!proto.api.v1alpha1.delivery.ListEncryptionsRes} returns this
*/
proto.api.v1alpha1.delivery.ListEncryptionsRes.prototype.setEntitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.delivery.Encryption=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.delivery.Encryption}
 */
proto.api.v1alpha1.delivery.ListEncryptionsRes.prototype.addEntities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.delivery.Encryption, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.delivery.ListEncryptionsRes} returns this
 */
proto.api.v1alpha1.delivery.ListEncryptionsRes.prototype.clearEntitiesList = function() {
  return this.setEntitiesList([]);
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
proto.api.v1alpha1.delivery.UpdateEncryptionReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.UpdateEncryptionReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.UpdateEncryptionReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.UpdateEncryptionReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.Encryption.toObject(includeInstance, f),
    mask: (f = msg.getMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.UpdateEncryptionReq}
 */
proto.api.v1alpha1.delivery.UpdateEncryptionReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.UpdateEncryptionReq;
  return proto.api.v1alpha1.delivery.UpdateEncryptionReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.UpdateEncryptionReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.UpdateEncryptionReq}
 */
proto.api.v1alpha1.delivery.UpdateEncryptionReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.Encryption;
      reader.readMessage(value,proto.api.v1alpha1.delivery.Encryption.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setMask(value);
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
proto.api.v1alpha1.delivery.UpdateEncryptionReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.UpdateEncryptionReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.UpdateEncryptionReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.UpdateEncryptionReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.Encryption.serializeBinaryToWriter
    );
  }
  f = message.getMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional Encryption entity = 1;
 * @return {?proto.api.v1alpha1.delivery.Encryption}
 */
proto.api.v1alpha1.delivery.UpdateEncryptionReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.Encryption} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.Encryption, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.Encryption|undefined} value
 * @return {!proto.api.v1alpha1.delivery.UpdateEncryptionReq} returns this
*/
proto.api.v1alpha1.delivery.UpdateEncryptionReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.UpdateEncryptionReq} returns this
 */
proto.api.v1alpha1.delivery.UpdateEncryptionReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.UpdateEncryptionReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.delivery.UpdateEncryptionReq.prototype.getMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.delivery.UpdateEncryptionReq} returns this
*/
proto.api.v1alpha1.delivery.UpdateEncryptionReq.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.UpdateEncryptionReq} returns this
 */
proto.api.v1alpha1.delivery.UpdateEncryptionReq.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.UpdateEncryptionReq.prototype.hasMask = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.api.v1alpha1.delivery.UpdateEncryptionRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.UpdateEncryptionRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.UpdateEncryptionRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.UpdateEncryptionRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.ID.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.UpdateEncryptionRes}
 */
proto.api.v1alpha1.delivery.UpdateEncryptionRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.UpdateEncryptionRes;
  return proto.api.v1alpha1.delivery.UpdateEncryptionRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.UpdateEncryptionRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.UpdateEncryptionRes}
 */
proto.api.v1alpha1.delivery.UpdateEncryptionRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.ID;
      reader.readMessage(value,proto.api.v1alpha1.delivery.ID.deserializeBinaryFromReader);
      msg.setEntity(value);
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
proto.api.v1alpha1.delivery.UpdateEncryptionRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.UpdateEncryptionRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.UpdateEncryptionRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.UpdateEncryptionRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.ID.serializeBinaryToWriter
    );
  }
};


/**
 * optional ID entity = 1;
 * @return {?proto.api.v1alpha1.delivery.ID}
 */
proto.api.v1alpha1.delivery.UpdateEncryptionRes.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.ID} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.ID, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.ID|undefined} value
 * @return {!proto.api.v1alpha1.delivery.UpdateEncryptionRes} returns this
*/
proto.api.v1alpha1.delivery.UpdateEncryptionRes.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.UpdateEncryptionRes} returns this
 */
proto.api.v1alpha1.delivery.UpdateEncryptionRes.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.UpdateEncryptionRes.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.api.v1alpha1.delivery.TransferConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.TransferConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.TransferConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.TransferConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    sid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    ttl: jspb.Message.getFieldWithDefault(msg, 7, 0),
    credential: (f = msg.getCredential()) && proto.api.v1alpha1.delivery.Credential.toObject(includeInstance, f),
    destination: (f = msg.getDestination()) && proto.api.v1alpha1.delivery.Destination.toObject(includeInstance, f),
    source: (f = msg.getSource()) && proto.api.v1alpha1.delivery.Source.toObject(includeInstance, f),
    createdOn: (f = msg.getCreatedOn()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    lastEdited: (f = msg.getLastEdited()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.TransferConfig}
 */
proto.api.v1alpha1.delivery.TransferConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.TransferConfig;
  return proto.api.v1alpha1.delivery.TransferConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.TransferConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.TransferConfig}
 */
proto.api.v1alpha1.delivery.TransferConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setSid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTtl(value);
      break;
    case 8:
      var value = new proto.api.v1alpha1.delivery.Credential;
      reader.readMessage(value,proto.api.v1alpha1.delivery.Credential.deserializeBinaryFromReader);
      msg.setCredential(value);
      break;
    case 9:
      var value = new proto.api.v1alpha1.delivery.Destination;
      reader.readMessage(value,proto.api.v1alpha1.delivery.Destination.deserializeBinaryFromReader);
      msg.setDestination(value);
      break;
    case 10:
      var value = new proto.api.v1alpha1.delivery.Source;
      reader.readMessage(value,proto.api.v1alpha1.delivery.Source.deserializeBinaryFromReader);
      msg.setSource(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedOn(value);
      break;
    case 12:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastEdited(value);
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
proto.api.v1alpha1.delivery.TransferConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.TransferConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.TransferConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.TransferConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTtl();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getCredential();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.api.v1alpha1.delivery.Credential.serializeBinaryToWriter
    );
  }
  f = message.getDestination();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.api.v1alpha1.delivery.Destination.serializeBinaryToWriter
    );
  }
  f = message.getSource();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.api.v1alpha1.delivery.Source.serializeBinaryToWriter
    );
  }
  f = message.getCreatedOn();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLastEdited();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 sid = 1;
 * @return {string}
 */
proto.api.v1alpha1.delivery.TransferConfig.prototype.getSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.TransferConfig} returns this
 */
proto.api.v1alpha1.delivery.TransferConfig.prototype.setSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.api.v1alpha1.delivery.TransferConfig.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.TransferConfig} returns this
 */
proto.api.v1alpha1.delivery.TransferConfig.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.api.v1alpha1.delivery.TransferConfig.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.TransferConfig} returns this
 */
proto.api.v1alpha1.delivery.TransferConfig.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 ttl = 7;
 * @return {number}
 */
proto.api.v1alpha1.delivery.TransferConfig.prototype.getTtl = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.delivery.TransferConfig} returns this
 */
proto.api.v1alpha1.delivery.TransferConfig.prototype.setTtl = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional Credential credential = 8;
 * @return {?proto.api.v1alpha1.delivery.Credential}
 */
proto.api.v1alpha1.delivery.TransferConfig.prototype.getCredential = function() {
  return /** @type{?proto.api.v1alpha1.delivery.Credential} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.Credential, 8));
};


/**
 * @param {?proto.api.v1alpha1.delivery.Credential|undefined} value
 * @return {!proto.api.v1alpha1.delivery.TransferConfig} returns this
*/
proto.api.v1alpha1.delivery.TransferConfig.prototype.setCredential = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.TransferConfig} returns this
 */
proto.api.v1alpha1.delivery.TransferConfig.prototype.clearCredential = function() {
  return this.setCredential(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.TransferConfig.prototype.hasCredential = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Destination destination = 9;
 * @return {?proto.api.v1alpha1.delivery.Destination}
 */
proto.api.v1alpha1.delivery.TransferConfig.prototype.getDestination = function() {
  return /** @type{?proto.api.v1alpha1.delivery.Destination} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.Destination, 9));
};


/**
 * @param {?proto.api.v1alpha1.delivery.Destination|undefined} value
 * @return {!proto.api.v1alpha1.delivery.TransferConfig} returns this
*/
proto.api.v1alpha1.delivery.TransferConfig.prototype.setDestination = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.TransferConfig} returns this
 */
proto.api.v1alpha1.delivery.TransferConfig.prototype.clearDestination = function() {
  return this.setDestination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.TransferConfig.prototype.hasDestination = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Source source = 10;
 * @return {?proto.api.v1alpha1.delivery.Source}
 */
proto.api.v1alpha1.delivery.TransferConfig.prototype.getSource = function() {
  return /** @type{?proto.api.v1alpha1.delivery.Source} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.Source, 10));
};


/**
 * @param {?proto.api.v1alpha1.delivery.Source|undefined} value
 * @return {!proto.api.v1alpha1.delivery.TransferConfig} returns this
*/
proto.api.v1alpha1.delivery.TransferConfig.prototype.setSource = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.TransferConfig} returns this
 */
proto.api.v1alpha1.delivery.TransferConfig.prototype.clearSource = function() {
  return this.setSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.TransferConfig.prototype.hasSource = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.Timestamp created_on = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.delivery.TransferConfig.prototype.getCreatedOn = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.delivery.TransferConfig} returns this
*/
proto.api.v1alpha1.delivery.TransferConfig.prototype.setCreatedOn = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.TransferConfig} returns this
 */
proto.api.v1alpha1.delivery.TransferConfig.prototype.clearCreatedOn = function() {
  return this.setCreatedOn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.TransferConfig.prototype.hasCreatedOn = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.Timestamp last_edited = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.delivery.TransferConfig.prototype.getLastEdited = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 12));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.delivery.TransferConfig} returns this
*/
proto.api.v1alpha1.delivery.TransferConfig.prototype.setLastEdited = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.TransferConfig} returns this
 */
proto.api.v1alpha1.delivery.TransferConfig.prototype.clearLastEdited = function() {
  return this.setLastEdited(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.TransferConfig.prototype.hasLastEdited = function() {
  return jspb.Message.getField(this, 12) != null;
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
proto.api.v1alpha1.delivery.ID.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.ID.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.ID} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ID.toObject = function(includeInstance, msg) {
  var f, obj = {
    sid: jspb.Message.getFieldWithDefault(msg, 1, "0")
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
 * @return {!proto.api.v1alpha1.delivery.ID}
 */
proto.api.v1alpha1.delivery.ID.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.ID;
  return proto.api.v1alpha1.delivery.ID.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.ID} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.ID}
 */
proto.api.v1alpha1.delivery.ID.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setSid(value);
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
proto.api.v1alpha1.delivery.ID.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.ID.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.ID} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ID.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 sid = 1;
 * @return {string}
 */
proto.api.v1alpha1.delivery.ID.prototype.getSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.ID} returns this
 */
proto.api.v1alpha1.delivery.ID.prototype.setSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
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
proto.api.v1alpha1.delivery.ListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.ListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.ListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    beforeSid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.api.v1alpha1.delivery.ListReq}
 */
proto.api.v1alpha1.delivery.ListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.ListReq;
  return proto.api.v1alpha1.delivery.ListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.ListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.ListReq}
 */
proto.api.v1alpha1.delivery.ListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBeforeSid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
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
proto.api.v1alpha1.delivery.ListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.ListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.ListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBeforeSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional int64 before_sid = 2;
 * @return {number}
 */
proto.api.v1alpha1.delivery.ListReq.prototype.getBeforeSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.delivery.ListReq} returns this
 */
proto.api.v1alpha1.delivery.ListReq.prototype.setBeforeSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 limit = 3;
 * @return {number}
 */
proto.api.v1alpha1.delivery.ListReq.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.delivery.ListReq} returns this
 */
proto.api.v1alpha1.delivery.ListReq.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
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
proto.api.v1alpha1.delivery.History.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.History.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.History} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.History.toObject = function(includeInstance, msg) {
  var f, obj = {
    sid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    transferConfigName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    transferConfigSid: jspb.Message.getFieldWithDefault(msg, 4, "0"),
    deliveryType: jspb.Message.getFieldWithDefault(msg, 5, ""),
    error: jspb.Message.getFieldWithDefault(msg, 6, ""),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    createdOn: (f = msg.getCreatedOn()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    transferStart: (f = msg.getTransferStart()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    transferComplete: (f = msg.getTransferComplete()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    origin: jspb.Message.getFieldWithDefault(msg, 11, 0),
    orgId: jspb.Message.getFieldWithDefault(msg, 12, ""),
    messagePayload: jspb.Message.getFieldWithDefault(msg, 13, ""),
    messagePayloadLen: jspb.Message.getFieldWithDefault(msg, 14, 0),
    status: jspb.Message.getFieldWithDefault(msg, 15, 0),
    isInbound: jspb.Message.getBooleanFieldWithDefault(msg, 16, false),
    transactionSid: jspb.Message.getFieldWithDefault(msg, 17, "0")
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
 * @return {!proto.api.v1alpha1.delivery.History}
 */
proto.api.v1alpha1.delivery.History.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.History;
  return proto.api.v1alpha1.delivery.History.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.History} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.History}
 */
proto.api.v1alpha1.delivery.History.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setSid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransferConfigName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setTransferConfigSid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeliveryType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedOn(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTransferStart(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTransferComplete(value);
      break;
    case 11:
      var value = /** @type {!proto.api.commons.OperatorApplications} */ (reader.readEnum());
      msg.setOrigin(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessagePayload(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMessagePayloadLen(value);
      break;
    case 15:
      var value = /** @type {!proto.api.commons.TransferStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsInbound(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setTransactionSid(value);
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
proto.api.v1alpha1.delivery.History.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.History.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.History} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.History.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getTransferConfigName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTransferConfigSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      4,
      f
    );
  }
  f = message.getDeliveryType();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getCreatedOn();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTransferStart();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTransferComplete();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getOrigin();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getMessagePayload();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getMessagePayloadLen();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      15,
      f
    );
  }
  f = message.getIsInbound();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
  f = message.getTransactionSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      17,
      f
    );
  }
};


/**
 * optional int64 sid = 1;
 * @return {string}
 */
proto.api.v1alpha1.delivery.History.prototype.getSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.History} returns this
 */
proto.api.v1alpha1.delivery.History.prototype.setSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string transfer_config_name = 3;
 * @return {string}
 */
proto.api.v1alpha1.delivery.History.prototype.getTransferConfigName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.History} returns this
 */
proto.api.v1alpha1.delivery.History.prototype.setTransferConfigName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 transfer_config_sid = 4;
 * @return {string}
 */
proto.api.v1alpha1.delivery.History.prototype.getTransferConfigSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.History} returns this
 */
proto.api.v1alpha1.delivery.History.prototype.setTransferConfigSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 4, value);
};


/**
 * optional string delivery_type = 5;
 * @return {string}
 */
proto.api.v1alpha1.delivery.History.prototype.getDeliveryType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.History} returns this
 */
proto.api.v1alpha1.delivery.History.prototype.setDeliveryType = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string error = 6;
 * @return {string}
 */
proto.api.v1alpha1.delivery.History.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.History} returns this
 */
proto.api.v1alpha1.delivery.History.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool success = 7;
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.History.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.delivery.History} returns this
 */
proto.api.v1alpha1.delivery.History.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp created_on = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.delivery.History.prototype.getCreatedOn = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.delivery.History} returns this
*/
proto.api.v1alpha1.delivery.History.prototype.setCreatedOn = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.History} returns this
 */
proto.api.v1alpha1.delivery.History.prototype.clearCreatedOn = function() {
  return this.setCreatedOn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.History.prototype.hasCreatedOn = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp transfer_start = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.delivery.History.prototype.getTransferStart = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.delivery.History} returns this
*/
proto.api.v1alpha1.delivery.History.prototype.setTransferStart = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.History} returns this
 */
proto.api.v1alpha1.delivery.History.prototype.clearTransferStart = function() {
  return this.setTransferStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.History.prototype.hasTransferStart = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.Timestamp transfer_complete = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.delivery.History.prototype.getTransferComplete = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.delivery.History} returns this
*/
proto.api.v1alpha1.delivery.History.prototype.setTransferComplete = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.History} returns this
 */
proto.api.v1alpha1.delivery.History.prototype.clearTransferComplete = function() {
  return this.setTransferComplete(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.History.prototype.hasTransferComplete = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional api.commons.OperatorApplications origin = 11;
 * @return {!proto.api.commons.OperatorApplications}
 */
proto.api.v1alpha1.delivery.History.prototype.getOrigin = function() {
  return /** @type {!proto.api.commons.OperatorApplications} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.api.commons.OperatorApplications} value
 * @return {!proto.api.v1alpha1.delivery.History} returns this
 */
proto.api.v1alpha1.delivery.History.prototype.setOrigin = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional string org_id = 12;
 * @return {string}
 */
proto.api.v1alpha1.delivery.History.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.History} returns this
 */
proto.api.v1alpha1.delivery.History.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string message_payload = 13;
 * @return {string}
 */
proto.api.v1alpha1.delivery.History.prototype.getMessagePayload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.History} returns this
 */
proto.api.v1alpha1.delivery.History.prototype.setMessagePayload = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional int32 message_payload_len = 14;
 * @return {number}
 */
proto.api.v1alpha1.delivery.History.prototype.getMessagePayloadLen = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.delivery.History} returns this
 */
proto.api.v1alpha1.delivery.History.prototype.setMessagePayloadLen = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional api.commons.TransferStatus status = 15;
 * @return {!proto.api.commons.TransferStatus}
 */
proto.api.v1alpha1.delivery.History.prototype.getStatus = function() {
  return /** @type {!proto.api.commons.TransferStatus} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {!proto.api.commons.TransferStatus} value
 * @return {!proto.api.v1alpha1.delivery.History} returns this
 */
proto.api.v1alpha1.delivery.History.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 15, value);
};


/**
 * optional bool is_inbound = 16;
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.History.prototype.getIsInbound = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.delivery.History} returns this
 */
proto.api.v1alpha1.delivery.History.prototype.setIsInbound = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
};


/**
 * optional int64 transaction_sid = 17;
 * @return {string}
 */
proto.api.v1alpha1.delivery.History.prototype.getTransactionSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.History} returns this
 */
proto.api.v1alpha1.delivery.History.prototype.setTransactionSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 17, value);
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
proto.api.v1alpha1.delivery.ListByIDReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.ListByIDReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.ListByIDReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListByIDReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    beforeSid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0),
    otherSid: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.api.v1alpha1.delivery.ListByIDReq}
 */
proto.api.v1alpha1.delivery.ListByIDReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.ListByIDReq;
  return proto.api.v1alpha1.delivery.ListByIDReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.ListByIDReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.ListByIDReq}
 */
proto.api.v1alpha1.delivery.ListByIDReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBeforeSid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOtherSid(value);
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
proto.api.v1alpha1.delivery.ListByIDReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.ListByIDReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.ListByIDReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListByIDReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBeforeSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getOtherSid();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional int64 before_sid = 2;
 * @return {number}
 */
proto.api.v1alpha1.delivery.ListByIDReq.prototype.getBeforeSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.delivery.ListByIDReq} returns this
 */
proto.api.v1alpha1.delivery.ListByIDReq.prototype.setBeforeSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 limit = 3;
 * @return {number}
 */
proto.api.v1alpha1.delivery.ListByIDReq.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.delivery.ListByIDReq} returns this
 */
proto.api.v1alpha1.delivery.ListByIDReq.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 other_sid = 4;
 * @return {number}
 */
proto.api.v1alpha1.delivery.ListByIDReq.prototype.getOtherSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.delivery.ListByIDReq} returns this
 */
proto.api.v1alpha1.delivery.ListByIDReq.prototype.setOtherSid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
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
proto.api.v1alpha1.delivery.Credential.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.Credential.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.Credential} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.Credential.toObject = function(includeInstance, msg) {
  var f, obj = {
    sid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    data: (f = msg.getData()) && proto.api.v1alpha1.delivery.CredentialData.toObject(includeInstance, f),
    createdOn: (f = msg.getCreatedOn()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    lastEdited: (f = msg.getLastEdited()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.Credential}
 */
proto.api.v1alpha1.delivery.Credential.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.Credential;
  return proto.api.v1alpha1.delivery.Credential.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.Credential} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.Credential}
 */
proto.api.v1alpha1.delivery.Credential.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setSid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = new proto.api.v1alpha1.delivery.CredentialData;
      reader.readMessage(value,proto.api.v1alpha1.delivery.CredentialData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedOn(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastEdited(value);
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
proto.api.v1alpha1.delivery.Credential.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.Credential.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.Credential} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.Credential.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.api.v1alpha1.delivery.CredentialData.serializeBinaryToWriter
    );
  }
  f = message.getCreatedOn();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLastEdited();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 sid = 1;
 * @return {string}
 */
proto.api.v1alpha1.delivery.Credential.prototype.getSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.Credential} returns this
 */
proto.api.v1alpha1.delivery.Credential.prototype.setSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.api.v1alpha1.delivery.Credential.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.Credential} returns this
 */
proto.api.v1alpha1.delivery.Credential.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.api.v1alpha1.delivery.Credential.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.Credential} returns this
 */
proto.api.v1alpha1.delivery.Credential.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional CredentialData data = 5;
 * @return {?proto.api.v1alpha1.delivery.CredentialData}
 */
proto.api.v1alpha1.delivery.Credential.prototype.getData = function() {
  return /** @type{?proto.api.v1alpha1.delivery.CredentialData} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.CredentialData, 5));
};


/**
 * @param {?proto.api.v1alpha1.delivery.CredentialData|undefined} value
 * @return {!proto.api.v1alpha1.delivery.Credential} returns this
*/
proto.api.v1alpha1.delivery.Credential.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.Credential} returns this
 */
proto.api.v1alpha1.delivery.Credential.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.Credential.prototype.hasData = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp created_on = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.delivery.Credential.prototype.getCreatedOn = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.delivery.Credential} returns this
*/
proto.api.v1alpha1.delivery.Credential.prototype.setCreatedOn = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.Credential} returns this
 */
proto.api.v1alpha1.delivery.Credential.prototype.clearCreatedOn = function() {
  return this.setCreatedOn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.Credential.prototype.hasCreatedOn = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.Timestamp last_edited = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.delivery.Credential.prototype.getLastEdited = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.delivery.Credential} returns this
*/
proto.api.v1alpha1.delivery.Credential.prototype.setLastEdited = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.Credential} returns this
 */
proto.api.v1alpha1.delivery.Credential.prototype.clearLastEdited = function() {
  return this.setLastEdited(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.Credential.prototype.hasLastEdited = function() {
  return jspb.Message.getField(this, 11) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.v1alpha1.delivery.Destination.oneofGroups_ = [[2,3,4,5]];

/**
 * @enum {number}
 */
proto.api.v1alpha1.delivery.Destination.ValueCase = {
  VALUE_NOT_SET: 0,
  EMAIL: 2,
  ROOM303: 3,
  SMS: 4,
  SFTP: 5
};

/**
 * @return {proto.api.v1alpha1.delivery.Destination.ValueCase}
 */
proto.api.v1alpha1.delivery.Destination.prototype.getValueCase = function() {
  return /** @type {proto.api.v1alpha1.delivery.Destination.ValueCase} */(jspb.Message.computeOneofCase(this, proto.api.v1alpha1.delivery.Destination.oneofGroups_[0]));
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
proto.api.v1alpha1.delivery.Destination.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.Destination.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.Destination} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.Destination.toObject = function(includeInstance, msg) {
  var f, obj = {
    encryption: (f = msg.getEncryption()) && api_commons_delivery_pb.Encryption.toObject(includeInstance, f),
    email: (f = msg.getEmail()) && proto.api.v1alpha1.delivery.EmailDestination.toObject(includeInstance, f),
    room303: (f = msg.getRoom303()) && proto.api.v1alpha1.delivery.Room303Destination.toObject(includeInstance, f),
    sms: (f = msg.getSms()) && proto.api.v1alpha1.delivery.SmsDestination.toObject(includeInstance, f),
    sftp: (f = msg.getSftp()) && proto.api.v1alpha1.delivery.SftpDestination.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.Destination}
 */
proto.api.v1alpha1.delivery.Destination.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.Destination;
  return proto.api.v1alpha1.delivery.Destination.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.Destination} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.Destination}
 */
proto.api.v1alpha1.delivery.Destination.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_delivery_pb.Encryption;
      reader.readMessage(value,api_commons_delivery_pb.Encryption.deserializeBinaryFromReader);
      msg.setEncryption(value);
      break;
    case 2:
      var value = new proto.api.v1alpha1.delivery.EmailDestination;
      reader.readMessage(value,proto.api.v1alpha1.delivery.EmailDestination.deserializeBinaryFromReader);
      msg.setEmail(value);
      break;
    case 3:
      var value = new proto.api.v1alpha1.delivery.Room303Destination;
      reader.readMessage(value,proto.api.v1alpha1.delivery.Room303Destination.deserializeBinaryFromReader);
      msg.setRoom303(value);
      break;
    case 4:
      var value = new proto.api.v1alpha1.delivery.SmsDestination;
      reader.readMessage(value,proto.api.v1alpha1.delivery.SmsDestination.deserializeBinaryFromReader);
      msg.setSms(value);
      break;
    case 5:
      var value = new proto.api.v1alpha1.delivery.SftpDestination;
      reader.readMessage(value,proto.api.v1alpha1.delivery.SftpDestination.deserializeBinaryFromReader);
      msg.setSftp(value);
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
proto.api.v1alpha1.delivery.Destination.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.Destination.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.Destination} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.Destination.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEncryption();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_delivery_pb.Encryption.serializeBinaryToWriter
    );
  }
  f = message.getEmail();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.v1alpha1.delivery.EmailDestination.serializeBinaryToWriter
    );
  }
  f = message.getRoom303();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.v1alpha1.delivery.Room303Destination.serializeBinaryToWriter
    );
  }
  f = message.getSms();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api.v1alpha1.delivery.SmsDestination.serializeBinaryToWriter
    );
  }
  f = message.getSftp();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.api.v1alpha1.delivery.SftpDestination.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.Encryption encryption = 1;
 * @return {?proto.api.commons.Encryption}
 */
proto.api.v1alpha1.delivery.Destination.prototype.getEncryption = function() {
  return /** @type{?proto.api.commons.Encryption} */ (
    jspb.Message.getWrapperField(this, api_commons_delivery_pb.Encryption, 1));
};


/**
 * @param {?proto.api.commons.Encryption|undefined} value
 * @return {!proto.api.v1alpha1.delivery.Destination} returns this
*/
proto.api.v1alpha1.delivery.Destination.prototype.setEncryption = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.Destination} returns this
 */
proto.api.v1alpha1.delivery.Destination.prototype.clearEncryption = function() {
  return this.setEncryption(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.Destination.prototype.hasEncryption = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional EmailDestination email = 2;
 * @return {?proto.api.v1alpha1.delivery.EmailDestination}
 */
proto.api.v1alpha1.delivery.Destination.prototype.getEmail = function() {
  return /** @type{?proto.api.v1alpha1.delivery.EmailDestination} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.EmailDestination, 2));
};


/**
 * @param {?proto.api.v1alpha1.delivery.EmailDestination|undefined} value
 * @return {!proto.api.v1alpha1.delivery.Destination} returns this
*/
proto.api.v1alpha1.delivery.Destination.prototype.setEmail = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.api.v1alpha1.delivery.Destination.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.Destination} returns this
 */
proto.api.v1alpha1.delivery.Destination.prototype.clearEmail = function() {
  return this.setEmail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.Destination.prototype.hasEmail = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Room303Destination room303 = 3;
 * @return {?proto.api.v1alpha1.delivery.Room303Destination}
 */
proto.api.v1alpha1.delivery.Destination.prototype.getRoom303 = function() {
  return /** @type{?proto.api.v1alpha1.delivery.Room303Destination} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.Room303Destination, 3));
};


/**
 * @param {?proto.api.v1alpha1.delivery.Room303Destination|undefined} value
 * @return {!proto.api.v1alpha1.delivery.Destination} returns this
*/
proto.api.v1alpha1.delivery.Destination.prototype.setRoom303 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.api.v1alpha1.delivery.Destination.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.Destination} returns this
 */
proto.api.v1alpha1.delivery.Destination.prototype.clearRoom303 = function() {
  return this.setRoom303(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.Destination.prototype.hasRoom303 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional SmsDestination sms = 4;
 * @return {?proto.api.v1alpha1.delivery.SmsDestination}
 */
proto.api.v1alpha1.delivery.Destination.prototype.getSms = function() {
  return /** @type{?proto.api.v1alpha1.delivery.SmsDestination} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.SmsDestination, 4));
};


/**
 * @param {?proto.api.v1alpha1.delivery.SmsDestination|undefined} value
 * @return {!proto.api.v1alpha1.delivery.Destination} returns this
*/
proto.api.v1alpha1.delivery.Destination.prototype.setSms = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.api.v1alpha1.delivery.Destination.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.Destination} returns this
 */
proto.api.v1alpha1.delivery.Destination.prototype.clearSms = function() {
  return this.setSms(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.Destination.prototype.hasSms = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SftpDestination sftp = 5;
 * @return {?proto.api.v1alpha1.delivery.SftpDestination}
 */
proto.api.v1alpha1.delivery.Destination.prototype.getSftp = function() {
  return /** @type{?proto.api.v1alpha1.delivery.SftpDestination} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.SftpDestination, 5));
};


/**
 * @param {?proto.api.v1alpha1.delivery.SftpDestination|undefined} value
 * @return {!proto.api.v1alpha1.delivery.Destination} returns this
*/
proto.api.v1alpha1.delivery.Destination.prototype.setSftp = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.api.v1alpha1.delivery.Destination.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.Destination} returns this
 */
proto.api.v1alpha1.delivery.Destination.prototype.clearSftp = function() {
  return this.setSftp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.Destination.prototype.hasSftp = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.api.v1alpha1.delivery.SftpDestination.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.SftpDestination.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.SftpDestination} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.SftpDestination.toObject = function(includeInstance, msg) {
  var f, obj = {
    baseDirectory: jspb.Message.getFieldWithDefault(msg, 2, ""),
    address: jspb.Message.getFieldWithDefault(msg, 3, ""),
    port: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.api.v1alpha1.delivery.SftpDestination}
 */
proto.api.v1alpha1.delivery.SftpDestination.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.SftpDestination;
  return proto.api.v1alpha1.delivery.SftpDestination.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.SftpDestination} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.SftpDestination}
 */
proto.api.v1alpha1.delivery.SftpDestination.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBaseDirectory(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
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
proto.api.v1alpha1.delivery.SftpDestination.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.SftpDestination.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.SftpDestination} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.SftpDestination.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBaseDirectory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional string base_directory = 2;
 * @return {string}
 */
proto.api.v1alpha1.delivery.SftpDestination.prototype.getBaseDirectory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.SftpDestination} returns this
 */
proto.api.v1alpha1.delivery.SftpDestination.prototype.setBaseDirectory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string address = 3;
 * @return {string}
 */
proto.api.v1alpha1.delivery.SftpDestination.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.SftpDestination} returns this
 */
proto.api.v1alpha1.delivery.SftpDestination.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 port = 4;
 * @return {number}
 */
proto.api.v1alpha1.delivery.SftpDestination.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.delivery.SftpDestination} returns this
 */
proto.api.v1alpha1.delivery.SftpDestination.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
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
proto.api.v1alpha1.delivery.Room303Destination.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.Room303Destination.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.Room303Destination} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.Room303Destination.toObject = function(includeInstance, msg) {
  var f, obj = {
    room: jspb.Message.getFieldWithDefault(msg, 1, ""),
    username: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.api.v1alpha1.delivery.Room303Destination}
 */
proto.api.v1alpha1.delivery.Room303Destination.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.Room303Destination;
  return proto.api.v1alpha1.delivery.Room303Destination.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.Room303Destination} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.Room303Destination}
 */
proto.api.v1alpha1.delivery.Room303Destination.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoom(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
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
proto.api.v1alpha1.delivery.Room303Destination.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.Room303Destination.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.Room303Destination} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.Room303Destination.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoom();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string room = 1;
 * @return {string}
 */
proto.api.v1alpha1.delivery.Room303Destination.prototype.getRoom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.Room303Destination} returns this
 */
proto.api.v1alpha1.delivery.Room303Destination.prototype.setRoom = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string username = 2;
 * @return {string}
 */
proto.api.v1alpha1.delivery.Room303Destination.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.Room303Destination} returns this
 */
proto.api.v1alpha1.delivery.Room303Destination.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string user_id = 3;
 * @return {string}
 */
proto.api.v1alpha1.delivery.Room303Destination.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.Room303Destination} returns this
 */
proto.api.v1alpha1.delivery.Room303Destination.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.api.v1alpha1.delivery.SmsDestination.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.SmsDestination.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.SmsDestination} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.SmsDestination.toObject = function(includeInstance, msg) {
  var f, obj = {
    destinationPhone: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sourcePhone: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.api.v1alpha1.delivery.SmsDestination}
 */
proto.api.v1alpha1.delivery.SmsDestination.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.SmsDestination;
  return proto.api.v1alpha1.delivery.SmsDestination.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.SmsDestination} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.SmsDestination}
 */
proto.api.v1alpha1.delivery.SmsDestination.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationPhone(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourcePhone(value);
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
proto.api.v1alpha1.delivery.SmsDestination.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.SmsDestination.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.SmsDestination} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.SmsDestination.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDestinationPhone();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSourcePhone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string destination_phone = 1;
 * @return {string}
 */
proto.api.v1alpha1.delivery.SmsDestination.prototype.getDestinationPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.SmsDestination} returns this
 */
proto.api.v1alpha1.delivery.SmsDestination.prototype.setDestinationPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string source_phone = 2;
 * @return {string}
 */
proto.api.v1alpha1.delivery.SmsDestination.prototype.getSourcePhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.SmsDestination} returns this
 */
proto.api.v1alpha1.delivery.SmsDestination.prototype.setSourcePhone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.delivery.EmailDestination.repeatedFields_ = [2,4];



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
proto.api.v1alpha1.delivery.EmailDestination.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.EmailDestination.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.EmailDestination} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.EmailDestination.toObject = function(includeInstance, msg) {
  var f, obj = {
    toAddr: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ccAddrsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    fromAddr: jspb.Message.getFieldWithDefault(msg, 3, ""),
    toAddrsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.api.v1alpha1.delivery.EmailDestination}
 */
proto.api.v1alpha1.delivery.EmailDestination.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.EmailDestination;
  return proto.api.v1alpha1.delivery.EmailDestination.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.EmailDestination} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.EmailDestination}
 */
proto.api.v1alpha1.delivery.EmailDestination.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToAddr(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addCcAddrs(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFromAddr(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addToAddrs(value);
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
proto.api.v1alpha1.delivery.EmailDestination.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.EmailDestination.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.EmailDestination} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.EmailDestination.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToAddr();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCcAddrsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getFromAddr();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getToAddrsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string to_addr = 1;
 * @return {string}
 */
proto.api.v1alpha1.delivery.EmailDestination.prototype.getToAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.EmailDestination} returns this
 */
proto.api.v1alpha1.delivery.EmailDestination.prototype.setToAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string cc_addrs = 2;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.delivery.EmailDestination.prototype.getCcAddrsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.delivery.EmailDestination} returns this
 */
proto.api.v1alpha1.delivery.EmailDestination.prototype.setCcAddrsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.delivery.EmailDestination} returns this
 */
proto.api.v1alpha1.delivery.EmailDestination.prototype.addCcAddrs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.delivery.EmailDestination} returns this
 */
proto.api.v1alpha1.delivery.EmailDestination.prototype.clearCcAddrsList = function() {
  return this.setCcAddrsList([]);
};


/**
 * optional string from_addr = 3;
 * @return {string}
 */
proto.api.v1alpha1.delivery.EmailDestination.prototype.getFromAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.EmailDestination} returns this
 */
proto.api.v1alpha1.delivery.EmailDestination.prototype.setFromAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string to_addrs = 4;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.delivery.EmailDestination.prototype.getToAddrsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.delivery.EmailDestination} returns this
 */
proto.api.v1alpha1.delivery.EmailDestination.prototype.setToAddrsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.delivery.EmailDestination} returns this
 */
proto.api.v1alpha1.delivery.EmailDestination.prototype.addToAddrs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.delivery.EmailDestination} returns this
 */
proto.api.v1alpha1.delivery.EmailDestination.prototype.clearToAddrsList = function() {
  return this.setToAddrsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.v1alpha1.delivery.CredentialData.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.api.v1alpha1.delivery.CredentialData.DataCase = {
  DATA_NOT_SET: 0,
  USER_PASSWORD: 1,
  PASSWORD: 2,
  SSH_KEY_PAIR: 3,
  PGP_KEY_PAIR: 4,
  AES_PASSWORD: 5
};

/**
 * @return {proto.api.v1alpha1.delivery.CredentialData.DataCase}
 */
proto.api.v1alpha1.delivery.CredentialData.prototype.getDataCase = function() {
  return /** @type {proto.api.v1alpha1.delivery.CredentialData.DataCase} */(jspb.Message.computeOneofCase(this, proto.api.v1alpha1.delivery.CredentialData.oneofGroups_[0]));
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
proto.api.v1alpha1.delivery.CredentialData.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.CredentialData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.CredentialData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.CredentialData.toObject = function(includeInstance, msg) {
  var f, obj = {
    userPassword: (f = msg.getUserPassword()) && proto.api.v1alpha1.delivery.UserPassword.toObject(includeInstance, f),
    password: (f = msg.getPassword()) && proto.api.v1alpha1.delivery.Password.toObject(includeInstance, f),
    sshKeyPair: (f = msg.getSshKeyPair()) && proto.api.v1alpha1.delivery.SSHKeyPair.toObject(includeInstance, f),
    pgpKeyPair: (f = msg.getPgpKeyPair()) && proto.api.v1alpha1.delivery.PGPKeyPair.toObject(includeInstance, f),
    aesPassword: (f = msg.getAesPassword()) && proto.api.v1alpha1.delivery.AESPassword.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.CredentialData}
 */
proto.api.v1alpha1.delivery.CredentialData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.CredentialData;
  return proto.api.v1alpha1.delivery.CredentialData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.CredentialData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.CredentialData}
 */
proto.api.v1alpha1.delivery.CredentialData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.UserPassword;
      reader.readMessage(value,proto.api.v1alpha1.delivery.UserPassword.deserializeBinaryFromReader);
      msg.setUserPassword(value);
      break;
    case 2:
      var value = new proto.api.v1alpha1.delivery.Password;
      reader.readMessage(value,proto.api.v1alpha1.delivery.Password.deserializeBinaryFromReader);
      msg.setPassword(value);
      break;
    case 3:
      var value = new proto.api.v1alpha1.delivery.SSHKeyPair;
      reader.readMessage(value,proto.api.v1alpha1.delivery.SSHKeyPair.deserializeBinaryFromReader);
      msg.setSshKeyPair(value);
      break;
    case 4:
      var value = new proto.api.v1alpha1.delivery.PGPKeyPair;
      reader.readMessage(value,proto.api.v1alpha1.delivery.PGPKeyPair.deserializeBinaryFromReader);
      msg.setPgpKeyPair(value);
      break;
    case 5:
      var value = new proto.api.v1alpha1.delivery.AESPassword;
      reader.readMessage(value,proto.api.v1alpha1.delivery.AESPassword.deserializeBinaryFromReader);
      msg.setAesPassword(value);
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
proto.api.v1alpha1.delivery.CredentialData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.CredentialData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.CredentialData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.CredentialData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserPassword();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.UserPassword.serializeBinaryToWriter
    );
  }
  f = message.getPassword();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.v1alpha1.delivery.Password.serializeBinaryToWriter
    );
  }
  f = message.getSshKeyPair();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.v1alpha1.delivery.SSHKeyPair.serializeBinaryToWriter
    );
  }
  f = message.getPgpKeyPair();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api.v1alpha1.delivery.PGPKeyPair.serializeBinaryToWriter
    );
  }
  f = message.getAesPassword();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.api.v1alpha1.delivery.AESPassword.serializeBinaryToWriter
    );
  }
};


/**
 * optional UserPassword user_password = 1;
 * @return {?proto.api.v1alpha1.delivery.UserPassword}
 */
proto.api.v1alpha1.delivery.CredentialData.prototype.getUserPassword = function() {
  return /** @type{?proto.api.v1alpha1.delivery.UserPassword} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.UserPassword, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.UserPassword|undefined} value
 * @return {!proto.api.v1alpha1.delivery.CredentialData} returns this
*/
proto.api.v1alpha1.delivery.CredentialData.prototype.setUserPassword = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.api.v1alpha1.delivery.CredentialData.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.CredentialData} returns this
 */
proto.api.v1alpha1.delivery.CredentialData.prototype.clearUserPassword = function() {
  return this.setUserPassword(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.CredentialData.prototype.hasUserPassword = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Password password = 2;
 * @return {?proto.api.v1alpha1.delivery.Password}
 */
proto.api.v1alpha1.delivery.CredentialData.prototype.getPassword = function() {
  return /** @type{?proto.api.v1alpha1.delivery.Password} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.Password, 2));
};


/**
 * @param {?proto.api.v1alpha1.delivery.Password|undefined} value
 * @return {!proto.api.v1alpha1.delivery.CredentialData} returns this
*/
proto.api.v1alpha1.delivery.CredentialData.prototype.setPassword = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.api.v1alpha1.delivery.CredentialData.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.CredentialData} returns this
 */
proto.api.v1alpha1.delivery.CredentialData.prototype.clearPassword = function() {
  return this.setPassword(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.CredentialData.prototype.hasPassword = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SSHKeyPair ssh_key_pair = 3;
 * @return {?proto.api.v1alpha1.delivery.SSHKeyPair}
 */
proto.api.v1alpha1.delivery.CredentialData.prototype.getSshKeyPair = function() {
  return /** @type{?proto.api.v1alpha1.delivery.SSHKeyPair} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.SSHKeyPair, 3));
};


/**
 * @param {?proto.api.v1alpha1.delivery.SSHKeyPair|undefined} value
 * @return {!proto.api.v1alpha1.delivery.CredentialData} returns this
*/
proto.api.v1alpha1.delivery.CredentialData.prototype.setSshKeyPair = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.api.v1alpha1.delivery.CredentialData.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.CredentialData} returns this
 */
proto.api.v1alpha1.delivery.CredentialData.prototype.clearSshKeyPair = function() {
  return this.setSshKeyPair(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.CredentialData.prototype.hasSshKeyPair = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PGPKeyPair pgp_key_pair = 4;
 * @return {?proto.api.v1alpha1.delivery.PGPKeyPair}
 */
proto.api.v1alpha1.delivery.CredentialData.prototype.getPgpKeyPair = function() {
  return /** @type{?proto.api.v1alpha1.delivery.PGPKeyPair} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.PGPKeyPair, 4));
};


/**
 * @param {?proto.api.v1alpha1.delivery.PGPKeyPair|undefined} value
 * @return {!proto.api.v1alpha1.delivery.CredentialData} returns this
*/
proto.api.v1alpha1.delivery.CredentialData.prototype.setPgpKeyPair = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.api.v1alpha1.delivery.CredentialData.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.CredentialData} returns this
 */
proto.api.v1alpha1.delivery.CredentialData.prototype.clearPgpKeyPair = function() {
  return this.setPgpKeyPair(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.CredentialData.prototype.hasPgpKeyPair = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional AESPassword aes_password = 5;
 * @return {?proto.api.v1alpha1.delivery.AESPassword}
 */
proto.api.v1alpha1.delivery.CredentialData.prototype.getAesPassword = function() {
  return /** @type{?proto.api.v1alpha1.delivery.AESPassword} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.AESPassword, 5));
};


/**
 * @param {?proto.api.v1alpha1.delivery.AESPassword|undefined} value
 * @return {!proto.api.v1alpha1.delivery.CredentialData} returns this
*/
proto.api.v1alpha1.delivery.CredentialData.prototype.setAesPassword = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.api.v1alpha1.delivery.CredentialData.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.CredentialData} returns this
 */
proto.api.v1alpha1.delivery.CredentialData.prototype.clearAesPassword = function() {
  return this.setAesPassword(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.CredentialData.prototype.hasAesPassword = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.api.v1alpha1.delivery.UserPassword.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.UserPassword.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.UserPassword} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.UserPassword.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.api.v1alpha1.delivery.UserPassword}
 */
proto.api.v1alpha1.delivery.UserPassword.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.UserPassword;
  return proto.api.v1alpha1.delivery.UserPassword.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.UserPassword} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.UserPassword}
 */
proto.api.v1alpha1.delivery.UserPassword.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
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
proto.api.v1alpha1.delivery.UserPassword.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.UserPassword.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.UserPassword} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.UserPassword.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string username = 1;
 * @return {string}
 */
proto.api.v1alpha1.delivery.UserPassword.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.UserPassword} returns this
 */
proto.api.v1alpha1.delivery.UserPassword.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.api.v1alpha1.delivery.UserPassword.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.UserPassword} returns this
 */
proto.api.v1alpha1.delivery.UserPassword.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.api.v1alpha1.delivery.Password.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.Password.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.Password} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.Password.toObject = function(includeInstance, msg) {
  var f, obj = {
    password: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.api.v1alpha1.delivery.Password}
 */
proto.api.v1alpha1.delivery.Password.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.Password;
  return proto.api.v1alpha1.delivery.Password.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.Password} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.Password}
 */
proto.api.v1alpha1.delivery.Password.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
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
proto.api.v1alpha1.delivery.Password.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.Password.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.Password} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.Password.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string password = 1;
 * @return {string}
 */
proto.api.v1alpha1.delivery.Password.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.Password} returns this
 */
proto.api.v1alpha1.delivery.Password.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.api.v1alpha1.delivery.SSHKeyPair.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.SSHKeyPair.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.SSHKeyPair} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.SSHKeyPair.toObject = function(includeInstance, msg) {
  var f, obj = {
    publicKey: jspb.Message.getFieldWithDefault(msg, 1, ""),
    privateKey: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.api.v1alpha1.delivery.SSHKeyPair}
 */
proto.api.v1alpha1.delivery.SSHKeyPair.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.SSHKeyPair;
  return proto.api.v1alpha1.delivery.SSHKeyPair.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.SSHKeyPair} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.SSHKeyPair}
 */
proto.api.v1alpha1.delivery.SSHKeyPair.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrivateKey(value);
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
proto.api.v1alpha1.delivery.SSHKeyPair.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.SSHKeyPair.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.SSHKeyPair} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.SSHKeyPair.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublicKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPrivateKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string public_key = 1;
 * @return {string}
 */
proto.api.v1alpha1.delivery.SSHKeyPair.prototype.getPublicKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.SSHKeyPair} returns this
 */
proto.api.v1alpha1.delivery.SSHKeyPair.prototype.setPublicKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string private_key = 2;
 * @return {string}
 */
proto.api.v1alpha1.delivery.SSHKeyPair.prototype.getPrivateKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.SSHKeyPair} returns this
 */
proto.api.v1alpha1.delivery.SSHKeyPair.prototype.setPrivateKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.api.v1alpha1.delivery.PGPKeyPair.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.PGPKeyPair.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.PGPKeyPair} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.PGPKeyPair.toObject = function(includeInstance, msg) {
  var f, obj = {
    publicKey: jspb.Message.getFieldWithDefault(msg, 1, ""),
    privateKey: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.api.v1alpha1.delivery.PGPKeyPair}
 */
proto.api.v1alpha1.delivery.PGPKeyPair.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.PGPKeyPair;
  return proto.api.v1alpha1.delivery.PGPKeyPair.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.PGPKeyPair} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.PGPKeyPair}
 */
proto.api.v1alpha1.delivery.PGPKeyPair.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrivateKey(value);
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
proto.api.v1alpha1.delivery.PGPKeyPair.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.PGPKeyPair.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.PGPKeyPair} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.PGPKeyPair.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublicKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPrivateKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string public_key = 1;
 * @return {string}
 */
proto.api.v1alpha1.delivery.PGPKeyPair.prototype.getPublicKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.PGPKeyPair} returns this
 */
proto.api.v1alpha1.delivery.PGPKeyPair.prototype.setPublicKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string private_key = 2;
 * @return {string}
 */
proto.api.v1alpha1.delivery.PGPKeyPair.prototype.getPrivateKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.PGPKeyPair} returns this
 */
proto.api.v1alpha1.delivery.PGPKeyPair.prototype.setPrivateKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.api.v1alpha1.delivery.AESPassword.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.AESPassword.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.AESPassword} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.AESPassword.toObject = function(includeInstance, msg) {
  var f, obj = {
    password: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.api.v1alpha1.delivery.AESPassword}
 */
proto.api.v1alpha1.delivery.AESPassword.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.AESPassword;
  return proto.api.v1alpha1.delivery.AESPassword.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.AESPassword} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.AESPassword}
 */
proto.api.v1alpha1.delivery.AESPassword.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
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
proto.api.v1alpha1.delivery.AESPassword.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.AESPassword.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.AESPassword} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.AESPassword.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string password = 1;
 * @return {string}
 */
proto.api.v1alpha1.delivery.AESPassword.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.AESPassword} returns this
 */
proto.api.v1alpha1.delivery.AESPassword.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.v1alpha1.delivery.Source.oneofGroups_ = [[2]];

/**
 * @enum {number}
 */
proto.api.v1alpha1.delivery.Source.ValueCase = {
  VALUE_NOT_SET: 0,
  SFTP: 2
};

/**
 * @return {proto.api.v1alpha1.delivery.Source.ValueCase}
 */
proto.api.v1alpha1.delivery.Source.prototype.getValueCase = function() {
  return /** @type {proto.api.v1alpha1.delivery.Source.ValueCase} */(jspb.Message.computeOneofCase(this, proto.api.v1alpha1.delivery.Source.oneofGroups_[0]));
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
proto.api.v1alpha1.delivery.Source.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.Source.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.Source} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.Source.toObject = function(includeInstance, msg) {
  var f, obj = {
    encryption: (f = msg.getEncryption()) && api_commons_delivery_pb.Encryption.toObject(includeInstance, f),
    sftp: (f = msg.getSftp()) && proto.api.v1alpha1.delivery.SftpSource.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.Source}
 */
proto.api.v1alpha1.delivery.Source.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.Source;
  return proto.api.v1alpha1.delivery.Source.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.Source} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.Source}
 */
proto.api.v1alpha1.delivery.Source.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_delivery_pb.Encryption;
      reader.readMessage(value,api_commons_delivery_pb.Encryption.deserializeBinaryFromReader);
      msg.setEncryption(value);
      break;
    case 2:
      var value = new proto.api.v1alpha1.delivery.SftpSource;
      reader.readMessage(value,proto.api.v1alpha1.delivery.SftpSource.deserializeBinaryFromReader);
      msg.setSftp(value);
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
proto.api.v1alpha1.delivery.Source.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.Source.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.Source} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.Source.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEncryption();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_delivery_pb.Encryption.serializeBinaryToWriter
    );
  }
  f = message.getSftp();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.v1alpha1.delivery.SftpSource.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.Encryption encryption = 1;
 * @return {?proto.api.commons.Encryption}
 */
proto.api.v1alpha1.delivery.Source.prototype.getEncryption = function() {
  return /** @type{?proto.api.commons.Encryption} */ (
    jspb.Message.getWrapperField(this, api_commons_delivery_pb.Encryption, 1));
};


/**
 * @param {?proto.api.commons.Encryption|undefined} value
 * @return {!proto.api.v1alpha1.delivery.Source} returns this
*/
proto.api.v1alpha1.delivery.Source.prototype.setEncryption = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.Source} returns this
 */
proto.api.v1alpha1.delivery.Source.prototype.clearEncryption = function() {
  return this.setEncryption(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.Source.prototype.hasEncryption = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SftpSource sftp = 2;
 * @return {?proto.api.v1alpha1.delivery.SftpSource}
 */
proto.api.v1alpha1.delivery.Source.prototype.getSftp = function() {
  return /** @type{?proto.api.v1alpha1.delivery.SftpSource} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.SftpSource, 2));
};


/**
 * @param {?proto.api.v1alpha1.delivery.SftpSource|undefined} value
 * @return {!proto.api.v1alpha1.delivery.Source} returns this
*/
proto.api.v1alpha1.delivery.Source.prototype.setSftp = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.api.v1alpha1.delivery.Source.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.Source} returns this
 */
proto.api.v1alpha1.delivery.Source.prototype.clearSftp = function() {
  return this.setSftp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.Source.prototype.hasSftp = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.api.v1alpha1.delivery.SftpSource.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.SftpSource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.SftpSource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.SftpSource.toObject = function(includeInstance, msg) {
  var f, obj = {
    directory: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.api.v1alpha1.delivery.SftpSource}
 */
proto.api.v1alpha1.delivery.SftpSource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.SftpSource;
  return proto.api.v1alpha1.delivery.SftpSource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.SftpSource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.SftpSource}
 */
proto.api.v1alpha1.delivery.SftpSource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirectory(value);
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
proto.api.v1alpha1.delivery.SftpSource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.SftpSource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.SftpSource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.SftpSource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDirectory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string directory = 2;
 * @return {string}
 */
proto.api.v1alpha1.delivery.SftpSource.prototype.getDirectory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.SftpSource} returns this
 */
proto.api.v1alpha1.delivery.SftpSource.prototype.setDirectory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.api.v1alpha1.delivery.GetCredentialReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.GetCredentialReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.GetCredentialReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.GetCredentialReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.Credential.toObject(includeInstance, f),
    mask: (f = msg.getMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.GetCredentialReq}
 */
proto.api.v1alpha1.delivery.GetCredentialReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.GetCredentialReq;
  return proto.api.v1alpha1.delivery.GetCredentialReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.GetCredentialReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.GetCredentialReq}
 */
proto.api.v1alpha1.delivery.GetCredentialReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.Credential;
      reader.readMessage(value,proto.api.v1alpha1.delivery.Credential.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setMask(value);
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
proto.api.v1alpha1.delivery.GetCredentialReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.GetCredentialReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.GetCredentialReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.GetCredentialReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.Credential.serializeBinaryToWriter
    );
  }
  f = message.getMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional Credential entity = 1;
 * @return {?proto.api.v1alpha1.delivery.Credential}
 */
proto.api.v1alpha1.delivery.GetCredentialReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.Credential} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.Credential, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.Credential|undefined} value
 * @return {!proto.api.v1alpha1.delivery.GetCredentialReq} returns this
*/
proto.api.v1alpha1.delivery.GetCredentialReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.GetCredentialReq} returns this
 */
proto.api.v1alpha1.delivery.GetCredentialReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.GetCredentialReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.delivery.GetCredentialReq.prototype.getMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.delivery.GetCredentialReq} returns this
*/
proto.api.v1alpha1.delivery.GetCredentialReq.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.GetCredentialReq} returns this
 */
proto.api.v1alpha1.delivery.GetCredentialReq.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.GetCredentialReq.prototype.hasMask = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.api.v1alpha1.delivery.GetCredentialRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.GetCredentialRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.GetCredentialRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.GetCredentialRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    credential: (f = msg.getCredential()) && proto.api.v1alpha1.delivery.Credential.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.GetCredentialRes}
 */
proto.api.v1alpha1.delivery.GetCredentialRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.GetCredentialRes;
  return proto.api.v1alpha1.delivery.GetCredentialRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.GetCredentialRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.GetCredentialRes}
 */
proto.api.v1alpha1.delivery.GetCredentialRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.Credential;
      reader.readMessage(value,proto.api.v1alpha1.delivery.Credential.deserializeBinaryFromReader);
      msg.setCredential(value);
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
proto.api.v1alpha1.delivery.GetCredentialRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.GetCredentialRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.GetCredentialRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.GetCredentialRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCredential();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.Credential.serializeBinaryToWriter
    );
  }
};


/**
 * optional Credential credential = 1;
 * @return {?proto.api.v1alpha1.delivery.Credential}
 */
proto.api.v1alpha1.delivery.GetCredentialRes.prototype.getCredential = function() {
  return /** @type{?proto.api.v1alpha1.delivery.Credential} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.Credential, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.Credential|undefined} value
 * @return {!proto.api.v1alpha1.delivery.GetCredentialRes} returns this
*/
proto.api.v1alpha1.delivery.GetCredentialRes.prototype.setCredential = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.GetCredentialRes} returns this
 */
proto.api.v1alpha1.delivery.GetCredentialRes.prototype.clearCredential = function() {
  return this.setCredential(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.GetCredentialRes.prototype.hasCredential = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.api.v1alpha1.delivery.ListCredentialsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.ListCredentialsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.ListCredentialsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListCredentialsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.ListReq.toObject(includeInstance, f),
    mask: (f = msg.getMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.ListCredentialsReq}
 */
proto.api.v1alpha1.delivery.ListCredentialsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.ListCredentialsReq;
  return proto.api.v1alpha1.delivery.ListCredentialsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.ListCredentialsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.ListCredentialsReq}
 */
proto.api.v1alpha1.delivery.ListCredentialsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.ListReq;
      reader.readMessage(value,proto.api.v1alpha1.delivery.ListReq.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setMask(value);
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
proto.api.v1alpha1.delivery.ListCredentialsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.ListCredentialsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.ListCredentialsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListCredentialsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.ListReq.serializeBinaryToWriter
    );
  }
  f = message.getMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional ListReq entity = 1;
 * @return {?proto.api.v1alpha1.delivery.ListReq}
 */
proto.api.v1alpha1.delivery.ListCredentialsReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.ListReq} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.ListReq, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.ListReq|undefined} value
 * @return {!proto.api.v1alpha1.delivery.ListCredentialsReq} returns this
*/
proto.api.v1alpha1.delivery.ListCredentialsReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.ListCredentialsReq} returns this
 */
proto.api.v1alpha1.delivery.ListCredentialsReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.ListCredentialsReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.delivery.ListCredentialsReq.prototype.getMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.delivery.ListCredentialsReq} returns this
*/
proto.api.v1alpha1.delivery.ListCredentialsReq.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.ListCredentialsReq} returns this
 */
proto.api.v1alpha1.delivery.ListCredentialsReq.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.ListCredentialsReq.prototype.hasMask = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.api.v1alpha1.delivery.ListCredentialsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.ListCredentialsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.ListCredentialsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListCredentialsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    credentials: (f = msg.getCredentials()) && proto.api.v1alpha1.delivery.Credentials.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.ListCredentialsRes}
 */
proto.api.v1alpha1.delivery.ListCredentialsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.ListCredentialsRes;
  return proto.api.v1alpha1.delivery.ListCredentialsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.ListCredentialsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.ListCredentialsRes}
 */
proto.api.v1alpha1.delivery.ListCredentialsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.Credentials;
      reader.readMessage(value,proto.api.v1alpha1.delivery.Credentials.deserializeBinaryFromReader);
      msg.setCredentials(value);
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
proto.api.v1alpha1.delivery.ListCredentialsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.ListCredentialsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.ListCredentialsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListCredentialsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCredentials();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.Credentials.serializeBinaryToWriter
    );
  }
};


/**
 * optional Credentials credentials = 1;
 * @return {?proto.api.v1alpha1.delivery.Credentials}
 */
proto.api.v1alpha1.delivery.ListCredentialsRes.prototype.getCredentials = function() {
  return /** @type{?proto.api.v1alpha1.delivery.Credentials} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.Credentials, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.Credentials|undefined} value
 * @return {!proto.api.v1alpha1.delivery.ListCredentialsRes} returns this
*/
proto.api.v1alpha1.delivery.ListCredentialsRes.prototype.setCredentials = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.ListCredentialsRes} returns this
 */
proto.api.v1alpha1.delivery.ListCredentialsRes.prototype.clearCredentials = function() {
  return this.setCredentials(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.ListCredentialsRes.prototype.hasCredentials = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.api.v1alpha1.delivery.CreateCredentialReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.CreateCredentialReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.CreateCredentialReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.CreateCredentialReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.Credential.toObject(includeInstance, f),
    mask: (f = msg.getMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.CreateCredentialReq}
 */
proto.api.v1alpha1.delivery.CreateCredentialReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.CreateCredentialReq;
  return proto.api.v1alpha1.delivery.CreateCredentialReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.CreateCredentialReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.CreateCredentialReq}
 */
proto.api.v1alpha1.delivery.CreateCredentialReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.Credential;
      reader.readMessage(value,proto.api.v1alpha1.delivery.Credential.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setMask(value);
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
proto.api.v1alpha1.delivery.CreateCredentialReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.CreateCredentialReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.CreateCredentialReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.CreateCredentialReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.Credential.serializeBinaryToWriter
    );
  }
  f = message.getMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional Credential entity = 1;
 * @return {?proto.api.v1alpha1.delivery.Credential}
 */
proto.api.v1alpha1.delivery.CreateCredentialReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.Credential} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.Credential, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.Credential|undefined} value
 * @return {!proto.api.v1alpha1.delivery.CreateCredentialReq} returns this
*/
proto.api.v1alpha1.delivery.CreateCredentialReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.CreateCredentialReq} returns this
 */
proto.api.v1alpha1.delivery.CreateCredentialReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.CreateCredentialReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.delivery.CreateCredentialReq.prototype.getMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.delivery.CreateCredentialReq} returns this
*/
proto.api.v1alpha1.delivery.CreateCredentialReq.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.CreateCredentialReq} returns this
 */
proto.api.v1alpha1.delivery.CreateCredentialReq.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.CreateCredentialReq.prototype.hasMask = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.api.v1alpha1.delivery.CreateCredentialRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.CreateCredentialRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.CreateCredentialRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.CreateCredentialRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.ID.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.CreateCredentialRes}
 */
proto.api.v1alpha1.delivery.CreateCredentialRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.CreateCredentialRes;
  return proto.api.v1alpha1.delivery.CreateCredentialRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.CreateCredentialRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.CreateCredentialRes}
 */
proto.api.v1alpha1.delivery.CreateCredentialRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.ID;
      reader.readMessage(value,proto.api.v1alpha1.delivery.ID.deserializeBinaryFromReader);
      msg.setEntity(value);
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
proto.api.v1alpha1.delivery.CreateCredentialRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.CreateCredentialRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.CreateCredentialRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.CreateCredentialRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.ID.serializeBinaryToWriter
    );
  }
};


/**
 * optional ID entity = 1;
 * @return {?proto.api.v1alpha1.delivery.ID}
 */
proto.api.v1alpha1.delivery.CreateCredentialRes.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.ID} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.ID, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.ID|undefined} value
 * @return {!proto.api.v1alpha1.delivery.CreateCredentialRes} returns this
*/
proto.api.v1alpha1.delivery.CreateCredentialRes.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.CreateCredentialRes} returns this
 */
proto.api.v1alpha1.delivery.CreateCredentialRes.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.CreateCredentialRes.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.api.v1alpha1.delivery.DeleteCredentialReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.DeleteCredentialReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.DeleteCredentialReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.DeleteCredentialReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.ID.toObject(includeInstance, f),
    mask: (f = msg.getMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.DeleteCredentialReq}
 */
proto.api.v1alpha1.delivery.DeleteCredentialReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.DeleteCredentialReq;
  return proto.api.v1alpha1.delivery.DeleteCredentialReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.DeleteCredentialReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.DeleteCredentialReq}
 */
proto.api.v1alpha1.delivery.DeleteCredentialReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.ID;
      reader.readMessage(value,proto.api.v1alpha1.delivery.ID.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setMask(value);
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
proto.api.v1alpha1.delivery.DeleteCredentialReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.DeleteCredentialReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.DeleteCredentialReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.DeleteCredentialReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.ID.serializeBinaryToWriter
    );
  }
  f = message.getMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional ID entity = 1;
 * @return {?proto.api.v1alpha1.delivery.ID}
 */
proto.api.v1alpha1.delivery.DeleteCredentialReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.ID} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.ID, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.ID|undefined} value
 * @return {!proto.api.v1alpha1.delivery.DeleteCredentialReq} returns this
*/
proto.api.v1alpha1.delivery.DeleteCredentialReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.DeleteCredentialReq} returns this
 */
proto.api.v1alpha1.delivery.DeleteCredentialReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.DeleteCredentialReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.delivery.DeleteCredentialReq.prototype.getMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.delivery.DeleteCredentialReq} returns this
*/
proto.api.v1alpha1.delivery.DeleteCredentialReq.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.DeleteCredentialReq} returns this
 */
proto.api.v1alpha1.delivery.DeleteCredentialReq.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.DeleteCredentialReq.prototype.hasMask = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.api.v1alpha1.delivery.DeleteCredentialRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.DeleteCredentialRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.DeleteCredentialRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.DeleteCredentialRes.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.api.v1alpha1.delivery.DeleteCredentialRes}
 */
proto.api.v1alpha1.delivery.DeleteCredentialRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.DeleteCredentialRes;
  return proto.api.v1alpha1.delivery.DeleteCredentialRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.DeleteCredentialRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.DeleteCredentialRes}
 */
proto.api.v1alpha1.delivery.DeleteCredentialRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.api.v1alpha1.delivery.DeleteCredentialRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.DeleteCredentialRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.DeleteCredentialRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.DeleteCredentialRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.api.v1alpha1.delivery.UpdateCredentialReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.UpdateCredentialReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.UpdateCredentialReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.UpdateCredentialReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.Credential.toObject(includeInstance, f),
    mask: (f = msg.getMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.UpdateCredentialReq}
 */
proto.api.v1alpha1.delivery.UpdateCredentialReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.UpdateCredentialReq;
  return proto.api.v1alpha1.delivery.UpdateCredentialReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.UpdateCredentialReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.UpdateCredentialReq}
 */
proto.api.v1alpha1.delivery.UpdateCredentialReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.Credential;
      reader.readMessage(value,proto.api.v1alpha1.delivery.Credential.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setMask(value);
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
proto.api.v1alpha1.delivery.UpdateCredentialReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.UpdateCredentialReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.UpdateCredentialReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.UpdateCredentialReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.Credential.serializeBinaryToWriter
    );
  }
  f = message.getMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional Credential entity = 1;
 * @return {?proto.api.v1alpha1.delivery.Credential}
 */
proto.api.v1alpha1.delivery.UpdateCredentialReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.Credential} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.Credential, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.Credential|undefined} value
 * @return {!proto.api.v1alpha1.delivery.UpdateCredentialReq} returns this
*/
proto.api.v1alpha1.delivery.UpdateCredentialReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.UpdateCredentialReq} returns this
 */
proto.api.v1alpha1.delivery.UpdateCredentialReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.UpdateCredentialReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.delivery.UpdateCredentialReq.prototype.getMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.delivery.UpdateCredentialReq} returns this
*/
proto.api.v1alpha1.delivery.UpdateCredentialReq.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.UpdateCredentialReq} returns this
 */
proto.api.v1alpha1.delivery.UpdateCredentialReq.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.UpdateCredentialReq.prototype.hasMask = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.api.v1alpha1.delivery.UpdateCredentialRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.UpdateCredentialRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.UpdateCredentialRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.UpdateCredentialRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.delivery.ID.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.UpdateCredentialRes}
 */
proto.api.v1alpha1.delivery.UpdateCredentialRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.UpdateCredentialRes;
  return proto.api.v1alpha1.delivery.UpdateCredentialRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.UpdateCredentialRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.UpdateCredentialRes}
 */
proto.api.v1alpha1.delivery.UpdateCredentialRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.ID;
      reader.readMessage(value,proto.api.v1alpha1.delivery.ID.deserializeBinaryFromReader);
      msg.setEntity(value);
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
proto.api.v1alpha1.delivery.UpdateCredentialRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.UpdateCredentialRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.UpdateCredentialRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.UpdateCredentialRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.ID.serializeBinaryToWriter
    );
  }
};


/**
 * optional ID entity = 1;
 * @return {?proto.api.v1alpha1.delivery.ID}
 */
proto.api.v1alpha1.delivery.UpdateCredentialRes.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.delivery.ID} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.ID, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.ID|undefined} value
 * @return {!proto.api.v1alpha1.delivery.UpdateCredentialRes} returns this
*/
proto.api.v1alpha1.delivery.UpdateCredentialRes.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.UpdateCredentialRes} returns this
 */
proto.api.v1alpha1.delivery.UpdateCredentialRes.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.UpdateCredentialRes.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.delivery.Credentials.repeatedFields_ = [1];



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
proto.api.v1alpha1.delivery.Credentials.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.Credentials.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.Credentials} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.Credentials.toObject = function(includeInstance, msg) {
  var f, obj = {
    entitiesList: jspb.Message.toObjectList(msg.getEntitiesList(),
    proto.api.v1alpha1.delivery.Credential.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.delivery.Credentials}
 */
proto.api.v1alpha1.delivery.Credentials.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.Credentials;
  return proto.api.v1alpha1.delivery.Credentials.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.Credentials} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.Credentials}
 */
proto.api.v1alpha1.delivery.Credentials.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.Credential;
      reader.readMessage(value,proto.api.v1alpha1.delivery.Credential.deserializeBinaryFromReader);
      msg.addEntities(value);
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
proto.api.v1alpha1.delivery.Credentials.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.Credentials.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.Credentials} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.Credentials.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.Credential.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Credential entities = 1;
 * @return {!Array<!proto.api.v1alpha1.delivery.Credential>}
 */
proto.api.v1alpha1.delivery.Credentials.prototype.getEntitiesList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.delivery.Credential>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.delivery.Credential, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.delivery.Credential>} value
 * @return {!proto.api.v1alpha1.delivery.Credentials} returns this
*/
proto.api.v1alpha1.delivery.Credentials.prototype.setEntitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.delivery.Credential=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.delivery.Credential}
 */
proto.api.v1alpha1.delivery.Credentials.prototype.addEntities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.delivery.Credential, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.delivery.Credentials} returns this
 */
proto.api.v1alpha1.delivery.Credentials.prototype.clearEntitiesList = function() {
  return this.setEntitiesList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.oneofGroups_ = [[9,10,11,12],[13,14]];

/**
 * @enum {number}
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.TransportCase = {
  TRANSPORT_NOT_SET: 0,
  SFTP: 9,
  EMAIL: 10,
  ROOM303: 11,
  SMS: 12
};

/**
 * @return {proto.api.v1alpha1.delivery.DeliveryDefinition.TransportCase}
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.getTransportCase = function() {
  return /** @type {proto.api.v1alpha1.delivery.DeliveryDefinition.TransportCase} */(jspb.Message.computeOneofCase(this, proto.api.v1alpha1.delivery.DeliveryDefinition.oneofGroups_[0]));
};

/**
 * @enum {number}
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.EncryptionCase = {
  ENCRYPTION_NOT_SET: 0,
  AES: 13,
  PGP: 14
};

/**
 * @return {proto.api.v1alpha1.delivery.DeliveryDefinition.EncryptionCase}
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.getEncryptionCase = function() {
  return /** @type {proto.api.v1alpha1.delivery.DeliveryDefinition.EncryptionCase} */(jspb.Message.computeOneofCase(this, proto.api.v1alpha1.delivery.DeliveryDefinition.oneofGroups_[1]));
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
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.DeliveryDefinition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.DeliveryDefinition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.toObject = function(includeInstance, msg) {
  var f, obj = {
    deliveryDefinitionSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    orgId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    ttl: jspb.Message.getFieldWithDefault(msg, 8, 0),
    sftp: (f = msg.getSftp()) && proto.api.v1alpha1.delivery.SFTPTransport.toObject(includeInstance, f),
    email: (f = msg.getEmail()) && proto.api.v1alpha1.delivery.EmailTransport.toObject(includeInstance, f),
    room303: (f = msg.getRoom303()) && proto.api.v1alpha1.delivery.Room303Transport.toObject(includeInstance, f),
    sms: (f = msg.getSms()) && proto.api.v1alpha1.delivery.SMSTransport.toObject(includeInstance, f),
    aes: (f = msg.getAes()) && proto.api.v1alpha1.delivery.AESEncryptionRef.toObject(includeInstance, f),
    pgp: (f = msg.getPgp()) && proto.api.v1alpha1.delivery.PGPEncryptionRef.toObject(includeInstance, f),
    createdOn: (f = msg.getCreatedOn()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    lastEdited: (f = msg.getLastEdited()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.DeliveryDefinition}
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.DeliveryDefinition;
  return proto.api.v1alpha1.delivery.DeliveryDefinition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.DeliveryDefinition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.DeliveryDefinition}
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setDeliveryDefinitionSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTtl(value);
      break;
    case 9:
      var value = new proto.api.v1alpha1.delivery.SFTPTransport;
      reader.readMessage(value,proto.api.v1alpha1.delivery.SFTPTransport.deserializeBinaryFromReader);
      msg.setSftp(value);
      break;
    case 10:
      var value = new proto.api.v1alpha1.delivery.EmailTransport;
      reader.readMessage(value,proto.api.v1alpha1.delivery.EmailTransport.deserializeBinaryFromReader);
      msg.setEmail(value);
      break;
    case 11:
      var value = new proto.api.v1alpha1.delivery.Room303Transport;
      reader.readMessage(value,proto.api.v1alpha1.delivery.Room303Transport.deserializeBinaryFromReader);
      msg.setRoom303(value);
      break;
    case 12:
      var value = new proto.api.v1alpha1.delivery.SMSTransport;
      reader.readMessage(value,proto.api.v1alpha1.delivery.SMSTransport.deserializeBinaryFromReader);
      msg.setSms(value);
      break;
    case 13:
      var value = new proto.api.v1alpha1.delivery.AESEncryptionRef;
      reader.readMessage(value,proto.api.v1alpha1.delivery.AESEncryptionRef.deserializeBinaryFromReader);
      msg.setAes(value);
      break;
    case 14:
      var value = new proto.api.v1alpha1.delivery.PGPEncryptionRef;
      reader.readMessage(value,proto.api.v1alpha1.delivery.PGPEncryptionRef.deserializeBinaryFromReader);
      msg.setPgp(value);
      break;
    case 15:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedOn(value);
      break;
    case 16:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastEdited(value);
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
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.DeliveryDefinition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.DeliveryDefinition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeliveryDefinitionSid();
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
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTtl();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getSftp();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.api.v1alpha1.delivery.SFTPTransport.serializeBinaryToWriter
    );
  }
  f = message.getEmail();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.api.v1alpha1.delivery.EmailTransport.serializeBinaryToWriter
    );
  }
  f = message.getRoom303();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.api.v1alpha1.delivery.Room303Transport.serializeBinaryToWriter
    );
  }
  f = message.getSms();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.api.v1alpha1.delivery.SMSTransport.serializeBinaryToWriter
    );
  }
  f = message.getAes();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.api.v1alpha1.delivery.AESEncryptionRef.serializeBinaryToWriter
    );
  }
  f = message.getPgp();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.api.v1alpha1.delivery.PGPEncryptionRef.serializeBinaryToWriter
    );
  }
  f = message.getCreatedOn();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLastEdited();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 delivery_definition_sid = 1;
 * @return {string}
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.getDeliveryDefinitionSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.DeliveryDefinition} returns this
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.setDeliveryDefinitionSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.DeliveryDefinition} returns this
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.DeliveryDefinition} returns this
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.DeliveryDefinition} returns this
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 ttl = 8;
 * @return {number}
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.getTtl = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.delivery.DeliveryDefinition} returns this
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.setTtl = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional SFTPTransport sftp = 9;
 * @return {?proto.api.v1alpha1.delivery.SFTPTransport}
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.getSftp = function() {
  return /** @type{?proto.api.v1alpha1.delivery.SFTPTransport} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.SFTPTransport, 9));
};


/**
 * @param {?proto.api.v1alpha1.delivery.SFTPTransport|undefined} value
 * @return {!proto.api.v1alpha1.delivery.DeliveryDefinition} returns this
*/
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.setSftp = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.api.v1alpha1.delivery.DeliveryDefinition.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.DeliveryDefinition} returns this
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.clearSftp = function() {
  return this.setSftp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.hasSftp = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional EmailTransport email = 10;
 * @return {?proto.api.v1alpha1.delivery.EmailTransport}
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.getEmail = function() {
  return /** @type{?proto.api.v1alpha1.delivery.EmailTransport} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.EmailTransport, 10));
};


/**
 * @param {?proto.api.v1alpha1.delivery.EmailTransport|undefined} value
 * @return {!proto.api.v1alpha1.delivery.DeliveryDefinition} returns this
*/
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.setEmail = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.api.v1alpha1.delivery.DeliveryDefinition.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.DeliveryDefinition} returns this
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.clearEmail = function() {
  return this.setEmail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.hasEmail = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Room303Transport room303 = 11;
 * @return {?proto.api.v1alpha1.delivery.Room303Transport}
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.getRoom303 = function() {
  return /** @type{?proto.api.v1alpha1.delivery.Room303Transport} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.Room303Transport, 11));
};


/**
 * @param {?proto.api.v1alpha1.delivery.Room303Transport|undefined} value
 * @return {!proto.api.v1alpha1.delivery.DeliveryDefinition} returns this
*/
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.setRoom303 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.api.v1alpha1.delivery.DeliveryDefinition.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.DeliveryDefinition} returns this
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.clearRoom303 = function() {
  return this.setRoom303(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.hasRoom303 = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional SMSTransport sms = 12;
 * @return {?proto.api.v1alpha1.delivery.SMSTransport}
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.getSms = function() {
  return /** @type{?proto.api.v1alpha1.delivery.SMSTransport} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.SMSTransport, 12));
};


/**
 * @param {?proto.api.v1alpha1.delivery.SMSTransport|undefined} value
 * @return {!proto.api.v1alpha1.delivery.DeliveryDefinition} returns this
*/
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.setSms = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.api.v1alpha1.delivery.DeliveryDefinition.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.DeliveryDefinition} returns this
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.clearSms = function() {
  return this.setSms(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.hasSms = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional AESEncryptionRef aes = 13;
 * @return {?proto.api.v1alpha1.delivery.AESEncryptionRef}
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.getAes = function() {
  return /** @type{?proto.api.v1alpha1.delivery.AESEncryptionRef} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.AESEncryptionRef, 13));
};


/**
 * @param {?proto.api.v1alpha1.delivery.AESEncryptionRef|undefined} value
 * @return {!proto.api.v1alpha1.delivery.DeliveryDefinition} returns this
*/
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.setAes = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.api.v1alpha1.delivery.DeliveryDefinition.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.DeliveryDefinition} returns this
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.clearAes = function() {
  return this.setAes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.hasAes = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional PGPEncryptionRef pgp = 14;
 * @return {?proto.api.v1alpha1.delivery.PGPEncryptionRef}
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.getPgp = function() {
  return /** @type{?proto.api.v1alpha1.delivery.PGPEncryptionRef} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.PGPEncryptionRef, 14));
};


/**
 * @param {?proto.api.v1alpha1.delivery.PGPEncryptionRef|undefined} value
 * @return {!proto.api.v1alpha1.delivery.DeliveryDefinition} returns this
*/
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.setPgp = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.api.v1alpha1.delivery.DeliveryDefinition.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.DeliveryDefinition} returns this
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.clearPgp = function() {
  return this.setPgp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.hasPgp = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional google.protobuf.Timestamp created_on = 15;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.getCreatedOn = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 15));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.delivery.DeliveryDefinition} returns this
*/
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.setCreatedOn = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.DeliveryDefinition} returns this
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.clearCreatedOn = function() {
  return this.setCreatedOn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.hasCreatedOn = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional google.protobuf.Timestamp last_edited = 16;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.getLastEdited = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 16));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.delivery.DeliveryDefinition} returns this
*/
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.setLastEdited = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.DeliveryDefinition} returns this
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.clearLastEdited = function() {
  return this.setLastEdited(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.DeliveryDefinition.prototype.hasLastEdited = function() {
  return jspb.Message.getField(this, 16) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.v1alpha1.delivery.SFTPTransport.oneofGroups_ = [[3,4]];

/**
 * @enum {number}
 */
proto.api.v1alpha1.delivery.SFTPTransport.CredentialsCase = {
  CREDENTIALS_NOT_SET: 0,
  PASSWORD: 3,
  SSH_KEY: 4
};

/**
 * @return {proto.api.v1alpha1.delivery.SFTPTransport.CredentialsCase}
 */
proto.api.v1alpha1.delivery.SFTPTransport.prototype.getCredentialsCase = function() {
  return /** @type {proto.api.v1alpha1.delivery.SFTPTransport.CredentialsCase} */(jspb.Message.computeOneofCase(this, proto.api.v1alpha1.delivery.SFTPTransport.oneofGroups_[0]));
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
proto.api.v1alpha1.delivery.SFTPTransport.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.SFTPTransport.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.SFTPTransport} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.SFTPTransport.toObject = function(includeInstance, msg) {
  var f, obj = {
    host: jspb.Message.getFieldWithDefault(msg, 1, ""),
    port: jspb.Message.getFieldWithDefault(msg, 2, 0),
    password: (f = msg.getPassword()) && proto.api.v1alpha1.delivery.PasswordRef.toObject(includeInstance, f),
    sshKey: (f = msg.getSshKey()) && proto.api.v1alpha1.delivery.SSHKeyRef.toObject(includeInstance, f),
    username: jspb.Message.getFieldWithDefault(msg, 5, ""),
    baseDir: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.api.v1alpha1.delivery.SFTPTransport}
 */
proto.api.v1alpha1.delivery.SFTPTransport.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.SFTPTransport;
  return proto.api.v1alpha1.delivery.SFTPTransport.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.SFTPTransport} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.SFTPTransport}
 */
proto.api.v1alpha1.delivery.SFTPTransport.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
      break;
    case 3:
      var value = new proto.api.v1alpha1.delivery.PasswordRef;
      reader.readMessage(value,proto.api.v1alpha1.delivery.PasswordRef.deserializeBinaryFromReader);
      msg.setPassword(value);
      break;
    case 4:
      var value = new proto.api.v1alpha1.delivery.SSHKeyRef;
      reader.readMessage(value,proto.api.v1alpha1.delivery.SSHKeyRef.deserializeBinaryFromReader);
      msg.setSshKey(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setBaseDir(value);
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
proto.api.v1alpha1.delivery.SFTPTransport.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.SFTPTransport.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.SFTPTransport} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.SFTPTransport.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPassword();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.v1alpha1.delivery.PasswordRef.serializeBinaryToWriter
    );
  }
  f = message.getSshKey();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api.v1alpha1.delivery.SSHKeyRef.serializeBinaryToWriter
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getBaseDir();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string host = 1;
 * @return {string}
 */
proto.api.v1alpha1.delivery.SFTPTransport.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.SFTPTransport} returns this
 */
proto.api.v1alpha1.delivery.SFTPTransport.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 port = 2;
 * @return {number}
 */
proto.api.v1alpha1.delivery.SFTPTransport.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.delivery.SFTPTransport} returns this
 */
proto.api.v1alpha1.delivery.SFTPTransport.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional PasswordRef password = 3;
 * @return {?proto.api.v1alpha1.delivery.PasswordRef}
 */
proto.api.v1alpha1.delivery.SFTPTransport.prototype.getPassword = function() {
  return /** @type{?proto.api.v1alpha1.delivery.PasswordRef} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.PasswordRef, 3));
};


/**
 * @param {?proto.api.v1alpha1.delivery.PasswordRef|undefined} value
 * @return {!proto.api.v1alpha1.delivery.SFTPTransport} returns this
*/
proto.api.v1alpha1.delivery.SFTPTransport.prototype.setPassword = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.api.v1alpha1.delivery.SFTPTransport.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.SFTPTransport} returns this
 */
proto.api.v1alpha1.delivery.SFTPTransport.prototype.clearPassword = function() {
  return this.setPassword(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.SFTPTransport.prototype.hasPassword = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional SSHKeyRef ssh_key = 4;
 * @return {?proto.api.v1alpha1.delivery.SSHKeyRef}
 */
proto.api.v1alpha1.delivery.SFTPTransport.prototype.getSshKey = function() {
  return /** @type{?proto.api.v1alpha1.delivery.SSHKeyRef} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.SSHKeyRef, 4));
};


/**
 * @param {?proto.api.v1alpha1.delivery.SSHKeyRef|undefined} value
 * @return {!proto.api.v1alpha1.delivery.SFTPTransport} returns this
*/
proto.api.v1alpha1.delivery.SFTPTransport.prototype.setSshKey = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.api.v1alpha1.delivery.SFTPTransport.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.SFTPTransport} returns this
 */
proto.api.v1alpha1.delivery.SFTPTransport.prototype.clearSshKey = function() {
  return this.setSshKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.SFTPTransport.prototype.hasSshKey = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string username = 5;
 * @return {string}
 */
proto.api.v1alpha1.delivery.SFTPTransport.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.SFTPTransport} returns this
 */
proto.api.v1alpha1.delivery.SFTPTransport.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string base_dir = 6;
 * @return {string}
 */
proto.api.v1alpha1.delivery.SFTPTransport.prototype.getBaseDir = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.SFTPTransport} returns this
 */
proto.api.v1alpha1.delivery.SFTPTransport.prototype.setBaseDir = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.delivery.EmailTransport.repeatedFields_ = [3,4];



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
proto.api.v1alpha1.delivery.EmailTransport.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.EmailTransport.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.EmailTransport} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.EmailTransport.toObject = function(includeInstance, msg) {
  var f, obj = {
    fromAddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    toAddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ccAddressesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    toAddressesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.api.v1alpha1.delivery.EmailTransport}
 */
proto.api.v1alpha1.delivery.EmailTransport.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.EmailTransport;
  return proto.api.v1alpha1.delivery.EmailTransport.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.EmailTransport} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.EmailTransport}
 */
proto.api.v1alpha1.delivery.EmailTransport.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFromAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToAddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addCcAddresses(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addToAddresses(value);
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
proto.api.v1alpha1.delivery.EmailTransport.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.EmailTransport.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.EmailTransport} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.EmailTransport.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFromAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getToAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCcAddressesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getToAddressesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string from_address = 1;
 * @return {string}
 */
proto.api.v1alpha1.delivery.EmailTransport.prototype.getFromAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.EmailTransport} returns this
 */
proto.api.v1alpha1.delivery.EmailTransport.prototype.setFromAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string to_address = 2;
 * @return {string}
 */
proto.api.v1alpha1.delivery.EmailTransport.prototype.getToAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.EmailTransport} returns this
 */
proto.api.v1alpha1.delivery.EmailTransport.prototype.setToAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string cc_addresses = 3;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.delivery.EmailTransport.prototype.getCcAddressesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.delivery.EmailTransport} returns this
 */
proto.api.v1alpha1.delivery.EmailTransport.prototype.setCcAddressesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.delivery.EmailTransport} returns this
 */
proto.api.v1alpha1.delivery.EmailTransport.prototype.addCcAddresses = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.delivery.EmailTransport} returns this
 */
proto.api.v1alpha1.delivery.EmailTransport.prototype.clearCcAddressesList = function() {
  return this.setCcAddressesList([]);
};


/**
 * repeated string to_addresses = 4;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.delivery.EmailTransport.prototype.getToAddressesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.delivery.EmailTransport} returns this
 */
proto.api.v1alpha1.delivery.EmailTransport.prototype.setToAddressesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.delivery.EmailTransport} returns this
 */
proto.api.v1alpha1.delivery.EmailTransport.prototype.addToAddresses = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.delivery.EmailTransport} returns this
 */
proto.api.v1alpha1.delivery.EmailTransport.prototype.clearToAddressesList = function() {
  return this.setToAddressesList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.v1alpha1.delivery.Room303Transport.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.api.v1alpha1.delivery.Room303Transport.TransportCase = {
  TRANSPORT_NOT_SET: 0,
  SYSTEM_MESSAGE: 1
};

/**
 * @return {proto.api.v1alpha1.delivery.Room303Transport.TransportCase}
 */
proto.api.v1alpha1.delivery.Room303Transport.prototype.getTransportCase = function() {
  return /** @type {proto.api.v1alpha1.delivery.Room303Transport.TransportCase} */(jspb.Message.computeOneofCase(this, proto.api.v1alpha1.delivery.Room303Transport.oneofGroups_[0]));
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
proto.api.v1alpha1.delivery.Room303Transport.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.Room303Transport.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.Room303Transport} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.Room303Transport.toObject = function(includeInstance, msg) {
  var f, obj = {
    systemMessage: (f = msg.getSystemMessage()) && proto.api.v1alpha1.delivery.Room303SystemMessage.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.Room303Transport}
 */
proto.api.v1alpha1.delivery.Room303Transport.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.Room303Transport;
  return proto.api.v1alpha1.delivery.Room303Transport.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.Room303Transport} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.Room303Transport}
 */
proto.api.v1alpha1.delivery.Room303Transport.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.delivery.Room303SystemMessage;
      reader.readMessage(value,proto.api.v1alpha1.delivery.Room303SystemMessage.deserializeBinaryFromReader);
      msg.setSystemMessage(value);
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
proto.api.v1alpha1.delivery.Room303Transport.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.Room303Transport.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.Room303Transport} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.Room303Transport.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSystemMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.delivery.Room303SystemMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional Room303SystemMessage system_message = 1;
 * @return {?proto.api.v1alpha1.delivery.Room303SystemMessage}
 */
proto.api.v1alpha1.delivery.Room303Transport.prototype.getSystemMessage = function() {
  return /** @type{?proto.api.v1alpha1.delivery.Room303SystemMessage} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.Room303SystemMessage, 1));
};


/**
 * @param {?proto.api.v1alpha1.delivery.Room303SystemMessage|undefined} value
 * @return {!proto.api.v1alpha1.delivery.Room303Transport} returns this
*/
proto.api.v1alpha1.delivery.Room303Transport.prototype.setSystemMessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.api.v1alpha1.delivery.Room303Transport.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.Room303Transport} returns this
 */
proto.api.v1alpha1.delivery.Room303Transport.prototype.clearSystemMessage = function() {
  return this.setSystemMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.Room303Transport.prototype.hasSystemMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.v1alpha1.delivery.Room303SystemMessage.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.api.v1alpha1.delivery.Room303SystemMessage.UserCase = {
  USER_NOT_SET: 0,
  USERNAME: 2,
  USER_ID: 3
};

/**
 * @return {proto.api.v1alpha1.delivery.Room303SystemMessage.UserCase}
 */
proto.api.v1alpha1.delivery.Room303SystemMessage.prototype.getUserCase = function() {
  return /** @type {proto.api.v1alpha1.delivery.Room303SystemMessage.UserCase} */(jspb.Message.computeOneofCase(this, proto.api.v1alpha1.delivery.Room303SystemMessage.oneofGroups_[0]));
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
proto.api.v1alpha1.delivery.Room303SystemMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.Room303SystemMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.Room303SystemMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.Room303SystemMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    room: jspb.Message.getFieldWithDefault(msg, 1, ""),
    username: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.api.v1alpha1.delivery.Room303SystemMessage}
 */
proto.api.v1alpha1.delivery.Room303SystemMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.Room303SystemMessage;
  return proto.api.v1alpha1.delivery.Room303SystemMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.Room303SystemMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.Room303SystemMessage}
 */
proto.api.v1alpha1.delivery.Room303SystemMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoom(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
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
proto.api.v1alpha1.delivery.Room303SystemMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.Room303SystemMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.Room303SystemMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.Room303SystemMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoom();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string room = 1;
 * @return {string}
 */
proto.api.v1alpha1.delivery.Room303SystemMessage.prototype.getRoom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.Room303SystemMessage} returns this
 */
proto.api.v1alpha1.delivery.Room303SystemMessage.prototype.setRoom = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string username = 2;
 * @return {string}
 */
proto.api.v1alpha1.delivery.Room303SystemMessage.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.Room303SystemMessage} returns this
 */
proto.api.v1alpha1.delivery.Room303SystemMessage.prototype.setUsername = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.api.v1alpha1.delivery.Room303SystemMessage.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.Room303SystemMessage} returns this
 */
proto.api.v1alpha1.delivery.Room303SystemMessage.prototype.clearUsername = function() {
  return jspb.Message.setOneofField(this, 2, proto.api.v1alpha1.delivery.Room303SystemMessage.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.Room303SystemMessage.prototype.hasUsername = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string user_id = 3;
 * @return {string}
 */
proto.api.v1alpha1.delivery.Room303SystemMessage.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.Room303SystemMessage} returns this
 */
proto.api.v1alpha1.delivery.Room303SystemMessage.prototype.setUserId = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.api.v1alpha1.delivery.Room303SystemMessage.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.Room303SystemMessage} returns this
 */
proto.api.v1alpha1.delivery.Room303SystemMessage.prototype.clearUserId = function() {
  return jspb.Message.setOneofField(this, 3, proto.api.v1alpha1.delivery.Room303SystemMessage.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.Room303SystemMessage.prototype.hasUserId = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.api.v1alpha1.delivery.SMSTransport.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.SMSTransport.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.SMSTransport} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.SMSTransport.toObject = function(includeInstance, msg) {
  var f, obj = {
    destinationPhone: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sourcePhone: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.api.v1alpha1.delivery.SMSTransport}
 */
proto.api.v1alpha1.delivery.SMSTransport.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.SMSTransport;
  return proto.api.v1alpha1.delivery.SMSTransport.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.SMSTransport} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.SMSTransport}
 */
proto.api.v1alpha1.delivery.SMSTransport.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationPhone(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourcePhone(value);
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
proto.api.v1alpha1.delivery.SMSTransport.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.SMSTransport.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.SMSTransport} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.SMSTransport.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDestinationPhone();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSourcePhone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string destination_phone = 1;
 * @return {string}
 */
proto.api.v1alpha1.delivery.SMSTransport.prototype.getDestinationPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.SMSTransport} returns this
 */
proto.api.v1alpha1.delivery.SMSTransport.prototype.setDestinationPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string source_phone = 2;
 * @return {string}
 */
proto.api.v1alpha1.delivery.SMSTransport.prototype.getSourcePhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.SMSTransport} returns this
 */
proto.api.v1alpha1.delivery.SMSTransport.prototype.setSourcePhone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.api.v1alpha1.delivery.AESEncryptionRef.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.AESEncryptionRef.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.AESEncryptionRef} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.AESEncryptionRef.toObject = function(includeInstance, msg) {
  var f, obj = {
    aesSid: jspb.Message.getFieldWithDefault(msg, 1, "0")
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
 * @return {!proto.api.v1alpha1.delivery.AESEncryptionRef}
 */
proto.api.v1alpha1.delivery.AESEncryptionRef.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.AESEncryptionRef;
  return proto.api.v1alpha1.delivery.AESEncryptionRef.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.AESEncryptionRef} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.AESEncryptionRef}
 */
proto.api.v1alpha1.delivery.AESEncryptionRef.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAesSid(value);
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
proto.api.v1alpha1.delivery.AESEncryptionRef.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.AESEncryptionRef.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.AESEncryptionRef} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.AESEncryptionRef.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAesSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 aes_sid = 1;
 * @return {string}
 */
proto.api.v1alpha1.delivery.AESEncryptionRef.prototype.getAesSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.AESEncryptionRef} returns this
 */
proto.api.v1alpha1.delivery.AESEncryptionRef.prototype.setAesSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
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
proto.api.v1alpha1.delivery.PGPEncryptionRef.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.PGPEncryptionRef.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.PGPEncryptionRef} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.PGPEncryptionRef.toObject = function(includeInstance, msg) {
  var f, obj = {
    pgpSid: jspb.Message.getFieldWithDefault(msg, 1, "0")
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
 * @return {!proto.api.v1alpha1.delivery.PGPEncryptionRef}
 */
proto.api.v1alpha1.delivery.PGPEncryptionRef.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.PGPEncryptionRef;
  return proto.api.v1alpha1.delivery.PGPEncryptionRef.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.PGPEncryptionRef} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.PGPEncryptionRef}
 */
proto.api.v1alpha1.delivery.PGPEncryptionRef.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setPgpSid(value);
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
proto.api.v1alpha1.delivery.PGPEncryptionRef.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.PGPEncryptionRef.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.PGPEncryptionRef} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.PGPEncryptionRef.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPgpSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 pgp_sid = 1;
 * @return {string}
 */
proto.api.v1alpha1.delivery.PGPEncryptionRef.prototype.getPgpSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.PGPEncryptionRef} returns this
 */
proto.api.v1alpha1.delivery.PGPEncryptionRef.prototype.setPgpSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
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
proto.api.v1alpha1.delivery.PasswordRef.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.PasswordRef.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.PasswordRef} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.PasswordRef.toObject = function(includeInstance, msg) {
  var f, obj = {
    passwordSid: jspb.Message.getFieldWithDefault(msg, 1, "0")
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
 * @return {!proto.api.v1alpha1.delivery.PasswordRef}
 */
proto.api.v1alpha1.delivery.PasswordRef.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.PasswordRef;
  return proto.api.v1alpha1.delivery.PasswordRef.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.PasswordRef} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.PasswordRef}
 */
proto.api.v1alpha1.delivery.PasswordRef.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setPasswordSid(value);
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
proto.api.v1alpha1.delivery.PasswordRef.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.PasswordRef.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.PasswordRef} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.PasswordRef.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPasswordSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 password_sid = 1;
 * @return {string}
 */
proto.api.v1alpha1.delivery.PasswordRef.prototype.getPasswordSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.PasswordRef} returns this
 */
proto.api.v1alpha1.delivery.PasswordRef.prototype.setPasswordSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
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
proto.api.v1alpha1.delivery.SSHKeyRef.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.SSHKeyRef.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.SSHKeyRef} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.SSHKeyRef.toObject = function(includeInstance, msg) {
  var f, obj = {
    sshKeySid: jspb.Message.getFieldWithDefault(msg, 1, "0")
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
 * @return {!proto.api.v1alpha1.delivery.SSHKeyRef}
 */
proto.api.v1alpha1.delivery.SSHKeyRef.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.SSHKeyRef;
  return proto.api.v1alpha1.delivery.SSHKeyRef.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.SSHKeyRef} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.SSHKeyRef}
 */
proto.api.v1alpha1.delivery.SSHKeyRef.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setSshKeySid(value);
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
proto.api.v1alpha1.delivery.SSHKeyRef.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.SSHKeyRef.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.SSHKeyRef} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.SSHKeyRef.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSshKeySid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 ssh_key_sid = 1;
 * @return {string}
 */
proto.api.v1alpha1.delivery.SSHKeyRef.prototype.getSshKeySid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.SSHKeyRef} returns this
 */
proto.api.v1alpha1.delivery.SSHKeyRef.prototype.setSshKeySid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.v1alpha1.delivery.Encryption.oneofGroups_ = [[5,6]];

/**
 * @enum {number}
 */
proto.api.v1alpha1.delivery.Encryption.EncryptionCase = {
  ENCRYPTION_NOT_SET: 0,
  PGP_KEY_PAIR: 5,
  AES_PASSWORD: 6
};

/**
 * @return {proto.api.v1alpha1.delivery.Encryption.EncryptionCase}
 */
proto.api.v1alpha1.delivery.Encryption.prototype.getEncryptionCase = function() {
  return /** @type {proto.api.v1alpha1.delivery.Encryption.EncryptionCase} */(jspb.Message.computeOneofCase(this, proto.api.v1alpha1.delivery.Encryption.oneofGroups_[0]));
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
proto.api.v1alpha1.delivery.Encryption.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.Encryption.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.Encryption} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.Encryption.toObject = function(includeInstance, msg) {
  var f, obj = {
    encryptionSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    orgId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    pgpKeyPair: (f = msg.getPgpKeyPair()) && proto.api.v1alpha1.delivery.PGPKeyPair.toObject(includeInstance, f),
    aesPassword: (f = msg.getAesPassword()) && proto.api.v1alpha1.delivery.AESPassword.toObject(includeInstance, f),
    createdOn: (f = msg.getCreatedOn()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    lastEdited: (f = msg.getLastEdited()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.delivery.Encryption}
 */
proto.api.v1alpha1.delivery.Encryption.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.Encryption;
  return proto.api.v1alpha1.delivery.Encryption.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.Encryption} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.Encryption}
 */
proto.api.v1alpha1.delivery.Encryption.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEncryptionSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = new proto.api.v1alpha1.delivery.PGPKeyPair;
      reader.readMessage(value,proto.api.v1alpha1.delivery.PGPKeyPair.deserializeBinaryFromReader);
      msg.setPgpKeyPair(value);
      break;
    case 6:
      var value = new proto.api.v1alpha1.delivery.AESPassword;
      reader.readMessage(value,proto.api.v1alpha1.delivery.AESPassword.deserializeBinaryFromReader);
      msg.setAesPassword(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedOn(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastEdited(value);
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
proto.api.v1alpha1.delivery.Encryption.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.Encryption.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.Encryption} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.Encryption.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEncryptionSid();
  if (f !== 0) {
    writer.writeInt64(
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
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPgpKeyPair();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.api.v1alpha1.delivery.PGPKeyPair.serializeBinaryToWriter
    );
  }
  f = message.getAesPassword();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.api.v1alpha1.delivery.AESPassword.serializeBinaryToWriter
    );
  }
  f = message.getCreatedOn();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLastEdited();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 encryption_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.delivery.Encryption.prototype.getEncryptionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.delivery.Encryption} returns this
 */
proto.api.v1alpha1.delivery.Encryption.prototype.setEncryptionSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.delivery.Encryption.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.Encryption} returns this
 */
proto.api.v1alpha1.delivery.Encryption.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.api.v1alpha1.delivery.Encryption.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.Encryption} returns this
 */
proto.api.v1alpha1.delivery.Encryption.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.api.v1alpha1.delivery.Encryption.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.delivery.Encryption} returns this
 */
proto.api.v1alpha1.delivery.Encryption.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional PGPKeyPair pgp_key_pair = 5;
 * @return {?proto.api.v1alpha1.delivery.PGPKeyPair}
 */
proto.api.v1alpha1.delivery.Encryption.prototype.getPgpKeyPair = function() {
  return /** @type{?proto.api.v1alpha1.delivery.PGPKeyPair} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.PGPKeyPair, 5));
};


/**
 * @param {?proto.api.v1alpha1.delivery.PGPKeyPair|undefined} value
 * @return {!proto.api.v1alpha1.delivery.Encryption} returns this
*/
proto.api.v1alpha1.delivery.Encryption.prototype.setPgpKeyPair = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.api.v1alpha1.delivery.Encryption.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.Encryption} returns this
 */
proto.api.v1alpha1.delivery.Encryption.prototype.clearPgpKeyPair = function() {
  return this.setPgpKeyPair(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.Encryption.prototype.hasPgpKeyPair = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional AESPassword aes_password = 6;
 * @return {?proto.api.v1alpha1.delivery.AESPassword}
 */
proto.api.v1alpha1.delivery.Encryption.prototype.getAesPassword = function() {
  return /** @type{?proto.api.v1alpha1.delivery.AESPassword} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.delivery.AESPassword, 6));
};


/**
 * @param {?proto.api.v1alpha1.delivery.AESPassword|undefined} value
 * @return {!proto.api.v1alpha1.delivery.Encryption} returns this
*/
proto.api.v1alpha1.delivery.Encryption.prototype.setAesPassword = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.api.v1alpha1.delivery.Encryption.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.Encryption} returns this
 */
proto.api.v1alpha1.delivery.Encryption.prototype.clearAesPassword = function() {
  return this.setAesPassword(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.Encryption.prototype.hasAesPassword = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp created_on = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.delivery.Encryption.prototype.getCreatedOn = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.delivery.Encryption} returns this
*/
proto.api.v1alpha1.delivery.Encryption.prototype.setCreatedOn = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.Encryption} returns this
 */
proto.api.v1alpha1.delivery.Encryption.prototype.clearCreatedOn = function() {
  return this.setCreatedOn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.Encryption.prototype.hasCreatedOn = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.Timestamp last_edited = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.delivery.Encryption.prototype.getLastEdited = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.delivery.Encryption} returns this
*/
proto.api.v1alpha1.delivery.Encryption.prototype.setLastEdited = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.delivery.Encryption} returns this
 */
proto.api.v1alpha1.delivery.Encryption.prototype.clearLastEdited = function() {
  return this.setLastEdited(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.delivery.Encryption.prototype.hasLastEdited = function() {
  return jspb.Message.getField(this, 11) != null;
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
proto.api.v1alpha1.delivery.ListSMSNumbersReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.ListSMSNumbersReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.ListSMSNumbersReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListSMSNumbersReq.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.api.v1alpha1.delivery.ListSMSNumbersReq}
 */
proto.api.v1alpha1.delivery.ListSMSNumbersReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.ListSMSNumbersReq;
  return proto.api.v1alpha1.delivery.ListSMSNumbersReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.ListSMSNumbersReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.ListSMSNumbersReq}
 */
proto.api.v1alpha1.delivery.ListSMSNumbersReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.api.v1alpha1.delivery.ListSMSNumbersReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.ListSMSNumbersReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.ListSMSNumbersReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListSMSNumbersReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.delivery.ListSMSNumbersRes.repeatedFields_ = [1];



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
proto.api.v1alpha1.delivery.ListSMSNumbersRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.delivery.ListSMSNumbersRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.delivery.ListSMSNumbersRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListSMSNumbersRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    smsNumbersList: jspb.Message.toObjectList(msg.getSmsNumbersList(),
    api_commons_omnichannel_pb.SmsNumber.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.delivery.ListSMSNumbersRes}
 */
proto.api.v1alpha1.delivery.ListSMSNumbersRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.delivery.ListSMSNumbersRes;
  return proto.api.v1alpha1.delivery.ListSMSNumbersRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.delivery.ListSMSNumbersRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.delivery.ListSMSNumbersRes}
 */
proto.api.v1alpha1.delivery.ListSMSNumbersRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_omnichannel_pb.SmsNumber;
      reader.readMessage(value,api_commons_omnichannel_pb.SmsNumber.deserializeBinaryFromReader);
      msg.addSmsNumbers(value);
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
proto.api.v1alpha1.delivery.ListSMSNumbersRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.delivery.ListSMSNumbersRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.delivery.ListSMSNumbersRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.delivery.ListSMSNumbersRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsNumbersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      api_commons_omnichannel_pb.SmsNumber.serializeBinaryToWriter
    );
  }
};


/**
 * repeated api.commons.SmsNumber sms_numbers = 1;
 * @return {!Array<!proto.api.commons.SmsNumber>}
 */
proto.api.v1alpha1.delivery.ListSMSNumbersRes.prototype.getSmsNumbersList = function() {
  return /** @type{!Array<!proto.api.commons.SmsNumber>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_omnichannel_pb.SmsNumber, 1));
};


/**
 * @param {!Array<!proto.api.commons.SmsNumber>} value
 * @return {!proto.api.v1alpha1.delivery.ListSMSNumbersRes} returns this
*/
proto.api.v1alpha1.delivery.ListSMSNumbersRes.prototype.setSmsNumbersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.commons.SmsNumber=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.SmsNumber}
 */
proto.api.v1alpha1.delivery.ListSMSNumbersRes.prototype.addSmsNumbers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.commons.SmsNumber, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.delivery.ListSMSNumbersRes} returns this
 */
proto.api.v1alpha1.delivery.ListSMSNumbersRes.prototype.clearSmsNumbersList = function() {
  return this.setSmsNumbersList([]);
};


goog.object.extend(exports, proto.api.v1alpha1.delivery);
