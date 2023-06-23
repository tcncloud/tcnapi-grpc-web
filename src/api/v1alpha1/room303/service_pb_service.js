// package: api.v1alpha1.room303
// file: api/v1alpha1/room303/service.proto

var api_v1alpha1_room303_service_pb = require("../../../api/v1alpha1/room303/service_pb");
var api_commons_room303_pb = require("../../../api/commons/room303_pb");
var api_v1alpha1_room303_member_pb = require("../../../api/v1alpha1/room303/member_pb");
var api_v1alpha1_room303_message_pb = require("../../../api/v1alpha1/room303/message_pb");
var api_v1alpha1_room303_room_pb = require("../../../api/v1alpha1/room303/room_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Room303API = (function () {
  function Room303API() {}
  Room303API.serviceName = "api.v1alpha1.room303.Room303API";
  return Room303API;
}());

Room303API.AddRoomMember = {
  methodName: "AddRoomMember",
  service: Room303API,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_room303_member_pb.AddRoomMemberRequest,
  responseType: api_commons_room303_pb.Member
};

Room303API.RemoveRoomMember = {
  methodName: "RemoveRoomMember",
  service: Room303API,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_room303_member_pb.RemoveRoomMemberRequest,
  responseType: api_v1alpha1_room303_member_pb.RemoveRoomMemberResponse
};

Room303API.ListRoomMembers = {
  methodName: "ListRoomMembers",
  service: Room303API,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_room303_member_pb.ListRoomMembersRequest,
  responseType: api_v1alpha1_room303_member_pb.ListRoomMembersResponse
};

Room303API.SetAdminForRoomMember = {
  methodName: "SetAdminForRoomMember",
  service: Room303API,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_room303_member_pb.SetAdminForRoomMemberRequest,
  responseType: api_v1alpha1_room303_member_pb.SetAdminForRoomMemberResponse
};

Room303API.JoinRoom = {
  methodName: "JoinRoom",
  service: Room303API,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_room303_member_pb.JoinRoomRequest,
  responseType: api_commons_room303_pb.Room
};

Room303API.GetRoomMember = {
  methodName: "GetRoomMember",
  service: Room303API,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_room303_member_pb.GetRoomMemberRequest,
  responseType: api_commons_room303_pb.Member
};

Room303API.CreateMessage = {
  methodName: "CreateMessage",
  service: Room303API,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_room303_message_pb.CreateMessageRequest,
  responseType: api_v1alpha1_room303_message_pb.CreateMessageResponse
};

Room303API.EditMessage = {
  methodName: "EditMessage",
  service: Room303API,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_room303_message_pb.EditMessageRequest,
  responseType: api_v1alpha1_room303_message_pb.EditMessageResponse
};

Room303API.DeleteMessage = {
  methodName: "DeleteMessage",
  service: Room303API,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_room303_message_pb.DeleteMessageRequest,
  responseType: api_v1alpha1_room303_message_pb.DeleteMessageResponse
};

Room303API.GetMessages = {
  methodName: "GetMessages",
  service: Room303API,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_room303_message_pb.GetMessagesRequest,
  responseType: api_v1alpha1_room303_message_pb.GetMessagesResponse
};

Room303API.StreamMessageUpdates = {
  methodName: "StreamMessageUpdates",
  service: Room303API,
  requestStream: false,
  responseStream: true,
  requestType: api_v1alpha1_room303_message_pb.StreamMessageUpdatesRequest,
  responseType: api_v1alpha1_room303_message_pb.StreamMessageUpdatesResponse
};

Room303API.GetUnreadStats = {
  methodName: "GetUnreadStats",
  service: Room303API,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_room303_message_pb.GetUnreadStatsRequest,
  responseType: api_v1alpha1_room303_message_pb.GetUnreadStatsResponse
};

Room303API.MarkMessageRead = {
  methodName: "MarkMessageRead",
  service: Room303API,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_room303_message_pb.MarkMessageReadRequest,
  responseType: api_v1alpha1_room303_message_pb.MarkMessageReadResponse
};

Room303API.MarkAllMessagesRead = {
  methodName: "MarkAllMessagesRead",
  service: Room303API,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_room303_message_pb.MarkAllMessagesReadRequest,
  responseType: api_v1alpha1_room303_message_pb.MarkAllMessagesReadResponse
};

Room303API.BulkMarkMessageRead = {
  methodName: "BulkMarkMessageRead",
  service: Room303API,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_room303_message_pb.BulkMarkMessageReadRequest,
  responseType: api_v1alpha1_room303_message_pb.BulkMarkMessageReadResponse
};

Room303API.CreateRoom = {
  methodName: "CreateRoom",
  service: Room303API,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_room303_room_pb.CreateRoomRequest,
  responseType: api_commons_room303_pb.Room
};

Room303API.GetRoom = {
  methodName: "GetRoom",
  service: Room303API,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_room303_room_pb.GetRoomRequest,
  responseType: api_commons_room303_pb.Room
};

Room303API.ListAllRooms = {
  methodName: "ListAllRooms",
  service: Room303API,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_room303_room_pb.ListAllRoomsRequest,
  responseType: api_v1alpha1_room303_room_pb.ListRoomsResponse
};

Room303API.ListRoomsForMember = {
  methodName: "ListRoomsForMember",
  service: Room303API,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_room303_room_pb.ListRoomsForMemberRequest,
  responseType: api_v1alpha1_room303_room_pb.ListRoomsResponse
};

Room303API.ArchiveRoom = {
  methodName: "ArchiveRoom",
  service: Room303API,
  requestStream: false,
  responseStream: false,
  requestType: api_v1alpha1_room303_room_pb.ArchiveRoomRequest,
  responseType: api_commons_room303_pb.Room
};

Room303API.ListUsersByOrgId = {
  methodName: "ListUsersByOrgId",
  service: Room303API,
  requestStream: false,
  responseStream: true,
  requestType: api_v1alpha1_room303_room_pb.ListUsersByOrgIdRequest,
  responseType: api_v1alpha1_room303_room_pb.ListUsersByOrgIdResponse
};

exports.Room303API = Room303API;

function Room303APIClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

Room303APIClient.prototype.addRoomMember = function addRoomMember(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Room303API.AddRoomMember, {
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

Room303APIClient.prototype.removeRoomMember = function removeRoomMember(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Room303API.RemoveRoomMember, {
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

Room303APIClient.prototype.listRoomMembers = function listRoomMembers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Room303API.ListRoomMembers, {
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

Room303APIClient.prototype.setAdminForRoomMember = function setAdminForRoomMember(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Room303API.SetAdminForRoomMember, {
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

Room303APIClient.prototype.joinRoom = function joinRoom(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Room303API.JoinRoom, {
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

Room303APIClient.prototype.getRoomMember = function getRoomMember(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Room303API.GetRoomMember, {
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

Room303APIClient.prototype.createMessage = function createMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Room303API.CreateMessage, {
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

Room303APIClient.prototype.editMessage = function editMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Room303API.EditMessage, {
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

Room303APIClient.prototype.deleteMessage = function deleteMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Room303API.DeleteMessage, {
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

Room303APIClient.prototype.getMessages = function getMessages(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Room303API.GetMessages, {
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

Room303APIClient.prototype.streamMessageUpdates = function streamMessageUpdates(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Room303API.StreamMessageUpdates, {
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

Room303APIClient.prototype.getUnreadStats = function getUnreadStats(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Room303API.GetUnreadStats, {
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

Room303APIClient.prototype.markMessageRead = function markMessageRead(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Room303API.MarkMessageRead, {
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

Room303APIClient.prototype.markAllMessagesRead = function markAllMessagesRead(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Room303API.MarkAllMessagesRead, {
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

Room303APIClient.prototype.bulkMarkMessageRead = function bulkMarkMessageRead(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Room303API.BulkMarkMessageRead, {
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

Room303APIClient.prototype.createRoom = function createRoom(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Room303API.CreateRoom, {
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

Room303APIClient.prototype.getRoom = function getRoom(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Room303API.GetRoom, {
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

Room303APIClient.prototype.listAllRooms = function listAllRooms(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Room303API.ListAllRooms, {
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

Room303APIClient.prototype.listRoomsForMember = function listRoomsForMember(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Room303API.ListRoomsForMember, {
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

Room303APIClient.prototype.archiveRoom = function archiveRoom(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Room303API.ArchiveRoom, {
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

Room303APIClient.prototype.listUsersByOrgId = function listUsersByOrgId(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Room303API.ListUsersByOrgId, {
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

exports.Room303APIClient = Room303APIClient;

