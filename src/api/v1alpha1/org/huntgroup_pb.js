// source: api/v1alpha1/org/huntgroup.proto
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

var api_commons_org_pb = require('../../../api/commons/org_pb.js');
goog.object.extend(proto, api_commons_org_pb);
var api_commons_org_huntgroup_pb = require('../../../api/commons/org/huntgroup_pb.js');
goog.object.extend(proto, api_commons_org_huntgroup_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
goog.exportSymbol('proto.api.v1alpha1.org.CopyAgentTriggerRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.CopyAgentTriggerResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.CopyDataDipTemplateRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.CopyDataDipTemplateResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.CopyHuntGroupWebLinkRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.CopyHuntGroupWebLinkResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.CreateAgentResponseAutoRulesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.CreateAgentResponseAutoRulesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.CreateDataDipTemplateRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.CreateDataDipTemplateResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.CreateHuntGroupRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.CreateHuntGroupResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.CreateHuntGroupScriptRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.CreateHuntGroupScriptResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.DeleteDataDipTemplateRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.DeleteDataDipTemplateResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.DeleteHuntGroupRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.DeleteHuntGroupResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.DeleteHuntGroupScriptRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.DeleteHuntGroupScriptResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetDataDipTemplateRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetDataDipTemplateResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetHuntGroupDetailsRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetHuntGroupDetailsResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetHuntGroupScriptRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetHuntGroupScriptResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetHuntGroupSettingsRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetHuntGroupSettingsResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.ListAgentResponseAutoRulesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.ListAgentResponseAutoRulesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.ListAgentTriggersRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.ListAgentTriggersResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.ListCallerIdBucketsRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.ListCallerIdBucketsResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.ListDataDipTemplatesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.ListDataDipTemplatesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.ListHuntGroupWebLinksRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.ListHuntGroupWebLinksResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataRequest.Filter', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateAgentTriggersRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateAgentTriggersResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateDataDipTemplateRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateDataDipTemplateResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateHuntGroupScriptRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateHuntGroupScriptResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateHuntGroupSettingsResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateHuntGroupWebLinksRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateHuntGroupWebLinksResponse', null, global);
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
proto.api.v1alpha1.org.GetHuntGroupSettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetHuntGroupSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetHuntGroupSettingsRequest.displayName = 'proto.api.v1alpha1.org.GetHuntGroupSettingsRequest';
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
proto.api.v1alpha1.org.GetHuntGroupSettingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetHuntGroupSettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.displayName = 'proto.api.v1alpha1.org.GetHuntGroupSettingsResponse';
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
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.displayName = 'proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest';
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
proto.api.v1alpha1.org.UpdateHuntGroupSettingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateHuntGroupSettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateHuntGroupSettingsResponse.displayName = 'proto.api.v1alpha1.org.UpdateHuntGroupSettingsResponse';
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
proto.api.v1alpha1.org.CreateHuntGroupRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.CreateHuntGroupRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.CreateHuntGroupRequest.displayName = 'proto.api.v1alpha1.org.CreateHuntGroupRequest';
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
proto.api.v1alpha1.org.CreateHuntGroupResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.CreateHuntGroupResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.CreateHuntGroupResponse.displayName = 'proto.api.v1alpha1.org.CreateHuntGroupResponse';
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
proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsRequest.displayName = 'proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsRequest';
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
proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsResponse.displayName = 'proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsResponse';
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
proto.api.v1alpha1.org.DeleteHuntGroupRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.DeleteHuntGroupRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.DeleteHuntGroupRequest.displayName = 'proto.api.v1alpha1.org.DeleteHuntGroupRequest';
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
proto.api.v1alpha1.org.DeleteHuntGroupResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.DeleteHuntGroupResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.DeleteHuntGroupResponse.displayName = 'proto.api.v1alpha1.org.DeleteHuntGroupResponse';
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
proto.api.v1alpha1.org.GetHuntGroupDetailsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetHuntGroupDetailsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetHuntGroupDetailsRequest.displayName = 'proto.api.v1alpha1.org.GetHuntGroupDetailsRequest';
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
proto.api.v1alpha1.org.GetHuntGroupDetailsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetHuntGroupDetailsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetHuntGroupDetailsResponse.displayName = 'proto.api.v1alpha1.org.GetHuntGroupDetailsResponse';
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
proto.api.v1alpha1.org.ListCallerIdBucketsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.ListCallerIdBucketsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.ListCallerIdBucketsRequest.displayName = 'proto.api.v1alpha1.org.ListCallerIdBucketsRequest';
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
proto.api.v1alpha1.org.ListCallerIdBucketsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.ListCallerIdBucketsResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.ListCallerIdBucketsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.ListCallerIdBucketsResponse.displayName = 'proto.api.v1alpha1.org.ListCallerIdBucketsResponse';
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
proto.api.v1alpha1.org.GetDataDipTemplateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetDataDipTemplateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetDataDipTemplateRequest.displayName = 'proto.api.v1alpha1.org.GetDataDipTemplateRequest';
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
proto.api.v1alpha1.org.GetDataDipTemplateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetDataDipTemplateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetDataDipTemplateResponse.displayName = 'proto.api.v1alpha1.org.GetDataDipTemplateResponse';
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
proto.api.v1alpha1.org.ListDataDipTemplatesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.ListDataDipTemplatesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.ListDataDipTemplatesRequest.displayName = 'proto.api.v1alpha1.org.ListDataDipTemplatesRequest';
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
proto.api.v1alpha1.org.ListDataDipTemplatesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.ListDataDipTemplatesResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.ListDataDipTemplatesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.ListDataDipTemplatesResponse.displayName = 'proto.api.v1alpha1.org.ListDataDipTemplatesResponse';
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
proto.api.v1alpha1.org.CreateDataDipTemplateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.CreateDataDipTemplateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.CreateDataDipTemplateRequest.displayName = 'proto.api.v1alpha1.org.CreateDataDipTemplateRequest';
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
proto.api.v1alpha1.org.CreateDataDipTemplateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.CreateDataDipTemplateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.CreateDataDipTemplateResponse.displayName = 'proto.api.v1alpha1.org.CreateDataDipTemplateResponse';
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
proto.api.v1alpha1.org.UpdateDataDipTemplateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateDataDipTemplateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateDataDipTemplateRequest.displayName = 'proto.api.v1alpha1.org.UpdateDataDipTemplateRequest';
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
proto.api.v1alpha1.org.UpdateDataDipTemplateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateDataDipTemplateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateDataDipTemplateResponse.displayName = 'proto.api.v1alpha1.org.UpdateDataDipTemplateResponse';
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
proto.api.v1alpha1.org.DeleteDataDipTemplateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.DeleteDataDipTemplateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.DeleteDataDipTemplateRequest.displayName = 'proto.api.v1alpha1.org.DeleteDataDipTemplateRequest';
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
proto.api.v1alpha1.org.DeleteDataDipTemplateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.DeleteDataDipTemplateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.DeleteDataDipTemplateResponse.displayName = 'proto.api.v1alpha1.org.DeleteDataDipTemplateResponse';
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
proto.api.v1alpha1.org.CopyDataDipTemplateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.CopyDataDipTemplateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.CopyDataDipTemplateRequest.displayName = 'proto.api.v1alpha1.org.CopyDataDipTemplateRequest';
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
proto.api.v1alpha1.org.CopyDataDipTemplateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.CopyDataDipTemplateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.CopyDataDipTemplateResponse.displayName = 'proto.api.v1alpha1.org.CopyDataDipTemplateResponse';
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
proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationRequest.displayName = 'proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationRequest';
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
proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationResponse.displayName = 'proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationResponse';
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
proto.api.v1alpha1.org.ListAgentResponseAutoRulesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.ListAgentResponseAutoRulesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.ListAgentResponseAutoRulesRequest.displayName = 'proto.api.v1alpha1.org.ListAgentResponseAutoRulesRequest';
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
proto.api.v1alpha1.org.ListAgentResponseAutoRulesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.ListAgentResponseAutoRulesResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.ListAgentResponseAutoRulesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.ListAgentResponseAutoRulesResponse.displayName = 'proto.api.v1alpha1.org.ListAgentResponseAutoRulesResponse';
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
proto.api.v1alpha1.org.CreateAgentResponseAutoRulesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.CreateAgentResponseAutoRulesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.CreateAgentResponseAutoRulesRequest.displayName = 'proto.api.v1alpha1.org.CreateAgentResponseAutoRulesRequest';
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
proto.api.v1alpha1.org.CreateAgentResponseAutoRulesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.CreateAgentResponseAutoRulesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.CreateAgentResponseAutoRulesResponse.displayName = 'proto.api.v1alpha1.org.CreateAgentResponseAutoRulesResponse';
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
proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesRequest.displayName = 'proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesRequest';
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
proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesResponse.displayName = 'proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesResponse';
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
proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesRequest.displayName = 'proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesRequest';
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
proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesResponse.displayName = 'proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesResponse';
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
proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateRequest.displayName = 'proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateRequest';
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
proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateResponse.displayName = 'proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateResponse';
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
proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateRequest.displayName = 'proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateRequest';
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
proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateResponse.displayName = 'proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateResponse';
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
proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateRequest.displayName = 'proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateRequest';
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
proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateResponse.displayName = 'proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateResponse';
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
proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateRequest.displayName = 'proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateRequest';
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
proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateResponse.displayName = 'proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateResponse';
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
proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateRequest.displayName = 'proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateRequest';
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
proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateResponse.displayName = 'proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateResponse';
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
proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateRequest.displayName = 'proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateRequest';
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
proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateResponse.displayName = 'proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateResponse';
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
proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataRequest.displayName = 'proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataRequest';
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
proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataResponse.displayName = 'proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataResponse';
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
proto.api.v1alpha1.org.ListHuntGroupWebLinksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.ListHuntGroupWebLinksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.ListHuntGroupWebLinksRequest.displayName = 'proto.api.v1alpha1.org.ListHuntGroupWebLinksRequest';
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
proto.api.v1alpha1.org.ListHuntGroupWebLinksResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.ListHuntGroupWebLinksResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.ListHuntGroupWebLinksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.ListHuntGroupWebLinksResponse.displayName = 'proto.api.v1alpha1.org.ListHuntGroupWebLinksResponse';
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
proto.api.v1alpha1.org.CopyHuntGroupWebLinkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.CopyHuntGroupWebLinkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.CopyHuntGroupWebLinkRequest.displayName = 'proto.api.v1alpha1.org.CopyHuntGroupWebLinkRequest';
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
proto.api.v1alpha1.org.CopyHuntGroupWebLinkResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.CopyHuntGroupWebLinkResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.CopyHuntGroupWebLinkResponse.displayName = 'proto.api.v1alpha1.org.CopyHuntGroupWebLinkResponse';
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
proto.api.v1alpha1.org.UpdateHuntGroupWebLinksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.UpdateHuntGroupWebLinksRequest.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateHuntGroupWebLinksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateHuntGroupWebLinksRequest.displayName = 'proto.api.v1alpha1.org.UpdateHuntGroupWebLinksRequest';
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
proto.api.v1alpha1.org.UpdateHuntGroupWebLinksResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateHuntGroupWebLinksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateHuntGroupWebLinksResponse.displayName = 'proto.api.v1alpha1.org.UpdateHuntGroupWebLinksResponse';
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
proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksRequest.displayName = 'proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksRequest';
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
proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksResponse.displayName = 'proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksResponse';
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
proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkRequest.displayName = 'proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkRequest';
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
proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkResponse.displayName = 'proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkResponse';
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
proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksRequest.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksRequest.displayName = 'proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksRequest';
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
proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksResponse.displayName = 'proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksResponse';
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
proto.api.v1alpha1.org.ListAgentTriggersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.ListAgentTriggersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.ListAgentTriggersRequest.displayName = 'proto.api.v1alpha1.org.ListAgentTriggersRequest';
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
proto.api.v1alpha1.org.ListAgentTriggersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.ListAgentTriggersResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.ListAgentTriggersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.ListAgentTriggersResponse.displayName = 'proto.api.v1alpha1.org.ListAgentTriggersResponse';
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
proto.api.v1alpha1.org.CopyAgentTriggerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.CopyAgentTriggerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.CopyAgentTriggerRequest.displayName = 'proto.api.v1alpha1.org.CopyAgentTriggerRequest';
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
proto.api.v1alpha1.org.CopyAgentTriggerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.CopyAgentTriggerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.CopyAgentTriggerResponse.displayName = 'proto.api.v1alpha1.org.CopyAgentTriggerResponse';
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
proto.api.v1alpha1.org.UpdateAgentTriggersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.UpdateAgentTriggersRequest.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateAgentTriggersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateAgentTriggersRequest.displayName = 'proto.api.v1alpha1.org.UpdateAgentTriggersRequest';
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
proto.api.v1alpha1.org.UpdateAgentTriggersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateAgentTriggersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateAgentTriggersResponse.displayName = 'proto.api.v1alpha1.org.UpdateAgentTriggersResponse';
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
proto.api.v1alpha1.org.GetHuntGroupScriptRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetHuntGroupScriptRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetHuntGroupScriptRequest.displayName = 'proto.api.v1alpha1.org.GetHuntGroupScriptRequest';
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
proto.api.v1alpha1.org.GetHuntGroupScriptResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetHuntGroupScriptResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetHuntGroupScriptResponse.displayName = 'proto.api.v1alpha1.org.GetHuntGroupScriptResponse';
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
proto.api.v1alpha1.org.CreateHuntGroupScriptRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.CreateHuntGroupScriptRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.CreateHuntGroupScriptRequest.displayName = 'proto.api.v1alpha1.org.CreateHuntGroupScriptRequest';
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
proto.api.v1alpha1.org.CreateHuntGroupScriptResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.CreateHuntGroupScriptResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.CreateHuntGroupScriptResponse.displayName = 'proto.api.v1alpha1.org.CreateHuntGroupScriptResponse';
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
proto.api.v1alpha1.org.UpdateHuntGroupScriptRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateHuntGroupScriptRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateHuntGroupScriptRequest.displayName = 'proto.api.v1alpha1.org.UpdateHuntGroupScriptRequest';
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
proto.api.v1alpha1.org.UpdateHuntGroupScriptResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateHuntGroupScriptResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateHuntGroupScriptResponse.displayName = 'proto.api.v1alpha1.org.UpdateHuntGroupScriptResponse';
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
proto.api.v1alpha1.org.DeleteHuntGroupScriptRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.DeleteHuntGroupScriptRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.DeleteHuntGroupScriptRequest.displayName = 'proto.api.v1alpha1.org.DeleteHuntGroupScriptRequest';
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
proto.api.v1alpha1.org.DeleteHuntGroupScriptResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.DeleteHuntGroupScriptResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.DeleteHuntGroupScriptResponse.displayName = 'proto.api.v1alpha1.org.DeleteHuntGroupScriptResponse';
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
proto.api.v1alpha1.org.GetHuntGroupSettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetHuntGroupSettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetHuntGroupSettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetHuntGroupSettingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    huntGroupSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.org.GetHuntGroupSettingsRequest}
 */
proto.api.v1alpha1.org.GetHuntGroupSettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetHuntGroupSettingsRequest;
  return proto.api.v1alpha1.org.GetHuntGroupSettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetHuntGroupSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetHuntGroupSettingsRequest}
 */
proto.api.v1alpha1.org.GetHuntGroupSettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHuntGroupSid(value);
      break;
    case 100:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
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
proto.api.v1alpha1.org.GetHuntGroupSettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetHuntGroupSettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetHuntGroupSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetHuntGroupSettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      100,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 hunt_group_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.org.GetHuntGroupSettingsRequest.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.GetHuntGroupSettingsRequest} returns this
 */
proto.api.v1alpha1.org.GetHuntGroupSettingsRequest.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.FieldMask field_mask = 100;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.GetHuntGroupSettingsRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 100));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.GetHuntGroupSettingsRequest} returns this
*/
proto.api.v1alpha1.org.GetHuntGroupSettingsRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 100, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetHuntGroupSettingsRequest} returns this
 */
proto.api.v1alpha1.org.GetHuntGroupSettingsRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetHuntGroupSettingsRequest.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 100) != null;
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
proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetHuntGroupSettingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    generalSettings: (f = msg.getGeneralSettings()) && api_commons_org_huntgroup_pb.GeneralSettings.toObject(includeInstance, f),
    communicationSettings: (f = msg.getCommunicationSettings()) && api_commons_org_huntgroup_pb.CommunicationSettings.toObject(includeInstance, f),
    callbackSettings: (f = msg.getCallbackSettings()) && api_commons_org_huntgroup_pb.CallbackSettings.toObject(includeInstance, f),
    previewDialSettings: (f = msg.getPreviewDialSettings()) && api_commons_org_huntgroup_pb.PreviewDialSettings.toObject(includeInstance, f),
    manualDialSettings: (f = msg.getManualDialSettings()) && api_commons_org_huntgroup_pb.ManualDialSettings.toObject(includeInstance, f),
    transferCallSettings: (f = msg.getTransferCallSettings()) && api_commons_org_huntgroup_pb.TransferCallSettings.toObject(includeInstance, f),
    numberHistorySettings: (f = msg.getNumberHistorySettings()) && api_commons_org_huntgroup_pb.NumberHistorySettings.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.org.GetHuntGroupSettingsResponse}
 */
proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetHuntGroupSettingsResponse;
  return proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetHuntGroupSettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetHuntGroupSettingsResponse}
 */
proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_huntgroup_pb.GeneralSettings;
      reader.readMessage(value,api_commons_org_huntgroup_pb.GeneralSettings.deserializeBinaryFromReader);
      msg.setGeneralSettings(value);
      break;
    case 2:
      var value = new api_commons_org_huntgroup_pb.CommunicationSettings;
      reader.readMessage(value,api_commons_org_huntgroup_pb.CommunicationSettings.deserializeBinaryFromReader);
      msg.setCommunicationSettings(value);
      break;
    case 3:
      var value = new api_commons_org_huntgroup_pb.CallbackSettings;
      reader.readMessage(value,api_commons_org_huntgroup_pb.CallbackSettings.deserializeBinaryFromReader);
      msg.setCallbackSettings(value);
      break;
    case 4:
      var value = new api_commons_org_huntgroup_pb.PreviewDialSettings;
      reader.readMessage(value,api_commons_org_huntgroup_pb.PreviewDialSettings.deserializeBinaryFromReader);
      msg.setPreviewDialSettings(value);
      break;
    case 5:
      var value = new api_commons_org_huntgroup_pb.ManualDialSettings;
      reader.readMessage(value,api_commons_org_huntgroup_pb.ManualDialSettings.deserializeBinaryFromReader);
      msg.setManualDialSettings(value);
      break;
    case 6:
      var value = new api_commons_org_huntgroup_pb.TransferCallSettings;
      reader.readMessage(value,api_commons_org_huntgroup_pb.TransferCallSettings.deserializeBinaryFromReader);
      msg.setTransferCallSettings(value);
      break;
    case 7:
      var value = new api_commons_org_huntgroup_pb.NumberHistorySettings;
      reader.readMessage(value,api_commons_org_huntgroup_pb.NumberHistorySettings.deserializeBinaryFromReader);
      msg.setNumberHistorySettings(value);
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
proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetHuntGroupSettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneralSettings();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_huntgroup_pb.GeneralSettings.serializeBinaryToWriter
    );
  }
  f = message.getCommunicationSettings();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      api_commons_org_huntgroup_pb.CommunicationSettings.serializeBinaryToWriter
    );
  }
  f = message.getCallbackSettings();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      api_commons_org_huntgroup_pb.CallbackSettings.serializeBinaryToWriter
    );
  }
  f = message.getPreviewDialSettings();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      api_commons_org_huntgroup_pb.PreviewDialSettings.serializeBinaryToWriter
    );
  }
  f = message.getManualDialSettings();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      api_commons_org_huntgroup_pb.ManualDialSettings.serializeBinaryToWriter
    );
  }
  f = message.getTransferCallSettings();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      api_commons_org_huntgroup_pb.TransferCallSettings.serializeBinaryToWriter
    );
  }
  f = message.getNumberHistorySettings();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      api_commons_org_huntgroup_pb.NumberHistorySettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.GeneralSettings general_settings = 1;
 * @return {?proto.api.commons.org.GeneralSettings}
 */
proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.prototype.getGeneralSettings = function() {
  return /** @type{?proto.api.commons.org.GeneralSettings} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.GeneralSettings, 1));
};


/**
 * @param {?proto.api.commons.org.GeneralSettings|undefined} value
 * @return {!proto.api.v1alpha1.org.GetHuntGroupSettingsResponse} returns this
*/
proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.prototype.setGeneralSettings = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetHuntGroupSettingsResponse} returns this
 */
proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.prototype.clearGeneralSettings = function() {
  return this.setGeneralSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.prototype.hasGeneralSettings = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional api.commons.org.CommunicationSettings communication_settings = 2;
 * @return {?proto.api.commons.org.CommunicationSettings}
 */
proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.prototype.getCommunicationSettings = function() {
  return /** @type{?proto.api.commons.org.CommunicationSettings} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.CommunicationSettings, 2));
};


/**
 * @param {?proto.api.commons.org.CommunicationSettings|undefined} value
 * @return {!proto.api.v1alpha1.org.GetHuntGroupSettingsResponse} returns this
*/
proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.prototype.setCommunicationSettings = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetHuntGroupSettingsResponse} returns this
 */
proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.prototype.clearCommunicationSettings = function() {
  return this.setCommunicationSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.prototype.hasCommunicationSettings = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional api.commons.org.CallbackSettings callback_settings = 3;
 * @return {?proto.api.commons.org.CallbackSettings}
 */
proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.prototype.getCallbackSettings = function() {
  return /** @type{?proto.api.commons.org.CallbackSettings} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.CallbackSettings, 3));
};


/**
 * @param {?proto.api.commons.org.CallbackSettings|undefined} value
 * @return {!proto.api.v1alpha1.org.GetHuntGroupSettingsResponse} returns this
*/
proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.prototype.setCallbackSettings = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetHuntGroupSettingsResponse} returns this
 */
proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.prototype.clearCallbackSettings = function() {
  return this.setCallbackSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.prototype.hasCallbackSettings = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional api.commons.org.PreviewDialSettings preview_dial_settings = 4;
 * @return {?proto.api.commons.org.PreviewDialSettings}
 */
proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.prototype.getPreviewDialSettings = function() {
  return /** @type{?proto.api.commons.org.PreviewDialSettings} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.PreviewDialSettings, 4));
};


/**
 * @param {?proto.api.commons.org.PreviewDialSettings|undefined} value
 * @return {!proto.api.v1alpha1.org.GetHuntGroupSettingsResponse} returns this
*/
proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.prototype.setPreviewDialSettings = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetHuntGroupSettingsResponse} returns this
 */
proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.prototype.clearPreviewDialSettings = function() {
  return this.setPreviewDialSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.prototype.hasPreviewDialSettings = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional api.commons.org.ManualDialSettings manual_dial_settings = 5;
 * @return {?proto.api.commons.org.ManualDialSettings}
 */
proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.prototype.getManualDialSettings = function() {
  return /** @type{?proto.api.commons.org.ManualDialSettings} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.ManualDialSettings, 5));
};


/**
 * @param {?proto.api.commons.org.ManualDialSettings|undefined} value
 * @return {!proto.api.v1alpha1.org.GetHuntGroupSettingsResponse} returns this
*/
proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.prototype.setManualDialSettings = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetHuntGroupSettingsResponse} returns this
 */
proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.prototype.clearManualDialSettings = function() {
  return this.setManualDialSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.prototype.hasManualDialSettings = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional api.commons.org.TransferCallSettings transfer_call_settings = 6;
 * @return {?proto.api.commons.org.TransferCallSettings}
 */
proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.prototype.getTransferCallSettings = function() {
  return /** @type{?proto.api.commons.org.TransferCallSettings} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.TransferCallSettings, 6));
};


/**
 * @param {?proto.api.commons.org.TransferCallSettings|undefined} value
 * @return {!proto.api.v1alpha1.org.GetHuntGroupSettingsResponse} returns this
*/
proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.prototype.setTransferCallSettings = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetHuntGroupSettingsResponse} returns this
 */
proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.prototype.clearTransferCallSettings = function() {
  return this.setTransferCallSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.prototype.hasTransferCallSettings = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional api.commons.org.NumberHistorySettings number_history_settings = 7;
 * @return {?proto.api.commons.org.NumberHistorySettings}
 */
proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.prototype.getNumberHistorySettings = function() {
  return /** @type{?proto.api.commons.org.NumberHistorySettings} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.NumberHistorySettings, 7));
};


/**
 * @param {?proto.api.commons.org.NumberHistorySettings|undefined} value
 * @return {!proto.api.v1alpha1.org.GetHuntGroupSettingsResponse} returns this
*/
proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.prototype.setNumberHistorySettings = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetHuntGroupSettingsResponse} returns this
 */
proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.prototype.clearNumberHistorySettings = function() {
  return this.setNumberHistorySettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetHuntGroupSettingsResponse.prototype.hasNumberHistorySettings = function() {
  return jspb.Message.getField(this, 7) != null;
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
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    huntGroupSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    generalSettings: (f = msg.getGeneralSettings()) && api_commons_org_huntgroup_pb.GeneralSettings.toObject(includeInstance, f),
    communicationSettings: (f = msg.getCommunicationSettings()) && api_commons_org_huntgroup_pb.CommunicationSettings.toObject(includeInstance, f),
    callbackSettings: (f = msg.getCallbackSettings()) && api_commons_org_huntgroup_pb.CallbackSettings.toObject(includeInstance, f),
    previewDialSettings: (f = msg.getPreviewDialSettings()) && api_commons_org_huntgroup_pb.PreviewDialSettings.toObject(includeInstance, f),
    manualDialSettings: (f = msg.getManualDialSettings()) && api_commons_org_huntgroup_pb.ManualDialSettings.toObject(includeInstance, f),
    transferCallSettings: (f = msg.getTransferCallSettings()) && api_commons_org_huntgroup_pb.TransferCallSettings.toObject(includeInstance, f),
    numberHistorySettings: (f = msg.getNumberHistorySettings()) && api_commons_org_huntgroup_pb.NumberHistorySettings.toObject(includeInstance, f),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest}
 */
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest;
  return proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest}
 */
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHuntGroupSid(value);
      break;
    case 2:
      var value = new api_commons_org_huntgroup_pb.GeneralSettings;
      reader.readMessage(value,api_commons_org_huntgroup_pb.GeneralSettings.deserializeBinaryFromReader);
      msg.setGeneralSettings(value);
      break;
    case 3:
      var value = new api_commons_org_huntgroup_pb.CommunicationSettings;
      reader.readMessage(value,api_commons_org_huntgroup_pb.CommunicationSettings.deserializeBinaryFromReader);
      msg.setCommunicationSettings(value);
      break;
    case 4:
      var value = new api_commons_org_huntgroup_pb.CallbackSettings;
      reader.readMessage(value,api_commons_org_huntgroup_pb.CallbackSettings.deserializeBinaryFromReader);
      msg.setCallbackSettings(value);
      break;
    case 5:
      var value = new api_commons_org_huntgroup_pb.PreviewDialSettings;
      reader.readMessage(value,api_commons_org_huntgroup_pb.PreviewDialSettings.deserializeBinaryFromReader);
      msg.setPreviewDialSettings(value);
      break;
    case 6:
      var value = new api_commons_org_huntgroup_pb.ManualDialSettings;
      reader.readMessage(value,api_commons_org_huntgroup_pb.ManualDialSettings.deserializeBinaryFromReader);
      msg.setManualDialSettings(value);
      break;
    case 7:
      var value = new api_commons_org_huntgroup_pb.TransferCallSettings;
      reader.readMessage(value,api_commons_org_huntgroup_pb.TransferCallSettings.deserializeBinaryFromReader);
      msg.setTransferCallSettings(value);
      break;
    case 8:
      var value = new api_commons_org_huntgroup_pb.NumberHistorySettings;
      reader.readMessage(value,api_commons_org_huntgroup_pb.NumberHistorySettings.deserializeBinaryFromReader);
      msg.setNumberHistorySettings(value);
      break;
    case 100:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
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
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getGeneralSettings();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      api_commons_org_huntgroup_pb.GeneralSettings.serializeBinaryToWriter
    );
  }
  f = message.getCommunicationSettings();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      api_commons_org_huntgroup_pb.CommunicationSettings.serializeBinaryToWriter
    );
  }
  f = message.getCallbackSettings();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      api_commons_org_huntgroup_pb.CallbackSettings.serializeBinaryToWriter
    );
  }
  f = message.getPreviewDialSettings();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      api_commons_org_huntgroup_pb.PreviewDialSettings.serializeBinaryToWriter
    );
  }
  f = message.getManualDialSettings();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      api_commons_org_huntgroup_pb.ManualDialSettings.serializeBinaryToWriter
    );
  }
  f = message.getTransferCallSettings();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      api_commons_org_huntgroup_pb.TransferCallSettings.serializeBinaryToWriter
    );
  }
  f = message.getNumberHistorySettings();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      api_commons_org_huntgroup_pb.NumberHistorySettings.serializeBinaryToWriter
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      100,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 hunt_group_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest} returns this
 */
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional api.commons.org.GeneralSettings general_settings = 2;
 * @return {?proto.api.commons.org.GeneralSettings}
 */
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.prototype.getGeneralSettings = function() {
  return /** @type{?proto.api.commons.org.GeneralSettings} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.GeneralSettings, 2));
};


/**
 * @param {?proto.api.commons.org.GeneralSettings|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest} returns this
*/
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.prototype.setGeneralSettings = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest} returns this
 */
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.prototype.clearGeneralSettings = function() {
  return this.setGeneralSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.prototype.hasGeneralSettings = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional api.commons.org.CommunicationSettings communication_settings = 3;
 * @return {?proto.api.commons.org.CommunicationSettings}
 */
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.prototype.getCommunicationSettings = function() {
  return /** @type{?proto.api.commons.org.CommunicationSettings} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.CommunicationSettings, 3));
};


/**
 * @param {?proto.api.commons.org.CommunicationSettings|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest} returns this
*/
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.prototype.setCommunicationSettings = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest} returns this
 */
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.prototype.clearCommunicationSettings = function() {
  return this.setCommunicationSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.prototype.hasCommunicationSettings = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional api.commons.org.CallbackSettings callback_settings = 4;
 * @return {?proto.api.commons.org.CallbackSettings}
 */
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.prototype.getCallbackSettings = function() {
  return /** @type{?proto.api.commons.org.CallbackSettings} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.CallbackSettings, 4));
};


/**
 * @param {?proto.api.commons.org.CallbackSettings|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest} returns this
*/
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.prototype.setCallbackSettings = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest} returns this
 */
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.prototype.clearCallbackSettings = function() {
  return this.setCallbackSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.prototype.hasCallbackSettings = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional api.commons.org.PreviewDialSettings preview_dial_settings = 5;
 * @return {?proto.api.commons.org.PreviewDialSettings}
 */
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.prototype.getPreviewDialSettings = function() {
  return /** @type{?proto.api.commons.org.PreviewDialSettings} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.PreviewDialSettings, 5));
};


/**
 * @param {?proto.api.commons.org.PreviewDialSettings|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest} returns this
*/
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.prototype.setPreviewDialSettings = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest} returns this
 */
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.prototype.clearPreviewDialSettings = function() {
  return this.setPreviewDialSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.prototype.hasPreviewDialSettings = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional api.commons.org.ManualDialSettings manual_dial_settings = 6;
 * @return {?proto.api.commons.org.ManualDialSettings}
 */
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.prototype.getManualDialSettings = function() {
  return /** @type{?proto.api.commons.org.ManualDialSettings} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.ManualDialSettings, 6));
};


/**
 * @param {?proto.api.commons.org.ManualDialSettings|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest} returns this
*/
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.prototype.setManualDialSettings = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest} returns this
 */
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.prototype.clearManualDialSettings = function() {
  return this.setManualDialSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.prototype.hasManualDialSettings = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional api.commons.org.TransferCallSettings transfer_call_settings = 7;
 * @return {?proto.api.commons.org.TransferCallSettings}
 */
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.prototype.getTransferCallSettings = function() {
  return /** @type{?proto.api.commons.org.TransferCallSettings} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.TransferCallSettings, 7));
};


/**
 * @param {?proto.api.commons.org.TransferCallSettings|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest} returns this
*/
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.prototype.setTransferCallSettings = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest} returns this
 */
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.prototype.clearTransferCallSettings = function() {
  return this.setTransferCallSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.prototype.hasTransferCallSettings = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional api.commons.org.NumberHistorySettings number_history_settings = 8;
 * @return {?proto.api.commons.org.NumberHistorySettings}
 */
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.prototype.getNumberHistorySettings = function() {
  return /** @type{?proto.api.commons.org.NumberHistorySettings} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.NumberHistorySettings, 8));
};


/**
 * @param {?proto.api.commons.org.NumberHistorySettings|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest} returns this
*/
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.prototype.setNumberHistorySettings = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest} returns this
 */
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.prototype.clearNumberHistorySettings = function() {
  return this.setNumberHistorySettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.prototype.hasNumberHistorySettings = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 100;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 100));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest} returns this
*/
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 100, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest} returns this
 */
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateHuntGroupSettingsRequest.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 100) != null;
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
proto.api.v1alpha1.org.UpdateHuntGroupSettingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateHuntGroupSettingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateHuntGroupSettingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateHuntGroupSettingsResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupSettingsResponse}
 */
proto.api.v1alpha1.org.UpdateHuntGroupSettingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateHuntGroupSettingsResponse;
  return proto.api.v1alpha1.org.UpdateHuntGroupSettingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateHuntGroupSettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupSettingsResponse}
 */
proto.api.v1alpha1.org.UpdateHuntGroupSettingsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateHuntGroupSettingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateHuntGroupSettingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateHuntGroupSettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateHuntGroupSettingsResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.CreateHuntGroupRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.CreateHuntGroupRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.CreateHuntGroupRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CreateHuntGroupRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.api.v1alpha1.org.CreateHuntGroupRequest}
 */
proto.api.v1alpha1.org.CreateHuntGroupRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.CreateHuntGroupRequest;
  return proto.api.v1alpha1.org.CreateHuntGroupRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.CreateHuntGroupRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.CreateHuntGroupRequest}
 */
proto.api.v1alpha1.org.CreateHuntGroupRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {!proto.api.commons.org.HuntGroupType} */ (reader.readEnum());
      msg.setType(value);
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
proto.api.v1alpha1.org.CreateHuntGroupRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.CreateHuntGroupRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.CreateHuntGroupRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CreateHuntGroupRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.CreateHuntGroupRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.CreateHuntGroupRequest} returns this
 */
proto.api.v1alpha1.org.CreateHuntGroupRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.CreateHuntGroupRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.CreateHuntGroupRequest} returns this
 */
proto.api.v1alpha1.org.CreateHuntGroupRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional api.commons.org.HuntGroupType type = 3;
 * @return {!proto.api.commons.org.HuntGroupType}
 */
proto.api.v1alpha1.org.CreateHuntGroupRequest.prototype.getType = function() {
  return /** @type {!proto.api.commons.org.HuntGroupType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.org.HuntGroupType} value
 * @return {!proto.api.v1alpha1.org.CreateHuntGroupRequest} returns this
 */
proto.api.v1alpha1.org.CreateHuntGroupRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
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
proto.api.v1alpha1.org.CreateHuntGroupResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.CreateHuntGroupResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.CreateHuntGroupResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CreateHuntGroupResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    huntGroupSid: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.api.v1alpha1.org.CreateHuntGroupResponse}
 */
proto.api.v1alpha1.org.CreateHuntGroupResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.CreateHuntGroupResponse;
  return proto.api.v1alpha1.org.CreateHuntGroupResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.CreateHuntGroupResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.CreateHuntGroupResponse}
 */
proto.api.v1alpha1.org.CreateHuntGroupResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHuntGroupSid(value);
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
proto.api.v1alpha1.org.CreateHuntGroupResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.CreateHuntGroupResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.CreateHuntGroupResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CreateHuntGroupResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 hunt_group_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.org.CreateHuntGroupResponse.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.CreateHuntGroupResponse} returns this
 */
proto.api.v1alpha1.org.CreateHuntGroupResponse.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    huntGroupSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    type: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsRequest}
 */
proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsRequest;
  return proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsRequest}
 */
proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHuntGroupSid(value);
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
      var value = /** @type {!proto.api.commons.org.HuntGroupType} */ (reader.readEnum());
      msg.setType(value);
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
proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
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
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional int64 hunt_group_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsRequest.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsRequest} returns this
 */
proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsRequest.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsRequest} returns this
 */
proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsRequest} returns this
 */
proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional api.commons.org.HuntGroupType type = 4;
 * @return {!proto.api.commons.org.HuntGroupType}
 */
proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsRequest.prototype.getType = function() {
  return /** @type {!proto.api.commons.org.HuntGroupType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.org.HuntGroupType} value
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsRequest} returns this
 */
proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
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
proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsResponse}
 */
proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsResponse;
  return proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsResponse}
 */
proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateHuntGroupGeneralDetailsResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.DeleteHuntGroupRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.DeleteHuntGroupRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.DeleteHuntGroupRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.DeleteHuntGroupRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    huntGroupSid: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.api.v1alpha1.org.DeleteHuntGroupRequest}
 */
proto.api.v1alpha1.org.DeleteHuntGroupRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.DeleteHuntGroupRequest;
  return proto.api.v1alpha1.org.DeleteHuntGroupRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.DeleteHuntGroupRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.DeleteHuntGroupRequest}
 */
proto.api.v1alpha1.org.DeleteHuntGroupRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHuntGroupSid(value);
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
proto.api.v1alpha1.org.DeleteHuntGroupRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.DeleteHuntGroupRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.DeleteHuntGroupRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.DeleteHuntGroupRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 hunt_group_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.org.DeleteHuntGroupRequest.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.DeleteHuntGroupRequest} returns this
 */
proto.api.v1alpha1.org.DeleteHuntGroupRequest.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.api.v1alpha1.org.DeleteHuntGroupResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.DeleteHuntGroupResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.DeleteHuntGroupResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.DeleteHuntGroupResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.DeleteHuntGroupResponse}
 */
proto.api.v1alpha1.org.DeleteHuntGroupResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.DeleteHuntGroupResponse;
  return proto.api.v1alpha1.org.DeleteHuntGroupResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.DeleteHuntGroupResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.DeleteHuntGroupResponse}
 */
proto.api.v1alpha1.org.DeleteHuntGroupResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.DeleteHuntGroupResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.DeleteHuntGroupResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.DeleteHuntGroupResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.DeleteHuntGroupResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetHuntGroupDetailsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetHuntGroupDetailsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetHuntGroupDetailsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetHuntGroupDetailsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    huntGroupSid: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.api.v1alpha1.org.GetHuntGroupDetailsRequest}
 */
proto.api.v1alpha1.org.GetHuntGroupDetailsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetHuntGroupDetailsRequest;
  return proto.api.v1alpha1.org.GetHuntGroupDetailsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetHuntGroupDetailsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetHuntGroupDetailsRequest}
 */
proto.api.v1alpha1.org.GetHuntGroupDetailsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHuntGroupSid(value);
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
proto.api.v1alpha1.org.GetHuntGroupDetailsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetHuntGroupDetailsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetHuntGroupDetailsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetHuntGroupDetailsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 hunt_group_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.org.GetHuntGroupDetailsRequest.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.GetHuntGroupDetailsRequest} returns this
 */
proto.api.v1alpha1.org.GetHuntGroupDetailsRequest.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.api.v1alpha1.org.GetHuntGroupDetailsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetHuntGroupDetailsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetHuntGroupDetailsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetHuntGroupDetailsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    huntGroupDetails: (f = msg.getHuntGroupDetails()) && api_commons_org_huntgroup_pb.HuntGroupDetails.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.org.GetHuntGroupDetailsResponse}
 */
proto.api.v1alpha1.org.GetHuntGroupDetailsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetHuntGroupDetailsResponse;
  return proto.api.v1alpha1.org.GetHuntGroupDetailsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetHuntGroupDetailsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetHuntGroupDetailsResponse}
 */
proto.api.v1alpha1.org.GetHuntGroupDetailsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_huntgroup_pb.HuntGroupDetails;
      reader.readMessage(value,api_commons_org_huntgroup_pb.HuntGroupDetails.deserializeBinaryFromReader);
      msg.setHuntGroupDetails(value);
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
proto.api.v1alpha1.org.GetHuntGroupDetailsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetHuntGroupDetailsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetHuntGroupDetailsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetHuntGroupDetailsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntGroupDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_huntgroup_pb.HuntGroupDetails.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.HuntGroupDetails hunt_group_details = 1;
 * @return {?proto.api.commons.org.HuntGroupDetails}
 */
proto.api.v1alpha1.org.GetHuntGroupDetailsResponse.prototype.getHuntGroupDetails = function() {
  return /** @type{?proto.api.commons.org.HuntGroupDetails} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.HuntGroupDetails, 1));
};


/**
 * @param {?proto.api.commons.org.HuntGroupDetails|undefined} value
 * @return {!proto.api.v1alpha1.org.GetHuntGroupDetailsResponse} returns this
*/
proto.api.v1alpha1.org.GetHuntGroupDetailsResponse.prototype.setHuntGroupDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetHuntGroupDetailsResponse} returns this
 */
proto.api.v1alpha1.org.GetHuntGroupDetailsResponse.prototype.clearHuntGroupDetails = function() {
  return this.setHuntGroupDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetHuntGroupDetailsResponse.prototype.hasHuntGroupDetails = function() {
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
proto.api.v1alpha1.org.ListCallerIdBucketsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.ListCallerIdBucketsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.ListCallerIdBucketsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListCallerIdBucketsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.ListCallerIdBucketsRequest}
 */
proto.api.v1alpha1.org.ListCallerIdBucketsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.ListCallerIdBucketsRequest;
  return proto.api.v1alpha1.org.ListCallerIdBucketsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.ListCallerIdBucketsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.ListCallerIdBucketsRequest}
 */
proto.api.v1alpha1.org.ListCallerIdBucketsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.ListCallerIdBucketsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.ListCallerIdBucketsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.ListCallerIdBucketsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListCallerIdBucketsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.ListCallerIdBucketsResponse.repeatedFields_ = [1];



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
proto.api.v1alpha1.org.ListCallerIdBucketsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.ListCallerIdBucketsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.ListCallerIdBucketsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListCallerIdBucketsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    callerIdBucketDataList: jspb.Message.toObjectList(msg.getCallerIdBucketDataList(),
    api_commons_org_huntgroup_pb.CallerIdBucketData.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.org.ListCallerIdBucketsResponse}
 */
proto.api.v1alpha1.org.ListCallerIdBucketsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.ListCallerIdBucketsResponse;
  return proto.api.v1alpha1.org.ListCallerIdBucketsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.ListCallerIdBucketsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.ListCallerIdBucketsResponse}
 */
proto.api.v1alpha1.org.ListCallerIdBucketsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_huntgroup_pb.CallerIdBucketData;
      reader.readMessage(value,api_commons_org_huntgroup_pb.CallerIdBucketData.deserializeBinaryFromReader);
      msg.addCallerIdBucketData(value);
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
proto.api.v1alpha1.org.ListCallerIdBucketsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.ListCallerIdBucketsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.ListCallerIdBucketsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListCallerIdBucketsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCallerIdBucketDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      api_commons_org_huntgroup_pb.CallerIdBucketData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated api.commons.org.CallerIdBucketData caller_id_bucket_data = 1;
 * @return {!Array<!proto.api.commons.org.CallerIdBucketData>}
 */
proto.api.v1alpha1.org.ListCallerIdBucketsResponse.prototype.getCallerIdBucketDataList = function() {
  return /** @type{!Array<!proto.api.commons.org.CallerIdBucketData>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_huntgroup_pb.CallerIdBucketData, 1));
};


/**
 * @param {!Array<!proto.api.commons.org.CallerIdBucketData>} value
 * @return {!proto.api.v1alpha1.org.ListCallerIdBucketsResponse} returns this
*/
proto.api.v1alpha1.org.ListCallerIdBucketsResponse.prototype.setCallerIdBucketDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.commons.org.CallerIdBucketData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.CallerIdBucketData}
 */
proto.api.v1alpha1.org.ListCallerIdBucketsResponse.prototype.addCallerIdBucketData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.commons.org.CallerIdBucketData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.ListCallerIdBucketsResponse} returns this
 */
proto.api.v1alpha1.org.ListCallerIdBucketsResponse.prototype.clearCallerIdBucketDataList = function() {
  return this.setCallerIdBucketDataList([]);
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
proto.api.v1alpha1.org.GetDataDipTemplateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetDataDipTemplateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetDataDipTemplateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetDataDipTemplateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    xmlClientPropertySid: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.api.v1alpha1.org.GetDataDipTemplateRequest}
 */
proto.api.v1alpha1.org.GetDataDipTemplateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetDataDipTemplateRequest;
  return proto.api.v1alpha1.org.GetDataDipTemplateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetDataDipTemplateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetDataDipTemplateRequest}
 */
proto.api.v1alpha1.org.GetDataDipTemplateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setXmlClientPropertySid(value);
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
proto.api.v1alpha1.org.GetDataDipTemplateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetDataDipTemplateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetDataDipTemplateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetDataDipTemplateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getXmlClientPropertySid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 xml_client_property_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.org.GetDataDipTemplateRequest.prototype.getXmlClientPropertySid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.GetDataDipTemplateRequest} returns this
 */
proto.api.v1alpha1.org.GetDataDipTemplateRequest.prototype.setXmlClientPropertySid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.api.v1alpha1.org.GetDataDipTemplateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetDataDipTemplateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetDataDipTemplateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetDataDipTemplateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    template: (f = msg.getTemplate()) && api_commons_org_huntgroup_pb.DataDipConfig.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.org.GetDataDipTemplateResponse}
 */
proto.api.v1alpha1.org.GetDataDipTemplateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetDataDipTemplateResponse;
  return proto.api.v1alpha1.org.GetDataDipTemplateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetDataDipTemplateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetDataDipTemplateResponse}
 */
proto.api.v1alpha1.org.GetDataDipTemplateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_huntgroup_pb.DataDipConfig;
      reader.readMessage(value,api_commons_org_huntgroup_pb.DataDipConfig.deserializeBinaryFromReader);
      msg.setTemplate(value);
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
proto.api.v1alpha1.org.GetDataDipTemplateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetDataDipTemplateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetDataDipTemplateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetDataDipTemplateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTemplate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_huntgroup_pb.DataDipConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.DataDipConfig template = 1;
 * @return {?proto.api.commons.org.DataDipConfig}
 */
proto.api.v1alpha1.org.GetDataDipTemplateResponse.prototype.getTemplate = function() {
  return /** @type{?proto.api.commons.org.DataDipConfig} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.DataDipConfig, 1));
};


/**
 * @param {?proto.api.commons.org.DataDipConfig|undefined} value
 * @return {!proto.api.v1alpha1.org.GetDataDipTemplateResponse} returns this
*/
proto.api.v1alpha1.org.GetDataDipTemplateResponse.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetDataDipTemplateResponse} returns this
 */
proto.api.v1alpha1.org.GetDataDipTemplateResponse.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetDataDipTemplateResponse.prototype.hasTemplate = function() {
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
proto.api.v1alpha1.org.ListDataDipTemplatesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.ListDataDipTemplatesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.ListDataDipTemplatesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListDataDipTemplatesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.api.v1alpha1.org.ListDataDipTemplatesRequest}
 */
proto.api.v1alpha1.org.ListDataDipTemplatesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.ListDataDipTemplatesRequest;
  return proto.api.v1alpha1.org.ListDataDipTemplatesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.ListDataDipTemplatesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.ListDataDipTemplatesRequest}
 */
proto.api.v1alpha1.org.ListDataDipTemplatesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.commons.DataDipTemplateFilterType} */ (reader.readEnum());
      msg.setFilter(value);
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
proto.api.v1alpha1.org.ListDataDipTemplatesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.ListDataDipTemplatesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.ListDataDipTemplatesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListDataDipTemplatesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional api.commons.DataDipTemplateFilterType filter = 1;
 * @return {!proto.api.commons.DataDipTemplateFilterType}
 */
proto.api.v1alpha1.org.ListDataDipTemplatesRequest.prototype.getFilter = function() {
  return /** @type {!proto.api.commons.DataDipTemplateFilterType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.commons.DataDipTemplateFilterType} value
 * @return {!proto.api.v1alpha1.org.ListDataDipTemplatesRequest} returns this
 */
proto.api.v1alpha1.org.ListDataDipTemplatesRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.ListDataDipTemplatesResponse.repeatedFields_ = [1];



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
proto.api.v1alpha1.org.ListDataDipTemplatesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.ListDataDipTemplatesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.ListDataDipTemplatesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListDataDipTemplatesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    templatesList: jspb.Message.toObjectList(msg.getTemplatesList(),
    api_commons_org_huntgroup_pb.DataDipConfig.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.org.ListDataDipTemplatesResponse}
 */
proto.api.v1alpha1.org.ListDataDipTemplatesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.ListDataDipTemplatesResponse;
  return proto.api.v1alpha1.org.ListDataDipTemplatesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.ListDataDipTemplatesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.ListDataDipTemplatesResponse}
 */
proto.api.v1alpha1.org.ListDataDipTemplatesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_huntgroup_pb.DataDipConfig;
      reader.readMessage(value,api_commons_org_huntgroup_pb.DataDipConfig.deserializeBinaryFromReader);
      msg.addTemplates(value);
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
proto.api.v1alpha1.org.ListDataDipTemplatesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.ListDataDipTemplatesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.ListDataDipTemplatesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListDataDipTemplatesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTemplatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      api_commons_org_huntgroup_pb.DataDipConfig.serializeBinaryToWriter
    );
  }
};


/**
 * repeated api.commons.org.DataDipConfig templates = 1;
 * @return {!Array<!proto.api.commons.org.DataDipConfig>}
 */
proto.api.v1alpha1.org.ListDataDipTemplatesResponse.prototype.getTemplatesList = function() {
  return /** @type{!Array<!proto.api.commons.org.DataDipConfig>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_huntgroup_pb.DataDipConfig, 1));
};


/**
 * @param {!Array<!proto.api.commons.org.DataDipConfig>} value
 * @return {!proto.api.v1alpha1.org.ListDataDipTemplatesResponse} returns this
*/
proto.api.v1alpha1.org.ListDataDipTemplatesResponse.prototype.setTemplatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.commons.org.DataDipConfig=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.DataDipConfig}
 */
proto.api.v1alpha1.org.ListDataDipTemplatesResponse.prototype.addTemplates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.commons.org.DataDipConfig, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.ListDataDipTemplatesResponse} returns this
 */
proto.api.v1alpha1.org.ListDataDipTemplatesResponse.prototype.clearTemplatesList = function() {
  return this.setTemplatesList([]);
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
proto.api.v1alpha1.org.CreateDataDipTemplateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.CreateDataDipTemplateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.CreateDataDipTemplateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CreateDataDipTemplateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    template: (f = msg.getTemplate()) && api_commons_org_huntgroup_pb.DataDipConfig.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.org.CreateDataDipTemplateRequest}
 */
proto.api.v1alpha1.org.CreateDataDipTemplateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.CreateDataDipTemplateRequest;
  return proto.api.v1alpha1.org.CreateDataDipTemplateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.CreateDataDipTemplateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.CreateDataDipTemplateRequest}
 */
proto.api.v1alpha1.org.CreateDataDipTemplateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_huntgroup_pb.DataDipConfig;
      reader.readMessage(value,api_commons_org_huntgroup_pb.DataDipConfig.deserializeBinaryFromReader);
      msg.setTemplate(value);
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
proto.api.v1alpha1.org.CreateDataDipTemplateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.CreateDataDipTemplateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.CreateDataDipTemplateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CreateDataDipTemplateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTemplate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_huntgroup_pb.DataDipConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.DataDipConfig template = 1;
 * @return {?proto.api.commons.org.DataDipConfig}
 */
proto.api.v1alpha1.org.CreateDataDipTemplateRequest.prototype.getTemplate = function() {
  return /** @type{?proto.api.commons.org.DataDipConfig} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.DataDipConfig, 1));
};


/**
 * @param {?proto.api.commons.org.DataDipConfig|undefined} value
 * @return {!proto.api.v1alpha1.org.CreateDataDipTemplateRequest} returns this
*/
proto.api.v1alpha1.org.CreateDataDipTemplateRequest.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.CreateDataDipTemplateRequest} returns this
 */
proto.api.v1alpha1.org.CreateDataDipTemplateRequest.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.CreateDataDipTemplateRequest.prototype.hasTemplate = function() {
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
proto.api.v1alpha1.org.CreateDataDipTemplateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.CreateDataDipTemplateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.CreateDataDipTemplateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CreateDataDipTemplateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    xmlClientPropertySid: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.api.v1alpha1.org.CreateDataDipTemplateResponse}
 */
proto.api.v1alpha1.org.CreateDataDipTemplateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.CreateDataDipTemplateResponse;
  return proto.api.v1alpha1.org.CreateDataDipTemplateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.CreateDataDipTemplateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.CreateDataDipTemplateResponse}
 */
proto.api.v1alpha1.org.CreateDataDipTemplateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setXmlClientPropertySid(value);
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
proto.api.v1alpha1.org.CreateDataDipTemplateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.CreateDataDipTemplateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.CreateDataDipTemplateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CreateDataDipTemplateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getXmlClientPropertySid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 xml_client_property_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.org.CreateDataDipTemplateResponse.prototype.getXmlClientPropertySid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.CreateDataDipTemplateResponse} returns this
 */
proto.api.v1alpha1.org.CreateDataDipTemplateResponse.prototype.setXmlClientPropertySid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.api.v1alpha1.org.UpdateDataDipTemplateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateDataDipTemplateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateDataDipTemplateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateDataDipTemplateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    template: (f = msg.getTemplate()) && api_commons_org_huntgroup_pb.DataDipConfig.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.org.UpdateDataDipTemplateRequest}
 */
proto.api.v1alpha1.org.UpdateDataDipTemplateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateDataDipTemplateRequest;
  return proto.api.v1alpha1.org.UpdateDataDipTemplateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateDataDipTemplateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateDataDipTemplateRequest}
 */
proto.api.v1alpha1.org.UpdateDataDipTemplateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new api_commons_org_huntgroup_pb.DataDipConfig;
      reader.readMessage(value,api_commons_org_huntgroup_pb.DataDipConfig.deserializeBinaryFromReader);
      msg.setTemplate(value);
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
proto.api.v1alpha1.org.UpdateDataDipTemplateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateDataDipTemplateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateDataDipTemplateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateDataDipTemplateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTemplate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      api_commons_org_huntgroup_pb.DataDipConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.UpdateDataDipTemplateRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.UpdateDataDipTemplateRequest} returns this
 */
proto.api.v1alpha1.org.UpdateDataDipTemplateRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional api.commons.org.DataDipConfig template = 2;
 * @return {?proto.api.commons.org.DataDipConfig}
 */
proto.api.v1alpha1.org.UpdateDataDipTemplateRequest.prototype.getTemplate = function() {
  return /** @type{?proto.api.commons.org.DataDipConfig} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.DataDipConfig, 2));
};


/**
 * @param {?proto.api.commons.org.DataDipConfig|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateDataDipTemplateRequest} returns this
*/
proto.api.v1alpha1.org.UpdateDataDipTemplateRequest.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateDataDipTemplateRequest} returns this
 */
proto.api.v1alpha1.org.UpdateDataDipTemplateRequest.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateDataDipTemplateRequest.prototype.hasTemplate = function() {
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
proto.api.v1alpha1.org.UpdateDataDipTemplateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateDataDipTemplateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateDataDipTemplateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateDataDipTemplateResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateDataDipTemplateResponse}
 */
proto.api.v1alpha1.org.UpdateDataDipTemplateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateDataDipTemplateResponse;
  return proto.api.v1alpha1.org.UpdateDataDipTemplateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateDataDipTemplateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateDataDipTemplateResponse}
 */
proto.api.v1alpha1.org.UpdateDataDipTemplateResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateDataDipTemplateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateDataDipTemplateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateDataDipTemplateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateDataDipTemplateResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.DeleteDataDipTemplateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.DeleteDataDipTemplateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.DeleteDataDipTemplateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.DeleteDataDipTemplateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    xmlClientPropertySid: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.api.v1alpha1.org.DeleteDataDipTemplateRequest}
 */
proto.api.v1alpha1.org.DeleteDataDipTemplateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.DeleteDataDipTemplateRequest;
  return proto.api.v1alpha1.org.DeleteDataDipTemplateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.DeleteDataDipTemplateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.DeleteDataDipTemplateRequest}
 */
proto.api.v1alpha1.org.DeleteDataDipTemplateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt64());
      msg.setXmlClientPropertySid(value);
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
proto.api.v1alpha1.org.DeleteDataDipTemplateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.DeleteDataDipTemplateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.DeleteDataDipTemplateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.DeleteDataDipTemplateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getXmlClientPropertySid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.DeleteDataDipTemplateRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.DeleteDataDipTemplateRequest} returns this
 */
proto.api.v1alpha1.org.DeleteDataDipTemplateRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 xml_client_property_sid = 2;
 * @return {number}
 */
proto.api.v1alpha1.org.DeleteDataDipTemplateRequest.prototype.getXmlClientPropertySid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.DeleteDataDipTemplateRequest} returns this
 */
proto.api.v1alpha1.org.DeleteDataDipTemplateRequest.prototype.setXmlClientPropertySid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.api.v1alpha1.org.DeleteDataDipTemplateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.DeleteDataDipTemplateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.DeleteDataDipTemplateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.DeleteDataDipTemplateResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.DeleteDataDipTemplateResponse}
 */
proto.api.v1alpha1.org.DeleteDataDipTemplateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.DeleteDataDipTemplateResponse;
  return proto.api.v1alpha1.org.DeleteDataDipTemplateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.DeleteDataDipTemplateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.DeleteDataDipTemplateResponse}
 */
proto.api.v1alpha1.org.DeleteDataDipTemplateResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.DeleteDataDipTemplateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.DeleteDataDipTemplateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.DeleteDataDipTemplateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.DeleteDataDipTemplateResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.CopyDataDipTemplateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.CopyDataDipTemplateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.CopyDataDipTemplateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CopyDataDipTemplateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    xmlClientPropertySid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    configName: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.api.v1alpha1.org.CopyDataDipTemplateRequest}
 */
proto.api.v1alpha1.org.CopyDataDipTemplateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.CopyDataDipTemplateRequest;
  return proto.api.v1alpha1.org.CopyDataDipTemplateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.CopyDataDipTemplateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.CopyDataDipTemplateRequest}
 */
proto.api.v1alpha1.org.CopyDataDipTemplateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt64());
      msg.setXmlClientPropertySid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setConfigName(value);
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
proto.api.v1alpha1.org.CopyDataDipTemplateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.CopyDataDipTemplateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.CopyDataDipTemplateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CopyDataDipTemplateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getXmlClientPropertySid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getConfigName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.CopyDataDipTemplateRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.CopyDataDipTemplateRequest} returns this
 */
proto.api.v1alpha1.org.CopyDataDipTemplateRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 xml_client_property_sid = 2;
 * @return {number}
 */
proto.api.v1alpha1.org.CopyDataDipTemplateRequest.prototype.getXmlClientPropertySid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.CopyDataDipTemplateRequest} returns this
 */
proto.api.v1alpha1.org.CopyDataDipTemplateRequest.prototype.setXmlClientPropertySid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string config_name = 3;
 * @return {string}
 */
proto.api.v1alpha1.org.CopyDataDipTemplateRequest.prototype.getConfigName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.CopyDataDipTemplateRequest} returns this
 */
proto.api.v1alpha1.org.CopyDataDipTemplateRequest.prototype.setConfigName = function(value) {
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
proto.api.v1alpha1.org.CopyDataDipTemplateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.CopyDataDipTemplateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.CopyDataDipTemplateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CopyDataDipTemplateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    xmlClientPropertySid: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.api.v1alpha1.org.CopyDataDipTemplateResponse}
 */
proto.api.v1alpha1.org.CopyDataDipTemplateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.CopyDataDipTemplateResponse;
  return proto.api.v1alpha1.org.CopyDataDipTemplateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.CopyDataDipTemplateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.CopyDataDipTemplateResponse}
 */
proto.api.v1alpha1.org.CopyDataDipTemplateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setXmlClientPropertySid(value);
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
proto.api.v1alpha1.org.CopyDataDipTemplateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.CopyDataDipTemplateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.CopyDataDipTemplateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CopyDataDipTemplateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getXmlClientPropertySid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 xml_client_property_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.org.CopyDataDipTemplateResponse.prototype.getXmlClientPropertySid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.CopyDataDipTemplateResponse} returns this
 */
proto.api.v1alpha1.org.CopyDataDipTemplateResponse.prototype.setXmlClientPropertySid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    xmlClientPropertySid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    configName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    destinationOrgId: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationRequest}
 */
proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationRequest;
  return proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationRequest}
 */
proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt64());
      msg.setXmlClientPropertySid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setConfigName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationOrgId(value);
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
proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getXmlClientPropertySid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getConfigName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDestinationOrgId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationRequest} returns this
 */
proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 xml_client_property_sid = 2;
 * @return {number}
 */
proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationRequest.prototype.getXmlClientPropertySid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationRequest} returns this
 */
proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationRequest.prototype.setXmlClientPropertySid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string config_name = 3;
 * @return {string}
 */
proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationRequest.prototype.getConfigName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationRequest} returns this
 */
proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationRequest.prototype.setConfigName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string destination_org_id = 4;
 * @return {string}
 */
proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationRequest.prototype.getDestinationOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationRequest} returns this
 */
proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationRequest.prototype.setDestinationOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationResponse}
 */
proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationResponse;
  return proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationResponse}
 */
proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CopyDataDipTemplateToOrganizationResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.ListAgentResponseAutoRulesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.ListAgentResponseAutoRulesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.ListAgentResponseAutoRulesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListAgentResponseAutoRulesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.ListAgentResponseAutoRulesRequest}
 */
proto.api.v1alpha1.org.ListAgentResponseAutoRulesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.ListAgentResponseAutoRulesRequest;
  return proto.api.v1alpha1.org.ListAgentResponseAutoRulesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.ListAgentResponseAutoRulesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.ListAgentResponseAutoRulesRequest}
 */
proto.api.v1alpha1.org.ListAgentResponseAutoRulesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.ListAgentResponseAutoRulesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.ListAgentResponseAutoRulesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.ListAgentResponseAutoRulesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListAgentResponseAutoRulesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.ListAgentResponseAutoRulesResponse.repeatedFields_ = [1];



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
proto.api.v1alpha1.org.ListAgentResponseAutoRulesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.ListAgentResponseAutoRulesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.ListAgentResponseAutoRulesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListAgentResponseAutoRulesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    rulesetsList: jspb.Message.toObjectList(msg.getRulesetsList(),
    api_commons_org_huntgroup_pb.AgentResponseAutoRuleSet.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.org.ListAgentResponseAutoRulesResponse}
 */
proto.api.v1alpha1.org.ListAgentResponseAutoRulesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.ListAgentResponseAutoRulesResponse;
  return proto.api.v1alpha1.org.ListAgentResponseAutoRulesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.ListAgentResponseAutoRulesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.ListAgentResponseAutoRulesResponse}
 */
proto.api.v1alpha1.org.ListAgentResponseAutoRulesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_huntgroup_pb.AgentResponseAutoRuleSet;
      reader.readMessage(value,api_commons_org_huntgroup_pb.AgentResponseAutoRuleSet.deserializeBinaryFromReader);
      msg.addRulesets(value);
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
proto.api.v1alpha1.org.ListAgentResponseAutoRulesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.ListAgentResponseAutoRulesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.ListAgentResponseAutoRulesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListAgentResponseAutoRulesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRulesetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      api_commons_org_huntgroup_pb.AgentResponseAutoRuleSet.serializeBinaryToWriter
    );
  }
};


/**
 * repeated api.commons.org.AgentResponseAutoRuleSet rulesets = 1;
 * @return {!Array<!proto.api.commons.org.AgentResponseAutoRuleSet>}
 */
proto.api.v1alpha1.org.ListAgentResponseAutoRulesResponse.prototype.getRulesetsList = function() {
  return /** @type{!Array<!proto.api.commons.org.AgentResponseAutoRuleSet>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_huntgroup_pb.AgentResponseAutoRuleSet, 1));
};


/**
 * @param {!Array<!proto.api.commons.org.AgentResponseAutoRuleSet>} value
 * @return {!proto.api.v1alpha1.org.ListAgentResponseAutoRulesResponse} returns this
*/
proto.api.v1alpha1.org.ListAgentResponseAutoRulesResponse.prototype.setRulesetsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.commons.org.AgentResponseAutoRuleSet=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.AgentResponseAutoRuleSet}
 */
proto.api.v1alpha1.org.ListAgentResponseAutoRulesResponse.prototype.addRulesets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.commons.org.AgentResponseAutoRuleSet, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.ListAgentResponseAutoRulesResponse} returns this
 */
proto.api.v1alpha1.org.ListAgentResponseAutoRulesResponse.prototype.clearRulesetsList = function() {
  return this.setRulesetsList([]);
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
proto.api.v1alpha1.org.CreateAgentResponseAutoRulesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.CreateAgentResponseAutoRulesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.CreateAgentResponseAutoRulesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CreateAgentResponseAutoRulesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    ruleset: (f = msg.getRuleset()) && api_commons_org_huntgroup_pb.AgentResponseAutoRuleSet.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.org.CreateAgentResponseAutoRulesRequest}
 */
proto.api.v1alpha1.org.CreateAgentResponseAutoRulesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.CreateAgentResponseAutoRulesRequest;
  return proto.api.v1alpha1.org.CreateAgentResponseAutoRulesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.CreateAgentResponseAutoRulesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.CreateAgentResponseAutoRulesRequest}
 */
proto.api.v1alpha1.org.CreateAgentResponseAutoRulesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_huntgroup_pb.AgentResponseAutoRuleSet;
      reader.readMessage(value,api_commons_org_huntgroup_pb.AgentResponseAutoRuleSet.deserializeBinaryFromReader);
      msg.setRuleset(value);
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
proto.api.v1alpha1.org.CreateAgentResponseAutoRulesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.CreateAgentResponseAutoRulesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.CreateAgentResponseAutoRulesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CreateAgentResponseAutoRulesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRuleset();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_huntgroup_pb.AgentResponseAutoRuleSet.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.AgentResponseAutoRuleSet ruleset = 1;
 * @return {?proto.api.commons.org.AgentResponseAutoRuleSet}
 */
proto.api.v1alpha1.org.CreateAgentResponseAutoRulesRequest.prototype.getRuleset = function() {
  return /** @type{?proto.api.commons.org.AgentResponseAutoRuleSet} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.AgentResponseAutoRuleSet, 1));
};


/**
 * @param {?proto.api.commons.org.AgentResponseAutoRuleSet|undefined} value
 * @return {!proto.api.v1alpha1.org.CreateAgentResponseAutoRulesRequest} returns this
*/
proto.api.v1alpha1.org.CreateAgentResponseAutoRulesRequest.prototype.setRuleset = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.CreateAgentResponseAutoRulesRequest} returns this
 */
proto.api.v1alpha1.org.CreateAgentResponseAutoRulesRequest.prototype.clearRuleset = function() {
  return this.setRuleset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.CreateAgentResponseAutoRulesRequest.prototype.hasRuleset = function() {
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
proto.api.v1alpha1.org.CreateAgentResponseAutoRulesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.CreateAgentResponseAutoRulesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.CreateAgentResponseAutoRulesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CreateAgentResponseAutoRulesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.CreateAgentResponseAutoRulesResponse}
 */
proto.api.v1alpha1.org.CreateAgentResponseAutoRulesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.CreateAgentResponseAutoRulesResponse;
  return proto.api.v1alpha1.org.CreateAgentResponseAutoRulesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.CreateAgentResponseAutoRulesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.CreateAgentResponseAutoRulesResponse}
 */
proto.api.v1alpha1.org.CreateAgentResponseAutoRulesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.CreateAgentResponseAutoRulesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.CreateAgentResponseAutoRulesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.CreateAgentResponseAutoRulesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CreateAgentResponseAutoRulesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rulesetsid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    ruleset: (f = msg.getRuleset()) && api_commons_org_huntgroup_pb.AgentResponseAutoRuleSet.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesRequest}
 */
proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesRequest;
  return proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesRequest}
 */
proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRulesetsid(value);
      break;
    case 2:
      var value = new api_commons_org_huntgroup_pb.AgentResponseAutoRuleSet;
      reader.readMessage(value,api_commons_org_huntgroup_pb.AgentResponseAutoRuleSet.deserializeBinaryFromReader);
      msg.setRuleset(value);
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
proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRulesetsid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRuleset();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      api_commons_org_huntgroup_pb.AgentResponseAutoRuleSet.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 rulesetSid = 1;
 * @return {number}
 */
proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesRequest.prototype.getRulesetsid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesRequest.prototype.setRulesetsid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional api.commons.org.AgentResponseAutoRuleSet ruleset = 2;
 * @return {?proto.api.commons.org.AgentResponseAutoRuleSet}
 */
proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesRequest.prototype.getRuleset = function() {
  return /** @type{?proto.api.commons.org.AgentResponseAutoRuleSet} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.AgentResponseAutoRuleSet, 2));
};


/**
 * @param {?proto.api.commons.org.AgentResponseAutoRuleSet|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesRequest.prototype.setRuleset = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesRequest.prototype.clearRuleset = function() {
  return this.setRuleset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesRequest.prototype.hasRuleset = function() {
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
proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesResponse}
 */
proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesResponse;
  return proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesResponse}
 */
proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateAgentResponseAutoRulesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rulesetsid: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesRequest}
 */
proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesRequest;
  return proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesRequest}
 */
proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRulesetsid(value);
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
proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRulesetsid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 rulesetSid = 1;
 * @return {number}
 */
proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesRequest.prototype.getRulesetsid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesRequest} returns this
 */
proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesRequest.prototype.setRulesetsid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesResponse}
 */
proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesResponse;
  return proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesResponse}
 */
proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.DeleteAgentResponseAutoRulesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    huntGroupSid: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateRequest}
 */
proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateRequest;
  return proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateRequest}
 */
proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHuntGroupSid(value);
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
proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 hunt_group_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateRequest.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateRequest} returns this
 */
proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateRequest.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    template: (f = msg.getTemplate()) && api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateResponse}
 */
proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateResponse;
  return proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateResponse}
 */
proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate;
      reader.readMessage(value,api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate.deserializeBinaryFromReader);
      msg.setTemplate(value);
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
proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTemplate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.ClientInfoDisplayTemplate template = 1;
 * @return {?proto.api.commons.org.ClientInfoDisplayTemplate}
 */
proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateResponse.prototype.getTemplate = function() {
  return /** @type{?proto.api.commons.org.ClientInfoDisplayTemplate} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate, 1));
};


/**
 * @param {?proto.api.commons.org.ClientInfoDisplayTemplate|undefined} value
 * @return {!proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateResponse} returns this
*/
proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateResponse.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateResponse} returns this
 */
proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateResponse.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateResponse.prototype.hasTemplate = function() {
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
proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    huntGroupSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    template: (f = msg.getTemplate()) && api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateRequest}
 */
proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateRequest;
  return proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateRequest}
 */
proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHuntGroupSid(value);
      break;
    case 2:
      var value = new api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate;
      reader.readMessage(value,api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate.deserializeBinaryFromReader);
      msg.setTemplate(value);
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
proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTemplate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 hunt_group_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateRequest.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateRequest} returns this
 */
proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateRequest.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional api.commons.org.ClientInfoDisplayTemplate template = 2;
 * @return {?proto.api.commons.org.ClientInfoDisplayTemplate}
 */
proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateRequest.prototype.getTemplate = function() {
  return /** @type{?proto.api.commons.org.ClientInfoDisplayTemplate} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate, 2));
};


/**
 * @param {?proto.api.commons.org.ClientInfoDisplayTemplate|undefined} value
 * @return {!proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateRequest} returns this
*/
proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateRequest.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateRequest} returns this
 */
proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateRequest.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateRequest.prototype.hasTemplate = function() {
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
proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    templateSid: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateResponse}
 */
proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateResponse;
  return proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateResponse}
 */
proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTemplateSid(value);
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
proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTemplateSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 template_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateResponse.prototype.getTemplateSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateResponse} returns this
 */
proto.api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateResponse.prototype.setTemplateSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    huntGroupSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    template: (f = msg.getTemplate()) && api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateRequest}
 */
proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateRequest;
  return proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateRequest}
 */
proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHuntGroupSid(value);
      break;
    case 2:
      var value = new api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate;
      reader.readMessage(value,api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate.deserializeBinaryFromReader);
      msg.setTemplate(value);
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
proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTemplate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 hunt_group_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateRequest.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateRequest} returns this
 */
proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateRequest.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional api.commons.org.ClientInfoDisplayTemplate template = 2;
 * @return {?proto.api.commons.org.ClientInfoDisplayTemplate}
 */
proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateRequest.prototype.getTemplate = function() {
  return /** @type{?proto.api.commons.org.ClientInfoDisplayTemplate} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate, 2));
};


/**
 * @param {?proto.api.commons.org.ClientInfoDisplayTemplate|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateRequest} returns this
*/
proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateRequest.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateRequest} returns this
 */
proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateRequest.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateRequest.prototype.hasTemplate = function() {
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
proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateResponse}
 */
proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateResponse;
  return proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateResponse}
 */
proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    huntGroupSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    templateSid: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateRequest}
 */
proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateRequest;
  return proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateRequest}
 */
proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHuntGroupSid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTemplateSid(value);
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
proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTemplateSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 hunt_group_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateRequest.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateRequest} returns this
 */
proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateRequest.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 template_sid = 2;
 * @return {number}
 */
proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateRequest.prototype.getTemplateSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateRequest} returns this
 */
proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateRequest.prototype.setTemplateSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateResponse}
 */
proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateResponse;
  return proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateResponse}
 */
proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    toHuntGroupSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    template: (f = msg.getTemplate()) && api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateRequest}
 */
proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateRequest;
  return proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateRequest}
 */
proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setToHuntGroupSid(value);
      break;
    case 2:
      var value = new api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate;
      reader.readMessage(value,api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate.deserializeBinaryFromReader);
      msg.setTemplate(value);
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
proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTemplate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 to_hunt_group_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateRequest.prototype.getToHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateRequest} returns this
 */
proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateRequest.prototype.setToHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional api.commons.org.ClientInfoDisplayTemplate template = 2;
 * @return {?proto.api.commons.org.ClientInfoDisplayTemplate}
 */
proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateRequest.prototype.getTemplate = function() {
  return /** @type{?proto.api.commons.org.ClientInfoDisplayTemplate} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate, 2));
};


/**
 * @param {?proto.api.commons.org.ClientInfoDisplayTemplate|undefined} value
 * @return {!proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateRequest} returns this
*/
proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateRequest.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateRequest} returns this
 */
proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateRequest.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateRequest.prototype.hasTemplate = function() {
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
proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateResponse}
 */
proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateResponse;
  return proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateResponse}
 */
proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    template: (f = msg.getTemplate()) && api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateRequest}
 */
proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateRequest;
  return proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateRequest}
 */
proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate;
      reader.readMessage(value,api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate.deserializeBinaryFromReader);
      msg.setTemplate(value);
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
proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTemplate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.ClientInfoDisplayTemplate template = 1;
 * @return {?proto.api.commons.org.ClientInfoDisplayTemplate}
 */
proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateRequest.prototype.getTemplate = function() {
  return /** @type{?proto.api.commons.org.ClientInfoDisplayTemplate} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate, 1));
};


/**
 * @param {?proto.api.commons.org.ClientInfoDisplayTemplate|undefined} value
 * @return {!proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateRequest} returns this
*/
proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateRequest.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateRequest} returns this
 */
proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateRequest.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateRequest.prototype.hasTemplate = function() {
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
proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    templateSid: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateResponse}
 */
proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateResponse;
  return proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateResponse}
 */
proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTemplateSid(value);
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
proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTemplateSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 template_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateResponse.prototype.getTemplateSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateResponse} returns this
 */
proto.api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateResponse.prototype.setTemplateSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataRequest}
 */
proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataRequest;
  return proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataRequest}
 */
proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataRequest.Filter} */ (reader.readEnum());
      msg.setFilter(value);
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
proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataRequest.Filter = {
  FILTER_UNSPECIFIED: 0,
  FILTER_ALL: 1,
  FILTER_HUNT_GROUPS_WITH_TEMPLATE: 2,
  FILTER_HUNT_GROUPS_WITHOUT_TEMPLATE: 3
};

/**
 * optional Filter filter = 1;
 * @return {!proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataRequest.Filter}
 */
proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataRequest.prototype.getFilter = function() {
  return /** @type {!proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataRequest.Filter} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataRequest.Filter} value
 * @return {!proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataRequest} returns this
 */
proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataResponse.repeatedFields_ = [1];



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
proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    huntGroupsWithTemplateDataList: jspb.Message.toObjectList(msg.getHuntGroupsWithTemplateDataList(),
    api_commons_org_huntgroup_pb.HuntGroupWithClientInfoTemplateData.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataResponse}
 */
proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataResponse;
  return proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataResponse}
 */
proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_huntgroup_pb.HuntGroupWithClientInfoTemplateData;
      reader.readMessage(value,api_commons_org_huntgroup_pb.HuntGroupWithClientInfoTemplateData.deserializeBinaryFromReader);
      msg.addHuntGroupsWithTemplateData(value);
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
proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntGroupsWithTemplateDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      api_commons_org_huntgroup_pb.HuntGroupWithClientInfoTemplateData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated api.commons.org.HuntGroupWithClientInfoTemplateData hunt_groups_with_template_data = 1;
 * @return {!Array<!proto.api.commons.org.HuntGroupWithClientInfoTemplateData>}
 */
proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataResponse.prototype.getHuntGroupsWithTemplateDataList = function() {
  return /** @type{!Array<!proto.api.commons.org.HuntGroupWithClientInfoTemplateData>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_huntgroup_pb.HuntGroupWithClientInfoTemplateData, 1));
};


/**
 * @param {!Array<!proto.api.commons.org.HuntGroupWithClientInfoTemplateData>} value
 * @return {!proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataResponse} returns this
*/
proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataResponse.prototype.setHuntGroupsWithTemplateDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.commons.org.HuntGroupWithClientInfoTemplateData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.HuntGroupWithClientInfoTemplateData}
 */
proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataResponse.prototype.addHuntGroupsWithTemplateData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.commons.org.HuntGroupWithClientInfoTemplateData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataResponse} returns this
 */
proto.api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataResponse.prototype.clearHuntGroupsWithTemplateDataList = function() {
  return this.setHuntGroupsWithTemplateDataList([]);
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
proto.api.v1alpha1.org.ListHuntGroupWebLinksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.ListHuntGroupWebLinksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.ListHuntGroupWebLinksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListHuntGroupWebLinksRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    huntGroupSid: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.api.v1alpha1.org.ListHuntGroupWebLinksRequest}
 */
proto.api.v1alpha1.org.ListHuntGroupWebLinksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.ListHuntGroupWebLinksRequest;
  return proto.api.v1alpha1.org.ListHuntGroupWebLinksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.ListHuntGroupWebLinksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.ListHuntGroupWebLinksRequest}
 */
proto.api.v1alpha1.org.ListHuntGroupWebLinksRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHuntGroupSid(value);
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
proto.api.v1alpha1.org.ListHuntGroupWebLinksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.ListHuntGroupWebLinksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.ListHuntGroupWebLinksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListHuntGroupWebLinksRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 hunt_group_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.org.ListHuntGroupWebLinksRequest.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.ListHuntGroupWebLinksRequest} returns this
 */
proto.api.v1alpha1.org.ListHuntGroupWebLinksRequest.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.ListHuntGroupWebLinksResponse.repeatedFields_ = [1];



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
proto.api.v1alpha1.org.ListHuntGroupWebLinksResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.ListHuntGroupWebLinksResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.ListHuntGroupWebLinksResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListHuntGroupWebLinksResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    webLinksList: jspb.Message.toObjectList(msg.getWebLinksList(),
    api_commons_org_huntgroup_pb.WebLink.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.org.ListHuntGroupWebLinksResponse}
 */
proto.api.v1alpha1.org.ListHuntGroupWebLinksResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.ListHuntGroupWebLinksResponse;
  return proto.api.v1alpha1.org.ListHuntGroupWebLinksResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.ListHuntGroupWebLinksResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.ListHuntGroupWebLinksResponse}
 */
proto.api.v1alpha1.org.ListHuntGroupWebLinksResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_huntgroup_pb.WebLink;
      reader.readMessage(value,api_commons_org_huntgroup_pb.WebLink.deserializeBinaryFromReader);
      msg.addWebLinks(value);
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
proto.api.v1alpha1.org.ListHuntGroupWebLinksResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.ListHuntGroupWebLinksResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.ListHuntGroupWebLinksResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListHuntGroupWebLinksResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWebLinksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      api_commons_org_huntgroup_pb.WebLink.serializeBinaryToWriter
    );
  }
};


/**
 * repeated api.commons.org.WebLink web_links = 1;
 * @return {!Array<!proto.api.commons.org.WebLink>}
 */
proto.api.v1alpha1.org.ListHuntGroupWebLinksResponse.prototype.getWebLinksList = function() {
  return /** @type{!Array<!proto.api.commons.org.WebLink>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_huntgroup_pb.WebLink, 1));
};


/**
 * @param {!Array<!proto.api.commons.org.WebLink>} value
 * @return {!proto.api.v1alpha1.org.ListHuntGroupWebLinksResponse} returns this
*/
proto.api.v1alpha1.org.ListHuntGroupWebLinksResponse.prototype.setWebLinksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.commons.org.WebLink=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.WebLink}
 */
proto.api.v1alpha1.org.ListHuntGroupWebLinksResponse.prototype.addWebLinks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.commons.org.WebLink, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.ListHuntGroupWebLinksResponse} returns this
 */
proto.api.v1alpha1.org.ListHuntGroupWebLinksResponse.prototype.clearWebLinksList = function() {
  return this.setWebLinksList([]);
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
proto.api.v1alpha1.org.CopyHuntGroupWebLinkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.CopyHuntGroupWebLinkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.CopyHuntGroupWebLinkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CopyHuntGroupWebLinkRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fromHuntGroupSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    toHuntGroupSid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    webLink: (f = msg.getWebLink()) && api_commons_org_huntgroup_pb.WebLink.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.org.CopyHuntGroupWebLinkRequest}
 */
proto.api.v1alpha1.org.CopyHuntGroupWebLinkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.CopyHuntGroupWebLinkRequest;
  return proto.api.v1alpha1.org.CopyHuntGroupWebLinkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.CopyHuntGroupWebLinkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.CopyHuntGroupWebLinkRequest}
 */
proto.api.v1alpha1.org.CopyHuntGroupWebLinkRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFromHuntGroupSid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setToHuntGroupSid(value);
      break;
    case 3:
      var value = new api_commons_org_huntgroup_pb.WebLink;
      reader.readMessage(value,api_commons_org_huntgroup_pb.WebLink.deserializeBinaryFromReader);
      msg.setWebLink(value);
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
proto.api.v1alpha1.org.CopyHuntGroupWebLinkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.CopyHuntGroupWebLinkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.CopyHuntGroupWebLinkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CopyHuntGroupWebLinkRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFromHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getToHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getWebLink();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      api_commons_org_huntgroup_pb.WebLink.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 from_hunt_group_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.org.CopyHuntGroupWebLinkRequest.prototype.getFromHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.CopyHuntGroupWebLinkRequest} returns this
 */
proto.api.v1alpha1.org.CopyHuntGroupWebLinkRequest.prototype.setFromHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 to_hunt_group_sid = 2;
 * @return {number}
 */
proto.api.v1alpha1.org.CopyHuntGroupWebLinkRequest.prototype.getToHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.CopyHuntGroupWebLinkRequest} returns this
 */
proto.api.v1alpha1.org.CopyHuntGroupWebLinkRequest.prototype.setToHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional api.commons.org.WebLink web_link = 3;
 * @return {?proto.api.commons.org.WebLink}
 */
proto.api.v1alpha1.org.CopyHuntGroupWebLinkRequest.prototype.getWebLink = function() {
  return /** @type{?proto.api.commons.org.WebLink} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.WebLink, 3));
};


/**
 * @param {?proto.api.commons.org.WebLink|undefined} value
 * @return {!proto.api.v1alpha1.org.CopyHuntGroupWebLinkRequest} returns this
*/
proto.api.v1alpha1.org.CopyHuntGroupWebLinkRequest.prototype.setWebLink = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.CopyHuntGroupWebLinkRequest} returns this
 */
proto.api.v1alpha1.org.CopyHuntGroupWebLinkRequest.prototype.clearWebLink = function() {
  return this.setWebLink(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.CopyHuntGroupWebLinkRequest.prototype.hasWebLink = function() {
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
proto.api.v1alpha1.org.CopyHuntGroupWebLinkResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.CopyHuntGroupWebLinkResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.CopyHuntGroupWebLinkResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CopyHuntGroupWebLinkResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.CopyHuntGroupWebLinkResponse}
 */
proto.api.v1alpha1.org.CopyHuntGroupWebLinkResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.CopyHuntGroupWebLinkResponse;
  return proto.api.v1alpha1.org.CopyHuntGroupWebLinkResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.CopyHuntGroupWebLinkResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.CopyHuntGroupWebLinkResponse}
 */
proto.api.v1alpha1.org.CopyHuntGroupWebLinkResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.CopyHuntGroupWebLinkResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.CopyHuntGroupWebLinkResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.CopyHuntGroupWebLinkResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CopyHuntGroupWebLinkResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.UpdateHuntGroupWebLinksRequest.repeatedFields_ = [2];



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
proto.api.v1alpha1.org.UpdateHuntGroupWebLinksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateHuntGroupWebLinksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateHuntGroupWebLinksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateHuntGroupWebLinksRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    huntGroupSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    webLinksList: jspb.Message.toObjectList(msg.getWebLinksList(),
    api_commons_org_huntgroup_pb.WebLink.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupWebLinksRequest}
 */
proto.api.v1alpha1.org.UpdateHuntGroupWebLinksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateHuntGroupWebLinksRequest;
  return proto.api.v1alpha1.org.UpdateHuntGroupWebLinksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateHuntGroupWebLinksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupWebLinksRequest}
 */
proto.api.v1alpha1.org.UpdateHuntGroupWebLinksRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHuntGroupSid(value);
      break;
    case 2:
      var value = new api_commons_org_huntgroup_pb.WebLink;
      reader.readMessage(value,api_commons_org_huntgroup_pb.WebLink.deserializeBinaryFromReader);
      msg.addWebLinks(value);
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
proto.api.v1alpha1.org.UpdateHuntGroupWebLinksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateHuntGroupWebLinksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateHuntGroupWebLinksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateHuntGroupWebLinksRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getWebLinksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      api_commons_org_huntgroup_pb.WebLink.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 hunt_group_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.org.UpdateHuntGroupWebLinksRequest.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupWebLinksRequest} returns this
 */
proto.api.v1alpha1.org.UpdateHuntGroupWebLinksRequest.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated api.commons.org.WebLink web_links = 2;
 * @return {!Array<!proto.api.commons.org.WebLink>}
 */
proto.api.v1alpha1.org.UpdateHuntGroupWebLinksRequest.prototype.getWebLinksList = function() {
  return /** @type{!Array<!proto.api.commons.org.WebLink>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_huntgroup_pb.WebLink, 2));
};


/**
 * @param {!Array<!proto.api.commons.org.WebLink>} value
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupWebLinksRequest} returns this
*/
proto.api.v1alpha1.org.UpdateHuntGroupWebLinksRequest.prototype.setWebLinksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.commons.org.WebLink=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.WebLink}
 */
proto.api.v1alpha1.org.UpdateHuntGroupWebLinksRequest.prototype.addWebLinks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.commons.org.WebLink, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupWebLinksRequest} returns this
 */
proto.api.v1alpha1.org.UpdateHuntGroupWebLinksRequest.prototype.clearWebLinksList = function() {
  return this.setWebLinksList([]);
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
proto.api.v1alpha1.org.UpdateHuntGroupWebLinksResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateHuntGroupWebLinksResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateHuntGroupWebLinksResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateHuntGroupWebLinksResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupWebLinksResponse}
 */
proto.api.v1alpha1.org.UpdateHuntGroupWebLinksResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateHuntGroupWebLinksResponse;
  return proto.api.v1alpha1.org.UpdateHuntGroupWebLinksResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateHuntGroupWebLinksResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupWebLinksResponse}
 */
proto.api.v1alpha1.org.UpdateHuntGroupWebLinksResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateHuntGroupWebLinksResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateHuntGroupWebLinksResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateHuntGroupWebLinksResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateHuntGroupWebLinksResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    huntGroupSid: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksRequest}
 */
proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksRequest;
  return proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksRequest}
 */
proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHuntGroupSid(value);
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
proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksRequest} returns this
 */
proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 hunt_group_sid = 2;
 * @return {number}
 */
proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksRequest.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksRequest} returns this
 */
proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksRequest.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksResponse.repeatedFields_ = [1];



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
proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    linksList: jspb.Message.toObjectList(msg.getLinksList(),
    api_commons_org_huntgroup_pb.IntegrationLink.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksResponse}
 */
proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksResponse;
  return proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksResponse}
 */
proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_huntgroup_pb.IntegrationLink;
      reader.readMessage(value,api_commons_org_huntgroup_pb.IntegrationLink.deserializeBinaryFromReader);
      msg.addLinks(value);
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
proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLinksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      api_commons_org_huntgroup_pb.IntegrationLink.serializeBinaryToWriter
    );
  }
};


/**
 * repeated api.commons.org.IntegrationLink links = 1;
 * @return {!Array<!proto.api.commons.org.IntegrationLink>}
 */
proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksResponse.prototype.getLinksList = function() {
  return /** @type{!Array<!proto.api.commons.org.IntegrationLink>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_huntgroup_pb.IntegrationLink, 1));
};


/**
 * @param {!Array<!proto.api.commons.org.IntegrationLink>} value
 * @return {!proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksResponse} returns this
*/
proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksResponse.prototype.setLinksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.commons.org.IntegrationLink=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.IntegrationLink}
 */
proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksResponse.prototype.addLinks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.commons.org.IntegrationLink, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksResponse} returns this
 */
proto.api.v1alpha1.org.ListHuntGroupIntegrationLinksResponse.prototype.clearLinksList = function() {
  return this.setLinksList([]);
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
proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    toHuntGroupSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    link: (f = msg.getLink()) && api_commons_org_huntgroup_pb.IntegrationLink.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkRequest}
 */
proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkRequest;
  return proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkRequest}
 */
proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setToHuntGroupSid(value);
      break;
    case 2:
      var value = new api_commons_org_huntgroup_pb.IntegrationLink;
      reader.readMessage(value,api_commons_org_huntgroup_pb.IntegrationLink.deserializeBinaryFromReader);
      msg.setLink(value);
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
proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getLink();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      api_commons_org_huntgroup_pb.IntegrationLink.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 to_hunt_group_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkRequest.prototype.getToHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkRequest} returns this
 */
proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkRequest.prototype.setToHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional api.commons.org.IntegrationLink link = 2;
 * @return {?proto.api.commons.org.IntegrationLink}
 */
proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkRequest.prototype.getLink = function() {
  return /** @type{?proto.api.commons.org.IntegrationLink} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.IntegrationLink, 2));
};


/**
 * @param {?proto.api.commons.org.IntegrationLink|undefined} value
 * @return {!proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkRequest} returns this
*/
proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkRequest.prototype.setLink = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkRequest} returns this
 */
proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkRequest.prototype.clearLink = function() {
  return this.setLink(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkRequest.prototype.hasLink = function() {
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
proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    integrationLinkSid: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkResponse}
 */
proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkResponse;
  return proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkResponse}
 */
proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIntegrationLinkSid(value);
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
proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIntegrationLinkSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 integration_link_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkResponse.prototype.getIntegrationLinkSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkResponse} returns this
 */
proto.api.v1alpha1.org.CopyHuntGroupIntegrationLinkResponse.prototype.setIntegrationLinkSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksRequest.repeatedFields_ = [1];



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
proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    linksList: jspb.Message.toObjectList(msg.getLinksList(),
    api_commons_org_huntgroup_pb.IntegrationLink.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksRequest}
 */
proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksRequest;
  return proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksRequest}
 */
proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_huntgroup_pb.IntegrationLink;
      reader.readMessage(value,api_commons_org_huntgroup_pb.IntegrationLink.deserializeBinaryFromReader);
      msg.addLinks(value);
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
proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLinksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      api_commons_org_huntgroup_pb.IntegrationLink.serializeBinaryToWriter
    );
  }
};


/**
 * repeated api.commons.org.IntegrationLink links = 1;
 * @return {!Array<!proto.api.commons.org.IntegrationLink>}
 */
proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksRequest.prototype.getLinksList = function() {
  return /** @type{!Array<!proto.api.commons.org.IntegrationLink>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_huntgroup_pb.IntegrationLink, 1));
};


/**
 * @param {!Array<!proto.api.commons.org.IntegrationLink>} value
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksRequest} returns this
*/
proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksRequest.prototype.setLinksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.commons.org.IntegrationLink=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.IntegrationLink}
 */
proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksRequest.prototype.addLinks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.commons.org.IntegrationLink, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksRequest} returns this
 */
proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksRequest.prototype.clearLinksList = function() {
  return this.setLinksList([]);
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
proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksResponse}
 */
proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksResponse;
  return proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksResponse}
 */
proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateHuntGroupIntegrationLinksResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.ListAgentTriggersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.ListAgentTriggersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.ListAgentTriggersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListAgentTriggersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    huntGroupSid: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.api.v1alpha1.org.ListAgentTriggersRequest}
 */
proto.api.v1alpha1.org.ListAgentTriggersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.ListAgentTriggersRequest;
  return proto.api.v1alpha1.org.ListAgentTriggersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.ListAgentTriggersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.ListAgentTriggersRequest}
 */
proto.api.v1alpha1.org.ListAgentTriggersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHuntGroupSid(value);
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
proto.api.v1alpha1.org.ListAgentTriggersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.ListAgentTriggersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.ListAgentTriggersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListAgentTriggersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 hunt_group_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.org.ListAgentTriggersRequest.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.ListAgentTriggersRequest} returns this
 */
proto.api.v1alpha1.org.ListAgentTriggersRequest.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.ListAgentTriggersResponse.repeatedFields_ = [1];



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
proto.api.v1alpha1.org.ListAgentTriggersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.ListAgentTriggersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.ListAgentTriggersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListAgentTriggersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    agentTriggersList: jspb.Message.toObjectList(msg.getAgentTriggersList(),
    api_commons_org_huntgroup_pb.AgentTrigger.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.org.ListAgentTriggersResponse}
 */
proto.api.v1alpha1.org.ListAgentTriggersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.ListAgentTriggersResponse;
  return proto.api.v1alpha1.org.ListAgentTriggersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.ListAgentTriggersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.ListAgentTriggersResponse}
 */
proto.api.v1alpha1.org.ListAgentTriggersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_huntgroup_pb.AgentTrigger;
      reader.readMessage(value,api_commons_org_huntgroup_pb.AgentTrigger.deserializeBinaryFromReader);
      msg.addAgentTriggers(value);
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
proto.api.v1alpha1.org.ListAgentTriggersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.ListAgentTriggersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.ListAgentTriggersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListAgentTriggersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentTriggersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      api_commons_org_huntgroup_pb.AgentTrigger.serializeBinaryToWriter
    );
  }
};


/**
 * repeated api.commons.org.AgentTrigger agent_triggers = 1;
 * @return {!Array<!proto.api.commons.org.AgentTrigger>}
 */
proto.api.v1alpha1.org.ListAgentTriggersResponse.prototype.getAgentTriggersList = function() {
  return /** @type{!Array<!proto.api.commons.org.AgentTrigger>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_huntgroup_pb.AgentTrigger, 1));
};


/**
 * @param {!Array<!proto.api.commons.org.AgentTrigger>} value
 * @return {!proto.api.v1alpha1.org.ListAgentTriggersResponse} returns this
*/
proto.api.v1alpha1.org.ListAgentTriggersResponse.prototype.setAgentTriggersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.commons.org.AgentTrigger=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.AgentTrigger}
 */
proto.api.v1alpha1.org.ListAgentTriggersResponse.prototype.addAgentTriggers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.commons.org.AgentTrigger, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.ListAgentTriggersResponse} returns this
 */
proto.api.v1alpha1.org.ListAgentTriggersResponse.prototype.clearAgentTriggersList = function() {
  return this.setAgentTriggersList([]);
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
proto.api.v1alpha1.org.CopyAgentTriggerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.CopyAgentTriggerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.CopyAgentTriggerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CopyAgentTriggerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fromHuntGroupSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    toHuntGroupSid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    agentTrigger: (f = msg.getAgentTrigger()) && api_commons_org_huntgroup_pb.AgentTrigger.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.org.CopyAgentTriggerRequest}
 */
proto.api.v1alpha1.org.CopyAgentTriggerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.CopyAgentTriggerRequest;
  return proto.api.v1alpha1.org.CopyAgentTriggerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.CopyAgentTriggerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.CopyAgentTriggerRequest}
 */
proto.api.v1alpha1.org.CopyAgentTriggerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFromHuntGroupSid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setToHuntGroupSid(value);
      break;
    case 3:
      var value = new api_commons_org_huntgroup_pb.AgentTrigger;
      reader.readMessage(value,api_commons_org_huntgroup_pb.AgentTrigger.deserializeBinaryFromReader);
      msg.setAgentTrigger(value);
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
proto.api.v1alpha1.org.CopyAgentTriggerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.CopyAgentTriggerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.CopyAgentTriggerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CopyAgentTriggerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFromHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getToHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getAgentTrigger();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      api_commons_org_huntgroup_pb.AgentTrigger.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 from_hunt_group_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.org.CopyAgentTriggerRequest.prototype.getFromHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.CopyAgentTriggerRequest} returns this
 */
proto.api.v1alpha1.org.CopyAgentTriggerRequest.prototype.setFromHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 to_hunt_group_sid = 2;
 * @return {number}
 */
proto.api.v1alpha1.org.CopyAgentTriggerRequest.prototype.getToHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.CopyAgentTriggerRequest} returns this
 */
proto.api.v1alpha1.org.CopyAgentTriggerRequest.prototype.setToHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional api.commons.org.AgentTrigger agent_trigger = 3;
 * @return {?proto.api.commons.org.AgentTrigger}
 */
proto.api.v1alpha1.org.CopyAgentTriggerRequest.prototype.getAgentTrigger = function() {
  return /** @type{?proto.api.commons.org.AgentTrigger} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.AgentTrigger, 3));
};


/**
 * @param {?proto.api.commons.org.AgentTrigger|undefined} value
 * @return {!proto.api.v1alpha1.org.CopyAgentTriggerRequest} returns this
*/
proto.api.v1alpha1.org.CopyAgentTriggerRequest.prototype.setAgentTrigger = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.CopyAgentTriggerRequest} returns this
 */
proto.api.v1alpha1.org.CopyAgentTriggerRequest.prototype.clearAgentTrigger = function() {
  return this.setAgentTrigger(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.CopyAgentTriggerRequest.prototype.hasAgentTrigger = function() {
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
proto.api.v1alpha1.org.CopyAgentTriggerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.CopyAgentTriggerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.CopyAgentTriggerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CopyAgentTriggerResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.CopyAgentTriggerResponse}
 */
proto.api.v1alpha1.org.CopyAgentTriggerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.CopyAgentTriggerResponse;
  return proto.api.v1alpha1.org.CopyAgentTriggerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.CopyAgentTriggerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.CopyAgentTriggerResponse}
 */
proto.api.v1alpha1.org.CopyAgentTriggerResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.CopyAgentTriggerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.CopyAgentTriggerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.CopyAgentTriggerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CopyAgentTriggerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.UpdateAgentTriggersRequest.repeatedFields_ = [2];



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
proto.api.v1alpha1.org.UpdateAgentTriggersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateAgentTriggersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateAgentTriggersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateAgentTriggersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    huntGroupSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    agentTriggersList: jspb.Message.toObjectList(msg.getAgentTriggersList(),
    api_commons_org_huntgroup_pb.AgentTrigger.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.org.UpdateAgentTriggersRequest}
 */
proto.api.v1alpha1.org.UpdateAgentTriggersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateAgentTriggersRequest;
  return proto.api.v1alpha1.org.UpdateAgentTriggersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateAgentTriggersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateAgentTriggersRequest}
 */
proto.api.v1alpha1.org.UpdateAgentTriggersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHuntGroupSid(value);
      break;
    case 2:
      var value = new api_commons_org_huntgroup_pb.AgentTrigger;
      reader.readMessage(value,api_commons_org_huntgroup_pb.AgentTrigger.deserializeBinaryFromReader);
      msg.addAgentTriggers(value);
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
proto.api.v1alpha1.org.UpdateAgentTriggersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateAgentTriggersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateAgentTriggersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateAgentTriggersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getAgentTriggersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      api_commons_org_huntgroup_pb.AgentTrigger.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 hunt_group_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.org.UpdateAgentTriggersRequest.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.UpdateAgentTriggersRequest} returns this
 */
proto.api.v1alpha1.org.UpdateAgentTriggersRequest.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated api.commons.org.AgentTrigger agent_triggers = 2;
 * @return {!Array<!proto.api.commons.org.AgentTrigger>}
 */
proto.api.v1alpha1.org.UpdateAgentTriggersRequest.prototype.getAgentTriggersList = function() {
  return /** @type{!Array<!proto.api.commons.org.AgentTrigger>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_huntgroup_pb.AgentTrigger, 2));
};


/**
 * @param {!Array<!proto.api.commons.org.AgentTrigger>} value
 * @return {!proto.api.v1alpha1.org.UpdateAgentTriggersRequest} returns this
*/
proto.api.v1alpha1.org.UpdateAgentTriggersRequest.prototype.setAgentTriggersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.commons.org.AgentTrigger=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.AgentTrigger}
 */
proto.api.v1alpha1.org.UpdateAgentTriggersRequest.prototype.addAgentTriggers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.commons.org.AgentTrigger, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.UpdateAgentTriggersRequest} returns this
 */
proto.api.v1alpha1.org.UpdateAgentTriggersRequest.prototype.clearAgentTriggersList = function() {
  return this.setAgentTriggersList([]);
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
proto.api.v1alpha1.org.UpdateAgentTriggersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateAgentTriggersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateAgentTriggersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateAgentTriggersResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateAgentTriggersResponse}
 */
proto.api.v1alpha1.org.UpdateAgentTriggersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateAgentTriggersResponse;
  return proto.api.v1alpha1.org.UpdateAgentTriggersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateAgentTriggersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateAgentTriggersResponse}
 */
proto.api.v1alpha1.org.UpdateAgentTriggersResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateAgentTriggersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateAgentTriggersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateAgentTriggersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateAgentTriggersResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetHuntGroupScriptRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetHuntGroupScriptRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetHuntGroupScriptRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetHuntGroupScriptRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    huntGroupSid: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.api.v1alpha1.org.GetHuntGroupScriptRequest}
 */
proto.api.v1alpha1.org.GetHuntGroupScriptRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetHuntGroupScriptRequest;
  return proto.api.v1alpha1.org.GetHuntGroupScriptRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetHuntGroupScriptRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetHuntGroupScriptRequest}
 */
proto.api.v1alpha1.org.GetHuntGroupScriptRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHuntGroupSid(value);
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
proto.api.v1alpha1.org.GetHuntGroupScriptRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetHuntGroupScriptRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetHuntGroupScriptRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetHuntGroupScriptRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 hunt_group_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.org.GetHuntGroupScriptRequest.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.GetHuntGroupScriptRequest} returns this
 */
proto.api.v1alpha1.org.GetHuntGroupScriptRequest.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.api.v1alpha1.org.GetHuntGroupScriptResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetHuntGroupScriptResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetHuntGroupScriptResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetHuntGroupScriptResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    huntGroupScript: (f = msg.getHuntGroupScript()) && api_commons_org_huntgroup_pb.HuntGroupScript.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.org.GetHuntGroupScriptResponse}
 */
proto.api.v1alpha1.org.GetHuntGroupScriptResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetHuntGroupScriptResponse;
  return proto.api.v1alpha1.org.GetHuntGroupScriptResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetHuntGroupScriptResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetHuntGroupScriptResponse}
 */
proto.api.v1alpha1.org.GetHuntGroupScriptResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_huntgroup_pb.HuntGroupScript;
      reader.readMessage(value,api_commons_org_huntgroup_pb.HuntGroupScript.deserializeBinaryFromReader);
      msg.setHuntGroupScript(value);
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
proto.api.v1alpha1.org.GetHuntGroupScriptResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetHuntGroupScriptResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetHuntGroupScriptResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetHuntGroupScriptResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntGroupScript();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_huntgroup_pb.HuntGroupScript.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.HuntGroupScript hunt_group_script = 1;
 * @return {?proto.api.commons.org.HuntGroupScript}
 */
proto.api.v1alpha1.org.GetHuntGroupScriptResponse.prototype.getHuntGroupScript = function() {
  return /** @type{?proto.api.commons.org.HuntGroupScript} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.HuntGroupScript, 1));
};


/**
 * @param {?proto.api.commons.org.HuntGroupScript|undefined} value
 * @return {!proto.api.v1alpha1.org.GetHuntGroupScriptResponse} returns this
*/
proto.api.v1alpha1.org.GetHuntGroupScriptResponse.prototype.setHuntGroupScript = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetHuntGroupScriptResponse} returns this
 */
proto.api.v1alpha1.org.GetHuntGroupScriptResponse.prototype.clearHuntGroupScript = function() {
  return this.setHuntGroupScript(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetHuntGroupScriptResponse.prototype.hasHuntGroupScript = function() {
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
proto.api.v1alpha1.org.CreateHuntGroupScriptRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.CreateHuntGroupScriptRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.CreateHuntGroupScriptRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CreateHuntGroupScriptRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    huntGroupSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    huntGroupScript: (f = msg.getHuntGroupScript()) && api_commons_org_huntgroup_pb.HuntGroupScript.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.org.CreateHuntGroupScriptRequest}
 */
proto.api.v1alpha1.org.CreateHuntGroupScriptRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.CreateHuntGroupScriptRequest;
  return proto.api.v1alpha1.org.CreateHuntGroupScriptRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.CreateHuntGroupScriptRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.CreateHuntGroupScriptRequest}
 */
proto.api.v1alpha1.org.CreateHuntGroupScriptRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHuntGroupSid(value);
      break;
    case 2:
      var value = new api_commons_org_huntgroup_pb.HuntGroupScript;
      reader.readMessage(value,api_commons_org_huntgroup_pb.HuntGroupScript.deserializeBinaryFromReader);
      msg.setHuntGroupScript(value);
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
proto.api.v1alpha1.org.CreateHuntGroupScriptRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.CreateHuntGroupScriptRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.CreateHuntGroupScriptRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CreateHuntGroupScriptRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getHuntGroupScript();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      api_commons_org_huntgroup_pb.HuntGroupScript.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 hunt_group_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.org.CreateHuntGroupScriptRequest.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.CreateHuntGroupScriptRequest} returns this
 */
proto.api.v1alpha1.org.CreateHuntGroupScriptRequest.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional api.commons.org.HuntGroupScript hunt_group_script = 2;
 * @return {?proto.api.commons.org.HuntGroupScript}
 */
proto.api.v1alpha1.org.CreateHuntGroupScriptRequest.prototype.getHuntGroupScript = function() {
  return /** @type{?proto.api.commons.org.HuntGroupScript} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.HuntGroupScript, 2));
};


/**
 * @param {?proto.api.commons.org.HuntGroupScript|undefined} value
 * @return {!proto.api.v1alpha1.org.CreateHuntGroupScriptRequest} returns this
*/
proto.api.v1alpha1.org.CreateHuntGroupScriptRequest.prototype.setHuntGroupScript = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.CreateHuntGroupScriptRequest} returns this
 */
proto.api.v1alpha1.org.CreateHuntGroupScriptRequest.prototype.clearHuntGroupScript = function() {
  return this.setHuntGroupScript(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.CreateHuntGroupScriptRequest.prototype.hasHuntGroupScript = function() {
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
proto.api.v1alpha1.org.CreateHuntGroupScriptResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.CreateHuntGroupScriptResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.CreateHuntGroupScriptResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CreateHuntGroupScriptResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.CreateHuntGroupScriptResponse}
 */
proto.api.v1alpha1.org.CreateHuntGroupScriptResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.CreateHuntGroupScriptResponse;
  return proto.api.v1alpha1.org.CreateHuntGroupScriptResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.CreateHuntGroupScriptResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.CreateHuntGroupScriptResponse}
 */
proto.api.v1alpha1.org.CreateHuntGroupScriptResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.CreateHuntGroupScriptResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.CreateHuntGroupScriptResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.CreateHuntGroupScriptResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.CreateHuntGroupScriptResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.UpdateHuntGroupScriptRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateHuntGroupScriptRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateHuntGroupScriptRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateHuntGroupScriptRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    huntGroupSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    huntGroupScript: (f = msg.getHuntGroupScript()) && api_commons_org_huntgroup_pb.HuntGroupScript.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupScriptRequest}
 */
proto.api.v1alpha1.org.UpdateHuntGroupScriptRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateHuntGroupScriptRequest;
  return proto.api.v1alpha1.org.UpdateHuntGroupScriptRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateHuntGroupScriptRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupScriptRequest}
 */
proto.api.v1alpha1.org.UpdateHuntGroupScriptRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHuntGroupSid(value);
      break;
    case 2:
      var value = new api_commons_org_huntgroup_pb.HuntGroupScript;
      reader.readMessage(value,api_commons_org_huntgroup_pb.HuntGroupScript.deserializeBinaryFromReader);
      msg.setHuntGroupScript(value);
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
proto.api.v1alpha1.org.UpdateHuntGroupScriptRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateHuntGroupScriptRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateHuntGroupScriptRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateHuntGroupScriptRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getHuntGroupScript();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      api_commons_org_huntgroup_pb.HuntGroupScript.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 hunt_group_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.org.UpdateHuntGroupScriptRequest.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupScriptRequest} returns this
 */
proto.api.v1alpha1.org.UpdateHuntGroupScriptRequest.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional api.commons.org.HuntGroupScript hunt_group_script = 2;
 * @return {?proto.api.commons.org.HuntGroupScript}
 */
proto.api.v1alpha1.org.UpdateHuntGroupScriptRequest.prototype.getHuntGroupScript = function() {
  return /** @type{?proto.api.commons.org.HuntGroupScript} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.HuntGroupScript, 2));
};


/**
 * @param {?proto.api.commons.org.HuntGroupScript|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupScriptRequest} returns this
*/
proto.api.v1alpha1.org.UpdateHuntGroupScriptRequest.prototype.setHuntGroupScript = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupScriptRequest} returns this
 */
proto.api.v1alpha1.org.UpdateHuntGroupScriptRequest.prototype.clearHuntGroupScript = function() {
  return this.setHuntGroupScript(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateHuntGroupScriptRequest.prototype.hasHuntGroupScript = function() {
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
proto.api.v1alpha1.org.UpdateHuntGroupScriptResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateHuntGroupScriptResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateHuntGroupScriptResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateHuntGroupScriptResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupScriptResponse}
 */
proto.api.v1alpha1.org.UpdateHuntGroupScriptResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateHuntGroupScriptResponse;
  return proto.api.v1alpha1.org.UpdateHuntGroupScriptResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateHuntGroupScriptResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateHuntGroupScriptResponse}
 */
proto.api.v1alpha1.org.UpdateHuntGroupScriptResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateHuntGroupScriptResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateHuntGroupScriptResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateHuntGroupScriptResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateHuntGroupScriptResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.DeleteHuntGroupScriptRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.DeleteHuntGroupScriptRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.DeleteHuntGroupScriptRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.DeleteHuntGroupScriptRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    huntGroupSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    scriptSid: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.api.v1alpha1.org.DeleteHuntGroupScriptRequest}
 */
proto.api.v1alpha1.org.DeleteHuntGroupScriptRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.DeleteHuntGroupScriptRequest;
  return proto.api.v1alpha1.org.DeleteHuntGroupScriptRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.DeleteHuntGroupScriptRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.DeleteHuntGroupScriptRequest}
 */
proto.api.v1alpha1.org.DeleteHuntGroupScriptRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHuntGroupSid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setScriptSid(value);
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
proto.api.v1alpha1.org.DeleteHuntGroupScriptRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.DeleteHuntGroupScriptRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.DeleteHuntGroupScriptRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.DeleteHuntGroupScriptRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getScriptSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 hunt_group_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.org.DeleteHuntGroupScriptRequest.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.DeleteHuntGroupScriptRequest} returns this
 */
proto.api.v1alpha1.org.DeleteHuntGroupScriptRequest.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 script_sid = 2;
 * @return {number}
 */
proto.api.v1alpha1.org.DeleteHuntGroupScriptRequest.prototype.getScriptSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.org.DeleteHuntGroupScriptRequest} returns this
 */
proto.api.v1alpha1.org.DeleteHuntGroupScriptRequest.prototype.setScriptSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.api.v1alpha1.org.DeleteHuntGroupScriptResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.DeleteHuntGroupScriptResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.DeleteHuntGroupScriptResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.DeleteHuntGroupScriptResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.DeleteHuntGroupScriptResponse}
 */
proto.api.v1alpha1.org.DeleteHuntGroupScriptResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.DeleteHuntGroupScriptResponse;
  return proto.api.v1alpha1.org.DeleteHuntGroupScriptResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.DeleteHuntGroupScriptResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.DeleteHuntGroupScriptResponse}
 */
proto.api.v1alpha1.org.DeleteHuntGroupScriptResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.DeleteHuntGroupScriptResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.DeleteHuntGroupScriptResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.DeleteHuntGroupScriptResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.DeleteHuntGroupScriptResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.api.v1alpha1.org);
