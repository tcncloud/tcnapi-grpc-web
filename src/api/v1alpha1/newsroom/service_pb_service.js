// package: api.v1alpha1.newsroom
// file: api/v1alpha1/newsroom/service.proto

var api_v1alpha1_newsroom_service_pb = require("../../../api/v1alpha1/newsroom/service_pb");
var api_v1alpha1_newsroom_entities_pb = require("../../../api/v1alpha1/newsroom/entities_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var NewsroomAPI = (function () {
  function NewsroomAPI() {}
  NewsroomAPI.serviceName = "api.v1alpha1.newsroom.NewsroomAPI";
  return NewsroomAPI;
}());

NewsroomAPI.CreateNewsArticle = {
  methodName: "CreateNewsArticle",
  service: NewsroomAPI,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_newsroom_entities_pb.CreateNewsArticleRequest,
  responseType: api_v1alpha1_newsroom_entities_pb.CreateNewsArticleResponse
};

NewsroomAPI.ListNewsArticles = {
  methodName: "ListNewsArticles",
  service: NewsroomAPI,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_newsroom_entities_pb.ListNewsArticlesRequest,
  responseType: api_v1alpha1_newsroom_entities_pb.ListNewsArticlesResponse
};

NewsroomAPI.GetNewsArticleById = {
  methodName: "GetNewsArticleById",
  service: NewsroomAPI,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_newsroom_entities_pb.GetNewsArticleByIdRequest,
  responseType: api_v1alpha1_newsroom_entities_pb.GetNewsArticleByIdResponse
};

NewsroomAPI.UpdateNewsArticle = {
  methodName: "UpdateNewsArticle",
  service: NewsroomAPI,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_newsroom_entities_pb.UpdateNewsArticleRequest,
  responseType: api_v1alpha1_newsroom_entities_pb.UpdateNewsArticleResponse
};

NewsroomAPI.CreatePublishedArticle = {
  methodName: "CreatePublishedArticle",
  service: NewsroomAPI,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_newsroom_entities_pb.CreatePublishedArticleRequest,
  responseType: api_v1alpha1_newsroom_entities_pb.CreatePublishedArticleResponse
};

NewsroomAPI.ListPublishedArticles = {
  methodName: "ListPublishedArticles",
  service: NewsroomAPI,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_newsroom_entities_pb.ListPublishedArticlesRequest,
  responseType: api_v1alpha1_newsroom_entities_pb.ListPublishedArticlesResponse
};

NewsroomAPI.GetPublishedArticleById = {
  methodName: "GetPublishedArticleById",
  service: NewsroomAPI,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_newsroom_entities_pb.GetPublishedArticleByIdRequest,
  responseType: api_v1alpha1_newsroom_entities_pb.GetPublishedArticleByIdResponse
};

NewsroomAPI.UserActivity = {
  methodName: "UserActivity",
  service: NewsroomAPI,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_newsroom_entities_pb.UserActivityRequest,
  responseType: api_v1alpha1_newsroom_entities_pb.UserActivityResponse
};

NewsroomAPI.GetNewsForUser = {
  methodName: "GetNewsForUser",
  service: NewsroomAPI,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_newsroom_entities_pb.GetNewsForUserRequest,
  responseType: api_v1alpha1_newsroom_entities_pb.GetNewsForUserResponse
};

NewsroomAPI.StoreNewsArticleImage = {
  methodName: "StoreNewsArticleImage",
  service: NewsroomAPI,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_newsroom_entities_pb.StoreNewsArticleImageRequest,
  responseType: api_v1alpha1_newsroom_entities_pb.StoreNewsArticleImageResponse
};

NewsroomAPI.ListImagesForNewsArticle = {
  methodName: "ListImagesForNewsArticle",
  service: NewsroomAPI,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_newsroom_entities_pb.ListImagesForNewsArticleRequest,
  responseType: api_v1alpha1_newsroom_entities_pb.ListImagesForNewsArticleResponse
};

NewsroomAPI.UploadNewsArticleImage = {
  methodName: "UploadNewsArticleImage",
  service: NewsroomAPI,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_newsroom_entities_pb.UploadNewsArticleImageRequest,
  responseType: api_v1alpha1_newsroom_entities_pb.UploadNewsArticleImageResponse
};

NewsroomAPI.CreateClientArticle = {
  methodName: "CreateClientArticle",
  service: NewsroomAPI,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_newsroom_entities_pb.CreateClientArticleRequest,
  responseType: api_v1alpha1_newsroom_entities_pb.CreateClientArticleResponse
};

NewsroomAPI.UpdateClientArticle = {
  methodName: "UpdateClientArticle",
  service: NewsroomAPI,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_newsroom_entities_pb.UpdateClientArticleRequest,
  responseType: api_v1alpha1_newsroom_entities_pb.UpdateClientArticleResponse
};

NewsroomAPI.ListClientArticles = {
  methodName: "ListClientArticles",
  service: NewsroomAPI,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_newsroom_entities_pb.ListClientArticlesRequest,
  responseType: api_v1alpha1_newsroom_entities_pb.ListClientArticlesResponse
};

NewsroomAPI.CreatePublishedClientArticle = {
  methodName: "CreatePublishedClientArticle",
  service: NewsroomAPI,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_newsroom_entities_pb.CreatePublishedClientArticleRequest,
  responseType: api_v1alpha1_newsroom_entities_pb.CreatePublishedClientArticleResponse
};

NewsroomAPI.GetPublishedClientArticleById = {
  methodName: "GetPublishedClientArticleById",
  service: NewsroomAPI,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_newsroom_entities_pb.GetPublishedClientArticleByIdRequest,
  responseType: api_v1alpha1_newsroom_entities_pb.GetPublishedClientArticleByIdResponse
};

NewsroomAPI.StoreClientArticleImage = {
  methodName: "StoreClientArticleImage",
  service: NewsroomAPI,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_newsroom_entities_pb.StoreClientArticleImageRequest,
  responseType: api_v1alpha1_newsroom_entities_pb.StoreClientArticleImageResponse
};

NewsroomAPI.ListImagesForClientArticle = {
  methodName: "ListImagesForClientArticle",
  service: NewsroomAPI,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_newsroom_entities_pb.ListImagesForClientArticleRequest,
  responseType: api_v1alpha1_newsroom_entities_pb.ListImagesForClientArticleResponse
};

NewsroomAPI.UploadClientArticleImage = {
  methodName: "UploadClientArticleImage",
  service: NewsroomAPI,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_newsroom_entities_pb.UploadClientArticleImageRequest,
  responseType: api_v1alpha1_newsroom_entities_pb.UploadClientArticleImageResponse
};

NewsroomAPI.ListPublishedClientArticles = {
  methodName: "ListPublishedClientArticles",
  service: NewsroomAPI,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_newsroom_entities_pb.ListPublishedClientArticlesRequest,
  responseType: api_v1alpha1_newsroom_entities_pb.ListPublishedClientArticlesResponse
};

exports.NewsroomAPI = NewsroomAPI;

function NewsroomAPIClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

NewsroomAPIClient.prototype.createNewsArticle = function createNewsArticle(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NewsroomAPI.CreateNewsArticle, {
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

NewsroomAPIClient.prototype.listNewsArticles = function listNewsArticles(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NewsroomAPI.ListNewsArticles, {
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

NewsroomAPIClient.prototype.getNewsArticleById = function getNewsArticleById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NewsroomAPI.GetNewsArticleById, {
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

NewsroomAPIClient.prototype.updateNewsArticle = function updateNewsArticle(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NewsroomAPI.UpdateNewsArticle, {
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

NewsroomAPIClient.prototype.createPublishedArticle = function createPublishedArticle(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NewsroomAPI.CreatePublishedArticle, {
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

NewsroomAPIClient.prototype.listPublishedArticles = function listPublishedArticles(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NewsroomAPI.ListPublishedArticles, {
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

NewsroomAPIClient.prototype.getPublishedArticleById = function getPublishedArticleById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NewsroomAPI.GetPublishedArticleById, {
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

NewsroomAPIClient.prototype.userActivity = function userActivity(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NewsroomAPI.UserActivity, {
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

NewsroomAPIClient.prototype.getNewsForUser = function getNewsForUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NewsroomAPI.GetNewsForUser, {
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

NewsroomAPIClient.prototype.storeNewsArticleImage = function storeNewsArticleImage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NewsroomAPI.StoreNewsArticleImage, {
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

NewsroomAPIClient.prototype.listImagesForNewsArticle = function listImagesForNewsArticle(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NewsroomAPI.ListImagesForNewsArticle, {
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

NewsroomAPIClient.prototype.uploadNewsArticleImage = function uploadNewsArticleImage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NewsroomAPI.UploadNewsArticleImage, {
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

NewsroomAPIClient.prototype.createClientArticle = function createClientArticle(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NewsroomAPI.CreateClientArticle, {
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

NewsroomAPIClient.prototype.updateClientArticle = function updateClientArticle(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NewsroomAPI.UpdateClientArticle, {
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

NewsroomAPIClient.prototype.listClientArticles = function listClientArticles(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NewsroomAPI.ListClientArticles, {
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

NewsroomAPIClient.prototype.createPublishedClientArticle = function createPublishedClientArticle(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NewsroomAPI.CreatePublishedClientArticle, {
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

NewsroomAPIClient.prototype.getPublishedClientArticleById = function getPublishedClientArticleById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NewsroomAPI.GetPublishedClientArticleById, {
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

NewsroomAPIClient.prototype.storeClientArticleImage = function storeClientArticleImage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NewsroomAPI.StoreClientArticleImage, {
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

NewsroomAPIClient.prototype.listImagesForClientArticle = function listImagesForClientArticle(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NewsroomAPI.ListImagesForClientArticle, {
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

NewsroomAPIClient.prototype.uploadClientArticleImage = function uploadClientArticleImage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NewsroomAPI.UploadClientArticleImage, {
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

NewsroomAPIClient.prototype.listPublishedClientArticles = function listPublishedClientArticles(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NewsroomAPI.ListPublishedClientArticles, {
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

exports.NewsroomAPIClient = NewsroomAPIClient;

