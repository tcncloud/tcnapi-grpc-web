// package: api.v1alpha1.asm
// file: api/v1alpha1/asm/public_service.proto

var api_v1alpha1_asm_public_service_pb = require("../../../api/v1alpha1/asm/public_service_pb");
var api_commons_acd_pb = require("../../../api/commons/acd_pb");
var api_commons_asm_pb = require("../../../api/commons/asm_pb");
var api_commons_omnichannel_pb = require("../../../api/commons/omnichannel_pb");
var api_v1alpha1_asm_service_pb = require("../../../api/v1alpha1/asm/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Asm = (function () {
  function Asm() {}
  Asm.serviceName = "api.v1alpha1.asm.Asm";
  return Asm;
}());

Asm.StreamAgentState = {
  methodName: "StreamAgentState",
  service: Asm,
  requestStream: false,
  responseStream: true,
  requestType: api_v1alpha1_asm_service_pb.StreamAgentStateReq,
  responseType: api_commons_asm_pb.StreamAgentStateRes
};

Asm.ManagerStreamAgentState = {
  methodName: "ManagerStreamAgentState",
  service: Asm,
  requestStream: false,
  responseStream: true,
  requestType: api_v1alpha1_asm_service_pb.ManagerStreamAgentStateReq,
  responseType: api_commons_acd_pb.AgentState
};

Asm.PushEvents = {
  methodName: "PushEvents",
  service: Asm,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_asm_service_pb.PushEventsReq,
  responseType: api_v1alpha1_asm_service_pb.PushEventsRes
};

Asm.CreateSession = {
  methodName: "CreateSession",
  service: Asm,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_asm_service_pb.CreateSessionReq,
  responseType: api_v1alpha1_asm_service_pb.CreateSessionRes
};

Asm.EndSession = {
  methodName: "EndSession",
  service: Asm,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_asm_service_pb.EndSessionReq,
  responseType: api_v1alpha1_asm_service_pb.EndSessionRes
};

Asm.GetCurrentSession = {
  methodName: "GetCurrentSession",
  service: Asm,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_asm_service_pb.GetCurrentSessionReq,
  responseType: api_v1alpha1_asm_service_pb.AsmSession
};

Asm.EnableVoice = {
  methodName: "EnableVoice",
  service: Asm,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_asm_service_pb.EnableVoiceReq,
  responseType: api_v1alpha1_asm_service_pb.EnableVoiceRes
};

Asm.DisableVoice = {
  methodName: "DisableVoice",
  service: Asm,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_asm_service_pb.DisableVoiceReq,
  responseType: api_v1alpha1_asm_service_pb.DisableVoiceRes
};

Asm.ListConversations = {
  methodName: "ListConversations",
  service: Asm,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_asm_service_pb.ListConversationsReq,
  responseType: api_v1alpha1_asm_service_pb.ListConversationsRes
};

Asm.AssignNewConversation = {
  methodName: "AssignNewConversation",
  service: Asm,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_asm_service_pb.AssignNewConversationReq,
  responseType: api_v1alpha1_asm_service_pb.AssignNewConversationRes
};

Asm.ListAgents = {
  methodName: "ListAgents",
  service: Asm,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_asm_service_pb.ListAgentsReq,
  responseType: api_v1alpha1_asm_service_pb.ListAgentsRes
};

Asm.SetConversationCollectedData = {
  methodName: "SetConversationCollectedData",
  service: Asm,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_asm_service_pb.SetConversationCollectedDataReq,
  responseType: api_v1alpha1_asm_service_pb.SetConversationCollectedDataRes
};

Asm.GetQueuesDetails = {
  methodName: "GetQueuesDetails",
  service: Asm,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_asm_service_pb.GetQueuesDetailsReq,
  responseType: api_commons_omnichannel_pb.GetQueuesDetailsRes
};

exports.Asm = Asm;

function AsmClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AsmClient.prototype.streamAgentState = function streamAgentState(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Asm.StreamAgentState, {
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

AsmClient.prototype.managerStreamAgentState = function managerStreamAgentState(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Asm.ManagerStreamAgentState, {
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

AsmClient.prototype.pushEvents = function pushEvents(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Asm.PushEvents, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AsmClient.prototype.createSession = function createSession(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Asm.CreateSession, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AsmClient.prototype.endSession = function endSession(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Asm.EndSession, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AsmClient.prototype.getCurrentSession = function getCurrentSession(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Asm.GetCurrentSession, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AsmClient.prototype.enableVoice = function enableVoice(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Asm.EnableVoice, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AsmClient.prototype.disableVoice = function disableVoice(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Asm.DisableVoice, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AsmClient.prototype.listConversations = function listConversations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Asm.ListConversations, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AsmClient.prototype.assignNewConversation = function assignNewConversation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Asm.AssignNewConversation, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AsmClient.prototype.listAgents = function listAgents(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Asm.ListAgents, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AsmClient.prototype.setConversationCollectedData = function setConversationCollectedData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Asm.SetConversationCollectedData, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AsmClient.prototype.getQueuesDetails = function getQueuesDetails(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Asm.GetQueuesDetails, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.AsmClient = AsmClient;

