// package: services.pbx.v1
// file: services/pbx/v1/service.proto

var services_pbx_v1_service_pb = require("../../../services/pbx/v1/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var PBXService = (function () {
  function PBXService() {}
  PBXService.serviceName = "services.pbx.v1.PBXService";
  return PBXService;
}());

PBXService.QueryPbxUsers = {
  methodName: "QueryPbxUsers",
  service: PBXService,
  requestStream: false,
  responseStream: false,
  requestType: services_pbx_v1_service_pb.QueryPbxUsersRequest,
  responseType: services_pbx_v1_service_pb.QueryPbxUsersResponse
};

PBXService.QueryRingGroups = {
  methodName: "QueryRingGroups",
  service: PBXService,
  requestStream: false,
  responseStream: false,
  requestType: services_pbx_v1_service_pb.QueryRingGroupsRequest,
  responseType: services_pbx_v1_service_pb.QueryRingGroupsResponse
};

PBXService.UpdatePbxUser = {
  methodName: "UpdatePbxUser",
  service: PBXService,
  requestStream: false,
  responseStream: false,
  requestType: services_pbx_v1_service_pb.UpdatePbxUserRequest,
  responseType: services_pbx_v1_service_pb.UpdatePbxUserResponse
};

PBXService.UpdateRingGroup = {
  methodName: "UpdateRingGroup",
  service: PBXService,
  requestStream: false,
  responseStream: false,
  requestType: services_pbx_v1_service_pb.UpdateRingGroupRequest,
  responseType: services_pbx_v1_service_pb.UpdateRingGroupResponse
};

PBXService.CreateRingGroup = {
  methodName: "CreateRingGroup",
  service: PBXService,
  requestStream: false,
  responseStream: false,
  requestType: services_pbx_v1_service_pb.CreateRingGroupRequest,
  responseType: services_pbx_v1_service_pb.CreateRingGroupResponse
};

PBXService.DeleteRingGroup = {
  methodName: "DeleteRingGroup",
  service: PBXService,
  requestStream: false,
  responseStream: false,
  requestType: services_pbx_v1_service_pb.DeleteRingGroupRequest,
  responseType: services_pbx_v1_service_pb.DeleteRingGroupResponse
};

PBXService.AssignRandomExtension = {
  methodName: "AssignRandomExtension",
  service: PBXService,
  requestStream: false,
  responseStream: false,
  requestType: services_pbx_v1_service_pb.AssignRandomExtensionRequest,
  responseType: services_pbx_v1_service_pb.AssignRandomExtensionResponse
};

exports.PBXService = PBXService;

function PBXServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

PBXServiceClient.prototype.queryPbxUsers = function queryPbxUsers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PBXService.QueryPbxUsers, {
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

PBXServiceClient.prototype.queryRingGroups = function queryRingGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PBXService.QueryRingGroups, {
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

PBXServiceClient.prototype.updatePbxUser = function updatePbxUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PBXService.UpdatePbxUser, {
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

PBXServiceClient.prototype.updateRingGroup = function updateRingGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PBXService.UpdateRingGroup, {
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

PBXServiceClient.prototype.createRingGroup = function createRingGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PBXService.CreateRingGroup, {
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

PBXServiceClient.prototype.deleteRingGroup = function deleteRingGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PBXService.DeleteRingGroup, {
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

PBXServiceClient.prototype.assignRandomExtension = function assignRandomExtension(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PBXService.AssignRandomExtension, {
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

exports.PBXServiceClient = PBXServiceClient;

