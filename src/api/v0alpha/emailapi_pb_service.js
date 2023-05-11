// package: api.v0alpha
// file: api/v0alpha/emailapi.proto

var api_v0alpha_emailapi_pb = require("../../api/v0alpha/emailapi_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var EmailApi = (function () {
  function EmailApi() {}
  EmailApi.serviceName = "api.v0alpha.EmailApi";
  return EmailApi;
}());

EmailApi.CreateEmailTemplate = {
  methodName: "CreateEmailTemplate",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.CreateEmailTemplateReq,
  responseType: api_v0alpha_emailapi_pb.CreateEmailTemplateRes
};

EmailApi.UpdateEmailTemplate = {
  methodName: "UpdateEmailTemplate",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.UpdateEmailTemplateReq,
  responseType: api_v0alpha_emailapi_pb.UpdateEmailTemplateRes
};

EmailApi.CreateEmailTemplateAttachment = {
  methodName: "CreateEmailTemplateAttachment",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.CreateEmailTemplateAttachmentReq,
  responseType: api_v0alpha_emailapi_pb.CreateEmailTemplateAttachmentRes
};

EmailApi.CopyEmailTemplateWithAttachments = {
  methodName: "CopyEmailTemplateWithAttachments",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.CopyEmailTemplateWithAttachmentsReq,
  responseType: api_v0alpha_emailapi_pb.CopyEmailTemplateWithAttachmentsRes
};

EmailApi.UpdateEmailTemplateAttachment = {
  methodName: "UpdateEmailTemplateAttachment",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.UpdateEmailTemplateAttachmentReq,
  responseType: api_v0alpha_emailapi_pb.UpdateEmailTemplateAttachmentRes
};

EmailApi.GetEmailTemplateByTemplateSid = {
  methodName: "GetEmailTemplateByTemplateSid",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.GetEmailTemplateByTemplateSidReq,
  responseType: api_v0alpha_emailapi_pb.EmailTemplateWithAttachments
};

EmailApi.GetAllEmailTemplates = {
  methodName: "GetAllEmailTemplates",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.GetAllEmailTemplatesReq,
  responseType: api_v0alpha_emailapi_pb.GetAllEmailTemplatesRes
};

EmailApi.DeleteEmailTemplate = {
  methodName: "DeleteEmailTemplate",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.DeleteEmailTemplateReq,
  responseType: api_v0alpha_emailapi_pb.DeleteEmailTemplateRes
};

EmailApi.DeleteEmailTemplateAttachmentById = {
  methodName: "DeleteEmailTemplateAttachmentById",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.DeleteEmailTemplateAttachmentByIdReq,
  responseType: api_v0alpha_emailapi_pb.DeleteEmailTemplateAttachmentByIdRes
};

EmailApi.DownloadInboundEmailAttachment = {
  methodName: "DownloadInboundEmailAttachment",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.DownloadInboundEmailAttachmentReq,
  responseType: api_v0alpha_emailapi_pb.DownloadInboundEmailAttachmentRes
};

EmailApi.PureEmailGroupSearch = {
  methodName: "PureEmailGroupSearch",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.EmailGroupSearchReq,
  responseType: api_v0alpha_emailapi_pb.EmailGroupSearchRes
};

EmailApi.ManagerListNewEmailMessageReplies = {
  methodName: "ManagerListNewEmailMessageReplies",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.ListNewEmailMessageRepliesReq,
  responseType: api_v0alpha_emailapi_pb.ListNewEmailMessageRepliesRes
};

EmailApi.ListNewEmailMessageReplies = {
  methodName: "ListNewEmailMessageReplies",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.ListNewEmailMessageRepliesReq,
  responseType: api_v0alpha_emailapi_pb.ListNewEmailMessageRepliesRes
};

EmailApi.GetEmailTasksByGroupSids = {
  methodName: "GetEmailTasksByGroupSids",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.GetEmailTasksByGroupSidsReq,
  responseType: api_v0alpha_emailapi_pb.GetEmailTasksByGroupSidsRes
};

EmailApi.UpdateEmailGroupStatus = {
  methodName: "UpdateEmailGroupStatus",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.EmailGroupStatusReq,
  responseType: api_v0alpha_emailapi_pb.EmailGroupStatusRes
};

EmailApi.GetEmailMessageDetails = {
  methodName: "GetEmailMessageDetails",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.GetEmailMessageReq,
  responseType: api_v0alpha_emailapi_pb.GetEmailMessageRes
};

EmailApi.CreateInboundEmailTemplate = {
  methodName: "CreateInboundEmailTemplate",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.CreateInboundEmailTemplateReq,
  responseType: api_v0alpha_emailapi_pb.CreateInboundEmailTemplateRes
};

EmailApi.UpdateInboundEmailTemplate = {
  methodName: "UpdateInboundEmailTemplate",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.UpdateInboundEmailTemplateReq,
  responseType: api_v0alpha_emailapi_pb.UpdateInboundEmailTemplateRes
};

EmailApi.DeleteInboundEmailTemplateById = {
  methodName: "DeleteInboundEmailTemplateById",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.DeleteInboundEmailTemplateByIdReq,
  responseType: api_v0alpha_emailapi_pb.DeleteInboundEmailTemplateByIdRes
};

EmailApi.ListInboundEmailTemplates = {
  methodName: "ListInboundEmailTemplates",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.ListInboundEmailTemplatesReq,
  responseType: api_v0alpha_emailapi_pb.ListInboundEmailTemplatesRes
};

EmailApi.GetInboundEmailTemplateById = {
  methodName: "GetInboundEmailTemplateById",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.GetInboundEmailTemplateByIdReq,
  responseType: api_v0alpha_emailapi_pb.InboundEmailTemplate
};

EmailApi.UpdateInboundEmailGroupStatus = {
  methodName: "UpdateInboundEmailGroupStatus",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.UpdateInboundEmailGroupStatusReq,
  responseType: api_v0alpha_emailapi_pb.UpdateInboundEmailGroupStatusRes
};

EmailApi.StopInboundEmailGroup = {
  methodName: "StopInboundEmailGroup",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.StopInboundEmailGroupReq,
  responseType: api_v0alpha_emailapi_pb.StopInboundEmailGroupRes
};

EmailApi.StopAllInboundEmailGroups = {
  methodName: "StopAllInboundEmailGroups",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.StopAllInboundEmailGroupsReq,
  responseType: api_v0alpha_emailapi_pb.StopInboundEmailGroupRes
};

EmailApi.PureInboundEmailGroupSearch = {
  methodName: "PureInboundEmailGroupSearch",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.PureInboundEmailGroupSearchReq,
  responseType: api_v0alpha_emailapi_pb.PureInboundEmailGroupSearchRes
};

EmailApi.InboundEmailGroupSearch = {
  methodName: "InboundEmailGroupSearch",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.InboundEmailGroupSearchReq,
  responseType: api_v0alpha_emailapi_pb.InboundEmailGroupSearchRes
};

EmailApi.ListInboundEmailGroupsByGroupIds = {
  methodName: "ListInboundEmailGroupsByGroupIds",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.ListInboundEmailGroupsByGroupIdsReq,
  responseType: api_v0alpha_emailapi_pb.ListInboundEmailGroupsByGroupIdsRes
};

EmailApi.ListInboundEmailTasksByGroupIds = {
  methodName: "ListInboundEmailTasksByGroupIds",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.ListInboundEmailTasksByGroupIdsReq,
  responseType: api_v0alpha_emailapi_pb.ListInboundEmailTasksByGroupIdsRes
};

EmailApi.ListActiveInboundEmailGroups = {
  methodName: "ListActiveInboundEmailGroups",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.ListActiveInboundEmailGroupsReq,
  responseType: api_v0alpha_emailapi_pb.ListActiveInboundEmailGroupsRes
};

EmailApi.Schedule = {
  methodName: "Schedule",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.ScheduleReq,
  responseType: api_v0alpha_emailapi_pb.ScheduleRes
};

EmailApi.ScheduleOutboundEmailGroup = {
  methodName: "ScheduleOutboundEmailGroup",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.ScheduleOutboundEmailGroupReq,
  responseType: api_v0alpha_emailapi_pb.ScheduleOutboundEmailGroupRes
};

EmailApi.SchedulePureInboundEmail = {
  methodName: "SchedulePureInboundEmail",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.SchedulePureInboundEmailReq,
  responseType: api_v0alpha_emailapi_pb.SchedulePureInboundEmailRes
};

EmailApi.CreateEmailMessageAgentReply = {
  methodName: "CreateEmailMessageAgentReply",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.CreateEmailMessageAgentReplyReq,
  responseType: api_v0alpha_emailapi_pb.EmailMessageReplyWithAttachments
};

EmailApi.CreateEmailMessageAgentReplyAttachment = {
  methodName: "CreateEmailMessageAgentReplyAttachment",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.CreateEmailMessageAgentReplyAttachmentReq,
  responseType: api_v0alpha_emailapi_pb.CreateEmailMessageAgentReplyAttachmentRes
};

EmailApi.SendReply = {
  methodName: "SendReply",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.SendReplyReq,
  responseType: api_v0alpha_emailapi_pb.EmailMessageReplyWithAttachments
};

EmailApi.GetEmailGroupsByGroupSids = {
  methodName: "GetEmailGroupsByGroupSids",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.GetEmailGroupsByGroupSidsReq,
  responseType: api_v0alpha_emailapi_pb.GetEmailGroupsByGroupSidsRes
};

EmailApi.GetEmailGroupByGroupSid = {
  methodName: "GetEmailGroupByGroupSid",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.GetEmailGroupByGroupSidReq,
  responseType: api_v0alpha_emailapi_pb.EmailGroupDetailsWithAttachments
};

EmailApi.GetEmailGroupByGroupId = {
  methodName: "GetEmailGroupByGroupId",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.GetEmailGroupByGroupIdReq,
  responseType: api_v0alpha_emailapi_pb.EmailGroupDetailsWithAttachments
};

EmailApi.SchedulePureOmniLinkInboundEmail = {
  methodName: "SchedulePureOmniLinkInboundEmail",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.SchedulePureOmniLinkInboundEmailReq,
  responseType: api_v0alpha_emailapi_pb.SchedulePureOmniLinkInboundEmailRes
};

EmailApi.UpdateInboundEmailGroup = {
  methodName: "UpdateInboundEmailGroup",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.UpdateInboundEmailGroupReq,
  responseType: api_v0alpha_emailapi_pb.UpdateInboundEmailGroupRes
};

EmailApi.UpdateEmailGroupMstrSendsPerMinute = {
  methodName: "UpdateEmailGroupMstrSendsPerMinute",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.EmailGroupSendsPerMinuteReq,
  responseType: api_v0alpha_emailapi_pb.EmailGroupSendsPerMinuteRes
};

EmailApi.UpdateOutboundEmailGroup = {
  methodName: "UpdateOutboundEmailGroup",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.UpdateOutboundEmailGroupReq,
  responseType: api_v0alpha_emailapi_pb.UpdateOutboundEmailGroupRes
};

EmailApi.GetInboundEmailGroupById = {
  methodName: "GetInboundEmailGroupById",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.InboundEmailGroupByIdReq,
  responseType: api_v0alpha_emailapi_pb.InboundEmailGroup
};

EmailApi.CreateEmailMessageAttachment = {
  methodName: "CreateEmailMessageAttachment",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.CreateEmailMessageAttachmentReq,
  responseType: api_v0alpha_emailapi_pb.CreateEmailMessageAttachmentRes
};

EmailApi.ListEmailMessageAttachments = {
  methodName: "ListEmailMessageAttachments",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.ListEmailMessageAttachmentsReq,
  responseType: api_v0alpha_emailapi_pb.ListEmailMessageAttachmentsRes
};

EmailApi.UnassignCurrentUserFromEmailConversation = {
  methodName: "UnassignCurrentUserFromEmailConversation",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.UnassignCurrentUserFromEmailConversationReq,
  responseType: api_v0alpha_emailapi_pb.UnassignUserFromEmailConversationRes
};

EmailApi.DashboardEmailConversationSearch = {
  methodName: "DashboardEmailConversationSearch",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.DashboardEmailConversationSearchReq,
  responseType: api_v0alpha_emailapi_pb.DashboardEmailConversationSearchRes
};

EmailApi.ReassignEmailConversation = {
  methodName: "ReassignEmailConversation",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.ReassignEmailConversationReq,
  responseType: api_v0alpha_emailapi_pb.ReassignEmailConversationRes
};

EmailApi.AssignEmailConversation = {
  methodName: "AssignEmailConversation",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.AssignEmailConversationReq,
  responseType: api_v0alpha_emailapi_pb.AssignEmailConversationRes
};

EmailApi.SuspendEmailConversation = {
  methodName: "SuspendEmailConversation",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.SuspendEmailConversationReq,
  responseType: api_v0alpha_emailapi_pb.SuspendEmailConversationRes
};

EmailApi.ListCampaignsByConnectedInboxId = {
  methodName: "ListCampaignsByConnectedInboxId",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.ListCampaignsByConnectedInboxIdReq,
  responseType: api_v0alpha_emailapi_pb.ListCampaignsByConnectedInboxIdRes
};

EmailApi.CloseEmailConversation = {
  methodName: "CloseEmailConversation",
  service: EmailApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_emailapi_pb.CloseEmailConversationReq,
  responseType: api_v0alpha_emailapi_pb.CloseEmailConversationRes
};

exports.EmailApi = EmailApi;

function EmailApiClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

EmailApiClient.prototype.createEmailTemplate = function createEmailTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.CreateEmailTemplate, {
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

EmailApiClient.prototype.updateEmailTemplate = function updateEmailTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.UpdateEmailTemplate, {
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

EmailApiClient.prototype.createEmailTemplateAttachment = function createEmailTemplateAttachment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.CreateEmailTemplateAttachment, {
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

EmailApiClient.prototype.copyEmailTemplateWithAttachments = function copyEmailTemplateWithAttachments(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.CopyEmailTemplateWithAttachments, {
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

EmailApiClient.prototype.updateEmailTemplateAttachment = function updateEmailTemplateAttachment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.UpdateEmailTemplateAttachment, {
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

EmailApiClient.prototype.getEmailTemplateByTemplateSid = function getEmailTemplateByTemplateSid(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.GetEmailTemplateByTemplateSid, {
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

EmailApiClient.prototype.getAllEmailTemplates = function getAllEmailTemplates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.GetAllEmailTemplates, {
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

EmailApiClient.prototype.deleteEmailTemplate = function deleteEmailTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.DeleteEmailTemplate, {
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

EmailApiClient.prototype.deleteEmailTemplateAttachmentById = function deleteEmailTemplateAttachmentById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.DeleteEmailTemplateAttachmentById, {
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

EmailApiClient.prototype.downloadInboundEmailAttachment = function downloadInboundEmailAttachment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.DownloadInboundEmailAttachment, {
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

EmailApiClient.prototype.pureEmailGroupSearch = function pureEmailGroupSearch(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.PureEmailGroupSearch, {
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

EmailApiClient.prototype.managerListNewEmailMessageReplies = function managerListNewEmailMessageReplies(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.ManagerListNewEmailMessageReplies, {
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

EmailApiClient.prototype.listNewEmailMessageReplies = function listNewEmailMessageReplies(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.ListNewEmailMessageReplies, {
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

EmailApiClient.prototype.getEmailTasksByGroupSids = function getEmailTasksByGroupSids(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.GetEmailTasksByGroupSids, {
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

EmailApiClient.prototype.updateEmailGroupStatus = function updateEmailGroupStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.UpdateEmailGroupStatus, {
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

EmailApiClient.prototype.getEmailMessageDetails = function getEmailMessageDetails(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.GetEmailMessageDetails, {
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

EmailApiClient.prototype.createInboundEmailTemplate = function createInboundEmailTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.CreateInboundEmailTemplate, {
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

EmailApiClient.prototype.updateInboundEmailTemplate = function updateInboundEmailTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.UpdateInboundEmailTemplate, {
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

EmailApiClient.prototype.deleteInboundEmailTemplateById = function deleteInboundEmailTemplateById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.DeleteInboundEmailTemplateById, {
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

EmailApiClient.prototype.listInboundEmailTemplates = function listInboundEmailTemplates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.ListInboundEmailTemplates, {
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

EmailApiClient.prototype.getInboundEmailTemplateById = function getInboundEmailTemplateById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.GetInboundEmailTemplateById, {
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

EmailApiClient.prototype.updateInboundEmailGroupStatus = function updateInboundEmailGroupStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.UpdateInboundEmailGroupStatus, {
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

EmailApiClient.prototype.stopInboundEmailGroup = function stopInboundEmailGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.StopInboundEmailGroup, {
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

EmailApiClient.prototype.stopAllInboundEmailGroups = function stopAllInboundEmailGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.StopAllInboundEmailGroups, {
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

EmailApiClient.prototype.pureInboundEmailGroupSearch = function pureInboundEmailGroupSearch(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.PureInboundEmailGroupSearch, {
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

EmailApiClient.prototype.inboundEmailGroupSearch = function inboundEmailGroupSearch(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.InboundEmailGroupSearch, {
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

EmailApiClient.prototype.listInboundEmailGroupsByGroupIds = function listInboundEmailGroupsByGroupIds(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.ListInboundEmailGroupsByGroupIds, {
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

EmailApiClient.prototype.listInboundEmailTasksByGroupIds = function listInboundEmailTasksByGroupIds(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.ListInboundEmailTasksByGroupIds, {
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

EmailApiClient.prototype.listActiveInboundEmailGroups = function listActiveInboundEmailGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.ListActiveInboundEmailGroups, {
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

EmailApiClient.prototype.schedule = function schedule(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.Schedule, {
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

EmailApiClient.prototype.scheduleOutboundEmailGroup = function scheduleOutboundEmailGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.ScheduleOutboundEmailGroup, {
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

EmailApiClient.prototype.schedulePureInboundEmail = function schedulePureInboundEmail(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.SchedulePureInboundEmail, {
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

EmailApiClient.prototype.createEmailMessageAgentReply = function createEmailMessageAgentReply(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.CreateEmailMessageAgentReply, {
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

EmailApiClient.prototype.createEmailMessageAgentReplyAttachment = function createEmailMessageAgentReplyAttachment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.CreateEmailMessageAgentReplyAttachment, {
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

EmailApiClient.prototype.sendReply = function sendReply(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.SendReply, {
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

EmailApiClient.prototype.getEmailGroupsByGroupSids = function getEmailGroupsByGroupSids(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.GetEmailGroupsByGroupSids, {
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

EmailApiClient.prototype.getEmailGroupByGroupSid = function getEmailGroupByGroupSid(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.GetEmailGroupByGroupSid, {
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

EmailApiClient.prototype.getEmailGroupByGroupId = function getEmailGroupByGroupId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.GetEmailGroupByGroupId, {
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

EmailApiClient.prototype.schedulePureOmniLinkInboundEmail = function schedulePureOmniLinkInboundEmail(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.SchedulePureOmniLinkInboundEmail, {
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

EmailApiClient.prototype.updateInboundEmailGroup = function updateInboundEmailGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.UpdateInboundEmailGroup, {
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

EmailApiClient.prototype.updateEmailGroupMstrSendsPerMinute = function updateEmailGroupMstrSendsPerMinute(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.UpdateEmailGroupMstrSendsPerMinute, {
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

EmailApiClient.prototype.updateOutboundEmailGroup = function updateOutboundEmailGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.UpdateOutboundEmailGroup, {
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

EmailApiClient.prototype.getInboundEmailGroupById = function getInboundEmailGroupById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.GetInboundEmailGroupById, {
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

EmailApiClient.prototype.createEmailMessageAttachment = function createEmailMessageAttachment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.CreateEmailMessageAttachment, {
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

EmailApiClient.prototype.listEmailMessageAttachments = function listEmailMessageAttachments(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.ListEmailMessageAttachments, {
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

EmailApiClient.prototype.unassignCurrentUserFromEmailConversation = function unassignCurrentUserFromEmailConversation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.UnassignCurrentUserFromEmailConversation, {
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

EmailApiClient.prototype.dashboardEmailConversationSearch = function dashboardEmailConversationSearch(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.DashboardEmailConversationSearch, {
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

EmailApiClient.prototype.reassignEmailConversation = function reassignEmailConversation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.ReassignEmailConversation, {
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

EmailApiClient.prototype.assignEmailConversation = function assignEmailConversation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.AssignEmailConversation, {
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

EmailApiClient.prototype.suspendEmailConversation = function suspendEmailConversation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.SuspendEmailConversation, {
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

EmailApiClient.prototype.listCampaignsByConnectedInboxId = function listCampaignsByConnectedInboxId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.ListCampaignsByConnectedInboxId, {
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

EmailApiClient.prototype.closeEmailConversation = function closeEmailConversation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmailApi.CloseEmailConversation, {
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

exports.EmailApiClient = EmailApiClient;

