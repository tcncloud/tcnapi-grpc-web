// package: api.v0alpha
// file: api/v0alpha/smsapi.proto

var api_v0alpha_smsapi_pb = require("../../api/v0alpha/smsapi_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var SmsApi = (function () {
  function SmsApi() {}
  SmsApi.serviceName = "api.v0alpha.SmsApi";
  return SmsApi;
}());

SmsApi.ListSmsTemplates = {
  methodName: "ListSmsTemplates",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.ListSmsTemplatesReq,
  responseType: api_v0alpha_smsapi_pb.ListSmsTemplatesRes
};

SmsApi.CreateSmsTemplate = {
  methodName: "CreateSmsTemplate",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.CreateSmsTemplateReq,
  responseType: api_v0alpha_smsapi_pb.CreateSmsTemplateRes
};

SmsApi.UpdateSmsTemplate = {
  methodName: "UpdateSmsTemplate",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.UpdateSmsTemplateReq,
  responseType: api_v0alpha_smsapi_pb.UpdateSmsTemplateRes
};

SmsApi.DeleteSmsTemplate = {
  methodName: "DeleteSmsTemplate",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.DeleteSmsTemplateReq,
  responseType: api_v0alpha_smsapi_pb.DeleteSmsTemplateRes
};

SmsApi.GetSmsTemplateBySid = {
  methodName: "GetSmsTemplateBySid",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.GetSmsTemplateBySidReq,
  responseType: api_v0alpha_smsapi_pb.GetSmsTemplateBySidRes
};

SmsApi.ListSmsIntentTemplates = {
  methodName: "ListSmsIntentTemplates",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.ListSmsIntentTemplatesReq,
  responseType: api_v0alpha_smsapi_pb.ListSmsIntentTemplatesRes
};

SmsApi.CreateSmsIntentTemplate = {
  methodName: "CreateSmsIntentTemplate",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.SmsIntentTemplate,
  responseType: api_v0alpha_smsapi_pb.CreateSmsIntentTemplateRes
};

SmsApi.UpdateSmsIntentTemplate = {
  methodName: "UpdateSmsIntentTemplate",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.SmsIntentTemplate,
  responseType: api_v0alpha_smsapi_pb.UpdateSmsIntentTemplateRes
};

SmsApi.DeleteSmsIntentTemplate = {
  methodName: "DeleteSmsIntentTemplate",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.DeleteSmsIntentTemplateReq,
  responseType: api_v0alpha_smsapi_pb.DeleteSmsIntentTemplateRes
};

SmsApi.GetSmsIntentTemplateBySid = {
  methodName: "GetSmsIntentTemplateBySid",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.GetSmsIntentTemplateBySidReq,
  responseType: api_v0alpha_smsapi_pb.SmsIntentTemplate
};

SmsApi.ListSmsSourceNumbers = {
  methodName: "ListSmsSourceNumbers",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.ListSmsSourceNumbersReq,
  responseType: api_v0alpha_smsapi_pb.ListSmsSourceNumbersRes
};

SmsApi.CreateSmsSourceNumber = {
  methodName: "CreateSmsSourceNumber",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.CreateSmsSourceNumberReq,
  responseType: api_v0alpha_smsapi_pb.CreateSmsSourceNumberRes
};

SmsApi.UpdateSmsSourceNumber = {
  methodName: "UpdateSmsSourceNumber",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.UpdateSmsSourceNumberReq,
  responseType: api_v0alpha_smsapi_pb.UpdateSmsSourceNumberRes
};

SmsApi.DeleteSmsSourceNumber = {
  methodName: "DeleteSmsSourceNumber",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.DeleteSmsSourceNumberReq,
  responseType: api_v0alpha_smsapi_pb.DeleteSmsSourceNumberRes
};

SmsApi.GetSmsSourceNumberBySid = {
  methodName: "GetSmsSourceNumberBySid",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.GetSmsSourceNumberBySidReq,
  responseType: api_v0alpha_smsapi_pb.SmsNumbers
};

SmsApi.SendSmsNotification = {
  methodName: "SendSmsNotification",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.SendSmsNotificationReq,
  responseType: api_v0alpha_smsapi_pb.SendSmsNotificationRes
};

SmsApi.ListSmsGroupByFilters = {
  methodName: "ListSmsGroupByFilters",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.ListSmsGroupByFiltersReq,
  responseType: api_v0alpha_smsapi_pb.ListSmsGroupByFiltersRes
};

SmsApi.ListSmsGroupsByGroupSids = {
  methodName: "ListSmsGroupsByGroupSids",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.ListSmsGroupsByGroupSidsReq,
  responseType: api_v0alpha_smsapi_pb.ListSmsGroupsByGroupSidsRes
};

SmsApi.ListSmsTasksByGroupSids = {
  methodName: "ListSmsTasksByGroupSids",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.ListSmsTasksByGroupSidsReq,
  responseType: api_v0alpha_smsapi_pb.ListSmsTasksByGroupSidsRes
};

SmsApi.ListSmsGroupByFiltersForAudit = {
  methodName: "ListSmsGroupByFiltersForAudit",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.ListSmsGroupByFiltersReq,
  responseType: api_v0alpha_smsapi_pb.ListSmsGroupByFiltersRes
};

SmsApi.ListSmsGroupsByGroupSidsForAudit = {
  methodName: "ListSmsGroupsByGroupSidsForAudit",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.ListSmsGroupsByGroupSidsReq,
  responseType: api_v0alpha_smsapi_pb.ListSmsGroupsByGroupSidsRes
};

SmsApi.ListSmsTasksByGroupSidsForAudit = {
  methodName: "ListSmsTasksByGroupSidsForAudit",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.ListSmsTasksByGroupSidsReq,
  responseType: api_v0alpha_smsapi_pb.ListSmsTasksByGroupSidsRes
};

SmsApi.ListSmsTasksWithDetailedStatus = {
  methodName: "ListSmsTasksWithDetailedStatus",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.ListSmsTasksWithDetailedStatusReq,
  responseType: api_v0alpha_smsapi_pb.ListSmsTasksWithDetailedStatusRes
};

SmsApi.UpdateSmsGroupStatus = {
  methodName: "UpdateSmsGroupStatus",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.SmsGroupInfo,
  responseType: api_v0alpha_smsapi_pb.UpdateSmsGroupRes
};

SmsApi.UpdateSmsGroupSendsPerMinute = {
  methodName: "UpdateSmsGroupSendsPerMinute",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.SmsGroupInfo,
  responseType: api_v0alpha_smsapi_pb.UpdateSmsGroupRes
};

SmsApi.UpdateSmsGroupScheduleTimes = {
  methodName: "UpdateSmsGroupScheduleTimes",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.SmsGroupInfo,
  responseType: api_v0alpha_smsapi_pb.UpdateSmsGroupRes
};

SmsApi.ScheduleSms = {
  methodName: "ScheduleSms",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.ScheduleSmsReq,
  responseType: api_v0alpha_smsapi_pb.ScheduleSmsRes
};

SmsApi.ResendUnconnectedSms = {
  methodName: "ResendUnconnectedSms",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.ResendUnconnectedSmsReq,
  responseType: api_v0alpha_smsapi_pb.ResendUnconnectedSmsRes
};

SmsApi.SmsActivitySearch = {
  methodName: "SmsActivitySearch",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.SmsActivitySearchReq,
  responseType: api_v0alpha_smsapi_pb.SmsActivitySearchRes
};

SmsApi.CreateInboundSmsTemplate = {
  methodName: "CreateInboundSmsTemplate",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.CreateInboundSmsTemplateReq,
  responseType: api_v0alpha_smsapi_pb.CreateInboundSmsTemplateRes
};

SmsApi.UpdateInboundSmsTemplate = {
  methodName: "UpdateInboundSmsTemplate",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.UpdateInboundSmsTemplateReq,
  responseType: api_v0alpha_smsapi_pb.UpdateInboundSmsTemplateRes
};

SmsApi.DeleteInboundSmsTemplate = {
  methodName: "DeleteInboundSmsTemplate",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.DeleteInboundSmsTemplateReq,
  responseType: api_v0alpha_smsapi_pb.DeleteInboundSmsTemplateRes
};

SmsApi.ListInboundSmsTemplates = {
  methodName: "ListInboundSmsTemplates",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.ListInboundSmsTemplatesReq,
  responseType: api_v0alpha_smsapi_pb.ListInboundSmsTemplatesRes
};

SmsApi.GetInboundSmsTemplateById = {
  methodName: "GetInboundSmsTemplateById",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.GetInboundSmsTemplateByIdReq,
  responseType: api_v0alpha_smsapi_pb.GetInboundSmsTemplateByIdRes
};

SmsApi.CreateInboundSmsGroup = {
  methodName: "CreateInboundSmsGroup",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.CreateInboundSmsGroupReq,
  responseType: api_v0alpha_smsapi_pb.CreateInboundSmsGroupRes
};

SmsApi.UpdateInboundSmsGroup = {
  methodName: "UpdateInboundSmsGroup",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.UpdateInboundSmsGroupReq,
  responseType: api_v0alpha_smsapi_pb.UpdateInboundSmsGroupRes
};

SmsApi.DeleteInboundSmsGroup = {
  methodName: "DeleteInboundSmsGroup",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.DeleteInboundSmsGroupReq,
  responseType: api_v0alpha_smsapi_pb.DeleteInboundSmsGroupRes
};

SmsApi.ListInboundSmsGroups = {
  methodName: "ListInboundSmsGroups",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.ListInboundSmsGroupsReq,
  responseType: api_v0alpha_smsapi_pb.ListInboundSmsGroupsRes
};

SmsApi.ListActiveInboundSmsGroups = {
  methodName: "ListActiveInboundSmsGroups",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.ListActiveInboundSmsGroupsReq,
  responseType: api_v0alpha_smsapi_pb.ListActiveInboundSmsGroupsRes
};

SmsApi.ListInboundSmsGroupByFilters = {
  methodName: "ListInboundSmsGroupByFilters",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.ListInboundSmsGroupByFiltersReq,
  responseType: api_v0alpha_smsapi_pb.ListInboundSmsGroupByFiltersRes
};

SmsApi.GetInboundSmsGroupById = {
  methodName: "GetInboundSmsGroupById",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.GetInboundSmsGroupByIdReq,
  responseType: api_v0alpha_smsapi_pb.GetInboundSmsGroupByIdRes
};

SmsApi.ListInboundSmsGroupsByGroupIds = {
  methodName: "ListInboundSmsGroupsByGroupIds",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.ListInboundSmsGroupsByGroupIdsReq,
  responseType: api_v0alpha_smsapi_pb.ListInboundSmsGroupsByGroupIdsRes
};

SmsApi.StopInboundSmsGroup = {
  methodName: "StopInboundSmsGroup",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.StopInboundSmsGroupReq,
  responseType: api_v0alpha_smsapi_pb.StopInboundSmsGroupRes
};

SmsApi.ScheduleInboundSms = {
  methodName: "ScheduleInboundSms",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.ScheduleInboundSmsReq,
  responseType: api_v0alpha_smsapi_pb.ScheduleInboundSmsRes
};

SmsApi.CreateSmsConversation = {
  methodName: "CreateSmsConversation",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.CreateSmsConversationReq,
  responseType: api_v0alpha_smsapi_pb.CreateSmsConversationRes
};

SmsApi.UpdateSmsConversation = {
  methodName: "UpdateSmsConversation",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.UpdateSmsConversationReq,
  responseType: api_v0alpha_smsapi_pb.UpdateSmsConversationRes
};

SmsApi.DeleteSmsConversation = {
  methodName: "DeleteSmsConversation",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.DeleteSmsConversationReq,
  responseType: api_v0alpha_smsapi_pb.DeleteSmsConversationRes
};

SmsApi.ListSmsConversations = {
  methodName: "ListSmsConversations",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.ListSmsConversationsReq,
  responseType: api_v0alpha_smsapi_pb.ListSmsConversationsRes
};

SmsApi.GetSmsConversationById = {
  methodName: "GetSmsConversationById",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.GetSmsConversationByIdReq,
  responseType: api_v0alpha_smsapi_pb.GetSmsConversationByIdRes
};

SmsApi.GetSmsMessage = {
  methodName: "GetSmsMessage",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.GetSmsMessageReq,
  responseType: api_v0alpha_smsapi_pb.GetSmsMessageRes
};

SmsApi.CreateSmsConversationAudit = {
  methodName: "CreateSmsConversationAudit",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.SmsConversationAudit,
  responseType: api_v0alpha_smsapi_pb.CreateSmsConversationAuditRes
};

SmsApi.ListSmsConversationAudits = {
  methodName: "ListSmsConversationAudits",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.ListSmsConversationAuditsReq,
  responseType: api_v0alpha_smsapi_pb.ListSmsConversationAuditsRes
};

SmsApi.GetSmsConversationAuditById = {
  methodName: "GetSmsConversationAuditById",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.GetSmsConversationAuditByIdReq,
  responseType: api_v0alpha_smsapi_pb.GetSmsConversationAuditByIdRes
};

SmsApi.CreateSmsConversationAssignedAgent = {
  methodName: "CreateSmsConversationAssignedAgent",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.SmsConversationAssignedAgent,
  responseType: api_v0alpha_smsapi_pb.CreateSmsConversationAssignedAgentRes
};

SmsApi.ListSmsConversationAssignedAgents = {
  methodName: "ListSmsConversationAssignedAgents",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.ListSmsConversationAssignedAgentsReq,
  responseType: api_v0alpha_smsapi_pb.ListSmsConversationAssignedAgentsRes
};

SmsApi.GetSmsConversationAssignedAgentById = {
  methodName: "GetSmsConversationAssignedAgentById",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.GetSmsConversationAssignedAgentByIdReq,
  responseType: api_v0alpha_smsapi_pb.GetSmsConversationAssignedAgentByIdRes
};

SmsApi.ListInboundSmsTasksByGroupIds = {
  methodName: "ListInboundSmsTasksByGroupIds",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.ListInboundSmsTasksByGroupIdsReq,
  responseType: api_v0alpha_smsapi_pb.ListInboundSmsTasksByGroupIdsRes
};

SmsApi.StopAllOutboundSmsGroups = {
  methodName: "StopAllOutboundSmsGroups",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.StopAllOutboundSmsGroupsReq,
  responseType: api_v0alpha_smsapi_pb.StopAllOutboundSmsGroupsRes
};

SmsApi.StopAllInboundSmsGroups = {
  methodName: "StopAllInboundSmsGroups",
  service: SmsApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_smsapi_pb.StopAllInboundSmsGroupsReq,
  responseType: api_v0alpha_smsapi_pb.StopAllInboundSmsGroupsRes
};

exports.SmsApi = SmsApi;

function SmsApiClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

SmsApiClient.prototype.listSmsTemplates = function listSmsTemplates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.ListSmsTemplates, {
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

SmsApiClient.prototype.createSmsTemplate = function createSmsTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.CreateSmsTemplate, {
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

SmsApiClient.prototype.updateSmsTemplate = function updateSmsTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.UpdateSmsTemplate, {
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

SmsApiClient.prototype.deleteSmsTemplate = function deleteSmsTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.DeleteSmsTemplate, {
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

SmsApiClient.prototype.getSmsTemplateBySid = function getSmsTemplateBySid(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.GetSmsTemplateBySid, {
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

SmsApiClient.prototype.listSmsIntentTemplates = function listSmsIntentTemplates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.ListSmsIntentTemplates, {
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

SmsApiClient.prototype.createSmsIntentTemplate = function createSmsIntentTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.CreateSmsIntentTemplate, {
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

SmsApiClient.prototype.updateSmsIntentTemplate = function updateSmsIntentTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.UpdateSmsIntentTemplate, {
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

SmsApiClient.prototype.deleteSmsIntentTemplate = function deleteSmsIntentTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.DeleteSmsIntentTemplate, {
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

SmsApiClient.prototype.getSmsIntentTemplateBySid = function getSmsIntentTemplateBySid(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.GetSmsIntentTemplateBySid, {
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

SmsApiClient.prototype.listSmsSourceNumbers = function listSmsSourceNumbers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.ListSmsSourceNumbers, {
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

SmsApiClient.prototype.createSmsSourceNumber = function createSmsSourceNumber(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.CreateSmsSourceNumber, {
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

SmsApiClient.prototype.updateSmsSourceNumber = function updateSmsSourceNumber(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.UpdateSmsSourceNumber, {
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

SmsApiClient.prototype.deleteSmsSourceNumber = function deleteSmsSourceNumber(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.DeleteSmsSourceNumber, {
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

SmsApiClient.prototype.getSmsSourceNumberBySid = function getSmsSourceNumberBySid(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.GetSmsSourceNumberBySid, {
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

SmsApiClient.prototype.sendSmsNotification = function sendSmsNotification(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.SendSmsNotification, {
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

SmsApiClient.prototype.listSmsGroupByFilters = function listSmsGroupByFilters(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.ListSmsGroupByFilters, {
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

SmsApiClient.prototype.listSmsGroupsByGroupSids = function listSmsGroupsByGroupSids(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.ListSmsGroupsByGroupSids, {
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

SmsApiClient.prototype.listSmsTasksByGroupSids = function listSmsTasksByGroupSids(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.ListSmsTasksByGroupSids, {
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

SmsApiClient.prototype.listSmsGroupByFiltersForAudit = function listSmsGroupByFiltersForAudit(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.ListSmsGroupByFiltersForAudit, {
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

SmsApiClient.prototype.listSmsGroupsByGroupSidsForAudit = function listSmsGroupsByGroupSidsForAudit(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.ListSmsGroupsByGroupSidsForAudit, {
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

SmsApiClient.prototype.listSmsTasksByGroupSidsForAudit = function listSmsTasksByGroupSidsForAudit(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.ListSmsTasksByGroupSidsForAudit, {
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

SmsApiClient.prototype.listSmsTasksWithDetailedStatus = function listSmsTasksWithDetailedStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.ListSmsTasksWithDetailedStatus, {
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

SmsApiClient.prototype.updateSmsGroupStatus = function updateSmsGroupStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.UpdateSmsGroupStatus, {
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

SmsApiClient.prototype.updateSmsGroupSendsPerMinute = function updateSmsGroupSendsPerMinute(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.UpdateSmsGroupSendsPerMinute, {
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

SmsApiClient.prototype.updateSmsGroupScheduleTimes = function updateSmsGroupScheduleTimes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.UpdateSmsGroupScheduleTimes, {
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

SmsApiClient.prototype.scheduleSms = function scheduleSms(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.ScheduleSms, {
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

SmsApiClient.prototype.resendUnconnectedSms = function resendUnconnectedSms(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.ResendUnconnectedSms, {
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

SmsApiClient.prototype.smsActivitySearch = function smsActivitySearch(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.SmsActivitySearch, {
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

SmsApiClient.prototype.createInboundSmsTemplate = function createInboundSmsTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.CreateInboundSmsTemplate, {
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

SmsApiClient.prototype.updateInboundSmsTemplate = function updateInboundSmsTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.UpdateInboundSmsTemplate, {
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

SmsApiClient.prototype.deleteInboundSmsTemplate = function deleteInboundSmsTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.DeleteInboundSmsTemplate, {
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

SmsApiClient.prototype.listInboundSmsTemplates = function listInboundSmsTemplates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.ListInboundSmsTemplates, {
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

SmsApiClient.prototype.getInboundSmsTemplateById = function getInboundSmsTemplateById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.GetInboundSmsTemplateById, {
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

SmsApiClient.prototype.createInboundSmsGroup = function createInboundSmsGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.CreateInboundSmsGroup, {
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

SmsApiClient.prototype.updateInboundSmsGroup = function updateInboundSmsGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.UpdateInboundSmsGroup, {
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

SmsApiClient.prototype.deleteInboundSmsGroup = function deleteInboundSmsGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.DeleteInboundSmsGroup, {
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

SmsApiClient.prototype.listInboundSmsGroups = function listInboundSmsGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.ListInboundSmsGroups, {
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

SmsApiClient.prototype.listActiveInboundSmsGroups = function listActiveInboundSmsGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.ListActiveInboundSmsGroups, {
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

SmsApiClient.prototype.listInboundSmsGroupByFilters = function listInboundSmsGroupByFilters(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.ListInboundSmsGroupByFilters, {
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

SmsApiClient.prototype.getInboundSmsGroupById = function getInboundSmsGroupById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.GetInboundSmsGroupById, {
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

SmsApiClient.prototype.listInboundSmsGroupsByGroupIds = function listInboundSmsGroupsByGroupIds(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.ListInboundSmsGroupsByGroupIds, {
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

SmsApiClient.prototype.stopInboundSmsGroup = function stopInboundSmsGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.StopInboundSmsGroup, {
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

SmsApiClient.prototype.scheduleInboundSms = function scheduleInboundSms(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.ScheduleInboundSms, {
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

SmsApiClient.prototype.createSmsConversation = function createSmsConversation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.CreateSmsConversation, {
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

SmsApiClient.prototype.updateSmsConversation = function updateSmsConversation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.UpdateSmsConversation, {
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

SmsApiClient.prototype.deleteSmsConversation = function deleteSmsConversation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.DeleteSmsConversation, {
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

SmsApiClient.prototype.listSmsConversations = function listSmsConversations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.ListSmsConversations, {
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

SmsApiClient.prototype.getSmsConversationById = function getSmsConversationById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.GetSmsConversationById, {
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

SmsApiClient.prototype.getSmsMessage = function getSmsMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.GetSmsMessage, {
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

SmsApiClient.prototype.createSmsConversationAudit = function createSmsConversationAudit(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.CreateSmsConversationAudit, {
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

SmsApiClient.prototype.listSmsConversationAudits = function listSmsConversationAudits(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.ListSmsConversationAudits, {
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

SmsApiClient.prototype.getSmsConversationAuditById = function getSmsConversationAuditById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.GetSmsConversationAuditById, {
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

SmsApiClient.prototype.createSmsConversationAssignedAgent = function createSmsConversationAssignedAgent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.CreateSmsConversationAssignedAgent, {
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

SmsApiClient.prototype.listSmsConversationAssignedAgents = function listSmsConversationAssignedAgents(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.ListSmsConversationAssignedAgents, {
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

SmsApiClient.prototype.getSmsConversationAssignedAgentById = function getSmsConversationAssignedAgentById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.GetSmsConversationAssignedAgentById, {
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

SmsApiClient.prototype.listInboundSmsTasksByGroupIds = function listInboundSmsTasksByGroupIds(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.ListInboundSmsTasksByGroupIds, {
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

SmsApiClient.prototype.stopAllOutboundSmsGroups = function stopAllOutboundSmsGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.StopAllOutboundSmsGroups, {
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

SmsApiClient.prototype.stopAllInboundSmsGroups = function stopAllInboundSmsGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SmsApi.StopAllInboundSmsGroups, {
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

exports.SmsApiClient = SmsApiClient;

