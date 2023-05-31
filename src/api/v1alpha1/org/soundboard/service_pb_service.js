// package: api.v1alpha1.soundboard
// file: api/v1alpha1/org/soundboard/service.proto

var api_v1alpha1_org_soundboard_service_pb = require("../../../../api/v1alpha1/org/soundboard/service_pb");
var api_v1alpha1_org_soundboard_entities_pb = require("../../../../api/v1alpha1/org/soundboard/entities_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Soundboard = (function () {
  function Soundboard() {}
  Soundboard.serviceName = "api.v1alpha1.soundboard.Soundboard";
  return Soundboard;
}());

Soundboard.GetSoundboardFile = {
  methodName: "GetSoundboardFile",
  service: Soundboard,
  requestStream: false,
  responseStream: true,
  requestType: api_v1alpha1_org_soundboard_entities_pb.GetSoundboardFileReq,
  responseType: api_v1alpha1_org_soundboard_entities_pb.GetSoundboardFileRes
};

Soundboard.CreateSoundboard = {
  methodName: "CreateSoundboard",
  service: Soundboard,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_soundboard_entities_pb.CreateSoundboardReq,
  responseType: api_v1alpha1_org_soundboard_entities_pb.CreateSoundboardRes
};

Soundboard.ListSoundboards = {
  methodName: "ListSoundboards",
  service: Soundboard,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_soundboard_entities_pb.ListSoundboardsReq,
  responseType: api_v1alpha1_org_soundboard_entities_pb.ListSoundboardsRes
};

Soundboard.UpdateSoundboard = {
  methodName: "UpdateSoundboard",
  service: Soundboard,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_soundboard_entities_pb.UpdateSoundboardReq,
  responseType: api_v1alpha1_org_soundboard_entities_pb.UpdateSoundboardRes
};

Soundboard.DeleteSoundboard = {
  methodName: "DeleteSoundboard",
  service: Soundboard,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_soundboard_entities_pb.DeleteSoundboardReq,
  responseType: api_v1alpha1_org_soundboard_entities_pb.DeleteSoundboardRes
};

exports.Soundboard = Soundboard;

function SoundboardClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

SoundboardClient.prototype.getSoundboardFile = function getSoundboardFile(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Soundboard.GetSoundboardFile, {
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

SoundboardClient.prototype.createSoundboard = function createSoundboard(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Soundboard.CreateSoundboard, {
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

SoundboardClient.prototype.listSoundboards = function listSoundboards(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Soundboard.ListSoundboards, {
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

SoundboardClient.prototype.updateSoundboard = function updateSoundboard(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Soundboard.UpdateSoundboard, {
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

SoundboardClient.prototype.deleteSoundboard = function deleteSoundboard(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Soundboard.DeleteSoundboard, {
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

exports.SoundboardClient = SoundboardClient;

