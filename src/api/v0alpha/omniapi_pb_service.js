// package: api.v0alpha
// file: api/v0alpha/omniapi.proto

var api_v0alpha_omniapi_pb = require("../../api/v0alpha/omniapi_pb");
var api_commons_omnichannel_pb = require("../../api/commons/omnichannel_pb");
var api_commons_types_pb = require("../../api/commons/types_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var OmniApi = (function () {
  function OmniApi() {}
  OmniApi.serviceName = "api.v0alpha.OmniApi";
  return OmniApi;
}());

OmniApi.ArchiveCampaign = {
  methodName: "ArchiveCampaign",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.ArchiveCampaignReq,
  responseType: api_v0alpha_omniapi_pb.ArchiveCampaignRes
};

OmniApi.CreateCampaign = {
  methodName: "CreateCampaign",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.CreateCampaignReq,
  responseType: api_commons_omnichannel_pb.OmniCampaign
};

OmniApi.GetCampaignById = {
  methodName: "GetCampaignById",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.GetCampaignByIdReq,
  responseType: api_commons_omnichannel_pb.OmniCampaign
};

OmniApi.ListCampaigns = {
  methodName: "ListCampaigns",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.ListCampaignsReq,
  responseType: api_v0alpha_omniapi_pb.ListCampaignsRes
};

OmniApi.PauseCampaign = {
  methodName: "PauseCampaign",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.PauseCampaignReq,
  responseType: api_v0alpha_omniapi_pb.PauseCampaignRes
};

OmniApi.ResumeCampaign = {
  methodName: "ResumeCampaign",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.ResumeCampaignReq,
  responseType: api_v0alpha_omniapi_pb.ResumeCampaignRes
};

OmniApi.UpdateCampaign = {
  methodName: "UpdateCampaign",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.UpdateCampaignReq,
  responseType: api_v0alpha_omniapi_pb.UpdateCampaignRes
};

OmniApi.UpdateCampaignPacingSpeed = {
  methodName: "UpdateCampaignPacingSpeed",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.UpdateCampaignPacingSpeedReq,
  responseType: api_v0alpha_omniapi_pb.UpdateCampaignPacingSpeedRes
};

OmniApi.GetOffLoadedTextMessage = {
  methodName: "GetOffLoadedTextMessage",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.GetOffLoadedTextMessageReq,
  responseType: api_v0alpha_omniapi_pb.GetOffLoadedTextMessageRes
};

OmniApi.ManagerListMessages = {
  methodName: "ManagerListMessages",
  service: OmniApi,
  requestStream: false,
  responseStream: true,
  requestType: api_v0alpha_omniapi_pb.ManagerListMessagesReq,
  responseType: api_commons_omnichannel_pb.OmniMessage
};

OmniApi.ListMessages = {
  methodName: "ListMessages",
  service: OmniApi,
  requestStream: false,
  responseStream: true,
  requestType: api_v0alpha_omniapi_pb.ListMessagesReq,
  responseType: api_commons_omnichannel_pb.OmniMessage
};

OmniApi.SendOmniMessage = {
  methodName: "SendOmniMessage",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.SendOmniMessageReq,
  responseType: api_commons_types_pb.Empty
};

OmniApi.ManagerSendOmniMessage = {
  methodName: "ManagerSendOmniMessage",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.SendOmniMessageReq,
  responseType: api_commons_types_pb.Empty
};

OmniApi.ManagerListConversations = {
  methodName: "ManagerListConversations",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.ListConversationsReq,
  responseType: api_v0alpha_omniapi_pb.ListConversationsRes
};

OmniApi.SuggestResponse = {
  methodName: "SuggestResponse",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.SuggestResponseReq,
  responseType: api_v0alpha_omniapi_pb.SuggestResponseRes
};

OmniApi.CreateDisposition = {
  methodName: "CreateDisposition",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.CreateDispositionReq,
  responseType: api_v0alpha_omniapi_pb.CreateDispositionRes
};

OmniApi.DeleteDisposition = {
  methodName: "DeleteDisposition",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.DeleteDispositionReq,
  responseType: api_commons_types_pb.Empty
};

OmniApi.ListDispositions = {
  methodName: "ListDispositions",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.ListDispositionsReq,
  responseType: api_v0alpha_omniapi_pb.ListDispositionsRes
};

OmniApi.UpdateDisposition = {
  methodName: "UpdateDisposition",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.UpdateDispositionReq,
  responseType: api_commons_types_pb.Empty
};

OmniApi.ListCustomUnsubscribeLinks = {
  methodName: "ListCustomUnsubscribeLinks",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_commons_types_pb.Empty,
  responseType: api_v0alpha_omniapi_pb.ListCustomUnsubscribeLinksRes
};

OmniApi.CreateCustomUnsubscribeLink = {
  methodName: "CreateCustomUnsubscribeLink",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_commons_omnichannel_pb.OmniCustomUnsubscribeLink,
  responseType: api_v0alpha_omniapi_pb.CreateCustomUnsubscribeLinkRes
};

OmniApi.UpdateCustomUnsubscribeLink = {
  methodName: "UpdateCustomUnsubscribeLink",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.UpdateCustomUnsubscribeLinkReq,
  responseType: api_v0alpha_omniapi_pb.UpdateCustomUnsubscribeLinkRes
};

OmniApi.DeleteCustomUnsubscribeLink = {
  methodName: "DeleteCustomUnsubscribeLink",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.DeleteCustomUnsubscribeLinkReq,
  responseType: api_commons_types_pb.Empty
};

OmniApi.ListContactLists = {
  methodName: "ListContactLists",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.ListContactListsReq,
  responseType: api_v0alpha_omniapi_pb.ListContactListsRes
};

OmniApi.GetAvailableHeaders = {
  methodName: "GetAvailableHeaders",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.GetAvailableHeadersReq,
  responseType: api_v0alpha_omniapi_pb.GetAvailableHeadersRes
};

OmniApi.GetTask = {
  methodName: "GetTask",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.GetTaskReq,
  responseType: api_commons_omnichannel_pb.OmniTask
};

OmniApi.ListTasks = {
  methodName: "ListTasks",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.ListTasksReq,
  responseType: api_v0alpha_omniapi_pb.ListTasksRes
};

OmniApi.CreateConnectedInbox = {
  methodName: "CreateConnectedInbox",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_commons_omnichannel_pb.ConnectedInbox,
  responseType: api_v0alpha_omniapi_pb.CreateConnectedInboxRes
};

OmniApi.DeleteConnectedInboxBySid = {
  methodName: "DeleteConnectedInboxBySid",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.DeleteConnectedInboxBySidReq,
  responseType: api_commons_types_pb.Empty
};

OmniApi.GetConnectedInboxBySid = {
  methodName: "GetConnectedInboxBySid",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.GetConnectedInboxBySidReq,
  responseType: api_commons_omnichannel_pb.ConnectedInbox
};

OmniApi.PerformSendgridAccountChecks = {
  methodName: "PerformSendgridAccountChecks",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.SendgridAccountByClientReq,
  responseType: api_v0alpha_omniapi_pb.SendgridAccountByClientRes
};

OmniApi.ListConnectedInboxes = {
  methodName: "ListConnectedInboxes",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.ListConnectedInboxesReq,
  responseType: api_v0alpha_omniapi_pb.ListConnectedInboxesRes
};

OmniApi.TestConnectedInbox = {
  methodName: "TestConnectedInbox",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_commons_omnichannel_pb.ConnectedInbox,
  responseType: api_v0alpha_omniapi_pb.TestConnectedInboxRes
};

OmniApi.UpdateConnectedInbox = {
  methodName: "UpdateConnectedInbox",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.UpdateConnectedInboxReq,
  responseType: api_commons_types_pb.Empty
};

OmniApi.CreateVerifiedEmail = {
  methodName: "CreateVerifiedEmail",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_commons_omnichannel_pb.VerifiedEmail,
  responseType: api_v0alpha_omniapi_pb.CreateVerifiedEmailRes
};

OmniApi.SendEmailNotification = {
  methodName: "SendEmailNotification",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.SendEmailNotificationReq,
  responseType: api_v0alpha_omniapi_pb.SendEmailNotificationRes
};

OmniApi.DeleteVerifiedEmail = {
  methodName: "DeleteVerifiedEmail",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.DeleteVerifiedEmailReq,
  responseType: api_commons_types_pb.Empty
};

OmniApi.GetVerifiedEmailBySid = {
  methodName: "GetVerifiedEmailBySid",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.GetVerifiedEmailBySidReq,
  responseType: api_commons_omnichannel_pb.VerifiedEmail
};

OmniApi.ListVerifiedEmails = {
  methodName: "ListVerifiedEmails",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.ListVerifiedEmailsReq,
  responseType: api_v0alpha_omniapi_pb.ListVerifiedEmailsRes
};

OmniApi.ResendVerifiedEmail = {
  methodName: "ResendVerifiedEmail",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.ResendVerifiedEmailReq,
  responseType: api_v0alpha_omniapi_pb.ResendVerifiedEmailRes
};

OmniApi.UpdateVerifiedEmail = {
  methodName: "UpdateVerifiedEmail",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.UpdateVerifiedEmailReq,
  responseType: api_commons_types_pb.Empty
};

OmniApi.GetPendingGoogleXOAuth2Data = {
  methodName: "GetPendingGoogleXOAuth2Data",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.GetPendingGoogleXOAuth2DataReq,
  responseType: api_v0alpha_omniapi_pb.GetPendingGoogleXOAuth2DataRes
};

OmniApi.SendFeedbackEmail = {
  methodName: "SendFeedbackEmail",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.SendFeedbackEmailReq,
  responseType: api_v0alpha_omniapi_pb.SendFeedbackEmailRes
};

OmniApi.GetOmniAttachment = {
  methodName: "GetOmniAttachment",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.GetOmniAttachmentReq,
  responseType: api_commons_omnichannel_pb.OmniAttachment
};

OmniApi.CreateTasks = {
  methodName: "CreateTasks",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.CreateTasksReq,
  responseType: api_v0alpha_omniapi_pb.CreateTasksRes
};

OmniApi.CreateSignature = {
  methodName: "CreateSignature",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.CreateSignatureReq,
  responseType: api_v0alpha_omniapi_pb.CreateSignatureRes
};

OmniApi.DeleteSignature = {
  methodName: "DeleteSignature",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.DeleteSignatureReq,
  responseType: api_v0alpha_omniapi_pb.DeleteSignatureRes
};

OmniApi.ListSignatures = {
  methodName: "ListSignatures",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.ListSignaturesReq,
  responseType: api_v0alpha_omniapi_pb.ListSignaturesRes
};

OmniApi.UpdateSignature = {
  methodName: "UpdateSignature",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.UpdateSignatureReq,
  responseType: api_v0alpha_omniapi_pb.UpdateSignatureRes
};

OmniApi.CreateProject = {
  methodName: "CreateProject",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.CreateProjectReq,
  responseType: api_v0alpha_omniapi_pb.CreateProjectRes
};

OmniApi.ListProjects = {
  methodName: "ListProjects",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.ListProjectsReq,
  responseType: api_v0alpha_omniapi_pb.ListProjectsRes
};

OmniApi.EditProjectById = {
  methodName: "EditProjectById",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.EditProjectByIdReq,
  responseType: api_v0alpha_omniapi_pb.EditProjectByIdRes
};

OmniApi.CloseProjectById = {
  methodName: "CloseProjectById",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.CloseProjectByIdReq,
  responseType: api_v0alpha_omniapi_pb.CloseProjectByIdRes
};

OmniApi.GetProjectById = {
  methodName: "GetProjectById",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.GetProjectByIdReq,
  responseType: api_v0alpha_omniapi_pb.Project
};

OmniApi.CreateCannedMessage = {
  methodName: "CreateCannedMessage",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.CreateCannedMessageReq,
  responseType: api_v0alpha_omniapi_pb.CannedMessage
};

OmniApi.ListCannedMessages = {
  methodName: "ListCannedMessages",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.ListCannedMessagesReq,
  responseType: api_v0alpha_omniapi_pb.ListCannedMessagesRes
};

OmniApi.UpdateCannedMessage = {
  methodName: "UpdateCannedMessage",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.UpdateCannedMessageReq,
  responseType: api_v0alpha_omniapi_pb.CannedMessage
};

OmniApi.GetCannedMessageById = {
  methodName: "GetCannedMessageById",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.GetCannedMessageByIdReq,
  responseType: api_v0alpha_omniapi_pb.CannedMessageWithGroup
};

OmniApi.DeleteCannedMessageById = {
  methodName: "DeleteCannedMessageById",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.DeleteCannedMessageByIdReq,
  responseType: api_v0alpha_omniapi_pb.DeleteCannedMessageByIdRes
};

OmniApi.CreateCannedMessageGroup = {
  methodName: "CreateCannedMessageGroup",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.CreateCannedMessageGroupReq,
  responseType: api_v0alpha_omniapi_pb.CannedMessageGroup
};

OmniApi.ListCannedMessageGroups = {
  methodName: "ListCannedMessageGroups",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.ListCannedMessageGroupsReq,
  responseType: api_v0alpha_omniapi_pb.ListCannedMessageGroupsRes
};

OmniApi.UpdateCannedMessageGroup = {
  methodName: "UpdateCannedMessageGroup",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.UpdateCannedMessageGroupReq,
  responseType: api_v0alpha_omniapi_pb.UpdateCannedMessageGroupRes
};

OmniApi.DeleteCannedMessageGroup = {
  methodName: "DeleteCannedMessageGroup",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.DeleteCannedMessageGroupReq,
  responseType: api_v0alpha_omniapi_pb.DeleteCannedMessageGroupRes
};

OmniApi.ListCannedMessagesByGroupId = {
  methodName: "ListCannedMessagesByGroupId",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.ListCannedMessagesByGroupIdReq,
  responseType: api_v0alpha_omniapi_pb.ListCannedMessagesByGroupIdRes
};

OmniApi.GetCannedMessageGroupById = {
  methodName: "GetCannedMessageGroupById",
  service: OmniApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_omniapi_pb.GetCannedMessageGroupByIdReq,
  responseType: api_v0alpha_omniapi_pb.CannedMessageGroup
};

exports.OmniApi = OmniApi;

function OmniApiClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

OmniApiClient.prototype.archiveCampaign = function archiveCampaign(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.ArchiveCampaign, {
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

OmniApiClient.prototype.createCampaign = function createCampaign(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.CreateCampaign, {
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

OmniApiClient.prototype.getCampaignById = function getCampaignById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.GetCampaignById, {
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

OmniApiClient.prototype.listCampaigns = function listCampaigns(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.ListCampaigns, {
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

OmniApiClient.prototype.pauseCampaign = function pauseCampaign(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.PauseCampaign, {
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

OmniApiClient.prototype.resumeCampaign = function resumeCampaign(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.ResumeCampaign, {
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

OmniApiClient.prototype.updateCampaign = function updateCampaign(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.UpdateCampaign, {
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

OmniApiClient.prototype.updateCampaignPacingSpeed = function updateCampaignPacingSpeed(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.UpdateCampaignPacingSpeed, {
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

OmniApiClient.prototype.getOffLoadedTextMessage = function getOffLoadedTextMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.GetOffLoadedTextMessage, {
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

OmniApiClient.prototype.managerListMessages = function managerListMessages(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(OmniApi.ManagerListMessages, {
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

OmniApiClient.prototype.listMessages = function listMessages(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(OmniApi.ListMessages, {
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

OmniApiClient.prototype.sendOmniMessage = function sendOmniMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.SendOmniMessage, {
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

OmniApiClient.prototype.managerSendOmniMessage = function managerSendOmniMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.ManagerSendOmniMessage, {
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

OmniApiClient.prototype.managerListConversations = function managerListConversations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.ManagerListConversations, {
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

OmniApiClient.prototype.suggestResponse = function suggestResponse(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.SuggestResponse, {
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

OmniApiClient.prototype.createDisposition = function createDisposition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.CreateDisposition, {
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

OmniApiClient.prototype.deleteDisposition = function deleteDisposition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.DeleteDisposition, {
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

OmniApiClient.prototype.listDispositions = function listDispositions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.ListDispositions, {
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

OmniApiClient.prototype.updateDisposition = function updateDisposition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.UpdateDisposition, {
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

OmniApiClient.prototype.listCustomUnsubscribeLinks = function listCustomUnsubscribeLinks(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.ListCustomUnsubscribeLinks, {
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

OmniApiClient.prototype.createCustomUnsubscribeLink = function createCustomUnsubscribeLink(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.CreateCustomUnsubscribeLink, {
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

OmniApiClient.prototype.updateCustomUnsubscribeLink = function updateCustomUnsubscribeLink(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.UpdateCustomUnsubscribeLink, {
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

OmniApiClient.prototype.deleteCustomUnsubscribeLink = function deleteCustomUnsubscribeLink(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.DeleteCustomUnsubscribeLink, {
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

OmniApiClient.prototype.listContactLists = function listContactLists(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.ListContactLists, {
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

OmniApiClient.prototype.getAvailableHeaders = function getAvailableHeaders(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.GetAvailableHeaders, {
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

OmniApiClient.prototype.getTask = function getTask(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.GetTask, {
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

OmniApiClient.prototype.listTasks = function listTasks(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.ListTasks, {
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

OmniApiClient.prototype.createConnectedInbox = function createConnectedInbox(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.CreateConnectedInbox, {
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

OmniApiClient.prototype.deleteConnectedInboxBySid = function deleteConnectedInboxBySid(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.DeleteConnectedInboxBySid, {
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

OmniApiClient.prototype.getConnectedInboxBySid = function getConnectedInboxBySid(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.GetConnectedInboxBySid, {
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

OmniApiClient.prototype.performSendgridAccountChecks = function performSendgridAccountChecks(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.PerformSendgridAccountChecks, {
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

OmniApiClient.prototype.listConnectedInboxes = function listConnectedInboxes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.ListConnectedInboxes, {
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

OmniApiClient.prototype.testConnectedInbox = function testConnectedInbox(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.TestConnectedInbox, {
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

OmniApiClient.prototype.updateConnectedInbox = function updateConnectedInbox(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.UpdateConnectedInbox, {
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

OmniApiClient.prototype.createVerifiedEmail = function createVerifiedEmail(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.CreateVerifiedEmail, {
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

OmniApiClient.prototype.sendEmailNotification = function sendEmailNotification(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.SendEmailNotification, {
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

OmniApiClient.prototype.deleteVerifiedEmail = function deleteVerifiedEmail(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.DeleteVerifiedEmail, {
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

OmniApiClient.prototype.getVerifiedEmailBySid = function getVerifiedEmailBySid(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.GetVerifiedEmailBySid, {
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

OmniApiClient.prototype.listVerifiedEmails = function listVerifiedEmails(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.ListVerifiedEmails, {
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

OmniApiClient.prototype.resendVerifiedEmail = function resendVerifiedEmail(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.ResendVerifiedEmail, {
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

OmniApiClient.prototype.updateVerifiedEmail = function updateVerifiedEmail(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.UpdateVerifiedEmail, {
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

OmniApiClient.prototype.getPendingGoogleXOAuth2Data = function getPendingGoogleXOAuth2Data(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.GetPendingGoogleXOAuth2Data, {
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

OmniApiClient.prototype.sendFeedbackEmail = function sendFeedbackEmail(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.SendFeedbackEmail, {
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

OmniApiClient.prototype.getOmniAttachment = function getOmniAttachment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.GetOmniAttachment, {
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

OmniApiClient.prototype.createTasks = function createTasks(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.CreateTasks, {
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

OmniApiClient.prototype.createSignature = function createSignature(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.CreateSignature, {
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

OmniApiClient.prototype.deleteSignature = function deleteSignature(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.DeleteSignature, {
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

OmniApiClient.prototype.listSignatures = function listSignatures(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.ListSignatures, {
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

OmniApiClient.prototype.updateSignature = function updateSignature(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.UpdateSignature, {
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

OmniApiClient.prototype.createProject = function createProject(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.CreateProject, {
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

OmniApiClient.prototype.listProjects = function listProjects(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.ListProjects, {
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

OmniApiClient.prototype.editProjectById = function editProjectById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.EditProjectById, {
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

OmniApiClient.prototype.closeProjectById = function closeProjectById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.CloseProjectById, {
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

OmniApiClient.prototype.getProjectById = function getProjectById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.GetProjectById, {
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

OmniApiClient.prototype.createCannedMessage = function createCannedMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.CreateCannedMessage, {
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

OmniApiClient.prototype.listCannedMessages = function listCannedMessages(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.ListCannedMessages, {
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

OmniApiClient.prototype.updateCannedMessage = function updateCannedMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.UpdateCannedMessage, {
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

OmniApiClient.prototype.getCannedMessageById = function getCannedMessageById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.GetCannedMessageById, {
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

OmniApiClient.prototype.deleteCannedMessageById = function deleteCannedMessageById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.DeleteCannedMessageById, {
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

OmniApiClient.prototype.createCannedMessageGroup = function createCannedMessageGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.CreateCannedMessageGroup, {
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

OmniApiClient.prototype.listCannedMessageGroups = function listCannedMessageGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.ListCannedMessageGroups, {
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

OmniApiClient.prototype.updateCannedMessageGroup = function updateCannedMessageGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.UpdateCannedMessageGroup, {
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

OmniApiClient.prototype.deleteCannedMessageGroup = function deleteCannedMessageGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.DeleteCannedMessageGroup, {
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

OmniApiClient.prototype.listCannedMessagesByGroupId = function listCannedMessagesByGroupId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.ListCannedMessagesByGroupId, {
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

OmniApiClient.prototype.getCannedMessageGroupById = function getCannedMessageGroupById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OmniApi.GetCannedMessageGroupById, {
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

exports.OmniApiClient = OmniApiClient;

