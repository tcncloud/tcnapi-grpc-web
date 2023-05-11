// package: api.v1alpha1.asm
// file: api/v1alpha1/asm/service.proto

var api_v1alpha1_asm_service_pb = require("../../../api/v1alpha1/asm/service_pb");
var api_commons_omnichannel_pb = require("../../../api/commons/omnichannel_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AsmApi = (function () {
  function AsmApi() {}
  AsmApi.serviceName = "api.v1alpha1.asm.AsmApi";
  return AsmApi;
}());

AsmApi.CreateSession = {
  methodName: "CreateSession",
  service: AsmApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_asm_service_pb.CreateSessionReq,
  responseType: api_v1alpha1_asm_service_pb.CreateSessionRes
};

AsmApi.GetStatus = {
  methodName: "GetStatus",
  service: AsmApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_asm_service_pb.GetStatusReq,
  responseType: api_v1alpha1_asm_service_pb.GetStatusRes
};

AsmApi.EndSession = {
  methodName: "EndSession",
  service: AsmApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_asm_service_pb.EndSessionReq,
  responseType: api_v1alpha1_asm_service_pb.EndSessionRes
};

AsmApi.GetCurrentSession = {
  methodName: "GetCurrentSession",
  service: AsmApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_asm_service_pb.GetCurrentSessionReq,
  responseType: api_v1alpha1_asm_service_pb.AsmSession
};

AsmApi.SwitchSubsession = {
  methodName: "SwitchSubsession",
  service: AsmApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_asm_service_pb.SwitchSubsessionReq,
  responseType: api_v1alpha1_asm_service_pb.SwitchSubsessionRes
};

AsmApi.ListConversations = {
  methodName: "ListConversations",
  service: AsmApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_asm_service_pb.ListConversationsReq,
  responseType: api_v1alpha1_asm_service_pb.ListConversationsRes
};

AsmApi.AssignNewConversation = {
  methodName: "AssignNewConversation",
  service: AsmApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_asm_service_pb.AssignNewConversationReq,
  responseType: api_v1alpha1_asm_service_pb.AssignNewConversationRes
};

AsmApi.ListAgents = {
  methodName: "ListAgents",
  service: AsmApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_asm_service_pb.ListAgentsReq,
  responseType: api_v1alpha1_asm_service_pb.ListAgentsRes
};

AsmApi.SetConversationCollectedData = {
  methodName: "SetConversationCollectedData",
  service: AsmApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_asm_service_pb.SetConversationCollectedDataReq,
  responseType: api_v1alpha1_asm_service_pb.SetConversationCollectedDataRes
};

AsmApi.GetQueuesDetails = {
  methodName: "GetQueuesDetails",
  service: AsmApi,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_asm_service_pb.GetQueuesDetailsReq,
  responseType: api_commons_omnichannel_pb.GetQueuesDetailsRes
};

exports.AsmApi = AsmApi;

function AsmApiClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AsmApiClient.prototype.createSession = function createSession(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AsmApi.CreateSession, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AsmApiClient.prototype.getStatus = function getStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AsmApi.GetStatus, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AsmApiClient.prototype.endSession = function endSession(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AsmApi.EndSession, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AsmApiClient.prototype.getCurrentSession = function getCurrentSession(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AsmApi.GetCurrentSession, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AsmApiClient.prototype.switchSubsession = function switchSubsession(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AsmApi.SwitchSubsession, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AsmApiClient.prototype.listConversations = function listConversations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AsmApi.ListConversations, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AsmApiClient.prototype.assignNewConversation = function assignNewConversation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AsmApi.AssignNewConversation, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AsmApiClient.prototype.listAgents = function listAgents(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AsmApi.ListAgents, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AsmApiClient.prototype.setConversationCollectedData = function setConversationCollectedData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AsmApi.SetConversationCollectedData, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AsmApiClient.prototype.getQueuesDetails = function getQueuesDetails(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AsmApi.GetQueuesDetails, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.AsmApiClient = AsmApiClient;

