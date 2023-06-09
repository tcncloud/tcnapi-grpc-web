// package: api.v0alpha
// file: api/v0alpha/vmds.proto

var api_v0alpha_vmds_pb = require("../../api/v0alpha/vmds_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Vmds = (function () {
  function Vmds() {}
  Vmds.serviceName = "api.v0alpha.Vmds";
  return Vmds;
}());

Vmds.GetVoicemailMetadata = {
  methodName: "GetVoicemailMetadata",
  service: Vmds,
  requestStream: false,
  responseStream: true,
  requestType: api_v0alpha_vmds_pb.GetVoicemailMetadataReq,
  responseType: api_v0alpha_vmds_pb.GetVoicemailMetadataRes
};

Vmds.GetVoicemailMessageCount = {
  methodName: "GetVoicemailMessageCount",
  service: Vmds,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_vmds_pb.GetVoicemailCountReq,
  responseType: api_v0alpha_vmds_pb.GetVoicemailCountRes
};

Vmds.DeleteVoicemail = {
  methodName: "DeleteVoicemail",
  service: Vmds,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_vmds_pb.DeleteVoicemailReq,
  responseType: api_v0alpha_vmds_pb.DeleteVoicemailRes
};

Vmds.DeleteGreeting = {
  methodName: "DeleteGreeting",
  service: Vmds,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_vmds_pb.DeleteGreetingReq,
  responseType: api_v0alpha_vmds_pb.DeleteGreetingRes
};

Vmds.UpdateUploadName = {
  methodName: "UpdateUploadName",
  service: Vmds,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_vmds_pb.UpdateUploadNameReq,
  responseType: api_v0alpha_vmds_pb.UpdateUploadNameRes
};

Vmds.UpdateVoicemailFlagRead = {
  methodName: "UpdateVoicemailFlagRead",
  service: Vmds,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_vmds_pb.UpdateVoicemailFlagReadReq,
  responseType: api_v0alpha_vmds_pb.UpdateVoicemailFlagReadRes
};

Vmds.DownloadMessage = {
  methodName: "DownloadMessage",
  service: Vmds,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_vmds_pb.DownloadMessageReq,
  responseType: api_v0alpha_vmds_pb.DownloadMessageRes
};

Vmds.DownloadSpecifiedMessages = {
  methodName: "DownloadSpecifiedMessages",
  service: Vmds,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_vmds_pb.DownloadSpecifiedMessagesReq,
  responseType: api_v0alpha_vmds_pb.DownloadSpecifiedMessagesRes
};

Vmds.DownloadMessages = {
  methodName: "DownloadMessages",
  service: Vmds,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_vmds_pb.DownloadMessagesReq,
  responseType: api_v0alpha_vmds_pb.DownloadMessagesRes
};

Vmds.DownloadGreetingForExtension = {
  methodName: "DownloadGreetingForExtension",
  service: Vmds,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_vmds_pb.DownloadGreetingForExtensionReq,
  responseType: api_v0alpha_vmds_pb.DownloadGreetingForExtensionRes
};

Vmds.DownloadGreeting = {
  methodName: "DownloadGreeting",
  service: Vmds,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_vmds_pb.DownloadGreetingReq,
  responseType: api_v0alpha_vmds_pb.DownloadGreetingRes
};

Vmds.GetUploadGreetingUrl = {
  methodName: "GetUploadGreetingUrl",
  service: Vmds,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_vmds_pb.GetUploadGreetingUrlReq,
  responseType: api_v0alpha_vmds_pb.GetUploadGreetingUrlRes
};

Vmds.ProcessGreetingUpload = {
  methodName: "ProcessGreetingUpload",
  service: Vmds,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_vmds_pb.ProcessGreetingUploadReq,
  responseType: api_v0alpha_vmds_pb.ProcessGreetingUploadRes
};

Vmds.UpdateGreetingForExtension = {
  methodName: "UpdateGreetingForExtension",
  service: Vmds,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_vmds_pb.UpdateGreetingForExtensionReq,
  responseType: api_v0alpha_vmds_pb.UpdateGreetingForExtensionRes
};

Vmds.ListAvailableGreetings = {
  methodName: "ListAvailableGreetings",
  service: Vmds,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_vmds_pb.ListAvailableGreetingsReq,
  responseType: api_v0alpha_vmds_pb.ListAvailableGreetingsRes
};

exports.Vmds = Vmds;

function VmdsClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

VmdsClient.prototype.getVoicemailMetadata = function getVoicemailMetadata(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Vmds.GetVoicemailMetadata, {
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

VmdsClient.prototype.getVoicemailMessageCount = function getVoicemailMessageCount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vmds.GetVoicemailMessageCount, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

VmdsClient.prototype.deleteVoicemail = function deleteVoicemail(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vmds.DeleteVoicemail, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

VmdsClient.prototype.deleteGreeting = function deleteGreeting(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vmds.DeleteGreeting, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

VmdsClient.prototype.updateUploadName = function updateUploadName(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vmds.UpdateUploadName, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

VmdsClient.prototype.updateVoicemailFlagRead = function updateVoicemailFlagRead(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vmds.UpdateVoicemailFlagRead, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

VmdsClient.prototype.downloadMessage = function downloadMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vmds.DownloadMessage, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

VmdsClient.prototype.downloadSpecifiedMessages = function downloadSpecifiedMessages(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vmds.DownloadSpecifiedMessages, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

VmdsClient.prototype.downloadMessages = function downloadMessages(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vmds.DownloadMessages, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

VmdsClient.prototype.downloadGreetingForExtension = function downloadGreetingForExtension(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vmds.DownloadGreetingForExtension, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

VmdsClient.prototype.downloadGreeting = function downloadGreeting(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vmds.DownloadGreeting, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

VmdsClient.prototype.getUploadGreetingUrl = function getUploadGreetingUrl(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vmds.GetUploadGreetingUrl, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

VmdsClient.prototype.processGreetingUpload = function processGreetingUpload(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vmds.ProcessGreetingUpload, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

VmdsClient.prototype.updateGreetingForExtension = function updateGreetingForExtension(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vmds.UpdateGreetingForExtension, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

VmdsClient.prototype.listAvailableGreetings = function listAvailableGreetings(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Vmds.ListAvailableGreetings, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.VmdsClient = VmdsClient;

