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

TranslationsService.ListTranslations = {
  methodName: "ListTranslations",
  service: TranslationsService,
  requestStream: false,
  responseStream: false,
  requestType: services_translations_v1alpha1_entities_pb.ListTranslationsRequest,
  responseType: services_translations_v1alpha1_entities_pb.ListTranslationsResponse
};

TranslationsService.ListLanguages = {
  methodName: "ListLanguages",
  service: TranslationsService,
  requestStream: false,
  responseStream: false,
  requestType: services_translations_v1alpha1_entities_pb.ListLanguagesRequest,
  responseType: services_translations_v1alpha1_entities_pb.ListLanguagesResponse
};

TranslationsService.UpdateTranslation = {
  methodName: "UpdateTranslation",
  service: TranslationsService,
  requestStream: false,
  responseStream: false,
  requestType: services_translations_v1alpha1_entities_pb.UpdateTranslationRequest,
  responseType: services_translations_v1alpha1_entities_pb.UpdateTranslationResponse
};

TranslationsService.TriggerLLMTranslation = {
  methodName: "TriggerLLMTranslation",
  service: TranslationsService,
  requestStream: false,
  responseStream: false,
  requestType: services_translations_v1alpha1_entities_pb.TriggerLLMTranslationRequest,
  responseType: services_translations_v1alpha1_entities_pb.TriggerLLMTranslationResponse
};

TranslationsService.TriggerLLMTranslations = {
  methodName: "TriggerLLMTranslations",
  service: TranslationsService,
  requestStream: false,
  responseStream: false,
  requestType: services_translations_v1alpha1_entities_pb.TriggerLLMTranslationsRequest,
  responseType: services_translations_v1alpha1_entities_pb.TriggerLLMTranslationsResponse
};

TranslationsService.SetSystemMessage = {
  methodName: "SetSystemMessage",
  service: TranslationsService,
  requestStream: false,
  responseStream: false,
  requestType: services_translations_v1alpha1_entities_pb.SetSystemMessageRequest,
  responseType: services_translations_v1alpha1_entities_pb.SetSystemMessageResponse
};

TranslationsService.GetSystemMessage = {
  methodName: "GetSystemMessage",
  service: TranslationsService,
  requestStream: false,
  responseStream: false,
  requestType: services_translations_v1alpha1_entities_pb.GetSystemMessageRequest,
  responseType: services_translations_v1alpha1_entities_pb.GetSystemMessageResponse
};

TranslationsService.TestSystemMessage = {
  methodName: "TestSystemMessage",
  service: TranslationsService,
  requestStream: false,
  responseStream: false,
  requestType: services_translations_v1alpha1_entities_pb.TestSystemMessageRequest,
  responseType: services_translations_v1alpha1_entities_pb.TestSystemMessageResponse
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

TranslationsServiceClient.prototype.listTranslations = function listTranslations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TranslationsService.ListTranslations, {
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

TranslationsServiceClient.prototype.listLanguages = function listLanguages(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TranslationsService.ListLanguages, {
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

TranslationsServiceClient.prototype.updateTranslation = function updateTranslation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TranslationsService.UpdateTranslation, {
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

TranslationsServiceClient.prototype.triggerLLMTranslation = function triggerLLMTranslation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TranslationsService.TriggerLLMTranslation, {
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

TranslationsServiceClient.prototype.triggerLLMTranslations = function triggerLLMTranslations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TranslationsService.TriggerLLMTranslations, {
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

TranslationsServiceClient.prototype.setSystemMessage = function setSystemMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TranslationsService.SetSystemMessage, {
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

TranslationsServiceClient.prototype.getSystemMessage = function getSystemMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TranslationsService.GetSystemMessage, {
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

TranslationsServiceClient.prototype.testSystemMessage = function testSystemMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TranslationsService.TestSystemMessage, {
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

