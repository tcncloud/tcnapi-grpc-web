// package: api.commons.audit
// file: api/commons/audit/audit.proto

import * as jspb from "google-protobuf";
import * as api_commons_audit_agent_training_events_pb from "../../../api/commons/audit/agent_training_events_pb";
import * as api_commons_audit_asm_events_pb from "../../../api/commons/audit/asm_events_pb";
import * as api_commons_audit_billing_events_pb from "../../../api/commons/audit/billing_events_pb";
import * as api_commons_audit_compliance_events_pb from "../../../api/commons/audit/compliance_events_pb";
import * as api_commons_audit_contactmanager_events_pb from "../../../api/commons/audit/contactmanager_events_pb";
import * as api_commons_audit_delivery_events_pb from "../../../api/commons/audit/delivery_events_pb";
import * as api_commons_audit_event_types_pb from "../../../api/commons/audit/event_types_pb";
import * as api_commons_audit_events_pb from "../../../api/commons/audit/events_pb";
import * as api_commons_audit_lms_events_pb from "../../../api/commons/audit/lms_events_pb";
import * as api_commons_audit_omnichannel_events_pb from "../../../api/commons/audit/omnichannel_events_pb";
import * as api_commons_audit_organization_events_pb from "../../../api/commons/audit/organization_events_pb";
import * as api_commons_audit_p3_amqp_events_pb from "../../../api/commons/audit/p3_amqp_events_pb";
import * as api_commons_audit_scorecards_events_pb from "../../../api/commons/audit/scorecards_events_pb";
import * as api_commons_audit_tickets_events_pb from "../../../api/commons/audit/tickets_events_pb";
import * as api_commons_audit_vana_events_pb from "../../../api/commons/audit/vana_events_pb";
import * as api_commons_audit_wfm_events_pb from "../../../api/commons/audit/wfm_events_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class AuditEvent extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getRegionId(): string;
  setRegionId(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  hasEventTime(): boolean;
  clearEventTime(): void;
  getEventTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEventTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getAuditId(): string;
  setAuditId(value: string): void;

  hasEffectiveTime(): boolean;
  clearEffectiveTime(): void;
  getEffectiveTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEffectiveTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getEventType(): api_commons_audit_event_types_pb.EventTypeMap[keyof api_commons_audit_event_types_pb.EventTypeMap];
  setEventType(value: api_commons_audit_event_types_pb.EventTypeMap[keyof api_commons_audit_event_types_pb.EventTypeMap]): void;

  hasDummyEvent(): boolean;
  clearDummyEvent(): void;
  getDummyEvent(): api_commons_audit_events_pb.DummyEvent | undefined;
  setDummyEvent(value?: api_commons_audit_events_pb.DummyEvent): void;

  hasVanaFlagEvent(): boolean;
  clearVanaFlagEvent(): void;
  getVanaFlagEvent(): api_commons_audit_vana_events_pb.VanaFlagEvent | undefined;
  setVanaFlagEvent(value?: api_commons_audit_vana_events_pb.VanaFlagEvent): void;

  hasVanaFlagReviewEvent(): boolean;
  clearVanaFlagReviewEvent(): void;
  getVanaFlagReviewEvent(): api_commons_audit_vana_events_pb.VanaFlagReviewEvent | undefined;
  setVanaFlagReviewEvent(value?: api_commons_audit_vana_events_pb.VanaFlagReviewEvent): void;

  hasVanaBillingReportEvent(): boolean;
  clearVanaBillingReportEvent(): void;
  getVanaBillingReportEvent(): api_commons_audit_vana_events_pb.VanaBillingReportEvent | undefined;
  setVanaBillingReportEvent(value?: api_commons_audit_vana_events_pb.VanaBillingReportEvent): void;

  hasVanaFlagSummaryEvent(): boolean;
  clearVanaFlagSummaryEvent(): void;
  getVanaFlagSummaryEvent(): api_commons_audit_vana_events_pb.VanaFlagSummaryEvent | undefined;
  setVanaFlagSummaryEvent(value?: api_commons_audit_vana_events_pb.VanaFlagSummaryEvent): void;

  hasVanaPhraseCorrectionEvent(): boolean;
  clearVanaPhraseCorrectionEvent(): void;
  getVanaPhraseCorrectionEvent(): api_commons_audit_vana_events_pb.VanaPhraseCorrectionEvent | undefined;
  setVanaPhraseCorrectionEvent(value?: api_commons_audit_vana_events_pb.VanaPhraseCorrectionEvent): void;

  hasVanaCreateTranscriptEvent(): boolean;
  clearVanaCreateTranscriptEvent(): void;
  getVanaCreateTranscriptEvent(): api_commons_audit_vana_events_pb.VanaCreateTranscriptEvent | undefined;
  setVanaCreateTranscriptEvent(value?: api_commons_audit_vana_events_pb.VanaCreateTranscriptEvent): void;

  hasVanaCreateSentimentEvent(): boolean;
  clearVanaCreateSentimentEvent(): void;
  getVanaCreateSentimentEvent(): api_commons_audit_vana_events_pb.VanaCreateSentimentEvent | undefined;
  setVanaCreateSentimentEvent(value?: api_commons_audit_vana_events_pb.VanaCreateSentimentEvent): void;

  hasVanaCreateSummaryEvent(): boolean;
  clearVanaCreateSummaryEvent(): void;
  getVanaCreateSummaryEvent(): api_commons_audit_vana_events_pb.VanaCreateSummaryEvent | undefined;
  setVanaCreateSummaryEvent(value?: api_commons_audit_vana_events_pb.VanaCreateSummaryEvent): void;

  hasOmnichannelCreateProjectEvent(): boolean;
  clearOmnichannelCreateProjectEvent(): void;
  getOmnichannelCreateProjectEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelCreateProjectEvent | undefined;
  setOmnichannelCreateProjectEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelCreateProjectEvent): void;

  hasOmnichannelCreateCampaignEvent(): boolean;
  clearOmnichannelCreateCampaignEvent(): void;
  getOmnichannelCreateCampaignEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelCreateCampaignEvent | undefined;
  setOmnichannelCreateCampaignEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelCreateCampaignEvent): void;

  hasOmnichannelDailyProjectReportEvent(): boolean;
  clearOmnichannelDailyProjectReportEvent(): void;
  getOmnichannelDailyProjectReportEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelDailyProjectReportEvent | undefined;
  setOmnichannelDailyProjectReportEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelDailyProjectReportEvent): void;

  hasOmnichannelDailyConversationReportEvent(): boolean;
  clearOmnichannelDailyConversationReportEvent(): void;
  getOmnichannelDailyConversationReportEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelDailyConversationReportEvent | undefined;
  setOmnichannelDailyConversationReportEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelDailyConversationReportEvent): void;

  hasOmnichannelAgentAssignConversationEvent(): boolean;
  clearOmnichannelAgentAssignConversationEvent(): void;
  getOmnichannelAgentAssignConversationEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelAgentAssignConversationEvent | undefined;
  setOmnichannelAgentAssignConversationEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelAgentAssignConversationEvent): void;

  hasOmnichannelAgentUnassignConversationEvent(): boolean;
  clearOmnichannelAgentUnassignConversationEvent(): void;
  getOmnichannelAgentUnassignConversationEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelAgentUnassignConversationEvent | undefined;
  setOmnichannelAgentUnassignConversationEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelAgentUnassignConversationEvent): void;

  hasOmnichannelAgentReassignConversationEvent(): boolean;
  clearOmnichannelAgentReassignConversationEvent(): void;
  getOmnichannelAgentReassignConversationEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelAgentReassignConversationEvent | undefined;
  setOmnichannelAgentReassignConversationEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelAgentReassignConversationEvent): void;

  hasOmnichannelT10Event(): boolean;
  clearOmnichannelT10Event(): void;
  getOmnichannelT10Event(): api_commons_audit_omnichannel_events_pb.OmnichannelT10Event | undefined;
  setOmnichannelT10Event(value?: api_commons_audit_omnichannel_events_pb.OmnichannelT10Event): void;

  hasOmnichannelCustomerTextMessageEvent(): boolean;
  clearOmnichannelCustomerTextMessageEvent(): void;
  getOmnichannelCustomerTextMessageEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelCustomerTextMessageEvent | undefined;
  setOmnichannelCustomerTextMessageEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelCustomerTextMessageEvent): void;

  hasOmnichannelAgentTextMessageEvent(): boolean;
  clearOmnichannelAgentTextMessageEvent(): void;
  getOmnichannelAgentTextMessageEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelAgentTextMessageEvent | undefined;
  setOmnichannelAgentTextMessageEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelAgentTextMessageEvent): void;

  hasOmnichannelFinishWrapUpEvent(): boolean;
  clearOmnichannelFinishWrapUpEvent(): void;
  getOmnichannelFinishWrapUpEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelFinishWrapUpEvent | undefined;
  setOmnichannelFinishWrapUpEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelFinishWrapUpEvent): void;

  hasOmnichannelBeginWrapUpEvent(): boolean;
  clearOmnichannelBeginWrapUpEvent(): void;
  getOmnichannelBeginWrapUpEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelBeginWrapUpEvent | undefined;
  setOmnichannelBeginWrapUpEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelBeginWrapUpEvent): void;

  hasOmnichannelT11Event(): boolean;
  clearOmnichannelT11Event(): void;
  getOmnichannelT11Event(): api_commons_audit_omnichannel_events_pb.OmnichannelT11Event | undefined;
  setOmnichannelT11Event(value?: api_commons_audit_omnichannel_events_pb.OmnichannelT11Event): void;

  hasOmnichannelCreateConversationEvent(): boolean;
  clearOmnichannelCreateConversationEvent(): void;
  getOmnichannelCreateConversationEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelCreateConversationEvent | undefined;
  setOmnichannelCreateConversationEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelCreateConversationEvent): void;

  hasOmnichannelAgentSuspendEvent(): boolean;
  clearOmnichannelAgentSuspendEvent(): void;
  getOmnichannelAgentSuspendEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelAgentSuspendEvent | undefined;
  setOmnichannelAgentSuspendEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelAgentSuspendEvent): void;

  hasOmnichannelCloseConversationEvent(): boolean;
  clearOmnichannelCloseConversationEvent(): void;
  getOmnichannelCloseConversationEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelCloseConversationEvent | undefined;
  setOmnichannelCloseConversationEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelCloseConversationEvent): void;

  hasOmnichannelManagerTextMessageEvent(): boolean;
  clearOmnichannelManagerTextMessageEvent(): void;
  getOmnichannelManagerTextMessageEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelManagerTextMessageEvent | undefined;
  setOmnichannelManagerTextMessageEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelManagerTextMessageEvent): void;

  hasOmnichannelUpdateCampaignEvent(): boolean;
  clearOmnichannelUpdateCampaignEvent(): void;
  getOmnichannelUpdateCampaignEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelUpdateCampaignEvent | undefined;
  setOmnichannelUpdateCampaignEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelUpdateCampaignEvent): void;

  hasOmnichannelSetConversationCollectedDataEvent(): boolean;
  clearOmnichannelSetConversationCollectedDataEvent(): void;
  getOmnichannelSetConversationCollectedDataEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelSetConversationCollectedDataEvent | undefined;
  setOmnichannelSetConversationCollectedDataEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelSetConversationCollectedDataEvent): void;

  hasOmnichannelCompleteCampaignEvent(): boolean;
  clearOmnichannelCompleteCampaignEvent(): void;
  getOmnichannelCompleteCampaignEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelCompleteCampaignEvent | undefined;
  setOmnichannelCompleteCampaignEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelCompleteCampaignEvent): void;

  hasOmnichannelArchiveCampaignEvent(): boolean;
  clearOmnichannelArchiveCampaignEvent(): void;
  getOmnichannelArchiveCampaignEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelArchiveCampaignEvent | undefined;
  setOmnichannelArchiveCampaignEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelArchiveCampaignEvent): void;

  hasOmnichannelPauseCampaignEvent(): boolean;
  clearOmnichannelPauseCampaignEvent(): void;
  getOmnichannelPauseCampaignEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelPauseCampaignEvent | undefined;
  setOmnichannelPauseCampaignEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelPauseCampaignEvent): void;

  hasOmnichannelResumeCampaignEvent(): boolean;
  clearOmnichannelResumeCampaignEvent(): void;
  getOmnichannelResumeCampaignEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelResumeCampaignEvent | undefined;
  setOmnichannelResumeCampaignEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelResumeCampaignEvent): void;

  hasOmnichannelStartCampaignEvent(): boolean;
  clearOmnichannelStartCampaignEvent(): void;
  getOmnichannelStartCampaignEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelStartCampaignEvent | undefined;
  setOmnichannelStartCampaignEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelStartCampaignEvent): void;

  hasOmnichannelScheduleModuleEvent(): boolean;
  clearOmnichannelScheduleModuleEvent(): void;
  getOmnichannelScheduleModuleEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelScheduleModuleEvent | undefined;
  setOmnichannelScheduleModuleEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelScheduleModuleEvent): void;

  hasOmnichannelStartModuleEvent(): boolean;
  clearOmnichannelStartModuleEvent(): void;
  getOmnichannelStartModuleEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelStartModuleEvent | undefined;
  setOmnichannelStartModuleEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelStartModuleEvent): void;

  hasOmnichannelPauseModuleEvent(): boolean;
  clearOmnichannelPauseModuleEvent(): void;
  getOmnichannelPauseModuleEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelPauseModuleEvent | undefined;
  setOmnichannelPauseModuleEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelPauseModuleEvent): void;

  hasOmnichannelResumeModuleEvent(): boolean;
  clearOmnichannelResumeModuleEvent(): void;
  getOmnichannelResumeModuleEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelResumeModuleEvent | undefined;
  setOmnichannelResumeModuleEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelResumeModuleEvent): void;

  hasOmnichannelErrorModuleEvent(): boolean;
  clearOmnichannelErrorModuleEvent(): void;
  getOmnichannelErrorModuleEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelErrorModuleEvent | undefined;
  setOmnichannelErrorModuleEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelErrorModuleEvent): void;

  hasOmnichannelSuccessModuleEvent(): boolean;
  clearOmnichannelSuccessModuleEvent(): void;
  getOmnichannelSuccessModuleEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelSuccessModuleEvent | undefined;
  setOmnichannelSuccessModuleEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelSuccessModuleEvent): void;

  hasOmnichannelFailModuleEvent(): boolean;
  clearOmnichannelFailModuleEvent(): void;
  getOmnichannelFailModuleEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelFailModuleEvent | undefined;
  setOmnichannelFailModuleEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelFailModuleEvent): void;

  hasOmnichannelCompleteModuleEvent(): boolean;
  clearOmnichannelCompleteModuleEvent(): void;
  getOmnichannelCompleteModuleEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelCompleteModuleEvent | undefined;
  setOmnichannelCompleteModuleEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelCompleteModuleEvent): void;

  hasOmnichannelArchiveModuleEvent(): boolean;
  clearOmnichannelArchiveModuleEvent(): void;
  getOmnichannelArchiveModuleEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelArchiveModuleEvent | undefined;
  setOmnichannelArchiveModuleEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelArchiveModuleEvent): void;

  hasOmnichannelUpdateModuleEvent(): boolean;
  clearOmnichannelUpdateModuleEvent(): void;
  getOmnichannelUpdateModuleEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelUpdateModuleEvent | undefined;
  setOmnichannelUpdateModuleEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelUpdateModuleEvent): void;

  hasOmnichannelAddSmsMessageSentModuleEvent(): boolean;
  clearOmnichannelAddSmsMessageSentModuleEvent(): void;
  getOmnichannelAddSmsMessageSentModuleEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelSmsMessageSentModuleEvent | undefined;
  setOmnichannelAddSmsMessageSentModuleEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelSmsMessageSentModuleEvent): void;

  hasOmnichannelModuleInitialReplyEvent(): boolean;
  clearOmnichannelModuleInitialReplyEvent(): void;
  getOmnichannelModuleInitialReplyEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelModuleInitialReplyEvent | undefined;
  setOmnichannelModuleInitialReplyEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelModuleInitialReplyEvent): void;

  hasOmnichannelTaskMessageSentEvent(): boolean;
  clearOmnichannelTaskMessageSentEvent(): void;
  getOmnichannelTaskMessageSentEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelTaskMessageSentEvent | undefined;
  setOmnichannelTaskMessageSentEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelTaskMessageSentEvent): void;

  hasOmnichannelConnectedInboxPollEvent(): boolean;
  clearOmnichannelConnectedInboxPollEvent(): void;
  getOmnichannelConnectedInboxPollEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelConnectedInboxPollEvent | undefined;
  setOmnichannelConnectedInboxPollEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelConnectedInboxPollEvent): void;

  hasOmnichannelConnectedInboxCreatedEvent(): boolean;
  clearOmnichannelConnectedInboxCreatedEvent(): void;
  getOmnichannelConnectedInboxCreatedEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelConnectedInboxCreatedEvent | undefined;
  setOmnichannelConnectedInboxCreatedEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelConnectedInboxCreatedEvent): void;

  hasOmnichannelAgentMessageUnitsEvent(): boolean;
  clearOmnichannelAgentMessageUnitsEvent(): void;
  getOmnichannelAgentMessageUnitsEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelAgentMessageUnitsEvent | undefined;
  setOmnichannelAgentMessageUnitsEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelAgentMessageUnitsEvent): void;

  hasOmnichannelManagerMessageUnitsEvent(): boolean;
  clearOmnichannelManagerMessageUnitsEvent(): void;
  getOmnichannelManagerMessageUnitsEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelManagerMessageUnitsEvent | undefined;
  setOmnichannelManagerMessageUnitsEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelManagerMessageUnitsEvent): void;

  hasOmnichannelCustomerMessageUnitsEvent(): boolean;
  clearOmnichannelCustomerMessageUnitsEvent(): void;
  getOmnichannelCustomerMessageUnitsEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelCustomerMessageUnitsEvent | undefined;
  setOmnichannelCustomerMessageUnitsEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelCustomerMessageUnitsEvent): void;

  hasOmnichannelSystemMessageUnitsEvent(): boolean;
  clearOmnichannelSystemMessageUnitsEvent(): void;
  getOmnichannelSystemMessageUnitsEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelSystemMessageUnitsEvent | undefined;
  setOmnichannelSystemMessageUnitsEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelSystemMessageUnitsEvent): void;

  hasOmnichannelPaymentLinkSentEvent(): boolean;
  clearOmnichannelPaymentLinkSentEvent(): void;
  getOmnichannelPaymentLinkSentEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelPaymentLinkSentEvent | undefined;
  setOmnichannelPaymentLinkSentEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelPaymentLinkSentEvent): void;

  hasOmnichannelManualApproveTaskAcceptedEvent(): boolean;
  clearOmnichannelManualApproveTaskAcceptedEvent(): void;
  getOmnichannelManualApproveTaskAcceptedEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelManualApproveTaskAcceptedEvent | undefined;
  setOmnichannelManualApproveTaskAcceptedEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelManualApproveTaskAcceptedEvent): void;

  hasOmnichannelManualApproveTaskRejectedEvent(): boolean;
  clearOmnichannelManualApproveTaskRejectedEvent(): void;
  getOmnichannelManualApproveTaskRejectedEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelManualApproveTaskRejectedEvent | undefined;
  setOmnichannelManualApproveTaskRejectedEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelManualApproveTaskRejectedEvent): void;

  hasOmnichannelManualApproveTaskTimeoutEvent(): boolean;
  clearOmnichannelManualApproveTaskTimeoutEvent(): void;
  getOmnichannelManualApproveTaskTimeoutEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelManualApproveTaskTimeoutEvent | undefined;
  setOmnichannelManualApproveTaskTimeoutEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelManualApproveTaskTimeoutEvent): void;

  hasOmnichannelManualApproveTaskRequeueEvent(): boolean;
  clearOmnichannelManualApproveTaskRequeueEvent(): void;
  getOmnichannelManualApproveTaskRequeueEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelManualApproveTaskRequeueEvent | undefined;
  setOmnichannelManualApproveTaskRequeueEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelManualApproveTaskRequeueEvent): void;

  hasOmnichannelTranscriptSavedEvent(): boolean;
  clearOmnichannelTranscriptSavedEvent(): void;
  getOmnichannelTranscriptSavedEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelTranscriptSavedEvent | undefined;
  setOmnichannelTranscriptSavedEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelTranscriptSavedEvent): void;

  hasOmnichannelMessageSentEvent(): boolean;
  clearOmnichannelMessageSentEvent(): void;
  getOmnichannelMessageSentEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelMessageSentEvent | undefined;
  setOmnichannelMessageSentEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelMessageSentEvent): void;

  hasOmnichannelProviderResponseEvent(): boolean;
  clearOmnichannelProviderResponseEvent(): void;
  getOmnichannelProviderResponseEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelProviderResponseEvent | undefined;
  setOmnichannelProviderResponseEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelProviderResponseEvent): void;

  hasOmnichannelProviderMessageFailedEvent(): boolean;
  clearOmnichannelProviderMessageFailedEvent(): void;
  getOmnichannelProviderMessageFailedEvent(): api_commons_audit_omnichannel_events_pb.OmnichannelProviderMessageFailedEvent | undefined;
  setOmnichannelProviderMessageFailedEvent(value?: api_commons_audit_omnichannel_events_pb.OmnichannelProviderMessageFailedEvent): void;

  hasAsmAgentLoginEvent(): boolean;
  clearAsmAgentLoginEvent(): void;
  getAsmAgentLoginEvent(): api_commons_audit_asm_events_pb.AsmAgentLoginEvent | undefined;
  setAsmAgentLoginEvent(value?: api_commons_audit_asm_events_pb.AsmAgentLoginEvent): void;

  hasAsmOpenVoiceEvent(): boolean;
  clearAsmOpenVoiceEvent(): void;
  getAsmOpenVoiceEvent(): api_commons_audit_asm_events_pb.AsmOpenVoiceEvent | undefined;
  setAsmOpenVoiceEvent(value?: api_commons_audit_asm_events_pb.AsmOpenVoiceEvent): void;

  hasAsmOpenOmniAgentEvent(): boolean;
  clearAsmOpenOmniAgentEvent(): void;
  getAsmOpenOmniAgentEvent(): api_commons_audit_asm_events_pb.AsmOpenOmniAgentEvent | undefined;
  setAsmOpenOmniAgentEvent(value?: api_commons_audit_asm_events_pb.AsmOpenOmniAgentEvent): void;

  hasAsmActivateConversationEvent(): boolean;
  clearAsmActivateConversationEvent(): void;
  getAsmActivateConversationEvent(): api_commons_audit_asm_events_pb.AsmActivateConversationEvent | undefined;
  setAsmActivateConversationEvent(value?: api_commons_audit_asm_events_pb.AsmActivateConversationEvent): void;

  hasAsmDeactivateConversationEvent(): boolean;
  clearAsmDeactivateConversationEvent(): void;
  getAsmDeactivateConversationEvent(): api_commons_audit_asm_events_pb.AsmDeactivateConversationEvent | undefined;
  setAsmDeactivateConversationEvent(value?: api_commons_audit_asm_events_pb.AsmDeactivateConversationEvent): void;

  hasAsmAgentStateChangedEvent(): boolean;
  clearAsmAgentStateChangedEvent(): void;
  getAsmAgentStateChangedEvent(): api_commons_audit_asm_events_pb.AsmAgentStateChangedEvent | undefined;
  setAsmAgentStateChangedEvent(value?: api_commons_audit_asm_events_pb.AsmAgentStateChangedEvent): void;

  hasAsmAgentLogoutEvent(): boolean;
  clearAsmAgentLogoutEvent(): void;
  getAsmAgentLogoutEvent(): api_commons_audit_asm_events_pb.AsmAgentLogoutEvent | undefined;
  setAsmAgentLogoutEvent(value?: api_commons_audit_asm_events_pb.AsmAgentLogoutEvent): void;

  hasAsmPauseEvent(): boolean;
  clearAsmPauseEvent(): void;
  getAsmPauseEvent(): api_commons_audit_asm_events_pb.AsmPauseEvent | undefined;
  setAsmPauseEvent(value?: api_commons_audit_asm_events_pb.AsmPauseEvent): void;

  hasAsmResumeEvent(): boolean;
  clearAsmResumeEvent(): void;
  getAsmResumeEvent(): api_commons_audit_asm_events_pb.AsmResumeEvent | undefined;
  setAsmResumeEvent(value?: api_commons_audit_asm_events_pb.AsmResumeEvent): void;

  hasAsmConversationPulledEvent(): boolean;
  clearAsmConversationPulledEvent(): void;
  getAsmConversationPulledEvent(): api_commons_audit_asm_events_pb.AsmConversationPulledEvent | undefined;
  setAsmConversationPulledEvent(value?: api_commons_audit_asm_events_pb.AsmConversationPulledEvent): void;

  hasScorecardsCreateQuestionEvent(): boolean;
  clearScorecardsCreateQuestionEvent(): void;
  getScorecardsCreateQuestionEvent(): api_commons_audit_scorecards_events_pb.ScorecardsCreateQuestionEvent | undefined;
  setScorecardsCreateQuestionEvent(value?: api_commons_audit_scorecards_events_pb.ScorecardsCreateQuestionEvent): void;

  hasScorecardsUpdateQuestionEvent(): boolean;
  clearScorecardsUpdateQuestionEvent(): void;
  getScorecardsUpdateQuestionEvent(): api_commons_audit_scorecards_events_pb.ScorecardsUpdateQuestionEvent | undefined;
  setScorecardsUpdateQuestionEvent(value?: api_commons_audit_scorecards_events_pb.ScorecardsUpdateQuestionEvent): void;

  hasScorecardsDeleteQuestionEvent(): boolean;
  clearScorecardsDeleteQuestionEvent(): void;
  getScorecardsDeleteQuestionEvent(): api_commons_audit_scorecards_events_pb.ScorecardsDeleteQuestionEvent | undefined;
  setScorecardsDeleteQuestionEvent(value?: api_commons_audit_scorecards_events_pb.ScorecardsDeleteQuestionEvent): void;

  hasScorecardsCreateScorecardEvent(): boolean;
  clearScorecardsCreateScorecardEvent(): void;
  getScorecardsCreateScorecardEvent(): api_commons_audit_scorecards_events_pb.ScorecardsCreateScorecardEvent | undefined;
  setScorecardsCreateScorecardEvent(value?: api_commons_audit_scorecards_events_pb.ScorecardsCreateScorecardEvent): void;

  hasScorecardsUpdateScorecardEvent(): boolean;
  clearScorecardsUpdateScorecardEvent(): void;
  getScorecardsUpdateScorecardEvent(): api_commons_audit_scorecards_events_pb.ScorecardsUpdateScorecardEvent | undefined;
  setScorecardsUpdateScorecardEvent(value?: api_commons_audit_scorecards_events_pb.ScorecardsUpdateScorecardEvent): void;

  hasScorecardsDeleteScorecardEvent(): boolean;
  clearScorecardsDeleteScorecardEvent(): void;
  getScorecardsDeleteScorecardEvent(): api_commons_audit_scorecards_events_pb.ScorecardsDeleteScorecardEvent | undefined;
  setScorecardsDeleteScorecardEvent(value?: api_commons_audit_scorecards_events_pb.ScorecardsDeleteScorecardEvent): void;

  hasScorecardsCloneScorecardEvent(): boolean;
  clearScorecardsCloneScorecardEvent(): void;
  getScorecardsCloneScorecardEvent(): api_commons_audit_scorecards_events_pb.ScorecardsCloneScorecardEvent | undefined;
  setScorecardsCloneScorecardEvent(value?: api_commons_audit_scorecards_events_pb.ScorecardsCloneScorecardEvent): void;

  hasScorecardsCreateEvaluationEvent(): boolean;
  clearScorecardsCreateEvaluationEvent(): void;
  getScorecardsCreateEvaluationEvent(): api_commons_audit_scorecards_events_pb.ScorecardsCreateEvaluationEvent | undefined;
  setScorecardsCreateEvaluationEvent(value?: api_commons_audit_scorecards_events_pb.ScorecardsCreateEvaluationEvent): void;

  hasScorecardsDeleteEvaluationEvent(): boolean;
  clearScorecardsDeleteEvaluationEvent(): void;
  getScorecardsDeleteEvaluationEvent(): api_commons_audit_scorecards_events_pb.ScorecardsDeleteEvaluationEvent | undefined;
  setScorecardsDeleteEvaluationEvent(value?: api_commons_audit_scorecards_events_pb.ScorecardsDeleteEvaluationEvent): void;

  hasScorecardsCreateSectionEvent(): boolean;
  clearScorecardsCreateSectionEvent(): void;
  getScorecardsCreateSectionEvent(): api_commons_audit_scorecards_events_pb.ScorecardsCreateSectionEvent | undefined;
  setScorecardsCreateSectionEvent(value?: api_commons_audit_scorecards_events_pb.ScorecardsCreateSectionEvent): void;

  hasScorecardsUpdateSectionEvent(): boolean;
  clearScorecardsUpdateSectionEvent(): void;
  getScorecardsUpdateSectionEvent(): api_commons_audit_scorecards_events_pb.ScorecardsUpdateSectionEvent | undefined;
  setScorecardsUpdateSectionEvent(value?: api_commons_audit_scorecards_events_pb.ScorecardsUpdateSectionEvent): void;

  hasScorecardsDeleteSectionEvent(): boolean;
  clearScorecardsDeleteSectionEvent(): void;
  getScorecardsDeleteSectionEvent(): api_commons_audit_scorecards_events_pb.ScorecardsDeleteSectionEvent | undefined;
  setScorecardsDeleteSectionEvent(value?: api_commons_audit_scorecards_events_pb.ScorecardsDeleteSectionEvent): void;

  hasScorecardsCreateCategoryEvent(): boolean;
  clearScorecardsCreateCategoryEvent(): void;
  getScorecardsCreateCategoryEvent(): api_commons_audit_scorecards_events_pb.ScorecardsCreateCategoryEvent | undefined;
  setScorecardsCreateCategoryEvent(value?: api_commons_audit_scorecards_events_pb.ScorecardsCreateCategoryEvent): void;

  hasScorecardsUpdateCategoryEvent(): boolean;
  clearScorecardsUpdateCategoryEvent(): void;
  getScorecardsUpdateCategoryEvent(): api_commons_audit_scorecards_events_pb.ScorecardsUpdateCategoryEvent | undefined;
  setScorecardsUpdateCategoryEvent(value?: api_commons_audit_scorecards_events_pb.ScorecardsUpdateCategoryEvent): void;

  hasScorecardsDeleteCategoryEvent(): boolean;
  clearScorecardsDeleteCategoryEvent(): void;
  getScorecardsDeleteCategoryEvent(): api_commons_audit_scorecards_events_pb.ScorecardsDeleteCategoryEvent | undefined;
  setScorecardsDeleteCategoryEvent(value?: api_commons_audit_scorecards_events_pb.ScorecardsDeleteCategoryEvent): void;

  hasScorecardsCreateEvaluationQuestionEvent(): boolean;
  clearScorecardsCreateEvaluationQuestionEvent(): void;
  getScorecardsCreateEvaluationQuestionEvent(): api_commons_audit_scorecards_events_pb.ScorecardsCreateEvaluationQuestionEvent | undefined;
  setScorecardsCreateEvaluationQuestionEvent(value?: api_commons_audit_scorecards_events_pb.ScorecardsCreateEvaluationQuestionEvent): void;

  hasScorecardsUpdateEvaluationQuestionEvent(): boolean;
  clearScorecardsUpdateEvaluationQuestionEvent(): void;
  getScorecardsUpdateEvaluationQuestionEvent(): api_commons_audit_scorecards_events_pb.ScorecardsUpdateEvaluationQuestionEvent | undefined;
  setScorecardsUpdateEvaluationQuestionEvent(value?: api_commons_audit_scorecards_events_pb.ScorecardsUpdateEvaluationQuestionEvent): void;

  hasScorecardsDeleteEvaluationQuestionEvent(): boolean;
  clearScorecardsDeleteEvaluationQuestionEvent(): void;
  getScorecardsDeleteEvaluationQuestionEvent(): api_commons_audit_scorecards_events_pb.ScorecardsDeleteEvaluationQuestionEvent | undefined;
  setScorecardsDeleteEvaluationQuestionEvent(value?: api_commons_audit_scorecards_events_pb.ScorecardsDeleteEvaluationQuestionEvent): void;

  hasScorecardsCreateScorecardQuestionEvent(): boolean;
  clearScorecardsCreateScorecardQuestionEvent(): void;
  getScorecardsCreateScorecardQuestionEvent(): api_commons_audit_scorecards_events_pb.ScorecardsCreateScorecardQuestionEvent | undefined;
  setScorecardsCreateScorecardQuestionEvent(value?: api_commons_audit_scorecards_events_pb.ScorecardsCreateScorecardQuestionEvent): void;

  hasScorecardsUpdateScorecardQuestionEvent(): boolean;
  clearScorecardsUpdateScorecardQuestionEvent(): void;
  getScorecardsUpdateScorecardQuestionEvent(): api_commons_audit_scorecards_events_pb.ScorecardsUpdateScorecardQuestionEvent | undefined;
  setScorecardsUpdateScorecardQuestionEvent(value?: api_commons_audit_scorecards_events_pb.ScorecardsUpdateScorecardQuestionEvent): void;

  hasScorecardsDeleteScorecardQuestionEvent(): boolean;
  clearScorecardsDeleteScorecardQuestionEvent(): void;
  getScorecardsDeleteScorecardQuestionEvent(): api_commons_audit_scorecards_events_pb.ScorecardsDeleteScorecardQuestionEvent | undefined;
  setScorecardsDeleteScorecardQuestionEvent(value?: api_commons_audit_scorecards_events_pb.ScorecardsDeleteScorecardQuestionEvent): void;

  hasScorecardsCreateAutoEvaluationEvent(): boolean;
  clearScorecardsCreateAutoEvaluationEvent(): void;
  getScorecardsCreateAutoEvaluationEvent(): api_commons_audit_scorecards_events_pb.ScorecardsCreateAutoEvaluationEvent | undefined;
  setScorecardsCreateAutoEvaluationEvent(value?: api_commons_audit_scorecards_events_pb.ScorecardsCreateAutoEvaluationEvent): void;

  hasScorecardsUpdateEvaluationEvent(): boolean;
  clearScorecardsUpdateEvaluationEvent(): void;
  getScorecardsUpdateEvaluationEvent(): api_commons_audit_scorecards_events_pb.ScorecardsUpdateEvaluationEvent | undefined;
  setScorecardsUpdateEvaluationEvent(value?: api_commons_audit_scorecards_events_pb.ScorecardsUpdateEvaluationEvent): void;

  hasScorecardsCreateSmartEvaluationEvent(): boolean;
  clearScorecardsCreateSmartEvaluationEvent(): void;
  getScorecardsCreateSmartEvaluationEvent(): api_commons_audit_scorecards_events_pb.ScorecardsCreateSmartEvaluationEvent | undefined;
  setScorecardsCreateSmartEvaluationEvent(value?: api_commons_audit_scorecards_events_pb.ScorecardsCreateSmartEvaluationEvent): void;

  hasTicketEvent(): boolean;
  clearTicketEvent(): void;
  getTicketEvent(): api_commons_audit_tickets_events_pb.TicketEvent | undefined;
  setTicketEvent(value?: api_commons_audit_tickets_events_pb.TicketEvent): void;

  hasTicketCustomFieldCreateEvent(): boolean;
  clearTicketCustomFieldCreateEvent(): void;
  getTicketCustomFieldCreateEvent(): api_commons_audit_tickets_events_pb.TicketCustomFieldCreateEvent | undefined;
  setTicketCustomFieldCreateEvent(value?: api_commons_audit_tickets_events_pb.TicketCustomFieldCreateEvent): void;

  hasTicketCustomFieldEditEvent(): boolean;
  clearTicketCustomFieldEditEvent(): void;
  getTicketCustomFieldEditEvent(): api_commons_audit_tickets_events_pb.TicketCustomFieldEditEvent | undefined;
  setTicketCustomFieldEditEvent(value?: api_commons_audit_tickets_events_pb.TicketCustomFieldEditEvent): void;

  hasComplianceRndQueryEvent(): boolean;
  clearComplianceRndQueryEvent(): void;
  getComplianceRndQueryEvent(): api_commons_audit_compliance_events_pb.ComplianceRndQueryEvent | undefined;
  setComplianceRndQueryEvent(value?: api_commons_audit_compliance_events_pb.ComplianceRndQueryEvent): void;

  hasComplianceRndQueryCachedEvent(): boolean;
  clearComplianceRndQueryCachedEvent(): void;
  getComplianceRndQueryCachedEvent(): api_commons_audit_compliance_events_pb.ComplianceRndQueryEvent | undefined;
  setComplianceRndQueryCachedEvent(value?: api_commons_audit_compliance_events_pb.ComplianceRndQueryEvent): void;

  hasAgentTrainingCreateLearningOpportunityEvent(): boolean;
  clearAgentTrainingCreateLearningOpportunityEvent(): void;
  getAgentTrainingCreateLearningOpportunityEvent(): api_commons_audit_agent_training_events_pb.AgentTrainingCreateLearningOpportunityEvent | undefined;
  setAgentTrainingCreateLearningOpportunityEvent(value?: api_commons_audit_agent_training_events_pb.AgentTrainingCreateLearningOpportunityEvent): void;

  hasLmsPipelineFailureEvent(): boolean;
  clearLmsPipelineFailureEvent(): void;
  getLmsPipelineFailureEvent(): api_commons_audit_lms_events_pb.LMSPipelineFailureEvent | undefined;
  setLmsPipelineFailureEvent(value?: api_commons_audit_lms_events_pb.LMSPipelineFailureEvent): void;

  hasLmsPipelineNoOutputEvent(): boolean;
  clearLmsPipelineNoOutputEvent(): void;
  getLmsPipelineNoOutputEvent(): api_commons_audit_lms_events_pb.LMSPipelineNoOutputEvent | undefined;
  setLmsPipelineNoOutputEvent(value?: api_commons_audit_lms_events_pb.LMSPipelineNoOutputEvent): void;

  hasLmsPipelineSuccessfulEvent(): boolean;
  clearLmsPipelineSuccessfulEvent(): void;
  getLmsPipelineSuccessfulEvent(): api_commons_audit_lms_events_pb.LMSPipelineSuccessfulEvent | undefined;
  setLmsPipelineSuccessfulEvent(value?: api_commons_audit_lms_events_pb.LMSPipelineSuccessfulEvent): void;

  hasBillingCommitBillingPlanEvent(): boolean;
  clearBillingCommitBillingPlanEvent(): void;
  getBillingCommitBillingPlanEvent(): api_commons_audit_billing_events_pb.BillingCommitBillingPlanEvent | undefined;
  setBillingCommitBillingPlanEvent(value?: api_commons_audit_billing_events_pb.BillingCommitBillingPlanEvent): void;

  hasBillingCreateBillingPlanEvent(): boolean;
  clearBillingCreateBillingPlanEvent(): void;
  getBillingCreateBillingPlanEvent(): api_commons_audit_billing_events_pb.BillingCreateBillingPlanEvent | undefined;
  setBillingCreateBillingPlanEvent(value?: api_commons_audit_billing_events_pb.BillingCreateBillingPlanEvent): void;

  hasBillingCreateInvoiceEvent(): boolean;
  clearBillingCreateInvoiceEvent(): void;
  getBillingCreateInvoiceEvent(): api_commons_audit_billing_events_pb.BillingCreateInvoiceEvent | undefined;
  setBillingCreateInvoiceEvent(value?: api_commons_audit_billing_events_pb.BillingCreateInvoiceEvent): void;

  hasBillingCreateRateDefinitionEvent(): boolean;
  clearBillingCreateRateDefinitionEvent(): void;
  getBillingCreateRateDefinitionEvent(): api_commons_audit_billing_events_pb.BillingCreateRateDefinitionEvent | undefined;
  setBillingCreateRateDefinitionEvent(value?: api_commons_audit_billing_events_pb.BillingCreateRateDefinitionEvent): void;

  hasBillingDeleteBillingPlanEvent(): boolean;
  clearBillingDeleteBillingPlanEvent(): void;
  getBillingDeleteBillingPlanEvent(): api_commons_audit_billing_events_pb.BillingDeleteBillingPlanEvent | undefined;
  setBillingDeleteBillingPlanEvent(value?: api_commons_audit_billing_events_pb.BillingDeleteBillingPlanEvent): void;

  hasBillingDeleteInvoiceEvent(): boolean;
  clearBillingDeleteInvoiceEvent(): void;
  getBillingDeleteInvoiceEvent(): api_commons_audit_billing_events_pb.BillingDeleteInvoiceEvent | undefined;
  setBillingDeleteInvoiceEvent(value?: api_commons_audit_billing_events_pb.BillingDeleteInvoiceEvent): void;

  hasBillingDeleteRateDefinitionEvent(): boolean;
  clearBillingDeleteRateDefinitionEvent(): void;
  getBillingDeleteRateDefinitionEvent(): api_commons_audit_billing_events_pb.BillingDeleteRateDefinitionEvent | undefined;
  setBillingDeleteRateDefinitionEvent(value?: api_commons_audit_billing_events_pb.BillingDeleteRateDefinitionEvent): void;

  hasBillingExportInvoiceEvent(): boolean;
  clearBillingExportInvoiceEvent(): void;
  getBillingExportInvoiceEvent(): api_commons_audit_billing_events_pb.BillingExportInvoiceEvent | undefined;
  setBillingExportInvoiceEvent(value?: api_commons_audit_billing_events_pb.BillingExportInvoiceEvent): void;

  hasBillingUpdateBillingPlanEvent(): boolean;
  clearBillingUpdateBillingPlanEvent(): void;
  getBillingUpdateBillingPlanEvent(): api_commons_audit_billing_events_pb.BillingUpdateBillingPlanEvent | undefined;
  setBillingUpdateBillingPlanEvent(value?: api_commons_audit_billing_events_pb.BillingUpdateBillingPlanEvent): void;

  hasBillingUpdateInvoiceEvent(): boolean;
  clearBillingUpdateInvoiceEvent(): void;
  getBillingUpdateInvoiceEvent(): api_commons_audit_billing_events_pb.BillingUpdateInvoiceEvent | undefined;
  setBillingUpdateInvoiceEvent(value?: api_commons_audit_billing_events_pb.BillingUpdateInvoiceEvent): void;

  hasBillingUpdateRateDefinitionEvent(): boolean;
  clearBillingUpdateRateDefinitionEvent(): void;
  getBillingUpdateRateDefinitionEvent(): api_commons_audit_billing_events_pb.BillingUpdateRateDefinitionEvent | undefined;
  setBillingUpdateRateDefinitionEvent(value?: api_commons_audit_billing_events_pb.BillingUpdateRateDefinitionEvent): void;

  hasBillingRatedItemsGeneratedEvent(): boolean;
  clearBillingRatedItemsGeneratedEvent(): void;
  getBillingRatedItemsGeneratedEvent(): api_commons_audit_billing_events_pb.BillingRatedItemsGeneratedEvent | undefined;
  setBillingRatedItemsGeneratedEvent(value?: api_commons_audit_billing_events_pb.BillingRatedItemsGeneratedEvent): void;

  hasBillingAccumulateItemsEvent(): boolean;
  clearBillingAccumulateItemsEvent(): void;
  getBillingAccumulateItemsEvent(): api_commons_audit_billing_events_pb.BillingAccumulateItemsEvent | undefined;
  setBillingAccumulateItemsEvent(value?: api_commons_audit_billing_events_pb.BillingAccumulateItemsEvent): void;

  hasDeliveryFailureEvent(): boolean;
  clearDeliveryFailureEvent(): void;
  getDeliveryFailureEvent(): api_commons_audit_delivery_events_pb.DeliveryFailureEvent | undefined;
  setDeliveryFailureEvent(value?: api_commons_audit_delivery_events_pb.DeliveryFailureEvent): void;

  hasDeliverySuccessEvent(): boolean;
  clearDeliverySuccessEvent(): void;
  getDeliverySuccessEvent(): api_commons_audit_delivery_events_pb.DeliverySuccessEvent | undefined;
  setDeliverySuccessEvent(value?: api_commons_audit_delivery_events_pb.DeliverySuccessEvent): void;

  hasContactManagerEntryAddEvent(): boolean;
  clearContactManagerEntryAddEvent(): void;
  getContactManagerEntryAddEvent(): api_commons_audit_contactmanager_events_pb.ContactManagerEntryAddEvent | undefined;
  setContactManagerEntryAddEvent(value?: api_commons_audit_contactmanager_events_pb.ContactManagerEntryAddEvent): void;

  hasContactManagerEntryGetEncEvent(): boolean;
  clearContactManagerEntryGetEncEvent(): void;
  getContactManagerEntryGetEncEvent(): api_commons_audit_contactmanager_events_pb.ContactManagerEntryGetEncEvent | undefined;
  setContactManagerEntryGetEncEvent(value?: api_commons_audit_contactmanager_events_pb.ContactManagerEntryGetEncEvent): void;

  hasContactManagerDeleteEvent(): boolean;
  clearContactManagerDeleteEvent(): void;
  getContactManagerDeleteEvent(): api_commons_audit_contactmanager_events_pb.ContactManagerDeleteEvent | undefined;
  setContactManagerDeleteEvent(value?: api_commons_audit_contactmanager_events_pb.ContactManagerDeleteEvent): void;

  hasContactManagerKycEvent(): boolean;
  clearContactManagerKycEvent(): void;
  getContactManagerKycEvent(): api_commons_audit_contactmanager_events_pb.ContactManagerKycEvent | undefined;
  setContactManagerKycEvent(value?: api_commons_audit_contactmanager_events_pb.ContactManagerKycEvent): void;

  hasContactManagerEntryEditEvent(): boolean;
  clearContactManagerEntryEditEvent(): void;
  getContactManagerEntryEditEvent(): api_commons_audit_contactmanager_events_pb.ContactManagerEntryEditEvent | undefined;
  setContactManagerEntryEditEvent(value?: api_commons_audit_contactmanager_events_pb.ContactManagerEntryEditEvent): void;

  hasContactManagerListUploadEvent(): boolean;
  clearContactManagerListUploadEvent(): void;
  getContactManagerListUploadEvent(): api_commons_audit_contactmanager_events_pb.ContactManagerListUploadEvent | undefined;
  setContactManagerListUploadEvent(value?: api_commons_audit_contactmanager_events_pb.ContactManagerListUploadEvent): void;

  hasContactManagerKycVerificationEvent(): boolean;
  clearContactManagerKycVerificationEvent(): void;
  getContactManagerKycVerificationEvent(): api_commons_audit_contactmanager_events_pb.ContactManagerKycEvent | undefined;
  setContactManagerKycVerificationEvent(value?: api_commons_audit_contactmanager_events_pb.ContactManagerKycEvent): void;

  hasContactManagerEntryDeleteEvent(): boolean;
  clearContactManagerEntryDeleteEvent(): void;
  getContactManagerEntryDeleteEvent(): api_commons_audit_contactmanager_events_pb.ContactManagerDeleteEvent | undefined;
  setContactManagerEntryDeleteEvent(value?: api_commons_audit_contactmanager_events_pb.ContactManagerDeleteEvent): void;

  hasContactManagerEntryExpungeEvent(): boolean;
  clearContactManagerEntryExpungeEvent(): void;
  getContactManagerEntryExpungeEvent(): api_commons_audit_contactmanager_events_pb.ContactManagerDeleteEvent | undefined;
  setContactManagerEntryExpungeEvent(value?: api_commons_audit_contactmanager_events_pb.ContactManagerDeleteEvent): void;

  hasContactManagerEntityAssociationEvent(): boolean;
  clearContactManagerEntityAssociationEvent(): void;
  getContactManagerEntityAssociationEvent(): api_commons_audit_contactmanager_events_pb.ContactManagerEntityAssociationEvent | undefined;
  setContactManagerEntityAssociationEvent(value?: api_commons_audit_contactmanager_events_pb.ContactManagerEntityAssociationEvent): void;

  hasAccessTokensExpiringEvent(): boolean;
  clearAccessTokensExpiringEvent(): void;
  getAccessTokensExpiringEvent(): api_commons_audit_organization_events_pb.AccessTokensExpiringEvent | undefined;
  setAccessTokensExpiringEvent(value?: api_commons_audit_organization_events_pb.AccessTokensExpiringEvent): void;

  hasWfmPublishScheduleEvent(): boolean;
  clearWfmPublishScheduleEvent(): void;
  getWfmPublishScheduleEvent(): api_commons_audit_wfm_events_pb.WFMPublishScheduleEvent | undefined;
  setWfmPublishScheduleEvent(value?: api_commons_audit_wfm_events_pb.WFMPublishScheduleEvent): void;

  hasP3AmqpCallResultEvent(): boolean;
  clearP3AmqpCallResultEvent(): void;
  getP3AmqpCallResultEvent(): api_commons_audit_p3_amqp_events_pb.P3AMQPCallResultEvent | undefined;
  setP3AmqpCallResultEvent(value?: api_commons_audit_p3_amqp_events_pb.P3AMQPCallResultEvent): void;

  hasP3AmqpAgentResponseEvent(): boolean;
  clearP3AmqpAgentResponseEvent(): void;
  getP3AmqpAgentResponseEvent(): api_commons_audit_p3_amqp_events_pb.P3AMQPAgentResponseEvent | undefined;
  setP3AmqpAgentResponseEvent(value?: api_commons_audit_p3_amqp_events_pb.P3AMQPAgentResponseEvent): void;

  getEventCase(): AuditEvent.EventCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditEvent.AsObject;
  static toObject(includeInstance: boolean, msg: AuditEvent): AuditEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditEvent;
  static deserializeBinaryFromReader(message: AuditEvent, reader: jspb.BinaryReader): AuditEvent;
}

export namespace AuditEvent {
  export type AsObject = {
    orgId: string,
    regionId: string,
    clusterId: string,
    eventTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    auditId: string,
    effectiveTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    eventType: api_commons_audit_event_types_pb.EventTypeMap[keyof api_commons_audit_event_types_pb.EventTypeMap],
    dummyEvent?: api_commons_audit_events_pb.DummyEvent.AsObject,
    vanaFlagEvent?: api_commons_audit_vana_events_pb.VanaFlagEvent.AsObject,
    vanaFlagReviewEvent?: api_commons_audit_vana_events_pb.VanaFlagReviewEvent.AsObject,
    vanaBillingReportEvent?: api_commons_audit_vana_events_pb.VanaBillingReportEvent.AsObject,
    vanaFlagSummaryEvent?: api_commons_audit_vana_events_pb.VanaFlagSummaryEvent.AsObject,
    vanaPhraseCorrectionEvent?: api_commons_audit_vana_events_pb.VanaPhraseCorrectionEvent.AsObject,
    vanaCreateTranscriptEvent?: api_commons_audit_vana_events_pb.VanaCreateTranscriptEvent.AsObject,
    vanaCreateSentimentEvent?: api_commons_audit_vana_events_pb.VanaCreateSentimentEvent.AsObject,
    vanaCreateSummaryEvent?: api_commons_audit_vana_events_pb.VanaCreateSummaryEvent.AsObject,
    omnichannelCreateProjectEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelCreateProjectEvent.AsObject,
    omnichannelCreateCampaignEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelCreateCampaignEvent.AsObject,
    omnichannelDailyProjectReportEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelDailyProjectReportEvent.AsObject,
    omnichannelDailyConversationReportEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelDailyConversationReportEvent.AsObject,
    omnichannelAgentAssignConversationEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelAgentAssignConversationEvent.AsObject,
    omnichannelAgentUnassignConversationEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelAgentUnassignConversationEvent.AsObject,
    omnichannelAgentReassignConversationEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelAgentReassignConversationEvent.AsObject,
    omnichannelT10Event?: api_commons_audit_omnichannel_events_pb.OmnichannelT10Event.AsObject,
    omnichannelCustomerTextMessageEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelCustomerTextMessageEvent.AsObject,
    omnichannelAgentTextMessageEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelAgentTextMessageEvent.AsObject,
    omnichannelFinishWrapUpEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelFinishWrapUpEvent.AsObject,
    omnichannelBeginWrapUpEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelBeginWrapUpEvent.AsObject,
    omnichannelT11Event?: api_commons_audit_omnichannel_events_pb.OmnichannelT11Event.AsObject,
    omnichannelCreateConversationEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelCreateConversationEvent.AsObject,
    omnichannelAgentSuspendEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelAgentSuspendEvent.AsObject,
    omnichannelCloseConversationEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelCloseConversationEvent.AsObject,
    omnichannelManagerTextMessageEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelManagerTextMessageEvent.AsObject,
    omnichannelUpdateCampaignEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelUpdateCampaignEvent.AsObject,
    omnichannelSetConversationCollectedDataEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelSetConversationCollectedDataEvent.AsObject,
    omnichannelCompleteCampaignEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelCompleteCampaignEvent.AsObject,
    omnichannelArchiveCampaignEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelArchiveCampaignEvent.AsObject,
    omnichannelPauseCampaignEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelPauseCampaignEvent.AsObject,
    omnichannelResumeCampaignEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelResumeCampaignEvent.AsObject,
    omnichannelStartCampaignEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelStartCampaignEvent.AsObject,
    omnichannelScheduleModuleEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelScheduleModuleEvent.AsObject,
    omnichannelStartModuleEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelStartModuleEvent.AsObject,
    omnichannelPauseModuleEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelPauseModuleEvent.AsObject,
    omnichannelResumeModuleEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelResumeModuleEvent.AsObject,
    omnichannelErrorModuleEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelErrorModuleEvent.AsObject,
    omnichannelSuccessModuleEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelSuccessModuleEvent.AsObject,
    omnichannelFailModuleEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelFailModuleEvent.AsObject,
    omnichannelCompleteModuleEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelCompleteModuleEvent.AsObject,
    omnichannelArchiveModuleEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelArchiveModuleEvent.AsObject,
    omnichannelUpdateModuleEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelUpdateModuleEvent.AsObject,
    omnichannelAddSmsMessageSentModuleEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelSmsMessageSentModuleEvent.AsObject,
    omnichannelModuleInitialReplyEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelModuleInitialReplyEvent.AsObject,
    omnichannelTaskMessageSentEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelTaskMessageSentEvent.AsObject,
    omnichannelConnectedInboxPollEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelConnectedInboxPollEvent.AsObject,
    omnichannelConnectedInboxCreatedEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelConnectedInboxCreatedEvent.AsObject,
    omnichannelAgentMessageUnitsEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelAgentMessageUnitsEvent.AsObject,
    omnichannelManagerMessageUnitsEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelManagerMessageUnitsEvent.AsObject,
    omnichannelCustomerMessageUnitsEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelCustomerMessageUnitsEvent.AsObject,
    omnichannelSystemMessageUnitsEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelSystemMessageUnitsEvent.AsObject,
    omnichannelPaymentLinkSentEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelPaymentLinkSentEvent.AsObject,
    omnichannelManualApproveTaskAcceptedEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelManualApproveTaskAcceptedEvent.AsObject,
    omnichannelManualApproveTaskRejectedEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelManualApproveTaskRejectedEvent.AsObject,
    omnichannelManualApproveTaskTimeoutEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelManualApproveTaskTimeoutEvent.AsObject,
    omnichannelManualApproveTaskRequeueEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelManualApproveTaskRequeueEvent.AsObject,
    omnichannelTranscriptSavedEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelTranscriptSavedEvent.AsObject,
    omnichannelMessageSentEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelMessageSentEvent.AsObject,
    omnichannelProviderResponseEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelProviderResponseEvent.AsObject,
    omnichannelProviderMessageFailedEvent?: api_commons_audit_omnichannel_events_pb.OmnichannelProviderMessageFailedEvent.AsObject,
    asmAgentLoginEvent?: api_commons_audit_asm_events_pb.AsmAgentLoginEvent.AsObject,
    asmOpenVoiceEvent?: api_commons_audit_asm_events_pb.AsmOpenVoiceEvent.AsObject,
    asmOpenOmniAgentEvent?: api_commons_audit_asm_events_pb.AsmOpenOmniAgentEvent.AsObject,
    asmActivateConversationEvent?: api_commons_audit_asm_events_pb.AsmActivateConversationEvent.AsObject,
    asmDeactivateConversationEvent?: api_commons_audit_asm_events_pb.AsmDeactivateConversationEvent.AsObject,
    asmAgentStateChangedEvent?: api_commons_audit_asm_events_pb.AsmAgentStateChangedEvent.AsObject,
    asmAgentLogoutEvent?: api_commons_audit_asm_events_pb.AsmAgentLogoutEvent.AsObject,
    asmPauseEvent?: api_commons_audit_asm_events_pb.AsmPauseEvent.AsObject,
    asmResumeEvent?: api_commons_audit_asm_events_pb.AsmResumeEvent.AsObject,
    asmConversationPulledEvent?: api_commons_audit_asm_events_pb.AsmConversationPulledEvent.AsObject,
    scorecardsCreateQuestionEvent?: api_commons_audit_scorecards_events_pb.ScorecardsCreateQuestionEvent.AsObject,
    scorecardsUpdateQuestionEvent?: api_commons_audit_scorecards_events_pb.ScorecardsUpdateQuestionEvent.AsObject,
    scorecardsDeleteQuestionEvent?: api_commons_audit_scorecards_events_pb.ScorecardsDeleteQuestionEvent.AsObject,
    scorecardsCreateScorecardEvent?: api_commons_audit_scorecards_events_pb.ScorecardsCreateScorecardEvent.AsObject,
    scorecardsUpdateScorecardEvent?: api_commons_audit_scorecards_events_pb.ScorecardsUpdateScorecardEvent.AsObject,
    scorecardsDeleteScorecardEvent?: api_commons_audit_scorecards_events_pb.ScorecardsDeleteScorecardEvent.AsObject,
    scorecardsCloneScorecardEvent?: api_commons_audit_scorecards_events_pb.ScorecardsCloneScorecardEvent.AsObject,
    scorecardsCreateEvaluationEvent?: api_commons_audit_scorecards_events_pb.ScorecardsCreateEvaluationEvent.AsObject,
    scorecardsDeleteEvaluationEvent?: api_commons_audit_scorecards_events_pb.ScorecardsDeleteEvaluationEvent.AsObject,
    scorecardsCreateSectionEvent?: api_commons_audit_scorecards_events_pb.ScorecardsCreateSectionEvent.AsObject,
    scorecardsUpdateSectionEvent?: api_commons_audit_scorecards_events_pb.ScorecardsUpdateSectionEvent.AsObject,
    scorecardsDeleteSectionEvent?: api_commons_audit_scorecards_events_pb.ScorecardsDeleteSectionEvent.AsObject,
    scorecardsCreateCategoryEvent?: api_commons_audit_scorecards_events_pb.ScorecardsCreateCategoryEvent.AsObject,
    scorecardsUpdateCategoryEvent?: api_commons_audit_scorecards_events_pb.ScorecardsUpdateCategoryEvent.AsObject,
    scorecardsDeleteCategoryEvent?: api_commons_audit_scorecards_events_pb.ScorecardsDeleteCategoryEvent.AsObject,
    scorecardsCreateEvaluationQuestionEvent?: api_commons_audit_scorecards_events_pb.ScorecardsCreateEvaluationQuestionEvent.AsObject,
    scorecardsUpdateEvaluationQuestionEvent?: api_commons_audit_scorecards_events_pb.ScorecardsUpdateEvaluationQuestionEvent.AsObject,
    scorecardsDeleteEvaluationQuestionEvent?: api_commons_audit_scorecards_events_pb.ScorecardsDeleteEvaluationQuestionEvent.AsObject,
    scorecardsCreateScorecardQuestionEvent?: api_commons_audit_scorecards_events_pb.ScorecardsCreateScorecardQuestionEvent.AsObject,
    scorecardsUpdateScorecardQuestionEvent?: api_commons_audit_scorecards_events_pb.ScorecardsUpdateScorecardQuestionEvent.AsObject,
    scorecardsDeleteScorecardQuestionEvent?: api_commons_audit_scorecards_events_pb.ScorecardsDeleteScorecardQuestionEvent.AsObject,
    scorecardsCreateAutoEvaluationEvent?: api_commons_audit_scorecards_events_pb.ScorecardsCreateAutoEvaluationEvent.AsObject,
    scorecardsUpdateEvaluationEvent?: api_commons_audit_scorecards_events_pb.ScorecardsUpdateEvaluationEvent.AsObject,
    scorecardsCreateSmartEvaluationEvent?: api_commons_audit_scorecards_events_pb.ScorecardsCreateSmartEvaluationEvent.AsObject,
    ticketEvent?: api_commons_audit_tickets_events_pb.TicketEvent.AsObject,
    ticketCustomFieldCreateEvent?: api_commons_audit_tickets_events_pb.TicketCustomFieldCreateEvent.AsObject,
    ticketCustomFieldEditEvent?: api_commons_audit_tickets_events_pb.TicketCustomFieldEditEvent.AsObject,
    complianceRndQueryEvent?: api_commons_audit_compliance_events_pb.ComplianceRndQueryEvent.AsObject,
    complianceRndQueryCachedEvent?: api_commons_audit_compliance_events_pb.ComplianceRndQueryEvent.AsObject,
    agentTrainingCreateLearningOpportunityEvent?: api_commons_audit_agent_training_events_pb.AgentTrainingCreateLearningOpportunityEvent.AsObject,
    lmsPipelineFailureEvent?: api_commons_audit_lms_events_pb.LMSPipelineFailureEvent.AsObject,
    lmsPipelineNoOutputEvent?: api_commons_audit_lms_events_pb.LMSPipelineNoOutputEvent.AsObject,
    lmsPipelineSuccessfulEvent?: api_commons_audit_lms_events_pb.LMSPipelineSuccessfulEvent.AsObject,
    billingCommitBillingPlanEvent?: api_commons_audit_billing_events_pb.BillingCommitBillingPlanEvent.AsObject,
    billingCreateBillingPlanEvent?: api_commons_audit_billing_events_pb.BillingCreateBillingPlanEvent.AsObject,
    billingCreateInvoiceEvent?: api_commons_audit_billing_events_pb.BillingCreateInvoiceEvent.AsObject,
    billingCreateRateDefinitionEvent?: api_commons_audit_billing_events_pb.BillingCreateRateDefinitionEvent.AsObject,
    billingDeleteBillingPlanEvent?: api_commons_audit_billing_events_pb.BillingDeleteBillingPlanEvent.AsObject,
    billingDeleteInvoiceEvent?: api_commons_audit_billing_events_pb.BillingDeleteInvoiceEvent.AsObject,
    billingDeleteRateDefinitionEvent?: api_commons_audit_billing_events_pb.BillingDeleteRateDefinitionEvent.AsObject,
    billingExportInvoiceEvent?: api_commons_audit_billing_events_pb.BillingExportInvoiceEvent.AsObject,
    billingUpdateBillingPlanEvent?: api_commons_audit_billing_events_pb.BillingUpdateBillingPlanEvent.AsObject,
    billingUpdateInvoiceEvent?: api_commons_audit_billing_events_pb.BillingUpdateInvoiceEvent.AsObject,
    billingUpdateRateDefinitionEvent?: api_commons_audit_billing_events_pb.BillingUpdateRateDefinitionEvent.AsObject,
    billingRatedItemsGeneratedEvent?: api_commons_audit_billing_events_pb.BillingRatedItemsGeneratedEvent.AsObject,
    billingAccumulateItemsEvent?: api_commons_audit_billing_events_pb.BillingAccumulateItemsEvent.AsObject,
    deliveryFailureEvent?: api_commons_audit_delivery_events_pb.DeliveryFailureEvent.AsObject,
    deliverySuccessEvent?: api_commons_audit_delivery_events_pb.DeliverySuccessEvent.AsObject,
    contactManagerEntryAddEvent?: api_commons_audit_contactmanager_events_pb.ContactManagerEntryAddEvent.AsObject,
    contactManagerEntryGetEncEvent?: api_commons_audit_contactmanager_events_pb.ContactManagerEntryGetEncEvent.AsObject,
    contactManagerDeleteEvent?: api_commons_audit_contactmanager_events_pb.ContactManagerDeleteEvent.AsObject,
    contactManagerKycEvent?: api_commons_audit_contactmanager_events_pb.ContactManagerKycEvent.AsObject,
    contactManagerEntryEditEvent?: api_commons_audit_contactmanager_events_pb.ContactManagerEntryEditEvent.AsObject,
    contactManagerListUploadEvent?: api_commons_audit_contactmanager_events_pb.ContactManagerListUploadEvent.AsObject,
    contactManagerKycVerificationEvent?: api_commons_audit_contactmanager_events_pb.ContactManagerKycEvent.AsObject,
    contactManagerEntryDeleteEvent?: api_commons_audit_contactmanager_events_pb.ContactManagerDeleteEvent.AsObject,
    contactManagerEntryExpungeEvent?: api_commons_audit_contactmanager_events_pb.ContactManagerDeleteEvent.AsObject,
    contactManagerEntityAssociationEvent?: api_commons_audit_contactmanager_events_pb.ContactManagerEntityAssociationEvent.AsObject,
    accessTokensExpiringEvent?: api_commons_audit_organization_events_pb.AccessTokensExpiringEvent.AsObject,
    wfmPublishScheduleEvent?: api_commons_audit_wfm_events_pb.WFMPublishScheduleEvent.AsObject,
    p3AmqpCallResultEvent?: api_commons_audit_p3_amqp_events_pb.P3AMQPCallResultEvent.AsObject,
    p3AmqpAgentResponseEvent?: api_commons_audit_p3_amqp_events_pb.P3AMQPAgentResponseEvent.AsObject,
  }

  export enum EventCase {
    EVENT_NOT_SET = 0,
    _DUMMY_EVENT = 100,
    VANA_FLAG_EVENT = 200,
    VANA_FLAG_REVIEW_EVENT = 201,
    VANA_BILLING_REPORT_EVENT = 202,
    VANA_FLAG_SUMMARY_EVENT = 203,
    VANA_PHRASE_CORRECTION_EVENT = 204,
    VANA_CREATE_TRANSCRIPT_EVENT = 205,
    VANA_CREATE_SENTIMENT_EVENT = 206,
    VANA_CREATE_SUMMARY_EVENT = 207,
    OMNICHANNEL_CREATE_PROJECT_EVENT = 300,
    OMNICHANNEL_CREATE_CAMPAIGN_EVENT = 301,
    OMNICHANNEL_DAILY_PROJECT_REPORT_EVENT = 302,
    OMNICHANNEL_DAILY_CONVERSATION_REPORT_EVENT = 303,
    OMNICHANNEL_AGENT_ASSIGN_CONVERSATION_EVENT = 305,
    OMNICHANNEL_AGENT_UNASSIGN_CONVERSATION_EVENT = 306,
    OMNICHANNEL_AGENT_REASSIGN_CONVERSATION_EVENT = 307,
    OMNICHANNEL_T10_EVENT = 308,
    OMNICHANNEL_CUSTOMER_TEXT_MESSAGE_EVENT = 309,
    OMNICHANNEL_AGENT_TEXT_MESSAGE_EVENT = 310,
    OMNICHANNEL_FINISH_WRAP_UP_EVENT = 311,
    OMNICHANNEL_BEGIN_WRAP_UP_EVENT = 312,
    OMNICHANNEL_T11_EVENT = 313,
    OMNICHANNEL_CREATE_CONVERSATION_EVENT = 314,
    OMNICHANNEL_AGENT_SUSPEND_EVENT = 315,
    OMNICHANNEL_CLOSE_CONVERSATION_EVENT = 322,
    OMNICHANNEL_MANAGER_TEXT_MESSAGE_EVENT = 332,
    OMNICHANNEL_UPDATE_CAMPAIGN_EVENT = 330,
    OMNICHANNEL_SET_CONVERSATION_COLLECTED_DATA_EVENT = 331,
    OMNICHANNEL_COMPLETE_CAMPAIGN_EVENT = 348,
    OMNICHANNEL_ARCHIVE_CAMPAIGN_EVENT = 333,
    OMNICHANNEL_PAUSE_CAMPAIGN_EVENT = 334,
    OMNICHANNEL_RESUME_CAMPAIGN_EVENT = 335,
    OMNICHANNEL_START_CAMPAIGN_EVENT = 336,
    OMNICHANNEL_SCHEDULE_MODULE_EVENT = 337,
    OMNICHANNEL_START_MODULE_EVENT = 338,
    OMNICHANNEL_PAUSE_MODULE_EVENT = 339,
    OMNICHANNEL_RESUME_MODULE_EVENT = 340,
    OMNICHANNEL_ERROR_MODULE_EVENT = 341,
    OMNICHANNEL_SUCCESS_MODULE_EVENT = 342,
    OMNICHANNEL_FAIL_MODULE_EVENT = 343,
    OMNICHANNEL_COMPLETE_MODULE_EVENT = 344,
    OMNICHANNEL_ARCHIVE_MODULE_EVENT = 345,
    OMNICHANNEL_UPDATE_MODULE_EVENT = 346,
    OMNICHANNEL_ADD_SMS_MESSAGE_SENT_MODULE_EVENT = 347,
    OMNICHANNEL_MODULE_INITIAL_REPLY_EVENT = 349,
    OMNICHANNEL_TASK_MESSAGE_SENT_EVENT = 350,
    OMNICHANNEL_CONNECTED_INBOX_POLL_EVENT = 351,
    OMNICHANNEL_CONNECTED_INBOX_CREATED_EVENT = 352,
    OMNICHANNEL_AGENT_MESSAGE_UNITS_EVENT = 353,
    OMNICHANNEL_MANAGER_MESSAGE_UNITS_EVENT = 354,
    OMNICHANNEL_CUSTOMER_MESSAGE_UNITS_EVENT = 355,
    OMNICHANNEL_SYSTEM_MESSAGE_UNITS_EVENT = 356,
    OMNICHANNEL_PAYMENT_LINK_SENT_EVENT = 357,
    OMNICHANNEL_MANUAL_APPROVE_TASK_ACCEPTED_EVENT = 358,
    OMNICHANNEL_MANUAL_APPROVE_TASK_REJECTED_EVENT = 359,
    OMNICHANNEL_MANUAL_APPROVE_TASK_TIMEOUT_EVENT = 360,
    OMNICHANNEL_MANUAL_APPROVE_TASK_REQUEUE_EVENT = 361,
    OMNICHANNEL_TRANSCRIPT_SAVED_EVENT = 362,
    OMNICHANNEL_MESSAGE_SENT_EVENT = 363,
    OMNICHANNEL_PROVIDER_RESPONSE_EVENT = 364,
    OMNICHANNEL_PROVIDER_MESSAGE_FAILED_EVENT = 365,
    ASM_AGENT_LOGIN_EVENT = 400,
    ASM_OPEN_VOICE_EVENT = 401,
    ASM_OPEN_OMNI_AGENT_EVENT = 402,
    ASM_ACTIVATE_CONVERSATION_EVENT = 403,
    ASM_DEACTIVATE_CONVERSATION_EVENT = 404,
    ASM_AGENT_STATE_CHANGED_EVENT = 405,
    ASM_AGENT_LOGOUT_EVENT = 406,
    ASM_PAUSE_EVENT = 407,
    ASM_RESUME_EVENT = 408,
    ASM_CONVERSATION_PULLED_EVENT = 409,
    SCORECARDS_CREATE_QUESTION_EVENT = 500,
    SCORECARDS_UPDATE_QUESTION_EVENT = 501,
    SCORECARDS_DELETE_QUESTION_EVENT = 502,
    SCORECARDS_CREATE_SCORECARD_EVENT = 503,
    SCORECARDS_UPDATE_SCORECARD_EVENT = 504,
    SCORECARDS_DELETE_SCORECARD_EVENT = 505,
    SCORECARDS_CLONE_SCORECARD_EVENT = 506,
    SCORECARDS_CREATE_EVALUATION_EVENT = 507,
    SCORECARDS_DELETE_EVALUATION_EVENT = 508,
    SCORECARDS_CREATE_SECTION_EVENT = 509,
    SCORECARDS_UPDATE_SECTION_EVENT = 510,
    SCORECARDS_DELETE_SECTION_EVENT = 511,
    SCORECARDS_CREATE_CATEGORY_EVENT = 512,
    SCORECARDS_UPDATE_CATEGORY_EVENT = 513,
    SCORECARDS_DELETE_CATEGORY_EVENT = 514,
    SCORECARDS_CREATE_EVALUATION_QUESTION_EVENT = 515,
    SCORECARDS_UPDATE_EVALUATION_QUESTION_EVENT = 516,
    SCORECARDS_DELETE_EVALUATION_QUESTION_EVENT = 517,
    SCORECARDS_CREATE_SCORECARD_QUESTION_EVENT = 518,
    SCORECARDS_UPDATE_SCORECARD_QUESTION_EVENT = 519,
    SCORECARDS_DELETE_SCORECARD_QUESTION_EVENT = 520,
    SCORECARDS_CREATE_AUTO_EVALUATION_EVENT = 521,
    SCORECARDS_UPDATE_EVALUATION_EVENT = 522,
    SCORECARDS_CREATE_SMART_EVALUATION_EVENT = 523,
    TICKET_EVENT = 601,
    TICKET_CUSTOM_FIELD_CREATE_EVENT = 616,
    TICKET_CUSTOM_FIELD_EDIT_EVENT = 617,
    COMPLIANCE_RND_QUERY_EVENT = 700,
    COMPLIANCE_RND_QUERY_CACHED_EVENT = 701,
    AGENT_TRAINING_CREATE_LEARNING_OPPORTUNITY_EVENT = 800,
    LMS_PIPELINE_FAILURE_EVENT = 900,
    LMS_PIPELINE_NO_OUTPUT_EVENT = 901,
    LMS_PIPELINE_SUCCESSFUL_EVENT = 902,
    BILLING_COMMIT_BILLING_PLAN_EVENT = 1000,
    BILLING_CREATE_BILLING_PLAN_EVENT = 1001,
    BILLING_CREATE_INVOICE_EVENT = 1002,
    BILLING_CREATE_RATE_DEFINITION_EVENT = 1003,
    BILLING_DELETE_BILLING_PLAN_EVENT = 1004,
    BILLING_DELETE_INVOICE_EVENT = 1005,
    BILLING_DELETE_RATE_DEFINITION_EVENT = 1006,
    BILLING_EXPORT_INVOICE_EVENT = 1007,
    BILLING_UPDATE_BILLING_PLAN_EVENT = 1008,
    BILLING_UPDATE_INVOICE_EVENT = 1009,
    BILLING_UPDATE_RATE_DEFINITION_EVENT = 1010,
    BILLING_RATED_ITEMS_GENERATED_EVENT = 1011,
    BILLING_ACCUMULATE_ITEMS_EVENT = 1012,
    DELIVERY_FAILURE_EVENT = 1100,
    DELIVERY_SUCCESS_EVENT = 1101,
    CONTACT_MANAGER_ENTRY_ADD_EVENT = 1200,
    CONTACT_MANAGER_ENTRY_GET_ENC_EVENT = 1201,
    CONTACT_MANAGER_DELETE_EVENT = 1202,
    CONTACT_MANAGER_KYC_EVENT = 1203,
    CONTACT_MANAGER_ENTRY_EDIT_EVENT = 1204,
    CONTACT_MANAGER_LIST_UPLOAD_EVENT = 1205,
    CONTACT_MANAGER_KYC_VERIFICATION_EVENT = 1206,
    CONTACT_MANAGER_ENTRY_DELETE_EVENT = 1207,
    CONTACT_MANAGER_ENTRY_EXPUNGE_EVENT = 1208,
    CONTACT_MANAGER_ENTITY_ASSOCIATION_EVENT = 1209,
    ACCESS_TOKENS_EXPIRING_EVENT = 1300,
    WFM_PUBLISH_SCHEDULE_EVENT = 1400,
    P3_AMQP_CALL_RESULT_EVENT = 1500,
    P3_AMQP_AGENT_RESPONSE_EVENT = 1501,
  }
}

