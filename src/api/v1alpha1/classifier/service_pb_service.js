// package: api.v1alpha1.classifier
// file: api/v1alpha1/classifier/service.proto

var api_v1alpha1_classifier_service_pb = require("../../../api/v1alpha1/classifier/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ClassifierFileTemplates = (function () {
  function ClassifierFileTemplates() {}
  ClassifierFileTemplates.serviceName = "api.v1alpha1.classifier.ClassifierFileTemplates";
  return ClassifierFileTemplates;
}());

ClassifierFileTemplates.ParseFile = {
  methodName: "ParseFile",
  service: ClassifierFileTemplates,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_classifier_service_pb.ParseFileRequest,
  responseType: api_v1alpha1_classifier_service_pb.ParseFileResponse
};

ClassifierFileTemplates.ListEvents = {
  methodName: "ListEvents",
  service: ClassifierFileTemplates,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_classifier_service_pb.ListEventsRequest,
  responseType: api_v1alpha1_classifier_service_pb.ListEventsResponse
};

ClassifierFileTemplates.PeekList = {
  methodName: "PeekList",
  service: ClassifierFileTemplates,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_classifier_service_pb.PeekListRequest,
  responseType: api_v1alpha1_classifier_service_pb.PeekListResponse
};

ClassifierFileTemplates.ParseFTSFile = {
  methodName: "ParseFTSFile",
  service: ClassifierFileTemplates,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_classifier_service_pb.ParseFTSFileRequest,
  responseType: api_v1alpha1_classifier_service_pb.ParseFTSFileResponse
};

ClassifierFileTemplates.UpdateFileTemplate = {
  methodName: "UpdateFileTemplate",
  service: ClassifierFileTemplates,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_classifier_service_pb.UpdateFileTemplateRequest,
  responseType: api_v1alpha1_classifier_service_pb.UpdateFileTemplateResponse
};

ClassifierFileTemplates.DeleteFileTemplate = {
  methodName: "DeleteFileTemplate",
  service: ClassifierFileTemplates,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_classifier_service_pb.DeleteFileTemplateRequest,
  responseType: api_v1alpha1_classifier_service_pb.DeleteFileTemplateResponse
};

ClassifierFileTemplates.ListFileTemplates = {
  methodName: "ListFileTemplates",
  service: ClassifierFileTemplates,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_classifier_service_pb.ListFileTemplatesRequest,
  responseType: api_v1alpha1_classifier_service_pb.ListFileTemplatesResponse
};

ClassifierFileTemplates.GetFileTemplate = {
  methodName: "GetFileTemplate",
  service: ClassifierFileTemplates,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_classifier_service_pb.GetFileTemplateRequest,
  responseType: api_v1alpha1_classifier_service_pb.GetFileTemplateResponse
};

exports.ClassifierFileTemplates = ClassifierFileTemplates;

function ClassifierFileTemplatesClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ClassifierFileTemplatesClient.prototype.parseFile = function parseFile(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ClassifierFileTemplates.ParseFile, {
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

ClassifierFileTemplatesClient.prototype.listEvents = function listEvents(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ClassifierFileTemplates.ListEvents, {
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

ClassifierFileTemplatesClient.prototype.peekList = function peekList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ClassifierFileTemplates.PeekList, {
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

ClassifierFileTemplatesClient.prototype.parseFTSFile = function parseFTSFile(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ClassifierFileTemplates.ParseFTSFile, {
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

ClassifierFileTemplatesClient.prototype.updateFileTemplate = function updateFileTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ClassifierFileTemplates.UpdateFileTemplate, {
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

ClassifierFileTemplatesClient.prototype.deleteFileTemplate = function deleteFileTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ClassifierFileTemplates.DeleteFileTemplate, {
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

ClassifierFileTemplatesClient.prototype.listFileTemplates = function listFileTemplates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ClassifierFileTemplates.ListFileTemplates, {
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

ClassifierFileTemplatesClient.prototype.getFileTemplate = function getFileTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ClassifierFileTemplates.GetFileTemplate, {
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

exports.ClassifierFileTemplatesClient = ClassifierFileTemplatesClient;

