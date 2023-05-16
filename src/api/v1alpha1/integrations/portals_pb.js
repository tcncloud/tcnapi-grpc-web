// source: api/v1alpha1/integrations/portals.proto
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

var api_commons_public_integrations_pb = require('../../../api/commons/public/integrations_pb.js');
goog.object.extend(proto, api_commons_public_integrations_pb);
var api_v1alpha1_integrations_service_pb = require('../../../api/v1alpha1/integrations/service_pb.js');
goog.object.extend(proto, api_v1alpha1_integrations_service_pb);
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
goog.exportSymbol('proto.api.v1alpha1.integrations.CreatePortalLinksReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.CreatePortalLinksRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.DeletePluginInstanceReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.DeletePluginInstanceRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.DeletePortalConfigRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.DeletePortalLinkReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.DeletePortalLinkRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.DeletePortalReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.DeletePortalRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.GetDetailedPortalReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.GetDetailedPortalRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.GetPluginInstanceReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.GetPluginInstanceRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.GetPortalConfigLogoReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.GetPortalConfigLogoRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.GetPortalConfigRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.GetPortalLinkReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.GetPortalLinkRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.GetPortalReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.GetPortalRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.ListDetailedPortalsReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.ListDetailedPortalsRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.ListFlowFieldNamesReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.ListFlowFieldNamesRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.ListPluginInstanceReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.ListPluginInstanceRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.ListPluginsReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.ListPluginsRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.ListPortalConfigsRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.ListPortalLinksReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.ListPortalLinksRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.ListPortalsReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.ListPortalsRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.UpdatePortalConfigLogoReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.UpdatePortalConfigLogoRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.UpsertPluginInstanceReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.UpsertPluginInstanceRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.UpsertPortalConfigReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.UpsertPortalConfigRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.UpsertPortalReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.UpsertPortalRes', null, global);
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
proto.api.v1alpha1.integrations.UpsertPortalConfigReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.UpsertPortalConfigReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.UpsertPortalConfigReq.displayName = 'proto.api.v1alpha1.integrations.UpsertPortalConfigReq';
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
proto.api.v1alpha1.integrations.UpsertPortalConfigRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.UpsertPortalConfigRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.UpsertPortalConfigRes.displayName = 'proto.api.v1alpha1.integrations.UpsertPortalConfigRes';
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
proto.api.v1alpha1.integrations.GetPortalConfigRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.GetPortalConfigRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.GetPortalConfigRes.displayName = 'proto.api.v1alpha1.integrations.GetPortalConfigRes';
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
proto.api.v1alpha1.integrations.DeletePortalConfigRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.DeletePortalConfigRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.DeletePortalConfigRes.displayName = 'proto.api.v1alpha1.integrations.DeletePortalConfigRes';
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
proto.api.v1alpha1.integrations.ListPortalConfigsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.ListPortalConfigsRes.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.ListPortalConfigsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.ListPortalConfigsRes.displayName = 'proto.api.v1alpha1.integrations.ListPortalConfigsRes';
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
proto.api.v1alpha1.integrations.UpdatePortalConfigLogoReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.UpdatePortalConfigLogoReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.UpdatePortalConfigLogoReq.displayName = 'proto.api.v1alpha1.integrations.UpdatePortalConfigLogoReq';
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
proto.api.v1alpha1.integrations.UpdatePortalConfigLogoRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.UpdatePortalConfigLogoRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.UpdatePortalConfigLogoRes.displayName = 'proto.api.v1alpha1.integrations.UpdatePortalConfigLogoRes';
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
proto.api.v1alpha1.integrations.GetPortalConfigLogoReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.GetPortalConfigLogoReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.GetPortalConfigLogoReq.displayName = 'proto.api.v1alpha1.integrations.GetPortalConfigLogoReq';
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
proto.api.v1alpha1.integrations.GetPortalConfigLogoRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.GetPortalConfigLogoRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.GetPortalConfigLogoRes.displayName = 'proto.api.v1alpha1.integrations.GetPortalConfigLogoRes';
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
proto.api.v1alpha1.integrations.UpsertPortalReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.UpsertPortalReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.UpsertPortalReq.displayName = 'proto.api.v1alpha1.integrations.UpsertPortalReq';
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
proto.api.v1alpha1.integrations.UpsertPortalRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.UpsertPortalRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.UpsertPortalRes.displayName = 'proto.api.v1alpha1.integrations.UpsertPortalRes';
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
proto.api.v1alpha1.integrations.GetPortalReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.GetPortalReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.GetPortalReq.displayName = 'proto.api.v1alpha1.integrations.GetPortalReq';
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
proto.api.v1alpha1.integrations.GetPortalRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.GetPortalRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.GetPortalRes.displayName = 'proto.api.v1alpha1.integrations.GetPortalRes';
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
proto.api.v1alpha1.integrations.DeletePortalReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.DeletePortalReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.DeletePortalReq.displayName = 'proto.api.v1alpha1.integrations.DeletePortalReq';
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
proto.api.v1alpha1.integrations.DeletePortalRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.DeletePortalRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.DeletePortalRes.displayName = 'proto.api.v1alpha1.integrations.DeletePortalRes';
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
proto.api.v1alpha1.integrations.ListPortalsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.ListPortalsReq.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.ListPortalsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.ListPortalsReq.displayName = 'proto.api.v1alpha1.integrations.ListPortalsReq';
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
proto.api.v1alpha1.integrations.ListPortalsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.ListPortalsRes.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.ListPortalsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.ListPortalsRes.displayName = 'proto.api.v1alpha1.integrations.ListPortalsRes';
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
proto.api.v1alpha1.integrations.ListDetailedPortalsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.ListDetailedPortalsReq.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.ListDetailedPortalsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.ListDetailedPortalsReq.displayName = 'proto.api.v1alpha1.integrations.ListDetailedPortalsReq';
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
proto.api.v1alpha1.integrations.ListDetailedPortalsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.ListDetailedPortalsRes.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.ListDetailedPortalsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.ListDetailedPortalsRes.displayName = 'proto.api.v1alpha1.integrations.ListDetailedPortalsRes';
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
proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity.displayName = 'proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity';
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
proto.api.v1alpha1.integrations.GetDetailedPortalReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.GetDetailedPortalReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.GetDetailedPortalReq.displayName = 'proto.api.v1alpha1.integrations.GetDetailedPortalReq';
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
proto.api.v1alpha1.integrations.GetDetailedPortalRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.GetDetailedPortalRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.GetDetailedPortalRes.displayName = 'proto.api.v1alpha1.integrations.GetDetailedPortalRes';
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
proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity.displayName = 'proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity';
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
proto.api.v1alpha1.integrations.UpsertPluginInstanceReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.UpsertPluginInstanceReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.UpsertPluginInstanceReq.displayName = 'proto.api.v1alpha1.integrations.UpsertPluginInstanceReq';
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
proto.api.v1alpha1.integrations.UpsertPluginInstanceRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.UpsertPluginInstanceRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.UpsertPluginInstanceRes.displayName = 'proto.api.v1alpha1.integrations.UpsertPluginInstanceRes';
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
proto.api.v1alpha1.integrations.GetPluginInstanceReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.GetPluginInstanceReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.GetPluginInstanceReq.displayName = 'proto.api.v1alpha1.integrations.GetPluginInstanceReq';
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
proto.api.v1alpha1.integrations.GetPluginInstanceRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.GetPluginInstanceRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.GetPluginInstanceRes.displayName = 'proto.api.v1alpha1.integrations.GetPluginInstanceRes';
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
proto.api.v1alpha1.integrations.DeletePluginInstanceReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.DeletePluginInstanceReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.DeletePluginInstanceReq.displayName = 'proto.api.v1alpha1.integrations.DeletePluginInstanceReq';
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
proto.api.v1alpha1.integrations.DeletePluginInstanceRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.DeletePluginInstanceRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.DeletePluginInstanceRes.displayName = 'proto.api.v1alpha1.integrations.DeletePluginInstanceRes';
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
proto.api.v1alpha1.integrations.ListPluginInstanceReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.ListPluginInstanceReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.ListPluginInstanceReq.displayName = 'proto.api.v1alpha1.integrations.ListPluginInstanceReq';
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
proto.api.v1alpha1.integrations.ListPluginInstanceRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.ListPluginInstanceRes.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.ListPluginInstanceRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.ListPluginInstanceRes.displayName = 'proto.api.v1alpha1.integrations.ListPluginInstanceRes';
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
proto.api.v1alpha1.integrations.ListPluginsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.ListPluginsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.ListPluginsReq.displayName = 'proto.api.v1alpha1.integrations.ListPluginsReq';
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
proto.api.v1alpha1.integrations.ListPluginsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.ListPluginsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.ListPluginsRes.displayName = 'proto.api.v1alpha1.integrations.ListPluginsRes';
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
proto.api.v1alpha1.integrations.ListPortalLinksReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.ListPortalLinksReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.ListPortalLinksReq.displayName = 'proto.api.v1alpha1.integrations.ListPortalLinksReq';
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
proto.api.v1alpha1.integrations.ListPortalLinksRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.ListPortalLinksRes.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.ListPortalLinksRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.ListPortalLinksRes.displayName = 'proto.api.v1alpha1.integrations.ListPortalLinksRes';
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
proto.api.v1alpha1.integrations.GetPortalLinkReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.GetPortalLinkReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.GetPortalLinkReq.displayName = 'proto.api.v1alpha1.integrations.GetPortalLinkReq';
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
proto.api.v1alpha1.integrations.GetPortalLinkRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.GetPortalLinkRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.GetPortalLinkRes.displayName = 'proto.api.v1alpha1.integrations.GetPortalLinkRes';
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
proto.api.v1alpha1.integrations.DeletePortalLinkReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.DeletePortalLinkReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.DeletePortalLinkReq.displayName = 'proto.api.v1alpha1.integrations.DeletePortalLinkReq';
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
proto.api.v1alpha1.integrations.DeletePortalLinkRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.DeletePortalLinkRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.DeletePortalLinkRes.displayName = 'proto.api.v1alpha1.integrations.DeletePortalLinkRes';
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
proto.api.v1alpha1.integrations.CreatePortalLinksReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.CreatePortalLinksReq.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.CreatePortalLinksReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.CreatePortalLinksReq.displayName = 'proto.api.v1alpha1.integrations.CreatePortalLinksReq';
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
proto.api.v1alpha1.integrations.CreatePortalLinksRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.CreatePortalLinksRes.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.CreatePortalLinksRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.CreatePortalLinksRes.displayName = 'proto.api.v1alpha1.integrations.CreatePortalLinksRes';
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
proto.api.v1alpha1.integrations.ListFlowFieldNamesReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.ListFlowFieldNamesReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.displayName = 'proto.api.v1alpha1.integrations.ListFlowFieldNamesReq';
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
proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity.displayName = 'proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity';
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
proto.api.v1alpha1.integrations.ListFlowFieldNamesRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.ListFlowFieldNamesRes.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.ListFlowFieldNamesRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.ListFlowFieldNamesRes.displayName = 'proto.api.v1alpha1.integrations.ListFlowFieldNamesRes';
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
proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsReq.displayName = 'proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsReq';
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
proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsRes.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsRes.displayName = 'proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsRes';
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
proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsReq.displayName = 'proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsReq';
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
proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsRes.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsRes.displayName = 'proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsRes';
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
proto.api.v1alpha1.integrations.UpsertPortalConfigReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.UpsertPortalConfigReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.UpsertPortalConfigReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.UpsertPortalConfigReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && api_v1alpha1_integrations_service_pb.PortalConfig.toObject(includeInstance, f),
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
 * @return {!proto.api.v1alpha1.integrations.UpsertPortalConfigReq}
 */
proto.api.v1alpha1.integrations.UpsertPortalConfigReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.UpsertPortalConfigReq;
  return proto.api.v1alpha1.integrations.UpsertPortalConfigReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.UpsertPortalConfigReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.UpsertPortalConfigReq}
 */
proto.api.v1alpha1.integrations.UpsertPortalConfigReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_v1alpha1_integrations_service_pb.PortalConfig;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.PortalConfig.deserializeBinaryFromReader);
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
proto.api.v1alpha1.integrations.UpsertPortalConfigReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.UpsertPortalConfigReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.UpsertPortalConfigReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.UpsertPortalConfigReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_v1alpha1_integrations_service_pb.PortalConfig.serializeBinaryToWriter
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
 * optional PortalConfig entity = 1;
 * @return {?proto.api.v1alpha1.integrations.PortalConfig}
 */
proto.api.v1alpha1.integrations.UpsertPortalConfigReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrations.PortalConfig} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_integrations_service_pb.PortalConfig, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrations.PortalConfig|undefined} value
 * @return {!proto.api.v1alpha1.integrations.UpsertPortalConfigReq} returns this
*/
proto.api.v1alpha1.integrations.UpsertPortalConfigReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.UpsertPortalConfigReq} returns this
 */
proto.api.v1alpha1.integrations.UpsertPortalConfigReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.UpsertPortalConfigReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.integrations.UpsertPortalConfigReq.prototype.getMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.integrations.UpsertPortalConfigReq} returns this
*/
proto.api.v1alpha1.integrations.UpsertPortalConfigReq.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.UpsertPortalConfigReq} returns this
 */
proto.api.v1alpha1.integrations.UpsertPortalConfigReq.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.UpsertPortalConfigReq.prototype.hasMask = function() {
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
proto.api.v1alpha1.integrations.UpsertPortalConfigRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.UpsertPortalConfigRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.UpsertPortalConfigRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.UpsertPortalConfigRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && api_v1alpha1_integrations_service_pb.PortalConfigId.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrations.UpsertPortalConfigRes}
 */
proto.api.v1alpha1.integrations.UpsertPortalConfigRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.UpsertPortalConfigRes;
  return proto.api.v1alpha1.integrations.UpsertPortalConfigRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.UpsertPortalConfigRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.UpsertPortalConfigRes}
 */
proto.api.v1alpha1.integrations.UpsertPortalConfigRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_v1alpha1_integrations_service_pb.PortalConfigId;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.PortalConfigId.deserializeBinaryFromReader);
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
proto.api.v1alpha1.integrations.UpsertPortalConfigRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.UpsertPortalConfigRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.UpsertPortalConfigRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.UpsertPortalConfigRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_v1alpha1_integrations_service_pb.PortalConfigId.serializeBinaryToWriter
    );
  }
};


/**
 * optional PortalConfigId entity = 1;
 * @return {?proto.api.v1alpha1.integrations.PortalConfigId}
 */
proto.api.v1alpha1.integrations.UpsertPortalConfigRes.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrations.PortalConfigId} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_integrations_service_pb.PortalConfigId, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrations.PortalConfigId|undefined} value
 * @return {!proto.api.v1alpha1.integrations.UpsertPortalConfigRes} returns this
*/
proto.api.v1alpha1.integrations.UpsertPortalConfigRes.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.UpsertPortalConfigRes} returns this
 */
proto.api.v1alpha1.integrations.UpsertPortalConfigRes.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.UpsertPortalConfigRes.prototype.hasEntity = function() {
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
proto.api.v1alpha1.integrations.GetPortalConfigRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.GetPortalConfigRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.GetPortalConfigRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetPortalConfigRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && api_v1alpha1_integrations_service_pb.PortalConfig.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrations.GetPortalConfigRes}
 */
proto.api.v1alpha1.integrations.GetPortalConfigRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.GetPortalConfigRes;
  return proto.api.v1alpha1.integrations.GetPortalConfigRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.GetPortalConfigRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.GetPortalConfigRes}
 */
proto.api.v1alpha1.integrations.GetPortalConfigRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_v1alpha1_integrations_service_pb.PortalConfig;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.PortalConfig.deserializeBinaryFromReader);
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
proto.api.v1alpha1.integrations.GetPortalConfigRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.GetPortalConfigRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.GetPortalConfigRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetPortalConfigRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_v1alpha1_integrations_service_pb.PortalConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional PortalConfig entity = 1;
 * @return {?proto.api.v1alpha1.integrations.PortalConfig}
 */
proto.api.v1alpha1.integrations.GetPortalConfigRes.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrations.PortalConfig} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_integrations_service_pb.PortalConfig, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrations.PortalConfig|undefined} value
 * @return {!proto.api.v1alpha1.integrations.GetPortalConfigRes} returns this
*/
proto.api.v1alpha1.integrations.GetPortalConfigRes.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.GetPortalConfigRes} returns this
 */
proto.api.v1alpha1.integrations.GetPortalConfigRes.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.GetPortalConfigRes.prototype.hasEntity = function() {
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
proto.api.v1alpha1.integrations.DeletePortalConfigRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.DeletePortalConfigRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.DeletePortalConfigRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.DeletePortalConfigRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.integrations.DeletePortalConfigRes}
 */
proto.api.v1alpha1.integrations.DeletePortalConfigRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.DeletePortalConfigRes;
  return proto.api.v1alpha1.integrations.DeletePortalConfigRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.DeletePortalConfigRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.DeletePortalConfigRes}
 */
proto.api.v1alpha1.integrations.DeletePortalConfigRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.integrations.DeletePortalConfigRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.DeletePortalConfigRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.DeletePortalConfigRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.DeletePortalConfigRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.ListPortalConfigsRes.repeatedFields_ = [1];



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
proto.api.v1alpha1.integrations.ListPortalConfigsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.ListPortalConfigsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.ListPortalConfigsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListPortalConfigsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entitiesList: jspb.Message.toObjectList(msg.getEntitiesList(),
    api_v1alpha1_integrations_service_pb.PortalConfig.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.api.v1alpha1.integrations.ListPortalConfigsRes}
 */
proto.api.v1alpha1.integrations.ListPortalConfigsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.ListPortalConfigsRes;
  return proto.api.v1alpha1.integrations.ListPortalConfigsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.ListPortalConfigsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.ListPortalConfigsRes}
 */
proto.api.v1alpha1.integrations.ListPortalConfigsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_v1alpha1_integrations_service_pb.PortalConfig;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.PortalConfig.deserializeBinaryFromReader);
      msg.addEntities(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
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
proto.api.v1alpha1.integrations.ListPortalConfigsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.ListPortalConfigsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.ListPortalConfigsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListPortalConfigsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      api_v1alpha1_integrations_service_pb.PortalConfig.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated PortalConfig entities = 1;
 * @return {!Array<!proto.api.v1alpha1.integrations.PortalConfig>}
 */
proto.api.v1alpha1.integrations.ListPortalConfigsRes.prototype.getEntitiesList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.PortalConfig>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_v1alpha1_integrations_service_pb.PortalConfig, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.PortalConfig>} value
 * @return {!proto.api.v1alpha1.integrations.ListPortalConfigsRes} returns this
*/
proto.api.v1alpha1.integrations.ListPortalConfigsRes.prototype.setEntitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.PortalConfig=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.PortalConfig}
 */
proto.api.v1alpha1.integrations.ListPortalConfigsRes.prototype.addEntities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.integrations.PortalConfig, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.ListPortalConfigsRes} returns this
 */
proto.api.v1alpha1.integrations.ListPortalConfigsRes.prototype.clearEntitiesList = function() {
  return this.setEntitiesList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.api.v1alpha1.integrations.ListPortalConfigsRes.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.ListPortalConfigsRes} returns this
 */
proto.api.v1alpha1.integrations.ListPortalConfigsRes.prototype.setNextPageToken = function(value) {
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
proto.api.v1alpha1.integrations.UpdatePortalConfigLogoReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.UpdatePortalConfigLogoReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.UpdatePortalConfigLogoReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.UpdatePortalConfigLogoReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && api_v1alpha1_integrations_service_pb.PortalConfig.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrations.UpdatePortalConfigLogoReq}
 */
proto.api.v1alpha1.integrations.UpdatePortalConfigLogoReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.UpdatePortalConfigLogoReq;
  return proto.api.v1alpha1.integrations.UpdatePortalConfigLogoReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.UpdatePortalConfigLogoReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.UpdatePortalConfigLogoReq}
 */
proto.api.v1alpha1.integrations.UpdatePortalConfigLogoReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_v1alpha1_integrations_service_pb.PortalConfig;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.PortalConfig.deserializeBinaryFromReader);
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
proto.api.v1alpha1.integrations.UpdatePortalConfigLogoReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.UpdatePortalConfigLogoReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.UpdatePortalConfigLogoReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.UpdatePortalConfigLogoReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_v1alpha1_integrations_service_pb.PortalConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional PortalConfig entity = 1;
 * @return {?proto.api.v1alpha1.integrations.PortalConfig}
 */
proto.api.v1alpha1.integrations.UpdatePortalConfigLogoReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrations.PortalConfig} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_integrations_service_pb.PortalConfig, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrations.PortalConfig|undefined} value
 * @return {!proto.api.v1alpha1.integrations.UpdatePortalConfigLogoReq} returns this
*/
proto.api.v1alpha1.integrations.UpdatePortalConfigLogoReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.UpdatePortalConfigLogoReq} returns this
 */
proto.api.v1alpha1.integrations.UpdatePortalConfigLogoReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.UpdatePortalConfigLogoReq.prototype.hasEntity = function() {
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
proto.api.v1alpha1.integrations.UpdatePortalConfigLogoRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.UpdatePortalConfigLogoRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.UpdatePortalConfigLogoRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.UpdatePortalConfigLogoRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.integrations.UpdatePortalConfigLogoRes}
 */
proto.api.v1alpha1.integrations.UpdatePortalConfigLogoRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.UpdatePortalConfigLogoRes;
  return proto.api.v1alpha1.integrations.UpdatePortalConfigLogoRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.UpdatePortalConfigLogoRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.UpdatePortalConfigLogoRes}
 */
proto.api.v1alpha1.integrations.UpdatePortalConfigLogoRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.integrations.UpdatePortalConfigLogoRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.UpdatePortalConfigLogoRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.UpdatePortalConfigLogoRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.UpdatePortalConfigLogoRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.integrations.GetPortalConfigLogoReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.GetPortalConfigLogoReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.GetPortalConfigLogoReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetPortalConfigLogoReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && api_v1alpha1_integrations_service_pb.PortalConfigId.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrations.GetPortalConfigLogoReq}
 */
proto.api.v1alpha1.integrations.GetPortalConfigLogoReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.GetPortalConfigLogoReq;
  return proto.api.v1alpha1.integrations.GetPortalConfigLogoReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.GetPortalConfigLogoReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.GetPortalConfigLogoReq}
 */
proto.api.v1alpha1.integrations.GetPortalConfigLogoReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_v1alpha1_integrations_service_pb.PortalConfigId;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.PortalConfigId.deserializeBinaryFromReader);
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
proto.api.v1alpha1.integrations.GetPortalConfigLogoReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.GetPortalConfigLogoReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.GetPortalConfigLogoReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetPortalConfigLogoReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_v1alpha1_integrations_service_pb.PortalConfigId.serializeBinaryToWriter
    );
  }
};


/**
 * optional PortalConfigId entity = 1;
 * @return {?proto.api.v1alpha1.integrations.PortalConfigId}
 */
proto.api.v1alpha1.integrations.GetPortalConfigLogoReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrations.PortalConfigId} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_integrations_service_pb.PortalConfigId, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrations.PortalConfigId|undefined} value
 * @return {!proto.api.v1alpha1.integrations.GetPortalConfigLogoReq} returns this
*/
proto.api.v1alpha1.integrations.GetPortalConfigLogoReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.GetPortalConfigLogoReq} returns this
 */
proto.api.v1alpha1.integrations.GetPortalConfigLogoReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.GetPortalConfigLogoReq.prototype.hasEntity = function() {
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
proto.api.v1alpha1.integrations.GetPortalConfigLogoRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.GetPortalConfigLogoRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.GetPortalConfigLogoRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetPortalConfigLogoRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: msg.getEntity_asB64()
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
 * @return {!proto.api.v1alpha1.integrations.GetPortalConfigLogoRes}
 */
proto.api.v1alpha1.integrations.GetPortalConfigLogoRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.GetPortalConfigLogoRes;
  return proto.api.v1alpha1.integrations.GetPortalConfigLogoRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.GetPortalConfigLogoRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.GetPortalConfigLogoRes}
 */
proto.api.v1alpha1.integrations.GetPortalConfigLogoRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
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
proto.api.v1alpha1.integrations.GetPortalConfigLogoRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.GetPortalConfigLogoRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.GetPortalConfigLogoRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetPortalConfigLogoRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes entity = 1;
 * @return {string}
 */
proto.api.v1alpha1.integrations.GetPortalConfigLogoRes.prototype.getEntity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes entity = 1;
 * This is a type-conversion wrapper around `getEntity()`
 * @return {string}
 */
proto.api.v1alpha1.integrations.GetPortalConfigLogoRes.prototype.getEntity_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getEntity()));
};


/**
 * optional bytes entity = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getEntity()`
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.integrations.GetPortalConfigLogoRes.prototype.getEntity_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getEntity()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.api.v1alpha1.integrations.GetPortalConfigLogoRes} returns this
 */
proto.api.v1alpha1.integrations.GetPortalConfigLogoRes.prototype.setEntity = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
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
proto.api.v1alpha1.integrations.UpsertPortalReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.UpsertPortalReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.UpsertPortalReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.UpsertPortalReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && api_v1alpha1_integrations_service_pb.Portal.toObject(includeInstance, f),
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
 * @return {!proto.api.v1alpha1.integrations.UpsertPortalReq}
 */
proto.api.v1alpha1.integrations.UpsertPortalReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.UpsertPortalReq;
  return proto.api.v1alpha1.integrations.UpsertPortalReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.UpsertPortalReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.UpsertPortalReq}
 */
proto.api.v1alpha1.integrations.UpsertPortalReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_v1alpha1_integrations_service_pb.Portal;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.Portal.deserializeBinaryFromReader);
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
proto.api.v1alpha1.integrations.UpsertPortalReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.UpsertPortalReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.UpsertPortalReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.UpsertPortalReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_v1alpha1_integrations_service_pb.Portal.serializeBinaryToWriter
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
 * optional Portal entity = 1;
 * @return {?proto.api.v1alpha1.integrations.Portal}
 */
proto.api.v1alpha1.integrations.UpsertPortalReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrations.Portal} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_integrations_service_pb.Portal, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrations.Portal|undefined} value
 * @return {!proto.api.v1alpha1.integrations.UpsertPortalReq} returns this
*/
proto.api.v1alpha1.integrations.UpsertPortalReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.UpsertPortalReq} returns this
 */
proto.api.v1alpha1.integrations.UpsertPortalReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.UpsertPortalReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.integrations.UpsertPortalReq.prototype.getMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.integrations.UpsertPortalReq} returns this
*/
proto.api.v1alpha1.integrations.UpsertPortalReq.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.UpsertPortalReq} returns this
 */
proto.api.v1alpha1.integrations.UpsertPortalReq.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.UpsertPortalReq.prototype.hasMask = function() {
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
proto.api.v1alpha1.integrations.UpsertPortalRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.UpsertPortalRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.UpsertPortalRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.UpsertPortalRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && api_v1alpha1_integrations_service_pb.PortalId.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrations.UpsertPortalRes}
 */
proto.api.v1alpha1.integrations.UpsertPortalRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.UpsertPortalRes;
  return proto.api.v1alpha1.integrations.UpsertPortalRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.UpsertPortalRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.UpsertPortalRes}
 */
proto.api.v1alpha1.integrations.UpsertPortalRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_v1alpha1_integrations_service_pb.PortalId;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.PortalId.deserializeBinaryFromReader);
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
proto.api.v1alpha1.integrations.UpsertPortalRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.UpsertPortalRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.UpsertPortalRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.UpsertPortalRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_v1alpha1_integrations_service_pb.PortalId.serializeBinaryToWriter
    );
  }
};


/**
 * optional PortalId entity = 1;
 * @return {?proto.api.v1alpha1.integrations.PortalId}
 */
proto.api.v1alpha1.integrations.UpsertPortalRes.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrations.PortalId} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_integrations_service_pb.PortalId, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrations.PortalId|undefined} value
 * @return {!proto.api.v1alpha1.integrations.UpsertPortalRes} returns this
*/
proto.api.v1alpha1.integrations.UpsertPortalRes.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.UpsertPortalRes} returns this
 */
proto.api.v1alpha1.integrations.UpsertPortalRes.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.UpsertPortalRes.prototype.hasEntity = function() {
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
proto.api.v1alpha1.integrations.GetPortalReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.GetPortalReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.GetPortalReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetPortalReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && api_v1alpha1_integrations_service_pb.PortalId.toObject(includeInstance, f),
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
 * @return {!proto.api.v1alpha1.integrations.GetPortalReq}
 */
proto.api.v1alpha1.integrations.GetPortalReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.GetPortalReq;
  return proto.api.v1alpha1.integrations.GetPortalReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.GetPortalReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.GetPortalReq}
 */
proto.api.v1alpha1.integrations.GetPortalReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_v1alpha1_integrations_service_pb.PortalId;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.PortalId.deserializeBinaryFromReader);
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
proto.api.v1alpha1.integrations.GetPortalReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.GetPortalReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.GetPortalReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetPortalReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_v1alpha1_integrations_service_pb.PortalId.serializeBinaryToWriter
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
 * optional PortalId entity = 1;
 * @return {?proto.api.v1alpha1.integrations.PortalId}
 */
proto.api.v1alpha1.integrations.GetPortalReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrations.PortalId} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_integrations_service_pb.PortalId, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrations.PortalId|undefined} value
 * @return {!proto.api.v1alpha1.integrations.GetPortalReq} returns this
*/
proto.api.v1alpha1.integrations.GetPortalReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.GetPortalReq} returns this
 */
proto.api.v1alpha1.integrations.GetPortalReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.GetPortalReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.integrations.GetPortalReq.prototype.getMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.integrations.GetPortalReq} returns this
*/
proto.api.v1alpha1.integrations.GetPortalReq.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.GetPortalReq} returns this
 */
proto.api.v1alpha1.integrations.GetPortalReq.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.GetPortalReq.prototype.hasMask = function() {
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
proto.api.v1alpha1.integrations.GetPortalRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.GetPortalRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.GetPortalRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetPortalRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && api_v1alpha1_integrations_service_pb.Portal.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrations.GetPortalRes}
 */
proto.api.v1alpha1.integrations.GetPortalRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.GetPortalRes;
  return proto.api.v1alpha1.integrations.GetPortalRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.GetPortalRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.GetPortalRes}
 */
proto.api.v1alpha1.integrations.GetPortalRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_v1alpha1_integrations_service_pb.Portal;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.Portal.deserializeBinaryFromReader);
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
proto.api.v1alpha1.integrations.GetPortalRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.GetPortalRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.GetPortalRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetPortalRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_v1alpha1_integrations_service_pb.Portal.serializeBinaryToWriter
    );
  }
};


/**
 * optional Portal entity = 1;
 * @return {?proto.api.v1alpha1.integrations.Portal}
 */
proto.api.v1alpha1.integrations.GetPortalRes.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrations.Portal} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_integrations_service_pb.Portal, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrations.Portal|undefined} value
 * @return {!proto.api.v1alpha1.integrations.GetPortalRes} returns this
*/
proto.api.v1alpha1.integrations.GetPortalRes.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.GetPortalRes} returns this
 */
proto.api.v1alpha1.integrations.GetPortalRes.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.GetPortalRes.prototype.hasEntity = function() {
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
proto.api.v1alpha1.integrations.DeletePortalReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.DeletePortalReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.DeletePortalReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.DeletePortalReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && api_v1alpha1_integrations_service_pb.PortalId.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrations.DeletePortalReq}
 */
proto.api.v1alpha1.integrations.DeletePortalReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.DeletePortalReq;
  return proto.api.v1alpha1.integrations.DeletePortalReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.DeletePortalReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.DeletePortalReq}
 */
proto.api.v1alpha1.integrations.DeletePortalReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_v1alpha1_integrations_service_pb.PortalId;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.PortalId.deserializeBinaryFromReader);
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
proto.api.v1alpha1.integrations.DeletePortalReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.DeletePortalReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.DeletePortalReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.DeletePortalReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_v1alpha1_integrations_service_pb.PortalId.serializeBinaryToWriter
    );
  }
};


/**
 * optional PortalId entity = 1;
 * @return {?proto.api.v1alpha1.integrations.PortalId}
 */
proto.api.v1alpha1.integrations.DeletePortalReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrations.PortalId} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_integrations_service_pb.PortalId, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrations.PortalId|undefined} value
 * @return {!proto.api.v1alpha1.integrations.DeletePortalReq} returns this
*/
proto.api.v1alpha1.integrations.DeletePortalReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.DeletePortalReq} returns this
 */
proto.api.v1alpha1.integrations.DeletePortalReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.DeletePortalReq.prototype.hasEntity = function() {
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
proto.api.v1alpha1.integrations.DeletePortalRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.DeletePortalRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.DeletePortalRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.DeletePortalRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.integrations.DeletePortalRes}
 */
proto.api.v1alpha1.integrations.DeletePortalRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.DeletePortalRes;
  return proto.api.v1alpha1.integrations.DeletePortalRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.DeletePortalRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.DeletePortalRes}
 */
proto.api.v1alpha1.integrations.DeletePortalRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.integrations.DeletePortalRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.DeletePortalRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.DeletePortalRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.DeletePortalRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.ListPortalsReq.repeatedFields_ = [5];



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
proto.api.v1alpha1.integrations.ListPortalsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.ListPortalsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.ListPortalsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListPortalsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && api_v1alpha1_integrations_service_pb.PortalId.toObject(includeInstance, f),
    mask: (f = msg.getMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    page: jspb.Message.getFieldWithDefault(msg, 4, 0),
    ptypesList: jspb.Message.toObjectList(msg.getPtypesList(),
    api_v1alpha1_integrations_service_pb.PortalType.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.integrations.ListPortalsReq}
 */
proto.api.v1alpha1.integrations.ListPortalsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.ListPortalsReq;
  return proto.api.v1alpha1.integrations.ListPortalsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.ListPortalsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.ListPortalsReq}
 */
proto.api.v1alpha1.integrations.ListPortalsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_v1alpha1_integrations_service_pb.PortalId;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.PortalId.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setMask(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 5:
      var value = new api_v1alpha1_integrations_service_pb.PortalType;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.PortalType.deserializeBinaryFromReader);
      msg.addPtypes(value);
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
proto.api.v1alpha1.integrations.ListPortalsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.ListPortalsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.ListPortalsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListPortalsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_v1alpha1_integrations_service_pb.PortalId.serializeBinaryToWriter
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
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPtypesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      api_v1alpha1_integrations_service_pb.PortalType.serializeBinaryToWriter
    );
  }
};


/**
 * optional PortalId entity = 1;
 * @return {?proto.api.v1alpha1.integrations.PortalId}
 */
proto.api.v1alpha1.integrations.ListPortalsReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrations.PortalId} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_integrations_service_pb.PortalId, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrations.PortalId|undefined} value
 * @return {!proto.api.v1alpha1.integrations.ListPortalsReq} returns this
*/
proto.api.v1alpha1.integrations.ListPortalsReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.ListPortalsReq} returns this
 */
proto.api.v1alpha1.integrations.ListPortalsReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.ListPortalsReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.integrations.ListPortalsReq.prototype.getMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.integrations.ListPortalsReq} returns this
*/
proto.api.v1alpha1.integrations.ListPortalsReq.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.ListPortalsReq} returns this
 */
proto.api.v1alpha1.integrations.ListPortalsReq.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.ListPortalsReq.prototype.hasMask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.api.v1alpha1.integrations.ListPortalsReq.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.ListPortalsReq} returns this
 */
proto.api.v1alpha1.integrations.ListPortalsReq.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 page = 4;
 * @return {number}
 */
proto.api.v1alpha1.integrations.ListPortalsReq.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.ListPortalsReq} returns this
 */
proto.api.v1alpha1.integrations.ListPortalsReq.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated PortalType ptypes = 5;
 * @return {!Array<!proto.api.v1alpha1.integrations.PortalType>}
 */
proto.api.v1alpha1.integrations.ListPortalsReq.prototype.getPtypesList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.PortalType>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_v1alpha1_integrations_service_pb.PortalType, 5));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.PortalType>} value
 * @return {!proto.api.v1alpha1.integrations.ListPortalsReq} returns this
*/
proto.api.v1alpha1.integrations.ListPortalsReq.prototype.setPtypesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.PortalType=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.PortalType}
 */
proto.api.v1alpha1.integrations.ListPortalsReq.prototype.addPtypes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.api.v1alpha1.integrations.PortalType, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.ListPortalsReq} returns this
 */
proto.api.v1alpha1.integrations.ListPortalsReq.prototype.clearPtypesList = function() {
  return this.setPtypesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.ListPortalsRes.repeatedFields_ = [1];



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
proto.api.v1alpha1.integrations.ListPortalsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.ListPortalsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.ListPortalsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListPortalsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entitiesList: jspb.Message.toObjectList(msg.getEntitiesList(),
    api_v1alpha1_integrations_service_pb.Portal.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.integrations.ListPortalsRes}
 */
proto.api.v1alpha1.integrations.ListPortalsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.ListPortalsRes;
  return proto.api.v1alpha1.integrations.ListPortalsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.ListPortalsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.ListPortalsRes}
 */
proto.api.v1alpha1.integrations.ListPortalsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_v1alpha1_integrations_service_pb.Portal;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.Portal.deserializeBinaryFromReader);
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
proto.api.v1alpha1.integrations.ListPortalsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.ListPortalsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.ListPortalsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListPortalsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      api_v1alpha1_integrations_service_pb.Portal.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Portal entities = 1;
 * @return {!Array<!proto.api.v1alpha1.integrations.Portal>}
 */
proto.api.v1alpha1.integrations.ListPortalsRes.prototype.getEntitiesList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.Portal>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_v1alpha1_integrations_service_pb.Portal, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.Portal>} value
 * @return {!proto.api.v1alpha1.integrations.ListPortalsRes} returns this
*/
proto.api.v1alpha1.integrations.ListPortalsRes.prototype.setEntitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.Portal=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.Portal}
 */
proto.api.v1alpha1.integrations.ListPortalsRes.prototype.addEntities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.integrations.Portal, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.ListPortalsRes} returns this
 */
proto.api.v1alpha1.integrations.ListPortalsRes.prototype.clearEntitiesList = function() {
  return this.setEntitiesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsReq.repeatedFields_ = [7];



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
proto.api.v1alpha1.integrations.ListDetailedPortalsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.ListDetailedPortalsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.ListDetailedPortalsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && api_v1alpha1_integrations_service_pb.PortalId.toObject(includeInstance, f),
    portalMask: (f = msg.getPortalMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    portalConfigMask: (f = msg.getPortalConfigMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    pluginInstanceMask: (f = msg.getPluginInstanceMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    pageSize: jspb.Message.getFieldWithDefault(msg, 5, 0),
    page: jspb.Message.getFieldWithDefault(msg, 6, 0),
    ptypesList: jspb.Message.toObjectList(msg.getPtypesList(),
    api_v1alpha1_integrations_service_pb.PortalType.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.integrations.ListDetailedPortalsReq}
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.ListDetailedPortalsReq;
  return proto.api.v1alpha1.integrations.ListDetailedPortalsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.ListDetailedPortalsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.ListDetailedPortalsReq}
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_v1alpha1_integrations_service_pb.PortalId;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.PortalId.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setPortalMask(value);
      break;
    case 3:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setPortalConfigMask(value);
      break;
    case 4:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setPluginInstanceMask(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 7:
      var value = new api_v1alpha1_integrations_service_pb.PortalType;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.PortalType.deserializeBinaryFromReader);
      msg.addPtypes(value);
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
proto.api.v1alpha1.integrations.ListDetailedPortalsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.ListDetailedPortalsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.ListDetailedPortalsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_v1alpha1_integrations_service_pb.PortalId.serializeBinaryToWriter
    );
  }
  f = message.getPortalMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getPortalConfigMask();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getPluginInstanceMask();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getPtypesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      api_v1alpha1_integrations_service_pb.PortalType.serializeBinaryToWriter
    );
  }
};


/**
 * optional PortalId entity = 1;
 * @return {?proto.api.v1alpha1.integrations.PortalId}
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrations.PortalId} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_integrations_service_pb.PortalId, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrations.PortalId|undefined} value
 * @return {!proto.api.v1alpha1.integrations.ListDetailedPortalsReq} returns this
*/
proto.api.v1alpha1.integrations.ListDetailedPortalsReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.ListDetailedPortalsReq} returns this
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask portal_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsReq.prototype.getPortalMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.integrations.ListDetailedPortalsReq} returns this
*/
proto.api.v1alpha1.integrations.ListDetailedPortalsReq.prototype.setPortalMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.ListDetailedPortalsReq} returns this
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsReq.prototype.clearPortalMask = function() {
  return this.setPortalMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsReq.prototype.hasPortalMask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.FieldMask portal_config_mask = 3;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsReq.prototype.getPortalConfigMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 3));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.integrations.ListDetailedPortalsReq} returns this
*/
proto.api.v1alpha1.integrations.ListDetailedPortalsReq.prototype.setPortalConfigMask = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.ListDetailedPortalsReq} returns this
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsReq.prototype.clearPortalConfigMask = function() {
  return this.setPortalConfigMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsReq.prototype.hasPortalConfigMask = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.FieldMask plugin_instance_mask = 4;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsReq.prototype.getPluginInstanceMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 4));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.integrations.ListDetailedPortalsReq} returns this
*/
proto.api.v1alpha1.integrations.ListDetailedPortalsReq.prototype.setPluginInstanceMask = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.ListDetailedPortalsReq} returns this
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsReq.prototype.clearPluginInstanceMask = function() {
  return this.setPluginInstanceMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsReq.prototype.hasPluginInstanceMask = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 page_size = 5;
 * @return {number}
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsReq.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.ListDetailedPortalsReq} returns this
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsReq.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 page = 6;
 * @return {number}
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsReq.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.ListDetailedPortalsReq} returns this
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsReq.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * repeated PortalType ptypes = 7;
 * @return {!Array<!proto.api.v1alpha1.integrations.PortalType>}
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsReq.prototype.getPtypesList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.PortalType>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_v1alpha1_integrations_service_pb.PortalType, 7));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.PortalType>} value
 * @return {!proto.api.v1alpha1.integrations.ListDetailedPortalsReq} returns this
*/
proto.api.v1alpha1.integrations.ListDetailedPortalsReq.prototype.setPtypesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.PortalType=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.PortalType}
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsReq.prototype.addPtypes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.api.v1alpha1.integrations.PortalType, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.ListDetailedPortalsReq} returns this
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsReq.prototype.clearPtypesList = function() {
  return this.setPtypesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsRes.repeatedFields_ = [4];



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
proto.api.v1alpha1.integrations.ListDetailedPortalsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.ListDetailedPortalsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.ListDetailedPortalsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entitiesList: jspb.Message.toObjectList(msg.getEntitiesList(),
    proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.integrations.ListDetailedPortalsRes}
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.ListDetailedPortalsRes;
  return proto.api.v1alpha1.integrations.ListDetailedPortalsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.ListDetailedPortalsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.ListDetailedPortalsRes}
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = new proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity;
      reader.readMessage(value,proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity.deserializeBinaryFromReader);
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
proto.api.v1alpha1.integrations.ListDetailedPortalsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.ListDetailedPortalsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.ListDetailedPortalsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity.repeatedFields_ = [3];



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
proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity.toObject = function(includeInstance, msg) {
  var f, obj = {
    portal: (f = msg.getPortal()) && api_v1alpha1_integrations_service_pb.Portal.toObject(includeInstance, f),
    portalConfig: (f = msg.getPortalConfig()) && api_v1alpha1_integrations_service_pb.PortalConfig.toObject(includeInstance, f),
    pluginInstancesList: jspb.Message.toObjectList(msg.getPluginInstancesList(),
    api_v1alpha1_integrations_service_pb.PluginInstance.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity}
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity;
  return proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity}
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_v1alpha1_integrations_service_pb.Portal;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.Portal.deserializeBinaryFromReader);
      msg.setPortal(value);
      break;
    case 2:
      var value = new api_v1alpha1_integrations_service_pb.PortalConfig;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.PortalConfig.deserializeBinaryFromReader);
      msg.setPortalConfig(value);
      break;
    case 3:
      var value = new api_v1alpha1_integrations_service_pb.PluginInstance;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.PluginInstance.deserializeBinaryFromReader);
      msg.addPluginInstances(value);
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
proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPortal();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_v1alpha1_integrations_service_pb.Portal.serializeBinaryToWriter
    );
  }
  f = message.getPortalConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      api_v1alpha1_integrations_service_pb.PortalConfig.serializeBinaryToWriter
    );
  }
  f = message.getPluginInstancesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      api_v1alpha1_integrations_service_pb.PluginInstance.serializeBinaryToWriter
    );
  }
};


/**
 * optional Portal portal = 1;
 * @return {?proto.api.v1alpha1.integrations.Portal}
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity.prototype.getPortal = function() {
  return /** @type{?proto.api.v1alpha1.integrations.Portal} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_integrations_service_pb.Portal, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrations.Portal|undefined} value
 * @return {!proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity} returns this
*/
proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity.prototype.setPortal = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity} returns this
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity.prototype.clearPortal = function() {
  return this.setPortal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity.prototype.hasPortal = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PortalConfig portal_config = 2;
 * @return {?proto.api.v1alpha1.integrations.PortalConfig}
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity.prototype.getPortalConfig = function() {
  return /** @type{?proto.api.v1alpha1.integrations.PortalConfig} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_integrations_service_pb.PortalConfig, 2));
};


/**
 * @param {?proto.api.v1alpha1.integrations.PortalConfig|undefined} value
 * @return {!proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity} returns this
*/
proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity.prototype.setPortalConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity} returns this
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity.prototype.clearPortalConfig = function() {
  return this.setPortalConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity.prototype.hasPortalConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated PluginInstance plugin_instances = 3;
 * @return {!Array<!proto.api.v1alpha1.integrations.PluginInstance>}
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity.prototype.getPluginInstancesList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.PluginInstance>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_v1alpha1_integrations_service_pb.PluginInstance, 3));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.PluginInstance>} value
 * @return {!proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity} returns this
*/
proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity.prototype.setPluginInstancesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.PluginInstance=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.PluginInstance}
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity.prototype.addPluginInstances = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.api.v1alpha1.integrations.PluginInstance, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity} returns this
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity.prototype.clearPluginInstancesList = function() {
  return this.setPluginInstancesList([]);
};


/**
 * repeated Entity entities = 4;
 * @return {!Array<!proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity>}
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsRes.prototype.getEntitiesList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity, 4));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity>} value
 * @return {!proto.api.v1alpha1.integrations.ListDetailedPortalsRes} returns this
*/
proto.api.v1alpha1.integrations.ListDetailedPortalsRes.prototype.setEntitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity}
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsRes.prototype.addEntities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.api.v1alpha1.integrations.ListDetailedPortalsRes.Entity, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.ListDetailedPortalsRes} returns this
 */
proto.api.v1alpha1.integrations.ListDetailedPortalsRes.prototype.clearEntitiesList = function() {
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
proto.api.v1alpha1.integrations.GetDetailedPortalReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.GetDetailedPortalReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.GetDetailedPortalReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetDetailedPortalReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && api_v1alpha1_integrations_service_pb.PortalId.toObject(includeInstance, f),
    portalMask: (f = msg.getPortalMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    portalConfigMask: (f = msg.getPortalConfigMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    pluginInstanceMask: (f = msg.getPluginInstanceMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrations.GetDetailedPortalReq}
 */
proto.api.v1alpha1.integrations.GetDetailedPortalReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.GetDetailedPortalReq;
  return proto.api.v1alpha1.integrations.GetDetailedPortalReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.GetDetailedPortalReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.GetDetailedPortalReq}
 */
proto.api.v1alpha1.integrations.GetDetailedPortalReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_v1alpha1_integrations_service_pb.PortalId;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.PortalId.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setPortalMask(value);
      break;
    case 3:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setPortalConfigMask(value);
      break;
    case 4:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setPluginInstanceMask(value);
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
proto.api.v1alpha1.integrations.GetDetailedPortalReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.GetDetailedPortalReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.GetDetailedPortalReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetDetailedPortalReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_v1alpha1_integrations_service_pb.PortalId.serializeBinaryToWriter
    );
  }
  f = message.getPortalMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getPortalConfigMask();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getPluginInstanceMask();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional PortalId entity = 1;
 * @return {?proto.api.v1alpha1.integrations.PortalId}
 */
proto.api.v1alpha1.integrations.GetDetailedPortalReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrations.PortalId} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_integrations_service_pb.PortalId, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrations.PortalId|undefined} value
 * @return {!proto.api.v1alpha1.integrations.GetDetailedPortalReq} returns this
*/
proto.api.v1alpha1.integrations.GetDetailedPortalReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.GetDetailedPortalReq} returns this
 */
proto.api.v1alpha1.integrations.GetDetailedPortalReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.GetDetailedPortalReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask portal_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.integrations.GetDetailedPortalReq.prototype.getPortalMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.integrations.GetDetailedPortalReq} returns this
*/
proto.api.v1alpha1.integrations.GetDetailedPortalReq.prototype.setPortalMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.GetDetailedPortalReq} returns this
 */
proto.api.v1alpha1.integrations.GetDetailedPortalReq.prototype.clearPortalMask = function() {
  return this.setPortalMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.GetDetailedPortalReq.prototype.hasPortalMask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.FieldMask portal_config_mask = 3;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.integrations.GetDetailedPortalReq.prototype.getPortalConfigMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 3));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.integrations.GetDetailedPortalReq} returns this
*/
proto.api.v1alpha1.integrations.GetDetailedPortalReq.prototype.setPortalConfigMask = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.GetDetailedPortalReq} returns this
 */
proto.api.v1alpha1.integrations.GetDetailedPortalReq.prototype.clearPortalConfigMask = function() {
  return this.setPortalConfigMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.GetDetailedPortalReq.prototype.hasPortalConfigMask = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.FieldMask plugin_instance_mask = 4;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.integrations.GetDetailedPortalReq.prototype.getPluginInstanceMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 4));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.integrations.GetDetailedPortalReq} returns this
*/
proto.api.v1alpha1.integrations.GetDetailedPortalReq.prototype.setPluginInstanceMask = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.GetDetailedPortalReq} returns this
 */
proto.api.v1alpha1.integrations.GetDetailedPortalReq.prototype.clearPluginInstanceMask = function() {
  return this.setPluginInstanceMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.GetDetailedPortalReq.prototype.hasPluginInstanceMask = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.api.v1alpha1.integrations.GetDetailedPortalRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.GetDetailedPortalRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.GetDetailedPortalRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetDetailedPortalRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrations.GetDetailedPortalRes}
 */
proto.api.v1alpha1.integrations.GetDetailedPortalRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.GetDetailedPortalRes;
  return proto.api.v1alpha1.integrations.GetDetailedPortalRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.GetDetailedPortalRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.GetDetailedPortalRes}
 */
proto.api.v1alpha1.integrations.GetDetailedPortalRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = new proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity;
      reader.readMessage(value,proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity.deserializeBinaryFromReader);
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
proto.api.v1alpha1.integrations.GetDetailedPortalRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.GetDetailedPortalRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.GetDetailedPortalRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetDetailedPortalRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity.repeatedFields_ = [3];



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
proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity.toObject = function(includeInstance, msg) {
  var f, obj = {
    portal: (f = msg.getPortal()) && api_v1alpha1_integrations_service_pb.Portal.toObject(includeInstance, f),
    portalConfig: (f = msg.getPortalConfig()) && api_v1alpha1_integrations_service_pb.PortalConfig.toObject(includeInstance, f),
    pluginInstancesList: jspb.Message.toObjectList(msg.getPluginInstancesList(),
    api_v1alpha1_integrations_service_pb.PluginInstance.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity}
 */
proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity;
  return proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity}
 */
proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_v1alpha1_integrations_service_pb.Portal;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.Portal.deserializeBinaryFromReader);
      msg.setPortal(value);
      break;
    case 2:
      var value = new api_v1alpha1_integrations_service_pb.PortalConfig;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.PortalConfig.deserializeBinaryFromReader);
      msg.setPortalConfig(value);
      break;
    case 3:
      var value = new api_v1alpha1_integrations_service_pb.PluginInstance;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.PluginInstance.deserializeBinaryFromReader);
      msg.addPluginInstances(value);
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
proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPortal();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_v1alpha1_integrations_service_pb.Portal.serializeBinaryToWriter
    );
  }
  f = message.getPortalConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      api_v1alpha1_integrations_service_pb.PortalConfig.serializeBinaryToWriter
    );
  }
  f = message.getPluginInstancesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      api_v1alpha1_integrations_service_pb.PluginInstance.serializeBinaryToWriter
    );
  }
};


/**
 * optional Portal portal = 1;
 * @return {?proto.api.v1alpha1.integrations.Portal}
 */
proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity.prototype.getPortal = function() {
  return /** @type{?proto.api.v1alpha1.integrations.Portal} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_integrations_service_pb.Portal, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrations.Portal|undefined} value
 * @return {!proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity} returns this
*/
proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity.prototype.setPortal = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity} returns this
 */
proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity.prototype.clearPortal = function() {
  return this.setPortal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity.prototype.hasPortal = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PortalConfig portal_config = 2;
 * @return {?proto.api.v1alpha1.integrations.PortalConfig}
 */
proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity.prototype.getPortalConfig = function() {
  return /** @type{?proto.api.v1alpha1.integrations.PortalConfig} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_integrations_service_pb.PortalConfig, 2));
};


/**
 * @param {?proto.api.v1alpha1.integrations.PortalConfig|undefined} value
 * @return {!proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity} returns this
*/
proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity.prototype.setPortalConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity} returns this
 */
proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity.prototype.clearPortalConfig = function() {
  return this.setPortalConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity.prototype.hasPortalConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated PluginInstance plugin_instances = 3;
 * @return {!Array<!proto.api.v1alpha1.integrations.PluginInstance>}
 */
proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity.prototype.getPluginInstancesList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.PluginInstance>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_v1alpha1_integrations_service_pb.PluginInstance, 3));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.PluginInstance>} value
 * @return {!proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity} returns this
*/
proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity.prototype.setPluginInstancesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.PluginInstance=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.PluginInstance}
 */
proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity.prototype.addPluginInstances = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.api.v1alpha1.integrations.PluginInstance, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity} returns this
 */
proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity.prototype.clearPluginInstancesList = function() {
  return this.setPluginInstancesList([]);
};


/**
 * optional Entity entity = 4;
 * @return {?proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity}
 */
proto.api.v1alpha1.integrations.GetDetailedPortalRes.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity, 4));
};


/**
 * @param {?proto.api.v1alpha1.integrations.GetDetailedPortalRes.Entity|undefined} value
 * @return {!proto.api.v1alpha1.integrations.GetDetailedPortalRes} returns this
*/
proto.api.v1alpha1.integrations.GetDetailedPortalRes.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.GetDetailedPortalRes} returns this
 */
proto.api.v1alpha1.integrations.GetDetailedPortalRes.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.GetDetailedPortalRes.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.api.v1alpha1.integrations.UpsertPluginInstanceReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.UpsertPluginInstanceReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.UpsertPluginInstanceReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.UpsertPluginInstanceReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && api_v1alpha1_integrations_service_pb.PluginInstance.toObject(includeInstance, f),
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
 * @return {!proto.api.v1alpha1.integrations.UpsertPluginInstanceReq}
 */
proto.api.v1alpha1.integrations.UpsertPluginInstanceReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.UpsertPluginInstanceReq;
  return proto.api.v1alpha1.integrations.UpsertPluginInstanceReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.UpsertPluginInstanceReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.UpsertPluginInstanceReq}
 */
proto.api.v1alpha1.integrations.UpsertPluginInstanceReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_v1alpha1_integrations_service_pb.PluginInstance;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.PluginInstance.deserializeBinaryFromReader);
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
proto.api.v1alpha1.integrations.UpsertPluginInstanceReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.UpsertPluginInstanceReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.UpsertPluginInstanceReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.UpsertPluginInstanceReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_v1alpha1_integrations_service_pb.PluginInstance.serializeBinaryToWriter
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
 * optional PluginInstance entity = 1;
 * @return {?proto.api.v1alpha1.integrations.PluginInstance}
 */
proto.api.v1alpha1.integrations.UpsertPluginInstanceReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrations.PluginInstance} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_integrations_service_pb.PluginInstance, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrations.PluginInstance|undefined} value
 * @return {!proto.api.v1alpha1.integrations.UpsertPluginInstanceReq} returns this
*/
proto.api.v1alpha1.integrations.UpsertPluginInstanceReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.UpsertPluginInstanceReq} returns this
 */
proto.api.v1alpha1.integrations.UpsertPluginInstanceReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.UpsertPluginInstanceReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.integrations.UpsertPluginInstanceReq.prototype.getMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.integrations.UpsertPluginInstanceReq} returns this
*/
proto.api.v1alpha1.integrations.UpsertPluginInstanceReq.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.UpsertPluginInstanceReq} returns this
 */
proto.api.v1alpha1.integrations.UpsertPluginInstanceReq.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.UpsertPluginInstanceReq.prototype.hasMask = function() {
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
proto.api.v1alpha1.integrations.UpsertPluginInstanceRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.UpsertPluginInstanceRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.UpsertPluginInstanceRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.UpsertPluginInstanceRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && api_v1alpha1_integrations_service_pb.PluginInstanceId.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrations.UpsertPluginInstanceRes}
 */
proto.api.v1alpha1.integrations.UpsertPluginInstanceRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.UpsertPluginInstanceRes;
  return proto.api.v1alpha1.integrations.UpsertPluginInstanceRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.UpsertPluginInstanceRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.UpsertPluginInstanceRes}
 */
proto.api.v1alpha1.integrations.UpsertPluginInstanceRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_v1alpha1_integrations_service_pb.PluginInstanceId;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.PluginInstanceId.deserializeBinaryFromReader);
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
proto.api.v1alpha1.integrations.UpsertPluginInstanceRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.UpsertPluginInstanceRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.UpsertPluginInstanceRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.UpsertPluginInstanceRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_v1alpha1_integrations_service_pb.PluginInstanceId.serializeBinaryToWriter
    );
  }
};


/**
 * optional PluginInstanceId entity = 1;
 * @return {?proto.api.v1alpha1.integrations.PluginInstanceId}
 */
proto.api.v1alpha1.integrations.UpsertPluginInstanceRes.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrations.PluginInstanceId} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_integrations_service_pb.PluginInstanceId, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrations.PluginInstanceId|undefined} value
 * @return {!proto.api.v1alpha1.integrations.UpsertPluginInstanceRes} returns this
*/
proto.api.v1alpha1.integrations.UpsertPluginInstanceRes.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.UpsertPluginInstanceRes} returns this
 */
proto.api.v1alpha1.integrations.UpsertPluginInstanceRes.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.UpsertPluginInstanceRes.prototype.hasEntity = function() {
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
proto.api.v1alpha1.integrations.GetPluginInstanceReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.GetPluginInstanceReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.GetPluginInstanceReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetPluginInstanceReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && api_v1alpha1_integrations_service_pb.PluginInstanceId.toObject(includeInstance, f),
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
 * @return {!proto.api.v1alpha1.integrations.GetPluginInstanceReq}
 */
proto.api.v1alpha1.integrations.GetPluginInstanceReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.GetPluginInstanceReq;
  return proto.api.v1alpha1.integrations.GetPluginInstanceReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.GetPluginInstanceReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.GetPluginInstanceReq}
 */
proto.api.v1alpha1.integrations.GetPluginInstanceReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_v1alpha1_integrations_service_pb.PluginInstanceId;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.PluginInstanceId.deserializeBinaryFromReader);
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
proto.api.v1alpha1.integrations.GetPluginInstanceReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.GetPluginInstanceReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.GetPluginInstanceReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetPluginInstanceReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_v1alpha1_integrations_service_pb.PluginInstanceId.serializeBinaryToWriter
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
 * optional PluginInstanceId entity = 1;
 * @return {?proto.api.v1alpha1.integrations.PluginInstanceId}
 */
proto.api.v1alpha1.integrations.GetPluginInstanceReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrations.PluginInstanceId} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_integrations_service_pb.PluginInstanceId, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrations.PluginInstanceId|undefined} value
 * @return {!proto.api.v1alpha1.integrations.GetPluginInstanceReq} returns this
*/
proto.api.v1alpha1.integrations.GetPluginInstanceReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.GetPluginInstanceReq} returns this
 */
proto.api.v1alpha1.integrations.GetPluginInstanceReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.GetPluginInstanceReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.integrations.GetPluginInstanceReq.prototype.getMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.integrations.GetPluginInstanceReq} returns this
*/
proto.api.v1alpha1.integrations.GetPluginInstanceReq.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.GetPluginInstanceReq} returns this
 */
proto.api.v1alpha1.integrations.GetPluginInstanceReq.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.GetPluginInstanceReq.prototype.hasMask = function() {
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
proto.api.v1alpha1.integrations.GetPluginInstanceRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.GetPluginInstanceRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.GetPluginInstanceRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetPluginInstanceRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && api_v1alpha1_integrations_service_pb.PluginInstance.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrations.GetPluginInstanceRes}
 */
proto.api.v1alpha1.integrations.GetPluginInstanceRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.GetPluginInstanceRes;
  return proto.api.v1alpha1.integrations.GetPluginInstanceRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.GetPluginInstanceRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.GetPluginInstanceRes}
 */
proto.api.v1alpha1.integrations.GetPluginInstanceRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_v1alpha1_integrations_service_pb.PluginInstance;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.PluginInstance.deserializeBinaryFromReader);
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
proto.api.v1alpha1.integrations.GetPluginInstanceRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.GetPluginInstanceRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.GetPluginInstanceRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetPluginInstanceRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_v1alpha1_integrations_service_pb.PluginInstance.serializeBinaryToWriter
    );
  }
};


/**
 * optional PluginInstance entity = 1;
 * @return {?proto.api.v1alpha1.integrations.PluginInstance}
 */
proto.api.v1alpha1.integrations.GetPluginInstanceRes.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrations.PluginInstance} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_integrations_service_pb.PluginInstance, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrations.PluginInstance|undefined} value
 * @return {!proto.api.v1alpha1.integrations.GetPluginInstanceRes} returns this
*/
proto.api.v1alpha1.integrations.GetPluginInstanceRes.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.GetPluginInstanceRes} returns this
 */
proto.api.v1alpha1.integrations.GetPluginInstanceRes.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.GetPluginInstanceRes.prototype.hasEntity = function() {
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
proto.api.v1alpha1.integrations.DeletePluginInstanceReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.DeletePluginInstanceReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.DeletePluginInstanceReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.DeletePluginInstanceReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && api_v1alpha1_integrations_service_pb.PluginInstanceId.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrations.DeletePluginInstanceReq}
 */
proto.api.v1alpha1.integrations.DeletePluginInstanceReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.DeletePluginInstanceReq;
  return proto.api.v1alpha1.integrations.DeletePluginInstanceReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.DeletePluginInstanceReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.DeletePluginInstanceReq}
 */
proto.api.v1alpha1.integrations.DeletePluginInstanceReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_v1alpha1_integrations_service_pb.PluginInstanceId;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.PluginInstanceId.deserializeBinaryFromReader);
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
proto.api.v1alpha1.integrations.DeletePluginInstanceReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.DeletePluginInstanceReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.DeletePluginInstanceReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.DeletePluginInstanceReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_v1alpha1_integrations_service_pb.PluginInstanceId.serializeBinaryToWriter
    );
  }
};


/**
 * optional PluginInstanceId entity = 1;
 * @return {?proto.api.v1alpha1.integrations.PluginInstanceId}
 */
proto.api.v1alpha1.integrations.DeletePluginInstanceReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrations.PluginInstanceId} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_integrations_service_pb.PluginInstanceId, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrations.PluginInstanceId|undefined} value
 * @return {!proto.api.v1alpha1.integrations.DeletePluginInstanceReq} returns this
*/
proto.api.v1alpha1.integrations.DeletePluginInstanceReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.DeletePluginInstanceReq} returns this
 */
proto.api.v1alpha1.integrations.DeletePluginInstanceReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.DeletePluginInstanceReq.prototype.hasEntity = function() {
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
proto.api.v1alpha1.integrations.DeletePluginInstanceRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.DeletePluginInstanceRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.DeletePluginInstanceRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.DeletePluginInstanceRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.integrations.DeletePluginInstanceRes}
 */
proto.api.v1alpha1.integrations.DeletePluginInstanceRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.DeletePluginInstanceRes;
  return proto.api.v1alpha1.integrations.DeletePluginInstanceRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.DeletePluginInstanceRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.DeletePluginInstanceRes}
 */
proto.api.v1alpha1.integrations.DeletePluginInstanceRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.integrations.DeletePluginInstanceRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.DeletePluginInstanceRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.DeletePluginInstanceRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.DeletePluginInstanceRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.integrations.ListPluginInstanceReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.ListPluginInstanceReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.ListPluginInstanceReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListPluginInstanceReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && api_v1alpha1_integrations_service_pb.PluginInstance.toObject(includeInstance, f),
    mask: (f = msg.getMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    page: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.api.v1alpha1.integrations.ListPluginInstanceReq}
 */
proto.api.v1alpha1.integrations.ListPluginInstanceReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.ListPluginInstanceReq;
  return proto.api.v1alpha1.integrations.ListPluginInstanceReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.ListPluginInstanceReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.ListPluginInstanceReq}
 */
proto.api.v1alpha1.integrations.ListPluginInstanceReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_v1alpha1_integrations_service_pb.PluginInstance;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.PluginInstance.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setMask(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
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
proto.api.v1alpha1.integrations.ListPluginInstanceReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.ListPluginInstanceReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.ListPluginInstanceReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListPluginInstanceReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_v1alpha1_integrations_service_pb.PluginInstance.serializeBinaryToWriter
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
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional PluginInstance entity = 1;
 * @return {?proto.api.v1alpha1.integrations.PluginInstance}
 */
proto.api.v1alpha1.integrations.ListPluginInstanceReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrations.PluginInstance} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_integrations_service_pb.PluginInstance, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrations.PluginInstance|undefined} value
 * @return {!proto.api.v1alpha1.integrations.ListPluginInstanceReq} returns this
*/
proto.api.v1alpha1.integrations.ListPluginInstanceReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.ListPluginInstanceReq} returns this
 */
proto.api.v1alpha1.integrations.ListPluginInstanceReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.ListPluginInstanceReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.integrations.ListPluginInstanceReq.prototype.getMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.integrations.ListPluginInstanceReq} returns this
*/
proto.api.v1alpha1.integrations.ListPluginInstanceReq.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.ListPluginInstanceReq} returns this
 */
proto.api.v1alpha1.integrations.ListPluginInstanceReq.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.ListPluginInstanceReq.prototype.hasMask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.api.v1alpha1.integrations.ListPluginInstanceReq.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.ListPluginInstanceReq} returns this
 */
proto.api.v1alpha1.integrations.ListPluginInstanceReq.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 page = 4;
 * @return {number}
 */
proto.api.v1alpha1.integrations.ListPluginInstanceReq.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.ListPluginInstanceReq} returns this
 */
proto.api.v1alpha1.integrations.ListPluginInstanceReq.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.ListPluginInstanceRes.repeatedFields_ = [1];



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
proto.api.v1alpha1.integrations.ListPluginInstanceRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.ListPluginInstanceRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.ListPluginInstanceRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListPluginInstanceRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entitiesList: jspb.Message.toObjectList(msg.getEntitiesList(),
    api_v1alpha1_integrations_service_pb.PluginInstance.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.integrations.ListPluginInstanceRes}
 */
proto.api.v1alpha1.integrations.ListPluginInstanceRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.ListPluginInstanceRes;
  return proto.api.v1alpha1.integrations.ListPluginInstanceRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.ListPluginInstanceRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.ListPluginInstanceRes}
 */
proto.api.v1alpha1.integrations.ListPluginInstanceRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_v1alpha1_integrations_service_pb.PluginInstance;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.PluginInstance.deserializeBinaryFromReader);
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
proto.api.v1alpha1.integrations.ListPluginInstanceRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.ListPluginInstanceRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.ListPluginInstanceRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListPluginInstanceRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      api_v1alpha1_integrations_service_pb.PluginInstance.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PluginInstance entities = 1;
 * @return {!Array<!proto.api.v1alpha1.integrations.PluginInstance>}
 */
proto.api.v1alpha1.integrations.ListPluginInstanceRes.prototype.getEntitiesList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.PluginInstance>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_v1alpha1_integrations_service_pb.PluginInstance, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.PluginInstance>} value
 * @return {!proto.api.v1alpha1.integrations.ListPluginInstanceRes} returns this
*/
proto.api.v1alpha1.integrations.ListPluginInstanceRes.prototype.setEntitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.PluginInstance=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.PluginInstance}
 */
proto.api.v1alpha1.integrations.ListPluginInstanceRes.prototype.addEntities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.integrations.PluginInstance, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.ListPluginInstanceRes} returns this
 */
proto.api.v1alpha1.integrations.ListPluginInstanceRes.prototype.clearEntitiesList = function() {
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
proto.api.v1alpha1.integrations.ListPluginsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.ListPluginsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.ListPluginsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListPluginsReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.integrations.ListPluginsReq}
 */
proto.api.v1alpha1.integrations.ListPluginsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.ListPluginsReq;
  return proto.api.v1alpha1.integrations.ListPluginsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.ListPluginsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.ListPluginsReq}
 */
proto.api.v1alpha1.integrations.ListPluginsReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.integrations.ListPluginsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.ListPluginsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.ListPluginsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListPluginsReq.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.integrations.ListPluginsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.ListPluginsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.ListPluginsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListPluginsRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.integrations.ListPluginsRes}
 */
proto.api.v1alpha1.integrations.ListPluginsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.ListPluginsRes;
  return proto.api.v1alpha1.integrations.ListPluginsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.ListPluginsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.ListPluginsRes}
 */
proto.api.v1alpha1.integrations.ListPluginsRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.integrations.ListPluginsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.ListPluginsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.ListPluginsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListPluginsRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.integrations.ListPortalLinksReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.ListPortalLinksReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.ListPortalLinksReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListPortalLinksReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && api_v1alpha1_integrations_service_pb.PortalLinkId.toObject(includeInstance, f),
    mask: (f = msg.getMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    page: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.api.v1alpha1.integrations.ListPortalLinksReq}
 */
proto.api.v1alpha1.integrations.ListPortalLinksReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.ListPortalLinksReq;
  return proto.api.v1alpha1.integrations.ListPortalLinksReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.ListPortalLinksReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.ListPortalLinksReq}
 */
proto.api.v1alpha1.integrations.ListPortalLinksReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_v1alpha1_integrations_service_pb.PortalLinkId;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.PortalLinkId.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setMask(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
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
proto.api.v1alpha1.integrations.ListPortalLinksReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.ListPortalLinksReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.ListPortalLinksReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListPortalLinksReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_v1alpha1_integrations_service_pb.PortalLinkId.serializeBinaryToWriter
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
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional PortalLinkId entity = 1;
 * @return {?proto.api.v1alpha1.integrations.PortalLinkId}
 */
proto.api.v1alpha1.integrations.ListPortalLinksReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrations.PortalLinkId} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_integrations_service_pb.PortalLinkId, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrations.PortalLinkId|undefined} value
 * @return {!proto.api.v1alpha1.integrations.ListPortalLinksReq} returns this
*/
proto.api.v1alpha1.integrations.ListPortalLinksReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.ListPortalLinksReq} returns this
 */
proto.api.v1alpha1.integrations.ListPortalLinksReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.ListPortalLinksReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.integrations.ListPortalLinksReq.prototype.getMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.integrations.ListPortalLinksReq} returns this
*/
proto.api.v1alpha1.integrations.ListPortalLinksReq.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.ListPortalLinksReq} returns this
 */
proto.api.v1alpha1.integrations.ListPortalLinksReq.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.ListPortalLinksReq.prototype.hasMask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.api.v1alpha1.integrations.ListPortalLinksReq.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.ListPortalLinksReq} returns this
 */
proto.api.v1alpha1.integrations.ListPortalLinksReq.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 page = 4;
 * @return {number}
 */
proto.api.v1alpha1.integrations.ListPortalLinksReq.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.ListPortalLinksReq} returns this
 */
proto.api.v1alpha1.integrations.ListPortalLinksReq.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.ListPortalLinksRes.repeatedFields_ = [1];



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
proto.api.v1alpha1.integrations.ListPortalLinksRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.ListPortalLinksRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.ListPortalLinksRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListPortalLinksRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entitiesList: jspb.Message.toObjectList(msg.getEntitiesList(),
    api_v1alpha1_integrations_service_pb.PortalLink.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.integrations.ListPortalLinksRes}
 */
proto.api.v1alpha1.integrations.ListPortalLinksRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.ListPortalLinksRes;
  return proto.api.v1alpha1.integrations.ListPortalLinksRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.ListPortalLinksRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.ListPortalLinksRes}
 */
proto.api.v1alpha1.integrations.ListPortalLinksRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_v1alpha1_integrations_service_pb.PortalLink;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.PortalLink.deserializeBinaryFromReader);
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
proto.api.v1alpha1.integrations.ListPortalLinksRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.ListPortalLinksRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.ListPortalLinksRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListPortalLinksRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      api_v1alpha1_integrations_service_pb.PortalLink.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PortalLink entities = 1;
 * @return {!Array<!proto.api.v1alpha1.integrations.PortalLink>}
 */
proto.api.v1alpha1.integrations.ListPortalLinksRes.prototype.getEntitiesList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.PortalLink>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_v1alpha1_integrations_service_pb.PortalLink, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.PortalLink>} value
 * @return {!proto.api.v1alpha1.integrations.ListPortalLinksRes} returns this
*/
proto.api.v1alpha1.integrations.ListPortalLinksRes.prototype.setEntitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.PortalLink=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.PortalLink}
 */
proto.api.v1alpha1.integrations.ListPortalLinksRes.prototype.addEntities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.integrations.PortalLink, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.ListPortalLinksRes} returns this
 */
proto.api.v1alpha1.integrations.ListPortalLinksRes.prototype.clearEntitiesList = function() {
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
proto.api.v1alpha1.integrations.GetPortalLinkReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.GetPortalLinkReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.GetPortalLinkReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetPortalLinkReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && api_v1alpha1_integrations_service_pb.PortalLinkId.toObject(includeInstance, f),
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
 * @return {!proto.api.v1alpha1.integrations.GetPortalLinkReq}
 */
proto.api.v1alpha1.integrations.GetPortalLinkReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.GetPortalLinkReq;
  return proto.api.v1alpha1.integrations.GetPortalLinkReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.GetPortalLinkReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.GetPortalLinkReq}
 */
proto.api.v1alpha1.integrations.GetPortalLinkReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_v1alpha1_integrations_service_pb.PortalLinkId;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.PortalLinkId.deserializeBinaryFromReader);
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
proto.api.v1alpha1.integrations.GetPortalLinkReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.GetPortalLinkReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.GetPortalLinkReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetPortalLinkReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_v1alpha1_integrations_service_pb.PortalLinkId.serializeBinaryToWriter
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
 * optional PortalLinkId entity = 1;
 * @return {?proto.api.v1alpha1.integrations.PortalLinkId}
 */
proto.api.v1alpha1.integrations.GetPortalLinkReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrations.PortalLinkId} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_integrations_service_pb.PortalLinkId, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrations.PortalLinkId|undefined} value
 * @return {!proto.api.v1alpha1.integrations.GetPortalLinkReq} returns this
*/
proto.api.v1alpha1.integrations.GetPortalLinkReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.GetPortalLinkReq} returns this
 */
proto.api.v1alpha1.integrations.GetPortalLinkReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.GetPortalLinkReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.integrations.GetPortalLinkReq.prototype.getMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.integrations.GetPortalLinkReq} returns this
*/
proto.api.v1alpha1.integrations.GetPortalLinkReq.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.GetPortalLinkReq} returns this
 */
proto.api.v1alpha1.integrations.GetPortalLinkReq.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.GetPortalLinkReq.prototype.hasMask = function() {
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
proto.api.v1alpha1.integrations.GetPortalLinkRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.GetPortalLinkRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.GetPortalLinkRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetPortalLinkRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && api_v1alpha1_integrations_service_pb.PortalLink.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrations.GetPortalLinkRes}
 */
proto.api.v1alpha1.integrations.GetPortalLinkRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.GetPortalLinkRes;
  return proto.api.v1alpha1.integrations.GetPortalLinkRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.GetPortalLinkRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.GetPortalLinkRes}
 */
proto.api.v1alpha1.integrations.GetPortalLinkRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_v1alpha1_integrations_service_pb.PortalLink;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.PortalLink.deserializeBinaryFromReader);
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
proto.api.v1alpha1.integrations.GetPortalLinkRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.GetPortalLinkRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.GetPortalLinkRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetPortalLinkRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_v1alpha1_integrations_service_pb.PortalLink.serializeBinaryToWriter
    );
  }
};


/**
 * optional PortalLink entity = 1;
 * @return {?proto.api.v1alpha1.integrations.PortalLink}
 */
proto.api.v1alpha1.integrations.GetPortalLinkRes.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrations.PortalLink} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_integrations_service_pb.PortalLink, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrations.PortalLink|undefined} value
 * @return {!proto.api.v1alpha1.integrations.GetPortalLinkRes} returns this
*/
proto.api.v1alpha1.integrations.GetPortalLinkRes.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.GetPortalLinkRes} returns this
 */
proto.api.v1alpha1.integrations.GetPortalLinkRes.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.GetPortalLinkRes.prototype.hasEntity = function() {
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
proto.api.v1alpha1.integrations.DeletePortalLinkReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.DeletePortalLinkReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.DeletePortalLinkReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.DeletePortalLinkReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && api_v1alpha1_integrations_service_pb.PortalLinkId.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrations.DeletePortalLinkReq}
 */
proto.api.v1alpha1.integrations.DeletePortalLinkReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.DeletePortalLinkReq;
  return proto.api.v1alpha1.integrations.DeletePortalLinkReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.DeletePortalLinkReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.DeletePortalLinkReq}
 */
proto.api.v1alpha1.integrations.DeletePortalLinkReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_v1alpha1_integrations_service_pb.PortalLinkId;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.PortalLinkId.deserializeBinaryFromReader);
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
proto.api.v1alpha1.integrations.DeletePortalLinkReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.DeletePortalLinkReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.DeletePortalLinkReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.DeletePortalLinkReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_v1alpha1_integrations_service_pb.PortalLinkId.serializeBinaryToWriter
    );
  }
};


/**
 * optional PortalLinkId entity = 1;
 * @return {?proto.api.v1alpha1.integrations.PortalLinkId}
 */
proto.api.v1alpha1.integrations.DeletePortalLinkReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrations.PortalLinkId} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_integrations_service_pb.PortalLinkId, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrations.PortalLinkId|undefined} value
 * @return {!proto.api.v1alpha1.integrations.DeletePortalLinkReq} returns this
*/
proto.api.v1alpha1.integrations.DeletePortalLinkReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.DeletePortalLinkReq} returns this
 */
proto.api.v1alpha1.integrations.DeletePortalLinkReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.DeletePortalLinkReq.prototype.hasEntity = function() {
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
proto.api.v1alpha1.integrations.DeletePortalLinkRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.DeletePortalLinkRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.DeletePortalLinkRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.DeletePortalLinkRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.integrations.DeletePortalLinkRes}
 */
proto.api.v1alpha1.integrations.DeletePortalLinkRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.DeletePortalLinkRes;
  return proto.api.v1alpha1.integrations.DeletePortalLinkRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.DeletePortalLinkRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.DeletePortalLinkRes}
 */
proto.api.v1alpha1.integrations.DeletePortalLinkRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.integrations.DeletePortalLinkRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.DeletePortalLinkRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.DeletePortalLinkRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.DeletePortalLinkRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.CreatePortalLinksReq.repeatedFields_ = [2];



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
proto.api.v1alpha1.integrations.CreatePortalLinksReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.CreatePortalLinksReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.CreatePortalLinksReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.CreatePortalLinksReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && api_v1alpha1_integrations_service_pb.PortalId.toObject(includeInstance, f),
    linkDatasList: jspb.Message.toObjectList(msg.getLinkDatasList(),
    api_v1alpha1_integrations_service_pb.Task.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.integrations.CreatePortalLinksReq}
 */
proto.api.v1alpha1.integrations.CreatePortalLinksReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.CreatePortalLinksReq;
  return proto.api.v1alpha1.integrations.CreatePortalLinksReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.CreatePortalLinksReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.CreatePortalLinksReq}
 */
proto.api.v1alpha1.integrations.CreatePortalLinksReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_v1alpha1_integrations_service_pb.PortalId;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.PortalId.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = new api_v1alpha1_integrations_service_pb.Task;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.Task.deserializeBinaryFromReader);
      msg.addLinkDatas(value);
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
proto.api.v1alpha1.integrations.CreatePortalLinksReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.CreatePortalLinksReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.CreatePortalLinksReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.CreatePortalLinksReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_v1alpha1_integrations_service_pb.PortalId.serializeBinaryToWriter
    );
  }
  f = message.getLinkDatasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      api_v1alpha1_integrations_service_pb.Task.serializeBinaryToWriter
    );
  }
};


/**
 * optional PortalId entity = 1;
 * @return {?proto.api.v1alpha1.integrations.PortalId}
 */
proto.api.v1alpha1.integrations.CreatePortalLinksReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrations.PortalId} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_integrations_service_pb.PortalId, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrations.PortalId|undefined} value
 * @return {!proto.api.v1alpha1.integrations.CreatePortalLinksReq} returns this
*/
proto.api.v1alpha1.integrations.CreatePortalLinksReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.CreatePortalLinksReq} returns this
 */
proto.api.v1alpha1.integrations.CreatePortalLinksReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.CreatePortalLinksReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Task link_datas = 2;
 * @return {!Array<!proto.api.v1alpha1.integrations.Task>}
 */
proto.api.v1alpha1.integrations.CreatePortalLinksReq.prototype.getLinkDatasList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.Task>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_v1alpha1_integrations_service_pb.Task, 2));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.Task>} value
 * @return {!proto.api.v1alpha1.integrations.CreatePortalLinksReq} returns this
*/
proto.api.v1alpha1.integrations.CreatePortalLinksReq.prototype.setLinkDatasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.Task=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.Task}
 */
proto.api.v1alpha1.integrations.CreatePortalLinksReq.prototype.addLinkDatas = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.v1alpha1.integrations.Task, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.CreatePortalLinksReq} returns this
 */
proto.api.v1alpha1.integrations.CreatePortalLinksReq.prototype.clearLinkDatasList = function() {
  return this.setLinkDatasList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.CreatePortalLinksRes.repeatedFields_ = [1];



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
proto.api.v1alpha1.integrations.CreatePortalLinksRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.CreatePortalLinksRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.CreatePortalLinksRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.CreatePortalLinksRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    urlsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.api.v1alpha1.integrations.CreatePortalLinksRes}
 */
proto.api.v1alpha1.integrations.CreatePortalLinksRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.CreatePortalLinksRes;
  return proto.api.v1alpha1.integrations.CreatePortalLinksRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.CreatePortalLinksRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.CreatePortalLinksRes}
 */
proto.api.v1alpha1.integrations.CreatePortalLinksRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addUrls(value);
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
proto.api.v1alpha1.integrations.CreatePortalLinksRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.CreatePortalLinksRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.CreatePortalLinksRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.CreatePortalLinksRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrlsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string urls = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.integrations.CreatePortalLinksRes.prototype.getUrlsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.integrations.CreatePortalLinksRes} returns this
 */
proto.api.v1alpha1.integrations.CreatePortalLinksRes.prototype.setUrlsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.CreatePortalLinksRes} returns this
 */
proto.api.v1alpha1.integrations.CreatePortalLinksRes.prototype.addUrls = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.CreatePortalLinksRes} returns this
 */
proto.api.v1alpha1.integrations.CreatePortalLinksRes.prototype.clearUrlsList = function() {
  return this.setUrlsList([]);
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
proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.ListFlowFieldNamesReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = msg.getEntity()) && proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrations.ListFlowFieldNamesReq}
 */
proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.ListFlowFieldNamesReq;
  return proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.ListFlowFieldNamesReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.ListFlowFieldNamesReq}
 */
proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 5:
      var value = new proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity;
      reader.readMessage(value,proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity.deserializeBinaryFromReader);
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
proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.ListFlowFieldNamesReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity.serializeBinaryToWriter
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
proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity.toObject = function(includeInstance, msg) {
  var f, obj = {
    flow: (f = msg.getFlow()) && api_commons_public_integrations_pb.Flow.toObject(includeInstance, f),
    loc: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity}
 */
proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity;
  return proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity}
 */
proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new api_commons_public_integrations_pb.Flow;
      reader.readMessage(value,api_commons_public_integrations_pb.Flow.deserializeBinaryFromReader);
      msg.setFlow(value);
      break;
    case 4:
      var value = /** @type {!proto.api.commons.public.FlowFieldLoc} */ (reader.readEnum());
      msg.setLoc(value);
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
proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFlow();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      api_commons_public_integrations_pb.Flow.serializeBinaryToWriter
    );
  }
  f = message.getLoc();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional api.commons.public.Flow flow = 3;
 * @return {?proto.api.commons.public.Flow}
 */
proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity.prototype.getFlow = function() {
  return /** @type{?proto.api.commons.public.Flow} */ (
    jspb.Message.getWrapperField(this, api_commons_public_integrations_pb.Flow, 3));
};


/**
 * @param {?proto.api.commons.public.Flow|undefined} value
 * @return {!proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity} returns this
*/
proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity.prototype.setFlow = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity} returns this
 */
proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity.prototype.clearFlow = function() {
  return this.setFlow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity.prototype.hasFlow = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional api.commons.public.FlowFieldLoc loc = 4;
 * @return {!proto.api.commons.public.FlowFieldLoc}
 */
proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity.prototype.getLoc = function() {
  return /** @type {!proto.api.commons.public.FlowFieldLoc} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.public.FlowFieldLoc} value
 * @return {!proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity} returns this
 */
proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity.prototype.setLoc = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional Entity entity = 5;
 * @return {?proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity}
 */
proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity, 5));
};


/**
 * @param {?proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.Entity|undefined} value
 * @return {!proto.api.v1alpha1.integrations.ListFlowFieldNamesReq} returns this
*/
proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.ListFlowFieldNamesReq} returns this
 */
proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.ListFlowFieldNamesReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.ListFlowFieldNamesRes.repeatedFields_ = [1];



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
proto.api.v1alpha1.integrations.ListFlowFieldNamesRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.ListFlowFieldNamesRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.ListFlowFieldNamesRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListFlowFieldNamesRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldNamesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.api.v1alpha1.integrations.ListFlowFieldNamesRes}
 */
proto.api.v1alpha1.integrations.ListFlowFieldNamesRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.ListFlowFieldNamesRes;
  return proto.api.v1alpha1.integrations.ListFlowFieldNamesRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.ListFlowFieldNamesRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.ListFlowFieldNamesRes}
 */
proto.api.v1alpha1.integrations.ListFlowFieldNamesRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addFieldNames(value);
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
proto.api.v1alpha1.integrations.ListFlowFieldNamesRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.ListFlowFieldNamesRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.ListFlowFieldNamesRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListFlowFieldNamesRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string field_names = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.integrations.ListFlowFieldNamesRes.prototype.getFieldNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.integrations.ListFlowFieldNamesRes} returns this
 */
proto.api.v1alpha1.integrations.ListFlowFieldNamesRes.prototype.setFieldNamesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.ListFlowFieldNamesRes} returns this
 */
proto.api.v1alpha1.integrations.ListFlowFieldNamesRes.prototype.addFieldNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.ListFlowFieldNamesRes} returns this
 */
proto.api.v1alpha1.integrations.ListFlowFieldNamesRes.prototype.clearFieldNamesList = function() {
  return this.setFieldNamesList([]);
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
proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    verification: (f = msg.getVerification()) && api_commons_public_integrations_pb.VerificationFlow.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsReq}
 */
proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsReq;
  return proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsReq}
 */
proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_public_integrations_pb.VerificationFlow;
      reader.readMessage(value,api_commons_public_integrations_pb.VerificationFlow.deserializeBinaryFromReader);
      msg.setVerification(value);
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
proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVerification();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_public_integrations_pb.VerificationFlow.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.public.VerificationFlow verification = 1;
 * @return {?proto.api.commons.public.VerificationFlow}
 */
proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsReq.prototype.getVerification = function() {
  return /** @type{?proto.api.commons.public.VerificationFlow} */ (
    jspb.Message.getWrapperField(this, api_commons_public_integrations_pb.VerificationFlow, 1));
};


/**
 * @param {?proto.api.commons.public.VerificationFlow|undefined} value
 * @return {!proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsReq} returns this
*/
proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsReq.prototype.setVerification = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsReq} returns this
 */
proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsReq.prototype.clearVerification = function() {
  return this.setVerification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsReq.prototype.hasVerification = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsRes.repeatedFields_ = [2];



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
proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    verificationFieldsList: jspb.Message.toObjectList(msg.getVerificationFieldsList(),
    api_commons_public_integrations_pb.FieldDefinition.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsRes}
 */
proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsRes;
  return proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsRes}
 */
proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new api_commons_public_integrations_pb.FieldDefinition;
      reader.readMessage(value,api_commons_public_integrations_pb.FieldDefinition.deserializeBinaryFromReader);
      msg.addVerificationFields(value);
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
proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVerificationFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      api_commons_public_integrations_pb.FieldDefinition.serializeBinaryToWriter
    );
  }
};


/**
 * repeated api.commons.public.FieldDefinition verification_fields = 2;
 * @return {!Array<!proto.api.commons.public.FieldDefinition>}
 */
proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsRes.prototype.getVerificationFieldsList = function() {
  return /** @type{!Array<!proto.api.commons.public.FieldDefinition>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_public_integrations_pb.FieldDefinition, 2));
};


/**
 * @param {!Array<!proto.api.commons.public.FieldDefinition>} value
 * @return {!proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsRes} returns this
*/
proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsRes.prototype.setVerificationFieldsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.commons.public.FieldDefinition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.public.FieldDefinition}
 */
proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsRes.prototype.addVerificationFields = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.commons.public.FieldDefinition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsRes} returns this
 */
proto.api.v1alpha1.integrations.ListAvailableVerificationFieldsRes.prototype.clearVerificationFieldsList = function() {
  return this.setVerificationFieldsList([]);
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
proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    payment: (f = msg.getPayment()) && api_commons_public_integrations_pb.PaymentFlow.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsReq}
 */
proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsReq;
  return proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsReq}
 */
proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_public_integrations_pb.PaymentFlow;
      reader.readMessage(value,api_commons_public_integrations_pb.PaymentFlow.deserializeBinaryFromReader);
      msg.setPayment(value);
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
proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_public_integrations_pb.PaymentFlow.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.public.PaymentFlow payment = 1;
 * @return {?proto.api.commons.public.PaymentFlow}
 */
proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsReq.prototype.getPayment = function() {
  return /** @type{?proto.api.commons.public.PaymentFlow} */ (
    jspb.Message.getWrapperField(this, api_commons_public_integrations_pb.PaymentFlow, 1));
};


/**
 * @param {?proto.api.commons.public.PaymentFlow|undefined} value
 * @return {!proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsReq} returns this
*/
proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsReq.prototype.setPayment = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsReq} returns this
 */
proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsReq.prototype.clearPayment = function() {
  return this.setPayment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsReq.prototype.hasPayment = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsRes.repeatedFields_ = [2];



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
proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentFieldsList: jspb.Message.toObjectList(msg.getPaymentFieldsList(),
    api_commons_public_integrations_pb.FieldDefinition.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsRes}
 */
proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsRes;
  return proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsRes}
 */
proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new api_commons_public_integrations_pb.FieldDefinition;
      reader.readMessage(value,api_commons_public_integrations_pb.FieldDefinition.deserializeBinaryFromReader);
      msg.addPaymentFields(value);
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
proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      api_commons_public_integrations_pb.FieldDefinition.serializeBinaryToWriter
    );
  }
};


/**
 * repeated api.commons.public.FieldDefinition payment_fields = 2;
 * @return {!Array<!proto.api.commons.public.FieldDefinition>}
 */
proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsRes.prototype.getPaymentFieldsList = function() {
  return /** @type{!Array<!proto.api.commons.public.FieldDefinition>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_public_integrations_pb.FieldDefinition, 2));
};


/**
 * @param {!Array<!proto.api.commons.public.FieldDefinition>} value
 * @return {!proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsRes} returns this
*/
proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsRes.prototype.setPaymentFieldsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.commons.public.FieldDefinition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.public.FieldDefinition}
 */
proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsRes.prototype.addPaymentFields = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.commons.public.FieldDefinition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsRes} returns this
 */
proto.api.v1alpha1.integrations.ListAvailablePaymentFieldsRes.prototype.clearPaymentFieldsList = function() {
  return this.setPaymentFieldsList([]);
};


goog.object.extend(exports, proto.api.v1alpha1.integrations);
