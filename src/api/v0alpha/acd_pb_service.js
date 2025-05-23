// package: api.v0alpha
// file: api/v0alpha/acd.proto

var api_v0alpha_acd_pb = require("../../api/v0alpha/acd_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Acd = (function () {
  function Acd() {}
  Acd.serviceName = "api.v0alpha.Acd";
  return Acd;
}());

Acd.AgentGetStatusStream = {
  methodName: "AgentGetStatusStream",
  service: Acd,
  requestStream: false,
  responseStream: true,
  requestType: api_v0alpha_acd_pb.AgentGetStatusRequest,
  responseType: api_v0alpha_acd_pb.AgentGetStatusReply
};

Acd.AgentGetStatus = {
  methodName: "AgentGetStatus",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.AgentGetStatusRequest,
  responseType: api_v0alpha_acd_pb.AgentGetStatusReply
};

Acd.AgentGetConnectedParty = {
  methodName: "AgentGetConnectedParty",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.AgentGetConnectedPartyRequest,
  responseType: api_v0alpha_acd_pb.AgentGetConnectedPartyReply
};

Acd.ManagerAgentGetConnectedParty = {
  methodName: "ManagerAgentGetConnectedParty",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.ManagerAgentGetConnectedPartyRequest,
  responseType: api_v0alpha_acd_pb.ManagerAgentGetConnectedPartyReply
};

Acd.AgentIntercom = {
  methodName: "AgentIntercom",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.AgentIntercomRequest,
  responseType: api_v0alpha_acd_pb.AgentIntercomReply
};

Acd.AgentIntercomAccept = {
  methodName: "AgentIntercomAccept",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.AgentIntercomAcceptRequest,
  responseType: api_v0alpha_acd_pb.AgentIntercomAcceptReply
};

Acd.AgentIntercomReject = {
  methodName: "AgentIntercomReject",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.AgentIntercomRejectRequest,
  responseType: api_v0alpha_acd_pb.AgentIntercomRejectReply
};

Acd.AgentIntercomCancel = {
  methodName: "AgentIntercomCancel",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.AgentIntercomCancelRequest,
  responseType: api_v0alpha_acd_pb.AgentIntercomCancelReply
};

Acd.DialManualPrepare = {
  methodName: "DialManualPrepare",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.DialManualPrepareRequest,
  responseType: api_v0alpha_acd_pb.DialManualPrepareReply
};

Acd.DialManualCancel = {
  methodName: "DialManualCancel",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.DialManualCancelRequest,
  responseType: api_v0alpha_acd_pb.DialManualCancelReply
};

Acd.DialPreviewPrepare = {
  methodName: "DialPreviewPrepare",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.DialPreviewPrepareRequest,
  responseType: api_v0alpha_acd_pb.DialPreviewPrepareReply
};

Acd.AgentPause = {
  methodName: "AgentPause",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.AgentPauseRequest,
  responseType: api_v0alpha_acd_pb.AgentPauseReply
};

Acd.AgentSetReady = {
  methodName: "AgentSetReady",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.AgentSetReadyRequest,
  responseType: api_v0alpha_acd_pb.AgentSetReadyReply
};

Acd.AgentGUIBusy = {
  methodName: "AgentGUIBusy",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.AgentGUIBusyRequest,
  responseType: api_v0alpha_acd_pb.AgentGUIBusyReply
};

Acd.ReportAgentSessionEvent = {
  methodName: "ReportAgentSessionEvent",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.AgentSessionEventReq,
  responseType: api_v0alpha_acd_pb.AgentSessionEventRes
};

Acd.CallerRequeue = {
  methodName: "CallerRequeue",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.CallerRequeueRequest,
  responseType: api_v0alpha_acd_pb.CallerRequeueReply
};

Acd.AgentDisconnect = {
  methodName: "AgentDisconnect",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.AgentDisconnectRequest,
  responseType: api_v0alpha_acd_pb.AgentDisconnectReply
};

Acd.TransferWarmToOutboundCancel = {
  methodName: "TransferWarmToOutboundCancel",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.TransferWarmToOutboundCancelRequest,
  responseType: api_v0alpha_acd_pb.TransferWarmToOutboundCancelReply
};

Acd.TransferWarmToAgentCancel = {
  methodName: "TransferWarmToAgentCancel",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.TransferWarmToAgentCancelRequest,
  responseType: api_v0alpha_acd_pb.TransferWarmToAgentCancelReply
};

Acd.TransferWarmToOutboundApprove = {
  methodName: "TransferWarmToOutboundApprove",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.TransferWarmToOutboundApproveRequest,
  responseType: api_v0alpha_acd_pb.TransferWarmToOutboundApproveReply
};

Acd.TransferWarmToAgentApprove = {
  methodName: "TransferWarmToAgentApprove",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.TransferWarmToAgentApproveRequest,
  responseType: api_v0alpha_acd_pb.TransferWarmToAgentApproveReply
};

Acd.CallerSendToVoicemail = {
  methodName: "CallerSendToVoicemail",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.CallerSendToVoicemailRequest,
  responseType: api_v0alpha_acd_pb.CallerSendToVoicemailReply
};

Acd.AgentInviteTransferCallerToConference = {
  methodName: "AgentInviteTransferCallerToConference",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.AgentInviteTransferCallerToConferenceRequest,
  responseType: api_v0alpha_acd_pb.AgentInviteTransferCallerToConferenceReply
};

Acd.AgentMonitorCalls = {
  methodName: "AgentMonitorCalls",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.AgentMonitorCallsRequest,
  responseType: api_v0alpha_acd_pb.AgentMonitorCallsReply
};

Acd.TransferColdToOutbound = {
  methodName: "TransferColdToOutbound",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.TransferColdToOutboundRequest,
  responseType: api_v0alpha_acd_pb.TransferColdToOutboundReply
};

Acd.TransferColdToAgent = {
  methodName: "TransferColdToAgent",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.TransferColdToAgentRequest,
  responseType: api_v0alpha_acd_pb.TransferColdToAgentReply
};

Acd.TransferWarmToOutboundStart = {
  methodName: "TransferWarmToOutboundStart",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.TransferWarmToOutboundStartRequest,
  responseType: api_v0alpha_acd_pb.TransferWarmToOutboundStartReply
};

Acd.CreateWarmOutboundTransferMember = {
  methodName: "CreateWarmOutboundTransferMember",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.CreateWarmOutboundTransferMemberRequest,
  responseType: api_v0alpha_acd_pb.CreateWarmOutboundTransferMemberReply
};

Acd.RemoveTransferMember = {
  methodName: "RemoveTransferMember",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.RemoveTransferMemberRequest,
  responseType: api_v0alpha_acd_pb.RemoveTransferMemberReply
};

Acd.TransferWarmToAgentStart = {
  methodName: "TransferWarmToAgentStart",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.TransferWarmToAgentStartRequest,
  responseType: api_v0alpha_acd_pb.TransferWarmToAgentStartReply
};

Acd.AgentGetCallFromHold = {
  methodName: "AgentGetCallFromHold",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.AgentGetCallFromHoldRequest,
  responseType: api_v0alpha_acd_pb.AgentGetCallFromHoldReply
};

Acd.AgentGetSpecificCallFromHold = {
  methodName: "AgentGetSpecificCallFromHold",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.AgentGetSpecificCallFromHoldRequest,
  responseType: api_v0alpha_acd_pb.AgentGetSpecificCallFromHoldReply
};

Acd.ACDGetAllAgentsStatuses = {
  methodName: "ACDGetAllAgentsStatuses",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.ACDGetAllAgentsStatusesRequest,
  responseType: api_v0alpha_acd_pb.ACDGetAllAgentsStatusesReply
};

Acd.AgentPutCallOnHold = {
  methodName: "AgentPutCallOnHold",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.AgentPutCallOnHoldRequest,
  responseType: api_v0alpha_acd_pb.AgentPutCallOnHoldReply
};

Acd.AgentReceiveMessage = {
  methodName: "AgentReceiveMessage",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.AgentReceiveMessageRequest,
  responseType: api_v0alpha_acd_pb.AgentReceiveMessageReply
};

Acd.AgentPBXApproveCall = {
  methodName: "AgentPBXApproveCall",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.AgentPBXApproveCallRequest,
  responseType: api_v0alpha_acd_pb.AgentPBXApproveCallReply
};

Acd.AgentPBXRejectCall = {
  methodName: "AgentPBXRejectCall",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.AgentPBXRejectCallRequest,
  responseType: api_v0alpha_acd_pb.AgentPBXRejectCallReply
};

Acd.GetCallerLostPeer = {
  methodName: "GetCallerLostPeer",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.GetCallerLostPeerRequest,
  responseType: api_v0alpha_acd_pb.GetCallerLostPeerReply
};

Acd.CallerGetRawEvent = {
  methodName: "CallerGetRawEvent",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.CallerGetRawEventRequest,
  responseType: api_v0alpha_acd_pb.CallerGetRawEventReply
};

Acd.PeerAgentWithCaller = {
  methodName: "PeerAgentWithCaller",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.PeerAgentWithCallerRequest,
  responseType: api_v0alpha_acd_pb.PeerAgentWithCallerReply
};

Acd.HoldTransferMember = {
  methodName: "HoldTransferMember",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.HoldTransferMemberReq,
  responseType: api_v0alpha_acd_pb.HoldTransferMemberRes
};

Acd.UnholdTransferMember = {
  methodName: "UnholdTransferMember",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.UnholdTransferMemberReq,
  responseType: api_v0alpha_acd_pb.UnholdTransferMemberRes
};

Acd.GetAgentCallCounts = {
  methodName: "GetAgentCallCounts",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.GetAgentCallCountsReq,
  responseType: api_v0alpha_acd_pb.GetAgentCallCountsRes
};

Acd.WarmCallerTransferStart = {
  methodName: "WarmCallerTransferStart",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.WarmCallerTransferStartReq,
  responseType: api_v0alpha_acd_pb.WarmCallerTransferStartRes
};

Acd.WarmCallerTransferCancel = {
  methodName: "WarmCallerTransferCancel",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.WarmCallerTransferCancelReq,
  responseType: api_v0alpha_acd_pb.WarmCallerTransferCancelRes
};

Acd.WarmCallerTransferApprove = {
  methodName: "WarmCallerTransferApprove",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.WarmCallerTransferApproveReq,
  responseType: api_v0alpha_acd_pb.WarmCallerTransferApproveRes
};

Acd.PlaySoundboardEntity = {
  methodName: "PlaySoundboardEntity",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.PlaySoundboardEntityReq,
  responseType: api_v0alpha_acd_pb.PlaySoundboardEntityRes
};

Acd.StopSoundboardEntity = {
  methodName: "StopSoundboardEntity",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.StopSoundboardEntityReq,
  responseType: api_v0alpha_acd_pb.StopSoundboardEntityRes
};

Acd.UpdateAgentSkills = {
  methodName: "UpdateAgentSkills",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.UpdateAgentSkillsRequest,
  responseType: api_v0alpha_acd_pb.UpdateAgentSkillsReply
};

Acd.PlayDTMF = {
  methodName: "PlayDTMF",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.PlayDTMFRequest,
  responseType: api_v0alpha_acd_pb.PlayDTMFReply
};

Acd.AgentMute = {
  methodName: "AgentMute",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.AgentMuteRequest,
  responseType: api_v0alpha_acd_pb.AgentMuteReply
};

Acd.AgentUnmute = {
  methodName: "AgentUnmute",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.AgentUnmuteRequest,
  responseType: api_v0alpha_acd_pb.AgentUnmuteReply
};

Acd.StartSecureForm = {
  methodName: "StartSecureForm",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.StartSecureFormReq,
  responseType: api_v0alpha_acd_pb.StartSecureFormRes
};

Acd.CollectSecureFormField = {
  methodName: "CollectSecureFormField",
  service: Acd,
  requestStream: false,
  responseStream: true,
  requestType: api_v0alpha_acd_pb.CollectSecureFormFieldReq,
  responseType: api_v0alpha_acd_pb.CollectSecureFormFieldRes
};

Acd.ResetSecureFormField = {
  methodName: "ResetSecureFormField",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.ResetSecureFormFieldReq,
  responseType: api_v0alpha_acd_pb.ResetSecureFormFieldRes
};

Acd.AcceptSecureFormField = {
  methodName: "AcceptSecureFormField",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.AcceptSecureFormFieldReq,
  responseType: api_v0alpha_acd_pb.AcceptSecureFormFieldRes
};

Acd.ProcessSecureForm = {
  methodName: "ProcessSecureForm",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.ProcessSecureFormReq,
  responseType: api_v0alpha_acd_pb.ProcessSecureFormRes
};

Acd.FinishSecureFormHandling = {
  methodName: "FinishSecureFormHandling",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.FinishSecureFormHandlingReq,
  responseType: api_v0alpha_acd_pb.FinishSecureFormHandlingRes
};

Acd.PopulateWorkflowFields = {
  methodName: "PopulateWorkflowFields",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.PopulateWorkflowFieldsReq,
  responseType: api_v0alpha_acd_pb.PopulateWorkflowFieldsRes
};

Acd.ValidateField = {
  methodName: "ValidateField",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.ValidateFieldReq,
  responseType: api_v0alpha_acd_pb.ValidateFieldRes
};

Acd.ListAgentsVoiceStatuses = {
  methodName: "ListAgentsVoiceStatuses",
  service: Acd,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_acd_pb.ListAgentsVoiceStatusesRequest,
  responseType: api_v0alpha_acd_pb.ListAgentsVoiceStatusesReply
};

exports.Acd = Acd;

function AcdClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AcdClient.prototype.agentGetStatusStream = function agentGetStatusStream(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Acd.AgentGetStatusStream, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

AcdClient.prototype.agentGetStatus = function agentGetStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.AgentGetStatus, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.agentGetConnectedParty = function agentGetConnectedParty(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.AgentGetConnectedParty, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.managerAgentGetConnectedParty = function managerAgentGetConnectedParty(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.ManagerAgentGetConnectedParty, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.agentIntercom = function agentIntercom(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.AgentIntercom, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.agentIntercomAccept = function agentIntercomAccept(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.AgentIntercomAccept, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.agentIntercomReject = function agentIntercomReject(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.AgentIntercomReject, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.agentIntercomCancel = function agentIntercomCancel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.AgentIntercomCancel, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.dialManualPrepare = function dialManualPrepare(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.DialManualPrepare, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.dialManualCancel = function dialManualCancel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.DialManualCancel, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.dialPreviewPrepare = function dialPreviewPrepare(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.DialPreviewPrepare, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.agentPause = function agentPause(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.AgentPause, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.agentSetReady = function agentSetReady(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.AgentSetReady, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.agentGUIBusy = function agentGUIBusy(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.AgentGUIBusy, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.reportAgentSessionEvent = function reportAgentSessionEvent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.ReportAgentSessionEvent, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.callerRequeue = function callerRequeue(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.CallerRequeue, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.agentDisconnect = function agentDisconnect(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.AgentDisconnect, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.transferWarmToOutboundCancel = function transferWarmToOutboundCancel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.TransferWarmToOutboundCancel, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.transferWarmToAgentCancel = function transferWarmToAgentCancel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.TransferWarmToAgentCancel, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.transferWarmToOutboundApprove = function transferWarmToOutboundApprove(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.TransferWarmToOutboundApprove, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.transferWarmToAgentApprove = function transferWarmToAgentApprove(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.TransferWarmToAgentApprove, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.callerSendToVoicemail = function callerSendToVoicemail(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.CallerSendToVoicemail, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.agentInviteTransferCallerToConference = function agentInviteTransferCallerToConference(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.AgentInviteTransferCallerToConference, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.agentMonitorCalls = function agentMonitorCalls(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.AgentMonitorCalls, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.transferColdToOutbound = function transferColdToOutbound(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.TransferColdToOutbound, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.transferColdToAgent = function transferColdToAgent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.TransferColdToAgent, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.transferWarmToOutboundStart = function transferWarmToOutboundStart(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.TransferWarmToOutboundStart, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.createWarmOutboundTransferMember = function createWarmOutboundTransferMember(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.CreateWarmOutboundTransferMember, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.removeTransferMember = function removeTransferMember(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.RemoveTransferMember, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.transferWarmToAgentStart = function transferWarmToAgentStart(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.TransferWarmToAgentStart, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.agentGetCallFromHold = function agentGetCallFromHold(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.AgentGetCallFromHold, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.agentGetSpecificCallFromHold = function agentGetSpecificCallFromHold(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.AgentGetSpecificCallFromHold, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.aCDGetAllAgentsStatuses = function aCDGetAllAgentsStatuses(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.ACDGetAllAgentsStatuses, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.agentPutCallOnHold = function agentPutCallOnHold(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.AgentPutCallOnHold, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.agentReceiveMessage = function agentReceiveMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.AgentReceiveMessage, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.agentPBXApproveCall = function agentPBXApproveCall(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.AgentPBXApproveCall, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.agentPBXRejectCall = function agentPBXRejectCall(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.AgentPBXRejectCall, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.getCallerLostPeer = function getCallerLostPeer(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.GetCallerLostPeer, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.callerGetRawEvent = function callerGetRawEvent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.CallerGetRawEvent, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.peerAgentWithCaller = function peerAgentWithCaller(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.PeerAgentWithCaller, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.holdTransferMember = function holdTransferMember(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.HoldTransferMember, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.unholdTransferMember = function unholdTransferMember(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.UnholdTransferMember, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.getAgentCallCounts = function getAgentCallCounts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.GetAgentCallCounts, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.warmCallerTransferStart = function warmCallerTransferStart(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.WarmCallerTransferStart, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.warmCallerTransferCancel = function warmCallerTransferCancel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.WarmCallerTransferCancel, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.warmCallerTransferApprove = function warmCallerTransferApprove(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.WarmCallerTransferApprove, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.playSoundboardEntity = function playSoundboardEntity(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.PlaySoundboardEntity, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.stopSoundboardEntity = function stopSoundboardEntity(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.StopSoundboardEntity, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.updateAgentSkills = function updateAgentSkills(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.UpdateAgentSkills, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.playDTMF = function playDTMF(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.PlayDTMF, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.agentMute = function agentMute(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.AgentMute, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.agentUnmute = function agentUnmute(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.AgentUnmute, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.startSecureForm = function startSecureForm(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.StartSecureForm, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.collectSecureFormField = function collectSecureFormField(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Acd.CollectSecureFormField, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

AcdClient.prototype.resetSecureFormField = function resetSecureFormField(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.ResetSecureFormField, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.acceptSecureFormField = function acceptSecureFormField(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.AcceptSecureFormField, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.processSecureForm = function processSecureForm(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.ProcessSecureForm, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.finishSecureFormHandling = function finishSecureFormHandling(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.FinishSecureFormHandling, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.populateWorkflowFields = function populateWorkflowFields(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.PopulateWorkflowFields, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.validateField = function validateField(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.ValidateField, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AcdClient.prototype.listAgentsVoiceStatuses = function listAgentsVoiceStatuses(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Acd.ListAgentsVoiceStatuses, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.AcdClient = AcdClient;

