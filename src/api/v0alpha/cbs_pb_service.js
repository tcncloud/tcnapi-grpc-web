// package: api.v0alpha
// file: api/v0alpha/cbs.proto

var api_v0alpha_cbs_pb = require("../../api/v0alpha/cbs_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var CBS = (function () {
  function CBS() {}
  CBS.serviceName = "api.v0alpha.CBS";
  return CBS;
}());

CBS.CreateServiceId = {
  methodName: "CreateServiceId",
  service: CBS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_cbs_pb.CreateServiceIdReq,
  responseType: api_v0alpha_cbs_pb.CreateServiceIdRes
};

CBS.CreateCallbackWithDetails = {
  methodName: "CreateCallbackWithDetails",
  service: CBS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_cbs_pb.CreateCallbackWithDetailsReq,
  responseType: api_v0alpha_cbs_pb.CreateCallbackWithDetailsRes
};

CBS.UpdateScheduledCallbackToReady = {
  methodName: "UpdateScheduledCallbackToReady",
  service: CBS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_cbs_pb.UpdateScheduledCallbackToReadyReq,
  responseType: api_v0alpha_cbs_pb.UpdateScheduledCallbackToReadyRes
};

CBS.UpdateScheduledCallbackToCanceled = {
  methodName: "UpdateScheduledCallbackToCanceled",
  service: CBS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_cbs_pb.UpdateScheduledCallbackToCanceledReq,
  responseType: api_v0alpha_cbs_pb.UpdateScheduledCallbackToCanceledRes
};

CBS.GetNextScheduledCallbackWithDetails = {
  methodName: "GetNextScheduledCallbackWithDetails",
  service: CBS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_cbs_pb.GetNextScheduledCallbackWithDetailsReq,
  responseType: api_v0alpha_cbs_pb.GetNextScheduledCallbackWithDetailsRes
};

CBS.UpdateScheduledCallbackToClosed = {
  methodName: "UpdateScheduledCallbackToClosed",
  service: CBS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_cbs_pb.UpdateScheduledCallbackToClosedReq,
  responseType: api_v0alpha_cbs_pb.UpdateScheduledCallbackToClosedRes
};

CBS.UpdateScheduledCallback = {
  methodName: "UpdateScheduledCallback",
  service: CBS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_cbs_pb.UpdateScheduledCallbackReq,
  responseType: api_v0alpha_cbs_pb.UpdateScheduledCallbackRes
};

CBS.GetScheduledCallbackWithDetails = {
  methodName: "GetScheduledCallbackWithDetails",
  service: CBS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_cbs_pb.GetScheduledCallbackWithDetailsReq,
  responseType: api_v0alpha_cbs_pb.GetScheduledCallbackWithDetailsRes
};

CBS.ListScheduledCallbacksWithDetails = {
  methodName: "ListScheduledCallbacksWithDetails",
  service: CBS,
  requestStream: false,
  responseStream: true,
  requestType: api_v0alpha_cbs_pb.ListScheduledCallbacksWithDetailsReq,
  responseType: api_v0alpha_cbs_pb.ListScheduledCallbacksWithDetailsRes
};

CBS.ListScheduledCallbacksWithDetailsBySkills = {
  methodName: "ListScheduledCallbacksWithDetailsBySkills",
  service: CBS,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_cbs_pb.ListScheduledCallbacksWithDetailsBySkillsReq,
  responseType: api_v0alpha_cbs_pb.ListScheduledCallbacksWithDetailsRes
};

exports.CBS = CBS;

function CBSClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CBSClient.prototype.createServiceId = function createServiceId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CBS.CreateServiceId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CBSClient.prototype.createCallbackWithDetails = function createCallbackWithDetails(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CBS.CreateCallbackWithDetails, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CBSClient.prototype.updateScheduledCallbackToReady = function updateScheduledCallbackToReady(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CBS.UpdateScheduledCallbackToReady, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CBSClient.prototype.updateScheduledCallbackToCanceled = function updateScheduledCallbackToCanceled(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CBS.UpdateScheduledCallbackToCanceled, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CBSClient.prototype.getNextScheduledCallbackWithDetails = function getNextScheduledCallbackWithDetails(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CBS.GetNextScheduledCallbackWithDetails, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CBSClient.prototype.updateScheduledCallbackToClosed = function updateScheduledCallbackToClosed(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CBS.UpdateScheduledCallbackToClosed, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CBSClient.prototype.updateScheduledCallback = function updateScheduledCallback(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CBS.UpdateScheduledCallback, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CBSClient.prototype.getScheduledCallbackWithDetails = function getScheduledCallbackWithDetails(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CBS.GetScheduledCallbackWithDetails, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CBSClient.prototype.listScheduledCallbacksWithDetails = function listScheduledCallbacksWithDetails(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(CBS.ListScheduledCallbacksWithDetails, {
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

CBSClient.prototype.listScheduledCallbacksWithDetailsBySkills = function listScheduledCallbacksWithDetailsBySkills(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CBS.ListScheduledCallbacksWithDetailsBySkills, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.CBSClient = CBSClient;

