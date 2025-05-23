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

Learn.ListSearchResults = {
  methodName: "ListSearchResults",
  service: Learn,
  requestStream: false,
  responseStream: true,
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

Learn.CreateEditVersion = {
  methodName: "CreateEditVersion",
  service: Learn,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_learn_pb.CreateEditVersionReq,
  responseType: api_v0alpha_learn_pb.CreateEditVersionRes
};

Learn.PublishVersion = {
  methodName: "PublishVersion",
  service: Learn,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_learn_pb.PublishVersionReq,
  responseType: api_v0alpha_learn_pb.PublishVersionRes
};

Learn.ContentByVersion = {
  methodName: "ContentByVersion",
  service: Learn,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_learn_pb.ContentByVersionReq,
  responseType: api_v0alpha_learn_pb.ContentRes
};

Learn.UpdateByVersion = {
  methodName: "UpdateByVersion",
  service: Learn,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_learn_pb.UpdateByVersionReq,
  responseType: api_v0alpha_learn_pb.UpdateRes
};

Learn.ListSearchResultsByVersion = {
  methodName: "ListSearchResultsByVersion",
  service: Learn,
  requestStream: false,
  responseStream: true,
  requestType: api_v0alpha_learn_pb.SearchContentByVersionReq,
  responseType: api_v0alpha_learn_pb.SearchRes
};

Learn.ReviewFileVersions = {
  methodName: "ReviewFileVersions",
  service: Learn,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_learn_pb.ReviewFileVersionsReq,
  responseType: api_v0alpha_learn_pb.ReviewFileVersionsRes
};

Learn.ReviewVersion = {
  methodName: "ReviewVersion",
  service: Learn,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_learn_pb.ReviewVersionReq,
  responseType: api_v0alpha_learn_pb.ReviewVersionRes
};

Learn.ExportManyStream = {
  methodName: "ExportManyStream",
  service: Learn,
  requestStream: false,
  responseStream: true,
  requestType: api_v0alpha_learn_pb.ExportManyReq,
  responseType: api_v0alpha_learn_pb.ExportRes
};

Learn.ListVersions = {
  methodName: "ListVersions",
  service: Learn,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_learn_pb.ListVersionsReq,
  responseType: api_v0alpha_learn_pb.ListVersionsRes
};

Learn.ReviewVersionStream = {
  methodName: "ReviewVersionStream",
  service: Learn,
  requestStream: false,
  responseStream: true,
  requestType: api_v0alpha_learn_pb.ReviewVersionReq,
  responseType: api_v0alpha_learn_pb.ReviewVersionRes
};

Learn.DeleteVersion = {
  methodName: "DeleteVersion",
  service: Learn,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_learn_pb.DeleteVersionReq,
  responseType: api_v0alpha_learn_pb.DeleteVersionRes
};

Learn.UploadStaticImage = {
  methodName: "UploadStaticImage",
  service: Learn,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_learn_pb.UploadStaticImageReq,
  responseType: api_v0alpha_learn_pb.UploadStaticImageRes
};

Learn.GetUpdateUrl = {
  methodName: "GetUpdateUrl",
  service: Learn,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_learn_pb.GetUpdateUrlReq,
  responseType: api_v0alpha_learn_pb.GetUpdateUrlRes
};

Learn.AdvancedSearch = {
  methodName: "AdvancedSearch",
  service: Learn,
  requestStream: false,
  responseStream: false,
  requestType: api_v0alpha_learn_pb.AdvancedSearchReq,
  responseType: api_v0alpha_learn_pb.AdvancedSearchRes
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

LearnClient.prototype.listSearchResults = function listSearchResults(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Learn.ListSearchResults, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
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

LearnClient.prototype.createEditVersion = function createEditVersion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Learn.CreateEditVersion, {
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

LearnClient.prototype.publishVersion = function publishVersion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Learn.PublishVersion, {
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

LearnClient.prototype.contentByVersion = function contentByVersion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Learn.ContentByVersion, {
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

LearnClient.prototype.updateByVersion = function updateByVersion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Learn.UpdateByVersion, {
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

LearnClient.prototype.listSearchResultsByVersion = function listSearchResultsByVersion(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Learn.ListSearchResultsByVersion, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

LearnClient.prototype.reviewFileVersions = function reviewFileVersions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Learn.ReviewFileVersions, {
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

LearnClient.prototype.reviewVersion = function reviewVersion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Learn.ReviewVersion, {
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

LearnClient.prototype.exportManyStream = function exportManyStream(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Learn.ExportManyStream, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

LearnClient.prototype.listVersions = function listVersions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Learn.ListVersions, {
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

LearnClient.prototype.reviewVersionStream = function reviewVersionStream(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Learn.ReviewVersionStream, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

LearnClient.prototype.deleteVersion = function deleteVersion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Learn.DeleteVersion, {
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

LearnClient.prototype.uploadStaticImage = function uploadStaticImage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Learn.UploadStaticImage, {
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

LearnClient.prototype.getUpdateUrl = function getUpdateUrl(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Learn.GetUpdateUrl, {
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

LearnClient.prototype.advancedSearch = function advancedSearch(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Learn.AdvancedSearch, {
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

