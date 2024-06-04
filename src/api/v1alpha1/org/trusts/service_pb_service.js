// package: api.v1alpha1.org.trusts
// file: api/v1alpha1/org/trusts/service.proto

var api_v1alpha1_org_trusts_service_pb = require("../../../../api/v1alpha1/org/trusts/service_pb");
var api_v1alpha1_org_trusts_pb = require("../../../../api/v1alpha1/org/trusts_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var TrustsService = (function () {
  function TrustsService() {}
  TrustsService.serviceName = "api.v1alpha1.org.trusts.TrustsService";
  return TrustsService;
}());

TrustsService.CreateTrust = {
  methodName: "CreateTrust",
  service: TrustsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_trusts_pb.CreateTrustRequest,
  responseType: api_v1alpha1_org_trusts_pb.CreateTrustResponse
};

TrustsService.AcceptTrust = {
  methodName: "AcceptTrust",
  service: TrustsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_trusts_pb.AcceptTrustRequest,
  responseType: api_v1alpha1_org_trusts_pb.AcceptTrustResponse
};

TrustsService.RejectTrust = {
  methodName: "RejectTrust",
  service: TrustsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_trusts_pb.RejectTrustRequest,
  responseType: api_v1alpha1_org_trusts_pb.RejectTrustResponse
};

TrustsService.GetTrust = {
  methodName: "GetTrust",
  service: TrustsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_trusts_pb.GetTrustRequest,
  responseType: api_v1alpha1_org_trusts_pb.GetTrustResponse
};

TrustsService.ListIncomingTrusts = {
  methodName: "ListIncomingTrusts",
  service: TrustsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_trusts_pb.ListIncomingTrustsRequest,
  responseType: api_v1alpha1_org_trusts_pb.ListIncomingTrustsResponse
};

TrustsService.ListGivenTrusts = {
  methodName: "ListGivenTrusts",
  service: TrustsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_trusts_pb.ListGivenTrustsRequest,
  responseType: api_v1alpha1_org_trusts_pb.ListGivenTrustsResponse
};

TrustsService.ListAssignableTrusts = {
  methodName: "ListAssignableTrusts",
  service: TrustsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_trusts_pb.ListAssignableTrustsRequest,
  responseType: api_v1alpha1_org_trusts_pb.ListAssignableTrustsResponse
};

TrustsService.DeleteTrust = {
  methodName: "DeleteTrust",
  service: TrustsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_trusts_pb.DeleteTrustRequest,
  responseType: api_v1alpha1_org_trusts_pb.DeleteTrustResponse
};

TrustsService.AssignTrust = {
  methodName: "AssignTrust",
  service: TrustsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_trusts_pb.AssignTrustRequest,
  responseType: api_v1alpha1_org_trusts_pb.AssignTrustResponse
};

TrustsService.UnassignTrust = {
  methodName: "UnassignTrust",
  service: TrustsService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_trusts_pb.UnassignTrustRequest,
  responseType: api_v1alpha1_org_trusts_pb.UnassignTrustResponse
};

exports.TrustsService = TrustsService;

function TrustsServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

TrustsServiceClient.prototype.createTrust = function createTrust(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TrustsService.CreateTrust, {
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

TrustsServiceClient.prototype.acceptTrust = function acceptTrust(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TrustsService.AcceptTrust, {
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

TrustsServiceClient.prototype.rejectTrust = function rejectTrust(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TrustsService.RejectTrust, {
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

TrustsServiceClient.prototype.getTrust = function getTrust(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TrustsService.GetTrust, {
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

TrustsServiceClient.prototype.listIncomingTrusts = function listIncomingTrusts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TrustsService.ListIncomingTrusts, {
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

TrustsServiceClient.prototype.listGivenTrusts = function listGivenTrusts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TrustsService.ListGivenTrusts, {
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

TrustsServiceClient.prototype.listAssignableTrusts = function listAssignableTrusts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TrustsService.ListAssignableTrusts, {
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

TrustsServiceClient.prototype.deleteTrust = function deleteTrust(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TrustsService.DeleteTrust, {
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

TrustsServiceClient.prototype.assignTrust = function assignTrust(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TrustsService.AssignTrust, {
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

TrustsServiceClient.prototype.unassignTrust = function unassignTrust(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TrustsService.UnassignTrust, {
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

exports.TrustsServiceClient = TrustsServiceClient;

