// package: api.v1alpha1.bireportgenerator
// file: api/v1alpha1/bireportgenerator/service.proto

var api_v1alpha1_bireportgenerator_service_pb = require("../../../api/v1alpha1/bireportgenerator/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var BIReportGeneratorService = (function () {
  function BIReportGeneratorService() {}
  BIReportGeneratorService.serviceName = "api.v1alpha1.bireportgenerator.BIReportGeneratorService";
  return BIReportGeneratorService;
}());

BIReportGeneratorService.CreateReportJob = {
  methodName: "CreateReportJob",
  service: BIReportGeneratorService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_bireportgenerator_service_pb.CreateReportJobRequest,
  responseType: api_v1alpha1_bireportgenerator_service_pb.CreateReportJobResponse
};

BIReportGeneratorService.ListReportJobs = {
  methodName: "ListReportJobs",
  service: BIReportGeneratorService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_bireportgenerator_service_pb.ListReportJobsRequest,
  responseType: api_v1alpha1_bireportgenerator_service_pb.ListReportJobsResponse
};

BIReportGeneratorService.UpdateReportJob = {
  methodName: "UpdateReportJob",
  service: BIReportGeneratorService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_bireportgenerator_service_pb.UpdateReportJobRequest,
  responseType: api_v1alpha1_bireportgenerator_service_pb.UpdateReportJobResponse
};

BIReportGeneratorService.DeleteReportJob = {
  methodName: "DeleteReportJob",
  service: BIReportGeneratorService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_bireportgenerator_service_pb.DeleteReportJobRequest,
  responseType: api_v1alpha1_bireportgenerator_service_pb.DeleteReportJobResponse
};

BIReportGeneratorService.GetReportJob = {
  methodName: "GetReportJob",
  service: BIReportGeneratorService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_bireportgenerator_service_pb.GetReportJobRequest,
  responseType: api_v1alpha1_bireportgenerator_service_pb.GetReportJobResponse
};

BIReportGeneratorService.GenerateReport = {
  methodName: "GenerateReport",
  service: BIReportGeneratorService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_bireportgenerator_service_pb.GenerateReportRequest,
  responseType: api_v1alpha1_bireportgenerator_service_pb.GenerateReportResponse
};

BIReportGeneratorService.ListReportLogsStream = {
  methodName: "ListReportLogsStream",
  service: BIReportGeneratorService,
  requestStream: false,
  responseStream: true,
  requestType: api_v1alpha1_bireportgenerator_service_pb.ListReportLogsStreamRequest,
  responseType: api_v1alpha1_bireportgenerator_service_pb.ListReportLogsStreamResponse
};

BIReportGeneratorService.ListReportLogs = {
  methodName: "ListReportLogs",
  service: BIReportGeneratorService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_bireportgenerator_service_pb.ListReportLogsRequest,
  responseType: api_v1alpha1_bireportgenerator_service_pb.ListReportLogsResponse
};

exports.BIReportGeneratorService = BIReportGeneratorService;

function BIReportGeneratorServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

BIReportGeneratorServiceClient.prototype.createReportJob = function createReportJob(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BIReportGeneratorService.CreateReportJob, {
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

BIReportGeneratorServiceClient.prototype.listReportJobs = function listReportJobs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BIReportGeneratorService.ListReportJobs, {
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

BIReportGeneratorServiceClient.prototype.updateReportJob = function updateReportJob(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BIReportGeneratorService.UpdateReportJob, {
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

BIReportGeneratorServiceClient.prototype.deleteReportJob = function deleteReportJob(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BIReportGeneratorService.DeleteReportJob, {
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

BIReportGeneratorServiceClient.prototype.getReportJob = function getReportJob(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BIReportGeneratorService.GetReportJob, {
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

BIReportGeneratorServiceClient.prototype.generateReport = function generateReport(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BIReportGeneratorService.GenerateReport, {
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

BIReportGeneratorServiceClient.prototype.listReportLogsStream = function listReportLogsStream(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(BIReportGeneratorService.ListReportLogsStream, {
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

BIReportGeneratorServiceClient.prototype.listReportLogs = function listReportLogs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BIReportGeneratorService.ListReportLogs, {
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

exports.BIReportGeneratorServiceClient = BIReportGeneratorServiceClient;

