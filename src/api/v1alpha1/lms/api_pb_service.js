// package: api.v1alpha1.lms
// file: api/v1alpha1/lms/api.proto

var api_v1alpha1_lms_api_pb = require("../../../api/v1alpha1/lms/api_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var LMS = (function () {
  function LMS() {}
  LMS.serviceName = "api.v1alpha1.lms.LMS";
  return LMS;
}());

LMS.DeleteFileTemplate = {
  methodName: "DeleteFileTemplate",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_lms_api_pb.DeleteFileTemplateRequest,
  responseType: api_v1alpha1_lms_api_pb.DeleteFileTemplateResponse
};

LMS.GetFileTemplate = {
  methodName: "GetFileTemplate",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_lms_api_pb.GetFileTemplateRequest,
  responseType: api_v1alpha1_lms_api_pb.GetFileTemplateResponse
};

LMS.ListFileTemplates = {
  methodName: "ListFileTemplates",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_lms_api_pb.ListFileTemplatesRequest,
  responseType: api_v1alpha1_lms_api_pb.ListFileTemplatesResponse
};

LMS.ParseFileTemplate = {
  methodName: "ParseFileTemplate",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_lms_api_pb.ParseFileTemplateRequest,
  responseType: api_v1alpha1_lms_api_pb.ParseFileTemplateResult
};

LMS.UpdateFileTemplate = {
  methodName: "UpdateFileTemplate",
  service: LMS,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_lms_api_pb.UpdateFileTemplateRequest,
  responseType: api_v1alpha1_lms_api_pb.UpdateFileTemplateResponse
};

exports.LMS = LMS;

function LMSClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

LMSClient.prototype.deleteFileTemplate = function deleteFileTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.DeleteFileTemplate, {
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

LMSClient.prototype.getFileTemplate = function getFileTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.GetFileTemplate, {
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

LMSClient.prototype.listFileTemplates = function listFileTemplates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.ListFileTemplates, {
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

LMSClient.prototype.parseFileTemplate = function parseFileTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.ParseFileTemplate, {
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

LMSClient.prototype.updateFileTemplate = function updateFileTemplate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LMS.UpdateFileTemplate, {
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

exports.LMSClient = LMSClient;

