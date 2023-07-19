// package: api.v0alpha
// file: api/v0alpha/learn.proto

var api_v0alpha_learn_pb = require("../../api/v0alpha/learn_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Learn = (function () {
  function Learn() {}
  Learn.serviceName = "api.v0alpha.Learn";
  return Learn;
}());

Learn.Exist = {
  methodName: "Exist",
  service: Learn,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_learn_pb.ExistReq,
  responseType: api_v0alpha_learn_pb.ExistRes
};

Learn.Content = {
  methodName: "Content",
  service: Learn,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_learn_pb.ContentReq,
  responseType: api_v0alpha_learn_pb.ContentRes
};

Learn.ExportMany = {
  methodName: "ExportMany",
  service: Learn,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_learn_pb.ExportManyReq,
  responseType: api_v0alpha_learn_pb.ExportRes
};

Learn.SearchContent = {
  methodName: "SearchContent",
  service: Learn,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_learn_pb.SearchContentReq,
  responseType: api_v0alpha_learn_pb.SearchRes
};

Learn.Standalone = {
  methodName: "Standalone",
  service: Learn,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_learn_pb.StandaloneReq,
  responseType: api_v0alpha_learn_pb.StandaloneRes
};

Learn.ContentEditorData = {
  methodName: "ContentEditorData",
  service: Learn,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_learn_pb.ContentEditorDataReq,
  responseType: api_v0alpha_learn_pb.ContentEditorDataRes
};

Learn.Update = {
  methodName: "Update",
  service: Learn,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_learn_pb.UpdateReq,
  responseType: api_v0alpha_learn_pb.UpdateRes
};

Learn.StoreStaticImage = {
  methodName: "StoreStaticImage",
  service: Learn,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_learn_pb.StoreStaticImageReq,
  responseType: api_v0alpha_learn_pb.StoreStaticImageRes
};

Learn.UploadDynamicScreenshot = {
  methodName: "UploadDynamicScreenshot",
  service: Learn,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_learn_pb.UploadDynamicScreenshotReq,
  responseType: api_v0alpha_learn_pb.UploadDynamicScreenshotRes
};

Learn.DeleteStandalone = {
  methodName: "DeleteStandalone",
  service: Learn,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_learn_pb.DeleteStandaloneReq,
  responseType: api_v0alpha_learn_pb.DeleteStandaloneRes
};

Learn.Snippet = {
  methodName: "Snippet",
  service: Learn,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_learn_pb.SnippetReq,
  responseType: api_v0alpha_learn_pb.SnippetRes
};

Learn.DeleteLearnPages = {
  methodName: "DeleteLearnPages",
  service: Learn,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_learn_pb.DeleteLearnPagesReq,
  responseType: api_v0alpha_learn_pb.DeleteLearnPagesRes
};

exports.Learn = Learn;

function LearnClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

LearnClient.prototype.exist = function exist(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Learn.Exist, {
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

LearnClient.prototype.content = function content(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Learn.Content, {
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

LearnClient.prototype.exportMany = function exportMany(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Learn.ExportMany, {
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

LearnClient.prototype.searchContent = function searchContent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Learn.SearchContent, {
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

LearnClient.prototype.standalone = function standalone(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Learn.Standalone, {
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

LearnClient.prototype.contentEditorData = function contentEditorData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Learn.ContentEditorData, {
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

LearnClient.prototype.update = function update(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Learn.Update, {
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

LearnClient.prototype.storeStaticImage = function storeStaticImage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Learn.StoreStaticImage, {
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

LearnClient.prototype.uploadDynamicScreenshot = function uploadDynamicScreenshot(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Learn.UploadDynamicScreenshot, {
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

LearnClient.prototype.deleteStandalone = function deleteStandalone(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Learn.DeleteStandalone, {
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

LearnClient.prototype.snippet = function snippet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Learn.Snippet, {
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

LearnClient.prototype.deleteLearnPages = function deleteLearnPages(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Learn.DeleteLearnPages, {
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

exports.LearnClient = LearnClient;

