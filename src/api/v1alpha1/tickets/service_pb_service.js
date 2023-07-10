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

exports.TicketsClient = TicketsClient;

