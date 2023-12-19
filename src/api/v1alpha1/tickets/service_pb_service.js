// package: api.v1alpha1.tickets
// file: api/v1alpha1/tickets/service.proto

var api_v1alpha1_tickets_service_pb = require("../../../api/v1alpha1/tickets/service_pb");
var api_v1alpha1_tickets_project_pb = require("../../../api/v1alpha1/tickets/project_pb");
var api_v1alpha1_tickets_ticket_pb = require("../../../api/v1alpha1/tickets/ticket_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Tickets = (function () {
  function Tickets() {}
  Tickets.serviceName = "api.v1alpha1.tickets.Tickets";
  return Tickets;
}());

Tickets.CreateTicket = {
  methodName: "CreateTicket",
  service: Tickets,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_tickets_ticket_pb.CreateTicketReq,
  responseType: api_v1alpha1_tickets_ticket_pb.CreateTicketRes
};

Tickets.EditTicket = {
  methodName: "EditTicket",
  service: Tickets,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_tickets_ticket_pb.EditTicketReq,
  responseType: api_v1alpha1_tickets_ticket_pb.EditTicketRes
};

Tickets.ListTickets = {
  methodName: "ListTickets",
  service: Tickets,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_tickets_ticket_pb.ListTicketsReq,
  responseType: api_v1alpha1_tickets_ticket_pb.ListTicketsRes
};

Tickets.AssignTicket = {
  methodName: "AssignTicket",
  service: Tickets,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_tickets_ticket_pb.AssignTicketReq,
  responseType: api_v1alpha1_tickets_ticket_pb.AssignTicketRes
};

Tickets.CloseTicket = {
  methodName: "CloseTicket",
  service: Tickets,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_tickets_ticket_pb.CloseTicketReq,
  responseType: api_v1alpha1_tickets_ticket_pb.CloseTicketRes
};

Tickets.ViewTicket = {
  methodName: "ViewTicket",
  service: Tickets,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_tickets_ticket_pb.ViewTicketReq,
  responseType: api_v1alpha1_tickets_ticket_pb.ViewTicketRes
};

Tickets.CreateComment = {
  methodName: "CreateComment",
  service: Tickets,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_tickets_ticket_pb.CreateCommentReq,
  responseType: api_v1alpha1_tickets_ticket_pb.CreateCommentRes
};

Tickets.EnableProject = {
  methodName: "EnableProject",
  service: Tickets,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_tickets_project_pb.EnableProjectReq,
  responseType: api_v1alpha1_tickets_project_pb.EnableProjectRes
};

Tickets.ListEnabledProjects = {
  methodName: "ListEnabledProjects",
  service: Tickets,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_tickets_project_pb.ListEnabledProjectsReq,
  responseType: api_v1alpha1_tickets_project_pb.ListEnabledProjectsRes
};

Tickets.CreateSLA = {
  methodName: "CreateSLA",
  service: Tickets,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_tickets_ticket_pb.CreateSlaReq,
  responseType: api_v1alpha1_tickets_ticket_pb.CreateSlaRes
};

Tickets.ListSLA = {
  methodName: "ListSLA",
  service: Tickets,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_tickets_ticket_pb.ListSlaReq,
  responseType: api_v1alpha1_tickets_ticket_pb.ListSlaRes
};

Tickets.UpdateSLA = {
  methodName: "UpdateSLA",
  service: Tickets,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_tickets_ticket_pb.UpdateSlaReq,
  responseType: api_v1alpha1_tickets_ticket_pb.UpdateSlaRes
};

Tickets.ListSLACondition = {
  methodName: "ListSLACondition",
  service: Tickets,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_tickets_ticket_pb.ListSlaConditionReq,
  responseType: api_v1alpha1_tickets_ticket_pb.ListSlaConditionRes
};

Tickets.ReplyComment = {
  methodName: "ReplyComment",
  service: Tickets,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_tickets_ticket_pb.ReplyCommentReq,
  responseType: api_v1alpha1_tickets_ticket_pb.ReplyCommentRes
};

Tickets.ListTicketAuditLog = {
  methodName: "ListTicketAuditLog",
  service: Tickets,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_tickets_project_pb.ListTicketAuditLogReq,
  responseType: api_v1alpha1_tickets_project_pb.ListTicketAuditLogRes
};

Tickets.AssignSelf = {
  methodName: "AssignSelf",
  service: Tickets,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_tickets_ticket_pb.CreateSelfAssignReq,
  responseType: api_v1alpha1_tickets_ticket_pb.CreateSelfAssignRes
};

Tickets.EditMaskTicket = {
  methodName: "EditMaskTicket",
  service: Tickets,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_tickets_ticket_pb.EditMaskTicketReq,
  responseType: api_v1alpha1_tickets_ticket_pb.EditMaskTicketRes
};

Tickets.ListAllocatedTickets = {
  methodName: "ListAllocatedTickets",
  service: Tickets,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_tickets_ticket_pb.ListAllocatedTicketReq,
  responseType: api_v1alpha1_tickets_ticket_pb.ListAllocatedTicketRes
};

Tickets.ListAvailableAgentTickets = {
  methodName: "ListAvailableAgentTickets",
  service: Tickets,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_tickets_ticket_pb.ListAvailableAgentTicketsRequest,
  responseType: api_v1alpha1_tickets_ticket_pb.ListAvailableAgentTicketsResponse
};

Tickets.ListSkills = {
  methodName: "ListSkills",
  service: Tickets,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_tickets_ticket_pb.ListSkillsRequest,
  responseType: api_v1alpha1_tickets_ticket_pb.ListSkillsResponse
};

Tickets.ListUsers = {
  methodName: "ListUsers",
  service: Tickets,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_tickets_ticket_pb.ListUsersRequest,
  responseType: api_v1alpha1_tickets_ticket_pb.ListUsersResponse
};

Tickets.CloseTicketAction = {
  methodName: "CloseTicketAction",
  service: Tickets,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_tickets_ticket_pb.CloseTicketActionRequest,
  responseType: api_v1alpha1_tickets_ticket_pb.CloseTicketActionResponse
};

Tickets.AssignTicketAction = {
  methodName: "AssignTicketAction",
  service: Tickets,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_tickets_ticket_pb.AssignTicketActionRequest,
  responseType: api_v1alpha1_tickets_ticket_pb.AssignTicketActionResponse
};

Tickets.CreateTicketAction = {
  methodName: "CreateTicketAction",
  service: Tickets,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_tickets_ticket_pb.CreateTicketActionRequest,
  responseType: api_v1alpha1_tickets_ticket_pb.CreateTicketActionResponse
};

Tickets.ChangeTicketStatus = {
  methodName: "ChangeTicketStatus",
  service: Tickets,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_tickets_ticket_pb.ChangeTicketStatusRequest,
  responseType: api_v1alpha1_tickets_ticket_pb.ChangeTicketStatusResponse
};

Tickets.CreateTicketTemplate = {
  methodName: "CreateTicketTemplate",
  service: Tickets,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_tickets_ticket_pb.CreateTicketTemplateRequest,
  responseType: api_v1alpha1_tickets_ticket_pb.CreateTicketTemplateResponse
};

Tickets.EditTicketTemplate = {
  methodName: "EditTicketTemplate",
  service: Tickets,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_tickets_ticket_pb.EditTicketTemplateRequest,
  responseType: api_v1alpha1_tickets_ticket_pb.EditTicketTemplateResponse
};

Tickets.ListTicketTemplate = {
  methodName: "ListTicketTemplate",
  service: Tickets,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_tickets_ticket_pb.ListTicketTemplateRequest,
  responseType: api_v1alpha1_tickets_ticket_pb.ListTicketTemplateResponse
};

Tickets.AssignTicketTemplate = {
  methodName: "AssignTicketTemplate",
  service: Tickets,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_tickets_ticket_pb.AssignProjectTemplateRequest,
  responseType: api_v1alpha1_tickets_ticket_pb.AssignProjectTemplateResponse
};

Tickets.GetAllActionType = {
  methodName: "GetAllActionType",
  service: Tickets,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_tickets_ticket_pb.GetActionTypeRequest,
  responseType: api_v1alpha1_tickets_ticket_pb.GetActionTypeResponse
};

Tickets.GetPhoneNumberType = {
  methodName: "GetPhoneNumberType",
  service: Tickets,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_tickets_ticket_pb.GetPhoneNumberTypeRequest,
  responseType: api_v1alpha1_tickets_ticket_pb.GetPhoneNumberTypeResponse
};

exports.Tickets = Tickets;

function TicketsClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

TicketsClient.prototype.createTicket = function createTicket(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Tickets.CreateTicket, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TicketsClient.prototype.editTicket = function editTicket(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Tickets.EditTicket, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TicketsClient.prototype.listTickets = function listTickets(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Tickets.ListTickets, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TicketsClient.prototype.assignTicket = function assignTicket(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Tickets.AssignTicket, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TicketsClient.prototype.closeTicket = function closeTicket(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Tickets.CloseTicket, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TicketsClient.prototype.viewTicket = function viewTicket(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Tickets.ViewTicket, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TicketsClient.prototype.createComment = function createComment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Tickets.CreateComment, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TicketsClient.prototype.enableProject = function enableProject(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Tickets.EnableProject, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TicketsClient.prototype.listEnabledProjects = function listEnabledProjects(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Tickets.ListEnabledProjects, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TicketsClient.prototype.createSLA = function createSLA(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Tickets.CreateSLA, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TicketsClient.prototype.listSLA = function listSLA(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Tickets.ListSLA, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TicketsClient.prototype.updateSLA = function updateSLA(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Tickets.UpdateSLA, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TicketsClient.prototype.listSLACondition = function listSLACondition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Tickets.ListSLACondition, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TicketsClient.prototype.replyComment = function replyComment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Tickets.ReplyComment, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TicketsClient.prototype.listTicketAuditLog = function listTicketAuditLog(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Tickets.ListTicketAuditLog, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TicketsClient.prototype.assignSelf = function assignSelf(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Tickets.AssignSelf, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TicketsClient.prototype.editMaskTicket = function editMaskTicket(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Tickets.EditMaskTicket, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TicketsClient.prototype.listAllocatedTickets = function listAllocatedTickets(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Tickets.ListAllocatedTickets, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TicketsClient.prototype.listAvailableAgentTickets = function listAvailableAgentTickets(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Tickets.ListAvailableAgentTickets, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TicketsClient.prototype.listSkills = function listSkills(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Tickets.ListSkills, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TicketsClient.prototype.listUsers = function listUsers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Tickets.ListUsers, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TicketsClient.prototype.closeTicketAction = function closeTicketAction(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Tickets.CloseTicketAction, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TicketsClient.prototype.assignTicketAction = function assignTicketAction(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Tickets.AssignTicketAction, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TicketsClient.prototype.createTicketAction = function createTicketAction(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Tickets.CreateTicketAction, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TicketsClient.prototype.changeTicketStatus = function changeTicketStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Tickets.ChangeTicketStatus, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TicketsClient.prototype.createTicketTemplate = function createTicketTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Tickets.CreateTicketTemplate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TicketsClient.prototype.editTicketTemplate = function editTicketTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Tickets.EditTicketTemplate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TicketsClient.prototype.listTicketTemplate = function listTicketTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Tickets.ListTicketTemplate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TicketsClient.prototype.assignTicketTemplate = function assignTicketTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Tickets.AssignTicketTemplate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TicketsClient.prototype.getAllActionType = function getAllActionType(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Tickets.GetAllActionType, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TicketsClient.prototype.getPhoneNumberType = function getPhoneNumberType(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Tickets.GetPhoneNumberType, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.TicketsClient = TicketsClient;

