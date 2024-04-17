// package: api.v1alpha1.org.businesshours
// file: api/v1alpha1/org/businesshours/service.proto

var api_v1alpha1_org_businesshours_service_pb = require("../../../../api/v1alpha1/org/businesshours/service_pb");
var api_v1alpha1_org_businesshours_entities_pb = require("../../../../api/v1alpha1/org/businesshours/entities_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var BusinessHoursService = (function () {
  function BusinessHoursService() {}
  BusinessHoursService.serviceName = "api.v1alpha1.org.businesshours.BusinessHoursService";
  return BusinessHoursService;
}());

BusinessHoursService.ListBusinessHours = {
  methodName: "ListBusinessHours",
  service: BusinessHoursService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_businesshours_entities_pb.ListBusinessHoursRequest,
  responseType: api_v1alpha1_org_businesshours_entities_pb.ListBusinessHoursResponse
};

BusinessHoursService.GetBusinessHours = {
  methodName: "GetBusinessHours",
  service: BusinessHoursService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_businesshours_entities_pb.GetBusinessHoursRequest,
  responseType: api_v1alpha1_org_businesshours_entities_pb.GetBusinessHoursResponse
};

BusinessHoursService.SetBusinessHours = {
  methodName: "SetBusinessHours",
  service: BusinessHoursService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_businesshours_entities_pb.SetBusinessHoursRequest,
  responseType: api_v1alpha1_org_businesshours_entities_pb.SetBusinessHoursResponse
};

BusinessHoursService.AddIntervalToBusinessHours = {
  methodName: "AddIntervalToBusinessHours",
  service: BusinessHoursService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_businesshours_entities_pb.AddIntervalToBusinessHoursRequest,
  responseType: api_v1alpha1_org_businesshours_entities_pb.AddIntervalToBusinessHoursResponse
};

BusinessHoursService.RemoveIntervalFromBusinessHours = {
  methodName: "RemoveIntervalFromBusinessHours",
  service: BusinessHoursService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_businesshours_entities_pb.RemoveIntervalFromBusinessHoursRequest,
  responseType: api_v1alpha1_org_businesshours_entities_pb.RemoveIntervalFromBusinessHoursResponse
};

BusinessHoursService.UpdateBusinessHoursInfo = {
  methodName: "UpdateBusinessHoursInfo",
  service: BusinessHoursService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_businesshours_entities_pb.UpdateBusinessHoursInfoRequest,
  responseType: api_v1alpha1_org_businesshours_entities_pb.UpdateBusinessHoursInfoResponse
};

BusinessHoursService.DeleteBusinessHours = {
  methodName: "DeleteBusinessHours",
  service: BusinessHoursService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_businesshours_entities_pb.DeleteBusinessHoursRequest,
  responseType: api_v1alpha1_org_businesshours_entities_pb.DeleteBusinessHoursResponse
};

BusinessHoursService.EvaluateBusinessHours = {
  methodName: "EvaluateBusinessHours",
  service: BusinessHoursService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_businesshours_entities_pb.EvaluateBusinessHoursRequest,
  responseType: api_v1alpha1_org_businesshours_entities_pb.EvaluateBusinessHoursResponse
};

exports.BusinessHoursService = BusinessHoursService;

function BusinessHoursServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

BusinessHoursServiceClient.prototype.listBusinessHours = function listBusinessHours(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BusinessHoursService.ListBusinessHours, {
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

BusinessHoursServiceClient.prototype.getBusinessHours = function getBusinessHours(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BusinessHoursService.GetBusinessHours, {
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

BusinessHoursServiceClient.prototype.setBusinessHours = function setBusinessHours(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BusinessHoursService.SetBusinessHours, {
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

BusinessHoursServiceClient.prototype.addIntervalToBusinessHours = function addIntervalToBusinessHours(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BusinessHoursService.AddIntervalToBusinessHours, {
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

BusinessHoursServiceClient.prototype.removeIntervalFromBusinessHours = function removeIntervalFromBusinessHours(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BusinessHoursService.RemoveIntervalFromBusinessHours, {
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

BusinessHoursServiceClient.prototype.updateBusinessHoursInfo = function updateBusinessHoursInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BusinessHoursService.UpdateBusinessHoursInfo, {
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

BusinessHoursServiceClient.prototype.deleteBusinessHours = function deleteBusinessHours(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BusinessHoursService.DeleteBusinessHours, {
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

BusinessHoursServiceClient.prototype.evaluateBusinessHours = function evaluateBusinessHours(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BusinessHoursService.EvaluateBusinessHours, {
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

exports.BusinessHoursServiceClient = BusinessHoursServiceClient;

