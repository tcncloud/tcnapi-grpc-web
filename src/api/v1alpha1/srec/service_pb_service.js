// package: api.v1alpha1.srec
// file: api/v1alpha1/srec/service.proto

var api_v1alpha1_srec_service_pb = require("../../../api/v1alpha1/srec/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Srec = (function () {
  function Srec() {}
  Srec.serviceName = "api.v1alpha1.srec.Srec";
  return Srec;
}());

Srec.ListScreenRecordings = {
  methodName: "ListScreenRecordings",
  service: Srec,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_srec_service_pb.ListScreenRecordingsRequest,
  responseType: api_v1alpha1_srec_service_pb.ListScreenRecordingsResponse
};

Srec.GetScreenRecordingURL = {
  methodName: "GetScreenRecordingURL",
  service: Srec,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_srec_service_pb.GetScreenRecordingURLRequest,
  responseType: api_v1alpha1_srec_service_pb.GetScreenRecordingURLResponse
};

Srec.DeleteScreenRecording = {
  methodName: "DeleteScreenRecording",
  service: Srec,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_srec_service_pb.DeleteScreenRecordingRequest,
  responseType: api_v1alpha1_srec_service_pb.DeleteScreenRecordingResponse
};

exports.Srec = Srec;

function SrecClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

SrecClient.prototype.listScreenRecordings = function listScreenRecordings(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Srec.ListScreenRecordings, {
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

SrecClient.prototype.getScreenRecordingURL = function getScreenRecordingURL(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Srec.GetScreenRecordingURL, {
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

SrecClient.prototype.deleteScreenRecording = function deleteScreenRecording(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Srec.DeleteScreenRecording, {
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

exports.SrecClient = SrecClient;

