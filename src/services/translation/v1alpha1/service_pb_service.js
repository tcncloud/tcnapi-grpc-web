// package: services.translation.v1alpha1
// file: services/translation/v1alpha1/service.proto

var services_translation_v1alpha1_service_pb = require("../../../services/translation/v1alpha1/service_pb");
var services_translation_v1alpha1_entities_pb = require("../../../services/translation/v1alpha1/entities_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var TranslationService = (function () {
  function TranslationService() {}
  TranslationService.serviceName = "services.translation.v1alpha1.TranslationService";
  return TranslationService;
}());

TranslationService.TranslateTemplate = {
  methodName: "TranslateTemplate",
  service: TranslationService,
  requestStream: false,
  responseStream: false,
  requestType: services_translation_v1alpha1_entities_pb.TranslateTemplateRequest,
  responseType: services_translation_v1alpha1_entities_pb.TranslateTemplateResponse
};

exports.TranslationService = TranslationService;

function TranslationServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

TranslationServiceClient.prototype.translateTemplate = function translateTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TranslationService.TranslateTemplate, {
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

exports.TranslationServiceClient = TranslationServiceClient;

