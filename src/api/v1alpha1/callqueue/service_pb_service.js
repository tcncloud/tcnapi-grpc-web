// package: api.v1alpha1.callqueue
// file: api/v1alpha1/callqueue/service.proto

var api_v1alpha1_callqueue_service_pb = require("../../../api/v1alpha1/callqueue/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var CallQueue = (function () {
  function CallQueue() {}
  CallQueue.serviceName = "api.v1alpha1.callqueue.CallQueue";
  return CallQueue;
}());

CallQueue.DequeuePreviewRecordOrCall = {
  methodName: "DequeuePreviewRecordOrCall",
  service: CallQueue,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_callqueue_service_pb.DequeuePreviewRecordOrCallReq,
  responseType: api_v1alpha1_callqueue_service_pb.DequeuePreviewRecordOrCallRes
};

CallQueue.EnqueuePreviewRecord = {
  methodName: "EnqueuePreviewRecord",
  service: CallQueue,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_callqueue_service_pb.EnqueuePreviewRecordReq,
  responseType: api_v1alpha1_callqueue_service_pb.EnqueuePreviewRecordRes
};

CallQueue.DequeueScrubbedCallForPreviewRecord = {
  methodName: "DequeueScrubbedCallForPreviewRecord",
  service: CallQueue,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_callqueue_service_pb.DequeueScrubbedCallForPreviewRecordReq,
  responseType: api_v1alpha1_callqueue_service_pb.DequeueScrubbedCallForPreviewRecordRes
};

CallQueue.ClearPreviewRecordReturnQueue = {
  methodName: "ClearPreviewRecordReturnQueue",
  service: CallQueue,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_callqueue_service_pb.ClearPreviewRecordReturnQueueReq,
  responseType: api_v1alpha1_callqueue_service_pb.ClearPreviewRecordReturnQueueRes
};

CallQueue.EnqueuePreviewDialCall = {
  methodName: "EnqueuePreviewDialCall",
  service: CallQueue,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_callqueue_service_pb.EnqueuePreviewDialCallReq,
  responseType: api_v1alpha1_callqueue_service_pb.EnqueuePreviewDialCallRes
};

CallQueue.ClearManualDialQueue = {
  methodName: "ClearManualDialQueue",
  service: CallQueue,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_callqueue_service_pb.ClearManualDialQueueReq,
  responseType: api_v1alpha1_callqueue_service_pb.ClearManualDialQueueRes
};

CallQueue.ProcessManualDialCall = {
  methodName: "ProcessManualDialCall",
  service: CallQueue,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_callqueue_service_pb.ProcessManualDialCallReq,
  responseType: api_v1alpha1_callqueue_service_pb.ProcessManualDialCallRes
};

CallQueue.DequeueCallForManualApproval = {
  methodName: "DequeueCallForManualApproval",
  service: CallQueue,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_callqueue_service_pb.DequeueCallForManualApprovalReq,
  responseType: api_v1alpha1_callqueue_service_pb.DequeueCallForManualApprovalRes
};

CallQueue.EnqueueManuallyApprovedCall = {
  methodName: "EnqueueManuallyApprovedCall",
  service: CallQueue,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_callqueue_service_pb.EnqueueManuallyApprovedCallReq,
  responseType: api_v1alpha1_callqueue_service_pb.EnqueueManuallyApprovedCallRes
};

CallQueue.EnqueueManuallyRejectedCall = {
  methodName: "EnqueueManuallyRejectedCall",
  service: CallQueue,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_callqueue_service_pb.EnqueueManuallyRejectedCallReq,
  responseType: api_v1alpha1_callqueue_service_pb.EnqueueManuallyRejectedCallRes
};

CallQueue.RequeueManuallyApprovedCall = {
  methodName: "RequeueManuallyApprovedCall",
  service: CallQueue,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_callqueue_service_pb.RequeueManuallyApprovedCallReq,
  responseType: api_v1alpha1_callqueue_service_pb.RequeueManuallyApprovedCallRes
};

CallQueue.EnqueueManuallyApprovedSms = {
  methodName: "EnqueueManuallyApprovedSms",
  service: CallQueue,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_callqueue_service_pb.EnqueueManuallyApprovedSmsReq,
  responseType: api_v1alpha1_callqueue_service_pb.EnqueueManuallyApprovedSmsRes
};

CallQueue.EnqueueManuallyRejectedSms = {
  methodName: "EnqueueManuallyRejectedSms",
  service: CallQueue,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_callqueue_service_pb.EnqueueManuallyRejectedSmsReq,
  responseType: api_v1alpha1_callqueue_service_pb.EnqueueManuallyRejectedSmsRes
};

CallQueue.RequeueManuallyApprovedSms = {
  methodName: "RequeueManuallyApprovedSms",
  service: CallQueue,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_callqueue_service_pb.RequeueManuallyApprovedSmsReq,
  responseType: api_v1alpha1_callqueue_service_pb.RequeueManuallyApprovedSmsRes
};

CallQueue.DequeueSmsMamForManualApproval = {
  methodName: "DequeueSmsMamForManualApproval",
  service: CallQueue,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_callqueue_service_pb.DequeueSmsMamForManualApprovalReq,
  responseType: api_v1alpha1_callqueue_service_pb.DequeueSmsMamForManualApprovalRes
};

exports.CallQueue = CallQueue;

function CallQueueClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CallQueueClient.prototype.dequeuePreviewRecordOrCall = function dequeuePreviewRecordOrCall(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CallQueue.DequeuePreviewRecordOrCall, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CallQueueClient.prototype.enqueuePreviewRecord = function enqueuePreviewRecord(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CallQueue.EnqueuePreviewRecord, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CallQueueClient.prototype.dequeueScrubbedCallForPreviewRecord = function dequeueScrubbedCallForPreviewRecord(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CallQueue.DequeueScrubbedCallForPreviewRecord, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CallQueueClient.prototype.clearPreviewRecordReturnQueue = function clearPreviewRecordReturnQueue(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CallQueue.ClearPreviewRecordReturnQueue, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CallQueueClient.prototype.enqueuePreviewDialCall = function enqueuePreviewDialCall(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CallQueue.EnqueuePreviewDialCall, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CallQueueClient.prototype.clearManualDialQueue = function clearManualDialQueue(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CallQueue.ClearManualDialQueue, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CallQueueClient.prototype.processManualDialCall = function processManualDialCall(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CallQueue.ProcessManualDialCall, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CallQueueClient.prototype.dequeueCallForManualApproval = function dequeueCallForManualApproval(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CallQueue.DequeueCallForManualApproval, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CallQueueClient.prototype.enqueueManuallyApprovedCall = function enqueueManuallyApprovedCall(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CallQueue.EnqueueManuallyApprovedCall, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CallQueueClient.prototype.enqueueManuallyRejectedCall = function enqueueManuallyRejectedCall(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CallQueue.EnqueueManuallyRejectedCall, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CallQueueClient.prototype.requeueManuallyApprovedCall = function requeueManuallyApprovedCall(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CallQueue.RequeueManuallyApprovedCall, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CallQueueClient.prototype.enqueueManuallyApprovedSms = function enqueueManuallyApprovedSms(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CallQueue.EnqueueManuallyApprovedSms, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CallQueueClient.prototype.enqueueManuallyRejectedSms = function enqueueManuallyRejectedSms(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CallQueue.EnqueueManuallyRejectedSms, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CallQueueClient.prototype.requeueManuallyApprovedSms = function requeueManuallyApprovedSms(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CallQueue.RequeueManuallyApprovedSms, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CallQueueClient.prototype.dequeueSmsMamForManualApproval = function dequeueSmsMamForManualApproval(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CallQueue.DequeueSmsMamForManualApproval, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.CallQueueClient = CallQueueClient;

