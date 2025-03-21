// source: services/org/hunt_groups/v1alpha1/entities.proto
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
var localGlobalThis = require("../../../../global.js");
var proto = localGlobalThis.proto;
var goog = jspb;
var global = localGlobalThis || 
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var api_commons_org_huntgroup_pb = require('../../../../api/commons/org/huntgroup_pb.js');
goog.object.extend(proto, api_commons_org_huntgroup_pb);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationRequest', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationResponse', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsRequest', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.HuntGroup', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.AgentStatus', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.AgentStatusOption', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.AgentTrigger', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsRequest', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsResponse', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerRequest', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerResponse', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkRequest', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkResponse', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationRequest', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationResponse', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateRequest', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateResponse', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateRequest', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateResponse', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.ExileLink', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.ExileLinkData', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateRequest', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateResponse', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesRequest', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsRequest', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersRequest', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersResponse', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksRequest', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksResponse', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.SystemPauseCode', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.TriggerAction', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.TriggerActionOption', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode.PauseCodeCase', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsRequest', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsResponse', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateRequest', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateResponse', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersRequest', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersResponse', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksRequest', null, global);
goog.exportSymbol('proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksResponse', null, global);
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
proto.services.org.hunt_groups.v1alpha1.ExileLink = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.ExileLink, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.ExileLink.displayName = 'proto.services.org.hunt_groups.v1alpha1.ExileLink';
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
proto.services.org.hunt_groups.v1alpha1.ExileLinkData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.ExileLinkData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.ExileLinkData.displayName = 'proto.services.org.hunt_groups.v1alpha1.ExileLinkData';
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
proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter.displayName = 'proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter';
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
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksRequest.displayName = 'proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksRequest';
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
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksResponse.repeatedFields_, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksResponse.displayName = 'proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksResponse';
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
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkRequest.displayName = 'proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkRequest';
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
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkResponse.displayName = 'proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkResponse';
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
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksRequest.repeatedFields_, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksRequest.displayName = 'proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksRequest';
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
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksResponse.displayName = 'proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksResponse';
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
proto.services.org.hunt_groups.v1alpha1.AgentTrigger = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.AgentTrigger, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.AgentTrigger.displayName = 'proto.services.org.hunt_groups.v1alpha1.AgentTrigger';
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
proto.services.org.hunt_groups.v1alpha1.AgentStatusOption = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.AgentStatusOption, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.AgentStatusOption.displayName = 'proto.services.org.hunt_groups.v1alpha1.AgentStatusOption';
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
proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode.oneofGroups_);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode.displayName = 'proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode';
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
proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes.displayName = 'proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes';
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
proto.services.org.hunt_groups.v1alpha1.TriggerActionOption = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.TriggerActionOption, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.TriggerActionOption.displayName = 'proto.services.org.hunt_groups.v1alpha1.TriggerActionOption';
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
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersRequest.displayName = 'proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersRequest';
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
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersResponse.repeatedFields_, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersResponse.displayName = 'proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersResponse';
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
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerRequest.displayName = 'proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerRequest';
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
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerResponse.displayName = 'proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerResponse';
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
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersRequest.repeatedFields_, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersRequest.displayName = 'proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersRequest';
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
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersResponse.displayName = 'proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersResponse';
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
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationRequest.displayName = 'proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationRequest';
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
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationResponse.displayName = 'proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationResponse';
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
proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationRequest.displayName = 'proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationRequest';
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
proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationResponse.displayName = 'proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationResponse';
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
proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsRequest.displayName = 'proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsRequest';
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
proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.repeatedFields_, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.displayName = 'proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse';
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
proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.HuntGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.HuntGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.HuntGroup.displayName = 'proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.HuntGroup';
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
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsRequest.displayName = 'proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsRequest';
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
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.repeatedFields_, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.displayName = 'proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse';
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
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script.repeatedFields_, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script.displayName = 'proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script';
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
proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateRequest.displayName = 'proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateRequest';
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
proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateResponse.displayName = 'proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateResponse';
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
proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateRequest.displayName = 'proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateRequest';
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
proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateResponse.displayName = 'proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateResponse';
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
proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateRequest.displayName = 'proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateRequest';
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
proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateResponse.displayName = 'proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateResponse';
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
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesRequest.displayName = 'proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesRequest';
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
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.repeatedFields_, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.displayName = 'proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse';
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
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo.repeatedFields_, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo.displayName = 'proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo';
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
proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateRequest.displayName = 'proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateRequest';
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
proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateResponse.displayName = 'proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateResponse';
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
proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsRequest.repeatedFields_, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsRequest.displayName = 'proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsRequest';
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
proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsResponse.displayName = 'proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsResponse';
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
proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsRequest.repeatedFields_, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsRequest.displayName = 'proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsRequest';
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
proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsResponse.displayName = 'proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsResponse';
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
proto.services.org.hunt_groups.v1alpha1.ExileLink.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.ExileLink.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.ExileLink} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.ExileLink.toObject = function(includeInstance, msg) {
  var f, obj = {
parameterSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
huntGroupSid: jspb.Message.getFieldWithDefault(msg, 2, 0),
name: jspb.Message.getFieldWithDefault(msg, 3, ""),
description: jspb.Message.getFieldWithDefault(msg, 4, ""),
order: jspb.Message.getFieldWithDefault(msg, 5, 0),
inboundData: (f = msg.getInboundData()) && proto.services.org.hunt_groups.v1alpha1.ExileLinkData.toObject(includeInstance, f),
outboundData: (f = msg.getOutboundData()) && proto.services.org.hunt_groups.v1alpha1.ExileLinkData.toObject(includeInstance, f)
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.ExileLink}
 */
proto.services.org.hunt_groups.v1alpha1.ExileLink.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.ExileLink;
  return proto.services.org.hunt_groups.v1alpha1.ExileLink.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.ExileLink} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.ExileLink}
 */
proto.services.org.hunt_groups.v1alpha1.ExileLink.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setParameterSid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHuntGroupSid(value);
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
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOrder(value);
      break;
    case 6:
      var value = new proto.services.org.hunt_groups.v1alpha1.ExileLinkData;
      reader.readMessage(value,proto.services.org.hunt_groups.v1alpha1.ExileLinkData.deserializeBinaryFromReader);
      msg.setInboundData(value);
      break;
    case 7:
      var value = new proto.services.org.hunt_groups.v1alpha1.ExileLinkData;
      reader.readMessage(value,proto.services.org.hunt_groups.v1alpha1.ExileLinkData.deserializeBinaryFromReader);
      msg.setOutboundData(value);
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
proto.services.org.hunt_groups.v1alpha1.ExileLink.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.ExileLink.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.ExileLink} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.ExileLink.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParameterSid();
  if (f !== 0) {
    writer.writeInt64(
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
  f = message.getOrder();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getInboundData();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.services.org.hunt_groups.v1alpha1.ExileLinkData.serializeBinaryToWriter
    );
  }
  f = message.getOutboundData();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.services.org.hunt_groups.v1alpha1.ExileLinkData.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 parameter_sid = 1;
 * @return {number}
 */
proto.services.org.hunt_groups.v1alpha1.ExileLink.prototype.getParameterSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.ExileLink} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ExileLink.prototype.setParameterSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 hunt_group_sid = 2;
 * @return {number}
 */
proto.services.org.hunt_groups.v1alpha1.ExileLink.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.ExileLink} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ExileLink.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.services.org.hunt_groups.v1alpha1.ExileLink.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.ExileLink} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ExileLink.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.services.org.hunt_groups.v1alpha1.ExileLink.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.ExileLink} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ExileLink.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 order = 5;
 * @return {number}
 */
proto.services.org.hunt_groups.v1alpha1.ExileLink.prototype.getOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.ExileLink} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ExileLink.prototype.setOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional ExileLinkData inbound_data = 6;
 * @return {?proto.services.org.hunt_groups.v1alpha1.ExileLinkData}
 */
proto.services.org.hunt_groups.v1alpha1.ExileLink.prototype.getInboundData = function() {
  return /** @type{?proto.services.org.hunt_groups.v1alpha1.ExileLinkData} */ (
    jspb.Message.getWrapperField(this, proto.services.org.hunt_groups.v1alpha1.ExileLinkData, 6));
};


/**
 * @param {?proto.services.org.hunt_groups.v1alpha1.ExileLinkData|undefined} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.ExileLink} returns this
*/
proto.services.org.hunt_groups.v1alpha1.ExileLink.prototype.setInboundData = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.org.hunt_groups.v1alpha1.ExileLink} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ExileLink.prototype.clearInboundData = function() {
  return this.setInboundData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.org.hunt_groups.v1alpha1.ExileLink.prototype.hasInboundData = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ExileLinkData outbound_data = 7;
 * @return {?proto.services.org.hunt_groups.v1alpha1.ExileLinkData}
 */
proto.services.org.hunt_groups.v1alpha1.ExileLink.prototype.getOutboundData = function() {
  return /** @type{?proto.services.org.hunt_groups.v1alpha1.ExileLinkData} */ (
    jspb.Message.getWrapperField(this, proto.services.org.hunt_groups.v1alpha1.ExileLinkData, 7));
};


/**
 * @param {?proto.services.org.hunt_groups.v1alpha1.ExileLinkData|undefined} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.ExileLink} returns this
*/
proto.services.org.hunt_groups.v1alpha1.ExileLink.prototype.setOutboundData = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.org.hunt_groups.v1alpha1.ExileLink} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ExileLink.prototype.clearOutboundData = function() {
  return this.setOutboundData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.org.hunt_groups.v1alpha1.ExileLink.prototype.hasOutboundData = function() {
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
proto.services.org.hunt_groups.v1alpha1.ExileLinkData.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.ExileLinkData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.ExileLinkData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.ExileLinkData.toObject = function(includeInstance, msg) {
  var f, obj = {
recordId: (f = msg.getRecordId()) && proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter.toObject(includeInstance, f),
alternateId: (f = msg.getAlternateId()) && proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter.toObject(includeInstance, f)
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.ExileLinkData}
 */
proto.services.org.hunt_groups.v1alpha1.ExileLinkData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.ExileLinkData;
  return proto.services.org.hunt_groups.v1alpha1.ExileLinkData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.ExileLinkData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.ExileLinkData}
 */
proto.services.org.hunt_groups.v1alpha1.ExileLinkData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter;
      reader.readMessage(value,proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter.deserializeBinaryFromReader);
      msg.setRecordId(value);
      break;
    case 2:
      var value = new proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter;
      reader.readMessage(value,proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter.deserializeBinaryFromReader);
      msg.setAlternateId(value);
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
proto.services.org.hunt_groups.v1alpha1.ExileLinkData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.ExileLinkData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.ExileLinkData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.ExileLinkData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter.serializeBinaryToWriter
    );
  }
  f = message.getAlternateId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter.serializeBinaryToWriter
    );
  }
};


/**
 * optional ExileLinkParameter record_id = 1;
 * @return {?proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter}
 */
proto.services.org.hunt_groups.v1alpha1.ExileLinkData.prototype.getRecordId = function() {
  return /** @type{?proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter} */ (
    jspb.Message.getWrapperField(this, proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter, 1));
};


/**
 * @param {?proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter|undefined} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.ExileLinkData} returns this
*/
proto.services.org.hunt_groups.v1alpha1.ExileLinkData.prototype.setRecordId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.org.hunt_groups.v1alpha1.ExileLinkData} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ExileLinkData.prototype.clearRecordId = function() {
  return this.setRecordId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.org.hunt_groups.v1alpha1.ExileLinkData.prototype.hasRecordId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ExileLinkParameter alternate_id = 2;
 * @return {?proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter}
 */
proto.services.org.hunt_groups.v1alpha1.ExileLinkData.prototype.getAlternateId = function() {
  return /** @type{?proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter} */ (
    jspb.Message.getWrapperField(this, proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter, 2));
};


/**
 * @param {?proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter|undefined} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.ExileLinkData} returns this
*/
proto.services.org.hunt_groups.v1alpha1.ExileLinkData.prototype.setAlternateId = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.org.hunt_groups.v1alpha1.ExileLinkData} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ExileLinkData.prototype.clearAlternateId = function() {
  return this.setAlternateId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.org.hunt_groups.v1alpha1.ExileLinkData.prototype.hasAlternateId = function() {
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
proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter.toObject = function(includeInstance, msg) {
  var f, obj = {
contactFieldSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
helperValue: jspb.Message.getFieldWithDefault(msg, 2, ""),
parameterSourceType: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter}
 */
proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter;
  return proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter}
 */
proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setContactFieldSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHelperValue(value);
      break;
    case 3:
      var value = /** @type {!proto.api.commons.org.ParameterSourceType} */ (reader.readEnum());
      msg.setParameterSourceType(value);
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
proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContactFieldSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getHelperValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getParameterSourceType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional int64 contact_field_sid = 1;
 * @return {number}
 */
proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter.prototype.getContactFieldSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter.prototype.setContactFieldSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string helper_value = 2;
 * @return {string}
 */
proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter.prototype.getHelperValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter.prototype.setHelperValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional api.commons.org.ParameterSourceType parameter_source_type = 3;
 * @return {!proto.api.commons.org.ParameterSourceType}
 */
proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter.prototype.getParameterSourceType = function() {
  return /** @type {!proto.api.commons.org.ParameterSourceType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.org.ParameterSourceType} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ExileLinkParameter.prototype.setParameterSourceType = function(value) {
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
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksRequest}
 */
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksRequest;
  return proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksRequest}
 */
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksRequest.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksRequest} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksRequest.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksResponse.repeatedFields_ = [1];



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
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
exileLinksList: jspb.Message.toObjectList(msg.getExileLinksList(),
    proto.services.org.hunt_groups.v1alpha1.ExileLink.toObject, includeInstance)
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksResponse}
 */
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksResponse;
  return proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksResponse}
 */
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.services.org.hunt_groups.v1alpha1.ExileLink;
      reader.readMessage(value,proto.services.org.hunt_groups.v1alpha1.ExileLink.deserializeBinaryFromReader);
      msg.addExileLinks(value);
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
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExileLinksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.services.org.hunt_groups.v1alpha1.ExileLink.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ExileLink exile_links = 1;
 * @return {!Array<!proto.services.org.hunt_groups.v1alpha1.ExileLink>}
 */
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksResponse.prototype.getExileLinksList = function() {
  return /** @type{!Array<!proto.services.org.hunt_groups.v1alpha1.ExileLink>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.services.org.hunt_groups.v1alpha1.ExileLink, 1));
};


/**
 * @param {!Array<!proto.services.org.hunt_groups.v1alpha1.ExileLink>} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksResponse} returns this
*/
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksResponse.prototype.setExileLinksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.services.org.hunt_groups.v1alpha1.ExileLink=} opt_value
 * @param {number=} opt_index
 * @return {!proto.services.org.hunt_groups.v1alpha1.ExileLink}
 */
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksResponse.prototype.addExileLinks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.services.org.hunt_groups.v1alpha1.ExileLink, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksResponse} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupExileLinksResponse.prototype.clearExileLinksList = function() {
  return this.setExileLinksList([]);
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
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
toHuntGroupSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
exileLink: (f = msg.getExileLink()) && proto.services.org.hunt_groups.v1alpha1.ExileLink.toObject(includeInstance, f)
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkRequest}
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkRequest;
  return proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkRequest}
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.services.org.hunt_groups.v1alpha1.ExileLink;
      reader.readMessage(value,proto.services.org.hunt_groups.v1alpha1.ExileLink.deserializeBinaryFromReader);
      msg.setExileLink(value);
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
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getExileLink();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.services.org.hunt_groups.v1alpha1.ExileLink.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 to_hunt_group_sid = 1;
 * @return {number}
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkRequest.prototype.getToHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkRequest} returns this
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkRequest.prototype.setToHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional ExileLink exile_link = 2;
 * @return {?proto.services.org.hunt_groups.v1alpha1.ExileLink}
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkRequest.prototype.getExileLink = function() {
  return /** @type{?proto.services.org.hunt_groups.v1alpha1.ExileLink} */ (
    jspb.Message.getWrapperField(this, proto.services.org.hunt_groups.v1alpha1.ExileLink, 2));
};


/**
 * @param {?proto.services.org.hunt_groups.v1alpha1.ExileLink|undefined} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkRequest} returns this
*/
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkRequest.prototype.setExileLink = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkRequest} returns this
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkRequest.prototype.clearExileLink = function() {
  return this.setExileLink(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkRequest.prototype.hasExileLink = function() {
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
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkResponse}
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkResponse;
  return proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkResponse}
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupExileLinkResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksRequest.repeatedFields_ = [2];



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
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
huntGroupSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
exileLinksList: jspb.Message.toObjectList(msg.getExileLinksList(),
    proto.services.org.hunt_groups.v1alpha1.ExileLink.toObject, includeInstance)
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksRequest}
 */
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksRequest;
  return proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksRequest}
 */
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.services.org.hunt_groups.v1alpha1.ExileLink;
      reader.readMessage(value,proto.services.org.hunt_groups.v1alpha1.ExileLink.deserializeBinaryFromReader);
      msg.addExileLinks(value);
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
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getExileLinksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.services.org.hunt_groups.v1alpha1.ExileLink.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 hunt_group_sid = 1;
 * @return {number}
 */
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksRequest.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksRequest} returns this
 */
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksRequest.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated ExileLink exile_links = 2;
 * @return {!Array<!proto.services.org.hunt_groups.v1alpha1.ExileLink>}
 */
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksRequest.prototype.getExileLinksList = function() {
  return /** @type{!Array<!proto.services.org.hunt_groups.v1alpha1.ExileLink>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.services.org.hunt_groups.v1alpha1.ExileLink, 2));
};


/**
 * @param {!Array<!proto.services.org.hunt_groups.v1alpha1.ExileLink>} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksRequest} returns this
*/
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksRequest.prototype.setExileLinksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.services.org.hunt_groups.v1alpha1.ExileLink=} opt_value
 * @param {number=} opt_index
 * @return {!proto.services.org.hunt_groups.v1alpha1.ExileLink}
 */
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksRequest.prototype.addExileLinks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.services.org.hunt_groups.v1alpha1.ExileLink, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksRequest} returns this
 */
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksRequest.prototype.clearExileLinksList = function() {
  return this.setExileLinksList([]);
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
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksResponse}
 */
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksResponse;
  return proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksResponse}
 */
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupExileLinksResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.services.org.hunt_groups.v1alpha1.AgentTrigger.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.AgentTrigger.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.AgentTrigger} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.AgentTrigger.toObject = function(includeInstance, msg) {
  var f, obj = {
agentTriggerSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
description: jspb.Message.getFieldWithDefault(msg, 2, ""),
agentStatusOption: (f = msg.getAgentStatusOption()) && proto.services.org.hunt_groups.v1alpha1.AgentStatusOption.toObject(includeInstance, f),
triggerActionOption: (f = msg.getTriggerActionOption()) && proto.services.org.hunt_groups.v1alpha1.TriggerActionOption.toObject(includeInstance, f)
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.AgentTrigger}
 */
proto.services.org.hunt_groups.v1alpha1.AgentTrigger.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.AgentTrigger;
  return proto.services.org.hunt_groups.v1alpha1.AgentTrigger.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.AgentTrigger} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.AgentTrigger}
 */
proto.services.org.hunt_groups.v1alpha1.AgentTrigger.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAgentTriggerSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = new proto.services.org.hunt_groups.v1alpha1.AgentStatusOption;
      reader.readMessage(value,proto.services.org.hunt_groups.v1alpha1.AgentStatusOption.deserializeBinaryFromReader);
      msg.setAgentStatusOption(value);
      break;
    case 4:
      var value = new proto.services.org.hunt_groups.v1alpha1.TriggerActionOption;
      reader.readMessage(value,proto.services.org.hunt_groups.v1alpha1.TriggerActionOption.deserializeBinaryFromReader);
      msg.setTriggerActionOption(value);
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
proto.services.org.hunt_groups.v1alpha1.AgentTrigger.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.AgentTrigger.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.AgentTrigger} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.AgentTrigger.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentTriggerSid();
  if (f !== 0) {
    writer.writeInt64(
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
  f = message.getAgentStatusOption();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.services.org.hunt_groups.v1alpha1.AgentStatusOption.serializeBinaryToWriter
    );
  }
  f = message.getTriggerActionOption();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.services.org.hunt_groups.v1alpha1.TriggerActionOption.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 agent_trigger_sid = 1;
 * @return {number}
 */
proto.services.org.hunt_groups.v1alpha1.AgentTrigger.prototype.getAgentTriggerSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.AgentTrigger} returns this
 */
proto.services.org.hunt_groups.v1alpha1.AgentTrigger.prototype.setAgentTriggerSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.services.org.hunt_groups.v1alpha1.AgentTrigger.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.AgentTrigger} returns this
 */
proto.services.org.hunt_groups.v1alpha1.AgentTrigger.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional AgentStatusOption agent_status_option = 3;
 * @return {?proto.services.org.hunt_groups.v1alpha1.AgentStatusOption}
 */
proto.services.org.hunt_groups.v1alpha1.AgentTrigger.prototype.getAgentStatusOption = function() {
  return /** @type{?proto.services.org.hunt_groups.v1alpha1.AgentStatusOption} */ (
    jspb.Message.getWrapperField(this, proto.services.org.hunt_groups.v1alpha1.AgentStatusOption, 3));
};


/**
 * @param {?proto.services.org.hunt_groups.v1alpha1.AgentStatusOption|undefined} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.AgentTrigger} returns this
*/
proto.services.org.hunt_groups.v1alpha1.AgentTrigger.prototype.setAgentStatusOption = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.org.hunt_groups.v1alpha1.AgentTrigger} returns this
 */
proto.services.org.hunt_groups.v1alpha1.AgentTrigger.prototype.clearAgentStatusOption = function() {
  return this.setAgentStatusOption(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.org.hunt_groups.v1alpha1.AgentTrigger.prototype.hasAgentStatusOption = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional TriggerActionOption trigger_action_option = 4;
 * @return {?proto.services.org.hunt_groups.v1alpha1.TriggerActionOption}
 */
proto.services.org.hunt_groups.v1alpha1.AgentTrigger.prototype.getTriggerActionOption = function() {
  return /** @type{?proto.services.org.hunt_groups.v1alpha1.TriggerActionOption} */ (
    jspb.Message.getWrapperField(this, proto.services.org.hunt_groups.v1alpha1.TriggerActionOption, 4));
};


/**
 * @param {?proto.services.org.hunt_groups.v1alpha1.TriggerActionOption|undefined} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.AgentTrigger} returns this
*/
proto.services.org.hunt_groups.v1alpha1.AgentTrigger.prototype.setTriggerActionOption = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.org.hunt_groups.v1alpha1.AgentTrigger} returns this
 */
proto.services.org.hunt_groups.v1alpha1.AgentTrigger.prototype.clearTriggerActionOption = function() {
  return this.setTriggerActionOption(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.org.hunt_groups.v1alpha1.AgentTrigger.prototype.hasTriggerActionOption = function() {
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
proto.services.org.hunt_groups.v1alpha1.AgentStatusOption.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.AgentStatusOption.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.AgentStatusOption} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.AgentStatusOption.toObject = function(includeInstance, msg) {
  var f, obj = {
agentStatus: jspb.Message.getFieldWithDefault(msg, 1, 0),
duration: jspb.Message.getFieldWithDefault(msg, 2, 0),
pauseCode: (f = msg.getPauseCode()) && proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode.toObject(includeInstance, f),
callTypes: (f = msg.getCallTypes()) && proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes.toObject(includeInstance, f),
scheduledCallbackPresent: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.AgentStatusOption}
 */
proto.services.org.hunt_groups.v1alpha1.AgentStatusOption.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.AgentStatusOption;
  return proto.services.org.hunt_groups.v1alpha1.AgentStatusOption.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.AgentStatusOption} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.AgentStatusOption}
 */
proto.services.org.hunt_groups.v1alpha1.AgentStatusOption.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.services.org.hunt_groups.v1alpha1.AgentStatus} */ (reader.readEnum());
      msg.setAgentStatus(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDuration(value);
      break;
    case 3:
      var value = new proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode;
      reader.readMessage(value,proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode.deserializeBinaryFromReader);
      msg.setPauseCode(value);
      break;
    case 4:
      var value = new proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes;
      reader.readMessage(value,proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes.deserializeBinaryFromReader);
      msg.setCallTypes(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setScheduledCallbackPresent(value);
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
proto.services.org.hunt_groups.v1alpha1.AgentStatusOption.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.AgentStatusOption.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.AgentStatusOption} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.AgentStatusOption.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getPauseCode();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode.serializeBinaryToWriter
    );
  }
  f = message.getCallTypes();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes.serializeBinaryToWriter
    );
  }
  f = message.getScheduledCallbackPresent();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional AgentStatus agent_status = 1;
 * @return {!proto.services.org.hunt_groups.v1alpha1.AgentStatus}
 */
proto.services.org.hunt_groups.v1alpha1.AgentStatusOption.prototype.getAgentStatus = function() {
  return /** @type {!proto.services.org.hunt_groups.v1alpha1.AgentStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.services.org.hunt_groups.v1alpha1.AgentStatus} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.AgentStatusOption} returns this
 */
proto.services.org.hunt_groups.v1alpha1.AgentStatusOption.prototype.setAgentStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int64 duration = 2;
 * @return {number}
 */
proto.services.org.hunt_groups.v1alpha1.AgentStatusOption.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.AgentStatusOption} returns this
 */
proto.services.org.hunt_groups.v1alpha1.AgentStatusOption.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional TriggerPauseCode pause_code = 3;
 * @return {?proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode}
 */
proto.services.org.hunt_groups.v1alpha1.AgentStatusOption.prototype.getPauseCode = function() {
  return /** @type{?proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode} */ (
    jspb.Message.getWrapperField(this, proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode, 3));
};


/**
 * @param {?proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode|undefined} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.AgentStatusOption} returns this
*/
proto.services.org.hunt_groups.v1alpha1.AgentStatusOption.prototype.setPauseCode = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.org.hunt_groups.v1alpha1.AgentStatusOption} returns this
 */
proto.services.org.hunt_groups.v1alpha1.AgentStatusOption.prototype.clearPauseCode = function() {
  return this.setPauseCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.org.hunt_groups.v1alpha1.AgentStatusOption.prototype.hasPauseCode = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional TriggerCallTypes call_types = 4;
 * @return {?proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes}
 */
proto.services.org.hunt_groups.v1alpha1.AgentStatusOption.prototype.getCallTypes = function() {
  return /** @type{?proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes} */ (
    jspb.Message.getWrapperField(this, proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes, 4));
};


/**
 * @param {?proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes|undefined} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.AgentStatusOption} returns this
*/
proto.services.org.hunt_groups.v1alpha1.AgentStatusOption.prototype.setCallTypes = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.org.hunt_groups.v1alpha1.AgentStatusOption} returns this
 */
proto.services.org.hunt_groups.v1alpha1.AgentStatusOption.prototype.clearCallTypes = function() {
  return this.setCallTypes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.org.hunt_groups.v1alpha1.AgentStatusOption.prototype.hasCallTypes = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool scheduled_callback_present = 5;
 * @return {boolean}
 */
proto.services.org.hunt_groups.v1alpha1.AgentStatusOption.prototype.getScheduledCallbackPresent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.AgentStatusOption} returns this
 */
proto.services.org.hunt_groups.v1alpha1.AgentStatusOption.prototype.setScheduledCallbackPresent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode.PauseCodeCase = {
  PAUSE_CODE_NOT_SET: 0,
  SYSTEM_PAUSE_CODE: 1,
  CUSTOM_PAUSE_CODE: 2
};

/**
 * @return {proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode.PauseCodeCase}
 */
proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode.prototype.getPauseCodeCase = function() {
  return /** @type {proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode.PauseCodeCase} */(jspb.Message.computeOneofCase(this, proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode.oneofGroups_[0]));
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
proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode.toObject = function(includeInstance, msg) {
  var f, obj = {
systemPauseCode: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
customPauseCode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode}
 */
proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode;
  return proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode}
 */
proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.services.org.hunt_groups.v1alpha1.SystemPauseCode} */ (reader.readEnum());
      msg.setSystemPauseCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomPauseCode(value);
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
proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.services.org.hunt_groups.v1alpha1.SystemPauseCode} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
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
};


/**
 * optional SystemPauseCode system_pause_code = 1;
 * @return {!proto.services.org.hunt_groups.v1alpha1.SystemPauseCode}
 */
proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode.prototype.getSystemPauseCode = function() {
  return /** @type {!proto.services.org.hunt_groups.v1alpha1.SystemPauseCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.services.org.hunt_groups.v1alpha1.SystemPauseCode} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode} returns this
 */
proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode.prototype.setSystemPauseCode = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode} returns this
 */
proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode.prototype.clearSystemPauseCode = function() {
  return jspb.Message.setOneofField(this, 1, proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode.prototype.hasSystemPauseCode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string custom_pause_code = 2;
 * @return {string}
 */
proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode.prototype.getCustomPauseCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode} returns this
 */
proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode.prototype.setCustomPauseCode = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode} returns this
 */
proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode.prototype.clearCustomPauseCode = function() {
  return jspb.Message.setOneofField(this, 2, proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode.prototype.hasCustomPauseCode = function() {
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
proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes.toObject = function(includeInstance, msg) {
  var f, obj = {
outbound: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
inbound: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
manual: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
preview: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes}
 */
proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes;
  return proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes}
 */
proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOutbound(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInbound(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setManual(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPreview(value);
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
proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutbound();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getInbound();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getManual();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getPreview();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional bool outbound = 1;
 * @return {boolean}
 */
proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes.prototype.getOutbound = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes} returns this
 */
proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes.prototype.setOutbound = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool inbound = 2;
 * @return {boolean}
 */
proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes.prototype.getInbound = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes} returns this
 */
proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes.prototype.setInbound = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool manual = 3;
 * @return {boolean}
 */
proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes.prototype.getManual = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes} returns this
 */
proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes.prototype.setManual = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool preview = 4;
 * @return {boolean}
 */
proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes.prototype.getPreview = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes} returns this
 */
proto.services.org.hunt_groups.v1alpha1.TriggerCallTypes.prototype.setPreview = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
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
proto.services.org.hunt_groups.v1alpha1.TriggerActionOption.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.TriggerActionOption.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.TriggerActionOption} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.TriggerActionOption.toObject = function(includeInstance, msg) {
  var f, obj = {
action: jspb.Message.getFieldWithDefault(msg, 1, 0),
displayMessage: jspb.Message.getFieldWithDefault(msg, 2, ""),
advanceToStatus: jspb.Message.getFieldWithDefault(msg, 3, 0),
webLinkSid: jspb.Message.getFieldWithDefault(msg, 4, 0),
integrationLinkSid: jspb.Message.getFieldWithDefault(msg, 5, 0),
exileLinkSid: jspb.Message.getFieldWithDefault(msg, 6, 0),
pauseCode: (f = msg.getPauseCode()) && proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode.toObject(includeInstance, f)
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.TriggerActionOption}
 */
proto.services.org.hunt_groups.v1alpha1.TriggerActionOption.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.TriggerActionOption;
  return proto.services.org.hunt_groups.v1alpha1.TriggerActionOption.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.TriggerActionOption} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.TriggerActionOption}
 */
proto.services.org.hunt_groups.v1alpha1.TriggerActionOption.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.services.org.hunt_groups.v1alpha1.TriggerAction} */ (reader.readEnum());
      msg.setAction(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayMessage(value);
      break;
    case 3:
      var value = /** @type {!proto.services.org.hunt_groups.v1alpha1.AgentStatus} */ (reader.readEnum());
      msg.setAdvanceToStatus(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWebLinkSid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIntegrationLinkSid(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExileLinkSid(value);
      break;
    case 7:
      var value = new proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode;
      reader.readMessage(value,proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode.deserializeBinaryFromReader);
      msg.setPauseCode(value);
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
proto.services.org.hunt_groups.v1alpha1.TriggerActionOption.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.TriggerActionOption.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.TriggerActionOption} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.TriggerActionOption.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDisplayMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAdvanceToStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getWebLinkSid();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getIntegrationLinkSid();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getExileLinkSid();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getPauseCode();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode.serializeBinaryToWriter
    );
  }
};


/**
 * optional TriggerAction action = 1;
 * @return {!proto.services.org.hunt_groups.v1alpha1.TriggerAction}
 */
proto.services.org.hunt_groups.v1alpha1.TriggerActionOption.prototype.getAction = function() {
  return /** @type {!proto.services.org.hunt_groups.v1alpha1.TriggerAction} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.services.org.hunt_groups.v1alpha1.TriggerAction} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.TriggerActionOption} returns this
 */
proto.services.org.hunt_groups.v1alpha1.TriggerActionOption.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string display_message = 2;
 * @return {string}
 */
proto.services.org.hunt_groups.v1alpha1.TriggerActionOption.prototype.getDisplayMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.TriggerActionOption} returns this
 */
proto.services.org.hunt_groups.v1alpha1.TriggerActionOption.prototype.setDisplayMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional AgentStatus advance_to_status = 3;
 * @return {!proto.services.org.hunt_groups.v1alpha1.AgentStatus}
 */
proto.services.org.hunt_groups.v1alpha1.TriggerActionOption.prototype.getAdvanceToStatus = function() {
  return /** @type {!proto.services.org.hunt_groups.v1alpha1.AgentStatus} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.services.org.hunt_groups.v1alpha1.AgentStatus} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.TriggerActionOption} returns this
 */
proto.services.org.hunt_groups.v1alpha1.TriggerActionOption.prototype.setAdvanceToStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional int64 web_link_sid = 4;
 * @return {number}
 */
proto.services.org.hunt_groups.v1alpha1.TriggerActionOption.prototype.getWebLinkSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.TriggerActionOption} returns this
 */
proto.services.org.hunt_groups.v1alpha1.TriggerActionOption.prototype.setWebLinkSid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 integration_link_sid = 5;
 * @return {number}
 */
proto.services.org.hunt_groups.v1alpha1.TriggerActionOption.prototype.getIntegrationLinkSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.TriggerActionOption} returns this
 */
proto.services.org.hunt_groups.v1alpha1.TriggerActionOption.prototype.setIntegrationLinkSid = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 exile_link_sid = 6;
 * @return {number}
 */
proto.services.org.hunt_groups.v1alpha1.TriggerActionOption.prototype.getExileLinkSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.TriggerActionOption} returns this
 */
proto.services.org.hunt_groups.v1alpha1.TriggerActionOption.prototype.setExileLinkSid = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional TriggerPauseCode pause_code = 7;
 * @return {?proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode}
 */
proto.services.org.hunt_groups.v1alpha1.TriggerActionOption.prototype.getPauseCode = function() {
  return /** @type{?proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode} */ (
    jspb.Message.getWrapperField(this, proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode, 7));
};


/**
 * @param {?proto.services.org.hunt_groups.v1alpha1.TriggerPauseCode|undefined} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.TriggerActionOption} returns this
*/
proto.services.org.hunt_groups.v1alpha1.TriggerActionOption.prototype.setPauseCode = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.org.hunt_groups.v1alpha1.TriggerActionOption} returns this
 */
proto.services.org.hunt_groups.v1alpha1.TriggerActionOption.prototype.clearPauseCode = function() {
  return this.setPauseCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.org.hunt_groups.v1alpha1.TriggerActionOption.prototype.hasPauseCode = function() {
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
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersRequest}
 */
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersRequest;
  return proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersRequest}
 */
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersRequest.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersRequest} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersRequest.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersResponse.repeatedFields_ = [1];



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
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
agentTriggersList: jspb.Message.toObjectList(msg.getAgentTriggersList(),
    proto.services.org.hunt_groups.v1alpha1.AgentTrigger.toObject, includeInstance)
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersResponse}
 */
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersResponse;
  return proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersResponse}
 */
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.services.org.hunt_groups.v1alpha1.AgentTrigger;
      reader.readMessage(value,proto.services.org.hunt_groups.v1alpha1.AgentTrigger.deserializeBinaryFromReader);
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
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentTriggersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.services.org.hunt_groups.v1alpha1.AgentTrigger.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AgentTrigger agent_triggers = 1;
 * @return {!Array<!proto.services.org.hunt_groups.v1alpha1.AgentTrigger>}
 */
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersResponse.prototype.getAgentTriggersList = function() {
  return /** @type{!Array<!proto.services.org.hunt_groups.v1alpha1.AgentTrigger>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.services.org.hunt_groups.v1alpha1.AgentTrigger, 1));
};


/**
 * @param {!Array<!proto.services.org.hunt_groups.v1alpha1.AgentTrigger>} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersResponse} returns this
*/
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersResponse.prototype.setAgentTriggersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.services.org.hunt_groups.v1alpha1.AgentTrigger=} opt_value
 * @param {number=} opt_index
 * @return {!proto.services.org.hunt_groups.v1alpha1.AgentTrigger}
 */
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersResponse.prototype.addAgentTriggers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.services.org.hunt_groups.v1alpha1.AgentTrigger, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersResponse} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ListHuntGroupAgentTriggersResponse.prototype.clearAgentTriggersList = function() {
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
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
fromHuntGroupSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
toHuntGroupSid: jspb.Message.getFieldWithDefault(msg, 2, 0),
agentTrigger: (f = msg.getAgentTrigger()) && proto.services.org.hunt_groups.v1alpha1.AgentTrigger.toObject(includeInstance, f)
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerRequest}
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerRequest;
  return proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerRequest}
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.services.org.hunt_groups.v1alpha1.AgentTrigger;
      reader.readMessage(value,proto.services.org.hunt_groups.v1alpha1.AgentTrigger.deserializeBinaryFromReader);
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
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerRequest.serializeBinaryToWriter = function(message, writer) {
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
      proto.services.org.hunt_groups.v1alpha1.AgentTrigger.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 from_hunt_group_sid = 1;
 * @return {number}
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerRequest.prototype.getFromHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerRequest} returns this
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerRequest.prototype.setFromHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 to_hunt_group_sid = 2;
 * @return {number}
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerRequest.prototype.getToHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerRequest} returns this
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerRequest.prototype.setToHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional AgentTrigger agent_trigger = 3;
 * @return {?proto.services.org.hunt_groups.v1alpha1.AgentTrigger}
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerRequest.prototype.getAgentTrigger = function() {
  return /** @type{?proto.services.org.hunt_groups.v1alpha1.AgentTrigger} */ (
    jspb.Message.getWrapperField(this, proto.services.org.hunt_groups.v1alpha1.AgentTrigger, 3));
};


/**
 * @param {?proto.services.org.hunt_groups.v1alpha1.AgentTrigger|undefined} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerRequest} returns this
*/
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerRequest.prototype.setAgentTrigger = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerRequest} returns this
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerRequest.prototype.clearAgentTrigger = function() {
  return this.setAgentTrigger(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerRequest.prototype.hasAgentTrigger = function() {
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
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerResponse}
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerResponse;
  return proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerResponse}
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupAgentTriggerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersRequest.repeatedFields_ = [2];



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
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
huntGroupSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
agentTriggersList: jspb.Message.toObjectList(msg.getAgentTriggersList(),
    proto.services.org.hunt_groups.v1alpha1.AgentTrigger.toObject, includeInstance)
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersRequest}
 */
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersRequest;
  return proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersRequest}
 */
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.services.org.hunt_groups.v1alpha1.AgentTrigger;
      reader.readMessage(value,proto.services.org.hunt_groups.v1alpha1.AgentTrigger.deserializeBinaryFromReader);
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
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersRequest.serializeBinaryToWriter = function(message, writer) {
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
      proto.services.org.hunt_groups.v1alpha1.AgentTrigger.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 hunt_group_sid = 1;
 * @return {number}
 */
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersRequest.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersRequest} returns this
 */
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersRequest.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated AgentTrigger agent_triggers = 2;
 * @return {!Array<!proto.services.org.hunt_groups.v1alpha1.AgentTrigger>}
 */
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersRequest.prototype.getAgentTriggersList = function() {
  return /** @type{!Array<!proto.services.org.hunt_groups.v1alpha1.AgentTrigger>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.services.org.hunt_groups.v1alpha1.AgentTrigger, 2));
};


/**
 * @param {!Array<!proto.services.org.hunt_groups.v1alpha1.AgentTrigger>} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersRequest} returns this
*/
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersRequest.prototype.setAgentTriggersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.services.org.hunt_groups.v1alpha1.AgentTrigger=} opt_value
 * @param {number=} opt_index
 * @return {!proto.services.org.hunt_groups.v1alpha1.AgentTrigger}
 */
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersRequest.prototype.addAgentTriggers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.services.org.hunt_groups.v1alpha1.AgentTrigger, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersRequest} returns this
 */
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersRequest.prototype.clearAgentTriggersList = function() {
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
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersResponse}
 */
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersResponse;
  return proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersResponse}
 */
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.UpdateHuntGroupAgentTriggersResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
toOrganizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
huntGroupSid: jspb.Message.getFieldWithDefault(msg, 2, 0),
newHuntGroupName: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationRequest}
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationRequest;
  return proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationRequest}
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToOrganizationId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHuntGroupSid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewHuntGroupName(value);
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
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToOrganizationId();
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
  f = message.getNewHuntGroupName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string to_organization_id = 1;
 * @return {string}
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationRequest.prototype.getToOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationRequest} returns this
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationRequest.prototype.setToOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 hunt_group_sid = 2;
 * @return {number}
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationRequest.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationRequest} returns this
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationRequest.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string new_hunt_group_name = 3;
 * @return {string}
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationRequest.prototype.getNewHuntGroupName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationRequest} returns this
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationRequest.prototype.setNewHuntGroupName = function(value) {
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
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationResponse}
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationResponse;
  return proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationResponse}
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.CopyHuntGroupToOrganizationResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
fromOrganizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
toOrganizationId: jspb.Message.getFieldWithDefault(msg, 2, ""),
huntGroupSid: jspb.Message.getFieldWithDefault(msg, 3, 0),
newHuntGroupName: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationRequest}
 */
proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationRequest;
  return proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationRequest}
 */
proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFromOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToOrganizationId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHuntGroupSid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewHuntGroupName(value);
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
proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFromOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getToOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getNewHuntGroupName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string from_organization_id = 1;
 * @return {string}
 */
proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationRequest.prototype.getFromOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationRequest} returns this
 */
proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationRequest.prototype.setFromOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string to_organization_id = 2;
 * @return {string}
 */
proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationRequest.prototype.getToOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationRequest} returns this
 */
proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationRequest.prototype.setToOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 hunt_group_sid = 3;
 * @return {number}
 */
proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationRequest.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationRequest} returns this
 */
proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationRequest.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string new_hunt_group_name = 4;
 * @return {string}
 */
proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationRequest.prototype.getNewHuntGroupName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationRequest} returns this
 */
proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationRequest.prototype.setNewHuntGroupName = function(value) {
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
proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationResponse}
 */
proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationResponse;
  return proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationResponse}
 */
proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.AdminCopyHuntGroupToOrganizationResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
orgId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsRequest}
 */
proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsRequest;
  return proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsRequest}
 */
proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsRequest} returns this
 */
proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.repeatedFields_ = [1];



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
proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
huntGroupsList: jspb.Message.toObjectList(msg.getHuntGroupsList(),
    proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.HuntGroup.toObject, includeInstance)
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse}
 */
proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse;
  return proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse}
 */
proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.HuntGroup;
      reader.readMessage(value,proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.HuntGroup.deserializeBinaryFromReader);
      msg.addHuntGroups(value);
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
proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntGroupsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.HuntGroup.serializeBinaryToWriter
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
proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.HuntGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.HuntGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.HuntGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.HuntGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
huntGroupSid: jspb.Message.getFieldWithDefault(msg, 2, 0),
huntGroupName: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.HuntGroup}
 */
proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.HuntGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.HuntGroup;
  return proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.HuntGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.HuntGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.HuntGroup}
 */
proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.HuntGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHuntGroupSid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setHuntGroupName(value);
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
proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.HuntGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.HuntGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.HuntGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.HuntGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getHuntGroupName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 hunt_group_sid = 2;
 * @return {number}
 */
proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.HuntGroup.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.HuntGroup} returns this
 */
proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.HuntGroup.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string hunt_group_name = 3;
 * @return {string}
 */
proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.HuntGroup.prototype.getHuntGroupName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.HuntGroup} returns this
 */
proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.HuntGroup.prototype.setHuntGroupName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated HuntGroup hunt_groups = 1;
 * @return {!Array<!proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.HuntGroup>}
 */
proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.prototype.getHuntGroupsList = function() {
  return /** @type{!Array<!proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.HuntGroup>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.HuntGroup, 1));
};


/**
 * @param {!Array<!proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.HuntGroup>} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse} returns this
*/
proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.prototype.setHuntGroupsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.HuntGroup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.HuntGroup}
 */
proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.prototype.addHuntGroups = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.HuntGroup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse} returns this
 */
proto.services.org.hunt_groups.v1alpha1.AdminListHuntGroupsResponse.prototype.clearHuntGroupsList = function() {
  return this.setHuntGroupsList([]);
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
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsRequest}
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsRequest;
  return proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsRequest}
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.repeatedFields_ = [1];



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
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
scriptsList: jspb.Message.toObjectList(msg.getScriptsList(),
    proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script.toObject, includeInstance)
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse}
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse;
  return proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse}
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script;
      reader.readMessage(value,proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script.deserializeBinaryFromReader);
      msg.addScripts(value);
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
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScriptsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script.repeatedFields_ = [2,3,4];



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
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script.toObject = function(includeInstance, msg) {
  var f, obj = {
script: (f = msg.getScript()) && api_commons_org_huntgroup_pb.HuntGroupScript.toObject(includeInstance, f),
huntGroupSidsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
outboundBroadcastTemplateSidsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
inboundBroadcastTemplateSidsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script}
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script;
  return proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script}
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_huntgroup_pb.HuntGroupScript;
      reader.readMessage(value,api_commons_org_huntgroup_pb.HuntGroupScript.deserializeBinaryFromReader);
      msg.setScript(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addHuntGroupSids(values[i]);
      }
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addOutboundBroadcastTemplateSids(values[i]);
      }
      break;
    case 4:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addInboundBroadcastTemplateSids(values[i]);
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
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScript();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_huntgroup_pb.HuntGroupScript.serializeBinaryToWriter
    );
  }
  f = message.getHuntGroupSidsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      2,
      f
    );
  }
  f = message.getOutboundBroadcastTemplateSidsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      3,
      f
    );
  }
  f = message.getInboundBroadcastTemplateSidsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      4,
      f
    );
  }
};


/**
 * optional api.commons.org.HuntGroupScript script = 1;
 * @return {?proto.api.commons.org.HuntGroupScript}
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script.prototype.getScript = function() {
  return /** @type{?proto.api.commons.org.HuntGroupScript} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.HuntGroupScript, 1));
};


/**
 * @param {?proto.api.commons.org.HuntGroupScript|undefined} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script} returns this
*/
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script.prototype.setScript = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script.prototype.clearScript = function() {
  return this.setScript(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script.prototype.hasScript = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated int64 hunt_group_sids = 2;
 * @return {!Array<number>}
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script.prototype.getHuntGroupSidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script.prototype.setHuntGroupSidsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script.prototype.addHuntGroupSids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script.prototype.clearHuntGroupSidsList = function() {
  return this.setHuntGroupSidsList([]);
};


/**
 * repeated int64 outbound_broadcast_template_sids = 3;
 * @return {!Array<number>}
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script.prototype.getOutboundBroadcastTemplateSidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script.prototype.setOutboundBroadcastTemplateSidsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script.prototype.addOutboundBroadcastTemplateSids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script.prototype.clearOutboundBroadcastTemplateSidsList = function() {
  return this.setOutboundBroadcastTemplateSidsList([]);
};


/**
 * repeated int64 inbound_broadcast_template_sids = 4;
 * @return {!Array<number>}
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script.prototype.getInboundBroadcastTemplateSidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script.prototype.setInboundBroadcastTemplateSidsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script.prototype.addInboundBroadcastTemplateSids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script.prototype.clearInboundBroadcastTemplateSidsList = function() {
  return this.setInboundBroadcastTemplateSidsList([]);
};


/**
 * repeated Script scripts = 1;
 * @return {!Array<!proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script>}
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.prototype.getScriptsList = function() {
  return /** @type{!Array<!proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script, 1));
};


/**
 * @param {!Array<!proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script>} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse} returns this
*/
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.prototype.setScriptsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script=} opt_value
 * @param {number=} opt_index
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script}
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.prototype.addScripts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.Script, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentScriptsResponse.prototype.clearScriptsList = function() {
  return this.setScriptsList([]);
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
proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateRequest}
 */
proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateRequest;
  return proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateRequest}
 */
proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateRequest.prototype.getTemplate = function() {
  return /** @type{?proto.api.commons.org.ClientInfoDisplayTemplate} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate, 1));
};


/**
 * @param {?proto.api.commons.org.ClientInfoDisplayTemplate|undefined} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateRequest} returns this
*/
proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateRequest.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateRequest} returns this
 */
proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateRequest.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateRequest.prototype.hasTemplate = function() {
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
proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateResponse}
 */
proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateResponse;
  return proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateResponse}
 */
proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateResponse.prototype.getTemplateSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateResponse} returns this
 */
proto.services.org.hunt_groups.v1alpha1.CreateAgentClientInfoDisplayTemplateResponse.prototype.setTemplateSid = function(value) {
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
proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateRequest}
 */
proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateRequest;
  return proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateRequest}
 */
proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateRequest.prototype.getTemplate = function() {
  return /** @type{?proto.api.commons.org.ClientInfoDisplayTemplate} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate, 1));
};


/**
 * @param {?proto.api.commons.org.ClientInfoDisplayTemplate|undefined} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateRequest} returns this
*/
proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateRequest.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateRequest} returns this
 */
proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateRequest.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateRequest.prototype.hasTemplate = function() {
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
proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateResponse}
 */
proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateResponse;
  return proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateResponse}
 */
proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.UpdateAgentClientInfoDisplayTemplateResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateRequest}
 */
proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateRequest;
  return proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateRequest}
 */
proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateRequest.prototype.getTemplateSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateRequest} returns this
 */
proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateRequest.prototype.setTemplateSid = function(value) {
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
proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateResponse}
 */
proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateResponse;
  return proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateResponse}
 */
proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateResponse.prototype.getTemplate = function() {
  return /** @type{?proto.api.commons.org.ClientInfoDisplayTemplate} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate, 1));
};


/**
 * @param {?proto.api.commons.org.ClientInfoDisplayTemplate|undefined} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateResponse} returns this
*/
proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateResponse.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateResponse} returns this
 */
proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateResponse.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.org.hunt_groups.v1alpha1.GetAgentClientInfoDisplayTemplateResponse.prototype.hasTemplate = function() {
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
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesRequest}
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesRequest;
  return proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesRequest}
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.repeatedFields_ = [1,2];



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
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
templatesList: jspb.Message.toObjectList(msg.getTemplatesList(),
    api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate.toObject, includeInstance),
displayTemplatesList: jspb.Message.toObjectList(msg.getDisplayTemplatesList(),
    proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo.toObject, includeInstance)
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse}
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse;
  return proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse}
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate;
      reader.readMessage(value,api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate.deserializeBinaryFromReader);
      msg.addTemplates(value);
      break;
    case 2:
      var value = new proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo;
      reader.readMessage(value,proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo.deserializeBinaryFromReader);
      msg.addDisplayTemplates(value);
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
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTemplatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate.serializeBinaryToWriter
    );
  }
  f = message.getDisplayTemplatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo.repeatedFields_ = [2,3,4];



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
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
template: (f = msg.getTemplate()) && api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate.toObject(includeInstance, f),
huntGroupSidsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
outboundBroadcastTemplateSidsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
inboundBroadcastTemplateSidsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo}
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo;
  return proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo}
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addHuntGroupSids(values[i]);
      }
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addOutboundBroadcastTemplateSids(values[i]);
      }
      break;
    case 4:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addInboundBroadcastTemplateSids(values[i]);
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
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTemplate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate.serializeBinaryToWriter
    );
  }
  f = message.getHuntGroupSidsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      2,
      f
    );
  }
  f = message.getOutboundBroadcastTemplateSidsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      3,
      f
    );
  }
  f = message.getInboundBroadcastTemplateSidsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      4,
      f
    );
  }
};


/**
 * optional api.commons.org.ClientInfoDisplayTemplate template = 1;
 * @return {?proto.api.commons.org.ClientInfoDisplayTemplate}
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo.prototype.getTemplate = function() {
  return /** @type{?proto.api.commons.org.ClientInfoDisplayTemplate} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate, 1));
};


/**
 * @param {?proto.api.commons.org.ClientInfoDisplayTemplate|undefined} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo} returns this
*/
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo.prototype.hasTemplate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated int64 hunt_group_sids = 2;
 * @return {!Array<number>}
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo.prototype.getHuntGroupSidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo.prototype.setHuntGroupSidsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo.prototype.addHuntGroupSids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo.prototype.clearHuntGroupSidsList = function() {
  return this.setHuntGroupSidsList([]);
};


/**
 * repeated int64 outbound_broadcast_template_sids = 3;
 * @return {!Array<number>}
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo.prototype.getOutboundBroadcastTemplateSidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo.prototype.setOutboundBroadcastTemplateSidsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo.prototype.addOutboundBroadcastTemplateSids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo.prototype.clearOutboundBroadcastTemplateSidsList = function() {
  return this.setOutboundBroadcastTemplateSidsList([]);
};


/**
 * repeated int64 inbound_broadcast_template_sids = 4;
 * @return {!Array<number>}
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo.prototype.getInboundBroadcastTemplateSidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo.prototype.setInboundBroadcastTemplateSidsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo.prototype.addInboundBroadcastTemplateSids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo.prototype.clearInboundBroadcastTemplateSidsList = function() {
  return this.setInboundBroadcastTemplateSidsList([]);
};


/**
 * repeated api.commons.org.ClientInfoDisplayTemplate templates = 1;
 * @return {!Array<!proto.api.commons.org.ClientInfoDisplayTemplate>}
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.prototype.getTemplatesList = function() {
  return /** @type{!Array<!proto.api.commons.org.ClientInfoDisplayTemplate>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_huntgroup_pb.ClientInfoDisplayTemplate, 1));
};


/**
 * @param {!Array<!proto.api.commons.org.ClientInfoDisplayTemplate>} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse} returns this
*/
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.prototype.setTemplatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.commons.org.ClientInfoDisplayTemplate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.ClientInfoDisplayTemplate}
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.prototype.addTemplates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.commons.org.ClientInfoDisplayTemplate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.prototype.clearTemplatesList = function() {
  return this.setTemplatesList([]);
};


/**
 * repeated TemplateInfo display_templates = 2;
 * @return {!Array<!proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo>}
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.prototype.getDisplayTemplatesList = function() {
  return /** @type{!Array<!proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo, 2));
};


/**
 * @param {!Array<!proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo>} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse} returns this
*/
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.prototype.setDisplayTemplatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo}
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.prototype.addDisplayTemplates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.TemplateInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse} returns this
 */
proto.services.org.hunt_groups.v1alpha1.ListAgentClientInfoDisplayTemplatesResponse.prototype.clearDisplayTemplatesList = function() {
  return this.setDisplayTemplatesList([]);
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
proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateRequest}
 */
proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateRequest;
  return proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateRequest}
 */
proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateRequest.prototype.getTemplateSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateRequest} returns this
 */
proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateRequest.prototype.setTemplateSid = function(value) {
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
proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateResponse}
 */
proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateResponse;
  return proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateResponse}
 */
proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.DeleteAgentClientInfoDisplayTemplateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsRequest.repeatedFields_ = [2];



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
proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
templateSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
huntGroupSidsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsRequest}
 */
proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsRequest;
  return proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsRequest}
 */
proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addHuntGroupSids(values[i]);
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
proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTemplateSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getHuntGroupSidsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 template_sid = 1;
 * @return {number}
 */
proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsRequest.prototype.getTemplateSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsRequest} returns this
 */
proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsRequest.prototype.setTemplateSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated int64 hunt_group_sids = 2;
 * @return {!Array<number>}
 */
proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsRequest.prototype.getHuntGroupSidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsRequest} returns this
 */
proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsRequest.prototype.setHuntGroupSidsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsRequest} returns this
 */
proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsRequest.prototype.addHuntGroupSids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsRequest} returns this
 */
proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsRequest.prototype.clearHuntGroupSidsList = function() {
  return this.setHuntGroupSidsList([]);
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
proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsResponse}
 */
proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsResponse;
  return proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsResponse}
 */
proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.AssignAgentClientInfoDisplayTemplateToHuntGroupsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsRequest.repeatedFields_ = [1];



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
proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
huntGroupSidsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsRequest}
 */
proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsRequest;
  return proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsRequest}
 */
proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addHuntGroupSids(values[i]);
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
proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntGroupSidsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      1,
      f
    );
  }
};


/**
 * repeated int64 hunt_group_sids = 1;
 * @return {!Array<number>}
 */
proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsRequest.prototype.getHuntGroupSidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsRequest} returns this
 */
proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsRequest.prototype.setHuntGroupSidsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsRequest} returns this
 */
proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsRequest.prototype.addHuntGroupSids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsRequest} returns this
 */
proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsRequest.prototype.clearHuntGroupSidsList = function() {
  return this.setHuntGroupSidsList([]);
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
proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsResponse}
 */
proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsResponse;
  return proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsResponse}
 */
proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.org.hunt_groups.v1alpha1.UnassignAgentClientInfoDisplayTemplateFromHuntGroupsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.services.org.hunt_groups.v1alpha1.AgentStatus = {
  AGENT_STATUS_UNSPECIFIED: 0,
  AGENT_STATUS_LOGGED_IN: 1,
  AGENT_STATUS_WAITING: 2,
  AGENT_STATUS_PAUSED: 3,
  AGENT_STATUS_ON_CALL: 4,
  AGENT_STATUS_TRANSFER_CALL: 5,
  AGENT_STATUS_TRANSFER_LOST: 6,
  AGENT_STATUS_TRANSFER_TARGET_LOST: 7,
  AGENT_STATUS_PREVIEW_CALL: 8,
  AGENT_STATUS_MANUAL_DIAL_CALL: 9,
  AGENT_STATUS_WRAP_UP: 10
};

/**
 * @enum {number}
 */
proto.services.org.hunt_groups.v1alpha1.SystemPauseCode = {
  SYSTEM_PAUSE_CODE_UNSPECIFIED: 0,
  SYSTEM_PAUSE_CODE_AGENT_TRIGGER_ADVANCE_TO_PAUSED: 1,
  SYSTEM_PAUSE_CODE_CHANGE_PASSWORD: 2,
  SYSTEM_PAUSE_CODE_CHECK_VOICE_MAIL: 3,
  SYSTEM_PAUSE_CODE_MANUALLY_APPROVE_CALLS: 4
};

/**
 * @enum {number}
 */
proto.services.org.hunt_groups.v1alpha1.TriggerAction = {
  TRIGGER_ACTION_UNSPECIFIED: 0,
  TRIGGER_ACTION_ADVANCE_TO_STATUS: 1,
  TRIGGER_ACTION_DISPLAY_MESSAGE: 2,
  TRIGGER_ACTION_EJECT_AGENT: 3,
  TRIGGER_ACTION_EXECUTE_WEB_LINK: 4,
  TRIGGER_ACTION_EXECUTE_INTEGRATION_LINK: 5,
  TRIGGER_ACTION_EXECUTE_EXILE_LINK: 6
};

goog.object.extend(exports, proto.services.org.hunt_groups.v1alpha1);
