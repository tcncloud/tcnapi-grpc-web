// package: services.translations.v1alpha1
// file: services/translations/v1alpha1/service.proto

var services_translations_v1alpha1_service_pb = require("../../../services/translations/v1alpha1/service_pb");
var services_translations_v1alpha1_entities_pb = require("../../../services/translations/v1alpha1/entities_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var TranslationsService = (function () {
  function TranslationsService() {}
  TranslationsService.serviceName = "services.translations.v1alpha1.TranslationsService";
  return TranslationsService;
}());

TranslationsService.TranslateTemplate = {
  methodName: "TranslateTemplate",
  service: TranslationsService,
  requestStream: false,
  responseStream: false,
  requestType: services_translations_v1alpha1_entities_pb.TranslateTemplateRequest,
  responseType: services_translations_v1alpha1_entities_pb.TranslateTemplateResponse
};

exports.TranslationsService = TranslationsService;

function TranslationsServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

TranslationsServiceClient.prototype.translateTemplate = function translateTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TranslationsService.TranslateTemplate, {
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

exports.TranslationsServiceClient = TranslationsServiceClient;

