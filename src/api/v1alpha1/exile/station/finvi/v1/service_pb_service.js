// package: api.v1alpha1.exile.station.finvi.v1
// file: api/v1alpha1/exile/station/finvi/v1/service.proto

var api_v1alpha1_exile_station_finvi_v1_service_pb = require("../../../../../../api/v1alpha1/exile/station/finvi/v1/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var GenericFinviService = (function () {
  function GenericFinviService() {}
  GenericFinviService.serviceName = "api.v1alpha1.exile.station.finvi.v1.GenericFinviService";
  return GenericFinviService;
}());

GenericFinviService.PopAccount = {
  methodName: "PopAccount",
  service: GenericFinviService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_exile_station_finvi_v1_service_pb.PopAccountReq,
  responseType: api_v1alpha1_exile_station_finvi_v1_service_pb.PopAccountRes
};

exports.GenericFinviService = GenericFinviService;

function GenericFinviServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

GenericFinviServiceClient.prototype.popAccount = function popAccount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GenericFinviService.PopAccount, {
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

exports.GenericFinviServiceClient = GenericFinviServiceClient;

