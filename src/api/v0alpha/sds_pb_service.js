// package: api.v0alpha
// file: api/v0alpha/sds.proto

var api_v0alpha_sds_pb = require("../../api/v0alpha/sds_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Sds = (function () {
  function Sds() {}
  Sds.serviceName = "api.v0alpha.Sds";
  return Sds;
}());

Sds.GetAgentResponseData = {
  methodName: "GetAgentResponseData",
  service: Sds,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_sds_pb.GetAgentResponseDataReq,
  responseType: api_v0alpha_sds_pb.GetAgentResponseDataRes
};

Sds.GetCall = {
  methodName: "GetCall",
  service: Sds,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_sds_pb.GetCallReq,
  responseType: api_v0alpha_sds_pb.CallObject
};

Sds.UpdateAgentResponseData = {
  methodName: "UpdateAgentResponseData",
  service: Sds,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_sds_pb.UpdateAgentResponseDataReq,
  responseType: api_v0alpha_sds_pb.UpdateAgentResponseDataRes
};

Sds.UpdateVoicemailBox = {
  methodName: "UpdateVoicemailBox",
  service: Sds,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_sds_pb.UpdateVoicemailBoxReq,
  responseType: api_v0alpha_sds_pb.UpdateVoicemailBoxRes
};

exports.Sds = Sds;

function SdsClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

SdsClient.prototype.getAgentResponseData = function getAgentResponseData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Sds.GetAgentResponseData, {
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

SdsClient.prototype.getCall = function getCall(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Sds.GetCall, {
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

SdsClient.prototype.updateAgentResponseData = function updateAgentResponseData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Sds.UpdateAgentResponseData, {
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

SdsClient.prototype.updateVoicemailBox = function updateVoicemailBox(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Sds.UpdateVoicemailBox, {
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

exports.SdsClient = SdsClient;

