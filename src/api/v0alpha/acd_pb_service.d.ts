// package: api.v0alpha
// file: api/v0alpha/acd.proto

import * as api_v0alpha_acd_pb from "../../api/v0alpha/acd_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AcdAgentGetStatusStream = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v0alpha_acd_pb.AgentGetStatusRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.AgentGetStatusReply;
};

type AcdAgentGetStatus = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.AgentGetStatusRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.AgentGetStatusReply;
};

type AcdAgentGetConnectedParty = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.AgentGetConnectedPartyRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.AgentGetConnectedPartyReply;
};

type AcdManagerAgentGetConnectedParty = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.ManagerAgentGetConnectedPartyRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.ManagerAgentGetConnectedPartyReply;
};

type AcdAgentIntercom = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.AgentIntercomRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.AgentIntercomReply;
};

type AcdAgentIntercomAccept = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.AgentIntercomAcceptRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.AgentIntercomAcceptReply;
};

type AcdAgentIntercomReject = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.AgentIntercomRejectRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.AgentIntercomRejectReply;
};

type AcdAgentIntercomCancel = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.AgentIntercomCancelRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.AgentIntercomCancelReply;
};

type AcdDialManualPrepare = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.DialManualPrepareRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.DialManualPrepareReply;
};

type AcdDialManualCancel = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.DialManualCancelRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.DialManualCancelReply;
};

type AcdDialPreviewPrepare = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.DialPreviewPrepareRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.DialPreviewPrepareReply;
};

type AcdAgentPause = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.AgentPauseRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.AgentPauseReply;
};

type AcdAgentSetReady = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.AgentSetReadyRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.AgentSetReadyReply;
};

type AcdAgentGUIBusy = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.AgentGUIBusyRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.AgentGUIBusyReply;
};

type AcdReportAgentSessionEvent = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.AgentSessionEventReq;
  readonly responseType: typeof api_v0alpha_acd_pb.AgentSessionEventRes;
};

type AcdCallerRequeue = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.CallerRequeueRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.CallerRequeueReply;
};

type AcdAgentDisconnect = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.AgentDisconnectRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.AgentDisconnectReply;
};

type AcdTransferWarmToOutboundCancel = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.TransferWarmToOutboundCancelRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.TransferWarmToOutboundCancelReply;
};

type AcdTransferWarmToAgentCancel = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.TransferWarmToAgentCancelRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.TransferWarmToAgentCancelReply;
};

type AcdTransferWarmToOutboundApprove = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.TransferWarmToOutboundApproveRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.TransferWarmToOutboundApproveReply;
};

type AcdTransferWarmToAgentApprove = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.TransferWarmToAgentApproveRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.TransferWarmToAgentApproveReply;
};

type AcdCallerSendToVoicemail = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.CallerSendToVoicemailRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.CallerSendToVoicemailReply;
};

type AcdAgentInviteTransferCallerToConference = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.AgentInviteTransferCallerToConferenceRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.AgentInviteTransferCallerToConferenceReply;
};

type AcdAgentMonitorCalls = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.AgentMonitorCallsRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.AgentMonitorCallsReply;
};

type AcdTransferColdToOutbound = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.TransferColdToOutboundRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.TransferColdToOutboundReply;
};

type AcdTransferColdToAgent = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.TransferColdToAgentRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.TransferColdToAgentReply;
};

type AcdTransferWarmToOutboundStart = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.TransferWarmToOutboundStartRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.TransferWarmToOutboundStartReply;
};

type AcdCreateWarmOutboundTransferMember = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.CreateWarmOutboundTransferMemberRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.CreateWarmOutboundTransferMemberReply;
};

type AcdRemoveTransferMember = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.RemoveTransferMemberRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.RemoveTransferMemberReply;
};

type AcdTransferWarmToAgentStart = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.TransferWarmToAgentStartRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.TransferWarmToAgentStartReply;
};

type AcdAgentGetCallFromHold = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.AgentGetCallFromHoldRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.AgentGetCallFromHoldReply;
};

type AcdAgentGetSpecificCallFromHold = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.AgentGetSpecificCallFromHoldRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.AgentGetSpecificCallFromHoldReply;
};

type AcdACDGetAllAgentsStatuses = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.ACDGetAllAgentsStatusesRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.ACDGetAllAgentsStatusesReply;
};

type AcdAgentPutCallOnHold = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.AgentPutCallOnHoldRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.AgentPutCallOnHoldReply;
};

type AcdAgentReceiveMessage = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.AgentReceiveMessageRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.AgentReceiveMessageReply;
};

type AcdAgentPBXApproveCall = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.AgentPBXApproveCallRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.AgentPBXApproveCallReply;
};

type AcdAgentPBXRejectCall = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.AgentPBXRejectCallRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.AgentPBXRejectCallReply;
};

type AcdGetCallerLostPeer = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.GetCallerLostPeerRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.GetCallerLostPeerReply;
};

type AcdCallerGetRawEvent = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.CallerGetRawEventRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.CallerGetRawEventReply;
};

type AcdPeerAgentWithCaller = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.PeerAgentWithCallerRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.PeerAgentWithCallerReply;
};

type AcdHoldTransferMember = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.HoldTransferMemberReq;
  readonly responseType: typeof api_v0alpha_acd_pb.HoldTransferMemberRes;
};

type AcdUnholdTransferMember = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.UnholdTransferMemberReq;
  readonly responseType: typeof api_v0alpha_acd_pb.UnholdTransferMemberRes;
};

type AcdGetAgentCallCounts = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.GetAgentCallCountsReq;
  readonly responseType: typeof api_v0alpha_acd_pb.GetAgentCallCountsRes;
};

type AcdWarmCallerTransferStart = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.WarmCallerTransferStartReq;
  readonly responseType: typeof api_v0alpha_acd_pb.WarmCallerTransferStartRes;
};

type AcdWarmCallerTransferCancel = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.WarmCallerTransferCancelReq;
  readonly responseType: typeof api_v0alpha_acd_pb.WarmCallerTransferCancelRes;
};

type AcdWarmCallerTransferApprove = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.WarmCallerTransferApproveReq;
  readonly responseType: typeof api_v0alpha_acd_pb.WarmCallerTransferApproveRes;
};

type AcdPlaySoundboardEntity = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.PlaySoundboardEntityReq;
  readonly responseType: typeof api_v0alpha_acd_pb.PlaySoundboardEntityRes;
};

type AcdStopSoundboardEntity = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.StopSoundboardEntityReq;
  readonly responseType: typeof api_v0alpha_acd_pb.StopSoundboardEntityRes;
};

type AcdUpdateAgentSkills = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.UpdateAgentSkillsRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.UpdateAgentSkillsReply;
};

type AcdPlayDTMF = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.PlayDTMFRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.PlayDTMFReply;
};

type AcdAgentMute = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.AgentMuteRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.AgentMuteReply;
};

type AcdAgentUnmute = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.AgentUnmuteRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.AgentUnmuteReply;
};

type AcdStartSecureForm = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.StartSecureFormReq;
  readonly responseType: typeof api_v0alpha_acd_pb.StartSecureFormRes;
};

type AcdCollectSecureFormField = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_v0alpha_acd_pb.CollectSecureFormFieldReq;
  readonly responseType: typeof api_v0alpha_acd_pb.CollectSecureFormFieldRes;
};

type AcdResetSecureFormField = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.ResetSecureFormFieldReq;
  readonly responseType: typeof api_v0alpha_acd_pb.ResetSecureFormFieldRes;
};

type AcdAcceptSecureFormField = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.AcceptSecureFormFieldReq;
  readonly responseType: typeof api_v0alpha_acd_pb.AcceptSecureFormFieldRes;
};

type AcdProcessSecureForm = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.ProcessSecureFormReq;
  readonly responseType: typeof api_v0alpha_acd_pb.ProcessSecureFormRes;
};

type AcdFinishSecureFormHandling = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.FinishSecureFormHandlingReq;
  readonly responseType: typeof api_v0alpha_acd_pb.FinishSecureFormHandlingRes;
};

type AcdPopulateWorkflowFields = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.PopulateWorkflowFieldsReq;
  readonly responseType: typeof api_v0alpha_acd_pb.PopulateWorkflowFieldsRes;
};

type AcdValidateField = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.ValidateFieldReq;
  readonly responseType: typeof api_v0alpha_acd_pb.ValidateFieldRes;
};

type AcdListAgentsVoiceStatuses = {
  readonly methodName: string;
  readonly service: typeof Acd;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_v0alpha_acd_pb.ListAgentsVoiceStatusesRequest;
  readonly responseType: typeof api_v0alpha_acd_pb.ListAgentsVoiceStatusesReply;
};

export class Acd {
  static readonly serviceName: string;
  static readonly AgentGetStatusStream: AcdAgentGetStatusStream;
  static readonly AgentGetStatus: AcdAgentGetStatus;
  static readonly AgentGetConnectedParty: AcdAgentGetConnectedParty;
  static readonly ManagerAgentGetConnectedParty: AcdManagerAgentGetConnectedParty;
  static readonly AgentIntercom: AcdAgentIntercom;
  static readonly AgentIntercomAccept: AcdAgentIntercomAccept;
  static readonly AgentIntercomReject: AcdAgentIntercomReject;
  static readonly AgentIntercomCancel: AcdAgentIntercomCancel;
  static readonly DialManualPrepare: AcdDialManualPrepare;
  static readonly DialManualCancel: AcdDialManualCancel;
  static readonly DialPreviewPrepare: AcdDialPreviewPrepare;
  static readonly AgentPause: AcdAgentPause;
  static readonly AgentSetReady: AcdAgentSetReady;
  static readonly AgentGUIBusy: AcdAgentGUIBusy;
  static readonly ReportAgentSessionEvent: AcdReportAgentSessionEvent;
  static readonly CallerRequeue: AcdCallerRequeue;
  static readonly AgentDisconnect: AcdAgentDisconnect;
  static readonly TransferWarmToOutboundCancel: AcdTransferWarmToOutboundCancel;
  static readonly TransferWarmToAgentCancel: AcdTransferWarmToAgentCancel;
  static readonly TransferWarmToOutboundApprove: AcdTransferWarmToOutboundApprove;
  static readonly TransferWarmToAgentApprove: AcdTransferWarmToAgentApprove;
  static readonly CallerSendToVoicemail: AcdCallerSendToVoicemail;
  static readonly AgentInviteTransferCallerToConference: AcdAgentInviteTransferCallerToConference;
  static readonly AgentMonitorCalls: AcdAgentMonitorCalls;
  static readonly TransferColdToOutbound: AcdTransferColdToOutbound;
  static readonly TransferColdToAgent: AcdTransferColdToAgent;
  static readonly TransferWarmToOutboundStart: AcdTransferWarmToOutboundStart;
  static readonly CreateWarmOutboundTransferMember: AcdCreateWarmOutboundTransferMember;
  static readonly RemoveTransferMember: AcdRemoveTransferMember;
  static readonly TransferWarmToAgentStart: AcdTransferWarmToAgentStart;
  static readonly AgentGetCallFromHold: AcdAgentGetCallFromHold;
  static readonly AgentGetSpecificCallFromHold: AcdAgentGetSpecificCallFromHold;
  static readonly ACDGetAllAgentsStatuses: AcdACDGetAllAgentsStatuses;
  static readonly AgentPutCallOnHold: AcdAgentPutCallOnHold;
  static readonly AgentReceiveMessage: AcdAgentReceiveMessage;
  static readonly AgentPBXApproveCall: AcdAgentPBXApproveCall;
  static readonly AgentPBXRejectCall: AcdAgentPBXRejectCall;
  static readonly GetCallerLostPeer: AcdGetCallerLostPeer;
  static readonly CallerGetRawEvent: AcdCallerGetRawEvent;
  static readonly PeerAgentWithCaller: AcdPeerAgentWithCaller;
  static readonly HoldTransferMember: AcdHoldTransferMember;
  static readonly UnholdTransferMember: AcdUnholdTransferMember;
  static readonly GetAgentCallCounts: AcdGetAgentCallCounts;
  static readonly WarmCallerTransferStart: AcdWarmCallerTransferStart;
  static readonly WarmCallerTransferCancel: AcdWarmCallerTransferCancel;
  static readonly WarmCallerTransferApprove: AcdWarmCallerTransferApprove;
  static readonly PlaySoundboardEntity: AcdPlaySoundboardEntity;
  static readonly StopSoundboardEntity: AcdStopSoundboardEntity;
  static readonly UpdateAgentSkills: AcdUpdateAgentSkills;
  static readonly PlayDTMF: AcdPlayDTMF;
  static readonly AgentMute: AcdAgentMute;
  static readonly AgentUnmute: AcdAgentUnmute;
  static readonly StartSecureForm: AcdStartSecureForm;
  static readonly CollectSecureFormField: AcdCollectSecureFormField;
  static readonly ResetSecureFormField: AcdResetSecureFormField;
  static readonly AcceptSecureFormField: AcdAcceptSecureFormField;
  static readonly ProcessSecureForm: AcdProcessSecureForm;
  static readonly FinishSecureFormHandling: AcdFinishSecureFormHandling;
  static readonly PopulateWorkflowFields: AcdPopulateWorkflowFields;
  static readonly ValidateField: AcdValidateField;
  static readonly ListAgentsVoiceStatuses: AcdListAgentsVoiceStatuses;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class AcdClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  agentGetStatusStream(requestMessage: api_v0alpha_acd_pb.AgentGetStatusRequest, metadata?: grpc.Metadata): ResponseStream<api_v0alpha_acd_pb.AgentGetStatusReply>;
  agentGetStatus(
    requestMessage: api_v0alpha_acd_pb.AgentGetStatusRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentGetStatusReply|null) => void
  ): UnaryResponse;
  agentGetStatus(
    requestMessage: api_v0alpha_acd_pb.AgentGetStatusRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentGetStatusReply|null) => void
  ): UnaryResponse;
  agentGetConnectedParty(
    requestMessage: api_v0alpha_acd_pb.AgentGetConnectedPartyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentGetConnectedPartyReply|null) => void
  ): UnaryResponse;
  agentGetConnectedParty(
    requestMessage: api_v0alpha_acd_pb.AgentGetConnectedPartyRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentGetConnectedPartyReply|null) => void
  ): UnaryResponse;
  managerAgentGetConnectedParty(
    requestMessage: api_v0alpha_acd_pb.ManagerAgentGetConnectedPartyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.ManagerAgentGetConnectedPartyReply|null) => void
  ): UnaryResponse;
  managerAgentGetConnectedParty(
    requestMessage: api_v0alpha_acd_pb.ManagerAgentGetConnectedPartyRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.ManagerAgentGetConnectedPartyReply|null) => void
  ): UnaryResponse;
  agentIntercom(
    requestMessage: api_v0alpha_acd_pb.AgentIntercomRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentIntercomReply|null) => void
  ): UnaryResponse;
  agentIntercom(
    requestMessage: api_v0alpha_acd_pb.AgentIntercomRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentIntercomReply|null) => void
  ): UnaryResponse;
  agentIntercomAccept(
    requestMessage: api_v0alpha_acd_pb.AgentIntercomAcceptRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentIntercomAcceptReply|null) => void
  ): UnaryResponse;
  agentIntercomAccept(
    requestMessage: api_v0alpha_acd_pb.AgentIntercomAcceptRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentIntercomAcceptReply|null) => void
  ): UnaryResponse;
  agentIntercomReject(
    requestMessage: api_v0alpha_acd_pb.AgentIntercomRejectRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentIntercomRejectReply|null) => void
  ): UnaryResponse;
  agentIntercomReject(
    requestMessage: api_v0alpha_acd_pb.AgentIntercomRejectRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentIntercomRejectReply|null) => void
  ): UnaryResponse;
  agentIntercomCancel(
    requestMessage: api_v0alpha_acd_pb.AgentIntercomCancelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentIntercomCancelReply|null) => void
  ): UnaryResponse;
  agentIntercomCancel(
    requestMessage: api_v0alpha_acd_pb.AgentIntercomCancelRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentIntercomCancelReply|null) => void
  ): UnaryResponse;
  dialManualPrepare(
    requestMessage: api_v0alpha_acd_pb.DialManualPrepareRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.DialManualPrepareReply|null) => void
  ): UnaryResponse;
  dialManualPrepare(
    requestMessage: api_v0alpha_acd_pb.DialManualPrepareRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.DialManualPrepareReply|null) => void
  ): UnaryResponse;
  dialManualCancel(
    requestMessage: api_v0alpha_acd_pb.DialManualCancelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.DialManualCancelReply|null) => void
  ): UnaryResponse;
  dialManualCancel(
    requestMessage: api_v0alpha_acd_pb.DialManualCancelRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.DialManualCancelReply|null) => void
  ): UnaryResponse;
  dialPreviewPrepare(
    requestMessage: api_v0alpha_acd_pb.DialPreviewPrepareRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.DialPreviewPrepareReply|null) => void
  ): UnaryResponse;
  dialPreviewPrepare(
    requestMessage: api_v0alpha_acd_pb.DialPreviewPrepareRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.DialPreviewPrepareReply|null) => void
  ): UnaryResponse;
  agentPause(
    requestMessage: api_v0alpha_acd_pb.AgentPauseRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentPauseReply|null) => void
  ): UnaryResponse;
  agentPause(
    requestMessage: api_v0alpha_acd_pb.AgentPauseRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentPauseReply|null) => void
  ): UnaryResponse;
  agentSetReady(
    requestMessage: api_v0alpha_acd_pb.AgentSetReadyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentSetReadyReply|null) => void
  ): UnaryResponse;
  agentSetReady(
    requestMessage: api_v0alpha_acd_pb.AgentSetReadyRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentSetReadyReply|null) => void
  ): UnaryResponse;
  agentGUIBusy(
    requestMessage: api_v0alpha_acd_pb.AgentGUIBusyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentGUIBusyReply|null) => void
  ): UnaryResponse;
  agentGUIBusy(
    requestMessage: api_v0alpha_acd_pb.AgentGUIBusyRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentGUIBusyReply|null) => void
  ): UnaryResponse;
  reportAgentSessionEvent(
    requestMessage: api_v0alpha_acd_pb.AgentSessionEventReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentSessionEventRes|null) => void
  ): UnaryResponse;
  reportAgentSessionEvent(
    requestMessage: api_v0alpha_acd_pb.AgentSessionEventReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentSessionEventRes|null) => void
  ): UnaryResponse;
  callerRequeue(
    requestMessage: api_v0alpha_acd_pb.CallerRequeueRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.CallerRequeueReply|null) => void
  ): UnaryResponse;
  callerRequeue(
    requestMessage: api_v0alpha_acd_pb.CallerRequeueRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.CallerRequeueReply|null) => void
  ): UnaryResponse;
  agentDisconnect(
    requestMessage: api_v0alpha_acd_pb.AgentDisconnectRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentDisconnectReply|null) => void
  ): UnaryResponse;
  agentDisconnect(
    requestMessage: api_v0alpha_acd_pb.AgentDisconnectRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentDisconnectReply|null) => void
  ): UnaryResponse;
  transferWarmToOutboundCancel(
    requestMessage: api_v0alpha_acd_pb.TransferWarmToOutboundCancelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.TransferWarmToOutboundCancelReply|null) => void
  ): UnaryResponse;
  transferWarmToOutboundCancel(
    requestMessage: api_v0alpha_acd_pb.TransferWarmToOutboundCancelRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.TransferWarmToOutboundCancelReply|null) => void
  ): UnaryResponse;
  transferWarmToAgentCancel(
    requestMessage: api_v0alpha_acd_pb.TransferWarmToAgentCancelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.TransferWarmToAgentCancelReply|null) => void
  ): UnaryResponse;
  transferWarmToAgentCancel(
    requestMessage: api_v0alpha_acd_pb.TransferWarmToAgentCancelRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.TransferWarmToAgentCancelReply|null) => void
  ): UnaryResponse;
  transferWarmToOutboundApprove(
    requestMessage: api_v0alpha_acd_pb.TransferWarmToOutboundApproveRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.TransferWarmToOutboundApproveReply|null) => void
  ): UnaryResponse;
  transferWarmToOutboundApprove(
    requestMessage: api_v0alpha_acd_pb.TransferWarmToOutboundApproveRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.TransferWarmToOutboundApproveReply|null) => void
  ): UnaryResponse;
  transferWarmToAgentApprove(
    requestMessage: api_v0alpha_acd_pb.TransferWarmToAgentApproveRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.TransferWarmToAgentApproveReply|null) => void
  ): UnaryResponse;
  transferWarmToAgentApprove(
    requestMessage: api_v0alpha_acd_pb.TransferWarmToAgentApproveRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.TransferWarmToAgentApproveReply|null) => void
  ): UnaryResponse;
  callerSendToVoicemail(
    requestMessage: api_v0alpha_acd_pb.CallerSendToVoicemailRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.CallerSendToVoicemailReply|null) => void
  ): UnaryResponse;
  callerSendToVoicemail(
    requestMessage: api_v0alpha_acd_pb.CallerSendToVoicemailRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.CallerSendToVoicemailReply|null) => void
  ): UnaryResponse;
  agentInviteTransferCallerToConference(
    requestMessage: api_v0alpha_acd_pb.AgentInviteTransferCallerToConferenceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentInviteTransferCallerToConferenceReply|null) => void
  ): UnaryResponse;
  agentInviteTransferCallerToConference(
    requestMessage: api_v0alpha_acd_pb.AgentInviteTransferCallerToConferenceRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentInviteTransferCallerToConferenceReply|null) => void
  ): UnaryResponse;
  agentMonitorCalls(
    requestMessage: api_v0alpha_acd_pb.AgentMonitorCallsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentMonitorCallsReply|null) => void
  ): UnaryResponse;
  agentMonitorCalls(
    requestMessage: api_v0alpha_acd_pb.AgentMonitorCallsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentMonitorCallsReply|null) => void
  ): UnaryResponse;
  transferColdToOutbound(
    requestMessage: api_v0alpha_acd_pb.TransferColdToOutboundRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.TransferColdToOutboundReply|null) => void
  ): UnaryResponse;
  transferColdToOutbound(
    requestMessage: api_v0alpha_acd_pb.TransferColdToOutboundRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.TransferColdToOutboundReply|null) => void
  ): UnaryResponse;
  transferColdToAgent(
    requestMessage: api_v0alpha_acd_pb.TransferColdToAgentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.TransferColdToAgentReply|null) => void
  ): UnaryResponse;
  transferColdToAgent(
    requestMessage: api_v0alpha_acd_pb.TransferColdToAgentRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.TransferColdToAgentReply|null) => void
  ): UnaryResponse;
  transferWarmToOutboundStart(
    requestMessage: api_v0alpha_acd_pb.TransferWarmToOutboundStartRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.TransferWarmToOutboundStartReply|null) => void
  ): UnaryResponse;
  transferWarmToOutboundStart(
    requestMessage: api_v0alpha_acd_pb.TransferWarmToOutboundStartRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.TransferWarmToOutboundStartReply|null) => void
  ): UnaryResponse;
  createWarmOutboundTransferMember(
    requestMessage: api_v0alpha_acd_pb.CreateWarmOutboundTransferMemberRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.CreateWarmOutboundTransferMemberReply|null) => void
  ): UnaryResponse;
  createWarmOutboundTransferMember(
    requestMessage: api_v0alpha_acd_pb.CreateWarmOutboundTransferMemberRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.CreateWarmOutboundTransferMemberReply|null) => void
  ): UnaryResponse;
  removeTransferMember(
    requestMessage: api_v0alpha_acd_pb.RemoveTransferMemberRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.RemoveTransferMemberReply|null) => void
  ): UnaryResponse;
  removeTransferMember(
    requestMessage: api_v0alpha_acd_pb.RemoveTransferMemberRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.RemoveTransferMemberReply|null) => void
  ): UnaryResponse;
  transferWarmToAgentStart(
    requestMessage: api_v0alpha_acd_pb.TransferWarmToAgentStartRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.TransferWarmToAgentStartReply|null) => void
  ): UnaryResponse;
  transferWarmToAgentStart(
    requestMessage: api_v0alpha_acd_pb.TransferWarmToAgentStartRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.TransferWarmToAgentStartReply|null) => void
  ): UnaryResponse;
  agentGetCallFromHold(
    requestMessage: api_v0alpha_acd_pb.AgentGetCallFromHoldRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentGetCallFromHoldReply|null) => void
  ): UnaryResponse;
  agentGetCallFromHold(
    requestMessage: api_v0alpha_acd_pb.AgentGetCallFromHoldRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentGetCallFromHoldReply|null) => void
  ): UnaryResponse;
  agentGetSpecificCallFromHold(
    requestMessage: api_v0alpha_acd_pb.AgentGetSpecificCallFromHoldRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentGetSpecificCallFromHoldReply|null) => void
  ): UnaryResponse;
  agentGetSpecificCallFromHold(
    requestMessage: api_v0alpha_acd_pb.AgentGetSpecificCallFromHoldRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentGetSpecificCallFromHoldReply|null) => void
  ): UnaryResponse;
  aCDGetAllAgentsStatuses(
    requestMessage: api_v0alpha_acd_pb.ACDGetAllAgentsStatusesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.ACDGetAllAgentsStatusesReply|null) => void
  ): UnaryResponse;
  aCDGetAllAgentsStatuses(
    requestMessage: api_v0alpha_acd_pb.ACDGetAllAgentsStatusesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.ACDGetAllAgentsStatusesReply|null) => void
  ): UnaryResponse;
  agentPutCallOnHold(
    requestMessage: api_v0alpha_acd_pb.AgentPutCallOnHoldRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentPutCallOnHoldReply|null) => void
  ): UnaryResponse;
  agentPutCallOnHold(
    requestMessage: api_v0alpha_acd_pb.AgentPutCallOnHoldRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentPutCallOnHoldReply|null) => void
  ): UnaryResponse;
  agentReceiveMessage(
    requestMessage: api_v0alpha_acd_pb.AgentReceiveMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentReceiveMessageReply|null) => void
  ): UnaryResponse;
  agentReceiveMessage(
    requestMessage: api_v0alpha_acd_pb.AgentReceiveMessageRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentReceiveMessageReply|null) => void
  ): UnaryResponse;
  agentPBXApproveCall(
    requestMessage: api_v0alpha_acd_pb.AgentPBXApproveCallRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentPBXApproveCallReply|null) => void
  ): UnaryResponse;
  agentPBXApproveCall(
    requestMessage: api_v0alpha_acd_pb.AgentPBXApproveCallRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentPBXApproveCallReply|null) => void
  ): UnaryResponse;
  agentPBXRejectCall(
    requestMessage: api_v0alpha_acd_pb.AgentPBXRejectCallRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentPBXRejectCallReply|null) => void
  ): UnaryResponse;
  agentPBXRejectCall(
    requestMessage: api_v0alpha_acd_pb.AgentPBXRejectCallRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentPBXRejectCallReply|null) => void
  ): UnaryResponse;
  getCallerLostPeer(
    requestMessage: api_v0alpha_acd_pb.GetCallerLostPeerRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.GetCallerLostPeerReply|null) => void
  ): UnaryResponse;
  getCallerLostPeer(
    requestMessage: api_v0alpha_acd_pb.GetCallerLostPeerRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.GetCallerLostPeerReply|null) => void
  ): UnaryResponse;
  callerGetRawEvent(
    requestMessage: api_v0alpha_acd_pb.CallerGetRawEventRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.CallerGetRawEventReply|null) => void
  ): UnaryResponse;
  callerGetRawEvent(
    requestMessage: api_v0alpha_acd_pb.CallerGetRawEventRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.CallerGetRawEventReply|null) => void
  ): UnaryResponse;
  peerAgentWithCaller(
    requestMessage: api_v0alpha_acd_pb.PeerAgentWithCallerRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.PeerAgentWithCallerReply|null) => void
  ): UnaryResponse;
  peerAgentWithCaller(
    requestMessage: api_v0alpha_acd_pb.PeerAgentWithCallerRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.PeerAgentWithCallerReply|null) => void
  ): UnaryResponse;
  holdTransferMember(
    requestMessage: api_v0alpha_acd_pb.HoldTransferMemberReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.HoldTransferMemberRes|null) => void
  ): UnaryResponse;
  holdTransferMember(
    requestMessage: api_v0alpha_acd_pb.HoldTransferMemberReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.HoldTransferMemberRes|null) => void
  ): UnaryResponse;
  unholdTransferMember(
    requestMessage: api_v0alpha_acd_pb.UnholdTransferMemberReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.UnholdTransferMemberRes|null) => void
  ): UnaryResponse;
  unholdTransferMember(
    requestMessage: api_v0alpha_acd_pb.UnholdTransferMemberReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.UnholdTransferMemberRes|null) => void
  ): UnaryResponse;
  getAgentCallCounts(
    requestMessage: api_v0alpha_acd_pb.GetAgentCallCountsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.GetAgentCallCountsRes|null) => void
  ): UnaryResponse;
  getAgentCallCounts(
    requestMessage: api_v0alpha_acd_pb.GetAgentCallCountsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.GetAgentCallCountsRes|null) => void
  ): UnaryResponse;
  warmCallerTransferStart(
    requestMessage: api_v0alpha_acd_pb.WarmCallerTransferStartReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.WarmCallerTransferStartRes|null) => void
  ): UnaryResponse;
  warmCallerTransferStart(
    requestMessage: api_v0alpha_acd_pb.WarmCallerTransferStartReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.WarmCallerTransferStartRes|null) => void
  ): UnaryResponse;
  warmCallerTransferCancel(
    requestMessage: api_v0alpha_acd_pb.WarmCallerTransferCancelReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.WarmCallerTransferCancelRes|null) => void
  ): UnaryResponse;
  warmCallerTransferCancel(
    requestMessage: api_v0alpha_acd_pb.WarmCallerTransferCancelReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.WarmCallerTransferCancelRes|null) => void
  ): UnaryResponse;
  warmCallerTransferApprove(
    requestMessage: api_v0alpha_acd_pb.WarmCallerTransferApproveReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.WarmCallerTransferApproveRes|null) => void
  ): UnaryResponse;
  warmCallerTransferApprove(
    requestMessage: api_v0alpha_acd_pb.WarmCallerTransferApproveReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.WarmCallerTransferApproveRes|null) => void
  ): UnaryResponse;
  playSoundboardEntity(
    requestMessage: api_v0alpha_acd_pb.PlaySoundboardEntityReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.PlaySoundboardEntityRes|null) => void
  ): UnaryResponse;
  playSoundboardEntity(
    requestMessage: api_v0alpha_acd_pb.PlaySoundboardEntityReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.PlaySoundboardEntityRes|null) => void
  ): UnaryResponse;
  stopSoundboardEntity(
    requestMessage: api_v0alpha_acd_pb.StopSoundboardEntityReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.StopSoundboardEntityRes|null) => void
  ): UnaryResponse;
  stopSoundboardEntity(
    requestMessage: api_v0alpha_acd_pb.StopSoundboardEntityReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.StopSoundboardEntityRes|null) => void
  ): UnaryResponse;
  updateAgentSkills(
    requestMessage: api_v0alpha_acd_pb.UpdateAgentSkillsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.UpdateAgentSkillsReply|null) => void
  ): UnaryResponse;
  updateAgentSkills(
    requestMessage: api_v0alpha_acd_pb.UpdateAgentSkillsRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.UpdateAgentSkillsReply|null) => void
  ): UnaryResponse;
  playDTMF(
    requestMessage: api_v0alpha_acd_pb.PlayDTMFRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.PlayDTMFReply|null) => void
  ): UnaryResponse;
  playDTMF(
    requestMessage: api_v0alpha_acd_pb.PlayDTMFRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.PlayDTMFReply|null) => void
  ): UnaryResponse;
  agentMute(
    requestMessage: api_v0alpha_acd_pb.AgentMuteRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentMuteReply|null) => void
  ): UnaryResponse;
  agentMute(
    requestMessage: api_v0alpha_acd_pb.AgentMuteRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentMuteReply|null) => void
  ): UnaryResponse;
  agentUnmute(
    requestMessage: api_v0alpha_acd_pb.AgentUnmuteRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentUnmuteReply|null) => void
  ): UnaryResponse;
  agentUnmute(
    requestMessage: api_v0alpha_acd_pb.AgentUnmuteRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AgentUnmuteReply|null) => void
  ): UnaryResponse;
  startSecureForm(
    requestMessage: api_v0alpha_acd_pb.StartSecureFormReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.StartSecureFormRes|null) => void
  ): UnaryResponse;
  startSecureForm(
    requestMessage: api_v0alpha_acd_pb.StartSecureFormReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.StartSecureFormRes|null) => void
  ): UnaryResponse;
  collectSecureFormField(requestMessage: api_v0alpha_acd_pb.CollectSecureFormFieldReq, metadata?: grpc.Metadata): ResponseStream<api_v0alpha_acd_pb.CollectSecureFormFieldRes>;
  resetSecureFormField(
    requestMessage: api_v0alpha_acd_pb.ResetSecureFormFieldReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.ResetSecureFormFieldRes|null) => void
  ): UnaryResponse;
  resetSecureFormField(
    requestMessage: api_v0alpha_acd_pb.ResetSecureFormFieldReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.ResetSecureFormFieldRes|null) => void
  ): UnaryResponse;
  acceptSecureFormField(
    requestMessage: api_v0alpha_acd_pb.AcceptSecureFormFieldReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AcceptSecureFormFieldRes|null) => void
  ): UnaryResponse;
  acceptSecureFormField(
    requestMessage: api_v0alpha_acd_pb.AcceptSecureFormFieldReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.AcceptSecureFormFieldRes|null) => void
  ): UnaryResponse;
  processSecureForm(
    requestMessage: api_v0alpha_acd_pb.ProcessSecureFormReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.ProcessSecureFormRes|null) => void
  ): UnaryResponse;
  processSecureForm(
    requestMessage: api_v0alpha_acd_pb.ProcessSecureFormReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.ProcessSecureFormRes|null) => void
  ): UnaryResponse;
  finishSecureFormHandling(
    requestMessage: api_v0alpha_acd_pb.FinishSecureFormHandlingReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.FinishSecureFormHandlingRes|null) => void
  ): UnaryResponse;
  finishSecureFormHandling(
    requestMessage: api_v0alpha_acd_pb.FinishSecureFormHandlingReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.FinishSecureFormHandlingRes|null) => void
  ): UnaryResponse;
  populateWorkflowFields(
    requestMessage: api_v0alpha_acd_pb.PopulateWorkflowFieldsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.PopulateWorkflowFieldsRes|null) => void
  ): UnaryResponse;
  populateWorkflowFields(
    requestMessage: api_v0alpha_acd_pb.PopulateWorkflowFieldsReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.PopulateWorkflowFieldsRes|null) => void
  ): UnaryResponse;
  validateField(
    requestMessage: api_v0alpha_acd_pb.ValidateFieldReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.ValidateFieldRes|null) => void
  ): UnaryResponse;
  validateField(
    requestMessage: api_v0alpha_acd_pb.ValidateFieldReq,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.ValidateFieldRes|null) => void
  ): UnaryResponse;
  listAgentsVoiceStatuses(
    requestMessage: api_v0alpha_acd_pb.ListAgentsVoiceStatusesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.ListAgentsVoiceStatusesReply|null) => void
  ): UnaryResponse;
  listAgentsVoiceStatuses(
    requestMessage: api_v0alpha_acd_pb.ListAgentsVoiceStatusesRequest,
    callback: (error: ServiceError|null, responseMessage: api_v0alpha_acd_pb.ListAgentsVoiceStatusesReply|null) => void
  ): UnaryResponse;
}

