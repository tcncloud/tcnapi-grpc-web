// package: services.pbx.v2
// file: services/pbx/v2/service.proto

var services_pbx_v2_service_pb = require("../../../services/pbx/v2/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var PBXService = (function () {
  function PBXService() {}
  PBXService.serviceName = "services.pbx.v2.PBXService";
  return PBXService;
}());

PBXService.ListPBXUsers = {
  methodName: "ListPBXUsers",
  service: PBXService,
  requestStream: false,
  responseStream: false,
  requestType: services_pbx_v2_service_pb.ListPBXUsersRequest,
  responseType: services_pbx_v2_service_pb.ListPBXUsersResponse
};

PBXService.GetPBXUser = {
  methodName: "GetPBXUser",
  service: PBXService,
  requestStream: false,
  responseStream: false,
  requestType: services_pbx_v2_service_pb.GetPBXUserRequest,
  responseType: services_pbx_v2_service_pb.GetPBXUserResponse
};

PBXService.ListRingGroups = {
  methodName: "ListRingGroups",
  service: PBXService,
  requestStream: false,
  responseStream: false,
  requestType: services_pbx_v2_service_pb.ListRingGroupsRequest,
  responseType: services_pbx_v2_service_pb.ListRingGroupsResponse
};

PBXService.ListRingGroupsBySipId = {
  methodName: "ListRingGroupsBySipId",
  service: PBXService,
  requestStream: false,
  responseStream: false,
  requestType: services_pbx_v2_service_pb.ListRingGroupsBySipIdRequest,
  responseType: services_pbx_v2_service_pb.ListRingGroupsBySipIdResponse
};

PBXService.GetRingGroup = {
  methodName: "GetRingGroup",
  service: PBXService,
  requestStream: false,
  responseStream: false,
  requestType: services_pbx_v2_service_pb.GetRingGroupRequest,
  responseType: services_pbx_v2_service_pb.GetRingGroupResponse
};

PBXService.GetSIPAccount = {
  methodName: "GetSIPAccount",
  service: PBXService,
  requestStream: false,
  responseStream: false,
  requestType: services_pbx_v2_service_pb.GetSIPAccountRequest,
  responseType: services_pbx_v2_service_pb.GetSIPAccountResponse
};

PBXService.GetSIPAccountByUserId = {
  methodName: "GetSIPAccountByUserId",
  service: PBXService,
  requestStream: false,
  responseStream: false,
  requestType: services_pbx_v2_service_pb.GetSIPAccountByUserIdRequest,
  responseType: services_pbx_v2_service_pb.GetSIPAccountByUserIdResponse
};

PBXService.ListSIPAccounts = {
  methodName: "ListSIPAccounts",
  service: PBXService,
  requestStream: false,
  responseStream: false,
  requestType: services_pbx_v2_service_pb.ListSIPAccountsRequest,
  responseType: services_pbx_v2_service_pb.ListSIPAccountsResponse
};

PBXService.ListSIPAccountsByRingGroupId = {
  methodName: "ListSIPAccountsByRingGroupId",
  service: PBXService,
  requestStream: false,
  responseStream: false,
  requestType: services_pbx_v2_service_pb.ListSIPAccountsByRingGroupIdRequest,
  responseType: services_pbx_v2_service_pb.ListSIPAccountsByRingGroupIdResponse
};

PBXService.UpdateSIPAccount = {
  methodName: "UpdateSIPAccount",
  service: PBXService,
  requestStream: false,
  responseStream: false,
  requestType: services_pbx_v2_service_pb.UpdateSIPAccountRequest,
  responseType: services_pbx_v2_service_pb.UpdateSIPAccountResponse
};

PBXService.UpdateRingGroup = {
  methodName: "UpdateRingGroup",
  service: PBXService,
  requestStream: false,
  responseStream: false,
  requestType: services_pbx_v2_service_pb.UpdateRingGroupRequest,
  responseType: services_pbx_v2_service_pb.UpdateRingGroupResponse
};

PBXService.CreateRingGroup = {
  methodName: "CreateRingGroup",
  service: PBXService,
  requestStream: false,
  responseStream: false,
  requestType: services_pbx_v2_service_pb.CreateRingGroupRequest,
  responseType: services_pbx_v2_service_pb.CreateRingGroupResponse
};

PBXService.DeleteRingGroup = {
  methodName: "DeleteRingGroup",
  service: PBXService,
  requestStream: false,
  responseStream: false,
  requestType: services_pbx_v2_service_pb.DeleteRingGroupRequest,
  responseType: services_pbx_v2_service_pb.DeleteRingGroupResponse
};

PBXService.AssignRandomExtension = {
  methodName: "AssignRandomExtension",
  service: PBXService,
  requestStream: false,
  responseStream: false,
  requestType: services_pbx_v2_service_pb.AssignRandomExtensionRequest,
  responseType: services_pbx_v2_service_pb.AssignRandomExtensionResponse
};

exports.PBXService = PBXService;

function PBXServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

PBXServiceClient.prototype.listPBXUsers = function listPBXUsers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PBXService.ListPBXUsers, {
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

PBXServiceClient.prototype.getPBXUser = function getPBXUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PBXService.GetPBXUser, {
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

PBXServiceClient.prototype.listRingGroups = function listRingGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PBXService.ListRingGroups, {
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

PBXServiceClient.prototype.listRingGroupsBySipId = function listRingGroupsBySipId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PBXService.ListRingGroupsBySipId, {
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

PBXServiceClient.prototype.getRingGroup = function getRingGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PBXService.GetRingGroup, {
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

PBXServiceClient.prototype.getSIPAccount = function getSIPAccount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PBXService.GetSIPAccount, {
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

PBXServiceClient.prototype.getSIPAccountByUserId = function getSIPAccountByUserId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PBXService.GetSIPAccountByUserId, {
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

PBXServiceClient.prototype.listSIPAccounts = function listSIPAccounts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PBXService.ListSIPAccounts, {
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

PBXServiceClient.prototype.listSIPAccountsByRingGroupId = function listSIPAccountsByRingGroupId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PBXService.ListSIPAccountsByRingGroupId, {
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

PBXServiceClient.prototype.updateSIPAccount = function updateSIPAccount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PBXService.UpdateSIPAccount, {
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

