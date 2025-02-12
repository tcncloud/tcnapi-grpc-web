// package: api.v1alpha1.explorer
// file: api/v1alpha1/explorer/service.proto

var api_v1alpha1_explorer_service_pb = require("../../../api/v1alpha1/explorer/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ExplorerService = (function () {
  function ExplorerService() {}
  ExplorerService.serviceName = "api.v1alpha1.explorer.ExplorerService";
  return ExplorerService;
}());

ExplorerService.ListDatasourceSchemas = {
  methodName: "ListDatasourceSchemas",
  service: ExplorerService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_explorer_service_pb.ListDatasourceSchemasRequest,
  responseType: api_v1alpha1_explorer_service_pb.ListDatasourceSchemasResponse
};

ExplorerService.Query = {
  methodName: "Query",
  service: ExplorerService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_explorer_service_pb.QueryRequest,
  responseType: api_v1alpha1_explorer_service_pb.QueryResponse
};

ExplorerService.GetSupportQuery = {
  methodName: "GetSupportQuery",
  service: ExplorerService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_explorer_service_pb.SupportQueryRequest,
  responseType: api_v1alpha1_explorer_service_pb.SupportQueryResponse
};

ExplorerService.GetQueryExplain = {
  methodName: "GetQueryExplain",
  service: ExplorerService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_explorer_service_pb.QueryExplainRequest,
  responseType: api_v1alpha1_explorer_service_pb.QueryExplainResponse
};

ExplorerService.GetWeeksOfData = {
  methodName: "GetWeeksOfData",
  service: ExplorerService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_explorer_service_pb.GetWeeksOfDataRequest,
  responseType: api_v1alpha1_explorer_service_pb.GetWeeksOfDataResponse
};

exports.ExplorerService = ExplorerService;

function ExplorerServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ExplorerServiceClient.prototype.listDatasourceSchemas = function listDatasourceSchemas(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ExplorerService.ListDatasourceSchemas, {
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

ExplorerServiceClient.prototype.query = function query(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ExplorerService.Query, {
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

ExplorerServiceClient.prototype.getSupportQuery = function getSupportQuery(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ExplorerService.GetSupportQuery, {
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

ExplorerServiceClient.prototype.getQueryExplain = function getQueryExplain(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ExplorerService.GetQueryExplain, {
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

ExplorerServiceClient.prototype.getWeeksOfData = function getWeeksOfData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ExplorerService.GetWeeksOfData, {
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

exports.ExplorerServiceClient = ExplorerServiceClient;

