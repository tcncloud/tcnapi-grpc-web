// package: api.v0alpha
// file: api/v0alpha/compliance.proto

var api_v0alpha_compliance_pb = require("../../api/v0alpha/compliance_pb");
var google_longrunning_operations_pb = require("../../google/longrunning/operations_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Compliance = (function () {
  function Compliance() {}
  Compliance.serviceName = "api.v0alpha.Compliance";
  return Compliance;
}());

Compliance.RuleAutoComplete = {
  methodName: "RuleAutoComplete",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.RuleAutoCompleteReq,
  responseType: api_v0alpha_compliance_pb.RuleAutoCompleteRes
};

Compliance.CheckRuleSet = {
  methodName: "CheckRuleSet",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.CheckRuleSetReq,
  responseType: api_v0alpha_compliance_pb.CheckRuleSetRes
};

Compliance.AssignRuleSet = {
  methodName: "AssignRuleSet",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.AssignRuleSetReq,
  responseType: api_v0alpha_compliance_pb.AssignRuleSetRes
};

Compliance.ListRuleSets = {
  methodName: "ListRuleSets",
  service: Compliance,
  requestStream: false,
  responseStream: true,
  requestType: api_v0alpha_compliance_pb.ListRuleSetsReq,
  responseType: api_v0alpha_compliance_pb.ListRuleSetsRes
};

Compliance.GetRuleSet = {
  methodName: "GetRuleSet",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.GetRuleSetReq,
  responseType: api_v0alpha_compliance_pb.RuleSet
};

Compliance.GetRuleSetByName = {
  methodName: "GetRuleSetByName",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.GetRuleSetByNameReq,
  responseType: api_v0alpha_compliance_pb.RuleSet
};

Compliance.CreateRuleSet = {
  methodName: "CreateRuleSet",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.CreateRuleSetReq,
  responseType: api_v0alpha_compliance_pb.RuleSet
};

Compliance.RenameRuleSet = {
  methodName: "RenameRuleSet",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.RenameRuleSetReq,
  responseType: api_v0alpha_compliance_pb.RenameRuleSetRes
};

Compliance.EnableRuleSet = {
  methodName: "EnableRuleSet",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.EnableRuleSetReq,
  responseType: api_v0alpha_compliance_pb.EnableRuleSetRes
};

Compliance.DisableRuleSet = {
  methodName: "DisableRuleSet",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.DisableRuleSetReq,
  responseType: api_v0alpha_compliance_pb.DisableRuleSetRes
};

Compliance.CreateScrubList = {
  methodName: "CreateScrubList",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.CreateScrubListReq,
  responseType: api_v0alpha_compliance_pb.ScrubListRes
};

Compliance.AddScrubListEntries = {
  methodName: "AddScrubListEntries",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.AddScrubListEntriesReq,
  responseType: api_v0alpha_compliance_pb.ScrubListRes
};

Compliance.UpdateScrubEntry = {
  methodName: "UpdateScrubEntry",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.UpdateScrubEntryReq,
  responseType: api_v0alpha_compliance_pb.UpdateScrubEntryRes
};

Compliance.DeleteScrubListEntries = {
  methodName: "DeleteScrubListEntries",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.DeleteScrubListEntriesReq,
  responseType: api_v0alpha_compliance_pb.ScrubListRes
};

Compliance.GetScrubList = {
  methodName: "GetScrubList",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.GetScrubListReq,
  responseType: api_v0alpha_compliance_pb.ScrubListRes
};

Compliance.DeleteScrubList = {
  methodName: "DeleteScrubList",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.DeleteScrubListReq,
  responseType: api_v0alpha_compliance_pb.ScrubListRes
};

Compliance.GetDefaultRules = {
  methodName: "GetDefaultRules",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.GetDefaultRulesReq,
  responseType: api_v0alpha_compliance_pb.GetDefaultRulesRes
};

Compliance.GetScrubLists = {
  methodName: "GetScrubLists",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.GetScrubListsReq,
  responseType: api_v0alpha_compliance_pb.ScrubListsRes
};

Compliance.SearchScrubList = {
  methodName: "SearchScrubList",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.SearchScrubListReq,
  responseType: api_v0alpha_compliance_pb.ScrubList
};

Compliance.GetScrubListUploadUrl = {
  methodName: "GetScrubListUploadUrl",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.GetScrubListUploadUrlReq,
  responseType: api_v0alpha_compliance_pb.GetScrubListUploadUrlRes
};

Compliance.ProcessScrubListUpload = {
  methodName: "ProcessScrubListUpload",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.ProcessScrubListUploadReq,
  responseType: google_longrunning_operations_pb.Operation
};

Compliance.ProcessScrubListDeleteUpload = {
  methodName: "ProcessScrubListDeleteUpload",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.ProcessScrubListDeleteUploadReq,
  responseType: google_longrunning_operations_pb.Operation
};

Compliance.ExportScrubList = {
  methodName: "ExportScrubList",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.ExportScrubListReq,
  responseType: api_v0alpha_compliance_pb.ExportScrubListRes
};

Compliance.PurgeScrubList = {
  methodName: "PurgeScrubList",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.PurgeScrubListReq,
  responseType: api_v0alpha_compliance_pb.PurgeScrubListRes
};

Compliance.CreateScenario = {
  methodName: "CreateScenario",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.CreateScenarioReq,
  responseType: api_v0alpha_compliance_pb.CreateScenarioRes
};

Compliance.GetScenario = {
  methodName: "GetScenario",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.GetScenarioReq,
  responseType: api_v0alpha_compliance_pb.GetScenarioRes
};

Compliance.UpdateScenario = {
  methodName: "UpdateScenario",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.UpdateScenarioReq,
  responseType: api_v0alpha_compliance_pb.UpdateScenarioRes
};

Compliance.DeleteScenario = {
  methodName: "DeleteScenario",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.DeleteScenarioReq,
  responseType: api_v0alpha_compliance_pb.DeleteScenarioRes
};

Compliance.RunAssignedScenarios = {
  methodName: "RunAssignedScenarios",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.RunAssignedScenariosReq,
  responseType: api_v0alpha_compliance_pb.RunAssignedScenariosRes
};

Compliance.ListAllScenarios = {
  methodName: "ListAllScenarios",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.ListAllScenariosReq,
  responseType: api_v0alpha_compliance_pb.ListAllScenariosRes
};

Compliance.ListUnassignedScenarios = {
  methodName: "ListUnassignedScenarios",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.ListUnassignedScenariosReq,
  responseType: api_v0alpha_compliance_pb.ListUnassignedScenariosRes
};

Compliance.ListAssignedRuleSets = {
  methodName: "ListAssignedRuleSets",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.ListAssignedRuleSetsReq,
  responseType: api_v0alpha_compliance_pb.ListAssignedRuleSetsRes
};

Compliance.ListAssignedScenarios = {
  methodName: "ListAssignedScenarios",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.ListAssignedScenariosReq,
  responseType: api_v0alpha_compliance_pb.ListAssignedScenariosRes
};

Compliance.AssignScenario = {
  methodName: "AssignScenario",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.AssignScenarioReq,
  responseType: google_protobuf_empty_pb.Empty
};

Compliance.UnassignScenario = {
  methodName: "UnassignScenario",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.UnassignScenarioReq,
  responseType: google_protobuf_empty_pb.Empty
};

Compliance.EnableScenario = {
  methodName: "EnableScenario",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.EnableScenarioReq,
  responseType: google_protobuf_empty_pb.Empty
};

Compliance.DisableScenario = {
  methodName: "DisableScenario",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.DisableScenarioReq,
  responseType: google_protobuf_empty_pb.Empty
};

Compliance.GetFieldNames = {
  methodName: "GetFieldNames",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.GetFieldNamesReq,
  responseType: api_v0alpha_compliance_pb.FieldNames
};

Compliance.GetResultDescriptions = {
  methodName: "GetResultDescriptions",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.GetResultDescriptionsReq,
  responseType: api_v0alpha_compliance_pb.FieldNames
};

Compliance.CreateConsentProfile = {
  methodName: "CreateConsentProfile",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.CreateConsentProfileReq,
  responseType: api_v0alpha_compliance_pb.CreateConsentProfileRes
};

Compliance.CreateConsent = {
  methodName: "CreateConsent",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.CreateConsentReq,
  responseType: api_v0alpha_compliance_pb.CreateConsentRes
};

Compliance.GetConsentProfile = {
  methodName: "GetConsentProfile",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.GetConsentProfileReq,
  responseType: api_v0alpha_compliance_pb.ConsentProfile
};

Compliance.GetConsent = {
  methodName: "GetConsent",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.GetConsentReq,
  responseType: api_v0alpha_compliance_pb.Consent
};

Compliance.GetConsentByProfileAndContent = {
  methodName: "GetConsentByProfileAndContent",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.GetConsentByProfileAndContentReq,
  responseType: api_v0alpha_compliance_pb.GetConsentByProfileAndContentRes
};

Compliance.GetConsentByContent = {
  methodName: "GetConsentByContent",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.GetConsentByContentReq,
  responseType: api_v0alpha_compliance_pb.GetConsentByContentRes
};

Compliance.SearchConsentByContent = {
  methodName: "SearchConsentByContent",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.SearchConsentByContentReq,
  responseType: api_v0alpha_compliance_pb.SearchConsentByContentRes
};

Compliance.UpdateConsent = {
  methodName: "UpdateConsent",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.UpdateConsentReq,
  responseType: google_protobuf_empty_pb.Empty
};

Compliance.ExpireConsent = {
  methodName: "ExpireConsent",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.ExpireConsentReq,
  responseType: google_protobuf_empty_pb.Empty
};

Compliance.RevokeConsent = {
  methodName: "RevokeConsent",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.RevokeConsentReq,
  responseType: google_protobuf_empty_pb.Empty
};

Compliance.DeleteConsent = {
  methodName: "DeleteConsent",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.DeleteConsentReq,
  responseType: google_protobuf_empty_pb.Empty
};

Compliance.ProcessConsentListDeleteUpload = {
  methodName: "ProcessConsentListDeleteUpload",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.ProcessConsentListDeleteUploadReq,
  responseType: google_longrunning_operations_pb.Operation
};

Compliance.EnableConsentProfile = {
  methodName: "EnableConsentProfile",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.EnableConsentProfileReq,
  responseType: google_protobuf_empty_pb.Empty
};

Compliance.DisableConsentProfile = {
  methodName: "DisableConsentProfile",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.DisableConsentProfileReq,
  responseType: google_protobuf_empty_pb.Empty
};

Compliance.ListConsentProfiles = {
  methodName: "ListConsentProfiles",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.ListConsentProfilesReq,
  responseType: api_v0alpha_compliance_pb.ListConsentProfilesRes
};

Compliance.GetConsentUploadUrl = {
  methodName: "GetConsentUploadUrl",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.GetConsentUploadUrlReq,
  responseType: api_v0alpha_compliance_pb.GetConsentUploadUrlRes
};

Compliance.ProcessConsentUpload = {
  methodName: "ProcessConsentUpload",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.ProcessConsentUploadReq,
  responseType: google_longrunning_operations_pb.Operation
};

Compliance.ListConsentTopics = {
  methodName: "ListConsentTopics",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.ListConsentTopicsReq,
  responseType: api_v0alpha_compliance_pb.ListConsentTopicsRes
};

Compliance.GetConsentTopic = {
  methodName: "GetConsentTopic",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.GetConsentTopicReq,
  responseType: api_v0alpha_compliance_pb.ConsentTopic
};

Compliance.CreateConsentTopic = {
  methodName: "CreateConsentTopic",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.ConsentTopic,
  responseType: api_v0alpha_compliance_pb.Empty
};

Compliance.DeleteConsentTopic = {
  methodName: "DeleteConsentTopic",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.ConsentTopic,
  responseType: api_v0alpha_compliance_pb.Empty
};

Compliance.UpdateConsentTopic = {
  methodName: "UpdateConsentTopic",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.UpdateConsentTopicReq,
  responseType: api_v0alpha_compliance_pb.Empty
};

Compliance.ProcessOutboundCall = {
  methodName: "ProcessOutboundCall",
  service: Compliance,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_compliance_pb.ProcessOutboundCallReq,
  responseType: api_v0alpha_compliance_pb.ProcessRes
};

exports.Compliance = Compliance;

function ComplianceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ComplianceClient.prototype.ruleAutoComplete = function ruleAutoComplete(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.RuleAutoComplete, {
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

ComplianceClient.prototype.checkRuleSet = function checkRuleSet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.CheckRuleSet, {
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

ComplianceClient.prototype.assignRuleSet = function assignRuleSet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.AssignRuleSet, {
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

ComplianceClient.prototype.listRuleSets = function listRuleSets(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Compliance.ListRuleSets, {
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

ComplianceClient.prototype.getRuleSet = function getRuleSet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.GetRuleSet, {
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

ComplianceClient.prototype.getRuleSetByName = function getRuleSetByName(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.GetRuleSetByName, {
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

ComplianceClient.prototype.createRuleSet = function createRuleSet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.CreateRuleSet, {
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

ComplianceClient.prototype.renameRuleSet = function renameRuleSet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.RenameRuleSet, {
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

ComplianceClient.prototype.enableRuleSet = function enableRuleSet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.EnableRuleSet, {
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

ComplianceClient.prototype.disableRuleSet = function disableRuleSet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.DisableRuleSet, {
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

ComplianceClient.prototype.createScrubList = function createScrubList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.CreateScrubList, {
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

ComplianceClient.prototype.addScrubListEntries = function addScrubListEntries(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.AddScrubListEntries, {
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

ComplianceClient.prototype.updateScrubEntry = function updateScrubEntry(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.UpdateScrubEntry, {
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

ComplianceClient.prototype.deleteScrubListEntries = function deleteScrubListEntries(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.DeleteScrubListEntries, {
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

ComplianceClient.prototype.getScrubList = function getScrubList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.GetScrubList, {
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

ComplianceClient.prototype.deleteScrubList = function deleteScrubList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.DeleteScrubList, {
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

ComplianceClient.prototype.getDefaultRules = function getDefaultRules(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.GetDefaultRules, {
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

ComplianceClient.prototype.getScrubLists = function getScrubLists(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.GetScrubLists, {
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

ComplianceClient.prototype.searchScrubList = function searchScrubList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.SearchScrubList, {
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

ComplianceClient.prototype.getScrubListUploadUrl = function getScrubListUploadUrl(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.GetScrubListUploadUrl, {
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

ComplianceClient.prototype.processScrubListUpload = function processScrubListUpload(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.ProcessScrubListUpload, {
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

ComplianceClient.prototype.processScrubListDeleteUpload = function processScrubListDeleteUpload(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.ProcessScrubListDeleteUpload, {
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

ComplianceClient.prototype.exportScrubList = function exportScrubList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.ExportScrubList, {
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

ComplianceClient.prototype.purgeScrubList = function purgeScrubList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.PurgeScrubList, {
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

ComplianceClient.prototype.createScenario = function createScenario(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.CreateScenario, {
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

ComplianceClient.prototype.getScenario = function getScenario(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.GetScenario, {
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

ComplianceClient.prototype.updateScenario = function updateScenario(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.UpdateScenario, {
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

ComplianceClient.prototype.deleteScenario = function deleteScenario(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.DeleteScenario, {
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

ComplianceClient.prototype.runAssignedScenarios = function runAssignedScenarios(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.RunAssignedScenarios, {
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

ComplianceClient.prototype.listAllScenarios = function listAllScenarios(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.ListAllScenarios, {
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

ComplianceClient.prototype.listUnassignedScenarios = function listUnassignedScenarios(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.ListUnassignedScenarios, {
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

ComplianceClient.prototype.listAssignedRuleSets = function listAssignedRuleSets(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.ListAssignedRuleSets, {
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

ComplianceClient.prototype.listAssignedScenarios = function listAssignedScenarios(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.ListAssignedScenarios, {
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

ComplianceClient.prototype.assignScenario = function assignScenario(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.AssignScenario, {
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

ComplianceClient.prototype.unassignScenario = function unassignScenario(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.UnassignScenario, {
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

ComplianceClient.prototype.enableScenario = function enableScenario(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.EnableScenario, {
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

ComplianceClient.prototype.disableScenario = function disableScenario(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.DisableScenario, {
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

ComplianceClient.prototype.getFieldNames = function getFieldNames(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.GetFieldNames, {
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

ComplianceClient.prototype.getResultDescriptions = function getResultDescriptions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.GetResultDescriptions, {
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

ComplianceClient.prototype.createConsentProfile = function createConsentProfile(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.CreateConsentProfile, {
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

ComplianceClient.prototype.createConsent = function createConsent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.CreateConsent, {
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

ComplianceClient.prototype.getConsentProfile = function getConsentProfile(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.GetConsentProfile, {
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

ComplianceClient.prototype.getConsent = function getConsent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.GetConsent, {
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

ComplianceClient.prototype.getConsentByProfileAndContent = function getConsentByProfileAndContent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.GetConsentByProfileAndContent, {
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

ComplianceClient.prototype.getConsentByContent = function getConsentByContent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.GetConsentByContent, {
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

ComplianceClient.prototype.searchConsentByContent = function searchConsentByContent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.SearchConsentByContent, {
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

ComplianceClient.prototype.updateConsent = function updateConsent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.UpdateConsent, {
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

ComplianceClient.prototype.expireConsent = function expireConsent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.ExpireConsent, {
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

ComplianceClient.prototype.revokeConsent = function revokeConsent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.RevokeConsent, {
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

ComplianceClient.prototype.deleteConsent = function deleteConsent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.DeleteConsent, {
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

ComplianceClient.prototype.processConsentListDeleteUpload = function processConsentListDeleteUpload(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.ProcessConsentListDeleteUpload, {
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

ComplianceClient.prototype.enableConsentProfile = function enableConsentProfile(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.EnableConsentProfile, {
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

ComplianceClient.prototype.disableConsentProfile = function disableConsentProfile(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.DisableConsentProfile, {
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

ComplianceClient.prototype.listConsentProfiles = function listConsentProfiles(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.ListConsentProfiles, {
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

ComplianceClient.prototype.getConsentUploadUrl = function getConsentUploadUrl(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.GetConsentUploadUrl, {
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

ComplianceClient.prototype.processConsentUpload = function processConsentUpload(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.ProcessConsentUpload, {
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

ComplianceClient.prototype.listConsentTopics = function listConsentTopics(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.ListConsentTopics, {
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

ComplianceClient.prototype.getConsentTopic = function getConsentTopic(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.GetConsentTopic, {
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

ComplianceClient.prototype.createConsentTopic = function createConsentTopic(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.CreateConsentTopic, {
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

ComplianceClient.prototype.deleteConsentTopic = function deleteConsentTopic(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.DeleteConsentTopic, {
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

ComplianceClient.prototype.updateConsentTopic = function updateConsentTopic(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.UpdateConsentTopic, {
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

ComplianceClient.prototype.processOutboundCall = function processOutboundCall(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Compliance.ProcessOutboundCall, {
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

exports.ComplianceClient = ComplianceClient;

