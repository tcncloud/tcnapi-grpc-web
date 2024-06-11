// package: api.v1alpha1.org.skills
// file: api/v1alpha1/org/skills/service.proto

var api_v1alpha1_org_skills_service_pb = require("../../../../api/v1alpha1/org/skills/service_pb");
var api_v1alpha1_org_skills_entities_pb = require("../../../../api/v1alpha1/org/skills/entities_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var SkillsService = (function () {
  function SkillsService() {}
  SkillsService.serviceName = "api.v1alpha1.org.skills.SkillsService";
  return SkillsService;
}());

SkillsService.CreateSkillGroup = {
  methodName: "CreateSkillGroup",
  service: SkillsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_skills_entities_pb.CreateSkillGroupRequest,
  responseType: api_v1alpha1_org_skills_entities_pb.CreateSkillGroupResponse
};

SkillsService.ListSkillGroups = {
  methodName: "ListSkillGroups",
  service: SkillsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_skills_entities_pb.ListSkillGroupsRequest,
  responseType: api_v1alpha1_org_skills_entities_pb.ListSkillGroupsResponse
};

SkillsService.UpdateSkillGroup = {
  methodName: "UpdateSkillGroup",
  service: SkillsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_skills_entities_pb.UpdateSkillGroupRequest,
  responseType: api_v1alpha1_org_skills_entities_pb.UpdateSkillGroupResponse
};

SkillsService.GetSkillGroup = {
  methodName: "GetSkillGroup",
  service: SkillsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_skills_entities_pb.GetSkillGroupRequest,
  responseType: api_v1alpha1_org_skills_entities_pb.GetSkillGroupResponse
};

SkillsService.DeleteSkillGroup = {
  methodName: "DeleteSkillGroup",
  service: SkillsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_skills_entities_pb.DeleteSkillGroupRequest,
  responseType: api_v1alpha1_org_skills_entities_pb.DeleteSkillGroupResponse
};

SkillsService.RemoveSkillFromAllGroups = {
  methodName: "RemoveSkillFromAllGroups",
  service: SkillsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_skills_entities_pb.RemoveSkillFromAllGroupsRequest,
  responseType: api_v1alpha1_org_skills_entities_pb.RemoveSkillFromAllGroupsResponse
};

SkillsService.AssignSkillGroups = {
  methodName: "AssignSkillGroups",
  service: SkillsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_skills_entities_pb.AssignSkillGroupsRequest,
  responseType: api_v1alpha1_org_skills_entities_pb.AssignSkillGroupsResponse
};

SkillsService.UpdateUsersOnSkillGroup = {
  methodName: "UpdateUsersOnSkillGroup",
  service: SkillsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_skills_entities_pb.UpdateUsersOnSkillGroupRequest,
  responseType: api_v1alpha1_org_skills_entities_pb.UpdateUsersOnSkillGroupResponse
};

SkillsService.RevokeSkillGroups = {
  methodName: "RevokeSkillGroups",
  service: SkillsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_skills_entities_pb.RevokeSkillGroupsRequest,
  responseType: api_v1alpha1_org_skills_entities_pb.RevokeSkillGroupsResponse
};

SkillsService.GetUserSkillGroups = {
  methodName: "GetUserSkillGroups",
  service: SkillsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_skills_entities_pb.GetUserSkillGroupsRequest,
  responseType: api_v1alpha1_org_skills_entities_pb.GetUserSkillGroupsResponse
};

SkillsService.GetUserSkills = {
  methodName: "GetUserSkills",
  service: SkillsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_skills_entities_pb.GetUserSkillsRequest,
  responseType: api_v1alpha1_org_skills_entities_pb.GetUserSkillsResponse
};

SkillsService.GetSkillGroupMembers = {
  methodName: "GetSkillGroupMembers",
  service: SkillsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_skills_entities_pb.GetSkillGroupMembersRequest,
  responseType: api_v1alpha1_org_skills_entities_pb.GetSkillGroupMembersResponse
};

SkillsService.ListSkillGroupsMembers = {
  methodName: "ListSkillGroupsMembers",
  service: SkillsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_skills_entities_pb.ListSkillGroupsMembersRequest,
  responseType: api_v1alpha1_org_skills_entities_pb.ListSkillGroupsMembersResponse
};

SkillsService.GetAgentSkills = {
  methodName: "GetAgentSkills",
  service: SkillsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_skills_entities_pb.GetAgentSkillsRequest,
  responseType: api_v1alpha1_org_skills_entities_pb.GetAgentSkillsResponse
};

SkillsService.ListSkillsForCurrentAgent = {
  methodName: "ListSkillsForCurrentAgent",
  service: SkillsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_skills_entities_pb.ListSkillsForCurrentAgentRequest,
  responseType: api_v1alpha1_org_skills_entities_pb.ListSkillsForCurrentAgentResponse
};

SkillsService.ListAssignedSkillGroups = {
  methodName: "ListAssignedSkillGroups",
  service: SkillsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_skills_entities_pb.ListAssignedSkillGroupsRequest,
  responseType: api_v1alpha1_org_skills_entities_pb.ListAssignedSkillGroupsResponse
};

SkillsService.AssignOwnSkillGroups = {
  methodName: "AssignOwnSkillGroups",
  service: SkillsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_skills_entities_pb.AssignOwnSkillGroupsRequest,
  responseType: api_v1alpha1_org_skills_entities_pb.AssignOwnSkillGroupsResponse
};

SkillsService.RevokeOwnSkillGroups = {
  methodName: "RevokeOwnSkillGroups",
  service: SkillsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_skills_entities_pb.RevokeOwnSkillGroupsRequest,
  responseType: api_v1alpha1_org_skills_entities_pb.RevokeOwnSkillGroupsResponse
};

exports.SkillsService = SkillsService;

function SkillsServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

SkillsServiceClient.prototype.createSkillGroup = function createSkillGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SkillsService.CreateSkillGroup, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SkillsServiceClient.prototype.listSkillGroups = function listSkillGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SkillsService.ListSkillGroups, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SkillsServiceClient.prototype.updateSkillGroup = function updateSkillGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SkillsService.UpdateSkillGroup, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SkillsServiceClient.prototype.getSkillGroup = function getSkillGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SkillsService.GetSkillGroup, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SkillsServiceClient.prototype.deleteSkillGroup = function deleteSkillGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SkillsService.DeleteSkillGroup, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SkillsServiceClient.prototype.removeSkillFromAllGroups = function removeSkillFromAllGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SkillsService.RemoveSkillFromAllGroups, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SkillsServiceClient.prototype.assignSkillGroups = function assignSkillGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SkillsService.AssignSkillGroups, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SkillsServiceClient.prototype.updateUsersOnSkillGroup = function updateUsersOnSkillGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SkillsService.UpdateUsersOnSkillGroup, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SkillsServiceClient.prototype.revokeSkillGroups = function revokeSkillGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SkillsService.RevokeSkillGroups, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SkillsServiceClient.prototype.getUserSkillGroups = function getUserSkillGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SkillsService.GetUserSkillGroups, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SkillsServiceClient.prototype.getUserSkills = function getUserSkills(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SkillsService.GetUserSkills, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SkillsServiceClient.prototype.getSkillGroupMembers = function getSkillGroupMembers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SkillsService.GetSkillGroupMembers, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SkillsServiceClient.prototype.listSkillGroupsMembers = function listSkillGroupsMembers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SkillsService.ListSkillGroupsMembers, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SkillsServiceClient.prototype.getAgentSkills = function getAgentSkills(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SkillsService.GetAgentSkills, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SkillsServiceClient.prototype.listSkillsForCurrentAgent = function listSkillsForCurrentAgent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SkillsService.ListSkillsForCurrentAgent, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SkillsServiceClient.prototype.listAssignedSkillGroups = function listAssignedSkillGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SkillsService.ListAssignedSkillGroups, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SkillsServiceClient.prototype.assignOwnSkillGroups = function assignOwnSkillGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SkillsService.AssignOwnSkillGroups, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SkillsServiceClient.prototype.revokeOwnSkillGroups = function revokeOwnSkillGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SkillsService.RevokeOwnSkillGroups, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.SkillsServiceClient = SkillsServiceClient;

