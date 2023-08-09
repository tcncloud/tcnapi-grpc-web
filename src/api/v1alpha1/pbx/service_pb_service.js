// package: api.v1alpha1.pbx
// file: api/v1alpha1/pbx/service.proto

var api_v1alpha1_pbx_service_pb = require("../../../api/v1alpha1/pbx/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var PBX = (function () {
  function PBX() {}
  PBX.serviceName = "api.v1alpha1.pbx.PBX";
  return PBX;
}());

PBX.ListPbxUsers = {
  methodName: "ListPbxUsers",
  service: PBX,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_pbx_service_pb.ListPbxUsersRequest,
  responseType: api_v1alpha1_pbx_service_pb.ListPbxUsersResponse
};

PBX.ActivatePbxUser = {
  methodName: "ActivatePbxUser",
  service: PBX,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_pbx_service_pb.ActivatePbxUserRequest,
  responseType: api_v1alpha1_pbx_service_pb.ActivatePbxUserResponse
};

PBX.DeactivatePbxUser = {
  methodName: "DeactivatePbxUser",
  service: PBX,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_pbx_service_pb.DeactivatePbxUserRequest,
  responseType: api_v1alpha1_pbx_service_pb.DeactivatePbxUserResponse
};

PBX.UpdateUserExtension = {
  methodName: "UpdateUserExtension",
  service: PBX,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_pbx_service_pb.UpdateUserExtensionRequest,
  responseType: api_v1alpha1_pbx_service_pb.UpdateUserExtensionResponse
};

PBX.CreateRingGroup = {
  methodName: "CreateRingGroup",
  service: PBX,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_pbx_service_pb.CreateRingGroupRequest,
  responseType: api_v1alpha1_pbx_service_pb.CreateRingGroupResponse
};

PBX.ListRingGroups = {
  methodName: "ListRingGroups",
  service: PBX,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_pbx_service_pb.ListRingGroupsRequest,
  responseType: api_v1alpha1_pbx_service_pb.ListRingGroupsResponse
};

PBX.UpdateRingGroup = {
  methodName: "UpdateRingGroup",
  service: PBX,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_pbx_service_pb.UpdateRingGroupRequest,
  responseType: api_v1alpha1_pbx_service_pb.UpdateRingGroupResponse
};

PBX.AddUsersToRingGroup = {
  methodName: "AddUsersToRingGroup",
  service: PBX,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_pbx_service_pb.AddUsersToRingGroupRequest,
  responseType: api_v1alpha1_pbx_service_pb.AddUsersToRingGroupResponse
};

PBX.RemoveUsersFromRingGroup = {
  methodName: "RemoveUsersFromRingGroup",
  service: PBX,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_pbx_service_pb.RemoveUsersFromRingGroupRequest,
  responseType: api_v1alpha1_pbx_service_pb.RemoveUsersFromRingGroupResponse
};

PBX.DeleteRingGroup = {
  methodName: "DeleteRingGroup",
  service: PBX,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_pbx_service_pb.DeleteRingGroupRequest,
  responseType: api_v1alpha1_pbx_service_pb.DeleteRingGroupResponse
};

PBX.AssignRandomUserExtension = {
  methodName: "AssignRandomUserExtension",
  service: PBX,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_pbx_service_pb.AssignRandomUserExtensionRequest,
  responseType: api_v1alpha1_pbx_service_pb.AssignRandomUserExtensionResponse
};

PBX.AssignRandomGroupExtension = {
  methodName: "AssignRandomGroupExtension",
  service: PBX,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_pbx_service_pb.AssignRandomGroupExtensionRequest,
  responseType: api_v1alpha1_pbx_service_pb.AssignRandomGroupExtensionResponse
};

exports.PBX = PBX;

function PBXClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

PBXClient.prototype.listPbxUsers = function listPbxUsers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PBX.ListPbxUsers, {
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

PBXClient.prototype.activatePbxUser = function activatePbxUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PBX.ActivatePbxUser, {
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

PBXClient.prototype.deactivatePbxUser = function deactivatePbxUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PBX.DeactivatePbxUser, {
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

PBXClient.prototype.updateUserExtension = function updateUserExtension(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PBX.UpdateUserExtension, {
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

PBXClient.prototype.createRingGroup = function createRingGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PBX.CreateRingGroup, {
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

PBXClient.prototype.listRingGroups = function listRingGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PBX.ListRingGroups, {
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

PBXClient.prototype.updateRingGroup = function updateRingGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PBX.UpdateRingGroup, {
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

PBXClient.prototype.addUsersToRingGroup = function addUsersToRingGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PBX.AddUsersToRingGroup, {
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

PBXClient.prototype.removeUsersFromRingGroup = function removeUsersFromRingGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PBX.RemoveUsersFromRingGroup, {
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

PBXClient.prototype.deleteRingGroup = function deleteRingGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PBX.DeleteRingGroup, {
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

PBXClient.prototype.assignRandomUserExtension = function assignRandomUserExtension(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PBX.AssignRandomUserExtension, {
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

PBXClient.prototype.assignRandomGroupExtension = function assignRandomGroupExtension(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PBX.AssignRandomGroupExtension, {
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

exports.PBXClient = PBXClient;

