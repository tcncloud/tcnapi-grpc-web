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

NewsroomAPI.CreatePublishedNewsArticle = {
  methodName: "CreatePublishedNewsArticle",
  service: NewsroomAPI,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_newsroom_entities_pb.CreatePublishedNewsArticleRequest,
  responseType: api_v1alpha1_newsroom_entities_pb.CreatePublishedNewsArticleResponse
};

NewsroomAPI.ListPublishedNewsArticles = {
  methodName: "ListPublishedNewsArticles",
  service: NewsroomAPI,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_newsroom_entities_pb.ListPublishedNewsArticlesRequest,
  responseType: api_v1alpha1_newsroom_entities_pb.ListPublishedNewsArticlesResponse
};

NewsroomAPI.GetPublishedNewsArticleById = {
  methodName: "GetPublishedNewsArticleById",
  service: NewsroomAPI,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_newsroom_entities_pb.GetPublishedNewsArticleByIdRequest,
  responseType: api_v1alpha1_newsroom_entities_pb.GetPublishedNewsArticleByIdResponse
};

NewsroomAPI.UpdatePublishedNewsArticle = {
  methodName: "UpdatePublishedNewsArticle",
  service: NewsroomAPI,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_newsroom_entities_pb.UpdatePublishedNewsArticleRequest,
  responseType: api_v1alpha1_newsroom_entities_pb.UpdatePublishedNewsArticleResponse
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

NewsroomAPIClient.prototype.createPublishedNewsArticle = function createPublishedNewsArticle(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NewsroomAPI.CreatePublishedNewsArticle, {
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

NewsroomAPIClient.prototype.listPublishedNewsArticles = function listPublishedNewsArticles(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NewsroomAPI.ListPublishedNewsArticles, {
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

NewsroomAPIClient.prototype.getPublishedNewsArticleById = function getPublishedNewsArticleById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NewsroomAPI.GetPublishedNewsArticleById, {
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

NewsroomAPIClient.prototype.updatePublishedNewsArticle = function updatePublishedNewsArticle(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NewsroomAPI.UpdatePublishedNewsArticle, {
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

