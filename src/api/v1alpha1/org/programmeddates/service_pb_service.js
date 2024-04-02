// package: api.v1alpha1.org.programmeddates
// file: api/v1alpha1/org/programmeddates/service.proto

var api_v1alpha1_org_programmeddates_service_pb = require("../../../../api/v1alpha1/org/programmeddates/service_pb");
var api_v1alpha1_org_programmeddates_entities_pb = require("../../../../api/v1alpha1/org/programmeddates/entities_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ProgrammedDatesService = (function () {
  function ProgrammedDatesService() {}
  ProgrammedDatesService.serviceName = "api.v1alpha1.org.programmeddates.ProgrammedDatesService";
  return ProgrammedDatesService;
}());

ProgrammedDatesService.ListProgrammedDates = {
  methodName: "ListProgrammedDates",
  service: ProgrammedDatesService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_programmeddates_entities_pb.ListProgrammedDatesRequest,
  responseType: api_v1alpha1_org_programmeddates_entities_pb.ListProgrammedDatesResponse
};

ProgrammedDatesService.GetProgrammedDates = {
  methodName: "GetProgrammedDates",
  service: ProgrammedDatesService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_programmeddates_entities_pb.GetProgrammedDatesRequest,
  responseType: api_v1alpha1_org_programmeddates_entities_pb.GetProgrammedDatesResponse
};

ProgrammedDatesService.SetProgrammedDates = {
  methodName: "SetProgrammedDates",
  service: ProgrammedDatesService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_programmeddates_entities_pb.SetProgrammedDatesRequest,
  responseType: api_v1alpha1_org_programmeddates_entities_pb.SetProgrammedDatesResponse
};

ProgrammedDatesService.AddToProgrammedDates = {
  methodName: "AddToProgrammedDates",
  service: ProgrammedDatesService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_programmeddates_entities_pb.AddToProgrammedDatesRequest,
  responseType: api_v1alpha1_org_programmeddates_entities_pb.AddToProgrammedDatesResponse
};

ProgrammedDatesService.RemoveFromProgrammedDates = {
  methodName: "RemoveFromProgrammedDates",
  service: ProgrammedDatesService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_programmeddates_entities_pb.RemoveFromProgrammedDatesRequest,
  responseType: api_v1alpha1_org_programmeddates_entities_pb.RemoveFromProgrammedDatesResponse
};

ProgrammedDatesService.UpdateProgrammedDatesInfo = {
  methodName: "UpdateProgrammedDatesInfo",
  service: ProgrammedDatesService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_programmeddates_entities_pb.UpdateProgrammedDatesInfoRequest,
  responseType: api_v1alpha1_org_programmeddates_entities_pb.UpdateProgrammedDatesInfoResponse
};

ProgrammedDatesService.DeleteProgrammedDates = {
  methodName: "DeleteProgrammedDates",
  service: ProgrammedDatesService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_programmeddates_entities_pb.DeleteProgrammedDatesRequest,
  responseType: api_v1alpha1_org_programmeddates_entities_pb.DeleteProgrammedDatesResponse
};

ProgrammedDatesService.EvaluateProgrammedDates = {
  methodName: "EvaluateProgrammedDates",
  service: ProgrammedDatesService,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_org_programmeddates_entities_pb.EvaluateProgrammedDatesRequest,
  responseType: api_v1alpha1_org_programmeddates_entities_pb.EvaluateProgrammedDatesResponse
};

exports.ProgrammedDatesService = ProgrammedDatesService;

function ProgrammedDatesServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ProgrammedDatesServiceClient.prototype.listProgrammedDates = function listProgrammedDates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProgrammedDatesService.ListProgrammedDates, {
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

ProgrammedDatesServiceClient.prototype.getProgrammedDates = function getProgrammedDates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProgrammedDatesService.GetProgrammedDates, {
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

ProgrammedDatesServiceClient.prototype.setProgrammedDates = function setProgrammedDates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProgrammedDatesService.SetProgrammedDates, {
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

ProgrammedDatesServiceClient.prototype.addToProgrammedDates = function addToProgrammedDates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProgrammedDatesService.AddToProgrammedDates, {
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

ProgrammedDatesServiceClient.prototype.removeFromProgrammedDates = function removeFromProgrammedDates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProgrammedDatesService.RemoveFromProgrammedDates, {
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

ProgrammedDatesServiceClient.prototype.updateProgrammedDatesInfo = function updateProgrammedDatesInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProgrammedDatesService.UpdateProgrammedDatesInfo, {
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

ProgrammedDatesServiceClient.prototype.deleteProgrammedDates = function deleteProgrammedDates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProgrammedDatesService.DeleteProgrammedDates, {
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

ProgrammedDatesServiceClient.prototype.evaluateProgrammedDates = function evaluateProgrammedDates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProgrammedDatesService.EvaluateProgrammedDates, {
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

exports.ProgrammedDatesServiceClient = ProgrammedDatesServiceClient;

