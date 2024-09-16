// source: api/v0alpha/acd.proto
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
var localGlobalThis = require("../../global.js");
var proto = localGlobalThis.proto;
var goog = jspb;
var global = localGlobalThis || 
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var annotations_authz_pb = require('../../annotations/authz_pb.js');
goog.object.extend(proto, annotations_authz_pb);
var api_commons_acd_pb = require('../../api/commons/acd_pb.js');
goog.object.extend(proto, api_commons_acd_pb);
var api_commons_integrations_integrations_pb = require('../../api/commons/integrations/integrations_pb.js');
goog.object.extend(proto, api_commons_integrations_integrations_pb);
var api_v1alpha1_integrations_service_pb = require('../../api/v1alpha1/integrations/service_pb.js');
goog.object.extend(proto, api_v1alpha1_integrations_service_pb);
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
goog.exportSymbol('proto.api.v0alpha.ACDGetAllAgentsStatusesReply', null, global);
goog.exportSymbol('proto.api.v0alpha.ACDGetAllAgentsStatusesRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.AcceptSecureFormFieldReq', null, global);
goog.exportSymbol('proto.api.v0alpha.AcceptSecureFormFieldRes', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentDisconnectReply', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentDisconnectRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentGUIBusyReply', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentGUIBusyRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentGetCallFromHoldReply', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentGetCallFromHoldRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentGetConnectedPartyReply', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentGetConnectedPartyRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentGetSpecificCallFromHoldReply', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentGetSpecificCallFromHoldRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentGetStatusReply', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentGetStatusRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentIntercomAcceptReply', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentIntercomAcceptRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentIntercomCancelReply', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentIntercomCancelRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentIntercomRejectReply', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentIntercomRejectRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentIntercomReply', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentIntercomRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentInviteTransferCallerToConferenceReply', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentInviteTransferCallerToConferenceRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentMonitorCallsReply', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentMonitorCallsRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentMuteReply', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentMuteRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentPBXApproveCallReply', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentPBXApproveCallRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentPBXRejectCallReply', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentPBXRejectCallRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentPauseReply', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentPauseRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentPutCallOnHoldReply', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentPutCallOnHoldRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentReceiveMessageReply', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentReceiveMessageRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentSessionEventReq', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentSessionEventRes', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentSetReadyReply', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentSetReadyRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentStatusDetails', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentUnmuteReply', null, global);
goog.exportSymbol('proto.api.v0alpha.AgentUnmuteRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.CallerEvent', null, global);
goog.exportSymbol('proto.api.v0alpha.CallerGetRawEventReply', null, global);
goog.exportSymbol('proto.api.v0alpha.CallerGetRawEventRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.CallerRequeueReply', null, global);
goog.exportSymbol('proto.api.v0alpha.CallerRequeueRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.CallerSendToVoicemailReply', null, global);
goog.exportSymbol('proto.api.v0alpha.CallerSendToVoicemailRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.CollectSecureFormFieldReq', null, global);
goog.exportSymbol('proto.api.v0alpha.CollectSecureFormFieldRes', null, global);
goog.exportSymbol('proto.api.v0alpha.CreateWarmOutboundTransferMemberReply', null, global);
goog.exportSymbol('proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.DialManualCancelReply', null, global);
goog.exportSymbol('proto.api.v0alpha.DialManualCancelRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.DialManualPrepareReply', null, global);
goog.exportSymbol('proto.api.v0alpha.DialManualPrepareRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.DialPreviewPrepareReply', null, global);
goog.exportSymbol('proto.api.v0alpha.DialPreviewPrepareRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.FinishSecureFormHandlingReq', null, global);
goog.exportSymbol('proto.api.v0alpha.FinishSecureFormHandlingRes', null, global);
goog.exportSymbol('proto.api.v0alpha.GetAgentCallCountsReq', null, global);
goog.exportSymbol('proto.api.v0alpha.GetAgentCallCountsRes', null, global);
goog.exportSymbol('proto.api.v0alpha.GetCallerLostPeerReply', null, global);
goog.exportSymbol('proto.api.v0alpha.GetCallerLostPeerRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.HoldTransferMemberReq', null, global);
goog.exportSymbol('proto.api.v0alpha.HoldTransferMemberRes', null, global);
goog.exportSymbol('proto.api.v0alpha.ManagerAgentGetConnectedPartyReply', null, global);
goog.exportSymbol('proto.api.v0alpha.ManagerAgentGetConnectedPartyRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.PeerAgentWithCallerReply', null, global);
goog.exportSymbol('proto.api.v0alpha.PeerAgentWithCallerRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.PlayDTMFReply', null, global);
goog.exportSymbol('proto.api.v0alpha.PlayDTMFRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.PlaySoundboardEntityReq', null, global);
goog.exportSymbol('proto.api.v0alpha.PlaySoundboardEntityRes', null, global);
goog.exportSymbol('proto.api.v0alpha.PopulateWorkflowFieldsReq', null, global);
goog.exportSymbol('proto.api.v0alpha.PopulateWorkflowFieldsRes', null, global);
goog.exportSymbol('proto.api.v0alpha.ProcessSecureFormReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ProcessSecureFormRes', null, global);
goog.exportSymbol('proto.api.v0alpha.RemoveTransferMemberReply', null, global);
goog.exportSymbol('proto.api.v0alpha.RemoveTransferMemberRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.ResetSecureFormFieldReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ResetSecureFormFieldRes', null, global);
goog.exportSymbol('proto.api.v0alpha.StartSecureFormReq', null, global);
goog.exportSymbol('proto.api.v0alpha.StartSecureFormRes', null, global);
goog.exportSymbol('proto.api.v0alpha.StopSoundboardEntityReq', null, global);
goog.exportSymbol('proto.api.v0alpha.StopSoundboardEntityRes', null, global);
goog.exportSymbol('proto.api.v0alpha.TransferColdToAgentReply', null, global);
goog.exportSymbol('proto.api.v0alpha.TransferColdToAgentRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.TransferColdToOutboundReply', null, global);
goog.exportSymbol('proto.api.v0alpha.TransferColdToOutboundRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.TransferWarmToAgentApproveReply', null, global);
goog.exportSymbol('proto.api.v0alpha.TransferWarmToAgentApproveRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.TransferWarmToAgentCancelReply', null, global);
goog.exportSymbol('proto.api.v0alpha.TransferWarmToAgentCancelRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.TransferWarmToAgentStartReply', null, global);
goog.exportSymbol('proto.api.v0alpha.TransferWarmToAgentStartRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.TransferWarmToOutboundApproveReply', null, global);
goog.exportSymbol('proto.api.v0alpha.TransferWarmToOutboundApproveRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.TransferWarmToOutboundCancelReply', null, global);
goog.exportSymbol('proto.api.v0alpha.TransferWarmToOutboundCancelRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.TransferWarmToOutboundStartReply', null, global);
goog.exportSymbol('proto.api.v0alpha.TransferWarmToOutboundStartRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.UnholdTransferMemberReq', null, global);
goog.exportSymbol('proto.api.v0alpha.UnholdTransferMemberRes', null, global);
goog.exportSymbol('proto.api.v0alpha.UpdateAgentSkillsReply', null, global);
goog.exportSymbol('proto.api.v0alpha.UpdateAgentSkillsRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.ValidateFieldReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ValidateFieldRes', null, global);
goog.exportSymbol('proto.api.v0alpha.WarmCallerTransferApproveReq', null, global);
goog.exportSymbol('proto.api.v0alpha.WarmCallerTransferApproveRes', null, global);
goog.exportSymbol('proto.api.v0alpha.WarmCallerTransferCancelReq', null, global);
goog.exportSymbol('proto.api.v0alpha.WarmCallerTransferCancelRes', null, global);
goog.exportSymbol('proto.api.v0alpha.WarmCallerTransferStartReq', null, global);
goog.exportSymbol('proto.api.v0alpha.WarmCallerTransferStartRes', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentGetStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentGetStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentGetStatusRequest.displayName = 'proto.api.v0alpha.AgentGetStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentGetStatusReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.AgentGetStatusReply.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.AgentGetStatusReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentGetStatusReply.displayName = 'proto.api.v0alpha.AgentGetStatusReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentGetConnectedPartyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentGetConnectedPartyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentGetConnectedPartyRequest.displayName = 'proto.api.v0alpha.AgentGetConnectedPartyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentGetConnectedPartyReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentGetConnectedPartyReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentGetConnectedPartyReply.displayName = 'proto.api.v0alpha.AgentGetConnectedPartyReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ManagerAgentGetConnectedPartyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ManagerAgentGetConnectedPartyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ManagerAgentGetConnectedPartyRequest.displayName = 'proto.api.v0alpha.ManagerAgentGetConnectedPartyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ManagerAgentGetConnectedPartyReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ManagerAgentGetConnectedPartyReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ManagerAgentGetConnectedPartyReply.displayName = 'proto.api.v0alpha.ManagerAgentGetConnectedPartyReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentIntercomRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentIntercomRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentIntercomRequest.displayName = 'proto.api.v0alpha.AgentIntercomRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentIntercomReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentIntercomReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentIntercomReply.displayName = 'proto.api.v0alpha.AgentIntercomReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentIntercomAcceptRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentIntercomAcceptRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentIntercomAcceptRequest.displayName = 'proto.api.v0alpha.AgentIntercomAcceptRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentIntercomAcceptReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentIntercomAcceptReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentIntercomAcceptReply.displayName = 'proto.api.v0alpha.AgentIntercomAcceptReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentIntercomRejectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentIntercomRejectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentIntercomRejectRequest.displayName = 'proto.api.v0alpha.AgentIntercomRejectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentIntercomRejectReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentIntercomRejectReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentIntercomRejectReply.displayName = 'proto.api.v0alpha.AgentIntercomRejectReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentIntercomCancelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentIntercomCancelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentIntercomCancelRequest.displayName = 'proto.api.v0alpha.AgentIntercomCancelRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentIntercomCancelReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentIntercomCancelReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentIntercomCancelReply.displayName = 'proto.api.v0alpha.AgentIntercomCancelReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DialManualPrepareRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DialManualPrepareRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DialManualPrepareRequest.displayName = 'proto.api.v0alpha.DialManualPrepareRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DialManualPrepareReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DialManualPrepareReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DialManualPrepareReply.displayName = 'proto.api.v0alpha.DialManualPrepareReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DialManualCancelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DialManualCancelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DialManualCancelRequest.displayName = 'proto.api.v0alpha.DialManualCancelRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DialManualCancelReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DialManualCancelReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DialManualCancelReply.displayName = 'proto.api.v0alpha.DialManualCancelReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DialPreviewPrepareRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DialPreviewPrepareRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DialPreviewPrepareRequest.displayName = 'proto.api.v0alpha.DialPreviewPrepareRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DialPreviewPrepareReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DialPreviewPrepareReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DialPreviewPrepareReply.displayName = 'proto.api.v0alpha.DialPreviewPrepareReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentPauseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentPauseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentPauseRequest.displayName = 'proto.api.v0alpha.AgentPauseRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentPauseReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentPauseReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentPauseReply.displayName = 'proto.api.v0alpha.AgentPauseReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentSetReadyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentSetReadyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentSetReadyRequest.displayName = 'proto.api.v0alpha.AgentSetReadyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentSetReadyReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentSetReadyReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentSetReadyReply.displayName = 'proto.api.v0alpha.AgentSetReadyReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentGUIBusyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentGUIBusyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentGUIBusyRequest.displayName = 'proto.api.v0alpha.AgentGUIBusyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentGUIBusyReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentGUIBusyReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentGUIBusyReply.displayName = 'proto.api.v0alpha.AgentGUIBusyReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentDisconnectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentDisconnectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentDisconnectRequest.displayName = 'proto.api.v0alpha.AgentDisconnectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentDisconnectReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentDisconnectReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentDisconnectReply.displayName = 'proto.api.v0alpha.AgentDisconnectReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentSessionEventReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentSessionEventReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentSessionEventReq.displayName = 'proto.api.v0alpha.AgentSessionEventReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentSessionEventRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentSessionEventRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentSessionEventRes.displayName = 'proto.api.v0alpha.AgentSessionEventRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CallerRequeueRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CallerRequeueRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CallerRequeueRequest.displayName = 'proto.api.v0alpha.CallerRequeueRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CallerRequeueReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CallerRequeueReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CallerRequeueReply.displayName = 'proto.api.v0alpha.CallerRequeueReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.TransferWarmToAgentCancelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.TransferWarmToAgentCancelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.TransferWarmToAgentCancelRequest.displayName = 'proto.api.v0alpha.TransferWarmToAgentCancelRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.TransferWarmToAgentCancelReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.TransferWarmToAgentCancelReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.TransferWarmToAgentCancelReply.displayName = 'proto.api.v0alpha.TransferWarmToAgentCancelReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.TransferWarmToOutboundCancelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.TransferWarmToOutboundCancelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.TransferWarmToOutboundCancelRequest.displayName = 'proto.api.v0alpha.TransferWarmToOutboundCancelRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.TransferWarmToOutboundCancelReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.TransferWarmToOutboundCancelReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.TransferWarmToOutboundCancelReply.displayName = 'proto.api.v0alpha.TransferWarmToOutboundCancelReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.TransferWarmToAgentApproveRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.TransferWarmToAgentApproveRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.TransferWarmToAgentApproveRequest.displayName = 'proto.api.v0alpha.TransferWarmToAgentApproveRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.TransferWarmToAgentApproveReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.TransferWarmToAgentApproveReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.TransferWarmToAgentApproveReply.displayName = 'proto.api.v0alpha.TransferWarmToAgentApproveReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.TransferWarmToOutboundApproveRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.TransferWarmToOutboundApproveRequest.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.TransferWarmToOutboundApproveRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.TransferWarmToOutboundApproveRequest.displayName = 'proto.api.v0alpha.TransferWarmToOutboundApproveRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.TransferWarmToOutboundApproveReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.TransferWarmToOutboundApproveReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.TransferWarmToOutboundApproveReply.displayName = 'proto.api.v0alpha.TransferWarmToOutboundApproveReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CallerSendToVoicemailRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CallerSendToVoicemailRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CallerSendToVoicemailRequest.displayName = 'proto.api.v0alpha.CallerSendToVoicemailRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CallerSendToVoicemailReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CallerSendToVoicemailReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CallerSendToVoicemailReply.displayName = 'proto.api.v0alpha.CallerSendToVoicemailReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentInviteTransferCallerToConferenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentInviteTransferCallerToConferenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentInviteTransferCallerToConferenceRequest.displayName = 'proto.api.v0alpha.AgentInviteTransferCallerToConferenceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentInviteTransferCallerToConferenceReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentInviteTransferCallerToConferenceReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentInviteTransferCallerToConferenceReply.displayName = 'proto.api.v0alpha.AgentInviteTransferCallerToConferenceReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentMonitorCallsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentMonitorCallsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentMonitorCallsRequest.displayName = 'proto.api.v0alpha.AgentMonitorCallsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentMonitorCallsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentMonitorCallsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentMonitorCallsReply.displayName = 'proto.api.v0alpha.AgentMonitorCallsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.TransferColdToOutboundRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.TransferColdToOutboundRequest.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.TransferColdToOutboundRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.TransferColdToOutboundRequest.displayName = 'proto.api.v0alpha.TransferColdToOutboundRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.TransferColdToOutboundReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.TransferColdToOutboundReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.TransferColdToOutboundReply.displayName = 'proto.api.v0alpha.TransferColdToOutboundReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.TransferColdToAgentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.TransferColdToAgentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.TransferColdToAgentRequest.displayName = 'proto.api.v0alpha.TransferColdToAgentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.TransferColdToAgentReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.TransferColdToAgentReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.TransferColdToAgentReply.displayName = 'proto.api.v0alpha.TransferColdToAgentReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.TransferWarmToOutboundStartRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.TransferWarmToOutboundStartRequest.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.TransferWarmToOutboundStartRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.TransferWarmToOutboundStartRequest.displayName = 'proto.api.v0alpha.TransferWarmToOutboundStartRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.TransferWarmToOutboundStartReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.TransferWarmToOutboundStartReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.TransferWarmToOutboundStartReply.displayName = 'proto.api.v0alpha.TransferWarmToOutboundStartReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest.displayName = 'proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateWarmOutboundTransferMemberReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CreateWarmOutboundTransferMemberReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateWarmOutboundTransferMemberReply.displayName = 'proto.api.v0alpha.CreateWarmOutboundTransferMemberReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.RemoveTransferMemberRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.RemoveTransferMemberRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.RemoveTransferMemberRequest.displayName = 'proto.api.v0alpha.RemoveTransferMemberRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.RemoveTransferMemberReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.RemoveTransferMemberReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.RemoveTransferMemberReply.displayName = 'proto.api.v0alpha.RemoveTransferMemberReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.TransferWarmToAgentStartRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.TransferWarmToAgentStartRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.TransferWarmToAgentStartRequest.displayName = 'proto.api.v0alpha.TransferWarmToAgentStartRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.TransferWarmToAgentStartReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.TransferWarmToAgentStartReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.TransferWarmToAgentStartReply.displayName = 'proto.api.v0alpha.TransferWarmToAgentStartReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentGetCallFromHoldRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentGetCallFromHoldRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentGetCallFromHoldRequest.displayName = 'proto.api.v0alpha.AgentGetCallFromHoldRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentGetCallFromHoldReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentGetCallFromHoldReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentGetCallFromHoldReply.displayName = 'proto.api.v0alpha.AgentGetCallFromHoldReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentGetSpecificCallFromHoldRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentGetSpecificCallFromHoldRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentGetSpecificCallFromHoldRequest.displayName = 'proto.api.v0alpha.AgentGetSpecificCallFromHoldRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentGetSpecificCallFromHoldReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentGetSpecificCallFromHoldReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentGetSpecificCallFromHoldReply.displayName = 'proto.api.v0alpha.AgentGetSpecificCallFromHoldReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentPutCallOnHoldRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentPutCallOnHoldRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentPutCallOnHoldRequest.displayName = 'proto.api.v0alpha.AgentPutCallOnHoldRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentPutCallOnHoldReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentPutCallOnHoldReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentPutCallOnHoldReply.displayName = 'proto.api.v0alpha.AgentPutCallOnHoldReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ACDGetAllAgentsStatusesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ACDGetAllAgentsStatusesRequest.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ACDGetAllAgentsStatusesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ACDGetAllAgentsStatusesRequest.displayName = 'proto.api.v0alpha.ACDGetAllAgentsStatusesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentStatusDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentStatusDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentStatusDetails.displayName = 'proto.api.v0alpha.AgentStatusDetails';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ACDGetAllAgentsStatusesReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ACDGetAllAgentsStatusesReply.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ACDGetAllAgentsStatusesReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ACDGetAllAgentsStatusesReply.displayName = 'proto.api.v0alpha.ACDGetAllAgentsStatusesReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentReceiveMessageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentReceiveMessageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentReceiveMessageRequest.displayName = 'proto.api.v0alpha.AgentReceiveMessageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentReceiveMessageReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentReceiveMessageReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentReceiveMessageReply.displayName = 'proto.api.v0alpha.AgentReceiveMessageReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentPBXRejectCallRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentPBXRejectCallRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentPBXRejectCallRequest.displayName = 'proto.api.v0alpha.AgentPBXRejectCallRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentPBXRejectCallReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentPBXRejectCallReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentPBXRejectCallReply.displayName = 'proto.api.v0alpha.AgentPBXRejectCallReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentPBXApproveCallRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentPBXApproveCallRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentPBXApproveCallRequest.displayName = 'proto.api.v0alpha.AgentPBXApproveCallRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentPBXApproveCallReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentPBXApproveCallReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentPBXApproveCallReply.displayName = 'proto.api.v0alpha.AgentPBXApproveCallReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetCallerLostPeerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetCallerLostPeerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetCallerLostPeerRequest.displayName = 'proto.api.v0alpha.GetCallerLostPeerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetCallerLostPeerReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetCallerLostPeerReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetCallerLostPeerReply.displayName = 'proto.api.v0alpha.GetCallerLostPeerReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CallerGetRawEventRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CallerGetRawEventRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CallerGetRawEventRequest.displayName = 'proto.api.v0alpha.CallerGetRawEventRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CallerGetRawEventReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CallerGetRawEventReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CallerGetRawEventReply.displayName = 'proto.api.v0alpha.CallerGetRawEventReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CallerEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CallerEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CallerEvent.displayName = 'proto.api.v0alpha.CallerEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.PeerAgentWithCallerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.PeerAgentWithCallerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.PeerAgentWithCallerRequest.displayName = 'proto.api.v0alpha.PeerAgentWithCallerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.PeerAgentWithCallerReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.PeerAgentWithCallerReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.PeerAgentWithCallerReply.displayName = 'proto.api.v0alpha.PeerAgentWithCallerReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.HoldTransferMemberReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.HoldTransferMemberReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.HoldTransferMemberReq.displayName = 'proto.api.v0alpha.HoldTransferMemberReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.HoldTransferMemberRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.HoldTransferMemberRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.HoldTransferMemberRes.displayName = 'proto.api.v0alpha.HoldTransferMemberRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UnholdTransferMemberReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UnholdTransferMemberReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UnholdTransferMemberReq.displayName = 'proto.api.v0alpha.UnholdTransferMemberReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UnholdTransferMemberRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UnholdTransferMemberRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UnholdTransferMemberRes.displayName = 'proto.api.v0alpha.UnholdTransferMemberRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetAgentCallCountsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.GetAgentCallCountsReq.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.GetAgentCallCountsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetAgentCallCountsReq.displayName = 'proto.api.v0alpha.GetAgentCallCountsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetAgentCallCountsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetAgentCallCountsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetAgentCallCountsRes.displayName = 'proto.api.v0alpha.GetAgentCallCountsRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.WarmCallerTransferStartReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.WarmCallerTransferStartReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.WarmCallerTransferStartReq.displayName = 'proto.api.v0alpha.WarmCallerTransferStartReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.WarmCallerTransferStartRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.WarmCallerTransferStartRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.WarmCallerTransferStartRes.displayName = 'proto.api.v0alpha.WarmCallerTransferStartRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.WarmCallerTransferCancelReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.WarmCallerTransferCancelReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.WarmCallerTransferCancelReq.displayName = 'proto.api.v0alpha.WarmCallerTransferCancelReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.WarmCallerTransferCancelRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.WarmCallerTransferCancelRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.WarmCallerTransferCancelRes.displayName = 'proto.api.v0alpha.WarmCallerTransferCancelRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.WarmCallerTransferApproveReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.WarmCallerTransferApproveReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.WarmCallerTransferApproveReq.displayName = 'proto.api.v0alpha.WarmCallerTransferApproveReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.WarmCallerTransferApproveRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.WarmCallerTransferApproveRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.WarmCallerTransferApproveRes.displayName = 'proto.api.v0alpha.WarmCallerTransferApproveRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.PlaySoundboardEntityReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.PlaySoundboardEntityReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.PlaySoundboardEntityReq.displayName = 'proto.api.v0alpha.PlaySoundboardEntityReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.PlaySoundboardEntityRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.PlaySoundboardEntityRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.PlaySoundboardEntityRes.displayName = 'proto.api.v0alpha.PlaySoundboardEntityRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.StopSoundboardEntityReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.StopSoundboardEntityReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.StopSoundboardEntityReq.displayName = 'proto.api.v0alpha.StopSoundboardEntityReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.StopSoundboardEntityRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.StopSoundboardEntityRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.StopSoundboardEntityRes.displayName = 'proto.api.v0alpha.StopSoundboardEntityRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateAgentSkillsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UpdateAgentSkillsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateAgentSkillsRequest.displayName = 'proto.api.v0alpha.UpdateAgentSkillsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateAgentSkillsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UpdateAgentSkillsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateAgentSkillsReply.displayName = 'proto.api.v0alpha.UpdateAgentSkillsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.PlayDTMFRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.PlayDTMFRequest.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.PlayDTMFRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.PlayDTMFRequest.displayName = 'proto.api.v0alpha.PlayDTMFRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.PlayDTMFReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.PlayDTMFReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.PlayDTMFReply.displayName = 'proto.api.v0alpha.PlayDTMFReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentMuteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentMuteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentMuteRequest.displayName = 'proto.api.v0alpha.AgentMuteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentMuteReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentMuteReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentMuteReply.displayName = 'proto.api.v0alpha.AgentMuteReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentUnmuteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentUnmuteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentUnmuteRequest.displayName = 'proto.api.v0alpha.AgentUnmuteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AgentUnmuteReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AgentUnmuteReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AgentUnmuteReply.displayName = 'proto.api.v0alpha.AgentUnmuteReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.StartSecureFormReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.StartSecureFormReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.StartSecureFormReq.displayName = 'proto.api.v0alpha.StartSecureFormReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.StartSecureFormRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.StartSecureFormRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.StartSecureFormRes.displayName = 'proto.api.v0alpha.StartSecureFormRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CollectSecureFormFieldReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CollectSecureFormFieldReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CollectSecureFormFieldReq.displayName = 'proto.api.v0alpha.CollectSecureFormFieldReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CollectSecureFormFieldRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CollectSecureFormFieldRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CollectSecureFormFieldRes.displayName = 'proto.api.v0alpha.CollectSecureFormFieldRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ResetSecureFormFieldReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ResetSecureFormFieldReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ResetSecureFormFieldReq.displayName = 'proto.api.v0alpha.ResetSecureFormFieldReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ResetSecureFormFieldRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ResetSecureFormFieldRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ResetSecureFormFieldRes.displayName = 'proto.api.v0alpha.ResetSecureFormFieldRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AcceptSecureFormFieldReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AcceptSecureFormFieldReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AcceptSecureFormFieldReq.displayName = 'proto.api.v0alpha.AcceptSecureFormFieldReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AcceptSecureFormFieldRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AcceptSecureFormFieldRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AcceptSecureFormFieldRes.displayName = 'proto.api.v0alpha.AcceptSecureFormFieldRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ProcessSecureFormReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ProcessSecureFormReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ProcessSecureFormReq.displayName = 'proto.api.v0alpha.ProcessSecureFormReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ProcessSecureFormRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ProcessSecureFormRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ProcessSecureFormRes.displayName = 'proto.api.v0alpha.ProcessSecureFormRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.FinishSecureFormHandlingReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.FinishSecureFormHandlingReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.FinishSecureFormHandlingReq.displayName = 'proto.api.v0alpha.FinishSecureFormHandlingReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.FinishSecureFormHandlingRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.FinishSecureFormHandlingRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.FinishSecureFormHandlingRes.displayName = 'proto.api.v0alpha.FinishSecureFormHandlingRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.PopulateWorkflowFieldsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.PopulateWorkflowFieldsReq.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.PopulateWorkflowFieldsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.PopulateWorkflowFieldsReq.displayName = 'proto.api.v0alpha.PopulateWorkflowFieldsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.PopulateWorkflowFieldsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.PopulateWorkflowFieldsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.PopulateWorkflowFieldsRes.displayName = 'proto.api.v0alpha.PopulateWorkflowFieldsRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ValidateFieldReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ValidateFieldReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ValidateFieldReq.displayName = 'proto.api.v0alpha.ValidateFieldReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ValidateFieldRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ValidateFieldRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ValidateFieldRes.displayName = 'proto.api.v0alpha.ValidateFieldRes';
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
proto.api.v0alpha.AgentGetStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentGetStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentGetStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentGetStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
performKeepAlive: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.AgentGetStatusRequest}
 */
proto.api.v0alpha.AgentGetStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentGetStatusRequest;
  return proto.api.v0alpha.AgentGetStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentGetStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentGetStatusRequest}
 */
proto.api.v0alpha.AgentGetStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPerformKeepAlive(value);
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
proto.api.v0alpha.AgentGetStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentGetStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentGetStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentGetStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPerformKeepAlive();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional int64 session_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.AgentGetStatusRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.AgentGetStatusRequest} returns this
 */
proto.api.v0alpha.AgentGetStatusRequest.prototype.setSessionSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool perform_keep_alive = 2;
 * @return {boolean}
 */
proto.api.v0alpha.AgentGetStatusRequest.prototype.getPerformKeepAlive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.AgentGetStatusRequest} returns this
 */
proto.api.v0alpha.AgentGetStatusRequest.prototype.setPerformKeepAlive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.AgentGetStatusReply.repeatedFields_ = [14];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.AgentGetStatusReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentGetStatusReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentGetStatusReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentGetStatusReply.toObject = function(includeInstance, msg) {
  var f, obj = {
status: jspb.Message.getFieldWithDefault(msg, 2, 0),
statusDesc: jspb.Message.getFieldWithDefault(msg, 3, 0),
paused: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
queue: jspb.Message.getFieldWithDefault(msg, 5, ""),
currentSessionId: jspb.Message.getFieldWithDefault(msg, 6, 0),
lastStatusChange: jspb.Message.getFieldWithDefault(msg, 7, 0),
monitoring: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
callsCount: jspb.Message.getFieldWithDefault(msg, 9, 0),
lastSipCode: jspb.Message.getFieldWithDefault(msg, 10, 0),
agentPeerIsLostCall: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
disabled: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
keepAliveSucceeded: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
transferMembersList: jspb.Message.toObjectList(msg.getTransferMembersList(),
    api_commons_acd_pb.TransferMember.toObject, includeInstance),
agentIsMuted: jspb.Message.getBooleanFieldWithDefault(msg, 15, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.AgentGetStatusReply}
 */
proto.api.v0alpha.AgentGetStatusReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentGetStatusReply;
  return proto.api.v0alpha.AgentGetStatusReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentGetStatusReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentGetStatusReply}
 */
proto.api.v0alpha.AgentGetStatusReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {!proto.api.commons.AgentStatus.Enum} */ (reader.readEnum());
      msg.setStatusDesc(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPaused(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setQueue(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCurrentSessionId(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastStatusChange(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMonitoring(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCallsCount(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastSipCode(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAgentPeerIsLostCall(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabled(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setKeepAliveSucceeded(value);
      break;
    case 14:
      var value = new api_commons_acd_pb.TransferMember;
      reader.readMessage(value,api_commons_acd_pb.TransferMember.deserializeBinaryFromReader);
      msg.addTransferMembers(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAgentIsMuted(value);
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
proto.api.v0alpha.AgentGetStatusReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentGetStatusReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentGetStatusReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentGetStatusReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getStatusDesc();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getPaused();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getQueue();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCurrentSessionId();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getLastStatusChange();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getMonitoring();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getCallsCount();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getLastSipCode();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getAgentPeerIsLostCall();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getDisabled();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getKeepAliveSucceeded();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getTransferMembersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      api_commons_acd_pb.TransferMember.serializeBinaryToWriter
    );
  }
  f = message.getAgentIsMuted();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
};


/**
 * optional int64 status = 2;
 * @return {number}
 */
proto.api.v0alpha.AgentGetStatusReply.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.AgentGetStatusReply} returns this
 */
proto.api.v0alpha.AgentGetStatusReply.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional api.commons.AgentStatus.Enum status_desc = 3;
 * @return {!proto.api.commons.AgentStatus.Enum}
 */
proto.api.v0alpha.AgentGetStatusReply.prototype.getStatusDesc = function() {
  return /** @type {!proto.api.commons.AgentStatus.Enum} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.AgentStatus.Enum} value
 * @return {!proto.api.v0alpha.AgentGetStatusReply} returns this
 */
proto.api.v0alpha.AgentGetStatusReply.prototype.setStatusDesc = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bool paused = 4;
 * @return {boolean}
 */
proto.api.v0alpha.AgentGetStatusReply.prototype.getPaused = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.AgentGetStatusReply} returns this
 */
proto.api.v0alpha.AgentGetStatusReply.prototype.setPaused = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string queue = 5;
 * @return {string}
 */
proto.api.v0alpha.AgentGetStatusReply.prototype.getQueue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.AgentGetStatusReply} returns this
 */
proto.api.v0alpha.AgentGetStatusReply.prototype.setQueue = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int64 current_session_id = 6;
 * @return {number}
 */
proto.api.v0alpha.AgentGetStatusReply.prototype.getCurrentSessionId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.AgentGetStatusReply} returns this
 */
proto.api.v0alpha.AgentGetStatusReply.prototype.setCurrentSessionId = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 last_status_change = 7;
 * @return {number}
 */
proto.api.v0alpha.AgentGetStatusReply.prototype.getLastStatusChange = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.AgentGetStatusReply} returns this
 */
proto.api.v0alpha.AgentGetStatusReply.prototype.setLastStatusChange = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional bool monitoring = 8;
 * @return {boolean}
 */
proto.api.v0alpha.AgentGetStatusReply.prototype.getMonitoring = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.AgentGetStatusReply} returns this
 */
proto.api.v0alpha.AgentGetStatusReply.prototype.setMonitoring = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional int64 calls_count = 9;
 * @return {number}
 */
proto.api.v0alpha.AgentGetStatusReply.prototype.getCallsCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.AgentGetStatusReply} returns this
 */
proto.api.v0alpha.AgentGetStatusReply.prototype.setCallsCount = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 last_sip_code = 10;
 * @return {number}
 */
proto.api.v0alpha.AgentGetStatusReply.prototype.getLastSipCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.AgentGetStatusReply} returns this
 */
proto.api.v0alpha.AgentGetStatusReply.prototype.setLastSipCode = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional bool agent_peer_is_lost_call = 11;
 * @return {boolean}
 */
proto.api.v0alpha.AgentGetStatusReply.prototype.getAgentPeerIsLostCall = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.AgentGetStatusReply} returns this
 */
proto.api.v0alpha.AgentGetStatusReply.prototype.setAgentPeerIsLostCall = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional bool disabled = 12;
 * @return {boolean}
 */
proto.api.v0alpha.AgentGetStatusReply.prototype.getDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.AgentGetStatusReply} returns this
 */
proto.api.v0alpha.AgentGetStatusReply.prototype.setDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool keep_alive_succeeded = 13;
 * @return {boolean}
 */
proto.api.v0alpha.AgentGetStatusReply.prototype.getKeepAliveSucceeded = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.AgentGetStatusReply} returns this
 */
proto.api.v0alpha.AgentGetStatusReply.prototype.setKeepAliveSucceeded = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * repeated api.commons.TransferMember transfer_members = 14;
 * @return {!Array<!proto.api.commons.TransferMember>}
 */
proto.api.v0alpha.AgentGetStatusReply.prototype.getTransferMembersList = function() {
  return /** @type{!Array<!proto.api.commons.TransferMember>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_acd_pb.TransferMember, 14));
};


/**
 * @param {!Array<!proto.api.commons.TransferMember>} value
 * @return {!proto.api.v0alpha.AgentGetStatusReply} returns this
*/
proto.api.v0alpha.AgentGetStatusReply.prototype.setTransferMembersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.api.commons.TransferMember=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.TransferMember}
 */
proto.api.v0alpha.AgentGetStatusReply.prototype.addTransferMembers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.api.commons.TransferMember, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.AgentGetStatusReply} returns this
 */
proto.api.v0alpha.AgentGetStatusReply.prototype.clearTransferMembersList = function() {
  return this.setTransferMembersList([]);
};


/**
 * optional bool agent_is_muted = 15;
 * @return {boolean}
 */
proto.api.v0alpha.AgentGetStatusReply.prototype.getAgentIsMuted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.AgentGetStatusReply} returns this
 */
proto.api.v0alpha.AgentGetStatusReply.prototype.setAgentIsMuted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
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
proto.api.v0alpha.AgentGetConnectedPartyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentGetConnectedPartyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentGetConnectedPartyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentGetConnectedPartyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
userId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.AgentGetConnectedPartyRequest}
 */
proto.api.v0alpha.AgentGetConnectedPartyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentGetConnectedPartyRequest;
  return proto.api.v0alpha.AgentGetConnectedPartyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentGetConnectedPartyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentGetConnectedPartyRequest}
 */
proto.api.v0alpha.AgentGetConnectedPartyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
      break;
    case 2:
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
proto.api.v0alpha.AgentGetConnectedPartyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentGetConnectedPartyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentGetConnectedPartyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentGetConnectedPartyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 session_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.AgentGetConnectedPartyRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.AgentGetConnectedPartyRequest} returns this
 */
proto.api.v0alpha.AgentGetConnectedPartyRequest.prototype.setSessionSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.api.v0alpha.AgentGetConnectedPartyRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.AgentGetConnectedPartyRequest} returns this
 */
proto.api.v0alpha.AgentGetConnectedPartyRequest.prototype.setUserId = function(value) {
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
proto.api.v0alpha.AgentGetConnectedPartyReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentGetConnectedPartyReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentGetConnectedPartyReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentGetConnectedPartyReply.toObject = function(includeInstance, msg) {
  var f, obj = {
callId: jspb.Message.getFieldWithDefault(msg, 2, 0),
callType: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.AgentGetConnectedPartyReply}
 */
proto.api.v0alpha.AgentGetConnectedPartyReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentGetConnectedPartyReply;
  return proto.api.v0alpha.AgentGetConnectedPartyReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentGetConnectedPartyReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentGetConnectedPartyReply}
 */
proto.api.v0alpha.AgentGetConnectedPartyReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCallId(value);
      break;
    case 3:
      var value = /** @type {!proto.api.commons.CallType.Enum} */ (reader.readEnum());
      msg.setCallType(value);
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
proto.api.v0alpha.AgentGetConnectedPartyReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentGetConnectedPartyReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentGetConnectedPartyReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentGetConnectedPartyReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCallId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getCallType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional int64 call_id = 2;
 * @return {number}
 */
proto.api.v0alpha.AgentGetConnectedPartyReply.prototype.getCallId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.AgentGetConnectedPartyReply} returns this
 */
proto.api.v0alpha.AgentGetConnectedPartyReply.prototype.setCallId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional api.commons.CallType.Enum call_type = 3;
 * @return {!proto.api.commons.CallType.Enum}
 */
proto.api.v0alpha.AgentGetConnectedPartyReply.prototype.getCallType = function() {
  return /** @type {!proto.api.commons.CallType.Enum} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.CallType.Enum} value
 * @return {!proto.api.v0alpha.AgentGetConnectedPartyReply} returns this
 */
proto.api.v0alpha.AgentGetConnectedPartyReply.prototype.setCallType = function(value) {
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
proto.api.v0alpha.ManagerAgentGetConnectedPartyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ManagerAgentGetConnectedPartyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ManagerAgentGetConnectedPartyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ManagerAgentGetConnectedPartyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
userId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ManagerAgentGetConnectedPartyRequest}
 */
proto.api.v0alpha.ManagerAgentGetConnectedPartyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ManagerAgentGetConnectedPartyRequest;
  return proto.api.v0alpha.ManagerAgentGetConnectedPartyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ManagerAgentGetConnectedPartyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ManagerAgentGetConnectedPartyRequest}
 */
proto.api.v0alpha.ManagerAgentGetConnectedPartyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
      break;
    case 2:
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
proto.api.v0alpha.ManagerAgentGetConnectedPartyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ManagerAgentGetConnectedPartyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ManagerAgentGetConnectedPartyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ManagerAgentGetConnectedPartyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 session_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.ManagerAgentGetConnectedPartyRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.ManagerAgentGetConnectedPartyRequest} returns this
 */
proto.api.v0alpha.ManagerAgentGetConnectedPartyRequest.prototype.setSessionSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.api.v0alpha.ManagerAgentGetConnectedPartyRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ManagerAgentGetConnectedPartyRequest} returns this
 */
proto.api.v0alpha.ManagerAgentGetConnectedPartyRequest.prototype.setUserId = function(value) {
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
proto.api.v0alpha.ManagerAgentGetConnectedPartyReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ManagerAgentGetConnectedPartyReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ManagerAgentGetConnectedPartyReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ManagerAgentGetConnectedPartyReply.toObject = function(includeInstance, msg) {
  var f, obj = {
callId: jspb.Message.getFieldWithDefault(msg, 2, 0),
callType: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ManagerAgentGetConnectedPartyReply}
 */
proto.api.v0alpha.ManagerAgentGetConnectedPartyReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ManagerAgentGetConnectedPartyReply;
  return proto.api.v0alpha.ManagerAgentGetConnectedPartyReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ManagerAgentGetConnectedPartyReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ManagerAgentGetConnectedPartyReply}
 */
proto.api.v0alpha.ManagerAgentGetConnectedPartyReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCallId(value);
      break;
    case 3:
      var value = /** @type {!proto.api.commons.CallType.Enum} */ (reader.readEnum());
      msg.setCallType(value);
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
proto.api.v0alpha.ManagerAgentGetConnectedPartyReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ManagerAgentGetConnectedPartyReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ManagerAgentGetConnectedPartyReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ManagerAgentGetConnectedPartyReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCallId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getCallType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional int64 call_id = 2;
 * @return {number}
 */
proto.api.v0alpha.ManagerAgentGetConnectedPartyReply.prototype.getCallId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.ManagerAgentGetConnectedPartyReply} returns this
 */
proto.api.v0alpha.ManagerAgentGetConnectedPartyReply.prototype.setCallId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional api.commons.CallType.Enum call_type = 3;
 * @return {!proto.api.commons.CallType.Enum}
 */
proto.api.v0alpha.ManagerAgentGetConnectedPartyReply.prototype.getCallType = function() {
  return /** @type {!proto.api.commons.CallType.Enum} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.CallType.Enum} value
 * @return {!proto.api.v0alpha.ManagerAgentGetConnectedPartyReply} returns this
 */
proto.api.v0alpha.ManagerAgentGetConnectedPartyReply.prototype.setCallType = function(value) {
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
proto.api.v0alpha.AgentIntercomRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentIntercomRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentIntercomRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentIntercomRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
targetAgentId: jspb.Message.getFieldWithDefault(msg, 3, 0),
sessionSid: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.AgentIntercomRequest}
 */
proto.api.v0alpha.AgentIntercomRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentIntercomRequest;
  return proto.api.v0alpha.AgentIntercomRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentIntercomRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentIntercomRequest}
 */
proto.api.v0alpha.AgentIntercomRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTargetAgentId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
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
proto.api.v0alpha.AgentIntercomRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentIntercomRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentIntercomRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentIntercomRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTargetAgentId();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional int64 target_agent_id = 3;
 * @return {number}
 */
proto.api.v0alpha.AgentIntercomRequest.prototype.getTargetAgentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.AgentIntercomRequest} returns this
 */
proto.api.v0alpha.AgentIntercomRequest.prototype.setTargetAgentId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 session_sid = 4;
 * @return {number}
 */
proto.api.v0alpha.AgentIntercomRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.AgentIntercomRequest} returns this
 */
proto.api.v0alpha.AgentIntercomRequest.prototype.setSessionSid = function(value) {
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
proto.api.v0alpha.AgentIntercomReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentIntercomReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentIntercomReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentIntercomReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.AgentIntercomReply}
 */
proto.api.v0alpha.AgentIntercomReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentIntercomReply;
  return proto.api.v0alpha.AgentIntercomReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentIntercomReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentIntercomReply}
 */
proto.api.v0alpha.AgentIntercomReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.AgentIntercomReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentIntercomReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentIntercomReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentIntercomReply.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.AgentIntercomAcceptRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentIntercomAcceptRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentIntercomAcceptRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentIntercomAcceptRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionSid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.AgentIntercomAcceptRequest}
 */
proto.api.v0alpha.AgentIntercomAcceptRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentIntercomAcceptRequest;
  return proto.api.v0alpha.AgentIntercomAcceptRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentIntercomAcceptRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentIntercomAcceptRequest}
 */
proto.api.v0alpha.AgentIntercomAcceptRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
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
proto.api.v0alpha.AgentIntercomAcceptRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentIntercomAcceptRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentIntercomAcceptRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentIntercomAcceptRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 session_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.AgentIntercomAcceptRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.AgentIntercomAcceptRequest} returns this
 */
proto.api.v0alpha.AgentIntercomAcceptRequest.prototype.setSessionSid = function(value) {
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
proto.api.v0alpha.AgentIntercomAcceptReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentIntercomAcceptReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentIntercomAcceptReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentIntercomAcceptReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.AgentIntercomAcceptReply}
 */
proto.api.v0alpha.AgentIntercomAcceptReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentIntercomAcceptReply;
  return proto.api.v0alpha.AgentIntercomAcceptReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentIntercomAcceptReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentIntercomAcceptReply}
 */
proto.api.v0alpha.AgentIntercomAcceptReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.AgentIntercomAcceptReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentIntercomAcceptReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentIntercomAcceptReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentIntercomAcceptReply.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.AgentIntercomRejectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentIntercomRejectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentIntercomRejectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentIntercomRejectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionSid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.AgentIntercomRejectRequest}
 */
proto.api.v0alpha.AgentIntercomRejectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentIntercomRejectRequest;
  return proto.api.v0alpha.AgentIntercomRejectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentIntercomRejectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentIntercomRejectRequest}
 */
proto.api.v0alpha.AgentIntercomRejectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
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
proto.api.v0alpha.AgentIntercomRejectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentIntercomRejectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentIntercomRejectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentIntercomRejectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 session_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.AgentIntercomRejectRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.AgentIntercomRejectRequest} returns this
 */
proto.api.v0alpha.AgentIntercomRejectRequest.prototype.setSessionSid = function(value) {
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
proto.api.v0alpha.AgentIntercomRejectReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentIntercomRejectReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentIntercomRejectReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentIntercomRejectReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.AgentIntercomRejectReply}
 */
proto.api.v0alpha.AgentIntercomRejectReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentIntercomRejectReply;
  return proto.api.v0alpha.AgentIntercomRejectReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentIntercomRejectReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentIntercomRejectReply}
 */
proto.api.v0alpha.AgentIntercomRejectReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.AgentIntercomRejectReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentIntercomRejectReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentIntercomRejectReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentIntercomRejectReply.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.AgentIntercomCancelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentIntercomCancelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentIntercomCancelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentIntercomCancelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionSid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.AgentIntercomCancelRequest}
 */
proto.api.v0alpha.AgentIntercomCancelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentIntercomCancelRequest;
  return proto.api.v0alpha.AgentIntercomCancelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentIntercomCancelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentIntercomCancelRequest}
 */
proto.api.v0alpha.AgentIntercomCancelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
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
proto.api.v0alpha.AgentIntercomCancelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentIntercomCancelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentIntercomCancelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentIntercomCancelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 session_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.AgentIntercomCancelRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.AgentIntercomCancelRequest} returns this
 */
proto.api.v0alpha.AgentIntercomCancelRequest.prototype.setSessionSid = function(value) {
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
proto.api.v0alpha.AgentIntercomCancelReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentIntercomCancelReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentIntercomCancelReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentIntercomCancelReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.AgentIntercomCancelReply}
 */
proto.api.v0alpha.AgentIntercomCancelReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentIntercomCancelReply;
  return proto.api.v0alpha.AgentIntercomCancelReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentIntercomCancelReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentIntercomCancelReply}
 */
proto.api.v0alpha.AgentIntercomCancelReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.AgentIntercomCancelReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentIntercomCancelReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentIntercomCancelReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentIntercomCancelReply.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.DialManualPrepareRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DialManualPrepareRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DialManualPrepareRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DialManualPrepareRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionSid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.DialManualPrepareRequest}
 */
proto.api.v0alpha.DialManualPrepareRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DialManualPrepareRequest;
  return proto.api.v0alpha.DialManualPrepareRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DialManualPrepareRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DialManualPrepareRequest}
 */
proto.api.v0alpha.DialManualPrepareRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
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
proto.api.v0alpha.DialManualPrepareRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DialManualPrepareRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DialManualPrepareRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DialManualPrepareRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 session_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.DialManualPrepareRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.DialManualPrepareRequest} returns this
 */
proto.api.v0alpha.DialManualPrepareRequest.prototype.setSessionSid = function(value) {
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
proto.api.v0alpha.DialManualPrepareReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DialManualPrepareReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DialManualPrepareReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DialManualPrepareReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.DialManualPrepareReply}
 */
proto.api.v0alpha.DialManualPrepareReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DialManualPrepareReply;
  return proto.api.v0alpha.DialManualPrepareReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DialManualPrepareReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DialManualPrepareReply}
 */
proto.api.v0alpha.DialManualPrepareReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.DialManualPrepareReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DialManualPrepareReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DialManualPrepareReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DialManualPrepareReply.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.DialManualCancelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DialManualCancelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DialManualCancelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DialManualCancelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionSid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.DialManualCancelRequest}
 */
proto.api.v0alpha.DialManualCancelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DialManualCancelRequest;
  return proto.api.v0alpha.DialManualCancelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DialManualCancelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DialManualCancelRequest}
 */
proto.api.v0alpha.DialManualCancelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
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
proto.api.v0alpha.DialManualCancelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DialManualCancelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DialManualCancelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DialManualCancelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 session_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.DialManualCancelRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.DialManualCancelRequest} returns this
 */
proto.api.v0alpha.DialManualCancelRequest.prototype.setSessionSid = function(value) {
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
proto.api.v0alpha.DialManualCancelReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DialManualCancelReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DialManualCancelReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DialManualCancelReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.DialManualCancelReply}
 */
proto.api.v0alpha.DialManualCancelReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DialManualCancelReply;
  return proto.api.v0alpha.DialManualCancelReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DialManualCancelReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DialManualCancelReply}
 */
proto.api.v0alpha.DialManualCancelReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.DialManualCancelReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DialManualCancelReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DialManualCancelReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DialManualCancelReply.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.DialPreviewPrepareRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DialPreviewPrepareRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DialPreviewPrepareRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DialPreviewPrepareRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionSid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.DialPreviewPrepareRequest}
 */
proto.api.v0alpha.DialPreviewPrepareRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DialPreviewPrepareRequest;
  return proto.api.v0alpha.DialPreviewPrepareRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DialPreviewPrepareRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DialPreviewPrepareRequest}
 */
proto.api.v0alpha.DialPreviewPrepareRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
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
proto.api.v0alpha.DialPreviewPrepareRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DialPreviewPrepareRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DialPreviewPrepareRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DialPreviewPrepareRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 session_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.DialPreviewPrepareRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.DialPreviewPrepareRequest} returns this
 */
proto.api.v0alpha.DialPreviewPrepareRequest.prototype.setSessionSid = function(value) {
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
proto.api.v0alpha.DialPreviewPrepareReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DialPreviewPrepareReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DialPreviewPrepareReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DialPreviewPrepareReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.DialPreviewPrepareReply}
 */
proto.api.v0alpha.DialPreviewPrepareReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DialPreviewPrepareReply;
  return proto.api.v0alpha.DialPreviewPrepareReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DialPreviewPrepareReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DialPreviewPrepareReply}
 */
proto.api.v0alpha.DialPreviewPrepareReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.DialPreviewPrepareReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DialPreviewPrepareReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DialPreviewPrepareReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DialPreviewPrepareReply.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.AgentPauseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentPauseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentPauseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentPauseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
reason: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.AgentPauseRequest}
 */
proto.api.v0alpha.AgentPauseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentPauseRequest;
  return proto.api.v0alpha.AgentPauseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentPauseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentPauseRequest}
 */
proto.api.v0alpha.AgentPauseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
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
proto.api.v0alpha.AgentPauseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentPauseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentPauseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentPauseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 session_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.AgentPauseRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.AgentPauseRequest} returns this
 */
proto.api.v0alpha.AgentPauseRequest.prototype.setSessionSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string reason = 2;
 * @return {string}
 */
proto.api.v0alpha.AgentPauseRequest.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.AgentPauseRequest} returns this
 */
proto.api.v0alpha.AgentPauseRequest.prototype.setReason = function(value) {
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
proto.api.v0alpha.AgentPauseReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentPauseReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentPauseReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentPauseReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.AgentPauseReply}
 */
proto.api.v0alpha.AgentPauseReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentPauseReply;
  return proto.api.v0alpha.AgentPauseReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentPauseReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentPauseReply}
 */
proto.api.v0alpha.AgentPauseReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.AgentPauseReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentPauseReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentPauseReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentPauseReply.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.AgentSetReadyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentSetReadyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentSetReadyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentSetReadyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionSid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.AgentSetReadyRequest}
 */
proto.api.v0alpha.AgentSetReadyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentSetReadyRequest;
  return proto.api.v0alpha.AgentSetReadyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentSetReadyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentSetReadyRequest}
 */
proto.api.v0alpha.AgentSetReadyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
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
proto.api.v0alpha.AgentSetReadyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentSetReadyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentSetReadyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentSetReadyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 session_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.AgentSetReadyRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.AgentSetReadyRequest} returns this
 */
proto.api.v0alpha.AgentSetReadyRequest.prototype.setSessionSid = function(value) {
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
proto.api.v0alpha.AgentSetReadyReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentSetReadyReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentSetReadyReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentSetReadyReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.AgentSetReadyReply}
 */
proto.api.v0alpha.AgentSetReadyReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentSetReadyReply;
  return proto.api.v0alpha.AgentSetReadyReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentSetReadyReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentSetReadyReply}
 */
proto.api.v0alpha.AgentSetReadyReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.AgentSetReadyReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentSetReadyReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentSetReadyReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentSetReadyReply.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.AgentGUIBusyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentGUIBusyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentGUIBusyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentGUIBusyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionSid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.AgentGUIBusyRequest}
 */
proto.api.v0alpha.AgentGUIBusyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentGUIBusyRequest;
  return proto.api.v0alpha.AgentGUIBusyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentGUIBusyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentGUIBusyRequest}
 */
proto.api.v0alpha.AgentGUIBusyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
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
proto.api.v0alpha.AgentGUIBusyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentGUIBusyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentGUIBusyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentGUIBusyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 session_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.AgentGUIBusyRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.AgentGUIBusyRequest} returns this
 */
proto.api.v0alpha.AgentGUIBusyRequest.prototype.setSessionSid = function(value) {
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
proto.api.v0alpha.AgentGUIBusyReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentGUIBusyReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentGUIBusyReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentGUIBusyReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.AgentGUIBusyReply}
 */
proto.api.v0alpha.AgentGUIBusyReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentGUIBusyReply;
  return proto.api.v0alpha.AgentGUIBusyReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentGUIBusyReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentGUIBusyReply}
 */
proto.api.v0alpha.AgentGUIBusyReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.AgentGUIBusyReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentGUIBusyReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentGUIBusyReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentGUIBusyReply.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.AgentDisconnectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentDisconnectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentDisconnectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentDisconnectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
reason: jspb.Message.getFieldWithDefault(msg, 1, ""),
sessionSid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.AgentDisconnectRequest}
 */
proto.api.v0alpha.AgentDisconnectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentDisconnectRequest;
  return proto.api.v0alpha.AgentDisconnectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentDisconnectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentDisconnectRequest}
 */
proto.api.v0alpha.AgentDisconnectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
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
proto.api.v0alpha.AgentDisconnectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentDisconnectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentDisconnectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentDisconnectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string reason = 1;
 * @return {string}
 */
proto.api.v0alpha.AgentDisconnectRequest.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.AgentDisconnectRequest} returns this
 */
proto.api.v0alpha.AgentDisconnectRequest.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 session_sid = 2;
 * @return {number}
 */
proto.api.v0alpha.AgentDisconnectRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.AgentDisconnectRequest} returns this
 */
proto.api.v0alpha.AgentDisconnectRequest.prototype.setSessionSid = function(value) {
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
proto.api.v0alpha.AgentDisconnectReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentDisconnectReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentDisconnectReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentDisconnectReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.AgentDisconnectReply}
 */
proto.api.v0alpha.AgentDisconnectReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentDisconnectReply;
  return proto.api.v0alpha.AgentDisconnectReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentDisconnectReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentDisconnectReply}
 */
proto.api.v0alpha.AgentDisconnectReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.AgentDisconnectReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentDisconnectReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentDisconnectReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentDisconnectReply.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.AgentSessionEventReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentSessionEventReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentSessionEventReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentSessionEventReq.toObject = function(includeInstance, msg) {
  var f, obj = {
agentSessionSid: jspb.Message.getFieldWithDefault(msg, 3, 0),
actionKey: jspb.Message.getFieldWithDefault(msg, 10, 0),
actionValue: jspb.Message.getFieldWithDefault(msg, 11, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.AgentSessionEventReq}
 */
proto.api.v0alpha.AgentSessionEventReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentSessionEventReq;
  return proto.api.v0alpha.AgentSessionEventReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentSessionEventReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentSessionEventReq}
 */
proto.api.v0alpha.AgentSessionEventReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAgentSessionSid(value);
      break;
    case 10:
      var value = /** @type {!proto.api.commons.AgentSessionLogActionKey.Enum} */ (reader.readEnum());
      msg.setActionKey(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setActionValue(value);
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
proto.api.v0alpha.AgentSessionEventReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentSessionEventReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentSessionEventReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentSessionEventReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getActionKey();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getActionValue();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional int64 agent_session_sid = 3;
 * @return {number}
 */
proto.api.v0alpha.AgentSessionEventReq.prototype.getAgentSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.AgentSessionEventReq} returns this
 */
proto.api.v0alpha.AgentSessionEventReq.prototype.setAgentSessionSid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional api.commons.AgentSessionLogActionKey.Enum action_key = 10;
 * @return {!proto.api.commons.AgentSessionLogActionKey.Enum}
 */
proto.api.v0alpha.AgentSessionEventReq.prototype.getActionKey = function() {
  return /** @type {!proto.api.commons.AgentSessionLogActionKey.Enum} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.api.commons.AgentSessionLogActionKey.Enum} value
 * @return {!proto.api.v0alpha.AgentSessionEventReq} returns this
 */
proto.api.v0alpha.AgentSessionEventReq.prototype.setActionKey = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional string action_value = 11;
 * @return {string}
 */
proto.api.v0alpha.AgentSessionEventReq.prototype.getActionValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.AgentSessionEventReq} returns this
 */
proto.api.v0alpha.AgentSessionEventReq.prototype.setActionValue = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
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
proto.api.v0alpha.AgentSessionEventRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentSessionEventRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentSessionEventRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentSessionEventRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.AgentSessionEventRes}
 */
proto.api.v0alpha.AgentSessionEventRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentSessionEventRes;
  return proto.api.v0alpha.AgentSessionEventRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentSessionEventRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentSessionEventRes}
 */
proto.api.v0alpha.AgentSessionEventRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.AgentSessionEventRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentSessionEventRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentSessionEventRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentSessionEventRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.CallerRequeueRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CallerRequeueRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CallerRequeueRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CallerRequeueRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
newConfigFolder: jspb.Message.getFieldWithDefault(msg, 3, ""),
skillsMap: (f = msg.getSkillsMap()) ? f.toObject(includeInstance, undefined) : [],
replaceSkills: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
replaceConfig: jspb.Message.getFieldWithDefault(msg, 6, 0),
sessionSid: jspb.Message.getFieldWithDefault(msg, 7, 0),
voicemailBox: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CallerRequeueRequest}
 */
proto.api.v0alpha.CallerRequeueRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CallerRequeueRequest;
  return proto.api.v0alpha.CallerRequeueRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CallerRequeueRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CallerRequeueRequest}
 */
proto.api.v0alpha.CallerRequeueRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewConfigFolder(value);
      break;
    case 4:
      var value = msg.getSkillsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBool, null, "", false);
         });
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReplaceSkills(value);
      break;
    case 6:
      var value = /** @type {!proto.api.commons.ReplaceConfig.Enum} */ (reader.readEnum());
      msg.setReplaceConfig(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setVoicemailBox(value);
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
proto.api.v0alpha.CallerRequeueRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CallerRequeueRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CallerRequeueRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CallerRequeueRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNewConfigFolder();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSkillsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBool);
  }
  f = message.getReplaceSkills();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getReplaceConfig();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getVoicemailBox();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string new_config_folder = 3;
 * @return {string}
 */
proto.api.v0alpha.CallerRequeueRequest.prototype.getNewConfigFolder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CallerRequeueRequest} returns this
 */
proto.api.v0alpha.CallerRequeueRequest.prototype.setNewConfigFolder = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, bool> skills = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,boolean>}
 */
proto.api.v0alpha.CallerRequeueRequest.prototype.getSkillsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,boolean>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v0alpha.CallerRequeueRequest} returns this
 */
proto.api.v0alpha.CallerRequeueRequest.prototype.clearSkillsMap = function() {
  this.getSkillsMap().clear();
  return this;
};


/**
 * optional bool replace_skills = 5;
 * @return {boolean}
 */
proto.api.v0alpha.CallerRequeueRequest.prototype.getReplaceSkills = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.CallerRequeueRequest} returns this
 */
proto.api.v0alpha.CallerRequeueRequest.prototype.setReplaceSkills = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional api.commons.ReplaceConfig.Enum replace_config = 6;
 * @return {!proto.api.commons.ReplaceConfig.Enum}
 */
proto.api.v0alpha.CallerRequeueRequest.prototype.getReplaceConfig = function() {
  return /** @type {!proto.api.commons.ReplaceConfig.Enum} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.api.commons.ReplaceConfig.Enum} value
 * @return {!proto.api.v0alpha.CallerRequeueRequest} returns this
 */
proto.api.v0alpha.CallerRequeueRequest.prototype.setReplaceConfig = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional int64 session_sid = 7;
 * @return {number}
 */
proto.api.v0alpha.CallerRequeueRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.CallerRequeueRequest} returns this
 */
proto.api.v0alpha.CallerRequeueRequest.prototype.setSessionSid = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string voicemail_box = 8;
 * @return {string}
 */
proto.api.v0alpha.CallerRequeueRequest.prototype.getVoicemailBox = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CallerRequeueRequest} returns this
 */
proto.api.v0alpha.CallerRequeueRequest.prototype.setVoicemailBox = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
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
proto.api.v0alpha.CallerRequeueReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CallerRequeueReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CallerRequeueReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CallerRequeueReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.CallerRequeueReply}
 */
proto.api.v0alpha.CallerRequeueReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CallerRequeueReply;
  return proto.api.v0alpha.CallerRequeueReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CallerRequeueReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CallerRequeueReply}
 */
proto.api.v0alpha.CallerRequeueReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.CallerRequeueReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CallerRequeueReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CallerRequeueReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CallerRequeueReply.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.TransferWarmToAgentCancelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.TransferWarmToAgentCancelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.TransferWarmToAgentCancelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.TransferWarmToAgentCancelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionSid: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.TransferWarmToAgentCancelRequest}
 */
proto.api.v0alpha.TransferWarmToAgentCancelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.TransferWarmToAgentCancelRequest;
  return proto.api.v0alpha.TransferWarmToAgentCancelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.TransferWarmToAgentCancelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.TransferWarmToAgentCancelRequest}
 */
proto.api.v0alpha.TransferWarmToAgentCancelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
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
proto.api.v0alpha.TransferWarmToAgentCancelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.TransferWarmToAgentCancelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.TransferWarmToAgentCancelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.TransferWarmToAgentCancelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional int64 session_sid = 4;
 * @return {number}
 */
proto.api.v0alpha.TransferWarmToAgentCancelRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.TransferWarmToAgentCancelRequest} returns this
 */
proto.api.v0alpha.TransferWarmToAgentCancelRequest.prototype.setSessionSid = function(value) {
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
proto.api.v0alpha.TransferWarmToAgentCancelReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.TransferWarmToAgentCancelReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.TransferWarmToAgentCancelReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.TransferWarmToAgentCancelReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.TransferWarmToAgentCancelReply}
 */
proto.api.v0alpha.TransferWarmToAgentCancelReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.TransferWarmToAgentCancelReply;
  return proto.api.v0alpha.TransferWarmToAgentCancelReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.TransferWarmToAgentCancelReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.TransferWarmToAgentCancelReply}
 */
proto.api.v0alpha.TransferWarmToAgentCancelReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.TransferWarmToAgentCancelReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.TransferWarmToAgentCancelReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.TransferWarmToAgentCancelReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.TransferWarmToAgentCancelReply.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.TransferWarmToOutboundCancelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.TransferWarmToOutboundCancelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.TransferWarmToOutboundCancelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.TransferWarmToOutboundCancelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionSid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.TransferWarmToOutboundCancelRequest}
 */
proto.api.v0alpha.TransferWarmToOutboundCancelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.TransferWarmToOutboundCancelRequest;
  return proto.api.v0alpha.TransferWarmToOutboundCancelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.TransferWarmToOutboundCancelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.TransferWarmToOutboundCancelRequest}
 */
proto.api.v0alpha.TransferWarmToOutboundCancelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
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
proto.api.v0alpha.TransferWarmToOutboundCancelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.TransferWarmToOutboundCancelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.TransferWarmToOutboundCancelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.TransferWarmToOutboundCancelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 session_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.TransferWarmToOutboundCancelRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.TransferWarmToOutboundCancelRequest} returns this
 */
proto.api.v0alpha.TransferWarmToOutboundCancelRequest.prototype.setSessionSid = function(value) {
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
proto.api.v0alpha.TransferWarmToOutboundCancelReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.TransferWarmToOutboundCancelReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.TransferWarmToOutboundCancelReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.TransferWarmToOutboundCancelReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.TransferWarmToOutboundCancelReply}
 */
proto.api.v0alpha.TransferWarmToOutboundCancelReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.TransferWarmToOutboundCancelReply;
  return proto.api.v0alpha.TransferWarmToOutboundCancelReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.TransferWarmToOutboundCancelReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.TransferWarmToOutboundCancelReply}
 */
proto.api.v0alpha.TransferWarmToOutboundCancelReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.TransferWarmToOutboundCancelReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.TransferWarmToOutboundCancelReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.TransferWarmToOutboundCancelReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.TransferWarmToOutboundCancelReply.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.TransferWarmToAgentApproveRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.TransferWarmToAgentApproveRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.TransferWarmToAgentApproveRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.TransferWarmToAgentApproveRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionSid: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.TransferWarmToAgentApproveRequest}
 */
proto.api.v0alpha.TransferWarmToAgentApproveRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.TransferWarmToAgentApproveRequest;
  return proto.api.v0alpha.TransferWarmToAgentApproveRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.TransferWarmToAgentApproveRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.TransferWarmToAgentApproveRequest}
 */
proto.api.v0alpha.TransferWarmToAgentApproveRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
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
proto.api.v0alpha.TransferWarmToAgentApproveRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.TransferWarmToAgentApproveRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.TransferWarmToAgentApproveRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.TransferWarmToAgentApproveRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional int64 session_sid = 4;
 * @return {number}
 */
proto.api.v0alpha.TransferWarmToAgentApproveRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.TransferWarmToAgentApproveRequest} returns this
 */
proto.api.v0alpha.TransferWarmToAgentApproveRequest.prototype.setSessionSid = function(value) {
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
proto.api.v0alpha.TransferWarmToAgentApproveReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.TransferWarmToAgentApproveReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.TransferWarmToAgentApproveReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.TransferWarmToAgentApproveReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.TransferWarmToAgentApproveReply}
 */
proto.api.v0alpha.TransferWarmToAgentApproveReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.TransferWarmToAgentApproveReply;
  return proto.api.v0alpha.TransferWarmToAgentApproveReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.TransferWarmToAgentApproveReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.TransferWarmToAgentApproveReply}
 */
proto.api.v0alpha.TransferWarmToAgentApproveReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.TransferWarmToAgentApproveReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.TransferWarmToAgentApproveReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.TransferWarmToAgentApproveReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.TransferWarmToAgentApproveReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.TransferWarmToOutboundApproveRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.TransferWarmToOutboundApproveRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.TransferWarmToOutboundApproveRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.TransferWarmToOutboundApproveRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.TransferWarmToOutboundApproveRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
memberIdentifiersList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.TransferWarmToOutboundApproveRequest}
 */
proto.api.v0alpha.TransferWarmToOutboundApproveRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.TransferWarmToOutboundApproveRequest;
  return proto.api.v0alpha.TransferWarmToOutboundApproveRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.TransferWarmToOutboundApproveRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.TransferWarmToOutboundApproveRequest}
 */
proto.api.v0alpha.TransferWarmToOutboundApproveRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addMemberIdentifiers(value);
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
proto.api.v0alpha.TransferWarmToOutboundApproveRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.TransferWarmToOutboundApproveRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.TransferWarmToOutboundApproveRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.TransferWarmToOutboundApproveRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getMemberIdentifiersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional int64 session_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.TransferWarmToOutboundApproveRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.TransferWarmToOutboundApproveRequest} returns this
 */
proto.api.v0alpha.TransferWarmToOutboundApproveRequest.prototype.setSessionSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated string member_identifiers = 2;
 * @return {!Array<string>}
 */
proto.api.v0alpha.TransferWarmToOutboundApproveRequest.prototype.getMemberIdentifiersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v0alpha.TransferWarmToOutboundApproveRequest} returns this
 */
proto.api.v0alpha.TransferWarmToOutboundApproveRequest.prototype.setMemberIdentifiersList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.TransferWarmToOutboundApproveRequest} returns this
 */
proto.api.v0alpha.TransferWarmToOutboundApproveRequest.prototype.addMemberIdentifiers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.TransferWarmToOutboundApproveRequest} returns this
 */
proto.api.v0alpha.TransferWarmToOutboundApproveRequest.prototype.clearMemberIdentifiersList = function() {
  return this.setMemberIdentifiersList([]);
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
proto.api.v0alpha.TransferWarmToOutboundApproveReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.TransferWarmToOutboundApproveReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.TransferWarmToOutboundApproveReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.TransferWarmToOutboundApproveReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.TransferWarmToOutboundApproveReply}
 */
proto.api.v0alpha.TransferWarmToOutboundApproveReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.TransferWarmToOutboundApproveReply;
  return proto.api.v0alpha.TransferWarmToOutboundApproveReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.TransferWarmToOutboundApproveReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.TransferWarmToOutboundApproveReply}
 */
proto.api.v0alpha.TransferWarmToOutboundApproveReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.TransferWarmToOutboundApproveReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.TransferWarmToOutboundApproveReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.TransferWarmToOutboundApproveReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.TransferWarmToOutboundApproveReply.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.CallerSendToVoicemailRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CallerSendToVoicemailRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CallerSendToVoicemailRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CallerSendToVoicemailRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
mailbox: jspb.Message.getFieldWithDefault(msg, 3, ""),
sessionSid: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CallerSendToVoicemailRequest}
 */
proto.api.v0alpha.CallerSendToVoicemailRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CallerSendToVoicemailRequest;
  return proto.api.v0alpha.CallerSendToVoicemailRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CallerSendToVoicemailRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CallerSendToVoicemailRequest}
 */
proto.api.v0alpha.CallerSendToVoicemailRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMailbox(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
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
proto.api.v0alpha.CallerSendToVoicemailRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CallerSendToVoicemailRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CallerSendToVoicemailRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CallerSendToVoicemailRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMailbox();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional string mailbox = 3;
 * @return {string}
 */
proto.api.v0alpha.CallerSendToVoicemailRequest.prototype.getMailbox = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CallerSendToVoicemailRequest} returns this
 */
proto.api.v0alpha.CallerSendToVoicemailRequest.prototype.setMailbox = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 session_sid = 4;
 * @return {number}
 */
proto.api.v0alpha.CallerSendToVoicemailRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.CallerSendToVoicemailRequest} returns this
 */
proto.api.v0alpha.CallerSendToVoicemailRequest.prototype.setSessionSid = function(value) {
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
proto.api.v0alpha.CallerSendToVoicemailReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CallerSendToVoicemailReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CallerSendToVoicemailReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CallerSendToVoicemailReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.CallerSendToVoicemailReply}
 */
proto.api.v0alpha.CallerSendToVoicemailReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CallerSendToVoicemailReply;
  return proto.api.v0alpha.CallerSendToVoicemailReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CallerSendToVoicemailReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CallerSendToVoicemailReply}
 */
proto.api.v0alpha.CallerSendToVoicemailReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.CallerSendToVoicemailReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CallerSendToVoicemailReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CallerSendToVoicemailReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CallerSendToVoicemailReply.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.AgentInviteTransferCallerToConferenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentInviteTransferCallerToConferenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentInviteTransferCallerToConferenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentInviteTransferCallerToConferenceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionSid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.AgentInviteTransferCallerToConferenceRequest}
 */
proto.api.v0alpha.AgentInviteTransferCallerToConferenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentInviteTransferCallerToConferenceRequest;
  return proto.api.v0alpha.AgentInviteTransferCallerToConferenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentInviteTransferCallerToConferenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentInviteTransferCallerToConferenceRequest}
 */
proto.api.v0alpha.AgentInviteTransferCallerToConferenceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
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
proto.api.v0alpha.AgentInviteTransferCallerToConferenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentInviteTransferCallerToConferenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentInviteTransferCallerToConferenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentInviteTransferCallerToConferenceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 session_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.AgentInviteTransferCallerToConferenceRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.AgentInviteTransferCallerToConferenceRequest} returns this
 */
proto.api.v0alpha.AgentInviteTransferCallerToConferenceRequest.prototype.setSessionSid = function(value) {
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
proto.api.v0alpha.AgentInviteTransferCallerToConferenceReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentInviteTransferCallerToConferenceReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentInviteTransferCallerToConferenceReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentInviteTransferCallerToConferenceReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.AgentInviteTransferCallerToConferenceReply}
 */
proto.api.v0alpha.AgentInviteTransferCallerToConferenceReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentInviteTransferCallerToConferenceReply;
  return proto.api.v0alpha.AgentInviteTransferCallerToConferenceReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentInviteTransferCallerToConferenceReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentInviteTransferCallerToConferenceReply}
 */
proto.api.v0alpha.AgentInviteTransferCallerToConferenceReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.AgentInviteTransferCallerToConferenceReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentInviteTransferCallerToConferenceReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentInviteTransferCallerToConferenceReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentInviteTransferCallerToConferenceReply.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.AgentMonitorCallsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentMonitorCallsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentMonitorCallsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentMonitorCallsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
monitor: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
sessionSid: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.AgentMonitorCallsRequest}
 */
proto.api.v0alpha.AgentMonitorCallsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentMonitorCallsRequest;
  return proto.api.v0alpha.AgentMonitorCallsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentMonitorCallsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentMonitorCallsRequest}
 */
proto.api.v0alpha.AgentMonitorCallsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMonitor(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
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
proto.api.v0alpha.AgentMonitorCallsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentMonitorCallsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentMonitorCallsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentMonitorCallsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMonitor();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional bool monitor = 3;
 * @return {boolean}
 */
proto.api.v0alpha.AgentMonitorCallsRequest.prototype.getMonitor = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.AgentMonitorCallsRequest} returns this
 */
proto.api.v0alpha.AgentMonitorCallsRequest.prototype.setMonitor = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional int64 session_sid = 4;
 * @return {number}
 */
proto.api.v0alpha.AgentMonitorCallsRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.AgentMonitorCallsRequest} returns this
 */
proto.api.v0alpha.AgentMonitorCallsRequest.prototype.setSessionSid = function(value) {
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
proto.api.v0alpha.AgentMonitorCallsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentMonitorCallsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentMonitorCallsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentMonitorCallsReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.AgentMonitorCallsReply}
 */
proto.api.v0alpha.AgentMonitorCallsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentMonitorCallsReply;
  return proto.api.v0alpha.AgentMonitorCallsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentMonitorCallsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentMonitorCallsReply}
 */
proto.api.v0alpha.AgentMonitorCallsReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.AgentMonitorCallsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentMonitorCallsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentMonitorCallsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentMonitorCallsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.TransferColdToOutboundRequest.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.TransferColdToOutboundRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.TransferColdToOutboundRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.TransferColdToOutboundRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.TransferColdToOutboundRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
callerId: jspb.Message.getFieldWithDefault(msg, 3, ""),
destination: jspb.Message.getFieldWithDefault(msg, 4, ""),
reservedCarriersList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
sessionSid: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.TransferColdToOutboundRequest}
 */
proto.api.v0alpha.TransferColdToOutboundRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.TransferColdToOutboundRequest;
  return proto.api.v0alpha.TransferColdToOutboundRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.TransferColdToOutboundRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.TransferColdToOutboundRequest}
 */
proto.api.v0alpha.TransferColdToOutboundRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCallerId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestination(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addReservedCarriers(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
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
proto.api.v0alpha.TransferColdToOutboundRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.TransferColdToOutboundRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.TransferColdToOutboundRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.TransferColdToOutboundRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCallerId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDestination();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getReservedCarriersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional string caller_id = 3;
 * @return {string}
 */
proto.api.v0alpha.TransferColdToOutboundRequest.prototype.getCallerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.TransferColdToOutboundRequest} returns this
 */
proto.api.v0alpha.TransferColdToOutboundRequest.prototype.setCallerId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string destination = 4;
 * @return {string}
 */
proto.api.v0alpha.TransferColdToOutboundRequest.prototype.getDestination = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.TransferColdToOutboundRequest} returns this
 */
proto.api.v0alpha.TransferColdToOutboundRequest.prototype.setDestination = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated string reserved_carriers = 5;
 * @return {!Array<string>}
 */
proto.api.v0alpha.TransferColdToOutboundRequest.prototype.getReservedCarriersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v0alpha.TransferColdToOutboundRequest} returns this
 */
proto.api.v0alpha.TransferColdToOutboundRequest.prototype.setReservedCarriersList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.TransferColdToOutboundRequest} returns this
 */
proto.api.v0alpha.TransferColdToOutboundRequest.prototype.addReservedCarriers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.TransferColdToOutboundRequest} returns this
 */
proto.api.v0alpha.TransferColdToOutboundRequest.prototype.clearReservedCarriersList = function() {
  return this.setReservedCarriersList([]);
};


/**
 * optional int64 session_sid = 6;
 * @return {number}
 */
proto.api.v0alpha.TransferColdToOutboundRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.TransferColdToOutboundRequest} returns this
 */
proto.api.v0alpha.TransferColdToOutboundRequest.prototype.setSessionSid = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
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
proto.api.v0alpha.TransferColdToOutboundReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.TransferColdToOutboundReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.TransferColdToOutboundReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.TransferColdToOutboundReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.TransferColdToOutboundReply}
 */
proto.api.v0alpha.TransferColdToOutboundReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.TransferColdToOutboundReply;
  return proto.api.v0alpha.TransferColdToOutboundReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.TransferColdToOutboundReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.TransferColdToOutboundReply}
 */
proto.api.v0alpha.TransferColdToOutboundReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.TransferColdToOutboundReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.TransferColdToOutboundReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.TransferColdToOutboundReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.TransferColdToOutboundReply.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.TransferColdToAgentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.TransferColdToAgentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.TransferColdToAgentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.TransferColdToAgentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
destinationAgentId: jspb.Message.getFieldWithDefault(msg, 3, 0),
sessionSid: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.TransferColdToAgentRequest}
 */
proto.api.v0alpha.TransferColdToAgentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.TransferColdToAgentRequest;
  return proto.api.v0alpha.TransferColdToAgentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.TransferColdToAgentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.TransferColdToAgentRequest}
 */
proto.api.v0alpha.TransferColdToAgentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDestinationAgentId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
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
proto.api.v0alpha.TransferColdToAgentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.TransferColdToAgentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.TransferColdToAgentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.TransferColdToAgentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDestinationAgentId();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional int64 destination_agent_id = 3;
 * @return {number}
 */
proto.api.v0alpha.TransferColdToAgentRequest.prototype.getDestinationAgentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.TransferColdToAgentRequest} returns this
 */
proto.api.v0alpha.TransferColdToAgentRequest.prototype.setDestinationAgentId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 session_sid = 4;
 * @return {number}
 */
proto.api.v0alpha.TransferColdToAgentRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.TransferColdToAgentRequest} returns this
 */
proto.api.v0alpha.TransferColdToAgentRequest.prototype.setSessionSid = function(value) {
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
proto.api.v0alpha.TransferColdToAgentReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.TransferColdToAgentReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.TransferColdToAgentReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.TransferColdToAgentReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.TransferColdToAgentReply}
 */
proto.api.v0alpha.TransferColdToAgentReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.TransferColdToAgentReply;
  return proto.api.v0alpha.TransferColdToAgentReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.TransferColdToAgentReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.TransferColdToAgentReply}
 */
proto.api.v0alpha.TransferColdToAgentReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.TransferColdToAgentReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.TransferColdToAgentReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.TransferColdToAgentReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.TransferColdToAgentReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.TransferWarmToOutboundStartRequest.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.TransferWarmToOutboundStartRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.TransferWarmToOutboundStartRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.TransferWarmToOutboundStartRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.TransferWarmToOutboundStartRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
callerId: jspb.Message.getFieldWithDefault(msg, 3, ""),
destination: jspb.Message.getFieldWithDefault(msg, 4, ""),
reservedCarriersList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
callerHold: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
sessionSid: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.TransferWarmToOutboundStartRequest}
 */
proto.api.v0alpha.TransferWarmToOutboundStartRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.TransferWarmToOutboundStartRequest;
  return proto.api.v0alpha.TransferWarmToOutboundStartRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.TransferWarmToOutboundStartRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.TransferWarmToOutboundStartRequest}
 */
proto.api.v0alpha.TransferWarmToOutboundStartRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCallerId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestination(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addReservedCarriers(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCallerHold(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
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
proto.api.v0alpha.TransferWarmToOutboundStartRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.TransferWarmToOutboundStartRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.TransferWarmToOutboundStartRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.TransferWarmToOutboundStartRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCallerId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDestination();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getReservedCarriersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getCallerHold();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
};


/**
 * optional string caller_id = 3;
 * @return {string}
 */
proto.api.v0alpha.TransferWarmToOutboundStartRequest.prototype.getCallerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.TransferWarmToOutboundStartRequest} returns this
 */
proto.api.v0alpha.TransferWarmToOutboundStartRequest.prototype.setCallerId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string destination = 4;
 * @return {string}
 */
proto.api.v0alpha.TransferWarmToOutboundStartRequest.prototype.getDestination = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.TransferWarmToOutboundStartRequest} returns this
 */
proto.api.v0alpha.TransferWarmToOutboundStartRequest.prototype.setDestination = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated string reserved_carriers = 5;
 * @return {!Array<string>}
 */
proto.api.v0alpha.TransferWarmToOutboundStartRequest.prototype.getReservedCarriersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v0alpha.TransferWarmToOutboundStartRequest} returns this
 */
proto.api.v0alpha.TransferWarmToOutboundStartRequest.prototype.setReservedCarriersList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.TransferWarmToOutboundStartRequest} returns this
 */
proto.api.v0alpha.TransferWarmToOutboundStartRequest.prototype.addReservedCarriers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.TransferWarmToOutboundStartRequest} returns this
 */
proto.api.v0alpha.TransferWarmToOutboundStartRequest.prototype.clearReservedCarriersList = function() {
  return this.setReservedCarriersList([]);
};


/**
 * optional bool caller_hold = 6;
 * @return {boolean}
 */
proto.api.v0alpha.TransferWarmToOutboundStartRequest.prototype.getCallerHold = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.TransferWarmToOutboundStartRequest} returns this
 */
proto.api.v0alpha.TransferWarmToOutboundStartRequest.prototype.setCallerHold = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional int64 session_sid = 7;
 * @return {number}
 */
proto.api.v0alpha.TransferWarmToOutboundStartRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.TransferWarmToOutboundStartRequest} returns this
 */
proto.api.v0alpha.TransferWarmToOutboundStartRequest.prototype.setSessionSid = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
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
proto.api.v0alpha.TransferWarmToOutboundStartReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.TransferWarmToOutboundStartReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.TransferWarmToOutboundStartReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.TransferWarmToOutboundStartReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.TransferWarmToOutboundStartReply}
 */
proto.api.v0alpha.TransferWarmToOutboundStartReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.TransferWarmToOutboundStartReply;
  return proto.api.v0alpha.TransferWarmToOutboundStartReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.TransferWarmToOutboundStartReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.TransferWarmToOutboundStartReply}
 */
proto.api.v0alpha.TransferWarmToOutboundStartReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.TransferWarmToOutboundStartReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.TransferWarmToOutboundStartReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.TransferWarmToOutboundStartReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.TransferWarmToOutboundStartReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
callerId: jspb.Message.getFieldWithDefault(msg, 3, ""),
destination: jspb.Message.getFieldWithDefault(msg, 4, ""),
reservedCarriersList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
sessionSid: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest}
 */
proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest;
  return proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest}
 */
proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCallerId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestination(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addReservedCarriers(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
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
proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCallerId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDestination();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getReservedCarriersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional string caller_id = 3;
 * @return {string}
 */
proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest.prototype.getCallerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest} returns this
 */
proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest.prototype.setCallerId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string destination = 4;
 * @return {string}
 */
proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest.prototype.getDestination = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest} returns this
 */
proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest.prototype.setDestination = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated string reserved_carriers = 5;
 * @return {!Array<string>}
 */
proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest.prototype.getReservedCarriersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest} returns this
 */
proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest.prototype.setReservedCarriersList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest} returns this
 */
proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest.prototype.addReservedCarriers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest} returns this
 */
proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest.prototype.clearReservedCarriersList = function() {
  return this.setReservedCarriersList([]);
};


/**
 * optional int64 session_sid = 6;
 * @return {number}
 */
proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest} returns this
 */
proto.api.v0alpha.CreateWarmOutboundTransferMemberRequest.prototype.setSessionSid = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
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
proto.api.v0alpha.CreateWarmOutboundTransferMemberReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateWarmOutboundTransferMemberReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateWarmOutboundTransferMemberReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateWarmOutboundTransferMemberReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.CreateWarmOutboundTransferMemberReply}
 */
proto.api.v0alpha.CreateWarmOutboundTransferMemberReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateWarmOutboundTransferMemberReply;
  return proto.api.v0alpha.CreateWarmOutboundTransferMemberReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateWarmOutboundTransferMemberReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateWarmOutboundTransferMemberReply}
 */
proto.api.v0alpha.CreateWarmOutboundTransferMemberReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.CreateWarmOutboundTransferMemberReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateWarmOutboundTransferMemberReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateWarmOutboundTransferMemberReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateWarmOutboundTransferMemberReply.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.RemoveTransferMemberRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.RemoveTransferMemberRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.RemoveTransferMemberRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.RemoveTransferMemberRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
memberIdentifier: jspb.Message.getFieldWithDefault(msg, 1, ""),
sessionSid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.RemoveTransferMemberRequest}
 */
proto.api.v0alpha.RemoveTransferMemberRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.RemoveTransferMemberRequest;
  return proto.api.v0alpha.RemoveTransferMemberRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.RemoveTransferMemberRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.RemoveTransferMemberRequest}
 */
proto.api.v0alpha.RemoveTransferMemberRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMemberIdentifier(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
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
proto.api.v0alpha.RemoveTransferMemberRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.RemoveTransferMemberRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.RemoveTransferMemberRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.RemoveTransferMemberRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMemberIdentifier();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string member_identifier = 1;
 * @return {string}
 */
proto.api.v0alpha.RemoveTransferMemberRequest.prototype.getMemberIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.RemoveTransferMemberRequest} returns this
 */
proto.api.v0alpha.RemoveTransferMemberRequest.prototype.setMemberIdentifier = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 session_sid = 2;
 * @return {number}
 */
proto.api.v0alpha.RemoveTransferMemberRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.RemoveTransferMemberRequest} returns this
 */
proto.api.v0alpha.RemoveTransferMemberRequest.prototype.setSessionSid = function(value) {
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
proto.api.v0alpha.RemoveTransferMemberReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.RemoveTransferMemberReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.RemoveTransferMemberReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.RemoveTransferMemberReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.RemoveTransferMemberReply}
 */
proto.api.v0alpha.RemoveTransferMemberReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.RemoveTransferMemberReply;
  return proto.api.v0alpha.RemoveTransferMemberReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.RemoveTransferMemberReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.RemoveTransferMemberReply}
 */
proto.api.v0alpha.RemoveTransferMemberReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.RemoveTransferMemberReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.RemoveTransferMemberReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.RemoveTransferMemberReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.RemoveTransferMemberReply.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.TransferWarmToAgentStartRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.TransferWarmToAgentStartRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.TransferWarmToAgentStartRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.TransferWarmToAgentStartRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
destinationAgentId: jspb.Message.getFieldWithDefault(msg, 3, 0),
callerHold: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
sessionSid: jspb.Message.getFieldWithDefault(msg, 5, 0),
skillsMap: (f = msg.getSkillsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.TransferWarmToAgentStartRequest}
 */
proto.api.v0alpha.TransferWarmToAgentStartRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.TransferWarmToAgentStartRequest;
  return proto.api.v0alpha.TransferWarmToAgentStartRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.TransferWarmToAgentStartRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.TransferWarmToAgentStartRequest}
 */
proto.api.v0alpha.TransferWarmToAgentStartRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDestinationAgentId(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCallerHold(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
      break;
    case 6:
      var value = msg.getSkillsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBool, null, "", false);
         });
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
proto.api.v0alpha.TransferWarmToAgentStartRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.TransferWarmToAgentStartRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.TransferWarmToAgentStartRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.TransferWarmToAgentStartRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDestinationAgentId();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getCallerHold();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getSkillsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBool);
  }
};


/**
 * optional int64 destination_agent_id = 3;
 * @return {number}
 */
proto.api.v0alpha.TransferWarmToAgentStartRequest.prototype.getDestinationAgentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.TransferWarmToAgentStartRequest} returns this
 */
proto.api.v0alpha.TransferWarmToAgentStartRequest.prototype.setDestinationAgentId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool caller_hold = 4;
 * @return {boolean}
 */
proto.api.v0alpha.TransferWarmToAgentStartRequest.prototype.getCallerHold = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.TransferWarmToAgentStartRequest} returns this
 */
proto.api.v0alpha.TransferWarmToAgentStartRequest.prototype.setCallerHold = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional int64 session_sid = 5;
 * @return {number}
 */
proto.api.v0alpha.TransferWarmToAgentStartRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.TransferWarmToAgentStartRequest} returns this
 */
proto.api.v0alpha.TransferWarmToAgentStartRequest.prototype.setSessionSid = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * map<string, bool> skills = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,boolean>}
 */
proto.api.v0alpha.TransferWarmToAgentStartRequest.prototype.getSkillsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,boolean>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v0alpha.TransferWarmToAgentStartRequest} returns this
 */
proto.api.v0alpha.TransferWarmToAgentStartRequest.prototype.clearSkillsMap = function() {
  this.getSkillsMap().clear();
  return this;
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
proto.api.v0alpha.TransferWarmToAgentStartReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.TransferWarmToAgentStartReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.TransferWarmToAgentStartReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.TransferWarmToAgentStartReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.TransferWarmToAgentStartReply}
 */
proto.api.v0alpha.TransferWarmToAgentStartReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.TransferWarmToAgentStartReply;
  return proto.api.v0alpha.TransferWarmToAgentStartReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.TransferWarmToAgentStartReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.TransferWarmToAgentStartReply}
 */
proto.api.v0alpha.TransferWarmToAgentStartReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.TransferWarmToAgentStartReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.TransferWarmToAgentStartReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.TransferWarmToAgentStartReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.TransferWarmToAgentStartReply.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.AgentGetCallFromHoldRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentGetCallFromHoldRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentGetCallFromHoldRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentGetCallFromHoldRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionSid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.AgentGetCallFromHoldRequest}
 */
proto.api.v0alpha.AgentGetCallFromHoldRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentGetCallFromHoldRequest;
  return proto.api.v0alpha.AgentGetCallFromHoldRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentGetCallFromHoldRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentGetCallFromHoldRequest}
 */
proto.api.v0alpha.AgentGetCallFromHoldRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
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
proto.api.v0alpha.AgentGetCallFromHoldRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentGetCallFromHoldRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentGetCallFromHoldRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentGetCallFromHoldRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 session_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.AgentGetCallFromHoldRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.AgentGetCallFromHoldRequest} returns this
 */
proto.api.v0alpha.AgentGetCallFromHoldRequest.prototype.setSessionSid = function(value) {
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
proto.api.v0alpha.AgentGetCallFromHoldReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentGetCallFromHoldReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentGetCallFromHoldReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentGetCallFromHoldReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.AgentGetCallFromHoldReply}
 */
proto.api.v0alpha.AgentGetCallFromHoldReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentGetCallFromHoldReply;
  return proto.api.v0alpha.AgentGetCallFromHoldReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentGetCallFromHoldReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentGetCallFromHoldReply}
 */
proto.api.v0alpha.AgentGetCallFromHoldReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.AgentGetCallFromHoldReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentGetCallFromHoldReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentGetCallFromHoldReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentGetCallFromHoldReply.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.AgentGetSpecificCallFromHoldRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentGetSpecificCallFromHoldRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentGetSpecificCallFromHoldRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentGetSpecificCallFromHoldRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
callId: jspb.Message.getFieldWithDefault(msg, 3, 0),
callType: jspb.Message.getFieldWithDefault(msg, 4, 0),
sessionSid: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.AgentGetSpecificCallFromHoldRequest}
 */
proto.api.v0alpha.AgentGetSpecificCallFromHoldRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentGetSpecificCallFromHoldRequest;
  return proto.api.v0alpha.AgentGetSpecificCallFromHoldRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentGetSpecificCallFromHoldRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentGetSpecificCallFromHoldRequest}
 */
proto.api.v0alpha.AgentGetSpecificCallFromHoldRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCallId(value);
      break;
    case 4:
      var value = /** @type {!proto.api.commons.CallType.Enum} */ (reader.readEnum());
      msg.setCallType(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
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
proto.api.v0alpha.AgentGetSpecificCallFromHoldRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentGetSpecificCallFromHoldRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentGetSpecificCallFromHoldRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentGetSpecificCallFromHoldRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCallId();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getCallType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * optional int64 call_id = 3;
 * @return {number}
 */
proto.api.v0alpha.AgentGetSpecificCallFromHoldRequest.prototype.getCallId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.AgentGetSpecificCallFromHoldRequest} returns this
 */
proto.api.v0alpha.AgentGetSpecificCallFromHoldRequest.prototype.setCallId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional api.commons.CallType.Enum call_type = 4;
 * @return {!proto.api.commons.CallType.Enum}
 */
proto.api.v0alpha.AgentGetSpecificCallFromHoldRequest.prototype.getCallType = function() {
  return /** @type {!proto.api.commons.CallType.Enum} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.CallType.Enum} value
 * @return {!proto.api.v0alpha.AgentGetSpecificCallFromHoldRequest} returns this
 */
proto.api.v0alpha.AgentGetSpecificCallFromHoldRequest.prototype.setCallType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional int64 session_sid = 5;
 * @return {number}
 */
proto.api.v0alpha.AgentGetSpecificCallFromHoldRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.AgentGetSpecificCallFromHoldRequest} returns this
 */
proto.api.v0alpha.AgentGetSpecificCallFromHoldRequest.prototype.setSessionSid = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
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
proto.api.v0alpha.AgentGetSpecificCallFromHoldReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentGetSpecificCallFromHoldReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentGetSpecificCallFromHoldReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentGetSpecificCallFromHoldReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.AgentGetSpecificCallFromHoldReply}
 */
proto.api.v0alpha.AgentGetSpecificCallFromHoldReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentGetSpecificCallFromHoldReply;
  return proto.api.v0alpha.AgentGetSpecificCallFromHoldReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentGetSpecificCallFromHoldReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentGetSpecificCallFromHoldReply}
 */
proto.api.v0alpha.AgentGetSpecificCallFromHoldReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.AgentGetSpecificCallFromHoldReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentGetSpecificCallFromHoldReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentGetSpecificCallFromHoldReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentGetSpecificCallFromHoldReply.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.AgentPutCallOnHoldRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentPutCallOnHoldRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentPutCallOnHoldRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentPutCallOnHoldRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
holdType: jspb.Message.getFieldWithDefault(msg, 1, 0),
sessionSid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.AgentPutCallOnHoldRequest}
 */
proto.api.v0alpha.AgentPutCallOnHoldRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentPutCallOnHoldRequest;
  return proto.api.v0alpha.AgentPutCallOnHoldRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentPutCallOnHoldRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentPutCallOnHoldRequest}
 */
proto.api.v0alpha.AgentPutCallOnHoldRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.commons.HoldType} */ (reader.readEnum());
      msg.setHoldType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
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
proto.api.v0alpha.AgentPutCallOnHoldRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentPutCallOnHoldRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentPutCallOnHoldRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentPutCallOnHoldRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHoldType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional api.commons.HoldType hold_type = 1;
 * @return {!proto.api.commons.HoldType}
 */
proto.api.v0alpha.AgentPutCallOnHoldRequest.prototype.getHoldType = function() {
  return /** @type {!proto.api.commons.HoldType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.commons.HoldType} value
 * @return {!proto.api.v0alpha.AgentPutCallOnHoldRequest} returns this
 */
proto.api.v0alpha.AgentPutCallOnHoldRequest.prototype.setHoldType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int64 session_sid = 2;
 * @return {number}
 */
proto.api.v0alpha.AgentPutCallOnHoldRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.AgentPutCallOnHoldRequest} returns this
 */
proto.api.v0alpha.AgentPutCallOnHoldRequest.prototype.setSessionSid = function(value) {
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
proto.api.v0alpha.AgentPutCallOnHoldReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentPutCallOnHoldReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentPutCallOnHoldReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentPutCallOnHoldReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.AgentPutCallOnHoldReply}
 */
proto.api.v0alpha.AgentPutCallOnHoldReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentPutCallOnHoldReply;
  return proto.api.v0alpha.AgentPutCallOnHoldReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentPutCallOnHoldReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentPutCallOnHoldReply}
 */
proto.api.v0alpha.AgentPutCallOnHoldReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.AgentPutCallOnHoldReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentPutCallOnHoldReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentPutCallOnHoldReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentPutCallOnHoldReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ACDGetAllAgentsStatusesRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ACDGetAllAgentsStatusesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ACDGetAllAgentsStatusesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ACDGetAllAgentsStatusesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ACDGetAllAgentsStatusesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
skillsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
allSkillsRequired: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ACDGetAllAgentsStatusesRequest}
 */
proto.api.v0alpha.ACDGetAllAgentsStatusesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ACDGetAllAgentsStatusesRequest;
  return proto.api.v0alpha.ACDGetAllAgentsStatusesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ACDGetAllAgentsStatusesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ACDGetAllAgentsStatusesRequest}
 */
proto.api.v0alpha.ACDGetAllAgentsStatusesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addSkills(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllSkillsRequired(value);
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
proto.api.v0alpha.ACDGetAllAgentsStatusesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ACDGetAllAgentsStatusesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ACDGetAllAgentsStatusesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ACDGetAllAgentsStatusesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkillsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getAllSkillsRequired();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * repeated string skills = 2;
 * @return {!Array<string>}
 */
proto.api.v0alpha.ACDGetAllAgentsStatusesRequest.prototype.getSkillsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v0alpha.ACDGetAllAgentsStatusesRequest} returns this
 */
proto.api.v0alpha.ACDGetAllAgentsStatusesRequest.prototype.setSkillsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ACDGetAllAgentsStatusesRequest} returns this
 */
proto.api.v0alpha.ACDGetAllAgentsStatusesRequest.prototype.addSkills = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ACDGetAllAgentsStatusesRequest} returns this
 */
proto.api.v0alpha.ACDGetAllAgentsStatusesRequest.prototype.clearSkillsList = function() {
  return this.setSkillsList([]);
};


/**
 * optional bool all_skills_required = 3;
 * @return {boolean}
 */
proto.api.v0alpha.ACDGetAllAgentsStatusesRequest.prototype.getAllSkillsRequired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.ACDGetAllAgentsStatusesRequest} returns this
 */
proto.api.v0alpha.ACDGetAllAgentsStatusesRequest.prototype.setAllSkillsRequired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
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
proto.api.v0alpha.AgentStatusDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentStatusDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentStatusDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentStatusDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
sid: jspb.Message.getFieldWithDefault(msg, 1, 0),
currentSessionId: jspb.Message.getFieldWithDefault(msg, 2, 0),
status: jspb.Message.getFieldWithDefault(msg, 3, 0),
statusDesc: jspb.Message.getFieldWithDefault(msg, 4, 0),
userId: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.AgentStatusDetails}
 */
proto.api.v0alpha.AgentStatusDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentStatusDetails;
  return proto.api.v0alpha.AgentStatusDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentStatusDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentStatusDetails}
 */
proto.api.v0alpha.AgentStatusDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCurrentSessionId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {!proto.api.commons.AgentStatus.Enum} */ (reader.readEnum());
      msg.setStatusDesc(value);
      break;
    case 5:
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
proto.api.v0alpha.AgentStatusDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentStatusDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentStatusDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentStatusDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCurrentSessionId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getStatusDesc();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional int64 sid = 1;
 * @return {number}
 */
proto.api.v0alpha.AgentStatusDetails.prototype.getSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.AgentStatusDetails} returns this
 */
proto.api.v0alpha.AgentStatusDetails.prototype.setSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 current_session_id = 2;
 * @return {number}
 */
proto.api.v0alpha.AgentStatusDetails.prototype.getCurrentSessionId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.AgentStatusDetails} returns this
 */
proto.api.v0alpha.AgentStatusDetails.prototype.setCurrentSessionId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 status = 3;
 * @return {number}
 */
proto.api.v0alpha.AgentStatusDetails.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.AgentStatusDetails} returns this
 */
proto.api.v0alpha.AgentStatusDetails.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional api.commons.AgentStatus.Enum status_desc = 4;
 * @return {!proto.api.commons.AgentStatus.Enum}
 */
proto.api.v0alpha.AgentStatusDetails.prototype.getStatusDesc = function() {
  return /** @type {!proto.api.commons.AgentStatus.Enum} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.AgentStatus.Enum} value
 * @return {!proto.api.v0alpha.AgentStatusDetails} returns this
 */
proto.api.v0alpha.AgentStatusDetails.prototype.setStatusDesc = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string user_id = 5;
 * @return {string}
 */
proto.api.v0alpha.AgentStatusDetails.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.AgentStatusDetails} returns this
 */
proto.api.v0alpha.AgentStatusDetails.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ACDGetAllAgentsStatusesReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ACDGetAllAgentsStatusesReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ACDGetAllAgentsStatusesReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ACDGetAllAgentsStatusesReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ACDGetAllAgentsStatusesReply.toObject = function(includeInstance, msg) {
  var f, obj = {
agentStatusDetailsList: jspb.Message.toObjectList(msg.getAgentStatusDetailsList(),
    proto.api.v0alpha.AgentStatusDetails.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ACDGetAllAgentsStatusesReply}
 */
proto.api.v0alpha.ACDGetAllAgentsStatusesReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ACDGetAllAgentsStatusesReply;
  return proto.api.v0alpha.ACDGetAllAgentsStatusesReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ACDGetAllAgentsStatusesReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ACDGetAllAgentsStatusesReply}
 */
proto.api.v0alpha.ACDGetAllAgentsStatusesReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.AgentStatusDetails;
      reader.readMessage(value,proto.api.v0alpha.AgentStatusDetails.deserializeBinaryFromReader);
      msg.addAgentStatusDetails(value);
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
proto.api.v0alpha.ACDGetAllAgentsStatusesReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ACDGetAllAgentsStatusesReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ACDGetAllAgentsStatusesReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ACDGetAllAgentsStatusesReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentStatusDetailsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.AgentStatusDetails.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AgentStatusDetails agent_status_details = 1;
 * @return {!Array<!proto.api.v0alpha.AgentStatusDetails>}
 */
proto.api.v0alpha.ACDGetAllAgentsStatusesReply.prototype.getAgentStatusDetailsList = function() {
  return /** @type{!Array<!proto.api.v0alpha.AgentStatusDetails>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.AgentStatusDetails, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.AgentStatusDetails>} value
 * @return {!proto.api.v0alpha.ACDGetAllAgentsStatusesReply} returns this
*/
proto.api.v0alpha.ACDGetAllAgentsStatusesReply.prototype.setAgentStatusDetailsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.AgentStatusDetails=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.AgentStatusDetails}
 */
proto.api.v0alpha.ACDGetAllAgentsStatusesReply.prototype.addAgentStatusDetails = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.AgentStatusDetails, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ACDGetAllAgentsStatusesReply} returns this
 */
proto.api.v0alpha.ACDGetAllAgentsStatusesReply.prototype.clearAgentStatusDetailsList = function() {
  return this.setAgentStatusDetailsList([]);
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
proto.api.v0alpha.AgentReceiveMessageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentReceiveMessageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentReceiveMessageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentReceiveMessageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
minimumTimestamp: jspb.Message.getFieldWithDefault(msg, 3, 0),
sessionSid: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.AgentReceiveMessageRequest}
 */
proto.api.v0alpha.AgentReceiveMessageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentReceiveMessageRequest;
  return proto.api.v0alpha.AgentReceiveMessageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentReceiveMessageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentReceiveMessageRequest}
 */
proto.api.v0alpha.AgentReceiveMessageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMinimumTimestamp(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
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
proto.api.v0alpha.AgentReceiveMessageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentReceiveMessageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentReceiveMessageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentReceiveMessageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMinimumTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional int64 minimum_timestamp = 3;
 * @return {number}
 */
proto.api.v0alpha.AgentReceiveMessageRequest.prototype.getMinimumTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.AgentReceiveMessageRequest} returns this
 */
proto.api.v0alpha.AgentReceiveMessageRequest.prototype.setMinimumTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 session_sid = 4;
 * @return {number}
 */
proto.api.v0alpha.AgentReceiveMessageRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.AgentReceiveMessageRequest} returns this
 */
proto.api.v0alpha.AgentReceiveMessageRequest.prototype.setSessionSid = function(value) {
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
proto.api.v0alpha.AgentReceiveMessageReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentReceiveMessageReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentReceiveMessageReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentReceiveMessageReply.toObject = function(includeInstance, msg) {
  var f, obj = {
message: jspb.Message.getFieldWithDefault(msg, 2, ""),
timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.AgentReceiveMessageReply}
 */
proto.api.v0alpha.AgentReceiveMessageReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentReceiveMessageReply;
  return proto.api.v0alpha.AgentReceiveMessageReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentReceiveMessageReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentReceiveMessageReply}
 */
proto.api.v0alpha.AgentReceiveMessageReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
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
proto.api.v0alpha.AgentReceiveMessageReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentReceiveMessageReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentReceiveMessageReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentReceiveMessageReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.api.v0alpha.AgentReceiveMessageReply.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.AgentReceiveMessageReply} returns this
 */
proto.api.v0alpha.AgentReceiveMessageReply.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.api.v0alpha.AgentReceiveMessageReply.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.AgentReceiveMessageReply} returns this
 */
proto.api.v0alpha.AgentReceiveMessageReply.prototype.setTimestamp = function(value) {
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
proto.api.v0alpha.AgentPBXRejectCallRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentPBXRejectCallRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentPBXRejectCallRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentPBXRejectCallRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionSid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.AgentPBXRejectCallRequest}
 */
proto.api.v0alpha.AgentPBXRejectCallRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentPBXRejectCallRequest;
  return proto.api.v0alpha.AgentPBXRejectCallRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentPBXRejectCallRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentPBXRejectCallRequest}
 */
proto.api.v0alpha.AgentPBXRejectCallRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
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
proto.api.v0alpha.AgentPBXRejectCallRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentPBXRejectCallRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentPBXRejectCallRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentPBXRejectCallRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 session_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.AgentPBXRejectCallRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.AgentPBXRejectCallRequest} returns this
 */
proto.api.v0alpha.AgentPBXRejectCallRequest.prototype.setSessionSid = function(value) {
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
proto.api.v0alpha.AgentPBXRejectCallReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentPBXRejectCallReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentPBXRejectCallReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentPBXRejectCallReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.AgentPBXRejectCallReply}
 */
proto.api.v0alpha.AgentPBXRejectCallReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentPBXRejectCallReply;
  return proto.api.v0alpha.AgentPBXRejectCallReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentPBXRejectCallReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentPBXRejectCallReply}
 */
proto.api.v0alpha.AgentPBXRejectCallReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.AgentPBXRejectCallReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentPBXRejectCallReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentPBXRejectCallReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentPBXRejectCallReply.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.AgentPBXApproveCallRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentPBXApproveCallRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentPBXApproveCallRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentPBXApproveCallRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionSid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.AgentPBXApproveCallRequest}
 */
proto.api.v0alpha.AgentPBXApproveCallRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentPBXApproveCallRequest;
  return proto.api.v0alpha.AgentPBXApproveCallRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentPBXApproveCallRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentPBXApproveCallRequest}
 */
proto.api.v0alpha.AgentPBXApproveCallRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
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
proto.api.v0alpha.AgentPBXApproveCallRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentPBXApproveCallRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentPBXApproveCallRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentPBXApproveCallRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 session_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.AgentPBXApproveCallRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.AgentPBXApproveCallRequest} returns this
 */
proto.api.v0alpha.AgentPBXApproveCallRequest.prototype.setSessionSid = function(value) {
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
proto.api.v0alpha.AgentPBXApproveCallReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentPBXApproveCallReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentPBXApproveCallReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentPBXApproveCallReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.AgentPBXApproveCallReply}
 */
proto.api.v0alpha.AgentPBXApproveCallReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentPBXApproveCallReply;
  return proto.api.v0alpha.AgentPBXApproveCallReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentPBXApproveCallReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentPBXApproveCallReply}
 */
proto.api.v0alpha.AgentPBXApproveCallReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.AgentPBXApproveCallReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentPBXApproveCallReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentPBXApproveCallReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentPBXApproveCallReply.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.GetCallerLostPeerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetCallerLostPeerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetCallerLostPeerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetCallerLostPeerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
callSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
callType: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetCallerLostPeerRequest}
 */
proto.api.v0alpha.GetCallerLostPeerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetCallerLostPeerRequest;
  return proto.api.v0alpha.GetCallerLostPeerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetCallerLostPeerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetCallerLostPeerRequest}
 */
proto.api.v0alpha.GetCallerLostPeerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCallSid(value);
      break;
    case 2:
      var value = /** @type {!proto.api.commons.CallType.Enum} */ (reader.readEnum());
      msg.setCallType(value);
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
proto.api.v0alpha.GetCallerLostPeerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetCallerLostPeerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetCallerLostPeerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetCallerLostPeerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCallSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCallType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional int64 call_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.GetCallerLostPeerRequest.prototype.getCallSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.GetCallerLostPeerRequest} returns this
 */
proto.api.v0alpha.GetCallerLostPeerRequest.prototype.setCallSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional api.commons.CallType.Enum call_type = 2;
 * @return {!proto.api.commons.CallType.Enum}
 */
proto.api.v0alpha.GetCallerLostPeerRequest.prototype.getCallType = function() {
  return /** @type {!proto.api.commons.CallType.Enum} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.CallType.Enum} value
 * @return {!proto.api.v0alpha.GetCallerLostPeerRequest} returns this
 */
proto.api.v0alpha.GetCallerLostPeerRequest.prototype.setCallType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
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
proto.api.v0alpha.GetCallerLostPeerReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetCallerLostPeerReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetCallerLostPeerReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetCallerLostPeerReply.toObject = function(includeInstance, msg) {
  var f, obj = {
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
 * @return {!proto.api.v0alpha.GetCallerLostPeerReply}
 */
proto.api.v0alpha.GetCallerLostPeerReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetCallerLostPeerReply;
  return proto.api.v0alpha.GetCallerLostPeerReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetCallerLostPeerReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetCallerLostPeerReply}
 */
proto.api.v0alpha.GetCallerLostPeerReply.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetCallerLostPeerReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetCallerLostPeerReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetCallerLostPeerReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetCallerLostPeerReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 hunt_group_sid = 2;
 * @return {number}
 */
proto.api.v0alpha.GetCallerLostPeerReply.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.GetCallerLostPeerReply} returns this
 */
proto.api.v0alpha.GetCallerLostPeerReply.prototype.setHuntGroupSid = function(value) {
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
proto.api.v0alpha.CallerGetRawEventRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CallerGetRawEventRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CallerGetRawEventRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CallerGetRawEventRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
callSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
callType: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CallerGetRawEventRequest}
 */
proto.api.v0alpha.CallerGetRawEventRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CallerGetRawEventRequest;
  return proto.api.v0alpha.CallerGetRawEventRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CallerGetRawEventRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CallerGetRawEventRequest}
 */
proto.api.v0alpha.CallerGetRawEventRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCallSid(value);
      break;
    case 2:
      var value = /** @type {!proto.api.commons.CallType.Enum} */ (reader.readEnum());
      msg.setCallType(value);
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
proto.api.v0alpha.CallerGetRawEventRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CallerGetRawEventRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CallerGetRawEventRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CallerGetRawEventRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCallSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCallType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional int64 call_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.CallerGetRawEventRequest.prototype.getCallSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.CallerGetRawEventRequest} returns this
 */
proto.api.v0alpha.CallerGetRawEventRequest.prototype.setCallSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional api.commons.CallType.Enum call_type = 2;
 * @return {!proto.api.commons.CallType.Enum}
 */
proto.api.v0alpha.CallerGetRawEventRequest.prototype.getCallType = function() {
  return /** @type {!proto.api.commons.CallType.Enum} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.CallType.Enum} value
 * @return {!proto.api.v0alpha.CallerGetRawEventRequest} returns this
 */
proto.api.v0alpha.CallerGetRawEventRequest.prototype.setCallType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
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
proto.api.v0alpha.CallerGetRawEventReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CallerGetRawEventReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CallerGetRawEventReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CallerGetRawEventReply.toObject = function(includeInstance, msg) {
  var f, obj = {
event: (f = msg.getEvent()) && proto.api.v0alpha.CallerEvent.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CallerGetRawEventReply}
 */
proto.api.v0alpha.CallerGetRawEventReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CallerGetRawEventReply;
  return proto.api.v0alpha.CallerGetRawEventReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CallerGetRawEventReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CallerGetRawEventReply}
 */
proto.api.v0alpha.CallerGetRawEventReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.CallerEvent;
      reader.readMessage(value,proto.api.v0alpha.CallerEvent.deserializeBinaryFromReader);
      msg.setEvent(value);
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
proto.api.v0alpha.CallerGetRawEventReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CallerGetRawEventReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CallerGetRawEventReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CallerGetRawEventReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v0alpha.CallerEvent.serializeBinaryToWriter
    );
  }
};


/**
 * optional CallerEvent event = 1;
 * @return {?proto.api.v0alpha.CallerEvent}
 */
proto.api.v0alpha.CallerGetRawEventReply.prototype.getEvent = function() {
  return /** @type{?proto.api.v0alpha.CallerEvent} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.CallerEvent, 1));
};


/**
 * @param {?proto.api.v0alpha.CallerEvent|undefined} value
 * @return {!proto.api.v0alpha.CallerGetRawEventReply} returns this
*/
proto.api.v0alpha.CallerGetRawEventReply.prototype.setEvent = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.CallerGetRawEventReply} returns this
 */
proto.api.v0alpha.CallerGetRawEventReply.prototype.clearEvent = function() {
  return this.setEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.CallerGetRawEventReply.prototype.hasEvent = function() {
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
proto.api.v0alpha.CallerEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CallerEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CallerEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CallerEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
skillsMap: (f = msg.getSkillsMap()) ? f.toObject(includeInstance, undefined) : [],
allskillsMap: (f = msg.getAllskillsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CallerEvent}
 */
proto.api.v0alpha.CallerEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CallerEvent;
  return proto.api.v0alpha.CallerEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CallerEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CallerEvent}
 */
proto.api.v0alpha.CallerEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 19:
      var value = msg.getSkillsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBool, null, "", false);
         });
      break;
    case 20:
      var value = msg.getAllskillsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBool, null, "", false);
         });
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
proto.api.v0alpha.CallerEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CallerEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CallerEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CallerEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkillsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(19, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBool);
  }
  f = message.getAllskillsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(20, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBool);
  }
};


/**
 * map<string, bool> skills = 19;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,boolean>}
 */
proto.api.v0alpha.CallerEvent.prototype.getSkillsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,boolean>} */ (
      jspb.Message.getMapField(this, 19, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v0alpha.CallerEvent} returns this
 */
proto.api.v0alpha.CallerEvent.prototype.clearSkillsMap = function() {
  this.getSkillsMap().clear();
  return this;
};


/**
 * map<string, bool> allSkills = 20;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,boolean>}
 */
proto.api.v0alpha.CallerEvent.prototype.getAllskillsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,boolean>} */ (
      jspb.Message.getMapField(this, 20, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v0alpha.CallerEvent} returns this
 */
proto.api.v0alpha.CallerEvent.prototype.clearAllskillsMap = function() {
  this.getAllskillsMap().clear();
  return this;
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
proto.api.v0alpha.PeerAgentWithCallerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.PeerAgentWithCallerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.PeerAgentWithCallerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.PeerAgentWithCallerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
callSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
callType: jspb.Message.getFieldWithDefault(msg, 2, 0),
sessionSid: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.PeerAgentWithCallerRequest}
 */
proto.api.v0alpha.PeerAgentWithCallerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.PeerAgentWithCallerRequest;
  return proto.api.v0alpha.PeerAgentWithCallerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.PeerAgentWithCallerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.PeerAgentWithCallerRequest}
 */
proto.api.v0alpha.PeerAgentWithCallerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCallSid(value);
      break;
    case 2:
      var value = /** @type {!proto.api.commons.CallType.Enum} */ (reader.readEnum());
      msg.setCallType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
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
proto.api.v0alpha.PeerAgentWithCallerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.PeerAgentWithCallerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.PeerAgentWithCallerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.PeerAgentWithCallerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCallSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCallType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional int64 call_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.PeerAgentWithCallerRequest.prototype.getCallSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.PeerAgentWithCallerRequest} returns this
 */
proto.api.v0alpha.PeerAgentWithCallerRequest.prototype.setCallSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional api.commons.CallType.Enum call_type = 2;
 * @return {!proto.api.commons.CallType.Enum}
 */
proto.api.v0alpha.PeerAgentWithCallerRequest.prototype.getCallType = function() {
  return /** @type {!proto.api.commons.CallType.Enum} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.CallType.Enum} value
 * @return {!proto.api.v0alpha.PeerAgentWithCallerRequest} returns this
 */
proto.api.v0alpha.PeerAgentWithCallerRequest.prototype.setCallType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int64 session_sid = 3;
 * @return {number}
 */
proto.api.v0alpha.PeerAgentWithCallerRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.PeerAgentWithCallerRequest} returns this
 */
proto.api.v0alpha.PeerAgentWithCallerRequest.prototype.setSessionSid = function(value) {
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
proto.api.v0alpha.PeerAgentWithCallerReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.PeerAgentWithCallerReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.PeerAgentWithCallerReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.PeerAgentWithCallerReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.PeerAgentWithCallerReply}
 */
proto.api.v0alpha.PeerAgentWithCallerReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.PeerAgentWithCallerReply;
  return proto.api.v0alpha.PeerAgentWithCallerReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.PeerAgentWithCallerReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.PeerAgentWithCallerReply}
 */
proto.api.v0alpha.PeerAgentWithCallerReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.PeerAgentWithCallerReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.PeerAgentWithCallerReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.PeerAgentWithCallerReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.PeerAgentWithCallerReply.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.HoldTransferMemberReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.HoldTransferMemberReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.HoldTransferMemberReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.HoldTransferMemberReq.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
memberIdentifier: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.HoldTransferMemberReq}
 */
proto.api.v0alpha.HoldTransferMemberReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.HoldTransferMemberReq;
  return proto.api.v0alpha.HoldTransferMemberReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.HoldTransferMemberReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.HoldTransferMemberReq}
 */
proto.api.v0alpha.HoldTransferMemberReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMemberIdentifier(value);
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
proto.api.v0alpha.HoldTransferMemberReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.HoldTransferMemberReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.HoldTransferMemberReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.HoldTransferMemberReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getMemberIdentifier();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 session_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.HoldTransferMemberReq.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.HoldTransferMemberReq} returns this
 */
proto.api.v0alpha.HoldTransferMemberReq.prototype.setSessionSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string member_identifier = 2;
 * @return {string}
 */
proto.api.v0alpha.HoldTransferMemberReq.prototype.getMemberIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.HoldTransferMemberReq} returns this
 */
proto.api.v0alpha.HoldTransferMemberReq.prototype.setMemberIdentifier = function(value) {
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
proto.api.v0alpha.HoldTransferMemberRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.HoldTransferMemberRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.HoldTransferMemberRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.HoldTransferMemberRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.HoldTransferMemberRes}
 */
proto.api.v0alpha.HoldTransferMemberRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.HoldTransferMemberRes;
  return proto.api.v0alpha.HoldTransferMemberRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.HoldTransferMemberRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.HoldTransferMemberRes}
 */
proto.api.v0alpha.HoldTransferMemberRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.HoldTransferMemberRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.HoldTransferMemberRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.HoldTransferMemberRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.HoldTransferMemberRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.UnholdTransferMemberReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UnholdTransferMemberReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UnholdTransferMemberReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UnholdTransferMemberReq.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
memberIdentifier: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.UnholdTransferMemberReq}
 */
proto.api.v0alpha.UnholdTransferMemberReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UnholdTransferMemberReq;
  return proto.api.v0alpha.UnholdTransferMemberReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UnholdTransferMemberReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UnholdTransferMemberReq}
 */
proto.api.v0alpha.UnholdTransferMemberReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMemberIdentifier(value);
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
proto.api.v0alpha.UnholdTransferMemberReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UnholdTransferMemberReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UnholdTransferMemberReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UnholdTransferMemberReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getMemberIdentifier();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 session_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.UnholdTransferMemberReq.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.UnholdTransferMemberReq} returns this
 */
proto.api.v0alpha.UnholdTransferMemberReq.prototype.setSessionSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string member_identifier = 2;
 * @return {string}
 */
proto.api.v0alpha.UnholdTransferMemberReq.prototype.getMemberIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UnholdTransferMemberReq} returns this
 */
proto.api.v0alpha.UnholdTransferMemberReq.prototype.setMemberIdentifier = function(value) {
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
proto.api.v0alpha.UnholdTransferMemberRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UnholdTransferMemberRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UnholdTransferMemberRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UnholdTransferMemberRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.UnholdTransferMemberRes}
 */
proto.api.v0alpha.UnholdTransferMemberRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UnholdTransferMemberRes;
  return proto.api.v0alpha.UnholdTransferMemberRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UnholdTransferMemberRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UnholdTransferMemberRes}
 */
proto.api.v0alpha.UnholdTransferMemberRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.UnholdTransferMemberRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UnholdTransferMemberRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UnholdTransferMemberRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UnholdTransferMemberRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.GetAgentCallCountsReq.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.GetAgentCallCountsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetAgentCallCountsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetAgentCallCountsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetAgentCallCountsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
agentSkillsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
agentPbxExtensionsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetAgentCallCountsReq}
 */
proto.api.v0alpha.GetAgentCallCountsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetAgentCallCountsReq;
  return proto.api.v0alpha.GetAgentCallCountsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetAgentCallCountsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetAgentCallCountsReq}
 */
proto.api.v0alpha.GetAgentCallCountsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addAgentSkills(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addAgentPbxExtensions(value);
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
proto.api.v0alpha.GetAgentCallCountsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetAgentCallCountsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetAgentCallCountsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetAgentCallCountsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentSkillsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getAgentPbxExtensionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated string agent_skills = 1;
 * @return {!Array<string>}
 */
proto.api.v0alpha.GetAgentCallCountsReq.prototype.getAgentSkillsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v0alpha.GetAgentCallCountsReq} returns this
 */
proto.api.v0alpha.GetAgentCallCountsReq.prototype.setAgentSkillsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.GetAgentCallCountsReq} returns this
 */
proto.api.v0alpha.GetAgentCallCountsReq.prototype.addAgentSkills = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.GetAgentCallCountsReq} returns this
 */
proto.api.v0alpha.GetAgentCallCountsReq.prototype.clearAgentSkillsList = function() {
  return this.setAgentSkillsList([]);
};


/**
 * repeated string agent_pbx_extensions = 2;
 * @return {!Array<string>}
 */
proto.api.v0alpha.GetAgentCallCountsReq.prototype.getAgentPbxExtensionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v0alpha.GetAgentCallCountsReq} returns this
 */
proto.api.v0alpha.GetAgentCallCountsReq.prototype.setAgentPbxExtensionsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.GetAgentCallCountsReq} returns this
 */
proto.api.v0alpha.GetAgentCallCountsReq.prototype.addAgentPbxExtensions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.GetAgentCallCountsReq} returns this
 */
proto.api.v0alpha.GetAgentCallCountsReq.prototype.clearAgentPbxExtensionsList = function() {
  return this.setAgentPbxExtensionsList([]);
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
proto.api.v0alpha.GetAgentCallCountsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetAgentCallCountsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetAgentCallCountsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetAgentCallCountsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
agentCalls: jspb.Message.getFieldWithDefault(msg, 1, 0),
skillCalls: jspb.Message.getFieldWithDefault(msg, 2, 0),
onHoldCalls: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetAgentCallCountsRes}
 */
proto.api.v0alpha.GetAgentCallCountsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetAgentCallCountsRes;
  return proto.api.v0alpha.GetAgentCallCountsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetAgentCallCountsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetAgentCallCountsRes}
 */
proto.api.v0alpha.GetAgentCallCountsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAgentCalls(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSkillCalls(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOnHoldCalls(value);
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
proto.api.v0alpha.GetAgentCallCountsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetAgentCallCountsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetAgentCallCountsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetAgentCallCountsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentCalls();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSkillCalls();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getOnHoldCalls();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional int64 agent_calls = 1;
 * @return {number}
 */
proto.api.v0alpha.GetAgentCallCountsRes.prototype.getAgentCalls = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.GetAgentCallCountsRes} returns this
 */
proto.api.v0alpha.GetAgentCallCountsRes.prototype.setAgentCalls = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 skill_calls = 2;
 * @return {number}
 */
proto.api.v0alpha.GetAgentCallCountsRes.prototype.getSkillCalls = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.GetAgentCallCountsRes} returns this
 */
proto.api.v0alpha.GetAgentCallCountsRes.prototype.setSkillCalls = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 on_hold_calls = 3;
 * @return {number}
 */
proto.api.v0alpha.GetAgentCallCountsRes.prototype.getOnHoldCalls = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.GetAgentCallCountsRes} returns this
 */
proto.api.v0alpha.GetAgentCallCountsRes.prototype.setOnHoldCalls = function(value) {
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
proto.api.v0alpha.WarmCallerTransferStartReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.WarmCallerTransferStartReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.WarmCallerTransferStartReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.WarmCallerTransferStartReq.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
callSid: jspb.Message.getFieldWithDefault(msg, 2, 0),
callType: jspb.Message.getFieldWithDefault(msg, 3, 0),
callerHold: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.WarmCallerTransferStartReq}
 */
proto.api.v0alpha.WarmCallerTransferStartReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.WarmCallerTransferStartReq;
  return proto.api.v0alpha.WarmCallerTransferStartReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.WarmCallerTransferStartReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.WarmCallerTransferStartReq}
 */
proto.api.v0alpha.WarmCallerTransferStartReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCallSid(value);
      break;
    case 3:
      var value = /** @type {!proto.api.commons.CallType.Enum} */ (reader.readEnum());
      msg.setCallType(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCallerHold(value);
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
proto.api.v0alpha.WarmCallerTransferStartReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.WarmCallerTransferStartReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.WarmCallerTransferStartReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.WarmCallerTransferStartReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCallSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getCallType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getCallerHold();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional int64 session_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.WarmCallerTransferStartReq.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.WarmCallerTransferStartReq} returns this
 */
proto.api.v0alpha.WarmCallerTransferStartReq.prototype.setSessionSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 call_sid = 2;
 * @return {number}
 */
proto.api.v0alpha.WarmCallerTransferStartReq.prototype.getCallSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.WarmCallerTransferStartReq} returns this
 */
proto.api.v0alpha.WarmCallerTransferStartReq.prototype.setCallSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional api.commons.CallType.Enum call_type = 3;
 * @return {!proto.api.commons.CallType.Enum}
 */
proto.api.v0alpha.WarmCallerTransferStartReq.prototype.getCallType = function() {
  return /** @type {!proto.api.commons.CallType.Enum} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.CallType.Enum} value
 * @return {!proto.api.v0alpha.WarmCallerTransferStartReq} returns this
 */
proto.api.v0alpha.WarmCallerTransferStartReq.prototype.setCallType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bool caller_hold = 4;
 * @return {boolean}
 */
proto.api.v0alpha.WarmCallerTransferStartReq.prototype.getCallerHold = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.WarmCallerTransferStartReq} returns this
 */
proto.api.v0alpha.WarmCallerTransferStartReq.prototype.setCallerHold = function(value) {
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
proto.api.v0alpha.WarmCallerTransferStartRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.WarmCallerTransferStartRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.WarmCallerTransferStartRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.WarmCallerTransferStartRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.WarmCallerTransferStartRes}
 */
proto.api.v0alpha.WarmCallerTransferStartRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.WarmCallerTransferStartRes;
  return proto.api.v0alpha.WarmCallerTransferStartRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.WarmCallerTransferStartRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.WarmCallerTransferStartRes}
 */
proto.api.v0alpha.WarmCallerTransferStartRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.WarmCallerTransferStartRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.WarmCallerTransferStartRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.WarmCallerTransferStartRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.WarmCallerTransferStartRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.WarmCallerTransferCancelReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.WarmCallerTransferCancelReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.WarmCallerTransferCancelReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.WarmCallerTransferCancelReq.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
reason: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.WarmCallerTransferCancelReq}
 */
proto.api.v0alpha.WarmCallerTransferCancelReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.WarmCallerTransferCancelReq;
  return proto.api.v0alpha.WarmCallerTransferCancelReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.WarmCallerTransferCancelReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.WarmCallerTransferCancelReq}
 */
proto.api.v0alpha.WarmCallerTransferCancelReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
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
proto.api.v0alpha.WarmCallerTransferCancelReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.WarmCallerTransferCancelReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.WarmCallerTransferCancelReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.WarmCallerTransferCancelReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 session_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.WarmCallerTransferCancelReq.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.WarmCallerTransferCancelReq} returns this
 */
proto.api.v0alpha.WarmCallerTransferCancelReq.prototype.setSessionSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string reason = 2;
 * @return {string}
 */
proto.api.v0alpha.WarmCallerTransferCancelReq.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.WarmCallerTransferCancelReq} returns this
 */
proto.api.v0alpha.WarmCallerTransferCancelReq.prototype.setReason = function(value) {
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
proto.api.v0alpha.WarmCallerTransferCancelRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.WarmCallerTransferCancelRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.WarmCallerTransferCancelRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.WarmCallerTransferCancelRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.WarmCallerTransferCancelRes}
 */
proto.api.v0alpha.WarmCallerTransferCancelRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.WarmCallerTransferCancelRes;
  return proto.api.v0alpha.WarmCallerTransferCancelRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.WarmCallerTransferCancelRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.WarmCallerTransferCancelRes}
 */
proto.api.v0alpha.WarmCallerTransferCancelRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.WarmCallerTransferCancelRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.WarmCallerTransferCancelRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.WarmCallerTransferCancelRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.WarmCallerTransferCancelRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.WarmCallerTransferApproveReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.WarmCallerTransferApproveReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.WarmCallerTransferApproveReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.WarmCallerTransferApproveReq.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
reason: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.WarmCallerTransferApproveReq}
 */
proto.api.v0alpha.WarmCallerTransferApproveReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.WarmCallerTransferApproveReq;
  return proto.api.v0alpha.WarmCallerTransferApproveReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.WarmCallerTransferApproveReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.WarmCallerTransferApproveReq}
 */
proto.api.v0alpha.WarmCallerTransferApproveReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
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
proto.api.v0alpha.WarmCallerTransferApproveReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.WarmCallerTransferApproveReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.WarmCallerTransferApproveReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.WarmCallerTransferApproveReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 session_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.WarmCallerTransferApproveReq.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.WarmCallerTransferApproveReq} returns this
 */
proto.api.v0alpha.WarmCallerTransferApproveReq.prototype.setSessionSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string reason = 2;
 * @return {string}
 */
proto.api.v0alpha.WarmCallerTransferApproveReq.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.WarmCallerTransferApproveReq} returns this
 */
proto.api.v0alpha.WarmCallerTransferApproveReq.prototype.setReason = function(value) {
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
proto.api.v0alpha.WarmCallerTransferApproveRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.WarmCallerTransferApproveRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.WarmCallerTransferApproveRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.WarmCallerTransferApproveRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.WarmCallerTransferApproveRes}
 */
proto.api.v0alpha.WarmCallerTransferApproveRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.WarmCallerTransferApproveRes;
  return proto.api.v0alpha.WarmCallerTransferApproveRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.WarmCallerTransferApproveRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.WarmCallerTransferApproveRes}
 */
proto.api.v0alpha.WarmCallerTransferApproveRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.WarmCallerTransferApproveRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.WarmCallerTransferApproveRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.WarmCallerTransferApproveRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.WarmCallerTransferApproveRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.PlaySoundboardEntityReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.PlaySoundboardEntityReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.PlaySoundboardEntityReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.PlaySoundboardEntityReq.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
soundboardEntityId: jspb.Message.getFieldWithDefault(msg, 2, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.PlaySoundboardEntityReq}
 */
proto.api.v0alpha.PlaySoundboardEntityReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.PlaySoundboardEntityReq;
  return proto.api.v0alpha.PlaySoundboardEntityReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.PlaySoundboardEntityReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.PlaySoundboardEntityReq}
 */
proto.api.v0alpha.PlaySoundboardEntityReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setSoundboardEntityId(value);
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
proto.api.v0alpha.PlaySoundboardEntityReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.PlaySoundboardEntityReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.PlaySoundboardEntityReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.PlaySoundboardEntityReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSoundboardEntityId();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      2,
      f
    );
  }
};


/**
 * optional int64 session_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.PlaySoundboardEntityReq.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.PlaySoundboardEntityReq} returns this
 */
proto.api.v0alpha.PlaySoundboardEntityReq.prototype.setSessionSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 soundboard_entity_id = 2;
 * @return {string}
 */
proto.api.v0alpha.PlaySoundboardEntityReq.prototype.getSoundboardEntityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.PlaySoundboardEntityReq} returns this
 */
proto.api.v0alpha.PlaySoundboardEntityReq.prototype.setSoundboardEntityId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
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
proto.api.v0alpha.PlaySoundboardEntityRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.PlaySoundboardEntityRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.PlaySoundboardEntityRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.PlaySoundboardEntityRes.toObject = function(includeInstance, msg) {
  var f, obj = {
soundInstanceId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.PlaySoundboardEntityRes}
 */
proto.api.v0alpha.PlaySoundboardEntityRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.PlaySoundboardEntityRes;
  return proto.api.v0alpha.PlaySoundboardEntityRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.PlaySoundboardEntityRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.PlaySoundboardEntityRes}
 */
proto.api.v0alpha.PlaySoundboardEntityRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSoundInstanceId(value);
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
proto.api.v0alpha.PlaySoundboardEntityRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.PlaySoundboardEntityRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.PlaySoundboardEntityRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.PlaySoundboardEntityRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSoundInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string sound_instance_id = 1;
 * @return {string}
 */
proto.api.v0alpha.PlaySoundboardEntityRes.prototype.getSoundInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.PlaySoundboardEntityRes} returns this
 */
proto.api.v0alpha.PlaySoundboardEntityRes.prototype.setSoundInstanceId = function(value) {
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
proto.api.v0alpha.StopSoundboardEntityReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.StopSoundboardEntityReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.StopSoundboardEntityReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.StopSoundboardEntityReq.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
soundInstanceId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.StopSoundboardEntityReq}
 */
proto.api.v0alpha.StopSoundboardEntityReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.StopSoundboardEntityReq;
  return proto.api.v0alpha.StopSoundboardEntityReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.StopSoundboardEntityReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.StopSoundboardEntityReq}
 */
proto.api.v0alpha.StopSoundboardEntityReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSoundInstanceId(value);
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
proto.api.v0alpha.StopSoundboardEntityReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.StopSoundboardEntityReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.StopSoundboardEntityReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.StopSoundboardEntityReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSoundInstanceId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 session_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.StopSoundboardEntityReq.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.StopSoundboardEntityReq} returns this
 */
proto.api.v0alpha.StopSoundboardEntityReq.prototype.setSessionSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string sound_instance_id = 2;
 * @return {string}
 */
proto.api.v0alpha.StopSoundboardEntityReq.prototype.getSoundInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.StopSoundboardEntityReq} returns this
 */
proto.api.v0alpha.StopSoundboardEntityReq.prototype.setSoundInstanceId = function(value) {
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
proto.api.v0alpha.StopSoundboardEntityRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.StopSoundboardEntityRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.StopSoundboardEntityRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.StopSoundboardEntityRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.StopSoundboardEntityRes}
 */
proto.api.v0alpha.StopSoundboardEntityRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.StopSoundboardEntityRes;
  return proto.api.v0alpha.StopSoundboardEntityRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.StopSoundboardEntityRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.StopSoundboardEntityRes}
 */
proto.api.v0alpha.StopSoundboardEntityRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.StopSoundboardEntityRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.StopSoundboardEntityRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.StopSoundboardEntityRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.StopSoundboardEntityRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.UpdateAgentSkillsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateAgentSkillsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateAgentSkillsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateAgentSkillsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
skillsMap: (f = msg.getSkillsMap()) ? f.toObject(includeInstance, undefined) : [],
replaceSkills: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.UpdateAgentSkillsRequest}
 */
proto.api.v0alpha.UpdateAgentSkillsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateAgentSkillsRequest;
  return proto.api.v0alpha.UpdateAgentSkillsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateAgentSkillsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateAgentSkillsRequest}
 */
proto.api.v0alpha.UpdateAgentSkillsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
      break;
    case 2:
      var value = msg.getSkillsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt64, null, "", 0);
         });
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReplaceSkills(value);
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
proto.api.v0alpha.UpdateAgentSkillsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateAgentSkillsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateAgentSkillsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateAgentSkillsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSkillsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt64);
  }
  f = message.getReplaceSkills();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional int64 session_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.UpdateAgentSkillsRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.UpdateAgentSkillsRequest} returns this
 */
proto.api.v0alpha.UpdateAgentSkillsRequest.prototype.setSessionSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * map<string, int64> skills = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.api.v0alpha.UpdateAgentSkillsRequest.prototype.getSkillsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v0alpha.UpdateAgentSkillsRequest} returns this
 */
proto.api.v0alpha.UpdateAgentSkillsRequest.prototype.clearSkillsMap = function() {
  this.getSkillsMap().clear();
  return this;
};


/**
 * optional bool replace_skills = 4;
 * @return {boolean}
 */
proto.api.v0alpha.UpdateAgentSkillsRequest.prototype.getReplaceSkills = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.UpdateAgentSkillsRequest} returns this
 */
proto.api.v0alpha.UpdateAgentSkillsRequest.prototype.setReplaceSkills = function(value) {
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
proto.api.v0alpha.UpdateAgentSkillsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateAgentSkillsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateAgentSkillsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateAgentSkillsReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.UpdateAgentSkillsReply}
 */
proto.api.v0alpha.UpdateAgentSkillsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateAgentSkillsReply;
  return proto.api.v0alpha.UpdateAgentSkillsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateAgentSkillsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateAgentSkillsReply}
 */
proto.api.v0alpha.UpdateAgentSkillsReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.UpdateAgentSkillsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateAgentSkillsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateAgentSkillsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateAgentSkillsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.PlayDTMFRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.PlayDTMFRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.PlayDTMFRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.PlayDTMFRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.PlayDTMFRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
dtmfDigitsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.PlayDTMFRequest}
 */
proto.api.v0alpha.PlayDTMFRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.PlayDTMFRequest;
  return proto.api.v0alpha.PlayDTMFRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.PlayDTMFRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.PlayDTMFRequest}
 */
proto.api.v0alpha.PlayDTMFRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
      break;
    case 2:
      var values = /** @type {!Array<!proto.api.commons.DTMFDigit>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addDtmfDigits(values[i]);
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
proto.api.v0alpha.PlayDTMFRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.PlayDTMFRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.PlayDTMFRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.PlayDTMFRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getDtmfDigitsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      2,
      f
    );
  }
};


/**
 * optional int64 session_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.PlayDTMFRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.PlayDTMFRequest} returns this
 */
proto.api.v0alpha.PlayDTMFRequest.prototype.setSessionSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated api.commons.DTMFDigit dtmf_digits = 2;
 * @return {!Array<!proto.api.commons.DTMFDigit>}
 */
proto.api.v0alpha.PlayDTMFRequest.prototype.getDtmfDigitsList = function() {
  return /** @type {!Array<!proto.api.commons.DTMFDigit>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<!proto.api.commons.DTMFDigit>} value
 * @return {!proto.api.v0alpha.PlayDTMFRequest} returns this
 */
proto.api.v0alpha.PlayDTMFRequest.prototype.setDtmfDigitsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!proto.api.commons.DTMFDigit} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.PlayDTMFRequest} returns this
 */
proto.api.v0alpha.PlayDTMFRequest.prototype.addDtmfDigits = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.PlayDTMFRequest} returns this
 */
proto.api.v0alpha.PlayDTMFRequest.prototype.clearDtmfDigitsList = function() {
  return this.setDtmfDigitsList([]);
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
proto.api.v0alpha.PlayDTMFReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.PlayDTMFReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.PlayDTMFReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.PlayDTMFReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.PlayDTMFReply}
 */
proto.api.v0alpha.PlayDTMFReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.PlayDTMFReply;
  return proto.api.v0alpha.PlayDTMFReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.PlayDTMFReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.PlayDTMFReply}
 */
proto.api.v0alpha.PlayDTMFReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.PlayDTMFReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.PlayDTMFReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.PlayDTMFReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.PlayDTMFReply.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.AgentMuteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentMuteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentMuteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentMuteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionSid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.AgentMuteRequest}
 */
proto.api.v0alpha.AgentMuteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentMuteRequest;
  return proto.api.v0alpha.AgentMuteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentMuteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentMuteRequest}
 */
proto.api.v0alpha.AgentMuteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
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
proto.api.v0alpha.AgentMuteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentMuteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentMuteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentMuteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 session_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.AgentMuteRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.AgentMuteRequest} returns this
 */
proto.api.v0alpha.AgentMuteRequest.prototype.setSessionSid = function(value) {
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
proto.api.v0alpha.AgentMuteReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentMuteReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentMuteReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentMuteReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.AgentMuteReply}
 */
proto.api.v0alpha.AgentMuteReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentMuteReply;
  return proto.api.v0alpha.AgentMuteReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentMuteReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentMuteReply}
 */
proto.api.v0alpha.AgentMuteReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.AgentMuteReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentMuteReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentMuteReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentMuteReply.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.AgentUnmuteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentUnmuteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentUnmuteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentUnmuteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionSid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.AgentUnmuteRequest}
 */
proto.api.v0alpha.AgentUnmuteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentUnmuteRequest;
  return proto.api.v0alpha.AgentUnmuteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentUnmuteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentUnmuteRequest}
 */
proto.api.v0alpha.AgentUnmuteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSessionSid(value);
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
proto.api.v0alpha.AgentUnmuteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentUnmuteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentUnmuteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentUnmuteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 session_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.AgentUnmuteRequest.prototype.getSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.AgentUnmuteRequest} returns this
 */
proto.api.v0alpha.AgentUnmuteRequest.prototype.setSessionSid = function(value) {
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
proto.api.v0alpha.AgentUnmuteReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AgentUnmuteReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AgentUnmuteReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentUnmuteReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.AgentUnmuteReply}
 */
proto.api.v0alpha.AgentUnmuteReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AgentUnmuteReply;
  return proto.api.v0alpha.AgentUnmuteReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AgentUnmuteReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AgentUnmuteReply}
 */
proto.api.v0alpha.AgentUnmuteReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.AgentUnmuteReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AgentUnmuteReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AgentUnmuteReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AgentUnmuteReply.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.StartSecureFormReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.StartSecureFormReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.StartSecureFormReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.StartSecureFormReq.toObject = function(includeInstance, msg) {
  var f, obj = {
portalId: jspb.Message.getFieldWithDefault(msg, 1, ""),
voiceSessionSid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.StartSecureFormReq}
 */
proto.api.v0alpha.StartSecureFormReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.StartSecureFormReq;
  return proto.api.v0alpha.StartSecureFormReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.StartSecureFormReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.StartSecureFormReq}
 */
proto.api.v0alpha.StartSecureFormReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPortalId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVoiceSessionSid(value);
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
proto.api.v0alpha.StartSecureFormReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.StartSecureFormReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.StartSecureFormReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.StartSecureFormReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPortalId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVoiceSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string portal_id = 1;
 * @return {string}
 */
proto.api.v0alpha.StartSecureFormReq.prototype.getPortalId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.StartSecureFormReq} returns this
 */
proto.api.v0alpha.StartSecureFormReq.prototype.setPortalId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 voice_session_sid = 2;
 * @return {number}
 */
proto.api.v0alpha.StartSecureFormReq.prototype.getVoiceSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.StartSecureFormReq} returns this
 */
proto.api.v0alpha.StartSecureFormReq.prototype.setVoiceSessionSid = function(value) {
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
proto.api.v0alpha.StartSecureFormRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.StartSecureFormRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.StartSecureFormRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.StartSecureFormRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.StartSecureFormRes}
 */
proto.api.v0alpha.StartSecureFormRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.StartSecureFormRes;
  return proto.api.v0alpha.StartSecureFormRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.StartSecureFormRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.StartSecureFormRes}
 */
proto.api.v0alpha.StartSecureFormRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.StartSecureFormRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.StartSecureFormRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.StartSecureFormRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.StartSecureFormRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.CollectSecureFormFieldReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CollectSecureFormFieldReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CollectSecureFormFieldReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CollectSecureFormFieldReq.toObject = function(includeInstance, msg) {
  var f, obj = {
fieldName: jspb.Message.getFieldWithDefault(msg, 1, ""),
voiceSessionSid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CollectSecureFormFieldReq}
 */
proto.api.v0alpha.CollectSecureFormFieldReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CollectSecureFormFieldReq;
  return proto.api.v0alpha.CollectSecureFormFieldReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CollectSecureFormFieldReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CollectSecureFormFieldReq}
 */
proto.api.v0alpha.CollectSecureFormFieldReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFieldName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVoiceSessionSid(value);
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
proto.api.v0alpha.CollectSecureFormFieldReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CollectSecureFormFieldReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CollectSecureFormFieldReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CollectSecureFormFieldReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVoiceSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string field_name = 1;
 * @return {string}
 */
proto.api.v0alpha.CollectSecureFormFieldReq.prototype.getFieldName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CollectSecureFormFieldReq} returns this
 */
proto.api.v0alpha.CollectSecureFormFieldReq.prototype.setFieldName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 voice_session_sid = 2;
 * @return {number}
 */
proto.api.v0alpha.CollectSecureFormFieldReq.prototype.getVoiceSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.CollectSecureFormFieldReq} returns this
 */
proto.api.v0alpha.CollectSecureFormFieldReq.prototype.setVoiceSessionSid = function(value) {
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
proto.api.v0alpha.CollectSecureFormFieldRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CollectSecureFormFieldRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CollectSecureFormFieldRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CollectSecureFormFieldRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.CollectSecureFormFieldRes}
 */
proto.api.v0alpha.CollectSecureFormFieldRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CollectSecureFormFieldRes;
  return proto.api.v0alpha.CollectSecureFormFieldRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CollectSecureFormFieldRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CollectSecureFormFieldRes}
 */
proto.api.v0alpha.CollectSecureFormFieldRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.CollectSecureFormFieldRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CollectSecureFormFieldRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CollectSecureFormFieldRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CollectSecureFormFieldRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.ResetSecureFormFieldReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ResetSecureFormFieldReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ResetSecureFormFieldReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ResetSecureFormFieldReq.toObject = function(includeInstance, msg) {
  var f, obj = {
voiceSessionSid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ResetSecureFormFieldReq}
 */
proto.api.v0alpha.ResetSecureFormFieldReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ResetSecureFormFieldReq;
  return proto.api.v0alpha.ResetSecureFormFieldReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ResetSecureFormFieldReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ResetSecureFormFieldReq}
 */
proto.api.v0alpha.ResetSecureFormFieldReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVoiceSessionSid(value);
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
proto.api.v0alpha.ResetSecureFormFieldReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ResetSecureFormFieldReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ResetSecureFormFieldReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ResetSecureFormFieldReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVoiceSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 voice_session_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.ResetSecureFormFieldReq.prototype.getVoiceSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.ResetSecureFormFieldReq} returns this
 */
proto.api.v0alpha.ResetSecureFormFieldReq.prototype.setVoiceSessionSid = function(value) {
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
proto.api.v0alpha.ResetSecureFormFieldRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ResetSecureFormFieldRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ResetSecureFormFieldRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ResetSecureFormFieldRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.ResetSecureFormFieldRes}
 */
proto.api.v0alpha.ResetSecureFormFieldRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ResetSecureFormFieldRes;
  return proto.api.v0alpha.ResetSecureFormFieldRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ResetSecureFormFieldRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ResetSecureFormFieldRes}
 */
proto.api.v0alpha.ResetSecureFormFieldRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.ResetSecureFormFieldRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ResetSecureFormFieldRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ResetSecureFormFieldRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ResetSecureFormFieldRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.AcceptSecureFormFieldReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AcceptSecureFormFieldReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AcceptSecureFormFieldReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AcceptSecureFormFieldReq.toObject = function(includeInstance, msg) {
  var f, obj = {
voiceSessionSid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.AcceptSecureFormFieldReq}
 */
proto.api.v0alpha.AcceptSecureFormFieldReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AcceptSecureFormFieldReq;
  return proto.api.v0alpha.AcceptSecureFormFieldReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AcceptSecureFormFieldReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AcceptSecureFormFieldReq}
 */
proto.api.v0alpha.AcceptSecureFormFieldReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVoiceSessionSid(value);
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
proto.api.v0alpha.AcceptSecureFormFieldReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AcceptSecureFormFieldReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AcceptSecureFormFieldReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AcceptSecureFormFieldReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVoiceSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 voice_session_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.AcceptSecureFormFieldReq.prototype.getVoiceSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.AcceptSecureFormFieldReq} returns this
 */
proto.api.v0alpha.AcceptSecureFormFieldReq.prototype.setVoiceSessionSid = function(value) {
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
proto.api.v0alpha.AcceptSecureFormFieldRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AcceptSecureFormFieldRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AcceptSecureFormFieldRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AcceptSecureFormFieldRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.AcceptSecureFormFieldRes}
 */
proto.api.v0alpha.AcceptSecureFormFieldRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AcceptSecureFormFieldRes;
  return proto.api.v0alpha.AcceptSecureFormFieldRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AcceptSecureFormFieldRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AcceptSecureFormFieldRes}
 */
proto.api.v0alpha.AcceptSecureFormFieldRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.AcceptSecureFormFieldRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AcceptSecureFormFieldRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AcceptSecureFormFieldRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AcceptSecureFormFieldRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.ProcessSecureFormReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ProcessSecureFormReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ProcessSecureFormReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ProcessSecureFormReq.toObject = function(includeInstance, msg) {
  var f, obj = {
valuesMap: (f = msg.getValuesMap()) ? f.toObject(includeInstance, proto.api.v1alpha1.integrations.Value.toObject) : [],
portalId: jspb.Message.getFieldWithDefault(msg, 2, ""),
segment: jspb.Message.getFieldWithDefault(msg, 3, 0),
choice: jspb.Message.getFieldWithDefault(msg, 4, 0),
voiceSessionSid: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ProcessSecureFormReq}
 */
proto.api.v0alpha.ProcessSecureFormReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ProcessSecureFormReq;
  return proto.api.v0alpha.ProcessSecureFormReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ProcessSecureFormReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ProcessSecureFormReq}
 */
proto.api.v0alpha.ProcessSecureFormReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getValuesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api.v1alpha1.integrations.Value.deserializeBinaryFromReader, "", new proto.api.v1alpha1.integrations.Value());
         });
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPortalId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSegment(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setChoice(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVoiceSessionSid(value);
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
proto.api.v0alpha.ProcessSecureFormReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ProcessSecureFormReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ProcessSecureFormReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ProcessSecureFormReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api.v1alpha1.integrations.Value.serializeBinaryToWriter);
  }
  f = message.getPortalId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSegment();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getChoice();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getVoiceSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * map<string, api.v1alpha1.integrations.Value> values = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api.v1alpha1.integrations.Value>}
 */
proto.api.v0alpha.ProcessSecureFormReq.prototype.getValuesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api.v1alpha1.integrations.Value>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.api.v1alpha1.integrations.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v0alpha.ProcessSecureFormReq} returns this
 */
proto.api.v0alpha.ProcessSecureFormReq.prototype.clearValuesMap = function() {
  this.getValuesMap().clear();
  return this;
};


/**
 * optional string portal_id = 2;
 * @return {string}
 */
proto.api.v0alpha.ProcessSecureFormReq.prototype.getPortalId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ProcessSecureFormReq} returns this
 */
proto.api.v0alpha.ProcessSecureFormReq.prototype.setPortalId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 segment = 3;
 * @return {number}
 */
proto.api.v0alpha.ProcessSecureFormReq.prototype.getSegment = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.ProcessSecureFormReq} returns this
 */
proto.api.v0alpha.ProcessSecureFormReq.prototype.setSegment = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 choice = 4;
 * @return {number}
 */
proto.api.v0alpha.ProcessSecureFormReq.prototype.getChoice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.ProcessSecureFormReq} returns this
 */
proto.api.v0alpha.ProcessSecureFormReq.prototype.setChoice = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 voice_session_sid = 5;
 * @return {number}
 */
proto.api.v0alpha.ProcessSecureFormReq.prototype.getVoiceSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.ProcessSecureFormReq} returns this
 */
proto.api.v0alpha.ProcessSecureFormReq.prototype.setVoiceSessionSid = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
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
proto.api.v0alpha.ProcessSecureFormRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ProcessSecureFormRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ProcessSecureFormRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ProcessSecureFormRes.toObject = function(includeInstance, msg) {
  var f, obj = {
success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
dataMap: (f = msg.getDataMap()) ? f.toObject(includeInstance, proto.api.v1alpha1.integrations.Value.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ProcessSecureFormRes}
 */
proto.api.v0alpha.ProcessSecureFormRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ProcessSecureFormRes;
  return proto.api.v0alpha.ProcessSecureFormRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ProcessSecureFormRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ProcessSecureFormRes}
 */
proto.api.v0alpha.ProcessSecureFormRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 2:
      var value = msg.getDataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api.v1alpha1.integrations.Value.deserializeBinaryFromReader, "", new proto.api.v1alpha1.integrations.Value());
         });
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
proto.api.v0alpha.ProcessSecureFormRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ProcessSecureFormRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ProcessSecureFormRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ProcessSecureFormRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getDataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api.v1alpha1.integrations.Value.serializeBinaryToWriter);
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.api.v0alpha.ProcessSecureFormRes.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.ProcessSecureFormRes} returns this
 */
proto.api.v0alpha.ProcessSecureFormRes.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * map<string, api.v1alpha1.integrations.Value> data = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api.v1alpha1.integrations.Value>}
 */
proto.api.v0alpha.ProcessSecureFormRes.prototype.getDataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api.v1alpha1.integrations.Value>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.api.v1alpha1.integrations.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v0alpha.ProcessSecureFormRes} returns this
 */
proto.api.v0alpha.ProcessSecureFormRes.prototype.clearDataMap = function() {
  this.getDataMap().clear();
  return this;
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
proto.api.v0alpha.FinishSecureFormHandlingReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.FinishSecureFormHandlingReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.FinishSecureFormHandlingReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.FinishSecureFormHandlingReq.toObject = function(includeInstance, msg) {
  var f, obj = {
reason: jspb.Message.getFieldWithDefault(msg, 1, ""),
dataMap: (f = msg.getDataMap()) ? f.toObject(includeInstance, proto.api.v1alpha1.integrations.Value.toObject) : [],
voiceSessionSid: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.FinishSecureFormHandlingReq}
 */
proto.api.v0alpha.FinishSecureFormHandlingReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.FinishSecureFormHandlingReq;
  return proto.api.v0alpha.FinishSecureFormHandlingReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.FinishSecureFormHandlingReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.FinishSecureFormHandlingReq}
 */
proto.api.v0alpha.FinishSecureFormHandlingReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 2:
      var value = msg.getDataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api.v1alpha1.integrations.Value.deserializeBinaryFromReader, "", new proto.api.v1alpha1.integrations.Value());
         });
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVoiceSessionSid(value);
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
proto.api.v0alpha.FinishSecureFormHandlingReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.FinishSecureFormHandlingReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.FinishSecureFormHandlingReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.FinishSecureFormHandlingReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api.v1alpha1.integrations.Value.serializeBinaryToWriter);
  }
  f = message.getVoiceSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string reason = 1;
 * @return {string}
 */
proto.api.v0alpha.FinishSecureFormHandlingReq.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.FinishSecureFormHandlingReq} returns this
 */
proto.api.v0alpha.FinishSecureFormHandlingReq.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, api.v1alpha1.integrations.Value> data = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api.v1alpha1.integrations.Value>}
 */
proto.api.v0alpha.FinishSecureFormHandlingReq.prototype.getDataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api.v1alpha1.integrations.Value>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.api.v1alpha1.integrations.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v0alpha.FinishSecureFormHandlingReq} returns this
 */
proto.api.v0alpha.FinishSecureFormHandlingReq.prototype.clearDataMap = function() {
  this.getDataMap().clear();
  return this;
};


/**
 * optional int64 voice_session_sid = 3;
 * @return {number}
 */
proto.api.v0alpha.FinishSecureFormHandlingReq.prototype.getVoiceSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.FinishSecureFormHandlingReq} returns this
 */
proto.api.v0alpha.FinishSecureFormHandlingReq.prototype.setVoiceSessionSid = function(value) {
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
proto.api.v0alpha.FinishSecureFormHandlingRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.FinishSecureFormHandlingRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.FinishSecureFormHandlingRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.FinishSecureFormHandlingRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.FinishSecureFormHandlingRes}
 */
proto.api.v0alpha.FinishSecureFormHandlingRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.FinishSecureFormHandlingRes;
  return proto.api.v0alpha.FinishSecureFormHandlingRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.FinishSecureFormHandlingRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.FinishSecureFormHandlingRes}
 */
proto.api.v0alpha.FinishSecureFormHandlingRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.FinishSecureFormHandlingRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.FinishSecureFormHandlingRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.FinishSecureFormHandlingRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.FinishSecureFormHandlingRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.PopulateWorkflowFieldsReq.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.PopulateWorkflowFieldsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.PopulateWorkflowFieldsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.PopulateWorkflowFieldsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.PopulateWorkflowFieldsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
clientSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
agentSid: jspb.Message.getFieldWithDefault(msg, 2, 0),
callSid: jspb.Message.getFieldWithDefault(msg, 3, 0),
callType: jspb.Message.getFieldWithDefault(msg, 4, 0),
scheduledCallbackId: jspb.Message.getFieldWithDefault(msg, 5, ""),
fieldDefinitionsList: jspb.Message.toObjectList(msg.getFieldDefinitionsList(),
    api_commons_integrations_integrations_pb.FieldDefinition.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.PopulateWorkflowFieldsReq}
 */
proto.api.v0alpha.PopulateWorkflowFieldsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.PopulateWorkflowFieldsReq;
  return proto.api.v0alpha.PopulateWorkflowFieldsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.PopulateWorkflowFieldsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.PopulateWorkflowFieldsReq}
 */
proto.api.v0alpha.PopulateWorkflowFieldsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setClientSid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAgentSid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCallSid(value);
      break;
    case 4:
      var value = /** @type {!proto.api.commons.CallType.Enum} */ (reader.readEnum());
      msg.setCallType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setScheduledCallbackId(value);
      break;
    case 6:
      var value = new api_commons_integrations_integrations_pb.FieldDefinition;
      reader.readMessage(value,api_commons_integrations_integrations_pb.FieldDefinition.deserializeBinaryFromReader);
      msg.addFieldDefinitions(value);
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
proto.api.v0alpha.PopulateWorkflowFieldsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.PopulateWorkflowFieldsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.PopulateWorkflowFieldsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.PopulateWorkflowFieldsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getAgentSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getCallSid();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getCallType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getScheduledCallbackId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getFieldDefinitionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      api_commons_integrations_integrations_pb.FieldDefinition.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 client_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.PopulateWorkflowFieldsReq.prototype.getClientSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.PopulateWorkflowFieldsReq} returns this
 */
proto.api.v0alpha.PopulateWorkflowFieldsReq.prototype.setClientSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 agent_sid = 2;
 * @return {number}
 */
proto.api.v0alpha.PopulateWorkflowFieldsReq.prototype.getAgentSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.PopulateWorkflowFieldsReq} returns this
 */
proto.api.v0alpha.PopulateWorkflowFieldsReq.prototype.setAgentSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 call_sid = 3;
 * @return {number}
 */
proto.api.v0alpha.PopulateWorkflowFieldsReq.prototype.getCallSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.PopulateWorkflowFieldsReq} returns this
 */
proto.api.v0alpha.PopulateWorkflowFieldsReq.prototype.setCallSid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional api.commons.CallType.Enum call_type = 4;
 * @return {!proto.api.commons.CallType.Enum}
 */
proto.api.v0alpha.PopulateWorkflowFieldsReq.prototype.getCallType = function() {
  return /** @type {!proto.api.commons.CallType.Enum} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.CallType.Enum} value
 * @return {!proto.api.v0alpha.PopulateWorkflowFieldsReq} returns this
 */
proto.api.v0alpha.PopulateWorkflowFieldsReq.prototype.setCallType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string scheduled_callback_id = 5;
 * @return {string}
 */
proto.api.v0alpha.PopulateWorkflowFieldsReq.prototype.getScheduledCallbackId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.PopulateWorkflowFieldsReq} returns this
 */
proto.api.v0alpha.PopulateWorkflowFieldsReq.prototype.setScheduledCallbackId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated api.commons.integrations.FieldDefinition field_definitions = 6;
 * @return {!Array<!proto.api.commons.integrations.FieldDefinition>}
 */
proto.api.v0alpha.PopulateWorkflowFieldsReq.prototype.getFieldDefinitionsList = function() {
  return /** @type{!Array<!proto.api.commons.integrations.FieldDefinition>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_integrations_integrations_pb.FieldDefinition, 6));
};


/**
 * @param {!Array<!proto.api.commons.integrations.FieldDefinition>} value
 * @return {!proto.api.v0alpha.PopulateWorkflowFieldsReq} returns this
*/
proto.api.v0alpha.PopulateWorkflowFieldsReq.prototype.setFieldDefinitionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.api.commons.integrations.FieldDefinition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.integrations.FieldDefinition}
 */
proto.api.v0alpha.PopulateWorkflowFieldsReq.prototype.addFieldDefinitions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.api.commons.integrations.FieldDefinition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.PopulateWorkflowFieldsReq} returns this
 */
proto.api.v0alpha.PopulateWorkflowFieldsReq.prototype.clearFieldDefinitionsList = function() {
  return this.setFieldDefinitionsList([]);
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
proto.api.v0alpha.PopulateWorkflowFieldsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.PopulateWorkflowFieldsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.PopulateWorkflowFieldsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.PopulateWorkflowFieldsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
valuesMap: (f = msg.getValuesMap()) ? f.toObject(includeInstance, proto.api.v1alpha1.integrations.Value.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.PopulateWorkflowFieldsRes}
 */
proto.api.v0alpha.PopulateWorkflowFieldsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.PopulateWorkflowFieldsRes;
  return proto.api.v0alpha.PopulateWorkflowFieldsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.PopulateWorkflowFieldsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.PopulateWorkflowFieldsRes}
 */
proto.api.v0alpha.PopulateWorkflowFieldsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getValuesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api.v1alpha1.integrations.Value.deserializeBinaryFromReader, "", new proto.api.v1alpha1.integrations.Value());
         });
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
proto.api.v0alpha.PopulateWorkflowFieldsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.PopulateWorkflowFieldsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.PopulateWorkflowFieldsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.PopulateWorkflowFieldsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api.v1alpha1.integrations.Value.serializeBinaryToWriter);
  }
};


/**
 * map<string, api.v1alpha1.integrations.Value> values = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api.v1alpha1.integrations.Value>}
 */
proto.api.v0alpha.PopulateWorkflowFieldsRes.prototype.getValuesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api.v1alpha1.integrations.Value>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.api.v1alpha1.integrations.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v0alpha.PopulateWorkflowFieldsRes} returns this
 */
proto.api.v0alpha.PopulateWorkflowFieldsRes.prototype.clearValuesMap = function() {
  this.getValuesMap().clear();
  return this;
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
proto.api.v0alpha.ValidateFieldReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ValidateFieldReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ValidateFieldReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ValidateFieldReq.toObject = function(includeInstance, msg) {
  var f, obj = {
voiceSessionSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
validationType: jspb.Message.getFieldWithDefault(msg, 2, 0),
fieldName: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ValidateFieldReq}
 */
proto.api.v0alpha.ValidateFieldReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ValidateFieldReq;
  return proto.api.v0alpha.ValidateFieldReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ValidateFieldReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ValidateFieldReq}
 */
proto.api.v0alpha.ValidateFieldReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVoiceSessionSid(value);
      break;
    case 2:
      var value = /** @type {!proto.api.commons.integrations.Validation} */ (reader.readEnum());
      msg.setValidationType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFieldName(value);
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
proto.api.v0alpha.ValidateFieldReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ValidateFieldReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ValidateFieldReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ValidateFieldReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVoiceSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getValidationType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getFieldName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 voice_session_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.ValidateFieldReq.prototype.getVoiceSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.ValidateFieldReq} returns this
 */
proto.api.v0alpha.ValidateFieldReq.prototype.setVoiceSessionSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional api.commons.integrations.Validation validation_type = 2;
 * @return {!proto.api.commons.integrations.Validation}
 */
proto.api.v0alpha.ValidateFieldReq.prototype.getValidationType = function() {
  return /** @type {!proto.api.commons.integrations.Validation} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.integrations.Validation} value
 * @return {!proto.api.v0alpha.ValidateFieldReq} returns this
 */
proto.api.v0alpha.ValidateFieldReq.prototype.setValidationType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string field_name = 3;
 * @return {string}
 */
proto.api.v0alpha.ValidateFieldReq.prototype.getFieldName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ValidateFieldReq} returns this
 */
proto.api.v0alpha.ValidateFieldReq.prototype.setFieldName = function(value) {
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
proto.api.v0alpha.ValidateFieldRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ValidateFieldRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ValidateFieldRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ValidateFieldRes.toObject = function(includeInstance, msg) {
  var f, obj = {
valid: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
reason: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ValidateFieldRes}
 */
proto.api.v0alpha.ValidateFieldRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ValidateFieldRes;
  return proto.api.v0alpha.ValidateFieldRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ValidateFieldRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ValidateFieldRes}
 */
proto.api.v0alpha.ValidateFieldRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
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
proto.api.v0alpha.ValidateFieldRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ValidateFieldRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ValidateFieldRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ValidateFieldRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValid();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bool valid = 1;
 * @return {boolean}
 */
proto.api.v0alpha.ValidateFieldRes.prototype.getValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.ValidateFieldRes} returns this
 */
proto.api.v0alpha.ValidateFieldRes.prototype.setValid = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string reason = 2;
 * @return {string}
 */
proto.api.v0alpha.ValidateFieldRes.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ValidateFieldRes} returns this
 */
proto.api.v0alpha.ValidateFieldRes.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.api.v0alpha);
