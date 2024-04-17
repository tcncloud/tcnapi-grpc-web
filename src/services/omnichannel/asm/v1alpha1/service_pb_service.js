// package: services.omnichannel.asm.v1alpha1
// file: services/omnichannel/asm/v1alpha1/service.proto

var services_omnichannel_asm_v1alpha1_service_pb = require("../../../../services/omnichannel/asm/v1alpha1/service_pb");
var services_omnichannel_asm_v1alpha1_entities_pb = require("../../../../services/omnichannel/asm/v1alpha1/entities_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AsmService = (function () {
  function AsmService() {}
  AsmService.serviceName = "services.omnichannel.asm.v1alpha1.AsmService";
  return AsmService;
}());

AsmService.CreateSession = {
  methodName: "CreateSession",
  service: AsmService,
  requestStream: false,
  responseStream: false,
  requestType: services_omnichannel_asm_v1alpha1_entities_pb.CreateSessionRequest,
  responseType: services_omnichannel_asm_v1alpha1_entities_pb.CreateSessionResponse
};

AsmService.EndSession = {
  methodName: "EndSession",
  service: AsmService,
  requestStream: false,
  responseStream: false,
  requestType: services_omnichannel_asm_v1alpha1_entities_pb.EndSessionRequest,
  responseType: services_omnichannel_asm_v1alpha1_entities_pb.EndSessionResponse
};

AsmService.GetCurrentSession = {
  methodName: "GetCurrentSession",
  service: AsmService,
  requestStream: false,
  responseStream: false,
  requestType: services_omnichannel_asm_v1alpha1_entities_pb.GetCurrentSessionRequest,
  responseType: services_omnichannel_asm_v1alpha1_entities_pb.GetCurrentSessionResponse
};

AsmService.EnableVoice = {
  methodName: "EnableVoice",
  service: AsmService,
  requestStream: false,
  responseStream: false,
  requestType: services_omnichannel_asm_v1alpha1_entities_pb.EnableVoiceRequest,
  responseType: services_omnichannel_asm_v1alpha1_entities_pb.EnableVoiceResponse
};

AsmService.DisableVoice = {
  methodName: "DisableVoice",
  service: AsmService,
  requestStream: false,
  responseStream: false,
  requestType: services_omnichannel_asm_v1alpha1_entities_pb.DisableVoiceRequest,
  responseType: services_omnichannel_asm_v1alpha1_entities_pb.DisableVoiceResponse
};

AsmService.ListAsmUserDetails = {
  methodName: "ListAsmUserDetails",
  service: AsmService,
  requestStream: false,
  responseStream: false,
  requestType: services_omnichannel_asm_v1alpha1_entities_pb.ListAsmUserDetailsRequest,
  responseType: services_omnichannel_asm_v1alpha1_entities_pb.ListAsmUserDetailsResponse
};

exports.AsmService = AsmService;

function AsmServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AsmServiceClient.prototype.createSession = function createSession(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AsmService.CreateSession, {
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

AsmServiceClient.prototype.endSession = function endSession(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AsmService.EndSession, {
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

AsmServiceClient.prototype.getCurrentSession = function getCurrentSession(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AsmService.GetCurrentSession, {
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

AsmServiceClient.prototype.enableVoice = function enableVoice(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AsmService.EnableVoice, {
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

AsmServiceClient.prototype.disableVoice = function disableVoice(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AsmService.DisableVoice, {
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

AsmServiceClient.prototype.listAsmUserDetails = function listAsmUserDetails(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AsmService.ListAsmUserDetails, {
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

exports.AsmServiceClient = AsmServiceClient;

