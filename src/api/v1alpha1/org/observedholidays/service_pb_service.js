// package: api.v1alpha1.org.observedholidays
// file: api/v1alpha1/org/observedholidays/service.proto

var api_v1alpha1_org_observedholidays_service_pb = require("../../../../api/v1alpha1/org/observedholidays/service_pb");
var api_v1alpha1_org_observedholidays_entities_pb = require("../../../../api/v1alpha1/org/observedholidays/entities_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ObservedHolidaysService = (function () {
  function ObservedHolidaysService() {}
  ObservedHolidaysService.serviceName = "api.v1alpha1.org.observedholidays.ObservedHolidaysService";
  return ObservedHolidaysService;
}());

ObservedHolidaysService.ListObservedHolidays = {
  methodName: "ListObservedHolidays",
  service: ObservedHolidaysService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_observedholidays_entities_pb.ListObservedHolidaysRequest,
  responseType: api_v1alpha1_org_observedholidays_entities_pb.ListObservedHolidaysResponse
};

ObservedHolidaysService.GetObservedHolidays = {
  methodName: "GetObservedHolidays",
  service: ObservedHolidaysService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_observedholidays_entities_pb.GetObservedHolidaysRequest,
  responseType: api_v1alpha1_org_observedholidays_entities_pb.GetObservedHolidaysResponse
};

ObservedHolidaysService.SetObservedHolidays = {
  methodName: "SetObservedHolidays",
  service: ObservedHolidaysService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_observedholidays_entities_pb.SetObservedHolidaysRequest,
  responseType: api_v1alpha1_org_observedholidays_entities_pb.SetObservedHolidaysResponse
};

ObservedHolidaysService.AddToObservedHolidays = {
  methodName: "AddToObservedHolidays",
  service: ObservedHolidaysService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_observedholidays_entities_pb.AddToObservedHolidaysRequest,
  responseType: api_v1alpha1_org_observedholidays_entities_pb.AddToObservedHolidaysResponse
};

ObservedHolidaysService.RemoveObservedHolidays = {
  methodName: "RemoveObservedHolidays",
  service: ObservedHolidaysService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_observedholidays_entities_pb.RemoveFromObservedHolidaysRequest,
  responseType: api_v1alpha1_org_observedholidays_entities_pb.RemoveFromObservedHolidaysResponse
};

ObservedHolidaysService.UpdateObservedHolidaysInfo = {
  methodName: "UpdateObservedHolidaysInfo",
  service: ObservedHolidaysService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_observedholidays_entities_pb.UpdateObservedHolidaysInfoRequest,
  responseType: api_v1alpha1_org_observedholidays_entities_pb.UpdateObservedHolidaysInfoResponse
};

ObservedHolidaysService.DeleteObservedHolidays = {
  methodName: "DeleteObservedHolidays",
  service: ObservedHolidaysService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_observedholidays_entities_pb.DeleteObservedHolidaysRequest,
  responseType: api_v1alpha1_org_observedholidays_entities_pb.DeleteObservedHolidaysResponse
};

ObservedHolidaysService.EvaluateObservedHolidays = {
  methodName: "EvaluateObservedHolidays",
  service: ObservedHolidaysService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_observedholidays_entities_pb.EvaluateObservedHolidaysRequest,
  responseType: api_v1alpha1_org_observedholidays_entities_pb.EvaluateObservedHolidaysResponse
};

exports.ObservedHolidaysService = ObservedHolidaysService;

function ObservedHolidaysServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ObservedHolidaysServiceClient.prototype.listObservedHolidays = function listObservedHolidays(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ObservedHolidaysService.ListObservedHolidays, {
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

ObservedHolidaysServiceClient.prototype.getObservedHolidays = function getObservedHolidays(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ObservedHolidaysService.GetObservedHolidays, {
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

ObservedHolidaysServiceClient.prototype.setObservedHolidays = function setObservedHolidays(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ObservedHolidaysService.SetObservedHolidays, {
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

ObservedHolidaysServiceClient.prototype.addToObservedHolidays = function addToObservedHolidays(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ObservedHolidaysService.AddToObservedHolidays, {
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

ObservedHolidaysServiceClient.prototype.removeObservedHolidays = function removeObservedHolidays(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ObservedHolidaysService.RemoveObservedHolidays, {
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

ObservedHolidaysServiceClient.prototype.updateObservedHolidaysInfo = function updateObservedHolidaysInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ObservedHolidaysService.UpdateObservedHolidaysInfo, {
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

ObservedHolidaysServiceClient.prototype.deleteObservedHolidays = function deleteObservedHolidays(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ObservedHolidaysService.DeleteObservedHolidays, {
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

ObservedHolidaysServiceClient.prototype.evaluateObservedHolidays = function evaluateObservedHolidays(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ObservedHolidaysService.EvaluateObservedHolidays, {
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

exports.ObservedHolidaysServiceClient = ObservedHolidaysServiceClient;

